export const ROUTES = [
    {
        route: '/',
        roles: [],
        icon: 'home',
        description: 'Home',
        showMenu: true,
        children: []
    },
    {
        icon: 'keyboard_arrow_down',
        description: 'FrontMons',
        showMenu: true,
        collapsed: true,
        children: [
            { route: '/detail-project/chapmon', icon: 'computer', description: 'Compra e Venda de ações', showMenu: true },
        ]
    },
    {
        route: '/teste',
        roles: [],
        icon: 'contacts',
        description: 'Contate-Me',
        showMenu: true,
        children: []
    },
];