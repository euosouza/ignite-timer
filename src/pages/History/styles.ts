import { styled } from "styled-components";


export const HistoryContainer = styled.div`
  display: grid;
  align-items: start;
  gap: 2rem;
`;

export const ContainerTable = styled.div`
  overflow: auto;
  max-height: 300px;
  border: 1px solid ${({theme}) => theme["gray-500"]};

  table {
    text-align: left;
    width: 100%;
    border-radius: 4px;
    border-collapse: collapse;
    min-width: 600px;

    td , th {
      border-bottom: 1px solid ${({theme}) => theme["gray-300"]};
      padding: 1rem;
    }

    th {
      font-weight: 500;
    }

    td {
      font-size: 0.8rem;
      color: ${({theme}) => theme["gray-300"]};
    }

  }
`;

const STATUS_COLOR = {
  yellow: "yellow-500",
  green: "green-500",
  red: "red-500",
};

interface StatusProp  {
  statusColor: "yellow" | "green" | "red";
}

export const Status = styled.span<StatusProp>`
  position:relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    background-color: ${({theme,statusColor}) =>
      theme[STATUS_COLOR[statusColor]]};
    border-radius: 50px;
  }
`;
