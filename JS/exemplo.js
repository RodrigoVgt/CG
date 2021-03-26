var scene; //mundo virtual
var camera; //area de visualizaÃ§Ã£o
var renderer; //responsavel por renderizar tudo

var elementos = [];

var velocidade = 0.07;

var criaCubo = function(){
	let geometria = new THREE.BoxGeometry(5, 5, 5);

	let red = 	new THREE.Color(1,0,0);
	let green = new THREE.Color(0,1,0);
	let blue = 	new THREE.Color(0,0,1);
	let cores = [red, green, blue];





	let materials = [
		new THREE.MeshBasicMaterial({color: red}),
		new THREE.MeshBasicMaterial({color: green}),
		new THREE.MeshBasicMaterial({color: blue}),
		new THREE.MeshBasicMaterial({color: red}),
		new THREE.MeshBasicMaterial({color: green}),
		new THREE.MeshBasicMaterial({color: blue})
	];
	
	let cubo = new THREE.Mesh(geometria, materials);
	cubo.position.x = -3;
	elementos["cubo1"] = cubo;

	let cubo2 = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), materials);
	cubo2.position.x= 8;
	elementos["cubo2"] = cubo2;	
	
	
	scene.add(cubo2);
	scene.add(cubo);

};


var init = function (){
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 100);
	
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	
	camera.position.z =50;
	camera.position.x = 0;
	camera.position.y = 2;
	
	criaCubo();
	
	animation();

	document.addEventListener('keydown', apertouButao);
	document.addEventListener('keyup', soltouBotao);
	
};

var r = false;
var space = false;

var soltouBotao = function(e){
	console.log('soltou '+ e.keyCode);

	if (e.keyCode == 82){
		r = false;
	}
	if (e.keyCode == 32){
		space = false;
	}
}


var apertouButao =  function(e){
	console.log(e.keyCode);

	if (e.keyCode == 82){
		r = true;
	}
	if (e.keyCode == 32){
		space = true;
	}
}

var count =0; 
var animation = function (){
	requestAnimationFrame(animation); //adiciona o mÃ©todo na fila de renderizaÃ§Ã£o

	if (space){
		elementos["cubo2"].position.x += 0.1;
	}
	if (r){
		elementos["cubo2"].rotation.x += 0.01;
		elementos["cubo2"].rotation.z += 0.01;
		
	}
	
	//if (++count >= 30){
	//	let rotation = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.01,0,0.01, 'XYZ'));
	//	elementos["cubo1"].quaternion.multiplyQuaternions(rotation, elementos["cubo1"].quaternion);

	// 	elementos["cubo2"].rotation.x += 0.01;
	// 	elementos["cubo2"].rotation.z += 0.01;
	// //	count = 0;
	//}
	renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
}

window.onload = this.init