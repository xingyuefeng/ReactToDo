import React from 'react'
import classNames from 'classnames'

interface RadioProps {
  checked?: boolean
}

const Radio: React.FC<RadioProps>= (props) => {
  const { checked } = props
  const radioClass = classNames('w-5 h-5 leading-5 text-white text-center   rounded-full inline-block', {
    'border': !checked,
    'bg-blue-500': checked,
  })

  return (
    <div className={radioClass}>
      ✓
    </div>
  )
}

export default Radio