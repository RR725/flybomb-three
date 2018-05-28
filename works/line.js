import * as THREE from "three";

import Init from "../components/init.js";
import setLine from "../components/line.js";
class Line extends Init {
	initObject() {
		let line = setLine({
			scene: this.scene,
			startPoint: [-100, 0, 100],
			endPoint: [100, 0, -100],
			startColor: 0xffffff,
			endColor: 0x000000
		});
		let line1 = setLine({
			scene: this.scene,
			startPoint: [-100, 0, 100],
			endPoint: [100, 0, -200],
			startColor: 0xffffff,
			endColor: 0x000000
		});
		this.scene.add(line);
		this.scene.add(line1);
		
	}
}
let line=new Line();
line.render();
module.exports=line;