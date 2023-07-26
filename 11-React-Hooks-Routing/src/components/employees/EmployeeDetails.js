import Axios from 'axios';
import React,{useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';

let EmployeeDetails = ()=>{
    let[selectedEmployee,setSelectedEmployee]=useState({});
    let[errorMessage,setErrorMessage]=useState('');
    let employeeId=+useParams().id;   //+ conversion to number format

    useEffect(()=>{
        let dataURL='https://gist.githubusercontent.com/Meghesha/8ce517b65a202e0b2a4142c7364caee8/raw/97c6744f796c564d7de788567e45ebd431f1ac7e/Employees-19-01-2023';
        Axios.get(dataURL).then((response)=>{
            let employees = response.data;
            let anEmployee = employees.find(employee=> employee.id === employeeId);
            setSelectedEmployee(anEmployee);
        }).catch((error)=>{
            console.error(error);
            setErrorMessage(error);
        })
    },[employeeId]);

    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-secondary">Employee Details</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusamus beatae cumque assumenda quos laudantium non, hic officia? A et quis dolore dolorum ut mollitia, dolores libero, eligendi vitae totam labore, ratione asperiores accusamus voluptatem! Quod unde minus nulla velit!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {/* <pre>{JSON.stringify(selectedEmployee)}</pre> */}
                            {
                                Object.keys(selectedEmployee).length>0?
                                <React.Fragment>
                                    <div className="card">
                                        <div className="card-header bg-secondary text-white">
                                            <p className="h4">{selectedEmployee.first_name} {selectedEmployee.last_name}</p>
                                        </div>
                                        <div className="card-body rgba-purpe-light">
                                            <div className="row align-items-center">
                                                <div className="col-md-4 text-center">
                                                    <img src={selectedEmployee.image} className='img-fluid img-thumbnail' alt=""/>
                                                </div>
                                                <div className="col-md-8">
                                                    <ul className="list-group">
                                                        <li className="list-group-item">
                                                            EMAIL : {selectedEmployee.email}
                                                        </li>
                                                        <li className="list-group-item">
                                                            COUNTRY : {selectedEmployee.country}
                                                        </li>
                                                        <li className="list-group-item">
                                                            IP ADDRESS : {selectedEmployee.ip_address}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link to='/employees' className="btn btn-secondary btn-sm">Back</Link>

                                        </div>
                                    </div>
                                </React.Fragment>:errorMessage
                            }

                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

}
export default EmployeeDetails;