import { AxiosResponse } from 'axios';
import { client } from './client';
import { GET_PERSONS } from './endpoints';
import { PersonsParams, PersonsResponse } from 'types';

export const getPersons = async (
  params?: PersonsParams,
): Promise<AxiosResponse<PersonsResponse>> => {
  return client.get<PersonsResponse>(GET_PERSONS, { params });
};
