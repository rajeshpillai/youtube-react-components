import React from 'react';

export default class Slide extends React.Component {
    render () {
        let url = this.props.url;

        return (
            <div className="slide">
                <img src={url} />
            </div>

        );
    }
}