import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { usePlans } from '../../contexts/plans/plan.context'

const AddOnItem = dynamic(() => import('../ui/AddOnItem'))

function AddOns() {
  const { timeInterval, addOns, setAddOns } = usePlans()

  const onChange = (name: string) => {
    setAddOns(name)
  }

  return (
    <>
      <div className="flex flex-col">
        <h1 className="mb-2 text-2xl font-bold text-primary-marine_blue">
          Pick add-ons
        </h1>
        <p className="mb-6 text-neutral-cool_gray">
          Add-ons help enhance your gaming experience.
        </p>
        {addOns.map((item) => (
          <div className="mb-4" key={item.name}>
            <AddOnItem
              name={item.name}
              description={item.description}
              price={timeInterval === 'mo' ? item.monthly : item.yearly}
              timeInterval={timeInterval}
              checked={item.selected}
              onChange={() => onChange(item.name)}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default AddOns
