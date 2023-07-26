import React,{useState} from 'react';
import ChildCard from './ChildCard';

let ParentCard = ()=>{
    let[pText,setPText]=useState('');
    let[cText,setCText]=useState('');
    let updateInput=(e)=>{
        setPText(e.target.value);
    }
    let receiveData=(value)=>{
        setCText(value);
    }
    return(
        <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card ">
                                    <div className="card-header rgba-amber-light">
                                        <p className="h3">Parent Card</p>
                                        <p>{cText}</p>
                                    </div>
                                    <div className="card-body rgba-amber-light">
                                        <form className='form-inline'>
                                            <div className="form-group">
                                                <input 
                                                value={pText}
                                                onChange={updateInput}
                                                type="text" className='form-control' placeholder='Parent Text'/>
                                            </div>
                                        </form>
                                        <ChildCard pText={pText} sendData={receiveData}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
    )

}
export default ParentCard;