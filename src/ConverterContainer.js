import React from 'react'

function ConverterContainer(props) {
    return(
        <div style={{float: 'left', margin: '10px 20px 0px 0px'}}>
            <fieldset style={{width: '330px'}}>
            <legend><h3 style={{margin: '10px 0px'}}>{props.valueName} converter</h3></legend>
                {props.children}
            </fieldset>
        </div>
    );
}

export default ConverterContainer;
