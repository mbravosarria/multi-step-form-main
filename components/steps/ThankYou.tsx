import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useSteps } from '../../contexts/steps/step.context'

import IconThanks from '../../public/images/icon-thank-you.svg'
import { usePlans } from '../../contexts/plans/plan.context'

const AppButton = dynamic(() => import('../ui/AppButton'))

function ThankYou() {
  const { changeStep } = useSteps()
  const { resetPlan } = usePlans()

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex w-20 h-20">
          <Image src={IconThanks} alt="icon-thanks" />
        </div>
        <h1 className="mt-8 mb-4 text-4xl font-bold text-primary-marine_blue">
          Thank you!
        </h1>
        <p className="text-center text-base text-neutral-cool_gray mb-4">
          Thanks for confirming your subscription! We hope you have <br /> fun
          using our platform. If you ever need support, please feel <br /> free
          to email us at support@loremgaming.com.
        </p>
        <AppButton
          text="reset form"
          type="confirm"
          onClick={() => {
            resetPlan()
            changeStep(1)
          }}
        />
      </div>
    </>
  )
}

export default ThankYou
