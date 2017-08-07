(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _viewer = require('../viewer/viewer');

var _viewer2 = _interopRequireDefault(_viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$('.login-wrapper form').on('submit', function (evt) {
  evt.preventDefault();

  var $loadingImg = $('.login-wrapper form button.submit img.loading');
  var $loginForm = $('.login-wrapper');

  $loadingImg.removeClass('invisible');

  // Mocking login
  setTimeout(function () {
    $loadingImg.addClass('invisible');
    $loginForm.addClass('invisible');

    _viewer2.default.initViewer();
  }, 1000);
});

exports.default = {
  $loginWrapper: $('.login-wrapper'),
  $viewWrapper: $('.viewer-wrapper'),
  $overlay: $('.loading-overlay'),
  logout: function logout() {
    this.$overlay.addClass('invisible');
    this.$loginWrapper.removeClass('invisible');
    this.$viewerWrapper.addClass('invisible');
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYWQwMDNlNy5qcyJdLCJuYW1lcyI6WyIkIiwib24iLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRsb2FkaW5nSW1nIiwiJGxvZ2luRm9ybSIsInJlbW92ZUNsYXNzIiwic2V0VGltZW91dCIsImFkZENsYXNzIiwiaW5pdFZpZXdlciIsIiRsb2dpbldyYXBwZXIiLCIkdmlld1dyYXBwZXIiLCIkb3ZlcmxheSIsImxvZ291dCIsIiR2aWV3ZXJXcmFwcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUFBLEVBQUUscUJBQUYsRUFBeUJDLEVBQXpCLENBQTRCLFFBQTVCLEVBQXNDLFVBQVVDLEdBQVYsRUFBZTtBQUNuREEsTUFBSUMsY0FBSjs7QUFFQSxNQUFNQyxjQUFjSixFQUFFLCtDQUFGLENBQXBCO0FBQ0EsTUFBTUssYUFBYUwsRUFBRSxnQkFBRixDQUFuQjs7QUFFQUksY0FBWUUsV0FBWixDQUF3QixXQUF4Qjs7QUFFQTtBQUNBQyxhQUFXLFlBQVk7QUFDckJILGdCQUFZSSxRQUFaLENBQXFCLFdBQXJCO0FBQ0FILGVBQVdHLFFBQVgsQ0FBb0IsV0FBcEI7O0FBRUEscUJBQU9DLFVBQVA7QUFDRCxHQUxELEVBS0csSUFMSDtBQU1ELENBZkQ7O2tCQWlCZTtBQUNiQyxpQkFBZVYsRUFBRSxnQkFBRixDQURGO0FBRWJXLGdCQUFjWCxFQUFFLGlCQUFGLENBRkQ7QUFHYlksWUFBVVosRUFBRSxrQkFBRixDQUhHO0FBSWJhLFFBSmEsb0JBSUo7QUFDUCxTQUFLRCxRQUFMLENBQWNKLFFBQWQsQ0FBdUIsV0FBdkI7QUFDQSxTQUFLRSxhQUFMLENBQW1CSixXQUFuQixDQUErQixXQUEvQjtBQUNBLFNBQUtRLGNBQUwsQ0FBb0JOLFFBQXBCLENBQTZCLFdBQTdCO0FBQ0Q7QUFSWSxDIiwiZmlsZSI6ImZha2VfYWQwMDNlNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3ZXIgZnJvbSAnLi4vdmlld2VyL3ZpZXdlcic7XG5cbiQoJy5sb2dpbi13cmFwcGVyIGZvcm0nKS5vbignc3VibWl0JywgZnVuY3Rpb24gKGV2dCkge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCAkbG9hZGluZ0ltZyA9ICQoJy5sb2dpbi13cmFwcGVyIGZvcm0gYnV0dG9uLnN1Ym1pdCBpbWcubG9hZGluZycpO1xuICBjb25zdCAkbG9naW5Gb3JtID0gJCgnLmxvZ2luLXdyYXBwZXInKTtcblxuICAkbG9hZGluZ0ltZy5yZW1vdmVDbGFzcygnaW52aXNpYmxlJyk7XG4gIFxuICAvLyBNb2NraW5nIGxvZ2luXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICRsb2FkaW5nSW1nLmFkZENsYXNzKCdpbnZpc2libGUnKTtcbiAgICAkbG9naW5Gb3JtLmFkZENsYXNzKCdpbnZpc2libGUnKTtcblxuICAgIFZpZXdlci5pbml0Vmlld2VyKCk7XG4gIH0sIDEwMDApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgJGxvZ2luV3JhcHBlcjogJCgnLmxvZ2luLXdyYXBwZXInKSxcbiAgJHZpZXdXcmFwcGVyOiAkKCcudmlld2VyLXdyYXBwZXInKSxcbiAgJG92ZXJsYXk6ICQoJy5sb2FkaW5nLW92ZXJsYXknKSxcbiAgbG9nb3V0KCkge1xuICAgIHRoaXMuJG92ZXJsYXkuYWRkQ2xhc3MoJ2ludmlzaWJsZScpO1xuICAgIHRoaXMuJGxvZ2luV3JhcHBlci5yZW1vdmVDbGFzcygnaW52aXNpYmxlJyk7XG4gICAgdGhpcy4kdmlld2VyV3JhcHBlci5hZGRDbGFzcygnaW52aXNpYmxlJyk7XG4gIH1cbn1cbiJdfQ==
},{"../viewer/viewer":9}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _viewer = require('../viewer/viewer');

var _viewer2 = _interopRequireDefault(_viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$('.login-wrapper form').on('submit', function (evt) {
  evt.preventDefault();

  var $loadingImg = $('.login-wrapper form button.submit img.loading');
  var $loginForm = $('.login-wrapper');

  $loadingImg.removeClass('invisible');

  // Mocking login
  setTimeout(function () {
    $loadingImg.addClass('invisible');
    $loginForm.addClass('invisible');

    _viewer2.default.initViewer();
  }, 1000);
});

exports.default = {
  $loginWrapper: $('.login-wrapper'),
  $viewWrapper: $('.viewer-wrapper'),
  $overlay: $('.loading-overlay'),
  logout: function logout() {
    this.$overlay.addClass('invisible');
    this.$loginWrapper.removeClass('invisible');
    this.$viewerWrapper.addClass('invisible');
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIiQiLCJvbiIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiJGxvYWRpbmdJbWciLCIkbG9naW5Gb3JtIiwicmVtb3ZlQ2xhc3MiLCJzZXRUaW1lb3V0IiwiYWRkQ2xhc3MiLCJpbml0Vmlld2VyIiwiJGxvZ2luV3JhcHBlciIsIiR2aWV3V3JhcHBlciIsIiRvdmVybGF5IiwibG9nb3V0IiwiJHZpZXdlcldyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQUEsRUFBRSxxQkFBRixFQUF5QkMsRUFBekIsQ0FBNEIsUUFBNUIsRUFBc0MsVUFBVUMsR0FBVixFQUFlO0FBQ25EQSxNQUFJQyxjQUFKOztBQUVBLE1BQU1DLGNBQWNKLEVBQUUsK0NBQUYsQ0FBcEI7QUFDQSxNQUFNSyxhQUFhTCxFQUFFLGdCQUFGLENBQW5COztBQUVBSSxjQUFZRSxXQUFaLENBQXdCLFdBQXhCOztBQUVBO0FBQ0FDLGFBQVcsWUFBWTtBQUNyQkgsZ0JBQVlJLFFBQVosQ0FBcUIsV0FBckI7QUFDQUgsZUFBV0csUUFBWCxDQUFvQixXQUFwQjs7QUFFQSxxQkFBT0MsVUFBUDtBQUNELEdBTEQsRUFLRyxJQUxIO0FBTUQsQ0FmRDs7a0JBaUJlO0FBQ2JDLGlCQUFlVixFQUFFLGdCQUFGLENBREY7QUFFYlcsZ0JBQWNYLEVBQUUsaUJBQUYsQ0FGRDtBQUdiWSxZQUFVWixFQUFFLGtCQUFGLENBSEc7QUFJYmEsUUFKYSxvQkFJSjtBQUNQLFNBQUtELFFBQUwsQ0FBY0osUUFBZCxDQUF1QixXQUF2QjtBQUNBLFNBQUtFLGFBQUwsQ0FBbUJKLFdBQW5CLENBQStCLFdBQS9CO0FBQ0EsU0FBS1EsY0FBTCxDQUFvQk4sUUFBcEIsQ0FBNkIsV0FBN0I7QUFDRDtBQVJZLEMiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld2VyIGZyb20gJy4uL3ZpZXdlci92aWV3ZXInO1xuXG4kKCcubG9naW4td3JhcHBlciBmb3JtJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgJGxvYWRpbmdJbWcgPSAkKCcubG9naW4td3JhcHBlciBmb3JtIGJ1dHRvbi5zdWJtaXQgaW1nLmxvYWRpbmcnKTtcbiAgY29uc3QgJGxvZ2luRm9ybSA9ICQoJy5sb2dpbi13cmFwcGVyJyk7XG5cbiAgJGxvYWRpbmdJbWcucmVtb3ZlQ2xhc3MoJ2ludmlzaWJsZScpO1xuICBcbiAgLy8gTW9ja2luZyBsb2dpblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAkbG9hZGluZ0ltZy5hZGRDbGFzcygnaW52aXNpYmxlJyk7XG4gICAgJGxvZ2luRm9ybS5hZGRDbGFzcygnaW52aXNpYmxlJyk7XG5cbiAgICBWaWV3ZXIuaW5pdFZpZXdlcigpO1xuICB9LCAxMDAwKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICRsb2dpbldyYXBwZXI6ICQoJy5sb2dpbi13cmFwcGVyJyksXG4gICR2aWV3V3JhcHBlcjogJCgnLnZpZXdlci13cmFwcGVyJyksXG4gICRvdmVybGF5OiAkKCcubG9hZGluZy1vdmVybGF5JyksXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLiRvdmVybGF5LmFkZENsYXNzKCdpbnZpc2libGUnKTtcbiAgICB0aGlzLiRsb2dpbldyYXBwZXIucmVtb3ZlQ2xhc3MoJ2ludmlzaWJsZScpO1xuICAgIHRoaXMuJHZpZXdlcldyYXBwZXIuYWRkQ2xhc3MoJ2ludmlzaWJsZScpO1xuICB9XG59XG4iXX0=
},{"../viewer/viewer":9}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _login = require('../login/login');

var _login2 = _interopRequireDefault(_login);

var _modal = require('../modal/modal');

var _modal2 = _interopRequireDefault(_modal);

var _viewer = require('../viewer/viewer');

var _viewer2 = _interopRequireDefault(_viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  $hamburguerMenu: $('.humburguer-menu'),
  $menuWrapper: $('.menu-wrapper'),
  $overlay: $('.loading-overlay'),
  submit: function submit() {
    var _this = this;

    this.closeMenu();
    this.$overlay.removeClass('invisible').addClass('submitting');

    setTimeout(function () {
      _modal2.default.show();

      _this.$overlay.removeClass('submitting');
    }, 2000);
  },
  nextCase: function nextCase() {
    this.closeMenu();
    _viewer2.default.getNextCase();
  },
  logout: function logout() {
    this.closeMenu();
    _login2.default.logout();
  },
  closeMenu: function closeMenu() {
    this.$overlay.addClass('invisible');
    this.$menuWrapper.removeClass('opened');
  },
  init: function init() {
    var _this2 = this;

    _modal2.default.init();

    this.$hamburguerMenu.on('click', function (event) {
      event.preventDefault();

      _this2.$overlay.removeClass('invisible');
      _this2.$menuWrapper.addClass('opened');
    });

    this.$menuWrapper.on('click', 'a[data-menu]', function (event) {
      var $element = $(event.currentTarget);
      var menu = $element.attr('data-menu');

      event.preventDefault();

      if (menu) {
        _this2[menu]();
      }
    });

    this.$overlay.on('click', function (event) {
      if (_this2.$menuWrapper.hasClass('opened')) {
        _this2.$menuWrapper.removeClass('opened');
        _this2.$overlay.addClass('invisible');
      }
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuanMiXSwibmFtZXMiOlsiJGhhbWJ1cmd1ZXJNZW51IiwiJCIsIiRtZW51V3JhcHBlciIsIiRvdmVybGF5Iiwic3VibWl0IiwiY2xvc2VNZW51IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInNldFRpbWVvdXQiLCJzaG93IiwibmV4dENhc2UiLCJnZXROZXh0Q2FzZSIsImxvZ291dCIsImluaXQiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkZWxlbWVudCIsImN1cnJlbnRUYXJnZXQiLCJtZW51IiwiYXR0ciIsImhhc0NsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNiQSxtQkFBaUJDLEVBQUUsa0JBQUYsQ0FESjtBQUViQyxnQkFBY0QsRUFBRSxlQUFGLENBRkQ7QUFHYkUsWUFBVUYsRUFBRSxrQkFBRixDQUhHO0FBSWJHLFFBSmEsb0JBSUo7QUFBQTs7QUFDUCxTQUFLQyxTQUFMO0FBQ0EsU0FBS0YsUUFBTCxDQUFjRyxXQUFkLENBQTBCLFdBQTFCLEVBQXVDQyxRQUF2QyxDQUFnRCxZQUFoRDs7QUFFQUMsZUFBVyxZQUFNO0FBQ2Ysc0JBQU1DLElBQU47O0FBRUEsWUFBS04sUUFBTCxDQUFjRyxXQUFkLENBQTBCLFlBQTFCO0FBQ0QsS0FKRCxFQUlHLElBSkg7QUFLRCxHQWJZO0FBY2JJLFVBZGEsc0JBY0Y7QUFDVCxTQUFLTCxTQUFMO0FBQ0EscUJBQU9NLFdBQVA7QUFDRCxHQWpCWTtBQWtCYkMsUUFsQmEsb0JBa0JMO0FBQ04sU0FBS1AsU0FBTDtBQUNBLG9CQUFNTyxNQUFOO0FBQ0QsR0FyQlk7QUFzQmJQLFdBdEJhLHVCQXNCRDtBQUNWLFNBQUtGLFFBQUwsQ0FBY0ksUUFBZCxDQUF1QixXQUF2QjtBQUNBLFNBQUtMLFlBQUwsQ0FBa0JJLFdBQWxCLENBQThCLFFBQTlCO0FBQ0QsR0F6Qlk7QUEwQmJPLE1BMUJhLGtCQTBCTjtBQUFBOztBQUNMLG9CQUFNQSxJQUFOOztBQUVBLFNBQUtiLGVBQUwsQ0FBcUJjLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLFVBQUNDLEtBQUQsRUFBVztBQUMxQ0EsWUFBTUMsY0FBTjs7QUFFQSxhQUFLYixRQUFMLENBQWNHLFdBQWQsQ0FBMEIsV0FBMUI7QUFDQSxhQUFLSixZQUFMLENBQWtCSyxRQUFsQixDQUEyQixRQUEzQjtBQUNELEtBTEQ7O0FBT0EsU0FBS0wsWUFBTCxDQUFrQlksRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsY0FBOUIsRUFBOEMsVUFBQ0MsS0FBRCxFQUFXO0FBQ3ZELFVBQU1FLFdBQVdoQixFQUFFYyxNQUFNRyxhQUFSLENBQWpCO0FBQ0EsVUFBTUMsT0FBT0YsU0FBU0csSUFBVCxDQUFjLFdBQWQsQ0FBYjs7QUFFQUwsWUFBTUMsY0FBTjs7QUFFQSxVQUFJRyxJQUFKLEVBQVU7QUFDUixlQUFLQSxJQUFMO0FBQ0Q7QUFDRixLQVREOztBQVdBLFNBQUtoQixRQUFMLENBQWNXLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsVUFBQ0MsS0FBRCxFQUFXO0FBQ25DLFVBQUksT0FBS2IsWUFBTCxDQUFrQm1CLFFBQWxCLENBQTJCLFFBQTNCLENBQUosRUFBMEM7QUFDeEMsZUFBS25CLFlBQUwsQ0FBa0JJLFdBQWxCLENBQThCLFFBQTlCO0FBQ0EsZUFBS0gsUUFBTCxDQUFjSSxRQUFkLENBQXVCLFdBQXZCO0FBQ0Q7QUFDRixLQUxEO0FBTUQ7QUFyRFksQyIsImZpbGUiOiJtZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ2luIGZyb20gJy4uL2xvZ2luL2xvZ2luJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9tb2RhbC9tb2RhbCc7XG5pbXBvcnQgVmlld2VyIGZyb20gJy4uL3ZpZXdlci92aWV3ZXInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICRoYW1idXJndWVyTWVudTogJCgnLmh1bWJ1cmd1ZXItbWVudScpLFxuICAkbWVudVdyYXBwZXI6ICQoJy5tZW51LXdyYXBwZXInKSxcbiAgJG92ZXJsYXk6ICQoJy5sb2FkaW5nLW92ZXJsYXknKSxcbiAgc3VibWl0KCkge1xuICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgdGhpcy4kb3ZlcmxheS5yZW1vdmVDbGFzcygnaW52aXNpYmxlJykuYWRkQ2xhc3MoJ3N1Ym1pdHRpbmcnKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgTW9kYWwuc2hvdygpO1xuXG4gICAgICB0aGlzLiRvdmVybGF5LnJlbW92ZUNsYXNzKCdzdWJtaXR0aW5nJyk7XG4gICAgfSwgMjAwMCk7XG4gIH0sXG4gIG5leHRDYXNlKCkge1xuICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgVmlld2VyLmdldE5leHRDYXNlKCk7XG4gIH0sXG4gIGxvZ291dCgpe1xuICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgTG9naW4ubG9nb3V0KCk7XG4gIH0sXG4gIGNsb3NlTWVudSgpIHtcbiAgICB0aGlzLiRvdmVybGF5LmFkZENsYXNzKCdpbnZpc2libGUnKTtcbiAgICB0aGlzLiRtZW51V3JhcHBlci5yZW1vdmVDbGFzcygnb3BlbmVkJyk7XG4gIH0sXG4gIGluaXQoKSB7XG4gICAgTW9kYWwuaW5pdCgpO1xuXG4gICAgdGhpcy4kaGFtYnVyZ3Vlck1lbnUub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB0aGlzLiRvdmVybGF5LnJlbW92ZUNsYXNzKCdpbnZpc2libGUnKTtcbiAgICAgIHRoaXMuJG1lbnVXcmFwcGVyLmFkZENsYXNzKCdvcGVuZWQnKTtcbiAgICB9KTtcblxuICAgIHRoaXMuJG1lbnVXcmFwcGVyLm9uKCdjbGljaycsICdhW2RhdGEtbWVudV0nLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIGNvbnN0IG1lbnUgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW1lbnUnKTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKG1lbnUpIHtcbiAgICAgICAgdGhpc1ttZW51XSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy4kb3ZlcmxheS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLiRtZW51V3JhcHBlci5oYXNDbGFzcygnb3BlbmVkJykpIHtcbiAgICAgICAgdGhpcy4kbWVudVdyYXBwZXIucmVtb3ZlQ2xhc3MoJ29wZW5lZCcpO1xuICAgICAgICB0aGlzLiRvdmVybGF5LmFkZENsYXNzKCdpbnZpc2libGUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19
},{"../login/login":2,"../modal/modal":4,"../viewer/viewer":9}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _login = require('../login/login');

var _login2 = _interopRequireDefault(_login);

var _viewer = require('../viewer/viewer');

var _viewer2 = _interopRequireDefault(_viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  $modal: $('.modal'),
  $overlay: $('.loading-overlay'),
  logout: function logout() {
    this.$modal.removeClass('show');
    this.$overlay.addClass('invisible');

    _login2.default.logout();
  },
  nextCase: function nextCase() {
    this.hide();

    _viewer2.default.getNextCase();
  },
  show: function show() {
    this.$modal.addClass('show');
    this.$overlay.removeClass('invisible');
  },
  hide: function hide() {
    this.$modal.removeClass('show');
    this.$overlay.addClass('invisible');
  },
  init: function init() {
    var _this = this;

    this.$modal.find('.logout').on('click', function () {
      return _this.logout();
    });
    this.$modal.find('.next-case').on('click', function () {
      return _this.nextCase();
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmpzIl0sIm5hbWVzIjpbIiRtb2RhbCIsIiQiLCIkb3ZlcmxheSIsImxvZ291dCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJuZXh0Q2FzZSIsImhpZGUiLCJnZXROZXh0Q2FzZSIsInNob3ciLCJpbml0IiwiZmluZCIsIm9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7a0JBRWU7QUFDYkEsVUFBUUMsRUFBRSxRQUFGLENBREs7QUFFYkMsWUFBVUQsRUFBRSxrQkFBRixDQUZHO0FBR2JFLFFBSGEsb0JBR0o7QUFDUCxTQUFLSCxNQUFMLENBQVlJLFdBQVosQ0FBd0IsTUFBeEI7QUFDQSxTQUFLRixRQUFMLENBQWNHLFFBQWQsQ0FBdUIsV0FBdkI7O0FBRUEsb0JBQU1GLE1BQU47QUFDRCxHQVJZO0FBU2JHLFVBVGEsc0JBU0Y7QUFDVCxTQUFLQyxJQUFMOztBQUVBLHFCQUFPQyxXQUFQO0FBQ0QsR0FiWTtBQWNiQyxNQWRhLGtCQWNOO0FBQ0wsU0FBS1QsTUFBTCxDQUFZSyxRQUFaLENBQXFCLE1BQXJCO0FBQ0EsU0FBS0gsUUFBTCxDQUFjRSxXQUFkLENBQTBCLFdBQTFCO0FBQ0QsR0FqQlk7QUFrQmJHLE1BbEJhLGtCQWtCTjtBQUNMLFNBQUtQLE1BQUwsQ0FBWUksV0FBWixDQUF3QixNQUF4QjtBQUNBLFNBQUtGLFFBQUwsQ0FBY0csUUFBZCxDQUF1QixXQUF2QjtBQUNELEdBckJZO0FBc0JiSyxNQXRCYSxrQkFzQk47QUFBQTs7QUFDTCxTQUFLVixNQUFMLENBQVlXLElBQVosQ0FBaUIsU0FBakIsRUFBNEJDLEVBQTVCLENBQStCLE9BQS9CLEVBQXdDO0FBQUEsYUFBTSxNQUFLVCxNQUFMLEVBQU47QUFBQSxLQUF4QztBQUNBLFNBQUtILE1BQUwsQ0FBWVcsSUFBWixDQUFpQixZQUFqQixFQUErQkMsRUFBL0IsQ0FBa0MsT0FBbEMsRUFBMkM7QUFBQSxhQUFNLE1BQUtOLFFBQUwsRUFBTjtBQUFBLEtBQTNDO0FBQ0Q7QUF6QlksQyIsImZpbGUiOiJtb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dpbiBmcm9tICcuLi9sb2dpbi9sb2dpbic7XG5pbXBvcnQgVmlld2VyIGZyb20gJy4uL3ZpZXdlci92aWV3ZXInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICRtb2RhbDogJCgnLm1vZGFsJyksXG4gICRvdmVybGF5OiAkKCcubG9hZGluZy1vdmVybGF5JyksXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLiRtb2RhbC5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgIHRoaXMuJG92ZXJsYXkuYWRkQ2xhc3MoJ2ludmlzaWJsZScpO1xuICAgIFxuICAgIExvZ2luLmxvZ291dCgpO1xuICB9LFxuICBuZXh0Q2FzZSgpIHtcbiAgICB0aGlzLmhpZGUoKTtcblxuICAgIFZpZXdlci5nZXROZXh0Q2FzZSgpO1xuICB9LFxuICBzaG93KCkge1xuICAgIHRoaXMuJG1vZGFsLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgdGhpcy4kb3ZlcmxheS5yZW1vdmVDbGFzcygnaW52aXNpYmxlJyk7XG4gIH0sXG4gIGhpZGUoKSB7XG4gICAgdGhpcy4kbW9kYWwucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICB0aGlzLiRvdmVybGF5LmFkZENsYXNzKCdpbnZpc2libGUnKTtcbiAgfSxcbiAgaW5pdCgpIHtcbiAgICB0aGlzLiRtb2RhbC5maW5kKCcubG9nb3V0Jykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5sb2dvdXQoKSk7XG4gICAgdGhpcy4kbW9kYWwuZmluZCgnLm5leHQtY2FzZScpLm9uKCdjbGljaycsICgpID0+IHRoaXMubmV4dENhc2UoKSk7XG4gIH1cbn1cbiJdfQ==
},{"../login/login":2,"../viewer/viewer":9}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  commandSelector: '.viewer-tools',
  clearAll: function clearAll() {
    var enabledElemet = cornerstone.getEnabledElement(this.$element);
    var viewport = cornerstone.getViewport(this.$element);

    viewport.voi.windowWidth = enabledElemet.image.windowWidth;
    viewport.voi.windowCenter = enabledElemet.image.windowCenter;
    cornerstone.setViewport(this.$element, viewport);

    cornerstoneTools.globalImageIdSpecificToolStateManager.clear(this.$element);
    cornerstone.updateImage(this.$element);
  },
  initCommands: function initCommands() {
    var _this = this;

    $(this.commandSelector).on('click', 'a[data-command]', function (event) {
      var $element = $(event.currentTarget);
      var $wrapper = $element.parent();
      var tool = $element.attr('data-command');

      _this[tool]();

      $wrapper.addClass('active');

      setTimeout(function () {
        $wrapper.removeClass('active');
      }, 300);
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzLmpzIl0sIm5hbWVzIjpbImNvbW1hbmRTZWxlY3RvciIsImNsZWFyQWxsIiwiZW5hYmxlZEVsZW1ldCIsImNvcm5lcnN0b25lIiwiZ2V0RW5hYmxlZEVsZW1lbnQiLCIkZWxlbWVudCIsInZpZXdwb3J0IiwiZ2V0Vmlld3BvcnQiLCJ2b2kiLCJ3aW5kb3dXaWR0aCIsImltYWdlIiwid2luZG93Q2VudGVyIiwic2V0Vmlld3BvcnQiLCJjb3JuZXJzdG9uZVRvb2xzIiwiZ2xvYmFsSW1hZ2VJZFNwZWNpZmljVG9vbFN0YXRlTWFuYWdlciIsImNsZWFyIiwidXBkYXRlSW1hZ2UiLCJpbml0Q29tbWFuZHMiLCIkIiwib24iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCIkd3JhcHBlciIsInBhcmVudCIsInRvb2wiLCJhdHRyIiwiYWRkQ2xhc3MiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUFlO0FBQ2JBLG1CQUFpQixlQURKO0FBRWJDLFVBRmEsc0JBRUY7QUFDVCxRQUFNQyxnQkFBZ0JDLFlBQVlDLGlCQUFaLENBQThCLEtBQUtDLFFBQW5DLENBQXRCO0FBQ0EsUUFBTUMsV0FBV0gsWUFBWUksV0FBWixDQUF3QixLQUFLRixRQUE3QixDQUFqQjs7QUFFQUMsYUFBU0UsR0FBVCxDQUFhQyxXQUFiLEdBQTJCUCxjQUFjUSxLQUFkLENBQW9CRCxXQUEvQztBQUNBSCxhQUFTRSxHQUFULENBQWFHLFlBQWIsR0FBNEJULGNBQWNRLEtBQWQsQ0FBb0JDLFlBQWhEO0FBQ0FSLGdCQUFZUyxXQUFaLENBQXdCLEtBQUtQLFFBQTdCLEVBQXVDQyxRQUF2Qzs7QUFFQU8scUJBQWlCQyxxQ0FBakIsQ0FBdURDLEtBQXZELENBQTZELEtBQUtWLFFBQWxFO0FBQ0FGLGdCQUFZYSxXQUFaLENBQXdCLEtBQUtYLFFBQTdCO0FBQ0QsR0FaWTtBQWFiWSxjQWJhLDBCQWFFO0FBQUE7O0FBQ2JDLE1BQUUsS0FBS2xCLGVBQVAsRUFBd0JtQixFQUF4QixDQUEyQixPQUEzQixFQUFvQyxpQkFBcEMsRUFBdUQsaUJBQVM7QUFDOUQsVUFBTWQsV0FBV2EsRUFBRUUsTUFBTUMsYUFBUixDQUFqQjtBQUNBLFVBQU1DLFdBQVdqQixTQUFTa0IsTUFBVCxFQUFqQjtBQUNBLFVBQU1DLE9BQU9uQixTQUFTb0IsSUFBVCxDQUFjLGNBQWQsQ0FBYjs7QUFFQSxZQUFLRCxJQUFMOztBQUVBRixlQUFTSSxRQUFULENBQWtCLFFBQWxCOztBQUVBQyxpQkFBVyxZQUFXO0FBQ3BCTCxpQkFBU00sV0FBVCxDQUFxQixRQUFyQjtBQUNELE9BRkQsRUFFRyxHQUZIO0FBR0QsS0FaRDtBQWFEO0FBM0JZLEMiLCJmaWxlIjoiY29tbWFuZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGNvbW1hbmRTZWxlY3RvcjogJy52aWV3ZXItdG9vbHMnLFxuICBjbGVhckFsbCgpIHtcbiAgICBjb25zdCBlbmFibGVkRWxlbWV0ID0gY29ybmVyc3RvbmUuZ2V0RW5hYmxlZEVsZW1lbnQodGhpcy4kZWxlbWVudCk7XG4gICAgY29uc3Qgdmlld3BvcnQgPSBjb3JuZXJzdG9uZS5nZXRWaWV3cG9ydCh0aGlzLiRlbGVtZW50KTtcblxuICAgIHZpZXdwb3J0LnZvaS53aW5kb3dXaWR0aCA9IGVuYWJsZWRFbGVtZXQuaW1hZ2Uud2luZG93V2lkdGg7XG4gICAgdmlld3BvcnQudm9pLndpbmRvd0NlbnRlciA9IGVuYWJsZWRFbGVtZXQuaW1hZ2Uud2luZG93Q2VudGVyO1xuICAgIGNvcm5lcnN0b25lLnNldFZpZXdwb3J0KHRoaXMuJGVsZW1lbnQsIHZpZXdwb3J0KTtcblxuICAgIGNvcm5lcnN0b25lVG9vbHMuZ2xvYmFsSW1hZ2VJZFNwZWNpZmljVG9vbFN0YXRlTWFuYWdlci5jbGVhcih0aGlzLiRlbGVtZW50KTtcbiAgICBjb3JuZXJzdG9uZS51cGRhdGVJbWFnZSh0aGlzLiRlbGVtZW50KTtcbiAgfSxcbiAgaW5pdENvbW1hbmRzKCkge1xuICAgICQodGhpcy5jb21tYW5kU2VsZWN0b3IpLm9uKCdjbGljaycsICdhW2RhdGEtY29tbWFuZF0nLCBldmVudCA9PiB7XG4gICAgICBjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICBjb25zdCAkd3JhcHBlciA9ICRlbGVtZW50LnBhcmVudCgpO1xuICAgICAgY29uc3QgdG9vbCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtY29tbWFuZCcpO1xuXG4gICAgICB0aGlzW3Rvb2xdKCk7XG5cbiAgICAgICR3cmFwcGVyLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgJHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9KTtcbiAgfVxufTtcbiJdfQ==
},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mockUrl = 'http://localhost:4000/mock.json';

exports.default = {
  getCase: function getCase() {
    return new Promise(function (resolve, reject) {
      var successHandler = function successHandler(response) {
        resolve(response);
      };
      var errorHandler = function errorHandler(error) {
        if (error) {
          console.error(error);
        }

        reject(error);
      };

      $.ajax(mockUrl).then(successHandler);
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rvci5qcyJdLCJuYW1lcyI6WyJtb2NrVXJsIiwiZ2V0Q2FzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3VjY2Vzc0hhbmRsZXIiLCJyZXNwb25zZSIsImVycm9ySGFuZGxlciIsImVycm9yIiwiY29uc29sZSIsIiQiLCJhamF4IiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxVQUFVLGlDQUFoQjs7a0JBRWU7QUFDYkMsU0FEYSxxQkFDSDtBQUNSLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQzVDLFVBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ25DSCxnQkFBUUcsUUFBUjtBQUNELE9BRkQ7QUFHQSxVQUFNQyxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCLFlBQUlBLEtBQUosRUFBVztBQUNUQyxrQkFBUUQsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7O0FBRURKLGVBQU9JLEtBQVA7QUFDRCxPQU5EOztBQVFBRSxRQUFFQyxJQUFGLENBQU9YLE9BQVAsRUFBZ0JZLElBQWhCLENBQXFCUCxjQUFyQjtBQUNELEtBYk0sQ0FBUDtBQWNEO0FBaEJZLEMiLCJmaWxlIjoiY29ubmVjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9ja1VybCA9ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvbW9jay5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRDYXNlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBjb25zdCBzdWNjZXNzSGFuZGxlciA9IChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH07XG4gICAgICBjb25zdCBlcnJvckhhbmRsZXIgPSAoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfTtcblxuICAgICAgJC5hamF4KG1vY2tVcmwpLnRoZW4oc3VjY2Vzc0hhbmRsZXIpO1xuICAgIH0pO1xuICB9XG59O1xuIl19
},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connector = require('./connector');

var _connector2 = _interopRequireDefault(_connector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getFile: function getFile(url) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();

      request.open('GET', url, true);
      request.responseType = 'arraybuffer';

      request.onload = function (oEvent) {
        var arrayBuffer = request.response;
        if (arrayBuffer) {
          try {
            resolve(new Blob([arrayBuffer], { type: 'application/dicom' }));
          } catch (error) {
            reject(error);
          }
        }
      };

      request.send(null);
    });
  },
  getCaseImages: function getCaseImages() {
    var _this = this;

    var $overlay = $('.loading-overlay');
    $overlay.addClass('loading');
    $overlay.removeClass('invisible');

    return new Promise(function (resolve, reject) {
      _connector2.default.getCase().then(function (caseStudy) {
        if (caseStudy && caseStudy.urls) {
          Promise.all(caseStudy.urls.map(_this.getFile)).then(function (files) {
            $overlay.addClass('invisible');
            $overlay.removeClass('loading');

            resolve(files.map(cornerstoneWADOImageLoader.wadouri.fileManager.add));
          }).catch(reject);
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGVzLmpzIl0sIm5hbWVzIjpbImdldEZpbGUiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJvbmxvYWQiLCJvRXZlbnQiLCJhcnJheUJ1ZmZlciIsInJlc3BvbnNlIiwiQmxvYiIsInR5cGUiLCJlcnJvciIsInNlbmQiLCJnZXRDYXNlSW1hZ2VzIiwiJG92ZXJsYXkiLCIkIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImdldENhc2UiLCJ0aGVuIiwiY2FzZVN0dWR5IiwidXJscyIsImFsbCIsIm1hcCIsImZpbGVzIiwiY29ybmVyc3RvbmVXQURPSW1hZ2VMb2FkZXIiLCJ3YWRvdXJpIiwiZmlsZU1hbmFnZXIiLCJhZGQiLCJjYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztrQkFFZTtBQUNiQSxTQURhLG1CQUNMQyxHQURLLEVBQ0E7QUFDWCxXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUM1QyxVQUFNQyxVQUFVLElBQUlDLGNBQUosRUFBaEI7O0FBRUFELGNBQVFFLElBQVIsQ0FBYSxLQUFiLEVBQW9CTixHQUFwQixFQUF5QixJQUF6QjtBQUNBSSxjQUFRRyxZQUFSLEdBQXVCLGFBQXZCOztBQUVBSCxjQUFRSSxNQUFSLEdBQWlCLFVBQVNDLE1BQVQsRUFBaUI7QUFDaEMsWUFBTUMsY0FBY04sUUFBUU8sUUFBNUI7QUFDQSxZQUFJRCxXQUFKLEVBQWlCO0FBQ2YsY0FBSTtBQUNGUixvQkFBUSxJQUFJVSxJQUFKLENBQVMsQ0FBQ0YsV0FBRCxDQUFULEVBQXdCLEVBQUVHLE1BQU0sbUJBQVIsRUFBeEIsQ0FBUjtBQUNELFdBRkQsQ0FFRSxPQUFPQyxLQUFQLEVBQWM7QUFDZFgsbUJBQU9XLEtBQVA7QUFDRDtBQUNGO0FBQ0YsT0FURDs7QUFXQVYsY0FBUVcsSUFBUixDQUFhLElBQWI7QUFDRCxLQWxCTSxDQUFQO0FBbUJELEdBckJZO0FBc0JiQyxlQXRCYSwyQkFzQkc7QUFBQTs7QUFDZCxRQUFNQyxXQUFXQyxFQUFFLGtCQUFGLENBQWpCO0FBQ0FELGFBQVNFLFFBQVQsQ0FBa0IsU0FBbEI7QUFDQUYsYUFBU0csV0FBVCxDQUFxQixXQUFyQjs7QUFFQSxXQUFPLElBQUluQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLDBCQUFVa0IsT0FBVixHQUFvQkMsSUFBcEIsQ0FBeUIsVUFBQ0MsU0FBRCxFQUFlO0FBQ3RDLFlBQUlBLGFBQWFBLFVBQVVDLElBQTNCLEVBQWlDO0FBQy9CdkIsa0JBQVF3QixHQUFSLENBQVlGLFVBQVVDLElBQVYsQ0FBZUUsR0FBZixDQUFtQixNQUFLM0IsT0FBeEIsQ0FBWixFQUE4Q3VCLElBQTlDLENBQW1ELFVBQVVLLEtBQVYsRUFBaUI7QUFDbEVWLHFCQUFTRSxRQUFULENBQWtCLFdBQWxCO0FBQ0FGLHFCQUFTRyxXQUFULENBQXFCLFNBQXJCOztBQUVBbEIsb0JBQVF5QixNQUFNRCxHQUFOLENBQVVFLDJCQUEyQkMsT0FBM0IsQ0FBbUNDLFdBQW5DLENBQStDQyxHQUF6RCxDQUFSO0FBQ0QsV0FMRCxFQUtHQyxLQUxILENBS1M3QixNQUxUO0FBTUQ7QUFDRixPQVRELEVBU0c2QixLQVRILENBU1MsVUFBU2xCLEtBQVQsRUFBZ0I7QUFDdkJYLGVBQU9XLEtBQVA7QUFDRCxPQVhEO0FBWUQsS0FiTSxDQUFQO0FBY0Q7QUF6Q1ksQyIsImZpbGUiOiJmaWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25uZWN0b3IgZnJvbSAnLi9jb25uZWN0b3InO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEZpbGUodXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuXG4gICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKG9FdmVudCkge1xuICAgICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICAgIGlmIChhcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNvbHZlKG5ldyBCbG9iKFthcnJheUJ1ZmZlcl0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL2RpY29tJyB9KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXF1ZXN0LnNlbmQobnVsbCk7XG4gICAgfSk7XG4gIH0sXG4gIGdldENhc2VJbWFnZXMoKSB7XG4gICAgY29uc3QgJG92ZXJsYXkgPSAkKCcubG9hZGluZy1vdmVybGF5Jyk7XG4gICAgJG92ZXJsYXkuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAkb3ZlcmxheS5yZW1vdmVDbGFzcygnaW52aXNpYmxlJyk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgQ29ubmVjdG9yLmdldENhc2UoKS50aGVuKChjYXNlU3R1ZHkpID0+IHtcbiAgICAgICAgaWYgKGNhc2VTdHVkeSAmJiBjYXNlU3R1ZHkudXJscykge1xuICAgICAgICAgIFByb21pc2UuYWxsKGNhc2VTdHVkeS51cmxzLm1hcCh0aGlzLmdldEZpbGUpKS50aGVuKGZ1bmN0aW9uIChmaWxlcykge1xuICAgICAgICAgICAgJG92ZXJsYXkuYWRkQ2xhc3MoJ2ludmlzaWJsZScpO1xuICAgICAgICAgICAgJG92ZXJsYXkucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgcmVzb2x2ZShmaWxlcy5tYXAoY29ybmVyc3RvbmVXQURPSW1hZ2VMb2FkZXIud2Fkb3VyaS5maWxlTWFuYWdlci5hZGQpKTtcbiAgICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG4iXX0=
},{"./connector":6}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _commands = require('./commands');

var _commands2 = _interopRequireDefault(_commands);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

exports.default = {
  active: '',
  toolsSelector: '.viewer-tools',
  deactivateActiveTool: function deactivateActiveTool() {
    if (this.active) {
      this.deactivate(this.active);
      this.active = '';
    }
  },
  toggleTool: function toggleTool(toolToActivate) {
    if (!toolToActivate) {
      return;
    }

    if (isMobile) {
      if (toolToActivate === 'length') {
        toolToActivate = toolToActivate + 'Touch';
      } else {
        toolToActivate = toolToActivate + 'TouchDrag';
      }
    }

    if (this.active) {
      this.deactivate(this.active);
    }

    cornerstoneTools[toolToActivate].enable(this.$element);
    cornerstoneTools[toolToActivate].activate(this.$element, 1);

    this.active = toolToActivate;
  },
  deactivate: function deactivate(tool) {
    cornerstoneTools[tool].disable(this.$element);
    cornerstoneTools[tool].deactivate(this.$element, 1);
  },
  initStackTool: function initStackTool(imageIds) {
    var $thumb = $('.thumb');
    var stack = {
      currentImageIdIndex: 0,
      imageIds: imageIds
    };

    cornerstoneTools.addStackStateManager(this.$element, ['stack']);
    cornerstoneTools.addToolState(this.$element, 'stack', stack);
    cornerstoneTools.stackScrollWheel.activate(this.$element);
    cornerstoneTools.stackScrollMultiTouch.activate(this.$element);

    $thumb.css('width', 100 / stack.imageIds.length + '%');

    $(this.$element).on('CornerstoneNewImage', function () {
      var currentIndex = stack.currentImageIdIndex;

      $thumb.css({
        'margin-left': 100 / stack.imageIds.length * currentIndex + '%'
      });
    });
  },
  attachEvents: function attachEvents() {
    var _this = this;

    // Extract which tool we are using and activating it
    $(this.toolsSelector).on('click', 'a[data-tool]', function (event) {
      var $element = $(event.currentTarget);
      var tool = $element.attr('data-tool');

      $('.active').removeClass('active');

      _this.toggleTool(tool);

      $element.parent().addClass('active');
    });

    // Limiting measurements to 1
    $('#conerstoneViewport').on('mousedown', function () {
      var lengths = cornerstoneTools.getToolState(_this.$element, 'length');

      if (lengths && lengths.data.length === 2) {
        lengths.data.shift();
        cornerstone.updateImage(_this.$element);
      }
    });
  },
  initTools: function initTools(imageIds) {
    cornerstoneTools.mouseInput.enable(this.$element);
    cornerstoneTools.touchInput.enable(this.$element);
    cornerstoneTools.mouseWheelInput.enable(this.$element);

    this.initStackTool(imageIds);

    // removing default context menu
    this.$element.oncontextmenu = function (event) {
      event.preventDefault();

      return false;
    };

    this.attachEvents();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xzLmpzIl0sIm5hbWVzIjpbImlzTW9iaWxlIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImFjdGl2ZSIsInRvb2xzU2VsZWN0b3IiLCJkZWFjdGl2YXRlQWN0aXZlVG9vbCIsImRlYWN0aXZhdGUiLCJ0b2dnbGVUb29sIiwidG9vbFRvQWN0aXZhdGUiLCJjb3JuZXJzdG9uZVRvb2xzIiwiZW5hYmxlIiwiJGVsZW1lbnQiLCJhY3RpdmF0ZSIsInRvb2wiLCJkaXNhYmxlIiwiaW5pdFN0YWNrVG9vbCIsImltYWdlSWRzIiwiJHRodW1iIiwiJCIsInN0YWNrIiwiY3VycmVudEltYWdlSWRJbmRleCIsImFkZFN0YWNrU3RhdGVNYW5hZ2VyIiwiYWRkVG9vbFN0YXRlIiwic3RhY2tTY3JvbGxXaGVlbCIsInN0YWNrU2Nyb2xsTXVsdGlUb3VjaCIsImNzcyIsImxlbmd0aCIsIm9uIiwiY3VycmVudEluZGV4IiwiYXR0YWNoRXZlbnRzIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiYXR0ciIsInJlbW92ZUNsYXNzIiwicGFyZW50IiwiYWRkQ2xhc3MiLCJsZW5ndGhzIiwiZ2V0VG9vbFN0YXRlIiwiZGF0YSIsInNoaWZ0IiwiY29ybmVyc3RvbmUiLCJ1cGRhdGVJbWFnZSIsImluaXRUb29scyIsIm1vdXNlSW5wdXQiLCJ0b3VjaElucHV0IiwibW91c2VXaGVlbElucHV0Iiwib25jb250ZXh0bWVudSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyw0QkFBNEJDLElBQTVCLENBQWlDQyxVQUFVQyxTQUEzQyxDQUFqQjs7a0JBRWU7QUFDYkMsVUFBUSxFQURLO0FBRWJDLGlCQUFlLGVBRkY7QUFHYkMsc0JBSGEsa0NBR1U7QUFDckIsUUFBSSxLQUFLRixNQUFULEVBQWlCO0FBQ2YsV0FBS0csVUFBTCxDQUFnQixLQUFLSCxNQUFyQjtBQUNBLFdBQUtBLE1BQUwsR0FBYyxFQUFkO0FB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UUQsR0EvRVk7QUFnRmIrQixXQWhGYSxxQkFnRkgxQixRQWhGRyxFQWdGTztBQUNsQlAscUJBQWlCa0MsVUFBakIsQ0FBNEJqQyxNQUE1QixDQUFtQyxLQUFLQyxRQUF4QztBQUNBRixxQkFBaUJtQyxVQUFqQixDQUE0QmxDLE1BQTVCLENBQW1DLEtBQUtDLFFBQXhDO0FBQ0FGLHFCQUFpQm9DLGVBQWpCLENBQWlDbkMsTUFBakMsQ0FBd0MsS0FBS0MsUUFBN0M7O0FBRUEsU0FBS0ksYUFBTCxDQUFtQkMsUUFBbkI7O0FBRUE7QUFDQSxTQUFLTCxRQUFMLENBQWNtQyxhQUFkLEdBQThCLFVBQVVoQixLQUFWLEVBQWlCO0FBQzdDQSxZQUFNaUIsY0FBTjs7QUFFQSxhQUFPLEtBQVA7QUFDRCxLQUpEOztBQU1BLFNBQUtsQixZQUFMO0FBQ0Q7QUEvRlksQyIsImZpbGUiOiJ0b29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21tYW5kcyBmcm9tICcuL2NvbW1hbmRzJztcblxuY29uc3QgaXNNb2JpbGUgPSAvaVBob25lfGlQYWR8aVBvZHxBbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhY3RpdmU6ICcnLFxuICB0b29sc1NlbGVjdG9yOiAnLnZpZXdlci10b29scycsXG4gIGRlYWN0aXZhdGVBY3RpdmVUb29sKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgdGhpcy5kZWFjdGl2YXRlKHRoaXMuYWN0aXZlKTtcbiAgICAgIHRoaXMuYWN0aXZlID0gJyc7XG4gICAgfVxuICB9LFxuICB0b2dnbGVUb29sKHRvb2xUb0FjdGl2YXRlKSB7XG4gICAgaWYgKCF0b29sVG9BY3RpdmF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgaWYgKHRvb2xUb0FjdGl2YXRlID09PSAnbGVuZ3RoJykge1xuICAgICAgICB0b29sVG9BY3RpdmF0ZSA9IGAke3Rvb2xUb0FjdGl2YXRlfVRvdWNoYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvb2xUb0FjdGl2YXRlID0gYCR7dG9vbFRvQWN0aXZhdGV9VG91Y2hEcmFnYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuZGVhY3RpdmF0ZSh0aGlzLmFjdGl2ZSk7XG4gICAgfVxuXG4gICAgY29ybmVyc3RvbmVUb29sc1t0b29sVG9BY3RpdmF0ZV0uZW5hYmxlKHRoaXMuJGVsZW1lbnQpO1xuICAgIGNvcm5lcnN0b25lVG9vbHNbdG9vbFRvQWN0aXZhdGVdLmFjdGl2YXRlKHRoaXMuJGVsZW1lbnQsIDEpO1xuXG4gICAgdGhpcy5hY3RpdmUgPSB0b29sVG9BY3RpdmF0ZTtcbiAgfSxcbiAgZGVhY3RpdmF0ZSh0b29sKSB7XG4gICAgY29ybmVyc3RvbmVUb29sc1t0b29sXS5kaXNhYmxlKHRoaXMuJGVsZW1lbnQpO1xuICAgIGNvcm5lcnN0b25lVG9vbHNbdG9vbF0uZGVhY3RpdmF0ZSh0aGlzLiRlbGVtZW50LCAxKTtcbiAgfSxcbiAgaW5pdFN0YWNrVG9vbChpbWFnZUlkcykge1xuICAgIGNvbnN0ICR0aHVtYiA9ICQoJy50aHVtYicpO1xuICAgIGNvbnN0IHN0YWNrID0ge1xuICAgICAgY3VycmVudEltYWdlSWRJbmRleDogMCxcbiAgICAgIGltYWdlSWRzOiBpbWFnZUlkc1xuICAgIH07XG5cbiAgICBjb3JuZXJzdG9uZVRvb2xzLmFkZFN0YWNrU3RhdGVNYW5hZ2VyKHRoaXMuJGVsZW1lbnQsIFsnc3RhY2snXSk7XG4gICAgY29ybmVyc3RvbmVUb29scy5hZGRUb29sU3RhdGUodGhpcy4kZWxlbWVudCwgJ3N0YWNrJywgc3RhY2spO1xuICAgIGNvcm5lcnN0b25lVG9vbHMuc3RhY2tTY3JvbGxXaGVlbC5hY3RpdmF0ZSh0aGlzLiRlbGVtZW50KTtcbiAgICBjb3JuZXJzdG9uZVRvb2xzLnN0YWNrU2Nyb2xsTXVsdGlUb3VjaC5hY3RpdmF0ZSh0aGlzLiRlbGVtZW50KTtcblxuICAgICR0aHVtYi5jc3MoJ3dpZHRoJywgKDEwMC9zdGFjay5pbWFnZUlkcy5sZW5ndGgpICsgJyUnKTtcblxuICAgICQodGhpcy4kZWxlbWVudCkub24oJ0Nvcm5lcnN0b25lTmV3SW1hZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY3VycmVudEluZGV4ID0gc3RhY2suY3VycmVudEltYWdlSWRJbmRleDtcblxuICAgICAgJHRodW1iLmNzcyh7XG4gICAgICAgICdtYXJnaW4tbGVmdCc6ICgoMTAwL3N0YWNrLmltYWdlSWRzLmxlbmd0aCkqY3VycmVudEluZGV4KSArICclJ1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGF0dGFjaEV2ZW50cygpIHtcbiAgICAvLyBFeHRyYWN0IHdoaWNoIHRvb2wgd2UgYXJlIHVzaW5nIGFuZCBhY3RpdmF0aW5nIGl0XG4gICAgJCh0aGlzLnRvb2xzU2VsZWN0b3IpLm9uKCdjbGljaycsICdhW2RhdGEtdG9vbF0nLCBldmVudCA9PiB7XG4gICAgICBjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICBjb25zdCB0b29sID0gJGVsZW1lbnQuYXR0cignZGF0YS10b29sJyk7XG5cbiAgICAgICQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgIHRoaXMudG9nZ2xlVG9vbCh0b29sKTtcblxuICAgICAgJGVsZW1lbnQucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgLy8gTGltaXRpbmcgbWVhc3VyZW1lbnRzIHRvIDFcbiAgICAkKCcjY29uZXJzdG9uZVZpZXdwb3J0Jykub24oJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgIGNvbnN0IGxlbmd0aHMgPSBjb3JuZXJzdG9uZVRvb2xzLmdldFRvb2xTdGF0ZSh0aGlzLiRlbGVtZW50LCAnbGVuZ3RoJyk7XG5cbiAgICAgIGlmIChsZW5ndGhzICYmIGxlbmd0aHMuZGF0YS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgbGVuZ3Rocy5kYXRhLnNoaWZ0KCk7XG4gICAgICAgIGNvcm5lcnN0b25lLnVwZGF0ZUltYWdlKHRoaXMuJGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBpbml0VG9vbHMoaW1hZ2VJZHMpIHtcbiAgICBjb3JuZXJzdG9uZVRvb2xzLm1vdXNlSW5wdXQuZW5hYmxlKHRoaXMuJGVsZW1lbnQpO1xuICAgIGNvcm5lcnN0b25lVG9vbHMudG91Y2hJbnB1dC5lbmFibGUodGhpcy4kZWxlbWVudCk7XG4gICAgY29ybmVyc3RvbmVUb29scy5tb3VzZVdoZWVsSW5wdXQuZW5hYmxlKHRoaXMuJGVsZW1lbnQpO1xuXG4gICAgdGhpcy5pbml0U3RhY2tUb29sKGltYWdlSWRzKTtcblxuICAgIC8vIHJlbW92aW5nIGRlZmF1bHQgY29udGV4dCBtZW51XG4gICAgdGhpcy4kZWxlbWVudC5vbmNvbnRleHRtZW51ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHRoaXMuYXR0YWNoRXZlbnRzKCk7XG4gIH1cbn07XG4iXX0=
},{"./commands":5}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _files = require('./files');

var _files2 = _interopRequireDefault(_files);

var _tools = require('./tools');

var _tools2 = _interopRequireDefault(_tools);

var _commands = require('./commands');

var _commands2 = _interopRequireDefault(_commands);

var _menu = require('../menu/menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  $window: $(window),
  $viewer: $('.viewer-wrapper'),
  $overlay: $('.loading-overlay'),
  getNextCase: function getNextCase() {
    var _this = this;

    this.$overlay.removeClass('invisible').addClass('loading');

    _files2.default.getCaseImages().then(function (imagesIds) {
      _tools2.default.initTools(imagesIds);
      _commands2.default.initCommands();

      cornerstone.loadImage(imagesIds[0]).then(function (image) {
        cornerstone.displayImage(_this.$element, image);
      });
    }).catch();
  },
  initViewer: function initViewer() {
    var _this2 = this;

    this.$element = $('#conerstoneViewport')[0];

    _menu2.default.init();

    this.$viewer.removeClass('invisible');

    _tools2.default.$element = this.$element;
    _commands2.default.$element = this.$element;

    this.$window.on('resize', function () {
      return cornerstone.resize(_this2.$element, true);
    });

    cornerstone.enable(this.$element);

    this.getNextCase();
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdlci5qcyJdLCJuYW1lcyI6WyIkd2luZG93IiwiJCIsIndpbmRvdyIsIiR2aWV3ZXIiLCIkb3ZlcmxheSIsImdldE5leHRDYXNlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImdldENhc2VJbWFnZXMiLCJ0aGVuIiwiaW1hZ2VzSWRzIiwiaW5pdFRvb2xzIiwiaW5pdENvbW1hbmRzIiwiY29ybmVyc3RvbmUiLCJsb2FkSW1hZ2UiLCJpbWFnZSIsImRpc3BsYXlJbWFnZSIsIiRlbGVtZW50IiwiY2F0Y2giLCJpbml0Vmlld2VyIiwiaW5pdCIsIm9uIiwicmVzaXplIiwiZW5hYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQ2JBLFdBQVNDLEVBQUVDLE1BQUYsQ0FESTtBQUViQyxXQUFTRixFQUFFLGlCQUFGLENBRkk7QUFHYkcsWUFBVUgsRUFBRSxrQkFBRixDQUhHO0FBSWJJLGFBSmEseUJBSUM7QUFBQTs7QUFDWixTQUFLRCxRQUFMLENBQWNFLFdBQWQsQ0FBMEIsV0FBMUIsRUFBdUNDLFFBQXZDLENBQWdELFNBQWhEOztBQUVBLG9CQUFNQyxhQUFOLEdBQXNCQyxJQUF0QixDQUEyQixVQUFDQyxTQUFELEVBQWU7QUFDeEMsc0JBQU1DLFNBQU4sQ0FBZ0JELFNBQWhCO0FBQ0EseUJBQVNFLFlBQVQ7O0FBRUFDLGtCQUFZQyxTQUFaLENBQXNCSixVQUFVLENBQVYsQ0FBdEIsRUFBb0NELElBQXBDLENBQXlDLFVBQUNNLEtBQUQsRUFBVztBQUNsREYsb0JBQVlHLFlBQVosQ0FBeUIsTUFBS0MsUUFBOUIsRUFBd0NGLEtBQXhDO0FBQ0QsT0FGRDtBQUdELEtBUEQsRUFPR0csS0FQSDtBQVFELEdBZlk7QUFnQmJDLFlBaEJhLHdCQWdCQTtBQUFBOztBQUNYLFNBQUtGLFFBQUwsR0FBZ0JoQixFQUFFLHFCQUFGLEVBQXlCLENBQXpCLENBQWhCOztBQUVBLG1CQUFLbUIsSUFBTDs7QUFFQSxTQUFLakIsT0FBTCxDQUFhRyxXQUFiLENBQXlCLFdBQXpCOztBQUVBLG9CQUFNVyxRQUFOLEdBQWlCLEtBQUtBLFFBQXRCO0FBQ0EsdUJBQVNBLFFBQVQsR0FBb0IsS0FBS0EsUUFBekI7O0FBRUEsU0FBS2pCLE9BQUwsQ0FBYXFCLEVBQWIsQ0FBZ0IsUUFBaEIsRUFBMEI7QUFBQSxhQUFNUixZQUFZUyxNQUFaLENBQW1CLE9BQUtMLFFBQXhCLEVBQWtDLElBQWxDLENBQU47QUFBQSxLQUExQjs7QUFFQUosZ0JBQVlVLE1BQVosQ0FBbUIsS0FBS04sUUFBeEI7O0FBRUEsU0FBS1osV0FBTDtBQUNEO0FBL0JZLEMiLCJmaWxlIjoidmlld2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpbGVzIGZyb20gJy4vZmlsZXMnO1xuaW1wb3J0IFRvb2xzIGZyb20gJy4vdG9vbHMnO1xuaW1wb3J0IENvbW1hbmRzIGZyb20gJy4vY29tbWFuZHMnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vbWVudS9tZW51JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAkd2luZG93OiAkKHdpbmRvdyksXG4gICR2aWV3ZXI6ICQoJy52aWV3ZXItd3JhcHBlcicpLFxuICAkb3ZlcmxheTogJCgnLmxvYWRpbmctb3ZlcmxheScpLFxuICBnZXROZXh0Q2FzZSgpIHtcbiAgICB0aGlzLiRvdmVybGF5LnJlbW92ZUNsYXNzKCdpbnZpc2libGUnKS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgRmlsZXMuZ2V0Q2FzZUltYWdlcygpLnRoZW4oKGltYWdlc0lkcykgPT4ge1xuICAgICAgVG9vbHMuaW5pdFRvb2xzKGltYWdlc0lkcyk7XG4gICAgICBDb21tYW5kcy5pbml0Q29tbWFuZHMoKTtcblxuICAgICAgY29ybmVyc3RvbmUubG9hZEltYWdlKGltYWdlc0lkc1swXSkudGhlbigoaW1hZ2UpID0+IHtcbiAgICAgICAgY29ybmVyc3RvbmUuZGlzcGxheUltYWdlKHRoaXMuJGVsZW1lbnQsIGltYWdlKTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKCk7XG4gIH0sXG4gIGluaXRWaWV3ZXIoKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICQoJyNjb25lcnN0b25lVmlld3BvcnQnKVswXTtcblxuICAgIE1lbnUuaW5pdCgpO1xuXG4gICAgdGhpcy4kdmlld2VyLnJlbW92ZUNsYXNzKCdpbnZpc2libGUnKTtcblxuICAgIFRvb2xzLiRlbGVtZW50ID0gdGhpcy4kZWxlbWVudDtcbiAgICBDb21tYW5kcy4kZWxlbWVudCA9IHRoaXMuJGVsZW1lbnQ7XG5cbiAgICB0aGlzLiR3aW5kb3cub24oJ3Jlc2l6ZScsICgpID0+IGNvcm5lcnN0b25lLnJlc2l6ZSh0aGlzLiRlbGVtZW50LCB0cnVlKSk7XG5cbiAgICBjb3JuZXJzdG9uZS5lbmFibGUodGhpcy4kZWxlbWVudCk7XG5cbiAgICB0aGlzLmdldE5leHRDYXNlKCk7XG4gIH1cbn1cbiJdfQ==
},{"../menu/menu":3,"./commands":5,"./files":7,"./tools":8}]},{},[1])