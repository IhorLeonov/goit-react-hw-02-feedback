import React, { Component } from 'react';
import { Section } from 'components/section/Section';
import { Statistics } from 'components/statistics/Statistics';
import { FeedbackOptions } from 'components/feedbackOptions/FeedbackOptions';
// import PropTypes from 'prop-types';

export class Feedback extends Component {
  render() {
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <Statistics />
        </Section>
        <Section title={'Statistics'}>
          <FeedbackOptions />
        </Section>
      </div>
    );
  }
}
