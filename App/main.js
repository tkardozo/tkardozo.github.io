getTitles=[];
$.when(getJson("http://192.168.160.36/JSON/getTitles.aspx","")).done(function(a1){
    var arr = a1;
    getTitles=arr
});

getAuthors=[];
$.when(getJson("http://192.168.160.36/JSON/getAuthors.aspx",{numAuthors: 23})).done(function(a1){
    var arr = a1;
    getAuthors=arr;
	get1();
	get2();
});

function get1(){
getAuthorTitles=[];
	for (var k=0; k<getAuthors.length; k++){
		ident = getAuthors[k].ID;
		teste(ident);
	};
}

function checkLogin(user, pass){
	var users=[["Admin","Test"],["Admin2","Test2"]];
	var check=false;
	console.log("Aqui Estou");
	for (i = 0; i < users.length; i++) { 
	console.log(users[i][0]+" / "+users[i][1]);
    	if(users[i][0]==user && users[i][1]==pass){
			console.log("check");
			check=true;
		};
	}
	return check;
}

function get2(){
getAuthorSales=[];
	for (var k=0; k<getAuthors.length; k++){
		ident = getAuthors[k].ID;
		teste2(ident);
	};
}

function teste2(ident){
$.when(getJson("http://192.168.160.36/JSON/getAuthorSales.aspx",{ author_ID: ident })).done(function(a2){
			var arr1 = a2;
			getAuthorSales[ident]=arr1;
		});
};


function teste(ident){
$.when(getJson("http://192.168.160.36/JSON/getAuthorTitles.aspx",{ author_ID: ident })).done(function(a2){
			var arr1 = a2;
			getAuthorTitles[ident]=arr1;
		});
};


function getJson(myurl, mydata) {
    return $.ajax({
				type: "GET",
				url: myurl,
				async: false,
				data: mydata,
				dataType: "jsonp",
				error: function (xhr, status, err) {}
			});
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

    app.title = 'Book-Shelf';

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
