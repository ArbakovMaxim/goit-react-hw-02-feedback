import React from 'react';
import { ButtonBlock } from './ButtonBlock/ButtonBlock';
import { Wrapper } from './ui/Wrapper.styled';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Wrapper>
        <ButtonBlock />
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good:</li>
            <li>Neutral:</li>
            <li>Bad:</li>
          </ul>
        </div>
      </Wrapper>
    );
  }
}

export default Feedback;
