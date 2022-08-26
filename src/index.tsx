import React, { Suspense } from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import Toast from 'react-native-toast-message';
import { ErrorBoundaryFallback, SuspenseFallback } from 'components';
import RootNavigator from 'navigation';

const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={props => (
        <ErrorBoundaryFallback
          error={props.error}
          resetError={props.resetError}
        />
      )}
    >
      <Suspense fallback={<SuspenseFallback />}>
        <RootNavigator />
        <Toast />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
