import React, { useEffect, useState } from 'react';
import Axios from 'axios';

let UserList = ()=>{
    let[users,setUsers]=useState([]);
    let[error,setError]=useState('');

    useEffect(()=>{
        // console.log('Welcome!');
        getAllUsers()
    },[]);

    let getAllUsers = () => {
        let dataURL = 'https://jsonplaceholder.typicode.com/users';
        Axios.get(dataURL).then((response) => {
            console.log(response.data);
            setUsers(response.data);
        }).catch((error) => {
            console.error(error);
            setError(error.message);
        })
    }

        return (
            <React.Fragment>
                <section className="p-3">
                 <div className="conatiner">
                    <div className="row">
                        <div className="col-10 m-auto">
                            {/* <pre>{JSON.stringify(users)}</pre> */}
                          <p className="h2 text-primary">User List</p>
                          <p className="h4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus saepe iure  repellat quaerat iusto voluptate odit expedita modi temporibus eum.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 m-auto">
                            {
                                users.length > 0 ?
                                <React.Fragment>
                                    <table className="table table-hover table-striped text-center">
                                        <thead className="bg-dark text-warning">
                                            <tr>
                                                <th>SNO</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>City</th>
                                                <th>ZipCode</th>
                                                <th>Website</th>
                                            </tr>
                                        </thead>
                                        <tbody className='rgba-blue-light'>
                                            {
                                                users.map((user) => {
                                                    return(
                                                        <tr key={user.id}>
                                                            <td>{user.id}</td>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.address.city}</td>
                                                            <td>{user.address.zipcode}</td>
                                                            <td>{user.website}</td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>

                                </React.Fragment> : null
                            }
                        </div>
                    </div>
                 </div>
                </section>
            </React.Fragment>
        );
};
export default UserList;