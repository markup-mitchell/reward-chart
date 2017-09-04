import React, { Component } from 'react';
import Draggable from 'react-draggable';

class Shark extends Component {
  render(){
    return (
      <Draggable 
        axis="both" 
        handle=".handle" 
        defaultPosition={{x: 0, y: 0}} 
        position={null} grid={[25, 25]} 
        onStart={this.handleStart} 
        onDrag={this.handleDrag} 
        onStop={this.handleStop}> 
          <div className="handle"> 
            <svg height="70%" id="svg1126" width="70%" version="1.1" viewBox="0 0 997.73041 355.83594">
	<defs id="defs1130"/>
	<path id="path5409" style={{"fill":"#ff00ff","fillOpacity":"1","stroke":"none","strokeWidth":"1px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} d="m 0,200.2827 c 7.5309,12.6893 26.9937,32.8883 38.6453,34.8155 16.4102,-0.089 24.892,-5.1148 42.12669,1.3926 -9.87559,3.13338 -23.52739,6.26678 -18.45219,9.40017 -19.6442,19.09337 184.72359,77.53113 277.82769,68.93469 l -10.0965,-7.65941 C 233.16639,307.63581 69.4822,262.75176 69.2829,246.93544 c 0.3098,-2.95658 32.51439,2.29009 28.54869,-10.44464 -5.5404,-17.7917 -38.29479,-10.6802 -62.31979,-8.0076 -7.5433,-8.0075 -15.0867,-16.0151 -22.63,-24.0227 z m 405.94879,107.57986 c 5.1304,-0.78969 -8.0581,-4.62823 -2.4811,-5.11796 135.777,-11.9228 402.4055,-114.6055 420.9634,-81.5726 -12.1246,-0.3499 -29.8887,-2.2969 -39.3415,14.2743 -25.7322,-21.6382 -92.2152,10.15132 -100.6168,29.24504 -37.7681,-28.67954 -183.7489,44.46947 -278.524,43.17122 z M 480.74599,0 c -34.4948,14.3121 -69.2675,33.6514 -106.3496,94.5351 -224.8083,16.6302 -329.86749,70.9141 -360.49999,88.2559 -30.6326,17.3418 -1.0137,21.6699 -1.0137,21.6699 45.172,-10.4679 117.81119,10.5491 172.68359,21.586 l 13.2305,39.33981 -6.6153,-37.59961 10.793,2.4375 14.6231,40.38477 -7.6602,-40.03707 11.1406,2.7851 13.5781,38.99415 -6.2656,-38.29885 12.1856,1.7422 12.1836,33.42189 -6.2657,-32.37699 9.0528,0.6953 11.5136,28.34184 -5.9082,-28.55664 17.7247,1.96875 c 32.8876,54.33257 72.42,102.60982 160.3925,116.54688 -50.0333,-58.44515 -53.2515,-89.88014 -56.1308,-121.12113 136.9397,-17.689 274.4167,-77.636 413.707,-31.8593 l 18.709,12.8007 c 53.8299,41.96434 66.7159,101.55073 132.9394,125.06059 -44.6351,-121.88869 -75.8064,-75.67156 49.2364,-268.83199 -108.0539,28.7831 -168.0156,175.97782 -227.4727,74.8398 -35.6334,22.6675 32.1752,15.8465 -276.709,-41.3574 C 472.96319,77.4977 478.67349,37.9397 480.74599,0 Z M 91.22259,180.998 c 6.5138,-0.2531 7.4492,2.1621 7.4492,2.1621 l -13.7871,11.8164 -21.17189,-6.1542 c 14.0016,-5.8161 22.44339,-7.6274 27.50979,-7.8243 z"/>
</svg>
          </div>
      </ Draggable>
    )
  }
}

export default Shark;
