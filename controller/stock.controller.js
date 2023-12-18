const stockModel = require('../models/stock.model');
const create = async (req,res,next) => {
    try {
        console.log(req.body);
        const savedStock = await stockModel.create(req.body);
        res.stautus(201).json({
            message:'stock has been created',
            stock: savedStock
        }) 

    }
    catch (error) {
        res.staus(500).send("Failed to create stock");

}
}
modules.exports = {create,list} 