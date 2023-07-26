import React, { useState , useEffect} from 'react';

let DigitalWatch=()=>{
    let[currentTime,setCurrentTime]=useState(new Date().toLocaleTimeString());

    useEffect(()=>{    //componentDidMount()
        let timer =setInterval(()=>{
            setCurrentTime(new Date().toLocaleTimeString());
        },1000);
        return(()=>{  //componentWillUnMount()
            clearInterval(timer);
        })
    },[]);  //componentWillUpdate()

    return(
        <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-header bg-info text-white">
                                        <p className="h4">Digital Watch</p>
                                    </div>
                                    <div className="card-body rgba-amber-light text-center">
                                        <h1 className='display-3'>{currentTime}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
            </React.Fragment>
    )
}
export default DigitalWatch;