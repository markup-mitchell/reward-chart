import React, {Component} from 'react';
import Draggable from 'react-draggable';
import GoodDrinking from './GoodDrinking.js';

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
      </div>
    );
  }
}

export default StickerSheet;
