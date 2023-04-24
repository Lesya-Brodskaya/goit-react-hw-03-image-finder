import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const Text = styled.h2`
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  color: ${props => {
    if (props.eventColor === 'red') {
      return 'red';
    }
    if (props.eventColor === 'black') {
      return '#c2c2c2';
    }
    return '#c2c2c2';
  }};
`;
