import React from 'react'
import ValueInput from './ValueInput'
import ConverterContainer from './ConverterContainer'

const scales = {kg: 'kilograms', lbs: 'pounds'}

function toKg(lbs) {
    if (isNaN(lbs)) return '';
    return Math.round(lbs / 2.20462 * 10) / 10;
}
function toLbs(kg) {
    if (isNaN(kg)) return '';
    return Math.round(kg * 2.20462 * 10) / 10;
}

class WeightConverter extends React.Component {
    constructor(props) {
        super(props);
        this.kgChangeHandle = this.kgChangeHandle.bind(this);
        this.lbsChangeHandle = this.lbsChangeHandle.bind(this);
        this.state = {scale: 'kg', weight: 0};
    }

    kgChangeHandle(weight) {
        this.setState({scale: 'kg', weight});
    }
    lbsChangeHandle(weight) {
        this.setState({scale: 'lbs', weight});
    }

    render() {
        let weight = this.state.weight;
        let scale = this.state.scale;
        let kgWeight = scale === 'lbs' ? toKg(weight) : weight;
        let lbsWeight = scale === 'kg' ? toLbs(weight) : weight;

        return (
            <ConverterContainer valueName = 'Weight'>
                <ValueInput valueName = 'Weight' scale = {scales['kg']} value={kgWeight} onValueChange={this.kgChangeHandle}/>
                <ValueInput valueName = 'Weight' scale = {scales['lbs']} value={lbsWeight} onValueChange={this.lbsChangeHandle}/>
            </ConverterContainer>
        )
    }
}

export default WeightConverter;
