import React from 'react';

const scales = {m: 'meters', ft: 'feet'}

function toMeters(feet) {
    if (isNaN(feet)) return '';
    return Math.round(feet / 3.2808 * 100) / 100;
}
function toFeet(meters) {
    if (isNaN(meters)) return '';
    return Math.round(meters * 3.2808 * 10) / 10;
}

class LengthInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onLengthChange(e.target.value);
    }

    render() {
        return (
            <div>
                <p>Length in {scales[this.props.scale]}:</p>
                <input value={this.props.length} onChange={this.handleChange}/>
            </div>
        )
    }
}

class LengthConverter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {scale : 'm', length: 0};
        this.handleMetersChange = this.handleMetersChange.bind(this);
        this.handleFeetChange = this.handleFeetChange.bind(this);
    }

    handleMetersChange(length) {
        this.setState({scale: 'm', length})
    }
    handleFeetChange(length) {
        this.setState({scale: 'ft', length})
    }
    render() {
        let length = this.state.length;
        let scale = this.state.scale;
        let metersLength = scale === 'ft' ? toMeters(length) : length;
        let feetLength = scale === 'm' ? toFeet(length) : length;

        return (
            <div style={{float: 'left'}}>
                <fieldset style={{width: '330px'}}>
                    <legend><h3>Length converter</h3></legend>
                    <LengthInput scale='m' length={metersLength} onLengthChange={this.handleMetersChange}/>
                    <LengthInput scale='ft' length={feetLength} onLengthChange={this.handleFeetChange}/>
                </fieldset>
            </div>
        )
    }
}

export default LengthConverter;
