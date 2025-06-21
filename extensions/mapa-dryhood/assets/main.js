function Md(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, 'default') ? f.default : f
}
var nf = { exports: {} },
  pu = {}
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var od
function lm() {
  if (od) return pu
  od = 1
  var f = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.fragment')
  function m(s, A, O) {
    var U = null
    if ((O !== void 0 && (U = '' + O), A.key !== void 0 && (U = '' + A.key), 'key' in A)) {
      O = {}
      for (var N in A) N !== 'key' && (O[N] = A[N])
    } else O = A
    return (A = O.ref), { $$typeof: f, type: s, key: U, ref: A !== void 0 ? A : null, props: O }
  }
  return (pu.Fragment = o), (pu.jsx = m), (pu.jsxs = m), pu
}
var rd
function em() {
  return rd || ((rd = 1), (nf.exports = lm())), nf.exports
}
var ot = em(),
  cf = { exports: {} },
  F = {}
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dd
function am() {
  if (dd) return F
  dd = 1
  var f = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.portal'),
    m = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    A = Symbol.for('react.profiler'),
    O = Symbol.for('react.consumer'),
    U = Symbol.for('react.context'),
    N = Symbol.for('react.forward_ref'),
    R = Symbol.for('react.suspense'),
    E = Symbol.for('react.memo'),
    D = Symbol.for('react.lazy'),
    X = Symbol.iterator
  function Y(d) {
    return d === null || typeof d != 'object'
      ? null
      : ((d = (X && d[X]) || d['@@iterator']), typeof d == 'function' ? d : null)
  }
  var J = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    H = Object.assign,
    k = {}
  function $(d, z, B) {
    ;(this.props = d), (this.context = z), (this.refs = k), (this.updater = B || J)
  }
  ;($.prototype.isReactComponent = {}),
    ($.prototype.setState = function (d, z) {
      if (typeof d != 'object' && typeof d != 'function' && d != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        )
      this.updater.enqueueSetState(this, d, z, 'setState')
    }),
    ($.prototype.forceUpdate = function (d) {
      this.updater.enqueueForceUpdate(this, d, 'forceUpdate')
    })
  function I() {}
  I.prototype = $.prototype
  function ut(d, z, B) {
    ;(this.props = d), (this.context = z), (this.refs = k), (this.updater = B || J)
  }
  var tt = (ut.prototype = new I())
  ;(tt.constructor = ut), H(tt, $.prototype), (tt.isPureReactComponent = !0)
  var nt = Array.isArray,
    j = { H: null, A: null, T: null, S: null, V: null },
    it = Object.prototype.hasOwnProperty
  function bt(d, z, B, x, Q, ft) {
    return (B = ft.ref), { $$typeof: f, type: d, key: z, ref: B !== void 0 ? B : null, props: ft }
  }
  function pt(d, z) {
    return bt(d.type, z, void 0, void 0, void 0, d.props)
  }
  function Rt(d) {
    return typeof d == 'object' && d !== null && d.$$typeof === f
  }
  function Ot(d) {
    var z = { '=': '=0', ':': '=2' }
    return (
      '$' +
      d.replace(/[=:]/g, function (B) {
        return z[B]
      })
    )
  }
  var Vt = /\/+/g
  function Ct(d, z) {
    return typeof d == 'object' && d !== null && d.key != null ? Ot('' + d.key) : z.toString(36)
  }
  function ge() {}
  function Se(d) {
    switch (d.status) {
      case 'fulfilled':
        return d.value
      case 'rejected':
        throw d.reason
      default:
        switch (
          (typeof d.status == 'string'
            ? d.then(ge, ge)
            : ((d.status = 'pending'),
              d.then(
                function (z) {
                  d.status === 'pending' && ((d.status = 'fulfilled'), (d.value = z))
                },
                function (z) {
                  d.status === 'pending' && ((d.status = 'rejected'), (d.reason = z))
                }
              )),
          d.status)
        ) {
          case 'fulfilled':
            return d.value
          case 'rejected':
            throw d.reason
        }
    }
    throw d
  }
  function Kt(d, z, B, x, Q) {
    var ft = typeof d
    ;(ft === 'undefined' || ft === 'boolean') && (d = null)
    var W = !1
    if (d === null) W = !0
    else
      switch (ft) {
        case 'bigint':
        case 'string':
        case 'number':
          W = !0
          break
        case 'object':
          switch (d.$$typeof) {
            case f:
            case o:
              W = !0
              break
            case D:
              return (W = d._init), Kt(W(d._payload), z, B, x, Q)
          }
      }
    if (W)
      return (
        (Q = Q(d)),
        (W = x === '' ? '.' + Ct(d, 0) : x),
        nt(Q)
          ? ((B = ''),
            W != null && (B = W.replace(Vt, '$&/') + '/'),
            Kt(Q, z, B, '', function (wl) {
              return wl
            }))
          : Q != null &&
            (Rt(Q) &&
              (Q = pt(
                Q,
                B +
                  (Q.key == null || (d && d.key === Q.key)
                    ? ''
                    : ('' + Q.key).replace(Vt, '$&/') + '/') +
                  W
              )),
            z.push(Q)),
        1
      )
    W = 0
    var ll = x === '' ? '.' : x + ':'
    if (nt(d))
      for (var At = 0; At < d.length; At++)
        (x = d[At]), (ft = ll + Ct(x, At)), (W += Kt(x, z, B, ft, Q))
    else if (((At = Y(d)), typeof At == 'function'))
      for (d = At.call(d), At = 0; !(x = d.next()).done; )
        (x = x.value), (ft = ll + Ct(x, At++)), (W += Kt(x, z, B, ft, Q))
    else if (ft === 'object') {
      if (typeof d.then == 'function') return Kt(Se(d), z, B, x, Q)
      throw (
        ((z = String(d)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (z === '[object Object]' ? 'object with keys {' + Object.keys(d).join(', ') + '}' : z) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      )
    }
    return W
  }
  function T(d, z, B) {
    if (d == null) return d
    var x = [],
      Q = 0
    return (
      Kt(d, x, '', '', function (ft) {
        return z.call(B, ft, Q++)
      }),
      x
    )
  }
  function q(d) {
    if (d._status === -1) {
      var z = d._result
      ;(z = z()),
        z.then(
          function (B) {
            ;(d._status === 0 || d._status === -1) && ((d._status = 1), (d._result = B))
          },
          function (B) {
            ;(d._status === 0 || d._status === -1) && ((d._status = 2), (d._result = B))
          }
        ),
        d._status === -1 && ((d._status = 0), (d._result = z))
    }
    if (d._status === 1) return d._result.default
    throw d._result
  }
  var K =
    typeof reportError == 'function'
      ? reportError
      : function (d) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var z = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof d == 'object' && d !== null && typeof d.message == 'string'
                  ? String(d.message)
                  : String(d),
              error: d
            })
            if (!window.dispatchEvent(z)) return
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', d)
            return
          }
          console.error(d)
        }
  function gt() {}
  return (
    (F.Children = {
      map: T,
      forEach: function (d, z, B) {
        T(
          d,
          function () {
            z.apply(this, arguments)
          },
          B
        )
      },
      count: function (d) {
        var z = 0
        return (
          T(d, function () {
            z++
          }),
          z
        )
      },
      toArray: function (d) {
        return (
          T(d, function (z) {
            return z
          }) || []
        )
      },
      only: function (d) {
        if (!Rt(d))
          throw Error('React.Children.only expected to receive a single React element child.')
        return d
      }
    }),
    (F.Component = $),
    (F.Fragment = m),
    (F.Profiler = A),
    (F.PureComponent = ut),
    (F.StrictMode = s),
    (F.Suspense = R),
    (F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j),
    (F.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (d) {
        return j.H.useMemoCache(d)
      }
    }),
    (F.cache = function (d) {
      return function () {
        return d.apply(null, arguments)
      }
    }),
    (F.cloneElement = function (d, z, B) {
      if (d == null) throw Error('The argument must be a React element, but you passed ' + d + '.')
      var x = H({}, d.props),
        Q = d.key,
        ft = void 0
      if (z != null)
        for (W in (z.ref !== void 0 && (ft = void 0), z.key !== void 0 && (Q = '' + z.key), z))
          !it.call(z, W) ||
            W === 'key' ||
            W === '__self' ||
            W === '__source' ||
            (W === 'ref' && z.ref === void 0) ||
            (x[W] = z[W])
      var W = arguments.length - 2
      if (W === 1) x.children = B
      else if (1 < W) {
        for (var ll = Array(W), At = 0; At < W; At++) ll[At] = arguments[At + 2]
        x.children = ll
      }
      return bt(d.type, Q, void 0, void 0, ft, x)
    }),
    (F.createContext = function (d) {
      return (
        (d = {
          $$typeof: U,
          _currentValue: d,
          _currentValue2: d,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }),
        (d.Provider = d),
        (d.Consumer = { $$typeof: O, _context: d }),
        d
      )
    }),
    (F.createElement = function (d, z, B) {
      var x,
        Q = {},
        ft = null
      if (z != null)
        for (x in (z.key !== void 0 && (ft = '' + z.key), z))
          it.call(z, x) && x !== 'key' && x !== '__self' && x !== '__source' && (Q[x] = z[x])
      var W = arguments.length - 2
      if (W === 1) Q.children = B
      else if (1 < W) {
        for (var ll = Array(W), At = 0; At < W; At++) ll[At] = arguments[At + 2]
        Q.children = ll
      }
      if (d && d.defaultProps) for (x in ((W = d.defaultProps), W)) Q[x] === void 0 && (Q[x] = W[x])
      return bt(d, ft, void 0, void 0, null, Q)
    }),
    (F.createRef = function () {
      return { current: null }
    }),
    (F.forwardRef = function (d) {
      return { $$typeof: N, render: d }
    }),
    (F.isValidElement = Rt),
    (F.lazy = function (d) {
      return { $$typeof: D, _payload: { _status: -1, _result: d }, _init: q }
    }),
    (F.memo = function (d, z) {
      return { $$typeof: E, type: d, compare: z === void 0 ? null : z }
    }),
    (F.startTransition = function (d) {
      var z = j.T,
        B = {}
      j.T = B
      try {
        var x = d(),
          Q = j.S
        Q !== null && Q(B, x),
          typeof x == 'object' && x !== null && typeof x.then == 'function' && x.then(gt, K)
      } catch (ft) {
        K(ft)
      } finally {
        j.T = z
      }
    }),
    (F.unstable_useCacheRefresh = function () {
      return j.H.useCacheRefresh()
    }),
    (F.use = function (d) {
      return j.H.use(d)
    }),
    (F.useActionState = function (d, z, B) {
      return j.H.useActionState(d, z, B)
    }),
    (F.useCallback = function (d, z) {
      return j.H.useCallback(d, z)
    }),
    (F.useContext = function (d) {
      return j.H.useContext(d)
    }),
    (F.useDebugValue = function () {}),
    (F.useDeferredValue = function (d, z) {
      return j.H.useDeferredValue(d, z)
    }),
    (F.useEffect = function (d, z, B) {
      var x = j.H
      if (typeof B == 'function')
        throw Error('useEffect CRUD overload is not enabled in this build of React.')
      return x.useEffect(d, z)
    }),
    (F.useId = function () {
      return j.H.useId()
    }),
    (F.useImperativeHandle = function (d, z, B) {
      return j.H.useImperativeHandle(d, z, B)
    }),
    (F.useInsertionEffect = function (d, z) {
      return j.H.useInsertionEffect(d, z)
    }),
    (F.useLayoutEffect = function (d, z) {
      return j.H.useLayoutEffect(d, z)
    }),
    (F.useMemo = function (d, z) {
      return j.H.useMemo(d, z)
    }),
    (F.useOptimistic = function (d, z) {
      return j.H.useOptimistic(d, z)
    }),
    (F.useReducer = function (d, z, B) {
      return j.H.useReducer(d, z, B)
    }),
    (F.useRef = function (d) {
      return j.H.useRef(d)
    }),
    (F.useState = function (d) {
      return j.H.useState(d)
    }),
    (F.useSyncExternalStore = function (d, z, B) {
      return j.H.useSyncExternalStore(d, z, B)
    }),
    (F.useTransition = function () {
      return j.H.useTransition()
    }),
    (F.version = '19.1.0'),
    F
  )
}
var hd
function vf() {
  return hd || ((hd = 1), (cf.exports = am())), cf.exports
}
var C = vf()
const Dt = Md(C)
var ff = { exports: {} },
  Au = {},
  sf = { exports: {} },
  of = {}
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var md
function um() {
  return (
    md ||
      ((md = 1),
      (function (f) {
        function o(T, q) {
          var K = T.length
          T.push(q)
          t: for (; 0 < K; ) {
            var gt = (K - 1) >>> 1,
              d = T[gt]
            if (0 < A(d, q)) (T[gt] = q), (T[K] = d), (K = gt)
            else break t
          }
        }
        function m(T) {
          return T.length === 0 ? null : T[0]
        }
        function s(T) {
          if (T.length === 0) return null
          var q = T[0],
            K = T.pop()
          if (K !== q) {
            T[0] = K
            t: for (var gt = 0, d = T.length, z = d >>> 1; gt < z; ) {
              var B = 2 * (gt + 1) - 1,
                x = T[B],
                Q = B + 1,
                ft = T[Q]
              if (0 > A(x, K))
                Q < d && 0 > A(ft, x)
                  ? ((T[gt] = ft), (T[Q] = K), (gt = Q))
                  : ((T[gt] = x), (T[B] = K), (gt = B))
              else if (Q < d && 0 > A(ft, K)) (T[gt] = ft), (T[Q] = K), (gt = Q)
              else break t
            }
          }
          return q
        }
        function A(T, q) {
          var K = T.sortIndex - q.sortIndex
          return K !== 0 ? K : T.id - q.id
        }
        if (
          ((f.unstable_now = void 0),
          typeof performance == 'object' && typeof performance.now == 'function')
        ) {
          var O = performance
          f.unstable_now = function () {
            return O.now()
          }
        } else {
          var U = Date,
            N = U.now()
          f.unstable_now = function () {
            return U.now() - N
          }
        }
        var R = [],
          E = [],
          D = 1,
          X = null,
          Y = 3,
          J = !1,
          H = !1,
          k = !1,
          $ = !1,
          I = typeof setTimeout == 'function' ? setTimeout : null,
          ut = typeof clearTimeout == 'function' ? clearTimeout : null,
          tt = typeof setImmediate < 'u' ? setImmediate : null
        function nt(T) {
          for (var q = m(E); q !== null; ) {
            if (q.callback === null) s(E)
            else if (q.startTime <= T) s(E), (q.sortIndex = q.expirationTime), o(R, q)
            else break
            q = m(E)
          }
        }
        function j(T) {
          if (((k = !1), nt(T), !H))
            if (m(R) !== null) (H = !0), it || ((it = !0), Ct())
            else {
              var q = m(E)
              q !== null && Kt(j, q.startTime - T)
            }
        }
        var it = !1,
          bt = -1,
          pt = 5,
          Rt = -1
        function Ot() {
          return $ ? !0 : !(f.unstable_now() - Rt < pt)
        }
        function Vt() {
          if ((($ = !1), it)) {
            var T = f.unstable_now()
            Rt = T
            var q = !0
            try {
              t: {
                ;(H = !1), k && ((k = !1), ut(bt), (bt = -1)), (J = !0)
                var K = Y
                try {
                  l: {
                    for (nt(T), X = m(R); X !== null && !(X.expirationTime > T && Ot()); ) {
                      var gt = X.callback
                      if (typeof gt == 'function') {
                        ;(X.callback = null), (Y = X.priorityLevel)
                        var d = gt(X.expirationTime <= T)
                        if (((T = f.unstable_now()), typeof d == 'function')) {
                          ;(X.callback = d), nt(T), (q = !0)
                          break l
                        }
                        X === m(R) && s(R), nt(T)
                      } else s(R)
                      X = m(R)
                    }
                    if (X !== null) q = !0
                    else {
                      var z = m(E)
                      z !== null && Kt(j, z.startTime - T), (q = !1)
                    }
                  }
                  break t
                } finally {
                  ;(X = null), (Y = K), (J = !1)
                }
                q = void 0
              }
            } finally {
              q ? Ct() : (it = !1)
            }
          }
        }
        var Ct
        if (typeof tt == 'function')
          Ct = function () {
            tt(Vt)
          }
        else if (typeof MessageChannel < 'u') {
          var ge = new MessageChannel(),
            Se = ge.port2
          ;(ge.port1.onmessage = Vt),
            (Ct = function () {
              Se.postMessage(null)
            })
        } else
          Ct = function () {
            I(Vt, 0)
          }
        function Kt(T, q) {
          bt = I(function () {
            T(f.unstable_now())
          }, q)
        }
        ;(f.unstable_IdlePriority = 5),
          (f.unstable_ImmediatePriority = 1),
          (f.unstable_LowPriority = 4),
          (f.unstable_NormalPriority = 3),
          (f.unstable_Profiling = null),
          (f.unstable_UserBlockingPriority = 2),
          (f.unstable_cancelCallback = function (T) {
            T.callback = null
          }),
          (f.unstable_forceFrameRate = function (T) {
            0 > T || 125 < T
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (pt = 0 < T ? Math.floor(1e3 / T) : 5)
          }),
          (f.unstable_getCurrentPriorityLevel = function () {
            return Y
          }),
          (f.unstable_next = function (T) {
            switch (Y) {
              case 1:
              case 2:
              case 3:
                var q = 3
                break
              default:
                q = Y
            }
            var K = Y
            Y = q
            try {
              return T()
            } finally {
              Y = K
            }
          }),
          (f.unstable_requestPaint = function () {
            $ = !0
          }),
          (f.unstable_runWithPriority = function (T, q) {
            switch (T) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                T = 3
            }
            var K = Y
            Y = T
            try {
              return q()
            } finally {
              Y = K
            }
          }),
          (f.unstable_scheduleCallback = function (T, q, K) {
            var gt = f.unstable_now()
            switch (
              (typeof K == 'object' && K !== null
                ? ((K = K.delay), (K = typeof K == 'number' && 0 < K ? gt + K : gt))
                : (K = gt),
              T)
            ) {
              case 1:
                var d = -1
                break
              case 2:
                d = 250
                break
              case 5:
                d = 1073741823
                break
              case 4:
                d = 1e4
                break
              default:
                d = 5e3
            }
            return (
              (d = K + d),
              (T = {
                id: D++,
                callback: q,
                priorityLevel: T,
                startTime: K,
                expirationTime: d,
                sortIndex: -1
              }),
              K > gt
                ? ((T.sortIndex = K),
                  o(E, T),
                  m(R) === null &&
                    T === m(E) &&
                    (k ? (ut(bt), (bt = -1)) : (k = !0), Kt(j, K - gt)))
                : ((T.sortIndex = d), o(R, T), H || J || ((H = !0), it || ((it = !0), Ct()))),
              T
            )
          }),
          (f.unstable_shouldYield = Ot),
          (f.unstable_wrapCallback = function (T) {
            var q = Y
            return function () {
              var K = Y
              Y = q
              try {
                return T.apply(this, arguments)
              } finally {
                Y = K
              }
            }
          })
      })(of)),
    of
  )
}
var vd
function nm() {
  return vd || ((vd = 1), (sf.exports = um())), sf.exports
}
var rf = { exports: {} },
  kt = {}
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yd
function im() {
  if (yd) return kt
  yd = 1
  var f = vf()
  function o(R) {
    var E = 'https://react.dev/errors/' + R
    if (1 < arguments.length) {
      E += '?args[]=' + encodeURIComponent(arguments[1])
      for (var D = 2; D < arguments.length; D++) E += '&args[]=' + encodeURIComponent(arguments[D])
    }
    return (
      'Minified React error #' +
      R +
      '; visit ' +
      E +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function m() {}
  var s = {
      d: {
        f: m,
        r: function () {
          throw Error(o(522))
        },
        D: m,
        C: m,
        L: m,
        m,
        X: m,
        S: m,
        M: m
      },
      p: 0,
      findDOMNode: null
    },
    A = Symbol.for('react.portal')
  function O(R, E, D) {
    var X = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: A,
      key: X == null ? null : '' + X,
      children: R,
      containerInfo: E,
      implementation: D
    }
  }
  var U = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
  function N(R, E) {
    if (R === 'font') return ''
    if (typeof E == 'string') return E === 'use-credentials' ? E : ''
  }
  return (
    (kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (kt.createPortal = function (R, E) {
      var D = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)) throw Error(o(299))
      return O(R, E, null, D)
    }),
    (kt.flushSync = function (R) {
      var E = U.T,
        D = s.p
      try {
        if (((U.T = null), (s.p = 2), R)) return R()
      } finally {
        ;(U.T = E), (s.p = D), s.d.f()
      }
    }),
    (kt.preconnect = function (R, E) {
      typeof R == 'string' &&
        (E
          ? ((E = E.crossOrigin),
            (E = typeof E == 'string' ? (E === 'use-credentials' ? E : '') : void 0))
          : (E = null),
        s.d.C(R, E))
    }),
    (kt.prefetchDNS = function (R) {
      typeof R == 'string' && s.d.D(R)
    }),
    (kt.preinit = function (R, E) {
      if (typeof R == 'string' && E && typeof E.as == 'string') {
        var D = E.as,
          X = N(D, E.crossOrigin),
          Y = typeof E.integrity == 'string' ? E.integrity : void 0,
          J = typeof E.fetchPriority == 'string' ? E.fetchPriority : void 0
        D === 'style'
          ? s.d.S(R, typeof E.precedence == 'string' ? E.precedence : void 0, {
              crossOrigin: X,
              integrity: Y,
              fetchPriority: J
            })
          : D === 'script' &&
            s.d.X(R, {
              crossOrigin: X,
              integrity: Y,
              fetchPriority: J,
              nonce: typeof E.nonce == 'string' ? E.nonce : void 0
            })
      }
    }),
    (kt.preinitModule = function (R, E) {
      if (typeof R == 'string')
        if (typeof E == 'object' && E !== null) {
          if (E.as == null || E.as === 'script') {
            var D = N(E.as, E.crossOrigin)
            s.d.M(R, {
              crossOrigin: D,
              integrity: typeof E.integrity == 'string' ? E.integrity : void 0,
              nonce: typeof E.nonce == 'string' ? E.nonce : void 0
            })
          }
        } else E == null && s.d.M(R)
    }),
    (kt.preload = function (R, E) {
      if (typeof R == 'string' && typeof E == 'object' && E !== null && typeof E.as == 'string') {
        var D = E.as,
          X = N(D, E.crossOrigin)
        s.d.L(R, D, {
          crossOrigin: X,
          integrity: typeof E.integrity == 'string' ? E.integrity : void 0,
          nonce: typeof E.nonce == 'string' ? E.nonce : void 0,
          type: typeof E.type == 'string' ? E.type : void 0,
          fetchPriority: typeof E.fetchPriority == 'string' ? E.fetchPriority : void 0,
          referrerPolicy: typeof E.referrerPolicy == 'string' ? E.referrerPolicy : void 0,
          imageSrcSet: typeof E.imageSrcSet == 'string' ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == 'string' ? E.imageSizes : void 0,
          media: typeof E.media == 'string' ? E.media : void 0
        })
      }
    }),
    (kt.preloadModule = function (R, E) {
      if (typeof R == 'string')
        if (E) {
          var D = N(E.as, E.crossOrigin)
          s.d.m(R, {
            as: typeof E.as == 'string' && E.as !== 'script' ? E.as : void 0,
            crossOrigin: D,
            integrity: typeof E.integrity == 'string' ? E.integrity : void 0
          })
        } else s.d.m(R)
    }),
    (kt.requestFormReset = function (R) {
      s.d.r(R)
    }),
    (kt.unstable_batchedUpdates = function (R, E) {
      return R(E)
    }),
    (kt.useFormState = function (R, E, D) {
      return U.H.useFormState(R, E, D)
    }),
    (kt.useFormStatus = function () {
      return U.H.useHostTransitionStatus()
    }),
    (kt.version = '19.1.0'),
    kt
  )
}
var gd
function _d() {
  if (gd) return rf.exports
  gd = 1
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
      } catch (o) {
        console.error(o)
      }
  }
  return f(), (rf.exports = im()), rf.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sd
function cm() {
  if (Sd) return Au
  Sd = 1
  var f = nm(),
    o = vf(),
    m = _d()
  function s(t) {
    var l = 'https://react.dev/errors/' + t
    if (1 < arguments.length) {
      l += '?args[]=' + encodeURIComponent(arguments[1])
      for (var e = 2; e < arguments.length; e++) l += '&args[]=' + encodeURIComponent(arguments[e])
    }
    return (
      'Minified React error #' +
      t +
      '; visit ' +
      l +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function A(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
  }
  function O(t) {
    var l = t,
      e = t
    if (t.alternate) for (; l.return; ) l = l.return
    else {
      t = l
      do (l = t), (l.flags & 4098) !== 0 && (e = l.return), (t = l.return)
      while (t)
    }
    return l.tag === 3 ? e : null
  }
  function U(t) {
    if (t.tag === 13) {
      var l = t.memoizedState
      if ((l === null && ((t = t.alternate), t !== null && (l = t.memoizedState)), l !== null))
        return l.dehydrated
    }
    return null
  }
  function N(t) {
    if (O(t) !== t) throw Error(s(188))
  }
  function R(t) {
    var l = t.alternate
    if (!l) {
      if (((l = O(t)), l === null)) throw Error(s(188))
      return l !== t ? null : t
    }
    for (var e = t, a = l; ; ) {
      var u = e.return
      if (u === null) break
      var n = u.alternate
      if (n === null) {
        if (((a = u.return), a !== null)) {
          e = a
          continue
        }
        break
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return N(u), t
          if (n === a) return N(u), l
          n = n.sibling
        }
        throw Error(s(188))
      }
      if (e.return !== a.return) (e = u), (a = n)
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === e) {
            ;(i = !0), (e = u), (a = n)
            break
          }
          if (c === a) {
            ;(i = !0), (a = u), (e = n)
            break
          }
          c = c.sibling
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === e) {
              ;(i = !0), (e = n), (a = u)
              break
            }
            if (c === a) {
              ;(i = !0), (a = n), (e = u)
              break
            }
            c = c.sibling
          }
          if (!i) throw Error(s(189))
        }
      }
      if (e.alternate !== a) throw Error(s(190))
    }
    if (e.tag !== 3) throw Error(s(188))
    return e.stateNode.current === e ? t : l
  }
  function E(t) {
    var l = t.tag
    if (l === 5 || l === 26 || l === 27 || l === 6) return t
    for (t = t.child; t !== null; ) {
      if (((l = E(t)), l !== null)) return l
      t = t.sibling
    }
    return null
  }
  var D = Object.assign,
    X = Symbol.for('react.element'),
    Y = Symbol.for('react.transitional.element'),
    J = Symbol.for('react.portal'),
    H = Symbol.for('react.fragment'),
    k = Symbol.for('react.strict_mode'),
    $ = Symbol.for('react.profiler'),
    I = Symbol.for('react.provider'),
    ut = Symbol.for('react.consumer'),
    tt = Symbol.for('react.context'),
    nt = Symbol.for('react.forward_ref'),
    j = Symbol.for('react.suspense'),
    it = Symbol.for('react.suspense_list'),
    bt = Symbol.for('react.memo'),
    pt = Symbol.for('react.lazy'),
    Rt = Symbol.for('react.activity'),
    Ot = Symbol.for('react.memo_cache_sentinel'),
    Vt = Symbol.iterator
  function Ct(t) {
    return t === null || typeof t != 'object'
      ? null
      : ((t = (Vt && t[Vt]) || t['@@iterator']), typeof t == 'function' ? t : null)
  }
  var ge = Symbol.for('react.client.reference')
  function Se(t) {
    if (t == null) return null
    if (typeof t == 'function') return t.$$typeof === ge ? null : t.displayName || t.name || null
    if (typeof t == 'string') return t
    switch (t) {
      case H:
        return 'Fragment'
      case $:
        return 'Profiler'
      case k:
        return 'StrictMode'
      case j:
        return 'Suspense'
      case it:
        return 'SuspenseList'
      case Rt:
        return 'Activity'
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case J:
          return 'Portal'
        case tt:
          return (t.displayName || 'Context') + '.Provider'
        case ut:
          return (t._context.displayName || 'Context') + '.Consumer'
        case nt:
          var l = t.render
          return (
            (t = t.displayName),
            t ||
              ((t = l.displayName || l.name || ''),
              (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
            t
          )
        case bt:
          return (l = t.displayName || null), l !== null ? l : Se(t.type) || 'Memo'
        case pt:
          ;(l = t._payload), (t = t._init)
          try {
            return Se(t(l))
          } catch {}
      }
    return null
  }
  var Kt = Array.isArray,
    T = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = { pending: !1, data: null, method: null, action: null },
    gt = [],
    d = -1
  function z(t) {
    return { current: t }
  }
  function B(t) {
    0 > d || ((t.current = gt[d]), (gt[d] = null), d--)
  }
  function x(t, l) {
    d++, (gt[d] = t.current), (t.current = l)
  }
  var Q = z(null),
    ft = z(null),
    W = z(null),
    ll = z(null)
  function At(t, l) {
    switch ((x(W, l), x(ft, t), x(Q, null), l.nodeType)) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? Lr(t) : 0
        break
      default:
        if (((t = l.tagName), (l = l.namespaceURI))) (l = Lr(l)), (t = Gr(l, t))
        else
          switch (t) {
            case 'svg':
              t = 1
              break
            case 'math':
              t = 2
              break
            default:
              t = 0
          }
    }
    B(Q), x(Q, t)
  }
  function wl() {
    B(Q), B(ft), B(W)
  }
  function Vn(t) {
    t.memoizedState !== null && x(ll, t)
    var l = Q.current,
      e = Gr(l, t.type)
    l !== e && (x(ft, t), x(Q, e))
  }
  function _u(t) {
    ft.current === t && (B(Q), B(ft)), ll.current === t && (B(ll), (yu._currentValue = K))
  }
  var Kn = Object.prototype.hasOwnProperty,
    wn = f.unstable_scheduleCallback,
    Jn = f.unstable_cancelCallback,
    Hd = f.unstable_shouldYield,
    xd = f.unstable_requestPaint,
    Tl = f.unstable_now,
    qd = f.unstable_getCurrentPriorityLevel,
    gf = f.unstable_ImmediatePriority,
    Sf = f.unstable_UserBlockingPriority,
    zu = f.unstable_NormalPriority,
    Bd = f.unstable_LowPriority,
    bf = f.unstable_IdlePriority,
    Yd = f.log,
    Ld = f.unstable_setDisableYieldValue,
    Oa = null,
    el = null
  function Jl(t) {
    if ((typeof Yd == 'function' && Ld(t), el && typeof el.setStrictMode == 'function'))
      try {
        el.setStrictMode(Oa, t)
      } catch {}
  }
  var al = Math.clz32 ? Math.clz32 : Xd,
    Gd = Math.log,
    jd = Math.LN2
  function Xd(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Gd(t) / jd) | 0)) | 0
  }
  var Du = 256,
    Ru = 4194304
  function be(t) {
    var l = t & 42
    if (l !== 0) return l
    switch (t & -t) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
      case 64:
        return 64
      case 128:
        return 128
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560
      case 67108864:
        return 67108864
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 0
      default:
        return t
    }
  }
  function Uu(t, l, e) {
    var a = t.pendingLanes
    if (a === 0) return 0
    var u = 0,
      n = t.suspendedLanes,
      i = t.pingedLanes
    t = t.warmLanes
    var c = a & 134217727
    return (
      c !== 0
        ? ((a = c & ~n),
          a !== 0
            ? (u = be(a))
            : ((i &= c), i !== 0 ? (u = be(i)) : e || ((e = c & ~t), e !== 0 && (u = be(e)))))
        : ((c = a & ~n),
          c !== 0
            ? (u = be(c))
            : i !== 0
              ? (u = be(i))
              : e || ((e = a & ~t), e !== 0 && (u = be(e)))),
      u === 0
        ? 0
        : l !== 0 &&
            l !== u &&
            (l & n) === 0 &&
            ((n = u & -u), (e = l & -l), n >= e || (n === 32 && (e & 4194048) !== 0))
          ? l
          : u
    )
  }
  function Ma(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0
  }
  function Qd(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function Ef() {
    var t = Du
    return (Du <<= 1), (Du & 4194048) === 0 && (Du = 256), t
  }
  function pf() {
    var t = Ru
    return (Ru <<= 1), (Ru & 62914560) === 0 && (Ru = 4194304), t
  }
  function kn(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t)
    return l
  }
  function _a(t, l) {
    ;(t.pendingLanes |= l),
      l !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0))
  }
  function Zd(t, l, e, a, u, n) {
    var i = t.pendingLanes
    ;(t.pendingLanes = e),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= e),
      (t.entangledLanes &= e),
      (t.errorRecoveryDisabledLanes &= e),
      (t.shellSuspendCounter = 0)
    var c = t.entanglements,
      r = t.expirationTimes,
      g = t.hiddenUpdates
    for (e = i & ~e; 0 < e; ) {
      var p = 31 - al(e),
        _ = 1 << p
      ;(c[p] = 0), (r[p] = -1)
      var S = g[p]
      if (S !== null)
        for (g[p] = null, p = 0; p < S.length; p++) {
          var b = S[p]
          b !== null && (b.lane &= -536870913)
        }
      e &= ~_
    }
    a !== 0 && Af(t, a, 0), n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l))
  }
  function Af(t, l, e) {
    ;(t.pendingLanes |= l), (t.suspendedLanes &= ~l)
    var a = 31 - al(l)
    ;(t.entangledLanes |= l), (t.entanglements[a] = t.entanglements[a] | 1073741824 | (e & 4194090))
  }
  function Tf(t, l) {
    var e = (t.entangledLanes |= l)
    for (t = t.entanglements; e; ) {
      var a = 31 - al(e),
        u = 1 << a
      ;(u & l) | (t[a] & l) && (t[a] |= l), (e &= ~u)
    }
  }
  function Wn(t) {
    switch (t) {
      case 2:
        t = 1
        break
      case 8:
        t = 4
        break
      case 32:
        t = 16
        break
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128
        break
      case 268435456:
        t = 134217728
        break
      default:
        t = 0
    }
    return t
  }
  function $n(t) {
    return (t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
  }
  function Of() {
    var t = q.p
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : ud(t.type))
  }
  function Vd(t, l) {
    var e = q.p
    try {
      return (q.p = t), l()
    } finally {
      q.p = e
    }
  }
  var kl = Math.random().toString(36).slice(2),
    wt = '__reactFiber$' + kl,
    $t = '__reactProps$' + kl,
    Le = '__reactContainer$' + kl,
    Fn = '__reactEvents$' + kl,
    Kd = '__reactListeners$' + kl,
    wd = '__reactHandles$' + kl,
    Mf = '__reactResources$' + kl,
    za = '__reactMarker$' + kl
  function In(t) {
    delete t[wt], delete t[$t], delete t[Fn], delete t[Kd], delete t[wd]
  }
  function Ge(t) {
    var l = t[wt]
    if (l) return l
    for (var e = t.parentNode; e; ) {
      if ((l = e[Le] || e[wt])) {
        if (((e = l.alternate), l.child !== null || (e !== null && e.child !== null)))
          for (t = Zr(t); t !== null; ) {
            if ((e = t[wt])) return e
            t = Zr(t)
          }
        return l
      }
      ;(t = e), (e = t.parentNode)
    }
    return null
  }
  function je(t) {
    if ((t = t[wt] || t[Le])) {
      var l = t.tag
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3) return t
    }
    return null
  }
  function Da(t) {
    var l = t.tag
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode
    throw Error(s(33))
  }
  function Xe(t) {
    var l = t[Mf]
    return l || (l = t[Mf] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), l
  }
  function Yt(t) {
    t[za] = !0
  }
  var _f = new Set(),
    zf = {}
  function Ee(t, l) {
    Qe(t, l), Qe(t + 'Capture', l)
  }
  function Qe(t, l) {
    for (zf[t] = l, t = 0; t < l.length; t++) _f.add(l[t])
  }
  var Jd = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Df = {},
    Rf = {}
  function kd(t) {
    return Kn.call(Rf, t)
      ? !0
      : Kn.call(Df, t)
        ? !1
        : Jd.test(t)
          ? (Rf[t] = !0)
          : ((Df[t] = !0), !1)
  }
  function Nu(t, l, e) {
    if (kd(l))
      if (e === null) t.removeAttribute(l)
      else {
        switch (typeof e) {
          case 'undefined':
          case 'function':
          case 'symbol':
            t.removeAttribute(l)
            return
          case 'boolean':
            var a = l.toLowerCase().slice(0, 5)
            if (a !== 'data-' && a !== 'aria-') {
              t.removeAttribute(l)
              return
            }
        }
        t.setAttribute(l, '' + e)
      }
  }
  function Cu(t, l, e) {
    if (e === null) t.removeAttribute(l)
    else {
      switch (typeof e) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(l)
          return
      }
      t.setAttribute(l, '' + e)
    }
  }
  function Ul(t, l, e, a) {
    if (a === null) t.removeAttribute(e)
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(e)
          return
      }
      t.setAttributeNS(l, e, '' + a)
    }
  }
  var Pn, Uf
  function Ze(t) {
    if (Pn === void 0)
      try {
        throw Error()
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/)
        ;(Pn = (l && l[1]) || ''),
          (Uf =
            -1 <
            e.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < e.stack.indexOf('@')
                ? '@unknown:0:0'
                : '')
      }
    return (
      `
` +
      Pn +
      t +
      Uf
    )
  }
  var ti = !1
  function li(t, l) {
    if (!t || ti) return ''
    ti = !0
    var e = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (l) {
              var _ = function () {
                throw Error()
              }
              if (
                (Object.defineProperty(_.prototype, 'props', {
                  set: function () {
                    throw Error()
                  }
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(_, [])
                } catch (b) {
                  var S = b
                }
                Reflect.construct(t, [], _)
              } else {
                try {
                  _.call()
                } catch (b) {
                  S = b
                }
                t.call(_.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (b) {
                S = b
              }
              ;(_ = t()) && typeof _.catch == 'function' && _.catch(function () {})
            }
          } catch (b) {
            if (b && S && typeof b.stack == 'string') return [b.stack, S.stack]
          }
          return [null, null]
        }
      }
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot'
      var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name')
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot'
        })
      var n = a.DetermineComponentFrameRoot(),
        i = n[0],
        c = n[1]
      if (i && c) {
        var r = i.split(`
`),
          g = c.split(`
`)
        for (u = a = 0; a < r.length && !r[a].includes('DetermineComponentFrameRoot'); ) a++
        for (; u < g.length && !g[u].includes('DetermineComponentFrameRoot'); ) u++
        if (a === r.length || u === g.length)
          for (a = r.length - 1, u = g.length - 1; 1 <= a && 0 <= u && r[a] !== g[u]; ) u--
        for (; 1 <= a && 0 <= u; a--, u--)
          if (r[a] !== g[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || r[a] !== g[u])) {
                  var p =
                    `
` + r[a].replace(' at new ', ' at ')
                  return (
                    t.displayName &&
                      p.includes('<anonymous>') &&
                      (p = p.replace('<anonymous>', t.displayName)),
                    p
                  )
                }
              while (1 <= a && 0 <= u)
            break
          }
      }
    } finally {
      ;(ti = !1), (Error.prepareStackTrace = e)
    }
    return (e = t ? t.displayName || t.name : '') ? Ze(e) : ''
  }
  function Wd(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ze(t.type)
      case 16:
        return Ze('Lazy')
      case 13:
        return Ze('Suspense')
      case 19:
        return Ze('SuspenseList')
      case 0:
      case 15:
        return li(t.type, !1)
      case 11:
        return li(t.type.render, !1)
      case 1:
        return li(t.type, !0)
      case 31:
        return Ze('Activity')
      default:
        return ''
    }
  }
  function Nf(t) {
    try {
      var l = ''
      do (l += Wd(t)), (t = t.return)
      while (t)
      return l
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      )
    }
  }
  function rl(t) {
    switch (typeof t) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return t
      case 'object':
        return t
      default:
        return ''
    }
  }
  function Cf(t) {
    var l = t.type
    return (t = t.nodeName) && t.toLowerCase() === 'input' && (l === 'checkbox' || l === 'radio')
  }
  function $d(t) {
    var l = Cf(t) ? 'checked' : 'value',
      e = Object.getOwnPropertyDescriptor(t.constructor.prototype, l),
      a = '' + t[l]
    if (
      !t.hasOwnProperty(l) &&
      typeof e < 'u' &&
      typeof e.get == 'function' &&
      typeof e.set == 'function'
    ) {
      var u = e.get,
        n = e.set
      return (
        Object.defineProperty(t, l, {
          configurable: !0,
          get: function () {
            return u.call(this)
          },
          set: function (i) {
            ;(a = '' + i), n.call(this, i)
          }
        }),
        Object.defineProperty(t, l, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return a
          },
          setValue: function (i) {
            a = '' + i
          },
          stopTracking: function () {
            ;(t._valueTracker = null), delete t[l]
          }
        }
      )
    }
  }
  function Hu(t) {
    t._valueTracker || (t._valueTracker = $d(t))
  }
  function Hf(t) {
    if (!t) return !1
    var l = t._valueTracker
    if (!l) return !0
    var e = l.getValue(),
      a = ''
    return (
      t && (a = Cf(t) ? (t.checked ? 'true' : 'false') : t.value),
      (t = a),
      t !== e ? (l.setValue(t), !0) : !1
    )
  }
  function xu(t) {
    if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null
    try {
      return t.activeElement || t.body
    } catch {
      return t.body
    }
  }
  var Fd = /[\n"\\]/g
  function dl(t) {
    return t.replace(Fd, function (l) {
      return '\\' + l.charCodeAt(0).toString(16) + ' '
    })
  }
  function ei(t, l, e, a, u, n, i, c) {
    ;(t.name = ''),
      i != null && typeof i != 'function' && typeof i != 'symbol' && typeof i != 'boolean'
        ? (t.type = i)
        : t.removeAttribute('type'),
      l != null
        ? i === 'number'
          ? ((l === 0 && t.value === '') || t.value != l) && (t.value = '' + rl(l))
          : t.value !== '' + rl(l) && (t.value = '' + rl(l))
        : (i !== 'submit' && i !== 'reset') || t.removeAttribute('value'),
      l != null
        ? ai(t, i, rl(l))
        : e != null
          ? ai(t, i, rl(e))
          : a != null && t.removeAttribute('value'),
      u == null && n != null && (t.defaultChecked = !!n),
      u != null && (t.checked = u && typeof u != 'function' && typeof u != 'symbol'),
      c != null && typeof c != 'function' && typeof c != 'symbol' && typeof c != 'boolean'
        ? (t.name = '' + rl(c))
        : t.removeAttribute('name')
  }
  function xf(t, l, e, a, u, n, i, c) {
    if (
      (n != null &&
        typeof n != 'function' &&
        typeof n != 'symbol' &&
        typeof n != 'boolean' &&
        (t.type = n),
      l != null || e != null)
    ) {
      if (!((n !== 'submit' && n !== 'reset') || l != null)) return
      ;(e = e != null ? '' + rl(e) : ''),
        (l = l != null ? '' + rl(l) : e),
        c || l === t.value || (t.value = l),
        (t.defaultValue = l)
    }
    ;(a = a ?? u),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (t.checked = c ? t.checked : !!a),
      (t.defaultChecked = !!a),
      i != null &&
        typeof i != 'function' &&
        typeof i != 'symbol' &&
        typeof i != 'boolean' &&
        (t.name = i)
  }
  function ai(t, l, e) {
    ;(l === 'number' && xu(t.ownerDocument) === t) ||
      t.defaultValue === '' + e ||
      (t.defaultValue = '' + e)
  }
  function Ve(t, l, e, a) {
    if (((t = t.options), l)) {
      l = {}
      for (var u = 0; u < e.length; u++) l['$' + e[u]] = !0
      for (e = 0; e < t.length; e++)
        (u = l.hasOwnProperty('$' + t[e].value)),
          t[e].selected !== u && (t[e].selected = u),
          u && a && (t[e].defaultSelected = !0)
    } else {
      for (e = '' + rl(e), l = null, u = 0; u < t.length; u++) {
        if (t[u].value === e) {
          ;(t[u].selected = !0), a && (t[u].defaultSelected = !0)
          return
        }
        l !== null || t[u].disabled || (l = t[u])
      }
      l !== null && (l.selected = !0)
    }
  }
  function qf(t, l, e) {
    if (l != null && ((l = '' + rl(l)), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l)
      return
    }
    t.defaultValue = e != null ? '' + rl(e) : ''
  }
  function Bf(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(s(92))
        if (Kt(a)) {
          if (1 < a.length) throw Error(s(93))
          a = a[0]
        }
        e = a
      }
      e == null && (e = ''), (l = e)
    }
    ;(e = rl(l)),
      (t.defaultValue = e),
      (a = t.textContent),
      a === e && a !== '' && a !== null && (t.value = a)
  }
  function Ke(t, l) {
    if (l) {
      var e = t.firstChild
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l
        return
      }
    }
    t.textContent = l
  }
  var Id = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  )
  function Yf(t, l, e) {
    var a = l.indexOf('--') === 0
    e == null || typeof e == 'boolean' || e === ''
      ? a
        ? t.setProperty(l, '')
        : l === 'float'
          ? (t.cssFloat = '')
          : (t[l] = '')
      : a
        ? t.setProperty(l, e)
        : typeof e != 'number' || e === 0 || Id.has(l)
          ? l === 'float'
            ? (t.cssFloat = e)
            : (t[l] = ('' + e).trim())
          : (t[l] = e + 'px')
  }
  function Lf(t, l, e) {
    if (l != null && typeof l != 'object') throw Error(s(62))
    if (((t = t.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (l != null && l.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0
            ? t.setProperty(a, '')
            : a === 'float'
              ? (t.cssFloat = '')
              : (t[a] = ''))
      for (var u in l) (a = l[u]), l.hasOwnProperty(u) && e[u] !== a && Yf(t, u, a)
    } else for (var n in l) l.hasOwnProperty(n) && Yf(t, n, l[n])
  }
  function ui(t) {
    if (t.indexOf('-') === -1) return !1
    switch (t) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var Pd = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height']
    ]),
    t0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
  function qu(t) {
    return t0.test('' + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t
  }
  var ni = null
  function ii(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    )
  }
  var we = null,
    Je = null
  function Gf(t) {
    var l = je(t)
    if (l && (t = l.stateNode)) {
      var e = t[$t] || null
      t: switch (((t = l.stateNode), l.type)) {
        case 'input':
          if (
            (ei(
              t,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name
            ),
            (l = e.name),
            e.type === 'radio' && l != null)
          ) {
            for (e = t; e.parentNode; ) e = e.parentNode
            for (
              e = e.querySelectorAll('input[name="' + dl('' + l) + '"][type="radio"]'), l = 0;
              l < e.length;
              l++
            ) {
              var a = e[l]
              if (a !== t && a.form === t.form) {
                var u = a[$t] || null
                if (!u) throw Error(s(90))
                ei(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                )
              }
            }
            for (l = 0; l < e.length; l++) (a = e[l]), a.form === t.form && Hf(a)
          }
          break t
        case 'textarea':
          qf(t, e.value, e.defaultValue)
          break t
        case 'select':
          ;(l = e.value), l != null && Ve(t, !!e.multiple, l, !1)
      }
    }
  }
  var ci = !1
  function jf(t, l, e) {
    if (ci) return t(l, e)
    ci = !0
    try {
      var a = t(l)
      return a
    } finally {
      if (
        ((ci = !1),
        (we !== null || Je !== null) &&
          (pn(), we && ((l = we), (t = Je), (Je = we = null), Gf(l), t)))
      )
        for (l = 0; l < t.length; l++) Gf(t[l])
    }
  }
  function Ra(t, l) {
    var e = t.stateNode
    if (e === null) return null
    var a = e[$t] || null
    if (a === null) return null
    e = a[l]
    t: switch (l) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ;(a = !a.disabled) ||
          ((t = t.type),
          (a = !(t === 'button' || t === 'input' || t === 'select' || t === 'textarea'))),
          (t = !a)
        break t
      default:
        t = !1
    }
    if (t) return null
    if (e && typeof e != 'function') throw Error(s(231, l, typeof e))
    return e
  }
  var Nl = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    fi = !1
  if (Nl)
    try {
      var Ua = {}
      Object.defineProperty(Ua, 'passive', {
        get: function () {
          fi = !0
        }
      }),
        window.addEventListener('test', Ua, Ua),
        window.removeEventListener('test', Ua, Ua)
    } catch {
      fi = !1
    }
  var Wl = null,
    si = null,
    Bu = null
  function Xf() {
    if (Bu) return Bu
    var t,
      l = si,
      e = l.length,
      a,
      u = 'value' in Wl ? Wl.value : Wl.textContent,
      n = u.length
    for (t = 0; t < e && l[t] === u[t]; t++);
    var i = e - t
    for (a = 1; a <= i && l[e - a] === u[n - a]; a++);
    return (Bu = u.slice(t, 1 < a ? 1 - a : void 0))
  }
  function Yu(t) {
    var l = t.keyCode
    return (
      'charCode' in t ? ((t = t.charCode), t === 0 && l === 13 && (t = 13)) : (t = l),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    )
  }
  function Lu() {
    return !0
  }
  function Qf() {
    return !1
  }
  function Ft(t) {
    function l(e, a, u, n, i) {
      ;(this._reactName = e),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null)
      for (var c in t) t.hasOwnProperty(c) && ((e = t[c]), (this[c] = e ? e(n) : n[c]))
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Lu
          : Qf),
        (this.isPropagationStopped = Qf),
        this
      )
    }
    return (
      D(l.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var e = this.nativeEvent
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != 'unknown' && (e.returnValue = !1),
            (this.isDefaultPrevented = Lu))
        },
        stopPropagation: function () {
          var e = this.nativeEvent
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != 'unknown' && (e.cancelBubble = !0),
            (this.isPropagationStopped = Lu))
        },
        persist: function () {},
        isPersistent: Lu
      }),
      l
    )
  }
  var pe = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    Gu = Ft(pe),
    Na = D({}, pe, { view: 0, detail: 0 }),
    l0 = Ft(Na),
    oi,
    ri,
    Ca,
    ju = D({}, Na, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: hi,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget
      },
      movementX: function (t) {
        return 'movementX' in t
          ? t.movementX
          : (t !== Ca &&
              (Ca && t.type === 'mousemove'
                ? ((oi = t.screenX - Ca.screenX), (ri = t.screenY - Ca.screenY))
                : (ri = oi = 0),
              (Ca = t)),
            oi)
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : ri
      }
    }),
    Zf = Ft(ju),
    e0 = D({}, ju, { dataTransfer: 0 }),
    a0 = Ft(e0),
    u0 = D({}, Na, { relatedTarget: 0 }),
    di = Ft(u0),
    n0 = D({}, pe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    i0 = Ft(n0),
    c0 = D({}, pe, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData
      }
    }),
    f0 = Ft(c0),
    s0 = D({}, pe, { data: 0 }),
    Vf = Ft(s0),
    o0 = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified'
    },
    r0 = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta'
    },
    d0 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
  function h0(t) {
    var l = this.nativeEvent
    return l.getModifierState ? l.getModifierState(t) : (t = d0[t]) ? !!l[t] : !1
  }
  function hi() {
    return h0
  }
  var m0 = D({}, Na, {
      key: function (t) {
        if (t.key) {
          var l = o0[t.key] || t.key
          if (l !== 'Unidentified') return l
        }
        return t.type === 'keypress'
          ? ((t = Yu(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup'
            ? r0[t.keyCode] || 'Unidentified'
            : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: hi,
      charCode: function (t) {
        return t.type === 'keypress' ? Yu(t) : 0
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0
      },
      which: function (t) {
        return t.type === 'keypress'
          ? Yu(t)
          : t.type === 'keydown' || t.type === 'keyup'
            ? t.keyCode
            : 0
      }
    }),
    v0 = Ft(m0),
    y0 = D({}, ju, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }),
    Kf = Ft(y0),
    g0 = D({}, Na, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hi
    }),
    S0 = Ft(g0),
    b0 = D({}, pe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    E0 = Ft(b0),
    p0 = D({}, ju, {
      deltaX: function (t) {
        return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0
      },
      deltaY: function (t) {
        return 'deltaY' in t
          ? t.deltaY
          : 'wheelDeltaY' in t
            ? -t.wheelDeltaY
            : 'wheelDelta' in t
              ? -t.wheelDelta
              : 0
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    A0 = Ft(p0),
    T0 = D({}, pe, { newState: 0, oldState: 0 }),
    O0 = Ft(T0),
    M0 = [9, 13, 27, 32],
    mi = Nl && 'CompositionEvent' in window,
    Ha = null
  Nl && 'documentMode' in document && (Ha = document.documentMode)
  var _0 = Nl && 'TextEvent' in window && !Ha,
    wf = Nl && (!mi || (Ha && 8 < Ha && 11 >= Ha)),
    Jf = ' ',
    kf = !1
  function Wf(t, l) {
    switch (t) {
      case 'keyup':
        return M0.indexOf(l.keyCode) !== -1
      case 'keydown':
        return l.keyCode !== 229
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function $f(t) {
    return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null
  }
  var ke = !1
  function z0(t, l) {
    switch (t) {
      case 'compositionend':
        return $f(l)
      case 'keypress':
        return l.which !== 32 ? null : ((kf = !0), Jf)
      case 'textInput':
        return (t = l.data), t === Jf && kf ? null : t
      default:
        return null
    }
  }
  function D0(t, l) {
    if (ke)
      return t === 'compositionend' || (!mi && Wf(t, l))
        ? ((t = Xf()), (Bu = si = Wl = null), (ke = !1), t)
        : null
    switch (t) {
      case 'paste':
        return null
      case 'keypress':
        if (!(l.ctrlKey || l.altKey || l.metaKey) || (l.ctrlKey && l.altKey)) {
          if (l.char && 1 < l.char.length) return l.char
          if (l.which) return String.fromCharCode(l.which)
        }
        return null
      case 'compositionend':
        return wf && l.locale !== 'ko' ? null : l.data
      default:
        return null
    }
  }
  var R0 = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  }
  function Ff(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase()
    return l === 'input' ? !!R0[t.type] : l === 'textarea'
  }
  function If(t, l, e, a) {
    we ? (Je ? Je.push(a) : (Je = [a])) : (we = a),
      (l = zn(l, 'onChange')),
      0 < l.length &&
        ((e = new Gu('onChange', 'change', null, e, a)), t.push({ event: e, listeners: l }))
  }
  var xa = null,
    qa = null
  function U0(t) {
    Hr(t, 0)
  }
  function Xu(t) {
    var l = Da(t)
    if (Hf(l)) return t
  }
  function Pf(t, l) {
    if (t === 'change') return l
  }
  var ts = !1
  if (Nl) {
    var vi
    if (Nl) {
      var yi = 'oninput' in document
      if (!yi) {
        var ls = document.createElement('div')
        ls.setAttribute('oninput', 'return;'), (yi = typeof ls.oninput == 'function')
      }
      vi = yi
    } else vi = !1
    ts = vi && (!document.documentMode || 9 < document.documentMode)
  }
  function es() {
    xa && (xa.detachEvent('onpropertychange', as), (qa = xa = null))
  }
  function as(t) {
    if (t.propertyName === 'value' && Xu(qa)) {
      var l = []
      If(l, qa, t, ii(t)), jf(U0, l)
    }
  }
  function N0(t, l, e) {
    t === 'focusin'
      ? (es(), (xa = l), (qa = e), xa.attachEvent('onpropertychange', as))
      : t === 'focusout' && es()
  }
  function C0(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return Xu(qa)
  }
  function H0(t, l) {
    if (t === 'click') return Xu(l)
  }
  function x0(t, l) {
    if (t === 'input' || t === 'change') return Xu(l)
  }
  function q0(t, l) {
    return (t === l && (t !== 0 || 1 / t === 1 / l)) || (t !== t && l !== l)
  }
  var ul = typeof Object.is == 'function' ? Object.is : q0
  function Ba(t, l) {
    if (ul(t, l)) return !0
    if (typeof t != 'object' || t === null || typeof l != 'object' || l === null) return !1
    var e = Object.keys(t),
      a = Object.keys(l)
    if (e.length !== a.length) return !1
    for (a = 0; a < e.length; a++) {
      var u = e[a]
      if (!Kn.call(l, u) || !ul(t[u], l[u])) return !1
    }
    return !0
  }
  function us(t) {
    for (; t && t.firstChild; ) t = t.firstChild
    return t
  }
  function ns(t, l) {
    var e = us(t)
    t = 0
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = t + e.textContent.length), t <= l && a >= l)) return { node: e, offset: l - t }
        t = a
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling
            break t
          }
          e = e.parentNode
        }
        e = void 0
      }
      e = us(e)
    }
  }
  function is(t, l) {
    return t && l
      ? t === l
        ? !0
        : t && t.nodeType === 3
          ? !1
          : l && l.nodeType === 3
            ? is(t, l.parentNode)
            : 'contains' in t
              ? t.contains(l)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(l) & 16)
                : !1
      : !1
  }
  function cs(t) {
    t =
      t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window
    for (var l = xu(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == 'string'
      } catch {
        e = !1
      }
      if (e) t = l.contentWindow
      else break
      l = xu(t.document)
    }
    return l
  }
  function gi(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase()
    return (
      l &&
      ((l === 'input' &&
        (t.type === 'text' ||
          t.type === 'search' ||
          t.type === 'tel' ||
          t.type === 'url' ||
          t.type === 'password')) ||
        l === 'textarea' ||
        t.contentEditable === 'true')
    )
  }
  var B0 = Nl && 'documentMode' in document && 11 >= document.documentMode,
    We = null,
    Si = null,
    Ya = null,
    bi = !1
  function fs(t, l, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument
    bi ||
      We == null ||
      We !== xu(a) ||
      ((a = We),
      'selectionStart' in a && gi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
          })),
      (Ya && Ba(Ya, a)) ||
        ((Ya = a),
        (a = zn(Si, 'onSelect')),
        0 < a.length &&
          ((l = new Gu('onSelect', 'select', null, l, e)),
          t.push({ event: l, listeners: a }),
          (l.target = We))))
  }
  function Ae(t, l) {
    var e = {}
    return (
      (e[t.toLowerCase()] = l.toLowerCase()),
      (e['Webkit' + t] = 'webkit' + l),
      (e['Moz' + t] = 'moz' + l),
      e
    )
  }
  var $e = {
      animationend: Ae('Animation', 'AnimationEnd'),
      animationiteration: Ae('Animation', 'AnimationIteration'),
      animationstart: Ae('Animation', 'AnimationStart'),
      transitionrun: Ae('Transition', 'TransitionRun'),
      transitionstart: Ae('Transition', 'TransitionStart'),
      transitioncancel: Ae('Transition', 'TransitionCancel'),
      transitionend: Ae('Transition', 'TransitionEnd')
    },
    Ei = {},
    ss = {}
  Nl &&
    ((ss = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete $e.animationend.animation,
      delete $e.animationiteration.animation,
      delete $e.animationstart.animation),
    'TransitionEvent' in window || delete $e.transitionend.transition)
  function Te(t) {
    if (Ei[t]) return Ei[t]
    if (!$e[t]) return t
    var l = $e[t],
      e
    for (e in l) if (l.hasOwnProperty(e) && e in ss) return (Ei[t] = l[e])
    return t
  }
  var os = Te('animationend'),
    rs = Te('animationiteration'),
    ds = Te('animationstart'),
    Y0 = Te('transitionrun'),
    L0 = Te('transitionstart'),
    G0 = Te('transitioncancel'),
    hs = Te('transitionend'),
    ms = new Map(),
    pi =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      )
  pi.push('scrollEnd')
  function El(t, l) {
    ms.set(t, l), Ee(l, [t])
  }
  var vs = new WeakMap()
  function hl(t, l) {
    if (typeof t == 'object' && t !== null) {
      var e = vs.get(t)
      return e !== void 0 ? e : ((l = { value: t, source: l, stack: Nf(l) }), vs.set(t, l), l)
    }
    return { value: t, source: l, stack: Nf(l) }
  }
  var ml = [],
    Fe = 0,
    Ai = 0
  function Qu() {
    for (var t = Fe, l = (Ai = Fe = 0); l < t; ) {
      var e = ml[l]
      ml[l++] = null
      var a = ml[l]
      ml[l++] = null
      var u = ml[l]
      ml[l++] = null
      var n = ml[l]
      if (((ml[l++] = null), a !== null && u !== null)) {
        var i = a.pending
        i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)), (a.pending = u)
      }
      n !== 0 && ys(e, u, n)
    }
  }
  function Zu(t, l, e, a) {
    ;(ml[Fe++] = t),
      (ml[Fe++] = l),
      (ml[Fe++] = e),
      (ml[Fe++] = a),
      (Ai |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a)
  }
  function Ti(t, l, e, a) {
    return Zu(t, l, e, a), Vu(t)
  }
  function Ie(t, l) {
    return Zu(t, null, null, l), Vu(t)
  }
  function ys(t, l, e) {
    t.lanes |= e
    var a = t.alternate
    a !== null && (a.lanes |= e)
    for (var u = !1, n = t.return; n !== null; )
      (n.childLanes |= e),
        (a = n.alternate),
        a !== null && (a.childLanes |= e),
        n.tag === 22 && ((t = n.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = n),
        (n = n.return)
    return t.tag === 3
      ? ((n = t.stateNode),
        u &&
          l !== null &&
          ((u = 31 - al(e)),
          (t = n.hiddenUpdates),
          (a = t[u]),
          a === null ? (t[u] = [l]) : a.push(l),
          (l.lane = e | 536870912)),
        n)
      : null
  }
  function Vu(t) {
    if (50 < fu) throw ((fu = 0), (Rc = null), Error(s(185)))
    for (var l = t.return; l !== null; ) (t = l), (l = t.return)
    return t.tag === 3 ? t.stateNode : null
  }
  var Pe = {}
  function j0(t, l, e, a) {
    ;(this.tag = t),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = l),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null)
  }
  function nl(t, l, e, a) {
    return new j0(t, l, e, a)
  }
  function Oi(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent)
  }
  function Cl(t, l) {
    var e = t.alternate
    return (
      e === null
        ? ((e = nl(t.tag, l, t.key, t.mode)),
          (e.elementType = t.elementType),
          (e.type = t.type),
          (e.stateNode = t.stateNode),
          (e.alternate = t),
          (t.alternate = e))
        : ((e.pendingProps = l),
          (e.type = t.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = t.flags & 65011712),
      (e.childLanes = t.childLanes),
      (e.lanes = t.lanes),
      (e.child = t.child),
      (e.memoizedProps = t.memoizedProps),
      (e.memoizedState = t.memoizedState),
      (e.updateQueue = t.updateQueue),
      (l = t.dependencies),
      (e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }),
      (e.sibling = t.sibling),
      (e.index = t.index),
      (e.ref = t.ref),
      (e.refCleanup = t.refCleanup),
      e
    )
  }
  function gs(t, l) {
    t.flags &= 65011714
    var e = t.alternate
    return (
      e === null
        ? ((t.childLanes = 0),
          (t.lanes = l),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = e.childLanes),
          (t.lanes = e.lanes),
          (t.child = e.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = e.memoizedProps),
          (t.memoizedState = e.memoizedState),
          (t.updateQueue = e.updateQueue),
          (t.type = e.type),
          (l = e.dependencies),
          (t.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext })),
      t
    )
  }
  function Ku(t, l, e, a, u, n) {
    var i = 0
    if (((a = t), typeof t == 'function')) Oi(t) && (i = 1)
    else if (typeof t == 'string')
      i = Qh(t, e, Q.current) ? 26 : t === 'html' || t === 'head' || t === 'body' ? 27 : 5
    else
      t: switch (t) {
        case Rt:
          return (t = nl(31, e, l, u)), (t.elementType = Rt), (t.lanes = n), t
        case H:
          return Oe(e.children, u, n, l)
        case k:
          ;(i = 8), (u |= 24)
          break
        case $:
          return (t = nl(12, e, l, u | 2)), (t.elementType = $), (t.lanes = n), t
        case j:
          return (t = nl(13, e, l, u)), (t.elementType = j), (t.lanes = n), t
        case it:
          return (t = nl(19, e, l, u)), (t.elementType = it), (t.lanes = n), t
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case I:
              case tt:
                i = 10
                break t
              case ut:
                i = 9
                break t
              case nt:
                i = 11
                break t
              case bt:
                i = 14
                break t
              case pt:
                ;(i = 16), (a = null)
                break t
            }
          ;(i = 29), (e = Error(s(130, t === null ? 'null' : typeof t, ''))), (a = null)
      }
    return (l = nl(i, e, l, u)), (l.elementType = t), (l.type = a), (l.lanes = n), l
  }
  function Oe(t, l, e, a) {
    return (t = nl(7, t, a, l)), (t.lanes = e), t
  }
  function Mi(t, l, e) {
    return (t = nl(6, t, null, l)), (t.lanes = e), t
  }
  function _i(t, l, e) {
    return (
      (l = nl(4, t.children !== null ? t.children : [], t.key, l)),
      (l.lanes = e),
      (l.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }),
      l
    )
  }
  var ta = [],
    la = 0,
    wu = null,
    Ju = 0,
    vl = [],
    yl = 0,
    Me = null,
    Hl = 1,
    xl = ''
  function _e(t, l) {
    ;(ta[la++] = Ju), (ta[la++] = wu), (wu = t), (Ju = l)
  }
  function Ss(t, l, e) {
    ;(vl[yl++] = Hl), (vl[yl++] = xl), (vl[yl++] = Me), (Me = t)
    var a = Hl
    t = xl
    var u = 32 - al(a) - 1
    ;(a &= ~(1 << u)), (e += 1)
    var n = 32 - al(l) + u
    if (30 < n) {
      var i = u - (u % 5)
      ;(n = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (u -= i),
        (Hl = (1 << (32 - al(l) + u)) | (e << u) | a),
        (xl = n + t)
    } else (Hl = (1 << n) | (e << u) | a), (xl = t)
  }
  function zi(t) {
    t.return !== null && (_e(t, 1), Ss(t, 1, 0))
  }
  function Di(t) {
    for (; t === wu; ) (wu = ta[--la]), (ta[la] = null), (Ju = ta[--la]), (ta[la] = null)
    for (; t === Me; )
      (Me = vl[--yl]),
        (vl[yl] = null),
        (xl = vl[--yl]),
        (vl[yl] = null),
        (Hl = vl[--yl]),
        (vl[yl] = null)
  }
  var Wt = null,
    _t = null,
    rt = !1,
    ze = null,
    Ol = !1,
    Ri = Error(s(519))
  function De(t) {
    var l = Error(s(418, ''))
    throw (ja(hl(l, t)), Ri)
  }
  function bs(t) {
    var l = t.stateNode,
      e = t.type,
      a = t.memoizedProps
    switch (((l[wt] = t), (l[$t] = a), e)) {
      case 'dialog':
        at('cancel', l), at('close', l)
        break
      case 'iframe':
      case 'object':
      case 'embed':
        at('load', l)
        break
      case 'video':
      case 'audio':
        for (e = 0; e < ou.length; e++) at(ou[e], l)
        break
      case 'source':
        at('error', l)
        break
      case 'img':
      case 'image':
      case 'link':
        at('error', l), at('load', l)
        break
      case 'details':
        at('toggle', l)
        break
      case 'input':
        at('invalid', l),
          xf(l, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0),
          Hu(l)
        break
      case 'select':
        at('invalid', l)
        break
      case 'textarea':
        at('invalid', l), Bf(l, a.value, a.defaultValue, a.children), Hu(l)
    }
    ;(e = a.children),
      (typeof e != 'string' && typeof e != 'number' && typeof e != 'bigint') ||
      l.textContent === '' + e ||
      a.suppressHydrationWarning === !0 ||
      Yr(l.textContent, e)
        ? (a.popover != null && (at('beforetoggle', l), at('toggle', l)),
          a.onScroll != null && at('scroll', l),
          a.onScrollEnd != null && at('scrollend', l),
          a.onClick != null && (l.onclick = Dn),
          (l = !0))
        : (l = !1),
      l || De(t)
  }
  function Es(t) {
    for (Wt = t.return; Wt; )
      switch (Wt.tag) {
        case 5:
        case 13:
          Ol = !1
          return
        case 27:
        case 3:
          Ol = !0
          return
        default:
          Wt = Wt.return
      }
  }
  function La(t) {
    if (t !== Wt) return !1
    if (!rt) return Es(t), (rt = !0), !1
    var l = t.tag,
      e
    if (
      ((e = l !== 3 && l !== 27) &&
        ((e = l === 5) &&
          ((e = t.type), (e = !(e !== 'form' && e !== 'button') || Kc(t.type, t.memoizedProps))),
        (e = !e)),
      e && _t && De(t),
      Es(t),
      l === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(s(317))
      t: {
        for (t = t.nextSibling, l = 0; t; ) {
          if (t.nodeType === 8)
            if (((e = t.data), e === '/$')) {
              if (l === 0) {
                _t = Al(t.nextSibling)
                break t
              }
              l--
            } else (e !== '$' && e !== '$!' && e !== '$?') || l++
          t = t.nextSibling
        }
        _t = null
      }
    } else
      l === 27
        ? ((l = _t), re(t.type) ? ((t = Wc), (Wc = null), (_t = t)) : (_t = l))
        : (_t = Wt ? Al(t.stateNode.nextSibling) : null)
    return !0
  }
  function Ga() {
    ;(_t = Wt = null), (rt = !1)
  }
  function ps() {
    var t = ze
    return t !== null && (tl === null ? (tl = t) : tl.push.apply(tl, t), (ze = null)), t
  }
  function ja(t) {
    ze === null ? (ze = [t]) : ze.push(t)
  }
  var Ui = z(null),
    Re = null,
    ql = null
  function $l(t, l, e) {
    x(Ui, l._currentValue), (l._currentValue = e)
  }
  function Bl(t) {
    ;(t._currentValue = Ui.current), B(Ui)
  }
  function Ni(t, l, e) {
    for (; t !== null; ) {
      var a = t.alternate
      if (
        ((t.childLanes & l) !== l
          ? ((t.childLanes |= l), a !== null && (a.childLanes |= l))
          : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l),
        t === e)
      )
        break
      t = t.return
    }
  }
  function Ci(t, l, e, a) {
    var u = t.child
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies
      if (n !== null) {
        var i = u.child
        n = n.firstContext
        t: for (; n !== null; ) {
          var c = n
          n = u
          for (var r = 0; r < l.length; r++)
            if (c.context === l[r]) {
              ;(n.lanes |= e),
                (c = n.alternate),
                c !== null && (c.lanes |= e),
                Ni(n.return, e, t),
                a || (i = null)
              break t
            }
          n = c.next
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(s(341))
        ;(i.lanes |= e), (n = i.alternate), n !== null && (n.lanes |= e), Ni(i, e, t), (i = null)
      } else i = u.child
      if (i !== null) i.return = u
      else
        for (i = u; i !== null; ) {
          if (i === t) {
            i = null
            break
          }
          if (((u = i.sibling), u !== null)) {
            ;(u.return = i.return), (i = u)
            break
          }
          i = i.return
        }
      u = i
    }
  }
  function Xa(t, l, e, a) {
    t = null
    for (var u = l, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0
        else if ((u.flags & 262144) !== 0) break
      }
      if (u.tag === 10) {
        var i = u.alternate
        if (i === null) throw Error(s(387))
        if (((i = i.memoizedProps), i !== null)) {
          var c = u.type
          ul(u.pendingProps.value, i.value) || (t !== null ? t.push(c) : (t = [c]))
        }
      } else if (u === ll.current) {
        if (((i = u.alternate), i === null)) throw Error(s(387))
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(yu) : (t = [yu]))
      }
      u = u.return
    }
    t !== null && Ci(l, t, e, a), (l.flags |= 262144)
  }
  function ku(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ul(t.context._currentValue, t.memoizedValue)) return !0
      t = t.next
    }
    return !1
  }
  function Ue(t) {
    ;(Re = t), (ql = null), (t = t.dependencies), t !== null && (t.firstContext = null)
  }
  function Jt(t) {
    return As(Re, t)
  }
  function Wu(t, l) {
    return Re === null && Ue(t), As(t, l)
  }
  function As(t, l) {
    var e = l._currentValue
    if (((l = { context: l, memoizedValue: e, next: null }), ql === null)) {
      if (t === null) throw Error(s(308))
      ;(ql = l), (t.dependencies = { lanes: 0, firstContext: l }), (t.flags |= 524288)
    } else ql = ql.next = l
    return e
  }
  var X0 =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var t = [],
              l = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  t.push(a)
                }
              })
            this.abort = function () {
              ;(l.aborted = !0),
                t.forEach(function (e) {
                  return e()
                })
            }
          },
    Q0 = f.unstable_scheduleCallback,
    Z0 = f.unstable_NormalPriority,
    qt = {
      $$typeof: tt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    }
  function Hi() {
    return { controller: new X0(), data: new Map(), refCount: 0 }
  }
  function Qa(t) {
    t.refCount--,
      t.refCount === 0 &&
        Q0(Z0, function () {
          t.controller.abort()
        })
  }
  var Za = null,
    xi = 0,
    ea = 0,
    aa = null
  function V0(t, l) {
    if (Za === null) {
      var e = (Za = [])
      ;(xi = 0),
        (ea = Bc()),
        (aa = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            e.push(a)
          }
        })
    }
    return xi++, l.then(Ts, Ts), l
  }
  function Ts() {
    if (--xi === 0 && Za !== null) {
      aa !== null && (aa.status = 'fulfilled')
      var t = Za
      ;(Za = null), (ea = 0), (aa = null)
      for (var l = 0; l < t.length; l++) (0, t[l])()
    }
  }
  function K0(t, l) {
    var e = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (u) {
          e.push(u)
        }
      }
    return (
      t.then(
        function () {
          ;(a.status = 'fulfilled'), (a.value = l)
          for (var u = 0; u < e.length; u++) (0, e[u])(l)
        },
        function (u) {
          for (a.status = 'rejected', a.reason = u, u = 0; u < e.length; u++) (0, e[u])(void 0)
        }
      ),
      a
    )
  }
  var Os = T.S
  T.S = function (t, l) {
    typeof l == 'object' && l !== null && typeof l.then == 'function' && V0(t, l),
      Os !== null && Os(t, l)
  }
  var Ne = z(null)
  function qi() {
    var t = Ne.current
    return t !== null ? t : Et.pooledCache
  }
  function $u(t, l) {
    l === null ? x(Ne, Ne.current) : x(Ne, l.pool)
  }
  function Ms() {
    var t = qi()
    return t === null ? null : { parent: qt._currentValue, pool: t }
  }
  var Va = Error(s(460)),
    _s = Error(s(474)),
    Fu = Error(s(542)),
    Bi = { then: function () {} }
  function zs(t) {
    return (t = t.status), t === 'fulfilled' || t === 'rejected'
  }
  function Iu() {}
  function Ds(t, l, e) {
    switch (
      ((e = t[e]), e === void 0 ? t.push(l) : e !== l && (l.then(Iu, Iu), (l = e)), l.status)
    ) {
      case 'fulfilled':
        return l.value
      case 'rejected':
        throw ((t = l.reason), Us(t), t)
      default:
        if (typeof l.status == 'string') l.then(Iu, Iu)
        else {
          if (((t = Et), t !== null && 100 < t.shellSuspendCounter)) throw Error(s(482))
          ;(t = l),
            (t.status = 'pending'),
            t.then(
              function (a) {
                if (l.status === 'pending') {
                  var u = l
                  ;(u.status = 'fulfilled'), (u.value = a)
                }
              },
              function (a) {
                if (l.status === 'pending') {
                  var u = l
                  ;(u.status = 'rejected'), (u.reason = a)
                }
              }
            )
        }
        switch (l.status) {
          case 'fulfilled':
            return l.value
          case 'rejected':
            throw ((t = l.reason), Us(t), t)
        }
        throw ((Ka = l), Va)
    }
  }
  var Ka = null
  function Rs() {
    if (Ka === null) throw Error(s(459))
    var t = Ka
    return (Ka = null), t
  }
  function Us(t) {
    if (t === Va || t === Fu) throw Error(s(483))
  }
  var Fl = !1
  function Yi(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    }
  }
  function Li(t, l) {
    ;(t = t.updateQueue),
      l.updateQueue === t &&
        (l.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null
        })
  }
  function Il(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null }
  }
  function Pl(t, l, e) {
    var a = t.updateQueue
    if (a === null) return null
    if (((a = a.shared), (dt & 2) !== 0)) {
      var u = a.pending
      return (
        u === null ? (l.next = l) : ((l.next = u.next), (u.next = l)),
        (a.pending = l),
        (l = Vu(t)),
        ys(t, null, e),
        l
      )
    }
    return Zu(t, a, l, e), Vu(t)
  }
  function wa(t, l, e) {
    if (((l = l.updateQueue), l !== null && ((l = l.shared), (e & 4194048) !== 0))) {
      var a = l.lanes
      ;(a &= t.pendingLanes), (e |= a), (l.lanes = e), Tf(t, e)
    }
  }
  function Gi(t, l) {
    var e = t.updateQueue,
      a = t.alternate
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var u = null,
        n = null
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var i = { lane: e.lane, tag: e.tag, payload: e.payload, callback: null, next: null }
          n === null ? (u = n = i) : (n = n.next = i), (e = e.next)
        } while (e !== null)
        n === null ? (u = n = l) : (n = n.next = l)
      } else u = n = l
      ;(e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }),
        (t.updateQueue = e)
      return
    }
    ;(t = e.lastBaseUpdate),
      t === null ? (e.firstBaseUpdate = l) : (t.next = l),
      (e.lastBaseUpdate = l)
  }
  var ji = !1
  function Ja() {
    if (ji) {
      var t = aa
      if (t !== null) throw t
    }
  }
  function ka(t, l, e, a) {
    ji = !1
    var u = t.updateQueue
    Fl = !1
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      c = u.shared.pending
    if (c !== null) {
      u.shared.pending = null
      var r = c,
        g = r.next
      ;(r.next = null), i === null ? (n = g) : (i.next = g), (i = r)
      var p = t.alternate
      p !== null &&
        ((p = p.updateQueue),
        (c = p.lastBaseUpdate),
        c !== i && (c === null ? (p.firstBaseUpdate = g) : (c.next = g), (p.lastBaseUpdate = r)))
    }
    if (n !== null) {
      var _ = u.baseState
      ;(i = 0), (p = g = r = null), (c = n)
      do {
        var S = c.lane & -536870913,
          b = S !== c.lane
        if (b ? (ct & S) === S : (a & S) === S) {
          S !== 0 && S === ea && (ji = !0),
            p !== null &&
              (p = p.next = { lane: 0, tag: c.tag, payload: c.payload, callback: null, next: null })
          t: {
            var w = t,
              Z = c
            S = l
            var yt = e
            switch (Z.tag) {
              case 1:
                if (((w = Z.payload), typeof w == 'function')) {
                  _ = w.call(yt, _, S)
                  break t
                }
                _ = w
                break t
              case 3:
                w.flags = (w.flags & -65537) | 128
              case 0:
                if (
                  ((w = Z.payload), (S = typeof w == 'function' ? w.call(yt, _, S) : w), S == null)
                )
                  break t
                _ = D({}, _, S)
                break t
              case 2:
                Fl = !0
            }
          }
          ;(S = c.callback),
            S !== null &&
              ((t.flags |= 64),
              b && (t.flags |= 8192),
              (b = u.callbacks),
              b === null ? (u.callbacks = [S]) : b.push(S))
        } else
          (b = { lane: S, tag: c.tag, payload: c.payload, callback: c.callback, next: null }),
            p === null ? ((g = p = b), (r = _)) : (p = p.next = b),
            (i |= S)
        if (((c = c.next), c === null)) {
          if (((c = u.shared.pending), c === null)) break
          ;(b = c), (c = b.next), (b.next = null), (u.lastBaseUpdate = b), (u.shared.pending = null)
        }
      } while (!0)
      p === null && (r = _),
        (u.baseState = r),
        (u.firstBaseUpdate = g),
        (u.lastBaseUpdate = p),
        n === null && (u.shared.lanes = 0),
        (ce |= i),
        (t.lanes = i),
        (t.memoizedState = _)
    }
  }
  function Ns(t, l) {
    if (typeof t != 'function') throw Error(s(191, t))
    t.call(l)
  }
  function Cs(t, l) {
    var e = t.callbacks
    if (e !== null) for (t.callbacks = null, t = 0; t < e.length; t++) Ns(e[t], l)
  }
  var ua = z(null),
    Pu = z(0)
  function Hs(t, l) {
    ;(t = Zl), x(Pu, t), x(ua, l), (Zl = t | l.baseLanes)
  }
  function Xi() {
    x(Pu, Zl), x(ua, ua.current)
  }
  function Qi() {
    ;(Zl = Pu.current), B(ua), B(Pu)
  }
  var te = 0,
    P = null,
    mt = null,
    Ht = null,
    tn = !1,
    na = !1,
    Ce = !1,
    ln = 0,
    Wa = 0,
    ia = null,
    w0 = 0
  function Ut() {
    throw Error(s(321))
  }
  function Zi(t, l) {
    if (l === null) return !1
    for (var e = 0; e < l.length && e < t.length; e++) if (!ul(t[e], l[e])) return !1
    return !0
  }
  function Vi(t, l, e, a, u, n) {
    return (
      (te = n),
      (P = l),
      (l.memoizedState = null),
      (l.updateQueue = null),
      (l.lanes = 0),
      (T.H = t === null || t.memoizedState === null ? go : So),
      (Ce = !1),
      (n = e(a, u)),
      (Ce = !1),
      na && (n = qs(l, e, a, u)),
      xs(t),
      n
    )
  }
  function xs(t) {
    T.H = fn
    var l = mt !== null && mt.next !== null
    if (((te = 0), (Ht = mt = P = null), (tn = !1), (Wa = 0), (ia = null), l)) throw Error(s(300))
    t === null || Lt || ((t = t.dependencies), t !== null && ku(t) && (Lt = !0))
  }
  function qs(t, l, e, a) {
    P = t
    var u = 0
    do {
      if ((na && (ia = null), (Wa = 0), (na = !1), 25 <= u)) throw Error(s(301))
      if (((u += 1), (Ht = mt = null), t.updateQueue != null)) {
        var n = t.updateQueue
        ;(n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0)
      }
      ;(T.H = P0), (n = l(e, a))
    } while (na)
    return n
  }
  function J0() {
    var t = T.H,
      l = t.useState()[0]
    return (
      (l = typeof l.then == 'function' ? $a(l) : l),
      (t = t.useState()[0]),
      (mt !== null ? mt.memoizedState : null) !== t && (P.flags |= 1024),
      l
    )
  }
  function Ki() {
    var t = ln !== 0
    return (ln = 0), t
  }
  function wi(t, l, e) {
    ;(l.updateQueue = t.updateQueue), (l.flags &= -2053), (t.lanes &= ~e)
  }
  function Ji(t) {
    if (tn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue
        l !== null && (l.pending = null), (t = t.next)
      }
      tn = !1
    }
    ;(te = 0), (Ht = mt = P = null), (na = !1), (Wa = ln = 0), (ia = null)
  }
  function It() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
    return Ht === null ? (P.memoizedState = Ht = t) : (Ht = Ht.next = t), Ht
  }
  function xt() {
    if (mt === null) {
      var t = P.alternate
      t = t !== null ? t.memoizedState : null
    } else t = mt.next
    var l = Ht === null ? P.memoizedState : Ht.next
    if (l !== null) (Ht = l), (mt = t)
    else {
      if (t === null) throw P.alternate === null ? Error(s(467)) : Error(s(310))
      ;(mt = t),
        (t = {
          memoizedState: mt.memoizedState,
          baseState: mt.baseState,
          baseQueue: mt.baseQueue,
          queue: mt.queue,
          next: null
        }),
        Ht === null ? (P.memoizedState = Ht = t) : (Ht = Ht.next = t)
    }
    return Ht
  }
  function ki() {
    return { lastEffect: null, events: null, stores: null, memoCache: null }
  }
  function $a(t) {
    var l = Wa
    return (
      (Wa += 1),
      ia === null && (ia = []),
      (t = Ds(ia, t, l)),
      (l = P),
      (Ht === null ? l.memoizedState : Ht.next) === null &&
        ((l = l.alternate), (T.H = l === null || l.memoizedState === null ? go : So)),
      t
    )
  }
  function en(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return $a(t)
      if (t.$$typeof === tt) return Jt(t)
    }
    throw Error(s(438, String(t)))
  }
  function Wi(t) {
    var l = null,
      e = P.updateQueue
    if ((e !== null && (l = e.memoCache), l == null)) {
      var a = P.alternate
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (l = {
              data: a.data.map(function (u) {
                return u.slice()
              }),
              index: 0
            })))
    }
    if (
      (l == null && (l = { data: [], index: 0 }),
      e === null && ((e = ki()), (P.updateQueue = e)),
      (e.memoCache = l),
      (e = l.data[l.index]),
      e === void 0)
    )
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++) e[a] = Ot
    return l.index++, e
  }
  function Yl(t, l) {
    return typeof l == 'function' ? l(t) : l
  }
  function an(t) {
    var l = xt()
    return $i(l, mt, t)
  }
  function $i(t, l, e) {
    var a = t.queue
    if (a === null) throw Error(s(311))
    a.lastRenderedReducer = e
    var u = t.baseQueue,
      n = a.pending
    if (n !== null) {
      if (u !== null) {
        var i = u.next
        ;(u.next = n.next), (n.next = i)
      }
      ;(l.baseQueue = u = n), (a.pending = null)
    }
    if (((n = t.baseState), u === null)) t.memoizedState = n
    else {
      l = u.next
      var c = (i = null),
        r = null,
        g = l,
        p = !1
      do {
        var _ = g.lane & -536870913
        if (_ !== g.lane ? (ct & _) === _ : (te & _) === _) {
          var S = g.revertLane
          if (S === 0)
            r !== null &&
              (r = r.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: g.action,
                  hasEagerState: g.hasEagerState,
                  eagerState: g.eagerState,
                  next: null
                }),
              _ === ea && (p = !0)
          else if ((te & S) === S) {
            ;(g = g.next), S === ea && (p = !0)
            continue
          } else
            (_ = {
              lane: 0,
              revertLane: g.revertLane,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }),
              r === null ? ((c = r = _), (i = n)) : (r = r.next = _),
              (P.lanes |= S),
              (ce |= S)
          ;(_ = g.action), Ce && e(n, _), (n = g.hasEagerState ? g.eagerState : e(n, _))
        } else
          (S = {
            lane: _,
            revertLane: g.revertLane,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          }),
            r === null ? ((c = r = S), (i = n)) : (r = r.next = S),
            (P.lanes |= _),
            (ce |= _)
        g = g.next
      } while (g !== null && g !== l)
      if (
        (r === null ? (i = n) : (r.next = c),
        !ul(n, t.memoizedState) && ((Lt = !0), p && ((e = aa), e !== null)))
      )
        throw e
      ;(t.memoizedState = n), (t.baseState = i), (t.baseQueue = r), (a.lastRenderedState = n)
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch]
  }
  function Fi(t) {
    var l = xt(),
      e = l.queue
    if (e === null) throw Error(s(311))
    e.lastRenderedReducer = t
    var a = e.dispatch,
      u = e.pending,
      n = l.memoizedState
    if (u !== null) {
      e.pending = null
      var i = (u = u.next)
      do (n = t(n, i.action)), (i = i.next)
      while (i !== u)
      ul(n, l.memoizedState) || (Lt = !0),
        (l.memoizedState = n),
        l.baseQueue === null && (l.baseState = n),
        (e.lastRenderedState = n)
    }
    return [n, a]
  }
  function Bs(t, l, e) {
    var a = P,
      u = xt(),
      n = rt
    if (n) {
      if (e === void 0) throw Error(s(407))
      e = e()
    } else e = l()
    var i = !ul((mt || u).memoizedState, e)
    i && ((u.memoizedState = e), (Lt = !0)), (u = u.queue)
    var c = Gs.bind(null, a, u, t)
    if (
      (Fa(2048, 8, c, [t]), u.getSnapshot !== l || i || (Ht !== null && Ht.memoizedState.tag & 1))
    ) {
      if (((a.flags |= 2048), ca(9, un(), Ls.bind(null, a, u, e, l), null), Et === null))
        throw Error(s(349))
      n || (te & 124) !== 0 || Ys(a, l, e)
    }
    return e
  }
  function Ys(t, l, e) {
    ;(t.flags |= 16384),
      (t = { getSnapshot: l, value: e }),
      (l = P.updateQueue),
      l === null
        ? ((l = ki()), (P.updateQueue = l), (l.stores = [t]))
        : ((e = l.stores), e === null ? (l.stores = [t]) : e.push(t))
  }
  function Ls(t, l, e, a) {
    ;(l.value = e), (l.getSnapshot = a), js(l) && Xs(t)
  }
  function Gs(t, l, e) {
    return e(function () {
      js(l) && Xs(t)
    })
  }
  function js(t) {
    var l = t.getSnapshot
    t = t.value
    try {
      var e = l()
      return !ul(t, e)
    } catch {
      return !0
    }
  }
  function Xs(t) {
    var l = Ie(t, 2)
    l !== null && ol(l, t, 2)
  }
  function Ii(t) {
    var l = It()
    if (typeof t == 'function') {
      var e = t
      if (((t = e()), Ce)) {
        Jl(!0)
        try {
          e()
        } finally {
          Jl(!1)
        }
      }
    }
    return (
      (l.memoizedState = l.baseState = t),
      (l.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yl,
        lastRenderedState: t
      }),
      l
    )
  }
  function Qs(t, l, e, a) {
    return (t.baseState = e), $i(t, mt, typeof a == 'function' ? a : Yl)
  }
  function k0(t, l, e, a, u) {
    if (cn(t)) throw Error(s(485))
    if (((t = l.action), t !== null)) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i)
        }
      }
      T.T !== null ? e(!0) : (n.isTransition = !1),
        a(n),
        (e = l.pending),
        e === null
          ? ((n.next = l.pending = n), Zs(l, n))
          : ((n.next = e.next), (l.pending = e.next = n))
    }
  }
  function Zs(t, l) {
    var e = l.action,
      a = l.payload,
      u = t.state
    if (l.isTransition) {
      var n = T.T,
        i = {}
      T.T = i
      try {
        var c = e(u, a),
          r = T.S
        r !== null && r(i, c), Vs(t, l, c)
      } catch (g) {
        Pi(t, l, g)
      } finally {
        T.T = n
      }
    } else
      try {
        ;(n = e(u, a)), Vs(t, l, n)
      } catch (g) {
        Pi(t, l, g)
      }
  }
  function Vs(t, l, e) {
    e !== null && typeof e == 'object' && typeof e.then == 'function'
      ? e.then(
          function (a) {
            Ks(t, l, a)
          },
          function (a) {
            return Pi(t, l, a)
          }
        )
      : Ks(t, l, e)
  }
  function Ks(t, l, e) {
    ;(l.status = 'fulfilled'),
      (l.value = e),
      ws(l),
      (t.state = e),
      (l = t.pending),
      l !== null &&
        ((e = l.next), e === l ? (t.pending = null) : ((e = e.next), (l.next = e), Zs(t, e)))
  }
  function Pi(t, l, e) {
    var a = t.pending
    if (((t.pending = null), a !== null)) {
      a = a.next
      do (l.status = 'rejected'), (l.reason = e), ws(l), (l = l.next)
      while (l !== a)
    }
    t.action = null
  }
  function ws(t) {
    t = t.listeners
    for (var l = 0; l < t.length; l++) (0, t[l])()
  }
  function Js(t, l) {
    return l
  }
  function ks(t, l) {
    if (rt) {
      var e = Et.formState
      if (e !== null) {
        t: {
          var a = P
          if (rt) {
            if (_t) {
              l: {
                for (var u = _t, n = Ol; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null
                    break l
                  }
                  if (((u = Al(u.nextSibling)), u === null)) {
                    u = null
                    break l
                  }
                }
                ;(n = u.data), (u = n === 'F!' || n === 'F' ? u : null)
              }
              if (u) {
                ;(_t = Al(u.nextSibling)), (a = u.data === 'F!')
                break t
              }
            }
            De(a)
          }
          a = !1
        }
        a && (l = e[0])
      }
    }
    return (
      (e = It()),
      (e.memoizedState = e.baseState = l),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Js,
        lastRenderedState: l
      }),
      (e.queue = a),
      (e = mo.bind(null, P, a)),
      (a.dispatch = e),
      (a = Ii(!1)),
      (n = uc.bind(null, P, !1, a.queue)),
      (a = It()),
      (u = { state: l, dispatch: null, action: t, pending: null }),
      (a.queue = u),
      (e = k0.bind(null, P, u, n, e)),
      (u.dispatch = e),
      (a.memoizedState = t),
      [l, e, !1]
    )
  }
  function Ws(t) {
    var l = xt()
    return $s(l, mt, t)
  }
  function $s(t, l, e) {
    if (
      ((l = $i(t, l, Js)[0]),
      (t = an(Yl)[0]),
      typeof l == 'object' && l !== null && typeof l.then == 'function')
    )
      try {
        var a = $a(l)
      } catch (i) {
        throw i === Va ? Fu : i
      }
    else a = l
    l = xt()
    var u = l.queue,
      n = u.dispatch
    return (
      e !== l.memoizedState && ((P.flags |= 2048), ca(9, un(), W0.bind(null, u, e), null)),
      [a, n, t]
    )
  }
  function W0(t, l) {
    t.action = l
  }
  function Fs(t) {
    var l = xt(),
      e = mt
    if (e !== null) return $s(l, e, t)
    xt(), (l = l.memoizedState), (e = xt())
    var a = e.queue.dispatch
    return (e.memoizedState = t), [l, a, !1]
  }
  function ca(t, l, e, a) {
    return (
      (t = { tag: t, create: e, deps: a, inst: l, next: null }),
      (l = P.updateQueue),
      l === null && ((l = ki()), (P.updateQueue = l)),
      (e = l.lastEffect),
      e === null
        ? (l.lastEffect = t.next = t)
        : ((a = e.next), (e.next = t), (t.next = a), (l.lastEffect = t)),
      t
    )
  }
  function un() {
    return { destroy: void 0, resource: void 0 }
  }
  function Is() {
    return xt().memoizedState
  }
  function nn(t, l, e, a) {
    var u = It()
    ;(a = a === void 0 ? null : a), (P.flags |= t), (u.memoizedState = ca(1 | l, un(), e, a))
  }
  function Fa(t, l, e, a) {
    var u = xt()
    a = a === void 0 ? null : a
    var n = u.memoizedState.inst
    mt !== null && a !== null && Zi(a, mt.memoizedState.deps)
      ? (u.memoizedState = ca(l, n, e, a))
      : ((P.flags |= t), (u.memoizedState = ca(1 | l, n, e, a)))
  }
  function Ps(t, l) {
    nn(8390656, 8, t, l)
  }
  function to(t, l) {
    Fa(2048, 8, t, l)
  }
  function lo(t, l) {
    return Fa(4, 2, t, l)
  }
  function eo(t, l) {
    return Fa(4, 4, t, l)
  }
  function ao(t, l) {
    if (typeof l == 'function') {
      t = t()
      var e = l(t)
      return function () {
        typeof e == 'function' ? e() : l(null)
      }
    }
    if (l != null)
      return (
        (t = t()),
        (l.current = t),
        function () {
          l.current = null
        }
      )
  }
  function uo(t, l, e) {
    ;(e = e != null ? e.concat([t]) : null), Fa(4, 4, ao.bind(null, l, t), e)
  }
  function tc() {}
  function no(t, l) {
    var e = xt()
    l = l === void 0 ? null : l
    var a = e.memoizedState
    return l !== null && Zi(l, a[1]) ? a[0] : ((e.memoizedState = [t, l]), t)
  }
  function io(t, l) {
    var e = xt()
    l = l === void 0 ? null : l
    var a = e.memoizedState
    if (l !== null && Zi(l, a[1])) return a[0]
    if (((a = t()), Ce)) {
      Jl(!0)
      try {
        t()
      } finally {
        Jl(!1)
      }
    }
    return (e.memoizedState = [a, l]), a
  }
  function lc(t, l, e) {
    return e === void 0 || (te & 1073741824) !== 0
      ? (t.memoizedState = l)
      : ((t.memoizedState = e), (t = or()), (P.lanes |= t), (ce |= t), e)
  }
  function co(t, l, e, a) {
    return ul(e, l)
      ? e
      : ua.current !== null
        ? ((t = lc(t, e, a)), ul(t, l) || (Lt = !0), t)
        : (te & 42) === 0
          ? ((Lt = !0), (t.memoizedState = e))
          : ((t = or()), (P.lanes |= t), (ce |= t), l)
  }
  function fo(t, l, e, a, u) {
    var n = q.p
    q.p = n !== 0 && 8 > n ? n : 8
    var i = T.T,
      c = {}
    ;(T.T = c), uc(t, !1, l, e)
    try {
      var r = u(),
        g = T.S
      if (
        (g !== null && g(c, r), r !== null && typeof r == 'object' && typeof r.then == 'function')
      ) {
        var p = K0(r, a)
        Ia(t, l, p, sl(t))
      } else Ia(t, l, a, sl(t))
    } catch (_) {
      Ia(t, l, { then: function () {}, status: 'rejected', reason: _ }, sl())
    } finally {
      ;(q.p = n), (T.T = i)
    }
  }
  function $0() {}
  function ec(t, l, e, a) {
    if (t.tag !== 5) throw Error(s(476))
    var u = so(t).queue
    fo(
      t,
      u,
      l,
      K,
      e === null
        ? $0
        : function () {
            return oo(t), e(a)
          }
    )
  }
  function so(t) {
    var l = t.memoizedState
    if (l !== null) return l
    l = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yl,
        lastRenderedState: K
      },
      next: null
    }
    var e = {}
    return (
      (l.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Yl,
          lastRenderedState: e
        },
        next: null
      }),
      (t.memoizedState = l),
      (t = t.alternate),
      t !== null && (t.memoizedState = l),
      l
    )
  }
  function oo(t) {
    var l = so(t).next.queue
    Ia(t, l, {}, sl())
  }
  function ac() {
    return Jt(yu)
  }
  function ro() {
    return xt().memoizedState
  }
  function ho() {
    return xt().memoizedState
  }
  function F0(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = sl()
          t = Il(e)
          var a = Pl(l, t, e)
          a !== null && (ol(a, l, e), wa(a, l, e)), (l = { cache: Hi() }), (t.payload = l)
          return
      }
      l = l.return
    }
  }
  function I0(t, l, e) {
    var a = sl()
    ;(e = { lane: a, revertLane: 0, action: e, hasEagerState: !1, eagerState: null, next: null }),
      cn(t) ? vo(l, e) : ((e = Ti(t, l, e, a)), e !== null && (ol(e, t, a), yo(e, l, a)))
  }
  function mo(t, l, e) {
    var a = sl()
    Ia(t, l, e, a)
  }
  function Ia(t, l, e, a) {
    var u = { lane: a, revertLane: 0, action: e, hasEagerState: !1, eagerState: null, next: null }
    if (cn(t)) vo(l, u)
    else {
      var n = t.alternate
      if (
        t.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = l.lastRenderedReducer), n !== null)
      )
        try {
          var i = l.lastRenderedState,
            c = n(i, e)
          if (((u.hasEagerState = !0), (u.eagerState = c), ul(c, i)))
            return Zu(t, l, u, 0), Et === null && Qu(), !1
        } catch {
        } finally {
        }
      if (((e = Ti(t, l, u, a)), e !== null)) return ol(e, t, a), yo(e, l, a), !0
    }
    return !1
  }
  function uc(t, l, e, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Bc(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }),
      cn(t))
    ) {
      if (l) throw Error(s(479))
    } else (l = Ti(t, e, a, 2)), l !== null && ol(l, t, 2)
  }
  function cn(t) {
    var l = t.alternate
    return t === P || (l !== null && l === P)
  }
  function vo(t, l) {
    na = tn = !0
    var e = t.pending
    e === null ? (l.next = l) : ((l.next = e.next), (e.next = l)), (t.pending = l)
  }
  function yo(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes
      ;(a &= t.pendingLanes), (e |= a), (l.lanes = e), Tf(t, e)
    }
  }
  var fn = {
      readContext: Jt,
      use: en,
      useCallback: Ut,
      useContext: Ut,
      useEffect: Ut,
      useImperativeHandle: Ut,
      useLayoutEffect: Ut,
      useInsertionEffect: Ut,
      useMemo: Ut,
      useReducer: Ut,
      useRef: Ut,
      useState: Ut,
      useDebugValue: Ut,
      useDeferredValue: Ut,
      useTransition: Ut,
      useSyncExternalStore: Ut,
      useId: Ut,
      useHostTransitionStatus: Ut,
      useFormState: Ut,
      useActionState: Ut,
      useOptimistic: Ut,
      useMemoCache: Ut,
      useCacheRefresh: Ut
    },
    go = {
      readContext: Jt,
      use: en,
      useCallback: function (t, l) {
        return (It().memoizedState = [t, l === void 0 ? null : l]), t
      },
      useContext: Jt,
      useEffect: Ps,
      useImperativeHandle: function (t, l, e) {
        ;(e = e != null ? e.concat([t]) : null), nn(4194308, 4, ao.bind(null, l, t), e)
      },
      useLayoutEffect: function (t, l) {
        return nn(4194308, 4, t, l)
      },
      useInsertionEffect: function (t, l) {
        nn(4, 2, t, l)
      },
      useMemo: function (t, l) {
        var e = It()
        l = l === void 0 ? null : l
        var a = t()
        if (Ce) {
          Jl(!0)
          try {
            t()
          } finally {
            Jl(!1)
          }
        }
        return (e.memoizedState = [a, l]), a
      },
      useReducer: function (t, l, e) {
        var a = It()
        if (e !== void 0) {
          var u = e(l)
          if (Ce) {
            Jl(!0)
            try {
              e(l)
            } finally {
              Jl(!1)
            }
          }
        } else u = l
        return (
          (a.memoizedState = a.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u
          }),
          (a.queue = t),
          (t = t.dispatch = I0.bind(null, P, t)),
          [a.memoizedState, t]
        )
      },
      useRef: function (t) {
        var l = It()
        return (t = { current: t }), (l.memoizedState = t)
      },
      useState: function (t) {
        t = Ii(t)
        var l = t.queue,
          e = mo.bind(null, P, l)
        return (l.dispatch = e), [t.memoizedState, e]
      },
      useDebugValue: tc,
      useDeferredValue: function (t, l) {
        var e = It()
        return lc(e, t, l)
      },
      useTransition: function () {
        var t = Ii(!1)
        return (t = fo.bind(null, P, t.queue, !0, !1)), (It().memoizedState = t), [!1, t]
      },
      useSyncExternalStore: function (t, l, e) {
        var a = P,
          u = It()
        if (rt) {
          if (e === void 0) throw Error(s(407))
          e = e()
        } else {
          if (((e = l()), Et === null)) throw Error(s(349))
          ;(ct & 124) !== 0 || Ys(a, l, e)
        }
        u.memoizedState = e
        var n = { value: e, getSnapshot: l }
        return (
          (u.queue = n),
          Ps(Gs.bind(null, a, n, t), [t]),
          (a.flags |= 2048),
          ca(9, un(), Ls.bind(null, a, n, e, l), null),
          e
        )
      },
      useId: function () {
        var t = It(),
          l = Et.identifierPrefix
        if (rt) {
          var e = xl,
            a = Hl
          ;(e = (a & ~(1 << (32 - al(a) - 1))).toString(32) + e),
            (l = '«' + l + 'R' + e),
            (e = ln++),
            0 < e && (l += 'H' + e.toString(32)),
            (l += '»')
        } else (e = w0++), (l = '«' + l + 'r' + e.toString(32) + '»')
        return (t.memoizedState = l)
      },
      useHostTransitionStatus: ac,
      useFormState: ks,
      useActionState: ks,
      useOptimistic: function (t) {
        var l = It()
        l.memoizedState = l.baseState = t
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        }
        return (l.queue = e), (l = uc.bind(null, P, !0, e)), (e.dispatch = l), [t, l]
      },
      useMemoCache: Wi,
      useCacheRefresh: function () {
        return (It().memoizedState = F0.bind(null, P))
      }
    },
    So = {
      readContext: Jt,
      use: en,
      useCallback: no,
      useContext: Jt,
      useEffect: to,
      useImperativeHandle: uo,
      useInsertionEffect: lo,
      useLayoutEffect: eo,
      useMemo: io,
      useReducer: an,
      useRef: Is,
      useState: function () {
        return an(Yl)
      },
      useDebugValue: tc,
      useDeferredValue: function (t, l) {
        var e = xt()
        return co(e, mt.memoizedState, t, l)
      },
      useTransition: function () {
        var t = an(Yl)[0],
          l = xt().memoizedState
        return [typeof t == 'boolean' ? t : $a(t), l]
      },
      useSyncExternalStore: Bs,
      useId: ro,
      useHostTransitionStatus: ac,
      useFormState: Ws,
      useActionState: Ws,
      useOptimistic: function (t, l) {
        var e = xt()
        return Qs(e, mt, t, l)
      },
      useMemoCache: Wi,
      useCacheRefresh: ho
    },
    P0 = {
      readContext: Jt,
      use: en,
      useCallback: no,
      useContext: Jt,
      useEffect: to,
      useImperativeHandle: uo,
      useInsertionEffect: lo,
      useLayoutEffect: eo,
      useMemo: io,
      useReducer: Fi,
      useRef: Is,
      useState: function () {
        return Fi(Yl)
      },
      useDebugValue: tc,
      useDeferredValue: function (t, l) {
        var e = xt()
        return mt === null ? lc(e, t, l) : co(e, mt.memoizedState, t, l)
      },
      useTransition: function () {
        var t = Fi(Yl)[0],
          l = xt().memoizedState
        return [typeof t == 'boolean' ? t : $a(t), l]
      },
      useSyncExternalStore: Bs,
      useId: ro,
      useHostTransitionStatus: ac,
      useFormState: Fs,
      useActionState: Fs,
      useOptimistic: function (t, l) {
        var e = xt()
        return mt !== null ? Qs(e, mt, t, l) : ((e.baseState = t), [t, e.queue.dispatch])
      },
      useMemoCache: Wi,
      useCacheRefresh: ho
    },
    fa = null,
    Pa = 0
  function sn(t) {
    var l = Pa
    return (Pa += 1), fa === null && (fa = []), Ds(fa, t, l)
  }
  function tu(t, l) {
    ;(l = l.props.ref), (t.ref = l !== void 0 ? l : null)
  }
  function on(t, l) {
    throw l.$$typeof === X
      ? Error(s(525))
      : ((t = Object.prototype.toString.call(l)),
        Error(
          s(
            31,
            t === '[object Object]' ? 'object with keys {' + Object.keys(l).join(', ') + '}' : t
          )
        ))
  }
  function bo(t) {
    var l = t._init
    return l(t._payload)
  }
  function Eo(t) {
    function l(v, h) {
      if (t) {
        var y = v.deletions
        y === null ? ((v.deletions = [h]), (v.flags |= 16)) : y.push(h)
      }
    }
    function e(v, h) {
      if (!t) return null
      for (; h !== null; ) l(v, h), (h = h.sibling)
      return null
    }
    function a(v) {
      for (var h = new Map(); v !== null; )
        v.key !== null ? h.set(v.key, v) : h.set(v.index, v), (v = v.sibling)
      return h
    }
    function u(v, h) {
      return (v = Cl(v, h)), (v.index = 0), (v.sibling = null), v
    }
    function n(v, h, y) {
      return (
        (v.index = y),
        t
          ? ((y = v.alternate),
            y !== null
              ? ((y = y.index), y < h ? ((v.flags |= 67108866), h) : y)
              : ((v.flags |= 67108866), h))
          : ((v.flags |= 1048576), h)
      )
    }
    function i(v) {
      return t && v.alternate === null && (v.flags |= 67108866), v
    }
    function c(v, h, y, M) {
      return h === null || h.tag !== 6
        ? ((h = Mi(y, v.mode, M)), (h.return = v), h)
        : ((h = u(h, y)), (h.return = v), h)
    }
    function r(v, h, y, M) {
      var L = y.type
      return L === H
        ? p(v, h, y.props.children, M, y.key)
        : h !== null &&
            (h.elementType === L ||
              (typeof L == 'object' && L !== null && L.$$typeof === pt && bo(L) === h.type))
          ? ((h = u(h, y.props)), tu(h, y), (h.return = v), h)
          : ((h = Ku(y.type, y.key, y.props, null, v.mode, M)), tu(h, y), (h.return = v), h)
    }
    function g(v, h, y, M) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== y.containerInfo ||
        h.stateNode.implementation !== y.implementation
        ? ((h = _i(y, v.mode, M)), (h.return = v), h)
        : ((h = u(h, y.children || [])), (h.return = v), h)
    }
    function p(v, h, y, M, L) {
      return h === null || h.tag !== 7
        ? ((h = Oe(y, v.mode, M, L)), (h.return = v), h)
        : ((h = u(h, y)), (h.return = v), h)
    }
    function _(v, h, y) {
      if ((typeof h == 'string' && h !== '') || typeof h == 'number' || typeof h == 'bigint')
        return (h = Mi('' + h, v.mode, y)), (h.return = v), h
      if (typeof h == 'object' && h !== null) {
        switch (h.$$typeof) {
          case Y:
            return (y = Ku(h.type, h.key, h.props, null, v.mode, y)), tu(y, h), (y.return = v), y
          case J:
            return (h = _i(h, v.mode, y)), (h.return = v), h
          case pt:
            var M = h._init
            return (h = M(h._payload)), _(v, h, y)
        }
        if (Kt(h) || Ct(h)) return (h = Oe(h, v.mode, y, null)), (h.return = v), h
        if (typeof h.then == 'function') return _(v, sn(h), y)
        if (h.$$typeof === tt) return _(v, Wu(v, h), y)
        on(v, h)
      }
      return null
    }
    function S(v, h, y, M) {
      var L = h !== null ? h.key : null
      if ((typeof y == 'string' && y !== '') || typeof y == 'number' || typeof y == 'bigint')
        return L !== null ? null : c(v, h, '' + y, M)
      if (typeof y == 'object' && y !== null) {
        switch (y.$$typeof) {
          case Y:
            return y.key === L ? r(v, h, y, M) : null
          case J:
            return y.key === L ? g(v, h, y, M) : null
          case pt:
            return (L = y._init), (y = L(y._payload)), S(v, h, y, M)
        }
        if (Kt(y) || Ct(y)) return L !== null ? null : p(v, h, y, M, null)
        if (typeof y.then == 'function') return S(v, h, sn(y), M)
        if (y.$$typeof === tt) return S(v, h, Wu(v, y), M)
        on(v, y)
      }
      return null
    }
    function b(v, h, y, M, L) {
      if ((typeof M == 'string' && M !== '') || typeof M == 'number' || typeof M == 'bigint')
        return (v = v.get(y) || null), c(h, v, '' + M, L)
      if (typeof M == 'object' && M !== null) {
        switch (M.$$typeof) {
          case Y:
            return (v = v.get(M.key === null ? y : M.key) || null), r(h, v, M, L)
          case J:
            return (v = v.get(M.key === null ? y : M.key) || null), g(h, v, M, L)
          case pt:
            var lt = M._init
            return (M = lt(M._payload)), b(v, h, y, M, L)
        }
        if (Kt(M) || Ct(M)) return (v = v.get(y) || null), p(h, v, M, L, null)
        if (typeof M.then == 'function') return b(v, h, y, sn(M), L)
        if (M.$$typeof === tt) return b(v, h, y, Wu(h, M), L)
        on(h, M)
      }
      return null
    }
    function w(v, h, y, M) {
      for (
        var L = null, lt = null, G = h, V = (h = 0), jt = null;
        G !== null && V < y.length;
        V++
      ) {
        G.index > V ? ((jt = G), (G = null)) : (jt = G.sibling)
        var st = S(v, G, y[V], M)
        if (st === null) {
          G === null && (G = jt)
          break
        }
        t && G && st.alternate === null && l(v, G),
          (h = n(st, h, V)),
          lt === null ? (L = st) : (lt.sibling = st),
          (lt = st),
          (G = jt)
      }
      if (V === y.length) return e(v, G), rt && _e(v, V), L
      if (G === null) {
        for (; V < y.length; V++)
          (G = _(v, y[V], M)),
            G !== null && ((h = n(G, h, V)), lt === null ? (L = G) : (lt.sibling = G), (lt = G))
        return rt && _e(v, V), L
      }
      for (G = a(G); V < y.length; V++)
        (jt = b(G, v, V, y[V], M)),
          jt !== null &&
            (t && jt.alternate !== null && G.delete(jt.key === null ? V : jt.key),
            (h = n(jt, h, V)),
            lt === null ? (L = jt) : (lt.sibling = jt),
            (lt = jt))
      return (
        t &&
          G.forEach(function (ye) {
            return l(v, ye)
          }),
        rt && _e(v, V),
        L
      )
    }
    function Z(v, h, y, M) {
      if (y == null) throw Error(s(151))
      for (
        var L = null, lt = null, G = h, V = (h = 0), jt = null, st = y.next();
        G !== null && !st.done;
        V++, st = y.next()
      ) {
        G.index > V ? ((jt = G), (G = null)) : (jt = G.sibling)
        var ye = S(v, G, st.value, M)
        if (ye === null) {
          G === null && (G = jt)
          break
        }
        t && G && ye.alternate === null && l(v, G),
          (h = n(ye, h, V)),
          lt === null ? (L = ye) : (lt.sibling = ye),
          (lt = ye),
          (G = jt)
      }
      if (st.done) return e(v, G), rt && _e(v, V), L
      if (G === null) {
        for (; !st.done; V++, st = y.next())
          (st = _(v, st.value, M)),
            st !== null &&
              ((h = n(st, h, V)), lt === null ? (L = st) : (lt.sibling = st), (lt = st))
        return rt && _e(v, V), L
      }
      for (G = a(G); !st.done; V++, st = y.next())
        (st = b(G, v, V, st.value, M)),
          st !== null &&
            (t && st.alternate !== null && G.delete(st.key === null ? V : st.key),
            (h = n(st, h, V)),
            lt === null ? (L = st) : (lt.sibling = st),
            (lt = st))
      return (
        t &&
          G.forEach(function (tm) {
            return l(v, tm)
          }),
        rt && _e(v, V),
        L
      )
    }
    function yt(v, h, y, M) {
      if (
        (typeof y == 'object' &&
          y !== null &&
          y.type === H &&
          y.key === null &&
          (y = y.props.children),
        typeof y == 'object' && y !== null)
      ) {
        switch (y.$$typeof) {
          case Y:
            t: {
              for (var L = y.key; h !== null; ) {
                if (h.key === L) {
                  if (((L = y.type), L === H)) {
                    if (h.tag === 7) {
                      e(v, h.sibling), (M = u(h, y.props.children)), (M.return = v), (v = M)
                      break t
                    }
                  } else if (
                    h.elementType === L ||
                    (typeof L == 'object' && L !== null && L.$$typeof === pt && bo(L) === h.type)
                  ) {
                    e(v, h.sibling), (M = u(h, y.props)), tu(M, y), (M.return = v), (v = M)
                    break t
                  }
                  e(v, h)
                  break
                } else l(v, h)
                h = h.sibling
              }
              y.type === H
                ? ((M = Oe(y.props.children, v.mode, M, y.key)), (M.return = v), (v = M))
                : ((M = Ku(y.type, y.key, y.props, null, v.mode, M)),
                  tu(M, y),
                  (M.return = v),
                  (v = M))
            }
            return i(v)
          case J:
            t: {
              for (L = y.key; h !== null; ) {
                if (h.key === L)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === y.containerInfo &&
                    h.stateNode.implementation === y.implementation
                  ) {
                    e(v, h.sibling), (M = u(h, y.children || [])), (M.return = v), (v = M)
                    break t
                  } else {
                    e(v, h)
                    break
                  }
                else l(v, h)
                h = h.sibling
              }
              ;(M = _i(y, v.mode, M)), (M.return = v), (v = M)
            }
            return i(v)
          case pt:
            return (L = y._init), (y = L(y._payload)), yt(v, h, y, M)
        }
        if (Kt(y)) return w(v, h, y, M)
        if (Ct(y)) {
          if (((L = Ct(y)), typeof L != 'function')) throw Error(s(150))
          return (y = L.call(y)), Z(v, h, y, M)
        }
        if (typeof y.then == 'function') return yt(v, h, sn(y), M)
        if (y.$$typeof === tt) return yt(v, h, Wu(v, y), M)
        on(v, y)
      }
      return (typeof y == 'string' && y !== '') || typeof y == 'number' || typeof y == 'bigint'
        ? ((y = '' + y),
          h !== null && h.tag === 6
            ? (e(v, h.sibling), (M = u(h, y)), (M.return = v), (v = M))
            : (e(v, h), (M = Mi(y, v.mode, M)), (M.return = v), (v = M)),
          i(v))
        : e(v, h)
    }
    return function (v, h, y, M) {
      try {
        Pa = 0
        var L = yt(v, h, y, M)
        return (fa = null), L
      } catch (G) {
        if (G === Va || G === Fu) throw G
        var lt = nl(29, G, null, v.mode)
        return (lt.lanes = M), (lt.return = v), lt
      } finally {
      }
    }
  }
  var sa = Eo(!0),
    po = Eo(!1),
    gl = z(null),
    Ml = null
  function le(t) {
    var l = t.alternate
    x(Bt, Bt.current & 1),
      x(gl, t),
      Ml === null && (l === null || ua.current !== null || l.memoizedState !== null) && (Ml = t)
  }
  function Ao(t) {
    if (t.tag === 22) {
      if ((x(Bt, Bt.current), x(gl, t), Ml === null)) {
        var l = t.alternate
        l !== null && l.memoizedState !== null && (Ml = t)
      }
    } else ee()
  }
  function ee() {
    x(Bt, Bt.current), x(gl, gl.current)
  }
  function Ll(t) {
    B(gl), Ml === t && (Ml = null), B(Bt)
  }
  var Bt = z(0)
  function rn(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState
        if (e !== null && ((e = e.dehydrated), e === null || e.data === '$?' || kc(e))) return l
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
        if ((l.flags & 128) !== 0) return l
      } else if (l.child !== null) {
        ;(l.child.return = l), (l = l.child)
        continue
      }
      if (l === t) break
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null
        l = l.return
      }
      ;(l.sibling.return = l.return), (l = l.sibling)
    }
    return null
  }
  function nc(t, l, e, a) {
    ;(l = t.memoizedState),
      (e = e(a, l)),
      (e = e == null ? l : D({}, l, e)),
      (t.memoizedState = e),
      t.lanes === 0 && (t.updateQueue.baseState = e)
  }
  var ic = {
    enqueueSetState: function (t, l, e) {
      t = t._reactInternals
      var a = sl(),
        u = Il(a)
      ;(u.payload = l),
        e != null && (u.callback = e),
        (l = Pl(t, u, a)),
        l !== null && (ol(l, t, a), wa(l, t, a))
    },
    enqueueReplaceState: function (t, l, e) {
      t = t._reactInternals
      var a = sl(),
        u = Il(a)
      ;(u.tag = 1),
        (u.payload = l),
        e != null && (u.callback = e),
        (l = Pl(t, u, a)),
        l !== null && (ol(l, t, a), wa(l, t, a))
    },
    enqueueForceUpdate: function (t, l) {
      t = t._reactInternals
      var e = sl(),
        a = Il(e)
      ;(a.tag = 2),
        l != null && (a.callback = l),
        (l = Pl(t, a, e)),
        l !== null && (ol(l, t, e), wa(l, t, e))
    }
  }
  function To(t, l, e, a, u, n, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function'
        ? t.shouldComponentUpdate(a, n, i)
        : l.prototype && l.prototype.isPureReactComponent
          ? !Ba(e, a) || !Ba(u, n)
          : !0
    )
  }
  function Oo(t, l, e, a) {
    ;(t = l.state),
      typeof l.componentWillReceiveProps == 'function' && l.componentWillReceiveProps(e, a),
      typeof l.UNSAFE_componentWillReceiveProps == 'function' &&
        l.UNSAFE_componentWillReceiveProps(e, a),
      l.state !== t && ic.enqueueReplaceState(l, l.state, null)
  }
  function He(t, l) {
    var e = l
    if ('ref' in l) {
      e = {}
      for (var a in l) a !== 'ref' && (e[a] = l[a])
    }
    if ((t = t.defaultProps)) {
      e === l && (e = D({}, e))
      for (var u in t) e[u] === void 0 && (e[u] = t[u])
    }
    return e
  }
  var dn =
    typeof reportError == 'function'
      ? reportError
      : function (t) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var l = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == 'object' && t !== null && typeof t.message == 'string'
                  ? String(t.message)
                  : String(t),
              error: t
            })
            if (!window.dispatchEvent(l)) return
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', t)
            return
          }
          console.error(t)
        }
  function Mo(t) {
    dn(t)
  }
  function _o(t) {
    console.error(t)
  }
  function zo(t) {
    dn(t)
  }
  function hn(t, l) {
    try {
      var e = t.onUncaughtError
      e(l.value, { componentStack: l.stack })
    } catch (a) {
      setTimeout(function () {
        throw a
      })
    }
  }
  function Do(t, l, e) {
    try {
      var a = t.onCaughtError
      a(e.value, { componentStack: e.stack, errorBoundary: l.tag === 1 ? l.stateNode : null })
    } catch (u) {
      setTimeout(function () {
        throw u
      })
    }
  }
  function cc(t, l, e) {
    return (
      (e = Il(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        hn(t, l)
      }),
      e
    )
  }
  function Ro(t) {
    return (t = Il(t)), (t.tag = 3), t
  }
  function Uo(t, l, e, a) {
    var u = e.type.getDerivedStateFromError
    if (typeof u == 'function') {
      var n = a.value
      ;(t.payload = function () {
        return u(n)
      }),
        (t.callback = function () {
          Do(l, e, a)
        })
    }
    var i = e.stateNode
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (t.callback = function () {
        Do(l, e, a), typeof u != 'function' && (fe === null ? (fe = new Set([this])) : fe.add(this))
        var c = a.stack
        this.componentDidCatch(a.value, { componentStack: c !== null ? c : '' })
      })
  }
  function th(t, l, e, a, u) {
    if (((e.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((l = e.alternate), l !== null && Xa(l, e, u, !0), (e = gl.current), e !== null)) {
        switch (e.tag) {
          case 13:
            return (
              Ml === null ? Nc() : e.alternate === null && zt === 0 && (zt = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = u),
              a === Bi
                ? (e.flags |= 16384)
                : ((l = e.updateQueue),
                  l === null ? (e.updateQueue = new Set([a])) : l.add(a),
                  Hc(t, a, u)),
              !1
            )
          case 22:
            return (
              (e.flags |= 65536),
              a === Bi
                ? (e.flags |= 16384)
                : ((l = e.updateQueue),
                  l === null
                    ? ((l = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (e.updateQueue = l))
                    : ((e = l.retryQueue), e === null ? (l.retryQueue = new Set([a])) : e.add(a)),
                  Hc(t, a, u)),
              !1
            )
        }
        throw Error(s(435, e.tag))
      }
      return Hc(t, a, u), Nc(), !1
    }
    if (rt)
      return (
        (l = gl.current),
        l !== null
          ? ((l.flags & 65536) === 0 && (l.flags |= 256),
            (l.flags |= 65536),
            (l.lanes = u),
            a !== Ri && ((t = Error(s(422), { cause: a })), ja(hl(t, e))))
          : (a !== Ri && ((l = Error(s(423), { cause: a })), ja(hl(l, e))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (a = hl(a, e)),
            (u = cc(t.stateNode, a, u)),
            Gi(t, u),
            zt !== 4 && (zt = 2)),
        !1
      )
    var n = Error(s(520), { cause: a })
    if (((n = hl(n, e)), cu === null ? (cu = [n]) : cu.push(n), zt !== 4 && (zt = 2), l === null))
      return !0
    ;(a = hl(a, e)), (e = l)
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (t = u & -u),
            (e.lanes |= t),
            (t = cc(e.stateNode, a, t)),
            Gi(e, t),
            !1
          )
        case 1:
          if (
            ((l = e.type),
            (n = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof l.getDerivedStateFromError == 'function' ||
                (n !== null &&
                  typeof n.componentDidCatch == 'function' &&
                  (fe === null || !fe.has(n)))))
          )
            return (
              (e.flags |= 65536),
              (u &= -u),
              (e.lanes |= u),
              (u = Ro(u)),
              Uo(u, t, e, a),
              Gi(e, u),
              !1
            )
      }
      e = e.return
    } while (e !== null)
    return !1
  }
  var No = Error(s(461)),
    Lt = !1
  function Xt(t, l, e, a) {
    l.child = t === null ? po(l, null, e, a) : sa(l, t.child, e, a)
  }
  function Co(t, l, e, a, u) {
    e = e.render
    var n = l.ref
    if ('ref' in a) {
      var i = {}
      for (var c in a) c !== 'ref' && (i[c] = a[c])
    } else i = a
    return (
      Ue(l),
      (a = Vi(t, l, e, i, n, u)),
      (c = Ki()),
      t !== null && !Lt
        ? (wi(t, l, u), Gl(t, l, u))
        : (rt && c && zi(l), (l.flags |= 1), Xt(t, l, a, u), l.child)
    )
  }
  function Ho(t, l, e, a, u) {
    if (t === null) {
      var n = e.type
      return typeof n == 'function' && !Oi(n) && n.defaultProps === void 0 && e.compare === null
        ? ((l.tag = 15), (l.type = n), xo(t, l, n, a, u))
        : ((t = Ku(e.type, null, a, l, l.mode, u)), (t.ref = l.ref), (t.return = l), (l.child = t))
    }
    if (((n = t.child), !vc(t, u))) {
      var i = n.memoizedProps
      if (((e = e.compare), (e = e !== null ? e : Ba), e(i, a) && t.ref === l.ref))
        return Gl(t, l, u)
    }
    return (l.flags |= 1), (t = Cl(n, a)), (t.ref = l.ref), (t.return = l), (l.child = t)
  }
  function xo(t, l, e, a, u) {
    if (t !== null) {
      var n = t.memoizedProps
      if (Ba(n, a) && t.ref === l.ref)
        if (((Lt = !1), (l.pendingProps = a = n), vc(t, u))) (t.flags & 131072) !== 0 && (Lt = !0)
        else return (l.lanes = t.lanes), Gl(t, l, u)
    }
    return fc(t, l, e, a, u)
  }
  function qo(t, l, e) {
    var a = l.pendingProps,
      u = a.children,
      n = t !== null ? t.memoizedState : null
    if (a.mode === 'hidden') {
      if ((l.flags & 128) !== 0) {
        if (((a = n !== null ? n.baseLanes | e : e), t !== null)) {
          for (u = l.child = t.child, n = 0; u !== null; )
            (n = n | u.lanes | u.childLanes), (u = u.sibling)
          l.childLanes = n & ~a
        } else (l.childLanes = 0), (l.child = null)
        return Bo(t, l, a, e)
      }
      if ((e & 536870912) !== 0)
        (l.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && $u(l, n !== null ? n.cachePool : null),
          n !== null ? Hs(l, n) : Xi(),
          Ao(l)
      else
        return (l.lanes = l.childLanes = 536870912), Bo(t, l, n !== null ? n.baseLanes | e : e, e)
    } else
      n !== null
        ? ($u(l, n.cachePool), Hs(l, n), ee(), (l.memoizedState = null))
        : (t !== null && $u(l, null), Xi(), ee())
    return Xt(t, l, u, e), l.child
  }
  function Bo(t, l, e, a) {
    var u = qi()
    return (
      (u = u === null ? null : { parent: qt._currentValue, pool: u }),
      (l.memoizedState = { baseLanes: e, cachePool: u }),
      t !== null && $u(l, null),
      Xi(),
      Ao(l),
      t !== null && Xa(t, l, a, !0),
      null
    )
  }
  function mn(t, l) {
    var e = l.ref
    if (e === null) t !== null && t.ref !== null && (l.flags |= 4194816)
    else {
      if (typeof e != 'function' && typeof e != 'object') throw Error(s(284))
      ;(t === null || t.ref !== e) && (l.flags |= 4194816)
    }
  }
  function fc(t, l, e, a, u) {
    return (
      Ue(l),
      (e = Vi(t, l, e, a, void 0, u)),
      (a = Ki()),
      t !== null && !Lt
        ? (wi(t, l, u), Gl(t, l, u))
        : (rt && a && zi(l), (l.flags |= 1), Xt(t, l, e, u), l.child)
    )
  }
  function Yo(t, l, e, a, u, n) {
    return (
      Ue(l),
      (l.updateQueue = null),
      (e = qs(l, a, e, u)),
      xs(t),
      (a = Ki()),
      t !== null && !Lt
        ? (wi(t, l, n), Gl(t, l, n))
        : (rt && a && zi(l), (l.flags |= 1), Xt(t, l, e, n), l.child)
    )
  }
  function Lo(t, l, e, a, u) {
    if ((Ue(l), l.stateNode === null)) {
      var n = Pe,
        i = e.contextType
      typeof i == 'object' && i !== null && (n = Jt(i)),
        (n = new e(a, n)),
        (l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = ic),
        (l.stateNode = n),
        (n._reactInternals = l),
        (n = l.stateNode),
        (n.props = a),
        (n.state = l.memoizedState),
        (n.refs = {}),
        Yi(l),
        (i = e.contextType),
        (n.context = typeof i == 'object' && i !== null ? Jt(i) : Pe),
        (n.state = l.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == 'function' && (nc(l, e, i, a), (n.state = l.memoizedState)),
        typeof e.getDerivedStateFromProps == 'function' ||
          typeof n.getSnapshotBeforeUpdate == 'function' ||
          (typeof n.UNSAFE_componentWillMount != 'function' &&
            typeof n.componentWillMount != 'function') ||
          ((i = n.state),
          typeof n.componentWillMount == 'function' && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == 'function' && n.UNSAFE_componentWillMount(),
          i !== n.state && ic.enqueueReplaceState(n, n.state, null),
          ka(l, a, n, u),
          Ja(),
          (n.state = l.memoizedState)),
        typeof n.componentDidMount == 'function' && (l.flags |= 4194308),
        (a = !0)
    } else if (t === null) {
      n = l.stateNode
      var c = l.memoizedProps,
        r = He(e, c)
      n.props = r
      var g = n.context,
        p = e.contextType
      ;(i = Pe), typeof p == 'object' && p !== null && (i = Jt(p))
      var _ = e.getDerivedStateFromProps
      ;(p = typeof _ == 'function' || typeof n.getSnapshotBeforeUpdate == 'function'),
        (c = l.pendingProps !== c),
        p ||
          (typeof n.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof n.componentWillReceiveProps != 'function') ||
          ((c || g !== i) && Oo(l, n, a, i)),
        (Fl = !1)
      var S = l.memoizedState
      ;(n.state = S),
        ka(l, a, n, u),
        Ja(),
        (g = l.memoizedState),
        c || S !== g || Fl
          ? (typeof _ == 'function' && (nc(l, e, _, a), (g = l.memoizedState)),
            (r = Fl || To(l, e, r, a, S, g, i))
              ? (p ||
                  (typeof n.UNSAFE_componentWillMount != 'function' &&
                    typeof n.componentWillMount != 'function') ||
                  (typeof n.componentWillMount == 'function' && n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == 'function' &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == 'function' && (l.flags |= 4194308))
              : (typeof n.componentDidMount == 'function' && (l.flags |= 4194308),
                (l.memoizedProps = a),
                (l.memoizedState = g)),
            (n.props = a),
            (n.state = g),
            (n.context = i),
            (a = r))
          : (typeof n.componentDidMount == 'function' && (l.flags |= 4194308), (a = !1))
    } else {
      ;(n = l.stateNode),
        Li(t, l),
        (i = l.memoizedProps),
        (p = He(e, i)),
        (n.props = p),
        (_ = l.pendingProps),
        (S = n.context),
        (g = e.contextType),
        (r = Pe),
        typeof g == 'object' && g !== null && (r = Jt(g)),
        (c = e.getDerivedStateFromProps),
        (g = typeof c == 'function' || typeof n.getSnapshotBeforeUpdate == 'function') ||
          (typeof n.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof n.componentWillReceiveProps != 'function') ||
          ((i !== _ || S !== r) && Oo(l, n, a, r)),
        (Fl = !1),
        (S = l.memoizedState),
        (n.state = S),
        ka(l, a, n, u),
        Ja()
      var b = l.memoizedState
      i !== _ || S !== b || Fl || (t !== null && t.dependencies !== null && ku(t.dependencies))
        ? (typeof c == 'function' && (nc(l, e, c, a), (b = l.memoizedState)),
          (p =
            Fl ||
            To(l, e, p, a, S, b, r) ||
            (t !== null && t.dependencies !== null && ku(t.dependencies)))
            ? (g ||
                (typeof n.UNSAFE_componentWillUpdate != 'function' &&
                  typeof n.componentWillUpdate != 'function') ||
                (typeof n.componentWillUpdate == 'function' && n.componentWillUpdate(a, b, r),
                typeof n.UNSAFE_componentWillUpdate == 'function' &&
                  n.UNSAFE_componentWillUpdate(a, b, r)),
              typeof n.componentDidUpdate == 'function' && (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == 'function' && (l.flags |= 1024))
            : (typeof n.componentDidUpdate != 'function' ||
                (i === t.memoizedProps && S === t.memoizedState) ||
                (l.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != 'function' ||
                (i === t.memoizedProps && S === t.memoizedState) ||
                (l.flags |= 1024),
              (l.memoizedProps = a),
              (l.memoizedState = b)),
          (n.props = a),
          (n.state = b),
          (n.context = r),
          (a = p))
        : (typeof n.componentDidUpdate != 'function' ||
            (i === t.memoizedProps && S === t.memoizedState) ||
            (l.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != 'function' ||
            (i === t.memoizedProps && S === t.memoizedState) ||
            (l.flags |= 1024),
          (a = !1))
    }
    return (
      (n = a),
      mn(t, l),
      (a = (l.flags & 128) !== 0),
      n || a
        ? ((n = l.stateNode),
          (e = a && typeof e.getDerivedStateFromError != 'function' ? null : n.render()),
          (l.flags |= 1),
          t !== null && a
            ? ((l.child = sa(l, t.child, null, u)), (l.child = sa(l, null, e, u)))
            : Xt(t, l, e, u),
          (l.memoizedState = n.state),
          (t = l.child))
        : (t = Gl(t, l, u)),
      t
    )
  }
  function Go(t, l, e, a) {
    return Ga(), (l.flags |= 256), Xt(t, l, e, a), l.child
  }
  var sc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null }
  function oc(t) {
    return { baseLanes: t, cachePool: Ms() }
  }
  function rc(t, l, e) {
    return (t = t !== null ? t.childLanes & ~e : 0), l && (t |= Sl), t
  }
  function jo(t, l, e) {
    var a = l.pendingProps,
      u = !1,
      n = (l.flags & 128) !== 0,
      i
    if (
      ((i = n) || (i = t !== null && t.memoizedState === null ? !1 : (Bt.current & 2) !== 0),
      i && ((u = !0), (l.flags &= -129)),
      (i = (l.flags & 32) !== 0),
      (l.flags &= -33),
      t === null)
    ) {
      if (rt) {
        if ((u ? le(l) : ee(), rt)) {
          var c = _t,
            r
          if ((r = c)) {
            t: {
              for (r = c, c = Ol; r.nodeType !== 8; ) {
                if (!c) {
                  c = null
                  break t
                }
                if (((r = Al(r.nextSibling)), r === null)) {
                  c = null
                  break t
                }
              }
              c = r
            }
            c !== null
              ? ((l.memoizedState = {
                  dehydrated: c,
                  treeContext: Me !== null ? { id: Hl, overflow: xl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null
                }),
                (r = nl(18, null, null, 0)),
                (r.stateNode = c),
                (r.return = l),
                (l.child = r),
                (Wt = l),
                (_t = null),
                (r = !0))
              : (r = !1)
          }
          r || De(l)
        }
        if (((c = l.memoizedState), c !== null && ((c = c.dehydrated), c !== null)))
          return kc(c) ? (l.lanes = 32) : (l.lanes = 536870912), null
        Ll(l)
      }
      return (
        (c = a.children),
        (a = a.fallback),
        u
          ? (ee(),
            (u = l.mode),
            (c = vn({ mode: 'hidden', children: c }, u)),
            (a = Oe(a, u, e, null)),
            (c.return = l),
            (a.return = l),
            (c.sibling = a),
            (l.child = c),
            (u = l.child),
            (u.memoizedState = oc(e)),
            (u.childLanes = rc(t, i, e)),
            (l.memoizedState = sc),
            a)
          : (le(l), dc(l, c))
      )
    }
    if (((r = t.memoizedState), r !== null && ((c = r.dehydrated), c !== null))) {
      if (n)
        l.flags & 256
          ? (le(l), (l.flags &= -257), (l = hc(t, l, e)))
          : l.memoizedState !== null
            ? (ee(), (l.child = t.child), (l.flags |= 128), (l = null))
            : (ee(),
              (u = a.fallback),
              (c = l.mode),
              (a = vn({ mode: 'visible', children: a.children }, c)),
              (u = Oe(u, c, e, null)),
              (u.flags |= 2),
              (a.return = l),
              (u.return = l),
              (a.sibling = u),
              (l.child = a),
              sa(l, t.child, null, e),
              (a = l.child),
              (a.memoizedState = oc(e)),
              (a.childLanes = rc(t, i, e)),
              (l.memoizedState = sc),
              (l = u))
      else if ((le(l), kc(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var g = i.dgst
        ;(i = g),
          (a = Error(s(419))),
          (a.stack = ''),
          (a.digest = i),
          ja({ value: a, source: null, stack: null }),
          (l = hc(t, l, e))
      } else if ((Lt || Xa(t, l, e, !1), (i = (e & t.childLanes) !== 0), Lt || i)) {
        if (
          ((i = Et),
          i !== null &&
            ((a = e & -e),
            (a = (a & 42) !== 0 ? 1 : Wn(a)),
            (a = (a & (i.suspendedLanes | e)) !== 0 ? 0 : a),
            a !== 0 && a !== r.retryLane))
        )
          throw ((r.retryLane = a), Ie(t, a), ol(i, t, a), No)
        c.data === '$?' || Nc(), (l = hc(t, l, e))
      } else
        c.data === '$?'
          ? ((l.flags |= 192), (l.child = t.child), (l = null))
          : ((t = r.treeContext),
            (_t = Al(c.nextSibling)),
            (Wt = l),
            (rt = !0),
            (ze = null),
            (Ol = !1),
            t !== null &&
              ((vl[yl++] = Hl),
              (vl[yl++] = xl),
              (vl[yl++] = Me),
              (Hl = t.id),
              (xl = t.overflow),
              (Me = l)),
            (l = dc(l, a.children)),
            (l.flags |= 4096))
      return l
    }
    return u
      ? (ee(),
        (u = a.fallback),
        (c = l.mode),
        (r = t.child),
        (g = r.sibling),
        (a = Cl(r, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = r.subtreeFlags & 65011712),
        g !== null ? (u = Cl(g, u)) : ((u = Oe(u, c, e, null)), (u.flags |= 2)),
        (u.return = l),
        (a.return = l),
        (a.sibling = u),
        (l.child = a),
        (a = u),
        (u = l.child),
        (c = t.child.memoizedState),
        c === null
          ? (c = oc(e))
          : ((r = c.cachePool),
            r !== null
              ? ((g = qt._currentValue), (r = r.parent !== g ? { parent: g, pool: g } : r))
              : (r = Ms()),
            (c = { baseLanes: c.baseLanes | e, cachePool: r })),
        (u.memoizedState = c),
        (u.childLanes = rc(t, i, e)),
        (l.memoizedState = sc),
        a)
      : (le(l),
        (e = t.child),
        (t = e.sibling),
        (e = Cl(e, { mode: 'visible', children: a.children })),
        (e.return = l),
        (e.sibling = null),
        t !== null &&
          ((i = l.deletions), i === null ? ((l.deletions = [t]), (l.flags |= 16)) : i.push(t)),
        (l.child = e),
        (l.memoizedState = null),
        e)
  }
  function dc(t, l) {
    return (l = vn({ mode: 'visible', children: l }, t.mode)), (l.return = t), (t.child = l)
  }
  function vn(t, l) {
    return (
      (t = nl(22, t, null, l)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }),
      t
    )
  }
  function hc(t, l, e) {
    return (
      sa(l, t.child, null, e),
      (t = dc(l, l.pendingProps.children)),
      (t.flags |= 2),
      (l.memoizedState = null),
      t
    )
  }
  function Xo(t, l, e) {
    t.lanes |= l
    var a = t.alternate
    a !== null && (a.lanes |= l), Ni(t.return, l, e)
  }
  function mc(t, l, e, a, u) {
    var n = t.memoizedState
    n === null
      ? (t.memoizedState = {
          isBackwards: l,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: u
        })
      : ((n.isBackwards = l),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = a),
        (n.tail = e),
        (n.tailMode = u))
  }
  function Qo(t, l, e) {
    var a = l.pendingProps,
      u = a.revealOrder,
      n = a.tail
    if ((Xt(t, l, a.children, e), (a = Bt.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (l.flags |= 128)
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = l.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Xo(t, e, l)
          else if (t.tag === 19) Xo(t, e, l)
          else if (t.child !== null) {
            ;(t.child.return = t), (t = t.child)
            continue
          }
          if (t === l) break t
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) break t
            t = t.return
          }
          ;(t.sibling.return = t.return), (t = t.sibling)
        }
      a &= 1
    }
    switch ((x(Bt, a), u)) {
      case 'forwards':
        for (e = l.child, u = null; e !== null; )
          (t = e.alternate), t !== null && rn(t) === null && (u = e), (e = e.sibling)
        ;(e = u),
          e === null ? ((u = l.child), (l.child = null)) : ((u = e.sibling), (e.sibling = null)),
          mc(l, !1, u, e, n)
        break
      case 'backwards':
        for (e = null, u = l.child, l.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && rn(t) === null)) {
            l.child = u
            break
          }
          ;(t = u.sibling), (u.sibling = e), (e = u), (u = t)
        }
        mc(l, !0, e, null, n)
        break
      case 'together':
        mc(l, !1, null, null, void 0)
        break
      default:
        l.memoizedState = null
    }
    return l.child
  }
  function Gl(t, l, e) {
    if (
      (t !== null && (l.dependencies = t.dependencies), (ce |= l.lanes), (e & l.childLanes) === 0)
    )
      if (t !== null) {
        if ((Xa(t, l, e, !1), (e & l.childLanes) === 0)) return null
      } else return null
    if (t !== null && l.child !== t.child) throw Error(s(153))
    if (l.child !== null) {
      for (t = l.child, e = Cl(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        (t = t.sibling), (e = e.sibling = Cl(t, t.pendingProps)), (e.return = l)
      e.sibling = null
    }
    return l.child
  }
  function vc(t, l) {
    return (t.lanes & l) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && ku(t)))
  }
  function lh(t, l, e) {
    switch (l.tag) {
      case 3:
        At(l, l.stateNode.containerInfo), $l(l, qt, t.memoizedState.cache), Ga()
        break
      case 27:
      case 5:
        Vn(l)
        break
      case 4:
        At(l, l.stateNode.containerInfo)
        break
      case 10:
        $l(l, l.type, l.memoizedProps.value)
        break
      case 13:
        var a = l.memoizedState
        if (a !== null)
          return a.dehydrated !== null
            ? (le(l), (l.flags |= 128), null)
            : (e & l.child.childLanes) !== 0
              ? jo(t, l, e)
              : (le(l), (t = Gl(t, l, e)), t !== null ? t.sibling : null)
        le(l)
        break
      case 19:
        var u = (t.flags & 128) !== 0
        if (
          ((a = (e & l.childLanes) !== 0),
          a || (Xa(t, l, e, !1), (a = (e & l.childLanes) !== 0)),
          u)
        ) {
          if (a) return Qo(t, l, e)
          l.flags |= 128
        }
        if (
          ((u = l.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          x(Bt, Bt.current),
          a)
        )
          break
        return null
      case 22:
      case 23:
        return (l.lanes = 0), qo(t, l, e)
      case 24:
        $l(l, qt, t.memoizedState.cache)
    }
    return Gl(t, l, e)
  }
  function Zo(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps) Lt = !0
      else {
        if (!vc(t, e) && (l.flags & 128) === 0) return (Lt = !1), lh(t, l, e)
        Lt = (t.flags & 131072) !== 0
      }
    else (Lt = !1), rt && (l.flags & 1048576) !== 0 && Ss(l, Ju, l.index)
    switch (((l.lanes = 0), l.tag)) {
      case 16:
        t: {
          t = l.pendingProps
          var a = l.elementType,
            u = a._init
          if (((a = u(a._payload)), (l.type = a), typeof a == 'function'))
            Oi(a)
              ? ((t = He(a, t)), (l.tag = 1), (l = Lo(null, l, a, t, e)))
              : ((l.tag = 0), (l = fc(null, l, a, t, e)))
          else {
            if (a != null) {
              if (((u = a.$$typeof), u === nt)) {
                ;(l.tag = 11), (l = Co(null, l, a, t, e))
                break t
              } else if (u === bt) {
                ;(l.tag = 14), (l = Ho(null, l, a, t, e))
                break t
              }
            }
            throw ((l = Se(a) || a), Error(s(306, l, '')))
          }
        }
        return l
      case 0:
        return fc(t, l, l.type, l.pendingProps, e)
      case 1:
        return (a = l.type), (u = He(a, l.pendingProps)), Lo(t, l, a, u, e)
      case 3:
        t: {
          if ((At(l, l.stateNode.containerInfo), t === null)) throw Error(s(387))
          a = l.pendingProps
          var n = l.memoizedState
          ;(u = n.element), Li(t, l), ka(l, a, null, e)
          var i = l.memoizedState
          if (
            ((a = i.cache),
            $l(l, qt, a),
            a !== n.cache && Ci(l, [qt], e, !0),
            Ja(),
            (a = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: i.cache }),
              (l.updateQueue.baseState = n),
              (l.memoizedState = n),
              l.flags & 256)
            ) {
              l = Go(t, l, a, e)
              break t
            } else if (a !== u) {
              ;(u = hl(Error(s(424)), l)), ja(u), (l = Go(t, l, a, e))
              break t
            } else {
              switch (((t = l.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body
                  break
                default:
                  t = t.nodeName === 'HTML' ? t.ownerDocument.body : t
              }
              for (
                _t = Al(t.firstChild),
                  Wt = l,
                  rt = !0,
                  ze = null,
                  Ol = !0,
                  e = po(l, null, a, e),
                  l.child = e;
                e;

              )
                (e.flags = (e.flags & -3) | 4096), (e = e.sibling)
            }
          else {
            if ((Ga(), a === u)) {
              l = Gl(t, l, e)
              break t
            }
            Xt(t, l, a, e)
          }
          l = l.child
        }
        return l
      case 26:
        return (
          mn(t, l),
          t === null
            ? (e = Jr(l.type, null, l.pendingProps, null))
              ? (l.memoizedState = e)
              : rt ||
                ((e = l.type),
                (t = l.pendingProps),
                (a = Rn(W.current).createElement(e)),
                (a[wt] = l),
                (a[$t] = t),
                Zt(a, e, t),
                Yt(a),
                (l.stateNode = a))
            : (l.memoizedState = Jr(l.type, t.memoizedProps, l.pendingProps, t.memoizedState)),
          null
        )
      case 27:
        return (
          Vn(l),
          t === null &&
            rt &&
            ((a = l.stateNode = Vr(l.type, l.pendingProps, W.current)),
            (Wt = l),
            (Ol = !0),
            (u = _t),
            re(l.type) ? ((Wc = u), (_t = Al(a.firstChild))) : (_t = u)),
          Xt(t, l, l.pendingProps.children, e),
          mn(t, l),
          t === null && (l.flags |= 4194304),
          l.child
        )
      case 5:
        return (
          t === null &&
            rt &&
            ((u = a = _t) &&
              ((a = Rh(a, l.type, l.pendingProps, Ol)),
              a !== null
                ? ((l.stateNode = a), (Wt = l), (_t = Al(a.firstChild)), (Ol = !1), (u = !0))
                : (u = !1)),
            u || De(l)),
          Vn(l),
          (u = l.type),
          (n = l.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (a = n.children),
          Kc(u, n) ? (a = null) : i !== null && Kc(u, i) && (l.flags |= 32),
          l.memoizedState !== null && ((u = Vi(t, l, J0, null, null, e)), (yu._currentValue = u)),
          mn(t, l),
          Xt(t, l, a, e),
          l.child
        )
      case 6:
        return (
          t === null &&
            rt &&
            ((t = e = _t) &&
              ((e = Uh(e, l.pendingProps, Ol)),
              e !== null ? ((l.stateNode = e), (Wt = l), (_t = null), (t = !0)) : (t = !1)),
            t || De(l)),
          null
        )
      case 13:
        return jo(t, l, e)
      case 4:
        return (
          At(l, l.stateNode.containerInfo),
          (a = l.pendingProps),
          t === null ? (l.child = sa(l, null, a, e)) : Xt(t, l, a, e),
          l.child
        )
      case 11:
        return Co(t, l, l.type, l.pendingProps, e)
      case 7:
        return Xt(t, l, l.pendingProps, e), l.child
      case 8:
        return Xt(t, l, l.pendingProps.children, e), l.child
      case 12:
        return Xt(t, l, l.pendingProps.children, e), l.child
      case 10:
        return (a = l.pendingProps), $l(l, l.type, a.value), Xt(t, l, a.children, e), l.child
      case 9:
        return (
          (u = l.type._context),
          (a = l.pendingProps.children),
          Ue(l),
          (u = Jt(u)),
          (a = a(u)),
          (l.flags |= 1),
          Xt(t, l, a, e),
          l.child
        )
      case 14:
        return Ho(t, l, l.type, l.pendingProps, e)
      case 15:
        return xo(t, l, l.type, l.pendingProps, e)
      case 19:
        return Qo(t, l, e)
      case 31:
        return (
          (a = l.pendingProps),
          (e = l.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((e = vn(a, e)), (e.ref = l.ref), (l.child = e), (e.return = l), (l = e))
            : ((e = Cl(t.child, a)), (e.ref = l.ref), (l.child = e), (e.return = l), (l = e)),
          l
        )
      case 22:
        return qo(t, l, e)
      case 24:
        return (
          Ue(l),
          (a = Jt(qt)),
          t === null
            ? ((u = qi()),
              u === null &&
                ((u = Et),
                (n = Hi()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= e),
                (u = n)),
              (l.memoizedState = { parent: a, cache: u }),
              Yi(l),
              $l(l, qt, u))
            : ((t.lanes & e) !== 0 && (Li(t, l), ka(l, null, null, e), Ja()),
              (u = t.memoizedState),
              (n = l.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (l.memoizedState = u),
                  l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u),
                  $l(l, qt, a))
                : ((a = n.cache), $l(l, qt, a), a !== u.cache && Ci(l, [qt], e, !0))),
          Xt(t, l, l.pendingProps.children, e),
          l.child
        )
      case 29:
        throw l.pendingProps
    }
    throw Error(s(156, l.tag))
  }
  function jl(t) {
    t.flags |= 4
  }
  function Vo(t, l) {
    if (l.type !== 'stylesheet' || (l.state.loading & 4) !== 0) t.flags &= -16777217
    else if (((t.flags |= 16777216), !Ir(l))) {
      if (
        ((l = gl.current),
        l !== null &&
          ((ct & 4194048) === ct
            ? Ml !== null
            : ((ct & 62914560) !== ct && (ct & 536870912) === 0) || l !== Ml))
      )
        throw ((Ka = Bi), _s)
      t.flags |= 8192
    }
  }
  function yn(t, l) {
    l !== null && (t.flags |= 4),
      t.flags & 16384 && ((l = t.tag !== 22 ? pf() : 536870912), (t.lanes |= l), (ha |= l))
  }
  function lu(t, l) {
    if (!rt)
      switch (t.tailMode) {
        case 'hidden':
          l = t.tail
          for (var e = null; l !== null; ) l.alternate !== null && (e = l), (l = l.sibling)
          e === null ? (t.tail = null) : (e.sibling = null)
          break
        case 'collapsed':
          e = t.tail
          for (var a = null; e !== null; ) e.alternate !== null && (a = e), (e = e.sibling)
          a === null
            ? l || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null)
      }
  }
  function Mt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child,
      e = 0,
      a = 0
    if (l)
      for (var u = t.child; u !== null; )
        (e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling)
    else
      for (u = t.child; u !== null; )
        (e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = t),
          (u = u.sibling)
    return (t.subtreeFlags |= a), (t.childLanes = e), l
  }
  function eh(t, l, e) {
    var a = l.pendingProps
    switch ((Di(l), l.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Mt(l), null
      case 1:
        return Mt(l), null
      case 3:
        return (
          (e = l.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          l.memoizedState.cache !== a && (l.flags |= 2048),
          Bl(qt),
          wl(),
          e.pendingContext && ((e.context = e.pendingContext), (e.pendingContext = null)),
          (t === null || t.child === null) &&
            (La(l)
              ? jl(l)
              : t === null ||
                (t.memoizedState.isDehydrated && (l.flags & 256) === 0) ||
                ((l.flags |= 1024), ps())),
          Mt(l),
          null
        )
      case 26:
        return (
          (e = l.memoizedState),
          t === null
            ? (jl(l), e !== null ? (Mt(l), Vo(l, e)) : (Mt(l), (l.flags &= -16777217)))
            : e
              ? e !== t.memoizedState
                ? (jl(l), Mt(l), Vo(l, e))
                : (Mt(l), (l.flags &= -16777217))
              : (t.memoizedProps !== a && jl(l), Mt(l), (l.flags &= -16777217)),
          null
        )
      case 27:
        _u(l), (e = W.current)
        var u = l.type
        if (t !== null && l.stateNode != null) t.memoizedProps !== a && jl(l)
        else {
          if (!a) {
            if (l.stateNode === null) throw Error(s(166))
            return Mt(l), null
          }
          ;(t = Q.current), La(l) ? bs(l) : ((t = Vr(u, a, e)), (l.stateNode = t), jl(l))
        }
        return Mt(l), null
      case 5:
        if ((_u(l), (e = l.type), t !== null && l.stateNode != null)) t.memoizedProps !== a && jl(l)
        else {
          if (!a) {
            if (l.stateNode === null) throw Error(s(166))
            return Mt(l), null
          }
          if (((t = Q.current), La(l))) bs(l)
          else {
            switch (((u = Rn(W.current)), t)) {
              case 1:
                t = u.createElementNS('http://www.w3.org/2000/svg', e)
                break
              case 2:
                t = u.createElementNS('http://www.w3.org/1998/Math/MathML', e)
                break
              default:
                switch (e) {
                  case 'svg':
                    t = u.createElementNS('http://www.w3.org/2000/svg', e)
                    break
                  case 'math':
                    t = u.createElementNS('http://www.w3.org/1998/Math/MathML', e)
                    break
                  case 'script':
                    ;(t = u.createElement('div')),
                      (t.innerHTML = '<script><\/script>'),
                      (t = t.removeChild(t.firstChild))
                    break
                  case 'select':
                    ;(t =
                      typeof a.is == 'string'
                        ? u.createElement('select', { is: a.is })
                        : u.createElement('select')),
                      a.multiple ? (t.multiple = !0) : a.size && (t.size = a.size)
                    break
                  default:
                    t =
                      typeof a.is == 'string'
                        ? u.createElement(e, { is: a.is })
                        : u.createElement(e)
                }
            }
            ;(t[wt] = l), (t[$t] = a)
            t: for (u = l.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode)
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                ;(u.child.return = u), (u = u.child)
                continue
              }
              if (u === l) break t
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === l) break t
                u = u.return
              }
              ;(u.sibling.return = u.return), (u = u.sibling)
            }
            l.stateNode = t
            t: switch ((Zt(t, e, a), e)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                t = !!a.autoFocus
                break t
              case 'img':
                t = !0
                break t
              default:
                t = !1
            }
            t && jl(l)
          }
        }
        return Mt(l), (l.flags &= -16777217), null
      case 6:
        if (t && l.stateNode != null) t.memoizedProps !== a && jl(l)
        else {
          if (typeof a != 'string' && l.stateNode === null) throw Error(s(166))
          if (((t = W.current), La(l))) {
            if (((t = l.stateNode), (e = l.memoizedProps), (a = null), (u = Wt), u !== null))
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps
              }
            ;(t[wt] = l),
              (t = !!(
                t.nodeValue === e ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Yr(t.nodeValue, e)
              )),
              t || De(l)
          } else (t = Rn(t).createTextNode(a)), (t[wt] = l), (l.stateNode = t)
        }
        return Mt(l), null
      case 13:
        if (
          ((a = l.memoizedState),
          t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = La(l)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(s(318))
              if (((u = l.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(s(317))
              u[wt] = l
            } else Ga(), (l.flags & 128) === 0 && (l.memoizedState = null), (l.flags |= 4)
            Mt(l), (u = !1)
          } else
            (u = ps()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u),
              (u = !0)
          if (!u) return l.flags & 256 ? (Ll(l), l) : (Ll(l), null)
        }
        if ((Ll(l), (l.flags & 128) !== 0)) return (l.lanes = e), l
        if (((e = a !== null), (t = t !== null && t.memoizedState !== null), e)) {
          ;(a = l.child),
            (u = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (u = a.alternate.memoizedState.cachePool.pool)
          var n = null
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (n = a.memoizedState.cachePool.pool),
            n !== u && (a.flags |= 2048)
        }
        return e !== t && e && (l.child.flags |= 8192), yn(l, l.updateQueue), Mt(l), null
      case 4:
        return wl(), t === null && jc(l.stateNode.containerInfo), Mt(l), null
      case 10:
        return Bl(l.type), Mt(l), null
      case 19:
        if ((B(Bt), (u = l.memoizedState), u === null)) return Mt(l), null
        if (((a = (l.flags & 128) !== 0), (n = u.rendering), n === null))
          if (a) lu(u, !1)
          else {
            if (zt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = l.child; t !== null; ) {
                if (((n = rn(t)), n !== null)) {
                  for (
                    l.flags |= 128,
                      lu(u, !1),
                      t = n.updateQueue,
                      l.updateQueue = t,
                      yn(l, t),
                      l.subtreeFlags = 0,
                      t = e,
                      e = l.child;
                    e !== null;

                  )
                    gs(e, t), (e = e.sibling)
                  return x(Bt, (Bt.current & 1) | 2), l.child
                }
                t = t.sibling
              }
            u.tail !== null &&
              Tl() > bn &&
              ((l.flags |= 128), (a = !0), lu(u, !1), (l.lanes = 4194304))
          }
        else {
          if (!a)
            if (((t = rn(n)), t !== null)) {
              if (
                ((l.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (l.updateQueue = t),
                yn(l, t),
                lu(u, !0),
                u.tail === null && u.tailMode === 'hidden' && !n.alternate && !rt)
              )
                return Mt(l), null
            } else
              2 * Tl() - u.renderingStartTime > bn &&
                e !== 536870912 &&
                ((l.flags |= 128), (a = !0), lu(u, !1), (l.lanes = 4194304))
          u.isBackwards
            ? ((n.sibling = l.child), (l.child = n))
            : ((t = u.last), t !== null ? (t.sibling = n) : (l.child = n), (u.last = n))
        }
        return u.tail !== null
          ? ((l = u.tail),
            (u.rendering = l),
            (u.tail = l.sibling),
            (u.renderingStartTime = Tl()),
            (l.sibling = null),
            (t = Bt.current),
            x(Bt, a ? (t & 1) | 2 : t & 1),
            l)
          : (Mt(l), null)
      case 22:
      case 23:
        return (
          Ll(l),
          Qi(),
          (a = l.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (l.flags |= 8192)
            : a && (l.flags |= 8192),
          a
            ? (e & 536870912) !== 0 &&
              (l.flags & 128) === 0 &&
              (Mt(l), l.subtreeFlags & 6 && (l.flags |= 8192))
            : Mt(l),
          (e = l.updateQueue),
          e !== null && yn(l, e.retryQueue),
          (e = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          (a = null),
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          a !== e && (l.flags |= 2048),
          t !== null && B(Ne),
          null
        )
      case 24:
        return (
          (e = null),
          t !== null && (e = t.memoizedState.cache),
          l.memoizedState.cache !== e && (l.flags |= 2048),
          Bl(qt),
          Mt(l),
          null
        )
      case 25:
        return null
      case 30:
        return null
    }
    throw Error(s(156, l.tag))
  }
  function ah(t, l) {
    switch ((Di(l), l.tag)) {
      case 1:
        return (t = l.flags), t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
      case 3:
        return (
          Bl(qt),
          wl(),
          (t = l.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((l.flags = (t & -65537) | 128), l) : null
        )
      case 26:
      case 27:
      case 5:
        return _u(l), null
      case 13:
        if ((Ll(l), (t = l.memoizedState), t !== null && t.dehydrated !== null)) {
          if (l.alternate === null) throw Error(s(340))
          Ga()
        }
        return (t = l.flags), t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
      case 19:
        return B(Bt), null
      case 4:
        return wl(), null
      case 10:
        return Bl(l.type), null
      case 22:
      case 23:
        return (
          Ll(l),
          Qi(),
          t !== null && B(Ne),
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        )
      case 24:
        return Bl(qt), null
      case 25:
        return null
      default:
        return null
    }
  }
  function Ko(t, l) {
    switch ((Di(l), l.tag)) {
      case 3:
        Bl(qt), wl()
        break
      case 26:
      case 27:
      case 5:
        _u(l)
        break
      case 4:
        wl()
        break
      case 13:
        Ll(l)
        break
      case 19:
        B(Bt)
        break
      case 10:
        Bl(l.type)
        break
      case 22:
      case 23:
        Ll(l), Qi(), t !== null && B(Ne)
        break
      case 24:
        Bl(qt)
    }
  }
  function eu(t, l) {
    try {
      var e = l.updateQueue,
        a = e !== null ? e.lastEffect : null
      if (a !== null) {
        var u = a.next
        e = u
        do {
          if ((e.tag & t) === t) {
            a = void 0
            var n = e.create,
              i = e.inst
            ;(a = n()), (i.destroy = a)
          }
          e = e.next
        } while (e !== u)
      }
    } catch (c) {
      St(l, l.return, c)
    }
  }
  function ae(t, l, e) {
    try {
      var a = l.updateQueue,
        u = a !== null ? a.lastEffect : null
      if (u !== null) {
        var n = u.next
        a = n
        do {
          if ((a.tag & t) === t) {
            var i = a.inst,
              c = i.destroy
            if (c !== void 0) {
              ;(i.destroy = void 0), (u = l)
              var r = e,
                g = c
              try {
                g()
              } catch (p) {
                St(u, r, p)
              }
            }
          }
          a = a.next
        } while (a !== n)
      }
    } catch (p) {
      St(l, l.return, p)
    }
  }
  function wo(t) {
    var l = t.updateQueue
    if (l !== null) {
      var e = t.stateNode
      try {
        Cs(l, e)
      } catch (a) {
        St(t, t.return, a)
      }
    }
  }
  function Jo(t, l, e) {
    ;(e.props = He(t.type, t.memoizedProps)), (e.state = t.memoizedState)
    try {
      e.componentWillUnmount()
    } catch (a) {
      St(t, l, a)
    }
  }
  function au(t, l) {
    try {
      var e = t.ref
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode
            break
          case 30:
            a = t.stateNode
            break
          default:
            a = t.stateNode
        }
        typeof e == 'function' ? (t.refCleanup = e(a)) : (e.current = a)
      }
    } catch (u) {
      St(t, l, u)
    }
  }
  function _l(t, l) {
    var e = t.ref,
      a = t.refCleanup
    if (e !== null)
      if (typeof a == 'function')
        try {
          a()
        } catch (u) {
          St(t, l, u)
        } finally {
          ;(t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null)
        }
      else if (typeof e == 'function')
        try {
          e(null)
        } catch (u) {
          St(t, l, u)
        }
      else e.current = null
  }
  function ko(t) {
    var l = t.type,
      e = t.memoizedProps,
      a = t.stateNode
    try {
      t: switch (l) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          e.autoFocus && a.focus()
          break t
        case 'img':
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet)
      }
    } catch (u) {
      St(t, t.return, u)
    }
  }
  function yc(t, l, e) {
    try {
      var a = t.stateNode
      Oh(a, t.type, e, l), (a[$t] = l)
    } catch (u) {
      St(t, t.return, u)
    }
  }
  function Wo(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && re(t.type)) || t.tag === 4
  }
  function gc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Wo(t.return)) return null
        t = t.return
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if ((t.tag === 27 && re(t.type)) || t.flags & 2 || t.child === null || t.tag === 4)
          continue t
        ;(t.child.return = t), (t = t.child)
      }
      if (!(t.flags & 2)) return t.stateNode
    }
  }
  function Sc(t, l, e) {
    var a = t.tag
    if (a === 5 || a === 6)
      (t = t.stateNode),
        l
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === 'HTML'
                ? e.ownerDocument.body
                : e
            ).insertBefore(t, l)
          : ((l = e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e),
            l.appendChild(t),
            (e = e._reactRootContainer),
            e != null || l.onclick !== null || (l.onclick = Dn))
    else if (
      a !== 4 &&
      (a === 27 && re(t.type) && ((e = t.stateNode), (l = null)), (t = t.child), t !== null)
    )
      for (Sc(t, l, e), t = t.sibling; t !== null; ) Sc(t, l, e), (t = t.sibling)
  }
  function gn(t, l, e) {
    var a = t.tag
    if (a === 5 || a === 6) (t = t.stateNode), l ? e.insertBefore(t, l) : e.appendChild(t)
    else if (a !== 4 && (a === 27 && re(t.type) && (e = t.stateNode), (t = t.child), t !== null))
      for (gn(t, l, e), t = t.sibling; t !== null; ) gn(t, l, e), (t = t.sibling)
  }
  function $o(t) {
    var l = t.stateNode,
      e = t.memoizedProps
    try {
      for (var a = t.type, u = l.attributes; u.length; ) l.removeAttributeNode(u[0])
      Zt(l, a, e), (l[wt] = t), (l[$t] = e)
    } catch (n) {
      St(t, t.return, n)
    }
  }
  var Xl = !1,
    Nt = !1,
    bc = !1,
    Fo = typeof WeakSet == 'function' ? WeakSet : Set,
    Gt = null
  function uh(t, l) {
    if (((t = t.containerInfo), (Zc = qn), (t = cs(t)), gi(t))) {
      if ('selectionStart' in t) var e = { start: t.selectionStart, end: t.selectionEnd }
      else
        t: {
          e = ((e = t.ownerDocument) && e.defaultView) || window
          var a = e.getSelection && e.getSelection()
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode
            var u = a.anchorOffset,
              n = a.focusNode
            a = a.focusOffset
            try {
              e.nodeType, n.nodeType
            } catch {
              e = null
              break t
            }
            var i = 0,
              c = -1,
              r = -1,
              g = 0,
              p = 0,
              _ = t,
              S = null
            l: for (;;) {
              for (
                var b;
                _ !== e || (u !== 0 && _.nodeType !== 3) || (c = i + u),
                  _ !== n || (a !== 0 && _.nodeType !== 3) || (r = i + a),
                  _.nodeType === 3 && (i += _.nodeValue.length),
                  (b = _.firstChild) !== null;

              )
                (S = _), (_ = b)
              for (;;) {
                if (_ === t) break l
                if (
                  (S === e && ++g === u && (c = i),
                  S === n && ++p === a && (r = i),
                  (b = _.nextSibling) !== null)
                )
                  break
                ;(_ = S), (S = _.parentNode)
              }
              _ = b
            }
            e = c === -1 || r === -1 ? null : { start: c, end: r }
          } else e = null
        }
      e = e || { start: 0, end: 0 }
    } else e = null
    for (Vc = { focusedElem: t, selectionRange: e }, qn = !1, Gt = l; Gt !== null; )
      if (((l = Gt), (t = l.child), (l.subtreeFlags & 1024) !== 0 && t !== null))
        (t.return = l), (Gt = t)
      else
        for (; Gt !== null; ) {
          switch (((l = Gt), (n = l.alternate), (t = l.flags), l.tag)) {
            case 0:
              break
            case 11:
            case 15:
              break
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                ;(t = void 0),
                  (e = l),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = e.stateNode)
                try {
                  var w = He(e.type, u, e.elementType === e.type)
                  ;(t = a.getSnapshotBeforeUpdate(w, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = t)
                } catch (Z) {
                  St(e, e.return, Z)
                }
              }
              break
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = l.stateNode.containerInfo), (e = t.nodeType), e === 9)) Jc(t)
                else if (e === 1)
                  switch (t.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Jc(t)
                      break
                    default:
                      t.textContent = ''
                  }
              }
              break
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break
            default:
              if ((t & 1024) !== 0) throw Error(s(163))
          }
          if (((t = l.sibling), t !== null)) {
            ;(t.return = l.return), (Gt = t)
            break
          }
          Gt = l.return
        }
  }
  function Io(t, l, e) {
    var a = e.flags
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ue(t, e), a & 4 && eu(5, e)
        break
      case 1:
        if ((ue(t, e), a & 4))
          if (((t = e.stateNode), l === null))
            try {
              t.componentDidMount()
            } catch (i) {
              St(e, e.return, i)
            }
          else {
            var u = He(e.type, l.memoizedProps)
            l = l.memoizedState
            try {
              t.componentDidUpdate(u, l, t.__reactInternalSnapshotBeforeUpdate)
            } catch (i) {
              St(e, e.return, i)
            }
          }
        a & 64 && wo(e), a & 512 && au(e, e.return)
        break
      case 3:
        if ((ue(t, e), a & 64 && ((t = e.updateQueue), t !== null))) {
          if (((l = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode
                break
              case 1:
                l = e.child.stateNode
            }
          try {
            Cs(t, l)
          } catch (i) {
            St(e, e.return, i)
          }
        }
        break
      case 27:
        l === null && a & 4 && $o(e)
      case 26:
      case 5:
        ue(t, e), l === null && a & 4 && ko(e), a & 512 && au(e, e.return)
        break
      case 12:
        ue(t, e)
        break
      case 13:
        ue(t, e),
          a & 4 && lr(t, e),
          a & 64 &&
            ((t = e.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((e = hh.bind(null, e)), Nh(t, e))))
        break
      case 22:
        if (((a = e.memoizedState !== null || Xl), !a)) {
          ;(l = (l !== null && l.memoizedState !== null) || Nt), (u = Xl)
          var n = Nt
          ;(Xl = a),
            (Nt = l) && !n ? ne(t, e, (e.subtreeFlags & 8772) !== 0) : ue(t, e),
            (Xl = u),
            (Nt = n)
        }
        break
      case 30:
        break
      default:
        ue(t, e)
    }
  }
  function Po(t) {
    var l = t.alternate
    l !== null && ((t.alternate = null), Po(l)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((l = t.stateNode), l !== null && In(l)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null)
  }
  var Tt = null,
    Pt = !1
  function Ql(t, l, e) {
    for (e = e.child; e !== null; ) tr(t, l, e), (e = e.sibling)
  }
  function tr(t, l, e) {
    if (el && typeof el.onCommitFiberUnmount == 'function')
      try {
        el.onCommitFiberUnmount(Oa, e)
      } catch {}
    switch (e.tag) {
      case 26:
        Nt || _l(e, l),
          Ql(t, l, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e))
        break
      case 27:
        Nt || _l(e, l)
        var a = Tt,
          u = Pt
        re(e.type) && ((Tt = e.stateNode), (Pt = !1)),
          Ql(t, l, e),
          du(e.stateNode),
          (Tt = a),
          (Pt = u)
        break
      case 5:
        Nt || _l(e, l)
      case 6:
        if (((a = Tt), (u = Pt), (Tt = null), Ql(t, l, e), (Tt = a), (Pt = u), Tt !== null))
          if (Pt)
            try {
              ;(Tt.nodeType === 9
                ? Tt.body
                : Tt.nodeName === 'HTML'
                  ? Tt.ownerDocument.body
                  : Tt
              ).removeChild(e.stateNode)
            } catch (n) {
              St(e, l, n)
            }
          else
            try {
              Tt.removeChild(e.stateNode)
            } catch (n) {
              St(e, l, n)
            }
        break
      case 18:
        Tt !== null &&
          (Pt
            ? ((t = Tt),
              Qr(
                t.nodeType === 9 ? t.body : t.nodeName === 'HTML' ? t.ownerDocument.body : t,
                e.stateNode
              ),
              Eu(t))
            : Qr(Tt, e.stateNode))
        break
      case 4:
        ;(a = Tt),
          (u = Pt),
          (Tt = e.stateNode.containerInfo),
          (Pt = !0),
          Ql(t, l, e),
          (Tt = a),
          (Pt = u)
        break
      case 0:
      case 11:
      case 14:
      case 15:
        Nt || ae(2, e, l), Nt || ae(4, e, l), Ql(t, l, e)
        break
      case 1:
        Nt ||
          (_l(e, l), (a = e.stateNode), typeof a.componentWillUnmount == 'function' && Jo(e, l, a)),
          Ql(t, l, e)
        break
      case 21:
        Ql(t, l, e)
        break
      case 22:
        ;(Nt = (a = Nt) || e.memoizedState !== null), Ql(t, l, e), (Nt = a)
        break
      default:
        Ql(t, l, e)
    }
  }
  function lr(t, l) {
    if (
      l.memoizedState === null &&
      ((t = l.alternate),
      t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Eu(t)
      } catch (e) {
        St(l, l.return, e)
      }
  }
  function nh(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var l = t.stateNode
        return l === null && (l = t.stateNode = new Fo()), l
      case 22:
        return (
          (t = t.stateNode), (l = t._retryCache), l === null && (l = t._retryCache = new Fo()), l
        )
      default:
        throw Error(s(435, t.tag))
    }
  }
  function Ec(t, l) {
    var e = nh(t)
    l.forEach(function (a) {
      var u = mh.bind(null, t, a)
      e.has(a) || (e.add(a), a.then(u, u))
    })
  }
  function il(t, l) {
    var e = l.deletions
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a],
          n = t,
          i = l,
          c = i
        t: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (re(c.type)) {
                ;(Tt = c.stateNode), (Pt = !1)
                break t
              }
              break
            case 5:
              ;(Tt = c.stateNode), (Pt = !1)
              break t
            case 3:
            case 4:
              ;(Tt = c.stateNode.containerInfo), (Pt = !0)
              break t
          }
          c = c.return
        }
        if (Tt === null) throw Error(s(160))
        tr(n, i, u),
          (Tt = null),
          (Pt = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null)
      }
    if (l.subtreeFlags & 13878) for (l = l.child; l !== null; ) er(l, t), (l = l.sibling)
  }
  var pl = null
  function er(t, l) {
    var e = t.alternate,
      a = t.flags
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        il(l, t), cl(t), a & 4 && (ae(3, t, t.return), eu(3, t), ae(5, t, t.return))
        break
      case 1:
        il(l, t),
          cl(t),
          a & 512 && (Nt || e === null || _l(e, e.return)),
          a & 64 &&
            Xl &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((e = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = e === null ? a : e.concat(a)))))
        break
      case 26:
        var u = pl
        if ((il(l, t), cl(t), a & 512 && (Nt || e === null || _l(e, e.return)), a & 4)) {
          var n = e !== null ? e.memoizedState : null
          if (((a = t.memoizedState), e === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  ;(a = t.type), (e = t.memoizedProps), (u = u.ownerDocument || u)
                  l: switch (a) {
                    case 'title':
                      ;(n = u.getElementsByTagName('title')[0]),
                        (!n ||
                          n[za] ||
                          n[wt] ||
                          n.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          n.hasAttribute('itemprop')) &&
                          ((n = u.createElement(a)),
                          u.head.insertBefore(n, u.querySelector('head > title'))),
                        Zt(n, a, e),
                        (n[wt] = t),
                        Yt(n),
                        (a = n)
                      break t
                    case 'link':
                      var i = $r('link', 'href', u).get(a + (e.href || ''))
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute('href') ===
                              (e.href == null || e.href === '' ? null : e.href) &&
                              n.getAttribute('rel') === (e.rel == null ? null : e.rel) &&
                              n.getAttribute('title') === (e.title == null ? null : e.title) &&
                              n.getAttribute('crossorigin') ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            i.splice(c, 1)
                            break l
                          }
                      }
                      ;(n = u.createElement(a)), Zt(n, a, e), u.head.appendChild(n)
                      break
                    case 'meta':
                      if ((i = $r('meta', 'content', u).get(a + (e.content || '')))) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute('content') ===
                              (e.content == null ? null : '' + e.content) &&
                              n.getAttribute('name') === (e.name == null ? null : e.name) &&
                              n.getAttribute('property') ===
                                (e.property == null ? null : e.property) &&
                              n.getAttribute('http-equiv') ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              n.getAttribute('charset') === (e.charSet == null ? null : e.charSet))
                          ) {
                            i.splice(c, 1)
                            break l
                          }
                      }
                      ;(n = u.createElement(a)), Zt(n, a, e), u.head.appendChild(n)
                      break
                    default:
                      throw Error(s(468, a))
                  }
                  ;(n[wt] = t), Yt(n), (a = n)
                }
                t.stateNode = a
              } else Fr(u, t.type, t.stateNode)
            else t.stateNode = Wr(u, a, t.memoizedProps)
          else
            n !== a
              ? (n === null
                  ? e.stateNode !== null && ((e = e.stateNode), e.parentNode.removeChild(e))
                  : n.count--,
                a === null ? Fr(u, t.type, t.stateNode) : Wr(u, a, t.memoizedProps))
              : a === null && t.stateNode !== null && yc(t, t.memoizedProps, e.memoizedProps)
        }
        break
      case 27:
        il(l, t),
          cl(t),
          a & 512 && (Nt || e === null || _l(e, e.return)),
          e !== null && a & 4 && yc(t, t.memoizedProps, e.memoizedProps)
        break
      case 5:
        if ((il(l, t), cl(t), a & 512 && (Nt || e === null || _l(e, e.return)), t.flags & 32)) {
          u = t.stateNode
          try {
            Ke(u, '')
          } catch (b) {
            St(t, t.return, b)
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), yc(t, u, e !== null ? e.memoizedProps : u)),
          a & 1024 && (bc = !0)
        break
      case 6:
        if ((il(l, t), cl(t), a & 4)) {
          if (t.stateNode === null) throw Error(s(162))
          ;(a = t.memoizedProps), (e = t.stateNode)
          try {
            e.nodeValue = a
          } catch (b) {
            St(t, t.return, b)
          }
        }
        break
      case 3:
        if (
          ((Cn = null),
          (u = pl),
          (pl = Un(l.containerInfo)),
          il(l, t),
          (pl = u),
          cl(t),
          a & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            Eu(l.containerInfo)
          } catch (b) {
            St(t, t.return, b)
          }
        bc && ((bc = !1), ar(t))
        break
      case 4:
        ;(a = pl), (pl = Un(t.stateNode.containerInfo)), il(l, t), cl(t), (pl = a)
        break
      case 12:
        il(l, t), cl(t)
        break
      case 13:
        il(l, t),
          cl(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) != (e !== null && e.memoizedState !== null) &&
            (_c = Tl()),
          a & 4 && ((a = t.updateQueue), a !== null && ((t.updateQueue = null), Ec(t, a)))
        break
      case 22:
        u = t.memoizedState !== null
        var r = e !== null && e.memoizedState !== null,
          g = Xl,
          p = Nt
        if (((Xl = g || u), (Nt = p || r), il(l, t), (Nt = p), (Xl = g), cl(t), a & 8192))
          t: for (
            l = t.stateNode,
              l._visibility = u ? l._visibility & -2 : l._visibility | 1,
              u && (e === null || r || Xl || Nt || xe(t)),
              e = null,
              l = t;
            ;

          ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                r = e = l
                try {
                  if (((n = r.stateNode), u))
                    (i = n.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none')
                  else {
                    c = r.stateNode
                    var _ = r.memoizedProps.style,
                      S = _ != null && _.hasOwnProperty('display') ? _.display : null
                    c.style.display = S == null || typeof S == 'boolean' ? '' : ('' + S).trim()
                  }
                } catch (b) {
                  St(r, r.return, b)
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                r = l
                try {
                  r.stateNode.nodeValue = u ? '' : r.memoizedProps
                } catch (b) {
                  St(r, r.return, b)
                }
              }
            } else if (
              ((l.tag !== 22 && l.tag !== 23) || l.memoizedState === null || l === t) &&
              l.child !== null
            ) {
              ;(l.child.return = l), (l = l.child)
              continue
            }
            if (l === t) break t
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t
              e === l && (e = null), (l = l.return)
            }
            e === l && (e = null), (l.sibling.return = l.return), (l = l.sibling)
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null && ((e = a.retryQueue), e !== null && ((a.retryQueue = null), Ec(t, e))))
        break
      case 19:
        il(l, t),
          cl(t),
          a & 4 && ((a = t.updateQueue), a !== null && ((t.updateQueue = null), Ec(t, a)))
        break
      case 30:
        break
      case 21:
        break
      default:
        il(l, t), cl(t)
    }
  }
  function cl(t) {
    var l = t.flags
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null; ) {
          if (Wo(a)) {
            e = a
            break
          }
          a = a.return
        }
        if (e == null) throw Error(s(160))
        switch (e.tag) {
          case 27:
            var u = e.stateNode,
              n = gc(t)
            gn(t, n, u)
            break
          case 5:
            var i = e.stateNode
            e.flags & 32 && (Ke(i, ''), (e.flags &= -33))
            var c = gc(t)
            gn(t, c, i)
            break
          case 3:
          case 4:
            var r = e.stateNode.containerInfo,
              g = gc(t)
            Sc(t, g, r)
            break
          default:
            throw Error(s(161))
        }
      } catch (p) {
        St(t, t.return, p)
      }
      t.flags &= -3
    }
    l & 4096 && (t.flags &= -4097)
  }
  function ar(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t
        ar(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), (t = t.sibling)
      }
  }
  function ue(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; ) Io(t, l.alternate, l), (l = l.sibling)
  }
  function xe(t) {
    for (t = t.child; t !== null; ) {
      var l = t
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ae(4, l, l.return), xe(l)
          break
        case 1:
          _l(l, l.return)
          var e = l.stateNode
          typeof e.componentWillUnmount == 'function' && Jo(l, l.return, e), xe(l)
          break
        case 27:
          du(l.stateNode)
        case 26:
        case 5:
          _l(l, l.return), xe(l)
          break
        case 22:
          l.memoizedState === null && xe(l)
          break
        case 30:
          xe(l)
          break
        default:
          xe(l)
      }
      t = t.sibling
    }
  }
  function ne(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var a = l.alternate,
        u = t,
        n = l,
        i = n.flags
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ne(u, n, e), eu(4, n)
          break
        case 1:
          if ((ne(u, n, e), (a = n), (u = a.stateNode), typeof u.componentDidMount == 'function'))
            try {
              u.componentDidMount()
            } catch (g) {
              St(a, a.return, g)
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var c = a.stateNode
            try {
              var r = u.shared.hiddenCallbacks
              if (r !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < r.length; u++) Ns(r[u], c)
            } catch (g) {
              St(a, a.return, g)
            }
          }
          e && i & 64 && wo(n), au(n, n.return)
          break
        case 27:
          $o(n)
        case 26:
        case 5:
          ne(u, n, e), e && a === null && i & 4 && ko(n), au(n, n.return)
          break
        case 12:
          ne(u, n, e)
          break
        case 13:
          ne(u, n, e), e && i & 4 && lr(u, n)
          break
        case 22:
          n.memoizedState === null && ne(u, n, e), au(n, n.return)
          break
        case 30:
          break
        default:
          ne(u, n, e)
      }
      l = l.sibling
    }
  }
  function pc(t, l) {
    var e = null
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (e = t.memoizedState.cachePool.pool),
      (t = null),
      l.memoizedState !== null &&
        l.memoizedState.cachePool !== null &&
        (t = l.memoizedState.cachePool.pool),
      t !== e && (t != null && t.refCount++, e != null && Qa(e))
  }
  function Ac(t, l) {
    ;(t = null),
      l.alternate !== null && (t = l.alternate.memoizedState.cache),
      (l = l.memoizedState.cache),
      l !== t && (l.refCount++, t != null && Qa(t))
  }
  function zl(t, l, e, a) {
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) ur(t, l, e, a), (l = l.sibling)
  }
  function ur(t, l, e, a) {
    var u = l.flags
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        zl(t, l, e, a), u & 2048 && eu(9, l)
        break
      case 1:
        zl(t, l, e, a)
        break
      case 3:
        zl(t, l, e, a),
          u & 2048 &&
            ((t = null),
            l.alternate !== null && (t = l.alternate.memoizedState.cache),
            (l = l.memoizedState.cache),
            l !== t && (l.refCount++, t != null && Qa(t)))
        break
      case 12:
        if (u & 2048) {
          zl(t, l, e, a), (t = l.stateNode)
          try {
            var n = l.memoizedProps,
              i = n.id,
              c = n.onPostCommit
            typeof c == 'function' &&
              c(i, l.alternate === null ? 'mount' : 'update', t.passiveEffectDuration, -0)
          } catch (r) {
            St(l, l.return, r)
          }
        } else zl(t, l, e, a)
        break
      case 13:
        zl(t, l, e, a)
        break
      case 23:
        break
      case 22:
        ;(n = l.stateNode),
          (i = l.alternate),
          l.memoizedState !== null
            ? n._visibility & 2
              ? zl(t, l, e, a)
              : uu(t, l)
            : n._visibility & 2
              ? zl(t, l, e, a)
              : ((n._visibility |= 2), oa(t, l, e, a, (l.subtreeFlags & 10256) !== 0)),
          u & 2048 && pc(i, l)
        break
      case 24:
        zl(t, l, e, a), u & 2048 && Ac(l.alternate, l)
        break
      default:
        zl(t, l, e, a)
    }
  }
  function oa(t, l, e, a, u) {
    for (u = u && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var n = t,
        i = l,
        c = e,
        r = a,
        g = i.flags
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          oa(n, i, c, r, u), eu(8, i)
          break
        case 23:
          break
        case 22:
          var p = i.stateNode
          i.memoizedState !== null
            ? p._visibility & 2
              ? oa(n, i, c, r, u)
              : uu(n, i)
            : ((p._visibility |= 2), oa(n, i, c, r, u)),
            u && g & 2048 && pc(i.alternate, i)
          break
        case 24:
          oa(n, i, c, r, u), u && g & 2048 && Ac(i.alternate, i)
          break
        default:
          oa(n, i, c, r, u)
      }
      l = l.sibling
    }
  }
  function uu(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t,
          a = l,
          u = a.flags
        switch (a.tag) {
          case 22:
            uu(e, a), u & 2048 && pc(a.alternate, a)
            break
          case 24:
            uu(e, a), u & 2048 && Ac(a.alternate, a)
            break
          default:
            uu(e, a)
        }
        l = l.sibling
      }
  }
  var nu = 8192
  function ra(t) {
    if (t.subtreeFlags & nu) for (t = t.child; t !== null; ) nr(t), (t = t.sibling)
  }
  function nr(t) {
    switch (t.tag) {
      case 26:
        ra(t), t.flags & nu && t.memoizedState !== null && Vh(pl, t.memoizedState, t.memoizedProps)
        break
      case 5:
        ra(t)
        break
      case 3:
      case 4:
        var l = pl
        ;(pl = Un(t.stateNode.containerInfo)), ra(t), (pl = l)
        break
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = nu), (nu = 16777216), ra(t), (nu = l))
            : ra(t))
        break
      default:
        ra(t)
    }
  }
  function ir(t) {
    var l = t.alternate
    if (l !== null && ((t = l.child), t !== null)) {
      l.child = null
      do (l = t.sibling), (t.sibling = null), (t = l)
      while (t !== null)
    }
  }
  function iu(t) {
    var l = t.deletions
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e]
          ;(Gt = a), fr(a, t)
        }
      ir(t)
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) cr(t), (t = t.sibling)
  }
  function cr(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        iu(t), t.flags & 2048 && ae(9, t, t.return)
        break
      case 3:
        iu(t)
        break
      case 12:
        iu(t)
        break
      case 22:
        var l = t.stateNode
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13)
          ? ((l._visibility &= -3), Sn(t))
          : iu(t)
        break
      default:
        iu(t)
    }
  }
  function Sn(t) {
    var l = t.deletions
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e]
          ;(Gt = a), fr(a, t)
        }
      ir(t)
    }
    for (t = t.child; t !== null; ) {
      switch (((l = t), l.tag)) {
        case 0:
        case 11:
        case 15:
          ae(8, l, l.return), Sn(l)
          break
        case 22:
          ;(e = l.stateNode), e._visibility & 2 && ((e._visibility &= -3), Sn(l))
          break
        default:
          Sn(l)
      }
      t = t.sibling
    }
  }
  function fr(t, l) {
    for (; Gt !== null; ) {
      var e = Gt
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ae(8, e, l)
          break
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool
            a != null && a.refCount++
          }
          break
        case 24:
          Qa(e.memoizedState.cache)
      }
      if (((a = e.child), a !== null)) (a.return = e), (Gt = a)
      else
        t: for (e = t; Gt !== null; ) {
          a = Gt
          var u = a.sibling,
            n = a.return
          if ((Po(a), a === e)) {
            Gt = null
            break t
          }
          if (u !== null) {
            ;(u.return = n), (Gt = u)
            break t
          }
          Gt = n
        }
    }
  }
  var ih = {
      getCacheForType: function (t) {
        var l = Jt(qt),
          e = l.data.get(t)
        return e === void 0 && ((e = t()), l.data.set(t, e)), e
      }
    },
    ch = typeof WeakMap == 'function' ? WeakMap : Map,
    dt = 0,
    Et = null,
    et = null,
    ct = 0,
    ht = 0,
    fl = null,
    ie = !1,
    da = !1,
    Tc = !1,
    Zl = 0,
    zt = 0,
    ce = 0,
    qe = 0,
    Oc = 0,
    Sl = 0,
    ha = 0,
    cu = null,
    tl = null,
    Mc = !1,
    _c = 0,
    bn = 1 / 0,
    En = null,
    fe = null,
    Qt = 0,
    se = null,
    ma = null,
    va = 0,
    zc = 0,
    Dc = null,
    sr = null,
    fu = 0,
    Rc = null
  function sl() {
    if ((dt & 2) !== 0 && ct !== 0) return ct & -ct
    if (T.T !== null) {
      var t = ea
      return t !== 0 ? t : Bc()
    }
    return Of()
  }
  function or() {
    Sl === 0 && (Sl = (ct & 536870912) === 0 || rt ? Ef() : 536870912)
    var t = gl.current
    return t !== null && (t.flags |= 32), Sl
  }
  function ol(t, l, e) {
    ;((t === Et && (ht === 2 || ht === 9)) || t.cancelPendingCommit !== null) &&
      (ya(t, 0), oe(t, ct, Sl, !1)),
      _a(t, e),
      ((dt & 2) === 0 || t !== Et) &&
        (t === Et && ((dt & 2) === 0 && (qe |= e), zt === 4 && oe(t, ct, Sl, !1)), Dl(t))
  }
  function rr(t, l, e) {
    if ((dt & 6) !== 0) throw Error(s(327))
    var a = (!e && (l & 124) === 0 && (l & t.expiredLanes) === 0) || Ma(t, l),
      u = a ? oh(t, l) : Cc(t, l, !0),
      n = a
    do {
      if (u === 0) {
        da && !a && oe(t, l, 0, !1)
        break
      } else {
        if (((e = t.current.alternate), n && !fh(e))) {
          ;(u = Cc(t, l, !1)), (n = !1)
          continue
        }
        if (u === 2) {
          if (((n = l), t.errorRecoveryDisabledLanes & n)) var i = 0
          else (i = t.pendingLanes & -536870913), (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0)
          if (i !== 0) {
            l = i
            t: {
              var c = t
              u = cu
              var r = c.current.memoizedState.isDehydrated
              if ((r && (ya(c, i).flags |= 256), (i = Cc(c, i, !1)), i !== 2)) {
                if (Tc && !r) {
                  ;(c.errorRecoveryDisabledLanes |= n), (qe |= n), (u = 4)
                  break t
                }
                ;(n = tl), (tl = u), n !== null && (tl === null ? (tl = n) : tl.push.apply(tl, n))
              }
              u = i
            }
            if (((n = !1), u !== 2)) continue
          }
        }
        if (u === 1) {
          ya(t, 0), oe(t, l, 0, !0)
          break
        }
        t: {
          switch (((a = t), (n = u), n)) {
            case 0:
            case 1:
              throw Error(s(345))
            case 4:
              if ((l & 4194048) !== l) break
            case 6:
              oe(a, l, Sl, !ie)
              break t
            case 2:
              tl = null
              break
            case 3:
            case 5:
              break
            default:
              throw Error(s(329))
          }
          if ((l & 62914560) === l && ((u = _c + 300 - Tl()), 10 < u)) {
            if ((oe(a, l, Sl, !ie), Uu(a, 0, !0) !== 0)) break t
            a.timeoutHandle = jr(dr.bind(null, a, e, tl, En, Mc, l, Sl, qe, ha, ie, n, 2, -0, 0), u)
            break t
          }
          dr(a, e, tl, En, Mc, l, Sl, qe, ha, ie, n, 0, -0, 0)
        }
      }
      break
    } while (!0)
    Dl(t)
  }
  function dr(t, l, e, a, u, n, i, c, r, g, p, _, S, b) {
    if (
      ((t.timeoutHandle = -1),
      (_ = l.subtreeFlags),
      (_ & 8192 || (_ & 16785408) === 16785408) &&
        ((vu = { stylesheets: null, count: 0, unsuspend: Zh }), nr(l), (_ = Kh()), _ !== null))
    ) {
      ;(t.cancelPendingCommit = _(br.bind(null, t, l, n, e, a, u, i, c, r, p, 1, S, b))),
        oe(t, n, i, !g)
      return
    }
    br(t, l, n, e, a, u, i, c, r)
  }
  function fh(t) {
    for (var l = t; ; ) {
      var e = l.tag
      if (
        (e === 0 || e === 11 || e === 15) &&
        l.flags & 16384 &&
        ((e = l.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var u = e[a],
            n = u.getSnapshot
          u = u.value
          try {
            if (!ul(n(), u)) return !1
          } catch {
            return !1
          }
        }
      if (((e = l.child), l.subtreeFlags & 16384 && e !== null)) (e.return = l), (l = e)
      else {
        if (l === t) break
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0
          l = l.return
        }
        ;(l.sibling.return = l.return), (l = l.sibling)
      }
    }
    return !0
  }
  function oe(t, l, e, a) {
    ;(l &= ~Oc),
      (l &= ~qe),
      (t.suspendedLanes |= l),
      (t.pingedLanes &= ~l),
      a && (t.warmLanes |= l),
      (a = t.expirationTimes)
    for (var u = l; 0 < u; ) {
      var n = 31 - al(u),
        i = 1 << n
      ;(a[n] = -1), (u &= ~i)
    }
    e !== 0 && Af(t, e, l)
  }
  function pn() {
    return (dt & 6) === 0 ? (su(0), !1) : !0
  }
  function Uc() {
    if (et !== null) {
      if (ht === 0) var t = et.return
      else (t = et), (ql = Re = null), Ji(t), (fa = null), (Pa = 0), (t = et)
      for (; t !== null; ) Ko(t.alternate, t), (t = t.return)
      et = null
    }
  }
  function ya(t, l) {
    var e = t.timeoutHandle
    e !== -1 && ((t.timeoutHandle = -1), _h(e)),
      (e = t.cancelPendingCommit),
      e !== null && ((t.cancelPendingCommit = null), e()),
      Uc(),
      (Et = t),
      (et = e = Cl(t.current, null)),
      (ct = l),
      (ht = 0),
      (fl = null),
      (ie = !1),
      (da = Ma(t, l)),
      (Tc = !1),
      (ha = Sl = Oc = qe = ce = zt = 0),
      (tl = cu = null),
      (Mc = !1),
      (l & 8) !== 0 && (l |= l & 32)
    var a = t.entangledLanes
    if (a !== 0)
      for (t = t.entanglements, a &= l; 0 < a; ) {
        var u = 31 - al(a),
          n = 1 << u
        ;(l |= t[u]), (a &= ~n)
      }
    return (Zl = l), Qu(), e
  }
  function hr(t, l) {
    ;(P = null),
      (T.H = fn),
      l === Va || l === Fu
        ? ((l = Rs()), (ht = 3))
        : l === _s
          ? ((l = Rs()), (ht = 4))
          : (ht =
              l === No
                ? 8
                : l !== null && typeof l == 'object' && typeof l.then == 'function'
                  ? 6
                  : 1),
      (fl = l),
      et === null && ((zt = 1), hn(t, hl(l, t.current)))
  }
  function mr() {
    var t = T.H
    return (T.H = fn), t === null ? fn : t
  }
  function vr() {
    var t = T.A
    return (T.A = ih), t
  }
  function Nc() {
    ;(zt = 4),
      ie || ((ct & 4194048) !== ct && gl.current !== null) || (da = !0),
      ((ce & 134217727) === 0 && (qe & 134217727) === 0) || Et === null || oe(Et, ct, Sl, !1)
  }
  function Cc(t, l, e) {
    var a = dt
    dt |= 2
    var u = mr(),
      n = vr()
    ;(Et !== t || ct !== l) && ((En = null), ya(t, l)), (l = !1)
    var i = zt
    t: do
      try {
        if (ht !== 0 && et !== null) {
          var c = et,
            r = fl
          switch (ht) {
            case 8:
              Uc(), (i = 6)
              break t
            case 3:
            case 2:
            case 9:
            case 6:
              gl.current === null && (l = !0)
              var g = ht
              if (((ht = 0), (fl = null), ga(t, c, r, g), e && da)) {
                i = 0
                break t
              }
              break
            default:
              ;(g = ht), (ht = 0), (fl = null), ga(t, c, r, g)
          }
        }
        sh(), (i = zt)
        break
      } catch (p) {
        hr(t, p)
      }
    while (!0)
    return (
      l && t.shellSuspendCounter++,
      (ql = Re = null),
      (dt = a),
      (T.H = u),
      (T.A = n),
      et === null && ((Et = null), (ct = 0), Qu()),
      i
    )
  }
  function sh() {
    for (; et !== null; ) yr(et)
  }
  function oh(t, l) {
    var e = dt
    dt |= 2
    var a = mr(),
      u = vr()
    Et !== t || ct !== l ? ((En = null), (bn = Tl() + 500), ya(t, l)) : (da = Ma(t, l))
    t: do
      try {
        if (ht !== 0 && et !== null) {
          l = et
          var n = fl
          l: switch (ht) {
            case 1:
              ;(ht = 0), (fl = null), ga(t, l, n, 1)
              break
            case 2:
            case 9:
              if (zs(n)) {
                ;(ht = 0), (fl = null), gr(l)
                break
              }
              ;(l = function () {
                ;(ht !== 2 && ht !== 9) || Et !== t || (ht = 7), Dl(t)
              }),
                n.then(l, l)
              break t
            case 3:
              ht = 7
              break t
            case 4:
              ht = 5
              break t
            case 7:
              zs(n) ? ((ht = 0), (fl = null), gr(l)) : ((ht = 0), (fl = null), ga(t, l, n, 7))
              break
            case 5:
              var i = null
              switch (et.tag) {
                case 26:
                  i = et.memoizedState
                case 5:
                case 27:
                  var c = et
                  if (!i || Ir(i)) {
                    ;(ht = 0), (fl = null)
                    var r = c.sibling
                    if (r !== null) et = r
                    else {
                      var g = c.return
                      g !== null ? ((et = g), An(g)) : (et = null)
                    }
                    break l
                  }
              }
              ;(ht = 0), (fl = null), ga(t, l, n, 5)
              break
            case 6:
              ;(ht = 0), (fl = null), ga(t, l, n, 6)
              break
            case 8:
              Uc(), (zt = 6)
              break t
            default:
              throw Error(s(462))
          }
        }
        rh()
        break
      } catch (p) {
        hr(t, p)
      }
    while (!0)
    return (
      (ql = Re = null),
      (T.H = a),
      (T.A = u),
      (dt = e),
      et !== null ? 0 : ((Et = null), (ct = 0), Qu(), zt)
    )
  }
  function rh() {
    for (; et !== null && !Hd(); ) yr(et)
  }
  function yr(t) {
    var l = Zo(t.alternate, t, Zl)
    ;(t.memoizedProps = t.pendingProps), l === null ? An(t) : (et = l)
  }
  function gr(t) {
    var l = t,
      e = l.alternate
    switch (l.tag) {
      case 15:
      case 0:
        l = Yo(e, l, l.pendingProps, l.type, void 0, ct)
        break
      case 11:
        l = Yo(e, l, l.pendingProps, l.type.render, l.ref, ct)
        break
      case 5:
        Ji(l)
      default:
        Ko(e, l), (l = et = gs(l, Zl)), (l = Zo(e, l, Zl))
    }
    ;(t.memoizedProps = t.pendingProps), l === null ? An(t) : (et = l)
  }
  function ga(t, l, e, a) {
    ;(ql = Re = null), Ji(l), (fa = null), (Pa = 0)
    var u = l.return
    try {
      if (th(t, u, l, e, ct)) {
        ;(zt = 1), hn(t, hl(e, t.current)), (et = null)
        return
      }
    } catch (n) {
      if (u !== null) throw ((et = u), n)
      ;(zt = 1), hn(t, hl(e, t.current)), (et = null)
      return
    }
    l.flags & 32768
      ? (rt || a === 1
          ? (t = !0)
          : da || (ct & 536870912) !== 0
            ? (t = !1)
            : ((ie = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = gl.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        Sr(l, t))
      : An(l)
  }
  function An(t) {
    var l = t
    do {
      if ((l.flags & 32768) !== 0) {
        Sr(l, ie)
        return
      }
      t = l.return
      var e = eh(l.alternate, l, Zl)
      if (e !== null) {
        et = e
        return
      }
      if (((l = l.sibling), l !== null)) {
        et = l
        return
      }
      et = l = t
    } while (l !== null)
    zt === 0 && (zt = 5)
  }
  function Sr(t, l) {
    do {
      var e = ah(t.alternate, t)
      if (e !== null) {
        ;(e.flags &= 32767), (et = e)
        return
      }
      if (
        ((e = t.return),
        e !== null && ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !l && ((t = t.sibling), t !== null))
      ) {
        et = t
        return
      }
      et = t = e
    } while (t !== null)
    ;(zt = 6), (et = null)
  }
  function br(t, l, e, a, u, n, i, c, r) {
    t.cancelPendingCommit = null
    do Tn()
    while (Qt !== 0)
    if ((dt & 6) !== 0) throw Error(s(327))
    if (l !== null) {
      if (l === t.current) throw Error(s(177))
      if (
        ((n = l.lanes | l.childLanes),
        (n |= Ai),
        Zd(t, e, n, i, c, r),
        t === Et && ((et = Et = null), (ct = 0)),
        (ma = l),
        (se = t),
        (va = e),
        (zc = n),
        (Dc = u),
        (sr = a),
        (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            vh(zu, function () {
              return Or(), null
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (l.flags & 13878) !== 0),
        (l.subtreeFlags & 13878) !== 0 || a)
      ) {
        ;(a = T.T), (T.T = null), (u = q.p), (q.p = 2), (i = dt), (dt |= 4)
        try {
          uh(t, l, e)
        } finally {
          ;(dt = i), (q.p = u), (T.T = a)
        }
      }
      ;(Qt = 1), Er(), pr(), Ar()
    }
  }
  function Er() {
    if (Qt === 1) {
      Qt = 0
      var t = se,
        l = ma,
        e = (l.flags & 13878) !== 0
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        ;(e = T.T), (T.T = null)
        var a = q.p
        q.p = 2
        var u = dt
        dt |= 4
        try {
          er(l, t)
          var n = Vc,
            i = cs(t.containerInfo),
            c = n.focusedElem,
            r = n.selectionRange
          if (i !== c && c && c.ownerDocument && is(c.ownerDocument.documentElement, c)) {
            if (r !== null && gi(c)) {
              var g = r.start,
                p = r.end
              if ((p === void 0 && (p = g), 'selectionStart' in c))
                (c.selectionStart = g), (c.selectionEnd = Math.min(p, c.value.length))
              else {
                var _ = c.ownerDocument || document,
                  S = (_ && _.defaultView) || window
                if (S.getSelection) {
                  var b = S.getSelection(),
                    w = c.textContent.length,
                    Z = Math.min(r.start, w),
                    yt = r.end === void 0 ? Z : Math.min(r.end, w)
                  !b.extend && Z > yt && ((i = yt), (yt = Z), (Z = i))
                  var v = ns(c, Z),
                    h = ns(c, yt)
                  if (
                    v &&
                    h &&
                    (b.rangeCount !== 1 ||
                      b.anchorNode !== v.node ||
                      b.anchorOffset !== v.offset ||
                      b.focusNode !== h.node ||
                      b.focusOffset !== h.offset)
                  ) {
                    var y = _.createRange()
                    y.setStart(v.node, v.offset),
                      b.removeAllRanges(),
                      Z > yt
                        ? (b.addRange(y), b.extend(h.node, h.offset))
                        : (y.setEnd(h.node, h.offset), b.addRange(y))
                  }
                }
              }
            }
            for (_ = [], b = c; (b = b.parentNode); )
              b.nodeType === 1 && _.push({ element: b, left: b.scrollLeft, top: b.scrollTop })
            for (typeof c.focus == 'function' && c.focus(), c = 0; c < _.length; c++) {
              var M = _[c]
              ;(M.element.scrollLeft = M.left), (M.element.scrollTop = M.top)
            }
          }
          ;(qn = !!Zc), (Vc = Zc = null)
        } finally {
          ;(dt = u), (q.p = a), (T.T = e)
        }
      }
      ;(t.current = l), (Qt = 2)
    }
  }
  function pr() {
    if (Qt === 2) {
      Qt = 0
      var t = se,
        l = ma,
        e = (l.flags & 8772) !== 0
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        ;(e = T.T), (T.T = null)
        var a = q.p
        q.p = 2
        var u = dt
        dt |= 4
        try {
          Io(t, l.alternate, l)
        } finally {
          ;(dt = u), (q.p = a), (T.T = e)
        }
      }
      Qt = 3
    }
  }
  function Ar() {
    if (Qt === 4 || Qt === 3) {
      ;(Qt = 0), xd()
      var t = se,
        l = ma,
        e = va,
        a = sr
      ;(l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
        ? (Qt = 5)
        : ((Qt = 0), (ma = se = null), Tr(t, t.pendingLanes))
      var u = t.pendingLanes
      if (
        (u === 0 && (fe = null),
        $n(e),
        (l = l.stateNode),
        el && typeof el.onCommitFiberRoot == 'function')
      )
        try {
          el.onCommitFiberRoot(Oa, l, void 0, (l.current.flags & 128) === 128)
        } catch {}
      if (a !== null) {
        ;(l = T.T), (u = q.p), (q.p = 2), (T.T = null)
        try {
          for (var n = t.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i]
            n(c.value, { componentStack: c.stack })
          }
        } finally {
          ;(T.T = l), (q.p = u)
        }
      }
      ;(va & 3) !== 0 && Tn(),
        Dl(t),
        (u = t.pendingLanes),
        (e & 4194090) !== 0 && (u & 42) !== 0 ? (t === Rc ? fu++ : ((fu = 0), (Rc = t))) : (fu = 0),
        su(0)
    }
  }
  function Tr(t, l) {
    ;(t.pooledCacheLanes &= l) === 0 &&
      ((l = t.pooledCache), l != null && ((t.pooledCache = null), Qa(l)))
  }
  function Tn(t) {
    return Er(), pr(), Ar(), Or()
  }
  function Or() {
    if (Qt !== 5) return !1
    var t = se,
      l = zc
    zc = 0
    var e = $n(va),
      a = T.T,
      u = q.p
    try {
      ;(q.p = 32 > e ? 32 : e), (T.T = null), (e = Dc), (Dc = null)
      var n = se,
        i = va
      if (((Qt = 0), (ma = se = null), (va = 0), (dt & 6) !== 0)) throw Error(s(331))
      var c = dt
      if (
        ((dt |= 4),
        cr(n.current),
        ur(n, n.current, i, e),
        (dt = c),
        su(0, !1),
        el && typeof el.onPostCommitFiberRoot == 'function')
      )
        try {
          el.onPostCommitFiberRoot(Oa, n)
        } catch {}
      return !0
    } finally {
      ;(q.p = u), (T.T = a), Tr(t, l)
    }
  }
  function Mr(t, l, e) {
    ;(l = hl(e, l)), (l = cc(t.stateNode, l, 2)), (t = Pl(t, l, 2)), t !== null && (_a(t, 2), Dl(t))
  }
  function St(t, l, e) {
    if (t.tag === 3) Mr(t, t, e)
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Mr(l, t, e)
          break
        } else if (l.tag === 1) {
          var a = l.stateNode
          if (
            typeof l.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' && (fe === null || !fe.has(a)))
          ) {
            ;(t = hl(e, t)),
              (e = Ro(2)),
              (a = Pl(l, e, 2)),
              a !== null && (Uo(e, a, l, t), _a(a, 2), Dl(a))
            break
          }
        }
        l = l.return
      }
  }
  function Hc(t, l, e) {
    var a = t.pingCache
    if (a === null) {
      a = t.pingCache = new ch()
      var u = new Set()
      a.set(l, u)
    } else (u = a.get(l)), u === void 0 && ((u = new Set()), a.set(l, u))
    u.has(e) || ((Tc = !0), u.add(e), (t = dh.bind(null, t, l, e)), l.then(t, t))
  }
  function dh(t, l, e) {
    var a = t.pingCache
    a !== null && a.delete(l),
      (t.pingedLanes |= t.suspendedLanes & e),
      (t.warmLanes &= ~e),
      Et === t &&
        (ct & e) === e &&
        (zt === 4 || (zt === 3 && (ct & 62914560) === ct && 300 > Tl() - _c)
          ? (dt & 2) === 0 && ya(t, 0)
          : (Oc |= e),
        ha === ct && (ha = 0)),
      Dl(t)
  }
  function _r(t, l) {
    l === 0 && (l = pf()), (t = Ie(t, l)), t !== null && (_a(t, l), Dl(t))
  }
  function hh(t) {
    var l = t.memoizedState,
      e = 0
    l !== null && (e = l.retryLane), _r(t, e)
  }
  function mh(t, l) {
    var e = 0
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          u = t.memoizedState
        u !== null && (e = u.retryLane)
        break
      case 19:
        a = t.stateNode
        break
      case 22:
        a = t.stateNode._retryCache
        break
      default:
        throw Error(s(314))
    }
    a !== null && a.delete(l), _r(t, e)
  }
  function vh(t, l) {
    return wn(t, l)
  }
  var On = null,
    Sa = null,
    xc = !1,
    Mn = !1,
    qc = !1,
    Be = 0
  function Dl(t) {
    t !== Sa && t.next === null && (Sa === null ? (On = Sa = t) : (Sa = Sa.next = t)),
      (Mn = !0),
      xc || ((xc = !0), gh())
  }
  function su(t, l) {
    if (!qc && Mn) {
      qc = !0
      do
        for (var e = !1, a = On; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes
            if (u === 0) var n = 0
            else {
              var i = a.suspendedLanes,
                c = a.pingedLanes
              ;(n = (1 << (31 - al(42 | t) + 1)) - 1),
                (n &= u & ~(i & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0)
            }
            n !== 0 && ((e = !0), Ur(a, n))
          } else
            (n = ct),
              (n = Uu(
                a,
                a === Et ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (n & 3) === 0 || Ma(a, n) || ((e = !0), Ur(a, n))
          a = a.next
        }
      while (e)
      qc = !1
    }
  }
  function yh() {
    zr()
  }
  function zr() {
    Mn = xc = !1
    var t = 0
    Be !== 0 && (Mh() && (t = Be), (Be = 0))
    for (var l = Tl(), e = null, a = On; a !== null; ) {
      var u = a.next,
        n = Dr(a, l)
      n === 0
        ? ((a.next = null), e === null ? (On = u) : (e.next = u), u === null && (Sa = e))
        : ((e = a), (t !== 0 || (n & 3) !== 0) && (Mn = !0)),
        (a = u)
    }
    su(t)
  }
  function Dr(t, l) {
    for (
      var e = t.suspendedLanes,
        a = t.pingedLanes,
        u = t.expirationTimes,
        n = t.pendingLanes & -62914561;
      0 < n;

    ) {
      var i = 31 - al(n),
        c = 1 << i,
        r = u[i]
      r === -1
        ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = Qd(c, l))
        : r <= l && (t.expiredLanes |= c),
        (n &= ~c)
    }
    if (
      ((l = Et),
      (e = ct),
      (e = Uu(t, t === l ? e : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      (a = t.callbackNode),
      e === 0 || (t === l && (ht === 2 || ht === 9)) || t.cancelPendingCommit !== null)
    )
      return a !== null && a !== null && Jn(a), (t.callbackNode = null), (t.callbackPriority = 0)
    if ((e & 3) === 0 || Ma(t, e)) {
      if (((l = e & -e), l === t.callbackPriority)) return l
      switch ((a !== null && Jn(a), $n(e))) {
        case 2:
        case 8:
          e = Sf
          break
        case 32:
          e = zu
          break
        case 268435456:
          e = bf
          break
        default:
          e = zu
      }
      return (
        (a = Rr.bind(null, t)), (e = wn(e, a)), (t.callbackPriority = l), (t.callbackNode = e), l
      )
    }
    return a !== null && a !== null && Jn(a), (t.callbackPriority = 2), (t.callbackNode = null), 2
  }
  function Rr(t, l) {
    if (Qt !== 0 && Qt !== 5) return (t.callbackNode = null), (t.callbackPriority = 0), null
    var e = t.callbackNode
    if (Tn() && t.callbackNode !== e) return null
    var a = ct
    return (
      (a = Uu(t, t === Et ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      a === 0
        ? null
        : (rr(t, a, l),
          Dr(t, Tl()),
          t.callbackNode != null && t.callbackNode === e ? Rr.bind(null, t) : null)
    )
  }
  function Ur(t, l) {
    if (Tn()) return null
    rr(t, l, !0)
  }
  function gh() {
    zh(function () {
      ;(dt & 6) !== 0 ? wn(gf, yh) : zr()
    })
  }
  function Bc() {
    return Be === 0 && (Be = Ef()), Be
  }
  function Nr(t) {
    return t == null || typeof t == 'symbol' || typeof t == 'boolean'
      ? null
      : typeof t == 'function'
        ? t
        : qu('' + t)
  }
  function Cr(t, l) {
    var e = l.ownerDocument.createElement('input')
    return (
      (e.name = l.name),
      (e.value = l.value),
      t.id && e.setAttribute('form', t.id),
      l.parentNode.insertBefore(e, l),
      (t = new FormData(t)),
      e.parentNode.removeChild(e),
      t
    )
  }
  function Sh(t, l, e, a, u) {
    if (l === 'submit' && e && e.stateNode === u) {
      var n = Nr((u[$t] || null).action),
        i = a.submitter
      i &&
        ((l = (l = i[$t] || null) ? Nr(l.formAction) : i.getAttribute('formAction')),
        l !== null && ((n = l), (i = null)))
      var c = new Gu('action', 'action', null, a, u)
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Be !== 0) {
                  var r = i ? Cr(u, i) : new FormData(u)
                  ec(e, { pending: !0, data: r, method: u.method, action: n }, null, r)
                }
              } else
                typeof n == 'function' &&
                  (c.preventDefault(),
                  (r = i ? Cr(u, i) : new FormData(u)),
                  ec(e, { pending: !0, data: r, method: u.method, action: n }, n, r))
            },
            currentTarget: u
          }
        ]
      })
    }
  }
  for (var Yc = 0; Yc < pi.length; Yc++) {
    var Lc = pi[Yc],
      bh = Lc.toLowerCase(),
      Eh = Lc[0].toUpperCase() + Lc.slice(1)
    El(bh, 'on' + Eh)
  }
  El(os, 'onAnimationEnd'),
    El(rs, 'onAnimationIteration'),
    El(ds, 'onAnimationStart'),
    El('dblclick', 'onDoubleClick'),
    El('focusin', 'onFocus'),
    El('focusout', 'onBlur'),
    El(Y0, 'onTransitionRun'),
    El(L0, 'onTransitionStart'),
    El(G0, 'onTransitionCancel'),
    El(hs, 'onTransitionEnd'),
    Qe('onMouseEnter', ['mouseout', 'mouseover']),
    Qe('onMouseLeave', ['mouseout', 'mouseover']),
    Qe('onPointerEnter', ['pointerout', 'pointerover']),
    Qe('onPointerLeave', ['pointerout', 'pointerover']),
    Ee('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Ee(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Ee('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ee('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Ee(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Ee(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    )
  var ou =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    ph = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(ou)
    )
  function Hr(t, l) {
    l = (l & 4) !== 0
    for (var e = 0; e < t.length; e++) {
      var a = t[e],
        u = a.event
      a = a.listeners
      t: {
        var n = void 0
        if (l)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i],
              r = c.instance,
              g = c.currentTarget
            if (((c = c.listener), r !== n && u.isPropagationStopped())) break t
            ;(n = c), (u.currentTarget = g)
            try {
              n(u)
            } catch (p) {
              dn(p)
            }
            ;(u.currentTarget = null), (n = r)
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((c = a[i]),
              (r = c.instance),
              (g = c.currentTarget),
              (c = c.listener),
              r !== n && u.isPropagationStopped())
            )
              break t
            ;(n = c), (u.currentTarget = g)
            try {
              n(u)
            } catch (p) {
              dn(p)
            }
            ;(u.currentTarget = null), (n = r)
          }
      }
    }
  }
  function at(t, l) {
    var e = l[Fn]
    e === void 0 && (e = l[Fn] = new Set())
    var a = t + '__bubble'
    e.has(a) || (xr(l, t, 2, !1), e.add(a))
  }
  function Gc(t, l, e) {
    var a = 0
    l && (a |= 4), xr(e, t, a, l)
  }
  var _n = '_reactListening' + Math.random().toString(36).slice(2)
  function jc(t) {
    if (!t[_n]) {
      ;(t[_n] = !0),
        _f.forEach(function (e) {
          e !== 'selectionchange' && (ph.has(e) || Gc(e, !1, t), Gc(e, !0, t))
        })
      var l = t.nodeType === 9 ? t : t.ownerDocument
      l === null || l[_n] || ((l[_n] = !0), Gc('selectionchange', !1, l))
    }
  }
  function xr(t, l, e, a) {
    switch (ud(l)) {
      case 2:
        var u = kh
        break
      case 8:
        u = Wh
        break
      default:
        u = tf
    }
    ;(e = u.bind(null, l, e, t)),
      (u = void 0),
      !fi || (l !== 'touchstart' && l !== 'touchmove' && l !== 'wheel') || (u = !0),
      a
        ? u !== void 0
          ? t.addEventListener(l, e, { capture: !0, passive: u })
          : t.addEventListener(l, e, !0)
        : u !== void 0
          ? t.addEventListener(l, e, { passive: u })
          : t.addEventListener(l, e, !1)
  }
  function Xc(t, l, e, a, u) {
    var n = a
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return
        var i = a.tag
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo
          if (c === u) break
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var r = i.tag
              if ((r === 3 || r === 4) && i.stateNode.containerInfo === u) return
              i = i.return
            }
          for (; c !== null; ) {
            if (((i = Ge(c)), i === null)) return
            if (((r = i.tag), r === 5 || r === 6 || r === 26 || r === 27)) {
              a = n = i
              continue t
            }
            c = c.parentNode
          }
        }
        a = a.return
      }
    jf(function () {
      var g = n,
        p = ii(e),
        _ = []
      t: {
        var S = ms.get(t)
        if (S !== void 0) {
          var b = Gu,
            w = t
          switch (t) {
            case 'keypress':
              if (Yu(e) === 0) break t
            case 'keydown':
            case 'keyup':
              b = v0
              break
            case 'focusin':
              ;(w = 'focus'), (b = di)
              break
            case 'focusout':
              ;(w = 'blur'), (b = di)
              break
            case 'beforeblur':
            case 'afterblur':
              b = di
              break
            case 'click':
              if (e.button === 2) break t
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              b = Zf
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              b = a0
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              b = S0
              break
            case os:
            case rs:
            case ds:
              b = i0
              break
            case hs:
              b = E0
              break
            case 'scroll':
            case 'scrollend':
              b = l0
              break
            case 'wheel':
              b = A0
              break
            case 'copy':
            case 'cut':
            case 'paste':
              b = f0
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              b = Kf
              break
            case 'toggle':
            case 'beforetoggle':
              b = O0
          }
          var Z = (l & 4) !== 0,
            yt = !Z && (t === 'scroll' || t === 'scrollend'),
            v = Z ? (S !== null ? S + 'Capture' : null) : S
          Z = []
          for (var h = g, y; h !== null; ) {
            var M = h
            if (
              ((y = M.stateNode),
              (M = M.tag),
              (M !== 5 && M !== 26 && M !== 27) ||
                y === null ||
                v === null ||
                ((M = Ra(h, v)), M != null && Z.push(ru(h, M, y))),
              yt)
            )
              break
            h = h.return
          }
          0 < Z.length && ((S = new b(S, w, null, e, p)), _.push({ event: S, listeners: Z }))
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (
            ((S = t === 'mouseover' || t === 'pointerover'),
            (b = t === 'mouseout' || t === 'pointerout'),
            S && e !== ni && (w = e.relatedTarget || e.fromElement) && (Ge(w) || w[Le]))
          )
            break t
          if (
            (b || S) &&
            ((S =
              p.window === p
                ? p
                : (S = p.ownerDocument)
                  ? S.defaultView || S.parentWindow
                  : window),
            b
              ? ((w = e.relatedTarget || e.toElement),
                (b = g),
                (w = w ? Ge(w) : null),
                w !== null &&
                  ((yt = O(w)), (Z = w.tag), w !== yt || (Z !== 5 && Z !== 27 && Z !== 6)) &&
                  (w = null))
              : ((b = null), (w = g)),
            b !== w)
          ) {
            if (
              ((Z = Zf),
              (M = 'onMouseLeave'),
              (v = 'onMouseEnter'),
              (h = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                ((Z = Kf), (M = 'onPointerLeave'), (v = 'onPointerEnter'), (h = 'pointer')),
              (yt = b == null ? S : Da(b)),
              (y = w == null ? S : Da(w)),
              (S = new Z(M, h + 'leave', b, e, p)),
              (S.target = yt),
              (S.relatedTarget = y),
              (M = null),
              Ge(p) === g &&
                ((Z = new Z(v, h + 'enter', w, e, p)),
                (Z.target = y),
                (Z.relatedTarget = yt),
                (M = Z)),
              (yt = M),
              b && w)
            )
              l: {
                for (Z = b, v = w, h = 0, y = Z; y; y = ba(y)) h++
                for (y = 0, M = v; M; M = ba(M)) y++
                for (; 0 < h - y; ) (Z = ba(Z)), h--
                for (; 0 < y - h; ) (v = ba(v)), y--
                for (; h--; ) {
                  if (Z === v || (v !== null && Z === v.alternate)) break l
                  ;(Z = ba(Z)), (v = ba(v))
                }
                Z = null
              }
            else Z = null
            b !== null && qr(_, S, b, Z, !1), w !== null && yt !== null && qr(_, yt, w, Z, !0)
          }
        }
        t: {
          if (
            ((S = g ? Da(g) : window),
            (b = S.nodeName && S.nodeName.toLowerCase()),
            b === 'select' || (b === 'input' && S.type === 'file'))
          )
            var L = Pf
          else if (Ff(S))
            if (ts) L = x0
            else {
              L = C0
              var lt = N0
            }
          else
            (b = S.nodeName),
              !b || b.toLowerCase() !== 'input' || (S.type !== 'checkbox' && S.type !== 'radio')
                ? g && ui(g.elementType) && (L = Pf)
                : (L = H0)
          if (L && (L = L(t, g))) {
            If(_, L, e, p)
            break t
          }
          lt && lt(t, S, g),
            t === 'focusout' &&
              g &&
              S.type === 'number' &&
              g.memoizedProps.value != null &&
              ai(S, 'number', S.value)
        }
        switch (((lt = g ? Da(g) : window), t)) {
          case 'focusin':
            ;(Ff(lt) || lt.contentEditable === 'true') && ((We = lt), (Si = g), (Ya = null))
            break
          case 'focusout':
            Ya = Si = We = null
            break
          case 'mousedown':
            bi = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;(bi = !1), fs(_, e, p)
            break
          case 'selectionchange':
            if (B0) break
          case 'keydown':
          case 'keyup':
            fs(_, e, p)
        }
        var G
        if (mi)
          t: {
            switch (t) {
              case 'compositionstart':
                var V = 'onCompositionStart'
                break t
              case 'compositionend':
                V = 'onCompositionEnd'
                break t
              case 'compositionupdate':
                V = 'onCompositionUpdate'
                break t
            }
            V = void 0
          }
        else
          ke
            ? Wf(t, e) && (V = 'onCompositionEnd')
            : t === 'keydown' && e.keyCode === 229 && (V = 'onCompositionStart')
        V &&
          (wf &&
            e.locale !== 'ko' &&
            (ke || V !== 'onCompositionStart'
              ? V === 'onCompositionEnd' && ke && (G = Xf())
              : ((Wl = p), (si = 'value' in Wl ? Wl.value : Wl.textContent), (ke = !0))),
          (lt = zn(g, V)),
          0 < lt.length &&
            ((V = new Vf(V, t, null, e, p)),
            _.push({ event: V, listeners: lt }),
            G ? (V.data = G) : ((G = $f(e)), G !== null && (V.data = G)))),
          (G = _0 ? z0(t, e) : D0(t, e)) &&
            ((V = zn(g, 'onBeforeInput')),
            0 < V.length &&
              ((lt = new Vf('onBeforeInput', 'beforeinput', null, e, p)),
              _.push({ event: lt, listeners: V }),
              (lt.data = G))),
          Sh(_, t, g, e, p)
      }
      Hr(_, l)
    })
  }
  function ru(t, l, e) {
    return { instance: t, listener: l, currentTarget: e }
  }
  function zn(t, l) {
    for (var e = l + 'Capture', a = []; t !== null; ) {
      var u = t,
        n = u.stateNode
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Ra(t, e)),
          u != null && a.unshift(ru(t, u, n)),
          (u = Ra(t, l)),
          u != null && a.push(ru(t, u, n))),
        t.tag === 3)
      )
        return a
      t = t.return
    }
    return []
  }
  function ba(t) {
    if (t === null) return null
    do t = t.return
    while (t && t.tag !== 5 && t.tag !== 27)
    return t || null
  }
  function qr(t, l, e, a, u) {
    for (var n = l._reactName, i = []; e !== null && e !== a; ) {
      var c = e,
        r = c.alternate,
        g = c.stateNode
      if (((c = c.tag), r !== null && r === a)) break
      ;(c !== 5 && c !== 26 && c !== 27) ||
        g === null ||
        ((r = g),
        u
          ? ((g = Ra(e, n)), g != null && i.unshift(ru(e, g, r)))
          : u || ((g = Ra(e, n)), g != null && i.push(ru(e, g, r)))),
        (e = e.return)
    }
    i.length !== 0 && t.push({ event: l, listeners: i })
  }
  var Ah = /\r\n?/g,
    Th = /\u0000|\uFFFD/g
  function Br(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        Ah,
        `
`
      )
      .replace(Th, '')
  }
  function Yr(t, l) {
    return (l = Br(l)), Br(t) === l
  }
  function Dn() {}
  function vt(t, l, e, a, u, n) {
    switch (e) {
      case 'children':
        typeof a == 'string'
          ? l === 'body' || (l === 'textarea' && a === '') || Ke(t, a)
          : (typeof a == 'number' || typeof a == 'bigint') && l !== 'body' && Ke(t, '' + a)
        break
      case 'className':
        Cu(t, 'class', a)
        break
      case 'tabIndex':
        Cu(t, 'tabindex', a)
        break
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Cu(t, e, a)
        break
      case 'style':
        Lf(t, a, n)
        break
      case 'data':
        if (l !== 'object') {
          Cu(t, 'data', a)
          break
        }
      case 'src':
      case 'href':
        if (a === '' && (l !== 'a' || e !== 'href')) {
          t.removeAttribute(e)
          break
        }
        if (a == null || typeof a == 'function' || typeof a == 'symbol' || typeof a == 'boolean') {
          t.removeAttribute(e)
          break
        }
        ;(a = qu('' + a)), t.setAttribute(e, a)
        break
      case 'action':
      case 'formAction':
        if (typeof a == 'function') {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          )
          break
        } else
          typeof n == 'function' &&
            (e === 'formAction'
              ? (l !== 'input' && vt(t, l, 'name', u.name, u, null),
                vt(t, l, 'formEncType', u.formEncType, u, null),
                vt(t, l, 'formMethod', u.formMethod, u, null),
                vt(t, l, 'formTarget', u.formTarget, u, null))
              : (vt(t, l, 'encType', u.encType, u, null),
                vt(t, l, 'method', u.method, u, null),
                vt(t, l, 'target', u.target, u, null)))
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          t.removeAttribute(e)
          break
        }
        ;(a = qu('' + a)), t.setAttribute(e, a)
        break
      case 'onClick':
        a != null && (t.onclick = Dn)
        break
      case 'onScroll':
        a != null && at('scroll', t)
        break
      case 'onScrollEnd':
        a != null && at('scrollend', t)
        break
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(s(61))
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(s(60))
            t.innerHTML = e
          }
        }
        break
      case 'multiple':
        t.multiple = a && typeof a != 'function' && typeof a != 'symbol'
        break
      case 'muted':
        t.muted = a && typeof a != 'function' && typeof a != 'symbol'
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break
      case 'autoFocus':
        break
      case 'xlinkHref':
        if (a == null || typeof a == 'function' || typeof a == 'boolean' || typeof a == 'symbol') {
          t.removeAttribute('xlink:href')
          break
        }
        ;(e = qu('' + a)), t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', e)
        break
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        a != null && typeof a != 'function' && typeof a != 'symbol'
          ? t.setAttribute(e, '' + a)
          : t.removeAttribute(e)
        break
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        a && typeof a != 'function' && typeof a != 'symbol'
          ? t.setAttribute(e, '')
          : t.removeAttribute(e)
        break
      case 'capture':
      case 'download':
        a === !0
          ? t.setAttribute(e, '')
          : a !== !1 && a != null && typeof a != 'function' && typeof a != 'symbol'
            ? t.setAttribute(e, a)
            : t.removeAttribute(e)
        break
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        a != null && typeof a != 'function' && typeof a != 'symbol' && !isNaN(a) && 1 <= a
          ? t.setAttribute(e, a)
          : t.removeAttribute(e)
        break
      case 'rowSpan':
      case 'start':
        a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a)
          ? t.removeAttribute(e)
          : t.setAttribute(e, a)
        break
      case 'popover':
        at('beforetoggle', t), at('toggle', t), Nu(t, 'popover', a)
        break
      case 'xlinkActuate':
        Ul(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a)
        break
      case 'xlinkArcrole':
        Ul(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a)
        break
      case 'xlinkRole':
        Ul(t, 'http://www.w3.org/1999/xlink', 'xlink:role', a)
        break
      case 'xlinkShow':
        Ul(t, 'http://www.w3.org/1999/xlink', 'xlink:show', a)
        break
      case 'xlinkTitle':
        Ul(t, 'http://www.w3.org/1999/xlink', 'xlink:title', a)
        break
      case 'xlinkType':
        Ul(t, 'http://www.w3.org/1999/xlink', 'xlink:type', a)
        break
      case 'xmlBase':
        Ul(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a)
        break
      case 'xmlLang':
        Ul(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a)
        break
      case 'xmlSpace':
        Ul(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a)
        break
      case 'is':
        Nu(t, 'is', a)
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        ;(!(2 < e.length) || (e[0] !== 'o' && e[0] !== 'O') || (e[1] !== 'n' && e[1] !== 'N')) &&
          ((e = Pd.get(e) || e), Nu(t, e, a))
    }
  }
  function Qc(t, l, e, a, u, n) {
    switch (e) {
      case 'style':
        Lf(t, a, n)
        break
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(s(61))
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(s(60))
            t.innerHTML = e
          }
        }
        break
      case 'children':
        typeof a == 'string'
          ? Ke(t, a)
          : (typeof a == 'number' || typeof a == 'bigint') && Ke(t, '' + a)
        break
      case 'onScroll':
        a != null && at('scroll', t)
        break
      case 'onScrollEnd':
        a != null && at('scrollend', t)
        break
      case 'onClick':
        a != null && (t.onclick = Dn)
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        if (!zf.hasOwnProperty(e))
          t: {
            if (
              e[0] === 'o' &&
              e[1] === 'n' &&
              ((u = e.endsWith('Capture')),
              (l = e.slice(2, u ? e.length - 7 : void 0)),
              (n = t[$t] || null),
              (n = n != null ? n[e] : null),
              typeof n == 'function' && t.removeEventListener(l, n, u),
              typeof a == 'function')
            ) {
              typeof n != 'function' &&
                n !== null &&
                (e in t ? (t[e] = null) : t.hasAttribute(e) && t.removeAttribute(e)),
                t.addEventListener(l, a, u)
              break t
            }
            e in t ? (t[e] = a) : a === !0 ? t.setAttribute(e, '') : Nu(t, e, a)
          }
    }
  }
  function Zt(t, l, e) {
    switch (l) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'img':
        at('error', t), at('load', t)
        var a = !1,
          u = !1,
          n
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n]
            if (i != null)
              switch (n) {
                case 'src':
                  a = !0
                  break
                case 'srcSet':
                  u = !0
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(s(137, l))
                default:
                  vt(t, l, n, i, e, null)
              }
          }
        u && vt(t, l, 'srcSet', e.srcSet, e, null), a && vt(t, l, 'src', e.src, e, null)
        return
      case 'input':
        at('invalid', t)
        var c = (n = i = u = null),
          r = null,
          g = null
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var p = e[a]
            if (p != null)
              switch (a) {
                case 'name':
                  u = p
                  break
                case 'type':
                  i = p
                  break
                case 'checked':
                  r = p
                  break
                case 'defaultChecked':
                  g = p
                  break
                case 'value':
                  n = p
                  break
                case 'defaultValue':
                  c = p
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (p != null) throw Error(s(137, l))
                  break
                default:
                  vt(t, l, a, p, e, null)
              }
          }
        xf(t, n, c, r, g, i, u, !1), Hu(t)
        return
      case 'select':
        at('invalid', t), (a = i = n = null)
        for (u in e)
          if (e.hasOwnProperty(u) && ((c = e[u]), c != null))
            switch (u) {
              case 'value':
                n = c
                break
              case 'defaultValue':
                i = c
                break
              case 'multiple':
                a = c
              default:
                vt(t, l, u, c, e, null)
            }
        ;(l = n),
          (e = i),
          (t.multiple = !!a),
          l != null ? Ve(t, !!a, l, !1) : e != null && Ve(t, !!a, e, !0)
        return
      case 'textarea':
        at('invalid', t), (n = u = a = null)
        for (i in e)
          if (e.hasOwnProperty(i) && ((c = e[i]), c != null))
            switch (i) {
              case 'value':
                a = c
                break
              case 'defaultValue':
                u = c
                break
              case 'children':
                n = c
                break
              case 'dangerouslySetInnerHTML':
                if (c != null) throw Error(s(91))
                break
              default:
                vt(t, l, i, c, e, null)
            }
        Bf(t, a, u, n), Hu(t)
        return
      case 'option':
        for (r in e)
          if (e.hasOwnProperty(r) && ((a = e[r]), a != null))
            switch (r) {
              case 'selected':
                t.selected = a && typeof a != 'function' && typeof a != 'symbol'
                break
              default:
                vt(t, l, r, a, e, null)
            }
        return
      case 'dialog':
        at('beforetoggle', t), at('toggle', t), at('cancel', t), at('close', t)
        break
      case 'iframe':
      case 'object':
        at('load', t)
        break
      case 'video':
      case 'audio':
        for (a = 0; a < ou.length; a++) at(ou[a], t)
        break
      case 'image':
        at('error', t), at('load', t)
        break
      case 'details':
        at('toggle', t)
        break
      case 'embed':
      case 'source':
      case 'link':
        at('error', t), at('load', t)
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (g in e)
          if (e.hasOwnProperty(g) && ((a = e[g]), a != null))
            switch (g) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(s(137, l))
              default:
                vt(t, l, g, a, e, null)
            }
        return
      default:
        if (ui(l)) {
          for (p in e)
            e.hasOwnProperty(p) && ((a = e[p]), a !== void 0 && Qc(t, l, p, a, e, void 0))
          return
        }
    }
    for (c in e) e.hasOwnProperty(c) && ((a = e[c]), a != null && vt(t, l, c, a, e, null))
  }
  function Oh(t, l, e, a) {
    switch (l) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'input':
        var u = null,
          n = null,
          i = null,
          c = null,
          r = null,
          g = null,
          p = null
        for (b in e) {
          var _ = e[b]
          if (e.hasOwnProperty(b) && _ != null)
            switch (b) {
              case 'checked':
                break
              case 'value':
                break
              case 'defaultValue':
                r = _
              default:
                a.hasOwnProperty(b) || vt(t, l, b, null, a, _)
            }
        }
        for (var S in a) {
          var b = a[S]
          if (((_ = e[S]), a.hasOwnProperty(S) && (b != null || _ != null)))
            switch (S) {
              case 'type':
                n = b
                break
              case 'name':
                u = b
                break
              case 'checked':
                g = b
                break
              case 'defaultChecked':
                p = b
                break
              case 'value':
                i = b
                break
              case 'defaultValue':
                c = b
                break
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (b != null) throw Error(s(137, l))
                break
              default:
                b !== _ && vt(t, l, S, b, a, _)
            }
        }
        ei(t, i, c, r, g, p, n, u)
        return
      case 'select':
        b = i = c = S = null
        for (n in e)
          if (((r = e[n]), e.hasOwnProperty(n) && r != null))
            switch (n) {
              case 'value':
                break
              case 'multiple':
                b = r
              default:
                a.hasOwnProperty(n) || vt(t, l, n, null, a, r)
            }
        for (u in a)
          if (((n = a[u]), (r = e[u]), a.hasOwnProperty(u) && (n != null || r != null)))
            switch (u) {
              case 'value':
                S = n
                break
              case 'defaultValue':
                c = n
                break
              case 'multiple':
                i = n
              default:
                n !== r && vt(t, l, u, n, a, r)
            }
        ;(l = c),
          (e = i),
          (a = b),
          S != null
            ? Ve(t, !!e, S, !1)
            : !!a != !!e && (l != null ? Ve(t, !!e, l, !0) : Ve(t, !!e, e ? [] : '', !1))
        return
      case 'textarea':
        b = S = null
        for (c in e)
          if (((u = e[c]), e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c)))
            switch (c) {
              case 'value':
                break
              case 'children':
                break
              default:
                vt(t, l, c, null, a, u)
            }
        for (i in a)
          if (((u = a[i]), (n = e[i]), a.hasOwnProperty(i) && (u != null || n != null)))
            switch (i) {
              case 'value':
                S = u
                break
              case 'defaultValue':
                b = u
                break
              case 'children':
                break
              case 'dangerouslySetInnerHTML':
                if (u != null) throw Error(s(91))
                break
              default:
                u !== n && vt(t, l, i, u, a, n)
            }
        qf(t, S, b)
        return
      case 'option':
        for (var w in e)
          if (((S = e[w]), e.hasOwnProperty(w) && S != null && !a.hasOwnProperty(w)))
            switch (w) {
              case 'selected':
                t.selected = !1
                break
              default:
                vt(t, l, w, null, a, S)
            }
        for (r in a)
          if (((S = a[r]), (b = e[r]), a.hasOwnProperty(r) && S !== b && (S != null || b != null)))
            switch (r) {
              case 'selected':
                t.selected = S && typeof S != 'function' && typeof S != 'symbol'
                break
              default:
                vt(t, l, r, S, a, b)
            }
        return
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var Z in e)
          (S = e[Z]),
            e.hasOwnProperty(Z) && S != null && !a.hasOwnProperty(Z) && vt(t, l, Z, null, a, S)
        for (g in a)
          if (((S = a[g]), (b = e[g]), a.hasOwnProperty(g) && S !== b && (S != null || b != null)))
            switch (g) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (S != null) throw Error(s(137, l))
                break
              default:
                vt(t, l, g, S, a, b)
            }
        return
      default:
        if (ui(l)) {
          for (var yt in e)
            (S = e[yt]),
              e.hasOwnProperty(yt) &&
                S !== void 0 &&
                !a.hasOwnProperty(yt) &&
                Qc(t, l, yt, void 0, a, S)
          for (p in a)
            (S = a[p]),
              (b = e[p]),
              !a.hasOwnProperty(p) ||
                S === b ||
                (S === void 0 && b === void 0) ||
                Qc(t, l, p, S, a, b)
          return
        }
    }
    for (var v in e)
      (S = e[v]),
        e.hasOwnProperty(v) && S != null && !a.hasOwnProperty(v) && vt(t, l, v, null, a, S)
    for (_ in a)
      (S = a[_]),
        (b = e[_]),
        !a.hasOwnProperty(_) || S === b || (S == null && b == null) || vt(t, l, _, S, a, b)
  }
  var Zc = null,
    Vc = null
  function Rn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument
  }
  function Lr(t) {
    switch (t) {
      case 'http://www.w3.org/2000/svg':
        return 1
      case 'http://www.w3.org/1998/Math/MathML':
        return 2
      default:
        return 0
    }
  }
  function Gr(t, l) {
    if (t === 0)
      switch (l) {
        case 'svg':
          return 1
        case 'math':
          return 2
        default:
          return 0
      }
    return t === 1 && l === 'foreignObject' ? 0 : t
  }
  function Kc(t, l) {
    return (
      t === 'textarea' ||
      t === 'noscript' ||
      typeof l.children == 'string' ||
      typeof l.children == 'number' ||
      typeof l.children == 'bigint' ||
      (typeof l.dangerouslySetInnerHTML == 'object' &&
        l.dangerouslySetInnerHTML !== null &&
        l.dangerouslySetInnerHTML.__html != null)
    )
  }
  var wc = null
  function Mh() {
    var t = window.event
    return t && t.type === 'popstate' ? (t === wc ? !1 : ((wc = t), !0)) : ((wc = null), !1)
  }
  var jr = typeof setTimeout == 'function' ? setTimeout : void 0,
    _h = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Xr = typeof Promise == 'function' ? Promise : void 0,
    zh =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Xr < 'u'
          ? function (t) {
              return Xr.resolve(null).then(t).catch(Dh)
            }
          : jr
  function Dh(t) {
    setTimeout(function () {
      throw t
    })
  }
  function re(t) {
    return t === 'head'
  }
  function Qr(t, l) {
    var e = l,
      a = 0,
      u = 0
    do {
      var n = e.nextSibling
      if ((t.removeChild(e), n && n.nodeType === 8))
        if (((e = n.data), e === '/$')) {
          if (0 < a && 8 > a) {
            e = a
            var i = t.ownerDocument
            if ((e & 1 && du(i.documentElement), e & 2 && du(i.body), e & 4))
              for (e = i.head, du(e), i = e.firstChild; i; ) {
                var c = i.nextSibling,
                  r = i.nodeName
                i[za] ||
                  r === 'SCRIPT' ||
                  r === 'STYLE' ||
                  (r === 'LINK' && i.rel.toLowerCase() === 'stylesheet') ||
                  e.removeChild(i),
                  (i = c)
              }
          }
          if (u === 0) {
            t.removeChild(n), Eu(l)
            return
          }
          u--
        } else e === '$' || e === '$?' || e === '$!' ? u++ : (a = e.charCodeAt(0) - 48)
      else a = 0
      e = n
    } while (e)
    Eu(l)
  }
  function Jc(t) {
    var l = t.firstChild
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l
      switch (((l = l.nextSibling), e.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          Jc(e), In(e)
          continue
        case 'SCRIPT':
        case 'STYLE':
          continue
        case 'LINK':
          if (e.rel.toLowerCase() === 'stylesheet') continue
      }
      t.removeChild(e)
    }
  }
  function Rh(t, l, e, a) {
    for (; t.nodeType === 1; ) {
      var u = e
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break
      } else if (a) {
        if (!t[za])
          switch (l) {
            case 'meta':
              if (!t.hasAttribute('itemprop')) break
              return t
            case 'link':
              if (
                ((n = t.getAttribute('rel')),
                n === 'stylesheet' && t.hasAttribute('data-precedence'))
              )
                break
              if (
                n !== u.rel ||
                t.getAttribute('href') !== (u.href == null || u.href === '' ? null : u.href) ||
                t.getAttribute('crossorigin') !== (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute('title') !== (u.title == null ? null : u.title)
              )
                break
              return t
            case 'style':
              if (t.hasAttribute('data-precedence')) break
              return t
            case 'script':
              if (
                ((n = t.getAttribute('src')),
                (n !== (u.src == null ? null : u.src) ||
                  t.getAttribute('type') !== (u.type == null ? null : u.type) ||
                  t.getAttribute('crossorigin') !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  t.hasAttribute('async') &&
                  !t.hasAttribute('itemprop'))
              )
                break
              return t
            default:
              return t
          }
      } else if (l === 'input' && t.type === 'hidden') {
        var n = u.name == null ? null : '' + u.name
        if (u.type === 'hidden' && t.getAttribute('name') === n) return t
      } else return t
      if (((t = Al(t.nextSibling)), t === null)) break
    }
    return null
  }
  function Uh(t, l, e) {
    if (l === '') return null
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !e) ||
        ((t = Al(t.nextSibling)), t === null)
      )
        return null
    return t
  }
  function kc(t) {
    return t.data === '$!' || (t.data === '$?' && t.ownerDocument.readyState === 'complete')
  }
  function Nh(t, l) {
    var e = t.ownerDocument
    if (t.data !== '$?' || e.readyState === 'complete') l()
    else {
      var a = function () {
        l(), e.removeEventListener('DOMContentLoaded', a)
      }
      e.addEventListener('DOMContentLoaded', a), (t._reactRetry = a)
    }
  }
  function Al(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType
      if (l === 1 || l === 3) break
      if (l === 8) {
        if (((l = t.data), l === '$' || l === '$!' || l === '$?' || l === 'F!' || l === 'F')) break
        if (l === '/$') return null
      }
    }
    return t
  }
  var Wc = null
  function Zr(t) {
    t = t.previousSibling
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data
        if (e === '$' || e === '$!' || e === '$?') {
          if (l === 0) return t
          l--
        } else e === '/$' && l++
      }
      t = t.previousSibling
    }
    return null
  }
  function Vr(t, l, e) {
    switch (((l = Rn(e)), t)) {
      case 'html':
        if (((t = l.documentElement), !t)) throw Error(s(452))
        return t
      case 'head':
        if (((t = l.head), !t)) throw Error(s(453))
        return t
      case 'body':
        if (((t = l.body), !t)) throw Error(s(454))
        return t
      default:
        throw Error(s(451))
    }
  }
  function du(t) {
    for (var l = t.attributes; l.length; ) t.removeAttributeNode(l[0])
    In(t)
  }
  var bl = new Map(),
    Kr = new Set()
  function Un(t) {
    return typeof t.getRootNode == 'function'
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument
  }
  var Vl = q.d
  q.d = { f: Ch, r: Hh, D: xh, C: qh, L: Bh, m: Yh, X: Gh, S: Lh, M: jh }
  function Ch() {
    var t = Vl.f(),
      l = pn()
    return t || l
  }
  function Hh(t) {
    var l = je(t)
    l !== null && l.tag === 5 && l.type === 'form' ? oo(l) : Vl.r(t)
  }
  var Ea = typeof document > 'u' ? null : document
  function wr(t, l, e) {
    var a = Ea
    if (a && typeof l == 'string' && l) {
      var u = dl(l)
      ;(u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof e == 'string' && (u += '[crossorigin="' + e + '"]'),
        Kr.has(u) ||
          (Kr.add(u),
          (t = { rel: t, crossOrigin: e, href: l }),
          a.querySelector(u) === null &&
            ((l = a.createElement('link')), Zt(l, 'link', t), Yt(l), a.head.appendChild(l)))
    }
  }
  function xh(t) {
    Vl.D(t), wr('dns-prefetch', t, null)
  }
  function qh(t, l) {
    Vl.C(t, l), wr('preconnect', t, l)
  }
  function Bh(t, l, e) {
    Vl.L(t, l, e)
    var a = Ea
    if (a && t && l) {
      var u = 'link[rel="preload"][as="' + dl(l) + '"]'
      l === 'image' && e && e.imageSrcSet
        ? ((u += '[imagesrcset="' + dl(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == 'string' && (u += '[imagesizes="' + dl(e.imageSizes) + '"]'))
        : (u += '[href="' + dl(t) + '"]')
      var n = u
      switch (l) {
        case 'style':
          n = pa(t)
          break
        case 'script':
          n = Aa(t)
      }
      bl.has(n) ||
        ((t = D(
          { rel: 'preload', href: l === 'image' && e && e.imageSrcSet ? void 0 : t, as: l },
          e
        )),
        bl.set(n, t),
        a.querySelector(u) !== null ||
          (l === 'style' && a.querySelector(hu(n))) ||
          (l === 'script' && a.querySelector(mu(n))) ||
          ((l = a.createElement('link')), Zt(l, 'link', t), Yt(l), a.head.appendChild(l)))
    }
  }
  function Yh(t, l) {
    Vl.m(t, l)
    var e = Ea
    if (e && t) {
      var a = l && typeof l.as == 'string' ? l.as : 'script',
        u = 'link[rel="modulepreload"][as="' + dl(a) + '"][href="' + dl(t) + '"]',
        n = u
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          n = Aa(t)
      }
      if (
        !bl.has(n) &&
        ((t = D({ rel: 'modulepreload', href: t }, l)), bl.set(n, t), e.querySelector(u) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (e.querySelector(mu(n))) return
        }
        ;(a = e.createElement('link')), Zt(a, 'link', t), Yt(a), e.head.appendChild(a)
      }
    }
  }
  function Lh(t, l, e) {
    Vl.S(t, l, e)
    var a = Ea
    if (a && t) {
      var u = Xe(a).hoistableStyles,
        n = pa(t)
      l = l || 'default'
      var i = u.get(n)
      if (!i) {
        var c = { loading: 0, preload: null }
        if ((i = a.querySelector(hu(n)))) c.loading = 5
        else {
          ;(t = D({ rel: 'stylesheet', href: t, 'data-precedence': l }, e)),
            (e = bl.get(n)) && $c(t, e)
          var r = (i = a.createElement('link'))
          Yt(r),
            Zt(r, 'link', t),
            (r._p = new Promise(function (g, p) {
              ;(r.onload = g), (r.onerror = p)
            })),
            r.addEventListener('load', function () {
              c.loading |= 1
            }),
            r.addEventListener('error', function () {
              c.loading |= 2
            }),
            (c.loading |= 4),
            Nn(i, l, a)
        }
        ;(i = { type: 'stylesheet', instance: i, count: 1, state: c }), u.set(n, i)
      }
    }
  }
  function Gh(t, l) {
    Vl.X(t, l)
    var e = Ea
    if (e && t) {
      var a = Xe(e).hoistableScripts,
        u = Aa(t),
        n = a.get(u)
      n ||
        ((n = e.querySelector(mu(u))),
        n ||
          ((t = D({ src: t, async: !0 }, l)),
          (l = bl.get(u)) && Fc(t, l),
          (n = e.createElement('script')),
          Yt(n),
          Zt(n, 'link', t),
          e.head.appendChild(n)),
        (n = { type: 'script', instance: n, count: 1, state: null }),
        a.set(u, n))
    }
  }
  function jh(t, l) {
    Vl.M(t, l)
    var e = Ea
    if (e && t) {
      var a = Xe(e).hoistableScripts,
        u = Aa(t),
        n = a.get(u)
      n ||
        ((n = e.querySelector(mu(u))),
        n ||
          ((t = D({ src: t, async: !0, type: 'module' }, l)),
          (l = bl.get(u)) && Fc(t, l),
          (n = e.createElement('script')),
          Yt(n),
          Zt(n, 'link', t),
          e.head.appendChild(n)),
        (n = { type: 'script', instance: n, count: 1, state: null }),
        a.set(u, n))
    }
  }
  function Jr(t, l, e, a) {
    var u = (u = W.current) ? Un(u) : null
    if (!u) throw Error(s(446))
    switch (t) {
      case 'meta':
      case 'title':
        return null
      case 'style':
        return typeof e.precedence == 'string' && typeof e.href == 'string'
          ? ((l = pa(e.href)),
            (e = Xe(u).hoistableStyles),
            (a = e.get(l)),
            a || ((a = { type: 'style', instance: null, count: 0, state: null }), e.set(l, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null }
      case 'link':
        if (
          e.rel === 'stylesheet' &&
          typeof e.href == 'string' &&
          typeof e.precedence == 'string'
        ) {
          t = pa(e.href)
          var n = Xe(u).hoistableStyles,
            i = n.get(t)
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null }
              }),
              n.set(t, i),
              (n = u.querySelector(hu(t))) && !n._p && ((i.instance = n), (i.state.loading = 5)),
              bl.has(t) ||
                ((e = {
                  rel: 'preload',
                  as: 'style',
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy
                }),
                bl.set(t, e),
                n || Xh(u, t, e, i.state))),
            l && a === null)
          )
            throw Error(s(528, ''))
          return i
        }
        if (l && a !== null) throw Error(s(529, ''))
        return null
      case 'script':
        return (
          (l = e.async),
          (e = e.src),
          typeof e == 'string' && l && typeof l != 'function' && typeof l != 'symbol'
            ? ((l = Aa(e)),
              (e = Xe(u).hoistableScripts),
              (a = e.get(l)),
              a || ((a = { type: 'script', instance: null, count: 0, state: null }), e.set(l, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        )
      default:
        throw Error(s(444, t))
    }
  }
  function pa(t) {
    return 'href="' + dl(t) + '"'
  }
  function hu(t) {
    return 'link[rel="stylesheet"][' + t + ']'
  }
  function kr(t) {
    return D({}, t, { 'data-precedence': t.precedence, precedence: null })
  }
  function Xh(t, l, e, a) {
    t.querySelector('link[rel="preload"][as="style"][' + l + ']')
      ? (a.loading = 1)
      : ((l = t.createElement('link')),
        (a.preload = l),
        l.addEventListener('load', function () {
          return (a.loading |= 1)
        }),
        l.addEventListener('error', function () {
          return (a.loading |= 2)
        }),
        Zt(l, 'link', e),
        Yt(l),
        t.head.appendChild(l))
  }
  function Aa(t) {
    return '[src="' + dl(t) + '"]'
  }
  function mu(t) {
    return 'script[async]' + t
  }
  function Wr(t, l, e) {
    if ((l.count++, l.instance === null))
      switch (l.type) {
        case 'style':
          var a = t.querySelector('style[data-href~="' + dl(e.href) + '"]')
          if (a) return (l.instance = a), Yt(a), a
          var u = D({}, e, {
            'data-href': e.href,
            'data-precedence': e.precedence,
            href: null,
            precedence: null
          })
          return (
            (a = (t.ownerDocument || t).createElement('style')),
            Yt(a),
            Zt(a, 'style', u),
            Nn(a, e.precedence, t),
            (l.instance = a)
          )
        case 'stylesheet':
          u = pa(e.href)
          var n = t.querySelector(hu(u))
          if (n) return (l.state.loading |= 4), (l.instance = n), Yt(n), n
          ;(a = kr(e)),
            (u = bl.get(u)) && $c(a, u),
            (n = (t.ownerDocument || t).createElement('link')),
            Yt(n)
          var i = n
          return (
            (i._p = new Promise(function (c, r) {
              ;(i.onload = c), (i.onerror = r)
            })),
            Zt(n, 'link', a),
            (l.state.loading |= 4),
            Nn(n, e.precedence, t),
            (l.instance = n)
          )
        case 'script':
          return (
            (n = Aa(e.src)),
            (u = t.querySelector(mu(n)))
              ? ((l.instance = u), Yt(u), u)
              : ((a = e),
                (u = bl.get(n)) && ((a = D({}, e)), Fc(a, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement('script')),
                Yt(u),
                Zt(u, 'link', a),
                t.head.appendChild(u),
                (l.instance = u))
          )
        case 'void':
          return null
        default:
          throw Error(s(443, l.type))
      }
    else
      l.type === 'stylesheet' &&
        (l.state.loading & 4) === 0 &&
        ((a = l.instance), (l.state.loading |= 4), Nn(a, e.precedence, t))
    return l.instance
  }
  function Nn(t, l, e) {
    for (
      var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        i = 0;
      i < a.length;
      i++
    ) {
      var c = a[i]
      if (c.dataset.precedence === l) n = c
      else if (n !== u) break
    }
    n
      ? n.parentNode.insertBefore(t, n.nextSibling)
      : ((l = e.nodeType === 9 ? e.head : e), l.insertBefore(t, l.firstChild))
  }
  function $c(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.title == null && (t.title = l.title)
  }
  function Fc(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.integrity == null && (t.integrity = l.integrity)
  }
  var Cn = null
  function $r(t, l, e) {
    if (Cn === null) {
      var a = new Map(),
        u = (Cn = new Map())
      u.set(e, a)
    } else (u = Cn), (a = u.get(e)), a || ((a = new Map()), u.set(e, a))
    if (a.has(t)) return a
    for (a.set(t, null), e = e.getElementsByTagName(t), u = 0; u < e.length; u++) {
      var n = e[u]
      if (
        !(n[za] || n[wt] || (t === 'link' && n.getAttribute('rel') === 'stylesheet')) &&
        n.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var i = n.getAttribute(l) || ''
        i = t + i
        var c = a.get(i)
        c ? c.push(n) : a.set(i, [n])
      }
    }
    return a
  }
  function Fr(t, l, e) {
    ;(t = t.ownerDocument || t),
      t.head.insertBefore(e, l === 'title' ? t.querySelector('head > title') : null)
  }
  function Qh(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1
    switch (t) {
      case 'meta':
      case 'title':
        return !0
      case 'style':
        if (typeof l.precedence != 'string' || typeof l.href != 'string' || l.href === '') break
        return !0
      case 'link':
        if (
          typeof l.rel != 'string' ||
          typeof l.href != 'string' ||
          l.href === '' ||
          l.onLoad ||
          l.onError
        )
          break
        switch (l.rel) {
          case 'stylesheet':
            return (t = l.disabled), typeof l.precedence == 'string' && t == null
          default:
            return !0
        }
      case 'script':
        if (
          l.async &&
          typeof l.async != 'function' &&
          typeof l.async != 'symbol' &&
          !l.onLoad &&
          !l.onError &&
          l.src &&
          typeof l.src == 'string'
        )
          return !0
    }
    return !1
  }
  function Ir(t) {
    return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0)
  }
  var vu = null
  function Zh() {}
  function Vh(t, l, e) {
    if (vu === null) throw Error(s(475))
    var a = vu
    if (
      l.type === 'stylesheet' &&
      (typeof e.media != 'string' || matchMedia(e.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var u = pa(e.href),
          n = t.querySelector(hu(u))
        if (n) {
          ;(t = n._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (a.count++, (a = Hn.bind(a)), t.then(a, a)),
            (l.state.loading |= 4),
            (l.instance = n),
            Yt(n)
          return
        }
        ;(n = t.ownerDocument || t),
          (e = kr(e)),
          (u = bl.get(u)) && $c(e, u),
          (n = n.createElement('link')),
          Yt(n)
        var i = n
        ;(i._p = new Promise(function (c, r) {
          ;(i.onload = c), (i.onerror = r)
        })),
          Zt(n, 'link', e),
          (l.instance = n)
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (a.count++,
          (l = Hn.bind(a)),
          t.addEventListener('load', l),
          t.addEventListener('error', l))
    }
  }
  function Kh() {
    if (vu === null) throw Error(s(475))
    var t = vu
    return (
      t.stylesheets && t.count === 0 && Ic(t, t.stylesheets),
      0 < t.count
        ? function (l) {
            var e = setTimeout(function () {
              if ((t.stylesheets && Ic(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend
                ;(t.unsuspend = null), a()
              }
            }, 6e4)
            return (
              (t.unsuspend = l),
              function () {
                ;(t.unsuspend = null), clearTimeout(e)
              }
            )
          }
        : null
    )
  }
  function Hn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Ic(this, this.stylesheets)
      else if (this.unsuspend) {
        var t = this.unsuspend
        ;(this.unsuspend = null), t()
      }
    }
  }
  var xn = null
  function Ic(t, l) {
    ;(t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++, (xn = new Map()), l.forEach(wh, t), (xn = null), Hn.call(t))
  }
  function wh(t, l) {
    if (!(l.state.loading & 4)) {
      var e = xn.get(t)
      if (e) var a = e.get(null)
      else {
        ;(e = new Map()), xn.set(t, e)
        for (
          var u = t.querySelectorAll('link[data-precedence],style[data-precedence]'), n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n]
          ;(i.nodeName === 'LINK' || i.getAttribute('media') !== 'not all') &&
            (e.set(i.dataset.precedence, i), (a = i))
        }
        a && e.set(null, a)
      }
      ;(u = l.instance),
        (i = u.getAttribute('data-precedence')),
        (n = e.get(i) || a),
        n === a && e.set(null, u),
        e.set(i, u),
        this.count++,
        (a = Hn.bind(this)),
        u.addEventListener('load', a),
        u.addEventListener('error', a),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(u, t.firstChild)),
        (l.state.loading |= 4)
    }
  }
  var yu = {
    $$typeof: tt,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  }
  function Jh(t, l, e, a, u, n, i, c) {
    ;(this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = kn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = kn(0)),
      (this.hiddenUpdates = kn(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = c),
      (this.incompleteTransitions = new Map())
  }
  function Pr(t, l, e, a, u, n, i, c, r, g, p, _) {
    return (
      (t = new Jh(t, l, e, i, c, r, g, _)),
      (l = 1),
      n === !0 && (l |= 24),
      (n = nl(3, null, null, l)),
      (t.current = n),
      (n.stateNode = t),
      (l = Hi()),
      l.refCount++,
      (t.pooledCache = l),
      l.refCount++,
      (n.memoizedState = { element: a, isDehydrated: e, cache: l }),
      Yi(n),
      t
    )
  }
  function td(t) {
    return t ? ((t = Pe), t) : Pe
  }
  function ld(t, l, e, a, u, n) {
    ;(u = td(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = Il(l)),
      (a.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (e = Pl(t, a, l)),
      e !== null && (ol(e, t, l), wa(e, t, l))
  }
  function ed(t, l) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var e = t.retryLane
      t.retryLane = e !== 0 && e < l ? e : l
    }
  }
  function Pc(t, l) {
    ed(t, l), (t = t.alternate) && ed(t, l)
  }
  function ad(t) {
    if (t.tag === 13) {
      var l = Ie(t, 67108864)
      l !== null && ol(l, t, 67108864), Pc(t, 67108864)
    }
  }
  var qn = !0
  function kh(t, l, e, a) {
    var u = T.T
    T.T = null
    var n = q.p
    try {
      ;(q.p = 2), tf(t, l, e, a)
    } finally {
      ;(q.p = n), (T.T = u)
    }
  }
  function Wh(t, l, e, a) {
    var u = T.T
    T.T = null
    var n = q.p
    try {
      ;(q.p = 8), tf(t, l, e, a)
    } finally {
      ;(q.p = n), (T.T = u)
    }
  }
  function tf(t, l, e, a) {
    if (qn) {
      var u = lf(a)
      if (u === null) Xc(t, l, a, Bn, e), nd(t, a)
      else if (Fh(u, t, l, e, a)) a.stopPropagation()
      else if ((nd(t, a), l & 4 && -1 < $h.indexOf(t))) {
        for (; u !== null; ) {
          var n = je(u)
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = be(n.pendingLanes)
                  if (i !== 0) {
                    var c = n
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var r = 1 << (31 - al(i))
                      ;(c.entanglements[1] |= r), (i &= ~r)
                    }
                    Dl(n), (dt & 6) === 0 && ((bn = Tl() + 500), su(0))
                  }
                }
                break
              case 13:
                ;(c = Ie(n, 2)), c !== null && ol(c, n, 2), pn(), Pc(n, 2)
            }
          if (((n = lf(a)), n === null && Xc(t, l, a, Bn, e), n === u)) break
          u = n
        }
        u !== null && a.stopPropagation()
      } else Xc(t, l, a, null, e)
    }
  }
  function lf(t) {
    return (t = ii(t)), ef(t)
  }
  var Bn = null
  function ef(t) {
    if (((Bn = null), (t = Ge(t)), t !== null)) {
      var l = O(t)
      if (l === null) t = null
      else {
        var e = l.tag
        if (e === 13) {
          if (((t = U(l)), t !== null)) return t
          t = null
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null
          t = null
        } else l !== t && (t = null)
      }
    }
    return (Bn = t), null
  }
  function ud(t) {
    switch (t) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8
      case 'message':
        switch (qd()) {
          case gf:
            return 2
          case Sf:
            return 8
          case zu:
          case Bd:
            return 32
          case bf:
            return 268435456
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var af = !1,
    de = null,
    he = null,
    me = null,
    gu = new Map(),
    Su = new Map(),
    ve = [],
    $h =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      )
  function nd(t, l) {
    switch (t) {
      case 'focusin':
      case 'focusout':
        de = null
        break
      case 'dragenter':
      case 'dragleave':
        he = null
        break
      case 'mouseover':
      case 'mouseout':
        me = null
        break
      case 'pointerover':
      case 'pointerout':
        gu.delete(l.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        Su.delete(l.pointerId)
    }
  }
  function bu(t, l, e, a, u, n) {
    return t === null || t.nativeEvent !== n
      ? ((t = {
          blockedOn: l,
          domEventName: e,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [u]
        }),
        l !== null && ((l = je(l)), l !== null && ad(l)),
        t)
      : ((t.eventSystemFlags |= a),
        (l = t.targetContainers),
        u !== null && l.indexOf(u) === -1 && l.push(u),
        t)
  }
  function Fh(t, l, e, a, u) {
    switch (l) {
      case 'focusin':
        return (de = bu(de, t, l, e, a, u)), !0
      case 'dragenter':
        return (he = bu(he, t, l, e, a, u)), !0
      case 'mouseover':
        return (me = bu(me, t, l, e, a, u)), !0
      case 'pointerover':
        var n = u.pointerId
        return gu.set(n, bu(gu.get(n) || null, t, l, e, a, u)), !0
      case 'gotpointercapture':
        return (n = u.pointerId), Su.set(n, bu(Su.get(n) || null, t, l, e, a, u)), !0
    }
    return !1
  }
  function id(t) {
    var l = Ge(t.target)
    if (l !== null) {
      var e = O(l)
      if (e !== null) {
        if (((l = e.tag), l === 13)) {
          if (((l = U(e)), l !== null)) {
            ;(t.blockedOn = l),
              Vd(t.priority, function () {
                if (e.tag === 13) {
                  var a = sl()
                  a = Wn(a)
                  var u = Ie(e, a)
                  u !== null && ol(u, e, a), Pc(e, a)
                }
              })
            return
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null
          return
        }
      }
    }
    t.blockedOn = null
  }
  function Yn(t) {
    if (t.blockedOn !== null) return !1
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = lf(t.nativeEvent)
      if (e === null) {
        e = t.nativeEvent
        var a = new e.constructor(e.type, e)
        ;(ni = a), e.target.dispatchEvent(a), (ni = null)
      } else return (l = je(e)), l !== null && ad(l), (t.blockedOn = e), !1
      l.shift()
    }
    return !0
  }
  function cd(t, l, e) {
    Yn(t) && e.delete(l)
  }
  function Ih() {
    ;(af = !1),
      de !== null && Yn(de) && (de = null),
      he !== null && Yn(he) && (he = null),
      me !== null && Yn(me) && (me = null),
      gu.forEach(cd),
      Su.forEach(cd)
  }
  function Ln(t, l) {
    t.blockedOn === l &&
      ((t.blockedOn = null),
      af || ((af = !0), f.unstable_scheduleCallback(f.unstable_NormalPriority, Ih)))
  }
  var Gn = null
  function fd(t) {
    Gn !== t &&
      ((Gn = t),
      f.unstable_scheduleCallback(f.unstable_NormalPriority, function () {
        Gn === t && (Gn = null)
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l],
            a = t[l + 1],
            u = t[l + 2]
          if (typeof a != 'function') {
            if (ef(a || e) === null) continue
            break
          }
          var n = je(e)
          n !== null &&
            (t.splice(l, 3),
            (l -= 3),
            ec(n, { pending: !0, data: u, method: e.method, action: a }, a, u))
        }
      }))
  }
  function Eu(t) {
    function l(r) {
      return Ln(r, t)
    }
    de !== null && Ln(de, t),
      he !== null && Ln(he, t),
      me !== null && Ln(me, t),
      gu.forEach(l),
      Su.forEach(l)
    for (var e = 0; e < ve.length; e++) {
      var a = ve[e]
      a.blockedOn === t && (a.blockedOn = null)
    }
    for (; 0 < ve.length && ((e = ve[0]), e.blockedOn === null); )
      id(e), e.blockedOn === null && ve.shift()
    if (((e = (t.ownerDocument || t).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var u = e[a],
          n = e[a + 1],
          i = u[$t] || null
        if (typeof n == 'function') i || fd(e)
        else if (i) {
          var c = null
          if (n && n.hasAttribute('formAction')) {
            if (((u = n), (i = n[$t] || null))) c = i.formAction
            else if (ef(u) !== null) continue
          } else c = i.action
          typeof c == 'function' ? (e[a + 1] = c) : (e.splice(a, 3), (a -= 3)), fd(e)
        }
      }
  }
  function uf(t) {
    this._internalRoot = t
  }
  ;(jn.prototype.render = uf.prototype.render =
    function (t) {
      var l = this._internalRoot
      if (l === null) throw Error(s(409))
      var e = l.current,
        a = sl()
      ld(e, a, t, l, null, null)
    }),
    (jn.prototype.unmount = uf.prototype.unmount =
      function () {
        var t = this._internalRoot
        if (t !== null) {
          this._internalRoot = null
          var l = t.containerInfo
          ld(t.current, 2, null, t, null, null), pn(), (l[Le] = null)
        }
      })
  function jn(t) {
    this._internalRoot = t
  }
  jn.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var l = Of()
      t = { blockedOn: null, target: t, priority: l }
      for (var e = 0; e < ve.length && l !== 0 && l < ve[e].priority; e++);
      ve.splice(e, 0, t), e === 0 && id(t)
    }
  }
  var sd = o.version
  if (sd !== '19.1.0') throw Error(s(527, sd, '19.1.0'))
  q.findDOMNode = function (t) {
    var l = t._reactInternals
    if (l === void 0)
      throw typeof t.render == 'function'
        ? Error(s(188))
        : ((t = Object.keys(t).join(',')), Error(s(268, t)))
    return (t = R(l)), (t = t !== null ? E(t) : null), (t = t === null ? null : t.stateNode), t
  }
  var Ph = {
    bundleType: 0,
    version: '19.1.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: T,
    reconcilerVersion: '19.1.0'
  }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Xn = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!Xn.isDisabled && Xn.supportsFiber)
      try {
        ;(Oa = Xn.inject(Ph)), (el = Xn)
      } catch {}
  }
  return (
    (Au.createRoot = function (t, l) {
      if (!A(t)) throw Error(s(299))
      var e = !1,
        a = '',
        u = Mo,
        n = _o,
        i = zo,
        c = null
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (e = !0),
          l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (n = l.onCaughtError),
          l.onRecoverableError !== void 0 && (i = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 && (c = l.unstable_transitionCallbacks)),
        (l = Pr(t, 1, !1, null, null, e, a, u, n, i, c, null)),
        (t[Le] = l.current),
        jc(t),
        new uf(l)
      )
    }),
    (Au.hydrateRoot = function (t, l, e) {
      if (!A(t)) throw Error(s(299))
      var a = !1,
        u = '',
        n = Mo,
        i = _o,
        c = zo,
        r = null,
        g = null
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 && (r = e.unstable_transitionCallbacks),
          e.formState !== void 0 && (g = e.formState)),
        (l = Pr(t, 1, !0, l, e ?? null, a, u, n, i, c, r, g)),
        (l.context = td(null)),
        (e = l.current),
        (a = sl()),
        (a = Wn(a)),
        (u = Il(a)),
        (u.callback = null),
        Pl(e, u, a),
        (e = a),
        (l.current.lanes = e),
        _a(l, e),
        Dl(l),
        (t[Le] = l.current),
        jc(t),
        new jn(l)
      )
    }),
    (Au.version = '19.1.0'),
    Au
  )
}
var bd
function fm() {
  if (bd) return ff.exports
  bd = 1
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
      } catch (o) {
        console.error(o)
      }
  }
  return f(), (ff.exports = cm()), ff.exports
}
var sm = fm(),
  hf = _d(),
  df,
  Ed
function om() {
  return (
    Ed ||
      ((Ed = 1),
      (df = function f(o, m) {
        if (o === m) return !0
        if (o && m && typeof o == 'object' && typeof m == 'object') {
          if (o.constructor !== m.constructor) return !1
          var s, A, O
          if (Array.isArray(o)) {
            if (((s = o.length), s != m.length)) return !1
            for (A = s; A-- !== 0; ) if (!f(o[A], m[A])) return !1
            return !0
          }
          if (o.constructor === RegExp) return o.source === m.source && o.flags === m.flags
          if (o.valueOf !== Object.prototype.valueOf) return o.valueOf() === m.valueOf()
          if (o.toString !== Object.prototype.toString) return o.toString() === m.toString()
          if (((O = Object.keys(o)), (s = O.length), s !== Object.keys(m).length)) return !1
          for (A = s; A-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(m, O[A])) return !1
          for (A = s; A-- !== 0; ) {
            var U = O[A]
            if (!f(o[U], m[U])) return !1
          }
          return !0
        }
        return o !== o && m !== m
      })),
    df
  )
}
var rm = om()
const dm = Md(rm)
function Rl() {
  return (
    (Rl = Object.assign
      ? Object.assign.bind()
      : function (f) {
          for (var o = 1; o < arguments.length; o++) {
            var m = arguments[o]
            for (var s in m) ({}).hasOwnProperty.call(m, s) && (f[s] = m[s])
          }
          return f
        }),
    Rl.apply(null, arguments)
  )
}
function Ye(f, o) {
  if (f == null) return {}
  var m = {}
  for (var s in f)
    if ({}.hasOwnProperty.call(f, s)) {
      if (o.indexOf(s) !== -1) continue
      m[s] = f[s]
    }
  return m
}
function hm(f, o) {
  if (typeof f != 'object' || !f) return f
  var m = f[Symbol.toPrimitive]
  if (m !== void 0) {
    var s = m.call(f, o)
    if (typeof s != 'object') return s
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return String(f)
}
function mm(f) {
  var o = hm(f, 'string')
  return typeof o == 'symbol' ? o : o + ''
}
const Kl = {
    NOT_LOADED: 'NOT_LOADED',
    LOADING: 'LOADING',
    LOADED: 'LOADED',
    FAILED: 'FAILED',
    AUTH_FAILURE: 'AUTH_FAILURE'
  },
  vm = 'https://maps.googleapis.com/maps/api/js'
class Tu {
  static async load(o, m) {
    var s
    const A = o.libraries ? o.libraries.split(',') : [],
      O = this.serializeParams(o)
    this.listeners.push(m),
      (s = window.google) != null && (s = s.maps) != null && s.importLibrary
        ? (this.serializedApiParams || (this.loadingStatus = Kl.LOADED),
          this.notifyLoadingStatusListeners())
        : ((this.serializedApiParams = O), this.initImportLibrary(o)),
      this.serializedApiParams &&
        this.serializedApiParams !== O &&
        console.warn(
          '[google-maps-api-loader] The maps API has already been loaded with different parameters and will not be loaded again. Refresh the page for new values to have effect.'
        )
    const U = ['maps', ...A]
    await Promise.all(U.map((N) => google.maps.importLibrary(N)))
  }
  static serializeParams(o) {
    return [o.v, o.key, o.language, o.region, o.authReferrerPolicy, o.solutionChannel].join('/')
  }
  static initImportLibrary(o) {
    if (
      (window.google || (window.google = {}),
      window.google.maps || (window.google.maps = {}),
      window.google.maps.importLibrary)
    ) {
      console.error('[google-maps-api-loader-internal]: initImportLibrary must only be called once')
      return
    }
    let m = null
    const s = () =>
      m ||
      ((m = new Promise((A, O) => {
        var U
        const N = document.createElement('script'),
          R = new URLSearchParams()
        for (const [E, D] of Object.entries(o)) {
          const X = E.replace(/[A-Z]/g, (Y) => '_' + Y[0].toLowerCase())
          R.set(X, String(D))
        }
        R.set('loading', 'async'),
          R.set('callback', '__googleMapsCallback__'),
          (N.async = !0),
          (N.src = vm + '?' + R.toString()),
          (N.nonce =
            ((U = document.querySelector('script[nonce]')) == null ? void 0 : U.nonce) || ''),
          (N.onerror = () => {
            ;(this.loadingStatus = Kl.FAILED),
              this.notifyLoadingStatusListeners(),
              O(new Error('The Google Maps JavaScript API could not load.'))
          }),
          (window.__googleMapsCallback__ = () => {
            ;(this.loadingStatus = Kl.LOADED), this.notifyLoadingStatusListeners(), A()
          }),
          (window.gm_authFailure = () => {
            ;(this.loadingStatus = Kl.AUTH_FAILURE), this.notifyLoadingStatusListeners()
          }),
          (this.loadingStatus = Kl.LOADING),
          this.notifyLoadingStatusListeners(),
          document.head.append(N)
      })),
      m)
    google.maps.importLibrary = (A) => s().then(() => google.maps.importLibrary(A))
  }
  static notifyLoadingStatusListeners() {
    for (const o of this.listeners) o(this.loadingStatus)
  }
}
Tu.loadingStatus = Kl.NOT_LOADED
Tu.serializedApiParams = void 0
Tu.listeners = []
const ym = ['onLoad', 'onError', 'apiKey', 'version', 'libraries'],
  gm = ['children'],
  Sm = 'GMP_visgl_rgmlibrary_v1_default',
  Ou = Dt.createContext(null)
function bm() {
  const [f, o] = C.useState({})
  return {
    mapInstances: f,
    addMapInstance: (O, U = 'default') => {
      o((N) => Rl({}, N, { [U]: O }))
    },
    removeMapInstance: (O = 'default') => {
      o((U) => Ye(U, [O].map(mm)))
    },
    clearMapInstances: () => {
      o({})
    }
  }
}
function Em(f) {
  const { onLoad: o, onError: m, apiKey: s, version: A, libraries: O = [] } = f,
    U = Ye(f, ym),
    [N, R] = C.useState(Tu.loadingStatus),
    [E, D] = C.useReducer((H, k) => (H[k.name] ? H : Rl({}, H, { [k.name]: k.value })), {}),
    X = C.useMemo(() => (O == null ? void 0 : O.join(',')), [O]),
    Y = C.useMemo(() => JSON.stringify(Rl({ apiKey: s, version: A }, U)), [s, A, U]),
    J = C.useCallback(
      async (H) => {
        var k
        if (E[H]) return E[H]
        if (!((k = google) != null && (k = k.maps) != null && k.importLibrary))
          throw new Error(
            '[api-provider-internal] importLibrary was called before google.maps.importLibrary was defined.'
          )
        const $ = await window.google.maps.importLibrary(H)
        return D({ name: H, value: $ }), $
      },
      [E]
    )
  return (
    C.useEffect(() => {
      ;(async () => {
        try {
          const H = Rl({ key: s }, U)
          A && (H.v = A),
            (X == null ? void 0 : X.length) > 0 && (H.libraries = X),
            (H.channel === void 0 || H.channel < 0 || H.channel > 999) && delete H.channel,
            H.solutionChannel === void 0
              ? (H.solutionChannel = Sm)
              : H.solutionChannel === '' && delete H.solutionChannel,
            await Tu.load(H, (k) => R(k))
          for (const k of ['core', 'maps', ...O]) await J(k)
          o && o()
        } catch (H) {
          m ? m(H) : console.error('<ApiProvider> failed to load the Google Maps JavaScript API', H)
        }
      })()
    }, [s, X, Y]),
    { status: N, loadedLibraries: E, importLibrary: J }
  )
}
const pm = (f) => {
  const { children: o } = f,
    m = Ye(f, gm),
    { mapInstances: s, addMapInstance: A, removeMapInstance: O, clearMapInstances: U } = bm(),
    { status: N, loadedLibraries: R, importLibrary: E } = Em(m),
    D = C.useMemo(
      () => ({
        mapInstances: s,
        addMapInstance: A,
        removeMapInstance: O,
        clearMapInstances: U,
        status: N,
        loadedLibraries: R,
        importLibrary: E
      }),
      [s, A, O, U, N, R, E]
    )
  return Dt.createElement(Ou.Provider, { value: D }, o)
}
function Am(f, o) {
  for (const m of _m) {
    const s = o[m],
      A = zd[m]
    C.useEffect(() => {
      if (!f || !s) return
      const O = google.maps.event.addListener(f, A, (U) => {
        s(Tm(A, f, U))
      })
      return () => O.remove()
    }, [f, A, s])
  }
}
function Tm(f, o, m) {
  const s = { type: f, map: o, detail: {}, stoppable: !1, stop: () => {} }
  if (Om.includes(f)) {
    const O = s,
      U = o.getCenter(),
      N = o.getZoom(),
      R = o.getHeading() || 0,
      E = o.getTilt() || 0,
      D = o.getBounds()
    return (
      (!U || !D || !Number.isFinite(N)) &&
        console.warn(
          '[createEvent] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new'
        ),
      (O.detail = {
        center: (U == null ? void 0 : U.toJSON()) || { lat: 0, lng: 0 },
        zoom: N || 0,
        heading: R,
        tilt: E,
        bounds: (D == null ? void 0 : D.toJSON()) || {
          north: 90,
          east: 180,
          south: -90,
          west: -180
        }
      }),
      O
    )
  } else if (Mm.includes(f)) {
    var A
    if (!m) throw new Error('[createEvent] mouse events must provide a srcEvent')
    const O = s
    return (
      (O.domEvent = m.domEvent),
      (O.stoppable = !0),
      (O.stop = () => m.stop()),
      (O.detail = {
        latLng: ((A = m.latLng) == null ? void 0 : A.toJSON()) || null,
        placeId: m.placeId
      }),
      O
    )
  }
  return s
}
const zd = {
    onBoundsChanged: 'bounds_changed',
    onCenterChanged: 'center_changed',
    onClick: 'click',
    onContextmenu: 'contextmenu',
    onDblclick: 'dblclick',
    onDrag: 'drag',
    onDragend: 'dragend',
    onDragstart: 'dragstart',
    onHeadingChanged: 'heading_changed',
    onIdle: 'idle',
    onIsFractionalZoomEnabledChanged: 'isfractionalzoomenabled_changed',
    onMapCapabilitiesChanged: 'mapcapabilities_changed',
    onMapTypeIdChanged: 'maptypeid_changed',
    onMousemove: 'mousemove',
    onMouseout: 'mouseout',
    onMouseover: 'mouseover',
    onProjectionChanged: 'projection_changed',
    onRenderingTypeChanged: 'renderingtype_changed',
    onTilesLoaded: 'tilesloaded',
    onTiltChanged: 'tilt_changed',
    onZoomChanged: 'zoom_changed',
    onCameraChanged: 'bounds_changed'
  },
  Om = ['bounds_changed', 'center_changed', 'heading_changed', 'tilt_changed', 'zoom_changed'],
  Mm = ['click', 'contextmenu', 'dblclick', 'mousemove', 'mouseout', 'mouseover'],
  _m = Object.keys(zd)
function mf(f, o) {
  const m = C.useRef(void 0)
  ;(!m.current || !dm(o, m.current)) && (m.current = o), C.useEffect(f, m.current)
}
const zm = new Set([
  'backgroundColor',
  'clickableIcons',
  'controlSize',
  'disableDefaultUI',
  'disableDoubleClickZoom',
  'draggable',
  'draggableCursor',
  'draggingCursor',
  'fullscreenControl',
  'fullscreenControlOptions',
  'gestureHandling',
  'headingInteractionEnabled',
  'isFractionalZoomEnabled',
  'keyboardShortcuts',
  'mapTypeControl',
  'mapTypeControlOptions',
  'mapTypeId',
  'maxZoom',
  'minZoom',
  'noClear',
  'panControl',
  'panControlOptions',
  'restriction',
  'rotateControl',
  'rotateControlOptions',
  'scaleControl',
  'scaleControlOptions',
  'scrollwheel',
  'streetView',
  'streetViewControl',
  'streetViewControlOptions',
  'styles',
  'tiltInteractionEnabled',
  'zoomControl',
  'zoomControlOptions'
])
function Dm(f, o) {
  const m = {},
    s = Object.keys(o)
  for (const A of s) zm.has(A) && (m[A] = o[A])
  mf(() => {
    f && f.setOptions(m)
  }, [m])
}
function Dd() {
  var f
  return ((f = C.useContext(Ou)) == null ? void 0 : f.status) || Kl.NOT_LOADED
}
function Rm(f, o) {
  const { viewport: m, viewState: s } = o,
    A = !!m
  return (
    C.useLayoutEffect(() => {
      if (!f || !s) return
      const { latitude: O, longitude: U, bearing: N, pitch: R, zoom: E } = s
      f.moveCamera({ center: { lat: O, lng: U }, heading: N, tilt: R, zoom: E + 1 })
    }, [f, s]),
    A
  )
}
function Um(f) {
  return !f || typeof f != 'object' || !('lat' in f && 'lng' in f)
    ? !1
    : Number.isFinite(f.lat) && Number.isFinite(f.lng)
}
function Rd(f) {
  return Um(f) ? f : f.toJSON()
}
function Nm(f, o, m) {
  const s = m.center ? Rd(m.center) : null
  let A = null,
    O = null
  s && Number.isFinite(s.lat) && Number.isFinite(s.lng) && ((A = s.lat), (O = s.lng))
  const U = Number.isFinite(m.zoom) ? m.zoom : null,
    N = Number.isFinite(m.heading) ? m.heading : null,
    R = Number.isFinite(m.tilt) ? m.tilt : null
  C.useLayoutEffect(() => {
    if (!f) return
    const E = {}
    let D = !1
    A !== null &&
      O !== null &&
      (o.current.center.lat !== A || o.current.center.lng !== O) &&
      ((E.center = { lat: A, lng: O }), (D = !0)),
      U !== null && o.current.zoom !== U && ((E.zoom = U), (D = !0)),
      N !== null && o.current.heading !== N && ((E.heading = N), (D = !0)),
      R !== null && o.current.tilt !== R && ((E.tilt = R), (D = !0)),
      D && f.moveCamera(E)
  })
}
const Cm = () => {
  const f = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 999,
    display: 'flex',
    flexFlow: 'column nowrap',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '.8rem',
    color: 'rgba(0,0,0,0.6)',
    background: '#dddddd',
    padding: '1rem 1.5rem'
  }
  return Dt.createElement(
    'div',
    { style: f },
    Dt.createElement('h2', null, 'Error: AuthFailure'),
    Dt.createElement(
      'p',
      null,
      'A problem with your API key prevents the map from rendering correctly. Please make sure the value of the ',
      Dt.createElement('code', null, 'APIProvider.apiKey'),
      ' prop is correct. Check the error-message in the console for further details.'
    )
  )
}
function Hm() {
  const [f, o] = C.useState(null),
    m = C.useCallback((s) => o(s), [o])
  return [f, m]
}
function Ud() {
  return Dd() === Kl.LOADED
}
function xm() {
  const [, f] = C.useReducer((o) => o + 1, 0)
  return f
}
function qm(f, o) {
  const m = f.getCenter(),
    s = f.getZoom(),
    A = f.getHeading() || 0,
    O = f.getTilt() || 0,
    U = f.getBounds()
  ;(!m || !U || !Number.isFinite(s)) &&
    console.warn(
      '[useTrackedCameraState] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new'
    ),
    Object.assign(o.current, {
      center: (m == null ? void 0 : m.toJSON()) || { lat: 0, lng: 0 },
      zoom: s || 0,
      heading: A,
      tilt: O
    })
}
function Bm(f) {
  const o = xm(),
    m = C.useRef({ center: { lat: 0, lng: 0 }, heading: 0, tilt: 0, zoom: 0 })
  return (
    C.useEffect(() => {
      if (!f) return
      const s = google.maps.event.addListener(f, 'bounds_changed', () => {
        qm(f, m), o()
      })
      return () => s.remove()
    }, [f, o]),
    m
  )
}
const Ym = [
    'id',
    'defaultBounds',
    'defaultCenter',
    'defaultZoom',
    'defaultHeading',
    'defaultTilt',
    'reuseMaps',
    'renderingType',
    'colorScheme'
  ],
  Lm = ['padding']
class Zn {
  static has(o) {
    return this.entries[o] && this.entries[o].length > 0
  }
  static pop(o) {
    return (this.entries[o] && this.entries[o].pop()) || null
  }
  static push(o, m) {
    this.entries[o] || (this.entries[o] = []), this.entries[o].push(m)
  }
}
Zn.entries = {}
function Gm(f, o) {
  const m = Ud(),
    [s, A] = C.useState(null),
    [O, U] = Hm(),
    N = Bm(s),
    {
      id: R,
      defaultBounds: E,
      defaultCenter: D,
      defaultZoom: X,
      defaultHeading: Y,
      defaultTilt: J,
      reuseMaps: H,
      renderingType: k,
      colorScheme: $
    } = f,
    I = Ye(f, Ym),
    ut = f.zoom !== void 0 || f.defaultZoom !== void 0,
    tt = f.center !== void 0 || f.defaultCenter !== void 0
  !E &&
    (!ut || !tt) &&
    console.warn(
      '<Map> component is missing configuration. You have to provide zoom and center (via the `zoom`/`defaultZoom` and `center`/`defaultCenter` props) or specify the region to show using `defaultBounds`. See https://visgl.github.io/react-google-maps/docs/api-reference/components/map#required'
    ),
    !I.center && D && (I.center = D),
    !I.zoom && Number.isFinite(X) && (I.zoom = X),
    !I.heading && Number.isFinite(Y) && (I.heading = Y),
    !I.tilt && Number.isFinite(J) && (I.tilt = J)
  for (const j of Object.keys(I)) I[j] === void 0 && delete I[j]
  const nt = C.useRef(void 0)
  return (
    C.useEffect(() => {
      if (!O || !m) return
      const { addMapInstance: j, removeMapInstance: it } = o,
        { mapId: bt } = f,
        pt = `${bt || 'default'}:${k || 'default'}:${$ || 'LIGHT'}`
      let Rt, Ot
      if (
        (H && Zn.has(pt)
          ? ((Ot = Zn.pop(pt)),
            (Rt = Ot.getDiv()),
            O.appendChild(Rt),
            Ot.setOptions(I),
            setTimeout(() => Ot.setCenter(Ot.getCenter()), 0))
          : ((Rt = document.createElement('div')),
            (Rt.style.height = '100%'),
            O.appendChild(Rt),
            (Ot = new google.maps.Map(
              Rt,
              Rl({}, I, k ? { renderingType: k } : {}, $ ? { colorScheme: $ } : {})
            ))),
        A(Ot),
        j(Ot, R),
        E)
      ) {
        const { padding: Vt } = E,
          Ct = Ye(E, Lm)
        Ot.fitBounds(Ct, Vt)
      } else (!ut || !tt) && Ot.fitBounds({ east: 180, west: -180, south: -90, north: 90 })
      if (nt.current) {
        const { mapId: Vt, cameraState: Ct } = nt.current
        Vt !== bt && Ot.setOptions(Ct)
      }
      return () => {
        ;(nt.current = { mapId: bt, cameraState: N.current }),
          Rt.remove(),
          H ? Zn.push(pt, Ot) : google.maps.event.clearInstanceListeners(Ot),
          A(null),
          it(R)
      }
    }, [O, m, R, f.mapId, f.renderingType, f.colorScheme]),
    [s, U, N]
  )
}
const Nd = Dt.createContext(null),
  Cd = (f) => {
    const { children: o, id: m, className: s, style: A } = f,
      O = C.useContext(Ou),
      U = Dd()
    if (!O) throw new Error('<Map> can only be used inside an <ApiProvider> component.')
    const [N, R, E] = Gm(f, O)
    Nm(N, E, f), Am(N, f), Dm(N, f)
    const D = Rm(N, f),
      X = !!f.controlled
    C.useEffect(() => {
      if (N)
        return (
          D && N.setOptions({ disableDefaultUI: !0 }),
          (D || X) && N.setOptions({ gestureHandling: 'none', keyboardShortcuts: !1 }),
          () => {
            N.setOptions({
              gestureHandling: f.gestureHandling,
              keyboardShortcuts: f.keyboardShortcuts
            })
          }
        )
    }, [N, D, X, f.gestureHandling, f.keyboardShortcuts])
    const Y = f.center ? Rd(f.center) : null
    let J = null,
      H = null
    Y && Number.isFinite(Y.lat) && Number.isFinite(Y.lng) && ((J = Y.lat), (H = Y.lng))
    const k = C.useMemo(() => {
      var ut, tt, nt, j, it
      return {
        center: { lat: (ut = J) != null ? ut : 0, lng: (tt = H) != null ? tt : 0 },
        zoom: (nt = f.zoom) != null ? nt : 0,
        heading: (j = f.heading) != null ? j : 0,
        tilt: (it = f.tilt) != null ? it : 0
      }
    }, [J, H, f.zoom, f.heading, f.tilt])
    C.useLayoutEffect(() => {
      if (!N || !X) return
      N.moveCamera(k)
      const ut = N.addListener('bounds_changed', () => {
        N.moveCamera(k)
      })
      return () => ut.remove()
    }, [N, X, k])
    const $ = C.useMemo(
        () => Rl({ width: '100%', height: '100%', position: 'relative', zIndex: D ? -1 : 0 }, A),
        [A, D]
      ),
      I = C.useMemo(() => ({ map: N }), [N])
    return U === Kl.AUTH_FAILURE
      ? Dt.createElement(
          'div',
          { style: Rl({ position: 'relative' }, s ? {} : $), className: s },
          Dt.createElement(Cm, null)
        )
      : Dt.createElement(
          'div',
          Rl(
            { ref: R, 'data-testid': 'map', style: s ? void 0 : $, className: s },
            m ? { id: m } : {}
          ),
          N ? Dt.createElement(Nd.Provider, { value: I }, o) : null
        )
  }
Cd.deckGLViewProps = !0
const pd = new Set()
function jm(...f) {
  const o = JSON.stringify(f)
  pd.has(o) || (pd.add(o), console.error(...f))
}
const Mu = (f = null) => {
  const o = C.useContext(Ou),
    { map: m } = C.useContext(Nd) || {}
  if (o === null)
    return (
      jm(
        'useMap(): failed to retrieve APIProviderContext. Make sure that the <APIProvider> component exists and that the component you are calling `useMap()` from is a sibling of the <APIProvider>.'
      ),
      null
    )
  const { mapInstances: s } = o
  return f !== null ? s[f] || null : m || s.default || null
}
function yf(f) {
  const o = Ud(),
    m = C.useContext(Ou)
  return (
    C.useEffect(() => {
      !o || !m || m.importLibrary(f)
    }, [o, m, f]),
    (m == null ? void 0 : m.loadedLibraries[f]) || null
  )
}
function Ta(f, o, m) {
  C.useEffect(() => {
    if (!f || !o || !m) return
    const s = google.maps.event.addListener(f, o, m)
    return () => s.remove()
  }, [f, o, m])
}
function Qn(f, o, m) {
  C.useEffect(() => {
    f && (f[o] = m)
  }, [f, o, m])
}
function Ad(f, o, m) {
  C.useEffect(() => {
    if (!(!f || !o || !m)) return f.addEventListener(o, m), () => f.removeEventListener(o, m)
  }, [f, o, m])
}
function Xm(f) {
  return f.content !== void 0
}
function Td(f) {
  return f.nodeType === Node.ELEMENT_NODE
}
const Qm = Dt.createContext(null),
  Zm = { BOTTOM: ['50%', '100%'] },
  Vm = ({ children: f, styles: o, className: m, anchorPoint: s }) => {
    const [A, O] = s ?? Zm.BOTTOM
    let U = `-${A}`,
      N = `-${O}`
    A.trimStart().startsWith('-') && (U = A.substring(1)),
      O.trimStart().startsWith('-') && (N = O.substring(1))
    const R = `translate(50%, 100%) translate(${U}, ${N})`
    return Dt.createElement(
      'div',
      { style: { transform: R } },
      Dt.createElement('div', { className: m, style: o }, f)
    )
  }
function Km(f) {
  const [o, m] = C.useState(null),
    [s, A] = C.useState(null),
    O = Mu(),
    U = yf('marker'),
    {
      children: N,
      onClick: R,
      className: E,
      onMouseEnter: D,
      onMouseLeave: X,
      onDrag: Y,
      onDragStart: J,
      onDragEnd: H,
      collisionBehavior: k,
      clickable: $,
      draggable: I,
      position: ut,
      title: tt,
      zIndex: nt
    } = f,
    j = C.Children.count(N)
  return (
    C.useEffect(() => {
      if (!O || !U) return
      const it = new U.AdvancedMarkerElement()
      ;(it.map = O), m(it)
      let bt = null
      return (
        j > 0 &&
          ((bt = document.createElement('div')),
          (bt.isCustomMarker = !0),
          (it.content = bt),
          A(bt)),
        () => {
          var pt
          ;(it.map = null), (pt = bt) == null || pt.remove(), m(null), A(null)
        }
      )
    }, [O, U, j]),
    C.useEffect(() => {
      !(o != null && o.content) || !Td(o.content) || j > 0 || (o.content.className = E ?? '')
    }, [o, E, j]),
    Qn(o, 'position', ut),
    Qn(o, 'title', tt ?? ''),
    Qn(o, 'zIndex', nt),
    Qn(o, 'collisionBehavior', k),
    C.useEffect(() => {
      o &&
        (I !== void 0
          ? (o.gmpDraggable = I)
          : Y || J || H
            ? (o.gmpDraggable = !0)
            : (o.gmpDraggable = !1))
    }, [o, I, Y, H, J]),
    C.useEffect(() => {
      if (!o) return
      const it = $ !== void 0 || !!R || !!D || !!X
      ;(o.gmpClickable = it),
        it &&
          o != null &&
          o.content &&
          Td(o.content) &&
          ((o.content.style.pointerEvents = 'none'),
          o.content.firstElementChild && (o.content.firstElementChild.style.pointerEvents = 'all'))
    }, [o, $, R, D, X]),
    Ta(o, 'click', R),
    Ta(o, 'drag', Y),
    Ta(o, 'dragstart', J),
    Ta(o, 'dragend', H),
    Ad(o == null ? void 0 : o.element, 'mouseenter', D),
    Ad(o == null ? void 0 : o.element, 'mouseleave', X),
    [o, s]
  )
}
const wm = C.forwardRef((f, o) => {
  const { children: m, style: s, className: A, anchorPoint: O } = f,
    [U, N] = Km(f),
    R = C.useMemo(() => (U ? { marker: U } : null), [U])
  return (
    C.useImperativeHandle(o, () => U, [U]),
    N
      ? Dt.createElement(
          Qm.Provider,
          { value: R },
          hf.createPortal(Dt.createElement(Vm, { anchorPoint: O, styles: s, className: A }, m), N)
        )
      : null
  )
})
function Jm() {
  const [f, o] = C.useState(null)
  return [
    C.useCallback((s) => {
      o(s)
    }, []),
    f
  ]
}
function km(f, o, m) {
  if (o != null && typeof o != 'object')
    throw new Error(
      "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
    )
  const s = f.style
  if (m == null) {
    if (o == null) return
    for (const A in o) o.hasOwnProperty(A) && Od(s, A, o[A])
    return
  }
  for (const A in m)
    m.hasOwnProperty(A) &&
      (o == null || !o.hasOwnProperty(A)) &&
      (A.indexOf('--') === 0
        ? s.setProperty(A, '')
        : A === 'float'
          ? (s.cssFloat = '')
          : (s[A] = ''))
  if (o != null)
    for (const A in o) {
      const O = o[A]
      o.hasOwnProperty(A) && m[A] !== O && Od(s, A, O)
    }
}
function Od(f, o, m) {
  const s = o.indexOf('--') === 0
  m == null || typeof m == 'boolean' || m === ''
    ? s
      ? f.setProperty(o, '')
      : o === 'float'
        ? (f.cssFloat = '')
        : (f[o] = '')
    : s
      ? f.setProperty(o, m)
      : typeof m == 'number' && m !== 0 && !$m(o)
        ? (f[o] = m + 'px')
        : o === 'float'
          ? (f.cssFloat = m)
          : (f[o] = ('' + m).trim())
}
const Wm = new Set([
  'animationIterationCount',
  'aspectRatio',
  'borderImageOutset',
  'borderImageSlice',
  'borderImageWidth',
  'boxFlex',
  'boxFlexGroup',
  'boxOrdinalGroup',
  'columnCount',
  'columns',
  'flex',
  'flexGrow',
  'flexPositive',
  'flexShrink',
  'flexNegative',
  'flexOrder',
  'gridArea',
  'gridRow',
  'gridRowEnd',
  'gridRowSpan',
  'gridRowStart',
  'gridColumn',
  'gridColumnEnd',
  'gridColumnSpan',
  'gridColumnStart',
  'fontWeight',
  'lineClamp',
  'lineHeight',
  'opacity',
  'order',
  'orphans',
  'scale',
  'tabSize',
  'widows',
  'zIndex',
  'zoom',
  'fillOpacity',
  'floodOpacity',
  'stopOpacity',
  'strokeDasharray',
  'strokeDashoffset',
  'strokeMiterlimit',
  'strokeOpacity',
  'strokeWidth'
])
function $m(f) {
  return Wm.has(f)
}
const Fm = [
    'children',
    'headerContent',
    'style',
    'className',
    'pixelOffset',
    'anchor',
    'shouldFocus',
    'onClose',
    'onCloseClick'
  ],
  Im = (f) => {
    const {
        children: o,
        headerContent: m,
        style: s,
        className: A,
        pixelOffset: O,
        anchor: U,
        shouldFocus: N,
        onClose: R,
        onCloseClick: E
      } = f,
      D = Ye(f, Fm),
      X = yf('maps'),
      [Y, J] = C.useState(null),
      H = C.useRef(null),
      k = C.useRef(null)
    C.useEffect(() => {
      if (!X) return
      ;(H.current = document.createElement('div')), (k.current = document.createElement('div'))
      const ut = D
      O && (ut.pixelOffset = new google.maps.Size(O[0], O[1])),
        m && (ut.headerContent = typeof m == 'string' ? m : k.current)
      const tt = new google.maps.InfoWindow(D)
      return (
        tt.setContent(H.current),
        J(tt),
        () => {
          var nt, j
          tt.setContent(null),
            (nt = H.current) == null || nt.remove(),
            (j = k.current) == null || j.remove(),
            (H.current = null),
            (k.current = null),
            J(null)
        }
      )
    }, [X])
    const $ = C.useRef(null)
    C.useEffect(() => {
      !Y ||
        !H.current ||
        (km(H.current, s || null, $.current),
        ($.current = s || null),
        A !== H.current.className && (H.current.className = A || ''))
    }, [Y, A, s]),
      mf(() => {
        if (!Y) return
        const ut = D
        O ? (ut.pixelOffset = new google.maps.Size(O[0], O[1])) : (ut.pixelOffset = null),
          m ? (ut.headerContent = typeof m == 'string' ? m : k.current) : (ut.headerContent = null),
          Y.setOptions(D)
      }, [D, O, m]),
      Ta(Y, 'close', R),
      Ta(Y, 'closeclick', E)
    const I = Mu()
    return (
      mf(() => {
        if (!I || !Y || U === null) return
        const ut = !!U,
          tt = { map: I }
        if (U && ((tt.anchor = U), Xm(U) && U.content instanceof Element)) {
          const j = U.content,
            it = j == null ? void 0 : j.getBoundingClientRect()
          if (it && j != null && j.isCustomMarker) {
            var nt
            const bt = (nt = U.content.firstElementChild) == null ? void 0 : nt.firstElementChild,
              pt = bt == null ? void 0 : bt.getBoundingClientRect(),
              Rt = pt.x - it.x + (pt.width - it.width) / 2,
              Ot = pt.y - it.y,
              Vt = D
            ;(Vt.pixelOffset = new google.maps.Size(O ? O[0] + Rt : Rt, O ? O[1] + Ot : Ot)),
              Y.setOptions(Vt)
          }
        }
        return (
          N !== void 0 && (tt.shouldFocus = N),
          Y.open(tt),
          () => {
            ut && Y.set('anchor', null), Y.close()
          }
        )
      }, [Y, U, I, N, D, O]),
      Dt.createElement(
        Dt.Fragment,
        null,
        H.current && hf.createPortal(o, H.current),
        k.current !== null && hf.createPortal(m, k.current)
      )
    )
  },
  Pm = ['onClick', 'onDrag', 'onDragStart', 'onDragEnd', 'onMouseOver', 'onMouseOut']
function tv(f) {
  const [o, m] = C.useState(null),
    s = Mu(),
    { onClick: A, onDrag: O, onDragStart: U, onDragEnd: N, onMouseOver: R, onMouseOut: E } = f,
    D = Ye(f, Pm),
    { position: X, draggable: Y } = D
  return (
    C.useEffect(() => {
      if (!s) {
        s === void 0 && console.error('<Marker> has to be inside a Map component.')
        return
      }
      const J = new google.maps.Marker(D)
      return (
        J.setMap(s),
        m(J),
        () => {
          J.setMap(null), m(null)
        }
      )
    }, [s]),
    C.useEffect(() => {
      if (!o) return
      const J = o,
        H = google.maps.event
      return (
        A && H.addListener(J, 'click', A),
        O && H.addListener(J, 'drag', O),
        U && H.addListener(J, 'dragstart', U),
        N && H.addListener(J, 'dragend', N),
        R && H.addListener(J, 'mouseover', R),
        E && H.addListener(J, 'mouseout', E),
        o.setDraggable(!!Y),
        () => {
          H.clearInstanceListeners(J)
        }
      )
    }, [o, Y, A, O, U, N, R, E]),
    C.useEffect(() => {
      o && D && o.setOptions(D)
    }, [o, D]),
    C.useEffect(() => {
      Y || !X || !o || o.setPosition(X)
    }, [Y, X, o]),
    o
  )
}
C.forwardRef((f, o) => {
  const m = tv(f)
  return C.useImperativeHandle(o, () => m, [m]), Dt.createElement(Dt.Fragment, null)
})
const lv = ({ place: f }) => {
    const o = Mu()
    return (
      C.useEffect(() => {
        var m, s
        !o ||
          !f ||
          ((m = f.geometry) != null &&
            m.viewport &&
            o.fitBounds((s = f.geometry) == null ? void 0 : s.viewport))
      }, [o, f]),
      null
    )
  },
  ev = Dt.memo(lv),
  av = ({ onPlaceSelect: f }) => {
    const [o, m] = C.useState(null),
      s = C.useRef(null),
      A = yf('places')
    return (
      C.useEffect(() => {
        if (!A || !s.current) return
        const O = {
          fields: ['geometry', 'name', 'formatted_address', 'address_components'],
          componentRestrictions: { country: 'CL' }
        }
        m(new A.Autocomplete(s.current, O))
      }, [A]),
      C.useEffect(() => {
        o &&
          o.addListener('place_changed', () => {
            var U, N
            const O = o.getPlace()
            if (O && O.formatted_address) {
              const R =
                ((N =
                  (U = O.address_components) == null
                    ? void 0
                    : U.find((E) => E.types.includes('administrative_area_level_3'))) == null
                  ? void 0
                  : N.long_name) || null
              f(O, R)
            } else f(null, null)
          })
      }, [f, o]),
      ot.jsxs('div', {
        className: 'mh-relative mh-mb-4',
        children: [
          ot.jsx('div', {
            className:
              'mh-absolute mh-inset-y-0 mh-start-0 mh-flex mh-items-center mh-ps-3 mh-pointer-events-none',
            children: ot.jsx('svg', {
              className: 'mh-w-4 mh-h-4 mh-text-gray-500',
              'aria-hidden': 'true',
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 20 20',
              children: ot.jsx('path', {
                stroke: 'currentColor',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2',
                d: 'M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              })
            })
          }),
          ot.jsx('input', {
            type: 'search',
            className:
              'mh-block mh-w-full mh-p-4 mh-ps-10 mh-text-sm mh-text-gray-900 mh-border mh-border-gray-300 mh-rounded-lg mh-bg-gray-50 focus:!mh-ring-blue-500 focus:!mh-border-blue-500',
            placeholder: 'Busca la estación más cercana',
            ref: s
          })
        ]
      })
    )
  },
  uv = 'AIzaSyASK2NgpEuybwdXCQTMrpjIe9gIdZLEXeY',
  nv = 'eb5058168689ea47',
  iv = () => {
    const [f, o] = C.useState({ lat: -32.9827515, lng: -71.5341035 }),
      [m, s] = C.useState(null),
      A = C.useRef([]),
      [O, U] = C.useState(null),
      [N, R] = C.useState(null),
      [E, D] = C.useState([]),
      [X, Y] = C.useState([]),
      [J, H] = C.useState(!1)
    C.useEffect(() => {
      A.current = A.current.slice(0, E.length)
    }, [E.length]),
      C.useEffect(() => {
        const $ = document.getElementById('root'),
          I = $ == null ? void 0 : $.getAttribute('data-playas')
        try {
          if ((H(!0), I)) {
            const tt = JSON.parse(I).map((nt) => {
              var j, it
              return {
                name: nt.name,
                slug: nt.slug,
                position: {
                  lat: Number((j = nt == null ? void 0 : nt.coordinates) == null ? void 0 : j.lat),
                  lng: Number((it = nt == null ? void 0 : nt.coordinates) == null ? void 0 : it.lng)
                }
              }
            })
            D(tt), Y(tt)
          }
        } catch (ut) {
          console.error('Error parsing playas data:', ut)
        } finally {
          H(!1)
        }
      }, []),
      C.useEffect(() => {
        var $
        O && O.formatted_address && O.address_components
          ? ($ = O.address_components.find((I) =>
              I.types.includes('administrative_area_level_3')
            )) != null && $.long_name
          : Y(E)
      }, [O, E]),
      C.useEffect(() => {}, [m, E])
    const k = ($, I) => {
      const ut = A.current[$]
      R($), ut && ut.scrollIntoView({ behavior: 'smooth', block: 'center' })
      const tt = X[$]
      I && I.setCenter(tt.position)
    }
    return J
      ? ot.jsx('div', {
          className:
            'tw-h-[600px] md:tw-h-[500px] tw-flex tw-justify-center tw-flex-col tw-w-full tw-items-center tw-space-y-1',
          children: 'Cargando mapa...'
        })
      : ot.jsx(pm, {
          apiKey: uv,
          children: ot.jsxs('div', {
            className: 'tw-flex tw-flex-col-reverse md:tw-flex-row tw-gap-4',
            children: [
              ot.jsxs('div', {
                className: 'tw-w-full md:tw-w-4/12',
                children: [
                  ot.jsx('div', { children: ot.jsx(av, { onPlaceSelect: U }) }),
                  ot.jsx('div', {
                    className:
                      'tw-overflow-y-scroll tw-flex-1 tw-max-h-[100px] md:tw-max-h-[430px]',
                    children: ot.jsx(sv, {
                      points: X,
                      itemRefs: A,
                      handleMarkerClick: k,
                      activeIndex: N
                    })
                  })
                ]
              }),
              ot.jsx('div', {
                className: 'tw-w-full tw-h-[400px]',
                style: { height: '400px', width: '800px' },
                children: ot.jsxs(Cd, {
                  id: 'gmap',
                  defaultCenter: f,
                  defaultZoom: 10,
                  mapTypeControl: !1,
                  zoomControl: !0,
                  streetViewControl: !1,
                  mapId: nv,
                  disableDefaultUI: !0,
                  fullscreenControl: !1,
                  children: [ot.jsx(cv, { pois: X, onMarkerClick: k }), ot.jsx(ev, { place: O })]
                })
              })
            ]
          })
        })
  }
function cv({ pois: f, onMarkerClick: o }) {
  return ot.jsx(ot.Fragment, {
    children: f.map((m, s) => ot.jsx(fv, { poi: m, onClick: () => o(s) }, m.name))
  })
}
function fv({ poi: f, onClick: o }) {
  const [m, s] = Jm(),
    [A, O] = C.useState(!1)
  return ot.jsxs(ot.Fragment, {
    children: [
      ot.jsx(wm, {
        position: f.position,
        ref: m,
        onClick: () => {
          O(!A), o()
        }
      }),
      A &&
        ot.jsx(Im, {
          anchor: s,
          headerContent: ot.jsx('h3', { children: f.name }),
          onCloseClick: () => O(!1),
          style: { width: 250 },
          children: ot.jsx('a', {
            href: `https://dryhood-qa.myshopify.com/pages/${f.slug}`,
            target: '_blank',
            rel: 'noreferrer',
            children: 'Visita página'
          })
        })
    ]
  })
}
function sv({ points: f, itemRefs: o, handleMarkerClick: m, activeIndex: s }) {
  const A = Mu('gmap'),
    O = (U) => {
      m(U, A)
    }
  return ot.jsx('div', {
    className: 'mh-block mh-space-y-1',
    children:
      f &&
      f.map((U, N) =>
        ot.jsx(
          'div',
          {
            ref: (R) => (o.current[N] = R),
            onClick: () => O(N),
            className: `tw-p-2.5 tw-w-full tw-border tw-flex tw-items-center tw-rounded-md ${N === s ? 'tw-border-blue-500 tw-text-white tw-bg-blue-500' : 'tw-border-gray-200'}`,
            children: ot.jsx('div', {
              className: 'tw-flex-1 tw-text-center',
              children: ot.jsx('h2', {
                className: `tw-text-sm tw-font-base ${N === s ? 'tw-text-white' : ''}`,
                children: U.name
              })
            })
          },
          N
        )
      )
  })
}
const ov = sm.createRoot(document.getElementById('root'))
ov.render(ot.jsx(Dt.StrictMode, { children: ot.jsx(iv, {}) }))
