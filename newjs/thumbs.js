'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _praiseButton = require('./praiseButton.js');

var _praiseButton2 = _interopRequireDefault(_praiseButton);

var _jquery = require('../node_modules/jquery/dist/jquery.js');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var num = 0;

var Thumbs = function (_PraiseButton) {
    _inherits(Thumbs, _PraiseButton);

    function Thumbs(id) {
        _classCallCheck(this, Thumbs);

        var _this2 = _possibleConstructorReturn(this, (Thumbs.__proto__ || Object.getPrototypeOf(Thumbs)).call(this));

        _this2.id = id;
        _this2.dom = null;
        _this2.init();
        return _this2;
    }

    _createClass(Thumbs, [{
        key: 'init',
        value: function init() {
            var _this = this;
            this.dom = document.querySelector('#' + _this.id);
            var content = '\n            <div class="hand-wrap">\n                <div class="finger finger1"></div>\n                <div class="finger finger2"></div>\n                <div class="finger finger3"></div>\n                <div class="finger finger4"></div>\n                <div class="finger5"></div>\n                <div class="hand"></div>\n                <div class="finesse"></div>\n                <label class="add-animate">+1</label>\n            </div>' + '<p id="thumbNums">点赞数：<span>' + num + '</span></p>';

            this.dom.innerHTML = content;
            this.dom.addEventListener('click', _this.add);
        }
    }, {
        key: 'add',
        value: function add() {
            num = _get(Thumbs.prototype.__proto__ || Object.getPrototypeOf(Thumbs.prototype), 'addThumbs', this).call(this, num);
            var number = document.querySelector('#thumbNums span');
            number.innerHTML = num;
            var smalLabel = document.querySelector('.add-animate');
            smalLabel.className = 'add-animate';
            setTimeout(function () {
                smalLabel.className = 'add-animate active';
            }, 0);
        }
    }]);

    return Thumbs;
}(_praiseButton2.default);

var thumbs = function thumbs(id) {
    return new Thumbs(id);
};
_jquery2.default.thumbs = _jquery2.default.fn.thumbs = thumbs;
window.addthumbs = thumbs.add;
exports.default = thumbs;