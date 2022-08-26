import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS } from 'theme';

export const SuspenseFallback = () => {
  return (
    <ActivityIndicator
      testID="suspense-fallback"
      style={styles.activityIndicator}
    />
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
  },
});
