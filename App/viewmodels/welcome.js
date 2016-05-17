//Função para alterar e mostrar modal, com as informações de um certo livro
function popup_livros(nome,genero,preco,notas){
	document.getElementById('nomea').innerHTML=nome;
	document.getElementById('genero').innerHTML=genero;
	document.getElementById('preco').innerHTML=preco;
	document.getElementById('notas').innerHTML=notas;
	$('#myModal_livro').modal('show');
}

//Função para alterar e mostrar modal, com o mapa da localização de um certo autor			
function popup_mapa(morada){
	divmapa=document.getElementById('mapa')
	url='https://www.google.com/maps/embed/v1/place?key=AIzaSyDM0ZNlzZS6wulKFOv1s6PARvuXmGI-paM&q='+morada.replace(' ','+')
	divmapa.setAttribute('src', url)
	$('#myModal_mapa').modal('show');
}

//Função para alterar e mostrar modal, com as informações de um certo autor			
function popup_autores(nome,contacto,morada,cidade,foto){
	document.getElementById('nome').innerHTML=nome;
	document.getElementById('contacto').innerHTML=contacto;
	document.getElementById('morada').innerHTML=morada;
	var on='popup_mapa("'+morada+'")'
	btn=document.getElementById('btn_morada')
	btn.setAttribute('onClick', on)
	document.getElementById('cidade').innerHTML=cidade;
	document.getElementById('foto').src=foto;
	$('#myModal_autor').modal('show');
}

define(function() {
	  
	var i;
	var done=[]
	var info=[]
	for (i = 0; i < getTitles.length; i++) {
		var rep=false;
		for (var k=0; k<getTitles.length; k++){
			if(done[k]==getTitles[i].title){
					rep=true;
			};
		};
		if(rep==false){
			done.push(getTitles[i].title);
			info.push('"'+getTitles[i].title.replace("&#39;","'")+'","'+getTitles[i].type.replace("popular_comp","Computer Science").replace("business","Business").replace("trad_cook","Traditional Cooking").replace("psychology","Psychology").replace("mod_cook","Modern Cooking")+'","'+getTitles[i].price.substr(0, 5)+'€","'+getTitles[i].notes.replace("&#39;","'").replace("&#38;","&").replace("&#39;","'")+'"');
		}							
	}
	var ex1=Math.floor((Math.random() * done.length));
	var ex2=0;
	do {
		ex2=Math.floor((Math.random() * done.length));
	}while (ex1==ex2);
	var ex3=0;
	do {
		ex3=Math.floor((Math.random() * done.length));
	}while (ex2==ex3||ex1==ex3);
	
	

	
	
	s1=[done[ex1].replace("&#39;","'"),'popup_livros('+info[ex1]+')'];
	s2=[done[ex2].replace("&#39;","'"),'popup_livros('+info[ex2]+')'];
	s3=[done[ex3].replace("&#39;","'"),'popup_livros('+info[ex3]+')'];


	
	var info=[]
	var done=[]
	var done_id=[]
	for (i = 0; i < getAuthors.length; i++) {
		var rep=false;
		for (var k=0; k<getAuthors.length; k++){
			if(done[k]==getAuthors[i].name){
					rep=true;
			};
		};
		if(rep==false){
			done.push(getAuthors[i].name);
			done_id.push(getAuthors[i].ID);
			info.push('"'+getAuthors[i].name.replace("&#39;","'")+'","'+getAuthors[i].phone+'","'+getAuthors[i].address+'","'+getAuthors[i].city+' / '+getAuthors[i].zip+'","http://192.168.160.36/images/'+getAuthors[i].ID+'.png"');
		}							
	}
	
	var ex1=Math.floor((Math.random() * done.length));
	var ex2=0;
	do {
		ex2=Math.floor((Math.random() * done.length));
	}while (ex1==ex2);
	var ex3=0;
	do {
		ex3=Math.floor((Math.random() * done.length));
	}while (ex2==ex3||ex1==ex3);
	
	a1=[done[ex1].replace("&#39;","'"),'popup_autores('+info[ex1]+')'];
	a2=[done[ex2].replace("&#39;","'"),'popup_autores('+info[ex2]+')'];
	a3=[done[ex3].replace("&#39;","'"),'popup_autores('+info[ex3]+')'];
	id_a1="http://192.168.160.36/images/"+done_id[ex1]+".png"
	id_a2="http://192.168.160.36/images/"+done_id[ex2]+".png"
	id_a3="http://192.168.160.36/images/"+done_id[ex3]+".png"
	
	
	return {
		img1: id_a1,
		img2: id_a2,
		img3: id_a3,
		sug1: s1,
		sug2: s2,
		sug3: s3,
		aut1: a1,
		aut2: a2,
		aut3: a3
	};
});