import React from 'react';
import Season from './components/season/Season'
import Loader from './components/loader/loader'

//create component
class App extends React.Component {
    state = {
        latitude: null,
        errorMassage: ''
    }
    constructor(props) {
        console.log('constructer is called');
        super(props)
    }
    componentDidMount() {
        console.log('Did Mount is called');

        window.navigator.geolocation.getCurrentPosition((position) => {
            // console.log('position', position);
            this.setState({
                latitude: position.coords.latitude,
            })
        }, (err) => {
            console.log(err);
            this.setState({ errorMassage: err.message })
        })
    }

    componentDidUpdate() {
        console.log('compoenent did update');
    }

    decideOutput() {
        if (this.state.errorMassage) {
            return (
                <div>Error :{this.state.errorMassage}</div>)
        }
        else if (this.state.latitude) {
            return (
                <Season lat={this.state.latitude}></Season>
            )
        }
        return (
            <Loader message='Please, Allow Location to see the result'></Loader>
        );
    }

    render() {
        return (
            <div>
                {this.decideOutput()}
            </div>
        )
    }
}

export default App;