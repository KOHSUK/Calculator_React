import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendAction } from '../Store';

class Button extends Component {
    btn = {
        fontSize:"12pt",
        color:"#006",
        padding:"10px",
        margin:"2px"
    }
    buttonType = 99;
    constructor(props) {
        super(props);
        this.buttonType = props.buttonType;
        this.doAction = this.doAction.bind(this);
    }
    doAction(e) {
        let action = sendAction(this.buttonType);
        this.props.dispatch(action);
    }
    render() {
        let btnText;
        switch(parseInt(this.buttonType)) {
            case 10:
                btnText = '＋';
                break;
            case 11:
                btnText = 'ー';
                break;
            case 12:
                btnText = '×';
                break;
            case 13:
                btnText = '÷';
                break;
            case 14:
                btnText = '＝';
                break;
            case 15:
                btnText = 'AC';
                break;
            default:
                btnText = String(this.buttonType);
                break;
        }
        return (
            <div>
                <button className="calc-btn" type="button" onClick={this.doAction}>{btnText}</button>
            </div>
        );
    }
}

export default connect((state)=>state)(Button);