import React from 'react'
import type { FooterProps } from './interface'




const Footer: React.FC<FooterProps> = (props) => {

  const {  closeAllCompleted, clearCompleted, left, showFooter } = props;


  if (!showFooter) {
    return null
  }

  return (
    <div className="flex flex-row bg-white items-center justify-between h-12  cursor-default	 shadow-xl">
      <div className='ml-5'>{left === 0 ? '都完成了' : `还剩${left}个`}</div>
      <div onClick={closeAllCompleted}>完成所有</div>
      <div className='mr-5' onClick={clearCompleted}>清除已完成</div>
    </div>
  )
}
export default Footer