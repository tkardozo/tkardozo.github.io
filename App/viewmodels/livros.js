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

//Função que permite mostrar as informações de um livro ocultando as restantes		
function Mudarestado1(el) {
	var display = document.getElementById(el).style.display;
	if(display == "none"){
		for(var p=0; p<ids2.length;p++){
			document.getElementById(ids2[p]).style.display = 'none';
		};
		document.getElementById(el).style.display = 'block';
	}else{
		document.getElementById(el).style.display = 'none';
	}
}

function proc_cat(){
	var e = document.getElementById("esc");
	var cat = e.options[e.selectedIndex].value;
	list_cat=[]
	list_t=[]
	for(var c=0; c<getTitles.length; c++){
		var repetido=false
		for (var t=0; t<list_t.length; t++){
			if(getTitles[c].title==list_t[t]){
				repetido=true;
			};
		};
		if (getTitles[c].type==cat && repetido==false){
			list_t.push(getTitles[c].title)
			list_cat.push({title: getTitles[c].title.replace("&#39;","'").replace("&#38;","&"), authors: getTitles[c].authors, price: getTitles[c].price, notes: getTitles[c].notes.replace("&#39;","'").replace("&#38;","&").replace("&#39;","'")})
		}
	}
	console.log(list_cat)
	
	document.getElementById("modal_proc").innerHTML=''

		for(var i=0; i<list_cat.length;i++){			
			var div1 = document.createElement("div");
			div1.innerHTML =  '<b>Título: </b> <br>'+list_cat[i].title
			div1.setAttribute('class', 'col-md-4')
			div1.setAttribute('align', 'center')
			div1.setAttribute('style', ' margin-bottom: 3px; margin-top: 6px;')
			document.getElementById("modal_proc").appendChild(div1);
			var div1 = document.createElement("div");
			div1.innerHTML = '<b>Preço: </b> <br>'+list_cat[i].price.substr(0,5)+' €'
			div1.setAttribute('class', 'col-md-2')
			div1.setAttribute('align', 'center')
			div1.setAttribute('style', ' margin-bottom: 3px; margin-top: 6px;')			
			document.getElementById("modal_proc").appendChild(div1);
			var div1 = document.createElement("div");
			div1.innerHTML = '<b>Notas: </b> <br>'+list_cat[i].notes
			div1.setAttribute('class', 'col-md-6')
			div1.setAttribute('align', 'center')
			div1.setAttribute('style', ' margin-bottom: 3px; margin-top: 6px;')
			document.getElementById("modal_proc").appendChild(div1);
			var div1 = document.createElement("div");
			div1.innerHTML = '<hr>'
			div1.setAttribute('class', 'col-md-12')
			div1.setAttribute('align', 'center')
			div1.setAttribute('style', ' margin-bottom: 3px; margin-top: 6px;')
			document.getElementById("modal_proc").appendChild(div1);
		}

	$('#myModal_proc').modal('show');
}


define(function() {
		
	books=[];
	ids2=[];
	for(var j=0; j<getTitles.length; j++){
		var rep=false
		for(var k=0; k<books.length; k++){
			if(getTitles[j]['title'].replace("&#39;","'").replace("&#38;","&")==books[k][0]){
				rep=true
			};
		};
		if (!rep){
			var temp=[];
			temp.push(getTitles[j]['title'].replace("&#39;","'").replace("&#38;","&"));
			var genero=getTitles[j]['type']
			genero=genero.replace("popular_comp","Computer Science").replace("business","Business").replace("trad_cook","Traditional Cooking").replace("psychology","Psychology").replace("mod_cook","Modern Cooking")
			temp.push(genero);
			temp.push(getTitles[j]['price'].substr(0, 5)+' €');
			temp.push(getTitles[j]['ytd_sales']);
			temp.push((getTitles[j]['notes']).replace("&#39;","'").replace("&#38;","&").replace("&#39;","'"));
			temp.push(getTitles[j]['pubdate']);
			
			
			
			var fim=[];
			var autores1=getTitles[j]['authors'];
			for(var l=0; l<autores1.length; l++){
				for(var p=0; p<getAuthors.length; p++){
					if(getAuthors[p]['name'].replace("&#39;","'")==autores1[l].replace("&#39;","'")){
						foto="http://192.168.160.36/images/"+getAuthors[p].ID+".png";
						contacto=getAuthors[p].phone;
						morada=getAuthors[p].address;
						cidade=getAuthors[p].city+' / '+getAuthors[p].zip;
					};
				};
				nome=autores1[l].replace("&#39;","'").replace("&#38;","&");
				nome2=autores1[l];
				infox='popup_autores("'+nome2+'", "'+contacto+'", "'+morada+'", "'+cidade+'", "'+foto+'")'
				fim.push([nome,infox]);
			};
			
			
			
			
			temp.push(fim);
			temp.push('Mudarestado1("'+(getTitles[j]['title']).split(" ")[0]+'")');
			temp.push((getTitles[j]['title']).split(" ")[0]);
			temp.push('http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords='+getTitles[j]['title']);
			books.push(temp);
			ids2.push((getTitles[j]['title']).split(" ")[0]);
		};
	};
	
	
	
	
    return {
		activate: function () { },
		compositionComplete: function () {
			var arrSelect = document.getElementById("esc");
			var done_esc=[];
			for (var i = 0; i < getTitles.length; i++) {
				repetido=false
					for (var z=0; z<done_esc.length; z++){
						if(done_esc[z]==getTitles[i]['type']){
							repetido=true
						}
					}
				if(repetido==false){
					var option = document.createElement("option");
					option.text = getTitles[i]['type'].replace("popular_comp","Computer Science").replace("business","Business").replace("trad_cook","Traditional Cooking").replace("psychology","Psychology").replace("mod_cook","Modern Cooking");
					option.value = getTitles[i]['type'];
					arrSelect.add(option);
					done_esc.push(getTitles[i]['type']);
				}
			}
		},
		book: books
    }
});