import React,{useState} from 'react';

let HoobySelectorCheckBpx = ()=>{
    let[hobby, setHobby]=useState({
        eating : '',
        coding : '',
        sleeping : ''
    })
    let updateCheck = (e)=>{
        setHobby({
            ...hobby,
            [e.target.name]:e.target.checked
        })
    }
    return(
        <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-header bg-secondary text-white">
                                        <p className="h4">Hobby Selector</p>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                            <div className="form-check">
                                                <input name='eating' onClick={updateCheck} className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    Eating
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input name='coding' onClick={updateCheck} className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                                <label className="form-check-label" htmlFor="defaultCheck2">
                                                    Coding
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input name='sleeping' onClick={updateCheck} className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                                <label className="form-check-label" htmlFor="defaultCheck2">
                                                    Sleeping
                                                </label>
                                            </div>
                                            </div>

                                            <div className="col-md-9">
                                                {
                                                    hobby.eating &&
                                                    <div className="card m-2 animated jello">
                                                      <div className="card-body bg-success text-white" style=  {{borderRadius : '5px'}}>
                                                        <p className="h4"><i className="fa fa-check-circle"/>Eating</p>
                                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veniam!</small>
                                                      </div>
                                                    </div>
                                                }
                                                {
                                                    hobby.coding &&
                                                    <div className="card m-2 animated shake">
                                                    <div className="card-body bg-warning text-white" style={{borderRadius : '5px'}}>
                                                        <p className="h4"><i className="fa fa-check-circle"/>Coding</p>
                                                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veniam!</small>
                                                    </div>
                                                    </div>
                                                }
                                                
                                                {  
                                                    hobby.sleeping &&
                                                    <div className="card m-2 animated tada">
                                                    <div className="card-body bg-danger text-white" style={{borderRadius : '5px'}}>
                                                          <p className="h4"><i className="fa fa-check-circle"/>Sleeping</p>
                                                          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veniam!</small>
                                                      </div>
                                                  </div>

                                                }
                                              
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
export default HoobySelectorCheckBpx;