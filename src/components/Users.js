import React from "react";
import User from './User';


function Users(props) {
    if(props.users.length > 0) {
        return(
            <div>
                {props.users.map((element) => (
                    <User onEdit={props.onEdit} onDelete={props.onDelete} key={element.id} friend={element}/>
                ))}
            </div>
        );
    } else {
        return(
            <div className="user">
                <h3>No users.</h3>
            </div>
        );
    }   
}

export default Users