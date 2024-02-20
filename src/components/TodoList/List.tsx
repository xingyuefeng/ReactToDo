import React from 'react'
import Item from './Item'
import type { ListProps } from './interface'

const List: React.FC<ListProps> = (props) => {
  const { listData = [], onClick, isSelected } = props
  return (
    <div className='mt-6 shadow-xl'>
      {listData.map((itm) => (
        <Item
          key={itm}
          title={itm}
          onClick={onClick}
          checked={isSelected(itm) as unknown as boolean}
        />
      ))}
    </div>
  )
}
export default List
