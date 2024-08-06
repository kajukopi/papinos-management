export const VectorMap = (() => {
  function t(r) {
    if (n[r]) return n[r].exports
    var o = (n[r] = {i: r, l: !1, exports: {}})
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports
  }
  return (
    (n = {}),
    (t.m = e =
      [
        function (t, e, n) {
          var r = n(3),
            o = n(29).f,
            i = n(21),
            a = n(26),
            c = n(61),
            u = n(88),
            s = n(67)
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
            o = n(62),
            i = n(6),
            a = n(63),
            c = n(68),
            u = n(93),
            s = o("wks"),
            l = r.Symbol,
            f = u ? l : (l && l.withoutSetter) || a
          t.exports = function (t) {
            return i(s, t) || (c && i(l, t) ? (s[t] = l[t]) : (s[t] = f("Symbol." + t))), s[t]
          }
        },
        function (t, e, n) {
          ;(function (e) {
            function n(t) {
              return t && t.Math == Math && t
            }
            t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")()
          }).call(this, n(109))
        },
        function (t, e, n) {
          var r = n(1)
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
          t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
          }
        },
        function (t, e) {
          var n = {}.hasOwnProperty
          t.exports = function (t, e) {
            return n.call(t, e)
          }
        },
        function (t, e, n) {
          var r = n(5)
          t.exports = function (t) {
            if (!r(t)) throw TypeError(String(t) + " is not an object")
            return t
          }
        },
        function (t, e, n) {
          var r = n(73),
            o = n(26),
            i = n(121)
          r || o(Object.prototype, "toString", i, {unsafe: !0})
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
          var c = n(0),
            u = n(3),
            s = n(34),
            l = n(44),
            f = n(4),
            p = n(68),
            d = n(93),
            h = n(1),
            v = n(6),
            m = n(52),
            g = n(5),
            y = n(7),
            b = n(23),
            x = n(20),
            _ = n(42),
            S = n(41),
            E = n(46),
            O = n(53),
            w = n(45),
            j = n(113),
            A = n(66),
            k = n(29),
            T = n(10),
            P = n(60),
            z = n(21),
            I = n(26),
            C = n(62),
            M = n(49),
            L = n(50),
            R = n(63),
            D = n(2),
            N = n(94),
            F = n(95),
            B = n(69),
            U = n(43),
            H = n(35).forEach,
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
          var r = n(4),
            o = n(84),
            i = n(7),
            a = n(42),
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
          "use strict"
          var r = n(20),
            o = n(58),
            i = n(47),
            a = n(43),
            c = n(100),
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
          "use strict"
          var r = n(105).charAt,
            o = n(43),
            i = n(100),
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
          var r,
            o,
            i,
            a,
            c,
            u,
            s = n(0),
            l = n(4),
            f = n(3),
            p = n(6),
            d = n(5),
            h = n(10).f,
            v = n(88),
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
          n(95)("iterator")
        },
        function (t, e, n) {
          "use strict"
          var r = n(0),
            o = n(99)
          r({target: "Array", proto: !0, forced: [].forEach != o}, {forEach: o})
        },
        function (t, e, n) {
          var r = n(3),
            o = n(106),
            i = n(99),
            a = n(21)
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
          var r = n(3),
            o = n(106),
            i = n(11),
            a = n(21),
            c = n(2),
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
          "use strict"
          var r = n(26),
            o = n(7),
            i = n(1),
            a = n(78),
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
          var r = n(0),
            o = n(23),
            i = n(53)
          r(
            {
              target: "Object",
              stat: !0,
              forced: n(1)(function () {
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
          var r = n(48),
            o = n(25)
          t.exports = function (t) {
            return r(o(t))
          }
        },
        function (t, e, n) {
          var r = n(4),
            o = n(10),
            i = n(41)
          t.exports = r
            ? function (t, e, n) {
                return o.f(t, e, i(1, n))
              }
            : function (t, e, n) {
                return (t[e] = n), t
              }
        },
        function (t, e, n) {
          var r = n(51),
            o = Math.min
          t.exports = function (t) {
            return 0 < t ? o(r(t), 9007199254740991) : 0
          }
        },
        function (t, e, n) {
          var r = n(25)
          t.exports = function (t) {
            return Object(r(t))
          }
        },
        function (t, e, n) {
          "use strict"
          var r = n(0),
            o = n(35).filter,
            i = n(57),
            a = n(30),
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
        function (t, e) {
          t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on " + t)
            return t
          }
        },
        function (t, e, n) {
          var r = n(3),
            o = n(21),
            i = n(6),
            a = n(61),
            c = n(86),
            u = n(43),
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
          var r = n(0),
            o = n(1),
            i = n(20),
            a = n(29).f,
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
          var r = n(0),
            o = n(4),
            i = n(89),
            a = n(20),
            c = n(29),
            u = n(56)
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
          var r = n(4),
            o = n(60),
            i = n(41),
            a = n(20),
            c = n(42),
            u = n(6),
            s = n(84),
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
        function (t, e, n) {
          function r(t) {
            throw t
          }
          var o = n(4),
            i = n(1),
            a = n(6),
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
          var r = n(0),
            o = n(122)
          r(
            {
              target: "Array",
              stat: !0,
              forced: !n(126)(function (t) {
                Array.from(t)
              }),
            },
            {from: o}
          )
        },
        function (t, e, n) {
          "use strict"
          var r = n(0),
            o = n(5),
            i = n(52),
            a = n(64),
            c = n(22),
            u = n(20),
            s = n(56),
            l = n(2),
            f = n(57),
            p = n(30),
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
        function (t, e) {
          var n = {}.toString
          t.exports = function (t) {
            return n.call(t).slice(8, -1)
          }
        },
        function (t, e, n) {
          function r(t) {
            return "function" == typeof t ? t : void 0
          }
          var o = n(90),
            i = n(3)
          t.exports = function (t, e) {
            return arguments.length < 2 ? r(o[t]) || r(i[t]) : (o[t] && o[t][e]) || (i[t] && i[t][e])
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
          var o = n(96),
            i = n(48),
            a = n(23),
            c = n(22),
            u = n(97),
            s = [].push
          t.exports = {forEach: r(0), map: r(1), filter: r(2), some: r(3), every: r(4), find: r(5), findIndex: r(6)}
        },
        function (t, e, n) {
          "use strict"
          var r = n(0),
            o = n(59)
          r({target: "RegExp", proto: !0, forced: /./.exec !== o}, {exec: o})
        },
        function (t, e, n) {
          var r = n(4),
            o = n(10).f,
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
        function (t, e, n) {
          var r = n(0),
            o = n(1),
            i = n(23),
            a = n(71),
            c = n(102)
          r(
            {
              target: "Object",
              stat: !0,
              forced: o(function () {
                a(1)
              }),
              sham: !c,
            },
            {
              getPrototypeOf: function (t) {
                return a(i(t))
              },
            }
          )
        },
        function (t, e, n) {
          n(0)({target: "Object", stat: !0}, {setPrototypeOf: n(72)})
        },
        function (t, e, n) {
          var r = n(0),
            o = n(34),
            i = n(54),
            a = n(7),
            c = n(5),
            u = n(46),
            s = n(141),
            l = n(1),
            f = o("Reflect", "construct"),
            p = l(function () {
              function t() {}
              return !(f(function () {}, [], t) instanceof t)
            }),
            d = !l(function () {
              f(function () {})
            }),
            h = p || d
          r(
            {target: "Reflect", stat: !0, forced: h, sham: h},
            {
              construct: function (t, e, n) {
                i(t), a(e)
                var r = arguments.length < 3 ? t : i(n)
                if (d && !p) return f(t, e, r)
                if (t == r) {
                  switch (e.length) {
                    case 0:
                      return new t()
                    case 1:
                      return new t(e[0])
                    case 2:
                      return new t(e[0], e[1])
                    case 3:
                      return new t(e[0], e[1], e[2])
                    case 4:
                      return new t(e[0], e[1], e[2], e[3])
                  }
                  var o = [null]
                  return o.push.apply(o, e), new (s.apply(t, o))()
                }
                var l = r.prototype,
                  h = u(c(l) ? l : Object.prototype),
                  v = Function.apply.call(t, h, e)
                return c(v) ? v : h
              },
            }
          )
        },
        function (t, e) {
          t.exports = function (t, e) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
          }
        },
        function (t, e, n) {
          var r = n(5)
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
            f = n(110),
            p = n(3),
            d = n(5),
            h = n(21),
            v = n(6),
            m = n(49),
            g = n(50),
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
          var r = n(91),
            o = n(65).concat("length", "prototype")
          e.f =
            Object.getOwnPropertyNames ||
            function (t) {
              return r(t, o)
            }
        },
        function (t, e, n) {
          function r() {}
          function o(t) {
            return "<script>" + t + "</" + h + ">"
          }
          var i,
            a = n(7),
            c = n(111),
            u = n(65),
            s = n(50),
            l = n(112),
            f = n(85),
            p = n(49),
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
        function (t, e) {
          t.exports = {}
        },
        function (t, e, n) {
          var r = n(1),
            o = n(33),
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
          var r = n(62),
            o = n(63),
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
          var r = n(33)
          t.exports =
            Array.isArray ||
            function (t) {
              return "Array" == r(t)
            }
        },
        function (t, e, n) {
          var r = n(91),
            o = n(65)
          t.exports =
            Object.keys ||
            function (t) {
              return r(t, o)
            }
        },
        function (t, e) {
          t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function")
            return t
          }
        },
        function (t, e, n) {
          "use strict"
          var r = n(0),
            o = n(1),
            i = n(52),
            a = n(5),
            c = n(23),
            u = n(22),
            s = n(56),
            l = n(97),
            f = n(57),
            p = n(2),
            d = n(98),
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
          var r = n(42),
            o = n(10),
            i = n(41)
          t.exports = function (t, e, n) {
            var a = r(e)
            a in t ? o.f(t, a, i(0, n)) : (t[a] = n)
          }
        },
        function (t, e, n) {
          var r = n(1),
            o = n(2),
            i = n(98),
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
          var r = n(2),
            o = n(46),
            i = n(10),
            a = r("unscopables"),
            c = Array.prototype
          null == c[a] && i.f(c, a, {configurable: !0, value: o(null)}),
            (t.exports = function (t) {
              c[a][t] = !0
            })
        },
        function (t, e, n) {
          "use strict"
          var r,
            o,
            i = n(78),
            a = n(108),
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
          var r = n(3),
            o = n(21)
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
          var r = n(44),
            o = n(87)
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
        function (t, e, n) {
          var r = n(51),
            o = Math.max,
            i = Math.min
          t.exports = function (t, e) {
            var n = r(t)
            return n < 0 ? o(n + e, 0) : i(n, e)
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
          var o = n(1),
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
          var r = n(1)
          t.exports =
            !!Object.getOwnPropertySymbols &&
            !r(function () {
              return !String(Symbol())
            })
        },
        function (t, e, n) {
          var r = n(10).f,
            o = n(6),
            i = n(2)("toStringTag")
          t.exports = function (t, e, n) {
            t && !o((t = n ? t : t.prototype), i) && r(t, i, {configurable: !0, value: e})
          }
        },
        function (t, e, n) {
          "use strict"
          var r = n(1)
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
          var r = n(6),
            o = n(23),
            i = n(49),
            a = n(102),
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
            o = n(120)
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
          var r = {}
          ;(r[n(2)("toStringTag")] = "z"), (t.exports = "[object z]" === String(r))
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
            a = n(67),
            c = n(26),
            u = n(6),
            s = n(33),
            l = n(107),
            f = n(42),
            p = n(1),
            d = n(46),
            h = n(45).f,
            v = n(29).f,
            m = n(10).f,
            g = n(75).trim,
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
          function r(t) {
            return function (e) {
              var n = String(o(e))
              return 1 & t && (n = n.replace(a, "")), 2 & t && (n = n.replace(c, "")), n
            }
          }
          var o = n(25),
            i = "[" + n(76) + "]",
            a = RegExp("^" + i + i + "*"),
            c = RegExp(i + i + "*$")
          t.exports = {start: r(1), end: r(2), trim: r(3)}
        },
        function (t, e) {
          t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        },
        function (t, e, n) {
          var r = n(5),
            o = n(33),
            i = n(2)("match")
          t.exports = function (t) {
            var e
            return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
          }
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
          n(36)
          var r = n(26),
            o = n(1),
            i = n(2),
            a = n(59),
            c = n(21),
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
          var r = n(105).charAt
          t.exports = function (t, e, n) {
            return e + (n ? r(t, e).length : 1)
          }
        },
        function (t, e, n) {
          var r = n(33),
            o = n(59)
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
          "use strict"
          var r = n(79),
            o = n(77),
            i = n(7),
            a = n(25),
            c = n(132),
            u = n(80),
            s = n(22),
            l = n(81),
            f = n(59),
            p = n(1),
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
          "use strict"
          var r = n(79),
            o = n(7),
            i = n(23),
            a = n(22),
            c = n(51),
            u = n(25),
            s = n(80),
            l = n(81),
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
          var r = n(4),
            o = n(1),
            i = n(85)
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
            o = n(5),
            i = r.document,
            a = o(i) && o(i.createElement)
          t.exports = function (t) {
            return a ? i.createElement(t) : {}
          }
        },
        function (t, e, n) {
          var r = n(87),
            o = Function.toString
          "function" != typeof r.inspectSource &&
            (r.inspectSource = function (t) {
              return o.call(t)
            }),
            (t.exports = r.inspectSource)
        },
        function (t, e, n) {
          var r = n(3),
            o = n(61),
            i = "__core-js_shared__",
            a = r[i] || o(i, {})
          t.exports = a
        },
        function (t, e, n) {
          var r = n(6),
            o = n(89),
            i = n(29),
            a = n(10)
          t.exports = function (t, e) {
            for (var n = o(e), c = a.f, u = i.f, s = 0; s < n.length; s++) {
              var l = n[s]
              r(t, l) || c(t, l, u(e, l))
            }
          }
        },
        function (t, e, n) {
          var r = n(34),
            o = n(45),
            i = n(66),
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
          var r = n(6),
            o = n(20),
            i = n(92).indexOf,
            a = n(50)
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
          var o = n(20),
            i = n(22),
            a = n(64)
          t.exports = {includes: r(!0), indexOf: r(!1)}
        },
        function (t, e, n) {
          var r = n(68)
          t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        function (t, e, n) {
          var r = n(2)
          e.f = r
        },
        function (t, e, n) {
          var r = n(90),
            o = n(6),
            i = n(94),
            a = n(10).f
          t.exports = function (t) {
            var e = r.Symbol || (r.Symbol = {})
            o(e, t) || a(e, t, {value: i.f(t)})
          }
        },
        function (t, e, n) {
          var r = n(54)
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
        function (t, e, n) {
          var r = n(5),
            o = n(52),
            i = n(2)("species")
          t.exports = function (t, e) {
            var n
            return o(t) && (("function" == typeof (n = t.constructor) && (n === Array || o(n.prototype))) || (r(n) && null === (n = n[i]))) && (n = void 0), new (void 0 === n ? Array : n)(0 === e ? 0 : e)
          }
        },
        function (t, e, n) {
          var r,
            o,
            i = n(3),
            a = n(114),
            c = i.process,
            u = c && c.versions,
            s = u && u.v8
          s ? (o = (r = s.split("."))[0] + r[1]) : a && (!(r = a.match(/Edge\/(\d+)/)) || 74 <= r[1]) && (r = a.match(/Chrome\/(\d+)/)) && (o = r[1]), (t.exports = o && +o)
        },
        function (t, e, n) {
          "use strict"
          var r = n(35).forEach,
            o = n(70),
            i = n(30),
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
          function r() {
            return this
          }
          var o = n(0),
            i = n(119),
            a = n(71),
            c = n(72),
            u = n(69),
            s = n(21),
            l = n(26),
            f = n(2),
            p = n(44),
            d = n(47),
            h = n(101),
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
            a = n(71),
            c = n(21),
            u = n(6),
            s = n(2),
            l = n(44),
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
          var r = n(1)
          t.exports = !r(function () {
            function t() {}
            return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype
          })
        },
        function (t, e, n) {
          "use strict"
          var r = n(0),
            o = n(35).map,
            i = n(57),
            a = n(30),
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
          var r = n(73),
            o = n(33),
            i = n(2)("toStringTag"),
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
          var o = n(51),
            i = n(25)
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
          var r = n(5),
            o = n(72)
          t.exports = function (t, e, n) {
            var i, a
            return o && "function" == typeof (i = e.constructor) && i !== n && r((a = i.prototype)) && a !== n.prototype && o(t, a), t
          }
        },
        function (t, e, n) {
          "use strict"
          function r(t, e) {
            return RegExp(t, e)
          }
          var o = n(1)
          ;(e.UNSUPPORTED_Y = o(function () {
            var t = r("a", "y")
            return (t.lastIndex = 2), null != t.exec("abcd")
          })),
            (e.BROKEN_CARET = o(function () {
              var t = r("^r", "gy")
              return (t.lastIndex = 2), null != t.exec("str")
            }))
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
            o = n(86),
            i = r.WeakMap
          t.exports = "function" == typeof i && /native code/.test(o(i))
        },
        function (t, e, n) {
          var r = n(4),
            o = n(10),
            i = n(7),
            a = n(53)
          t.exports = r
            ? Object.defineProperties
            : function (t, e) {
                i(t)
                for (var n, r = a(e), c = r.length, u = 0; u < c; ) o.f(t, (n = r[u++]), e[n])
                return t
              }
        },
        function (t, e, n) {
          var r = n(34)
          t.exports = r("document", "documentElement")
        },
        function (t, e, n) {
          var r = n(20),
            o = n(45).f,
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
          var r = n(34)
          t.exports = r("navigator", "userAgent") || ""
        },
        function (t, e, n) {
          var r = n(0),
            o = n(116),
            i = n(58)
          r({target: "Array", proto: !0}, {fill: o}), i("fill")
        },
        function (t, e, n) {
          "use strict"
          var r = n(23),
            o = n(64),
            i = n(22)
          t.exports = function (t, e, n) {
            for (var a = r(this), c = i(a.length), u = arguments.length, s = o(1 < u ? e : void 0, c), l = 2 < u ? n : void 0, f = void 0 === l ? c : o(l, c); s < f; ) a[s++] = t
            return a
          }
        },
        function (t, e, n) {
          "use strict"
          var r = n(0),
            o = n(35).find,
            i = n(58),
            a = n(30),
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
          var r = n(0),
            o = n(35).findIndex,
            i = n(58),
            a = n(30),
            c = "findIndex",
            u = !0,
            s = a(c)
          c in [] &&
            Array(1)[c](function () {
              u = !1
            }),
            r(
              {target: "Array", proto: !0, forced: u || !s},
              {
                findIndex: function (t, e) {
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
          var o = n(101).IteratorPrototype,
            i = n(46),
            a = n(41),
            c = n(69),
            u = n(47)
          t.exports = function (t, e, n) {
            var s = e + " Iterator"
            return (t.prototype = i(o, {next: a(1, n)})), c(t, s, !1, !0), (u[s] = r), t
          }
        },
        function (t, e, n) {
          var r = n(5)
          t.exports = function (t) {
            if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
            return t
          }
        },
        function (t, e, n) {
          "use strict"
          var r = n(73),
            o = n(104)
          t.exports = r
            ? {}.toString
            : function () {
                return "[object " + o(this) + "]"
              }
        },
        function (t, e, n) {
          "use strict"
          var r = n(96),
            o = n(23),
            i = n(123),
            a = n(124),
            c = n(22),
            u = n(56),
            s = n(125)
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
          var r = n(2),
            o = n(47),
            i = r("iterator"),
            a = Array.prototype
          t.exports = function (t) {
            return void 0 !== t && (o.Array === t || a[i] === t)
          }
        },
        function (t, e, n) {
          var r = n(104),
            o = n(47),
            i = n(2)("iterator")
          t.exports = function (t) {
            if (null != t) return t[i] || t["@@iterator"] || o[r(t)]
          }
        },
        function (t, e, n) {
          var r = n(2)("iterator"),
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
          var r = n(0),
            o = n(128)
          r({target: "Number", stat: !0, forced: Number.parseFloat != o}, {parseFloat: o})
        },
        function (t, e, n) {
          var r = n(3),
            o = n(75).trim,
            i = n(76),
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
            i = n(67),
            a = n(107),
            c = n(10).f,
            u = n(45).f,
            s = n(77),
            l = n(78),
            f = n(108),
            p = n(26),
            d = n(1),
            h = n(43).set,
            v = n(130),
            m = n(2)("match"),
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
          var r = n(34),
            o = n(10),
            i = n(2),
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
          var r = n(79),
            o = n(7),
            i = n(22),
            a = n(25),
            c = n(80),
            u = n(81)
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
            o = n(54),
            i = n(2)("species")
          t.exports = function (t, e) {
            var n,
              a = r(t).constructor
            return void 0 === a || null == (n = r(a)[i]) ? e : o(n)
          }
        },
        function (t, e, n) {
          "use strict"
          var r = n(0),
            o = n(75).trim
          r(
            {target: "String", proto: !0, forced: n(134)("trim")},
            {
              trim: function () {
                return o(this)
              },
            }
          )
        },
        function (t, e, n) {
          var r = n(1),
            o = n(76)
          t.exports = function (t) {
            return r(function () {
              return !!o[t]() || "​᠎" != "​᠎"[t]() || o[t].name !== t
            })
          }
        },
        function (t, e, n) {
          var r = n(0),
            o = n(136)
          r({target: "Object", stat: !0, forced: Object.assign !== o}, {assign: o})
        },
        function (t, e, n) {
          "use strict"
          var r = n(4),
            o = n(1),
            i = n(53),
            a = n(66),
            c = n(60),
            u = n(23),
            s = n(48),
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
            o = n(0),
            i = n(29).f,
            a = n(22),
            c = n(138),
            u = n(25),
            s = n(139),
            l = n(44),
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
          var r = n(77)
          t.exports = function (t) {
            if (r(t)) throw TypeError("The method doesn't accept regular expressions")
            return t
          }
        },
        function (t, e, n) {
          var r = n(2)("match")
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
          var r = n(0),
            o = n(92).indexOf,
            i = n(70),
            a = n(30),
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
          var r = n(54),
            o = n(5),
            i = [].slice,
            a = {}
          t.exports =
            Function.bind ||
            function (t) {
              var e = r(this),
                n = i.call(arguments, 1),
                c = function () {
                  var r = n.concat(i.call(arguments))
                  return this instanceof c
                    ? (function (t, e, n) {
                        if (!(e in a)) {
                          for (var r = [], o = 0; o < e; o++) r[o] = "a[" + o + "]"
                          a[e] = Function("C,a", "return new C(" + r.join(",") + ")")
                        }
                        return a[e](t, n)
                      })(e, r.length, r)
                    : e.apply(t, r)
                }
              return o(e.prototype) && (c.prototype = e.prototype), c
            }
        },
        function (t, e, n) {
          var r = n(0),
            o = Math.hypot,
            i = Math.abs,
            a = Math.sqrt
          r(
            {target: "Math", stat: !0, forced: !!o && o(1 / 0, NaN) !== 1 / 0},
            {
              hypot: function (t, e) {
                for (var n, r, o = 0, c = 0, u = arguments.length, s = 0; c < u; ) s < (n = i(arguments[c++])) ? ((o = o * (r = s / n) * r + 1), (s = n)) : (o += 0 < n ? (r = n / s) * r : n)
                return s === 1 / 0 ? 1 / 0 : s * a(o)
              },
            }
          )
        },
        function (t, e, n) {
          "use strict"
          var r = n(0),
            o = n(48),
            i = n(20),
            a = n(70),
            c = [].join,
            u = o != Object,
            s = a("join", ",")
          r(
            {target: "Array", proto: !0, forced: u || !s},
            {
              join: function (t) {
                return c.call(i(this), void 0 === t ? "," : t)
              },
            }
          )
        },
        ,
        function (t, e, n) {
          "use strict"
          function r(t) {
            var e = t.getBoundingClientRect()
            return {width: e.width, height: e.height, top: e.top, right: e.right, bottom: e.bottom, left: e.left, x: e.left, y: e.top}
          }
          function o(t) {
            if ("[object Window]" === t.toString()) return t
            var e = t.ownerDocument
            return e ? e.defaultView : window
          }
          function i(t) {
            var e = o(t)
            return {scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset}
          }
          function a(t) {
            return t instanceof o(t).Element || t instanceof Element
          }
          function c(t) {
            return t instanceof o(t).HTMLElement || t instanceof HTMLElement
          }
          function u(t) {
            return t ? (t.nodeName || "").toLowerCase() : null
          }
          function s(t) {
            return (a(t) ? t.ownerDocument : t.document).documentElement
          }
          function l(t) {
            return r(s(t)).left + i(t).scrollLeft
          }
          function f(t) {
            return o(t).getComputedStyle(t)
          }
          function p(t) {
            var e = f(t),
              n = e.overflow,
              r = e.overflowX,
              o = e.overflowY
            return /auto|scroll|overlay|hidden/.test(n + o + r)
          }
          function d(t, e, n) {
            void 0 === n && (n = !1)
            var a,
              f,
              d = s(e),
              h = r(t),
              v = c(e),
              m = {scrollLeft: 0, scrollTop: 0},
              g = {x: 0, y: 0}
            return (
              (!v && (v || n)) || (("body" === u(e) && !p(d)) || (m = (a = e) !== o(a) && c(a) ? {scrollLeft: (f = a).scrollLeft, scrollTop: f.scrollTop} : i(a)), c(e) ? (((g = r(e)).x += e.clientLeft), (g.y += e.clientTop)) : d && (g.x = l(d))),
              {x: h.left + m.scrollLeft - g.x, y: h.top + m.scrollTop - g.y, width: h.width, height: h.height}
            )
          }
          function h(t) {
            return {x: t.offsetLeft, y: t.offsetTop, width: t.offsetWidth, height: t.offsetHeight}
          }
          function v(t) {
            return "html" === u(t) ? t : t.assignedSlot || t.parentNode || t.host || s(t)
          }
          function m(t, e) {
            void 0 === e && (e = [])
            var n = (function t(e) {
                return 0 <= ["html", "body", "#document"].indexOf(u(e)) ? e.ownerDocument.body : c(e) && p(e) ? e : t(v(e))
              })(t),
              r = "body" === u(n),
              i = o(n),
              a = r ? [i].concat(i.visualViewport || [], p(n) ? n : []) : n,
              s = e.concat(a)
            return r ? s : s.concat(m(v(a)))
          }
          function g(t) {
            if (!c(t) || "fixed" === f(t).position) return null
            var e = t.offsetParent
            if (e) {
              var n = s(e)
              if ("body" === u(e) && "static" === f(e).position && "static" !== f(n).position) return n
            }
            return e
          }
          function y(t) {
            for (var e = o(t), n = g(t); n && 0 <= ["table", "td", "th"].indexOf(u(n)) && "static" === f(n).position; ) n = g(n)
            return (
              ((!n || "body" !== u(n) || "static" !== f(n).position) &&
                (n ||
                  (function (t) {
                    for (var e = v(t); c(e) && ["html", "body"].indexOf(u(e)) < 0; ) {
                      var n = f(e)
                      if ("none" !== n.transform || "none" !== n.perspective || (n.willChange && "auto" !== n.willChange)) return e
                      e = e.parentNode
                    }
                    return null
                  })(t))) ||
              e
            )
          }
          function b(t) {
            var e = new Map(),
              n = new Set(),
              r = []
            return (
              t.forEach(function (t) {
                e.set(t.name, t)
              }),
              t.forEach(function (t) {
                n.has(t.name) ||
                  (function t(o) {
                    n.add(o.name),
                      [].concat(o.requires || [], o.requiresIfExists || []).forEach(function (r) {
                        var o
                        n.has(r) || ((o = e.get(r)) && t(o))
                      }),
                      r.push(o)
                  })(t)
              }),
              r
            )
          }
          function x() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
            return !e.some(function (t) {
              return !(t && "function" == typeof t.getBoundingClientRect)
            })
          }
          function _(t) {
            void 0 === t && (t = {})
            var e = t.defaultModifiers,
              n = void 0 === e ? [] : e,
              r = t.defaultOptions,
              o = void 0 === r ? ke : r
            return function (t, e, r) {
              function i() {
                l.forEach(function (t) {
                  return t()
                }),
                  (l = [])
              }
              void 0 === r && (r = o)
              var c,
                u,
                s = {placement: "bottom", orderedModifiers: [], options: Object.assign(Object.assign({}, ke), o), modifiersData: {}, elements: {reference: t, popper: e}, attributes: {}, styles: {}},
                l = [],
                f = !1,
                p = {
                  state: s,
                  setOptions: function (r) {
                    i(), (s.options = Object.assign(Object.assign(Object.assign({}, o), s.options), r)), (s.scrollParents = {reference: a(t) ? m(t) : t.contextElement ? m(t.contextElement) : [], popper: m(e)})
                    var c,
                      u,
                      f,
                      d,
                      h =
                        ((f = [].concat(n, s.options.modifiers)),
                        (d = f.reduce(function (t, e) {
                          var n = t[e.name]
                          return (t[e.name] = n ? Object.assign(Object.assign(Object.assign({}, n), e), {}, {options: Object.assign(Object.assign({}, n.options), e.options), data: Object.assign(Object.assign({}, n.data), e.data)}) : e), t
                        }, {})),
                        (c = Object.keys(d).map(function (t) {
                          return d[t]
                        })),
                        (u = b(c)),
                        Ae.reduce(function (t, e) {
                          return t.concat(
                            u.filter(function (t) {
                              return t.phase === e
                            })
                          )
                        }, []))
                    return (
                      (s.orderedModifiers = h.filter(function (t) {
                        return t.enabled
                      })),
                      s.orderedModifiers.forEach(function (t) {
                        var e,
                          n = t.name,
                          r = t.options,
                          o = void 0 === r ? {} : r,
                          i = t.effect
                        "function" == typeof i && ((e = i({state: s, name: n, instance: p, options: o})), l.push(e || function () {}))
                      }),
                      p.update()
                    )
                  },
                  forceUpdate: function () {
                    if (!f) {
                      var t = s.elements,
                        e = t.reference,
                        n = t.popper
                      if (x(e, n)) {
                        ;(s.rects = {reference: d(e, y(n), "fixed" === s.options.strategy), popper: h(n)}),
                          (s.reset = !1),
                          (s.placement = s.options.placement),
                          s.orderedModifiers.forEach(function (t) {
                            return (s.modifiersData[t.name] = Object.assign({}, t.data))
                          })
                        for (var r, o, i, a, c, u = 0; u < s.orderedModifiers.length; u++)
                          !0 !== s.reset
                            ? ((o = (r = s.orderedModifiers[u]).fn), (a = void 0 === (i = r.options) ? {} : i), (c = r.name), "function" == typeof o && (s = o({state: s, options: a, name: c, instance: p}) || s))
                            : ((s.reset = !1), (u = -1))
                      }
                    }
                  },
                  update:
                    ((c = function () {
                      return new Promise(function (t) {
                        p.forceUpdate(), t(s)
                      })
                    }),
                    function () {
                      return (u =
                        u ||
                        new Promise(function (t) {
                          Promise.resolve().then(function () {
                            ;(u = void 0), t(c())
                          })
                        }))
                    }),
                  destroy: function () {
                    i(), (f = !0)
                  },
                }
              return x(t, e)
                ? (p.setOptions(r).then(function (t) {
                    !f && r.onFirstUpdate && r.onFirstUpdate(t)
                  }),
                  p)
                : p
            }
          }
          function S(t) {
            return t.split("-")[0]
          }
          function E(t) {
            return t.split("-")[1]
          }
          function O(t) {
            return 0 <= ["top", "bottom"].indexOf(t) ? "x" : "y"
          }
          function w(t) {
            var e,
              n = t.reference,
              r = t.element,
              o = t.placement,
              i = o ? S(o) : null,
              a = o ? E(o) : null,
              c = n.x + n.width / 2 - r.width / 2,
              u = n.y + n.height / 2 - r.height / 2
            switch (i) {
              case de:
                e = {x: c, y: n.y - r.height}
                break
              case he:
                e = {x: c, y: n.y + n.height}
                break
              case ve:
                e = {x: n.x + n.width, y: u}
                break
              case me:
                e = {x: n.x - r.width, y: u}
                break
              default:
                e = {x: n.x, y: n.y}
            }
            var s = i ? O(i) : null
            if (null != s) {
              var l = "y" === s ? "height" : "width"
              switch (a) {
                case be:
                  e[s] = Math.floor(e[s]) - Math.floor(n[l] / 2 - r[l] / 2)
                  break
                case xe:
                  e[s] = Math.floor(e[s]) + Math.ceil(n[l] / 2 - r[l] / 2)
              }
            }
            return e
          }
          function j(t) {
            var e,
              n,
              r,
              i,
              a,
              c,
              u = t.popper,
              l = t.popperRect,
              f = t.placement,
              p = t.offsets,
              d = t.position,
              h = t.gpuAcceleration,
              v = t.adaptive,
              m = ((r = (n = p).x), (i = n.y), (a = window.devicePixelRatio || 1), {x: Math.round(r * a) / a || 0, y: Math.round(i * a) / a || 0}),
              g = m.x,
              b = m.y,
              x = p.hasOwnProperty("x"),
              _ = p.hasOwnProperty("y"),
              S = me,
              E = de,
              O = window
            v && ((c = y(u)) === o(u) && (c = s(u)), f === de && ((E = he), (b -= c.clientHeight - l.height), (b *= h ? 1 : -1)), f === me && ((S = ve), (g -= c.clientWidth - l.width), (g *= h ? 1 : -1)))
            var w,
              j = Object.assign({position: d}, v && Pe)
            return h
              ? Object.assign(Object.assign({}, j), {}, (((w = {})[E] = _ ? "0" : ""), (w[S] = x ? "0" : ""), (w.transform = (O.devicePixelRatio || 1) < 2 ? "translate(" + g + "px, " + b + "px)" : "translate3d(" + g + "px, " + b + "px, 0)"), w))
              : Object.assign(Object.assign({}, j), {}, (((e = {})[E] = _ ? b + "px" : ""), (e[S] = x ? g + "px" : ""), (e.transform = ""), e))
          }
          function A(t) {
            return t.replace(/left|right|bottom|top/g, function (t) {
              return ze[t]
            })
          }
          function k(t) {
            return t.replace(/start|end/g, function (t) {
              return Ie[t]
            })
          }
          function T(t, e) {
            var n = Boolean(e.getRootNode && e.getRootNode().host)
            if (t.contains(e)) return !0
            if (n) {
              var r = e
              do {
                if (r && t.isSameNode(r)) return !0
                r = r.parentNode || r.host
              } while (r)
            }
            return !1
          }
          function P(t) {
            return Object.assign(Object.assign({}, t), {}, {left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height})
          }
          function z(t, e) {
            return e === Se
              ? P(
                  ((x = o((b = t))),
                  (_ = s(b)),
                  (S = x.visualViewport),
                  (E = _.clientWidth),
                  (O = _.clientHeight),
                  (j = w = 0),
                  S && ((E = S.width), (O = S.height), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || ((w = S.offsetLeft), (j = S.offsetTop))),
                  {width: E, height: O, x: w + l(b), y: j})
                )
              : c(e)
              ? (((y = r((g = e))).top = y.top + g.clientTop),
                (y.left = y.left + g.clientLeft),
                (y.bottom = y.top + g.clientHeight),
                (y.right = y.left + g.clientWidth),
                (y.width = g.clientWidth),
                (y.height = g.clientHeight),
                (y.x = y.left),
                (y.y = y.top),
                y)
              : P(
                  ((n = s(t)),
                  (a = s(n)),
                  (u = i(n)),
                  (p = n.ownerDocument.body),
                  (d = Math.max(a.scrollWidth, a.clientWidth, p ? p.scrollWidth : 0, p ? p.clientWidth : 0)),
                  (h = Math.max(a.scrollHeight, a.clientHeight, p ? p.scrollHeight : 0, p ? p.clientHeight : 0)),
                  (v = -u.scrollLeft + l(n)),
                  (m = -u.scrollTop),
                  "rtl" === f(p || a).direction && (v += Math.max(a.clientWidth, p ? p.clientWidth : 0) - d),
                  {width: d, height: h, x: v, y: m})
                )
            var n, a, u, p, d, h, v, m, g, y, b, x, _, S, E, O, w, j
          }
          function I(t, e, n) {
            var r,
              o,
              i,
              s =
                "clippingParents" === e
                  ? ((o = m(v((r = t)))),
                    a((i = 0 <= ["absolute", "fixed"].indexOf(f(r).position) && c(r) ? y(r) : r))
                      ? o.filter(function (t) {
                          return a(t) && T(t, i) && "body" !== u(t)
                        })
                      : [])
                  : [].concat(e),
              l = [].concat(s, [n]),
              p = l[0],
              d = l.reduce(function (e, n) {
                var r = z(t, n)
                return (e.top = Math.max(r.top, e.top)), (e.right = Math.min(r.right, e.right)), (e.bottom = Math.min(r.bottom, e.bottom)), (e.left = Math.max(r.left, e.left)), e
              }, z(t, p))
            return (d.width = d.right - d.left), (d.height = d.bottom - d.top), (d.x = d.left), (d.y = d.top), d
          }
          function C() {
            return {top: 0, right: 0, bottom: 0, left: 0}
          }
          function M(t) {
            return Object.assign(Object.assign({}, {top: 0, right: 0, bottom: 0, left: 0}), t)
          }
          function L(t, e) {
            return e.reduce(function (e, n) {
              return (e[n] = t), e
            }, {})
          }
          function R(t, e) {
            void 0 === e && (e = {})
            var n,
              o = e.placement,
              i = void 0 === o ? t.placement : o,
              c = e.boundary,
              u = void 0 === c ? _e : c,
              l = e.rootBoundary,
              f = void 0 === l ? Se : l,
              p = e.elementContext,
              d = void 0 === p ? Ee : p,
              h = e.altBoundary,
              v = void 0 !== h && h,
              m = e.padding,
              g = void 0 === m ? 0 : m,
              y = M("number" != typeof g ? g : L(g, ye)),
              b = d === Ee ? Oe : Ee,
              x = t.elements.reference,
              _ = t.rects.popper,
              S = t.elements[v ? b : d],
              E = I(a(S) ? S : S.contextElement || s(t.elements.popper), u, f),
              O = r(x),
              j = w({reference: O, element: _, strategy: "absolute", placement: i}),
              A = P(Object.assign(Object.assign({}, _), j)),
              k = d === Ee ? A : O,
              T = {top: E.top - k.top + y.top, bottom: k.bottom - E.bottom + y.bottom, left: E.left - k.left + y.left, right: k.right - E.right + y.right},
              z = t.modifiersData.offset
            return (
              d === Ee &&
                z &&
                ((n = z[i]),
                Object.keys(T).forEach(function (t) {
                  var e = 0 <= [ve, he].indexOf(t) ? 1 : -1,
                    r = 0 <= [de, he].indexOf(t) ? "y" : "x"
                  T[t] += n[r] * e
                })),
              T
            )
          }
          function D(t, e, n) {
            return Math.max(t, Math.min(e, n))
          }
          function N(t, e, n) {
            return void 0 === n && (n = {x: 0, y: 0}), {top: t.top - e.height - n.y, right: t.right - e.width + n.x, bottom: t.bottom - e.height + n.y, left: t.left - e.width - n.x}
          }
          function F(t) {
            return [de, ve, he, me].some(function (e) {
              return 0 <= t[e]
            })
          }
          function B(t, e, n) {
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
          function U() {
            var t = window.jQuery
            return t && !document.body.hasAttribute("data-psa-no-jquery") ? t : null
          }
          function H(t) {
            return document.createElement(t)
          }
          function G(t, e) {
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
          function $(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {}
              e % 2
                ? G(Object(n), !0).forEach(function (e) {
                    var r, o, i
                    ;(r = t), (i = n[(o = e)]), o in r ? Object.defineProperty(r, o, {value: i, enumerable: !0, configurable: !0, writable: !0}) : (r[o] = i)
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : G(Object(n)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                  })
            }
            return t
          }
          function W(t) {
            return "true" === t || ("false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t))
          }
          function V(t) {
            return t.replace(/[A-Z]/g, function (t) {
              return "-".concat(t.toLowerCase())
            })
          }
          function Y(t, e) {
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
                  if ("string" == typeof t) return K(t, e)
                  var n = Object.prototype.toString.call(t).slice(8, -1)
                  return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? K(t, e) : void 0
                }
              })(t, e) ||
              (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              })()
            )
          }
          function K(t, e) {
            ;(null == e || e > t.length) && (e = t.length)
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
            return r
          }
          function q(t, e) {
            return (e && "".concat(e, "::").concat(ln++)) || t.uidEvent || ln++
          }
          function X(t) {
            var e = q(t)
            return (t.uidEvent = e), (sn[e] = sn[e] || {}), sn[e]
          }
          function Q(t, e, n) {
            for (var r = 2 < arguments.length && void 0 !== n ? n : null, o = Object.keys(t), i = 0, a = o.length; i < a; i++) {
              var c = t[o[i]]
              if (c.originalHandler === e && c.delegationSelector === r) return c
            }
            return null
          }
          function J(t, e, n) {
            var r = "string" == typeof e,
              o = r ? n : e,
              i = t.replace(cn, ""),
              a = fn[i]
            return a && (i = a), -1 < pn.indexOf(i) || (i = t), [r, o, i]
          }
          function Z(t, e, n, r, o) {
            var i, a, c, u, s, l, f, p, d, h, v, m, g, y
            "string" == typeof e &&
              t &&
              (n || ((n = r), (r = null)),
              (a = (i = Y(J(e, n, r), 3))[0]),
              (c = i[1]),
              (u = i[2]),
              (f = Q((l = (s = X(t))[u] || (s[u] = {})), c, a ? n : null))
                ? (f.oneOff = f.oneOff && o)
                : ((p = q(c, e.replace(an, ""))),
                  ((d = a
                    ? ((m = t),
                      (g = n),
                      (y = r),
                      function t(e) {
                        for (var n = m.querySelectorAll(g), r = e.target; r && r !== this; r = r.parentNode) for (var o = n.length; o--; ) if (n[o] === r) return t.oneOff && dn.off(m, e.type, y), y.apply(r, [e])
                        return null
                      })
                    : ((h = t),
                      (v = n),
                      function t(e) {
                        return t.oneOff && dn.off(h, e.type, v), v.apply(h, [e])
                      })).delegationSelector = a ? n : null),
                  (d.originalHandler = c),
                  (d.oneOff = o),
                  (l[(d.uidEvent = p)] = d),
                  t.addEventListener(u, d, a)))
          }
          function tt(t, e, n, r, o) {
            var i = Q(e[n], r, o)
            i && (t.removeEventListener(n, i, Boolean(o)), delete e[n][i.uidEvent])
          }
          function et(t) {
            return (
              (function (t) {
                if (Array.isArray(t)) return nt(t)
              })(t) ||
              (function (t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
              })(t) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return nt(t, e)
                  var n = Object.prototype.toString.call(t).slice(8, -1)
                  return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? nt(t, e) : void 0
                }
              })(t) ||
              (function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              })()
            )
          }
          function nt(t, e) {
            ;(null == e || e > t.length) && (e = t.length)
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
            return r
          }
          function rt(t, e) {
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
                  if ("string" == typeof t) return ot(t, e)
                  var n = Object.prototype.toString.call(t).slice(8, -1)
                  return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ot(t, e) : void 0
                }
              })(t, e) ||
              (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              })()
            )
          }
          function ot(t, e) {
            ;(null == e || e > t.length) && (e = t.length)
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
            return r
          }
          function it(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n]
              ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
          }
          function at(t) {
            return (at =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                  })(t)
          }
          function ct(t, e) {
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
          function ut(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {}
              e % 2
                ? ct(Object(n), !0).forEach(function (e) {
                    var r, o, i
                    ;(r = t), (i = n[(o = e)]), o in r ? Object.defineProperty(r, o, {value: i, enumerable: !0, configurable: !0, writable: !0}) : (r[o] = i)
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : ct(Object(n)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                  })
            }
            return t
          }
          function st(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n]
              ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
          }
          function lt(t, e) {
            return (lt =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t
              })(t, e)
          }
          function ft(t) {
            var e = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct) return !1
              if (Reflect.construct.sham) return !1
              if ("function" == typeof Proxy) return !0
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
              } catch (t) {
                return !1
              }
            })()
            return function () {
              var n,
                r,
                o,
                i,
                a = pt(t)
              return (
                (r = e ? ((n = pt(this).constructor), Reflect.construct(a, arguments, n)) : a.apply(this, arguments)),
                (o = this),
                !(i = r) || ("object" !== at(i) && "function" != typeof i)
                  ? (function (t) {
                      if (void 0 !== t) return t
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    })(o)
                  : i
              )
            }
          }
          function pt(t) {
            return (pt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
          }
          function dt(t) {
            return (dt =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                  })(t)
          }
          function ht(t, e) {
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
          function vt(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {}
              e % 2
                ? ht(Object(n), !0).forEach(function (e) {
                    var r, o, i
                    ;(r = t), (i = n[(o = e)]), o in r ? Object.defineProperty(r, o, {value: i, enumerable: !0, configurable: !0, writable: !0}) : (r[o] = i)
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : ht(Object(n)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                  })
            }
            return t
          }
          function mt(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n]
              ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
          }
          function gt(t, e) {
            return (gt =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t
              })(t, e)
          }
          function yt(t) {
            var e = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct) return !1
              if (Reflect.construct.sham) return !1
              if ("function" == typeof Proxy) return !0
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
              } catch (t) {
                return !1
              }
            })()
            return function () {
              var n,
                r,
                o,
                i,
                a = bt(t)
              return (
                (r = e ? ((n = bt(this).constructor), Reflect.construct(a, arguments, n)) : a.apply(this, arguments)),
                (o = this),
                !(i = r) || ("object" !== dt(i) && "function" != typeof i)
                  ? (function (t) {
                      if (void 0 !== t) return t
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    })(o)
                  : i
              )
            }
          }
          function bt(t) {
            return (bt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
          }
          function xt(t) {
            return (xt =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                  })(t)
          }
          function _t(t, e) {
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
          function St(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {}
              e % 2
                ? _t(Object(n), !0).forEach(function (e) {
                    Et(t, e, n[e])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : _t(Object(n)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                  })
            }
            return t
          }
          function Et(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}) : (t[e] = n), t
          }
          function Ot(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n]
              ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
          }
          function wt(t, e) {
            return (wt =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t
              })(t, e)
          }
          function jt(t) {
            var e = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct) return !1
              if (Reflect.construct.sham) return !1
              if ("function" == typeof Proxy) return !0
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
              } catch (t) {
                return !1
              }
            })()
            return function () {
              var n,
                r,
                o,
                i,
                a = At(t)
              return (
                (r = e ? ((n = At(this).constructor), Reflect.construct(a, arguments, n)) : a.apply(this, arguments)),
                (o = this),
                !(i = r) || ("object" !== xt(i) && "function" != typeof i)
                  ? (function (t) {
                      if (void 0 !== t) return t
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    })(o)
                  : i
              )
            }
          }
          function At(t) {
            return (At = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
          }
          function kt(t) {
            return (kt =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                  })(t)
          }
          function Tt(t, e) {
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
                  if ("string" == typeof t) return Pt(t, e)
                  var n = Object.prototype.toString.call(t).slice(8, -1)
                  return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pt(t, e) : void 0
                }
              })(t, e) ||
              (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              })()
            )
          }
          function Pt(t, e) {
            ;(null == e || e > t.length) && (e = t.length)
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
            return r
          }
          function zt(t, e) {
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
          function It(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {}
              e % 2
                ? zt(Object(n), !0).forEach(function (e) {
                    var r, o, i
                    ;(r = t), (i = n[(o = e)]), o in r ? Object.defineProperty(r, o, {value: i, enumerable: !0, configurable: !0, writable: !0}) : (r[o] = i)
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : zt(Object(n)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                  })
            }
            return t
          }
          function Ct(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n]
              ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
          }
          function Mt(t, e) {
            return (Mt =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t
              })(t, e)
          }
          function Lt(t) {
            var e = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct) return !1
              if (Reflect.construct.sham) return !1
              if ("function" == typeof Proxy) return !0
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
              } catch (t) {
                return !1
              }
            })()
            return function () {
              var n,
                r,
                o,
                i,
                a = Rt(t)
              return (
                (r = e ? ((n = Rt(this).constructor), Reflect.construct(a, arguments, n)) : a.apply(this, arguments)),
                (o = this),
                !(i = r) || ("object" !== kt(i) && "function" != typeof i)
                  ? (function (t) {
                      if (void 0 !== t) return t
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    })(o)
                  : i
              )
            }
          }
          function Rt(t) {
            return (Rt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
          }
          function Dt(t) {
            return (Dt =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                  })(t)
          }
          function Nt(t, e) {
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
          function Ft(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {}
              e % 2
                ? Nt(Object(n), !0).forEach(function (e) {
                    var r, o, i
                    ;(r = t), (i = n[(o = e)]), o in r ? Object.defineProperty(r, o, {value: i, enumerable: !0, configurable: !0, writable: !0}) : (r[o] = i)
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : Nt(Object(n)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                  })
            }
            return t
          }
          function Bt(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n]
              ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
          }
          function Ut(t, e) {
            return (Ut =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t
              })(t, e)
          }
          function Ht(t) {
            var e = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct) return !1
              if (Reflect.construct.sham) return !1
              if ("function" == typeof Proxy) return !0
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
              } catch (t) {
                return !1
              }
            })()
            return function () {
              var n,
                r,
                o,
                i,
                a = Gt(t)
              return (
                (r = e ? ((n = Gt(this).constructor), Reflect.construct(a, arguments, n)) : a.apply(this, arguments)),
                (o = this),
                !(i = r) || ("object" !== Dt(i) && "function" != typeof i)
                  ? (function (t) {
                      if (void 0 !== t) return t
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    })(o)
                  : i
              )
            }
          }
          function Gt(t) {
            return (Gt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
          }
          function $t(t) {
            return ($t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                  })(t)
          }
          function Wt(t, e) {
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
                  if ("string" == typeof t) return Vt(t, e)
                  var n = Object.prototype.toString.call(t).slice(8, -1)
                  return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vt(t, e) : void 0
                }
              })(t, e) ||
              (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              })()
            )
          }
          function Vt(t, e) {
            ;(null == e || e > t.length) && (e = t.length)
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
            return r
          }
          function Yt(t, e) {
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
          function Kt(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {}
              e % 2
                ? Yt(Object(n), !0).forEach(function (e) {
                    var r, o, i
                    ;(r = t), (i = n[(o = e)]), o in r ? Object.defineProperty(r, o, {value: i, enumerable: !0, configurable: !0, writable: !0}) : (r[o] = i)
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : Yt(Object(n)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                  })
            }
            return t
          }
          function qt(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n]
              ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
          }
          function Xt(t, e) {
            return (Xt =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t
              })(t, e)
          }
          function Qt(t) {
            var e = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct) return !1
              if (Reflect.construct.sham) return !1
              if ("function" == typeof Proxy) return !0
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
              } catch (t) {
                return !1
              }
            })()
            return function () {
              var n,
                r,
                o,
                i,
                a = Jt(t)
              return (
                (r = e ? ((n = Jt(this).constructor), Reflect.construct(a, arguments, n)) : a.apply(this, arguments)),
                (o = this),
                !(i = r) || ("object" !== $t(i) && "function" != typeof i)
                  ? (function (t) {
                      if (void 0 !== t) return t
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    })(o)
                  : i
              )
            }
          }
          function Jt(t) {
            return (Jt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
          }
          function Zt(t) {
            return (Zt =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                  })(t)
          }
          function te(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n]
              ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
          }
          function ee(t, e) {
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
                  if ("string" == typeof t) return ne(t, e)
                  var n = Object.prototype.toString.call(t).slice(8, -1)
                  return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ne(t, e) : void 0
                }
              })(t, e) ||
              (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              })()
            )
          }
          function ne(t, e) {
            ;(null == e || e > t.length) && (e = t.length)
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
            return r
          }
          function re(t) {
            return {x: t.width / 2, y: t.height / 2}
          }
          function oe(t) {
            if (t.touches) {
              var e = ee(t.touches, 1)[0]
              return {x: e.clientX, y: e.clientY}
            }
            return {x: t.clientX, y: t.clientY}
          }
          function ie(t) {
            var e = ee(
                t.map(function (t) {
                  return {x: t.clientX, y: t.clientY}
                }),
                2
              ),
              n = e[0],
              r = e[1]
            return {center: {x: n.x + (r.x - n.x) / 2, y: n.y + (r.y - n.y) / 2}, length: Math.sqrt(Math.pow(r.x - n.x, 2) + Math.pow(r.y - n.y, 2))}
          }
          function ae(t) {
            return t
              .split(/(?=[A-Z])/g)
              .map(function (t) {
                return t.toLowerCase()
              })
              .join("-")
          }
          function ce(t, e) {
            Object.keys(e).forEach(function (n) {
              t.setAttribute(ae(n), e[n])
            })
          }
          function ue(t, e) {
            var n = 0 < arguments.length && void 0 !== t ? t : 0,
              r = 1 < arguments.length && void 0 !== e ? e : 0
            return function () {
              return {width: 0, height: 0, top: r + 20, right: n, bottom: r + 20, left: n}
            }
          }
          function se(t) {
            return (se =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                  })(t)
          }
          function le(t, e) {
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
          function fe(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {}
              e % 2
                ? le(Object(n), !0).forEach(function (e) {
                    var r, o, i
                    ;(r = t), (i = n[(o = e)]), o in r ? Object.defineProperty(r, o, {value: i, enumerable: !0, configurable: !0, writable: !0}) : (r[o] = i)
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : le(Object(n)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                  })
            }
            return t
          }
          function pe(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n]
              ;(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
          }
          n.r(e), n(9), n(13), n(14), n(55), n(115), n(24), n(117), n(118), n(15), n(11), n(103), n(27), n(28), n(19), n(8), n(12), n(16), n(17)
          var de = "top",
            he = "bottom",
            ve = "right",
            me = "left",
            ge = "auto",
            ye = [de, he, ve, me],
            be = "start",
            xe = "end",
            _e = "clippingParents",
            Se = "viewport",
            Ee = "popper",
            Oe = "reference",
            we = ye.reduce(function (t, e) {
              return t.concat([e + "-" + be, e + "-" + xe])
            }, []),
            je = [].concat(ye, [ge]).reduce(function (t, e) {
              return t.concat([e, e + "-" + be, e + "-" + xe])
            }, []),
            Ae = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"],
            ke = {placement: "bottom", modifiers: [], strategy: "absolute"},
            Te = {passive: !0},
            Pe = {top: "auto", right: "auto", bottom: "auto", left: "auto"},
            ze = {left: "right", right: "left", bottom: "top", top: "bottom"},
            Ie = {start: "end", end: "start"},
            Ce,
            Me,
            Le = _({
              defaultModifiers: [
                {
                  name: "eventListeners",
                  enabled: !0,
                  phase: "write",
                  fn: function () {},
                  effect: function (t) {
                    var e = t.state,
                      n = t.instance,
                      r = t.options,
                      i = r.scroll,
                      a = void 0 === i || i,
                      c = r.resize,
                      u = void 0 === c || c,
                      s = o(e.elements.popper),
                      l = [].concat(e.scrollParents.reference, e.scrollParents.popper)
                    return (
                      a &&
                        l.forEach(function (t) {
                          t.addEventListener("scroll", n.update, Te)
                        }),
                      u && s.addEventListener("resize", n.update, Te),
                      function () {
                        a &&
                          l.forEach(function (t) {
                            t.removeEventListener("scroll", n.update, Te)
                          }),
                          u && s.removeEventListener("resize", n.update, Te)
                      }
                    )
                  },
                  data: {},
                },
                {
                  name: "popperOffsets",
                  enabled: !0,
                  phase: "read",
                  fn: function (t) {
                    var e = t.state,
                      n = t.name
                    e.modifiersData[n] = w({reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement})
                  },
                  data: {},
                },
                {
                  name: "computeStyles",
                  enabled: !0,
                  phase: "beforeWrite",
                  fn: function (t) {
                    var e = t.state,
                      n = t.options,
                      r = n.gpuAcceleration,
                      o = void 0 === r || r,
                      i = n.adaptive,
                      a = void 0 === i || i,
                      c = {placement: S(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: o}
                    null != e.modifiersData.popperOffsets &&
                      (e.styles.popper = Object.assign(Object.assign({}, e.styles.popper), j(Object.assign(Object.assign({}, c), {}, {offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: a})))),
                      null != e.modifiersData.arrow && (e.styles.arrow = Object.assign(Object.assign({}, e.styles.arrow), j(Object.assign(Object.assign({}, c), {}, {offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1})))),
                      (e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {"data-popper-placement": e.placement}))
                  },
                  data: {},
                },
                {
                  name: "applyStyles",
                  enabled: !0,
                  phase: "write",
                  fn: function (t) {
                    var e = t.state
                    Object.keys(e.elements).forEach(function (t) {
                      var n = e.styles[t] || {},
                        r = e.attributes[t] || {},
                        o = e.elements[t]
                      c(o) &&
                        u(o) &&
                        (Object.assign(o.style, n),
                        Object.keys(r).forEach(function (t) {
                          var e = r[t]
                          !1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e)
                        }))
                    })
                  },
                  effect: function (t) {
                    var e = t.state,
                      n = {popper: {position: e.options.strategy, left: "0", top: "0", margin: "0"}, arrow: {position: "absolute"}, reference: {}}
                    return (
                      Object.assign(e.elements.popper.style, n.popper),
                      e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
                      function () {
                        Object.keys(e.elements).forEach(function (t) {
                          var r = e.elements[t],
                            o = e.attributes[t] || {},
                            i = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce(function (t, e) {
                              return (t[e] = ""), t
                            }, {})
                          c(r) &&
                            u(r) &&
                            (Object.assign(r.style, i),
                            Object.keys(o).forEach(function (t) {
                              r.removeAttribute(t)
                            }))
                        })
                      }
                    )
                  },
                  requires: ["computeStyles"],
                },
                {
                  name: "offset",
                  enabled: !0,
                  phase: "main",
                  requires: ["popperOffsets"],
                  fn: function (t) {
                    var e = t.state,
                      n = t.options,
                      r = t.name,
                      o = n.offset,
                      i = void 0 === o ? [0, 0] : o,
                      a = je.reduce(function (t, n) {
                        var r, o, a, c, u, s, l, f
                        return (
                          (t[n] =
                            ((r = n),
                            (o = e.rects),
                            (a = i),
                            (c = S(r)),
                            (u = 0 <= [me, de].indexOf(c) ? -1 : 1),
                            (s = "function" == typeof a ? a(Object.assign(Object.assign({}, o), {}, {placement: r})) : a),
                            (l = (l = s[0]) || 0),
                            (f = ((f = s[1]) || 0) * u),
                            0 <= [me, ve].indexOf(c) ? {x: f, y: l} : {x: l, y: f})),
                          t
                        )
                      }, {}),
                      c = a[e.placement],
                      u = c.x,
                      s = c.y
                    null != e.modifiersData.popperOffsets && ((e.modifiersData.popperOffsets.x += u), (e.modifiersData.popperOffsets.y += s)), (e.modifiersData[r] = a)
                  },
                },
                {
                  name: "flip",
                  enabled: !0,
                  phase: "main",
                  fn: function (t) {
                    var e = t.state,
                      n = t.options,
                      r = t.name
                    if (!e.modifiersData[r]._skip) {
                      for (
                        var o = n.mainAxis,
                          i = void 0 === o || o,
                          a = n.altAxis,
                          c = void 0 === a || a,
                          u = n.fallbackPlacements,
                          s = n.padding,
                          l = n.boundary,
                          f = n.rootBoundary,
                          p = n.altBoundary,
                          d = n.flipVariations,
                          h = void 0 === d || d,
                          v = n.allowedAutoPlacements,
                          m = e.options.placement,
                          g = S(m),
                          y =
                            u ||
                            (g !== m && h
                              ? (function (t) {
                                  if (S(t) === ge) return []
                                  var e = A(t)
                                  return [k(t), e, k(e)]
                                })(m)
                              : [A(m)]),
                          b = [m].concat(y).reduce(function (t, n) {
                            return t.concat(
                              S(n) === ge
                                ? (function (t, e) {
                                    void 0 === e && (e = {})
                                    var n = e.placement,
                                      r = e.boundary,
                                      o = e.rootBoundary,
                                      i = e.padding,
                                      a = e.flipVariations,
                                      c = e.allowedAutoPlacements,
                                      u = void 0 === c ? je : c,
                                      s = E(n),
                                      l = s
                                        ? a
                                          ? we
                                          : we.filter(function (t) {
                                              return E(t) === s
                                            })
                                        : ye,
                                      f = l.filter(function (t) {
                                        return 0 <= u.indexOf(t)
                                      })
                                    0 === f.length && (f = l)
                                    var p = f.reduce(function (e, n) {
                                      return (e[n] = R(t, {placement: n, boundary: r, rootBoundary: o, padding: i})[S(n)]), e
                                    }, {})
                                    return Object.keys(p).sort(function (t, e) {
                                      return p[t] - p[e]
                                    })
                                  })(e, {placement: n, boundary: l, rootBoundary: f, padding: s, flipVariations: h, allowedAutoPlacements: v})
                                : n
                            )
                          }, []),
                          x = e.rects.reference,
                          _ = e.rects.popper,
                          O = new Map(),
                          w = !0,
                          j = b[0],
                          T = 0;
                        T < b.length;
                        T++
                      ) {
                        var P = b[T],
                          z = S(P),
                          I = E(P) === be,
                          C = 0 <= [de, he].indexOf(z),
                          M = C ? "width" : "height",
                          L = R(e, {placement: P, boundary: l, rootBoundary: f, altBoundary: p, padding: s}),
                          D = C ? (I ? ve : me) : I ? he : de
                        x[M] > _[M] && (D = A(D))
                        var N = A(D),
                          F = []
                        if (
                          (i && F.push(L[z] <= 0),
                          c && F.push(L[D] <= 0, L[N] <= 0),
                          F.every(function (t) {
                            return t
                          }))
                        ) {
                          ;(j = P), (w = !1)
                          break
                        }
                        O.set(P, F)
                      }
                      if (w)
                        for (
                          var B = h ? 3 : 1;
                          0 < B &&
                          "break" !==
                            (function (t) {
                              var e = b.find(function (e) {
                                var n = O.get(e)
                                if (n)
                                  return n.slice(0, t).every(function (t) {
                                    return t
                                  })
                              })
                              if (e) return (j = e), "break"
                            })(B);
                          B--
                        );
                      e.placement !== j && ((e.modifiersData[r]._skip = !0), (e.placement = j), (e.reset = !0))
                    }
                  },
                  requiresIfExists: ["offset"],
                  data: {_skip: !1},
                },
                {
                  name: "preventOverflow",
                  enabled: !0,
                  phase: "main",
                  fn: function (t) {
                    var e,
                      n,
                      r,
                      o,
                      i,
                      a,
                      c,
                      u,
                      s,
                      l,
                      f,
                      p,
                      d,
                      v,
                      m,
                      g,
                      b,
                      x,
                      _,
                      w,
                      j,
                      A,
                      k,
                      T,
                      P,
                      z,
                      I,
                      C = t.state,
                      M = t.options,
                      L = t.name,
                      N = M.mainAxis,
                      F = void 0 === N || N,
                      B = M.altAxis,
                      U = void 0 !== B && B,
                      H = M.boundary,
                      G = M.rootBoundary,
                      $ = M.altBoundary,
                      W = M.padding,
                      V = M.tether,
                      Y = void 0 === V || V,
                      K = M.tetherOffset,
                      q = void 0 === K ? 0 : K,
                      X = R(C, {boundary: H, rootBoundary: G, padding: W, altBoundary: $}),
                      Q = S(C.placement),
                      J = E(C.placement),
                      Z = !J,
                      tt = O(Q),
                      et = "x" === tt ? "y" : "x",
                      nt = C.modifiersData.popperOffsets,
                      rt = C.rects.reference,
                      ot = C.rects.popper,
                      it = "function" == typeof q ? q(Object.assign(Object.assign({}, C.rects), {}, {placement: C.placement})) : q,
                      at = {x: 0, y: 0}
                    nt &&
                      (F &&
                        ((e = "y" === tt ? de : me),
                        (n = "y" === tt ? he : ve),
                        (r = "y" === tt ? "height" : "width"),
                        (o = nt[tt]),
                        (i = nt[tt] + X[e]),
                        (a = nt[tt] - X[n]),
                        (c = Y ? -ot[r] / 2 : 0),
                        (u = J === be ? rt[r] : ot[r]),
                        (s = J === be ? -ot[r] : -rt[r]),
                        (l = C.elements.arrow),
                        (f = Y && l ? h(l) : {width: 0, height: 0}),
                        (d = (p = C.modifiersData["arrow#persistent"] ? C.modifiersData["arrow#persistent"].padding : {top: 0, right: 0, bottom: 0, left: 0})[e]),
                        (v = p[n]),
                        (m = D(0, rt[r], f[r])),
                        (g = Z ? rt[r] / 2 - c - m - d - it : u - m - d - it),
                        (b = Z ? -rt[r] / 2 + c + m + v + it : s + m + v + it),
                        (_ = (x = C.elements.arrow && y(C.elements.arrow)) ? ("y" === tt ? x.clientTop || 0 : x.clientLeft || 0) : 0),
                        (w = C.modifiersData.offset ? C.modifiersData.offset[C.placement][tt] : 0),
                        (j = nt[tt] + g - w - _),
                        (A = nt[tt] + b - w),
                        (k = D(Y ? Math.min(i, j) : i, o, Y ? Math.max(a, A) : a)),
                        (nt[tt] = k),
                        (at[tt] = k - o)),
                      U && ((T = "x" === tt ? de : me), (P = "x" === tt ? he : ve), (I = D((z = nt[et]) + X[T], z, z - X[P])), (nt[et] = I), (at[et] = I - z)),
                      (C.modifiersData[L] = at))
                  },
                  requiresIfExists: ["offset"],
                },
                {
                  name: "arrow",
                  enabled: !0,
                  phase: "main",
                  fn: function (t) {
                    var e,
                      n,
                      r,
                      o,
                      i,
                      a,
                      c,
                      u,
                      s,
                      l,
                      f,
                      p,
                      d,
                      v,
                      m = t.state,
                      g = t.name,
                      b = m.elements.arrow,
                      x = m.modifiersData.popperOffsets,
                      _ = S(m.placement),
                      E = O(_),
                      w = 0 <= [me, ve].indexOf(_) ? "height" : "width"
                    b &&
                      x &&
                      ((n = m.modifiersData[g + "#persistent"].padding),
                      (r = h(b)),
                      (o = "y" === E ? de : me),
                      (i = "y" === E ? he : ve),
                      (a = m.rects.reference[w] + m.rects.reference[E] - x[E] - m.rects.popper[w]),
                      (c = x[E] - m.rects.reference[E]),
                      (s = (u = y(b)) ? ("y" === E ? u.clientHeight || 0 : u.clientWidth || 0) : 0),
                      (l = a / 2 - c / 2),
                      (f = n[o]),
                      (p = s - r[w] - n[i]),
                      (v = D(f, (d = s / 2 - r[w] / 2 + l), p)),
                      (m.modifiersData[g] = (((e = {})[E] = v), (e.centerOffset = v - d), e)))
                  },
                  effect: function (t) {
                    var e = t.state,
                      n = t.options,
                      r = t.name,
                      o = n.element,
                      i = void 0 === o ? "[data-popper-arrow]" : o,
                      a = n.padding,
                      c = void 0 === a ? 0 : a
                    null != i && ("string" != typeof i || (i = e.elements.popper.querySelector(i))) && T(e.elements.popper, i) && ((e.elements.arrow = i), (e.modifiersData[r + "#persistent"] = {padding: M("number" != typeof c ? c : L(c, ye))}))
                  },
                  requires: ["popperOffsets"],
                  requiresIfExists: ["preventOverflow"],
                },
                {
                  name: "hide",
                  enabled: !0,
                  phase: "main",
                  requiresIfExists: ["preventOverflow"],
                  fn: function (t) {
                    var e = t.state,
                      n = t.name,
                      r = e.rects.reference,
                      o = e.rects.popper,
                      i = e.modifiersData.preventOverflow,
                      a = R(e, {elementContext: "reference"}),
                      c = R(e, {altBoundary: !0}),
                      u = N(a, r),
                      s = N(c, o, i),
                      l = F(u),
                      f = F(s)
                    ;(e.modifiersData[n] = {referenceClippingOffsets: u, popperEscapeOffsets: s, isReferenceHidden: l, hasPopperEscaped: f}),
                      (e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {"data-popper-reference-hidden": l, "data-popper-escaped": f}))
                  },
                },
              ],
            }),
            Re =
              (n(31),
              n(74),
              n(127),
              n(129),
              n(36),
              n(18),
              n(131),
              n(82),
              n(133),
              document.documentElement.dir,
              (Ce = {}),
              (Me = 1),
              {
                set: function (t, e, n) {
                  void 0 === t[e] && ((t[e] = {key: e, id: Me}), Me++), (Ce[t[e].id] = n)
                },
                get: function (t, e) {
                  if (!t || void 0 === t[e]) return null
                  var n = t[e]
                  return n.key === e ? Ce[n.id] : null
                },
                delete: function (t, e) {
                  var n
                  void 0 === t[e] || ((n = t[e]).key === e && (delete Ce[n.id], delete t[e]))
                },
              }),
            De = {
              setData: function (t, e, n) {
                Re.set(t, e, n)
              },
              getData: function (t, e) {
                return Re.get(t, e)
              },
              removeData: function (t, e) {
                Re.delete(t, e)
              },
            }
          n(32), n(135), n(83), n(137)
          var Ne,
            Fe,
            Be = function (t, e, n) {
              t.setAttribute("data-psa-".concat(V(e)), n)
            },
            Ue = function (t, e) {
              t.removeAttribute("data-psa-".concat(V(e)))
            },
            He = function (t) {
              if (!t) return {}
              var e = $({}, t.dataset)
              return (
                Object.keys(e)
                  .filter(function (t) {
                    return t.startsWith("psa")
                  })
                  .forEach(function (t) {
                    var n = (n = t.replace(/^psa/, "")).charAt(0).toLowerCase() + n.slice(1, n.length)
                    e[n] = W(e[t])
                  }),
                e
              )
            },
            Ge = function (t, e) {
              return W(t.getAttribute("data-psa-".concat(V(e))))
            },
            $e = function (t) {
              var e = t.getBoundingClientRect()
              return {top: e.top + document.body.scrollTop, left: e.left + document.body.scrollLeft}
            },
            We = function (t) {
              return {top: t.offsetTop, left: t.offsetLeft}
            },
            Ve = function (t, e) {
              Object.assign(t.style, e)
            },
            Ye = function (t, e) {
              t && (t.classList.contains(e) ? t.classList.remove(e) : t.classList.add(e))
            },
            Ke = function (t, e) {
              t.classList.contains(e) || t.classList.add(e)
            },
            qe = function (t, e) {
              Object.keys(e).forEach(function (n) {
                t.style[n] = e[n]
              })
            },
            Xe = function (t, e) {
              t.classList.contains(e) && t.classList.remove(e)
            },
            Qe = function (t, e) {
              return t.classList.contains(e)
            },
            Je = (n(140), n(37), Element.prototype.querySelectorAll),
            Ze = Element.prototype.querySelector,
            tn =
              ((Ne = new CustomEvent("Bootstrap", {cancelable: !0})),
              (Fe = document.createElement("div")).addEventListener("Bootstrap", function () {
                return null
              }),
              Ne.preventDefault(),
              Fe.dispatchEvent(Ne),
              Ne.defaultPrevented),
            en = /:scope\b/
          !(function () {
            var t = document.createElement("div")
            try {
              t.querySelectorAll(":scope *")
            } catch (t) {
              return !1
            }
            return !0
          })() &&
            ((Je = function (t) {
              if (!en.test(t)) return this.querySelectorAll(t)
              var e = Boolean(this.id)
              e ||
                (this.id = (function (t) {
                  for (; (t += Math.floor(1e6 * Math.random())), document.getElementById(t); );
                  return t
                })("scope"))
              var n = null
              try {
                ;(t = t.replace(en, "#".concat(this.id))), (n = this.querySelectorAll(t))
              } finally {
                e || this.removeAttribute("id")
              }
              return n
            }),
            (Ze = function (t) {
              if (!en.test(t)) return this.querySelector(t)
              var e = nn.call(this, t)
              return void 0 !== e[0] ? e[0] : null
            }))
          var nn = Je,
            rn = Ze,
            on = U(),
            an = /[^.]*(?=\..*)\.|.*/,
            cn = /\..*/,
            un = /::\d+$/,
            sn = {},
            ln = 1,
            fn = {mouseenter: "mouseover", mouseleave: "mouseout"},
            pn = [
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
            dn = {
              on: function (t, e, n, r) {
                Z(t, e, n, r, !1)
              },
              one: function (t, e, n, r) {
                Z(t, e, n, r, !0)
              },
              off: function (t, e, n, r) {
                if ("string" == typeof e && t) {
                  var o = Y(J(e, n, r), 3),
                    i = o[0],
                    a = o[1],
                    c = o[2],
                    u = c !== e,
                    s = X(t),
                    l = "." === e.charAt(0)
                  if (void 0 === a) {
                    l &&
                      Object.keys(s).forEach(function (n) {
                        var r, o, i, a, c
                        ;(r = t),
                          (o = s),
                          (i = n),
                          (a = e.slice(1)),
                          (c = o[i] || {}),
                          Object.keys(c).forEach(function (t) {
                            var e
                            ;-1 < t.indexOf(a) && tt(r, o, i, (e = c[t]).originalHandler, e.delegationSelector)
                          })
                      })
                    var f = s[c] || {}
                    Object.keys(f).forEach(function (n) {
                      var r,
                        o = n.replace(un, "")
                      ;(!u || -1 < e.indexOf(o)) && tt(t, s, c, (r = f[n]).originalHandler, r.delegationSelector)
                    })
                  } else {
                    if (!s || !s[c]) return
                    tt(t, s, c, a, i ? n : null)
                  }
                }
              },
              trigger: function (t, e, n) {
                if ("string" != typeof e || !t) return null
                var r,
                  o = e.replace(cn, ""),
                  i = e !== o,
                  a = -1 < pn.indexOf(o),
                  c = !0,
                  u = !0,
                  s = !1,
                  l = null
                return (
                  i && on && ((r = on.Event(e, n)), on(t).trigger(r), (c = !r.isPropagationStopped()), (u = !r.isImmediatePropagationStopped()), (s = r.isDefaultPrevented())),
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
                    tn ||
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
            hn = dn,
            vn = function (t, e) {
              return t.closest(e)
            },
            mn = function (t, e) {
              return t.matches(e)
            },
            gn = function (t, e) {
              var n,
                r = 1 < arguments.length && void 0 !== e ? e : document.documentElement
              return (n = []).concat.apply(n, et(nn.call(r, t)))
            },
            yn = function (t, e) {
              var n = 1 < arguments.length && void 0 !== e ? e : document.documentElement
              return rn.call(n, t)
            },
            bn = function (t, e) {
              var n,
                r = (n = []).concat.apply(n, et(t.children))
              return r.filter(function (t) {
                return t.matches(e)
              })
            },
            xn = function (t, e) {
              for (var n = [], r = t.parentNode; r && r.nodeType === Node.ELEMENT_NODE && 3 !== r.nodeType; ) this.matches(r, e) && n.push(r), (r = r.parentNode)
              return n
            },
            _n = function (t, e) {
              for (var n = t.previousElementSibling; n; ) {
                if (n.matches(e)) return [n]
                n = n.previousElementSibling
              }
              return []
            },
            Sn = function (t, e) {
              for (var n = t.nextElementSibling; n; ) {
                if (this.matches(n, e)) return [n]
                n = n.nextElementSibling
              }
              return []
            }
          n(38), n(39), n(40), n(142)
          var En = (function () {
              function t() {
                !(function (t, e) {
                  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                })(this, t)
              }
              var e, n, r
              return (
                (e = t),
                (n = [
                  {
                    key: "_getCoordinates",
                    value: function (t) {
                      var e = rt(t.touches, 1)[0]
                      return {x: e.clientX, y: e.clientY}
                    },
                  },
                  {
                    key: "_getDirection",
                    value: function (t) {
                      var e = t.x,
                        n = t.y
                      return {x: {direction: e < 0 ? "left" : "right", value: Math.abs(e)}, y: {direction: n < 0 ? "up" : "down", value: Math.abs(n)}}
                    },
                  },
                  {
                    key: "_getOrigin",
                    value: function (t, e) {
                      var n = t.x,
                        r = t.y
                      return {x: n - e.x, y: r - e.y}
                    },
                  },
                  {
                    key: "_getDistanceBetweenTwoPoints",
                    value: function (t, e, n, r) {
                      return Math.hypot(e - t, r - n)
                    },
                  },
                  {
                    key: "_getMidPoint",
                    value: function (t) {
                      return {x: (t.x1 + t.x2) / 2, y: (t.y1 + t.y2) / 2}
                    },
                  },
                  {
                    key: "_getVectorLength",
                    value: function (t) {
                      var e = t.x1,
                        n = t.x2,
                        r = t.y1,
                        o = t.y2
                      return Math.sqrt(Math.pow(n - e, 2) + Math.pow(o - r, 2))
                    },
                  },
                  {
                    key: "_getRightMostTouch",
                    value: function (t) {
                      var e = null,
                        n = Number.MIN_VALUE
                      return (
                        t.forEach(function (t) {
                          t.clientX > n && (e = t)
                        }),
                        e
                      )
                    },
                  },
                  {
                    key: "_getAngle",
                    value: function (t, e, n, r) {
                      return Math.atan2(r - e, n - t)
                    },
                  },
                  {
                    key: "_getAngularDistance",
                    value: function (t, e) {
                      return e - t
                    },
                  },
                  {
                    key: "_getCenterXY",
                    value: function (t) {
                      var e = t.x1,
                        n = t.x2,
                        r = t.y1
                      return {x: e + (n - e) / 2, y: r + (t.y2 - r) / 2}
                    },
                  },
                  {
                    key: "_getPinchTouchOrigin",
                    value: function (t) {
                      var e = rt(t, 2),
                        n = e[0],
                        r = e[1],
                        o = {x1: n.clientX, x2: r.clientX, y1: n.clientY, y2: r.clientY}
                      return [this._getVectorLength(o), this._getCenterXY(o)]
                    },
                  },
                  {
                    key: "_getPosition",
                    value: function (t) {
                      return {x1: t.x1, x2: t.x2, y1: t.y1, y2: t.y2}
                    },
                  },
                ]) && it(e.prototype, n),
                t
              )
            })(),
            On = {time: 250, pointers: 1},
            wn = (function () {
              function t(e) {
                var n,
                  r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                return (
                  (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                  })(this, t),
                  ((n = o.call(this))._element = e),
                  (n._options = ut(ut({}, On), r)),
                  (n._timer = null),
                  n
                )
              }
              !(function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function")
                ;(t.prototype = Object.create(e && e.prototype, {constructor: {value: t, writable: !0, configurable: !0}})), e && lt(t, e)
              })(t, En)
              var e,
                n,
                r,
                o = ft(t)
              return (
                (e = t),
                (r = [
                  {
                    key: "NAME",
                    get: function () {
                      return "press"
                    },
                  },
                ]),
                (n = [
                  {
                    key: "handleTouchStart",
                    value: function (t) {
                      var e = this,
                        n = this._options,
                        r = n.time,
                        o = n.pointers
                      t.touches.length === o &&
                        (this._timer = setTimeout(function () {
                          hn.trigger(e._element, "press", {time: r}), hn.trigger(e._element, "pressup", {touch: t})
                        }, r))
                    },
                  },
                  {
                    key: "handleTouchEnd",
                    value: function () {
                      clearTimeout(this._timer)
                    },
                  },
                ]) && st(e.prototype, n),
                r && st(e, r),
                t
              )
            })(),
            jn = {threshold: 10, direction: "all"},
            An = "swipe",
            kn = (function () {
              function t(e, n) {
                var r
                return (
                  (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                  })(this, t),
                  ((r = o.call(this))._element = e),
                  (r._startPosition = null),
                  (r._options = vt(vt({}, jn), n)),
                  r
                )
              }
              !(function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function")
                ;(t.prototype = Object.create(e && e.prototype, {constructor: {value: t, writable: !0, configurable: !0}})), e && gt(t, e)
              })(t, En)
              var e,
                n,
                r,
                o = yt(t)
              return (
                (e = t),
                (n = [
                  {
                    key: "handleTouchStart",
                    value: function (t) {
                      this._startPosition = this._getCoordinates(t)
                    },
                  },
                  {
                    key: "handleTouchMove",
                    value: function (t) {
                      if ((t.preventDefault(), this._startPosition)) {
                        var e = this._options,
                          n = e.direction,
                          r = e.threshold,
                          o = this._getCoordinates(t),
                          i = {x: o.x - this._startPosition.x, y: o.y - this._startPosition.y},
                          a = this._getDirection(i),
                          c = a.x,
                          u = a.y
                        if ("all" === n) {
                          if (u.value < r && c.value < r) return
                          var s = u.value > c.value ? u.direction : c.direction
                          return hn.trigger(this._element, "".concat(An).concat(s)), hn.trigger(this._element, An, {direction: s}), void (this._startPosition = null)
                        }
                        var l = "left" === n || "right" === n ? "x" : "y"
                        a[l].direction === n && a[l].value > r && (hn.trigger(this._element, "".concat(An).concat(a[l].direction)), (this._startPosition = null))
                      }
                    },
                  },
                  {
                    key: "handleTouchEnd",
                    value: function () {
                      this._startPosition = null
                    },
                  },
                ]) && mt(e.prototype, n),
                t
              )
            })(),
            Tn = {threshold: 20, direction: "all", pointers: 1},
            Pn = "pan",
            zn = "".concat(Pn, "start"),
            In = "".concat(Pn, "end"),
            Cn = "".concat(Pn, "move"),
            Mn = (function () {
              function t(e) {
                var n,
                  r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                return (
                  (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                  })(this, t),
                  ((n = o.call(this))._element = e),
                  (n._options = St(St({}, Tn), r)),
                  (n._startTouch = null),
                  n
                )
              }
              !(function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function")
                ;(t.prototype = Object.create(e && e.prototype, {constructor: {value: t, writable: !0, configurable: !0}})), e && wt(t, e)
              })(t, En)
              var e,
                n,
                r,
                o = jt(t)
              return (
                (e = t),
                (r = [
                  {
                    key: "NAME",
                    get: function () {
                      return Pn
                    },
                  },
                ]),
                (n = [
                  {
                    key: "handleTouchStart",
                    value: function (t) {
                      t.preventDefault(), (this._startTouch = this._getCoordinates(t)), (this._movedTouch = t), hn.trigger(this._element, zn, {touch: t})
                    },
                  },
                  {
                    key: "handleTouchMove",
                    value: function (t) {
                      t.preventDefault()
                      var e,
                        n = this._options,
                        r = n.threshold,
                        o = n.direction,
                        i = this._getCoordinates(t),
                        a = this._getCoordinates(this._movedTouch),
                        c = this._getOrigin(i, this._startTouch),
                        u = this._getOrigin(i, a),
                        s = this._getDirection(c),
                        l = this._getDirection(u),
                        f = s.x,
                        p = s.y
                      "all" === o && (p.value > r || f.value > r) && ((e = p.value > f.value ? p.direction : f.direction), hn.trigger(this._element, "".concat(Pn).concat(e)), hn.trigger(this._element, Pn, u))
                      var d = "left" === o || "right" === o ? "x" : "y"
                      l[d].direction === o && s[d].value > r && hn.trigger(this._element, "".concat(Pn).concat(o), Et({}, d, i[d] - a[d])), (this._movedTouch = t), hn.trigger(this._element, Cn, {touch: t})
                    },
                  },
                  {
                    key: "handleTouchEnd",
                    value: function (t) {
                      t.preventDefault(), (this._movedTouch = null), (this._startTouch = null), hn.trigger(this._element, In, {touch: t})
                    },
                  },
                ]) && Ot(e.prototype, n),
                r && Ot(e, r),
                t
              )
            })(),
            Ln = {pointers: 2, threshold: 10},
            Rn = "pinch",
            Dn = "".concat(Rn, "end"),
            Nn = "".concat(Rn, "start"),
            Fn = "".concat(Rn, "move"),
            Bn = (function () {
              function t(e) {
                var n,
                  r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                return (
                  (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                  })(this, t),
                  ((n = o.call(this))._element = e),
                  (n._options = It(It({}, Ln), r)),
                  (n._startTouch = null),
                  (n._origin = null),
                  (n._touch = null),
                  (n._math = null),
                  (n._ratio = null),
                  n
                )
              }
              !(function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function")
                ;(t.prototype = Object.create(e && e.prototype, {constructor: {value: t, writable: !0, configurable: !0}})), e && Mt(t, e)
              })(t, En)
              var e,
                n,
                r,
                o = Lt(t)
              return (
                (e = t),
                (r = [
                  {
                    key: "NAME",
                    get: function () {
                      return Rn
                    },
                  },
                ]),
                (n = [
                  {
                    key: "handleTouchStart",
                    value: function (t) {
                      var e, n, r
                      t.touches.length === this._options.pointers &&
                        (t.preventDefault(),
                        (n = (e = Tt(this._getPinchTouchOrigin(t.touches), 2))[0]),
                        (r = e[1]),
                        (this._touch = n),
                        (this._origin = r),
                        (this._startTouch = this._touch),
                        hn.trigger(this._element, Nn, {ratio: this._ratio, origin: this._origin}))
                    },
                  },
                  {
                    key: "handleTouchMove",
                    value: function (t) {
                      var e,
                        n,
                        r = this._options,
                        o = r.threshold,
                        i = r.pointers
                      t.touches.length === i &&
                        (t.preventDefault(),
                        (this._touch = this._getPinchTouchOrigin(t.touches)[0]),
                        (this._ratio = this._touch / this._startTouch),
                        (e = "number" == typeof this._startTouch && "number" == typeof this._touch),
                        (n = !isNaN(this._startTouch) && !isNaN(this._touch)),
                        e &&
                          n &&
                          (this._origin.x > o || this._origin.y > o) &&
                          ((this._startTouch = this._touch), hn.trigger(this._element, Rn, {ratio: this._ratio, origin: this._origin}), hn.trigger(this._element, Fn, {ratio: this._ratio, origin: this._origin})))
                    },
                  },
                  {
                    key: "handleTouchEnd",
                    value: function () {
                      var t = "number" == typeof this._startTouch && "number" == typeof this._touch,
                        e = !isNaN(this._startTouch) && !isNaN(this._touch)
                      t && e && ((this._startTouch = null), hn.trigger(this._element, Dn, {ratio: this._ratio, origin: this._origin}))
                    },
                  },
                ]) && Ct(e.prototype, n),
                r && Ct(e, r),
                t
              )
            })(),
            Un = {interval: 500, time: 250, taps: 1, pointers: 1},
            Hn = (function () {
              function t(e, n) {
                var r
                return (
                  (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                  })(this, t),
                  ((r = o.call(this))._element = e),
                  (r._options = Ft(Ft({}, Un), n)),
                  (r._timer = null),
                  (r._tapCount = 0),
                  r
                )
              }
              !(function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function")
                ;(t.prototype = Object.create(e && e.prototype, {constructor: {value: t, writable: !0, configurable: !0}})), e && Ut(t, e)
              })(t, En)
              var e,
                n,
                r,
                o = Ht(t)
              return (
                (e = t),
                (r = [
                  {
                    key: "NAME",
                    get: function () {
                      return "tap"
                    },
                  },
                ]),
                (n = [
                  {
                    key: "handleTouchStart",
                    value: function (t) {
                      var e = this,
                        n = this._getCoordinates(t),
                        r = n.x,
                        o = n.y,
                        i = this._options,
                        a = i.interval,
                        c = i.taps,
                        u = i.pointers
                      return (
                        t.touches.length === u &&
                          ((this._tapCount += 1),
                          1 === this._tapCount &&
                            (this._timer = setTimeout(function () {
                              e._tapCount = 0
                            }, a)),
                          this._tapCount === c && (clearTimeout(this._timer), (this._tapCount = 0), hn.trigger(this._element, "tap", {origin: {x: r, y: o}}))),
                        t
                      )
                    },
                  },
                  {key: "handleTouchEnd", value: function () {}},
                  {key: "handleTouchMove", value: function () {}},
                ]) && Bt(e.prototype, n),
                r && Bt(e, r),
                t
              )
            })(),
            Gn = {angle: 0, pointers: 2},
            $n = "rotate",
            Wn = "".concat($n, "end"),
            Vn = "".concat($n, "start"),
            Yn = (function () {
              function t(e, n) {
                var r
                return (
                  (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                  })(this, t),
                  ((r = o.call(this))._element = e),
                  (r._options = Kt(Kt({}, Gn), n)),
                  (r._origin = {}),
                  r
                )
              }
              !(function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function")
                ;(t.prototype = Object.create(e && e.prototype, {constructor: {value: t, writable: !0, configurable: !0}})), e && Xt(t, e)
              })(t, En)
              var e,
                n,
                r,
                o = Qt(t)
              return (
                (e = t),
                (r = [
                  {
                    key: "NAME",
                    get: function () {
                      return $n
                    },
                  },
                ]),
                (n = [
                  {
                    key: "handleTouchStart",
                    value: function (t) {
                      t.preventDefault(), t.touches.length < 2 || ((this._startTouch = t), (this._origin = {}), hn.trigger(this._element, Vn, {touch: t}))
                    },
                  },
                  {
                    key: "handleTouchMove",
                    value: function (t) {
                      t.preventDefault()
                      var e = t.touches
                      if (1 === e.length && 1 === this._options.pointers)
                        var n = this._element.getBoundingClientRect(),
                          r = n.left,
                          o = n.top,
                          i = {x: r + n.width / 2, y: o + n.height / 2},
                          a = e[0]
                      else {
                        if (2 !== t.touches.length || 2 !== this._options.pointers) return
                        var c = Wt(t.touches, 2),
                          u = c[0],
                          s = c[1],
                          l = {x1: s.clientX, x2: u.clientX, y1: s.clientY, y2: u.clientY}
                        ;(i = this._getMidPoint(l)), (a = this._getRightMostTouch(t.touches))
                      }
                      ;(this.currentAngle = this._getAngle(i.x, i.y, a.clientX, a.clientY)),
                        this._origin.initialAngle
                          ? ((this._origin.change = this._getAngularDistance(this._origin.previousAngle, this.currentAngle)), (this._origin.distance += this._origin.change))
                          : ((this._origin.initialAngle = this._origin.previousAngle = this.currentAngle), (this._origin.distance = this._origin.change = 0)),
                        (this._origin.previousAngle = this.currentAngle),
                        (this.rotate = {currentAngle: this.currentAngle, distance: this._origin.distance, change: this._origin.change}),
                        hn.trigger(this._element, $n, this.rotate)
                    },
                  },
                  {
                    key: "handleTouchEnd",
                    value: function (t) {
                      t.preventDefault(), (this._origin = {}), hn.trigger(this._element, Wn, {touch: t})
                    },
                  },
                ]) && qt(e.prototype, n),
                r && qt(e, r),
                t
              )
            })(),
            Kn,
            qn = "touch",
            Xn = (function () {
              function t(e) {
                var n = this,
                  r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "swipe",
                  o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}
                !(function (t, e) {
                  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                })(this, t),
                  (this._element = e),
                  (this._event = r),
                  (this.swipe = "swipe" === r ? new kn(e, o) : null),
                  (this.press = "press" === r ? new wn(e, o) : null),
                  (this.pan = "pan" === r ? new Mn(e, o) : null),
                  (this.pinch = "pinch" === r ? new Bn(e, o) : null),
                  (this.tap = "tap" === r ? new Hn(e, o) : null),
                  (this.rotate = "rotate" === r ? new Yn(e, o) : null),
                  (this._touchStartHandler = function (t) {
                    return n._handleTouchStart(t)
                  }),
                  (this._touchMoveHandler = function (t) {
                    return n._handleTouchMove(t)
                  }),
                  (this._touchEndHandler = function (t) {
                    return n._handleTouchEnd(t)
                  })
              }
              var e, n, r
              return (
                (e = t),
                (r = [
                  {
                    key: "jQueryInterface",
                    value: function (e) {
                      return this.each(function () {
                        var n = De.getData(this, "psa.touch"),
                          r = "object" === Zt(e) && e
                        if ((n || !/dispose/.test(e)) && ((n = n || new t(this, r)), "string" == typeof e)) {
                          if (void 0 === n[e]) throw new TypeError('No method named "'.concat(e, '"'))
                          return n[e]
                        }
                      })
                    },
                  },
                ]),
                (n = [
                  {
                    key: "dispose",
                    value: function () {
                      hn.off(this._element, "touchstart", this._touchStartHandler),
                        hn.off(this._element, "touchmove", this._touchMoveHandler),
                        hn.off(this._element, "touchend", this._touchEndHandler),
                        (this.swipe = null),
                        (this.press = null),
                        (this.pan = null),
                        (this.pinch = null),
                        (this.tap = null),
                        (this.rotate = null)
                    },
                  },
                  {
                    key: "init",
                    value: function () {
                      hn.on(this._element, "touchstart", this._touchStartHandler), hn.on(this._element, "touchmove", this._touchMoveHandler), hn.on(this._element, "touchend", this._touchEndHandler)
                    },
                  },
                  {
                    key: "_handleTouchStart",
                    value: function (t) {
                      this[this._event].handleTouchStart(t)
                    },
                  },
                  {
                    key: "_handleTouchMove",
                    value: function (t) {
                      this[this._event].handleTouchMove(t)
                    },
                  },
                  {
                    key: "_handleTouchEnd",
                    value: function (t) {
                      this[this._event].handleTouchEnd(t)
                    },
                  },
                ]) && te(e.prototype, n),
                r && te(e, r),
                t
              )
            })(),
            Qn = U()
          Qn &&
            ((Kn = Qn.fn[qn]),
            (Qn.fn[qn] = Xn.jQueryInterface),
            (Qn.fn[qn].Constructor = Xn),
            (Qn.fn[qn].noConflict = function () {
              return (Qn.fn[qn] = Kn), Xn.jQueryInterface
            }))
          var Jn = Xn
          n(143)
          var Zn = {
              world:
              europe:
                '\n<svg viewbox="0 0 1000 684">\n <path d="M654.7 528.1l0.5 0.4 2 2.9 1.4 0.5 1.9 1.3 1.4 3.2 0.1 2.2-0.5 2.6 0.3 2.1-0.8 0.8 0.7 2 0.2 1.9 1.2 2.2 1.2 1.1 1.3 2.4 1.6-0.2 1.3 1.1 0 1.1 1.1 1.8-0.8 2.6-1.7 0.8-1.2 3.1-0.3 2-0.6 0.5-1.9 0.3-1.7 1.3 1 2.2-0.9 0.7-0.3 1.5-0.7 0.7-2.7-0.9-0.7-2.5-1.7-2.7-4.9-2.6-1.2-1.1 0.4-1.5-0.1-1.4-1.4-2.4 0.3-2.6 0.8-2.2-0.3-2.7 0.1-2.1-0.7-2.9 0.5-2.1 0.9-1.3-0.2-2.2-1.5-1.1-1.6-0.2 0-3.1-0.3-0.6 1.7 0-1.7-2.8 3.2-5.3 1.1 0.3 0.8 2.1 3.4-1.2z" id="AL" name="Albania">\n </path>\n <path d="M423.4 528.8l-2.8 1.1-0.7-0.4 0-2.1 0.9-0.7 2.6 0.6 0 1.5z" id="AD" name="Andorra">\n </path>\n <path d="M974.6 572.4l-3.2-2.8-2.3-1.7-1.6-0.7-3.5 0.4-2.9-0.9-1.8-0.9 0.5-0.6-1.9-3-0.8-1.9 1-1.4 0.2-2.3-1.7-3.3-1.7-1.2-1.3-1.6 4.4-0.3 5.3-1.3 3.2 0.3 1.1-0.2 3.5-0.1-0.5-0.7 2.3-0.5 1.3 1.5 1.6 1-0.9 0.9 2.3 1 1.2 0 3.3 2.5 0 0.7-1.9 1.5-0.2 1.1 3.2 3.4 2.4 1.4 3.2 1.5 0.2 0.9-0.9 2.5-3 0 0.6 0.9 1.9 1.2 6.1 4.4 1.5-0.3 2.2 0.9 0.2 1.3-1 1.4 1.9 1.4 0.8 1.5-1.8 0.5 1.4 1.5 0.5 2.6-2.2-0.1-2.5 0.5-3-4.7 0.1-1-3.1-2.1 0.1-1.7-0.8-1.2-1.7 0.2-1.9 0.9-2.9-1.6-1.2 0.2-0.3-1.1-1.8-1.7-3.2 0.9z" id="AM" name="Armenia">\n </path>\n <path d="M607.8 434.9l-0.9 2.4 0.1 0.8 1.6 2.9 2.3 2.9-0.6 0.7-0.6 1.9 0.7 2-3.9 0.3-2.5-0.9-1.3 1.4 2.6 0.7 0.5 1.1-0.5 1.4-2.2 1.2 0.4 1.5-0.5 0.7 1.1 1.6-0.3 1.8-2.5 0.5-1.8 1.7-1.3 0.9-0.1 1.9-2.4-0.5-1.6 0.2-2.3 1.1-2.8-0.2-2.6 0.2-1.9 0.7-1 1.3-3 1.2-5-0.7-5-0.9-2.6-0.5-4-0.3-8.6-1.5-1.1-0.5-3.1-3.5 0-2.3-4.7 1.5-3.1-0.2-3.4 0.3-1.4 0.6-1.2 2.2-1.1 0.4-2.1-0.4-0.9-0.8-3-0.3-0.5-1.5-0.8-0.3-2 1.9-2.3-0.4-1.5-0.8-0.4-1-3.3-0.8 0.3-0.8-1.1-2.5 1-3-0.9-0.7 1.7-0.5 0.7-0.5 3.5 1.6 0.9 1.4 1.2 0.3-0.1 1.3 1.6-0.5 1-1.6 0.2-1.9 2.8-0.1 2.7 0.4 1.4 1.9 3.8-0.5 1.1-0.9 3.9-1.5 5.7-0.5 0.1-1.4 2 0.3 1.5 0.8 2.5-0.5 1.1 0.5 0.2 1.1 1.2 0.9 1.7 0.4 0.3-1.5-0.3-1.9-1.7-0.3 0.6-1.3-0.1-1.3-2.5-2.8 0.6-1.3 3.1-1.8 2.9-0.8 1-1 0.7-2.9 2.3 0.9 1.3-0.9 0.2-2.8 2.2 1.2 0.8 1.3 3.9 0.4 1.4-0.7 2.5 0.4 0.1-1.1 1.3-1.6 1.2 0 0.3-3.2 1.2-0.2 1.6 0.8 1.4-0.4 4.8 1.7 1.5-0.1 3 1.7 3.8 0.2 1.2-0.9 5.1 1.5 1 1.6z" id="AT" name="Austria">\n </path>\n <path d="M470 401.8l1.6-0.5 0.8 0.8 1.2 0.1 3 2.3-0.4 1.5 1.7 0.7 0.4 2-2.3 1.3-0.6 1.7-1.7-0.7-1.3 1.3-1.4 2.5-0.2 1.7 2 2.4-1.1 1.7-3.4 0.4-2.8-2.6-3.3-1.5-1.7-0.1-0.4-2-0.6-0.6 0.8-2.7-1.9 0.6-0.5 1.4-1.3 0.6-2.2 0.3-2.3-0.3-0.5-0.6 0.7-1.4-0.7-0.7 0.4-1.6-1.6-1.1-3.6-0.4-0.9 0.3-0.6-2-4.2-1.1-0.5-2-1.6-1.8-3.2 1-2.9-2.4 0-1.2-0.9-2.2 5.1-2.5 4.7-1.7 0.3 1.3 1.2 0.7 1.2-0.6 3.9 1.1 3.2-1.5 0.6-1.2 2.1 0.3-0.2-0.9 1.4-0.7 1.5 0.8 1.5-1 1.1 1.3 2.5-0.8 0.5 1.6 2.6 1.4 1.9-0.4 1.7 1.3 2.6 1.1-1 2.9-1.1 1.3 0.7 1.1z" id="BE" name="Belgium">\n </path>\n <path d="M759.6 509.6l0.2 3.7-0.9 1.8-2-0.6-2.2 0.5-1 2-1.2 1.2 0 2.6 0.4 4.2-1.6 0.7-2.9 3.7 3 1.8 1.7 2.2 2.4 2.5 0.5 1.2-1.7-0.2-0.9 0.4-1.8 0-1.5 0.6-3.4-2.5-3.5 0.3-1.5 1.1-3.4 0.4-1 2.2-1.9 0.3-0.3 1.4-1.6-0.5-1.6 1.1 0.7 1 0.9 2.7-0.2 0.8-2.5 1.2-1.8-0.3-3.2 0.4-3.4 0.9-1.7-1.1-3.7-1.2-0.9 0.6-2.4-1.4-1.2-1.7-1.6 0.5-4.2-0.1-0.2 0.9-1.9 0.2-3 1.1-2.6-0.2-2.4 0.2-1 1-3-0.2 0-4.2 0.5-1.7-0.9-1-1.7-3.3-3.4-1.8-3.3-3.2 1-0.3 1.1-1.7-1.4-2.9 0-3.3 1.1-0.6 1.8-0.1 1.1-1.6 1.6-1.7 0.3-1.4-1.6-1-1.3-1.6-2.9-1.5-2.4-3.9-0.6-2.4 0.4-2.3 2.1-1 0.2-1.9 0.9-0.7 4.3 2.5-1.8 2 0.9 1.8 3.7-0.6 3.9 0.3 5.3 1 3.5 0.4 2.5-0.5 9.4 1.7 4.2 0.2 2.3-0.6 1.6-0.9 1.2-1.6 3.3-2.1 3.2-1.2 4.4-0.9 2.9-0.4 4.5 2.3 3.2 0.4 0.9 0.6 1.7-0.5 2.5 2.6 2.2 0.7 2.6 0.5 2 0z" id="BG" name="Bulgaria">\n </path>\n <path d="M638.2 492.2l2.8-0.7 1.5 0.8-0.5 2.5-1.6 2.7-0.1 2.6 0.5 0.8 2.4 1.2 3.3 2.9-0.3 0.8-3.1-0.1-0.5 0.8 3.2 3.7-0.2 2.2-2.5-0.3-0.7 0.8-3.2 0.5 1.4 2.2-2.3 0.2-2 1.7-0.5 1.7 0.1 1.5-1.7 0.2-0.5 0.7 0.6 3 1.1 1.6-0.1 0.8-1.1 1-1.7-0.7-6.2-3.8-0.6-0.9-1.6 0.1-1.1-0.6 0.3-1.6-3-2.5-1.5-1.6-0.4-2.2-2.4-1.1-5-4.1-1.7-2-2.8-2.3-2.3-2.4-1.3-4-3.4-3.2-1.9-1.3-0.1-1.4 0.3-5 1.2-0.6 1.8 0.4 1.7 1.8 1.8 1 2.7-3.2 3.2 0.3 1.5-1.2 2.7 1.6 2.5 0.1 2.8 0.7 1.7-0.6 1.6 1.3 2.2-1 1.8 0.3 1.8-0.2 2.6 0.7 2.2 0.2 1.1 0.8 1.3 2.2 2.2 0.2z" id="BA" name="Bosnia and Herzegovina">\n </path>\n <path d="M724.5 321.5l1.8 1.3 1.2-0.4 1.9-0.1 3.1 2.2 1.6-0.9 1.5-0.3 3.6 1.2 0.2 2.3 1.7 1.5 2.1-1.3 2.7-1.1 3.4 0 2.7 0.9 2.4 1.8 3.5 1.4 0.4 2.5-0.6 1.8 2.1 2.1 0.5 1.3-1.3 2 0 2 4.1 2 0.5 0.5-0.5 1.8 1.4 0.6 1.8 2.4 1.5 1.4 4.9 2.1 0.7 0.8-0.4 2.8 5.3 0.5 3.2 1.3 0 1.1 0.7 1.1 2.8 1.4 0.6 1.7-2.6 1-0.3 0.9-3 1.8-3.5-0.2-2.4-1.5-2.9 0.1-1.4 2.7 3.9 3.3 0.6 1-0.2 1.5 1 1.5 0.5 3.3 1.6 1.4 1.3 1.8-5-0.1-1.4 0.8-1.7-0.4-1.1 0.5-2.2 2.3-0.8 1.2-1 3.3 1.8 3.6-0.8 1.4-2.7-0.9-0.5-1.2-2-1.1-7.1 0.6-2.3 0.8-0.6-0.5-2.5-3-3.8 1.6-0.6 1.1-1-0.3-0.8-1.3-5.1-1-1.9 0.7-1.9-0.5-1.2 1.7-0.8-1.4-1.1-0.4-3 0.1-1-0.3-1.8-2.1-2.3 0-6.1-0.9-6.5-1.5-7.8-0.4-2.4 0.1-2.3 0.5-5.9 0.5-0.8 1.4-1.6 1.6-1.9 1.2-1.1-0.5-1.9-0.3-1.1 0.5 0.1 1.4-1-1.6-0.1-1.3 0.8-1.5-0.4-1.1 0.2-2.4-0.8-1-1.8-1-3.3-1.3 0-1.2 2-2.7 0.8-0.5 4-1.7 0.6-1.6-0.9-3.9-1.7-3.6-2.9-4.9-2.1-5.1 2.9 0.4 1.6-0.3 3.7-0.3 1.6 0.9 3.3-1.3 1.8 0.1 0.8-2.6 2 0.2 1.4-1.2 2.1-0.5 1-0.7 1.7 2.3 2-0.2 0-1-0.9-1.1-1.9-0.5 0.5-2 1-1.5-0.4-2.3 1.1-3 2.6-0.6 0.8-0.6 1-2 3.6 0.1 0.4-1.1 1.3-1-3.9-1 0.7-3.1 0-1.8 2.6-0.6 1.2-1.5 1.1-0.3 3 0.4 3.1 0.1 0.4-1.7 2.5-2.4 1.4-0.8 1.3-0.2z" id="BY" name="Belarus">\n </path>\n <path d="M514.1 449.1l0.8 1.1 2.6 1.3 1.2 0 0.9 0.7-1 3-0.5 1.5 0.1 1.7 1.2 0.1 3.3 0.8 0.4 1 1.5 0.8 2.3 0.4 2-1.9 0.8 0.3 0.5 1.5-0.5 3.1 0.5 1.8-1.9-0.2-1-0.9-1.3 0.3-0.6 1.8 1.5 3.5-1.2 0.3-1.4-1.9-0.7-0.1-2.9 1.1-2-0.8-0.8-2.1-2 0.1 0 2.9-0.5 1.1-2.2 2.6-0.2 1 0.7 1.7-1.2 0.7-0.9-1.4-1.3-1.2 0.4-1.2-2.2-0.6-2.4-2-0.2-2.5-1-0.6-3.4 2.9 0.6 1.5-1.6 2.2-2.4 1.4-3.1-0.8-2.6 1-2.4 0.5-1.4-0.7-0.9-1.4-2.3-2.3 0.5-1.7-0.8-2.2-2.2-0.3-1.9 0.1-2.3 1.5 0.5 1.3-2.3 1.6-1.4-0.1 0-1 1.5-1 0.3-1.5-0.8-0.7 1.1-2.9 3-2.2 0.5-2.9 2.1-0.9 3.8-4 0.6-0.9-1.3-1.1 1.8-1.4 1.1 0 0.8 0.8 2.7-0.3 0.8-1.4 1.5-0.7 1 0.3 2.8 0.1 3.3-0.6 2.6 0.2-0.2-1.5 1.3-1.2 1.3 0 1.4 1 0.8-0.2 1.1 0.9 3.7-0.2z" id="CH" name="Switzerland">\n </path>\n <path d="M578.9 400.5l2.1-0.4-0.1-1.9 3.3 0.8 0.3 1.1 1 1.1 4.6 1.1 2.7 1.1 0.8 0.9 3.2-0.7 1.8 1.2-0.7 1.1-1.6 1.2 1.6 0.9 2 1.8 1.5 1.9 1 0.4 3.5-2.5-1.7-2.4 1.3 0 2.2 0.6 3.3 1.9 3.6-0.7 0 1.6-1.4 0.5 2.7 2.3 1 0.6 1.8-1 3.5 1.8 0.5-0.2 2.7 0.8 0.5 1.8 2.8 2.2 0.5 1.6-2.8 0.3-2 1.5-0.6 0.8-2.3 1.2-0.7 3-1.6 0.8-2.1 1.9-1.5 0.7-1.7 0.2-3.6-0.5-1.4 1.2-1.1 2.8-1-1.6-5.1-1.5-1.2 0.9-3.8-0.2-3-1.7-1.5 0.1-4.8-1.7-1.4 0.4-1.6-0.8-1.2 0.2-0.3 3.2-1.2 0-1.3 1.6-0.1 1.1-2.5-0.4-1.4 0.7-3.9-0.4-0.8-1.3-2.2-1.2-0.6-0.7-2.9-2.2-1.3 0-1.3-1.6-2.5-1.5-2.9-2.6-1.3 0-2.3-2-1.8-2.7-1.4-1.5 1.2-1.7-0.6-1.6-2.3-1.3-2.5-3.4 0.5-0.7 1.9 2 1.9-2.6 1.1-0.6 2.6-0.6 2.1 0.4 0.8-1.3 2-0.3 0.6-1 1.6-0.7 1.1 0.1 0.6-1.2 4.4-1 3.5-1.5 1.9-0.6-1.5-1.5 0.8-0.6 2.2 0.4 1.5 1.5 0 0.9 1.4 0.6 0.9-0.7z" id="CZ" name="Czech Republic">\n </path>\n <path d="M567.9 355.2l-3.4-0.1-0.2-1.7-1.1-1-0.1-1 4.7 2.6 0.1 1.2z m-34.8-8.1l-1.8 0-1.4-0.7 0.8-1 1.7 0.4 0.7 1.3z m28.3 0.5l-1.3 0.7-1.3 0-1.3 1.3-2.1-1.1-0.5-1.1 0.1-2.2 0.6-1.4 2-0.9 0.9 1.2 1.7 0.6-0.5 1.7 1.7 1.2z m-46.6-6.6l1.8 0.7 1.6 1.6 0.1 1.4-1.7 1.6 3.2-0.3 0.8 1.2 1.7-0.4 4.5 1.8 3.2-0.9 0.7 1.4-0.6 1.5-2.2 1.6 1.4 1.2 2.1-0.2 3.6 0.9 3.3-2.5 1.1-0.5 3.6-0.3 5.1-4.5 5.3 0.9 1.5 1.9 3.7 2.1 3.2-0.2 1.3 2 0.8 2.5 1.9 1.3 2.8 0.5 0.7 2.6 1.8 4.1-0.3 2.7-1.9 1.8-0.7 1.6 1.6 1.4 3.3 2.1 1.4 1.7-0.6 2.6 2 2.3 0.8 1.9-0.7 2.6-0.8 1.1 1.9 3.1 0 1.6 2.2 0.9 1.6 3.2-0.4 2.3-1.6 3.6-0.9 0.7-1.4-0.6 0-0.9-1.5-1.5-2.2-0.4-0.8 0.6 1.5 1.5-1.9 0.6-3.5 1.5-4.4 1-0.6 1.2-1.1-0.1-1.6 0.7-0.6 1-2 0.3-0.8 1.3-2.1-0.4-2.6 0.6-1.1 0.6-1.9 2.6-1.9-2-0.5 0.7 2.5 3.4 2.3 1.3 0.6 1.6-1.2 1.7 1.4 1.5 1.8 2.7 2.3 2 1.3 0 2.9 2.6 2.5 1.5 1.3 1.6 1.3 0 2.9 2.2 0.6 0.7-0.2 2.8-1.3 0.9-2.3-0.9-0.7 2.9-1 1-2.9 0.8-3.1 1.8-0.6 1.3 2.5 2.8 0.1 1.3-0.6 1.3 1.7 0.3 0.3 1.9-0.3 1.5-1.7-0.4-1.2-0.9-0.2-1.1-1.1-0.5-2.5 0.5-1.5-0.8-2-0.3-0.1 1.4-5.7 0.5-3.9 1.5-1.1 0.9-3.8 0.5-1.4-1.9-2.7-0.4-2.8 0.1-0.2 1.9-1 1.6-1.6 0.5 0.1-1.3-1.2-0.3-0.9-1.4-3.5-1.6-0.7 0.5-2.2-1.2-5.1-2.3 1 1.6-3.7 0.2-1.1-0.9-0.8 0.2-1.4-1-1.3 0-1.3 1.2 0.2 1.5-2.6-0.2-3.3 0.6-2.8-0.1-1-0.3-1.1-1.3 0-1.5 0.6-2-0.2-2.4 0.3-1.5 1-1.8 1.4-5.5 3.5-3.8-0.1-1.3-1.6-0.6-4.8-0.8-2-1.4-3 0.6-2.1-0.1-0.3-0.9-1.4-0.4-1.8 0.7-3.5-4.3-1.4-0.1 0.6-3 0.9-0.9 0-1.4-2.8-1.1-1.5-1.6-0.3-2.2 0.6-1.7 2.3-1.3-0.4-2-1.7-0.7 0.4-1.5-3-2.3 0.6-2.4-1.9-1.2 0.5-0.8 2.2-1.6-0.7-1.2 1.3-2.8 0-1.2-3.1-4.1 0.7-1.1 1.8-0.7 2.3 0.8 4.5-1.3 0.7-1-1-0.9 0.3-0.9 2.6-1.6 0.6-2.6-0.8-1-2.6-0.3-0.7-1 0.6-1.6 3.1 0.1 1.1-3.8 0.7-1.7-0.1-4.3-1.7-1.4 0.5-2.7 1.1-1.4 0.9-0.4 4-0.3 4.5 0.1 1.9 2.2-0.6 1.2 1.6 0.3 0.9-2.4 1.4 0.8 1.1-0.1-0.5-1.7 0.2-1.6 0.9-1.4 3.3 0.6 3.6-0.3 0.1-0.6-2.8-0.5-0.9-1.1-0.2-3.9-1.5-0.8-1.6 0.3 0-1.5 3.4-1.1 0-1-3.4-3.8-0.2-1.6 2.7 0.1 5.2 1.3 3.1-0.7 1.5 0.4z" id="DE" name="Germany">\n </path>\n <path d="M533.5 340l2.1 1 2.4 0.3 0.4 1.9-3.5 0.7-5.1-2.1 0.1-2.5 2.3-0.2 1.3 0.9z m13.7-1.1l-2.3 0.1-1.9 1-0.3-1.2 1.6-1 1.2 0.2 1.7 0.9z m-28.8 1.2l-1.2 0.2-1.7-0.5-0.6-2.3 2.7 1.1 0.8 1.5z m8 2l-1.4-1.5 2.5-2.9 0.7-0.2-1.8 4.6z m50.1-4l-2.4-0.2-2.4-1 0.1-2 0.5-0.9 4.5 2.3-0.3 1.8z m-52.1-8.7l2.3 4.3-0.1 2.8-1.8 1.2-2.1 0-5.4-1.7-1.7-2.9-0.1-2.3 4.8-1.4 2.6 0.8 1.5-0.8z m23.3 0.2l-1 0.6-0.7-0.9 0.9-0.9 0.8 1.2z m-23.9-2.8l-0.9 0 0-3 1.5 1.6-0.6 1.4z m22.6 0l0.1 1.5-0.7 0.7-2 0.7-1.1 1.8 2 1.2 0.5 1.5-1 0.7-2.6 0.7 0 5.6-2.2 0.6-1.5-2.1-0.1-0.9-1.3-3.1-2-0.4-2.2 0.1-1.5-1.8 0.1-2.1-1-2-1.3-0.6 0.4-1.4 3.1-0.2 1.5-1.9 0-0.9 1.8-0.2 0.8 0.7 0.1 2.6 1.6 0.5 1.1-2.9-0.9-1.1 3.9-2.2 1.1-0.1 3 0.9-0.4 2.1 0.7 2z m-31.6 14.2l-1.5-0.4-3.1 0.7-5.2-1.3-2.7-0.1-0.5-2.1-0.8-1.4 1.1-0.3-0.9-3.9-3.2-1.3-2.5-1.4 0.5-5.6-1-2.3 0.1-6.9 1.3-0.1 3.1 0.8 1.5 0.9 0.6-1.9 1.6-1.6 2-0.8 1.6 1.3 0.3-4.5-1.6-0.5-1.3 0.4-1.3 1.9-1 2.4-1.9 0.2-1.5 0.7-2.4-1.4 0.1-1.4 1.6-1.9 2-1.9 2.2 0 1.6-0.6 3.9 0.1 2.8-1.3 2.8-3.6 1.5-1.5 3.3-0.5 3-1.7-0.8 2.5 1.2 1.7 0 3-0.9 1-1.4 2.5 0.2 5.6 2.5 1.5 4.1 0 1 1.1-0.7 2.2-2.6 1.4-0.9 0-1.4-1.1-1.1 0.9-1.2 5.1-2-0.1-1.2 0.5 1.4 1.2-1.3 0.8-3.4 3.1 1.1 3.4-0.2 0.9-1.5 1.3-0.6 1.1 2.3 0.3 1.3 2.9z" id="DK" name="Denmark">\n </path>\n <path d="M655.5 285.3l3.9 0.2 4 1.8-1.8 0.7-3.7 2.5-0.3 0.5-2.6-0.1-1.4 0.2-1 0.9-0.9 2.8-1.6 0.5-0.3-0.9 1.6-1.8-1.5-1.4-1.9-0.7 0.9-1.8-1.6-1.6 1.5-0.2 1 0.5 2-0.5 0.5-1 3.2-0.6z m8.3 1l-0.9 0.2-2.4-1.1 1-1 1.9 0.5 0.4 1.4z m-5.4-4l-0.8 0.7-0.9-0.6-0.9 1.6-1.3 0.3-1.9-2.5-2.9-0.5-1.3-0.7 4.5-0.4 1.2-1.6 1.3 0.1 0.4 0.9 2.1 0.3 0.9 1-0.4 1.4z m53.2 18.9l-1.9-0.2-3.4-1-4 1.2-2.8-1.1-3.5-2.7-0.6-0.7-2.3-0.5-5.6-2.5-1.1 0.7-1.5-1-8.4 2.8 1-3.4 0.1-3.6-2.3-0.4-0.9 1.3-1.3 0.3-4.1-1.3-1.2-2.1-1.6-1.1-0.8-1.2 0-1.8-1.5-2 0.7-1.1-0.7-2.8 3-1.2 3.3-0.2 0.9-1.3 2-1.3 2.3 0.2 3.1-1 6.3 0.1 0.4-1.7 3.2 0 7.6 1.2 1.8 0 2.8 1.2 1.4 0.3 4 0 6.3 0.5 1.2-1 1.5 1.2-1 1.4-1.2 0.4-0.9 3.2-0.8 1-1.7-0.3-2.5 0.2-2 0.5-1.3 1.1 0.1 1.1 2.6 2.3 1.4 2.8 2.6 2.2 0.8 1.3 2.4 2.9 1.8 2.5-2.3 0.6-1.2 2-0.2 2z" id="EE" name="Estonia">\n </path>\n <path d="M646.5 260l2 0.2-0.6 2.8-2.3-1.8 0.9-1.2z m-1.9 0.5l-2.1-0.6 0.9-0.8 1.2 1.4z m-6.5-2.7l-1.5 0.7-0.3-1.7 1.8 1z m25.5-62.9l-1.5 0.5-1.3-0.3-0.2-0.9 2-0.6 1 1.3z m30.1-54.6l-3.7 1.3 1.6 0.8 0.8 1.2-2 3.2 0.1 0.6 3.1 4 7.2 1.7 2.3 1.8 3.6 2.3 1.8 0.9 0.1 1.9-3 3-2.6 3.1-1.2 1.7 0.4 1.7 2.6 2.1 2.3 2.2 3 3.5 3 2.5 3 4.2 0.4 1.4-3.7 0.7 1.2 0.9-0.6 1.3 0.3 1.9-0.5 1.5 1.9 0.3 0.3 1.3-1.7 1 0 0.9 1.4 1.7 1 0.6 3.2 0.6 0.9 1.6-1 1.7 1.8 2.2 4.5 1.8 0.7 1.3 0.2 1.7-2.4 3-2 0.8 0.7 0.8 4.5 2.6 6.6 2.9 2.6 1.3 2.1 1.9 2.2 1.6 0.5 1-1.6 4.5-0.7 1.2-2.2 2.2-3.4 2.8-2.3 2.3-5.3 5.9-1.9 1.5-2.1 2.2-4.9 3.3-0.7 0.8-2.5 1.5-5.6 5.2-3.5 1-2.6-1.1-1.8 0.2-1.2 0.8-2.5 0.2-2 0.6-1-0.7-0.7 0.6-1.9 0.2-2-1 0.3 1.5-3.3 1.5-0.8-0.9-2 1-2.1 0.2-1.1 0.8-5.9 1.1-1.5 1.3-1.2-0.3-6.7 1.1-2.9-0.2-2.7 2-1.8 0.4 1.5-3-2.4-1.1-1.2-1.6-0.7 0.4-0.3 1.5-1.5 0.8-2-0.1-0.4-2.4 0.8-2.3-3.6-0.6-3.8-1.4-0.9-0.1-0.7-1.3-2 0.9-2.1-0.9-1.7-5.3 0-1.3 0.9-1.6-0.1-3.4-0.6-2 1.1-0.6-0.9-1.6-2.2-3-1.6-1.1 0.5-3.3-0.6-1.6-1.9-1.1-1.1-2.9 0.6-2.4 2.4-2.2 0-1.2 0.9-1.1-0.5-1.3 2.7-0.5 1 0.4 2.4-0.4 1.9-1-1.1-1.8 1.5-0.7 1.2-1.2-0.1-1 2.3-0.5 2.4-1.9 2.3-1.1 2.3-1.9 1.1-0.1 0.3-1.3 2.5-1.9 0.8-1.6 2.3-1.8 2.2-3.9 3.8-1.2 3.8 0.3-0.6-1.7 1-0.3-0.6-1.3-1-0.6 0-4.6-1.3-0.9-4.5-1.6-1.7-0.1-1.2-1.2-4.6-0.7-1.6-2.5-1.9-2.2-1.8-0.6-1.3-2.6 0-1.3 1.5-1.3-0.1-1.8 0.7-1.4-0.6-0.9-3.3-2.6-0.8-1.6 0.1-1.1 1-0.8-0.6-1.3-2.8-0.4 0.3-1.9-0.7-1.4-0.4-2.4 1.1-1-1.8-0.9-1.9-1.5-1.4-0.1-1.2-1.6-3.5-1.8-8.3-1.7-4.2-1.8-4.8-2.3-2.9-1.1-0.4-0.9-2.9-0.8 0.5-0.4 2.1 0 1.9 0.4 0.5-0.6-1-1.4 1.9-1.1 3.6 0 7.9 5.5 1.4 1.8 6.9 0.6 0.8 0.5 1.8-0.1 3.7-0.9 1.2-1.2 1.5 0.1 3.6 1.1 3.9 0.8 2.6 0.8 1.3-0.6 0.5-1.7 1.6-1.3 2.1-0.3 1.5-1.4-0.7-3.2 0.6-1.7 0.7-3.8 2.6-1.7 1.7-1.8 2.1-0.2 3.8 0.4 0.9-0.2 3.5-1.6 2.9-0.3 1.8 1.2 4.2 2 4.2 1.1 3.6 0.8 2.6 2.7-0.7 1-3.2 2.9 0 0.7 1.7 1.3z" id="FI" name="Finland">\n </path>\n <path d="M389.1 403.1l-1.6 1.3-1.3 0.2-2.5-1.2 0-0.5 2.5-1.1 2 0.6 0.9 0.7z m-36.5-39.7l1.3 0.9-3.4 1.9-1.2-0.6-0.9-1.2-0.1-1.9 1.2-0.5 1.8 0 1.3 1.4z m-23.3-11.4l-2.1 0.4-2.9 0 0.1-1.5-1.4-0.5-1.8-2.7-1.3-0.5-1.9 1.6 0.5 0.9-2.4 1.8-2.9-0.3-0.8-0.7-2.1-0.4-0.2-1-2.7-2 1-1.4 2.9-0.9-1-1.4 0.2-0.8 1.6 0.1 2.2-0.8 1.2-1.6 1-2.3 1.9-0.9 1.3 0.6 1.9-2 2.8-0.1 2.7-0.7 3.9 0.3 1.1 1.1 0.5 1.7 1.3 1.7 1.7 1.4 0 0.9-2 1.1 3.5 0.3 1.2 2.5-2.1 0.3-0.1 1.4 1.1 0.2-0.6 1.4-2.6 0.6-1.4 2.2-1 0.5-2.3-0.5z m13.7-20.2l-2.6-0.5-0.6-2 0.9-1.4 1.8 0.7 0.6 1.3-0.1 1.9z m-11.5-7.1l0.7 3.4-2.4 1.3-0.8-2.4-1.4 1 0.2-1.9 1.5-0.3 2.2-1.1z m1.7 1.7l-1.1-1.2 1.6-2.2 1.7-1-0.1 1.6-2.1 2.8z m2.5-7.8l-4.6 0.8 0.6-3-1.9-0.9 0.3-0.9 2.1-0.5 1.7 1.7 2.1 0.6-0.3 2.2z m-16.2-11.4l-1.5-0.2-0.4-1.4 0.2-2.3 1.6 0.2 0.1 3.7z m12.8-5.7l-0.1 2.8 2.9 0.8 2-0.1 0.4 0.6-3.3 2.7-0.7-0.1-0.2-2.2-1.4 0.3-1.9-0.3-1.2-1.9-2.7-0.5-0.9-1.1 1.4-0.6 0.3-1.2 2.8-0.6 1.5-0.7 0.9 1 0.2 1.1z m-11.9-2.6l1.2 0.9-1.1 1.3-1.5 0-2.2-1 0.2-0.5 3.4-0.7z m11.8-9.9l-1.6 2.6-1 0.7-0.2 1.7-3 1.6-3.2 2.4-1.4-1 2.6-1.7-2.1-1-0.2-2.6 0.8-0.7 1.4 0.7 1.9-0.3-0.7-1.2 6.3-3.2 0.4 2z m34.8-2.2l0 1.2-1.3 1.6-2.2 1.2-4.2 2.8-2.5 1.3-0.5 1.6 1.4 0.1 0.2 0.8-2.2 1.6-0.6 1.5 3-0.4 5.3-1.5 3.6 0.5 2.6-0.3 6.9 0.2 1.9-0.3 2.3 1.3 1 1.7-2.8 3.4-0.8 2.3-2 3.5-1.9 2-2 2.5-2.1 1.1-3.1 0.5 4.5 1.9-1.4 1.8-2.4 0.1-2.3 1.7-2.1 0.7 3.6 1.1 2.4-1 2.7-0.1 5.2 1.9 3.6 3.4 2 1.5 0.5 1.1 2.1 6.9 1.5 3.8 1.6 1.8 4.5 1.6 1.1 0.6 3.4 3.3 3.4 2.4-1.4 1.5 0.4 1.2 2.1 2.9 0.3 1.6-1.3-0.1-2.3-1.4-0.3 0.7 5 3.3 1.6 2 1 2.7-0.6 1.1-3 2.7 2.8 1.4 1.2-0.2 2-2.1 1.7-0.2 4.2 0.3 3.8 1 3.3 2.1 0.7 1.1 0.4 3.1-2.2 5.8-2.8 1.9-0.5 1.7-2.1 0.9-1.7-0.3-2.4 1.2 1.7 0.6 0 1.7-1.1 0.6-2.5 0.2 1.1 2 2.5 0.4 4.3-0.2 1.9 0.2-0.2 2.7-0.4 0.4-3.8 1.7-1 1.8-2.2-0.1-1.1 0.7-5.7 1.9-4.9-0.8-2.9 0.1-4 0.6-4.2-1.2-1.8-0.2-2.8 1.7-4.2 0.5-2-0.2 0.9 1.5-0.9 0.4-3.8-0.5-1 0.5-1.4-0.2-2.7-1.4-2.6-0.1-4.9 1.2-1 1.3-1.3 3.5-1.1 1.2-1.4 0.2-4.5-2.5-1.5 0.5-2.5 0.3-2.7 0.7-3.9 2.4-0.9 1.5-1.3 0.2-1.1-0.9-1.4-0.3-2.3 0.8-0.3-1.3 1-1 2.8-0.7 2.5-1.9 2.2-2.3 4.6-3.8 0.8-3.1 2.7-0.7 1.4-2.5 4.1-0.6 2.8 0 2.8 0.5 2.9-0.1 1.1-0.7 1.9-2.4 3.6-3-4.7 1-3.8 2.3-3.2-0.4-2.3-1.9-2.1-0.8-2.1 0.4-0.7-0.9-2.4-1.7-2.6 0-3.6 1.7-2.6-1.2-0.9-2.3 0.3-1.4 1.1-0.7 2.5-0.6 3.8-1.7 2.2-0.7 2.8-1.9 1.2-2.3-0.3-2 0.5-1.4-0.9-1.7 0.3-1.5-3 0.3-2.7 1.2-0.7-1.1 2.8-1.8 1-1.4 2.6-1.7 3.6-1.3 1.9 0.1 3.7-0.7 2.7 1.3-0.8-2.1 1.2-0.4 0.1-2.4 1.6-2.2-1.2-0.6 0.1-2 1.5-0.8 0.7-2.6-1.7-0.5-2.1 0.6-1.7-1.5-2.8-3.6-0.3-1.4 1.6-3.1 2.3-2-1.9-0.8-1.4 0.2-2.7 1.2-2 1.3-2.1 0-0.8-0.9-1.1 0.1-2.5 1.1-3.5-1.3-1.1 2.3-2.6-2.5-0.3-1.9 1.3 0 1.2-2.4 2.9-4 0.6-1.2-0.5-1.4-1.9-1.5 0.3-2.6 0.8-1 1.5-0.4-1.9-1.2-2.9 0.9-1.8 0.9 0.3-2-0.6-0.4-1.5 1.4 0.1 3.3-2.1 5.7-1.1 0.9-1.4-0.5 1.1-3.9 1.4-2.5-0.6-0.3 0.3-3.6 1-2.9 1.7-3.8 2.2-3.5-4.1 2.7-1 0.5-2.4-0.4-0.8-0.7-1-2.3 1.8-0.2 1.7-1.1-1.5-0.7 1.5-0.9 1.7-2.1 0.4-1.9-1-1.5-1.6-0.6-0.2-0.9 1.7-1.9-0.7-1.5 1.6-3.1 3 0.1 1.9-0.4-2.3-2 0.7-2.9 3.7-0.3-0.8-1.8 0.3-2 1.6-0.9 1.3 0.2 1 0.9 2.6-0.9 0.6 0.8 2.8-0.6 3.7-0.3 4.5-0.6 2.2-0.4 2.3 0.2-0.6 1.7z m-0.6-4l-1.3 0.1-1.3-1.4 1.5-0.3 1.1 1.6z m1.3-3.4l2.7 0.6-0.6 1.4-1.4-0.7-2 0.3-1.9-1 0.4-2.1 1.7-0.1 1.2 0.5-0.1 1.1z m3.7-2.3l-1 0.3-0.4-1.2-1.7-0.6 0.4-0.8 2.7 2.3z m16.1-19.5l1.6 1.8 1 0.5-1.3 3.8-0.2 1.6-1 1.7-0.8-0.4 0.9-2.9-0.5-1.1-1.7 0.3-0.4-0.9 1.6-1.4-0.8-2-1.1-0.2 1.5-1.6 1.2 0.8z m2.9 0.4l-1.4-1.3 1.3-0.6 0.1 1.9z" id="GB" name="United Kingdom">\n </path>\n <path d="M972.9 547.7l-2.3 0.5 0.5 0.7-3.5 0.1-1.1 0.2-3.2-0.3-5.3 1.3-4.4 0.3-1.3-1.2-1.9-0.2-1.1-1.7-3.5-2.5-1.2-0.4-0.6-1.1-1.4-0.3-1.4 0.4-0.9 1.9-3.4-0.8-3.6-0.1-1.1 1-4.3-1.3 1.9-3 0.4-1.7-0.4-2.4-1.7-2.7-3.7-8-1.1-1.2-4-1.4-1.1-1.6-3.2-2.1-4.1-0.9-4.8-2.9-2.9-1.7 0.9-2.1 0.8-0.2 4.8 0.9 1.5-0.4 5.9 2.5 3.6 0.7 3.1 1.7 6 0.5 2.8-0.6 1.8 0 2 1.1 2.4-0.2 3.2 1.2 1.5 1.6 3.5 1.4 2.8 0.8 3.2 1.5 0.2 2.4 2.5 0.4 4.3-2.1 2.1-0.7 1.8 0.2 1.9 1.9 0.8-2.2 4.6 1.7 2.1 1.8 2.8-0.1 2.2 1-0.2 4.2 2.9 1.4 1.6 1.2 3.4 0.7 3.1 1.5-1.2 2.1-1.2 0.3 0 1.3 1.1 0.8 0.9 1.5 4.5 2.6 0.9 0.8-0.2 2-1.8 1.4-4.1-2-1.7 0.5-3.2-0.9-1.4-1 0.1-0.7-4-1.4-1.9-0.4-3 2.5z" id="GE" name="Georgia">\n </path>\n <path d="M712.9 637.7l2.3 0 1.7-1 2.2 3.7 1.7-0.1 3.5-0.9 3.7 0.2 1.4 1 2.6 0.2 2.3 0.5 3.3-0.7 0.4 0.4 0.1 2.8 1.2 0.2 0.7-0.7 1.7-0.6 1.8 0 1.6-0.8-0.4 3.5-0.9 0.4-4.4-0.1-8.1 1-5.3 0.4-0.7-0.2-0.7-2.2-3.3-1.1-6.2-1-1.5-0.4-3.1 0.2-1.1-1-0.4-1.8 0.2-1.9 1.4 0.3 0.4-1.4 1.9 1.1z m43.4 1.1l-1.6-2.1 1.1-0.5 1.2 2.4-0.7 0.2z m-54.7-11.4l-1.4 0.2-0.7-2.2 0.5-1 2.1 2.1-0.5 0.9z m62.7 4.1l-1.7-0.4 0.4-1.8-0.7-1.6 2.3-2.7 3.2-1.3 0.9 0.9-0.9 2.5-0.9 1.3 0.4 1-1.6 0.2-1.4 1.9z m-19-10.3l-1.5 1.2-0.9-0.6 1.9-1.2 0.5 0.6z m6.2-2.2l0-0.7 1.3-1.1 2.5-1 1.2 0.6-2.5 1.4-1.5 0.1-1 0.7z m-22.2-5.4l-0.9 1.3-1.3-0.7 0.4-1.2 1.1-0.6 0.7 1.2z m3.6 1.6l-1.1 0.6-1.4-2.2 1.9-2 0.9 0.7 0.1 1.8-0.4 1.1z m5.4-8.8l0.6-1.6 1.6-0.1 0 1.1-2.2 0.6z m-21.7-0.7l-1-0.4 0.4-1.2 1.1 0.5-0.5 1.1z m31.6-3.7l2.8 0.7-0.7 1-1.6 0.9-1.7-0.9-1.2-1.2 2.4-0.5z m-76.7 0.1l0.4 1.2-1.1 1-1.6-1.2-1.2-1.8 0.9-1.1 0.9 1.2 1.7 0.7z m53.1 0.7l-1.4-0.1-2.4-2.1 0.9-1.4 0.9 1.2 1.3 0.1 0.7 2.3z m-57.3-9.7l0.3 1.8 0.9 0.3 1.3 1.6-0.2 1.2-2.1-0.8-1 0.2-1.1-2-1.3 0.2 0.6-1.8 1.4 0.1 1.2-0.8z m70.8 2.5l-1.1 0.9-1.8-1.7 1.4-1.3-2.1-2.4-0.1-1 2.1-0.5 1.3 0.9 0.6 1.2 0.4 2.6-0.7 1.3z m-70.2-6.1l-1.3 0.1-0.4-0.9 0.8-2.4 1.1 0.3 0.2 2.5-0.4 0.4z m34.6-5.4l0.9 1.7 5.5 2.5 2.8 0.3 1.7 2.6-0.2 0.6 1.5 3.8 1.1 0.9 2.7 0.3 0.4 1.9-0.9 0.8-1.9-0.7-2.1-1.6-0.4-1.3-2.2-2.9-3.6-0.2-1.5-0.7-0.6-1.7-1.5-0.9-2-1.9-1.5-1.1-3-1.1-0.6-0.7 1.9-1.3 2.1-0.5 1.4 1.2z m37.9-5.8l-0.1 0.9 1.9 1.5 0.7 1-1.2 2.1-4-0.8-0.8-0.8 1.6-1.3-0.9-0.5-1.2 1.5-2.2-0.7-0.9-0.9 0.7-1.4 1.5 0.1 1.7-0.8 0-0.6 2.3-0.2 0.9 0.9z m-81.3-1.6l-1.3 0.3-1.2-0.8-1.2-1.9-2.2-2.2 0.7-1.1 1.6-0.4 1.4 1.2-1.1 1.2 0.8 0.7 0.9 2.4 1.6 0.6z m67.8-8.6l-0.7 1.4-0.1 1.3-3.8-0.7-0.3-2.3 2.2-0.1 0.8 0.8 1-0.9 0.9 0.5z m2.4-6.9l-1.4 0.4-1.7-1.3 1.4-0.5 1.7 1.4z m-11.9-3l-1.6 0.6-1.8-1.1 1.1-2.3 1.3 0.1 1 1.3 0 1.4z m15.9-1.7l-0.5-0.7-2.1-1.2-4.6-0.6-2.3-0.9-0.9 0.2-2-1-1.2 0.4-2.5 1.7-1.5-0.2-1.6-1-2.2 0.4-1.7 1.9-1.8 1-1.8-0.4-2.3 0-0.2 1.1 2 2.1-0.5 1 0.5 1 2.1 0.1 2.5 1.3-0.7 0.7-3.2-1.2-1.2-0.1-1.2 1.2 3.5 2.7 0.5 1.4-0.6 0.9-1.5-0.8-2.5-3.2-3.1-0.6-0.4 0.6 1.2 2.4 2.9 1.7-0.6 0.6-3-1-1.1-1.6-0.4-2-5.5-2.8-1.4-2.8-2.2 1.3 0.4 2-0.6 3.8 0.4 1.3 3.5 3.7 1.3 2.7 2.6 2.1 2.6 3.2 0.7 1.8-1.3 1.1-1.3-0.5 0.3-1.9-2.2-1.2-1.9 1.2 1.5 2.3 0.5 1.2-0.4 1.3-1.6 0.8-2.6 0.1 2.4 1.4 3.3 1 1.6 1.1 1.5 0.1 1.7 2.1 2.6 0.6 1.7 2.1 2 0.5 1.7 0.8 1 2.1 0.3 2.9 0.6 2.1 0.1 1.7-1.1 0.5-1.3-1.6-4.2-3.6-1-0.4-1 0.7-2.9 0.5-1.9 1.3 1.5 1.3 0.1 1.2 0.8 1.5 2 0.4 2 2.4-3 1-1.1 0.7-0.8-0.5-0.2-1.2-4.3-2.2-0.6 0.6 0.7 2.4 1.3 1.6 2.2 4.3 1.3 3.7-0.2 2.1 1 1.5 0.1 1.5-1.7-1.2-2.2-2.5-0.8-1.5-2.2 0.1-1.3 3.3 0.2 1.9-1.6-1.1-0.2-2.9-2.1-2.8-0.9-0.4-1.3-1.9-1.5 0.6-0.1 2.9-0.4 1-2.2-1.9-2.3-3.5-0.2-1.8 1.4-1.7-0.3-1.2-1.6-2.5-2.1-1.5-1.2-0.5-0.7-1.6-2-1.3 0-1 2-1.7 1-2.6 1.9 0.5 1.4-0.2 2-2.4 1.6 0.1 3.9 2.1 4.2 1.2 2.1 1 1.2 1.1 1.6 0.3-0.5-1.4 0.8-0.4 2.1 0 0.2-1.6-2-0.6-0.8 0.2-2.4-1.4-2.3-0.8-2.2-1.5-1.2 1.3-1.2 0-3.4-0.9-2.1 0.7-4.2 0.7-1.1-1.3-2.6 1-1-0.7-1.9-4.2-1.7-1.9-1.2-0.5-0.2-1.9 1.5-0.2 2.4 0.9 0.9-0.6-0.6-1.6-2.5-0.2-1.8 0.5-2.8-2.2-1.5-1.7-2.2-1.1-1.7-3.4-2.6-2.6 2.7 0.9 0.7-0.7 0.3-1.5 0.9-0.7-1-2.2 1.7-1.3 1.9-0.3 0.6-0.5 0.3-2 1.2-3.1 1.7-0.8 0.8-2.6-1.1-1.8 0-1.1 4.6-0.3 0.9-0.6 2.3 0.6 2.4-1.3 1.7-2.5 0.8-0.3 3-0.4 3.3 0.6 2.9-1 0.2-2.1 2-0.3 3 0.2 1-1 2.4-0.2 2.6 0.2 3-1.1 1.9-0.2 0.2-0.9 4.2 0.1 1.6-0.5 1.2 1.7 2.4 1.4 0.9-0.6 3.7 1.2 1.7 1.1 3.4-0.9 3.2-0.4 1.8 0.3 2.5-1.2 0.2-0.8-0.9-2.7-0.7-1 1.6-1.1 1.6 0.5 1.2 0.3 2.3 1.5 0.9 3.1-3.4 2.5 0.5 4.4-2.5 3.2-0.8 0.4z" id="GR" name="Greece">\n </path>\n <path d="M611.2 521.2l2.3 0.4-1.1 0.9-1.2-1.3z m12.9 1.5l1.6-0.1 0.6 0.9 6.2 3.8 1.7 0.7 1.2 1.9-4.8-3.1-4.4-2.5-3.1-0.7-4.3-2-0.5-0.9 5.8 2z m-6.3-3.5l-0.8 0.1-5.6-0.1-1.7-0.3-0.5-1.3 1.8 0.2 0.5 0.6 6.3 0.8z m-5.3-2.3l-2 0.1-2.6-0.8 0.3-1.1 4.8 0.6-0.5 1.2z m-21.2-16.5l-0.3 0.4-3.3-2.7-0.3-1.9 2.8 2.7 1.1 1.5z m-4.9-6.5l-1.9-0.2 0.8-1.1 1.1 1.3z m-4.2 1.5l-0.9-0.1-1.7-4.2 0.4-1.2-0.8-2 0.9-0.3 0.5 2.1 1 0.9-0.1 1.6 0.7 3.2z m3.7-4.9l-1.5 0.3-1-1-1.3-0.2-1-1 1-0.7 0.5-1.2 3.3 3.8z m49.5-14.7l-0.7 1.5 1.6 2.7 0.2 1.6 1.3 0.4-0.4 2 1.2 1 3 1 0.9 1.5-2.3 0.1-1.7 0.4 0.7 2.6-1 1.6-2.2-0.2-1.3-2.2-1.1-0.8-2.2-0.2-2.6-0.7-1.8 0.2-1.8-0.3-2.2 1-1.6-1.3-1.7 0.6-2.8-0.7-2.5-0.1-2.7-1.6-1.5 1.2-3.2-0.3-2.7 3.2-1.8-1-1.7-1.8-1.8-0.4-1.2 0.6-0.3 5 0.1 1.4 1.9 1.3 3.4 3.2 1.3 4 2.3 2.4 2.8 2.3 1.7 2 5 4.1 2.4 1.1 0.4 2.2 1.5 1.6 3 2.5-0.3 1.6-3.5-2.8-2.6-1.5-3.1-2.8-3.8-1.1-2.7-1.2-3.3 0.6-1.8-0.2-0.7-2.2-5.8-3.9-4.3-4-0.8-1.3 3.1-1.2-1.4-0.8-3.9-3.4-1.2-1.6-0.1-4.1-0.8-1.7-2.9-2.2-1.1-1.1-2.1-0.7-1.4 0.9-0.3 1.9-3 5-1.3 0-3.1-4.2-0.5-1.9-1.3-3.9 0.7-0.5 0.5 0.6 3.3 0.8 1.4-1.3 1.1 0.5 3.6-0.1 0.6-0.3 1.2-2.2 2.6 2.1 1.5 0.7 1.3-0.5 2 0.7 1.6 0.2 1.2-0.4-0.8-2.3 0.7-0.7-1-1.1 2.1-1 2.1-0.6 0.4-1.1-0.2-2.2-0.9-0.9 0.4-1.4 4.4-1.7 0.7-1 2 0 0-1.7 0.9-0.8 2.5 0.6 2.9 1.2 1.7 1.2 0.9 1.3 2.7 1.8 2.2 2.2 1.3 0.7 2.5 0.6 1.3 1.3 3.3 0.9 4.9 0.2 2.5-0.9 1.1-1.4 2.9-0.4z" id="HR" name="Croatia">\n </path>\n <path d="M671 437.8l1.5 0 1.4 2.3 2.2 0.8 0.9 1.1 2.3 0.4 0.9 0.7 0.7 1.7-2.2 2.3-4.6 1.1-1.9 2.4-1.2 1 0.1 1.7-1.4 1.4-0.7 2.5-1.4 1.5 0 1.2-1.6 2.7 0.2 1.3-2.1 1.5-1.5 4.7-1.3 0.9-2.6-0.3-2.5 2-1.4-0.5-3.2 0.9-1-0.5-2.8-0.3-1.1 0.2-2.9-0.4-1 0.3-1.5 1.6-2.2 1-1.6-0.5-2.1 1.3-2.9 0.4-1.1 1.4-2.5 0.9-4.9-0.2-3.3-0.9-1.3-1.3-2.5-0.6-1.3-0.7-2.2-2.2-2.7-1.8-0.9-1.3-1.7-1.2-2.9-1.2-1.9-2.2-1.4-3.3-2.4-0.1 1.8-1.7 2.5-0.5 0.3-1.8-1.1-1.6 0.5-0.7-0.4-1.5 2.2-1.2 0.5-1.4-0.5-1.1-2.6-0.7 1.3-1.4 2.5 0.9 3.9-0.3-0.7-2 0.6-1.9 0.6-0.7 2.1 0.3 4.2 2.7 1.6 0.7 4.7 0.1 7-0.4 0.6-1-0.5-1.3 0.4-1 1.4-0.7 4.3-0.4 2.4-0.6 1-1.5 0.7-0.2 3.5 1.4 5-2.5 1.6-3.5 1.8-0.4 2.7 0.1 2.5 0.6 4.6-0.7 1.4 0.9 2.2 2.2 0.6 0.2 4.3-1.1z" id="HU" name="Hungary">\n </path>\n <path d="M329.3 352l0.7 1.1-2.2 0.4 1.5 5.2 0.6 0.9 0 4.1 0.9 3.2 0.1 2.5-1.3 1.8-0.9 2.1-0.2 1.8-1.6 2.1-1.5 0.9 1.6 1.5-2.8 0.8-2.6-0.3-1.3 0.8-3.9 0.2-3.7 0.7-1.7 1.8-2.5 0.7-1 1-2.3 0.8-1.7-1.2-1 0.2 0.2 2.1-2.9 1.3-1.8 0.3-1 0.7-5.8 1.4-1.9-0.5-3.3 0.8-1.2-0.1 1.6-1.8 1.6-1.3-3.8 0.6-1.4 0.5-0.6-0.6 3.2-1.9-3.3 0.1-3-0.4-0.4-1 2.9-2.3 2.4-0.9-0.1-0.9-5.1 0.1 0.5-1.1 1.7-1 1.8-0.1 1.5 0.6 1.1-0.8-0.6-1.7 3.9-2.3 3-0.3 3.3-0.7 3.3-0.8-2.4-1.2-2.3 1.8-2.6 0.3-1.9-0.5-2.1 0 2.7-2 1.6-1.7-0.8-0.7 2-2.3 3.6-1-1.6-1.3-3.9 0.2-1.4-1.3-2.6 0.1 0.4-1.2-3.5-0.2 0.5-1-0.6-1.1 2.8-0.6-0.2-2 1.9-0.8 2-0.4 0.1-1.1-2-0.2-2 0.4 0.8-2.1-0.8-1-0.4-1.7-0.9-1 2.8-0.2 1.2-0.5 4.7 0.1 1.9 1.3 1.7-1.2 4.8 0.9 0.6-2.6 3.8-1.5 1.2-2-3.7 0.4-3.6-1 0.7-0.8 2.1-0.7 1.9-1.6-0.3-1.1 1.7-2.7 3.1-0.8 2.4 0 1.6-0.9 1.2 2-1 1 0.6 0.9 1.2-0.8-0.5-2.1 0.9-1.3 1.9-0.3 0.6-0.8 3.2 1.7-2.5 1.5-0.5 0.7-1.9 0.9-1 2.3-1.2 1.6-2.2 0.8-1.6-0.1-0.2 0.8 1 1.4-2.9 0.9-1 1.4 2.7 2 0.2 1 2.1 0.4 0.8 0.7 2.9 0.3 2.4-1.8-0.5-0.9 1.9-1.6 1.3 0.5 1.8 2.7 1.4 0.5-0.1 1.5 2.9 0 2.1-0.4z" id="IE" name="Ireland">\n </path>\n <path d="M240.3 177.9l1.2 0.1 2.8-0.8 2.2-1.1 0.5 1.1-2.5 2.4 2.2 0.9 2 0.3-0.1 1.7-1.7 1.6 0.8 0.3 3.5-0.5 1 2.3 1.5-0.2 2.4 0.3 1.4 1.2 1.2-0.3 0.5 0.9-0.7 1.2-1.5 0.6 2.1 2.9 0 1.1-1 0.7-1.3 0-1 2.1-1.2 1.1-2 1-2.6-0.5-1.1 1.5 0.2 1.4-1.3 1.3-5.3 2.1-2.5 0-2.6 0.5-6.2 2-4.7 2.8-2 0.7-3.1 0.3-1.8 0.5-5.9 0.8-2 0.5-1.2 1.1-0.5 1.4-4 1.1-3.8 0.7-6.4-0.5-5.4-1.3-4.5-0.3-3.8-2.5-2.9-1-3.6-1.8-2.3 1.1-12.4 0.3-0.8-0.5-0.2-2.1 1.1-0.8 1.3 1.2 5-1.1 2.7-1.9 2.5-2.7-3.5 1.2-0.2-1.9-0.9-1.1-1.7-0.8-0.3-0.8 1.1-0.9-2.3-1.2-2.6 0.1-6.6-0.5-3.8 1-2 0.1-0.9-1 0-1.1 1.5-0.3 1.8 0.1 4.1-0.6 1.4-0.6 0.8 0.5 3.6-1.1 1 0.2 4-0.2 4.4-0.1 1.1-0.8 0.4-1.1-2.8 0.9-3.7-0.5-0.6-0.9 3.6-1.6 2.7-0.8-0.8-1.3-3.2 0.2-0.7-0.8-2.6-0.4-1.8 0.3-0.9-0.5-2.4 0.6-5.2 0.9-3.3 0.9-3.1-1.1-2.4-0.2 1.4-1.4 2-0.1 1.7 0.8 0.1-3.2 1.2 0.3 2.8 1.1-0.7-2.8 2.2 0.1-2.2-1.6 0.5-1 1.6-0.3 0.8-1 2.4 0 2.3 1.1 0.2 1.4 2.1 0 1.1-0.8 0.9 0.6 0.5 1.2 1.2 0 0.4-2.2-3.6-1.1-0.3-1.4 3.7-0.1-1.7-1.1-3 0.2-1.4-0.4 2.6-1.2 3.4 0 1.4 0.2 2.3 1.7 2 0.6 3.1 2.3 2.2 0.9 0 1.2 0.7 0.8-2.3 3.4 0.9 0.7-0.8 1.6 1.9 0.6 1 1.7 0.9-1.8 1.5-1.9 2.3-1.3 0.9 0.1 0.9 1 0.9 0.1 1.4-2 0.7-4.3 1.7-0.9 1.8 0.7 1.3 1.6 2.6 2.1 1.8-0.5 0.1-2.3 1-1.3 2-0.3 2.2-0.8 2.3-0.2 1.7 1.4 1.2 1.4 1.7 1.1 0.7 1.8 0.9-0.3-0.2-1.7-1.4-2.6 0.3-0.9 4.1 0.2 3 2.3 1.3-0.3 3.6-2.8 2.3 0.8 1.8 0.1 2.8-0.8 0.8-1.2-0.9-2.3 0.6-0.4 2.6-0.6 2.7 0.1 2.6 2.1-0.1 1 1.6 0.8z" id="IS" name="Iceland">\n </path>\n <path d="M602.6 595.6l-1.2 2.5-2.8 4.3-1.5 5.1 0.3 2 1.6 1.4-0.7 0.5 1.6 1.8 0.1 1.3-1.8 1.9-0.4 1.7 0.1 1.5-2.9-0.6-1.4 0.3-3.7-1.4-1.9-2.8-3-2-3 0-1.4-0.5-2.9-1.9-3-1.4-2.6-2.1-1.7-0.4-1.5-1-2.9 0-2.3-1.6-1.3-2.3 1.3-3.7 1.4-0.8 0.9-1.2 2.3 2.3 1.8-0.8 1.4-1.6 2.4 0.1 0.5 0.9 1.4 0.3 2.5 1.6 1.4 0.4 3.4-1 3 0.4 2.8-0.5 1.7-0.6 1.2-1 1.4-0.3 3.5 0.3 2-1.2 0.8 0.2 2-1.2 1.1 1.1z m-78.3-41.5l0.7 0.9 1.8 5-0.6 1.6-1.3 2 0.8 2.8-0.6 11.5-0.6 2.9-0.9 0.4-2.9-1.2-1.5 0.3-1.2-0.6-0.3 3-1.8 2.1-3-0.2-0.7-0.6-2.4-3.8-0.4-4.3 0.6-1.3 0-2.5 1.1-0.1 0-1.7-1.8-1.2 0-1.9 0.7-1.4-0.1-2.6-0.8-0.9-0.8-2.3-2.2-2.4 0.1-3.4 3.4 0.6 1.3-0.3 3.1-1.5 2.1-2.5 1.4-0.5 1.5-1.8 0.7 0.9 2.2 0.8 1.2 1.5 0.9 0.5-0.7 1.4 1 0.8z m8.3-30.8l0.3 1.4-2.5 0.5-1.1-1.1 2.9-0.2 0.4-0.6z m37.9-56.6l-0.2 0.9-3.3 2.3 0.7 1.4 2.3 0.7-1.6 2.1 0.3 1 1.3 0.2-0.4 2 1.9 1.1 1.5 1.3 0.2 1.3-1.5 0.1 0.7-0.6-2-2.2-2 0.9-3.2-0.9-2.1 2-1.5 0.4-1.7 1.1-3.2 1.2-1.8-0.4-1 0.7-0.4 3.1 0.8 0.6 1.5 2.6 1.7 1.1-0.7 1.9-0.9 0.7-1.3-0.5-0.3 1.7 0.9 4.5 1.4 3.2 1.2 1.3 2.7 2.2 2.7 1.1 5.1 3.7 2.8 1.1 0.7 0.7 1.8 2.8 1.6 3.2 1.8 5.1 1.3 2.5 2.3 2.9 4.8 4.1 4.3 2.9 4 1.9 3 0.3 7-0.4 2.6 0.7 0.4 1.2-0.4 0.9-2.9 2.1 0 1.7 1.5 1.2 7.1 3.2 7.2 2.6 2.2 1.4 2.7 2.1 6.4 2.9 1.1 1.4 4 3 1.8 2.4 0.5 1.8-1.5 4.4-1.6-0.5-1.9-1.3-3.1-5.4-5-0.5-2.9-1.3-0.7-1.4-2.3-0.4-1.3 0.9-1.4 2-1.5 3-1.5 4.3 0 1.7 1.1 1.7 2.9 1 2.4 1.5 1.6 1.6 0.3 3.8 0.9 2.1-0.9 1.3-1.9-0.3-2.5 0.7-1.7 1.4-0.7 1.4 0.5 3.4-0.3 1.4-3.3 2.5-1.6 2.5-1 2.3-4.3 0-1.1-1.5-0.1-2.2 0.6-1.3 1.6-0.7 0.9-2.8-0.5-2 1.1-1.6 2.8-0.7 0-2.9-1.4-1.3-1.4-5.1-2.4-4.3-1.4-3.8-1.1-1.8-1.4-1-3.7-0.3-4.6-2.6-0.3-1.1 0.6-1.1-1.1-2.8-2-1.7-2.6 0.6-1.2-0.1-0.1-1.5-2-1.3-2.7-0.2-0.7-0.7-2.6-4-1.7-1.7-2.3 0.1-3.9-0.9-2 0.7-3.2-2.6-2.8-0.9-5.7-5.3-1.8-2-3.5-2.2-2.3-3.2-1.8-1.2-4-1.4-0.3-1.3-3.1-3.1-1.7-1-1.3-2.1-2.5-0.5 0.1-2.7-1.2-3.5-1.7-2.2-1.2-5.3-0.8-1.5-1.8-1.1-4-1.2-5.7-3.4-1.1-0.1-3.4-1.3-2.1-0.2-2.6 1.2-3.1 3.2-2.5 3.4-0.9 0.6-3.4 1.2-3 0.5-0.2-1.5 2.1-2.6-0.3-2-3.3 0.6-5.1-2.4-0.9-0.9-0.1-1.4-0.7-1.3 1.4-2.5 0.8-0.7-0.5-1.7-3.2-1.4-1.5-3.1 0.8-0.4 1.9 0.2 1.7-1.3 1.2-0.3 0.8-2.5-1.8-1.6-1.7-2.6-0.9-0.6-0.1-1.6 2.6-1.7 1.4 0.7 2.4-0.5 2.6-1 3.1 0.8 2.4-1.4 1.6-2.2-0.6-1.5 3.4-2.9 1 0.6 0.2 2.5 2.4 2 2.2 0.6-0.4 1.2 1.3 1.2 0.9 1.4 1.2-0.7-0.7-1.7 0.2-1 2.2-2.6 0.5-1.1 0-2.9 2-0.1 0.8 2.1 2 0.8 2.9-1.1 0.7 0.1 1.4 1.9 1.2-0.3-1.5-3.5 0.6-1.8 1.3-0.3 1 0.9 1.9 0.2-0.5-1.8 0.5-3.1 3 0.3 0.9 0.8 2.1 0.4 1.1-0.4 1.2-2.2 1.4-0.6 3.4-0.3 3.1 0.2 4.7-1.5 0 2.3 3.1 3.5 1.1 0.5 8.6 1.5 4 0.3 2.6 0.5z" id="IT" name="Italy">\n </path>\n <path d="M519.4 458.5l-1.2-0.1-0.1-1.7 0.5-1.5 1.1 2.5-0.3 0.8z" id="LI" name="Liechtenstein">\n </path>\n <path d="M707.9 328.5l0 1.8-0.7 3.1 3.9 1-1.3 1-0.4 1.1-3.6-0.1-1 2-0.8 0.6-2.6 0.6-1.1 3 0.4 2.3-1 1.5-0.5 2 1.9 0.5 0.9 1.1 0 1-2 0.2-1.7-2.3-1 0.7-2.1 0.5-1.4 1.2-2-0.2-0.8 2.6-1.8-0.1-3.3 1.3-1.6-0.9-3.7 0.3-1.6 0.3-2.9-0.4-0.8-3-1.1-0.9-4.5-2.2-2.3-0.7-0.6 0.6-1.3-2 0-2.1 1-3.1-1.3-1.3-1.4-0.6-0.9-1.3-5.7-0.1-2.4-0.6-3.9-1.4-2-1.2-1.8 0.2-0.6-1.2 0.2-1.6-1.1-2.4-1.6-2.9-0.7-3.8 2.8-1.7 3.6-1.9 4.7-1.4 5.9 0.5 4.3-0.1 1 0.9 1.6-0.7 4.9 0.5 2.3 0.1 3.7 0.9 4.6-0.4 1.7-1.3 2.3-0.2 2.4 2.9 6.1 1 0.9 0.4 5.4 3.1 2.6 2.1 1.5 0.7 2.3 0.5z" id="LT" name="Lithuania">\n </path>\n <path d="M475.4 411.7l0.3 2.2 1.5 1.6 2.8 1.1 0 1.4-0.9 0.9-0.6 3-1.3-0.7-2 0.6-1.4 0-2.1-1.2 1.1-1.7-2-2.4 0.2-1.7 1.4-2.5 1.3-1.3 1.7 0.7z" id="LU" name="Luxembourg">\n </path>\n <path d="M711.6 301.2l1.9 0.3 0.5 1.1 3.2 1.7 0.7 2.2-0.8 1.6-0.3 3.1 1.8-0.3 1 0.6 0.3 1.2 1.7 2.1 1.3 0.8 1.9 4.2-0.3 1.7-1.3 0.2-1.4 0.8-2.5 2.4-0.4 1.7-3.1-0.1-3-0.4-1.1 0.3-1.2 1.5-2.6 0.6-2.3-0.5-1.5-0.7-2.6-2.1-5.4-3.1-0.9-0.4-6.1-1-2.4-2.9-2.3 0.2-1.7 1.3-4.6 0.4-3.7-0.9-2.3-0.1-4.9-0.5-1.6 0.7-1-0.9-4.3 0.1-5.9-0.5-4.7 1.4-3.6 1.9-2.8 1.7-0.8-2.8-0.6-5.5 0.1-2.8 1.9-1.6 0.8-1.2 0.6-4.5 2.5-3.6 2.4-0.4 3.1-1 3.5-0.9 1.4 1.9 4.9 3 1.2 1 2.3 3.4 4.4 1.8 3.1-0.6 3.6-2.4 1-1.1 0-1.1-1.2-4.7-1.1-2 0.1-1.3 8.4-2.8 1.5 1 1.1-0.7 5.6 2.5 2.3 0.5 0.6 0.7 3.5 2.7 2.8 1.1 4-1.2 3.4 1 1.9 0.2z" id="LV" name="Latvia">\n </path>\n <path d="M751.4 483.2l-2-2.3 0.9-0.7-1.4-5-0.1-2.6 0.9-4.8-0.5-2.9-1.4-2.3-1.4-2.9-3-2.1-1.3-1.7-2.1-1.8-2.5-3.2-1.5-1.3-3-4.9-2.5-3-2.5-1.6-2.1 0 0.2-0.6 2.3-1.4 0.7 0.2 4 0.1 1.2-1 0.8 0.3 1.6-1 3.5 1 3.6 2.4 2.5 0.3 0.6 1.2 5.6 0.6 1.4 1.9 1.4 1 1.4-0.7 1.4 1.4 0.6 2.3-0.6 3.1 0.6 1.2 2.3 1.2 2.9 2 0 2.4 0.9 1.9 2 1.3 2.1 0.8 1 1.6 0.2 2.9 2.9 1.7-0.6 0.7-2.9 0.4-1.2-1.3-1.6 0.6-2.1-0.8-1.9-0.2-2.1-1-2.5 1.6 0.5 2.1 1 1.7-0.4 2-2.3 1.7 0 1.3-2.5 2.9 0.5 1.4-0.4 1-2 0.2-1.1 0.7z" id="MD" name="Moldova">\n </path>\n <path d="M683.8 531.8l3.3 3.2 3.4 1.8 1.7 3.3 0.9 1-0.5 1.7 0 4.2-2 0.3-0.2 2.1-2.9 1-3.3-0.6-3 0.4-0.8 0.3-1.7 2.5-2.4 1.3-2.3-0.6-0.9 0.6-4.6 0.3-1.3-1.1-1.6 0.2-1.3-2.4-1.2-1.1-1.2-2.2-0.2-1.9-0.7-2 0.8-0.8-0.3-2.1 0.5-2.6 1.7 0.3 0.5-0.8 0.2-2.6 3.4-1.5 1-0.1 1.6 1.2 1.5-1.9 2.1-0.4 2.2-0.3 2-0.9 1.9 0.3 2.3-0.8 1.4 0.7z" id="MK" name="Macedonia">\n </path>\n <path d="M642.4 512.9l0.4 1.2 2.6 1.7 1.9 2 3 1.6 2.1 0.5 5.3 2.9 0.1 1-1.6 0.4-0.2 0.7-2 0.4 0.9 1.5-0.2 1.3-3.4 1.2-0.8-2.1-1.1-0.3-3.2 5.3-0.8 0.3-2.5-0.2 1.6 1.9 1.7 0.8 0.3 0.6 0 3.1-2.1-1.2-0.9-1.8-3.1-2.9-3.5-2 0.1-1-1.6 0.1-1.2-1.9 1.1-1 0.1-0.8-1.1-1.6-0.6-3 0.5-0.7 1.7-0.2-0.1-1.5 0.5-1.7 2-1.7 2.3-0.2-1.4-2.2 3.2-0.5z" id="ME" name="Montenegro">\n </path>\n <path d="M458 260.9l0.1 1.7-1-0.1-0.7-1.1-0.2-2 0.7-0.5 1.1 2z m-1.8-11.1l-1.8 0 0.3-1.3 0.9-0.3 0.6 1.6z m32.5-31.9l-2.3-0.2-1-0.8 2.8-0.8 0.7 0.5-0.2 1.3z m3.6-4.6l-0.3-0.9 2.7-0.6 0.9 1-3.3 0.5z m28-16.6l-4.2 0.3-0.3-1.1 2.1-0.8 1.2 0 1.2 1.6z m6.8-10.5l-2 0.3 0.1-1.1 1.8-0.3 0.1 1.1z m4.1-5.7l-0.1-1.1 1-1.2 1 0.4-0.3 1.5-1.6 0.4z m3.1-24.9l-1.5 0.7 1.1-2.6 1.1-0.7 0.4 1.5-1.1 1.1z m8.5-5.2l2.3 0.2-0.5 0.8-1.4 0.3-1.1 0.8-1.9 0.2-1.9 1-1.6 0.3-0.4-1.2 0.9-1 1.3 0 1-1.2 3.3-0.2z m12.4-9l2.2 2.1-0.3 1.5-1.2 0.7-3.3 0.1-1.6-0.9-2.2 0.6-1.6-1.1 1.6-1.4 2.6 0.4 0.5-1.7 1.7 0.3 0.4-1.5 1.2 0.9z m6.3 5l1.3-1.1 1.5-0.4 0.6-2.2 1.8-0.5 1.6 1 0.9 1.2-0.2 1.1-3.1 1.2-2.5 2-1.6-0.2-0.7 0.7-2.4 0.6-1.7-0.9-0.9 0.9-1.4 0.4-1.2-0.4-2.9 1.5-2.8 0.3-1-1.1 3.1-1.9 5.1-0.6 2.9-2.3 0.4-2.5 0.6-0.9-1.3-0.6 0.2-1.7 2.4-1.7 1.3-1.4 1.5-0.3 0.9 1.1-1.1 1.4-1.6 1.2 1.1 1.5 0.6 2.4-1.4 2.2z m15.5-13.7l1.4 0.8 1.5-0.3 2.3 0.7 1 1.5-1.2 0.9 0.4 1.7-3.8 0.5-0.9-0.5-1.5 0.9-1.4 1.4-2.2-0.6 0.2-1.6-0.3-2.3 0.7-0.5 2.9 0.3-0.4-2 1.3-0.9z m124-2.6l-1.8 0.4 0.2-1.8 1.6 1.4z m-92.4-3.8l-1.3 0.4-1.8-0.3-0.7-1 2.2-1 1.7 0.3-0.1 1.6z m-15.1 0.3l1 0.7 1.5-0.5 1.1 1-1.4 0.8-0.8 1.2-2 0.1-2.9 2.3-0.1 0.8-5 0.5-1.5-0.3 1.7-2.7 1.7 0 1.7-0.8-0.3-0.8 2.5-2 0.6-1.7 1.4-1 0.8 2.4z m4.8-2l1.4 0.2 1.3 1.6-2.3 0-2-1.8 1.6 0z m37.3-4.3l0.5 1.1-3.3 2.1-1.6 0.1-2.1-1.2 0.1-0.8 1.9-0.9 0.9 0.1 2.7-1.4 0.9 0.9z m3.9-0.3l-1.8 0.5-1.7-0.9-0.2-1.6 0.8-0.3 3.2 1.2-0.3 1.1z m-6.4-3.2l-0.4 0.8-2.7 2.1-2.2 0.7-1.8-0.3-0.8 0.6-2 0-2-0.6-2-1.2 3.5-0.1 0.6-0.5 1.5 0 2.8-0.4 1.1 0.3 2.1-1.4 2.3 0z m60.6 23.5l-1.7-1.3 0-0.7 3.2-2.9 0.7-1-2.6-2.7-3.6-0.8-4.2-1.1-4.2-2-1.8-1.2-2.9 0.3-3.5 1.6-0.9 0.2-3.8-0.4-2.1 0.2-1.7 1.8-2.6 1.7-0.7 3.8-0.6 1.7 0.7 3.2-1.5 1.4-2.1 0.3-1.6 1.3-0.5 1.7-1.3 0.6-2.6-0.8-3.9-0.8-3.6-1.1-1.5-0.1-1.2 1.2-3.7 0.9-1.8 0.1-0.8-0.5-6.9-0.6-1.4-1.8-7.9-5.5-3.6 0-1.9 1.1 1 1.4-0.5 0.6-1.9-0.4-2.1 0-0.5 0.4-5.1 0.2 2.6 1.6 0.1 2-1.4 1.9-1.6 0.9 2.9 0.9-2.5 1.6-1-0.1-8.6-1.7-2.9-0.1-4.1-0.9-2.1 0.5 0 0.8 0.8 3.6-2.1 3.1-6.3-1.8-1.5 0.9-3.7 1.9-1.5 3.5-1.1 1.1-2.7 0.6-0.5 1.1 2.7 2.3 1 1.3-0.2 1.4-1.5 1-3.3 2.9-3 2.9-1.3 0.9 1 2.5-3.3 1.5-2.4 0.5-3.8 0.4 1.4 3.9-0.6 2.7-0.1 4.7-3.3 5-4.4 5 4.7 1.6 1.1 2.9 0.1 1.2-1.7 2.2-7.1-0.9-3.3 0.4-3.3 1.5-3.5 3.8-1.2 1 0.5 1.5-2 2.8 2.7 4.1-1.1 1.1 0.6 2.8-0.1 1.8 2.5 4.4 0 1.6-0.9 6.4 3.8 2.1 1.2 0.4 3.4 2.7-0.4 1.9-1.3 2.5-2.4 0-1.8 0.6 0.3 1.6 3.1 4.9 0.5 1.4-0.6 2.1-0.1 2.8-1.9 2-1.3 0.8-2.6 0.7-0.9 2.4-1.5 1.5 1.6 4.4-0.6 3.9-0.7 1.4-1.9 0.2-1-1.8-0.4-1-6-1.2-2.3-2.9-0.4-3.1-2.5 1.2 0.6 1.1 0 2.3-2.5 3.9-1.1-0.2-1.3 0.8-1.3 0.2-0.6-1-1.1 0.2-0.8 1-3.4 1.3 1 0.7-1.7 1-0.6 0.9-2.7 1.5-4.3 3.9-2.3 1.1-1.6 1.2-1.4 0-1.8 0.9-4.6 0.9-3.1-0.4-2.1 0.4-1.1-0.7 0-1.1-1.2-0.1-0.8 1.2-1.6-0.4 0.7-2.4-3.1-0.1-3.8-1.6-0.9-0.8-3.1-1.3-1.4-1.4-0.8-1.6 0.3-3.6 0.6-0.5 2.7 0.8 2.8 1.3-0.1-1.2-2.4-1.6 0.8-1.8-0.2-1.6 2.6-2.1-0.4-0.7-3.4 2-3.1 0.9-1.1 1.2-1.1 0.6-2.1 0-0.5-0.9 0.5-3.3 1.2-2.7 1.8-1 3.4 0.7 1-1 1.3-0.2 2.4-1.2-4.1 0.5-1.2-1 2.8-2.4 1.2-1.4 0.3-1.5 2.2-1.7 1.8-0.8 1.6 0.6 1.5-1.9-5 1.1-2 1.1-2.7 2.8-0.2 1.1-2 0.9-1.5 1.5-0.6 1.2-2.8 1.9-1.4 0.3 0-2.4 1.1-2-0.3-1.6 3.2 0.2 1.8-1.2-2.7 0-1.4-0.7-1.2-1.5-0.6-1.9 1.1-1.8-2.2-2-0.5-2.2-0.1-2.5 0.9-0.5 2.1 0.4 2.4-0.2 5.2-0.9 3.4 0.6 1.4-0.1 2-0.7 1.9-0.1 2.2 1.2 0.7-0.5 5.4-1.2-3-1.5 0.1 1.4-3.6 0.3-3.2-0.6-1.3-0.6-0.5 1.3-1.1 0.3-3.4-0.5-4.7 0.3-2.1 0.7-1.4-0.1-2.5-1.2-0.9-0.9-0.3-2.6 2.8-0.3-1.9-2.3-1.9-1.3-0.2-1.4 0.7-1.3 1.5 0.2 3.8-0.1 6 1.5 4.9-0.3-0.8-0.6-2.9 0-7.2-1.3-2.2 0.1-1.2-0.3-0.7-1 0.4-1.9 1.1-0.4 1.2 0.6 1.9-2.3 1.9-1 2-0.5 2 1 1.3-0.1 4-0.8-1.3-0.5-3.5 0.5-0.2-0.5 2.4-2.3 4.2-0.4 5.9 0.5 2.3 0.8 0.4-1.8 5.3-1.4-6.8 0.8-1.8-0.5-4.9 0.7-0.1-1.3 2.3-2.3 4.1-0.9 1.9-1.1 3.1-0.2 2.6 0.3 1.2 1.3 4.4 1.7-5.1-4 1.1-1.7 3.3-0.4 0-1.6-2.2-0.3 0-1.2 1.9-0.9 2.8-0.7 3.2 0.8-0.6 1.3 0.9 0.5 1.7-1.5 3.9-0.8 2.8 2.1 0.5 1.1 1.1-0.5 2.7-0.5 2.7 0.3 1.8-0.2-1-1.3 0.4-1 2.4-1 1.7-0.3 2.6-1.2-0.8-1-1.4-0.3 2.9-1.5-1.7-0.6-2.4 0.9-1.6 0.9 1.5 1-1.1 1.1-6.1 2.8-3 0.8-1.4-0.1-1.9-2.5-2.1-0.1 1.3-2.2 1.6-0.8 1.4-2.3 2.3-1.3 3.2-3.3 2.8-1.1 0.9-1.1 3-1.5 3-0.9 0.3-1-2.7 0.9 0.4-2.1 1.4-1 6.8-2.8 1.6 1.3 2.1-0.2 2.3-1.6-0.3-0.7-2.1 1-1.5 0-0.4-0.6-2.1-0.5-0.3-1.2 1.3-2.8 3.4-3.3 0.5-1.3 1.3-0.7 1.7 0.2-0.2-1.1-2.1-1.1 6.2-1.1 3 0 2.4-0.9 0.5-1-6.4 1.1-2.4 0.1-0.8-2.7 0.2-1.5 1.9-2.2 1.4-0.2 1.7-1.1 0.1-1.5 2.3-0.8 2.1-2.1 2.3-0.5 1.4 0.2 3-0.7 6.6-0.1 0.1-0.6-6.3-0.3-3.5 0.2-0.4-0.6 2.8-2.7 2-1 1.7 0.2 1.8 1 0.6-0.8-1.6-1.5 0.7-1.5-2.6 1.1-1.8 0.3-0.9-2 2.3-2 2.3 0 0.3-1.5 3.3-1.3 1.9-0.2 1.5-0.6 0.6 0.4 0.9 2.3 1.5 0.3 1-0.8-1.3-1.1-1.1-1.8 2-1.5 2.3-0.2 2.6 0.7 2.3-0.2 0.9-1.2-6.3-0.1-0.8-0.9 1.2-1.2 2.2-0.8 2.5-0.1 2.4-1.4 0.9-1.1 0.3-1.6 1.4-1.3 3.9-0.8-0.6-2.2 0.8-1.4 1-0.6 2.1 1.5 1.8 0.5-0.5-1.4 0.3-1.2 2.1 0 1-0.5 0.3-1.3 1.4-1.2 4.7-0.7 0.5 2.5 0.7 1.4 0.8-2.8 1.6-2.1 2.4-0.9 0.9 1.1-0.4 4.3-1.9 2.4 1.5-0.2 2.5-2.3 0.6-1.2-0.7-2.8 0.6-0.8 3.5-0.1 1.9 0.4 0.7-1.5 1.7-0.1 1.8 0.9 4.1 1.4-1.3-2.2-1-0.8-2.1-0.5-2.2-1 1.2-1 2.4 0.3 2-0.8 2.2-0.2 1.1 0.6 0.8-1 2.5-0.5 2.8 0.9 1.6 2.7 2.4 1.4-0.1-1.4 0.6-1.9 2.3-2 2.1-1 1.4-0.1 2.9-3.4-1.6-1 3.3-2.3 1.1-0.1 5.4 2.1 1.5-0.9 3.4 0.8-0.8 1-3.1 2.9-0.5 0.8-0.1 2.2-1.2 1.4 0.8 1.4 1.6-0.4 1.8-1.3 0.1-1.3 4.3-3.7 1.9-2.1 2.3-1.7 1.5-0.3 0.9 1.1-0.2 1.5 0.2 4.3 3.7-1.4 1.1-3 1.1-0.7-0.8-1.4 0.4-1.1 2.3-1.3 2.2 0.4 3.3 0.3 2.7 0.8 0.2 1.4-0.8 0.9-2.9 1.1 0.7 0.7 2-0.6 0.9 5.5 0.9-2.1 1-0.7 0.1-1.5 0.8-1.9 1.8-1.3 2.7 0 3.3 1.7 2.5 0.3 1.8 0.8 2.4-0.7 2 1 0.1 1 3.8 0.3 3.8 1.6 0.6 1.6-4.4 1-1.8 1-3.3 0.4-11.5-0.7 0.4 0.7 8.3 1.5 0.6 0.5 0.4 2.1 1.8 0.7 3.5-0.2 0-1.3 3.2 0.6 3.8 0.2 1.1 1.7-0.3 1.5-2.4 0.1-4.2-1.4-0.4 2.3-1.1 0.9-5.8 1.3-1.1 2.6-2.2 1z m-40.5-27.7l3.7 0.5 2.2 1.4-3.6 0.5-1.7-0.1-2-1.8 1.4-0.5z m-339.6 3.9l-0.1-1 4.5-1.5 1.9-1.4 3.4-0.5-0.2 1.8-3 0.8-3.3 0.5-3.2 1.3z m269.2-45l-1 0.5-1.9-0.8-0.8-1.2 3-0.1 0.7 1.6z m9.6-50.1l3.9 0.2 2 1.9 1.4 2 1.3 0.2 4.7-0.4 3.4 0.7-1.4 1.1 0 1.2 5.5 1.3 1.8 0.1 3-0.4 6.5 1.7-6.6 1.1-2 1.9-3.7 1.3-2.6 0-2.3 1.3-2.2 0.1-1.5-1.9 2.2-1.3-3.1-0.4-1.2 0.5-10.5 1-1.1-0.2-0.9-1.2 2.8-0.6 0.2-1.1 2.5-2.4-5.5-1.6-2-1.2-0.8-1-2.5-0.9 0-1-1.7 0.1-0.4-1.2 10.8-0.9z m46.2-0.6l-1.3 0-2.6-0.8 0.7-1 3.2 1.8z m-137.6 0.4l3.5 1.5 1.9 0.5 2.3 1.5-0.7 0.9-2-1.2-3.6-1.3-2.3-0.2-3.3-2.5-1.5-0.8-0.8-1.7 3.6 0.7 1.6 1-0.3 0.8 1.6 0.8z m155.6-3.4l2.7 0.1-0.1 0.6-7.3-0.4-3.8 0.7 0.4-0.9 2.4-0.6 3.7-0.1 2 0.6z m-109.9-10.8l1.4-0.6 5.4 0.8 2.5 0.9 1.3 1-1.9 1.9 1.7 1 3.2-1.7 2.7 0.3 1.7 0.9 1 1.1-0.2 1.4 3.1 1.1 3.4-0.2 2.4 0.3 1.5 1 1.9-0.2 0.2-0.8 2.6 0.2 3 0.8-2.1 0.9 2.1 0.8 3.4 0.6 2.1 0.6-1.5 1.4-3.2 0-2.9 0.3-5.4 0.3-3 1.6-2.5 1.8-0.4 1.6 0.6 1.1-1.5 0.5-3.3 0.2 0.2 3.9-0.8 1.9-3.3 0.3-1.8 1.1-1.2 2.1-2.1 2 1 1-2.1 1.9 1.2 1.8-1 0.6-2.1 0.3-2.2-0.3-2.3-1.1-6.7-2.2-4.3-2.4-6-1.3-3.3-1.6-1.5-1.3 0.3-1.4 2.8-0.2 2.9 0.7 1.7-1.9 11.3-1.1 7.3-0.2-1.9-1.3-6.9 0.7-4.3-0.2-2.1 0.1-2.1 0.6-4.3 0.5-4.6-0.1-2.9-1-1.3-2 1.2-0.6 3.8 0.1 6.4-0.9 3-0.8 3.1-0.1-0.5-0.8 1.8-0.4 2.4-0.2 5.6 0.1 0.2-0.6-2.6-0.6-0.9-0.6 2.6-1.8-2.2 0.1-3 1.3-1.8 0.5-4.6 0.3-1.7-1.6 0.9-1.2-0.8-0.7-1.3 1.3-2.1 0.3-2-0.9-1.9 0.5 0.7 1-0.6 1 2 0.9-2.3 0.6-2.1 1.1-3.9 0.2-4.5 0.1-4.6-1.6-2.2-1.2-1.8-1.2-2.7-0.6-1.7-0.8-0.4-1.1-1.4-0.7-0.7-1.2 4.4 0-1.7-1.8 0.5-1.6-3.4 0.1 0.4 0.9-2.2 1-1.2-0.2-2.3-1.9-2.4-2.4 0.4-1.3-1.2-1 1.5-0.7 2.5 0.9 0.8-0.7 3.8-0.4 4.6 1.1 0.4-1.1 4.2 0.5 3-0.6 5-0.3 2 0.4-1 1.1-6.3 0.3-4 1.3 5.7-0.2 1 0.1 0.6 1.1 3 0.5 2.3 1 0.8-0.5-0.6-2.2 4.4-2.3 2.1 0.4 2.1 0.9 4 3 2.3 1.9 6.1 2.8-0.7-1.5-4.2-4.5-0.9-1.7 0.9-1.7 1.1-0.5-0.4-1.3 1.3-0.5 2.4 0.3 2.6 1.3z m134.7-2.3l-8 0.4-0.9-0.3 15.7-1.4 1.7 0.5-8.5 0.8z m-118.9-1.9l-1.8 0.6-3.2-0.5 0.9-0.7 4.1 0.6z m18.6 0.5l5.6 0.1 1.5 0.9 5.5 1.1 0.8-1.5-0.6-2.2 1.9-0.1 1.7-0.6 3.1 0.3 0.2 1.3-0.5 1.4 2.1 0.1 2.8-0.3 1.9-1.1 2.4 0.1 1.3-0.6 1.4 0.6 8.2 0.7 3.3 0.6 5.2 0 3.7 0.2 2.8 1 1.1 1.7-0.9 0.4-6.7 2-1.6 0.7-2.4 2.3-4.1 0.7-3.5-0.3-3 0.7-1.9 1-1.5 0.2-9.2-0.4-2.2-1.1 1.2-0.9-8.2 0.3-9.2-0.1-1-0.5-5.6-0.5-4.2-1.1 1.1-0.5 5.8 0-0.7-1.5-2.9-0.1-1.8 0.4-4.3 0.2-4-0.1-1.9-0.3-3.8-1-0.7-0.8 2.8-0.4 2.1-0.7-4.5-0.3-1.9-0.3-0.6-0.9 5.9-0.2 5 0.8-0.7-2.2 3.9 1.1 0.2-1.1-2-1.4 2-0.1 4.5 0.7 5.1 1.6z" id="NO" name="Norway">\n </path>\n <path d="M666.8 348l0.6-0.6 2.3 0.7 4.5 2.2 1.1 0.9 0.8 3 2.1 5.1 2.9 4.9 1.7 3.6 0.9 3.9-0.6 1.6-4 1.7-0.8 0.5-2 2.7 0 1.2 3.3 1.3 1.8 1 0.8 1-0.2 2.4 0.4 1.1-0.8 1.5 0.1 1.3 1 1.6 1.2 1.8 0 1.3 2.7 2.8 1.9 2.8 1.4 1-1.2 1.3 1.8 2.6 0.1 1.3-1.2 1.8-3 0.5-4.8 4.6-2.4 2.7-3.4 4.4-0.6 1 1.5 3.8-0.1 1.8 1.9 1.4-0.4 0.9-3.3-0.7-0.9-0.2-5.7-1.9-0.8-1.4-1-0.7-3.1-1-3.6-0.3-3.2 0.2-1.4 1.5-1.8-0.1-2.4-1-3 0.1-2.3 1-1.1 2.1-1.7-0.6-1.4 0.4-0.6-2.7-1.4-0.4-3-3-2.2 1.3-1 1.7-2.2 0-0.5-1.5-1.3-0.2-0.5-1.6-2.8-2.2-0.5-1.8-2.7-0.8-0.5 0.2-3.5-1.8-1.8 1-1-0.6-2.7-2.3 1.4-0.5 0-1.6-3.6 0.7-3.3-1.9-2.2-0.6-1.3 0 1.7 2.4-3.5 2.5-1-0.4-1.5-1.9-2-1.8-1.6-0.9 1.6-1.2 0.7-1.1-1.8-1.2-3.2 0.7-0.8-0.9-2.7-1.1-4.6-1.1-1-1.1-0.3-1.1-3.3-0.8 0.1 1.9-2.1 0.4 1.6-3.6 0.4-2.3-1.6-3.2-2.2-0.9 0-1.6-1.9-3.1 0.8-1.1 0.7-2.6-0.8-1.9-2-2.3 0.6-2.6-1.4-1.7-3.3-2.1-1.6-1.4 0.7-1.6 1.9-1.8 0.3-2.7-1.8-4.1-0.7-2.6 2.8 0.9 0.7-0.5-0.1-1.8-4.1-0.7-0.1-1.2 2 0.4 3.8-1.4 6.5-1.8 6.9-1.7 3.3-0.5 2-2.2 1.9-1.7 3.8-0.7 1.3-0.8 2.8-1.2 6.6-1.2 5.5-0.4 5.4 2.3-0.9 0.3-3-1.2 2.2 3.5 1.1 1.2 2 0.9 1.7 0.3 4.9-0.5 2.2-1.1 0.5 0.1 6.6 0.4 22.9 0.9 7 0.1z" id="PL" name="Poland">\n </path>\n <path d="M306 611.9l-1.2 0.2-4.5 2.5-1.3 0-2.5-1.1-4.5-0.4-1.5-0.3-1.8 0.7-1.5 0-1.1 1-0.8-0.3 1-2.1 1.6-4.1 0-2.6 0.4-2.2-0.3-2.1-0.7-1.4 1.1-3.5 0-1.8-0.9-2.3 2.8 0.3-1.7-1.4-1.5 0-2.3 0.9-1.5 0.1 0.1-1.4-0.5-1.8 2-0.6 1.6-1.7-0.3-1.6-1.2 1.1-0.6 1.4-2.8 0.7-1.5-0.5 0-1.9 0.6-1.7 0.4-2.3 0.8-2.2-0.2-1.4 1.6-1.3 1.4-1.9 4.3-8.9-0.6-1 1.7-6.6 1.2-2.3 0.6-4.3-0.2-2-0.7-2-0.7-4.3 0-1.4-0.9-1.8 0.1-1 1.4-1.7 1.2-1.1 1.9-0.9 4.1-1 1 1.8-1.3 1.9 0.9 1.3 3-1.1 2.9-0.1 2.2 0.8 1.4 0 2.5-0.9 0.8-1.4 1.5 0.5 5.2 0.1 0.7 1.1 0.1 3.1 1.9 0.2 1.9 0.9 0.3 1.1-2.5 2.5-2.1 1.1-1.6 1.4-1.1 1.6-2 1.6 0.8 2 0.4 3.5-0.4 3.8 0.4 1.1-2.7 2.1-0.2 1 1.4 1.3 0 1.9-1.7 3.5-1 0.5-4.3 0-1.1 0.3 1.1 1.9 1.4 1.2 0.3 1.9 1.6 3.2 1.7 0.4 0.5 0.8-0.6 2.4-3.2 3-0.9 4 3 4.3 1.7-0.2-0.7 2.4-2.1 0.6-3.5 4.3-0.8 2.2 1.1 6.4z" id="PT" name="Portugal">\n </path>\n <path d="M751.4 483.2l1.5 1.6 1.8 0.9 4 0.9 0.6-1.2 0.9 0.3 1.6-0.5 2.2-1.3 2.2-0.2 2.2 0.7 1.9 1.8-0.2 4.3-0.7 2.1-6.2 1.3 0.4-0.6-0.7-2-1-1-0.9 1.1 0.6 1.7-0.7 1.4-0.2 2.4 0.6 0.9-1.6 2-0.5 1.3 0.8 4.8-0.4 3.7-2 0-2.6-0.5-2.2-0.7-2.5-2.6-1.7 0.5-0.9-0.6-3.2-0.4-4.5-2.3-2.9 0.4-4.4 0.9-3.2 1.2-3.3 2.1-1.2 1.6-1.6 0.9-2.3 0.6-4.2-0.2-9.4-1.7-2.5 0.5-3.5-0.4-5.3-1-3.9-0.3-3.7 0.6-0.9-1.8 1.8-2-4.3-2.5-0.8-1.2-1.6-0.9-0.5-1.7 2.5-1.8-3-1.6-1.7 0.5-1.7 1.8-1.3 0.2-1-1.2-1.5-0.7-3.5-0.7-1.5-1.2-2.1-0.6 0.2-0.6 1.8-0.8-2.3-1.1 1.5-2-0.9-1.1-2.6-0.8-3.8-1.9-2.2-1.8-0.4-4.1-0.8 0.2-1.8-2-2.9-1.7-1.7-2 3.2-0.9 1.4 0.5 2.5-2 2.6 0.3 1.3-0.9 1.5-4.7 2.1-1.5-0.2-1.3 1.6-2.7 0-1.2 1.4-1.5 0.7-2.5 1.4-1.4-0.1-1.7 1.2-1 1.9-2.4 4.6-1.1 2.2-2.3 2.1-0.9 0.9-1.2 0.7 0 2.7 1.5 2.7-0.1 6.9 1.4 3.6-0.7 1.2 0.3 4.3 3.3 2.1-0.5 1-1.2 3.4-1.3 8.4-1.2 1.1-1.9 0.2-1.4 3.7-0.8 2.1 0 2.5 1.6 2.5 3 3 4.9 1.5 1.3 2.5 3.2 2.1 1.8 1.3 1.7 3 2.1 1.4 2.9 1.4 2.3 0.5 2.9-0.9 4.8 0.1 2.6 1.4 5-0.9 0.7 2 2.3z" id="RO" name="Romania">\n </path>\n <path d="M651.6 473.1l1.7 2 2.9 1.7 1.8 2 0.8-0.2 0.4 4.1 2.2 1.8 3.8 1.9 2.6 0.8 0.9 1.1-1.5 2 2.3 1.1-1.8 0.8-0.2 0.6 2.1 0.6 1.5 1.2 3.5 0.7 1.5 0.7 1 1.2 1.3-0.2 1.7-1.8 1.7-0.5 3 1.6-2.5 1.8 0.5 1.7 1.6 0.9 0.8 1.2-0.9 0.7-0.2 1.9-2.1 1-0.4 2.3 0.6 2.4 2.4 3.9 2.9 1.5 1.3 1.6 1.6 1-0.3 1.4-1.6 1.7-1.1 1.6-1.8 0.1-1.1 0.6 0 3.3 1.4 2.9-1.1 1.7-1 0.3-1.4-0.7-2.3 0.8-1.9-0.3-2 0.9-2.2 0.3-0.6-1.3 1-0.9 1.2-3.2 0.2-1.2-4.7-1.2 0-1.3-2.2-1.2-0.2-0.7-2.3-2.1-2.8-1.3-1.1-1.3-1.7 0.9 0.6 1.6-0.4 1-1.7 1.3 0 1.4-1.5 0.5-0.1-1-5.3-2.9-2.1-0.5-3-1.6-1.9-2-2.6-1.7-0.4-1.2 0.7-0.8 2.5 0.3 0.2-2.2-3.2-3.7 0.5-0.8 3.1 0.1 0.3-0.8-3.3-2.9-2.4-1.2-0.5-0.8 0.1-2.6 1.6-2.7 0.5-2.5-1.5-0.8-2.8 0.7 1-1.6-0.7-2.6 1.7-0.4 2.3-0.1-0.9-1.5-3-1-1.2-1 0.4-2-1.3-0.4-0.2-1.6-1.6-2.7 0.7-1.5 2.1-1.3 1.6 0.5 2.2-1 1.5-1.6 1-0.3 2.9 0.4 1.1-0.2 2.8 0.3 1 0.5z" id="RS" name="Serbia">\n </path>\n <path d="M674.8 427.7l-1.5 3-0.8 2.9-1.6 1.7 0.1 2.5-4.3 1.1-0.6-0.2-2.2-2.2-1.4-0.9-4.6 0.7-2.5-0.6-2.7-0.1-1.8 0.4-1.6 3.5-5 2.5-3.5-1.4-0.7 0.2-1 1.5-2.4 0.6-4.3 0.4-1.4 0.7-0.4 1 0.5 1.3-0.6 1-7 0.4-4.7-0.1-1.6-0.7-4.2-2.7-2.1-0.3-2.3-2.9-1.6-2.9-0.1-0.8 0.9-2.4 1.1-2.8 1.4-1.2 3.6 0.5 1.7-0.2 1.5-0.7 2.1-1.9 1.6-0.8 0.7-3 2.3-1.2 0.6-0.8 2-1.5 2.8-0.3 1.3 0.2 0.5 1.5 2.2 0 1-1.7 2.2-1.3 3 3 1.4 0.4 0.6 2.7 1.4-0.4 1.7 0.6 1.1-2.1 2.3-1 3-0.1 2.4 1 1.8 0.1 1.4-1.5 3.2-0.2 3.6 0.3 3.1 1 1 0.7 0.8 1.4 5.7 1.9 0.9 0.2z" id="SK" name="Slovakia">\n </path>\n <path d="M605.2 467.1l-2.5-0.6-0.9 0.8 0 1.7-2 0-0.7 1-4.4 1.7-0.4 1.4 0.9 0.9 0.2 2.2-0.4 1.1-2.1 0.6-2.1 1 1 1.1-0.7 0.7 0.8 2.3-1.2 0.4-1.6-0.2-2-0.7-1.3 0.5-1.5-0.7-2.6-2.1-1.2 2.2-0.6 0.3-3.6 0.1-1.1-0.5-1.4 1.3-3.3-0.8-0.5-0.6 1.7-1.1 1.5-0.1-0.2-1.3-1.5-1.3-1.9-1.1 0.4-2-1.3-0.2-0.3-1 1.6-2.1-2.3-0.7-0.7-1.4 3.3-2.3 0.2-0.9 5 0.9 5 0.7 3-1.2 1-1.3 1.9-0.7 2.6-0.2 2.8 0.2 2.3-1.1 1.6-0.2 2.4 0.5 0.1-1.9 1.3-0.9 2.4 0.1 1.4 3.3 1.9 2.2z" id="SI" name="Slovenia">\n </path>\n <path d="M591.1 319.4l-1.5-0.3-0.3-3.8 2-4.6 1-0.3 2.7-6.5 0.5 2-1.5 3.2-0.3 2.2-0.6 0.5-2 7.6z m26.2-22.7l-1.3 1.4-1.4 0.5 0.1 3.3 1.5 1.2-1.3 0.5-0.7 1.8-1.8 0.6-1.5 1.6-0.3 1.6-2.1 0.9 1.2-2.4-0.9-0.7-1.4-2.1 0.4-0.9-0.6-3.2 2.7-2.9 1.3-1.1 3.3-1 1.3 0 1.5 0.9z m36.8-113l-2.7 0.3-2.2-0.6-1 0.3-3.8 0.3-1.1 0.7-2.1-0.7-2-1.2-2 1.1-1.6-1-1 1.9 0.1 1.8-1.8-0.2 0.3 1.1-2 1.5-3.2 0.2 0.7 1.5-0.9 0.7 1 1.7-1.3 1.5-2.1 1.9-0.5 1 1.7 1.1 1.6 2.5 1.6 1.1-0.4 1.2-2.1 1.1-2.2 1.7-2 4.3-3.1 1.3-2.4 1.6-3 0.7-2.4 2.2-1.8-0.8-1.5 0.5-1 1.8-1.9 1.5-2.4-0.2 0.2 0.8-2.3 0.3-1 4-2.2 0.6-0.7 0.8-0.9-0.6-2.1 0.1 1.6 2.8-1.7 1.8-1.2 0-1.5 0.7-1.9-0.8-0.2 1.2 0.8 1.3 1.3 1-0.1 1.3-0.9 4.3 0.7 1.8-2.1 1.2-0.8 1.1 0.6 1.7-0.1 1.1 0.7 1.9 0.8 4.2 1.1 2-0.1 1.6 1.3 0.9 2.1-0.1 1.4 1.6 3.1-0.8 0.8 1.1 2.9 2.2 1.7 0.3 1.9 1.2 0 1.5 2.9 1 1.9 2 0.8 1.6-0.1 1-2.6 1.5-1.3 1.3-3.8 2.1-0.6-0.1-2.1 1 2 0.6 1.4-0.7 2.6-0.6 1.4 1.2-2.2 0.5-0.3 1.6-0.8 1-2 0.7-2.8 1.5-4 1.4-1.1 1.2-2.6 1-1.3 0.8-3.8 0-3.7-0.1 1 0.9 0.9-0.2 3.6 0.4 1.7 1.3-3 0.9 1.7 3.2-0.7 0.8 0.4 3.5-1.1 0.1-0.3 1.4 0.6 2.5 1 2.1-0.1 1-1.5 2.4 0.9 2.9-1.5 5.3-1.9 3.1-1.3 4.1-1.8 1.4-2.4-0.9-3.4 0.5-3.2-0.3-3 0.2-0.8 0.4 0.7 1.4-2.3-0.2-1.7 1.1-2 2.1 0 1.5 1.9 3-1.7 2-1.1 0-3.2-0.5-5.5 1.2-5.1-1 0.5-1 0.2-3.1-0.6-1.7-1.3-1.1-3.1-3.8-1.2-2.3 2.4 0.9 1-0.5-1.8-2.6 2.2-0.1 0.7-1-0.6-1.5-1.9-0.6-1.9-2.4-1.8-1.2-3.5-4.7-1.3-3.2-1.1 0.3-1.2-3.7-1.7-0.6-0.6-3.7-1.8-0.4-1.3-1.7-0.4-3.2-1.2-0.6-0.8-1.4-0.8-3-0.3-2.7-0.9-1.8 0.5-1.2 1.1-0.2 1.1 0.8 1 1.8 1.9-0.2 0.7-1.4 0.6-3.9-1.6-4.4 1.5-1.5 0.9-2.4 2.6-0.7 1.3-0.8 1.9-2 0.1-2.8 0.6-2.1-0.5-1.4-3.1-4.9-0.3-1.6 1.8-0.6 2.4 0 1.3-2.5 0.4-1.9-3.4-2.7-1.2-0.4-3.8-2.1 0.9-6.4 0-1.6-2.5-4.4 0.1-1.8-0.6-2.8 1.1-1.1-2.7-4.1 2-2.8-0.5-1.5 1.2-1 3.5-3.8 3.3-1.5 3.3-0.4 7.1 0.9 1.7-2.2-0.1-1.2-1.1-2.9-4.7-1.6 4.4-5 3.3-5 0.1-4.7 0.6-2.7-1.4-3.9 3.8-0.4 2.4-0.5 3.3-1.5-1-2.5 1.3-0.9 3-2.9 3.3-2.9 1.5-1 0.2-1.4-1-1.3-2.7-2.3 0.5-1.1 2.7-0.6 1.1-1.1 1.5-3.5 3.7-1.9 1.5-0.9 6.3 1.8 2.1-3.1-0.8-3.6 0-0.8 2.1-0.5 4.1 0.9 2.9 0.1 8.6 1.7 1 0.1 2.5-1.6-2.9-0.9 1.6-0.9 1.4-1.9-0.1-2-2.6-1.6 5.1-0.2 2.9 0.8 0.4 0.9 2.9 1.1 4.8 2.3 4.2 1.8 8.3 1.7 3.5 1.8 1.2 1.6 1.4 0.1 1.9 1.5 1.8 0.9-1.1 1 0.4 2.4 0.7 1.4-0.3 1.9 2.8 0.4 0.6 1.3-1 0.8-0.1 1.1 0.8 1.6 3.3 2.6 0.6 0.9-0.7 1.4 0.1 1.8-1.5 1.3 0 1.3 1.3 2.6 1.8 0.6 1.9 2.2 1.6 2.5z" id="SE" name="Sweden">\n </path>\n <path d="M733.4 565.7l-2.9 0.5-0.1-1.5 2.2-0.6 0.8 1.6z m194.5-21.5l4.3 1.3 1.1-1 3.6 0.1 3.4 0.8 0.9-1.9 1.4-0.4 1.4 0.3 0.6 1.1 1.2 0.4 3.5 2.5 1.1 1.7 1.9 0.2 1.3 1.2 1.3 1.6 1.7 1.2 1.7 3.3-0.2 2.3-1 1.4 0.8 1.9 1.9 3-0.5 0.6 1.8 0.9 2.9 0.9 3.5-0.4 1.6 0.7 2.3 1.7 3.2 2.8 0.8 0.9-3.3-1.9-1.4 1.6-0.1 3.8-0.6 0.4-2.8-0.1-1.2 0.4 1.2 2.5 1.4 1.2 0 2.3 2.1 2.5 0.2 2.1 0.9 2.2 0.3 2.2 0.5 0.7 1.4 0.3-0.6 3.8-0.6 1.2-0.4 2 1.7 0.6 3.2 2 0.1 1.3 0.6 1.5 0.3 2 3.2 2.3 0 2.3-2.1-0.5-3.7 3.1-1.2-1.2-0.3-2.4-1.5-1.5-1.3-0.2-2.1 1.4-4.2-0.3-2.9-1.1-2.9-0.8-1.9 0.6-2.2-0.7-1.5 1.9-2 1.9-1.2 0.3-1.6-2.6-1.3-0.2-1.2 1.3-2.2 0.8-4.6 1-3.2 0.3-4.1-0.6-3.2 0.2-3.1 1.4-5.2 2.8-4.1 1.4-4.2 0.9-7.6-0.2-1.1-0.3-3.5-2.3-3.4-0.6-3.4 1.6-2.3 0.8-3.5 1.6-4.8-0.1-1.9-1.7-3.7-0.7-0.6 1.6-0.3 3.8 1.8 3.1-3.3 1.4 0 2.6-1.8 1.1-0.8 1.6-2.2-1.2-1-0.1 0.7-1.3-2.5-4.9 0.7-1.5 3.5-3.9-0.4-2.4-2-1.6-2.9 2.1-1.7 0.8-0.3 1.2-1.1 0.8-1.8 0.4-2.9-1-3.2-1.4-1.9-1.1-1.4-0.3-1.3 0.5-3.5 2.8-3.1 4.1-0.8 0.8-3.2 1.7-2.2 0.6-1-0.1-4.4 0.8-2.2 0.1-1.6 0.9-3.5-1-2.2-1.3-1.4-1.3-2.3-2.9-1.6-1.3-3.3-1.2-5.8-3-5.3-0.7-4-0.3-0.7 1.1 0.1 4.2-0.5 1.2-0.1 2.2-1.1 1.1-2.1-1-1.9 0.9-3.7 1.3-1.2 0.1-4.6-1.6-2.9-2.1-0.6-2-1.3-2.7-1.8 0.3-2.3-0.4-3.2-1.6-2.4-0.1-1.2 1.9-1 0.7-1.3-0.4 0.8-1.3-3.7 0.2-1.8 1-1.5-0.1-1-1 2-0.6 3.9-0.4 0.9-0.4 0.9-1.3 1.7-1.2-1.2-0.5-6 0.3-4.2-0.2-1 0.7-0.4-1.6 3.6-1.4-0.3-1.3-4.2-2.2-0.3-1.6-2-3.1 1.9-0.5 0.1-2.5-0.4-1.5-3.9-1.3-0.8 0.1-1.1-1.3-1.7-0.9-1.2 0.7-3.3-1.4-0.6-0.6 0.5-1.4 1-1.1-0.9-1.9-0.1-1 1.8-0.1 1 1.1 0.3 2.2 3.6 0.7 2.9-0.6-2.5-1.1-1.1-1.2-1.2-2.3 1.8-1.1 1.2-1.7-2.7-1.2 0.2-2.4-2.5-2.7 0.3-0.8 2.3-2.8-1.2-0.7-4.3 0.7-1.6 0.6-3.1 0.2-0.3-1.6 0.6-1.3-0.5-3.4 0.2-1.8 1.7-0.6 1.7-2.7 3-3.1 3.5 0 1.3-0.9 2.1 0 0.8 1.2 1.9 0.9 3.2-0.1 1.4-0.9-1.6-1.5 1.7-0.5 1.5 0.4-0.1 1.8 4.1-0.5 4.4 0.4 1.4-0.2 3.4 0 0.5-0.5-3.6-1.7 2-1.5 6.8-1.2 3.7-0.8-5.7-0.8-1.4-0.6-2-1.4-1-1.1 0.3-2.6 0.6-0.7 2.2-0.1 7.7 1.2 5.3-0.8 6.1 1.8 5.6-0.4 1.1-0.7 1.1-2.6 7.4-4.2 2.4-2.1 2.8-1.2 5-1.4 4-1.7 1.2-0.2 10.4 0.8 7 0.1 3-1.6 2 0.5-0.1 2.1 2.6 2.6 3.5 1.4 4.4-1.2 1.8 0.5 2.2 4 1.5 1.4 1.8 0.9 1.3 0.2 1.5-1.4 1.7-0.1 2.9 1.3 1.2 1.4 4.8 1.1 4.3 0.6 2 1.2 6.2 1.2 2.2-0.2 3.6-1.3 7-1.3 5.2 1.9 2.5 0.1 1.7 0.5 1.7-0.3 5-2.3 1.4-1.2 1.7-0.4 5.2-3.3 0.9-1.4z m-171.9-7.1l-0.1 1.8 1 2 2.3 2.7 2 1.4 8.1 3.3 1.4 0.3-0.9 3.5-2.1 0.5-6.4-1.5-1.6-0.1-2.9 1.4-2.3-0.4-3.1 0.6-0.6 2.1-2 2.4-3.3 1.9-2.5 1-3.5 3.7-1.5 2.2-1.5 0.7 0.5-2-0.3-1.7 2.3-2 3.3-1.6 0.7-1.3-5.4 0.3-3.3 0-1-1.8 0.8-0.4 2.5-3.2-0.5-4.4 3.4-2.5-0.9-3.1-2.3-1.5-1.2-0.3 0.3-1.4 1.9-0.3 1-2.2 3.4-0.4 1.5-1.1 3.5-0.3 3.4 2.5 1.5-0.6 1.8 0 0.9-0.4 1.7 0.2z" id="TR" name="Turkey">\n </path>\n <path d="M796.7 471.6l0 0.6-3.9-0.8-0.9-0.9 4.8 1.1z m-26.4 14.6l-1.9-1.8-2.2-0.7-2.2 0.2-2.2 1.3-1.6 0.5-0.9-0.3-0.6 1.2-4-0.9-1.8-0.9-1.5-1.6 1.1-0.7 2-0.2 0.4-1-0.5-1.4 2.5-2.9 0-1.3 2.3-1.7 0.4-2-1-1.7-0.5-2.1 2.5-1.6 2.1 1 1.9 0.2 2.1 0.8 1.6-0.6 1.2 1.3 2.9-0.4 0.6-0.7-2.9-1.7-0.2-2.9-1-1.6-2.1-0.8-2-1.3-0.9-1.9 0-2.4-2.9-2-2.3-1.2-0.6-1.2 0.6-3.1-0.6-2.3-1.4-1.4-1.4 0.7-1.4-1-1.4-1.9-5.6-0.6-0.6-1.2-2.5-0.3-3.6-2.4-3.5-1-1.6 1-0.8-0.3-1.2 1-4-0.1-0.7-0.2-2.3 1.4-0.2 0.6-3.7 0.8-0.2 1.4-1.1 1.9-8.4 1.2-3.4 1.3-1 1.2-2.1 0.5-4.3-3.3-1.2-0.3-3.6 0.7-6.9-1.4-2.7 0.1-2.7-1.5-0.7 0-0.9 1.2-2.1 0.9-0.7-1.7-0.9-0.7-2.3-0.4-0.9-1.1-2.2-0.8-1.4-2.3-1.5 0-0.1-2.5 1.6-1.7 0.8-2.9 1.5-3 3.3 0.7 0.4-0.9-1.9-1.4 0.1-1.8-1.5-3.8 0.6-1 3.4-4.4 2.4-2.7 4.8-4.6 3-0.5 1.2-1.8-0.1-1.3-1.8-2.6 1.2-1.3-1.4-1-1.9-2.8-2.7-2.8 0-1.3-1.2-1.8-0.1-1.4 1.1-0.5 1.9 0.3 1.1 0.5 1.9-1.2 1.6-1.6 0.8-1.4 5.9-0.5 2.3-0.5 2.4-0.1 7.8 0.4 6.5 1.5 6.1 0.9 2.3 0 1.8 2.1 1 0.3 3-0.1 1.1 0.4 0.8 1.4 1.2-1.7 1.9 0.5 1.9-0.7 5.1 1 0.8 1.3 1 0.3 0.6-1.1 3.8-1.6 2.5 3 0.6 0.5 2.3-0.8 7.1-0.6 2 1.1 0.5 1.2 2.7 0.9 0.8-1.4-1.8-3.6 1-3.3 0.8-1.2 2.2-2.3 1.1-0.5 1.7 0.4 1.4-0.8 5 0.1 2.6 0.8 1.7-0.1 1.8-0.9 0.5-2.4 1.6-0.6 3.7 0.9 1-0.1 2.7-1.2 1.6-0.2 2 0.3 3.4-0.2 2.5 1.4 1.4 1.4 1.7 2.7 4 3-0.1 1-2.9 0.5 1.3 1.9 0.5 2 1.2 1.7-0.4 1 3.1 0.1 2.9 1 4.1-0.5 1.5 2.2 1.9 0.2 0.2 0.9 1.4 2.8 0.9 1.1-0.2 1.8 0.5 1 1.9 1.6 0.7 1 1.1 0.4 2.3-1.4 2.8 0.4 2.7 2 2.3 0 1.7 1.1 1.4-1.3 4.3-0.9 2.3-1 1 0.1 2.3 1.8 0.5 1.2 1.5 1.6 4.7 2.9 1.3-0.6 0.9-1.5 2.6 1.4 2.4 0.2 3.6 1.9 1.4 0.1 1.6-0.6 2 1.8 1.9 0.2 4.4 2.3 2.9-0.3 1 0.8-0.1 1.7 1 0.9-0.1 2.6-1.7 2.1-2.3 0.8 1.1 1.5 3.1 0.9-0.9 0.9-1.4-0.2-0.8 1-0.3 2.3 2.5 0.7 1.2 2.8 0 1.1 1.2 0.3-1.3 4.7-0.1 1.8-4.2 0.2-6-0.3-0.9 0.2-0.9 1.9-2.3 1.4-1.7 0.2-0.8 0.8 0 2.3-0.4 1.3 1.1 0.7-0.7 1.6 0.5 1.3-0.5 0.1-4.3-0.2-3.4 0.3-2.1 2.4-1.5 0-3.2 1.5-1.4 1.7-1.4-0.8-3.1 0.5-1.7 1.1-3.1-0.1-2.3 0.6-4.6 3.8-1.3 0.1-1-1-1.6 2.6-2.4 1.2 0.6 3.1 2.8 4.5 3.6 3.9 1.7 1.4 2.4 0.7 3.1-1.4 2.4 0.4 1.7-1.2 1.5-0.1 3.7 1-1.1 2.5-0.3 2.6-1.9 0.6-2.2-0.1-2.2 0.4-2.7-1.5-2.5 0-1.1 1.9-2.3 1.3-0.6 1.4-2.6-0.3-2.1 0.2-2.8 1.4-1.9 2.8-2.3 1.8-1.9 0.5-2-0.1-1.3-0.6-2.9-1.8 0.7-2 0.5-3.5-1.2-2.9-2.3-1.4-1.6 0.2-0.9-0.3-3.7-2.4-1.9-0.2-1.9 0.5-1.5-1.2 3.5-2.9 3.5-2.4 1.7-0.2 2.1-1.2 2.2-1.6-1.3-2.3-1.9 0.6-2.2-1.1-0.9-0.8-3.1 0.8-1.8-0.1-3.8 0.8-1.9-0.8-4-2-2.6-0.3 0-1 1.8-0.3 0.1-1-3.8-0.6-0.1-1.3 2 0.5 3.2 0.2 2.9 0.5 2.1-1.8-2.4 0.5-2.9-0.5-2.1-1.8-2.2 1.2-3.2-0.5-2.4 0.8-2.3-0.2-4.1 1.1-0.4 2.9-2 4-3.1 3.7-4.6 2.1-1.7-0.4-0.9 1.1 0.2 1.3 1 0.9 1.1 3.1-0.1 1.3z" id="UA" name="Ukraine">\n </path>\n <path d="M674 532.8l-2.1 0.4-1.5 1.9-1.6-1.2-1 0.1-3.4 1.5-0.2 2.6-0.5 0.8-1.7-0.3-0.1-2.2-1.4-3.2-1.9-1.3-1.4-0.5-2-2.9-0.5-0.4 0.2-1.3-0.9-1.5 2-0.4 0.2-0.7 1.6-0.4 1.5-0.5 0-1.4 1.7-1.3 0.4-1-0.6-1.6 1.7-0.9 1.1 1.3 2.8 1.3 2.3 2.1 0.2 0.7 2.2 1.2 0 1.3 4.7 1.2-0.2 1.2-1.2 3.2-1 0.9 0.6 1.3z" id="XK" name="Kosovo">\n </path>\n <path d="M452.2 392.5l-0.6 1.2-3.2 1.5-3.9-1.1-1.2 0.6-1.2-0.7-0.3-1.3 2.8-0.4 3.5 0.7 1.5-0.6 1.2 0.5 1.4-0.4z m-3.4-5.3l1.5 1.4-1.5 0.3-1.6-1 1.6-0.7z m18.1-8.5l-3-0.4-0.9-0.7 2.4-1.7 3.2-1.5 1.7 0.4 0.5 0.9-1.1 1.1-2.8 1.9z m-7.6-11.5l-1.1 1.1-0.6-1.4 1.7-1.4 0 1.7z m-7.1 25.3l-2.6-0.8-2.2 0.5-2.8-0.7-1.7-1.3 1.2-0.7 2.3-0.1 4 0.7 1.2-0.9-0.6-1-2.3-2.1 1.6-2.7 1.4-1 3.2-3.8 0.9-2 1.2-5.5 1-2 1.4 0.5 2-0.8 3.4-2 1-1.7 1-0.9 4-1.6 2.1-0.4 8.9-0.5 1.8 1.7 2.7 0.6 0.1 4.3-0.7 1.7-1.1 3.8-3.1-0.1-0.6 1.6 0.7 1 2.6 0.3 0.8 1-0.6 2.6-2.6 1.6-0.3 0.9 1 0.9-0.7 1-4.5 1.3-2.3-0.8-1.8 0.7-0.7 1.1 3.1 4.1 0 1.2-1.3 2.8 0.7 1.2-2.2 1.6-0.5 0.8 1.9 1.2-0.6 2.4-1.2-0.1-2.4-0.3-0.7-1.1 1.1-1.3 1-2.9-2.6-1.1-1.7-1.3-1.9 0.4-2.6-1.4-0.5-1.6-2.5 0.8-1.1-1.3-1.5 1-1.5-0.8-1.4 0.7 0.2 0.9-2.1-0.3z m18.1-15.6l0.9-0.9-0.5-1.9-2.1-0.3-0.5-0.8 0.4-2.5-2.8-0.4-0.4-2.5-1.5 0.3-2.3 1.5 0.6 1.3 1.6 1.6 0 0.9-2.1 0.7 0.1 2.6-0.2 1.6 5.4 1.4 3.4-2.6z" id="NL" name="Netherlands">\n </path>\n <path d="M420.4 584.7l-0.4 1-2-0.4 0-1.5 1.2-1.6 2.7-0.7 0.8 1.3-2.3 1.9z m21.7-13.6l1.2 0.5 1.3-0.5 1.4 0.4 0.2 1-2.2 3.5-0.6 1.4-2.1 1.3-4-1.7-0.3-1.6-1.4-0.7-1.7 1.3-1.4-1-0.3-1.2 5.3-3.7 1.5-0.9 3.2-0.9 0.5 1.2-0.6 1.6z m14.7-0.8l-0.3 0.2-3.9-1.9-1.6-0.4 0.1-1.4 2.6-0.2 2.1 0.7 1.2 1.8-0.2 1.2z m-77.4-55.5l0.5 1.3 4.3 1.3-0.3 3.2 1.8-0.4 4.4 1.7 2.2 0.2 2.2 2.1 3.6-0.4 3.2 2.1 3.1-0.4 0.7 0.4 4.7 0 0.8-2.4 4 1.1 2.5 1 1.7 0.3 1.1 1.5 0 2.1 0.7 0.4 2.8-1.1 2.8 1.2 1.3 1.2 2.1-1.1 4.7 1.2 1.2-0.8 3.8-1.1 3.1 0.6 1.2 2.2-1.8 0.5-0.2 1.4 1.2 1.3 0.1 2.1-3 2.8-8.7 4.7-2.9 2.7-6.6 1.5-4.5 1.5-2.2 0.5-4.1 3.8 1.1 0.3 1.2 1.2-0.4 0.6-2.5 1.1-0.9 0-2.9 4.6-2.6 3.3-1.5 1.5-1.5 2.1-3.2 5.6-0.1 1.6 1.6 5.5 2.2 2.7 2.4 1.1 0.6 1-0.8 1-2.4 1.7-4.3 2.3-1.8 1.9-0.3 1.8-1.3 0.8-0.5 2.5-1.8 4.4 1.3 1.2-1.3 0.8-6.5 0.3-4.1 2.8-2 2.4-1.9 4.5-2.2 2.6-1 0.5-1.5-1.2-1.9-0.1-1.9 0.3-1 1-1.5 0.5-1.5-0.5-4.6-0.2-2.3 0.8-1.9-0.5-3.2-0.3-7 0.6-4 3.4-3.4 0-3.1 1.2-2.1 3-0.5 1.6-1-0.3-0.3 1.2-2.1 0.8-2.4-1-2-1.5-1-0.1-1.6-2.2-1.2-3.1 0-1.1-1.5-0.6-0.3-1.4 0.2-1.6-1.2-2-5-3.7-3.7-0.3-3 0.5-1.1-6.4 0.8-2.2 3.5-4.3 2.1-0.6 0.7-2.4-1.7 0.2-3-4.3 0.9-4 3.2-3 0.6-2.4-0.5-0.8-1.7-0.4-1.6-3.2-0.3-1.9-1.4-1.2-1.1-1.9 1.1-0.3 4.3 0 1-0.5 1.7-3.5 0-1.9-1.4-1.3 0.2-1 2.7-2.1-0.4-1.1 0.4-3.8-0.4-3.5-0.8-2 2-1.6 1.1-1.6 1.6-1.4 2.1-1.1 2.5-2.5-0.3-1.1-1.9-0.9-1.9-0.2-0.1-3.1-0.7-1.1-5.2-0.1-1.5-0.5-0.8 1.4-2.5 0.9-1.4 0-2.2-0.8-2.9 0.1-3 1.1-0.9-1.3 1.3-1.9-1-1.8-4.1 1-1.9 0.9-1.2 1.1-1.3-0.1 0-2.5 2.6-2.6-1.6-0.2 1.2-1.9-1-1 0.1-2.6-2.3 0.9-0.5-1.2 1.4-2.2-1.4-0.2-2.3-2.5 0.8-3.1 2-1 1.9-1.5 2.6 0.3 1.7-0.3 3.6-1.6-0.4-1.5 0.4-0.7 3.2-1.7 2-0.2 1.9-0.9 1.3 0.5 1.1-0.1 1.3 0.6 1.7 1.6 2.5 0.6 2-0.5 3.6-0.1 1.7 0.2 3.2-0.3 1.8 0.1 2.9-0.8 2.3 1 4.4 0.4 2.6 0.8 7.2 1.4 2.7 0 3.7-0.8 1.6-0.5 1.5 0.3 2.1-0.6 2.3 1 4.7 1.3 2.1-1.3 3.4 0.6 3.3 1.3 1.8 0.1 2.6-0.3 2.5-1z" id="ES" name="Spain">\n </path>\n <path d="M521.2 524.1l-0.3 2.3 1 1.7 0.6 6.5-1.8 3.2 0.1 3-1.6 4.3-0.8 1.1-3.8-2-1.2-1.1 1-1.8-2.2-0.9 0.4-1.7-0.2-0.9-1.6-0.5 1-1.3 0-0.8-1.5-1-0.3-0.9 1.3-1.1-0.6-0.9 0.1-1.3 0.9-1.9 1.2-0.9 2.8-0.8 1.2-1.1 1.9 0.6 0.6-1.2-0.2-2.7 0.3-1.1 1.3 0.5 0.4 2.7z m-133.9-47.9l-0.4 1.4-1.9-2.4 1-0.5 1.3 1.5z m84.4-55.6l2.1 1.2 1.4 0 2-0.6 1.3 0.7 1.4 0.1 3.5 4.3 1.8-0.7 1.4 0.4 0.3 0.9 2.1 0.1 3-0.6 2 1.4 4.8 0.8 1.6 0.6 0.1 1.3-3.5 3.8-1.4 5.5-1 1.8-0.3 1.5 0.2 2.4-0.6 2 0 1.5 1.1 1.3-1.5 0.7-0.8 1.4-2.7 0.3-0.8-0.8-1.1 0-1.8 1.4 1.3 1.1-0.6 0.9-3.8 4-2.1 0.9-0.5 2.9-3 2.2-1.1 2.9 0.8 0.7-0.3 1.5-1.5 1 0 1 1.4 0.1 2.3-1.6-0.5-1.3 2.3-1.5 1.9-0.1 2.2 0.3 0.8 2.2-0.5 1.7 2.3 2.3 0.9 1.4-2.6 1.7 0.1 1.6 0.9 0.6 1.7 2.6 1.8 1.6-0.8 2.5-1.2 0.3-1.7 1.3-1.9-0.2-0.8 0.4 1.5 3.1 3.2 1.4 0.5 1.7-0.8 0.7-1.4 2.5 0.7 1.3 0.1 1.4 0.9 0.9 5.1 2.4 3.3-0.6 0.3 2-2.1 2.6 0.2 1.5-0.6 0.3-0.8 0.3-2.4 1.1-3.9 3.4-1.8 1-0.7 1.8-2 1.4-2.4 0.5-2.3 1-1.1-0.4-2.8 0-1.7-1.2-3.4-0.8-1.1-1.8-2.5-0.1-0.8-1.5-1.9 0.3-1.5 0.7-2-0.1-5.9-1.8-1.4-1.4-1.7 0.5-1.6 1.6-6.5 4.1-2.6 4.3-0.1 1.2 0.7 3.9 1.6 2.5-3.1-0.6-3.8 1.1-1.2 0.8-4.7-1.2-2.1 1.1-1.3-1.2-2.8-1.2 0-1.5-2.6-0.6-0.9 0.7-1.1-1.5-1.7-0.3-2.5-1-4-1.1-0.8 2.4-4.7 0-0.7-0.4-3.1 0.4-3.2-2.1-3.6 0.4-2.2-2.1-2.2-0.2-4.4-1.7-1.8 0.4 0.3-3.2-4.3-1.3-0.5-1.3 2-0.5 1.9-1.9 1.7-7.1 1.3-8.3 1-1.6 1.2-0.4-1-1.2-1.1 1.5 0.7-7.6 0.5-2.8 0.9-3 3.1 2.4 0.8 1 0.9 3.4 0.6 0.1-1.1-4.6-1.8-2.3-3.6-2.3-0.5-1.3 1.8-0.6-0.5-1.8-0.5-5.9-3-0.6-4.8-2.6-1.7-2.6-1.6-1.9-0.4-1.7 0.9-1.8-0.8-1.1-1.4-0.8 1.1-1.6-3-0.2-1.8-0.5-0.3-1.1 1.3-1.4-1.6-0.8-2.6 0.2-0.2-1.7-2.2 0.3-1.2-0.3-1.1-1.1-1.3 0.2-2.2-0.4-0.8-0.7-4.8-1.3-2-0.1-1.9 0.6-1.1-0.3-1.3-2.2-3.1-1.1 0.6-0.7 3.1-0.6 0.6-0.7-2.2-0.9-0.2-1.2 1.6 0.3 0.1-1.2-4 0.1-0.4-1.3 0.5-1.4 2.3-1.2 5.8-1.4 2.5 0.2 1.7-0.2 3-1.6 2.9-0.4 2.7 0.8 2.5 2.8 1.2 1 3.1-1.7 4.4 0.1 0.9 0.9 1.2-1.7 1 1 4.7-0.2-1.5-2.5-0.2-6-1.3-1.7-2.1-4.3 0.2-1.4 3.2 0.3 2.7-0.6 1.3 0.4 0.3 2.8 1.1 1.6 2.2 0 2.3 0.5 3 0.1 4.3 0.8 1.8-0.5 3.5-2-1.8-0.7-0.2-0.7 0.9-2.2 5.2-2.5 3.7-0.7 3.8-1.3 2-1.4 1.2-1.8 0.5-1.3 0.3-6.8 1-2.2 2.9-1.6 6.4-1.1 0.9-0.5 0.9 2.2 0 1.2 2.9 2.4 3.2-1 1.6 1.8 0.5 2 4.2 1.1 0.6 2 0.9-0.3 3.6 0.4 1.6 1.1-0.4 1.6 0.7 0.7-0.7 1.4 0.5 0.6 2.3 0.3 2.2-0.3 1.3-0.6 0.5-1.4 1.9-0.6-0.8 2.7 0.6 0.6 0.4 2 1.7 0.1 3.3 1.5 2.8 2.6 3.4-0.4z" id="FR" name="France">\n </path>\n <path d="M306 611.9l-1.2 0.2-4.5 2.5-1.3 0-2.5-1.1-4.5-0.4-1.5-0.3-1.8 0.7-1.5 0-1.1 1-0.8-0.3 1-2.1 1.6-4.1 0-2.6 0.4-2.2-0.3-2.1-0.7-1.4 1.1-3.5 0-1.8-0.9-2.3 2.8 0.3-1.7-1.4-1.5 0-2.3 0.9-1.5 0.1 0.1-1.4-0.5-1.8 2-0.6 1.6-1.7-0.3-1.6-1.2 1.1-0.6 1.4-2.8 0.7-1.5-0.5 0-1.9 0.6-1.7 0.4-2.3 0.8-2.2-0.2-1.4 1.6-1.3 1.4-1.9 4.3-8.9-0.6-1 1.7-6.6 1.2-2.3 0.6-4.3-0.2-2-0.7-2-0.7-4.3 0-1.4-0.9-1.8 0.1-1 1.4-1.7 1.2-1.1 1.9-0.9 4.1-1 1 1.8-1.3 1.9 0.9 1.3 3-1.1 2.9-0.1 2.2 0.8 1.4 0 2.5-0.9 0.8-1.4 1.5 0.5 5.2 0.1 0.7 1.1 0.1 3.1 1.9 0.2 1.9 0.9 0.3 1.1-2.5 2.5-2.1 1.1-1.6 1.4-1.1 1.6-2 1.6 0.8 2 0.4 3.5-0.4 3.8 0.4 1.1-2.7 2.1-0.2 1 1.4 1.3 0 1.9-1.7 3.5-1 0.5-4.3 0-1.1 0.3 1.1 1.9 1.4 1.2 0.3 1.9 1.6 3.2 1.7 0.4 0.5 0.8-0.6 2.4-3.2 3-0.9 4 3 4.3 1.7-0.2-0.7 2.4-2.1 0.6-3.5 4.3-0.8 2.2 1.1 6.4z" id="PT" name="Portugal">\n </path>\n <path d="M843.2 646.3l-0.1 0-0.1 0 0.1-0.1 0.1 0.1z m0 0l0.1 0 0.1 0 0.1 0.1-0.1 0-0.1 0-0.1 0 0-0.1z m-0.4-0.3l-0.1 0 0-0.1 0.1 0 0-0.1 0.1 0.1 0 0.1-0.1 0z m3.5-0.8l0.2 0.1 0.3 0.3 0.2 0.4 0.1 0.3 0.2 0.2 0.2 0.1-0.2 0-0.3 0-0.3-0.1-0.2-0.2-0.2 0-0.7 0.1-0.6 0.1-0.1 0.1-0.1 0.1-0.3 0-0.3 0-0.1-0.1 0.2-0.1 0.1 0-0.1-0.3-0.2 0-0.2-0.1 0-0.4-0.1-0.1-0.3-0.1 0-0.2 0.1-0.1 0.2-0.1 0.1 0.1 0.1 0.1 0.2-0.1 0.1-0.1 0.1-0.1 0.1-0.1 0.2 0.2 0.2 0.1 0.1 0 0.2 0.1 0.1 0 0.3-0.1 0.2 0 0.1 0.1 0.2 0 0.1 0 0.1 0 0-0.1z m-4 1.1l0 0.2-0.3 0.1-0.3 0.3 0 0.2-0.1 0.3 0 0.3 0 0.3 0 0.3 0 0.1-0.1 0-0.1 0.1 0 0.3-0.1 0.1-0.2 0-0.4 0-0.2 0.1-0.1 0.1-0.1 0.2-0.1 0.1-0.2 0.1-0.4 0.1-0.4 0.2-0.3 0.1-0.2-0.3 0.1 0.5-0.4 0.2-0.9 0.2-0.2 0.1-0.1 0.1-0.2 0.1-0.2 0-0.9-0.1-1 0.1-0.1 0.1-0.2 0.1-0.6 0.5-0.1 0.3-0.3 0-0.3 0.1 0 0.1-0.1-0.1-0.1-0.2 0.1-0.2 0.1 0.1 0.3 0-0.1-0.4-0.4-0.1-0.2 0.2-0.1 0.1-0.2-0.1 0 0.1-0.4-0.1-0.3-0.2-0.1-0.1 0-0.2-0.1 0-0.1 0-0.1 0-0.1 0-0.1 0.1 0 0.1-0.2 0-0.1 0.2-0.2 0-0.2 0-0.1 0.1 0.1 0.2-0.2 0.1-0.5 0-0.6-0.1-0.5-0.2-0.7-0.4-0.3-0.1-0.3-0.1-0.5 0-0.3-0.1-0.2-0.2-0.6-0.4-0.1-0.1-0.1-0.4 0-0.1-0.1-0.1-0.4-0.9-0.1-0.1-0.3-0.2-0.2-0.1-0.1-0.1-0.1-0.2 0-0.2 0.1-0.2-0.3-0.4-0.1-0.2 0-0.4-0.1-0.2-0.3-0.5-0.2-0.3-0.1-0.4 0.1-0.3 0.1 0 0.3 0.1 0.4 0.5 0.3 0.1 0.2 0.1 0.6 0 0.4-0.2 0.3-0.4 0.3-0.4 0.1-0.5 0.1-0.3 0.2-0.1 0.1-0.1 0-0.1 0.1 0 0.1 0.1 0.1 0 0.2 0 0.1 0.1 0.2 0.2 0.2 0 0.1 0 0.2-0.2 0.1-0.2 0-0.2 0.4 0.1 0.2 0.4 0.1 0.2 0.1 0.2 0.2 0.1 0.4 0.1 0.3 0.1 0.2 0.2 0.2 0.1 0.1 0.2 0 0.2 0.1 0.1 0.1 0.1 0.1 0 0.4-0.1 0.1-0.2 0.1-0.2 0.1-0.1 0.1 0.1 0.1 0.1 0.2 0.1 0.2 0 0.2-0.1 0.2-0.2 0.2-0.2 0.2-0.1 0.3-0.2 0.1-0.2 0.2 0 0.3 0.1 0.3 0 0.4 0 0.1-0.1 0.1 0 0.1-0.2 0.3-0.2 0.2 0 0.2 0.1 0.1 0.1 0.2 0 0.1 0 0.2 0.2 0.2 0.2 0.2 0.1 0.3 0.1 0.1 0 0.1-0.1 0-0.1 0.1-0.2 0.3-0.3 0.1 0 0.2 0 0.3 0 0.2 0 0.1 0 0 0.2 0.1 0.2 0.1 0.1 0.2 0.2 0.2 0.2 0 0.1 0.1 0.3 0 0.2 0 0.3 0 0.4-0.1 0.3 0.1 0.2 0.1 0.1 0.2 0 0.2 0 0-0.3 0-0.4 0.1-0.1 0.1-0.1 0.1-0.1 0.1 0.1 0.1 0.4 0.1 0.2 0.1 0.1 0.3-0.1 0-0.2 0.1-0.1 0.2 0 0.1 0.1 0.2 0 0.1-0.1 0.1 0.1 0.1 0 0.3 0.2 0.2 0 0.1 0 0.3 0.2z" id="CY" name="Cyprus">\n </path>\n <circle cx="399.9" cy="390.8" id="0">\n </circle>\n <circle cx="575.4" cy="412" id="1">\n </circle>\n <circle cx="521" cy="266.6" id="2">\n </circle>\n</svg>\n',
              worldPacific:
                '\n<svg viewbox="0 0 2000 868">\n  <path d="M593 265l0.5 1.8-3.4 0.7-3 1.2-6.4 0.8-6.2 1.4-3.9 2.8 0.5 2.7-0.2 3.3-3.4 2.7-0.5 2.5-2.1 2.3-5.1-0.2 1 4.3-3.8 1.7-3.3 3.9-0.7 3.9-2.6 1.8-1.9-0.6-4.4 0.9-1 1.8-4.1 0-3.9 3.7-1.5 5.5-7.7 2.7-3.8-0.6-1.4 1.5-3.1-0.9-5.8 1-8.4-3.3 6.4-5.9 0.6-4.2-3.9-1.1 0.7-4.1-0.4-5.2 3.4-3.6-2.1-0.9 2.8-4.8 4.7-8.1 4.7 2.5 4.4-0.9 2-2.9 4.5-1 3.7-2 2.7-5.1 4.9-1.3 1.5-2.3 2 1.7 1.6 0.2 2.9 0.1 3.7 1.3 1.4 0.8 4.5-2.1 1.4 1.3 2.6-3 3.2 0.2 1.1-1 1.3-2.6 3-2.3 2.5 1.5-1.2 2 1.5 0.3-2.1 5.5 1.6 2.1 2.2-1.4 2.6-0.6 4.1-2.9 3.6 0.4 5.5 0.1z" id="AF" name="Afghanistan">\n </path>\n <path d="M274.8 579.3l0.8 2-0.3 3.2 1.3 3-0.5 2.5 0.7 2.2-11.9-0.1 2.8 20.7 4.7 5.4 4.5 4-10 2.7-13.9-1-4.5-3.1-22.9 0.3-0.7 0.5-4-3-3.7-0.2-3.2 1.1-2.5 1.3-1.3-4.1-0.2-5.7 0.9-6-0.1-2.8 0.9-5.8 1-2.7 2.7-4.3 1.5-2.8 0-4.9-0.7-3.7-1.9-2.3-2-3.9-1.7-3.9 0.1-1.4 1.6-2.6-2.3-6.2-1.5-4.4-3.1-4.1 0.4-1.3 2.3-0.8 1.7 0.1 2-0.8 16.9 0.1 1.7 4.8 1.9 3.9 1.5 2.1 2.5 3.4 3.7-0.5 1.8-0.9 3.3 0.9 0.7-1.6 1.2-3.8 3.5-0.3 0.2-1.1 3 0-0.4 2.3 7 0 0.4 4.1 1.3 2.5-0.5 3.9 0.8 4 2.1 2.4 0.4 7.7 1.4-0.5 2.5 0.1 3.4-1 2.7 0.4z m-69.9-33.4l-1.8-4.9 2.1-2.8 1.7-1.1 2.3 2.3-2 1.3-0.9 1.7 0 2.8-1.4 0.7z" id="AO" name="Angola">\n </path>\n <path d="M315.4 230.9l-0.4 1.2 1.8-0.5 0.1 1.7 0.8 0.7-1 2.3-1.9 2.2-0.8 2.7 1.3 1.6-1.1 1.7-2.2 0.9-1.4 2.1-4.2 3.2-0.6-0.5 0.6-1.4-1.7-2.2 1.2-3 3-4.4 1.8-2-0.3-1.1 0.9-2 4.1-3.2z" id="AL" name="Albania">\n </path>\n <path d="M472 341l-0.1 5.2-2.9 0-1.2 4.2 0.8 0.9-2.7 1.3-0.4 2.7-2.1 2.7-0.6 2.6-1.3 1.4-16.4-3.3-1-6.6 0-1.5 1.1-0.3-0.1 1.8 4.5-1.1 4.6 0.2 3.4 0.2 4.6-4.4 4.9-4.2 4.3-4 0.6 2.2z" id="AE" name="United Arab Emirates">\n </path>\n <path d="M1681.6 862.6l-2.7-0.2-5.2 0 12.4-13.8-0.7 2.9-1.7 4.7 2.9 3.7 5.3 1.5-5 3.1-4.9 0.3-0.4-2.2z m141.2-209.7l7.7 10.7 4.4 0.9 5.5 4.9 5 2.5 0 2.9-8.7 9.8 5 1.8 5.9 1 4.8-1 6.7-5 2.8-5.8 3.1-1.2 1.6 3.8-1.8 5.1-6 3.6-4.6 2.7-8.7 6.3-10.9 8.9-3.6 5.2-4.4 6.7-3 6.4-1.9 1.5-2.4 4.2-2.1 3.4 4 5.5-3.1 4.5 1.9 2.8-2 3.2-9.9 8.3-10 3.5-11.4 1.3-5.5-0.6-1.2 3.9-4 4.8-1.1 3.2-4.6 2.3-5.9 0.9-3.6-2.3-3.1 1.6-3.4 6.4 2.3 2 4.2-2-0.7 3.3-6.1 2-6.9 4-5.2 6.4-3.6 3.5-4.8 0-6.3 3.2-4.8 4.8 1.6 4.7 4 1.3-6 5.7-8.6 3.5-9 7.4-6.5 2.5-4.4 3-3.7 6.4 0.2 3.7-1.8-0.4-3.7-0.9-11.2-0.9 1-3.6 3.8-4.7-3.6 0.4 0-2.3 4.6-6.6 5.9-2.8 4.5-4 1.7-3.2 6.5-5.5 7.6-8.4 1.9-3.7 3.1-1.3 1-2.4-1.5-1.3 3.5-2.6-0.8-2.5 3.5-7.4 2.9-1.3 3.9-7.9 5.1-6.6 4.6-5.7 4.5-2.4 1.7-6.3 3.1-6 6.1-4.2 2.5-5.4 6.1-6.4 2.7-6-0.9-1.1 2.2-11.3 6.1-6.7 1.8-6.3 4.1-5.9 5.6-6.1 5.3-4-0.9-2.6 1.8-2.1 2.8-10.8 6.9-3.2 3.6-6.8-0.3-1.6 6-5.9 7 1.6 2.2 4.7 3.4-5.2 6.3 0.3 0.6 1.3z" id="AR" name="Argentina">\n </path>\n <path d="M443.9 256.2l-2 0.2-0.6-3.7 0.4-1-2.3 0-0.9-1.8-1.1 0.2-1.3-1.9-3.2-1.6 1.9-3.1 0.1-2.3 7.8-1 0.3 1.7 1.5 1.1-1.8 1.6 1.9 2.2-2.4 2.1 1.5 1.8 1.9 1-1.7 4.5z" id="AM" name="Armenia">\n </path>\n <path d="M970.8 773.4l5.1 2.2 2.9-0.9 4.1-1.2 3.1 0.4 0.5 7.7-1.8 2.2-0.5 5.2-1.9-1.8-3.5 4.5-1.1-0.4-3.2-0.2-3.3-5.5-0.8-4.2-3.2-5.6 0.1-3 3.5 0.6z m-12.4-175.6l2.1 5.1 3.6-2.5 1.9 2.8 2.7 2.5-0.5 2.9 1.2 5.6 0.9 3.2 1.4 0.8 1.6 5.6-0.5 3.3 1.8 4.4 6.2 3.4 4 3.1 3.7 2.9-0.7 1.5 3.2 4.1 2.2 7.1 2.3-1.5 2.2 2.8 1.4-1 1 6.9 3.9 4 2.6 2.5 4.4 5.3 1.5 5.2 0.1 3.7-0.4 4 2.6 5.6-0.3 5.7-1 3-1.6 5.8 0.1 3.8-1.1 4.6-2.5 5.9-4 3.2-2.1 5.1-1.8 3.2-1.6 5.6-2.1 3.2-1.4 4.9-0.7 4.5 0.3 2-3 2.3-6 0.2-4.9 2.7-2.5 2.5-3.1 2.7-4.5-2.8-3.3-1.2 0.8-3.3-2.9 1.2-4.6 4.7-4.6-1.8-3.1-1-3.1-0.5-5.2-1.8-3.6-4-1.2-5-1.3-3.2-2.8-2.7-5.2-0.8 1.6-3.1-1.5-4.8-2.4 4.5-4.8 1.2 2.7-3.6 0.6-3.8 2-3.2-0.6-4.8-4.2 5.6-3.3 2.2-1.9 5.2-4.3-2.7 0-3.5-3.7-4.7-3-2.4 1-1.5-7.2-4-3.9-0.2-5.4-3.1-9.8 0.6-7 2.3-6 2.2-5.3-0.4-5.5 3.3-4.7 1.5-0.7 3.4-1.8 2.7-4.6 0.1-3.4 0.6-4.9-1.2-3.8 0.7-3.7 0.3-2.9 3.5-1.6-0.3-2.6 1.8-2.3 2.1-4-0.3-3.6 0-6.3-4.1-3-1.3-0.3-3.7 2.6-0.9 0.7-1.4-0.4-2.4 0.2-4.5-1-3.9-3.6-6.5-1.2-3.7-0.1-3.8-2.6-4.2-0.3-1.9-2.7-2.6-1.1-5.1-3.6-5.1-1-2.8 2.7 2.8-2.4-6 2.9 1.9 1.9 2.5-0.4-3.3-3.1-5.2-0.7-2-1.4-2 0.4-3.7 1-1.6 0.6-3.3-0.8-3.8 2-4.7 0.7 5 2.1-4.5 4.5-2.2 2.6-2.7 4.2-2.4 2.5-0.5 1.6 0.8 4.3-2.4 3.4-0.8 0.8-1.4 1.5-0.6 3.1 0.2 5.8-1.9 3-2.9 1.3-3.5 3.2-3.3 0.1-2.6 0-3.5 3.8-5.6 2.6 5.7 2.4-1.3-2.2-3.1 1.7-3.2 2.5 1.4 0.6-4.9 3-3.2 1.3-2.6 2.8-1.1 0-1.8 2.6 0.8 0-1.7 2.5-0.9 2.7-0.9 4.3 3 3.3 3.9 3.5 0 3.7 0.6-1.3-3.6 2.6-5.2 2.5-1.7-0.9-1.6 2.4-3.7 3.4-2.3 2.9 0.8 4.8-1.3-0.1-3.3-4.3-2.1 3.1-1 3.8 1.6 3.1 2.7 4.8 1.7 1.6-0.7 3.6 2 3.3-1.8 2.1 0.5 1.3-1.2 2.7 3.2-1.5 3.5-2.1 2.6-2 0.2 0.7 2.6-1.6 3.3-1.9 3.2 0.4 1.8 4.6 3.6 4.4 2.1 2.9 2.2 4.2 3.9 1.6 0 3 1.6 0.9 2 5.4 2.2 3.7-2.2 1.1-3.5 1.1-2.9 0.7-3.5 1.7-5.2-0.9-3.1 0.4-1.9-0.7-3.8 0.7-4.9 1.1-1.3-0.9-2.1 1.4-3.5 1-3.6 0.2-1.8 2.1-2.5 1.6 3.2 0.4 4.1 1.5 0.8 0.2 2.7 2.1 3.3 0.5 3.7-0.2 2.4z" id="AU" name="Australia">\n </path>\n <path d="M325.5 193.2l-1 0.8-1 2.2-2.2 2.6-2.8 0 0 1.4-4.4 4.1-1.7 1.1-4.6 0.1-3.5 1.5-3.9-0.5-6.2-1.7 0.4-2.2-5.8 1.1-1.4 1.2-2.4-0.9-2.5-0.1-1.5-1.2 1.9-1.5 0.6-1.2 1.8-0.3 1.3 1.7 1.9-1.6 4.3 0.2 4.4-1.1 2.3 0.2 0.6 1.3 1.3-1.1 2.2-4.1 2.4-0.8 3.8-2.9 2.3 2 4.7-2.6 2.1-0.5 2.5 2 2.6-0.4 1.5 1.2z" id="AT" name="Austria">\n </path>\n <path d="M441.9 256.4l-3.3-0.9-1.4-2.9 0.2-2.5 1.1-0.2 0.9 1.8 2.3 0-0.4 1 0.6 3.7z m13.5 2.7l-1.4 0.3-2-3.3 3.1-3.2-0.8-1.9-2.2 0.4-8.2 4.8 1.7-4.5-1.9-1-1.5-1.8 2.4-2.1-1.9-2.2 1.8-1.6-1.5-1.1-0.3-1.7 1.8-1 3.1 1.8 2.6 0.4 1.1-0.8-1-3.5 1.8-0.8 1.3 0.2 1.9 3.9 2.1 0.4 1.6-1.6 4.3-2.6 1.3 3.4 0.7 4.6 2.3 0.3 0.9 1.7-4.6 0.5-3 5-1.8 2.3-2.6 1.5-1.1 3.2z" id="AZ" name="Azerbaijan">\n </path>\n <path d="M305.2 537.2l-0.6 0.1 0-0.3-2.4-6.2 0 0-0.1-1.1-1.5-3 3.5 0.5 1.6-3.7 3.1 0.5 0.4 2.5 1.3 1.5 0.1 2.1-1.4 1.4-2 3.4-2 2.3z" id="BI" name="Burundi">\n </path>\n <path d="M282.1 179.3l-4 4.3-1.5 0.2-3.4 3.5-2-2.8-3 0.5-1-3-0.2-2.5-2.3-0.1 1.2-2.2 5-1.3 3.2 0.5 5.7-1.3 0.8 2.8 1.5 1.4z" id="BE" name="Belgium">\n </path>\n <path d="M159.4 432.4l-0.5 2.2 0.8 3.9-1.4 2.6 0.4 1.7-3.2 4.1-2 1.9-1.4 4.1-0.2 4.2-1.2 10.5-4.8 0.7-1.1-4.5 1.6-14.9-1-1.3 0.1-3.2-1.7-2.3-1.6-1.9 1.2-3.4 2-0.8 1.5-2.8 2.9-0.6 1.5-2 2.2-1.9 2 0 3.9 3.7z" id="BJ" name="Benin">\n </path>\n <path d="M144.2 411.2l-1 3.1 0.2 3 2.6 4.2-0.3 3.2 6.4 1.5-0.8 4.4-1.5 2-2.9 0.6-1.5 2.8-2 0.8-5-0.2-2.6-0.5-2 1-2.4-0.4-10 0.3-0.6 3.7 0.3 4.9-3.8-1.7-2.7 0.2-2.2 1.7-2.4-1.4-0.7-2.2-2.4-1.4 0-3.7 2-2.8 0.1-2.2 5.3-5.4 1.5-4.5 1.8-1.5 2.7 0.8 2.6-1.3 1-1.7 4.9-2.9 1.4-2 5.8-2.7 3.3-0.9 1.2 1.2 3.7 0z" id="BF" name="Burkina Faso">\n </path>\n <path d="M672.8 364.9l-0.5 4.7-1.9-1-0.1 5.2-1.3-3.3-0.1-3.4-0.7-3.1-2-3.8-5.2-0.2 0.3 2.6-2.1 3.7-2.3-1.4-0.9 1.2-1.5-0.7-2.2-0.6-0.3-5.3-1.5-4.9 1.4-3.9-3.2-1.8 1.5-2.3 3.7-2.5-3.6-3.4 2.6-4.4 4 2.8 2.6 0.3 0 4.5 5.2 0.9 5.2-0.1 3.1 1.1-3.2 5.6-2.5 0.3-2.1 3.7 2.7 3.4 1.3-4.2 1.6 0 2 10.3z" id="BD" name="Bangladesh">\n </path>\n <path d="M365.1 224.4l-4.2 2.6-4.5 4.6-0.3 3.7-4-0.9-6.5 2.1-1.8 3.2-5.1 0.6-2.5-2.3-5.2 1.8-3.8-0.2 2.1-4.2-1.5-2.1 1.4-0.9-0.1-0.8 2.1-2 3.2-2-0.9-2.8 0.9-2.3 2.2-1.5-0.1 2.6 2.3-0.4 3.4 1 7.4 0.3 3.5-1.6 7-1.5 2.4 2.3 2.6 0.7z" id="BG" name="Bulgaria">\n </path>\n <path d="M320.2 217l1.9 0-3.1 2.8 1 2.5-2.6 3-1.4 0.3-1.3 0.6-2.7 1.4-2.9 3.6-3.1-2.5-0.3-2.6-1.1-1.5-0.9-2.4 0.2-1.9-0.6-3 2.8-2.7 0.9 1.5 1.9-1.3 2.5-0.2 3.8 1.1 3.6-0.1 1.4 1.4z" id="BA" name="Bosnia and Herzegovina">\n </path>\n <path d="M414.8 171.2l-4.5 0.4-2.5 1.4-2.5 3.1-1.6-0.6-4.6 0.3-0.3-1.5-2.6 1.1-1.2-0.9-3.8-0.1-4.4-1.5-4.6-0.5-3.9 0.2-4 1.6-2.5 0.3 2-2.8 0.7-2.9 3.9-1.2 1.9-2.5 0.6-2.4 1.9-2.7 4.7 0 7.1-2.3 3.9-3.5 5.5-1.9 1.8-2.8 3.7-1 7.1-2.4 3.7 1.6-0.5 1.5 3.1-0.8 3.5 1.5-1.8 2.9-2.3 1.6-0.1 4.1 1.1 1.1-1.1 1.1 2.4 1.1 0.2 1.7-2.9 1.3-3.7-0.2-1.4 0.6-0.4 2-1.6 4z" id="BY" name="Belarus">\n </path>\n <path d="M1682.6 405l-1.7 0-0.7-7.4-0.9-5.1-0.2-1 0.7-0.3 1.1 0.8 1.4-3.9 1-0.1 0.2 0.9 1.1 0 0.2 1.8-0.4 2.8 0.6 1-0.2 2.4 0.5 0.6-0.1 3.3-0.9 1.7-0.9 0.2-0.8 2.3z" id="BZ" name="Belize">\n </path>\n <path d="M1851.3 639.5l0.4-2-4.5-3.4-5.3-0.1-10.2 1.9-4 5.8-0.9 3.5-4 7.7-0.6-1.3-6.3-0.3-3.4 5.2-2.2-4.7-7-1.6-6 5.9-4.3 0.9-0.2-9-1.5-7.3 3.1-6.2-2.4-2.8 0.2-4.7-1.9-4.4 5-7-1.5-5.5 1.7-2.2-0.6-2.4 2.7-3.2 1-5.6 1-4.5 1.5-2.2-3.7-10.5 4.2 0.5 3-0.1 1.5-2 5.3-2.6 3.2-2.5 7.6-1.1-1.1 4.9 0.4 2.5-1 4.4 5.5 5.8 6.2 1.1 1.9 2.4 3.7 1.3 2 1.9 3.6-0.1 3 1.9-0.3 3.8 0.8 1.9-0.5 2.8-1.6 0.1 0.7 7.6 10.8 0.3-1.6 3.7 0.1 2.6 2.7 1.8 0.5 4.1-2.1 5.1-2.2 2.8-0.3 3.7-2.1 1.4z" id="BO" name="Bolivia">\n </path>\n <path d="M1876.2 495.9l3.2 0.5 0.4-1.3-1-1.3 0.5-1.9 2.4 0.6 2.7-0.6 3.3 1.3 2.6 1.4 1.7-1.8 1.3 0.3 0.8 1.8 2.7-0.5 2.2-2.4 1.5-4.8 3.1-6 1.9-0.3 1.6 3.6 3.8 11.4 3.1 1.1 0.2 4.5-4.2 5.3 1.8 2 10.1 1 0.1 6.5 4.5-4.3 7.2 2.4 9.4 4 2.7 3.8-1.1 3.6 6.7-2 11.1 3.4 8.6-0.3 8.1 5.4 6.9 7.3 4.3 1.9 4.8 0.3 2 2 1.2 8.3 0.6 3.9-3.4 10.8-3.4 4.2-9.3 9.1-4.7 7.3-5.2 5.7-1.4 0.1-2.5 4.8-2 12.1-3.8 10.1-1.7 4.3-2.4 2.5-3.1 8.7-7.9 8.5-2.7 6.7-5.3 2.8-2.3 3.9-6.1 0-9.5 2.5-4.8 2.9-6.8 1.9-8.1 5.2-6.8 6.4-2.5 4.9-0.3 3.6-3.5 6.6-2.5 3.1-5.4 3.6-11 11.5-7.2 5.1-5.2 3.1-5.5 6.1-5.5 3.8 0.4-3.7 3.9-3.1-1.1-4.4-2.6-3.6-3.8-4.2-2.1 0.2-3.4-5-3.9 0.7 10.9-8.9 8.7-6.3 4.6-2.7 6-3.6 1.8-5.1-1.6-3.8-3.1 1.2 2.2-3.7 1.9-3.9 1-3.5-1.7-1.2-2.4 1-2-0.2 0-2.5 1-6-0.6-1.9-3.3-1.8-2.6 1.3-5.7-1.3 2.5-8.8-0.9-3.6 2.1-1.4 0.3-3.7 2.2-2.8 2.1-5.1-0.5-4.1-2.7-1.8-0.1-2.6 1.6-3.7-10.8-0.3-0.7-7.6 1.6-0.1 0.5-2.8-0.8-1.9 0.3-3.8-3-1.9-3.6 0.1-2-1.9-3.7-1.3-1.9-2.4-6.2-1.1-5.5-5.8 1-4.4-0.4-2.5 1.1-4.9-7.6 1.1-3.2 2.5-5.3 2.6-1.5 2-3 0.1-4.2-0.5-3.3 1.1-2.5-0.7 1.4-9.9-5.1 3.8-5-0.2-1.8-3.4-3.8-0.4 1.5-2.8-2.8-4-2-5.8 1.6-1.2 0.2-2.7 3.6-1.9-0.3-3.5 1.6-2.3 0.6-3 6.8-4.5 4.8-1.2 0.8-1 5.2 0.3 3.3-17.8 0.2-2.8-0.9-3.8-2.5-2.3 0-4.8 3.2-1 1.2 0.6 0.2-2.4-3.4-0.7-0.2-4.1 11.2 0.2 1.8-2.3 1.7 2.1 1.2 3.8 1.1-0.8 3.2 3.5 4.5-0.5 1-2 4.3-1.5 2.3-1 0.6-2.8 4.1-1.8-0.4-1.4-4.9-0.6-1-4.1 0.1-4.3-2.7-1.7 1-0.6 4.3 0.8 4.7 1.6 1.6-1.5 4-1 6.3-2.4 1.9-2.5-0.8-1.8 2.9-0.3 1.5 1.5-0.6 2.8 2 1 1.5 3-1.5 2.3-0.6 5.6 1.6 3.2 0.5 3 3.6 3.1 2.9 0.3 0.6-1.3 1.8-0.2 2.5-1.2 1.8-1.7 3.2 0.5 1.4-0.2z" id="BR" name="Brazil">\n </path>\n <path d="M789.7 478.8l2.3-2.4 4.9-3.6-0.3 3.2-0.4 4.2-2.7-0.2-1.2 2.2-2.6-3.4z" id="BN" name="Brunei Darussalam">\n </path>\n <path d="M671.4 327.7l2 2-0.9 4-4.6 0.2-4.6-0.4-3.6 1-4.8-2.5 0.1-1.3 4.4-4.8 3.2-1.6 3.7 1.5 3 0.1 2.1 1.8z" id="BT" name="Bhutan">\n </path>\n <path d="M288.7 623.6l3.1 5.2 1.4 1.2 2.4 3.7 7.7 7.2 2.5 0.7 0.5 2.3 2.4 4.1 4.5 1 4.2 2.9-7.1 4.8-4 4.9-1 4.3-1.1 2.4-2.9 0.6-0.3 3.1 0 2-3.2 1.5-4.7-0.3-3.1-1.8-2.5-0.8-2.4 1.5-0.5 3.1-2.2 2-1.9 2.9-3.8 0.6-1.9-2.3-0.6-3.9-4.9-6.2-1.7-1-4.2-19 5.5-0.2-4.2-23.1 4.1-0.3 8.3-2.2 2.7 2.6 3.2-2.5 1.7 0 2.9-1.5 1.1 0.5z" id="BW" name="Botswana">\n </path>\n <path d="M273.3 452.2l3.7 2.6 2.9 2.6-0.1 2.1 3.6 3.4 2.2 2.8 1.3 3.9 4.1 2.6 0.8 2-1.9 0.7-3.7-0.1-4.3-0.7-2.1 0.5-1 1.6-1.8 0.2-2.2-1.4-6.6 3.3-2.6-0.7-0.8 0.5-1.9 4-4.2-1.3-4.2-0.6-3.5-2.4-4.6-2.3-3.2 2.1-2.4 3.3-0.7 4.6-3.7-0.4-3.8-1.1-3.6 3.5-3.3 6-0.5-1.9-0.1-2.9-2.6-2.1-1.9-3.4-0.4-2.3-2.5-3.4 0.5-1.9-0.4-2.8 0.8-5 1.4-1.2 3.4-6.6 4.8-0.5 1.1-1.7 1 0.2 1.3 1.4 7.4-2.4 2.6-2.6 3.2-2.3-0.4-2.2 1.7-0.6 5.5 0.4 5.6-3.1 4.8-7 3.2-2.7 3.7-1.1 0.4 2.8 2.9 4.1-0.2 2.6-1.2 2.7 0.2 2 1.8 1.9 0.5 0.3z" id="CF" name="Central African Republic">\n </path>\n <path d="M1741.2 206.2l4.3 0.9 4.6-0.2-0.6 2.6-1.6 0.4-8.4-2.7-2.8-2.1 0.5-2 4 3.1z m-2.9-16.2l-2.3 0.1-8.1-1.9-7-3 1.3-0.5 7.8 1.5 7.2 2.7 1.1 1.1z m-307.7 3.8l-2.2 0.9-9.5-2.9-2.5-2.3-5.5-2.2-1.7-1.8-5.7-1.1-3.5-3.4-0.2-1.5 5.8 1.4 3.5 1 5 0.6 2.7 2.2 3.9 3 6.2 2.6 3.7 3.5z m327.7-13.7l1.4 5.5 1.5-2.2 4.5 1.4 0.1 2.2 5.9 1.7 1-1.5 6.6 1.9 2.3 4.6 2.7-1 3.4 3.3 4.7 4 2.3 5.6-2.1 0.2-4.3-1.2-3-5.2-2-0.8-1.6 5.5-3.2-0.2 1.3-3-6.1-1.6-5.2 0.4-9.9-0.2-2.3-1.9 1.4-2.2-3.5-1.7 1.1-3.8-3.3-10-0.1-3.6 2.4-2.1 2.5 0.2 0.6 1.7 0.9 4z m-392.3-21.7l2.7 0.8 4.3-0.5 2 7 6.7 5-2 0-4.3-2.8-3.1-2.9-3.4-1.9-2.2-2.7-0.7-2z m216.3-48.1l1.3 3.1-2.5-0.5-2.9-1.8-0.2-0.4 0-1.8 1.9 0.2 2.4 1.2z m-15-3.3l-2.1 3.3-3.3-0.2-2.5-1.5 0.7-2.7 6.2 0 1 1.1z m-31.3-16.9l3.3 2.5 1.4-0.9 4 1.5 6.8 2 6.8 1.7 3.2 2.8 2.8-0.5 5.1 1.9-2.1 1.9-8.3-1.4-5.1-2.6-1.3 3.1-3.4 3-4.8-3.4-5.5 0.5 1.1-2.8-3.9-4.6-3.7-5.2 3.6 0.5z m30.9-8.5l-4.4 0.3-4.1-2.7-1.8-3.1 3-0.8 5.1 1.5 2.8 2.4 0.3 0.8-0.9 1.6z m-94.9-10.8l-0.7 1.9-7.3-1.7-2.8 0.6-8.1-2.4 2-1.7 0.5-2.4 5.9 1.6 3.5 1 2.3 1 4.7 2.1z m257.8 144.4l-5.9-3.6-6.1-8.7-3.5-1.8-2.7 1.1-2.8-1.7-0.5 4.8 1.8 5 0.2 2.9-1.5 1-1.5 0.3 0.6 1.6-9.5 0-7.8 0-1.6 1.2-2.4 4.4-0.1-0.1-1.4-0.4-1.1 0.9-0.5 1.4-3.1-1.2-3.8 0.8-3.1 1-1.1 0.7-0.2 2.2 2.4 0.6 1.4-0.3 0.2-0.1 1.6 2-4 0.7-2.1 0.9-0.8 1-3.2-0.7-1.4 0.3-1.2 1.8-2.7 2.1-3.1-0.5-0.2-2.2 0.4-3.5 2.1-2.2-0.6-1.8-2.2-3 0.3-3.6-3.1-4 5 4 4.8 0.8 0.3-2.1-6.4-4.9-2.9-2-5.4-1.2-4.5-0.6-4-0.1-4.3-0.8-1.9-1.4-0.3 0.9-1.5-0.2-0.3-2.1-2.6-0.8-0.7-2.4-3.2-1.9-0.3-1.8-6.2-1-4-3.5-1.8-0.9-3.6-0.1-5.5-1.3-0.6 0.8-0.1 1.6-2.2 0.9-0.5 2.5-7.2-1.6-3.6 0.8-6.1-1.9-5.8-1-3.7-0.4-2.2-1.1-3.1-3.5-1.6 0.1 1.4 2.4-10.3 0-17.2 0-17.1 0-15 0-15.1 0-14.8 0-15.3 0-4.9 0-14.9 0-14.3 0-0.7 0-12.6-6.2-4.8-2.7-10.2-2.6-5.4-5.6-1.2-3.8-7.6-2.6-3.4-5-8.1-4.5-1.7-3.2 1.1-3-2.2-3.8-10.1-3.9-8.5-6.9-5.3-4.4-5.7-2.7-4.4-2.4-4.2-3.1-3.5 1.9-2.8 3.4-6.1-4-4.6-2.6-5.3-1.6-4.6-0.2-17.6-33.1-12.2-20.6 8.6 1.3 8.2 2.6 4.7 0.5 2.2-2.3 3.9-1.7 6.6 0.7 4.5-2.4 5.8-1.3 4.5 2.2 2.1-1.3-0.9-2.5 3.2 0.6 10.7 4.8 2.7-3.6 3.7 4.1 4.4-0.9 0.3-1.6 5.3 0.3 8.2 2.3 11.3 2 6.5 0.9 3.8-0.3 8 2.8-3.7 2.7 8.6 1.2 10.9-0.6 2.8-1 7.4 3.3 2.2-2.8-6.4-2.3 1.1-1.9 4.8-0.3 2.9-0.5 4.6 1.3 6.9 3 4.3-0.4 9.8 2.5 5.8-0.9 6.3 0.1-3.8-3.4 2.8-1 8.3 1.9 5.1 5.2-1.6-4.4 3.5 0.1-3.6-5.5-7.9-3.4-7.1-2.2-5.9-5.9 0.6-3.9 6.3 0.9 6.7 2.3 12.1 6.1-0.8 2.6 8.9 1.2 5.8 5.6 1.1-4.3 8.8 3.5 3 4.1 8 3.8 0.2-4.1-2-4.7-6.4-6 6.4 0.4 7 0.8 8.6 2.7 3.4 2.7 0.1 3 6.2 2.9 2.4 2.8-4.2 3.9-5.1 0.9-6.1-1.7 1.6 2.8 0.6 4.8 1.2 2.5-1.3 3.9-6 0.4-1.2 2.4 3.2 3.8-4.5 0.7-1.2 4.8 0.9 6.6 2.2 4.7 5.5 6.9 7.6 1 6.8 5.6 5.9 4.6 5.6-1.2 10.9 2.7 6.6 2.3 5.8 2.9 7.4 1.6 7.1 2.6 8.2 0.4 5.7 0.6 3.7 5.3 6.5 6.2 9 7 11.9 5.9 2.2-2-2.4-6.4-10.5-9.8-6.2-3.3 5.3-2.9 1.6-4.2-1.1-4.3-4.1-4.1-7.9-5.1-9.9-4.5-0.5-6.3-7.2-5.4-10.7-9.2 1.8-1.3 9.3 1.6 5.2 0.5 2.1-1.5 6.3 2 9 3.4 3.8 2.3 8.6 0.4 5 5 9.2 7.6 5.1 0.9 7 3.5 3.3-3.3-2.4-6.6 0.1-2.8 9.2 5.4 14.1 7.6 12.6 7.3 1.9 3.8 9.8 3.4 7.7 3.5 9.3 1.6 5 2 7 5.2 4.6 0.8 4.2 2.4 6.9 6.9-1.4 2.4-1.5 2.2-6.2 2.2-1.8 5.2-7.6 1-11.7-1.3-7.5-0.1-4.8 0.4-0.6 4.6-4.2 2.8-1.1 8.3-1.7 5.9 3.6-1.1 2.1-8.3 6.6-5.3 7-0.6 6.8 3.1-1.5 4.3 6.7 6.8 5.1 4.8 8.9 3.2 7.8-0.9-0.1-7.2 3.8 4.6 5 2.3-3.3 4.2-8.7 3.8-3.3 2.6-2.7 4.6-4.2-0.4-3.9-5.5 5.2-5.3-8 0.3-5.2 0.7z m-354.4-165.9l0.4 2.5 7.3-1.6 8.2 2.6 1.8-2.6 5.4 1.7 8.4 5.2-0.1-2.2-8.3-5.4 2.7-0.8 4.8 0.9 6.7 2.1 7.7 5.1 5 3.8 9.5 2.6 10 2.6 1.8 2.4-6.3 0.4 4.6 2.1 0.5 2-8.4-0.8-8.5-1.5-4.6 0.3-6.1 1.9-9.9 0.8-7.1 0.5-4.4-2.6-7-1.5-3.1 0.7-8.7-4.4 2.2-0.5 5.6-1 6 0.3 4.5-1-9-1.2-8.4 0.4-5.9-0.1-3.8-2 7.5-2.1-6.2 0-8.2-1.4-0.1-3.9 0.8-2.1 7.7-3.2 5 1z m36.7-1.5l0.2 3.4-10-3.6 0.5-0.8 5.1-0.2 4.2 1.2z m113.6 1.6l2.3 1.5-4.4-0.2-4.5-0.1-3.4 0.7-1.6-0.3-8-2.8-2.3-1.9 1.4-0.3 9.8 0.6 10.7 2.8z m-40.9-0.3l7.1 3.3-1.6-4.2 7.3-2.2 13.8 5.4 3.8 3.5 6-1.6 1.1-2 12.3 2.6 8.9 2.5 3.5 2.4 6-1.2 8.6 3.4 12.6 2.1 6.4 2.2 10.4 5.1-4.5 2.5 14.4 3.6 8.2 1.2 12.4 5.2 7.2 0.4 3.5 3.9 0.3 6.6-8.3-2.4-13.2-5.5-4.7 0.7 3.2 3.3 8.4 3.3 8.9 2.6 3.6 1.6 9.4 5.7 3.2 4.2-7.4-1.6-16.3-4.7 11.8 5 8.5 3.6 3 2-14.7-2.3-13.3-3.4-8.4-2.9-0.2-1.6-9.8-3-9.4-2.7 1.9 1.6-11.8 0.9-5.8-1.9-1.5-4.3 8-0.1 8.2-0.7-3.7-2-1.6-2.8-0.7-5.5-4-2.5-3.9-1.9-9.6-2.7-10.7-1.8 1.1-1.4-8.4-3.4-4-0.3-5.5-1.9-0.3 1.6-6.7 0.7-16.4-1.2-10.5-1.6-7.6-0.8-5.5-1.9 1.5-2.4-5.8-0.1-7.4-5.3-2.6-4.7 1.5-2.1 8.4-1.4 1.4 3.3z m-58.8-3.5l5.9 1.1 6.3-0.7 2.8 1.5-0.8 2.5 8.5 2.3 4.5 4.7-4.4 2.1-4.4-0.5-4.9-2-14.3-4.1-1.7-1.7 8.8 0.7-8.1-3.4 1.8-2.5z m34.8 5.5l0.2 4-4.8-0.2-7.7-4.6-3-2.6-0.5-2.2 2.2-1.4 8.4 0.1 9 1.3-0.2 4.6-3.6 1z m-102.3 7.4l-8.6 2.6-4.1-2.4-11.6-2.8-0.1-2.2-0.5-3.9 0.5-3.4-6.7-3.1 12.4-0.8 6.6 1 10.3 0.3 5.2 1.5 6.4 2.2-3.7 1.3-6.4 3.7-1.7 3.7 2 2.3z m86.7-18.8l0.4 2-6.1-0.4-6.4-1.3-0.8-2.3 3.7-1.3 5.7 1.7 3.5 1.6z m-30.2-8.7l5.9 2.3 3.5 2.6 3.1 3.7-5.8 0.6-5.1-0.8-3.6-3-5.8 0.4-5.1-3.9 4.3 0.2 3.5-1.7 5.7 0.3-0.6-0.7z m-33.5 2.6l3.7 1.8 2.3-0.9 4.3 0.2 3.6 2.5 0.5 2.4-12.2 0.8-7.4 2.2-5.8 0.1-2.3-1.6 5.6-2.3-16.7 0.6-6.4-0.9 0-4.9 2-1.4 12.5 1.7 10.2 3 7.2 0.3-11.1-4.7 1.3-1.8 4.6 0.5 4.1 2.4z m45.2-4.4l6.4 1.5 7.4 0 5.6 1.7 1.8 1.8 5.9 1.2 4.1 1.2 5.5 0.2 6.2 0.4 4.5-1.1 7.2-0.4 6.7 0.3 7 1.9 3.9 2.1-0.5 1.4-4.2 1.1-5.9-0.6-10.1 0.8-7.9 0-7.1-0.6-12.5-1.6-5-2.8-3.8-2.5-6.8-2.2-8.7-0.6-6.4-1.5-1.4-2 8.1 0.3z m-83.6-2.7l3.8 3.7-0.9 1.8-3.3 0.2-4.8 2.1-5.3 0.8-6.2-1.1 2.5-3.7 4.2-3.1 5.7 0 4.3-0.7z m83.9 0.6l-1.5 0.2-7.5-0.4-2.9-1.3 7.6 0.1 3.9 0.9 0.4 0.5z m-61.9-0.8l-5.2 1.4-7.4-1.6 1.1-1.5 4.8-0.5 6.1 0.7 0.6 1.5z m-3.6-4.3l-3.2 0.9-6.1 0-0.8-0.7 2-1.4 2.2 0.2 5.9 1z m54.3 2.5l-4 1-4.6-1.1-4.1-1.8-3.1-1.9 5 0.2 2.6 0.3 6.7 1.6 1.5 1.7z m-17.3-1.2l4.2 2-6.8-0.6-8.2-1.5-8.4-0.2 1.7-1.4-6-1.1-2.6-1.7 7.9 0.6 12.2 1.7 6 2.2z m37.9-6.2l6.7 1.5-2.7 1.4-1.2 3.5-6 0.3-8.5-0.6-6.8-1.9-2.5-1.7 1-1.2-6.6 0-6.2-1.5-5.4-2-0.5-1.9 0.4-1.3 3.1-0.3-3.1-0.9 7.8-0.3 8.2 2.3 7.5 0.9 7.1 0.8 7.7 2.9z m38.1-14.1l9.7 0.3 8.3 0.4 8.5 1.1 2.1 1-4.8 1.7-6.6 0.8-1.3 0.9 7.5 0-3.2 2.5-3.3 1.2 0.7 3.6-6.1 0.8-0.6 0.9-10 0.5 6 0.5-1.1 0.8 7 2.3-0.7 1.6-3.4 1.4 1.4 1.9-2.9 1.4 2.3 1.1 6.1-0.2 2 1.2-5.4 3-12-1.4-10 0.8-6.5-0.6-7.5-0.3-3.9-2.3 5.2-1.1-7.1-3.5 1.7-0.3 13.2 2-9.9-3-7.4-0.9 0.1-1.9 4.7-1.1-1.6-1.5-8-1.8-5.3-2.3 10 0.2 3.6 0.5 2.8-1.6-8.8-0.5-11.9 0.3-8.7-1.5-5.8-1.7-6.1-1.2-3.1-1.4 3.8-0.7 3.8-0.1 5.7-0.7 2.4-1.4 4.6 0.2 5.7 1.1-1.3-2.1 3.3-0.6 5.3-0.4 10.1-0.2 2.6 0.4 8.5-0.6 7.8 0.2 7.8 0.3z" id="CA" name="Canada">\n </path>\n <path d="M283.5 200l-0.6 1.2-1.9 1.5 1.5 1.2 2.5 0.1-2.3 2.6-3 1.1-3.2-0.8-2.9 2.6-2.5 0.2-0.2-1-4.4 2.1-2.7 0.3-1.2-1.3 0.2-2.8-3.2 1 2.2-2.9 6.3-3.6 1-1.6 1.9 0.6 2.1-1.1 4.3 0.1 2.1-1.4 4 1.9z" id="CH" name="Switzerland">\n </path>\n <path d="M770.8 386.8l-5.1 3.1-4.5-2 0.2-5.6 2.9-2.9 6.3-1.8 3.3 0.1 1.1 2.5-2.7 2.8-1.5 3.8z m123.1-154l-3.1-3.8-2.4 3.6-8.3 2.8 0.5 3.4-4.5-0.2-2.3-2.1-4.1 4.6-6.2 3.5-4.7 4.1-7.6 1.9-4.3 3-5.9 1.8 3.2-3-0.9-2.5 4.7-4.4-2.3-3.4-4.9 2.3-6.5 4.5-3.8 4.2-5.3 0.3-3.1 3 2.3 4.4 4.2 1.1-0.1 2.9 4 1.9 6.5-4.7 4.5 2.6 3.4 0.1 0.6 3.4-7.8 1.8-2.9 3.5-5.6 3.3-3.3 4.6 5.5 3.5 1.5 6.4 2.8 6 3.3 5-0.5 4.8-3.6 1.8 1.1 3.5 3.1 2-1.3 5.3-1.7 5.1-3.2 0.6-4.5 7-5 8.6-5.7 7.7-8 6-8.1 5.5-6.4 0.8-3.6 2.8-1.8-2.1-3.4 3.3-8 3.2-6 1-2.4 6.9-3.1 0.4-1.2-4.7 1.5-2.6-7.5-2-2.7 1-5.5-1.7-2.5-2.6 1.1-3.8-5-1.1-2.6-2.5-5 3.5-5.5 0.7-4.5 0-3.1 1.6-3 0.9 0.3 7.5-3-0.2-0.4-1.5 0-2.7-4.2 1.9-2.4-1.2-4-2.5 2.1-5.4-3.4-1.2-0.8-6-6.1 1.1 1.5-7.7 5.8-5.5 0.8-5.3 0.4-5-2.2-1.6-1.4-3.8-3.3 0.5-5.9-1 2.3-2.7-2.1-4.1-4.3 2.8-4.4-1.6-7 4.1-5.7 4.9-4.6 0.8-2.1-1.8-3-0.1-3.7-1.5-3.2 1.6-4.4 4.8 0.3-5.1-3.6 1.4-6.4-0.6-6-1.5-4.1-2.9-4.1-1.3-1.3-3.1-2.9-0.9-4.9-4.3-4-2-2.6 1.6-6.7-4.6-4.6-4.1 0-7.1 3.7 0.8 0.9-3.3-1.4-3.3 1.8-5.3-4-7.6-8.2-2.7-0.3-5-3.1-3-0.5-1.8 0.3-3.7 0.9-2.6-2.8-1.4-2 0.6 0.5-6 2-1.4-0.3-1.6 6-3 4.1-1.3 5.3 0.9 3.3-4.1 7-0.8 2.6-2.5 9.4-3.5 1.2-1.5 0.8-3.7 4.1-1.6-1-11.2 11-2.5 3.1-1.4 7.5-11.4 9.4 2.1 3.7-2.9 2.4-6.4 4.4-0.6 5.2-4.2 2.1-0.5-0.1 4.4 3.1 3.4 6.5 2.4 2 5.1-4.2 7.4 1.1 2.8 5.8 1.1 6.7 0.9 5.1 4 3 0.7 0.9 5.9 2.1 3.8 5.8-0.2 10.4 1.5 7.2-0.9 4.9 0.9 6.9 4 6.3-0.1 2 2.1 6.7-3.5 8.9-2.2 7.9-0.3 6.5-2.2 4.4-3.5 4-2.1-0.5-2.2-1.2-2.4 3.5-4.1 2.8 0.5 5.1 1.3 5.7-3.4 8.2-2.4 4.5-4.2 3.8-1.9 7.6-0.8 3.9 0.7 0.9-2.2-3.9-4.5-3.7-2-4.3 2.3-4.8-1-3 0.8-0.9-2.5 4.7-6.4 3.3-4.7 5.6 2.4 7.7-4 0.4-2.8 5.7-6.6 3.1-2 0.5-3.5-2.4-1.4 4.6-3.1 6.2-1.1 6.5-0.2 7 1.8 3.9 2.3 2.1 6.3 1.5 2.7 1.2 3.8 1.1 6.2 8.4 2 5.5 4.5 1.4 5.9 7.7 0 4.6-2.5 8.5-1.8-3.1 5.7-2.1 2.3-2.3 7-4 6.2-6.1-1.1-4.7 2.2 0.9 5.5-1.4 7.6-2.7 0.2-0.2 3.2z" id="CN" name="China">\n </path>\n <path d="M106.9 440.8l2.4 1.4 0.7 2.2 2.4 1.4 2.2-1.7 2.7-0.2 3.8 1.7 0.5 9.2-2.8 5.5-2.1 7.3 2.1 5.6-0.5 2.6-2.6 0.1-3.9-1.3-3.7 0.1-6.8 1.1-4.2 1.9-5.8 2.4-1.1-0.2 0.8-5.4 0.6-0.8 0-2.5-2.2-2.8-1.8-0.4-1.5-1.8 1.5-2.9-0.4-3.1 0.5-1.9 0.9 0 0.6-2.9-0.3-1.2 0.6-0.9 2.2-0.8-0.9-5.2-1-2.7 0.7-2.2 1.2-0.5 0.8-0.6 1.5 1 4.4 0 1.3-1.9 1 0.2 1.7-0.8 0.6 2.8 1.4-0.8 2.5-1z" id="CI" name="Côte d\'Ivoire">\n </path>\n <path d="M223.4 460l-3.4 6.6-1.4 1.2-0.8 5 0.4 2.8-0.5 1.9 2.5 3.4 0.4 2.3 1.9 3.4 2.6 2.1 0.1 2.9 0.5 1.9-0.5 3.5-4.5-1.5-4.6-1.7-7.2-0.3-0.7-0.3-3.5 0.8-3.4-0.9-2.8 0.5-9.3-0.2 1-5.1-2-4.3-2.6-1.1-1-2.9-1.4-1 0.2-1.8 1.7-4.6 3.2-6.2 1.6-0.1 3.7-3.8 2.2-0.1 3 2.7 4.1-2.2 0.8-2.7 1.5-2.7 1.1-3.2 3.3-2.7 1.6-4.6 1.3-1.4 1.2-3.4 1.9-4.2 5.4-5 0.6-2.1 0.7-1.2-1.9-2.6 0.4-2.1 1.7-0.4 1.7 4.2-0.1 4.3-0.7 4.3 2.5 6-3.2-0.1-1.7 0.5-2.5-0.7-1.5 3.1 3 3.8 2.4 1.1 0.6 2.7 1.4 4.4-1 1.8z" id="CM" name="Cameroon">\n </path>\n <path d="M291.8 474.2l3.2 5.4 2.5 0.8 1.6-1.1 2.7 0.4 3.2-1.4 1.3 2.8 4.8 4.3-0.6 7.7 2.3 0.8-1.9 2.3-2.3 1.8-2.2 3.4-1.3 3-0.3 5.2-1.3 2.5 0 4.9-1.6 1.8-0.1 3.9-0.8 0.5-0.4 3.5 1.5 3 0.1 1.1-0.6 10.3 1.8 3.7-0.9 2.7 2.3 4.7 3.7 3.5 1 3.6 1.8 1.7-0.2 1.1-1-0.3-7.7 1.1-1.4 0.8-1.3 4.2 1.5 2.8-0.3 7.7-0.1 6.6 1.7 1.1 4.3 2.5 1.4-1.1 1.3 7-4.4-0.1-2.7-3.6-2.5-2.7-4.4-0.9-1.7-3.4-3.3 2-4.6-0.9-2.3-3-3.6-0.5-2.7 0.1-0.5-2-2-0.2-2.7-0.4-3.4 1-2.5-0.1-1.4 0.5-0.4-7.7-2.1-2.4-0.8-4 0.5-3.9-1.3-2.5-0.4-4.1-7 0 0.4-2.3-3 0-0.2 1.1-3.5 0.3-1.2 3.8-0.7 1.6-3.3-0.9-1.8 0.9-3.7 0.5-2.5-3.4-1.5-2.1-1.9-3.9-1.7-4.8-16.9-0.1-2 0.8-1.7-0.1-2.3 0.8-0.9-2 1.4-0.7 0-2.8 0.9-1.7 2-1.3 1.5 0.6 1.8-2.5 3.2 0.1 0.4 1.8 2.2 1.2 3.2-4.1 3.2-3.2 1.3-2-0.4-5.4 2.3-6.3 2.6-3.4 3.7-3.1 0.6-2.1 0.2-2.4 0.9-2.2-0.3-3.7 0.9-5.8 1.2-4 1.9-3.5 0.5-3.9 0.7-4.6 2.4-3.3 3.2-2.1 4.6 2.3 3.5 2.4 4.2 0.6 4.2 1.3 1.9-4 0.8-0.5 2.6 0.7 6.6-3.3 2.2 1.4 1.8-0.2 1-1.6 2.1-0.5 4.3 0.7 3.7 0.1 1.9-0.7z" id="CD" name="Democratic Republic of the Congo">\n </path>\n <path d="M240.1 485.5l-0.5 3.9-1.9 3.5-1.2 4-0.9 5.8 0.3 3.7-0.9 2.2-0.2 2.4-0.6 2.1-3.7 3.1-2.6 3.4-2.3 6.3 0.4 5.4-1.3 2-3.2 3.2-3.2 4.1-2.2-1.2-0.4-1.8-3.2-0.1-1.8 2.5-1.5-0.6-2.3-2.3-1.7 1.1-2.1 2.8-5.1-6.9 4.2-3.5-2.4-4.3 1.9-1.7 3.9-0.8 0.3-2.9 3.2 3.2 5.1 0.2 1.6-3 0.7-4.4-0.7-5-2.8-3.9 2.6-7.5-1.4-1.3-4.3 0.5-1.5-3.3 0.5-2.9 7.2 0.3 4.6 1.7 4.5 1.5 0.5-3.5 3.3-6 3.6-3.5 3.8 1.1 3.7 0.4z" id="CG" name="Republic of Congo">\n </path>\n <path d="M1786.5 431.7l-3.5 1.1-1.1 3.2-2 1.9-1.4 2.4-0.2 4.7-1.2 3.8 3 0.4 1 3 1.3 1.4 0.7 2.6-0.5 2.4 0.3 1.4 1.5 0.5 1.5 2.3 7.3-0.6 3.4 0.8 4.5 5.6 2.2-0.7 4.2 0.4 3.2-0.8 2.1 1.1-0.8 3.5-1.2 2.2-0.1 4.7 1.4 4.3 1.7 1.9 0.3 1.5-2.8 3.2 2.1 1.5 1.6 2.2 2 6.5-1.1 0.8-1.2-3.8-1.7-2.1-1.8 2.3-11.2-0.2 0.2 4.1 3.4 0.7-0.2 2.4-1.2-0.6-3.2 1 0 4.8 2.5 2.3 0.9 3.8-0.2 2.8-3.3 17.8-2.7-3.4-1.7-0.2 4-6.6-4.3-3.1-3.5 0.6-2-1.1-3.2 1.7-4.3-0.8-3.2-6.8-2.6-1.7-1.8-3.1-3.8-3.1-1.5 0.7-2.5-1.6-2.8-2.1-1.6 1-4.9-0.9-1.5-2.8-1 0.1-5.8-3.7-0.9-2 2.2-0.5-0.4-3.3 1.3-2.3 2.8-0.5 2.3-4.1 2-3.4-2.2-1.5 0.9-3.8-1.6-5.9 1.1-1.7-1.3-5.5-2.5-3.5 0.5-3.2 1.9 0.5 0.9-1.9-1.6-3.9 0.6-0.9 2.9 0.2 3.9-4.5 2.3-0.7-0.1-2.2 0.5-5.5 2.9-3 3.6-0.1 0.3-1.4 4.6 0.6 4.1-3.3 2-1.5 2.4-3.1 2 0.4 1.8 1.7-0.9 2.2z" id="CO" name="Colombia">\n </path>\n <path d="M1716.8 437.1l1.8 3.6 2.4 2.6 3 2.8-2.2 0.5 0.3 2.7 1.2 0.9-0.8 0.8 0.4 1.2-0.4 1.3-0.2 1.3-3.2-1.5-1.3-1.3 0.6-1.2-0.4-1.4-1.7-1.5-2.3-1.3-2.1-0.9-0.5-1.9-1.6-1.1 0.5 1.9-1 1.5-1.5-1.8-1.9-0.6-0.9-1.3-0.1-2 0.5-2.1-1.7-0.9 1.2-1.2 0.8-0.9 3.9 1.7 1.3-0.8 1.8 0.5 1.1 1.4 1.7 0.4 1.3-1.4z" id="CR" name="Costa Rica">\n </path>\n <path d="M1726.6 360.2l2.8 2.4 5.1-0.7 2.3 1.5 5.6 4 4.1 3 1.8-0.1 3.6 1.3 0 1.8 4.2 0.3 4.8 2.7-0.4 1.5-3.6 0.8-3.7 0.3-4-0.5-8 0.7 3.1-3.7-2.6-1.7-3.7-0.4-2.3-1.9-2.1-3.7-3.1 0.3-5.6-1.8-2-1.3-7.5-1-2.2-1.3 1.7-1.6-5.6-0.4-3.3 3.4-2.3 0.1-0.5 1.6-2.7 0.7-2.5-0.6 2.6-2 0.7-2.4 2.3-1.4 2.6-1.3 4.1-0.6 1.2-0.7 5 0.4 4.4 0.1 5.7 2.2z" id="CU" name="Cuba">\n </path>\n <path d="M327.5 177.4l0.8 2.1 3.3 0.5-1.7 1.7 1.8 1.3 1.9-1.6 2.9 0.7-1 2 3.5 0.4 0 3.1-1.5 0-1.6 1.1-1.3 0.3-1.4 1.4-1.1 0.3-0.6 0.6-2.2 0.6-2.1-0.1-1.7 1.4-1.5-1.2-2.6 0.4-2.5-2-2.1 0.5-4.7 2.6-2.3-2-0.8-2.8-1.4-1.5 1.5-2.6 0.5-1.9 4.7-1.4 3.1-1.5 4.5-1.2 2.2-1.2 0.7 0.7 2.7-0.7z" id="CZ" name="Czech Republic">\n </path>\n <path d="M336.7 160.9l-1.6 3.2-2.7 1.7-0.1 2.2-1.5 3.3-2.1 2.1-1.2 4-2.7 0.7-0.7-0.7-2.2 1.2-4.5 1.2-3.1 1.5-4.7 1.4-0.5 1.9-1.5 2.6 1.4 1.5 0.8 2.8-3.8 2.9-2.4 0.8-2.2 4.1-1.3 1.1-0.6-1.3-2.3-0.2-4.4 1.1-4.3-0.2-1.9 1.6-1.3-1.7-1.8 0.3-4-1.9-2.1 1.4-4.3-0.1 4-4.5 5.8-4.3-6.3-1.2-1.1-1.6 2.4-2.8 0.2-1.4 4-4.3 4.7-6.5 3 0 3.2-2.4 6.2-5.7 1-2.1 2.1-1.3 4.4-0.3-0.3 1.4 6-3.1 1-2.3 2.9-3.5 2.9 0.8 4-0.9-2.1 2.4 3.6 1.4-2 2.2 5.9-1.2 4.2-1.7 3.3 2.5 0.6 1.9z" id="DE" name="Germany">\n </path>\n <path d="M382.5 437.2l-1.1-1.1-1.4 0.4-3.2-0.1 0.1-2-0.3-1.8 2.2-3 2.3-2.9 2.4 0.6 1.9-1.6 1.1 2-0.4 2.7-3.4 1.6 2.2 1.7-2.4 3.5z" id="DJ" name="Djibouti">\n </path>\n <path d="M339.9 149.5l-7.4 5-1.8-3.5 1.6-2.5 8.9-2-1.3 3z m-16.7 3.9l-4 0.9-2.9-0.8 1.3-3.4 5.7-6.2 2.4-1.7 3.1-1.8 4.5-0.4 3.3-1.6 5.4-1.8-3.1 3.2-3.3 1.9-1.1 1.7 1.7 1-3.3 2.3-0.8-0.7-7.5 4.4-1.4 3z" id="DK" name="Denmark">\n </path>\n <path d="M1777.7 390.9l-0.2-1.7-1.8-2 1.1-1.1-0.1-2.5-1.2-3.5 0.5-1.1 4.4 0 3.7 1.7 1.5-0.2 1.5 2.3 3-0.1 0.2 1.9 2.6 0.2 3.3 2.4-1.6 2.7-3-1.4-2.5 0.2-1.9-0.3-0.8 1.2-2.1 0.4-1.2-1.6-1.7 1-1.3 4.4-1.7-1-0.7-1.9z" id="DO" name="Dominican Republic">\n </path>\n <path d="M234.7 268l-2.7 3.4-2.3 6.2-3.8 5.3-5.1 3.6-1.7 4.9 2.7 3.9-0.6 1.6 2.2 2.6-2.4 11.7-0.4 5.7-0.7 3-2.8 5.4-0.6 2.9-1.9 3.6-0.7 4.1-3.1 2.7 2 4.7-0.5 2.8 1 3.6 2.9-1.2 3.7 3.1 1.5 4-22 12.4-19.1 12.8-8.6 2.9-6.4 0.6 0.9-4.1-2.4-1.1-3.1-1.8-0.7-3.1-15.7-14.2-15.1-14.1-15.8-15.8 0.6-1.2 0.1-0.5 2.9-7.7 10.9-4.8 5.9-1 5.3-1.7 3.5-3.3 7.5-2.6 2.4-4.8 3.4-0.5 3.6-2.4 7.6-1.1 2.2-2.6-0.8-1.3 1.5-6.9 1.6-4 0.1-4.1 7-3.6 6.5-1.1 4.8-2.7 6.2-2 9.7-1.1 9.2-0.5 2.2 0.9 6.4-2.5 5.8-0.1 1.4 1.5 3.8-0.4z" id="DZ" name="Algeria">\n </path>\n <path d="M1768.3 509.3l0.7 4.9-1.8 4.2-6.5 6.8-7 2.6-3.8 5.7-1.3 4.3-3.4 2.7-2.2-3.3-2.3-0.7-2.4 0.5 0-2.3 1.7-1.6-0.6-2.7 3.3-4.9-1.2-2.8-2.3 3-3.3-2.8 1.2-1.9-0.8-5.9 2-0.9 1.1-4.1 2.2-4.2-0.5-2.6 3.2-1.4 3.9-2.6 5.8 3.7 1-0.1 1.5 2.8 4.9 0.9 1.6-1 2.8 2.1 2.5 1.6z" id="EC" name="Ecuador">\n </path>\n <path d="M359.5 305.3l0 9.4 0 1.7-2.3 2.6-2.6 5-2.4 3.3-1.6 1.2-1.3-2.1-1.7-2.9-1.2-9.3-0.7 0.5 0.2 6.9 1.6 6.5 1.6 10.2 1.2 3.5 1 3.7 3.5 7.2-1.4 1.1-0.6 4.2 5.5 5.9 0.7 1.3-22.3 0-21.8 0-22.6 0 5.3-23.9 6.6-23.2 0.1-5.2 2.8-4 0.1-2.8 3.1-3.1 7.3-0.1 4.7 1.7 4.8 1.9 2.2 1 4.9-2 2.9-1.9 5.1-0.5 3.6 0.8 0.4 3.2 2-2.1 3.9 1.5 4.1 0.4 3.3-1.6z" id="EG" name="Egypt">\n </path>\n <path d="M385.4 425.7l-1.9 1.6-2.4-0.6-1.7-2.1-2-3.8-2.2-2.1-1.3-2.2-4.6-2.7-3.9 0-1.2-1.4-3.5 1.5-3.1-2.9-2.4 4.8-6.4-1.3-0.3-2.6 3.8-9.6 1.2-4.3 2.1-2 4.4-1.1 3.4-3.7 2.1 7.6 0.7 5.9 2.7 3.2 7 6.1 2.7 3.7 2.6 3.8 1.6 2.2 2.6 2z" id="ER" name="Eritrea">\n </path>\n <path d="M419 138.2l-3.9 0-2.1-2.3-1.4-0.7-4.9 1.1 3.7-3.6-2.4 0.8-1.1-2.2 2.7-3.4 7.4-1.7 6.6-0.9 4.1 1 4.9-0.1-0.2 1-6.3 3.5-3.5 5.6-3.6 1.9z" id="EE" name="Estonia">\n </path>\n <path d="M365.4 413.8l3.9 0 4.6 2.7 1.3 2.2 2.2 2.1 2 3.8 1.7 2.1-2.3 2.9-2.2 3 0.3 1.8-0.1 2 3.2 0.1 1.4-0.4 1.1 1.1-1.4 2.3 1.8 3.6 1.9 3.1 2 2.3 18.2 7.8 4.8-0.1-17.2 19.5-7.5 0.3-5.3 4.6-3.7 0.1-1.6 2.1-3.9 0-2.3-2.2-5.3 2.7-1.8 2.7-3.8-0.5-1.3-0.7-1.3 0.1-1.8 0-7.1-5.6-4 0-1.8-2.1 0.2-3.6-3-1.1-3-7.1-2.5-1.5-0.8-2.6-2.7-3.2-3.5-0.5 2.2-3.7 3-0.1 1-2 0.4-5.1 0-0.8 2.3-6.8 2.9-1.8 0.8-2.6 2.9-5 3.8-3.2 3.1-6.4 1.6-5.6 6.4 1.3 2.4-4.8 3.1 2.9 3.5-1.5 1.2 1.4z" id="ET" name="Ethiopia">\n </path>\n <path d="M488.4 71l-4.6 3.9 2.6 3.7-8.2 4.2-1.4 6.4-7.6 4.9-0.2 4.3-5.3 3.7 2.9 4-4.4 3-7.2 3.4-16.6 7.5-8.7 0.5-10 2.2-8.6 1.2 0.3-3.2-2.5-2 6.6-5.8 2.9-5.3 5.5-3.3 7.7-3.7 16.3-6.2 4.1-1.2 2-2.4-3.3-2.7 0.8-2.2 9-8.6-2.4-3.8-2.6-2.7 4.2-1.5 1.4 2.9 5.7-0.2 3.1 1.3 6.6-2.4 6.4-4 8.5-1.9 2.9 2.2-5.9 3.8z" id="FI" name="Finland">\n </path>\n <path d="M208.9 493.5l-0.5 2.9 1.5 3.3 4.3-0.5 1.4 1.3-2.6 7.5 2.8 3.9 0.7 5-0.7 4.4-1.6 3-5.1-0.2-3.2-3.2-0.3 2.9-3.9 0.8-1.9 1.7 2.4 4.3-4.2 3.5-6.2-6.5-4-5.4-3.7-6.7 0.2-2.2 1.2-2 1.4-4.8 1.2-4.8 1.9-0.4 8.4 0.1 0.1-7.8 2.8-0.5 3.4 0.9 3.5-0.8 0.7 0.3z" id="GA" name="Gabon">\n </path>\n <path d="M238.9 160.3l-2.4-1.3-3 0.1 4.3-3.3 2.4-3.3 4.3-0.3 1.2 3.8-6.8 4.3z m45.4-29.1l-12 6.5 5.6-0.8 5.1 0-6.4 5-9.9 5.4 4.6 0.4-0.3 0.7-2.9 7.2 2.3 1-3.7 7-0.9 2.5 4.8 1.2-4.2 3.9-4.1 1.9-0.9 3.2-7.3 3.3-6.6-0.1-9.9 1.7-1.2-1.2-5.9 2.9-4-0.7-5.5 2.4-1.6-1.2 13.1-6.6 5.6-1.4-6.7-1 0.9-2.5 6.9-1.9 0.5-3.4 4.8-4 6.7 0.5 4.2-3.6 0.5-3.8-4.8-1.1 0.6-1.7 4.5-2.7 0.2-1.7-5.6 2.9 5.8-5.9 0.9-3.1 8.5-6.3 8.9-4.9 3.2 0.5 6.2-0.5z" id="GB" name="United Kingdom">\n </path>\n <path d="M452.1 236.3l-1.8 0.8 1 3.5-1.1 0.8-2.6-0.4-3.1-1.8-1.8 1-7.8 1-3.5-3.2-5.8 0.4 2.1-2.8 0.9-4.4-1.8-2.4-2.5-0.7-0.9-2 1-0.7 3.8 1.1 7.1 1 5.6 3.1 0.3 1.2 3.7-1 4.2 1.3 0.4 2.7 2.6 1.5z" id="GE" name="Georgia">\n </path>\n <path d="M138.4 436.6l-0.7 2 2 3.4-0.5 4.7 0 5.1 1.2 2.4-1.7 5.9 0.2 3.2 1.2 4.1 1.1 2.3-9.2 3.8-3.4 2.2-5.3 1.9-5-1.8 0.5-2.6-2.1-5.6 2.1-7.3 2.8-5.5-0.5-9.2-0.3-4.9 0.6-3.7 10-0.3 2.4 0.4 2-1 2.6 0.5z" id="GH" name="Ghana">\n </path>\n <path d="M73.8 427.4l0 2.3 0.9 0 1.6-0.8 0.9 0.2 1.3 1.6 2.4 0.5 1.8-1.4 2-0.8 1.5-0.9 1.1 0.1 1 1.5 0.5 1.8 1.9 2.7-1.4 1.6-0.5 2.2 1.3-0.7 0.6 0.8-0.5 1.9 1.5 1.9-1.2 0.5-0.7 2.2 1 2.7 0.9 5.2-2.2 0.8-0.6 0.9 0.3 1.2-0.6 2.9-0.9 0-1.6-0.2-1.4 2.6-1.6 0-1-1.4 0.6-2.6-2-4-1.6 0.8-1.2 0.1-1.6 0.4 0.3-2.4-0.8-1.7 0.4-1.9-0.9-2.7-1.3-2.4-4.6 0-1.5 1.3-1.6 0.1-1.1 1.4-0.9 1.8-3.4 2.9-2-3.9-2-2.5-1.3-0.9-1.3-1.3-0.3-2.8-0.6-1.5-1.6-1 3-3.2 1.7 0.1 1.7-1.1 1.2 0 1.1-0.8-0.2-2.2 0.7-0.7 0.5-2.2 2.7 0.1 3.9 1.6 1.2-0.2 0.6-0.7 3 0.5 0.9-0.3z" id="GN" name="Guinea">\n </path>\n <path d="M44.2 422.7l1.2-2.8 6.2-0.2 1.6-1.6 1.8-0.1 2 1.6 1.7 0.1 2.1-1.1 0.8 1.8-2.7 1.5-2.4-0.1-2.3-1.4-2.3 1.5-1.1 0.1-1.5 0.9-5.1-0.2z" id="GM" name="The Gambia">\n </path>\n <path d="M61.5 426.4l-0.5 2.2-0.7 0.7 0.2 2.2-1.1 0.8-1.2 0-1.7 1.1-1.7-0.1-3 3.2-2.6-2.7-2.4-0.5-1-1.8 0.2-1-1.6-1.4-0.1-1.4 3.2-1 1.8 0.2 1.7-0.8 10.5 0.3z" id="GW" name="Guinea-Bissau">\n </path>\n <path d="M198.5 493.6l-0.1 7.8-8.4-0.1-1.9 0.4-1.1-1 2.2-7.3 9.3 0.2z" id="GQ" name="Equatorial Guinea">\n </path>\n <path d="M313.2 276.1l2 2.2 4.3-0.4 3.9 0.5-0.6 1.1 3.2-0.8-1.4 1.9-8.1 0.6 0.5-1.1-6-1.3 2.2-2.7z m28.6-33.2l-3.1-0.1-2.5-0.7-7.3 1.7 1.8 3.7-3.3 1-2.9 0-1-3.3-1.8 1.4-0.9 3.9 1.1 3-2.7 1.4 1.5 3 1.7 1.9-1.6 3.6-4.2-1.7 0 3.3-3.7 0.7-0.6 5.7-3.6 0.1-3.1-2.8 0.4-5.2 1.2-4.3-0.6-3-0.8-3.7 0.6-1.8 4.2-3.2 1.4-2.1 2.2-0.9 1.1-1.7 3.8-0.6 2.7-1.4 2.8 0.2 1.5-1.2 1.1-0.2 3.8 0.2 5.2-1.8 2.5 2.3 5.1-0.6 1.8-3.2 1.6 1.7-3.8 4-1.6 0.7z" id="GR" name="Greece">\n </path>\n <path d="M1613.8 6.3l-6.2 0.1 3.6 0.7 4.3-0.1 138 68.8-2.1 0.4-4.6 0-1.2 2.2 2.9 5.9-3.6 3.9-2.7 0.3-3.8 1.4-4.4 1.3 1.1 3.5 5.4 4.1 2.8 3.8-1.2 4.6 7.6 4.6 4.1 4.9 4.8 5.7-6 0.4-12.6-4.8-9.2-0.1-8.3-3.2-9.9-5.7-16.6-7.3-7-3.7-7-5.2-12.7-5.2-3.9-4.2-5.4-2-4.4-6.5 3.5-2-1.6-2.3-5.1-4.3-2 1.9-1.2 0.8-2.6 0.8-7.6-1.8-5.4-3.6-2.5-2.9 3.7-0.1 10.4 1.4-12-3.4-6.3-1.8-2.9 0.8-5.4-1.4-2.9-4.9-5.4-1.9-8.8-3.6-13.6-5.5-8.3-2-3.6-2.1-15.4-2.9-8.7-0.4-9.8 0.2-8.6 0.4-7.1-1.6-11.8-3.1 7.2-1.5 7.1-0.3-18.2-1.2-11.7-2-2.7-1.8 9.8-2.3 9.1-2.2-1.8-1.6-12.7-1.6-0.3-1.7 6.2-3 4.2-0.4-5.3-1.9 5.9-1 9.3-0.6 10.5-0.1 6.5 1.3 4.2-2.2 11.6 1.5 5.6 0.3 10.2 1.3-13.3-2.2-3.5-1.6 5.9-2.3 12.3 0.2 0.9-1.4 10.9-0.3 17.9 0.3 13.4 5z" id="GL" name="Greenland">\n </path>\n <path d="M1679.3 392.5l0.9 5.1 0.7 7.4 1.7 0 2 1.1 0.4-0.9 1.7 0.8-2.2 2.5-2.4 1.8-0.2 1.2 0.6 1.3-0.9 1.7-1.3 0.4 0.4 0.7-1 0.8-1.7 1.6-0.1 0.9-3-1.1-3.6-0.1-2.8-1.3-3.4-2.7-0.1-1.9 0.4-1.5-0.9-1.2 1.9-5.3 7.3 0-0.2-2.2-1-0.4-0.9-1.4-2.3-1.6-2.5-2.1 2.6 0-0.6-3.7 5.3 0 5.2 0.1z" id="GT" name="Guatemala">\n </path>\n <path d="M1871.3 469.4l-0.5 5.9-3.4 1.7 0.4 1.5-0.9 3.4 2.8 4.7 1.9 0 0.9 3.7 3.7 5.6-1.4 0.2-3.2-0.5-1.8 1.7-2.5 1.2-1.8 0.2-0.6 1.3-2.9-0.3-3.6-3.1-0.5-3-1.6-3.2 0.6-5.6 1.5-2.3-1.5-3-2-1 0.6-2.8-1.5-1.5-2.9 0.3-4.2-5 1.4-1.8-0.4-3 3.5-1 1.3-1.2-2.1-2.5 0.3-2.3 4.2-3.8 3.9 2.3 3.9 4.3 0.5 3.3 2.1 0.2 3.4 3.2 2.4 2.2z" id="GY" name="Guyana">\n </path>\n <path d="M1716.3 410.8l-1.9-0.2-0.7 0.9-1.8 0.9-1.5 0-1.1 0.8-1.2-0.3-1.1-1-0.6 0.2-0.5 1.5-0.5 0 0.1 1.3-1.8 1.8-0.9 0.8-0.5 0.8-1.8-1.3-1 1.7-1.2 0-1.4 0.1 0.6 3.2-0.9 0.1-0.5 1.5-1.7 0.2-1.3-2-1.8-0.6 0.1-2.6-0.9-0.7-1.2-0.4-2.4 0.7-0.3-0.8-1.9-1.1-1.4-1.3-1.7-0.5 0.9-1.7-0.6-1.3 0.2-1.2 2.4-1.8 2.2-2.5 0.7 0.2 1-1.1 1.7-0.1 0.6 0.5 0.8-0.3 2.7 0.6 2.6-0.2 1.7-0.7 0.6-0.7 1.9 0.3 1.4 0.5 1.4-0.2 1.1-0.6 2.7 1 0.9 0.1 2 1.2 1.8 1.5 2.3 1 1.7 1.8z" id="HN" name="Honduras">\n </path>\n <path d="M323.6 210.3l-0.4 2.5 0.5 1.8-3.5 2.4-1.4-1.4-3.6 0.1-3.8-1.1-2.5 0.2-1.9 1.3-0.9-1.5-2.8 2.7 0.6 3-0.2 1.9 0.9 2.4 1.1 1.5 0.3 2.6 3.1 2.5-1.2 1.1-3.5-2.4-1.6-2.3-3.5-1.9-1.4-4.7 1.4-0.5-0.6-2.7 1.3-2.2-2.7-1-3.4 2.8-0.1-2.2 1.6-2.2 0.2-0.1 3.5 0.2 1.6-1 1.1 1 1.9 0.1 1.2-1.8 2.2-0.6 2.2-2.6 5.2-1.7 1.1 0.8 2 2.7 3.4 1.3 2.6-1z" id="HR" name="Croatia">\n </path>\n <path d="M1775.5 380.1l1.2 3.5 0.1 2.5-1.1 1.1 1.8 2 0.2 1.7-3.9-1.1-2.6 0.5-3.6-0.5-2.4 1.2-3.4-2 0.1-2.1 5.4 0.9 4.3 0.5 1.8-1.4-3.2-2.8-0.4-2.5-3.8-1 0.9-1.8 3.5 0.2 5.1 1.1z" id="HT" name="Haiti">\n </path>\n <path d="M350.5 194.3l1.7 1.8-0.8 1.7-3.9 1.3-5.2 4.3-5.9 4.3-4.8 1.2-3-0.3-5 1.7-2.6 1-3.4-1.3-2-2.7-1.1-0.8 0.4-2.1-0.8-0.1 4.4-4.1 0-1.4 2.8 0 2.2-2.6 1.5 1.7 1.4 0.6 4.7-0.7 1.3-1.3 2.1-0.2 3.2-1 0.2 0.4 2.9-0.8 2.2-1.5 1.9-0.3 4.1 1.9 1.5-0.7z" id="HU" name="Hungary">\n </path>\n <path d="M827.7 574.9l-2.5 0.1-7.6-4.6 5.3-1.3 3 2 2.1 2-0.3 1.8z m24.1-8.8l0.6 1.3 0.1 1.9-3.6 4.9-4.9 1.4-0.7-0.7 0.5-2.3 2.4-3.9 5.6-2.6z m-40.5-5.2l2.1 1.7 3.5-0.5 1.5 2.8-6.6 1.3-4 0.9-3.1-0.1 1.9-3.7 3.2-0.1 1.5-2.3z m28.6 0l-0.8 3.6-8.5 1.9-7.7-0.8 0-2.4 4.5-1.4 3.6 2 3.8-0.5 5.1-2.4z m-82-8.6l11 0.7 1.2-2.7 10.7 3.1 2.2 4.3 8.6 1.1 7.1 3.9-6.4 2.5-6.4-2.6-5.2 0.1-5.9-0.4-5.4-1.2-6.7-2.5-4.2-0.6-2.4 0.8-10.5-2.7-1.1-2.8-5.2-0.5 3.8-6.2 7 0.4 4.6 2.5 2.4 0.5 0.8 2.3z m149.6-3.6l-2.9 4.4-0.6-4.9 1-2.3 1.2-2.2 1.3 1.9 0 3.1z m-43-17.9l-2.2 2.1-3.9-1.2-1.2-2.8 5.8-0.3 1.5 2.2z m18.4-2.4l2.2 5-4.9-2.7-4.8-0.6-3.2 0.5-4-0.3 1.3-3.5 7.1-0.3 6.3 1.9z m60.5-3.2l0.1 21.2 0.2 21.2-5.1-5.4-5.8-1.3-1.4 1.9-7.3 0.2 2.4-5.3 3.6-1.8-1.5-7.1-2.8-5.5-11.1-5.5-4.8-0.5-8.6-6-1.7 3.1-2.2 0.6-1.3-2.4 0-2.8-4.5-3.2 6.2-2.3 4.1 0.1-0.5-1.7-8.4 0-2.3-3.9-5.1-1.2-2.4-3.2 7.7-1.6 2.9-2.1 9.3 2.6 0.9 2.5 1.6 10.5 6 3.9 4.7-6.9 6.6-4 5.1 0 4.9 2.3 4.3 2.3 6.2 1.3z m-90.5-26.2l-4.7 6.5-4.3 1.2-5.5-1.2-9.6 0.3-5 0.9-0.8 4.9 5.1 5.8 3.1-2.9 10.7-2.2-0.4 3-2.5-1-2.5 3.8-5.1 2.6 5.5 8.3-1 2.2 5.2 7.5 0 4.3-3 1.9-2.3-2.3 2.7-5.3-5.6 2.5-1.4-1.8 0.7-2.5-4.2-3.8 0.4-6.3-3.8 1.9 0.5 7.6 0.4 9.3-3.6 1-2.5-1.9 1.5-6-0.9-6.3-2.4-0.1-1.9-4.4 2.4-4.3 0.8-5.1 2.8-9.8 1.2-2.7 4.9-4.8 4.5 1.9 7.3 0.9 6.6-0.3 5.7-4.7 1 1.4z m19.7 1.9l-0.3 5.7-2.9-0.7-0.9 4 2.4 3.4-1.6 0.8-2.4-4.1-1.7-8.3 1.2-5.2 1.9-2.4 0.4 3.6 3.4 0.5 0.5 2.7z m-109.2-5.7l1 4.4 3.9 3.6 3.7-1.3 3.6 0.5 3.4-3.3 2.8-0.6 5.4 1.8 4.7-1.3 3-9.1 2.2-2.2 2.1-7.4 6.6 0 5 1.1-3.4 5.8 4.2 6.2-1 3 6.4 6-6.8 0.8-2 4.4 0.3 5.9-5.5 4.4-0.1 6.5-2.1 10-0.9-2.4-6.5 3-2.3-4-4.1-0.4-2.9-2.1-6.8 2.4-2.1-3.2-3.8 0.4-4.7-0.8-1-8.7-2.8-1.8-2.8-5.5-0.8-5.7 0.7-6.1 3.4-4.3z m-21.7 51.1l-6.3 0.2-4.9-5.5-7.5-5.3-2.5-3.9-4.5-5.3-2.9-4.9-4.4-9.1-5.1-5.4-1.6-5.6-2.1-5.1-5.1-4.1-2.9-5.5-4.3-3.7-5.8-7.2-0.5-3.3 3.7 0.3 8.9 1.3 4.9 6.3 4.4 4.4 3.1 2.7 5.3 7 5.9 0.1 4.7 4.5 3.3 5.4 4.4 3-2.3 5.3 3.3 2.3 2.1 0.1 1 4.6 2 3.6 4.2 0.6 2.9 4.1-1.3 8.1-0.1 10z" id="ID" name="Indonesia">\n </path>\n <path d="M615.4 312l-4 2.9-3.3 6.1 5 2.5 4.7 3.2 6.7 3.6 7.4 0.9 2.8 3.3 4.2 0.6 6.5 1.5 4.6-0.1 1-2.6-0.1-4.1 0.8-2.8 3.6-1.4-0.3 5.1-0.1 1.3 4.8 2.5 3.6-1 4.6 0.4 4.6-0.2 0.9-4-2-2 4.6-0.8 5.7-4.9 7-4.1 4.4 1.6 4.3-2.8 2.1 4.1-2.3 2.7 5.9 1 0.1 2.5-2.1 1.1 0 4-3.9-1.1-7.7 4.5-0.3 3.7-3.6 5.4-0.6 3.2-3.1 5.4-4.2-1.5-0.9 6.7-1.4 2.2 0.3 2.8-2.9 1.5-2-10.3-1.6 0-1.3 4.2-2.7-3.4 2.1-3.7 2.5-0.3 3.2-5.6-3.1-1.1-5.2 0.1-5.2-0.9 0-4.5-2.6-0.3-4-2.8-2.6 4.4 3.6 3.4-3.7 2.5-1.5 2.3 3.2 1.8-1.4 3.9 1.5 4.9 0.3 5.3-1 2.4-3.8-0.1-7.1 1.4-0.1 4.9-3.4 3.8-8.5 4.4-7.1 7.7-4.6 4.1-6.1 4.2-0.3 3-2.9 1.6-5.4 2.3-2.6 0.4-2.2 4.9 0.5 8.5 0 5.4-2.9 6.2-0.6 11-3 0.3-2.9 5 1.7 2.1-5.3 1.9-2.2 4.4-2.4 1.9-5.1-6.1-2.2-9.1-1.8-6.6-1.8-3-2.6-6.3-0.8-8.1-0.6-4.1-4.3-8.9-1.1-12.6-0.7-8.3 0.9-7.9-0.4-6.1-8.7 3.9-3.8-0.8-6.4-7.9 3-2.3-1.3-2.6-5.9-5.5 4.4-4.3 12.3 0-0.3-5.6-2.6-3.3 0.2-5-3.2-2.9 7.4-6.8 6.4 0.5 7-6.9 4.8-6.6 6.7-6.5 1-4.6 5.5-3.8-3.7-3.2-0.8-4.4-0.5-5.7 3.3-2.8 7.9 1.6 6.2-1 6.6-5.4 4 7.6-1.8 5.3 1.4 3.3-0.9 3.3-3.7-0.8 0 7.1 4.6 4.1 6.7 4.6z" id="IN" name="India">\n </path>\n <path d="M238.9 160.3l-3.5 4.4-9 5.5-12.2 3.7-6.1-0.9 10.3-6.5 3.7-6.3 11.5-4.9 6.6-2.8-2.4 3.3-4.3 3.3 3-0.1 2.4 1.3z" id="IE" name="Ireland">\n </path>\n <path d="M441.9 256.4l2-0.2 8.2-4.8 2.2-0.4 0.8 1.9-3.1 3.2 2 3.3 1.4-0.3-0.1 4.8 4.5 1.4 2.6 3.2 7.2 1.1 9-1.7 1.1-1.5 5.1-1.3 5.1-3.7 3.6 0.2 2.7-1.2 3.6 0.6 4.8 3.3 4 0.7 4.3 5.7 3.9 0.3-1.2 5.4-4.7 8.1-2.8 4.8 2.1 0.9-3.4 3.6 0.4 5.2-0.7 4.1 3.9 1.1-0.6 4.2-6.4 5.9 1.9 3.4 1.3 3.9 4.7 2.9-1 5.7 2.4 1.1-0.1 3-8.6 3.3-3.5 7.6-10.1-2-5.9-1.5-6.1-0.8-0.8-8-2.4-1.1-4.5 1.1-6.3 3.2-6.4-2.2-4.5-5-4.9-1.8-2.2-6.2-1.8-8.7-3.3 1.1-2.9-2.2-2.8 2.6-2.1-3.5 1-3.4-1.8 0 2.3-4.7-1.3-5-5.5-3.5-1.7-6.2 3-5.1 3.5-2.2 0.9-3.8-2.8-2-0.6-7.7-0.9-5.2 1.9-2 1.4-7.4 4.5-1.9-0.2 2.5 1.4 2.9 3.3 0.9z" id="IR" name="Iran">\n </path>\n <path d="M430.5 266.6l0.6 7.7 2.8 2-0.9 3.8-3.5 2.2-3 5.1 1.7 6.2 5.5 3.5 1.3 5-2.3 4.7 1.8 0-1 3.4 2.1 3.5-3.1-0.4-3.6-0.5-5.7 6.2-10.2-0.5-11.7-13.1-6.7-4.5-6.1-1.8 0.6-7.9 14.4-6.8 5-7.8 1.3-4.8 3.5-1.6 4.4-4 2.7-1 5.9 0.8 1.2 1.7 3-1.1z" id="IQ" name="Iraq">\n </path>\n <path d="M288.3 85.5l-5.9 3.7-0.3 3.9-11.4 4.4-17.9 3.9-5.2 1.1-4.7-0.9-9.9-1.8 7.8-2.6-5.7-2.8 9.3-1.1 2.1-1.6-7.2-1.4 8.2-3.7 7.7-0.8 1.3 3.8 10.8-3 3.3 1.6 11.1-3.1 6.6 0.4z" id="IS" name="Iceland">\n </path>\n <path d="M372.6 291.9l-0.8 2.6-1.1 1 0.1 0.1-1.7 2-1.7-0.9-2.6 4.3 1.1 0.8-1.7 0.9-0.8 1.7 2.9-0.9-0.7 2.5-6.1 10.4 0-1.7 0-9.4 2.3-2.2-0.3-0.4 2.5-3 2.9-4.9 1.3-1.7 0.2 0 1.8 0 0.9-1.1 1.5-0.1z" id="IL" name="Israel">\n </path>\n <path d="M277.1 259.7l-4.6 5.1-0.2 2-2.7 3.3-2.9-2.4-2.4-0.7-5.8-3.3 2.5-3.3 5.9 0.6 5.8-0.7 4.4-0.6z m-22.6-19.3l0.4 4.6-5.7 8.6-2.2-0.4-3.4 2.1-1-1.7 4.3-7.8 1-3.7 2.7 0.3 3.9-2z m45.9-33.9l-2.7 3.1-0.5 2.7-3.5-0.9-5.7 2.3-1.8 3.1-1.8 1.9-0.5 3.2 2.8 3.3-0.8 5.3 2.7 5.1 4.1 0 0.4 1.4-2.2 1.3 3.3 2.3 2.8 2 2.6 3.4-0.1 1.2-2.3 2.3-1.3-3-4-1.1-4.5 4.2 2.5 2.4-2.4 3.4-2.4 0.3-5.8 5.6-2.4 0.5 1-2 2.9-3.5 1.9-1.3-0.1-3.8 0.2-3.3-1.7-0.8 0-2.7-2.7-1.2-0.7-2.6-3.7-0.4-2.3-2.9-2.2-4.2-1.2-3.7 2.5-6.4-2.1-0.7-2.7-2.1-3 0.8-5 3-2.5 0.5 2.5-2.8-2.3-0.8 2.1-5 3.1-1.9 0.2-2.4 1.5-1.8 1.2 1.3 2.7-0.3 4.4-2.1 0.2 1 2.5-0.2 2.9-2.6 3.2 0.8 3-1.1 2.3-2.6 2.4 0.9 1.4-1.2 5.8-1.1-0.4 2.2 6.2 1.7z" id="IT" name="Italy">\n </path>\n <path d="M1748.6 392.1l-1.6 1.1-3.3-1.1-3.7-2.4 0.4-1.4 2.3-0.5 1.3 0.2 3.9 0.6 3.3 1.6 1.3 1.8-3.9 0.1z" id="JM" name="Jamaica">\n </path>\n <path d="M388.5 299.1l-1.3 1-12.1 3.3 3.4 6.5-2.2 1.1-1.5 2.2-4.5 0.9-2 2.3-3 2-5.9-1 0.1-1 6.1-10.4 0.7-2.5 1.4-1.9 1.4-4 1.7-2 5.2 2.5 13.1-6.9-0.6 7.9z" id="JO" name="Jordan">\n </path>\n <path d="M911.6 286.2l0.6 2.2-3.3 4-2.1-2.1-2.9 1.5-1.6 3.8-3.5-1.9 0.2-3 3.2-3.9 3.1 0.7 2.4-2.7 3.9 1.4z m35-19.4l-2.2 5.1 0.9 3.3-3 4.6-7 3-9.6 0.4-8.1 7.4-3.5-2.5 0-4.8-9.5 1.4-6.6 3.1-6.4 0.1 5.3 4.8-4.3 11-3.7 2.8-2.5-2.5 1.7-5.9-3.4-1.9-1.9-4.5 5.3-2 3.1-4 5.7-3.4 4.2-4.4 10.9-2 5.7 1.3 6.2-11.5 3.4 3.1 8.1-6.5 3.2-2.5 3.6-7.9-0.6-7.3 2.4-4.1 5.7-1.1 2.5 8.9-0.3 5.3-5.1 6.5-0.2 6.7z m16.9-45.4l3.6 1.4 3.8-2.8 1 7.2-7.8 1.8-4.8 6.4-8-4.4-3.2 7-5.8 0.1-0.4-6.4 2.8-4.9 5.5-0.4 1.9-8.8 1.7-5 5.8 6.6 3.9 2.2z" id="JP" name="Japan">\n </path>\n <path d="M681.1 189.3l-5.2 4.2-4.4 0.6-2.4 6.4-3.7 2.9-9.4-2.1-7.5 11.4-3.1 1.4-11 2.5 1 11.2-4.1 1.6-0.8 3.7-2.9-0.9-1.9-2.3-7.5-0.7-8.6-0.2-2.1 0.7-6.5-2.7-3.4 1.3-2.2 3.8-7.8-2.2-3.7 0.9-2.2 2.8-3.4 1.2-8.5 4.5-4 4.6-2 0.1-0.3-3.1-6.6-0.2 0.8-5.3-2.5 0 2.9-6.5-4.4-4.6-9.1 0.5-6.5 0.9-2.5-5.8-3.2-2.4-6-4.6-0.7-0.5-14.9 3.7-10.1 23.7-2.8 0.3-1.6-5-2.7-1.8-6.5 1.3-3.3 2.2 0.4-1.6 2.5-2.7 0-2.2-5.1-2.2 0.4-5.8-2.1-1.6 0.8-2.1 4.7 0.6 2.4-4.7 4.9-1 4 1 3.9-6.3 1-3.9-5.3 0.3-3.5-1.6-7.3 2.8-5.4 1.4-2.1-1 2.2-3.3-1.1-4.3-3.8 0.2-2-4.3 5.5-4.8-0.7-1.3 7.9-6.9 3 3.7 3.3-4.6 14.1-6.8 7.8-0.2 8.4 4.3 4.5 2.6 6.7-2.7 7.9-0.1 4.7 3.3 2.4-1.9 6.8 0.3 2.8-3-5.8-4.3 6.4-3 0-1.7 5.6-1.6-1.2-4.3 3.4-2.1 19.3-2.1 3.1-1.6 13.3-2.2 5.7-2.6 7.9 1.3-1.8 6.4 5.8-1.5 5.2 2.1-2.1 3.4 4.9-0.4 14.8-5.8-2.6 2 3.9 4.7 4.2 15.9 4-3.3 5.4 3.6 7.7-1.6 2.3 1.1 1 3.6 3.1 1.2 1.1 2.7 6.8-0.8 1.3 3.8z" id="KZ" name="Kazakhstan">\n </path>\n <path d="M374.5 482.8l-5.3 7.4-0.2 23.6 3.5 5.4-4 2.6-1.3 2.7-2.2 0.5-0.6 4.6-1.8 2.6-0.9 4.3-2.2 2.2-8.5-6.5-0.6-3.8-21.1-13.2 0.3-4.9-1.4-2.4 0-0.3 1.6-2.7 2.9-4.3 2.2-4.7-2.3-7.5-0.5-3.3-2.6-4.5 3.7-3.9 4.1-4.2 3 1.1-0.2 3.6 1.8 2.1 4 0 7.1 5.6 1.8 0 1.3-0.1 1.3 0.7 3.8 0.5 1.8-2.7 5.3-2.7 2.3 2.2 3.9 0z" id="KE" name="Kenya">\n </path>\n <path d="M630.5 233.1l-1.2 1.5-9.4 3.5-2.6 2.5-7 0.8-3.3 4.1-5.3-0.9-4.1 1.3-6 3 0.3 1.6-2 1.4-10.4 1-5.8-2.1-6 0.5 1.8-3.7 5.4 1.1 2.6-2 3.8 0.6 8.3-4.6-5.1-3.4-4.3 1.6-3-2.4 5.8-4.2-1.3-0.7 2.2-2.8 3.7-0.9 7.8 2.2 2.2-3.8 3.4-1.3 6.5 2.7 2.1-0.7 8.6 0.2 7.5 0.7 1.9 2.3 2.9 0.9z" id="KG" name="Kyrgyzstan">\n </path>\n <path d="M752.5 415.9l1.1 4.3-1.1 7.8-9.7 5 2.3 4-6 0.5-5 2.6-4.8-1-2.2-3.4-2.6-6.7-1-7.8 4-5.4 7.4-1.3 5.3 1 4.5 2.5 2.8-4.5 5 2.4z" id="KH" name="Cambodia">\n </path>\n <path d="M867.6 262.8l0.3-0.6 2.4 0.3 2.3-3 3.8-0.3 2.4-0.4 0.9-1.6 4 7.7 1 4.2-0.5 7.5-2.3 3.5-5 1.3-4.6 2.7-4.9 0.5-0.3-3.5 1.4-4.9-1.8-6.7 4-1.1-3.1-5.6z" id="KR" name="Republic of Korea">\n </path>\n <path d="M432.5 313.3l0.3 2.9-0.9 1.5 0.6 4.9-4 0.2-0.6-3.1-4.7-0.7 5.7-6.2 3.6 0.5z" id="KW" name="Kuwait">\n </path>\n <path d="M752.5 415.9l-5-2.4-2.8 4.5-4.5-2.5 2-3 0.5-5.5-4.3-5.7 0.1-6.4-4-5.3-4.2-0.4-1.3 2.3-3.3 0.2-1.7-1.2-6.2 3.9 0.3-5.8 1.9-6.9-3.8-0.3-0.1-3.9-2.3-2 1.4-2.4 5.1-4.2 0.4 1.5 3 0.2-0.3-7.5 3-0.9 2.9 5.1 2.1 5.9 6.9 0.1 1.8 5.6-3.7 1.8-1.8 2.3 6.5 3.9 4.3 7.7 3.2 5.7 4 4.5 1.2 4.6-1.3 6.5z" id="LA" name="Lao PDR">\n </path>\n <path d="M372.6 291.9l-1.5 0.1-0.9 1.1-1.8 0 3.9-5.3 4.4-4.6 0.2-0.2 2.3 0.3-0.1 2.6-3.8 2.4-2.7 3.6z" id="LB" name="Lebanon">\n </path>\n <path d="M87.7 458.3l-0.5 1.9 0.4 3.1-1.5 2.9 1.5 1.8 1.8 0.4 2.2 2.8 0 2.5-0.6 0.8-0.8 5.4-1.5 0-5.7-3.1-4.9-4.9-4.6-3.6-3.5-4.2 1.5-2 0.5-1.9 2.9-3.6 3-3 1.2-0.1 1.6-0.8 2 4-0.6 2.6 1 1.4 1.6 0 1.4-2.6 1.6 0.2z" id="LR" name="Liberia">\n </path>\n <path d="M310.3 303l-3.1 3.1-0.1 2.8-2.8 4-0.1 5.2-6.6 23.2-5.3 23.9-2.4 13-6.5 0-0.6 2.7-20.1-12.4-19.8-12.5-6.4 3.6-4.5 2.4-2.4-3.6-8.2-2.8-1.5-4-3.7-3.1-2.9 1.2-1-3.6 0.5-2.8-2-4.7 3.1-2.7 0.7-4.1 1.9-3.6 0.6-2.9 2.8-5.4 0.7-3 0.4-5.7 3.3-1.5 1.5-2.8 0.5-2.7 4.8-2.5 2.6-2.1 3.4-1.8 2.5-5 5.4 2.2 2.6-0.5 4.1 1 6 2.9 0.3 5.8 4.4 1.3 6.7 2.7 4.7 3.2 3.3-1.6 3.8-3 0.6-5 2.9-3.2 5.2-3 4.1-0.9 6.8 1.3 0.8 2.9 2 0.1 1.3 1.1 5.2 0.7 0.5 2.2z" id="LY" name="Libya">\n </path>\n <path d="M600.8 468l-5 1.5-2.6-5.2-0.6-9.4 3-10.5 3.8 3.6 2.5 4.6 2.5 6.7-1.2 6.8-2.4 1.9z" id="LK" name="Sri Lanka">\n </path>\n <path d="M324.1 706.9l-1.7 0.6-5.8-5 1.6-4.1 2.2-2.5 2.2-1.3 3 2 2.5 1.9-0.7 3.2-0.2 2.1-2.8 1-0.3 2.1z" id="LS" name="Lesotho">\n </path>\n <path d="M405.8 149.5l-1.8 2.8-5.5 1.9-3.9 3.5-7.1 2.3-4.7 0 0.4-1.9-1.9-0.7 0.9-1.5 1.9-1.7-1.3-1-4.2-1.1 3.4-5.1 7.1-1.9 7.6 0.4 5.2-0.6-0.4 1.3 2.2 0.3 2.1 3z" id="LT" name="Lithuania">\n </path>\n <path d="M275.5 187.8l-1.6 0.1-0.7-0.6 3.4-3.5 1.5-0.2-0.2 1.4-2.4 2.8z" id="LU" name="Luxembourg">\n </path>\n <path d="M419 138.2l1.1 1.4-2.1 2.9-1.4 3.6-7.1 2.4-3.7 1-2.1-3-2.2-0.3 0.4-1.3-5.2 0.6-7.6-0.4-7.1 1.9 4.2-4.6 5.7-3.8 6.2-2.1-0.2 4.5 3.9-0.1 4.9-4.6 4.9-1.1 1.4 0.7 2.1 2.3 3.9 0z" id="LV" name="Latvia">\n </path>\n <path d="M171.7 279.6l-0.1 4.1-1.6 4-1.5 6.9 0.8 1.3-2.2 2.6-7.6 1.1-3.6 2.4-3.4 0.5-2.4 4.8-7.5 2.6-3.5 3.3-5.3 1.7-5.9 1-10.9 4.8-2.9 7.7-0.8 0-1.1 3.5-3.6 0.2-2.3 1.5-2.5 0-1.7-0.8-4.9 0.6-3.6 5.1-1.9 0.5-5.2 8.2-9.9 7-4.2 9-3.1 2.9-1.3 2.4-12.8 0.5-0.1 0 1.1-3.1 2.6-1.7 2.7-3.4 0.3-2.2 3.2-4.6 4.3-4.1 2.2-1.1 2.6-3.8 1.3-3.4 3.4-4.1 4.5-2.3 5.9-6.7 0.2-0.1 3.7-2.5 5.5-0.7 6.1-4.4 3.5-1.8 6.8-5.4 2.3-8.1 4.7-5.6 2.4-3.4 5.7-4.4 6.9-3 5.4-2.7 7.2-6.7 3.8-4 4 0.1 1.8 2.7 5.3-0.4 4.9 1.4 2.3 0.1z" id="MA" name="Morocco">\n </path>\n <path d="M370.1 213l0.8-2.9 2.2-2.7 1.5-2.8-0.6-3.8 0.1-2.7-0.4-1.9-1.1-0.6 1.8-0.9 3.7-0.6 2.5 1.9 1.9 0.3 1.2 1.7-1.7 2.1 1.2 1.1-0.8 2.6 0.8 1.6-1 1 0.6 0.6-1.6 0.5-2.9-0.2 0-0.9-1.4 0.5-0.3 1.2-2.6 2-2.2 2.2-1.7 0.7z" id="MD" name="Moldova">\n </path>\n <path d="M425.7 596.4l1.8 7.8 1.8 3.1-0.2 3.1-0.7 1.9-2.4-3.8-0.9 1.9 1.7 4.8-0.1 2.8-1.3 1.5 0.4 5.5-1.1 7.6-1.5 9-1.6 12.3-0.6 9-1.1 7.6-4.3 1.5-4.3 2.7-3.5-1.6-4.9-2.3-2.2-3.5-1.5-5.7-2.9-5.2-1.3-4.7 0.2-4.7 2.5-1.1-0.4-2.2 1.9-4.9-0.1-4.1-1.8-3.1-1.7-4.1-1.3-6 1.4-3.7 0.2-4.1 2.8-0.2 3-1.4 1.9-1.1 2.5-0.1 2.8-3.7 4.2-4 1.3-3.3-1.1-2.8 2.5 0.8 2.7-4.5-0.3-3.9 1.6-2.9 2.3 2.8 1.8 2.7 1.8 4.3z" id="MG" name="Madagascar">\n </path>\n <path d="M1683.3 388l-1 0.1-1.4 3.9-1.1-0.8-0.7 0.3 0.2 1-5.2-0.1-5.3 0 0.6 3.7-2.6 0 2.5 2.1 2.3 1.6 0.9 1.4 1 0.4 0.2 2.2-7.3 0-1.9 5.3 0.9 1.2-0.4 1.5 0.1 1.9-7.4-7-3.3-2.1-4.8-1.7-3.1 0.5-4.2 2.4-2.8 0.7-4.3-1.7-4.4-1.3-5.7-3-4.4-0.9-6.9-3-5.2-3.1-1.7-1.7-3.2-0.4-6.1-2.1-2.9-3-6.6-3.6-3.5-4.1-1.8-3.2 1.8-0.6-0.9-1.9 1.1-1.7-0.4-2.2-2.3-3-1-2.5-2.4-3.3-6.1-6.5-6.5-5.1-3.5-4-5.3-2.7-1.4-1.6 0-4-3.1-1.5-4-3.2-2.4-4.5-3.1-0.5-4.1-3.5-3.3-3.1-0.8-2-4.2-5-3.3-4.9-0.6-2.5-4.7-2.6-1.7 0.3-3.7-1.8-0.1 2.6 1.7 3.1 1.9 4.9 2.5 2.7 5.3 4.5 1.3 1.5 0.9 0.5 1.3 2.2 0.9-0.1 2.1 4.2 2.1 1.7 1.7 2.3 4.2 3.3 3.1 6 2.2 2.9 2.1 3 1 3.5 2.7 0.2 2.8 2.9 2.5 2.9 0 1.2-1.9 2.4-1 0-2.2-4-4.3-3.7-4.5-3.2-3.2-1.6-0.7-4.8-1.5-3.5-3.1-2-4.4-2.9-0.6 0.8-1.8-1.7-3.7-1.5-4.1-3.8 0.3-0.5 2.3 0.4 1.5-2.5-0.4-2.9-5.4-4.6-3.7-1.8-3-4.1-3.2-4.3-3.9-5.2-3.9-5.8 6.1-0.5 6.7-0.7-0.1 1.3 9.1 3.1 13.9 4.6 10.9 0 4.3 0-0.8-2.7 9.5 0 2.7 2.3 3.5 2 4.1 2.9 2.8 3.4 2.4 3.6 3.4 1.9 5.1 2 2-5.2 4.5-0.1 4.6 2.6 4 4.5 3 3.8 4.2 3.7 2.4 4.5 2.3 3.1 4.8 2 4.3 1.4 2.1-0.2-0.9 5.7 0 4.7 1.2 8.7 0.1 3.2 1.6 3.6 2.3 3.1 1.9 5.1 4.6 4.8 1.9 3.7 2.8 3.2 6.3 1.8 2.8 2.7 4.6-1.8 4.2-0.7 4.1-1.2 3.3-1.1 3.2-2.6 0.6-3.8-0.5-5.5 0.7-1.9 3.5-1.7 5.6-1.5 5.1 0.2 3.3-0.5 1.6 1.4 0.4 3.1-2.3 3.8-0.7 4 1.3 1.1-0.4 2.9-0.5 5-1.7-1.6-1.2 0.1z" id="MX" name="Mexico">\n </path>\n <path d="M327.2 239.6l-1.1 0.2-1.5 1.2-2.8-0.2-2.7 1.4-3.8 0.6-1.3-1.6 0.8-2.7 1.9-2.2 0.7 0 1-1.3 3.6-1 1.4-0.2 2-0.4 2.4-0.1 1.5 2.1-2.1 4.2z" id="MK" name="Macedonia">\n </path>\n <path d="M171.7 383.7l-3 15-4 4.3-1.2 4-5.3 1.1-7.8 0.5-2.5 2.3-3.7 0.3-3.7 0-1.2-1.2-3.3 0.9-5.8 2.7-1.4 2-4.9 2.9-1 1.7-2.6 1.3-2.7-0.8-1.8 1.5-1.5 4.5-5.3 5.4-0.1 2.2-2 2.8 0 3.7-2.5 1-1.4 0.8-0.6-2.8-1.7 0.8-1-0.2-1.3 1.9-4.4 0-1.5-1-0.8 0.6-1.5-1.9 0.5-1.9-0.6-0.8-1.3 0.7 0.5-2.2 1.4-1.6-1.9-2.7-0.5-1.8-1-1.5-1.1-0.1-1.5 0.9-2 0.8-1.8 1.4-2.4-0.5-1.3-1.6-0.9-0.2-1.6 0.8-0.9 0 0-2.3 0.6-2.1-0.1-2.5-1.8-1.8-0.5-3.7 0.4-4.1 2.2-1.2 1.7-3.8 1.8-0.1 3.6 1.8 3.5-1.3 2.1 0.4 1.1-1.4 22.9-0.1 2.1-4.6-0.8-0.8 3.5-28.1 4.5-28 8.6-0.1 15.1 14.1 15.7 14.2 0.7 3.1 3.1 1.8 2.4 1.1-0.9 4.1 6.4-0.6z" id="ML" name="Mali">\n </path>\n <path d="M720.3 368.9l-5.1 4.2-1.4 2.4-3.3 1.5-3.5 2.8-4 0.3-3.1 7-2.5 1.2 2.3 5.7 3.3 4.8 2 4.3-2.5 5.6-2 1.2 1.2 3.3 3.5 5.1 0.4 3.7-0.2 3 1.9 5.9-3.4 6.1-3 6.7-0.4-4.9 2-4.9-1.7-3.9 0.8-7.1-2.2-3.3-1.4-7.8-0.5-8.2-2-5.4-4 3.2-6.8 4.7-3.1-0.6-3.4-1.5 2.5-8.1-0.7-6.1-3.8-7.5 0.9-2.3-3.3-0.8-3.5-5.4 0.1-5.2 1.9 1 0.5-4.7 2.9-1.5-0.3-2.8 1.4-2.2 0.9-6.7 4.2 1.5 3.1-5.4 0.6-3.2 3.6-5.4 0.3-3.7 7.7-4.5 3.9 1.1 0-4 2.1-1.1-0.1-2.5 3.3-0.5 1.4 3.8 2.2 1.6-0.4 5-0.8 5.3-5.8 5.5-1.5 7.7 6.1-1.1 0.8 6 3.4 1.2-2.1 5.4 4 2.5 2.4 1.2 4.2-1.9 0 2.7z" id="MM" name="Myanmar">\n </path>\n <path d="M318.6 230.1l-1.8 1.5-1.8 0.5 0.4-1.2-4.1 3.2-0.9 2-0.8-0.5-0.2-2.1-1.5-1.2 1.2-1.1 2.9-3.6 2.7-1.4 1.3-0.6 0.7 1.1 0.2 0.9 1.3 0.6 1.2 1.4-0.8 0.5z" id="ME" name="Montenegro">\n </path>\n <path d="M828.8 185.1l-3.3 4.7-4.7 6.4 0.9 2.5 3-0.8 4.8 1 4.3-2.3 3.7 2 3.9 4.5-0.9 2.2-3.9-0.7-7.6 0.8-3.8 1.9-4.5 4.2-8.2 2.4-5.7 3.4-5.1-1.3-2.8-0.5-3.5 4.1 1.2 2.4 0.5 2.2-4 2.1-4.4 3.5-6.5 2.2-7.9 0.3-8.9 2.2-6.7 3.5-2-2.1-6.3 0.1-6.9-4-4.9-0.9-7.2 0.9-10.4-1.5-5.8 0.2-2.1-3.8-0.9-5.9-3-0.7-5.1-4-6.7-0.9-5.8-1.1-1.1-2.8 4.2-7.4-2-5.1-6.5-2.4-3.1-3.4 0.1-4.4 5.7-1.1 11.3-5.4 8.5-3 3.7 2 5.2 0.1 2.4 2.9 4.9 0.2 6.7 1.6 6.2-4.4-1-3.7 7.1-6.4 4.8 2.5 4.2 0.8 5.4 1.6-0.4 4.7 6.4 2.6 5-1.1 6.5-0.9 4.8 0.9 4.1 3 2.3 3.2 4.7-0.1 6.1 1.1 4.9-1.6 6.8-1 8.2-4.5 2.9 0.7 2.2 2.1 6-0.5z" id="MN" name="Mongolia">\n </path>\n <path d="M338.7 682.1l-1.2-2.9-1.5-2.9-1.1-2.3-0.6-7.3-2.4-4.6-4.5-9.1 4.6-7.4 0.7-4.7 0.7-0.6 0-3.8-1.2-2-0.6-4.8 0.3-4.5-1.3-8.2-3.3-2.1-2.8-0.5-1.5-1.6-2.8-1.4-4.7 0.1-0.7-2.4-1.3-4.6 16.6-5.4 3.7 3.1 1.5-0.6 2.4 1.7 0.7 2.6-0.8 3 1.1 4.6 4.4 4 1-4.5 2.3-1.4-1.7-8.3-3-4.7-2.3-2.1-0.3 0-1.8-7.5 0.8-6.1 2.1-0.2 7.1 1.8 1.4-0.8 3.9-0.2 1.9-2 3.4 0.2 6-2.6 4.2-3.7 1.2 2.9 0.4 6.5 1.3 5.7 1.3 10.1 1.4 3.2-1.1 4.7-1.5 4.5-3.1 4-4.8 2.5-5.9 3.1-5.2 7-2 1.2-3.2 4.6-2.1 1.5 0.4 4.7 3.5 4.9 1.8 3.8 0.4 1.9 0.9-0.3 1 6.4-0.3 3 1.5 1.1-0.3 2.7-1.8 2.3-4.2 2.2-5.9 3.6-1.9 2.4 1.1 2.7 1.6 0.4 0.3 3.5-4.2-0.1z" id="MZ" name="Mozambique">\n </path>\n <path d="M129.2 345.9l-8.6 0.1-4.5 28-3.5 28.1 0.8 0.8-2.1 4.6-22.9 0.1-1.1 1.4-2.1-0.4-3.5 1.3-3.6-1.8-1.8 0.1-1.7 3.8-2.2 1.2-2.8-4.5-2.5-4.7-3.4-1.8-2.3-1.9-3.2 0.1-3 1.4-2.7-0.5-2.4 2 0.2-3.5 2.3-3.2 2.2-6.1 0.9-6.4 0.1-3.2 1.4-3.3-0.7-3.1-2.3-2.8 1.8-2.2 22 0.1 1.3-9.4 2.3-3.4 5.4-0.5 4.8-16.7 18.2 0.4 3.4-9.9 15.8 15.8z" id="MR" name="Mauritania">\n </path>\n <path d="M339.1 596.5l0.3 0 2.3 2.1 3 4.7 1.7 8.3-2.3 1.4-1 4.5-4.4-4-1.1-4.6 0.8-3-0.7-2.6-2.4-1.7-1.5 0.6-3.7-3.1-3.2-1.7 1-6 1.5-2.3-1.6-5.4 0.6-5.2 0.8-1.8-1.9-5.5-2.9-2.9 5.7 1.2 1.2 1.8-0.1 0.7 2.4 4.2 1.1 7.8-1.3 3.7 2.2 4.7 0.3 2.9 1.6 1.9 0.2 2.4 1.1 1.4 0.8-1.6 2.4 2.5 0-0.8-1.6-3.5-1.1-0.2-0.2-0.9z" id="MW" name="Malawi">\n </path>\n <path d="M720.7 467.8l1.3 0.6 3.3 3.9 2.3 4.4 0.3 4.4-0.7 2.9 0.5 2.3 0.4 3.8 2 1.8 2.2 5.8-0.1 2.2-4.1 0.4-5.4-4.8-6.7-5.2-0.6-3.3-3.3-4.3-0.7-5.4-2-3.6 0.8-4.7-1.2-2.8 1-1.1 4.6 2.8 0.4 3.4 3.8-0.8 1.9-2.7z m90.1 13.6l-5-1.1-6.6 0-2.1 7.4-2.2 2.2-3 9.1-4.7 1.3-5.4-1.8-2.8 0.6-3.4 3.3-3.6-0.5-3.7 1.3-3.9-3.6-1-4.4 4.2 2.2 4.5-1.2 1.2-5.5 2.4-1.2 6.9-1.4 4.2-5.2 2.9-4.1 2.6 3.4 1.2-2.2 2.7 0.2 0.4-4.2 0.3-3.2 4.5-4.5 3-5.1 2.3 0 2.9 3.3 0.2 2.8 3.8 1.8 4.7 2-0.4 2.5-3.9 0.4 1 3.1-4.2 2.3z" id="MY" name="Malaysia">\n </path>\n <path d="M276.9 622.2l4.3-1.5 3.8 0.4 2.5 1.5 0.1 0.5-2.9 1.5-1.7 0-3.2 2.5-2.7-2.6-8.3 2.2-4.1 0.3 4.2 23.1-5.5 0.2 4.2 19 6.7 24-3.8 3.4-2.9 0.4-3.8-1.2-2.7-0.5-1.8-2.7-2.8-1.8-1.6 3.2-5.7-4.9-3.6-4.8-3.1-6.3-2.7-4.7-4.3-10-1.9-7.8-1.5-3.5-2.8-2.7-4-5.4-4.5-7.8-2.1-4.1-5.8-6.3-1.4-5 2.5-1.3 3.2-1.1 3.7 0.2 4 3 0.7-0.5 22.9-0.3 4.5 3.1 13.9 1 10-2.7z" id="NA" name="Namibia">\n </path>\n <path d="M236.5 359.6l-0.8 10.1 1.8 1.7-0.3 2.1 1.9 2.2-1.8 2.8-4.8 13.2-1.9 8.4-8.3 6.2-3.8 8.5 2 2.4-0.6 4.2 3.6 0.2-1 3-1.7 0.4-0.4 2.1-1.1 0.1-2.9-7.1-1.3-0.2-4.9 3.6-4.2-1.9-3-0.4-1.8 0.9-3.3-0.2-3.7 2.8-3 0.2-6.4-3.4-2.9 1.6-2.9-0.1-1.8-2.5-5.3-2.4-6.3 0.8-1.7 1.4-1.3 3.7-2 2.6-1.2 5.8-3.9-3.7-2 0-2.2 1.9 0.8-4.4-6.4-1.5 0.3-3.2-2.6-4.2-0.2-3 1-3.1 3.7-0.3 2.5-2.3 7.8-0.5 5.3-1.1 1.2-4 4-4.3 3-15 8.6-2.9 19.1-12.8 22-12.4 8.2 2.8 2.4 3.6 4.5-2.4z" id="NE" name="Niger">\n </path>\n <path d="M220.4 427.1l1.9 2.6-0.7 1.2-0.6 2.1-5.4 5-1.9 4.2-1.2 3.4-1.3 1.4-1.6 4.6-3.3 2.7-1.1 3.2-1.5 2.7-0.8 2.7-4.1 2.2-3-2.7-2.2 0.1-3.7 3.8-1.6 0.1-3.2 6.2-1.7 4.6-6.1 2.4-2.2-0.4-2.3 1.5-4.5-0.2-2.9-4-1.6-4.7-3.7-4.3-4.3 0.1-5.1 0 1.2-10.5 0.2-4.2 1.4-4.1 2-1.9 3.2-4.1-0.4-1.7 1.4-2.6-0.8-3.9 0.5-2.2 1.2-5.8 2-2.6 1.3-3.7 1.7-1.4 6.3-0.8 5.3 2.4 1.8 2.5 2.9 0.1 2.9-1.6 6.4 3.4 3-0.2 3.7-2.8 3.3 0.2 1.8-0.9 3 0.4 4.2 1.9 4.9-3.6 1.3 0.2 2.9 7.1 1.1-0.1z" id="NG" name="Nigeria">\n </path>\n <path d="M1716.3 410.8l-0.4 0.6 0 1.4 0.9 2.4-1 2.2-0.3 2.6 0.2 2.9 0.5 1.7 0.5 2.9-0.8 0.6-0.2 2.8 0.6 1.7-1 1.7 0.5 1.8 1 1-1.3 1.4-1.7-0.4-1.1-1.4-1.8-0.5-1.3 0.8-3.9-1.7-0.8 0.9-2.2-2.1-2.9-2.6-1.5-2.2-2.7-2-3.2-3 0.5-1 1.1 1 0.4-0.5 1.7-0.2 0.5-1.5 0.9-0.1-0.6-3.2 1.4-0.1 1.2 0 1-1.7 1.8 1.3 0.5-0.8 0.9-0.8 1.8-1.8-0.1-1.3 0.5 0 0.5-1.5 0.6-0.2 1.1 1 1.2 0.3 1.1-0.8 1.5 0 1.8-0.9 0.7-0.9 1.9 0.2z" id="NI" name="Nicaragua">\n </path>\n <path d="M488.4 71l5.9-3.8-2.9-2.2-8.5 1.9-6.4 4-6.6 2.4-3.1-1.3-5.7 0.2-1.4-2.9-4.2 1.5-2.8 0.2-4.7 3.6-6.9-0.8-4.7 3-4 0-7.3 4-11.2 6.2-15.5 8-0.6 2-4 2.3-4.2-0.1-8.8 5.4-7.9 7.8-0.2 3-8.6 6.9-7.9 4.1-5.4 3.5 0.5-3.7-16.1 6.9-7.6 1.4-3.3-3 5-6.5 13.2-13.6 8.3-3.8 17.1-4.9 15.3-5.9 16.8-8 22.6-10.9 11.9-4.1 19.5-6.9 11.8-2.4 6.4 0.3 11.4-4.4 7.2 0.2 8.5-1.1 8.4 4-6.8 1.4 0.8 3.4-9.4 2.2-3.9 0.5z m43.4-45.5l-11.5 2-4.7-1.1 4.6-1.3 0.2-1.5 9.2-0.9-1.4 1.7 3.6 1.1z m-9.3-8.6l6.1 3.4-12.3 1.9-7.9 3.4-4.7 0.9-8.4 4.1-4.9 0.2-3.1-3 6.3-1.7-3.2-1.4 0-4 3.7-3.5 12.8-1.6-1 1.5 5.3 0 4.1-1.5 5.5-0.2 1.7 1.5z m31.1-3.1l4.4 1.6-9.3 2.4-11.3 0.5-9.4-0.7 1.5-1.3-5-0.1-0.2-2 13.1-1.2 3.3 1.1 5.8-1.3 7.1 1z" id="NO" name="Norway">\n </path>\n <path d="M651.7 327l-0.8 2.8 0.1 4.1-1 2.6-4.6 0.1-6.5-1.5-4.2-0.6-2.8-3.3-7.4-0.9-6.7-3.6-4.7-3.2-5-2.5 3.3-6.1 4-2.9 2.6-1.6 4 2 4.9 4.3 2.9 0.9 1.3 3.1 4.1 1.3 4.1 2.9 6 1.5 6.4 0.6z" id="NP" name="Nepal">\n </path>\n <path d="M445.4 400l-1.2-4.6-2.9-10.7 17.8-6.5 5.6-13-1.9-4.6 0.6-2.6 2.1-2.7 0.4-2.7 2.7-1.3-0.8-0.9 1.2-4.2 2.9 0 1.7 4.4 2.7 2.4 4 0.8 3.2 1.2 1.9 3.8 1.2 2.1 1.9 0.8-0.2 1.5-2.6 3.9-1.2 1.8-2.6 2.1-2.7 4.4-2.5-0.3-1.4 1.5-1.4 3.3 0.1 4.4-0.6 0.8-2.6 0-3.9 2.4-0.9 3.1-1.5 1.4-3.5 0-2.5 1.6-0.3 2.6-3 1.8-3-0.6-4.1 2.2-2.7 0.4z m26.6-59l-0.6-2.2 2.1-2.2 0.5 0.6-1 2.7-1 1.1z" id="OM" name="Oman">\n </path>\n <path d="M605.1 277.5l-6.6 5.4-6.2 1-7.9-1.6-3.3 2.8 0.5 5.7 0.8 4.4 3.7 3.2-5.5 3.8-1 4.6-6.7 6.5-4.8 6.6-7 6.9-6.4-0.5-7.4 6.8 3.2 2.9-0.2 5 2.6 3.3 0.3 5.6-12.3 0-4.4 4.3-3.9-1.6-0.9-4.7-3.6-5-10.5 1.3-9 0.1-8.1 0.9 3.5-7.6 8.6-3.3 0.1-3-2.4-1.1 1-5.7-4.7-2.9-1.3-3.9-1.9-3.4 8.4 3.3 5.8-1 3.1 0.9 1.4-1.5 3.8 0.6 7.7-2.7 1.5-5.5 3.9-3.7 4.1 0 1-1.8 4.4-0.9 1.9 0.6 2.6-1.8 0.7-3.9 3.3-3.9 3.8-1.7-1-4.3 5.1 0.2 2.1-2.3 0.5-2.5 3.4-2.7 0.2-3.3-0.5-2.7 3.9-2.8 6.2-1.4 6.4-0.8 3-1.2 3.4-0.7 3.1 3 0.3 5 8.2 2.7z" id="PK" name="Pakistan">\n </path>\n <path d="M1754.2 451.9l-0.6 0.9 1.6 3.9-0.9 1.9-1.9-0.5-0.5 3.2-2.1-1.9-1.5-3.5 1.3-1.7-1.5-0.5-1.2-2.1-3-1.8-2.5 0.4-1 2.2-2.1 1.7-1.3 0.2-0.4 1.4 3 3.5-1.5 0.8-0.8 1-2.6 0.3-1.3-3.9-0.7 1.1-1.9-0.3-1.3-2.7-2.4-0.4-1.6-0.8-2.4 0.1-0.1 1.4-0.7-1 0.2-1.3 0.4-1.3-0.4-1.2 0.8-0.8-1.2-0.9-0.3-2.7 2.2-0.5 2.2 2.3 0 1.4 2.3 0.3 0.5-0.6 1.7 1.6 2.8-0.4 2.3-1.7 3.4-1.3 1.7-1.9 3.2 0.3-0.1 0.7 3.2 0.2 2.6 1.1 2.1 2 2.3 1.8z" id="PA" name="Panama">\n </path>\n <path d="M1798.9 536.2l-5.2-0.3-0.8 1-4.8 1.2-6.8 4.5-0.6 3-1.6 2.3 0.3 3.5-3.6 1.9-0.2 2.7-1.6 1.2 2 5.8 2.8 4-1.5 2.8 3.8 0.4 1.8 3.4 5 0.2 5.1-3.8-1.4 9.9 2.5 0.7 3.3-1.1 3.7 10.5-1.5 2.2-1 4.5-1 5.6-2.7 3.2 0.6 2.4-1.7 2.2 1.5 5.5-5 7-2.1 3.3-3.3 1.7-4.9-3.8 0-2.6-10-6.6-9-7.1-3.7-4-1.6-5.3 1.2-1.9-3.7-8.6-4.3-11.9-4.2-13-2.1-3-1.5-4.7-4.1-4.3-4-2.6 2.1-2.9-2.5-6.2 2.1-4.6 4.7-4.1 0.6 2.7-1.7 1.6 0 2.3 2.4-0.5 2.3 0.7 2.2 3.3 3.4-2.7 1.3-4.3 3.8-5.7 7-2.6 6.5-6.8 1.8-4.2-0.7-4.9 1.5-0.7 3.8 3.1 1.8 3.1 2.6 1.7 3.2 6.8 4.3 0.8 3.2-1.7 2 1.1 3.5-0.6 4.3 3.1-4 6.6 1.7 0.2 2.7 3.4z" id="PE" name="Peru">\n </path>\n <path d="M859.8 453.5l0.5 4.4 0.3 3.6-2 6-2-6.7-2.7 3.3 1.7 4.8-1.6 3.1-6.7-3.8-1.6-4.7 1.8-3.1-3.6-3.1-1.8 2.7-2.7-0.2-4.3 3.6-0.9-1.9 2.3-5.5 3.6-1.8 3.2-2.5 2 3 4.4-1.8 0.9-2.9 4.1-0.2-0.3-5 4.6 3.1 0.5 3.3 0.3 2.3z m-13.5-12.1l-2.1 2.2-1.8 4.1-1.9 1.9-3.4-4.5 1.2-1.7 1.5-1.9 0.7-4 3.2-0.4-1.1 4.4 4.4-6.3-0.7 6.2z m-31.4 6.3l-7.8 6.2 2.9-4.6 4.3-4 3.5-4.5 3.1-6.5 0.9 5.3-3.8 3.6-3.1 4.5z m19.7-16.8l3.4 2 3.6 0-0.2 2.8-2.7 2.7-3.7 2-0.1-3.1 0.5-3.3-0.8-3.1z m20.7-1.7l1.4 7.2-4.4-1.7 0.1 2.2 1.3 4-2.7 1.5-0.2-4.6-1.7-0.3-0.8-4 3.4 0.5-0.1-2.4-3.3-5 5.5 0.1 1.5 2.5z m-22.6-5.9l-1.6 5.6-2.4-3.2-2.7-5 4.8 0.2 1.9 2.4z m0.1-35.4l3.5 1.9 1.8-1.7 0.4 1.7-1 2.6 1.7 4.7-1.7 5.4-3.4 2.2-1.1 5.2 1.1 5.2 3 0.7 2.6-0.8 7 3.6-0.7 3.6 1.9 1.5-0.7 3-4.4-3.1-2-3.5-1.5 2.4-3.5-3.9-5.2 1-2.8-1.4 0.4-2.7 1.8-1.7-1.7-1.5-0.8 2.4-2.7-3.8-0.7-2.8 0-6.2 2.2 2.1 1-10.2 2.1-5.9 3.4 0z" id="PH" name="Philippines">\n </path>\n <path d="M1028.7 552.6l-1.6 0.7-2.5-2.5-2.5-4.2-1.2-4.9 0.8-0.6 0.6 1.9 1.8 1.5 2.7 4.1 2.7 2.2-0.8 1.8z m-22.3-8.7l-3 0.5-0.9 1.8-3.1 1.6-3 1.6-3-0.1-4.7-1.8-3.3-1.9 0.5-2 5.1 1 3.2-0.5 0.8-3.1 0.8-0.2 0.6 3.4 3.3-0.5 1.6-2.2 3.2-2.3-0.6-3.8 3.4-0.2 1.2 1.1-0.2 3.6-1.9 4z m-62.7 23.7l-0.2-21.2-0.1-21.2 9.9 4.5 10.7 3.7 3.9 3.3 3.2 3.3 0.9 3.8 9.6 4 1.4 3.5-5.3 0.7 1.3 4.3 5.1 4.3 3.7 6.9 3.3-0.2-0.3 2.8 4.5 1.1-1.8 1.3 6.1 2.7-0.6 1.9-3.8 0.4-1.4-1.6-4.9-0.8-5.8-1-4.4-4.1-3.3-3.6-3-5.7-7.5-2.8-4.8 1.8-3.5 2.2 0.8 4.8-4.5 2.2-3.2-1.1-6-0.2z m69.4-30.1l-1.8 1.8-1.1-3.9-1.4-2.5-2.6-2.1-3.2-2.8-4.2-1.9 1.6-1.6 3.1 1.8 2 1.5 2.4 1.5 2.3 2.8 2.2 2 0.7 3.4z" id="PG" name="Papua New Guinea">\n </path>\n <path d="M381.3 157.4l1.9 0.7-0.4 1.9-1.9 2.7-0.6 2.4-1.9 2.5-3.9 1.2-0.7 2.9-2 2.8-1.5 5.5-1.8 1.7-3 0.7-8.2 5.3-0.7 2.8-0.8-0.4-3.1-2.4-4.3 0.9-1.9-0.6-3.9 1.3-0.9-2.2-2.7 0.8 0-0.3 0-3.1-3.5-0.4 1-2-2.9-0.7-1.9 1.6-1.8-1.3 1.7-1.7-3.3-0.5-0.8-2.1 1.2-4 2.1-2.1 1.5-3.3 0.1-2.2 2.7-1.7 1.6-3.2 4.9-1.8 9.9-2.8 7.9-2.1 3.9 1-0.9 1.5 4.6 0.1 5.3 0.7 9-0.1z" id="PL" name="Poland">\n </path>\n <path d="M893.9 232.8l0.6 1.1-2-0.3-2.4 2.1-1.8 2.2-0.2 4.7-2.8 1.4-1.1 1.1-2.2 1.9-3.6 1.1-2.4 1.7-0.5 2.8-0.6 0.7 2 1.1 2.8 2.8-0.9 1.6-2.4 0.4-3.8 0.3-2.3 3-2.4-0.3-0.3 0.6-2.5-1.2-0.8 1.2-1.6 0.5-0.1-1.2-1.3-0.6-1.3-1 1.7-2.9 1.3-0.7-0.3-1.2 1.7-3.5-0.3-1-3-0.7-2.3-1.8 4.7-4.1 6.2-3.5 4.1-4.6 2.3 2.1 4.5 0.2-0.5-3.4 8.3-2.8 2.4-3.6 3.1 3.8z" id="KP" name="Dem. Rep. Korea">\n </path>\n <path d="M1851.3 639.5l0.9 3.6-2.5 8.8 5.7 1.3 2.6-1.3 3.3 1.8 0.6 1.9-1 6 0 2.5 2 0.2 2.4-1 1.7 1.2-1 3.5-1.9 3.9-2.2 3.7-2.8 5.8-6.7 5-4.8 1-5.9-1-5-1.8 8.7-9.8 0-2.9-5-2.5-5.5-4.9-4.4-0.9-7.7-10.7 4-7.7 0.9-3.5 4-5.8 10.2-1.9 5.3 0.1 4.5 3.4-0.4 2z" id="PY" name="Paraguay">\n </path>\n <path d="M369.1 297.6l-1.4 4-1.4 1.9-2.9 0.9 0.8-1.7 1.7-0.9-1.1-0.8 2.6-4.3 1.7 0.9z" id="PS" name="Palestine">\n </path>\n <path d="M443.5 348.1l-1.6 0.5-1.5-1.3 0.6-4.7 2.1-3.5 1.7-0.7 1.3 2.1-0.7 3.8-1.9 3.8z" id="QA" name="Qatar">\n </path>\n <path d="M372.6 195.6l1.1 0.6 0.4 1.9-0.1 2.7 0.6 3.8-1.5 2.8-2.2 2.7-0.8 2.9 1.6 1.2 3-1.1 1.7 1.1-0.8 1.7-3.3 1.4-1.2-0.6-6 7.7-2.6-0.7-2.4-2.3-7 1.5-3.5 1.6-7.4-0.3-3.4-1-2.3 0.4 0.1-2.6-0.3-1.1 1.9-1.1-0.8-0.8-2.5 1.4-1.9-1.8 1.2-2.6-2.2-1.5 0.7-2.1-1.1-2.5 4.8-1.2 5.9-4.3 5.2-4.3 3.9-1.3 3.1-1.4 2.7 0.7 3.2 0 1.3 1.6 2.4-1 4.1-0.6 2.2-1.5 2.2 0z" id="RO" name="Romania">\n </path>\n <path d="M308.3 515.6l2.3 3.7-0.2 3.8-1.6 0.9-3.1-0.5-1.6 3.7-3.5-0.5 0.4-3.5 0.8-0.5 0.1-3.9 1.6-1.8 1.4 0.7 3.4-2.1z" id="RW" name="Rwanda">\n </path>\n <path d="M114.1 328.4l-0.1 0.5-0.6 1.2-3.4 9.9-18.2-0.4-4.8 16.7-5.4 0.5-2.3 3.4-1.3 9.4-22-0.1-1.8 2.2 0.9-2.7 0.1 0 12.8-0.5 1.3-2.4 3.1-2.9 4.2-9 9.9-7 5.2-8.2 1.9-0.5 3.6-5.1 4.9-0.6 1.7 0.8 2.5 0 2.3-1.5 3.6-0.2 1.1-3.5 0.8 0z" id="EH" name="Western Sahara">\n </path>\n <path d="M423.2 319l4.7 0.7 0.6 3.1 4-0.2 0.8 5.6 2.4 1.5 0.4 2.3 3.2 2.7-0.3 2.7-1 2.2 0.3 2.1 1.3 1.9 0.3 2.1 0.5 1.6 1.5 1.3 1.6-0.5 0.6 2.5 0 1.5 1 6.6 16.4 3.3 1.3-1.4 1.9 4.6-5.6 13-17.8 6.5-16.7 2.5-5.7 2.9-5 6.9-2.8 1-1.2-2.1-2.2 0.3-5.4-0.6-0.9-0.7-6.6 0.2-1.6 0.5-2.1-1.7-1.9 3.2 0.1 2.8-2.7 2.1-0.4-2.8-1.4-2-0.1-2.6-2.5-2.3-2.2-5.5-0.7-5.3-3.2-4.4-2.4-1.1-2.7-6.2 0.2-4.5 0.9-3.9-1.9-7.2-2.2-2.5-2.7-1.4-1.1-3.7 0.6-1.5-0.8-3.3-1.3-1.5-1-4.8-2.1-5.3-1.6-4.4-2.8 0 1.9-3.6 0.9-2.2 1.4-2.6 5.9 1 3-2 2-2.3 4.5-0.9 1.5-2.2 2.2-1.1-3.4-6.5 12.1-3.3 1.3-1 6.1 1.8 6.7 4.5 11.7 13.1 10.2 0.5z" id="SA" name="Saudi Arabia">\n </path>\n <path d="M348.8 414.5l-1.6 5.6-3.1 6.4-3.8 3.2-2.9 5-0.8 2.6-2.9 1.8-2.3 6.8 0 0.8-0.8-0.1 0.3-3.2-0.4-2.3-2.8-2.5-0.2-4.7 1.2-4.8-2.6-0.5-0.6 1.5-3.4 0.3 1.2 1.9 0.1 3.9-3.5 3.6-3.3 4.7-3 0.6-4.5-3.8-2.2 1.4-0.8 1.9-3 1.2-0.4 1.4-5.7 0-0.6-1.4-4.1-0.2-2.2 1.1-1.5-0.6-2.6-3.7-0.8-1.8-4.2 0.9-1.9 3-2 5.8-2 1.2-1.8 0.7-0.5-0.3-1.8-1.9-0.2-2 1.2-2.7 0.2-2.6-2.9-4.1-0.4-2.8 0.3-1.6-1.9-1.9 0.3-3.8-0.8-2.5-2.1 0.4 0.9-2.4 1.8-2.7-0.3-2.7 2.2-2-1-1.5 2.1-4 3.3-4.8 4.9 0.5 4.2-25.9 0.6-2.7 6.5 0 2.4-13 22.6 0 21.8 0 22.3 0 0.8 6.4-1.5 1.2-0.3 6.7 0.8 7.7 1.9 1.6 2.7 2.4-3.4 3.7-4.4 1.1-2.1 2-1.2 4.3-3.8 9.6 0.3 2.6z" id="SD" name="Sudan">\n </path>\n <path d="M331.4 446.7l-0.4 5.1-1 2-3 0.1-2.2 3.7 3.5 0.5 2.7 3.2 0.8 2.6 2.5 1.5 3 7.1-4.1 4.2-3.7 3.9-3.6 3-4.1 0-4.7 1.5-3.5-1.4-2.5 1.7-4.8-4.3-1.3-2.8-3.2 1.4-2.7-0.4-1.6 1.1-2.5-0.8-3.2-5.4-0.8-2-4.1-2.6-1.3-3.9-2.2-2.8-3.6-3.4 0.1-2.1-2.9-2.6-3.7-2.6 1.8-0.7 2-1.2 2-5.8 1.9-3 4.2-0.9 0.8 1.8 2.6 3.7 1.5 0.6 2.2-1.1 4.1 0.2 0.6 1.4 5.7 0 0.4-1.4 3-1.2 0.8-1.9 2.2-1.4 4.5 3.8 3-0.6 3.3-4.7 3.5-3.6-0.1-3.9-1.2-1.9 3.4-0.3 0.6-1.5 2.6 0.5-1.2 4.8 0.2 4.7 2.8 2.5 0.4 2.3-0.3 3.2 0.8 0.1z" id="SS" name="South Sudan">\n </path>\n <path d="M72.4 413.2l-0.4 4.1 0.5 3.7 1.8 1.8 0.1 2.5-0.6 2.1-0.9 0.3-3-0.5-0.6 0.7-1.2 0.2-3.9-1.6-2.7-0.1-10.5-0.3-1.7 0.8-1.8-0.2-3.2 1-0.1-5 5.1 0.2 1.5-0.9 1.1-0.1 2.3-1.5 2.3 1.4 2.4 0.1 2.7-1.5-0.8-1.8-2.1 1.1-1.7-0.1-2-1.6-1.8 0.1-1.6 1.6-6.2 0.2-1.4-5.1-2.4-2.3 2.7-1.3 3.7-4.5 2.1-3.4 2.4-2 2.7 0.5 3-1.4 3.2-0.1 2.3 1.9 3.4 1.8 2.5 4.7 2.8 4.5z" id="SN" name="Senegal">\n </path>\n <path d="M77.9 453.6l-3 3-2.9 3.6-0.5 1.9-1.5 2-1.5-0.4-3.9-2.7-2.7-3.4-0.8-2.4-0.2-4.8 3.4-2.9 0.9-1.8 1.1-1.4 1.6-0.1 1.5-1.3 4.6 0 1.3 2.4 0.9 2.7-0.4 1.9 0.8 1.7-0.3 2.4 1.6-0.4z" id="SL" name="Sierra Leone">\n </path>\n <path d="M1691.3 421.2l-0.4 1.6-3.3-0.1-2.1-0.7-2.6-1.3-3.2-0.4-1.8-1.4 0.1-0.9 1.7-1.6 1-0.8-0.4-0.7 1.3-0.4 1.7 0.5 1.4 1.3 1.9 1.1 0.3 0.8 2.4-0.7 1.2 0.4 0.9 0.7-0.1 2.6z" id="SV" name="El Salvador">\n </path>\n <path d="M372.5 519.2l-3.5-5.4 0.2-23.6 5.3-7.4 1.6-2.1 3.7-0.1 5.3-4.6 7.5-0.3 17.2-19.5 4.3-5.4 2.9-4 0.2-3.4 0.6-6.5 0.2-2.7 0.1-0.1 1.8-0.2 2.7-0.9 3.1-0.7 2.9-2.2 2.1 0 0 1.8-0.8 3.8-0.3 3.4-1.4 2.3-2.1 7-3.2 7.3-4 8.3-5.4 9.5-5.2 7.3-7 8.9-5.9 5.3-8.7 6.4-5.4 5-6.3 7.8-1.3 3.5-1.2 1.5z" id="SO" name="Somalia">\n </path>\n <path d="M336.6 221l-2.2 1.5-0.9 2.3 0.9 2.8-3.2 2-2.1 2 0.1 0.8-1.4 0.9-2.4 0.1-2 0.4 0.1-0.5 1-0.8 1.5-1.5-0.7 0-0.3-1.2-0.7-0.3-0.1-1-0.7-0.4-0.2-0.9-1.2 0.3-2 2.2-1.5 0.4 0.8-0.5-1.2-1.4-1.3-0.6-0.2-0.9-0.7-1.1 1.4-0.3 2.6-3-1-2.5 3.1-2.8-1.9 0 3.5-2.4-0.5-1.8 0.4-2.5 5-1.7 3 0.3 1.1 2.5-0.7 2.1 2.2 1.5-1.2 2.6 1.9 1.8 2.5-1.4 0.8 0.8-1.9 1.1 0.3 1.1z" id="RS" name="Serbia">\n </path>\n <path d="M1887.7 493.2l-3.3-1.3-2.7 0.6-2.4-0.6-0.5 1.9 1 1.3-0.4 1.3-3.2-0.5-3.7-5.6-0.9-3.7-1.9 0-2.8-4.7 0.9-3.4-0.4-1.5 3.4-1.7 0.5-5.9 6.9 1.3 0.6-1.1 4.6-0.5 6.3 1.7-2.6 5.6 0.7 4.5 2.5 3.8-0.9 2.8-0.3 3-1.4 2.7z" id="SR" name="Suriname">\n </path>\n <path d="M355.8 190.1l-2.6 1.7-2.7 2.5-1.5 0.7-4.1-1.9-1.9 0.3-2.2 1.5-2.9 0.8-0.2-0.4-3.2 1-2.1 0.2-1.3 1.3-4.7 0.7-1.4-0.6-1.5-1.7 1-2.2 1-0.8 1.7-1.4 2.1 0.1 2.2-0.6 0.6-0.6 1.1-0.3 1.4-1.4 1.3-0.3 1.6-1.1 1.5 0 0 0.3 2.7-0.8 0.9 2.2 3.9-1.3 1.9 0.6 4.3-0.9 3.1 2.4z" id="SK" name="Slovakia">\n </path>\n <path d="M314.5 206.5l-5.2 1.7-2.2 2.6-2.2 0.6-1.2 1.8-1.9-0.1-1.1-1-1.6 1-3.5-0.2 1.6-0.6 0.5-2.7 2.7-3.1 3.9 0.5 3.5-1.5 4.6-0.1 1.7-1.1 0.8 0.1-0.4 2.1z" id="SI" name="Slovenia">\n </path>\n <path d="M450.7 88.1l-9.1 1.6-8.3 4-3 3.5-11.7 4.6-13.7 5-11.6 8.3-0.8 4.1 1.2 3.3-10.7 6.8-6.1 1.4-11.2 10.1-7.9 5.7-5.2-0.6-7.1 4.9-5.8 0.3 3.8-5.8 2.5-6.9 4.8-8.5 5.4-3.5 7.9-4.1 8.6-6.9 0.2-3 7.9-7.8 8.8-5.4 4.2 0.1 4-2.3 0.6-2 15.5-8 11.2-6.2 7.3-4 4 0 4.7-3 6.9 0.8 4.7-3.6 2.8-0.2 2.6 2.7 2.4 3.8-9 8.6-0.8 2.2z" id="SE" name="Sweden">\n </path>\n <path d="M336 676.3l1.5 2.9 1.2 2.9-0.4 2.9-3 0.7-4.3-3.5-0.6-2.3 0.9-2.4 0.1-1.9 1.5-0.5 3.1 1.2z" id="SZ" name="Swaziland">\n </path>\n <path d="M389.1 291.2l-13.1 6.9-5.2-2.5-0.1-0.1 1.1-1 0.8-2.6 2.7-3.6 3.8-2.4 0.1-2.6-2.3-0.3 1.4-5 2.4-2.7 2-1.4 2-1.4 1.8-3.6 1.2 1.2 6.7-1.8 2.3 1.2 4.5 0 7.1-2.4 2.9 0.1 6.5-1-4.4 4-3.5 1.6-1.3 4.8-5 7.8-14.4 6.8z" id="SY" name="Syria">\n </path>\n <path d="M282.8 380.9l-4.2 25.9-4.9-0.5-3.3 4.8-2.1 4 1 1.5-2.2 2 0.3 2.7-1.8 2.7-0.9 2.4 2.1-0.4 0.8 2.5-0.3 3.8 1.9 1.9-0.3 1.6-3.7 1.1-3.2 2.7-4.8 7-5.6 3.1-5.5-0.4-1.7 0.6 0.4 2.2-3.2 2.3-2.6 2.6-7.4 2.4-1.3-1.4-1-0.2-1.1 1.7-4.8 0.5 1-1.8-1.4-4.4-0.6-2.7-2.4-1.1-3-3.8 1.5-3.1 2.5 0.7 1.7-0.5 3.2 0.1-2.5-6 0.7-4.3 0.1-4.3-1.7-4.2 1-3-3.6-0.2 0.6-4.2-2-2.4 3.8-8.5 8.3-6.2 1.9-8.4 4.8-13.2 1.8-2.8-1.9-2.2 0.3-2.1-1.8-1.7 0.8-10.1 6.4-3.6 19.8 12.5 20.1 12.4z" id="TD" name="Chad">\n </path>\n <path d="M143.4 436.8l-1.2 3.4 1.6 1.9 1.7 2.3-0.1 3.2 1 1.3-1.6 14.9 1.1 4.5-4.7 1.4-1.1-2.3-1.2-4.1-0.2-3.2 1.7-5.9-1.2-2.4 0-5.1 0.5-4.7-2-3.4 0.7-2 5 0.2z" id="TG" name="Togo">\n </path>\n <path d="M740.2 415.5l-5.3-1-7.4 1.3-4 5.4 1 7.8-5-3-4.9 0.2 1.1-5.2-5 0.1-0.8 7.1-3.5 9.5-2.1 5.8 0.3 4.7 3.7 0.2 2.1 5.9 0.9 5.7 3.1 3.7 3.4 0.7 2.9 3.4-1.9 2.7-3.8 0.8-0.4-3.4-4.6-2.8-1 1.1-2.2-2.5-0.9-3.2-3-3.7-2.6-3-1.1 3.8-1-3.6 0.8-4.1 1.9-6.2 3-6.7 3.4-6.1-1.9-5.9 0.2-3-0.4-3.7-3.5-5.1-1.2-3.3 2-1.2 2.5-5.6-2-4.3-3.3-4.8-2.3-5.7 2.5-1.2 3.1-7 4-0.3 3.5-2.8 3.3-1.5 2.3 2 0.1 3.9 3.8 0.3-1.9 6.9-0.3 5.8 6.2-3.9 1.7 1.2 3.3-0.2 1.3-2.3 4.2 0.4 4 5.3-0.1 6.4 4.3 5.7-0.5 5.5-2 3z" id="TH" name="Thailand">\n </path>\n <path d="M577.5 246.7l-2.6 2-5.4-1.1-1.8 3.7 6-0.5 5.8 2.1 10.4-1-0.5 6 2-0.6 2.8 1.4-0.9 2.6-0.3 3.7-5.5-0.1-3.6-0.4-4.1 2.9-2.6 0.6-2.2 1.4-1.6-2.1 2.1-5.5-1.5-0.3 1.2-2-2.5-1.5-3 2.3-1.3 2.6-1.1 1-3.2-0.2-2.6 3-1.4-1.3-4.5 2.1-1.4-0.8 5-6.5 0.4-4.8-3.4-1.6 2.3-2.8 4.3 0.3 3.7-3.6 3.1-4.1 7.6-1.5-2.1 3 0.1 1.7 2.3-0.1z" id="TJ" name="Tajikistan">\n </path>\n <path d="M547.6 265.3l-1.6-0.2-2-1.7-1.5 2.3-4.9 1.3-2.7 5.1-3.7 2-4.5 1-2 2.9-4.4 0.9-4.7-2.5 1.2-5.4-3.9-0.3-4.3-5.7-4-0.7-4.8-3.3-3.6-0.6-2.7 1.2-3.6-0.2-5.1 3.7-5.1 1.3 0.6-4.6 3.3-6.8-3.3-2.2 3.1-4.4-3.3-0.4 3.4-5.4 4.3 1.6 5.5-2.1-2.2-3.8 0-3.7-4.9 1.6-2.5 4.7 0.1-4.1 3.3-2.2 6.5-1.3 2.7 1.8 1.6 5 2.8-0.3 6-0.1 0.4-3.2 5.4-2.2 6-3.8 5.6 3.4-1.5 5.2 1.5 1.3 5.8-0.3 1.3 1.2 0.1 6.6 4.5 4.5 2.4 3 4.5 3.2 6.3 2.8-1.4 3.9z" id="TM" name="Turkmenistan">\n </path>\n <path d="M852.5 569.3l-0.1-1.9-0.6-1.3 0.7-1.5 4.9-1.5 3.9-0.2 1.8-0.8 2.2 0.8-2.1 1.7-5.9 2.9-4.8 1.8z" id="TL" name="Timor-Leste">\n </path>\n <path d="M239.6 292.8l-2.5 5-3.4 1.8-2.6 2.1-4.8 2.5-0.5 2.7-1.5 2.8-3.3 1.5 2.4-11.7-2.2-2.6 0.6-1.6-2.7-3.9 1.7-4.9 5.1-3.6 3.8-5.3 2.3-6.2 2.7-3.4 7.2-2.6 3.4 0.8-1.8 3.3 5.7-2.4-0.2 1.2-4.3 3.2-1.5 3 1.1 1.6-3.4 5.6-5.1 3.3-0.6 3.6 2.8 0.1 0 3.1 1.6 1z" id="TN" name="Tunisia">\n </path>\n <path d="M425.6 238.4l5.8-0.4 3.5 3.2-0.1 2.3-1.9 3.1 3.2 1.6 1.3 1.9-4.5 1.9-1.4 7.4-1.9 2 0.9 5.2-3 1.1-1.2-1.7-5.9-0.8-2.7 1-6.5 1-2.9-0.1-7.1 2.4-4.5 0-2.3-1.2-6.7 1.8-1.2-1.2-1.8 3.6-2 1.4-2 1.4-0.8-2.9 3-2.5-3.5 0.6-3.9-1.5-5.2 3.7-8.5 0.8-2.9-3.5-5.7-0.2-2.4 2.7-4 0.7-3.7-3.4-6 0.1-0.2-6.5-2.3-3.5 5.1-5.1-1.9-3.1 9.1-6.2 8.2-0.2 4.8-4.9 9.6 0.8 8.5-4.1 7-1.9 8.8-0.1 6.8 4.5 6.3 2.5 6.7-1 4.2 0.6 7.8-3.3z m-83.8 4.5l1.6-0.7 3.8-4-1.6-1.7 6.5-2.1 4 0.9-0.7 2.5 3.4 2.1-1.8 1.5-6.4 0.4-3.3 2-6.2 3.5-0.1-3 0.8-1.4z" id="TR" name="Turkey">\n </path>\n <path d="M833.2 360.1l-2.6 5.3-2.7-5.5-0.4-4.8 3.6-6.4 4.7-4.9 2.5 1.9-1.2 3.9-3.9 10.5z" id="TW" name="Taiwan">\n </path>\n <path d="M316.6 514.9l-0.1 4-1 4.5 1.7 2.5 2.5-1.4 3.3-0.4 0.8 0.7 3.2-1.6-2.3-2.2 1.8-2.9 2.8-2.9 21.1 13.2 0.6 3.8 8.5 6.5-2.3 8 0.5 3.7 3.8 2.3 0.3 1.7-1.3 4 0.4 1.9-0.1 3.1 2.3 4.1 2.8 6.4 2.2 1.5-4.2 3.7-6 2.6-3.4-0.2-1.9 2-3.9 0.2-1.4 0.8-7.1-1.8-2.1 0.2 0-0.1-2.1-2.5-1.1-6.8-3.3-3.5-0.3 1.3-1.2-1.8-5.7-1.2-3.4-2-3.8-1.1-2.3-1-0.3-0.2-3.4-6.7-0.7-4-4.9-4.4 1.2-2.5-1.2-2.6 0-2.8-1.1-0.9 0.1-2.8 0.6-0.1 2-2.3 2-3.4 1.4-1.4-0.1-2.1-1.3-1.5-0.4-2.5 1.6-0.9 0.2-3.8-2.3-3.7 2-0.7 6.3 0z" id="TZ" name="Tanzania">\n </path>\n <path d="M329.5 480.6l2.6 4.5 0.5 3.3 2.3 7.5-2.2 4.7-2.9 4.3-1.6 2.7 0 0.3-0.3-0.5-2.9-1.2-2.5 1.5-3.6 0.9-2.6 3.8 0.3 2.5-6.3 0-2 0.7-3.4 2.1-1.4-0.7 0-4.9 1.3-2.5 0.3-5.2 1.3-3 2.2-3.4 2.3-1.8 1.9-2.3-2.3-0.8 0.6-7.7 2.5-1.7 3.5 1.4 4.7-1.5 4.1 0 3.6-3z" id="UG" name="Uganda">\n </path>\n <path d="M376.4 214.2l-1.7-1.1-3 1.1-1.6-1.2 1.7-0.7 2.2-2.2 2.6-2 0.3-1.2 1.4-0.5 0 0.9 2.9 0.2 1.6-0.5-0.6-0.6 1-1-0.8-1.6 0.8-2.6-1.2-1.1 1.7-2.1-1.2-1.7-1.9-0.3-2.5-1.9-3.7 0.6-1.8 0.9-2.2 0-2.2 1.5-4.1 0.6-2.4 1-1.3-1.6-3.2 0-2.7-0.7-3.1 1.4 0.8-1.7-1.7-1.8 2.7-2.5 2.6-1.7 0.8 0.4 0.7-2.8 8.2-5.3 3-0.7 1.8-1.7 1.5-5.5 2.5-0.3 4-1.6 3.9-0.2 4.6 0.5 4.4 1.5 3.8 0.1 1.2 0.9 2.6-1.1 0.3 1.5 4.6-0.3 1.6 0.6 2.5-3.1 2.5-1.4 4.5-0.4 1.6 0.3 2.3-1.4 1.2 0.3 5.6-0.6 0.6 3.5-2.1 1.3-0.9 1.9 3.8 0.3-0.1 2.7-0.9 1.3 4.9 2.2 4.4-1 1.3 2.9 2.9-0.1 6.1 2.1-1 1.8-4 3.4-0.9 3.4-2 2.2-5.2 0.4-3.6 1.8-1.8 2.8-4.3 0.5-4.5 2.1-5 0.3-5.7 2.4-2 4 1.7 1.5 5.4-0.4-2.2 2.3-6.3 1.1-9 3.7-2.2-1.3 2.8-3-4.5-1.9 1.6-1.2 6.1-2.1-0.6-1.5-7.1-1.6 1.1-2.4-5.2 0.8-4 3.5-6.7 4.7z" id="UA" name="Ukraine">\n </path>\n <path d="M1847.2 727.9l-4.4 4-8 3.7-3.3-1.3-3.3 0.7-3.6-2.8-3.8 0.2-1.5-3.6 2.4-4.2 1.9-1.5 3-6.4 4.4-6.7 3.6-5.2 3.9-0.7 3.4 5 2.1-0.2 3.8 4.2 2.6 3.6 1.1 4.4-3.9 3.1-0.4 3.7z" id="UY" name="Uruguay">\n </path>\n <path d="M581.7 233.6l1.3 0.7-5.8 4.2 3 2.4 4.3-1.6 5.1 3.4-8.3 4.6-3.8-0.6-2.3 0.1-0.1-1.7 2.1-3-7.6 1.5-3.1 4.1-3.7 3.6-4.3-0.3-2.3 2.8 3.4 1.6-0.4 4.8-5 6.5-3.7-1.3-2.9-0.1 1.4-3.9-6.3-2.8-4.5-3.2-2.4-3-4.5-4.5-0.1-6.6-1.3-1.2-5.8 0.3-1.5-1.3 1.5-5.2-5.6-3.4-6 3.8-5.4 2.2-0.4 3.2-6 0.1 10.1-23.7 14.9-3.7 0.7 0.5 6 4.6 3.2 2.4 2.5 5.8 6.5-0.9 9.1-0.5 4.4 4.6-2.9 6.5 2.5 0-0.8 5.3 6.6 0.2 0.3 3.1 2-0.1 4-4.6 8.5-4.5 3.4-1.2z" id="UZ" name="Uzbekistan">\n </path>\n <path d="M1855.1 453.9l-4.2 3.8-0.3 2.3 2.1 2.5-1.3 1.2-3.5 1 0.4 3-1.4 1.8 4.2 5 0.8 1.8-1.9 2.5-6.3 2.4-4 1-1.6 1.5-4.7-1.6-4.3-0.8-1 0.6 2.7 1.7-0.1 4.3 1 4.1 4.9 0.6 0.4 1.4-4.1 1.8-0.6 2.8-2.3 1-4.3 1.5-1 2-4.5 0.5-3.2-3.5-2-6.5-1.6-2.2-2.1-1.5 2.8-3.2-0.3-1.5-1.7-1.9-1.4-4.3 0.1-4.7 1.2-2.2 0.8-3.5-2.1-1.1-3.2 0.8-4.2-0.4-2.2 0.7-4.5-5.6-3.4-0.8-7.3 0.6-1.5-2.3-1.5-0.5-0.3-1.4 0.5-2.4-0.7-2.6-1.3-1.4-1-3-3-0.4 1.2-3.8 0.2-4.7 1.4-2.4 2-1.9 1.1-3.2 3.5-1.1 0 1.5-3.2 0.8 2.2 2.9 0.3 3.4-2.1 3.8 2.6 5.2 2.4-0.5 0.9-4.7-2-2.2-0.9-5 6.9-2.6-1.2-3.1 1.7-2 2.6 4.5 4.1 0.2 4.1 3.6 0.5 2.1 5.1 0.1 6-0.7 3.6 2.9 4.5 0.8 3-2-0.1-1.6 7-0.4 6.8-0.1-4.6 1.9 2.3 3.1 4.6 0.5 4.7 3.2 1.4 5.2 3-0.2 2.4 1.6z" id="VE" name="Venezuela">\n </path>\n <path d="M759 368.1l-7.9 5.6-5.1 6.1-1.5 4.5 3.9 6.9 4.8 8.5 4.9 4 3.2 5.2 2.1 12.1-1.3 11.4-4.9 4.3-6.7 4.2-4.8 5.4-7.3 6-2-4.1 1.8-4.4-4.1-3.7 5-2.6 6-0.5-2.3-4 9.7-5 1.1-7.8-1.1-4.3 1.3-6.5-1.2-4.6-4-4.5-3.2-5.7-4.3-7.7-6.5-3.9 1.8-2.3 3.7-1.8-1.8-5.6-6.9-0.1-2.1-5.9-2.9-5.1 3.1-1.6 4.5 0 5.5-0.7 5-3.5 2.6 2.5 5 1.1-1.1 3.8 2.5 2.6 5.5 1.7z" id="VN" name="Vietnam">\n </path>\n <path d="M445.4 400l-4.3 1.7-1.5 2.9-0.4 2.2-6 2.8-9.4 3-5.6 4.6-2.6 0.4-1.6-0.4-3.7 2.7-3.7 1.2-4.9 0.4-1.4 0.3-1.5 1.8-1.5 0.4-1.1 1.7-2.8-0.2-1.9 0.9-3.9-0.3-1.1-3.8 0.6-3.6-0.7-1.9-0.5-4.8-1.3-2.7 1.1-0.3-0.1-3 0.8-1.2 0.2-2.8 2.7-2.1-0.1-2.8 1.9-3.2 2.1 1.7 1.6-0.5 6.6-0.2 0.9 0.7 5.4 0.6 2.2-0.3 1.2 2.1 2.8-1 5-6.9 5.7-2.9 16.7-2.5 2.9 10.7 1.2 4.6z" id="YE" name="Yemen">\n </path>\n <path d="M314.6 564l0.3 0.2 2.3 1 3.8 1.1 3.4 2 2.9 2.9 1.9 5.5-0.8 1.8-0.6 5.2 1.6 5.4-1.5 2.3-1 6 3.2 1.7-16.6 5.4 1.3 4.6-4.2 0.9-2.9 2.6-0.3 2.2-1.9 0.6-4.1 5.3-2.4 4.2-1.9 0.2-1.9-0.8-6.5-0.7-1.1-0.5-0.1-0.5-2.5-1.5-3.8-0.4-4.3 1.5-4.5-4-4.7-5.4-2.8-20.7 11.9 0.1-0.7-2.2 0.5-2.5-1.3-3 0.3-3.2-0.8-2 2 0.2 0.5 2 2.7-0.1 3.6 0.5 2.3 3 4.6 0.9 3.3-2 1.7 3.4 4.4 0.9 2.5 2.7 2.7 3.6 4.4 0.1-1.3-7-1.4 1.1-4.3-2.5-1.7-1.1 0.1-6.6 0.3-7.7-1.5-2.8 1.3-4.2 1.4-0.8 7.7-1.1 1 0.3-0.2 1.4 1.9 0.6 1.4 1.3 0.9-0.4-0.5-1z" id="ZM" name="Zambia">\n </path>\n <path d="M327.4 653l-3.1-0.7-1.7 0.8-2.9-1.1-2.3-0.1-4.2-2.9-4.5-1-2.4-4.1-0.5-2.3-2.5-0.7-7.7-7.2-2.4-3.7-1.4-1.2-3.1-5.2 6.5 0.7 1.9 0.8 1.9-0.2 2.4-4.2 4.1-5.3 1.9-0.6 0.3-2.2 2.9-2.6 4.2-0.9 0.7 2.4 4.7-0.1 2.8 1.4 1.5 1.6 2.8 0.5 3.3 2.1 1.3 8.2-0.3 4.5 0.6 4.8 1.2 2 0 3.8-0.7 0.6-0.7 4.7-4.6 7.4z" id="ZW" name="Zimbabwe">\n </path>\n <path d="M1613.8 6.3l-6.2 0.1 3.6 0.7 4.3-0.1 138 68.8-2.1 0.4-4.6 0-1.2 2.2 2.9 5.9-3.6 3.9-2.7 0.3-3.8 1.4-4.4 1.3 1.1 3.5 5.4 4.1 2.8 3.8-1.2 4.6 7.6 4.6 4.1 4.9 4.8 5.7-6 0.4-12.6-4.8-9.2-0.1-8.3-3.2-9.9-5.7-16.6-7.3-7-3.7-7-5.2-12.7-5.2-3.9-4.2-5.4-2-4.4-6.5 3.5-2-1.6-2.3-5.1-4.3-2 1.9-1.2 0.8-2.6 0.8-7.6-1.8-5.4-3.6-2.5-2.9 3.7-0.1 10.4 1.4-12-3.4-6.3-1.8-2.9 0.8-5.4-1.4-2.9-4.9-5.4-1.9-8.8-3.6-13.6-5.5-8.3-2-3.6-2.1-15.4-2.9-8.7-0.4-9.8 0.2-8.6 0.4-7.1-1.6-11.8-3.1 7.2-1.5 7.1-0.3-18.2-1.2-11.7-2-2.7-1.8 9.8-2.3 9.1-2.2-1.8-1.6-12.7-1.6-0.3-1.7 6.2-3 4.2-0.4-5.3-1.9 5.9-1 9.3-0.6 10.5-0.1 6.5 1.3 4.2-2.2 11.6 1.5 5.6 0.3 10.2 1.3-13.3-2.2-3.5-1.6 5.9-2.3 12.3 0.2 0.9-1.4 10.9-0.3 17.9 0.3 13.4 5z" id="GL" name="Greenland">\n </path>\n <path d="M323.4 233.8l-1.4 0.2-3.6 1-1 1.3-0.7 0 1-2.3-0.8-0.7-0.1-1.7 1.8-1.5 1.5-0.4 2-2.2 1.2-0.3 0.2 0.9 0.7 0.4 0.1 1 0.7 0.3 0.3 1.2 0.7 0-1.5 1.5-1 0.8-0.1 0.5z" id="XK" name="Kosovo">\n </path>\n <path d="M327.4 653l4.5 9.1 2.4 4.6 0.6 7.3 1.1 2.3-3.1-1.2-1.5 0.5-0.1 1.9-0.9 2.4 0.6 2.3 4.3 3.5 3-0.7 0.4-2.9 4.2 0.1-0.1 4.7 0.8 5.4-0.5 2.9-2.8 3.3-0.8 1-1.3 3.3-0.5 3.3-1.5 4.7-3.8 6.7-2.5 3.9-2.9 2.9-4.7 2.6-2.7 0.3 0 1.8-3.7-1-2.1 1.3-6.5-1.3-2.9 0.8-2.4-0.3-4.5 2.5-4.2 1.1-2.3 2.4-2.4 0.2-3.3-2.3-1.9-0.1-3.6-2.9 0.1 0.9-1.5-1.8-1.5-3.8-3.6-4.4 1.3-1.1-2.1-5-5.9-6.1-4.8-5.5 0-0.1-6.9-8.4 1.6-3.2 2.8 1.8 1.8 2.7 2.7 0.5 3.8 1.2 2.9-0.4 3.8-3.4-6.7-24 1.7 1 4.9 6.2 0.6 3.9 1.9 2.3 3.8-0.6 1.9-2.9 2.2-2 0.5-3.1 2.4-1.5 2.5 0.8 3.1 1.8 4.7 0.3 3.2-1.5 0-2 0.3-3.1 2.9-0.6 1.1-2.4 1-4.3 4-4.9 7.1-4.8 2.3 0.1 2.9 1.1 1.7-0.8 3.1 0.7z m-3.3 53.9l0.3-2.1 2.8-1 0.2-2.1 0.7-3.2-2.5-1.9-3-2-2.2 1.3-2.2 2.5-1.6 4.1 5.8 5 1.7-0.6z" id="ZA" name="South Africa">\n </path>\n <path d="M1116.3 774.2l0.9 2.7 4-2.6 1.3 2.7-0.3 2.7-2.3 3-3.9 4.7-2.9 2.6 1.5 3.1-4 0.1-4.6 2.4-1.8 4.2-3.6 6.4-4.3 2.9-2.7 1.8-4.7-0.1-3.1-2.1-5.6-0.5-0.6-2.3 3.1-4.8 7-6.3 3.5-1.2 3.9-2.4 4.8-3.4 3.5-3.3 2.7-4.8 2.2-1.7 1.1-3.6 4-2.9 0.9 2.7z m11.4-30.8l3.2 6.8 0.6-4.4 2.2 1.7 0.4 5 4.1 2.1 3.5 0.5 3.3-2.5 2.7 0.8-2 5.7-2 3.8-4-0.1-1.7 1.9 0.2 2.8-0.9 1.2-2.4 3.5-3.1 4.4-4.3 2.6-0.8-1.7-2.1-1 3.7-5.3-1.4-3.5-5.4-2.6 0.3-2.3 4.1-2.3 1.4-5 0.1-4.2-1.8-4.3 0.3-1.2-2.4-2.6-3.8-5.8-1.9-4.6 2.1-0.5 2.7 3.6 4 1.7 1.1 5.8z" id="NZ" name="New Zealand">\n </path>\n <path d="M1686.1 848.6l-12.4 13.8 5.2 0 2.7 0.2-3.9 2.5-5.9 1.9-2.1-0.2-2.4-0.5-1.8-1.8-4.2-0.9-2.9-3.5-2-3.3-0.8-6.9 2.9 1.3 3.3 4.1 4.5 2.2 4.9-2.8 5.3-4.2 6.7-2.6 2.9 0.7z m111.2-192.5l0.3 1.6-3.6 6.8-6.9 3.2-2.8 10.8-1.8 2.1 0.9 2.6-5.3 4-5.6 6.1-4.1 5.9-1.8 6.3-6.1 6.7-2.2 11.3 0.9 1.1-2.7 6-6.1 6.4-2.5 5.4-6.1 4.2-3.1 6-1.7 6.3-4.5 2.4-4.6 5.7-5.1 6.6-3.9 7.9-2.9 1.3-3.5 7.4 0.8 2.5-3.5 2.6 1.5 1.3-1 2.4-3.1 1.3-1.9 3.7-7.6 8.4-6.5 5.5-1.7 3.2-4.5 4-5.9 2.8-4.6 6.6 0 2.3 3.6-0.4-3.8 4.7-1 3.6 11.2 0.9 3.7 0.9-4.3 0-3.7 1.5-6.3 2.3-5.8 5.8-2.2 0.1-3.7-2-1.9-4.3-3.2-3.6 1.7-3.9 4.3-3.7 0.7-4.2 7.2-10.7 6.5-6.1 8.7-4.9-6.5-1.9 8.6-5.6 8.7-10.6 4.3 2.2 11.2-13.3-2.5-1.7-6.6 8.1-2.7-1 7.3-9.1 8.8-12 4.9-4.4 1.9-6.3 3.3-7.3 2.4-0.2 8.4-10.5 8.5-10.4 6.6-9.7 2.7-9.8 3.7-5.3 2.2-8.1 5.9-7.9 4.8-12.6 5.3-13.5 5-14.5 1.8-10.7 0.7-9.1 3.3-1.7 2.1-3.3 1.9 4.4-0.2 4.7 2.4 2.8-3.1 6.2 1.5 7.3 0.2 9 4.3-0.9z" id="CL" name="Chile">\n </path>\n <path d="M282.1 179.3l-1.5-1.4-0.8-2.8-5.7 1.3-3.2-0.5 4-1.7 12.4-9.1 9-2.6 3.9 0.1-1 2.1-6.2 5.7-3.2 2.4-3 0-4.7 6.5z" id="NL" name="Netherlands">\n </path>\n <path d="M150.1 267l-3.2 1.7-2.3-0.9-3.2 0.7 3.8-5 1.9-4-2-0.6 0.3-2.5 3.1-4.2 3.6-2.4 2.1-2.6 3.7-3.9 1.8-2.7 0.6-2.3 1.3-2.2 3-1.6 2.9-0.9-1 3.1 3.1 0 1.5-0.8 2.9 0.2-0.8 3.2-3.6 1.8-3.5 5-1.5 1-2.2 3-2.6 0.6-0.3 3.8-4.1 4.3 0.7 1.9-1.8 1.8-3.4 2.4-0.8 2.1z" id="PT" name="Portugal">\n </path>\n <path d="M963.5 179.7l4.7 11.1-7.4-2-3.4 9.1 4.7 6.5-0.3 4.4-3.7-3.8-3.5 4.9-0.8-5.3 0.9-6.2-0.3-6.8 1.3-4.8 0.6-8.4-2.6-6.1 0.9-8.5 4.6-2.9-1.8-2.8 2.2-0.9 1.1 4.1 1.4 5.9-0.4 6.2 1.8 6.3z m-582.2-22.3l-9 0.1-5.3-0.7 3.3-2.7 8.3-2 4.2 1.1 1.3 1-1.9 1.7-0.9 1.5z m735.8-99.8l3.4 0 6.3 1.5-0.1 0.7-3.8 1.3-9.7 0.6-1.2-1.7 5.1-2.4z m-147.4-8.8l-6 0.1-8.1-0.6-0.7-0.3 4-2 4.9-0.5 5.5 2 0.4 1.3z m28.2-9.6l-4.5 2-6.2-0.4-7.1-2 1-1.7 7.1 0.8 9.7 1.3z m-21.7-2.4l-3.3 3.8-14.2-0.2-6.6 1.2-7.2-3.3 2.5-3.4 5.2-1 10 0.2 13.6 2.7z m-359.5 25.2l-2.8 0.5-12.8-0.7 1.1-2.4-6.1-1.4 2.1-2.9 5.2-1.1 2.6-2.9 12.3-4.4-3-0.6 13.9-4.6 1.4-2.3 11.4-2.6 16-3.3 13.6-0.9 8.3-1.8 8-0.7 0.7 2-4.1 1.5-15.9 2.5-14.1 2.4-16.9 4.9-10.7 5-11 5-3.2 4.4 4 4.4z m277.8 171.9l-0.6-1.1 0.2-3.2 2.7-0.2 1.4-7.6-0.9-5.5 4.7-2.2 6.1 1.1 4-6.2 2.3-7 2.1-2.3 3.1-5.7-8.5 1.8-4.6 2.5-7.7 0-1.4-5.9-5.5-4.5-8.4-2-1.1-6.2-1.2-3.8-1.5-2.7-2.1-6.3-3.9-2.3-7-1.8-6.5 0.2-6.2 1.1-4.6 3.1 2.4 1.4-0.5 3.5-3.1 2-5.7 6.6-0.4 2.8-7.7 4-5.6-2.4-6 0.5-2.2-2.1-2.9-0.7-8.2 4.5-6.8 1-4.9 1.6-6.1-1.1-4.7 0.1-2.3-3.2-4.1-3-4.8-0.9-6.5 0.9-5 1.1-6.4-2.6 0.4-4.7-5.4-1.6-4.2-0.8-4.8-2.5-7.1 6.4 1 3.7-6.2 4.4-6.7-1.6-4.9-0.2-2.4-2.9-5.2-0.1-3.7-2-8.5 3-11.3 5.4-5.7 1.1-2.1 0.5-1.3-3.8-6.8 0.8-1.1-2.7-3.1-1.2-1-3.6-2.3-1.1-7.7 1.6-5.4-3.6-4 3.3-4.2-15.9-3.9-4.7 2.6-2-14.8 5.8-4.9 0.4 2.1-3.4-5.2-2.1-5.8 1.5 1.8-6.4-7.9-1.3-5.7 2.6-13.3 2.2-3.1 1.6-19.3 2.1-3.4 2.1 1.2 4.3-5.6 1.6 0 1.7-6.4 3 5.8 4.3-2.8 3-6.8-0.3-2.4 1.9-4.7-3.3-7.9 0.1-6.7 2.7-4.5-2.6-8.4-4.3-7.8 0.2-14.1 6.8-3.3 4.6-3-3.7-7.9 6.9 0.7 1.3-5.5 4.8 2 4.3 3.8-0.2 1.1 4.3-2.2 3.3 2.1 1-4.2 3.8-5.5 1-8.4 6.6 1.7 6.1-2.6 4.3 2.2 7.6-4.3 2.6-1.6 1.6-2.1-0.4-1.9-3.9-1.3-0.2-2.6-1.5-0.4-2.7-4.2-1.3-3.7 1-0.3-1.2-5.6-3.1-7.1-1-3.8-1.1-1 0.7-3.8-5.4-4.6-2.4-2.4-3.8 4.3-1 7.1-5.3-1.4-2.5 8.9-2.6 0.7-1.4-5.2 1 1.8-2.8 3.6-1.8 5.2-0.4 2-2.2 0.9-3.4 4-3.4 1-1.8-6.1-2.1-2.9 0.1-1.3-2.9-4.4 1-4.9-2.2 0.9-1.3 0.1-2.7-3.8-0.3 0.9-1.9 2.1-1.3-0.6-3.5-5.6 0.6-1.2-0.3-2.3 1.4-1.6-0.3 1.6-4 0.4-2 1.4-0.6 3.7 0.2 2.9-1.3-0.2-1.7-2.4-1.1 1.1-1.1-1.1-1.1 0.1-4.1 2.3-1.6 1.8-2.9-3.5-1.5-3.1 0.8 0.5-1.5-3.7-1.6 1.4-3.6 2.1-2.9-1.1-1.4 3.6-1.9 3.5-5.6 6.3-3.5 0.2-1 8.1-3.3-2.3-2.9 16.6-7.5 7.2-3.4 4.4-3-2.9-4 5.3-3.7 0.2-4.3 7.6-4.9 1.4-6.4 8.2-4.2-2.6-3.7 4.6-3.9 3.9-0.5 9.4-2.2 6.3-1.9 3.4 3.3 10.1 1.3 9.8 6.3 0.8 2.6-3.1 3.8-7.4 2.9-8.4 1.5-15.2-4.3-3.9 0.7 3.1 4.2-2.2 2.6-5.1 5.9 4.1 1.7 2.1 1.5 3.1-2.8-0.5-2.4 4.8-2.2 7.4 3.6 4.9-1.4 0.8-4.2 15-5.6 3.6 0.4 2.3 1.9 5.9-3.9-0.6-3.3 5.1-3.3 0-3.5 10.2 1.8-0.4 3.1-5.9 0.7-2.7 3.1 1.7 1.9 7.6-1.2 4.1-3.5 11.1-2.7 18.7-4.7 3 0.2-7 3.4 4.8 0.6 4.5-1.9 8-0.2 8.1-2.3 2.2 3.4 7.6-3.7-1.9-3.2 3.6-1.8 10.9 1.7 4.5 1.7 10.6 6.3 4.9-2.9-2.2-2.9 0.7-1.2-4.6-0.5 3.3-2.6 0.9-4.2 1.2-1.7 11.3-4.8 6.4-4.8 3.8-1.1 9.5 1.4-1.4 2.9-7.1 4.3 1.3 1.7-1.3 3.8-6.1 7.5 2.3 3.3-4.2 3.7-13.5 8 4.3 0.8 3-2 5.7-1.4 2.9-2.8 5.3-2.7-0.4-3.1 4.3-3.7-4.2-0.4 1-3.1 7.1-5.4-2.2-4.4 9.8-3.5 1.8-3.8 2.1-0.1 0 2.9-5.3 5.1 3.7 1 0.8-3.8 8.2-2.1 8.6-0.3 5.4 3-0.6-4.4 3.5-5.5 7.6-1.1 9.3 0.3 8.9-0.7-1.3-2.7 6.8-3.3 4.5-0.2 9.2-2.5 10.6-0.7 2.2-1.3 10.3-0.5 2.4 1.1 10.1-2.6 6.9 0.1 2.3-2.2 4.9-2.1 9.9-1.9 5.5 1.5-5.8 1.2 8.1 0.8-0.2 2.4 4-1.2 11 0.1 7.5 2.4 2.2 1.9-2 2.6-4.9 1.5-11.4 2.8-3.6 1.5 4.6 0.8 5.2 1.3 4-1 0.7 3.3 2.2-1.3 6.6-0.9 12.4 0.9 0.2 2.4 16.4 0.8 1.3-4 8.1 0.9 6.3 0 5.8 2.7 1.1 3.4-2.8 2.2 4.2 4.2 6 2.2 4.9-5.6 6.1 2.4 7.1-1.5 7.7 1.7 3.1-1.5 6.6 0.7-2.4-4.9 5.5-2.3 35.9 3.4 3.5 3.2 10.7 4.1 16.4-1 8.2 0.8 3.6 2.3-0.2 3.9 5.3 1.6 5.4-1.1 7.4-0.2 7.9 1.1 7.8-0.6 8.1 4.9 4.9-1.8-4-3.5 1.4-2.4 13.4 1.5 8.6-0.3 12.5 2.6 6.5 2.4 11.4 4.2 12.7 5.5 0.6 3.5 3.3 1.4-2.2-4.1 11.9 0.9 10.1 5.3-3.5 2.4-6.9 0.6 1.5 5.6-1.4 1.2-4.1-0.2-3.9-2-6.3-1.6-1.7-2.5-4.7-1-4.7 0.8-2.8-2 0.4-2.1-4.9 1.3 2.6 2.7-1.9 2.5-5 2.5-5.8-0.4 4.7 3 3.7 4.8 2.4 1.6 1 2.4-0.8 1.5-8.6-1.3-11.7 4.5-3.9 0.6-6.2 4.2-6 3.6-1.3 2.7-7.1-4.1-11.4 4.7-2.3-2.2-4.2 2.5-6.2-0.8-1.1 3.9-5 5.8 0.3 2.5 5.5 1.3 0.1 8.9-4.3 0.2-1.7 5.1 2.2 2.7-8.2 3.1-1.2 7.1-7.2 1.5-1.1 6.3-6.9 5.8-2-4.3-2.4-9.1-3.2-13.7 2-8.4 3.8-3.6 0.1-2.9 7.2-1.3 7.8-7.6 7.4-6.1 7.8-4.7 2.7-8.3-5.4 0.5-2.2 4.8-11 6.5-4.2-7.3-11.6 2-11 10 4 3.6-10.3 1.6-7.2 0.6 0.3-4.3-7.2-0.9-5.7 2.9-14.1-1-15.3 1.8-15.9 11.7-19.5 14.4 7.6 0.8 2 3.9 4.6 1.4 3.3-3.1 5.3 0.4 6.6 6.8-0.1 5.3-4.2 6.2-0.8 7.5-2.8 10.1-8.2 9.2-1.9 4.4-7.4 7.4-7.5 7.4-3.6 3.8-7.2 3.7-3.3 0.1-3-3.1-7.4 4.7-1 2.1z m-64.4-210.5l-21.8 1.8 10.6-6.1 3.3-0.6 2.5 0.3 7.6 2.7-2.2 1.9z m-184.6-10.2l-5.6 0.6-3.6 0.3-1.5 0.8-5.2 0.7-2.4-1.1 4-1.3-7.7-0.1 8-0.8 5.4-0.1-0.9 1.2 3.5-1 4.3-0.7 3.9 0.9-2.2 0.6z m167.5 7.5l-8.3 0.6-9.2-1.4-4.7-1.7-0.3-3.2-4.2-0.9 11.5-2.9 8.3-0.9 5.3 2.1 5.2 4.2-3.6 4.1z" id="RU" name="Russian Federation">\n </path>\n <path d="M205.9 226.2l0.3 2.5 7.5 2.9 2.9-1.4 3.9 3 6.6-0.9-2.2 3.8-7.8 4.2-7.6 1.4-1.9 2.2-5.5 3.6-5.3 5.2-0.1 3.7-4.8 2.9-3.5 4.2-4.8 1.3-6.6 5-6.9 0.1-5-0.1-4.6 2.3-3.4 2.4-2.4-0.5-0.8-2.2 0.6-3.7-4.4-1.1 0.8-2.1 3.4-2.4 1.8-1.8-0.7-1.9 4.1-4.3 0.3-3.8 2.6-0.6 2.2-3 1.5-1 3.5-5 3.6-1.8 0.8-3.2-2.9-0.2-1.5 0.8-3.1 0 1-3.1-2.9 0.9-3 1.6 3.5-4.6 0-2.7 10.7-4.7 5.5 1.2 7-0.1 4.8 1.1 4.5-0.3 8.3 0.2z" id="ES" name="Spain">\n </path>\n <path d="M260.1 234.4l-4.8 5-1.6-1.4 1.5-4.3 2.6-2.4 5-2.4-2.7 5.5z m-33-2.1l-6.6 0.9-3.9-3-2.9 1.4-7.5-2.9-0.3-2.5 5.4-3.8 10.3-12.8-0.3-6.7-1.2-3.2-5.8-2.4 3.2-4.6 7.6-1.4 7.1 1.6 4.3-7.1 2.5 2.7 15.7-4.9 5.8-5.2 5.4-1.2-1.2 2.2 2.3 0.1 0.2 2.5 1 3 3-0.5 2 2.8 0.7 0.6 1.6-0.1 1.1 1.6 6.3 1.2-5.8 4.3-4 4.5-2.1 1.1-1.9-0.6-1 1.6-6.3 3.6-2.2 2.9 3.2-1-0.2 2.8-1.5 1.8-0.2 2.4-3.1 1.9-2.1 5 2.3 0.8-2.5 2.8-7.1 3.6-9.1-1.7-9 2-3.2 3.9z" id="FR" name="France">\n </path>\n <path d="M1302.7 384.2l-0.7 1.1-1.5-1 0-1.8-1.1-2.4 0.2-0.7 0.9-1-0.5-1.3 0.3-0.6 0.4 0.1 2.3 1.1 1 0.6 1 0.8 1.7 2.3-0.2 0.4-2 1.4-1.8 1z m-3.8-10.2l-1.9 0.5-1-1.4-0.7-0.5-0.1-0.4 0.5-0.6 2 0.6 1.6 1-0.4 0.8z m-4.1-3.4l-0.1 0.7-3.1-0.2 0.4-0.8 2.8 0.3z m-5.1-1l-0.3 0.4-0.4-0.1-2-0.2-0.8-1.5-0.3-0.3 1.5-0.9 0.5 0.5 1.8 2.1z m-9.9-4.3l-0.6 0.7-2-1.2 0.3-0.5 0.8-0.6 1.3 0.1 0.2 1.5z m323.5-168.4l-3.9 2.1-2 2.6-1.9 2.7 0.6 0.9 4.3-1.3 4.4 2.2 3-1.7 2.8-2 3.2-2.1 0.4 3.3 3.4 0.8 5.1 2.5 3.6-1.5 4.7-0.5 2.2 1.8 1.7 0.2 1.5 0.2 4.1 2.6-4.2 0.5-0.2 0-4.4-0.7-3.2 1.3-3.2 0.6-0.6 4.1-0.6 2.3 1.1 0.8 1.4-4.1 0.7-0.1 0.3 5 1.4 4.4 1.1 3.6 2.4 3.2 0.8 1.6 0.9 1.7 3.3 3.3 0.7 0.5 1.8-0.1 1-0.7 0.6-0.9 0.4-3.1-2.3-4.2-4-4-1.4-2.7-0.5-3.2 0.1-2.1 1.1-1.5 1.8 2.1-1-3.2 0.7-0.6-0.7-2.4 5.1 1.2 5.3 2.5 2.2 2.9 1.3 3-1.3 2.5 1.2 1.6 1.1 0.1 1.5-2.8 2.3 0.6 3.2 3.7 1.8 2.7-0.4 3.5 0.2 2.2-0.4 2.5 4 1.4 2.8 0.3 3.3-0.9 2.1-1.7 2.2-0.9 2.8-1.9 2.2-3.8-0.5-0.6-1.6-2 2-0.7 4.2 0.2 4.6 0.6 2.6-2.2-1.9-2.5-1.1-0.9 2.4-4.4 1.6-1.2 7.8 0 9.5 0-0.6-1.6 1.5-0.3 1.5-1-0.2-2.9-1.8-5 0.5-4.8 2.8 1.7 2.7-1.1 3.5 1.8 6.1 8.7 5.9 3.6 2.3 2.1-3.4 3.1-3.8 2.2-4.2 1.9-0.3 3.8 0.1 1.5 2.1 3.4 3.9 3.4 2.2 0.2-2-2.4 2.5 1.5 0.7 1.8-2.9 1-2.6-0.1-3.2 1.1-2.1 0.4-2.9 0.3-3.2 1.8 7-1.2 2.3 1.3-6.3 1.9-3.3 0-0.3-0.8-0.6 1.8 1.7 0.3 1.5 4.6-1.1 5-1.3-1.6-1.4-0.4-2.6-1.6 3 3.5 1.9 1.1 1.4 2.5-0.4 2.5-0.4 5.2-0.6-0.3-0.6-4.4-4-2.5-3.4-5.3 0.4 2.8 3.3 4.1-4.1-1.1 4.8 2.1 3.3 6.2 1.7 0.4 1.7 2.3 3.8 6.5-1.2 4.8-4.8 1.9-1.9 3.9-2.5 0.4-1.8 2.4 0.1 2.1-4.2 4.3-1.9 3.1-1.1 3.8 0.8 4.6 2.6 4.6 3.7 5.5 4 4.6 0.9 2.8 4.9 7.6 1 4.4 0.4 2.5-0.3 4-1.5 0.8-2.9-0.8-1.6-2.9-2.6-1.5-4.4-5.6-4-4.9-1.6-2.6-0.2-4.3-2.7-3.6-6.1-5.4-2.5-1-4.6 2.9-1-0.3-3.7-3-4-1.6-6 0.8-5.1-0.7-4.1 0.4-1.9 1 1.5 1.8 0.8 2.6 1.6 1.3-0.8 0.8-2.4-0.9-1.7 1.2-4-0.2-5.2-3.4-4.6 0.8-4.5-1.5-3.3 0.4-4.1 1.6-3.7 4.8-4.7 2.8-2.2 3.1-0.5 2.9 1.1 4.5 1 3.1 1.6 2.2-2.1 0.2-4.3-1.4-4.8-2-2.3-3.1-2.4-4.5-4.2-3.7-3-3.8-4-4.5-4.6-2.6-4.5 0.1-2 5.2-5.1-2-3.4-1.9-2.4-3.6-2.8-3.4-4.1-2.9-3.5-2-2.7-2.3-9.5 0 0.8 2.7-4.3 0-10.9 0-13.9-4.6-9.1-3.1 0.1-1.3-6.7 0.7-6.1 0.5-1.9-3.3-4.6-3.8-2.8-0.7-1.1-1.9-3.2-0.3-2.4-1.8-5.3-0.6-1.7-1.1-1.7-3.6-7.3-6.5-7.3-9-0.3-1.5-3.1-2.1-5.9-5.5-2.6-5.2-4.1-3.6-0.8-5.3-2.3-5.5-3.6-5-0.3-6-1.8-5.8-1.8-5.8-4.5-8.6-4-5.4-2.7-3 0-1.2 8.3 2.2 5.3 5.9 0.6-1.6-3.2-5.2-4.1-5.2 14.3 0 14.9 0 4.9 0 15.3 0 14.8 0 15.1 0 15 0 17.1 0 17.2 0 10.3 0-1.4-2.4 1.6-0.1 3.1 3.5 2.2 1.1 3.7 0.4 5.8 1 6.1 1.9 3.6-0.8 7.2 1.6z m-339.9-56.5l-3.8 2.3-3-1.6-1.8-2.8 3.4-2.2 2.2-0.9 3.2 0.4 2.8 1.9-3 2.9z m-64.4-16.8l-2.6 0.9-3.3-1.1-3.3-1.6 4.2-1.1 3.8 0.6 1.2 2.3z m-34.9-22.8l3.1 1.1 2.6-0.6 4 1.6 4.7 0.7-0.2 0.7-3 1.2-3.7-1.3-2.1-1-3.8 0.3-1.2-0.5-0.4-2.2z m116.7-33.3l12.2 20.6 17.6 33.1 4.6 0.2 5.3 1.6 4.6 2.6 6.1 4 2.8-3.4 3.5-1.9 4.2 3.1 4.4 2.4 5.7 2.7 5.3 4.4 8.5 6.9 10.1 3.9 2.2 3.8-1.1 3-3.9-2.3-5.2-2-4.1-5.3-8.7-4.9-5.5-5.7-4.7-0.4-7.5-0.2-6.3-1.7-12.8-6.2-5-1.1-9-2.2-6.1 0.5-10.3-2.7-6.6-2.5-4.5 1.2 2.8 4.2-2.4 0.3-4.7 1.3-3.2 2-4.6 1.3-2.1-3.6-0.5-5.8 4.1-1.8-1.9-1.5-4.4 3.3-1.4 4-4.9 4.2 4.5 2.9-2.6 4.3-4.1 2.6-4 1.8-0.2 2.7-6.2 3.1-0.5 2.9-4.7 2.6-3.5-0.5-3.9 1.7-4.1 2.1-3.4 2.1-7.7 1.8-1.1-1.1 4.4-2.9 4.1-1.9 4-3.3 5.7-0.7 1.5-2.5 5.3-3.6 0.6-1.2 2.7-2.2-0.8-4.6 1-3.5-4.7 1.8-1.8-1-1.8 2.2-4.1-3.1-0.5 2.2-2.8-3-3.8 2.4-2.8 0-1.6-3.6 0-2.2-3.7-2.1-5.5 1.1-4.8-2.8-3.6-1.4-1.2-3.3-4.3-2.6 0.6-3.3 2.6-3.3 0.5-3 3.5-0.4 3.4 0.9 2.5-2.8 3.4 0.5 2.7-1.8-1.8-2.6-2.9-1.1 2.4-2.2-2.7 0.1-4.1 1.2-0.9 1.3-3.9-1.3-6 0.7-6.9-1.4-2.6-2.3-6.7-3.3 5.3-2.4 8.6-2.7 3.5 0 0.5 2.8 9-0.2-4.9-3.5-6.1-2.2-4.1-2.8-4.9-2.3-6.5-1.8 1.3-2.9 7.3-0.2 4.3-2.5-0.2-2.6 3.1-2.6 3.8-0.6 6.6-2.4 4 0.4 4.8-2.9 6.7 1.1 4.2 2.5 1.3-1.1 7.1 0.3 0.4 1.3 6.8 0.9 3.9-0.5 9.6 1.7 8.2 0.5 3.6 0.7 4.9-0.9 7.3 1.6 4.9 0.8z" id="US" name="United States">\n </path>\n <path d="M1887.7 493.2l1.3-2.7 0.4-3 0.8-2.8-2.4-3.8-0.7-4.5 2.6-5.6 2 0.7 4.3 1.6 6.4 5.5 1.2 2.6-3.1 6-1.5 4.8-2.2 2.4-2.7 0.5-0.8-1.8-1.3-0.3-1.7 1.8-2.6-1.4z" id="GF" name="French Guiana">\n </path>\n <path d="M1794.3 427.5l-0.5-0.3-0.6-0.5-0.1-0.6 0.8 0.7 0.4 0.7z" id="AW" name="Aruba">\n </path>\n <path d="M1826.6 389.8l-0.1-0.3 0.4 0-0.3 0.3z" id="AI" name="Anguilla">\n </path>\n <path d="M1219.2 601l-0.8 0.7-0.4-0.3 1.2-0.4z" id="AS" name="American Samoa">\n </path>\n <path d="M1835.2 396.9l0.7 0.3-0.3 0.3-0.7 0.2-0.3-0.6 0.5-0.5 0.1 0.3z m-1.1-3.7l0.5 0.2 0.3 0.7-0.8-0.3 0-0.6z" id="AG" name="Antigua and Barbuda">\n </path>\n <path d="M440.5 337.6l0.6 0 0.1 0.7-0.1 0.2-0.2 0.9-0.2 0.7-0.4 0.1-0.3-0.9 0.3-0.4-0.1-0.7 0.3-0.6z" id="BH" name="Bahrain">\n </path>\n <path d="M1766.2 370.7l-0.3 0.5-0.1 0.5-0.4 0.3-0.7-0.1-0.8 0.3-0.6-0.1-0.5 0-0.2-0.5 0.3-0.5 0.4-0.2 0.1-0.4 0.5 0 1 0.3 0.5-0.2 0.4-1 0.3 0.2 0.1 0.9z m-0.5-1.8l-0.2-0.5 0.4-0.3 0.4 0.3-0.6 0.5z m-1.7-6.5l0.2-0.1 0.7 0.3 0.3 0 0.9 0.3-0.2 0.4-0.5-0.4-0.6-0.1-0.5 0.2-0.5-0.2 0.2-0.4z m-4.6-1.9l0.3 1.2 0 0.4-0.7 1-0.4-0.2 0.4-0.7 0.4-0.1 0.2-0.4-0.4-0.4-0.7-0.2 0.4-0.4 0.5-0.2z m-2-0.2l1.1 0.2-0.3 0.4-0.8-0.2-0.5-0.3-0.4-0.5 0.7 0 0.2 0.4z m-7.6-6l0.9 1.1 0.2 0.4 0.7 0.9 0.3 0.9 0.3 0.3 0.5 0.2 0.7 0.6 0.3 0.8-1.2-1.3-0.9-0.7-0.1-0.6-0.2-0.5-0.9-0.9-0.6-1.2z m4.4-2.4l-0.5 0.2-0.1-0.6 0.3-0.2 0.3 0.6z m-18.7-0.6l0.4 0.2 0.2-0.7 0.5 0.6 0.2 0.8 0.4 0.9-0.1 0.8-0.6-0.1-1-0.8-0.3-0.9-0.6-0.6 0.3-0.6 0.7-0.7 0.3 0.5-0.4 0.3 0 0.3z m13.5-0.5l0 0.4-0.5 0-0.3-0.2 0.2-0.6-0.5-0.2-0.8-1.2-0.6-0.6-0.7-0.5 0.2-0.3 0.6 0.4 0.2 0.5 1 1.3 0.5 0.3 0.7 0.7z m-12.7-5.6l-0.1 0.5-1 0 0.1-0.4 0.3-0.1 0.7 0z m-4.5-0.6l0.4-0.1 0.4 0.3 0.2 0.8 0.3 0.3 0.6 0.8 1 0.9 0 0.7 0.4 0.6-0.4 0.4-0.4 0.6-0.9 0.2-0.2-0.4-0.3-0.1-0.1-0.7-0.5 0.3-0.8-0.5-0.7-0.6 0.6-0.3 0.7 0.7-0.1-0.6-0.5-0.4-0.1-0.3 0.4-0.6 0-0.9-0.6-1.2 0.3-0.1 0.3 0.2z m7.2-2.6l0.6 0.7 1.1 0.7 0.8 0.2 0.8 0.7 0.8 0.6 0.2 1.4-0.5-0.3 0.2-0.3-0.3-0.8-0.6-0.5-0.7-0.7-1.1-0.4-0.4-0.4-0.7-0.1-0.2-0.8z m-12.2-7.5l1.4 0.2 1.2-0.2 0.4-0.1 0.5 0.4-1.7 0.4-0.3 0-1.3 0.3-0.5 0.5-0.4 0-0.1-0.5 0.4-0.3 0.1-0.5-0.4-0.2 0.1-0.6 0.6 0.6z m3.8-1.3l1.5 0.3 1.4 1.1 0.4 0.5 0.6 0.2 0.8 0.5 0.2 0.6 0.4 0.7-0.3 0.1-0.4 0.4 0.2 1.1 0.3 1-0.2 0.2-0.7-0.6-0.4-0.1 0.1-0.5 0.6-0.5-0.3-0.3-0.1-1.7 0-0.7-0.9-0.2-0.4-0.5-0.5-0.1-0.2-0.4-0.6-0.6-1.3-0.2-0.2-0.3z" id="BS" name="Bahamas">\n </path>\n <path d="M1828.2 392l-0.2-0.3 0.4 0.1-0.2 0.2z" id="BL" name="Saint-Barthélemy">\n </path>\n <path d="M1790 297.8l-0.3 0 0.1-0.2 0.2 0.2z" id="BM" name="Bermuda">\n </path>\n <path d="M1852.8 423.4l-0.6-0.2-0.3-0.5-0.1-0.9 0.1-0.3 0.6 0.7 0.6 0.4 0.1 0.3-0.4 0.5z" id="BB" name="Barbados">\n </path>\n <path d="M389.5 588.7l-0.9-0.1-0.4-0.7 0.6 0.1 0.7 0.6 0 0.1z m3.5-1.8l0.3 0.9 0.1 0.8-1.2-0.8 0.4-0.7 0.4-0.2z m-6-1l-0.5-0.5-0.7-0.3-0.3-0.6 0.1-0.3 0-1.4 0-0.5 0.5-0.2 0.3 0.4 0 1.2 0.3 0.7 0.2 0.5 0.3 0.6-0.2 0.4z" id="KM" name="Comoros">\n </path>\n <path d="M3.5 411.8l-0.6 0-0.3-0.6 0.3-0.4 0.5-0.3 0.4 0 0.1 0.7-0.4 0.6z m4.1-3.1l0.6 1 0.4 0.3 0.2 0.7-0.4 0.6-1-0.2-0.4-0.6 0.1-0.9 0.5-0.9z m3.2-0.1l0.3 0.2-0.1 0.6-0.5 0.6-0.4-0.4 0.2-0.6 0.5-0.4z m3.1-5.7l0.4-0.2 0.5 0.4-0.1 0.7-0.9 0.5-0.7-0.2 0-0.5 0.3-0.2 0.1-0.6 0.4 0.1z m-7.5-2.9l0.4 0 0.7 0.2-0.2 0.4-0.7-0.3-0.2 0.1-0.5 0.6-0.2-1.1 0.3-0.1 0.4 0.2z m8-0.4l-0.5-0.1 0.1-0.6 0.6-0.1-0.2 0.8z m-11.2-1.3l0.1 0.5-0.7 0.3-0.4-0.4 0.5-0.3 0.5-0.1z m-0.5-1.8l0.5 0.5-0.3 0.4-0.7 0.3-0.5 0.5-0.6 0.1 0-0.6-0.1-0.4 0.3-0.3 1.4-0.5z" id="CV" name="Cape Verde">\n </path>\n <path d="M1800.9 430l-0.2 0-1.2-0.7-0.5-0.4-0.5-0.7-0.1-0.5 0.6 0.3 0.2 0.6 0.5 0.3 0.7 0.2 0.7 0.7-0.2 0.2z" id="CW" name="Curaçao">\n </path>\n <path d="M1721.5 382.6l0.4-0.3 1 0.1 0 0.4-0.7 0.2-0.8-0.1 0.1-0.3z" id="KY" name="Cayman Islands">\n </path>\n <path d="M367.2 280.3l-0.2 0.4-0.7 0.2-0.3-0.2 0.2-0.4 1 0z m-1.9 0.4l-0.3 0.3-0.6 0.8-1.5 0.6-0.8 0.2-0.4 0-1.6 0.2-0.2-0.2-0.5 0.3-0.5 0-0.8-0.3-0.4-0.3 0.1-0.7-0.2-0.2 0.3-1.4 0.4 0.4 0.4-0.1 0.7-0.7 0.8-0.1 0.1 0.3 1 0.4 0.9-0.4 0.4 0 0.3-0.2 0.6 0.3 0.7-0.3 0.1 0.9 1 0.2z" id="CY" name="Cyprus">\n </path>\n <path d="M1839.3 406.8l0.5 0.2 0.3 0.4 0.3 0.7 0.1 0.8-0.1 0.2-0.5 0.2-0.5-1.3-0.6-0.8 0.5-0.4z" id="DM" name="Dominica">\n </path>\n <path d="M1155.4 631.3l0.6 0.3 0.1 0.3-0.5 0.2-0.6-0.3-0.6 0.3-0.6 0.7-0.5 0 0.2-0.6 0.4 0.1 0.4-0.6 1.1-0.4z m5.6-6.3l0.2 0.5-0.3 0.4-0.4-0.9 0.5 0z m-3-1.4l-0.2-0.4 0.4-0.3 0.1 0.4-0.3 0.3z m-2.8-2.5l0.1 0.4 0.3 0.2 0.6 0.7 0.7 0.4 0.1 0.4-0.2 0.5 0.4 0.7-0.3 0.3 0.2 0.4 0.4 0.5-0.2 0.3-1.2 0.3-0.3-0.2-0.7 0.3-0.7 0.6-1.5 0.2-0.4-0.3-1.3-0.4-0.7-0.1-0.8-0.3-0.4-1 0.2-0.6 0.5-0.2 0-0.5 0.4-0.1-0.2-0.6 0.4-0.4 1-0.9 0.2 0 0.8-0.4 0.7 0.2 0.6-0.4 0.6 0 0.3-0.3 0.4 0.3z m6.5 0.2l-0.2-0.9 0.4 0-0.2 0.9z m3.1-2.5l-0.3-0.4 0.5-0.5 0.1 0.7-0.3 0.2z m1.1-0.9l-0.7 0.5 0-1 0.5-0.6 0.3 0 0.2 0.6-0.3 0.5z m-1.1-4.1l-1 1.5-0.8 0.5-0.2 0.6-0.5 0.5 0.3 0.3 0.5-0.3 0.5-0.7 0.8-0.6 0.6 0-0.5 0.8 0.1 0.6-0.1 0.3-0.4-0.3-0.9 0.2-0.3 0.2-1.7 0.2 0.3-0.5-0.5-0.3-0.5 0.2-0.3 0.4-0.5 0.3-0.1 0.6-0.8-0.4-0.3 0.3-0.2 0.5-0.5 0.1-0.2-0.6-0.4-0.8-0.5 0.2-0.1-0.3 0.3-0.4 0.2-0.6 0.6 0.4 1-0.8 0.5-0.3-0.1-0.2 0.8-0.1 1.1-0.4 0.5 0.1 0.4-0.2 0.5-0.8 0.4 0.1 1.2-0.6 0.1 0.3 0.7 0z" id="FJ" name="Fiji">\n </path>\n <path d="M1739.5 844.7l-0.5 0.5-0.1-0.4 0.6-0.1z m-11.1-0.9l-0.6 0.5-0.7 0-0.1-0.3 0.3-0.4 1.1 0.2z m10.2-3.2l0.4 0.3-0.5 0.4-0.9 0.4-0.8 0.6-0.4 0-1.3 0.8-0.7 0.3-1.6 1-0.9 0.2-1.2 0-0.5 0.5-0.9 0.5-0.3 0-1.4 0.6-0.2-0.4-0.4-0.1-0.3-0.6 0.1-0.3 0.5 0.1 0.9-0.2-0.2-0.3 1.5 0.1 0.9-0.3 0-0.3 0.7-0.7 0.8 0.1-0.1-0.4-0.8 0.3-0.6 0 0.3-0.6 0.4 0.2 0.8-0.2 1-0.1-0.3-0.5-0.5-0.3 0.8-0.5-0.8-0.2 0.4-0.4 0.5 0.2 0.3 0.5 0.7 0.2 1.1-0.6 1.1 0.1 0 0.2 1.1-0.1 0.1 0.2 0.6-0.2 0.2-0.4 0.4-0.1z m-3.9-0.3l0.6 0.2-0.7 0.5-0.6-0.1 0.7-0.6z m7.2 0.2l1.4-0.2 0.3 0.4-0.5 0.5-0.5 0-0.1 0.3 0.2 0.7 0.6-0.4-0.5-0.2 0.7-0.5 0.5-0.2 1.7-0.1-0.2 0.6-0.3 0.5-0.8-0.3-0.8 0.2 0.3 0.3 0.8 0.1 0 0.3-0.8 0.5-1.6 0.2-0.6 0.4-1.4 0.4-0.4-0.1-1.3 0.1-0.5-0.6-0.3 0.5 0.9 0.5-0.7 0.9-0.4-0.4-0.9 0.1-0.5-0.4-0.4 0.1-0.4 0.8 0 0.5-0.3 0.1-0.6-0.1-0.2-0.6-0.8 0.6 0.2 0.2-0.6 0.4-0.5-0.7 0.3-0.5 1.1-0.6 0.2-0.5 1-0.4 0.2-0.2 0.6-0.1 0.3-0.3 1.1-0.5 0.8-0.1 0.2-0.7 0.6-0.1 0.6-0.4-0.4-0.2 0.5-0.3 1-0.2 0.4-0.2 0.1-0.3 0.4 0 0.3 0.2z m-4.5-0.5l1 0.1 0 0.4-0.7 0-0.3-0.5z" id="FK" name="Falkland Islands">\n </path>\n <path d="M286.6 113.4l0.3 0.4-0.9 1-0.2-0.5 0.5-0.9 0.3 0z m2.1-1.6l0.6 0.2-0.1 0.3-0.4 0.3-0.2-0.3 0.1-0.5z m0.2-1.4l-0.1 0.5-0.7 0.1-0.6-0.2 0.2-0.3 0.8-0.2 0.4 0.1z m1.1-1l0.4 0.1-0.2 0.5 0.2 0.3-0.2 0.7-0.7 0.6-0.2-0.4 0.1-0.7-0.5-0.3 1.1-0.8z m1.5-0.1l0.2 0.3-0.5 0.5 0.2 0.4-0.8 0.3-0.3-1 0.4-0.4 0.8-0.1z m1.8 0.4l-0.8 0.4 0.2-0.5 0.4-0.4 0.2 0.5z" id="FO" name="Faeroe Islands">\n </path>\n <path d="M1069.8 473.7l-0.2 0.3-0.4-0.3 0.4-0.4 0.2 0.4z m-27.8-10.8l0.5 0.1 0.3 0.5-0.2 0.6-0.6 0-0.4-0.8 0.4-0.4z" id="FM" name="Federated States of Micronesia">\n </path>\n <path d="M1841.7 429.9l-0.6 0.2-0.2-0.4 0.1-0.6 0.3-0.4 0.4 0.3 0 0.9z" id="GD" name="Grenada">\n </path>\n <path d="M965.5 420.8l-0.3 0.5 0 0.6-0.5 0.2-0.1-0.2 0-1 0.7-0.5 0.3-0.8 0.7 0.2-0.3 0.6-0.5 0.4z" id="GU" name="Guam">\n </path>\n <path d="M1829.7 395.6l-0.3 0.2-0.7-0.4 0.2-0.4 0.8 0.6z" id="KN" name="Saint Kitts and Nevis">\n </path>\n <path d="M1844 419.1l-0.9-0.6 0-0.8 0.5-1.1 0.3 0.2 0.2 0.7 0 1.2-0.1 0.4z" id="LC" name="Saint Lucia">\n </path>\n <path d="M1826.9 391l-0.5-0.2 0.4-0.4 0.1 0.6z" id="MF" name="Saint-Martin">\n </path>\n <path d="M556.4 480.9l-0.1 0.2-0.1-0.1 0.1-0.2 0.1 0.1z" id="MV" name="Maldives">\n </path>\n <path d="M1115.7 461.8l0.9 0.5-0.1 0-0.8-0.4 0-0.1z" id="MH" name="Marshall Islands">\n </path>\n <path d="M264.3 275.2l-0.3 0.3-0.5-0.2-0.3-0.4 0.2-0.6 0.5 0.1 0.3 0.2 0.1 0.6z" id="MT" name="Malta">\n </path>\n <path d="M970.3 411.2l-0.2 0-0.2-0.6 0.4-0.3 0 0.9z m0.8-1.6l-0.6 0.5 0.1-0.7 0.6-0.4-0.1 0.6z m-0.1-18.8l0-0.6 0.5 0.2-0.5 0.4z" id="MP" name="Northern Mariana Islands">\n </path>\n <path d="M1833.3 398.9l0.4 0.8-0.6-0.2 0.2-0.6z" id="MS" name="Montserrat">\n </path>\n <path d="M474.5 638.9l0.6 0.9 0 0.6-0.3 0.4-0.2 0.6-0.9 0.3-0.6-0.1-0.3-0.5-0.1-1.1 0.1-0.4 0.5-0.4 0.1-0.7 0.3-0.3 0.5 0.1 0.3 0.6z m31.7-2.2l-0.3-0.2 0.6-0.3 0.2 0.3-0.5 0.2z" id="MU" name="Mauritius">\n </path>\n <path d="M1093.6 655.2l-0.3 0.5-0.5-0.2 0.1-0.5 0.4-0.1 0.3 0.3z m2.6-7.9l0.2 0.5 0.7-0.2-0.1 1.3-0.5 0.2-0.9-0.5-0.2-1.3 0.8 0z m-3.7-4.3l-0.1 0.4 0 0.8 0.6 0.2 0.2 0.9-0.1 0.5-0.5 0.1-0.3-0.5-0.7-0.1-0.4-0.5 0.1-0.5 0.2-0.2 0.4-0.7-0.2-0.4 0.3-0.3 0.5 0.3z m-18.4-4.1l0.9 1 0.4 0.3 0.4-0.3 1 0.4 0.4 0.6 0.8 0.5 0.6 0.7 1.3 1 0.9 0.2 0.3 0.7 0.3 0.4 0.4 0.1 0 0.7 0.7 0.5 0.4 0.5 0.1 0.4 0.7 0.2 0.5 0.5 0.4 0 0.8 0.6 0.9 0.8 1 0.7 0.9 1.1 0.6 0.3 0.6 0.6 0.5 0.2 0.3 0.2 0.2 0.5 0.3 0.5-0.1 0.6-0.6 0.4-0.1-0.3-0.6 0.4-0.8-0.8-0.9 0.1-1-0.9-0.3 0-0.5-0.5-0.1-0.8-1.1-0.2-0.3-0.4-0.3 0-0.5-0.8-0.3 0.2-1-0.6-0.2-0.4-0.3 0.1-0.6-0.3-0.2-0.4-0.5-0.2-0.3-0.6-0.7-0.6-0.4-0.1-0.4-0.7-0.1-0.4-0.5-0.3-0.4-0.6 0-0.2-0.8-0.4-0.8-0.8-0.1-0.4-0.3-0.8-0.6-0.4-0.1-0.6 0-0.6-0.2-0.2-0.5 0-0.2-0.3 0.3-0.7-0.2-0.4z" id="NC" name="New Caledonia">\n </path>\n <path d="M1092.4 511.8l-0.2 0 0-0.3 0.2 0 0 0.3z" id="NR" name="Nauru">\n </path>\n <path d="M907.2 458.9l-0.4 1.1-0.4 0.4-0.2-0.7 0.5-0.9 0.5 0.1z" id="PW" name="Palau">\n </path>\n <path d="M1814 390.3l-1 0.3-0.1-0.4 0.4-0.1 0.7 0.2z m-10.3-2.4l0.6 0.2 1.5-0.1 1 0.1 0.5-0.1 0.7 0.1 0.8 0.2 0.8-0.1 0.8 0.2 1.1 0.4 0.3 0.7 0.3 0.2-0.7 0.3-0.4 1-0.5 0.4-0.4 0-0.8 0.3-0.8-0.1-0.2-0.2-0.5 0.1-0.3-0.2-0.7 0.2-1-0.2-0.9 0.2-0.8-0.1-0.2 0.1-0.6-0.1-0.1-1.1 0.1-0.4-0.3-0.6-0.6-0.5 0.6-0.3-0.2-0.4 0.4-0.3 0.5 0.1z" id="PR" name="Puerto Rico">\n </path>\n <path d="M1386.8 624.4l-0.2-0.1 0.4-0.6 0.6-0.3 0.3 0.2-1.1 0.8z m-48-1l0.6 0.2 0.2 0.4-0.3 0.5-0.5-0.2-0.3-0.8-0.6 0.3-0.8-0.2-0.2-0.9 0.3-0.5 0.5-0.1 0.5 0 0.4 0.2 0.2 1.1z m-2.6-1.5l-0.4 0.6-0.2-0.5 0.6-0.1z m-8.7-4l-0.6 0.2-0.1-0.8 0.3-0.2 0.4 0.8z m72.8-44.6l-0.2-0.4 0.3-0.3 0.3 0.2-0.4 0.5z m1.4-1.6l0.1 0.2-1.7 0.2 0-0.4 0.7-0.3 0.9 0.3z m-6.6-2.7l0 0.6-0.3 0-0.3-0.4 0.4-0.3 0.2 0.1z m-0.7-3.6l0.9 0.1 0.2 0.5-0.5 0.3-0.7 0-0.1-0.6 0.2-0.3z" id="PF" name="French Polynesia">\n </path>\n <path d="M1091.3 583.6l0.4 0.2-0.1 0.4-0.4 0.2-0.4-0.5 0.5-0.3z m-38.9-0.6l0.2 0 1.2 0.8 0.6 0.3 0.9 0.7-0.4 0.5-0.6-0.4-0.1-0.4-0.4-0.2-0.4-0.4-0.3 0.1-0.9-0.4-0.3-0.4 0.5-0.2z m34.4-5.5l0.5 0.1-0.1 0.4-0.4 0.3-0.7 0-0.5 0.4-0.5-0.1-0.1-0.4 0.5 0 0.3-0.6 1-0.1z m-27-2.8l0.4-0.1 0.6 0.3 1.3 1 0.6 0.3 0.7 0 0.3 0.2 0.6-0.1 0.2 0.3 0.4 0.8 0.3 0.3 0.1 0.6-0.8 0.4-0.8-0.4-0.3 0.1-1-0.3-0.2-0.4-1.3-0.7 0.1-0.4-0.2-0.5 0-0.4-1.3-0.4 0.3-0.6z m0.6-5.2l0.7 1.2 0.1 1-1-0.7 0-0.2 0-0.8 0.2-0.5z m-8.5 0.1l0.6-0.1 0.4 0.1 1.4-0.1 0.6 0.4 0.2 0.4 0.5 0.1 0.4 0.4 0.1 0.5 0.6 0.2 0.2 0.9-1 0.5-0.8-0.3-0.4 0-0.7-0.5-1.1 0-1.6-0.1-0.7-0.6-0.4-0.9-0.3-0.4 0.1-1.4 0.6-0.3 0.4 0.2 0.9 1z m2.6-1.9l-0.2 0.3-0.4-0.4 0.2-0.4 0.4 0.5z m-1.4-0.9l0.6 0.1 0.3 0.3-0.3 0.4-0.4-0.3-0.4 0 0.2-0.5z m-5.8-0.1l0.3 0.2-0.1 0.5-0.4 0.2-0.3-0.4 0.5-0.5z m-8.8-1.8l0.2 0.6-0.9-0.4 0.4-0.3 0.3 0.1z m3.5 0.8l-0.3-0.2 0.4-0.7 0.1 0.7-0.2 0.2z m-1.1-1.9l0.6-0.1 0.1 0.3-0.2 0.8-0.5 0.5-0.4-0.1-0.4-0.5 0.1-0.5 0.4-0.5 0.3 0.1z m-3.6 0.2l-0.6 0.3-0.4-0.3 0.8-1 0.4 0.5-0.2 0.5z m13-0.6l-0.1 0.3-0.6-0.4 0.2-0.5 0.4 0.1 0.1 0.5z m6.6-0.8l0.4 0.8 0.7 0.8 0 0.4-0.3 0.2 0 0.8 0.4 0.1 0.2 0.4 0.5 0.4 0.3 1.2 0.7 1.9 0.3 0.5 0.1 0.7-0.5-0.2-0.4-0.9-0.3-0.4-0.4-0.2-0.9-1-0.5-0.3-0.4-0.9-0.3-1-0.3-0.7-0.2-1 0.4-0.3-0.1-0.4-0.6-0.7 0-0.4 0.6 0.3 0.3-0.4 0.3 0.3z m-18.1-1.1l0.1 0.4 0.5-0.1 0.5 0.7 0.4 1-0.1 0.6-1.2-0.5-0.6-0.5 0.3-0.2-0.3-0.8-0.2-0.1-1.1 0.1-0.3 0.4-0.4-0.2 0-0.6 0.5-0.2 0.1-0.3 0.3-0.7 0.7-0.5 0.4 0.3 0.2 0.4 0.2 0.8z m-6 0l-0.3-0.8 0.4-0.1-0.1 0.9z m3.4-0.5l-0.8 0.1-0.3-0.2-0.3-0.7 0.3-0.7 0.5-0.2 0.6 0.7 0 1z m-3.3-3.5l0.4 0.6 0.7 0.4 0 0.3-0.8 1.1-0.3-0.4 0-0.4-0.5-0.6-0.1-0.6 0.6-0.4z m11.4 0.1l0.1-0.1 0.8 0.4 0.6 0.7 0.7 0.4 0 0.2 0.6 0.5 1.8 0.5 0.1 0.3 1.3 1 1.1 0.9-0.3 0.4 0.4 0.6-0.2 0.4-1.2-1.2-0.4-0.1-0.5-0.3-0.7-0.2-0.1-0.2-0.6-0.3-1.6-1.1-0.5-0.3-0.9-1-0.6-0.5 0-0.5-0.7-0.6-0.1-0.3 0.9 0.4z m-4.6-0.8l-0.7-0.1 0.3-0.4 0.4 0.5z m-11.3-2.9l0.2 0.5-0.7 0.2-0.4-0.3 0.5-0.7 0.4 0.3z m4.4-2.4l0.3 0 0.5 0.6 0.9 0.6 0.9 0.4 0.4 0.6 0.2 0.9 0.7 0.6 0.2 0.3 0.7 0.3 0.5 0 0 0.4-0.4 0.3-0.6-0.1-0.8-0.4-0.6-0.1-0.2-0.4-0.8-0.4-0.7-0.9-0.6-1.1-0.6-0.3-0.7-0.7-0.1-0.5 0.2-0.4 0.6 0.3z" id="SB" name="Solomon Islands">\n </path>\n <path d="M171.5 507.8l-0.6 0.2-0.3-1.2 0.4-0.8 0.7-0.4 0.3 0.1 0.3 0.7-0.1 0.4-0.4 0.8-0.3 0.2z m4.9-10l-0.4 0.5-0.2-0.5 0.2-0.4 0.4-0.1 0 0.5z" id="ST" name="São Tomé and Principe">\n </path>\n <path d="M1826.9 391l-0.4 0-0.1-0.2 0.5 0.2z" id="SX" name="Sint Maarten">\n </path>\n <path d="M403.1 569.3l-0.3 0.3-0.8-0.1 0.7-0.4 0.4 0.2z" id="SC" name="Seychelles">\n </path>\n <path d="M1769.3 366.2l0.4 0.3-0.1 0.1-0.4-0.2 0.1-0.2z m2.1-0.7l0.2 0.6-0.6-0.2-0.2-0.4 0.6 0z" id="TC" name="Turks and Caicos Islands">\n </path>\n <path d="M1190.3 645.6l0.4-0.1 0.7 0.6-0.2 0.5-0.3-0.4-0.6-0.2 0-0.4z m8.8-16.3l-0.6 0.3-0.3-0.2 0.5-0.4 0.4 0.3z" id="TO" name="Tonga">\n </path>\n <path d="M1846.8 437.8l-0.2 0.5-0.4 0.5 0.2 1-0.1 0.1 0.1 0.7 0.5 0.5-0.2 0.5 0.1 0.7-1.1 0.5-2-0.1-0.5 0.2-0.4-0.2-0.6 0 0.1-0.4 0.4-0.1 0.5-0.6 0.6 0.1 0.2-0.4-0.2-0.9-0.1-1-0.3-0.4-0.7-0.2 0.2-0.4 1.1-0.2 0.2-0.2 1.1 0.1 0.1-0.2 1.1-0.2 0.3 0.1z m1.8-3.3l0 0.5-0.3 0.1-1.2 0.7 0-0.5 0.7-0.5 0.8-0.3z" id="TT" name="Trinidad and Tobago">\n </path>\n <path d="M1162.2 563.7l0-0.2 0.1 0.2-0.1 0z" id="TV" name="Tuvalu">\n </path>\n <path d="M1843.3 422.8l-0.6-0.3-0.1-0.4 0.2-0.8 0.4 0 0.2 0.4 0 0.8-0.1 0.3z" id="VC" name="Saint Vincent and the Grenadines">\n </path>\n <path d="M1817.8 388.3l-0.2 0.2-0.2 0-0.2 0.2-0.1-0.3 0.7-0.1z" id="VG" name="British Virgin Islands">\n </path>\n <path d="M1817.6 392.7l0.4 0.4-1.1 0.1-0.2-0.4 0.6-0.2 0.3 0.1z" id="VI" name="United States Virgin Islands">\n </path>\n <path d="M1106.9 639.9l-0.6-0.2 0.2-0.4 0.4-0.1 0.4 0.4-0.4 0.3z m-2.1-3.9l-0.5 0-0.8-1 0.2-1 0.6 0 0 0.8 0.8 0.5-0.3 0.7z m-1.3-5.9l0.5 0.2-0.3 0.4 0.6 0.5 0 0.4-0.5 0.1-0.8-0.3-0.6-0.4 0-0.4 0-0.8 0.3-0.4 0.6 0.1 0.2 0.6z m-4.6-7.7l0.7 0 0.3 0.6 0.4 0.4-0.3 0.6-0.8 0.2-0.4-0.3-0.2-0.5-0.6-0.3 0.7-0.8 0.2 0.1z m-0.7-6.3l0.3 0.6 0.4 0.1 0.3 0.5 0.6 0.1-0.1 0.4-0.7-0.4-0.6 0.3-0.3-0.1-0.3-0.7 0.2-0.8 0.2 0z m0.8-1.7l-0.2 0.1-0.8 0.2-0.7-0.3-0.5-0.4 0-0.3 0.8-0.2 0.6-0.7 0.3 1 0.5 0.4 0 0.2z m-5-1.4l1 0.8 0.8 0.7 0.5 0.8-0.6 0.6-0.4-0.3-0.4 0-0.5 0.5-0.3-0.1-0.1-0.7-0.3-0.6 0-1.1-0.3-0.5-0.5 0.3-0.5-0.5 0.2-0.6 0-0.7 0.3-0.2 0.6 0.3 0.5 1.3z m-1.1-2.4l-0.2 0.1-0.7-0.5 0.3-0.3 0.6 0.1 0 0.6z m5.6 1.7l-0.2-0.2-0.3-2 0.4-0.3 0.4 1.6 0 0.6-0.3 0.3z m-2-3.4l-0.7 0.1-0.3-0.4 0.7-0.7 1-0.3-0.3 1-0.4 0.3z m1.9-0.7l-0.3-0.1 0-1.3-0.2-1.4 0.3 0.2 0.1 1.3 0.1 0.3 0 1z m-7.8-1.3l0.6-0.1 0.3-0.3 0-0.8 0.3-0.4 0.3 0.1-0.1 0.4 0.2 0.9 0.3 0.1 0.2 1-0.1 0.2 0.1 0.5 0.3 0.5-0.4 0.2-0.4 0.4-0.9 0-0.9 0.5-0.9-1.8 0.2-0.8-0.4-2-0.3-0.8 0.2-1.2 0.3-0.1 0.4 1 0.3 0.3 0.4 2.2z m4.2-6.7l0.4 0.3 0 0.4-0.4 0.5-0.6 0-0.1-0.8 0.7-0.4z m0.3-1.9l-0.4 0.5-0.6-0.8 0-0.3 0.5-0.3 0.5 0.9z" id="VU" name="Vanuatu">\n </path>\n <path d="M1213.9 598.9l0.5 0.2 0 0.5-1.2 0-0.4 0-0.5-0.3-0.6-0.1-0.1-0.2-0.5-0.3 0.1-0.4 0.9-0.3 0.5 0.1 1.3 0.5 0 0.3z m-4-2.9l0.5 0.7 0 0.7-0.2 0.6-0.4-0.2-1.3 0.2-0.4-0.6-0.9-0.8 0-0.5 0.7 0.1 0.6-0.2 0.9-0.2 0.5 0.2z" id="WS" name="Samoa">\n </path>\n <path d="M1804 430.1l-0.4-0.6-0.1-0.6-0.7-0.3 0-0.3 1.3 0.5-0.1 1.3z" id="BQBO" name="Netherlands">\n </path>\n <path d="M1828.1 394.6l-0.2 0.1-0.1-0.2 0.1-0.1 0.2 0.2z" id="BQSE" name="St. Eustatius (Netherlands)">\n </path>\n <path d="M1826.3 393.7l-0.1 0 0-0.2 0.1 0.1 0 0.1z" id="BQSA" name="Saba (Netherlands)">\n </path>\n <path d="M1842.6 412.1l0.4 0.7 0.6 0.6 0.3 0.8-1.1-0.1-0.3 0.1-0.3-0.3 0.4-0.5-0.4-0.1-0.5-0.4-0.5-1 0.2-0.4 0.4 0.1 0.8 0.5z" id="MQ" name="Martinique">\n </path>\n <path d="M63.3 327.5l-1 1-0.2-0.3-0.5-0.2 0.2-0.3 0.4 0.1 1-0.6 0.1 0.3z m14.6-2.2l-0.1 0.8-0.4 0.7 0 0.3-0.6 0.4-0.9 0.4-0.5-0.2-0.3-0.5 0-0.4 0.2-0.6 0.6-0.4 0.4-0.7 0.6 0.1 1 0.1z m-10.2 0.7l-0.3 0-0.3-0.4 0.5-0.8 0.5 0.1 0.4 0.3-0.1 0.3-0.7 0.5z m7.4-3.5l-1.8 1.2-0.2 0.4-0.6 0.7-0.2 0.4-1 0.8-0.8 0.2-0.3-1.4-0.1-0.9 0.6-0.3 0.3 0.2 0.6-0.2 1-0.2 0.8-0.6 0.7-0.3 1 0z m9.2 2.8l-0.4 0.4-0.4 0.2-0.3-0.4 1.1-0.5 0.5-0.3 0.2-0.5 0.6-0.8 1.1-1 0.5-0.9 0.7-0.2 0.2 0.2-0.4 1.1-0.3 0.5-0.2 0.5-0.6 0.8-0.5 0.3-0.6 0.1-0.9 0.3-0.3 0.2z m-18.1-4.6l0.4 0 0.1 0.7-0.4 0.4-0.1 0.3-0.9 1.1-0.1-1.9 0.3-0.4 0.7-0.2z m25.2-2l-0.5 1-1 0.5-0.5 0-0.6 0.5-0.4-0.3 0.5-0.7 0.7-0.5 0.7-0.3 1.1-0.2z" id="IC" name="Canary Islands (Spain)">\n </path>\n <path d="M396.8 590.6l0.2 0.3 0.6 0.2-0.1 0.5 0.1 0.2-0.3 0.9-0.3-0.3 0.1-0.5-0.3-0.7-0.3-0.4 0.3-0.2z" id="YT" name="Mayotte">\n </path>\n <path d="M462.7 644l0.9 0.2 0.3 0.3 0.4 0.7 0.7 0.6 0 1.1-0.6 0.3-0.9 0-1.2-0.6-0.4-0.5-0.1-0.3-0.4-0.7 0-0.3 0.4-0.6 0.4-0.3 0.5 0.1z" id="RE" name="Reunion">\n </path>\n <path d="M1839.8 405l-0.3 0-0.2-0.3 0.2-0.5 0.3 0.1 0.2 0.5-0.2 0.2z m-2.5-2.6l0.5 1.3-0.1 0.5-0.5 0.4-0.6-0.9-0.4-1.1 0-0.6 1 0.2 0.1 0.2z m1.3-0.4l0.4 0.1 0.7 0.4-1.5 0.4-0.5-0.3 0.1-0.7-0.3-0.6 0.3-0.4 0.4 0.4 0.4 0.7z" id="GP" name="Guadeloupe">\n </path>\n <circle cx="253.2" cy="191.5" id="0">\n </circle>\n <circle cx="1816.9" cy="733.4" id="1">\n </circle>\n <circle cx="1001.6" cy="728.5" id="2">\n </circle>\n</svg>\n',
              africa:
                '<svg\nviewBox="0 0 1000 1001"\n>\n<path\n  \n  id="AO"\n  title="Angola"\n  id="AO"\n  d="m 495.3,598.6 -36,-0.2 -4.3,1.7 -3.5,-0.3 -5.1,1.9 -1.1,2.7 6,8.7 2.4,9.3 3.6,13.4 -3.8,5.5 -0.6,2.8 2.9,8.3 3.1,8.4 3.6,5 0.6,7.8 -1.4,10.3 -4,6.1 -7.1,9.1 -2.9,5.6 -4.1,12.5 -0.8,5.9 -4.3,12.7 -1.9,12.2 1,8.7 5.9,-2.7 7.2,-2.3 7.8,0.4 7.1,6.3 1.9,-1 48.8,-0.6 8.2,6.6 29.1,2 22.4,-5.7 -7.6,-8.6 -7.8,-11.3 1.6,-44 25.3,0.1 -1,-4.7 2,-5.2 -2,-6.5 1.5,-6.7 -1.2,-4.3 -5.5,-0.8 -7.6,2 -5.3,-0.3 -3,1.3 0.9,-16.5 -3.9,-5.1 -0.8,-8.5 1.9,-8.4 -2.4,-5.3 -0.1,-8.7 -14.8,0.1 1.1,-5 -6.2,0.1 -0.7,2.4 -7.6,0.5 -3.1,8.1 -1.9,3.4 -6.7,-1.9 -4,1.9 -8.1,1.1 -4.6,-7.2 -2.7,-4.5 -3.5,-8.3 -2.9,-10.3 z m -47.4,-2.7 0.4,-6 2,-3.5 4.5,-2.9 -4.6,-4.8 -3.7,2.3 -5,6 3.3,10.4 3.1,-1.5 z"\n   />\n<path\n  \n  id="BI"\n  title="Burundi"\n  id="BI"\n  d="m 669,556.1 -0.6,-5.4 0,0 -6.5,-0.9 -3.8,7.9 -7.4,-1.1 3,6.3 0.1,2.4 4.3,13.2 0,0.6 1.2,-0.2 4.5,-5 4.9,-7.2 3,-2.9 -0.1,-4.5 -2.6,-3.2 z"\n   />\n<path\n  \n  id="BJ"\n  title="Benin"\n  id="BJ"\n  d="m 340,356 -9.3,-8 -4.3,0.1 -4.1,4 -2.6,4.2 -6,1.2 -2.5,6.1 -4.1,1.6 -1.6,7.2 3.7,4.1 4.3,4.9 0.4,6.8 2.5,2.8 -0.5,31.8 3,9.5 10.1,-1.6 0.6,-22.3 -0.3,-8.8 2.3,-8.7 3.7,-4.3 5.9,-8.5 -1.3,-3.7 2.4,-5.6 -2.8,-8.2 0.5,-4.6 z"\n   />\n<path\n  \n  id="BF"\n  title="Burkina Faso"\n  id="BF"\n  d="m 300.7,310.8 -7.8,0 -3,-2.6 -6.7,1.9 -11.3,5.8 -2.3,4.3 -9.4,6.2 -1.7,3.6 -5.1,2.8 -5.8,-1.9 -3.4,3.4 -1.8,9.5 -9.7,11.4 0.3,4.7 -3.4,5.9 0.8,8 5.5,3 2.1,4.6 5.4,2.9 4.3,-3.4 5.7,-0.6 8.3,3.6 -1.6,-10.4 0.3,-7.9 21.1,-0.6 5.4,1 3.9,-2.2 5.6,1.1 10.7,0.3 4.1,-1.6 2.5,-6.1 6,-1.2 2.6,-4.2 0.3,-9.5 -14,-3.1 -0.4,-6.7 -6.9,-9 -1.6,-6.3 1,-6.7 z"\n   />\n<path\n  \n  id="BW"\n  title="Botswana"\n  id="BW"\n  d="m 600.6,762.7 -2.2,-1 -6.9,3.1 -3.6,0 -7.9,5.4 -4.4,-5.7 -18.7,4.9 -9,0.4 -1.9,49.3 -11.8,0.5 -1.4,40.4 3.2,2 6.5,13.2 -1.5,8.4 2.5,4.9 8.5,-1.4 6.2,-6.2 5.8,-4.2 3.2,-6.6 6,-3.2 4.9,1.7 5.5,3.9 9.6,0.6 7.8,-3.2 1.4,-4.3 2.4,-6.6 6.5,-1.1 3.9,-5.2 4.4,-9.3 11.2,-10.3 17.3,-10.2 -7.3,-6.2 -9.2,-2.1 -3.1,-8.8 0.2,-4.9 -5.1,-1.5 -13,-15.2 -3.5,-8 -2.3,-2.4 -4.2,-11.1 z"\n   />\n<path\n  \n  id="CF"\n  title="Central African Rep."\n  id="CF"\n  d="m 587,398.1 -1,-0.7 -4.2,-4 -0.9,-4.3 1.9,-5.7 -0.1,-5.7 -7.2,-8.6 -1.5,-5.9 -7.7,2.3 -6,5.6 -8.6,15.1 -11.3,6.4 -11.8,-0.8 -3.4,1.2 1.2,4.9 -6.3,4.8 -5.1,5.4 -15.3,5.3 -3,-3.1 -2.1,-0.3 -2.2,3.6 -10,1 -6.1,14 -2.9,2.6 -0.8,10.7 1.2,5.8 -0.9,4.1 5.8,7.3 1,4.9 4.6,7.2 5.6,4.4 0.6,6.3 1.3,4 6.3,-12.8 7.3,-7.4 8.2,2.4 7.9,0.7 1,-9.6 4.7,-7.1 6.5,-4.4 10.1,4.7 7.8,5.1 9,1.4 9.1,2.7 3.6,-8.4 1.6,-1.1 5.6,1.4 13.5,-6.9 4.9,3 3.9,-0.5 1.8,-3.3 4.5,-1.2 9.2,1.4 7.9,0.4 4,-1.5 -2,-4.4 -9.2,-5.5 -3.2,-8.3 -5.2,-6 -8.3,-7.2 -0.1,-4.5 -6.8,-5.5 -8.4,-5.4 z"\n   />\n<path\n  \n  id="CI"\n  title="Côte d\'Ivoire"\n  id="CI"\n  d="m 230.4,373.8 -5,2.1 -2.9,1.7 -1.8,-5.9 -3.5,1.6 -2.1,-0.3 -2.3,4 -9.4,-0.1 -3.3,-2.1 -1.6,1.3 -2.5,1.1 -1,4.7 2.8,5.7 3,11.1 -4.6,1.6 -1.1,1.9 0.9,2.7 -0.8,6.1 -1.9,0 -0.6,4 1.2,6.7 -2.7,6.1 3.6,3.8 3.8,0.9 5.2,5.8 0.3,5.5 -1.1,1.7 -1,11.4 2.3,0.4 12.1,-5.1 8.5,-4 14.5,-2.4 7.8,-0.2 8.5,2.7 5.6,-0.1 0.5,-5.5 -5.2,-11.9 3.2,-15.6 5.1,-11.6 -3.2,-19.7 -8.3,-3.6 -5.7,0.6 -4.3,3.4 -5.4,-2.9 -2.1,-4.6 -5.5,-3 z"\n   />\n<path\n  \n  id="CM"\n  title="Cameroon"\n  id="CM"\n  d="m 477.5,366.6 0.4,-9.2 -1,-9.1 -4.9,-8.9 -3.4,0.8 -0.4,4.4 4.9,5.5 -1.3,2.5 -0.5,4.6 -10.2,10.7 -3.1,8.8 -1.6,7.2 -2.6,3.1 -2.4,9.7 -6.4,5.7 -1.9,7 -2.7,5.6 -1.1,5.7 -8.3,4.7 -6.9,-5.7 -4.6,0.2 -7.2,8.1 -3.6,0.1 -5.7,13.4 -3.1,9.8 -0.1,3.8 3.1,2 2.5,6.2 5.6,2.3 4.8,9.2 -1.8,10.9 19.9,0.3 5.8,-0.9 7.4,1.9 7.3,-1.8 1.5,0.7 15.4,0.6 9.9,3.6 9.7,3.3 0.9,-7.5 -1.3,-4 -0.6,-6.3 -5.6,-4.4 -4.6,-7.2 -1,-4.9 -5.8,-7.3 0.9,-4.1 -1.2,-5.8 0.8,-10.7 2.9,-2.6 6.1,-14 1.8,-3.7 -3.9,-9.6 -1.8,-5.7 -5.3,-2.3 -7.2,-8.1 2.5,-6.5 5.6,1.3 3.4,-0.9 6.8,0.1 -6.8,-12.6 z"\n   />\n<path\n  \n  id="CD"\n  title="Dem. Rep. Congo"\n  id="CD"\n  d="m 618.3,446 -9.2,-1.4 -4.5,1.2 -1.8,3.3 -3.9,0.5 -4.9,-3 -13.5,6.9 -5.6,-1.4 -1.6,1.1 -3.6,8.4 -9.1,-2.7 -9,-1.4 -7.8,-5.1 -10.1,-4.7 -6.5,4.4 -4.7,7.1 -1,9.6 -0.7,8.4 -3.6,7.4 -2.4,8.6 -1.5,12.3 0.7,7.8 -2,4.8 -0.3,5.1 -1.4,4.4 -8.1,6.7 -5.6,7.1 -5.3,13.4 0.3,11.4 -3.1,4.4 -7.2,6.8 -7.2,8.7 -4.5,-2.5 -0.8,-3.9 -6.6,-0.1 -4.2,5.3 -3.2,-1.4 -4.5,2.9 -2,3.5 -0.4,6 -3.1,1.5 1.6,4.3 5.1,-1.9 3.5,0.3 4.3,-1.7 36,0.2 2.9,10.3 3.5,8.3 2.7,4.5 4.6,7.2 8.1,-1.1 4,-1.9 6.7,1.9 1.9,-3.4 3.1,-8.1 7.6,-0.5 0.7,-2.4 6.2,-0.1 -1.1,5 14.8,-0.1 0.1,8.7 2.4,5.3 -1.9,8.4 0.8,8.5 3.9,5.1 -0.9,16.5 3,-1.3 5.3,0.3 7.6,-2 5.5,0.8 4.2,0.3 0.6,4.3 5.7,-0.3 7.7,1.3 3.9,6.2 9.7,2 7.5,-4.4 2.6,7.3 9.2,1.9 4.3,5.9 4.8,7.6 9.3,0.1 -0.6,-14.9 -3.4,2.5 -8.4,-5.4 -3.2,-2.4 1.9,-13.9 2.5,-16.4 -2.6,-6.1 3.6,-8.8 3.3,-1.7 16.4,-2.3 2.1,0.6 0.6,-2.3 -3.4,-3.7 -1.5,-7.6 -7.3,-7.6 -4.1,-9.9 2.3,-5.8 -3.2,-7.8 2.4,-22.1 0.1,0.2 -0.1,-2.4 -3,-6.3 1.2,-7.6 1.7,-1 0.5,-8.3 3.5,-3.8 0.1,-10.5 2.9,-5.3 0.6,-11.1 2.6,-6.4 4.6,-7.2 4.7,-3.7 3.9,-4.9 -4.9,-1.9 0.6,-16.1 0,0 -10.9,-9.2 -2.9,-5.9 -6.8,2.9 -5.7,-0.9 -3.2,2.3 -5.5,-1.7 -7.5,-11.4 -4,1.5 -7.9,-0.4 z"\n   />\n<path\n  \n  id="CG"\n  title="Congo"\n  id="CG"\n  d="m 521.5,468.8 -7.9,-0.7 -8.2,-2.4 -7.3,7.4 -6.3,12.8 -0.9,7.5 -9.7,-3.3 -9.9,-3.6 -15.4,-0.6 -0.9,6.1 3.4,7.1 9.1,-1.1 3.1,2.7 -5.3,16.1 5.8,8.2 1.3,10.8 -1.6,9.2 -3.7,6.5 -10.8,-0.6 -6.5,-6.6 -1,6.1 -8.3,1.7 -4.2,3.5 4.6,9.1 -9.3,7.7 9.9,14.6 5,-6 3.7,-2.3 4.6,4.8 3.2,1.4 4.2,-5.3 6.6,0.1 0.8,3.9 4.5,2.5 7.2,-8.7 7.2,-6.8 3.1,-4.4 -0.3,-11.4 5.3,-13.4 5.6,-7.1 8.1,-6.7 1.4,-4.4 0.3,-5.1 2,-4.8 -0.7,-7.8 1.5,-12.3 2.4,-8.6 3.6,-7.4 0.7,-8.4 z"\n   />\n<path\n  \n  id="DJ"\n  title="Djibouti"\n  id="DJ"\n  d="m 820.3,358.7 -5.3,-3.8 6.8,-3.3 0.1,-5.7 -3,-4.3 -3.6,3.4 -5.2,-1.2 -4,6.1 -3.9,6.5 1.1,3.8 0.3,4.2 6.8,0.2 2.9,-0.9 2.8,2.4 4.2,-7.4 z"\n   />\n<path\n  \n  id="DZ"\n  title="Algeria"\n  id="DZ"\n  d="M 392.4,5.7 384.6,6.5 379.8,3.3 367.6,3.4 357,8.9 351.2,6.8 332.3,8 l -19.4,2.5 -11,4.3 -7.2,5.8 -12.4,2.4 -11.1,7.7 4.2,9 0.7,8.4 3.9,14.7 3.1,2.9 -2.2,5.4 -15.2,2.3 -5.4,5.1 -6.7,1.2 -0.6,10.2 -13.8,5.4 -4.6,7 -9.6,3.7 -11.8,2.1 -19.2,10.2 -0.2,16.3 0,1 -0.3,2.7 44.1,33.5 40,30.2 40.4,30.2 2.9,6.4 7.5,4 5.5,2.2 0.2,8.8 13.3,-1.3 16.9,-6.2 34.5,-27.1 40.5,-26.4 -5.4,-8.7 -9.6,-6.4 -5.5,2.5 -4.3,-7.7 -0.6,-5.9 -7.2,-10.1 4.6,-5.8 -1.3,-8.7 1.4,-7.6 -1,-6.3 1.8,-11.3 -0.8,-6.4 -4.1,-12.2 -5.7,-24.7 -7.3,-5.6 -0.2,-3.3 -9.7,-8.3 -1.3,-10.4 7,-7.8 2.4,-11.6 -2.3,-13.4 2.2,-7.2 z"\n   />\n<path\n  \n  id="EG"\n  title="Egypt"\n  id="EG"\n  d="m 628.8,88.1 -11.9,-4 -11.5,-3.7 -15.6,0.2 -3.7,6.6 2.2,5.9 -2.4,8.5 4.2,11.2 2.9,49.2 2.2,50.9 48.1,0 46.4,0 47.4,0 -2.2,-2.8 -14.7,-12.4 -0.9,-9 2.2,-2.4 -11.6,-15.3 -4.4,-7.9 -4.9,-7.5 -10.5,-21.6 -8.4,-13.9 -6.1,-14.5 1.1,-1.3 10.1,19.8 5.8,6.2 4.3,4.4 2.5,-2.4 2.7,-7.2 1.6,-10.4 2.8,-5.6 -1.5,-3.5 -8.5,-20.1 0,0 -5.4,3.4 -9.2,-0.8 -9.6,-3.2 -2.3,4.5 -3.8,-6.8 -8.5,-1.8 -10.2,1.2 -4.5,3.9 -8.6,4.4 -5.6,-2.2 z"\n   />\n<path\n  \n  id="ER"\n  title="Eritrea"\n  id="ER"\n  d="m 777.6,303.8 -7,-6.8 -4,-12.7 -7.8,-16 -5.7,7.9 -8.8,2.3 -3.6,4.2 -0.7,9.2 -4.3,20.3 1.5,5.6 14.3,2.9 3.3,-10.4 7.6,6.3 7,-3.2 3,2.9 8.3,0.1 10.8,5.6 3.4,4.8 5.5,4.4 5.4,8.1 4.3,4.5 5.2,1.2 3.6,-3.4 -6.2,-4.2 -4,-4.7 -6.9,-8 -7.1,-7.9 -17.1,-13 z"\n   />\n<path\n  \n  id="ET"\n  title="Ethiopia"\n  id="ET"\n  d="m 754.8,310.3 -3.3,10.4 -14.3,-2.9 -1.4,11.9 -4.5,13.6 -7.1,6.8 -4.8,10.6 -1.1,5.7 -5.6,3.8 -3.3,14.5 0.1,1.7 0.4,10.8 -1.8,4.2 -6.4,0.3 -4,7.9 7.5,1 6.3,6.7 2.2,5.6 5.7,3.2 7.4,15 6.4,2.4 0.1,7.7 4.2,4.6 8.5,0 15.7,11.7 3.8,0.2 2.9,-0.4 2.7,1.6 8.2,1.1 3.5,-5.8 11.1,-5.8 4.9,4.7 8.4,0 3.3,-4.4 7.8,-0.2 10.7,-9.8 15.9,-0.6 33.5,-41.5 -10.3,0.1 -40.3,-16.4 -4.8,-5 -4.6,-6.6 -4.8,-7.7 2.5,-4.9 -2.8,-2.4 -2.9,0.9 -6.8,-0.2 -0.3,-4.2 -1.1,-3.8 3.9,-6.5 4,-6.1 -4.3,-4.5 -5.4,-8.1 -5.5,-4.4 -3.4,-4.8 -10.8,-5.6 -8.3,-0.1 -3,-2.9 -7,3.2 -7.6,-6.3 z"\n   />\n<path\n  \n  id="GA"\n  title="Gabon"\n  id="GA"\n  d="m 455.9,485.9 -1.5,-0.7 -7.3,1.8 -7.4,-1.9 -5.8,0.9 0.1,16.7 -17.7,-0.2 -4.2,0.8 -2.4,10.3 -3,10.1 -2.7,4.4 -0.3,4.6 7.3,14.3 8.1,11.4 12.5,14 9.3,-7.7 -4.6,-9.1 4.2,-3.5 8.3,-1.7 1,-6.1 6.5,6.6 10.8,0.6 3.7,-6.5 1.6,-9.2 -1.3,-10.8 -5.8,-8.2 5.3,-16.1 -3.1,-2.7 -9.1,1.1 -3.4,-7.1 0.9,-6.1 z"\n   />\n<path\n  \n  id="GH"\n  title="Ghana"\n  id="GH"\n  d="m 296.4,364.9 -5.6,-1.1 -3.9,2.2 -5.4,-1 -21.1,0.6 -0.3,7.9 1.6,10.4 3.2,19.7 -5.1,11.6 -3.2,15.6 5.2,11.9 -0.5,5.5 10.9,3.9 11,-4 6.7,-4.7 19.2,-8.1 -2.8,-4.9 -3.2,-8.8 -1,-6.8 2.7,-12.5 -3,-5 -1.2,-10.9 0,-10.1 -5.1,-7.1 0.9,-4.3 z"\n   />\n<path\n  \n  id="GN"\n  title="Guinea"\n  id="GN"\n  d="m 156.4,345.2 -1.8,0.7 -6.6,-1.1 -0.9,1.6 -2.7,0.3 -8.7,-3.4 -5.8,-0.1 -0.3,4.7 -1.3,1.4 0.9,4.6 -1.9,1.8 -2.7,0.1 -3.2,2.3 -3.7,-0.3 -5.5,6.8 3.6,2.2 1.7,3.1 1.3,6.1 3,2.7 3.1,1.8 4.7,5.4 5.3,8.2 6.5,-6.1 1.5,-3.8 2.1,-3 3.3,-0.3 2.9,-2.6 9.7,0 3.3,5 2.6,5.8 -0.4,4 1.9,3.6 -0.1,5.1 3.3,-0.8 2.6,-0.3 3.2,-1.6 5.1,8.5 -0.9,5.6 2.4,2.9 3.4,0.1 2.6,-5.6 3.4,0.4 1.9,0 0.8,-6.1 -0.9,-2.7 1.1,-1.9 4.6,-1.6 -3,-11.1 -2.8,-5.7 1,-4.7 2.5,-1.1 -3.7,-4 0.7,-4.1 -1.6,-1.6 -2.6,1.3 0.6,-4.5 2.5,-3.5 -5,-5.8 -1.4,-3.8 -2.7,-3.1 -2.4,-0.3 -2.9,1.9 -4,1.8 -3.3,3 -5.2,-1.1 -3.3,-3.5 -2,-0.4 -3.2,1.8 -2,0 -0.6,-5 z"\n   />\n<path\n  \n  id="GM"\n  title="Gambia"\n  id="GM"\n  d="m 91.9,335.4 11,0.2 3,-1.9 2.2,-0.1 4.5,-3.2 5.2,2.9 5.2,0.3 5.3,-3.1 -2.4,-4 -4,2.3 -3.8,-0.1 -4.7,-3.4 -3.8,0.2 -2.8,3.3 -13.2,0.4 -1.7,6.2 z"\n   />\n<path\n  \n  id="GW"\n  title="Guinea-Bissau"\n  id="GW"\n  d="m 129.9,343.2 -22.4,-0.6 -3.3,1.6 -4,-0.5 -6.5,2.3 0.7,2.9 3.7,3 -0.1,2.1 2.7,3.9 5.1,0.9 6.4,5.8 5.5,-6.8 3.7,0.3 3.2,-2.3 2.7,-0.1 1.9,-1.8 -0.9,-4.6 1.3,-1.4 0.3,-4.7 z"\n   />\n<path\n  \n  id="GQ"\n  title="Eq. Guinea"\n  id="GQ"\n  d="m 433.9,486 -19.9,-0.3 -4.1,15.5 2.2,2.1 4.2,-0.8 17.7,0.2 -0.1,-16.7 z"\n   />\n<path\n  \n  id="KE"\n  title="Kenya"\n  id="KE"\n  d="m 807.2,463.1 -8.4,0 -4.9,-4.7 -11.1,5.8 -3.5,5.8 -8.2,-1.1 -2.7,-1.6 -2.9,0.4 -3.8,-0.2 -15.7,-11.7 -8.5,0 -4.2,-4.6 -0.1,-7.7 -6.4,-2.4 -8.1,9.1 -7.4,8.3 5.9,9.6 1.5,7 5.5,15.8 -4.4,10.1 -5.9,9.2 -3.5,5.6 0,0.7 2.9,5.2 -0.8,10.3 44.1,28.2 0.7,8 17.3,13.8 5,-4.6 2.5,-9.2 4,-5.5 1.9,-9.8 4.6,-1 3.1,-5.8 8.6,-5.5 -7.2,-11.4 -0.4,-50.4 10.5,-15.7 z"\n   />\n<path\n  \n  id="LR"\n  title="Liberia"\n  id="LR"\n  d="m 193.3,411 -3.4,-0.4 -2.6,5.6 -3.4,-0.1 -2.4,-2.9 0.9,-5.6 -5.1,-8.5 -3.2,1.6 -2.6,0.3 -5.7,6.5 -5.5,7.5 -0.7,4 -2.9,4.4 8.1,8.9 10.4,7.6 11,10.5 12.6,6.6 3.2,-0.1 1,-11.4 1.1,-1.7 -0.3,-5.5 -5.2,-5.8 -3.8,-0.9 -3.6,-3.8 2.7,-6.1 -1.2,-6.7 0.6,-4 z"\n   />\n<path\n  \n  id="LY"\n  title="Libya"\n  id="LY"\n  d="m 589.8,80.6 -3.1,-4.5 -11.7,-1.6 -3.9,-2.4 -4.4,0 -4.4,-6.2 -15.9,-2.8 -7.9,1.8 -7.9,6.5 -3.3,6.7 3.4,10.6 -5.3,6.3 -5.5,3.6 L 507,91.7 490.3,86 479.7,83.3 473.6,71 l -15.7,-6.1 -9.8,-2.3 -4.8,1.2 -13.8,-4.8 -0.3,10.6 -5.6,4 -3.4,4.4 -7.9,5.3 1.5,5.7 -0.9,5.8 -5.6,3.2 4.1,12.2 0.8,6.4 -1.8,11.3 1,6.3 -1.4,7.6 1.3,8.7 -4.6,5.8 7.2,10.1 0.6,5.9 4.3,7.7 5.5,-2.5 9.6,6.4 5.4,8.7 19,6 6.9,7.5 8.3,-5.1 11.9,-7.6 48.4,26.5 48.7,26.5 -0.1,-5.8 13.8,0 -1,-27.7 -2.2,-50.9 -2.9,-49.2 -4.2,-11.2 2.4,-8.5 -2.2,-5.9 3.7,-6.6 z"\n   />\n<path\n  \n  id="LS"\n  title="Lesotho"\n  id="LS"\n  d="m 625.3,939.9 2.5,-4.4 6.7,-2.2 2.4,-4.5 4.1,-6.7 -3.8,-4.2 -4.8,-4.2 -5.7,2.8 -6.8,5.4 -6.9,8.7 8,10.6 4.3,-1.3 z"\n   />\n<path\n  \n  id="MA"\n  title="Morocco"\n  id="MA"\n  d="m 271.2,30.7 -5,-0.1 -11.9,-3.1 -11,0.9 -6.8,-5.9 -8.5,-0.1 -3.8,8.6 -8,14.5 -8.7,5.7 -11.8,6.4 -7.7,9.3 -1.8,7.3 -4.8,11.8 2.5,17.2 -10.1,11.5 -6,3.7 -9.6,9.4 -11,1.6 -6.1,5.3 -0.2,0.2 -7.9,14.1 -8.1,5.1 -4.5,8.5 -0.5,7.4 -3.4,8.1 -4,2.2 -6.9,8.8 -4.4,9.8 0.7,4.6 -4.1,7.3 -4.7,3.7 -0.8,6.4 0.2,0.1 27,-1.1 1.6,-5 5,-6.2 4.4,-19.1 16.9,-15 6,-17.4 3.7,-1.1 4.2,-10.8 10,-1.4 4.2,1.8 5.4,0 3.9,-3.2 7.3,-0.4 -0.1,-7.5 0,0 1.8,0 0.2,-16.3 19.2,-10.2 11.8,-2.1 9.6,-3.7 4.6,-7 13.8,-5.4 0.6,-10.2 6.7,-1.2 5.4,-5.1 15.2,-2.3 2.2,-5.4 -3.1,-2.9 -3.9,-14.7 -0.7,-8.4 -4.2,-9 z"\n   />\n<path\n  \n  id="MG"\n  title="Madagascar"\n  id="MG"\n  d="m 902.9,704.8 -2.5,-9.1 -3,-5.9 -3.9,-5.9 -4.3,6.2 -0.7,8.3 -7.1,9.6 -5.1,-1.7 1.3,6 -4,6.9 -10.4,8.5 -7.3,7.9 -5.4,0.2 -4.6,2.5 -6.9,2.8 -6,0.6 -2.2,8.7 -4.7,7.8 0.2,12.7 1.7,8.7 2.4,6.6 -1.7,8.8 -6.4,10.5 -0.3,4.6 -5.7,2.4 -2.8,10 0.4,9.9 3.4,11 -0.1,12.3 2.6,7.3 9.1,5 6.5,3.5 10.9,-5.8 9.9,-3.3 6.8,-16.1 6.1,-19.2 9.3,-26.2 7.3,-19.1 5.9,-16.1 1.6,-11.7 3.5,-3.2 1.5,-5.9 -1.7,-10.2 2.6,-4.1 3.5,8.1 2.4,-4.1 1.7,-6.6 -2.8,-6.5 -1,-16.7 z"\n   />\n<path\n  \n  id="ML"\n  title="Mali"\n  id="ML"\n  d="m 347.4,252.3 -13.3,1.3 -0.2,-8.8 -5.5,-2.2 -7.5,-4 -2.9,-6.4 -40.4,-30.2 -40,-30.2 -18.2,0.2 5.1,59.7 5.4,59.7 2,1.8 -2.7,9.6 -48.5,0.2 -1.9,3.1 -4.6,-0.9 -6.9,2.7 -8.4,-3.8 -3.8,0.3 -2.2,8.2 -4.1,2.5 0.4,8.6 2.3,7.9 4.5,3.9 1,5.3 -0.6,4.4 0.6,5 2,0 3.2,-1.8 2,0.4 3.3,3.5 5.2,1.1 3.3,-3 4,-1.8 2.9,-1.9 2.4,0.3 2.7,3.1 1.4,3.8 5,5.8 -2.5,3.5 -0.6,4.5 2.6,-1.3 1.6,1.6 -0.7,4.1 3.7,4 1.6,-1.3 3.3,2.1 9.4,0.1 2.3,-4 2.1,0.3 3.5,-1.6 1.8,5.9 2.9,-1.7 5,-2.1 -0.8,-8 3.4,-5.9 -0.3,-4.7 9.7,-11.4 1.8,-9.5 3.4,-3.4 5.8,1.9 5.1,-2.8 1.7,-3.6 9.4,-6.2 2.3,-4.3 11.3,-5.8 6.7,-1.9 3,2.6 7.8,0 7.7,-0.6 4.5,-4.9 16.5,-1.2 10.7,-2.2 1,-8.5 6.6,-9.2 -0.3,-31.9 z"\n   />\n<path\n  \n  id="MZ"\n  title="Mozambique"\n  id="MZ"\n  d="m 788.2,666.2 -1.7,-6.2 0,0 0,0 -10,8.1 -13.4,5.3 -7.3,-0.2 -4.5,4.2 -8.4,0.3 -3.3,1.8 -14.4,-3.9 -4.7,0.5 -3.3,13.1 1.4,15.8 0.7,0 4.2,4.4 4.6,10 0.3,17.8 -5.4,3 -4.1,9.6 -7.5,-8.6 -0.5,-9.7 2.9,-6.5 -0.5,-5.5 -4.7,-3.5 -3.3,1.2 -6.8,-6.6 -37.1,11.4 0.8,9.9 0.6,5.1 10,-0.3 5.5,3 2.5,3.4 5.7,1 6.1,4.4 -0.8,17.5 -2.8,9.6 -1,10.4 1.7,4.1 -1.7,8.1 -1.9,1.3 -3.6,9.9 -13.4,15.7 4.7,19.5 2.5,9.9 -3,15.4 0.7,5 1.3,6.2 0.6,6.1 9,0.1 1.5,-7.3 -2.9,-0.9 -0.6,-5.8 5.5,-5.2 14.8,-7.5 10.1,-4.6 5.3,-5 2.1,-5.7 -2.7,-2.4 2.4,-6.4 1.1,-13.6 -2.2,0.7 0.1,-4.1 -1.9,-8.1 -5.2,-10.5 1.6,-9.9 5.1,-3.2 8.9,-9.8 4.7,-2.5 14.4,-14.9 14,-6.7 11.3,-5.3 8.1,-8.5 5.2,-9.6 4.1,-9.9 -1.8,-6.8 0.4,-21.6 -1,-12.2 0.9,-13.8 z"\n   />\n<path\n  \n  id="MR"\n  title="Mauritania"\n  id="MR"\n  d="m 237.6,171.8 -44.1,-33.5 -0.5,20.9 -38.9,-0.7 -0.4,35.4 -11.2,1.3 -3.1,7.1 1.9,20 -46.9,-0.1 -2.7,4.6 6.1,6 3,6.5 -1.4,6.9 1.3,6.9 1,13.7 -1.8,13 -3.5,6.8 0.9,7.5 4.2,-4.5 6,1.2 5.9,-3 6.8,-0.1 5.7,4 7.9,3.7 7.2,10.2 7.8,9.5 4.1,-2.5 2.2,-8.2 3.8,-0.3 8.4,3.8 6.9,-2.7 4.6,0.9 1.9,-3.1 48.5,-0.2 2.7,-9.6 -2,-1.8 -5.4,-59.7 -5.1,-59.7 18.2,-0.2 z"\n   />\n<path\n  \n  id="MW"\n  title="Malawi"\n  id="MW"\n  d="m 714.6,711.7 0.3,-5.2 -2.7,-4.1 0.4,-6 -3.3,-10.2 3.7,-7.7 -0.2,-16.7 -4.1,-8.9 0.4,-1.5 0,0 -2.3,-3.8 -11.9,-2.6 5.6,6.2 2.8,11.7 -2.2,3.8 -2.7,11.2 2,11.5 -4,4.8 -4.1,12.8 6.2,3.6 6.8,6.6 3.3,-1.2 4.7,3.5 0.5,5.5 -2.9,6.5 0.5,9.7 7.5,8.6 4.1,-9.6 5.4,-3 -0.3,-17.8 -4.6,-10 -4.2,-4.4 -0.7,0 0.1,1.9 2.3,0.5 2.2,7.4 -0.4,1.7 -4.1,-5.3 -2.2,3.4 -1.9,-2.9 z"\n   />\n<path\n  \n  id="NA"\n  title="Namibia"\n  id="NA"\n  d="m 576,759.7 -22.4,5.7 -29.1,-2 -8.2,-6.6 -48.8,0.6 -1.9,1 -7.1,-6.3 -7.8,-0.4 -7.2,2.3 -5.9,2.7 0.6,10.6 9.5,13.5 2.5,8.7 6,16.6 5.9,11.4 4.6,5.7 1.3,7.6 -0.1,16.5 3.4,21.3 2.6,10.1 2.2,13.4 4.3,10.1 8.3,10.5 6,-6.8 4.5,3.7 1.7,6 5.2,1 7.3,2.6 6.4,-1 10.8,-7.1 2.2,-51.1 1.4,-40.4 11.8,-0.5 1.9,-49.3 9,-0.4 18.7,-4.9 4.4,5.7 7.9,-5.4 3.6,0 6.9,-3.1 0,-1.2 -4.7,-3.1 -7.8,-0.8 -9.9,3.1 z"\n   />\n<path\n  \n  id="NE"\n  title="Niger"\n  id="NE"\n  d="m 458.3,198.6 -19,-6 -40.5,26.4 -34.5,27.1 -16.9,6.2 0.3,31.9 -6.6,9.2 -1,8.5 -10.7,2.2 -16.5,1.2 -4.5,4.9 -7.7,0.6 -1,6.7 1.6,6.3 6.9,9 0.4,6.7 14,3.1 -0.3,9.5 4.1,-4 4.3,-0.1 9.3,8 0.8,-12.4 3.5,-5.5 1.6,-8 3.2,-3 13,-1.6 12.2,5.1 4.6,5.3 6.1,0.2 5.8,-3.4 14.7,7.1 6.2,-0.3 7.1,-5.9 7.1,0.4 3.5,-1.9 6.5,0.8 9.4,4 9.4,-7.7 2.9,0.6 8.4,15.1 2.2,-0.3 0.4,-4.4 3.4,-0.8 1.1,-6.5 -7.8,-0.3 -0.1,-8.9 -5.1,-5.2 4.9,-18.2 15.2,-13 0.2,-18 4,-28.1 2.5,-6 -5.1,-4.7 -0.3,-4.4 -4.6,-3.6 -3.4,-21.5 -8.3,5.1 -6.9,-7.5 z"\n   />\n<path\n  \n  id="NG"\n  title="Nigeria"\n  id="NG"\n  d="m 468.2,344.6 -2.2,0.3 -8.4,-15.1 -2.9,-0.6 -9.4,7.7 -9.4,-4 -6.5,-0.8 -3.5,1.9 -7.1,-0.4 -7.1,5.9 -6.2,0.3 -14.7,-7.1 -5.8,3.4 -6.1,-0.2 -4.6,-5.3 -12.2,-5.1 -13,1.6 -3.2,3 -1.6,8 -3.5,5.5 -0.8,12.4 -0.5,4.6 2.8,8.2 -2.4,5.6 1.3,3.7 -5.9,8.5 -3.7,4.3 -2.3,8.7 0.3,8.8 -0.6,22.3 10.7,0 9.2,-0.1 8.6,9.1 4.1,10 6.5,8.6 9.8,0.3 4.7,-3.1 4.6,0.8 12.7,-5 3.1,-9.8 5.7,-13.4 3.6,-0.1 7.2,-8.1 4.6,-0.2 6.9,5.7 8.3,-4.7 1.1,-5.7 2.7,-5.6 1.9,-7 6.4,-5.7 2.4,-9.7 2.6,-3.1 1.6,-7.2 3.1,-8.8 10.2,-10.7 0.5,-4.6 1.3,-2.5 -4.9,-5.5 z"\n   />\n<path\n  \n  id="RW"\n  title="Rwanda"\n  id="RW"\n  d="m 667.9,533 -7.4,4.3 -2.9,-1.4 -3.5,3.8 -0.5,8.3 -1.7,1 -1.2,7.6 7.4,1.1 3.8,-7.9 6.5,0.9 0,0 3.5,-1.8 0.8,-8.1 -4.8,-7.8 z"\n   />\n<path\n  \n  id="EH"\n  title="W. Sahara"\n  id="EH"\n  d="m 193.8,134.6 -1.8,0 0,0 0.1,7.5 -7.3,0.4 -3.9,3.2 -5.4,0 -4.2,-1.8 -10,1.4 -4.2,10.8 -3.7,1.1 -6,17.4 -16.9,15 -4.4,19.1 -5,6.2 -1.6,5 -27,1.1 -0.2,-0.1 -0.6,5.9 2.7,-4.6 46.9,0.1 -1.9,-20 3.1,-7.1 11.2,-1.3 0.4,-35.4 38.9,0.7 0.5,-20.9 0.3,-2.7 0,-1 z"\n   />\n<path\n  \n  id="SD"\n  title="Sudan"\n  id="SD"\n  d="m 740,291.9 0.7,-9.2 3.6,-4.2 8.8,-2.3 5.7,-7.9 -6.9,-5.1 -4.8,-3.4 -5.3,-16.5 -2.5,-14.3 2.5,-2.5 -4.7,-13.6 -47.4,0 -46.4,0 -48.1,0 1,27.7 -13.8,0 0.1,5.8 2.4,54.9 -10.5,-0.9 -5.2,10.2 -3,8.5 2.6,3.2 -3.8,4.3 1.5,5.7 -3,5.8 -1.2,5 4.3,-0.8 2.6,5.4 0.3,8 4.6,4.1 -0.1,3.4 1.5,5.9 7.2,8.6 0.1,5.7 -1.9,5.7 0.9,4.3 4.2,4 1,0.7 3.8,-1.6 4.1,-2.6 2.9,-12.3 3.2,-6.4 8.8,-1.9 2.1,3.8 6.5,8 3.3,1.2 4.4,-2.3 8.7,0.4 1.8,2.9 12.1,0 0.3,-2.9 6.3,-2.6 1.1,-4 4.6,-2.9 10.4,8.1 6.2,-1.4 5.8,-10 6.5,-7.6 -1.3,-8.3 -3,-4 7.3,-0.8 0.7,-3 5.7,0.9 -1.2,10.2 1.7,10 6.5,5.5 1.5,4.7 0,6.9 1.7,0.3 -0.1,-1.7 3.3,-14.5 5.6,-3.8 1.1,-5.7 4.8,-10.6 7.1,-6.8 4.5,-13.6 1.4,-11.9 -1.5,-5.6 4.3,-20.3 z"\n   />\n<path\n  \n  id="SS"\n  title="S. Sudan"\n  id="SS"\n  d="m 707.8,379.2 -1.5,-4.7 -6.5,-5.5 -1.7,-10 1.2,-10.2 -5.7,-0.9 -0.7,3 -7.3,0.8 3,4 1.3,8.3 -6.5,7.6 -5.8,10 -6.2,1.4 -10.4,-8.1 -4.6,2.9 -1.1,4 -6.3,2.6 -0.3,2.9 -12.1,0 -1.8,-2.9 -8.7,-0.4 -4.4,2.3 -3.3,-1.2 -6.5,-8 -2.1,-3.8 -8.8,1.9 -3.2,6.4 -2.9,12.3 -4.1,2.6 -3.8,1.6 8.4,5.4 6.8,5.5 0.1,4.5 8.3,7.2 5.2,6 3.2,8.3 9.2,5.5 2,4.4 7.5,11.4 5.5,1.7 3.2,-2.3 5.7,0.9 6.8,-2.9 2.9,5.9 10.9,9.2 0,0 5,-3.8 7.8,3.1 9.8,-3.3 8.6,0.1 7.4,-6.4 7.4,-8.3 8.1,-9.1 -7.4,-15 -5.7,-3.2 -2.2,-5.6 -6.3,-6.7 -7.5,-1 4,-7.9 6.4,-0.3 1.8,-4.2 -0.4,-10.8 -1.7,-0.3 0,-6.9 z"\n   />\n<path\n  \n  id="SN"\n  title="Senegal"\n  id="SN"\n  d="m 148.8,315.1 -7.8,-9.5 -7.2,-10.2 -7.9,-3.7 -5.7,-4 -6.8,0.1 -5.9,3 -6,-1.2 -4.2,4.5 -3,7.1 -6.1,9.7 -5.4,2.6 6,4.9 4.8,10.8 13.2,-0.4 2.8,-3.3 3.8,-0.2 4.7,3.4 3.8,0.1 4,-2.3 2.4,4 -5.3,3.1 -5.2,-0.3 -5.2,-2.9 -4.5,3.2 -2.2,0.1 -3,1.9 -11,-0.2 1.8,10.6 6.5,-2.3 4,0.5 3.3,-1.6 22.4,0.6 5.8,0.1 8.7,3.4 2.7,-0.3 0.9,-1.6 6.6,1.1 1.8,-0.7 0.6,-4.4 -1,-5.3 -4.5,-3.9 -2.3,-7.9 -0.4,-8.6 z"\n   />\n<path\n  \n  id="SL"\n  title="Sierra Leone"\n  id="SL"\n  d="m 171.5,401 -3.3,0.8 0.1,-5.1 -1.9,-3.6 0.4,-4 -2.6,-5.8 -3.3,-5 -9.7,0 -2.9,2.6 -3.3,0.3 -2.1,3 -1.5,3.8 -6.5,6.1 1.4,10.3 2.1,5 6.3,7.4 8.7,5.6 3.3,1 2.9,-4.4 0.7,-4 5.5,-7.5 5.7,-6.5 z"\n   />\n<path\n  \n  id="SZ"\n  title="Swaziland"\n  id="SZ"\n  d="m 674,874.9 -5.8,-2.6 -3.5,1 -1.4,4 -3.6,5.2 -0.2,4.8 6.6,7.5 7,-1.5 2.8,-6.1 -0.6,-6.1 -1.3,-6.2 z"\n   />\n<path\n  \n  id="TD"\n  title="Chad"\n  id="TD"\n  d="m 582.5,246.4 -48.7,-26.5 -48.4,-26.5 -11.9,7.6 3.4,21.5 4.6,3.6 0.3,4.4 5.1,4.7 -2.5,6 -4,28.1 -0.2,18 -15.2,13 -4.9,18.2 5.1,5.2 0.1,8.9 7.8,0.3 -1.1,6.5 4.9,8.9 1,9.1 -0.4,9.2 6.8,12.6 -6.8,-0.1 -3.4,0.9 -5.6,-1.3 -2.5,6.5 7.2,8.1 5.3,2.3 1.8,5.7 3.9,9.6 -1.8,3.7 10,-1 2.2,-3.6 2.1,0.3 3,3.1 15.3,-5.3 5.1,-5.4 6.3,-4.8 -1.2,-4.9 3.4,-1.2 11.8,0.8 11.3,-6.4 8.6,-15.1 6,-5.6 7.7,-2.3 0.1,-3.4 -4.6,-4.1 -0.3,-8 -2.6,-5.4 -4.3,0.8 1.2,-5 3,-5.8 -1.5,-5.7 3.8,-4.3 -2.6,-3.2 3,-8.5 5.2,-10.2 10.5,0.9 -2.4,-54.9 z"\n   />\n<path\n  \n  id="TG"\n  title="Togo"\n  id="TG"\n  d="m 307.1,365.2 -10.7,-0.3 -0.9,4.3 5.1,7.1 0,10.1 1.2,10.9 3,5 -2.7,12.5 1,6.8 3.2,8.8 2.8,4.9 9.8,-3 -3,-9.5 0.5,-31.8 -2.5,-2.8 -0.4,-6.8 -4.3,-4.9 -3.7,-4.1 1.6,-7.2 z"\n   />\n<path\n  \n  id="TN"\n  title="Tunisia"\n  id="TN"\n  d="m 429.5,59 -4.5,-2.2 -3.2,-6.6 -6,-0.2 -2.4,-7.6 7.3,-7 1.1,-12.1 -4.1,-3.5 -0.2,-6.5 5.5,-7 -0.9,-2.7 -9.5,5.2 0.1,-7.1 -8.1,-1.7 -12.2,5.7 -2.2,7.2 2.3,13.4 -2.4,11.6 -7,7.8 1.3,10.4 9.7,8.3 0.2,3.3 7.3,5.6 5.7,24.7 5.6,-3.2 0.9,-5.8 -1.5,-5.7 7.9,-5.3 3.4,-4.4 5.6,-4 0.3,-10.6 z"\n   />\n<path\n  \n  id="TZ"\n  title="Tanzania"\n  id="TZ"\n  d="m 672.2,531.3 -4.3,1.7 4.8,7.8 -0.8,8.1 -3.5,1.8 0,0 0.6,5.4 2.6,3.2 0.1,4.5 -3,2.9 -4.9,7.2 -4.5,5 -1.2,0.2 -0.7,5.9 2.3,2 -0.5,5.9 2.3,5.5 -2.9,5.3 9.7,9.4 0.8,8.5 5.9,14.2 0,0 0.6,0.4 4.8,2.3 7.7,2.4 6.8,4.1 11.9,2.6 2.3,3.8 0,0 0.8,-2.7 6.2,7.4 0.6,14.5 3.9,5.3 -0.1,0.2 4.7,-0.5 14.4,3.9 3.3,-1.8 8.4,-0.3 4.5,-4.2 7.3,0.2 13.4,-5.3 10,-8.1 0,0 -4.4,-3 -4.7,-13.6 -4,-8.7 1,-6.6 -0.6,-4.2 3.5,-8.4 -0.3,-3.6 -7.7,-5 -0.6,-7.8 5.9,-17.1 -17.3,-13.8 -0.7,-8 -44.1,-28.2 0,0 -6,6.1 -4.1,6.3 4.8,4.7 -7,3.4 -1.5,-1.6 -7.1,0.9 -5.5,3.1 -3.3,-5.4 2.3,-9.7 0.5,-8.3 0,0 0,0 -13.4,-0.2 z"\n   />\n<path\n  \n  id="UG"\n  title="Uganda"\n  id="UG"\n  d="m 711.3,458.5 -7.4,6.4 -8.6,-0.1 -9.8,3.3 -7.8,-3.1 -5,3.8 0,0 -0.6,16.1 4.9,1.9 -3.9,4.9 -4.7,3.7 -4.6,7.2 -2.6,6.4 -0.6,11.1 -2.9,5.3 -0.1,10.5 2.9,1.4 7.4,-4.3 4.3,-1.7 13.4,0.2 0,0 -0.7,-5.3 5.7,-8.1 7.7,-2 5.2,-3.3 6.3,2.7 0.6,1 0,-0.7 3.5,-5.6 5.9,-9.2 4.4,-10.1 -5.5,-15.8 -1.5,-7 -5.9,-9.6 z"\n   />\n<path\n  \n  id="ZA"\n  title="South Africa"\n  id="ZA"\n  d="m 522.3,999 5.3,-0.3 7.5,-5.3 10,-2.2 12.3,-5.5 4.7,0.7 7.2,-1.7 12.3,2.7 5.9,-2.6 6.9,2 1.8,-3.8 6,-0.8 12.6,-5.3 9.3,-6.3 8.9,-8.3 14.4,-14.2 7.5,-9.9 3.9,-7.1 5.5,-7 2.5,-2 8.6,-7 3.5,-6.2 2.3,-11.5 3.7,-10.1 -9,-0.1 -2.8,6.1 -7,1.5 -6.6,-7.5 0.2,-4.8 3.6,-5.2 1.4,-4 3.5,-1 5.8,2.6 -0.7,-5 3,-15.4 -2.5,-9.9 -4.7,-19.5 -6.3,-1.3 -4.1,1.6 -5.7,-2.3 -4.9,-0.2 -17.3,10.2 -11.2,10.3 -4.4,9.3 -3.9,5.2 -6.5,1.1 -2.4,6.6 -1.4,4.3 -7.8,3.2 -9.6,-0.6 -5.5,-3.9 -4.9,-1.7 -6,3.2 -3.2,6.6 -5.8,4.2 -6.2,6.2 -8.5,1.4 -2.5,-4.9 1.5,-8.4 -6.5,-13.2 -3.2,-2 -2.2,51.1 -10.8,7.1 -6.4,1 -7.3,-2.6 -5.2,-1 -1.7,-6 -4.5,-3.7 -6,6.8 7.7,17.9 0,0.1 5.4,11.7 6.9,12.8 -0.2,10.6 -3.9,2.5 3.2,9.3 -0.5,8.1 1.3,3.8 0.7,-1.9 4.6,6.2 3.8,0.2 4.6,5 z m 103,-59.1 -4.3,1.3 -8,-10.6 6.9,-8.7 6.8,-5.4 5.7,-2.8 4.8,4.2 3.8,4.2 -4.1,6.7 -2.4,4.5 -6.7,2.2 -2.5,4.4 z"\n   />\n<path\n  \n  id="ZM"\n  title="Zambia"\n  id="ZM"\n  d="m 671.3,636 -4.1,-1.1 0.7,-3 -2.1,-0.6 -16.4,2.3 -3.3,1.7 -3.6,8.8 2.6,6.1 -2.5,16.4 -1.9,13.9 3.2,2.4 8.4,5.4 3.4,-2.5 0.6,14.9 -9.3,-0.1 -4.8,-7.6 -4.3,-5.9 -9.2,-1.9 -2.6,-7.3 -7.5,4.4 -9.7,-2 -3.9,-6.2 -7.7,-1.3 -5.7,0.3 -0.6,-4.3 -4.2,-0.3 1.2,4.3 -1.5,6.7 2,6.5 -2,5.2 1,4.7 -25.3,-0.1 -1.6,44 7.8,11.3 7.6,8.6 9.9,-3.1 7.8,0.8 4.7,3.1 0,1.2 2.2,1 13.4,1.5 3.8,1.6 4.1,-0.3 7,-9 10.9,-11.4 4.4,-1 1.7,-4.8 7,-5.5 9.3,-1.9 -0.8,-9.9 37.1,-11.4 -6.2,-3.6 4.1,-12.8 4,-4.8 -2,-11.5 2.7,-11.2 2.2,-3.8 -2.8,-11.7 -5.6,-6.2 -6.8,-4.1 -7.7,-2.4 -4.8,-2.3 -0.6,-0.4 0,0 0.9,2.3 -2,0.8 -2.6,-2.9 z"\n   />\n<path\n  \n  id="ZW"\n  title="Zimbabwe"\n  id="ZW"\n  d="m 669.1,825.1 13.4,-15.7 3.6,-9.9 1.9,-1.3 1.7,-8.1 -1.7,-4.1 1,-10.4 2.8,-9.6 0.8,-17.5 -6.1,-4.4 -5.7,-1 -2.5,-3.4 -5.5,-3 -10,0.3 -0.6,-5.1 -9.3,1.9 -7,5.5 -1.7,4.8 -4.4,1 -10.9,11.4 -7,9 -4.1,0.3 -3.8,-1.6 -13.4,-1.5 4.2,11.1 2.3,2.4 3.5,8 13,15.2 5.1,1.5 -0.2,4.9 3.1,8.8 9.2,2.1 7.3,6.2 4.9,0.2 5.7,2.3 4.1,-1.6 6.3,1.3 z"\n   />\n<path\n  \n  id="SO"\n  title="Somalia"\n  id="SO"\n  d="m 832.6,372.8 -5.7,-5.8 -2.5,-5.7 -4.1,-2.6 -4.2,7.4 -2.5,4.9 4.8,7.7 4.6,6.6 4.8,5 40.3,16.4 10.3,-0.1 -33.5,41.5 -15.9,0.6 -10.7,9.8 -7.8,0.2 -3.3,4.4 -10.5,15.7 0.4,50.4 7.2,11.4 2.7,-3.3 2.9,-7.3 13.4,-16.7 11.4,-10.6 18.1,-13.7 12.1,-11.2 14.1,-18.9 10.1,-15.5 10,-20.2 7,-17.7 5.4,-15.5 2.9,-14.9 2.4,-5 -0.4,-7.3 0.8,-8 -0.5,-3.9 -4.6,0.1 -5.5,4.7 -6.4,1.4 -5.5,2.1 -3.9,0.2 0,0 -6.9,0.5 -4.2,2.6 -6,0.9 -10.5,4.3 -13.2,1.6 -11.3,3.5 -6.1,0 z"\n   />\n</svg>\n',
              northAmerica:
                '\n<svg  viewbox="0 0 1000 902">\n <path d="M713.1 395.9l-8.6 11.2-8.7 11.2-13 17-0.9 1-9.9 10.4 0.3 36.3 0 4.8 0 4.2-0.1 0.2-5.1 0.1-10.8-0.1-11.4-0.3-8.5-0.3-12.1-0.6 0-17.4 0-23 0.1-10.3 0.1-15.6 0.2-15.6 3.4-51.6 8.5 0.4 8.5 0.4 5.6 0.2 11.3 0.2 11.3-0.1 0.2 2.8-0.2 1.6 0.7 3.6-0.4 0.8-0.1 3.5 0.7 0.5 0 0.8 1.4 1.2 0.6 1.3 1.6-0.7 1.7 0.1 1-0.5 3.4 0.3 0.4 1 0.1 1.9 1.2 3.3 1.1 2.2 0.4 2.6 2.2 5.1 0.3 1.1-0.2 1.7-0.5 1.4-0.8 1.4 2.6-0.9 0.4 0.5 1.7-0.6 1.3-0.7 4.8-2.1 1.2 0 1.8 0.3 3.5 1.8 0.8 0.7 0.9 0.3 2.9 0.3 2.4 0.9 0.7-0.2z" id="MB" name="Manitoba">\n </path>\n <path d="M624.3 491l-11.7-0.8-9.1-0.7-9.5-0.9-6.8-0.7-8.5-1-6.7-0.9-6.8-1-7.4-1.1 0-0.1 20.4-131.9 6.2 1 6.3 0.8 6.2 0.8 6.2 0.7 6.3 0.7 6.2 0.6 6.3 0.5 6.2 0.5-3.4 51.6-0.2 15.6-0.1 15.6-0.1 10.3 0 23 0 17.4z" id="SK" name="Saskatchewan">\n </path>\n <path d="M578.2 351.9l-20.4 131.9 0 0.1-6.1-0.9-6.7-1.2-10-1.8-8.3-1.6 0.3-0.6-0.7-0.7-0.3-1.2-1.1-0.5-0.4-1.6-0.8-1.2 0.6-1.3-1.3-0.8 0.6-0.5 0.8-1.6-0.2-1.4 0.5-1-0.2-1.7 0.1-2.8-0.4-0.8-0.7-2-0.6-0.4-0.8 0.3-0.7-1.2 0-1.2-1.2-1-0.2-2.2-1.2-1.6-0.6-0.2-0.7-0.9 0.1-0.9-1.3-1.3-0.2-1 0.2-0.8-0.6-0.7-0.4-1.4-0.5-0.6-0.4-2.1-0.5 0-1 0.9-0.5-0.3-0.3-2.4-1.2-2-0.5-1.2-1.6-0.3-0.9-1.1-0.3-1 0.7-0.5 0.1-0.9-0.9-0.4-0.5-0.9-0.8 0.9-1.1 0.1 0.1-1.5-0.3-1.8 0.4-0.5-0.3-1.9-0.5-1.1-0.7 0.1 0-1.7-0.8-2.2-1-0.8-0.4 1-1.5-1.3-0.3-1.9-1.5-0.7-0.9-0.7-0.2-1.2-0.5-0.3 0.3-1.1 1 0.4 0-1.3-0.7-0.3-0.2-1.9 19.7-72.8 7.6 2 7.6 1.9 7.7 1.8 7.6 1.7 7.7 1.5 7.7 1.5 7.8 1.4 7.7 1.2z" id="AB" name="Alberta">\n </path>\n <path d="M455.6 461.4l0 0.8 0.5 0.8-1.1 0.4-0.2-1.5 0.8-0.5z m-17.5-10.5l-1.1-0.4 0.3-1.2 0.8 0.1 0 1.5z m14.2-0.4l0.7 1.8-0.3 0.4-1.5-1.6-0.3-1.9 1.1 0.8 0.3 0.5z m-16.8-7.8l0.3 1.3-0.3 1.5-0.6 0.3-0.8-0.7-0.5-1 0.5-1-0.4-0.7 1.7-0.1 0.1 0.4z m13.4 2.5l-0.2-1.4 1-0.2-0.1 1.2-0.7 0.4z m-1.4-0.3l-0.2-1.1-0.5-0.8 0.2-1.2 0.6-0.4 0.6 1-0.7 0.9 0 1.6z m4.2-2.3l0.3 0.6-0.3 0.8-0.9-0.9 0.9-0.5z m-8.8-8.5l-1.1 0.8-1.9-1.3 1.8-0.7 0.9 0 0.3 1.2z m-11.5-5.6l2.3 2 0.4 1 1.1 1.5 2.8 1.9 1.9 1.6 0.7 0.1 1.7 0.9 0.9 1.1 1.4 1 1.1 0.2 0.9 1-0.1 2.3 0.6 1.5-0.1 1.2 1.4 2.9-0.5 1.1 0.2 2 0.5 0.2 1 1.5 1.3 0.6 1.3 1 0.4 1 0.8 0.4-0.1 1 0.8 0.6 0.1 1-0.4 0.6 0.9 2.1-0.3 2.4 1 0.5 0.3 2.2-0.8 0.3-0.4-0.6-1.3 1-0.8-0.1-0.8-0.8-0.8-0.3-3.2-2.9-1.8-1.3-0.9-1.2-1.7-1.6-0.4-1 1.7-0.7 0.6-0.9-1.3-0.5-0.7 0.3-1-0.8-1.1 0.5-0.8-0.9-0.5-1.2 0.7-1.3-0.6-1.4-1 0.1-0.3-2 0.4-0.6-1.7 0-1-0.6-0.9 0.2-0.3-0.5 0.7-2 1-0.2 0.1-0.9-0.8-0.6 0.3-1.9-0.8-0.5-1.5 0.1-1.4-0.6-0.3-1.1 1-1.2-1.6-0.1-0.5-1.4-0.9-0.2-0.1-0.7-1.3 0.6-0.6-0.9 1.3-0.7-0.3-1.5-0.7-0.2 0.9-1.2 2.4 0.6 0.3-0.8-2 0.1-1.8-0.2-0.8-1.2-0.3-1.2 0-2.1 2.7-0.2 1.4 0.6z m2.5-6.8l-0.7 0.4-0.7-1.1 0.1-1.7 1.4-0.7 0.1 1.6-0.2 1.5z m1.8-6.9l-0.2 0.9-1.2 1.4-0.3 0.9-0.8 0 0.5-1.3-0.2-1.3 0.8-0.7 1.4 0.1z m1.1-0.9l-0.8 0.7-1-0.5 0.7-0.6 1.1 0.4z m-3 0.8l-0.2-1.2 0.8-0.7 0.5 0.2-0.4 1-0.7 0.7z m0.5-2.6l-0.6 1.1-1.4-0.8 0.8-0.7 1.2 0.4z m2.4 0.2l0 1.2-1.2-0.2-0.1-0.8 0.7-0.6 0.6 0.4z m3.9 1.9l-1.6 0.2-0.7 0.4-1 1.4-1.5 0.1 0.6-1.4 0.9-1.2 2.6-0.5 1-0.7 1.3 0.1-0.1 0.9-1.5 0.7z m-8-5.8l0 1.3-1 0.3 0.4-1.7 0.6 0.1z m1.5-1l-0.1 1.4-0.6 0.4-1.1-1.4 0.5-0.9 1.3 0.5z m-20.6-9.7l1.3 0.8-0.4 0.7-1.1-0.8 0.2-0.7z m20.7 12.6l0.2-1.8 0.8-2.5 0.7 1-0.5 2.1-1.2 1.2z m-3.2-5.5l0.4 1.6-0.3 0.8-0.9-0.3-0.5-1.5-0.1-1.8 0.5-0.6 0.9 1.8z m5 3.1l0.2-1.9 0.8 0.5-1 1.4z m-5.6-8.8l0.3 1.2-0.8 0.4-0.1-1.5 0.6-0.1z m-15.4-7.7l-0.3 1 0.4 0.5 0.2 1.2-0.7 1.5-0.7 0.3-1.1-0.3-0.5 1.6 0.6 0.5-0.3 2 1.3 1.7-0.2 1.9 1.4 0.3 0 1.3-1.1 0.8-0.7-0.6-0.3-0.9-0.8-4-0.9-1.5 0-1-0.9-1.7-0.5-2.7 1.4 0.5-0.3-1.1-1.7-0.9 0.3-1.3 1 0.7 2.2 0.5 1.4-0.4 0.8 0.1z m20.8 9.5l0 1.8-0.7 1.9-1.5 2.5-1-0.3 0.6-1.6 1.4-1.6-0.7-0.3-1 2-1.2 0.3-0.6-1.1 0-2.5 0.3-1 1-0.5 1-2.4 1.1 0.6 0.4 1.1 0.9 1.1z m-3.7-0.7l-1.2-0.8 0.5-1 1.3-0.7-0.6 2.5z m2.5-2.2l-1.4-0.2 0-0.6 1.5-1.5 0.2 1.7-0.3 0.6z m-7.8-5.9l1.2 1.9 0.6 3.1-0.3 0.8-1.3-0.5-0.4-2-0.5-1.2-0.6-0.3-0.3-1.7-0.4-0.8 0.6-0.8 1.4 1.5z m9.1 3.3l-0.7-0.2-1.9 1 0.9-2 0.9-0.3 1.6 0.2-0.8 1.3z m-8.1-3.3l-1-0.3-0.6-1.5 1-0.4 0.8 1-0.2 1.2z m2.6 0.1l0.2 1.1 1.3 3.5-1.1 0.4-0.5 0.7-0.6-0.1-0.2-1.3-0.6-1.1 0.2-1-0.2-1.8-0.7-0.1 0.1-1.6-0.6-0.5 0.3-0.8-0.4-0.6 1-0.7 0.8 1.2 0.8 1.8 0.2 0.9z m-1.8-5.2l-0.2 1-1.2 0.8-0.5-1.1-0.4-0.2-0.5-1.3 2.3-0.4 0.5 1.2z m-17.2-9l1.2 1 1.3 0.7-0.2 0.9 1.2-0.3 0.8 0.2 0.4 1.7-0.3 1.4-1.3 0.8-1-0.2-1.2 0.2 0.7 1 1.7 0.1 0.1-1 1.3-1 0.3-1.7 1.4 0.5 1.8-0.3-0.5 1.5-2.2 1.8-1.1 1.7-0.5 1-0.6 2-1.1 0.8-1.6-0.3-0.3 0.3-1.7-0.1-0.2-1.2-0.9-1.5 0.6-0.4 1.1 0.5 0.4-0.5-2.2-2.3 0.7-1-0.4-3.8 1.4-1.3 0-0.8 0.9-0.4z m16.7 1l-0.5 0.7-1.6 0.6 1.1-1.9 1 0.6z m2.4-0.4l-0.6 0-0.3-0.9 0.9-0.2 0 1.1z m0.6-0.4l-0.2-0.9 2-1 0.7 0.3-1.3 1.1-1.2 0.5z m95.6 100.2l-8.4-1.8-6.6-1.4-7.5-1.7-9.2-2.3-6.6-1.7-8.2-2.1-8.2-2.3-10.5-3.2-1.2-1.4-0.9 0.8-0.4-0.1-0.5-1.8 0.6-1-0.3-0.8 0.5-0.6 0-0.9 0.6-2.1-2.1 0.4-0.1 0.9-0.8 0.3-2.5-2.4-0.3-1.5 0.6-1 0.9-0.4-0.7-0.9-1.1 0.4-1.7-0.4-1.7-2.9 1.9-2.8-0.4-1.3-1.8-0.8-0.7-0.1-0.1-1.4-1.7-1.3-1 0.2-1.4-0.3-0.6-1.3-1.1 0.3-1.9-1 0.7-0.7 0-0.8 1.5 0.2 0.4-0.5-0.8-0.7 0-1.3-1.5-0.5-0.8 0.2-0.3-1.3-0.8 0.1-1.1-1.2-1.6 1-0.6-0.8-1.8-1.6-0.5-1 0.7-1.2-1-0.1-0.7-1.1 0.1-0.8 2.3-0.2-1.1-0.7 0.4-0.6 1.1-0.5 0.7-1.3 0.5-0.3 1.2 0.1 1.9 0.5 2.3 1.1 0.1-0.2-2.6-1.4-2.1-0.4-1.3-0.9 0 0.9-1.2 1.6-0.8-0.1 0.1-1.8-0.2-0.9 0.4-1.7 0.7-1 1.3 0 0.9-1.3 1.4-0.4 1.1-0.6 0.5 0.1 1.4-1-0.1-1.3-1.7-0.1-0.5 0.5-2.5 0.4-1.2-1.6 0.2-2-1.7 1.7-0.4-0.9 1-0.6 0.3-1.1 1.6-1.9 0.3-1.1-1.1 0.2-1-0.7-0.1-0.6 0.6-3.2-0.7-1.1-0.8-1.6 0.6-1.6-0.3-0.6 1.5-0.4 0.2-1.2 0.6-1.3 0.8-0.3 0.1-1.2-1.1 0.7-2.2 0.6-1.1 0.7-0.9 2.1-0.9 0.3-1.8-5.4-0.9-2.8 0.9-2.4-0.9-1 0.6-0.4 0.1-1.2-1.2-0.4 1.1-2.4 0.7-0.1 0.2-0.8 1.4-0.3 1.1-1.6 1.1-0.7 1-1.3 1.1-0.7 1.9-1.7-0.2-1.4-0.8 1-0.4 1.1-2.7 2.5-0.3-1.2 1-1 1.2-0.6 0.4-2.3 0-1.6 0.6-1-0.1-0.7 1.5-1.7 0.4-1.1 0-1-1.9-1.3-0.1-1.5-0.8-0.7-0.7-1.7-1.5-1.1-2.1-3.4-1.4-0.5 0.2-2 0.3-0.5-1.1-1.3 1.2-1.7-1.6-1.4 1.2-1.1-0.1-2-0.4-2.2-0.4-5.3-0.3-1.9 0.1-1.8-0.5-2.2 0.3-2.1-0.5-1.4-0.5-2.8-1.5-2.2-0.4-1.9 0.4-0.9-0.6-1.2-0.2-1.7-1.2-1-0.2-2.1 1.1-1.2-0.6-2.4-0.7-1.7-3.2 0.3-2.2-0.4-0.8 1.4-1.2-0.2-1 2-1.5 1.1-1.4-0.6-3.4 0.6-1.3 0.5 0.1-1.1 0.7-3.2-2.8-8.5 0.3-1.8-1.4-2.3 10.7 5.4 8.1 3.8 5.4 2.5 5.5 2.5 8.2 3.5 5.5 2.3 5.6 2.3 5.6 2.2 5.5 2.1 5.7 2.1 8.4 3 8.5 2.8 5.7 1.8 5.7 1.8 5.8 1.7 5.7 1.7 5.8 1.6-19.7 72.8 0.2 1.9 0.7 0.3 0 1.3-1-0.4-0.3 1.1 0.5 0.3 0.2 1.2 0.9 0.7 1.5 0.7 0.3 1.9 1.5 1.3 0.4-1 1 0.8 0.8 2.2 0 1.7 0.7-0.1 0.5 1.1 0.3 1.9-0.4 0.5 0.3 1.8-0.1 1.5 1.1-0.1 0.8-0.9 0.5 0.9 0.9 0.4-0.1 0.9-0.7 0.5 0.3 1 0.9 1.1 1.6 0.3 0.5 1.2 1.2 2 0.3 2.4 0.5 0.3 1-0.9 0.5 0 0.4 2.1 0.5 0.6 0.4 1.4 0.6 0.7-0.2 0.8 0.2 1 1.3 1.3-0.1 0.9 0.7 0.9 0.6 0.2 1.2 1.6 0.2 2.2 1.2 1 0 1.2 0.7 1.2 0.8-0.3 0.6 0.4 0.7 2 0.4 0.8-0.1 2.8 0.2 1.7-0.5 1 0.2 1.4-0.8 1.6-0.6 0.5 1.3 0.8-0.6 1.3 0.8 1.2 0.4 1.6 1.1 0.5 0.3 1.2 0.7 0.7-0.3 0.6z" id="BC" name="British Columbia">\n </path>\n <path d="M788.2 444.3l-0.4 1.4-0.5 0.4-1.5 0.3-0.4-0.5 2-1.8 0.8 0.2z m-18-10.9l2.2 0 1.3 1 1.7 1.6 1.2 2.3-0.8 0.3-1.8 0-2-0.8-1.4 0-3.6-0.8-0.9-0.4 1-2.1 3.1-1.1z m10.2-3.4l0.4 1-0.7 0.2-0.6-0.6 0.9-0.6z m2.2-37.3l0.3 1.9-0.9 1-0.7-0.4 0.4-1-0.2-1.3 0.3-1 0.7 0 0.1 0.8z m-6.5 1.1l-0.4 0.8-1.5 1.6-0.9-0.3 0.5-1.2 0.7-0.2 0.1-0.7 1.5 0z m2.5-4.1l-0.5 0.4 0.3 1 0.7-0.1 1 2.1-0.1 1.6-0.6 0.4-0.6 3-0.5 1.3-1.2 0 0-0.5 0.7-2.1-0.8 0-1.3 3.5-1.2-0.4 1.4-3.5 1-1.5 1 0.2 0.2-3.1-0.3-2.2 0.8-0.1z m-12.5-38.3l0.5 0.7-0.7 0.8-0.5-0.8 0.7-0.7z m92.4-31.2l-0.2 0.8-1.6-0.2-1.1-0.8 1.2-0.8 1.7 1z m-22.3 4.7l0.5-0.1 1.5 1.1-0.3 1.8-1.7 2.3-0.9-0.5 0-4.3 0.9-0.3z m-61.5 12.6l-0.5 1.1-1.9 1 0.2-1 2.2-1.1z m76.4-31.5l0.9-0.1-0.2 0.9 0.5 1-0.3 0.6 0 1.2-1.7-0.6-3.1-1.3 0.1-0.9 2-1.2 2-0.2-0.2 0.6z m-167.5 28l0.4 0.7-0.5 0.5-0.8-1.2 0.9 0z m164.6-31.1l0.8 0.3 1.3 1.2-0.3 0.6-1.6-0.2-0.7-0.5-0.4-1 0.9-0.4z m-84.4 16.6l1.3 1.5 0.2 1.3-0.3 2.5-0.4 1.5 0 1.1-0.8 2.4-0.6 0.2-0.8-1.2-1.6-0.9-1-1.8 0-2.7 0.9-2.4 0.2-0.9 0.5-0.6 1.6-0.4 0.8 0.4z m83.9-24.7l1.6-0.6 0.4 0.4-0.7 2-2.1 0.1-0.4-0.5 0.3-1.3 0.9-0.1z m-55.9 14.2l0.5 0.4 2-0.3-0.3 1-1.5 0-1.9-0.7 1.2-0.4z m20.4-6.9l2 0.4 2.4 1.7-0.8 1.1-1.9 0.3-1.1-0.8-0.1-0.6-1.3-1.4-0.6 0.3-1.1-0.9 2.5-0.1z m-65.2 12.6l1.5 0.3-0.4 1.7 0.3 1.3-0.9 1.2-0.9 0.5-0.5 1.6-1 1.1-0.6 1.2-1.7 1.9-0.3 0.1-1-0.8-0.8 0.3-1.4 1.4-0.7-2-1.1-1-0.1-1.2 1-1.2 0.7-1.8-0.1-1.6 1.2-1.5 1.1 0.9 0.7-0.2 1.4-1.3 1.8-0.1 0.9-1 0.9 0.2z m20-10.4l0.3 0.4 1-0.7 2-0.1 0.9 0.3 0.6 0.9 1 0.9-0.5 1.8-1.6 1.1-1.8-1.3-2.3-1.9-0.2-0.7 0.6-0.7z m79.6-20.8l-1.5-0.6-1-1.6 0.5-0.9 2 3.1z m-72.9 17.1l0.1-0.3 2.7 1 1 1.1-0.4 1.4-1.7-0.1-2.2-1.6-0.8-0.2-0.1-1.3 1.4 0z m68.4-22.5l0.9 0.4-0.2 0.9 1.3 0.2-0.3 0.8-1.5-0.8-0.5 0.4-0.9-0.4 0.3-1 0.9-0.5z m-71.5 18.5l-0.8 1.2-1.5 0 0-0.7 1.9-0.7 0.4 0.2z m20.9-11.1l0.3 1.6-0.5 0.7-0.5-1.4 0.5-0.4-0.8-0.7 0.7-0.8 0.3 1z m43.5-16.2l0.7 1-0.6 1.1-1.2 1.1-0.3-0.4 0.7-2.2 0.7-0.6z m10-18.3l2 0.2-0.6 1-1.3-0.7-0.1-0.5z m-110.1 27.3l-1.3 0.6-0.2-0.7 1.5 0.1z m-11.8 2.2l0.8-0.6 0.7 0.3 0.3 1.3 0.8 1.1-1.3 1.2 1.4 0.9 0.5 1.4 1.2 1.7 0.4-1.1-0.1-0.8 0.7-1.9 0.9 0.9 1.7 0.8-0.4 0.8 0.9 0.8 1.5 0.4 1.6-0.2 0.9 0.2 0.5 1.3 0.9 1.1 1.9 0.6 1.1 1.1 1 0.3 1-0.4 1 0.9 0.5-0.1 1.8 1.8 0.5 0.2 0.9 3.3 0.8 0.8-0.1 0.8-1.5 1-0.2 1 2.8-1 0.4-0.6 1.9 0.4 0.8-1.4 1.3 1.1 1.1 0.5 0.2 0.6 2.1 1.8-1.5 0.6-0.5 1.3-0.9 1-1.1 1.8-2.7-0.8-1.1-0.2-0.7-0.6-0.8 0-1.3-0.5-2.3 0.4-0.5-0.7 0.1-0.7 0.8-0.8-0.3-0.9-0.9-0.5-1.8 0-1.3 0.6-0.4-0.6 0.7-1.5-0.3-1-2.9 1.5-0.6 1.4 0.6 1-0.2 0.7 0.3 1.4-0.8 0.1-1.4 2.1-1.3 0.1-0.5 1-0.2 2.2-0.5 1.1-1.9 1.8-1.8 1.1-1.3 0.1-0.9-1.4-0.4-2.2 0.2-1.1-0.4-2.3-1-0.4-2.7 1.2-1.3-0.2-0.9 0.3-1.1 1.4-1.1 0.2-0.7-0.4-0.4-0.9 0.2-0.9 1.4-2.8 2.2-1.4 1.5-1.3-0.2-1-0.6-0.6-0.4-0.9 0-1.4-0.4-0.3 0-2.8 0.6-3.9-0.4-0.6 0.3-1.4-0.4-2.5-0.1-1.3 0.3-3.8 0.4-1.4 1.5-2.1 0.7-0.3 0.2 1.7z m2.2-3.1l1.9 2.1 1.1 2.5-0.6 1.2-0.8-0.3-0.2-1-1.6-1.2-0.6-2.4 0-0.8 0.8-0.1z m3.4-1.9l1.6 0.5 2.2 1.6 0.1 1-0.5 0.4 2 1 1-0.1 0.3 0.8-0.5 0.7-0.7-0.5-1 0.2-0.8-0.3 0.5-0.9-1.1-0.3-0.4 0.6-1-0.2-0.1-1.9-0.5-0.8-1-0.3-0.7-0.9 0.6-0.6z m6.1-3.4l0.6 0.5-0.1 0.9-1.2-0.7 0.7-0.7z m103.5-39.2l0.1 0.4-1.1 2-0.5-0.5 0.3-1.3 1.2-0.6z m-6.6 0.2l1 0.7-1.6 0.5 0.1-1 0.5-0.2z m-227.8 25l-0.3 0.6-0.9-1 1.4-0.4-0.2 0.8z m226-26.8l-1.3 0.3-0.1-1.8 1.2 1 0.2 0.5z m-231.4 18.2l1.3 0.6-0.4 0.9-0.9-0.9 0-0.6z m177.5-9.7l2.8 0.1 1.1-0.1 0.7 0.4 0.7 2.5-5 1.2-1.5-0.7-1-1.6-0.2-1.1 1.4-0.4 0.5-1.6 0.6 0.4-0.1 0.9z m38.7-13.6l0.2 1-2 0.2 0.6-0.9 1.2-0.3z m-99.5 26.1l-0.3 2-0.5 1-1.4-0.8-0.7-1.7 0.4-0.6 0-0.8-0.8-0.5 0.2-1.5 0.7-1.7 0.4-0.3 1.4 1.2 0.1 1.6 0.5 2.1z m53.5-14.1l0.5 0.3 2 0.2 1 1.5-0.3 2.3 1 1.7 0.8 3.5-0.5 1.8-0.6 1.2-0.6 0.1-1.6 1.8-1.9 0.2-0.5 0.5-1.4 0.5-1.8 0.2-0.5-0.4-1-1.8-0.4-0.3-0.2-1.2-0.9-2.1 0.1-2.3 0.9-4.2 0.6-1.6 1.7-1.4 1.2 0.2 0.7-0.8 1.7 0.1z m-16.7 5.4l-1-0.5-0.1-1.7 1-0.3 0.8 0.8-0.7 1.7z m23.9-6.2l-1.7-2.1 0.4-0.7 1.4 1.4-0.1 1.4z m-184.1 4l-1 0-0.6-0.6 1.1-0.4 0.5 1z m30.8 5.1l-0.6 0-1.2-0.9-0.6-1.4 0.9-0.4 1 0.2 1 1.1 0.1 0.9-0.6 0.5z m130.4-9.5l-0.2 1 0.2 1.1-0.5 0.6-1-0.2 0-0.7 0.9-0.6 0.6-1.2z m20.2-3.4l-1.3 0.3-0.8-0.7 0.4-0.8 1.7 1.2z m-1.9 0.6l0.9 0.7 0.3 2.2-1 0-0.3-0.7-2-1-0.5-1.7 0.4-1.4 1.4 0.4 0.8 1.5z m-134.4 8.1l0.4 1.6-0.9 1.3-2.2-1.4-0.1-0.3 1.3-0.9 0.3-0.9 1.2 0.6z m8.2-1.4l-0.2 1.6-1 1.1-1.2-0.8 0.1-3.1 0.5-0.6 0.6 0.2 0.8 1.5 0.4 0.1z m0.7-0.3l-1-0.8 0-1.2 0.9-0.3 0.3 1.3-0.2 1z m46.7-6.2l0.7 1.8-0.6 0.5-1-2 0.9-0.3z m59.1-7.9l0.7-0.1 0.7 1.1-0.4 1-0.6 0.2-0.1 1.9-0.6 1.3-0.3 1.4-1.4 1-0.3 0.5-0.9-0.2-0.3-0.8 0.3-0.7 0.3-1.7 1.1-0.5 0.4-0.7 0.2-2.5 1.2-1.2z m-15.9 2.3l1.1 0.1 0.2 0.8-1.7 0.3-0.4-0.9 0.8-0.3z m-41.3 5.1l-0.3 1.8-1.2-0.9 0-0.6 0.9-0.9 0.6 0.6z m63.9-9.2l2 0 0.1 1.1-1 1.7-0.1 0.9-0.7 0.6-0.6-0.3-0.9-1.5-0.2-1.7 0.4-0.8 1 0z m-118.1 7.2l0.8 0.2 0 1.1-1 0.3 0.2-1.6z m22.5 0.5l2.4 0 0.2 1-0.2 1.8-0.8-0.4-0.4-0.8-1.1-0.8-0.1-0.8z m141.2-21.9l-1.3 1.2-0.6-0.1 0.9-1.3 1 0.2z m-136.5 21.3l1.5 1.2-0.2 1.9-0.6 0.8-0.9 0.1 0.3-1.2-0.6-0.9-0.5 1.8-0.6-2 0.4-1.5 0.7-0.6 0.5 0.4z m133.2-22.5l1 0.8-0.7 1.8-1.5-0.7 0.4-1.1 0.8-0.8z m-47.5 12.7l0.2 0.5-0.5 1.1-0.9 0.5-0.9 1.2-0.7-0.2-0.3-0.7 0.4-1.3 1.4-0.4-0.3-1.1 0.6-0.3 1 0.7z m-8.5-0.3l1.4 0.3 0.5 1.2-1.1 1.2-1.5 0.5-0.1 1.5-1.1-0.3-0.2-1.1-0.6 0.1-0.9-0.6-1.2 0.2-0.3-0.4 1.2-1.4 1-0.2 1.7 0.5 1.2-1.5z m-13.4 3l-0.2 0.4-1.4-0.4 0.8-0.7 0.8 0.7z m-43.3 3.3l-0.5 1.6-0.9-1 1.4-0.6z m-28.9 3.8l0.8-1.1 1.6 2.6 1.8 1 1.5 1.6 1.4 2.4-0.2 1.3 0.6 1 0.1 1.2 1.4 0.8 0.8-0.9 1 0.6-1.2 1.6-0.8-0.2-1 0.3-0.4 1.7-0.6-0.2-1.5 2-1.1 0.4-2.6-1.5-0.6 0.5-2.1-0.7-0.9-1.2-1.2-0.6-0.6 0.3-0.8-1 0.1-1.1-1.3 1-1.7-1.3 0.3-1.2-0.8-0.4-0.7 0.6-0.4 1-1.1-0.8-0.8-2.1 0.5-1.1 0.9-0.5 1.5 0.3 0.4-0.5 1.1-0.3 1.5-2.1-0.9-1.3 0.1-1.6 1.1-0.1 0.3-1.9 0.5-1.3 1.5-1.4 0.9 0.6 0.3 0.7 0.9 0.5 0.7 0.9-0.8 0.5 0.5 1z m50-9.4l1 0.3 0.7-0.4 0.7 0.9 0.2 0.9-1.3 0.3-1.2-0.5-0.3 0.4-1-0.6-0.3-1.1 1.5-0.2z m-65.3-6.4l1 0.1 0.6 1 0.4 2.1-1.1-0.5-0.8-0.8-0.1-1.9z m133.4-19.7l2.4 0.4-0.1 1.2-0.8 0.3-1.9 1.7-0.9-1.2 0.7-0.6-0.2-1.5 0.8-0.3z m-7.3-3.5l0.4-1.5 1 0.8-0.7 0.6 0.2 1-1.2 0.1-0.1-0.9-0.8-0.8-0.1-0.6 0.7-0.8 0.6 0.4 0 1.7z m1.5-2.2l-1.2 0.2-0.4-0.4 0.3-1.1 0.8-0.3 0.6 0.8-0.1 0.8z m-98 168l-11.3 0.1-11.3-0.2-5.6-0.2-8.5-0.4-8.5-0.4 3.3-49.1 0.2-2.4 0.1-2.6-14.3-3.9-6.8-1.9-6.1-1.9-11.2-3.6-1.2-0.6-1.2-1-0.6-0.9-4.7-8.1-0.3-0.3-4.9-0.8-4.9-0.9-3.1-3.4-5.6-6.2-4.4-5.1-5.1-6.1-5-6.2-4-5.3-4-5.3-3.4-4.8-0.1-0.3 5.7-20.6 1.4 2.5 1.1 1.2 1 0.3 1.3 0.9 1 0.4 2.6 1.7 0.6 1.6 1.7 1.9 3 1.8 0.9 1 1 0 0.4 0.4 1.9 0.8 0.7-0.1 0.4 0.8 0.8-0.6-0.9-1.1 0.8-0.3 1.1 1 0.3-0.5 1.4 0.2 1.6 1.5 1 0.6 0.9 1.8 0.9 0.7 0.5 1.7 0.7 0.6 0.4 2 0.6 0.7-1 1.1-1.6 0.6-0.4-0.5-1 0-1-0.3-0.6 1.4-1.4-0.2-0.7 1.3 0.5 0.6-2.2 0.5-0.1 0.4 1.2 0.7 0.6 1.1 1.7 0.2 1.8 1.4 1.1 0.2 1.5 1 2.8 0.3 1.3 0.8 3.2 0.5 0.6-0.8 0.7 0.4 1.6-0.2 1.6 0.8 0.2-0.6 1.3-0.6 1.3 1 1.1-0.4 0.5-0.6 0.9-0.2 0.9-0.7 1.1 0.2 0.3-0.7 1 0.6-0.4 1.5 0.9-0.1 0.5 1-0.3 1.2 0.9 0.5 0.5-0.7 1.9 0.6 0.3 0.6 0.1 2.1-0.6 0.5 0.7 1.1 0.7-0.4 0.3-1.9 0.8-0.3 0.4 2.7 2.1 2.3 0.3 1.6-0.1 1.6-1.3-0.6-0.5 0.7 0.3 1.5-0.2 0.8 0.7 0.5 0.7 1.2 0.5 1.8 1.8 3.7 0.4-0.2-1.6-3.1-0.3-1.5 0-4.1 0.8 0.4 0.5 0.9 1.5-2-1.2-1.9-0.4-2.3 0.6-1.7-1.8-2.8 0-0.6 0.6-1.6 1.4-0.6 0.2-0.4-1.2-1 0.3-1.2 0.7 0.1 1.5 0.9 2.7-0.8 0.8 0.4-0.1-1.5 1.7-0.3 1.3-1.8 0.8 0.4 0.8-0.8 1.1 0.2 0.4-0.9-0.7-2.1-1.1 0.5-2.3 0.7-0.4 1.4 0.3 0.5-0.7 1-0.5-1.1-1.4 0-0.7 0.9-1.9-0.6-0.1-0.4-1.6 0.1-0.3 0.8 0.7 1-1.1 0.7-0.3-0.4-1.8 0-0.5-0.5 0.4-1.1-1 0-1.1-0.4 0.4-0.8 1-0.7 1.2-2.1 0.8-0.8 2.4-0.1 2-0.4 0.6 0.1 0.8-0.6 4.6-1.6 0.5-0.5 2.1 1.3 1.2 2.2-0.5 0.9 0.5 1.7-0.8 1.1 0.8 0.5 0.2 0.9 1 1.3 0.5-0.7 1 1.1 1 0.3-0.5 1.2 0.8 1.6 0.9-0.3 0.8 0.6 0.8-0.3 0.6 0.4 1-0.6 0.7 0.1 0.2-0.8 0.9 0.3-0.2 1.3 1.3 1.3 0.7 0.1 0.9 1.6 1.5 0.6 1.1 0.8 0.6-0.6 1-0.1 0.5 1 1.5 0.6 0.5-0.7 1-0.5 1.5 0.4 1.3-1.3 2.9 0.2 0.4 0.4 1.6-0.1 0.7 0.5 1.1 0.1 0.8 1 1.7 0.2 2.9-1.3-1.8-2.1 0-1.4 1.1 0.3 1.4 1.8 0.7 2.1 0.8 0.8 1.4 0.8 0.4 0.6 0.9-0.1 0.4-0.5 1.4-0.4-0.7-0.7 0.4-0.6-0.5-1.7-0.5 0.3-1.6-1.8-1.2 0.5-1.6 1.2-0.2-0.8-0.8-0.9-0.3-1 0.7-1.3-0.9-0.7-0.2-1.7 0.6-0.5 1.2 1 0.5-0.8 1.5-0.5-1-1.3 0.7-0.6 1 0.5 1.2 0.1 0.8 0.5 1.3 1.6 0.4 1.5 1.2-0.6 1 1-1.6 2 0.2 0.7 1-0.3 0.2-1 0.7-0.8 2-1.1-0.4 1.5 0.3 0.4-0.3 1.1-0.7 3.5 0.2 1.1-1.5 2 0.7 1.5 1.1 0.4-0.6 1.2 0.8 1.3 1.8-2 1 0.2-0.2 0.8-1.2 1.5 1.5-0.4 0.7 1.1 0.3 2.2-1.4 0.4-0.3-0.5-1.1 0.5 0.2 0 0.4 0.6 1.6-0.4 0.8 0.4 0.4-1-0.4-0.4-0.2-2.1 0.4-1.4-0.8-2.9 0.4-0.5-0.7-1.7-1.2-1 0.1-0.7 0.7-0.6-0.2-1.3 0.8-1.6-0.2-0.7 1.1 0 2 0.5 2.6-3 0.6-0.3 0-1.5 1.3-1.4 2-1.3-1-0.6 0.5-2.7 0.2-0.8-0.3-1.4-1.3-0.7-0.7 1.4-0.3 2.2-0.9 0.1-0.6 0.4-1.1-0.4 0.4-1.9 0.9-1.9 0.6-0.1 0.5-1.4-1-0.3 0.4-2.5 1-0.4 1.1 0.7-0.3 0.9 0.9 0.3 1.2-1.9-0.7-0.2 0.5-1.5-0.4-0.7-1.6 0.7-0.2 0.7-1.9-0.2-1.1-1.7-0.2-0.9-1.5 1-2.6-1.6-1.2-1.4-1.6 0-0.6-1.1 0-1.3-0.7-0.2-1.1-1.8-0.4-2 0-1.1 1.5-3.3 0.3-1.1-1-0.9-1-2 0.6-2.9 0.4-0.5-0.7-0.9 0.5-0.6 0.1-1.4 1-1.7 1.1-0.4 1.5 1.8 0.6-0.1 0.3-0.9-0.4-0.9 0.4-0.9-1.6-0.4-0.6-0.6 0.4-1.1 1.6-1.4 0.9 0 0.3-3.3 3.1-0.8 0.6 0.8-0.3 1.4-0.8 0.5 0.6 0.7 2.2-0.3 1.5 1.1-0.4 0.8 0.8 1.1 2 1.5 0.3 1.1 0.8 0.5 0.3 1.9 0.4 1-0.1 3.6 0.5 1.3 0.6 0.5 0.4 1.2 1.7 0.8 0.3 1.3 0.5 0.9 0.7 2.1 0.6-0.7 0.6 0.2 0.3 1.8 0.6 0.4 0.1 0.7-2.1 0.4-1.4-1.2-0.8 0.6-0.1 1.1 1.7 0 0.9 0.9-1.3 1.6-0.2 0.6-1.3 0.8-1.5 1.7 1.9 0 1.9 1.9 1.5 0.5 1-1 0.7-1.2 0.9 0.3 0.8 1.8 1-0.4 0.7 0.6 0.5-0.7 1.1 0.6-0.2 0.6-1.5 1.2 0.1 1.6-1.1 0.5 1.3 1.5 0.6 0.3 0.3 1.2 0.9 1.5 0 2.4-0.3 1.2 0.4 0.5-0.1 1.4-0.4 0.7 1.3 0.9 0.6 1.7 0.7-0.3-0.2-0.7 0.7-0.9 0-0.8 0.6-0.7 0.1-0.8-0.6-1 1.1-2.9-0.4-1.3 0.3-1.8 0.5-0.7 0.9-2.3 0.7-0.5 1.3 0.6 0.5 1.2 0.7 0.8 2.5 1.9 1.3 1.6 0.7 1.9-0.1 0.8 0.8 1.9 0.4 1.8-0.7 1.9-1.3-0.8-0.4-1-0.7 1 0.8 2-0.4 1.3 0.1 0.8 0.9 2.6 0.6 1.3 1 0.8 1.9 2.3 1 0.9 0.2 1.2 0.8 1.3 0.8-1 1-0.3-0.1-1.5 0.8-0.8 0.6 0.5 0.9-0.1-0.2-3.3-0.3-0.9 0.5-1.7 1.1-2.2 1-1.4-0.1-1.8 0.5-3-0.4-3.3 0.2-1.3 2.2-0.2 1.2-0.7 0.7-0.8-1.7-0.1 0.9-1.5-0.3-1.1 1.2 0-0.4-1.1-2.3-0.3-0.7-0.9-1.3-3.5 0.1-1.6-0.5-1.1 0.4-0.5-0.4-1.1 1.6-0.6 2.2-1.1 1.7-0.3 0.9 0.4 0.7 0.8 1.5 0.5 1.9 0.2 0.5-0.5 1.2 0.2 0.5-0.2 1.6 0 0 1.5 0.7 1-3.4-0.1 4.7 0.9 0 0.9 0.6 1.7 1.1-0.8 1.2-0.1 1.4 0.7 0.8 0.1 0 1.2-0.7 1.5-0.6 0.2 0.1 1.3 0.7 0.4 1.1-0.1 0.8 1.1 0.2 1.9-1.6 2-0.7-0.1-0.2 0.8-0.8 0.7-0.4-0.9-0.9 0.7-1.7-0.2 0.5 1 0.9 0.7 0.1 1.2 0.6 0.5 0 1.1 1.1 0.3-0.1 1.6 0.6 1.3 2.7 2.5 1.1 0.6 1.5 2.1-0.2 2.5 0.1 2.6-0.4 1.4-0.9 0.4-1.3 0.2-0.3 2-0.4 0.9-1 0.7-1 2.4-1.2 0.1-0.8 0.4 0 0.7-1.5 2.2-1.1-0.1-0.1-0.8-0.8-1.2-0.9-0.1-1-1.1-0.1-0.8 0.4-1.4-0.7 0-0.4 1.3-0.7-0.2-0.4-0.9 0.3-0.6-1-0.5 0.1-1.2-1.4 0.1-1.9 0.4-1 0.8 0.5 1 1-0.6 0.2-1 1.4-0.1 0.5 1.5 1.2 0.8 0.3 1 0.9-0.2-0.2 1.3 1.5 1.4 2 3.5-1.5 0.1-1.5-1.4-1 0.4-0.4-1-0.9 0.6 1.6 1.9-0.5 0.4-0.8-0.6-2.1-0.3-0.8-0.4-0.7 0.2-0.6-2.6-0.6-1.1-0.7 0.1-1.1 0.8-2 0.4-2.6 0.2 0.1 0.9-0.9 0.3 1.1 1.4 1.5 0.2 2.2 1 0.6 0.4-0.5 0.9 0.1 0.8-1.1 0.9 0 0.6-1.1 0.5-0.3 1.4 0.2 0.9-0.4 0.9-0.7 0.5-0.6 1.1-0.7 0.4-0.7 1 0.2 0.9-1.5 1.1-3 0.2-1.7-0.8-0.7-1.1-1.3-1.1-0.3-0.8-1.5-0.7-0.7 0.2-2.1-1.8-2-1.3-0.7 1.6-1.2-0.7-1.4 0.5-0.5-0.6-4.3-0.3-0.7-0.3-1 0.4 2.1 1.3 0.2-1.2 1 0.3 2 0.2 3.2 1 1.2 0.8 0.8 1 0.7 0.4 0.6 1.4 1.2 0.8 0.9 1.4 2.4 0 2.8 0.2 0.9-0.2 1.1 0.2 2.1-0.3 1.8 0.3 0.8 1.2-0.1 1.1-0.7 0.9-0.9 2.7-1.3 3.3-0.9 0.6-0.4 1.1-0.1 1.4-0.6 0.8-0.1 1.2-0.9 0.6-2.8 2.5-2.5-0.7-0.6 0.8-0.6-0.7-1 0.3-1.6-1-0.6 0.6 0.8 1.3-1.7 0.1 0.2 1 0.7 0.8-1 2.2-3.2 1.3-1.4 0-1-0.7-0.5 0.1-0.8-0.9-2.2-0.5-1.7 0.1-1.9-0.3-0.8-0.7-1.4-0.3-0.3-0.5-1.6-0.4-0.6-0.5-1.8-0.7-0.6 0.5-1 0 0.7 1.5 0.7 0.4 1-0.4-0.6-0.7 0.3-0.6 1.1 0.8 1.8 0.9 0.8 0.1 0.8 0.6 0.5-0.5 0.8 0.9 0.8 0 0.8 0.4-0.8 1.2-1.4 0.8 0.3 0.5 2.8-2.1 1.1-0.5 1 0.8 0.2 0.8 1.6 1 1.8 0.3 0.3 0.8 1.1 0.5 0.6 1.1 0.1 2 0.3 0.7-0.9 1.7-1.2-0.1-1 0.8-0.8 1.3-0.5 0.2-3.2-0.7-0.7-0.3-0.4 0.9-1-0.4-0.7 0.6 1.5 1.6 1.9 0.3-0.5 1.4-1.6-0.3-1.5 1-1.2 0.3 0.1 1.2 0.7 0.9 0 0.8-1.1 0-1.7 0.9-0.3 0.6 1.1 0.3-1.5 1.5-0.8 1.2-0.9-0.5 0 1.1 1.2 1.3-3.2 2.5-0.8 1.3 0.9 1.7-1.2 0.6 0.2 0.5-0.3 1.4-1.1 2.9-0.6 0.6-0.3 1.9-0.5 0.7-0.2 1.3-1 1 0.4 1-0.5 1.6 0 2-0.6 1.3z m-6.9-90.2l-0.3-0.7-0.8 0.6-1.9-1.6 0.3 1.1 1.3 1.2 0.7-0.7 0.7 0.1z m-3.7-81.9l-0.3 0.4-1-0.8 1.1-1.7 0.5 1.4-0.3 0.7z m-0.2-5.4l0.9 1-0.4 1.3-1.3 0.5-0.7-1-0.1-1.2 0.4-1.2 0.6-0.5 0.8 0.4-0.2 0.7z m-97.5 38.5l0.9 0.5-1.5-4.1 0.4-1.5 5.4 1.2 8.2 1.8 6.4 1.2-0.4 2.4 1.1 0.1 1.3-0.2-0.4-0.7 0.3-1.2 4.3 0.7 7.5 1.3 5.5-35 0-0.6 0.1-0.4 0.9 0.5-0.7-2 0.2-1.2 0.1-0.7 0.6-3.3 1.4 1.2-0.6 0.5 1.4 1.8 0.8 0.2 0.4 1.2-0.1 1.8 0.7-0.4 1 0.7 0.1 0.9-0.7 2.1 0.3 2.4 0.4 1.1-0.3 2 0.9 0.7-0.6 0.9-0.1 1.2 1.1 1.9-0.1 0.7 1.6-0.9 0.6-0.9 1.6-1.6-0.7-0.5 0.1-0.7-0.8-0.7 0.1-1.6-0.6-0.3 0.2-1.6 0.4-0.7-0.4-2.6 0.2-1.5-0.3-1.9-0.2-2.8 0.2-2.5-0.4-1.2 0.2-0.6 1-0.8-0.1-1.2 0.5-0.6 1.5 0.6 0.8 0.7 1 1.6 0.9-1.6 0.8 0.1 0.5 1.2 0.8 0.7 0.9 1.6 0.7 0.6 1 0.2 0.2 1.1 0.6 0.5 0.8 3-0.6 0.7 0.7 0.8-0.3 0.4 0.4 2.1-0.4 0.6 1 4-0.4 0.9 0.6 2.5 0 1.3 0.6 0.5 1 3.4-0.2 1.3 0.4 0.6 0 1.6-1.1 0.4 0.1 1.7-1 1.2 0.2 0.7 2 2.7 0.2 1.7 0.8 0.6 1.3 2.2 1.9 0.5-0.1-1.2 0.8 0.2 0.6 0.8-0.1 1.1 2 1.5 1.3 1.2 0.8 1.1 1.2-0.4 0.5 0.5-0.3 0.7 0.2 1.3 1.6 0 0.7-0.8 0.6 0.3-0.1 1.4 0.3 0.9-0.3 1.1 0.4 1.8-0.6 2-1.7-0.3-0.5-1.2-1.4 0.9-1.4-1.7-1-0.7-0.3 0.8-1 0-0.5 0.6 0.4 0.8-0.2 1.8-1.4 0.2-1.7-1.2-0.6-1.2-0.9 0.2-0.2 0.8 2.2 1.7 0.1 1.3-0.3 0.7-0.2 2.3 1.2-2.5 1.5-0.2 0.4-1 0.9-0.2 1.1 0.3 0.6 1-1 1.1 0.3 0.7-1 0.3 0.5 0.9 1-0.8 0.8 1-0.1 1-1.1 2-2.1 0.5-0.8 0.8-2.5 0.7-0.7-0.7-0.8 0.1-0.3 0.7-2.8-1.4-1.2-0.3-0.2-0.9-1-0.1-0.8 1-2.6-0.7-0.5-0.8 0.6-0.6 1.2-0.6-1.7-0.8-0.9-0.2-0.4-0.7-1.6-0.5-0.5 0.3-1.1-0.1-1-0.7 0.8-1.3 0-1.6-1.1-1.6-0.9 0.8-0.2 0.9-1 0.1-0.1 1.7-0.6 1-0.7 0.3-1 1.4-0.8 0.4-2.4 0.4-1.4-0.1-1.5-0.4-0.3 1-2.2 1.5-2 0.3-1.5 0.6-3-0.3-0.9 0.6-1-0.7-2.1 0.6-0.5-0.5-0.9 0.7-1.3-0.6-3.6-0.2-1.7-0.3-1 0.5-0.7-0.3-1.7 0 0.9-1-1.1-1-0.3-1.8-0.7-1.3 0.2-1.5 0.7-0.7 0.2-1.2-0.3-1.6 0.7-0.4-2.6-1.2-1.1-0.8-2.4 0-0.7-0.6-0.9 0.4-3.6-1.6-1.9-1.9-0.8-1 0.5-0.4-0.1-1.1-1.3-0.6 0.5-0.7z m51.6-48.6l-1.7 0.3 0.1-1.1 1.4 0.1 0.2 0.7z m12.4 5.4l-0.8 1.8-1.3 1.5 0 0.7-1.1 1.2-1.1 0.5-0.1-0.8-0.9-1.4-0.8-1.8-0.6-0.6 0.1-1.4-0.9-1-0.5-1-1.1-1-1.1-0.4 2.3-3.1 3.7 0 1.5-0.4 0.9 0.4 1.8 2.1 0.7 1-0.5 1.7-0.2 2z m102.6-10.6l1.1 0.7 0.7-0.3 1.3 0.2 0.9 0.6 2-0.4 0.8-0.5 2.6-0.7 1.3 0.7 2 0.3 1 0.6 1.1 1.4 0.1 0.6 1.3 0.3 1.1 1.4 0.5 1.2 1.2 0.2 0.1 2 1 0.2 0.3 1.3-0.7 0.7-4.4 0.3-0.5-0.3-3.3 0.4-1.9 1.1-2 1.9-0.9 0.3-0.8-0.1-1.9-1-1.5-2.7 0.1-1.2-0.5-1.6-0.9 0.1-1.9-0.4-0.4-0.4-0.4-1.9 0.3-0.9-0.8-1.5 0.2-1.7 0.9-1 0.9 0.1z m-26.1 2.2l2.2-0.3 1.2 0.2 2.7 0 1.1 0.9-0.2 1.2-1.9 2.4-0.5 0.2-1.5 3.4-0.8 3.3-1.3 4.2-0.1 1.5 0.4 1 1.8 1.9 0.5 1.6-0.6 1.3-0.1 1.6 0.6 2.8 1.6 2.9 0.8 0.8 2.5 3 1.5 0.8 1.1 0.1 0.7 2.1-1.6-0.1 0 0.5-1.4 1.4-0.7-0.4-1.3 0.7-0.9 1.5-2.6 1.4 0.7 0.2 1.7-0.6 1.7-1.6 0.4-0.7 1.3-0.5 1.4 0.1 1.5-0.2-0.3 1.2 0.2 2.2 0.9-0.7-0.5-1.9 0-1.4 0.5-0.4-0.7-0.9 0.2-2.1 0.7-0.7-0.3-1.2-1-1.7-0.7 0.8-1.7-0.3-1-1.2-0.2-1.1-0.6-1-2.2-0.9 0.1-0.7 1 0 0.8-0.6 0.1-2.3 0.8-0.8 1.2 0 0.9-1.7-0.1-1.3-1 0.8-1.5 0.1-0.8-0.7-1.1-2.4-0.2-1.5 0-2 0.3-1.6 1.7 0.2 1.1 0.6 0.9-0.3-2.1-1.2-1.6-0.1 0.1-1.3 1.8-0.6 0.7 0.5 1.4-0.4-2.9-1.4 0.2-1.4 1-1.1 3.3-2.2 1.4-1.5 1.8-1.4 0.5 0.2 0.8-1.4 3.2-0.5 2.3-0.1 1.6 2.5 0.5 1.8 0.1 1.4 0.6 1 2.2 0.8 0.6 1.1-0.1 1.5 0.1 1 1.1 1.3 0.6 0.2 0.5 1.2-1.1 1.6 0.3 0.7-0.9 0.9 1.2 0.2 0.3 1.7-0.5 0.5-0.6 1.5 0 0.9 0.7 1.3-1.2 0.4 0.5 0.7 0.6-0.2 0.4 0.9 1.4-1.3 0-0.9-0.7-0.9 1-0.6-0.4-0.6 0.8-2.3 0.5-0.2 0.2-1.5 0.6 0.4-0.1 1.1 1.4 0.9 0.7-1.2 0.8 0.6 1.2 2-0.3 2.9 0.4 0.3 1.7 0.5-1.2-1.4 0-2.1-0.4-0.8 0.4-0.6-0.4-0.8 1-0.7 3.8 1-0.3-0.5-1.9-0.5-1.6-1-0.3-1.3 0.5-1.3 1.4-1.8 0.8-0.3 0.7-0.9 3.1-0.4 1 0.4 0.3 0.9 2.1 0.1 0.7 0.6 0.4-0.8 0.9 0 1.3 0.5 1.3 0.2 0.2 0.6 1.8 2.6-0.3 1.1 0.2 0.8 3.7-0.1 0.9 1.4-0.2 0.8 0.1 1.5-1.2 0.6-0.6 1.1 0.7 1-0.5 1.7 0.9-0.4 0.1-1.5 0.8-1.3 0.8-0.2 0.7-0.8 1.4-0.2 0 0.8-0.5 0.9-0.4 1.8 0.2 1.5 0.5-0.1-0.1-1.4 0.5-1 0.7 0.4 0 1.7 1-0.3 1.2 1.4 1.4 0.3-0.5-1.7 1-0.6-0.6-0.8 0.7-0.9-0.2-1.3 0.5-0.3 2.7 0.3 1.8 0.5 0.9 0.6 2.1 2.2-0.6 1.7-0.1 1.4-0.8 0.3-1.3-0.3-0.7 0.6-0.1 1.8-0.5 1.4 1 0.5-0.5 1.2 1.6-0.9 1.4-1.6 1.1-0.5 0.2-2.3 1.4-1.6 0.8 0.3 1.1 1.8-0.5 1.6 0 1.7-1 1-0.1 1.1-0.4 0.5 0.7 0.7 0.5-0.2-0.2-1.6 0.6-0.4 0.7-1.4 1.5-1.5 1.1-1.5 0.7 0.2-0.3 1.9-0.8 1.4 1-0.3 1.3-2.1 1.7-0.6 0.7 0.6 3.9 0.8 0.7 1.1-0.2 1.9-0.8 0.5-0.2 0.6-1.3 0.7-1.8 1.4-1.2 1.5 0.7 0.2 1.9-1.4 2.2-0.9 0.6 0.8-0.5 2 0 1 1.3-0.2 0-1.8 0.9-0.4-0.6-2.1 0.4-1.5 1.8 0.2 1.7 1.2 2.2 2 1.6 2.9-1 0.5-2.1-0.2-1.2 0.4-0.7 1.2-0.3 1.3-1.5 0.2 0.6 0.7 3.2 0.8 1-0.5 2.7-0.7 2.6 1 0.7 0.6 0.5 1.3-0.3 0.8-1.1-0.2-1.9 0.3-0.5 0.7-0.9 0-3-1 0.9 1.1-0.6 0.3-2 0.3 0.6 0.5 0.8-0.2 1.4 0.3 2.2 0.6-1.2 1.4 0.2 1.9-1.3 0.3-1 1.1 0.6 0.4 1.8-0.1 0.5 0.3-0.9 1.1 2.5 0.7 1.2-0.9 2 0.3 1.2-0.1 1.1 0.4-0.2 0.9-1.9 0.1-1.9 1.6 1.4 0 0.6-1 0.8-0.2 1.9 0.8 0.7 0-0.1 1.2 0.4 0.7 1.2-1.1 1.2-0.1 1 1.5 1.1 0.2 1.5 0.9-0.2-1.4 0.3-0.6 1.1-0.3 0.2 0.9 0 2.3 0.4-0.1-0.2-2.1 1-1.1-0.3-0.6 0.6-0.8 1.8 0.4-0.6 0.9-0.4 1.4 0.5 0.7 1-0.2 0.8-1 2 0.7 0.8 1.4 0.7-0.3 0.5 0.9 0.1 1.1 0.6-0.1 0.7 1.1-0.1 0.8-1.7 0.7 0.6 0.7 1.2-1 0.8 0.3 1.6-0.7 0.9 0.1 0.1-1 0.5-1 0.9 0.2 0.6 0.9-0.1 0.9-0.8 0.8 0.5 1.1 0.2 1.3-1.1 1.2 1.1 0.8-0.1-1.2 1.8-1.9 1.6-0.3 0.7 0.4 0.9-0.9-0.4-0.9 0.6-0.8 0.8 0 0.1 1.3 1-0.8 1.7 0.8 2.4 1.8 0.5 0.9-0.5 1.1-0.7 0.2-1.3-0.9-0.7 0.1 2.3 1.7 1 1.2-0.6 0.8-0.7 0.2-0.5 0.8-0.9-0.2-0.7 0.4-0.4-0.9-2.1 0.2 0.2 0.4 1.6 0.6-0.4 1.5 2.3 0.6 1.6 0.8-1.2 0.6-1 0.9 1.4 1.6-0.9 0.9 0.2 1.7-0.7 1.3-0.8-0.5-1.3 0.5-1.3-0.8 0.7 1.8 0 0.8-1.2 0.5 1.4 0.9-0.1 0.9 0.9 0.3-0.3 0.7 0.7 1 0 0.6 0.8 1.4-0.8 1.9-0.8-0.4-1.2-1.2-1.1-0.1-0.8-0.5-1.6 0.2 0 1.4-1.2-0.3-0.2-1.1-1.3-0.1-0.5-1.9-0.8 0.9-0.8-1.4-1.1-0.4-0.4-0.8-1-0.4-0.6-1 0.1-2.1 1.9-1.9 0.2-1.5-0.2-1.7-0.5 0.1 0.3 1.5-0.4 0.8-1.8 1.9-2.5 1.3-1-1.9-1.1 0-1.4-1.4-0.1 0.9-0.7 0.1-0.4-0.8 0.1-0.9-1.4 0.1-1.6-2.6-0.3 0.9-2.2 0.6 1.7 0.9 0.2 0.8-0.4 1.5-0.7-0.1-1.2-1.2-1.5-0.2 0.1 0.8 1.2 1.3-0.1 0.5 2.1 1 0.9 0.1 0.4 1.5 1 0.5-3.1 1.8-0.7-0.1-0.9-1-0.2-1.3-1.4-0.3-0.5-0.9-0.6 0.6 0.2 0.7 1.3-0.2 0.5 1.1-0.7 0.4 0.2 1.4 1 0.3 0.6 0.8 1.1 0.2 0.6 0.8-0.1 1 2.2-1.6 1.1 0.2-0.1 0.9 0.6 0.4-0.7 0.7 2.1 0 0.2 2.5 0.7 0.7 0.8-0.4 0.3 1.7 1 0 1.2 0.9 0.4-0.8 0.8 0.9 1.4 0 1.7 1.4 0.7 0.1-0.5-1.8 0.2-0.2 1.9 1.1 0.4 1.3-0.5 0.8 0.3 1.2 1.6-0.2 2-0.6 0.2 0.8-0.4 1.8 0.3 1.4 1.7 0.9-0.4 1 1.5-0.5 1.3-0.6 0.4 0.6-1 1.4-0.2 1 0.5 0.6 1.5-0.1 1.4 0.9 0.1 1.1 1.6 3.2-0.6 0.8-1.2-0.8-1-1.7-0.9-0.9-0.8 0.6 0.6 1.1 1.6 1.7-0.5 0.7 1.6 0.9 0.7 1 0 1.2 1.3 0.2-0.5 0.8-0.7 0.3-1.6-0.7-0.3 1 1.8 1.5 0.6 0.8-0.1 0.7-0.7 0.9-1.6-1.4 0.1-1.1-1.1-0.1-0.9 0.3-0.7-0.9-1.3 0.1-1.2-0.5-0.6 0.9-1.5-0.3-0.8-0.6-0.9 0.8-1.1-1.4-1.3-0.4-0.3-0.7-1.4 0-1.1-0.8-0.8-0.2-0.5-1-1.3-1.1-0.8 0 0.6 1.5 1 1-0.7 0.6-0.5-0.7-1.9-1.2-0.7 0.1-1.1-0.4-0.8-0.8-2.5 0.5-0.2 0.4 1.2 0.8 0.8 1.1 2.6 1.6 2.3 2.2 0.5-0.2 1.7 0.4 0.9-0.4 1 1.1 2.3 0.9 1.9 1.7 0.2 0.5 1.3-0.1 1.5 0.5 1.1 1.2 1.2 0.9 1 0.3 0.1 0.8 1.1-0.4 0.5 0.4-0.7 1.8 0.4 0.7 1.4 1.2-1.6 1.1-1.9 0-0.5-0.6-1.1-0.3-1.6 0-0.5 0.3-0.8-0.5-0.5 0.5-0.7-0.8-1.6 0.4-2-0.1-3.4 0.6-2.8-1-0.4 0.2-1.9-0.9-0.6-0.8-0.5 0.3-1.2-1 0.2-1.3-0.9-0.3-2.3 1.3-1 0.2-1.9-1-2 0.2-1.3-1-0.4-1-1.9 0.9-0.9-0.7-1.3-0.3-0.8-1.3-0.2-1.2-2 0.2 0.1-0.7 2.1-0.2 1.8-2.4-1.8 0.2-0.3-1.3-1.7-0.7-0.3 1.3-2.1 0.7-0.4-1.3-0.6-0.5-1.2-0.2-2.3-2.4-0.4-0.9-1.1-0.1-0.5-1.2-0.8-0.1-0.6 0.6-0.9-1.4 0.1-1.2-0.5-0.2-0.1-1-2.3 1.1 0.5 0.7-0.5 0.6 0.2 1.7-0.7 0-0.2-3.2-0.6-0.7-0.8-0.1-0.3 0.6-1.4 0.3-1.2-1.2 0.4-1.5-0.9 0.2-0.5 0.9 0.6 1 1.4 0.6 0.9 0.7-0.9 0.6 0.9 1.2-0.8 0.9-1.4-0.4-1.7 0.1-0.9-0.6-2.1-0.4 0.1 1.6-0.4 1.2-0.7-0.2-0.4 0.6-1.5 0.6 0.4 0.8-2.3 0.3 0.5 1.3-2-0.5-0.8-0.4-1 1-0.4-0.9-1.7-0.5-0.5 0.6-1.6-0.8 0.1-0.6-1.5-1.3-0.4-2.1 0.5-1-0.8-1.7 0.8-1.4 1.5-1.6 0.6-0.1 1-1-1.4-1.4 0-1.8 1.1-0.4 0.9 0.6 1.4-0.5 0.9 0.1 3.3 0.9 0.6 0 1.6 0.5 0.2 0.7 1.8 0.7 0.5 1.2-0.6 1.6 1.3 0.2-0.4-1.9-0.5-1-1.1-1.1-1.6-0.8 0.3-0.9 1 0.2 1.9-0.1 0.5-0.4 0.4-1.5 0.5-0.4 2.2 0.3 0.6-1.1 0.5-1.7 1.6-0.5 0.8 0 0.5 0.7 0.9-0.7-1.6-2-0.5-1.3-1.8-0.7-1.5-1.4-1.4-1-0.5-0.8 0.4-1.2 1.2-1.3 1.4-2.5 1-1.5 0.3-1.7 1-1.1 0.3-0.8 0.1-3.7 0.6-0.7 1.5-0.9 0-1.5 0.2-0.8-1.1-0.5-1-2.5-0.8-1.3-1-0.7 0-1.3-1.5-0.5-0.6-0.9-0.1-1.2-1-1.9-0.9-0.4-0.5-0.7-1 0.3-1.7-0.1-1.4-1.1 0.1-1 0.5-0.5-0.2-1.5-1.1-1.1-1 0.5 1.5 1.6-1.2 0.7-1.1 0.1-1-0.8-0.2-0.7-1.8-1.1-0.4-0.6 0.8-1-0.3-0.8-1.4 0.5 0.1-1.1 0.9-0.5-0.6-0.7-0.9 1.3 0.1 0.7-0.5 1-1.8-1.4 0.2 1.2-0.4 0.8-1.4 1.2-0.3 0.7-1.2 1.4-1.4 0.5-0.5-1 0.3-1.8-0.7-0.5-0.2-1.2 1-0.8 1.3-0.1 0.9 0.3 0.6-1.2 1-0.2 0-1-1-1.7-1.6-0.9-1.3-0.3-0.8 0.4-0.5-0.8-1.1-0.9-0.1-0.7 0.5-1 1.3 0.3 0.1-0.8-1.4 0-0.8 2-1.7-0.2-0.9-0.4 0.2-0.6 1.2-0.3-0.4-1.8-1.3 0.3-1.7-0.3 0.1 1.3-0.9-0.6-0.6-2.3-0.4-2.7-1.2-0.9-1.1 1.1-1.1 0.1-0.6-0.8-1.1-0.9-0.7-1.4-0.8 0.4-1.2-0.6-0.1 1.2-0.9-0.5-0.8 0.6 0.2 0.6 1.4 0.2 0.8 0.5 0.7-0.3 1.4 1.7 0.4 1.5 0.5 0.8 0.1 1.2-0.8 0.7-2.6 0.6-1.1 0.7-1-1.3-1.9-0.5-0.7 0.4-1-0.6-2.2 0.1-0.4-0.4-2.4 0.2 0.1 0.6 0.9 0.7 1 0 0.4 0.8 0.9 0.6 1.3 1.6-0.8 0.4-1.3-1.1-0.6-0.2-1.8-1.5-0.7 0.2-2-1.8-3.8-1.4 0.3 0.6 2.9 1 1 0.6 1 1.1 0.9 0.4-0.5 1.1-0.9 0.1-0.3 0.7-1.6-0.1-2.5-1.2-0.7-0.7-1.1 0-0.3 0.6-1.5 0.7-2-0.3-3 0.1-1.3-0.7-2.1-0.4-1.1 0.6 1.3 0.5-2 0.8-2.5-1.4-1.5-1.6-0.6-1.2-1 0.1-1-2-0.7 1.3 1.1 0.3-0.1 1-2-0.2-1.9 1.3-0.9-0.8 0.2-0.6-0.9-0.8-2.7-0.7-1.1-1.1-1-2.1-1.1-1-0.8-1.8 0.9-1.2-1.6-1.5 1.5 0.2 0.5 0.6 2.3-0.5 1.3 0.5 0.3 0.7 2 0.2 0.9-0.5 1.6 0 0.5-0.9-1-0.8-1.6-0.8-1-1.8-0.6 0.9-2.1-0.3-0.4 0.2-5.6-1-0.8-1.2-0.2-1.3-0.1-2.2 0.7-1.6-1.5-2.1 0.4-1.1-0.1-1.2 1-0.8-1-1.9 0-1.3 0.4-0.9 0.1-3 0.8-0.8-0.1-1 1-2.4-0.3-1.2 0.1-1.2 0.9-3.2 0.8-0.8 0.6-1.8 0.7-0.7 0.3-1 2.5-3.1 2.5-1.5 2.4-1z m-55.8 1l0.6 0.8 0.7 0.2 1.2 1.5 2-0.3 0.9-0.4 1.9-0.3 0.5-0.5 1.7-0.6 1.3 0.5 1.3 1.9-0.2 1.7-1.9 1.3-0.7-0.1-0.3 0.8 2.1 0.6 0 1.4-0.5-0.2-2.3 1.3-0.2 0.6-2.2 2.9-0.6 0.3 0.3 1.8 0.7-1.1 1.2-1 1.4 0.1 1.7 1.2-0.1 1.3 0.9 1.4 0.2 0.8-0.7 0.8 0.5 0.8 0.6-0.9 1-0.5 1.1 1 0 0.7 0.7 2.5-1.9 1.9 0.7 0.5 0.3 2-0.2 0.7 0.2 2.4-0.3 1.1-0.8 0.6-1-0.1-0.6 1.5-1.8 1.2-1 0-1.3-0.7-1.8 0.1 1.5 1.8-0.9 1.7-1.5 1.7-1.3-0.2-0.6-1.1-1.3 0.4-0.7-2.9 0.1-0.6-0.9-0.8-0.4-2-0.7-1.2-0.8-0.2-1.7-2.9 0.2-0.5-0.9-1.4-1.3-0.3-1.1-1.9-1 0.7-1.9-0.8-0.4-2.6-1-0.7-1.7-1.9-0.5-1.1 0.1-1.2 0.7-1.4 0.7-1.9 1.6-0.6 1.5 1.2-0.3 0.7 0.8 1.2 0.4 0.1 0.9 2.5 1.8 0.5 0.6-0.8 1.4 0.2 0.5-0.6 0.1-1.3 1.1-0.4-0.1-1.9-0.8-1.7-0.8 0.8-0.5-1 0.7-0.8 0.4-1.2 1.4 0.7-1.2-2.3-0.2 0.8-1.2 0.8-0.9 0.3-0.8-1-0.9-0.6-1.1-1.7 0.5-1.1 0.8-0.2 0.2-0.7 1.3 0.2 1.3 1.3 0.3-1.2-1.4-0.4 0.1-0.7-0.7-0.3-0.2-0.9 1-1.3 1-0.3 0.9 0.2 1.6 1.3-0.2-1-0.9-0.5 0.4-0.9 1-0.4 0.6 0.8z m9.3-2.3l-0.8 1.4-0.7 0.5-0.7 1-2.9 0.6-0.2-0.4-2-0.2-0.1-0.9 1.2-0.5 1.5-1.1 1 0.1 1.5-1 1.8-0.3 0.4 0.8z m20.4-0.4l0.4-0.3 0.9 0.6 0.7 1 0.7 0.1 1.2-0.7 1-0.1 2.4 0.3 1.6 0.7 1.9 0.6-1.2 3.2-1.5 3.1-1 2.2-1.2 3.9-1.4 3.8-1.3 1.8-0.9 0.3-1.1-0.4-3.4-0.7-3.3 0.5-0.1 0.5 1.7 0.6 0.1 0.9 1 0.9 0.5 1.5-1 1.9-0.5 0.3-0.9 2.4-0.3 1.4-1.1 0.5-1.8 0.2-1.8 0.8-0.2-1.5 0.4-0.5-0.6-1.4 0.2-2.3-0.3-1.3 0.4-0.3-0.7-1.2-0.1-1-0.6-1.1-0.6-0.2 0.1-1.1-0.4-0.4 0.2-1.9-0.5-1.2 0.2-1.2 0.4-1.1-0.1-3.4-0.3-1.1 0.3-2-0.5-0.7 0.3-0.9 0.9-1.1 0.8 0.2 1 1.4 0.7-0.3-1-1.3-1-1.8 0.3-1.7 0.8-0.3 1.3-1.2 1.1 0.1 0.4-0.6 2.5-0.1 0.4-0.5 1.6-0.2 2 0.7 0.3 0.7z m-18.8-7.8l-0.4 1.5-1.1 0.7-0.5-0.9 1.1-1.6 0.9 0.3z m7.8 0.3l0.5 1.1-0.4 0.3-1.5-0.5-0.7-0.8 1.3-0.9 0.8 0.8z m-33.2-12.1l-0.1 0.7 0.5 1.1-1.2 1.6-1.5 0.6-1.9-1-0.7-0.9 0.9-1.9 0.4-1.4 1.2-1.3 1 0.1 1.2 1.1 0.2 1.3z m36.9-3.7l2.5 3.5 0.2 1 0.9 0.7-0.3 1 0.5 1.3-0.2 1.2 0.6 2.3-0.2 2.7-0.5 1-3.5 0.5-1.1-0.1-1.5-0.9 0.2-0.6-1.1-1.1-2.4-0.3-0.8-1.3-1.2-0.4-0.8-2 0.5-2 1.6-0.9-0.4-0.6 0.9-1.4-0.3-0.4 0.9-1.5 2-1.7 0.5 0.2 1-0.8 2 0.6z m-7.4-0.7l1 0.7 0.5 0.7-1.3 1.5-1.1-1.3 0 1.4-0.6 0.4 0 0.7-1.2 0.1-0.3-1.8 1.4-1.1 1.1-0.4 0.5-0.9z m-22.2-5.9l-0.2 0.9-1.1 0.4-0.6 1.4-1.5 0.6-1.7-0.1 0.4-1.2 0.9-1.2 3.3-1.1 0.5 0.3z m29.9 4.1l-1.4 0.3-0.6-1-0.1-1.3-0.3-0.7 1.7-0.5 0.2 1.4 0.5 1.8z m-30.8-5.6l-0.2 0.8-5.2 1.6-0.9-0.3 0.9-1.1 0.8 0 0.8-0.6 3.4-0.8 0.4 0.4z m88.7-6.2l0.9 0.5-0.1 0.7-0.9 1.2 0.2 0.9-0.4 0.8-1 0.5-0.7-0.3 0.4-1.2 0.9-1.4 0.7-1.7z m-89.7 2.8l0.4 0.7-0.1 1.2-1.2 1.1-1.6 0.4-2.2 0.1-2.1-0.9-0.3-1.1 0.8-1 3.3-0.8 2.8-0.4 0.2 0.7z m-4.4-6l0.5 0.1 0.7 1.6 1.3 1 0.7 0.9-1.3 1.3-2.1 0-1.8-0.3 0.2-0.7-0.1-1.6-0.6-0.4-0.1-1.8 1.2-0.9 1.2 0 0.2 0.8z m20.7 0.5l-0.1 0.7 0.7 0.4 0.5 1.1 1.6 0.8-0.1 1-0.4 1.6 0.8 1.5 0.2 1.1-0.4 1.3-0.2 2 0.3 1.4-0.4 1-1 1 1.9 0.6-0.1 2.8-1.1-0.8-0.8 0.8-0.9 2.3 0 1.1 1.4 1 0.3 1.1-1.4 2.2-2.9 0.5-0.8-0.4-2.8 0.5-2.7-0.8-0.3-0.7 0.1-1.6-0.6-0.7 1.3-0.8-1.7-1.2 0.5-1.4 2.1-0.4 0.4-0.6-1.3-0.5 2.3-1-0.4-1 3.4-0.3 0.1-0.5-2.9 0.5-2.1 0.1-3.4 0.6-1.2 0.5-0.3-0.5-2.4 0.8-1.4 0.1-0.9 0.6-0.5-0.8 0.5-2.1 0.7-0.7 1 0.1-0.4-1.4 0.5-0.9 1.7-0.4 0.2 0.5 1.5 1.6-0.1-1.4-0.6-1 0.8-0.7-1.2-0.3-0.7-1.6 0.8-1.5-0.4-0.8-1 0.1 0.2-1.5 0.4-0.6-0.1-1 0.9-0.6 1.5 0.4 1.1 1.6-0.2 1.3 1.5 1.4 0.3 0.9 0.6 0.4 1.1 2.3 1 0.8-0.4-2.1-0.8-1.6 0.7-0.3-1.6-1.3 0.2-0.7 1.4 0.2 0.3-0.4-1.2-1.5-1.3 0.1-1-1.7 0.9-1.3 1.8-1.3 1.5 0.7 1-0.2 1.2 2.6 1.5 0.1-0.7-1.3 0.1-0.9 0.5-0.4 1.1 0.3 0.8-0.9z m-7.2-1l-3.2 1.9-0.6 0.3-1.3-0.5 1-0.8 0.7 0 1.1-1.4 1.3-0.3 1 0.8z m39.7 2.6l-0.4 0.6-0.9 0.1-2.1-3.6 0-1.2 1.2-0.8 0.8-0.2 1.2 1.4 0.1 0.7-0.6 1.5 0.7 1.5z m-79.9 22.8l1.6-10.6 4.2 1.4-0.2-1.2 0.8-0.8-0.3-1.3-0.5-0.8-2.1-1.2 0-1.2-1-0.2 0-0.5 1.3-0.3 1.1-0.8 0.4-1.3-0.3-1.7-1-0.9-0.7 0.1 0.6-4.1 2.1-2.1 0.4-1.4 1.4-1.4 1 0.2 0.6-0.6 0.9 2.2-0.2 0.7-1 1.2 0.1 1.2-0.2 1.7 0.9 0.5 0.8 2-1.2 1.4-0.7 1.3 0.3 0.8 1.9 0.1 0.7 1 0 0.5-1.1 1.1-0.8 1.4 0.7 0 0.7-1.1 1.4-0.4 1.2 0.7-0.3 0.7 0.9 0.3 0.1-1.8 1.3-1.8 1 0.2 2.1 1.3 0.8 1.7 0.1 3.7-0.6 1.4-0.8 0.5 0.2 1.1-0.5 0.7 0.1 0.9-1.1 1.4 0.1 1.2-0.9 0.8 0 1.1-3.1 0.5-1.1 1.1-0.9-0.1-1.1-0.5-0.6-0.7-0.1-1.1-1.5 1.6-1.4 0.2-0.7-2.3-0.6-0.3-1.2 1.1-1.2 0.5-1.1 1.2-1.2-0.4-0.5 0.2z m59.1-29.9l1.1 0.5 1.6 0.1 0.3 0.9 1.2 0.5 0.7-0.9 0.8 0.3 2 3.2-0.4 2.7-0.7 1.2 0.5 0.2 0.5-1.4 1-1.3 1 0.5 2-0.4 0.5-0.8 2.1-0.6 1.6 0.5 0.8 1.1 0.9 0.4 0.4 1.5-1.9 0.4 2.1 0.5 4.5 1.5 0.4 0.8-0.6 1-4.1 0.4-2.7-0.2-0.3 0.6 2.2 0.5 0.5 0.4 1.5 0.4-0.4 0.6-1.9 0.6 2.1 0.4 0.6-0.4 1 0.3 0.6 1 2.1 1.5 0.1 0.7-0.2 1.9-1.5 0.3-0.3 0.6 0.8 0.4 0.5-0.5 0.8-0.1 0.5 1.5 0.8 0.9 0.6-0.9-0.8-1.9 1.2-0.9 1.1 1.5 0.5 1.2 1.8-1.8 0.9 0.5 0.5-1.1 1 0.2 0.3 0.7 1.2 1 0.8-0.1 0.8 0.7 0.8 0.1 1.5-0.4-1.3-0.7 0.3-0.8 2.7-1 0.8-1.3 1.5-0.1-0.1-0.7 1.4-0.5 0.4-0.8 0.9-1 1.5 0.1 0.5 0.6 1.3 0 1.6-1.5 1.1-0.5 4.8 0.3-0.4 1.9 1.1 0.2 1.9-0.7 1.9 0.9 0.5 0.9-1.3 1.2 2.8-0.6 0.8 1.1-0.1 1.6 0.6-0.1-0.4 1.8-1.1 0.8-0.1 0.7-1.7 1.2 1.2 1.1 1.5-1.4 0.7 0 1.2 2.1-2 1.3-1 1.1 0.7 2-0.3 0.7-1.1 0.5-2.4 0.1-0.7 0.4-1.7 1.9-1.2-0.1-0.7-0.4-1.5 0.2-1.4-0.4-0.8-1.3-0.4-1 0.2-1.1-0.2-0.6-2.1-0.9 0.5 1.1 0.7 0.5-0.3 3.2-0.7 0.4-1.4 0.4-0.8 0.7-1.7-0.1-2.1 0.8-0.6 0-0.5-1.4-0.6 1.5-2.1 0.4-0.8-0.1-1.1 0.5-2.7 0.4-0.8-0.2-0.7 0.5-1-0.3-1.5 0.1-1.2-0.2-0.2-0.9 0.3-3.1-0.6-1.4-0.7 1 0 0.9-1.3 0.3-0.2 1.8-0.9 0.4-0.2 0.5-2 0.5-3.2-1.6-0.4-1.3-0.5-0.4-1.3 0.4 0.6 1.7-1.7-0.2-0.5-1-1.7-0.9-0.3-2.9-0.5-0.9-0.1-0.9 0.7-0.3-2-1.8 0.2-1.9-0.1-0.5 0.5-2.2 1.1-1.5 0-0.9-0.7-1.4 0.2-1.2-0.4-1.1-0.9-0.4-0.9-1.5-0.1-1.6-0.6-1.4-0.5-0.4-0.8-2.1-0.7 0-1.1 1.2-1.8 0.7-0.4-0.4-2.5 0.3-0.7 0.6-1.4-0.1 0.4-0.8 1-0.8-0.4-0.5-1 0.2-1.6-0.7-1.1-1.6 1.2-0.3-0.1-0.8-1.2-0.2-0.9-0.9-0.4-1-1.4-0.1-0.4-0.6 0.9-0.9 0.3 0.7 1.3-0.9-1.1-0.5-0.9-0.8 0-0.7 1.8-1 0.1-0.5 2.1-0.9 1.2 0.3 0.7 0.8z m36.3-9.7l-1.2-2 1.1 0 0.9 1.2-0.8 0.8z m-18.9-1.1l2.3 2.7 0.4 2.2-0.5 0.9-1 1.2-3.1-1.5-1.1-1.6 0-3.5 0.9-0.7 2.1 0.3z m-52.5 2.6l0.8 0 1.2 2 0 1.2-0.4 1.3-1.1 0.6-0.8-1.2-0.8-0.6-0.9-1.7 0-1.2-0.6-1.5 0.4-0.8-0.5-0.5 0-1.9-0.5-1.4 0.7-0.4 1.3 0.9 1.5 3.2 0.1 0.8-0.4 1.2z m34.4-4.5l0.6 0.6 1-0.8 3.1 0.3 0.5 0.6 1.1-0.8 1.5 1 0.4 0.9-0.8 0.4-0.5 1.4 0 1.2-1.1 0.8-1.9-0.6-5.9 0-1.2-1.8 0.3-1.9 1.2-0.9 1.7-0.4z m61.7-6.6l-0.8-0.6 0.9-0.7 0.4 0.8-0.5 0.5z m-81.2 6.8l-0.8 0.3-1.4-0.2-0.9 0.8-1.3-0.4-0.9-0.7-0.2-1 0.5-1.5 2.7 0.1 1.4 0.9 0.9 1.7z m-31.3-6.4l0.4-2.8 1.1 0.2 0.2 0.8-0.5 1.3-1.2 0.5z m24.4-0.5l-0.7-0.1 0.1-1.1 0.7-1.1 0.9 0.2 0 0.7-1 1.4z m-23.4-6.1l0.9-6.1 1 1.9 0.8 1 0.1 1.4-0.5 1.7-0.7 0.5-1.1 0.2-0.5-0.6z m120-11.2l-1.6-0.2-0.1-1.1 1.8 0.6-0.1 0.7z m-75.3 8.5l1.2 0.3 0.7 1 0.6 0-0.4 1.5 1.2 0.9 0.7-0.7 0.8 0.2 1.2 1 1 1.5-0.2 0.5-1.6 1.5 0.6 0.7 1.1 1.6 0 0.7-0.6 1.6-1.1 0-1.5 1.2-2 0.7-0.9-0.3-0.8 1.5-0.9-0.3 0-1.2 0.4-0.8-1.2-0.6-1.3-1.4 0.3-0.9 2.5 0.3 0.2-0.9-1.2-1-2.1-0.6 0.2-0.3-0.8-1.6-0.1-1.1-1-0.8 0-1.5 1 0.1 0.2-0.6-1-1.3 0-2.2 0.7-0.8 2.3 0.4 1.6 1.1 0.2 0.6z m-21.7-12.1l0.9 0.8 0.8 0.2 0.6 2.2 0.8 1.7-0.3 1.5 1.8-0.8 0.8-0.8 0.8 0.2 1 1.9 1 0.8-0.8 1.8 1 0.9 1.3-0.8 1.7 1.6 0.3 0.7-0.6 1 1.6 0.7-0.5 2.1-0.5 0.3 0.2 1.3-0.2 1.2 0.8 0.3 0.4 1.4 0.5 0.5 0.8 1.7 0.2 1.3-0.5 0.7 0.3 1.2-0.7 0.8-2.1 0.3-0.5 0.6-2.3-1.5-0.1-0.8-0.6-1.7 0.2-1.4-0.6-0.5-0.1-1.2-0.9 0.1-0.7-0.9-2.2-1-1.3 0.7-0.8-0.6 0.2-1.8-3.2 0.8-1.1 1.2-1.7-0.7-1.1-1.6-0.4-1.3 0-1.5 0.8-0.8 0.6-0.1 1.9 1.3 1.8 0.4 0.6-1.4-0.2-0.6-1.9-0.1 0.4-0.8 1.4 0.1-0.1-0.6 0.8-0.5-0.2-0.6-1.8-0.1-1-0.4 1.4-1.5-0.6-1.9-1.3 0.4-0.5 1.6-1 1-0.6-0.5 0.6-1.1 0.9-2-0.8-0.8-1.6 0.6-0.5-0.3 0.1-2.4 0.7-1.8 0.3-1.1 0.7 0.7 4.7-0.7 0.2 0.4z m14.1-12.8l1-0.3 0.8 0.9 0.4 2.1-0.2 1.2 0.3 1.9-0.5 1.5-1.6-1 0-1.6-0.8-0.9-1.5 0.3-0.3-0.6 0-2.2 0.5-1.1 0.9-0.9 1 0.7z m12.2-10.6l1.2 0.4 0.3 0.8-0.7 0.5-2.5-1.4 1.7-0.3z m7.6-11.5l1.5 1.1 1.3 1.7 0.4 2.3 0.6 1.7 1.3 2.4 0.2 1.2 1.2 0.7 0.3 1.3 0 1.2 2.5 0.5 1.5-0.2 0.9 1.2 0 1.2-0.4 1.8 0.8 1.9 1.5 1.3 1.4 0.2-2-3.3-0.1-1.6 0.6-1.2 2.3 0.3 0.5 1.5 0.3 2.7-1.3 0.9 0.4 1.2 0.6-0.3 1.5 0 0.9 2.1 0.3 1.2 0 2.6-0.3 2-0.6 0.7-0.1 1 0.8-0.1 0.1-0.7 1.6-1.5 1-0.1 1 1.3-0.2 0.9 0.8 0.3-0.1-1.7 1 0.2 0.8 2.1 1.1 1.3 0.7 1.3 0 0.6-0.8 0.5-0.8 1.3-3.1 2.1-0.2 1.6-1.3-0.1 0.4 1.2-1.1 2-0.5 2.4-1.1-0.3-0.7-2.3-0.2-2.2-0.7 0.2 0.1 2.1 0.5 2.6 0.8 0.9 0.2 1.1-0.3 1.3-0.6 0.3-1.5-2.3-0.4 1 0.8 1.9-0.4 4.3-0.9 0.1-0.8-1.3-0.5-1.3-1.1-1.5-1.2-2.7-0.5 0.6 0.6 2.1 0.7 0.6 1.4 3.9-0.6 0.1-0.4-1.1-0.6 0.2-0.9-1.7-0.7-0.2 0.1 3.2-1.8 0.2-1.1-0.5-1.4-0.2-1-0.8-0.8 0.3-0.7-1.3-0.7-0.1-0.4-0.7-1.2-1.4 0.2-1.2 0.8 0.2 0.6-0.4 2.4-0.8-3.1-0.8-2.3 0.2-1.7-2.7 0.8-0.4 1.4 0.8 0.3-0.7-1.6-1-1.1 0.2-0.3-0.9-1.1-1.4 0.2-0.7 0.9-0.7 1.1-0.3 0.5-1.7 0.7-0.2 1.2 0.4 1-0.4 0.8 0.2 1.4-0.3 4.3-1.2 0.3-0.7-2 0.3-1 0.4-2.3 0.5-1.8-0.6 0.1-1.1 2.1 0 0.8-0.6 1.6-0.4 0.1-0.7-3.3 0.9-1.4-0.5-0.1-1.2-1.5 1.5-0.5-0.8-0.6 0-0.2 1-0.9 1.4-0.8 0.4-0.4-0.7 0.2-1.6-1 0.4-1.8 1.4-0.9 0.1 0.2-1.2-1.5-0.7-0.4-1.4 0-1.2 0.5-0.3 2.8-0.9 1.2-1.4-0.1-0.8-0.7-0.2-0.6 1.1-1.3 0.7-2.1-0.1-0.9-1.5-0.5-1.2-0.8-0.8 0-1.8-0.7-2.2 0.2-1.4 1.1 0.2 1.1 1.2 2.6 0.7 1-0.2 0.1-1 0.8-1.1-2.6 0.6-0.8-0.9 0.1-1.2-1.1 0.8-1.1-1.1-0.7-0.3 0.2-0.9 0.7-0.8 1.6-0.8-0.2-0.6-0.8-0.6 0.5-1.1-0.4-0.7 2.2-0.1 1-0.3 1.2 0.9 1.7-0.7-1.1-0.5-1-0.9 0-1.2-1.4-1.2-1-0.1 0-1.9 0.6-0.7 0.1-1.3 1.1-0.9 1.2 0.9 0.9 0 0.3-0.7-0.4-0.9 1-0.1 1.5 0.3 0.4-0.2 0.1-1.1-0.3-1.1-1.1-0.2-0.5 0.4-1.1-0.3-0.7-0.7 0.5-2 2 0.6 0.7-0.8 1.4 1z m54.4-44.3l0.8 1.2 0.1 1.2 1.3-1.1 0.3 0.8 0.8-0.8 0.9-0.1 0.3 1 1.2-0.9 1.3 0.4 0.8-0.1 0.9-0.7 0.5 0.9-1.4 3.1-2.3 2.5-0.1 1.2 2.7-1.4 0.2-0.8 2.4-4 0.9-0.3 0.4-1.4 1-0.6 0.4 1.6 1 1 0.4-1.7 1.7-0.4 0.6 1.1-0.3 1.2 0.5 0.6 1 0.3-0.1 0.8 1.1 0 0.1 1.1 2-0.4 0.6 0.3 1.4-0.4 0.8 0.5 1 1 1 2.3-0.1 1.3-1.3 1.7 0.6 0.4-0.4 2-2.6 5.6-0.6 0.1 0.2 1.1-0.3 0.6-2.6 0.7-0.6 1.3-0.1 1.1-2 0.7-2.5 1.5-1.3 1-0.7 1.2 3.2-2.2 1.8 0.2 0.2 0.6-3 3.5-0.7 1.4-2.1 2.1 0 1.1 3.9-3.8 1.2-1.6 2.8-2.7 0.4-0.7 1.2-0.8 1.6-1.3 0.7 1.1-0.1 1.8-0.8 1.5-0.3 1.4-1.4 1.2-0.6 2.4-0.1 1.6-1 2.3-0.9 0.2 0.3 0.8-0.4 1.6-0.9 1.5-1.2 4.6 0.1 2.6-0.7 1-1.9 0.5-0.3 0.4 1.8 1-0.3 1.5-1.7 0.1-0.9 0.7-0.9 1.4-1.1 0.5-0.6 1.2 1.9-0.7 1.3-1.4 0.9-0.7 0.9 1.3-0.3 1.4-1.8 1.4 1.7 0.5-0.2 1.9-0.8 1.2-1.2 1-0.8 0.9-1.2 0.1-1.1-0.3-0.9-1.6-1.1-0.3-1.2 0.6 0-0.7-1.6-0.2-0.2 0.4-1.4 0.8 0.7 0.8 0.9-0.5 3.2 0.3 1.1 1.4 0.6 1.7-0.4 1-1.9 0.9-0.1 0.7-0.7 0.3-1.4 0.2-0.7 1.5-1.6 0-1.7-0.3-0.3 0.8 0.9 0.6-3.1 0.6-0.8-0.8-0.2-0.8-0.9 0.2 1 2.1-0.3 0.8 1.8-0.3 1 0.1 1.1-0.5 0.7 0.5 2.9-0.5 0.8-0.5 1.1 0.1-0.7 1.4 1.3 1.1 0.1 0.7-1 0-0.9 0.5-1.5-0.4-0.9 0.1-0.7-1.4-0.8-0.4-2.8 0.8-0.7 0-2.7 0.9 3.5-0.2 0.8-0.2 2.1 0 0 0.9-1.7 0.1-1.4 0.7-1.6 1.5 0.1 0.5 3-1.8 3.3 0.3 0 1-1.3 0.6 0.1 0.5 1.6-0.7 1.5-0.1 1.9 0.4 0.4 3.3 0.6 0.1-0.6 1.7-1.2 0.7-3.8 0.3 1.4 0.5 0.3 0.5 3.6 0.8 0.3 1-0.9 0.3-0.2 1.6-0.3 0.4-2.1-0.4-0.5 0.4-0.9-0.2-0.8 0.7 0.3 0.6 1.9 0.2 0.5 0.2 1.7-0.5 0.4 0.4-0.6 2.6-1.3-0.6-0.7 0.6-0.1 0.8-1 1-1.1-0.6-2.4 0.7-1.1-0.2-0.7 1 0.7 0.7 1.1 0.6 0.4 0.9-0.3 0.5 1.5 1.9-0.7 1.1 0.1 1.2-0.7 0.9 0.1 0.8-0.7 0.4-1.2-0.1-0.8 1.7-1.9-0.2-1.1 0.9-1.5 0-1.5-0.4-1.1-0.9-1-0.4-0.3-0.6-1.3-0.6 0 1.5 1.1 0.8 1-0.1 0.1 0.8-2.2 0.9 0.1 1.7 1-0.4 1.6-1.7 3.6 0.6 0.5 0.3 0.9-1 1.1-0.2 1.6 1.1 0.3 1.1-0.9 2 0.1 0.8 1.2-0.4 0.6 0.1-0.1 1.4 1 0.1-0.2-0.9 0.5-0.4-0.1-0.9 0.6-1.1 0.8-0.3 0.8 0.8 0.4 1.5 0.8 0.6-0.1 0.8 0.4 1.8-0.8 0.6-0.4 1.3 0.3 0.5-1.1 1.3-0.6-0.5-0.1-0.9-0.7-0.2-0.4 2.5-0.5 0.3-0.4 2-0.8-0.2-1.8 1.8-0.4-0.3-1.5 1.7-0.9 0-0.9-0.6 0.8-2.9-0.1-0.5-2.1-1.8-0.4 1.2-0.5 0.2-1.5-0.1-1.1 1.7-1.9 0.5-1.3-1.1-0.4-2-0.5 0.1 0.4 2.9-1.6-0.1-1.6-1.8-0.7 0.4 0.3 1.4-1.2 0.4-0.7-0.3-0.9-1.7-0.3 1.6 0.5 0.7 2.2 1.1 0 0.5-3 0.7-0.2-0.5-2.9-0.6-0.8 0.1-0.8-0.6-0.1-1-0.7 0.1-0.3 2.1-1.4-0.3-0.4-1.1-1.4 0.1 0.4 0.8-0.6 1.1-3-0.7 0.1-1.5-1.1-4-0.5 0.5 0.5 1.2 0.6 2-0.3 0.7-1.2 1-1-0.2-2-2.1 0.2-1 0.6-1-0.7-2.7 0.2-0.4 1.7-1.4 0.9-1 1.4-2.1 0.7 0.4 0.9-0.6 1.4 0.3 0.3-1.1 0.8-0.7-1-1.8-1.2-0.3-0.5-1.3 0.4-0.9-1.4-1.9-0.7-0.4-0.2-2.7 0.4-0.4 2.9-1.6 1.2 0.1 2.4 1.4 1 1.2 1 3.4 1.6 1.5 1.5 0.1 0.9 0.9 1.1 0.2-0.7-1.2 2-0.6 2.2 0.6-0.2-0.7-1.2-0.5 1.4-1.8 1.2-3.5 0.7-4-1.1-0.9 0.4 1.7-0.6 0.7-0.4 1.6-0.1 1.3-0.5 1.8-0.8 1.4-1.3 0.6-1-0.3-1.5 0.4-0.4-1.1-1.7-1 0.1-2.3-0.7-0.2 0.1-1-1.4-1.1 1.9-2.1 0-1.7 1.2-0.9-1.2-0.5 0.4-1.8-0.7 0-0.6 2.6-0.7 1.5-2.4 1.2-0.2-1.7 0.8-1.3-0.5-0.2-0.6 1-0.8-0.1-0.7 1.5-2.5 0.2-0.4-3.4-0.1-2.1 1-1.7 0.4-1.8 0-1.1 0.9-1.8 0.4 0.1 1.6-0.8 0.8 0.1 1.5-1.7 0.7-0.2 1.2 0.8 3.2 0.1 1.6 1 0.6 0.7 1.4 0.3 0.7 1.2 1 0.7 0.3-0.6-1.4-1.6-1.2-0.9-1.2-0.5 0-0.7 0.7-0.2 2 0.1 1.2-0.8 0.8-0.1-0.1-2-0.7-0.6-0.5 1.9-1.3 0.8-1.5-0.8-2.3 0.5-1.1-0.4-1 0.3-0.9-1-0.8-0.3-0.2-0.8 0.8-1.1 1.1 0.1 0.8 1.3 0.9-0.5-1.7-1.7-0.7-0.1-1-3.7-1.4-1.2-0.7-1.7 0-0.5-1.1-1-1-0.4-0.7 0.3-2-0.8-0.2-1-0.1-2.2 0.4-0.7-1-1.3-0.4-1.8 0.3-3.1 1.6-0.5 1.9 1.1 2.1-0.5 1.8 0 0.8 0.2 1.6 1.7 0.9 1.2 1.5 1.2 1.9 2 1 2 1.5 2.4 0.6-0.9 2.7 0.9-0.2-0.6 1.5-1.1 0.5 0 0.4-1.2-2 0.7-1.4 0.9-2.6-1.6 0-0.7-0.5-1.8 0.5-0.9-1.8-0.4-0.6-0.4-3-3.6-0.8-1.6 3.3-1.7 1.1-0.3 3.5-1.8-0.1-0.6 0.9-0.5 2.9-0.9 0.9-0.6 1.8-0.2 0.1-0.7-2.3 0.1-3.4 0.8 1.3-1.9 0.9-0.4 1.4-1.6 0.9-0.6 1.8-0.9 2.7-0.8-0.3-1-1.2 0.5-1.1-0.1-1.8 0.4-0.2 0.3-2 1-0.7-2.8 0.9-1.9-0.2-1.2 0.7-0.6 0.6-1.8 1.1-1.3 1.3-2.1-0.3-0.4-2.2 2.4-1 1.2-0.9 2.3 0.1 1.5-1.1 0.4-0.2 2 0.6 0.4-0.5 0.9-0.3 2-1.1 1.4-0.8 0.5-1.3 1.7-0.9 0.8-4.7 2.4-0.9-0.8 0.2-1.2 0.5-0.7 1.9-1.1 0.9-1.8-0.7-0.3-1.4 1.5-0.1 0.6-2 1-0.9-0.6-0.7 0.1 0.5 1.9 0 1.4-1.7 1.1-0.9-0.3-1.2 0.7-1.7-0.5-1.3 0.2-2.1-1 0.4-2.1 1.8-4.5 1.5-1.6 2.8-1 0.1-0.3 3.8-1.7 1-1.1-5 2.4-3.3 1.1-1.1 0.6-0.8 0.9-1.1 2.3-0.1 0.7-1.1 2-0.5 1.9-1.3-0.1-1.2-0.5-1.7-1.5-0.9-0.5-1.4-1.4-0.3-0.9 0.5-0.4 2.4-1.1 1.7-0.1 0.6 0.2 2.6-0.7 1.1-1.3 0.8-0.3 1.1-2.1 1.8-1.6-0.6-0.7-0.6 0.1-1.7 1.3-1.6 2.4-1.1 0.3-1.3 0.9-1.3 0-5.6 1.7-1.1-1-0.6-1.9 1-1.5 1.2 0.7 0.4-0.9-1.3-0.9-0.3-0.7 0.9-0.4 0.9-1 0.9-1.8 1.1-0.5 1.5-0.3 0.2 0.4 1.6-0.3-3.2-1-0.5 0.7-1 0.3-1.4 1.1-2.2 2.3-1.6-1.3 0.1-0.3 2.4-2.7-0.5-0.5-1.7-0.9-0.8 1.4 0.1 0.8-1.2 0.5-0.2-1-1.4-0.6 0.6-2 1.5-1.4 0.3-0.8 0.8 0 0.3-0.7 0.9-0.5 1.7 0.6 0.8 0.8 0.5-1.3-0.6-0.4 0.2-0.8 1.4-2.3 1.8-1 0.6 0.5 1.1-0.1 0.6 1.1 0.5-0.7 0.9-0.3 1.3 0.1 1.3 0.6 2.5 0.1-5.5-2.3-0.5-1.5 3-0.9 0.8-0.9-0.5-0.6-0.2-1.5-1.1-0.4 0.3-0.9 2.7-0.6 0.2 0.8-0.7 0.4 2.1 0.8 1.4 0.3 0.8 0.8 0.4 1.4 0.9 1 0.4 0.8-0.3 1.1 2.7-0.1-0.1-0.8-1.3 0.3-1.5-2.5 0-1.3 1.1 0.8 0.5 0 0.9 1 1.6 1.1 2.9 1.6 1.7 0.6 1.8 2.5 0.9 0-2.5-2.9 0-0.8-3-1 0-1.1-1.2 0.1-4.3-3.6-0.1-0.6 0.3-2 1.4-0.5-1.1-1.1-0.3-1.4 0.6-0.4 1.7 0.6 1.7 1.6 0.6-0.5-1.6-2.1-0.3-0.8-1.3-1.3 0.2-0.8 3 0.3 0.6 1.3 0.7-0.1 2.1 0.6 1.4-0.6-3.7-0.9-0.3-1.1-1.2-0.7-0.3-0.7 0.5-0.9 1.9-1 1.2 1.7 0.3-1.4 0.4 0 0.7 1.3 1.2-1.4 2 0.9 2.3 3.4 1.9 1.1-0.4 1.8 0.4 1.2 0.6-3 0.4-0.8-1.9-0.8-2.2-3.5-2.2-1.8 0.5-0.5 2.1-1 0.1-0.4 2.7-0.3 2.2 0.3 1.2 1.5 0.4 0.9 3.8 2.4 0.1-0.6-1.8-0.8-1.4-1.9-0.6-0.4 0.5-2.1 0.7-0.6-0.3-0.6 0.8-0.8 2.3-0.6 0.2 2.1 0.7 0.9 2 0.3-2.2-1.8 1.1-2.2 2.7-0.9z" id="NU" name="Nunavut">\n </path>\n <path d="M567.7 207.1l-1.6-0.2 0.2-0.7 1.4 0.9z m-21.2 9.1l-5.7 20.6 0.1 0.3 3.4 4.8 4 5.3 4 5.3 5 6.2 5.1 6.1 4.4 5.1 5.6 6.2 3.1 3.4 4.9 0.9 4.9 0.8 0.3 0.3 4.7 8.1 0.6 0.9 1.2 1 1.2 0.6 11.2 3.6 6.1 1.9 6.8 1.9 14.3 3.9-0.1 2.6-0.2 2.4-3.3 49.1-6.2-0.5-6.3-0.5-6.2-0.6-6.3-0.7-6.2-0.7-6.2-0.8-6.3-0.8-6.2-1-7.7-1.2-7.8-1.4-7.7-1.5-7.7-1.5-7.6-1.7-7.7-1.8-7.6-1.9-7.6-2-5.8-1.6-5.7-1.7-5.8-1.7-5.7-1.8-0.6-1.4-0.4-3.2 0.4-1.6-1.1-0.6 0.1-1-0.4-1.3 0.1-1 1-0.6 0.1-2-1.4-0.7-0.7 1.1-1.7-0.4-1.2 0.4-2.1-1.3-0.5-0.8-0.8-0.1-1 0.4-1.9-0.2-0.6-0.7-1.1 0.5-1.2-0.9 0.9-3.3-0.8-0.2 0.9-1.6 0.5-2.4-0.1-1.2-0.7-1-1.3-0.3-1.7-3 0.1-1-0.1-1.4-0.6 0-0.3-2.8-0.4-1.2-0.8-0.3-0.7 0.5-1-1.4-0.8 0-0.1-2.8 0.8-0.5-0.3-0.8 1-0.7-0.6-0.7-0.6-1.2 0.2-0.9-0.5-2.6 1.8-2.3-1.2-0.7 0.2-1.2-0.6-2.2 1.4-0.2 1-1.1-0.1-2.1-0.6-0.2 0.1-1 0.5-0.9-1.1-1.3-0.5-1.5-0.9-0.9 0.2-1-0.4-1.6 0.6-2.2-0.3-1.5-0.9-1-0.6 0.5-1.2 0.1-0.7-1.1 1.1-0.9-0.7-0.7-0.3-2.2-1.1-1.4-1.2-0.7 0-0.6 0.8-0.3 0.3-1 1.5-1.2-0.8-0.8 0.4-0.6-0.6-1.3 1.1-0.3 0.7-1 1.3-0.4 0.8-1.2 0.6-0.3 0.2-1-0.2-1.7-0.6-1.3 0.6-0.6 1-0.1-0.6-1.5-0.6-0.1-1.1 0.8-1-0.4 0.9-1.1-1-0.4-1.9 0.3-0.9-0.6 0.5-1.1-0.3-0.4 1.1-0.7 0.7-1.8-1.1-0.7 1-1.4 0.5 0.2 0.4-1.3 0.5-0.1-0.3-1.6 0.1-0.9 0.7-0.8-0.2-2.9-6-2.9-4.2-2 0.1-0.9 0.7-1.5 1.2-1 0.2-1.6 0.9-1.9 0-1-0.5-0.6 0.3-1 7-14.7 1.6 1.1 0.6 0.9 0.6 1.6 1.2 1.1 0.1-0.8-0.5-1.9-1-0.7 0.1-1.6 1.4-0.1-0.6-1 0.5-1.5 0.8-0.2 0.3-0.6 1.4 0.1 0.7 1.2 0.6 0.1 0.4-1.6 1-0.6 1.3 0.5 1 0.5 0.5 0.9 0.6-0.6-0.2-0.7 1.1-1.3 1 0-0.4 2 1.2 1.3-2.2 1.3-0.5 0.9 2.3-0.1 0.6-0.6 0.9 0.1 1.2 0.6 1.6-0.9 0.3-1 0.8-0.7 1 0.5 1-0.9 1.5 1.5 0.4-0.4 1.4-0.1 1.6-1 0.8 0.1 0.4-0.7 0.7 0.4 0.6 1 1.6-2.2 1.5-0.1 1.6 0.4-0.3 0.8 1.1 0 0.6 0.7 1.2-1.1 0.8-0.3 0.6 1.8-0.9 1-0.7 0.3-5.5 1.4-0.4 0.6-0.9 0-1.4 1.2-0.3-1.1-2.2 0-0.7-0.4-1.7-0.1-1.4 1.3-0.1 0.8-1.3 0.1-2.3-0.1-1.3 1.4-0.7 1-0.4-0.6-0.8 0.2-0.5 1.1-1 0.8-0.9 0-0.1 0.7 1.7 0.4 1.1-0.3 1.6 1.6 0.9-0.5-0.4-1-1.2 0.1-0.1-0.7 0.7-2 1 0.2 0.6-0.4 1 0.2 0.7-0.6 0.6 0.1 1.7-0.3 1-0.9-0.3-0.6 1.6-0.4 0.6 0.8 1.5-0.3 0.8 0.6-0.7 2.2 1.6-1.5 1.9-1.1 1.2-1.4 0.8 0.2 2.5-0.2 0.7-0.3 2 0.7-0.6 1.5 0.6 0.8 2.7-1.8 1.9-1.1 0.3-1.5 1.6-0.8 0.5 0.3 2.1-0.1-1.7-1.5-0.2-1.4 0.2-0.9 1.1-1.3 0.7 0.1 1.4 3 0.6 2.5 0.1 3.8-0.4 3.4 1 3.9 0.9 2 1 0.6 0.9 1.4 1.6-0.4 0.4-0.9-0.7-0.5-1.6 0 1-0.8 1.1 0 0.3-0.7-0.7-0.4 0.6-1.2 0.6 0.3 1.2-0.4 0.3-1 1.2-1.4 0-1.6 1.6 0.1 0.2-1.1 1.4 0.7-0.2 0.9-0.7 0.5-0.6 1.4 0.2 0.9-1 1.5 0.9 0.8 1.1-0.1-0.3 0.9-0.7 0.3-0.8 1.1-1 0.6-0.5 1.4 1.2 0.7 0.6-0.3 2.4 0.8 1.5-1.4 0.8 0.4 1.1-2.3 0.1-1.4 1.2-0.6 2.1 1.2 2.1 0.3 2.6 1.6 2.4 2.7 0.3 1.1z m58-33.8l-0.2 1.2-0.5-1 0.7-0.2z m0.1-0.7l-0.8-1.1-1.1-0.4-0.6-1.5 0.1-1.2 3 0.9-0.6 3.3z m-0.6 4.4l-5.5 35-7.5-1.3-4.3-0.7-0.3 1.2 0.4 0.7-1.3 0.2-1.1-0.1 0.4-2.4-6.4-1.2-8.2-1.8-5.4-1.2-0.4 1.5 1.5 4.1-0.9-0.5-1-1-0.6-1-0.1-3.3 0.6-0.7 2.1-0.7 2.2 0 2.4-0.3 2 0 4.2 0.3 1.2-0.1 1.6 0.3 0.5 0.7 1.8 0.6 0.9-0.2 2.1 1.2 0.2-0.3 1.7 1.1 1.8-1.2 1.4 0.9 1 0.2 1-1.3-1.2-0.1-1.1-1-0.1-1.2-2-0.9-0.5-0.7-1-0.1-1.1-1.4-1.6-0.2-0.6-0.9-1.2-0.6-1 0.5-0.7-0.4-0.9 0.5-1.7-0.2-0.9 0.2-0.9-0.3-1.7 0.1-0.6-0.5-1.5 0-0.7-1-1.6-0.3-0.6 0.3-1.4-0.3-1.7-0.8-1 0.1-0.4-0.5 0.1-0.9-1.7-2.5-0.5-2.1 0.2-0.7 3.2-1.4 1.5 0.2 1.9-0.4 0.9 0.2 0.6-0.6 4.4-0.5-0.5-0.9 1.6-0.6-0.3-0.6-1.7 0.3-1.8-0.1-1.3 0.4-1-0.3-0.9 0.3-1.6 0-0.6-0.3-2.1-0.4-0.5-0.9 0.5-0.9 0.7-0.4 1.5 0.5 0.3-0.8-1.1-1.4-0.8 0.8-0.7-0.1-0.4-1.1-1.5-0.4-1.1 0.2 0.2-2.2 0.9-2.1 1.8-1.4 0.6-1.1 2.7-0.6 0.3-1.2-0.3-0.7-0.8-0.2-0.5-1.3 0.7-1.1 1.8-1.4 1.6-0.6 1.5-1.2 1.4-1.4 2.2-0.3 1.3-0.7 2.1-0.8 2.1-0.6 0.8 0 4.8-1.8 1.2 1 0.6 2 0 1.4-0.8 2.1-0.4 2.5-1-0.1-0.6 0.6 0 1.1-0.9 0.6 0.6 0.6 1-0.5 1.1-0.2 0.3 0.4 1.2-0.6 0.7-0.7-0.7-0.5 1.3-1.8 1.1-1 0.8-0.2 1.9 1.2 0.6 0.8 1.2 0.5 2.1 1.7 0.2 0.9 1 0.5-0.7 2.3-1 0.7-0.5 0.9-1.4 0.7-0.3 0.4 0.9 1 0.6-1.3 0.8-0.5 1.4 0.5 1.9-2.1 1.3 0.9 0.8 0.1 0.9 1.2z m-41.4-41.4l1.6 1.2 0.4 1.5 2.5 3 1.8 1.3 1.7 0.4 0.3 0.4-0.2 1.8 0.2 1.2 1.1-1.5-0.2-0.8 0.8-0.5 2.9-0.2 2.4 1.4 1.7 2.6 2.7 6.2 1 1 0.6 1.9 0.2 0.9-0.9 1-1.4 0.8-2.2 0.7-1.1 0.1-3.8 2.1-0.8-0.1-3.4 1.8-1.9 0.7-0.6 0.7-0.8-0.1-2.4 1.2-0.5 1.4-0.7 1-0.6 1.4-2.3 1.2-1.9-0.3-0.1 1.1-0.4 0.7-1.5 1.5-0.1 1.2-0.6 1.8-0.1 0.7-1.2 2.1-0.7 0.5-1.8 0.5-2.1 0.1-0.5-1.4-0.4-0.2-2.8 2.3-2.5 0.5-1.1 1-1.4-0.3-0.5-0.9-0.3-1.9 0.1-3.2-0.4-1.3-0.1-1.7-0.3-0.9-2.2-2.2-0.9-1.7-0.9-1 0-0.6-1.3-0.4-1 0 0.9-1.7 0.1-0.9 0.7-1.1 1.1-0.9 1.8-2.1 1.3-0.8 0.5-1 0.6-0.8 0.2-1.9 1.4-0.5 1.4-0.1 0.2-0.7-0.9-0.9-0.1-1.2 1.2-1.1 1.5-2 0.5-1 1.4-0.6 0.7-0.6 0.6-1.8 1.6-1.1-0.1-1.2-1-0.5 0.1-1.1-0.3-2.6 0.3-0.6 0.3-2.2-0.6-0.4 0.1-1.1 2.2 0.2 0.7-0.2 2.5 0.5 0.8-0.2 2.7 0.7 2.2 0.1 2.3-0.3z m21.3-19.7l0.6 0.7-0.9 1.6-0.9 0.9-1.2 1.9-0.1 0.6-1.7 1.5 0 0.4-1.8 1-1.9-1.5-0.7-0.7 0.5-0.9 1.7-1.2 2-2.1 2.1-0.5 0.4-0.7 1.9-1z m28.9 4.1l-0.4-0.9-0.8-0.5 0.2-1.5 1.6-1.2-0.6 4.1z m-1.7 10.7l-1.6 10.6-1.5 0.7-1.4 0.1 0.2 0.8-1.9 1.4-1.7 0.4-1.2 0.9-2.5 0.3-0.9 0.4-2.4-0.2-2.6-1.2-1.6-2.2-0.6-1.3-0.1-0.7 1.1-1 2.1-0.7 1.1 0.1 1.3-0.6 0.5-0.7 1.4-0.4 2.9 0.2 1.1 0.5 0.9-0.2 1.3-1 0.2-0.5 1-0.7 0.5-1.1-1.1-0.4-0.7 1.1-1.3 0.4-1.5-0.3-1.2 0.2-1.2-1-0.8 0.8-0.9-0.1-2.4 0.3-0.9-0.2 0.2-1.9 1-2.3-0.9-0.6-1 2.1-0.6 0.5-0.9 1.7-2.3 1-0.8-0.7 0.4-1.4-0.9-0.3-0.8-0.9 0 1.8-0.9 0.9-1.5-1.5-0.4-1.3 0.6-1.4-1.2 0.2-1.1 0.7-2.6-1.8-0.4-0.8 0.1-0.8 2.1-2.2 0.4-0.2 2.9 0.7 1.6 0.3 2.1-1.2 1.3 0-0.2-1-1.3 0-1.9 0.7-4.1-0.9 0.1-1 1.9-2 4.2 0.2 0.9 0.2 2.7 0 0.2-0.6-5.2-0.5-1.8-0.9 0.2-0.9 1-0.3-0.6-1.2 1-1.5 1.5-0.3 1.2 0.5 1.4 0.3 1 0.6 0.6-0.6-0.8-0.6-1.8-0.4-0.4-0.9 0.5-1.2 1.6-1.2 4.1 0.2 0.8 0.6 0.1 1.4-0.4 1 0.4 1.2-0.1 1 1 0 1.5-0.7 1.3 0.1 0.7 1.3 1.1 0.7-0.4 0.9 0.3 1.3 0.9 0.5 0.8 1.1 0.1 0.9-1.6 0.5 2.5 1 0.2 1.7-0.4 1.5 0.3 1.4 3-0.2 0.3 0.6 1.6 0.2z m-10.2-23.6l0.7 0.9 0 1.1-1 0.9-0.6-0.4-2.1-0.5-1.5-0.9 0.3-0.7 1.7-0.9 2.1 0.2 0.4 0.3z m-6.5-11.2l1.1 1 0.9 2-0.7 0.7-0.9 0.1-0.6 0.5-1.2 0-0.4 0.8-0.1 1.7 1.1 1.4 0.2 0.7-1.1 0.4-0.7-0.9-0.5 0.4 0.9 1.6 0.1 2.1-1 1-1 0.5-1.6-0.2-1.4 0.5-0.1 2.7-1 0.9-0.9 0.3-0.7-0.4-0.7-1.1-0.4-1.3 0.4-1.6 0.4-0.4 0-1.1 0.5-1.2 1.1-1.4-0.3-0.8-0.9 0.8-1-0.4-0.5 2-0.2 1.2-0.7 0.2-1.8-0.1 0.7 1.7 0 1.4-0.5 0.8-1.2 0.3-0.2 1.3-0.8 0.6-0.7 0 0.1-1.2-0.3-1.6-0.9 0 0.1 1.6-0.7 1.1 0.5 1-0.9 0.6-0.4 1-0.9 0.8-1.5 0-0.8-0.5 0.9-1.8-0.1-0.7-0.9-0.5 0.6-2-0.5-0.8-0.5 0.5-0.6 1.5 0 0.8-2 0.5-0.1-0.7-1-1.2-1.1-0.1-0.5 0.7-1 0.4-1-1 1.5-1.6 0.2-0.6-1.2-1 0.4-0.8 0.8-0.3 0.6-1.3 1-0.6 1.6 0 1.5 0.5 1-1.7 1-0.8 0.3-0.9 1.1 0 0.6-0.5 1-0.1 0.9-0.7 0-0.9 0.9-0.3 0.9-1.5 0.6-0.1 0.7-1.1 2-1.1 0.7-1.4 0.8-0.5 1.2-0.3 2.2 0.6 1.3-0.2 0.2 0.9 0.9 0.3 0.6 1 1.5-0.2 1-1-1.2-0.4-0.3-1.1 0.9-0.1 2-1 0.7 1.7z m8.1-7.5l0.7 0.4 0.3 1.5 0.6 0.4 0.2 1.6-0.5 0.6-1.8 0.7-0.4-0.2-1.5-2.8-0.5-1.8 1.2-0.2 0.6-0.7 1.4-0.2-0.3 0.7z m15 1.3l-0.4 2.8-0.9 0.4-2.2 0.1-0.2 0.8 0.4 1 2.1 0.1-0.2 2.5-0.2 0.9-0.7 1.1-2.6 1.1-1.3-0.6-0.5 0.4-2.7 0.8-1.2-0.9-0.2-1.5-1.2-0.5-0.7-1 0.3-2.4 0.4-1.1-0.2-1.2 0.5-1.5 1.2-0.2 2.5-1 2.1 0 0.6-0.4 2.9-0.2 2.4 0.5z m1.5-9.9l-0.9 6.1-1.2 0.5-1.7-0.8-0.8-1.4-1 0.9-0.3 0.9-1.2-0.2-0.2-1-0.8-1-2.1 0.5-1.2 0.7-0.6-0.3-0.1-0.9 0.6-1.1 4-1.9 1.1 0.4 1.5-0.8 0.7-1 2.1-1 1-0.1 1.1 1.5z" id="NT" name="Northwest Territories">\n </path>\n <path d="M470.5 197.3l-7 14.7-0.3 1 0.5 0.6 0 1-0.9 1.9-0.2 1.6-1.2 1-0.7 1.5-0.1 0.9 4.2 2 6 2.9 0.2 2.9-0.7 0.8-0.1 0.9 0.3 1.6-0.5 0.1-0.4 1.3-0.5-0.2-1 1.4 1.1 0.7-0.7 1.8-1.1 0.7 0.3 0.4-0.5 1.1 0.9 0.6 1.9-0.3 1 0.4-0.9 1.1 1 0.4 1.1-0.8 0.6 0.1 0.6 1.5-1 0.1-0.6 0.6 0.6 1.3 0.2 1.7-0.2 1-0.6 0.3-0.8 1.2-1.3 0.4-0.7 1-1.1 0.3 0.6 1.3-0.4 0.6 0.8 0.8-1.5 1.2-0.3 1-0.8 0.3 0 0.6 1.2 0.7 1.1 1.4 0.3 2.2 0.7 0.7-1.1 0.9 0.7 1.1 1.2-0.1 0.6-0.5 0.9 1 0.3 1.5-0.6 2.2 0.4 1.6-0.2 1 0.9 0.9 0.5 1.5 1.1 1.3-0.5 0.9-0.1 1 0.6 0.2 0.1 2.1-1 1.1-1.4 0.2 0.6 2.2-0.2 1.2 1.2 0.7-1.8 2.3 0.5 2.6-0.2 0.9 0.6 1.2 0.6 0.7-1 0.7 0.3 0.8-0.8 0.5 0.1 2.8 0.8 0 1 1.4 0.7-0.5 0.8 0.3 0.4 1.2 0.3 2.8 0.6 0 0.1 1.4-0.1 1 1.7 3 1.3 0.3 0.7 1 0.1 1.2-0.5 2.4-0.9 1.6 0.8 0.2-0.9 3.3 1.2 0.9 1.1-0.5 0.6 0.7 1.9 0.2 1-0.4 0.8 0.1 0.5 0.8 2.1 1.3 1.2-0.4 1.7 0.4 0.7-1.1 1.4 0.7-0.1 2-1 0.6-0.1 1 0.4 1.3-0.1 1 1.1 0.6-0.4 1.6 0.4 3.2 0.6 1.4-5.7-1.8-8.5-2.8-8.4-3-5.7-2.1-5.5-2.1-5.6-2.2-5.6-2.3-5.5-2.3-8.2-3.5-5.5-2.5-5.4-2.5-8.1-3.8-10.7-5.4-0.1-1.5 1.7-1.9 0.1-0.6-3-1.4-0.7 0-1.6 0.6-0.7-0.1-1.6-2.3-1 0.5-2-2.2 0-0.4 58.6-108.6 1.3 1.3 1.8 1.1 1.4 0.5 0.6 1 2.1 2 0.1 1.8 0.5 1 0.1 1.2 0.5 1.1 0.6 0.3 0.4 1.6 2.9 4.4 0.9 0.5 0.5 1.1 0.5 0.5 1.2 0z m-6.5-13.8l-1.7-0.1-0.1-0.7 1.1-0.5 0.7 1.3z" id="YT" name="Yukon">\n </path>\n <path d="M772.7 520.3l0.7 1.1 1.3-0.7 0.7-0.8 1.4-0.7 0.3 0.7 1.3 0.7 0.3-1.1 1-0.7 0.5 0.9 1.3 0.4 1.4 1-1.2 2.6-1.8 0-1.3-0.2-1.5-0.8-0.9 0-2.1-0.8-2.2 0.1-1.1-0.5-1.2 0-0.1-0.5 2.2-0.7 1 0z m-3.9 0.3l0.4 0.5-0.8 0.8-0.9-0.6 0.4-0.8 0.9 0.1z m-6.5-3l1.7 0.1 0.6 0.5-0.6 0.8-0.3 1.1-1.4-1.4 0-1.1z m-14.3-15.4l-1.1 0.5-1.6 0.1 0.5-1 1-0.1 1.2 0.5z m-18.3-10.5l-0.3 0.5-1.3 0.1-0.9-0.6 0.9-0.7 1.5-0.1 0.1 0.8z m58.9-34l-1.3-0.9-0.8-1.5 0.2-1.5-0.3-0.8 1.1-1.2 1.1 5.9z m0.1 0.3l6.6 36.3 0.6 2.9-0.3 1.5 1.5 1.8 0.5 2.2 1.4 1.6 1.3 1 0.7 1.3 0.8 0.6 0.7 1.2 1.9 1.2 0.6 0.6 3.2 0.3 1.6-0.3 3.8 0.1 1.7 0.5 1.7 1 0.2 0.6 1.4 1 1.5 0.3 0.1-1 1-0.3 0.7 1.5 0.5 0.3 0.7 1.4 1.9 0.3 0.8 0.4 0.9-0.8 1.4-0.3 1.6 1.1 0.9-0.2 0.4-0.8 2.5-1.6 0.6-0.5 1.7-0.7 0.9-0.7 1.3-0.2 0.9-0.5 2.3 0.4 0 3.1 1.3 0.9-1 1.1-0.1 0.7-1.2 1.4-1.3 0.1-1.9 1.5-1 1-2.7 4-0.5 1.1-1 1.4-2.2 1.3-1.6 1.4-1.6 0.6-1.3 1-0.9 1.2-1-1-0.1 1.6 1.1 0.2 0.8 0.6-1.5 1.3-1 0-1.2-0.8-1.1 0.4-1.1-0.8-1.6 0.6-0.8 0.5-3 1-1.7 1-0.9 0-3.8 1.8-1.9 2.5-0.8 0.1-0.9 1.1 0 0.9-1 2.1 0.9 0.9 1.3 0.2 1.8-0.2 1.1-1 1-0.4 0.3 2 0.4 1.1 1.1 0.5-0.2 0.7-1 0.7-1-0.2-2 0.4-1.6 0.7-0.7-0.2-1.2 0.7-2.9 1.1-1.5 2 0.1 0.4 2.9-0.2 0 0.4-2.2-0.1-1.3 0.3-3.7-0.5-2.5 0.4-1.1 0.4-1.4 1.2-1.8 2.2-0.4 1.3-0.5 0.5-1.1 0.2-2.4 1.9-1.3 1.9-0.7-0.5-0.8 0.2-0.9 0.7-0.8 0.1-1.9-0.7-0.1-2 0.1-0.7 0-0.1 0.1 0 1-0.6 1.5 0.2 1.3-0.2 1.5-0.6-0.1-1.8-1.5 0.1-0.5-0.5 0.5-0.3 0.5-0.9-0.1-2 0.2-2.4 2.1-1.2 1-1.6 1-0.7 1-1.6 0.1-1.6-0.5-1.9-0.4-3-0.5-1.6 0.5-0.9 0.2-2.1 0.7-1.2 0.7-0.5 0.1-0.7 0.6-1.7-0.4-1.9-0.8-0.8-0.1-1-0.7 0-0.3-0.7-1.4-1.3-0.2-0.8 2.5-0.4 0.1 1.2 0.6 1.4 1.2 1 1.1-0.2 0 1.3 0.8-0.1 0.5 0.6-0.2 1.5 1.3-1.3 1-0.2 0.6 1 1.3 0.5 1.8 0.2 1.2 0.4 0.6-0.8-0.1-1.9-1.1-0.6-0.1-0.7 1.2-0.8 0.8 1 1.1 0-1.1-2-0.8-0.1-1.3-1.2 0.3-1-1.2-0.7 0.6-1.2-0.9-0.8-1.4 0.8-0.9-1-0.1-1-1.3-0.8-1.2-1-0.5-1.3-1.9-0.9-3 0.3-2.9-0.2 0.4-0.9-3.8 0.4-2.6-0.1-0.7-0.4-2.1 0.7-0.3-0.4-2.2 0.6-2.2 0-3.1-0.5-0.6 0.2-1.8-0.4-1.6 0-0.6-0.9 0.3-1.2-0.7-0.1-0.8 0.6-1 0-0.5 0.7-0.9-0.9 0.2-0.7 0.8-1.2-1.1-1.4 1.2-0.3 0.2-0.7-0.6-0.5-1.9 0.1-0.9-0.3 0.2-1.9 0.9-2-1.2-1.3-1.7-0.8-1-1 0-1.2 0.6-1-0.3-0.7 0.6-0.8-0.7-0.6-2.8 0.5-1 0.5-2.6 0-0.9-0.3-2-1.9-1.5-3-0.5-1.8-1.7-2.1-0.8 0.5-1.3-0.7-0.8 0.7-1.6-0.2-2 0.4-1.4-0.8-0.6 0.2-1-0.6-2.2-0.4-0.6-0.4-2 0.1 0.6 1.7 0.8 0.4 0.2 1.1-0.6 1.2-1.8 0.7 0.7-2.2-0.4-1.1-0.6-0.1-0.8 0.9 0 1.8-0.4 0.2-0.1 1.2-0.5 1.7-1.1 0.1 0.2-2.3-2.5 1.2-0.5 0.5 0.2 1.3-0.8 2.6-0.8 0.3-1.1 1.3-1.7-0.1-0.8 0.4-0.6-0.2-0.8-1-0.8-0.2-2.8 0.6-2-0.1-0.5-1.4-0.7 0-1.1 0.7-1.5 1.3-1.2 0.4-1.2 0-0.9-0.6-0.6-1-1.6-0.4-0.7-1.2-0.9-0.2-1.1 0.5-0.6 1-1.2-2.5-1.4 0.1 0.4-1.1-1.9-0.5-0.7-0.4-2.2-0.1-1.5 0.4-0.3 0.7-2.1 0.4-0.9-1.4-2.8-0.2-0.6-0.7-1.3 0.2-0.9-0.3-1-0.9 0-1.3-0.8-3-0.1-1.4-1.2-0.8-1.4-0.1 0-4.8-0.3-36.3 9.9-10.4 0.9-1 13-17 8.7-11.2 8.6-11.2 1.6 1.1 0.6 0.7 1 0.5 1.4 1.2 2.3 1 2.8 4 1 0.9 1.2 0.5 2.6 0.5 0.5-0.1 4.2 1.8 2.7 0.5 1.7 0.7 1.8 1.8 2.1 0.5 0.3 0.7 1.2 0 2.4 0.3 2.6-1 1 0.1 1-0.7 1.1 0.4 1.9 0.2 1.9 0 1.3-0.4 0.8 0.1 0.9 0.8 0.9-0.4 1.6 0.1 1.4 1 0.4 1.8 0.5 0.6-0.3 3.2-0.4 2.4 0.2 1.9 0.5 0.9 1.1 0.8 1.3 2.9-0.3 2.6 0.8 2.1 0.5 1.7-0.7 0.8-0.2 1.4 0.2 1.7 1.5 0.7 1 0.9 0.7 1.4 0.9 0.4 0.9 1.1 1.2 0.7 0.2 1.7-1.1 1.1 1.7-0.3 1.1 1.2 1.9 0.7 1.3 0.3 0.6 1 1.2 0.5 1.6 1.4 0.9 2 0.7 0.6 0.3 1.4-1 0.7-0.9 1.5 0.4 0.4 0.9-1.7 1-0.8 2.1 0.2 3 1.5 0.4 0.7 1.7 1.2z" id="ON" name="Ontario">\n </path>\n <path d="M847.4 508.5l-0.9 1.9-1.1 0.1 1.2-1.8 0.8-0.2z m0.7 1.9l-0.4 1.1-1.5 0 0-0.6 0.7-0.8 0.2-0.8 1-1.1 0 2.2z m15.6-20.4l-0.5-0.4 1.1-1.8 0.4 0.9-1 1.3z m27.9-22.5l-0.6 0.5 0.1 0.9-0.9-0.1-0.9 0.8-0.9 0.2 0 0.6-2.3-0.4-0.2-0.7-3.8 1.2 0.3 0.8-2 0.6 1.2 4.2-0.8 1.8-1.4 1.3-2 1.5-0.4-1.4-1.4-0.1-0.3 0.3-3.2 10 0.4 3.3-0.6 1-0.3 1.9 0.5 0.7-0.3 0.9 0.2 0.8 0.7 0.8-0.8 1.8 0.3 0.6-1.2 1.4-0.5 1.1 0.1 1.2-0.7 1.1 0.3 1-1 0-1 0.6-0.3 0.7-1.3-0.1-0.6 0.8-0.2 2.8-6.3 1.8-8.4 2.2-10.9 2.8 1.7-1.3 0.4-1 1.8-1.5 0.8-0.2 0.9-1.5 1.4-1.5 1.1 0 0.3-0.7-0.4-0.8 0.3-0.9-0.1-1.7 1-1.5 0.3-2.6 0.7-0.4 0.7-1 1.5-0.8 0.2-0.9 1.1-1.6 1.5-1.2 0.4-1.3 1.2-0.9 1-1.5 1.1 0.2 2.9-2.2 0.8-1.4 1.4-0.6 0.4-0.7 2.5-2 0.7-1.5 0.9-2.7 0.7-0.9 0-1.2 1.2-2.2 1.2-3.1-0.1-0.5 0.4-1.4 0.8-0.7 1.3-2.9 1.4-2.2 0.6-0.2 1.2-1.5 0.2-0.8 0.7-0.6 0.8-1.3 1.6-1.2 2.5-2.8 0.9-0.4 1.9-1.8 3.1-3 2.6-1.9 2.4-1.1 2.1-1.2 4.6-1.1 2.9 0.2 2.1 0.7 1.7 0.8-0.3 0.9-1.9 0.1 2.5 1 1.2 0.8-0.6 0.4 0 0.7 0.8 0.2-0.6 1.5-1.4 0.9-0.9 1.1-0.1 1.5-0.9 0.7-0.4 0.8-1.7 2-1.1 0.5-0.7-0.4-2.3 0.1-1.6-0.5-0.7 1.5-1.3 0.2-1.8 0.7-0.1 0.6-2 1.5z m12.3-28.8l1.5 0.1 4.4-0.7 3.3-0.2 0.7 0.3 2.9 0.1 1.6 0.8 1-0.1 0.6 0.5 2.6-0.3 2.5 1.6-0.8 1.3-0.5 0.1-2.6 1.2-2.2-0.1-1.3 0.4-3.3 0.2-1.7-0.4-2.5 0-0.9-1.2-1.3-0.7-1.4-0.3-4.2-0.2-0.8-0.5 0.2-0.6 2.2-1.3z m-55.6-87.6l-0.7 0.3-0.4-1.3 0.5-0.3 0.6 1.3z m-13.5-6.9l1 0.4-0.6 1.7-1.3-1.7 0.9-0.4z m23.4-23l-1.6 1.1 0.9 0.9 1.1 0.4-0.9 1.3 0.2 1 1.1-0.1 0.2 0.7-0.6 1 0.8 1.4-0.5 0.6 0.3 1.2 1.8 0.9 1.2-1.5 0.6 0.4-0.6 0.9 0.3 1.8 1.1 2 0.9 0.2 0.6 0.8-0.5 0.3-1.7 0-0.5-0.3-0.6 1.2 0.6 0.8 0.6-0.6 1 0.4 1.6-0.6 0.7 1.1 1 0.1 0.6-1.2 0.8-0.4 0.5-0.8 0.9 0.1 1.1 0.8-0.2 0.5-2.8 1.6-0.1 1.2 0.7 0.6 0.7-0.8 0.8 0.8-0.8 1-0.1 0.9-0.6 0.6 0.1 1.6-0.8 0.7 0.4 1.4 1.2-0.2 0.4 0.8 1.4 1.7 1.1-0.2 0.5 0.7 1.6 0.1 0.4 0.3-0.5 1.2 0.4 1.2 0.7 0.7-0.5 1 1 0.9 0.2 1.6-0.4 0.5 0.3 1.7 0.5 0.4-0.6 0.9-0.1 2 1.7 1.3 0.3 0.7-0.6 1.6 0.6 1.2 1-0.2 0.1 2.1 1-0.3 1.3 0 1 0.3-1.4 1.6 1.1 1.1 0.6 0.3 0 1.3 0.7 0.2 0.3 2.2 2.4-0.4-0.8 1-0.4 1.2 0.9 0.2 0.3 1.9 0.6 1 0.1 0.9-1.5 0.1 0.4 1.3-0.3 0.7 1.7 1.1-0.9 1-1.6 0.1-0.7-0.7-2.2-0.3-0.5 1.1-1.3 0.3-0.3-0.9-1.6-0.9-1.2 0.1-0.3 1.5-1.6 1 0.5 0.7-1.6 0.8-1.1-0.8-0.6-0.8-1.4 0.2-1.6-0.5-3.2-2.2-0.6 0.7 0 1.4 1.1 1.2-0.2 0.7 1.3 1.2-0.6 1.1-1.6-0.3-0.8-0.8-2.3-0.8-0.1-0.7-1.1 0.4 0.4 0.7 1.6 1.5 1.6 0.8 0 1.5-0.6 0.8 0.3 1-1.9-0.8 0.3 1.3-1.4 1.2 1.6 2.5-0.5 0.6 0 1.5 1.7 0.9 0.9 0.8-0.1 0.9 1.4 0.5 1.1 1.2 2.2 0 1.3 0.8-0.6 1 0.6 0.5 0.5 2.2-1.4-0.1-0.9 0.3-0.4 0.7 1.4 2.6 2.2 0.4 1.6 0.9 0.6-0.7-0.3-0.7 0.6-0.6-0.3-1.7 0.5-0.2 0.5-1.4 0.6 0.3 1.1 1.6-0.8 0.3 0.9 1 0 1.9 1.3 2.5-0.8 0.5 1.5 2 0.7-0.4-0.8-1.4 2 0.8 0.3 0.9 0.8 0.1 0.9-0.9 0.8 0 0.5 0.6 1.6-0.6 1 0.6 0 0.7 0.9 0.1 1 0.8 1.1-0.2 0.7 0.2 0.5-0.8 1.4 0.1 1.6 1.1 1-1.3 0.1-1-0.7-0.7-0.8-1.6 0.9-0.5-0.7-1.5 0.6-0.4-0.8-0.9-0.3-0.9 0.2-1.1-1.2-2-0.2-1.2 0.2-0.6 3.1-2 1.7 0.5 0.4 0.4-2.8 1.4-0.8 0.9-0.4 1.5 1.2 1 1.5-0.3 0.8 1.1 1.1 2-0.3 0.6 10.7-4 11.8-4.8 7.8-3.3 8.4-3.6 6.4-2.9 2.9 6.3-0.6 0.3-0.8-0.8-1.2 0.8-0.3 0.5-1 0.8-0.7-0.1-0.9 2.1-1.5 1.4-1.7 0.2-0.9 1.8 0.1 1.3-1.2 1.4 0.8 2.9-0.9 0.2-0.3 1-1.1 1.4-0.3 2.5-1.4 1-0.2 1 0.5 0.6-1.2 1.3-0.8-0.1-0.8 0.8-1.1 0.3-0.5 0.7-1.3 0.5-1 0-0.4 0.9-0.8 0-0.8 0.8-1 0.3-2.5 2.2-1.4-0.9-2.7 0.7-1-0.2-0.7 0.6-3 0.8-2.3 0.9-0.3 0.8-1.3 0.7-0.7-0.3-0.6 0.4-1.1-0.3-1.9 0.7-0.9 0.8-0.8 0.3-1.8 0-0.9 0.8-1.8 0.8-2.9 0.4-3.2 1.9-1.5 0.1-0.5 1-0.8 0.6-1.4 0.4-0.6-0.5-0.8 0.8 0.1 0.7-0.7 0.5-0.2 1.2-1.3 1.2-0.1 2-0.6 0.2 0 1.1 0.3 0.7-0.2 0.9 0.5 1.7-0.6 1.7-2.5 1.1-0.5 0.6-1 0.1-1.2 0.7 0.1 1.8-1 0.6-0.5-0.3-1.5 2 0.3 1.1-1 0.4-1.1 1.9-0.5 0.5 0 1.9-0.6 0.3 0 1.6-0.6 2.3-1.2 1.9-1 0.4-1.8-0.9-1.2 0.4-2-0.7-0.5 0.3-2.6-0.1 0.3 0.9 2-0.6 1.6 0.1 1.1 0.4 1-0.3 0.9 0.1 0.6 0.6 1.2 0.1 0 1.6-0.3 2.8-1.5 2.6 0.1 1.2-1.8 1.3-0.2 2.3-0.5 1.7-1.5 1.6-1.3 2.4-0.1 0.7-0.8 1-0.8 0.3-1.6 1.1-1.5 0.2-1.1 1.5-1.2 0.8 0 1-1.4 1.2-0.8 1.5-1.8 0.9-1 0.9 0.1 1.2-1 0.7-0.4 2.5-1.2 2.1-1.4 0.6-0.6 0.5-0.8 1.9-1.1 1.2 1.2 1-1.4 0.7-0.3 0.7-1 0.9-1.3-0.9 0-3.1-2.3-0.4-0.9 0.5-1.3 0.2-0.9 0.7-1.7 0.7-0.6 0.5-2.5 1.6-0.4 0.8-0.9 0.2-1.6-1.1-1.4 0.3-0.9 0.8-0.8-0.4-1.9-0.3-0.7-1.4-0.5-0.3-0.7-1.5-1 0.3-0.1 1-1.5-0.3-1.4-1-0.2-0.6-1.7-1-1.7-0.5-3.8-0.1-1.6 0.3-3.2-0.3-0.6-0.6-1.9-1.2-0.7-1.2-0.8-0.6-0.7-1.3-1.3-1-1.4-1.6-0.5-2.2-1.5-1.8 0.3-1.5-0.6-2.9-6.6-36.3-0.1-0.3-1.1-5.9-0.4-1 0.6-0.4 0.7-1.1 0.8 0.2 0.1 1.3 0.9-0.4 1.1 0.9 1 0.4 0.5-1-0.3-1.6-1.1-0.4-0.9-1.4 1.2-0.8-0.6-1.2 0.9-0.5 0.1-1 0.8-0.8 0.2-1.1-0.4-1 0.3-0.9-0.5-1.5-0.9-0.4-1.4-1.3-0.1-1.5-0.3-1-0.9-0.4-1-1.7 0.3-1.6-0.7-2.1-0.5-0.8-1-0.5 1.2-0.8-1.1-0.6 0.1-0.9-0.4-0.7 0.1-1.1-1.3-3-0.8-0.5-1-0.2 0-0.7-1-0.5-1-2.6-0.1-0.5-1.2-1.2 1.2-1 3.3-1.8 0.5-0.8 3-2.1 1.4-1.6 2.2-2.1 0.7-1.5 2.2-3.1 0.6-1.2-0.4-0.3 0.6-1 1.9-4.1 0.1-2.8-0.1-1.7-0.5-1.9-0.4-2.3-1-2.9 0-0.7-0.8-2.1-2.3-3.8-0.2-0.8-1.7-2-0.7-1.1-1.6-1.2-0.3-0.1-1.3-1.2-1-0.5-3-0.9 0-0.5-1.8-0.8-0.4-0.6-1.6-0.1-0.2-0.7 0.4-0.8-1.1-2.6 1.6-0.5-0.1-1.2 0.8-0.8-0.1-1.3 1.6-1.4 0-1.5-0.9-0.8 0.8-0.8-0.1-1.1-0.6-0.6 2.1-0.4 0-1.5 0.7-0.2-0.7-1.1 0.2-1.7-0.5-0.3-1.3 0.3-0.4-0.7 0.5-1.4-0.7-0.5-0.6-1.1-0.8-0.6 0.7-1.2-1.8-1.4 1-1.7-1.6-0.1-0.4-0.5-1.6 0.9 0-1 1.6-3.2 0-1.8-0.8-2.8 1-0.3-1-1.8-0.8-0.8-0.7 0.1-1.4-2.2-1.1-3.4-0.3-1.7 0.5-1.3 0.5-0.3 2.1-2.8 2 0.1 1.2-0.2 1.3 0.2 1.1 0.4 3.9 0.5 0.9 0.3 2-0.2 0.9-0.5 2 0.2 1.5 0.8 0.3-1 1.7-0.4 0.6-1.1 0.8-0.3 0.7-0.8 0.4-1.2 1.1-0.5 0.8 0.9 1.2 0 1.2 0.5 0.2 0.6 1 0.7 1.1 0.3 0.8-0.3 1 0.4 0.6 2 2.3 0.2 2.1 2.1 0.1-0.5 2 0.3 0.9 0.7-0.8 0.7-0.5 1.7 1.2 0.3 0.2 1.2 2.2 1.1 0.9-0.5 2 0.7 1.1-0.5 1.1 0.4 1.4-1.3 1.4 0.1 1 2.4 1 0.3 0.2-1.3 0.6-0.9-0.1-1.3 0.6-0.4 1.6 2.1 0.3 1-1.1 1.2-0.5 0.8 0.7 1.5-0.7 0.6 0.7 0.7 0.4 1.5 1.3 1.1 0.4 1.5-0.6 0.8-0.6-0.1-0.2 0.9-2.5 0.5 1 0.5 0.8 0 1.6-0.8 0.5 0.8 0.9 0 0.2 2.2 1 0.1-0.1 1-0.6 0.7-0.1 1 0.6 0.2 0.8 1.7 0.9-0.9 1.3 0 0.5 1.2-1.6 1 1.5 3.3-0.4 1.3-0.7 0.2-0.5-0.6-1.7 1.2-0.5 0.9 1.5 0.2 1 1 0.7-1.5 0.1-0.8 0.6-0.6 0.4-1.1 0.7-0.6 1.7-0.5 0.6 0.1 0.5-0.7 1 0 2.1 0.8 0.7 1.9 0.6 0.5 0.9 1.3 0.1 2.5 0.4 0.1-0.3-3.6 1.6-0.2 0.1 1.1 1.5-0.7 0 1.2 0.8 0.8 1-0.8 1.5-1.7 0.6-0.3 0.3-1.5 2-0.7-0.4-1.1 0-1.5 0.5-0.3-0.3-1.4 0.2-0.3 2.2 0.9-0.2-0.7 0.2-1.9 0.7-0.5 0.1-0.9 0.7-1.1-0.8-0.9-0.6-1.2 1.2-0.4-0.7-1.1 0.8-0.3 0.1-0.7-0.6-1.3-1.6-2.1 0.5-1.2 1.3-1.6-0.4-1.4 0.3-1-0.1-1.5-0.3-0.8 0.5-0.8-0.3-0.7 2.1 0.1z" id="QC" name="Québec">\n </path>\n <path d="M904 502.9l0.9 1.3-0.9 0.5-0.5-0.3 0.1-1.3 0.4-0.2z m5.5-40.1l-0.2 1.4-1-0.3 0.1-0.7 1.1-0.4z m11.1 19.5l-0.8 0.6-0.4 1.7-0.7-0.3-0.2 1.2-1.4 0.1-0.4 1.1-0.2 1.6-1 0.3-0.5 1.1-2.1 2-1.3 2-2.4 2.3-1.3-0.5-0.6 0.3-0.1 1.3-1.6 1.7-0.7-0.6-1.7 1.7-1.4 0-0.6-0.9-0.8 1.4-0.9-0.7-0.7-0.1-0.7 0.7-1.4-1 0-1.3-0.9-1 0.4-0.6-0.4-0.8-1.3 0.2-2.1-1 0-0.8-0.5-1.5-4-11.9-1.8-1.5-2.3-1-0.9-0.1-0.4 1-1.2 0.4-0.6 0.8-0.8 0.4-1 0.9-1.5-0.8 2-1.5 1.4-1.3 0.8-1.8-1.2-4.2 2-0.6-0.3-0.8 3.8-1.2 0.2 0.7 2.3 0.4 0-0.6 0.9-0.2 0.9-0.8 0.9 0.1-0.1-0.9 0.6-0.5 0.9-0.2 2.3-1.9 1.1 0.5 2.5 0.2 1.2-0.2 0.8 0.4 0.9 1.3 0.6 0.4 1.1-0.5 0.6-1.2 0.9-1.1 1.3-0.8 0.4 0.6 1.2-0.7 1.4 0.6-0.4 0.6-0.5 1.8 0.5 0.7 0 2.4-0.5 0.4-0.3 1.1-1.2 1.7 3.8-1.3 0.6 1.1-0.4 1.4 0.8 1 1.5 0.7 0.4 1.2 1.4 1.5 0.2 0.9 1.3 0.8 2-0.7 1 0.5 0.9-0.6 1.8-0.1-0.4 1.2-1.2 0.4 0.5 0.7z" id="NB" name="New Brunswick">\n </path>\n <path d="M946 477.7l0.2 0.9-0.9 0.3-0.5-0.4 1.2-0.8z m-26.6 6.9l0.4-1.7 0.8-0.6 1.1-0.3 1.1 0.8 1.2 0 0.5-0.5 1.2-0.4 0.1 0.6 2.3 0.2 0.8-0.8 2.6-0.8 1.7 0.4 0.9 0.4 0.5-1 0.7-0.6 1.8-3 1 1.9 1 0.3 1.5-0.1 0.1-0.8 0.8-0.4 1.7 1 0.8 0.2 0 0.7-0.8 0.7-0.1 0.9 2.3-1 1.5-0.1-0.4 1.3-2 0.7-0.2 0.9-1.3 0.8-0.3 0.8-1.3 0.4-0.3 1-1 0.4 0 0.5-2.4 1.9-0.2 0.8-0.8 0.2-0.6 1-1.1 0.6 0 0.9-0.7 0-0.6 0.8-1.6 0.7-0.2 0.6-1.1 0.3 0.1 0.7-1.4-0.3 1.1 1.4-0.1 0.5-1.2 0.7-0.9-0.4-1 0.4-0.5-1.1-1 0.1-0.2 1.1-0.7 0.5-0.7 1.2 0.6 1.4-0.7 3.4-0.6 0.4 0.1 0.8-1 0.9 0.4 1.1-0.5 0.3-0.7 1.8-0.6 0-1 1.1-0.7-0.1 0.3 1.3-0.7 1-1.5 0.9-1.2-0.5-0.3-1.1-1.7-1.3-0.1 1-1.3 0.4-0.9-1.5-0.3-1.3-0.9-0.9 0.1-1.6-0.2-1.3 0.3-1.3 1-1.8-0.9-0.1 0.9-1.6 3.3-4.4 0.2-0.6 1.9-2.4 1-1 1.4-1 0.9-1.5 0.4 1.4 1.4 0.6 0.4-1.5 2-1.5 0.7-0.8 1.9-0.7-1.3-0.4-2.6 0.9-1.1 0.2-1.8 0.8-0.5 0.6-1.6 0-0.7 0.6-0.1 0.8-1.8 0.3 0.3-1.7 1.1-1.4 1.1-2.2 0.1-1.1 0.6-0.8z m23.5-23.7l0.5 1 1.6 0 0.8 2.7-0.1 3.2 1 0.6-0.7 2.3-0.5 0.7-0.2 2-1 0.7 0.3 1.1-0.8 0.8 0.8 0.7 0.5-0.9 1.8-0.3-0.2-0.9 1.4-2.9-1.9 1.9-0.7-0.5 0.9-1.3-0.4-0.8 0.5-1.9 0.6-1.2 1.7 0.3 0.6-0.4 1.8 0.1 0.6 0.7-0.2 0.8 0.8 0.2 0.1 0.8-0.6 1-1.1 0.6 0.7 0.6-0.7 0.8-0.1 0.7-0.9 1.2-2.2 1.8-0.3-0.2-2 0.7-0.7 0.9-0.8-0.2-0.8 0.7-1.5-1.2-1.1-1.8-1-1.5 0.1-1.4 0.9-1.6 0.2-1.9 0.3-1 0.2-4.4 0.5-0.8 0.4-2.6 0.9 0.1z" id="NS" name="Nova Scotia">\n </path>\n <path d="M986.1 433l0.3 1.3-0.7 0 0.4-1.3z m-1-6.5l2.6-0.9 0 0.8-2.3 0.9-0.3-0.8z m-9.7-15.8l0.8 0.5-0.4 0.9-1.1 0.9-0.5-0.8 0.6-1.4 0.6-0.1z m-22-14.2l0.6 0.6 0 0.7 1.4-0.7-0.6-0.4 1.2-1.2 0.8-0.1 0.4 2.4-0.5 0.2 0.1 1.1-1.5 0-1.1 0.6 0.3 1.6 1.1-0.7 1.1 0.1 0.4 1.3-0.1 2-0.4 2.8 0.1 1-0.3 1.1 0 1.1-0.4 1.7 0.2 2.2-0.6 2.5 0.5 0.8 0.2 1.8-0.4 0.6 1.5 0.4 0.6-3 0.4-0.1 0-2 0.6-1.8 0.9 0.4 3.2 0.6 0.8-0.9 0.3 0.8-0.5 1.3-0.5 0.5-0.2 1.2 0.4 0.4-0.2 0.9 3.2 1.4 0-1.1 2.6-2.2 0.6 0.7-0.2 1.1 0.5 1.4 1.1-0.9 2-1.3 0.3-2.9 0.9 0.3 0.2 0.9 1.4-1 1.2-1.4 3.1 0 2.2 0.5-0.1 1.6 0.1 1-0.9 1.2 0.1 0.7-0.7 0.6 1.2 1.6-0.4 0.4 0.9 0.9 0.6-1.4 0.6 0.4-0.9 1.7 1-0.3 2.2 0.1-0.1-2.1 0.5-0.2 1.1 0.7 0.2-1.6 0.7-0.7 0.6 0.5 0.4 2-0.5 1.3-1.2 0.5 0.2 0.9-0.9 1.1-0.3 1.1-0.9 0.1-1.2 0.9 0.7 0.8 1.6-0.7 0.8 0.5 0.2 2.4-0.2 1.6 2.6 0.9 0.1-2.1-0.5-0.5 0.2-1.9 0-1.7 0.6-1 0.8-0.5 0.1-1.1 0.8 0-0.3 2.7 0.3 0.7-0.2 1.6 0.5 0.6-0.1 1.3 1.8 1.2 0.7-2 0.1-0.7-0.5-2.1 0.8 0 0.4 0.9 0.5 0 0.3 1 0.7 0.2 0.2 2.4-0.3 0.4 0.6 2.5 0.5 0.7 0.6 2.8-0.3 0.9 0.1 0.9-0.9 0.8-0.8-0.6-0.9 0.2-0.2 1-0.5 0.9-0.7-0.2-0.4-1.2-0.6-0.7-0.1-0.8-0.8-0.7 0.3-1.9-0.7-0.2-0.7 3-0.8 2.4-1.1 0.3-0.7-2-0.2-4.7-0.6-1.7-2.4-2.5-1.1 0.1-0.5 4.7 0.2 1.5-0.7 0-0.9 1-0.9 0.2-0.3 1.5 0 1.6 0.3 1.1-0.5 0.7 0.1 1.3-0.9 1.1-1.4 0.3-0.3 0.5-1.5 0.7-0.9 0-0.5-0.6 0.3-1.5 1.2-0.9 1.2-1.1 0-0.5 0.7-1.5-0.4-1.7 0.3-0.8 1.4-1.3 0.4-0.9-0.6-0.4-1.1 0.8-2.7 0.1-0.3 1 0.8 0.3 0.2 1.2-1.2 0.8-0.5-0.5-0.7 1-2.3 0.1 1-1.3-0.8-0.9-0.8-0.5-0.9 1.3-0.3 1-1 0.8-2.2 0.7-0.3 1.4-0.5 0.2-1.2-0.1-0.9 0.6-1.8 0-1.7 0.7-0.3 0.6-1.1-0.2-0.8 0.4-2 0.3-0.7 0.9-0.6 0-1.9 1.2-1.2 1.1-1.1 0.5-1.2 1-1.7 0-0.5-1.6-1.4-0.9 0.5-2 1.3-1.9 1.1-2.9 0-0.8 0.7-1.3-0.2-0.7-1.5 0.1-0.8 0.7-1.7 0.9-1 0.9-0.1-1 1.1-2 0.5 0.7 1.3 0 0.6-0.8-0.5-1.4 0.2-1.9-0.3-1.6 0.2-0.8 2-1.3-0.2-1.1-1.3-0.5-0.5-1.1-0.1-0.9 0.7-1.8 0.5-0.6-0.7-1.2 0.1-6.1-0.5-3.9 0.3-2.3-0.6-0.6 1-0.9 0.6-2-0.5-1.1 0.4-0.6-0.3-1.1 0.4-0.5-0.5-1.1 0.1-1.1 1.1-1.7 2-2.5 1-1.7z m-9.7-20.3l1-0.2 0.2 1-1.5 0.1 0.3-0.9z m-20.3-9.1l0.5 1-0.2 0.5-0.9 0.3-0.9-0.8 1.5-1z m-25.3-5.6l0.5 0 0.2 1.2-1.2 0.1-0.3-1.4 0.8 0.1z m-6.2-1.5l2.6-0.5 0 0.8-1.8 0.1-0.8-0.4z m0-6.8l0.8 0.7 0.1 1 0.5 1-0.2 0.9-1.7-0.9-0.4-1.7 0.9-1z m-4-5.7l0.3 1-1.1 0.3-0.1-0.7 0.9-0.6z m-1.8-0.6l0.9 0.7-0.6 0.9-0.8-0.5 0.5-1.1z m-0.2-3.2l0.7 0.3-0.2 1.1-1.2-0.5 0.7-0.9z m-1.4-0.3l0.5 0.5-0.3 0.8-0.7-0.2-0.2-0.8 0.7-0.3z m-20.7-17.1l-0.5 1.1-0.6-0.2-0.1-1.4 1.2 0.5z m82.4 76.2l-2.9-6.3-6.4 2.9-8.4 3.6-7.8 3.3-11.8 4.8-10.7 4 0.3-0.6-1.1-2-0.8-1.1-1.5 0.3-1.2-1 0.4-1.5 0.8-0.9 2.8-1.4-0.4-0.4-1.7-0.5-3.1 2-0.2 0.6 0.2 1.2 1.2 2-0.2 1.1 0.3 0.9 0.8 0.9-0.6 0.4 0.7 1.5-0.9 0.5 0.8 1.6 0.7 0.7-0.1 1-1 1.3-1.6-1.1-1.4-0.1-0.5 0.8-0.7-0.2-1.1 0.2-1-0.8-0.9-0.1 0-0.7-1-0.6-1.6 0.6-0.5-0.6-0.8 0-0.9 0.9-0.8-0.1-0.3-0.9-2-0.8 0.8 1.4-0.7 0.4-1.5-2 0.8-0.5-1.3-2.5 0-1.9-0.9-1 0.8-0.3-1.1-1.6-0.6-0.3-0.5 1.4-0.5 0.2 0.3 1.7-0.6 0.6 0.3 0.7-0.6 0.7-1.6-0.9-2.2-0.4-1.4-2.6 0.4-0.7 0.9-0.3 1.4 0.1-0.5-2.2-0.6-0.5 0.6-1-1.3-0.8-2.2 0-1.1-1.2-1.4-0.5 0.1-0.9-0.9-0.8-1.7-0.9 0-1.5 0.5-0.6-1.6-2.5 1.4-1.2-0.3-1.3 1.9 0.8-0.3-1 0.6-0.8 0-1.5-1.6-0.8-1.6-1.5-0.4-0.7 1.1-0.4 0.1 0.7 2.3 0.8 0.8 0.8 1.6 0.3 0.6-1.1-1.3-1.2 0.2-0.7-1.1-1.2 0-1.4 0.6-0.7 3.2 2.2 1.6 0.5 1.4-0.2 0.6 0.8 1.1 0.8 1.6-0.8-0.5-0.7 1.6-1 0.3-1.5 1.2-0.1 1.6 0.9 0.3 0.9 1.3-0.3 0.5-1.1 2.2 0.3 0.7 0.7 1.6-0.1 0.9-1-1.7-1.1 0.3-0.7-0.4-1.3 1.5-0.1-0.1-0.9-0.6-1-0.3-1.9-0.9-0.2 0.4-1.2 0.8-1-2.4 0.4-0.3-2.2-0.7-0.2 0-1.3-0.6-0.3-1.1-1.1 1.4-1.6-1-0.3-1.3 0-1 0.3-0.1-2.1-1 0.2-0.6-1.2 0.6-1.6-0.3-0.7-1.7-1.3 0.1-2 0.6-0.9-0.5-0.4-0.3-1.7 0.4-0.5-0.2-1.6-1-0.9 0.5-1-0.7-0.7-0.4-1.2 0.5-1.2-0.4-0.3-1.6-0.1-0.5-0.7-1.1 0.2-1.4-1.7-0.4-0.8-1.2 0.2-0.4-1.4 0.8-0.7-0.1-1.6 0.6-0.6 0.1-0.9 0.8-1-0.8-0.8-0.7 0.8-0.7-0.6 0.1-1.2 2.8-1.6 0.2-0.5-1.1-0.8-0.9-0.1-0.5 0.8-0.8 0.4-0.6 1.2-1-0.1-0.7-1.1-1.6 0.6-1-0.4-0.6 0.6-0.6-0.8 0.6-1.2 0.5 0.3 1.7 0 0.5-0.3-0.6-0.8-0.9-0.2-1.1-2-0.3-1.8 0.6-0.9-0.6-0.4-1.2 1.5-1.8-0.9-0.3-1.2 0.5-0.6-0.8-1.4 0.6-1-0.2-0.7-1.1 0.1-0.2-1 0.9-1.3-1.1-0.4-0.9-0.9 1.6-1.1 0.9 0.3 0.6 1.2 0 1.1 1.5-0.2 1.1 1.4 0.2 1.7-0.4 0.3 1.1 0.7 1-0.5 0.5 0.9 1.7 0.7 0.1 1.8 1.8-0.3 1.5 1.2 0 1.3 1.8 0.1 0.1 0.7 1.2 1 1.3 0.5 1.2 1.6-0.2 1-1.1 1.6 1.4 0.5 1-1.3 1.3-0.5-0.1 1.2 0.4 0.4 0.6 2.3-2.4 1.3 0.9 0.4 2-1.7 0.9 0.6 1.4 0.3-0.3 0.6 1.2 0.3 0.4-0.7 0.8 0.7-0.2 1 1.1 0.2 1.2 1 0.2 0.6-0.8 0.6 0 0.6-1.2 0.9-0.1 1.3 2-1.2 1.7 0.4 0 1.4 0.6 1.1 0.6 0 1.5-0.7 1.1 0.1 0.9 1.4-1 0.5-0.4 1.6 0.2 0.5-0.8 0.8 1 0.4-0.7 1.5 0.9 0.6 0.5 0.9-1.5 0.2 1.5 1.2 1.7 0.5-0.6 0.6-0.7-0.2-1.6 0.6 1.3 0.6 0.2-0.4 2.3-0.4 1-0.8 0.7 1.4-0.4 0.4 1 1.1 1.9-0.2 0.4 0.8 0.7-0.5 1.1-0.3 0.5 0.8 1.2 0.2 0.4-1.2 0.5 0.2 0.7 1-0.6 0.5 1.3 0.6 0.4 0.6-0.1 1.2 0.5 0.3 0.1 1.4 0.4 1.5 0.7-1.4 2.2-0.9 0.4-1.3 0.9 0.3-0.3 1.8 2.7-1.1 0.7 0.3 0.1-1.6 1.9 0 0.6 0.7-0.1 0.8 1 0.3 0.5 0.7 1.7 0.3 2-0.6 1.1-0.5 0.7 0.5 1.9-0.9 1.7 0.7 1.3-0.8 0.9 0.3 0.2 1.1-1.7 1 1.2 0.3-0.7 0.9-1.5 0.6-1.7 1.1 0.1 1.4-1.3 0.8-1.3 1.7-1 0.4-2.9 2.6 0.8 0 3.4-2.8 0.7-1.3 0.8-0.5-0.5 2.2-0.6 0.6-1.1 0.2-0.3 1.2-1.4 1.2-1.6 2.1-1.8 0.4-0.5 0.9-1.2 1 1 2.3 0.8 0.6-1.6 1.9 1.8-0.2 0.4-0.4 0.5-2.1 2-1.6 0.5-1.4 1.7-1.2 0.3-0.5-0.7-0.8 0.7-1.5 0-0.7 1.8-1.7 1.7-1.4-1.6-0.3 0-0.8 0.7-0.8 1.4-0.7 3.4-0.6 0.3-0.5 1 0.3 1.1 1.3 0.9 0.5 0.2 0.7 1.2 0.6-0.1 0.7-1.5 1.9 1.2 0.4 0.8 0.8 0.6-1-0.3-0.8 0.4-1.6 2.2-1.2 0.4 0.9 1.5-0.2 2.8-0.8-0.1 0.5 0.8 1.1 1.5 0.1 0.5 0.4 0.6 1.5 0.8 0.3-0.6 1-0.1 1 1.3 0.6 0.6 1-0.9 0.6-0.4 0.9 1.5 1-0.6 1.1 0.8 0.4 1.8-0.6 0.9 0.3-0.5 2 1.2 0.6 0.7 1.1-0.4 1.3-0.4 0.4 0.1 1.1-0.9 1.2-0.3 1-0.8 0.6-1 2.1-0.5 0.3 0.1 0.8-0.4 1.5-0.8 0.5 0.2 0.6-0.9 0.5z" id="NL" name="Newfoundland and Labrador">\n </path>\n <path d="M917.3 473.1l-0.3 0.6 2.6 1.2 0.1 1.1 0.7 0.5 0.7-0.1-0.3-1.3 0.5-0.3 2.6-0.1 1.3 0.4 1.9-0.7 3-1.8 3.2-1.3 1 0-1 1.6-1 0.5-0.5 1.8-1.1 0.2 0.2 0.7 1.4 0.7-0.5 0.4 0.3 1-1.8 0.8-1.5-0.4-0.1-0.7-0.9-0.6-1-0.1-0.7 1.1-3.3 0.3-1.6-0.7-0.4-0.5-1.2-0.2-1.4 0.7-0.4-1.5-1.3-0.7-1.1 0.5-0.5-0.5 0.1-1 0.5-1 0-0.9 0.8-1.8 1.1 1.2-0.1 0.9z" id="PE" name="Prince Edward Island">\n </path>\n <path d="M884.5 549.6l1 1-2.3 0.7 0.7-1.4 0.6-0.3z m-6.4-15.3l0.5 1.8 0.7 0.6 0.7-0.6 0.4 0.9-1.6 1.1 0.3 0.5-0.8 1.3-0.2 1.3 2.2 0 1.8 1.5 0.3 1.6 0.7-0.2 0.8 1.5 0.9 0.4 1.5 0.1 1.5-1.2 0.8-1.2 0.7 2-4 1.7-0.4 0.9-1.2 0.9-0.6-2.3-0.7 1.1-1 0.7 0 0.8-0.8 0.7-0.7 0.1-0.6-1.6-0.5 0-0.5-0.3-1.1-0.7-1.1-2.4-3.4 1-1 0.2-7.1 1.7-6.1 1.3-0.3-0.2 0.1-8 6.7-1.6 9.6-2.2 2.6-3 0.9-0.2z" id="MA" name="Massachusetts">\n </path>\n <path d="M716.3 502.2l-3.8 2.5-3.4 1.4-2 1.2-1.7 1.6-3.7 4.5-2.2 2.1-2.3 1.9-0.1 0.4-0.8 1.1-0.6 0.2 0.2 6.8-0.5 0.7-2.7 1.4-0.7 1.6-0.7 0.8 0 1.6 1.1 0.2 0.8 1.3-0.7 1.7-0.3 2.6 0.4 1.8-0.4 1.9 2 1.7 1.6 0.3 1.1 1.3 1.4 0.3 1.3 1.1 1.1 1.7 1.5 1.2 1 0.1 1 0.4 1.1 1.2 0.5 1.7 0.2 3.1-5.5 0.3-8.3 0.3-8.2 0.3-8.3 0.1-8.2 0.1-5.5 0 0.1-21-0.9-1.1-1-0.2-1.5-2.3 0.2-0.5 1.7-1.4 0.7-2.1 0-1.9-0.4-2.5-0.8-1.3-0.4-2-0.3-0.5 0.1-2.7-0.3-1.5-0.2-3 0-2.7-0.3-2.3-0.7-1.6-1.1-4.2 0.1-3-0.2-1.3 0.4-1.4-0.9-3.7 0-0.3 10.8 0.1 5.1-0.1 0.1-0.2 0-4.2 1.4 0.1 1.2 0.8 0.1 1.4 0.8 3 0 1.3 1 0.9 0.9 0.3 1.3-0.2 0.6 0.7 2.8 0.2 0.9 1.4 2.1-0.4 0.3-0.7 1.5-0.4 2.2 0.1 0.7 0.4 1.9 0.5-0.4 1.1 1.4-0.1 1.2 2.5 0.6-1 1.1-0.5 0.9 0.2 0.7 1.2 1.6 0.4 0.6 1 0.9 0.6 1.2 0 1.2-0.4 1.5-1.3 1.1-0.7 0.7 0 0.5 1.4 2 0.1 2.8-0.6 0.8 0.2 0.8 1 0.6 0.2 0.8-0.4 1.7 0.1z" id="MN" name="Minnesota">\n </path>\n <path d="M603.5 489.5l-3.1 35.7-0.9 11-0.2 0-6.1-0.5-8.1-0.9-11.6-1.3-5.3-0.7-11.6-1.6-8-1.2-6.6-1.1-1 5.8-1.1-1.4-0.5-1.7-1.2-0.1-0.8 2-1.4-0.5-1.1 0.3-0.5-0.5-1.8-0.1-1.2-0.5-0.7 0.2-0.5 0.7-2.5-0.9-1.4 0.7-0.8-0.1-0.5-0.6 0-2.2-0.8-2-1.2-0.1-0.9-1.8 0.5-0.7-0.4-1.6-1.2-2.4 0-3.3-1.1-1.5-1.5 1.2-1.9 0.6-0.8-1.1-0.7-0.3 0.7-1.4-0.3-1 1.6-1 0-1.1-0.4-0.9 0.7-1.5 0-0.9 1.5-2.8 0.4-1.2-0.2-0.6-1.7 0.1-0.2-1-2-1.8 0.1-0.9-2.1-3.8-0.3-1-1.2-0.8-0.4-1-0.9-0.7 0.7-0.5-0.6-1 0.6-0.4-0.1-1.2-0.6-1.1-0.1-0.8-1.1-2.1 2.6-11.4 6.6 1.4 8.4 1.8 8.3 1.6 10 1.8 6.7 1.2 6.1 0.9 7.4 1.1 6.8 1 6.7 0.9 8.5 1 6.8 0.7 9.5 0.9z" id="MT" name="Montana">\n </path>\n <path d="M656.3 492.2l0 0.3 0.9 3.7-0.4 1.4 0.2 1.3-0.1 3 1.1 4.2 0.7 1.6 0.3 2.3 0 2.7 0.2 3 0.3 1.5-0.1 2.7 0.3 0.5 0.4 2 0.8 1.3 0.4 2.5 0 1.9-7.6 0-7.6-0.2-7.6-0.3-7.6-0.3-7.5-0.4-11.4-0.7-11.6-1 3.1-35.7 9.1 0.7 11.7 0.8 12.1 0.6 8.5 0.3 11.4 0.3z" id="ND" name="North Dakota">\n </path>\n <path d="M314.6 613.2l0.9-0.2 2.4 0.1 2.2 0.4 1.3 0.6 0.6 1.5 0.7-0.5 0.6 0.2 0.7 1 1.4 0.3 0.7 0.6-0.3 1-0.8 1.3-2 1.9-0.9 0.4-0.6 1-1.1 1.3-0.4 2.6-0.6 0.6-1.8-0.4-0.8 0.1-0.9-1-0.6-2.4-2.3-2.7-1.4-1.1 0-0.7 0.8-1.4 0.4-2.2-1-0.7-0.7-1.2 0.1-0.7 1.5-0.3 0.5 0.4 1.4 0.2z m-11.7-0.4l-1.4 0.9 0.3-1.3 1.1 0.4z m-4.9-0.7l-0.9 0-0.8-1.9 1.1-0.2 1.1 0.5 0.2 0.9-0.7 0.7z m2.1-4.7l0.8 0.2 0.9 0.7 1.7-1.3 0.6-0.1 1.8 0.7 1.4-0.1 0.5 1.3-1 1.2-0.8 0.3-0.9 0.9-1.1 0.4-0.7-0.7-0.8-1.3-0.7 0.4-1.1 0-1.3-0.9 0-1.1 0.7-0.6z m-7.9 0.5l4-0.8 1-0.5 1.1-0.2-0.3 0.9-1 1-2.4 0.3-2 1-0.5-0.4 0.1-1.3z m-8.4-1.6l0.9 0.5 0.2 0.9 1.8 0.4 0.9 0.5-1.3 1.2-1.4-0.1-1.9 0.9-2.3-1.6-0.5-1.2 1.2-0.4 0.6-1.8 0.6-0.2 1.2 0.9z m-25.2 6.9l-0.8-0.9 0.9-1.4 0.7 0.6-0.8 0.9 0 0.8z m6.7-8.2l1.4 0.6 0 1.3 0.3 1-0.7 1.4-1.9 0.3-1-0.3-1 0-0.5-0.8 0.3-1.4 1.4-1.5 1.7-0.6z" id="HI" name="Hawaii">\n </path>\n <path d="M511.7 475.2l-2.6 11.4 1.1 2.1 0.1 0.8 0.6 1.1 0.1 1.2-0.6 0.4 0.6 1-0.7 0.5 0.9 0.7 0.4 1 1.2 0.8 0.3 1 2.1 3.8-0.1 0.9 2 1.8 0.2 1 1.7-0.1 0.2 0.6-0.4 1.2-1.5 2.8 0 0.9-0.7 1.5 0.4 0.9 0 1.1-1.6 1 0.3 1-0.7 1.4 0.7 0.3 0.8 1.1 1.9-0.6 1.5-1.2 1.1 1.5 0 3.3 1.2 2.4 0.4 1.6-0.5 0.7 0.9 1.8 1.2 0.1 0.8 2 0 2.2 0.5 0.6 0.8 0.1 1.4-0.7 2.5 0.9 0.5-0.7 0.7-0.2 1.2 0.5 1.8 0.1 0.5 0.5 1.1-0.3 1.4 0.5 0.8-2 1.2 0.1 0.5 1.7 1.1 1.4-4.8 28.7-11.1-1.9-8-1.5-6.3-1.3-9.5-1.9-4.7-1.1-11-2.5 4.8-20.2 1.3-2.6-0.1-0.7 0.8-1-0.5-1.2-1.6-0.7 0.4-2.1 1-0.9 1.3-1.8 0.9-0.4 1-1.2 0.4-1.3 1.1-1.1 1.1-2.1 2.1-2.3 0.2-0.7-0.3-1.4-1.6-1.4-0.4-1-0.1-1.1-0.4-1.3 0.7-0.8-0.6-2.3 4.5-19.4 0.9-3.5 1.7-7.2 7.5 1.7z" id="ID" name="Idaho">\n </path>\n <path d="M460.6 469.1l-0.6 2.1-0.3 2.2 0.8-0.2 0.5 1.4-0.9 0.2-0.5-0.8-0.2-1.4 0.3-0.6-0.9-1.1 0.1-0.6 1.2-1.3 0.5 0.1z m-2.6-2.3l-1 0.1-0.1-1.5 0.5-0.1 0.6 1.5z m1.7-1.9l0.7 0.8-1.1 0.4-1.1-0.7 1-0.6 0.5 0.1z m1.8-3l10.5 3.2 8.2 2.3 8.2 2.1 6.6 1.7 9.2 2.3-1.7 7.2-0.9 3.5-4.5 19.4 0.6 2.3-0.7 0.8 0.4 1.3-5.1-1.2-11.7-2.9-0.8 0.4-2-0.5-2-0.2-0.7 0.4-2.3-0.2-1.7 0.1-0.9 0.4-2-0.2-1.1-0.6-2.5 0.4-1.1-0.4-0.8 0.1-0.8-1.3-2.3-0.9-1.8-0.4-1.6 0.5-2.6 0.2-2-1.3-1-0.4-0.4-0.5 0.6-3.7-0.4-1.7-1.3-1.4-0.6-0.1-1 0-0.9-1.8-1-0.1-0.6-0.7-2 0-0.7-1.5 1.6-0.6 0.9-3.2-1.3-0.6 0.2-0.8 0.7-0.7 1.4-0.2-0.8-0.8 0-0.5-1-0.5 0.3-2.2-0.3-1.7 0.4-2.2 0.2-2.4-0.2-0.9-0.8-1.5 0.3-2.3-0.1-0.8 1.1-1.5 0.8-0.4 1.1 1.3 1.1 0.8 1 1.3 2.6 1 0.8 0.6 2.4 1 1.2 0 0.6 0.9 1.7-0.1-0.1 0.6 0.3 2-0.1 0.7-0.8 0.7-0.8-0.1-1.5 1.8 1.7-0.3 0.4-0.8 1.7-1.5 0.4 0.1 0 1.8-1.4 0.4-0.1 1.2 0.4 1-1.2 1.9-0.9 0.2-1.2 0.8 0-1.4-0.7 0.3-0.6 1 0.3 0.7 0.8-0.1 0.4 1 1.6-1 0.5-0.7 0.6 0.3 1.3-0.9-0.1-0.9 0.3-2.3 0.5-1.6 1.2-1.6 1.1-0.6-0.8-1.5 0.4-2.2-0.8-1.1 0.8-1.6 0.6-0.5 0-2.3-1-0.2-0.4-1.7 0.5-1.2z" id="WA" name="Washington">\n </path>\n <path d="M545 623.7l-9.5 65.5-9.1-1.3-10.3-1.7-0.5-0.2-11.6-6.7-7.5-4.4-7.4-4.5-7.7-4.7 0.4-1.1 1.1-1.2 0.4-0.3 1.4 0.4 0.3-0.7 0.8-0.7 0.1-1.3-0.5-0.7-0.8-0.2-0.6-0.7 0.5-1.3-0.2-1.2 0.3-1.3 0.9-0.1 1.2-1.2 0.7-2.1 0.3-2.2 1.3-1 0.5-0.8 1.4-0.6 1.3-0.7 0.2-0.6-2-2 0.2-0.7-0.7-2.8-0.4-0.3-0.5-1.4 0.2-1.5 0.3-1.5 0.7-0.5 0.2-1.9-0.3-2 0.5-1.2-0.2-1.1 0.5-1.8-0.4-1.4 0.4-1.2 1.7-0.4 1.1 0.6 0.8 0 0.8 1.5 1 0 1.2-1.8 1.8-9 5.7 1.2 8.5 1.6 11.5 2 12.8 2.1 7.2 1.1z" id="AZ" name="Arizona">\n </path>\n <path d="M446.7 651.2l0.7 1.6 0.9 1.3-0.7 0.1-0.5-0.7-0.4-2.3z m1.8-4.9l1.4 1.2 0.3 1-1.5-0.3-0.2-1.9z m-12.5-9.9l0.1 1.1-1.2 0.2-0.5-0.4-0.1-1.2 1.7 0.3z m2 0.1l1.8 1.1-1 0.4-1.2-0.4 0.4-1.1z m51.2 0.9l-0.2 1.5 0.5 1.4 0.4 0.3 0.7 2.8-0.2 0.7 2 2-0.2 0.6-1.3 0.7-1.4 0.6-0.5 0.8-1.3 1-0.3 2.2-0.7 2.1-1.2 1.2-0.9 0.1-0.3 1.3 0.2 1.2-0.5 1.3 0.6 0.7 0.8 0.2 0.5 0.7-0.1 1.3-0.8 0.7-0.3 0.7-1.4-0.4-0.4 0.3-10.5-1.3-13.1-1.7 0-1.7-0.8-0.6 0.1-1.6 0.4-0.5 0-2.7-1.2-3-2-2.8-1.6-1.7-0.8-1.3-1.4-0.8-0.6 0.6-1-0.7 0.5-1-0.2-1.4-0.7-1.2-2.3-0.4-1.3-0.6-2.4-1.9-0.1-1.3-1.4-1.8-1.4-1-1.1 0-1.3-0.5-1.1-0.9-1.1-0.4-3.2-0.7-0.1-0.8-1.1-1.1 0.8-1.2-0.2-0.7 0.5-1.1-0.3-0.7 0.9-1.8 0-0.7-1.2-0.9-0.7-1 0.7-1.7-1.1-1-0.9-2.4-0.8-0.5-0.2-1.6-0.9-1.4 0.1-1.2-0.6-0.6-0.2-1.2-0.7-1.2-0.7-0.9-0.4-0.8 0.1-2.2 0.6-1.6 0.5 0.5 0.8-0.7 0.6-1.3-0.3-1.5-0.5-0.8-1.2 0-0.7-0.5-1.5-3.1 0.6-1.9-0.1-1.6-0.4-0.6 0.7-1.4 0.2-1.4 0.9 0-0.2 2.6 1.8 0.7 0.2-1-0.5-1.2-0.6-2.8 1.8-0.6 0.6 0.6 1.7-0.1-0.5-0.9-0.8 0.7-1.3-0.6-0.9-1.2-0.9 0.3-0.8 2 0.5 0.6-1 0.5-1-1.4-0.5-0.1-0.5-1.3-0.7-0.7 0.3-2.7-0.7-2.4-0.9-1-1-2.5-1.3-2.4-0.3-1.4 0.6-0.7-0.1-3.9 0.5-1 0.7-1 0.3-1.7 0-1.7-1.3-3.8-1.5-2.4 0.3-0.6 0-1.5 2-2.5 0.5 0.2 2-3.2 0-1.5 0.5-0.4 1.4-2.7 0.2-1.9 0.1-1.7-0.8-0.7 0.7-0.7 0.5-1.6 6.7 2.1 6.5 2 10.9 3.2 10.9 3-9.1 33.7 4.7 7.2 3.2 4.7 4.8 7.1 5.1 7.9 5.1 7.8 3.5 5.3 7.1 10.8 4.2 6z" id="CA" name="California">\n </path>\n <path d="M612 595.7l-2.3 34.8-8.9-0.6-10.5-0.9-8.7-0.9-10.5-1.1-12.2-1.4-8.7-1.2-5.2-0.7 6.7-46.1 10.9 1.5 6.8 0.9 11 1.2 8.2 0.9 6.6 0.6 6.5 0.5 11 0.9-0.7 11.6z" id="CO" name="Colorado">\n </path>\n <path d="M499.3 615.7l-1.8 9-1.2 1.8-1 0-0.8-1.5-0.8 0-1.1-0.6-1.7 0.4-0.4 1.2 0.4 1.4-0.5 1.8 0.2 1.1-0.5 1.2 0.3 2-0.2 1.9-0.7 0.5-0.3 1.5-4.2-6-7.1-10.8-3.5-5.3-5.1-7.8-5.1-7.9-4.8-7.1-3.2-4.7-4.7-7.2 9.1-33.7 10.9 2.9 6.3 1.6 7.8 1.8 11 2.5 4.7 1.1 9.5 1.9-11.5 57z" id="NV" name="Nevada">\n </path>\n <path d="M600.4 635.7l-0.4 0.1-4.3 52.2-8.8-0.8-8.8-0.8-10.9-1.1-7-0.8 0.4 2.1 0.8 0.8-16.9-2.3-0.7 5.3-7.5-1.1-0.8-0.1 9.5-65.5 5.2 0.7 8.7 1.2 12.2 1.4 10.5 1.1 8.7 0.9 10.5 0.9-0.4 5.8z" id="NM" name="New Mexico">\n </path>\n <path d="M448.5 492.6l0.6 0.1 1.3 1.4 0.4 1.7-0.6 3.7 0.4 0.5 1 0.4 2 1.3 2.6-0.2 1.6-0.5 1.8 0.4 2.3 0.9 0.8 1.3 0.8-0.1 1.1 0.4 2.5-0.4 1.1 0.6 2 0.2 0.9-0.4 1.7-0.1 2.3 0.2 0.7-0.4 2 0.2 2 0.5 0.8-0.4 11.7 2.9 5.1 1.2 0.1 1.1 0.4 1 1.6 1.4 0.3 1.4-0.2 0.7-2.1 2.3-1.1 2.1-1.1 1.1-0.4 1.3-1 1.2-0.9 0.4-1.3 1.8-1 0.9-0.4 2.1 1.6 0.7 0.5 1.2-0.8 1 0.1 0.7-1.3 2.6-4.8 20.2-7.8-1.8-6.3-1.6-10.9-2.9-10.9-3-10.9-3.2-6.5-2-6.7-2.1-0.8-1.7 0.2-2.6 1.2-2.5 0.2-1.1-0.5-1.2 0-1.2 1.5-1.8 1.7-3.2 1.1-0.7 2.6-4.8 3.3-7.8 0.8-2.4 0.4-0.5 1.5-3 1-3.3 1.2-2.2-0.1-1.2 0.5-1.2 0-0.9 0.6-0.3 0.3-1.1 0-1.5 0.9 0.8 2 0.3 0.9-0.3 0.7 1.3 1.2 0.5 0.5-0.4z" id="OR" name="Oregon">\n </path>\n <path d="M536.2 563.4l-1.9 11.5 11.9 1.9 5.5 0.8-6.7 46.1-7.2-1.1-12.8-2.1-11.5-2-8.5-1.6-5.7-1.2 11.5-57 6.3 1.3 8 1.5 11.1 1.9z" id="UT" name="Utah">\n </path>\n <path d="M597.3 559.5l-2.1 23.2-6.6-0.6-8.2-0.9-11-1.2-6.8-0.9-10.9-1.5-5.5-0.8-11.9-1.9 1.9-11.5 4.8-28.7 1-5.8 6.6 1.1 8 1.2 11.6 1.6 5.3 0.7 11.6 1.3 8.1 0.9 6.1 0.5-2 23.3z" id="WY" name="Wyoming">\n </path>\n <path d="M724.9 642l0.6 0.9-0.9 0.1 0.4 0.9-1.9 1.3 0.3 0.9 0 1.2-0.9 0.5 0 0.7-0.7 0.8 0 1.3 0.3 1-0.8 0.8-0.4 0.9-0.7 0.6 0.3 0.9-0.7 0.8-1 0.4 0.1 0.8-0.9 0.3-0.4 1.2 0.3 0.8-0.1 1.7-2.1 1.8-0.4 0.9-0.8 0.6 0.7 0.7-0.2 0.7-1.6 0.6 0.5 0.7-0.1 1.4-1.3 1.3 0.4 0.8-0.5 1.2 0.9 0.6 0 1.2-0.5 0.7 0.8 0.6 0.1 1.4-0.5 0.4 0 1.2-7.2 0.3-12.2 0.5-8.8 0.3-0.2-6.4-0.5-0.3-1.9-0.1-0.9 0.4-0.9-1 0-20.3-1.9-12.9 5.2-0.1 10.2-0.3 10.3-0.4 7.7-0.4 8.3-0.5 1 1.5 0 0.9-1.3 1.3-1.1 1.5-0.2 0.9 6.1-0.5z" id="AR" name="Arkansas">\n </path>\n <path d="M711.8 566.9l-0.1 0.2 1.7 1.2 0.6 1.5 2.1 1.4 0.4 1-0.4 2.5-0.9 0.9-0.2 1.6-0.8 0.8-1.4 0.5-0.8 0.7-2.5 0.4-0.5 0.6-0.3 1.5 0.1 0.7 0.8 0.5 0.5 0.8-0.1 1.5-1 1.5-0.2 1.4-0.5 0.6-1.7 0.8 0.1 2.3-0.5 0.2-2.2-1.9-0.5-0.7-1.9 0.2-10.1 0.7-4.1 0.1-4.1 0.2-4 0.1-11.4-0.2-0.1-0.7-0.8-0.8 0.3-0.8-0.1-2.2-0.3-0.3 0-1.8-0.4-0.5 0.4-1.3-0.7-0.2 0.2-1.5-1.3-1-0.2-1.1 0.4-1.7-0.6-0.9-0.2-1.4-0.9-0.8-0.1-0.7-0.7-1 0.1-1.1-0.5-0.8 0-1.5-0.7-0.3-0.4-1.5-0.9-1.2 0.6-1.1 0.5-1.4 0-0.9 0.4-0.9-0.2-1.1-0.7-0.1 0.3-1.9-0.5-1.3 1.2 0 5.5 0 8.2-0.1 8.3-0.1 8.2-0.3 8.3-0.3 5.5-0.3 0.5 1.6 0.8 0.2 0.2 0.7-0.6 1.5 0.5 2.8 0.8 2 0.7 0.4 2.3 0.4 0.7 1.3-0.1 0.4z" id="IA" name="Iowa">\n </path>\n <path d="M678.7 632.3l-10.8 0.1-6.4-0.1-10.8-0.1-10.7-0.2-6.4-0.3-8.6-0.3-8.6-0.5-6.7-0.4 2.3-34.8 13.2 0.7 9.4 0.5 9.3 0.3 5.6 0.1 13.1 0.1 9.3 0 1.1 1.1 1.1 0.5 0.6-0.5 1.1 1-1.4 1.9-0.5 1.5 1.7 1.9 0.8 1.7 1.9 1.1 0.4 24.7z" id="KS" name="Kansas">\n </path>\n <path d="M706.2 592l-0.5 0.8-0.1 1.6 0.3 1.9 0.5 0.7 0 1 0.9 1.8 2.4 1.9 0.5 0.9 2.2 1.4 0.9 1.4 0.4 2.3 1.1 1.3 1.3-1.1 2.3 0.9 0.6 0.5-0.6 1.1 0.1 1.2-0.6 1.2-0.9 2.8 0.4 1.1 2.3 2.1 1.8 0.6 1.9 1.2 0.8 1.2 0.9 0.3 0.3 1.6 0.8 1.4 0 0.9-0.5 1.1 2 2.8 0.8-0.4 1.2 0.7-0.2 1.5 0.2 1.3-0.5 1.6-0.4 0.4-1-0.7-0.5 1.7-0.7 0-0.6 0 0.4 1.4-0.9 0.7 0.5 0.8-1 0.2 0.8 1.1-0.5 0.5-0.4 1.3-6.1 0.5 0.2-0.9 1.1-1.5 1.3-1.3 0-0.9-1-1.5-8.3 0.5-7.7 0.4-10.3 0.4-10.2 0.3-5.2 0.1 0-5.8-0.4-24.7-1.9-1.1-0.8-1.7-1.7-1.9 0.5-1.5 1.4-1.9-1.1-1-0.6 0.5-1.1-0.5-1.1-1.1-0.9-0.5 0.1-0.8-2-2.7-0.6-2-0.6-0.9 11.4 0.2 4-0.1 4.1-0.2 4.1-0.1 10.1-0.7 1.9-0.2 0.5 0.7 2.2 1.9z" id="MO" name="Missouri">\n </path>\n <path d="M661.7 568.1l0.7 0.3 0 1.5 0.5 0.8-0.1 1.1 0.7 1 0.1 0.7 0.9 0.8 0.2 1.4 0.6 0.9-0.4 1.7 0.2 1.1 1.3 1-0.2 1.5 0.7 0.2-0.4 1.3 0.4 0.5 0 1.8 0.3 0.3 0.1 2.2-0.3 0.8 0.8 0.8 0.1 0.7 0.6 0.9 0.6 2 2 2.7-0.1 0.8 0.9 0.5-9.3 0-13.1-0.1-5.6-0.1-9.3-0.3-9.4-0.5-13.2-0.7 0.7-11.6-11-0.9-6.5-0.5 2.1-23.2 8.9 0.7 13 0.9 8.7 0.5 7.2 0.3 9.5 0.3 2.1 1.6 2 1.1 0.5-0.1 0.9-0.9 1.5 0.2 3.1-0.3 1.5 1.1 2.3 0.6 0.5 0.6 0.7 0.2 0.2 0.7 0.7 0.9 1.1 0.2z" id="NE" name="Nebraska">\n </path>\n <path d="M678.7 638.1l1.9 12.9 0 20.3-0.5 0-2.2-0.9-1.1-0.3-1.1-1.2-2.3-1.2-0.5 0.7-0.9 0.4-1.7-0.2-0.6-0.7-1.7 1-0.8 0.1-0.8-0.5-1 0.6-1.1 0.3-0.5 0.7-0.8 0-0.4 0.7-0.8-1-0.8 0-1.5-1.5-0.4 0.7-1.6-0.3-0.5-0.9-1.6 1.7-0.2 0.8-1-0.6 0.2-0.9-0.3-0.5-1.6 0.9-0.9-0.7-1-0.1-0.3-1-0.7 0-1.2 1.1-0.8 0.2-0.8-0.3 0.2-1-1.4-0.6 0-1.3-2.4-0.1-0.7 0.7-0.8 0-0.7-0.9-1.4 0.1-1.6-0.4-0.7-0.5-0.7 0-1.6-0.3 0.1-1.1-0.7-1-1.2-0.6-0.1 0.8-1.4-0.4-1.3 0.2-1.9-2.1-1.1-0.1 1-22.4-7-0.4-9.9-0.6-11.1-0.7 0.4-5.8 8.9 0.6 6.7 0.4 8.6 0.5 8.6 0.3 6.4 0.3 10.7 0.2 10.8 0.1 6.4 0.1 10.8-0.1 0 5.8z" id="OK" name="Oklahoma">\n </path>\n <path d="M661.3 528.1l-0.7 2.1-1.7 1.4-0.2 0.5 1.5 2.3 1 0.2 0.9 1.1-0.1 21-1.2 0 0.5 1.3-0.3 1.9 0.7 0.1 0.2 1.1-0.4 0.9 0 0.9-0.5 1.4-0.6 1.1 0.9 1.2 0.4 1.5-1.1-0.2-0.7-0.9-0.2-0.7-0.7-0.2-0.5-0.6-2.3-0.6-1.5-1.1-3.1 0.3-1.5-0.2-0.9 0.9-0.5 0.1-2-1.1-2.1-1.6-9.5-0.3-7.2-0.3-8.7-0.5-13-0.9-8.9-0.7 2-23.3 0.2 0 0.9-11 11.6 1 11.4 0.7 7.5 0.4 7.6 0.3 7.6 0.3 7.6 0.2 7.6 0z" id="SD" name="South Dakota">\n </path>\n <path d="M708.9 719.2l-0.4 0.1-1.9-0.9 0.9-1 2.1 0.7-0.7 1.1z m22.7-9.6l-1.9 0.3-0.6-0.7-2.1-0.1-1-1.1-1.6-0.2-1.8 2.1-0.2 0.9 1 0.8 1.8 0.4 1.3-0.3 1.1-0.7 0.4-0.7 1 0.6-0.4 1.2 1.6 1.2 0.7 0 0.4-1.3 1.4-0.9 0 1.5 1.1 0.5-0.8 1.1-0.4-0.4-1.7 2.6-0.8 0.3 0.6 0.9 1.3 0.5 0.4 0.9 0.8-0.2 1 0.6 1.4-0.2 2 2.3-1.6 1.5-1.2-0.1-0.8-0.4-1.2-1.8-2.9-1-0.3-0.5-1.3-0.9-0.7 0.1-1.1-0.7 0.5 2-0.5 1 0.2 1.2-1.4 1.2-0.5-0.9 0.1-1-1.5-0.5-1.7 0.1-1.4 2.2-1.3-0.6-1 0.1-3.1-0.6-1.1-0.6 1.1-1.4-0.7-1.4-0.4 0.4-2.2-0.3-0.4-1.3-0.8 0 0.1-1-0.6-0.2-2 0 0.3-0.9-1.4 0.1-0.1 0.4-1.4 0.5-0.1 0.6 0.5 1-1.7 1.1-2.8-0.3-1.4-0.4-3.6-1.4-1.8-0.4-2.6 0.1-2.9 0.5-0.9 0.5-0.6-1.3 1.1-0.6 0.2-1.2-0.4-0.3 0.8-1.1-0.1-2.5-0.4-1.2 0.5-0.7-0.3-1.3 0.4-0.5 1.1-2.6 0.3-1.4-0.4-0.8 0.6-0.4-1.7-3.3 0.2-0.5-1.8-2.5 0.1-1.5-0.9-2-1.4-1.3-0.3-11.8 8.8-0.3 12.2-0.5 7.2-0.3 1 1-0.6 0.8-0.1 2.7 0.6 0.8 0.1 1.2 1.9 1.2-1.4 3.1-0.2 0.8-0.6 0.4-0.9 1.3-0.8 0.3-0.6 1.4-0.2 2-0.9 0.9 0.4 1-0.4 1.5-0.9 0.1 0.3 0.9-0.2 0.7 0.6 1-0.8 0.7 9.5-0.5 9.8-0.6 0 0.6-0.9 3.2 0.6 1.3 1.3 1.2 0.6 1.8 0.5 1 0.7 0.2z" id="LA" name="Louisiana">\n </path>\n <path d="M653.5 741.8l-1.6 3.5-0.5 0.1 1.5-3.5 0.6-0.1z m1.5-2.5l1.3-2.7 0.6 0.3-1.9 2.4z m6.6-5.6l-3.1 1.9-0.1-0.3 2.1-1.5 1.1-0.1z m19-62.4l0.9 1 0.9-0.4 1.9 0.1 0.5 0.3 0.2 6.4 0.3 11.8 1.4 1.3 0.9 2-0.1 1.5 1.8 2.5-0.2 0.5 1.7 3.3-0.6 0.4 0.4 0.8-0.3 1.4-1.1 2.6-0.4 0.5 0.3 1.3-0.5 0.7 0.4 1.2 0.1 2.5-0.8 1.1-0.6 0-0.7 1.4-0.1 1.1 0.7 1.2-1.9-0.1-6.1 2.9 0.5-1.2-1.5 0.3 0.6-2-0.6-1-0.8 0.2-0.5 1.2-1.4-0.7-0.1 2.1 1.4 2-1.8 2-0.9 0.7 0 1.2-2.3 2-2.3 1.4-0.9 0.3-1.3 0-4 1.8-0.6-1.2-0.9 0.6-2.2-0.2-0.2 0.8 0.6 0.4 1.2 1.4-2.6 1.3-1.3-1.4-0.7 0.3 0.7 1 0 1-1.1 1.1-2.9 0.2 0.6 0.7 0.8 0.4-1.7 2.4-0.8-0.6-2.7 0.1 0.3 0.4 1.1 0.1 0.3 1.1 1 0.7-1.8 4.2-1.1-0.3-1.1 0.6 0 0.6 1.2 0.2 0.8-0.5-0.1 1.7-0.5 0.3 0.2 1-0.8 0.1-0.1 2.2 0.7 0.6 0.7 2.9-0.3 1.3 1 0.9-0.1 0.8 0.5 1 0 0.9 0.7 0.6 0.1 1.1 1 0.2-1.2 0-1.9 1.3-2.7-2.2-1.3-0.4-1.5 0.1-3-0.3-0.8-0.5-0.7-1-2.2-0.8-0.7 0.2-1-0.8-0.6-0.8-1 0-0.8-0.4-1.3-0.1-0.2-1.5-0.6-0.5 0.5-1.5-0.9-0.7-0.4-1.7-1-0.6-0.2-0.9-0.9-0.5 0.4-1.8-0.6-1.6 0.3-1-0.3-1.7-1-0.9-1.1-0.4-1-1.2-0.5-0.4-0.2-1.2-1.2-1.4-0.7-1.7-1.2-0.7-0.9-1-1-3.6-0.9-1.4-0.2-1.2-1-1.4-0.4-2.3-0.9-0.7-0.5-1.2-2-1.5-0.2-0.9-1-0.7-0.9-1.5-0.7 0.1-0.5-0.6-0.4-1.1-1.5-0.4-0.8 0.2-3.4-0.8-1.5 0.1-1.8-1.1-0.8 0.4-0.4 0.8-1.1-0.2-1.8 0.4-1.1 1.7-1.2 2.9-0.3 1.4-1 0.4-1.3 1.3-0.5 0.9-1.6-0.7-0.7 0-1-0.8-0.6-0.8-1.3-0.4-1-0.8-0.1-0.5-1.4-0.3-1.3-0.7-1.9-2.4-0.8-0.2-1.8-1.7-0.2-1.4-1-1.9-0.1-1.1 0.4-1.9-0.6-0.9-0.9-2.1-0.2-1.4-1.1-1.6-0.7-0.4-1.3-1.4-1.3-0.6-1.8-1.9-0.2-0.9-1.7-1.4-0.8-1.4-1.2-1.4-1.6-0.8-1-1.7-0.5-1.7-1.4-0.7-0.8-0.8-0.4-2.1 7 0.8 10.9 1.1 8.8 0.8 8.8 0.8 4.3-52.2 0.4-0.1 11.1 0.7 9.9 0.6 7 0.4-1 22.4 1.1 0.1 1.9 2.1 1.3-0.2 1.4 0.4 0.1-0.8 1.2 0.6 0.7 1-0.1 1.1 1.6 0.3 0.7 0 0.7 0.5 1.6 0.4 1.4-0.1 0.7 0.9 0.8 0 0.7-0.7 2.4 0.1 0 1.3 1.4 0.6-0.2 1 0.8 0.3 0.8-0.2 1.2-1.1 0.7 0 0.3 1 1 0.1 0.9 0.7 1.6-0.9 0.3 0.5-0.2 0.9 1 0.6 0.2-0.8 1.6-1.7 0.5 0.9 1.6 0.3 0.4-0.7 1.5 1.5 0.8 0 0.8 1 0.4-0.7 0.8 0 0.5-0.7 1.1-0.3 1-0.6 0.8 0.5 0.8-0.1 1.7-1 0.6 0.7 1.7 0.2 0.9-0.4 0.5-0.7 2.3 1.2 1.1 1.2 1.1 0.3 2.2 0.9 0.5 0z" id="TX" name="Texas">\n </path>\n <path d="M872.7 546.3l1.5 5.6 0.2 2.4-0.5-0.3-1.7 0.9-0.7 0.1-0.7 0.6-1.3 0.3-0.5 0.5-0.9-0.1-1.4 0.6-3 2-3 2.5-0.6 0.4-1-1 1.7-1.8-0.7-0.8-1.6-8.7 6.1-1.3 7.1-1.7 1-0.2z" id="CT" name="Connecticut">\n </path>\n <path d="M878 531.9l0.4 0.7-0.3 1.7-0.9 0.2-2.6 3-9.6 2.2-1.2-1.4 0.3-1.5-0.5-3.1 0.2-0.5-0.7-2.7 0.3-1.3-0.1-1 0.6-0.9-0.1-1.2 0.3-3.2-0.3-1.6 0.3-0.8 1-0.5 1.1-1.3 0.5-2-1.1-1.4 0.5-2.1-0.3-1.3 0.2-2.8 0.6-0.8 1.3 0.1 0.3-0.7 6.6 19.3 0.4 2 1.7 1.3 0.2 0.9 0.9 0.7z" id="NH" name="New Hampshire">\n </path>\n <path d="M879.9 550.3l-0.6 0.4-0.5-2 0.5 0 0.6 1.6z m-1.6-1.9l-1.1-0.1-0.2 2.1 0.5 1.2-0.3 1.3-0.9 0.2-1.9 1.2-0.2-2.4-1.5-5.6 3.4-1 1.1 2.4 1.1 0.7z" id="RI" name="Rhode Island">\n </path>\n <path d="M865 539.7l-6.7 1.6-2.2-9.2-0.6-0.7-1.1 0 0.2-1.2-1.1-2.9-0.4-0.4 0.1-2 0.3-0.3-0.4-1.5 0-1.3-0.9-1-0.3-0.9-0.1-1.7-0.4-0.4-0.3-1.9 8.4-2.2 6.3-1.8 0.3 1.3-0.5 2.1 1.1 1.4-0.5 2-1.1 1.3-1 0.5-0.3 0.8 0.3 1.6-0.3 3.2 0.1 1.2-0.6 0.9 0.1 1-0.3 1.3 0.7 2.7-0.2 0.5 0.5 3.1-0.3 1.5 1.2 1.4z" id="VT" name="Vermont">\n </path>\n <path d="M764.9 650.2l0.7 2.6 1.6 5.5 4.3 15.1 0.5 1.4 0.4 0.4 0.7 1.8 0.9 1 0.5 1 0.1 1.3 0.8 0.7-1.3 1.6 0.1 1.5-0.6 2.2 0.6 1.5 0.8 1.8-0.3 3.1 0.3 1 0.9 1.1 0.3 1-9.6 1.1-6.3 0.6-10 1-0.2 1.5 1.5 1.7 1 0.8-0.3 1.2 0.3 0.8 0.2 0.4-0.6 1-1 0.6-0.1 0.5-1.9 0.6 0-0.9-1.6-1.1-0.3-0.7 0.3-0.8-0.5-1.3-1.1 0.2-0.4 2.4 0.1 1.4-2.5-0.6-0.4 0.2-2.3-17.5 0.4-17.4 0.5-17.9-1-1.1-0.1-0.2 6.4-0.5 7.5-0.5 10.7-1.1z" id="AL" name="Alabama">\n </path>\n <path d="M824.7 717.6l-0.2 1.6-0.5 0.7-0.4-1.8 1.1-0.5z m-13.1-23.4l0.8 0.2 0.1 2 0.9 1.4 0.1 1 2.3 5.7 1.2 2.2 3.6 5.6 4.1 4.8-1.6 0.3-0.1-1.4-1.1-0.6 1.5 3.8 1 1.7 4.5 6.8 0.7 1.7 2.5 4 0.3 0.1 1.1 1.8 0.7 1.8 0.6 2.6-0.2 0.4 0.3 3.2 0.3 4.8-0.4 0.4 0 1.3-0.5 0.3-0.4 1.5-0.1 1.5 0.5 1.4-0.7 1-0.2 1-1.7 0-1.2 1.4-1.6-0.2-0.5 0.5-1.8 0.6-1.2-1.1 0.1-1.2 0.9 0.5 1.5 0.5 0.1-0.6-0.7-0.6-1.3-0.2-0.6-0.4-2.6-4.2-0.9-0.7-1.9-0.5-1.3 0.1 0.1-0.7-1.7-1.1-0.6-2.3-0.6-1.8-0.7 0.1-1.4-0.7-0.7-1.7-0.1-2.3-1-0.7-0.3 1.7-1.3-0.3-0.9-1-2.5-3.7-0.3-1.3-0.9-0.5-0.2-0.9 0.8-0.4 0.1-1.3 1.3-1.9-0.5-1.4-0.6 0.4-1.3-0.9-0.9-0.2-0.3 1 1.3 0.4 0.2 0.6-0.2 1.6-0.5 0-1.4-1.1-0.5-0.1 0.3-3.4-0.3-1 0.8-3.1-0.2-3.6-0.4-1.8-1.3-1.1-0.4-1.2-0.8-0.6-1.8 0.3-0.8-1.1-0.8-0.2-0.8-1.2-2.1-1.1-0.2-1.6-1.3-0.4-0.9-1.2-1-1-1.2-0.6-0.7-0.1-1.9-1-2.4 0.5-1.1 1 0.6 1.3-1.7 0-1.3 1-0.8 0.8-1.4 0.9-2.4 0.4-1.8 0.6-0.1-1.2-0.7-1-3.5-2.4-0.6-1.4-1.5 0.5-2.1-0.8-3.1-0.6 2-1.1-1.4-0.3-1.2 0.5-0.8-0.1-1.9 0.9-3.6 0.7 1-0.8-0.9-0.7-1.3 0.7-1.6 1.9-0.9-0.2 0.4-1.4-0.6-0.1-0.3-0.8 0.3-1.2-1-0.8-1.5-1.7 0.2-1.5 10-1 6.3-0.6 9.6-1.1 0.7 1.1 0.5 1.5 0.6 0.4 13.1-0.8 13.4-1 0.5 1.7 0.6 0.5 1.2-0.3-0.1-2.5-0.4-0.7-0.1-1 0.6-0.9 0.6-0.2 2.1 0.6 2.1 0z" id="FL" name="Florida">\n </path>\n <path d="M812.7 685.9l-0.4-0.2 0.4-1.4 0.6 0-0.6 1.6z m2.4-8l0.6 0.2-1.1 1.9-1-0.2 0.3 1.2-1.2 1-0.7 1.9-0.3 1.9 0.5 1.1 0.7 0.4-0.9 1.7-0.2 1.4-0.6 0.8-0.1 1.3 0.5 1.7-2.1 0-2.1-0.6-0.6 0.2-0.6 0.9 0.1 1 0.4 0.7 0.1 2.5-1.2 0.3-0.6-0.5-0.5-1.7-13.4 1-13.1 0.8-0.6-0.4-0.5-1.5-0.7-1.1-0.3-1-0.9-1.1-0.3-1 0.3-3.1-0.8-1.8-0.6-1.5 0.6-2.2-0.1-1.5 1.3-1.6-0.8-0.7-0.1-1.3-0.5-1-0.9-1-0.7-1.8-0.4-0.4-0.5-1.4-4.3-15.1-1.6-5.5-0.7-2.6 2.2-0.3 9.9-1.3 11.4-1.7-0.3 0.8-1.2 1.6-0.3 1.3 0.4 0.4 2.1 0.9 1.1 0.9 1.6 0 1.2 1.8 0.4 1.2 1.5 1.4 0.4 0.9 2.2 1.1 1.3 0.9 0.7 1.3 1.6 0.6 1.3 1 0.1 1.2 1 0.4 0.4 1 0.7 0.7 2.5 1 0.4 1.2 0.8 0.8 0.5 1.2 0.2 1.4 2.2 1.3 1.1 2-0.1 1.3 1 1.1 0.6-0.2 1.3 0.5z" id="GA" name="Georgia">\n </path>\n <path d="M740.4 652.5l1 1.1-0.5 17.9-0.4 17.4 2.3 17.5-0.7 0.8-0.9-0.2-1.8 0.1-1.1-0.7-0.9-0.2-0.8 0.8-3.1 1.2-0.9 0.5-0.2 0.9-0.8 0-0.7-0.2-0.5-1-0.6-1.8-1.3-1.2-0.6-1.3 0.9-3.2 0-0.6-9.8 0.6-9.5 0.5 0.8-0.7-0.6-1 0.2-0.7-0.3-0.9 0.9-0.1 0.4-1.5-0.4-1 0.9-0.9 0.2-2 0.6-1.4 0.8-0.3 0.9-1.3 0.6-0.4 0.2-0.8 1.4-3.1-1.9-1.2-0.1-1.2-0.6-0.8 0.1-2.7 0.6-0.8-1-1 0-1.2 0.5-0.4-0.1-1.4-0.8-0.6 0.5-0.7 0-1.2-0.9-0.6 0.5-1.2-0.4-0.8 1.3-1.3 0.1-1.4-0.5-0.7 1.6-0.6 0.2-0.7-0.7-0.7 0.8-0.6 0.4-0.9 2.1-1.8 0.1-1.7-0.3-0.8 0.4-1.2 0.9-0.3-0.1-0.8 1-0.4 0.7-0.8-0.3-0.9 9.9-0.6 10.3-0.8z" id="MS" name="Mississippi">\n </path>\n <path d="M833.7 652.5l-1.6 1.6-1.4 1.9-1.4 2.9-0.2 2.7-1.4 2.4-0.9 0.4-1-0.1 0 1.2-1 1.6-1 0.6-0.2 0.9-1 1.1-1.3 0.6-1.6 1.4-0.7 0.2-1.3-0.5-0.3 0.7 1 0.4 0.5 0.8-0.9 1.2-0.8 0.3-1.4-0.9-0.3 0.5 1.4 1-0.5 0.8-1.3 1.3 0 0.4-1.3-0.5-0.6 0.2-1-1.1 0.1-1.3-1.1-2-2.2-1.3-0.2-1.4-0.5-1.2-0.8-0.8-0.4-1.2-2.5-1-0.7-0.7-0.4-1-1-0.4-0.1-1.2-1.3-1-1.6-0.6-0.7-1.3-1.3-0.9-2.2-1.1-0.4-0.9-1.5-1.4-0.4-1.2-1.2-1.8-1.6 0-1.1-0.9-2.1-0.9-0.4-0.4 0.3-1.3 1.2-1.6 0.3-0.8 2.8-1.3 0.6-0.1 1.6-1.2 2.5-0.9 11.5-1.2 0.6 1 0.9-0.7 1.5 1.5 0.4 1.5 10.2-1.5 0.5 0 4.7 3.4 7.5 5.1z" id="SC" name="South Carolina">\n </path>\n <path d="M736.1 565.3l0.1 2.5 0.7 1.7 0.6 0.4 0.5 1.6 0.8 1.8 0.6 0.6 2.4 27.4-0.7 0.8 0.3 1.1-0.5 0.6 0.8 1.7 0.5 0.4-0.1 1.1 0.6 1.2-0.3 1-0.6 0.4-0.1 1.6-1 0.8 0.1 0.4-0.7 1.3-0.9 0.3-0.3 1.1 0.6 0.5-0.9 1.3 0.2 2.9-0.1 0.6-0.8 1.4 0.9 1.3-0.4 0.6-3.1 1-0.2 1.7 0.8 1.1-0.4 1.1-1.4-0.4-2.6-1-1.3 0.3-1.1 1.8 0.6 0.9-1.2-0.7-0.8 0.4-2-2.8 0.5-1.1 0-0.9-0.8-1.4-0.3-1.6-0.9-0.3-0.8-1.2-1.9-1.2-1.8-0.6-2.3-2.1-0.4-1.1 0.9-2.8 0.6-1.2-0.1-1.2 0.6-1.1-0.6-0.5-2.3-0.9-1.3 1.1-1.1-1.3-0.4-2.3-0.9-1.4-2.2-1.4-0.5-0.9-2.4-1.9-0.9-1.8 0-1-0.5-0.7-0.3-1.9 0.1-1.6 0.5-0.8 0.5-0.2-0.1-2.3 1.7-0.8 0.5-0.6 0.2-1.4 1-1.5 0.1-1.5-0.5-0.8-0.8-0.5-0.1-0.7 0.3-1.5 0.5-0.6 2.5-0.4 0.8-0.7 1.4-0.5 0.8-0.8 0.2-1.6 0.9-0.9 0.4-2.5-0.4-1-2.1-1.4-0.6-1.5-1.7-1.2 0.1-0.2 7.6-0.5 9.1-0.5 7.6-0.6z" id="IL" name="Illinois">\n </path>\n <path d="M762.8 571.7l0.7 4.7 2.9 25.4-0.4 0.4 0.5 0.8-0.3 0.9 0.8 0.2-0.1 1.2-1.6 0.4-1.6 1.1-0.7-0.5-1.6 0.3 0.5 1.9-1 1.3-0.7 0.5-0.3 1.5-1.3 0.4-0.6 1 0 1.7-1 0.9-1.4-0.2-0.9-0.5-0.2-0.8-1.2 0.5-0.8 1.2 0 1-1.9 0.5-0.8-1-1.9 1.4-0.3 1.1-3.3-1.4-1.1 0.5-0.4 0.7-0.7-0.4-1.1 0.3-0.9-0.5 0 1.2-0.4 0.5-0.9-0.1-0.2-2.9 0.9-1.3-0.6-0.5 0.3-1.1 0.9-0.3 0.7-1.3-0.1-0.4 1-0.8 0.1-1.6 0.6-0.4 0.3-1-0.6-1.2 0.1-1.1-0.5-0.4-0.8-1.7 0.5-0.6-0.3-1.1 0.7-0.8-2.4-27.4 0.9 0.8 1.2 0.2 2.2-0.9 1.5-1 4.9-0.5 12.7-1.5 0 0.7z" id="IN" name="Indiana">\n </path>\n <path d="M787.5 606.8l0.5 2-0.4 1.2 3.9 4.8 1.1 0.6 0.7 0.6 1.4 0.1-3 3.5-2.4 1.7-0.6 0.7-0.1 0.9-1 1-0.2 0.9-1.7 0.9-0.4 1.1-0.9 0.3-1.5 0.9-0.9 0.2-1.3 1-0.6 0.2-12.9 1.2-2.9 0.5-5.9 0.4-3.7 0.1-0.8 0.2-11.9 1.3-0.4-0.3-1.9-0.1 0.5 2.2-12.9 1.1 0.5-1.7 1 0.7 0.4-0.4 0.5-1.6-0.2-1.3 0.2-1.5-0.6-0.9 1.1-1.8 1.3-0.3 2.6 1 1.4 0.4 0.4-1.1-0.8-1.1 0.2-1.7 3.1-1 0.4-0.6-0.9-1.3 0.8-1.4 0.1-0.6 0.9 0.1 0.4-0.5 0-1.2 0.9 0.5 1.1-0.3 0.7 0.4 0.4-0.7 1.1-0.5 3.3 1.4 0.3-1.1 1.9-1.4 0.8 1 1.9-0.5 0-1 0.8-1.2 1.2-0.5 0.2 0.8 0.9 0.5 1.4 0.2 1-0.9 0-1.7 0.6-1 1.3-0.4 0.3-1.5 0.7-0.5 1-1.3-0.5-1.9 1.6-0.3 0.7 0.5 1.6-1.1 1.6-0.4 0.1-1.2-0.8-0.2 0.3-0.9-0.5-0.8 0.4-0.4 0.9-0.7 0.8 0.7 1.7-0.5 1.2 0.7 1.5 2.4 1 0.2 1-0.3 1 0.2 1.5 1.3 0.6-0.1 1-1 1.5 0.4 0.7 0.6 1.5-0.5 0.8-1.2 1.2-0.5 0.8 1.7 1.3 0.4 1.1 1.2z" id="KY" name="Kentucky">\n </path>\n <path d="M851.2 617.1l0.4-0.1 0.2 0 0.3-0.1-0.4 0.7-0.5-0.5z m-0.2 0.1l0.4 0.9 1 0.5 1.2 2.6-1.6 0-1.4 1.4-1.9 0.6-0.9 1.1-1.6-0.2-0.1 1.3 1.6-0.2 0.7-0.6 0.9 0.2 1.6-1 1.4-0.2-0.1 1.5 0.5 1 0.7 0.3-0.3-1.8 1-1.3 1.6 1.4 0.3 1.5-0.1 1-1.2 0.7-1.8 3.2-1.1 0.2-1.7-0.3-1.4 0.4-0.8 0.7 1.9 0.1 0.3 0.9-1.5 0.9 1.1 0.5-1.6 1.9 0.2 0.9 1-1.1 0.8-0.3 1.7 0 0.5 0.7-1.2 1.8-0.7 0-0.6 0.8-2.3 0.3-2.7 1.6-0.3 0.8-2.4 2-1 1.3-1.2 2.2-0.2 1.1 0.1 1.9-1 1-2.2 0.1-2.9 1-7.5-5.1-4.7-3.4-0.5 0-10.2 1.5-0.4-1.5-1.5-1.5-0.9 0.7-0.6-1-11.5 1.2-2.5 0.9-1.6 1.2-0.6 0.1-2.8 1.3-11.4 1.7-0.1-2.5 0.3-0.6 1.6-0.3 0.4-0.5 0.1-1.5 1.1-1.2 1.3-0.8 2.2-0.3 2.1-2.1 1.5-1 0.9-0.1 0.7-2.1 0.6 0.2 0.3-0.9 1.2-0.8 0.6 0.9 0.8-0.4 0.7-1.3 1.7-1 1.2 0.5 0.5-0.5 0.6-1.9 1.5-1.6 0.1-1.4 0.3-1.1 0.4 0.2 3.7-0.3 5.1-0.8 5.4-0.7 11.6-2.1 8.5-1.7 17.1-3.7z" id="NC" name="North Carolina">\n </path>\n <path d="M801.8 578.3l-1.3 0.9 0.9 1.3-0.1 0.7 0.4 0.9-0.4 0.9-0.3 2.4 0.1 1.5-0.5 1.7 0 1.9-1.4 1.4-0.5 1-0.7 0.8-1.4 0.6-0.9-0.3-0.6 1.4-1 0.4-0.4 1 0.2 3-0.6 0.3-1.6-1-0.4 0.3-1 2.7 0.5 2.2-0.6 0-0.4 1.9-1.5 0.6-0.8 0-1.1-1.2-1.3-0.4-0.8-1.7-1.2 0.5-0.8 1.2-1.5 0.5-0.7-0.6-1.5-0.4-1 1-0.6 0.1-1.5-1.3-1-0.2-1 0.3-1-0.2-1.5-2.4-1.2-0.7-1.7 0.5-0.8-0.7-0.9 0.7-2.9-25.4-0.7-4.7 4.4-0.6 7.1-1.3 1.4 0.1 0.9 0.6 1.1 0.1 1.8 2 0.8-0.6 1.8-0.1 1.1 0.6 2.1-1 1.7-1 1.4 0.1 1.7-0.7 2.4-2.8 2.6-1.8 4-2.3 2.7 15.3z" id="OH" name="Ohio">\n </path>\n <path d="M780.7 629.2l7.7-1.1 8.1-1.2 0.4-0.3 2.3-0.3-0.3 1.1-0.1 1.4-1.5 1.6-0.6 1.9-0.5 0.5-1.2-0.5-1.7 1-0.7 1.3-0.8 0.4-0.6-0.9-1.2 0.8-0.3 0.9-0.6-0.2-0.7 2.1-0.9 0.1-1.5 1-2.1 2.1-2.2 0.3-1.3 0.8-1.1 1.2-0.1 1.5-0.4 0.5-1.6 0.3-0.3 0.6 0.1 2.5-9.9 1.3-2.2 0.3-10.7 1.1-7.5 0.5-6.4 0.5 0.1 0.2-10.3 0.8-9.9 0.6 0.7-0.6 0.4-0.9 0.8-0.8-0.3-1 0-1.3 0.7-0.8 0-0.7 0.9-0.5 0-1.2-0.3-0.9 1.9-1.3-0.4-0.9 0.9-0.1-0.6-0.9 0.4-1.3 0.5-0.5-0.8-1.1 1-0.2-0.5-0.8 0.9-0.7-0.4-1.4 0.6 0 0.7 0 12.9-1.1-0.5-2.2 1.9 0.1 0.4 0.3 11.9-1.3 0.8-0.2 3.7-0.1 5.9-0.4 2.9-0.5 12.9-1.2 0.6-0.2z" id="TN" name="Tennessee">\n </path>\n <path d="M850.8 600.3l0.2-0.4 2.1-0.7-0.3 0.7 0.3 1-0.5 0.6-2 5-0.4 1.2-0.1 2.7-0.8-1.3-0.1-0.7 0.5-3-0.4-0.5 0.9-1.6-0.3-0.8 0.7-0.6 0.2-1.6z m-21.8-11.5l1.6 0 0.9 0.5 0.1 1.4 0.7 0.4 1.4 0.1 0.5 0.6 1.1 0.4 0.6 0.2 0.4 0.4 0.2 1.7-0.6 0.3 0 0.8-0.9-0.1-0.4 2.6 0.6 1.1 0.4 0.1 2-0.9 0 0.7 0.9 1 0.8 0.2 2.4-0.2 1.1 1.3 2.8 0.8 0.2 0.9-0.4 1.2 0 1.2-0.8 0.3 1 1 1.2 0.6-0.5 0.8-0.9 0 0.6 1.4-0.6 0.9 1.7 0.4 0.3 1.5-1.1 0.7-0.3-0.6-1.7-0.7-0.3-0.9-2.5-0.2 1.8 1 0.7 1.1 0.9 0 1.1 1.2 1.5-0.1 0.3-0.9 1.4 0.2 1.3-0.2 0.5 1.1 1.6 2.7-0.2 0.1-0.9-1.7-0.3 0 0.4 1.8-0.4 0.1-0.2 0.1-17.1 3.7-8.5 1.7-11.6 2.1-5.4 0.7-5.1 0.8-3.7 0.3-0.4-0.2-2.3 0.3-0.4 0.3-8.1 1.2-7.7 1.1 1.3-1 0.9-0.2 1.5-0.9 0.9-0.3 0.4-1.1 1.7-0.9 0.2-0.9 1-1 0.1-0.9 0.6-0.7 2.4-1.7 3-3.5 0.1 0.9 0.5 0.9 1.2 0.9 1.8 0.6 0.9-0.2 1.6-1.6 1.2 0.8 0.8-0.5 1.7-0.5 0.6-0.7 0-0.9 1.2 0.2 1.7-1.2 0.7 0.3 1.3-1.2-0.2-0.7 0.6-0.5-0.7-0.8 0.5-1.6 1.5-2.5 0.4-2.1 0.9-1.4 0.5-2 0.2-1.8 0.8 0.1 0.6 1 2 0.2 0.7-1.2 0.2-1.5 1-2.6 1.2 0.4 0.8-1.8 0.7-0.2 1.6-3-0.1-1.3 0.3-2.2 5 2.7 0.5-2.3z" id="VA" name="Virginia">\n </path>\n <path d="M739.4 532.1l0 1.4-0.8 2.3-0.3 1.3-0.4 0.7-0.7-0.2-0.4-0.9 1.2-3.1 0.7-0.3 0.7-1.2z m-28.5-12.9l0.1 0.4 1.4 0.4 1 1.9 8.2 1.7 2.4 1.2 1.6 0.1 0.8-0.2 3 0.5 0.6 0.4 0.5 1.5 1.3 0.2 1 0.8 0.1 2.4-0.5 1.3 1.9 0-0.4 1.4 0 0.7 1.1 0.8-0.2 1.2-1.4 0.8-0.1 0.7-0.9 1.9-0.4 2 1.1-0.4 1-0.8 0.8-1.9 1.6-1 1.1 0.8-0.2 1.4-0.8 2-0.3 2.5 0.6 1.1-1.1 1.5-0.5 2.1 0 1.2 0.4 1.3-0.6 1.5 0 1.4-0.7 2.4 0.5 1.9-0.1 0.7 0.5 0.9 0.1 0.9 0.6 0.7-0.1 1.9 0.2 1.9-7.6 0.6-9.1 0.5-7.6 0.5 0.1-0.4-0.7-1.3-2.3-0.4-0.7-0.4-0.8-2-0.5-2.8 0.6-1.5-0.2-0.7-0.8-0.2-0.5-1.6-0.2-3.1-0.5-1.7-1.1-1.2-1-0.4-1-0.1-1.5-1.2-1.1-1.7-1.3-1.1-1.4-0.3-1.1-1.3-1.6-0.3-2-1.7 0.4-1.9-0.4-1.8 0.3-2.6 0.7-1.7-0.8-1.3-1.1-0.2 0-1.6 0.7-0.8 0.7-1.6 2.7-1.4 0.5-0.7-0.2-6.8 0.6-0.2 0.8-1.1 1.2 0.8 1.4-0.2 2.9-1.2 1.5-1.1 0.8 0.2 1.2-1.1 1-0.2 0.7 0.7-0.7 1.2-0.2 2.4 1.3-1.1 1.4 0.8 1.3 0.2z" id="WI" name="Wisconsin">\n </path>\n <path d="M812.8 587.3l0.9 5.9 2.4-2.6 0.8-1.2 0.9 0.2 1.3-2.5 0.4 0.7 1.6 0.2 0.9-0.2 0.1-1.1 1.4-0.4 0.4-0.8 0.7-0.2 1.7 0.8 0.7-0.3 0.4 1.1 0.7 0.2 0.9 1.7-0.5 2.3-5-2.7-0.3 2.2 0.1 1.3-1.6 3-0.7 0.2-0.8 1.8-1.2-0.4-1 2.6-0.2 1.5-0.7 1.2-2-0.2-0.6-1-0.8-0.1-0.2 1.8-0.5 2-0.9 1.4-0.4 2.1-1.5 2.5-0.5 1.6 0.7 0.8-0.6 0.5 0.2 0.7-1.3 1.2-0.7-0.3-1.7 1.2-1.2-0.2 0 0.9-0.6 0.7-1.7 0.5-0.8 0.5-1.2-0.8-1.6 1.6-0.9 0.2-1.8-0.6-1.2-0.9-0.5-0.9-0.1-0.9-1.4-0.1-0.7-0.6-1.1-0.6-3.9-4.8 0.4-1.2-0.5-2 0.8 0 1.5-0.6 0.4-1.9 0.6 0-0.5-2.2 1-2.7 0.4-0.3 1.6 1 0.6-0.3-0.2-3 0.4-1 1-0.4 0.6-1.4 0.9 0.3 1.4-0.6 0.7-0.8 0.5-1 1.4-1.4 0-1.9 0.5-1.7-0.1-1.5 0.3-2.4 0.4-0.9-0.4-0.9 0.1-0.7-0.9-1.3 1.3-0.9 1.8 10.6 9.2-1.6z" id="WV" name="West Virginia">\n </path>\n <path d="M848 579l-1.1 2.5 0.7 0.7-0.1 1 1.7 1.4 0.6 0.9 0.5 1.9 0.8 0.7 0.2 0.6 1.6 1.2 0.8-0.2 0.4 1.3-0.3 1.2 0.7 0.2 0.4 1.1-0.1 0.1-0.2 0-5.4 1.2-3.9-13.3-0.2-0.8 0.3-0.8 1-0.9 1.6 0z" id="DE" name="Delaware">\n </path>\n <path d="M836.5 593.5l-0.1-0.6-0.1-0.1-0.4-0.4-0.6-0.2 0.6-0.9 1.4 0.9-0.8 1.3z" id="DC" name="District of Columbia">\n </path>\n <path d="M845.1 580.7l0.2 0.8 3.9 13.3 5.4-1.2-0.1 2.6-0.7 0.3-0.2 1.4-0.5 1.3-2.1 0.7-0.2 0.4-2.2 0.2 0.3-1.8-1.2 0 0.6-0.9-0.6-0.4-1 0.5-1.9-0.7-1.2-1.3 1-2.5-0.9-0.4-1 0 0.1-1.1 0.9 0 0.3-1.1-1-0.5 0.7-0.8-0.1-1.3-1.3-0.1 0.4-2.1 1.1-1.1-0.5-0.8-1 1.4-1.8 0.9 0.4 0.6-0.3 0.9 0.9 2-0.7 0.5 0.4 0.8-0.5 1.7 0.4 0.5 0.6 2.2 1.4 1.4-0.1 0.8 0.6 1 0.8 0.9-1 0.3-1.9-0.7-1.2 0.2-1.7-0.4-1.3-1.7-1.3 1.4-0.6-0.2-0.3-1.1 0.4-1.5 0.6-0.3 0.5-1-0.1-1.2 0.8-1.3-1.4-0.9-0.6 0.9-1.1-0.4-0.5-0.6-1.4-0.1-0.7-0.4-0.1-1.4-0.9-0.5-1.6 0-0.9-1.7-0.7-0.2-0.4-1.1-0.7 0.3-1.7-0.8-0.7 0.2-0.4 0.8-1.4 0.4-0.1 1.1-0.9 0.2-1.6-0.2-0.4-0.7-1.3 2.5-0.9-0.2-0.8 1.2-2.4 2.6-0.9-5.9 9.1-1.7 8.1-1.7 10.1-2.1 5-1.1z" id="MD" name="Maryland">\n </path>\n <path d="M851 575.8l2-2.5-3.6-2.4-0.4-1.1-0.9 0-0.5-2.1 0.6-0.6 0.1-1.1-0.9-0.9 0.8-1 0.8-1.8 0.1-1.1 1-1.2 7.8 2.5 0.1 0.6 0 0-0.4 2.7-0.4 0.8-0.5 0.1-0.4 0.4-0.3 1.7 0.9 0.5 1.5-0.2 0.8 1 0.1 3.7-0.4 0.1 0.3 1.9-0.3 1.3 0.3 0.5-1.2 2.1-0.9 2.2-0.3 1.4-0.4 1-0.4 1.8-0.9 1.5-0.8 0.3 0.2-2.5-1.4-0.5-1.2 0.4-1-0.9-1.1-0.2-1.9-1.3-0.2-2 0.3-1.6 0.9-1 1.4-0.7 0.7-1.8z" id="NJ" name="New Jersey">\n </path>\n <path d="M857.5 566.8l-0.1 1-0.9 0.1 0.1-1 0.9-0.1z m14.1-9.6l-1.2 1.2 0.6 0.6 0.8-0.3 0.8-0.8 0.5 0.5 1.1-1.1 0.4 0.3-3.6 3-1.5 1.2-1 0.2-1.7 1.2-2.4 0.9-1 0.9-1.6 0.7-1.1 0.9-1.2-0.4-1.1 1.2-0.6-0.7 0.6-2 1.2-0.5 0.2-0.7 1.6-1 0.2-0.4 2.3-0.2 0.8-1 2.8-0.6 1.5-0.7 1.7-2.3 0.9-0.1z m-31.4-38.5l10.9-2.8 0.3 1.9 0.4 0.4 0.1 1.7 0.3 0.9 0.9 1 0 1.3 0.4 1.5-0.3 0.3-0.1 2 0.4 0.4 1.1 2.9-0.2 1.2 1.1 0 0.6 0.7 2.2 9.2-0.1 8 0.3 0.2 1.6 8.7 0.7 0.8-1.7 1.8 1 1-1 2.2-0.9 0.6-0.2-1.5-0.1-0.6-7.8-2.5-0.6-0.8-1.2 0.1-1.1-0.5-0.8-1-0.4-1.9-0.3-0.5-2.7-1.4-10.6 2.3-12.7 2.7-6.9 1.3-7.3 1.4-0.5-3.1 2.2-2.1 0.7-1.1 1.6-1.4 0.7-1.7 0.9-0.6 0.2-1.1-0.9-1.5 0-1.1-1.3-0.1-0.3-2 2.9-1.5 2.5-0.9 1.3-0.1 0.9-0.4 3.1 0 1.2 0.6 0.8 0.1 1.3-0.8 3.2-0.5 2.1-1.1 0.3-0.8 1.7-2 1.4-0.3 0.3-1.7-1.4-2.2 1-0.6-0.2-1.5-1.3 0-0.8-0.6 1.2-1.4 0.9-0.7 1.9-2.6-0.3-0.5 0.5-1.1 2.7-4 1-1 1.9-1.5 1.3-0.1z" id="NY" name="New York">\n </path>\n <path d="M850.1 560l-1 1.2-0.1 1.1-0.8 1.8-0.8 1 0.9 0.9-0.1 1.1-0.6 0.6 0.5 2.1 0.9 0 0.4 1.1 3.6 2.4-2 2.5-0.8 0.7 0 0.8-2 1.2-0.2 0.5-1.6 0-1 0.9-0.3 0.8-5 1.1-10.1 2.1-8.1 1.7-9.1 1.7-9.2 1.6-1.8-10.6-2.7-15.3 1.2-0.7 3.7-3.1 1-0.6 0.5 3.1 7.3-1.4 6.9-1.3 12.7-2.7 10.6-2.3 2.7 1.4 0.3 0.5 0.4 1.9 0.8 1 1.1 0.5 1.2-0.1 0.6 0.8z" id="PA" name="Pennsylvania">\n </path>\n <path d="M894.5 512l-1.6 1.1-0.3-0.4 0.2-1.6 0.6-0.4 1 0.7 0.1 0.6z m-2.1-17.2l0 0.7 1.8 0.6 1.6-0.5 0.4 0.8-0.4 0.6 0.9 1 0 1.3 1.4 1 0.7-0.7 0.7 0.1 1.7 2.5 1.1 1-1.3 2.6-0.8 0.1-0.5 0.8-1.2-0.1 0.1 1.1-1.9 0.3-0.2 2-0.8 0.8-0.7 0.1-0.4-1-1.3 0.3-2 1.7 0.6 1.1-0.8 0.2-1.1-0.1-1.1-1.5-1.1 1.1 0.6 0.7-0.2 0.7-0.1 3.2-0.3 1.1-0.5 0.4-1.2-0.7-0.4 0.4 0 1.4-0.9-0.4-0.5 0.6-0.6 2.2-0.6-0.1-1.4-0.9-0.8 1-0.7 1.5 0.7 1.4-1.1 0.8 0.2 1.5-0.9 1-0.4 3-0.7 0.4-0.9-0.7-0.2-0.9-1.7-1.3-0.4-2-6.6-19.3 1-0.6 1 0-0.3-1 0.7-1.1-0.1-1.2 0.5-1.1 1.2-1.4-0.3-0.6 0.8-1.8-0.7-0.8-0.2-0.8 0.3-0.9-0.5-0.7 0.3-1.9 0.6-1-0.4-3.3 3.2-10 0.3-0.3 1.4 0.1 0.4 1.4 1.5 0.8 1-0.9 0.8-0.4 0.6-0.8 1.2-0.4 0.4-1 0.9 0.1 2.3 1 1.8 1.5 4 11.9 0.5 1.5 0 0.8z" id="ME" name="Maine">\n </path>\n <path d="M751.3 527.2l-0.7-0.1 0.3-1.6 0.8 1.3-0.4 0.4z m29.8 26.5l-0.2 2.4 0.1 2-0.5 0.9-0.5 0.3-0.1-1.3-0.7-0.3-0.8 0.9-0.3 0.9 0.1 1.9-1.2 0.9-0.2 0.4-0.1 0.1-0.3 0.4-0.1 0.4-0.3 2.9-0.4 0.2-1 2.1-0.3 1-7.1 1.3-4.4 0.6 0-0.7-12.7 1.5-4.9 0.5 1-0.9 0.8-1.4 0.8-2.3 0.8-1.6 0.6-2.6 0.2-2.8-0.4-2.9-0.6-1.6-2.5-4.9-0.4-0.9 0.1-0.9 0.6-1.1-0.3-2-0.7-1.4 0.8-1 0.9-2.6 0-2.4-0.4-1.2 0.3-0.5 1-0.3 0.1-2.1 1-0.8 0.7 0.3 0.6-1.4 1.2-1.1 0.3 0.9-0.4 2.5 0.6 0.3 0.3-2.1 0.9 0.7 0.2-2-0.4-1.5 0.4-1.1 1.3-0.8 1-0.2 0.1-0.7-0.8-0.9 0.1-1.3 0.9-1.3 1.3-0.9 2.8 1.1 1.1-0.1 0.8 0.2 1.3 1.5 1.2-0.1 0.9 0.5 1.5 0.5 1.4 0.1 1.1 0.8-0.1 0.5 0.8 0.8 0.3 0.7-1.1 0.5-0.1 0.9 1.2 1 0.7 2.2-0.1 0.9 0.3 2.5-0.1 1-1.4 0.9-0.2 2.4-0.7 0.8-1.1 0.2-0.6 1.5 0.1 1.8 0.3 0.5 2 0.6 1-1.5 0.5 0.2 0.6-1.9 0.8-1.5 1.4-0.7 1.3-0.8 1 0.3 1.2 1.1 0.6 1.2 1 3.2 0.4 0.9 0.5 1.9 0.7 2 0.6 0.9z m-14.5-34l0.8 0.8-0.6 0.9-2.2-0.2 1-1-0.1-0.8 1.1 0.3z m-8.1-3.5l0.5-0.7 1 0 0.8-0.6 0.7 0.1-0.3 1.2 0.6 0.9-1 0 0.4 1.2-0.4 0.5 1.9 0.5-0.1 0.7 1.4 1.1-0.9 0.4-3.6-0.2-1.7-0.2-0.4 1.2 0.1 1.2-0.8-0.2-1.8-1.5-2.7-0.7-1.6 0.3-0.8 1.5-3.4 0.5-1.4 0.3-0.8 1.9-1.1 0.6-0.7 1.4-0.7-0.2 0.5-1.4-1-0.8-0.8 1.7-1 0.4-0.1-1-0.6-0.3-0.2 1.4-0.6 0.4-0.7 1.6-0.4 1.4-1.5 2.9-0.3 1-1.1-0.8 0-0.7 0.4-1.4-1.9 0 0.5-1.3-0.1-2.4-1-0.8-1.3-0.2-0.5-1.5-0.6-0.4-3-0.5-0.8 0.2-1.6-0.1-2.4-1.2-8.2-1.7-1-1.9-1.4-0.4-0.1-0.4 3-1.5 1.7-1.7 3.2-0.6 1.3-0.9 0.7-0.9 1.3-0.3 0.5-1.1 1.5-1.5 0.5 0.9 0.8 0.2 0.9 1.6-0.2 1.6 0.8-0.1 1.1-1.2 3.5 0.2 1.4 0.8 0.4 0.7 2.2 2.7 1 0.1 1.2-0.6 0.8-0.1 0.8 0.9 1-0.6 1.1 0.6 1-1.4 1.6-1 1-0.9 0.4 0.1 1.8-0.6 2.8 0 2.4-1.4 1.3-0.1 0.3 0.5-0.1 2.3 1.9 0.6 1.4-0.6 0.8 0.8 0.5-0.5z m-27-8.5l-1.3 0.4-2.5 2.8-1.3 2.4-0.8-1.6-0.9-0.2 0-1 1.3-1.7 1.7-1 1.2-0.5 1.8-0.2 0.8 0.6z m-6.9-8.2l-0.5 1.3-0.7 0.7-2 1-0.1 0.6-1.3 0.8-0.7-0.9 0.7-0.7 2.2-1.3 1.5-1.1 0.9-0.4z" id="MI" name="Michigan">\n </path>\n <path d="M123.3 185.8l0.3 1.8-0.3 1.5-0.5-0.1 0.4-1.5-0.6-1.5 0.7-0.2z m23.9 27.1l0.2 0.6-0.8 0.5-0.5-0.6 1.1-0.5z m-6.7-8.7l-0.2 0.8-1.1 0.5-1.3-0.4 0.9-0.6 0.2-2.6 0.7 0.1 1 1-0.2 1.2z m2.1 5l-1.1-0.4-0.1-1 1.6 0.3 1.3-0.7 0.3 0.9-1.2 0.2-0.8 0.7z m4.8 1.6l-1.3 0.3 0.3 1-0.8 0.5-0.9 0.1-1.9-2.1 0.9 0.1 0.5-0.7 1 0.5 1-0.8 1.2 1.1z m-17.9-21.3l-0.4-1.3 0.5-0.5 1.3 0.5 0 1.3-1.4 0z m21.2 23.9l-0.9 0.3-0.2-1 0.9-0.7 0.6 0.5-0.4 0.9z m-29.2-37.1l-1.7-0.8 0.7-0.4 0.8 0.7 1.6-0.4 0.2 0.7-1.6 0.2z m41.7 49.7l0.1 0.8 0.9 1.7-1.7-1-0.1-0.6-1.3-1.4 0.6-0.6 1.5 1.1z m7.2 5.5l-1.1-0.5-0.5-0.6 1.2-0.3 1 0.2 0.2 1.2-0.8 0z m-7.5-10.4l-0.2 1.4-1.2 0.1-0.8 0.6-1.1-0.3-0.5-1-0.9-0.2-1.6-0.9-0.8-1.8 1.8 0.9 0.3 0.8 0.9-0.3 1.3 1.1 1.1 0 0.3-1.4 1.3 0.5 0.1 0.5z m-52-71.2l-1.8-0.5-0.8-1.2 1.9 0.7 0.7 1z m71 88.7l-1-1.3 1.5 0.1 0.3 0.8-0.8 0.4z m6.6 2l0.2 0.8-1 0.3-0.3-1 1.1-0.1z m-76-99.4l-0.1 0.6 0.9 0.8 0 1.5-0.7 0.5-1.1-0.3 0-0.8-1.4-0.4 0.3-0.6-0.6-0.8 1.2-0.3-0.9-0.9 1.5-0.8 0.9 1.5z m90.7 102.9l0.5 1.6-1.3 0.7-2.4-0.5-1-0.5-2.8 0.7-0.5-0.4-1.5-0.3-0.1-1 1.1-0.1 0.9-0.9 1.6 0.1 1.1 1.3 1-1.4 0.6-0.3 1.6 0.2 1.2 0.8z m12 7.3l-1.7 0.3 0.1-0.8 1.2 0.1 0.4 0.4z m-2.2-4.4l0.8 0.6-1.1 0.8 1.1 0.7 1.6 0.2-0.4 0.9-0.8-0.4-1 0.3-0.6-0.4 0.4 2.1-2-0.8-1.6 0.5-1-0.1-0.3-0.8-3.7-1.5-1.2 0.1-1.1-0.6-0.3-1.5 1.2 0 0.6 0.7 1.1 0.1 0.6 1 0.7-0.4 0.7 0.7 1.2-1.3 1.9 0.3 0 0.7 0.9 0.2-0.5-1.5-0.5-0.2 0.2-1.5 1.6-0.2 1.5 1.3z m6.1 2.6l0.6 1.4-2.6-1 0.3-1.2 0.8-0.3 0.8 0.2 0.1 0.9z m2.6 0.9l-0.2 1-1.5 0 0.6-1.5 1.1 0.5z m16.5 12.3l-1.1 0 0.4-1.4 0.7 1.4z m178.5 107.5l0.6 0.7-0.9 1-0.2-1.7 0.5 0z m-173.5-109.5l-0.5-0.5 0.4-1 1 0.2-0.1 0.9-0.8 0.4z m183.3 112.9l-0.1 0.9-1 0.1-0.3-1.3 1.4 0.3z m-189.3-121.7l1 0.9-0.5 2-0.7 1.3 0.1 0.6 0.9 0.7-1.2 0.3 0-1.4-1 0.5-1.6-0.3-0.6-1-1.9-1.5-1.7-0.2-1.2 0.5-1.7-0.8-0.7-1.2 0.8-1.9 2.1 0.4 2.4-1.1 1.2 0.3 0.1 0.7 1.4 0.2 0.6 0.4 1.2 0 1 0.6z m11.3 8.5l0 0.9-0.9-0.1-0.2-1.4 1.1 0.6z m169 106.8l0.2 1.7-1.1 0 0.4-1.8 0.5 0.1z m-1.6-0.9l0.1 0.9-0.5 2.1 0.5 1.9 0 1.4-0.6 0.3-0.9-3.1 0.2-0.8-0.2-2.1 1.3-1.5 0.1 0.9z m10.6 5.3l-0.3 0.8-1.9-0.3 1.2-1.3-0.1-0.9 0.7-0.4 0.6 1-0.2 1.1z m-168-103.5l0.2 0.8-1.7 0.4 0.2-0.7 1.3-0.5z m156.6 96.1l0.2 0.8-0.9 0.5-0.8-0.7 0.5-0.9 1 0.3z m-157.8-99.2l-0.5 0.7-0.7-1 0.4-0.4 0.8 0.7z m-2.2-1.2l0.8 0.4-0.7 0.9-1.1-0.1-0.6-1 0.9-1.2 0.9-0.2 0.4 0.8-0.6 0.4z m169.8 103.3l0.6 1.8-1.4 1.5-0.2-0.8 0.2-1.3 0.8-1.2z m-11.1-4.8l0.6 0.3-1.9 1.4 0.5-1.4 0.8-0.3z m1.8-4.4l1.6 1.1-1.9 0.3-0.4-1.4 0.7 0z m-129.5-76.3l-0.9-0.5 0.3-0.7 1.2-0.3 0.5 0.3-1.1 1.2z m145.1 81.1l0.4 3.4-1.2 3.2-1.4 1.5-1.2 0.6-1.4-2.3-0.9-0.8-0.3-1.8 1.4-0.5 0-1 0.5-1.2 0.6-0.1 0.1-1 0.9-0.5 2.1 0.1 0.4 0.4z m-12.7-8.2l0.3 0.9-0.4 1-1.1-0.5-1.5 0.7-0.9-0.7 1.4-1.1 2.2-0.3z m5.9 2.1l0.8 0.1 0.9 0.9 0.3 1-0.7 0.4-0.3 1.4-1.2-0.2-0.6-0.9 0.4-1.2-1.3-0.4-0.1-0.8 0.7-1.2 0.5 0.1 1-1 0.8 0.5-0.5 1.1-0.7 0.2z m-6.2-4.8l1.7 1.3 0.8 0.1 0.3 1.4-1 2 1 0.3 0.8 1.2 0.7 3.2-0.5 1.3 0.6 0.6-0.1 1.3-0.9-0.5 0.9 3.9 0.6 0.4-0.3 1.1-0.8 1.5-0.9 2.9-0.8 0.9-0.9-0.4-0.7-1 0.6-1-0.6-1.4-0.9-0.7 1.2-1.5-0.6-0.4-0.8-1.2 0.1-0.5-0.7-1-1.6-0.7-0.1-0.8 0.8-0.3 0.8 0.8 0.3-1-0.2-1 1-1.2-1.4 0-0.5-0.7 0.3-1.1 2-0.6-0.2-1.1 1-3.2-0.9-0.3-0.9-1.1 0.8-1.5z m6.4 1.6l-0.8 1.8-1.6-0.2-0.6-1.8 1.2-0.7 1.8 0.9z m2.6 2.3l0.8 0.5-0.2 1.9-1.2 0.4-1-2.5 0.4-0.5 0.6-1.8 0.5 0.7 0.1 1.3z m-129-77.5l-3 0.9-0.1-0.6 1.2-0.6 1.9 0.3z m2 1.5l-0.4 0.5-1 0-0.3-1.1 1 0 0.7 0.6z m-78.8-70.2l1 1.6-1.1-0.4 0.1-1.2z m203.4 139.2l1.2 3.2-0.5 0.3-1.6 0.2-0.8-0.7 0.2-0.8 0.6-0.3 0.4-1.5 0.5-0.4z m-6.5-3.7l0.1 0.7 0.6 0.8-0.3 2.2-1-0.2-0.7 1.7-1 0.6-0.5 0.7 0.2 1-1 1.3-0.4-0.6-1.4 0.2 0.5-1 0.1-1.2 0.5-0.4 0-1 1.2 0.1 0.7-0.8-0.7-1.4 0.3-0.5-0.4-1.1 0.5-2 1.8-0.2 0.9 1.1z m2.4-1.8l1.9 1.9 1.8 0.8 0.4 1 0 0.9-0.6 0.5-0.5 2.1-2.2 1.4-1.2-0.7-1.3-0.1-0.7-0.6 0.8-1.4 0-0.9 0.8-1.9-0.6-0.6 0.2-0.8-0.6-1.6 1.1-0.4 0.7 0.4z m-111.5-65.6l1.3 0.9-1.5 0.3-1.6-0.2-0.1-0.9 1.7-0.7 0.2 0.6z m-84.2-75.1l-1.3 0.2-0.1-1.2 1.4 1z m185.6 133.9l-0.4 1.2-1.2 1.2-1.4-0.3 0.6-1 0.6-0.2 0.2-1.7 0.5-0.9 0.6 0.3 0.5 1.4z m2-1.9l0.9 0 0.9 0.6 0.7 2.1-0.5 0.1 0.3 1.9-0.4 2.3-0.6 1.7-0.1 1.6-0.9 1.9-1.3 2.4-0.3 0.9-0.9 0.1-0.3-1.6 0-2.8 0.5-2.6-0.9-1.5 0.8-0.5 0-1 0.7-0.8-0.1-1.5 1-0.8-1.3-0.4-0.3-1.7 1.7-0.8 0.1-0.5 1.1-0.1 0.3 0.7-1.1 0.3z m-98.6-64.3l-0.6 0.6-0.6-2.2 0.7-0.1 0.5 1.7z m1.6 0.6l0.8 0.5-0.3 0.9 0.3 0.6 1.1-0.5 0.8 0.7 0.2 1.4-1.1 0.1-0.8 1.1 1.4 1.5-1.7 0.6-0.5 0.5-1.4-1-0.6 0.7-1.1 0.6-1.7-0.8-1-0.2-0.7-0.8-2 0.4-0.3-0.4-1.2 0.7 0 0.6-1.3 0.1-0.4 0.6-0.8-0.4-1.4 0.5-0.6-1.1 2.7-0.9-0.3-0.5-0.9-0.2 0.8-1 0.4-0.9-1.3-1-1-0.2 0.2 1.1 1.1-0.2 0.8 0.5-1.3 1.4-1 0.4-0.3-1.3-0.5-0.8 1.3-1.8 0.2-1.1-0.4-1.7 2.4-1 1.2 0.1 1.8-0.1 0.9 0.9-0.3 1.7-0.7 1.4 0.5 0.3 0.8-1 0.6-0.3 0.4-1.2-0.1-1.1 0.6-0.8 1.7-0.1 0.4 1.2-0.7 1 1.7 0.1 0.8 0.7 0.9-1.4 0.9 0.9z m94.5 54.8l-1.3 0.6 0-1.2 0.9-0.7 0.4 1.3z m-94.3-57.3l0.5 0.4-0.3 1.4-0.8-1.5-0.7-0.8 1.2-0.3 0.1 0.8z m99.1 56.6l0.5 0.3 1 1.6 2.1 2.6-1.2 2.4-0.5 0.1-2.1-1.2-0.1 0.9 0.7 0.6 1.9 0.3-0.7 3.1-0.8 0.2-0.8-0.5-2.2-4.2-0.8 2.9-1.5 0.6-0.6-0.5-0.3-1.2 0.3-0.6-0.5-2 0.5-0.3-0.6-1.5-0.2-1.6 0.7-0.9 0.6-0.2-0.3-1.1 0.3-0.6 1.1 0.3 1.2-0.4 0.4 0.9 1.5-0.7 0.4 0.7z m8.1 3.2l0.4 1.2-1.9-1.4-0.1-1 0.9-0.1 0.7 1.3z m-2.6-2.6l0.4 0.8-0.2 2.1 1.6 0.6 0.5 0.6 0.9 0.2-0.3 1.1 0.3 2 0 1.9-0.6 1.6-0.4-0.6 0.3-1.5-0.3-1.1 0.2-0.9-0.9-0.7 0 1.8 0.2 2.7 0.3 0.6-0.9 3.1-0.9 0.2-0.8-0.9-0.3 1-3.5 1.7-0.3-1.3 0.4-0.4 0.2-0.9 1.8-1.4-0.1-2.8 0.3-1.9 0.8-1.7 0.2-1.8 0.4-0.8-0.2-1.4 0.5-1.9 0.4 0z m-98.7-58.6l0.5 0.4-0.6 1.2 2 1.3 0.5 0.9-0.7 0.9-1.4 0.1-0.3-1.5-0.8 0.8-2.8-0.3-0.9 0.2-0.8-1.3 0.2-0.9-0.4-1.2 2-0.6 1.2 1.1 1.4-1.5 0.9 0.4z m0.7 0.3l-0.4-1.1 1.6-0.2 0 1.1-1.2 0.2z m-41.1-35.1l-1 0.5-1.1-0.6 1.3-1.3 1.4 0.4-0.6 1z m75.9 33.8l-1.1 0.8-0.1-1.1 1.2 0.3z m6.6 0.9l0.7 1.1-1 0.6-1.8 0.3-2.7 1.2-0.3 0.7-1-0.4-1.6 0.1 0.3-0.9 1.9-0.8 2.7-0.5 1-0.7 0.6 0.3 0.9-1.3 0.3 0.3z m-92.5-73.4l-0.1 1.2 1.1 0.6 0.1 0.9-1.3 0.9-0.2 0.7-0.9 1.2-0.2 1-2.4-1.3-1.8-0.5-0.3-1.2-1-0.9-0.6-3.2-0.4-0.9 0.4-2.6 1 0.3 1.6 2.1 1.1-0.4 2.3 0.6 0 0.7 1.3 0.4 0.3 0.4z m96.3 74.1l1 0.6-0.5 0.6 1.4 0.4-0.1 0.6-1.5-0.2-2.1 0.2 0.1-0.8 1.3-0.1-1.1-1 1.5-0.3z m-5.8-4.2l-0.1 1-0.5 0.6-1.3 0.9-0.7 0.8-0.4-1.2 2.2-2.1 0.8 0z m-118.2-98.8l-0.7 0.4-0.3-3.7 0.8 0.4-0.1 0.9 0.3 2z m126.4 104.4l-1.2-0.4 0.5-0.7 2.1 0.6-1.4 0.5z m-7.1-11.2l0 1.3-0.9 0.2-0.1-1.1 1-0.4z m-47.1-79.3l-0.5 0.6-1.1-0.7 0.3-0.9 1.3 1z m-36.3-39.3l-0.7 0.9-0.1 1.1 1.5 3.1 2 0.3 0.9 0.5 0.8 0.8 0.1 1.7-0.7 0.9 0.1 1.9 0.7 0.9-0.4 0.8 0.9 0.9 0.2 1.4 0.9 0.1 0.9 1.5-0.8 0.7-0.9 0.2-1.7-2.2-2-0.1-1.2 0.6-0.1-0.8 0.5-1.4-0.5-1.9-0.5-0.5 0.8-0.7-0.1-1.6-0.7-2.6-1-0.9-2.6-0.4-0.6-1.8 0.9-1.7 1.3-0.8 0.5 0 1.6-0.9z m175.6 38.7l-58.6 108.6 0 0.4 2 2.2 1-0.5 1.6 2.3 0.7 0.1 1.6-0.6 0.7 0 3 1.4-0.1 0.6-1.7 1.9 0.1 1.5 1.4 2.3-0.3 1.8 2.8 8.5-0.7 3.2-0.1 1.1 1.3-0.5 3.4-0.6 1.4 0.6 1.5-1.1 1-2 1.2 0.2 0.8-1.4 2.2 0.4 3.2-0.3 0.7 1.7 0.6 2.4-1.1 1.2 0.2 2.1 1.2 1 0.2 1.7 0.6 1.2-0.4 0.9 0.4 1.9 1.5 2.2 0.5 2.8 0.5 1.4-0.3 2.1 0.5 2.2-0.1 1.8 0.3 1.9 0.4 5.3 0.4 2.2 0.1 2-1.2 1.1 1.6 1.4-1.2 1.7 1.1 1.3-0.3 0.5-0.2 2 1.4 0.5 2.1 3.4 1.5 1.1 0.7 1.7 0.8 0.7 0.1 1.5 1.9 1.3 0 1-0.4 1.1-1.7 1.4-0.1 1.2-0.6 1.2-0.2 3.3-0.8 0.4-1.8 1.7-1.5 1.2-1.9 0.6-1.1-0.8-0.9 0.4-0.2-0.7 0.6-1.3-0.2-0.9 0.7-0.7-0.5-1 0.3-0.6 1.9-1.2 1-2.3 0.6-1.9-0.4-2.3-0.3-1 0.1-0.9-1.2 0.2-0.2-0.7-2.6 0.5-1.1 0 0.5 1-1 1.3-1 0.5-0.6 1-1-1.6 0.2-1.9 1.6-0.7 1.7-1.5 0.5-1.7 1.2-0.1-0.5-1.5 0.2-0.7-1-0.7 0.1-1.2-0.6-1.1 0.8-1.1-1.2 0 0.6-1.6-0.9-1.2-0.6-1.8 0.8-0.3-1.4-2.2 0.1-0.7-1 0-1.5-1.6 0.9-0.9 0.9-0.4 0-1.9 0.3-0.6-0.5-1.4 0.4-0.9 0.6 0 1.5 2.4 0.4-0.3-1.5-2.3 0.7-2.1-1.5 1.2-0.2-2.4-0.6-1.8 0.4-1.4 0.6-0.9 0.7-0.2 0.3-1.2-2.4 1.6-0.8-2.2-1.3-1.3 0.2-1.4-0.1-2.1 0.4 0 0.5-1.5-0.9 0.3-0.1-1.2 0.4-0.7 0.6-2.8-0.8-0.3-1 1.8 0 2.5-0.3 1.6-0.5 0.2-0.2 2.2-0.4 1.7-1 0.8-0.8-0.9 0.1-1.9-0.6-0.1-0.5-0.8-1.7-0.2 0.4-1.2 0.6-0.4 0.3-3.9-0.9 0.4-0.6-0.3-0.9-1.4 0.4-1.3-1 0.3-1.2-1.5-0.3 0.7 1.9 2.2-0.5 0.6 0.7 0.5 0.7 2.5-0.3 0.5-0.1 1.8-0.5 0.3-2-0.3-0.7-0.5-1.1 0.8-0.8-1.8 0.2-0.6-0.6-0.8-0.9-0.3-1.4-3 0.1-0.7-1.2-3.1 0.4-1.5-0.6-1.7-1.9-2.9-1.2-2.2-1.1-1.2-2.3-4.4 1.3 0.3 1.8-1.1-0.2-0.8 0.4-1.5 1.4-0.7 0.2 1.9 0.5 0.2-0.6-2.8-0.9 0.8-0.9 0-1.4 0.7-3.3-0.1-1.6-0.9-1.2-1.2-1.6-2.4-0.5-0.9 1-0.1 0.5-0.7-0.5-0.6-1.7 0-0.7-0.3-0.9-1.4-4-3.5-2.5-0.7-2.3-1.1-2-0.4-0.2-1.4-0.8-2.2-1.3-0.6-0.4-1.9-0.9-0.5 0.7-0.8 1.2-0.5 0.1-0.8-1-0.6-1.1 0.8-1 0.2-0.9-0.4-0.4-1.5-1.9-1.3 2.4-0.8 0.2-0.5-0.8-1.3-2-0.2 1-0.6-0.3-0.7-1.8-0.1 0-1 1.9 0.4-0.4-0.8-0.8-0.1-0.5-1.3 0.1-1 1.9-0.8 1.4 1 0.2-0.8-1.4-0.8-1.9 0.4-1-0.2-0.6-0.6-2.2 0.5-0.7-1.5-0.5 0.8-0.6-0.1-0.2-0.9-0.8-0.4-0.3-0.8 0.7-0.8-0.9-0.4-1.5 0.9-1.9-0.2-0.6 1 1 0-0.6 1.4 1.4-0.6-0.7 1.7-1.1 0.4-0.1 0.7 1.7-0.6 0 1.6-0.3 0.6-1.1 0-1.8 0.6 0.4 1-0.7 0.8-0.8-0.2-1.5 1.1-1.1-0.2-1.8-1.4-1.9-2-2.1 0.5-0.8-0.5-1.6 1.5-0.6-0.4-2 0.8-0.5-0.2-1.3 0.5-0.8-1.4-1.3 0.8-2.1 0-0.4 0.8-0.8-1-0.6 0.6-0.9-0.7-0.3-0.7-1.5 0.2-1-0.6-0.4-2 1.4-1 1.8 0.1 1.2 0.7 0.2-0.4 1.1 0.3 1.2-0.6 1.8-0.6-0.5-0.5-3 0.2-1.1-1.5 0.1-1.5 2.7-2 2.3-0.6 0.8-0.5 0.8-1 0.7 0 1.2-1.5 0.6-2.4 1.2 0 1 0.6 2.6-0.4 2.4-0.1 0.5 0.5-0.1 1.3 0.8 0.9 1.6 0.1 0.7 1.1 2.2 2.3-0.1-1.1-0.7-0.1-0.4-1.1-0.6-0.6-1.1-3.2 1.4-0.2 1.3-0.8 1.2-0.3 2.2 0.4-0.4-0.7-1.2-0.5-0.8 0-1.5 0.5-1.2 0.9-2.3-1.6-0.6-1.2-0.8 0.2-1.4-0.3-0.9 0.1-1.2 0.7-1.4-0.2-1.2-0.5-1.4 0.1-1.7 1.4-1.6 0.1-0.7 0.4-1.1 0.1-1.1 0.4-0.3 0.7-1.4 0.9-1.6 0-0.8 0.3 0 1.2-0.7 0.6-1.4 0.7-0.8-0.2-0.8-0.6-1.2-0.6 0 0.8 0.6 0.7-0.9 0.7-1.9-0.2-0.6-0.8-0.6-0.2-0.7 0.7-1.2-0.5-0.2 1-2.5-0.5 0 0.6-1 0.2-1.8 1.8 2.4 1.9 0 1 0.6 0.5 0.4 1.4-0.6 0.7-1.5 0.9-2.1 0.1-1.1-0.7-1.3 1-0.6-0.5-0.4 1.4-2-0.5-0.1 1.5-1.2 0.4-0.8-0.8-1.6 0.7-0.2-0.9-1 0.3-1.1-1.2-1.2 1.1-1.9-0.3-0.5 0.9-0.6-0.2-0.6-1.5-0.9 1.2-1.8 0.1-1.7-0.4-2.2-0.2-1.1 0.8-0.8 1.5-1.2 0-1.5 0.9-0.8-1.1-2.5 0.2-1.5 0.4-0.5-1.9-0.6 1-1.3-0.2-0.3 1.3-1-0.7 0-0.9-1-0.5-0.9 0.6 0.5 0.4-0.8 0.8-0.7-1.1-0.9 0-0.9-0.9-2.8 0.5 1.7 0.9 0.4 1-1.2-0.1-0.2 0.7-1-0.2-1 0.8-0.6-0.6-1.5-0.8-1.1 0.5-0.9-0.8-1.7-0.7-1 0-1.5 0.8-0.2-1 0.8-0.3-0.8-1.3-0.6 0.5-0.7-0.4-2 0.2-0.5-0.3-1.5-0.1-0.9 0.5-2-0.9-0.1-1.3-1.3 0.4-1.9-0.5-0.2-0.7-0.8-0.7 1-0.7 1.2-0.4 0.3-0.8-1.2-0.6-1.1 0.4-1.1 1.2-2.2 0.5-0.6-0.5-0.7 0.5 0.1 0.8-2.6-0.5-0.6-0.9 0.5-0.5 0.8-2.6-0.5-0.3-0.8 0.4 0.1 1-1.5 1.3-1.3 0-0.4-0.5 0.4-2.2-0.4-1-0.9 0.6 0.2 1.4-0.4 0.4-2.2-0.2 0-0.7 1.2-0.2 1.2-1.9 2.2 0.5 0.1 0.8 1.2 0.1 2-0.4 0.9 0.6 0.4-1 3.6-0.7 3.5 0.2 2.5 1 1.8 1.4-0.2 3.4 1.6-0.5 1 0.7-0.3 0.8 1 0.5 0.3-0.4-0.5-1.5 0.3-0.9 1.4-0.5 1.8-1.1 1.8-0.3 1.3 0.3 2.5-0.1 1.9 0.8 1 0.1 1.5-0.2 1.8 0.3 0.3 1.3 0.6 0.3 1.9-2.2 1-0.4 3.2-0.8 1.8 0.2 1.5-0.4 1.7 0.3 1.3-1.6 1.7-1.4 1.7-1.8 1.6-1.1 0.3-0.8 1.4-1.1 2.4-0.6 1.9-0.2 2.3-1.9-1.2 0.3-2.6-0.7-0.9 0.1-4-1.1-0.5-1 0.5-1.6-0.4-1.1 1.2-0.7 0.6-0.7-2.2 0.2-1.1 0.8-1 0.2-0.9 2.3 0.1 0.5-1.3 0.3-1-1.1 1-4.5-0.1-1.6 0.3-0.7-0.6-0.6-2 0.5 0.2-1.6-0.8-1.2 0.6-0.7 0.2-1.2-2.5-0.1-1.6 0.2 0-0.5-3.6-0.5-0.6 0.5-1.4-0.3-1.5-1.7 1-0.6 1 0.3 1.5-2.5 1.7-0.2-0.3-0.7-1-1.3 0.5-1.1 0.7-0.2 1-0.9 2.1-0.1 0.3-1.8 0.5-0.8 0.6-2.5 0.6-0.9 0.4-1.7 0.1-1.4 0.5-0.3 0.1-1.2-1 0.1 0.2 0.7-1.1 1.2-0.9 0.5-1-1-0.8 0.3-2-0.4-3-1.7-1.2-1.1-0.7-1.2 0.5-1.6 0.7-0.7-0.4-1.5 0.4-1.1-0.3-2.1-0.6-1.5 0.3-1.6 0.6 0.3 0.8-0.8-1.4-0.4-0.5-0.7 0.8-0.4 2.6 0.1 0.5-0.8 1.5 0 1.3 0.3-0.9 0.9 0.9 0.9 0.6 1.1-0.6 1.2 2 0.2 0.2 1.1-0.9 0.7-0.3 0.7 0.8 0.5 1.5 0.1 0.9-0.7-0.1-0.9-1.1-1.8 0.8 0.1 1.2-0.8-2.6 0.1-1.5-1.6-1-0.7 0.3-1-1-0.6 0.2-0.5-1.5-0.9 0.2-0.8 1.4-0.2 0-1.5-0.5-0.6-0.9 0.7-0.4-0.8 0-1 1.2-1.2-0.6-1.2 0.3-1.2 1.1 0.1 0.6-0.5-0.3-1.1-1.3-0.4 0.4-1 2.3 0.2 0.2-1.9 1.4 1.3 1 0.5 0.4-1.6 0.5-0.6 1-0.6 1-0.2 3.7-1 1.3-0.2 1.3 0.9 1-0.5 0.8-1.4 0.9-1 2.2-1 1.3 1 0.4-1.6 1.7 0 1.2 0.6 1.3 1.8-0.3 1.8 0.6 0.8-0.2 0.9 1.4 0.8 1.6 0 1-0.4 1.4 0.2 3.9-1.2 0.4 0.9-0.6 0.6 2 1.5 0.3 0.5 2.1 1 2.2-0.4 1.6-0.5 0.7-0.7 1.3-2.8 1.5-2.2 0-1.9 0.3-0.6-0.7-1.4 0.7-0.5 1.6 1.7 2.2-0.5 0.7-0.7 0.4-1.3-0.2-1.1 0-1.3-2.4 0.8-1.1-1.3-2.1-0.6-1.7 0.3-1.6-0.4-0.8 0.2-1.1 0.9-1.1 0 0.7-1.5 0.5-0.2-0.2-2.4-0.2-0.6-1.1-0.1 0.3 1.6 0.3 0.6-1.2 0.6 0.1-1.3-0.4-1.7-0.9-1.3-0.8-0.4-1.4-1.6-2-0.4 0.1-0.4-2.2-0.6-1.1-2.2-2.4-3.6-0.2-1.2 0.4-1.3 1.2-0.5 0.7-0.7-0.4-2 0.5-1 2.3-0.1 0.3-0.5 1.2 0.7 0.3-0.7-1.8-3.1-1.7-2-0.3-2.2-0.5-2.2 2.2-0.2 0.9 0.9 0.9-0.7 1.7-0.1 0.2 0.9 0.7 0.4 1.4 0.1 1.6-0.5 2.8 0.5 0.3 1.3 1.1 1.4 1.4 0.5-0.7-2.3 1.3-0.3 2.8 0.6 1.6 1.1 1.8-0.1 2.1 1.2 1.3 0.9 0.3 1.1-0.4 0.8-1.5 0.6-0.9 1.2-0.6 0.2-0.6 0.9 0 1.6 1.5 1 0.7 1.1 1 0.3 0.7 0.7-0.1 1 0.8 0.4 0.2 0.6 1.2 0.4 0.8 1.3 1.8-0.2 1.5-0.8 1 0.6-0.2 0.6 0.6 1 0.8 0.1 0.3-1.6-1-1.9-0.9-0.9-1.2-0.3 1.4-0.9 0.4-0.9 0.1-2.9-0.6-0.7 0.5-2 0.3-0.4 1 0.6 0.7-0.1-0.5 2.3 0.1 0.7-1.2 0.8-0.4 2.1 0.4 1.7 1.4 0.6 0.6-0.1 0.5 1.2 0.1 2.1 0.7 0.6 1.7 0.9 1.3-1.2 0.2-1.1-0.4-0.8-0.7 0.2-0.6-2-1.2-0.7-1.7 0.6-0.8-1.2 0.1-2.5 0.9-1.2 1.8-0.8 0.9 0.1-0.4-1.5-0.6-0.5-2.3-1-0.7-1.6-0.9-0.5-0.6-1.1-1.7-2.4 0.1-0.6 1.6-2.1 0.9-2.2 0.4-1.8-0.3-2 0.2-2-0.4-0.8 0-1.6-0.2-2.6-1.1-2.5 0.4-1.6-0.5-2.8 1.4-0.1 1.7-0.8 2.3-2 0.7-1.1 1.6 1.5 0.3 0.7 2.5 1.9 1.2 0.5 1.8 1.4 2.1 0.6 2.3-0.1 3-0.8 1-0.1 2.9-2.3 0.5-0.7 1.4-0.8 3-0.4 1.3-0.8 1.9-0.3 1.7-0.6 0.7 0.4-0.8 1 1.3 0 1.1 0.9 2.5 0.6 4.5-0.5 1.1 0.6-0.4 0.7-2 1.4 0.8 0.3 1.3-0.9 0.6-1.2 0.1-0.7 2.5-1 1.7 0.3-1 1.1 2.7 1.6 2.8 1.5 0.9 0.2 1.9 0 2.3-0.4 1.9-0.9 1.7-0.6 1.2 0.1-0.2 1.5 0.8 0.5 0.2 1.6 0.8 0.4 0.4 0.7-0.2 0.9-0.6 0.5-1.7 0.3-0.9-0.6-0.5 0.5-0.3 1.7 1.1 0.6 0.7 0 0.8-0.9 2-0.1 0-0.8 1.3-0.2 0.6 1.7 0 1.4-1.3 0.8 0 1.4 0.9 0.6 0.3 0.9 1.8-0.5 1.4 1.2 1.1 0.1 1.5 1.8 1 0.7 0.7 1.7-2.2 0.7-0.9 1.7 2 1.2 0.8 0.6-0.7 0.7-1.1 0.1 1.9 1.5 0.4 1.3 0.8-0.6 1.4 0.6 0.5-0.2 1.1 0.7 0.4 0.7-0.6 0.5 1.3 0.6 1.5-0.2 2.1 1.4 0.8 1.3 0.6 1.3 0.5 0.2 0.4 2.1 0.8-0.2 1.3 2-0.4 0.6 2.2 2.6 1.4 0.4 2.4 1.6 0.4 0.8 1 0.2 0.4 1.9 0.7 1.2 1.3 1.7 0.4-0.1 1.1 0.9 1.3-0.3 0.8 0.5 1-0.2 0.3 0.5 3.2 1.1 0.7 1.3 0.5 0.1 0.7 1.4 0.3 2.7 0.7 0.5 1.3 2.1 0.3 2 1 0.1 0.7 0.8z" id="AK" name="Alaska">\n </path>\n <path d="M736.2 800.4l1 1.2-0.2 1-0.7-0.4 0.4-0.7-0.5-1.1z m-276.9-140l13.1 1.7 10.5 1.3-1.1 1.2-0.4 1.1 7.7 4.7 7.4 4.5 7.5 4.4 11.6 6.7 0.5 0.2 10.3 1.7 9.1 1.3 0.8 0.1 7.5 1.1 0.7-5.3 16.9 2.3 1.4 0.7 0.5 1.7 1 1.7 1.6 0.8 1.2 1.4 0.8 1.4 1.7 1.4 0.2 0.9 1.8 1.9 1.3 0.6 1.3 1.4 0.7 0.4 1.1 1.6 0.2 1.4 0.9 2.1 0.6 0.9-0.4 1.9 0.1 1.1 1 1.9 0.2 1.4 1.8 1.7 0.8 0.2 1.9 2.4 1.3 0.7 1.4 0.3 0.1 0.5 1 0.8 1.3 0.4 0.6 0.8 1 0.8 0.7 0 1.6 0.7 0.5-0.9 1.3-1.3 1-0.4 0.3-1.4 1.2-2.9 1.1-1.7 1.8-0.4 1.1 0.2 0.4-0.8 0.8-0.4 1.8 1.1 1.5-0.1 3.4 0.8 0.8-0.2 1.5 0.4 0.4 1.1 0.5 0.6 0.8 0.4-0.4 0.7 1.6 1.1 0.6-0.1 0.2 0.9 2 1.5 0.5 1.2 0.9 0.7 0.4 2.3 1 1.4 0.2 1.2 0.9 1.4 1 3.6 0.9 1 1.2 0.7 0.7 1.7 1.2 1.4 0.2 1.2 0.5 0.4 1 1.2 1.1 0.4 1 0.9 0.3 1.7-0.3 1 0.6 1.6-0.4 1.8 0.5 1.1 0.5 0.4 0.1 1.1 1 0.5 0 2.7 0.8 0.1 0.6 0.5 0.2 1.5 1.3 0.1 0.8 0.4 1 0 0.6 0.8 1 0.8 0.7-0.2 2.2 0.8 0.7 1 0.8 0.5 3 0.3 1.5-0.1 1.3 0.4 2.7 2.2 1.9-1.3 1.2 0-0.3 1.6 0 1.3-1.7 4-1.6 2.4-2.2 8-0.8 6-0.1 3.3-0.5 3.6-0.2 2.1 0.3 3.5-0.7 2-0.4 0.5-0.7 1.7 0.8 2.3 0.4 2 0.1 2.1 1.7 3.2 1.1 1.4 1.9 1.5 0.2 0.5-0.3 1.7-1 0.9-0.4-1.1 1.1-0.8-0.1-0.6-1.2-1.1-1.5-1.9-0.9-0.4 0.5 2.3 0.9 1.7 1 0.2-0.1 1 1.1 2.4 0.6 1.8 1.6 3-0.1 0.9 0.6 1.1 1.3 1.7 4.1 4.4 2.5 3.5 0.5 1.6 0.6 2.5 0.9 2.8 1.4 1.1 1.3 1.9 0.8 0.1 0.8 2.2 0.6 2 1.5-0.5 2.7 0.6 3.4 0 1.8 1.2 0.6 0.7 2.3 0.3 1.1 1.8 1 1.1 0.6 1.2 1.3 0.5 3.9-0.8 3.2-1.3 2.1-0.7 1.1 0.1 0.1-0.8 1.6-0.4 5.9-0.2 1-0.3 1-0.9 0.9-1.1 2.4-0.5 0.8-0.2 4-0.6 1.4 0.1 0.9 0.7-0.4 0.5-1-0.3 0 1 1.4-0.1 0.6 0.8 1.7 0.2 1.6-0.1 0.4-0.7 2-0.9 0.5-0.8 0.2-1.2-0.5-0.6-0.7 0.2-0.8-1.3 1.7-1.2 1.3-0.7 0.9-0.9 1.6-1 0.9-1.2 0.6-0.4 0.8-1.2 0-3.8 0.4-1.2 2.1-1.8 0-1.2-0.3-0.6 0-4.2-0.3-1.5 0.3-2.6 0.7-1-0.4 0.1 0.5-2.3 0.3-0.4 2.6-1.8 1.3-0.5 0.6-0.5 1.5-0.7 7.4-1.4 4.7-1.6 1-1 1.7-0.6 1.9 0 1.7-0.8 1.9 0 2.2 0.4 0 0.5 1.7-0.3 1 0.2 0.7 0.3 2.7 0.1 1.1-1.1-0.1-1.2 1.6 0.5 0.9 1.4 1.1 0 0.5 2.8 0.8 0.4-0.7 1.8-0.4 2.1-1.9 3.1-1.7 1.7-2.1 3.9-0.1 1.5 0.2 2.2-0.3 0.7-1.1 0.9-0.2 0.8-1.2 0.4 0.1 1 0.8 0.5 1.2-0.3 1.6 0 0 0.8-1 1.2-0.6-0.3-0.9 0.8-0.2 1.6 0.6 0.2 0.7-1.2 0.8-0.2-0.4 2.4-0.5 1.5-0.4 3.1-0.6 1.2 0 1.8-0.2 1.6-0.7 1.8-1.3-2.1-1.7-0.5 0-0.5 0.7-2-0.2-1.1-0.4-1.1-0.7 1-1.8 4-2.4 0.3-0.5 0.5-0.1 1.2-0.6 1.4-0.9 0.8-0.4 1.6-1.5 2.2-2.1-1.2-1.1 0.6 0 1.8-13 0.8-8.2 0.5-0.4 0.2 0.4 6.8-5.2 0.3 0.8 0.7 0.9 0 1.5 1.9 0.6 0.1 0.7 1.2 4.1 2 1.3 1.8-0.1 0.8 1.3 0.4 0.8 0.7 1 0.1 0 0.9-0.6 1.1 0.4 1.1-0.6 1.3-6.1 0.4-8.8 0.4-0.3 0.3-5.1 9.8 0.1 0.7 1.6 1.9-0.9 1.1 0 1.2-0.4 1.1 0.5 1.4-0.5 1.7-0.5 0.3-0.8-0.8-5-4.7-1.5-1.7 0-0.4-2-1.1-3.1-2.9-3-2.4-2.3-1.7-3.5-2.1 1.1-0.2-0.6-0.8-2.2-0.7-0.6-0.9-1.1 0.3-1.7-1.1-0.6 0.7 1.5 1.2 0.7-0.3 0.6 0.5 1.1 0.2-0.3 0.6-3.9-1.6-3.2 0-0.1-0.5 1.5-0.6 0.1-0.6-0.9-0.5-1.3 0.9-0.6-1.2-0.5-0.4-0.8 0.4-0.7 0.9-0.7 0-0.3 0.7 1.9 0.3 0.1 0.4-2 0.4-1.1-0.1-1 0.4-2.4 2.3-1.6 0.2-1.1 0.6-3.6 1.1-2 0.9-1.3 0.9-2.4-0.2-1.5 0.5-1.5-0.7-2-0.3-1-0.6-1.1-0.3-1.7-1.3-1.3-0.4-2.3-0.1-0.8-0.3-3-0.2-3.7-2.4-0.4-0.6-3.9-1-1.3-0.5-2.5-3-1 0.3-3.4-1.2-2.7-0.8-2.8-0.3-1.6-0.6-2.9-2.4-8.4-3.4-3.5-1.5-1.9-2.1-0.9-0.6-2.3-1-0.4-1.1-1.7-0.8-0.3-0.9-0.8-0.7-0.7-1.2-2.6-1.5-0.7 0.1-0.9 0.7-4.9-1.9-1.7-0.4-3.2-1.7-1-0.2-2.8-1.1-1.6-1-0.7-2-1.5-1.5-0.2-1.1-2.6-2.5-2.2-1.4-1.7-0.8-0.2-1.1-1.1 0-1.6-0.7-1.6-1.2-0.8 0-2.3-2-0.5-1 0-1.4-0.7-0.4-1.1-1.1-1.7-2.9-1-1.9-0.1-2.1-1-1.5-0.4-1.2 1.5-0.8 2.9 0 1-0.8 0.2-0.6-0.6-0.7-0.7-1-0.6 0.3-1.1-0.6 1.5-1.7 1.1-1.2 0.9-0.3 0.4-1.7-0.1-1.7 0.8-1.1-0.8-1-1.6-1.2-2-4.5-0.2-1.2 0.3-2.5-0.4-3.1-0.7-1.7-1.4-1.9-0.9-0.6-1.8-2.9-0.6-0.5-1.5-1.9-0.7-2.3-0.9-0.8-1.3-2-0.5-0.2-0.9-2.7-1.2-1.8-3.4-3.2-0.2-0.5-1.4-1.4 0.8-0.5-0.3-1.4-1.2 0.5-1.2-0.7-0.7-1.2-1.8-0.9-0.3-1.7-1.1-1.3-0.2-1.3 1-0.3 0.1-1.1-0.7-0.1-0.4-0.7-1.3-0.1-1-1.4-1.1-0.6-0.9-1.2-0.8-0.2-0.5-1.7-0.9-0.4-0.1 0.8-1.2-0.3-0.4 0.4-0.8-1-0.4-1.4-2.6-2.1 0.4-1.2 0.1-1.5 1.1-1.2 0.7-1.1 0.1 0 0.6-0.2 0.9-0.4 0.2-0.3-1.1-0.4 0.2-1.7-1.5-2.4-0.1-0.5-1.1-0.3-1.6 0.4-0.7-0.5-0.8-1.2-0.3-1.9 0.1-1.3-0.5-0.7-1.2-0.1-2-0.8-1-1.4-0.7-1.9-0.6 0.1-0.3-2.8 0.6-1.3 0.2-1.3-0.7-0.9-1.4-0.5-0.7 0.5-1.2-1.3-0.7 0.2-1.7-1.6-1.4-3.4-0.2-0.9-2.3-1.3-0.3-1.5-1.3-1.9 0.4-0.7-1.3-1.2-0.5-1.2-0.5-0.2-0.3-2.7 0.3-0.7-0.3-1-1-0.1-0.5-0.7 0.6-1.2-1-1.8-0.1-0.9-1.1-2.8-0.6-0.3 0.4-1-0.2-0.6 0.3-1.5-0.7-1.3 0.1-1.7-0.9-1.4-0.7-1.8-0.1-1.7 0.6-1.9 0.6-0.5 0.3-1.4-0.5-0.8-4.1-1.8-0.5-0.7-0.1-1.8-1.9-1.6-1 0.3-0.8 0.6-1.2-0.2-2.9-2.8-0.7-1.2-0.9-0.2-0.6-0.5 0.6 1-0.5 0.2-0.7-0.8 0.6-0.4-0.4-0.3-1.1-1.4 0.7 1.6 0.2 1.6-1 1.4-0.4 1.6-0.9 2.5 0.2 1.9 0.9 1-0.1 2.3-0.4 1.2 0.3 1.1-0.1 1.5-0.9 2.7 0.6 1.5 0.2 1.3 0.9 0.9 0 1.5 0.5 0.5 0.7-0.1 1.9 2.5 0.6 0.4 1.1 1.8 0.6 0.5 1.1 2.1-0.4 0.3 0.9 2.2 0.3 1.3 0.9 0.7 0 1.2 1.1-0.2 0.4 1.2 0.4 3 1 0.7 1 0 0.4 1.2-0.5 1.1 0.6 1.2-0.3 0.8 0.2 1.5-0.4 1.6 0.5 1.4 0.9 1.3 2.1 1.5 0.3 0.6 0.2 1.9 0.7 1.5 0.2 1.1 1.4 0.8 0.3 0.7-0.6 0.9 1.2 2.1-0.6 1 1.4 2.6 0.7-0.4-1-1.5-0.2-2.3 0.4-0.1 1.4 2 0.9 0.8-0.4 1.4 1.2 0.9-0.4 1.3 0.6 1-0.2 0.9 0.4 2.2-0.6 1.2 0.2 2.3 0.7 0.8 0.2 1.3 0.6 1.2 1 0.3-0.2 0.7 0.7 3.9 0.8 1.5 0.5 0.3 0.7 2.6-1 1.4-0.4 1.5 0.4 1.1-0.1 1.2 1 2 1.6 0.7 0.5 0.8 0.7-1.1-0.1-1.4 1.1 0 0.5 1.2 1.5 1.3 0.1 1.5 0.6 0.3 1.1-0.3-0.3 1.3 1.3 2.1-0.1 1.8 2.1 1.4 0.3 1.3-0.2 1.9-0.6 1.2-0.9 0.9-2.2 0.6-0.3 0.5-2 1.1-0.6-0.1-1-1.1-0.3-0.9-0.2-3.7-1.1-2.9-1-0.9-1.7-1.2-0.7-0.8-1.5-2.3-2-2.8-1.8-1.6-2.1-1.7-1.6-2.1-0.4-1.4-1.6 0.7-0.1-1.8-1-1.7-0.6 0.3-0.7-0.5-0.2-1.3 0.4-0.7-0.1-1.8 0.3-1 0.7-0.9 1-4.3 0-1.1-0.4-1.3-0.3-2.2-0.9-0.8-0.2-1.6-0.9-1.2-0.6 0.2-1.1-1.2-0.8-0.2-0.3-0.6-2.9-3.3 0.1-0.6-0.6-1.5-0.7-0.5 0.9-0.6 0.3-0.9-0.6-0.2-0.4 1-1.1 1-0.7-0.6-1.4-0.3-0.6 0.8-1-0.3-0.7-1-0.6-2-1.4-0.8-0.5 0.1-0.8-1.7-1.2-0.8-0.6-0.1-1.8-1.4 0.2-2-0.7-1-1.3-0.9-0.3-1-0.9-1.3-1.1-0.5-0.3-1.3 1.4 0.1 3.1 1.4 1.1 0.2 2-0.8 0.1 1.7 1.2 1.1 0.4 0.6 0.7-0.5 0.9 0.4 0.5-0.6-0.7-0.5-1.2 0.2-0.5-1.5 0.6-0.5-0.5-1.6 0.6 0.1 0.5 0.1 0.3 0.1 0.1 0-0.2-1.5 0.7-0.9-0.6-0.7 1.4-2.2-0.9-2.4-1-0.4-0.8-2.6-0.6-0.9-0.6-0.1-0.6-2.2-0.9-0.4-1.8-3.5-2.1-1.1-0.7-1.4-1.9-1.4-1.7-2.1 0.3-0.8-0.1-1.3-0.8-0.6 0.6-1.3 0.3-1.8-0.2-1.3-0.8-0.8-0.8 0.3-0.1-1.5 0.5-1.6 0.2-2.2-1-0.8-0.5-1.3-0.8-0.2 0.8-2.1-0.2-0.9-1.2-2.9-1.2-1.7 1.2-2.3 0.2-1-1.2-0.9 0-0.8-0.6-0.3-0.1-1.7-0.3-1.5-0.6-0.5-0.4-2.2 0.1-0.9z m190.2 108.3l-0.6 0.9-1.3-0.7-0.4 1.3 0.4 1.2-0.4 1.6 0.2 0.8 0.8 0.5-1.1 1.2 0.4 2.4-0.4 1.2-0.6-0.5-0.9 0.4 0.2 1.1 1.2 0.6 1.2-4 0.3-1.5 0.7-1.7-0.1-0.8 1.4-2.8-0.3-1.6-0.7 0.4z m-182.4-53.1l-0.7 0.7-0.8-1.4 1.2-1 0-0.8 0.6-0.8 0.3 1.4-0.6 1.9z m-28.6-16.6l-0.7 0.2 0.1-1.3-0.3-0.9 0.9-0.6 0.3 0.9-0.3 1.7z m49 3.4l0.9 1.1 0.3 1-0.4 0.8 1.9 0.6-0.3 1.9 0.6 1-0.3 0.8-1-1.1-1-1.5-1.9-3.3 0.7-1.3 0.5 0z m27.7 69.8l-0.7 0-0.3-0.7 0.5-0.8 0.5 1.5z m-22.7-8.2l1.2 0.2 1 1.1 0.5 1-0.3 0.6-2.4-2.9z m15.8-3.6l-0.1 1.8-0.7-0.8 0-1.3 0.8 0.3z m-16.8-2.3l-1.1 2.2-0.5-0.7 1.2-1.9 0.4 0.4z m13.9-10.7l-1.6 1.8 0.3-1.7 1.3-0.1z m-6.2-39l-0.1 1 0.5 1.5-1.3 2.8-1.1-0.3-1.9-1.5 1.2-1 0.1-1.2 0.9-1.4 1.7 0.1z m-6.9 127l-0.7 0-0.9-0.8 1-1.1 0.4 0.4 0.2 1.5z m53.7-29.1l1.2 0.6-0.3 1.2-0.9-0.6 0-1.2z m225.4 15.4l-1.7 3.3-0.7 0.7-0.4-0.8 0-1.3 0.7-1.4 2.1-0.5z" id="MX" name="Mexico">\n </path>\n <path d="M314.6 613.2l0.9-0.2 2.4 0.1 2.2 0.4 1.3 0.6 0.6 1.5 0.7-0.5 0.6 0.2 0.7 1 1.4 0.3 0.7 0.6-0.3 1-0.8 1.3-2 1.9-0.9 0.4-0.6 1-1.1 1.3-0.4 2.6-0.6 0.6-1.8-0.4-0.8 0.1-0.9-1-0.6-2.4-2.3-2.7-1.4-1.1 0-0.7 0.8-1.4 0.4-2.2-1-0.7-0.7-1.2 0.1-0.7 1.5-0.3 0.5 0.4 1.4 0.2z m-11.7-0.4l-1.4 0.9 0.3-1.3 1.1 0.4z m-4.9-0.7l-0.9 0-0.8-1.9 1.1-0.2 1.1 0.5 0.2 0.9-0.7 0.7z m2.1-4.7l0.8 0.2 0.9 0.7 1.7-1.3 0.6-0.1 1.8 0.7 1.4-0.1 0.5 1.3-1 1.2-0.8 0.3-0.9 0.9-1.1 0.4-0.7-0.7-0.8-1.3-0.7 0.4-1.1 0-1.3-0.9 0-1.1 0.7-0.6z m-7.9 0.5l4-0.8 1-0.5 1.1-0.2-0.3 0.9-1 1-2.4 0.3-2 1-0.5-0.4 0.1-1.3z m-8.4-1.6l0.9 0.5 0.2 0.9 1.8 0.4 0.9 0.5-1.3 1.2-1.4-0.1-1.9 0.9-2.3-1.6-0.5-1.2 1.2-0.4 0.6-1.8 0.6-0.2 1.2 0.9z m-25.2 6.9l-0.8-0.9 0.9-1.4 0.7 0.6-0.8 0.9 0 0.8z m6.7-8.2l1.4 0.6 0 1.3 0.3 1-0.7 1.4-1.9 0.3-1-0.3-1 0-0.5-0.8 0.3-1.4 1.4-1.5 1.7-0.6z" id="HI" name="Hawaii">\n </path>\n <circle cx="322.1" cy="615.6" id="6">\n </circle>\n <circle cx="286.3" cy="608" id="7">\n </circle>\n <circle cx="264.3" cy="605.8" id="8">\n </circle>\n <circle cx="857.8" cy="565.8" id="0">\n </circle>\n <circle cx="834.7" cy="749.5" id="1">\n </circle>\n <circle cx="459.4" cy="658.2" id="2">\n </circle>\n <g id="layer3">\n  <circle class="Manitoba" cx="656.4" cy="417.8" id="MB">\n  </circle>\n  <circle class="Saskatchewan" cx="595.6" cy="425.6" id="SK">\n  </circle>\n  <circle class="Alberta" cx="534.6" cy="407" id="AB">\n  </circle>\n  <circle class="British Columbia" cx="470.8" cy="383.5" id="BC">\n  </circle>\n  <circle class="Nunavut" cx="652" cy="289.5" id="NU">\n  </circle>\n  <circle class="Northwest Territories" cx="528.4" cy="293.2" id="NT">\n  </circle>\n  <circle class="Yukon" cx="438.5" cy="275.6" id="YT">\n  </circle>\n  <circle class="Ontario" cx="729.8" cy="452.6" id="ON">\n  </circle>\n  <circle class="Québec" cx="833.9" cy="431.3" id="QC">\n  </circle>\n  <circle class="New Brunswick" cx="900.6" cy="483.3" id="NB">\n  </circle>\n  <circle class="Nova Scotia" cx="918.3" cy="502.8" id="NS">\n  </circle>\n  <circle class="Newfoundland and Labrador" cx="901.1" cy="384.5" id="NL">\n  </circle>\n  <circle class="Prince Edward Island" cx="923.5" cy="476.6" id="PE">\n  </circle>\n  <circle class="Massachusetts" cx="871.3" cy="542.4" id="MA">\n  </circle>\n  <circle class="Minnesota" cx="677.5" cy="520.6" id="MN">\n  </circle>\n  <circle class="Montana" cx="557.2" cy="507.5" id="MT">\n  </circle>\n  <circle class="North Dakota" cx="630.3" cy="509.3" id="ND">\n  </circle>\n  <circle class="Idaho" cx="509.2" cy="540.2" id="ID">\n  </circle>\n  <circle class="Washington" cx="476.8" cy="485" id="WA">\n  </circle>\n  <circle class="Arizona" cx="516.2" cy="650.8" id="AZ">\n  </circle>\n  <circle class="California" cx="447.7" cy="608.3" id="CA">\n  </circle>\n  <circle class="Colorado" cx="579.7" cy="604.6" id="CO">\n  </circle>\n  <circle class="Nevada" cx="481.5" cy="582.4" id="NV">\n  </circle>\n  <circle class="New Mexico" cx="569.4" cy="656.2" id="NM">\n  </circle>\n  <circle class="Oregon" cx="462" cy="524.9" id="OR">\n  </circle>\n  <circle class="Utah" cx="526.1" cy="595.7" id="UT">\n  </circle>\n  <circle class="Wyoming" cx="567.6" cy="556.2" id="WY">\n  </circle>\n  <circle class="Arkansas" cx="699.3" cy="655.2" id="AR">\n  </circle>\n  <circle class="Iowa" cx="687.5" cy="573.4" id="IA">\n  </circle>\n  <circle class="Kansas" cx="644.2" cy="614.6" id="KS">\n  </circle>\n  <circle class="Missouri" cx="697.5" cy="617.3" id="MO">\n  </circle>\n  <circle class="Nebraska" cx="632.8" cy="579.3" id="NE">\n  </circle>\n  <circle class="Oklahoma" cx="656.4" cy="650.3" id="OK">\n  </circle>\n  <circle class="South Dakota" cx="630.6" cy="544.5" id="SD">\n  </circle>\n  <circle class="Louisiana" cx="699.3" cy="691" id="LA">\n  </circle>\n  <circle class="Texas" cx="642.5" cy="701.4" id="TX">\n  </circle>\n  <circle class="Connecticut" cx="866" cy="552.6" id="CT">\n  </circle>\n  <circle class="New Hampshire" cx="869.3" cy="529" id="NH">\n  </circle>\n  <circle class="Rhode Island" cx="875.3" cy="549.4" id="RI">\n  </circle>\n  <circle class="Vermont" cx="858.7" cy="524.8" id="VT">\n  </circle>\n  <circle class="Alabama" cx="756.2" cy="677.6" id="AL">\n  </circle>\n  <circle class="Florida" cx="813.1" cy="719.2" id="FL">\n  </circle>\n  <circle class="Georgia" cx="790.9" cy="675.4" id="GA">\n  </circle>\n  <circle class="Mississippi" cx="727.7" cy="679.7" id="MS">\n  </circle>\n  <circle class="South Carolina" cx="813.1" cy="657" id="SC">\n  </circle>\n  <circle class="Illinois" cx="724.8" cy="593" id="IL">\n  </circle>\n  <circle class="Indiana" cx="753.5" cy="594.2" id="IN">\n  </circle>\n  <circle class="Kentucky" cx="772.2" cy="617" id="KY">\n  </circle>\n  <circle class="North Carolina" cx="831.6" cy="634.4" id="NC">\n  </circle>\n  <circle class="Ohio" cx="781" cy="587.7" id="OH">\n  </circle>\n  <circle class="Tennessee" cx="756.7" cy="641.3" id="TN">\n  </circle>\n  <circle class="Virginia" cx="822.2" cy="611.8" id="VA">\n  </circle>\n  <circle class="Wisconsin" cx="715.9" cy="539.3" id="WI">\n  </circle>\n  <circle class="West Virginia" cx="803.4" cy="601.7" id="WV">\n  </circle>\n  <circle class="Delaware" cx="851" cy="591.6" id="DE">\n  </circle>\n  <circle class="District of Columbia" cx="836.4" cy="592.2" id="DC">\n  </circle>\n  <circle class="Maryland" cx="836" cy="587" id="MD">\n  </circle>\n  <circle class="New Jersey" cx="854.8" cy="577.3" id="NJ">\n  </circle>\n  <circle class="New York" cx="844.7" cy="541.3" id="NY">\n  </circle>\n  <circle class="Pennsylvania" cx="824.8" cy="571.4" id="PA">\n  </circle>\n  <circle class="Maine" cx="882.7" cy="502.6" id="ME">\n  </circle>\n  <circle class="Michigan" cx="760.2" cy="556.5" id="MI">\n  </circle>\n  <circle class="Alaska" cx="383.4" cy="199.1" id="AK">\n  </circle>\n  <circle class="Mexico" cx="601.3" cy="788.5" id="MX">\n  </circle>\n </g>\n</svg>',
            },
            tr,
            er = "vectorMap",
            nr = "psa.vectorMap",
            rr = "vector-map-dragged",
            or = {
              btnClass: "btn-dark",
              colorMap: [],
              fill: "#E0E0E0",
              fillOpacity: 1,
              height: null,
              hover: !0,
              hoverFill: "#BDBDBD",
              map: "world",
              markers: [],
              markerFill: "#757575",
              markerStroke: "#000",
              markerInnerFill: "rgba(0, 0, 0, 0.3)",
              markerStrokeWidth: 1.2,
              readonly: !1,
              scale: 1,
              selectFill: "#B23CFD",
              selectRegion: null,
              stroke: "#000",
              strokeLinejoin: "round",
              strokeOpacity: 1,
              strokeWidth: 0.5,
              tooltips: !0,
              width: null,
              zoomEvents: !0,
              zoomMax: null,
              zoomMin: 1,
              zoomStep: 0.5,
            },
            ir = {
              btnClass: "string",
              colorMap: "array",
              fill: "string",
              fillOpacity: "number",
              height: "(string|number|null)",
              hover: "boolean",
              hoverFill: "string",
              map: "string",
              markers: "array",
              markerFill: "string",
              readonly: "boolean",
              stroke: "string",
              strokeOpacity: "number",
              scale: "number",
              selectFill: "string",
              selectRegion: "(string|null)",
              strokeLinejoin: "string",
              strokeWidth: "number",
              tooltips: "boolean",
              width: "(string|number|null)",
              zoomEvents: "boolean",
              zoomMax: "(null|number)",
              zoomMin: "number",
              zoomStep: "number",
            },
            ar = ["fill", "width", "height", "fillOpacity", "stroke", "strokeOpacity", "strokeWidth", "strokeLinejoin"],
            cr = (function () {
              function t(e) {
                var n = this,
                  r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                !(function (t, e) {
                  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                })(this, t),
                  (this._element = e),
                  (this._options = this._getConfig(r)),
                  (this._svgMap = null),
                  (this._mapUnits = []),
                  (this._selection = null),
                  (this._markers = []),
                  (this._activeMarkerIndex = -1),
                  (this._toolbar = null),
                  (this._popper = null),
                  (this._tooltip = null),
                  (this._virtualElement = null),
                  (this._x = 0),
                  (this._y = 0),
                  (this._prevPosition = null),
                  (this._origin = {x: 0, y: 0}),
                  (this._scale = this._options.scale),
                  (this._zoomInBtn = null),
                  (this._zoomOutBtn = null),
                  (this._vector = null),
                  (this._mousedownHandler = function (t) {
                    return n._handleDragstart(t)
                  }),
                  (this._mousemoveHandler = function (t) {
                    return n._handleDrag(t)
                  }),
                  (this._mouseupHandler = function () {
                    return n._handleDragend()
                  }),
                  (this._touchstartHandler = function (t) {
                    return n._handleTouchstart(t)
                  }),
                  (this._touchmoveHandler = function (t) {
                    return n._handleTouchmove(t)
                  }),
                  (this._touchendHandler = function (t) {
                    return n._handleTouchend(t)
                  }),
                  (this._wheelHandler = function (t) {
                    return n._handleWheel(t)
                  }),
                  (this._pinchHandler = function (t) {
                    return n._handlePinch(t)
                  }),
                  (this._touch = null),
                  this._element && (De.setData(e, nr, this), this._setup())
              }
              var e, n, r
              return (
                (e = t),
                (r = [
                  {
                    key: "getInstance",
                    value: function (t) {
                      return De.getData(t, nr)
                    },
                  },
                  {
                    key: "jQueryInterface",
                    value: function (e, n) {
                      return this.each(function () {
                        var r = De.getData(this, nr),
                          o = "object" === se(e) && e
                        if ((r || !/dispose/.test(e)) && ((r = r || new t(this, o, n)), "string" == typeof e)) {
                          if (void 0 === r[e]) throw new TypeError('No method named "'.concat(e, '"'))
                          r[e](n)
                        }
                      })
                    },
                  },
                  {
                    key: "NAME",
                    get: function () {
                      return er
                    },
                  },
                ]),
                (n = [
                  {
                    key: "dispose",
                    value: function () {
                      this._element && (De.removeData(this._element, nr), this._removeEventHandlers(), this._touch.dispose(), this._popper && this._popper.destroy()), (this._element = null)
                    },
                  },
                  {
                    key: "select",
                    value: function (t) {
                      var e = this._mapUnits.findIndex(function (e) {
                        return e.id === t
                      })
                      ;-1 !== e && this._selectUnit(this._mapUnits[e], e)
                    },
                  },
                  {
                    key: "update",
                    value: function (t) {
                      var e = this,
                        n = t.map && t.map !== this._options.map
                      n && (this._element.removeChild(this._svgMap), this._element.removeChild(this._toolbar), this._touch.dispose()),
                        t.markers &&
                          this._markers.forEach(function (t) {
                            e._svgMap.removeChild(t.node), t.animationNode && e._svgMap.removeChild(t.animationNode)
                          }),
                        t.colorMap &&
                          this._mapUnits.forEach(function (t) {
                            ;(t.fill = null), t.element.removeAttribute("fill")
                          }),
                        (this._options = this._getConfig(fe(fe({}, this._options), t))),
                        n && (this._renderMap(), this._setupToolbar(), this._setupTouch()),
                        this._setupSVGProperties(),
                        n ? ((this._mapUnits = this._getMapUnits()), this._setupEventListeners(), this._setupMapUnits()) : this._setupMapUnits(!0),
                        this._options.tooltips && this._setupTooltips(),
                        this._setupMarkers()
                    },
                  },
                  {
                    key: "_allowZoom",
                    value: function (t) {
                      var e = this._options,
                        n = e.zoomMax,
                        r = e.zoomMin
                      return !((this._scale === n && 0 < t) || (this._scale === r && t < 0))
                    },
                  },
                  {
                    key: "_getConfig",
                    value: function (t) {
                      var e = fe(fe(fe({}, or), He(this._element)), t)
                      return B(er, e, ir), e
                    },
                  },
                  {
                    key: "_getSVGMap",
                    value: function () {
                      var t,
                        e = Zn[this._options.map]
                      if (!e) throw new TypeError('Map "'.concat(this._options.map, '" is not available'))
                      return yn("svg", ((t = e), new DOMParser().parseFromString(t, "text/html").body))
                    },
                  },
                  {
                    key: "_getMapUnits",
                    value: function () {
                      return gn("path", this._svgMap).map(function (t) {
                        var e = t.getAttribute("id"),
                          n = t.getAttribute("title") || t.getAttribute("name"),
                          r = t.getAttribute("d")
                        return {element: t, d: r, id: e, title: n, selected: !1}
                      })
                    },
                  },
                  {
                    key: "_getToolbar",
                    value: function () {
                      var t = H("div")
                      return (
                        Ke(t, "vector-map-toolbar"),
                        (t.innerHTML = '\n    <button class="btn btn-floating '
                          .concat(this._options.btnClass, ' zoom-in" aria-label="Zoom in"><i class="fa fa-plus"></i></button>\n    <button class="btn btn-floating ')
                          .concat(this._options.btnClass, ' zoom-out" aria-label="Zoom out"><i class="fa fa-minus"></i></button>')),
                        t
                      )
                    },
                  },
                  {
                    key: "_getValueInMapBoundry",
                    value: function (t) {
                      var e = t.x,
                        n = t.y,
                        r = this._getMapMargins(),
                        o = this._x,
                        i = this._y
                      return ((e < 0 && 0 < r.right) || (0 < e && 0 < r.left)) && (o += e), ((0 < n && 0 < r.top) || (n < 0 && 0 < r.bottom)) && (i += n), {x: o, y: i}
                    },
                  },
                  {
                    key: "_getMapMargins",
                    value: function () {
                      return {left: this.elementRect.left - this.mapRect.left, top: this.elementRect.top - this.mapRect.top, right: this.mapRect.right - this.elementRect.right, bottom: this.mapRect.bottom - this.elementRect.bottom}
                    },
                  },
                  {
                    key: "_getOrigin",
                    value: function (t) {
                      var e = this.mapRect,
                        n = (t.x - e.x) / this._scale,
                        r = (t.y - e.y) / this._scale,
                        o = (n - this._origin.x - this._x) / this._scale,
                        i = (r - this._origin.y - this._y) / this._scale
                      return {x: this._origin.x + o, y: this._origin.y + i}
                    },
                  },
                  {
                    key: "_getBullet",
                    value: function (t, e) {
                      var n = t.fill,
                        r = t.x,
                        o = t.y,
                        i = t.r,
                        a = 1 < arguments.length && void 0 !== e && e,
                        c = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
                        u = i / this._scale
                      return (
                        ce(c, {cx: r, cy: o, r: u, strokeWidth: 0, fill: n, opacity: a ? 0.3 : 1}),
                        a &&
                          (Ke(c, "animated-circle"),
                          (c.innerHTML = '<animate attributeName="r" values="'
                            .concat(u, ";")
                            .concat(5 * u, ";")
                            .concat(u, '" dur="1.5s" repeatCount="indefinite" />\n      <animate attributeName="opacity" values="0;0.3;0" dur="1.5s" repeatCount="indefinite" />\n      '))),
                        c
                      )
                    },
                  },
                  {
                    key: "_getPin",
                    value: function (t) {
                      var e = document.createElementNS("http://www.w3.org/2000/svg", "g"),
                        n = this._getPinInnerCircle(fe(fe({}, t), this.pin)),
                        r = this._getPinPathElement(fe(fe({}, t), this.pin)),
                        o = this._getPinShadowCircle(fe(fe({}, t), this.pin))
                      return e.appendChild(o), e.appendChild(r), e.appendChild(n), e
                    },
                  },
                  {
                    key: "_getPinPathElement",
                    value: function (t) {
                      var e = t.x,
                        n = t.y,
                        r = t.height,
                        o = t.radius,
                        i = t.stroke,
                        a = t.strokeWidth,
                        c = t.fill,
                        u = document.createElementNS("http://www.w3.org/2000/svg", "path")
                      return ce(u, {d: this._getPinPath({height: r, radius: o, x: e, y: n}), stroke: i, strokeWidth: a / this._scale, fill: c}), u
                    },
                  },
                  {
                    key: "_getPinPath",
                    value: function (t) {
                      var e = t.height,
                        n = t.radius,
                        r = t.x,
                        o = t.y,
                        i = e - n,
                        a = Math.acos(n / i),
                        c = n * Math.sin(a),
                        u = (e * (e - 2 * n)) / i
                      return "M "
                        .concat(r, ",")
                        .concat(o, " \n      l ")
                        .concat(-c, ",")
                        .concat(-u, "\n      A ")
                        .concat(n, " ")
                        .concat(n, " 1 1 1 ")
                        .concat(r + c, ",")
                        .concat(o - u, " \n      l 0,0 z")
                    },
                  },
                  {
                    key: "_getPinShadowCircle",
                    value: function (t) {
                      var e = t.x,
                        n = t.y,
                        r = t.innerRadius,
                        o = document.createElementNS("http://www.w3.org/2000/svg", "circle")
                      return Ke(o, "pin-shadow-circle"), ce(o, {strokeWidth: 0, cx: e, cy: n, r: r / 2, fill: "rgba(0, 0, 0, 0.2)"}), o
                    },
                  },
                  {
                    key: "_getPinInnerCircle",
                    value: function (t) {
                      var e = t.x,
                        n = t.y,
                        r = t.height,
                        o = t.radius,
                        i = t.innerRadius,
                        a = t.stroke,
                        c = t.innerFill,
                        u = document.createElementNS("http://www.w3.org/2000/svg", "circle")
                      return Ke(u, "pin-inner-circle"), ce(u, {strokeWidth: 0, stroke: a, cx: e, cy: n - (r + o) / 2, r: i, fill: c}), u
                    },
                  },
                  {
                    key: "_handleUnitMouseover",
                    value: function (t) {
                      this.dragging || (this._options.hover && t.element.setAttribute("fill", this._options.hoverFill), this._options.tooltips && this._showTooltip(t))
                    },
                  },
                  {
                    key: "_handleUnitMouseout",
                    value: function (t) {
                      this._options.hover && (t.selected ? t.element.setAttribute("fill", this._options.selectFill) : t.fill ? t.element.setAttribute("fill", t.fill) : t.element.removeAttribute("fill")), this._options.tooltips && this._hideTooltip()
                    },
                  },
                  {
                    key: "_handleDragstart",
                    value: function (t) {
                      ;(t.touches && 1 < t.touches.length) || ((this._prevPosition = oe(t)), Ke(this._element, rr))
                    },
                  },
                  {
                    key: "_handleDrag",
                    value: function (t) {
                      var e, n, r, o
                      ;(t.touches && 1 < t.touches.length) ||
                        (this._prevPosition &&
                          (t.preventDefault(),
                          (e = oe(t)),
                          (n = this._getValueInMapBoundry(((r = e), (o = this._prevPosition), {x: r.x - o.x, y: r.y - o.y}))),
                          (this._x = n.x),
                          (this._y = n.y),
                          (this._prevPosition = e),
                          this._updateMapTransform(),
                          this._updateMarkerTooltips()))
                    },
                  },
                  {
                    key: "_handleDragend",
                    value: function () {
                      ;(this._prevPosition = null), Xe(this._element, rr)
                    },
                  },
                  {
                    key: "_handleTouchstart",
                    value: function (t) {
                      if (1 < t.touches.length) return (this._vector = ie(t)), (this._origin = fe({}, this._vector.center)), void this._updateTransformOrigin()
                      this._handleDragstart(t)
                    },
                  },
                  {
                    key: "_handleTouchmove",
                    value: function (t) {
                      if (1 < t.touches.length && this._vector) {
                        t.preventDefault(), t.stopPropagation()
                        var e = ie(t),
                          n = e.length / this._vector.length,
                          r = this._scale * (n - 1)
                        return this._zoom(r), void (this._vector = e)
                      }
                      this._handleDrag(t)
                    },
                  },
                  {
                    key: "_handleTouchend",
                    value: function (t) {
                      1 < t.touches.length ? (this._vector = null) : this._handleDragend()
                    },
                  },
                  {
                    key: "_handleWheel",
                    value: function (t) {
                      t.preventDefault()
                      var e = oe(t),
                        n = (t.deltaY < 0 ? 1 : -1) * this._options.zoomStep
                      this._allowZoom(n) && ((this._origin = this._getOrigin(e)), this._updateTransformOrigin(), this._setInitialMapPosition(), this._updateMapTransform(), this._zoom(n))
                    },
                  },
                  {
                    key: "_handlePinch",
                    value: function (t) {
                      var e = this._scale * (t.ratio - 1)
                      this._allowZoom(e) && ((this._origin = this._getOrigin(t.origin)), this._updateTransformOrigin(), this._setInitialMapPosition(), this._updateMapTransform(), this._zoom(e))
                    },
                  },
                  {
                    key: "_hideTooltip",
                    value: function () {
                      Xe(this._tooltip, "show")
                    },
                  },
                  {
                    key: "_showTooltip",
                    value: function (t) {
                      var e = this
                      ;(this._tooltip.innerHTML = "<strong>".concat(t.title, "</strong>\n    <div>").concat(t.tooltip || "", "</div>")),
                        Ke(this._tooltip, "show"),
                        hn.on(t.element, "mousemove", function (n) {
                          var r = n.clientX,
                            o = n.clientY
                          ;(e._virtualElement.getBoundingClientRect = ue(r, o)), (e._virtualElement.contextElement = t.element), e._popper.update()
                        })
                    },
                  },
                  {
                    key: "_selectUnit",
                    value: function (t, e, n) {
                      var r = 2 < arguments.length && void 0 !== n && n
                      null !== this._selection && ((this.selectedUnit.selected = !1), this.selectedUnit.fill ? this.selectedUnit.element.setAttribute("fill", this.selectedUnit.fill) : this.selectedUnit.element.removeAttribute("fill")),
                        this._selection !== e || r ? ((this._selection = e), (this.selectedUnit.selected = !0), t.element.setAttribute("fill", this._options.selectFill)) : (this._selection = null),
                        hn.trigger(this._element, "select.psa.vectorMap", {selected: this.selectedUnit})
                    },
                  },
                  {
                    key: "_setUnitsData",
                    value: function () {
                      var t = this
                      this._options.colorMap.forEach(function (e) {
                        e.regions.forEach(function (n) {
                          var r = n.tooltip || "",
                            o = t._mapUnits.find(function (t) {
                              return "string" == typeof n ? t.id === n : t.id === n.id
                            })
                          o && ((o.fill = e.fill), (o.tooltip = r))
                        })
                      })
                    },
                  },
                  {
                    key: "_setInitialMapPosition",
                    value: function () {
                      ;(this._x = 0), (this._y = 0)
                    },
                  },
                  {
                    key: "_setActiveMarker",
                    value: function (t) {
                      t !== this._activeMarkerIndex ? (this._activeMarkerIndex = t) : (this._activeMarkerIndex = -1), hn.trigger(this._element, "markerClick.psa.vectorMap", {marker: this.activeMarker})
                    },
                  },
                  {
                    key: "_setup",
                    value: function () {
                      Ke(this._element, "vector-map"),
                        this._renderMap(),
                        this._setupSVGProperties(),
                        this._setupToolbar(),
                        this._setupMapPosition(),
                        (this._mapUnits = this._getMapUnits()),
                        this._setupMapUnits(),
                        this._setupTouch(),
                        this._options.tooltips && this._setupTooltips(),
                        this._setupMarkers(),
                        this._setupEventListeners()
                    },
                  },
                  {
                    key: "_setupToolbar",
                    value: function () {
                      ;(this._toolbar = this._getToolbar()), this._element.appendChild(this._toolbar), (this._zoomInBtn = yn(".zoom-in", this._element)), (this._zoomOutBtn = yn(".zoom-out", this._element)), this._toggleZoomBtns()
                    },
                  },
                  {
                    key: "_setupMapPosition",
                    value: function () {
                      ;(this._origin = re(this.mapRect)), this._updateTransformOrigin(), this._setInitialMapPosition(), this._updateMapTransform()
                    },
                  },
                  {
                    key: "_setupMapUnits",
                    value: function (t) {
                      var e = this,
                        n = 0 < arguments.length && void 0 !== t && t
                      this._setUnitsData(),
                        this._mapUnits.forEach(function (t, r) {
                          e._options.selectRegion === t.id ? e._selectUnit(t, r, n) : t.fill && t.element.setAttribute("fill", t.fill)
                        })
                    },
                  },
                  {
                    key: "_setupTouch",
                    value: function () {
                      ;(this._touch = new Jn(this._svgMap, "pinch")), this._touch.init()
                    },
                  },
                  {
                    key: "_setupSVGProperties",
                    value: function () {
                      var t = this,
                        e = {}
                      ar.forEach(function (n) {
                        var r = ae(n),
                          o = t._options[n]
                        "strokeWidth" === n ? (e[r] = o / t._scale) : null !== o && (e[r] = o)
                      }),
                        Ve(this._svgMap, e)
                    },
                  },
                  {
                    key: "_setupEventListeners",
                    value: function () {
                      var t = this
                      this._mapUnits.forEach(function (e, n) {
                        t._options.readonly ||
                          hn.on(e.element, "click", function () {
                            return t._selectUnit(e, n)
                          }),
                          t.hoverEvents &&
                            (hn.on(e.element, "mouseover", function () {
                              return t._handleUnitMouseover(e)
                            }),
                            hn.on(e.element, "mouseout", function () {
                              return t._handleUnitMouseout(e)
                            }))
                      }),
                        hn.on(this._svgMap, "mousedown", this._mousedownHandler),
                        hn.on(window, "mousemove", this._mousemoveHandler),
                        hn.on(window, "mouseup", this._mouseupHandler),
                        hn.on(this._element, "touchstart", this._mousedownHandler),
                        window.addEventListener("touchmove", this._mousemoveHandler, {passive: !1}),
                        hn.on(window, "touchend", this._mouseupHandler),
                        hn.on(this._zoomInBtn, "click", function (e) {
                          e.preventDefault(), t._zoom(t._options.zoomStep)
                        }),
                        hn.on(this._zoomOutBtn, "click", function (e) {
                          e.preventDefault(), t._zoom(-1 * t._options.zoomStep)
                        }),
                        this._options.zoomEvents && (hn.on(this._element, "wheel", this._wheelHandler), hn.on(this._svgMap, "pinch", this._pinchHandler)),
                        this._markers.forEach(function (e, n) {
                          hn.on(e.node, "click", function () {
                            return t._setActiveMarker(n)
                          })
                        })
                    },
                  },
                  {
                    key: "_setupTooltips",
                    value: function () {
                      ;(this._tooltip = H("div")), Ke(this._tooltip, "vector-map-tooltip"), this._element.appendChild(this._tooltip), (this._virtualElement = {getBoundingClientRect: ue()}), (this._popper = Le(this._virtualElement, this._tooltip))
                    },
                  },
                  {
                    key: "_setupMarkers",
                    value: function () {
                      var t = this
                      ;(this._markers = this._options.markers.map(function (e) {
                        var n = fe(
                          fe({r: 5, x: 0, y: 0}, e),
                          {},
                          {fill: e.fill || t._options.markerFill, stroke: e.stroke || t._options.markerStroke, innerFill: e.innerFill || t._options.markerInnerFill, strokeWidth: e.strokeWidth || t._options.markerStrokeWidth}
                        )
                        return (
                          "bullet" === e.type ? ((n.node = t._getBullet(n)), (n.tooltipNode = n.node), (n.animationNode = t._getBullet(n, !0))) : ((n.node = t._getPin(n)), (n.tooltipNode = yn("path", n.node))),
                          n.label && (n.tooltip = new psa.Tooltip(n.tooltipNode, {title: n.label, container: t._element})),
                          n
                        )
                      })),
                        this._markers.forEach(function (e) {
                          "bullet" === e.type && t._svgMap.appendChild(e.animationNode), Ke(e.node, "vector-map-marker"), t._svgMap.appendChild(e.node)
                        })
                    },
                  },
                  {
                    key: "_renderMap",
                    value: function () {
                      ;(this._svgMap = yn("svg", this._element)), this._svgMap || ((this._svgMap = this._getSVGMap()), this._element.appendChild(this._svgMap))
                    },
                  },
                  {
                    key: "_removeEventHandlers",
                    value: function () {
                      var t = this
                      this._mapUnits.forEach(function (e) {
                        hn.off(e.element, "click"), t.hoverEvents && (hn.off(e.element, "mouseover"), hn.off(e.element, "mouseout"))
                      }),
                        hn.off(this._svgMap, "mousedown", this._mousedownHandler),
                        hn.off(window, "mousemove", this._mousemoveHandler),
                        hn.off(window, "mouseup", this._mouseupHandler),
                        hn.off(this._svgMap, "touchstart", this._mousedownHandler),
                        window.removeEventListener("touchmove", this._mousemoveHandler, {passive: !1}),
                        hn.off(window, "touchend", this._mouseupHandler),
                        hn.off(this._zoomInBtn, "click"),
                        hn.off(this._zoomOutBtn, "click"),
                        this._options.zoomEvents && (hn.off(this._element, "wheel", this._wheelHandler), hn.off(this._svgMap, "pinch", this._pinchHandler)),
                        this._markers.forEach(function (t) {
                          hn.off(t.node, "click")
                        })
                    },
                  },
                  {
                    key: "_toggleZoomBtns",
                    value: function () {
                      var t = this._options,
                        e = t.zoomMin,
                        n = t.zoomMax
                      this._scale === e ? this._zoomOutBtn.setAttribute("disabled", !0) : this._zoomOutBtn.removeAttribute("disabled"), this._scale === n ? this._zoomInBtn.setAttribute("disabled", !0) : this._zoomInBtn.removeAttribute("disabled")
                    },
                  },
                  {
                    key: "_updateMapTransform",
                    value: function () {
                      this._svgMap.style.transform = "matrix(".concat(this._scale, ", 0, 0, ").concat(this._scale, ", ").concat(this._x, ", ").concat(this._y, ")")
                    },
                  },
                  {
                    key: "_updateTransformOrigin",
                    value: function () {
                      this._svgMap.style.transformOrigin = "".concat(this._origin.x, "px ").concat(this._origin.y, "px")
                    },
                  },
                  {
                    key: "_updateMarkers",
                    value: function () {
                      var t = this
                      this._markers.forEach(function (e) {
                        "bullet" === e.type ? t._updateBullet(e) : t._updatePin(e)
                      })
                    },
                  },
                  {
                    key: "_updateMarkerTooltips",
                    value: function () {
                      this._markers.forEach(function (t) {
                        t.tooltip && t.tooltip.update()
                      })
                    },
                  },
                  {
                    key: "_updatePin",
                    value: function (t) {
                      var e = t.x,
                        n = t.y,
                        r = t.node,
                        o = t.strokeWidth,
                        i = this.pin,
                        a = i.height,
                        c = i.radius,
                        u = i.innerRadius,
                        s = yn("path", r),
                        l = yn(".pin-inner-circle", r),
                        f = yn(".pin-shadow-circle", r),
                        p = o / this._scale
                      ce(s, {d: this._getPinPath({height: a, radius: c, x: e, y: n}), strokeWidth: p}), ce(l, {cy: n - (a + c) / 2, r: u}), ce(f, {r: u / 2})
                    },
                  },
                  {
                    key: "_updateBullet",
                    value: function (t) {
                      var e = t.node,
                        n = t.animationNode,
                        r = t.r / this._scale,
                        o = yn("animate", n)
                      ce(o, {
                        values: ""
                          .concat(r, ";")
                          .concat(5 * r, ";")
                          .concat(r),
                      }),
                        ce(e, {r: r}),
                        ce(n, {r: r})
                    },
                  },
                  {
                    key: "_zoom",
                    value: function (t) {
                      var e = this._scale + t
                      e <= this._options.zoomMin
                        ? ((this._scale = this._options.zoomMin), (this._origin = this._getValueInMapBoundry(re(this.elementRect))), this._updateTransformOrigin(), this._updateMapTransform(), this._setInitialMapPosition())
                        : null !== this._options.zoomMax && e >= this._options.zoomMax
                        ? (this._scale = this._options.zoomMax)
                        : (this._scale = e),
                        this._toggleZoomBtns(),
                        this._updateMapTransform(),
                        this._updateMarkers(),
                        this._updateMarkerTooltips(),
                        (this._svgMap.style.strokeWidth = this._options.strokeWidth / this._scale)
                    },
                  },
                  {
                    key: "activeMarker",
                    get: function () {
                      var t = this
                      return this._markers.find(function (e, n) {
                        return n === t._activeMarkerIndex
                      })
                    },
                  },
                  {
                    key: "dragging",
                    get: function () {
                      return null !== this._prevPosition
                    },
                  },
                  {
                    key: "elementRect",
                    get: function () {
                      return this._element.getBoundingClientRect()
                    },
                  },
                  {
                    key: "hoverEvents",
                    get: function () {
                      return this._options.hover || this._options.tooltips
                    },
                  },
                  {
                    key: "mapRect",
                    get: function () {
                      return this._svgMap.getBoundingClientRect()
                    },
                  },
                  {
                    key: "pin",
                    get: function () {
                      return {height: 40 / this._scale, radius: 14 / this._scale, innerRadius: (14 / this._scale) * 0.5}
                    },
                  },
                  {
                    key: "selectedUnit",
                    get: function () {
                      return this._mapUnits[this._selection]
                    },
                  },
                ]) && pe(e.prototype, n),
                r && pe(e, r),
                t
              )
            })()
          gn(".vector-map").forEach(function (t) {
            return cr.getInstance(t) || new cr(t)
          }),
            (tr = function () {
              var t,
                e = U()
              e &&
                ((t = e.fn[er]),
                (e.fn[er] = cr.jQueryInterface),
                (e.fn[er].Constructor = cr),
                (e.fn[er].noConflict = function () {
                  return (e.fn[er] = t), cr.jQueryInterface
                }))
            }),
            "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", tr) : tr(),
            (e.default = cr)
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
    t((t.s = 145))
  )
  var e, n
})()