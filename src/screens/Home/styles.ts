import { StyleSheet } from 'react-native';
import { RHValue, RWValue } from 'src/utils/responsive';

export default StyleSheet.create({
  image: {
    width: RWValue(200),
    height: RHValue(100),
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: RWValue(16),
    paddingVertical: RHValue(16),
  },
  activityIndicator: {
    marginTop: RHValue(24),
  },
});
