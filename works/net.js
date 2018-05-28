import * as THREE from "three";

import Init from "../components/init.js";
import setLine from "../components/line.js";
class NetTable extends Init {
	initObject() {
		let obj = {
			scene: this.scene,
			startPoint: [-200, 0, 0],
			endPoint: [200, 0, -0],
			startColor: 0x666666,
			endColor: 0x666666
		};
		for (let i = 0; i <= 8; i++) {
			obj.startPoint[2] = (i * 50)-200;
			obj.endPoint[2] = (i * 50-200);
			let line = setLine(obj);
			this.scene.add(line);

			
			let line1=setLine(obj);
			// line1.position.x = ( i * 50 ) +obj.startPoint[0] ;
			line1.rotation.y = 90 * Math.PI / 180;
			this.scene.add(line1);
		}
	}
}
let netTable = new NetTable();
module.exports = netTable;
