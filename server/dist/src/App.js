"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const file_system_1 = __importDefault(require("file-system"));
const memorystore_1 = __importDefault(require("memorystore"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const urls_1 = require("./utils/urls");
//Authentication
const passport_1 = __importDefault(require("passport"));
require("../config/passport");
const db_1 = require("../config/db");
const MemoryStore = (0, memorystore_1.default)(express_session_1.default);
class App {
    app;
    port;
    router;
    server;
    metadata;
    constructor(config, metadata) {
        const { port, router, staticPath } = config;
        this.app = (0, express_1.default)();
        this.port = port;
        this.router = router;
        this.metadata = metadata;
        this.configureMiddlewares();
        this.configureRoutes();
        this.connectDB();
        //Build
        if (process.env.NODE_ENV === 'production') {
            this.app.use(express_1.default.static(staticPath ? staticPath : "client/build"));
            this.app.get("*", (req, res) => {
                res.sendFile(path_1.default.resolve(__dirname, "../client", "build", "index.html"));
            });
        }
        this.server = this.createServer(config);
    }
    configureMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(function (req, res, next) {
            const allowedOrigins = [urls_1.hostUrl, urls_1.serverUrl, null]; // Allow requests from null origin
            const origin = req.headers.origin || null; // If the origin is null, set it explicitly
            if (allowedOrigins.includes(origin)) {
                res.setHeader('Access-Control-Allow-Origin', origin);
            }
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            next();
        });
        this.app.use((0, helmet_1.default)());
        const corsOptions = {
            methods: ['GET', 'POST', 'PUT'],
            origin: urls_1.hostUrl, // Set default origin if needed
            credentials: true,
        };
        this.app.use((0, cors_1.default)(corsOptions));
        this.app.set('trust proxy', 1);
        this.app.disable('x-powered-by');
        this.app.use(require('cookie-parser')());
        this.app.use(require('body-parser').urlencoded({ extended: false }));
        this.app.use((0, express_session_1.default)({
            secret: 'ncsu',
            resave: false,
            saveUninitialized: true,
            rolling: true,
            cookie: {
                sameSite: 'lax',
                secure: process.env.NODE_ENV === 'production',
                maxAge: 1000 * 60 * 60 * 24 * 30,
            },
            store: new MemoryStore({})
        }));
        this.app.use(passport_1.default.initialize());
        this.app.use(passport_1.default.session());
        passport_1.default.serializeUser(function (user, done) {
            done(null, user);
        });
        passport_1.default.deserializeUser(function (user, done) {
            done(null, user);
        });
    }
    configureRoutes() {
        const router = this.router;
        this.app.use(router);
    }
    connectDB() {
        (0, db_1.mongooseConnect)(process.env.ATLAS_URI);
    }
    createServer(options) {
        const { ssl } = options;
        if (ssl && process.env.NODE_ENV !== "production" && process.env.DOCKER !== 'true') {
            const httpsOptions = {
                key: file_system_1.default.readFileSync(ssl.key),
                cert: file_system_1.default.readFileSync(ssl.cert)
            };
            return https_1.default.createServer(httpsOptions, this.app);
        }
        else {
            return http_1.default.createServer(this.app);
        }
    }
    start() {
        this.server.listen(this.port, () => {
            console.log(`${this.metadata.name} service listening on port ${this.port}`);
        });
    }
    stop() {
        this.server.close();
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map