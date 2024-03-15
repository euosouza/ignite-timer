import { useContext } from "react";

import {
  HomeContainer, GroupForm,
  StarButtom, StopButtom
} from "./styles";
import { Countdown } from "./components/Countdown";
import { NewCycleForm } from "./components/NewCycleForm";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { CyclesContext } from "../../context/CyclesContext";

const newCycleFormSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod.number().min(1).max(60),
});

export type NewCycleFormData = zod.infer<typeof newCycleFormSchema>

export function Home() {
  const {
    activeCycle,
    createNewCycle,
    interruptCurrentCycle
  } = useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0
    }
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task && !activeCycle;

  return (
    <HomeContainer>
      <Countdown />

      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <GroupForm>
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>

          {activeCycle ? (
              <StopButtom
                type="button"
                onClick={interruptCurrentCycle}
                disabled={isSubmitDisabled}
              >
                Interromper
              </StopButtom>
            ) : (
              <StarButtom type="submit" disabled={isSubmitDisabled}>
                Iniciar tarefa
              </StarButtom>
            )}

        </GroupForm>
      </form>
    </HomeContainer>
  );
}
