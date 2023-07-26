import React,{useState} from 'react';

let ChildCard = (props)=>{
    let[childText,setChildText]=useState('');

    let updateInput=(e)=>{
        setChildText(e.target.value);
        props.sendData(e.target.value);
    }
    return(
        <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card  rgba-green-light ">
                                    <div className="card-header">
                                        <p className="h3">Child Card</p>
                                        <p>{props.pText}</p>
                                    </div>
                                    <div className="card-body">
                                        <form className='form-inline'>
                                            <div className="form-group">
                                                <input 
                                                value={childText}
                                                onChange={updateInput}
                                                type="text" className='form-control' placeholder='Child Text'/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
    )

}
export default ChildCard;