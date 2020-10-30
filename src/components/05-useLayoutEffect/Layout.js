import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './styles.css';

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];
  const [boxSize, setBoxSize] = useState({});
  const pTagRef = useRef();

  useLayoutEffect(() => {
    setBoxSize(pTagRef.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <blockquote className="blockquote text-right">
        <p ref={pTagRef} className="mb-0">
          {quote}
        </p>
      </blockquote>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente frase
      </button>
    </div>
  );
};
