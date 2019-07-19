module.exports = {
    getAllProducts: (req, res) => {
        const db = req.app.get('db');      
        db.get_all_products().then(products => {
            res.status(200).send(products)
        })
    },
    getOneProducts: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.get_one_product([id]).then(product => {
            res.status(200).send(product)
        })
    },
    addToCart: (req, res) => {
        const { img, name, price, id } = req.body;
        const newItem = {
            id,
            name,
            img,
            price
        }
        if(req.session.cart){
            req.session.cart.push(newItem)
            res.status(200).send(req.session.cart)
        } else {
            req.session.cart = [];
            req.session.cart.push(newItem)
            res.status(200).send(req.session.cart)
        }
    },
    getCart: (req, res) => {
        if(req.session.cart){
            res.status(200).send(req.session.cart)
        } else{
            res.status(200).send([])
        }
    }
}