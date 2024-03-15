import { useContext } from "react";
import { HistoryContainer, ContainerTable, Status } from "./styles";
import { CyclesContext } from "../../context/CyclesContext";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

export function History() {
  const { cycles } = useContext(CyclesContext);

  return(
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <ContainerTable>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            { cycles.map((cycle) =>
              (<tr key={cycle.id}>
                <td>{ cycle.task }</td>
                <td>{ cycle.minutesAmount } minutos</td>
                <td>{ formatDistanceToNow(cycle.startDate, { addSuffix: true, locale: ptBR }) }</td>
                <td>
                  { cycle.finishedDate && <Status $statuscolor="green">Concluído</Status> }
                  { cycle.interruptedDate && <Status $statuscolor="red">Interrompido</Status> }
                  { !cycle.finishedDate && !cycle.interruptedDate &&
                  <Status $statuscolor="yellow">
                    Em Andamento
                  </Status> }
                </td>
              </tr>)
              )
            }
          </tbody>
        </table>
      </ContainerTable>
    </HistoryContainer>
  );
}
