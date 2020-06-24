"use strict";

require("@babel/polyfill/noConflict");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var impulsor = new _index["default"]("AdspaceID", "Token");

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var campaigns, coupons, deeplink;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return impulsor.campaigns();

        case 2:
          campaigns = _context.sent;
          console.log(campaigns); //Coupons

          _context.next = 6;
          return impulsor.coupons(20, 0, 1000);

        case 6:
          coupons = _context.sent;
          console.log(coupons); //Deeplink

          _context.next = 10;
          return impulsor.deeplink("https://www.eletrum.com.br", "<Encurtador>");

        case 10:
          deeplink = _context.sent;
          console.log(deeplink);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();
//# sourceMappingURL=sample.js.map