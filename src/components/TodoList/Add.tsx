import React, { useState, useRef } from 'react'
import Item from './Item'
import type { AddProps, ContentType } from './interface'

const Add: React.FC<AddProps> = (props) => {
  const { addList, listData } = props
  const [value, setValue] = useState<ContentType>('')

  const inputRef = useRef<HTMLInputElement>(null)

  const onKeyUp = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.code === 'Enter') {
      if (listData.includes(value)) {
        alert('已添加, 请重新添加')
        return
      } if (!value) {
        alert('请输入内容添加')
      } else {
        addList(value)
        setValue('')
        inputRef?.current?.blur()
      }
     
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <Item>
      <input
        type='text'
        className='w-full h-full border-0 focus:outline-none'
        placeholder='输入待办事项，按回车键添加...'
        onKeyUp={onKeyUp}
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
    </Item>
  )
}
export default Add
