var cc = function (e) {
    function t(r) {
        if (n[r])return n[r].exports;
        var i = n[r] = {exports: {}, id: r, loaded: !1};
        return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "/assets/", t(0)
}([function (e, t, n) {
    var r;
    n(1), n(2), n(3), n(4), n(26), r = {
        events: n(31),
        extension: {},
        notification: n(42),
        templates: n(43),
        editors: n(44),
        fn: n(32),
        api: n(69),
        rest: n(135),
        sync: n(52),
        getReadOnlyDS: n(142),
        redux: {store: n(83), actionTypes: n(96), actions: n(103)},
        sidebar: n(143),
        lodash: n(29)
    }, r.VERSION = "Release 1.5.21", window._ && delete window._, $.extend(r, n(45), n(55)), e.exports = r
}, function (e, t) {
    window.CorasCloud = window.CorasCloud || {}, window.CorasCloud.Consent = function () {
        var e = null, t = null, n = null, r = function () {
            null === e || e.closed ? i() : n = window.setTimeout(CorasCloud.Consent.Check, 1e3)
        }, i = function () {
            window.clearTimeout(n), null === e || e.closed || e.close(), $("#blockParent").fadeOut("fast"), $("body").css("overflow-y", "auto")
        }, a = function (e) {
            i(), t && t(e)
        }, o = function (r, a) {
            var o = $("#blockParent");
            return 0 === o.length && $("<div id='blockParent' style='z-index:10500;position:absolute;left:0;top:0;background-color:white;width:100%;height:100%;text-align:center'><div style='font-color:black;position: relative;top: 50%;transform: translateY(-50%);'><img src='/content/images/spinner.gif' /><span style='padding-left:10px'><h2 style='color:black;'>Waiting for consent...<a href='javascript:CorasCloud.Consent.Cancel()'>Cancel</a></h2></span></div></div>").appendTo("body"), window.scrollTo(0, 0), $("body").css("overflow-y", "hidden"), o = $("#blockParent"), o.fadeTo("fast", .6), e = window.open(r, "_blank", "toolbar=0,location=0,menubar=0,height=650,width=800"), null === e ? (o.fadeOut("fast"), void kendo.ui.CcAlertDialog.show({
                height: 300,
                width: 350,
                title: "Consent Failed",
                message: "The App you are trying to open requires access to data outside of CorasNow.<br/><br/>The site is trying to open a Window that will allow you to consent to CorasNow accessing that data.<br/><br/>Please make sure your pop-up blocker is turned off and CorasCloud.com is a trusted site.",
                icon: "warning"
            }).done(function () {
                i()
            })) : (t = a, void(n = window.setTimeout(CorasCloud.Consent.Check, 1e3)))
        };
        return {
            Get: function (e, t) {
                o(e, t)
            }, GetFromConnection: function (e, t) {
                o("/Tenant/StartConsent/" + e, t)
            }, Check: r, Cancel: i, Granted: function (e) {
                a(e)
            }
        }
    }()
}, function (e, t, n) {
    var r;
    r = function () {
        "use strict";
        Object.keys || (Object.keys = function () {
            var e = Object.prototype.hasOwnProperty, t = !{toString: null}.propertyIsEnumerable("toString"), n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], r = n.length;
            return function (i) {
                if ("object" != typeof i && ("function" != typeof i || null === i))throw new TypeError("Object.keys called on non-object");
                var a, o, l = [];
                for (a in i)e.call(i, a) && l.push(a);
                if (t)for (o = 0; r > o; o++)e.call(i, n[o]) && l.push(n[o]);
                return l
            }
        }()), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function (e) {
            if (null == this)throw new TypeError;
            var t, n, r = Object(this), i = r.length >>> 0;
            if (0 === i)return -1;
            for (t = i, arguments.length > 1 && (t = Number(arguments[1]), t != t ? t = 0 : 0 != t && t != 1 / 0 && t != -(1 / 0) && (t = (t > 0 || -1) * Math.floor(Math.abs(t)))), n = t >= 0 ? Math.min(t, i - 1) : i - Math.abs(t); n >= 0; n--)if (n in r && r[n] === e)return n;
            return -1
        }), "function" != typeof String.prototype.endsWith && (String.prototype.endsWith = function (e) {
            return -1 !== this.indexOf(e, this.length - e.length)
        })
    }.call(t, n, t, e), !(void 0 !== r && (e.exports = r))
}, function (e, t) {
    var n = {}, r = {}, i = new ko.nativeTemplateEngine;
    ko.templateSources.stringTemplate = function (e) {
        this.templateName = e
    }, ko.utils.extend(ko.templateSources.stringTemplate.prototype, {
        data: function (e, t) {
            return r[this.templateName] = r[this.templateName] || {}, 1 === arguments.length ? r[this.templateName][e] : void(r[this.templateName][e] = t)
        }, text: function (e) {
            return 0 === arguments.length ? n[this.templateName] : void(n[this.templateName] = e)
        }
    }), i.makeTemplateSource = function (e, t) {
        var n;
        return "string" == typeof e ? (n = (t || document).getElementById(e), n ? new ko.templateSources.domElement(n) : new ko.templateSources.stringTemplate(e)) : e && 1 === e.nodeType || 8 === e.nodeType ? new ko.templateSources.anonymousTemplate(e) : void 0
    }, ko.templates = n, ko.setTemplateEngine(i)
}, function (e, t, n) {
    n(5), n(9)
}, function (e, t, n) {
    var r = $.extend, i = {button: n(6), buttonIconLeft: n(7), buttonIconRight: n(8)};
    r(ko.templates, i), ko.bindingHandlers.button = {
        init: function () {
            return {controlsDescendantBindings: !0}
        }, update: function (e, t, n, r, i) {
            var a = t() || {}, o = "button";
            for (a.faRightClass && (o = "buttonIconRight"), a.faClass && (o = "buttonIconLeft"); e.firstChild;)ko.removeNode(e.firstChild);
            ko.renderTemplate(o, a, {}, e, "replaceNode")
        }
    }
}, function (e, t) {
    e.exports = '<button type="button"\r\n        class="btn"\r\n        data-bind="text: $data.text, css: $data.btnClass, click: $data.click, attr: $data.attr, enable: $data.enable">\r\n</button>'
}, function (e, t) {
    e.exports = '<button type="button"\r\n        class="btn"\r\n        data-bind="css: $data.btnClass, click: $data.click, attr: $data.attr, enable: $data.enable">\r\n            <i class="fa" data-bind="css: $data.faClass"></i>\r\n            <span data-bind="text: $data.text"></span>\r\n</button>'
}, function (e, t) {
    e.exports = '<button type="button"\r\n        class="btn"\r\n        data-bind="css: $data.btnClass, click: $data.click, attr: $data.attr, enable: $data.enable">\r\n            <span data-bind="text: $data.text"></span>\r\n            <i class="fa" data-bind="css: $data.faRightClass"></i>\r\n</button>'
}, function (e, t, n) {
    var r = $.extend, i = {
        notSupported: n(10),
        kendoAutoComplete: n(11),
        kendoButton: n(12),
        kendoCalendar: n(13),
        kendoColorPicker: n(14),
        kendoComboBox: n(15),
        kendoDatePicker: n(16),
        kendoDropDownList: n(17),
        kendoEditor: n(18),
        kendoMaskedTextBox: n(19),
        kendoMultiSelect: n(20),
        kendoNumericTextBox: n(21),
        kendoPager: n(22),
        kendoProgressBar: n(23),
        kendoSlider: n(24),
        kendoTimePicker: n(25)
    };
    r(ko.templates, i), ko.bindingHandlers.kendoControl = {
        init: function () {
            return {controlsDescendantBindings: !0}
        }, update: function (e, t, n, r, a) {
            var o = t() || {}, l = "notSupported";
            for (r.controlType && i[r.controlType] && (l = r.controlType); e.firstChild;)ko.removeNode(e.firstChild);
            ko.renderTemplate(l, o, {}, e, "replaceNode")
        }
    }
}, function (e, t) {
    e.exports = "<div class=\"alert alert-warning\">Unsupported 'controlType'</div>"
}, function (e, t) {
    e.exports = '<select data-bind="kendoAutoComplete: $data.options, attr: $data.attr"></select>'
}, function (e, t) {
    e.exports = '<button data-bind="kendoButton: $data.options, attr: $data.attr"></button>'
}, function (e, t) {
    e.exports = '<div data-bind="kendoCalendar: $data.options, attr: $data.attr"> </div>'
}, function (e, t) {
    e.exports = '<input data-bind="kendoColorPicker: $data.options, attr: $data.attr" />'
}, function (e, t) {
    e.exports = '<input data-bind="kendoComboBox: $data.options, attr: $data.attr" />'
}, function (e, t) {
    e.exports = '<input data-bind="kendoDatePicker: $data.options, attr: $data.attr" />'
}, function (e, t) {
    e.exports = '<input data-bind="kendoDropDownList: $data.options, attr: $data.attr" />'
}, function (e, t) {
    e.exports = '<textarea data-bind="kendoEditor: $data.options, attr: $data.attr"></textarea>'
}, function (e, t) {
    e.exports = '<input data-bind="kendoMaskedTextBox: $data.options, attr: $data.attr" />'
}, function (e, t) {
    e.exports = '<select data-bind="kendoMultiSelect: $data.options, attr: $data.attr"></select>'
}, function (e, t) {
    e.exports = '<input data-bind="kendoNumericTextBox: $data.options, attr: $data.attr" />'
}, function (e, t) {
    e.exports = '<div data-bind="kendoPager: $data.options, attr: $data.attr"></div>'
}, function (e, t) {
    e.exports = '<div data-bind="kendoProgressBar: $data.options, attr: $data.attr"></div>'
}, function (e, t) {
    e.exports = '<input data-bind="kendoSlider: $data.options, attr: $data.attr" />'
}, function (e, t) {
    e.exports = '<input data-bind="kendoTimePicker: $data.options, attr: $data.attr" />'
}, function (e, t, n) {
    n(27), n(28)
}, function (e, t) {
    !function (e, t) {
        "use strict";
        var n, r, i;
        t.data.extensions = t.data.extensions || {};
        var a = t.guid, o = function () {
            var e = localStorage.getItem(n);
            return e ? e.split(",") : []
        }, l = function (t) {
            var r = o(), i = e.grep(r, function (e) {
                return e === t
            });
            i.length || (r.push(t), localStorage.setItem(n, r.join(",")))
        }, s = function () {
            var t = o(), i = [];
            return e.each(t, function (e, t) {
                var a = localStorage.getItem(n + r + t);
                a && i.push(JSON.parse(a))
            }), i
        }, u = function (e) {
            e[i] || (e[i] = a()), l(e[i]), localStorage.setItem(n + r + e[i], JSON.stringify(e))
        }, d = function (e) {
            var t = o(), a = t.indexOf(e[i]);
            a >= 0 && (t.splice(a, 1), localStorage.setItem(n, t.join(",")), localStorage.removeItem(n + r + e[i]))
        }, p = {
            read: function (e) {
                var t = s();
                e.success(t)
            }, create: function (e) {
                u(e.data), e.success(e.data)
            }, update: function (e) {
                u(e.data), e.success(e.data)
            }, destroy: function (e) {
                d(e.data), e.success(e.data)
            }
        };
        t.data.extensions.LocalStorageDataSource = t.data.DataSource.extend({
            init: function (a) {
                if (n = a.itemBase || "kendo-ds", r = a.separator || "-", i = a.schema.model.idField || a.schema.model.id, !i)throw new Error("An id field is required in order to work with localStorage. Please specify an id on your Model.");
                t.data.DataSource.fn.init.call(this, e.extend(!0, {}, {transport: p}, a))
            }
        })
    }($, kendo)
}, function (e, t, n) {
    (function (e) {
        var t = $.extend;
        $.trim;
        !function (n, r) {
            function i(e, t) {
                return e.length ? e[0].attributes.hasOwnProperty(t) : !1
            }

            r.ui.validator.rules = r.ui.validator.rules || {}, t(!0, r.ui.validator.rules, {
                required: function (t, n) {
                    var r, a, o, l = t.is("[data-kendo-role=multiselect]");
                    return l ? (r = t.data("kendoMultiSelect"), o = e.filter(r.value(), function (e) {
                        return "" !== e
                    }), !(i(t, "required") && 0 === o.length)) : (a = t.filter("[type=checkbox]").length && !t.is(":checked"), o = t.val(), !(i(t, "required") && ("" === o || !o || a)))
                }, unique: function (t, n) {
                    var r = t.data();
                    return null === r ? !0 : r.hasOwnProperty("uniqueValues") ? e.filter(r.uniqueValues, function (e) {
                        return e === t.val()
                    }).length <= 1 : !0
                }
            }), r.ui.validator.messages = r.ui.validator.messages || {}, t(!0, r.ui.validator.messages, {unique: "must be unique"})
        }($, kendo)
    }).call(t, n(29))
}, function (e, t, n) {
    var r;
    (function (e, i, a) {
        (function () {
            function a(e, t) {
                return e.set(t[0], t[1]), e
            }

            function o(e, t) {
                return e.add(t), e
            }

            function l(e, t, n) {
                var r = n.length;
                switch (r) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }

            function s(e, t, n, r) {
                for (var i = -1, a = e.length; ++i < a;) {
                    var o = e[i];
                    t(r, o, n(o), e)
                }
                return r
            }

            function u(e, t) {
                for (var n = -1, r = e.length, i = -1, a = t.length, o = Array(r + a); ++n < r;)o[n] = e[n];
                for (; ++i < a;)o[n++] = t[i];
                return o
            }

            function d(e, t) {
                for (var n = -1, r = e.length; ++n < r && t(e[n], n, e) !== !1;);
                return e
            }

            function p(e, t) {
                for (var n = e.length; n-- && t(e[n], n, e) !== !1;);
                return e
            }

            function c(e, t) {
                for (var n = -1, r = e.length; ++n < r;)if (!t(e[n], n, e))return !1;
                return !0
            }

            function f(e, t) {
                for (var n = -1, r = e.length, i = 0, a = []; ++n < r;) {
                    var o = e[n];
                    t(o, n, e) && (a[i++] = o)
                }
                return a
            }

            function y(e, t) {
                return !!e.length && w(e, t, 0) > -1
            }

            function m(e, t, n) {
                for (var r = -1, i = e.length; ++r < i;)if (n(t, e[r]))return !0;
                return !1
            }

            function g(e, t) {
                for (var n = -1, r = e.length, i = Array(r); ++n < r;)i[n] = t(e[n], n, e);
                return i
            }

            function h(e, t) {
                for (var n = -1, r = t.length, i = e.length; ++n < r;)e[i + n] = t[n];
                return e
            }

            function v(e, t, n, r) {
                var i = -1, a = e.length;
                for (r && a && (n = e[++i]); ++i < a;)n = t(n, e[i], i, e);
                return n
            }

            function b(e, t, n, r) {
                var i = e.length;
                for (r && i && (n = e[--i]); i--;)n = t(n, e[i], i, e);
                return n
            }

            function C(e, t) {
                for (var n = -1, r = e.length; ++n < r;)if (t(e[n], n, e))return !0;
                return !1
            }

            function E(e, t, n) {
                for (var r = -1, i = e.length; ++r < i;) {
                    var a = e[r], o = t(a);
                    if (null != o && (l === X ? o === o : n(o, l)))var l = o, s = a
                }
                return s
            }

            function S(e, t, n, r) {
                var i;
                return n(e, function (e, n, a) {
                    return t(e, n, a) ? (i = r ? n : e, !1) : void 0
                }), i
            }

            function I(e, t, n) {
                for (var r = e.length, i = n ? r : -1; n ? i-- : ++i < r;)if (t(e[i], i, e))return i;
                return -1
            }

            function w(e, t, n) {
                if (t !== t)return j(e, n);
                for (var r = n - 1, i = e.length; ++r < i;)if (e[r] === t)return r;
                return -1
            }

            function T(e, t, n, r) {
                for (var i = n - 1, a = e.length; ++i < a;)if (r(e[i], t))return i;
                return -1
            }

            function x(e, t, n, r, i) {
                return i(e, function (e, i, a) {
                    n = r ? (r = !1, e) : t(n, e, i, a)
                }), n
            }

            function _(e, t) {
                var n = e.length;
                for (e.sort(t); n--;)e[n] = e[n].value;
                return e
            }

            function D(e, t) {
                for (var n, r = -1, i = e.length; ++r < i;) {
                    var a = t(e[r]);
                    a !== X && (n = n === X ? a : n + a)
                }
                return n
            }

            function k(e, t) {
                for (var n = -1, r = Array(e); ++n < e;)r[n] = t(n);
                return r
            }

            function L(e, t) {
                return g(t, function (t) {
                    return [t, e[t]]
                })
            }

            function O(e) {
                return function (t) {
                    return e(t)
                }
            }

            function A(e, t) {
                return g(t, function (t) {
                    return e[t]
                })
            }

            function R(e, t) {
                for (var n = -1, r = e.length; ++n < r && w(t, e[n], 0) > -1;);
                return n
            }

            function F(e, t) {
                for (var n = e.length; n-- && w(t, e[n], 0) > -1;);
                return n
            }

            function $(e) {
                return e && e.Object === Object ? e : null
            }

            function P(e, t) {
                if (e !== t) {
                    var n = null === e, r = e === X, i = e === e, a = null === t, o = t === X, l = t === t;
                    if (e > t && !a || !i || n && !o && l || r && l)return 1;
                    if (t > e && !n || !l || a && !r && i || o && i)return -1
                }
                return 0
            }

            function N(e, t, n) {
                for (var r = -1, i = e.criteria, a = t.criteria, o = i.length, l = n.length; ++r < o;) {
                    var s = P(i[r], a[r]);
                    if (s) {
                        if (r >= l)return s;
                        var u = n[r];
                        return s * ("desc" == u ? -1 : 1)
                    }
                }
                return e.index - t.index
            }

            function M(e, t) {
                for (var n = e.length, r = 0; n--;)e[n] === t && r++;
                return r
            }

            function B(e) {
                return wn[e]
            }

            function U(e) {
                return Tn[e]
            }

            function V(e) {
                return "\\" + Dn[e]
            }

            function j(e, t, n) {
                for (var r = e.length, i = t + (n ? 0 : -1); n ? i-- : ++i < r;) {
                    var a = e[i];
                    if (a !== a)return i
                }
                return -1
            }

            function q(e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString)try {
                    t = !!(e + "")
                } catch (n) {
                }
                return t
            }

            function J(e, t) {
                return e = "number" == typeof e || kt.test(e) ? +e : -1, t = null == t ? Te : t, e > -1 && e % 1 == 0 && t > e
            }

            function G(e) {
                for (var t, n = []; !(t = e.next()).done;)n.push(t.value);
                return n
            }

            function W(e) {
                var t = -1, n = Array(e.size);
                return e.forEach(function (e, r) {
                    n[++t] = [r, e]
                }), n
            }

            function H(e, t) {
                for (var n = -1, r = e.length, i = 0, a = []; ++n < r;) {
                    var o = e[n];
                    o !== t && o !== ie || (e[n] = ie, a[i++] = n)
                }
                return a
            }

            function z(e) {
                var t = -1, n = Array(e.size);
                return e.forEach(function (e) {
                    n[++t] = e
                }), n
            }

            function K(e) {
                if (!e || !gn.test(e))return e.length;
                for (var t = mn.lastIndex = 0; mn.test(e);)t++;
                return t
            }

            function Q(e) {
                return e.match(mn)
            }

            function Z(e) {
                return xn[e]
            }

            function Y(e) {
                function t(e) {
                    if (Vo(e) && !xd(e) && !(e instanceof i)) {
                        if (e instanceof r)return e;
                        if (zs.call(e, "__wrapped__"))return Fi(e)
                    }
                    return new r(e)
                }

                function n() {
                }

                function r(e, t) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = X
                }

                function i(e) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = De, this.__views__ = []
                }

                function $() {
                    var e = new i(this.__wrapped__);
                    return e.__actions__ = Br(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Br(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Br(this.__views__), e
                }

                function kt() {
                    if (this.__filtered__) {
                        var e = new i(this);
                        e.__dir__ = -1, e.__filtered__ = !0
                    } else e = this.clone(), e.__dir__ *= -1;
                    return e
                }

                function Rt() {
                    var e = this.__wrapped__.value(), t = this.__dir__, n = xd(e), r = 0 > t, i = n ? e.length : 0, a = hi(0, i, this.__views__), o = a.start, l = a.end, s = l - o, u = r ? l : o - 1, d = this.__iteratees__, p = d.length, c = 0, f = bu(s, this.__takeCount__);
                    if (!n || te > i || i == s && f == s)return _r(e, this.__actions__);
                    var y = [];
                    e:for (; s-- && f > c;) {
                        u += t;
                        for (var m = -1, g = e[u]; ++m < p;) {
                            var h = d[m], v = h.iteratee, b = h.type, C = v(g);
                            if (b == Se)g = C; else if (!C) {
                                if (b == Ee)continue e;
                                break e
                            }
                        }
                        y[c++] = g
                    }
                    return y
                }

                function Ft() {
                }

                function $t(e, t) {
                    return Nt(e, t) && delete e[t]
                }

                function Pt(e, t) {
                    if (xu) {
                        var n = e[t];
                        return n === re ? X : n
                    }
                    return zs.call(e, t) ? e[t] : X
                }

                function Nt(e, t) {
                    return xu ? e[t] !== X : zs.call(e, t)
                }

                function Mt(e, t, n) {
                    e[t] = xu && n === X ? re : n
                }

                function Bt(e) {
                    var t = -1, n = e ? e.length : 0;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }

                function Ut() {
                    this.__data__ = {hash: new Ft, map: Iu ? new Iu : [], string: new Ft}
                }

                function Vt(e) {
                    var t = this.__data__;
                    return Ti(e) ? $t("string" == typeof e ? t.string : t.hash, e) : Iu ? t.map["delete"](e) : en(t.map, e)
                }

                function jt(e) {
                    var t = this.__data__;
                    return Ti(e) ? Pt("string" == typeof e ? t.string : t.hash, e) : Iu ? t.map.get(e) : tn(t.map, e)
                }

                function qt(e) {
                    var t = this.__data__;
                    return Ti(e) ? Nt("string" == typeof e ? t.string : t.hash, e) : Iu ? t.map.has(e) : nn(t.map, e)
                }

                function Jt(e, t) {
                    var n = this.__data__;
                    return Ti(e) ? Mt("string" == typeof e ? n.string : n.hash, e, t) : Iu ? n.map.set(e, t) : an(n.map, e, t), this
                }

                function Gt(e) {
                    var t = -1, n = e ? e.length : 0;
                    for (this.__data__ = new Bt; ++t < n;)this.push(e[t])
                }

                function Wt(e, t) {
                    var n = e.__data__;
                    if (Ti(t)) {
                        var r = n.__data__, i = "string" == typeof t ? r.string : r.hash;
                        return i[t] === re
                    }
                    return n.has(t)
                }

                function Ht(e) {
                    var t = this.__data__;
                    if (Ti(e)) {
                        var n = t.__data__, r = "string" == typeof e ? n.string : n.hash;
                        r[e] = re
                    } else t.set(e, re)
                }

                function zt(e) {
                    var t = -1, n = e ? e.length : 0;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }

                function Kt() {
                    this.__data__ = {array: [], map: null}
                }

                function Qt(e) {
                    var t = this.__data__, n = t.array;
                    return n ? en(n, e) : t.map["delete"](e)
                }

                function Zt(e) {
                    var t = this.__data__, n = t.array;
                    return n ? tn(n, e) : t.map.get(e)
                }

                function Yt(e) {
                    var t = this.__data__, n = t.array;
                    return n ? nn(n, e) : t.map.has(e)
                }

                function Xt(e, t) {
                    var n = this.__data__, r = n.array;
                    r && (r.length < te - 1 ? an(r, e, t) : (n.array = null, n.map = new Bt(r)));
                    var i = n.map;
                    return i && i.set(e, t), this
                }

                function en(e, t) {
                    var n = rn(e, t);
                    if (0 > n)return !1;
                    var r = e.length - 1;
                    return n == r ? e.pop() : cu.call(e, n, 1), !0
                }

                function tn(e, t) {
                    var n = rn(e, t);
                    return 0 > n ? X : e[n][1]
                }

                function nn(e, t) {
                    return rn(e, t) > -1
                }

                function rn(e, t) {
                    for (var n = e.length; n--;)if (So(e[n][0], t))return n;
                    return -1
                }

                function an(e, t, n) {
                    var r = rn(e, t);
                    0 > r ? e.push([t, n]) : e[r][1] = n
                }

                function on(e, t, n, r) {
                    return e === X || So(e, Ws[n]) && !zs.call(r, n) ? t : e
                }

                function ln(e, t, n) {
                    (n === X || So(e[t], n)) && ("number" != typeof t || n !== X || t in e) || (e[t] = n)
                }

                function sn(e, t, n) {
                    var r = e[t];
                    zs.call(e, t) && So(r, n) && (n !== X || t in e) || (e[t] = n)
                }

                function un(e, t, n, r) {
                    return Pu(e, function (e, i, a) {
                        t(r, e, n(e), a)
                    }), r
                }

                function dn(e, t) {
                    return e && Ur(t, _l(t), e)
                }

                function pn(e, t) {
                    for (var n = -1, r = null == e, i = t.length, a = Array(i); ++n < i;)a[n] = r ? X : wl(e, t[n]);
                    return a
                }

                function cn(e) {
                    return Do(e) ? e : []
                }

                function fn(e) {
                    return "function" == typeof e ? e : vs
                }

                function mn(e) {
                    return xd(e) ? e : Ri(e)
                }

                function wn(e, t, n) {
                    return e === e && (n !== X && (e = n >= e ? e : n), t !== X && (e = e >= t ? e : t)), e
                }

                function Tn(e, t, n, r, i, a, o) {
                    var l;
                    if (r && (l = a ? r(e, i, a, o) : r(e)), l !== X)return l;
                    if (!Uo(e))return e;
                    var s = xd(e);
                    if (s) {
                        if (l = bi(e), !t)return Br(e, l)
                    } else {
                        var u = gi(e), p = u == Pe || u == Ne;
                        if (_d(e))return Lr(e, t);
                        if (u == Ue || u == Oe || p && !a) {
                            if (q(e))return a ? e : {};
                            if (l = Ci(p ? {} : e), !t)return l = dn(l, e), n ? jr(e, l) : l
                        } else {
                            if (!In[u])return a ? e : {};
                            l = Ei(e, u, t)
                        }
                    }
                    o || (o = new zt);
                    var c = o.get(e);
                    return c ? c : (o.set(e, l), (s ? d : Un)(e, function (i, a) {
                        sn(l, a, Tn(i, t, n, r, a, e, o))
                    }), n && !s ? jr(e, l) : l)
                }

                function xn(e) {
                    var t = _l(e), n = t.length;
                    return function (r) {
                        if (null == r)return !n;
                        for (var i = n; i--;) {
                            var a = t[i], o = e[a], l = r[a];
                            if (l === X && !(a in Object(r)) || !o(l))return !1
                        }
                        return !0
                    }
                }

                function _n(e) {
                    return Uo(e) ? uu(e) : {}
                }

                function Dn(e, t, n) {
                    if ("function" != typeof e)throw new Js(ne);
                    return pu(function () {
                        e.apply(X, n)
                    }, t)
                }

                function On(e, t, n, r) {
                    var i = -1, a = y, o = !0, l = e.length, s = [], u = t.length;
                    if (!l)return s;
                    n && (t = g(t, O(n))), r ? (a = m, o = !1) : t.length >= te && (a = Wt, o = !1, t = new Gt(t));
                    e:for (; ++i < l;) {
                        var d = e[i], p = n ? n(d) : d;
                        if (o && p === p) {
                            for (var c = u; c--;)if (t[c] === p)continue e;
                            s.push(d)
                        } else a(t, p, r) || s.push(d)
                    }
                    return s
                }

                function An(e, t) {
                    var n = !0;
                    return Pu(e, function (e, r, i) {
                        return n = !!t(e, r, i)
                    }), n
                }

                function Fn(e, t, n, r) {
                    var i = e.length;
                    for (n = ul(n), 0 > n && (n = -n > i ? 0 : i + n), r = r === X || r > i ? i : ul(r), 0 > r && (r += i), r = n > r ? 0 : dl(r); r > n;)e[n++] = t;
                    return e
                }

                function $n(e, t) {
                    var n = [];
                    return Pu(e, function (e, r, i) {
                        t(e, r, i) && n.push(e)
                    }), n
                }

                function Pn(e, t, n, r) {
                    r || (r = []);
                    for (var i = -1, a = e.length; ++i < a;) {
                        var o = e[i];
                        t > 0 && Do(o) && (n || xd(o) || To(o)) ? t > 1 ? Pn(o, t - 1, n, r) : h(r, o) : n || (r[r.length] = o)
                    }
                    return r
                }

                function Nn(e, t) {
                    return null == e ? e : Mu(e, t, Dl)
                }

                function Un(e, t) {
                    return e && Mu(e, t, _l)
                }

                function Vn(e, t) {
                    return e && Bu(e, t, _l)
                }

                function jn(e, t) {
                    return f(t, function (t) {
                        return No(e[t])
                    })
                }

                function qn(e, t) {
                    t = wi(t, e) ? [t + ""] : mn(t);
                    for (var n = 0, r = t.length; null != e && r > n;)e = e[t[n++]];
                    return n && n == r ? e : X
                }

                function Jn(e, t) {
                    return zs.call(e, t) || "object" == typeof e && t in e && null === ou(e)
                }

                function Gn(e, t) {
                    return t in Object(e)
                }

                function Wn(e, t, n) {
                    return e >= bu(t, n) && e < vu(t, n)
                }

                function Hn(e, t, n) {
                    for (var r = n ? m : y, i = e[0].length, a = e.length, o = a, l = Array(a), s = 1 / 0, u = []; o--;) {
                        var d = e[o];
                        o && t && (d = g(d, O(t))), s = bu(d.length, s), l[o] = !n && (t || i >= 120 && d.length >= 120) ? new Gt(o && d) : X
                    }
                    d = e[0];
                    var p = -1, c = l[0];
                    e:for (; ++p < i && u.length < s;) {
                        var f = d[p], h = t ? t(f) : f;
                        if (!(c ? Wt(c, h) : r(u, h, n))) {
                            for (o = a; --o;) {
                                var v = l[o];
                                if (!(v ? Wt(v, h) : r(e[o], h, n)))continue e
                            }
                            c && c.push(h), u.push(f)
                        }
                    }
                    return u
                }

                function zn(e, t, n, r) {
                    return Un(e, function (e, i, a) {
                        t(r, n(e), i, a)
                    }), r
                }

                function Kn(e, t, n) {
                    wi(t, e) || (t = mn(t), e = Oi(e, t), t = Yi(t));
                    var r = null == e ? e : e[t];
                    return null == r ? X : l(r, e, n)
                }

                function Qn(e, t, n, r, i) {
                    return e === t ? !0 : null == e || null == t || !Uo(e) && !Vo(t) ? e !== e && t !== t : Zn(e, t, Qn, n, r, i)
                }

                function Zn(e, t, n, r, i, a) {
                    var o = xd(e), l = xd(t), s = Ae, u = Ae;
                    o || (s = gi(e), s = s == Oe ? Ue : s), l || (u = gi(t), u = u == Oe ? Ue : u);
                    var d = s == Ue && !q(e), p = u == Ue && !q(t), c = s == u;
                    if (c && !d)return a || (a = new zt), o || nl(e) ? si(e, t, n, r, i, a) : ui(e, t, s, n, r, i, a);
                    if (!(i & ge)) {
                        var f = d && zs.call(e, "__wrapped__"), y = p && zs.call(t, "__wrapped__");
                        if (f || y)return a || (a = new zt), n(f ? e.value() : e, y ? t.value() : t, r, i, a)
                    }
                    return c ? (a || (a = new zt), di(e, t, n, r, i, a)) : !1
                }

                function Yn(e, t, n, r) {
                    var i = n.length, a = i, o = !r;
                    if (null == e)return !a;
                    for (e = Object(e); i--;) {
                        var l = n[i];
                        if (o && l[2] ? l[1] !== e[l[0]] : !(l[0] in e))return !1
                    }
                    for (; ++i < a;) {
                        l = n[i];
                        var s = l[0], u = e[s], d = l[1];
                        if (o && l[2]) {
                            if (u === X && !(s in e))return !1
                        } else {
                            var p = new zt, c = r ? r(u, d, s, e, t, p) : X;
                            if (!(c === X ? Qn(d, u, r, me | ge, p) : c))return !1
                        }
                    }
                    return !0
                }

                function Xn(e) {
                    var t = typeof e;
                    return "function" == t ? e : null == e ? vs : "object" == t ? xd(e) ? ir(e[0], e[1]) : rr(e) : xs(e)
                }

                function er(e) {
                    return hu(Object(e))
                }

                function tr(e) {
                    e = null == e ? e : Object(e);
                    var t = [];
                    for (var n in e)t.push(n);
                    return t
                }

                function nr(e, t) {
                    var n = -1, r = _o(e) ? Array(e.length) : [];
                    return Pu(e, function (e, i, a) {
                        r[++n] = t(e, i, a)
                    }), r
                }

                function rr(e) {
                    var t = fi(e);
                    if (1 == t.length && t[0][2]) {
                        var n = t[0][0], r = t[0][1];
                        return function (e) {
                            return null == e ? !1 : e[n] === r && (r !== X || n in Object(e))
                        }
                    }
                    return function (n) {
                        return n === e || Yn(n, e, t)
                    }
                }

                function ir(e, t) {
                    return function (n) {
                        var r = wl(n, e);
                        return r === X && r === t ? xl(n, e) : Qn(t, r, X, me | ge)
                    }
                }

                function ar(e, t, n, r, i) {
                    if (e !== t) {
                        var a = xd(t) || nl(t) ? X : Dl(t);
                        d(a || t, function (o, l) {
                            if (a && (l = o, o = t[l]), Uo(o))i || (i = new zt), or(e, t, l, n, ar, r, i); else {
                                var s = r ? r(e[l], o, l + "", e, t, i) : X;
                                s === X && (s = o), ln(e, l, s)
                            }
                        })
                    }
                }

                function or(e, t, n, r, i, a, o) {
                    var l = e[n], s = t[n], u = o.get(s);
                    if (u)return void ln(e, n, u);
                    var d = a ? a(l, s, n + "", e, t, o) : X, p = d === X;
                    p && (d = s, xd(s) || nl(s) ? xd(l) ? d = l : Do(l) ? d = Br(l) : (p = !1, d = Tn(s, !a)) : Qo(s) || To(s) ? To(l) ? d = cl(l) : !Uo(l) || r && No(l) ? (p = !1, d = Tn(s, !a)) : d = l : p = !1), o.set(s, d), p && i(d, s, r, a, o), o["delete"](s), ln(e, n, d)
                }

                function lr(e, t, n) {
                    var r = -1;
                    t = g(t.length ? t : Array(1), ci());
                    var i = nr(e, function (e, n, i) {
                        var a = g(t, function (t) {
                            return t(e)
                        });
                        return {criteria: a, index: ++r, value: e}
                    });
                    return _(i, function (e, t) {
                        return N(e, t, n)
                    })
                }

                function sr(e, t) {
                    return e = Object(e), v(t, function (t, n) {
                        return n in e && (t[n] = e[n]), t
                    }, {})
                }

                function ur(e, t) {
                    var n = {};
                    return Nn(e, function (e, r) {
                        t(e, r) && (n[r] = e)
                    }), n
                }

                function dr(e) {
                    return function (t) {
                        return null == t ? X : t[e]
                    }
                }

                function pr(e) {
                    return function (t) {
                        return qn(t, e)
                    }
                }

                function cr(e, t, n, r) {
                    var i = r ? T : w, a = -1, o = t.length, l = e;
                    for (n && (l = g(e, O(n))); ++a < o;)for (var s = 0, u = t[a], d = n ? n(u) : u; (s = i(l, d, s, r)) > -1;)l !== e && cu.call(l, s, 1), cu.call(e, s, 1);
                    return e
                }

                function fr(e, t) {
                    for (var n = e ? t.length : 0, r = n - 1; n--;) {
                        var i = t[n];
                        if (r == n || i != a) {
                            var a = i;
                            if (J(i))cu.call(e, i, 1); else if (wi(i, e))delete e[i]; else {
                                var o = mn(i), l = Oi(e, o);
                                null != l && delete l[Yi(o)]
                            }
                        }
                    }
                    return e
                }

                function yr(e, t) {
                    return e + yu(Eu() * (t - e + 1))
                }

                function mr(e, t, n, r) {
                    for (var i = -1, a = vu(fu((t - e) / (n || 1)), 0), o = Array(a); a--;)o[r ? a : ++i] = e, e += n;
                    return o
                }

                function gr(e, t, n, r) {
                    t = wi(t, e) ? [t + ""] : mn(t);
                    for (var i = -1, a = t.length, o = a - 1, l = e; null != l && ++i < a;) {
                        var s = t[i];
                        if (Uo(l)) {
                            var u = n;
                            if (i != o) {
                                var d = l[s];
                                u = r ? r(d, s, l) : X, u === X && (u = null == d ? J(t[i + 1]) ? [] : {} : d)
                            }
                            sn(l, s, u)
                        }
                        l = l[s]
                    }
                    return e
                }

                function hr(e, t, n) {
                    var r = -1, i = e.length;
                    0 > t && (t = -t > i ? 0 : i + t), n = n > i ? i : n, 0 > n && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
                    for (var a = Array(i); ++r < i;)a[r] = e[r + t];
                    return a
                }

                function vr(e, t) {
                    var n;
                    return Pu(e, function (e, r, i) {
                        return n = t(e, r, i), !n
                    }), !!n
                }

                function br(e, t, n) {
                    var r = 0, i = e ? e.length : r;
                    if ("number" == typeof t && t === t && Le >= i) {
                        for (; i > r;) {
                            var a = r + i >>> 1, o = e[a];
                            (n ? t >= o : t > o) && null !== o ? r = a + 1 : i = a
                        }
                        return i
                    }
                    return Cr(e, t, vs, n)
                }

                function Cr(e, t, n, r) {
                    t = n(t);
                    for (var i = 0, a = e ? e.length : 0, o = t !== t, l = null === t, s = t === X; a > i;) {
                        var u = yu((i + a) / 2), d = n(e[u]), p = d !== X, c = d === d;
                        if (o)var f = c || r; else f = l ? c && p && (r || null != d) : s ? c && (r || p) : null == d ? !1 : r ? t >= d : t > d;
                        f ? i = u + 1 : a = u
                    }
                    return bu(a, ke)
                }

                function Er(e) {
                    return Sr(e)
                }

                function Sr(e, t) {
                    for (var n = 0, r = e.length, i = e[0], a = t ? t(i) : i, o = a, l = 1, s = [i]; ++n < r;)i = e[n], a = t ? t(i) : i, So(a, o) || (o = a, s[l++] = i);
                    return s
                }

                function Ir(e, t, n) {
                    var r = -1, i = y, a = e.length, o = !0, l = [], s = l;
                    if (n)o = !1, i = m; else if (a >= te) {
                        var u = t ? null : Vu(e);
                        if (u)return z(u);
                        o = !1, i = Wt, s = new Gt
                    } else s = t ? [] : l;
                    e:for (; ++r < a;) {
                        var d = e[r], p = t ? t(d) : d;
                        if (o && p === p) {
                            for (var c = s.length; c--;)if (s[c] === p)continue e;
                            t && s.push(p), l.push(d)
                        } else i(s, p, n) || (s !== l && s.push(p), l.push(d))
                    }
                    return l
                }

                function wr(e, t) {
                    t = wi(t, e) ? [t + ""] : mn(t), e = Oi(e, t);
                    var n = Yi(t);
                    return null != e && Tl(e, n) ? delete e[n] : !0
                }

                function Tr(e, t, n, r) {
                    return gr(e, t, n(qn(e, t)), r)
                }

                function xr(e, t, n, r) {
                    for (var i = e.length, a = r ? i : -1; (r ? a-- : ++a < i) && t(e[a], a, e););
                    return n ? hr(e, r ? 0 : a, r ? a + 1 : i) : hr(e, r ? a + 1 : 0, r ? i : a)
                }

                function _r(e, t) {
                    var n = e;
                    return n instanceof i && (n = n.value()), v(t, function (e, t) {
                        return t.func.apply(t.thisArg, h([e], t.args))
                    }, n)
                }

                function Dr(e, t, n) {
                    for (var r = -1, i = e.length; ++r < i;)var a = a ? h(On(a, e[r], t, n), On(e[r], a, t, n)) : e[r];
                    return a && a.length ? Ir(a, t, n) : []
                }

                function kr(e, t, n) {
                    for (var r = -1, i = e.length, a = t.length, o = {}; ++r < i;)n(o, e[r], a > r ? t[r] : X);
                    return o
                }

                function Lr(e, t) {
                    if (t)return e.slice();
                    var n = new e.constructor(e.length);
                    return e.copy(n), n
                }

                function Or(e) {
                    var t = new e.constructor(e.byteLength);
                    return new ru(t).set(new ru(e)), t
                }

                function Ar(e) {
                    return v(W(e), a, new e.constructor)
                }

                function Rr(e) {
                    var t = new e.constructor(e.source, It.exec(e));
                    return t.lastIndex = e.lastIndex, t
                }

                function Fr(e) {
                    return v(z(e), o, new e.constructor)
                }

                function $r(e) {
                    return Fu ? Object(Fu.call(e)) : {}
                }

                function Pr(e, t) {
                    var n = t ? Or(e.buffer) : e.buffer;
                    return new e.constructor(n, e.byteOffset, e.length)
                }

                function Nr(e, t, n, r) {
                    for (var i = -1, a = e.length, o = n.length, l = -1, s = t.length, u = vu(a - o, 0), d = Array(s + u), p = !r; ++l < s;)d[l] = t[l];
                    for (; ++i < o;)(p || a > i) && (d[n[i]] = e[i]);
                    for (; u--;)d[l++] = e[i++];
                    return d
                }

                function Mr(e, t, n, r) {
                    for (var i = -1, a = e.length, o = -1, l = n.length, s = -1, u = t.length, d = vu(a - l, 0), p = Array(d + u), c = !r; ++i < d;)p[i] = e[i];
                    for (var f = i; ++s < u;)p[f + s] = t[s];
                    for (; ++o < l;)(c || a > i) && (p[f + n[o]] = e[i++]);
                    return p
                }

                function Br(e, t) {
                    var n = -1, r = e.length;
                    for (t || (t = Array(r)); ++n < r;)t[n] = e[n];
                    return t
                }

                function Ur(e, t, n) {
                    return Vr(e, t, n)
                }

                function Vr(e, t, n, r) {
                    n || (n = {});
                    for (var i = -1, a = t.length; ++i < a;) {
                        var o = t[i], l = r ? r(n[o], e[o], o, n, e) : e[o];
                        sn(n, o, l)
                    }
                    return n
                }

                function jr(e, t) {
                    return Ur(e, Ju(e), t)
                }

                function qr(e, t) {
                    return function (n, r) {
                        var i = xd(n) ? s : un, a = t ? t() : {};
                        return i(n, e, ci(r), a)
                    }
                }

                function Jr(e) {
                    return co(function (t, n) {
                        var r = -1, i = n.length, a = i > 1 ? n[i - 1] : X, o = i > 2 ? n[2] : X;
                        for (a = "function" == typeof a ? (i--, a) : X, o && Ii(n[0], n[1], o) && (a = 3 > i ? X : a, i = 1), t = Object(t); ++r < i;) {
                            var l = n[r];
                            l && e(t, l, r, a)
                        }
                        return t
                    })
                }

                function Gr(e, t) {
                    return function (n, r) {
                        if (null == n)return n;
                        if (!_o(n))return e(n, r);
                        for (var i = n.length, a = t ? i : -1, o = Object(n); (t ? a-- : ++a < i) && r(o[a], a, o) !== !1;);
                        return n
                    }
                }

                function Wr(e) {
                    return function (t, n, r) {
                        for (var i = -1, a = Object(t), o = r(t), l = o.length; l--;) {
                            var s = o[e ? l : ++i];
                            if (n(a[s], s, a) === !1)break
                        }
                        return t
                    }
                }

                function Hr(e, t, n) {
                    function r() {
                        var t = this && this !== Mn && this instanceof r ? a : e;
                        return t.apply(i ? n : this, arguments)
                    }

                    var i = t & ae, a = Qr(e);
                    return r
                }

                function zr(e) {
                    return function (t) {
                        t = yl(t);
                        var n = gn.test(t) ? Q(t) : X, r = n ? n[0] : t.charAt(0), i = n ? n.slice(1).join("") : t.slice(1);
                        return r[e]() + i
                    }
                }

                function Kr(e) {
                    return function (t) {
                        return v(ys(zl(t)), e, "")
                    }
                }

                function Qr(e) {
                    return function () {
                        var t = arguments;
                        switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0], t[1]);
                            case 3:
                                return new e(t[0], t[1], t[2]);
                            case 4:
                                return new e(t[0], t[1], t[2], t[3]);
                            case 5:
                                return new e(t[0], t[1], t[2], t[3], t[4]);
                            case 6:
                                return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                            case 7:
                                return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                        }
                        var n = _n(e.prototype), r = e.apply(n, t);
                        return Uo(r) ? r : n
                    }
                }

                function Zr(e, t, n) {
                    function r() {
                        for (var a = arguments.length, o = Array(a), s = a, u = mi(r); s--;)o[s] = arguments[s];
                        var d = 3 > a && o[0] !== u && o[a - 1] !== u ? [] : H(o, u);
                        if (a -= d.length, n > a)return ai(e, t, Xr, r.placeholder, X, o, d, X, X, n - a);
                        var p = this && this !== Mn && this instanceof r ? i : e;
                        return l(p, this, o)
                    }

                    var i = Qr(e);
                    return r
                }

                function Yr(e) {
                    return co(function (t) {
                        t = Pn(t, 1);
                        var n = t.length, i = n, a = r.prototype.thru;
                        for (e && t.reverse(); i--;) {
                            var o = t[i];
                            if ("function" != typeof o)throw new Js(ne);
                            if (a && !l && "wrapper" == pi(o))var l = new r([], !0)
                        }
                        for (i = l ? i : n; ++i < n;) {
                            o = t[i];
                            var s = pi(o), u = "wrapper" == s ? ju(o) : X;
                            l = u && xi(u[0]) && u[1] == (ce | se | de | fe) && !u[4].length && 1 == u[9] ? l[pi(u[0])].apply(l, u[3]) : 1 == o.length && xi(o) ? l[s]() : l.thru(o)
                        }
                        return function () {
                            var e = arguments, r = e[0];
                            if (l && 1 == e.length && xd(r) && r.length >= te)return l.plant(r).value();
                            for (var i = 0, a = n ? t[i].apply(this, e) : r; ++i < n;)a = t[i].call(this, a);
                            return a
                        }
                    })
                }

                function Xr(e, t, n, r, i, a, o, l, s, u) {
                    function d() {
                        for (var h = arguments.length, v = h, b = Array(h); v--;)b[v] = arguments[v];
                        if (y)var C = mi(d), E = M(b, C);
                        if (r && (b = Nr(b, r, i, y)), a && (b = Mr(b, a, o, y)), h -= E, y && u > h) {
                            var S = H(b, C);
                            return ai(e, t, Xr, d.placeholder, n, b, S, l, s, u - h)
                        }
                        var I = c ? n : this, w = f ? I[e] : e;
                        return h = b.length, l ? b = Ai(b, l) : m && h > 1 && b.reverse(), p && h > s && (b.length = s), this && this !== Mn && this instanceof d && (w = g || Qr(w)), w.apply(I, b)
                    }

                    var p = t & ce, c = t & ae, f = t & oe, y = t & (se | ue), m = t & ye, g = f ? X : Qr(e);
                    return d
                }

                function ei(e, t) {
                    return function (n, r) {
                        return zn(n, e, t(r), {})
                    }
                }

                function ti(e) {
                    return co(function (t) {
                        return t = g(Pn(t, 1), ci()), co(function (n) {
                            var r = this;
                            return e(t, function (e) {
                                return l(e, r, n)
                            })
                        })
                    })
                }

                function ni(e, t, n) {
                    t = ul(t);
                    var r = K(e);
                    if (!t || r >= t)return "";
                    var i = t - r;
                    n = n === X ? " " : n + "";
                    var a = ns(n, fu(i / K(n)));
                    return gn.test(n) ? Q(a).slice(0, i).join("") : a.slice(0, i)
                }

                function ri(e, t, n, r) {
                    function i() {
                        for (var t = -1, s = arguments.length, u = -1, d = r.length, p = Array(d + s), c = this && this !== Mn && this instanceof i ? o : e; ++u < d;)p[u] = r[u];
                        for (; s--;)p[u++] = arguments[++t];
                        return l(c, a ? n : this, p)
                    }

                    var a = t & ae, o = Qr(e);
                    return i
                }

                function ii(e) {
                    return function (t, n, r) {
                        return r && "number" != typeof r && Ii(t, n, r) && (n = r = X), t = pl(t), t = t === t ? t : 0, n === X ? (n = t, t = 0) : n = pl(n) || 0, r = r === X ? n > t ? 1 : -1 : pl(r) || 0, mr(t, n, r, e)
                    }
                }

                function ai(e, t, n, r, i, a, o, l, s, u) {
                    var d = t & se, p = l ? Br(l) : X, c = d ? o : X, f = d ? X : o, y = d ? a : X, m = d ? X : a;
                    t |= d ? de : pe, t &= ~(d ? pe : de), t & le || (t &= ~(ae | oe));
                    var g = [e, t, i, y, c, m, f, p, s, u], h = n.apply(X, g);
                    return xi(e) && Gu(h, g), h.placeholder = r, h
                }

                function oi(e) {
                    var t = js[e];
                    return function (e, n) {
                        if (e = pl(e), n = ul(n)) {
                            var r = (yl(e) + "e").split("e"), i = t(r[0] + "e" + (+r[1] + n));
                            return r = (yl(i) + "e").split("e"), +(r[0] + "e" + (+r[1] - n))
                        }
                        return t(e)
                    }
                }

                function li(e, t, n, r, i, a, o, l) {
                    var s = t & oe;
                    if (!s && "function" != typeof e)throw new Js(ne);
                    var u = r ? r.length : 0;
                    if (u || (t &= ~(de | pe), r = i = X), o = o === X ? o : vu(ul(o), 0), l = l === X ? l : ul(l), u -= i ? i.length : 0, t & pe) {
                        var d = r, p = i;
                        r = i = X
                    }
                    var c = s ? X : ju(e), f = [e, t, n, r, i, d, p, a, o, l];
                    if (c && ki(f, c), e = f[0], t = f[1], n = f[2], r = f[3], i = f[4], l = f[9] = null == f[9] ? s ? 0 : e.length : vu(f[9] - u, 0), !l && t & (se | ue) && (t &= ~(se | ue)), t && t != ae)y = t == se || t == ue ? Zr(e, t, l) : t != de && t != (ae | de) || i.length ? Xr.apply(X, f) : ri(e, t, n, r); else var y = Hr(e, t, n);
                    var m = c ? Uu : Gu;
                    return m(y, f)
                }

                function si(e, t, n, r, i, a) {
                    var o = -1, l = i & ge, s = i & me, u = e.length, d = t.length;
                    if (u != d && !(l && d > u))return !1;
                    var p = a.get(e);
                    if (p)return p == t;
                    var c = !0;
                    for (a.set(e, t); ++o < u;) {
                        var f = e[o], y = t[o];
                        if (r)var m = l ? r(y, f, o, t, e, a) : r(f, y, o, e, t, a);
                        if (m !== X) {
                            if (m)continue;
                            c = !1;
                            break
                        }
                        if (s) {
                            if (!C(t, function (e) {
                                    return f === e || n(f, e, r, i, a)
                                })) {
                                c = !1;
                                break
                            }
                        } else if (f !== y && !n(f, y, r, i, a)) {
                            c = !1;
                            break
                        }
                    }
                    return a["delete"](e), c
                }

                function ui(e, t, n, r, i, a, o) {
                    switch (n) {
                        case He:
                            return !(e.byteLength != t.byteLength || !r(new ru(e), new ru(t)));
                        case Re:
                        case Fe:
                            return +e == +t;
                        case $e:
                            return e.name == t.name && e.message == t.message;
                        case Be:
                            return e != +e ? t != +t : e == +t;
                        case Ve:
                        case qe:
                            return e == t + "";
                        case Me:
                            var l = W;
                        case je:
                            var s = a & ge;
                            if (l || (l = z), e.size != t.size && !s)return !1;
                            var u = o.get(e);
                            return u ? u == t : si(l(e), l(t), r, i, a | me, o.set(e, t));
                        case Je:
                            if (Fu)return Fu.call(e) == Fu.call(t)
                    }
                    return !1
                }

                function di(e, t, n, r, i, a) {
                    var o = i & ge, l = _l(e), s = l.length, u = _l(t), d = u.length;
                    if (s != d && !o)return !1;
                    for (var p = s; p--;) {
                        var c = l[p];
                        if (!(o ? c in t : Jn(t, c)))return !1
                    }
                    var f = a.get(e);
                    if (f)return f == t;
                    var y = !0;
                    a.set(e, t);
                    for (var m = o; ++p < s;) {
                        c = l[p];
                        var g = e[c], h = t[c];
                        if (r)var v = o ? r(h, g, c, t, e, a) : r(g, h, c, e, t, a);
                        if (!(v === X ? g === h || n(g, h, r, i, a) : v)) {
                            y = !1;
                            break
                        }
                        m || (m = "constructor" == c)
                    }
                    if (y && !m) {
                        var b = e.constructor, C = t.constructor;
                        b != C && "constructor" in e && "constructor" in t && !("function" == typeof b && b instanceof b && "function" == typeof C && C instanceof C) && (y = !1)
                    }
                    return a["delete"](e), y
                }

                function pi(e) {
                    for (var t = e.name + "", n = ku[t], r = zs.call(ku, t) ? n.length : 0; r--;) {
                        var i = n[r], a = i.func;
                        if (null == a || a == e)return i.name
                    }
                    return t
                }

                function ci() {
                    var e = t.iteratee || bs;
                    return e = e === bs ? Xn : e, arguments.length ? e(arguments[0], arguments[1]) : e
                }

                function fi(e) {
                    for (var t = Pl(e), n = t.length; n--;)t[n][2] = Di(t[n][1]);
                    return t
                }

                function yi(e, t) {
                    var n = e[t];
                    return Wo(n) ? n : X
                }

                function mi(e) {
                    var n = zs.call(t, "placeholder") ? t : e;
                    return n.placeholder
                }

                function gi(e) {
                    return Zs.call(e)
                }

                function hi(e, t, n) {
                    for (var r = -1, i = n.length; ++r < i;) {
                        var a = n[r], o = a.size;
                        switch (a.type) {
                            case"drop":
                                e += o;
                                break;
                            case"dropRight":
                                t -= o;
                                break;
                            case"take":
                                t = bu(t, e + o);
                                break;
                            case"takeRight":
                                e = vu(e, t - o)
                        }
                    }
                    return {start: e, end: t}
                }

                function vi(e, t, n) {
                    if (null == e)return !1;
                    var r = n(e, t);
                    r || wi(t) || (t = mn(t), e = Oi(e, t), null != e && (t = Yi(t), r = n(e, t)));
                    var i = e ? e.length : X;
                    return r || !!i && Bo(i) && J(t, i) && (xd(e) || el(e) || To(e))
                }

                function bi(e) {
                    var t = e.length, n = e.constructor(t);
                    return t && "string" == typeof e[0] && zs.call(e, "index") && (n.index = e.index, n.input = e.input), n
                }

                function Ci(e) {
                    return "function" != typeof e.constructor || _i(e) ? {} : _n(ou(e))
                }

                function Ei(e, t, n) {
                    var r = e.constructor;
                    switch (t) {
                        case He:
                            return Or(e);
                        case Re:
                        case Fe:
                            return new r(+e);
                        case ze:
                        case Ke:
                        case Qe:
                        case Ze:
                        case Ye:
                        case Xe:
                        case et:
                        case tt:
                        case nt:
                            return Pr(e, n);
                        case Me:
                            return Ar(e);
                        case Be:
                        case qe:
                            return new r(e);
                        case Ve:
                            return Rr(e);
                        case je:
                            return Fr(e);
                        case Je:
                            return $r(e)
                    }
                }

                function Si(e) {
                    var t = e ? e.length : X;
                    return Bo(t) && (xd(e) || el(e) || To(e)) ? k(t, String) : null
                }

                function Ii(e, t, n) {
                    if (!Uo(n))return !1;
                    var r = typeof t;
                    return ("number" == r ? _o(n) && J(t, n.length) : "string" == r && t in n) ? So(n[t], e) : !1
                }

                function wi(e, t) {
                    return "number" == typeof e ? !0 : !xd(e) && (yt.test(e) || !ft.test(e) || null != t && e in Object(t))
                }

                function Ti(e) {
                    var t = typeof e;
                    return "number" == t || "boolean" == t || "string" == t && "__proto__" != e || null == e
                }

                function xi(e) {
                    var n = pi(e), r = t[n];
                    if ("function" != typeof r || !(n in i.prototype))return !1;
                    if (e === r)return !0;
                    var a = ju(r);
                    return !!a && e === a[0]
                }

                function _i(e) {
                    var t = e && e.constructor, n = "function" == typeof t && t.prototype || Ws;
                    return e === n
                }

                function Di(e) {
                    return e === e && !Uo(e)
                }

                function ki(e, t) {
                    var n = e[1], r = t[1], i = n | r, a = (ae | oe | ce) > i, o = r == ce && n == se || r == ce && n == fe && e[7].length <= t[8] || r == (ce | fe) && t[7].length <= t[8] && n == se;
                    if (!a && !o)return e;
                    r & ae && (e[2] = t[2], i |= n & ae ? 0 : le);
                    var l = t[3];
                    if (l) {
                        var s = e[3];
                        e[3] = s ? Nr(s, l, t[4]) : Br(l), e[4] = s ? H(e[3], ie) : Br(t[4])
                    }
                    return l = t[5], l && (s = e[5], e[5] = s ? Mr(s, l, t[6]) : Br(l), e[6] = s ? H(e[5], ie) : Br(t[6])), l = t[7], l && (e[7] = Br(l)), r & ce && (e[8] = null == e[8] ? t[8] : bu(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = i, e
                }

                function Li(e, t, n, r, i, a) {
                    return Uo(e) && Uo(t) && ar(e, t, X, Li, a.set(t, e)), e
                }

                function Oi(e, t) {
                    return 1 == t.length ? e : wl(e, hr(t, 0, -1))
                }

                function Ai(e, t) {
                    for (var n = e.length, r = bu(t.length, n), i = Br(e); r--;) {
                        var a = t[r];
                        e[r] = J(a, n) ? i[a] : X
                    }
                    return e
                }

                function Ri(e) {
                    var t = [];
                    return yl(e).replace(mt, function (e, n, r, i) {
                        t.push(r ? i.replace(Et, "$1") : n || e)
                    }), t
                }

                function Fi(e) {
                    if (e instanceof i)return e.clone();
                    var t = new r(e.__wrapped__, e.__chain__);
                    return t.__actions__ = Br(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                }

                function $i(e, t) {
                    t = vu(ul(t), 0);
                    var n = e ? e.length : 0;
                    if (!n || 1 > t)return [];
                    for (var r = 0, i = 0, a = Array(fu(n / t)); n > r;)a[i++] = hr(e, r, r += t);
                    return a
                }

                function Pi(e) {
                    for (var t = -1, n = e ? e.length : 0, r = 0, i = []; ++t < n;) {
                        var a = e[t];
                        a && (i[r++] = a)
                    }
                    return i
                }

                function Ni(e, t, n) {
                    var r = e ? e.length : 0;
                    return r ? (t = n || t === X ? 1 : ul(t), hr(e, 0 > t ? 0 : t, r)) : []
                }

                function Mi(e, t, n) {
                    var r = e ? e.length : 0;
                    return r ? (t = n || t === X ? 1 : ul(t), t = r - t, hr(e, 0, 0 > t ? 0 : t)) : []
                }

                function Bi(e, t) {
                    return e && e.length ? xr(e, ci(t, 3), !0, !0) : []
                }

                function Ui(e, t) {
                    return e && e.length ? xr(e, ci(t, 3), !0) : []
                }

                function Vi(e, t, n, r) {
                    var i = e ? e.length : 0;
                    return i ? (n && "number" != typeof n && Ii(e, t, n) && (n = 0, r = i), Fn(e, t, n, r)) : []
                }

                function ji(e, t) {
                    return e && e.length ? I(e, ci(t, 3)) : -1
                }

                function qi(e, t) {
                    return e && e.length ? I(e, ci(t, 3), !0) : -1
                }

                function Ji(e) {
                    var t = e ? e.length : 0;
                    return t ? Pn(e, 1) : []
                }

                function Gi(e) {
                    var t = e ? e.length : 0;
                    return t ? Pn(e, we) : []
                }

                function Wi(e, t) {
                    var n = e ? e.length : 0;
                    return n ? (t = t === X ? 1 : ul(t), Pn(e, t)) : []
                }

                function Hi(e) {
                    for (var t = -1, n = e ? e.length : 0, r = {}; ++t < n;) {
                        var i = e[t];
                        r[i[0]] = i[1]
                    }
                    return r
                }

                function zi(e) {
                    return e ? e[0] : X
                }

                function Ki(e, t, n) {
                    var r = e ? e.length : 0;
                    return r ? (n = ul(n), 0 > n && (n = vu(r + n, 0)), w(e, t, n)) : -1
                }

                function Qi(e) {
                    return Mi(e, 1)
                }

                function Zi(e, t) {
                    return e ? gu.call(e, t) : ""
                }

                function Yi(e) {
                    var t = e ? e.length : 0;
                    return t ? e[t - 1] : X
                }

                function Xi(e, t, n) {
                    var r = e ? e.length : 0;
                    if (!r)return -1;
                    var i = r;
                    if (n !== X && (i = ul(n), i = (0 > i ? vu(r + i, 0) : bu(i, r - 1)) + 1), t !== t)return j(e, i, !0);
                    for (; i--;)if (e[i] === t)return i;
                    return -1
                }

                function ea(e, t) {
                    return e && e.length && t && t.length ? cr(e, t) : e
                }

                function ta(e, t, n) {
                    return e && e.length && t && t.length ? cr(e, t, ci(n)) : e
                }

                function na(e, t, n) {
                    return e && e.length && t && t.length ? cr(e, t, X, n) : e
                }

                function ra(e, t) {
                    var n = [];
                    if (!e || !e.length)return n;
                    var r = -1, i = [], a = e.length;
                    for (t = ci(t, 3); ++r < a;) {
                        var o = e[r];
                        t(o, r, e) && (n.push(o), i.push(r))
                    }
                    return fr(e, i), n
                }

                function ia(e) {
                    return e ? Su.call(e) : e
                }

                function aa(e, t, n) {
                    var r = e ? e.length : 0;
                    return r ? (n && "number" != typeof n && Ii(e, t, n) ? (t = 0, n = r) : (t = null == t ? 0 : ul(t), n = n === X ? r : ul(n)), hr(e, t, n)) : []
                }

                function oa(e, t) {
                    return br(e, t)
                }

                function la(e, t, n) {
                    return Cr(e, t, ci(n))
                }

                function sa(e, t) {
                    var n = e ? e.length : 0;
                    if (n) {
                        var r = br(e, t);
                        if (n > r && So(e[r], t))return r
                    }
                    return -1
                }

                function ua(e, t) {
                    return br(e, t, !0)
                }

                function da(e, t, n) {
                    return Cr(e, t, ci(n), !0)
                }

                function pa(e, t) {
                    var n = e ? e.length : 0;
                    if (n) {
                        var r = br(e, t, !0) - 1;
                        if (So(e[r], t))return r
                    }
                    return -1
                }

                function ca(e) {
                    return e && e.length ? Er(e) : []
                }

                function fa(e, t) {
                    return e && e.length ? Sr(e, ci(t)) : []
                }

                function ya(e) {
                    return Ni(e, 1)
                }

                function ma(e, t, n) {
                    return e && e.length ? (t = n || t === X ? 1 : ul(t), hr(e, 0, 0 > t ? 0 : t)) : []
                }

                function ga(e, t, n) {
                    var r = e ? e.length : 0;
                    return r ? (t = n || t === X ? 1 : ul(t), t = r - t, hr(e, 0 > t ? 0 : t, r)) : []
                }

                function ha(e, t) {
                    return e && e.length ? xr(e, ci(t, 3), !1, !0) : []
                }

                function va(e, t) {
                    return e && e.length ? xr(e, ci(t, 3)) : []
                }

                function ba(e) {
                    return e && e.length ? Ir(e) : []
                }

                function Ca(e, t) {
                    return e && e.length ? Ir(e, ci(t)) : []
                }

                function Ea(e, t) {
                    return e && e.length ? Ir(e, X, t) : []
                }

                function Sa(e) {
                    if (!e || !e.length)return [];
                    var t = 0;
                    return e = f(e, function (e) {
                        return Do(e) ? (t = vu(e.length, t), !0) : void 0
                    }), k(t, function (t) {
                        return g(e, dr(t))
                    })
                }

                function Ia(e, t) {
                    if (!e || !e.length)return [];
                    var n = Sa(e);
                    return null == t ? n : g(n, function (e) {
                        return l(t, X, e)
                    })
                }

                function wa(e, t) {
                    return kr(e || [], t || [], sn)
                }

                function Ta(e, t) {
                    return kr(e || [], t || [], gr)
                }

                function xa(e) {
                    var n = t(e);
                    return n.__chain__ = !0, n
                }

                function _a(e, t) {
                    return t(e), e
                }

                function Da(e, t) {
                    return t(e)
                }

                function ka() {
                    return xa(this)
                }

                function La() {
                    return new r(this.value(), this.__chain__)
                }

                function Oa(e) {
                    return this.map(e).flatten()
                }

                function Aa() {
                    this.__values__ === X && (this.__values__ = sl(this.value()));
                    var e = this.__index__ >= this.__values__.length, t = e ? X : this.__values__[this.__index__++];
                    return {done: e, value: t}
                }

                function Ra() {
                    return this
                }

                function Fa(e) {
                    for (var t, r = this; r instanceof n;) {
                        var i = Fi(r);
                        i.__index__ = 0, i.__values__ = X, t ? a.__wrapped__ = i : t = i;
                        var a = i;
                        r = r.__wrapped__
                    }
                    return a.__wrapped__ = e, t
                }

                function $a() {
                    var e = this.__wrapped__;
                    if (e instanceof i) {
                        var t = e;
                        return this.__actions__.length && (t = new i(this)), t = t.reverse(), t.__actions__.push({
                            func: Da,
                            args: [ia],
                            thisArg: X
                        }), new r(t, this.__chain__)
                    }
                    return this.thru(ia)
                }

                function Pa() {
                    return _r(this.__wrapped__, this.__actions__)
                }

                function Na(e, t, n) {
                    var r = xd(e) ? c : An;
                    return n && Ii(e, t, n) && (t = X), r(e, ci(t, 3))
                }

                function Ma(e, t) {
                    var n = xd(e) ? f : $n;
                    return n(e, ci(t, 3))
                }

                function Ba(e, t) {
                    if (t = ci(t, 3), xd(e)) {
                        var n = I(e, t);
                        return n > -1 ? e[n] : X
                    }
                    return S(e, t, Pu)
                }

                function Ua(e, t) {
                    if (t = ci(t, 3), xd(e)) {
                        var n = I(e, t, !0);
                        return n > -1 ? e[n] : X
                    }
                    return S(e, t, Nu)
                }

                function Va(e, t) {
                    return Pn(Ga(e, t), 1)
                }

                function ja(e, t) {
                    return "function" == typeof t && xd(e) ? d(e, t) : Pu(e, fn(t))
                }

                function qa(e, t) {
                    return "function" == typeof t && xd(e) ? p(e, t) : Nu(e, fn(t))
                }

                function Ja(e, t, n, r) {
                    e = _o(e) ? e : jl(e), n = n && !r ? ul(n) : 0;
                    var i = e.length;
                    return 0 > n && (n = vu(i + n, 0)), el(e) ? i >= n && e.indexOf(t, n) > -1 : !!i && w(e, t, n) > -1
                }

                function Ga(e, t) {
                    var n = xd(e) ? g : nr;
                    return n(e, ci(t, 3))
                }

                function Wa(e, t, n, r) {
                    return null == e ? [] : (xd(t) || (t = null == t ? [] : [t]), n = r ? X : n, xd(n) || (n = null == n ? [] : [n]), lr(e, t, n))
                }

                function Ha(e, t, n) {
                    var r = xd(e) ? v : x, i = arguments.length < 3;
                    return r(e, ci(t, 4), n, i, Pu)
                }

                function za(e, t, n) {
                    var r = xd(e) ? b : x, i = arguments.length < 3;
                    return r(e, ci(t, 4), n, i, Nu)
                }

                function Ka(e, t) {
                    var n = xd(e) ? f : $n;
                    return t = ci(t, 3), n(e, function (e, n, r) {
                        return !t(e, n, r)
                    })
                }

                function Qa(e) {
                    var t = _o(e) ? e : jl(e), n = t.length;
                    return n > 0 ? t[yr(0, n - 1)] : X
                }

                function Za(e, t) {
                    var n = -1, r = sl(e), i = r.length, a = i - 1;
                    for (t = wn(ul(t), 0, i); ++n < t;) {
                        var o = yr(n, a), l = r[o];
                        r[o] = r[n], r[n] = l
                    }
                    return r.length = t, r
                }

                function Ya(e) {
                    return Za(e, De)
                }

                function Xa(e) {
                    if (null == e)return 0;
                    if (_o(e)) {
                        var t = e.length;
                        return t && el(e) ? K(e) : t
                    }
                    return _l(e).length
                }

                function eo(e, t, n) {
                    var r = xd(e) ? C : vr;
                    return n && Ii(e, t, n) && (t = X), r(e, ci(t, 3))
                }

                function to(e, t) {
                    if ("function" != typeof t)throw new Js(ne);
                    return e = ul(e), function () {
                        return --e < 1 ? t.apply(this, arguments) : void 0
                    }
                }

                function no(e, t, n) {
                    return t = n ? X : t, t = e && null == t ? e.length : t, li(e, ce, X, X, X, X, t)
                }

                function ro(e, t) {
                    var n;
                    if ("function" != typeof t)throw new Js(ne);
                    return e = ul(e), function () {
                        return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = X), n
                    }
                }

                function io(e, t, n) {
                    t = n ? X : t;
                    var r = li(e, se, X, X, X, X, X, t);
                    return r.placeholder = io.placeholder, r
                }

                function ao(e, t, n) {
                    t = n ? X : t;
                    var r = li(e, ue, X, X, X, X, X, t);
                    return r.placeholder = ao.placeholder, r
                }

                function oo(e, t, n) {
                    function r() {
                        y && iu(y), d && iu(d), g = 0, u = d = f = y = m = X
                    }

                    function i(t, n) {
                        n && iu(n), d = y = m = X, t && (g = hd(), p = e.apply(f, u), y || d || (u = f = X))
                    }

                    function a() {
                        var e = t - (hd() - c);
                        0 >= e || e > t ? i(m, d) : y = pu(a, e)
                    }

                    function o() {
                        return (y && m || d && b) && (p = e.apply(f, u)), r(), p
                    }

                    function l() {
                        i(b, y)
                    }

                    function s() {
                        if (u = arguments, c = hd(), f = this, m = b && (y || !h), v === !1)var n = h && !y; else {
                            g || d || h || (g = c);
                            var r = v - (c - g), i = (0 >= r || r > v) && (h || d);
                            i ? (d && (d = iu(d)), g = c, p = e.apply(f, u)) : d || (d = pu(l, r))
                        }
                        return i && y ? y = iu(y) : y || t === v || (y = pu(a, t)), n && (i = !0, p = e.apply(f, u)), !i || y || d || (u = f = X), p
                    }

                    var u, d, p, c, f, y, m, g = 0, h = !1, v = !1, b = !0;
                    if ("function" != typeof e)throw new Js(ne);
                    return t = pl(t) || 0, Uo(n) && (h = !!n.leading, v = "maxWait" in n && vu(pl(n.maxWait) || 0, t), b = "trailing" in n ? !!n.trailing : b), s.cancel = r, s.flush = o, s
                }

                function lo(e) {
                    return li(e, ye)
                }

                function so(e, t) {
                    if ("function" != typeof e || t && "function" != typeof t)throw new Js(ne);
                    var n = function () {
                        var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
                        if (a.has(i))return a.get(i);
                        var o = e.apply(this, r);
                        return n.cache = a.set(i, o), o
                    };
                    return n.cache = new so.Cache, n
                }

                function uo(e) {
                    if ("function" != typeof e)throw new Js(ne);
                    return function () {
                        return !e.apply(this, arguments)
                    }
                }

                function po(e) {
                    return ro(2, e)
                }

                function co(e, t) {
                    if ("function" != typeof e)throw new Js(ne);
                    return t = vu(t === X ? e.length - 1 : ul(t), 0), function () {
                        for (var n = arguments, r = -1, i = vu(n.length - t, 0), a = Array(i); ++r < i;)a[r] = n[t + r];
                        switch (t) {
                            case 0:
                                return e.call(this, a);
                            case 1:
                                return e.call(this, n[0], a);
                            case 2:
                                return e.call(this, n[0], n[1], a)
                        }
                        var o = Array(t + 1);
                        for (r = -1; ++r < t;)o[r] = n[r];
                        return o[t] = a, l(e, this, o)
                    }
                }

                function fo(e, t) {
                    if ("function" != typeof e)throw new Js(ne);
                    return t = t === X ? 0 : vu(ul(t), 0), co(function (n) {
                        var r = n[t], i = n.slice(0, t);
                        return r && h(i, r), l(e, this, i)
                    })
                }

                function yo(e, t, n) {
                    var r = !0, i = !0;
                    if ("function" != typeof e)throw new Js(ne);
                    return Uo(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), oo(e, t, {
                        leading: r,
                        maxWait: t,
                        trailing: i
                    })
                }

                function mo(e) {
                    return no(e, 1)
                }

                function go(e, t) {
                    return t = null == t ? vs : t, Id(t, e)
                }

                function ho() {
                    if (!arguments.length)return [];
                    var e = arguments[0];
                    return xd(e) ? e : [e]
                }

                function vo(e) {
                    return Tn(e, !1, !0)
                }

                function bo(e, t) {
                    return Tn(e, !1, !0, t)
                }

                function Co(e) {
                    return Tn(e, !0, !0)
                }

                function Eo(e, t) {
                    return Tn(e, !0, !0, t)
                }

                function So(e, t) {
                    return e === t || e !== e && t !== t
                }

                function Io(e, t) {
                    return e > t
                }

                function wo(e, t) {
                    return e >= t
                }

                function To(e) {
                    return Do(e) && zs.call(e, "callee") && (!du.call(e, "callee") || Zs.call(e) == Oe)
                }

                function xo(e) {
                    return Vo(e) && Zs.call(e) == He
                }

                function _o(e) {
                    return null != e && Bo(qu(e)) && !No(e)
                }

                function Do(e) {
                    return Vo(e) && _o(e)
                }

                function ko(e) {
                    return e === !0 || e === !1 || Vo(e) && Zs.call(e) == Re
                }

                function Lo(e) {
                    return Vo(e) && Zs.call(e) == Fe
                }

                function Oo(e) {
                    return !!e && 1 === e.nodeType && Vo(e) && !Qo(e)
                }

                function Ao(e) {
                    if (_o(e) && (xd(e) || el(e) || No(e.splice) || To(e)))return !e.length;
                    for (var t in e)if (zs.call(e, t))return !1;
                    return !0
                }

                function Ro(e, t) {
                    return Qn(e, t)
                }

                function Fo(e, t, n) {
                    n = "function" == typeof n ? n : X;
                    var r = n ? n(e, t) : X;
                    return r === X ? Qn(e, t, n) : !!r
                }

                function $o(e) {
                    return Vo(e) ? Zs.call(e) == $e || "string" == typeof e.message && "string" == typeof e.name : !1
                }

                function Po(e) {
                    return "number" == typeof e && mu(e)
                }

                function No(e) {
                    var t = Uo(e) ? Zs.call(e) : "";
                    return t == Pe || t == Ne
                }

                function Mo(e) {
                    return "number" == typeof e && e == ul(e)
                }

                function Bo(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && Te >= e
                }

                function Uo(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t)
                }

                function Vo(e) {
                    return !!e && "object" == typeof e
                }

                function jo(e) {
                    return Vo(e) && gi(e) == Me
                }

                function qo(e, t) {
                    return e === t || Yn(e, t, fi(t))
                }

                function Jo(e, t, n) {
                    return n = "function" == typeof n ? n : X, Yn(e, t, fi(t), n)
                }

                function Go(e) {
                    return Ko(e) && e != +e
                }

                function Wo(e) {
                    return null == e ? !1 : No(e) ? Xs.test(Hs.call(e)) : Vo(e) && (q(e) ? Xs : _t).test(e)
                }

                function Ho(e) {
                    return null === e
                }

                function zo(e) {
                    return null == e
                }

                function Ko(e) {
                    return "number" == typeof e || Vo(e) && Zs.call(e) == Be
                }

                function Qo(e) {
                    if (!Vo(e) || Zs.call(e) != Ue || q(e))return !1;
                    var t = ou(e);
                    if (null === t)return !0;
                    var n = t.constructor;
                    return "function" == typeof n && n instanceof n && Hs.call(n) == Qs
                }

                function Zo(e) {
                    return Uo(e) && Zs.call(e) == Ve
                }

                function Yo(e) {
                    return Mo(e) && e >= -Te && Te >= e
                }

                function Xo(e) {
                    return Vo(e) && gi(e) == je
                }

                function el(e) {
                    return "string" == typeof e || !xd(e) && Vo(e) && Zs.call(e) == qe
                }

                function tl(e) {
                    return "symbol" == typeof e || Vo(e) && Zs.call(e) == Je
                }

                function nl(e) {
                    return Vo(e) && Bo(e.length) && !!Sn[Zs.call(e)]
                }

                function rl(e) {
                    return e === X
                }

                function il(e) {
                    return Vo(e) && gi(e) == Ge
                }

                function al(e) {
                    return Vo(e) && Zs.call(e) == We
                }

                function ol(e, t) {
                    return t > e
                }

                function ll(e, t) {
                    return t >= e
                }

                function sl(e) {
                    if (!e)return [];
                    if (_o(e))return el(e) ? Q(e) : Br(e);
                    if (su && e[su])return G(e[su]());
                    var t = gi(e), n = t == Me ? W : t == je ? z : jl;
                    return n(e)
                }

                function ul(e) {
                    if (!e)return 0 === e ? e : 0;
                    if (e = pl(e), e === we || e === -we) {
                        var t = 0 > e ? -1 : 1;
                        return t * xe
                    }
                    var n = e % 1;
                    return e === e ? n ? e - n : e : 0
                }

                function dl(e) {
                    return e ? wn(ul(e), 0, De) : 0
                }

                function pl(e) {
                    if (Uo(e)) {
                        var t = No(e.valueOf) ? e.valueOf() : e;
                        e = Uo(t) ? t + "" : t
                    }
                    if ("string" != typeof e)return 0 === e ? e : +e;
                    e = e.replace(vt, "");
                    var n = xt.test(e);
                    return n || Dt.test(e) ? Ln(e.slice(2), n ? 2 : 8) : Tt.test(e) ? _e : +e
                }

                function cl(e) {
                    return Ur(e, Dl(e))
                }

                function fl(e) {
                    return wn(ul(e), -Te, Te)
                }

                function yl(e) {
                    if ("string" == typeof e)return e;
                    if (null == e)return "";
                    if (tl(e))return $u ? $u.call(e) : "";
                    var t = e + "";
                    return "0" == t && 1 / e == -we ? "-0" : t
                }

                function ml(e, t) {
                    var n = _n(e);
                    return t ? dn(n, t) : n
                }

                function gl(e, t) {
                    return S(e, ci(t, 3), Un, !0)
                }

                function hl(e, t) {
                    return S(e, ci(t, 3), Vn, !0)
                }

                function vl(e, t) {
                    return null == e ? e : Mu(e, fn(t), Dl)
                }

                function bl(e, t) {
                    return null == e ? e : Bu(e, fn(t), Dl)
                }

                function Cl(e, t) {
                    return e && Un(e, fn(t))
                }

                function El(e, t) {
                    return e && Vn(e, fn(t))
                }

                function Sl(e) {
                    return null == e ? [] : jn(e, _l(e))
                }

                function Il(e) {
                    return null == e ? [] : jn(e, Dl(e))
                }

                function wl(e, t, n) {
                    var r = null == e ? X : qn(e, t);
                    return r === X ? n : r
                }

                function Tl(e, t) {
                    return vi(e, t, Jn)
                }

                function xl(e, t) {
                    return vi(e, t, Gn)
                }

                function _l(e) {
                    var t = _i(e);
                    if (!t && !_o(e))return er(e);
                    var n = Si(e), r = !!n, i = n || [], a = i.length;
                    for (var o in e)!Jn(e, o) || r && ("length" == o || J(o, a)) || t && "constructor" == o || i.push(o);
                    return i
                }

                function Dl(e) {
                    for (var t = -1, n = _i(e), r = tr(e), i = r.length, a = Si(e), o = !!a, l = a || [], s = l.length; ++t < i;) {
                        var u = r[t];
                        o && ("length" == u || J(u, s)) || "constructor" == u && (n || !zs.call(e, u)) || l.push(u)
                    }
                    return l
                }

                function kl(e, t) {
                    var n = {};
                    return t = ci(t, 3), Un(e, function (e, r, i) {
                        n[t(e, r, i)] = e
                    }), n
                }

                function Ll(e, t) {
                    var n = {};
                    return t = ci(t, 3), Un(e, function (e, r, i) {
                        n[r] = t(e, r, i)
                    }), n
                }

                function Ol(e, t) {
                    return t = ci(t), ur(e, function (e, n) {
                        return !t(e, n)
                    })
                }

                function Al(e, t) {
                    return null == e ? {} : ur(e, ci(t))
                }

                function Rl(e, t, n) {
                    if (wi(t, e))r = null == e ? X : e[t]; else {
                        t = mn(t);
                        var r = wl(e, t);
                        e = Oi(e, t)
                    }
                    return r === X && (r = n), No(r) ? r.call(e) : r
                }

                function Fl(e, t, n) {
                    return null == e ? e : gr(e, t, n)
                }

                function $l(e, t, n, r) {
                    return r = "function" == typeof r ? r : X, null == e ? e : gr(e, t, n, r)
                }

                function Pl(e) {
                    return L(e, _l(e))
                }

                function Nl(e) {
                    return L(e, Dl(e))
                }

                function Ml(e, t, n) {
                    var r = xd(e) || nl(e);
                    if (t = ci(t, 4), null == n)if (r || Uo(e)) {
                        var i = e.constructor;
                        n = r ? xd(e) ? new i : [] : No(i) ? _n(ou(e)) : {}
                    } else n = {};
                    return (r ? d : Un)(e, function (e, r, i) {
                        return t(n, e, r, i)
                    }), n
                }

                function Bl(e, t) {
                    return null == e ? !0 : wr(e, t)
                }

                function Ul(e, t, n) {
                    return null == e ? e : Tr(e, t, fn(n))
                }

                function Vl(e, t, n, r) {
                    return r = "function" == typeof r ? r : X, null == e ? e : Tr(e, t, fn(n), r)
                }

                function jl(e) {
                    return e ? A(e, _l(e)) : []
                }

                function ql(e) {
                    return null == e ? [] : A(e, Dl(e))
                }

                function Jl(e, t, n) {
                    return n === X && (n = t, t = X), n !== X && (n = pl(n), n = n === n ? n : 0), t !== X && (t = pl(t), t = t === t ? t : 0), wn(pl(e), t, n)
                }

                function Gl(e, t, n) {
                    return t = pl(t) || 0, n === X ? (n = t, t = 0) : n = pl(n) || 0, e = pl(e), Wn(e, t, n)
                }

                function Wl(e, t, n) {
                    if (n && "boolean" != typeof n && Ii(e, t, n) && (t = n = X), n === X && ("boolean" == typeof t ? (n = t, t = X) : "boolean" == typeof e && (n = e, e = X)), e === X && t === X ? (e = 0, t = 1) : (e = pl(e) || 0, t === X ? (t = e, e = 0) : t = pl(t) || 0), e > t) {
                        var r = e;
                        e = t, t = r
                    }
                    if (n || e % 1 || t % 1) {
                        var i = Eu();
                        return bu(e + i * (t - e + kn("1e-" + ((i + "").length - 1))), t)
                    }
                    return yr(e, t)
                }

                function Hl(e) {
                    return Wd(yl(e).toLowerCase())
                }

                function zl(e) {
                    return e = yl(e), e && e.replace(Lt, B).replace(yn, "")
                }

                function Kl(e, t, n) {
                    e = yl(e), t = "string" == typeof t ? t : t + "";
                    var r = e.length;
                    return n = n === X ? r : wn(ul(n), 0, r), n -= t.length, n >= 0 && e.indexOf(t, n) == n
                }

                function Ql(e) {
                    return e = yl(e), e && ut.test(e) ? e.replace(lt, U) : e
                }

                function Zl(e) {
                    return e = yl(e), e && ht.test(e) ? e.replace(gt, "\\$&") : e
                }

                function Yl(e, t, n) {
                    e = yl(e), t = ul(t);
                    var r = K(e);
                    if (!t || r >= t)return e;
                    var i = (t - r) / 2, a = yu(i), o = fu(i);
                    return ni("", a, n) + e + ni("", o, n)
                }

                function Xl(e, t, n) {
                    return e = yl(e), e + ni(e, t, n)
                }

                function es(e, t, n) {
                    return e = yl(e), ni(e, t, n) + e
                }

                function ts(e, t, n) {
                    return n || null == t ? t = 0 : t && (t = +t), e = yl(e).replace(vt, ""), Cu(e, t || (wt.test(e) ? 16 : 10))
                }

                function ns(e, t) {
                    e = yl(e), t = ul(t);
                    var n = "";
                    if (!e || 1 > t || t > Te)return n;
                    do t % 2 && (n += e), t = yu(t / 2), e += e; while (t);
                    return n
                }

                function rs() {
                    var e = arguments, t = yl(e[0]);
                    return e.length < 3 ? t : t.replace(e[1], e[2])
                }

                function is(e, t, n) {
                    return yl(e).split(t, n)
                }

                function as(e, t, n) {
                    return e = yl(e), n = wn(ul(n), 0, e.length), e.lastIndexOf(t, n) == n
                }

                function os(e, n, r) {
                    var i = t.templateSettings;
                    r && Ii(e, n, r) && (n = X), e = yl(e), n = Ld({}, n, i, on);
                    var a, o, l = Ld({}, n.imports, i.imports, on), s = _l(l), u = A(l, s), d = 0, p = n.interpolate || Ot, c = "__p += '", f = qs((n.escape || Ot).source + "|" + p.source + "|" + (p === ct ? St : Ot).source + "|" + (n.evaluate || Ot).source + "|$", "g"), y = "//# sourceURL=" + ("sourceURL" in n ? n.sourceURL : "lodash.templateSources[" + ++En + "]") + "\n";
                    e.replace(f, function (t, n, r, i, l, s) {
                        return r || (r = i), c += e.slice(d, s).replace(At, V), n && (a = !0, c += "' +\n__e(" + n + ") +\n'"), l && (o = !0, c += "';\n" + l + ";\n__p += '"), r && (c += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), d = s + t.length, t
                    }), c += "';\n";
                    var m = n.variable;
                    m || (c = "with (obj) {\n" + c + "\n}\n"), c = (o ? c.replace(rt, "") : c).replace(it, "$1").replace(at, "$1;"), c = "function(" + (m || "obj") + ") {\n" + (m ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (a ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + c + "return __p\n}";
                    var g = Qd(function () {
                        return Function(s, y + "return " + c).apply(X, u)
                    });
                    if (g.source = c, $o(g))throw g;
                    return g
                }

                function ls(e) {
                    return yl(e).toLowerCase()
                }

                function ss(e) {
                    return yl(e).toUpperCase()
                }

                function us(e, t, n) {
                    if (e = yl(e), !e)return e;
                    if (n || t === X)return e.replace(vt, "");
                    if (t += "", !t)return e;
                    var r = Q(e), i = Q(t);
                    return r.slice(R(r, i), F(r, i) + 1).join("")
                }

                function ds(e, t, n) {
                    if (e = yl(e), !e)return e;
                    if (n || t === X)return e.replace(Ct, "");
                    if (t += "", !t)return e;
                    var r = Q(e);
                    return r.slice(0, F(r, Q(t)) + 1).join("")
                }

                function ps(e, t, n) {
                    if (e = yl(e), !e)return e;
                    if (n || t === X)return e.replace(bt, "");
                    if (t += "", !t)return e;
                    var r = Q(e);
                    return r.slice(R(r, Q(t))).join("")
                }

                function cs(e, t) {
                    var n = he, r = ve;
                    if (Uo(t)) {
                        var i = "separator" in t ? t.separator : i;
                        n = "length" in t ? ul(t.length) : n, r = "omission" in t ? yl(t.omission) : r
                    }
                    e = yl(e);
                    var a = e.length;
                    if (gn.test(e)) {
                        var o = Q(e);
                        a = o.length
                    }
                    if (n >= a)return e;
                    var l = n - K(r);
                    if (1 > l)return r;
                    var s = o ? o.slice(0, l).join("") : e.slice(0, l);
                    if (i === X)return s + r;
                    if (o && (l += s.length - l), Zo(i)) {
                        if (e.slice(l).search(i)) {
                            var u, d = s;
                            for (i.global || (i = qs(i.source, yl(It.exec(i)) + "g")), i.lastIndex = 0; u = i.exec(d);)var p = u.index;
                            s = s.slice(0, p === X ? l : p)
                        }
                    } else if (e.indexOf(i, l) != l) {
                        var c = s.lastIndexOf(i);
                        c > -1 && (s = s.slice(0, c))
                    }
                    return s + r
                }

                function fs(e) {
                    return e = yl(e), e && st.test(e) ? e.replace(ot, Z) : e
                }

                function ys(e, t, n) {
                    return e = yl(e), t = n ? X : t, t === X && (t = bn.test(e) ? vn : hn), e.match(t) || []
                }

                function ms(e) {
                    var t = e ? e.length : 0, n = ci();
                    return e = t ? g(e, function (e) {
                        if ("function" != typeof e[1])throw new Js(ne);
                        return [n(e[0]), e[1]]
                    }) : [], co(function (n) {
                        for (var r = -1; ++r < t;) {
                            var i = e[r];
                            if (l(i[0], this, n))return l(i[1], this, n)
                        }
                    })
                }

                function gs(e) {
                    return xn(Tn(e, !0))
                }

                function hs(e) {
                    return function () {
                        return e
                    }
                }

                function vs(e) {
                    return e
                }

                function bs(e) {
                    return Xn("function" == typeof e ? e : Tn(e, !0))
                }

                function Cs(e) {
                    return rr(Tn(e, !0))
                }

                function Es(e, t) {
                    return ir(e, Tn(t, !0))
                }

                function Ss(e, t, n) {
                    var r = _l(t), i = jn(t, r);
                    null != n || Uo(t) && (i.length || !r.length) || (n = t, t = e, e = this, i = jn(t, _l(t)));
                    var a = Uo(n) && "chain" in n ? n.chain : !0, o = No(e);
                    return d(i, function (n) {
                        var r = t[n];
                        e[n] = r, o && (e.prototype[n] = function () {
                            var t = this.__chain__;
                            if (a || t) {
                                var n = e(this.__wrapped__), i = n.__actions__ = Br(this.__actions__);
                                return i.push({func: r, args: arguments, thisArg: e}), n.__chain__ = t, n
                            }
                            return r.apply(e, h([this.value()], arguments))
                        })
                    }), e
                }

                function Is() {
                    return Mn._ === this && (Mn._ = Ys), this
                }

                function ws() {
                }

                function Ts(e) {
                    return e = ul(e), function () {
                        return arguments[e]
                    }
                }

                function xs(e) {
                    return wi(e) ? dr(e) : pr(e)
                }

                function _s(e) {
                    return function (t) {
                        return null == e ? X : qn(e, t)
                    }
                }

                function Ds(e, t) {
                    if (e = ul(e), 1 > e || e > Te)return [];
                    var n = De, r = bu(e, De);
                    t = fn(t), e -= De;
                    for (var i = k(r, t); ++n < e;)t(n);
                    return i
                }

                function ks(e) {
                    return xd(e) ? g(e, String) : Ri(e)
                }

                function Ls(e) {
                    var t = ++Ks;
                    return yl(e) + t
                }

                function Os(e, t) {
                    var n;
                    return e === X && t === X ? 0 : (e !== X && (n = e), t !== X && (n = n === X ? t : n + t), n)
                }

                function As(e) {
                    return e && e.length ? E(e, vs, Io) : X
                }

                function Rs(e, t) {
                    return e && e.length ? E(e, ci(t), Io) : X
                }

                function Fs(e) {
                    return Ms(e) / (e ? e.length : 0)
                }

                function $s(e) {
                    return e && e.length ? E(e, vs, ol) : X
                }

                function Ps(e, t) {
                    return e && e.length ? E(e, ci(t), ol) : X
                }

                function Ns(e, t) {
                    var n;
                    return e === X && t === X ? 0 : (e !== X && (n = e), t !== X && (n = n === X ? t : n - t), n)
                }

                function Ms(e) {
                    return e && e.length ? D(e, vs) : 0
                }

                function Bs(e, t) {
                    return e && e.length ? D(e, ci(t)) : 0
                }

                e = e ? Bn.defaults({}, e, Bn.pick(Mn, Cn)) : Mn;
                var Us = e.Date, Vs = e.Error, js = e.Math, qs = e.RegExp, Js = e.TypeError, Gs = e.Array.prototype, Ws = e.Object.prototype, Hs = e.Function.prototype.toString, zs = Ws.hasOwnProperty, Ks = 0, Qs = Hs.call(Object), Zs = Ws.toString, Ys = Mn._, Xs = qs("^" + Hs.call(zs).replace(gt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), eu = Rn ? e.Buffer : X, tu = e.Reflect, nu = e.Symbol, ru = e.Uint8Array, iu = e.clearTimeout, au = tu ? tu.enumerate : X, ou = Object.getPrototypeOf, lu = Object.getOwnPropertySymbols, su = "symbol" == typeof(su = nu && nu.iterator) ? su : X, uu = Object.create, du = Ws.propertyIsEnumerable, pu = e.setTimeout, cu = Gs.splice, fu = js.ceil, yu = js.floor, mu = e.isFinite, gu = Gs.join, hu = Object.keys, vu = js.max, bu = js.min, Cu = e.parseInt, Eu = js.random, Su = Gs.reverse, Iu = yi(e, "Map"), wu = yi(e, "Set"), Tu = yi(e, "WeakMap"), xu = yi(Object, "create"), _u = Tu && new Tu, Du = !du.call({valueOf: 1}, "valueOf"), ku = {}, Lu = Iu ? Hs.call(Iu) : "", Ou = wu ? Hs.call(wu) : "", Au = Tu ? Hs.call(Tu) : "", Ru = nu ? nu.prototype : X, Fu = Ru ? Ru.valueOf : X, $u = Ru ? Ru.toString : X;
                t.templateSettings = {escape: dt, evaluate: pt, interpolate: ct, variable: "", imports: {_: t}};
                var Pu = Gr(Un), Nu = Gr(Vn, !0), Mu = Wr(), Bu = Wr(!0);
                au && !du.call({valueOf: 1}, "valueOf") && (tr = function (e) {
                    return G(au(e))
                });
                var Uu = _u ? function (e, t) {
                    return _u.set(e, t), e
                } : vs, Vu = wu && 2 === new wu([1, 2]).size ? function (e) {
                    return new wu(e)
                } : ws, ju = _u ? function (e) {
                    return _u.get(e)
                } : ws, qu = dr("length"), Ju = lu || function () {
                        return []
                    };
                (Iu && gi(new Iu) != Me || wu && gi(new wu) != je || Tu && gi(new Tu) != Ge) && (gi = function (e) {
                    var t = Zs.call(e), n = t == Ue ? e.constructor : null, r = "function" == typeof n ? Hs.call(n) : "";
                    if (r)switch (r) {
                        case Lu:
                            return Me;
                        case Ou:
                            return je;
                        case Au:
                            return Ge
                    }
                    return t
                });
                var Gu = function () {
                    var e = 0, t = 0;
                    return function (n, r) {
                        var i = hd(), a = Ce - (i - t);
                        if (t = i, a > 0) {
                            if (++e >= be)return n
                        } else e = 0;
                        return Uu(n, r)
                    }
                }(), Wu = co(function (e, t) {
                    return xd(e) || (e = null == e ? [] : [Object(e)]), t = Pn(t, 1), u(e, t)
                }), Hu = co(function (e, t) {
                    return Do(e) ? On(e, Pn(t, 1, !0)) : []
                }), zu = co(function (e, t) {
                    var n = Yi(t);
                    return Do(n) && (n = X), Do(e) ? On(e, Pn(t, 1, !0), ci(n)) : []
                }), Ku = co(function (e, t) {
                    var n = Yi(t);
                    return Do(n) && (n = X), Do(e) ? On(e, Pn(t, 1, !0), X, n) : []
                }), Qu = co(function (e) {
                    var t = g(e, cn);
                    return t.length && t[0] === e[0] ? Hn(t) : []
                }), Zu = co(function (e) {
                    var t = Yi(e), n = g(e, cn);
                    return t === Yi(n) ? t = X : n.pop(), n.length && n[0] === e[0] ? Hn(n, ci(t)) : []
                }), Yu = co(function (e) {
                    var t = Yi(e), n = g(e, cn);
                    return t === Yi(n) ? t = X : n.pop(), n.length && n[0] === e[0] ? Hn(n, X, t) : []
                }), Xu = co(ea), ed = co(function (e, t) {
                    t = g(Pn(t, 1), String);
                    var n = pn(e, t);
                    return fr(e, t.sort(P)), n
                }), td = co(function (e) {
                    return Ir(Pn(e, 1, !0))
                }), nd = co(function (e) {
                    var t = Yi(e);
                    return Do(t) && (t = X), Ir(Pn(e, 1, !0), ci(t))
                }), rd = co(function (e) {
                    var t = Yi(e);
                    return Do(t) && (t = X), Ir(Pn(e, 1, !0), X, t)
                }), id = co(function (e, t) {
                    return Do(e) ? On(e, t) : []
                }), ad = co(function (e) {
                    return Dr(f(e, Do))
                }), od = co(function (e) {
                    var t = Yi(e);
                    return Do(t) && (t = X), Dr(f(e, Do), ci(t))
                }), ld = co(function (e) {
                    var t = Yi(e);
                    return Do(t) && (t = X), Dr(f(e, Do), X, t)
                }), sd = co(Sa), ud = co(function (e) {
                    var t = e.length, n = t > 1 ? e[t - 1] : X;
                    return n = "function" == typeof n ? (e.pop(), n) : X, Ia(e, n)
                }), dd = co(function (e) {
                    e = Pn(e, 1);
                    var t = e.length, n = t ? e[0] : 0, a = this.__wrapped__, o = function (t) {
                        return pn(t, e)
                    };
                    return !(t > 1 || this.__actions__.length) && a instanceof i && J(n) ? (a = a.slice(n, +n + (t ? 1 : 0)), a.__actions__.push({
                        func: Da,
                        args: [o],
                        thisArg: X
                    }), new r(a, this.__chain__).thru(function (e) {
                        return t && !e.length && e.push(X), e
                    })) : this.thru(o)
                }), pd = qr(function (e, t, n) {
                    zs.call(e, n) ? ++e[n] : e[n] = 1
                }), cd = qr(function (e, t, n) {
                    zs.call(e, n) ? e[n].push(t) : e[n] = [t]
                }), fd = co(function (e, t, n) {
                    var r = -1, i = "function" == typeof t, a = wi(t), o = _o(e) ? Array(e.length) : [];
                    return Pu(e, function (e) {
                        var s = i ? t : a && null != e ? e[t] : X;
                        o[++r] = s ? l(s, e, n) : Kn(e, t, n)
                    }), o
                }), yd = qr(function (e, t, n) {
                    e[n] = t
                }), md = qr(function (e, t, n) {
                    e[n ? 0 : 1].push(t)
                }, function () {
                    return [[], []]
                }), gd = co(function (e, t) {
                    if (null == e)return [];
                    var n = t.length;
                    return n > 1 && Ii(e, t[0], t[1]) ? t = [] : n > 2 && Ii(t[0], t[1], t[2]) && (t.length = 1), lr(e, Pn(t, 1), [])
                }), hd = Us.now, vd = co(function (e, t, n) {
                    var r = ae;
                    if (n.length) {
                        var i = H(n, mi(vd));
                        r |= de
                    }
                    return li(e, r, t, n, i)
                }), bd = co(function (e, t, n) {
                    var r = ae | oe;
                    if (n.length) {
                        var i = H(n, mi(bd));
                        r |= de
                    }
                    return li(t, r, e, n, i)
                }), Cd = co(function (e, t) {
                    return Dn(e, 1, t)
                }), Ed = co(function (e, t, n) {
                    return Dn(e, pl(t) || 0, n)
                }), Sd = co(function (e, t) {
                    t = g(Pn(t, 1), ci());
                    var n = t.length;
                    return co(function (r) {
                        for (var i = -1, a = bu(r.length, n); ++i < a;)r[i] = t[i].call(this, r[i]);
                        return l(e, this, r)
                    })
                }), Id = co(function (e, t) {
                    var n = H(t, mi(Id));
                    return li(e, de, X, t, n)
                }), wd = co(function (e, t) {
                    var n = H(t, mi(wd));
                    return li(e, pe, X, t, n)
                }), Td = co(function (e, t) {
                    return li(e, fe, X, X, X, Pn(t, 1))
                }), xd = Array.isArray, _d = eu ? function (e) {
                    return e instanceof eu
                } : hs(!1), Dd = Jr(function (e, t) {
                    if (Du || _i(t) || _o(t))return void Ur(t, _l(t), e);
                    for (var n in t)zs.call(t, n) && sn(e, n, t[n])
                }), kd = Jr(function (e, t) {
                    if (Du || _i(t) || _o(t))return void Ur(t, Dl(t), e);
                    for (var n in t)sn(e, n, t[n])
                }), Ld = Jr(function (e, t, n, r) {
                    Vr(t, Dl(t), e, r)
                }), Od = Jr(function (e, t, n, r) {
                    Vr(t, _l(t), e, r)
                }), Ad = co(function (e, t) {
                    return pn(e, Pn(t, 1))
                }), Rd = co(function (e) {
                    return e.push(X, on), l(Ld, X, e)
                }), Fd = co(function (e) {
                    return e.push(X, Li), l(Bd, X, e)
                }), $d = ei(function (e, t, n) {
                    e[t] = n
                }, hs(vs)), Pd = ei(function (e, t, n) {
                    zs.call(e, t) ? e[t].push(n) : e[t] = [n]
                }, ci), Nd = co(Kn), Md = Jr(function (e, t, n) {
                    ar(e, t, n)
                }), Bd = Jr(function (e, t, n, r) {
                    ar(e, t, n, r)
                }), Ud = co(function (e, t) {
                    return null == e ? {} : (t = g(Pn(t, 1), String), sr(e, On(Dl(e), t)))
                }), Vd = co(function (e, t) {
                    return null == e ? {} : sr(e, Pn(t, 1))
                }), jd = Kr(function (e, t, n) {
                    return t = t.toLowerCase(), e + (n ? Hl(t) : t)
                }), qd = Kr(function (e, t, n) {
                    return e + (n ? "-" : "") + t.toLowerCase()
                }), Jd = Kr(function (e, t, n) {
                    return e + (n ? " " : "") + t.toLowerCase()
                }), Gd = zr("toLowerCase"), Wd = zr("toUpperCase"), Hd = Kr(function (e, t, n) {
                    return e + (n ? "_" : "") + t.toLowerCase()
                }), zd = Kr(function (e, t, n) {
                    return e + (n ? " " : "") + Hl(t)
                }), Kd = Kr(function (e, t, n) {
                    return e + (n ? " " : "") + t.toUpperCase()
                }), Qd = co(function (e, t) {
                    try {
                        return l(e, X, t)
                    } catch (n) {
                        return $o(n) ? n : new Vs(n)
                    }
                }), Zd = co(function (e, t) {
                    return d(Pn(t, 1), function (t) {
                        e[t] = vd(e[t], e)
                    }), e
                }), Yd = Yr(), Xd = Yr(!0), ep = co(function (e, t) {
                    return function (n) {
                        return Kn(n, e, t)
                    }
                }), tp = co(function (e, t) {
                    return function (n) {
                        return Kn(e, n, t)
                    }
                }), np = ti(g), rp = ti(c), ip = ti(C), ap = ii(), op = ii(!0), lp = oi("ceil"), sp = oi("floor"), up = oi("round");
                return t.prototype = n.prototype, t.prototype.constructor = t, r.prototype = _n(n.prototype), r.prototype.constructor = r, i.prototype = _n(n.prototype), i.prototype.constructor = i, Ft.prototype = xu ? xu(null) : Ws, Bt.prototype.clear = Ut, Bt.prototype["delete"] = Vt, Bt.prototype.get = jt, Bt.prototype.has = qt, Bt.prototype.set = Jt, Gt.prototype.push = Ht, zt.prototype.clear = Kt, zt.prototype["delete"] = Qt, zt.prototype.get = Zt, zt.prototype.has = Yt, zt.prototype.set = Xt, so.Cache = Bt, t.after = to, t.ary = no, t.assign = Dd, t.assignIn = kd, t.assignInWith = Ld, t.assignWith = Od, t.at = Ad, t.before = ro, t.bind = vd, t.bindAll = Zd, t.bindKey = bd, t.castArray = ho, t.chain = xa, t.chunk = $i, t.compact = Pi, t.concat = Wu, t.cond = ms, t.conforms = gs, t.constant = hs, t.countBy = pd, t.create = ml, t.curry = io, t.curryRight = ao, t.debounce = oo, t.defaults = Rd, t.defaultsDeep = Fd, t.defer = Cd, t.delay = Ed, t.difference = Hu, t.differenceBy = zu, t.differenceWith = Ku, t.drop = Ni, t.dropRight = Mi, t.dropRightWhile = Bi, t.dropWhile = Ui, t.fill = Vi, t.filter = Ma, t.flatMap = Va, t.flatten = Ji, t.flattenDeep = Gi, t.flattenDepth = Wi, t.flip = lo, t.flow = Yd, t.flowRight = Xd, t.fromPairs = Hi, t.functions = Sl, t.functionsIn = Il, t.groupBy = cd, t.initial = Qi, t.intersection = Qu, t.intersectionBy = Zu, t.intersectionWith = Yu, t.invert = $d, t.invertBy = Pd, t.invokeMap = fd, t.iteratee = bs, t.keyBy = yd, t.keys = _l, t.keysIn = Dl, t.map = Ga, t.mapKeys = kl, t.mapValues = Ll, t.matches = Cs, t.matchesProperty = Es, t.memoize = so, t.merge = Md, t.mergeWith = Bd, t.method = ep, t.methodOf = tp, t.mixin = Ss, t.negate = uo, t.nthArg = Ts, t.omit = Ud, t.omitBy = Ol, t.once = po, t.orderBy = Wa, t.over = np, t.overArgs = Sd, t.overEvery = rp, t.overSome = ip, t.partial = Id, t.partialRight = wd,t.partition = md,t.pick = Vd,t.pickBy = Al,t.property = xs,t.propertyOf = _s,t.pull = Xu,t.pullAll = ea,t.pullAllBy = ta,t.pullAllWith = na,t.pullAt = ed,t.range = ap,t.rangeRight = op,t.rearg = Td,t.reject = Ka,t.remove = ra,t.rest = co,t.reverse = ia,t.sampleSize = Za,t.set = Fl,t.setWith = $l,t.shuffle = Ya,t.slice = aa,t.sortBy = gd,t.sortedUniq = ca,t.sortedUniqBy = fa,t.split = is,t.spread = fo,t.tail = ya,t.take = ma,t.takeRight = ga,t.takeRightWhile = ha,t.takeWhile = va,t.tap = _a,t.throttle = yo,t.thru = Da,t.toArray = sl,t.toPairs = Pl,t.toPairsIn = Nl,t.toPath = ks,t.toPlainObject = cl,t.transform = Ml,t.unary = mo,t.union = td,t.unionBy = nd,t.unionWith = rd,t.uniq = ba,t.uniqBy = Ca,t.uniqWith = Ea,t.unset = Bl,t.unzip = Sa,t.unzipWith = Ia,t.update = Ul,t.updateWith = Vl,t.values = jl,t.valuesIn = ql,t.without = id,t.words = ys,t.wrap = go,t.xor = ad,t.xorBy = od,t.xorWith = ld,t.zip = sd,t.zipObject = wa,t.zipObjectDeep = Ta,t.zipWith = ud,t.extend = kd,t.extendWith = Ld,Ss(t, t),t.add = Os,t.attempt = Qd,t.camelCase = jd,t.capitalize = Hl,t.ceil = lp,t.clamp = Jl,t.clone = vo,t.cloneDeep = Co,t.cloneDeepWith = Eo,t.cloneWith = bo,t.deburr = zl,t.endsWith = Kl,t.eq = So,t.escape = Ql,t.escapeRegExp = Zl,t.every = Na,t.find = Ba,t.findIndex = ji,t.findKey = gl,t.findLast = Ua,t.findLastIndex = qi,t.findLastKey = hl,t.floor = sp,t.forEach = ja,t.forEachRight = qa,t.forIn = vl,t.forInRight = bl,t.forOwn = Cl,t.forOwnRight = El,t.get = wl,t.gt = Io,t.gte = wo,t.has = Tl,t.hasIn = xl,t.head = zi,t.identity = vs,t.includes = Ja,t.indexOf = Ki,t.inRange = Gl,t.invoke = Nd,t.isArguments = To,t.isArray = xd,t.isArrayBuffer = xo,t.isArrayLike = _o,t.isArrayLikeObject = Do,t.isBoolean = ko,t.isBuffer = _d,t.isDate = Lo,t.isElement = Oo,t.isEmpty = Ao,t.isEqual = Ro,t.isEqualWith = Fo,t.isError = $o,t.isFinite = Po,t.isFunction = No,t.isInteger = Mo,t.isLength = Bo,t.isMap = jo,t.isMatch = qo,t.isMatchWith = Jo,t.isNaN = Go,t.isNative = Wo,t.isNil = zo,t.isNull = Ho,t.isNumber = Ko,t.isObject = Uo,t.isObjectLike = Vo,t.isPlainObject = Qo,t.isRegExp = Zo,t.isSafeInteger = Yo,t.isSet = Xo,t.isString = el,t.isSymbol = tl,t.isTypedArray = nl,t.isUndefined = rl,t.isWeakMap = il,t.isWeakSet = al,t.join = Zi,t.kebabCase = qd,t.last = Yi,t.lastIndexOf = Xi,t.lowerCase = Jd,t.lowerFirst = Gd,t.lt = ol,t.lte = ll,t.max = As,t.maxBy = Rs,t.mean = Fs,t.min = $s,t.minBy = Ps,t.noConflict = Is,t.noop = ws,t.now = hd,t.pad = Yl,t.padEnd = Xl,t.padStart = es,t.parseInt = ts,t.random = Wl,t.reduce = Ha,t.reduceRight = za,t.repeat = ns,t.replace = rs,t.result = Rl,t.round = up,t.runInContext = Y,t.sample = Qa,t.size = Xa,t.snakeCase = Hd,t.some = eo,t.sortedIndex = oa,t.sortedIndexBy = la,t.sortedIndexOf = sa,t.sortedLastIndex = ua,t.sortedLastIndexBy = da,t.sortedLastIndexOf = pa,t.startCase = zd,t.startsWith = as,t.subtract = Ns,t.sum = Ms,t.sumBy = Bs,t.template = os,t.times = Ds,t.toInteger = ul,t.toLength = dl,t.toLower = ls,t.toNumber = pl,t.toSafeInteger = fl,t.toString = yl,t.toUpper = ss,
                    t.trim = us,t.trimEnd = ds,t.trimStart = ps,t.truncate = cs,t.unescape = fs,t.uniqueId = Ls,t.upperCase = Kd,t.upperFirst = Wd,t.each = ja,t.eachRight = qa,t.first = zi,Ss(t, function () {
                    var e = {};
                    return Un(t, function (n, r) {
                        zs.call(t.prototype, r) || (e[r] = n)
                    }), e
                }(), {chain: !1}),t.VERSION = ee,d(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (e) {
                    t[e].placeholder = t
                }),d(["drop", "take"], function (e, t) {
                    i.prototype[e] = function (n) {
                        var r = this.__filtered__;
                        if (r && !t)return new i(this);
                        n = n === X ? 1 : vu(ul(n), 0);
                        var a = this.clone();
                        return r ? a.__takeCount__ = bu(n, a.__takeCount__) : a.__views__.push({
                            size: bu(n, De),
                            type: e + (a.__dir__ < 0 ? "Right" : "")
                        }), a
                    }, i.prototype[e + "Right"] = function (t) {
                        return this.reverse()[e](t).reverse()
                    }
                }),d(["filter", "map", "takeWhile"], function (e, t) {
                    var n = t + 1, r = n == Ee || n == Ie;
                    i.prototype[e] = function (e) {
                        var t = this.clone();
                        return t.__iteratees__.push({
                            iteratee: ci(e, 3),
                            type: n
                        }), t.__filtered__ = t.__filtered__ || r, t
                    }
                }),d(["head", "last"], function (e, t) {
                    var n = "take" + (t ? "Right" : "");
                    i.prototype[e] = function () {
                        return this[n](1).value()[0]
                    }
                }),d(["initial", "tail"], function (e, t) {
                    var n = "drop" + (t ? "" : "Right");
                    i.prototype[e] = function () {
                        return this.__filtered__ ? new i(this) : this[n](1)
                    }
                }),i.prototype.compact = function () {
                    return this.filter(vs)
                },i.prototype.find = function (e) {
                    return this.filter(e).head()
                },i.prototype.findLast = function (e) {
                    return this.reverse().find(e)
                },i.prototype.invokeMap = co(function (e, t) {
                    return "function" == typeof e ? new i(this) : this.map(function (n) {
                        return Kn(n, e, t)
                    })
                }),i.prototype.reject = function (e) {
                    return e = ci(e, 3), this.filter(function (t) {
                        return !e(t)
                    })
                },i.prototype.slice = function (e, t) {
                    e = ul(e);
                    var n = this;
                    return n.__filtered__ && (e > 0 || 0 > t) ? new i(n) : (0 > e ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== X && (t = ul(t), n = 0 > t ? n.dropRight(-t) : n.take(t - e)), n)
                },i.prototype.takeRightWhile = function (e) {
                    return this.reverse().takeWhile(e).reverse()
                },i.prototype.toArray = function () {
                    return this.take(De)
                },Un(i.prototype, function (e, n) {
                    var a = /^(?:filter|find|map|reject)|While$/.test(n), o = /^(?:head|last)$/.test(n), l = t[o ? "take" + ("last" == n ? "Right" : "") : n], s = o || /^find/.test(n);
                    l && (t.prototype[n] = function () {
                        var n = this.__wrapped__, u = o ? [1] : arguments, d = n instanceof i, p = u[0], c = d || xd(n), f = function (e) {
                            var n = l.apply(t, h([e], u));
                            return o && y ? n[0] : n
                        };
                        c && a && "function" == typeof p && 1 != p.length && (d = c = !1);
                        var y = this.__chain__, m = !!this.__actions__.length, g = s && !y, v = d && !m;
                        if (!s && c) {
                            n = v ? n : new i(this);
                            var b = e.apply(n, u);
                            return b.__actions__.push({func: Da, args: [f], thisArg: X}), new r(b, y)
                        }
                        return g && v ? e.apply(this, u) : (b = this.thru(f), g ? o ? b.value()[0] : b.value() : b)
                    })
                }),d(["pop", "push", "shift", "sort", "splice", "unshift"], function (e) {
                    var n = Gs[e], r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", i = /^(?:pop|shift)$/.test(e);
                    t.prototype[e] = function () {
                        var e = arguments;
                        return i && !this.__chain__ ? n.apply(this.value(), e) : this[r](function (t) {
                            return n.apply(t, e)
                        })
                    }
                }),Un(i.prototype, function (e, n) {
                    var r = t[n];
                    if (r) {
                        var i = r.name + "", a = ku[i] || (ku[i] = []);
                        a.push({name: n, func: r})
                    }
                }),ku[Xr(X, oe).name] = [{
                    name: "wrapper",
                    func: X
                }],i.prototype.clone = $,i.prototype.reverse = kt,i.prototype.value = Rt,t.prototype.at = dd,t.prototype.chain = ka,t.prototype.commit = La,t.prototype.flatMap = Oa,t.prototype.next = Aa,t.prototype.plant = Fa,t.prototype.reverse = $a,t.prototype.toJSON = t.prototype.valueOf = t.prototype.value = Pa,su && (t.prototype[su] = Ra),t
            }

            var X, ee = "4.6.1", te = 200, ne = "Expected a function", re = "__lodash_hash_undefined__", ie = "__lodash_placeholder__", ae = 1, oe = 2, le = 4, se = 8, ue = 16, de = 32, pe = 64, ce = 128, fe = 256, ye = 512, me = 1, ge = 2, he = 30, ve = "...", be = 150, Ce = 16, Ee = 1, Se = 2, Ie = 3, we = 1 / 0, Te = 9007199254740991, xe = 1.7976931348623157e308, _e = NaN, De = 4294967295, ke = De - 1, Le = De >>> 1, Oe = "[object Arguments]", Ae = "[object Array]", Re = "[object Boolean]", Fe = "[object Date]", $e = "[object Error]", Pe = "[object Function]", Ne = "[object GeneratorFunction]", Me = "[object Map]", Be = "[object Number]", Ue = "[object Object]", Ve = "[object RegExp]", je = "[object Set]", qe = "[object String]", Je = "[object Symbol]", Ge = "[object WeakMap]", We = "[object WeakSet]", He = "[object ArrayBuffer]", ze = "[object Float32Array]", Ke = "[object Float64Array]", Qe = "[object Int8Array]", Ze = "[object Int16Array]", Ye = "[object Int32Array]", Xe = "[object Uint8Array]", et = "[object Uint8ClampedArray]", tt = "[object Uint16Array]", nt = "[object Uint32Array]", rt = /\b__p \+= '';/g, it = /\b(__p \+=) '' \+/g, at = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ot = /&(?:amp|lt|gt|quot|#39|#96);/g, lt = /[&<>"'`]/g, st = RegExp(ot.source), ut = RegExp(lt.source), dt = /<%-([\s\S]+?)%>/g, pt = /<%([\s\S]+?)%>/g, ct = /<%=([\s\S]+?)%>/g, ft = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, yt = /^\w*$/, mt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g, gt = /[\\^$.*+?()[\]{}|]/g, ht = RegExp(gt.source), vt = /^\s+|\s+$/g, bt = /^\s+/, Ct = /\s+$/, Et = /\\(\\)?/g, St = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, It = /\w*$/, wt = /^0x/i, Tt = /^[-+]0x[0-9a-f]+$/i, xt = /^0b[01]+$/i, _t = /^\[object .+?Constructor\]$/, Dt = /^0o[0-7]+$/i, kt = /^(?:0|[1-9]\d*)$/, Lt = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g, Ot = /($^)/, At = /['\n\r\u2028\u2029\\]/g, Rt = "\\ud800-\\udfff", Ft = "\\u0300-\\u036f\\ufe20-\\ufe23", $t = "\\u20d0-\\u20f0", Pt = "\\u2700-\\u27bf", Nt = "a-z\\xdf-\\xf6\\xf8-\\xff", Mt = "\\xac\\xb1\\xd7\\xf7", Bt = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ut = "\\u2018\\u2019\\u201c\\u201d", Vt = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", jt = "A-Z\\xc0-\\xd6\\xd8-\\xde", qt = "\\ufe0e\\ufe0f", Jt = Mt + Bt + Ut + Vt, Gt = "[" + Rt + "]", Wt = "[" + Jt + "]", Ht = "[" + Ft + $t + "]", zt = "\\d+", Kt = "[" + Pt + "]", Qt = "[" + Nt + "]", Zt = "[^" + Rt + Jt + zt + Pt + Nt + jt + "]", Yt = "\\ud83c[\\udffb-\\udfff]", Xt = "(?:" + Ht + "|" + Yt + ")", en = "[^" + Rt + "]", tn = "(?:\\ud83c[\\udde6-\\uddff]){2}", nn = "[\\ud800-\\udbff][\\udc00-\\udfff]", rn = "[" + jt + "]", an = "\\u200d", on = "(?:" + Qt + "|" + Zt + ")", ln = "(?:" + rn + "|" + Zt + ")", sn = Xt + "?", un = "[" + qt + "]?", dn = "(?:" + an + "(?:" + [en, tn, nn].join("|") + ")" + un + sn + ")*", pn = un + sn + dn, cn = "(?:" + [Kt, tn, nn].join("|") + ")" + pn, fn = "(?:" + [en + Ht + "?", Ht, tn, nn, Gt].join("|") + ")", yn = RegExp(Ht, "g"), mn = RegExp(Yt + "(?=" + Yt + ")|" + fn + pn, "g"), gn = RegExp("[" + an + Rt + Ft + $t + qt + "]"), hn = /[a-zA-Z0-9]+/g, vn = RegExp([rn + "?" + Qt + "+(?=" + [Wt, rn, "$"].join("|") + ")", ln + "+(?=" + [Wt, rn + on, "$"].join("|") + ")", rn + "?" + on + "+", rn + "+", zt, cn].join("|"), "g"), bn = /[a-z][A-Z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Cn = ["Array", "Buffer", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Reflect", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], En = -1, Sn = {};
            Sn[ze] = Sn[Ke] = Sn[Qe] = Sn[Ze] = Sn[Ye] = Sn[Xe] = Sn[et] = Sn[tt] = Sn[nt] = !0, Sn[Oe] = Sn[Ae] = Sn[He] = Sn[Re] = Sn[Fe] = Sn[$e] = Sn[Pe] = Sn[Me] = Sn[Be] = Sn[Ue] = Sn[Ve] = Sn[je] = Sn[qe] = Sn[Ge] = !1;
            var In = {};
            In[Oe] = In[Ae] = In[He] = In[Re] = In[Fe] = In[ze] = In[Ke] = In[Qe] = In[Ze] = In[Ye] = In[Me] = In[Be] = In[Ue] = In[Ve] = In[je] = In[qe] = In[Je] = In[Xe] = In[et] = In[tt] = In[nt] = !0, In[$e] = In[Pe] = In[Ge] = !1;
            var wn = {
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Ä": "A",
                "Å": "A",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "ä": "a",
                "å": "a",
                "Ç": "C",
                "ç": "c",
                "Ð": "D",
                "ð": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "Ñ": "N",
                "ñ": "n",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Õ": "O",
                "Ö": "O",
                "Ø": "O",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "õ": "o",
                "ö": "o",
                "ø": "o",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ü": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ü": "u",
                "Ý": "Y",
                "ý": "y",
                "ÿ": "y",
                "Æ": "Ae",
                "æ": "ae",
                "Þ": "Th",
                "þ": "th",
                "ß": "ss"
            }, Tn = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "`": "&#96;"
            }, xn = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'",
                "&#96;": "`"
            }, _n = {"function": !0, object: !0}, Dn = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, kn = parseFloat, Ln = parseInt, On = _n[typeof t] && t && !t.nodeType ? t : X, An = _n[typeof e] && e && !e.nodeType ? e : X, Rn = An && An.exports === On ? On : X, Fn = $(On && An && "object" == typeof i && i), $n = $(_n[typeof self] && self), Pn = $(_n[typeof window] && window), Nn = $(_n[typeof this] && this), Mn = Fn || Pn !== (Nn && Nn.window) && Pn || $n || Nn || Function("return this")(), Bn = Y();
            (Pn || $n || {})._ = Bn, r = function () {
                return Bn
            }.call(t, n, t, e), !(r !== X && (e.exports = r))
        }).call(this)
    }).call(t, n(30)(e), function () {
        return this
    }(), n(29))
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {
        }, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
}, function (e, t, n) {
    var r = n(32), i = {};
    r.Events.includeIn(i), e.exports = i
}, function (e, t, n) {
    var r;
    r = $.extend({}, n(33), {
        Events: n(36),
        createBitMap: n(37),
        addSymbol: n(38),
        scriptLoader: n(40),
        getExternalJS: n(41)
    }), e.exports = r
}, function (e, t, n) {
    (function (t) {
        function r() {
            for (var e = Array.prototype.slice.call(arguments), t = e.shift(), n = 0; n < e.length; n++) {
                if (!t.hasOwnProperty(e[n]))return !1;
                t = t[e[n]]
            }
            return !0
        }

        function i(e) {
            var t = "function" == typeof e, n = t && (e.name && ["", e.name] || e.toString().match(/function ([^\(]+)/));
            return !t && "not a function" || n && n[1] || "anonymous"
        }

        function a(e, t) {
            return t = "object" == typeof t ? t : Array.prototype.slice.call(arguments, 1), e.replace(/\{\{|\}\}|\{(\w+)\}/g, function (e, n) {
                return "{{" === e ? "{" : "}}" === e ? "}" : t[n]
            })
        }

        function o(e, t, n) {
            var r;
            if (t)for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0, e = e.toLowerCase(); r > n; n++)if (n in t && t[n].toLowerCase() === e)return n;
            return -1
        }

        function l(e) {
            return e.indexOf("function processData( response )") > -1 ? void 0 : ("string" != typeof e && (e = JSON.stringify(e, void 0, 2)), e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), e.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (e) {
                var t = "number";
                return /^"/.test(e) ? t = /:$/.test(e) ? "key" : "string" : /true|false/.test(e) ? t = "boolean" : /null/.test(e) && (t = "null"), '<span class="' + t + '">' + e + "</span>"
            }))
        }

        function s(e) {
            var t = e;
            if ("string" == typeof e) {
                if (!d(e))return e;
                t = JSON.parse(e)
            }
            return t = JSON.stringify(t, null, 2), e = l(t), e = kendo.format("<pre>{0}</pre>", e)
        }

        function u(e) {
            return e && e.d && !t.isArray(e.d) && (e = {
                d: t.map(e.d, function (e, t) {
                    return {name: t, value: e}
                })
            }), e
        }

        function d(e) {
            try {
                JSON.parse(e)
            } catch (t) {
                return !1
            }
            return !0
        }

        function p(e, t) {
            var n = e;
            return n.indexOf("/_api/") > -1 && (n = n.split("/_api/")[0]), n.endsWith("/") && (n = n.slice(0, -1)), t.indexOf("_api/") > -1 && (t = t.split("_api/")[0]), a("{0}/_api/{1}", n, t)
        }

        function c(e, t) {
            return -1 !== e.indexOf(t, e.length - t.length)
        }

        function f(e) {
            var t = {}, n = "kendo", r = "getKendo", i = "";
            for (var a in $.fn)$.fn.hasOwnProperty("prop") && 0 === a.indexOf(n) && (i = a.substr(n.length), t[i.toLowerCase()] = e ? r + i : i);
            return t
        }

        function y(e, n, r, i) {
            i = i || {}, r = r || "select";
            var a = [], o = {expand: ["/Id"], select: ["/Id", "/Title"]};
            return o = $.extend(!0, {}, o, i), t.each(e, function (e) {
                function i(e) {
                    t.each(o[r], function (t) {
                        a.push(e + t)
                    })
                }

                var l;
                n.hasOwnProperty(e) && (l = t.indexOf(g.expandFieldTypeKindIds, n[e].FieldTypeKind) > -1, "select" === r && (l ? i(e) : a.push(e)), "expand" === r && l && i(e))
            }), "select" === r && a.push("Id"), a.join(",")
        }

        function m(e, n) {
            e = ko.unwrap(e), n = ko.unwrap(n);
            var i;
            return e.toLowerCase() === h.DefaultConnectionId.toLowerCase() ? !0 : (i = t.find(n, {Id: e}), i && r(i, "ConnectorId") && i.ConnectorId === h.CrossAppConnectorId ? !0 : (i = t.find(n, {id: e}), !(!i || !r(i, "connection", "ConnectorId") || i.connection.ConnectorId !== h.CrossAppConnectorId)))
        }

        var g = n(34), h = n(35);
        e.exports = {
            checkNested: r,
            createCtxUri: p,
            endsWith: c,
            format: a,
            getFnName: i,
            getKendoNameByRole: f,
            getFieldExpression: y,
            strInArray: o,
            syntaxHighlight: l,
            prettifyJSON: s,
            parseResult2NameValueArray: u,
            isJsonString: d,
            isInternalConnection: m
        }
    }).call(t, n(29))
}, function (e, t) {
    var n = [7, 20], r = {
        0: "string",
        1: "number",
        2: "string",
        3: "string",
        4: "date",
        5: "number",
        6: "string",
        7: "number",
        8: "boolean",
        9: "number",
        10: "string",
        11: "string",
        12: "string",
        13: "string",
        14: "string",
        15: "string",
        16: "string",
        17: "string",
        18: "string",
        19: "string",
        20: "number",
        21: "string",
        22: "string",
        23: "string",
        24: "string",
        25: "string",
        26: "string",
        27: "string",
        28: "string",
        29: "string",
        30: "string",
        31: "string"
    };
    e.exports = {expandFieldTypeKindIds: n, fieldTypeKindMap: r}
}, function (e, t) {
    var n = {
        AppStateFormat: 7,
        DefaultConnectionId: "E3CC8646-243C-4D95-BD84-67224112411D",
        CrossAppConnectorId: "CrossApp",
        groupPrefixReplace: {regexp: /^_groupExprFor/, replace: ""}
    };
    e.exports = n
}, function (e, t, n) {
    var r;
    r = function (e) {
        "use strict";
        var t = Object.keys, n = /\s+/, r = function () {
        }, i = function (e, t) {
            this.owner = e, this.events = t
        };
        return i.prototype.then = function (e, t) {
            return this.callback = e || this.callback, this.context = t || this.context, this.callback ? (this.owner.on(this.events, this.callback, this.context), this) : this
        }, i.prototype.on = i.prototype.then, i.prototype.off = function () {
            return this.owner.off(this.events, this.callback, this.context), this
        }, r.prototype.on = function (e, t, r) {
            var a, o, l;
            if (t) {
                for (a = this.callbacks || (this.callbacks = {}), e = e.split(n); o = e.shift();)l = a[o] || (a[o] = []), l.push(t, r);
                return this
            }
            return new i(this, e)
        }, r.prototype.off = function (e, r, i) {
            var a, o, l, s;
            if (!(o = this.callbacks))return this;
            if (!(e || r || i))return delete this.callbacks, this;
            for (e = e ? e.split(n) : t(o); a = e.shift();)if ((l = o[a]) && (r || i))for (s = l.length - 2; s >= 0; s -= 2)r && l[s] !== r || i && l[s + 1] !== i || l.splice(s, 2); else delete o[a];
            return this
        }, r.prototype.trigger = function (e) {
            var t, r, i, a, o, l, s, u;
            if (!(r = this.callbacks))return this;
            for (u = [], e = e.split(n), a = 1, o = arguments.length; o > a; a++)u[a - 1] = arguments[a];
            for (; t = e.shift();) {
                if ((s = r.all) && (s = s.slice()), (i = r[t]) && (i = i.slice()), i)for (a = 0, o = i.length; o > a; a += 2)i[a].apply(i[a + 1] || this, u);
                if (s)for (l = [t].concat(u), a = 0, o = s.length; o > a; a += 2)s[a].apply(s[a + 1] || this, l)
            }
            return this
        }, r.prototype.proxy = function (e) {
            var t = this;
            return function (n) {
                t.trigger(e, n)
            }
        }, r.includeIn = function (e) {
            e.on = r.prototype.on, e.off = r.prototype.off, e.unbind = r.prototype.off, e.trigger = r.prototype.trigger, e.proxy = r.prototype.proxy
        }, r
    }.call(t, n, t, e), !(void 0 !== r && (e.exports = r))
}, function (e, t, n) {
    (function (t) {
        function n(e) {
            var t = o(!0, {}, l, e);
            this.isSet = function (e) {
                if (t.map.indexOf(e) < 0)return a.call(this, "isSet: " + e + " not found in map"), this;
                var n = i(t.map.indexOf(e));
                return (n & t.bits) > 0
            }, this.getBooleans = function () {
                for (var e, n = [], r = 0; r < t.map.length; r++)e = i(r) & t.bits ? 1 : 0, n.push(e);
                return n
            }, this.toJSON = function () {
                for (var e, n = [], r = 0; r < t.map.length; r++)e = i(r) & t.bits ? 1 : 0, n.push({
                    text: t.map[r],
                    id: !!(i(r) & t.bits)
                });
                return n
            }, this.toEnumValuePairs = function () {
                for (var e = {}, n = 0; n < t.map.length; n++)e[t.map[n]] = n;
                return e
            }, this.toText2IdMap = function (e) {
                for (var n = {}, r = 0; r < t.map.length; r++)e ? this.isSet(t.map[r]) && (n[t.map[r]] = i(r)) : n[t.map[r]] = i(r);
                return n
            }, this.toId2TextMap = function (e) {
                for (var n = {}, r = 0; r < t.map.length; r++)e ? this.isSet(t.map[r]) && (n[i(r)] = t.map[r]) : n[i(r)] = t.map[r];
                return n
            }, this.toOptions = function (e) {
                for (var n = [], r = 0; r < t.map.length; r++)e ? this.isSet(t.map[r]) && n.push({
                    text: t.map[r],
                    id: i(r)
                }) : n.push({text: t.map[r], id: i(r)});
                return n
            }, this.getBits = function () {
                return a.call(this, "bits: " + t.bits), t.bits
            }, this.setBits = function (e) {
                "number" == typeof e && (t.bits = parseInt(e, 10))
            }, this.setBit = function (e) {
                if (t.map.indexOf(e) < 0)return a.call(this, "setBit: " + e + " not found in map"), this;
                var n = i(t.map.indexOf(e));
                return (n & t.bits) > 0 ? (a.call(this, "setBit: " + e + " bit exists already in map. " + t.bits), this) : (t.bits += n, a.call(this, "setBit: " + n + " set"), t.bits)
            }, this.clearBit = this.removeBit = function (e) {
                if (t.map.indexOf(e) < 0)return a.call(this, "clearBit: " + e + " not found in map"), this;
                var n = i(t.map.indexOf(e));
                return n & t.bits ? (t.bits -= n, a.call(this, "clearBit: " + n + " removed"), t.bits) : (a.call(this, "clearBit: " + e + " bit doesn't exist in map. " + t.bits), this)
            }, this.clear = function () {
                return t.bits = 0, t.bits
            }
        }

        function r(e) {
            return new n(e)
        }

        function i(e) {
            return Math.pow(2, e)
        }

        function a() {
            this.debug && window.console && window.console.log && console.log("[Autobits] ", arguments)
        }

        var o = (t.map, $.extend), l = (t.indexOf, {bits: 0, map: [], debug: !1});
        e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    function r(e) {
        var t;
        if (!e)throw new Error("cc.fn.addSymbol: Missing parameter code");
        if (t = i[e], !t)throw new Error("cc.fn.addSymbol: Unsupported parameter code ", e);
        kendo.cultures[e] || (kendo.cultures[e] = a(!0, {}, kendo.cultures.current, {
            name: e,
            numberFormat: {currency: {symbol: t}}
        }))
    }

    var i = n(39), a = $.extend;
    e.exports = r
}, function (e, t) {
    e.exports = {
        ALL: "Lek",
        AFN: "؋",
        ARS: "$",
        AWG: "ƒ",
        AUD: "$",
        AZN: "ман",
        BSD: "$",
        BBD: "$",
        BYR: "p.",
        BZD: "BZ$",
        BMD: "$",
        BOB: "$b",
        BAM: "KM",
        BWP: "P",
        BGN: "лв",
        BRL: "R$",
        BND: "$",
        KHR: "៛",
        CAD: "$",
        KYD: "$",
        CLP: "$",
        CNY: "¥",
        COP: "$",
        CRC: "₡",
        HRK: "kn",
        CUP: "₱",
        CZK: "Kč",
        DKK: "kr",
        DOP: "RD$",
        XCD: "$",
        EGP: "£",
        EEK: "kr",
        EUR: "€",
        FKP: "£",
        FJD: "$",
        GHC: "¢",
        GIP: "£",
        GTQ: "Q",
        GYD: "$",
        HNL: "L",
        HKD: "$",
        HUF: "Ft",
        ISK: "kr",
        INR: "₹",
        IDR: "Rp",
        IRR: "﷼",
        ILS: "₪",
        JMD: "J$",
        JPY: "¥",
        KZT: "лв",
        KPW: "₩",
        KGS: "лв",
        LAK: "₭",
        LVL: "Ls",
        LBP: "£",
        LRD: "$",
        LTL: "Lt",
        MKD: "ден",
        MYR: "RM",
        MUR: "₨",
        MXN: "$",
        MNT: "$",
        MZN: "MT",
        NAD: "$",
        NPR: "₨",
        ANG: "ƒ",
        NZD: "$",
        NIO: "C$",
        NGN: "₦",
        NOK: "kr",
        OMR: "﷼",
        PKR: "₨",
        PAB: "B/.",
        PYG: "Gs",
        PEN: "S/.",
        PHP: "₱",
        PLN: "zł",
        QAR: "﷼",
        RON: "lei",
        RUB: "руб",
        SHP: "£",
        SAR: "﷼",
        RSD: "Дин.",
        SCR: "₨",
        SGD: "$",
        SBD: "$",
        SOS: "S",
        ZAR: "R",
        LKR: "₨",
        SEK: "kr",
        CHF: "CHF",
        SRD: "$",
        SYP: "£",
        TWD: "NT$",
        THB: "฿",
        TTD: "TT$",
        TRL: "₤",
        UAH: "₴",
        GBP: "£",
        USD: "$",
        UYU: "$U",
        UZS: "лв",
        VEF: "Bs",
        VND: "₫",
        YER: "﷼",
        ZWD: "Z$"
    }
}, function (e, t, n) {
    (function (t) {
        function n(e) {
            if (!e)throw new Error("cc.scriptLoader. Missing mandatory argument 'scripts[]'");
            if (!t.isArray(e))throw new Error("cc.scriptLoader.  'scripts[]' must be an array of objects");
            return t.each(e, function (e) {
                e.wait ? $LAB.queueScript(e.url).queueWait() : $LAB.queueScript(e.url)
            }), $LAB.runQueue()
        }

        $LAB.setGlobalDefaults({Debug: !0}), e.exports = n
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function n() {
            var e = cc.api.getViewConfigsDS();
            return e.read({$expand: "Tabs($expand=Views)"}).then(function () {
                var n = e.at(0).toJSON(), r = n.hasOwnProperty("ConfigJSON") && null !== n.ConfigJSON ? JSON.parse(n.ConfigJSON) : {}, i = r.hasOwnProperty("ExternalJS") && t.isArray(r.ExternalJS) ? r.ExternalJS : [];
                return t.map(i, function (e) {
                    return e.hasOwnProperty("wait") || (e.wait = !0), e
                })
            })
        }

        e.exports = n
    }).call(t, n(29))
}, function (e, t, n) {
    function r() {
        s.on("sync:error", function (e, t, n) {
            var r = {title: l.format("{0}: {1}", e.status, e.statusText), message: l.prettifyJSON(e.responseText)};
            u.trigger("error", r)
        }), s.on("proxy:error", function (e, t, n) {
            var r = {title: l.format("{0}: {1}", e.status, e.statusText), message: l.prettifyJSON(e.responseText)};
            u.trigger("error", r)
        }), s.on("api:error", function (e, t, n, r) {
            var i = {title: l.format("{0}: {1}", e.status, e.statusText), message: l.prettifyJSON(e.responseText)};
            u.trigger("error", i)
        })
    }

    var i, a, o, l = n(32), s = n(31), u = {};
    r(), o = {
        kendo: function () {
            var e = {
                allowHideAfter: 1e3,
                appendTo: null,
                autoHideAfter: 1e4,
                button: !0,
                hideOnClick: !0,
                position: {pinned: !0, top: 50, left: null, bottom: null, right: 20},
                stacking: "default",
                templates: [{
                    type: "error",
                    template: "<div class='vaNofification'><h3>#= title #</h3><p>#= message #</p></div>"
                }]
            };
            a = $('<div id="notification"></div>').appendTo("body").kendoNotification(e).data("kendoNotification"), i = ["warning", "info", "success", "error"], $.each(i, function (e, t) {
                u.on(t, function (e) {
                    a.show(e, t)
                })
            }), u.on("removeAll", function () {
                a.hide()
            })
        }, pnotify: function () {
            var e = ["warning", "info", "success", "error"], t = {
                warning: "regular",
                info: "info",
                success: "success",
                error: "error"
            };
            $.each(e, function (e, n) {
                var r = {};
                u.on(n, function (e) {
                    var i = $.extend({}, r, {title: e.title, text: e.message, type: t[n], styling: "fontawesome"});
                    new PNotify(i)
                })
            }), u.on("removeAll", function () {
                PNotify.removeAll()
            })
        }, toastr: function () {
            i = ["warning", "info", "success", "error"], $.each(i, function (e, t) {
                u.on(t, function (e) {
                    var n = e.title, r = e.message;
                    toastr[t](r, n)
                })
            }), u.on("removeAll", function () {
                toastr.clear()
            })
        }
    }, l.Events.includeIn(u), "undefined" != typeof toastr ? o.toastr() : window.PNotify ? o.pnotify() : o.kendo(), e.exports = u
}, function (e, t, n) {
    (function (t) {
        function r(e, n) {
            var r = ("undefined" != typeof n[e.StaticName], 15 === e.FieldTypeKind), i = e.AllowMultipleValues || r, a = n[e.StaticName], o = [], l = "";
            return i ? (a && a.results && t.each(a.results, function (e, t) {
                o.push(e.Title || e)
            }), o.join(", ")) : ("string" != typeof a && "number" != typeof a || (l = a), a && a.Title && (l = a.Title), l)
        }

        function i(e, t, n) {
            var r = ("undefined" != typeof n[t.StaticName], '<a class="ms-listlink" href="#/library/{0}/folder/{1}">{2}</a>'), i = '<b style="color: red">{0}</b>', o = n[t.StaticName], l = 1 === n.FileSystemObjectType;
            return l ? a.format(r, encodeURIComponent(e), encodeURIComponent(n.Folder.ServerRelativeUrl), o) : a.format(i, o)
        }

        var a = n(33);
        e.exports = {getExpandedFieldValue: r, getDocumentOrFolderLink: i}
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e, t, n, r) {
            var i, a = r.fieldMap[n.field];
            return i = {dataSource: a.Choices.results}, 15 === a.FieldTypeKind ? s(e, t, i, a) : u(e, t, i, a)
        }

        function i(e, t, n, r) {
            var i = r.fieldMap[n.field], a = t.model.fields[t.field], o = {editorMode: a.disableRTF ? "basic" : "full"}, l = i.hasOwnProperty("RichText") ? i.RichText : !1, s = i.hasOwnProperty("NumberOfLines") ? i.NumberOfLines : 6, u = '<textarea name="{0}"  class="k-input k-textbox" data-bind="value: {1}" rows="{2}" style="width: 100%"></textarea>';
            return l ? d(e, t, o, i) : $(y(u, i.StaticName, t.field, s)).appendTo(e)
        }

        function a(e, t, n, r) {
            var i, a, o = n._lookup.list.match(/{(.*?)}/)[1], d = c.createCtxUri(r.siteCtxUrl, c.format("web/lists(guid'{0}')/items", o)), p = r.fieldMap[n.field];
            return i = l(o, d, {
                select: "Title, Id",
                pageSize: 5e3
            }), a = $.extend(!0, {}, m, {dataSource: i.dataSource}), p.AllowMultipleValues ? s(e, t, a, p) : u(e, t, a, p)
        }

        function o(e, t, n, r) {
            var i, a, o = c.createCtxUri(r.siteCtxUrl, "web/SiteUserInfoList/items"), d = r.fieldMap[n.field];
            return i = l("SiteUserInfoList", o, {
                select: "Title,Id,ContentType/Name",
                expand: "ContentType",
                pageSize: 5e3
            }), a = $.extend(!0, {}, m, {dataSource: i.dataSource}), d.AllowMultipleValues ? s(e, t, a, d) : u(e, t, a, d)
        }

        function l(e, t, n) {
            return f(t, n)
        }

        function s(e, n, r, i) {
            var a = p(n), o = [];
            return n.model[n.field] && n.model[n.field].results && (o = t.map(n.model[n.field].results, function (e, t) {
                return {Id: e.Id, Title: e.Title}
            })), $(y('<select multiple="multiple" data-kendo-bind="value:{0}"/>', n.field + ".results")).attr(a).appendTo(e).kendoMultiSelect($.extend(!0, {}, r, {value: o}))
        }

        function u(e, t, n, r) {
            var i, a, o = p(t), l = r.FillInChoice ? "kendoComboBox" : "kendoDropDownList";
            return t.model[t.field] && t.model[t.field].Title && (i = t.model[t.field].Title || "", a = t.model[t.field].Title || ""), "kendoDropDownList" === l && (delete n.placeholder, n.optionLabel = "Select..."), "kendoComboBox" === l && null === r.DefaultValue && (n.placeholder = "Select..."), $(y('<input data-kendo-bind="value:{0}"/>', t.field)).attr(o).appendTo(e)[l]($.extend(!0, {}, n, {
                value: i,
                text: a
            }))
        }

        function d(e, t, n, r) {
            n = n || {};
            var i, a, o = p(t), l = "kendoEditor", s = n.editorMode || "full";
            return t.model[t.field] && t.model[t.field].Title && (i = t.model[t.field].Title || "", a = t.model[t.field].Title || ""), $(y('<textarea  data-kendo-bind="value:{0}"></textarea>', t.field)).attr(o).appendTo(e)[l]($.extend(!0, {tools: g[s]}, n, {
                value: i,
                text: a
            }))
        }

        function p(e) {
            function t(e) {
                return e = null !== e ? e : "", e.type || $.type(e) || "string"
            }

            var n, r, i = ["url", "email", "number", "date", "boolean"], a = (e.model.fields || e.model)[e.field], o = t(a), l = a ? a.validation : {}, s = kendo.attr("type"), u = kendo.attr("bind"), d = {name: e.field};
            for (n in l)r = l[n], $.inArray(n, i) >= 0 ? d[s] = n : $.isFunction(r) || (d[n] = $.isPlainObject(r) ? r.value || n : r), d[kendo.attr(n + "-msg")] = r.message;
            return $.inArray(o, i) >= 0 && (d[s] = o), d[u] = ("boolean" === o ? "checked:" : "value:") + e.field, d
        }

        var c = n(32), f = n(45).getContext, y = c.format, m = {
            autoBind: !1,
            dataTextField: "Title",
            dataValueField: "Id",
            ignoreCase: !1,
            placeholder: "Select..."
        }, g = {
            basic: ["bold", "italic", "underline"],
            full: ["formatting", "cleanFormatting", "bold", "italic", "underline", "strikethrough", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "insertUnorderedList", "insertOrderedList", "indent", "outdent", "createLink", "unlink", "fontName", "fontSize", "foreColor", "backColor"]
        };
        e.exports = {lookup: a, user: o, choice: r, rtfEditor: i}
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e, t) {
            t = t || {};
            var n, r, i, a = "getContext(target)", l = "{0}: Missing or wrong '{1}' ({2}) parameter.";
            if (!e || "string" != typeof e)throw new Error(kendo.format(l, a, "target", "string"));
            if (n = !0, r = e.match(/\/_api\//g), !n)throw l = "{0}: target protocol must be https", new Error(kendo.format(l, a));
            if (!r)throw l = "{0}: target is not a valid REST endpoint e.g. 'site/_api/web'.", new Error(kendo.format(l, a, "target"));
            return i = o(e), u[i] ? new u[i](e, i, t) : new u.generic(e, i, t)
        }

        function i(e) {
            var n = s, r = {};
            if (e) {
                if (!n[e])throw new Error(kendo.format("Missing or wrong type: {0}", e));
                return n[e].modelDefinition || {}
            }
            return t.forEach(n, function (e, t) {
                e.isEntity && e.hasOwnProperty("modelDefinition") && (r[t] = e.modelDefinition)
            }), r
        }

        function a(e) {
            var n = s, r = {};
            if (e) {
                if (!n[e])throw new Error(kendo.format("Missing or wrong type: {0}", e));
                return kendo.data.Model.define(n[e].modelDefinition || {})
            }
            return t.forEach(n, function (e, t) {
                e.isEntity && e.hasOwnProperty("modelDefinition") && (r[t] = kendo.data.Model.define(e.modelDefinition))
            }), r
        }

        function o(e) {
            var n = "generic", r = e.toLowerCase().split("/_api"), i = r[1];
            return t.each(s, function (e, t) {
                var r = null;
                e.regExp && (r = i.match(e.regExp), n = r ? t : n)
            }), n
        }

        var l = n(46), s = l.allDefinition, u = (n(33), l.ctorTypeMap);
        e.exports = {getModel: a, getModelDefinition: i, getContext: r}
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        var r, i, a, o = "/api/sharepoint?svc=", l = n(47);
        r = {generic: n(48)}, i = {
            "SP.Field": $.extend(!0, {}, l, {
                regExp: /\/fields\(.+?\)$/gi,
                ctor: n(49),
                modelDefinition: {
                    id: "Id",
                    fields: {
                        Id: {type: "string", editable: !1},
                        Title: {type: "string", validation: {required: !0}},
                        FieldTypeKind: {type: "number", defaultValue: 2}
                    }
                },
                type: "SP.Field",
                crud: {read: {tmplUrl: "{target}{params}", placeHolder: ["target", "params"]}}
            }),
            "SP.List": $.extend(!0, {}, l, {
                regExp: /\/lists\(.+?\)$/gi,
                ctor: n(57),
                modelDefinition: {
                    id: "Id",
                    fields: {
                        Id: {type: "string", editable: !1},
                        Title: {type: "string", validation: {required: !0}},
                        AllowContentTypes: {type: "boolean"},
                        BaseTemplate: {type: "number", defaultValue: 100},
                        ContentTypesEnabled: {type: "boolean"},
                        Description: {type: "string"}
                    }
                },
                type: "SP.List",
                crud: {read: {tmplUrl: "{target}{params}", placeHolder: ["target", "params"]}}
            }),
            "SP.ListItem": $.extend(!0, {}, l, {
                regExp: /\/items\(.+?\)$/gi,
                ctor: n(60),
                modelDefinition: {id: "ID", fields: {ID: {type: "number", editable: !1, nullable: !1}}},
                type: "",
                crud: {read: {tmplUrl: "{target}{params}", placeHolder: ["target", "params"]}}
            }),
            "SP.View": $.extend(!0, {}, l, {
                regExp: /\/views\(.+?\)$/gi,
                ctor: n(61),
                modelDefinition: {
                    id: "Id",
                    fields: {
                        Id: {type: "string", editable: !1},
                        Title: {type: "string", validation: {required: !0}},
                        Paged: {type: "boolean", defaultValue: !0},
                        PersonalView: {type: "boolean", defaultValue: !1},
                        Query: {type: "string"},
                        RowLimit: {type: "number", defaultValue: 100},
                        SetAsDefaultView: {type: "boolean", defaultValue: !1},
                        ViewFields: {
                            defaultValue: {
                                __metadata: {type: "SP.ViewFieldCollection"},
                                Items: {
                                    __metadata: {type: "Collection(Edm.String)"},
                                    results: ["Checkmark", "LinkTitle", "DueDate", "AssignedTo"]
                                }
                            }
                        },
                        ViewTypeKind: {type: "string", defaultValue: "HTML"}
                    }
                },
                type: "SP.View",
                crud: {read: {tmplUrl: "{target}{params}", placeHolder: ["target", "params"]}}
            }),
            "SP.Web": $.extend(!0, {}, l, {
                regExp: /\/web$/gi,
                ctor: n(62),
                modelDefinition: {
                    id: "Id",
                    fields: {
                        Id: {type: "string", editable: !1},
                        Url: {type: "string", validation: {required: !0}},
                        Title: {type: "string", validation: {required: !0}},
                        Description: {type: "string"},
                        Language: {type: "number", defaultValue: 1033},
                        WebTemplate: {type: "string", defaultValue: "STS"},
                        UseSamePermissionsAsParentSite: {type: "boolean", defaultValue: !0}
                    }
                },
                type: "SP.WebCreationInformation",
                crud: {read: {tmplUrl: "{target}{params}", placeHolder: ["target", "params"]}}
            }),
            "SP.Site": $.extend(!0, {}, l, {
                regExp: /\/site$/gi,
                ctor: n(63),
                modelDefinition: {
                    id: "Id",
                    fields: {
                        Id: {type: "string", editable: !1},
                        Url: {type: "string", validation: {required: !0}},
                        Title: {type: "string", validation: {required: !0}},
                        Description: {type: "string"},
                        Language: {type: "number", defaultValue: 1033},
                        WebTemplate: {type: "string", defaultValue: "STS"},
                        UseSamePermissionsAsParentSite: {type: "boolean", defaultValue: !0}
                    }
                },
                type: "SP.WebCreationInformation",
                crud: {read: {tmplUrl: "{target}{params}", placeHolder: ["target", "params"]}}
            })
        }, t.each(i, function (e, t) {
            e.isEntity = !0
        }), a = {
            "SP.FieldCollection": $.extend(!0, {}, l, {
                regExp: /\/fields$/gi,
                ctor: n(64),
                modelDefinition: i["SP.Field"].modelDefinition,
                type: "SP.Field",
                crud: {read: {tmplUrl: "{target}{params}", placeHolder: ["target", "params"]}}
            }),
            "SP.ListCollection": $.extend(!0, {}, l, {
                regExp: /\/lists$/gi,
                ctor: n(65),
                modelDefinition: i["SP.List"].modelDefinition,
                type: i["SP.List"].type
            }),
            "SP.ListItemCollection": $.extend(!0, {}, l, {
                regExp: /\/items$/gi,
                ctor: n(66),
                pagingType: "skipToken",
                type: i["SP.ListItem"].type,
                modelDefinition: i["SP.ListItem"].modelDefinition,
                crud: {
                    update: {tmplUrl: "{target}({ID})", placeHolder: ["target", null]},
                    destroy: {tmplUrl: "{target}({ID})", placeHolder: ["target", null]}
                }
            }),
            "SP.ViewCollection": $.extend(!0, {}, l, {
                regExp: /\/views$/gi,
                ctor: n(67),
                modelDefinition: i["SP.View"].modelDefinition,
                type: i["SP.View"].type,
                crud: {create: {tmplUrl: "{target}", placeHolder: ["target"], dataWrapper: "parameters"}}
            }),
            "SP.WebCollection": $.extend(!0, {}, l, {
                regExp: /web\/webs$/gi,
                ctor: n(68),
                modelDefinition: i["SP.Web"].modelDefinition,
                type: i["SP.Web"].type,
                crud: {create: {tmplUrl: "{target}/add", placeHolder: ["target"], dataWrapper: "parameters"}}
            })
        }, t.each(a, function (e, t) {
            e.isCollection = !0
        }), t.each($.extend(!0, {}, i, a), function (e, t) {
            e.ctor && e.regExp && (r[t] = e.ctor)
        }), e.exports = {
            allDefinition: $.extend(!0, i, a),
            resourceDefinition: i,
            collectionDefinition: a,
            proxyEndpoint: o,
            ctorTypeMap: r
        }
    }).call(t, n(29))
}, function (e, t) {
    var n;
    n = {
        pagingType: "count",
        crud: {
            read: {tmplUrl: "{target}{params}", placeHolder: ["target", "params"]},
            create: {tmplUrl: "{target}", placeHolder: ["target"]},
            update: {tmplUrl: "{target}", placeHolder: ["target", null]},
            destroy: {tmplUrl: "{target}", placeHolder: ["target", null]}
        }
    }, e.exports = n
}, function (e, t, n) {
    function r(e, t, n) {
        this._options = n, this.target = e, this.type = t
    }

    n(33);
    $.extend(r.prototype, {}), e.exports = r
}, function (e, t, n) {
    function r(e, t, n) {
        this.init(e, t, n)
    }

    var i = (n(33), n(50));
    $.extend(r.prototype, i, {}), e.exports = r
}, function (e, t, n) {
    (function (t) {
        function r(e, r, a) {
            a = a || {};
            var o, l = this, s = n(51), u = n(45);
            if (this._options = a, this.target = e, this.type = r, t.each(i, function (e, t) {
                    a[e] && (l[e] = a[e])
                }), u.getModel(this.type)) {
                var d = u.getModel(this.type), p = a.schema && a.schema.model;
                this.model = p ? a.schema.model : d
            }
            o = $.extend(!0, {}, s(this), a || {}), this.dataSource = new kendo.data.DataSource(o)
        }

        var i = ["select", "expand", "parse", "useTransport", "listModel", "listItemEntityTypeFullName"];
        e.exports = {init: r}
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e, t, n) {
            n = n || {};
            var r = {};
            return $.each(e.placeHolder, function (e, n) {
                r[n] = "undefined" != typeof t[n] ? t[n] : ""
            }), $.extend(r, n), r
        }

        var i = n(46), a = [7, 20], o = i.allDefinition, l = (n(31), n(52)), s = n(33), u = n(56), d = s.format, p = {
            pageSize: t.noop,
            page: t.noop,
            skip: $.noop,
            filter: function (e, t, n) {
                t && e.push(d("$filter={0}", u(t, n)))
            },
            sort: function (e, n) {
                var r = t.map(n, function (e) {
                    var t = e.field.replace(/\./g, "/");
                    return "desc" === e.dir && (t += " desc"), t
                }).join(",");
                r && e.push(d("$orderby={0}", r))
            },
            take: function (e, t) {
                t && e.push(d("$top={0}", t))
            },
            select: function (e, t) {
                t && e.push(d("$select={0}", t))
            },
            expand: function (e, t) {
                t && e.push(d("$expand={0}", t))
            }
        }, c = {
            skipToken: {
                defaults: {pageSize: 30},
                mandatory: {serverPaging: !0, serverSorting: !0, serverFiltering: !0}
            }, count: {defaults: {}, mandatory: {serverPaging: !1, serverSorting: !0, serverFiltering: !0}}
        }, f = n(55).getAppId(), y = {
            dataType: "json",
            headers: {
                "Content-Type": "application/json;odata=verbose",
                accept: "application/json;odata=verbose",
                AppId: f
            }
        };
        e.exports = function (e) {
            function n(n) {
                function o(e, n) {
                    var r, i, o = "SP.ListItemCollection" === n.type, l = s.checkNested(n, "listModel", "fieldMap"), u = {};
                    return o && l ? (r = n.listModel.fieldMap, i = e.Id ? t.find(n.dataSource._pristineData, {Id: e.Id}) : {}, t.each(e, function (e, n) {
                        var o = "undefined" != typeof r[n], l = o ? t.indexOf(a, r[n].FieldTypeKind) > -1 : !1;
                        t.isEqual(e, i[n]) || (l && (n += "Id", e = e.results ? {results: t(e.results).map("Id").flatten().value()} : e.Id), u[n] = e)
                    }), u.__metadata = e.__metadata, kendo.stringify(u)) : kendo.stringify(e)
                }

                var u, c = {
                    create: function (n) {
                        var a, u, p, c = i.crud.create, f = c.tmplUrl, m = e.listItemEntityTypeFullName, g = n.data, h = c.dataWrapper, v = r(c, e), b = i.modelDefinition.id || null;
                        m || (m = i.type), g = $.extend({}, n.data, {__metadata: {type: m}}), b && g.hasOwnProperty(b) && delete g[b], h && (a = g, g = {}, g[h] = a), "SP.ListItemCollection" === e.type && s.checkNested(e, "listModel", "expandedFieldMap") && (n.parse = function (n) {
                            var r = {}, i = e.listModel.expandedFieldMap;
                            return t.each(n.d, function (e, t) {
                                t = i[t] || t, r[t] = g[t] || t
                            }), delete n.d, n.d = r, n
                        }), u = d(f, v), p = $.extend(!0, {}, y, {
                            url: u,
                            type: "POST",
                            data: o(g, e)
                        }), l("create", p, n)
                    }, destroy: function (t) {
                        var n, a, o = i.crud.destroy, s = (o.tmplUrl, r(o, e, t.data));
                        n = s.__metadata.uri, a = $.extend(!0, {}, y, {
                            url: n,
                            method: "DELETE",
                            headers: {"If-Match": "*"}
                        }), l("destroy", a, t);
                    }, update: function (t) {
                        var n, a, s = i.crud.update, u = (s.tmplUrl, r(s, e, t.data));
                        n = u.__metadata.uri, a = $.extend(!0, {}, y, {
                            url: n,
                            type: "POST",
                            data: o(t.data, e),
                            headers: {"X-HTTP-Method": "PATCH", "If-Match": t.data.__metadata.etag}
                        }), l("update", a, t)
                    }
                };
                return u = {
                    skipToken: {
                        change: function (e) {
                            var t = -1 === this._total, n = this.reader._sp;
                            n.sort = this.sort(), n.filter = this.filter(), t ? this._total = this.pageSize() * this.page() + 1 : this._total = this.pageSize() * (this.page() - 1) + this._total
                        }, transport: {
                            read: function (n) {
                                function a(t) {
                                    v.pagingHistory = [""];
                                    var n = $.extend(t, {skip: 0, page: 1});
                                    e.dataSource.query(n)
                                }

                                var o, u, c, f = i.crud.read, m = f.tmplUrl, g = n.data, h = r(f, e, g), v = e.dataSource.reader._sp, b = [];
                                g.page > 1 && (u = v.pagingHistory[n.data.page - 1], t.isEqual(g.sort, v.sort) || a(g), t.isEqual(g.filter, v.filter) || a(g)), 1 === n.data.page && (t.each(["expand", "select"], function (t, n) {
                                    var r = e[t];
                                    r && p[t](b, e[t])
                                }), t.each(["take", "sort", "filter", "expand", "select"], function (t, r) {
                                    var i = n.data[t], a = s.checkNested(e, "listModel", "fieldMap") ? e.listModel.fieldMap : {};
                                    i && p[t](b, n.data[t], a)
                                })), b.length > 0 && (h.params = "?" + b.join("&")), o = u ? u : d(m, h), c = $.extend(!0, {}, y, {
                                    url: o,
                                    type: "GET"
                                }), (e.parse || f.parse) && (n.parse = e.parse ? e.parse : f.parse), l("read", c, n)
                            }, create: c.create, update: c.update, destroy: c.destroy
                        }, schema: {
                            _sp: {pagingHistory: [""]}, data: function (e) {
                                var t = e.d.results || e.d;
                                return t = $.isArray(t) ? t : [t]
                            }, total: function (e) {
                                var t = e.d.__next || "";
                                return "undefined" != typeof t && this._sp.pagingHistory.push(t), t ? -1 : e.d.results.length
                            }, model: e.model
                        }
                    }, count: {
                        change: function (e) {
                            var t = this.reader._sp;
                            t.sort = this.sort(), t.filter = this.filter(), this._pageSize = this._total
                        }, transport: {
                            read: function (n) {
                                var a, o, s = i.crud.read, u = s.tmplUrl, c = n.data, f = r(s, e, c), m = (e.dataSource.reader._sp, []);
                                t.each(["sort", "filter", "expand", "select"], function (t, n) {
                                    var r = e[t] || c[t];
                                    r && p[t](m, c[t] || e[t])
                                }), m.length > 0 && (f.params = "?" + m.join("&")), a = d(u, f), o = $.extend(!0, {}, y, {
                                    url: a,
                                    type: "GET"
                                }), (e.parse || s.parse) && (n.parse = e.parse ? e.parse : s.parse), l("read", o, n)
                            }, create: c.create, update: c.update, destroy: c.destroy
                        }, schema: {
                            _sp: {}, data: function (e) {
                                var t = e.d.results || e.d;
                                return t = $.isArray(t) ? t : [t]
                            }, total: function (e) {
                                var t = e.d.results ? e.d.results.length : 1;
                                return t
                            }, model: e.model
                        }
                    }
                }, u[n]
            }

            var i = (e.target, o[e.type]), u = i ? i.pagingType : "count", f = n(u), m = c[u];
            return $.extend({}, m.defaults, f, m.mandatory)
        }
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e, t, n) {
            var r, a = function (e, r, i) {
                n.error(e, r, i), l.trigger("sync:error", e, t, n)
            };
            return r = {
                create: function (e, t, r) {
                    n.parse && (e = n.parse(e)), delete n.parse, n.success(e, t, r)
                }, read: function (e, t, r) {
                    n.parse && (e = n.parse(e)), delete n.parse, n.success(e, t, r)
                }, update: function (e, t, r) {
                    r.getResponseHeader("Etag") && (n.data.__metadata.etag = r.getResponseHeader("Etag")), n.success(e, t, r)
                }, destroy: function (e, t, r) {
                    n.success(e, t, r)
                }
            }, t.error || (t.error = a), t.success || (t.success = r[e]), "read" === e && (t = i(t)), t.url = o.proxyEndpoint + encodeURIComponent(t.url) + "&Appid=" + s, $.ajax(t)
        }

        function i(e) {
            function n(e, n) {
                var i = e.split("/items")[0] + "/items", a = r.$filter.replace(/\'\[.+?\]\'/gi, n), o = [];
                return r.$filter = a, t.each(r, function (e, t) {
                    o.push(t + "=" + e)
                }), o.length && (i += "?" + o.join("&")), i
            }

            var r = kendo.parseQueryStringParams(e.url), i = r.$filter && r.$filter.match(/\[.+?\]/g) && "[me]" === r.$filter.match(/\[.+?\]/g)[0].toLowerCase();
            return i ? (e.url = n(e.url, a.Id), e) : e
        }

        var a, o = n(46), l = n(31), s = (n(33), n(53), n(55).getAppId());
        e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    function r() {
        var e, t = $.Deferred(), n = a.format("{0}/_api/web/CurrentUser", l);
        return i ? (t.resolve(i), t.promise()) : (e = {
            url: n,
            type: "GET",
            headers: {Accept: "application/json; odata=verbose", "Content-Type": "application/json; odata=verbose"}
        }, o(e).then(function (e) {
            e.d && (i = e.d), t.resolve(e.d)
        }), t.promise())
    }

    var i, a = n(33), o = n(54), l = kendo.parseQueryStringParams(location.href).SPHostUrl;
    e.exports = r
}, function (e, t, n) {
    function r(e) {
        function t(t, n, r) {
            o.trigger("proxy:error", t, n, r, e), u && u.apply(null, arguments)
        }

        function r(t, n, r) {
            o.trigger("proxy:success", t, n, r, e), d && d.apply(null, arguments)
        }

        var s = n(55).getAppId();
        e = i(!0, {}, l, e, {headers: {AppId: s}});
        var u = e.error, d = e.success;
        return e.url = a + encodeURIComponent(e.url), e.url = e.url + "&Appid=" + s, e.error = t, e.success = r, $.ajax(e)
    }

    var i = $.extend, a = "/api/sharepoint?svc=", o = n(31), l = {
        contentType: "application/json",
        type: "GET",
        headers: {Accept: "application/json;odata=verbose", "Content-Type": "application/json;odata=verbose"}
    };
    e.exports = r
}, function (e, t) {
    function n() {
        var e = location.pathname.split("/");
        return "spa" === e[e.length - 1].toLowerCase()
    }

    function r() {
        return s
    }

    function i(e) {
        s = e
    }

    function a(e) {
        u = e
    }

    function o() {
        return u
    }

    var l = kendo.parseQueryStringParams(location.href), s = l.AppId ? l.AppId.split("#")[0] : "", u = null;
    e.exports = {useTransportCache: n, getAppId: r, setAppId: i, getAppConfig: o, setAppConfig: a}
}, function (e, t) {
    var n = {
        eq: "eq",
        neq: "ne",
        gt: "gt",
        gte: "ge",
        lt: "lt",
        lte: "le",
        contains: "substringof",
        doesnotcontain: "substringof",
        endswith: "endswith",
        startswith: "startswith"
    };
    e.exports = function r(e, t) {
        t = t || {};
        var i, a, o, l, s, u, d, p, c = [], f = e.logic ? e.logic.toLowerCase() : "and", y = e.filters;
        for (i = 0, a = y.length; a > i; i++)e = y[i], o = e.field, d = e.value, u = e.operator, e.filters ? e = r(e) : (p = e.ignoreCase, o = o.replace(/\./g, "/"), e = n[u], e && void 0 !== d && (l = $.type(d), "string" === l ? (s = "'{1}'", d = d.replace(/'/g, "''"), t[o] && 8 === t[o].FieldTypeKind && $.inArray(d.toLowerCase(), ["true", "false"]) > -1 && (d = JSON.parse(d.toLowerCase()) ? "1" : "0"), p === !0 && (o = "tolower(" + o + ")")) : s = "date" === l ? "datetime'{1:yyyy-MM-ddTHH:mm:ss}'" : "{1}", e.length > 3 ? "substringof" !== e ? s = "{0}({2}," + s + ")" : (s = "{0}(" + s + ",{2})", "doesnotcontain" === u && (s += " eq false"), p === !0 && (s += " eq true")) : s = "{2} {0} " + s, e = kendo.format(s, e, d, o))), c.push(e);
        return e = c.join(" " + f + " "), c.length > 1 && (e = "(" + e + ")"), e
    }
}, function (e, t, n) {
    (function (t) {
        function r(e, t, r) {
            this.resource = n(45), this.init(e, t, r)
        }

        var i = n(33), a = n(50), o = n(34), l = n(58), s = {};
        $.extend(r.prototype, a, {
            createListViewGrid: l, createListModel: function (e) {
                function n(e) {
                    var n = {};
                    return t.each(e.Fields.results, function (e, t) {
                        n[e.StaticName] = e
                    }), n
                }

                function r(e) {
                    var n = {};
                    return t.each(e.Views.results, function (e, t) {
                        n[e.Title] = e
                    }), n
                }

                var i = this, a = $.Deferred(), l = this.target, u = this.target.match(/\'.+?\'/gi)[0].replace(/\'/g, ""), d = i.resource.getContext(l, {
                    select: "Id, Title, BaseType, ListItemEntityTypeFullName, Fields, Views/Title, Views/DefaultView, Views/ViewFields",
                    expand: "Views, Fields, Views/ViewFields"
                });
                return s[u] ? a.resolve(s[u]) : d.dataSource.fetch(function () {
                    var e = d.dataSource.data()[0].toJSON(), t = n(e), o = r(e);
                    s[e.Id] = {
                        list: e,
                        fieldMap: t,
                        viewMap: o
                    }, i.listItemEntityTypeFullName = e.ListItemEntityTypeFullName, a.resolve(s[e.Id])
                }), a.promise().then(function (e) {
                    function n(e) {
                        var n = {}, r = "";
                        return t.each(e.fieldMap, function (e, i) {
                            r = i, t.indexOf(o.expandFieldTypeKindIds, e.FieldTypeKind) > -1 && (r = i + "Id"), n[r] = i
                        }), n
                    }

                    function r(e) {
                        var n = {}, r = i.resource.getModelDefinition("SP.ListItem");
                        return t.each(e.fieldMap, function (e, r) {
                            var i = {}, a = e.AllowMultipleValues;
                            t.indexOf(o.expandFieldTypeKindIds, e.FieldTypeKind) > -1 ? i.defaultValue = a ? {results: []} : {} : 15 === e.FieldTypeKind ? i.defaultValue = {results: []} : i.type = o.fieldTypeKindMap[e.FieldTypeKind] || "string", e.Required && (i.validation = {required: !0}), e.DefaultValue && (i.defaultValue = e.DefaultValue), "undefined" != typeof e.ReadOnlyField && (i.editable = !e.ReadOnlyField), e.Hidden || (n[r] = i)
                        }), $.extend(!0, {}, {fields: n}, r)
                    }

                    var a = r(e), s = n(e);
                    return e.siteCtxUrl = l.toLowerCase().split("/_api")[0], e.itemModel = a, e.expandedFieldMap = s, i.listModel = e, e
                })
            }, createViewsCollection: function () {
                function e(e) {
                    var n = {LinkTitle: "Title", Description: "Body"};
                    return t.map(e.Items.results, function (e) {
                        return n[e] || e
                    })
                }

                var n = this, r = {};
                return n.createListModel().then(function (i) {
                    return t.each(i.viewMap, function (t, n) {
                        var i = e(t.ViewFields);
                        r[n] = {DefaultView: t.DefaultView, Title: t.Title, ViewFields: i}
                    }), n.viewCollection = r, r
                })
            }, getViewFieldsCtx: function (e, n, r) {
                function a(e, n) {
                    var r = $.extend(!0, {}, n), i = n.fields, a = {};
                    return t.each(e, function (e) {
                        i[e] && (a[e] = i[e])
                    }), delete r.fields, r.fields = a, r
                }

                r = r || {}, n = n || {}, e = $.isArray(e) ? e : [e];
                var o, l = this;
                return l.createListModel().then(function (t) {
                    var s, u = i.checkNested(t, "list", "BaseType") ? 1 === t.list.BaseType : !1, d = {
                        expand: "Folder,File",
                        select: "FileSystemObjectType"
                    }, p = [], c = [];
                    return u && (p.push(d.select), c.push(d.expand)), p.push(i.getFieldExpression(e, t.fieldMap, "select", r)), c.push(i.getFieldExpression(e, t.fieldMap, "expand", r)), s = {
                        select: p.join(","),
                        expand: c.join(","),
                        schema: {model: a(e, t.itemModel)},
                        listModel: t,
                        listItemEntityTypeFullName: t.list.ListItemEntityTypeFullName || ""
                    }, t.viewFields = e, o = l.resource.getContext(i.format("{0}/items", l.target), $.extend(!0, {}, n, s)), l.viewFieldsCtx = o, o
                })
            }
        }), e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    function r(e, t, n) {
        this.id = a += 1, this.listModel = t, this.columns = [], this.options = n, this.init(e, n)
    }

    function i(e, t, n) {
        n = n || {};
        var i, a = "string" == typeof e ? $(e) : e;
        if (1 !== a.length)throw new Error(kendo.format("createListViewGrid() invalid selector: {0}", e));
        return l.dataSource = t.dataSource, i = $.extend(!0, {}, l, n), t.listModel.appConfig = n.appConfig || {}, new r(a, t.listModel, i)
    }

    var a = 0, o = n(59), l = {
        showEdit: !1,
        showDelete: !1,
        dataSource: null,
        autoBind: !0,
        pageable: {messages: {display: "{0} - {1}"}},
        toolbar: !1,
        sortable: {mode: "single", allowUnsort: !1},
        height: 600,
        selectable: "row",
        filterable: !1,
        editable: {mode: "popup", window: {}}
    };
    $.extend(r.prototype, {
        init: function (e, t) {
            function n(e, t) {
                var n = o.createColumnDefinition(e, t, r.listModel);
                if (r.options.showEdit || r.options.showDelete) {
                    var i, a = [];
                    r.options.showEdit && a.push({
                        name: "edit",
                        text: "Edit"
                    }), r.options.showDelete && a.push({
                        name: "destroy",
                        text: "Delete"
                    }), i = 100 * a.length + "px", n.push({command: a, title: "&nbsp;", width: i})
                }
                return n
            }

            var r = this, i = this.options;
            this.selector = "string" == typeof e ? $(e) : e, this.viewFields = t.viewFields || this.listModel.viewFields, this.columns = n(this.viewFields, this.listModel.fieldMap), $.extend(i, {columns: this.columns}), this.grid = e.kendoGrid(i).data("kendoGrid")
        }, destroy: function () {
            this.grid.destroy(), this.selector.empty()
        }
    }), e.exports = i
}, function (e, t, n) {
    (function (t) {
        function r(e, r, o) {
            var l = [], s = n(43), u = n(44), d = a.checkNested(o, "list", "BaseType") ? 1 === o.list.BaseType : !1, p = o.list.Title;
            return t.each(e, function (e) {
                if (r.hasOwnProperty(e)) {
                    var n, c = r[e], f = t.indexOf(i.expandFieldTypeKindIds, c.FieldTypeKind) > -1, y = {
                        field: e,
                        title: c.Title
                    };
                    d && "LinkFilename" === c.StaticName && (y.template = function (e) {
                        return s.getDocumentOrFolderLink(p, c, e)
                    }), c.Hidden || l.push(y), y.sortable = c.Sortable, y.groupable = c.Sortable, t.indexOf([6, 15], c.FieldTypeKind) > -1 && (y.editor = function (e, t) {
                        return u.choice(e, t, y, o)
                    }, 15 === c.FieldTypeKind && (y.template = function (e) {
                        return s.getExpandedFieldValue(c, e)
                    })), 3 === c.FieldTypeKind && (y.editor = function (e, t) {
                        return u.rtfEditor(e, t, y, o)
                    }, y.encoded = !1), 4 === c.FieldTypeKind && (n = a.checkNested(o, "appConfig", "ViewConfig", "StandardDateFormat") ? o.appConfig.ViewConfig.StandardDateFormat : "d", y.format = "{0:" + n + "}"), f && (y.groupable = !0, y.template = function (e) {
                        return s.getExpandedFieldValue(c, e)
                    }, 7 === c.FieldTypeKind && (y._lookup = {
                        field: c.LookupField,
                        list: c.LookupList
                    }, y.editor = function (e, t) {
                        return u.lookup(e, t, y, o)
                    }), 20 === c.FieldTypeKind && (y.editor = function (e, t) {
                        return u.user(e, t, y, o)
                    }))
                }
            }), l
        }

        var i = n(34), a = n(33);
        e.exports = {createColumnDefinition: r}
    }).call(t, n(29))
}, function (e, t, n) {
    function r(e, t, n) {
        this.init(e, t, n)
    }

    var i = (n(33), n(50));
    $.extend(r.prototype, i, {}), e.exports = r
}, function (e, t, n) {
    function r(e, t, n) {
        this.init(e, t, n)
    }

    var i = (n(33), n(50));
    $.extend(r.prototype, i, {}), e.exports = r
}, function (e, t, n) {
    function r(e, t, n) {
        this.init(e, t, n)
    }

    var i = (n(33), n(50));
    $.extend(r.prototype, i, {}), e.exports = r
}, function (e, t, n) {
    function r(e, t, n) {
        this.init(e, t, n)
    }

    var i = (n(33), n(50));
    $.extend(r.prototype, i, {}), e.exports = r
}, function (e, t, n) {
    function r(e, t, n) {
        this.init(e, t, n)
    }

    var i = (n(33), n(50));
    $.extend(r.prototype, i, {}), e.exports = r
}, function (e, t, n) {
    function r(e, t, n) {
        this.init(e, t, n)
    }

    var i = (n(33), n(50));
    $.extend(r.prototype, i, {}), e.exports = r
}, function (e, t, n) {
    function r(e, t, n) {
        this.init(e, t, n)
    }

    var i = (n(33), n(50)), a = n(57);
    $.extend(r.prototype, i, {
        getListItemEntityTypeFullName: function () {
            var e, t = this, n = this.target.toLowerCase().split("/items")[0], r = $.Deferred();
            return this.listItemEntityTypeFullName ? (r.resolve(this.listItemEntityTypeFullName), r.promise()) : (e = new a(n, "SP.List", {select: "ListItemEntityTypeFullName"}), e.dataSource.fetch(function () {
                var n = e.dataSource.data()[1].value;
                t.listItemEntityTypeFullName = n, r.resolve(n)
            }), r.promise())
        }, setListItemEntityTypeFullName: function (e) {
            if (!e && "string" != typeof e)throw new Error('setListItemEntityTypeFullName() wrong argument "listItemEntityTypeFullName" {string}');
            this.listItemEntityTypeFullName = e
        }
    }), e.exports = r
}, function (e, t, n) {
    function r(e, t, n) {
        this.init(e, t, n)
    }

    var i = (n(33), n(50));
    $.extend(r.prototype, i, {}), e.exports = r
}, function (e, t, n) {
    function r(e, t, n) {
        this.init(e, t, n)
    }

    var i = (n(33), n(50));
    $.extend(r.prototype, i, {}), e.exports = r
}, function (e, t, n) {
    (function (t) {
        function r(e, t) {
            t = t || {};
            var n = l.format("{0}{1}", s, e);
            return t.endpoint = n, new a(t)
        }

        var i = $.extend, a = n(70), o = n(109), l = n(33), s = "/odata/", u = n(73), d = n(72), p = i(!0, {}, {
            proxy: n(75),
            model: d,
            templates: n(116),
            editors: n(120),
            schema: u.schema
        }, o), c = ["AppConfigs", "ViewConfigs", "ChartConfigs", "ActionConfigs", "GridConfigs", "LayoutConfigs", "Lists", "Connections", "CurrentUser"];
        t.each(p.schema.entityContainer.entitySet, function (e, n) {
            var a = t.last(e.entityType.split(".")), o = l.format("get{0}DS", e.name);
            d.hasOwnProperty(a) && (p[o] = function (t) {
                t = t || {}, t.entityType = e.entityType.substring(p.schema.namespace.length + 1), t.cacheable = l.strInArray(e.name, c) > -1;
                var n = i(!0, {}, t);
                return r(e.name, n)
            })
        }), e.exports = p
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        var r = ($.extend, $.each, $.isArray), i = ($.map, n(71)), a = n(74), o = n(83), l = n(103), s = {
            "/odata/appconfigs": l.app.register,
            "/odata/viewconfigs": l.viewConfig.register,
            "/odata/gridconfigs": l.grid.register
        }, u = {}, d = kendo.data.DataSource.extend({
            init: function (e) {
                function n(e) {
                    function n(e, n) {
                        var r, i = location.hash.match(/\/view\/(.+)/), a = (location.hash.match(/\/action\/(.+)/), t.isArray(n.response.value) ? n.response.value : [n.response]), l = a[0] || {};
                        "/odata/appconfigs" === e.toLowerCase() && o.dispatch(s["/odata/appconfigs"](l)), "/odata/viewconfigs" === e.toLowerCase() && o.dispatch(s["/odata/viewconfigs"](l)), "/odata/gridconfigs" === e.toLowerCase() && (r = t.isArray(i) ? i[1] : "", r && o.dispatch(s["/odata/gridconfigs"](r, l.Id, l)))
                    }

                    var i, a = e.sender.options.endpoint;
                    f && f.call(this, e), "read" === e.type && s[a.toLowerCase()] && n(a, e), void 0 !== e.response && "read" !== e.type && "destroy" !== e.type && (i = r(e.response) ? e.response : [e.response])
                }

                function l(e) {
                    c && c.call(this, e)
                }

                e = e || {}, this._select = e.select || [], this._expand = e.expand || [];
                var u = new a(e), d = new i(e), p = {}, c = e.sync, f = e.requestEnd;
                t.defaults(p, {
                    transport: u,
                    schema: d,
                    type: "odata-v4",
                    serverFiltering: !0,
                    serverPaging: !0,
                    serverSorting: !0,
                    requestEnd: n,
                    sync: l
                }, e), kendo.data.DataSource.fn.init.call(this, p)
            }, fetchById: function (e, t) {
                var n = this, r = this.transport._endpoint, i = e ? r + "('{0}')" : r, a = kendo.format(i, e), o = $.Deferred();
                return this.transport._endpoint = a, this.read(t).then(function () {
                    var e = n.data();
                    n.transport._endpoint = r, u[a] = e, o.resolve(e)
                }), o.promise()
            }
        });
        e.exports = d
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e) {
            for (var t in e)(0 === t.indexOf("@odata") || t.indexOf("@odata.type") > 0) && delete e[t]
        }

        var i = n(72), a = n(33), o = {}, l = function (e) {
            e = e || {}, e.schema = e.schema || {};
            var t;
            this._parse = null, this._serialize = null, this.entityType = function (e) {
                return e ? void(t = e) : t
            }, this.model = e.schema.model || i["get" + e.entityType + "Model"](), e.hasOwnProperty("entityType") && "string" == typeof e.entityType && (this._entityType = this.entityType(e.entityType)), a.checkNested(e, "schema", "parse") && "function" == typeof e.schema.parse && (this._parse = e.schema.parse), a.checkNested(e, "schema", "serialize") && "function" == typeof e.schema.serialize && (this._serialize = e.schema.serialize)
        };
        t.extend(l.prototype, {
            type: "json", data: function (e) {
                return e = $.extend({}, e), r(e), e.value ? e.value : [e]
            }, parse: function (e) {
                var t = e.value ? e.value : [e];
                "string" == typeof this.entityType() && o[this.entityType()] && o[this.entityType()](e);
                for (var n = 0; n < t.length; n++)t[n]["@odata.etag"] && (t[n]._etag = t[n]["@odata.etag"]), r(t[n]);
                return this._parse && this.parse !== this._parse && t.length > 0 && (e = this._parse(e)), e
            }, serialize: function (e) {
                for (var t = 0; t < e.length; t++)e[t]._etag && (e[t]["@odata.etag"] = e[t]._etag, delete e[t]._etag);
                return this._serialize && this.serialize !== this._serialize && e.length > 0 && (e = this._serialize(e)), e
            }, total: function (e) {
                var t = e.value && $.isArray(e.value) ? e.value.length : 1, n = e["@odata.count"] ? e["@odata.count"] : t;
                return n
            }
        }), e.exports = l
    }).call(t, n(29))
}, function (e, t, n) {
    function r(e) {
        var t = {};
        return i(e, function (e, n) {
            var r = u[e] || {}, i = o.format("get{0}Model", e), l = a(!0, {}, n, s, r);
            "List" === e && (delete l.fields.ListItem, delete l.fields.ListItems, delete l.fields.CrossAppAccessLevel), "Field" === e && delete l.fields.Id, t[i] = function () {
                return kendo.data.Model.define(a(!0, {}, l))
            }, t[e] = l
        }), t
    }

    var i = $.each, a = $.extend, o = n(33), l = n(73).kendoModel, s = {fields: {ConfigJSON: {defaultValue: "{}"}}}, u = {
        AppConfig: {fields: {DocumentStorageLocation: {defaultValue: "SharePoint"}}},
        ViewConfig: {},
        List: {},
        View: {},
        Field: {}
    };
    e.exports = r(l)
}, function (e, t) {
    e.exports = {
        kendoModel: {
            List: {
                id: "Id",
                fields: {
                    ListType: {},
                    ImageUrl: {type: "string"},
                    Users: {defaultValue: []},
                    Roles: {defaultValue: []},
                    ExternalApps: {defaultValue: []},
                    CrossAppAccessLevel: {},
                    UseIncrementId: {type: "boolean"},
                    LogListItems: {type: "boolean"},
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Version: {type: "number"},
                    Title: {type: "string"},
                    CreateDate: {editable: !1, nullable: !0, type: "date"},
                    ModifiedDate: {editable: !1, nullable: !0, type: "date"},
                    ConfigJSON: {type: "string"},
                    CreatedBy: {editable: !1, nullable: !0},
                    ModifiedBy: {editable: !1, nullable: !0},
                    Permissions: {type: "string"},
                    Tenant: {editable: !1, nullable: !0, type: "string"},
                    AppId: {editable: !1, nullable: !0, type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"},
                    Fields: {defaultValue: []},
                    Folders: {defaultValue: []},
                    ListItems: {defaultValue: []},
                    RelatedLists: {defaultValue: []},
                    RelatedChildren: {defaultValue: []},
                    ListItem: {defaultValue: []}
                }
            },
            SiteAdmin: {
                id: "Id",
                fields: {
                    UserId: {type: "string"},
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Version: {type: "number"},
                    Title: {type: "string"},
                    CreateDate: {editable: !1, nullable: !0, type: "date"},
                    ModifiedDate: {editable: !1, nullable: !0, type: "date"},
                    ConfigJSON: {type: "string"},
                    CreatedBy: {editable: !1, nullable: !0},
                    ModifiedBy: {editable: !1, nullable: !0},
                    Permissions: {type: "string"},
                    Tenant: {editable: !1, nullable: !0, type: "string"},
                    AppId: {editable: !1, nullable: !0, type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"}
                }
            },
            ViewConfig: {
                id: "Id",
                fields: {
                    Users: {defaultValue: []},
                    Roles: {defaultValue: []},
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Version: {type: "number"},
                    Title: {type: "string"},
                    CreateDate: {editable: !1, nullable: !0, type: "date"},
                    ModifiedDate: {editable: !1, nullable: !0, type: "date"},
                    ConfigJSON: {type: "string"},
                    CreatedBy: {editable: !1, nullable: !0},
                    ModifiedBy: {editable: !1, nullable: !0},
                    Permissions: {type: "string"},
                    Tenant: {editable: !1, nullable: !0, type: "string"},
                    AppId: {editable: !1, nullable: !0, type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"},
                    Tabs: {defaultValue: []}
                }
            },
            ChartConfig: {
                id: "Id",
                fields: {
                    ConnectionId: {type: "string"},
                    DataSource: {},
                    ListTitle: {type: "string"},
                    ReportField: {type: "string"},
                    AnalysisType: {type: "string"},
                    AnalysisField: {type: "string"},
                    ChartConfigJSON: {type: "string"},
                    DataSourceConfigJSON: {type: "string"},
                    Report: {type: "string"},
                    ListId: {type: "string"},
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Version: {type: "number"},
                    Title: {type: "string"},
                    CreateDate: {editable: !1, nullable: !0, type: "date"},
                    ModifiedDate: {editable: !1, nullable: !0, type: "date"},
                    ConfigJSON: {type: "string"},
                    CreatedBy: {editable: !1, nullable: !0},
                    ModifiedBy: {editable: !1, nullable: !0},
                    Permissions: {type: "string"},
                    Tenant: {editable: !1, nullable: !0, type: "string"},
                    AppId: {editable: !1, nullable: !0, type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"}
                }
            },
            GridConfig: {
                id: "Id",
                fields: {
                    ConnectionId: {type: "string"},
                    DataSource: {},
                    ListTitle: {type: "string"},
                    GridConfigJSON: {type: "string"},
                    DataSourceConfigJSON: {type: "string"},
                    ListId: {type: "string"},
                    ActionIdJSON: {type: "string"},
                    ActionIds: {defaultValue: []},
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Version: {type: "number"},
                    Title: {type: "string"},
                    CreateDate: {editable: !1, nullable: !0, type: "date"},
                    ModifiedDate: {editable: !1, nullable: !0, type: "date"},
                    ConfigJSON: {type: "string"},
                    CreatedBy: {editable: !1, nullable: !0},
                    ModifiedBy: {editable: !1, nullable: !0},
                    Permissions: {type: "string"},
                    Tenant: {editable: !1, nullable: !0, type: "string"},
                    AppId: {editable: !1, nullable: !0, type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"},
                    Actions: {defaultValue: []}
                }
            },
            ActionConfig: {
                id: "Id",
                fields: {
                    ListTitle: {type: "string"},
                    ConnectionId: {type: "string"},
                    DataSource: {},
                    Type: {type: "number"},
                    ActionConfigJSON: {type: "string"},
                    SiteId: {type: "string"},
                    ListId: {type: "string"},
                    Users: {defaultValue: []},
                    Roles: {defaultValue: []},
                    Fields: {defaultValue: []},
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Version: {type: "number"},
                    Title: {type: "string"},
                    CreateDate: {editable: !1, nullable: !0, type: "date"},
                    ModifiedDate: {editable: !1, nullable: !0, type: "date"},
                    ConfigJSON: {type: "string"},
                    CreatedBy: {editable: !1, nullable: !0},
                    ModifiedBy: {editable: !1, nullable: !0},
                    Permissions: {type: "string"},
                    Tenant: {editable: !1, nullable: !0, type: "string"},
                    AppId: {editable: !1, nullable: !0, type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"}
                }
            },
            LayoutConfig: {
                id: "Id",
                fields: {
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Version: {type: "number"},
                    Title: {type: "string"},
                    CreateDate: {editable: !1, nullable: !0, type: "date"},
                    ModifiedDate: {editable: !1, nullable: !0, type: "date"},
                    ConfigJSON: {type: "string"},
                    CreatedBy: {editable: !1, nullable: !0},
                    ModifiedBy: {editable: !1, nullable: !0},
                    Permissions: {type: "string"},
                    Tenant: {editable: !1, nullable: !0, type: "string"},
                    AppId: {editable: !1, nullable: !0, type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"},
                    Rows: {defaultValue: []}
                }
            },
            AppConfig: {
                id: "Id",
                fields: {
                    ApplicationName: {type: "string"},
                    Tags: {type: "string"},
                    Owner: {type: "string"},
                    Scope: {},
                    DefaultAccessLevel: {},
                    AllowClone: {type: "boolean"},
                    AccessOffice365: {type: "boolean"},
                    HostWeb: {type: "string"},
                    DocumentStorageLocation: {},
                    Icon: {type: "string"},
                    IconColor: {type: "string"},
                    TileColor: {type: "string"},
                    FontColor: {type: "string"},
                    IsAdded: {type: "boolean"},
                    TemplateId: {type: "string"},
                    Connections: {defaultValue: []},
                    Url: {type: "string"},
                    Target: {type: "string"},
                    IsModal: {type: "boolean"},
                    Content: {type: "string"},
                    AutoProvisionFor: {defaultValue: []},
                    DefaultTileLocation: {},
                    DefaultTileSize: {},
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Version: {type: "number"},
                    Title: {type: "string"},
                    CreateDate: {editable: !1, nullable: !0, type: "date"},
                    ModifiedDate: {editable: !1, nullable: !0, type: "date"},
                    ConfigJSON: {type: "string"},
                    CreatedBy: {editable: !1, nullable: !0},
                    ModifiedBy: {editable: !1, nullable: !0},
                    Permissions: {type: "string"},
                    Tenant: {editable: !1, nullable: !0, type: "string"},
                    AppId: {editable: !1, nullable: !0, type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"},
                    Features: {defaultValue: []}
                }
            },
            Library: {
                id: "Id",
                fields: {
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Version: {type: "number"},
                    Title: {type: "string"},
                    CreateDate: {editable: !1, nullable: !0, type: "date"},
                    ModifiedDate: {editable: !1, nullable: !0, type: "date"},
                    ConfigJSON: {type: "string"},
                    CreatedBy: {editable: !1, nullable: !0},
                    ModifiedBy: {editable: !1, nullable: !0},
                    Permissions: {type: "string"},
                    Tenant: {editable: !1, nullable: !0, type: "string"},
                    AppId: {editable: !1, nullable: !0, type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"},
                    Fields: {defaultValue: []},
                    Folders: {defaultValue: []},
                    Folder: {defaultValue: []}
                }
            },
            ExtensionConfig: {
                id: "Id",
                fields: {
                    JSFiles: {defaultValue: []},
                    CSSFiles: {defaultValue: []},
                    DataSources: {defaultValue: []},
                    ViewModel: {type: "string"},
                    Template: {type: "string"},
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Version: {type: "number"},
                    Title: {type: "string"},
                    CreateDate: {editable: !1, nullable: !0, type: "date"},
                    ModifiedDate: {editable: !1, nullable: !0, type: "date"},
                    ConfigJSON: {type: "string"},
                    CreatedBy: {editable: !1, nullable: !0},
                    ModifiedBy: {editable: !1, nullable: !0},
                    Permissions: {type: "string"},
                    Tenant: {editable: !1, nullable: !0, type: "string"},
                    AppId: {editable: !1, nullable: !0, type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"}
                }
            },
            Connection: {
                id: "Id",
                fields: {
                    Parent: {type: "string"},
                    ConnectorId: {type: "string"},
                    Description: {type: "string"},
                    Settings: {defaultValue: []},
                    AuthType: {},
                    Url: {type: "string"},
                    AuthOnDemand: {type: "boolean"},
                    AdminConsent: {type: "boolean"},
                    AdminConsented: {type: "boolean"},
                    OriginalId: {type: "string"},
                    Tenant: {editable: !1, nullable: !0, type: "string"},
                    Name: {type: "string"},
                    CreatedBy: {editable: !1, nullable: !0, type: "string"},
                    UpdatedBy: {type: "string"},
                    Id: {editable: !1, nullable: !0, type: "string"},
                    CreateDate: {editable: !1, nullable: !0, type: "date"},
                    ModifiedDate: {editable: !1, nullable: !0, type: "date"},
                    Lists: {defaultValue: []},
                    Libraries: {defaultValue: []},
                    Capabilities: {},
                    Procedures: {defaultValue: []},
                    Connection: {defaultValue: []},
                    LibConnection: {defaultValue: []},
                    ProcedureConnection: {defaultValue: []}
                }
            },
            RoleResponse: {
                id: "Id",
                fields: {
                    Name: {type: "string"},
                    IsAppRole: {type: "boolean"},
                    Members: {defaultValue: []},
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Version: {type: "number"},
                    Title: {type: "string"},
                    CreateDate: {editable: !1, nullable: !0, type: "date"},
                    ModifiedDate: {editable: !1, nullable: !0, type: "date"},
                    ConfigJSON: {type: "string"},
                    CreatedBy: {editable: !1, nullable: !0},
                    ModifiedBy: {editable: !1, nullable: !0},
                    Permissions: {type: "string"},
                    Tenant: {editable: !1, nullable: !0, type: "string"},
                    AppId: {editable: !1, nullable: !0, type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"}
                }
            },
            LibraryConfig: {
                id: "Id",
                fields: {
                    ConnectionId: {type: "string"},
                    DataSource: {},
                    ListTitle: {type: "string"},
                    LibraryConfigJSON: {type: "string"},
                    DataSourceConfigJSON: {type: "string"},
                    ListId: {type: "string"},
                    ActionIdJSON: {type: "string"},
                    ActionIds: {defaultValue: []},
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Version: {type: "number"},
                    Title: {type: "string"},
                    CreateDate: {editable: !1, nullable: !0, type: "date"},
                    ModifiedDate: {editable: !1, nullable: !0, type: "date"},
                    ConfigJSON: {type: "string"},
                    CreatedBy: {editable: !1, nullable: !0},
                    ModifiedBy: {editable: !1, nullable: !0},
                    Permissions: {type: "string"},
                    Tenant: {editable: !1, nullable: !0, type: "string"},
                    AppId: {editable: !1, nullable: !0, type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"},
                    Actions: {defaultValue: []}
                }
            },
            AppInvite: {
                id: "Id",
                fields: {
                    UserInvites: {defaultValue: []},
                    AccessLevel: {},
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Version: {type: "number"},
                    Title: {type: "string"},
                    CreateDate: {editable: !1, nullable: !0, type: "date"},
                    ModifiedDate: {editable: !1, nullable: !0, type: "date"},
                    ConfigJSON: {type: "string"},
                    CreatedBy: {editable: !1, nullable: !0},
                    ModifiedBy: {editable: !1, nullable: !0},
                    Permissions: {type: "string"},
                    Tenant: {editable: !1, nullable: !0, type: "string"},
                    AppId: {editable: !1, nullable: !0, type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"}
                }
            },
            Procedure: {
                id: "Id",
                fields: {
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Results: {defaultValue: []},
                    OutPutParams: {defaultValue: []},
                    Fields: {defaultValue: []}
                }
            },
            ItemLog: {
                id: "Id",
                fields: {
                    Id: {editable: !1, nullable: !0, type: "string"},
                    CreateDate: {editable: !1, nullable: !0, type: "date"},
                    CreatedBy: {editable: !1, nullable: !0},
                    AppId: {editable: !1, nullable: !0, type: "string"},
                    ItemId: {type: "string"},
                    ListId: {type: "string"},
                    ConnectionId: {type: "string"},
                    LogType: {},
                    LogAction: {},
                    Item: {}
                }
            },
            ListItem: {
                id: "Id",
                fields: {
                    ParentListId: {type: "string"},
                    IncrementId: {type: "number"},
                    Users: {defaultValue: []},
                    Roles: {defaultValue: []},
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Version: {type: "number"},
                    Title: {type: "string"},
                    CreateDate: {editable: !1, nullable: !0, type: "date"},
                    ModifiedDate: {editable: !1, nullable: !0, type: "date"},
                    ConfigJSON: {type: "string"},
                    CreatedBy: {editable: !1, nullable: !0},
                    ModifiedBy: {editable: !1, nullable: !0},
                    Permissions: {type: "string"},
                    Tenant: {editable: !1, nullable: !0, type: "string"},
                    AppId: {editable: !1, nullable: !0, type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"},
                    RelatedItems: {defaultValue: []},
                    ItemLogs: {defaultValue: []}
                }
            },
            Application: {
                id: "Id",
                fields: {
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    AppConfig: {},
                    UserApplication: {}
                }
            },
            UserResponse: {
                id: "Id",
                fields: {
                    UserName: {type: "string"},
                    DisplayName: {type: "string"},
                    Email: {type: "string"},
                    Id: {editable: !1, nullable: !0, type: "string"}
                }
            },
            Resource: {
                id: "Id",
                fields: {
                    Id: {editable: !1, nullable: !0, type: "string"},
                    ChildName: {type: "string"},
                    ResourceType: {},
                    CreateDate: {editable: !1, nullable: !0, type: "date"},
                    ModifiedDate: {editable: !1, nullable: !0, type: "date"},
                    ParentFolderId: {type: "string"},
                    ParentListId: {type: "string"}
                }
            },
            Folder: {id: "Id", fields: {FolderUrl: {type: "string"}, FolderName: {type: "string"}}},
            Document: {
                id: "Id",
                fields: {
                    FileName: {type: "string"},
                    ListName: {type: "string"},
                    FolderId: {type: "string"},
                    ConnectionId: {type: "string"},
                    Overwrite: {type: "boolean"},
                    FileUrl: {type: "string"},
                    CheckInComments: {type: "string"},
                    ParentId: {type: "string"},
                    Description: {type: "string"}
                }
            },
            Capabilities: {
                id: "Id",
                fields: {
                    ConnectorId: {type: "string"},
                    DocumentLibraries: {type: "boolean"},
                    ListItems: {type: "boolean"},
                    DocumentUpload: {type: "boolean"},
                    CheckInOut: {type: "boolean"},
                    Count: {type: "boolean"},
                    SkipToken: {type: "boolean"},
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Version: {type: "number"},
                    Title: {type: "string"}
                }
            },
            Field: {
                id: "Id",
                fields: {
                    FieldType: {},
                    Hidden: {type: "boolean"},
                    Required: {type: "boolean"},
                    DefaultView: {type: "boolean"},
                    LookUpListID: {type: "string"},
                    Format: {type: "string"},
                    Calculation: {type: "string"},
                    LookUpDisplayField: {type: "string"},
                    ConnectionId: {type: "string"},
                    ConnectionTarget: {type: "string"},
                    LookUpSortField: {type: "string"},
                    RelatedListId: {type: "string"},
                    Choices: {defaultValue: []},
                    MultiChoice: {type: "boolean"},
                    Deleted: {type: "boolean"},
                    DataType: {type: "string"},
                    UpdateCustomId: {type: "boolean"},
                    StaticName: {type: "string"},
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Title: {type: "string"},
                    ConfigJSON: {type: "string"},
                    Permissions: {type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"}
                }
            },
            Column: {
                id: "Id",
                fields: {
                    ColumnNumber: {type: "number"},
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Title: {type: "string"},
                    ConfigJSON: {type: "string"},
                    Permissions: {type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"},
                    Widgets: {defaultValue: []}
                }
            },
            Row: {
                id: "Id",
                fields: {
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Title: {type: "string"},
                    ConfigJSON: {type: "string"},
                    Permissions: {type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"},
                    Columns: {defaultValue: []}
                }
            },
            Tab: {
                id: "Id",
                fields: {
                    Enabled: {type: "boolean"},
                    Users: {defaultValue: []},
                    Roles: {defaultValue: []},
                    Icon: {type: "string"},
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Title: {type: "string"},
                    ConfigJSON: {type: "string"},
                    Permissions: {type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"},
                    Views: {defaultValue: []}
                }
            },
            View: {
                id: "Id",
                fields: {
                    Type: {type: "string"},
                    NavToolTip: {type: "string"},
                    Enabled: {type: "boolean"},
                    Icon: {type: "string"},
                    Link: {type: "string"},
                    LinkParams: {type: "string"},
                    Target: {type: "string"},
                    Users: {defaultValue: []},
                    Roles: {defaultValue: []},
                    ListId: {type: "string"},
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Description: {type: "string"},
                    Title: {type: "string"},
                    ConfigJSON: {type: "string"},
                    Permissions: {type: "string"},
                    OrginalId: {type: "string"},
                    Recycled: {type: "boolean"}
                }
            },
            ListTemplate: {id: "Id", fields: {Items: {defaultValue: []}}},
            LicenseKeyFeature: {
                id: "Id",
                fields: {
                    Id: {editable: !1, nullable: !0, type: "string"},
                    Enabled: {type: "boolean"},
                    Level: {type: "number"}
                }
            },
            AppConfigTemplate: {
                id: "Id",
                fields: {
                    Actions: {defaultValue: []},
                    Views: {defaultValue: []},
                    Charts: {defaultValue: []},
                    Extensions: {defaultValue: []},
                    Grids: {defaultValue: []},
                    Layouts: {defaultValue: []},
                    Lists: {defaultValue: []}
                }
            }
        }, schema: {
            namespace: "CorasCloud.Entities",
            entityType: [{
                name: "List",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{
                    name: "ListType",
                    type: "CorasCloud.Entities.Enums.ListType",
                    nullable: "false"
                }, {name: "ImageUrl", type: "Edm.String"}, {
                    name: "Users", type: "Collection(Edm.String)"
                }, {name: "Roles", type: "Collection(Edm.String)"}, {
                    name: "ExternalApps",
                    type: "Collection(CorasCloud.Entities.ExternalApps)"
                }, {
                    name: "CrossAppAccessLevel",
                    type: "CorasCloud.Entities.Enums.ApplicationAccessLevel"
                }, {name: "UseIncrementId", type: "Edm.Boolean", nullable: "false"}, {
                    name: "LogListItems",
                    type: "Edm.Boolean",
                    nullable: "false"
                }, {name: "Id", type: "Edm.String", nullable: "false"}, {
                    name: "Description",
                    type: "Edm.String"
                }, {name: "Version", type: "Edm.Int32", nullable: "false"}, {
                    name: "Title",
                    type: "Edm.String"
                }, {name: "CreateDate", type: "Edm.DateTimeOffset"}, {
                    name: "ModifiedDate",
                    type: "Edm.DateTimeOffset"
                }, {name: "ConfigJSON", type: "Edm.String"}, {
                    name: "CreatedBy",
                    type: "CorasCloud.Entities.User"
                }, {name: "ModifiedBy", type: "CorasCloud.Entities.User"}, {
                    name: "Permissions",
                    type: "Edm.String"
                }, {name: "Tenant", type: "Edm.String"}, {name: "AppId", type: "Edm.String"}, {
                    name: "OrginalId",
                    type: "Edm.String"
                }, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}],
                navigationProperty: [{name: "Fields", type: "Collection(CorasCloud.Entities.Field)"}, {
                    name: "Folders",
                    type: "Collection(CorasCloud.Entities.Folder)"
                }, {name: "ListItems", type: "Collection(CorasCloud.Entities.ListItem)"}, {
                    name: "RelatedLists",
                    type: "Collection(CorasCloud.Entities.List)"
                }, {name: "RelatedChildren", type: "Collection(CorasCloud.Entities.List)"}, {
                    name: "ListItem",
                    type: "Collection(CorasCloud.Entities.ListItem)"
                }]
            }, {
                name: "SiteAdmin",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "UserId", type: "Edm.String", nullable: "false"}, {
                    name: "Id",
                    type: "Edm.String",
                    nullable: "false"
                }, {name: "Description", type: "Edm.String"}, {
                    name: "Version",
                    type: "Edm.Int32",
                    nullable: "false"
                }, {name: "Title", type: "Edm.String"}, {
                    name: "CreateDate",
                    type: "Edm.DateTimeOffset"
                }, {name: "ModifiedDate", type: "Edm.DateTimeOffset"}, {
                    name: "ConfigJSON",
                    type: "Edm.String"
                }, {name: "CreatedBy", type: "CorasCloud.Entities.User"}, {
                    name: "ModifiedBy",
                    type: "CorasCloud.Entities.User"
                }, {name: "Permissions", type: "Edm.String"}, {name: "Tenant", type: "Edm.String"}, {
                    name: "AppId",
                    type: "Edm.String"
                }, {name: "OrginalId", type: "Edm.String"}, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}]
            }, {
                name: "ViewConfig",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "Users", type: "Collection(Edm.String)"}, {
                    name: "Roles",
                    type: "Collection(Edm.String)"
                }, {name: "Id", type: "Edm.String", nullable: "false"}, {
                    name: "Description",
                    type: "Edm.String"
                }, {name: "Version", type: "Edm.Int32", nullable: "false"}, {
                    name: "Title",
                    type: "Edm.String"
                }, {name: "CreateDate", type: "Edm.DateTimeOffset"}, {
                    name: "ModifiedDate",
                    type: "Edm.DateTimeOffset"
                }, {name: "ConfigJSON", type: "Edm.String"}, {
                    name: "CreatedBy",
                    type: "CorasCloud.Entities.User"
                }, {name: "ModifiedBy", type: "CorasCloud.Entities.User"}, {
                    name: "Permissions",
                    type: "Edm.String"
                }, {name: "Tenant", type: "Edm.String"}, {name: "AppId", type: "Edm.String"}, {
                    name: "OrginalId",
                    type: "Edm.String"
                }, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}],
                navigationProperty: [{name: "Tabs", type: "Collection(CorasCloud.Entities.Tab)"}]
            }, {
                name: "ChartConfig",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "ConnectionId", type: "Edm.String"}, {
                    name: "DataSource",
                    type: "CorasCloud.Entities.Enums.DataSource",
                    nullable: "false"
                }, {name: "ListTitle", type: "Edm.String", nullable: "false"}, {
                    name: "ReportField",
                    type: "Edm.String",
                    nullable: "false"
                }, {name: "AnalysisType", type: "Edm.String", nullable: "false"}, {
                    name: "AnalysisField",
                    type: "Edm.String"
                }, {name: "ChartConfigJSON", type: "Edm.String", nullable: "false"}, {
                    name: "DataSourceConfigJSON",
                    type: "Edm.String",
                    nullable: "false"
                }, {name: "Report", type: "Edm.String"}, {name: "ListId", type: "Edm.String"}, {
                    name: "Id",
                    type: "Edm.String",
                    nullable: "false"
                }, {name: "Description", type: "Edm.String"}, {
                    name: "Version",
                    type: "Edm.Int32",
                    nullable: "false"
                }, {name: "Title", type: "Edm.String"}, {
                    name: "CreateDate",
                    type: "Edm.DateTimeOffset"
                }, {name: "ModifiedDate", type: "Edm.DateTimeOffset"}, {
                    name: "ConfigJSON",
                    type: "Edm.String"
                }, {name: "CreatedBy", type: "CorasCloud.Entities.User"}, {
                    name: "ModifiedBy",
                    type: "CorasCloud.Entities.User"
                }, {name: "Permissions", type: "Edm.String"}, {name: "Tenant", type: "Edm.String"}, {
                    name: "AppId",
                    type: "Edm.String"
                }, {name: "OrginalId", type: "Edm.String"}, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}]
            }, {
                name: "GridConfig",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "ConnectionId", type: "Edm.String"}, {
                    name: "DataSource",
                    type: "CorasCloud.Entities.Enums.DataSource",
                    nullable: "false"
                }, {name: "ListTitle", type: "Edm.String", nullable: "false"}, {
                    name: "GridConfigJSON",
                    type: "Edm.String",
                    nullable: "false"
                }, {name: "DataSourceConfigJSON", type: "Edm.String", nullable: "false"}, {
                    name: "ListId",
                    type: "Edm.String"
                }, {name: "ActionIdJSON", type: "Edm.String"}, {
                    name: "ActionIds",
                    type: "Collection(Edm.String)"
                }, {name: "Id", type: "Edm.String", nullable: "false"}, {
                    name: "Description",
                    type: "Edm.String"
                }, {name: "Version", type: "Edm.Int32", nullable: "false"}, {
                    name: "Title",
                    type: "Edm.String"
                }, {name: "CreateDate", type: "Edm.DateTimeOffset"}, {
                    name: "ModifiedDate",
                    type: "Edm.DateTimeOffset"
                }, {name: "ConfigJSON", type: "Edm.String"}, {
                    name: "CreatedBy",
                    type: "CorasCloud.Entities.User"
                }, {name: "ModifiedBy", type: "CorasCloud.Entities.User"}, {
                    name: "Permissions",
                    type: "Edm.String"
                }, {name: "Tenant", type: "Edm.String"}, {name: "AppId", type: "Edm.String"}, {
                    name: "OrginalId",
                    type: "Edm.String"
                }, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}],
                navigationProperty: [{name: "Actions", type: "Collection(CorasCloud.Entities.ActionConfig)"}]
            }, {
                name: "ActionConfig",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "ListTitle", type: "Edm.String"}, {
                    name: "ConnectionId",
                    type: "Edm.String"
                }, {name: "DataSource", type: "CorasCloud.Entities.Enums.DataSource", nullable: "false"}, {
                    name: "Type",
                    type: "Edm.Int32",
                    nullable: "false"
                }, {name: "ActionConfigJSON", type: "Edm.String"}, {
                    name: "SiteId",
                    type: "Edm.String"
                }, {name: "ListId", type: "Edm.String"}, {
                    name: "Users",
                    type: "Collection(Edm.String)"
                }, {name: "Roles", type: "Collection(Edm.String)"}, {
                    name: "Fields",
                    type: "Collection(CorasCloud.Entities.ActionField)"
                }, {name: "Id", type: "Edm.String", nullable: "false"}, {
                    name: "Description",
                    type: "Edm.String"
                }, {name: "Version", type: "Edm.Int32", nullable: "false"}, {
                    name: "Title",
                    type: "Edm.String"
                }, {name: "CreateDate", type: "Edm.DateTimeOffset"}, {
                    name: "ModifiedDate",
                    type: "Edm.DateTimeOffset"
                }, {name: "ConfigJSON", type: "Edm.String"}, {
                    name: "CreatedBy",
                    type: "CorasCloud.Entities.User"
                }, {name: "ModifiedBy", type: "CorasCloud.Entities.User"}, {
                    name: "Permissions",
                    type: "Edm.String"
                }, {name: "Tenant", type: "Edm.String"}, {name: "AppId", type: "Edm.String"}, {
                    name: "OrginalId",
                    type: "Edm.String"
                }, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}]
            }, {
                name: "LayoutConfig",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "Id", type: "Edm.String", nullable: "false"}, {
                    name: "Description",
                    type: "Edm.String"
                }, {name: "Version", type: "Edm.Int32", nullable: "false"}, {
                    name: "Title",
                    type: "Edm.String"
                }, {name: "CreateDate", type: "Edm.DateTimeOffset"}, {
                    name: "ModifiedDate",
                    type: "Edm.DateTimeOffset"
                }, {name: "ConfigJSON", type: "Edm.String"}, {
                    name: "CreatedBy",
                    type: "CorasCloud.Entities.User"
                }, {name: "ModifiedBy", type: "CorasCloud.Entities.User"}, {
                    name: "Permissions",
                    type: "Edm.String"
                }, {name: "Tenant", type: "Edm.String"}, {name: "AppId", type: "Edm.String"}, {
                    name: "OrginalId",
                    type: "Edm.String"
                }, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}],
                navigationProperty: [{name: "Rows", type: "Collection(CorasCloud.Entities.Row)"}]
            }, {
                name: "AppConfig",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "ApplicationName", type: "Edm.String", nullable: "false"}, {
                    name: "Tags",
                    type: "Edm.String"
                }, {name: "Owner", type: "Edm.String"}, {
                    name: "Scope",
                    type: "CorasCloud.Entities.Enums.ApplicationScope",
                    nullable: "false"
                }, {
                    name: "DefaultAccessLevel",
                    type: "CorasCloud.Entities.Enums.ApplicationAccessLevel",
                    nullable: "false"
                }, {name: "AllowClone", type: "Edm.Boolean"}, {
                    name: "AccessOffice365",
                    type: "Edm.Boolean"
                }, {name: "HostWeb", type: "Edm.String"}, {
                    name: "DocumentStorageLocation",
                    type: "CorasCloud.Entities.Enums.DocumentStorageLocation",
                    nullable: "false"
                }, {name: "Icon", type: "Edm.String"}, {name: "IconColor", type: "Edm.String"}, {
                    name: "TileColor",
                    type: "Edm.String"
                }, {name: "FontColor", type: "Edm.String"}, {
                    name: "IsAdded",
                    type: "Edm.Boolean",
                    nullable: "false"
                }, {name: "TemplateId", type: "Edm.String"}, {
                    name: "Connections",
                    type: "Collection(Edm.String)"
                }, {name: "Url", type: "Edm.String"}, {name: "Target", type: "Edm.String"}, {
                    name: "IsModal",
                    type: "Edm.Boolean",
                    nullable: "false"
                }, {name: "Content", type: "Edm.String"}, {
                    name: "AutoProvisionFor",
                    type: "Collection(CorasCloud.Entities.Enums.RegisteredUserType)",
                    nullable: "false"
                }, {
                    name: "DefaultTileLocation",
                    type: "CorasCloud.Entities.ChildEntities.UserApplicationLocation"
                }, {
                    name: "DefaultTileSize",
                    type: "CorasCloud.Entities.Enums.TileSize",
                    nullable: "false"
                }, {name: "Id", type: "Edm.String", nullable: "false"}, {
                    name: "Description",
                    type: "Edm.String"
                }, {name: "Version", type: "Edm.Int32", nullable: "false"}, {
                    name: "Title",
                    type: "Edm.String"
                }, {name: "CreateDate", type: "Edm.DateTimeOffset"}, {
                    name: "ModifiedDate",
                    type: "Edm.DateTimeOffset"
                }, {name: "ConfigJSON", type: "Edm.String"}, {
                    name: "CreatedBy",
                    type: "CorasCloud.Entities.User"
                }, {name: "ModifiedBy", type: "CorasCloud.Entities.User"}, {
                    name: "Permissions",
                    type: "Edm.String"
                }, {name: "Tenant", type: "Edm.String"}, {name: "AppId", type: "Edm.String"}, {
                    name: "OrginalId",
                    type: "Edm.String"
                }, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}],
                navigationProperty: [{name: "Features", type: "Collection(CorasCloud.Entities.LicenseKeyFeature)"}]
            }, {
                name: "Library",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "Id", type: "Edm.String", nullable: "false"}, {
                    name: "Description",
                    type: "Edm.String"
                }, {name: "Version", type: "Edm.Int32", nullable: "false"}, {
                    name: "Title",
                    type: "Edm.String"
                }, {name: "CreateDate", type: "Edm.DateTimeOffset"}, {
                    name: "ModifiedDate",
                    type: "Edm.DateTimeOffset"
                }, {name: "ConfigJSON", type: "Edm.String"}, {
                    name: "CreatedBy",
                    type: "CorasCloud.Entities.User"
                }, {name: "ModifiedBy", type: "CorasCloud.Entities.User"}, {
                    name: "Permissions",
                    type: "Edm.String"
                }, {name: "Tenant", type: "Edm.String"}, {name: "AppId", type: "Edm.String"}, {
                    name: "OrginalId",
                    type: "Edm.String"
                }, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}],
                navigationProperty: [{name: "Fields", type: "Collection(CorasCloud.Entities.Field)"}, {
                    name: "Folders",
                    type: "Collection(CorasCloud.Entities.Folder)"
                }, {name: "Folder", type: "Collection(CorasCloud.Entities.Folder)"}]
            }, {
                name: "ExtensionConfig",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "JSFiles", type: "Collection(Edm.String)"}, {
                    name: "CSSFiles",
                    type: "Collection(Edm.String)"
                }, {name: "DataSources", type: "Collection(Edm.String)"}, {
                    name: "ViewModel",
                    type: "Edm.String"
                }, {name: "Template", type: "Edm.String"}, {
                    name: "Id",
                    type: "Edm.String",
                    nullable: "false"
                }, {name: "Description", type: "Edm.String"}, {
                    name: "Version",
                    type: "Edm.Int32",
                    nullable: "false"
                }, {name: "Title", type: "Edm.String"}, {
                    name: "CreateDate",
                    type: "Edm.DateTimeOffset"
                }, {name: "ModifiedDate", type: "Edm.DateTimeOffset"}, {
                    name: "ConfigJSON",
                    type: "Edm.String"
                }, {name: "CreatedBy", type: "CorasCloud.Entities.User"}, {
                    name: "ModifiedBy",
                    type: "CorasCloud.Entities.User"
                }, {name: "Permissions", type: "Edm.String"}, {name: "Tenant", type: "Edm.String"}, {
                    name: "AppId",
                    type: "Edm.String"
                }, {name: "OrginalId", type: "Edm.String"}, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}]
            }, {
                name: "Connection",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "Parent", type: "Edm.String"}, {
                    name: "ConnectorId",
                    type: "Edm.String"
                }, {name: "Description", type: "Edm.String"}, {
                    name: "Settings",
                    type: "Collection(System.Collections.Generic.KeyValuePair_2OfString_String)"
                }, {name: "AuthType", type: "CorasCloud.Entities.Enums.ConnectionAuthType"}, {
                    name: "Url",
                    type: "Edm.String"
                }, {name: "AuthOnDemand", type: "Edm.Boolean"}, {
                    name: "AdminConsent",
                    type: "Edm.Boolean",
                    nullable: "false"
                }, {name: "AdminConsented", type: "Edm.Boolean"}, {
                    name: "OriginalId",
                    type: "Edm.String"
                }, {name: "Tenant", type: "Edm.String"}, {name: "Name", type: "Edm.String"}, {
                    name: "CreatedBy",
                    type: "Edm.String"
                }, {name: "UpdatedBy", type: "Edm.String"}, {
                    name: "Id",
                    type: "Edm.String",
                    nullable: "false"
                }, {name: "CreateDate", type: "Edm.DateTimeOffset"}, {
                    name: "ModifiedDate",
                    type: "Edm.DateTimeOffset"
                }],
                navigationProperty: [{name: "Lists", type: "Collection(CorasCloud.Entities.List)"}, {
                    name: "Libraries",
                    type: "Collection(CorasCloud.Entities.Library)"
                }, {name: "Capabilities", type: "CorasCloud.Entities.Capabilities"}, {
                    name: "Procedures",
                    type: "Collection(CorasCloud.Entities.Procedure)"
                }, {name: "Connection", type: "Collection(CorasCloud.Entities.List)"}, {
                    name: "LibConnection",
                    type: "Collection(CorasCloud.Entities.Library)"
                }, {name: "ProcedureConnection", type: "Collection(CorasCloud.Entities.Procedure)"}]
            }, {
                name: "RoleResponse",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "Name", type: "Edm.String"}, {
                    name: "IsAppRole",
                    type: "Edm.Boolean",
                    nullable: "false"
                }, {name: "Members", type: "Collection(Edm.String)"}, {
                    name: "Id",
                    type: "Edm.String",
                    nullable: "false"
                }, {name: "Description", type: "Edm.String"}, {
                    name: "Version",
                    type: "Edm.Int32",
                    nullable: "false"
                }, {name: "Title", type: "Edm.String"}, {
                    name: "CreateDate",
                    type: "Edm.DateTimeOffset"
                }, {name: "ModifiedDate", type: "Edm.DateTimeOffset"}, {
                    name: "ConfigJSON",
                    type: "Edm.String"
                }, {name: "CreatedBy", type: "CorasCloud.Entities.User"}, {
                    name: "ModifiedBy",
                    type: "CorasCloud.Entities.User"
                }, {name: "Permissions", type: "Edm.String"}, {name: "Tenant", type: "Edm.String"}, {
                    name: "AppId",
                    type: "Edm.String"
                }, {name: "OrginalId", type: "Edm.String"}, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}]
            }, {
                name: "LibraryConfig",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "ConnectionId", type: "Edm.String"}, {
                    name: "DataSource",
                    type: "CorasCloud.Entities.Enums.DataSource",
                    nullable: "false"
                }, {name: "ListTitle", type: "Edm.String"}, {
                    name: "LibraryConfigJSON",
                    type: "Edm.String"
                }, {name: "DataSourceConfigJSON", type: "Edm.String"}, {
                    name: "ListId",
                    type: "Edm.String"
                }, {name: "ActionIdJSON", type: "Edm.String"}, {
                    name: "ActionIds",
                    type: "Collection(Edm.String)"
                }, {name: "Id", type: "Edm.String", nullable: "false"}, {
                    name: "Description",
                    type: "Edm.String"
                }, {name: "Version", type: "Edm.Int32", nullable: "false"}, {
                    name: "Title",
                    type: "Edm.String"
                }, {name: "CreateDate", type: "Edm.DateTimeOffset"}, {
                    name: "ModifiedDate",
                    type: "Edm.DateTimeOffset"
                }, {name: "ConfigJSON", type: "Edm.String"}, {
                    name: "CreatedBy",
                    type: "CorasCloud.Entities.User"
                }, {name: "ModifiedBy", type: "CorasCloud.Entities.User"}, {
                    name: "Permissions",
                    type: "Edm.String"
                }, {name: "Tenant", type: "Edm.String"}, {name: "AppId", type: "Edm.String"}, {
                    name: "OrginalId",
                    type: "Edm.String"
                }, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}],
                navigationProperty: [{name: "Actions", type: "Collection(CorasCloud.Entities.ActionConfig)"}]
            }, {
                name: "AppInvite",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{
                    name: "UserInvites",
                    type: "Collection(CorasCloud.Entities.UserInvite)"
                }, {
                    name: "AccessLevel",
                    type: "CorasCloud.Entities.Enums.ApplicationAccessLevel",
                    nullable: "false"
                }, {name: "Id", type: "Edm.String", nullable: "false"}, {
                    name: "Description",
                    type: "Edm.String"
                }, {name: "Version", type: "Edm.Int32", nullable: "false"}, {
                    name: "Title",
                    type: "Edm.String"
                }, {name: "CreateDate", type: "Edm.DateTimeOffset"}, {
                    name: "ModifiedDate",
                    type: "Edm.DateTimeOffset"
                }, {name: "ConfigJSON", type: "Edm.String"}, {
                    name: "CreatedBy",
                    type: "CorasCloud.Entities.User"
                }, {name: "ModifiedBy", type: "CorasCloud.Entities.User"}, {
                    name: "Permissions",
                    type: "Edm.String"
                }, {name: "Tenant", type: "Edm.String"}, {name: "AppId", type: "Edm.String"}, {
                    name: "OrginalId",
                    type: "Edm.String"
                }, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}]
            }, {
                name: "Procedure",
                openType: "true",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "Id", type: "Edm.String", nullable: "false"}, {
                    name: "Results",
                    type: "Collection(System.Collections.Generic.KeyValuePair_2OfString_IDictionary_2OfString_Object)"
                }, {name: "OutPutParams", type: "Collection(System.Data.SqlClient.SqlParameter)"}],
                navigationProperty: [{name: "Fields", type: "Collection(CorasCloud.Entities.Field)"}]
            }, {
                name: "ItemLog",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "Id", type: "Edm.String", nullable: "false"}, {
                    name: "CreateDate",
                    type: "Edm.DateTimeOffset"
                }, {name: "CreatedBy", type: "CorasCloud.Entities.User"}, {
                    name: "AppId",
                    type: "Edm.String"
                }, {name: "ItemId", type: "Edm.String"}, {name: "ListId", type: "Edm.String"}, {
                    name: "ConnectionId",
                    type: "Edm.String"
                }, {
                    name: "LogType",
                    type: "CorasCloud.Entities.Enums.ItemLogType",
                    nullable: "false"
                }, {
                    name: "LogAction",
                    type: "CorasCloud.Entities.Enums.ItemLogAction",
                    nullable: "false"
                }, {name: "Item", type: "CorasCloud.Entities.Item"}]
            }, {
                name: "ListItem",
                openType: "true",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "ParentListId", type: "Edm.String"}, {
                    name: "IncrementId",
                    type: "Edm.Int32",
                    nullable: "false"
                }, {name: "Users", type: "Collection(Edm.String)"}, {
                    name: "Roles",
                    type: "Collection(Edm.String)"
                }, {name: "Id", type: "Edm.String", nullable: "false"}, {
                    name: "Description",
                    type: "Edm.String"
                }, {name: "Version", type: "Edm.Int32", nullable: "false"}, {
                    name: "Title",
                    type: "Edm.String"
                }, {name: "CreateDate", type: "Edm.DateTimeOffset"}, {
                    name: "ModifiedDate",
                    type: "Edm.DateTimeOffset"
                }, {name: "ConfigJSON", type: "Edm.String"}, {
                    name: "CreatedBy",
                    type: "CorasCloud.Entities.User"
                }, {name: "ModifiedBy", type: "CorasCloud.Entities.User"}, {
                    name: "Permissions",
                    type: "Edm.String"
                }, {name: "Tenant", type: "Edm.String"}, {name: "AppId", type: "Edm.String"}, {
                    name: "OrginalId",
                    type: "Edm.String"
                }, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}],
                navigationProperty: [{
                    name: "RelatedItems",
                    type: "Collection(CorasCloud.Entities.ListItem)"
                }, {name: "ItemLogs", type: "Collection(CorasCloud.Entities.ItemLog)"}]
            }, {
                name: "Application",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "Id", type: "Edm.String", nullable: "false"}, {
                    name: "Description",
                    type: "Edm.String"
                }],
                navigationProperty: [{
                    name: "AppConfig",
                    type: "CorasCloud.Entities.AppConfig"
                }, {name: "UserApplication", type: "CorasCloud.Entities.ChildEntities.UserApplication"}]
            }, {
                name: "UserResponse",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "UserName", type: "Edm.String"}, {
                    name: "DisplayName",
                    type: "Edm.String"
                }, {name: "Email", type: "Edm.String"}, {name: "Id", type: "Edm.String", nullable: "false"}]
            }, {
                name: "Resource",
                openType: "true",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "Id", type: "Edm.String", nullable: "false"}, {
                    name: "ChildName",
                    type: "Edm.String"
                }, {
                    name: "ResourceType",
                    type: "CorasCloud.Entities.Enums.ResourceType",
                    nullable: "false"
                }, {name: "CreateDate", type: "Edm.DateTimeOffset"}, {
                    name: "ModifiedDate",
                    type: "Edm.DateTimeOffset"
                }, {name: "ParentFolderId", type: "Edm.String"}, {name: "ParentListId", type: "Edm.String"}]
            }, {
                name: "Folder",
                baseType: "CorasCloud.Entities.Resource",
                openType: "true",
                property: [{name: "FolderUrl", type: "Edm.String"}, {name: "FolderName", type: "Edm.String"}]
            }, {
                name: "Document",
                baseType: "CorasCloud.Entities.Resource",
                openType: "true",
                property: [{name: "FileName", type: "Edm.String"}, {
                    name: "ListName",
                    type: "Edm.String"
                }, {name: "FolderId", type: "Edm.String"}, {
                    name: "ConnectionId",
                    type: "Edm.String"
                }, {name: "Overwrite", type: "Edm.Boolean", nullable: "false"}, {
                    name: "FileUrl",
                    type: "Edm.String"
                }, {name: "CheckInComments", type: "Edm.String"}, {
                    name: "ParentId",
                    type: "Edm.String"
                }, {name: "Description", type: "Edm.String"}]
            }, {
                name: "Capabilities",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "ConnectorId", type: "Edm.String", nullable: "false"}, {
                    name: "DocumentLibraries",
                    type: "Edm.Boolean",
                    nullable: "false"
                }, {name: "ListItems", type: "Edm.Boolean", nullable: "false"}, {
                    name: "DocumentUpload",
                    type: "Edm.Boolean",
                    nullable: "false"
                }, {name: "CheckInOut", type: "Edm.Boolean", nullable: "false"}, {
                    name: "Count",
                    type: "Edm.Boolean",
                    nullable: "false"
                }, {name: "SkipToken", type: "Edm.Boolean", nullable: "false"}, {
                    name: "Id",
                    type: "Edm.String",
                    nullable: "false"
                }, {name: "Description", type: "Edm.String"}, {
                    name: "Version",
                    type: "Edm.Int32",
                    nullable: "false"
                }, {name: "Title", type: "Edm.String"}]
            }, {
                name: "Field",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{
                    name: "FieldType",
                    type: "CorasCloud.Entities.Enums.FieldType",
                    nullable: "false"
                }, {name: "Hidden", type: "Edm.Boolean", nullable: "false"}, {
                    name: "Required",
                    type: "Edm.Boolean",
                    nullable: "false"
                }, {name: "DefaultView", type: "Edm.Boolean", nullable: "false"}, {
                    name: "LookUpListID",
                    type: "Edm.String"
                }, {name: "Format", type: "Edm.String"}, {
                    name: "Calculation",
                    type: "Edm.String"
                }, {name: "LookUpDisplayField", type: "Edm.String"}, {
                    name: "ConnectionId",
                    type: "Edm.String"
                }, {name: "ConnectionTarget", type: "Edm.String"}, {
                    name: "LookUpSortField",
                    type: "Edm.String"
                }, {name: "RelatedListId", type: "Edm.String"}, {
                    name: "Choices",
                    type: "Collection(CorasCloud.Entities.Choice)"
                }, {name: "MultiChoice", type: "Edm.Boolean", nullable: "false"}, {
                    name: "Deleted",
                    type: "Edm.Boolean",
                    nullable: "false"
                }, {name: "DataType", type: "Edm.String"}, {
                    name: "UpdateCustomId",
                    type: "Edm.Boolean",
                    nullable: "false"
                }, {name: "StaticName", type: "Edm.String"}, {
                    name: "Id",
                    type: "Edm.String",
                    nullable: "false"
                }, {name: "Description", type: "Edm.String"}, {name: "Title", type: "Edm.String"}, {
                    name: "ConfigJSON",
                    type: "Edm.String"
                }, {name: "Permissions", type: "Edm.String"}, {
                    name: "OrginalId",
                    type: "Edm.String"
                }, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}]
            }, {
                name: "Column",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "ColumnNumber", type: "Edm.Int32", nullable: "false"}, {
                    name: "Id",
                    type: "Edm.String",
                    nullable: "false"
                }, {name: "Description", type: "Edm.String"}, {name: "Title", type: "Edm.String"}, {
                    name: "ConfigJSON",
                    type: "Edm.String"
                }, {name: "Permissions", type: "Edm.String"}, {
                    name: "OrginalId",
                    type: "Edm.String"
                }, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}],
                navigationProperty: [{name: "Widgets", type: "Collection(CorasCloud.Entities.View)"}]
            }, {
                name: "Row",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "Id", type: "Edm.String", nullable: "false"}, {
                    name: "Description",
                    type: "Edm.String"
                }, {name: "Title", type: "Edm.String"}, {name: "ConfigJSON", type: "Edm.String"}, {
                    name: "Permissions",
                    type: "Edm.String"
                }, {name: "OrginalId", type: "Edm.String"}, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}],
                navigationProperty: [{name: "Columns", type: "Collection(CorasCloud.Entities.Column)"}]
            }, {
                name: "Tab",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "Enabled", type: "Edm.Boolean", nullable: "false"}, {
                    name: "Users",
                    type: "Collection(Edm.String)"
                }, {name: "Roles", type: "Collection(Edm.String)"}, {name: "Icon", type: "Edm.String"}, {
                    name: "Id",
                    type: "Edm.String",
                    nullable: "false"
                }, {name: "Description", type: "Edm.String"}, {name: "Title", type: "Edm.String"}, {
                    name: "ConfigJSON",
                    type: "Edm.String"
                }, {name: "Permissions", type: "Edm.String"}, {
                    name: "OrginalId",
                    type: "Edm.String"
                }, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}],
                navigationProperty: [{name: "Views", type: "Collection(CorasCloud.Entities.View)"}]
            }, {
                name: "View",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "Type", type: "Edm.String"}, {
                    name: "NavToolTip",
                    type: "Edm.String"
                }, {name: "Enabled", type: "Edm.Boolean", nullable: "false"}, {
                    name: "Icon",
                    type: "Edm.String"
                }, {name: "Link", type: "Edm.String"}, {name: "LinkParams", type: "Edm.String"}, {
                    name: "Target",
                    type: "Edm.String"
                }, {name: "Users", type: "Collection(Edm.String)"}, {
                    name: "Roles",
                    type: "Collection(Edm.String)"
                }, {name: "ListId", type: "Edm.String"}, {
                    name: "Id",
                    type: "Edm.String",
                    nullable: "false"
                }, {name: "Description", type: "Edm.String"}, {name: "Title", type: "Edm.String"}, {
                    name: "ConfigJSON",
                    type: "Edm.String"
                }, {name: "Permissions", type: "Edm.String"}, {
                    name: "OrginalId",
                    type: "Edm.String"
                }, {name: "Recycled", type: "Edm.Boolean", nullable: "false"}]
            }, {
                name: "ListTemplate",
                baseType: "CorasCloud.Entities.List",
                navigationProperty: [{name: "Items", type: "Collection(CorasCloud.Entities.ListItem)"}]
            }, {
                name: "LicenseKeyFeature",
                key: [{propertyRef: [{name: "Id"}]}],
                property: [{name: "Id", type: "Edm.String", nullable: "false"}, {
                    name: "Enabled",
                    type: "Edm.Boolean",
                    nullable: "false"
                }, {name: "Level", type: "Edm.Int32", nullable: "false"}]
            }, {
                name: "AppConfigTemplate",
                baseType: "CorasCloud.Entities.AppConfig",
                navigationProperty: [{
                    name: "Actions",
                    type: "Collection(CorasCloud.Entities.ActionConfig)"
                }, {name: "Views", type: "Collection(CorasCloud.Entities.ViewConfig)"}, {
                    name: "Charts",
                    type: "Collection(CorasCloud.Entities.ChartConfig)"
                }, {name: "Extensions", type: "Collection(CorasCloud.Entities.ExtensionConfig)"}, {
                    name: "Grids",
                    type: "Collection(CorasCloud.Entities.GridConfig)"
                }, {name: "Layouts", type: "Collection(CorasCloud.Entities.LayoutConfig)"}, {
                    name: "Lists",
                    type: "Collection(CorasCloud.Entities.ListTemplate)"
                }]
            }],
            complexType: [{
                name: "Relation",
                property: [{name: "Id", type: "Edm.String"}, {
                    name: "ItemId",
                    type: "Edm.String",
                    nullable: "false"
                }, {name: "Title", type: "Edm.String"}]
            }, {
                name: "ActionField",
                property: [{name: "Name", type: "Edm.String"}, {
                    name: "InternalName",
                    type: "Edm.String"
                }, {name: "Type", type: "Edm.String"}]
            }, {
                name: "Choice",
                property: [{name: "Text", type: "Edm.String"}, {name: "Value", type: "Edm.String"}]
            }, {
                name: "LookUp",
                property: [{name: "Id", type: "Edm.String"}, {
                    name: "LookUpDisplayValue",
                    type: "Edm.String"
                }, {name: "LookUpValue", type: "Edm.String", nullable: "false"}]
            }, {
                name: "User",
                property: [{name: "Id", type: "Edm.String"}, {
                    name: "UserName",
                    type: "Edm.String"
                }, {name: "DisplayName", type: "Edm.String"}, {name: "Email", type: "Edm.String"}, {
                    name: "Type",
                    type: "CorasCloud.Entities.Enums.RegisteredUserType"
                }, {
                    name: "ApplicationAccessLevel",
                    type: "CorasCloud.Entities.Enums.ApplicationAccessLevel"
                }, {name: "SiteAdmin", type: "Edm.Boolean", nullable: "false"}]
            }, {
                name: "FieldLookupValue",
                property: [{name: "LookupValue", type: "Edm.String"}, {
                    name: "LookupId",
                    type: "Edm.Int32",
                    nullable: "false"
                }]
            }, {
                name: "DocumentRelation",
                baseType: "CorasCloud.Entities.Relation",
                property: [{name: "Document", type: "CorasCloud.Entities.RelatedDocument"}]
            }, {name: "DocumentLookUp", baseType: "CorasCloud.Entities.LookUp"}, {
                name: "RelatedDocument",
                openType: "true",
                property: [{name: "Id", type: "Edm.String"}, {
                    name: "Fields",
                    type: "Collection(CorasCloud.Entities.MetaData)"
                }, {name: "ChildName", type: "Edm.String"}, {
                    name: "ResourceType",
                    type: "CorasCloud.Entities.Enums.ResourceType",
                    nullable: "false"
                }, {name: "CreateDate", type: "Edm.DateTimeOffset"}, {
                    name: "ModifiedDate",
                    type: "Edm.DateTimeOffset"
                }, {name: "FileName", type: "Edm.String"}, {name: "ListName", type: "Edm.String"}, {
                    name: "FolderId",
                    type: "Edm.String"
                }, {name: "ConnectionId", type: "Edm.String"}, {
                    name: "Overwrite",
                    type: "Edm.Boolean",
                    nullable: "false"
                }, {name: "FileUrl", type: "Edm.String"}, {
                    name: "CheckInComments",
                    type: "Edm.String"
                }, {name: "ParentId", type: "Edm.String"}, {name: "Description", type: "Edm.String"}]
            }, {
                name: "MetaData",
                property: [{name: "FieldName", type: "Edm.String"}, {name: "Value", type: "Edm.String"}]
            }, {name: "CurrentUser", baseType: "CorasCloud.Entities.User"}, {
                name: "Item",
                openType: "true"
            }, {
                name: "ExternalApps",
                property: [{name: "AppId", type: "Edm.String"}, {
                    name: "Rights",
                    type: "CorasCloud.Entities.Enums.Rights",
                    nullable: "false"
                }]
            }, {
                name: "UserInvite",
                property: [{name: "Accepted", type: "Edm.Boolean", nullable: "false"}, {
                    name: "Seen",
                    type: "Edm.Boolean",
                    nullable: "false"
                }, {name: "ShareWith", type: "Edm.String"}]
            }, {
                name: "FieldUserValue",
                baseType: "CorasCloud.Entities.FieldLookupValue",
                property: [{name: "Email", type: "Edm.String"}]
            }],
            entityContainer: {
                name: "Container",
                entitySet: [{
                    name: "Lists",
                    entityType: "CorasCloud.Entities.List",
                    navigationPropertyBinding: [{path: "Fields", target: "Fields"}, {
                        path: "Folders",
                        target: "Folders"
                    }, {path: "ListItems", target: "ListItems"}, {
                        path: "RelatedLists",
                        target: "Lists"
                    }, {path: "RelatedChildren", target: "Lists"}, {
                        path: "CorasCloud.Entities.ListTemplate/Items",
                        target: "ListItems"
                    }, {path: "ListItem", target: "ListItems"}]
                }, {name: "SiteAdmins", entityType: "CorasCloud.Entities.SiteAdmin"}, {
                    name: "ViewConfigs",
                    entityType: "CorasCloud.Entities.ViewConfig",
                    navigationPropertyBinding: [{path: "Tabs", target: "Tabs"}]
                }, {name: "ChartConfigs", entityType: "CorasCloud.Entities.ChartConfig"}, {
                    name: "GridConfigs",
                    entityType: "CorasCloud.Entities.GridConfig",
                    navigationPropertyBinding: [{path: "Actions", target: "ActionConfigs"}]
                }, {name: "ActionConfigs", entityType: "CorasCloud.Entities.ActionConfig"}, {
                    name: "LayoutConfigs",
                    entityType: "CorasCloud.Entities.LayoutConfig",
                    navigationPropertyBinding: [{path: "Rows", target: "Rows"}]
                }, {
                    name: "AppConfigs",
                    entityType: "CorasCloud.Entities.AppConfig",
                    navigationPropertyBinding: [{
                        path: "CorasCloud.Entities.AppConfigTemplate/Actions",
                        target: "ActionConfigs"
                    }, {
                        path: "CorasCloud.Entities.AppConfigTemplate/Views",
                        target: "ViewConfigs"
                    }, {
                        path: "CorasCloud.Entities.AppConfigTemplate/Charts",
                        target: "ChartConfigs"
                    }, {
                        path: "CorasCloud.Entities.AppConfigTemplate/Extensions",
                        target: "ExtensionConfigs"
                    }, {
                        path: "CorasCloud.Entities.AppConfigTemplate/Grids",
                        target: "GridConfigs"
                    }, {
                        path: "CorasCloud.Entities.AppConfigTemplate/Layouts",
                        target: "LayoutConfigs"
                    }, {path: "CorasCloud.Entities.AppConfigTemplate/Lists", target: "Lists"}]
                }, {
                    name: "Libraries",
                    entityType: "CorasCloud.Entities.Library",
                    navigationPropertyBinding: [{path: "Fields", target: "Fields"}, {
                        path: "Folders",
                        target: "Folders"
                    }, {path: "Folder", target: "Folders"}]
                }, {name: "ExtensionConfigs", entityType: "CorasCloud.Entities.ExtensionConfig"}, {
                    name: "Connections",
                    entityType: "CorasCloud.Entities.Connection",
                    navigationPropertyBinding: [{path: "Lists", target: "Lists"}, {
                        path: "Libraries",
                        target: "Libraries"
                    }, {path: "Capabilities", target: "Capabilities"}, {
                        path: "Procedures",
                        target: "Procedures"
                    }, {path: "Connection", target: "Lists"}, {
                        path: "LibConnection",
                        target: "Libraries"
                    }, {path: "ProcedureConnection", target: "Procedures"}]
                }, {name: "Roles", entityType: "CorasCloud.Entities.RoleResponse"}, {
                    name: "LibraryConfigs",
                    entityType: "CorasCloud.Entities.LibraryConfig",
                    navigationPropertyBinding: [{path: "Actions", target: "ActionConfigs"}]
                }, {name: "AppInvites", entityType: "CorasCloud.Entities.AppInvite"}, {
                    name: "Procedures",
                    entityType: "CorasCloud.Entities.Procedure",
                    navigationPropertyBinding: [{path: "Fields", target: "Fields"}]
                }, {name: "ItemLogs", entityType: "CorasCloud.Entities.ItemLog"}, {
                    name: "ListItems",
                    entityType: "CorasCloud.Entities.ListItem",
                    navigationPropertyBinding: [{path: "RelatedItems", target: "ListItems"}, {
                        path: "ItemLogs",
                        target: "ItemLogs"
                    }]
                }, {
                    name: "Applications",
                    entityType: "CorasCloud.Entities.Application",
                    navigationPropertyBinding: [{path: "AppConfig", target: "AppConfigs"}, {
                        path: "UserApplication",
                        target: "UserApplication"
                    }]
                }, {
                    name: "UserApplication",
                    entityType: "CorasCloud.Entities.ChildEntities.UserApplication"
                }, {name: "Users", entityType: "CorasCloud.Entities.UserResponse"}, {
                    name: "CurrentUser",
                    entityType: "CorasCloud.Entities.UserResponse"
                }, {name: "Folders", entityType: "CorasCloud.Entities.Folder"}, {
                    name: "Resources",
                    entityType: "CorasCloud.Entities.Resource"
                }, {name: "Documents", entityType: "CorasCloud.Entities.Document"}, {
                    name: "Capabilities",
                    entityType: "CorasCloud.Entities.Capabilities"
                }, {name: "Fields", entityType: "CorasCloud.Entities.Field"}, {
                    name: "Column",
                    entityType: "CorasCloud.Entities.Column",
                    navigationPropertyBinding: [{path: "Widgets", target: "Views"}]
                }, {
                    name: "Rows",
                    entityType: "CorasCloud.Entities.Row",
                    navigationPropertyBinding: [{path: "Columns", target: "Column"}]
                }, {
                    name: "Tabs",
                    entityType: "CorasCloud.Entities.Tab",
                    navigationPropertyBinding: [{path: "Views", target: "Views"}]
                }, {name: "Views", entityType: "CorasCloud.Entities.View"}]
            }
        }
    }
}, function (e, t, n) {
    (function (t) {
        function r(e) {
            e = e || {};
            var t = n(55).getAppId();
            this._nextLink = "", this._endpoint = e.endpoint, this._ccModel = e.ccModel || {}, this._cacheable = e.cacheable && s.useTransportCache(), this._select = e.select, this._expand = e.expand, this._defaults = u(!0, {}, d, {headers: {AppId: t}}), this._count = e.count
        }

        function i(e, t) {
            var n = "";
            return t[e] && (n = "?$expand=" + t[e]), n
        }

        var a = n(75), o = n(33), l = n(76), s = n(55), u = $.extend, d = {
            dataType: "json",
            cache: !1,
            headers: {"Content-Type": "application/json", accept: "application/json;odata.metadata=minimal"}
        }, p = {"/odata/Lists": "Fields", "/odata/ViewConfigs": "Tabs($expand=Views)"};
        t.extend(r.prototype, {
            create: function (e) {
                var t = i(this._endpoint, p), n = u(!0, {}, this._defaults, e, {
                    url: o.format("{0}{1}", this._endpoint, t),
                    type: "POST",
                    data: JSON.stringify(e.data)
                });
                n.data = l.call(this, e.data, "create"), a(n)
            }, read: function (e) {
                var t = "" !== this._nextLink, n = u(!0, {}, this._defaults, e, {url: this._endpoint, type: "GET"});
                this._select && (e.data.select = this._select), this._expand && (e.data.expand = this._expand), this.hasOwnProperty("_count") && (e.data.count = this._count), n.data = l.call(this, e.data, "read"), e.data.page > 1 && t && (n.url = this._nextLink, delete n.data), a(n, this._cacheable)
            }, update: function (e) {
                var t, n = i(this._endpoint, p);
                t = u(!0, {}, this._defaults, e, {
                    url: o.format("{0}('{1}'){2}", this._endpoint, e.data.Id, n),
                    type: "PUT"
                }), o.checkNested(e, "data", "@odata.etag") && u(!0, t, {headers: {"If-Match": e.data["@odata.etag"]}}), t.data = l.call(this, e.data, "update"), a(t)
            }, destroy: function (e) {
                var t = {}, n = e.data || {}, r = n.Id;
                delete e.data, t = u(!0, {}, this._defaults, e, {
                    url: o.format("{0}('{1}')", this._endpoint, r),
                    type: "DELETE"
                }), o.checkNested(n, "@odata.etag") && u(!0, t, {headers: {"If-Match": n["@odata.etag"]}}), a(t)
            }
        }), e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    function r(e, t) {
        function n(t, n, r) {
            i.trigger("api:error", t, n, r, e), l && l.apply(null, arguments)
        }

        function r(t, n, r) {
            i.trigger("api:success", t, n, r, e), s && s.apply(null, arguments)
        }

        var l = e.error, s = e.success, u = "";
        return e.error = n, e.success = r, t ? (u = a(e.data), o[e.url] && o[e.url][u] ? o[e.url][u].then(function (t) {
            return e.success.apply(null, arguments), t
        }) : (o[e.url] = o[e.url] || {}, o[e.url][u] = $.ajax(e), o[e.url][u])) : $.ajax(e)
    }

    var i = n(31), a = kendo.util.hashObject, o = {};
    e.exports = r
}, function (e, t, n) {
    (function (t) {
        function r(e, n) {
            var r, s, u, d, p = {}, c = this._ccModel || {}, f = c.fields, y = ["ModifiedBy", "ModifiedDate", "CreatedBy", "CreateDate", "RelatedChildren"];
            if ("read" === n)r = this._endpoint.split("/")[this._endpoint.split("/").length - 1], s = t.indexOf(m, r) > -1, t.each(e, function (e, t) {
                o[t] ? "filter" === t || "sort" === t ? o[t](p, e, f, l) : o[t](p, e) : p[t] = e
            }); else {
                if ("update" === n)return u = i(e, y), d = a(u, f), JSON.stringify(d);
                if ("create" === n)return u = i(e, y), null === u.Id && delete u.Id, d = a(u, f), JSON.stringify(d)
            }
            return p
        }

        function i(e, t) {
            return p(e, function (n, r) {
                $.inArray(n, t) > -1 && delete e[n]
            }), e
        }

        function a(e, n) {
            var r = {};
            return t.each(e, function (e, i) {
                var a, o = ["MultiChoice", "MultiLookup", "MultiRelation", "MultiUser", "MultiDocumentRelation"], l = {
                    MultiChoice: "#Collection(String)",
                    MultiLookup: "#Collection(CorasCloud.Entities.LookUp)",
                    MultiRelation: "#Collection(CorasCloud.Entities.Relation)",
                    MultiUser: "#Collection(CorasCloud.Entities.User)",
                    MultiDocumentRelation: "#Collection(CorasCloud.Entities.RelatedDocument)"
                }, s = t.find(n, {StaticName: i});
                s && "undefined" != typeof e && t.indexOf(o, s.FieldType) > -1 && (a = s.StaticName + "@odata.type", r[a] = l[s.FieldType]), r[i] = e
            }), r
        }

        var o, l, s = (n(75), n(33)), u = n(77), d = n(35), p = (s.format, $.each), c = $.isArray, f = $.map, y = n(73).schema, m = t.map(y.entityContainer.entitySet, "name");
        l = {
            fieldType: {
                MultiLookup: "/LookUpDisplayValue",
                Lookup: "/LookUpDisplayValue",
                MultiUser: "/DisplayName",
                User: "/DisplayName",
                MultiRelation: "/Title",
                Relation: "/Title",
                DocumentRelation: "Title"
            },
            "[me]": {fieldType: {User: "/Id"}},
            "[username]": {fieldType: {User: "/UserName"}},
            "[useremail]": {fieldType: {User: "/Email"}}
        }, o = {
            pageSize: $.noop, page: $.noop, filter: function (e, t, n, r) {
                t && t.filters.length > 0 && (e.$filter = u(t, n, r))
            }, sort: function (e, n, r, i) {
                var a;
                n && (a = $.map(n, function (e) {
                    var n = e.field.replace(d.groupPrefixReplace.regexp, d.groupPrefixReplace.replace), a = n.replace(/\./g, "/"), o = t.find(r, {StaticName: a});
                    return o && o.FieldType && i.fieldType[o.FieldType] && (a += i.fieldType[o.FieldType]), "desc" === e.dir && (a += " desc"), a
                }).join(","), a && (e.$orderby = a))
            }, select: function (e, t) {
                t && (t = c(t) ? t : f(t.split(","), function (e) {
                    return $.trim(e)
                }), e.$select = t.join(","))
            }, expand: function (e, t) {
                t && (t = c(t) ? t : f(t.split(","), function (e) {
                    return $.trim(e)
                }), e.$expand = t.join(","))
            }, count: function (e, t) {
                t && (e.$count = !0)
            }, skip: function (e, t) {
                t && (e.$skip = t)
            }, take: function (e, t) {
                t && (e.$top = parseInt(t, 10))
            }
        }, e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e, n, a) {
            var d, p, m, g, h, v, b, C, E, S, I = [], w = e.logic || "and", T = {}, x = ["Text", "Choice", "Note"], _ = e.filters;
            for (n && u(n, function (e, t) {
                T[t.StaticName] = t
            }), d = 0, p = _.length; p > d; d++)e = _[d], e.filters ? e = r(e, n, a) : (t.indexOf(y, e.operator.toLowerCase()) > -1 && (e.value = ""), t.indexOf(f, e.operator.toLowerCase()) > -1 && (e.value = null), v = e.operator, b = e.lambda, S = i(e.field, e.value, n, T, a), m = S.field, C = S.value, E = e.ignoreCase, m = m.replace(/\./g, "/"), e = c[v], T[m] && $.inArray(T[m].FieldType, x) > -1 && (e.value = ""), e && void 0 !== C && (g = $.type(C), "string" === g ? (h = "'{1}'", C = C.replace(/'/g, "''"), C = encodeURIComponent(C), C = C.replace(/\%20/g, " "), C = C.replace(/\%3A/g, ":"), C = C.replace(/\%2F/g, "/"), T && T[m] && ("DateTime" === T[m].FieldType && (h = "{1}"), "Number" !== T[m].FieldType && "Currency" !== T[m].FieldType || (C = parseFloat(C), h = "{1}"))) : "number" === g ? (h = "{1}", T && T[m] && "Number" === T[m].FieldType && "decimal" === T[m].DataType && (h = "{1}m")) : "date" === g && "eq" !== v ? (C = moment(C).toISOString(), h = "{1}") : h = "{1}", h = e.length > 3 ? "substringof" !== e ? "doesnotcontain" === v ? "not contains({2}," + h + ")" : "{0}({2}," + h + ")" : "{0}(" + h + ",{2})" : "{2} {0} " + h, "in" === e && "array" === g && (h = "({1})", C = o(m, C)), e = kendo.format(h, e, C, m), b && (e = l(b, w, c[v], C, m)), "eq" === v && T[m] && "DateTime" === T[m].FieldType && (e = s(m, C)))), I.push(e);
            return e = I.join(" " + w + " "), I.length > 1 && (e = "(" + e + ")"), e
        }

        function i(e, t, n, r, i) {
            var o, l, s = null !== t && t.match && t.match(/\[.+?\]/g), d = e.split("/")[0], c = {
                field: a(e, n, r, i),
                value: "string" == typeof t ? $.trim(t) : t
            };
            return s ? (l = n && r[d] && r[d].FieldType ? r[d].FieldType : "", o = s[0].toLowerCase(), u(i, function (t, l) {
                t === o && (c.field = a(e, n, r, i, t))
            }), c.value = p(o, t, l), c) : c
        }

        function a(e, t, n, r, i) {
            var a, o, l, s = e && e.indexOf("/") > -1;
            return s ? e : (a = t && n[e] && n[e].FieldType ? n[e].FieldType : "", o = i ? r[i].fieldType[a] : r.fieldType[a], a && o && (l = e.indexOf(o) > -1, e = l ? e : e + o), e)
        }

        function o(e, t) {
            var n = [], r = "or", i = "{0} eq '{1}'";
            return u(t, function (t, r) {
                n.push(kendo.format(i, e, r))
            }), n.join(" " + r + " ")
        }

        function l(e, n, r, i, a) {
            i = $.isArray(i) ? i : [i], n = n || "or";
            var o = [], l = a.split("/"), s = l[0], u = l[1], d = {
                any: {template: u ? "{0}/{1}(s: s/{4} {2} '{3}')" : "{0}/{1}(s: s {2} '{3}')"},
                all: {template: u ? "s/{4} {2} '{3}'" : "s {2} '{3}'"}
            };
            return t.each(i, function (t) {
                o.push(kendo.format(d[e].template, s, e, r, t, u))
            }), "any" === e ? o.join(" " + n + " ") : kendo.format("{0}/{1}(s: {2})", s, e, o.join(" " + n + " "))
        }

        function s(e, t) {
            var n = moment(t).startOf("day"), r = moment(t).endOf("day"), i = "({0} ge {1} and {0} le {2})";
            return d.format(i, e, n.toISOString(), r.toISOString())
        }

        var u = $.each, d = ($.extend, n(33)), p = n(78), c = {
            eq: "eq",
            neq: "ne",
            gt: "gt",
            gte: "ge",
            lt: "lt",
            lte: "le",
            "in": "in",
            contains: "contains",
            doesnotcontain: "doesnotcontain",
            endswith: "endswith",
            startswith: "startswith",
            isnull: "eq",
            "null": "eq",
            nnull: "ne",
            isnotnull: "ne",
            isempty: "eq",
            isnotempty: "ne"
        }, f = ["null", "nnull", "isnull", "isnotnull"], y = ["isempty", "isnotempty"];
        e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    function r(e, t, n) {
        function r(e, t) {
            var n, r = a(), i = {};
            return i[e] = {}, r.read(), n = r.get(t) ? r.get(t).value : "", n = "function" == typeof n.toJSON ? n.toJSON() : n, i[e][t.toLowerCase()] = n, i
        }

        var l = i(!0, {}, r(n, t), o);
        return l.hasOwnProperty(n) ? l[n].hasOwnProperty(e) ? "function" == typeof l[n][e] ? l[n][e]() : l[n][e] : void 0 : t
    }

    var i = $.extend, a = n(79), o = n(80);
    e.exports = r
}, function (e, t) {
    function n(e) {
        e = e || {};
        var t = {
            itemBase: "cc-key-value",
            separator: "-",
            schema: {model: {id: "key", fields: {key: {editable: !0, type: "string"}, value: {editable: !0}}}}
        };
        return new kendo.data.extensions.LocalStorageDataSource(r(!0, {}, t, e))
    }

    var r = $.extend;
    e.exports = n
}, function (e, t, n) {
    function r() {
        var e = {}, t = {};
        return t.DateTime = a(s.DateTime), t.User = i(s.User), o(!0, {}, e, t)
    }

    function i(e) {
        var t = {};
        return l(e, function (e, n) {
            var r = n.id.toLowerCase();
            t[r] = n.text
        }), t
    }

    function a(e) {
        var t = {};
        return l(e, function (e, n) {
            var r = n.id.toLowerCase();
            t[r] = u(r)
        }), t
    }

    var o = $.extend, l = $.each, s = n(81), u = n(82);
    e.exports = r()
}, function (e, t) {
    e.exports = {
        MultiUser: [{id: "[Me]", text: "[Me]"}],
        User: [{id: "[Me]", text: "[Me]"}],
        DateTime: [{id: "[Now]", text: "[Now]"}, {id: "[Day.Start]", text: "[Day.Start]"}, {
            id: "[Day.End]",
            text: "[Day.End]"
        }, {id: "[Week.Start]", text: "[Week.Start]"}, {id: "[Week.End]", text: "[Week.End]"}, {
            id: "[IsoWeek.Start]",
            text: "[IsoWeek.Start]"
        }, {id: "[IsoWeek.End]", text: "[IsoWeek.End]"}, {
            id: "[Month.Start]",
            text: "[Month.Start]"
        }, {id: "[Month.End]", text: "[Month.End]"}, {
            id: "[Quarter.Start]",
            text: "[Quarter.Start]"
        }, {id: "[Quarter.End]", text: "[Quarter.End]"}, {id: "[Year.Start]", text: "[Year.Start]"}, {
            id: "[Year.End]",
            text: "[Year.End]"
        }, {id: "[Q1.Start]", text: "[Q1.Start]"}, {id: "[Q1.End]", text: "[Q1.End]"}, {
            id: "[Q2.Start]",
            text: "[Q2.Start]"
        }, {id: "[Q2.End]", text: "[Q2.End]"}, {id: "[Q3.Start]", text: "[Q3.Start]"}, {
            id: "[Q3.End]",
            text: "[Q3.End]"
        }, {id: "[Q4.Start]", text: "[Q4.Start]"}, {id: "[Q4.End]", text: "[Q4.End]"}, {
            id: "[Q1.USGF.Start]",
            text: "[Q1.USGF.Start]"
        }, {id: "[Q1.USGF.End]", text: "[Q1.USGF.End]"}, {
            id: "[Q2.USGF.Start]",
            text: "[Q2.USGF.Start]"
        }, {id: "[Q2.USGF.End]", text: "[Q2.USGF.End]"}, {
            id: "[Q3.USGF.Start]",
            text: "[Q3.USGF.Start]"
        }, {id: "[Q3.USGF.End]", text: "[Q3.USGF.End]"}, {
            id: "[Q4.USGF.Start]",
            text: "[Q4.USGF.Start]"
        }, {id: "[Q4.USGF.End]", text: "[Q4.USGF.End]"}]
    }
}, function (e, t) {
    function n(e) {
        var t = ["day", "week", "isoweek", "quarter", "month", "year"], n = ["q1", "q2", "q3", "q4"], r = {
            start: "startOf",
            end: "endOf"
        }, o = e.replace(/\[|\]/g, "").split("."), l = o[0], s = o[1], u = r[s], d = "standard";
        if (1 === o.length && "now" === l)return function () {
            return moment().toISOString()
        };
        if (2 === o.length) {
            if (i(l, t) > -1)return function () {
                return moment()[u](l).toISOString()
            };
            if (i(l, n) > -1)return function () {
                return moment().month(a[d][l][s])[u]("month").toISOString()
            }
        }
        return 3 === o.length && (s = o[2], u = r[s], d = o[1], i(l, n) > -1) ? function () {
            var e, t = moment().month(a[d][l][s])[u]("month");
            return a[d][l].hasOwnProperty("adjust") && (e = a[d][l].adjust, t[e.method](e.length, e.period)), t.toISOString()
        } : void 0
    }

    var r = $.extend, i = $.inArray, a = {
        standard: {
            q1: {start: 0, end: 2},
            q2: {start: 3, end: 5},
            q3: {start: 6, end: 8},
            q4: {start: 9, end: 11}
        }
    };
    a.usgf = {
        q1: r({}, a.standard.q4, {adjust: {method: "subtract", period: "year", length: 1}}),
        q2: a.standard.q1,
        q3: a.standard.q2,
        q4: a.standard.q3
    }, e.exports = n
}, function (e, t, n) {
    var r = n(84), i = n(94), a = n(101), o = n(102), l = o({
        collapsed: !0, predicate: function () {
            return !1
        }
    }), s = r.createStore(i, a, r.applyMiddleware(l));
    e.exports = s
}, function (e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = void 0;
    var i = n(85), a = r(i), o = n(89), l = r(o), s = n(91), u = r(s), d = n(92), p = r(d), c = n(93), f = r(c), y = n(90);
    r(y);
    t.createStore = a["default"], t.combineReducers = l["default"], t.bindActionCreators = u["default"], t.applyMiddleware = p["default"], t.compose = f["default"]
}, function (e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function i(e, t, n) {
        function r() {
            y === f && (y = f.slice())
        }

        function a() {
            return c
        }

        function s(e) {
            if ("function" != typeof e)throw new Error("Expected listener to be a function.");
            var t = !0;
            return r(), y.push(e), function () {
                if (t) {
                    t = !1, r();
                    var n = y.indexOf(e);
                    y.splice(n, 1)
                }
            }
        }

        function u(e) {
            if (!(0, o["default"])(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if ("undefined" == typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (m)throw new Error("Reducers may not dispatch actions.");
            try {
                m = !0, c = p(c, e)
            } finally {
                m = !1
            }
            for (var t = f = y, n = 0; n < t.length; n++)t[n]();
            return e
        }

        function d(e) {
            if ("function" != typeof e)throw new Error("Expected the nextReducer to be a function.");
            p = e, u({type: l.INIT})
        }

        if ("function" == typeof t && "undefined" == typeof n && (n = t, t = void 0), "undefined" != typeof n) {
            if ("function" != typeof n)throw new Error("Expected the enhancer to be a function.");
            return n(i)(e, t)
        }
        if ("function" != typeof e)throw new Error("Expected the reducer to be a function.");
        var p = e, c = t, f = [], y = f, m = !1;
        return u({type: l.INIT}), {dispatch: u, subscribe: s, getState: a, replaceReducer: d}
    }

    t.__esModule = !0, t.ActionTypes = void 0, t["default"] = i;
    var a = n(86), o = r(a), l = t.ActionTypes = {INIT: "@@redux/INIT"}
}, function (e, t, n) {
    function r(e) {
        if (!a(e) || d.call(e) != o || i(e))return !1;
        var t = p(e);
        if (null === t)return !0;
        var n = t.constructor;
        return "function" == typeof n && n instanceof n && s.call(n) == u
    }

    var i = n(87), a = n(88), o = "[object Object]", l = Object.prototype, s = Function.prototype.toString, u = s.call(Object), d = l.toString, p = Object.getPrototypeOf;
    e.exports = r
}, function (e, t) {
    function n(e) {
        var t = !1;
        if (null != e && "function" != typeof e.toString)try {
            t = !!(e + "")
        } catch (n) {
        }
        return t
    }

    e.exports = n
}, function (e, t) {
    function n(e) {
        return !!e && "object" == typeof e
    }

    e.exports = n
}, function (e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function i(e, t) {
        var n = t && t.type, r = n && '"' + n.toString() + '"' || "an action";
        return 'Reducer "' + e + '" returned undefined handling ' + r + ". To ignore an action, you must explicitly return the previous state."
    }

    function a(e) {
        Object.keys(e).forEach(function (t) {
            var n = e[t], r = n(void 0, {type: l.ActionTypes.INIT});
            if ("undefined" == typeof r)throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
            var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
            if ("undefined" == typeof n(void 0, {type: i}))throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + l.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
        })
    }

    function o(e) {
        for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
            var o = t[r];
            "function" == typeof e[o] && (n[o] = e[o])
        }
        var l, s = Object.keys(n);
        try {
            a(n)
        } catch (u) {
            l = u
        }
        return function () {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], t = arguments[1];
            if (l)throw l;
            for (var r = !1, a = {}, o = 0; o < s.length; o++) {
                var u = s[o], d = n[u], p = e[u], c = d(p, t);
                if ("undefined" == typeof c) {
                    var f = i(u, t);
                    throw new Error(f)
                }
                a[u] = c, r = r || c !== p
            }
            return r ? a : e
        }
    }

    t.__esModule = !0, t["default"] = o;
    var l = n(85), s = n(86), u = (r(s), n(90));
    r(u)
}, function (e, t) {
    "use strict";
    function n(e) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(e);
        try {
            throw new Error(e)
        } catch (t) {
        }
    }

    t.__esModule = !0, t["default"] = n
}, function (e, t) {
    "use strict";
    function n(e, t) {
        return function () {
            return t(e.apply(void 0, arguments))
        }
    }

    function r(e, t) {
        if ("function" == typeof e)return n(e, t);
        if ("object" != typeof e || null === e)throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var r = Object.keys(e), i = {}, a = 0; a < r.length; a++) {
            var o = r[a], l = e[o];
            "function" == typeof l && (i[o] = n(l, t))
        }
        return i
    }

    t.__esModule = !0, t["default"] = r
}, function (e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function i() {
        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)t[n] = arguments[n];
        return function (e) {
            return function (n, r, i) {
                var o = e(n, r, i), s = o.dispatch, u = [], d = {
                    getState: o.getState, dispatch: function (e) {
                        return s(e)
                    }
                };
                return u = t.map(function (e) {
                    return e(d)
                }), s = l["default"].apply(void 0, u)(o.dispatch), a({}, o, {dispatch: s})
            }
        }
    }

    var a = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    t.__esModule = !0, t["default"] = i;
    var o = n(93), l = r(o)
}, function (e, t) {
    "use strict";
    function n() {
        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)t[n] = arguments[n];
        return function () {
            if (0 === t.length)return arguments.length <= 0 ? void 0 : arguments[0];
            var e = t[t.length - 1], n = t.slice(0, -1);
            return n.reduceRight(function (e, t) {
                return t(e)
            }, e.apply(void 0, arguments))
        }
    }

    t.__esModule = !0, t["default"] = n
}, function (e, t, n) {
    var r = n(84).combineReducers;
    e.exports = r({app: n(95), viewConfig: n(97), grid: n(98), view: n(99), list: n(100)})
}, function (e, t, n) {
    (function (t) {
        function r(e, n) {
            var r;
            if ("undefined" == typeof e)return i;
            switch (n.type) {
                case a.app.REGISTER:
                    return r = t.merge({}, e, n.payload);
                default:
                    return e
            }
        }

        var i = {}, a = n(96);
        e.exports = r
    }).call(t, n(29))
}, function (e, t) {
    e.exports = {
        app: {REGISTER: "app/REGISTER"},
        viewConfig: {REGISTER: "viewConfig/REGISTER"},
        grid: {
            REGISTER: "grid/REGISTER",
            RESET: "grid/RESET",
            CHANGE: "grid/CHANGE",
            COLUMNEVENT: "grid/COLUMN_EVENT",
            DS: {REQUESTSTART: "grid/ds/REQUEST_START", REQUESTEND: "grid/ds/REQUEST_END"}
        },
        view: {REGISTERWIDGET: "view/REGISTER_WIDGET"},
        list: {REGISTER: "list/REGISTER"}
    }
}, function (e, t, n) {
    (function (t) {
        function r(e, n) {
            var r;
            if ("undefined" == typeof e)return i;
            switch (n.type) {
                case a.viewConfig.REGISTER:
                    return r = t.merge({}, e, n.payload);
                default:
                    return e
            }
        }

        var i = {}, a = n(96);
        e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e, n) {
            var r, s, u;
            if ("undefined" == typeof e)return a;
            switch (r = t.merge({}, e), n.type) {
                case o.grid.REGISTER:
                    return s = i(n.payload, r), u = i(n.payload, t.merge({}, n.payload)), s && s.version < u.version && t.unset(s, "options"), t.merge({}, r, n.payload);
                case o.grid.RESET:
                    return s = i(n.payload, r), s && s.options && (t.unset(s, "options"), t.unset(s, "selectedItems")), t.merge({}, r, n.payload);
                case o.grid.DS.REQUESTSTART:
                case o.grid.DS.REQUESTEND:
                    return s = i(n.payload, r), s && l.checkNested(s, "options", "dataSource", "filter") && t.unset(s, "options.dataSource.filter"), s && l.checkNested(s, "options", "dataSource", "group") && t.unset(s, "options.dataSource.group"), t.merge({}, r, n.payload);
                case o.grid.COLUMNEVENT:
                case o.grid.CHANGE:
                    return s = i(n.payload, r), t.merge({}, r, n.payload);
                default:
                    return e
            }
        }

        function i(e, t) {
            var n = e ? l.checkNested(t, "container", e.active) : !1, r = n ? t.container[e.active] : null, i = l.checkNested(e, "container", e.active) ? e.container[e.active].active : null, a = e ? l.checkNested(t, "container", e.active, "instances", i) : !1, o = a ? r.instances[i] : null;
            return o
        }

        var a = {}, o = n(96), l = n(33);
        e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e, n) {
            var r;
            if ("undefined" == typeof e)return i;
            switch (n.type) {
                case a.view.REGISTERWIDGET:
                    return r = t.merge({}, e, n.payload);
                default:
                    return e
            }
        }

        var i = {}, a = n(96);
        e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e, n) {
            var r;
            if ("undefined" == typeof e)return i;
            switch (n.type) {
                case a.list.REGISTER:
                    return r = t.merge({}, e, n.payload);
                default:
                    return e
            }
        }

        var i = {}, a = n(96);
        n(33);
        e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r() {
            var e, n, r = o.getAppId(), a = {}, u = {app: {localState: !1}, viewConfig: {}, view: {}, grid: {}};
            return s.filter({key: r}), e = s.get(r), i(r), e && (n = JSON.parse(e.value), n.app.appStateFormat === l.AppStateFormat && (a = t.merge({}, n, {app: {localState: !0}}))), t.merge({}, u, a)
        }

        function i(e) {
            window.addEventListener("beforeunload", function (t) {
                var n = cc.redux.store.getState();
                s.read();
                var r = s.get(e) || s.add({key: e});
                r.set("value", JSON.stringify(n)), s.sync().then(function () {
                    return t
                })
            })
        }

        var a = n(79), o = n(55), l = n(35), s = (n(42), a({
            itemBase: "cc-app-state",
            separator: "-",
            schema: {
                model: {
                    id: "key",
                    fields: {key: {editable: !0, type: "string"}, value: {editable: !0, type: "string"}}
                }
            }
        }));
        e.exports = r()
    }).call(t, n(29))
}, function (e, t) {
    "use strict";
    function n(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++)n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function r(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    }

    function i(e, t, i, a) {
        switch ("undefined" == typeof e ? "undefined" : r(e)) {
            case"object":
                return "function" == typeof e[a] ? e[a].apply(e, n(i)) : e[a];
            case"function":
                return e(t);
            default:
                return e
        }
    }

    function a() {
        function e() {
            x.forEach(function (e, t) {
                var n = e.started, a = e.startedTime, l = e.action, u = e.prevState, d = e.error, c = e.took, f = e.nextState, m = x[t + 1];
                m && (f = m.prevState, c = m.started - n);
                var h = E(l), v = "function" == typeof p ? p(function () {
                    return f
                }, l) : p, b = s(a), C = T.title ? "color: " + T.title(h) + ";" : null, S = "action " + (g ? b : "") + " " + h.type + " " + (y ? "(in " + c.toFixed(2) + " ms)" : "");
                try {
                    v ? T.title ? o.groupCollapsed("%c " + S, C) : o.groupCollapsed(S) : T.title ? o.group("%c " + S, C) : o.group(S)
                } catch (I) {
                    o.log(S)
                }
                var w = i(r, h, [u], "prevState"), _ = i(r, h, [h], "action"), D = i(r, h, [d, u], "error"), k = i(r, h, [f], "nextState");
                w && (T.prevState ? o[w]("%c prev state", "color: " + T.prevState(u) + "; font-weight: bold", u) : o[w]("prev state", u)), _ && (T.action ? o[_]("%c action", "color: " + T.action(h) + "; font-weight: bold", h) : o[_]("action", h)), d && D && (T.error ? o[D]("%c error", "color: " + T.error(d, u) + "; font-weight: bold", d) : o[D]("error", d)), k && (T.nextState ? o[k]("%c next state", "color: " + T.nextState(f) + "; font-weight: bold", f) : o[k]("next state", f));
                try {
                    o.groupEnd()
                } catch (I) {
                    o.log("—— log end ——")
                }
            }), x.length = 0
        }

        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], n = t.level, r = void 0 === n ? "log" : n, a = t.logger, o = void 0 === a ? console : a, l = t.logErrors, d = void 0 === l ? !0 : l, p = t.collapsed, c = t.predicate, f = t.duration, y = void 0 === f ? !1 : f, m = t.timestamp, g = void 0 === m ? !0 : m, h = t.transformer, v = t.stateTransformer, b = void 0 === v ? function (e) {
            return e
        } : v, C = t.actionTransformer, E = void 0 === C ? function (e) {
            return e
        } : C, S = t.errorTransformer, I = void 0 === S ? function (e) {
            return e
        } : S, w = t.colors, T = void 0 === w ? {
            title: function () {
                return "#000000"
            }, prevState: function () {
                return "#9E9E9E"
            }, action: function () {
                return "#03A9F4"
            }, nextState: function () {
                return "#4CAF50"
            }, error: function () {
                return "#F20404"
            }
        } : w;
        if ("undefined" == typeof o)return function () {
            return function (e) {
                return function (t) {
                    return e(t)
                }
            }
        };
        h && console.error("Option 'transformer' is deprecated, use stateTransformer instead");
        var x = [];
        return function (t) {
            var n = t.getState;
            return function (t) {
                return function (r) {
                    if ("function" == typeof c && !c(n, r))return t(r);
                    var i = {};
                    x.push(i), i.started = u.now(), i.startedTime = new Date, i.prevState = b(n()), i.action = r;
                    var a = void 0;
                    if (d)try {
                        a = t(r)
                    } catch (o) {
                        i.error = I(o)
                    } else a = t(r);
                    if (i.took = u.now() - i.started, i.nextState = b(n()), e(), i.error)throw i.error;
                    return a
                }
            }
        }
    }

    var o = function (e, t) {
        return new Array(t + 1).join(e)
    }, l = function (e, t) {
        return o("0", t - e.toString().length) + e
    }, s = function (e) {
        return "@ " + l(e.getHours(), 2) + ":" + l(e.getMinutes(), 2) + ":" + l(e.getSeconds(), 2) + "." + l(e.getMilliseconds(), 3)
    }, u = "undefined" != typeof performance && "function" == typeof performance.now ? performance : Date;
    e.exports = a
}, function (e, t, n) {
    e.exports = {app: n(104), viewConfig: n(105), grid: n(106), view: n(107), list: n(108)}
}, function (e, t, n) {
    (function (t) {
        function r(e) {
            var n = {appStateFormat: a.AppStateFormat}, r = ["Version"];
            if (!e)throw new Error("actions.app.register(options) missing required param");
            if (!t.isPlainObject(e))throw new Error(" actions.app.register (options {object}) wrong param type(s)");
            return n.Id = e.Id, t.each(r, function (t) {
                e.hasOwnProperty(t) && (n[t] = e[t])
            }), {type: i.app.REGISTER, payload: n}
        }

        var i = n(96), a = n(35);
        e.exports = {register: r}
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e) {
            var n = {}, r = ["Version"];
            if (!e)throw new Error("actions.viewConfig.register(options) missing required param");
            if (!t.isPlainObject(e))throw new Error(" actions.viewConfig.register (options {object}) wrong param type(s)");
            return n.Id = e.Id, t.each(r, function (t) {
                e.hasOwnProperty(t) && (n[t] = e[t])
            }), {type: i.viewConfig.REGISTER, payload: n}
        }

        var i = n(96);
        e.exports = {register: r}
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e, n, r, i) {
            var a;
            if (!n || !r || !i)throw new Error(e + " redux.actions.grid (containerId, gridId, options) missing required param");
            if (!t.isString(n) || !t.isString(r) || !t.isObject(i))throw new Error(e + " redux.actions.grid (containerId {string}, gridId {string}, options {object}) wrong param type(s)");
            return a = {active: n, container: {}}, a.container[n] = {
                active: r,
                instances: {}
            }, a.container[n].instances[r] = {}, {type: e, payload: a}
        }

        function i(e, n) {
            var i = r(d.grid.RESET, e, n, {}), a = i.payload, o = a.container[e].instances[n];
            return t.merge(o, {selectedItems: []}), i
        }

        function a(e, n, i) {
            var a = r(d.grid.REGISTER, e, n, {}), o = a.payload, l = o.container[e].instances[n];
            return t.merge(l, {version: i.Version, listId: i.ListId}), a
        }

        function o(e, n, i) {
            var a, o, l = r(d.grid.DS.REQUESTSTART, e, n, i), s = l.payload, u = s.container[e].instances[n], c = cc.redux.store.getState();
            return a = p.checkNested(c, "grid", "container", e, "instances", n) ? c.grid.container[e].instances[n] : {}, o = p.checkNested(c, "list", a.listId, "Version") ? c.list[a.listId].Version : null, t.merge(u, {
                isLoading: !0,
                selectedItems: [],
                listVersion: o
            }), l
        }

        function l(e, n, i) {
            var a = r(d.grid.DS.REQUESTEND, e, n, i), o = a.payload, l = o.container[e].instances[n];
            return t.merge(l, {isLoading: !1, options: i}), a
        }

        function s(e, n, i) {
            var a = r(d.grid.COLUMNEVENT, e, n, i), o = a.payload, l = o.container[e].instances[n];
            return t.merge(l, {isLoading: !1, options: i}), a
        }

        function u(e, n, i) {
            var a, o = r(d.grid.CHANGE, e, n, i.sender.getOptions()), l = o.payload, s = l.container[e].instances[n];
            return a = t.map(i.sender.select(), function (e) {
                var t = i.sender.dataItem(e);
                return t.Id
            }), t.merge(s, {selectedItems: a}), o
        }

        var d = n(96), p = n(33);
        e.exports = {reset: i, register: a, change: u, columnEvent: s, ds: {requestStart: o, requestEnd: l}}
    }).call(t, n(29))
}, function (e, t, n) {
    function r(e, t) {
        var n = {};
        if (!e || !t)throw new Error("actions.view.registerWidget(viewId, gridId) missing required param");
        return n.active = e, n.instances = {}, n.instances[e] = {widgets: {}}, n.instances[e].widgets[t] = "kendoGrid", {
            type: i.view.REGISTERWIDGET,
            payload: n
        }
    }

    var i = ($.extend, n(96));
    e.exports = {registerWidget: r}
}, function (e, t, n) {
    (function (t) {
        function r(e) {
            var n, r = {}, a = ["Version"];
            if (!e)throw new Error("actions.list.register(options) missing required param");
            if (!t.isPlainObject(e))throw new Error(" actions.list.register (options {object}) wrong param type(s)");
            return n = r[e.Id] = {}, t.each(a, function (t) {
                e.hasOwnProperty(t) && (n[t] = e[t])
            }), {type: i.list.REGISTER, payload: r}
        }

        var i = n(96);
        e.exports = {register: r}
    }).call(t, n(29))
}, function (e, t, n) {
    e.exports = {
        createBatchExecutor: n(110),
        getListItemDataSourceById: n(114),
        getListItemDataSourceByIdAsPromise: n(117),
        getListModelById: n(118),
        invokeAggregationRequest: n(122),
        sendEmail: n(124),
        getItemHistory: n(125),
        getListsDsByConnectionId: n(126),
        getLibraryDsByConnectionId: n(127),
        getConnectionListModelById: n(128),
        getConnectionListItemDataSourceById: n(129),
        getConnectionListItemDataSourceByIdAsPromise: n(130),
        getLocalStorageDS: n(79),
        getReadOnlyKendoDS: n(119),
        getHierarchicalLibraryDataSource: n(131),
        getConnectionLibraryDataSourceById: n(132),
        getConnectionsAsPromise: n(121),
        removeFromRecycleBin: n(133),
        toggleRecycleBinFlag: n(134)
    }
}, function (e, t, n) {
    (function (t) {
        function r() {
            var e = [], t = a("batch_"), n = {
                Accept: "multipart/mixed",
                prefer: "odata.continue-on-error",
                "Content-Type": "multipart/mixed; boundary=" + t,
                "OData-MaxVersion": "4.0",
                "OData-Version": "4.0"
            };
            this.addRequest = function (t, n) {
                var r = new o(t, n);
                return e.push(r), r
            }, this.getRequests = function () {
                return e
            }, this.getBatchBoundary = function () {
                return t
            }, this.getHeader = function () {
                return n
            }, this.clearRequests = function () {
                e = []
            }
        }

        function i() {
            return new r
        }

        function a(e) {
            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substr(1)
            }

            return e + t() + "-" + t() + "-" + t()
        }

        var o = n(111), l = n(112), s = n(113), u = $.extend, d = "/odata/$batch";
        u(r.prototype, {
            buildBatch: function () {
                var e, n = [], r = this.getBatchBoundary();
                return t.each(this.getRequests(), function (e, t) {
                    n = n.concat(l(r, e, t))
                }), n.push("--" + r), n[n.length - 1] !== "--" + r && n.push("--" + r), e = n.join("\r\n")
            }, execute: function () {
                var e = this, t = $.Deferred();
                return $.ajax({
                    url: d,
                    type: "POST",
                    data: this.buildBatch(),
                    headers: this.getHeader(),
                    success: function (n) {
                        var r = s(n);
                        e.clearRequests(), t.resolve(r)
                    },
                    error: function (n) {
                        e.clearRequests(), t.reject(n)
                    }
                }), t.promise()
            }
        }), e.exports = i
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e, n) {
            if (n = n || {}, !e || "string" != typeof e)throw new Error("Missing or wrong mandatory parameter 'endpoint' {string}");
            if (n.type && -1 === t.indexOf(a, n.type.toUpperCase()))throw new Error("Invalid type. Allowed " + a.join(","));
            this.endpoint = e, this.type = n.type ? n.type.toUpperCase() : "GET", this.headers = o({}, l, n.header), n.data && (this.data = n.data)
        }

        var i = n(55), a = ["GET", "POST", "PUT", "DELETE"], o = $.extend, l = {
            Accept: "application/json;odata.metadata=minimal",
            "OData-Version": "4.0",
            "Content-Type": "application/json",
            AppId: i.getAppId(),
            "OData-MaxVersion": "4.0"
        };
        e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function n(e, t, n) {
            var i = [], a = "*";
            return i.push("--" + e), i.push("Content-Type: application/http"), i.push("Content-Transfer-Encoding: binary"), i.push(""), i.push(t.type + " " + t.endpoint + " HTTP/1.1"), i.push("Content-ID: " + (n + 1)), t.data && "PUT" === t.type && !t.headers.hasOwnProperty("If-Match") && (t.data.hasOwnProperty("@odata.etag") ? a = t.data.hasOwnProperty("@odata.etag") ? t.data["@odata.etag"] : "*" : t.data.hasOwnProperty("_etag") && (a = t.data._etag, delete t.data._etag, t.data["@odata.etag"] = a), t.headers["If-Match"] = a), i = i.concat(r(t.headers)), t.data && "GET" !== t.type && (i.push(""), i.push(JSON.stringify(t.data))), i.push(""), i
        }

        function r(e) {
            var n = [];
            return t.each(e, function (e, t) {
                n.push(t + ": " + e)
            }), n
        }

        e.exports = n
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function n(e) {
            var n = e.substring(0, 52), i = e.split(n), o = /Content-Type: application\/http/, l = [];
            return t.each(i, function (e, t) {
                var n, i, s, u = /^HTTP\/1\.\d (\d{3}) (.*)$/i, d = e.split("\r\n"), p = u.exec(d[4]), c = o.exec(e);
                c && (p && (n = parseInt(p[1], 10), i = p[2]), s = a({}, {
                    status: n,
                    statusText: i,
                    data: r(n, d)
                }), l.push(s))
            }), l
        }

        function r(e, t) {
            switch (e) {
                case 400:
                case 404:
                case 500:
                case 200:
                    var n = t.slice(7);
                    return n.splice(-1, 1), i(n.join(""));
                case 204:
                case 201:
                    return i(t[9]);
                default:
                    return i(t[4])
            }
        }

        function i(e) {
            try {
                var t = JSON.parse(e);
                if (t && "object" == typeof t && null !== t)return t
            } catch (n) {
            }
            return e
        }

        var a = $.extend;
        e.exports = n
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e, n, r) {
            function u() {
                return h
            }

            function d() {
                h = !0
            }

            function p(e) {
                v = e
            }

            function c() {
                return v
            }

            if (n = n || {}, n.schema = n.schema || {}, r = r || s, "string" != typeof e)throw new Error("getListItemDataSourceById(guid, options) required property guid (string) wrong or missing");
            if ("object" != typeof n.schema.model)throw new Error("getListItemDataSourceById(guid, options) required property options.schema.model (object) wrong or missing");
            var f = n.schema.parse, y = n.schema.serialize, m = n.requestStart, g = n.requestEnd, h = (n.pageSize ? parseInt(n.pageSize, 10) : void 0, !1), v = !1, b = "{0}Connections('{2}')/Lists('{1}')/ListItems", C = a.format(b, l, e, r);
            if (!e)throw new Error("getListItemDataSourceById(guid) missing required parameter 'guid'");
            return a.checkNested(n, "ccModel", "capabilities", "Count") && (n.count = n.ccModel.capabilities.Count), n.endpoint = C, n.schema.parse = function (e) {
                var t = a.checkNested(n, "ccModel", "fieldMap") ? n.ccModel.fieldMap : null, r = o(e, t);
                return p(e["@odata.nextLink"]), f && (r = f(r)), r
            }, n.schema.serialize = function (e) {
                var t = a.checkNested(n, "ccModel", "fieldMap") ? n.ccModel.fieldMap : null, r = o(e, t, !0);
                return y && (r = y(r)), r
            }, n.change = function (e) {
                var n = parseInt(this.pageSize(), 10), r = this.page(), i = this.total(), a = c();
                this._cc = {
                    sort: t.map(this.sort(), function (e) {
                        return {dir: e.dir, field: e.field}
                    }), group: this.group()
                }, a ? (d(), this._total = n * r + 1, this.transport._nextLink = a) : !a && u() && (this._nextLink = "", this._total = n * (r - 1) + i)
            }, n.requestEnd = function (e) {
                this.page() > 1 && h && a.checkNested(e, "response", "value") && t.isArray(e.response.value) && (e.response.value = this._pristineData.concat(e.response.value)), g && g.call(this, e)
            }, n.requestStart = function (e) {
                var n, r, i = {
                    sort: t.map(this.sort(), function (e) {
                        return {dir: e.dir, field: e.field}
                    }), group: this.group()
                };
                m && m.call(this, e), this._cc && !t.isEqual(i, this._cc) && (e.preventDefault(), n = t.map(i.group, function (e) {
                    return {field: e.field, dir: e.dir}
                }), n = t.uniqBy(n.concat(i.sort || []), "field"), this._cc = {
                    group: i.group,
                    sort: n
                }, r = {
                    group: i.group,
                    sort: n,
                    filter: this.filter(),
                    take: parseInt(this.take(), 10),
                    page: 1
                }, this.query(r))
            }, new i(n)
        }

        var i = n(70), a = n(33), o = n(115), l = ($.extend, "/odata/"), s = "E3CC8646-243C-4D95-BD84-67224112411D";
        e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e, n, r) {
            var a = e.hasOwnProperty("@odata.context") && e.hasOwnProperty("value") && t.isArray(e.value), o = a ? e.value : e, l = ["Lookup", "Relation", "User"], s = "_groupExprFor", u = {
                MultiLookup: i.getLookupValue,
                MultiRelation: i.getRelationValue,
                MultiUser: i.getUserValue,
                MultiChoice: i.getChoiceValue
            };
            return n ? (o = t.isArray(o) ? o : [o], t.map(o, function (e) {
                return t.each(n, function (n) {
                    var i = n.StaticName, a = t.indexOf(l, n.FieldType) > -1, o = u.hasOwnProperty(n.FieldType);
                    r ? (a && t.isEqual(e[i], {}) && (e[i] = null), o && e.hasOwnProperty(s + i) && delete e[s + i]) : (!a || e.hasOwnProperty(i) && null !== e[i] || (e[i] = {}), o && (e[s + i] = u[n.FieldType](n, e)))
                }), e
            }), r ? o : a ? (e.value = o, e) : o[0]) : e
        }

        var i = n(116);
        e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e, t) {
            return p(e, t, "LookUpDisplayValue")
        }

        function i(e, t) {
            return p(e, t, "Title")
        }

        function a(e, t, n) {
            return n = n || {showAsLink: !0}, p(e, t, "ChildName", n)
        }

        function o(e, t) {
            return p(e, t)
        }

        function l(e, t) {
            return p(e, t, "DisplayName")
        }

        function s(e, t) {
            function n(e, t) {
                return t[e.StaticName] ? kendo.toString(t[e.StaticName], e.Format || "n2") : ""
            }

            var r, i = e.Format || "", a = e.DataType || "String";
            switch (a) {
                case"DateTime":
                    return r = u(e, t);
                case"Double":
                    var o, l = /^[A-Z]{3}/, s = i.match(l);
                    return i = s ? s[0] : "", "" !== i ? (o = y({}, e, {Format: i}), r = d(o, t)) : r = n(e, t), r;
                default:
                    return t.hasOwnProperty(e.StaticName) ? t[e.StaticName] : ""
            }
        }

        function u(e, t) {
            return t[e.StaticName] ? kendo.toString(t[e.StaticName], e.Format || "d") : ""
        }

        function d(e, t) {
            var n = e.Format || "USD", r = kendo.toString(t[e.StaticName], "c", n);
            return cc.fn.addSymbol(n), r ? r : ""
        }

        function p(e, n, r, i) {
            var a, o = [];
            return null === n[e.StaticName] || void 0 === n[e.StaticName] ? "" : n.hasOwnProperty(e.StaticName) && (a = "function" == typeof n[e.StaticName].toJSON ? n[e.StaticName].toJSON() : n[e.StaticName], t.isArray(a) && a.length > 0) ? (t.each(a, function (t) {
                r ? o.push(f.checkNested(t, r) ? c(t[r], e, t, i) : "") : o.push(t)
            }), o.join(", ")) : f.checkNested(n, e.StaticName, r) ? c(n[e.StaticName][r], e, a, i) : "";
        }

        function c(e, n, r, i) {
            i = i || {};
            var a, o, l, s, u = i.hasOwnProperty("showAsLink") ? i.showAsLink : !0, d = '<a class="cc-link" href="{0}" target="_blank">{1}</a>', p = {}, c = ["doc", "docx", "dotx", "dot", "dotm", "xls", "xlsx", "xlsm", "xlm", "xlsb", "ppt", "pptx", "pps", "ppsx", "potx", "pot", "pptm", "potm", "ppsm"];
            return u && n.hasOwnProperty("_externalLink") ? n._externalLink.hasOwnProperty("hrefProp") ? f.format(d, r[n._externalLink.hrefProp], e) : n._externalLink.hasOwnProperty("hrefTemplate") ? f.strInArray(r.File_x0020_Type, c) > -1 ? (t.each(n._externalLink.params, function (e, t) {
                e.hasOwnProperty("replace") ? p[t] = r[e.prop].replace(e.replace, e["with"]) : p[t] = r[e.prop]
            }), a = f.format(n._externalLink.hrefTemplate, p), f.format(d, a, e)) : (o = n._externalLink.hrefTemplate.split("/"), t.last(o).indexOf("{0}") > -1 && o.splice(-1, 1), l = r.FileRef.split("/"), s = t.union(o, l), f.format(d, encodeURI(s.join("/")), e)) : e : e
        }

        var f = n(33), y = $.extend;
        e.exports = {
            getCalculationValue: s,
            getChoiceValue: o,
            getUserValue: l,
            getCurrencyValue: d,
            getLookupValue: r,
            getDateTimeValue: u,
            getRelationValue: i,
            getDocumentRelationValue: a
        }
    }).call(t, n(29))
}, function (e, t, n) {
    function r(e, t) {
        if (t = t || {}, "string" != typeof e)throw new Error("getListItemDataSourceByIdAsPromise(guid, {options}) missing required param 'guid'");
        return a(e).then(function (n) {
            var r = {schema: {model: n.listModel}, ccModel: n};
            return i(e, o(!0, {}, r, t))
        })
    }

    var i = n(114), a = n(118), o = $.extend;
    e.exports = r
}, function (e, t, n) {
    (function (t) {
        function r(e, n, r) {
            n = n || {}, r = r || f;
            var l, d, p = "{0}Connections('{2}')/Lists('{1}')", b = u.format(p, c, e, r), E = $.Deferred();
            if (!e)throw new Error("getListModelById(guid) missing required parameter 'guid'");
            return n.endpoint = b, n.cacheable = !0, n.schema = {model: {}}, l = new s(n), d = l.read({$expand: "Fields,RelatedChildren($expand=Fields)"}), $.when.apply($, [y, d]).then(function (n) {
                var s = n[0].value || [], d = t.find(s, function (e) {
                        return e.Id.toLowerCase() === r.toLowerCase()
                    }) || {}, p = d.hasOwnProperty("Capabilities") ? d.Capabilities : {}, c = u.isInternalConnection(r, s), f = {}, y = {}, b = {}, I = l.data(), w = I[0] && I[0].toJSON ? I[0].toJSON() : {}, T = w.Fields ? w.Fields : [], x = t.filter(T, function (e) {
                    return !e.Deleted
                }), _ = w.RelatedChildren ? w.RelatedChildren : [], D = w.Title ? w.Title : "", k = c ? S.concat(x) : x, L = c ? C : {};
                g.dispatch(h.list.register(w)), t.each(k, function (e, t) {
                    var n = e.StaticName;
                    f[n] = e, y[n] = a(e, s), b[n] = o(e, r)
                }), E.resolve({
                    config: w,
                    fields: k,
                    fieldMap: f,
                    listModel: v(!0, {}, m.ListItem, {fields: y}),
                    columnModel: v(!0, {}, L, b),
                    relationMap: i(_, e),
                    title: D,
                    capabilities: p
                })
            }), E.promise()
        }

        function i(e, n) {
            var r = [];
            return t.each(e, function (e) {
                r.push({
                    listTitle: e.Title,
                    listId: e.Id,
                    relationField: t.find(e.Fields, {RelatedListId: n}).StaticName
                })
            }), r
        }

        function a(e, n) {
            var r, i, a = {}, o = e.FieldType, s = ["DocumentRelation", "MultiDocumentRelation"], u = b[o], d = ["Required", "Hidden"], p = ["defaultValue", "editable"];
            return t.each(d, function (t) {
                e.hasOwnProperty(t) && (a[t.toLowerCase()] = e[t], "Required" === t && e[t] && (a.validation = {required: !0}))
            }), t.each(p, function (e) {
                u.hasOwnProperty(e) && (a[e] = u[e])
            }), t.indexOf(s, e.FieldType) > -1 && (r = t.find(n, {Id: e.ConnectionId}), e._externalLink = l(r)), b[e.FieldType] && (b[e.FieldType].type ? a.type = b[e.FieldType].type : "Calculated" === e.FieldType && (i = e.DataType || "String", a.type = E[i] || "string")), a
        }

        function o(e, n) {
            var r = {}, i = ["sortable", "groupable", "filterable", "format", "editable"], a = e.FieldType, o = b[a];
            if (o)return r.field = e.StaticName, r.title = e.Title, t.each(i, function (e) {
                o.hasOwnProperty(e) && (r[e] = o[e])
            }), "Choice" === a && (r.values = t.map(e.Choices, function (e) {
                return {text: e.Text, value: e.Value}
            })), "MultiChoice" === a && (r.editor = function (t, n) {
                return p.choiceEditor(t, n, e)
            }, r.template = function (t) {
                return d.getChoiceValue(e, t)
            }), "Note" === a && (r.editor = function (t, n) {
                return p.rtfEditor(t, n, e)
            }, r.encoded = !1), "Lookup" !== a && "MultiLookup" !== a || (r.editor = function (t, r) {
                return p.lookupEditor(t, r, e, n)
            }, r.template = function (t) {
                return d.getLookupValue(e, t)
            }), "User" !== a && "MultiUser" !== a || (r.editor = function (t, n) {
                return p.userEditor(t, n, e)
            }, r.template = function (t) {
                return d.getUserValue(e, t)
            }), "DateTime" === a && (r.editor = function (t, n) {
                return p.dateTimeEditor(t, n, e)
            }, r.template = function (t) {
                return d.getDateTimeValue(e, t)
            }), "Calculated" === a && (r.template = function (t) {
                return d.getCalculationValue(e, t)
            }), "Currency" === a && (r.editor = function (t, n) {
                return p.currencyEditor(t, n, e)
            }, r.template = function (t) {
                return d.getCurrencyValue(e, t)
            }), "Relation" !== a && "MultiRelation" !== a || (r.editor = function (t, r) {
                return p.relationEditor(t, r, e, n)
            }, r.template = function (t) {
                return d.getRelationValue(e, t)
            }), "DocumentRelation" !== a && "MultiDocumentRelation" !== a || (r.editor = function (t, r) {
                return p.documentRelationEditor(t, r, e, n)
            }, r.template = function (t) {
                return d.getDocumentRelationValue(e, t)
            }, r.templates = {
                link: r.template, text: function (t) {
                    return d.getDocumentRelationValue(e, t, {showAsLink: !1})
                }
            }), r
        }

        function l(e) {
            m.UniqueId ? m.UniqueId.replace(/\-/g, "") : "";
            return "Office365" === e.ConnectorId ? {
                hrefTemplate: u.format("{0}/{{0}}?d=w{{1}}", e.Url),
                params: [{prop: "ChildName"}, {prop: "UniqueId", replace: /\-/g, "with": ""}]
            } : {hrefProp: "FileUrl"}
        }

        var s = n(70), u = n(33), d = n(116), p = (n(119), n(120)), c = "/odata/", f = "E3CC8646-243C-4D95-BD84-67224112411D", y = n(121), m = n(72), g = n(83), h = n(103), v = $.extend, b = {
            Text: {
                type: "string",
                sortable: !0,
                groupable: !0,
                filterable: !0
            },
            Note: {type: "string", sortable: !1, groupable: !1, filterable: !0},
            DateTime: {
                type: "date",
                sortable: !0,
                groupable: !1,
                filterable: !0,
                defaultValue: null,
                nullable: !0,
                format: "{0:g}"
            },
            Counter: {type: "number", groupable: !1},
            Choice: {type: "string"},
            Lookup: {sortable: !0, groupable: !0, filterable: !0, defaultValue: null},
            Relation: {sortable: !0, groupable: !0, filterable: !0, defaultValue: null},
            DocumentRelation: {sortable: !1, groupable: !1, filterable: !1, defaultValue: null},
            Boolean: {type: "boolean", sortable: !0, filterable: !0},
            Number: {type: "number", sortable: !0, groupable: !0, filterable: !0},
            Currency: {type: "number", sortable: !0, groupable: !0, filterable: !0},
            MultiDocumentRelation: {sortable: !1, groupable: !1, filterable: !1, defaultValue: []},
            MultiChoice: {sortable: !0, groupable: !0, filterable: !1, defaultValue: []},
            MultiUser: {sortable: !0, groupable: !0, filterable: !1, defaultValue: []},
            MultiRelation: {sortable: !0, groupable: !0, filterable: !1, defaultValue: []},
            MultiLookup: {sortable: !0, groupable: !0, filterable: !1, defaultValue: []},
            File: {},
            Attachments: {},
            User: {sortable: !0, groupable: !0, filterable: !0, defaultValue: null},
            CustomId: {type: "string", editable: !1, sortable: !0, groupable: !0, filterable: !0},
            Calculated: {editable: !1, sortable: !0, groupable: !0, filterable: !0}
        }, C = {
            Id: {field: "Id", filterable: !0, sortable: !0, title: "Id"},
            CreatedBy: {field: "CreatedBy", filterable: !0, sortable: !1, title: "Created By"},
            CreateDate: {field: "CreateDate", filterable: !0, sortable: !0, format: "{0:g}", title: "Created"},
            ModifiedBy: {field: "ModifiedBy", filterable: !0, sortable: !1, title: "Modified By"},
            ModifiedDate: {field: "ModifiedDate", filterable: !0, sortable: !0, format: "{0:g}", title: "Modified"},
            Title: {field: "Title", filterable: !0, sortable: !0, groupable: !1, title: "Title"}
        }, E = {
            String: "string",
            Int32: "number",
            Double: "number",
            Boolean: "boolean",
            DateTime: "date"
        }, S = [{
            StaticName: "Title",
            Title: "Title",
            FieldType: "Text",
            Required: !1,
            DefaultView: !0,
            Hidden: !1
        }, {
            StaticName: "CreatedBy",
            Title: "Created By",
            FieldType: "User",
            Required: !1,
            Hidden: !1,
            isSystem: !0
        }, {
            StaticName: "CreateDate",
            Title: "Created Date",
            FieldType: "DateTime",
            Required: !1,
            Hidden: !1,
            isSystem: !0
        }, {
            StaticName: "ModifiedBy",
            Title: "Modified By",
            FieldType: "User",
            Required: !1,
            Hidden: !1,
            isSystem: !0
        }, {
            StaticName: "ModifiedDate",
            Title: "Modified Date",
            FieldType: "DateTime",
            Required: !1,
            Hidden: !1,
            isSystem: !0
        }];
        e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    var r = n(75);
    e.exports = function (e, t) {
        function i(e) {
            for (var t in e)(0 === t.indexOf("@odata") || t.indexOf("@odata.type") > 0) && delete e[t]
        }

        function a() {
            return t
        }

        t = t || {};
        var o;
        return o = new kendo.data.DataSource({
            autoBind: !1, transport: {
                read: function (t) {
                    var i = n(55).getAppId(), o = {
                        url: e,
                        type: "GET",
                        headers: {accept: "application/json;odata=verbose", AppId: i},
                        success: t.success,
                        error: t.error,
                        data: a()
                    };
                    r(o)
                }
            }, schema: {
                type: "json", data: function (e) {
                    return e = $.extend({}, e), i(e), e.value ? e.value : [e]
                }, total: function (e) {
                    var t = e.value && $.isArray(e.value) ? e.value.length : 1;
                    return t
                }
            }
        })
    }
}, function (e, t, n) {
    (function (t) {
        function r(e, t, n) {
            var r = Object.getPrototypeOf(t.model), i = (r.fields[t.field], ["d", "D", "Y"]), a = {format: "d"}, o = "kendoDatePicker";
            return n.Format && (a.format = n.Format, -1 === $.inArray(n.Format, i) && (o = "kendoDateTimePicker")), c(e, t, a, n, o)
        }

        function i(e, t, n) {
            var r = Object.getPrototypeOf(t.model), i = (r.fields[t.field], {format: "c", culture: n.Format});
            return p(e, t, i, n)
        }

        function a(e, t, n) {
            var r = Object.getPrototypeOf(t.model), i = r.fields[t.field], a = {editorMode: i.disableRTF ? "basic" : "full"}, o = !0, l = n.hasOwnProperty("NumberOfLines") ? n.NumberOfLines : 6, s = '<textarea name="{0}" data-bind="value: {1}" rows="{2}" style="width: 100%"></textarea>';
            return o ? y(e, t, a, n) : $(b(s, n.StaticName, t.field, l)).appendTo(e)
        }

        function o(e, n, r) {
            var i, a = "MultiUser" === r.FieldType, o = (Object.getPrototypeOf(n.model), cc.api.getUsersDS({
                sort: [{
                    field: "DisplayName",
                    dir: "asc"
                }], schema: {
                    parse: function (e) {
                        var n = e.value || [];
                        return e.value = t.map(n, function (e) {
                            return v(!0, e, {"@odata.type": "#CorasCloud.Entities.User"})
                        }), e
                    }
                }
            }));
            return i = {
                autoBind: "undefined" != typeof $(e).data("kendoAutoBind") ? $(e).data("kendoAutoBind") : !1,
                valuePrimitive: "undefined" != typeof $(e).data("kendoValuePrimitive") ? $(e).data("kendoValuePrimitive") : !1,
                ccFilter: {operator: "startswith", field: "DisplayName", ignoreCase: !0},
                filter: "startswith",
                dataTextField: "DisplayName",
                dataValueField: "Id",
                dataSource: o,
                optionLabel: "Select ..."
            }, a && (i.autoClose = !1, delete i.optionLabel, i.placeholder = "Select ..."), f(e, n, i, r)
        }

        function l(e, t, n, r) {
            var i, a = "MultiDocumentRelation" === n.FieldType, o = null !== n.ConnectionId ? n.ConnectionId : r, l = n.LookUpListID, s = location.hash.match(/\/item\/(.+)/), u = (t.model.isNew() && s && s[1], m(t)), d = {
                connection: o,
                library: l,
                isMulti: a,
                field: t.field,
                model: t.model
            };
            return i = $('<file-multiselect params="{connection: connection, library: library, isMulti: isMulti, field: field, model: model}"></file-multiselect>').attr(u).appendTo(e), ko.applyBindings(d, i[0]), i
        }

        function s(e, n, r, i) {
            var a, o, l, s = "MultiRelation" === r.FieldType, u = null !== r.ConnectionId ? r.ConnectionId : i, d = location.hash.match(/\/item\/(.+)/), p = n.model.isNew() && d && d[1], c = [r.LookUpDisplayField, "Id"], y = Object.getPrototypeOf(n.model);
            return a = cc.api.getConnectionListItemDataSourceById(u, r.LookUpListID, {
                select: c,
                sort: [{field: r.LookUpDisplayField, dir: "asc"}],
                schema: {
                    model: y.fields, parse: function (e) {
                        var n = e.value || [];
                        return e.value = t.map(n, function (e) {
                            return {
                                "@odata.type": "#CorasCloud.Entities.Relation",
                                ItemId: e.Id,
                                Title: e[r.LookUpDisplayField]
                            }
                        }), e
                    }
                }
            }), o = {
                autoBind: "undefined" != typeof $(e).data("kendoAutoBind") ? $(e).data("kendoAutoBind") : !1,
                valuePrimitive: "undefined" != typeof $(e).data("kendoValuePrimitive") ? $(e).data("kendoValuePrimitive") : !1,
                ccFilter: {operator: "startswith", field: r.LookUpDisplayField},
                filter: "startswith",
                dataTextField: "Title",
                dataValueField: "ItemId",
                dataSource: a,
                ignoreCase: !1,
                optionLabel: "Select ..."
            }, s ? (o.autoClose = !1, delete o.optionLabel, o.placeholder = "Select ...") : p && (o.autoBind = !0, o.optionLabel = null, o.enable = !1, o.dataBound = function () {
                return l = d[1], function () {
                    var e = t.findIndex(this.dataItems(), {ItemId: l});
                    e > -1 && (this.select(e), this.trigger("change"))
                }
            }()), f(e, n, o, r)
        }

        function u(e, t, n) {
            var r, i = "MultiChoice" === n.FieldType, a = kendo.data.DataSource.create({data: n.Choices});
            return r = {
                autoBind: "undefined" != typeof $(e).data("kendoAutoBind") ? $(e).data("kendoAutoBind") : !1,
                valuePrimitive: !0,
                ccFilter: {operator: "startswith", field: "Text", ignoreCase: !0},
                filter: "startswith",
                dataTextField: "Text",
                dataValueField: "Value",
                dataSource: a,
                optionLabel: "Select ..."
            }, i && (r.autoClose = !1, delete r.optionLabel, r.placeholder = "Select ..."), f(e, t, r, n)
        }

        function d(e, n, r, i) {
            var a, o = "MultiLookup" === r.FieldType, l = null !== r.ConnectionId ? r.ConnectionId : i, s = [r.LookUpDisplayField, "Id"], u = Object.getPrototypeOf(n.model), d = cc.api.getConnectionListItemDataSourceById(l, r.LookUpListID, {
                select: s,
                sort: [{field: r.LookUpDisplayField, dir: "asc"}],
                schema: {
                    model: u.fields, parse: function (e) {
                        var n = e.value || [];
                        return e.value = t.map(n, function (e) {
                            return {
                                "@odata.type": "#CorasCloud.Entities.LookUp",
                                LookUpValue: e.Id,
                                LookUpDisplayValue: e[r.LookUpDisplayField]
                            }
                        }), e
                    }
                }
            });
            return a = {
                autoBind: "undefined" != typeof $(e).data("kendoAutoBind") ? $(e).data("kendoAutoBind") : !1,
                valuePrimitive: "undefined" != typeof $(e).data("kendoValuePrimitive") ? $(e).data("kendoValuePrimitive") : !1,
                ccFilter: {operator: "startswith", field: r.LookUpDisplayField},
                filter: "startswith",
                dataTextField: "LookUpDisplayValue",
                dataValueField: "LookUpValue",
                dataSource: d,
                ignoreCase: !1,
                optionLabel: "Select ..."
            }, o && (delete a.optionLabel, a.autoClose = !1, a.placeholder = "Select ..."), f(e, n, a, r)
        }

        function p(e, t, n, r) {
            var i = m(t), a = {};
            return $(b('<input data-kendo-bind="value:{0}"/>', t.field)).attr(i).appendTo(e).kendoNumericTextBox($.extend(!0, {}, n, a))
        }

        function c(e, t, n, r, i) {
            var a = m(t), o = {};
            return $(b('<input data-kendo-bind="value:{0}"/>', t.field)).attr(a).appendTo(e)[i]($.extend(!0, {}, n, o))
        }

        function f(e, t, n, r) {
            function i(e) {
                var t = v(!0, {}, e);
                return t.field = t.field.replace(h.groupPrefixReplace.regexp, h.groupPrefixReplace.replace), e.field.indexOf(".") > -1 && (t.field = e.field.split(".")[0]), e.field.indexOf("/") > -1 && (t.field = e.field.split("/")[0]), t
            }

            var a, o, l = i(t), s = m(l), u = {}, d = n.hasOwnProperty("optionLabel") ? "kendoDropDownList" : "kendoMultiSelect", p = n.ccFilter;
            return a = $(b('<input data-kendo-bind="value:{0}"/>', t.field)).attr(s).appendTo(e), a[d]($.extend(!0, {}, n, u)), $.isPlainObject(p) && p.field && p.operator && (o = a.data(d), o.bind("filtering", function (e) {
                var t;
                return e.preventDefault(), e.filter && e.filter.value ? (t = {
                    field: p.field,
                    operator: p.operator,
                    value: e.filter.value
                }, p.hasOwnProperty("ignoreCase") && (t.ignoreCase = p.ignoreCase), void this.dataSource.filter(t)) : void this.dataSource.filter({})
            })), a
        }

        function y(e, t, n, r) {
            n = n || {};
            var i, a, o = m(t), l = "kendoEditor", s = n.editorMode || "full";
            return t.model[t.field] && t.model[t.field].Title && (i = t.model[t.field].Title || "", a = t.model[t.field].Title || ""), $(b('<textarea  data-kendo-bind="value:{0}"></textarea>', t.field)).attr(o).appendTo(e)[l]($.extend(!0, {tools: C[s]}, n, {
                value: i,
                text: a
            }))
        }

        function m(e) {
            function t(e) {
                return e = null !== e ? e : "", e.type || $.type(e) || "string"
            }

            var n, r, i = ["url", "email", "number", "date", "boolean"], a = (e.model.fields || e.model)[e.field], o = t(a), l = a ? a.validation : {}, s = kendo.attr("type"), u = kendo.attr("bind"), d = {name: e.field};
            for (n in l)r = l[n], $.inArray(n, i) >= 0 ? d[s] = n : $.isFunction(r) || (d[n] = $.isPlainObject(r) ? r.value || n : r), d[kendo.attr(n + "-msg")] = r.message;
            return $.inArray(o, i) >= 0 && (d[s] = o), d[u] = ("boolean" === o ? "checked:" : "value:") + e.field, d
        }

        var g = n(33), h = n(35), v = $.extend, b = g.format, C = {
            basic: ["bold", "italic", "underline"],
            full: ["formatting", "cleanFormatting", "bold", "italic", "underline", "strikethrough", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "insertUnorderedList", "insertOrderedList", "indent", "outdent", "createLink", "unlink", "viewHtml", "fontName", "fontSize", "foreColor", "backColor"]
        };
        e.exports = {
            choiceEditor: u,
            currencyEditor: i,
            dateTimeEditor: r,
            lookupEditor: d,
            relationEditor: s,
            documentRelationEditor: l,
            rtfEditor: a,
            userEditor: o
        }
    }).call(t, n(29))
}, function (e, t, n) {
    function r() {
        var e = {
            url: "/odata/Connections",
            type: "GET",
            headers: {accept: "application/json;odata=verbose", AppId: i},
            data: {$expand: "Capabilities"}
        };
        return a(e, !0)
    }

    var i = n(55).getAppId(), a = n(75);
    e.exports = r()
}, function (e, t, n) {
    function r(e, t) {
        if (!e || !$.isPlainObject(e))throw new Error("invokeAggregationRequest(config): Missing or wrong parameter config {}");
        var r, d = n(55).getAppId(), p = l, c = o(!0, {}, u, {headers: {AppId: d}});
        return e.Group.hasOwnProperty("SubGroupFields") && (p = "/api/Aggregation/MultiSeries"), e.Filter && e.Filter.filters && (e.Filter = s(e.Filter)), r = o(!0, {}, c, {
            url: p,
            type: "POST",
            data: JSON.stringify(e)
        }), r.url === l && t ? i(r) : a(r)
    }

    function i(e) {
        var t;
        return t = new kendo.data.DataSource({
            autoBind: !0, transport: {
                read: function (t) {
                    var n = o(!0, {}, e, {success: t.success, error: t.error});
                    a(n)
                }
            }, schema: {
                type: "json", data: function (e) {
                    return e[0] && $.isArray(e[0].Results) ? cc.lodash.sortBy(e[0].Results, ["Field"]) : e
                }, total: function (e) {
                    var t = e[0] && e[0].Results && $.isArray(e[0].Results) ? e[0].Results.length : 1;
                    return t
                }
            }
        })
    }

    var a = n(75), o = (n(33), $.extend), l = "/api/Aggregation", s = n(123), u = {
        dataType: "json",
        headers: {"Content-Type": "application/json", accept: "application/json;odata.metadata=minimal"}
    };
    e.exports = r
}, function (e, t, n) {
    (function (t) {
        function r(e) {
            function n(e, i) {
                t.each(e, function (e) {
                    var a, o = e.field, l = {field: null, value: null, operator: null};
                    return o ? (a = null !== e.value && e.value.match && e.value.match(/\[.+?\]/g), a && (e.value = r(e.value), "in" === e.operator && $.isArray(e.value)) ? (l.Filter = {
                        logic: "or",
                        filters: []
                    }, t.each(e.value, function (t) {
                        l.Filter.filters.push({field: e.field, operator: "eq", value: t})
                    }), void i.Filter.filters.push(l)) : (e.Filter = null, void i.Filter.filters.push(e))) : (l.Filter = {
                        logic: e.logic,
                        filters: []
                    }, i.Filter.filters.push(l), void n(e.filters, l))
                })
            }

            function r(e) {
                function n(e) {
                    var t, n = a(), r = {};
                    return r = {}, n.read(), t = n.get(e) ? n.get(e).value : "", t = "function" == typeof t.toJSON ? t.toJSON() : t, r[e.toLowerCase()] = t, r
                }

                function r(e) {
                    var n = {};
                    return t.each(e, function (e) {
                        t.each(e, function (e, t) {
                            n[t] = e
                        })
                    }), n
                }

                var l, s = e.toLowerCase(), u = r(o);
                return l = i(!0, {}, n(e), u), l.hasOwnProperty(s) ? l.hasOwnProperty(s) ? "function" == typeof l[s] ? l[s]() : l[s] : void 0 : e
            }

            var l;
            if (!e.filters || !e.logic)throw new Error("checkForChartVariableReplacement ( filter). Missing or wrong filter(obj)", e);
            return l = {Filter: {logic: e.logic, filters: []}}, n(e.filters, l), l.Filter
        }

        var i = $.extend, a = n(79), o = n(80);
        e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e, t, n) {
            var r, a = i(e);
            return r = {
                url: l,
                type: "POST",
                dataType: "json",
                headers: {"Content-Type": "application/json"},
                data: JSON.stringify(a),
                success: t,
                error: n
            }, o(r)
        }

        function i(e) {
            var n = $.extend(!0, {}, e);
            if ("undefined" == typeof e)throw new Error("SP.Utilities.Utility.SendEmail: Missing mandatory parameter options: {}");
            return $.each(["To", "Subject", "Body"], function (t, n) {
                if ("undefined" == typeof e[n])throw new Error(a.format("SP.Utilities.Utility.SendEmail: Missing mandatory parameter '{0}'", n))
            }), $.each(["BCC", "CC", "To"], function (r, i) {
                var a = e[i];
                "string" == typeof a && (n[i] = t.map(a.split(","), function (e) {
                    return {Email: e, Display: e}
                })), $.isArray(a) && (n[i] = t.map(a, function (e) {
                    return "string" == typeof e ? {Email: e, Display: e} : e
                }))
            }), $.extend(!0, {}, s, n)
        }

        var a = n(33), o = n(75), l = "/api/Email", s = {Body: null, Subject: null, To: []};
        e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e, n, r) {
            i.apply(null, arguments);
            var s, u, d = new kendo.data.DataSource({
                schema: {
                    model: {
                        id: "Id",
                        fields: {CreateDate: {type: "date"}}
                    }
                }
            });
            return s = o.format("/odata/Connections('{0}')/Lists('{1}')/ListItems('{2}')", e, n, r), u = a(s, l(!0, {}, {$expand: "ItemLogs"})), u.read().then(function () {
                var e, n = u.at(0).ItemLogs.toJSON() || [];
                e = t.map(n, function (e) {
                    return e.CreateDate = new Date(e.CreateDate), e
                }), d.data(e.reverse())
            }), d
        }

        function i() {
            var e = arguments, n = ["connectionId", "listId", "itemId"], r = "getItemHistory(connectionId, listId, itemId) missing required parameter '{0}'";
            t.each(n, function (t, n) {
                if (!e[n])throw new Error(o.format(r, t))
            })
        }

        var a = n(119), o = n(33), l = $.extend;
        e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    function r(e, t) {
        var n, r, s = {$orderby: "Title"};
        if (!e)throw new Error("getListsDsByConnectionId(connectionId,  odataVerbs) missing required parameter 'connectionId'");
        return e.toLowerCase() === o.DefaultConnectionId.toLowerCase() && (s.$filter = "ListType eq CorasCloud.Entities.Enums.ListType'List'"), n = a.format("/odata/Connections('{0}')/Lists", e), r = i(n, l(!0, {}, s, t))
    }

    var i = n(119), a = n(33), o = n(35), l = $.extend;
    e.exports = r
}, function (e, t, n) {
    function r(e, t) {
        var n, r;
        if (!e)throw new Error("getLibraryDsByConnectionId(connectionId,  odataVerbs) missing required parameter 'connectionId'");
        return n = a.format("/odata/Connections('{0}')/Libraries", e), r = i(n, o(!0, {}, {$orderby: "Title"}, t))
    }

    var i = n(119), a = n(33), o = $.extend;
    e.exports = r
}, function (e, t, n) {
    function r(e, t, n) {
        if (!t)throw new Error("getConnectionListModelById(connectionId, listId, options) missing required parameter 'listId'");
        return e || (e = ""), i(t, n, e)
    }

    var i = n(118);
    n(33);
    e.exports = r
}, function (e, t, n) {
    function r(e, t, n) {
        if (!t)throw new Error("getConnectionListItemDataSourceById(connectionId, listId, options) missing required parameter 'listId'");
        return e || (e = ""), i(t, n, e)
    }

    var i = n(114);
    n(33);
    e.exports = r
}, function (e, t, n) {
    function r(e, t, n) {
        if (n = n || {}, !t)throw new Error("getListItemDataSourceByIdAsPromise(connectionId, listId, options) missing required parameter 'listId'");
        return e || (e = ""), a(e, t, n).then(function (r) {
            var a = {schema: {model: r.listModel}, ccModel: r}, l = o(!0, {}, a, n);
            return i(e, t, l)
        })
    }

    var i = n(129), a = n(128), o = $.extend;
    e.exports = r
}, function (e, t, n) {
    var r = n(75), i = n(33), a = $.extend, o = i.format, l = {$orderby: "ResourceType,ChildName"}, s = "/odata/Connections('{0}')/Libraries('{1}')/Folders", u = "/odata/Connections('{0}')/Libraries('{1}')/Folders('{2}')";
    e.exports = function (e, t, i, d) {
        function p(e) {
            for (var t in e)(0 === t.indexOf("@odata") || t.indexOf("@odata.type") > 0) && delete e[t]
        }

        function c() {
            return a(!0, {}, l, i)
        }

        if (i = i || {}, d = d || {}, !e)throw new Error("getHierarchicalLibraryDataSource(connection, library, odataVerbs, options) missing required parameter 'connection'");
        var f = {
            type: "odata", transport: {
                read: function (i) {
                    var a, l = n(55).getAppId(), d = i.data.Id, p = d ? u : s, f = o(p, e, t, d);
                    a = {
                        url: f,
                        type: "GET",
                        headers: {accept: "application/json;odata=verbose", AppId: l},
                        success: i.success,
                        error: i.error,
                        data: c()
                    }, r(a)
                }
            }, schema: {
                data: function (e) {
                    return e = $.extend({}, e), p(e), e.value ? e.value : [e]
                }, total: function (e) {
                    var t = e.value && $.isArray(e.value) ? e.value.length : 1, n = e["@odata.count"] ? e["@odata.count"] : t;
                    return n
                }, model: {
                    id: "Id", hasChildren: function () {
                        return "Folder" === this.ResourceType
                    }
                }
            }
        };
        return new kendo.data.HierarchicalDataSource(a(!0, {}, f, d))
    }
}, function (e, t, n) {
    (function (t) {
        function r(e, n, r, l) {
            function s(e) {
                return e ? (e = encodeURIComponent(e), e = e.replace(/\%2F/g, "%252F"), e = e.replace(/\%5C/g, "%255C")) : ""
            }

            function u(e) {
                f = e
            }

            function d() {
                return f
            }

            if (l = l || {}, l.schema = l.schema || {}, l.pageSize = l.pageSize || 500, !e)throw new Error("getConnectionLibraryDataSourceById(connectionId, libraryId, relUrl, options) missing required parameter 'connectionId'");
            var p = l.schema.parse, c = l.pageSize ? parseInt(l.pageSize, 10) : void 0, f = !1, y = r ? "{0}Connections('{1}')/Libraries('{2}')/Folders('{3}')" : "{0}Connections('{1}')/Libraries('{2}')/Folders", m = a.format(y, o, e, n, s(r));
            return l.entityType = "Library", l.endpoint = m, l.sort = [{
                field: "ResourceType",
                dir: "asc"
            }, {field: "ChildName", dir: "asc"}], l.schema.parse = function (e) {
                var t = e.value, n = t && $.isArray(t) ? t.length : 1;
                return u(!1), n > c && (u(!0), t.splice(-1, 1)), p && (e = p(e)), e
            }, l.change = function (e) {
                var n = parseInt(this.pageSize(), 10), r = this.page(), i = this.total(), a = d();
                this._cc = {
                    sort: t.map(this.sort(), function (e) {
                        return {dir: e.dir, field: e.field}
                    }), group: this.group()
                }, a ? this._total = n * r + 1 : this._total = n * (r - 1) + i
            }, l.requestStart = function (e) {
                var n, r, i = {
                    sort: t.map(this.sort(), function (e) {
                        return {dir: e.dir, field: e.field}
                    }), group: this.group()
                };
                this._cc && !t.isEqual(i, this._cc) && (e.preventDefault(), n = t.map(i.group, function (e) {
                    return {field: e.field, dir: e.dir}
                }), n = t.uniqBy(n.concat(i.sort || []), "field"), this._cc = {
                    group: i.group,
                    sort: n
                }, r = {
                    group: i.group,
                    sort: n,
                    filter: this.filter(),
                    take: parseInt(this.take(), 10),
                    page: 1
                }, this.query(r))
            }, new i(l)
        }

        var i = n(70), a = n(33), o = ($.extend, "/odata/");
        e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e, r, l, s, u) {
            var d = [], p = $.Deferred(), c = n(55).getAppId();
            return t.each(l, function (t) {
                var n;
                n = {
                    url: i.format(o, e, r, t.Id),
                    type: "DELETE",
                    dataType: "json",
                    headers: {"Content-Type": "application/json", AppId: c},
                    success: s,
                    error: u
                }, d.push(a(n))
            }), $.when.apply($, d).always(function () {
                console.log("promises", arguments), p.resolve()
            }), p.promise()
        }

        var i = n(33), a = n(75), o = "/odata/Connections('{0}')/Libraries('{1}')/RecycleBin('{2}')";
        e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    (function (t) {
        function r(e, r, l, s, u) {
            var d = [], p = $.Deferred(), c = n(55).getAppId();
            return t.each(l, function (t) {
                var n;
                n = {
                    url: i.format(o, e, r, t.Id),
                    type: "PUT",
                    dataType: "json",
                    headers: {"Content-Type": "application/json", AppId: c},
                    data: JSON.stringify({RecycleBin: !t.RecycleBin}),
                    success: s,
                    error: u
                }, d.push(a(n))
            }), $.when.apply($, d).always(function () {
                p.resolve()
            }), p.promise()
        }

        var i = n(33), a = n(75), o = "/odata/Connections('{0}')/Libraries('{1}')/RecycleBin('{2}')";
        e.exports = r
    }).call(t, n(29))
}, function (e, t, n) {
    var r = $.extend, i = n(136), a = r(!0, {}, i, {
        getItems: n(139),
        getFolderByServerRelativeUrl: n(140),
        getCurrentUser: n(53),
        proxy: n(54),
        sendEmail: n(141),
        invokeRequest: n(137)
    });
    e.exports = a
}, function (e, t, n) {
    function r(e) {
        e = s("cc.rest.createFolder", e, ["web", "folder"]);
        var t = o.format("{0}/_api/web/folders", e.web), n = {
            __metadata: {type: "SP.Folder"},
            ServerRelativeUrl: e.folder
        };
        return l(t, "POST", {}, n)
    }

    function i(e) {
        e = s("cc.rest.createFolder", e, ["web", "folder", "newName", "listItemAllFields"]);
        var t = {
            __metadata: {type: e.listItemAllFields.__metadata.type},
            Title: e.newName,
            FileLeafRef: e.newName
        }, n = e.listItemAllFields.__metadata.uri, r = {"X-HTTP-Method": "MERGE", "If-Match": "*"};
        return l(n, "POST", r, t)
    }

    function a(e) {
        e = s("cc.rest.recycleFolder", e, ["web", "folder"]);
        var t = o.format("{0}/_api/web/GetFolderByServerRelativeUrl('{1}')/recycle", e.web, e.folder);
        return l(t, "POST")
    }

    var o = n(33), l = n(137), s = n(138);
    e.exports = {createFolder: r, renameFolder: i, recycleFolder: a}
}, function (e, t, n) {
    function r(e, t, n, r) {
        var l, s = "cc.rest.invokeRequest(url, method, additionalHeader, payload)", u = "{0}: Mandatory parameter {1} missing", d = {
            Accept: "application/json;odata=verbose",
            "Content-Type": "application/json; odata=verbose"
        };
        if (!e)throw new Error(a.format(u, s, "url"));
        if (!t)throw new Error(a.format(u, s, "method"));
        return n && i(!0, d, n), l = {
            url: e,
            type: t,
            headers: d
        }, "POST" === t && r && (l.data = JSON.stringify(r)), o(l)
    }

    var i = ($.each, $.extend), a = n(33), o = n(54);
    e.exports = r
}, function (e, t, n) {
    function r(e, t, n) {
        if ("undefined" == typeof t)throw new Error(e + ": Missing mandatory parameter options: {}");
        return $.each(n, function (n, r) {
            if ("undefined" == typeof t[r])throw new Error(i.format(e + ": Missing mandatory parameter '{0}'", r))
        }), t
    }

    var i = n(33);
    e.exports = r
}, function (e, t, n) {
    function r(e, t, n) {
        var r, u = (i(e), e.field || "AssignedTo"), d = a.format(l, u), p = a.format("{0}/_api/web/lists(guid'{1}')/getitems", s, e.listId), c = {
            query: {
                __metadata: {type: "SP.CamlQuery"},
                ViewXml: e.viewXml || d
            }
        };
        return r = {
            url: p,
            type: "POST",
            headers: {Accept: "application/json; odata=verbose", "Content-Type": "application/json; odata=verbose"},
            data: JSON.stringify(c),
            success: t,
            error: n
        }, o(r)
    }

    function i(e) {
        var t = $.extend(!0, {}, e);
        if ("undefined" == typeof e)throw new Error("cc.rest.getItems: Missing mandatory parameter options: {}");
        return $.each(["listId"], function (t, n) {
            if ("undefined" == typeof e[n])throw new Error(a.format("cc.rest.getItems: Missing mandatory parameter '{0}'", n))
        }), t
    }

    var a = n(33), o = n(54), l = '<View><Query><Where><Or><Eq><FieldRef Name="{0}" /><Value Type="Integer"><UserID/></Value></Eq><Membership Type="CurrentUserGroups"><FieldRef Name="{0}" /> </Membership></Or></Where></Query></View>', s = kendo.parseQueryStringParams(location.href).SPHostUrl;
    e.exports = r
}, function (e, t, n) {
    function r(e, t, n) {
        var r, s = i(e), u = a.format("{0}/_api/web/GetFolderByServerRelativeUrl('{1}')?$expand={2}", s.web, s.folder, l.join(","));
        return r = {
            url: u,
            type: "GET",
            headers: {Accept: "application/json; odata=verbose", "Content-Type": "application/json; odata=verbose"},
            success: t,
            error: n
        }, o(r)
    }

    function i(e) {
        var t = $.extend(!0, {}, e);
        if ("undefined" == typeof e)throw new Error("cc.rest.getFolderByServerRelativeUrl: Missing mandatory parameter options: {}");
        return $.each(["web", "folder"], function (t, n) {
            if (!e[n])throw new Error(a.format("cc.rest.getFolderByServerRelativeUrl: Missing mandatory parameter '{0}'", n))
        }), t
    }

    var a = n(33), o = n(54), l = ["Folders", "Folders/ListItemAllFields", "Files", "Files/ModifiedBy", "Files/CheckedOutByUser", "Files/ListItemAllFields", "ListItemAllFields/ParentList"];
    e.exports = r
}, function (e, t, n) {
    function r(e, t, r) {
        var l, s = n(55), u = s.getAppConfig().HostWeb, d = a.format("{0}/_api/SP.Utilities.Utility.SendEmail", u), p = i(e);
        return l = {url: d, type: "POST", data: JSON.stringify({properties: p}), success: t, error: r}, o(l)
    }

    function i(e) {
        var t = $.extend(!0, {}, e);
        if ("undefined" == typeof e)throw new Error("SP.Utilities.Utility.SendEmail: Missing mandatory parameter options: {}");
        return $.each(["To", "Subject", "Body"], function (t, n) {
            if ("undefined" == typeof e[n])throw new Error(a.format("SP.Utilities.Utility.SendEmail: Missing mandatory parameter '{0}'", n))
        }), $.each(["BCC", "CC", "To"], function (n, r) {
            var i = e[r];
            "string" == typeof i && (t[r] = {results: i.split(",")}), $.isArray(i) && (t[r] = {results: i}), $.isPlainObject(i) && (t[r] = i)
        }), $.extend(!0, l, t)
    }

    var a = n(33), o = n(54), l = {
        __metadata: {type: "SP.Utilities.EmailProperties"},
        BCC: {results: []},
        Body: null,
        CC: {results: []},
        From: null,
        Subject: null,
        To: {results: []}
    };
    e.exports = r
}, function (e, t, n) {
    var r = n(52);
    e.exports = function (e) {
        var t;
        return t = new kendo.data.DataSource({
            autoBind: !1, transport: {
                read: function (t) {
                    var i = n(55).getAppId(), a = {
                        url: e,
                        type: "GET",
                        headers: {accept: "application/json;odata=verbose", AppId: i}
                    };
                    r("read", a, t)
                }
            }, schema: {
                data: function (e) {
                    var t = e.d.results || e.d;
                    return t = $.isArray(t) ? t : [t]
                }
            }
        })
    }
}, function (e, t, n) {
    (function (t) {
        function r() {
            return s
        }

        function i() {
            return ko.unwrap(s)
        }

        function a(e) {
            e = e || {};
            var n = {};
            return t.each(u.link, function (t, r) {
                n[r] = e.hasOwnProperty(r) ? e[r] : t
            }), n
        }

        function o(e) {
            e = e || {};
            var n = new d;
            return t.each(u.section, function (t, r) {
                n[r] = e.hasOwnProperty(r) ? e[r] : t
            }), n
        }

        function l(e) {
            if (!t.isArray(e))throw new Error("cc.sidebar.setSections(array) expects an array of section/links");
            s(e)
        }

        var s = ($.extend, ko.observableArray()), u = n(144), d = n(145);
        e.exports = {_getSectionsAsObservable: r, createLink: a, createSection: o, setSections: l, getSections: i}
    }).call(t, n(29))
}, function (e, t) {
    e.exports = {
        link: {title: "link", icon: "fa-link", target: "_self", href: "#"},
        section: {title: "Section", icon: "fa-list", links: []}
    }
}, function (e, t, n) {
    (function (t) {
        function r() {
            this.showLinks = ko.observable(!0), t.merge(this, a.section)
        }

        var i = $.extend, a = n(144);
        i(r.prototype, {
            toggleLinks: function (e, t) {
                e = e || this, t && t.preventDefault(), e.showLinks(!e.showLinks())
            }
        }), e.exports = r
    }).call(t, n(29))
}]);
//# sourceMappingURL=cc.js.map