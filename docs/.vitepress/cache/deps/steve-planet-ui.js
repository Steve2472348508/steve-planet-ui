import {
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  defineComponent,
  normalizeClass,
  openBlock,
  ref,
  renderSlot,
  unref,
  useSlots
} from "./chunk-3DXR62HT.js";

// node_modules/.pnpm/steve-planet-ui@1.0.1/node_modules/steve-planet-ui/dist/planet-ui.es.js
var $ = typeof global == "object" && global && global.Object === Object && global;
var K = typeof self == "object" && self && self.Object === Object && self;
var E = $ || K || Function("return this")();
var l = E.Symbol;
var S = Object.prototype;
var V = S.hasOwnProperty;
var q = S.toString;
var b = l ? l.toStringTag : void 0;
function z(t) {
  var r = V.call(t, b), e = t[b];
  try {
    t[b] = void 0;
    var o = true;
  } catch {
  }
  var a = q.call(t);
  return o && (r ? t[b] = e : delete t[b]), a;
}
var D = Object.prototype;
var X = D.toString;
function W(t) {
  return X.call(t);
}
var H = "[object Null]";
var J = "[object Undefined]";
var v = l ? l.toStringTag : void 0;
function y(t) {
  return t == null ? t === void 0 ? J : H : v && v in Object(t) ? z(t) : W(t);
}
function d(t) {
  return t != null && typeof t == "object";
}
var _ = Array.isArray;
function Q(t) {
  var r = typeof t;
  return t != null && (r == "object" || r == "function");
}
function Y(t) {
  return t;
}
var Z = "[object AsyncFunction]";
var tt = "[object Function]";
var rt = "[object GeneratorFunction]";
var et = "[object Proxy]";
function nt(t) {
  if (!Q(t))
    return false;
  var r = y(t);
  return r == tt || r == rt || r == Z || r == et;
}
function ot(t, r) {
  for (var e = -1, o = t == null ? 0 : t.length; ++e < o && r(t[e], e, t) !== false; )
    ;
  return t;
}
var at = 9007199254740991;
var st = /^(?:0|[1-9]\d*)$/;
function ct(t, r) {
  var e = typeof t;
  return r = r ?? at, !!r && (e == "number" || e != "symbol" && st.test(t)) && t > -1 && t % 1 == 0 && t < r;
}
var it = 9007199254740991;
function w(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= it;
}
function B(t) {
  return t != null && w(t.length) && !nt(t);
}
var ut = Object.prototype;
function ft(t) {
  var r = t && t.constructor, e = typeof r == "function" && r.prototype || ut;
  return t === e;
}
function bt(t, r) {
  for (var e = -1, o = Array(t); ++e < t; )
    o[e] = r(e);
  return o;
}
var pt = "[object Arguments]";
function h(t) {
  return d(t) && y(t) == pt;
}
var F = Object.prototype;
var lt = F.hasOwnProperty;
var gt = F.propertyIsEnumerable;
var yt = h(/* @__PURE__ */ function() {
  return arguments;
}()) ? h : function(t) {
  return d(t) && lt.call(t, "callee") && !gt.call(t, "callee");
};
function dt() {
  return false;
}
var I = typeof exports == "object" && exports && !exports.nodeType && exports;
var O = I && typeof module == "object" && module && !module.nodeType && module;
var jt = O && O.exports === I;
var A = jt ? E.Buffer : void 0;
var Tt = A ? A.isBuffer : void 0;
var mt = Tt || dt;
var vt = "[object Arguments]";
var ht = "[object Array]";
var Ot = "[object Boolean]";
var At = "[object Date]";
var Pt = "[object Error]";
var xt = "[object Function]";
var $t = "[object Map]";
var Et = "[object Number]";
var St = "[object Object]";
var _t = "[object RegExp]";
var wt = "[object Set]";
var Bt = "[object String]";
var Ft = "[object WeakMap]";
var It = "[object ArrayBuffer]";
var Ut = "[object DataView]";
var Ct = "[object Float32Array]";
var Mt = "[object Float64Array]";
var Nt = "[object Int8Array]";
var Gt = "[object Int16Array]";
var Lt = "[object Int32Array]";
var Rt = "[object Uint8Array]";
var kt = "[object Uint8ClampedArray]";
var Kt = "[object Uint16Array]";
var Vt = "[object Uint32Array]";
var n = {};
n[Ct] = n[Mt] = n[Nt] = n[Gt] = n[Lt] = n[Rt] = n[kt] = n[Kt] = n[Vt] = true;
n[vt] = n[ht] = n[It] = n[Ot] = n[Ut] = n[At] = n[Pt] = n[xt] = n[$t] = n[Et] = n[St] = n[_t] = n[wt] = n[Bt] = n[Ft] = false;
function qt(t) {
  return d(t) && w(t.length) && !!n[y(t)];
}
function zt(t) {
  return function(r) {
    return t(r);
  };
}
var U = typeof exports == "object" && exports && !exports.nodeType && exports;
var p = U && typeof module == "object" && module && !module.nodeType && module;
var Dt = p && p.exports === U;
var g = Dt && $.process;
var P = function() {
  try {
    var t = p && p.require && p.require("util").types;
    return t || g && g.binding && g.binding("util");
  } catch {
  }
}();
var x = P && P.isTypedArray;
var Xt = x ? zt(x) : qt;
var Wt = Object.prototype;
var Ht = Wt.hasOwnProperty;
function Jt(t, r) {
  var e = _(t), o = !e && yt(t), a = !e && !o && mt(t), c = !e && !o && !a && Xt(t), s = e || o || a || c, i = s ? bt(t.length, String) : [], f = i.length;
  for (var u in t)
    (r || Ht.call(t, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    c && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ct(u, f))) && i.push(u);
  return i;
}
function Qt(t, r) {
  return function(e) {
    return t(r(e));
  };
}
var Yt = Qt(Object.keys, Object);
var Zt = Yt;
var tr = Object.prototype;
var rr = tr.hasOwnProperty;
function er(t) {
  if (!ft(t))
    return Zt(t);
  var r = [];
  for (var e in Object(t))
    rr.call(t, e) && e != "constructor" && r.push(e);
  return r;
}
function nr(t) {
  return B(t) ? Jt(t) : er(t);
}
function or(t) {
  return function(r, e, o) {
    for (var a = -1, c = Object(r), s = o(r), i = s.length; i--; ) {
      var f = s[t ? i : ++a];
      if (e(c[f], f, c) === false)
        break;
    }
    return r;
  };
}
var ar = or();
var sr = ar;
function cr(t, r) {
  return t && sr(t, r, nr);
}
function ir(t, r) {
  return function(e, o) {
    if (e == null)
      return e;
    if (!B(e))
      return t(e, o);
    for (var a = e.length, c = r ? a : -1, s = Object(e); (r ? c-- : ++c < a) && o(s[c], c, s) !== false; )
      ;
    return e;
  };
}
var ur = ir(cr);
var fr = ur;
function br(t) {
  return typeof t == "function" ? t : Y;
}
function pr(t, r) {
  var e = _(t) ? ot : fr;
  return e(t, br(r));
}
var lr = createBaseVNode("span", { class: "p-button__glitch" }, null, -1);
var gr = {
  key: 0,
  class: "p-button__tag"
};
var yr = defineComponent({
  name: "PButton",
  __name: "PButton",
  props: {
    customClass: {}
  },
  setup(t, { expose: r }) {
    const e = t, o = useSlots(), a = ref();
    return r({
      setProperty: (s, i) => {
        var f;
        (f = a.value) == null || f.style.setProperty(s, i);
      }
    }), (s, i) => (openBlock(), createElementBlock("button", {
      ref_key: "buttonRef",
      ref: a,
      class: normalizeClass(["p-button", [e.customClass]])
    }, [
      renderSlot(s.$slots, "default"),
      lr,
      unref(o).tag ? (openBlock(), createElementBlock("span", gr, [
        renderSlot(s.$slots, "tag")
      ])) : createCommentVNode("", true)
    ], 2));
  }
});
var dr = Object.freeze(Object.defineProperty({
  __proto__: null,
  PButton: yr
}, Symbol.toStringTag, { value: "Module" }));
var Tr = () => ({
  install(t) {
    pr(dr, (r) => {
      t.component(r.name, r);
    });
  }
});
export {
  yr as PButton,
  Tr as setupPlanetUI
};
//# sourceMappingURL=steve-planet-ui.js.map
