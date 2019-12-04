import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';

class Results extends Component {
  render() {
    const { results } = this.props;

    return (
      <Page
        results={results}
        goTo={(path) => {
          this.props.history.push(path);
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.results,
  };
};

// const wrapper = connect(mapStateToProps);
// const component = wrapper(Results);

export default withRouter(connect(mapStateToProps)(Results));
