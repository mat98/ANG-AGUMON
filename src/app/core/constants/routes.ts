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
        route: '/working-exp',
        roles: [],
        icon: 'person',
        description: 'Experiência Profissional',
        showMenu: true,
        children: []
    },
    {
        route: '/skills',
        roles: [],
        icon: 'bolt',
        description: 'Habilidades',
        showMenu: true,
        children: []
    },
    {
        route: '/certificates',
        roles: [],
        icon: 'badge',
        description: 'Certificados',
        showMenu: true,
        children: []
    },
    {
        route: '/contact-me',
        roles: [],
        icon: 'contacts',
        description: 'Contate-Me',
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
];