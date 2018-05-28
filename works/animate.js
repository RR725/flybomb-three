import * as THREE from "three";

import Init from "../components/init.js";
import setLine from "../components/line.js";
class NetTable extends Init {
	initObject() {
		let point = 100; //网格的长度，半径
		let nets = 50; //每一个网眼的宽高
		let len = point / nets * 2; //坐标原点二侧的线条总数
		let obj = {
			scene: this.scene,
			startPoint: [-point, 0, 0],
			endPoint: [point, 0, -0],
			startColor: 0x666666,
			endColor: 0x666666
		};
		for (let i = 0; i <= len; i++) {
			obj.startPoint[2] = i * nets - point;
			obj.endPoint[2] = i * nets - point;
			let line = setLine(obj);
			this.scene.add(line);

			let line1 = setLine(obj);
			// line1.position.x = ( i * 50 ) +obj.startPoint[0] ;
			line1.rotation.y = 90 * Math.PI / 180;
			this.scene.add(line1);
		}

	}
	animate() {

		this.camera.rotation.z = this.camera.rotation.z + 1;//相机移动
		this.renderer.render(this.scene, this.camera);
		requestAnimationFrame(this.animate.bind(this));
	}
}
let netTable = new NetTable();
module.exports = netTable;
