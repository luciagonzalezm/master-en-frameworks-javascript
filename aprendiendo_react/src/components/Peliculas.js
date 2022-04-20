import React, { Component } from "react";
import Pelicula from "./Pelicula";
import Slider from './Slider';
import Sidebar from './Sidebar';


class Peliculas extends Component {
    state = {};

    cambiarTitulo = () => {
        var { peliculas } = this.state;
        //var random = Math.floor(Math.random() * 3);
        peliculas[2].titulo = 'Batman Begins'
        this.setState({
            peliculas: peliculas
        });
    };

    favorita = (pelicula, indice) => {
        console.log("Favorita marcada");
        console.log(pelicula, indice);
        this.setState({
            favorita: pelicula
        });
    };

    componentWillMount() {
        //alert("Se va a montar el componente");
        this.setState({
            peliculas: [
                { titulo: 'Spiderman 4', image: 'https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/03/spider-man-scaled.jpg?fit=1200%2C753&ssl=1' },
                { titulo: 'Los Vengadores Endgame', image: 'https://i1.wp.com/hipertextual.com/wp-content/uploads/2019/04/hipertextual-nuevo-trailer-avengers-endgame-agradece-fans-universo-marvel-2019351167.jpg?fit=1600%2C900&ssl=1' },
                { titulo: 'Batman vs Superman', image: 'https://www.publico.es/uploads/2015/04/17/5530efbf7aeaf.jpg' }
            ],
            nombre: 'Lucía González',
            favorita: {}
        });
    };

    componentDidMount() {
        //alert("Ya se ha montado el componente");
    };

    componentWillUnmount() {
        //alert("Me voy a desmontar");
    }

    render() {
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        };

        var favorita;
        if (this.state.favorita.titulo) {
            favorita = (
                <p className="favorita" style={pStyle}>
                    <strong>La película favorita es: </strong>
                    <span>{this.state.favorita.titulo}</span>
                </p>
            );
        } else {
            favorita = (
                <p>No hay película favorita</p>
            );
        }
        return (
            <React.Fragment>
                <Slider
                    title="Películas"
                    size="slider-small"
                >
                </Slider>
                <div className="center">
                    <div id="content" className="peliculas">
                        <h2 className="subheader">Listado de</h2>
                        <p>Selección de las películas favoritas de: {this.state.nombre}</p>
                        <p>
                            <button onClick={this.cambiarTitulo}>Cambiar título de Batman</button>
                        </p>
                        {/**{
                    this.state.favorita.titulo ? (
                        <p className="favorita" style={pStyle}>
                            <strong>La película favorita es: </strong>
                            <span>{this.state.favorita.titulo}</span>
                        </p>
                    ) : (
                        <p>No hay película favorita</p>
                    )

                }
                */}
                        {favorita}
                        {/** Crear componente película */}
                        <div id="articles" className="peliculas">
                            {
                                this.state.peliculas.map((pelicula, i) => {
                                    return (
                                        <Pelicula key={i} pelicula={pelicula} indice={i} marcarFavorita={this.favorita}></Pelicula>
                                    )
                                })
                            }
                        </div>

                    </div>
                    <Sidebar></Sidebar>
                </div>
            </React.Fragment>


        );
    }
}

export default Peliculas;