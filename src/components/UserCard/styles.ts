import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'theme';
import { RFValue, RHValue, RWValue } from 'utils';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: RWValue(8),
    marginBottom: RHValue(12),
    paddingHorizontal: RWValue(16),
    paddingVertical: RHValue(12),
    shadowColor: COLORS.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: RHValue(80),
    height: RHValue(80),
    borderRadius: RHValue(80) / 2,
    marginEnd: RWValue(12),
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  imagePlaceHolder: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.surfaceSelected,
  },
  name: {
    color: COLORS.text,
    fontSize: RFValue(16),
    fontFamily: FONTS.bold,
  },
});
