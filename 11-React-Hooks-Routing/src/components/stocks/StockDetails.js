import React,{useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';

let StockDetails = ()=>{
    let stockId=useParams().id;
    let[selectedStock,setSelectedStock]=useState({});
    let[errorMsg,setErrorMsg]=useState('');

    useEffect(()=>{
        let dataURL='https://gist.githubusercontent.com/Meghesha/69698775d6ef19598745d3776af9906d/raw/85e46840a6325fdb6dac80270c9ae9d35c6d09ae/Stocks-19-01-2023';
        Axios.get(dataURL).then((response)=>{
            let aStock=response.data.find(stock=>stock.id===stockId);
            setSelectedStock(aStock)
        }).catch((error)=>{
            console.error(error);
            setErrorMsg(error);
        })
    },[stockId]);

    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h2 text-secondary">Stock Details</p>
                            <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, eos minima autem hic unde animi natus magnam eius laborum, sunt itaque inventore sit quis adipisci voluptatibus odit et provident enim iure similique praesentium commodi. Animi sit dolores id recusandae alias!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* <pre>{JSON.stringify(selectedStock)}</pre> */}
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <h2>{selectedStock.name}</h2>
                                </div>
                                <div className="card-body rgba-purple-light">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            Industry : {selectedStock.industry}
                                        </li>
                                        <li className="list-group-item">
                                            Sector : {selectedStock.sector}
                                        </li>
                                        <li className="list-group-item">
                                            Market : {selectedStock.market_cap}
                                        </li>
                                        <li className="list-group-item">
                                            Symbol : {selectedStock.symbol}
                                        </li>
                                    </ul>
                                    <Link to='/stocks' className='btn btn-secondary btn-sm'>Back</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

}
export default StockDetails;