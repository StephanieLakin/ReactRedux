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
            err => {
                this.setState({ errorMessage: err.message});
            } 
        );
    }
    componentDidMount () {
        console.log('My compoonent was rendered to the screen');
    }
    componentDidUpdate() {
        console.log('My component just updated; it rerendered!')
    }
    // react says we have to define render!!
    render () {
        return (
                <div>Latitude: {this.state.lat}
                <br />
                    Error: {this.state.errorMessage}
                </div>
                );
      
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));