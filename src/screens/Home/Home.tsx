import React from 'react';
import { FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';
import { dummyUsers } from './dummyData';
import styles from './styles';
import { UserCard } from 'components';
import { IMAGES } from 'images';

const Home = () => {
  const renderItem = (item: any) => (
    <UserCard
      testID="user-card"
      name={item.name}
      id={item.id}
      imageUrl={item.image}
    />
  );
  return (
    <>
      <FastImage
        testID="pipedrive-logo"
        style={styles.image}
        source={IMAGES.logo}
        resizeMode={'contain'}
      />
      <FlatList
        testID="users-list"
        data={dummyUsers}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
};

export default Home;
