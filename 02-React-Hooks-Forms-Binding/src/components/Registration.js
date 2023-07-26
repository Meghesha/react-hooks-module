import React,{useState} from 'react';

let Registration = ()=>{
    let[user,setUser] = useState({
        username : '',
        email : '',
        password : '',
        selectedCar : '',
        status : false
    })

    let updateInput = (e)=>{
        if(e.target.checked){
            setUser({
                ...user,
                [e.target.name] : e.target.checked
            })
        }else{
            setUser({
                ...user,
                [e.target.name] : e.target.value
            })
        }
    }
    let formSubmit = (e)=>{
        e.preventDefault();
        console.log(user);
    }
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React Hooks-Forms Binding</a>
            </nav>
        {/* <pre>{JSON.stringify(this.state)}</pre> */}
        <section className="p-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <p className="h4">Register</p>
                            </div>
                            <div className="card-body">
                                <form onSubmit={formSubmit}>
                                    <div className="form-group">
                                        <input 
                                        name = "username"
                                        value={user.username}
                                        onChange={updateInput}
                                        type="text" className="form-control" placeholder="Enter your username" />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                        name = "email"
                                        value={user.email}
                                        onChange={updateInput}
                                        type="email" className="form-control" placeholder="Enter your email Id" />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                         name = "password"
                                         value={user.password}
                                         onChange={updateInput}
                                        type="password" className="form-control" placeholder="Enter the password" />
                                    </div>
                                    <div className="for-group">
                                        <select name="selectedCar" className='form-control' onChange={updateInput}>
                                            <option value="">Select A Car</option>
                                            <option value="Mercedes-Benz">Mercedes-Benz</option>
                                            <option value="Lamborghini">Lamborghini</option>
                                            <option value="Bugatti">Bugatti</option>
                                            <option value="Audi">Audi</option>
                                            <option value="Volvo">Volvo</option>
                                            <option value="Ferrari">Ferrari</option>
                                        </select>
                                    </div>
                                    <div className="form-group form-check">
                                        <input 
                                        name="status" 
                                        onChange={updateInput}
                                        className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                        <label className="form-check-label">
                                        Terms & Conditions
                                        </label>
                                    </div>
                                    <div>
                                        <input type="submit" value="Register" className="btn btn-success btn-sm" />
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
export default Registration;