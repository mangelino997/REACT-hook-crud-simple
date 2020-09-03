import React, { useState, Fragment } from 'react';
// el Fragment se utiliza para envolver todo lo que se renderiza en cada componente/funcion
//se usa para evitar que hayan tantos div que no tienen otra funcion que encapsular todo el render/return
import PersonList from './PersonList';
import PersonAdd from './PersonAdd';
import shortid from 'shortid' //npm install shortid
import PersonUpdate from './PersonUpdate';
import Footer from './Footer';

export default function PersonCrud() {
    const u = {
        id: '', 
        name: '', 
        lastname: ''
    }
    const [user, setUser] = useState(u)
    const [users, setUsers] = useState([])
    const [action, setAction] = useState('add')

    //agrega un usuario a 
    const addU = (data) => {
        data.id = shortid.generate()
        console.log(data)
        setUsers([
            ...users, // con los ... estamos haciendo una copia del array que teníamos antes, gracias a eso
            //evitamos que se limpie el array en cada setUsers (estamos concatenando)
            data
        ])
    }

    //elimina un usuario 
    const deleteU = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    //edita un usuario 
    const updateU = (data) => {
        console.log(data)
        setUsers(users.map((user, index)=> (user.id === data.id ? users[index] = data : user)))
        setAction('add')
        setUser(u)
    }
    //recibe el usuario a actualizar
    const userSelected = (data) =>{
        console.log(data)
        setAction('update')
        setUser(data)
    }

    return (
        <Fragment>
            <div className="container" >
                <div className="row justify-content-center mt">
                    <div className="col-md-10 crud">
                        <h2 className="title">CRUD USERS</h2>
                        <div className="row">
                            <div className="col-md-4">
                                {action === 'add' ?
                                    <PersonAdd
                                        addUser={addU}
                                    ></PersonAdd> :
                                    <PersonUpdate
                                        user={user}
                                        updateUser={updateU}>
                                    </PersonUpdate>}
                            </div>
                            <div className="col-md-8">
                                <PersonList
                                    list={users}
                                    deleteUser={deleteU}
                                    userSelected={userSelected}
                                ></PersonList>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Fragment>
    )
}