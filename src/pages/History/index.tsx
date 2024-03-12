import { HistoryContainer, ContainerTable, Status } from "./styles";

export function History() {
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
            <tr>
              <td>Estudando React</td>
              <td>25 minutos</td>
              <td>Há certa de 2 meses</td>
              <td><Status $statuscolor="green">Concluído</Status></td>
            </tr>

            <tr>
              <td>Estudando React</td>
              <td>25 minutos</td>
              <td>Há certa de 2 meses</td>
              <td><Status $statuscolor="yellow">Em andamento</Status></td>
            </tr>

            <tr>
              <td>Estudando React</td>
              <td>25 minutos</td>
              <td>Há certa de 2 meses</td>
              <td><Status $statuscolor="red">Interrompido</Status></td>
            </tr>
          </tbody>
        </table>
      </ContainerTable>
    </HistoryContainer>
  );
}
