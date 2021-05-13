import React from 'react'
import SingleTodo from './SingleTodo.jsx'

export default function Todo() {
    const [user, setUser] = React.useState("");
    const [userArray, setUserArray] = React.useState([]);
    let alertBox = document.getElementById("todo-winner");
        

    function randomUserArray ( ) {
        let randomUser = [...userArray][Math.floor(Math.random() * [...userArray].length)]
        let spanText = document.getElementById("todo-p");
        alertBox.style.display = 'flex';
        spanText.innerHTML = String(randomUser.name);
    }

    function handleBack ( ) {
        alertBox.style.display = 'none';
        setUserArray([]);
    }
    
    function handleSubmit ( e ) {
        e.preventDefault();
        if (user !== "") {
            const newUser = {
                name: user,
                id: new Date().getTime()
            }
            setUserArray([...userArray].concat(newUser));
            setUser("");
        } else {
            setUser("");
            alert("Please enter a valid name");
        }
    }

    function handlePick( ) {
        (userArray.length >= 2) ? randomUserArray() : alert("Please enter at least 2 names")  
    }

    return (
        <React.Fragment>
            <div className = "todo-wrapper">
                <form onSubmit = {handleSubmit} className = "todo-form">
                    <input 
                        type="text"
                        onChange = { ( e ) => {
                            setUser(e.target.value) 
                        }}
                        value = {user}
                        className = "input" 
                    />
                    <button className = "btn">ADD</button>
                    <button
                        type = "button"
                        className = "btn btn-rulette"
                        onClick = { ( ) => handlePick( ) }
                    >PICK</button>
                </form>
                <div className = "userWrapper">
                    {
                        userArray.map(  ( user ) => (
                            <SingleTodo user = {user.name} key = {user.id} id = {user.id} userArray = {userArray} setUserArray = {setUserArray}/>
                        ))
                    }
                </div>
            </div>
            <div className="todo-winner-wrapper d-none" id="todo-winner">
                <div className="todo-winner">
                    <p>Winner: <span id = "todo-p"></span></p>
                    <button 
                        type = "button"
                        className = "btn"
                        onClick = { ( ) => {handleBack( )} }
                    >Retry</button>
                </div>
            </div>
        </React.Fragment>
    )
}