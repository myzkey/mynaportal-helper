// eslint-disable-next-line import-x/no-named-as-default
import clsx from 'clsx'

export const ClockIcon = (props: { className?: string }) => {
  return (
    <svg
      className={clsx('w-4 h-4 mr-2 text-gray-500', props.className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}
