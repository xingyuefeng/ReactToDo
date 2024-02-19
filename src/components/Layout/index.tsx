import React from 'react'

interface LayoutProps {
  children: React.ReactNode
  title: string
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { title, children } = props
  return (
    <div className='bg-slate-50 h-screen'>
      <div className='h-64 ml-1/3 bg-gradient-to-r from-cyan-500 to-blue-500  text-white text-3xl	'>
        <div className='w-1/3 mx-auto pt-16  '>{title}</div>
      </div>
      <div className='w-1/3 mx-auto -mt-28 '>{children}</div>
    </div>
  )
}

export default Layout
