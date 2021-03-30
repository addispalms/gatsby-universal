
import  React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Swiping from 'components/swiping'




class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <>
      <div> 
        <p> I wanted to do better than this. And I knew I could</p>
        <Swiping /> 
      </div>
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        <h1>Movez the mouse around!</h1>
        <p>Thse current mouse position is ({this.state.x}, {this.state.y})</p>
      </div>
      <div> 
        <h1>Pulling in data by adding components </h1>
      </div> 

      </>
    );
  }
}

export default MouseTracker