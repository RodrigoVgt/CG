var scene; //mundo virtual
var camera; //area de visualização
var renderer; //responsavel por renderizar tudo

var elementos = [];

var velocidade = 0.07;

var criaSisSolar = function(){

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
	
	let sol = new THREE.Mesh(new THREE.SphereGeometry(8, 32, 32), new THREE.MeshBasicMaterial({color: 0xffff00}));
	sol.position.x = -10;
	elementos["sol"] = sol;

	let pivot = new THREE.Group();
	sol.add(pivot);
	pivot.position.x = sol.position.x+8; //posicao do sol

	elementos["pivot"] = pivot;

	let terra = new THREE.Mesh(new THREE.SphereGeometry(1.5, 6, 6), new THREE.MeshBasicMaterial({color: blue}));
	pivot.add(terra);
	terra.position.x += pivot.position.x+26;
	elementos["terra"] = terra;

	let marte = new THREE.Mesh(new THREE.SphereGeometry(2, 6, 6), new THREE.MeshBasicMaterial({color: red}));
	pivot.add(marte);
	marte.position.x += pivot.position.x+20;


	// let cubo2 = new THREE.Mesh(new THREE.BoxGeometry(10, 3, 3), materials);
	// cubo2.position.x= 7;
	// elementos["cubo2"] = cubo2;	
	
	
	scene.add(sol);
	//scene.add(pivot);

};

var criaMonstro = function (){

};



var init = function (){
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 150);
	
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
	
	camera.position.z =80;
	camera.position.x = 0;
	camera.position.y = 2;
	
	criaSisSolar();
	

	animation();


	document.addEventListener('keydown', apertouButao);
	document.addEventListener('keyup', soltouBotao);

	//metodos do mouser
	document.addEventListener('mousewheel', onMouseWheel);

	
};


var onMouseWheel = function (e){

	//for (let el in elementos){
		elementos["sol"].scale.x+= (e.deltaY > 0)?-0.1:0.1;
		elementos["sol"].scale.y+= (e.deltaY > 0)?-0.1:0.1;
		elementos["sol"].scale.z+= (e.deltaY > 0)?-0.1:0.1;
	//}
	//Mesma coisa que o anterior 
	//if (e.deltaY > 0){
		
	// 	elementos["cubo2"].scale.y-=0.1;
	// 	elementos["cubo2"].scale.z-=0.1;
	// } else {
	// 	elementos["cubo2"].scale.x+=0.1;
	// 	elementos["cubo2"].scale.y+=0.1;
	// 	elementos["cubo2"].scale.z+=0.1;
	// }

}



var key_r = true;
var key_space = true;
var key_q = true;

var soltouBotao = function(e){
	console.log('soltou '+ e.keyCode);

	if (e.keyCode == 82){ //r
		key_r = false;
	}
	if (e.keyCode == 32){ //espaço
		key_space = false;
	}
	if (e.keyCode == 81){ //espaço
		key_q = false;
	}
}


var apertouButao =  function(e){
	console.log(e.keyCode);

	if (e.keyCode == 82){ //r
		key_r = true;
	}
	if (e.keyCode == 32){ // space
		key_space = true;
	}

	if (e.keyCode == 81){ // q
		key_q = true;		
	}

	if (e.keyCode == 189){ //-
		elementos["terra"].scale.x-=0.1;
		elementos["cubo2"].scale.y-=0.1;
		elementos["cubo2"].scale.z-=0.1;
	}
	if (e.keyCode == 187){ // +
		elementos["terra"].scale.x+=0.1;
		elementos["terra"].scale.y+=0.1;
		elementos["terra"].scale.z+=0.1;
	}
}

var count =0; 
var animation = function (){
	requestAnimationFrame(animation); //adiciona o método na fila de renderização

	if (key_space){
		elementos["sol"].rotation.y += 0.01;
	}
	if (key_r){
		elementos["terra"].rotation.x += 0.01; //angulos de Euler
		elementos["terra"].rotation.z += 0.01;
	}
	if (key_q){
		elementos["pivot"].rotation.z +=0.01;
	}
	
	//if (++count >= 30){
	//	let rotation = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.01,0,0.01, 'XYZ'));
	//	elementos["cubo1"].quaternion.multiplyQuaternions(rotation, elementos["cubo1"].quaternion);

	// 	elementos["cubo2"].rotation.x += 0.01;
	// 	elementos["cubo2"].rotation.z += 0.01;
	// //	count = 0;
	


	renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
}


window.onload = this.init