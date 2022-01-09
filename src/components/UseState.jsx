import React from 'react';

const SECURITY_CODE = 'paradigma';

const UseState = ({ name }) => {
  const [state, setState] = React.useState({
    value: '',
    loading: false,
    error: false,
    confirmed: false,
    deleted: false,
  });

  const { value, loading, error, confirmed, deleted } = state;

  const onConfirm = () => {
    setState({
      ...state,
      loading: false,
      error: false,
      confirmed: true,
      value: '',
    });
  };

  const onError = () => {
    setState({
      ...state,
      loading: false,
      error: true,
    });
  };

  const onWrite = (newValue) => {
    setState({
      ...state,
      value: newValue,
    });
  };

  const onCheck = () => {
    setState({
      ...state,
      loading: true,
    });
  };

  const onDelete = () => {
    setState({
      ...state,
      deleted: true,
    });
  };

  const onReset = () => {
    setState({
      ...state,
      confirmed: false,
      deleted: false,
    });
  };

  React.useEffect(() => {
    console.log('Empezando el efecto');

    if (loading) {
      setTimeout(() => {
        console.log('Empezando la peticion');
        if (value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }
        console.log('Terminando la peticion');
      }, 3000);
    }

    console.log('Terminando el efecto');
  }, [loading]);

  if (!confirmed && !deleted) {
    return (
      <div className="UseState">
        <h1>Eliminar {name}</h1>
        <p>Por favor escribe el codigo de seguridad.</p>
        {error && !loading && <p>Error: El código es incorrecto</p>}
        {loading && <p>Loading......</p>}
        <input
          placeholder="Código de seguridad"
          value={value}
          onChange={(event) => {
            onWrite(event.target.value);
          }}
        />
        <button
          onClick={() => {
            onCheck();
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (confirmed && !deleted) {
    return (
      <div>
        <h1>Eliminar {name}</h1>
        <p>¿Seguro que quieres eliminar {name} ?</p>
        <button
          onClick={() => {
            onDelete();
          }}
        >
          Si, Eliminar
        </button>
        <button
          onClick={() => {
            onReset();
          }}
        >
          No, Volver
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{name} fue eliminado</h1>
        <button
          onClick={() => {
            onReset();
          }}
        >
          Recuperar {name}
        </button>
      </div>
    );
  }
};

export { UseState };
