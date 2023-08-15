import React, { useContext } from 'react';
 import { NavLink } from 'react-router-dom';
 import { Context } from '../context';
 import { ShoppingCartIcon } from '@heroicons/react/24/solid';
    
    export const NavBar = () => {
        const context = useContext(Context);
    
        return (
            <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light fondo'>
                <ul className='flex items-center gap-3 justify-center'>
                    <li>
                        <NavLink
                            to='/'
                            onClick={() => context.setSearchByCategory()}
                            activeClassName='underline underline-offset-4'
                        >
                            All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/pc'
                            onClick={() => context.setSearchByCategory('pc')}
                            activeClassName='underline underline-offset-4'
                        >
                            Pc
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/abbigliamento'
                            onClick={() => context.setSearchByCategory('abbigliamento')}
                            activeClassName='underline underline-offset-4'
                        >
                            Abbigliamento
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/salute'
                            onClick={() => context.setSearchByCategory('salute')}
                            activeClassName='underline underline-offset-4'
                        >
                            Salute
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/alimenti'
                            onClick={() => context.setSearchByCategory('alimenti')}
                            activeClassName='underline underline-offset-4'
                        >
                            Alimenti
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/casa'
                            onClick={() => context.setSearchByCategory('casa')}
                            activeClassName='underline underline-offset-4'
                        >
                            Casa
                        </NavLink>
                    </li>
                </ul>
                
                <div className='text-lg font-semibold'>CICALINO STORE</div>
                
                <ul className='flex items-center gap-3'>
                    <li className='text-black/60'>
                        Digitazon@.com
                    </li>
                    <li>
                        <NavLink
                            to='/my-orders'
                            activeClassName='underline underline-offset-4'
                        >
                            I miei ordini
                        </NavLink>
                    </li>
                    <li className='flex'>
                        <NavLink
                            to='/cart-shopping'
                            activeClassName='underline underline-offset-4'
                        >
                            <ShoppingCartIcon className='h-5 w-5 text-black'></ShoppingCartIcon>
                        </NavLink>
                        {
                            context.productsCount === 0 ?
                                <div className='flex justify-center items-center text-xs font-semibold'>{context.productsCount}</div>
                                :
                                <div className='flex justify-center items-center bg-green-100 w-5 h-5 rounded-full text-xs font-semibold'>{context.productsCount}</div>
                        }
                    </li>
                </ul>
            </nav>
        );
    };
    