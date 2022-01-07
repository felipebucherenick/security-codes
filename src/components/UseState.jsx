import React from 'react';

const SECURITY_CODE = 'paradigma';

const UseState = ({ name }) => {
  const [state, setState] = React.useState({
    value: '',
    loading: false,
    error: false,
  });

  console.log(state.value);

  React.useEffect(() => {
    console.log('Empezando el efecto');

    if (state.loading) {
      setTimeout(() => {
        console.log('Empezando la peticion');
        if (state.value === SECURITY_CODE) {
          setState({
            ...state,
            loading: false,
            error: false,
          });
        } else {
          setState({
            ...state,
            loading: false,
            error: true,
          });
        }
        console.log('Terminando la peticion');
      }, 3000);
    }

    console.log('Terminando el efecto');
  }, [state.loading]);

  return (
    <div className="UseState">
      <h1>Eliminar {name}</h1>
      <p>Por favor escribe el codigo de seguridad.</p>
      {state.error && !state.loading && <p>Error: El código es incorrecto</p>}
      {state.loading && <p>Loading......</p>}
      <input
        placeholder="Código de seguridad"
        value={state.value}
        onChange={(event) => {
          setState({
            ...state,
            value: event.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          setState({
            ...state,
            loading: !state.loading,
          });
        }}
      >
        Comprobar
      </button>
    </div>
  );
};

export { UseState };
