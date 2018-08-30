import React, { PureComponent } from 'react';
import Tags from './tags';
import Friends from './amigos';

class Usuario extends PureComponent {
    render() {
        const { name, email, friends, tags, eyeColor, age, picture, gender, phone, address } = this.props.datos;
        console.log(name);
        return (
            <article>
                <h2>{name}</h2>
                <div class="img-container">
                    <img src={picture} />
                </div>

                <div class="info-container">
                    <p>Edad:{age} </p>
                    <p>Genero: {gender}</p>
                    <p>Telefono: {phone}</p>
                    <p>Direccion: {address}</p>
                    <p>email: <a href={email}>{email}</a> </p>
                    <Friends friends={friends} />
                    <Tags tags={tags} />
                    <p>Color de Ojos: <span style={{ background: eyeColor }}>|_____|</span></p>
                </div>

            </article>
        );

    }
}

export default Usuario;