"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const port = process.env.PORT || 8080;
const app = next_1.default({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();
async function printError(error) {
    console.log(error);
}
(async () => {
    await app.prepare();
    const server = express_1.default();
    server.get('*', (req, res) => handle(req, res));
    server.listen(port);
})();
exports.default = undefined;
