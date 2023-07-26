import React,{useState} from 'react';

let SelectBox = ()=>{
    let[selectedBox, setSelectedBox] = useState('')

    let clickSelect =(e)=>{
        setSelectedBox(e.target.value)
    }
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React Hooks-Forms Binding</a>
            </nav>

            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <h2>Select Box</h2>
                                </div>
                                <div className="card-body">
                                <select  onChange={clickSelect} class="form-select" aria-label="Default select example" >
  <option selected>Select any number</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<p className="lead">{selectedBox}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

}
export default SelectBox;