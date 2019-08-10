import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 0 20px;

  ul li {
    display: flex;
    flex-direction: column;

    span {
      color: #999;
      text-transform: uppercase;
    }

    span:first-child {
      margin-top: 10px;
      font-size: 12px;
    }

    span:last-child {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
`;
