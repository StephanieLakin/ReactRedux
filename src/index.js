import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';



class App extends React.Component {
    constructor(props){
        super(props); 

       // this.state = { lat: null, errorMessage: '' };       
    }
    state = { lat: null, errorMessage: ''};
        componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),            
            err => this.setState({ errorMessage: err.message})
        );
    }
    componentDidMount () {
        console.log('My compoonent was rendered to the screen');
    }
    componentDidUpdate() {
        console.log('My component just updated; it rerendered!')
    }

    renderContent() {
        
    }
    // react says we have to define render!!
    render () {
       { return  <SeasonDisplay lat={this.state.lat} />,
        
       <Spinner message="Please accept location request..." />};
            
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));