import { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {

  const isMounted = useRef(true);
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    return (() => {
      console.log(isMounted);
      isMounted.current = false;
    })
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null })
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        if (isMounted.current) {
          console.log('Fetch');
          setState({ loading: false, error: null, data })
        } else {
          console.log('No fetch');
        }
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: 'Error loading'
        })
      })
  }, [url]);

  return (state);
}
