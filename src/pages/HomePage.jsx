import { useContext } from 'react';
import { Card, Layout, ProductDetail } from '../components';
import { Context } from '../context';
import { GoToTop } from '../utils';

export const HomePage = () => {

    const context = useContext(Context);
    GoToTop();

    const renderView = () => {
        if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map((item) => (
                    <Card key={item.id} item={item} />
                ))
            )
        } else {
            return (
                <p>Nessun risultato trovato</p>
            )
        }
            
    }


    return (
        <Layout>
            <h1 className='mb-5 font-bold text-4xl'>CICALINO STORE</h1>
            
            <form className='w-1/2 mb-8'>
                <input
                    type='text'
                    placeholder='Cerca i prodotti...'
                    className='border-2 rounded-lg w-full p-3'
                    onChange={(e) => context.setSearchByTitle(e.target.value)}
                />
            </form>

            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                    renderView()
                }   
            </div>
            <ProductDetail />
        </Layout>
    )
};