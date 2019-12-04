import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import Layout from './Layout';
import style from '../static/Style';
import ResultText from './ResultText';

const Calculator = (props) => {
    return (
    <div>
        {style}
        <Layout title="Calculator">
            <ResultText />
            <ul className="buttons numbers" >
                <li>
                    <Button buttonType="7"/>
                    <Button buttonType="8"/>
                    <Button buttonType="9"/>
                </li>
                <li>
                    <Button buttonType="4"/> 
                    <Button buttonType="5"/> 
                    <Button buttonType="6"/> 
                </li>
                <li>
                    <Button buttonType="1"/> 
                    <Button buttonType="2"/> 
                    <Button buttonType="3"/> 
                </li>
                <li>
                    <Button buttonType="0"/> 
                </li> 
            </ul>
            <ul className="buttons operators" >
                <li>
                    <Button buttonType="15" />                   
                </li>
                <li>
                    <Button buttonType="10" />
                    <Button buttonType="11" />
                </li>
                <li>
                    <Button buttonType="12" />
                    <Button buttonType="13" />
                </li>
                <li>
                    <Button buttonType="14" />
                </li>
            </ul>
        </Layout>    
    </div>
    );
}

export default connect((state)=>state) (Calculator);