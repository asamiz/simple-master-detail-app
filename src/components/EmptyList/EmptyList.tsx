import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RFValue, RHValue, RWValue } from 'src/utils/responsive';
import { COLORS, FONTS } from 'theme';
// import { RFValue, RHValue } from 'utils';

export const EmptyList = () => {
  return (
    <View style={styles.container} testID="list-empty-view">
      <Icon
        name="sentiment-dissatisfied"
        size={RFValue(70)}
        color={COLORS.text}
      />
      <Text style={styles.text}>
        {"You don't have users yet, please add from your account"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: RWValue(16),
  },
  text: {
    fontFamily: FONTS.medium,
    textAlign: 'center',
    color: COLORS.text,
    fontSize: RFValue(18),
    lineHeight: RHValue(26),
    marginTop: RHValue(24),
  },
});
