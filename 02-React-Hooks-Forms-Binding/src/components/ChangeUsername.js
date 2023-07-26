import React,{useState} from 'react';

let ChangeUsername = ()=>{
    let[userName, setUserName]=useState('')

    let updateInput = (e)=>{
        setUserName(e.target.value)
    }

    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React Hooks-Forms Binding</a>
            </nav>

            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <input value={userName} onChange={updateInput} type="text" className="form-control" />

                                </div>
                                <div className="card-footer">
                                    <p>{userName}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

}
export default ChangeUsername;