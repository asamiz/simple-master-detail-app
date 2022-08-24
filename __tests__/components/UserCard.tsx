import { render, screen, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { UserCard } from 'components';

describe('Test UserCard component functionality', () => {
  test('UserCard rendered correctly with the passed name', () => {
    render(<UserCard name="Test User" />);
    const cardTitle = screen.getByTestId('user-name').children[0];
    expect(cardTitle).toEqual('Test User');
  });

  test('UserCard rendered correctly with the passed image', () => {
    const imageSource =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzSFup4GceRsWQiRrWaTc9yqYkBzWvfyzgoUREXNM4-heoYx43nY_L2YIcxlhqNeInqw&usqp=CAU';
    render(<UserCard name="Test User" imageUrl={imageSource} />);
    const cardImage = screen.getByTestId('user-image');
    expect(cardImage.type).toBe('FastImageView');
  });

  test('UserCard render placeholder icon when not passing an image url', () => {
    render(<UserCard name="Test User" />);
    const placeholderIcon = screen.getByTestId('user-image');
    expect(placeholderIcon.type).toBe('View');
  });

  test('UserCard onPress function to be called', () => {
    const onPress = jest.fn();
    render(<UserCard testID="user-card" onPress={onPress} />);
    fireEvent.press(screen.getByTestId('user-card'));
    expect(onPress).toBeCalled();
  });
});
