import { useAppSelector, useAppDispatch } from "../app/hooks";
import { useEffect } from 'react';
import { fetchData } from '../services/countryService';


const useFetchData = (endpoint: string) => {
  const dispatch = useAppDispatch();
  const { loading, countries, error, status } = useAppSelector((state) => state.countryData);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData(endpoint));
    }
  }, [dispatch, endpoint, status]);

  return { loading, countries, error, status };
};

export default useFetchData;
