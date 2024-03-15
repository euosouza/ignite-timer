import { styled } from "styled-components";

export const CountdownContainer = styled.span`
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
