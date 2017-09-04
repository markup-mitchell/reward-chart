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
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[25, 25]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
            <div>
              <div className="handle">
                <GoodDrinking />
              </div>
            </div>
        </Draggable>
      </div>
    );
  }
}

export default StickerSheet;
