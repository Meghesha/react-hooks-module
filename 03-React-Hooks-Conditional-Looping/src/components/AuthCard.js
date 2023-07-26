import React,{useState} from 'react';

let AuthCard = ()=>{
    let[isLoggedIn,setIsLoggedIn] =useState(false);
    let login=()=>{
        setIsLoggedIn(true);
    }

    let logout = ()=>{
        setIsLoggedIn(false)
    }
    return(
        <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-primary text-white">
                                        <p className="h4">Auth Card</p>
                                    </div>
                                    <div className="card-body">
                                        {
                                            isLoggedIn ?
                                            <button onClick={logout} className="btn btn-danger btn-sm">LogOut</button>  : 
                                            <button onClick={login} className="btn btn-success btn-sm">Login</button>
                                       
                                        }
                                        
                                        {
                                                isLoggedIn ?
                                                <React.Fragment>
                                                     <p className="h4">Welcome User!</p>
                                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum ut cumque odio, dolorem provident libero maxime reiciendis commodi neque?</p>
                                                </React.Fragment> :
                                                <React.Fragment>
                                                     <p className="h4">Welcome Guest User!</p>
                                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nostrum ut cumque odio, dolorem provident libero maxime reiciendis commodi neque?</p>
                                                </React.Fragment>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
    )
}
export default AuthCard;