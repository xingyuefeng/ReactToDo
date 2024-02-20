import { useState } from 'react'

import Layout from './components/Layout'
import TodoList from './components/TodoList'



function App() {
  // 选中数据
  const [allChecked] = useState(['学习'])
  // 列表数据
  const data = ['学习', '看电影', '听歌']

  // 列表变动监测的数据
  // list: 列表数据
  // checked: 已完成数据
  const onListChange = (list: string[], checked: string[]) => {
    console.log('列表数据:',list)
    console.log('已完成数据:',checked)
  }

  return (
    <Layout title="待办事项">
      <TodoList defaultData={data} allChecked={allChecked} onListChange={onListChange} />
    </Layout>
  )
}

export default App
