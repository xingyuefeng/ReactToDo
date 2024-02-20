
export type ContentType = any


export interface ListItem{
  title?: ContentType
  showBorder?: boolean
  showRounded?: boolean
  onClick?: (data: ContentType) => void
  checked?: boolean
  children?: React.ReactNode
}

export interface TodoListProps {
  defaultData?: ContentType[]
  allChecked?: ContentType[]
  onListChange?: (list: ContentType[], checked: ContentType[]) => void
}

export interface ListProps {
  listData: ContentType[]
  onClick: (data: ContentType[]) => void
  isSelected: (data: ContentType[]) => void
  checked?: boolean
}


export interface FooterProps {
  left: number
  closeAllCompleted: () => void
  clearCompleted: () => void
  showFooter: boolean
}

export interface AddProps {
  addList: (content: ContentType) => void
  listData: ContentType[]

}