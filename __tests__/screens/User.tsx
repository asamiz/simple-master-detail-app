import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, waitFor } from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import { client } from 'api';
import { UserScreen } from 'screens';

describe('Test UserScreen functionalities', () => {
  let mock: MockAdapter;
  beforeAll(() => {
    mock = new MockAdapter(client);
  });

  afterEach(() => {
    mock.reset();
  });

  const mockGetActivitiesList = () => {
    mock.onGet('persons/1/activities').reply(
      200,
      JSON.stringify({
        data: [
          {
            id: 0,
            type: 'test call',
            due_date: '2022-08-09',
            owner_name: 'Test Owner',
            org_name: 'Test Organization',
          },
          {
            id: 1,
            type: 'test meeting',
            due_date: '2022-08-08',
            owner_name: 'Test Owner2',
            org_name: 'Test Organization2',
          },
        ],
      }),
    );
  };

  const mockGetDealsList = () => {
    mock.onGet('persons/1/deals').reply(200, {
      data: [
        {
          id: 0,
          title: 'test deal1',
          currency: 'test',
          value: 0,
        },
        {
          id: 1,
          title: 'test deal2',
          currency: 'test2',
          value: 0,
        },
      ],
    });
  };

  test('UserScreen should render with correct passed parameter', () => {
    const queryClient = new QueryClient();
    const { getByTestId, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <UserScreen />
      </QueryClientProvider>,
    );
    expect(getByTestId('user-image-placeholder'));
    expect(getByText('Test User1'));
  });

  test('UserScreen should show an acknowledge message to the user when the specific person does not have any contact info', () => {
    const queryClient = new QueryClient();
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <UserScreen />
      </QueryClientProvider>,
    );
    expect(getByTestId('no-contact-info-text'));
  });

  test('UserScreen should render user activities', async () => {
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
    mockGetActivitiesList();
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <UserScreen />
      </QueryClientProvider>,
    );
    await waitFor(() => {
      expect(getByTestId('user-activities-list'));
    });
  });

  test('UserScreen should render user deals', async () => {
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
    mockGetDealsList();
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <UserScreen />
      </QueryClientProvider>,
    );
    await waitFor(() => {
      expect(getByTestId('user-deals-list'));
    });
  });
});
