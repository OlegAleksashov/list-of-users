import React, { useState, useRef } from "react";

function AddUser(props) {
    let userAdd = {}
    const [state, setState] = useState(
        {
            firstname: '',
            secondname: '',
            bio: '',
            age: 1,
            isHappy: false
        }
    );

    const myForm = useRef(null);

    return(
        <form ref={myForm}>
            <input 
                placeholder="Name" 
                onChange={(e) => setState(prevState => ({...prevState, firstname: e.target.value}))}
            />
            <input 
                placeholder="Secondname" 
                onChange={(e) => setState(prevState => ({...prevState, secondname: e.target.value}))}
            />
            <input 
                placeholder="Age" 
                onChange={(e) => setState(prevState => ({...prevState, age: e.target.value}))}
            />
            <textarea 
                placeholder="Bio" 
                onChange={(e) => setState(prevState => ({...prevState, bio: e.target.value}))}>
            </textarea>
            <label htmlFor="isHappy">Are you happy?</label>
            <input 
                type="checkbox" 
                id="isHappy" 
                onChange={(e) => setState(prevState => ({...prevState, isHappy: e.target.checked}))}
            />
            <button type="button" onClick={() => {
                myForm.current.reset();// clean up the form
                userAdd = {
                    firstname: state.firstname,
                    secondname: state.secondname,
                    age: state.age,
                    bio: state.bio,
                    isHappy: state.isHappy
                }
                if(props.friend) {
                    userAdd.id = props.friend.id;
                }
                props.onAdd(userAdd)}}>Add</button>
        </form>
    );
}

export default AddUser