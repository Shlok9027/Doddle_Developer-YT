import React from 'react'

function UserGreeting(props) {
    
  return(props.isLoggedIn ? <h2>Namaste {props.username}</h2> :
                              <h2>Please try to login</h2>);
     

    
    }


export default UserGreeting
