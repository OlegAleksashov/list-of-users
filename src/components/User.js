import React, { useState } from "react";
import{ IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import AddUser from "./AddUser";

function User(props) {
    const [edit, setEdit] = useState(false)

    return (
    <div className="user">
        <IoCloseCircleSharp onClick={() => props.onDelete(props.friend.id)} className='delete-icon'/>
        <IoHammerSharp onClick={() => {
            setEdit({
                edit: !edit
            })
        }} className="edit-icon"/>
        <h3>{props.friend.firstname} {props.friend.secondname}</h3>
        <p>{props.friend.bio}</p>
        <b>{props.friend.isHappy ? 'Happy!' : 'Sad...'}</b> 

        {edit && <AddUser friend={props.friend} onAdd={props.onEdit}/>}
    </div>
    );
}

export default User