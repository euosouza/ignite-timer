import { HomeContainer, GroupForm, Separator, CouterTimer } from "./styles";

export function Home() {
  return(
    <HomeContainer>
        <CouterTimer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CouterTimer>

      <form>
        <GroupForm>
          <label htmlFor="job">
            Tarefa:
            <input type="text" placeholder="Tarefa" id="job"/>
          </label>

          <label htmlFor="time" className="timer">
            Tempo:
            <input
              type="number"
              id="time"
              placeholder="00"
              step={5}
              min={5}
              max={60}
            />
          </label>

          <button>
            Iniciar tarefa
          </button>
        </GroupForm>
      </form>
    </HomeContainer>
  );
}
