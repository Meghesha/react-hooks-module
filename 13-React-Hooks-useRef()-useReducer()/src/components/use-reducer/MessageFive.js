import React, { useReducer } from 'react';

let MessageFive = ()=>{
    let initialState = 'Hello';

    //Action Types
    const GOOD_MORNING = 'GOOD MORNING';
    const GOOD_AFTERNOON ='GOOD AFTERNOON';
    const GOOD_EVENING ='GOOD EVENING';

    let reducer = (state=initialState , action)=>{
        //logic
        switch(action.type){
            case GOOD_MORNING:
                return 'Good Morning';
            case GOOD_AFTERNOON:
                return 'Good Afternoon';
             case GOOD_EVENING:
                return 'Good Evening'
            default : return 'Hello'    
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
                                <div className="card-header bg-danger text-white">
                                    <p className="h4">useReducer() Hook - Redux Pattern</p>
                                </div>
                                <div className="card-body">
                                    <p className="h2">{message}</p>
                                    <button onClick={e => dispatch({type : GOOD_MORNING})} className="btn btn-success btn-sm">Good Morning</button>
                                    <button onClick={e => dispatch({type : GOOD_AFTERNOON})} className="btn btn-warning btn-sm">Good Afternoon</button>
                                    <button onClick={e => dispatch({type : GOOD_EVENING})} className="btn btn-danger btn-sm">Good Evening</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

}
export default MessageFive;