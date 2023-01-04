import React from 'react'
import dynamic from 'next/dynamic'
import { useSteps } from '../contexts/steps/step.context'

const AddOns = dynamic(() => import('../components/steps/AddOns'))
const SelectPlan = dynamic(() => import('../components/steps/SelectPlan'))
const Summary = dynamic(() => import('../components/steps/Summary'))
const ThankYou = dynamic(() => import('../components/steps/ThankYou'))
const YourInfo = dynamic(() => import('../components/steps/YourInfo'))

function StepContent() {
  const { selectedStep } = useSteps()

  const activeStep = () => {
    switch (selectedStep) {
      case 1:
        return <YourInfo />
        break
      case 2:
        return <SelectPlan />
        break
      case 3:
        return <AddOns />
        break
      case 4:
        return <Summary />
        break
      case 5:
        return <ThankYou />
        break

      default:
        return <YourInfo />
        break
    }
  }

  return (
    <>
      <div className="h-full">{activeStep()}</div>
    </>
  )
}

export default StepContent
