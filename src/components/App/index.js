import React, { Component } from 'react';
import Intro from '../Intro'
import './App.css';

class App extends Component {
    state = {
        series: []
    }

    componentDidMount() {
        const series = ["Vikings", "Game of Thrones"]
        setTimeout(() => {
            this.setState({ series })
        }, 2000);
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
                <h1 className="App-title">TV Series List </h1>
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"            target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
            <Intro message="Here you can find all of your favorite series."/>
            The length of series array - {this.state.series.length}
            </div>
        );
    }
}

export default App;
