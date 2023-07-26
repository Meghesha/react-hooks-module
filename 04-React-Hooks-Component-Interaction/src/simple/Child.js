import React,{useState} from 'react';

let Child = (props)=>{
    let[childText,setChildText] = useState('I am from Child Component');

    let clickSend = (e)=>{
        props.sendData(childText);
    }
    return(
        <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body rgba-green-light">
                                        <p className="h4">Child</p>
                                        <p>{props.pText}</p>
                                        <button className='btn btn-primary btn-sm' onClick={clickSend}>Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
    )

}
export default Child;