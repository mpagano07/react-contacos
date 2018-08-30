import React, {PureComponent} from 'react';

export default class Tags extends PureComponent {
    render() {
        const { tags } = this.props;
        return(
            <p>Tags: {tags.map( (tags) => <span>{tags} / </span>)}</p>
        );

    }
}
