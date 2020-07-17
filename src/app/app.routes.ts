export const appRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: './pages/register/register.module#RegisterModule'
    },
    {
        path: 'logout',
        loadChildren: './components/topbar/topbar.module#TopbarModule'
    },
    {
        path: 'accueil',
        loadChildren: './pages/accueil/accueil.module#AccueilModule'
    },
    {
        path: 'category',
        loadChildren: './pages/category/category.module#CategoryModule'
    },
    {
        path: 'product',
        loadChildren: './pages/product/product.module#ProductModule'
    },
    {
        path: 'cart',
        loadChildren: './pages/cart/cart-page.module#CartPageModule'
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' },
];