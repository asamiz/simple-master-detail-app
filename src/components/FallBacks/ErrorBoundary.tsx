import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS, FONTS } from 'theme';
import { RFValue, RHValue, RWValue } from 'utils';

type Props = {
  error: Error;
  resetError: () => void;
};

export const ErrorBoundaryFallback = ({ error, resetError }: Props) => {
  const renderData =
    error.message === 'Network Error'
      ? {
          message:
            "We can't fetch the new data at the moment, please make sure that you are connecting to WiFi and try again!",
          icon: 'wifi-off',
        }
      : {
          message: 'Something went wrong please try again!',
          icon: 'error-outline',
        };

  return (
    <View testID="error-boundary-fallback" style={styles.container}>
      <Icon name={renderData.icon} color={COLORS.text} size={RFValue(80)} />
      <Text style={styles.title}>{'Ooops..'}</Text>
      <Text style={styles.subtitle}>{renderData.message}</Text>
      <TouchableOpacity onPress={resetError} style={styles.button}>
        <Text style={styles.buttonText}>{'Try Again'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: RWValue(32),
    backgroundColor: COLORS.surface,
  },
  title: {
    fontSize: RFValue(32),
    fontFamily: FONTS.bold,
    color: COLORS.text,
    marginVertical: RHValue(32),
  },
  subtitle: {
    fontSize: RFValue(16),
    fontFamily: FONTS.medium,
    color: COLORS.text,
    textAlign: 'center',
    lineHeight: RHValue(24),
  },
  button: {
    padding: RHValue(16),
    backgroundColor: COLORS.interactive,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RHValue(32),
    borderRadius: RHValue(8),
  },
  buttonText: {
    color: COLORS.surface,
    fontSize: RFValue(16),
    fontFamily: FONTS.bold,
  },
});
