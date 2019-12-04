import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';

const Layout = (props) => {
    return (
        <div>
            <Header title={props.title} />
            {props.children}
        </div>
    )
}

export default connect((state)=>state) (Layout);