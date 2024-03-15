import { styled } from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;



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
`;
