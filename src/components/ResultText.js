import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultText extends Component {
   constructor(props) {
       super(props);
   } 
   
   render() {
       return (
           <div>
               <div className="result-container">
                   <div className="operator-text">{this.props.message}</div>
                   <input type="text" className="result-text" value={this.props.display} />
               </div>
           </div>
       )
   }
}

export default connect((state)=>state) (ResultText);