import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 0 20px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 40px;
    background-color: #eee;
    margin-top: 10px;

    h2 {
      font-size: 18px;
      text-transform: uppercase;
    }
  }
`;

export const Table = styled.table`
  border: solid 1px #eee;
  padding: 10px;
  margin-bottom: 20px;

  thead tr th {
    width: 33.33%;
    height: 30px;
    text-align: center;
  }

  thead tr th:first-child {
    width: 60px;
    text-align: center;
  }
  tbody tr td {
    width: 33.33%;
    height: 30px;
    text-align: center;
  }
  tbody tr td:first-child {
    width: 60px;
    text-align: center;
  }
`;
