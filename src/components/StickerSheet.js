import React, {Component} from 'react';
import Draggable from 'react-draggable';
import GoodDrinking from './GoodDrinking.js';
import GoodListening from './GoodListening.js';
import Shark from './Shark.js';

class StickerSheet extends Component {
  constructor() {
    super();
    this.state = {
      sticker: []
    }
  }

  render() {
    return (
      <div className="sticker-sheet">
        <GoodDrinking />
        <GoodListening />
        <Shark />
      </div>
    );
  }
}

export default StickerSheet;
