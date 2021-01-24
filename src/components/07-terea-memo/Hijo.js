import React, { memo } from 'react';

export const Hijo = memo(({ numero, incrementar }) => {
  console.log('me volvi a generar');
  return (
    <button
      className="btn btn-primary mr-2"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
});
