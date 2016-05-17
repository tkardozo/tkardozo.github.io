//Função que permite mostrar as informações(Bibliográficas/Pessoais) de um autor ocultando as restantes
function Mudarestado(el) {
	var display = document.getElementById(el).style.display;
	if(display == "none"){
		for(var p=0; p<ids1.length;p++){
			document.getElementById(ids1[p]).style.display = 'none';
		};
		document.getElementById(el).style.display = 'block';
	}else{
		document.getElementById(el).style.display = 'none';
	}
}

//Função para alterar e mostrar modal, com as informações de um certo livro
function popup_livros(nome,genero,preco,notas){
	document.getElementById('nomea').innerHTML=nome;
	document.getElementById('genero').innerHTML=genero;
	document.getElementById('preco').innerHTML=preco;
	document.getElementById('notas').innerHTML=notas;
	$('#myModal_livro').modal('show');
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
		
//Função para alterar e mostrar modal, com o mapa da localização de um certo autor			
function popup_mapa(morada){
	divmapa=document.getElementById('mapa')
	url='https://www.google.com/maps/embed/v1/place?key=AIzaSyDM0ZNlzZS6wulKFOv1s6PARvuXmGI-paM&q='+morada.replace(' ','+')
	divmapa.setAttribute('src', url)
	$('#myModal_mapa').modal('show');
}
		
//Função de pesquisa por Autor 	
function procura(){
	var p=document.getElementById('pr').value
	if(p.length<3){
		alert("São necessários pelo menos 3 caracteres!");
		return ;
	};
	
	$.when(getJson("http://192.168.160.36/JSON/searchAuthors.aspx?q="+p,{})).done(function(a1){
		var result = a1;
		document.getElementById("modal_proc").innerHTML='<h2 id="nores" style="display: block;">Não há resultados!</h2>'
		for(var i=0; i<result.length;i++){
			document.getElementById("nores").style.display="none"
			var btn = document.createElement("button");
			btn.innerHTML = result[i]['name']
			btn.setAttribute('class', 'btn')
			btn.setAttribute('style', 'margin-right: 5px; margin-bottom: 5px; display: block;')
			btn.setAttribute('onClick', 'fun_proc("'+result[i]['name']+'","'+result[i]['phone']+'","'+result[i]['address']+'","'+result[i]['city']+' / '+result[i]['zip']+'","'+result[i]['ID']+'")')
			document.getElementById("modal_proc").appendChild(btn);
		}
		$('#myModal_proc').modal('show');
	});
	
};

//Função para chamar modal após procura por Autor 
function fun_proc(nome,contacto,morada,cidade,id){
	foto="http://192.168.160.36/images/"+id+".png";
	popup_autores(nome,contacto,morada,cidade,foto);
}



define(function() {
		
	nomes=[];
	ids1=[];

	for(var j=0; j<getAuthors.length; j++){
		var trabs=[];
		var ln=('Mudarestado("'+(getAuthors[j].name).split(" ")[0]+'")');
		var ln1=('Mudarestado("'+(getAuthors[j].name).split(" ")[0]+'1")');
		var la=((getAuthors[j].name).split(" ")[0]);
		var la1=la+"1"
		var im="http://192.168.160.36/images/"+getAuthors[j].ID+".png";
		var cont=getAuthors[j].phone
		var adr=getAuthors[j].address 
		var city=getAuthors[j].city+ " / " + getAuthors[j].zip

		trabs=[];
		var ide=getAuthors[j].ID
		for(var x=0; x<getAuthorTitles[ide].length; x++){
			var fim=[];
			genero=getAuthorTitles[ide][x]['type'];
			genero=genero.replace("popular_comp","Computer Science").replace("business","Business").replace("trad_cook","Traditional Cooking").replace("psychology","Psychology").replace("mod_cook","Modern Cooking")
			preco=getAuthorTitles[ide][x]['price'].substr(0, 5);
			notas_edicao=getAuthorTitles[ide][x]['notes'];
			nome=getAuthorTitles[ide][x].title.replace("&#39;","'");
			infox='popup_livros("'+nome+'", "'+genero+'", "'+preco+' €", "'+notas_edicao+'")'
			fim.push(nome,infox);
			trabs.push(fim);
		};
		if (trabs.length==0){trabs.push(["- Sem livros publicados! -",""])}
		
		var m=0;
		trabmais="- Sem vendas associadas! -"
		vendas={};

		for(var x=0; x<getAuthorSales[ide].length; x++){
			bool=false
			for(var p=0; p<getAuthorSales[ide][x]['sales'].length; p++){
				if(bool==false){
					vendas[ (getAuthorSales[ide][x].title) ]=getAuthorSales[ide][x]['sales'][p]['quantity'];
					bool=true;
				}else{
					vendas[ (getAuthorSales[ide][x].title) ]+=getAuthorSales[ide][x]['sales'][p]['quantity'];
				};
			};
			
		};
		
		for(var x in vendas){
			if(vendas[x]>m){
				m=vendas[x];
				trabmais=x.replace("&#39;","'");
			};
		};
		
		mapa='popup_mapa("https://www.google.com/maps/embed/v1/place?key=AIzaSyDM0ZNlzZS6wulKFOv1s6PARvuXmGI-paM&q='+adr.replace(' ','+')+'")'
		console.log(mapa);
		nomes.push([getAuthors[j].name,ln,ln1,la,la1,im,cont,adr,city,trabs,trabmais,mapa]);
		ids1.push(la,la1);
	}


    return {
		nome: nomes
    }
});