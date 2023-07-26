import React,{useState} from 'react';

let WishMessage = () =>{
    let[wishMsg, setWishMsg] = useState('Hello');

    let sayGoodMorning = (e) => {
        setWishMsg('Good Morning');
    }

    let sayGoodEvening = (value) => {
        setWishMsg(value);
    }

    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React Hooks Events Bonding</a>
            </nav>

            <section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <p className="h2">{wishMsg}</p>
                                </div>
                                <div className="card-body">
                                    <button onClick={sayGoodMorning} className="btn btn-success btn-sm">Good Morning</button>
                                    <button onClick={(e)=>{setWishMsg("Good Afternoon")}} className="btn btn-warning btn-sm">Good Afternoon</button>
                                    <buuton onClick={sayGoodEvening.bind(this,'Good Evening')} className="btn btn-danger btn-sm">GOod Evening</buuton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default WishMessage;