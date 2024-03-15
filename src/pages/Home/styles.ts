import { styled } from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 2rem;

  p {
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 100%;

    label {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      box-sizing: border-box;

      font-size: 0.8rem;
      color: ${({ theme }) => theme["gray-300"]};

      &.timer {
        max-width: none;

        @media(min-width: 568px) {
          max-width: max-content;
        }
      }

      input {
        height: 48px;
        padding: 1rem;
        border-radius: 4px;
        color: ${({ theme }) => theme["gray-100"]};
        border: 1px solid ${({ theme }) => theme["gray-500"]};
        background-color: ${({ theme }) => theme["gray-800"]};

        &::placeholder {
          color: ${({ theme }) => theme["gray-500"]};
        }

        &:disabled {
          cursor: not-allowed;
          background-color: ${({ theme }) => theme["gray-600"]};
          color: ${({ theme }) => theme["gray-500"]};
        }
      }
    }
  }
`;

export const BaseButtom = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 48px;
  width: 200px;
  border: none;
  border-radius: 4px;

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme["gray-600"]};
    color: ${({ theme }) => theme["gray-500"]};

    &:hover {
      background-color: ${({ theme }) => theme["gray-600"]};
    }
  }
`;

export const StarButtom = styled(BaseButtom)`
  background-color: ${({ theme }) => theme["green-300"]};

  &:hover {
    background-color: ${({ theme }) => theme["green-500"]};
  }
`;

export const StopButtom = styled(BaseButtom)`
  background-color: ${({ theme }) => theme["red-500"]};
  color: ${({ theme }) => theme.white};

  &:hover {
    background-color: ${({ theme }) => theme["red-700"]};
  }
`;

export const GroupForm = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

export const CouterTimer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;
  font-family: "Roboto Mono", monospace;
  line-height: 1;
  border-radius: 4px;
  font-size: 4rem;


  @media(min-width: 568px) {
    font-size: 10rem;
    gap: 1rem;
  }

  span {
    padding: 1rem 0.5rem;
    font-family: "Roboto Mono", monospace;

    &:not(:nth-child(3)) {
      background-color:${({ theme }) => theme["gray-800"]};
    }
  }
`;

export const Separator = styled.span`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme["green-300"]};
  width: 1rem;

  @media(min-width: 568px) {
    width: 4rem;
  }
`;

