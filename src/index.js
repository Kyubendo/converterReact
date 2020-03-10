import React from 'react'
import ReactDOM from 'react-dom'
import './mysass.scss'
import TemperatureConverter from './TemperatureConverter'
import LengthConverter from './LengthConverter'
import WeightConverter from './WeightConverter'


class Body extends React.Component {
    render() {
        return (
            <>
                <LengthConverter/>
                <WeightConverter/>
                <TemperatureConverter/>
            </>
        )
    }
}

ReactDOM.render(<Body/>, document.getElementById('root'));
