import {ReactNode, ErrorInfo} from 'react';

export interface Props {
  children: ReactNode;
  catchErrors: 'always' | 'dev' | 'prod' | 'never';
}

export interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}
