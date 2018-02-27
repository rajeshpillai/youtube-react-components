import React from 'react';
import Slide from './Slide';
import withModal from '../HOC/withModal';

import './slideshow.css';

export default class SlideShow extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        let SlideWithModal = withModal(Slide);
        this.slides = this.props.slides.map((slide) => {
            return <SlideWithModal key={slide.id} url = {slide.url} />
        });
    }
    
    render() {
        
        return (
            <div className="slide-container">
                {this.slides}
            </div>
        )
    }
}