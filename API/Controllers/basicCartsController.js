const sql = require('mssql');
const config = require('../config');

basicCartsController = () => {
    get = async (req, res) => {
        try{
            let query = req.params.Id > 0 ? `EXEC GetBasicCart ${req.params.Id}` : `EXEC GetBasicCart`;
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

module.exports = basicCartsController;