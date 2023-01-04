import React, { MouseEventHandler } from 'react'

type Props = {
  text: string
  type: string
  onClick: MouseEventHandler
}

function AppButton({ text, type, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center px-4 py-2 rounded-md hover:cursor-pointer ${
        type === 'next' &&
        'bg-primary-marine_blue shadow-sm shadow-primary-marine_blue'
      } ${
        type === 'confirm' &&
        'bg-primary-purplish_blue shadow-sm shadow-primary-purplish_blue'
      } ${type === 'back' && ''}`}
    >
      <p
        className={`uppercase ${
          type === 'back' ? 'text-neutral-cool_gray' : 'text-neutral-white'
        } text-sm`}
      >
        {text}
      </p>
    </div>
  )
}

export default AppButton
