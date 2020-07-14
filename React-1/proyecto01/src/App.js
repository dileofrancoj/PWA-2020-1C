import React, { Fragment, Component } from "react";

class Frutas extends Component {
  // componentDidMount() {
  //   console.log("Similar al ngOnInit");
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }
  state = {
    cantidad: 0,
  };
  handlerS = () => {
    this.setState({ cantidad: this.state.cantidad + 1 });
  };
  handlerR = () => {
    this.setState({ cantidad: this.state.cantidad - 1 });
  };
  render() {
    return (
      <div className="col-md-4 col-12">
        <div className="card">
          <div className="card-body">
            <h3>Nombre: {this.props.nombre}</h3>
            <h3>Precio : {this.props.precio}</h3>
            <h3>Emoji : {this.props.emoji}</h3>
            <button
              className="btn btn-primary btn-block"
              onClick={this.handlerS}
            >
              +
            </button>
            <button
              className="btn btn-primary btn-block"
              onClick={this.handlerR}
            >
              -
            </button>
            <h4>Cantidad : {this.state.cantidad}</h4>
            <h5>Total : ${this.state.cantidad * this.props.precio}</h5>
          </div>
        </div>
      </div>
    );
  }
}

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <Frutas nombre="Banana" precio={200} emoji="🍌" />
        <Frutas nombre="Kiwi" precio={250} emoji="🥝" />
        <Frutas nombre="Coco" precio={400} emoji="🥥" />
      </div>
    </div>
  );
};

export default App;
