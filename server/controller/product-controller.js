
const Product=require('../model/productSchema.js');
 const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    }catch (error) {

    }
}

const getProductById = async (request, response) => {
    try {
        console.log('Hie')
        const products = await Product.findOne({ 'id': request.params.id });
        response.json(products);
    }catch (error) {

    }
}

module.exports={getProducts,getProductById};