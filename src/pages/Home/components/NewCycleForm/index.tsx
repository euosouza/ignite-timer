import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../context/CyclesContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <>
      <label htmlFor="task">
        Tarefa:
        <input
          type="text"
          placeholder="Tarefa"
          required
          disabled={!!activeCycle}
          {...register("task")}
        />
      </label>

      <label htmlFor="time" className="minutesAmount">
        Tempo:
        <input
          type="number"
          placeholder="00"
          step={5}
          min={1}
          max={60}
          required
          disabled={!!activeCycle}
          {...register("minutesAmount", { valueAsNumber: true })}
        />
      </label>
    </>

  );
}
