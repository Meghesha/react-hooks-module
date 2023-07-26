import React,{useState} from 'react';

let ClientCard = (props)=>{
    let[product,setProduct]=useState({
        prize:'',
        GST:''
    })
    let updateInput=(e)=>{
        setProduct({
            ...product,
            [e.target.name]:e.target.value
        })
    }
    let calValue=(e)=>{
        e.preventDefault();
        let tax = Number(product.prize) *Number(product.GST)/100;
        let total=Number(product.prize) + tax;
        props.sendTotal(total);
    }
    return(
        <React.Fragment>
                <div className="card">
                    <div className="card-header bg-secondary text-white">
                        <p className="h4">Product Card</p>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <input 
                                onChange={updateInput}
                                value={product.prize}
                                name='prize' type="number" className="form-control" placeholder='Product Prize' />
                            </div>
                            <div className="form-group">
                                <input 
                                value={product.GST}
                                onChange={updateInput}
                                name='GST' type="number" className="form-control" placeholder='GST' />
                            </div>
                            <input onClick={calValue} type="button" value="Calculate Total" className='btn btn-secondary btn-sm' />
                        </form>
                    </div>
                </div>
            </React.Fragment>
    )

}
export default ClientCard;