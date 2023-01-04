import React, { ChangeEventHandler } from 'react'

type Props = {
  name: string
  description: string
  price: number
  timeInterval: string
  checked: boolean
  onChange: ChangeEventHandler
}

function AddOnItem({
  name,
  description,
  price,
  timeInterval,
  checked,
  onChange,
}: Props) {
  return (
    <>
      <div className="flex flex-row items-center border p-3 border-neutral-cool_gray rounded-lg">
        <div className="w-1/12">
          <input
            type="checkbox"
            name={name}
            id={name}
            onChange={onChange}
            checked={checked}
            className="accent-primary-purplish_blue"
          />
        </div>
        <div className="flex flex-col w-10/12">
          <h2 className="text-primary-marine_blue font-bold text-xs md:text-base">
            {name}
          </h2>
          <p className="text-neutral-cool_gray text-xs md:text-base">
            {description}
          </p>
        </div>
        <div className="w-1/12 flex justify-end text-primary-purplish_blue text-xs md:text-base">
          ${price}/{timeInterval}
        </div>
      </div>
    </>
  )
}

export default AddOnItem
