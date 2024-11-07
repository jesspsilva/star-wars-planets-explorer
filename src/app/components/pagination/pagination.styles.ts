import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 10px 15px;
  border: 1px solid #eeeeee;
  background-color: #fff;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &.active {
    background-color: #fffbec;
  }
`;

export const ButtonContainer = styled.span`
  margin: 0 5px;
  cursor: pointer;
`;