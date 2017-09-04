import React, {Component} from 'react';
import Draggable from 'react-draggable';

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
                <svg height="100" width="100">
                  <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
                </svg>
              </div>
            </div>
        </Draggable>
      </div>
    );
  }
}

export default StickerSheet;
