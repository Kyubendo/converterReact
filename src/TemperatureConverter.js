import React from 'react';

const scales = {f: 'Farenheit', c: 'Celsius'}

function toCels(farenh) {
    if(isNaN(farenh)) return '';
    return Math.round((farenh - 32) * 5/9);
}

function toFarenh(cels) {
    if(isNaN(cels)) return '';
    return Math.round((cels * 9/5) + 32);
}


class TemperatureInput extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <div>
                <p>Temperature in {scales[scale]}:</p>
                <input value={temperature} onChange={this.handleChange}/>
            </div>

        )
    }
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
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? toCels(temperature) : temperature;
        const farenheit = scale === 'c' ? toFarenh(temperature) : temperature;
        return (
            <div style={{float: 'left'}}>
                <fieldset style={{width: '330px'}}>
                    <legend><h3>Temperature converter</h3></legend>
                    <TemperatureInput scale = "c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                    <TemperatureInput scale = "f" temperature={farenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                </fieldset>
            </div>
        )
    }
}

export default TemperatureConverter;
