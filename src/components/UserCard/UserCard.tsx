import React from 'react';
import { View, Text, ViewStyle, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { RFValue } from 'src/utils/responsive';
import { COLORS } from 'theme';

type Props = {
  id: number;
  testID: string;
  name: string;
  imageUrl: string;
  containerStyle?: ViewStyle;
};

export const UserCard = ({
  id,
  testID,
  name,
  imageUrl,
  containerStyle,
}: Props) => {
  return (
    <Pressable testID={testID} style={[styles.container, containerStyle]}>
      <View style={styles.contentContainer}>
        <FastImage
          testID={`user-${id}-image`}
          source={{ uri: imageUrl }}
          style={styles.image}
        />
        <Text testID={`user-${id}-name`} style={styles.name}>
          {name}
        </Text>
      </View>
      <Icon name="arrow-forward-ios" size={RFValue(20)} color={COLORS.text} />
    </Pressable>
  );
};
