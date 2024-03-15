import { Cycle } from "../../context/CyclesContext";

export enum CycleActionsCycles {
  ADD_NEW_CYCLES = "ADD_NEW_CYCLES",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}


export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: CycleActionsCycles.ADD_NEW_CYCLES,
    payload: {
      newCycle
    }
  };
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: CycleActionsCycles.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
}

export function interruptCurrentCycleAction() {
  return {
    type: CycleActionsCycles.INTERRUPT_CURRENT_CYCLE,
  };
}
