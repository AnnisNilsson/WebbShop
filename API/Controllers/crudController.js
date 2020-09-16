let __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const db = require('../db');
const crudController = () => {
    const crud = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield db.query(req, res);
        }
        catch (err) {
            res.status(500);
            return res.send('Server Error. Try again later.');
        }
    });
    console.log({crud}, 'crudcontroller');
    return { crud };
};
module.exports = crudController;