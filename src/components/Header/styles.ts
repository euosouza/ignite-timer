import {styled} from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: max-content;
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    li {

      a {
        padding: 0.5rem;
        border-bottom: 1px solid transparent;
        color: ${({ theme }) => theme["gray-100"]};
        font-size: 1.5rem;

        &:hover {
          color: ${({ theme }) => theme["green-500"]};
          border-bottom: 3px solid  ${({ theme }) => theme["green-500"]};
        }

        &.active {
          font-weight: bold;
          color: ${({ theme }) => theme["green-500"]};
        }
      }

    }
  }
`;
