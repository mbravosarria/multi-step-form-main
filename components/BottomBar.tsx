import React from 'react'
import dynamic from 'next/dynamic'
import { useSteps } from '../contexts/steps/step.context'

const AppButton = dynamic(() => import('../components/ui/AppButton'))

function BottomBar() {
  const { selectedStep, changeStep } = useSteps()

  return (
    <div className="flex justify-between items-center w-full px-4 bg-neutral-white">
      <div>
        {selectedStep > 1 && selectedStep < 5 && (
          <AppButton
            onClick={() => changeStep(selectedStep - 1)}
            text="go back"
            type="back"
          />
        )}
      </div>
      <div>
        {selectedStep < 4 && (
          <AppButton
            onClick={() => changeStep(selectedStep + 1)}
            text="next step"
            type="next"
          />
        )}
        {selectedStep === 4 && (
          <AppButton
            onClick={() => changeStep(5)}
            text="confirm"
            type="confirm"
          />
        )}
      </div>
    </div>
  )
}

export default BottomBar
