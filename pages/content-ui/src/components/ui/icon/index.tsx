import { DownArrowIcon } from './down-arrow-icon'
import { UpArrowIcon } from './up-arrow-icon'
import { SearchIcon } from './search-icon'
import { XIcon } from './x-icon'
import { ClockIcon } from './clock-icon'

type Props = {
  name: string
  className?: string
}

const iconMap = {
  'down-arrow': DownArrowIcon,
  'up-arrow': UpArrowIcon,
  search: SearchIcon,
  x: XIcon,
  clock: ClockIcon,
}

export const Icon = (props: Props) => {
  const { name, className } = props
  const IconComponent = iconMap[name as keyof typeof iconMap]

  if (!IconComponent) {
    return null
  }

  return <IconComponent className={className} />
}
