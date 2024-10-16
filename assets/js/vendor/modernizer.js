!function(s, f, c) {
    function m(e, t) {
        return typeof e === t
    }
    function i(e) {
        var t,
            n = T.className,
            o = _._config.classPrefix || "";
        E && (n = n.baseVal),
        _._config.enableJSClass && (t = new RegExp("(^|\\s)" + o + "no-js(\\s|$)"), n = n.replace(t, "$1" + o + "js$2")),
        _._config.enableClasses && (n += " " + o + e.join(" " + o), E ? T.className.baseVal = n : T.className = n)
    }
    function a(e, t) {
        if ("object" == typeof e)
            for (var n in e)
                u(e, n) && a(n, e[n]);
        else {
            var o = (e = e.toLowerCase()).split("."),
                r = _[o[0]];
            if (void 0 !== (r = 2 == o.length ? r[o[1]] : r))
                return _;
            t = "function" == typeof t ? t() : t,
            1 == o.length ? _[o[0]] = t : (!_[o[0]] || _[o[0]] instanceof Boolean || (_[o[0]] = new Boolean(_[o[0]])), _[o[0]][o[1]] = t),
            i([(t && 0 != t ? "" : "no-") + o.join("-")]),
            _._trigger(e, t)
        }
        return _
    }
    function p(e) {
        return "function" != typeof f.createElement ? f.createElement(e) : E ? f.createElementNS.call(f, "http://www.w3.org/2000/svg", e) : f.createElement.apply(f, arguments)
    }
    function r(e, t, n, o) {
        var r,
            s,
            i,
            a,
            l = "modernizr",
            u = p("div");
        (a = f.body) || ((a = p(E ? "svg" : "body")).fake = !0);
        if (parseInt(n, 10))
            for (; n--;)
                (s = p("div")).id = o ? o[n] : l + (n + 1),
                u.appendChild(s);
        return (r = p("style")).type = "text/css", r.id = "s" + l, (a.fake ? a : u).appendChild(r), a.appendChild(u), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(f.createTextNode(e)), u.id = l, a.fake && (a.style.background = "", a.style.overflow = "hidden", i = T.style.overflow, T.style.overflow = "hidden", T.appendChild(a)), r = t(u, e), a.fake ? (a.parentNode.removeChild(a), T.style.overflow = i, T.offsetHeight) : u.parentNode.removeChild(u), !!r
    }
    function l(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function R(e, t) {
        var n = e.length;
        if ("CSS" in s && "supports" in s.CSS) {
            for (; n--;)
                if (s.CSS.supports(l(e[n]), t))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule" in s) {
            for (var o = []; n--;)
                o.push("(" + l(e[n]) + ":" + t + ")");
            return r("@supports (" + (o = o.join(" or ")) + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == (e = e, t = null, n = "position", "getComputedStyle" in s ? (o = getComputedStyle.call(s, e, t), r = s.console, null !== o ? n && (o = o.getPropertyValue(n)) : r && r[r.error ? "error" : "log"].call(r, "getComputedStyle returning null, its possible modernizr test results are inaccurate")) : o = !t && e.currentStyle && e.currentStyle[n], o);
                var t,
                    n,
                    o,
                    r
            })
        }
        return c
    }
    function h(e, t, n, o) {
        function r() {
            i && (delete B.style, delete B.modElem)
        }
        if (o = void 0 !== o && o, void 0 !== n) {
            var s = R(e, n);
            if (void 0 !== s)
                return s
        }
        for (var i, a, l, u, f, d = ["modernizr", "tspan", "samp"]; !B.style && d.length;)
            i = !0,
            B.modElem = p(d.shift()),
            B.style = B.modElem.style;
        for (l = e.length, a = 0; a < l; a++)
            if (u = e[a], f = B.style[u], ~("" + u).indexOf("-") && (u = u.replace(/([a-z])-([a-z])/g, function(e, t, n) {
                return t + n.toUpperCase()
            }).replace(/^-/, "")), B.style[u] !== c) {
                if (o || void 0 === n)
                    return r(), "pfx" != t || u;
                try {
                    B.style[u] = n
                } catch (e) {}
                if (B.style[u] != f)
                    return r(), "pfx" != t || u
            }
        return r(), !1
    }
    function o(e, t, n, o, r) {
        var s,
            i,
            a = e.charAt(0).toUpperCase() + e.slice(1),
            l = (e + " " + G.join(a + " ") + a).split(" ");
        if (m(t, "string") || void 0 === t)
            return h(l, t, o, r);
        var u = l = (e + " " + P.join(a + " ") + a).split(" "),
            f = t,
            d = n;
        for (i in u)
            if (u[i] in f)
                if (!1 === d)
                    return u[i];
                else {
                    s = f[u[i]];
                    if (m(s, "function")) {
                        var c = s;
                        var p = d || f;
                        return function() {
                            return c.apply(p, arguments)
                        };
                        return
                    } else
                        return s
                }
        return !1
    }
    function n(e, t, n) {
        return o(e, c, c, t, n)
    }
    var u,
        d,
        A,
        t,
        e,
        g,
        v,
        y,
        C,
        b,
        w,
        S = [],
        x = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                S.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                S.push({
                    name: null,
                    fn: e
                })
            }
        },
        _ = function() {},
        M = (_.prototype = x, _ = new _, []),
        T = f.documentElement,
        E = "svg" === T.nodeName.toLowerCase(),
        W = "Moz O ms Webkit",
        P = x._config.usePrefixes ? W.toLowerCase().split(" ") : [],
        k = (x._domPrefixes = P, x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""]),
        q = (x._prefixes = k, u = void 0 === (d = {}.hasOwnProperty) || void 0 === d.call ? function(e, t) {
            return t in e && void 0 === e.constructor.prototype[t]
        } : function(e, t) {
            return d.call(e, t)
        }, x._l = {}, x.on = function(e, t) {
            this._l[e] || (this._l[e] = []),
            this._l[e].push(t),
            _.hasOwnProperty(e) && setTimeout(function() {
                _._trigger(e, _[e])
            }, 0)
        }, x._trigger = function(e, t) {
            var n;
            this._l[e] && (n = this._l[e], setTimeout(function() {
                for (var e = 0; e < n.length; e++)
                    (0, n[e])(t)
            }, 0), delete this._l[e])
        }, _._q.push(function() {
            x.addTest = a
        }), A = !("onblur" in f.documentElement), function(e, t) {
            var n;
            return !!e && (!(n = (e = "on" + e) in (t = t && "string" != typeof t ? t : p(t || "div"))) && A && ((t = t.setAttribute ? t : p("div")).setAttribute(e, ""), n = "function" == typeof t[e], t[e] !== c && (t[e] = c), t.removeAttribute(e)), n)
        }),
        k = (x.hasEvent = q, (t = s.matchMedia || s.msMatchMedia) ? function(e) {
            e = t(e);
            return e && e.matches || !1
        } : function(e) {
            var t = !1;
            return r("@media " + e + " { #modernizr { position: absolute; } }", function(e) {
                t = "absolute" == (s.getComputedStyle ? s.getComputedStyle(e, null) : e.currentStyle).position
            }), t
        }),
        G = (x.mq = k, x.prefixedCSSValue = function(e, t) {
            var n = !1,
                o = p("div").style;
            if (e in o) {
                var r = P.length;
                for (o[e] = t, n = o[e]; r-- && !n;)
                    o[e] = "-" + P[r] + "-" + t,
                    n = o[e]
            }
            return n = "" === n ? !1 : n
        }, x._config.usePrefixes ? W.split(" ") : []),
        I = (x._cssomPrefixes = G, {
            elem: p("modernizr")
        }),
        B = (_._q.push(function() {
            delete I.elem
        }), {
            style: I.elem.style
        }),
        k = (_._q.unshift(function() {
            delete B.style
        }), x.testAllProps = o, x.testAllProps = n, x.testProp = function(e, t, n) {
            return h([e], c, t, n)
        }, x.testStyles = r, _.addTest("customelements", "customElements" in s), _.addTest("history", function() {
            var e = navigator.userAgent;
            return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone") || "file:" === location.protocol) && (s.history && "pushState" in s.history)
        }), _.addTest("pointerevents", function() {
            for (var e = !1, t = P.length, e = _.hasEvent("pointerdown"); t-- && !e;)
                q(P[t] + "pointerdown") && (e = !0);
            return e
        }), _.addTest("postmessage", "postMessage" in s), _.addTest("webgl", function() {
            var e = p("canvas"),
                t = "probablySupportsContext" in e ? "probablySupportsContext" : "supportsContext";
            return t in e ? e[t]("webgl") || e[t]("experimental-webgl") : "WebGLRenderingContext" in s
        }), !1);
    try {
        k = "WebSocket" in s && 2 === s.WebSocket.CLOSING
    } catch (e) {}
    _.addTest("websockets", k),
    _.addTest("cssanimations", n("animationName", "a", !0)),
    _.addTest("csscolumns", function() {
        var e = !1,
            t = n("columnCount");
        try {
            e = (e = !!t) && new Boolean(e)
        } catch (e) {}
        return e
    });
    for (var z, O, L = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], N = 0; N < L.length; N++)
        z = L[N].toLowerCase(),
        O = n("column" + L[N]),
        "breakbefore" !== z && "breakafter" !== z && "breakinside" != z || (O = O || n(L[N])),
        _.addTest("csscolumns." + z, O);
    for (w in _.addTest("flexbox", n("flexBasis", "1px", !0)), _.addTest("picture", "HTMLPictureElement" in s), _.addAsyncTest(function() {
        var e,
            t,
            n = p("img"),
            o = "sizes" in n;
        !o && "srcset" in n ? (e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", n.onload = t = function() {
            a("sizes", 2 == n.width)
        }, n.onerror = t, n.setAttribute("sizes", "9px"), n.srcset = e + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 8w", n.src = e) : a("sizes", o)
    }), _.addTest("srcset", "srcset" in p("img")), _.addTest("webworkers", "Worker" in s), S)
        if (S.hasOwnProperty(w)) {
            if (e = [], (g = S[w]).name && (e.push(g.name.toLowerCase()), g.options && g.options.aliases && g.options.aliases.length))
                for (v = 0; v < g.options.aliases.length; v++)
                    e.push(g.options.aliases[v].toLowerCase());
            for (y = m(g.fn, "function") ? g.fn() : g.fn, C = 0; C < e.length; C++)
                1 === (b = e[C].split(".")).length ? _[b[0]] = y : (!_[b[0]] || _[b[0]] instanceof Boolean || (_[b[0]] = new Boolean(_[b[0]])), _[b[0]][b[1]] = y),
                M.push((y ? "" : "no-") + b.join("-"))
        }
    i(M),
    delete x.addTest,
    delete x.addAsyncTest;
    for (var j = 0; j < _._q.length; j++)
        _._q[j]();
    s.Modernizr = _
}(window, document);