type Props = {
  onClick: () => void
}

export const EscCloseButton = (props: Props) => {
  return (
    <div className="flex items-center ml-2 cursor-pointer" onClick={props.onClick}>
      <kbd className="px-2 py-1 rounded border border-gray-200 bg-gray-50 text-xs text-gray-500 shadow-sm">esc</kbd>
    </div>
  )
}
