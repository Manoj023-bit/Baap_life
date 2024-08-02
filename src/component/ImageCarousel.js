// import React from 'react';
// import './ImageCarousel.css';

// const images = [
//   './images/Senior1.jpg',
//   './images/Senior2.jfif',
//   './images/Senior3.jpg',
//   './images/Senior4.png',
// ];

// class ImageCarousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { currentIndex: 0 };
//   }

//   componentDidMount() {
//     this.interval = setInterval(this.nextImage, 3000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   nextImage = () => {
//     this.setState(prevState => ({
//       currentIndex: (prevState.currentIndex + 1) % images.length,
//     }));
//   };

//   render() {
//     return (
//       <div className="carousel">
//         <img src={images[this.state.currentIndex]} alt="carousel" className="carousel-image" />
//       </div>
//     );
//   }
// }

// export default ImageCarousel;
