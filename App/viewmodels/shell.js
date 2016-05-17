define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
			document.cookie = "user=Admin; password=teste;";
			console.log(checkLogin("Admin","Test"));
			if(checkLogin("Admin","Test")){
				router.map([
						
						{ route: '', title:'Home', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-home"></i> Home' },
						{ route: 'autores', title:'Autores Registados', moduleId: 'viewmodels/autores', nav: true, menu : '<i class="fa fa-group"></i> Autores' },
						{ route: 'livros', title:'Livros Registados', moduleId: 'viewmodels/livros', nav: true, menu : '<i class="fa fa-book"></i> Livros' }
					
				]).buildNavigationModel();
			}else{
				router.map([
						
						{ route: '', title:'Home', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-home"></i> Home' },
						{ route: 'autores', title:'Autores Registados', moduleId: 'viewmodels/autores', nav: true, menu : '<i class="fa fa-group"></i> Autores' },
						{ route: 'livros', title:'Livros Registados', moduleId: 'viewmodels/livros', nav: true, menu : '<i class="fa fa-book"></i> Livros' },
						{ route: 'autores', title:'Autores Registados', moduleId: 'viewmodels/autores', nav: true, menu : '<i class="fa fa-group"></i> Autores' },
						{ route: 'livros', title:'Livros Registados', moduleId: 'viewmodels/livros', nav: true, menu : '<i class="fa fa-book"></i> Livros' }
					
				]).buildNavigationModel();
			}
            return router.activate();
        }
    };
});