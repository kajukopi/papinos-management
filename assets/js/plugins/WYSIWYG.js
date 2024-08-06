export const WYSIWYG = (() => {
  function t(r) {
    if (n[r]) return n[r].exports
    var o = (n[r] = {i: r, l: !1, exports: {}})
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports
  }
  return (
    (n = {}),
    (t.m = e =
      [
        function (t, e) {
          t.exports = function (t) {
            try {
              return !!t()
            } catch (t) {
              return !0
            }
          }
        },
        function (t, e, n) {
          var r = n(3),
            o = n(49),
            i = n(5),
            a = n(50),
            c = n(54),
            u = n(80),
            s = o("wks"),
            l = r.Symbol,
            f = u ? l : (l && l.withoutSetter) || a
          t.exports = function (t) {
            return i(s, t) || (c && i(l, t) ? (s[t] = l[t]) : (s[t] = f("Symbol." + t))), s[t]
          }
        },
        function (t, e, n) {
          var r = n(3),
            o = n(15).f,
            i = n(9),
            a = n(13),
            c = n(48),
            u = n(74),
            s = n(53)
          t.exports = function (t, e) {
            var n,
              l,
              f,
              p,
              d = t.target,
              h = t.global,
              v = t.stat,
              m = h ? r : v ? r[d] || c(d, {}) : (r[d] || {}).prototype
            if (m)
              for (n in e) {
                if (((f = e[n]), (l = t.noTargetGet ? (p = o(m, n)) && p.value : m[n]), !s(h ? n : d + (v ? "." : "#") + n, t.forced) && void 0 !== l)) {
                  if (typeof f == typeof l) continue
                  u(f, l)
                }
                ;(t.sham || (l && l.sham)) && i(f, "sham", !0), a(m, n, f, t)
              }
          }
        },
        function (t, e, n) {
          ;(function (e) {
            function n(t) {
              return t && t.Math == Math && t
            }
            t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")()
          }).call(this, n(104))
        },
        function (t, e, n) {
          var r = n(0)
          t.exports = !r(function () {
            return (
              7 !=
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7
                },
              })[1]
            )
          })
        },
        function (t, e) {
          var n = {}.hasOwnProperty
          t.exports = function (t, e) {
            return n.call(t, e)
          }
        },
        function (t, e, n) {
          var r = n(4),
            o = n(70),
            i = n(7),
            a = n(20),
            c = Object.defineProperty
          e.f = r
            ? c
            : function (t, e, n) {
                if ((i(t), (e = a(e, !0)), i(n), o))
                  try {
                    return c(t, e, n)
                  } catch (t) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported")
                return "value" in n && (t[e] = n.value), t
              }
        },
        function (t, e, n) {
          var r = n(8)
          t.exports = function (t) {
            if (!r(t)) throw TypeError(String(t) + " is not an object")
            return t
          }
        },
        function (t, e) {
          t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
          }
        },
        function (t, e, n) {
          var r = n(4),
            o = n(6),
            i = n(19)
          t.exports = r
            ? function (t, e, n) {
                return o.f(t, e, i(1, n))
              }
            : function (t, e, n) {
                return (t[e] = n), t
              }
        },
        function (t, e, n) {
          var r = n(47),
            o = n(11)
          t.exports = function (t) {
            return r(o(t))
          }
        },
        function (t, e) {
          t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on " + t)
            return t
          }
        },
        function (t, e, n) {
          var r = n(35),
            o = Math.min
          t.exports = function (t) {
            return 0 < t ? o(r(t), 9007199254740991) : 0
          }
        },
        function (t, e, n) {
          var r = n(3),
            o = n(9),
            i = n(5),
            a = n(48),
            c = n(72),
            u = n(21),
            s = u.get,
            l = u.enforce,
            f = String(String).split("String")
          ;(t.exports = function (t, e, n, c) {
            var u = !!c && !!c.unsafe,
              s = !!c && !!c.enumerable,
              p = !!c && !!c.noTargetGet
            "function" == typeof n && ("string" != typeof e || i(n, "name") || o(n, "name", e), (l(n).source = f.join("string" == typeof e ? e : ""))),
              t !== r ? (u ? !p && t[e] && (s = !0) : delete t[e], s ? (t[e] = n) : o(t, e, n)) : s ? (t[e] = n) : a(e, n)
          })(Function.prototype, "toString", function () {
            return ("function" == typeof this && s(this).source) || c(this)
          })
        },
        function (t, e, n) {
          var r = n(11)
          t.exports = function (t) {
            return Object(r(t))
          }
        },
        function (t, e, n) {
          var r = n(4),
            o = n(46),
            i = n(19),
            a = n(10),
            c = n(20),
            u = n(5),
            s = n(70),
            l = Object.getOwnPropertyDescriptor
          e.f = r
            ? l
            : function (t, e) {
                if (((t = a(t)), (e = c(e, !0)), s))
                  try {
                    return l(t, e)
                  } catch (t) {}
                if (u(t, e)) return i(!o.f.call(t, e), t[e])
              }
        },
        function (t, e) {
          var n = {}.toString
          t.exports = function (t) {
            return n.call(t).slice(8, -1)
          }
        },
        function (t, e, n) {
          function r(t) {
            throw t
          }
          var o = n(4),
            i = n(0),
            a = n(5),
            c = Object.defineProperty,
            u = {}
          t.exports = function (t, e) {
            if (a(u, t)) return u[t]
            var n = [][t],
              s = !!a((e = e || {}), "ACCESSORS") && e.ACCESSORS,
              l = a(e, 0) ? e[0] : r,
              f = a(e, 1) ? e[1] : void 0
            return (u[t] =
              !!n &&
              !i(function () {
                if (s && !o) return !0
                var t = {length: -1}
                s ? c(t, 1, {enumerable: !0, get: r}) : (t[1] = 1), n.call(t, l, f)
              }))
          }
        },
        function (t, e, n) {
          "use strict"
          var r = n(2),
            o = n(43)
          r({target: "RegExp", proto: !0, forced: /./.exec !== o}, {exec: o})
        },
        function (t, e) {
          t.exports = function (t, e) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
          }
        },
        function (t, e, n) {
          var r = n(8)
          t.exports = function (t, e) {
            if (!r(t)) return t
            var n, o
            if (e && "function" == typeof (n = t.toString) && !r((o = n.call(t)))) return o
            if ("function" == typeof (n = t.valueOf) && !r((o = n.call(t)))) return o
            if (!e && "function" == typeof (n = t.toString) && !r((o = n.call(t)))) return o
            throw TypeError("Can't convert object to primitive value")
          }
        },
        function (t, e, n) {
          var r,
            o,
            i,
            a,
            c,
            u,
            s,
            l,
            f = n(105),
            p = n(3),
            d = n(8),
            h = n(9),
            v = n(5),
            m = n(33),
            g = n(34),
            y = p.WeakMap
          ;(s = f
            ? ((r = new y()),
              (o = r.get),
              (i = r.has),
              (a = r.set),
              (c = function (t, e) {
                return a.call(r, t, e), e
              }),
              (u = function (t) {
                return o.call(r, t) || {}
              }),
              function (t) {
                return i.call(r, t)
              })
            : ((g[(l = m("state"))] = !0),
              (c = function (t, e) {
                return h(t, l, e), e
              }),
              (u = function (t) {
                return v(t, l) ? t[l] : {}
              }),
              function (t) {
                return v(t, l)
              })),
            (t.exports = {
              set: c,
              get: u,
              has: s,
              enforce: function (t) {
                return s(t) ? u(t) : c(t, {})
              },
              getterFor: function (t) {
                return function (e) {
                  var n
                  if (!d(e) || (n = u(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required")
                  return n
                }
              },
            })
        },
        function (t, e) {
          t.exports = !1
        },
        function (t, e, n) {
          function r(t) {
            return "function" == typeof t ? t : void 0
          }
          var o = n(76),
            i = n(3)
          t.exports = function (t, e) {
            return arguments.length < 2 ? r(o[t]) || r(i[t]) : (o[t] && o[t][e]) || (i[t] && i[t][e])
          }
        },
        function (t, e, n) {
          var r = n(77),
            o = n(51).concat("length", "prototype")
          e.f =
            Object.getOwnPropertyNames ||
            function (t) {
              return r(t, o)
            }
        },
        function (t, e, n) {
          function r(t) {
            var e = 1 == t,
              n = 2 == t,
              r = 3 == t,
              l = 4 == t,
              f = 6 == t,
              p = 5 == t || f
            return function (d, h, v, m) {
              for (var g, y, b = a(d), x = i(b), _ = o(h, v, 3), S = c(x.length), E = 0, O = m || u, w = e ? O(d, S) : n ? O(d, 0) : void 0; E < S; E++)
                if ((p || E in x) && ((y = _((g = x[E]), E, b)), t))
                  if (e) w[E] = y
                  else if (y)
                    switch (t) {
                      case 3:
                        return !0
                      case 5:
                        return g
                      case 6:
                        return E
                      case 2:
                        s.call(w, g)
                    }
                  else if (l) return !1
              return f ? -1 : r || l ? l : w
            }
          }
          var o = n(83),
            i = n(47),
            a = n(14),
            c = n(12),
            u = n(85),
            s = [].push
          t.exports = {forEach: r(0), map: r(1), filter: r(2), some: r(3), every: r(4), find: r(5), findIndex: r(6)}
        },
        function (t, e, n) {
          "use strict"
          var r = n(2),
            o = n(0),
            i = n(36),
            a = n(8),
            c = n(14),
            u = n(12),
            s = n(39),
            l = n(85),
            f = n(40),
            p = n(1),
            d = n(86),
            h = p("isConcatSpreadable"),
            v = 9007199254740991,
            m = "Maximum allowed index exceeded",
            g =
              51 <= d ||
              !o(function () {
                var t = []
                return (t[h] = !1), t.concat()[0] !== t
              }),
            y = f("concat")
          r(
            {target: "Array", proto: !0, forced: !g || !y},
            {
              concat: function (t) {
                for (var e, n, r, o = c(this), f = l(o, 0), p = 0, d = -1, g = arguments.length; d < g; d++)
                  if (
                    (function (t) {
                      if (!a(t)) return !1
                      var e = t[h]
                      return void 0 !== e ? !!e : i(t)
                    })((r = -1 === d ? o : arguments[d]))
                  ) {
                    if (((n = u(r.length)), v < p + n)) throw TypeError(m)
                    for (e = 0; e < n; e++, p++) e in r && s(f, p, r[e])
                  } else {
                    if (v <= p) throw TypeError(m)
                    s(f, p++, r)
                  }
                return (f.length = p), f
              },
            }
          )
        },
        function (t, e, n) {
          "use strict"
          var r = n(2),
            o = n(88)
          r({target: "Array", proto: !0, forced: [].forEach != o}, {forEach: o})
        },
        function (t, e) {
          t.exports = {}
        },
        function (t, e, n) {
          var r = n(59),
            o = n(13),
            i = n(115)
          r || o(Object.prototype, "toString", i, {unsafe: !0})
        },
        function (t, e, n) {
          "use strict"
          var r = n(13),
            o = n(7),
            i = n(0),
            a = n(60),
            c = "toString",
            u = RegExp.prototype,
            s = u[c],
            l = i(function () {
              return "/a/b" != s.call({source: "a", flags: "b"})
            }),
            f = s.name != c
          ;(l || f) &&
            r(
              RegExp.prototype,
              c,
              function () {
                var t = o(this),
                  e = String(t.source),
                  n = t.flags
                return "/" + e + "/" + String(void 0 === n && t instanceof RegExp && !("flags" in u) ? a.call(t) : n)
              },
              {unsafe: !0}
            )
        },
        function (t, e, n) {
          var r = n(3),
            o = n(99),
            i = n(88),
            a = n(9)
          for (var c in o) {
            var u = r[c],
              s = u && u.prototype
            if (s && s.forEach !== i)
              try {
                a(s, "forEach", i)
              } catch (t) {
                s.forEach = i
              }
          }
        },
        function (t, e, n) {
          "use strict"
          function r(t, e) {
            var n = (nt[t] = E(X[W]))
            return Y(n, {type: $, tag: t, description: e}), f || (n.description = e), n
          }
          function o(t, e) {
            y(t)
            var n = x(e),
              r = O(n).concat(dt(n))
            return (
              H(r, function (e) {
                ;(f && !pt.call(n, e)) || ft(t, e, n[e])
              }),
              t
            )
          }
          function i(t, e) {
            var n = x(t),
              r = _(e, !0)
            if (n !== q || !v(nt, r) || v(rt, r)) {
              var o = J(n, r)
              return !o || !v(nt, r) || (v(n, G) && n[G][r]) || (o.enumerable = !0), o
            }
          }
          function a(t) {
            var e = tt(x(t)),
              n = []
            return (
              H(e, function (t) {
                v(nt, t) || v(L, t) || n.push(t)
              }),
              n
            )
          }
          var c = n(2),
            u = n(3),
            s = n(23),
            l = n(22),
            f = n(4),
            p = n(54),
            d = n(80),
            h = n(0),
            v = n(5),
            m = n(36),
            g = n(8),
            y = n(7),
            b = n(14),
            x = n(10),
            _ = n(20),
            S = n(19),
            E = n(37),
            O = n(38),
            w = n(24),
            j = n(108),
            A = n(52),
            k = n(15),
            T = n(6),
            P = n(46),
            z = n(9),
            I = n(13),
            C = n(49),
            M = n(33),
            L = n(34),
            R = n(50),
            D = n(1),
            N = n(81),
            F = n(82),
            B = n(55),
            U = n(21),
            H = n(25).forEach,
            G = M("hidden"),
            $ = "Symbol",
            W = "prototype",
            V = D("toPrimitive"),
            Y = U.set,
            K = U.getterFor($),
            q = Object[W],
            X = u.Symbol,
            Q = s("JSON", "stringify"),
            J = k.f,
            Z = T.f,
            tt = j.f,
            et = P.f,
            nt = C("symbols"),
            rt = C("op-symbols"),
            ot = C("string-to-symbol-registry"),
            it = C("symbol-to-string-registry"),
            at = C("wks"),
            ct = u.QObject,
            ut = !ct || !ct[W] || !ct[W].findChild,
            st =
              f &&
              h(function () {
                return (
                  7 !=
                  E(
                    Z({}, "a", {
                      get: function () {
                        return Z(this, "a", {value: 7}).a
                      },
                    })
                  ).a
                )
              })
                ? function (t, e, n) {
                    var r = J(q, e)
                    r && delete q[e], Z(t, e, n), r && t !== q && Z(q, e, r)
                  }
                : Z,
            lt = d
              ? function (t) {
                  return "symbol" == typeof t
                }
              : function (t) {
                  return Object(t) instanceof X
                },
            ft = function (t, e, n) {
              t === q && ft(rt, e, n), y(t)
              var r = _(e, !0)
              return y(n), v(nt, r) ? (n.enumerable ? (v(t, G) && t[G][r] && (t[G][r] = !1), (n = E(n, {enumerable: S(0, !1)}))) : (v(t, G) || Z(t, G, S(1, {})), (t[G][r] = !0)), st(t, r, n)) : Z(t, r, n)
            },
            pt = function (t) {
              var e = _(t, !0),
                n = et.call(this, e)
              return !(this === q && v(nt, e) && !v(rt, e)) && (!(n || !v(this, e) || !v(nt, e) || (v(this, G) && this[G][e])) || n)
            },
            dt = function (t) {
              var e = t === q,
                n = tt(e ? rt : x(t)),
                r = []
              return (
                H(n, function (t) {
                  !v(nt, t) || (e && !v(q, t)) || r.push(nt[t])
                }),
                r
              )
            }
          p ||
            (I(
              (X = function (t) {
                if (this instanceof X) throw TypeError("Symbol is not a constructor")
                var e = arguments.length && void 0 !== t ? String(t) : void 0,
                  n = R(e),
                  o = function (t) {
                    this === q && o.call(rt, t), v(this, G) && v(this[G], n) && (this[G][n] = !1), st(this, n, S(1, t))
                  }
                return f && ut && st(q, n, {configurable: !0, set: o}), r(n, e)
              })[W],
              "toString",
              function () {
                return K(this).tag
              }
            ),
            I(X, "withoutSetter", function (t) {
              return r(R(t), t)
            }),
            (P.f = pt),
            (T.f = ft),
            (k.f = i),
            (w.f = j.f = a),
            (A.f = dt),
            (N.f = function (t) {
              return r(D(t), t)
            }),
            f &&
              (Z(X[W], "description", {
                configurable: !0,
                get: function () {
                  return K(this).description
                },
              }),
              l || I(q, "propertyIsEnumerable", pt, {unsafe: !0}))),
            c({global: !0, wrap: !0, forced: !p, sham: !p}, {Symbol: X}),
            H(O(at), function (t) {
              F(t)
            }),
            c(
              {target: $, stat: !0, forced: !p},
              {
                for: function (t) {
                  var e = String(t)
                  if (v(ot, e)) return ot[e]
                  var n = X(e)
                  return (ot[e] = n), (it[n] = e), n
                },
                keyFor: function (t) {
                  if (!lt(t)) throw TypeError(t + " is not a symbol")
                  if (v(it, t)) return it[t]
                },
                useSetter: function () {
                  ut = !0
                },
                useSimple: function () {
                  ut = !1
                },
              }
            ),
            c(
              {target: "Object", stat: !0, forced: !p, sham: !f},
              {
                create: function (t, e) {
                  return void 0 === e ? E(t) : o(E(t), e)
                },
                defineProperty: ft,
                defineProperties: o,
                getOwnPropertyDescriptor: i,
              }
            ),
            c({target: "Object", stat: !0, forced: !p}, {getOwnPropertyNames: a, getOwnPropertySymbols: dt}),
            c(
              {
                target: "Object",
                stat: !0,
                forced: h(function () {
                  A.f(1)
                }),
              },
              {
                getOwnPropertySymbols: function (t) {
                  return A.f(b(t))
                },
              }
            ),
            Q &&
              c(
                {
                  target: "JSON",
                  stat: !0,
                  forced:
                    !p ||
                    h(function () {
                      var t = X()
                      return "[null]" != Q([t]) || "{}" != Q({a: t}) || "{}" != Q(Object(t))
                    }),
                },
                {
                  stringify: function (t, e, n) {
                    for (var r, o = [t], i = 1; i < arguments.length; ) o.push(arguments[i++])
                    if ((g((r = e)) || void 0 !== t) && !lt(t))
                      return (
                        m(e) ||
                          (e = function (t, e) {
                            if (("function" == typeof r && (e = r.call(this, t, e)), !lt(e))) return e
                          }),
                        (o[1] = e),
                        Q.apply(null, o)
                      )
                  },
                }
              ),
            X[W][V] || z(X[W], V, X[W].valueOf),
            B(X, $),
            (L[G] = !0)
        },
        function (t, e, n) {
          var r = n(49),
            o = n(50),
            i = r("keys")
          t.exports = function (t) {
            return i[t] || (i[t] = o(t))
          }
        },
        function (t, e) {
          t.exports = {}
        },
        function (t, e) {
          var n = Math.ceil,
            r = Math.floor
          t.exports = function (t) {
            return isNaN((t = +t)) ? 0 : (0 < t ? r : n)(t)
          }
        },
        function (t, e, n) {
          var r = n(16)
          t.exports =
            Array.isArray ||
            function (t) {
              return "Array" == r(t)
            }
        },
        function (t, e, n) {
          function r() {}
          function o(t) {
            return "<script>" + t + "</" + h + ">"
          }
          var i,
            a = n(7),
            c = n(106),
            u = n(51),
            s = n(34),
            l = n(107),
            f = n(71),
            p = n(33),
            d = "prototype",
            h = "script",
            v = p("IE_PROTO"),
            m = function () {
              try {
                i = document.domain && new ActiveXObject("htmlfile")
              } catch (t) {}
              var t, e
              m = i
                ? (function (t) {
                    t.write(o("")), t.close()
                    var e = t.parentWindow.Object
                    return (t = null), e
                  })(i)
                : (((e = f("iframe")).style.display = "none"), l.appendChild(e), (e.src = String("javascript:")), (t = e.contentWindow.document).open(), t.write(o("document.F=Object")), t.close(), t.F)
              for (var n = u.length; n--; ) delete m[d][u[n]]
              return m()
            }
          ;(s[v] = !0),
            (t.exports =
              Object.create ||
              function (t, e) {
                var n
                return null !== t ? ((r[d] = a(t)), (n = new r()), (r[d] = null), (n[v] = t)) : (n = m()), void 0 === e ? n : c(n, e)
              })
        },
        function (t, e, n) {
          var r = n(77),
            o = n(51)
          t.exports =
            Object.keys ||
            function (t) {
              return r(t, o)
            }
        },
        function (t, e, n) {
          "use strict"
          var r = n(20),
            o = n(6),
            i = n(19)
          t.exports = function (t, e, n) {
            var a = r(e)
            a in t ? o.f(t, a, i(0, n)) : (t[a] = n)
          }
        },
        function (t, e, n) {
          var r = n(0),
            o = n(1),
            i = n(86),
            a = o("species")
          t.exports = function (t) {
            return (
              51 <= i ||
              !r(function () {
                var e = []
                return (
                  ((e.constructor = {})[a] = function () {
                    return {foo: 1}
                  }),
                  1 !== e[t](Boolean).foo
                )
              })
            )
          }
        },
        function (t, e, n) {
          "use strict"
          var r = n(10),
            o = n(87),
            i = n(28),
            a = n(21),
            c = n(90),
            u = "Array Iterator",
            s = a.set,
            l = a.getterFor(u)
          ;(t.exports = c(
            Array,
            "Array",
            function (t, e) {
              s(this, {type: u, target: r(t), index: 0, kind: e})
            },
            function () {
              var t = l(this),
                e = t.target,
                n = t.kind,
                r = t.index++
              return !e || r >= e.length ? {value: (t.target = void 0), done: !0} : "keys" == n ? {value: r, done: !1} : "values" == n ? {value: e[r], done: !1} : {value: [r, e[r]], done: !1}
            },
            "values"
          )),
            (i.Arguments = i.Array),
            o("keys"),
            o("values"),
            o("entries")
        },
        function (t, e, n) {
          var r = n(2),
            o = n(14),
            i = n(38)
          r(
            {
              target: "Object",
              stat: !0,
              forced: n(0)(function () {
                i(1)
              }),
            },
            {
              keys: function (t) {
                return i(o(t))
              },
            }
          )
        },
        function (t, e, n) {
          "use strict"
          var r,
            o,
            i = n(60),
            a = n(97),
            c = RegExp.prototype.exec,
            u = String.prototype.replace,
            s = c,
            l = ((r = /a/), (o = /b*/g), c.call(r, "a"), c.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
            f = a.UNSUPPORTED_Y || a.BROKEN_CARET,
            p = void 0 !== /()??/.exec("")[1]
          ;(l || p || f) &&
            (s = function (t) {
              var e,
                n,
                r,
                o,
                a = this,
                s = f && a.sticky,
                d = i.call(a),
                h = a.source,
                v = 0,
                m = t
              return (
                s &&
                  (-1 === (d = d.replace("y", "")).indexOf("g") && (d += "g"),
                  (m = String(t).slice(a.lastIndex)),
                  0 < a.lastIndex && (!a.multiline || (a.multiline && "\n" !== t[a.lastIndex - 1])) && ((h = "(?: " + h + ")"), (m = " " + m), v++),
                  (n = new RegExp("^(?:" + h + ")", d))),
                p && (n = new RegExp("^" + h + "$(?!\\s)", d)),
                l && (e = a.lastIndex),
                (r = c.call(s ? n : a, m)),
                s ? (r ? ((r.input = r.input.slice(v)), (r[0] = r[0].slice(v)), (r.index = a.lastIndex), (a.lastIndex += r[0].length)) : (a.lastIndex = 0)) : l && r && (a.lastIndex = a.global ? r.index + r[0].length : e),
                p &&
                  r &&
                  1 < r.length &&
                  u.call(r[0], n, function () {
                    for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
                  }),
                r
              )
            }),
            (t.exports = s)
        },
        function (t, e, n) {
          "use strict"
          var r = n(98).charAt,
            o = n(21),
            i = n(90),
            a = "String Iterator",
            c = o.set,
            u = o.getterFor(a)
          i(
            String,
            "String",
            function (t) {
              c(this, {type: a, string: String(t), index: 0})
            },
            function () {
              var t,
                e = u(this),
                n = e.string,
                o = e.index
              return o >= n.length ? {value: void 0, done: !0} : ((t = r(n, o)), (e.index += t.length), {value: t, done: !1})
            }
          )
        },
        function (t, e, n) {
          "use strict"
          var r = n(61),
            o = n(7),
            i = n(14),
            a = n(12),
            c = n(35),
            u = n(11),
            s = n(62),
            l = n(63),
            f = Math.max,
            p = Math.min,
            d = Math.floor,
            h = /\$([$&'`]|\d\d?|<[^>]*>)/g,
            v = /\$([$&'`]|\d\d?)/g
          r("replace", 2, function (t, e, n, r) {
            var m = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
              g = r.REPLACE_KEEPS_$0,
              y = m ? "$" : "$0"
            return [
              function (n, r) {
                var o = u(this),
                  i = null == n ? void 0 : n[t]
                return void 0 !== i ? i.call(n, o, r) : e.call(String(o), n, r)
              },
              function (t, r) {
                if ((!m && g) || ("string" == typeof r && -1 === r.indexOf(y))) {
                  var u = n(e, t, this, r)
                  if (u.done) return u.value
                }
                var b = o(t),
                  x = String(this),
                  _ = "function" == typeof r
                _ || (r = String(r))
                var S,
                  E = b.global
                E && ((S = b.unicode), (b.lastIndex = 0))
                for (var O = []; ; ) {
                  var w = l(b, x)
                  if (null === w) break
                  if ((O.push(w), !E)) break
                  "" === String(w[0]) && (b.lastIndex = s(x, a(b.lastIndex), S))
                }
                for (var j, A = "", k = 0, T = 0; T < O.length; T++) {
                  w = O[T]
                  for (var P = String(w[0]), z = f(p(c(w.index), x.length), 0), I = [], C = 1; C < w.length; C++) I.push(void 0 === (j = w[C]) ? j : String(j))
                  var M,
                    L = w.groups,
                    R = _
                      ? ((M = [P].concat(I, z, x)), void 0 !== L && M.push(L), String(r.apply(void 0, M)))
                      : (function (t, n, r, o, a, c) {
                          var u = r + t.length,
                            s = o.length,
                            l = v
                          return (
                            void 0 !== a && ((a = i(a)), (l = h)),
                            e.call(c, l, function (e, i) {
                              var c
                              switch (i.charAt(0)) {
                                case "$":
                                  return "$"
                                case "&":
                                  return t
                                case "`":
                                  return n.slice(0, r)
                                case "'":
                                  return n.slice(u)
                                case "<":
                                  c = a[i.slice(1, -1)]
                                  break
                                default:
                                  var l = +i
                                  if (0 == l) return e
                                  if (s < l) {
                                    var f = d(l / 10)
                                    return 0 === f ? e : f <= s ? (void 0 === o[f - 1] ? i.charAt(1) : o[f - 1] + i.charAt(1)) : e
                                  }
                                  c = o[l - 1]
                              }
                              return void 0 === c ? "" : c
                            })
                          )
                        })(P, x, z, I, L, r)
                  k <= z && ((A += x.slice(k, z) + R), (k = z + P.length))
                }
                return A + x.slice(k)
              },
            ]
          })
        },
        function (t, e, n) {
          "use strict"
          var r = {}.propertyIsEnumerable,
            o = Object.getOwnPropertyDescriptor,
            i = o && !r.call({1: 2}, 1)
          e.f = i
            ? function (t) {
                var e = o(this, t)
                return !!e && e.enumerable
              }
            : r
        },
        function (t, e, n) {
          var r = n(0),
            o = n(16),
            i = "".split
          t.exports = r(function () {
            return !Object("z").propertyIsEnumerable(0)
          })
            ? function (t) {
                return "String" == o(t) ? i.call(t, "") : Object(t)
              }
            : Object
        },
        function (t, e, n) {
          var r = n(3),
            o = n(9)
          t.exports = function (t, e) {
            try {
              o(r, t, e)
            } catch (n) {
              r[t] = e
            }
            return e
          }
        },
        function (t, e, n) {
          var r = n(22),
            o = n(73)
          ;(t.exports = function (t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {})
          })("versions", []).push({version: "3.6.5", mode: r ? "pure" : "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)"})
        },
        function (t, e) {
          var n = 0,
            r = Math.random()
          t.exports = function (t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36)
          }
        },
        function (t, e) {
          t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        function (t, e) {
          e.f = Object.getOwnPropertySymbols
        },
        function (t, e, n) {
          function r(t, e) {
            var n = c[a(t)]
            return n == s || (n != u && ("function" == typeof e ? o(e) : !!e))
          }
          var o = n(0),
            i = /#|\.prototype\./,
            a = (r.normalize = function (t) {
              return String(t).replace(i, ".").toLowerCase()
            }),
            c = (r.data = {}),
            u = (r.NATIVE = "N"),
            s = (r.POLYFILL = "P")
          t.exports = r
        },
        function (t, e, n) {
          var r = n(0)
          t.exports =
            !!Object.getOwnPropertySymbols &&
            !r(function () {
              return !String(Symbol())
            })
        },
        function (t, e, n) {
          var r = n(6).f,
            o = n(5),
            i = n(1)("toStringTag")
          t.exports = function (t, e, n) {
            t && !o((t = n ? t : t.prototype), i) && r(t, i, {configurable: !0, value: e})
          }
        },
        function (t, e, n) {
          "use strict"
          var r,
            o,
            i,
            a,
            c,
            u,
            s = n(2),
            l = n(4),
            f = n(3),
            p = n(5),
            d = n(8),
            h = n(6).f,
            v = n(74),
            m = f.Symbol
          !l ||
            "function" != typeof m ||
            ("description" in m.prototype && void 0 === m().description) ||
            ((r = {}),
            v(
              (o = function (t) {
                var e = arguments.length < 1 || void 0 === t ? void 0 : String(t),
                  n = this instanceof o ? new m(e) : void 0 === e ? m() : m(e)
                return "" === e && (r[n] = !0), n
              }),
              m
            ),
            ((i = o.prototype = m.prototype).constructor = o),
            (a = i.toString),
            (c = "Symbol(test)" == String(m("test"))),
            (u = /^Symbol\((.*)\)[^)]+$/),
            h(i, "description", {
              configurable: !0,
              get: function () {
                var t = d(this) ? this.valueOf() : this,
                  e = a.call(t)
                if (p(r, t)) return ""
                var n = c ? e.slice(7, -1) : e.replace(u, "$1")
                return "" === n ? void 0 : n
              },
            }),
            s({global: !0, forced: !0}, {Symbol: o}))
        },
        function (t, e, n) {
          n(82)("iterator")
        },
        function (t, e, n) {
          "use strict"
          var r = n(2),
            o = n(25).filter,
            i = n(40),
            a = n(17),
            c = i("filter"),
            u = a("filter")
          r(
            {target: "Array", proto: !0, forced: !c || !u},
            {
              filter: function (t, e) {
                return o(this, t, 1 < arguments.length ? e : void 0)
              },
            }
          )
        },
        function (t, e, n) {
          var r = {}
          ;(r[n(1)("toStringTag")] = "z"), (t.exports = "[object z]" === String(r))
        },
        function (t, e, n) {
          "use strict"
          var r = n(7)
          t.exports = function () {
            var t = r(this),
              e = ""
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
          }
        },
        function (t, e, n) {
          "use strict"
          n(18)
          var r = n(13),
            o = n(0),
            i = n(1),
            a = n(43),
            c = n(9),
            u = i("species"),
            s = !o(function () {
              var t = /./
              return (
                (t.exec = function () {
                  var t = []
                  return (t.groups = {a: "7"}), t
                }),
                "7" !== "".replace(t, "$<a>")
              )
            }),
            l = "$0" === "a".replace(/./, "$0"),
            f = i("replace"),
            p = !!/./[f] && "" === /./[f]("a", "$0"),
            d = !o(function () {
              var t = /(?:)/,
                e = t.exec
              t.exec = function () {
                return e.apply(this, arguments)
              }
              var n = "ab".split(t)
              return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
            })
          t.exports = function (t, e, n, f) {
            var h,
              v,
              m,
              g,
              y = i(t),
              b = !o(function () {
                var e = {}
                return (
                  (e[y] = function () {
                    return 7
                  }),
                  7 != ""[t](e)
                )
              }),
              x =
                b &&
                !o(function () {
                  var e = !1,
                    n = /a/
                  return (
                    "split" === t &&
                      (((n = {constructor: {}}).constructor[u] = function () {
                        return n
                      }),
                      (n.flags = ""),
                      (n[y] = /./[y])),
                    (n.exec = function () {
                      return (e = !0), null
                    }),
                    n[y](""),
                    !e
                  )
                })
            ;(b && x && ("replace" !== t || (s && l && !p)) && ("split" !== t || d)) ||
              ((h = /./[y]),
              (m = (v = n(
                y,
                ""[t],
                function (t, e, n, r, o) {
                  return e.exec === a ? (b && !o ? {done: !0, value: h.call(e, n, r)} : {done: !0, value: t.call(n, e, r)}) : {done: !1}
                },
                {REPLACE_KEEPS_$0: l, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p}
              ))[0]),
              (g = v[1]),
              r(String.prototype, t, m),
              r(
                RegExp.prototype,
                y,
                2 == e
                  ? function (t, e) {
                      return g.call(t, this, e)
                    }
                  : function (t) {
                      return g.call(t, this)
                    }
              )),
              f && c(RegExp.prototype[y], "sham", !0)
          }
        },
        function (t, e, n) {
          "use strict"
          var r = n(98).charAt
          t.exports = function (t, e, n) {
            return e + (n ? r(t, e).length : 1)
          }
        },
        function (t, e, n) {
          var r = n(16),
            o = n(43)
          t.exports = function (t, e) {
            var n = t.exec
            if ("function" == typeof n) {
              var i = n.call(t, e)
              if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null")
              return i
            }
            if ("RegExp" !== r(t)) throw TypeError("RegExp#exec called on incompatible receiver")
            return o.call(t, e)
          }
        },
        function (t, e, n) {
          var r = n(3),
            o = n(99),
            i = n(41),
            a = n(9),
            c = n(1),
            u = c("iterator"),
            s = c("toStringTag"),
            l = i.values
          for (var f in o) {
            var p = r[f],
              d = p && p.prototype
            if (d) {
              if (d[u] !== l)
                try {
                  a(d, u, l)
                } catch (t) {
                  d[u] = l
                }
              if ((d[s] || a(d, s, f), o[f]))
                for (var h in i)
                  if (d[h] !== i[h])
                    try {
                      a(d, h, i[h])
                    } catch (t) {
                      d[h] = i[h]
                    }
            }
          }
        },
        function (t, e, n) {
          var r = n(2),
            o = n(116)
          r(
            {
              target: "Array",
              stat: !0,
              forced: !n(120)(function (t) {
                Array.from(t)
              }),
            },
            {from: o}
          )
        },
        function (t, e, n) {
          function r(t) {
            return function (e) {
              var n = String(o(e))
              return 1 & t && (n = n.replace(a, "")), 2 & t && (n = n.replace(c, "")), n
            }
          }
          var o = n(11),
            i = "[" + n(67) + "]",
            a = RegExp("^" + i + i + "*"),
            c = RegExp(i + i + "*$")
          t.exports = {start: r(1), end: r(2), trim: r(3)}
        },
        function (t, e) {
          t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        },
        function (t, e, n) {
          var r = n(8),
            o = n(16),
            i = n(1)("match")
          t.exports = function (t) {
            var e
            return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
          }
        },
        function (t, e, n) {
          "use strict"
          var r = n(2),
            o = n(8),
            i = n(36),
            a = n(79),
            c = n(12),
            u = n(10),
            s = n(39),
            l = n(1),
            f = n(40),
            p = n(17),
            d = f("slice"),
            h = p("slice", {ACCESSORS: !0, 0: 0, 1: 2}),
            v = l("species"),
            m = [].slice,
            g = Math.max
          r(
            {target: "Array", proto: !0, forced: !d || !h},
            {
              slice: function (t, e) {
                var n,
                  r,
                  l,
                  f = u(this),
                  p = c(f.length),
                  d = a(t, p),
                  h = a(void 0 === e ? p : e, p)
                if (i(f) && ((("function" == typeof (n = f.constructor) && (n === Array || i(n.prototype))) || (o(n) && null === (n = n[v]))) && (n = void 0), n === Array || void 0 === n)) return m.call(f, d, h)
                for (r = new (void 0 === n ? Array : n)(g(h - d, 0)), l = 0; d < h; d++, l++) d in f && s(r, l, f[d])
                return (r.length = l), r
              },
            }
          )
        },
        function (t, e, n) {
          var r = n(4),
            o = n(0),
            i = n(71)
          t.exports =
            !r &&
            !o(function () {
              return (
                7 !=
                Object.defineProperty(i("div"), "a", {
                  get: function () {
                    return 7
                  },
                }).a
              )
            })
        },
        function (t, e, n) {
          var r = n(3),
            o = n(8),
            i = r.document,
            a = o(i) && o(i.createElement)
          t.exports = function (t) {
            return a ? i.createElement(t) : {}
          }
        },
        function (t, e, n) {
          var r = n(73),
            o = Function.toString
          "function" != typeof r.inspectSource &&
            (r.inspectSource = function (t) {
              return o.call(t)
            }),
            (t.exports = r.inspectSource)
        },
        function (t, e, n) {
          var r = n(3),
            o = n(48),
            i = "__core-js_shared__",
            a = r[i] || o(i, {})
          t.exports = a
        },
        function (t, e, n) {
          var r = n(5),
            o = n(75),
            i = n(15),
            a = n(6)
          t.exports = function (t, e) {
            for (var n = o(e), c = a.f, u = i.f, s = 0; s < n.length; s++) {
              var l = n[s]
              r(t, l) || c(t, l, u(e, l))
            }
          }
        },
        function (t, e, n) {
          var r = n(23),
            o = n(24),
            i = n(52),
            a = n(7)
          t.exports =
            r("Reflect", "ownKeys") ||
            function (t) {
              var e = o.f(a(t)),
                n = i.f
              return n ? e.concat(n(t)) : e
            }
        },
        function (t, e, n) {
          var r = n(3)
          t.exports = r
        },
        function (t, e, n) {
          var r = n(5),
            o = n(10),
            i = n(78).indexOf,
            a = n(34)
          t.exports = function (t, e) {
            var n,
              c = o(t),
              u = 0,
              s = []
            for (n in c) !r(a, n) && r(c, n) && s.push(n)
            for (; e.length > u; ) r(c, (n = e[u++])) && (~i(s, n) || s.push(n))
            return s
          }
        },
        function (t, e, n) {
          function r(t) {
            return function (e, n, r) {
              var c,
                u = o(e),
                s = i(u.length),
                l = a(r, s)
              if (t && n != n) {
                for (; l < s; ) if ((c = u[l++]) != c) return !0
              } else for (; l < s; l++) if ((t || l in u) && u[l] === n) return t || l || 0
              return !t && -1
            }
          }
          var o = n(10),
            i = n(12),
            a = n(79)
          t.exports = {includes: r(!0), indexOf: r(!1)}
        },
        function (t, e, n) {
          var r = n(35),
            o = Math.max,
            i = Math.min
          t.exports = function (t, e) {
            var n = r(t)
            return n < 0 ? o(n + e, 0) : i(n, e)
          }
        },
        function (t, e, n) {
          var r = n(54)
          t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        function (t, e, n) {
          var r = n(1)
          e.f = r
        },
        function (t, e, n) {
          var r = n(76),
            o = n(5),
            i = n(81),
            a = n(6).f
          t.exports = function (t) {
            var e = r.Symbol || (r.Symbol = {})
            o(e, t) || a(e, t, {value: i.f(t)})
          }
        },
        function (t, e, n) {
          var r = n(84)
          t.exports = function (t, e, n) {
            if ((r(t), void 0 === e)) return t
            switch (n) {
              case 0:
                return function () {
                  return t.call(e)
                }
              case 1:
                return function (n) {
                  return t.call(e, n)
                }
              case 2:
                return function (n, r) {
                  return t.call(e, n, r)
                }
              case 3:
                return function (n, r, o) {
                  return t.call(e, n, r, o)
                }
            }
            return function () {
              return t.apply(e, arguments)
            }
          }
        },
        function (t, e) {
          t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function")
            return t
          }
        },
        function (t, e, n) {
          var r = n(8),
            o = n(36),
            i = n(1)("species")
          t.exports = function (t, e) {
            var n
            return o(t) && (("function" == typeof (n = t.constructor) && (n === Array || o(n.prototype))) || (r(n) && null === (n = n[i]))) && (n = void 0), new (void 0 === n ? Array : n)(0 === e ? 0 : e)
          }
        },
        function (t, e, n) {
          var r,
            o,
            i = n(3),
            a = n(109),
            c = i.process,
            u = c && c.versions,
            s = u && u.v8
          s ? (o = (r = s.split("."))[0] + r[1]) : a && (!(r = a.match(/Edge\/(\d+)/)) || 74 <= r[1]) && (r = a.match(/Chrome\/(\d+)/)) && (o = r[1]), (t.exports = o && +o)
        },
        function (t, e, n) {
          var r = n(1),
            o = n(37),
            i = n(6),
            a = r("unscopables"),
            c = Array.prototype
          null == c[a] && i.f(c, a, {configurable: !0, value: o(null)}),
            (t.exports = function (t) {
              c[a][t] = !0
            })
        },
        function (t, e, n) {
          "use strict"
          var r = n(25).forEach,
            o = n(89),
            i = n(17),
            a = o("forEach"),
            c = i("forEach")
          t.exports =
            a && c
              ? [].forEach
              : function (t, e) {
                  return r(this, t, 1 < arguments.length ? e : void 0)
                }
        },
        function (t, e, n) {
          "use strict"
          var r = n(0)
          t.exports = function (t, e) {
            var n = [][t]
            return (
              !!n &&
              r(function () {
                n.call(
                  null,
                  e ||
                    function () {
                      throw 1
                    },
                  1
                )
              })
            )
          }
        },
        function (t, e, n) {
          "use strict"
          function r() {
            return this
          }
          var o = n(2),
            i = n(111),
            a = n(92),
            c = n(93),
            u = n(55),
            s = n(9),
            l = n(13),
            f = n(1),
            p = n(22),
            d = n(28),
            h = n(91),
            v = h.IteratorPrototype,
            m = h.BUGGY_SAFARI_ITERATORS,
            g = f("iterator"),
            y = "values",
            b = "entries"
          t.exports = function (t, e, n, f, h, x, _) {
            function S(t) {
              if (t === h && P) return P
              if (!m && t in k) return k[t]
              switch (t) {
                case "keys":
                case y:
                case b:
                  return function () {
                    return new n(this, t)
                  }
              }
              return function () {
                return new n(this)
              }
            }
            i(n, e, f)
            var E,
              O,
              w,
              j = e + " Iterator",
              A = !1,
              k = t.prototype,
              T = k[g] || k["@@iterator"] || (h && k[h]),
              P = (!m && T) || S(h),
              z = ("Array" == e && k.entries) || T
            if (
              (z && ((E = a(z.call(new t()))), v !== Object.prototype && E.next && (p || a(E) === v || (c ? c(E, v) : "function" != typeof E[g] && s(E, g, r)), u(E, j, !0, !0), p && (d[j] = r))),
              h == y &&
                T &&
                T.name !== y &&
                ((A = !0),
                (P = function () {
                  return T.call(this)
                })),
              (p && !_) || k[g] === P || s(k, g, P),
              (d[e] = P),
              h)
            )
              if (((O = {values: S(y), keys: x ? P : S("keys"), entries: S(b)}), _)) for (w in O) (!m && !A && w in k) || l(k, w, O[w])
              else o({target: e, proto: !0, forced: m || A}, O)
            return O
          }
        },
        function (t, e, n) {
          "use strict"
          var r,
            o,
            i,
            a = n(92),
            c = n(9),
            u = n(5),
            s = n(1),
            l = n(22),
            f = s("iterator"),
            p = !1
          ;[].keys && ("next" in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (r = o) : (p = !0)),
            null == r && (r = {}),
            l ||
              u(r, f) ||
              c(r, f, function () {
                return this
              }),
            (t.exports = {IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: p})
        },
        function (t, e, n) {
          var r = n(5),
            o = n(14),
            i = n(33),
            a = n(112),
            c = i("IE_PROTO"),
            u = Object.prototype
          t.exports = a
            ? Object.getPrototypeOf
            : function (t) {
                return (t = o(t)), r(t, c) ? t[c] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
              }
        },
        function (t, e, n) {
          var r = n(7),
            o = n(113)
          t.exports =
            Object.setPrototypeOf ||
            ("__proto__" in {}
              ? (function () {
                  var t,
                    e = !1,
                    n = {}
                  try {
                    ;(t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), (e = n instanceof Array)
                  } catch (n) {}
                  return function (n, i) {
                    return r(n), o(i), e ? t.call(n, i) : (n.__proto__ = i), n
                  }
                })()
              : void 0)
        },
        function (t, e, n) {
          var r = n(2),
            o = n(0),
            i = n(10),
            a = n(15).f,
            c = n(4),
            u = o(function () {
              a(1)
            })
          r(
            {target: "Object", stat: !0, forced: !c || u, sham: !c},
            {
              getOwnPropertyDescriptor: function (t, e) {
                return a(i(t), e)
              },
            }
          )
        },
        function (t, e, n) {
          var r = n(2),
            o = n(4),
            i = n(75),
            a = n(10),
            c = n(15),
            u = n(39)
          r(
            {target: "Object", stat: !0, sham: !o},
            {
              getOwnPropertyDescriptors: function (t) {
                for (var e, n, r = a(t), o = c.f, s = i(r), l = {}, f = 0; s.length > f; ) void 0 !== (n = o(r, (e = s[f++]))) && u(l, e, n)
                return l
              },
            }
          )
        },
        function (t, e, n) {
          var r = n(59),
            o = n(16),
            i = n(1)("toStringTag"),
            a =
              "Arguments" ==
              o(
                (function () {
                  return arguments
                })()
              )
          t.exports = r
            ? o
            : function (t) {
                var e, n, r
                return void 0 === t
                  ? "Undefined"
                  : null === t
                  ? "Null"
                  : "string" ==
                    typeof (n = (function (t, e) {
                      try {
                        return t[e]
                      } catch (t) {}
                    })((e = Object(t)), i))
                  ? n
                  : a
                  ? o(e)
                  : "Object" == (r = o(e)) && "function" == typeof e.callee
                  ? "Arguments"
                  : r
              }
        },
        function (t, e, n) {
          "use strict"
          function r(t, e) {
            return RegExp(t, e)
          }
          var o = n(0)
          ;(e.UNSUPPORTED_Y = o(function () {
            var t = r("a", "y")
            return (t.lastIndex = 2), null != t.exec("abcd")
          })),
            (e.BROKEN_CARET = o(function () {
              var t = r("^r", "gy")
              return (t.lastIndex = 2), null != t.exec("str")
            }))
        },
        function (t, e, n) {
          function r(t) {
            return function (e, n) {
              var r,
                a,
                c = String(i(e)),
                u = o(n),
                s = c.length
              return u < 0 || s <= u
                ? t
                  ? ""
                  : void 0
                : (r = c.charCodeAt(u)) < 55296 || 56319 < r || u + 1 === s || (a = c.charCodeAt(u + 1)) < 56320 || 57343 < a
                ? t
                  ? c.charAt(u)
                  : r
                : t
                ? c.slice(u, u + 2)
                : a - 56320 + ((r - 55296) << 10) + 65536
            }
          }
          var o = n(35),
            i = n(11)
          t.exports = {codeAt: r(!1), charAt: r(!0)}
        },
        function (t, e) {
          t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0,
          }
        },
        function (t, e, n) {
          "use strict"
          function r(t) {
            var e,
              n,
              r,
              o,
              i,
              a,
              c,
              u,
              s = f(t, !1)
            if ("string" == typeof s && 2 < s.length)
              if (43 === (e = (s = g(s)).charCodeAt(0)) || 45 === e) {
                if (88 === (n = s.charCodeAt(2)) || 120 === n) return NaN
              } else if (48 === e) {
                switch (s.charCodeAt(1)) {
                  case 66:
                  case 98:
                    ;(r = 2), (o = 49)
                    break
                  case 79:
                  case 111:
                    ;(r = 8), (o = 55)
                    break
                  default:
                    return +s
                }
                for (a = (i = s.slice(2)).length, c = 0; c < a; c++) if ((u = i.charCodeAt(c)) < 48 || o < u) return NaN
                return parseInt(i, r)
              }
            return +s
          }
          var o = n(4),
            i = n(3),
            a = n(53),
            c = n(13),
            u = n(5),
            s = n(16),
            l = n(101),
            f = n(20),
            p = n(0),
            d = n(37),
            h = n(24).f,
            v = n(15).f,
            m = n(6).f,
            g = n(66).trim,
            y = "Number",
            b = i[y],
            x = b.prototype,
            _ = s(d(x)) == y
          if (a(y, !b(" 0o1") || !b("0b1") || b("+0x1"))) {
            for (
              var S,
                E = function (t) {
                  var e = arguments.length < 1 ? 0 : t,
                    n = this
                  return n instanceof E &&
                    (_
                      ? p(function () {
                          x.valueOf.call(n)
                        })
                      : s(n) != y)
                    ? l(new b(r(e)), n, E)
                    : r(e)
                },
                O = o ? h(b) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),
                w = 0;
              O.length > w;
              w++
            )
              u(b, (S = O[w])) && !u(E, S) && m(E, S, v(b, S))
            ;((E.prototype = x).constructor = E), c(i, y, E)
          }
        },
        function (t, e, n) {
          var r = n(8),
            o = n(93)
          t.exports = function (t, e, n) {
            var i, a
            return o && "function" == typeof (i = e.constructor) && i !== n && r((a = i.prototype)) && a !== n.prototype && o(t, a), t
          }
        },
        function (t, e, n) {
          "use strict"
          var r = n(61),
            o = n(68),
            i = n(7),
            a = n(11),
            c = n(126),
            u = n(62),
            s = n(12),
            l = n(63),
            f = n(43),
            p = n(0),
            d = [].push,
            h = Math.min,
            v = 4294967295,
            m = !p(function () {
              return !RegExp(v, "y")
            })
          r(
            "split",
            2,
            function (t, e, n) {
              var r =
                "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || 1 < ".".split(/()()/).length || "".split(/.?/).length
                  ? function (t, n) {
                      var r = String(a(this)),
                        i = void 0 === n ? v : n >>> 0
                      if (0 == i) return []
                      if (void 0 === t) return [r]
                      if (!o(t)) return e.call(r, t, i)
                      for (
                        var c, u, s, l = [], p = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), h = 0, m = new RegExp(t.source, p + "g");
                        (c = f.call(m, r)) && !(h < (u = m.lastIndex) && (l.push(r.slice(h, c.index)), 1 < c.length && c.index < r.length && d.apply(l, c.slice(1)), (s = c[0].length), (h = u), l.length >= i));

                      )
                        m.lastIndex === c.index && m.lastIndex++
                      return h === r.length ? (!s && m.test("")) || l.push("") : l.push(r.slice(h)), l.length > i ? l.slice(0, i) : l
                    }
                  : "0".split(void 0, 0).length
                  ? function (t, n) {
                      return void 0 === t && 0 === n ? [] : e.call(this, t, n)
                    }
                  : e
              return [
                function (e, n) {
                  var o = a(this),
                    i = null == e ? void 0 : e[t]
                  return void 0 !== i ? i.call(e, o, n) : r.call(String(o), e, n)
                },
                function (t, o) {
                  var a = n(r, t, this, o, r !== e)
                  if (a.done) return a.value
                  var f = i(t),
                    p = String(this),
                    d = c(f, RegExp),
                    g = f.unicode,
                    y = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (m ? "y" : "g"),
                    b = new d(m ? f : "^(?:" + f.source + ")", y),
                    x = void 0 === o ? v : o >>> 0
                  if (0 == x) return []
                  if (0 === p.length) return null === l(b, p) ? [p] : []
                  for (var _ = 0, S = 0, E = []; S < p.length; ) {
                    b.lastIndex = m ? S : 0
                    var O,
                      w = l(b, m ? p : p.slice(S))
                    if (null === w || (O = h(s(b.lastIndex + (m ? 0 : S)), p.length)) === _) S = u(p, S, g)
                    else {
                      if ((E.push(p.slice(_, S)), E.length === x)) return E
                      for (var j = 1; j <= w.length - 1; j++) if ((E.push(w[j]), E.length === x)) return E
                      S = _ = O
                    }
                  }
                  return E.push(p.slice(_)), E
                },
              ]
            },
            !m
          )
        },
        function (t, e, n) {
          var r = n(4),
            o = n(6).f,
            i = Function.prototype,
            a = i.toString,
            c = /^\s*function ([^ (]*)/
          !r ||
            "name" in i ||
            o(i, "name", {
              configurable: !0,
              get: function () {
                try {
                  return a.call(this).match(c)[1]
                } catch (t) {
                  return ""
                }
              },
            })
        },
        function (t, e) {
          var n = (function () {
            return this
          })()
          try {
            n = n || new Function("return this")()
          } catch (t) {
            "object" == typeof window && (n = window)
          }
          t.exports = n
        },
        function (t, e, n) {
          var r = n(3),
            o = n(72),
            i = r.WeakMap
          t.exports = "function" == typeof i && /native code/.test(o(i))
        },
        function (t, e, n) {
          var r = n(4),
            o = n(6),
            i = n(7),
            a = n(38)
          t.exports = r
            ? Object.defineProperties
            : function (t, e) {
                i(t)
                for (var n, r = a(e), c = r.length, u = 0; u < c; ) o.f(t, (n = r[u++]), e[n])
                return t
              }
        },
        function (t, e, n) {
          var r = n(23)
          t.exports = r("document", "documentElement")
        },
        function (t, e, n) {
          var r = n(10),
            o = n(24).f,
            i = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
          t.exports.f = function (t) {
            return a && "[object Window]" == i.call(t)
              ? (function (t) {
                  try {
                    return o(t)
                  } catch (t) {
                    return a.slice()
                  }
                })(t)
              : o(r(t))
          }
        },
        function (t, e, n) {
          var r = n(23)
          t.exports = r("navigator", "userAgent") || ""
        },
        function (t, e, n) {
          "use strict"
          var r = n(2),
            o = n(25).find,
            i = n(87),
            a = n(17),
            c = "find",
            u = !0,
            s = a(c)
          c in [] &&
            Array(1)[c](function () {
              u = !1
            }),
            r(
              {target: "Array", proto: !0, forced: u || !s},
              {
                find: function (t, e) {
                  return o(this, t, 1 < arguments.length ? e : void 0)
                },
              }
            ),
            i(c)
        },
        function (t, e, n) {
          "use strict"
          function r() {
            return this
          }
          var o = n(91).IteratorPrototype,
            i = n(37),
            a = n(19),
            c = n(55),
            u = n(28)
          t.exports = function (t, e, n) {
            var s = e + " Iterator"
            return (t.prototype = i(o, {next: a(1, n)})), c(t, s, !1, !0), (u[s] = r), t
          }
        },
        function (t, e, n) {
          var r = n(0)
          t.exports = !r(function () {
            function t() {}
            return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype
          })
        },
        function (t, e, n) {
          var r = n(8)
          t.exports = function (t) {
            if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
            return t
          }
        },
        function (t, e, n) {
          "use strict"
          var r = n(2),
            o = n(25).map,
            i = n(40),
            a = n(17),
            c = i("map"),
            u = a("map")
          r(
            {target: "Array", proto: !0, forced: !c || !u},
            {
              map: function (t, e) {
                return o(this, t, 1 < arguments.length ? e : void 0)
              },
            }
          )
        },
        function (t, e, n) {
          "use strict"
          var r = n(59),
            o = n(96)
          t.exports = r
            ? {}.toString
            : function () {
                return "[object " + o(this) + "]"
              }
        },
        function (t, e, n) {
          "use strict"
          var r = n(83),
            o = n(14),
            i = n(117),
            a = n(118),
            c = n(12),
            u = n(39),
            s = n(119)
          t.exports = function (t, e, n) {
            var l,
              f,
              p,
              d,
              h,
              v,
              m = o(t),
              g = "function" == typeof this ? this : Array,
              y = arguments.length,
              b = 1 < y ? e : void 0,
              x = void 0 !== b,
              _ = s(m),
              S = 0
            if ((x && (b = r(b, 2 < y ? n : void 0, 2)), null == _ || (g == Array && a(_)))) for (f = new g((l = c(m.length))); S < l; S++) (v = x ? b(m[S], S) : m[S]), u(f, S, v)
            else for (h = (d = _.call(m)).next, f = new g(); !(p = h.call(d)).done; S++) (v = x ? i(d, b, [p.value, S], !0) : p.value), u(f, S, v)
            return (f.length = S), f
          }
        },
        function (t, e, n) {
          var r = n(7)
          t.exports = function (t, e, n, o) {
            try {
              return o ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
              var i = t.return
              throw (void 0 !== i && r(i.call(t)), e)
            }
          }
        },
        function (t, e, n) {
          var r = n(1),
            o = n(28),
            i = r("iterator"),
            a = Array.prototype
          t.exports = function (t) {
            return void 0 !== t && (o.Array === t || a[i] === t)
          }
        },
        function (t, e, n) {
          var r = n(96),
            o = n(28),
            i = n(1)("iterator")
          t.exports = function (t) {
            if (null != t) return t[i] || t["@@iterator"] || o[r(t)]
          }
        },
        function (t, e, n) {
          var r = n(1)("iterator"),
            o = !1
          try {
            var i = 0,
              a = {
                next: function () {
                  return {done: !!i++}
                },
                return: function () {
                  o = !0
                },
              }
            ;(a[r] = function () {
              return this
            }),
              Array.from(a, function () {
                throw 2
              })
          } catch (t) {}
          t.exports = function (t, e) {
            if (!e && !o) return !1
            var n = !1
            try {
              var i = {}
              ;(i[r] = function () {
                return {
                  next: function () {
                    return {done: (n = !0)}
                  },
                }
              }),
                t(i)
            } catch (t) {}
            return n
          }
        },
        function (t, e, n) {
          var r = n(2),
            o = n(122)
          r({target: "Number", stat: !0, forced: Number.parseFloat != o}, {parseFloat: o})
        },
        function (t, e, n) {
          var r = n(3),
            o = n(66).trim,
            i = n(67),
            a = r.parseFloat,
            c = 1 / a(i + "-0") != -1 / 0
          t.exports = c
            ? function (t) {
                var e = o(String(t)),
                  n = a(e)
                return 0 === n && "-" == e.charAt(0) ? -0 : n
              }
            : a
        },
        function (t, e, n) {
          var r = n(4),
            o = n(3),
            i = n(53),
            a = n(101),
            c = n(6).f,
            u = n(24).f,
            s = n(68),
            l = n(60),
            f = n(97),
            p = n(13),
            d = n(0),
            h = n(21).set,
            v = n(124),
            m = n(1)("match"),
            g = o.RegExp,
            y = g.prototype,
            b = /a/g,
            x = /a/g,
            _ = new g(b) !== b,
            S = f.UNSUPPORTED_Y
          if (
            r &&
            i(
              "RegExp",
              !_ ||
                S ||
                d(function () {
                  return (x[m] = !1), g(b) != b || g(x) == x || "/a/i" != g(b, "i")
                })
            )
          ) {
            for (
              var E = function (t, e) {
                  var n,
                    r = this instanceof E,
                    o = s(t),
                    i = void 0 === e
                  if (!r && o && t.constructor === E && i) return t
                  _ ? o && !i && (t = t.source) : t instanceof E && (i && (e = l.call(t)), (t = t.source)), S && (n = !!e && -1 < e.indexOf("y")) && (e = e.replace(/y/g, ""))
                  var c = a(_ ? new g(t, e) : g(t, e), r ? this : y, E)
                  return S && n && h(c, {sticky: n}), c
                },
                O = u(g),
                w = 0;
              O.length > w;

            )
              !(function (t) {
                t in E ||
                  c(E, t, {
                    configurable: !0,
                    get: function () {
                      return g[t]
                    },
                    set: function (e) {
                      g[t] = e
                    },
                  })
              })(O[w++])
            ;((y.constructor = E).prototype = y), p(o, "RegExp", E)
          }
          v("RegExp")
        },
        function (t, e, n) {
          "use strict"
          var r = n(23),
            o = n(6),
            i = n(1),
            a = n(4),
            c = i("species")
          t.exports = function (t) {
            var e = r(t),
              n = o.f
            a &&
              e &&
              !e[c] &&
              n(e, c, {
                configurable: !0,
                get: function () {
                  return this
                },
              })
          }
        },
        function (t, e, n) {
          "use strict"
          var r = n(61),
            o = n(7),
            i = n(12),
            a = n(11),
            c = n(62),
            u = n(63)
          r("match", 1, function (t, e, n) {
            return [
              function (e) {
                var n = a(this),
                  r = null == e ? void 0 : e[t]
                return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n))
              },
              function (t) {
                var r = n(e, t, this)
                if (r.done) return r.value
                var a = o(t),
                  s = String(this)
                if (!a.global) return u(a, s)
                for (var l, f = a.unicode, p = [], d = (a.lastIndex = 0); null !== (l = u(a, s)); ) {
                  var h = String(l[0])
                  "" === (p[d] = h) && (a.lastIndex = c(s, i(a.lastIndex), f)), d++
                }
                return 0 === d ? null : p
              },
            ]
          })
        },
        function (t, e, n) {
          var r = n(7),
            o = n(84),
            i = n(1)("species")
          t.exports = function (t, e) {
            var n,
              a = r(t).constructor
            return void 0 === a || null == (n = r(a)[i]) ? e : o(n)
          }
        },
        function (t, e, n) {
          "use strict"
          var r = n(2),
            o = n(66).trim
          r(
            {target: "String", proto: !0, forced: n(128)("trim")},
            {
              trim: function () {
                return o(this)
              },
            }
          )
        },
        function (t, e, n) {
          var r = n(0),
            o = n(67)
          t.exports = function (t) {
            return r(function () {
              return !!o[t]() || "​᠎" != "​᠎"[t]() || o[t].name !== t
            })
          }
        },
        function (t, e, n) {
          var r = n(2),
            o = n(130)
          r({target: "Object", stat: !0, forced: Object.assign !== o}, {assign: o})
        },
        function (t, e, n) {
          "use strict"
          var r = n(4),
            o = n(0),
            i = n(38),
            a = n(52),
            c = n(46),
            u = n(14),
            s = n(47),
            l = Object.assign,
            f = Object.defineProperty
          t.exports =
            !l ||
            o(function () {
              if (
                r &&
                1 !==
                  l(
                    {b: 1},
                    l(
                      f({}, "a", {
                        enumerable: !0,
                        get: function () {
                          f(this, "b", {value: 3, enumerable: !1})
                        },
                      }),
                      {b: 2}
                    )
                  ).b
              )
                return !0
              var t = {},
                e = {},
                n = Symbol(),
                o = "abcdefghijklmnopqrst"
              return (
                (t[n] = 7),
                o.split("").forEach(function (t) {
                  e[t] = t
                }),
                7 != l({}, t)[n] || i(l({}, e)).join("") != o
              )
            })
              ? function (t, e) {
                  for (var n = u(t), o = arguments.length, l = 1, f = a.f, p = c.f; l < o; ) for (var d, h = s(arguments[l++]), v = f ? i(h).concat(f(h)) : i(h), m = v.length, g = 0; g < m; ) (d = v[g++]), (r && !p.call(h, d)) || (n[d] = h[d])
                  return n
                }
              : l
        },
        function (t, e, n) {
          "use strict"
          var r,
            o = n(2),
            i = n(15).f,
            a = n(12),
            c = n(132),
            u = n(11),
            s = n(133),
            l = n(22),
            f = "".startsWith,
            p = Math.min,
            d = s("startsWith")
          o(
            {target: "String", proto: !0, forced: !((!l && !d && (r = i(String.prototype, "startsWith")) && !r.writable) || d)},
            {
              startsWith: function (t, e) {
                var n = String(u(this))
                c(t)
                var r = a(p(1 < arguments.length ? e : void 0, n.length)),
                  o = String(t)
                return f ? f.call(n, o, r) : n.slice(r, r + o.length) === o
              },
            }
          )
        },
        function (t, e, n) {
          var r = n(68)
          t.exports = function (t) {
            if (r(t)) throw TypeError("The method doesn't accept regular expressions")
            return t
          }
        },
        function (t, e, n) {
          var r = n(1)("match")
          t.exports = function (t) {
            var e = /./
            try {
              "/./"[t](e)
            } catch (n) {
              try {
                return (e[r] = !1), "/./"[t](e)
              } catch (t) {}
            }
            return !1
          }
        },
        function (t, e, n) {
          "use strict"
          var r = n(2),
            o = n(78).indexOf,
            i = n(89),
            a = n(17),
            c = [].indexOf,
            u = !!c && 1 / [1].indexOf(1, -0) < 0,
            s = i("indexOf"),
            l = a("indexOf", {ACCESSORS: !0, 1: 0})
          r(
            {target: "Array", proto: !0, forced: u || !s || !l},
            {
              indexOf: function (t, e) {
                return u ? c.apply(this, arguments) || 0 : o(this, t, 1 < arguments.length ? e : void 0)
              },
            }
          )
        },
        function (t, e, n) {
          "use strict"
          var r = n(2),
            o = n(136)
          r(
            {target: "String", proto: !0, forced: n(137)("bold")},
            {
              bold: function () {
                return o(this, "b", "", "")
              },
            }
          )
        },
        function (t, e, n) {
          var r = n(11),
            o = /"/g
          t.exports = function (t, e, n, i) {
            var a = String(r(t)),
              c = "<" + e
            return "" !== n && (c += " " + n + '="' + String(i).replace(o, "&quot;") + '"'), c + ">" + a + "</" + e + ">"
          }
        },
        function (t, e, n) {
          var r = n(0)
          t.exports = function (t) {
            return r(function () {
              var e = ""[t]('"')
              return e !== e.toLowerCase() || 3 < e.split('"').length
            })
          }
        },
        ,
        function (t, e, n) {
          "use strict"
          function r(t, e, n) {
            Object.keys(n).forEach(function (r) {
              var o,
                i,
                a = n[r],
                c = e[r],
                u =
                  c && ((i = c)[0] || i).nodeType
                    ? "element"
                    : null == (o = c)
                    ? "".concat(o)
                    : {}.toString
                        .call(o)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase()
              if (!new RegExp(a).test(u)) throw new Error("".concat(t.toUpperCase(), ": ") + 'Option "'.concat(r, '" provided type "').concat(u, '" ') + 'but expected type "'.concat(a, '".'))
            })
          }
          function o() {
            var t = window.jQuery
            return t && !document.body.hasAttribute("data-psa-no-jquery") ? t : null
          }
          function i(t, e) {
            var n,
              r = Object.keys(t)
            return (
              Object.getOwnPropertySymbols &&
                ((n = Object.getOwnPropertySymbols(t)),
                e &&
                  (n = n.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                  })),
                r.push.apply(r, n)),
              r
            )
          }
          function a(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {}
              e % 2
                ? i(Object(n), !0).forEach(function (e) {
                    var r, o, i
                    ;(r = t), (i = n[(o = e)]), o in r ? Object.defineProperty(r, o, {value: i, enumerable: !0, configurable: !0, writable: !0}) : (r[o] = i)
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : i(Object(n)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                  })
            }
            return t
          }
          function c(t) {
            return "true" === t || ("false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t))
          }
          function u(t) {
            return t.replace(/[A-Z]/g, function (t) {
              return "-".concat(t.toLowerCase())
            })
          }
          function s(t, e) {
            return (
              (function (t) {
                if (Array.isArray(t)) return t
              })(t) ||
              (function (t, e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                  var n = [],
                    r = !0,
                    o = !1,
                    i = void 0
                  try {
                    for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                  } catch (t) {
                    ;(o = !0), (i = t)
                  } finally {
                    try {
                      r || null == c.return || c.return()
                    } finally {
                      if (o) throw i
                    }
                  }
                  return n
                }
              })(t, e) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return l(t, e)
                  var n = Object.prototype.toString.call(t).slice(8, -1)
                  return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0
                }
              })(t, e) ||
              (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              })()
            )
          }
          function l(t, e) {
            ;(null == e || e > t.length) && (e = t.length)
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
            return r
          }
          function f(t, e) {
            return (e && "".concat(e, "::").concat(J++)) || t.uidEvent || J++
          }
          function p(t) {
            var e = f(t)
            return (t.uidEvent = e), (Q[e] = Q[e] || {}), Q[e]
          }
          function d(t, e, n) {
            for (var r = 2 < arguments.length && void 0 !== n ? n : null, o = Object.keys(t), i = 0, a = o.length; i < a; i++) {
              var c = t[o[i]]
              if (c.originalHandler === e && c.delegationSelector === r) return c
            }
            return null
          }
          function h(t, e, n) {
            var r = "string" == typeof e,
              o = r ? n : e,
              i = t.replace(q, ""),
              a = Z[i]
            return a && (i = a), -1 < tt.indexOf(i) || (i = t), [r, o, i]
          }
          function v(t, e, n, r, o) {
            var i, a, c, u, l, v, m, g, y, b, x, _, S, E
            "string" == typeof e &&
              t &&
              (n || ((n = r), (r = null)),
              (a = (i = s(h(e, n, r), 3))[0]),
              (c = i[1]),
              (u = i[2]),
              (m = d((v = (l = p(t))[u] || (l[u] = {})), c, a ? n : null))
                ? (m.oneOff = m.oneOff && o)
                : ((g = f(c, e.replace(K, ""))),
                  ((y = a
                    ? ((_ = t),
                      (S = n),
                      (E = r),
                      function t(e) {
                        for (var n = _.querySelectorAll(S), r = e.target; r && r !== this; r = r.parentNode) for (var o = n.length; o--; ) if (n[o] === r) return t.oneOff && et.off(_, e.type, E), E.apply(r, [e])
                        return null
                      })
                    : ((b = t),
                      (x = n),
                      function t(e) {
                        return t.oneOff && et.off(b, e.type, x), x.apply(b, [e])
                      })).delegationSelector = a ? n : null),
                  (y.originalHandler = c),
                  (y.oneOff = o),
                  (v[(y.uidEvent = g)] = y),
                  t.addEventListener(u, y, a)))
          }
          function m(t, e, n, r, o) {
            var i = d(e[n], r, o)
            i && (t.removeEventListener(n, i, Boolean(o)), delete e[n][i.uidEvent])
          }
          function g(t) {
            return (
              (function (t) {
                if (Array.isArray(t)) return y(t)
              })(t) ||
              (function (t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
              })(t) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return y(t, e)
                  var n = Object.prototype.toString.call(t).slice(8, -1)
                  return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0
                }
              })(t) ||
              (function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              })()
            )
          }
          function y(t, e) {
            ;(null == e || e > t.length) && (e = t.length)
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
            return r
          }
          function b(t) {
            return (b =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                  })(t)
          }
          function x(t, e) {
            var n,
              r = Object.keys(t)
            return (
              Object.getOwnPropertySymbols &&
                ((n = Object.getOwnPropertySymbols(t)),
                e &&
                  (n = n.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                  })),
                r.push.apply(r, n)),
              r
            )
          }
          function _(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {}
              e % 2
                ? x(Object(n), !0).forEach(function (e) {
                    var r, o, i
                    ;(r = t), (i = n[(o = e)]), o in r ? Object.defineProperty(r, o, {value: i, enumerable: !0, configurable: !0, writable: !0}) : (r[o] = i)
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : x(Object(n)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                  })
            }
            return t
          }
          function S(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n]
              ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
          }
          n.r(e), n(32), n(56), n(57), n(26), n(58), n(110), n(27), n(41), n(114), n(94), n(95), n(42), n(29), n(18), n(30), n(44), n(45), n(31), n(64), n(65), n(100), n(121), n(123), n(125), n(102), n(127), document.documentElement.dir
          var E,
            O,
            w =
              ((E = {}),
              (O = 1),
              {
                set: function (t, e, n) {
                  void 0 === t[e] && ((t[e] = {key: e, id: O}), O++), (E[t[e].id] = n)
                },
                get: function (t, e) {
                  if (!t || void 0 === t[e]) return null
                  var n = t[e]
                  return n.key === e ? E[n.id] : null
                },
                delete: function (t, e) {
                  var n
                  void 0 === t[e] || ((n = t[e]).key === e && (delete E[n.id], delete t[e]))
                },
              }),
            j = {
              setData: function (t, e, n) {
                w.set(t, e, n)
              },
              getData: function (t, e) {
                return w.get(t, e)
              },
              removeData: function (t, e) {
                w.delete(t, e)
              },
            }
          n(69), n(129), n(131)
          var A,
            k,
            T = function (t, e, n) {
              t.setAttribute("data-psa-".concat(u(e)), n)
            },
            P = function (t, e) {
              t.removeAttribute("data-psa-".concat(u(e)))
            },
            z = function (t) {
              if (!t) return {}
              var e = a({}, t.dataset)
              return (
                Object.keys(e)
                  .filter(function (t) {
                    return t.startsWith("psa")
                  })
                  .forEach(function (t) {
                    var n = (n = t.replace(/^psa/, "")).charAt(0).toLowerCase() + n.slice(1, n.length)
                    e[n] = c(e[t])
                  }),
                e
              )
            },
            I = function (t, e) {
              return c(t.getAttribute("data-psa-".concat(u(e))))
            },
            C = function (t) {
              var e = t.getBoundingClientRect()
              return {top: e.top + document.body.scrollTop, left: e.left + document.body.scrollLeft}
            },
            M = function (t) {
              return {top: t.offsetTop, left: t.offsetLeft}
            },
            L = function (t, e) {
              Object.assign(t.style, e)
            },
            R = function (t, e) {
              t && (t.classList.contains(e) ? t.classList.remove(e) : t.classList.add(e))
            },
            D = function (t, e) {
              t.classList.contains(e) || t.classList.add(e)
            },
            N = function (t, e) {
              Object.keys(e).forEach(function (n) {
                t.style[n] = e[n]
              })
            },
            F = function (t, e) {
              t.classList.contains(e) && t.classList.remove(e)
            },
            B = function (t, e) {
              return t.classList.contains(e)
            },
            U = (n(134), n(103), Element.prototype.querySelectorAll),
            H = Element.prototype.querySelector,
            G =
              ((A = new CustomEvent("Bootstrap", {cancelable: !0})),
              (k = document.createElement("div")).addEventListener("Bootstrap", function () {
                return null
              }),
              A.preventDefault(),
              k.dispatchEvent(A),
              A.defaultPrevented),
            $ = /:scope\b/
          !(function () {
            var t = document.createElement("div")
            try {
              t.querySelectorAll(":scope *")
            } catch (t) {
              return !1
            }
            return !0
          })() &&
            ((U = function (t) {
              if (!$.test(t)) return this.querySelectorAll(t)
              var e = Boolean(this.id)
              e ||
                (this.id = (function (t) {
                  for (; (t += Math.floor(1e6 * Math.random())), document.getElementById(t); );
                  return t
                })("scope"))
              var n = null
              try {
                ;(t = t.replace($, "#".concat(this.id))), (n = this.querySelectorAll(t))
              } finally {
                e || this.removeAttribute("id")
              }
              return n
            }),
            (H = function (t) {
              if (!$.test(t)) return this.querySelector(t)
              var e = W.call(this, t)
              return void 0 !== e[0] ? e[0] : null
            }))
          var W = U,
            V = H,
            Y = o(),
            K = /[^.]*(?=\..*)\.|.*/,
            q = /\..*/,
            X = /::\d+$/,
            Q = {},
            J = 1,
            Z = {mouseenter: "mouseover", mouseleave: "mouseout"},
            tt = [
              "click",
              "dblclick",
              "mouseup",
              "mousedown",
              "contextmenu",
              "mousewheel",
              "DOMMouseScroll",
              "mouseover",
              "mouseout",
              "mousemove",
              "selectstart",
              "selectend",
              "keydown",
              "keypress",
              "keyup",
              "orientationchange",
              "touchstart",
              "touchmove",
              "touchend",
              "touchcancel",
              "pointerdown",
              "pointermove",
              "pointerup",
              "pointerleave",
              "pointercancel",
              "gesturestart",
              "gesturechange",
              "gestureend",
              "focus",
              "blur",
              "change",
              "reset",
              "select",
              "submit",
              "focusin",
              "focusout",
              "load",
              "unload",
              "beforeunload",
              "resize",
              "move",
              "DOMContentLoaded",
              "readystatechange",
              "error",
              "abort",
              "scroll",
            ],
            et = {
              on: function (t, e, n, r) {
                v(t, e, n, r, !1)
              },
              one: function (t, e, n, r) {
                v(t, e, n, r, !0)
              },
              off: function (t, e, n, r) {
                if ("string" == typeof e && t) {
                  var o = s(h(e, n, r), 3),
                    i = o[0],
                    a = o[1],
                    c = o[2],
                    u = c !== e,
                    l = p(t),
                    f = "." === e.charAt(0)
                  if (void 0 === a) {
                    f &&
                      Object.keys(l).forEach(function (n) {
                        var r, o, i, a, c
                        ;(r = t),
                          (o = l),
                          (i = n),
                          (a = e.slice(1)),
                          (c = o[i] || {}),
                          Object.keys(c).forEach(function (t) {
                            var e
                            ;-1 < t.indexOf(a) && m(r, o, i, (e = c[t]).originalHandler, e.delegationSelector)
                          })
                      })
                    var d = l[c] || {}
                    Object.keys(d).forEach(function (n) {
                      var r,
                        o = n.replace(X, "")
                      ;(!u || -1 < e.indexOf(o)) && m(t, l, c, (r = d[n]).originalHandler, r.delegationSelector)
                    })
                  } else {
                    if (!l || !l[c]) return
                    m(t, l, c, a, i ? n : null)
                  }
                }
              },
              trigger: function (t, e, n) {
                if ("string" != typeof e || !t) return null
                var r,
                  o = e.replace(q, ""),
                  i = e !== o,
                  a = -1 < tt.indexOf(o),
                  c = !0,
                  u = !0,
                  s = !1,
                  l = null
                return (
                  i && Y && ((r = Y.Event(e, n)), Y(t).trigger(r), (c = !r.isPropagationStopped()), (u = !r.isImmediatePropagationStopped()), (s = r.isDefaultPrevented())),
                  a ? (l = document.createEvent("HTMLEvents")).initEvent(o, c, !0) : (l = new CustomEvent(e, {bubbles: c, cancelable: !0})),
                  void 0 !== n &&
                    Object.keys(n).forEach(function (t) {
                      Object.defineProperty(l, t, {
                        get: function () {
                          return n[t]
                        },
                      })
                    }),
                  s &&
                    (l.preventDefault(),
                    G ||
                      Object.defineProperty(l, "defaultPrevented", {
                        get: function () {
                          return !0
                        },
                      })),
                  u && t.dispatchEvent(l),
                  l.defaultPrevented && void 0 !== r && r.preventDefault(),
                  l
                )
              },
            },
            nt = et,
            rt = {
              closest: function (t, e) {
                return t.closest(e)
              },
              matches: function (t, e) {
                return t.matches(e)
              },
              find: function (t, e) {
                var n,
                  r = 1 < arguments.length && void 0 !== e ? e : document.documentElement
                return (n = []).concat.apply(n, g(W.call(r, t)))
              },
              findOne: function (t, e) {
                var n = 1 < arguments.length && void 0 !== e ? e : document.documentElement
                return V.call(n, t)
              },
              children: function (t, e) {
                var n,
                  r = (n = []).concat.apply(n, g(t.children))
                return r.filter(function (t) {
                  return t.matches(e)
                })
              },
              parents: function (t, e) {
                for (var n = [], r = t.parentNode; r && r.nodeType === Node.ELEMENT_NODE && 3 !== r.nodeType; ) this.matches(r, e) && n.push(r), (r = r.parentNode)
                return n
              },
              prev: function (t, e) {
                for (var n = t.previousElementSibling; n; ) {
                  if (n.matches(e)) return [n]
                  n = n.previousElementSibling
                }
                return []
              },
              next: function (t, e) {
                for (var n = t.nextElementSibling; n; ) {
                  if (this.matches(n, e)) return [n]
                  n = n.nextElementSibling
                }
                return []
              },
            },
            ot =
              (n(135),
              {
                textarea: function () {
                  return '<textarea class="wysiwyg-textarea"></textarea>'
                },
                contentDiv: function () {
                  return '<div class="wysiwyg-content" contenteditable="true"></div>'
                },
                toolBar: function (t) {
                  var e = t.wysiwygTranslations,
                    n = t.wysiwygColors,
                    r = t.wysiwygStylesSection,
                    o = t.wysiwygFormattingSection,
                    i = t.wysiwygJustifySection,
                    a = t.wysiwygListsSection,
                    c = t.wysiwygLinksSection,
                    u = t.wysiwygShowCodeSection,
                    s = t.wysiwygUndoRedoSection,
                    l = t.wysiwygFixed,
                    f = t.wysiwygFixedOffsetTop,
                    p = e
                  return '<div class="wysiwyg-toolbar btn-toolbar '
                    .concat(l ? "sticky-top" : "", '" style="top: ')
                    .concat(f, 'px" role="toolbar" aria-label="Toolbar with button groups">\n      ')
                    .concat(r ? ot.stylesSection(p) : "", "\n      ")
                    .concat(o ? ot.formattingSection(p, n) : "", "\n      ")
                    .concat(i ? ot.justifySection(p) : "", "\n      ")
                    .concat(a ? ot.listsSection(p) : "", "\n      ")
                    .concat(c ? ot.linksSection(p) : "", "\n      ")
                    .concat(u ? ot.showCodeSection(p) : "", "\n      ")
                    .concat(s ? ot.undoRedoSection(p) : "", "\n    </div>")
                },
                stylesSection: function (t) {
                  var e = t.textStyle,
                    n = t.paragraph,
                    r = t.heading,
                    o = t.preformatted
                  return '\n      <div class="wysiwyg-toolbar-group">\n        <div class="mx-1 dropdown">\n          <button\n            class="btn btn-sm btn-light wysiwyg-btn dropdown-toggle shadow-0"\n            type="button"\n            data-psa-toggle="dropdown"\n            aria-expanded="false"\n          >\n            '
                    .concat(
                      e,
                      '\n          </button>\n          <ul class="wysiwyg-toolbar-options-list dropdown-menu" aria-labelledby="dropdownMenuButton">\n            <li><a class="dropdown-item" href="#!" data-psa-cmd="formatBlock" data-psa-arg="p">'
                    )
                    .concat(n, '</a></li>\n            <li><a class="dropdown-item" href="#!" data-psa-cmd="formatBlock" data-psa-arg="h1">')
                    .concat(r, ' 1</a></li>\n            <li><a class="dropdown-item" href="#!" data-psa-cmd="formatBlock" data-psa-arg="h2">')
                    .concat(r, ' 2</a></li>\n            <li><a class="dropdown-item" href="#!" data-psa-cmd="formatBlock" data-psa-arg="h3">')
                    .concat(r, ' 3</a></li>\n            <li><a class="dropdown-item" href="#!" data-psa-cmd="formatBlock" data-psa-arg="h4">')
                    .concat(r, ' 4</a></li>\n            <li><a class="dropdown-item" href="#!" data-psa-cmd="formatBlock" data-psa-arg="h5">')
                    .concat(r, ' 5</a></li>\n            <li><a class="dropdown-item" href="#!" data-psa-cmd="formatBlock" data-psa-arg="h6">')
                    .concat(r, ' 6</a></li>\n            <li><a class="dropdown-item" href="#!" data-psa-cmd="formatBlock" data-psa-arg="pre">')
                    .concat(o, "</a></li>\n          </ul>\n        </div>\n      </div>\n    ")
                },
                formattingSection: function (t, e) {
                  var n = t.bold,
                    r = t.italic,
                    o = t.underline,
                    i = t.strikethrough,
                    a = t.textcolor,
                    c = t.textBackgroundColor
                  return '\n      <div class="wysiwyg-toolbar-group">\n        <div class="mx-1 btn-group btn-group-sm shadow-0" role="group">\n          <button data-psa-tooltip="tooltip" data-psa-placement="bottom" type="button" class="btn btn-light wysiwyg-btn" data-psa-cmd="bold" title="'
                    .concat(n, '"><i class="fas fa-bold"></i></button>\n          <button data-psa-tooltip="tooltip" data-psa-placement="bottom" type="button" class="btn btn-light wysiwyg-btn" data-psa-cmd="italic" title="')
                    .concat(r, '"><i class="fas fa-italic"></i></button>\n          <button data-psa-tooltip="tooltip" data-psa-placement="bottom" type="button" class="btn btn-light wysiwyg-btn" data-psa-cmd="underline" title="')
                    .concat(o, '"><i class="fas fa-underline"></i></button>\n          <button data-psa-tooltip="tooltip" data-psa-placement="bottom" type="button" class="btn btn-light wysiwyg-btn" data-psa-cmd="strikethrough" title="')
                    .concat(i, '"><i class="fas fa-strikethrough"></i></button>\n          <div data-psa-tooltip="tooltip" data-psa-placement="bottom" title="')
                    .concat(
                      a,
                      '" class="btn-group btn-group-sm" role="group">\n            <button class="dropdown-toggle btn btn-light wysiwyg-btn" data-psa-toggle="dropdown" aria-expanded="false"><i class="fas fa-font"></i></button>\n            <div class="dropdown-menu">\n              '
                    )
                    .concat(ot.textColorPalette(e, "foreColor"), '\n            </div>\n          </div>\n          <div data-psa-tooltip="tooltip" data-psa-placement="bottom" title="')
                    .concat(
                      c,
                      '" class="btn-group btn-group-sm" role="group">\n            <button class="dropdown-toggle btn btn-light wysiwyg-btn" data-psa-toggle="dropdown" aria-expanded="false"><i class="fas fa-paint-brush"></i></button>\n            <div class="dropdown-menu">\n              '
                    )
                    .concat(ot.textColorPalette(e, "backColor"), "\n            </div>\n          </div>\n        </div>\n      </div>\n    ")
                },
                textColorPalette: function (t, e) {
                  var n = ""
                  return (
                    t.forEach(function (t) {
                      n += '<button type="button" class="btn btn-link wysiwyg-color" data-psa-ripple-color="dark" data-psa-cmd='.concat(e, ' data-psa-arg="').concat(t, '" style="background: ').concat(t, ';"></button>')
                    }),
                    n
                  )
                },
                justifySection: function (t) {
                  var e = t.alignCenter,
                    n = t.alignLeft,
                    r = t.alignRight,
                    o = t.alignJustify
                  return '\n      <div class="wysiwyg-toolbar-group">\n        <div class="mx-1 btn-group btn-group-sm shadow-0" role="group">\n          <button data-psa-tooltip="tooltip" data-psa-placement="bottom" type="button" class="btn btn-light wysiwyg-btn" data-psa-cmd="justifyleft" title="'
                    .concat(n, '"><i class="fas fa-align-left"></i></button>\n          <button data-psa-tooltip="tooltip" data-psa-placement="bottom" type="button" class="btn btn-light wysiwyg-btn" data-psa-cmd="justifycenter" title="')
                    .concat(e, '"><i class="fas fa-align-center"></i></button>\n          <button data-psa-tooltip="tooltip" data-psa-placement="bottom" type="button" class="btn btn-light wysiwyg-btn" data-psa-cmd="justifyright" title="')
                    .concat(r, '"><i class="fas fa-align-right"></i></button>\n          <button data-psa-tooltip="tooltip" data-psa-placement="bottom" type="button" class="btn btn-light wysiwyg-btn" data-psa-cmd="justifyfull" title="')
                    .concat(o, '"><i class="fas fa-align-justify"></i></button>\n        </div>\n      </div>\n    ')
                },
                listsSection: function (t) {
                  var e = t.unorderedList,
                    n = t.orderedList,
                    r = t.decreaseIndent,
                    o = t.increaseIndent
                  return '\n      <div class="wysiwyg-toolbar-group">\n        <div class="mx-1 btn-group btn-group-sm shadow-0" role="group">\n          <button data-psa-tooltip="tooltip" data-psa-placement="bottom" type="button" class="btn btn-light wysiwyg-btn" data-psa-cmd="insertUnorderedList" title="'
                    .concat(e, '"><i class="fas fa-list-ul"></i></button>\n          <button data-psa-tooltip="tooltip" data-psa-placement="bottom" type="button" class="btn btn-light wysiwyg-btn" data-psa-cmd="insertOrderedList" title="')
                    .concat(n, '"><i class="fas fa-list-ol"></i></button>\n          <button data-psa-tooltip="tooltip" data-psa-placement="bottom" type="button" class="btn btn-light wysiwyg-btn" data-psa-cmd="outdent" title="')
                    .concat(r, '"><i class="fas fa-outdent"></i></button>\n          <button data-psa-tooltip="tooltip" data-psa-placement="bottom" type="button" class="btn btn-light wysiwyg-btn" data-psa-cmd="indent" title="')
                    .concat(o, '"><i class="fas fa-indent"></i></button>\n        </div>\n      </div>\n    ')
                },
                linksSection: function (t) {
                  var e = t.insertLink,
                    n = t.addLinkHead,
                    r = t.linkUrlLabel,
                    o = t.linkDescription,
                    i = t.okButton,
                    a = t.cancelButton,
                    c = t.insertPicture,
                    u = t.addImageHead,
                    s = t.imageUrlLabel,
                    l = t.insertHorizontalRule
                  return '\n      <div class=" wysiwyg-toolbar-group">\n        <div id="links-section" class="mx-1 btn-group btn-group-sm shadow-0 dropdown" role="group">\n          <div data-psa-tooltip="tooltip" data-psa-placement="bottom" title="'
                    .concat(
                      e,
                      '" class="btn-group btn-group-sm" role="group">\n            <button class="dropdown-toggle btn btn-light wysiwyg-btn" data-psa-display="static" data-psa-toggle="dropdown" aria-expanded="false"><i class="fas fa-paperclip"></i></button>\n            <div class="dropdown-menu dropdown-menu-sm-end" style="min-width: 25vw;">\n              <form class="px-4 py-3">\n                <h5 class="mb-3">'
                    )
                    .concat(n, '</h5>\n                <div class="form-outline mb-4">\n                  <input type="url" class="form-control" />\n                  <label class="form-label" for="link-url">')
                    .concat(r, '</label>\n                </div>\n                <div class="form-outline mb-4">\n                  <input type="text" class="form-control" />\n                  <label class="form-label" for="link-description">')
                    .concat(o, '</label>\n                </div>\n                <div class="d-flex justify-content-end">\n                  <button type="button" data-psa-cmd="insertlink" class="btn btn-primary">')
                    .concat(i, '</button>\n                  <button type="button" data-psa-cmd="close-dropdown" class="btn btn-primary ms-2">')
                    .concat(a, '</button>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div data-psa-tooltip="tooltip" data-psa-placement="bottom" title="')
                    .concat(
                      c,
                      '" class="btn-group btn-group-sm" role="group">\n            <button class="dropdown-toggle btn btn-light wysiwyg-btn" data-psa-display="static" data-psa-toggle="dropdown"><i class="far fa-image"></i></button>\n            <div class="dropdown-menu dropdown-menu-sm-end" style="min-width: 25vw;">\n              <form class="px-4 py-3">\n                <h5 class="mb-3">'
                    )
                    .concat(u, '</h5>\n                <div class="form-outline mb-4">\n                  <input type="url" class="form-control" />\n                  <label class="form-label" for="image-url">')
                    .concat(s, '</label>\n                </div>\n                <div class="d-flex justify-content-end">\n                  <button type="button" data-psa-cmd="insertpicture" class="btn btn-primary">')
                    .concat(i, '</button>\n                  <button type="button" data-psa-cmd="close-dropdown" class="btn btn-primary ms-2">')
                    .concat(
                      a,
                      '</button>\n                </div>\n              </form>\n            </div>\n          </div>\n          <button data-psa-tooltip="tooltip" data-psa-placement="bottom" class="btn btn-light wysiwyg-btn" data-psa-cmd="insertHorizontalRule" title="'
                    )
                    .concat(l, '"><i class="fas fa-grip-lines"></i></button>\n        </div>\n      </div>\n    ')
                },
                showCodeSection: function (t) {
                  return '\n      <div class="ms-auto wysiwyg-toolbar-group">\n        <div class="btn-group mx-1 btn-group-sm shadow-0" role="group">\n          <button data-psa-tooltip="tooltip" data-psa-placement="bottom" type="button" class="btn btn-sm btn-light wysiwyg-btn shadow-0" data-psa-cmd="toggleHTML" title="'.concat(
                    t.showHTML,
                    '"><i class="fas fa-code"></i></button>\n        </div>\n      </div>\n    '
                  )
                },
                undoRedoSection: function (t) {
                  var e = t.undo,
                    n = t.redo
                  return '\n    <div class="wysiwyg-toolbar-group">\n      <div class="btn-group mx-1 btn-group-sm shadow-0" role="group">\n        <button data-psa-tooltip="tooltip" data-psa-placement="bottom" type="button" class="btn btn-light wysiwyg-btn" data-psa-cmd="undo" title="'
                    .concat(e, '"><i class="fas fa-angle-left"></i></button>\n        <button data-psa-tooltip="tooltip" data-psa-placement="bottom" type="button" class="btn btn-light wysiwyg-btn" data-psa-cmd="redo" title="')
                    .concat(n, '"><i class="fas fa-angle-right"></i></button>\n      </div>\n    </div>\n  ')
                },
                toolbarToggler: function (t) {
                  return '\n    <div class="ms-auto wysiwyg-toolbar-group wysiwyg-toolbar-toggler">\n      <div data-psa-tooltip="tooltip" data-psa-placement="bottom" title="'.concat(
                    t.moreOptions,
                    '" class="mx-1 dropdown">\n        <button class="dropdown-toggle btn btn-sm btn-light wysiwyg-btn shadow-0" data-psa-display="static" data-psa-toggle="dropdown" data-psa-dropdown-animation="off"><i class="fas fa-ellipsis-h"></i></button>\n        <div class="dropdown-menu dropdown-menu-end">\n\n        </div>\n      </div>\n    </div>\n  '
                  )
                },
              }),
            it = ot,
            at,
            ct = "wysiwyg",
            ut = "psa.".concat(ct),
            st = ".".concat(ut),
            lt = "".concat(ct, "-content"),
            ft = "".concat(ct, "-toolbar"),
            pt = "".concat(ct, "-toolbar-toggler"),
            dt = "".concat(ct, "-toolbar-group"),
            ht = "".concat(ct, "-hide"),
            vt = "".concat(ct, "-show-html"),
            mt = "resize".concat(st),
            gt = "click".concat(st),
            yt = "mousedown".concat(st),
            bt = "hide.bs.dropdown",
            xt = "[data-psa-cmd]",
            _t = ".form-outline",
            St = ".dropdown",
            Et = ".dropdown-menu",
            Ot = '[type="url"]',
            wt = '[type="text"]',
            jt = "#links-section",
            At = '[data-psa-toggle="dropdown"]',
            kt = ".".concat(ct),
            Tt = ".".concat(lt),
            Pt = ".".concat(ht),
            zt = ".".concat(ft),
            It = ".".concat(pt),
            Ct = ".".concat(dt),
            Mt = "".concat(It, " ").concat(St),
            Lt = "".concat(It, " ").concat(".dropdown-toggle"),
            Rt = "".concat(It, " ").concat(Et),
            Dt = "".concat(Ct, " ").concat(xt),
            Nt = "".concat(_t, " ").concat("input"),
            Ft = "".concat(Ct).concat(Pt),
            Bt = {
              wysiwygColors: ["#1266F1", "#B23CFD", "#00B74A", "#F93154", "#FFA900", "#39C0ED", "#FBFBFB", "#262626"],
              wysiwygTranslations: {
                paragraph: "Paragraph",
                textStyle: "Text style",
                heading: "Heading",
                preformatted: "Preformatted",
                bold: "Bold",
                italic: "Italic",
                strikethrough: "Strikethrough",
                underline: "Underline",
                textcolor: "Color",
                textBackgroundColor: "Background Color",
                alignLeft: "Align Left",
                alignCenter: "Align Center",
                alignRight: "Align Right",
                alignJustify: "Align Justify",
                insertLink: "Insert Link",
                insertPicture: "Insert Picture",
                unorderedList: "Unordered List",
                orderedList: "Numbered List",
                increaseIndent: "Increase Indent",
                decreaseIndent: "Decrease Indent",
                insertHorizontalRule: "Insert Horizontal Line",
                showHTML: "Show HTML code",
                undo: "Undo",
                redo: "Redo",
                addLinkHead: "Add Link",
                addImageHead: "Add Image",
                linkUrlLabel: "Enter a URL:",
                linkDescription: "Enter a description",
                imageUrlLabel: "Enter a URL:",
                okButton: "OK",
                cancelButton: "cancel",
                moreOptions: "Show More Options",
              },
              wysiwygStylesSection: !0,
              wysiwygFormattingSection: !0,
              wysiwygJustifySection: !0,
              wysiwygListsSection: !0,
              wysiwygLinksSection: !0,
              wysiwygShowCodeSection: !0,
              wysiwygUndoRedoSection: !0,
              wysiwygFixed: !1,
              wysiwygFixedOffsetTop: 0,
            },
            Ut = {
              wysiwygColors: "array",
              wysiwygTranslations: "object",
              wysiwygStylesSection: "boolean",
              wysiwygFormattingSection: "boolean",
              wysiwygJustifySection: "boolean",
              wysiwygListsSection: "boolean",
              wysiwygLinksSection: "boolean",
              wysiwygShowCodeSection: "boolean",
              wysiwygUndoRedoSection: "boolean",
              wysiwygFixed: "boolean",
              wysiwygFixedOffsetTop: "number",
            },
            Ht = (function () {
              function t(e) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                !(function (t, e) {
                  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                })(this, t),
                  (this._element = e),
                  (this._content = ""),
                  (this._toolbar = ""),
                  (this._toolbarToggler = ""),
                  (this._options = this._getConfig(n)),
                  (this._isCodeShown = !1),
                  (this._toolsWidth = []),
                  (this._selection = {}),
                  (this._UUID = this._randomUUID()),
                  this._element && (this._init(), j.setData(e, ut, this))
              }
              var e, n, o
              return (
                (e = t),
                (o = [
                  {
                    key: "jQueryInterface",
                    value: function (e, n) {
                      return this.each(function () {
                        var r = j.getData(this, ut),
                          o = "object" === b(e) && e
                        if ((r || !/dispose|hide/.test(e)) && ((r = r || new t(this, o)), "string" == typeof e)) {
                          if (void 0 === r[e]) throw new TypeError('No method named "'.concat(e, '"'))
                          r[e](n)
                        }
                      })
                    },
                  },
                  {
                    key: "getInstance",
                    value: function (t) {
                      return j.getData(t, ut)
                    },
                  },
                  {
                    key: "NAME",
                    get: function () {
                      return ct
                    },
                  },
                ]),
                (n = [
                  {
                    key: "dispose",
                    value: function () {
                      j.removeData(this._element, ut),
                        nt.off(window, mt),
                        nt.off(this._content, "input"),
                        rt.find(xt, this._element).forEach(function (t) {
                          nt.off(t, gt)
                        }),
                        this._toolbarToggler && (nt.off(rt.findOne(Mt), bt), nt.off(rt.findOne(Mt), yt)),
                        (this._element = null),
                        (this._options = null),
                        (this._isCodeShown = null),
                        (this._toolbarToggler = null),
                        (this._toolsWidth = null),
                        (this._selection = null),
                        (this._UUID = null)
                    },
                  },
                  {
                    key: "getCode",
                    value: function () {
                      return this._content.innerHTML
                    },
                  },
                  {
                    key: "_init",
                    value: function () {
                      T(this._element, "uuid", this._UUID)
                      var t = this._element.innerHTML,
                        e = document.createElement("div")
                      e.innerHTML = it.contentDiv()
                      var n = rt.children(e, Tt)[0]
                      ;(this._element.innerHTML = ""),
                        this._element.insertAdjacentHTML("beforebegin", it.textarea()),
                        this._element.insertAdjacentHTML("beforeend", it.toolBar(this._options)),
                        this._element.append(n),
                        (this._content = rt.findOne(Tt, this._element)),
                        (this._toolbar = rt.findOne(zt, this._element)),
                        (this._content.innerHTML = t),
                        this._updateToolbar(),
                        rt.find(_t, this._toolbar).forEach(function (t) {
                          new psa.Input(t).init()
                        })
                      var r = rt.find("".concat(Ct, ":not(").concat(It, ") ").concat(xt), this._element),
                        o = rt.find(jt, this._element)
                      this._initTooltips(this._toolbar), this._initDropdowns(this._toolbar), this._onActionButtonClick(r), this._onInput(), this._onWindowResize(), this._onBlur(), this._onOpenDropdown(o)
                    },
                  },
                  {
                    key: "_onInput",
                    value: function () {
                      var t = this
                      nt.on(this._content, "input", function () {
                        rt.prev(t._element, ".wysiwyg-textarea")[0].value = t._content.innerHTML
                      })
                    },
                  },
                  {
                    key: "_onWindowResize",
                    value: function () {
                      nt.on(window, mt, this._updateToolbar.bind(this))
                    },
                  },
                  {
                    key: "_onActionButtonClick",
                    value: function (t) {
                      var e = this
                      t.forEach(function (t) {
                        nt.on(t, yt, function (n) {
                          n.preventDefault()
                          var r,
                            o,
                            i = I(t, "cmd"),
                            a = "close-dropdown" === i
                          ;("insertlink" !== i && "insertpicture" !== i && !a) ||
                            ((r = t.closest(Et).previousElementSibling),
                            psa.Dropdown.getInstance(r).hide(),
                            e._toolbarToggler && ((o = rt.parents(e._toolbarToggler, St)[0]), nt.off(o, bt), psa.Dropdown.getInstance(e._toolbarToggler).hide(), e._onCloseDropdown(o))),
                            a || (e._performAction(n.target), e._content.focus())
                        })
                      })
                    },
                  },
                  {
                    key: "_onBlur",
                    value: function () {
                      var t = this
                      nt.on(this._content, "blur", function () {
                        var e = document.getSelection()
                        ;(t._selection.focusOffset = e.focusOffset), (t._selection.focusNode = e.focusNode), (t._selection.anchorOffset = e.anchorOffset), (t._selection.anchorNode = e.anchorNode)
                      })
                    },
                  },
                  {
                    key: "_onOpenDropdown",
                    value: function (t) {
                      var e = this
                      t.forEach(function (t) {
                        nt.on(t, "show.bs.dropdown", function (t) {
                          var n = document.getSelection()
                          n.baseNode || e._content.focus()
                          var r = n.baseNode.parentElement.href,
                            o = n.toString(),
                            i = t.target.nextElementSibling,
                            a = rt.findOne(xt, i),
                            c = "insertpicture" === I(a, "cmd")
                          r && (rt.findOne(Ot, i).value = r),
                            c || (rt.findOne(wt, i).value = o),
                            i.querySelectorAll(Nt).forEach(function (t) {
                              t.dispatchEvent(new Event("blur"))
                            })
                        })
                      })
                    },
                  },
                  {
                    key: "_onCloseDropdown",
                    value: function (t) {
                      nt.on(t, bt, function (t) {
                        var e = document.activeElement,
                          n = rt.parents(e, Et)[0],
                          r = t.target.parentElement.classList.contains(pt)
                        n && r && t.preventDefault()
                      })
                    },
                  },
                  {
                    key: "_isContentFocused",
                    value: function () {
                      var t = document.activeElement,
                        e = t ? rt.parents(t, kt)[0] : ""
                      return (e ? I(e, "uuid") : "") === this._UUID
                    },
                  },
                  {
                    key: "_updateToolbar",
                    value: function () {
                      var t = this,
                        e = this._content.offsetWidth,
                        n = rt.find("".concat(Ct, ":not(").concat(It, ")"), this._element),
                        r = 0
                      this._toolbarToggler && (r += this._toolbarToggler.offsetWidth),
                        n.forEach(function (n, o) {
                          var i = n.classList.contains(ht)
                          ;(r += n.offsetWidth || t._toolsWidth[o]),
                            e < r && !i ? ((t._toolsWidth[o] = n.offsetWidth), D(n, ht), t._toolbarToggler || t._createToolbarToggler(), t._updateToolbarTogglerMenu()) : r < e && i && (F(n, ht), t._updateToolbarTogglerMenu())
                        })
                    },
                  },
                  {
                    key: "_randomUUID",
                    value: function () {
                      var t = new Date().getTime()
                      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                        var n = (t + 16 * Math.random()) % 16 | 0
                        return (t = Math.floor(t / 16)), ("x" == e ? n : (3 & n) | 8).toString(16)
                      })
                    },
                  },
                  {
                    key: "_createToolbarToggler",
                    value: function () {
                      this._toolbar.insertAdjacentHTML("beforeend", it.toolbarToggler(this._options.wysiwygTranslations)), (this._toolbarToggler = rt.findOne(Lt, this._toolbar))
                      var t = rt.parents(this._toolbarToggler, St)[0]
                      this._initDropdowns(t), this._onCloseDropdown(t), this._updateToolbar()
                    },
                  },
                  {
                    key: "_updateToolbarTogglerMenu",
                    value: function () {
                      var t = rt.findOne(Rt, this._element),
                        e = rt.find(Ft, this._element)
                      ;(t.innerHTML = ""),
                        e.forEach(function (e) {
                          var n = rt.children(e, "div")[0].cloneNode(!0)
                          t.appendChild(n)
                        })
                      var n = rt.find(Dt, t),
                        r = rt.find("".concat(jt, ":not(").concat(ht, ")"), this._element)
                      this._onOpenDropdown(r), this._onActionButtonClick(n), this._initDropdowns(t), this._initTooltips(t), 0 === t.childNodes.length && this._removeToolbarToggler()
                    },
                  },
                  {
                    key: "_initDropdowns",
                    value: function (t) {
                      rt.find(At, t).map(function (t) {
                        return psa.Dropdown.getInstance(t) || new psa.Dropdown(t)
                      })
                    },
                  },
                  {
                    key: "_initTooltips",
                    value: function (t) {
                      rt.find('[data-psa-tooltip="tooltip"]', t).forEach(function (t) {
                        var e = (e = psa.Tooltip.getInstance(t)) || new psa.Tooltip(t, {trigger: "manual"})
                        t.addEventListener("mouseenter", function (t) {
                          var n = rt.findOne(At, t.target)
                          ;(n && n.classList.contains("show")) || e.show()
                        }),
                          t.addEventListener("mouseleave", function () {
                            e.hide()
                          })
                      })
                    },
                  },
                  {
                    key: "_removeToolbarToggler",
                    value: function () {
                      this._toolbarToggler.closest(It).remove(), (this._toolbarToggler = "")
                    },
                  },
                  {
                    key: "_performAction",
                    value: function (t) {
                      this._isContentFocused() || (this._content.focus(), document.execCommand("selectAll", !1, null), document.getSelection().collapseToEnd())
                      var e,
                        n,
                        r,
                        o,
                        i,
                        a,
                        c,
                        u,
                        s,
                        l = t.closest(xt),
                        f = I(l, "cmd"),
                        p = I(l, "arg")
                      ;("insertlink" !== f && "insertpicture" !== f) ||
                        ((e = t.closest(Et)),
                        (n = rt.findOne(Ot, e)),
                        (r = rt.findOne(wt, e)),
                        (o = document.getSelection()),
                        (a = (i = this._selection).anchorNode),
                        (c = i.anchorOffset),
                        (u = i.focusNode),
                        (s = i.focusOffset),
                        r ? ((p = '<a href="'.concat(n.value, '" target="_blank">').concat(r.value, "</a>")), (r.value = "")) : (p = '<img src="'.concat(n.value, '" target="_blank" class="img-fluid" />')),
                        (f = "insertHTML"),
                        o.setBaseAndExtent(a, c, u, s),
                        (n.value = "")),
                        "toggleHTML" !== f
                          ? document.execCommand(f, !1, p)
                          : this._isCodeShown
                          ? ((this._content.innerHTML = this._content.textContent), this._content.classList.remove(vt), (this._isCodeShown = !1), F(l, "active"))
                          : ((this._content.textContent = this._content.innerHTML), this._content.classList.add(vt), (this._isCodeShown = !0), D(l, "active"))
                    },
                  },
                  {
                    key: "_getConfig",
                    value: function (t) {
                      var e = z(this._element)
                      return (t = _(_(_({}, Bt), e), t)), r(ct, t, Ut), t
                    },
                  },
                ]) && S(e.prototype, n),
                o && S(e, o),
                t
              )
            })()
          rt.find('[data-psa-wysiwyg="wysiwyg"]').forEach(function (t) {
            return Ht.getInstance(t) || new Ht(t)
          }),
            (at = function () {
              var t,
                e = o()
              e &&
                ((t = e.fn[ct]),
                (e.fn[ct] = Ht.jQueryInterface),
                (e.fn[ct].Constructor = Ht),
                (e.fn[ct].noConflict = function () {
                  return (e.fn[ct] = t), Ht.jQueryInterface
                }))
            }),
            "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", at) : at(),
            (e.default = Ht)
        },
      ]),
    (t.c = n),
    (t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, {enumerable: !0, get: r})
    }),
    (t.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }),
    (t.t = function (e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e
      if (4 & n && "object" == typeof e && e && e.__esModule) return e
      var r = Object.create(null)
      if ((t.r(r), Object.defineProperty(r, "default", {enumerable: !0, value: e}), 2 & n && "string" != typeof e))
        for (var o in e)
          t.d(
            r,
            o,
            function (t) {
              return e[t]
            }.bind(null, o)
          )
      return r
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return t.d(n, "a", n), n
    }),
    (t.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (t.p = ""),
    t((t.s = 139)).default
  )
  var e, n
})()
