import React, {Component} from 'react';
import PropTypes from 'prop-types';
export class Usuario extends React.PureComponent {

    render () {
        const {name,picture,age,email,gender,tags} = this.props;
        return (
            <article>
                <h4>Nombre: {name}</h4>
                <h4>Edad: {age}</h4>
                <h4>Email: {email}</h4>
                <h4>Genero: {gender}</h4>
                <h4>Etiquetas: {tags}</h4>
                <img src= {picture} height='100' width='150'/>
            </article>
        )
    }

}

const tiposUsuario = [
    "name", "age" ,"email" ,"female", "male", "tags" , "picture"
]

Usuario.propTypes = {
    name: PropTypes.string.isRequired,
    gender: PropTypes.oneOf(tiposUsuario).isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}