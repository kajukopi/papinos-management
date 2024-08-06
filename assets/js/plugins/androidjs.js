var front = (function (t) {
  var e = {}
  function n(r) {
    if (e[r]) return e[r].exports
    var o = (e[r] = {i: r, l: !1, exports: {}})
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
  }
  return (
    (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t
      if (4 & e && "object" == typeof t && t && t.__esModule) return t
      var r = Object.create(null)
      if ((n.r(r), Object.defineProperty(r, "default", {enumerable: !0, value: t}), 2 & e && "string" != typeof t))
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e]
            }.bind(null, o)
          )
      return r
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default
            }
          : function () {
              return t
            }
      return n.d(e, "a", e), e
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (n.p = ""),
    n((n.s = 0))
  )
})([
  function (t, e, n) {
    "use strict"
    var r =
      (this && this.__spreadArrays) ||
      function () {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length
        var r = Array(t),
          o = 0
        for (e = 0; e < n; e++) for (var i = arguments[e], s = 0, a = i.length; s < a; s++, o++) r[o] = i[s]
        return r
      }
    Object.defineProperty(e, "__esModule", {value: !0}), (e.send = e.on = void 0)
    var o = n(1)("http://localhost:3000"),
      i = {}
    function s(t) {
      for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
      var r = i[t]
      r &&
        r.forEach(function (t) {
          t.apply(void 0, e)
        })
    }
    ;(e.on = function (t, e) {
      !(function (t, e) {
        ;(i[t] = i[t] || []), i[t].push(e)
      })(t, e)
    }),
      (e.send = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
        o.emit.apply(o, r(["response-from-front", t], e))
      }),
      o.on("response-from-back", function (t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
        s.apply(void 0, r([t], e))
      })
  },
  function (t, e, n) {
    ;(function (e) {
      /*!
       * Socket.IO v2.2.0
       * (c) 2014-2018 Guillermo Rauch
       * Released under the MIT License.
       */
      t.exports = (function (t) {
        function e(r) {
          if (n[r]) return n[r].exports
          var o = (n[r] = {exports: {}, id: r, loaded: !1})
          return t[r].call(o.exports, o, o.exports, e), (o.loaded = !0), o.exports
        }
        var n = {}
        return (e.m = t), (e.c = n), (e.p = ""), e(0)
      })([
        function (t, e, n) {
          "use strict"
          function r(t, e) {
            "object" === (void 0 === t ? "undefined" : o(t)) && ((e = t), (t = void 0)), (e = e || {})
            var n,
              r = i(t),
              s = r.source,
              u = r.id,
              h = r.path,
              f = p[u] && h in p[u].nsps
            return (
              e.forceNew || e["force new connection"] || !1 === e.multiplex || f ? (c("ignoring socket cache for %s", s), (n = a(s, e))) : (p[u] || (c("new io instance for %s", s), (p[u] = a(s, e))), (n = p[u])),
              r.query && !e.query && (e.query = r.query),
              n.socket(r.path, e)
            )
          }
          var o =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                  },
            i = n(1),
            s = n(7),
            a = n(12),
            c = n(3)("socket.io-client")
          t.exports = e = r
          var p = (e.managers = {})
          ;(e.protocol = s.protocol), (e.connect = r), (e.Manager = n(12)), (e.Socket = n(36))
        },
        function (t, e, n) {
          "use strict"
          var r = n(2),
            o = n(3)("socket.io-client:url")
          t.exports = function (t, e) {
            var n = t
            ;(e = e || ("undefined" != typeof location && location)),
              null == t && (t = e.protocol + "//" + e.host),
              "string" == typeof t &&
                ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t),
                /^(https?|wss?):\/\//.test(t) || (o("protocol-less url %s", t), (t = void 0 !== e ? e.protocol + "//" + t : "https://" + t)),
                o("parse %s", t),
                (n = r(t))),
              n.port || (/^(http|ws)$/.test(n.protocol) ? (n.port = "80") : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")),
              (n.path = n.path || "/")
            var i = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host
            return (n.id = n.protocol + "://" + i + ":" + n.port), (n.href = n.protocol + "://" + i + (e && e.port === n.port ? "" : ":" + n.port)), n
          }
        },
        function (t, e) {
          var n =
              /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"]
          t.exports = function (t) {
            var e = t,
              o = t.indexOf("["),
              i = t.indexOf("]")
            ;-1 != o && -1 != i && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length))
            for (var s = n.exec(t || ""), a = {}, c = 14; c--; ) a[r[c]] = s[c] || ""
            return -1 != o && -1 != i && ((a.source = e), (a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":")), (a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":")), (a.ipv6uri = !0)), a
          }
        },
        function (t, e, n) {
          ;(function (r) {
            function o() {
              var t
              try {
                t = e.storage.debug
              } catch (t) {}
              return !t && void 0 !== r && "env" in r && (t = r.env.DEBUG), t
            }
            ;((e = t.exports = n(5)).log = function () {
              return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }),
              (e.formatArgs = function (t) {
                var n = this.useColors
                if (((t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff)), n)) {
                  var r = "color: " + this.color
                  t.splice(1, 0, r, "color: inherit")
                  var o = 0,
                    i = 0
                  t[0].replace(/%[a-zA-Z%]/g, function (t) {
                    "%%" !== t && (o++, "%c" === t && (i = o))
                  }),
                    t.splice(i, 0, r)
                }
              }),
              (e.save = function (t) {
                try {
                  null == t ? e.storage.removeItem("debug") : (e.storage.debug = t)
                } catch (t) {}
              }),
              (e.load = o),
              (e.useColors = function () {
                return (
                  !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) ||
                  (("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) &&
                    (("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
                      ("undefined" != typeof window && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
                      ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
                      ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))))
                )
              }),
              (e.storage =
                "undefined" != typeof chrome && void 0 !== chrome.storage
                  ? chrome.storage.local
                  : (function () {
                      try {
                        return window.localStorage
                      } catch (t) {}
                    })()),
              (e.colors = [
                "#0000CC",
                "#0000FF",
                "#0033CC",
                "#0033FF",
                "#0066CC",
                "#0066FF",
                "#0099CC",
                "#0099FF",
                "#00CC00",
                "#00CC33",
                "#00CC66",
                "#00CC99",
                "#00CCCC",
                "#00CCFF",
                "#3300CC",
                "#3300FF",
                "#3333CC",
                "#3333FF",
                "#3366CC",
                "#3366FF",
                "#3399CC",
                "#3399FF",
                "#33CC00",
                "#33CC33",
                "#33CC66",
                "#33CC99",
                "#33CCCC",
                "#33CCFF",
                "#6600CC",
                "#6600FF",
                "#6633CC",
                "#6633FF",
                "#66CC00",
                "#66CC33",
                "#9900CC",
                "#9900FF",
                "#9933CC",
                "#9933FF",
                "#99CC00",
                "#99CC33",
                "#CC0000",
                "#CC0033",
                "#CC0066",
                "#CC0099",
                "#CC00CC",
                "#CC00FF",
                "#CC3300",
                "#CC3333",
                "#CC3366",
                "#CC3399",
                "#CC33CC",
                "#CC33FF",
                "#CC6600",
                "#CC6633",
                "#CC9900",
                "#CC9933",
                "#CCCC00",
                "#CCCC33",
                "#FF0000",
                "#FF0033",
                "#FF0066",
                "#FF0099",
                "#FF00CC",
                "#FF00FF",
                "#FF3300",
                "#FF3333",
                "#FF3366",
                "#FF3399",
                "#FF33CC",
                "#FF33FF",
                "#FF6600",
                "#FF6633",
                "#FF9900",
                "#FF9933",
                "#FFCC00",
                "#FFCC33",
              ]),
              (e.formatters.j = function (t) {
                try {
                  return JSON.stringify(t)
                } catch (t) {
                  return "[UnexpectedJSONParseError]: " + t.message
                }
              }),
              e.enable(o())
          }).call(e, n(4))
        },
        function (t, e) {
          function n() {
            throw new Error("setTimeout has not been defined")
          }
          function r() {
            throw new Error("clearTimeout has not been defined")
          }
          function o(t) {
            if (p === setTimeout) return setTimeout(t, 0)
            if ((p === n || !p) && setTimeout) return (p = setTimeout), setTimeout(t, 0)
            try {
              return p(t, 0)
            } catch (e) {
              try {
                return p.call(null, t, 0)
              } catch (e) {
                return p.call(this, t, 0)
              }
            }
          }
          function i() {
            d && f && ((d = !1), f.length ? (l = f.concat(l)) : (y = -1), l.length && s())
          }
          function s() {
            if (!d) {
              var t = o(i)
              d = !0
              for (var e = l.length; e; ) {
                for (f = l, l = []; ++y < e; ) f && f[y].run()
                ;(y = -1), (e = l.length)
              }
              ;(f = null),
                (d = !1),
                (function (t) {
                  if (u === clearTimeout) return clearTimeout(t)
                  if ((u === r || !u) && clearTimeout) return (u = clearTimeout), clearTimeout(t)
                  try {
                    u(t)
                  } catch (e) {
                    try {
                      return u.call(null, t)
                    } catch (e) {
                      return u.call(this, t)
                    }
                  }
                })(t)
            }
          }
          function a(t, e) {
            ;(this.fun = t), (this.array = e)
          }
          function c() {}
          var p,
            u,
            h = (t.exports = {})
          !(function () {
            try {
              p = "function" == typeof setTimeout ? setTimeout : n
            } catch (t) {
              p = n
            }
            try {
              u = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (t) {
              u = r
            }
          })()
          var f,
            l = [],
            d = !1,
            y = -1
          ;(h.nextTick = function (t) {
            var e = new Array(arguments.length - 1)
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]
            l.push(new a(t, e)), 1 !== l.length || d || o(s)
          }),
            (a.prototype.run = function () {
              this.fun.apply(null, this.array)
            }),
            (h.title = "browser"),
            (h.browser = !0),
            (h.env = {}),
            (h.argv = []),
            (h.version = ""),
            (h.versions = {}),
            (h.on = c),
            (h.addListener = c),
            (h.once = c),
            (h.off = c),
            (h.removeListener = c),
            (h.removeAllListeners = c),
            (h.emit = c),
            (h.prependListener = c),
            (h.prependOnceListener = c),
            (h.listeners = function (t) {
              return []
            }),
            (h.binding = function (t) {
              throw new Error("process.binding is not supported")
            }),
            (h.cwd = function () {
              return "/"
            }),
            (h.chdir = function (t) {
              throw new Error("process.chdir is not supported")
            }),
            (h.umask = function () {
              return 0
            })
        },
        function (t, e, n) {
          function r(t) {
            function n() {
              if (n.enabled) {
                var t = n,
                  o = +new Date(),
                  i = o - (r || o)
                ;(t.diff = i), (t.prev = r), (t.curr = o), (r = o)
                for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a]
                ;(s[0] = e.coerce(s[0])), "string" != typeof s[0] && s.unshift("%O")
                var c = 0
                ;(s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, r) {
                  if ("%%" === n) return n
                  c++
                  var o = e.formatters[r]
                  if ("function" == typeof o) {
                    var i = s[c]
                    ;(n = o.call(t, i)), s.splice(c, 1), c--
                  }
                  return n
                })),
                  e.formatArgs.call(t, s)
                var p = n.log || e.log || console.log.bind(console)
                p.apply(t, s)
              }
            }
            var r
            return (
              (n.namespace = t),
              (n.enabled = e.enabled(t)),
              (n.useColors = e.useColors()),
              (n.color = (function (t) {
                var n,
                  r = 0
                for (n in t) (r = (r << 5) - r + t.charCodeAt(n)), (r |= 0)
                return e.colors[Math.abs(r) % e.colors.length]
              })(t)),
              (n.destroy = o),
              "function" == typeof e.init && e.init(n),
              e.instances.push(n),
              n
            )
          }
          function o() {
            var t = e.instances.indexOf(this)
            return -1 !== t && (e.instances.splice(t, 1), !0)
          }
          ;((e = t.exports = r.debug = r.default = r).coerce = function (t) {
            return t instanceof Error ? t.stack || t.message : t
          }),
            (e.disable = function () {
              e.enable("")
            }),
            (e.enable = function (t) {
              e.save(t), (e.names = []), (e.skips = [])
              var n,
                r = ("string" == typeof t ? t : "").split(/[\s,]+/),
                o = r.length
              for (n = 0; n < o; n++) r[n] && ("-" === (t = r[n].replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")))
              for (n = 0; n < e.instances.length; n++) {
                var i = e.instances[n]
                i.enabled = e.enabled(i.namespace)
              }
            }),
            (e.enabled = function (t) {
              if ("*" === t[t.length - 1]) return !0
              var n, r
              for (n = 0, r = e.skips.length; n < r; n++) if (e.skips[n].test(t)) return !1
              for (n = 0, r = e.names.length; n < r; n++) if (e.names[n].test(t)) return !0
              return !1
            }),
            (e.humanize = n(6)),
            (e.instances = []),
            (e.names = []),
            (e.skips = []),
            (e.formatters = {})
        },
        function (t, e) {
          function n(t) {
            return r(t, a, "day") || r(t, s, "hour") || r(t, i, "minute") || r(t, o, "second") || t + " ms"
          }
          function r(t, e, n) {
            if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
          }
          var o = 1e3,
            i = 60 * o,
            s = 60 * i,
            a = 24 * s,
            c = 365.25 * a
          t.exports = function (t, e) {
            e = e || {}
            var r = typeof t
            if ("string" === r && t.length > 0)
              return (function (t) {
                if (!((t = String(t)).length > 100)) {
                  var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t)
                  if (e) {
                    var n = parseFloat(e[1])
                    switch ((e[2] || "ms").toLowerCase()) {
                      case "years":
                      case "year":
                      case "yrs":
                      case "yr":
                      case "y":
                        return n * c
                      case "days":
                      case "day":
                      case "d":
                        return n * a
                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                        return n * s
                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                        return n * i
                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                        return n * o
                      case "milliseconds":
                      case "millisecond":
                      case "msecs":
                      case "msec":
                      case "ms":
                        return n
                      default:
                        return
                    }
                  }
                }
              })(t)
            if ("number" === r && !1 === isNaN(t))
              return e.long
                ? n(t)
                : (function (t) {
                    return t >= a ? Math.round(t / a) + "d" : t >= s ? Math.round(t / s) + "h" : t >= i ? Math.round(t / i) + "m" : t >= o ? Math.round(t / o) + "s" : t + "ms"
                  })(t)
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
          }
        },
        function (t, e, n) {
          function r() {}
          function o(t) {
            var n = "" + t.type
            if (((e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type) || (n += t.attachments + "-"), t.nsp && "/" !== t.nsp && (n += t.nsp + ","), null != t.id && (n += t.id), null != t.data)) {
              var r = (function (t) {
                try {
                  return JSON.stringify(t)
                } catch (t) {
                  return !1
                }
              })(t.data)
              if (!1 === r) return d
              n += r
            }
            return p("encoded %j as %s", t, n), n
          }
          function i() {
            this.reconstructor = null
          }
          function s(t) {
            var n = 0,
              r = {type: Number(t.charAt(0))}
            if (null == e.types[r.type]) return c("unknown packet type " + r.type)
            if (e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type) {
              for (var o = ""; "-" !== t.charAt(++n) && ((o += t.charAt(n)), n != t.length); );
              if (o != Number(o) || "-" !== t.charAt(n)) throw new Error("Illegal attachments")
              r.attachments = Number(o)
            }
            if ("/" === t.charAt(n + 1)) for (r.nsp = ""; ++n && "," !== (s = t.charAt(n)) && ((r.nsp += s), n !== t.length); );
            else r.nsp = "/"
            var i = t.charAt(n + 1)
            if ("" !== i && Number(i) == i) {
              for (r.id = ""; ++n; ) {
                var s
                if (null == (s = t.charAt(n)) || Number(s) != s) {
                  --n
                  break
                }
                if (((r.id += t.charAt(n)), n === t.length)) break
              }
              r.id = Number(r.id)
            }
            if (t.charAt(++n)) {
              var a = (function (t) {
                try {
                  return JSON.parse(t)
                } catch (t) {
                  return !1
                }
              })(t.substr(n))
              if (!1 === a || (r.type !== e.ERROR && !f(a))) return c("invalid payload")
              r.data = a
            }
            return p("decoded %s as %j", t, r), r
          }
          function a(t) {
            ;(this.reconPack = t), (this.buffers = [])
          }
          function c(t) {
            return {type: e.ERROR, data: "parser error: " + t}
          }
          var p = n(3)("socket.io-parser"),
            u = n(8),
            h = n(9),
            f = n(10),
            l = n(11)
          ;(e.protocol = 4),
            (e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"]),
            (e.CONNECT = 0),
            (e.DISCONNECT = 1),
            (e.EVENT = 2),
            (e.ACK = 3),
            (e.ERROR = 4),
            (e.BINARY_EVENT = 5),
            (e.BINARY_ACK = 6),
            (e.Encoder = r),
            (e.Decoder = i)
          var d = e.ERROR + '"encode error"'
          ;(r.prototype.encode = function (t, n) {
            p("encoding packet %j", t),
              e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type
                ? (function (t, e) {
                    h.removeBlobs(t, function (t) {
                      var n = h.deconstructPacket(t),
                        r = o(n.packet),
                        i = n.buffers
                      i.unshift(r), e(i)
                    })
                  })(t, n)
                : n([o(t)])
          }),
            u(i.prototype),
            (i.prototype.add = function (t) {
              var n
              if ("string" == typeof t) (n = s(t)), e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type ? ((this.reconstructor = new a(n)), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n)
              else {
                if (!l(t) && !t.base64) throw new Error("Unknown type: " + t)
                if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet")
                ;(n = this.reconstructor.takeBinaryData(t)) && ((this.reconstructor = null), this.emit("decoded", n))
              }
            }),
            (i.prototype.destroy = function () {
              this.reconstructor && this.reconstructor.finishedReconstruction()
            }),
            (a.prototype.takeBinaryData = function (t) {
              if ((this.buffers.push(t), this.buffers.length === this.reconPack.attachments)) {
                var e = h.reconstructPacket(this.reconPack, this.buffers)
                return this.finishedReconstruction(), e
              }
              return null
            }),
            (a.prototype.finishedReconstruction = function () {
              ;(this.reconPack = null), (this.buffers = [])
            })
        },
        function (t, e, n) {
          function r(t) {
            if (t)
              return (function (t) {
                for (var e in r.prototype) t[e] = r.prototype[e]
                return t
              })(t)
          }
          ;(t.exports = r),
            (r.prototype.on = r.prototype.addEventListener =
              function (t, e) {
                return (this._callbacks = this._callbacks || {}), (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
              }),
            (r.prototype.once = function (t, e) {
              function n() {
                this.off(t, n), e.apply(this, arguments)
              }
              return (n.fn = e), this.on(t, n), this
            }),
            (r.prototype.off =
              r.prototype.removeListener =
              r.prototype.removeAllListeners =
              r.prototype.removeEventListener =
                function (t, e) {
                  if (((this._callbacks = this._callbacks || {}), 0 == arguments.length)) return (this._callbacks = {}), this
                  var n = this._callbacks["$" + t]
                  if (!n) return this
                  if (1 == arguments.length) return delete this._callbacks["$" + t], this
                  for (var r, o = 0; o < n.length; o++)
                    if ((r = n[o]) === e || r.fn === e) {
                      n.splice(o, 1)
                      break
                    }
                  return this
                }),
            (r.prototype.emit = function (t) {
              this._callbacks = this._callbacks || {}
              var e = [].slice.call(arguments, 1),
                n = this._callbacks["$" + t]
              if (n) for (var r = 0, o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, e)
              return this
            }),
            (r.prototype.listeners = function (t) {
              return (this._callbacks = this._callbacks || {}), this._callbacks["$" + t] || []
            }),
            (r.prototype.hasListeners = function (t) {
              return !!this.listeners(t).length
            })
        },
        function (t, e, n) {
          var r = n(10),
            o = n(11),
            i = Object.prototype.toString,
            s = "function" == typeof Blob || ("undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob)),
            a = "function" == typeof File || ("undefined" != typeof File && "[object FileConstructor]" === i.call(File))
          ;(e.deconstructPacket = function (t) {
            var e = [],
              n = t.data,
              i = t
            return (
              (i.data = (function t(e, n) {
                if (!e) return e
                if (o(e)) {
                  var i = {_placeholder: !0, num: n.length}
                  return n.push(e), i
                }
                if (r(e)) {
                  for (var s = new Array(e.length), a = 0; a < e.length; a++) s[a] = t(e[a], n)
                  return s
                }
                if ("object" == typeof e && !(e instanceof Date)) {
                  for (var c in ((s = {}), e)) s[c] = t(e[c], n)
                  return s
                }
                return e
              })(n, e)),
              (i.attachments = e.length),
              {packet: i, buffers: e}
            )
          }),
            (e.reconstructPacket = function (t, e) {
              return (
                (t.data = (function t(e, n) {
                  if (!e) return e
                  if (e && e._placeholder) return n[e.num]
                  if (r(e)) for (var o = 0; o < e.length; o++) e[o] = t(e[o], n)
                  else if ("object" == typeof e) for (var i in e) e[i] = t(e[i], n)
                  return e
                })(t.data, e)),
                (t.attachments = void 0),
                t
              )
            }),
            (e.removeBlobs = function (t, e) {
              var n = 0,
                i = t
              ;(function t(c, p, u) {
                if (!c) return c
                if ((s && c instanceof Blob) || (a && c instanceof File)) {
                  n++
                  var h = new FileReader()
                  ;(h.onload = function () {
                    u ? (u[p] = this.result) : (i = this.result), --n || e(i)
                  }),
                    h.readAsArrayBuffer(c)
                } else if (r(c)) for (var f = 0; f < c.length; f++) t(c[f], f, c)
                else if ("object" == typeof c && !o(c)) for (var l in c) t(c[l], l, c)
              })(i),
                n || e(i)
            })
        },
        function (t, e) {
          var n = {}.toString
          t.exports =
            Array.isArray ||
            function (t) {
              return "[object Array]" == n.call(t)
            }
        },
        function (t, n) {
          t.exports = function (t) {
            return (r && e.isBuffer(t)) || (o && (t instanceof ArrayBuffer || i(t)))
          }
          var r = "function" == typeof e && "function" == typeof e.isBuffer,
            o = "function" == typeof ArrayBuffer,
            i = function (t) {
              return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
            }
        },
        function (t, e, n) {
          "use strict"
          function r(t, e) {
            if (!(this instanceof r)) return new r(t, e)
            t && "object" === (void 0 === t ? "undefined" : o(t)) && ((e = t), (t = void 0)),
              ((e = e || {}).path = e.path || "/socket.io"),
              (this.nsps = {}),
              (this.subs = []),
              (this.opts = e),
              this.reconnection(!1 !== e.reconnection),
              this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
              this.reconnectionDelay(e.reconnectionDelay || 1e3),
              this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
              this.randomizationFactor(e.randomizationFactor || 0.5),
              (this.backoff = new l({min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor()})),
              this.timeout(null == e.timeout ? 2e4 : e.timeout),
              (this.readyState = "closed"),
              (this.uri = t),
              (this.connecting = []),
              (this.lastPing = null),
              (this.encoding = !1),
              (this.packetBuffer = [])
            var n = e.parser || c
            ;(this.encoder = new n.Encoder()), (this.decoder = new n.Decoder()), (this.autoConnect = !1 !== e.autoConnect), this.autoConnect && this.open()
          }
          var o =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                  },
            i = n(13),
            s = n(36),
            a = n(8),
            c = n(7),
            p = n(38),
            u = n(39),
            h = n(3)("socket.io-client:manager"),
            f = n(35),
            l = n(40),
            d = Object.prototype.hasOwnProperty
          ;(t.exports = r),
            (r.prototype.emitAll = function () {
              for (var t in (this.emit.apply(this, arguments), this.nsps)) d.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments)
            }),
            (r.prototype.updateSocketIds = function () {
              for (var t in this.nsps) d.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t))
            }),
            (r.prototype.generateId = function (t) {
              return ("/" === t ? "" : t + "#") + this.engine.id
            }),
            a(r.prototype),
            (r.prototype.reconnection = function (t) {
              return arguments.length ? ((this._reconnection = !!t), this) : this._reconnection
            }),
            (r.prototype.reconnectionAttempts = function (t) {
              return arguments.length ? ((this._reconnectionAttempts = t), this) : this._reconnectionAttempts
            }),
            (r.prototype.reconnectionDelay = function (t) {
              return arguments.length ? ((this._reconnectionDelay = t), this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay
            }),
            (r.prototype.randomizationFactor = function (t) {
              return arguments.length ? ((this._randomizationFactor = t), this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor
            }),
            (r.prototype.reconnectionDelayMax = function (t) {
              return arguments.length ? ((this._reconnectionDelayMax = t), this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax
            }),
            (r.prototype.timeout = function (t) {
              return arguments.length ? ((this._timeout = t), this) : this._timeout
            }),
            (r.prototype.maybeReconnectOnOpen = function () {
              !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
            }),
            (r.prototype.open = r.prototype.connect =
              function (t, e) {
                if ((h("readyState %s", this.readyState), ~this.readyState.indexOf("open"))) return this
                h("opening %s", this.uri), (this.engine = i(this.uri, this.opts))
                var n = this.engine,
                  r = this
                ;(this.readyState = "opening"), (this.skipReconnect = !1)
                var o = p(n, "open", function () {
                    r.onopen(), t && t()
                  }),
                  s = p(n, "error", function (e) {
                    if ((h("connect_error"), r.cleanup(), (r.readyState = "closed"), r.emitAll("connect_error", e), t)) {
                      var n = new Error("Connection error")
                      ;(n.data = e), t(n)
                    } else r.maybeReconnectOnOpen()
                  })
                if (!1 !== this._timeout) {
                  var a = this._timeout
                  h("connect attempt will timeout after %d", a)
                  var c = setTimeout(function () {
                    h("connect attempt timed out after %d", a), o.destroy(), n.close(), n.emit("error", "timeout"), r.emitAll("connect_timeout", a)
                  }, a)
                  this.subs.push({
                    destroy: function () {
                      clearTimeout(c)
                    },
                  })
                }
                return this.subs.push(o), this.subs.push(s), this
              }),
            (r.prototype.onopen = function () {
              h("open"), this.cleanup(), (this.readyState = "open"), this.emit("open")
              var t = this.engine
              this.subs.push(p(t, "data", u(this, "ondata"))),
                this.subs.push(p(t, "ping", u(this, "onping"))),
                this.subs.push(p(t, "pong", u(this, "onpong"))),
                this.subs.push(p(t, "error", u(this, "onerror"))),
                this.subs.push(p(t, "close", u(this, "onclose"))),
                this.subs.push(p(this.decoder, "decoded", u(this, "ondecoded")))
            }),
            (r.prototype.onping = function () {
              ;(this.lastPing = new Date()), this.emitAll("ping")
            }),
            (r.prototype.onpong = function () {
              this.emitAll("pong", new Date() - this.lastPing)
            }),
            (r.prototype.ondata = function (t) {
              this.decoder.add(t)
            }),
            (r.prototype.ondecoded = function (t) {
              this.emit("packet", t)
            }),
            (r.prototype.onerror = function (t) {
              h("error", t), this.emitAll("error", t)
            }),
            (r.prototype.socket = function (t, e) {
              function n() {
                ~f(o.connecting, r) || o.connecting.push(r)
              }
              var r = this.nsps[t]
              if (!r) {
                ;(r = new s(this, t, e)), (this.nsps[t] = r)
                var o = this
                r.on("connecting", n),
                  r.on("connect", function () {
                    r.id = o.generateId(t)
                  }),
                  this.autoConnect && n()
              }
              return r
            }),
            (r.prototype.destroy = function (t) {
              var e = f(this.connecting, t)
              ~e && this.connecting.splice(e, 1), this.connecting.length || this.close()
            }),
            (r.prototype.packet = function (t) {
              h("writing packet %j", t)
              var e = this
              t.query && 0 === t.type && (t.nsp += "?" + t.query),
                e.encoding
                  ? e.packetBuffer.push(t)
                  : ((e.encoding = !0),
                    this.encoder.encode(t, function (n) {
                      for (var r = 0; r < n.length; r++) e.engine.write(n[r], t.options)
                      ;(e.encoding = !1), e.processPacketQueue()
                    }))
            }),
            (r.prototype.processPacketQueue = function () {
              if (this.packetBuffer.length > 0 && !this.encoding) {
                var t = this.packetBuffer.shift()
                this.packet(t)
              }
            }),
            (r.prototype.cleanup = function () {
              h("cleanup")
              for (var t = this.subs.length, e = 0; e < t; e++) this.subs.shift().destroy()
              ;(this.packetBuffer = []), (this.encoding = !1), (this.lastPing = null), this.decoder.destroy()
            }),
            (r.prototype.close = r.prototype.disconnect =
              function () {
                h("disconnect"), (this.skipReconnect = !0), (this.reconnecting = !1), "opening" === this.readyState && this.cleanup(), this.backoff.reset(), (this.readyState = "closed"), this.engine && this.engine.close()
              }),
            (r.prototype.onclose = function (t) {
              h("onclose"), this.cleanup(), this.backoff.reset(), (this.readyState = "closed"), this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect()
            }),
            (r.prototype.reconnect = function () {
              if (this.reconnecting || this.skipReconnect) return this
              var t = this
              if (this.backoff.attempts >= this._reconnectionAttempts) h("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), (this.reconnecting = !1)
              else {
                var e = this.backoff.duration()
                h("will wait %dms before reconnect attempt", e), (this.reconnecting = !0)
                var n = setTimeout(function () {
                  t.skipReconnect ||
                    (h("attempting reconnect"),
                    t.emitAll("reconnect_attempt", t.backoff.attempts),
                    t.emitAll("reconnecting", t.backoff.attempts),
                    t.skipReconnect ||
                      t.open(function (e) {
                        e ? (h("reconnect attempt error"), (t.reconnecting = !1), t.reconnect(), t.emitAll("reconnect_error", e.data)) : (h("reconnect success"), t.onreconnect())
                      }))
                }, e)
                this.subs.push({
                  destroy: function () {
                    clearTimeout(n)
                  },
                })
              }
            }),
            (r.prototype.onreconnect = function () {
              var t = this.backoff.attempts
              ;(this.reconnecting = !1), this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t)
            })
        },
        function (t, e, n) {
          ;(t.exports = n(14)), (t.exports.parser = n(21))
        },
        function (t, e, n) {
          function r(t, e) {
            return this instanceof r
              ? ((e = e || {}),
                t && "object" == typeof t && ((e = t), (t = null)),
                t ? ((t = p(t)), (e.hostname = t.host), (e.secure = "https" === t.protocol || "wss" === t.protocol), (e.port = t.port), t.query && (e.query = t.query)) : e.host && (e.hostname = p(e.host).host),
                (this.secure = null != e.secure ? e.secure : "undefined" != typeof location && "https:" === location.protocol),
                e.hostname && !e.port && (e.port = this.secure ? "443" : "80"),
                (this.agent = e.agent || !1),
                (this.hostname = e.hostname || ("undefined" != typeof location ? location.hostname : "localhost")),
                (this.port = e.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80)),
                (this.query = e.query || {}),
                "string" == typeof this.query && (this.query = u.decode(this.query)),
                (this.upgrade = !1 !== e.upgrade),
                (this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/"),
                (this.forceJSONP = !!e.forceJSONP),
                (this.jsonp = !1 !== e.jsonp),
                (this.forceBase64 = !!e.forceBase64),
                (this.enablesXDR = !!e.enablesXDR),
                (this.timestampParam = e.timestampParam || "t"),
                (this.timestampRequests = e.timestampRequests),
                (this.transports = e.transports || ["polling", "websocket"]),
                (this.transportOptions = e.transportOptions || {}),
                (this.readyState = ""),
                (this.writeBuffer = []),
                (this.prevBufferLen = 0),
                (this.policyPort = e.policyPort || 843),
                (this.rememberUpgrade = e.rememberUpgrade || !1),
                (this.binaryType = null),
                (this.onlyBinaryUpgrades = e.onlyBinaryUpgrades),
                (this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {})),
                !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
                this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024),
                (this.pfx = e.pfx || null),
                (this.key = e.key || null),
                (this.passphrase = e.passphrase || null),
                (this.cert = e.cert || null),
                (this.ca = e.ca || null),
                (this.ciphers = e.ciphers || null),
                (this.rejectUnauthorized = void 0 === e.rejectUnauthorized || e.rejectUnauthorized),
                (this.forceNode = !!e.forceNode),
                (this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase()),
                ("undefined" == typeof self || this.isReactNative) && (e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders), e.localAddress && (this.localAddress = e.localAddress)),
                (this.id = null),
                (this.upgrades = null),
                (this.pingInterval = null),
                (this.pingTimeout = null),
                (this.pingIntervalTimer = null),
                (this.pingTimeoutTimer = null),
                void this.open())
              : new r(t, e)
          }
          var o = n(15),
            i = n(8),
            s = n(3)("engine.io-client:socket"),
            a = n(35),
            c = n(21),
            p = n(2),
            u = n(29)
          ;(t.exports = r),
            (r.priorWebsocketSuccess = !1),
            i(r.prototype),
            (r.protocol = c.protocol),
            (r.Socket = r),
            (r.Transport = n(20)),
            (r.transports = n(15)),
            (r.parser = n(21)),
            (r.prototype.createTransport = function (t) {
              s('creating transport "%s"', t)
              var e = (function (t) {
                var e = {}
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                return e
              })(this.query)
              ;(e.EIO = c.protocol), (e.transport = t)
              var n = this.transportOptions[t] || {}
              return (
                this.id && (e.sid = this.id),
                new o[t]({
                  query: e,
                  socket: this,
                  agent: n.agent || this.agent,
                  hostname: n.hostname || this.hostname,
                  port: n.port || this.port,
                  secure: n.secure || this.secure,
                  path: n.path || this.path,
                  forceJSONP: n.forceJSONP || this.forceJSONP,
                  jsonp: n.jsonp || this.jsonp,
                  forceBase64: n.forceBase64 || this.forceBase64,
                  enablesXDR: n.enablesXDR || this.enablesXDR,
                  timestampRequests: n.timestampRequests || this.timestampRequests,
                  timestampParam: n.timestampParam || this.timestampParam,
                  policyPort: n.policyPort || this.policyPort,
                  pfx: n.pfx || this.pfx,
                  key: n.key || this.key,
                  passphrase: n.passphrase || this.passphrase,
                  cert: n.cert || this.cert,
                  ca: n.ca || this.ca,
                  ciphers: n.ciphers || this.ciphers,
                  rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
                  perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
                  extraHeaders: n.extraHeaders || this.extraHeaders,
                  forceNode: n.forceNode || this.forceNode,
                  localAddress: n.localAddress || this.localAddress,
                  requestTimeout: n.requestTimeout || this.requestTimeout,
                  protocols: n.protocols || void 0,
                  isReactNative: this.isReactNative,
                })
              )
            }),
            (r.prototype.open = function () {
              var t
              if (this.rememberUpgrade && r.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket"
              else {
                if (0 === this.transports.length) {
                  var e = this
                  return void setTimeout(function () {
                    e.emit("error", "No transports available")
                  }, 0)
                }
                t = this.transports[0]
              }
              this.readyState = "opening"
              try {
                t = this.createTransport(t)
              } catch (t) {
                return this.transports.shift(), void this.open()
              }
              t.open(), this.setTransport(t)
            }),
            (r.prototype.setTransport = function (t) {
              s("setting transport %s", t.name)
              var e = this
              this.transport && (s("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()),
                (this.transport = t),
                t
                  .on("drain", function () {
                    e.onDrain()
                  })
                  .on("packet", function (t) {
                    e.onPacket(t)
                  })
                  .on("error", function (t) {
                    e.onError(t)
                  })
                  .on("close", function () {
                    e.onClose("transport close")
                  })
            }),
            (r.prototype.probe = function (t) {
              function e() {
                if (f.onlyBinaryUpgrades) {
                  var e = !this.supportsBinary && f.transport.supportsBinary
                  h = h || e
                }
                h ||
                  (s('probe transport "%s" opened', t),
                  u.send([{type: "ping", data: "probe"}]),
                  u.once("packet", function (e) {
                    if (!h)
                      if ("pong" === e.type && "probe" === e.data) {
                        if ((s('probe transport "%s" pong', t), (f.upgrading = !0), f.emit("upgrading", u), !u)) return
                        ;(r.priorWebsocketSuccess = "websocket" === u.name),
                          s('pausing current transport "%s"', f.transport.name),
                          f.transport.pause(function () {
                            h || ("closed" !== f.readyState && (s("changing transport and sending upgrade packet"), p(), f.setTransport(u), u.send([{type: "upgrade"}]), f.emit("upgrade", u), (u = null), (f.upgrading = !1), f.flush()))
                          })
                      } else {
                        s('probe transport "%s" failed', t)
                        var n = new Error("probe error")
                        ;(n.transport = u.name), f.emit("upgradeError", n)
                      }
                  }))
              }
              function n() {
                h || ((h = !0), p(), u.close(), (u = null))
              }
              function o(e) {
                var r = new Error("probe error: " + e)
                ;(r.transport = u.name), n(), s('probe transport "%s" failed because of error: %s', t, e), f.emit("upgradeError", r)
              }
              function i() {
                o("transport closed")
              }
              function a() {
                o("socket closed")
              }
              function c(t) {
                u && t.name !== u.name && (s('"%s" works - aborting "%s"', t.name, u.name), n())
              }
              function p() {
                u.removeListener("open", e), u.removeListener("error", o), u.removeListener("close", i), f.removeListener("close", a), f.removeListener("upgrading", c)
              }
              s('probing transport "%s"', t)
              var u = this.createTransport(t, {probe: 1}),
                h = !1,
                f = this
              ;(r.priorWebsocketSuccess = !1), u.once("open", e), u.once("error", o), u.once("close", i), this.once("close", a), this.once("upgrading", c), u.open()
            }),
            (r.prototype.onOpen = function () {
              if ((s("socket open"), (this.readyState = "open"), (r.priorWebsocketSuccess = "websocket" === this.transport.name), this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause)) {
                s("starting upgrade probes")
                for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t])
              }
            }),
            (r.prototype.onPacket = function (t) {
              if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
                switch ((s('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type)) {
                  case "open":
                    this.onHandshake(JSON.parse(t.data))
                    break
                  case "pong":
                    this.setPing(), this.emit("pong")
                    break
                  case "error":
                    var e = new Error("server error")
                    ;(e.code = t.data), this.onError(e)
                    break
                  case "message":
                    this.emit("data", t.data), this.emit("message", t.data)
                }
              else s('packet received with socket readyState "%s"', this.readyState)
            }),
            (r.prototype.onHandshake = function (t) {
              this.emit("handshake", t),
                (this.id = t.sid),
                (this.transport.query.sid = t.sid),
                (this.upgrades = this.filterUpgrades(t.upgrades)),
                (this.pingInterval = t.pingInterval),
                (this.pingTimeout = t.pingTimeout),
                this.onOpen(),
                "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
            }),
            (r.prototype.onHeartbeat = function (t) {
              clearTimeout(this.pingTimeoutTimer)
              var e = this
              e.pingTimeoutTimer = setTimeout(function () {
                "closed" !== e.readyState && e.onClose("ping timeout")
              }, t || e.pingInterval + e.pingTimeout)
            }),
            (r.prototype.setPing = function () {
              var t = this
              clearTimeout(t.pingIntervalTimer),
                (t.pingIntervalTimer = setTimeout(function () {
                  s("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout)
                }, t.pingInterval))
            }),
            (r.prototype.ping = function () {
              var t = this
              this.sendPacket("ping", function () {
                t.emit("ping")
              })
            }),
            (r.prototype.onDrain = function () {
              this.writeBuffer.splice(0, this.prevBufferLen), (this.prevBufferLen = 0), 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
            }),
            (r.prototype.flush = function () {
              "closed" !== this.readyState &&
                this.transport.writable &&
                !this.upgrading &&
                this.writeBuffer.length &&
                (s("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), (this.prevBufferLen = this.writeBuffer.length), this.emit("flush"))
            }),
            (r.prototype.write = r.prototype.send =
              function (t, e, n) {
                return this.sendPacket("message", t, e, n), this
              }),
            (r.prototype.sendPacket = function (t, e, n, r) {
              if (("function" == typeof e && ((r = e), (e = void 0)), "function" == typeof n && ((r = n), (n = null)), "closing" !== this.readyState && "closed" !== this.readyState)) {
                ;(n = n || {}).compress = !1 !== n.compress
                var o = {type: t, data: e, options: n}
                this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush()
              }
            }),
            (r.prototype.close = function () {
              function t() {
                r.onClose("forced close"), s("socket closing - telling transport to close"), r.transport.close()
              }
              function e() {
                r.removeListener("upgrade", e), r.removeListener("upgradeError", e), t()
              }
              function n() {
                r.once("upgrade", e), r.once("upgradeError", e)
              }
              if ("opening" === this.readyState || "open" === this.readyState) {
                this.readyState = "closing"
                var r = this
                this.writeBuffer.length
                  ? this.once("drain", function () {
                      this.upgrading ? n() : t()
                    })
                  : this.upgrading
                  ? n()
                  : t()
              }
              return this
            }),
            (r.prototype.onError = function (t) {
              s("socket error %j", t), (r.priorWebsocketSuccess = !1), this.emit("error", t), this.onClose("transport error", t)
            }),
            (r.prototype.onClose = function (t, e) {
              ;("opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState) ||
                (s('socket close with reason: "%s"', t),
                clearTimeout(this.pingIntervalTimer),
                clearTimeout(this.pingTimeoutTimer),
                this.transport.removeAllListeners("close"),
                this.transport.close(),
                this.transport.removeAllListeners(),
                (this.readyState = "closed"),
                (this.id = null),
                this.emit("close", t, e),
                (this.writeBuffer = []),
                (this.prevBufferLen = 0))
            }),
            (r.prototype.filterUpgrades = function (t) {
              for (var e = [], n = 0, r = t.length; n < r; n++) ~a(this.transports, t[n]) && e.push(t[n])
              return e
            })
        },
        function (t, e, n) {
          var r = n(16),
            o = n(18),
            i = n(32),
            s = n(33)
          ;(e.polling = function (t) {
            var e = !1,
              n = !1,
              s = !1 !== t.jsonp
            if ("undefined" != typeof location) {
              var a = "https:" === location.protocol,
                c = location.port
              c || (c = a ? 443 : 80), (e = t.hostname !== location.hostname || c !== t.port), (n = t.secure !== a)
            }
            if (((t.xdomain = e), (t.xscheme = n), "open" in new r(t) && !t.forceJSONP)) return new o(t)
            if (!s) throw new Error("JSONP disabled")
            return new i(t)
          }),
            (e.websocket = s)
        },
        function (t, e, n) {
          var r = n(17)
          t.exports = function (t) {
            var e = t.xdomain,
              n = t.xscheme,
              o = t.enablesXDR
            try {
              if ("undefined" != typeof XMLHttpRequest && (!e || r)) return new XMLHttpRequest()
            } catch (t) {}
            try {
              if ("undefined" != typeof XDomainRequest && !n && o) return new XDomainRequest()
            } catch (t) {}
            if (!e)
              try {
                return new self[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
              } catch (t) {}
          }
        },
        function (t, e) {
          try {
            t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest()
          } catch (e) {
            t.exports = !1
          }
        },
        function (t, e, n) {
          function r() {}
          function o(t) {
            if ((c.call(this, t), (this.requestTimeout = t.requestTimeout), (this.extraHeaders = t.extraHeaders), "undefined" != typeof location)) {
              var e = "https:" === location.protocol,
                n = location.port
              n || (n = e ? 443 : 80), (this.xd = ("undefined" != typeof location && t.hostname !== location.hostname) || n !== t.port), (this.xs = t.secure !== e)
            }
          }
          function i(t) {
            ;(this.method = t.method || "GET"),
              (this.uri = t.uri),
              (this.xd = !!t.xd),
              (this.xs = !!t.xs),
              (this.async = !1 !== t.async),
              (this.data = void 0 !== t.data ? t.data : null),
              (this.agent = t.agent),
              (this.isBinary = t.isBinary),
              (this.supportsBinary = t.supportsBinary),
              (this.enablesXDR = t.enablesXDR),
              (this.requestTimeout = t.requestTimeout),
              (this.pfx = t.pfx),
              (this.key = t.key),
              (this.passphrase = t.passphrase),
              (this.cert = t.cert),
              (this.ca = t.ca),
              (this.ciphers = t.ciphers),
              (this.rejectUnauthorized = t.rejectUnauthorized),
              (this.extraHeaders = t.extraHeaders),
              this.create()
          }
          function s() {
            for (var t in i.requests) i.requests.hasOwnProperty(t) && i.requests[t].abort()
          }
          var a = n(16),
            c = n(19),
            p = n(8),
            u = n(30),
            h = n(3)("engine.io-client:polling-xhr")
          if (
            ((t.exports = o),
            (t.exports.Request = i),
            u(o, c),
            (o.prototype.supportsBinary = !0),
            (o.prototype.request = function (t) {
              return (
                ((t = t || {}).uri = this.uri()),
                (t.xd = this.xd),
                (t.xs = this.xs),
                (t.agent = this.agent || !1),
                (t.supportsBinary = this.supportsBinary),
                (t.enablesXDR = this.enablesXDR),
                (t.pfx = this.pfx),
                (t.key = this.key),
                (t.passphrase = this.passphrase),
                (t.cert = this.cert),
                (t.ca = this.ca),
                (t.ciphers = this.ciphers),
                (t.rejectUnauthorized = this.rejectUnauthorized),
                (t.requestTimeout = this.requestTimeout),
                (t.extraHeaders = this.extraHeaders),
                new i(t)
              )
            }),
            (o.prototype.doWrite = function (t, e) {
              var n = "string" != typeof t && void 0 !== t,
                r = this.request({method: "POST", data: t, isBinary: n}),
                o = this
              r.on("success", e),
                r.on("error", function (t) {
                  o.onError("xhr post error", t)
                }),
                (this.sendXhr = r)
            }),
            (o.prototype.doPoll = function () {
              h("xhr poll")
              var t = this.request(),
                e = this
              t.on("data", function (t) {
                e.onData(t)
              }),
                t.on("error", function (t) {
                  e.onError("xhr poll error", t)
                }),
                (this.pollXhr = t)
            }),
            p(i.prototype),
            (i.prototype.create = function () {
              var t = {agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR}
              ;(t.pfx = this.pfx), (t.key = this.key), (t.passphrase = this.passphrase), (t.cert = this.cert), (t.ca = this.ca), (t.ciphers = this.ciphers), (t.rejectUnauthorized = this.rejectUnauthorized)
              var e = (this.xhr = new a(t)),
                n = this
              try {
                h("xhr open %s: %s", this.method, this.uri), e.open(this.method, this.uri, this.async)
                try {
                  if (this.extraHeaders) for (var r in (e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0), this.extraHeaders)) this.extraHeaders.hasOwnProperty(r) && e.setRequestHeader(r, this.extraHeaders[r])
                } catch (t) {}
                if ("POST" === this.method)
                  try {
                    this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                  } catch (t) {}
                try {
                  e.setRequestHeader("Accept", "*/*")
                } catch (t) {}
                "withCredentials" in e && (e.withCredentials = !0),
                  this.requestTimeout && (e.timeout = this.requestTimeout),
                  this.hasXDR()
                    ? ((e.onload = function () {
                        n.onLoad()
                      }),
                      (e.onerror = function () {
                        n.onError(e.responseText)
                      }))
                    : (e.onreadystatechange = function () {
                        if (2 === e.readyState)
                          try {
                            var t = e.getResponseHeader("Content-Type")
                            n.supportsBinary && "application/octet-stream" === t && (e.responseType = "arraybuffer")
                          } catch (t) {}
                        4 === e.readyState &&
                          (200 === e.status || 1223 === e.status
                            ? n.onLoad()
                            : setTimeout(function () {
                                n.onError(e.status)
                              }, 0))
                      }),
                  h("xhr data %s", this.data),
                  e.send(this.data)
              } catch (t) {
                return void setTimeout(function () {
                  n.onError(t)
                }, 0)
              }
              "undefined" != typeof document && ((this.index = i.requestsCount++), (i.requests[this.index] = this))
            }),
            (i.prototype.onSuccess = function () {
              this.emit("success"), this.cleanup()
            }),
            (i.prototype.onData = function (t) {
              this.emit("data", t), this.onSuccess()
            }),
            (i.prototype.onError = function (t) {
              this.emit("error", t), this.cleanup(!0)
            }),
            (i.prototype.cleanup = function (t) {
              if (void 0 !== this.xhr && null !== this.xhr) {
                if ((this.hasXDR() ? (this.xhr.onload = this.xhr.onerror = r) : (this.xhr.onreadystatechange = r), t))
                  try {
                    this.xhr.abort()
                  } catch (t) {}
                "undefined" != typeof document && delete i.requests[this.index], (this.xhr = null)
              }
            }),
            (i.prototype.onLoad = function () {
              var t
              try {
                var e
                try {
                  e = this.xhr.getResponseHeader("Content-Type")
                } catch (t) {}
                t = ("application/octet-stream" === e && this.xhr.response) || this.xhr.responseText
              } catch (t) {
                this.onError(t)
              }
              null != t && this.onData(t)
            }),
            (i.prototype.hasXDR = function () {
              return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR
            }),
            (i.prototype.abort = function () {
              this.cleanup()
            }),
            (i.requestsCount = 0),
            (i.requests = {}),
            "undefined" != typeof document)
          )
            if ("function" == typeof attachEvent) attachEvent("onunload", s)
            else if ("function" == typeof addEventListener) {
              var f = "onpagehide" in self ? "pagehide" : "unload"
              addEventListener(f, s, !1)
            }
        },
        function (t, e, n) {
          function r(t) {
            var e = t && t.forceBase64
            ;(u && !e) || (this.supportsBinary = !1), o.call(this, t)
          }
          var o = n(20),
            i = n(29),
            s = n(21),
            a = n(30),
            c = n(31),
            p = n(3)("engine.io-client:polling")
          t.exports = r
          var u = null != new (n(16))({xdomain: !1}).responseType
          a(r, o),
            (r.prototype.name = "polling"),
            (r.prototype.doOpen = function () {
              this.poll()
            }),
            (r.prototype.pause = function (t) {
              function e() {
                p("paused"), (n.readyState = "paused"), t()
              }
              var n = this
              if (((this.readyState = "pausing"), this.polling || !this.writable)) {
                var r = 0
                this.polling &&
                  (p("we are currently polling - waiting to pause"),
                  r++,
                  this.once("pollComplete", function () {
                    p("pre-pause polling complete"), --r || e()
                  })),
                  this.writable ||
                    (p("we are currently writing - waiting to pause"),
                    r++,
                    this.once("drain", function () {
                      p("pre-pause writing complete"), --r || e()
                    }))
              } else e()
            }),
            (r.prototype.poll = function () {
              p("polling"), (this.polling = !0), this.doPoll(), this.emit("poll")
            }),
            (r.prototype.onData = function (t) {
              var e = this
              p("polling got data %s", t),
                s.decodePayload(t, this.socket.binaryType, function (t, n, r) {
                  return "opening" === e.readyState && e.onOpen(), "close" === t.type ? (e.onClose(), !1) : void e.onPacket(t)
                }),
                "closed" !== this.readyState && ((this.polling = !1), this.emit("pollComplete"), "open" === this.readyState ? this.poll() : p('ignoring poll - transport state "%s"', this.readyState))
            }),
            (r.prototype.doClose = function () {
              function t() {
                p("writing close packet"), e.write([{type: "close"}])
              }
              var e = this
              "open" === this.readyState ? (p("transport open - closing"), t()) : (p("transport not open - deferring close"), this.once("open", t))
            }),
            (r.prototype.write = function (t) {
              var e = this
              this.writable = !1
              var n = function () {
                ;(e.writable = !0), e.emit("drain")
              }
              s.encodePayload(t, this.supportsBinary, function (t) {
                e.doWrite(t, n)
              })
            }),
            (r.prototype.uri = function () {
              var t = this.query || {},
                e = this.secure ? "https" : "http",
                n = ""
              return (
                !1 !== this.timestampRequests && (t[this.timestampParam] = c()),
                this.supportsBinary || t.sid || (t.b64 = 1),
                (t = i.encode(t)),
                this.port && (("https" === e && 443 !== Number(this.port)) || ("http" === e && 80 !== Number(this.port))) && (n = ":" + this.port),
                t.length && (t = "?" + t),
                e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
              )
            })
        },
        function (t, e, n) {
          function r(t) {
            ;(this.path = t.path),
              (this.hostname = t.hostname),
              (this.port = t.port),
              (this.secure = t.secure),
              (this.query = t.query),
              (this.timestampParam = t.timestampParam),
              (this.timestampRequests = t.timestampRequests),
              (this.readyState = ""),
              (this.agent = t.agent || !1),
              (this.socket = t.socket),
              (this.enablesXDR = t.enablesXDR),
              (this.pfx = t.pfx),
              (this.key = t.key),
              (this.passphrase = t.passphrase),
              (this.cert = t.cert),
              (this.ca = t.ca),
              (this.ciphers = t.ciphers),
              (this.rejectUnauthorized = t.rejectUnauthorized),
              (this.forceNode = t.forceNode),
              (this.isReactNative = t.isReactNative),
              (this.extraHeaders = t.extraHeaders),
              (this.localAddress = t.localAddress)
          }
          var o = n(21),
            i = n(8)
          ;(t.exports = r),
            i(r.prototype),
            (r.prototype.onError = function (t, e) {
              var n = new Error(t)
              return (n.type = "TransportError"), (n.description = e), this.emit("error", n), this
            }),
            (r.prototype.open = function () {
              return ("closed" !== this.readyState && "" !== this.readyState) || ((this.readyState = "opening"), this.doOpen()), this
            }),
            (r.prototype.close = function () {
              return ("opening" !== this.readyState && "open" !== this.readyState) || (this.doClose(), this.onClose()), this
            }),
            (r.prototype.send = function (t) {
              if ("open" !== this.readyState) throw new Error("Transport not open")
              this.write(t)
            }),
            (r.prototype.onOpen = function () {
              ;(this.readyState = "open"), (this.writable = !0), this.emit("open")
            }),
            (r.prototype.onData = function (t) {
              var e = o.decodePacket(t, this.socket.binaryType)
              this.onPacket(e)
            }),
            (r.prototype.onPacket = function (t) {
              this.emit("packet", t)
            }),
            (r.prototype.onClose = function () {
              ;(this.readyState = "closed"), this.emit("close")
            })
        },
        function (t, e, n) {
          function r(t, n) {
            return n("b" + e.packets[t.type] + t.data.data)
          }
          function o(t, n, r) {
            if (!n) return e.encodeBase64Packet(t, r)
            var o = t.data,
              i = new Uint8Array(o),
              s = new Uint8Array(1 + o.byteLength)
            s[0] = m[t.type]
            for (var a = 0; a < i.length; a++) s[a + 1] = i[a]
            return r(s.buffer)
          }
          function i(t, n, r) {
            if (!n) return e.encodeBase64Packet(t, r)
            if (y)
              return (function (t, n, r) {
                if (!n) return e.encodeBase64Packet(t, r)
                var o = new FileReader()
                return (
                  (o.onload = function () {
                    e.encodePacket({type: t.type, data: o.result}, n, !0, r)
                  }),
                  o.readAsArrayBuffer(t.data)
                )
              })(t, n, r)
            var o = new Uint8Array(1)
            return (o[0] = m[t.type]), r(new b([o.buffer, t.data]))
          }
          function s(t, e, n) {
            for (
              var r = new Array(t.length),
                o = h(t.length, n),
                i = function (t, n, o) {
                  e(n, function (e, n) {
                    ;(r[t] = n), o(e, r)
                  })
                },
                s = 0;
              s < t.length;
              s++
            )
              i(s, t[s], o)
          }
          var a,
            c = n(22),
            p = n(23),
            u = n(24),
            h = n(25),
            f = n(26)
          "undefined" != typeof ArrayBuffer && (a = n(27))
          var l = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
            d = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
            y = l || d
          e.protocol = 3
          var m = (e.packets = {open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6}),
            g = c(m),
            v = {type: "error", data: "parser error"},
            b = n(28)
          ;(e.encodePacket = function (t, e, n, s) {
            "function" == typeof e && ((s = e), (e = !1)), "function" == typeof n && ((s = n), (n = null))
            var a = void 0 === t.data ? void 0 : t.data.buffer || t.data
            if ("undefined" != typeof ArrayBuffer && a instanceof ArrayBuffer) return o(t, e, s)
            if (void 0 !== b && a instanceof b) return i(t, e, s)
            if (a && a.base64) return r(t, s)
            var c = m[t.type]
            return void 0 !== t.data && (c += n ? f.encode(String(t.data), {strict: !1}) : String(t.data)), s("" + c)
          }),
            (e.encodeBase64Packet = function (t, n) {
              var r,
                o = "b" + e.packets[t.type]
              if (void 0 !== b && t.data instanceof b) {
                var i = new FileReader()
                return (
                  (i.onload = function () {
                    var t = i.result.split(",")[1]
                    n(o + t)
                  }),
                  i.readAsDataURL(t.data)
                )
              }
              try {
                r = String.fromCharCode.apply(null, new Uint8Array(t.data))
              } catch (e) {
                for (var s = new Uint8Array(t.data), a = new Array(s.length), c = 0; c < s.length; c++) a[c] = s[c]
                r = String.fromCharCode.apply(null, a)
              }
              return (o += btoa(r)), n(o)
            }),
            (e.decodePacket = function (t, n, r) {
              if (void 0 === t) return v
              if ("string" == typeof t) {
                if ("b" === t.charAt(0)) return e.decodeBase64Packet(t.substr(1), n)
                if (
                  r &&
                  !1 ===
                    (t = (function (t) {
                      try {
                        t = f.decode(t, {strict: !1})
                      } catch (t) {
                        return !1
                      }
                      return t
                    })(t))
                )
                  return v
                var o = t.charAt(0)
                return Number(o) == o && g[o] ? (t.length > 1 ? {type: g[o], data: t.substring(1)} : {type: g[o]}) : v
              }
              o = new Uint8Array(t)[0]
              var i = u(t, 1)
              return b && "blob" === n && (i = new b([i])), {type: g[o], data: i}
            }),
            (e.decodeBase64Packet = function (t, e) {
              var n = g[t.charAt(0)]
              if (!a) return {type: n, data: {base64: !0, data: t.substr(1)}}
              var r = a.decode(t.substr(1))
              return "blob" === e && b && (r = new b([r])), {type: n, data: r}
            }),
            (e.encodePayload = function (t, n, r) {
              "function" == typeof n && ((r = n), (n = null))
              var o = p(t)
              return n && o
                ? b && !y
                  ? e.encodePayloadAsBlob(t, r)
                  : e.encodePayloadAsArrayBuffer(t, r)
                : t.length
                ? void s(
                    t,
                    function (t, r) {
                      e.encodePacket(t, !!o && n, !1, function (t) {
                        r(
                          null,
                          (function (t) {
                            return t.length + ":" + t
                          })(t)
                        )
                      })
                    },
                    function (t, e) {
                      return r(e.join(""))
                    }
                  )
                : r("0:")
            }),
            (e.decodePayload = function (t, n, r) {
              if ("string" != typeof t) return e.decodePayloadAsBinary(t, n, r)
              var o
              if (("function" == typeof n && ((r = n), (n = null)), "" === t)) return r(v, 0, 1)
              for (var i, s, a = "", c = 0, p = t.length; c < p; c++) {
                var u = t.charAt(c)
                if (":" === u) {
                  if ("" === a || a != (i = Number(a))) return r(v, 0, 1)
                  if (a != (s = t.substr(c + 1, i)).length) return r(v, 0, 1)
                  if (s.length) {
                    if (((o = e.decodePacket(s, n, !1)), v.type === o.type && v.data === o.data)) return r(v, 0, 1)
                    if (!1 === r(o, c + i, p)) return
                  }
                  ;(c += i), (a = "")
                } else a += u
              }
              return "" !== a ? r(v, 0, 1) : void 0
            }),
            (e.encodePayloadAsArrayBuffer = function (t, n) {
              return t.length
                ? void s(
                    t,
                    function (t, n) {
                      e.encodePacket(t, !0, !0, function (t) {
                        return n(null, t)
                      })
                    },
                    function (t, e) {
                      var r = e.reduce(function (t, e) {
                          var n
                          return t + (n = "string" == typeof e ? e.length : e.byteLength).toString().length + n + 2
                        }, 0),
                        o = new Uint8Array(r),
                        i = 0
                      return (
                        e.forEach(function (t) {
                          var e = "string" == typeof t,
                            n = t
                          if (e) {
                            for (var r = new Uint8Array(t.length), s = 0; s < t.length; s++) r[s] = t.charCodeAt(s)
                            n = r.buffer
                          }
                          o[i++] = e ? 0 : 1
                          var a = n.byteLength.toString()
                          for (s = 0; s < a.length; s++) o[i++] = parseInt(a[s])
                          for (o[i++] = 255, r = new Uint8Array(n), s = 0; s < r.length; s++) o[i++] = r[s]
                        }),
                        n(o.buffer)
                      )
                    }
                  )
                : n(new ArrayBuffer(0))
            }),
            (e.encodePayloadAsBlob = function (t, n) {
              s(
                t,
                function (t, n) {
                  e.encodePacket(t, !0, !0, function (t) {
                    var e = new Uint8Array(1)
                    if (((e[0] = 1), "string" == typeof t)) {
                      for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o)
                      ;(t = r.buffer), (e[0] = 0)
                    }
                    var i = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString(),
                      s = new Uint8Array(i.length + 1)
                    for (o = 0; o < i.length; o++) s[o] = parseInt(i[o])
                    if (((s[i.length] = 255), b)) {
                      var a = new b([e.buffer, s.buffer, t])
                      n(null, a)
                    }
                  })
                },
                function (t, e) {
                  return n(new b(e))
                }
              )
            }),
            (e.decodePayloadAsBinary = function (t, n, r) {
              "function" == typeof n && ((r = n), (n = null))
              for (var o = t, i = []; o.byteLength > 0; ) {
                for (var s = new Uint8Array(o), a = 0 === s[0], c = "", p = 1; 255 !== s[p]; p++) {
                  if (c.length > 310) return r(v, 0, 1)
                  c += s[p]
                }
                ;(o = u(o, 2 + c.length)), (c = parseInt(c))
                var h = u(o, 0, c)
                if (a)
                  try {
                    h = String.fromCharCode.apply(null, new Uint8Array(h))
                  } catch (t) {
                    var f = new Uint8Array(h)
                    for (h = "", p = 0; p < f.length; p++) h += String.fromCharCode(f[p])
                  }
                i.push(h), (o = u(o, c))
              }
              var l = i.length
              i.forEach(function (t, o) {
                r(e.decodePacket(t, n, !0), o, l)
              })
            })
        },
        function (t, e) {
          t.exports =
            Object.keys ||
            function (t) {
              var e = [],
                n = Object.prototype.hasOwnProperty
              for (var r in t) n.call(t, r) && e.push(r)
              return e
            }
        },
        function (t, n, r) {
          var o = r(10),
            i = Object.prototype.toString,
            s = "function" == typeof Blob || ("undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob)),
            a = "function" == typeof File || ("undefined" != typeof File && "[object FileConstructor]" === i.call(File))
          t.exports = function t(n) {
            if (!n || "object" != typeof n) return !1
            if (o(n)) {
              for (var r = 0, i = n.length; r < i; r++) if (t(n[r])) return !0
              return !1
            }
            if (("function" == typeof e && e.isBuffer && e.isBuffer(n)) || ("function" == typeof ArrayBuffer && n instanceof ArrayBuffer) || (s && n instanceof Blob) || (a && n instanceof File)) return !0
            if (n.toJSON && "function" == typeof n.toJSON && 1 === arguments.length) return t(n.toJSON(), !0)
            for (var c in n) if (Object.prototype.hasOwnProperty.call(n, c) && t(n[c])) return !0
            return !1
          }
        },
        function (t, e) {
          t.exports = function (t, e, n) {
            var r = t.byteLength
            if (((e = e || 0), (n = n || r), t.slice)) return t.slice(e, n)
            if ((e < 0 && (e += r), n < 0 && (n += r), n > r && (n = r), e >= r || e >= n || 0 === r)) return new ArrayBuffer(0)
            for (var o = new Uint8Array(t), i = new Uint8Array(n - e), s = e, a = 0; s < n; s++, a++) i[a] = o[s]
            return i.buffer
          }
        },
        function (t, e) {
          function n() {}
          t.exports = function (t, e, r) {
            function o(t, n) {
              if (o.count <= 0) throw new Error("after called too many times")
              --o.count, t ? ((i = !0), e(t), (e = r)) : 0 !== o.count || i || e(null, n)
            }
            var i = !1
            return (r = r || n), (o.count = t), 0 === t ? e() : o
          }
        },
        function (t, e) {
          function n(t) {
            for (var e, n, r = [], o = 0, i = t.length; o < i; ) (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i ? (56320 == (64512 & (n = t.charCodeAt(o++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), o--)) : r.push(e)
            return r
          }
          function r(t, e) {
            if (t >= 55296 && t <= 57343) {
              if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value")
              return !1
            }
            return !0
          }
          function o(t, e) {
            return h(((t >> e) & 63) | 128)
          }
          function i(t, e) {
            if (0 == (4294967168 & t)) return h(t)
            var n = ""
            return (
              0 == (4294965248 & t)
                ? (n = h(((t >> 6) & 31) | 192))
                : 0 == (4294901760 & t)
                ? (r(t, e) || (t = 65533), (n = h(((t >> 12) & 15) | 224)), (n += o(t, 6)))
                : 0 == (4292870144 & t) && ((n = h(((t >> 18) & 7) | 240)), (n += o(t, 12)), (n += o(t, 6))),
              n + h((63 & t) | 128)
            )
          }
          function s() {
            if (u >= p) throw Error("Invalid byte index")
            var t = 255 & c[u]
            if ((u++, 128 == (192 & t))) return 63 & t
            throw Error("Invalid continuation byte")
          }
          function a(t) {
            var e, n
            if (u > p) throw Error("Invalid byte index")
            if (u == p) return !1
            if (((e = 255 & c[u]), u++, 0 == (128 & e))) return e
            if (192 == (224 & e)) {
              if ((n = ((31 & e) << 6) | s()) >= 128) return n
              throw Error("Invalid continuation byte")
            }
            if (224 == (240 & e)) {
              if ((n = ((15 & e) << 12) | (s() << 6) | s()) >= 2048) return r(n, t) ? n : 65533
              throw Error("Invalid continuation byte")
            }
            if (240 == (248 & e) && (n = ((7 & e) << 18) | (s() << 12) | (s() << 6) | s()) >= 65536 && n <= 1114111) return n
            throw Error("Invalid UTF-8 detected")
          } /*! https://mths.be/utf8js v2.1.2 by @mathias */
          var c,
            p,
            u,
            h = String.fromCharCode
          t.exports = {
            version: "2.1.2",
            encode: function (t, e) {
              for (var r = !1 !== (e = e || {}).strict, o = n(t), s = o.length, a = -1, c = ""; ++a < s; ) c += i(o[a], r)
              return c
            },
            decode: function (t, e) {
              var r = !1 !== (e = e || {}).strict
              ;(c = n(t)), (p = c.length), (u = 0)
              for (var o, i = []; !1 !== (o = a(r)); ) i.push(o)
              return (function (t) {
                for (var e, n = t.length, r = -1, o = ""; ++r < n; ) (e = t[r]) > 65535 && ((o += h((((e -= 65536) >>> 10) & 1023) | 55296)), (e = 56320 | (1023 & e))), (o += h(e))
                return o
              })(i)
            },
          }
        },
        function (t, e) {
          !(function () {
            "use strict"
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0; r < t.length; r++) n[t.charCodeAt(r)] = r
            ;(e.encode = function (e) {
              var n,
                r = new Uint8Array(e),
                o = r.length,
                i = ""
              for (n = 0; n < o; n += 3) (i += t[r[n] >> 2]), (i += t[((3 & r[n]) << 4) | (r[n + 1] >> 4)]), (i += t[((15 & r[n + 1]) << 2) | (r[n + 2] >> 6)]), (i += t[63 & r[n + 2]])
              return o % 3 == 2 ? (i = i.substring(0, i.length - 1) + "=") : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i
            }),
              (e.decode = function (t) {
                var e,
                  r,
                  o,
                  i,
                  s,
                  a = 0.75 * t.length,
                  c = t.length,
                  p = 0
                "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--)
                var u = new ArrayBuffer(a),
                  h = new Uint8Array(u)
                for (e = 0; e < c; e += 4)
                  (r = n[t.charCodeAt(e)]), (o = n[t.charCodeAt(e + 1)]), (i = n[t.charCodeAt(e + 2)]), (s = n[t.charCodeAt(e + 3)]), (h[p++] = (r << 2) | (o >> 4)), (h[p++] = ((15 & o) << 4) | (i >> 2)), (h[p++] = ((3 & i) << 6) | (63 & s))
                return u
              })
          })()
        },
        function (t, e) {
          function n(t) {
            return t.map(function (t) {
              if (t.buffer instanceof ArrayBuffer) {
                var e = t.buffer
                if (t.byteLength !== e.byteLength) {
                  var n = new Uint8Array(t.byteLength)
                  n.set(new Uint8Array(e, t.byteOffset, t.byteLength)), (e = n.buffer)
                }
                return e
              }
              return t
            })
          }
          function r(t, e) {
            e = e || {}
            var r = new i()
            return (
              n(t).forEach(function (t) {
                r.append(t)
              }),
              e.type ? r.getBlob(e.type) : r.getBlob()
            )
          }
          function o(t, e) {
            return new Blob(n(t), e || {})
          }
          var i = void 0 !== i ? i : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder,
            s = (function () {
              try {
                return 2 === new Blob(["hi"]).size
              } catch (t) {
                return !1
              }
            })(),
            a =
              s &&
              (function () {
                try {
                  return 2 === new Blob([new Uint8Array([1, 2])]).size
                } catch (t) {
                  return !1
                }
              })(),
            c = i && i.prototype.append && i.prototype.getBlob
          "undefined" != typeof Blob && ((r.prototype = Blob.prototype), (o.prototype = Blob.prototype)), (t.exports = s ? (a ? Blob : o) : c ? r : void 0)
        },
        function (t, e) {
          ;(e.encode = function (t) {
            var e = ""
            for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), (e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n])))
            return e
          }),
            (e.decode = function (t) {
              for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {
                var i = n[r].split("=")
                e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
              }
              return e
            })
        },
        function (t, e) {
          t.exports = function (t, e) {
            var n = function () {}
            ;(n.prototype = e.prototype), (t.prototype = new n()), (t.prototype.constructor = t)
          }
        },
        function (t, e) {
          "use strict"
          function n(t) {
            var e = ""
            do {
              ;(e = i[t % s] + e), (t = Math.floor(t / s))
            } while (t > 0)
            return e
          }
          function r() {
            var t = n(+new Date())
            return t !== o ? ((c = 0), (o = t)) : t + "." + n(c++)
          }
          for (var o, i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), s = 64, a = {}, c = 0, p = 0; p < s; p++) a[i[p]] = p
          ;(r.encode = n),
            (r.decode = function (t) {
              var e = 0
              for (p = 0; p < t.length; p++) e = e * s + a[t.charAt(p)]
              return e
            }),
            (t.exports = r)
        },
        function (t, e, n) {
          ;(function (e) {
            function r() {}
            function o() {
              return "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : {}
            }
            function i(t) {
              if ((s.call(this, t), (this.query = this.query || {}), !c)) {
                var e = o()
                c = e.___eio = e.___eio || []
              }
              this.index = c.length
              var n = this
              c.push(function (t) {
                n.onData(t)
              }),
                (this.query.j = this.index),
                "function" == typeof addEventListener &&
                  addEventListener(
                    "beforeunload",
                    function () {
                      n.script && (n.script.onerror = r)
                    },
                    !1
                  )
            }
            var s = n(19),
              a = n(30)
            t.exports = i
            var c,
              p = /\n/g,
              u = /\\n/g
            a(i, s),
              (i.prototype.supportsBinary = !1),
              (i.prototype.doClose = function () {
                this.script && (this.script.parentNode.removeChild(this.script), (this.script = null)), this.form && (this.form.parentNode.removeChild(this.form), (this.form = null), (this.iframe = null)), s.prototype.doClose.call(this)
              }),
              (i.prototype.doPoll = function () {
                var t = this,
                  e = document.createElement("script")
                this.script && (this.script.parentNode.removeChild(this.script), (this.script = null)),
                  (e.async = !0),
                  (e.src = this.uri()),
                  (e.onerror = function (e) {
                    t.onError("jsonp poll error", e)
                  })
                var n = document.getElementsByTagName("script")[0]
                n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e),
                  (this.script = e),
                  "undefined" != typeof navigator &&
                    /gecko/i.test(navigator.userAgent) &&
                    setTimeout(function () {
                      var t = document.createElement("iframe")
                      document.body.appendChild(t), document.body.removeChild(t)
                    }, 100)
              }),
              (i.prototype.doWrite = function (t, e) {
                function n() {
                  r(), e()
                }
                function r() {
                  if (o.iframe)
                    try {
                      o.form.removeChild(o.iframe)
                    } catch (t) {
                      o.onError("jsonp polling iframe removal error", t)
                    }
                  try {
                    var t = '<iframe src="javascript:0" name="' + o.iframeId + '">'
                    i = document.createElement(t)
                  } catch (t) {
                    ;((i = document.createElement("iframe")).name = o.iframeId), (i.src = "javascript:0")
                  }
                  ;(i.id = o.iframeId), o.form.appendChild(i), (o.iframe = i)
                }
                var o = this
                if (!this.form) {
                  var i,
                    s = document.createElement("form"),
                    a = document.createElement("textarea"),
                    c = (this.iframeId = "eio_iframe_" + this.index)
                  ;(s.className = "socketio"),
                    (s.style.position = "absolute"),
                    (s.style.top = "-1000px"),
                    (s.style.left = "-1000px"),
                    (s.target = c),
                    (s.method = "POST"),
                    s.setAttribute("accept-charset", "utf-8"),
                    (a.name = "d"),
                    s.appendChild(a),
                    document.body.appendChild(s),
                    (this.form = s),
                    (this.area = a)
                }
                ;(this.form.action = this.uri()), r(), (t = t.replace(u, "\\\n")), (this.area.value = t.replace(p, "\\n"))
                try {
                  this.form.submit()
                } catch (t) {}
                this.iframe.attachEvent
                  ? (this.iframe.onreadystatechange = function () {
                      "complete" === o.iframe.readyState && n()
                    })
                  : (this.iframe.onload = n)
              })
          }).call(
            e,
            (function () {
              return this
            })()
          )
        },
        function (t, n, r) {
          function o(t) {
            t && t.forceBase64 && (this.supportsBinary = !1), (this.perMessageDeflate = t.perMessageDeflate), (this.usingBrowserWebSocket = i && !t.forceNode), (this.protocols = t.protocols), this.usingBrowserWebSocket || (l = s), a.call(this, t)
          }
          var i,
            s,
            a = r(20),
            c = r(21),
            p = r(29),
            u = r(30),
            h = r(31),
            f = r(3)("engine.io-client:websocket")
          if ("undefined" == typeof self)
            try {
              s = r(34)
            } catch (t) {}
          else i = self.WebSocket || self.MozWebSocket
          var l = i || s
          ;(t.exports = o),
            u(o, a),
            (o.prototype.name = "websocket"),
            (o.prototype.supportsBinary = !0),
            (o.prototype.doOpen = function () {
              if (this.check()) {
                var t = this.uri(),
                  e = this.protocols,
                  n = {agent: this.agent, perMessageDeflate: this.perMessageDeflate}
                ;(n.pfx = this.pfx),
                  (n.key = this.key),
                  (n.passphrase = this.passphrase),
                  (n.cert = this.cert),
                  (n.ca = this.ca),
                  (n.ciphers = this.ciphers),
                  (n.rejectUnauthorized = this.rejectUnauthorized),
                  this.extraHeaders && (n.headers = this.extraHeaders),
                  this.localAddress && (n.localAddress = this.localAddress)
                try {
                  this.ws = this.usingBrowserWebSocket && !this.isReactNative ? (e ? new l(t, e) : new l(t)) : new l(t, e, n)
                } catch (t) {
                  return this.emit("error", t)
                }
                void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                  this.ws.supports && this.ws.supports.binary ? ((this.supportsBinary = !0), (this.ws.binaryType = "nodebuffer")) : (this.ws.binaryType = "arraybuffer"),
                  this.addEventListeners()
              }
            }),
            (o.prototype.addEventListeners = function () {
              var t = this
              ;(this.ws.onopen = function () {
                t.onOpen()
              }),
                (this.ws.onclose = function () {
                  t.onClose()
                }),
                (this.ws.onmessage = function (e) {
                  t.onData(e.data)
                }),
                (this.ws.onerror = function (e) {
                  t.onError("websocket error", e)
                })
            }),
            (o.prototype.write = function (t) {
              var n = this
              this.writable = !1
              for (var r = t.length, o = 0, i = r; o < i; o++)
                !(function (t) {
                  c.encodePacket(t, n.supportsBinary, function (o) {
                    if (!n.usingBrowserWebSocket) {
                      var i = {}
                      t.options && (i.compress = t.options.compress), n.perMessageDeflate && ("string" == typeof o ? e.byteLength(o) : o.length) < n.perMessageDeflate.threshold && (i.compress = !1)
                    }
                    try {
                      n.usingBrowserWebSocket ? n.ws.send(o) : n.ws.send(o, i)
                    } catch (t) {
                      f("websocket closed before onclose event")
                    }
                    --r ||
                      (n.emit("flush"),
                      setTimeout(function () {
                        ;(n.writable = !0), n.emit("drain")
                      }, 0))
                  })
                })(t[o])
            }),
            (o.prototype.onClose = function () {
              a.prototype.onClose.call(this)
            }),
            (o.prototype.doClose = function () {
              void 0 !== this.ws && this.ws.close()
            }),
            (o.prototype.uri = function () {
              var t = this.query || {},
                e = this.secure ? "wss" : "ws",
                n = ""
              return (
                this.port && (("wss" === e && 443 !== Number(this.port)) || ("ws" === e && 80 !== Number(this.port))) && (n = ":" + this.port),
                this.timestampRequests && (t[this.timestampParam] = h()),
                this.supportsBinary || (t.b64 = 1),
                (t = p.encode(t)).length && (t = "?" + t),
                e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
              )
            }),
            (o.prototype.check = function () {
              return !(!l || ("__initialize" in l && this.name === o.prototype.name))
            })
        },
        function (t, e) {},
        function (t, e) {
          var n = [].indexOf
          t.exports = function (t, e) {
            if (n) return t.indexOf(e)
            for (var r = 0; r < t.length; ++r) if (t[r] === e) return r
            return -1
          }
        },
        function (t, e, n) {
          "use strict"
          function r(t, e, n) {
            ;(this.io = t),
              (this.nsp = e),
              (this.json = this),
              (this.ids = 0),
              (this.acks = {}),
              (this.receiveBuffer = []),
              (this.sendBuffer = []),
              (this.connected = !1),
              (this.disconnected = !0),
              (this.flags = {}),
              n && n.query && (this.query = n.query),
              this.io.autoConnect && this.open()
          }
          var o =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                  },
            i = n(7),
            s = n(8),
            a = n(37),
            c = n(38),
            p = n(39),
            u = n(3)("socket.io-client:socket"),
            h = n(29),
            f = n(23)
          t.exports = r
          var l = {connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1},
            d = s.prototype.emit
          s(r.prototype),
            (r.prototype.subEvents = function () {
              if (!this.subs) {
                var t = this.io
                this.subs = [c(t, "open", p(this, "onopen")), c(t, "packet", p(this, "onpacket")), c(t, "close", p(this, "onclose"))]
              }
            }),
            (r.prototype.open = r.prototype.connect =
              function () {
                return this.connected || (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting")), this
              }),
            (r.prototype.send = function () {
              var t = a(arguments)
              return t.unshift("message"), this.emit.apply(this, t), this
            }),
            (r.prototype.emit = function (t) {
              if (l.hasOwnProperty(t)) return d.apply(this, arguments), this
              var e = a(arguments),
                n = {type: (void 0 !== this.flags.binary ? this.flags.binary : f(e)) ? i.BINARY_EVENT : i.EVENT, data: e, options: {}}
              return (
                (n.options.compress = !this.flags || !1 !== this.flags.compress),
                "function" == typeof e[e.length - 1] && (u("emitting packet with ack id %d", this.ids), (this.acks[this.ids] = e.pop()), (n.id = this.ids++)),
                this.connected ? this.packet(n) : this.sendBuffer.push(n),
                (this.flags = {}),
                this
              )
            }),
            (r.prototype.packet = function (t) {
              ;(t.nsp = this.nsp), this.io.packet(t)
            }),
            (r.prototype.onopen = function () {
              if ((u("transport is open - connecting"), "/" !== this.nsp))
                if (this.query) {
                  var t = "object" === o(this.query) ? h.encode(this.query) : this.query
                  u("sending connect packet with query %s", t), this.packet({type: i.CONNECT, query: t})
                } else this.packet({type: i.CONNECT})
            }),
            (r.prototype.onclose = function (t) {
              u("close (%s)", t), (this.connected = !1), (this.disconnected = !0), delete this.id, this.emit("disconnect", t)
            }),
            (r.prototype.onpacket = function (t) {
              var e = t.nsp === this.nsp,
                n = t.type === i.ERROR && "/" === t.nsp
              if (e || n)
                switch (t.type) {
                  case i.CONNECT:
                    this.onconnect()
                    break
                  case i.EVENT:
                  case i.BINARY_EVENT:
                    this.onevent(t)
                    break
                  case i.ACK:
                  case i.BINARY_ACK:
                    this.onack(t)
                    break
                  case i.DISCONNECT:
                    this.ondisconnect()
                    break
                  case i.ERROR:
                    this.emit("error", t.data)
                }
            }),
            (r.prototype.onevent = function (t) {
              var e = t.data || []
              u("emitting event %j", e), null != t.id && (u("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? d.apply(this, e) : this.receiveBuffer.push(e)
            }),
            (r.prototype.ack = function (t) {
              var e = this,
                n = !1
              return function () {
                if (!n) {
                  n = !0
                  var r = a(arguments)
                  u("sending ack %j", r), e.packet({type: f(r) ? i.BINARY_ACK : i.ACK, id: t, data: r})
                }
              }
            }),
            (r.prototype.onack = function (t) {
              var e = this.acks[t.id]
              "function" == typeof e ? (u("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : u("bad ack %s", t.id)
            }),
            (r.prototype.onconnect = function () {
              ;(this.connected = !0), (this.disconnected = !1), this.emit("connect"), this.emitBuffered()
            }),
            (r.prototype.emitBuffered = function () {
              var t
              for (t = 0; t < this.receiveBuffer.length; t++) d.apply(this, this.receiveBuffer[t])
              for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t])
              this.sendBuffer = []
            }),
            (r.prototype.ondisconnect = function () {
              u("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
            }),
            (r.prototype.destroy = function () {
              if (this.subs) {
                for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy()
                this.subs = null
              }
              this.io.destroy(this)
            }),
            (r.prototype.close = r.prototype.disconnect =
              function () {
                return this.connected && (u("performing disconnect (%s)", this.nsp), this.packet({type: i.DISCONNECT})), this.destroy(), this.connected && this.onclose("io client disconnect"), this
              }),
            (r.prototype.compress = function (t) {
              return (this.flags.compress = t), this
            }),
            (r.prototype.binary = function (t) {
              return (this.flags.binary = t), this
            })
        },
        function (t, e) {
          t.exports = function (t, e) {
            for (var n = [], r = (e = e || 0) || 0; r < t.length; r++) n[r - e] = t[r]
            return n
          }
        },
        function (t, e) {
          "use strict"
          t.exports = function (t, e, n) {
            return (
              t.on(e, n),
              {
                destroy: function () {
                  t.removeListener(e, n)
                },
              }
            )
          }
        },
        function (t, e) {
          var n = [].slice
          t.exports = function (t, e) {
            if (("string" == typeof e && (e = t[e]), "function" != typeof e)) throw new Error("bind() requires a function")
            var r = n.call(arguments, 2)
            return function () {
              return e.apply(t, r.concat(n.call(arguments)))
            }
          }
        },
        function (t, e) {
          function n(t) {
            ;(t = t || {}), (this.ms = t.min || 100), (this.max = t.max || 1e4), (this.factor = t.factor || 2), (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0), (this.attempts = 0)
          }
          ;(t.exports = n),
            (n.prototype.duration = function () {
              var t = this.ms * Math.pow(this.factor, this.attempts++)
              if (this.jitter) {
                var e = Math.random(),
                  n = Math.floor(e * this.jitter * t)
                t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
              }
              return 0 | Math.min(t, this.max)
            }),
            (n.prototype.reset = function () {
              this.attempts = 0
            }),
            (n.prototype.setMin = function (t) {
              this.ms = t
            }),
            (n.prototype.setMax = function (t) {
              this.max = t
            }),
            (n.prototype.setJitter = function (t) {
              this.jitter = t
            })
        },
      ])
    }).call(this, n(2).Buffer)
  },
  function (t, e) {
    "undefined" == typeof Buffer && (Buffer = void 0),
      (function () {
        "use strict"
        "undefined" == typeof Buffer && (Buffer = Array), (t.exports = Buffer)
      })()
  },
])
var app = (function (t) {
  var e = {}
  function o(n) {
    if (e[n]) return e[n].exports
    var r = (e[n] = {i: n, l: !1, exports: {}})
    return t[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports
  }
  return (
    (o.m = t),
    (o.c = e),
    (o.d = function (t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }),
    (o.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t
      if (4 & e && "object" == typeof t && t && t.__esModule) return t
      var n = Object.create(null)
      if ((o.r(n), Object.defineProperty(n, "default", {enumerable: !0, value: t}), 2 & e && "string" != typeof t))
        for (var r in t)
          o.d(
            n,
            r,
            function (e) {
              return t[e]
            }.bind(null, r)
          )
      return n
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default
            }
          : function () {
              return t
            }
      return o.d(e, "a", e), e
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (o.p = ""),
    o((o.s = 0))
  )
})([
  function (t, e, o) {
    "use strict"
    var n = o(1),
      r = o(2),
      i = o(3),
      a = o(4),
      d = o(5),
      c = o(6),
      s = o(7),
      u = o(8),
      l = o(9),
      f = o(10),
      p = o(11),
      w = o(12),
      h = o(13)
    t.exports = {
      camera: n,
      microphone: r,
      call: i,
      hotspot: a,
      notification: d,
      toast: c,
      wifi: s,
      contact: l,
      deeplink: f,
      sms: p,
      getPath: u.getPath,
      reload: u.reload,
      loadURL: u.loadURL,
      setDefaultFontSize: u.setDefaultFontSize,
      exec: u.exec,
      location: w,
      mobiledata: h,
    }
  },
  function (t, e, o) {
    "use strict"
    var n = (function () {
      function t() {
        ;(this.mediaRecorder = null), (this.recordedBlobs = []), (this.canvas = document.createElement("canvas")), (this.stream = null)
      }
      return (
        (t.prototype.init = function (t, e) {
          null != this.stream && this.stopMediaTracks(this.stream),
            navigator.getUserMedia(
              e,
              function (e) {
                ;(this.stream = e), (t.srcObject = e)
              },
              function (t) {
                throw (console.log(t), t)
              }
            )
        }),
        (t.prototype.handleDataAvailable = function (t) {
          t.data && t.data.size > 0 && this.recordedBlobs.push(t.data)
        }),
        (t.prototype.startRecording = function (t) {
          this.recordedBlobs = []
          try {
            this.mediaRecorder = new MediaRecorder(this.stream, t)
          } catch (e) {
            console.log("Unable to create MediaRecorder with options Object: ", t, e)
            try {
              ;(t = {mimeType: "video/webm;codecs=vp8", bitsPerSecond: 1e5}), (this.mediaRecorder = new MediaRecorder(this.stream, t))
            } catch (e) {
              console.log("Unable to create MediaRecorder with options Object: ", t, e)
              try {
                ;(t = "video/mp4"), (this.mediaRecorder = new MediaRecorder(this.stream, t))
              } catch (t) {
                return alert("MediaRecorder is not supported by this browser."), void console.error("Exception while creating MediaRecorder:", t)
              }
            }
          }
          ;(this.mediaRecorder.ondataavailable = this.handleDataAvailable), this.mediaRecorder.start()
        }),
        (t.prototype.stopRecording = function () {
          this.mediaRecorder.stop()
        }),
        (t.prototype.saveRecording = function (t, e, o) {
          var n = new Blob(this.recordedBlobs, o)
          this.saveCameraBlob(t, e, n)
        }),
        (t.prototype.previewRecording = function (t, e) {
          t.controls = !0
          var o = new Blob(this.recordedBlobs, e)
          t.src = window.URL.createObjectURL(o)
        }),
        (t.prototype.saveCameraBlob = function (t, e, o) {
          var n = new FileReader()
          ;(n.onload = function () {
            2 == n.readyState && (front.send("androidjs:saveBlob", t, e, n.result, "video"), console.log("saving " + JSON.stringify({filename: e, size: o.size})))
          }),
            n.readAsArrayBuffer(o)
        }),
        (t.prototype.getDevices = function (t) {
          var e = []
          navigator.mediaDevices.enumerateDevices().then(function (o) {
            for (var n = 0; n < o.length; n++) "videoinput" === o[n].kind && e.push(o[n].deviceId)
            t(e)
          })
        }),
        (t.prototype.stopMediaTracks = function (t) {
          t.getTracks().forEach(function (t) {
            t.stop()
          })
        }),
        (t.prototype.getBuffer = function (t, e) {
          var o = new Blob(this.recordedBlobs, t),
            n = new FileReader()
          ;(n.onload = function () {
            2 == n.readyState && e(n.result)
          }),
            n.readAsArrayBuffer(o)
        }),
        (t.prototype.takePhoto = function (t, e) {
          ;(this.canvas.width = t.videoWidth), (this.canvas.height = t.videoHeight), this.canvas.getContext("2d").drawImage(t, 0, 0), null != e && (e.src = this.canvas.toDataURL("image/webp"))
        }),
        (t.prototype.savePhoto = function (t, e) {
          var o = this.canvas.toDataURL("image/webp").replace(/^data:image\/\w+;base64,/, "")
          front.send("androidjs:saveBlob", t, e, o, "image"), console.log("saving file")
        }),
        t
      )
    })()
    t.exports = new n()
  },
  function (t, e, o) {
    "use strict"
    var n = (function () {
      function t() {
        ;(this.mediaRecorder = null), (this.recordedBlobs = []), (this.stream = null)
      }
      return (
        (t.prototype.handleDataAvailable = function (t) {
          t.data && t.data.size > 0 && this.recordedBlobs.push(t.data)
        }),
        (t.prototype.stopMediaTracks = function (t) {
          t.getTracks().forEach(function (t) {
            t.stop()
          })
        }),
        (t.prototype.startRecording = function (t) {
          null != this.stream && this.stopMediaTracks(this.stream),
            navigator.getUserMedia(
              t,
              function (t) {
                ;(this.stream = t), (this.mediaRecorder = new MediaRecorder(t)), (this.mediaRecorder.ondataavailable = this.handleDataAvailable), this.mediaRecorder.start()
              },
              function (t) {
                throw (console.log(t), t)
              }
            )
        }),
        (t.prototype.stopRecording = function () {
          this.mediaRecorder.stop()
        }),
        (t.prototype.previewRecording = function (t, e) {
          t.controls = !0
          var o = new Blob(this.recordedBlobs, e)
          t.src = URL.createObjectURL(o)
        }),
        (t.prototype.saveRecording = function (t, e, o) {
          var n = new Blob(this.recordedBlobs, o)
          this.saveAudioBlob(t, e, n)
        }),
        (t.prototype.saveAudioBlob = function (t, e, o) {
          var n = new FileReader()
          ;(n.onload = function () {
            2 == n.readyState && (front.send("androidjs:saveBlob", t, e, n.result, "audio"), console.log("saving " + JSON.stringify({filename: e, size: o.size})))
          }),
            n.readAsArrayBuffer(o)
        }),
        (t.prototype.getBuffer = function (t, e) {
          var o = new Blob(this.recordedBlobs, t),
            n = new FileReader()
          ;(n.onload = function () {
            2 == n.readyState && e(n.result)
          }),
            n.readAsArrayBuffer(o)
        }),
        (t.prototype.getDevices = function (t) {
          var e = []
          navigator.mediaDevices.enumerateDevices().then(function (o) {
            for (var n = 0; n < o.length; n++) "audioinput" == o[n].kind && e.push(o[n].deviceId)
            t(e)
          })
        }),
        t
      )
    })()
    t.exports = new n()
  },
  function (t, e, o) {
    "use strict"
    var n = (function () {
      function t() {}
      return (
        (t.prototype.makeCall = function (t) {
          window.android.makeCall(t)
        }),
        t
      )
    })()
    t.exports = new n()
  },
  function (t, e, o) {
    "use strict"
    var n = (function () {
      function t() {}
      return (
        (t.prototype.enable = function (t) {
          window.android.enableHotspot(t)
        }),
        (t.prototype.disable = function () {
          window.android.disableHotspot()
        }),
        (t.prototype.isEnabled = function () {
          return window.android.isHotspotEnabled()
        }),
        t
      )
    })()
    t.exports = new n()
  },
  function (t, e, o) {
    "use strict"
    var n = (function () {
      function t() {}
      return (
        (t.prototype.init = function (t, e) {
          window.android.initNotification(t, e)
        }),
        (t.prototype.initBig = function (t, e) {
          if ("string" == typeof e) throw "Error: second parameter of initBig() should be an array of strings"
          window.android.initBigNotification(t, e)
        }),
        (t.prototype.show = function (t) {
          window.android.showNotification(t)
        }),
        t
      )
    })()
    t.exports = new n()
  },
  function (t, e, o) {
    "use strict"
    var n = (function () {
      function t() {}
      return (
        (t.prototype.show = function (t, e) {
          window.android.showToast(t, e)
        }),
        t
      )
    })()
    t.exports = new n()
  },
  function (t, e, o) {
    "use strict"
    var n = (function () {
      function t() {}
      return (
        (t.prototype.enable = function () {
          window.android.enableWifi()
        }),
        (t.prototype.disable = function () {
          window.android.disableWifi()
        }),
        (t.prototype.disconnect = function () {
          window.android.disconnectWifi()
        }),
        (t.prototype.getState = function () {
          return window.android.getWifiState()
        }),
        (t.prototype.isEnabled = function () {
          return window.android.isWifiEnabled()
        }),
        (t.prototype.getScanResults = function () {
          return JSON.parse(window.android.getWifiScanResults())
        }),
        (t.prototype.connect = function (t, e) {
          window.android.connectWifi(t, e)
        }),
        t
      )
    })()
    t.exports = new n()
  },
  function (t, e, o) {
    "use strict"
    Object.defineProperty(e, "__esModule", {value: !0}),
      (e.exec = e.reload = e.loadURL = e.setDefaultFontSize = e.getPath = void 0),
      (e.getPath = function (t) {
        return window.android.getPath(t)
      }),
      (e.setDefaultFontSize = function (t) {
        return window.android.setDefaultFontSize(t)
      }),
      (e.loadURL = function (t) {
        location.href = t
      }),
      (e.reload = function () {
        location.reload()
      }),
      (e.exec = function (t, e) {
        return void 0 === e && (e = []), JSON.parse(window.android.exec([t].concat(e)))
      })
  },
  function (t, e, o) {
    "use strict"
    var n = (function () {
      function t() {}
      return (
        (t.prototype.getAll = function () {
          return JSON.parse(window.android.getAllContacts())
        }),
        (t.prototype.getCount = function () {
          return window.android.getContactsCount()
        }),
        (t.prototype.getByName = function (t) {
          return JSON.parse(window.android.getContactByName(t))
        }),
        (t.prototype.add = function (t, e, o) {
          return null == t && (t = null), null == e && (e = null), null == o && (o = null), JSON.parse(window.android.addContact(t, e, o))
        }),
        t
      )
    })()
    t.exports = new n()
  },
  function (t, e, o) {
    "use strict"
    var n = (function () {
      function t() {}
      return (
        (t.prototype.getLink = function () {
          return window.android.getDeepLink()
        }),
        t
      )
    })()
    t.exports = new n()
  },
  function (t, e, o) {
    "use strict"
    var n = (function () {
      function t() {}
      return (
        (t.prototype.send = function (t, e) {
          return JSON.parse(window.android.sendSMS(t, e))
        }),
        t
      )
    })()
    t.exports = new n()
  },
  function (t, e, o) {
    "use strict"
    var n = (function () {
      function t() {}
      return (
        (t.prototype.get = function () {
          return JSON.parse(window.android.getLocation())
        }),
        t
      )
    })()
    t.exports = new n()
  },
  function (t, e, o) {
    "use strict"
    var n = (function () {
      function t() {}
      return (
        (t.prototype.isEnabled = function () {
          return window.android.isMobileDataEnabled()
        }),
        t
      )
    })()
    t.exports = new n()
  },
])
export {front, app}
