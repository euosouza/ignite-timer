import { styled } from "styled-components";

export const LayoutContainer = styled.div`
  margin: 1rem;
  padding: 2rem;

  background-color: ${({ theme }) => theme["gray-700"]};
  overflow: auto;
  border-radius: 8px;
  height: 100%;
  max-height: 500px;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4rem;
`;

export const Wrapper = styled.div`
  height: 100vh;
  overflow: auto;

  display: flex;
  align-items:center;
  justify-content: center;
`;
