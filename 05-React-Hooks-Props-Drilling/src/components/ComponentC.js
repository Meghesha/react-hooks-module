import React from 'react';

let ComponentC=(props)=>{
    return(
        <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-header rgba-pink-light">
                                        <p className="h3">Component C</p>
                                        <p>{JSON.stringify(props.user)}</p>
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