//Lista de utilizadores do tipo: ['Nome de Utilizador', 'Password', 'Tipo de Conta']
//Tipo de Conta: Administrador: Admin; Utilizador: User; Senhorio: Owner.
users=[["Administrador","admi","Admin"],["Utilizador1","util1","User"],["Senhorio1","senh1","Owner"]];
newUsers=localStorage.getItem("users");
if(newUsers!=null){
	newUsers=newUsers.split(',');
	novos=[];
	for(l=0; l < newUsers.length; l++){
		novos.push([newUsers[l], newUsers[l+1], newUsers[l+2]]);
		l++;l++; 
	}
	if(newUsers.length!=users.length){
		users=novos;
	}
}

function checkLogin(){
	//document.cookie = "username=John Doe;";
	//document.cookie = "password=Doe;";
	var check="NotRegistered";
	
	var username=getCookie("username");
    if (username!="") {
       user=username;
    } else {
        return check;
    }
	
	var password=getCookie("password");
    if (password!="") {
       pass=password;
    } else {
        return check;
    }

	for (i = 0; i < users.length; i++) { 
    	if(users[i][0]==user && users[i][1]==pass){
			check=users[i][2];
			break;
		};
	}
	return check;
}

function getCookie(cname) {
    var name = cname + "=";
	if(document.cookie!=null){
		var ca = document.cookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length,c.length);
			}
		}
	}
    return "";
	
}


function tryLogin(){
	user=document.getElementById('username').value
	pass=document.getElementById('password').value
	var check=false;

	for (i = 0; i < users.length; i++) { 
    	if(users[i][0]==user && users[i][1]==pass){
			check=true;
			break;
		};
	}
	
	if(check==true){
		document.cookie = "username="+user+";";
		document.cookie = "password="+pass+";";
		document.getElementById('erroLogin').hidden=true;
		update()
		
	}else{
		document.getElementById('erroLogin').hidden=false;
	}
	return ;
}


function updateFormNewAccount(){
	if(document.getElementById('tipo').value=="Owner"){
		document.getElementById('opcoesOwner').hidden=false;
	}else{
		document.getElementById('opcoesOwner').hidden=true;
	};
}


function tryNewAccount(){
	
	var tipo=document.getElementById('tipo').value;
	var erro="";
	
	var nome = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var password2 = document.getElementById('password2').value;
	var contacto = document.getElementById('number').value;
	var nif = document.getElementById('nif').value;
	
	var rua = document.getElementById('street').value;
	var localidade = document.getElementById('local').value;
	var cpostal = document.getElementById('postal').value;
	
		if(nif.length<9){erro="Insira um NIF válido!";}
		if(contacto.length<9){erro="Insira contacto com pelo menos 9 numeros!";}
		if(password!=password2){erro="As passwords nao coincidem!";}
		if(password.length<5){erro="Insira uma password com mais de 5 caracteres!";}
		if(!(utilizadorValido(username))){erro="Nome de Utilizador inválido!";}
		if(email.length<5){erro="Insira um mail valido!";}
		if(nome.length<5){erro="Insira um nome com mais de 5 caracteres!";}
	
	
	
	if(tipo=="Owner"){
		if(cpostal.length<5){erro="Insira um código postal com mais de 5 caracteres!";}
		if(localidade.length<5){erro="Insira uma localidade com mais de 5 caracteres!";}
		if(rua.length<5){erro="Insira um nome de rua com mais de 5 caracteres!";}
	};

	if(erro==""){
		document.getElementById('erroNovaConta').hidden=true;
		users.push([username,password,tipo]);
		update();
		return true;
	}else{
		document.getElementById('erroNovaConta').innerHTML='<br><h4 style="color: red"><strong>'+erro+'</h4>';
		document.getElementById('erroNovaConta').hidden=false;
		return false;
	};
}

function utilizadorValido(user){
	var res=true;
	for (i = 0; i < users.length; i++) { 
    	if(users[i][0]==user){
			res=false;
			break;
		};
	}
	if(user.length<5){res=false;}
	return res;
}


function logout(){
	document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
	update();
}

function update(){
	localStorage.setItem("users", users);
	location.href="#";
	location.reload();
}




requirejs.config({
    paths: {
        'text': '../Scripts/text',
        'durandal': '../Scripts/durandal',
        'plugins': '../Scripts/durandal/plugins',
        'transitions': '../Scripts/durandal/transitions'
    }
});

define('jquery', function () { return jQuery; });
define('knockout', ko);

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'],  function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'myPlaceRadar';

    app.configurePlugins({
        router: true,
        dialog: true
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');
    });
});
