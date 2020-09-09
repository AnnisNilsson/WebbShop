/*because the controller is communicating with a database,
it requires the mssql library and access to
the config file*/
const sql = require('mssql');
//database provider reuses a global instance of mssql every time it's added as a req.
const config = require('../config');

classesController = () => {
    //adding controllers get-function
get = async (req, res) => {
    try {
        let query = req.params.Id > 0 ? `EXEC GetClass ${req.params.Id}` : 'EXEC GetClasses';
        //skapar en förfrågan som kollar om vi lagt med ett ID i förfrågan eller ej
        //Om ID är angett så "hämta actor med det ID:et" annars "hämta alla actors"
        await sql.connect(config);
        //för att vänta in anslutning till databasen i Azure
        const result = await sql.query(query);
        
        return res.json(result.recordset);
    }
    catch (err) {
    return res.status(404);
    }
   };

   return {get}
};
   
module.exports = classesController;