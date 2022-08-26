import React from 'react';
import { View, Text, ViewStyle, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { COLORS } from 'theme';
import { RFValue } from 'utils';

type Props = {
  testID?: string;
  name?: string;
  imageUrl?: string | undefined;
  containerStyle?: ViewStyle;
  onPress?: () => void;
};

export const UserCard = ({
  testID,
  name,
  imageUrl,
  onPress,
  containerStyle,
}: Props) => {
  return (
    <Pressable
      testID={testID}
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <View style={styles.contentContainer}>
        {imageUrl ? (
          <FastImage
            testID={'user-image'}
            source={{ uri: imageUrl }}
            style={styles.image}
          />
        ) : (
          <View
            testID={'user-image'}
            style={[styles.image, styles.imagePlaceHolder]}
          >
            <Icon
              testID="placeholder-icon"
              name="person-outline"
              size={RFValue(45)}
              color={COLORS.interactive}
            />
          </View>
        )}
        <Text testID={'user-name'} style={styles.name}>
          {name}
        </Text>
      </View>
      <Icon name="arrow-forward-ios" size={RFValue(20)} color={COLORS.text} />
    </Pressable>
  );
};
