var scene; //mundo virtual
var camera; //area de visualização
var renderer; //responsavel por renderizar tudo
var controls; //controle do mouser

var parametrosGUI = {};

var elementos = [];

var velocidade = 0.07;

var ground;
var geometriaA;


var objLoading = function(){
	loader = new THREE.OBJLoader();


	//////////////////// TREX1 ////////////////
	loader.load(
		'assets/T-rex/T-rex.obj',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Trex1'] = obj;

			let texLoader = new THREE.TextureLoader().setPath("assets/T-rex/");


			obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						let material = new THREE.MeshStandardMaterial();
						material.map = texLoader.load("Trex.png");
						child.material = material;
					}
				}
			);

			obj.scale.y = 1;
			obj.scale.z = 1;
			obj.scale.x = 0.7;

			obj.position.y = -7.5;
			obj.position.z = 2;
			obj.position.x = 30;

			obj.rotation.x-=1.65;
			
			scene.add(obj);
			console.log("Carregou Trex!");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);



//////////////////////// Tigre1 ////////////////
	loader = new THREE.OBJLoader();

	loader.load(
		'assets/Tiger/tigre.obj',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Tigre1'] = obj;

			let texLoader = new THREE.TextureLoader().setPath("assets/Tiger/");

			obj.traverse( function (child){
				if (child instanceof THREE.Mesh){
					let material = new THREE.MeshStandardMaterial();
					material.map = texLoader.load("branco.png");
					child.material = material;
				}
			}
		);

			obj.scale.y = 2;
			obj.scale.z = 2;
			obj.scale.x = 2;

			obj.position.y = -6;
			obj.position.z = 60;
			obj.position.x = -20;

			//obj.rotation.x-=1.35;

			scene.add(obj);
			console.log("Carregou tigre1!");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);






////////////////////// Tigre 02 //////////////////////////

	loader = new THREE.OBJLoader();

	loader.load(
		'assets/Tiger/tigre.obj',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Tigre2'] = obj;

			let texLoader = new THREE.TextureLoader().setPath("assets/Tiger/");

			obj.traverse( function (child){
				if (child instanceof THREE.Mesh){
					let material = new THREE.MeshStandardMaterial();
					material.map = texLoader.load("laranja.png");
					child.material = material;
				}
			}
		);

			obj.scale.y = 2;
			obj.scale.z = 2;
			obj.scale.x = 2;

			obj.position.y = -6;
			obj.position.z = 60;
			obj.position.x = 20;

			//obj.rotation.x-=1.35;

			scene.add(obj);
			console.log("Carregou tigre2!");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);



	//////////////////////// Leão1 ////////////////
	loader = new THREE.OBJLoader();

	loader.load(
		'assets/Lion/lion.obj',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Lion1'] = obj;

			let texLoader = new THREE.TextureLoader().setPath("assets/Lion/");

			obj.traverse( function (child){
				if (child instanceof THREE.Mesh){
					let material = new THREE.MeshStandardMaterial();
					material.map = texLoader.load("lion_1.png");
					material.map = texLoader.load("lion_2.png");
					material.normalMap = texLoader.load("lion_1nml.png");
					material.normalMap = texLoader.load("lion_2nml.png");

					child.material = material;
				}
			}
		);

			obj.scale.y = 6;
			obj.scale.z = 6;
			obj.scale.x = 6;

			obj.position.y = -6;
			obj.position.z = 0;
			obj.position.x = -40;

			//obj.rotation.x-=1.35;

			scene.add(obj);
			console.log("Carregou Leao1!");

		},//Oque acontece quando terminar!
		function(andamento){
			console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
		},//O que acontece enquanto esta carregando
		function(error){
			console.log(" Deu merda!: "+ error);
		}//o que acontece se der merda.
	);

	//////////////////////// Rinoceronte ////////////////
	//carregando Rhino
	let loaderFBX = new THREE.FBXLoader();
	loaderFBX.load(
		'assets/Rhino/Rhino.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Rhino'] = obj;
		
				let texLoader = new THREE.TextureLoader().setPath("assets/Rhino/");
	
				obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						let material = new THREE.MeshStandardMaterial();
						material.map = texLoader.load("Rhino_texture.png");
						child.material = material;
					}
				}
			);
	
				obj.scale.y = 0.05;
				obj.scale.z = 0.05;
				obj.scale.x = 0.05;
	
				obj.position.y = -8;
				obj.position.z = 0;
				obj.position.x = 0;
	
				//obj.rotation.x-=1.35;
	
				scene.add(obj);
				console.log("Carregou Rhino!");
	
			},//Oque acontece quando terminar!
			function(andamento){
				console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
			},//O que acontece enquanto esta carregando
			function(error){
				console.log(" Deu merda!: "+ error);
			}//o que acontece se der merda.
		);

	//////////////////////// Jaguar ////////////////
	//carregando Jaguar

	loaderFBX.load(
		'assets/Jaguar/Jaguar.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Jaguar'] = obj;
		
				let texLoader = new THREE.TextureLoader().setPath("assets/Jaguar/");
	
				obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						let material = new THREE.MeshStandardMaterial();
						material.map = texLoader.load("Jaguar_texture.png");
						child.material = material;
					}
				}
			);
	
				obj.scale.y = 0.02;
				obj.scale.z = 0.02;
				obj.scale.x = 0.02;
	
				obj.position.y = -8;
				obj.position.z = 60;
				obj.position.x = 0;
	
				//obj.rotation.x-=1.35;
	
				scene.add(obj);
				console.log("Carregou Rhino!");
	
			},//Oque acontece quando terminar!
			function(andamento){
				console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
			},//O que acontece enquanto esta carregando
			function(error){
				console.log(" Deu merda!: "+ error);
			}//o que acontece se der merda.
		);

	//////////////////////// Cthulu1 ////////////////
	//carregando Cthulu1

	loaderFBX.load(
		'assets/Cthulu/Ctulhu.fbx',//arquivo que vamos buscar
		function(obj){
			//atribui a cena, colore, reposiciona, rotaciona
			elementos['Cthulu1'] = obj;
		
				let texLoader = new THREE.TextureLoader().setPath("assets/Cthulu/");
	
				obj.traverse( function (child){
					if (child instanceof THREE.Mesh){
						let material = new THREE.MeshStandardMaterial();
						material.map = texLoader.load("Ctulhu_texture.png");
						child.material = material;
					}
				}
			);
	
				obj.scale.y = 0.5;
				obj.scale.z = 0.5;
				obj.scale.x = 0.5;
	
				obj.position.y = 35;
				obj.position.z = -250;
				obj.position.x = 0;
	
				//obj.rotation.x-=1.35;
	
				scene.add(obj);
				console.log("Carregou Cthule sul!");
	
			},//Oque acontece quando terminar!
			function(andamento){
				console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
			},//O que acontece enquanto esta carregando
			function(error){
				console.log(" Deu merda!: "+ error);
			}//o que acontece se der merda.
		);


	//////////////////////// Cthulu2 ////////////////
	//carregando Cthulu2
		loaderFBX.load(
			'assets/Cthulu/Ctulhu.fbx',//arquivo que vamos buscar
			function(obj){
				//atribui a cena, colore, reposiciona, rotaciona
				elementos['Cthulu2'] = obj;
			
					let texLoader = new THREE.TextureLoader().setPath("assets/Cthulu/");
		
					obj.traverse( function (child){
						if (child instanceof THREE.Mesh){
							let material = new THREE.MeshStandardMaterial();
							material.map = texLoader.load("Ctulhu_texture.png");
							child.material = material;
						}
					}
				);
		
					obj.scale.y = 0.5;
					obj.scale.z = 0.5;
					obj.scale.x = 0.5;
		
					obj.position.y = 35;
					obj.position.z = 250;
					obj.position.x = 0;
		
					obj.rotation.y-=3.1;
		
					scene.add(obj);
					console.log("Carregou Cthulo norte!");
		
				},//Oque acontece quando terminar!
				function(andamento){
					console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
				},//O que acontece enquanto esta carregando
				function(error){
					console.log(" Deu merda!: "+ error);
				}//o que acontece se der merda.
			);

	//////////////////////// Cthulu3 ////////////////
	//carregando Cthulu3
		loaderFBX.load(
			'assets/Cthulu/Ctulhu.fbx',//arquivo que vamos buscar
			function(obj){
				//atribui a cena, colore, reposiciona, rotaciona
				elementos['Cthulu3'] = obj;
			
					let texLoader = new THREE.TextureLoader().setPath("assets/Cthulu/");
		
					obj.traverse( function (child){
						if (child instanceof THREE.Mesh){
							let material = new THREE.MeshStandardMaterial();
							material.map = texLoader.load("Ctulhu_texture.png");
							child.material = material;
						}
					}
				);
		
					obj.scale.y = 0.5;
					obj.scale.z = 0.5;
					obj.scale.x = 0.5;
		
					obj.position.y = 35;
					obj.position.z = 0;
					obj.position.x = -250;
		
					obj.rotation.y+=1.7;
		
					scene.add(obj);
					console.log("Carregou Cthulo leste!");
		
				},//Oque acontece quando terminar!
				function(andamento){
					console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
				},//O que acontece enquanto esta carregando
				function(error){
					console.log(" Deu merda!: "+ error);
				}//o que acontece se der merda.
			);


	//////////////////////// Cthulu4 ////////////////
	//carregando Cthulu4
		loaderFBX.load(
			'assets/Cthulu/Ctulhu.fbx',//arquivo que vamos buscar
			function(obj){
				//atribui a cena, colore, reposiciona, rotaciona
				elementos['Cthulu4'] = obj;
			
					let texLoader = new THREE.TextureLoader().setPath("assets/Cthulu/");
		
					obj.traverse( function (child){
						if (child instanceof THREE.Mesh){
							let material = new THREE.MeshStandardMaterial();
							material.map = texLoader.load("Ctulhu_texture.png");
							child.material = material;
						}
					}
				);
		
					obj.scale.y = 0.5;
					obj.scale.z = 0.5;
					obj.scale.x = 0.5;
		
					obj.position.y = 35;
					obj.position.z = 0;
					obj.position.x = 250;
		
					obj.rotation.y-=1.7;
		
					scene.add(obj);
					console.log("Carregou Cthulo Oeste!");
		
				},//Oque acontece quando terminar!
				function(andamento){
					console.log("Carregou: " + (andamento.loaded / andamento.total)*100 + " %" );
				},//O que acontece enquanto esta carregando
				function(error){
					console.log(" Deu merda!: "+ error);
				}//o que acontece se der merda.
			);
};

var godSaysLightsOn = function (){
	let spot = new THREE.SpotLight(0xffffff);
	spot.position.set(100,100,100);
	scene.add(spot);

	scene.add(new THREE.AmbientLight(0x666666));
	//scene.add( new THREE.HemisphereLight( 0x443333, 0x222233, 4 ) );
}


var createGui = function (){
	const gui = new dat.GUI();

	parametrosGUI = {
		scalarPuppet: 1,
		positionX: 0,
		positionY: -6,
		positionZ: 0,

		skyColor : "#000000",
		groundColor: "#006400",

		geometrias: "",
		modelGui: ""
	};

	let fazScala = gui.add(parametrosGUI, 'scalarPuppet').min(0.1).max(2).step(0.1).name("Scale");
	fazScala.onChange(function (parametro){
			elementos[parametrosGUI.modelGui].scale.x = parametro;
			elementos[parametrosGUI.modelGui].scale.y = parametro;
			elementos[parametrosGUI.modelGui].scale.z = parametro;
		}
	);

	let opcoes = ['Trex1','Tigre1','Tigre2','Lion1','Rhino', 'Jaguar','Cthulu1','Cthulu2','Cthulu3','Cthulu4'];
	let comboChange = gui.add(parametrosGUI, 'geometrias').options(opcoes).name("Objetos");
	comboChange.onChange(function(parametro){

			if (parametro == 'Trex1'){
				camera.lookAt(elementos["Trex1"].position);
				parametrosGUI.modelGui = "Trex1";
			}else if (parametro == 'Tigre1'){
				camera.lookAt(elementos["Tigre1"].position);
				parametrosGUI.modelGui = "Tigre1";
			} 
			else if (parametro == 'Tigre2'){
				camera.lookAt(elementos["Tigre2"].position);
				parametrosGUI.modelGui = "Tigre2";
			} 
			else if (parametro == 'Lion1'){
				camera.lookAt(elementos["Lion1"].position);
				parametrosGUI.modelGui = "Lion1";
			}else if (parametro == 'Rhino'){
				camera.lookAt(elementos["Rhino"].position);
				parametrosGUI.modelGui = "Rhino";
			} else if (parametro == 'Jaguar'){
				camera.lookAt(elementos["Jaguar"].position);
				parametrosGUI.modelGui = "Jaguar";
			} else if (parametro == 'Cthulu1'){
				camera.lookAt(elementos["Cthulu1"].position);
				parametrosGUI.modelGui = "Cthulu1";
			}else if (parametro == 'Cthulu2'){
				camera.lookAt(elementos["Cthulu2"].position);
				parametrosGUI.modelGui = "Cthulu2";
			}else if (parametro == 'Cthulu3'){
				camera.lookAt(elementos["Cthulu3"].position);
				parametrosGUI.modelGui = "Cthulu3";
			}else if (parametro == 'Cthulu4'){
				camera.lookAt(elementos["Cthulu4"].position);
				parametrosGUI.modelGui = "Cthulu4";
			}
		}
	);
	let folderPosition = gui.addFolder("Position");

	let positionX = folderPosition.add(parametrosGUI, 'positionX').min(-6).max(6).step(0.1).name("Position X");
	positionX.onChange(function (parametro){
		elementos[parametrosGUI.modelGui].position.x = parametro;
		}
	);
	let positionY = folderPosition.add(parametrosGUI, 'positionY').min(-10).max(10).step(0.1).name("Position Y");
	positionY.onChange(function (parametro){
			elementos[parametrosGUI.modelGui].position.y = parametro;
		}
	);
	let positionZ = folderPosition.add(parametrosGUI, 'positionZ').min(-6).max(6).step(0.1).name("Position Z");
	positionZ.onChange(function (parametro){
		elementos[parametrosGUI.modelGui].position.z = parametro;
		}
	);

	let colorFolder = gui.addFolder('Coloros');
	let sColor = colorFolder.addColor(parametrosGUI, 'skyColor').name("Dollie's Color");
	sColor.onChange(function (parametro){
			elementos["ove"].traverse( function (child){
				if (child.isMesh){
					child.material.color = new THREE.Color(parametro);
				}
			}
		);  
		}
	);
	let gColor = colorFolder.addColor(parametrosGUI, 'groundColor').name("Ground");
	gColor.onChange(function (parametro){
			ground.material.color.setHex(parametro.replace("#", "0x"));
		}
	);


	//gui.add(parametrosGUI, 'b').name("Variavel2");

	//scene.add(gui);
	gui.open();

}

var init = function (){
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xcce0ff);
	
	
//	Camera em perspectiva
	camera = new THREE.PerspectiveCamera(
						50, // view angle
						window.innerWidth/window.innerHeight, //aspect ratio
						1, //near
						500 //far
					);
	
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
		
	camera.position.z = 50;
	camera.position.x = 0;
	camera.position.y = 1.7;
	
	godSaysLightsOn();

	createGui();

	objLoading();

	animation();


	//criar um piso.
	let textureLoad = new THREE.TextureLoader();
	let groundTexture = textureLoad.load("assets/texturas/terrain/grasslight-big.jpg"); //busca a imagem
	groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping; //quero que ela se repita
	groundTexture.encoding = THREE.sRGBEncoding; //padrão cores, sempre que existir será informado
	groundTexture.repeat.set(25,25); //número de vezes que ela vai se repetir dentro do nosso chão
	
	let materialGround = new THREE.MeshStandardMaterial({map: groundTexture});
	materialGround.normalMap = textureLoad.load("assets/texturas/terrain/grasslight-big-nm.jpg"); //busca a normal, que da noção básica de profundidade


	ground = new THREE.Mesh(
		new THREE.PlaneBufferGeometry(1000,1000),
		materialGround
	);
	ground.rotation.x = - Math.PI/2;
	ground.position.y-=7.5;
	scene.add(ground);

	controls = new THREE.OrbitControls(camera, renderer.domElement);

	scene.fog = new THREE.Fog(0xcce0ff, 200, 500);

	document.addEventListener('keydown', apertouButao);

};



var apertouButao =  function(e){
	console.log(e.keyCode);
	if (e.keyCode == 38){ //back
		camera.position.z-=1;
	}
	if (e.keyCode == 40){ // Ahead
		camera.position.z+=1;
	}
	if (e.keyCode == 39){//LEFT
		camera.position.x+=1;
	}if (e.keyCode == 37){//RIGHT
		camera.position.x-=1;
	}if (e.keyCode == 188){//Up
		camera.position.y+=1;
	}if (e.keyCode == 190){//Down
		camera.position.y-=1;
	}

}

var animation = function (){
	requestAnimationFrame(animation); 
	renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
}

function paraRadianos(angulo){
	return angulo * (Math.PI/180);
}

window.onload = this.init