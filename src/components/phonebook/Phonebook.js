import React from 'react'


const Phonebook = ({onHandleSubmit, onHandleChange}) => {
    return (
    <>
        <form onSubmit={onHandleSubmit}>
                <input type="text" onChange={onHandleChange} name="name"/>
                <input type="text" onChange={onHandleChange} name="contact"/>
                <button type="submit">Add contact</button>
        </form>
            
      </>      
    );
}

export default Phonebook;