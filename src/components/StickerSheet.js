import React, {Component} from 'react';
import GoodDrinking from './GoodDrinking.js';
import GoodListening from './GoodListening.js';
import Shark from './Shark.js';
import Eye from './Eye.js';
import EyeJar from './EyeJar.js';

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
      <EyeJar />
        <Eye />
      </div>
    );
  }
}

export default StickerSheet;
