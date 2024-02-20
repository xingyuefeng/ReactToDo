import React, { useState, useEffect } from 'react'
import type { TodoListProps, ContentType } from './interface'
import Add from './Add'
import List from './List'
import Footer from './Footer'
import useSelections from '../../hooks/useSelections'

const TodoList: React.FC<TodoListProps> = (props) => {
  const { defaultData = [], onListChange, allChecked } = props

  const [listData, setListData] = useState(defaultData)

  const { selected, select, selectAll, unSelectAll, isSelected } = useSelections(
    listData,
    allChecked
  )

  useEffect(() => {
    onListChange?.(listData, selected)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listData.join(''),selected.join('') ])


  // item 点击事件 获取当前点击内容
  const handleItemClick = (data: ContentType[]) => {
    select(data)
  }

  // 完成所有
  const closeAllCompleted = () => {
    if (listData.length === selected.length) {
      alert('没有未完成的')
      return
    }
    selectAll()
  }

  // 清除已完成
  const clearCompleted = () => {
    if (selected.length <= 0) {
      alert('没有已完成的')
      return
    }
    unSelectAll()
    const newList = listData.filter((content) => {
      if (!selected.includes(content)) {
        return content
      } else {
        return null
      }
    })

    setListData(newList)
  }

  // 添加待办事项
  const addList = (content: ContentType) => {
    setListData(listData.concat(content))
  }

  return (
    <div className='text-sm  '>
      {/* 添加待办 */}
      <Add addList={addList}  listData={listData} />
      <List
        onClick={handleItemClick}
        listData={listData}
        isSelected={isSelected}
      />
      <Footer
        closeAllCompleted={closeAllCompleted}
        clearCompleted={clearCompleted}
        left={listData.length - selected.length}
        showFooter={listData.length > 0}
      />
    </div>
  )
}

export default TodoList
