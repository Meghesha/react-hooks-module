import React, { useEffect, useState } from 'react';
import Axios from 'axios';

let ContactList = (props)=>{
    let[contacts,setContacts]=useState([]);
    let[error,setError]=useState('')
    useEffect(()=>{
        getAllContacts()
    },[])

    let getAllContacts = async() => {
        try {
            let ContactUrl = 'https://gist.githubusercontent.com/Meghesha/416db9a78dc2cfbda658fbb7c03431ff/raw/7f572c656e337bc5179a84cf5040cf86a14a9bcf/Contact-09-01-2023.json';
            let response = await Axios.get(ContactUrl);
            setContacts(response.data)
          } catch (error) {
           setError(error.message)
          }
     }

     let clickContact = (contact) => {
        console.log(contact);
        props.sendContact(contact);
     }

        return (
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                 <table className="table table-hover table-striped">
                                <thead className='table-dark text-white'>
                                    <tr>
                                        <th>SNO</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    contacts.length > 0 ?
                                    <React.Fragment>
                                        {
                                            contacts.map(contact => {
                                                return(
                                                        <tr key={contact.id} onClick={clickContact.bind(this,contact)}>
                                                           <td>{contact.id}</td>
                                                           <td>{contact.name}</td>
                                                           <td>{contact.email}</td>
                                                           <td>{contact.phone}</td>
                                                           <td>{contact.address.city}</td>
                                                        </tr>
                                                )
                                            })
                                        }
                                    </React.Fragment> : null
                                }
                                 </tbody>
                            </table>
            </React.Fragment>
        );
};
export default ContactList;