import React from 'react';

let ContactCard=(props)=>{
    let {selectedContact}=props;
    return(
        <React.Fragment>
        {
            Object.keys(selectedContact).length > 0 ?
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.props.selectedContact)}</pre> */}
                <div className="card sticky-top">
                    <div className="card-header bg-info text-white">
                        <p className="h4">Contact Card</p>
                    </div>
                    <div className="card-body">
                        <ul className='list list-group'>
                            <li className="list-group-item">{selectedContact.name}</li>
                            <li className="list-group-item">{selectedContact.email}</li>
                            <li className="list-group-item">{selectedContact.phone}</li>
                            <li className="list-group-item">{selectedContact.address.city}</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>  : null  
        }
    </React.Fragment>
    )
}
export default ContactCard;