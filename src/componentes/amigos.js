import React, { PureComponent } from 'react';

export default class Amigos extends PureComponent {
    render() {
        const { friends } = this.props;
        return(
            <p>Lista de Amigos: {friends.map( (friends) => <span>{friends.name} / </span>)}</p>
        );

    }
}
