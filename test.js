import * as THREE from "three";
var scene, camera, renderer;
const width = window.document.documentElement.clientWidth;
const height = window.document.documentElement.clientHeight;
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(50, width / height);
camera.position.set(3, 4, 5);
camera.lookAt(new THREE.Vector3(0, 0, 0));
scene.add(camera);

var regionR = 2;
var cylinderMesh = new THREE.CylinderGeometry(regionR, regionR, 0.05, 1024);
var material = new THREE.MeshNormalMaterial();
var cylinder = new THREE.Mesh(cylinderMesh, material);
cylinder.position.set(0, 0, 0);
scene.add(cylinder);

function pointsGenerator(amount) {
	var polarPointsArr = [];
	for (var i = 0; i < amount; i++) {
		var r = Math.random() * regionR;
		var θ = 2 * Math.PI / 360 * (Math.random() * 360);
		polarPointsArr.push({ r: r, θ: θ });
	}

	var cartesianPointsArr = [];
	for (var j = 0; j < polarPointsArr.length; j++) {
		var r = polarPointsArr[j].r;
		var θ = polarPointsArr[j].θ;
		var x = r * Math.cos(θ);
		var y = r * Math.sin(θ);
		cartesianPointsArr.push({ x: x, y: y });
	}

	return {
		polarPointsArr: polarPointsArr,
		cartesianPointsArr: cartesianPointsArr
	};
}

function addRadomCubes(amount) {
	var cubesArr = [];

	var randomPosition = pointsGenerator(amount);
	var polarPointsArr = randomPosition.polarPointsArr;
	var cartesianPointsArr = randomPosition.cartesianPointsArr;

	for (var i = 0; i < cartesianPointsArr.length; i++) {
		var position = cartesianPointsArr[i];
		var r = polarPointsArr[i].r;
		var cubeMesh = new THREE.BoxGeometry(0.01, regionR - r, 0.01);
		var cube = new THREE.Mesh(cubeMesh, material);
		cube.position.set(position.x, (regionR - r) / 2 + 0.025, position.y);
		scene.add(cube);
		cubesArr.push(cube);
	}

	return { cubesArr: cubesArr, randomPosition: randomPosition };
}

var cubesArrInfo = addRadomCubes(100);

renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);

// var camera, scene, renderer;
// var geometry, material, mesh;

// init();
// animate();

// function init() {

// 	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
// 	// camera.position.z = 1;

// 	camera.position.set(0, 0, 1);              //相机位置;
// 	camera.lookAt(new THREE.Vector3(0,0,0));   //相机拍摄方向;

// 	scene = new THREE.Scene();

// 	geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
// 	material = new THREE.MeshNormalMaterial();

// 	mesh = new THREE.Mesh( geometry, material );
// 	scene.add( mesh );

// 	renderer = new THREE.WebGLRenderer( { antialias: true } );
// 	renderer.setSize( window.innerWidth, window.innerHeight );
// 	document.body.appendChild( renderer.domElement );

// }

// function animate() {
// 	requestAnimationFrame( animate );

// 	cylinder.rotation.x += 0.001;
// 	// cylinder.rotation.z += 0.02;
// 	renderer.render( scene, camera );

// }
