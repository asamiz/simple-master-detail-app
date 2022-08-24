import { render, waitFor } from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import { client } from 'api';
import { HomeScreen } from 'screens';

let mock: MockAdapter;
beforeAll(() => {
  mock = new MockAdapter(client);
});

afterEach(() => {
  mock.reset();
});

const mockGetListUsers = (response: any) => {
  mock.onGet().reply(200, JSON.stringify(response));
};

describe('Test HomeScreen functionalities', () => {
  test('HomeScreen should render loader before data fetching', () => {
    const { getByTestId } = render(<HomeScreen />);
    expect(getByTestId('users-loader'));
  });

  test('HomeScreen renders with the correct data', async () => {
    const response = {
      data: [
        {
          id: 0,
          name: 'Test User1',
        },
        {
          id: 1,
          name: 'Test User2',
        },
      ],
    };
    mockGetListUsers(response);
    const { getByText } = render(<HomeScreen />);
    await waitFor(() => {
      expect(getByText('Test User1'));
    });
  });

  test('HomeScreen renders list empty view when data is empty', async () => {
    const response = {
      data: [],
    };
    mockGetListUsers(response);
    const { getByTestId } = render(<HomeScreen />);
    await waitFor(() => {
      expect(getByTestId('list-empty-view'));
    });
  });
});
