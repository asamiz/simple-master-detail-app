import { StyleSheet } from 'react-native';
import { COLORS } from 'theme';

export default StyleSheet.create({
  content: {
    backgroundColor: COLORS.surface,
  },
  safeAreaContainer: {
    flexGrow: 1,
  },
  userScreenHeader: {
    backgroundColor: COLORS.surface,
    borderBottomWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
});
