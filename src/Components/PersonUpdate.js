import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form'

const PersonUpdate = (props) => {
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault()
        data.id = props.user.id
        props.updateUser(data)
        e.target.reset()
    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input
                        placeholder="Ingrese nombre de usuario"
                        className="form-control"
                        name="name"
                        defaultValue={props.user.name}
                        ref={register({
                            required: {
                                value: true,
                                message: 'Nombre es requerido'
                            },
                            maxLength: {
                                value: 10,
                                message: 'No más de 5 carácteres!'
                            },
                            minLength: {
                                value: 4,
                                message: 'Mínimo 2 carácteres'
                            }
                        })}
                    ></input>
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.name?.message}
                    </span>
                </div>
                <div className="form-group">
                    <input
                        placeholder="Ingrese apellido de usuario"
                        className="form-control"
                        name="lastname"
                        defaultValue={props.user.lastname}
                        ref={register({
                            required: {
                                value: true,
                                message: 'Apellido es requerido'
                            },
                            maxLength: {
                                value: 10,
                                message: 'No más de 5 carácteres!'
                            },
                            minLength: {
                                value: 4,
                                message: 'Mínimo 2 carácteres'
                            }
                        })}
                    ></input>
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.lastname?.message}
                    </span>
                </div>
                <button
                    type="submit"
                    className="btn btn-success">
                    Update
                                    </button>
            </form>
        </Fragment>
    );
}
 
export default PersonUpdate;