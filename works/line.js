import * as THREE from "three";

import Init from "../components/init.js";
import setLine from "../components/line.js";
class Line extends Init {
	initObject() {
		let obj = {
			scene: this.scene,
			startPoint: [-100, 0, 100],
			endPoint: [100, 0, -100],
			startColor: 0xffffff,
			endColor: 0x000000
		};
		for (let i = 1; i < 5; i++) {
			obj.endPoint = [100, 0, -100 * i];
			let line = setLine(obj);
			this.scene.add(line);
		}
	}
}
let line = new Line();
module.exports = line;
