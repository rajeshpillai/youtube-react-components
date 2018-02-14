import React from 'react';

const tagStyle  = {
    display: "inline-block",
    backgroundColor: "yellow",
    fontSize: "0.9em",
    margin: "5px",
    border: "1px solid lightblue",
    padding: "2px"
}
export default class Tag extends React.Component {
    onDeleteTag = (e, value) => {
        this.props.onDeleteTag(value);
    }
    render () {
        var tag = (
            <span 
                onClick = {(e) => this.onDeleteTag(e, this.props.value)}
                style={tagStyle}>
                &#x2716; {" "}
                {this.props.value}
            </span>

        );
        return (
            <React.Fragment>
                {tag}
            </React.Fragment>
        )
    }
}