import React,{useState} from 'react';

let ChangePassword = ()=>{
    let[inputType, setInputType]=useState('password');

    let changeInputType = (e)=>{
        if(e.target.checked){
            setInputType('text')
        }
        else{
            setInputType('password')
        }
    }


    return(
        <React.Fragment>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-light">
                                        <p className="h4">Change Password Type</p>
                                     </div>
                                    <div className="card-body">
                                        <form>
                                          <div className="input-group mb-3">
                                            <input type={inputType} className="form-control"/>
                                              <div className="input-group-append">
                                                 <div className="input-group-text">
                                                    <input onChange={changeInputType} type="checkbox" className='mr-2'/>Show Password
                                                 </div>
                                               </div>
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
export default ChangePassword;