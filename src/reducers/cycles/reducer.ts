import { CycleActionsCycles } from "./actions";

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export interface CycleStateProps {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export function reducer(state: CycleStateProps, actions: any): CycleStateProps {
  switch(actions.type) {
    case CycleActionsCycles.ADD_NEW_CYCLES:
      return {
        ...state,
        cycles: [...state.cycles, actions.payload.newCycle],
        activeCycleId: actions.payload.newCycle.id,
      };
      case CycleActionsCycles.INTERRUPT_CURRENT_CYCLE:
        return {
          ...state,
          cycles: state.cycles.map((cycle) => cycle.id === state.activeCycleId ?
          {...cycle, interruptedDate: new Date() } : cycle),
          activeCycleId: null,
        };
      case CycleActionsCycles.MARK_CURRENT_CYCLE_AS_FINISHED:
        return {
          ...state,
          cycles: state.cycles.map((cycle) => cycle.id === state.activeCycleId ?
          {...cycle, finishedDate: new Date() } : cycle),
          activeCycleId: null,
      };
    default:
      return state;
  }
}
