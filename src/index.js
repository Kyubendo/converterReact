import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App';
import HeaderContainer from './DeletableHeader'
import MyForm from './Form'
import TemperatureConverter from './TemperatureConverter'
import LengthConverter from './LengthConverter'
import WeightConverter from './WeightConverter'

class Body extends React.Component {
    render() {
        return (
            <div>
                <div><LengthConverter/></div>
                <div><WeightConverter/></div>
                <div><TemperatureConverter/></div>
            </div>
        )
    }
}


ReactDOM.render(<Body/>, document.getElementById('root'));
