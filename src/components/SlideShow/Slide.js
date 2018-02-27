import React from 'react';

export default class Slide extends React.Component {
    state = {
        isLoaded: false,
        isError: false
    }

    componentDidMount() {
        this.load(this.img);
    }

    load(img) {
        var image = img;
        if (image === null) return;
        image.src = this.props.url;
        image.onload = () => {
            this.onImageLoaded();
        }
        image.onerror = () => {
            this.onImageLoadError(this.props.url);
        }
    }

    onImageLoaded = () => {
        this.setState({
            isLoaded: true
        });
    }

    onImageLoadError = () => {
        this.setState({
            isError: true
        })
    }
    
    render () {
        let url = this.props.url;

        if (this.state.isError) return null;

        return (
            <div className="slide">
                {!this.state.isLoaded && <img src="./images/loading.svg" alt="loading" />}
                <img ref={(img)=> this.img = img} />
            </div>

        );
    }
}