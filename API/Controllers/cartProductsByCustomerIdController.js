const sql = require('mssql');
const config = require('../config');

cartProductsByCustomerIdController = () => {
    get = async (req, res) => {
        try{
            let query = req.params.Id > 0 ? `EXEC GetCartProductsByCustomerId ${req.params.Id}` : `EXEC GetCartProductsByCustomerId`;
            await sql.connect(config);
            const result = await sql.query(query);
            return res.json(result.recordset);
        }
        catch(err) {
            return res.status(404);
        }
    };
    return {get}
};

module.exports = cartProductsByCustomerIdController;