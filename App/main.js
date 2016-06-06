var result=[];

//Tipo de Conta: Administrador: Admin; Utilizador: User; Senhorio: Owner.
users=[
	//['Username', 'Password', 'Tipo', 'Nome', 'Email', 'Contacto', 'NIF', 'Endereço', 'Localidade', 'CPostal']
	["Administrador","admi","Admin","","","","","","",""],
	["Utilizador1","util1","User","My Name Here","util@sapo.pt","111111111","222222222","Endereço-Util1","Localidade-Util1","CPostal-Util1"],
	["Senhorio1","senh1","Owner","My Name Here 2","senh1@sapo.pt","333333333","444444444","Endereço-Senh1","Localidade-Senh1","CPostal-Senh1"],
	["Senhorio2","senh2","Owner","My Name Here 3","senh2@sapo.pt","555555555","666666666","Endereço-Senh2","Localidade-Senh2","CPostal-Senh2"]
];
checkUsers();

ads=[
	//['Localidade', 'Endereço', 'CPostal', 'Tipo', 'Preco', 'TempoMinimo', 'Area', 'Descriçao', ['Imagen1','Imagem2'], 'Senhorio', 'Arrendatario']
	["Oliveirinha; Aveiro","Rua da Vida","9999-123","T1","350","6","30","Existem muitas variações das passagens do Lorem Ipsum disponíveis mas a maior parte sofreu alterações de alguma forma pela injecção de humor ou de palavras aleatórias que nem sequer parecem suficientemente credíveis. Se vai usar uma passagem do Lorem Ipsum deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto.","Senhorio1","Utilizador1"],
	["Aveiro","Rua da Morte","1234-999","T1","289","12","28","Existem muitas variações das passagens do Lorem Ipsum disponíveis mas a maior parte sofreu alterações de alguma forma pela injecção de humor ou de palavras aleatórias que nem sequer parecem suficientemente credíveis. Se vai usar uma passagem do Lorem Ipsum deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto.","Senhorio2",""],
	["Aveiro","Rua da Vida","9999-123","T0","370","8","30","Existem muitas variações das passagens do Lorem Ipsum disponíveis mas a maior parte sofreu alterações de alguma forma pela injecção de humor ou de palavras aleatórias que nem sequer parecem suficientemente credíveis. Se vai usar uma passagem do Lorem Ipsum deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto.","Senhorio1",""],
	["Aveiro","Rua da Morte","1234-999","T0","250","10","28","Existem muitas variações das passagens do Lorem Ipsum disponíveis mas a maior parte sofreu alterações de alguma forma pela injecção de humor ou de palavras aleatórias que nem sequer parecem suficientemente credíveis. Se vai usar uma passagem do Lorem Ipsum deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto.","Senhorio2",""],
	["Praia da Barra","Rua da Praia","1234-999","T2","250","10","28","Existem muitas variações das passagens do Lorem Ipsum disponíveis mas a maior parte sofreu alterações de alguma forma pela injecção de humor ou de palavras aleatórias que nem sequer parecem suficientemente credíveis. Se vai usar uma passagem do Lorem Ipsum deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto.","Senhorio2",""]
];
checkAds();

favs=[
["Oliveirinha; Aveiro","Rua da Vida","9999-123","T1","350","6","30","Existem muitas variações das passagens do Lorem Ipsum disponíveis mas a maior parte sofreu alterações de alguma forma pela injecção de humor ou de palavras aleatórias que nem sequer parecem suficientemente credíveis. Se vai usar uma passagem do Lorem Ipsum deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto.","Senhorio1","","Utilizador1"]
];
checkFavs();

adAsk=[
	//['Localidade', 'Endereço', 'CPostal', 'Tipo', 'Preco', 'TempoMinimo', 'Area', 'Descriçao',  'Senhorio', 'Arrendatario']
	["Aveiro","Rua da Morte","1234-999","T0","250","10","28","Existem muitas variações das passagens do Lorem Ipsum disponíveis mas a maior parte sofreu alterações de alguma forma pela injecção de humor ou de palavras aleatórias que nem sequer parecem suficientemente credíveis. Se vai usar uma passagem do Lorem Ipsum deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto.","Senhorio2",""]
];
checkAdAsk();

function checkUsers(){
	var stored = localStorage.getItem("users")
	if(stored!=null){
		stored=stored.split(",");
		if(stored.length!=users.length){
			users=[];
			var temp=[]
			for(i=0; i<stored.length; i+=10){
				temp=[]
				for(x=0; x<10; x++){
					temp.push(stored[i+x])
				}
				users.push(temp);
			}
			
		}
	}
}


function checkAds(){
	
	var stored = localStorage.getItem("ads")
	if(stored!=null){
		stored=stored.split(",");
		if(stored.length!=users.length){
			ads=[];
			var temp=[]
			for(i=0; i<stored.length; i+=10){
				temp=[]
				for(x=0; x<10; x++){
					temp.push(stored[i+x])
				}
				ads.push(temp);
			}
			
		}
	}
}


function checkAdAsk(){
	var stored = localStorage.getItem("adAsk")
	if(stored!=null){
		stored=stored.split(",");
		if(stored.length!=users.length){
			adAsk=[];
			var temp=[]
			for(i=0; i<stored.length; i+=10){
				temp=[]
				for(x=0; x<10; x++){
					temp.push(stored[i+x])
				}
				adAsk.push(temp);
			}
			
		}
	}
}


function checkFavs(){
	var stored = localStorage.getItem("favs")
	if(stored!=null){
		stored=stored.split(",");
		if(stored.length!=users.length){
			favs=[];
			var temp=[]
			for(i=0; i<stored.length; i+=11){
				temp=[]
				for(x=0; x<10; x++){
					temp.push(stored[i+x])
				}
				favs.push(temp);
			}
			
		}
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


function getCookie(cname){
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
		update("#")
		
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
		//['Username', 'Password', 'Tipo', 'Nome', 'Email', 'Contacto', 'NIF', 'Endereço', 'Localidade', 'CPostal']
		users.push([username,password,tipo,nome,email,contacto,nif,rua,localidade,cpostal]);
		update("#");
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
	update("#");
}


function update(href){
	localStorage.setItem("users", users);
	localStorage.setItem("ads", ads);
	localStorage.setItem("adAsk", adAsk);
	localStorage.setItem("favs", favs);
	location.href=href;
	location.reload();
}




function carregarDados(){
setTimeout(function(){
    var username=getCookie("username");
    if (username!="") {
       user=username;
    } else {
        update("#");
    }
	
	var password=getCookie("password");
    if (password!="") {
       pass=password;
    } else {
        update("#");
    }
	
	for (i = 0; i < users.length; i++) { 
    	if(users[i][0]==user && users[i][1]==pass){
			document.getElementById('ctipo').value=users[i][2];
			document.getElementById('cname').value=users[i][3];
			document.getElementById('cemail').value=users[i][4];
			document.getElementById('cusername').value=users[i][0];
			document.getElementById('cpassword').value;
			document.getElementById('cpassword2').value;
			document.getElementById('cnumber').value=users[i][5];
			document.getElementById('cnif').value=users[i][6];
	
			document.getElementById('cstreet').value=users[i][7];
			document.getElementById('clocal').value=users[i][8];
			document.getElementById('cpostal').value=users[i][9];
			if(document.getElementById('ctipo').value=="Owner"){
				document.getElementById('copcoesOwner').hidden=false;
			}
			break;
		};
	}
}, 1000);
}


function updateFormChangeAccount(){
	if(document.getElementById('ctipo').value=="Owner"){
		document.getElementById('copcoesOwner').hidden=false;
	}else{
		document.getElementById('copcoesOwner').hidden=true;
	};
}


function tryChangeAccount(){
	
	var tipo=document.getElementById('ctipo').value;
	var erro="";
	
	var nome = document.getElementById('cname').value;
	var email = document.getElementById('cemail').value;
	var username = document.getElementById('cusername').value;
	var password = document.getElementById('cpassword').value;
	var password2 = document.getElementById('cpassword2').value;
	var contacto = document.getElementById('cnumber').value;
	var nif = document.getElementById('cnif').value;
	
	var rua = document.getElementById('cstreet').value;
	var localidade = document.getElementById('clocal').value;
	var cpostal = document.getElementById('cpostal').value;
	
		if(nif.length<9){erro="Insira um NIF válido!";}
		if(contacto.length<9){erro="Insira contacto com pelo menos 9 numeros!";}
		
		if((password2.length<5) && (password2.length!=0)){erro="A nova password e inválida!";}

		var check=true;
		for (i = 0; i < users.length; i++) { 
    	if(users[i][0]==username && users[i][1]==password){
			check=false;
			break;
		};
	}
		
		if(check){erro="Insira a sua password para confirmar alterações!";}
		
		if(email.length<5){erro="Insira um mail valido!";}
		if(nome.length<5){erro="Insira um nome com mais de 5 caracteres!";}
	
	
	
	if(tipo=="Owner"){
		if(cpostal.length<5){erro="Insira um código postal com mais de 5 caracteres!";}
		if(localidade.length<5){erro="Insira uma localidade com mais de 5 caracteres!";}
		if(rua.length<5){erro="Insira um nome de rua com mais de 5 caracteres!";}
	};

	if(erro==""){
		document.getElementById('erroAlteraConta').hidden=true;
		//['Username', 'Password', 'Tipo', 'Nome', 'Email', 'Contacto', 'NIF', 'Endereço', 'Localidade', 'CPostal']
		var newusers=[];
		for (i = 0; i < users.length; i++) { 
			if(users[i][0]!=username){
				newusers.push(users[i]);
			};
		};
		users=newusers;
		if(password2.length==0){
			users.push([username,password,tipo,nome,email,contacto,nif,rua,localidade,cpostal]);
		}else{
			users.push([username,password2,tipo,nome,email,contacto,nif,rua,localidade,cpostal]);
		}
		update("#");
		return true;
	}else{
		document.getElementById('erroAlteraConta').innerHTML='<br><h4 style="color: red"><strong>'+erro+'</h4>';
		document.getElementById('erroAlteraConta').hidden=false;
		return false;
	};
}


function adSearch(){
	var localidade = document.getElementById('slocalidade').value;
	var precoMax = document.getElementById('price-max').value;
	var precoMin = document.getElementById('price-min').value;	
	var tipo = document.getElementById('stipo').value;
	
	result=[];
	//['Localidade', 'Endereço', 'CPostal', 'Tipo', 'Preco', 'TempoMinimo', 'Area', 'Descriçao', ['Imagen1','Imagem2'], 'Senhorio', 'Arrendatario']
	for(i=0; i<ads.length; i++){
		x=ads[i];
		if( x[0].toUpperCase().search(localidade.toUpperCase())>=0 && parseInt(x[4])>=parseInt(precoMin) && parseInt(x[4])<=parseInt(precoMax) && x[3]==tipo){
			console.log("Result: "+x[0]);
			result.push(ads[i]);
		}
	}
	
	setTimeout(function(){
		document.getElementById('rlocalidade').value = localidade;
		document.getElementById('rprice-max').value = precoMax;
		document.getElementById('rprice-min').value = precoMin; 
		document.getElementById('rprice-max1').value = precoMax;
		document.getElementById('rprice-min1').value = precoMin; 	
		document.getElementById('rtipo').value = tipo;
		
		radSearch();
	},500);
	
}


function radSearch(){
	var localidade = document.getElementById('rlocalidade').value;
	var precoMax = document.getElementById('rprice-max').value;
	var precoMin = document.getElementById('rprice-min').value;	
	var tipo = document.getElementById('rtipo').value;
	
	result=[];
	//['Localidade', 'Endereço', 'CPostal', 'Tipo', 'Preco', 'TempoMinimo', 'Area', 'Descriçao', ['Imagen1','Imagem2'], 'Senhorio', 'Arrendatario']
	for(i=0; i<ads.length; i++){
		x=ads[i];
		if( x[0].toUpperCase().search(localidade.toUpperCase())>=0 && parseInt(x[4])>=parseInt(precoMin) && parseInt(x[4])<=parseInt(precoMax) && x[3]==tipo){
			console.log("Result: "+x[0]);
			result.push(ads[i]);
		}
	}
	
	var show = document.getElementById("Resultados");
	if(result.length==0){
		document.getElementById("SemResultados").hidden=false;
		show.hidden=true;
	}else{
		show.hidden=false;
		show.innerHTML="";
		for(c=0; c<result.length;c++){
			dados=result[c];
			aux="";
			show.innerHTML+=
						'<div style="border:1px solid rgba(242, 133, 0, 1.5); border-radius: 20px; margin-left: 0px;" align="center" class="row col-md-12">'+
							'<div class="col-md-3 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-6 col-sm-12">'+
									'Localidade:'+
								'</div>'+
								'<div class="col-md-6 col-sm-12">'+
									dados[0]+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-1 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-6 col-sm-12">'+
									'Tipo:'+
								'</div>'+
								'<div class="col-md-6 col-sm-12">'+
									dados[3]+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-2 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-6 col-sm-12">'+
									'Preço:'+
								'</div>'+
								'<div class="col-md-6 col-sm-12">'+
									dados[4]+' €'+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-3 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-8 col-sm-12">'+
									'Tempo Mínimo:'+
								'</div>'+
								'<div class="col-md-4 col-sm-12">'+
									dados[5]+ ' M'+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-2 col-sm-12">'+
								'<div class="col-md-12 col-sm-12">'+
									'<img style="width: 7vw;" src="Content/images/book.png" />'+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-1 col-sm-12"  style="margin-top: 11px;">'+
								'<div class="col-md-12 col-sm-12">'+
									'<button style="width: 50px" onCLick="maisResInfo('+c+')">+Info</button>'+
								'</div>'+
								'<div class="col-md-12 col-sm-12"'+aux+'>'+
									'<button style="width: 50px" id="addFav'+c+'" onCLick="addFav('+c+')">+Fav</button>'+
								'</div>'+
							'</div>'+
							
						'</div>';

			
       
		}
		document.getElementById("SemResultados").hidden=true;
	}
	
	
	
}


function updateMinMax(){
	sMin=document.getElementById('price-min');
	tbMin=document.getElementById('price-min1');
	sMax=document.getElementById('price-max');
	tbMax=document.getElementById('price-max1');
	
	document.getElementById('price-min1').value=document.getElementById('price-min').value;
	document.getElementById('price-max1').value=document.getElementById('price-max').value;
}


function updateMinMax1(){
	sMin=document.getElementById('price-min');
	tbMin=document.getElementById('price-min1');
	sMax=document.getElementById('price-max');
	tbMax=document.getElementById('price-max1');
	
	sMin.value=tbMin.value;
	sMax.value=tbMax.value;
}


function rupdateMinMax(){
	sMin=document.getElementById('rprice-min');
	tbMin=document.getElementById('rprice-min1');
	sMax=document.getElementById('rprice-max');
	tbMax=document.getElementById('rprice-max1');
	
	document.getElementById('rprice-min1').value=document.getElementById('rprice-min').value;
	document.getElementById('rprice-max1').value=document.getElementById('rprice-max').value;
}


function rupdateMinMax1(){
	sMin=document.getElementById('rprice-min');
	tbMin=document.getElementById('rprice-min1');
	sMax=document.getElementById('rprice-max');
	tbMax=document.getElementById('rprice-max1');
	
	sMin.value=tbMin.value;
	sMax.value=tbMax.value;
}


function tryNewAd(){
	
	var tipo=document.getElementById('ntipo').value;
	var localidade = document.getElementById('nlocalidade').value;
	var rua = document.getElementById('nrua').value;
	var cpostal = document.getElementById('ncpostal').value;
	var preco = document.getElementById('npreco').value;
	var tempo = document.getElementById('ntempo').value;
	var area = document.getElementById('narea').value;
	var descricao = document.getElementById('ndescricao').value;
	
		erro="";
		if(descricao.length<20){erro="Insira uma descricao com pelo menos 20 caracteres!";}
		if(preco.length<1){erro="Insira uma area válida!";}
		if(preco.length<1){erro="Insira um tempo mínimo válido!";}
		if(preco.length<1){erro="Insira um preço válido!";}
		if(cpostal.length!=8){erro="Insira um codigo postal do tipo 0000-000!";}
		if(rua.length<5){erro="Insira uma rua com mais de 5 caracteres!";}
		if(localidade.length<5){erro="Insira uma localidade com mais de 5 caracteres!";}

	if(erro==""){
		document.getElementById('erroNovoAnuncio').hidden=true;
		//['Localidade', 'Endereço', 'CPostal', 'Tipo', 'Preco', 'TempoMinimo', 'Area', 'Descriçao', ['Imagen1','Imagem2'], 'Senhorio', 'Arrendatario']
		adAsk.push([localidade,rua,cpostal,tipo,preco,tempo,area,descricao,"",getCookie("username"),""]);
		update("#imoveis");
		return true;
	}else{
		document.getElementById('erroNovoAnuncio').innerHTML='<br><h4 style="color: red"><strong>'+erro+'</h4>';
		document.getElementById('erroNovoAnuncio').hidden=false;
		return false;
	};
}


function imoveisSenh(){
	meusAnuncios=[];
	//['Localidade', 'Endereço', 'CPostal', 'Tipo', 'Preco', 'TempoMinimo', 'Area', 'Descriçao', ['Imagen1','Imagem2'], 'Senhorio', 'Arrendatario']
	for(i=0; i<ads.length; i++){
		x=ads[i];
		if(getCookie("username")==ads[i][8]){
			meusAnuncios.push(ads[i]);
		}
	}
	
	setTimeout(function(){
	var show = document.getElementById("iResultados");
	if(meusAnuncios.length==0){
		document.getElementById("iSemResultados").hidden=false;
		show.hidden=true;
	}else{
		show.hidden=false;
		show.innerHTML="";
		for(var c=0; c<meusAnuncios.length;c++){
			dados=meusAnuncios[c];
			var aux=
						'<div style="border:1px solid rgba(242, 133, 0, 1.5); border-radius: 20px; margin-left: 0px;" align="center" class="row col-md-12">'+
							'<div class="col-md-3 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-6 col-sm-12">'+
									'Localidade:'+
								'</div>'+
								'<div class="col-md-6 col-sm-12">'+
									dados[0]+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-1 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-6 col-sm-12">'+
									'Tipo:'+
								'</div>'+
								'<div class="col-md-6 col-sm-12">'+
									dados[3]+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-2 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-6 col-sm-12">'+
									'Preço:'+
								'</div>'+
								'<div class="col-md-6 col-sm-12">'+
									dados[4]+' €'+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-3 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-8 col-sm-12">'+
									'Tempo Mínimo:'+
								'</div>'+
								'<div class="col-md-4 col-sm-12">'+
									dados[5]+ ' M'+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-2 col-sm-12">'+
								'<div class="col-md-12 col-sm-12">'+
									'<img style="width: 7vw;" src="Content/images/book.png" />'+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-1 col-sm-12"  style="margin-top: 11px;" alig="center">'+
								'<div class="col-md-12 col-sm-12">'+
									'<button onCLick="maisInfo('+c+')">+Info</button>'+
								'</div>';
								if(dados[9]==""){
								aux+='<div class="col-md-12 col-sm-12">'+
													'<button onCLick="eliminar('+c+')">Eliminar</button>'+
												'</div>'
								}
								
								aux+=
							'</div>'+
							
						'</div>';
						
						show.innerHTML+=aux;

			
       
		}
		document.getElementById("iSemResultados").hidden=true;
	}
	}, 300);
}


function eliminar(index){
	ads.splice(index, 1);
}


function maisInfo(index){
	//['Localidade', 'Endereço', 'CPostal', 'Tipo', 'Preco', 'TempoMinimo', 'Area', 'Descriçao', ['Imagen1','Imagem2'], 'Senhorio', 'Arrendatario']
	console.log("MaisInfo("+index+")")
	document.getElementById('showLocal').innerHTML=ads[index][0];
	document.getElementById('showRua').innerHTML=ads[index][1];
	document.getElementById('showCPostal').innerHTML=ads[index][2];
	document.getElementById('showTipo').innerHTML=ads[index][3];
	document.getElementById('showPreco').innerHTML=ads[index][4];
	document.getElementById('showTempo').innerHTML=ads[index][5];
	document.getElementById('showArea').innerHTML=ads[index][6];
	document.getElementById('showDesc').innerHTML=ads[index][7];

	//document.getElementById('foto').src="Content/images/book.png";
	$('#myModal_info').modal('show');

}


function maisResInfo(index){
	//['Localidade', 'Endereço', 'CPostal', 'Tipo', 'Preco', 'TempoMinimo', 'Area', 'Descriçao', ['Imagen1','Imagem2'], 'Senhorio', 'Arrendatario']
	console.log("MaisInfo("+index+")")
	document.getElementById('showLocal').innerHTML=result[index][0];
	document.getElementById('showRua').innerHTML=result[index][1];
	document.getElementById('showCPostal').innerHTML=result[index][2];
	document.getElementById('showTipo').innerHTML=result[index][3];
	document.getElementById('showPreco').innerHTML=result[index][4];
	document.getElementById('showTempo').innerHTML=result[index][5];
	document.getElementById('showArea').innerHTML=result[index][6];
	document.getElementById('showDesc').innerHTML=result[index][7];

	//document.getElementById('foto').src="Content/images/book.png";
	$('#myModal_info').modal('show');

}


function imoveisUtil(){
	meusAnuncios=[];
	//['Localidade', 'Endereço', 'CPostal', 'Tipo', 'Preco', 'TempoMinimo', 'Area', 'Descriçao', ['Imagen1','Imagem2'], 'Senhorio', 'Arrendatario']
	for(i=0; i<ads.length; i++){
		x=ads[i];
		if(getCookie("username")==ads[i][9]){
			meusAnuncios.push(ads[i]);
		}
	}
	
	setTimeout(function(){
	var show = document.getElementById("uResultados");
	if(meusAnuncios.length==0){
		document.getElementById("uSemResultados").hidden=false;
		show.hidden=true;
	}else{
		show.hidden=false;
		show.innerHTML="";
		for(var c=0; c<meusAnuncios.length;c++){
			dados=meusAnuncios[c];
			var aux=
						'<div style="border:1px solid rgba(242, 133, 0, 1.5); border-radius: 20px; margin-left: 0px;" align="center" class="row col-md-12">'+
							'<div class="col-md-3 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-6 col-sm-12">'+
									'Localidade:'+
								'</div>'+
								'<div class="col-md-6 col-sm-12">'+
									dados[0]+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-1 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-6 col-sm-12">'+
									'Tipo:'+
								'</div>'+
								'<div class="col-md-6 col-sm-12">'+
									dados[3]+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-2 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-6 col-sm-12">'+
									'Preço:'+
								'</div>'+
								'<div class="col-md-6 col-sm-12">'+
									dados[4]+' €'+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-3 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-8 col-sm-12">'+
									'Tempo Mínimo:'+
								'</div>'+
								'<div class="col-md-4 col-sm-12">'+
									dados[5]+ ' M'+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-2 col-sm-12">'+
								'<div class="col-md-12 col-sm-12">'+
									'<img style="width: 7vw;" src="Content/images/book.png" />'+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-1 col-sm-12"  style="margin-top: 11px;" alig="center">'+
								'<div class="col-md-12 col-sm-12">'+
									'<button onCLick="maisInfo('+c+')">+Info</button>'+
								'</div>';
								if(dados[9]==""){
								aux+='<div class="col-md-12 col-sm-12">'+
													'<button onCLick="eliminar('+c+')">Eliminar</button>'+
												'</div>'
								}
								
								aux+=
							'</div>'+
							
						'</div>';
						
						show.innerHTML+=aux;

			
       
		}
		document.getElementById("uSemResultados").hidden=true;
	}
	}, 300);
}


function favoritos(){
	meusFavoritos=[];
	//['Localidade', 'Endereço', 'CPostal', 'Tipo', 'Preco', 'TempoMinimo', 'Area', 'Descriçao', ['Imagen1','Imagem2'], 'Senhorio', 'Arrendatario']
	for(i=0; i<favs.length; i++){
		x=favs[i];
		if(getCookie("username")==favs[i][10]){
			meusFavoritos.push(ads[i]);
		}
	}
	
	setTimeout(function(){
	var show = document.getElementById("uResultados");
	if(meusFavoritos.length==0){
		document.getElementById("uSemResultados").hidden=false;
		show.hidden=true;
	}else{
		show.hidden=false;
		show.innerHTML="";
		for(var c=0; c<meusFavoritos.length;c++){
			dados=meusFavoritos[c];
			var aux=
						'<div style="border:1px solid rgba(242, 133, 0, 1.5); border-radius: 20px; margin-left: 0px;" align="center" class="row col-md-12">'+
							'<div class="col-md-3 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-6 col-sm-12">'+
									'Localidade:'+
								'</div>'+
								'<div class="col-md-6 col-sm-12">'+
									dados[0]+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-1 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-6 col-sm-12">'+
									'Tipo:'+
								'</div>'+
								'<div class="col-md-6 col-sm-12">'+
									dados[3]+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-2 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-6 col-sm-12">'+
									'Preço:'+
								'</div>'+
								'<div class="col-md-6 col-sm-12">'+
									dados[4]+' €'+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-3 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-8 col-sm-12">'+
									'Tempo Mínimo:'+
								'</div>'+
								'<div class="col-md-4 col-sm-12">'+
									dados[5]+ ' M'+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-2 col-sm-12">'+
								'<div class="col-md-12 col-sm-12">'+
									'<img style="width: 7vw;" src="Content/images/book.png" />'+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-1 col-sm-12"  style="margin-top: 11px;" alig="center">'+
								'<div class="col-md-12 col-sm-12">'+
									'<button onCLick="maisInfo('+c+')">+Info</button>'+
								'</div>'+
								'<div class="col-md-12 col-sm-12">'+
									'<button onCLick="eliminarFav('+c+')">Eliminar</button>'+
								'</div>'
	
							'</div>'+
							
						'</div>';
						
						show.innerHTML+=aux;

			
       
		}
		document.getElementById("uSemResultados").hidden=true;
	}
	}, 300);
}


function admin(){
	
	
	setTimeout(function(){
	var show = document.getElementById("uResultados");
	if(adAsk.length==0){
		document.getElementById("uSemResultados").hidden=false;
		show.hidden=true;
	}else{
		show.hidden=false;
		show.innerHTML="";
		for(var c=0; c<adAsk.length;c++){
			dados=adAsk[c];
			var aux=
						'<div style="border:1px solid rgba(242, 133, 0, 1.5); border-radius: 20px; margin-left: 0px;" align="center" class="row col-md-12">'+
							'<div class="col-md-3 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-6 col-sm-12">'+
									'Localidade:'+
								'</div>'+
								'<div class="col-md-6 col-sm-12">'+
									dados[0]+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-1 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-6 col-sm-12">'+
									'Tipo:'+
								'</div>'+
								'<div class="col-md-6 col-sm-12">'+
									dados[3]+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-2 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-6 col-sm-12">'+
									'Preço:'+
								'</div>'+
								'<div class="col-md-6 col-sm-12">'+
									dados[4]+' €'+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-3 col-sm-12" style="margin-top: 30px;">'+
								'<div class="col-md-8 col-sm-12">'+
									'Tempo Mínimo:'+
								'</div>'+
								'<div class="col-md-4 col-sm-12">'+
									dados[5]+ ' M'+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-2 col-sm-12">'+
								'<div class="col-md-12 col-sm-12">'+
									'<img style="width: 7vw;" src="Content/images/book.png" />'+
								'</div>'+
							'</div>'+
							
							'<div class="col-md-1 col-sm-12" style="margin-top: 0px;" alig="center">'+
								'<div class="col-md-12 col-sm-12">'+
									'<button style="width: 70px;" onCLick="maisInfo('+c+')">+Info</button>'+
								'</div>'+
								'<div class="col-md-12 col-sm-12">'+
									'<button style="width: 70px;" onCLick="Aceitar('+c+')">Aceitar</button>'+
								'</div>'+
								'<div class="col-md-12 col-sm-12">'+
									'<button style="width: 70px;" onCLick="Recusar('+c+')">Recusar</button>'+
								'</div>'+
							'</div>'+
							
						'</div>';
						
						show.innerHTML+=aux;

			
       
		}
		document.getElementById("uSemResultados").hidden=true;
	}
	}, 300);
}


function addFav(c){
for(x=0;x<ads.length;x++){
	if(ads[x]==result[c]){
		favs.push([ads[x][0],ads[x][1],ads[x][2],ads[x][3],ads[x][4],ads[x][5],ads[x][6],ads[x][7],ads[x][8],ads[x][9],getCookie("username")])
	}
}
document.getElementById("addFav"+c).style.backgroundColor="yellow";
document.getElementById("addFav"+c).innerHTML="-Fav";
document.getElementById("addFav"+c).onclick=function() { removeFav(c) };
}


function removeFav(c){
	var aux =result[c]
	for(x=0;x<favs.length;x++){
		if(aux[0]==favs[x][0] && aux[1]==favs[x][1] && aux[2]==favs[x][2] && aux[3]==favs[x][3] && aux[4]==favs[x][4] && aux[5]==favs[x][5] && aux[6]==favs[x][6] && aux[7]==favs[x][7] && aux[8]==favs[x][8] ){
			favs.splice(x,1);
		}
	}
	document.getElementById("addFav"+c).style.backgroundColor="";
	document.getElementById("addFav"+c).innerHTML="+Fav";
	document.getElementById("addFav"+c).onclick=function() { addFav(c) };
}


function eliminarFav(c){
	var aux =meusFavoritos[c]
	for(x=0;x<favs.length;x++){
		if(aux[0]==favs[x][0] && aux[1]==favs[x][1] && aux[2]==favs[x][2] && aux[3]==favs[x][3] && aux[4]==favs[x][4] && aux[5]==favs[x][5] && aux[6]==favs[x][6] && aux[7]==favs[x][7] && aux[8]==favs[x][8] ){
			favs.splice(x,1);
		}
	}
}


function Aceitar(c){
	ads.push(adAsk[c]);
	adAsk.splice(c,1);
}

function Recusar(c){
	adAsk.splice(c,1);
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
