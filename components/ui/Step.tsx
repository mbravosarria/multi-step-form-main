import React from 'react'
import { useSteps } from '../../contexts/steps/step.context'

type Props = {
  id: Number
  text: String
}

function Step(step: Props) {
  const { selectedStep } = useSteps()

  return (
    <div className="flex flex-row justify-around w-full">
      <div
        className={`flex items-center justify-center w-10 h-10 md:w-9 md:h-9 border rounded-full hover:shadow-sm hover:shadow-primary-light_blue hover:border-primary-light_blue ${
          selectedStep === step.id || (step.id === 4 && selectedStep === 5)
            ? 'border-primary-light_blue bg-primary-light_blue'
            : 'text-neutral-white border-neutral-white'
        }`}
      >
        {step.id.toString()}
      </div>
      <div className="hidden md:flex w-3/5 flex-col">
        <p className="text-neutral-cool_gray text-xs">
          Step {step.id.toString()}
        </p>
        <p className="text-neutral-white uppercase text-sm">{step.text}</p>
      </div>
    </div>
  )
}

export default Step
