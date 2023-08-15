import PropTypes from 'prop-types';

export const OrdersCard = ({ totalPrice, totalProducts, date }) => {

    return (
        <div className="flex justify-between items-center mb-3 p-4 w-80 border-bottom">
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span>Data: {date}</span>
                    <span>Totale articoli: {totalProducts}</span>
                </p>
                <p>
                    Totale: <span className='text-lg font-medium'>{totalPrice}</span>
                </p>
            </div>
        </div>
    )
};

OrdersCard.propTypes = {
    totalPrice: PropTypes.number,
    totalProducts: PropTypes.number,
    date: PropTypes.string
}