import React, {Component} from 'react';
import axios from 'axios';

class DetailedProduct extends Component {
    constructor(){
        super();
        this.state = {
            product: []
        }
    }

    componentDidMount(){
        axios.get(`/api/product/${this.props.match.params.id}`).then(res => {
            console.log(res.data)
            this.setState({
                product: res.data
            })
        })
    }

    render(){
        console.log(this.props.match.params.id);
        return (
            <div>
                {
                    this.state.product.map(product => {
                        return <div>
                            <img src={product.name} src={product.name} style={{
                                    maxHeight: 400,
                                    maxWidth: 400,
                                }}/>
                            <h1>{product.img}</h1>
                            <br />
                            ${product.price}
                        </div>

                    })
                }
            </div>
        )
    }
}

export default DetailedProduct;