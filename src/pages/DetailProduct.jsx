import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context';
import { deliveryDate, today } from '../utils';
import { Layout } from '../components';
import { ChevronLeftIcon, StarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { GoToTop } from '../utils';

export const DetailProduct = () => {

    const context = useContext(Context);
    GoToTop();

    const navigate = useNavigate();
    const onNavigateBack = () => {
        navigate(-1);
    }

    
    const [imagen, setImagen] = useState(context.showProductDetail.images[0]);
    const cambiarImagen =(element) => {
        setImagen(element)
    }
    useEffect(() => {
    }, [setImagen]);

    
    const addProductsToCart = (productData) => {
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCheckoutSideMenu();
    }
    
    return (
        <>
            <Layout>
                <div className='w-full max-w-screen-lg'>
                    <button className='flex flex-grow items-center font-light' onClick={onNavigateBack}>
                        <ChevronLeftIcon className='h-4 w-4 text-black'></ChevronLeftIcon> Indietro
                    </button>

                    <div className='flex flex-column w-full mb-10 mt-10'>
                        <figure className='w-4/12'>
                            {
                                imagen !== undefined?
                                <img className='w-full h-60 object-contain' src={imagen} alt={`Image ${context.showProductDetail.title}`} />
                                    :
                                <img className='w-full h-60 object-contain' src={context.showProductDetail.images[0]} alt={`Image ${context.showProductDetail.title}`} />    
                            }
                        </figure>
                    
                        <div className='w-3/6 px-8'>
                            <h1 className='text-black mb-5 font-bold text-4xl'>{context.showProductDetail.title}</h1>
                            <div className='flex flex-row mb-5'>
                                <p className={context.showProductDetail.rate >= 1 ? 'good' : 'bad'}><StarIcon /></p>
                                <p className={context.showProductDetail.rate >= 2 ? 'good' : 'bad'}><StarIcon /></p>
                                <p className={context.showProductDetail.rate >= 3 ? 'good' : 'bad'}><StarIcon /></p>
                                <p className={context.showProductDetail.rate >= 4 ? 'good' : 'bad'}><StarIcon /></p>
                                <p className={context.showProductDetail.rate >= 5 ? 'good' : 'bad'}><StarIcon /></p>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <div>
                                    <p>Brand: <span className='font-semibold'>{context.showProductDetail.brand}</span></p>
                                    <p>prodotti disponibili in sede: <span className='font-semibold'>{context.showProductDetail.quantity}</span></p>
                                </div>
                                <span className='font-light'>{context.showProductDetail.category}</span>
                            </div>
                            <p className='font-bold mt-4 flex flex-row justify-end'>Prezzo: <span className='text-red-800 text-2xl ml-4'>€{context.showProductDetail.price}</span></p>

                            <p className='font-bold mt-4'>Su questo articolo</p>
                            <p>{context.showProductDetail.description}</p>
                        </div>

                        <div className='w-1/6'>
                            <span className='text-red-800 text-2xl'>€{context.showProductDetail.price}</span>
                            <p>Spedizione Gratuita</p>
                            <p className='text-xs mb-4'>Arrivo <span className='font-bold'>{deliveryDate(today, 'dd/mm/yy', 5)} a {deliveryDate(today, 'dd/mm/yy', 10)}</span></p>
                            
                            <button
                                type='button'
                                className='flex flex-row items-center bg-blue-200 font-bold border-3 py-1 px-2 rounded-lg'
                                onClick={() => addProductsToCart(context.showProductDetail)}
                            >
                                <ShoppingCartIcon className='h-5 w-5 text-black mr-1'></ShoppingCartIcon> Aggiungi
                            </button>
                            <button type='button'></button>
                        </div>
                    </div>
                
                </div>
            </Layout>
        </>
    )
}; 