import React, { useState } from 'react'
import dynamic from 'next/dynamic'

import { useSteps } from '../contexts/steps/step.context'

const Step = dynamic(() => import('../components/ui/Step'))

const steps = [
  {
    id: 1,
    text: 'your info',
  },
  {
    id: 2,
    text: 'select plan',
  },
  {
    id: 3,
    text: 'add-ons',
  },
  {
    id: 4,
    text: 'summary',
  },
]

function SideBar() {
  const { changeStep } = useSteps()

  return (
    <>
      <nav className="flex flex-row md:justify-start mt-10 w-auto space-x-4 md:space-x-0 md:w-full md:flex-col md:mt-6 md:space-y-6">
        {steps.map((step) => (
          <Step key={step.id} id={step.id} text={step.text} />
        ))}
      </nav>
    </>
  )
}

export default SideBar
