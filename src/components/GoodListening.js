import React, { Component } from 'react';
import Draggable from 'react-draggable';

class GoodListening extends Component {
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
      <svg height="40%" id="GoodListening" width="40%" version="1.1" viewBox="0 0 90.027489 90.027489">
	<defs id="defs2">
		<lineargradient id="linearGradient989">
			<stop id="stop987" style={{"stopColor":"#92cfea","stopOpacity":"1"}} offset="0"/>
		</lineargradient>
	</defs>
	<g id="layer1" transform="translate(-41.570843,-157.36748)">
		<circle id="path815-3" style={{"opacity":"1","fill":"#71501d","fillOpacity":"1","fillRule":"evenodd","stroke":"#eca73c","strokeWidth":"5.42520285","strokeLinecap":"butt","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="86.328056" cy="202.38658" r="38.27977"/>
		<circle id="path815-3-6" style={{"opacity":"1","fill":"#ffffff","fillOpacity":"0","fillRule":"evenodd","stroke":"#e5e5e5","strokeWidth":"0.5","strokeLinecap":"butt","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="86.584587" cy="202.38123" r="44.763744"/>
		<path id="path815-3-9" style={{"opacity":"1","fill":"#ffffff","fillOpacity":"0","fillRule":"evenodd","stroke":"none","strokeWidth":"4.64328527","strokeLinecap":"butt","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="M 73.298082,180.391 A 32.340164,33.19061 86.578254 0 1 116.76469,197.51505 32.340164,33.19061 86.578254 0 1 99.05905,239.92893 32.340164,33.19061 86.578254 0 1 55.592438,222.80487 32.340164,33.19061 86.578254 0 1 73.298082,180.391 Z"/>
		<text id="text1035" style={{"fontStyle":"normal","fontVariant":"normal","fontWeight":"normal","fontStretch":"normal","fontSize":"10.58333302px","lineHeight":"125%","fontFamily":"'Sweet Sorrow'","InkscapeFontSpecification":"'Sweet Sorrow, Normal'","fontVariantLigatures":"normal","fontVariantCaps":"normal","fontVariantNumeric":"normal","fontFeatureSettings":"normal","textAlign":"start","letterSpacing":"0px","wordSpacing":"0px","writingMode":"lr-tb","textAnchor":"start","fill":"#eca73c","fillOpacity":"1","stroke":"none","strokeWidth":"0.26458332px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} xmlSpace="preserve"/>
		<text id="text1042" style={{"fontStyle":"normal","fontWeight":"normal","fontSize":"10.58333302px","lineHeight":"125%","fontFamily":"sans-serif","letterSpacing":"0px","wordSpacing":"0px","fill":"#eca73c","fillOpacity":"1","stroke":"none","strokeWidth":"0.26458332px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":"1"}} xmlSpace="preserve"/>
		<circle id="path1044" style={{"opacity":"1","fill":"none","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1.22659004","strokeLinecap":"butt","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} cx="87.873802" cy="200.92793" r="33.148964" transform="matrix(-0.68557053,0.72800621,0.72800621,0.68557053,0,0)"/>
		<path id="path1049" style={{"opacity":"1","fill":"#eca73c","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","strokeLinecap":"butt","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 65.200893,195.13541 -3.862996,-1.87222 -3.732278,2.12086 0.586851,-4.25247 -3.170392,-2.89423 4.225691,-0.75596 1.772867,-3.90959 2.02477,3.78527 4.266084,0.47797 -2.974314,3.09538 z"/>
		<path id="path1051" style={{"opacity":"1","fill":"#eca73c","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","strokeLinecap":"butt","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 65.011905,207.23065 -2.972865,-0.35219 -1.975485,2.24932 -0.583716,-2.9362 -2.749684,-1.18372 2.612108,-1.46248 0.276086,-2.98089 2.198088,2.03233 2.920316,-0.65858 -1.253615,2.71853 z"/>
		<path id="path1053" style={{"opacity":"1","fill":"#eca73c","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","strokeLinecap":"butt","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 111.12499,192.1116 -3.41574,-1.53313 -3.1994,1.94465 0.40257,-3.72233 -2.83814,-2.44188 3.66455,-0.7674 1.44533,-3.45381 1.86224,3.24806 3.73141,0.3073 -2.51362,2.7748 z"/>
		<path id="path1055" style={{"opacity":"1","fill":"#eca73c","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","strokeLinecap":"butt","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 113.01488,216.68005 -4.58213,-3.89649 -5.80752,1.56567 2.28983,-5.56195 -3.28366,-5.03946 5.99732,0.45902 3.77811,-4.68023 1.41672,5.84564 5.61866,2.14692 -5.12174,3.15379 z"/>
		<path id="path1057" style={{"opacity":"1","fill":"#eca73c","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","strokeLinecap":"butt","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 70.681553,213.27826 -2.016996,-0.68398 -1.706915,1.27379 0.02722,-2.12964 -1.738915,-1.22975 2.03382,-0.6322 0.632206,-2.03382 1.229749,1.73891 2.12964,-0.0272 -1.273793,1.70692 z"/>
		<path id="path1059" style={{"opacity":"1","fill":"#eca73c","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","strokeLinecap":"butt","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 106.96726,198.34819 -1.11812,-0.84769 -1.3322,0.44051 0.46069,-1.32535 -0.83062,-1.13087 1.40284,0.0286 0.81884,-1.13942 0.40632,1.34301 1.3367,0.42667 -1.15173,0.80144 z"/>
		<path id="path1237" style={{"fill":"none","stroke":"#eca73c","strokeWidth":"3","strokeLinecap":"round","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 97.102082,185.34583 c -4.910299,-6.65745 -19.875672,-4.0053 -23.189313,4.55542 -5.67102,14.07232 4.138566,25.2517 14.234584,32.68058 2.524627,1.28437 6.274948,1.2398 8.029767,-1.27564 0.308747,-0.48336 0.50049,-1.03632 0.584783,-1.60232"/>
		<path id="path1247" style={{"fill":"none","stroke":"#eca73c","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 79.752975,190.93988 c 2.914849,-7.77278 17.74524,-5.32642 16.192342,6.46502 0.525858,3.30946 -2.374601,6.77432 -0.97589,9.71931 -11.743295,0.64522 1.351399,6.60236 -0.342151,9.46382 -7.998285,2.70548 -16.10918,-10.66591 -12.228494,-5.42646"/>
		<path id="path1268" style={{"fill":"none","stroke":"#eca73c","strokeWidth":"1.5","strokeLinecap":"round","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 84.28869,201.52321 c 0.912974,-4.91874 9.94792,-5.55974 10.432434,-0.11567 0.0199,0.22889 -0.02511,1.96708 -0.03808,2.19465"/>
	</g>
</svg>
          </div>
      </ Draggable>
    )
  }
}

export default GoodListening;
