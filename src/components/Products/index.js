import React from 'react';
import {connect} from 'react-redux';
import './products.scss'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function Products (props){
    return (
        <section>
            <ul className='pro'>
                {
                    props.products.products.map(product =>{
                        return (
        <Card style={{ width: '18rem' }}className = {`cards ${product.name}`} key = {product.name}>
            <Card.Img className='imagepro' variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                {product.price}$
                </Card.Text>
                <section className="btnn">
                <Button variant="light">ADD TO CART</Button>
                <Button variant="light">VIEW DETAILS</Button>
                </section>
              </Card.Body>
         </Card>
                        )
                    })
                }
            </ul>
        </section>
    )
}
const mapStateToProps = (state) =>{
    return {products : state.Products}
} 
export default connect(mapStateToProps  )(Products);