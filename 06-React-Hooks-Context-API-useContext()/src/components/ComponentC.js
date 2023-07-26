import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';
import { AppContext } from './context/AppContext';

let ComponentC=()=>{
    let user=useContext(UserContext);
    let app=useContext(AppContext);

    return(
        <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-header rgba-pink-light">
                                        <p className="h3">Component C</p>
                                        <pre>{JSON.stringify(user)}</pre>
                                        <pre>{JSON.stringify(app)}</pre>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </React.Fragment>
    )
}
export default ComponentC;