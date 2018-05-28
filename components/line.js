import * as THREE from "three";

module.exports = function(options) {
	const { startColor, endColor, startPoint, endPoint } = options;
	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({ vertexColors: true });
	var color1 = new THREE.Color(startColor),
		color2 = new THREE.Color(endColor);

	// 线的材质可以由2点的颜色决定
	var p1 = new THREE.Vector3(...startPoint);
	var p2 = new THREE.Vector3(...endPoint);
	geometry.vertices.push(p1);
	geometry.vertices.push(p2);
	geometry.colors.push(color1, color2);

	var line = new THREE.Line(geometry, material, THREE.LineSegments);
   
    return line;
};
