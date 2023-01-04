type Action = { type: 'CHANGE_STEP'; step: number }

export interface State {
  selectedStep: number
}

export const initialState: State = {
  selectedStep: 1,
}

export function stepReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'CHANGE_STEP': {
      return { selectedStep: action.step }
    }
    default:
      return state
  }
}
