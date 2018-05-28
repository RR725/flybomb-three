import * as THREE from "three";

import Init from "../components/init.js";
import setLine from "../components/line.js";
class NetTable extends Init {
	initObject() {

		this.camera.position.x = 0;
		this.camera.position.y = 1000;
		this.camera.position.z = 0;
		
		var geometry = new THREE.CylinderGeometry(100, 150, 400,5);
		var material = new THREE.MeshLambertMaterial({ color: 0xffffff});
		let mesh = new THREE.Mesh(geometry, material);
		mesh.position.x = 0;
		mesh.position.y = 0;
		mesh.position.z = 0;
		this.mesh = mesh;
		this.scene.add(mesh);
	}
	animate() {
		this.mesh.position.x -= 1;

		this.renderer.render(this.scene, this.camera);
		requestAnimationFrame(this.animate.bind(this));
	}
}
let netTable = new NetTable();
module.exports = netTable;
