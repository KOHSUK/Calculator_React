import React from 'react'
export default <style>{`
    header {
        font-size: 12pt;
        font-weight: bold;
        text-align: middle;
        letter-spacing: -2px;
        color: #ddddff;
        margin: 10px;
    }
    h1 {
        margin: 10px;
    }
    button.calc-btn {
        width: 50px;
        height: 50px;
        font-size: 1.4em;
        font-weight: bold;
        padding: 10px 10px;
        margin: 5px;
        background-color: #248;
        color: #fff;
        border-style: none;
        box-shadow: 2px 2px 3px 1px #666;
        -moz-box-shadow: 2px 2px 3px 1px #666;
        -webkit-box-shadow: 2px 2px 3px 1px #666;
        text-shadow: 1px 1px 2px #000

        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
    }
    button.calc-btn:hover {
        background-color: #24d;
        color: #fff;
    }
    .buttons {
        list-style: none;
        float: left;
        margin-right: 10px
    }
    .numbers {
        margin: 0px;
        padding: 10px 10px;
    }
    .numbers li {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .operators {
        margin: 0px;
        padding: 10px 10px;
    }
    .operators li {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .result-text {
        padding: 10px 10px 5px 0px;
        font-size: 2.0em;
        font-family: Arial, sans-serif;
        color: #aaa;
        border: 0px;
        margin: auto;
        width: 300px;
        text-align: right;
    }
    .result-container {
        width: 310px;
        margin: 0px 15px 0px 15px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        padding: 0px;
        border: solid 1px #ccc;
    }
    .operator-text {
        color: #aaa;
        font-weight: bold;
        height: 20px;
        margin: 0px 10px;
    }
    dd {
        margin: 0px;
    }
`}</style>