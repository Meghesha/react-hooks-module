import React, { useState } from 'react';

let Employees=()=>{
    let[employees,setEmployees]=useState([{"id":1,"first_name":"Annette","last_name":"Jersh","email":"ajersh0@friendfeed.com","gender":"Female","ip_address":"25.106.66.227"},
    {"id":2,"first_name":"Jorgan","last_name":"Raffan","email":"jraffan1@ftc.gov","gender":"Male","ip_address":"113.229.182.205"},
    {"id":3,"first_name":"Gregoire","last_name":"Wigfall","email":"gwigfall2@go.com","gender":"Male","ip_address":"191.150.128.55"},
    {"id":4,"first_name":"Brew","last_name":"Belamy","email":"bbelamy3@ed.gov","gender":"Male","ip_address":"185.31.161.29"},
    {"id":5,"first_name":"Brendan","last_name":"Kyrkeman","email":"bkyrkeman4@flavors.me","gender":"Male","ip_address":"195.150.180.88"}])
    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h2">Employee List</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum assumenda magnam excepturi pariatur vel aspernatur veniam molestias quam, iure delectus fugiat soluta, provident voluptate!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover table-striped table-primary text-center">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                        <th>IP_Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employees.length > 0 ? <React.Fragment>
                                            {
                                                employees.map((employee)=>{
                                                    return(
                                                        <tr key={employee.id}>
                                                        <td>{employee.id}</td>
                                                        <td>{employee.first_name} {employee.last_name}</td>
                                                        <td>{employee.email}</td>
                                                        <td>{employee.gender}</td>
                                                        <td>{employee.ip_address}</td>

                                                    </tr>
                                                    ) 
                                                })
                                            }
                                        </React.Fragment>:null
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