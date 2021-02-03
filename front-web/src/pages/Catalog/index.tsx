import React from 'react';
import ProductCard from '../../core/components/ProductCard';
import './styles.scss';


const Catalog = () =>(
    <div className="catalog-container">
        <h1 className="catalog-title">
            Catalog
        </h1>
        <div className="catalog-products">
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             <ProductCard />
             

        </div>
    </div>
);

export default Catalog;