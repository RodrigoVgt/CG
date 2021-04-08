var scene; //mundo virtual
var camera; //area de visualizaÃ§Ã£o
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
	scene.add(sol);

};

var criaMonstro = function (){
	let puppet=[];

	let red = 	new THREE.Color(1,0,0);
	let green = new THREE.Color(0,1,0);
	let blue = 	new THREE.Color(0,0,1);
	let cores = [red, green, blue];
	let materials = [
		new THREE.MeshBasicMaterial({color: blue}),
		new THREE.MeshBasicMaterial({color: blue}),
		new THREE.MeshBasicMaterial({color: blue}),
		new THREE.MeshBasicMaterial({color: blue}),
		new THREE.MeshBasicMaterial({color: green}),
		new THREE.MeshBasicMaterial({color: blue})
	];

	let tronco = new THREE.Mesh(new THREE.BoxGeometry(4, 7, 2), materials);
	puppet["tronco"] = tronco;

	let cabeca = new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32), new THREE.MeshBasicMaterial({color: blue}));
	puppet["cabeca"] = cabeca;
	tronco.add(cabeca);
	cabeca.position.y=tronco.position.y+6;

	//bracoDireito e ombro
	
	let ombroD = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
	puppet["ombroD"] = ombroD;
	tronco.add(ombroD);
	ombroD.position.y= tronco.position.y+3;
	ombroD.position.x= tronco.position.y+3;
	
	let pivotOmbroD = new THREE.Group();
	puppet["pivotOmbroD"] = pivotOmbroD;
	ombroD.add(pivotOmbroD);
	
	let bracoD = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["bracoD"] = bracoD;
	pivotOmbroD.add(bracoD)
	bracoD.position.y-=1.7;

    //cotovelo e antebraço direitos

    let cotoD = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
	puppet["cotoD"] = cotoD;
	bracoD.add(cotoD);
	cotoD.position.y= bracoD.position.y+1;
	cotoD.position.x= bracoD.position.y+1.7;
	
	let pivotcotoD = new THREE.Group();
	puppet["pivotcotoD"] = pivotcotoD;
	cotoD.add(pivotcotoD);
	
	let anteD = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["anteD"] = anteD;
	pivotcotoD.add(anteD)
	anteD.position.y-=1.7;


    //Braço e ombro Esquerdos

   
    let ombroE = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
	puppet["ombroE"] = ombroE;
	tronco.add(ombroE);
	ombroE.position.y= tronco.position.y+3;
	ombroE.position.x= tronco.position.y-3;
	
	let pivotombroE = new THREE.Group();
	puppet["pivotOmbroE"] = pivotombroE;
	ombroE.add(pivotombroE);
	
	let bracoE = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["bracoE"] = bracoE;
	pivotombroE.add(bracoE)
	bracoE.position.y-=1.7;

    //cotovelo e antebraço Esquerdos

    let cotoE = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
	puppet["cotoE"] = cotoE;
	bracoE.add(cotoE);
	cotoE.position.y= bracoE.position.y+1;
	cotoE.position.x= bracoE.position.y+1.7;
	
	let pivotcotoE = new THREE.Group();
	puppet["pivotcotoE"] = pivotcotoE;
	cotoE.add(pivotcotoE);
	
	let anteE = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["anteE"] = anteE;
	pivotcotoE.add(anteE)
	anteE.position.y-=1.7;


    //Quadril e coxa esquerda
   
    let quadrilE = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
	puppet["quadrilE"] = quadrilE;
	tronco.add(quadrilE);
	quadrilE.position.y= tronco.position.y-4;
	quadrilE.position.x= tronco.position.y-1;
	
	let pivotquadrilE = new THREE.Group();
	puppet["pivotquadrilE"] = pivotquadrilE;
	quadrilE.add(pivotquadrilE);
	
	let coxaE = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["coxaE"] = coxaE;
	pivotquadrilE.add(coxaE)
	coxaE.position.y-=1.7;

    //joelho e panturrilha direita

    let joelhoE = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
	puppet["joelhoE"] = joelhoE;
	coxaE.add(joelhoE);
	joelhoE.position.y= coxaE.position.y+1;
	joelhoE.position.x= coxaE.position.y+1.7;
	
	let pivotjoelhoE = new THREE.Group();
	puppet["pivotjoelhoE"] = pivotjoelhoE;
	joelhoE.add(pivotjoelhoE);
	
	let pantuE = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["pantuE"] = pantuE;
	pivotjoelhoE.add(pantuE)
	pantuE.position.y-=1.7;


    //Quadril e coxa Direita
   
    let quadrilD = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
	puppet["quadrilD"] = quadrilD;
	tronco.add(quadrilD);
	quadrilD.position.y= tronco.position.y-4;
	quadrilD.position.x= tronco.position.y+1;
	
	let pivotquadrilD = new THREE.Group();
	puppet["pivotquadrilD"] = pivotquadrilD;
	quadrilD.add(pivotquadrilD);
	
	let coxaD = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["coxaD"] = coxaD;
	pivotquadrilD.add(coxaD)
	coxaD.position.y-=1.7;

    //joelho e panturrilha direita

    let joelhoD = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({color: 0xffffff}));
	puppet["joelhoD"] = joelhoD;
	coxaD.add(joelhoD);
	joelhoD.position.y= coxaD.position.y+1;
	joelhoD.position.x= coxaD.position.y+1.7;
	
	let pivotjoelhoD = new THREE.Group();
	puppet["pivotjoelhoD"] = pivotjoelhoD;
	joelhoD.add(pivotjoelhoD);
	
	let pantuD = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial({color: red}));
	puppet["pantuD"] = pantuD;
	pivotjoelhoD.add(pantuD)
	pantuD.position.y-=1.7;

	elementos["puppet"] = puppet;
	scene.add(tronco);

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
	
	criaMonstro();
	

	animation();


	document.addEventListener('keydown', apertouButao);
	document.addEventListener('keyup', soltouBotao);

	//metodos do mouser
	document.addEventListener('mousewheel', onMouseWheel);
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mousedown', onMouseClick);
	document.addEventListener('mouseup', onMouseUp);

	
};

var clicando = false;
var mouserPosAnterior = {
	x:0,
	y:0
}

var onMouseMove = function(e){
	let diferencaMovimento = {
		x: e.offsetX - mouserPosAnterior.x,
		y: e.offsetY - mouserPosAnterior.y
	}

	if (clicando){

		 let angulosQuaternion = new THREE.Quaternion().setFromEuler(
		 	new THREE.Euler (	paraRadianos(diferencaMovimento.y)*0.5,
		 					    paraRadianos(diferencaMovimento.x)*0.5,
		 						0,
		 						'XYZ')
		 );
		 elementos["puppet"]["tronco"].quaternion.multiplyQuaternions(angulosQuaternion, elementos["puppet"]["tronco"].quaternion);
	}
	mouserPosAnterior = {
		x: e.offsetX,
		y: e.offsetY
	}
};

var onMouseClick = function(e){
	clicando = true;
};

var onMouseUp = function(e){
	clicando = false;
};

var onMouseWheel = function (e){
		elementos["puppet"]["tronco"].scale.x+= (e.deltaY > 0)?-0.1:0.1;
		elementos["puppet"]["tronco"].scale.y+= (e.deltaY > 0)?-0.1:0.1;
		elementos["puppet"]["tronco"].scale.z+= (e.deltaY > 0)?-0.1:0.1;

}



var key_2 = false;
var key_1 = false;
var key_3 = false;
var key_4 = false;
var key_2 = false;
var key_5 = false;
var key_6 = false;
var key_7 = false;
var key_8 = false;
var key_q = false;
var key_w = false;
var key_e = false;
var key_r = false;
var key_a = false;
var key_s = false;
var key_d = false;
var key_f = false;
var key_z = false;
var key_x = false;
var key_c = false;
var key_v = false;
var key_space = false;

var soltouBotao = function(e){

	if (e.keyCode == 50){ //2
		key_2 = false;
	}
	if (e.keyCode == 49){ //1
		key_1 = false;
	}
	if (e.keyCode == 32){ //espaço
		key_space = false;
	}
	if (e.keyCode == 51){ //3
		key_3 = false;
	}
	if (e.keyCode == 52){ //4
		key_4 = false;
	}
    if (e.keyCode == 53){ //5
		key_5 = false;
	}
	if (e.keyCode == 54){ //6
		key_6 = false;
	}
	if (e.keyCode == 55){ //7
		key_7 = false;
	}
	if (e.keyCode == 56){ //8
		key_8 = false;
	}
	if (e.keyCode == 81){ // q
		key_q = false;
	}
    if (e.keyCode == 87){ // w
		key_w = false;
	}
    if (e.keyCode == 69){ // e
		key_e = false;
	}
    if (e.keyCode == 82){ // r
		key_r = false;
	}
    if (e.keyCode == 65){ // a
		key_a = false;
	}
    if (e.keyCode == 83){ // s
		key_s = false;
	}
    if (e.keyCode == 68){ // d
		key_d = false;
	}
    if (e.keyCode == 70){ // f
		key_f = false;
	}
    if (e.keyCode == 90){ // z
		key_z = false;
	}
    if (e.keyCode == 88){ // x
		key_x = false;
	}
    if (e.keyCode == 67){ // c
		key_c = false;
	}
    if (e.keyCode == 86){ // v
		key_v = false;
	}
}


var apertouButao =  function(e){
	console.log(e.keyCode);

	if (e.keyCode == 50){ //2
		key_2 = true;
	}
	if (e.keyCode == 49){ //1
		key_1 = true;
	}
	if (e.keyCode == 32){ //espaço
		key_space = true;
	}
	if (e.keyCode == 51){ //3
		key_3 = true;
	}
	if (e.keyCode == 52){ //4
		key_4 = true;
	}
    if (e.keyCode == 53){ //5
		key_5 = true;
	}
	if (e.keyCode == 54){ //6
		key_6 = true;
	}
	if (e.keyCode == 55){ //7
		key_7 = true;
	}
	if (e.keyCode == 56){ //8
		key_8 = true;
	}
	if (e.keyCode == 81){ // q
		key_q = true;
	}
    if (e.keyCode == 87){ // w
		key_w = true;
	}
    if (e.keyCode == 69){ // e
		key_e = true;
	}
    if (e.keyCode == 82){ // r
		key_r = true;
	}
    if (e.keyCode == 81){ // i
		key_q = true;
	}
    if (e.keyCode == 87){ // u
		key_w = true;
	}
    if (e.keyCode == 69){ // y
		key_e = true;
	}
    if (e.keyCode == 82){ // t
		key_r = true;
	}
    if (e.keyCode == 65){ // a
		key_a = true;
	}
    if (e.keyCode == 83){ // s
		key_s = true;
	}
    if (e.keyCode == 68){ // d
		key_d = true;
	}
    if (e.keyCode == 70){ // f
		key_f = true;
	}
    if (e.keyCode == 90){ // z
		key_z = true;
	}
    if (e.keyCode == 88){ // x
		key_x = true;
	}
    if (e.keyCode == 67){ // c
		key_c = true;
	}
    if (e.keyCode == 86){ // v
		key_v = true;
	}
}

var count =0; 
var velocidadeOmbroDireitoC = -0.03;
var velocidadeOmbroDireitoL = -0.03;
var velocidadeOmbroEsquerdoC = -0.03;
var velocidadeOmbroEsquerdoL = -0.03;
var velocidadeCotoDireitoC = -0.03;
var velocidadeCotoDireitoL = -0.03;
var animation = function (){
	requestAnimationFrame(animation); //adiciona o mÃ©todo na fila de renderizaÃ§Ã£o

    ///////////////movimento braço esquerdo

	if (key_1){ 
		if (elementos["puppet"]["pivotOmbroD"].rotation.x < -2.83 || elementos["puppet"]["pivotOmbroD"].rotation.x > 1.3)
			velocidadeOmbroDireitoC*=-1;

		elementos["puppet"]["pivotOmbroD"].rotation.x += velocidadeOmbroDireitoC;
	}
	if (key_2){
		if (elementos["puppet"]["pivotOmbroD"].rotation.z < 0 || elementos["puppet"]["pivotOmbroD"].rotation.z > 1.4)
			velocidadeOmbroDireitoL*=-1;

		elementos["puppet"]["pivotOmbroD"].rotation.z += velocidadeOmbroDireitoL;
	}
    if (key_3){
		if (elementos["puppet"]["pivotOmbroD"].rotation.x < -2.83 || elementos["puppet"]["pivotOmbroD"].rotation.x > 1.3)
			velocidadeOmbroDireitoC*=-1;

		elementos["puppet"]["pivotOmbroD"].rotation.x += velocidadeOmbroDireitoC*-1;
	}
    if (key_4){
		if (elementos["puppet"]["pivotOmbroD"].rotation.z < 0 || elementos["puppet"]["pivotOmbroD"].rotation.z > 1.4)
			velocidadeOmbroDireitoL*=-1;

		elementos["puppet"]["pivotOmbroD"].rotation.z += velocidadeOmbroDireitoL*-1;
	}

    ///////////////movimento braço direito

    if (key_q){ 
		if (elementos["puppet"]["pivotOmbroE"].rotation.x < -2.83 || elementos["puppet"]["pivotOmbroE"].rotation.x > 1.3)
            velocidadeOmbroEsquerdoC *=-1;

		elementos["puppet"]["pivotOmbroE"].rotation.x += velocidadeOmbroEsquerdoC;
	}
	if (key_w){
		if (elementos["puppet"]["pivotOmbroE"].rotation.z > 0 || elementos["puppet"]["pivotOmbroE"].rotation.z < -1.4)
            velocidadeOmbroEsquerdoL *=-1;

		elementos["puppet"]["pivotOmbroE"].rotation.z += velocidadeOmbroEsquerdoL;
	}
    if (key_e){
		if (elementos["puppet"]["pivotOmbroE"].rotation.x < -2.83 || elementos["puppet"]["pivotOmbroE"].rotation.x > 1.3)
            velocidadeOmbroEsquerdoC *=-1;

		elementos["puppet"]["pivotOmbroE"].rotation.x += velocidadeOmbroEsquerdoC*-1;
	}
    if (key_r){
		if (elementos["puppet"]["pivotOmbroE"].rotation.z > 0 || elementos["puppet"]["pivotOmbroE"].rotation.z < -1.4)
		    velocidadeOmbroEsquerdoL  *=-1;

		elementos["puppet"]["pivotOmbroE"].rotation.z += velocidadeOmbroEsquerdoL*-1;

    }

    ///////////////movimento atebraço esquerdo

	if (key_5){ 
		if (elementos["puppet"]["pivotcotoD"].rotation.x < -2.83 || elementos["puppet"]["pivotcotoD"].rotation.x > 0)
            velocidadeCotoDireitoC *=-1;

		elementos["puppet"]["pivotcotoD"].rotation.x += velocidadeCotoDireitoC;
	}
	if (key_6){
		if (elementos["puppet"]["pivotcotoD"].rotation.z < 0 || elementos["puppet"]["pivotcotoD"].rotation.z > 0.5)
            velocidadeCotoDireitoL *=-1;

		elementos["puppet"]["pivotcotoD"].rotation.z += velocidadeCotoDireitoL *-1;;
	}
    if (key_7){
		if (elementos["puppet"]["pivotcotoD"].rotation.x < -2.83 || elementos["puppet"]["pivotcotoD"].rotation.x > 0)
            velocidadeCotoDireitoC*=-1;

		elementos["puppet"]["pivotcotoD"].rotation.x += velocidadeCotoDireitoC*-1;
	}
    if (key_8){
		if (elementos["puppet"]["pivotcotoD"].rotation.z < 0 || elementos["puppet"]["pivotcotoD"].rotation.z > 0.5)
            velocidadeCotoDireitoL*=-1;

		elementos["puppet"]["pivotcotoD"].rotation.z += velocidadeCotoDireitoL *-1;
	}


    ///////////////movimento atebraço direito

	if (key_t){ 
		if (elementos["puppet"]["pivotcotoD"].rotation.x < -2.83 || elementos["puppet"]["pivotcotoD"].rotation.x > 0)
            velocidadeCotoDireitoC *=-1;

		elementos["puppet"]["pivotcotoD"].rotation.x += velocidadeCotoDireitoC;
	}
	if (key_y){
		if (elementos["puppet"]["pivotcotoD"].rotation.z < 0 || elementos["puppet"]["pivotcotoD"].rotation.z > 0.5)
            velocidadeCotoDireitoL *=-1;

		elementos["puppet"]["pivotcotoD"].rotation.z += velocidadeCotoDireitoL *-1;;
	}
    if (key_u){
		if (elementos["puppet"]["pivotcotoD"].rotation.x < -2.83 || elementos["puppet"]["pivotcotoD"].rotation.x > 0)
            velocidadeCotoDireitoC*=-1;

		elementos["puppet"]["pivotcotoD"].rotation.x += velocidadeCotoDireitoC*-1;
	}
    if (key_i){
		if (elementos["puppet"]["pivotcotoD"].rotation.z < 0 || elementos["puppet"]["pivotcotoD"].rotation.z > 0.5)
            velocidadeCotoDireitoL*=-1;

		elementos["puppet"]["pivotcotoD"].rotation.z += velocidadeCotoDireitoL *-1;
	}
    
    ///////////////rotação boneco
	if (key_space){
		elementos["puppet"]["tronco"].rotation.y += 0.01;
	}
	
	//if (++count >= 30){
	//	let rotation = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.01,0,0.01, 'XYZ'));
	//	elementos["cubo1"].quaternion.multiplyQuaternions(rotation, elementos["cubo1"].quaternion);

	// 	elementos["cubo2"].rotation.x += 0.01;
	// 	elementos["cubo2"].rotation.z += 0.01;
	// //	count = 0;
	


	renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
}

function paraRadianos(angulo){
	return angulo * (Math.PI/180);
}

window.onload = this.init