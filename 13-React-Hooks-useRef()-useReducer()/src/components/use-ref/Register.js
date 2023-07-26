import React from 'react';
import { useRef } from 'react';

let Register = ()=>{
    let registerBtnEL = useRef(null);

    let updateCheck =(e)=>{
        // alert(e.target.checked)
        console.log(registerBtnEL.current)
        registerBtnEL.current.disabled = !e.target.checked
    }

    return(
        <React.Fragment>
            <section className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-info">
                                    <p className="h3">Register</p>
                                </div>
                                <div className="card-body">
                                    <form action="#">
                                        <div>
                                            <div className="form-check">
                                                <input onChange={updateCheck} type="checkbox" className="form-check-input" />
                                                <label className="form-check-label">Terms & Condition</label>
                                            </div>
                                        </div>
                                        <div>
                                            <button ref={registerBtnEL} className="btn btn-info btn-sm" disabled>Register</button>
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
export default Register;