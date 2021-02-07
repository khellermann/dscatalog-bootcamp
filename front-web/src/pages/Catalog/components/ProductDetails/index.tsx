import React from 'react';
import { ReactComponent as ArrowImg } from '../../../../core/assets/images/arrow.svg';
import { Link, useParams } from 'react-router-dom';
import './styles.scss';

type ParamsType = {
    productId: string;
}

const ProductDetails = () => {
    const { productId } = useParams<ParamsType>();
    console.log(productId);
    return (
        <div className="product-details-container">
            <div className="card-base border-radius-20 product-details">
                <Link to="/products" className="product-details-goback">
                    <ArrowImg className="icon-goback" />
                    <h1 className="text-goback">voltar</h1>
                </Link>
            </div>

        </div>
    );
};

export default ProductDetails;