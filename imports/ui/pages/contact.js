import React from 'react';
import 'flexboxgrid';
import IconButton from 'material-ui/IconButton';
import {Card, CardActions, CardHeader, CardTitle, CardMedia, CardText} from 'material-ui/Card';

styles={
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
	containerDiv: {
		margin: "100px",
	}
}


const LinkedinIcon = () => {
	return <IconButton 
				href="https://www.linkedin.com/in/comito" 
				tooltip="linkedin"
				tooltipPosition="top-center"
				tooltipStyles={{padding: "15px"}}
				>
	<svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
			    <title>linkedin</title>
			    <desc>Created with Sketch.</desc>
			    <defs>
			        <circle id="path-1" cx="22" cy="22" r="22"></circle>
			        <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="44" height="44" style={{fill:"black"}} >
			            <use xlinkHref="#path-1"></use>
			        </mask>
			    </defs>
			    <g id="Social-Icons" style={{stroke:"none", strokeWidth:"1", fill:"none", fillRule:"evenodd"}} >
			        <g transform="translate(-420.000000, -60.000000)">
			            <rect id="background" x="0" y="0" width="584" height="464"></rect>
			            <g id="linkedin" transform="translate(420.000000, 60.000000)">
			                <rect id="Rectangle" x="0" y="0" width="44" height="44"></rect>
			                <use id="Oval" style={{stroke:"#4A4A4A", strokeWidth:"4" }}  mask="url(#mask-2)" xlinkHref="#path-1"></use>
			                <path d="M12.5044685,18.4131131 L16.4026341,18.4131131 L16.4026341,31.9987194 L12.5044685,31.9987194 L12.5044685,18.4131131 Z M14.3541863,16.7137918 L14.3259643,16.7137918 C12.9148636,16.7137918 12,15.6752465 12,14.3600973 C12,13.0180561 12.9419097,12 14.3812324,12 C15.8193791,12 16.7036689,13.0154949 16.7318909,14.3562556 C16.7318909,15.6714048 15.8193791,16.7137918 14.3541863,16.7137918 L14.3541863,16.7137918 Z M32,32 L27.5797272,32 L27.5797272,24.9683698 C27.5797272,23.1281854 26.8882879,21.8732232 25.3678269,21.8732232 C24.2048448,21.8732232 23.5580903,22.7196824 23.2570555,23.537969 C23.1441675,23.8299398 23.1618062,24.2384428 23.1618062,24.6482264 L23.1618062,32 L18.7826905,32 C18.7826905,32 18.8391345,19.5451402 18.7826905,18.4131131 L23.1618062,18.4131131 L23.1618062,20.5452683 C23.420508,19.6130106 24.8198495,18.2824946 27.0529163,18.2824946 C29.8233772,18.2824946 32,20.2379306 32,24.4446152 L32,32 L32,32 Z" id="Shape" fill="#4A4A4A"></path>
			            </g>
			        </g>
			    </g>
			</svg></IconButton>
}


const GitHubIcon = () => {
	return <a href="https://github.com/acomito" target="_blank">
				<svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
				    <title>github</title>
				    <desc>Created with Sketch.</desc>
				    <defs>
				        <circle id="path-1" cx="22" cy="22" r="22"></circle>
				        <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="44" height="44" style={{fill:"black"}} >
				            <use xlinkHref="#path-1"></use>
				        </mask>
				    </defs>
				    <g id="Social-Icons" style={{fill:"none", fillRule:"evenodd"}} stroke="none" stroke-width="1" >
				        <g transform="translate(-60.000000, -300.000000)">
				            <rect id="background" x="0" y="0" width="584" height="464"></rect>
				            <g id="github" transform="translate(60.000000, 300.000000)">
				                <rect id="Rectangle" x="0" y="0" width="44" height="44"></rect>
				                <use id="Oval" style={{stroke:"#4A4A4A"}}  mask="url(#mask-2)" stroke-width="4" xlinkHref="#path-1"></use>
				                <path d="M10,22.3044338 C10,27.7398363 13.4380429,32.3519218 18.2065134,33.9789169 C18.8069002,34.0922174 19.0256914,33.7122831 19.0256914,33.3859777 C19.0256914,33.0936624 19.015378,32.3201977 19.0094846,31.2936952 C15.671629,32.0369464 14.9673716,29.6440399 14.9673716,29.6440399 C14.4214985,28.2224964 13.634734,27.8440727 13.634734,27.8440727 C12.5451978,27.0804274 13.7172412,27.0962895 13.7172412,27.0962895 C14.921698,27.1831532 15.555235,28.3644997 15.555235,28.3644997 C16.6263544,30.2445326 18.364161,29.7014455 19.0477915,29.3864702 C19.1568188,28.5911007 19.4669572,28.0495243 19.8095092,27.741347 C17.1449707,27.4309036 14.3434114,26.3756983 14.3434114,21.660887 C14.3434114,20.3171431 14.8111974,19.2188837 15.5788084,18.3585552 C15.4557844,18.0473565 15.0439854,16.7965191 15.6966758,15.1030543 C15.6966758,15.1030543 16.7044415,14.7714615 18.9962246,16.3637112 C19.9538967,16.0910346 20.9800792,15.9543187 22.0003683,15.9497867 C23.0199208,15.9543187 24.0461033,16.0910346 25.0052488,16.3637112 C27.2955585,14.7714615 28.3018509,15.1030543 28.3018509,15.1030543 C28.9560146,16.7965191 28.5442156,18.0473565 28.4211916,18.3585552 C29.1902759,19.2188837 29.6543786,20.3171431 29.6543786,21.660887 C29.6543786,26.3870284 26.8491359,27.4271269 24.1757574,27.7322829 C24.6067098,28.1122172 24.9897787,28.8630219 24.9897787,30.0103782 C24.9897787,31.6555014 24.9757819,32.9826279 24.9757819,33.3859777 C24.9757819,33.7153044 25.1916265,34.0975048 25.8008533,33.9774062 C30.5649038,32.3473898 34,27.7390809 34,22.3044338 C34,15.5086701 28.6267227,10 21.998895,10 C15.3732773,10 10,15.5086701 10,22.3044338 Z" id="Shape" fill="#4A4A4A"></path>
				            </g>
				        </g>
				    </g>
				</svg>
			</a>
}


const TwitterIcon = () => {
	return <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
				    <title>twitter</title>
				    <desc>Created with Sketch.</desc>
				    <defs>
				        <circle id="path-1" cx="22" cy="22" r="22"></circle>
				        <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="44" height="44" style={{fill:"black"}}>
				            <use xlinkHref="#path-1"></use>
				        </mask>
				    </defs>
				    <g id="Social-Icons" stroke="none" stroke-width="1" style={{fill:"none", fillRule:"evenodd" }} >
				        <g transform="translate(-120.000000, -60.000000)">
				            <rect id="background" x="0" y="0" width="584" height="464"></rect>
				            <g id="twitter" transform="translate(120.000000, 60.000000)">
				                <rect id="Rectangle" x="0" y="0" width="44" height="44"></rect>
				                <use id="Oval" stroke="#4A4A4A" mask="url(#mask-2)" stroke-width="4" xlinkHref="#path-1"></use>
				                <path d="M30.526149,16.8457316 C31.4160944,16.2841254 32.0989611,15.3936155 32.41944,14.3328037 C31.5861948,14.8541095 30.6654341,15.2311137 29.6830428,15.4352159 C28.899102,14.5512061 27.7786582,14 26.5386512,14 C24.1597112,14 22.231907,16.0345226 22.231907,18.5435505 C22.231907,18.8997544 22.2676528,19.2468583 22.3416094,19.578362 C18.762106,19.3885599 15.5881317,17.5815398 13.4618771,14.8307092 C13.0908611,15.5041167 12.8788519,16.2841254 12.8788519,17.1161346 C12.8788519,18.6917521 13.6393731,20.0827676 14.7955626,20.8991767 C14.0892763,20.8757764 13.4248987,20.6690741 12.8431062,20.3310703 L12.8431062,20.386971 C12.8431062,22.5891954 14.3271703,24.4261158 16.3005811,24.8421205 C15.9381933,24.9487217 15.558549,25.0020222 15.1641134,25.0020222 C14.8867758,25.0020222 14.6156013,24.9747219 14.3542877,24.9214213 C14.9015672,26.7258414 16.4928685,28.041456 18.3787639,28.0765564 C16.9033281,29.29597 15.0457827,30.021378 13.0279979,30.021378 C12.6804015,30.021378 12.3365029,30.0018778 12,29.9589773 C13.9068498,31.2472916 16.1711569,32 18.6043317,32 C26.5300229,32 30.8614193,25.0761231 30.8614193,19.0713563 C30.8614193,18.8737542 30.858954,18.677452 30.8503258,18.4837498 C31.6921993,17.8428427 32.4243705,17.0420338 33,16.1307237 C32.2271527,16.4921277 31.3963726,16.7365304 30.526149,16.8457316 Z" id="Shape" fill="#4A4A4A"></path>
				            </g>
				        </g>
				    </g>
				</svg>
}

export const Contact = () => (
  <div className="row center-xs middle-xs" style={styles.containerDiv}>
		  <div className="box">
		  <Card style={{backgroundColor: "#FF6E40", width: "50%"}}>
		  	<CardHeader titleStyle={{color: "#FFFFFF", textAlign: "center"}} title="Contact Me" />
		  	<CardText>
		  	<div className="row">

		  	</div>
		  	</CardText>
		  </Card>
		  </div>
  </div>
);