import * as THREE from "three";


export default class Init {
	constructor() {
		const width = window.document.documentElement.clientWidth;
		const height = window.document.documentElement.clientHeight;
		this.width = width;
		this.height = height;
		this.renderer = new THREE.WebGLRenderer({
			antialias: true
		});
		this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
		this.scene = new THREE.Scene();
	}
	initThree() {
		this.renderer.setSize(this.width, this.height);
		document.body.appendChild(this.renderer.domElement);
		this.renderer.setClearColor(0xffffff, 1.0);
	}
	initCamera() {
		this.camera.position.x = 0;
		this.camera.position.y = 1000;
		this.camera.position.z = 0;
		this.camera.up.x = 0;
		this.camera.up.y = 0;
		this.camera.up.z = 1;
		this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	}
	initLight() {
		let light = new THREE.DirectionalLight(0xff0000, 1.0, 0);
		light.position.set(100, 100, 200);
		this.scene.add(light);
	}
	initObject(){

	}
	render() {
		this.initThree();
		this.initCamera();
		this.initLight();
		this.initObject();
		
		this.renderer.clear();
		this.renderer.render(this.scene, this.camera);
		

	}
}