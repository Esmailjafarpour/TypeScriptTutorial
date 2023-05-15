import React from 'react';
import PropTypes from 'prop-types';


type GreetProps ={
     name : string
     messageCount? : number
     isLoggedIn : boolean
}

function Greet(props : GreetProps) {

     const {messageCount = 0 } = props
     return (
          <div>
               {props.isLoggedIn ? 
                    <h1>wellcome {props.name}! you have {messageCount} unread messages</h1>
               : 
                    <h1>wellcome Guest </h1>
               }
          </div>
     );
}

export default Greet;