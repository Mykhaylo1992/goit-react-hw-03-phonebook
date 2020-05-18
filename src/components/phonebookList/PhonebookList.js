import React from 'react'

const PhonebookList = ({contacts,deleteItem}) => {
     return(
         <>
         <ul>
             {contacts.map( contact =>{
            return < li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.contact}</p>
            <button data-id={contact.id} onClick={deleteItem}>Delete</button>
            </li>
             })}
         </ul>
         </>
     );
 }
 export default PhonebookList;