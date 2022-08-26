import { useNavigation } from '@react-navigation/native';
import { useInfiniteQuery } from '@tanstack/react-query';
import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import { getPersons } from 'api';
import { EmptyList, UserCard } from 'components';
import { IMAGES } from 'images';
import { HomeScreenNavigationProp, PersonData, PersonsResponse } from 'types';

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery<PersonsResponse, Error>(
      ['persons'],
      ({ pageParam }) => getPersons({ pageParam }),
      {
        getNextPageParam: lastPage =>
          lastPage.additional_data.pagination.next_start,
      },
    );

  const renderItem = (user: PersonData) => (
    <UserCard
      testID={`user-${user.id}-card`}
      name={user.name}
      imageUrl={user.picture_id?.pictures[512]}
      onPress={() => navigation.navigate('UserScreen', { user })}
    />
  );

  const onEndReached = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const personItemExtractorKey = (user: PersonData) => {
    return user.id.toString();
  };

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
        data={data?.pages.map(page => page.data).flat()}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={personItemExtractorKey}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? (
            <ActivityIndicator style={styles.activityIndicator} />
          ) : null
        }
        ListEmptyComponent={<EmptyList />}
      />
    </>
  );
};

export default Home;
