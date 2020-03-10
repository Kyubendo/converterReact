import React from 'react'

function ConverterContainer(props) {
    return(
        <div className="converter">
            <fieldset>
            <legend><h3 className="converterName">{props.valueName} converter</h3></legend>
                {props.children}
            </fieldset>
        </div>
    );
}

export default ConverterContainer;
