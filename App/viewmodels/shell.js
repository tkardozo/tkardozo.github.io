define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
			switch(checkLogin()){
			
				case "Admin":
					router.map([
							{ route: '', title:'Home', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-home"></i> Home', logi:''},
							{ route: '', title:'Rever Pedidos', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-group"></i> Rever Pedidos', logi:''},
							{ route: '', title:'Alterar Dados', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-group"></i> Alterar Dados', logi:''},
							{ route: '', title:'Sair', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-book"></i> Logout', logi:'logout()'}
					]).buildNavigationModel();
					break;
				
				case "User":
					router.map([
							{ route: '', title:'Home', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-home"></i> Home', logi:''},
							{ route: '', title:'Alterar Dados', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-group"></i> Alterar Dados', logi:''},
							{ route: '', title:'Alterar Dados', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-group"></i> Os Meus Imóveis', logi:''},
							{ route: '', title:'Alterar Dados', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-group"></i> Favoritos', logi:''},
							{ route: '', title:'Sair', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-book"></i> Logout', logi:'logout()'}
					]).buildNavigationModel();
					break;
				
				case "Owner":
					router.map([
							{ route: '', title:'Home', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-home"></i> Home', logi:''},
							{ route: '', title:'Alterar Dados', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-group"></i> Alterar Dados', logi:''},
							{ route: '', title:'Alterar Dados', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-group"></i> Os Meus Imóveis', logi:''},
							{ route: '', title:'Sair', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-book"></i> Logout', logi:'logout()'}
					]).buildNavigationModel();
					break;
				
				default:
					router.map([
							{ route: '', title:'Home', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-home"></i> Home', logi:'' },
							{ route: 'login', title:'Login', moduleId: 'viewmodels/login', nav: true, menu : '<i class="fa fa-group"></i> Login', logi:''},
							{ route: 'newAccount', title:'Criar Conta', moduleId: 'viewmodels/newAccount', nav: true, menu : '<i class="fa fa-book"></i> Criar Conta', logi:''}
					]).buildNavigationModel();
					break;
			}
			
            return router.activate();
        }
    };
});