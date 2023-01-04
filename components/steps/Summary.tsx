import React from 'react'
import { usePlans } from '../../contexts/plans/plan.context'
import { useSteps } from '../../contexts/steps/step.context'

function Summary() {
  const { plan, addOns, timeInterval } = usePlans()
  const { changeStep } = useSteps()

  const totalPrice = () => {
    let answer = plan.price

    addOns.map(
      (addOn) =>
        (answer += addOn.selected
          ? timeInterval === 'mo'
            ? addOn.monthly
            : addOn.yearly
          : 0)
    )

    return answer
  }

  return (
    <>
      <div className="flex flex-col w-full">
        <h1 className="mb-2 text-2xl font-bold text-primary-marine_blue">
          Finishing up
        </h1>
        <p className="mb-6 text-neutral-cool_gray">
          Double-check everything looks OK before confirming.
        </p>
        <div className="flex flex-col bg-neutral-magnolia p-4 rounded-md">
          <div
            className={`flex flex-row justify-between items-center ${
              addOns.findIndex((item) => item.selected) !== -1 &&
              'border-b border-neutral-cool_gray pb-4 mb-4'
            }`}
          >
            <div className="flex flex-col">
              <p className="text-lg text-primary-marine_blue font-bold">
                {plan.name}({timeInterval === 'mo' ? 'Monthly' : 'Yearly'})
              </p>
              <p
                className="hover:underline hover:text-primary-purplish_blue text-sm hover:cursor-pointer text-neutral-cool_gray"
                onClick={() => changeStep(2)}
              >
                Change
              </p>
            </div>
            <p className="text-lg text-primary-marine_blue font-bold">
              ${plan.price}/{timeInterval}
            </p>
          </div>
          <div className="flex flex-col">
            {addOns.map((addOn) => (
              <div key={addOn.name}>
                {addOn.selected && (
                  <div className="flex flex-row pb-2 justify-between">
                    <p className="text-neutral-cool_gray">{addOn.name}</p>
                    <p className="text-neutral-cool_gray">
                      ${timeInterval === 'mo' ? addOn.monthly : addOn.yearly}/
                      {timeInterval}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between p-4">
        <p className="text-neutral-cool_gray">
          Total (per {timeInterval === 'mo' ? 'month' : 'year'})
        </p>
        <p className="text-2xl text-primary-purplish_blue font-bold">
          ${totalPrice()}/{timeInterval}
        </p>
      </div>
    </>
  )
}

export default Summary
