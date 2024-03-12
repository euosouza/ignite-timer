import { styled } from "styled-components";

export const LayoutContainer = styled.div`
  margin: 1rem;
  padding: 2rem;

  background-color: ${({ theme }) => theme["gray-700"]};
  height: 100%;
  max-height: 500px;
  overflow: auto;
  border-radius: 8px;

  display: grid;
  align-items: start;
  gap: 2rem;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  height: 100vh;
  overflow: auto;
`;
