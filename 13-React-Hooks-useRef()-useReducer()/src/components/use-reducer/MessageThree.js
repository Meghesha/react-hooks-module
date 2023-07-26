import React, { useReducer } from 'react';

let MessageThree = ()=>{
    let initialState = 'Hello';
    let reducer = (state=initialState,action)=>{
        //logic
        switch(action){
            case 'gm':
                return 'Good Morning';
            case 'ga':
                return 'Good Afternoon';
            case 'ge':
                return 'Good Evening';
            default : return state;            
        }
    }
    let[message,dispatch] = useReducer(reducer,initialState);
    

    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-success text-white">
                                    <p className="h4">useReducer() Hook</p>
                                </div>
                                <div className="card-body">
                                    <p className="h2">{message}</p>
                                    <button onClick={e => dispatch('gm')} className="btn btn-success btn-sm">Good Morning</button>
                                    <button onClick={e => dispatch('ga')} className="btn btn-warning btn-md">Good Afternoon</button>
                                    <button onClick={e => dispatch('ge')} className="btn btn-danger btn-lg">Good Evening</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

}
export default MessageThree;