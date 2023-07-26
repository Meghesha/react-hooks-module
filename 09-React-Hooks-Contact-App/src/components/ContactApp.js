import React, { useState } from 'react';
import ContactList from './ContactList';
import ContactCard from './ContactCard';

let ContactApp = ()=>{
    let[selectedContact,setSelectedContact]=useState({})
    let recieveContact=(value)=>{
        setSelectedContact(value);
    }
    return(
        <React.Fragment>
                {/* <pre>{JSON.stringify(selectedContact)}</pre> */}
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h4 className="text-primary">Contact List App</h4>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae tempore quisquam quibusdam. Expedita quo aliquid, voluptatum animi suscipit consequuntur.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                            <ContactList sendContact={recieveContact}/>
                            </div>
                            <div className="col-md-3">
                                <ContactCard selectedContact={selectedContact}/>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
    )
}
export default ContactApp;