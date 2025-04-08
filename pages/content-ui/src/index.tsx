import { createRoot } from 'react-dom/client'
import App from '@src/App'
// @ts-expect-error Because file doesn't exist before build
import tailwindcssOutput from '../dist/tailwind-output.css?inline'

function isExtensionMounted() {
  return document.getElementById('chrome-extension-mynaportal-helper')
}

function mountExtensionUI() {
  if (isExtensionMounted()) return

  // TODO: ここでlang属性を取得する
  // const firstDiv = document.body.querySelector('div')
  // const lang = firstDiv ? firstDiv.getAttribute('lang') || 'ja' : 'ja'

  const root = document.createElement('div')
  root.id = 'chrome-extension-mynaportal-helper'

  document.body.append(root)

  const rootIntoShadow = document.createElement('div')
  rootIntoShadow.id = 'shadow-root'

  const shadowRoot = root.attachShadow({ mode: 'open' })

  if (navigator.userAgent.includes('Firefox')) {
    /**
     * In the firefox environment, adoptedStyleSheets cannot be used due to the bug
     * @url https://bugzilla.mozilla.org/show_bug.cgi?id=1770592
     *
     * Injecting styles into the document, this may cause style conflicts with the host page
     */
    const styleElement = document.createElement('style')
    styleElement.innerHTML = tailwindcssOutput
    shadowRoot.appendChild(styleElement)
  } else {
    /** Inject styles into shadow dom */
    const globalStyleSheet = new CSSStyleSheet()
    globalStyleSheet.replaceSync(tailwindcssOutput)
    shadowRoot.adoptedStyleSheets = [globalStyleSheet]
  }

  shadowRoot.appendChild(rootIntoShadow)

  createRoot(rootIntoShadow).render(<App />)
}

/**
 * 拡張機能のUIをマウントする
 */
mountExtensionUI()

const observer = new MutationObserver((mutations) => {
  const significantChanges = mutations.some(
    (mutation) =>
      mutation.type === 'childList' &&
      (mutation.target === document.body ||
        (mutation.target as Element).id === 'app' ||
        (mutation.target as Element).id === 'root'),
  )

  if (significantChanges || !isExtensionMounted()) {
    setTimeout(mountExtensionUI, 300)
  }
})

/**
 * DOMの変更を監視
 */
observer.observe(document.body, {
  childList: true,
  subtree: true,
})

/**
 * popstateイベントとhashchangeイベントを監視
 */
window.addEventListener('popstate', () => setTimeout(mountExtensionUI, 300))
window.addEventListener('hashchange', () => setTimeout(mountExtensionUI, 300))

/**
 * 定期的に拡張機能のUIがマウントされているか確認
 */
const checkInterval = setInterval(() => {
  if (!isExtensionMounted()) {
    mountExtensionUI()
  }
}, 3000)

/**
 * ページがアンロードされるときに、MutationObserverを停止し、定期チェックをクリア
 */
window.addEventListener('unload', () => {
  observer.disconnect()
  clearInterval(checkInterval)
})
