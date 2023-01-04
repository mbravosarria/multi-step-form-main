type Action =
  | { type: 'SET_PLAN'; plan: Plan }
  | { type: 'SET_ADDONS'; name: string }
  | { type: 'SET_TIME_INTERVAL'; timeInterval: string }
  | { type: 'RESET_PLAN' }

export interface Plan {
  name: string
  price: number
}

export interface AddOn {
  name: string
  description: string
  monthly: number
  yearly: number
  selected: boolean
}

export interface State {
  plan: Plan
  addOns: Array<AddOn>
  timeInterval: string
}

export const initialState: State = {
  plan: {
    name: 'Arcade',
    price: 9,
  },
  addOns: [
    {
      name: 'Online service',
      description: 'Access to multiplayer games',
      monthly: 1,
      yearly: 10,
      selected: false,
    },
    {
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      monthly: 2,
      yearly: 20,
      selected: false,
    },
    {
      name: 'Customizable Profile',
      description: 'Custom theme on your profile',
      monthly: 2,
      yearly: 20,
      selected: false,
    },
  ],
  timeInterval: 'mo',
}

export function planReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_PLAN': {
      return {
        ...state,
        plan: action.plan,
      }
    }
    case 'SET_ADDONS': {
      const index = state.addOns.findIndex((item) => item.name === action.name)
      state.addOns[index].selected = !state.addOns[index].selected
      return {
        ...state,
      }
    }
    case 'SET_TIME_INTERVAL': {
      return {
        ...state,
        timeInterval: action.timeInterval,
      }
    }
    case 'RESET_PLAN': {
      initialState.addOns.map((_, index) => {
        initialState.addOns[index].selected = false
      })
      return {
        plan: initialState.plan,
        addOns: initialState.addOns,
        timeInterval: initialState.timeInterval,
      }
    }
    default:
      return state
  }
}
