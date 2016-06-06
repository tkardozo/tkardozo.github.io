define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
			switch(checkLogin()){
			
				case "Admin":
					router.map([
							{ route: '', title:'Home', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-home"></i> Home', logi:''},
							{ route: 'check', title:'Rever Pedidos', moduleId: 'viewmodels/check', nav: true, menu : '<i class="fa fa-group"></i> Rever Pedidos', logi:'admin()'},
							{ route: '', title:'Sair', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-book"></i> Logout', logi:'logout()'},
							{ route: 'results', title:'Pesquisa', moduleId: 'viewmodels/results', nav: false, menu : '', logi:''}
					]).buildNavigationModel();
					break;
				
				case "User":
					router.map([
							{ route: '', title:'Home', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-home"></i> Home', logi:''},
							{ route: 'changeAccount', title:'Alterar Dados', moduleId: 'viewmodels/changeAccount', nav: true, menu : '<i class="fa fa-group"></i> Alterar Dados', logi:'carregarDados()'},
							{ route: 'imoveisUser', title:'Os Imoveis', moduleId: 'viewmodels/imoveisUser', nav: true, menu : '<i class="fa fa-group"></i> Os Meus Imóveis', logi:'imoveisUtil()'},
							{ route: 'favoritos', title:'Favoritos', moduleId: 'viewmodels/favoritos', nav: true, menu : '<i class="fa fa-group"></i> Favoritos', logi:'favoritos()'},
							{ route: '', title:'Sair', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-book"></i> Logout', logi:'logout()'},
							{ route: 'results', title:'Pesquisa', moduleId: 'viewmodels/results', nav: false, menu : '', logi:''}
					]).buildNavigationModel();
					break;
				
				case "Owner":
					router.map([
							{ route: '', title:'Home', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-home"></i> Home', logi:''},
							{ route: 'changeAccount', title:'Alterar Dados', moduleId: 'viewmodels/changeAccount', nav: true, menu : '<i class="fa fa-group"></i> Alterar Dados', logi:'carregarDados()'},
							{ route: 'imoveis', title:'Os Imoveis', moduleId: 'viewmodels/imoveis', nav: true, menu : '<i class="fa fa-group"></i> Os Meus Imóveis', logi:'imoveisSenh()'},
							{ route: '', title:'Sair', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-book"></i> Logout', logi:'logout()'},
							{ route: 'results', title:'Pesquisa', moduleId: 'viewmodels/results', nav: false, menu : '', logi:''},
							{ route: 'novoImovel', title:'Novo Imovel', moduleId: 'viewmodels/novoImovel', nav: false, menu : '', logi:''}
					]).buildNavigationModel();
					break;
				
				default:
					router.map([
							{ route: '', title:'Home', moduleId: 'viewmodels/welcome', nav: true, menu : '<i class="fa fa-home"></i> Home', logi:'' },
							{ route: 'login', title:'Login', moduleId: 'viewmodels/login', nav: true, menu : '<i class="fa fa-group"></i> Login', logi:''},
							{ route: 'newAccount', title:'Criar Conta', moduleId: 'viewmodels/newAccount', nav: true, menu : '<i class="fa fa-book"></i> Criar Conta', logi:''},
							{ route: 'results', title:'Pesquisa', moduleId: 'viewmodels/results', nav: false, menu : '', logi:''}
					]).buildNavigationModel();
					break;
			}
			
            return router.activate();
        }
    };
});