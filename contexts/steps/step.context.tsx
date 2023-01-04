import React from 'react'
import { State, stepReducer, initialState } from './step.reducer'

type Props = {
  children: React.ReactNode
}

interface StepsProviderState extends State {
  changeStep: (step: number) => void
}

export const stepsContext = React.createContext<StepsProviderState | undefined>(
  undefined
)

stepsContext.displayName = 'stepsContext'

export const useSteps = () => {
  const context = React.useContext(stepsContext)
  if (context === undefined) {
    throw new Error(`useSteps must be used within a StepsProvider`)
  }
  return React.useMemo(() => context, [context])
}

export const StepsProvider: any = (props: any) => {
  const [state, dispatch] = React.useReducer(stepReducer, initialState)

  const changeStep = (step: number) => {
    dispatch({ type: 'CHANGE_STEP', step })
  }

  const value = React.useMemo(
    () => ({
      ...state,
      changeStep,
    }),
    [state]
  )

  return <stepsContext.Provider value={value} {...props} />
}
