import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'theme';
import { RFValue, RHValue, RWValue } from 'utils';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: RWValue(32),
    paddingBottom: RHValue(20),
  },
  topView: {
    marginTop: RHValue(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: RHValue(100),
    height: RHValue(100),
    borderRadius: RHValue(100) / 2,
    backgroundColor: COLORS.surfaceSelected,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  imagePlaceHolderText: {
    fontSize: RFValue(32),
    fontFamily: FONTS.bold,
    color: COLORS.interactive,
  },
  name: {
    fontSize: RFValue(20),
    fontFamily: FONTS.bold,
    color: COLORS.text,
  },
  nameContainer: {
    marginStart: RWValue(12),
    marginTop: RHValue(4),
  },
  email: {
    fontSize: RFValue(16),
    fontFamily: FONTS.medium,
    color: COLORS.text,
    marginStart: RWValue(4),
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionKey: {
    marginTop: RHValue(8),
    fontSize: RFValue(14),
    fontFamily: FONTS.medium,
    color: COLORS.text,
  },
  callButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: RWValue(80),
    padding: RHValue(12),
    backgroundColor: COLORS.surfaceSelected,
    borderRadius: RHValue(8),
    marginEnd: RWValue(8),
  },
  callText: {
    fontSize: RFValue(14),
    color: COLORS.interactive,
    fontFamily: FONTS.bold,
  },
  contactContainer: {
    marginTop: RHValue(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberText: {
    fontFamily: FONTS.bold,
    color: COLORS.text,
    fontSize: RFValue(14),
    textTransform: 'capitalize',
  },
  noInfoText: {
    textAlign: 'center',
    color: COLORS.text,
    fontSize: RFValue(14),
    marginVertical: RHValue(12),
    fontFamily: FONTS.medium,
  },
  dealActivityContainer: {
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: RHValue(12),
    marginBottom: RHValue(12),
    borderRadius: RHValue(8),
  },
  dealTitle: {
    marginBottom: RHValue(8),
    color: COLORS.text,
    fontFamily: FONTS.regular,
    fontSize: RFValue(14),
  },
  dealValue: {
    color: COLORS.text,
    fontFamily: FONTS.bold,
    fontSize: RFValue(12),
  },
  activityTitle: {
    color: COLORS.text,
    fontFamily: FONTS.medium,
    fontSize: RFValue(16),
    textTransform: 'capitalize',
  },
  activityDetailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: RHValue(8),
  },
  activityDetailsText: {
    fontSize: RFValue(12),
    fontFamily: FONTS.medium,
    color: COLORS.text,
    marginBottom: RHValue(4),
  },
  topActivityView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: RHValue(4),
  },
  activityDate: {
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    fontSize: RFValue(14),
  },
});
