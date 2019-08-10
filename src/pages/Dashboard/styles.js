import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;

  .error {
    margin-top: 20px;
    color: #f00;
  }

  .fa-pulse {
    color: #999 !important;
    margin-top: 30px !important;
  }
`;

export const Body = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
`;
