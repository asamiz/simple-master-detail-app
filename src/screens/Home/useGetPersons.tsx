import { useEffect, useState } from 'react';
import { getPersons } from 'api';
import { UserData } from 'types';

type Response = {
  data: UserData[];
  loading: boolean;
  error: string | null;
};

type ReturnedValues = {
  response: Response;
  endReached?: boolean;
};

type Props = {
  start: number;
};

export const useGetPersons = ({ start }: Props): ReturnedValues => {
  const [endReached, setEndReached] = useState<boolean>(false);
  const [response, setResponse] = useState<Response>({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const _getPersons = async () => {
      try {
        const _response = await getPersons({ start, limit: 50 });

        if (_response.status === 200 && _response.data.data !== null) {
          setResponse(prev => ({
            data: [...prev.data, ..._response.data.data],
            loading: false,
            error: null,
          }));
        } else {
          setEndReached(true);
        }
      } catch (err) {
        setEndReached(true);
        const error = err as string | null;
        setResponse({
          data: [],
          loading: false,
          error,
        });
      }
    };
    _getPersons();
  }, [start]);

  return {
    response,
    endReached,
  };
};
