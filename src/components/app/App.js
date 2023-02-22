import { Feedback } from 'components/feedback/Feedback';
import { Layout } from 'components/layout/Layout';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Layout>
        <Feedback />
      </Layout>
    );
  }
}
