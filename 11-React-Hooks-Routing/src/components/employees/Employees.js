import Axios  from 'axios';
import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

let Employees = ()=>{
    let[employees,setEmployees]=useState([]);
    let[errorMessage,setErrorMessage]=useState('');

    useEffect(()=>{
        getAllEmployees();
    },[]);

    let getAllEmployees=()=>{
        let dataURL='https://gist.githubusercontent.com/Meghesha/8ce517b65a202e0b2a4142c7364caee8/raw/97c6744f796c564d7de788567e45ebd431f1ac7e/Employees-19-01-2023';
        Axios.get(dataURL).then((response)=>{
            setEmployees(response.data);
        }).catch((error)=>{
            console.error(error);
            setErrorMessage(error);
        })
    }

    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-secondary">Employee List</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quam illum assumenda iure quis earum rerum blanditiis veritatis, ab aut illo dicta accusamus laudantium cum quaerat eaque. Ad provident nobis consequuntur. Sed architecto exercitationem magni.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* <pre>{JSON.stringify(employees)}</pre> */}
                            <table className="table table-hover table-striped text-center table-secondary">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <td>SNO</td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Gender</td>
                                        <td>Country</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employees.length>0 ?
                                         <React.Fragment>
                                            {
                                                employees.map(employee=>{
                                                    return(
                                                        <tr key={employee.id}>
                                                            <td>{employee.id}</td>
                                                            <td><Link to={`/employees/${employee.id}`} className='text-secondary'>{employee.first_name} {employee.last_name}</Link></td>
                                                            <td>{employee.email}</td>
                                                            <td>{employee.gender}</td>
                                                            <td>{employee.country}</td>        
                                                        </tr>
                                                    )
                                                })
                                            }

                                         </React.Fragment>: errorMessage
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
export default Employees;