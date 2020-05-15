"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("@babel/polyfill/noConflict");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Impulsor = /*#__PURE__*/function () {
  function Impulsor(adspaceId, token) {
    _classCallCheck(this, Impulsor);

    this.adspaceId = adspaceId;
    this.token = token;
    this.api = "http://api.impulsor.me/public/";
  }

  _createClass(Impulsor, [{
    key: "campaigns",
    value: function () {
      var _campaigns = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var offset,
            limit,
            buffer,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                offset = _args.length > 0 && _args[0] !== undefined ? _args[0] : 0;
                limit = _args.length > 1 && _args[1] !== undefined ? _args[1] : 100;
                _context.next = 4;
                return _axios["default"].get("".concat(this.api, "campaigns?token=").concat(this.token, "&limit=").concat(limit, "&skip=").concat(offset));

              case 4:
                buffer = _context.sent;
                return _context.abrupt("return", buffer.data);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function campaigns() {
        return _campaigns.apply(this, arguments);
      }

      return campaigns;
    }()
  }, {
    key: "coupons",
    value: function () {
      var _coupons = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(offset, limit) {
        var buffer;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _axios["default"].get("".concat(this.api, "coupons?token=").concat(this.token, "&limit=").concat(limit, "&skip=").concat(offset));

              case 2:
                buffer = _context2.sent;
                return _context2.abrupt("return", buffer.data);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function coupons(_x, _x2) {
        return _coupons.apply(this, arguments);
      }

      return coupons;
    }()
  }, {
    key: "banners",
    value: function () {
      var _banners = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(offset, limit) {
        var buffer;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _axios["default"].get("".concat(this.api, "banners?token=").concat(this.token, "&limit=").concat(limit, "&skip=").concat(offset));

              case 2:
                buffer = _context3.sent;
                return _context3.abrupt("return", buffer.data);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function banners(_x3, _x4) {
        return _banners.apply(this, arguments);
      }

      return banners;
    }()
  }, {
    key: "deeplink",
    value: function () {
      var _deeplink = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(url) {
        var buffer;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _axios["default"].get("".concat(this.api, "deeplink?token=").concat(this.token, "&adspace=").concat(this.adspaceId, "&url=").concat(decodeURIComponent(url)));

              case 2:
                buffer = _context4.sent;
                return _context4.abrupt("return", buffer.data);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deeplink(_x5) {
        return _deeplink.apply(this, arguments);
      }

      return deeplink;
    }()
  }]);

  return Impulsor;
}();

exports["default"] = Impulsor;
//# sourceMappingURL=index.js.map