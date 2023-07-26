import React,{useState} from 'react';

let MessageTwo = ()=>{
    let[message,setMessage]=useState('Hello');

    return(
        <React.Fragment>
        <section className="p-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-info text-white">
                                <p className="h4">useState() Hook</p>
                            </div>
                            <div className="card-body">
                                <p className="h2">{message}</p>
                                <button onClick={e => setMessage('Good Morning')} className="btn btn-success btn-sm">Good Morning</button>
                                <button onClick={e => setMessage('Good Afternoon')} className="btn btn-warning btn-sm">Good Afternoon</button>
                                <button onClick={e => setMessage('Good Evening')} className="btn btn-danger btn-sm">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
    )

}
export default MessageTwo;