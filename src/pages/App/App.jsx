import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../context';
import { HomePage, NotFound, MyOrders, DetailProduct, CartShoppingPage, OrderPage, LastOrderPage } from '../';
import { NavBar, Footer, CheckoutSideMenu } from '../../components';
import './App.css';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <HomePage /> },
        { path: '/pc', element: <HomePage /> },
        { path: '/casa', element: <HomePage /> },
        { path: '/abbigliamento', element: <HomePage /> },
        { path: '/salute', element: <HomePage /> },
        { path: '/alimenti', element: <HomePage /> },
        { path: '/cart-shopping', element: <CartShoppingPage /> },
        { path: '/my-orders/last', element: <LastOrderPage /> },
        { path: '/my-orders/:id', element: <OrderPage /> },
        { path: '/my-orders', element: <MyOrders /> },
        { path: '/*', element: <NotFound /> },
        { path: '/product/:id', element: <DetailProduct /> }
    ]);

    return routes;
}

export const App = () => {
    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <AppRoutes />
                <NavBar />
                <Footer />
                <CheckoutSideMenu />
            </BrowserRouter>
        </ShoppingCartProvider>
    )
};