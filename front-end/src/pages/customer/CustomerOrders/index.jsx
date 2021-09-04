import React, { useState, useEffect } from 'react';
// import P from 'prop-types';
import { Link } from 'react-router-dom';

import NavBar from '../../../components/Navbar';
import ProductStatus from '../../../components/ProductStatus';
import { saleById } from '../../../api/sales';
import formatDate from '../../../util/formatDate';
import style from './orders.module.scss';

const CustomerOrders = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sale, setSale] = useState([]);
  useEffect(() => {
    const localItem = JSON.parse(localStorage.getItem('user'));
    if (localItem) {
      const { token, id: userId } = localItem;
      saleById(userId, token).then((data) => {
        setSale(data);
        setIsLoading(false);
      });
    }
  }, []);

  console.log(sale);

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <NavBar />
      <div className={ style.productStatusContainer }>
        {sale.map(({ id, status, saleDate, totalPrice }) => {
          const newDate = formatDate(saleDate);
          const priceToString = totalPrice.toString().replace('.', ',');
          return (
            <Link
              key={ id }
              className={ style.productStatus }
              to={ `/customer/orders/${id}` }
            >
              <ProductStatus
                orderPrice={ priceToString }
                orderStatus={ status }
                orderDate={ newDate }
                orderNumber={ `000${id}` }
                shouldAddressApear={ false }
                dataTestIdOrderId={ `customer_orders__element-order-id-${id}` }
                dataTestIdOrderStatus={ `customer_orders__element-delivery-status-${id}` }
                dataTestIdOrderDate={ `customer_orders__element-order-date-${id}` }
                dataTestIdOrderPrice={ `customer_orders__element-card-price-${id}` }
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CustomerOrders;

// CustomerOrders.propTypes = {
//   children: P.node.isRequired,
// };