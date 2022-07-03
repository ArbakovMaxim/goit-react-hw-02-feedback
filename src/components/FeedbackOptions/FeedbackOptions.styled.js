import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  padding: ${p => p.theme.space[1]}px;
`;

/* export const ButtomTitle = styled.h1`
  text-align: center;
  font-size: ${p => p.theme.fontsSizes[5]}px;
`; */

/* export const ButtonList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
`; */

export const ButtonFeedback = styled.button`
  width: 100px;
  height: 30px;
  padding: ${p => p.theme.space[1]}px;
  cursor: pointer;

  &:hover {
    transform: scale(1.4);
    transition: transform 0.25s;
    background-color: ${p => p.theme.colors.green};
    border: none;
  }
`;
