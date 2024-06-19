import React, {Component, ErrorInfo} from 'react';
import {ErrorDetails} from './error-details';

import {Props, State} from './types';

export class ErrorBoundary extends Component<Props, State> {
  state = {error: null, errorInfo: null};

  // If an error in a child is encountered, this will run
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Only set errors if enabled
    if (!this.isEnabled()) {
      return;
    }
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });

    // You can also log error messages to an error reporting service here
    // This is a great place to put BugSnag, Sentry, crashlytics, etc:
    // reportCrash(error)
  }
  resetError = () => {
    this.setState({error: null, errorInfo: null});
  };

  // To avoid unnecessary re-renders
  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
  ): boolean {
    return nextState.error !== this.state.error;
  }

  // Only enable if we're catching errors in the right environment
  isEnabled(): boolean {
    return (
      this.props.catchErrors === 'always' ||
      (this.props.catchErrors === 'dev' && __DEV__) ||
      (this.props.catchErrors === 'prod' && !__DEV__)
    );
  }

  render() {
    return this.isEnabled() && this.state.error ? (
      //error Details component
      <ErrorDetails
        onReset={this.resetError}
        error={this.state.error}
        errorInfo={this.state.errorInfo}
      />
    ) : (
      this.props.children
    );
  }
}
