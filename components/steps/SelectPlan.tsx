import React, { useState } from 'react'
import Switch from 'react-switch'
import dynamic from 'next/dynamic'
import { usePlans } from '../../contexts/plans/plan.context'

const PlanItem = dynamic(() => import('../ui/PlanItem'))

const plans = [
  {
    name: 'Arcade',
    image: '/images/icon-arcade.svg',
    monthly: 9,
    yearly: 90,
  },
  {
    name: 'Advanced',
    image: '/images/icon-advanced.svg',
    monthly: 12,
    yearly: 120,
  },
  {
    name: 'Pro',
    image: '/images/icon-pro.svg',
    monthly: 15,
    yearly: 150,
  },
]

function SelectPlan() {
  const { plan, timeInterval, setTimeInterval, setPlan } = usePlans()

  const handleChange = () => {
    timeInterval === 'mo' ? setTimeInterval('yr') : setTimeInterval('mo')
    plans.map((item) => {
      item.name === plan.name &&
        setPlan({
          ...plan,
          price: timeInterval === 'mo' ? item.yearly : item.monthly,
        })
    })
  }

  return (
    <>
      <div className="flex flex-col">
        <h1 className="mb-2 text-2xl font-bold text-primary-marine_blue">
          Select your plan
        </h1>
        <p className="mb-6 text-neutral-cool_gray">
          You have the option of monthly or yearly billing.
        </p>
        <div className="flex flex-col md:flex-row w-full h-auto space-y-2 md:space-y-0 md:space-x-4">
          {plans.map((item) => (
            <div
              key={item.name}
              className="md:w-1/3"
              onClick={() =>
                setPlan({
                  name: item.name,
                  price: timeInterval === 'mo' ? item.monthly : item.yearly,
                })
              }
            >
              <PlanItem
                name={item.name}
                image={item.image}
                monthly={item.monthly}
                yearly={item.yearly}
                timeInterval={timeInterval}
                selected={plan.name}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center space-x-6 bg-neutral-magnolia py-4 mt-8">
          <p
            className={
              timeInterval === 'mo'
                ? 'text-primary-marine_blue'
                : 'text-neutral-cool_gray'
            }
          >
            Monthly
          </p>
          <Switch
            onChange={handleChange}
            checked={timeInterval === 'yr'}
            checkedIcon={false}
            uncheckedIcon={false}
            offColor="#02296A"
            onColor="#02296A"
          />
          <p
            className={
              timeInterval === 'yr'
                ? 'text-primary-marine_blue'
                : 'text-neutral-cool_gray'
            }
          >
            Yearly
          </p>
        </div>
      </div>
    </>
  )
}

export default SelectPlan
