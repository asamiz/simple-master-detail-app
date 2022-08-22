import { Platform, StatusBar, Dimensions } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

const SCREEN_WIDTH: number = Dimensions.get('window').width;
const SCREEN_HEIGHT: number = Dimensions.get('window').height;
const STANDARD_WIDTH = 390; // iPhone 13 width
const STANDARD_HEIGHT = 844; // iPhone 13 height

export function RHValue(value: number): number {
  const standardLength =
    SCREEN_WIDTH > SCREEN_HEIGHT ? SCREEN_WIDTH : SCREEN_HEIGHT;
  const offset =
    SCREEN_WIDTH > SCREEN_HEIGHT
      ? 0
      : Platform.OS === 'ios'
      ? 78
      : StatusBar.currentHeight;
  const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
      ? standardLength - offset!
      : standardLength;
  const heightPercent = (value * deviceHeight) / STANDARD_HEIGHT;
  return Math.round(heightPercent);
}

export function RWValue(value: number) {
  const widthPercent = (value * SCREEN_WIDTH) / STANDARD_WIDTH;
  return Math.round(widthPercent);
}

export const RFValue = RHValue;
