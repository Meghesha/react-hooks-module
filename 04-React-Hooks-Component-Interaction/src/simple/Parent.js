import React,{useState} from 'react';
import Child from './Child';

let Parent = ()=>{
    let[pText,setPText]=useState('I am from Parent Component');
    let[cText,setCText]=useState('Hello');

    let receiveData = (value)=>{
        setCText(value);
    }
    return(
        <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body rgba-purple-light">
                                        <p className="h4">Parent</p>
                                        <p>{cText}</p>
                                        <Child pText={pText} sendData={receiveData}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
    )

}
export default Parent;