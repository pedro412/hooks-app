import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ loading: true, error: null, data: null });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({ loading: false, error: null, data });
        }
      });
  }, [url]);

  return state;
};
