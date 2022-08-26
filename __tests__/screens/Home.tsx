import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, waitFor } from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import { client } from 'api';
import { HomeScreen } from 'screens';

const queryClient = new QueryClient();

let mock: MockAdapter;
beforeAll(() => {
  mock = new MockAdapter(client);
});

afterEach(() => {
  mock.reset();
});

export const mockGetUsersList = (response: any) => {
  mock
    .onGet('https://api.pipedrive.com/v1/persons')
    .reply(200, JSON.stringify(response));
};

describe('Test HomeScreen functionalities', () => {
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
      additional_data: {
        pagination: {
          start: 50,
          limit: 50,
          more_items_in_collection: true,
          next_start: 100,
        },
      },
    };
    mockGetUsersList(response);
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <HomeScreen />
      </QueryClientProvider>,
    );
    await waitFor(() => {
      expect(getByText('Test User1'));
    });
  });

  test('HomeScreen renders list empty view when data is empty', async () => {
    const response = {
      data: [],
      additional_data: {
        pagination: {
          start: 50,
          limit: 50,
          more_items_in_collection: false,
        },
      },
    };
    mockGetUsersList(response);
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <HomeScreen />
      </QueryClientProvider>,
    );
    await waitFor(() => {
      expect(getByTestId('list-empty-view'));
    });
  });
});
