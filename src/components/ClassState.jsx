import React from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      value: '',
    };
  }

  componentDidUpdate() {
    console.log('Actualizando');
    console.log(this.state.value);
    if (this.state.loading) {
      setTimeout(() => {
        console.log('Empezando la peticion');
        if (this.state.value === SECURITY_CODE) {
          this.setState({ loading: false, error: false });
        } else {
          this.setState({ loading: false, error: true });
        }
        console.log('Terminando la peticion');
      }, 3000);
    }

    console.log('Terminando el efecto');
  }
  render() {
    return (
      <div className="ClassState">
        <h1>Eliminar {this.props.name}</h1>
        <p>Por favor escribe el codigo de seguridad.</p>
        {this.state.error && !this.state.loading && <p>Error: El código es incorrecto</p>}
        {this.state.loading && <Loading />}
        <input
          placeholder="Código de seguridad"
          value={this.state.value}
          onChange={(event) => this.setState({ value: event.target.value })}
        />
        <button onClick={() => this.setState({ loading: true })}>Comprobar</button>
      </div>
    );
  }
}

export { ClassState };
