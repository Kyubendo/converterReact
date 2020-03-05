import React from 'react'

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

    kgChangeHandle(e) {
        this.setState({scale: 'kg', weight: e.target.value});

    }
    lbsChangeHandle(e) {
        this.setState({scale: 'lbs', weight: e.target.value});
    }

    render() {

        let weight = this.state.weight;
        let scale = this.state.scale;
        let kgWeight = scale === 'lbs' ? toKg(weight) : weight;
        let lbsWeight = scale === 'kg' ? toLbs(weight) : weight;

        return (
            <div style={{float: 'left'}}>
                <fieldset style={{width: '350px'}}>
                <legend><h3>Weight converter</h3></legend>
                    <p>Weight in kilograms:</p>
                    <input name='kg' value={kgWeight}  onChange={this.kgChangeHandle}/>
                    <p>Weight in pounds:</p>
                    <input name='lbs' value={lbsWeight} onChange={this.lbsChangeHandle}/>
                </fieldset>
            </div>
        )
    }
}

export default WeightConverter;
