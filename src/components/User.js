import React from "react";
import{ IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'

function User(props) {
    
    return (
    <div className="user">
        <IoCloseCircleSharp onClick={() => props.onDelete(props.friend.id)} className='delete-icon'/>
        <IoHammerSharp className="edit-icon"/>
        <h3>{props.friend.firstname} {props.friend.secondname}</h3>
        <p>{props.friend.bio}</p>
        <b>{props.friend.isHappy ? 'Happy!' : 'Sad...' }</b> 
    </div>
    );
}

export default User