import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { RFValue } from 'src/utils/responsive';
import { COLORS } from 'theme';

type Props = {
  children: ReactNode;
  iconName?: string;
  title: string;
  testID?: string;
};

export const Section = ({ children, title, iconName, testID }: Props) => {
  return (
    <View testID={testID} style={styles.container}>
      <View style={styles.titleContainer}>
        {iconName && (
          <Icon name={iconName} size={RFValue(20)} color={COLORS.text} />
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
    </View>
  );
};
