import React, { Component } from 'react';
import SlideShow from './components/SlideShow';

export default class AppSlideShow extends React.Component {
    state = {
        images: [
          {id: 1, url: "http://lorempixel.com/400/200/sports/"},
          {id: 2, url: "http://lorempixel.com/400/200/animals/"},
          {id: 3, url: "http://lorempixel.com/400/200/business/"},
          {id: 4, url: "http://lorempixel.com/400/200/cats/"},
          {id: 5, url: "http://lorempixel.com/400/200/abstract/"},
          {id: 6, url: "http://lorempixel.com/400/200/city/"},
          {id: 7, url: "http://lorempixel.com/400/200/nature/"},
          {id: 8, url: "http://lorempixel.com/400/200/transport/"},
          {id: 9, url: "http://lorempixel.com/400/200/fashion/"},
        ]
      }

    render () {
        return (
            <SlideShow slides= { this.state.images} />
        )
    }
}