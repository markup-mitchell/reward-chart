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
<svg height="80%" id="svg5513" width="80%" version="1.1" viewBox="0 0 94.028527 125.76315">
	<defs id="defs5507">
		<linearGradient id="linearGradient1223">
			<stop id="stop1219" style={{"stopColor":"#f3f3f3","stopOpacity":"0.01176471"}} offset="0"/>
			<stop id="stop1221" style={{"stopColor":"#569aa1","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="linearGradient1168">
			<stop id="stop1164" style={{"stopColor":"#fffcfc","stopOpacity":"1"}} offset="0"/>
			<stop id="stop1178" style={{"stopColor":"#f6f3f3","stopOpacity":"1"}} offset="0.14844109"/>
			<stop id="stop1176" style={{"stopColor":"#c3c0c0","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<linearGradient id="linearGradient14190">
			<stop id="stop14186" style={{"stopColor":"#ffffff","stopOpacity":"0.01039861"}} offset="0"/>
			<stop id="stop14188" style={{"stopColor":"#569aa1","stopOpacity":"1"}} offset="1"/>
		</linearGradient>
		<radialGradient id="radialGradient14200" cx="292.18616" cy="395.9631" fx="292.18616" fy="395.9631" gradientTransform="matrix(1.6602929,1.1138117,-0.97767869,1.4573671,-51.27328,-833.95753)" gradientUnits="userSpaceOnUse" r="45.731965" xlinkHref="#linearGradient14190"/>
		<linearGradient id="linearGradient1217" gradientUnits="userSpaceOnUse" x1="-5.474062" x2="98.83445" y1="83.654953" y2="6.8170071" xlinkHref="#linearGradient1168"/>
	</defs>
	<circle id="path1186" style={{"fill":"url(#linearGradient1217)","fillOpacity":"1","stroke":"#000000","strokeWidth":"1.99999999","strokeMiterlimit":"4","strokeDasharray":"none","strokeDashoffset":"9.99999905","strokeOpacity":"1"}} cx="48.705147" cy="77.900162" r="29.195021"/>
	<circle id="path1188" style={{"fill":"#4dd75e","fillOpacity":"1","stroke":"#000000","strokeWidth":"2","strokeMiterlimit":"4","strokeDasharray":"none","strokeDashoffset":"9.99999905","strokeOpacity":"1"}} cx="48.98587" cy="78.180885" r="9.1234426"/>
	<circle id="path1190" style={{"fill":"#000000","fillOpacity":"1","stroke":"none","strokeWidth":"2","strokeMiterlimit":"4","strokeDasharray":"none","strokeDashoffset":"9.99999905","strokeOpacity":"1"}} cx="49.056053" cy="78.11071" r="3.4388361"/>
	<circle id="path1192" style={{"fill":"#ffffff","fillOpacity":"1","stroke":"none","strokeWidth":"4","strokeMiterlimit":"4","strokeDasharray":"none","strokeDashoffset":"9.99999905","strokeOpacity":"1"}} cx="55.863544" cy="70.601418" r="4.6319017"/>
	<circle id="path1192-7" style={{"fill":"#ffffff","fillOpacity":"1","stroke":"none","strokeWidth":"1.5757575","strokeMiterlimit":"4","strokeDasharray":"none","strokeDashoffset":"9.99999905","strokeOpacity":"1"}} cx="50.810558" cy="76.636925" r="1.8246886"/>
</svg>
          </div>
      </ Draggable>
    )
  }
}

export default EyeJar;
