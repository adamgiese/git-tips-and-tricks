/* global document */
/* global Reveal */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import Subtitle from 'Utils/Subtitle.jsx';
import TitleSlide from 'Content/Title/index.jsx';
/* eslint-ensable no-unused-vars */

require('./scss/styles.scss');

WebFont.load({
  google: {
    families: ['Averia+Serif+Libre', 'Lato'],
  },
});

class Slides extends React.Component {
  componentDidMount() {
    Reveal.initialize({
      history: true,
    });
  }

  render() {
    const slideList = [
      <TitleSlide />,
    ];

    const slides = slideList.map((value, index) => {
      return <section key={index} className='slide'>{value}</section>;
    });
    return (
      <div className="slides">
        {slides}
      </div>
    );
  }
}

export default Slides;
// app init
ReactDOM.render(<Slides />, document.getElementById('root'));
