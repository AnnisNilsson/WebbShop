"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const sql = require('mssql');
const cfg = require('./config');
const getParameters = (req) => {
    /* Id Parameter */
    req.sql.hasId = req.route.path.endsWith('/:Id');
    req.sql.params = req.sql.hasId ? `@Id=${req.params.Id}, ` : '';
    /* Query Parameters */
    Object.getOwnPropertyNames(req.query).forEach(param => {
        if (!isNaN(req.query[param]))
            req.sql.params += `@${param}=${req.query[param]}, `;
        else if (typeof req.query[param] === 'boolean')
            req.sql.params += `@${param}=${req.query[param] ? 1 : 0}, `;
        else if (typeof req.query[param] === 'string')
            req.sql.params += `@${param}='${req.query[param]}', `;
    });
    /* Params Parameters */
    Object.getOwnPropertyNames(req.params).forEach(param => {
        if (param != 'Id') {
            if (!isNaN(req.params[param]))
                req.sql.params += `@${param}=${req.params[param]}, `;
            else if (typeof req.params[param] === 'boolean')
                req.sql.params += `@${param}=${req.params[param] ? 1 : 0}, `;
            else if (typeof req.params[param] === 'string')
                req.sql.params += `@${param}='${req.params[param]}', `;
        }
    });
    /* Body Parameters */
    Object.getOwnPropertyNames(req.body).forEach(param => {
        if (param != 'Id') {
            if (!isNaN(req.body[param]))
                req.sql.params += `@${param}=${req.body[param]}, `;
            else if (typeof req.body[param] === 'boolean')
                req.sql.params += `@${param}=${req.body[param] ? 1 : 0}, `;
            else if (typeof req.body[param] === 'string')
                req.sql.params += `@${param}='${req.body[param]}', `;
        }
    });
    if (req.sql.params.endsWith(', '))
        req.sql.params = req.sql.params.substring(0, req.sql.params.length - 2);
};
const callDatabase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('callDatabase:', `${req.sql.sp} ${req.sql.params}`);
        //console.log('callDatabase', `${req.sql.sp} ${req.sql.params}`);
        yield sql.connect(cfg);
        let result = yield sql.query(`${req.sql.sp} ${req.sql.params}`);
        if (req.method == 'GET' && result.recordset.length == 0) {
            res.status(404);
            res.sqlError = 'Could not find the resource.';
        }
        if (req.method == 'PUT' || req.method == 'DELETE')
            res.status(204);
        else if (req.method == 'POST')
            res.status(201);
        res.message =
            req.method == 'PUT' ? 'Updated successfully.' :
                req.method == 'DELETE' ? 'Deleted successfully.' : '';
        return result;
    }
    catch (err) {
        res.sqlError =
            req.method == 'GET' ? 'Could not find the resource.' :
                req.method == 'PUT' ? 'Could not update the resource.' :
                    req.method == 'POST' ? 'Could not create the resource.' :
                        req.method == 'DELETE' ? 'Could not delete the resource.' : 'Bad request.';
        res.status(400);
    }
});
const query = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        getParameters(req);
        const result = yield callDatabase(req, res);
        if (res.sqlError)
            return res.send(res.sqlError);
        if (req.method == 'PUT' || req.method == 'DELETE') {
            return res.send(res.message);
        }
        else if (req.method === 'POST') {
            if (result.recordset === undefined)
                return res.send('Resource added');
            else
                return res.json(result.recordset[0]);
        }
        return res.json(req.hasId ? result.recordset[0] : result.recordset);
    }
    catch (err) {
        console.log(err);
        throw err;
    }
});
module.exports = { query };
//# sourceMappingURL=db.js.map