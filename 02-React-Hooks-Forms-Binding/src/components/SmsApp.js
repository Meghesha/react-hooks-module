import React,{useState} from 'react';

let SmsApp = ()=>{
    let[app,setApp]=useState({
        maxCount : 150,
        text : ''
    });
    let updateText=(e)=>{
        setApp({
            ...app,
            text : e.target.value
        })
    }
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React Hooks-Forms Binding</a>
            </nav>

                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                <section className="p-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-primary text-white">
                                        <p className="h4">SMS Application</p>
                                    </div>
                                    <div className="card-body">
                                       <form>
                                        <div className="form-group">
                                            <textarea
                                            value={app.text}
                                            onChange={updateText}
                                            maxLength={app.maxCount}
                                            className='form-control' rows="5"></textarea>
                                        </div>
                                       </form>
                                       <div>
                                        <p className="h4">The Characters Remaining : {app.maxCount - app.text.length} </p>
                                       </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                
            </React.Fragment>
    )

}
export default SmsApp;