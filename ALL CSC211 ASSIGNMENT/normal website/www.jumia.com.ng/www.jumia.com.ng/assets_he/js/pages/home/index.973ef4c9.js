"use strict";
(self.webpackChunkhelium = self.webpackChunkhelium || []).push([
    [1404], {
        7600: (e, t, r) => {
            r.d(t, {
                A: () => o
            });
            var n = r(2575);
            const o = () => {
                var e = $doc.findAll('[href="#top"]');
                e && e.forEach((e => {
                    $h(e).on("click", (e => {
                        e.preventDefault(), (0, n.V)()
                    }))
                }))
            }
        },
        5759: (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var n = r(7178),
                o = store.get("timeLabels", {}),
                i = (e, t, r) => {
                    var n = (e => {
                        const {
                            floor: t
                        } = Math, r = {
                            w: 0,
                            d: 0,
                            h: 0,
                            m: 0,
                            s: 0
                        }, n = e - (new Date).getTime();
                        if (n < 0) return r;
                        let o = n / 1e3;
                        return r.w = t(o / 604800), o -= 604800 * r.w, r.d = t(o / 86400), o -= 86400 * r.d, r.h = t(o / 3600) % 24, o -= 3600 * r.h, r.m = t(o / 60) % 60, o -= 60 * r.m, r.s = t(o % 60), r
                    })(e);
                    if (0 === Object.values(n).filter(Boolean).length) return t(n), void(r && r());
                    t(n)
                },
                a = (e, t, r) => {
                    t.innerHTML((0, n.D)(e, r))
                };
            const c = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "[data-cd]",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "datetime",
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a,
                    n = arguments.length > 3 ? arguments[3] : void 0;
                $doc.findAll(e).forEach((e => {
                    var a = $h(e),
                        c = n ? () => n(a) : null;
                    ((e, t, r) => {
                        var n, o = e.getTime();
                        i(o, t), n = setInterval(i.bind(void 0, o, t, (() => {
                            clearInterval(n), r && r()
                        })), 1e3)
                    })(new Date(a.attr(t)), (e => r(e, a, o)), c)
                }))
            }
        },
        5698: (e, t, r) => {
            r.d(t, {
                A: () => u
            });
            var n = r(5816),
                o = r(7558),
                i = r(9077);

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function(t) {
                        var n, o, i, a;
                        n = e, o = t, i = r[t], (o = "symbol" == typeof(a = function(e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(e, "string");
                                if ("object" != typeof n) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o)) ? a : String(a)) in n ? Object.defineProperty(n, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[o] = i
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var l = ".sld",
                f = "data-lazy-slide",
                d = {
                    timer: 0
                },
                v = (e, t) => e.find("".concat(l, ":checked + .itm").concat(t ? " ".concat(t) : "")),
                s = e => v(e, "img");
            const u = function() {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = $h(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".sldr");
                if (t.get()) {
                    var r = t.findAll("".concat(l, " + .itm img")),
                        a = r.length;
                    if (a) return ((e, t, r, a) => {
                        var c, d = null,
                            u = {
                                toLoad: [],
                                loaded: []
                            },
                            h = () => {
                                if (u.loaded.length !== r) {
                                    var n = s(e);
                                    ((e, t, r) => {
                                        var n = t - 1,
                                            o = e === n ? 0 : e + 1,
                                            i = 0 === e ? n : e - 1;
                                        r.toLoad = [e, o, i].filter(((e, t, n) => n.indexOf(e) === t && -1 === r.loaded.indexOf(e)))
                                    })(n ? t.indexOf(n.get()) : 1, r, u), ((e, t) => {
                                        t.toLoad.forEach((r => {
                                            var n = e[r];
                                            n.hasAttribute(f) && (t.loaded.push(r), (0, o.A)(n, {
                                                lazyAttribute: f
                                            }))
                                        }), void 0)
                                    })(t, u)
                                }
                            },
                            b = e => {
                                e.get().checked = !0, "function" == typeof d && d(e)
                            },
                            p = () => {
                                clearInterval(c)
                            },
                            g = () => {
                                p(), c = setInterval((() => {
                                    var t = s(e);
                                    if (t) {
                                        if (!t.get().hasAttribute(f)) {
                                            var r = e.find("".concat(l, ":checked ~ ").concat(l)) || e.find(l);
                                            r ? b(r) : p()
                                        }
                                        h()
                                    }
                                }), a.timer)
                            };
                        h(), a.timer && r > 1 && (0, n.A)(e.get(), .75, g, p);
                        var y = e.findAll(l);
                        y.forEach((e => {
                            $h(e).on("click", (() => {
                                h(), a.timer && g()
                            }))
                        })), a.onChange && y.forEach((e => {
                            $h(e).on("change", a.onChange)
                        }));
                        var O = e.data("trackOnsliderview");
                        if (O) {
                            var m = () => {
                                var t = v(e);
                                t && (0, i.P)(t.get(), {
                                    viewType: O
                                })
                            };
                            m(), d = e => {
                                m(), e.off("change", j)
                            };
                            var j = e => {
                                d($h(e.target))
                            };
                            e.findAll("".concat(l, ":not(:first-of-type)")).forEach((e => {
                                $h(e).on("change", j)
                            }))
                        }
                        return {
                            slideTo: t => {
                                var r = e.find("".concat(l, ":nth-of-type(").concat(t, ")"));
                                r && (b(r), h())
                            }
                        }
                    })(t, r, a, c(c({}, d), e))
                }
            }
        },
        6820: (e, t, r) => {
            r.d(t, {
                A: () => o
            });
            var n = r(5698);
            const o = function() {
                var {
                    timer: e = 7e3
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                $doc.findAll('.sldr[id^="cms-sld-"]').forEach((t => {
                    (0, n.A)("#".concat(t.id), "1" === t.dataset.wdct ? {
                        timer: e
                    } : {})
                }))
            }
        },
        9780: (e, t, r) => {
            var n = r(2580),
                o = r(6820),
                i = r(5698),
                a = r(5759),
                c = r(7600);
            (0, n.P)((() => {
                (0, i.A)("#sl-topblock", {
                    timer: 7e3
                }), (0, a.A)(), (0, c.A)(), (0, o.A)({
                    timer: 0
                })
            }))
        },
        5816: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            var n = r(8670);

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach((function(t) {
                        var n, o, i, a;
                        n = e, o = t, i = r[t], (o = "symbol" == typeof(a = function(e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(e, "string");
                                if ("object" != typeof n) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return String(e)
                        }(o)) ? a : String(a)) in n ? Object.defineProperty(n, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[o] = i
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const a = function(e, t, r) {
                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
                    a = i(i({}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}), {}, {
                        threshold: t
                    }),
                    c = new n.A((e => {
                        e.forEach((e => {
                            e.intersectionRatio < t ? o(e) : r(e)
                        }))
                    }), a);
                return Array.isArray(e) ? e.forEach((e => {
                    e && c.observe(e)
                })) : e && c.observe(e), c
            }
        },
        7178: (e, t, r) => {
            r.d(t, {
                D: () => o,
                j: () => n
            });
            const n = (e, t) => {
                    const r = {};
                    return Object.keys(e).forEach((n => {
                        const o = e[n].toString();
                        r[n] = o.length < t ? o.padStart(t, "0") : o
                    })), r
                },
                o = (e, t) => {
                    const r = Object.keys(e),
                        o = r.indexOf(e.w ? "w" : e.d ? "d" : "h"),
                        i = r.slice(o, o + 3),
                        a = n(e, 2);
                    return i.map((e => `${a[e]}${t[e]}`)).join(" : ")
                }
        }
    },
    e => {
        e(e.s = 9780)
    }
]);