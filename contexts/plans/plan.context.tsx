import React from 'react'
import { State, Plan, AddOn, planReducer, initialState } from './plan.reducer'

type Props = {
  children: React.ReactNode
}

interface PlansProviderState extends State {
  setPlan: (plan: Plan) => void
  setAddOns: (name: string) => void
  setTimeInterval: (timeInterval: string) => void
  resetPlan: () => void
}

export const plansContext = React.createContext<PlansProviderState | undefined>(
  undefined
)

plansContext.displayName = 'plansContext'

export const usePlans = () => {
  const context = React.useContext(plansContext)
  if (context === undefined) {
    throw new Error(`usePlans must be used within a PlansProvider`)
  }
  return React.useMemo(() => context, [context])
}

export const PlansProvider: any = (props: any) => {
  const [state, dispatch] = React.useReducer(planReducer, initialState)

  const setPlan = (plan: Plan) => {
    dispatch({ type: 'SET_PLAN', plan })
  }

  const setAddOns = (name: string) => {
    dispatch({ type: 'SET_ADDONS', name })
  }

  const setTimeInterval = (timeInterval: string) => {
    dispatch({ type: 'SET_TIME_INTERVAL', timeInterval })
  }

  const resetPlan = () => {
    dispatch({ type: 'RESET_PLAN' })
  }

  const value = React.useMemo(
    () => ({
      ...state,
      setPlan,
      setAddOns,
      setTimeInterval,
      resetPlan,
    }),
    [state]
  )

  return <plansContext.Provider value={value} {...props} />
}
