import React from 'react'
import classNames from 'classnames'
import type { ListItem } from './interface'
import Radio from '../Radio'

const Item: React.FC<ListItem> = (props) => {
  const { title, showBorder = true, onClick, checked, children } = props
  const itemClass = classNames(
    'flex flex-row bg-white items-center h-12 cursor-default',
    {
      'border-slate-100': showBorder,
      'border-b': showBorder,
      // 'rounded-lg': showRounded,
    }
  )

  const textClass = classNames('flex-1', {
    'text-gray-200': checked
  })
  const handleClick = () => {
    // 完成的 不需要执行
    if (checked) return
    onClick?.(title)
  }



  return (
    <div className={itemClass} onClick={ handleClick}>
      <div className='flex-none w-14 text-center '>
        <Radio checked={checked} />
      </div>
      {
        children ? children : <div className={textClass}>{title}</div>
      }
      
    </div>
  )
}

export default Item
