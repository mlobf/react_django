import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
//import products from "../products";
import axios from 'axios';
import Product from "../components/Product";
// This is a simple test 



function HomeScreen() {
    const [products, setProducts] = useState([]);

    // Using axios and async. To update the state.
    useEffect(() => {
        async function fetchProducts() {
            //const { data } = await axios.get('http://127.0.0.1:8000/api/products/');
            const { data } = await axios.get('/api/products/');
            setProducts(data);
        }
        fetchProducts();
    }, []);


    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={6} md={5} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))

                }
            </Row>
        </div>
    );
}

export default HomeScreen;