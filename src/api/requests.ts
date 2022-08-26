import { client } from './client';
import {
  ActivitiesResponse,
  ActivityData,
  DealData,
  DealsResponse,
  PersonsParams,
  PersonsResponse,
} from 'types';

export const getPersons = async ({
  pageParam,
}: {
  pageParam: number;
}): Promise<PersonsResponse> => {
  const params: PersonsParams = { start: pageParam, limit: 50 };
  return client
    .get<PersonsResponse>('/persons', { params })
    .then(response => response.data);
};

export const getActivities = async (id: number): Promise<ActivityData[]> => {
  return client
    .get<ActivitiesResponse>(`/persons/${id}/activities`)
    .then(response => response.data.data);
};

export const getDeals = async (id: number): Promise<DealData[]> => {
  return client
    .get<DealsResponse>(`/persons/${id}/deals`)
    .then(response => response.data.data);
};
