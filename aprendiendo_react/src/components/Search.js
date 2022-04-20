import React, { Component } from "react";
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from "./Articles";

class Search extends Component {
    render() {
        var searched = this.props.match.params.search;
        
        return (
            <div id="search">
                <Slider
                    title={"Búsqueda: " + searched}
                    size="slider-small"
                >
                </Slider>
                <div className="center">
                    <div id="content">
                        {/** Listado de artículos que vendrán de la api rest de node */}
                       <Articles search={searched}></Articles>
                    </div>
                    <Sidebar blog="true"></Sidebar>
                </div>

            </div>
        );
    }
}

export default Search;