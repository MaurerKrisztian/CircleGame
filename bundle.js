/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Actions/KeyDownAction.ts":
/*!**************************************!*\
  !*** ./src/Actions/KeyDownAction.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyDownAction": () => (/* binding */ KeyDownAction)
/* harmony export */ });
/* harmony import */ var _observer_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observer/Observable */ "./src/observer/Observable.ts");

var KeyDownAction = /** @class */ (function () {
    function KeyDownAction() {
    }
    KeyDownAction.prototype.setup = function () {
        document.addEventListener('keydown', function (event) {
            var notifyData = {
                key: event.key
            };
            KeyDownAction.observable.notify(notifyData);
            console.log(notifyData);
        }, false);
    };
    KeyDownAction.observable = new _observer_Observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
    return KeyDownAction;
}());



/***/ }),

/***/ "./src/Actions/MousePositionAction.ts":
/*!********************************************!*\
  !*** ./src/Actions/MousePositionAction.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MousePositionAction": () => (/* binding */ MousePositionAction)
/* harmony export */ });
/* harmony import */ var _observer_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observer/Observable */ "./src/observer/Observable.ts");

var MousePositionAction = /** @class */ (function () {
    function MousePositionAction() {
        this.UPDATE_DELAY_MS = 300;
    }
    MousePositionAction.prototype.setup = function () {
        document.onmousemove = function (event) {
            var mouseMoveData = {
                x: event.pageX,
                y: event.pageY,
            };
            MousePositionAction.mouseMoveData = mouseMoveData;
        };
        setInterval(check_cursor, this.UPDATE_DELAY_MS);
        function check_cursor() {
            // console.log(MousePositionAction.mouseMoveData)
            MousePositionAction.observable.notify(MousePositionAction.mouseMoveData, "MousePosition");
        }
    };
    MousePositionAction.observable = new _observer_Observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
    MousePositionAction.mouseMoveData = { x: 0, y: 0 };
    return MousePositionAction;
}());



/***/ }),

/***/ "./src/Actions/MousePressAction.ts":
/*!*****************************************!*\
  !*** ./src/Actions/MousePressAction.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MousePressAction": () => (/* binding */ MousePressAction)
/* harmony export */ });
/* harmony import */ var _observer_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observer/Observable */ "./src/observer/Observable.ts");

var MousePressAction = /** @class */ (function () {
    function MousePressAction() {
    }
    MousePressAction.prototype.setup = function () {
        document.addEventListener('mousedown', function (event) {
            console.log(event);
            MousePressAction.observable.notify(event, "MousePressAction");
        }, false);
    };
    MousePressAction.observable = new _observer_Observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
    return MousePressAction;
}());



/***/ }),

/***/ "./src/Actions/SetupActions.ts":
/*!*************************************!*\
  !*** ./src/Actions/SetupActions.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupActions": () => (/* binding */ SetupActions)
/* harmony export */ });
/* harmony import */ var _KeyDownAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyDownAction */ "./src/Actions/KeyDownAction.ts");
/* harmony import */ var _MousePressAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MousePressAction */ "./src/Actions/MousePressAction.ts");
/* harmony import */ var _MousePositionAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MousePositionAction */ "./src/Actions/MousePositionAction.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var SetupActions = /** @class */ (function () {
    function SetupActions() {
    }
    SetupActions.setup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, action;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = this.actions;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        action = _a[_i];
                        return [4 /*yield*/, action.setup()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SetupActions.actions = [
        new _KeyDownAction__WEBPACK_IMPORTED_MODULE_0__.KeyDownAction(),
        new _MousePressAction__WEBPACK_IMPORTED_MODULE_1__.MousePressAction(),
        new _MousePositionAction__WEBPACK_IMPORTED_MODULE_2__.MousePositionAction()
    ];
    return SetupActions;
}());



/***/ }),

/***/ "./src/Actions/globalActions/CollisionActions.ts":
/*!*******************************************************!*\
  !*** ./src/Actions/globalActions/CollisionActions.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollisionActions": () => (/* binding */ CollisionActions)
/* harmony export */ });
/* harmony import */ var _observer_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../observer/Observable */ "./src/observer/Observable.ts");

var CollisionActions = /** @class */ (function () {
    function CollisionActions() {
    }
    CollisionActions.prototype.setup = function () {
    };
    CollisionActions.calculate = function () {
        // // console.log("ittt")
        // for (let i = 0; i < EntityRepository.bullets.length; i++) {
        //     for (let j = i + 1; j < EntityRepository.bullets.length; j++) {
        //         if (EntityRepository.bullets[i] === EntityRepository.bullets[j]) {
        //             break
        //         }
        //         console.log("ott")
        //         const distance = Utils.distance(EntityRepository.bullets[i].x, EntityRepository.bullets[i].y, EntityRepository.bullets[j].x, EntityRepository.bullets[j].y);
        //         this.bulletCollisionEvent(EntityRepository.bullets[i], EntityRepository.bullets[j], distance)
        //     }
        // }
    };
    CollisionActions.bulletCollisionEvent = function (bullet1, bullet2, distance) {
        console.log(bullet1.radius + bullet2.radius, distance);
        if (bullet1.radius + bullet2.radius <= distance) {
            console.log(bullet1.radius + bullet2.radius, distance);
            // CollisionActions.observable.notify({bullet1, bullet2}, "collision")
            // console.log("collision................")
        }
    };
    CollisionActions.observable = new _observer_Observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
    return CollisionActions;
}());



/***/ }),

/***/ "./src/Animator.ts":
/*!*************************!*\
  !*** ./src/Animator.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animator": () => (/* binding */ Animator)
/* harmony export */ });
/* harmony import */ var _EntityRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntityRepository */ "./src/EntityRepository.ts");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./src/Context.ts");


var Animator = /** @class */ (function () {
    function Animator() {
    }
    Animator.animate = function () {
        requestAnimationFrame(Animator.animate); //infinite loop
        _Context__WEBPACK_IMPORTED_MODULE_1__.Context.ctx.clearRect(0, 0, innerWidth, innerHeight);
        for (var i = 0; i < _EntityRepository__WEBPACK_IMPORTED_MODULE_0__.EntityRepository.allCircuit.length; i++) {
            _EntityRepository__WEBPACK_IMPORTED_MODULE_0__.EntityRepository.allCircuit[i].update(_Context__WEBPACK_IMPORTED_MODULE_1__.Context.ctx);
        }
        for (var i = 0; i < _EntityRepository__WEBPACK_IMPORTED_MODULE_0__.EntityRepository.players.length; i++) {
            _EntityRepository__WEBPACK_IMPORTED_MODULE_0__.EntityRepository.players[i].updateCtx(_Context__WEBPACK_IMPORTED_MODULE_1__.Context.ctx);
        }
        for (var i = 0; i < _EntityRepository__WEBPACK_IMPORTED_MODULE_0__.EntityRepository.bullets.length; i++) {
            _EntityRepository__WEBPACK_IMPORTED_MODULE_0__.EntityRepository.bullets[i].updateCtx(_Context__WEBPACK_IMPORTED_MODULE_1__.Context.ctx);
        }
        // CollisionActions.calculate()
    };
    return Animator;
}());



/***/ }),

/***/ "./src/CollisionHandlers/BulletCollision.ts":
/*!**************************************************!*\
  !*** ./src/CollisionHandlers/BulletCollision.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BulletCollision": () => (/* binding */ BulletCollision)
/* harmony export */ });
/* harmony import */ var _Actions_globalActions_CollisionActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/globalActions/CollisionActions */ "./src/Actions/globalActions/CollisionActions.ts");
/* harmony import */ var _EntityRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EntityRepository */ "./src/EntityRepository.ts");


var BulletCollision = /** @class */ (function () {
    function BulletCollision() {
    }
    BulletCollision.prototype.handleCollision = function () {
        _Actions_globalActions_CollisionActions__WEBPACK_IMPORTED_MODULE_0__.CollisionActions.observable.add(this);
    };
    BulletCollision.prototype.update = function (data, channel) {
        if (channel == "bullet_collision") {
            var bullets_1 = data;
            _EntityRepository__WEBPACK_IMPORTED_MODULE_1__.EntityRepository.bullets = _EntityRepository__WEBPACK_IMPORTED_MODULE_1__.EntityRepository.bullets.filter(function (bullet) {
                if (bullet === bullets_1.b1 || bullet === bullets_1.b2) {
                    return false;
                }
                return true;
            });
        }
    };
    return BulletCollision;
}());



/***/ }),

/***/ "./src/CollisionHandlers/BulletPlayerCollision.ts":
/*!********************************************************!*\
  !*** ./src/CollisionHandlers/BulletPlayerCollision.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BulletPlayerCollision": () => (/* binding */ BulletPlayerCollision)
/* harmony export */ });
/* harmony import */ var _Actions_globalActions_CollisionActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/globalActions/CollisionActions */ "./src/Actions/globalActions/CollisionActions.ts");
/* harmony import */ var _EntityRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EntityRepository */ "./src/EntityRepository.ts");


var BulletPlayerCollision = /** @class */ (function () {
    function BulletPlayerCollision() {
    }
    BulletPlayerCollision.prototype.handleCollision = function () {
        _Actions_globalActions_CollisionActions__WEBPACK_IMPORTED_MODULE_0__.CollisionActions.observable.add(this);
    };
    BulletPlayerCollision.prototype.update = function (data, channel) {
        if (channel == "bullet_player_collision") {
            var collisionEntities_1 = data;
            for (var _i = 0, _a = _EntityRepository__WEBPACK_IMPORTED_MODULE_1__.EntityRepository.players; _i < _a.length; _i++) {
                var player = _a[_i];
                if (player === collisionEntities_1.player && collisionEntities_1.bullet.playerId != player.id) {
                    player.radius++;
                }
            }
            _EntityRepository__WEBPACK_IMPORTED_MODULE_1__.EntityRepository.bullets = _EntityRepository__WEBPACK_IMPORTED_MODULE_1__.EntityRepository.bullets.filter(function (bullet) {
                if (bullet === collisionEntities_1.bullet) {
                    return false;
                }
                return true;
            });
        }
    };
    return BulletPlayerCollision;
}());



/***/ }),

/***/ "./src/CollisionHandlers/SetupCollisionHandlers.ts":
/*!*********************************************************!*\
  !*** ./src/CollisionHandlers/SetupCollisionHandlers.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupCollisionHandlers": () => (/* binding */ SetupCollisionHandlers)
/* harmony export */ });
/* harmony import */ var _BulletCollision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BulletCollision */ "./src/CollisionHandlers/BulletCollision.ts");
/* harmony import */ var _BulletPlayerCollision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BulletPlayerCollision */ "./src/CollisionHandlers/BulletPlayerCollision.ts");


var SetupCollisionHandlers = /** @class */ (function () {
    function SetupCollisionHandlers() {
    }
    SetupCollisionHandlers.setup = function () {
        for (var _i = 0, _a = this.handlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            handler.handleCollision();
        }
    };
    SetupCollisionHandlers.handlers = [
        new _BulletCollision__WEBPACK_IMPORTED_MODULE_0__.BulletCollision(),
        new _BulletPlayerCollision__WEBPACK_IMPORTED_MODULE_1__.BulletPlayerCollision()
    ];
    return SetupCollisionHandlers;
}());



/***/ }),

/***/ "./src/Context.ts":
/*!************************!*\
  !*** ./src/Context.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": () => (/* binding */ Context)
/* harmony export */ });
var Context = /** @class */ (function () {
    function Context() {
    }
    Context.getContext = function () {
        var index = document.getElementById("myCanvas");
        index.width = window.innerWidth;
        index.height = window.innerHeight;
        var ctx = index.getContext('2d');
        if (!ctx) {
            throw new Error("Cannot get context");
        }
        this.ctx = ctx;
        return ctx;
    };
    return Context;
}());



/***/ }),

/***/ "./src/EntityRepository.ts":
/*!*********************************!*\
  !*** ./src/EntityRepository.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityRepository": () => (/* binding */ EntityRepository)
/* harmony export */ });
var EntityRepository = /** @class */ (function () {
    function EntityRepository() {
    }
    EntityRepository.allCircuit = [];
    EntityRepository.players = [];
    EntityRepository.bullets = [];
    return EntityRepository;
}());



/***/ }),

/***/ "./src/Utils.ts":
/*!**********************!*\
  !*** ./src/Utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": () => (/* binding */ Utils)
/* harmony export */ });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.vector = function (x1, y1, x2, y2) {
        return { dx: x2 - x1, dy: y2 - y1 };
    };
    Utils.distance = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        // return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))
    };
    return Utils;
}());



/***/ }),

/***/ "./src/factory/CircleFactory.ts":
/*!**************************************!*\
  !*** ./src/factory/CircleFactory.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircleFactory": () => (/* binding */ CircleFactory)
/* harmony export */ });
/* harmony import */ var _models_Circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Circle */ "./src/models/Circle.ts");

var CircleFactory = /** @class */ (function () {
    function CircleFactory() {
    }
    CircleFactory.create = function (type, speed) {
        if (speed === void 0) { speed = 10; }
        switch (type) {
            case "random":
                return this.createRandomCircuit(speed);
                break;
            default:
                throw new Error("Can't create circuit: " + type);
        }
    };
    CircleFactory.createRandomCircuit = function (maxSpeed) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var radius = 30;
        //start random direction and speed
        var dx = (Math.random() - 0.5) * maxSpeed;
        var dy = (Math.random() - 0.5) * maxSpeed;
        //if the circuit not fully in the browser
        if (x < 0 + radius) {
            x = 0 + radius;
        }
        else if (x > innerWidth - radius) {
            x = innerWidth - radius;
        }
        if (y < 0 + radius) {
            y = 0 + radius;
        }
        else if (y > innerHeight - radius) {
            y = innerHeight - radius;
        }
        return new _models_Circle__WEBPACK_IMPORTED_MODULE_0__.Circle(x, y, dx, dy, radius);
    };
    return CircleFactory;
}());



/***/ }),

/***/ "./src/models/Bullet.ts":
/*!******************************!*\
  !*** ./src/models/Bullet.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bullet": () => (/* binding */ Bullet)
/* harmony export */ });
/* harmony import */ var _EntityRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EntityRepository */ "./src/EntityRepository.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils */ "./src/Utils.ts");
/* harmony import */ var _Actions_globalActions_CollisionActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Actions/globalActions/CollisionActions */ "./src/Actions/globalActions/CollisionActions.ts");



var Bullet = /** @class */ (function () {
    function Bullet(x, y, dx, dy, radius, playerId, liveTime) {
        if (liveTime === void 0) { liveTime = 5000; }
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.playerId = playerId;
        this.liveTime = liveTime;
        this.colors = ['blue', 'red', 'green', 'black'];
        this.color = this.colors[this.getRandomColorIndex()];
        this.setLiveTime();
    }
    Bullet.prototype.setLiveTime = function () {
        var _this = this;
        setTimeout(function () {
            _EntityRepository__WEBPACK_IMPORTED_MODULE_0__.EntityRepository.bullets = _EntityRepository__WEBPACK_IMPORTED_MODULE_0__.EntityRepository.bullets.filter(function (bullet) {
                if (bullet === _this) {
                    return false;
                }
                return true;
            });
        }, this.liveTime);
    };
    Bullet.prototype.getRandomColorIndex = function () {
        return Math.round(Math.random() * this.colors.length);
    };
    Bullet.prototype.draw = function (context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = this.color;
        context.stroke();
    };
    Bullet.prototype.updateCtx = function (context) {
        if (this.x > innerWidth - this.radius || this.x < 0 + this.radius) {
            this.dx = -this.dx;
        }
        if (this.y > innerHeight - this.radius || this.y < 0 + this.radius) {
            this.dy = -this.dy;
        }
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
        this.calculateCollision();
        this.draw(context);
    };
    Bullet.prototype.calculateCollision = function () {
        for (var _i = 0, _a = _EntityRepository__WEBPACK_IMPORTED_MODULE_0__.EntityRepository.bullets; _i < _a.length; _i++) {
            var bullet = _a[_i];
            if (bullet === this) {
                continue;
            }
            var distance = _Utils__WEBPACK_IMPORTED_MODULE_1__.Utils.distance(this.x, this.y, bullet.x, bullet.y);
            if (distance <= (bullet.radius + this.radius) && bullet.playerId != this.playerId) {
                console.log(distance, bullet.radius, this.radius);
                _Actions_globalActions_CollisionActions__WEBPACK_IMPORTED_MODULE_2__.CollisionActions.observable.notify({ b1: this, b2: bullet }, "bullet_collision");
            }
        }
    };
    return Bullet;
}());



/***/ }),

/***/ "./src/models/Circle.ts":
/*!******************************!*\
  !*** ./src/models/Circle.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Circle": () => (/* binding */ Circle)
/* harmony export */ });
var Circle = /** @class */ (function () {
    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.colors = ['blue', 'red', 'green', 'black'];
        this.color = this.colors[this.getRandomColorIndex()];
    }
    Circle.prototype.getRandomColorIndex = function () {
        return Math.round(Math.random() * this.colors.length);
    };
    Circle.prototype.draw = function (context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = this.color;
        context.stroke();
    };
    Circle.prototype.update = function (context) {
        if (this.x > innerWidth - this.radius || this.x < 0 + this.radius) {
            this.dx = -this.dx;
        }
        if (this.y > innerHeight - this.radius || this.y < 0 + this.radius) {
            this.dy = -this.dy;
        }
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
        this.draw(context);
    };
    return Circle;
}());



/***/ }),

/***/ "./src/models/Player.ts":
/*!******************************!*\
  !*** ./src/models/Player.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Actions_MousePressAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Actions/MousePressAction */ "./src/Actions/MousePressAction.ts");
/* harmony import */ var _Actions_MousePositionAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Actions/MousePositionAction */ "./src/Actions/MousePositionAction.ts");
/* harmony import */ var _EntityRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../EntityRepository */ "./src/EntityRepository.ts");
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bullet */ "./src/models/Bullet.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils */ "./src/Utils.ts");
/* harmony import */ var _Actions_globalActions_CollisionActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Actions/globalActions/CollisionActions */ "./src/Actions/globalActions/CollisionActions.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");







var Player = /** @class */ (function () {
    function Player(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_6__.default)();
        this.colors = ['blue', 'red', 'green', 'black'];
        _Actions_globalActions_CollisionActions__WEBPACK_IMPORTED_MODULE_5__.CollisionActions.observable.add(this);
        _Actions_MousePressAction__WEBPACK_IMPORTED_MODULE_0__.MousePressAction.observable.add(this);
        this.color = this.colors[this.getRandomColorIndex()];
    }
    Player.prototype.update = function (data, channel) {
        console.log(channel);
        switch (channel) {
            case 'MousePosition':
                var mousePosition = data;
                console.log("player action : ", mousePosition);
                break;
            case 'MousePressAction':
                var mousePressAction = data;
                // this.radius++
                var vector = _Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.vector(this.x, this.y, mousePressAction.clientX, mousePressAction.clientY);
                console.log(vector);
                var distance = _Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.distance(this.x, this.y, mousePressAction.clientX, mousePressAction.clientY);
                console.log("distance ", distance);
                this.shoot(vector.dx * 0.01, vector.dy * 0.01);
                console.log("player action : ", mousePressAction);
                break;
        }
    };
    Player.prototype.getRandomColorIndex = function () {
        return Math.round(Math.random() * this.colors.length);
    };
    Player.prototype.draw = function (context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = this.color;
        context.stroke();
    };
    Player.prototype.updateCtx = function (context) {
        if (this.x > innerWidth - this.radius || this.x < 0 + this.radius) {
            this.dx = -this.dx;
        }
        if (this.y > innerHeight - this.radius || this.y < 0 + this.radius) {
            this.dy = -this.dy;
        }
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
        // console.log(MousePositionAction.mouseMoveData)
        // console.log(Utils.distance(this.x, this.y, MousePositionAction.mouseMoveData.x, MousePositionAction.mouseMoveData.y))
        this.calculateCollision();
        this.draw(context);
    };
    Player.prototype.shoot = function (dx, dy) {
        console.log("distanceeeeeeeeeeeeeeee", _Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.distance(this.x, this.y, _Actions_MousePositionAction__WEBPACK_IMPORTED_MODULE_1__.MousePositionAction.mouseMoveData.x, _Actions_MousePositionAction__WEBPACK_IMPORTED_MODULE_1__.MousePositionAction.mouseMoveData.y), "radius", this.radius);
        var bullet = new _Bullet__WEBPACK_IMPORTED_MODULE_3__.Bullet(this.x, this.y, dx, dy, 33, this.id);
        _EntityRepository__WEBPACK_IMPORTED_MODULE_2__.EntityRepository.bullets.push(bullet);
    };
    Player.prototype.calculateCollision = function () {
        for (var _i = 0, _a = _EntityRepository__WEBPACK_IMPORTED_MODULE_2__.EntityRepository.bullets; _i < _a.length; _i++) {
            var bullet = _a[_i];
            if (bullet.playerId == this.id) {
                continue;
            }
            var distance = _Utils__WEBPACK_IMPORTED_MODULE_4__.Utils.distance(this.x, this.y, bullet.x, bullet.y);
            if (distance <= (bullet.radius + this.radius)) {
                console.log(distance, bullet.radius, this.radius);
                _Actions_globalActions_CollisionActions__WEBPACK_IMPORTED_MODULE_5__.CollisionActions.observable.notify({ player: this, bullet: bullet }, "bullet_player_collision");
            }
        }
    };
    return Player;
}());



/***/ }),

/***/ "./src/observer/Observable.ts":
/*!************************************!*\
  !*** ./src/observer/Observable.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": () => (/* binding */ Observable)
/* harmony export */ });
var Observable = /** @class */ (function () {
    function Observable() {
        this.observers = [];
    }
    Observable.prototype.add = function (observer) {
        this.observers.push(observer);
    };
    Observable.prototype.remove = function (observer) {
        this.observers = this.observers.filter(function (o) { return o !== observer; });
    };
    Observable.prototype.notify = function (data, channel) {
        if (channel === void 0) { channel = 'default'; }
        this.observers.forEach(function (observer) {
            observer.update(data, channel);
        });
    };
    return Observable;
}());



/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Context */ "./src/Context.ts");
/* harmony import */ var _factory_CircleFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory/CircleFactory */ "./src/factory/CircleFactory.ts");
/* harmony import */ var _EntityRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EntityRepository */ "./src/EntityRepository.ts");
/* harmony import */ var _Animator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Animator */ "./src/Animator.ts");
/* harmony import */ var _Actions_SetupActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Actions/SetupActions */ "./src/Actions/SetupActions.ts");
/* harmony import */ var _CollisionHandlers_SetupCollisionHandlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CollisionHandlers/SetupCollisionHandlers */ "./src/CollisionHandlers/SetupCollisionHandlers.ts");
/* harmony import */ var _models_Player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/Player */ "./src/models/Player.ts");







console.log(_Context__WEBPACK_IMPORTED_MODULE_0__.Context.getContext());
var circuitNumber = 4; //Number.parseInt(prompt("Please enter the circuits number", "50")) || 11 ;
for (var i = 0; i < circuitNumber; i++) {
    _EntityRepository__WEBPACK_IMPORTED_MODULE_2__.EntityRepository.allCircuit[i] = _factory_CircleFactory__WEBPACK_IMPORTED_MODULE_1__.CircleFactory.create("random");
}
_EntityRepository__WEBPACK_IMPORTED_MODULE_2__.EntityRepository.players.push(new _models_Player__WEBPACK_IMPORTED_MODULE_6__.Player(200, 200, 0, 0, 50));
_EntityRepository__WEBPACK_IMPORTED_MODULE_2__.EntityRepository.players.push(new _models_Player__WEBPACK_IMPORTED_MODULE_6__.Player(400, 400, 0, 0, 50));
_Animator__WEBPACK_IMPORTED_MODULE_3__.Animator.animate();
_Actions_SetupActions__WEBPACK_IMPORTED_MODULE_4__.SetupActions.setup();
_CollisionHandlers_SetupCollisionHandlers__WEBPACK_IMPORTED_MODULE_5__.SetupCollisionHandlers.setup();
//
// document.addEventListener('mousedown', function (event) {
//     console.log(event.target);
// }, false);
//
// document.addEventListener('keydown',
//     function (event) {
//         console.log(event.key)
//     }, false);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvLi9zcmMvQWN0aW9ucy9LZXlEb3duQWN0aW9uLnRzIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy8uL3NyYy9BY3Rpb25zL01vdXNlUG9zaXRpb25BY3Rpb24udHMiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzLy4vc3JjL0FjdGlvbnMvTW91c2VQcmVzc0FjdGlvbi50cyIsIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvLi9zcmMvQWN0aW9ucy9TZXR1cEFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzLy4vc3JjL0FjdGlvbnMvZ2xvYmFsQWN0aW9ucy9Db2xsaXNpb25BY3Rpb25zLnRzIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy8uL3NyYy9BbmltYXRvci50cyIsIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvLi9zcmMvQ29sbGlzaW9uSGFuZGxlcnMvQnVsbGV0Q29sbGlzaW9uLnRzIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy8uL3NyYy9Db2xsaXNpb25IYW5kbGVycy9CdWxsZXRQbGF5ZXJDb2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzLy4vc3JjL0NvbGxpc2lvbkhhbmRsZXJzL1NldHVwQ29sbGlzaW9uSGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzLy4vc3JjL0NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzLy4vc3JjL0VudGl0eVJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzLy4vc3JjL1V0aWxzLnRzIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy8uL3NyYy9mYWN0b3J5L0NpcmNsZUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzLy4vc3JjL21vZGVscy9CdWxsZXQudHMiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzLy4vc3JjL21vZGVscy9DaXJjbGUudHMiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzLy4vc3JjL21vZGVscy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzLy4vc3JjL29ic2VydmVyL09ic2VydmFibGUudHMiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9hbmltYXRlZGNpcmNsZXMvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FuaW1hdGVkY2lyY2xlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYW5pbWF0ZWRjaXJjbGVzLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVvRDtBQUdwRDtJQUlJO0lBQ0EsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUMvQixVQUFVLEtBQVU7WUFFaEIsSUFBTSxVQUFVLEdBQUc7Z0JBQ2YsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO2FBQ2pCO1lBRUQsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVsQixDQUFDO0lBbEJNLHdCQUFVLEdBQW9CLElBQUksNERBQVUsRUFBTyxDQUFDO0lBbUIvRCxvQkFBQztDQUFBO0FBckJ5Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ0owQjtBQUVwRDtJQUFBO1FBR1ksb0JBQWUsR0FBRyxHQUFHLENBQUM7SUFtQmxDLENBQUM7SUFqQkcsbUNBQUssR0FBTDtRQUNJLFFBQVEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxLQUFpQjtZQUM5QyxJQUFNLGFBQWEsR0FBdUI7Z0JBQ3RDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSztnQkFDZCxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUs7YUFDakI7WUFDRCxtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ3RELENBQUM7UUFDRCxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVoRCxTQUFTLFlBQVk7WUFDakIsaURBQWlEO1lBQ2pELG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQztRQUM3RixDQUFDO0lBRUwsQ0FBQztJQW5CTSw4QkFBVSxHQUFvQixJQUFJLDREQUFVLEVBQU8sQ0FBQztJQUNwRCxpQ0FBYSxHQUF1QixFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBb0I1RCwwQkFBQztDQUFBO0FBdEIrQjs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZvQjtBQUVwRDtJQUFBO0lBVUEsQ0FBQztJQVBHLGdDQUFLLEdBQUw7UUFDSSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQVUsS0FBaUI7WUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDbEIsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLENBQUM7UUFDakUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQVBNLDJCQUFVLEdBQTJCLElBQUksNERBQVUsRUFBYyxDQUFDO0lBUzdFLHVCQUFDO0NBQUE7QUFWNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZtQjtBQUNNO0FBQ007QUFFNUQ7SUFBQTtJQVlBLENBQUM7SUFMZ0Isa0JBQUssR0FBbEI7Ozs7Ozs4QkFDcUMsRUFBWixTQUFJLENBQUMsT0FBTzs7OzZCQUFaLGVBQVk7d0JBQXRCLE1BQU07d0JBQ2IscUJBQU0sTUFBTSxDQUFDLEtBQUssRUFBRTs7d0JBQXBCLFNBQW9CLENBQUM7Ozt3QkFESixJQUFZOzs7Ozs7S0FHcEM7SUFWTSxvQkFBTyxHQUFjO1FBQ3hCLElBQUkseURBQWEsRUFBRTtRQUNuQixJQUFJLCtEQUFnQixFQUFFO1FBQ3RCLElBQUkscUVBQW1CLEVBQUU7S0FDNUI7SUFPTCxtQkFBQztDQUFBO0FBWndCOzs7Ozs7Ozs7Ozs7Ozs7O0FDSjhCO0FBS3ZEO0lBQUE7SUErQkEsQ0FBQztJQTVCRyxnQ0FBSyxHQUFMO0lBQ0EsQ0FBQztJQUVNLDBCQUFTLEdBQWhCO1FBQ0kseUJBQXlCO1FBQ3pCLDhEQUE4RDtRQUM5RCxzRUFBc0U7UUFDdEUsNkVBQTZFO1FBQzdFLG9CQUFvQjtRQUNwQixZQUFZO1FBQ1osNkJBQTZCO1FBQzdCLHVLQUF1SztRQUN2Syx3R0FBd0c7UUFDeEcsUUFBUTtRQUNSLElBQUk7SUFFUixDQUFDO0lBRU0scUNBQW9CLEdBQTNCLFVBQTRCLE9BQWUsRUFBRSxPQUFlLEVBQUUsUUFBZ0I7UUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO1FBQ3RELElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLFFBQVEsRUFBRTtZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7WUFDdEQsc0VBQXNFO1lBQ3RFLDJDQUEyQztTQUM5QztJQUNMLENBQUM7SUEzQk0sMkJBQVUsR0FBb0IsSUFBSSw0REFBVSxFQUFPLENBQUM7SUE4Qi9ELHVCQUFDO0NBQUE7QUEvQjRCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ055QjtBQUNsQjtBQUdwQztJQUNJO0lBQ0EsQ0FBQztJQUVNLGdCQUFPLEdBQWQ7UUFDSSxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxlQUFlO1FBRXhELDJEQUFxQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXJELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxpRkFBa0MsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6RCwwRUFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsaURBQVcsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLDhFQUErQixFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RELHVFQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxpREFBVyxDQUFDLENBQUM7U0FDdEQ7UUFHRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsOEVBQStCLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEQsdUVBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGlEQUFXLENBQUMsQ0FBQztTQUN0RDtRQUVELCtCQUErQjtJQUVuQyxDQUFDO0lBRUwsZUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCNEU7QUFFdEI7QUFHdkQ7SUFBQTtJQWtCQSxDQUFDO0lBaEJHLHlDQUFlLEdBQWY7UUFDSSxvR0FBK0IsQ0FBQyxJQUFJLENBQUM7SUFDekMsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxJQUFTLEVBQUUsT0FBZ0I7UUFDOUIsSUFBSSxPQUFPLElBQUksa0JBQWtCLEVBQUU7WUFDL0IsSUFBTSxTQUFPLEdBQXdCLElBQUksQ0FBQztZQUMxQyx1RUFBd0IsR0FBRyw4RUFBK0IsQ0FBQyxVQUFDLE1BQWM7Z0JBQ3RFLElBQUksTUFBTSxLQUFLLFNBQU8sQ0FBQyxFQUFFLElBQUksTUFBTSxLQUFLLFNBQU8sQ0FBQyxFQUFFLEVBQUU7b0JBQ2hELE9BQU8sS0FBSyxDQUFDO2lCQUNoQjtnQkFDRCxPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDLENBQUM7U0FDTDtJQUNMLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCNEU7QUFFdEI7QUFJdkQ7SUFBQTtJQXdCQSxDQUFDO0lBdEJHLCtDQUFlLEdBQWY7UUFDSSxvR0FBK0IsQ0FBQyxJQUFJLENBQUM7SUFDekMsQ0FBQztJQUVELHNDQUFNLEdBQU4sVUFBTyxJQUFTLEVBQUUsT0FBZ0I7UUFDOUIsSUFBSSxPQUFPLElBQUkseUJBQXlCLEVBQUU7WUFDdEMsSUFBTSxtQkFBaUIsR0FBOEIsSUFBSSxDQUFDO1lBQzFELEtBQXFCLFVBQXdCLEVBQXhCLDRFQUF3QixFQUF4QixjQUF3QixFQUF4QixJQUF3QixFQUFFO2dCQUExQyxJQUFNLE1BQU07Z0JBQ2IsSUFBSSxNQUFNLEtBQUssbUJBQWlCLENBQUMsTUFBTSxJQUFJLG1CQUFpQixDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLEVBQUUsRUFBQztvQkFDdEYsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUNuQjthQUNKO1lBRUQsdUVBQXdCLEdBQUcsOEVBQStCLENBQUMsVUFBQyxNQUFjO2dCQUN0RSxJQUFLLE1BQU0sS0FBSyxtQkFBaUIsQ0FBQyxNQUFNLEVBQUU7b0JBQ3RDLE9BQU8sS0FBSyxDQUFDO2lCQUNoQjtnQkFDRCxPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDLENBQUM7U0FDTDtJQUNMLENBQUM7SUFFTCw0QkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCbUQ7QUFDWTtBQUVoRTtJQUFBO0lBV0EsQ0FBQztJQUxVLDRCQUFLLEdBQVo7UUFDSSxLQUFzQixVQUFhLEVBQWIsU0FBSSxDQUFDLFFBQVEsRUFBYixjQUFhLEVBQWIsSUFBYSxFQUFFO1lBQWhDLElBQU0sT0FBTztZQUNkLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFUTSwrQkFBUSxHQUF3QjtRQUNuQyxJQUFJLDZEQUFlLEVBQUU7UUFDckIsSUFBSSx5RUFBcUIsRUFBRTtLQUM5QjtJQU9MLDZCQUFDO0NBQUE7QUFYa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0puQztJQUdJO0lBQ0EsQ0FBQztJQUVNLGtCQUFVLEdBQWpCO1FBQ0ksSUFBTSxLQUFLLEdBQVEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RCxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDaEMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRWxDLElBQU0sR0FBRyxHQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBRW5DLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDTixNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJEO0lBQUE7SUFJQSxDQUFDO0lBSFUsMkJBQVUsR0FBUSxFQUFFLENBQUM7SUFDckIsd0JBQU8sR0FBYSxFQUFFLENBQUM7SUFDdkIsd0JBQU8sR0FBYSxFQUFFO0lBQ2pDLHVCQUFDO0NBQUE7QUFKNEI7Ozs7Ozs7Ozs7Ozs7OztBQ0g3QjtJQUFBO0lBV0EsQ0FBQztJQVRVLFlBQU0sR0FBYixVQUFjLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVU7UUFDeEQsT0FBTyxFQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFDO0lBQ3JDLENBQUM7SUFFTSxjQUFRLEdBQWYsVUFBZ0IsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVTtRQUMxRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFFLENBQUM7UUFDaEUsb0VBQW9FO0lBQ3hFLENBQUM7SUFFTCxZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYeUM7QUFFMUM7SUFBQTtJQXFDQSxDQUFDO0lBbkNVLG9CQUFNLEdBQWIsVUFBYyxJQUF1QixFQUFFLEtBQVU7UUFBVixrQ0FBVTtRQUM3QyxRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssUUFBUTtnQkFDVCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7Z0JBQ3RDLE1BQUs7WUFDVDtnQkFDSSxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUF5QixJQUFNLENBQUM7U0FDdkQ7SUFDTCxDQUFDO0lBR2MsaUNBQW1CLEdBQWxDLFVBQW1DLFFBQWdCO1FBQy9DLElBQUksQ0FBQyxHQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ2xELElBQUksQ0FBQyxHQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ25ELElBQU0sTUFBTSxHQUFXLEVBQUUsQ0FBQztRQUUxQixrQ0FBa0M7UUFDbEMsSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQzVDLElBQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUU1Qyx5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sRUFBRTtZQUNoQixDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUNsQjthQUFNLElBQUksQ0FBQyxHQUFHLFVBQVUsR0FBRyxNQUFNLEVBQUU7WUFDaEMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFO1lBQ2hCLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ2xCO2FBQU0sSUFBSSxDQUFDLEdBQUcsV0FBVyxHQUFHLE1BQU0sRUFBRTtZQUNqQyxDQUFDLEdBQUcsV0FBVyxHQUFHLE1BQU0sQ0FBQztTQUM1QjtRQUVELE9BQU8sSUFBSSxrREFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUM7SUFDM0MsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDc0Q7QUFDdEI7QUFDNEM7QUFFN0U7SUFJSSxnQkFBbUIsQ0FBTSxFQUFTLENBQU0sRUFBVSxFQUFPLEVBQVUsRUFBTyxFQUFTLE1BQWMsRUFBUyxRQUFnQixFQUFVLFFBQXVCO1FBQXZCLDBDQUF1QjtRQUF4SSxNQUFDLEdBQUQsQ0FBQyxDQUFLO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBSztRQUFVLE9BQUUsR0FBRixFQUFFLENBQUs7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFLO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBRjNKLFdBQU0sR0FBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsNEJBQVcsR0FBWDtRQUFBLGlCQVNDO1FBUkcsVUFBVSxDQUFDO1lBQ1AsdUVBQXdCLEdBQUcsOEVBQStCLENBQUMsVUFBQyxNQUFNO2dCQUM5RCxJQUFJLE1BQU0sS0FBSyxLQUFJLEVBQUU7b0JBQ2pCLE9BQU8sS0FBSztpQkFDZjtnQkFDRCxPQUFPLElBQUk7WUFDZixDQUFDLENBQUM7UUFDTixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQixDQUFDO0lBRUQsb0NBQW1CLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN6RCxDQUFDO0lBRUQscUJBQUksR0FBSixVQUFLLE9BQVk7UUFDYixPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEUsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBR0QsMEJBQVMsR0FBVCxVQUFVLE9BQVk7UUFDbEIsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDL0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7U0FDdEI7UUFDRCxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUN0QjtRQUVELElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRzFCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRTFCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFdkIsQ0FBQztJQUVELG1DQUFrQixHQUFsQjtRQUNJLEtBQXFCLFVBQXdCLEVBQXhCLDRFQUF3QixFQUF4QixjQUF3QixFQUF4QixJQUF3QixFQUFFO1lBQTFDLElBQU0sTUFBTTtZQUNiLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDakIsU0FBUTthQUNYO1lBQ0QsSUFBTSxRQUFRLEdBQUcsa0RBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEUsSUFBSSxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQy9FLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDakQsdUdBQWtDLENBQUMsRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUMsRUFBRSxrQkFBa0IsQ0FBQzthQUNqRjtTQUNKO0lBQ0wsQ0FBQztJQUVMLGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkVEO0lBSUksZ0JBQW9CLENBQU0sRUFBVSxDQUFNLEVBQVUsRUFBTyxFQUFVLEVBQU8sRUFBVSxNQUFXO1FBQTdFLE1BQUMsR0FBRCxDQUFDLENBQUs7UUFBVSxNQUFDLEdBQUQsQ0FBQyxDQUFLO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBSztRQUFVLE9BQUUsR0FBRixFQUFFLENBQUs7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFLO1FBRmpHLFdBQU0sR0FBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxvQ0FBbUIsR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3pELENBQUM7SUFFRCxxQkFBSSxHQUFKLFVBQUssT0FBWTtRQUNiLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRSxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDakMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFHRCx1QkFBTSxHQUFOLFVBQU8sT0FBWTtRQUNmLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQy9ELElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7U0FDdEI7UUFFRCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXZCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ2lGO0FBRU87QUFFbEM7QUFDckI7QUFDRDtBQUM0QztBQUN6QztBQUVwQztJQUtJLGdCQUFvQixDQUFNLEVBQVUsQ0FBTSxFQUFVLEVBQU8sRUFBVSxFQUFPLEVBQVMsTUFBVztRQUE1RSxNQUFDLEdBQUQsQ0FBQyxDQUFLO1FBQVUsTUFBQyxHQUFELENBQUMsQ0FBSztRQUFVLE9BQUUsR0FBRixFQUFFLENBQUs7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFLO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUpoRyxPQUFFLEdBQVcsNkNBQU0sRUFBRSxDQUFDO1FBRXRCLFdBQU0sR0FBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRzVDLG9HQUErQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLHNGQUErQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQU8sSUFBUyxFQUFFLE9BQWdCO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ3BCLFFBQVEsT0FBTyxFQUFFO1lBQ2IsS0FBSyxlQUFlO2dCQUNoQixJQUFNLGFBQWEsR0FBdUIsSUFBSSxDQUFDO2dCQUUvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztnQkFDOUMsTUFBTTtZQUNWLEtBQUssa0JBQWtCO2dCQUNuQixJQUFNLGdCQUFnQixHQUFzQixJQUFJLENBQUM7Z0JBQ2pELGdCQUFnQjtnQkFDaEIsSUFBTSxNQUFNLEdBQUcsZ0RBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztnQkFDL0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBRW5CLElBQU0sUUFBUSxHQUFHLGtEQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO2dCQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDO2dCQUNqRCxNQUFNO1NBRWI7SUFDTCxDQUFDO0lBRUQsb0NBQW1CLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN6RCxDQUFDO0lBRUQscUJBQUksR0FBSixVQUFLLE9BQVk7UUFDYixPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEUsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBR0QsMEJBQVMsR0FBVCxVQUFVLE9BQVk7UUFDbEIsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDL0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7U0FDdEI7UUFDRCxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUN0QjtRQUVELElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRTFCLGlEQUFpRDtRQUNqRCx3SEFBd0g7UUFFeEgsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV2QixDQUFDO0lBRUQsc0JBQUssR0FBTCxVQUFNLEVBQVUsRUFBRSxFQUFVO1FBRXhCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsa0RBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsNkZBQW1DLEVBQUUsNkZBQW1DLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2SyxJQUFNLE1BQU0sR0FBRyxJQUFJLDJDQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDOUQsNEVBQTZCLENBQUMsTUFBTSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxtQ0FBa0IsR0FBbEI7UUFDSSxLQUFxQixVQUF3QixFQUF4Qiw0RUFBd0IsRUFBeEIsY0FBd0IsRUFBeEIsSUFBd0IsRUFBRTtZQUExQyxJQUFNLE1BQU07WUFDYixJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDNUIsU0FBUTthQUNYO1lBQ0QsSUFBTSxRQUFRLEdBQUcsa0RBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEUsSUFBSSxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUNqRCx1R0FBa0MsQ0FBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxFQUFFLHlCQUF5QixDQUFDO2FBQ2hHO1NBQ0o7SUFDTCxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRkQ7SUFBQTtRQUNJLGNBQVMsR0FBbUIsRUFBRSxDQUFDO0lBZW5DLENBQUM7SUFiRyx3QkFBRyxHQUFILFVBQUksUUFBc0I7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxRQUFzQjtRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBZSxJQUFLLFFBQUMsS0FBSyxRQUFRLEVBQWQsQ0FBYyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxJQUFPLEVBQUUsT0FBMkI7UUFBM0IsNkNBQTJCO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBc0I7WUFDMUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO1FBQ2xDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQsaUVBQWUsY0FBYyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxHQUFHLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7OztBQ0FwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlnQkFBeWdCO0FBQ3pnQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLHFEQUFRO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRTs7Ozs7Ozs7Ozs7Ozs7OztBQzdCRztBQUNZOztBQUV2QztBQUNBO0FBQ0EsK0NBQStDLDRDQUFHLElBQUk7O0FBRXREO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBOztBQUVBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxTQUFTLHNEQUFTO0FBQ2xCOztBQUVBLGlFQUFlLEVBQUUsRTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJjOztBQUUvQjtBQUNBLHFDQUFxQyxtREFBVTtBQUMvQzs7QUFFQSxpRUFBZSxRQUFRLEU7Ozs7OztVQ052QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xvQztBQUNvQjtBQUNGO0FBQ2hCO0FBQ2dCO0FBRThCO0FBQzNDO0FBRXpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0RBQWtCLEVBQUUsQ0FBQztBQUdqQyxJQUFNLGFBQWEsR0FBVyxDQUFDLEVBQUMsMkVBQTJFO0FBRTNHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDcEMsMEVBQTJCLENBQUMsQ0FBQyxDQUFDLEdBQUcsd0VBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7Q0FDbkU7QUFFRCw0RUFBNkIsQ0FBRSxJQUFJLGtEQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzlELDRFQUE2QixDQUFFLElBQUksa0RBQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDOUQsdURBQWdCLEVBQUU7QUFFbEIscUVBQWtCLEVBQUUsQ0FBQztBQUNyQixtR0FBNEIsRUFBRTtBQUk5QixFQUFFO0FBQ0YsNERBQTREO0FBQzVELGlDQUFpQztBQUNqQyxhQUFhO0FBQ2IsRUFBRTtBQUNGLHVDQUF1QztBQUN2Qyx5QkFBeUI7QUFDekIsaUNBQWlDO0FBQ2pDLGlCQUFpQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi9vYnNlcnZlci9JT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBJT2JzZXJ2YWJsZUNsYXNzIH0gZnJvbSBcIi4uL29ic2VydmVyL0lPYnNlcnZhYmxlQ2xhc3NcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi9vYnNlcnZlci9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IElBY3Rpb24gfSBmcm9tIFwiLi9JQWN0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5RG93bkFjdGlvbiBpbXBsZW1lbnRzIElBY3Rpb257XHJcblxyXG4gICAgc3RhdGljIG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PiA9IG5ldyBPYnNlcnZhYmxlPGFueT4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cCgpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3RpZnlEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogZXZlbnQua2V5XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgS2V5RG93bkFjdGlvbi5vYnNlcnZhYmxlLm5vdGlmeShub3RpZnlEYXRhKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vdGlmeURhdGEpXHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSUFjdGlvbiB9IGZyb20gXCIuL0lBY3Rpb25cIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi9vYnNlcnZlci9PYnNlcnZhYmxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTW91c2VQb3NpdGlvbkFjdGlvbiBpbXBsZW1lbnRzIElBY3Rpb24ge1xyXG4gICAgc3RhdGljIG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PiA9IG5ldyBPYnNlcnZhYmxlPGFueT4oKTtcclxuICAgIHN0YXRpYyBtb3VzZU1vdmVEYXRhOiBJTW91c2VQb3NpdGlvbkRhdGEgPSB7eDogMCwgeTogMH07XHJcbiAgICBwcml2YXRlIFVQREFURV9ERUxBWV9NUyA9IDMwMDtcclxuXHJcbiAgICBzZXR1cCgpOiBhbnkge1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdXNlTW92ZURhdGE6IElNb3VzZVBvc2l0aW9uRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIHg6IGV2ZW50LnBhZ2VYLFxyXG4gICAgICAgICAgICAgICAgeTogZXZlbnQucGFnZVksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgTW91c2VQb3NpdGlvbkFjdGlvbi5tb3VzZU1vdmVEYXRhID0gbW91c2VNb3ZlRGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoY2hlY2tfY3Vyc29yLCB0aGlzLlVQREFURV9ERUxBWV9NUyk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrX2N1cnNvcigpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coTW91c2VQb3NpdGlvbkFjdGlvbi5tb3VzZU1vdmVEYXRhKVxyXG4gICAgICAgICAgICBNb3VzZVBvc2l0aW9uQWN0aW9uLm9ic2VydmFibGUubm90aWZ5KE1vdXNlUG9zaXRpb25BY3Rpb24ubW91c2VNb3ZlRGF0YSwgXCJNb3VzZVBvc2l0aW9uXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1vdXNlUG9zaXRpb25EYXRhIHtcclxuICAgIHg6IG51bWJlcixcclxuICAgIHk6IG51bWJlclxyXG59XHJcbiIsImltcG9ydCB7IElBY3Rpb24gfSBmcm9tIFwiLi9JQWN0aW9uXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi4vb2JzZXJ2ZXIvT2JzZXJ2YWJsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdXNlUHJlc3NBY3Rpb24gaW1wbGVtZW50cyBJQWN0aW9uIHtcclxuICAgIHN0YXRpYyBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPE1vdXNlRXZlbnQ+ID0gbmV3IE9ic2VydmFibGU8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgICBzZXR1cCgpOiBhbnkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudClcclxuICAgICAgICAgICAgTW91c2VQcmVzc0FjdGlvbi5vYnNlcnZhYmxlLm5vdGlmeShldmVudCwgXCJNb3VzZVByZXNzQWN0aW9uXCIpXHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTW91c2VQcmVzc0FjdGlvbiBleHRlbmRzIE1vdXNlRXZlbnQge31cclxuIiwiaW1wb3J0IHsgSUFjdGlvbiB9IGZyb20gXCIuL0lBY3Rpb25cIjtcclxuaW1wb3J0IHsgS2V5RG93bkFjdGlvbiB9IGZyb20gXCIuL0tleURvd25BY3Rpb25cIjtcclxuaW1wb3J0IHsgTW91c2VQcmVzc0FjdGlvbiB9IGZyb20gXCIuL01vdXNlUHJlc3NBY3Rpb25cIjtcclxuaW1wb3J0IHsgTW91c2VQb3NpdGlvbkFjdGlvbiB9IGZyb20gXCIuL01vdXNlUG9zaXRpb25BY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXR1cEFjdGlvbnMge1xyXG4gICAgc3RhdGljIGFjdGlvbnM6IElBY3Rpb25bXSA9IFtcclxuICAgICAgICBuZXcgS2V5RG93bkFjdGlvbigpLFxyXG4gICAgICAgIG5ldyBNb3VzZVByZXNzQWN0aW9uKCksXHJcbiAgICAgICAgbmV3IE1vdXNlUG9zaXRpb25BY3Rpb24oKVxyXG4gICAgXVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBzZXR1cCgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGFjdGlvbiBvZiB0aGlzLmFjdGlvbnMpIHtcclxuICAgICAgICAgICAgYXdhaXQgYWN0aW9uLnNldHVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IElBY3Rpb24gfSBmcm9tIFwiLi4vSUFjdGlvblwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcIi4uLy4uL29ic2VydmVyL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRW50aXR5UmVwb3NpdG9yeSB9IGZyb20gXCIuLi8uLi9FbnRpdHlSZXBvc2l0b3J5XCI7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uLy4uL1V0aWxzXCI7XHJcbmltcG9ydCB7IEJ1bGxldCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvQnVsbGV0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlzaW9uQWN0aW9ucyBpbXBsZW1lbnRzIElBY3Rpb24ge1xyXG4gICAgc3RhdGljIG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PiA9IG5ldyBPYnNlcnZhYmxlPGFueT4oKTtcclxuXHJcbiAgICBzZXR1cCgpOiBhbnkge1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjYWxjdWxhdGUoKSB7XHJcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coXCJpdHR0XCIpXHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBFbnRpdHlSZXBvc2l0b3J5LmJ1bGxldHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgRW50aXR5UmVwb3NpdG9yeS5idWxsZXRzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoRW50aXR5UmVwb3NpdG9yeS5idWxsZXRzW2ldID09PSBFbnRpdHlSZXBvc2l0b3J5LmJ1bGxldHNbal0pIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJvdHRcIilcclxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gVXRpbHMuZGlzdGFuY2UoRW50aXR5UmVwb3NpdG9yeS5idWxsZXRzW2ldLngsIEVudGl0eVJlcG9zaXRvcnkuYnVsbGV0c1tpXS55LCBFbnRpdHlSZXBvc2l0b3J5LmJ1bGxldHNbal0ueCwgRW50aXR5UmVwb3NpdG9yeS5idWxsZXRzW2pdLnkpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5idWxsZXRDb2xsaXNpb25FdmVudChFbnRpdHlSZXBvc2l0b3J5LmJ1bGxldHNbaV0sIEVudGl0eVJlcG9zaXRvcnkuYnVsbGV0c1tqXSwgZGlzdGFuY2UpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBidWxsZXRDb2xsaXNpb25FdmVudChidWxsZXQxOiBCdWxsZXQsIGJ1bGxldDI6IEJ1bGxldCwgZGlzdGFuY2U6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJ1bGxldDEucmFkaXVzICsgYnVsbGV0Mi5yYWRpdXMsIGRpc3RhbmNlKVxyXG4gICAgICAgIGlmIChidWxsZXQxLnJhZGl1cyArIGJ1bGxldDIucmFkaXVzIDw9IGRpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1bGxldDEucmFkaXVzICsgYnVsbGV0Mi5yYWRpdXMsIGRpc3RhbmNlKVxyXG4gICAgICAgICAgICAvLyBDb2xsaXNpb25BY3Rpb25zLm9ic2VydmFibGUubm90aWZ5KHtidWxsZXQxLCBidWxsZXQyfSwgXCJjb2xsaXNpb25cIilcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2xsaXNpb24uLi4uLi4uLi4uLi4uLi4uXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRW50aXR5UmVwb3NpdG9yeSB9IGZyb20gXCIuL0VudGl0eVJlcG9zaXRvcnlcIjtcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuL0NvbnRleHRcIjtcclxuaW1wb3J0IHsgQ29sbGlzaW9uQWN0aW9ucyB9IGZyb20gXCIuL0FjdGlvbnMvZ2xvYmFsQWN0aW9ucy9Db2xsaXNpb25BY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFuaW1hdGUoKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKEFuaW1hdG9yLmFuaW1hdGUpOyAvL2luZmluaXRlIGxvb3BcclxuXHJcbiAgICAgICAgQ29udGV4dC5jdHguY2xlYXJSZWN0KDAsIDAsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0KTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBFbnRpdHlSZXBvc2l0b3J5LmFsbENpcmN1aXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgRW50aXR5UmVwb3NpdG9yeS5hbGxDaXJjdWl0W2ldLnVwZGF0ZShDb250ZXh0LmN0eCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEVudGl0eVJlcG9zaXRvcnkucGxheWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBFbnRpdHlSZXBvc2l0b3J5LnBsYXllcnNbaV0udXBkYXRlQ3R4KENvbnRleHQuY3R4KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEVudGl0eVJlcG9zaXRvcnkuYnVsbGV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBFbnRpdHlSZXBvc2l0b3J5LmJ1bGxldHNbaV0udXBkYXRlQ3R4KENvbnRleHQuY3R4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbGxpc2lvbkFjdGlvbnMuY2FsY3VsYXRlKClcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IElDb2xsaXNpb25IYW5kbGVyIH0gZnJvbSBcIi4vSUNvbGxpc2lvbkhhbmRsZXJcIjtcclxuaW1wb3J0IHsgQ29sbGlzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9BY3Rpb25zL2dsb2JhbEFjdGlvbnMvQ29sbGlzaW9uQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBJT2JzZXJ2ZXIgfSBmcm9tIFwiLi4vb2JzZXJ2ZXIvSU9ic2VydmVyXCI7XHJcbmltcG9ydCB7IEVudGl0eVJlcG9zaXRvcnkgfSBmcm9tIFwiLi4vRW50aXR5UmVwb3NpdG9yeVwiO1xyXG5pbXBvcnQgeyBCdWxsZXQgfSBmcm9tIFwiLi4vbW9kZWxzL0J1bGxldFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1bGxldENvbGxpc2lvbiBpbXBsZW1lbnRzIElDb2xsaXNpb25IYW5kbGVyLCBJT2JzZXJ2ZXI8YW55PiB7XHJcblxyXG4gICAgaGFuZGxlQ29sbGlzaW9uKCk6IGFueSB7XHJcbiAgICAgICAgQ29sbGlzaW9uQWN0aW9ucy5vYnNlcnZhYmxlLmFkZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkYXRhOiBhbnksIGNoYW5uZWw/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2hhbm5lbCA9PSBcImJ1bGxldF9jb2xsaXNpb25cIikge1xyXG4gICAgICAgICAgICBjb25zdCBidWxsZXRzOiBCdWxsZXRDb2xsaXNpb25EYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgRW50aXR5UmVwb3NpdG9yeS5idWxsZXRzID0gRW50aXR5UmVwb3NpdG9yeS5idWxsZXRzLmZpbHRlcigoYnVsbGV0OiBCdWxsZXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChidWxsZXQgPT09IGJ1bGxldHMuYjEgfHwgYnVsbGV0ID09PSBidWxsZXRzLmIyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCdWxsZXRDb2xsaXNpb25EYXRhIHtcclxuICAgIGIxOiBCdWxsZXQsXHJcbiAgICBiMjogQnVsbGV0XHJcbn1cclxuIiwiaW1wb3J0IHsgSUNvbGxpc2lvbkhhbmRsZXIgfSBmcm9tIFwiLi9JQ29sbGlzaW9uSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBDb2xsaXNpb25BY3Rpb25zIH0gZnJvbSBcIi4uL0FjdGlvbnMvZ2xvYmFsQWN0aW9ucy9Db2xsaXNpb25BY3Rpb25zXCI7XHJcbmltcG9ydCB7IElPYnNlcnZlciB9IGZyb20gXCIuLi9vYnNlcnZlci9JT2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHsgRW50aXR5UmVwb3NpdG9yeSB9IGZyb20gXCIuLi9FbnRpdHlSZXBvc2l0b3J5XCI7XHJcbmltcG9ydCB7IEJ1bGxldCB9IGZyb20gXCIuLi9tb2RlbHMvQnVsbGV0XCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9tb2RlbHMvUGxheWVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQnVsbGV0UGxheWVyQ29sbGlzaW9uIGltcGxlbWVudHMgSUNvbGxpc2lvbkhhbmRsZXIsIElPYnNlcnZlcjxhbnk+IHtcclxuXHJcbiAgICBoYW5kbGVDb2xsaXNpb24oKTogYW55IHtcclxuICAgICAgICBDb2xsaXNpb25BY3Rpb25zLm9ic2VydmFibGUuYWRkKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRhdGE6IGFueSwgY2hhbm5lbD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjaGFubmVsID09IFwiYnVsbGV0X3BsYXllcl9jb2xsaXNpb25cIikge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xsaXNpb25FbnRpdGllczogQnVsbGV0UGxheWVyQ29sbGlzaW9uRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGxheWVyIG9mIEVudGl0eVJlcG9zaXRvcnkucGxheWVycykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllciA9PT0gY29sbGlzaW9uRW50aXRpZXMucGxheWVyICYmIGNvbGxpc2lvbkVudGl0aWVzLmJ1bGxldC5wbGF5ZXJJZCAhPSBwbGF5ZXIuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5yYWRpdXMrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgRW50aXR5UmVwb3NpdG9yeS5idWxsZXRzID0gRW50aXR5UmVwb3NpdG9yeS5idWxsZXRzLmZpbHRlcigoYnVsbGV0OiBCdWxsZXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggYnVsbGV0ID09PSBjb2xsaXNpb25FbnRpdGllcy5idWxsZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJ1bGxldFBsYXllckNvbGxpc2lvbkRhdGEge1xyXG4gICAgcGxheWVyOiBQbGF5ZXIsXHJcbiAgICBidWxsZXQ6IEJ1bGxldFxyXG59XHJcbiIsImltcG9ydCB7IElDb2xsaXNpb25IYW5kbGVyIH0gZnJvbSBcIi4vSUNvbGxpc2lvbkhhbmRsZXJcIjtcclxuaW1wb3J0IHsgQnVsbGV0Q29sbGlzaW9uIH0gZnJvbSBcIi4vQnVsbGV0Q29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IEJ1bGxldFBsYXllckNvbGxpc2lvbiB9IGZyb20gXCIuL0J1bGxldFBsYXllckNvbGxpc2lvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNldHVwQ29sbGlzaW9uSGFuZGxlcnMge1xyXG4gICAgc3RhdGljIGhhbmRsZXJzOiBJQ29sbGlzaW9uSGFuZGxlcltdID0gW1xyXG4gICAgICAgIG5ldyBCdWxsZXRDb2xsaXNpb24oKSxcclxuICAgICAgICBuZXcgQnVsbGV0UGxheWVyQ29sbGlzaW9uKClcclxuICAgIF1cclxuXHJcbiAgICBzdGF0aWMgc2V0dXAoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBoYW5kbGVyIG9mIHRoaXMuaGFuZGxlcnMpIHtcclxuICAgICAgICAgICAgaGFuZGxlci5oYW5kbGVDb2xsaXNpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENvbnRleHQge1xyXG4gICAgc3RhdGljIGN0eDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb250ZXh0KCk6IEhUTUxDYW52YXNFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBpbmRleDogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUNhbnZhc1wiKTtcclxuICAgICAgICBpbmRleC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGluZGV4LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgY3R4ID0gIGluZGV4LmdldENvbnRleHQoJzJkJylcclxuXHJcbiAgICAgICAgaWYgKCFjdHgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGdldCBjb250ZXh0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgcmV0dXJuIGN0eDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IEJ1bGxldCB9IGZyb20gXCIuL21vZGVscy9CdWxsZXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbnRpdHlSZXBvc2l0b3J5IHtcclxuICAgIHN0YXRpYyBhbGxDaXJjdWl0OiBhbnkgPSBbXTtcclxuICAgIHN0YXRpYyBwbGF5ZXJzOiBQbGF5ZXJbXSA9IFtdO1xyXG4gICAgc3RhdGljIGJ1bGxldHM6IEJ1bGxldFtdID0gW11cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVXRpbHMge1xyXG5cclxuICAgIHN0YXRpYyB2ZWN0b3IoeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB7ZHg6IHgyIC0geDEsIGR5OiB5MiAtIHkxfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkaXN0YW5jZSh4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCggTWF0aC5wb3coKHgyLXgxKSwgMikgKyBNYXRoLnBvdygoeTIteTEpLCAyKSApO1xyXG4gICAgICAgIC8vIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coKHgxIC0geDIpLCAyKSArIE1hdGgucG93KCh5MSAtIHkyKSwgMikpXHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENpcmNsZSB9IGZyb20gXCIuLi9tb2RlbHMvQ2lyY2xlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2lyY2xlRmFjdG9yeSB7XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZSh0eXBlOiBzdHJpbmcgfCBcInJhbmRvbVwiLCBzcGVlZCA9IDEwKTogQ2lyY2xlIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInJhbmRvbVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmFuZG9tQ2lyY3VpdChzcGVlZClcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGNyZWF0ZSBjaXJjdWl0OiAke3R5cGV9YClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZVJhbmRvbUNpcmN1aXQobWF4U3BlZWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB4OiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpICogd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgbGV0IHk6IG51bWJlciA9IE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgcmFkaXVzOiBudW1iZXIgPSAzMDtcclxuXHJcbiAgICAgICAgLy9zdGFydCByYW5kb20gZGlyZWN0aW9uIGFuZCBzcGVlZFxyXG4gICAgICAgIGNvbnN0IGR4ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogbWF4U3BlZWQ7XHJcbiAgICAgICAgY29uc3QgZHkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBtYXhTcGVlZDtcclxuXHJcbiAgICAgICAgLy9pZiB0aGUgY2lyY3VpdCBub3QgZnVsbHkgaW4gdGhlIGJyb3dzZXJcclxuICAgICAgICBpZiAoeCA8IDAgKyByYWRpdXMpIHtcclxuICAgICAgICAgICAgeCA9IDAgKyByYWRpdXM7XHJcbiAgICAgICAgfSBlbHNlIGlmICh4ID4gaW5uZXJXaWR0aCAtIHJhZGl1cykge1xyXG4gICAgICAgICAgICB4ID0gaW5uZXJXaWR0aCAtIHJhZGl1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh5IDwgMCArIHJhZGl1cykge1xyXG4gICAgICAgICAgICB5ID0gMCArIHJhZGl1cztcclxuICAgICAgICB9IGVsc2UgaWYgKHkgPiBpbm5lckhlaWdodCAtIHJhZGl1cykge1xyXG4gICAgICAgICAgICB5ID0gaW5uZXJIZWlnaHQgLSByYWRpdXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IENpcmNsZSh4LCB5LCBkeCwgZHksIHJhZGl1cylcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbnRpdHlSZXBvc2l0b3J5IH0gZnJvbSBcIi4uL0VudGl0eVJlcG9zaXRvcnlcIjtcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgQ29sbGlzaW9uQWN0aW9ucyB9IGZyb20gXCIuLi9BY3Rpb25zL2dsb2JhbEFjdGlvbnMvQ29sbGlzaW9uQWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1bGxldCB7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG4gICAgY29sb3JzOiBhbnkgPSBbJ2JsdWUnLCAncmVkJywgJ2dyZWVuJywgJ2JsYWNrJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHg6IGFueSwgcHVibGljIHk6IGFueSwgcHJpdmF0ZSBkeDogYW55LCBwcml2YXRlIGR5OiBhbnksIHB1YmxpYyByYWRpdXM6IG51bWJlciwgcHVibGljIHBsYXllcklkOiBzdHJpbmcsIHByaXZhdGUgbGl2ZVRpbWU6IG51bWJlciA9IDUwMDApIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5jb2xvcnNbdGhpcy5nZXRSYW5kb21Db2xvckluZGV4KCldO1xyXG4gICAgICAgIHRoaXMuc2V0TGl2ZVRpbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMaXZlVGltZSgpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgRW50aXR5UmVwb3NpdG9yeS5idWxsZXRzID0gRW50aXR5UmVwb3NpdG9yeS5idWxsZXRzLmZpbHRlcigoYnVsbGV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVsbGV0ID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sIHRoaXMubGl2ZVRpbWUpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFuZG9tQ29sb3JJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNvbG9ycy5sZW5ndGgpXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGVDdHgoY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IGlubmVyV2lkdGggLSB0aGlzLnJhZGl1cyB8fCB0aGlzLnggPCAwICsgdGhpcy5yYWRpdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5keCA9IC10aGlzLmR4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy55ID4gaW5uZXJIZWlnaHQgLSB0aGlzLnJhZGl1cyB8fCB0aGlzLnkgPCAwICsgdGhpcy5yYWRpdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5keSA9IC10aGlzLmR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy54ICsgdGhpcy5keDtcclxuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLmR5O1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVDb2xsaXNpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3KGNvbnRleHQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVDb2xsaXNpb24oKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBidWxsZXQgb2YgRW50aXR5UmVwb3NpdG9yeS5idWxsZXRzKSB7XHJcbiAgICAgICAgICAgIGlmIChidWxsZXQgPT09IHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBVdGlscy5kaXN0YW5jZSh0aGlzLngsIHRoaXMueSwgYnVsbGV0LngsIGJ1bGxldC55KTtcclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDw9IChidWxsZXQucmFkaXVzICsgdGhpcy5yYWRpdXMpICYmIGJ1bGxldC5wbGF5ZXJJZCAhPSB0aGlzLnBsYXllcklkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkaXN0YW5jZSwgYnVsbGV0LnJhZGl1cywgdGhpcy5yYWRpdXMpXHJcbiAgICAgICAgICAgICAgICBDb2xsaXNpb25BY3Rpb25zLm9ic2VydmFibGUubm90aWZ5KHtiMTogdGhpcywgYjI6IGJ1bGxldH0sIFwiYnVsbGV0X2NvbGxpc2lvblwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIENpcmNsZSB7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG4gICAgY29sb3JzOiBhbnkgPSBbJ2JsdWUnLCAncmVkJywgJ2dyZWVuJywgJ2JsYWNrJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB4OiBhbnksIHByaXZhdGUgeTogYW55LCBwcml2YXRlIGR4OiBhbnksIHByaXZhdGUgZHk6IGFueSwgcHJpdmF0ZSByYWRpdXM6IGFueSkge1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmNvbG9yc1t0aGlzLmdldFJhbmRvbUNvbG9ySW5kZXgoKV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFuZG9tQ29sb3JJbmRleCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNvbG9ycy5sZW5ndGgpXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGNvbnRleHQuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUoY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IGlubmVyV2lkdGggLSB0aGlzLnJhZGl1cyB8fCB0aGlzLnggPCAwICsgdGhpcy5yYWRpdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5keCA9IC10aGlzLmR4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy55ID4gaW5uZXJIZWlnaHQgLSB0aGlzLnJhZGl1cyB8fCB0aGlzLnkgPCAwICsgdGhpcy5yYWRpdXMpIHtcclxuICAgICAgICAgICAgdGhpcy5keSA9IC10aGlzLmR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy54ICsgdGhpcy5keDtcclxuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLmR5O1xyXG5cclxuICAgICAgICB0aGlzLmRyYXcoY29udGV4dCk7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IElNb3VzZVByZXNzQWN0aW9uLCBNb3VzZVByZXNzQWN0aW9uIH0gZnJvbSBcIi4uL0FjdGlvbnMvTW91c2VQcmVzc0FjdGlvblwiO1xyXG5pbXBvcnQgeyBJT2JzZXJ2ZXIgfSBmcm9tIFwiLi4vb2JzZXJ2ZXIvSU9ic2VydmVyXCI7XHJcbmltcG9ydCB7IElNb3VzZVBvc2l0aW9uRGF0YSwgTW91c2VQb3NpdGlvbkFjdGlvbiB9IGZyb20gXCIuLi9BY3Rpb25zL01vdXNlUG9zaXRpb25BY3Rpb25cIjtcclxuaW1wb3J0IHsgQnVsbGV0RmFjdG9yeSB9IGZyb20gXCIuLi9mYWN0b3J5L0J1bGxldEZhY3RvcnlcIjtcclxuaW1wb3J0IHsgRW50aXR5UmVwb3NpdG9yeSB9IGZyb20gXCIuLi9FbnRpdHlSZXBvc2l0b3J5XCI7XHJcbmltcG9ydCB7IEJ1bGxldCB9IGZyb20gXCIuL0J1bGxldFwiO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi9VdGlsc1wiO1xyXG5pbXBvcnQgeyBDb2xsaXNpb25BY3Rpb25zIH0gZnJvbSBcIi4uL0FjdGlvbnMvZ2xvYmFsQWN0aW9ucy9Db2xsaXNpb25BY3Rpb25zXCI7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBpbXBsZW1lbnRzIElPYnNlcnZlcjxhbnk+IHtcclxuICAgIGlkOiBzdHJpbmcgPSB1dWlkdjQoKTtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBjb2xvcnM6IGFueSA9IFsnYmx1ZScsICdyZWQnLCAnZ3JlZW4nLCAnYmxhY2snXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHg6IGFueSwgcHJpdmF0ZSB5OiBhbnksIHByaXZhdGUgZHg6IGFueSwgcHJpdmF0ZSBkeTogYW55LCBwdWJsaWMgcmFkaXVzOiBhbnkpIHtcclxuICAgICAgICBDb2xsaXNpb25BY3Rpb25zLm9ic2VydmFibGUuYWRkKHRoaXMpO1xyXG4gICAgICAgIE1vdXNlUHJlc3NBY3Rpb24ub2JzZXJ2YWJsZS5hZGQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuY29sb3JzW3RoaXMuZ2V0UmFuZG9tQ29sb3JJbmRleCgpXTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGF0YTogYW55LCBjaGFubmVsPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2hhbm5lbClcclxuICAgICAgICBzd2l0Y2ggKGNoYW5uZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAnTW91c2VQb3NpdGlvbic6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb3VzZVBvc2l0aW9uOiBJTW91c2VQb3NpdGlvbkRhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIGFjdGlvbiA6IFwiLCBtb3VzZVBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ01vdXNlUHJlc3NBY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbW91c2VQcmVzc0FjdGlvbjogSU1vdXNlUHJlc3NBY3Rpb24gPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5yYWRpdXMrK1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVjdG9yID0gVXRpbHMudmVjdG9yKHRoaXMueCwgdGhpcy55LCBtb3VzZVByZXNzQWN0aW9uLmNsaWVudFgsIG1vdXNlUHJlc3NBY3Rpb24uY2xpZW50WSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZlY3RvcilcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IFV0aWxzLmRpc3RhbmNlKHRoaXMueCwgdGhpcy55LCBtb3VzZVByZXNzQWN0aW9uLmNsaWVudFgsIG1vdXNlUHJlc3NBY3Rpb24uY2xpZW50WSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpc3RhbmNlIFwiLCBkaXN0YW5jZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvb3QodmVjdG9yLmR4ICogMC4wMSwgdmVjdG9yLmR5ICogMC4wMSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIGFjdGlvbiA6IFwiLCBtb3VzZVByZXNzQWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21Db2xvckluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRoaXMuY29sb3JzLmxlbmd0aClcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY29udGV4dC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZUN0eChjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy54ID4gaW5uZXJXaWR0aCAtIHRoaXMucmFkaXVzIHx8IHRoaXMueCA8IDAgKyB0aGlzLnJhZGl1cykge1xyXG4gICAgICAgICAgICB0aGlzLmR4ID0gLXRoaXMuZHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnkgPiBpbm5lckhlaWdodCAtIHRoaXMucmFkaXVzIHx8IHRoaXMueSA8IDAgKyB0aGlzLnJhZGl1cykge1xyXG4gICAgICAgICAgICB0aGlzLmR5ID0gLXRoaXMuZHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnggPSB0aGlzLnggKyB0aGlzLmR4O1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMueSArIHRoaXMuZHk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKE1vdXNlUG9zaXRpb25BY3Rpb24ubW91c2VNb3ZlRGF0YSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhVdGlscy5kaXN0YW5jZSh0aGlzLngsIHRoaXMueSwgTW91c2VQb3NpdGlvbkFjdGlvbi5tb3VzZU1vdmVEYXRhLngsIE1vdXNlUG9zaXRpb25BY3Rpb24ubW91c2VNb3ZlRGF0YS55KSlcclxuXHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVDb2xsaXNpb24oKTtcclxuICAgICAgICB0aGlzLmRyYXcoY29udGV4dCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob290KGR4OiBudW1iZXIsIGR5OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkaXN0YW5jZWVlZWVlZWVlZWVlZWVlZVwiLCBVdGlscy5kaXN0YW5jZSh0aGlzLngsIHRoaXMueSwgTW91c2VQb3NpdGlvbkFjdGlvbi5tb3VzZU1vdmVEYXRhLngsIE1vdXNlUG9zaXRpb25BY3Rpb24ubW91c2VNb3ZlRGF0YS55KSwgXCJyYWRpdXNcIiwgdGhpcy5yYWRpdXMpXHJcbiAgICAgICAgY29uc3QgYnVsbGV0ID0gbmV3IEJ1bGxldCh0aGlzLngsIHRoaXMueSwgZHgsIGR5LCAzMywgdGhpcy5pZClcclxuICAgICAgICBFbnRpdHlSZXBvc2l0b3J5LmJ1bGxldHMucHVzaChidWxsZXQpXHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlQ29sbGlzaW9uKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgYnVsbGV0IG9mIEVudGl0eVJlcG9zaXRvcnkuYnVsbGV0cykge1xyXG4gICAgICAgICAgICBpZiAoYnVsbGV0LnBsYXllcklkID09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBVdGlscy5kaXN0YW5jZSh0aGlzLngsIHRoaXMueSwgYnVsbGV0LngsIGJ1bGxldC55KTtcclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDw9IChidWxsZXQucmFkaXVzICsgdGhpcy5yYWRpdXMpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkaXN0YW5jZSwgYnVsbGV0LnJhZGl1cywgdGhpcy5yYWRpdXMpXHJcbiAgICAgICAgICAgICAgICBDb2xsaXNpb25BY3Rpb25zLm9ic2VydmFibGUubm90aWZ5KHtwbGF5ZXI6IHRoaXMsIGJ1bGxldDogYnVsbGV0fSwgXCJidWxsZXRfcGxheWVyX2NvbGxpc2lvblwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7SU9ic2VydmVyfSBmcm9tIFwiLi9JT2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtJT2JzZXJ2YWJsZX0gZnJvbSBcIi4vSU9ic2VydmFibGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPYnNlcnZhYmxlPFQ+IGltcGxlbWVudHMgSU9ic2VydmFibGU8VD4ge1xyXG4gICAgb2JzZXJ2ZXJzOiBJT2JzZXJ2ZXI8VD5bXSA9IFtdO1xyXG5cclxuICAgIGFkZChvYnNlcnZlcjogSU9ic2VydmVyPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKG9ic2VydmVyOiBJT2JzZXJ2ZXI8VD4pIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzLmZpbHRlcigobzogSU9ic2VydmVyPFQ+KSA9PiBvICE9PSBvYnNlcnZlcik7XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5KGRhdGE6IFQsIGNoYW5uZWw6IHN0cmluZyA9ICdkZWZhdWx0Jykge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmZvckVhY2goKG9ic2VydmVyOiBJT2JzZXJ2ZXI8VD4pID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudXBkYXRlKGRhdGEsIGNoYW5uZWwpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ2lyY2xlIH0gZnJvbSBcIi4vbW9kZWxzL0NpcmNsZVwiO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBDaXJjbGVGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeS9DaXJjbGVGYWN0b3J5XCI7XHJcbmltcG9ydCB7IEVudGl0eVJlcG9zaXRvcnkgfSBmcm9tIFwiLi9FbnRpdHlSZXBvc2l0b3J5XCI7XHJcbmltcG9ydCB7IEFuaW1hdG9yIH0gZnJvbSBcIi4vQW5pbWF0b3JcIjtcclxuaW1wb3J0IHsgU2V0dXBBY3Rpb25zIH0gZnJvbSBcIi4vQWN0aW9ucy9TZXR1cEFjdGlvbnNcIjtcclxuaW1wb3J0IHsgUGxheWVyRmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnkvUGxheWVyRmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBTZXR1cENvbGxpc2lvbkhhbmRsZXJzIH0gZnJvbSBcIi4vQ29sbGlzaW9uSGFuZGxlcnMvU2V0dXBDb2xsaXNpb25IYW5kbGVyc1wiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9tb2RlbHMvUGxheWVyXCI7XHJcblxyXG5jb25zb2xlLmxvZyhDb250ZXh0LmdldENvbnRleHQoKSlcclxuXHJcblxyXG5jb25zdCBjaXJjdWl0TnVtYmVyOiBudW1iZXIgPSA0IC8vTnVtYmVyLnBhcnNlSW50KHByb21wdChcIlBsZWFzZSBlbnRlciB0aGUgY2lyY3VpdHMgbnVtYmVyXCIsIFwiNTBcIikpIHx8IDExIDtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgY2lyY3VpdE51bWJlcjsgaSsrKSB7XHJcbiAgICBFbnRpdHlSZXBvc2l0b3J5LmFsbENpcmN1aXRbaV0gPSBDaXJjbGVGYWN0b3J5LmNyZWF0ZShcInJhbmRvbVwiKTtcclxufVxyXG5cclxuRW50aXR5UmVwb3NpdG9yeS5wbGF5ZXJzLnB1c2goIG5ldyBQbGF5ZXIoMjAwLCAyMDAsIDAsIDAsIDUwKSlcclxuRW50aXR5UmVwb3NpdG9yeS5wbGF5ZXJzLnB1c2goIG5ldyBQbGF5ZXIoNDAwLCA0MDAsIDAsIDAsIDUwKSlcclxuQW5pbWF0b3IuYW5pbWF0ZSgpXHJcblxyXG5TZXR1cEFjdGlvbnMuc2V0dXAoKTtcclxuU2V0dXBDb2xsaXNpb25IYW5kbGVycy5zZXR1cCgpXHJcblxyXG5cclxuXHJcbi8vXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4vLyAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcclxuLy8gfSwgZmFsc2UpO1xyXG4vL1xyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJyxcclxuLy8gICAgIGZ1bmN0aW9uIChldmVudCkge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmtleSlcclxuLy8gICAgIH0sIGZhbHNlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==