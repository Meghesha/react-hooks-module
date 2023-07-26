import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

let Stocks = ()=>{
    let[stocks,setStocks]=useState([]);
    let[errorMessage,setErrorMessage]=useState('');
    let navigate=useNavigate();

    useEffect(()=>{
        let dataURL='https://gist.githubusercontent.com/Meghesha/69698775d6ef19598745d3776af9906d/raw/85e46840a6325fdb6dac80270c9ae9d35c6d09ae/Stocks-19-01-2023';
        Axios.get(dataURL).then((response)=>{
            setStocks(response.data);
        }).catch((error)=>{
            console.error(error);
            setErrorMessage(error);
        })
    },[]);

    let selectStock = (stock)=>{
        navigate(`/stocks/${stock.id}`);
    }

    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-secondary">Stocks List</p>
                            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque sunt accusantium iure quo nisi et quas hic laboriosam provident molestiae! Expedita debitis qui culpa nobis cupiditate voluptates quidem harum et!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* <pre>{JSON.stringify(stocks)}</pre> */}
                            <table className="table table-hover table-secondary table-striped text-center">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Industry</th>
                                        <th>Sector</th>
                                        <th>Symbol</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        stocks.length>0?
                                        <React.Fragment>
                                            {
                                                stocks.map(stock => {
                                                    return(
                                                        <tr key={stock.id} onClick={selectStock.bind(this,stock)}>
                                                        <td>{stock.id}</td>
                                                        <td>{stock.name}</td>
                                                        <td>{stock.industry}</td>
                                                        <td>{stock.sector}</td>
                                                        <td>{stock.symbol}</td>  
                                                    </tr>
                                                    )
                                                })
                                            }
                                        </React.Fragment>:errorMessage
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Stocks;