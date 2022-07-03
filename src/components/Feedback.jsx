import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Wrapper } from './ui/Wrapper.styled';
import { Section } from './Section/Section';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const totalCount = this.countTotalFeedback();

    return Math.round((this.state.good * 100) / totalCount);
  }

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <Wrapper>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            honLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            total={this.countTotalFeedback()}
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Wrapper>
    );
  }
}

export default Feedback;
