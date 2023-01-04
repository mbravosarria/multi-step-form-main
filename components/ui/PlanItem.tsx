import React from 'react'
import Image from 'next/image'

type Props = {
  name: string
  image: string
  monthly: number
  yearly: number
  timeInterval: string
  selected: string
}

function PlanItem({
  name,
  image,
  monthly,
  yearly,
  timeInterval,
  selected,
}: Props) {
  return (
    <>
      <div
        className={`flex flex-row space-x-4 md:space-x-0 md:flex-col border border-neutral-cool_gray rounded-md p-2 md:p-3 hover:cursor-pointer ${
          selected === name &&
          'border-primary-purplish_blue bg-neutral-magnolia'
        }`}
      >
        <div className="flex relative w-10 h-10 md:mb-8">
          <Image src={image} alt={name} layout="fill" />
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-primary-marine_blue">{name}</h2>
          <p className="text-neutral-cool_gray">
            ${timeInterval === 'mo' ? monthly : yearly}/{timeInterval}
          </p>
          {timeInterval !== 'mo' && (
            <p className="text-sm text-primary-marine_blue">2 months free</p>
          )}
        </div>
      </div>
    </>
  )
}

export default PlanItem
