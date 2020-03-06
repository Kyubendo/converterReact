import React from 'react'
import ValueInput from './ValueInput'
import ConverterContainer from './ConverterContainer'

const scales = {m: 'meters', ft: 'feet'}

function toMeters(feet) {
    if (isNaN(feet)) return '';
    return Math.round(feet / 3.2808 * 100) / 100;
}
function toFeet(meters) {
    if (isNaN(meters)) return '';
    return Math.round(meters * 3.2808 * 10) / 10;
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
            <ConverterContainer valueName='Lenght'>
                <ValueInput valueName = 'Length' scale = {scales['m']} value={metersLength} onValueChange={this.handleMetersChange}/>
                <ValueInput valueName = 'Length' scale = {scales['ft']} value={feetLength} onValueChange={this.handleFeetChange}/>
            </ConverterContainer>
        )
    }
}

export default LengthConverter;
