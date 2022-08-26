import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'theme';
import { RFValue, RHValue, RWValue } from 'utils';

export default StyleSheet.create({
  container: {
    padding: RHValue(18),
    marginTop: RHValue(24),
    backgroundColor: COLORS.surface,
    borderRadius: RHValue(12),
    shadowColor: COLORS.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    color: COLORS.text,
    fontSize: RFValue(16),
    fontFamily: FONTS.bold,
    marginBottom: RHValue(12),
    marginStart: RWValue(8),
  },
});
