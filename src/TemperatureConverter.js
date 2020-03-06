import React from 'react'
import ValueInput from './ValueInput'
import ConverterContainer from './ConverterContainer'

const scales = {f: 'Farenheit', c: 'Celsius'}

function toCels(farenh) {
    if (isNaN(farenh)) return '';
    return Math.round((farenh - 32) * 5/9);
}
function toFarenh(cels) {
    if (isNaN(cels)) return '';
    return Math.round((cels * 9/5) + 32);
}

class TemperatureConverter extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '-40', scale: 'c'};
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }
    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        let scale = this.state.scale;
        let temperature = this.state.temperature;
        let celsius = scale === 'f' ? toCels(temperature) : temperature;
        let farenheit = scale === 'c' ? toFarenh(temperature) : temperature;

        return (
            <ConverterContainer valueName='Temperature'>
                <ValueInput valueName = 'Temperature' scale = {scales['c']} value={celsius} onValueChange={this.handleCelsiusChange}/>
                <ValueInput valueName = 'Temperature' scale = {scales['f']} value={farenheit} onValueChange={this.handleFahrenheitChange}/>
            </ConverterContainer>
        )
    }
}

export default TemperatureConverter;
