import React from 'react';
import { useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import { useGetPersons } from './useGetPersons';
import { EmptyList, UserCard } from 'components';
import { IMAGES } from 'images';
import { UserData } from 'types';

const PERSONS_LIMIT = 50;

const Home = () => {
  const [start, setStart] = useState<number>(0);
  const { response, endReached } = useGetPersons({ start });
  const { data, loading } = response;

  const renderItem = (item: UserData) => (
    <UserCard
      testID={`user-${item.id}-card`}
      name={item.name}
      imageUrl={item.picture_id?.pictures[512]}
    />
  );

  const onEndReached = () => setStart(prev => prev + PERSONS_LIMIT);

  return loading ? (
    <ActivityIndicator testID="users-loader" style={styles.activityIndicator} />
  ) : (
    <>
      <FastImage
        testID="pipedrive-logo"
        style={styles.image}
        source={IMAGES.logo}
        resizeMode={'contain'}
      />
      <FlatList
        testID="users-list"
        data={data}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => item.id.toString()}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={!endReached ? <ActivityIndicator /> : null}
        ListEmptyComponent={<EmptyList />}
      />
    </>
  );
};

export default Home;
