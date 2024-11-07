import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;


  min-width: 280px;
  padding: 10px 2px 10px 20px;
  border: 1px solid var(--light-gray);
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--foreground);

  & input {
    flex: 1;
    outline: none;
  }

  & input::placeholder {
    color: var(--gray);
  }
`;
