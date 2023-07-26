import React,{useState} from 'react';

let CounterClass = () => {
    let [counter, setCounter] = useState(0);

    let incrCounter = (e) => {
        setCounter(counter+1);
    }

    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React Hooks Events Bonding</a>
            </nav>

            <section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="display-4">{counter}</h2>
                                </div>
                                <div className="card-footer">
                                    <button onClick={incrCounter} className="btn btn-secondary btn-sm">Increment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default CounterClass;