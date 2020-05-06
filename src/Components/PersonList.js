import React, { Fragment } from 'react';

const PersonList = (props) => {


    return (
        <Fragment>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">LastName</th>
                        <th scope="col">--</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map((user, index) =>

                        <tr key={user.id} >
                            <th scope="row"></th>
                            <td>{user.name}</td>
                            <td>{user.lastname}</td>
                            <td>
                                <button 
                                    className="btn btn-sm btn-primary"
                                    onClick={()=>{ props.userSelected(user)}}>
                                    Edit
                                </button>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => { props.deleteUser(user.id) }}>
                                    Delete
                                </button>
                            </td>
                        </tr>)}

                </tbody>
            </table>
        </Fragment>
    );
}

export default PersonList;