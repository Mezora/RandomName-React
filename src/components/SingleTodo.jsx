import React from 'react'

export default function SingleTodo ( props ) {
    function handleDelete ( id ) {
        const updatedUser = [...props.userArray].filter( ( user ) => user.id !== props.id)
        props.setUserArray(updatedUser);
        console.log(updatedUser)
    } 

    return (
        <div className = "singleTodo">
            <p>{props.user}</p>
            <button 
                className = "btn"
                onClick = { ( ) => handleDelete( props.id )}
            >delete</button>
        </div>
    )
}