import React, { Component } from 'react';
import Draggable from 'react-draggable';

class EyeJar extends Component {
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

<svg height="80%" id="jar" width="80%" viewBox="0 0 94.028527 125.76315">
	<defs id="defs5507">
		<lineargradient id="linearGradient14190">
			<stop id="stop14186" style={{"stopColor":"#ffffff","stopOpacity":"0.01039861"}} offset="0"/>
			<stop id="stop14188" style={{"stopColor":"#569aa1","stopOpacity":"1"}} offset="1"/>
		</lineargradient>
		<radialgradient id="radialGradient14200" cx="292.18616" cy="395.9631" fx="292.18616" fy="395.9631" gradientTransform="matrix(1.6602929,1.1138117,-0.97767869,1.4573671,-51.27328,-833.95753)" gradientUnits="userSpaceOnUse" r="45.731965" xlinkHref="#linearGradient14190"/>
	</defs>
	<g id="inside">
		<circle id="path1186" style={{"fill":"url(#linearGradient1217)","fillOpacity":"1","stroke":"#000000","strokeWidth":"1.99999999","strokeMiterlimit":"4","strokeDasharray":"none","strokeDashoffset":"9.99999905","strokeOpacity":"1"}} cx="48.705147" cy="77.900162" r="29.195021"/>
		<circle id="path1188" style={{"fill":"#4dd75e","fillOpacity":"1","stroke":"#000000","strokeWidth":"2","strokeMiterlimit":"4","strokeDasharray":"none","strokeDashoffset":"9.99999905","strokeOpacity":"1"}} cx="48.98587" cy="78.180885" r="9.1234426"/>
		<circle id="path1190" style={{"fill":"#000000","fillOpacity":"1","stroke":"none","strokeWidth":"2","strokeMiterlimit":"4","strokeDasharray":"none","strokeDashoffset":"9.99999905","strokeOpacity":"1"}} cx="49.056053" cy="78.11071" r="3.4388361"/>
		<circle id="path1192" style={{"fill":"#ffffff","fillOpacity":"1","stroke":"none","strokeWidth":"4","strokeMiterlimit":"4","strokeDasharray":"none","strokeDashoffset":"9.99999905","strokeOpacity":"1"}} cx="55.863544" cy="70.601418" r="4.6319017"/>
		<circle id="path1192-7" style={{"fill":"#ffffff","fillOpacity":"1","stroke":"none","strokeWidth":"1.5757575","strokeMiterlimit":"4","strokeDasharray":"none","strokeDashoffset":"9.99999905","strokeOpacity":"1"}} cx="50.810558" cy="76.636925" r="1.8246886"/>
	</g>
	<path id="path14061-8-8" style={{"fill":"url(#radialGradient14200)","fillOpacity":"1","stroke":"#569aa1","strokeWidth":"3.09954691","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 13.86856,13.96266 c -7.39876,3.85859 -3.50227,14.41118 6.21343,14.40916 l -1.5118,7.22579 C 13.35309,38.49998 2.4624,38.08914 2.53482,47.46195 l 0.50372,65.18464 c 0.0862,11.15524 19.84412,10.94474 43.67814,11.10683 23.83402,-0.16209 43.59194,0.0484 43.67814,-11.10683 L 90.89853,47.46195 C 90.97093,38.08914 80.08027,38.49998 74.86317,35.59761 l -1.5118,-7.22579 C 83.06706,28.37382 86.96356,17.82125 79.5648,13.96266 76.48985,13.14233 51.25722,13.3473 46.71668,13.4038 42.17615,13.3473 16.9435,13.14233 13.86856,13.96266 Z"/>
</svg>
          </div>
      </ Draggable>
    )
  }
}

export default EyeJar;
