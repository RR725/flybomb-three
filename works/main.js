document.body.onload = function() {
	let arr = [
		{
			id: "line",
			name: "线"
		},
		{
			id: "net",
			name: "网格"
		}
	];
	let li = "";
	arr.map(data => {
		let { id, name } = data;
		li += `<li id="${id}">${name}</li>`;
	});
	document.getElementById("nav").innerHTML = `${li}`;
	arr.map(data => {
		(function(data) {
			let { id, name } = data;
			let fun = require("./" + data.id + ".js");
			document.getElementById(data.id).onclick = function() {
				fun.render();
			};
		})(data);
	});
};
