import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import FallbackUI from './ErrorFallbackUI';

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined
    };
  }
    
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error:error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Something went wrong:", error, errorInfo);
  }
    
  render() {
    if (this.state.hasError) {
      return <FallbackUI error={this.state.error} />;
    }
    return this.props.children;
  }
}