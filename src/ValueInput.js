import React from 'react'

class ValueInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.onValueChange(e.target.value);
    }

    render() {
        return(
            <div>
                <p>{this.props.valueName} in {this.props.scale}:</p>
                <input value={this.props.value} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default ValueInput;
