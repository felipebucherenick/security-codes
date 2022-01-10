import React from 'react';

const SECURITY_CODE = 'paradigma';

const initialState = {
  value: '',
  loading: false,
  error: false,
  confirmed: false,
  deleted: false,
};

const actionTypes = {
  confirm: 'CONFIRM',
  error: 'ERROR',
  write: 'WRITE',
  check: 'CHECK',
  delete: 'DELETE',
  reset: 'RESET',
};

const reducerObject = (state, payload) => ({
  [actionTypes.confirm]: {
    ...state,
    loading: false,
    error: false,
    confirmed: true,
    value: '',
  },
  [actionTypes.error]: {
    ...state,
    loading: false,
    error: true,
  },
  [actionTypes.write]: {
    ...state,
    value: payload,
  },
  [actionTypes.check]: {
    ...state,
    loading: true,
  },
  [actionTypes.delete]: {
    ...state,
    deleted: true,
  },
  [actionTypes.reset]: {
    ...state,
    confirmed: false,
    deleted: false,
  },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

const UseReducer = ({ name }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const { value, loading, error, confirmed, deleted } = state;

  const onConfirm = () => {
    dispatch({ type: actionTypes.confirm });
  };

  const onError = () => {
    dispatch({ type: actionTypes.error });
  };

  const onWrite = (event) => {
    dispatch({ type: actionTypes.write, payload: event.target.value });
  };

  const onCheck = () => {
    dispatch({ type: actionTypes.check });
  };

  const onDelete = () => {
    dispatch({ type: actionTypes.delete });
  };

  const onReset = () => {
    dispatch({ type: actionTypes.reset });
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
        <input placeholder="Código de seguridad" value={value} onChange={onWrite} />
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

export { UseReducer };
