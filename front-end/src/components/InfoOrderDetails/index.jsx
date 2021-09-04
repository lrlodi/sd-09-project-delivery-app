import React from 'react';
import P from 'prop-types';
import style from './infoOrderDetails.module.scss';

const InfoOrderDetails = ({
  shouldSellerApear = true,
  shouldOrderStatusApear = true,
  dataTestIdOrderId,
  dataTestIdSeller,
  dataTestIdOrderDate,
  dataTestIdDeliveryStatus,
  dataTestIdDeliveryCheck,
  order,
  sellerName,
  deliveryStatus,
  date,
  orderStatus,
  deliveryCheck,
}) => (
  <div className={ style.infoOrderDetails }>
    <p className={ style.span }>
      PEDIDO
      <span data-testid={ dataTestIdOrderId }>{order}</span>
    </p>
    {shouldSellerApear
    && (
      <p>
        P. Vend:
        <span data-testid={ dataTestIdSeller }>{sellerName}</span>
      </p>
    )}
    <p data-testid={ dataTestIdOrderDate } className={ style.date }>{date}</p>
    <p
      data-testid={ dataTestIdDeliveryStatus }
      className={ style.status }
    >
      {deliveryStatus}
    </p>
    {shouldOrderStatusApear && <p className={ style.orderStatus }>{orderStatus}</p>}
    <p
      data-testid={ dataTestIdDeliveryCheck }
      className={ style.markAsDelivered }
    >
      {deliveryCheck}
    </p>
  </div>
);

export default InfoOrderDetails;

InfoOrderDetails.propTypes = {
  shouldSellerApear: P.bool,
  shouldOrderStatusApear: P.bool,
  dataTestIdOrderId: P.string.isRequired,
  dataTestIdSeller: P.string.isRequired,
  dataTestIdOrderDate: P.string.isRequired,
  dataTestIdDeliveryStatus: P.string.isRequired,
  dataTestIdDeliveryCheck: P.string.isRequired,
  order: P.string.isRequired,
  sellerName: P.string.isRequired,
  deliveryStatus: P.string.isRequired,
  date: P.string.isRequired,
  orderStatus: P.string.isRequired,
  deliveryCheck: P.string.isRequired,
};

InfoOrderDetails.defaultProps = {
  shouldSellerApear: false,
  shouldOrderStatusApear: false,
};
