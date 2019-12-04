import { createStore } from 'redux';

let state_value = {
    number_1: 0,
    number_2: 0,
    operator: "",
    previousKey: "",
    display: 0,
    message: "",
    inputCnt: 0,
}

const execEqual = (state, action) => {
    let res = state.number_1;
    if (state.inputCnt > 1) {
        if (state.previousKey === "EQUAL") {
            res = execCalc(state.number_2, state.number_1, state.operator);
        } else {
            res = execCalc(state.number_1, state.number_2, state.operator);
        }
    }

    let num_1 = 0;
    let num_2 = 2;

    if (state.previousKey === "EQUAL") {
        num_1 = res;
        num_2 = state.number_2;
    } else { 
        num_1 = res;
        num_2 = state.number_1;
    }

    let cnt = state.inputCnt;
    // いきなり＝を連打されたときを回避 
    if (cnt > 1 && state.previousKey !== "EQUAL") cnt++;

    let msg = "";
    let oper = "";
    if (!Number.isFinite(res)) {
        msg = "Err";
        num_1 = 0;
        num_2 = 0;
        res = 0;
    } else {
        msg = getMessage(action.type);
        oper = state.operator;
    }
    
    return {
        number_1: num_1,
        number_2: num_2,
        operator: oper,
        display: res,
        previousKey: action.type,
        message: msg, 
        inputCnt: cnt,
    }
}

const execInput = (state, action) => {
    let num_1 = 0;
    let num_2 = 0;
    let cnt = state.inputCnt;

    if (state.previousKey === "INPUT") {
        num_1 = parseFloat(String(state.number_1) + String(action.number));
        num_2 = state.number_2
    } else if (state.previousKey === "EQUAL") {
        num_1 = parseFloat(action.number);
        num_2 = 0;
        cnt = 1;
    } else {
        num_1 = parseFloat(action.number);
        num_2 = state.number_1;
        cnt++;
    }

    let operator = state.operator;

    return {
        number_1: num_1,
        number_2: num_2,
        operator: operator,
        display: num_1,
        previousKey: "INPUT",
        message: state.message,
        inputCnt: cnt,
    }
}

const execCalc = (number_1, number_2, oper) => {
    switch(oper) {
        case 'ADD':
            return parseFloat(number_2) + parseFloat(number_1);
        case 'SUB':
            return parseFloat(number_2) - parseFloat(number_1);
        case 'MUL':
            return parseFloat(number_2) * parseFloat(number_1);
        case 'DIV':
            return parseFloat(number_2) / parseFloat(number_1);
        default:
            return Number.NaN;
    }
}

const execOperation = (state, action) => {
    let num_1 = 0;

    if (state.previousKey === "INPUT" && state.inputCnt > 1) {
        num_1 = execCalc(state.number_1, state.number_2, action.type);
    } else {
        num_1  = state.number_1;
    }

    let oper = action.type;
    let msg = getMessage(action.type);

    return {
        number_1 : num_1,
        number_2 : state.number_2,
        operator : oper,
        display : num_1,
        previousKey : action.type,
        message : msg,
        inputCnt: state.inputCnt,
    }
}

const getMessage = (oper) => {
    switch(oper) {
        case 'ADD':
            return "＋";
        case 'SUB':
            return "ー";
        case 'MUL':
            return "×";
        case 'DIV':
            return "÷";
        case 'EQUAL':
            return "＝";
        default:
            return "";
    }
}

const calc = (state = state_value, action) => {
    switch (action.type) {
        case 'ADD':
        case 'SUB':
        case 'MUL':
        case 'DIV':
            return execOperation(state, action); 
        case 'EQUAL':
            return execEqual(state, action);
        case 'INPUT':
            return execInput(state, action); 
        default:
            return state_value;
    }
}

export const sendAction = (buttonType) => {
    let action = 'AC'
    switch (parseInt(buttonType)) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            action = 'INPUT';
            break;
        case 10:
            action = 'ADD';
            break;
        case 11:
            action = 'SUB';
            break;
        case 12:
            action = 'MUL';
            break;
        case 13:
            action = 'DIV';
            break;
        case 14:
            action = 'EQUAL';
            break;
        case 15:
            action = 'AC';
            break;
        default:
            break;
    }
    return {
        type: action,
        number: buttonType
    }
}

export default createStore(calc);