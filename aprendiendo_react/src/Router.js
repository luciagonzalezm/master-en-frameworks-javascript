import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//Importar componentes
import MiComponente from "./components/MiComponente";
import Error from "./components/Error";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import Blog from "./components/Blog";
import Peliculas from "./components/Peliculas";
import Formulario from "./components/Formulario";
import Search from "./components/Search";
import Article from "./components/Article";
import CreateArticle from "./components/CreateArticle";
import EditArticle from "./components/EditArticle";

class Router extends Component {
    render() {

        return (
            <BrowserRouter>
                <Header></Header>


                {/** CONFIGURAR RUTAS Y PÁGINAS */}
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/blog" component={Blog}></Route>
                    <Route exact path="/blog/articulo/:id" component={Article}></Route>
                    <Route exact path="/blog/crear" component={CreateArticle}></Route>
                    <Route exact path="/blog/editar/:id" component={EditArticle}></Route>
                    <Route exact path="/blog/busqueda/:search" component={Search}></Route>
                    <Route exact path="/redirect/:search" render={(props) => {
                        var search = props.match.params.search;
                        return(<Redirect to={'/blog/busqueda/' + search}></Redirect>);
                    }
                    }></Route>
                    <Route exact path="/formulario" component={Formulario}></Route>
                    <Route exact path="/peliculas" component={Peliculas}></Route>



                    <Route exact path="/segunda-ruta" component={MiComponente}></Route>
                    <Route exact path="/pagina-1" render={() => (
                        <React.Fragment>
                            <h1>Hola mundo desde la ruta: PÁGINA 1</h1>
                            <MiComponente saludo="Hola amigo"></MiComponente>
                        </React.Fragment>
                    )
                    }></Route>
                    <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {
                        var nombre = props.match.params.nombre;
                        var apellidos = props.match.params.apellidos;
                        return (
                            <div id="content">
                                <h2 className="subheader">Página de pruebas</h2>
                                <h3>{
                                    nombre && !apellidos && <React.Fragment>{nombre}</React.Fragment>
                                }</h3>
                                <h3>{
                                    nombre && apellidos && <React.Fragment>{nombre + ' ' + apellidos}</React.Fragment>
                                }</h3>
                            </div>
                        );
                    }
                    }></Route>
                    <Route component={Error}></Route>
                </Switch>

                <div className="clearfix"></div>

                <Footer></Footer>
            </BrowserRouter>
        );
    }
}

export default Router;