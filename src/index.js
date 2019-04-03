import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {
    constructor(props){
        super(props); // do every time a constructor function is defined inside of a class component
        this.state = { lat: null, errorMessage: '' }; // this is the only time we ever do direct assignment to this.state
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude});
            },
            err => {this.setState({ errorMessage: err.message})} 
        );
    }
    // react says we have to define render!!
    render () {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }
        );
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));