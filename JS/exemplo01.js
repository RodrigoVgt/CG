var scene; //mundo virtual
var camera; //area de visualização
var renderer; //responsavel por renderizar tudo

var elementos = [];
var velocidadex = 1;
var velocidadey = 1;
var velocidadeDx = 0.5;
var velocidadeDy = 0.5;

var criaDodecahedro = function(){
	let geometria = new THREE.DodecahedronGeometry(2, 1);
	let material = new THREE.MeshBasicMaterial({color: 0x2845ff});
	
	let dodecahedro = new THREE.Mesh(geometria, material);
	dodecahedro.position.x = -3;
	elementos["dodecahedro"] = dodecahedro;
	
	scene.add(dodecahedro);
}

var criaOctahedro = function(){
	const geometria = new THREE.OctahedronGeometry(2);
	let material = new THREE.MeshBasicMaterial({color: 0xFF2D00});
	
	let Octahedro = new THREE.Mesh(geometria, material);
	Octahedro.position.x = 3;
	elementos["Octahedro"] = Octahedro;
	
	scene.add(Octahedro);
}



var init = function (){
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 100);
	
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	camera.position.z =50;
	camera.position.x = 0;
	camera.position.y = 2;

	criaDodecahedro();
	criaOctahedro();
	
	animation();
	
};

var animation = function (){
	requestAnimationFrame(animation); //adiciona o método na fila de renderização

	//////////////Dodecahedro/////////////
	elementos["dodecahedro"].position.x+=0.01;
	elementos["dodecahedro"].position.y+=0.01;
	
    elementos["dodecahedro"].position.x-=velocidadex;
	elementos["dodecahedro"].position.y-=velocidadey;
	if (elementos["dodecahedro"].position.x < -20){
		velocidadex *=-1;
	}else if(elementos["dodecahedro"].position.x > 20){
		velocidadex *=-1;
	}
	if(elementos["dodecahedro"].position.y < -15){
		velocidadey *=-1;
		
	}else if(elementos["dodecahedro"].position.y > 19){
		velocidadey *=-1;
	}

	if (elementos["dodecahedro"].position.x < -22){
		elementos["dodecahedro"].position.x = -3;
		elementos["dodecahedro"].position.y = -0;
	}else if(elementos["dodecahedro"].position.y < -22){
		elementos["dodecahedro"].position.x = -3;
		elementos["dodecahedro"].position.y = -0;
	}
	if (elementos["dodecahedro"].position.x > 22){
		elementos["dodecahedro"].position.x = -3;
		elementos["dodecahedro"].position.y = -0;
	}else if(elementos["dodecahedro"].position.y > 22){
		elementos["dodecahedro"].position.x = -3;
		elementos["dodecahedro"].position.y = -0;
	}
	////////////// Octahedro //////////////
	elementos["Octahedro"].position.x+=0.01;
	elementos["Octahedro"].position.y+=0.01;
	
    elementos["Octahedro"].position.x+=velocidadeDx;
	elementos["Octahedro"].position.y+=velocidadeDy;
	if (elementos["Octahedro"].position.x < -20){
		velocidadeDx *=-1;
	}else if(elementos["Octahedro"].position.x > 20){
		velocidadeDx *=-1;
	}
	if(elementos["Octahedro"].position.y < -15){
		velocidadeDy *=-1;
		
	}else if(elementos["Octahedro"].position.y > 19){
		velocidadeDy *=-1;
	}

	if (elementos["Octahedro"].position.x < -22){
		elementos["Octahedro"].position.x = -3;
		elementos["Octahedro"].position.y = -0;
	}else if(elementos["Octahedro"].position.y < -22){
		elementos["Octahedro"].position.x = -3;
		elementos["Octahedro"].position.y = -0;
	}
	if (elementos["Octahedro"].position.x > 22){
		elementos["Octahedro"].position.x = -3;
		elementos["Octahedro"].position.y = -0;
	}else if(elementos["Octahedro"].position.y > 22){
		elementos["Octahedro"].position.x = -3;
		elementos["Octahedro"].position.y = -0;
	}
	renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
}

window.onload = this.init