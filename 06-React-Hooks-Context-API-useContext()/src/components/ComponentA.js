import React from 'react';
import ComponentB from './ComponentB';

let ComponentA=(props)=>{
    return(
        <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-header rgba-amber-light">
                                        <p className="h3">Component A</p>

                                        <ComponentB/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </React.Fragment>
    )
}
export default ComponentA;