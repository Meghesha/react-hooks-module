import React,{useSTate, useState} from 'react';

let ProductItem = ()=>{
    let[product,setProduct] = useState({
        sno : '104sd',
        image : 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1668271334/Croma%20Assets/Communication/Wearable%20Devices/Images/262052_0_ibxrul.png/mxw_1440,f_auto',
        name : 'Smart Watch',
        price : 25000,
        qty : 1
    })

    let decrementQty = (e) =>{
        setProduct({
            ...product,
            qty : (product.qty-1>0) ? product.qty-1 : 1
        })
    }

    let incrementQty = (e) =>{
        setProduct({
            ...product,
            qty : product.qty+1
        })
    }

    return(
        <React.Fragment>
            <nav className="navber navbar-dark navbar-expand-sm bg-dark">
                <a href="/" className="navbar-brand">React Hooks Events Binding</a>
            </nav>

            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h2 text-primary">Cart Items</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt nostrum deserunt maxime, nisi explicabo fugit expedita suscipit et dolore debitis harum, quis nam quo? Tempore voluptas veritatis minima facere excepturi! Nostrum provident neque autem vel sed magni optio?</p>    
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <table className="table table-hover text-center table-primary table-striped">
                            <thead className="bg-light text-dark">
                                <tr>
                                 <th>SNO</th>
                                 <th>Image</th>
                                 <th>Name</th>
                                 <th>Price</th>
                                 <th>Qty</th>
                                 <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.sno}</td>
                                    <td>
                                        <img src={product.image} width="50" height="50" alt="" />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>&#8377;{product.price}</td>
                                    <td>
                                        <i onClick={decrementQty}  className="fa fa-minus-circle mx-2"/>
                                        {product.qty}
                                        <i onClick={incrementQty}  className="fa fa-plus-circle mx-2"/>
                                    </td>
                                    <td>&#8377;{product.price*product.qty}</td>
                                </tr>
                            </tbody>
                        </table>  
                        </div>
                    </div>
                </div>
               
            </section>
        </React.Fragment>
    )
}
export default ProductItem;