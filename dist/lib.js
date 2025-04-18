var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _hasDate, _hasTime, _offset;
var n, l$1, t$1, i$1, r$1, o$1, e$1, f$2, c$1, s$1, a$1, h$1, p$1 = {}, v$1 = [], y$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, d$1 = Array.isArray;
function w$2(n2, l2) {
  for (var t2 in l2) n2[t2] = l2[t2];
  return n2;
}
function g$2(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _$1(l2, t2, u2) {
  var i2, r2, o2, e2 = {};
  for (o2 in t2) "key" == o2 ? i2 = t2[o2] : "ref" == o2 ? r2 = t2[o2] : e2[o2] = t2[o2];
  if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : u2), "function" == typeof l2 && null != l2.defaultProps) for (o2 in l2.defaultProps) void 0 === e2[o2] && (e2[o2] = l2.defaultProps[o2]);
  return m$1(l2, e2, i2, r2, null);
}
function m$1(n2, u2, i2, r2, o2) {
  var e2 = { type: n2, props: u2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++t$1 : o2, __i: -1, __u: 0 };
  return null == o2 && null != l$1.vnode && l$1.vnode(e2), e2;
}
function b$1() {
  return { current: null };
}
function k$2(n2) {
  return n2.children;
}
function x$2(n2, l2) {
  this.props = n2, this.context = l2;
}
function S(n2, l2) {
  if (null == l2) return n2.__ ? S(n2.__, n2.__i + 1) : null;
  for (var t2; l2 < n2.__k.length; l2++) if (null != (t2 = n2.__k[l2]) && null != t2.__e) return t2.__e;
  return "function" == typeof n2.type ? S(n2) : null;
}
function C$2(n2) {
  var l2, t2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) if (null != (t2 = n2.__k[l2]) && null != t2.__e) {
      n2.__e = n2.__c.base = t2.__e;
      break;
    }
    return C$2(n2);
  }
}
function M$1(n2) {
  (!n2.__d && (n2.__d = true) && i$1.push(n2) && !$$1.__r++ || r$1 !== l$1.debounceRendering) && ((r$1 = l$1.debounceRendering) || o$1)($$1);
}
function $$1() {
  for (var n2, t2, u2, r2, o2, f2, c2, s2 = 1; i$1.length; ) i$1.length > s2 && i$1.sort(e$1), n2 = i$1.shift(), s2 = i$1.length, n2.__d && (u2 = void 0, o2 = (r2 = (t2 = n2).__v).__e, f2 = [], c2 = [], t2.__P && ((u2 = w$2({}, r2)).__v = r2.__v + 1, l$1.vnode && l$1.vnode(u2), O$1(t2.__P, u2, r2, t2.__n, t2.__P.namespaceURI, 32 & r2.__u ? [o2] : null, f2, null == o2 ? S(r2) : o2, !!(32 & r2.__u), c2), u2.__v = r2.__v, u2.__.__k[u2.__i] = u2, z$2(f2, u2, c2), u2.__e != o2 && C$2(u2)));
  $$1.__r = 0;
}
function I$1(n2, l2, t2, u2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, y2, d2, w2, g2, _2 = u2 && u2.__k || v$1, m2 = l2.length;
  for (f2 = P$2(t2, l2, _2, f2, m2), a2 = 0; a2 < m2; a2++) null != (y2 = t2.__k[a2]) && (h2 = -1 === y2.__i ? p$1 : _2[y2.__i] || p$1, y2.__i = a2, g2 = O$1(n2, y2, h2, i2, r2, o2, e2, f2, c2, s2), d2 = y2.__e, y2.ref && h2.ref != y2.ref && (h2.ref && q$2(h2.ref, null, y2), s2.push(y2.ref, y2.__c || d2, y2)), null == w2 && null != d2 && (w2 = d2), 4 & y2.__u || h2.__k === y2.__k ? f2 = A$2(y2, f2, n2) : "function" == typeof y2.type && void 0 !== g2 ? f2 = g2 : d2 && (f2 = d2.nextSibling), y2.__u &= -7);
  return t2.__e = w2, f2;
}
function P$2(n2, l2, t2, u2, i2) {
  var r2, o2, e2, f2, c2, s2 = t2.length, a2 = s2, h2 = 0;
  for (n2.__k = new Array(i2), r2 = 0; r2 < i2; r2++) null != (o2 = l2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? (f2 = r2 + h2, (o2 = n2.__k[r2] = "string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? m$1(null, o2, null, null, null) : d$1(o2) ? m$1(k$2, { children: o2 }, null, null, null) : void 0 === o2.constructor && o2.__b > 0 ? m$1(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : o2).__ = n2, o2.__b = n2.__b + 1, e2 = null, -1 !== (c2 = o2.__i = L$1(o2, t2, f2, a2)) && (a2--, (e2 = t2[c2]) && (e2.__u |= 2)), null == e2 || null === e2.__v ? (-1 == c2 && (i2 > s2 ? h2-- : i2 < s2 && h2++), "function" != typeof o2.type && (o2.__u |= 4)) : c2 != f2 && (c2 == f2 - 1 ? h2-- : c2 == f2 + 1 ? h2++ : (c2 > f2 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
  if (a2) for (r2 = 0; r2 < s2; r2++) null != (e2 = t2[r2]) && 0 == (2 & e2.__u) && (e2.__e == u2 && (u2 = S(e2)), B$2(e2, e2));
  return u2;
}
function A$2(n2, l2, t2) {
  var u2, i2;
  if ("function" == typeof n2.type) {
    for (u2 = n2.__k, i2 = 0; u2 && i2 < u2.length; i2++) u2[i2] && (u2[i2].__ = n2, l2 = A$2(u2[i2], l2, t2));
    return l2;
  }
  n2.__e != l2 && (l2 && n2.type && !t2.contains(l2) && (l2 = S(n2)), t2.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 == l2.nodeType);
  return l2;
}
function H$1(n2, l2) {
  return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (d$1(n2) ? n2.some(function(n3) {
    H$1(n3, l2);
  }) : l2.push(n2)), l2;
}
function L$1(n2, l2, t2, u2) {
  var i2, r2, o2 = n2.key, e2 = n2.type, f2 = l2[t2];
  if (null === f2 && null == n2.key || f2 && o2 == f2.key && e2 === f2.type && 0 == (2 & f2.__u)) return t2;
  if (u2 > (null != f2 && 0 == (2 & f2.__u) ? 1 : 0)) for (i2 = t2 - 1, r2 = t2 + 1; i2 >= 0 || r2 < l2.length; ) {
    if (i2 >= 0) {
      if ((f2 = l2[i2]) && 0 == (2 & f2.__u) && o2 == f2.key && e2 === f2.type) return i2;
      i2--;
    }
    if (r2 < l2.length) {
      if ((f2 = l2[r2]) && 0 == (2 & f2.__u) && o2 == f2.key && e2 === f2.type) return r2;
      r2++;
    }
  }
  return -1;
}
function T$2(n2, l2, t2) {
  "-" == l2[0] ? n2.setProperty(l2, null == t2 ? "" : t2) : n2[l2] = null == t2 ? "" : "number" != typeof t2 || y$1.test(l2) ? t2 : t2 + "px";
}
function j$2(n2, l2, t2, u2, i2) {
  var r2;
  n: if ("style" == l2) if ("string" == typeof t2) n2.style.cssText = t2;
  else {
    if ("string" == typeof u2 && (n2.style.cssText = u2 = ""), u2) for (l2 in u2) t2 && l2 in t2 || T$2(n2.style, l2, "");
    if (t2) for (l2 in t2) u2 && t2[l2] === u2[l2] || T$2(n2.style, l2, t2[l2]);
  }
  else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(f$2, "$1")), l2 = l2.toLowerCase() in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = t2, t2 ? u2 ? t2.t = u2.t : (t2.t = c$1, n2.addEventListener(l2, r2 ? a$1 : s$1, r2)) : n2.removeEventListener(l2, r2 ? a$1 : s$1, r2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == t2 ? "" : t2;
      break n;
    } catch (n3) {
    }
    "function" == typeof t2 || (null == t2 || false === t2 && "-" != l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == t2 ? "" : t2));
  }
}
function F$2(n2) {
  return function(t2) {
    if (this.l) {
      var u2 = this.l[t2.type + n2];
      if (null == t2.u) t2.u = c$1++;
      else if (t2.u < u2.t) return;
      return u2(l$1.event ? l$1.event(t2) : t2);
    }
  };
}
function O$1(n2, t2, u2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, p2, v2, y2, _2, m2, b2, S2, C2, M2, $2, P2, A2, H2, L2, T2, j2 = t2.type;
  if (void 0 !== t2.constructor) return null;
  128 & u2.__u && (c2 = !!(32 & u2.__u), o2 = [f2 = t2.__e = u2.__e]), (a2 = l$1.__b) && a2(t2);
  n: if ("function" == typeof j2) try {
    if (b2 = t2.props, S2 = "prototype" in j2 && j2.prototype.render, C2 = (a2 = j2.contextType) && i2[a2.__c], M2 = a2 ? C2 ? C2.props.value : a2.__ : i2, u2.__c ? m2 = (h2 = t2.__c = u2.__c).__ = h2.__E : (S2 ? t2.__c = h2 = new j2(b2, M2) : (t2.__c = h2 = new x$2(b2, M2), h2.constructor = j2, h2.render = D$2), C2 && C2.sub(h2), h2.props = b2, h2.state || (h2.state = {}), h2.context = M2, h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), S2 && null == h2.__s && (h2.__s = h2.state), S2 && null != j2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = w$2({}, h2.__s)), w$2(h2.__s, j2.getDerivedStateFromProps(b2, h2.__s))), v2 = h2.props, y2 = h2.state, h2.__v = t2, p2) S2 && null == j2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), S2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
    else {
      if (S2 && null == j2.getDerivedStateFromProps && b2 !== v2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(b2, M2), !h2.__e && (null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(b2, h2.__s, M2) || t2.__v == u2.__v)) {
        for (t2.__v != u2.__v && (h2.props = b2, h2.state = h2.__s, h2.__d = false), t2.__e = u2.__e, t2.__k = u2.__k, t2.__k.some(function(n3) {
          n3 && (n3.__ = t2);
        }), $2 = 0; $2 < h2._sb.length; $2++) h2.__h.push(h2._sb[$2]);
        h2._sb = [], h2.__h.length && e2.push(h2);
        break n;
      }
      null != h2.componentWillUpdate && h2.componentWillUpdate(b2, h2.__s, M2), S2 && null != h2.componentDidUpdate && h2.__h.push(function() {
        h2.componentDidUpdate(v2, y2, _2);
      });
    }
    if (h2.context = M2, h2.props = b2, h2.__P = n2, h2.__e = false, P2 = l$1.__r, A2 = 0, S2) {
      for (h2.state = h2.__s, h2.__d = false, P2 && P2(t2), a2 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++) h2.__h.push(h2._sb[H2]);
      h2._sb = [];
    } else do {
      h2.__d = false, P2 && P2(t2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
    } while (h2.__d && ++A2 < 25);
    h2.state = h2.__s, null != h2.getChildContext && (i2 = w$2(w$2({}, i2), h2.getChildContext())), S2 && !p2 && null != h2.getSnapshotBeforeUpdate && (_2 = h2.getSnapshotBeforeUpdate(v2, y2)), L2 = a2, null != a2 && a2.type === k$2 && null == a2.key && (L2 = N$1(a2.props.children)), f2 = I$1(n2, d$1(L2) ? L2 : [L2], t2, u2, i2, r2, o2, e2, f2, c2, s2), h2.base = t2.__e, t2.__u &= -161, h2.__h.length && e2.push(h2), m2 && (h2.__E = h2.__ = null);
  } catch (n3) {
    if (t2.__v = null, c2 || null != o2) if (n3.then) {
      for (t2.__u |= c2 ? 160 : 128; f2 && 8 == f2.nodeType && f2.nextSibling; ) f2 = f2.nextSibling;
      o2[o2.indexOf(f2)] = null, t2.__e = f2;
    } else for (T2 = o2.length; T2--; ) g$2(o2[T2]);
    else t2.__e = u2.__e, t2.__k = u2.__k;
    l$1.__e(n3, t2, u2);
  }
  else null == o2 && t2.__v == u2.__v ? (t2.__k = u2.__k, t2.__e = u2.__e) : f2 = t2.__e = V$1(u2.__e, t2, u2, i2, r2, o2, e2, c2, s2);
  return (a2 = l$1.diffed) && a2(t2), 128 & t2.__u ? void 0 : f2;
}
function z$2(n2, t2, u2) {
  for (var i2 = 0; i2 < u2.length; i2++) q$2(u2[i2], u2[++i2], u2[++i2]);
  l$1.__c && l$1.__c(t2, n2), n2.some(function(t3) {
    try {
      n2 = t3.__h, t3.__h = [], n2.some(function(n3) {
        n3.call(t3);
      });
    } catch (n3) {
      l$1.__e(n3, t3.__v);
    }
  });
}
function N$1(n2) {
  return "object" != typeof n2 || null == n2 ? n2 : d$1(n2) ? n2.map(N$1) : w$2({}, n2);
}
function V$1(t2, u2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, v2, y2, w2, _2, m2, b2 = i2.props, k2 = u2.props, x2 = u2.type;
  if ("svg" == x2 ? o2 = "http://www.w3.org/2000/svg" : "math" == x2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e2) {
    for (a2 = 0; a2 < e2.length; a2++) if ((w2 = e2[a2]) && "setAttribute" in w2 == !!x2 && (x2 ? w2.localName == x2 : 3 == w2.nodeType)) {
      t2 = w2, e2[a2] = null;
      break;
    }
  }
  if (null == t2) {
    if (null == x2) return document.createTextNode(k2);
    t2 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l$1.__m && l$1.__m(u2, e2), c2 = false), e2 = null;
  }
  if (null === x2) b2 === k2 || c2 && t2.data === k2 || (t2.data = k2);
  else {
    if (e2 = e2 && n.call(t2.childNodes), b2 = i2.props || p$1, !c2 && null != e2) for (b2 = {}, a2 = 0; a2 < t2.attributes.length; a2++) b2[(w2 = t2.attributes[a2]).name] = w2.value;
    for (a2 in b2) if (w2 = b2[a2], "children" == a2) ;
    else if ("dangerouslySetInnerHTML" == a2) v2 = w2;
    else if (!(a2 in k2)) {
      if ("value" == a2 && "defaultValue" in k2 || "checked" == a2 && "defaultChecked" in k2) continue;
      j$2(t2, a2, null, w2, o2);
    }
    for (a2 in k2) w2 = k2[a2], "children" == a2 ? y2 = w2 : "dangerouslySetInnerHTML" == a2 ? h2 = w2 : "value" == a2 ? _2 = w2 : "checked" == a2 ? m2 = w2 : c2 && "function" != typeof w2 || b2[a2] === w2 || j$2(t2, a2, w2, b2[a2], o2);
    if (h2) c2 || v2 && (h2.__html === v2.__html || h2.__html === t2.innerHTML) || (t2.innerHTML = h2.__html), u2.__k = [];
    else if (v2 && (t2.innerHTML = ""), I$1("template" === u2.type ? t2.content : t2, d$1(y2) ? y2 : [y2], u2, i2, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o2, e2, f2, e2 ? e2[0] : i2.__k && S(i2, 0), c2, s2), null != e2) for (a2 = e2.length; a2--; ) g$2(e2[a2]);
    c2 || (a2 = "value", "progress" == x2 && null == _2 ? t2.removeAttribute("value") : void 0 !== _2 && (_2 !== t2[a2] || "progress" == x2 && !_2 || "option" == x2 && _2 !== b2[a2]) && j$2(t2, a2, _2, b2[a2], o2), a2 = "checked", void 0 !== m2 && m2 !== t2[a2] && j$2(t2, a2, m2, b2[a2], o2));
  }
  return t2;
}
function q$2(n2, t2, u2) {
  try {
    if ("function" == typeof n2) {
      var i2 = "function" == typeof n2.__u;
      i2 && n2.__u(), i2 && null == t2 || (n2.__u = n2(t2));
    } else n2.current = t2;
  } catch (n3) {
    l$1.__e(n3, u2);
  }
}
function B$2(n2, t2, u2) {
  var i2, r2;
  if (l$1.unmount && l$1.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || q$2(i2, null, t2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (n3) {
      l$1.__e(n3, t2);
    }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k) for (r2 = 0; r2 < i2.length; r2++) i2[r2] && B$2(i2[r2], t2, u2 || "function" != typeof n2.type);
  u2 || g$2(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function D$2(n2, l2, t2) {
  return this.constructor(n2, t2);
}
function E$1(t2, u2, i2) {
  var r2, o2, e2, f2;
  u2 == document && (u2 = document.documentElement), l$1.__ && l$1.__(t2, u2), o2 = (r2 = "function" == typeof i2) ? null : i2 && i2.__k || u2.__k, e2 = [], f2 = [], O$1(u2, t2 = (!r2 && i2 || u2).__k = _$1(k$2, null, [t2]), o2 || p$1, p$1, u2.namespaceURI, !r2 && i2 ? [i2] : o2 ? null : u2.firstChild ? n.call(u2.childNodes) : null, e2, !r2 && i2 ? i2 : o2 ? o2.__e : u2.firstChild, r2, f2), z$2(e2, t2, f2);
}
function G$1(n2, l2) {
  E$1(n2, l2, G$1);
}
function J$1(l2, t2, u2) {
  var i2, r2, o2, e2, f2 = w$2({}, l2.props);
  for (o2 in l2.type && l2.type.defaultProps && (e2 = l2.type.defaultProps), t2) "key" == o2 ? i2 = t2[o2] : "ref" == o2 ? r2 = t2[o2] : f2[o2] = void 0 === t2[o2] && void 0 !== e2 ? e2[o2] : t2[o2];
  return arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : u2), m$1(l2.type, f2, i2 || l2.key, r2 || l2.ref, null);
}
function K$1(n2) {
  function l2(n3) {
    var t2, u2;
    return this.getChildContext || (t2 = /* @__PURE__ */ new Set(), (u2 = {})[l2.__c] = this, this.getChildContext = function() {
      return u2;
    }, this.componentWillUnmount = function() {
      t2 = null;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && t2.forEach(function(n5) {
        n5.__e = true, M$1(n5);
      });
    }, this.sub = function(n4) {
      t2.add(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        t2 && t2.delete(n4), l3 && l3.call(n4);
      };
    }), n3.children;
  }
  return l2.__c = "__cC" + h$1++, l2.__ = n2, l2.Provider = l2.__l = (l2.Consumer = function(n3, l3) {
    return n3.children(l3);
  }).contextType = l2, l2;
}
n = v$1.slice, l$1 = { __e: function(n2, l2, t2, u2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, u2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, t$1 = 0, x$2.prototype.setState = function(n2, l2) {
  var t2;
  t2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = w$2({}, this.state), "function" == typeof n2 && (n2 = n2(w$2({}, t2), this.props)), n2 && w$2(t2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), M$1(this));
}, x$2.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M$1(this));
}, x$2.prototype.render = k$2, i$1 = [], o$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e$1 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, $$1.__r = 0, f$2 = /(PointerCapture)$|Capture$/i, c$1 = 0, s$1 = F$2(false), a$1 = F$2(true), h$1 = 0;
var f$1 = 0;
function u$1(e2, t2, n2, o2, i2, u2) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f$1, __i: -1, __u: 0, __source: i2, __self: u2 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l$1.vnode && l$1.vnode(l2), l2;
}
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
function getLineColFromPtr(string, ptr) {
  let lines = string.slice(0, ptr).split(/\r\n|\n|\r/g);
  return [lines.length, lines.pop().length + 1];
}
function makeCodeBlock(string, line, column) {
  let lines = string.split(/\r\n|\n|\r/g);
  let codeblock = "";
  let numberLen = (Math.log10(line + 1) | 0) + 1;
  for (let i2 = line - 1; i2 <= line + 1; i2++) {
    let l2 = lines[i2 - 1];
    if (!l2)
      continue;
    codeblock += i2.toString().padEnd(numberLen, " ");
    codeblock += ":  ";
    codeblock += l2;
    codeblock += "\n";
    if (i2 === line) {
      codeblock += " ".repeat(numberLen + column + 2);
      codeblock += "^\n";
    }
  }
  return codeblock;
}
class TomlError extends Error {
  constructor(message, options) {
    const [line, column] = getLineColFromPtr(options.toml, options.ptr);
    const codeblock = makeCodeBlock(options.toml, line, column);
    super(`Invalid TOML document: ${message}

${codeblock}`, options);
    __publicField(this, "line");
    __publicField(this, "column");
    __publicField(this, "codeblock");
    this.line = line;
    this.column = column;
    this.codeblock = codeblock;
  }
}
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
function indexOfNewline(str, start = 0, end = str.length) {
  let idx = str.indexOf("\n", start);
  if (str[idx - 1] === "\r")
    idx--;
  return idx <= end ? idx : -1;
}
function skipComment(str, ptr) {
  for (let i2 = ptr; i2 < str.length; i2++) {
    let c2 = str[i2];
    if (c2 === "\n")
      return i2;
    if (c2 === "\r" && str[i2 + 1] === "\n")
      return i2 + 1;
    if (c2 < " " && c2 !== "	" || c2 === "") {
      throw new TomlError("control characters are not allowed in comments", {
        toml: str,
        ptr
      });
    }
  }
  return str.length;
}
function skipVoid(str, ptr, banNewLines, banComments) {
  let c2;
  while ((c2 = str[ptr]) === " " || c2 === "	" || !banNewLines && (c2 === "\n" || c2 === "\r" && str[ptr + 1] === "\n"))
    ptr++;
  return banComments || c2 !== "#" ? ptr : skipVoid(str, skipComment(str, ptr), banNewLines);
}
function skipUntil(str, ptr, sep, end, banNewLines = false) {
  if (!end) {
    ptr = indexOfNewline(str, ptr);
    return ptr < 0 ? str.length : ptr;
  }
  for (let i2 = ptr; i2 < str.length; i2++) {
    let c2 = str[i2];
    if (c2 === "#") {
      i2 = indexOfNewline(str, i2);
    } else if (c2 === sep) {
      return i2 + 1;
    } else if (c2 === end) {
      return i2;
    } else if (banNewLines && (c2 === "\n" || c2 === "\r" && str[i2 + 1] === "\n")) {
      return i2;
    }
  }
  throw new TomlError("cannot find end of structure", {
    toml: str,
    ptr
  });
}
function getStringEnd(str, seek) {
  let first = str[seek];
  let target2 = first === str[seek + 1] && str[seek + 1] === str[seek + 2] ? str.slice(seek, seek + 3) : first;
  seek += target2.length - 1;
  do
    seek = str.indexOf(target2, ++seek);
  while (seek > -1 && first !== "'" && str[seek - 1] === "\\" && str[seek - 2] !== "\\");
  if (seek > -1) {
    seek += target2.length;
    if (target2.length > 1) {
      if (str[seek] === first)
        seek++;
      if (str[seek] === first)
        seek++;
    }
  }
  return seek;
}
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
let DATE_TIME_RE = /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}:\d{2}(?:\.\d+)?)?(Z|[-+]\d{2}:\d{2})?$/i;
const _TomlDate = class _TomlDate extends Date {
  constructor(date) {
    let hasDate = true;
    let hasTime = true;
    let offset = "Z";
    if (typeof date === "string") {
      let match = date.match(DATE_TIME_RE);
      if (match) {
        if (!match[1]) {
          hasDate = false;
          date = `0000-01-01T${date}`;
        }
        hasTime = !!match[2];
        if (match[2] && +match[2] > 23) {
          date = "";
        } else {
          offset = match[3] || null;
          date = date.toUpperCase();
          if (!offset && hasTime)
            date += "Z";
        }
      } else {
        date = "";
      }
    }
    super(date);
    __privateAdd(this, _hasDate, false);
    __privateAdd(this, _hasTime, false);
    __privateAdd(this, _offset, null);
    if (!isNaN(this.getTime())) {
      __privateSet(this, _hasDate, hasDate);
      __privateSet(this, _hasTime, hasTime);
      __privateSet(this, _offset, offset);
    }
  }
  isDateTime() {
    return __privateGet(this, _hasDate) && __privateGet(this, _hasTime);
  }
  isLocal() {
    return !__privateGet(this, _hasDate) || !__privateGet(this, _hasTime) || !__privateGet(this, _offset);
  }
  isDate() {
    return __privateGet(this, _hasDate) && !__privateGet(this, _hasTime);
  }
  isTime() {
    return __privateGet(this, _hasTime) && !__privateGet(this, _hasDate);
  }
  isValid() {
    return __privateGet(this, _hasDate) || __privateGet(this, _hasTime);
  }
  toISOString() {
    let iso = super.toISOString();
    if (this.isDate())
      return iso.slice(0, 10);
    if (this.isTime())
      return iso.slice(11, 23);
    if (__privateGet(this, _offset) === null)
      return iso.slice(0, -1);
    if (__privateGet(this, _offset) === "Z")
      return iso;
    let offset = +__privateGet(this, _offset).slice(1, 3) * 60 + +__privateGet(this, _offset).slice(4, 6);
    offset = __privateGet(this, _offset)[0] === "-" ? offset : -offset;
    let offsetDate = new Date(this.getTime() - offset * 6e4);
    return offsetDate.toISOString().slice(0, -1) + __privateGet(this, _offset);
  }
  static wrapAsOffsetDateTime(jsDate, offset = "Z") {
    let date = new _TomlDate(jsDate);
    __privateSet(date, _offset, offset);
    return date;
  }
  static wrapAsLocalDateTime(jsDate) {
    let date = new _TomlDate(jsDate);
    __privateSet(date, _offset, null);
    return date;
  }
  static wrapAsLocalDate(jsDate) {
    let date = new _TomlDate(jsDate);
    __privateSet(date, _hasTime, false);
    __privateSet(date, _offset, null);
    return date;
  }
  static wrapAsLocalTime(jsDate) {
    let date = new _TomlDate(jsDate);
    __privateSet(date, _hasDate, false);
    __privateSet(date, _offset, null);
    return date;
  }
};
_hasDate = new WeakMap();
_hasTime = new WeakMap();
_offset = new WeakMap();
let TomlDate = _TomlDate;
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
let INT_REGEX = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/;
let FLOAT_REGEX = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/;
let LEADING_ZERO = /^[+-]?0[0-9_]/;
let ESCAPE_REGEX = /^[0-9a-f]{4,8}$/i;
let ESC_MAP = {
  b: "\b",
  t: "	",
  n: "\n",
  f: "\f",
  r: "\r",
  '"': '"',
  "\\": "\\"
};
function parseString(str, ptr = 0, endPtr = str.length) {
  let isLiteral = str[ptr] === "'";
  let isMultiline = str[ptr++] === str[ptr] && str[ptr] === str[ptr + 1];
  if (isMultiline) {
    endPtr -= 2;
    if (str[ptr += 2] === "\r")
      ptr++;
    if (str[ptr] === "\n")
      ptr++;
  }
  let tmp = 0;
  let isEscape;
  let parsed = "";
  let sliceStart = ptr;
  while (ptr < endPtr - 1) {
    let c2 = str[ptr++];
    if (c2 === "\n" || c2 === "\r" && str[ptr] === "\n") {
      if (!isMultiline) {
        throw new TomlError("newlines are not allowed in strings", {
          toml: str,
          ptr: ptr - 1
        });
      }
    } else if (c2 < " " && c2 !== "	" || c2 === "") {
      throw new TomlError("control characters are not allowed in strings", {
        toml: str,
        ptr: ptr - 1
      });
    }
    if (isEscape) {
      isEscape = false;
      if (c2 === "u" || c2 === "U") {
        let code = str.slice(ptr, ptr += c2 === "u" ? 4 : 8);
        if (!ESCAPE_REGEX.test(code)) {
          throw new TomlError("invalid unicode escape", {
            toml: str,
            ptr: tmp
          });
        }
        try {
          parsed += String.fromCodePoint(parseInt(code, 16));
        } catch {
          throw new TomlError("invalid unicode escape", {
            toml: str,
            ptr: tmp
          });
        }
      } else if (isMultiline && (c2 === "\n" || c2 === " " || c2 === "	" || c2 === "\r")) {
        ptr = skipVoid(str, ptr - 1, true);
        if (str[ptr] !== "\n" && str[ptr] !== "\r") {
          throw new TomlError("invalid escape: only line-ending whitespace may be escaped", {
            toml: str,
            ptr: tmp
          });
        }
        ptr = skipVoid(str, ptr);
      } else if (c2 in ESC_MAP) {
        parsed += ESC_MAP[c2];
      } else {
        throw new TomlError("unrecognized escape sequence", {
          toml: str,
          ptr: tmp
        });
      }
      sliceStart = ptr;
    } else if (!isLiteral && c2 === "\\") {
      tmp = ptr - 1;
      isEscape = true;
      parsed += str.slice(sliceStart, tmp);
    }
  }
  return parsed + str.slice(sliceStart, endPtr - 1);
}
function parseValue(value, toml, ptr) {
  if (value === "true")
    return true;
  if (value === "false")
    return false;
  if (value === "-inf")
    return -Infinity;
  if (value === "inf" || value === "+inf")
    return Infinity;
  if (value === "nan" || value === "+nan" || value === "-nan")
    return NaN;
  if (value === "-0")
    return 0;
  let isInt;
  if ((isInt = INT_REGEX.test(value)) || FLOAT_REGEX.test(value)) {
    if (LEADING_ZERO.test(value)) {
      throw new TomlError("leading zeroes are not allowed", {
        toml,
        ptr
      });
    }
    let numeric = +value.replace(/_/g, "");
    if (isNaN(numeric)) {
      throw new TomlError("invalid number", {
        toml,
        ptr
      });
    }
    if (isInt && !Number.isSafeInteger(numeric)) {
      throw new TomlError("integer value cannot be represented losslessly", {
        toml,
        ptr
      });
    }
    return numeric;
  }
  let date = new TomlDate(value);
  if (!date.isValid()) {
    throw new TomlError("invalid value", {
      toml,
      ptr
    });
  }
  return date;
}
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
function sliceAndTrimEndOf(str, startPtr, endPtr, allowNewLines) {
  let value = str.slice(startPtr, endPtr);
  let commentIdx = value.indexOf("#");
  if (commentIdx > -1) {
    skipComment(str, commentIdx);
    value = value.slice(0, commentIdx);
  }
  let trimmed = value.trimEnd();
  if (!allowNewLines) {
    let newlineIdx = value.indexOf("\n", trimmed.length);
    if (newlineIdx > -1) {
      throw new TomlError("newlines are not allowed in inline tables", {
        toml: str,
        ptr: startPtr + newlineIdx
      });
    }
  }
  return [trimmed, commentIdx];
}
function extractValue(str, ptr, end, depth) {
  if (depth === 0) {
    throw new TomlError("document contains excessively nested structures. aborting.", {
      toml: str,
      ptr
    });
  }
  let c2 = str[ptr];
  if (c2 === "[" || c2 === "{") {
    let [value, endPtr2] = c2 === "[" ? parseArray(str, ptr, depth) : parseInlineTable(str, ptr, depth);
    let newPtr = skipUntil(str, endPtr2, ",", end);
    if (end === "}") {
      let nextNewLine = indexOfNewline(str, endPtr2, newPtr);
      if (nextNewLine > -1) {
        throw new TomlError("newlines are not allowed in inline tables", {
          toml: str,
          ptr: nextNewLine
        });
      }
    }
    return [value, newPtr];
  }
  let endPtr;
  if (c2 === '"' || c2 === "'") {
    endPtr = getStringEnd(str, ptr);
    let parsed = parseString(str, ptr, endPtr);
    if (end) {
      endPtr = skipVoid(str, endPtr, end !== "]");
      if (str[endPtr] && str[endPtr] !== "," && str[endPtr] !== end && str[endPtr] !== "\n" && str[endPtr] !== "\r") {
        throw new TomlError("unexpected character encountered", {
          toml: str,
          ptr: endPtr
        });
      }
      endPtr += +(str[endPtr] === ",");
    }
    return [parsed, endPtr];
  }
  endPtr = skipUntil(str, ptr, ",", end);
  let slice = sliceAndTrimEndOf(str, ptr, endPtr - +(str[endPtr - 1] === ","), end === "]");
  if (!slice[0]) {
    throw new TomlError("incomplete key-value declaration: no value specified", {
      toml: str,
      ptr
    });
  }
  if (end && slice[1] > -1) {
    endPtr = skipVoid(str, ptr + slice[1]);
    endPtr += +(str[endPtr] === ",");
  }
  return [
    parseValue(slice[0], str, ptr),
    endPtr
  ];
}
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
let KEY_PART_RE = /^[a-zA-Z0-9-_]+[ \t]*$/;
function parseKey(str, ptr, end = "=") {
  let dot2 = ptr - 1;
  let parsed = [];
  let endPtr = str.indexOf(end, ptr);
  if (endPtr < 0) {
    throw new TomlError("incomplete key-value: cannot find end of key", {
      toml: str,
      ptr
    });
  }
  do {
    let c2 = str[ptr = ++dot2];
    if (c2 !== " " && c2 !== "	") {
      if (c2 === '"' || c2 === "'") {
        if (c2 === str[ptr + 1] && c2 === str[ptr + 2]) {
          throw new TomlError("multiline strings are not allowed in keys", {
            toml: str,
            ptr
          });
        }
        let eos = getStringEnd(str, ptr);
        if (eos < 0) {
          throw new TomlError("unfinished string encountered", {
            toml: str,
            ptr
          });
        }
        dot2 = str.indexOf(".", eos);
        let strEnd = str.slice(eos, dot2 < 0 || dot2 > endPtr ? endPtr : dot2);
        let newLine = indexOfNewline(strEnd);
        if (newLine > -1) {
          throw new TomlError("newlines are not allowed in keys", {
            toml: str,
            ptr: ptr + dot2 + newLine
          });
        }
        if (strEnd.trimStart()) {
          throw new TomlError("found extra tokens after the string part", {
            toml: str,
            ptr: eos
          });
        }
        if (endPtr < eos) {
          endPtr = str.indexOf(end, eos);
          if (endPtr < 0) {
            throw new TomlError("incomplete key-value: cannot find end of key", {
              toml: str,
              ptr
            });
          }
        }
        parsed.push(parseString(str, ptr, eos));
      } else {
        dot2 = str.indexOf(".", ptr);
        let part2 = str.slice(ptr, dot2 < 0 || dot2 > endPtr ? endPtr : dot2);
        if (!KEY_PART_RE.test(part2)) {
          throw new TomlError("only letter, numbers, dashes and underscores are allowed in keys", {
            toml: str,
            ptr
          });
        }
        parsed.push(part2.trimEnd());
      }
    }
  } while (dot2 + 1 && dot2 < endPtr);
  return [parsed, skipVoid(str, endPtr + 1, true, true)];
}
function parseInlineTable(str, ptr, depth) {
  let res = {};
  let seen = /* @__PURE__ */ new Set();
  let c2;
  let comma2 = 0;
  ptr++;
  while ((c2 = str[ptr++]) !== "}" && c2) {
    if (c2 === "\n") {
      throw new TomlError("newlines are not allowed in inline tables", {
        toml: str,
        ptr: ptr - 1
      });
    } else if (c2 === "#") {
      throw new TomlError("inline tables cannot contain comments", {
        toml: str,
        ptr: ptr - 1
      });
    } else if (c2 === ",") {
      throw new TomlError("expected key-value, found comma", {
        toml: str,
        ptr: ptr - 1
      });
    } else if (c2 !== " " && c2 !== "	") {
      let k2;
      let t2 = res;
      let hasOwn = false;
      let [key, keyEndPtr] = parseKey(str, ptr - 1);
      for (let i2 = 0; i2 < key.length; i2++) {
        if (i2)
          t2 = hasOwn ? t2[k2] : t2[k2] = {};
        k2 = key[i2];
        if ((hasOwn = Object.hasOwn(t2, k2)) && (typeof t2[k2] !== "object" || seen.has(t2[k2]))) {
          throw new TomlError("trying to redefine an already defined value", {
            toml: str,
            ptr
          });
        }
        if (!hasOwn && k2 === "__proto__") {
          Object.defineProperty(t2, k2, { enumerable: true, configurable: true, writable: true });
        }
      }
      if (hasOwn) {
        throw new TomlError("trying to redefine an already defined value", {
          toml: str,
          ptr
        });
      }
      let [value, valueEndPtr] = extractValue(str, keyEndPtr, "}", depth - 1);
      seen.add(value);
      t2[k2] = value;
      ptr = valueEndPtr;
      comma2 = str[ptr - 1] === "," ? ptr - 1 : 0;
    }
  }
  if (comma2) {
    throw new TomlError("trailing commas are not allowed in inline tables", {
      toml: str,
      ptr: comma2
    });
  }
  if (!c2) {
    throw new TomlError("unfinished table encountered", {
      toml: str,
      ptr
    });
  }
  return [res, ptr];
}
function parseArray(str, ptr, depth) {
  let res = [];
  let c2;
  ptr++;
  while ((c2 = str[ptr++]) !== "]" && c2) {
    if (c2 === ",") {
      throw new TomlError("expected value, found comma", {
        toml: str,
        ptr: ptr - 1
      });
    } else if (c2 === "#")
      ptr = skipComment(str, ptr);
    else if (c2 !== " " && c2 !== "	" && c2 !== "\n" && c2 !== "\r") {
      let e2 = extractValue(str, ptr - 1, "]", depth - 1);
      res.push(e2[0]);
      ptr = e2[1];
    }
  }
  if (!c2) {
    throw new TomlError("unfinished array encountered", {
      toml: str,
      ptr
    });
  }
  return [res, ptr];
}
/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
function peekTable(key, table, meta, type) {
  var _a2, _b2;
  let t2 = table;
  let m2 = meta;
  let k2;
  let hasOwn = false;
  let state;
  for (let i2 = 0; i2 < key.length; i2++) {
    if (i2) {
      t2 = hasOwn ? t2[k2] : t2[k2] = {};
      m2 = (state = m2[k2]).c;
      if (type === 0 && (state.t === 1 || state.t === 2)) {
        return null;
      }
      if (state.t === 2) {
        let l2 = t2.length - 1;
        t2 = t2[l2];
        m2 = m2[l2].c;
      }
    }
    k2 = key[i2];
    if ((hasOwn = Object.hasOwn(t2, k2)) && ((_a2 = m2[k2]) == null ? void 0 : _a2.t) === 0 && ((_b2 = m2[k2]) == null ? void 0 : _b2.d)) {
      return null;
    }
    if (!hasOwn) {
      if (k2 === "__proto__") {
        Object.defineProperty(t2, k2, { enumerable: true, configurable: true, writable: true });
        Object.defineProperty(m2, k2, { enumerable: true, configurable: true, writable: true });
      }
      m2[k2] = {
        t: i2 < key.length - 1 && type === 2 ? 3 : type,
        d: false,
        i: 0,
        c: {}
      };
    }
  }
  state = m2[k2];
  if (state.t !== type && !(type === 1 && state.t === 3)) {
    return null;
  }
  if (type === 2) {
    if (!state.d) {
      state.d = true;
      t2[k2] = [];
    }
    t2[k2].push(t2 = {});
    state.c[state.i++] = state = { t: 1, d: false, i: 0, c: {} };
  }
  if (state.d) {
    return null;
  }
  state.d = true;
  if (type === 1) {
    t2 = hasOwn ? t2[k2] : t2[k2] = {};
  } else if (type === 0 && hasOwn) {
    return null;
  }
  return [k2, t2, state.c];
}
function parse(toml, opts) {
  let maxDepth = (opts == null ? void 0 : opts.maxDepth) ?? 1e3;
  let res = {};
  let meta = {};
  let tbl = res;
  let m2 = meta;
  for (let ptr = skipVoid(toml, 0); ptr < toml.length; ) {
    if (toml[ptr] === "[") {
      let isTableArray = toml[++ptr] === "[";
      let k2 = parseKey(toml, ptr += +isTableArray, "]");
      if (isTableArray) {
        if (toml[k2[1] - 1] !== "]") {
          throw new TomlError("expected end of table declaration", {
            toml,
            ptr: k2[1] - 1
          });
        }
        k2[1]++;
      }
      let p2 = peekTable(
        k2[0],
        res,
        meta,
        isTableArray ? 2 : 1
        /* Type.EXPLICIT */
      );
      if (!p2) {
        throw new TomlError("trying to redefine an already defined table or value", {
          toml,
          ptr
        });
      }
      m2 = p2[2];
      tbl = p2[1];
      ptr = k2[1];
    } else {
      let k2 = parseKey(toml, ptr);
      let p2 = peekTable(
        k2[0],
        tbl,
        m2,
        0
        /* Type.DOTTED */
      );
      if (!p2) {
        throw new TomlError("trying to redefine an already defined table or value", {
          toml,
          ptr
        });
      }
      let v2 = extractValue(toml, k2[1], void 0, maxDepth);
      p2[1][p2[0]] = v2[0];
      ptr = v2[1];
    }
    ptr = skipVoid(toml, ptr, true);
    if (toml[ptr] && toml[ptr] !== "\n" && toml[ptr] !== "\r") {
      throw new TomlError("each key-value declaration must be followed by an end-of-line", {
        toml,
        ptr
      });
    }
    ptr = skipVoid(toml, ptr);
  }
  return res;
}
const BASE_URL = "http://localhost:8888";
class Telemetry {
  async log(endpoint, payload) {
    const url = `${BASE_URL}/${endpoint}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      throw new Error(`Failed to log with status: ${response.statusText} `);
    }
  }
}
if (typeof window !== "undefined") {
  window.telemetry = new Telemetry();
}
var t, r, u, i, o = 0, f = [], c = l$1, e = c.__b, a = c.__r, v = c.diffed, l = c.__c, m = c.unmount, s = c.__;
function p(n2, t2) {
  c.__h && c.__h(r, n2, o || t2), o = 0;
  var u2 = r.__H || (r.__H = { __: [], __h: [] });
  return n2 >= u2.__.length && u2.__.push({}), u2.__[n2];
}
function d(n2) {
  return o = 1, h(D$1, n2);
}
function h(n2, u2, i2) {
  var o2 = p(t++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [i2 ? i2(u2) : D$1(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !r.__f)) {
    var f2 = function(n3, t2, r2) {
      if (!o2.__c.__H) return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      })) return !c2 || c2.call(this, n3, t2, r2);
      var i3 = o2.__c.props !== n3;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
        }
      }), c2 && c2.call(this, n3, t2, r2) || i3;
    };
    r.__f = true;
    var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
    r.componentWillUpdate = function(n3, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n3, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n3, t2, r2);
    }, r.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function y(n2, u2) {
  var i2 = p(t++, 3);
  !c.__s && C$1(i2.__H, u2) && (i2.__ = n2, i2.u = u2, r.__H.__h.push(i2));
}
function _(n2, u2) {
  var i2 = p(t++, 4);
  !c.__s && C$1(i2.__H, u2) && (i2.__ = n2, i2.u = u2, r.__h.push(i2));
}
function A$1(n2) {
  return o = 5, T$1(function() {
    return { current: n2 };
  }, []);
}
function F$1(n2, t2, r2) {
  o = 6, _(function() {
    if ("function" == typeof n2) {
      var r3 = n2(t2());
      return function() {
        n2(null), r3 && "function" == typeof r3 && r3();
      };
    }
    if (n2) return n2.current = t2(), function() {
      return n2.current = null;
    };
  }, null == r2 ? r2 : r2.concat(n2));
}
function T$1(n2, r2) {
  var u2 = p(t++, 7);
  return C$1(u2.__H, r2) && (u2.__ = n2(), u2.__H = r2, u2.__h = n2), u2.__;
}
function q$1(n2, t2) {
  return o = 8, T$1(function() {
    return n2;
  }, t2);
}
function x$1(n2) {
  var u2 = r.context[n2.__c], i2 = p(t++, 9);
  return i2.c = n2, u2 ? (null == i2.__ && (i2.__ = true, u2.sub(r)), u2.props.value) : n2.__;
}
function P$1(n2, t2) {
  c.useDebugValue && c.useDebugValue(t2 ? t2(n2) : n2);
}
function b(n2) {
  var u2 = p(t++, 10), i2 = d();
  return u2.__ = n2, r.componentDidCatch || (r.componentDidCatch = function(n3, t2) {
    u2.__ && u2.__(n3, t2), i2[1](n3);
  }), [i2[0], function() {
    i2[1](void 0);
  }];
}
function g$1() {
  var n2 = p(t++, 11);
  if (!n2.__) {
    for (var u2 = r.__v; null !== u2 && !u2.__m && null !== u2.__; ) u2 = u2.__;
    var i2 = u2.__m || (u2.__m = [0, 0]);
    n2.__ = "P" + i2[0] + "-" + i2[1]++;
  }
  return n2.__;
}
function j$1() {
  for (var n2; n2 = f.shift(); ) if (n2.__P && n2.__H) try {
    n2.__H.__h.forEach(z$1), n2.__H.__h.forEach(B$1), n2.__H.__h = [];
  } catch (t2) {
    n2.__H.__h = [], c.__e(t2, n2.__v);
  }
}
c.__b = function(n2) {
  r = null, e && e(n2);
}, c.__ = function(n2, t2) {
  n2 && t2.__k && t2.__k.__m && (n2.__m = t2.__k.__m), s && s(n2, t2);
}, c.__r = function(n2) {
  a && a(n2), t = 0;
  var i2 = (r = n2.__c).__H;
  i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
  })) : (i2.__h.forEach(z$1), i2.__h.forEach(B$1), i2.__h = [], t = 0)), u = r;
}, c.diffed = function(n2) {
  v && v(n2);
  var t2 = n2.__c;
  t2 && t2.__H && (t2.__H.__h.length && (1 !== f.push(t2) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w$1)(j$1)), t2.__H.__.forEach(function(n3) {
    n3.u && (n3.__H = n3.u), n3.u = void 0;
  })), u = r = null;
}, c.__c = function(n2, t2) {
  t2.some(function(n3) {
    try {
      n3.__h.forEach(z$1), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B$1(n4);
      });
    } catch (r2) {
      t2.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t2 = [], c.__e(r2, n3.__v);
    }
  }), l && l(n2, t2);
}, c.unmount = function(n2) {
  m && m(n2);
  var t2, r2 = n2.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n3) {
    try {
      z$1(n3);
    } catch (n4) {
      t2 = n4;
    }
  }), r2.__H = void 0, t2 && c.__e(t2, r2.__v));
};
var k$1 = "function" == typeof requestAnimationFrame;
function w$1(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), k$1 && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  k$1 && (t2 = requestAnimationFrame(r2));
}
function z$1(n2) {
  var t2 = r, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
}
function B$1(n2) {
  var t2 = r;
  n2.__c = n2.__(), r = t2;
}
function C$1(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function D$1(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
function g(n2, t2) {
  for (var e2 in t2) n2[e2] = t2[e2];
  return n2;
}
function E(n2, t2) {
  for (var e2 in n2) if ("__source" !== e2 && !(e2 in t2)) return true;
  for (var r2 in t2) if ("__source" !== r2 && n2[r2] !== t2[r2]) return true;
  return false;
}
function C(n2, t2) {
  var e2 = t2(), r2 = d({ t: { __: e2, u: t2 } }), u2 = r2[0].t, o2 = r2[1];
  return _(function() {
    u2.__ = e2, u2.u = t2, x(u2) && o2({ t: u2 });
  }, [n2, e2, t2]), y(function() {
    return x(u2) && o2({ t: u2 }), n2(function() {
      x(u2) && o2({ t: u2 });
    });
  }, [n2]), e2;
}
function x(n2) {
  var t2, e2, r2 = n2.u, u2 = n2.__;
  try {
    var o2 = r2();
    return !((t2 = u2) === (e2 = o2) && (0 !== t2 || 1 / t2 == 1 / e2) || t2 != t2 && e2 != e2);
  } catch (n3) {
    return true;
  }
}
function R(n2) {
  n2();
}
function w(n2) {
  return n2;
}
function k() {
  return [false, R];
}
var I = _;
function N(n2, t2) {
  this.props = n2, this.context = t2;
}
function M(n2, e2) {
  function r2(n3) {
    var t2 = this.props.ref, r3 = t2 == n3.ref;
    return !r3 && t2 && (t2.call ? t2(null) : t2.current = null), e2 ? !e2(this.props, n3) || !r3 : E(this.props, n3);
  }
  function u2(e3) {
    return this.shouldComponentUpdate = r2, _$1(n2, e3);
  }
  return u2.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u2.prototype.isReactComponent = true, u2.__f = true, u2;
}
(N.prototype = new x$2()).isPureReactComponent = true, N.prototype.shouldComponentUpdate = function(n2, t2) {
  return E(this.props, n2) || E(this.state, t2);
};
var T = l$1.__b;
l$1.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), T && T(n2);
};
var A = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function D(n2) {
  function t2(t3) {
    var e2 = g({}, t3);
    return delete e2.ref, n2(e2, t3.ref || null);
  }
  return t2.$$typeof = A, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t2;
}
var L = function(n2, t2) {
  return null == n2 ? null : H$1(H$1(n2).map(t2));
}, O = { map: L, forEach: L, count: function(n2) {
  return n2 ? H$1(n2).length : 0;
}, only: function(n2) {
  var t2 = H$1(n2);
  if (1 !== t2.length) throw "Children.only";
  return t2[0];
}, toArray: H$1 }, F = l$1.__e;
l$1.__e = function(n2, t2, e2, r2) {
  if (n2.then) {
    for (var u2, o2 = t2; o2 = o2.__; ) if ((u2 = o2.__c) && u2.__c) return null == t2.__e && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n2, t2);
  }
  F(n2, t2, e2, r2);
};
var U = l$1.unmount;
function V(n2, t2, e2) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
    "function" == typeof n3.__c && n3.__c();
  }), n2.__c.__H = null), null != (n2 = g({}, n2)).__c && (n2.__c.__P === e2 && (n2.__c.__P = t2), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
    return V(n3, t2, e2);
  })), n2;
}
function W(n2, t2, e2) {
  return n2 && e2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
    return W(n3, t2, e2);
  }), n2.__c && n2.__c.__P === t2 && (n2.__e && e2.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e2)), n2;
}
function P() {
  this.__u = 0, this.o = null, this.__b = null;
}
function j(n2) {
  var t2 = n2.__.__c;
  return t2 && t2.__a && t2.__a(n2);
}
function z(n2) {
  var e2, r2, u2;
  function o2(o3) {
    if (e2 || (e2 = n2()).then(function(n3) {
      r2 = n3.default || n3;
    }, function(n3) {
      u2 = n3;
    }), u2) throw u2;
    if (!r2) throw e2;
    return _$1(r2, o3);
  }
  return o2.displayName = "Lazy", o2.__f = true, o2;
}
function B() {
  this.i = null, this.l = null;
}
l$1.unmount = function(n2) {
  var t2 = n2.__c;
  t2 && t2.__R && t2.__R(), t2 && 32 & n2.__u && (n2.type = null), U && U(n2);
}, (P.prototype = new x$2()).__c = function(n2, t2) {
  var e2 = t2.__c, r2 = this;
  null == r2.o && (r2.o = []), r2.o.push(e2);
  var u2 = j(r2.__v), o2 = false, i2 = function() {
    o2 || (o2 = true, e2.__R = null, u2 ? u2(c2) : c2());
  };
  e2.__R = i2;
  var c2 = function() {
    if (!--r2.__u) {
      if (r2.state.__a) {
        var n3 = r2.state.__a;
        r2.__v.__k[0] = W(n3, n3.__c.__P, n3.__c.__O);
      }
      var t3;
      for (r2.setState({ __a: r2.__b = null }); t3 = r2.o.pop(); ) t3.forceUpdate();
    }
  };
  r2.__u++ || 32 & t2.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), n2.then(i2, i2);
}, P.prototype.componentWillUnmount = function() {
  this.o = [];
}, P.prototype.render = function(n2, e2) {
  if (this.__b) {
    if (this.__v.__k) {
      var r2 = document.createElement("div"), o2 = this.__v.__k[0].__c;
      this.__v.__k[0] = V(this.__b, r2, o2.__O = o2.__P);
    }
    this.__b = null;
  }
  var i2 = e2.__a && _$1(k$2, null, n2.fallback);
  return i2 && (i2.__u &= -33), [_$1(k$2, null, e2.__a ? null : n2.children), i2];
};
var H = function(n2, t2, e2) {
  if (++e2[1] === e2[0] && n2.l.delete(t2), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.l.size)) for (e2 = n2.i; e2; ) {
    for (; e2.length > 3; ) e2.pop()();
    if (e2[1] < e2[0]) break;
    n2.i = e2 = e2[2];
  }
};
function Z(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function Y(n2) {
  var e2 = this, r2 = n2.h;
  e2.componentWillUnmount = function() {
    E$1(null, e2.v), e2.v = null, e2.h = null;
  }, e2.h && e2.h !== r2 && e2.componentWillUnmount(), e2.v || (e2.h = r2, e2.v = { nodeType: 1, parentNode: r2, childNodes: [], contains: function() {
    return true;
  }, appendChild: function(n3) {
    this.childNodes.push(n3), e2.h.appendChild(n3);
  }, insertBefore: function(n3, t2) {
    this.childNodes.push(n3), e2.h.insertBefore(n3, t2);
  }, removeChild: function(n3) {
    this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e2.h.removeChild(n3);
  } }), E$1(_$1(Z, { context: e2.context }, n2.__v), e2.v);
}
function $(n2, e2) {
  var r2 = _$1(Y, { __v: n2, h: e2 });
  return r2.containerInfo = e2, r2;
}
(B.prototype = new x$2()).__a = function(n2) {
  var t2 = this, e2 = j(t2.__v), r2 = t2.l.get(n2);
  return r2[0]++, function(u2) {
    var o2 = function() {
      t2.props.revealOrder ? (r2.push(u2), H(t2, n2, r2)) : u2();
    };
    e2 ? e2(o2) : o2();
  };
}, B.prototype.render = function(n2) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t2 = H$1(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t2.reverse();
  for (var e2 = t2.length; e2--; ) this.l.set(t2[e2], this.i = [1, 0, this.i]);
  return n2.children;
}, B.prototype.componentDidUpdate = B.prototype.componentDidMount = function() {
  var n2 = this;
  this.l.forEach(function(t2, e2) {
    H(n2, e2, t2);
  });
};
var q = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, G = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, J = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, K = /[A-Z0-9]/g, Q = "undefined" != typeof document, X = function(n2) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
};
function nn(n2, t2, e2) {
  return null == t2.__k && (t2.textContent = ""), E$1(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
}
function tn(n2, t2, e2) {
  return G$1(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
}
x$2.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t2) {
  Object.defineProperty(x$2.prototype, t2, { configurable: true, get: function() {
    return this["UNSAFE_" + t2];
  }, set: function(n2) {
    Object.defineProperty(this, t2, { configurable: true, writable: true, value: n2 });
  } });
});
var en = l$1.event;
function rn() {
}
function un() {
  return this.cancelBubble;
}
function on() {
  return this.defaultPrevented;
}
l$1.event = function(n2) {
  return en && (n2 = en(n2)), n2.persist = rn, n2.isPropagationStopped = un, n2.isDefaultPrevented = on, n2.nativeEvent = n2;
};
var cn, ln = { enumerable: false, configurable: true, get: function() {
  return this.class;
} }, fn = l$1.vnode;
l$1.vnode = function(n2) {
  "string" == typeof n2.type && function(n3) {
    var t2 = n3.props, e2 = n3.type, u2 = {}, o2 = -1 === e2.indexOf("-");
    for (var i2 in t2) {
      var c2 = t2[i2];
      if (!("value" === i2 && "defaultValue" in t2 && null == c2 || Q && "children" === i2 && "noscript" === e2 || "class" === i2 || "className" === i2)) {
        var l2 = i2.toLowerCase();
        "defaultValue" === i2 && "value" in t2 && null == t2.value ? i2 = "value" : "download" === i2 && true === c2 ? c2 = "" : "translate" === l2 && "no" === c2 ? c2 = false : "o" === l2[0] && "n" === l2[1] ? "ondoubleclick" === l2 ? i2 = "ondblclick" : "onchange" !== l2 || "input" !== e2 && "textarea" !== e2 || X(t2.type) ? "onfocus" === l2 ? i2 = "onfocusin" : "onblur" === l2 ? i2 = "onfocusout" : J.test(i2) && (i2 = l2) : l2 = i2 = "oninput" : o2 && G.test(i2) ? i2 = i2.replace(K, "-$&").toLowerCase() : null === c2 && (c2 = void 0), "oninput" === l2 && u2[i2 = l2] && (i2 = "oninputCapture"), u2[i2] = c2;
      }
    }
    "select" == e2 && u2.multiple && Array.isArray(u2.value) && (u2.value = H$1(t2.children).forEach(function(n4) {
      n4.props.selected = -1 != u2.value.indexOf(n4.props.value);
    })), "select" == e2 && null != u2.defaultValue && (u2.value = H$1(t2.children).forEach(function(n4) {
      n4.props.selected = u2.multiple ? -1 != u2.defaultValue.indexOf(n4.props.value) : u2.defaultValue == n4.props.value;
    })), t2.class && !t2.className ? (u2.class = t2.class, Object.defineProperty(u2, "className", ln)) : (t2.className && !t2.class || t2.class && t2.className) && (u2.class = u2.className = t2.className), n3.props = u2;
  }(n2), n2.$$typeof = q, fn && fn(n2);
};
var an = l$1.__r;
l$1.__r = function(n2) {
  an && an(n2), cn = n2.__c;
};
var sn = l$1.diffed;
l$1.diffed = function(n2) {
  sn && sn(n2);
  var t2 = n2.props, e2 = n2.__e;
  null != e2 && "textarea" === n2.type && "value" in t2 && t2.value !== e2.value && (e2.value = null == t2.value ? "" : t2.value), cn = null;
};
var hn = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
  return cn.__n[n2.__c].props.value;
}, useCallback: q$1, useContext: x$1, useDebugValue: P$1, useDeferredValue: w, useEffect: y, useId: g$1, useImperativeHandle: F$1, useInsertionEffect: I, useLayoutEffect: _, useMemo: T$1, useReducer: h, useRef: A$1, useState: d, useSyncExternalStore: C, useTransition: k } } }, vn = "18.3.1";
function dn(n2) {
  return _$1.bind(null, n2);
}
function pn(n2) {
  return !!n2 && n2.$$typeof === q;
}
function mn(n2) {
  return pn(n2) && n2.type === k$2;
}
function yn(n2) {
  return !!n2 && !!n2.displayName && ("string" == typeof n2.displayName || n2.displayName instanceof String) && n2.displayName.startsWith("Memo(");
}
function _n(n2) {
  return pn(n2) ? J$1.apply(null, arguments) : n2;
}
function bn(n2) {
  return !!n2.__k && (E$1(null, n2), true);
}
function Sn(n2) {
  return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
}
var gn = function(n2, t2) {
  return n2(t2);
}, En = function(n2, t2) {
  return n2(t2);
}, Cn = k$2, xn = pn, Rn = { useState: d, useId: g$1, useReducer: h, useEffect: y, useLayoutEffect: _, useInsertionEffect: I, useTransition: k, useDeferredValue: w, useSyncExternalStore: C, startTransition: R, useRef: A$1, useImperativeHandle: F$1, useMemo: T$1, useCallback: q$1, useContext: x$1, useDebugValue: P$1, version: "18.3.1", Children: O, render: nn, hydrate: tn, unmountComponentAtNode: bn, createPortal: $, createElement: _$1, createContext: K$1, createFactory: dn, cloneElement: _n, createRef: b$1, Fragment: k$2, isValidElement: pn, isElement: xn, isFragment: mn, isMemo: yn, findDOMNode: Sn, Component: x$2, PureComponent: N, memo: M, forwardRef: D, flushSync: En, unstable_batchedUpdates: gn, StrictMode: Cn, Suspense: P, SuspenseList: B, lazy: z, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn };
const react = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: O,
  Component: x$2,
  Fragment: k$2,
  PureComponent: N,
  StrictMode: Cn,
  Suspense: P,
  SuspenseList: B,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn,
  cloneElement: _n,
  createContext: K$1,
  createElement: _$1,
  createFactory: dn,
  createPortal: $,
  createRef: b$1,
  default: Rn,
  findDOMNode: Sn,
  flushSync: En,
  forwardRef: D,
  hydrate: tn,
  isElement: xn,
  isFragment: mn,
  isMemo: yn,
  isValidElement: pn,
  lazy: z,
  memo: M,
  render: nn,
  startTransition: R,
  unmountComponentAtNode: bn,
  unstable_batchedUpdates: gn,
  useCallback: q$1,
  useContext: x$1,
  useDebugValue: P$1,
  useDeferredValue: w,
  useEffect: y,
  useErrorBoundary: b,
  useId: g$1,
  useImperativeHandle: F$1,
  useInsertionEffect: I,
  useLayoutEffect: _,
  useMemo: T$1,
  useReducer: h,
  useRef: A$1,
  useState: d,
  useSyncExternalStore: C,
  useTransition: k,
  version: vn
}, Symbol.toStringTag, { value: "Module" }));
function createRoot(container) {
  return {
    // eslint-disable-next-line
    render: function(children) {
      nn(children, container);
    },
    // eslint-disable-next-line
    unmount: function() {
      bn(container);
    }
  };
}
function hydrateRoot(container, children) {
  tn(children, container);
  return createRoot(container);
}
const ReactDOM = {
  createRoot,
  hydrateRoot
};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace(n2) {
  if (Object.prototype.hasOwnProperty.call(n2, "__esModule")) return n2;
  var f2 = n2.default;
  if (typeof f2 == "function") {
    var a2 = function a3() {
      if (this instanceof a3) {
        return Reflect.construct(f2, arguments, this.constructor);
      }
      return f2.apply(this, arguments);
    };
    a2.prototype = f2.prototype;
  } else a2 = {};
  Object.defineProperty(a2, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k2) {
    var d2 = Object.getOwnPropertyDescriptor(n2, k2);
    Object.defineProperty(a2, k2, d2.get ? d2 : {
      enumerable: true,
      get: function() {
        return n2[k2];
      }
    });
  });
  return a2;
}
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var hasRequiredClassnames;
function requireClassnames() {
  if (hasRequiredClassnames) return classnames.exports;
  hasRequiredClassnames = 1;
  (function(module) {
    (function() {
      var hasOwn = {}.hasOwnProperty;
      function classNames2() {
        var classes = "";
        for (var i2 = 0; i2 < arguments.length; i2++) {
          var arg = arguments[i2];
          if (arg) {
            classes = appendClass(classes, parseValue2(arg));
          }
        }
        return classes;
      }
      function parseValue2(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames2.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (module.exports) {
        classNames2.default = classNames2;
        module.exports = classNames2;
      } else {
        window.classNames = classNames2;
      }
    })();
  })(classnames);
  return classnames.exports;
}
var classnamesExports = requireClassnames();
const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
function die$1(error) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + error);
}
var mockGlobal = {};
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  return mockGlobal;
}
var assign = Object.assign;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var hasProxy = typeof Proxy !== "undefined";
var plainObjectString = /* @__PURE__ */ Object.toString();
function assertProxies() {
  if (!hasProxy) {
    die$1("Proxy not available");
  }
}
function once(func) {
  var invoked = false;
  return function() {
    if (invoked) {
      return;
    }
    invoked = true;
    return func.apply(this, arguments);
  };
}
var noop = function noop2() {
};
function isFunction$1(fn2) {
  return typeof fn2 === "function";
}
function isStringish(value) {
  var t2 = typeof value;
  switch (t2) {
    case "string":
    case "symbol":
    case "number":
      return true;
  }
  return false;
}
function isObject$2(value) {
  return value !== null && typeof value === "object";
}
function isPlainObject$2(value) {
  if (!isObject$2(value)) {
    return false;
  }
  var proto = Object.getPrototypeOf(value);
  if (proto == null) {
    return true;
  }
  var protoConstructor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof protoConstructor === "function" && protoConstructor.toString() === plainObjectString;
}
function isGenerator(obj) {
  var constructor = obj == null ? void 0 : obj.constructor;
  if (!constructor) {
    return false;
  }
  if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) {
    return true;
  }
  return false;
}
function addHiddenProp(object2, propName, value) {
  defineProperty(object2, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value
  });
}
function addHiddenFinalProp(object2, propName, value) {
  defineProperty(object2, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value
  });
}
function createInstanceofPredicate(name, theClass) {
  var propName = "isMobX" + name;
  theClass.prototype[propName] = true;
  return function(x2) {
    return isObject$2(x2) && x2[propName] === true;
  };
}
function isES6Map(thing) {
  return thing != null && Object.prototype.toString.call(thing) === "[object Map]";
}
function isPlainES6Map(thing) {
  var mapProto = Object.getPrototypeOf(thing);
  var objectProto = Object.getPrototypeOf(mapProto);
  var nullProto = Object.getPrototypeOf(objectProto);
  return nullProto === null;
}
function isES6Set(thing) {
  return thing != null && Object.prototype.toString.call(thing) === "[object Set]";
}
var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
function getPlainObjectKeys(object2) {
  var keys2 = Object.keys(object2);
  if (!hasGetOwnPropertySymbols) {
    return keys2;
  }
  var symbols = Object.getOwnPropertySymbols(object2);
  if (!symbols.length) {
    return keys2;
  }
  return [].concat(keys2, symbols.filter(function(s2) {
    return objectPrototype.propertyIsEnumerable.call(object2, s2);
  }));
}
var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function(obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}
function hasProp(target2, prop2) {
  return objectPrototype.hasOwnProperty.call(target2, prop2);
}
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(target2) {
  var res = {};
  ownKeys(target2).forEach(function(key) {
    res[key] = getDescriptor(target2, key);
  });
  return res;
};
function getFlag(flags, mask) {
  return !!(flags & mask);
}
function setFlag(flags, mask, newValue) {
  if (newValue) {
    flags |= mask;
  } else {
    flags &= ~mask;
  }
  return flags;
}
function _arrayLikeToArray$1(r2, a2) {
  (null == a2 || a2 > r2.length) && (a2 = r2.length);
  for (var e2 = 0, n2 = Array(a2); e2 < a2; e2++) n2[e2] = r2[e2];
  return n2;
}
function _defineProperties(e2, r2) {
  for (var t2 = 0; t2 < r2.length; t2++) {
    var o2 = r2[t2];
    o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, _toPropertyKey(o2.key), o2);
  }
}
function _createClass(e2, r2, t2) {
  return r2 && _defineProperties(e2.prototype, r2), Object.defineProperty(e2, "prototype", {
    writable: false
  }), e2;
}
function _createForOfIteratorHelperLoose$1(r2, e2) {
  var t2 = "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (t2) return (t2 = t2.call(r2)).next.bind(t2);
  if (Array.isArray(r2) || (t2 = _unsupportedIterableToArray$1(r2)) || e2) {
    t2 && (r2 = t2);
    var o2 = 0;
    return function() {
      return o2 >= r2.length ? {
        done: true
      } : {
        done: false,
        value: r2[o2++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t2 = arguments[e2];
      for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
    }
    return n2;
  }, _extends$1.apply(null, arguments);
}
function _inheritsLoose(t2, o2) {
  t2.prototype = Object.create(o2.prototype), t2.prototype.constructor = t2, _setPrototypeOf(t2, o2);
}
function _setPrototypeOf(t2, e2) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t22, e22) {
    return t22.__proto__ = e22, t22;
  }, _setPrototypeOf(t2, e2);
}
function _toPrimitive(t2, r2) {
  if ("object" != typeof t2 || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != typeof i2) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t2);
}
function _toPropertyKey(t2) {
  var i2 = _toPrimitive(t2, "string");
  return "symbol" == typeof i2 ? i2 : i2 + "";
}
function _unsupportedIterableToArray$1(r2, a2) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray$1(r2, a2);
    var t2 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray$1(r2, a2) : void 0;
  }
}
var storedAnnotationsSymbol = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function createDecoratorAnnotation(annotation) {
  function decorator(target2, property) {
    if (is20223Decorator(property)) {
      return annotation.decorate_20223_(target2, property);
    } else {
      storeAnnotation(target2, property, annotation);
    }
  }
  return Object.assign(decorator, annotation);
}
function storeAnnotation(prototype, key, annotation) {
  if (!hasProp(prototype, storedAnnotationsSymbol)) {
    addHiddenProp(prototype, storedAnnotationsSymbol, _extends$1({}, prototype[storedAnnotationsSymbol]));
  }
  if (!isOverride(annotation)) {
    prototype[storedAnnotationsSymbol][key] = annotation;
  }
}
function collectStoredAnnotations(target2) {
  if (!hasProp(target2, storedAnnotationsSymbol)) {
    addHiddenProp(target2, storedAnnotationsSymbol, _extends$1({}, target2[storedAnnotationsSymbol]));
  }
  return target2[storedAnnotationsSymbol];
}
function is20223Decorator(context) {
  return typeof context == "object" && typeof context["kind"] == "string";
}
var $mobx = /* @__PURE__ */ Symbol("mobx administration");
var Atom = /* @__PURE__ */ function() {
  function Atom2(name_) {
    if (name_ === void 0) {
      name_ = "Atom";
    }
    this.name_ = void 0;
    this.flags_ = 0;
    this.observers_ = /* @__PURE__ */ new Set();
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    this.name_ = name_;
  }
  var _proto = Atom2.prototype;
  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.reportObserved = function reportObserved$1() {
    return reportObserved(this);
  };
  _proto.reportChanged = function reportChanged() {
    startBatch();
    propagateChanged(this);
    endBatch();
  };
  _proto.toString = function toString2() {
    return this.name_;
  };
  return _createClass(Atom2, [{
    key: "isBeingObserved",
    get: function get4() {
      return getFlag(this.flags_, Atom2.isBeingObservedMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, Atom2.isBeingObservedMask_, newValue);
    }
  }, {
    key: "isPendingUnobservation",
    get: function get4() {
      return getFlag(this.flags_, Atom2.isPendingUnobservationMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, Atom2.isPendingUnobservationMask_, newValue);
    }
  }, {
    key: "diffValue",
    get: function get4() {
      return getFlag(this.flags_, Atom2.diffValueMask_) ? 1 : 0;
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, Atom2.diffValueMask_, newValue === 1 ? true : false);
    }
  }]);
}();
Atom.isBeingObservedMask_ = 1;
Atom.isPendingUnobservationMask_ = 2;
Atom.diffValueMask_ = 4;
var isAtom = /* @__PURE__ */ createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }
  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }
  var atom = new Atom(name);
  if (onBecomeObservedHandler !== noop) {
    onBecomeObserved(atom, onBecomeObservedHandler);
  }
  if (onBecomeUnobservedHandler !== noop) {
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  }
  return atom;
}
function structuralComparer(a2, b2) {
  return deepEqual$1(a2, b2);
}
function defaultComparer(a2, b2) {
  if (Object.is) {
    return Object.is(a2, b2);
  }
  return a2 === b2 ? a2 !== 0 || 1 / a2 === 1 / b2 : a2 !== a2 && b2 !== b2;
}
var comparer = {
  structural: structuralComparer,
  "default": defaultComparer
};
function deepEnhancer(v2, _14, name) {
  if (isObservable(v2)) {
    return v2;
  }
  if (Array.isArray(v2)) {
    return observable.array(v2, {
      name
    });
  }
  if (isPlainObject$2(v2)) {
    return observable.object(v2, void 0, {
      name
    });
  }
  if (isES6Map(v2)) {
    return observable.map(v2, {
      name
    });
  }
  if (isES6Set(v2)) {
    return observable.set(v2, {
      name
    });
  }
  if (typeof v2 === "function" && !isAction(v2) && !isFlow(v2)) {
    if (isGenerator(v2)) {
      return flow(v2);
    } else {
      return autoAction(name, v2);
    }
  }
  return v2;
}
function shallowEnhancer(v2, _14, name) {
  if (v2 === void 0 || v2 === null) {
    return v2;
  }
  if (isObservableObject(v2) || isObservableArray(v2) || isObservableMap(v2) || isObservableSet(v2)) {
    return v2;
  }
  if (Array.isArray(v2)) {
    return observable.array(v2, {
      name,
      deep: false
    });
  }
  if (isPlainObject$2(v2)) {
    return observable.object(v2, void 0, {
      name,
      deep: false
    });
  }
  if (isES6Map(v2)) {
    return observable.map(v2, {
      name,
      deep: false
    });
  }
  if (isES6Set(v2)) {
    return observable.set(v2, {
      name,
      deep: false
    });
  }
}
function referenceEnhancer(newValue) {
  return newValue;
}
function refStructEnhancer(v2, oldValue) {
  if (deepEqual$1(v2, oldValue)) {
    return oldValue;
  }
  return v2;
}
var OVERRIDE = "override";
function isOverride(annotation) {
  return annotation.annotationType_ === OVERRIDE;
}
function createActionAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$1,
    extend_: extend_$1,
    decorate_20223_: decorate_20223_$1
  };
}
function make_$1(adm, key, descriptor, source) {
  var _this$options_;
  if ((_this$options_ = this.options_) != null && _this$options_.bound) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
  }
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 2;
  }
  if (isAction(descriptor.value)) {
    return 1;
  }
  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
  defineProperty(source, key, actionDescriptor);
  return 2;
}
function extend_$1(adm, key, descriptor, proxyTrap) {
  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
  return adm.defineProperty_(key, actionDescriptor, proxyTrap);
}
function decorate_20223_$1(mthd, context) {
  var kind = context.kind, name = context.name, addInitializer = context.addInitializer;
  var ann = this;
  var _createAction = function _createAction2(m2) {
    var _ann$options_$name, _ann$options_, _ann$options_$autoAct, _ann$options_2;
    return createAction((_ann$options_$name = (_ann$options_ = ann.options_) == null ? void 0 : _ann$options_.name) != null ? _ann$options_$name : name.toString(), m2, (_ann$options_$autoAct = (_ann$options_2 = ann.options_) == null ? void 0 : _ann$options_2.autoAction) != null ? _ann$options_$autoAct : false);
  };
  if (kind == "field") {
    return function(initMthd) {
      var _ann$options_3;
      var mthd2 = initMthd;
      if (!isAction(mthd2)) {
        mthd2 = _createAction(mthd2);
      }
      if ((_ann$options_3 = ann.options_) != null && _ann$options_3.bound) {
        mthd2 = mthd2.bind(this);
        mthd2.isMobxAction = true;
      }
      return mthd2;
    };
  }
  if (kind == "method") {
    var _this$options_2;
    if (!isAction(mthd)) {
      mthd = _createAction(mthd);
    }
    if ((_this$options_2 = this.options_) != null && _this$options_2.bound) {
      addInitializer(function() {
        var self2 = this;
        var bound = self2[name].bind(self2);
        bound.isMobxAction = true;
        self2[name] = bound;
      });
    }
    return mthd;
  }
  die$1("Cannot apply '" + ann.annotationType_ + "' to '" + String(name) + "' (kind: " + kind + "):" + ("\n'" + ann.annotationType_ + "' can only be used on properties with a function value."));
}
function assertActionDescriptor(adm, _ref, key, _ref2) {
  _ref.annotationType_;
  _ref2.value;
}
function createActionDescriptor(adm, annotation, key, descriptor, safeDescriptors) {
  var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3, _annotation$options_4, _adm$proxy_2;
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }
  assertActionDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;
  if ((_annotation$options_ = annotation.options_) != null && _annotation$options_.bound) {
    var _adm$proxy_;
    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }
  return {
    value: createAction(
      (_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(),
      value,
      (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false,
      // https://github.com/mobxjs/mobx/discussions/3140
      (_annotation$options_4 = annotation.options_) != null && _annotation$options_4.bound ? (_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_ : void 0
    ),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: false,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: safeDescriptors ? false : true
  };
}
function createFlowAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$2,
    extend_: extend_$2,
    decorate_20223_: decorate_20223_$2
  };
}
function make_$2(adm, key, descriptor, source) {
  var _this$options_;
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 2;
  }
  if ((_this$options_ = this.options_) != null && _this$options_.bound && (!hasProp(adm.target_, key) || !isFlow(adm.target_[key]))) {
    if (this.extend_(adm, key, descriptor, false) === null) {
      return 0;
    }
  }
  if (isFlow(descriptor.value)) {
    return 1;
  }
  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
  defineProperty(source, key, flowDescriptor);
  return 2;
}
function extend_$2(adm, key, descriptor, proxyTrap) {
  var _this$options_2;
  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, (_this$options_2 = this.options_) == null ? void 0 : _this$options_2.bound);
  return adm.defineProperty_(key, flowDescriptor, proxyTrap);
}
function decorate_20223_$2(mthd, context) {
  var _this$options_3;
  var name = context.name, addInitializer = context.addInitializer;
  if (!isFlow(mthd)) {
    mthd = flow(mthd);
  }
  if ((_this$options_3 = this.options_) != null && _this$options_3.bound) {
    addInitializer(function() {
      var self2 = this;
      var bound = self2[name].bind(self2);
      bound.isMobXFlow = true;
      self2[name] = bound;
    });
  }
  return mthd;
}
function assertFlowDescriptor(adm, _ref, key, _ref2) {
  _ref.annotationType_;
  _ref2.value;
}
function createFlowDescriptor(adm, annotation, key, descriptor, bound, safeDescriptors) {
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }
  assertFlowDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;
  if (!isFlow(value)) {
    value = flow(value);
  }
  if (bound) {
    var _adm$proxy_;
    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
    value.isMobXFlow = true;
  }
  return {
    value,
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: false,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: safeDescriptors ? false : true
  };
}
function createComputedAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$3,
    extend_: extend_$3,
    decorate_20223_: decorate_20223_$3
  };
}
function make_$3(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
}
function extend_$3(adm, key, descriptor, proxyTrap) {
  assertComputedDescriptor(adm, this, key, descriptor);
  return adm.defineComputedProperty_(key, _extends$1({}, this.options_, {
    get: descriptor.get,
    set: descriptor.set
  }), proxyTrap);
}
function decorate_20223_$3(get4, context) {
  var ann = this;
  var key = context.name, addInitializer = context.addInitializer;
  addInitializer(function() {
    var adm = asObservableObject(this)[$mobx];
    var options = _extends$1({}, ann.options_, {
      get: get4,
      context: this
    });
    options.name || (options.name = "ObservableObject." + key.toString());
    adm.values_.set(key, new ComputedValue(options));
  });
  return function() {
    return this[$mobx].getObservablePropValue_(key);
  };
}
function assertComputedDescriptor(adm, _ref, key, _ref2) {
  _ref.annotationType_;
  _ref2.get;
}
function createObservableAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$4,
    extend_: extend_$4,
    decorate_20223_: decorate_20223_$4
  };
}
function make_$4(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
}
function extend_$4(adm, key, descriptor, proxyTrap) {
  var _this$options_$enhanc, _this$options_;
  assertObservableDescriptor(adm, this);
  return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer, proxyTrap);
}
function decorate_20223_$4(desc, context) {
  var ann = this;
  var kind = context.kind, name = context.name;
  var initializedObjects = /* @__PURE__ */ new WeakSet();
  function initializeObservable(target2, value) {
    var _ann$options_$enhance, _ann$options_;
    var adm = asObservableObject(target2)[$mobx];
    var observable2 = new ObservableValue(value, (_ann$options_$enhance = (_ann$options_ = ann.options_) == null ? void 0 : _ann$options_.enhancer) != null ? _ann$options_$enhance : deepEnhancer, "ObservableObject." + name.toString(), false);
    adm.values_.set(name, observable2);
    initializedObjects.add(target2);
  }
  if (kind == "accessor") {
    return {
      get: function get4() {
        if (!initializedObjects.has(this)) {
          initializeObservable(this, desc.get.call(this));
        }
        return this[$mobx].getObservablePropValue_(name);
      },
      set: function set5(value) {
        if (!initializedObjects.has(this)) {
          initializeObservable(this, value);
        }
        return this[$mobx].setObservablePropValue_(name, value);
      },
      init: function init(value) {
        if (!initializedObjects.has(this)) {
          initializeObservable(this, value);
        }
        return value;
      }
    };
  }
  return;
}
function assertObservableDescriptor(adm, _ref, key, descriptor) {
  _ref.annotationType_;
}
var AUTO = "true";
var autoAnnotation = /* @__PURE__ */ createAutoAnnotation();
function createAutoAnnotation(options) {
  return {
    annotationType_: AUTO,
    options_: options,
    make_: make_$5,
    extend_: extend_$5,
    decorate_20223_: decorate_20223_$5
  };
}
function make_$5(adm, key, descriptor, source) {
  var _this$options_3, _this$options_4;
  if (descriptor.get) {
    return computed.make_(adm, key, descriptor, source);
  }
  if (descriptor.set) {
    var set5 = createAction(key.toString(), descriptor.set);
    if (source === adm.target_) {
      return adm.defineProperty_(key, {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set: set5
      }) === null ? 0 : 2;
    }
    defineProperty(source, key, {
      configurable: true,
      set: set5
    });
    return 2;
  }
  if (source !== adm.target_ && typeof descriptor.value === "function") {
    var _this$options_2;
    if (isGenerator(descriptor.value)) {
      var _this$options_;
      var flowAnnotation2 = (_this$options_ = this.options_) != null && _this$options_.autoBind ? flow.bound : flow;
      return flowAnnotation2.make_(adm, key, descriptor, source);
    }
    var actionAnnotation2 = (_this$options_2 = this.options_) != null && _this$options_2.autoBind ? autoAction.bound : autoAction;
    return actionAnnotation2.make_(adm, key, descriptor, source);
  }
  var observableAnnotation2 = ((_this$options_3 = this.options_) == null ? void 0 : _this$options_3.deep) === false ? observable.ref : observable;
  if (typeof descriptor.value === "function" && (_this$options_4 = this.options_) != null && _this$options_4.autoBind) {
    var _adm$proxy_;
    descriptor.value = descriptor.value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }
  return observableAnnotation2.make_(adm, key, descriptor, source);
}
function extend_$5(adm, key, descriptor, proxyTrap) {
  var _this$options_5, _this$options_6;
  if (descriptor.get) {
    return computed.extend_(adm, key, descriptor, proxyTrap);
  }
  if (descriptor.set) {
    return adm.defineProperty_(key, {
      configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
      set: createAction(key.toString(), descriptor.set)
    }, proxyTrap);
  }
  if (typeof descriptor.value === "function" && (_this$options_5 = this.options_) != null && _this$options_5.autoBind) {
    var _adm$proxy_2;
    descriptor.value = descriptor.value.bind((_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_);
  }
  var observableAnnotation2 = ((_this$options_6 = this.options_) == null ? void 0 : _this$options_6.deep) === false ? observable.ref : observable;
  return observableAnnotation2.extend_(adm, key, descriptor, proxyTrap);
}
function decorate_20223_$5(desc, context) {
  die$1("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var OBSERVABLE = "observable";
var OBSERVABLE_REF = "observable.ref";
var OBSERVABLE_SHALLOW = "observable.shallow";
var OBSERVABLE_STRUCT = "observable.struct";
var defaultCreateObservableOptions = {
  deep: true,
  name: void 0,
  defaultDecorator: void 0,
  proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function asCreateObservableOptions(thing) {
  return thing || defaultCreateObservableOptions;
}
var observableAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE);
var observableRefAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_REF, {
  enhancer: referenceEnhancer
});
var observableShallowAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_SHALLOW, {
  enhancer: shallowEnhancer
});
var observableStructAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_STRUCT, {
  enhancer: refStructEnhancer
});
var observableDecoratorAnnotation = /* @__PURE__ */ createDecoratorAnnotation(observableAnnotation);
function getEnhancerFromOptions(options) {
  return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
}
function getAnnotationFromOptions(options) {
  var _options$defaultDecor;
  return options ? (_options$defaultDecor = options.defaultDecorator) != null ? _options$defaultDecor : createAutoAnnotation(options) : void 0;
}
function getEnhancerFromAnnotation(annotation) {
  var _annotation$options_$, _annotation$options_;
  return !annotation ? deepEnhancer : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer;
}
function createObservable(v2, arg2, arg3) {
  if (is20223Decorator(arg2)) {
    return observableAnnotation.decorate_20223_(v2, arg2);
  }
  if (isStringish(arg2)) {
    storeAnnotation(v2, arg2, observableAnnotation);
    return;
  }
  if (isObservable(v2)) {
    return v2;
  }
  if (isPlainObject$2(v2)) {
    return observable.object(v2, arg2, arg3);
  }
  if (Array.isArray(v2)) {
    return observable.array(v2, arg2);
  }
  if (isES6Map(v2)) {
    return observable.map(v2, arg2);
  }
  if (isES6Set(v2)) {
    return observable.set(v2, arg2);
  }
  if (typeof v2 === "object" && v2 !== null) {
    return v2;
  }
  return observable.box(v2, arg2);
}
assign(createObservable, observableDecoratorAnnotation);
var observableFactories = {
  box: function box(value, options) {
    var o2 = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o2), o2.name, true, o2.equals);
  },
  array: function array(initialValues, options) {
    var o2 = asCreateObservableOptions(options);
    return (globalState.useProxies === false || o2.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o2), o2.name);
  },
  map: function map(initialValues, options) {
    var o2 = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o2), o2.name);
  },
  set: function set(initialValues, options) {
    var o2 = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOptions(o2), o2.name);
  },
  object: function object(props, decorators, options) {
    return initObservable(function() {
      return extendObservable(globalState.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators);
    });
  },
  ref: /* @__PURE__ */ createDecoratorAnnotation(observableRefAnnotation),
  shallow: /* @__PURE__ */ createDecoratorAnnotation(observableShallowAnnotation),
  deep: observableDecoratorAnnotation,
  struct: /* @__PURE__ */ createDecoratorAnnotation(observableStructAnnotation)
};
var observable = /* @__PURE__ */ assign(createObservable, observableFactories);
var COMPUTED = "computed";
var COMPUTED_STRUCT = "computed.struct";
var computedAnnotation = /* @__PURE__ */ createComputedAnnotation(COMPUTED);
var computedStructAnnotation = /* @__PURE__ */ createComputedAnnotation(COMPUTED_STRUCT, {
  equals: comparer.structural
});
var computed = function computed2(arg1, arg2) {
  if (is20223Decorator(arg2)) {
    return computedAnnotation.decorate_20223_(arg1, arg2);
  }
  if (isStringish(arg2)) {
    return storeAnnotation(arg1, arg2, computedAnnotation);
  }
  if (isPlainObject$2(arg1)) {
    return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
  }
  var opts = isPlainObject$2(arg2) ? arg2 : {};
  opts.get = arg1;
  opts.name || (opts.name = arg1.name || "");
  return new ComputedValue(opts);
};
Object.assign(computed, computedAnnotation);
computed.struct = /* @__PURE__ */ createDecoratorAnnotation(computedStructAnnotation);
var _getDescriptor$config, _getDescriptor;
var currentActionId = 0;
var nextActionId = 1;
var isFunctionNameConfigurable$1 = (_getDescriptor$config = (_getDescriptor = /* @__PURE__ */ getDescriptor(function() {
}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false;
var tmpNameDescriptor = {
  value: "action",
  configurable: true,
  writable: false,
  enumerable: false
};
function createAction(actionName, fn2, autoAction2, ref) {
  if (autoAction2 === void 0) {
    autoAction2 = false;
  }
  function res() {
    return executeAction(actionName, autoAction2, fn2, ref || this, arguments);
  }
  res.isMobxAction = true;
  res.toString = function() {
    return fn2.toString();
  };
  if (isFunctionNameConfigurable$1) {
    tmpNameDescriptor.value = actionName;
    defineProperty(res, "name", tmpNameDescriptor);
  }
  return res;
}
function executeAction(actionName, canRunAsDerivation, fn2, scope2, args) {
  var runInfo = _startAction(actionName, canRunAsDerivation);
  try {
    return fn2.apply(scope2, args);
  } catch (err) {
    runInfo.error_ = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}
function _startAction(actionName, canRunAsDerivation, scope2, args) {
  var notifySpy_ = false;
  var startTime_ = 0;
  var prevDerivation_ = globalState.trackingDerivation;
  var runAsAction = !canRunAsDerivation || !prevDerivation_;
  startBatch();
  var prevAllowStateChanges_ = globalState.allowStateChanges;
  if (runAsAction) {
    untrackedStart();
    prevAllowStateChanges_ = allowStateChangesStart(true);
  }
  var prevAllowStateReads_ = allowStateReadsStart(true);
  var runInfo = {
    runAsAction_: runAsAction,
    prevDerivation_,
    prevAllowStateChanges_,
    prevAllowStateReads_,
    notifySpy_,
    startTime_,
    actionId_: nextActionId++,
    parentActionId_: currentActionId
  };
  currentActionId = runInfo.actionId_;
  return runInfo;
}
function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId_) {
    die$1(30);
  }
  currentActionId = runInfo.parentActionId_;
  if (runInfo.error_ !== void 0) {
    globalState.suppressReactionErrors = true;
  }
  allowStateChangesEnd(runInfo.prevAllowStateChanges_);
  allowStateReadsEnd(runInfo.prevAllowStateReads_);
  endBatch();
  if (runInfo.runAsAction_) {
    untrackedEnd(runInfo.prevDerivation_);
  }
  globalState.suppressReactionErrors = false;
}
function allowStateChangesStart(allowStateChanges2) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges2;
  return prev;
}
function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}
var ObservableValue = /* @__PURE__ */ function(_Atom) {
  function ObservableValue2(value, enhancer, name_, notifySpy, equals2) {
    var _this;
    if (name_ === void 0) {
      name_ = "ObservableValue";
    }
    if (equals2 === void 0) {
      equals2 = comparer["default"];
    }
    _this = _Atom.call(this, name_) || this;
    _this.enhancer = void 0;
    _this.name_ = void 0;
    _this.equals = void 0;
    _this.hasUnreportedChange_ = false;
    _this.interceptors_ = void 0;
    _this.changeListeners_ = void 0;
    _this.value_ = void 0;
    _this.dehancer = void 0;
    _this.enhancer = enhancer;
    _this.name_ = name_;
    _this.equals = equals2;
    _this.value_ = enhancer(value, void 0, name_);
    return _this;
  }
  _inheritsLoose(ObservableValue2, _Atom);
  var _proto = ObservableValue2.prototype;
  _proto.dehanceValue = function dehanceValue(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.set = function set5(newValue) {
    this.value_;
    newValue = this.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      this.setNewValue_(newValue);
    }
  };
  _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: UPDATE,
        newValue
      });
      if (!change) {
        return globalState.UNCHANGED;
      }
      newValue = change.newValue;
    }
    newValue = this.enhancer(newValue, this.value_, this.name_);
    return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
  };
  _proto.setNewValue_ = function setNewValue_(newValue) {
    var oldValue = this.value_;
    this.value_ = newValue;
    this.reportChanged();
    if (hasListeners(this)) {
      notifyListeners(this, {
        type: UPDATE,
        object: this,
        newValue,
        oldValue
      });
    }
  };
  _proto.get = function get4() {
    this.reportObserved();
    return this.dehanceValue(this.value_);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately) {
      listener({
        observableKind: "value",
        debugObjectName: this.name_,
        object: this,
        type: UPDATE,
        newValue: this.value_,
        oldValue: void 0
      });
    }
    return registerListener(this, listener);
  };
  _proto.raw = function raw() {
    return this.value_;
  };
  _proto.toJSON = function toJSON2() {
    return this.get();
  };
  _proto.toString = function toString2() {
    return this.name_ + "[" + this.value_ + "]";
  };
  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };
  _proto[Symbol.toPrimitive] = function() {
    return this.valueOf();
  };
  return ObservableValue2;
}(Atom);
var isObservableValue = /* @__PURE__ */ createInstanceofPredicate("ObservableValue", ObservableValue);
var ComputedValue = /* @__PURE__ */ function() {
  function ComputedValue2(options) {
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.observing_ = [];
    this.newObserving_ = null;
    this.observers_ = /* @__PURE__ */ new Set();
    this.runId_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    this.unboundDepsCount_ = 0;
    this.value_ = new CaughtException(null);
    this.name_ = void 0;
    this.triggeredBy_ = void 0;
    this.flags_ = 0;
    this.derivation = void 0;
    this.setter_ = void 0;
    this.isTracing_ = TraceMode.NONE;
    this.scope_ = void 0;
    this.equals_ = void 0;
    this.requiresReaction_ = void 0;
    this.keepAlive_ = void 0;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    if (!options.get) {
      die$1(31);
    }
    this.derivation = options.get;
    this.name_ = options.name || "ComputedValue";
    if (options.set) {
      this.setter_ = createAction("ComputedValue-setter", options.set);
    }
    this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
    this.scope_ = options.context;
    this.requiresReaction_ = options.requiresReaction;
    this.keepAlive_ = !!options.keepAlive;
  }
  var _proto = ComputedValue2.prototype;
  _proto.onBecomeStale_ = function onBecomeStale_() {
    propagateMaybeChanged(this);
  };
  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.get = function get4() {
    if (this.isComputing) {
      die$1(32, this.name_, this.derivation);
    }
    if (globalState.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead_();
        startBatch();
        this.value_ = this.computeValue_(false);
        endBatch();
      }
    } else {
      reportObserved(this);
      if (shouldCompute(this)) {
        var prevTrackingContext = globalState.trackingContext;
        if (this.keepAlive_ && !prevTrackingContext) {
          globalState.trackingContext = this;
        }
        if (this.trackAndCompute()) {
          propagateChangeConfirmed(this);
        }
        globalState.trackingContext = prevTrackingContext;
      }
    }
    var result = this.value_;
    if (isCaughtException(result)) {
      throw result.cause;
    }
    return result;
  };
  _proto.set = function set5(value) {
    if (this.setter_) {
      if (this.isRunningSetter) {
        die$1(33, this.name_);
      }
      this.isRunningSetter = true;
      try {
        this.setter_.call(this.scope_, value);
      } finally {
        this.isRunningSetter = false;
      }
    } else {
      die$1(34, this.name_);
    }
  };
  _proto.trackAndCompute = function trackAndCompute() {
    var oldValue = this.value_;
    var wasSuspended = (
      /* see #1208 */
      this.dependenciesState_ === IDerivationState_.NOT_TRACKING_
    );
    var newValue = this.computeValue_(true);
    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);
    if (changed) {
      this.value_ = newValue;
    }
    return changed;
  };
  _proto.computeValue_ = function computeValue_(track) {
    this.isComputing = true;
    var prev = allowStateChangesStart(false);
    var res;
    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope_);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope_);
      } else {
        try {
          res = this.derivation.call(this.scope_);
        } catch (e2) {
          res = new CaughtException(e2);
        }
      }
    }
    allowStateChangesEnd(prev);
    this.isComputing = false;
    return res;
  };
  _proto.suspend_ = function suspend_() {
    if (!this.keepAlive_) {
      clearObserving(this);
      this.value_ = void 0;
    }
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    var _this = this;
    var firstTime = true;
    var prevValue = void 0;
    return autorun(function() {
      var newValue = _this.get();
      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          observableKind: "computed",
          debugObjectName: _this.name_,
          type: UPDATE,
          object: _this,
          newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }
      firstTime = false;
      prevValue = newValue;
    });
  };
  _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
    {
      return;
    }
  };
  _proto.toString = function toString2() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  };
  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };
  _proto[Symbol.toPrimitive] = function() {
    return this.valueOf();
  };
  return _createClass(ComputedValue2, [{
    key: "isComputing",
    get: function get4() {
      return getFlag(this.flags_, ComputedValue2.isComputingMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, ComputedValue2.isComputingMask_, newValue);
    }
  }, {
    key: "isRunningSetter",
    get: function get4() {
      return getFlag(this.flags_, ComputedValue2.isRunningSetterMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, ComputedValue2.isRunningSetterMask_, newValue);
    }
  }, {
    key: "isBeingObserved",
    get: function get4() {
      return getFlag(this.flags_, ComputedValue2.isBeingObservedMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, ComputedValue2.isBeingObservedMask_, newValue);
    }
  }, {
    key: "isPendingUnobservation",
    get: function get4() {
      return getFlag(this.flags_, ComputedValue2.isPendingUnobservationMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, ComputedValue2.isPendingUnobservationMask_, newValue);
    }
  }, {
    key: "diffValue",
    get: function get4() {
      return getFlag(this.flags_, ComputedValue2.diffValueMask_) ? 1 : 0;
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, ComputedValue2.diffValueMask_, newValue === 1 ? true : false);
    }
  }]);
}();
ComputedValue.isComputingMask_ = 1;
ComputedValue.isRunningSetterMask_ = 2;
ComputedValue.isBeingObservedMask_ = 4;
ComputedValue.isPendingUnobservationMask_ = 8;
ComputedValue.diffValueMask_ = 16;
var isComputedValue = /* @__PURE__ */ createInstanceofPredicate("ComputedValue", ComputedValue);
var IDerivationState_;
(function(IDerivationState_2) {
  IDerivationState_2[IDerivationState_2["NOT_TRACKING_"] = -1] = "NOT_TRACKING_";
  IDerivationState_2[IDerivationState_2["UP_TO_DATE_"] = 0] = "UP_TO_DATE_";
  IDerivationState_2[IDerivationState_2["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_";
  IDerivationState_2[IDerivationState_2["STALE_"] = 2] = "STALE_";
})(IDerivationState_ || (IDerivationState_ = {}));
var TraceMode;
(function(TraceMode2) {
  TraceMode2[TraceMode2["NONE"] = 0] = "NONE";
  TraceMode2[TraceMode2["LOG"] = 1] = "LOG";
  TraceMode2[TraceMode2["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = function CaughtException2(cause) {
  this.cause = void 0;
  this.cause = cause;
};
function isCaughtException(e2) {
  return e2 instanceof CaughtException;
}
function shouldCompute(derivation) {
  switch (derivation.dependenciesState_) {
    case IDerivationState_.UP_TO_DATE_:
      return false;
    case IDerivationState_.NOT_TRACKING_:
    case IDerivationState_.STALE_:
      return true;
    case IDerivationState_.POSSIBLY_STALE_: {
      var prevAllowStateReads = allowStateReadsStart(true);
      var prevUntracked = untrackedStart();
      var obs = derivation.observing_, l2 = obs.length;
      for (var i2 = 0; i2 < l2; i2++) {
        var obj = obs[i2];
        if (isComputedValue(obj)) {
          if (globalState.disableErrorBoundaries) {
            obj.get();
          } else {
            try {
              obj.get();
            } catch (e2) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
          if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
            untrackedEnd(prevUntracked);
            allowStateReadsEnd(prevAllowStateReads);
            return true;
          }
        }
      }
      changeDependenciesStateTo0(derivation);
      untrackedEnd(prevUntracked);
      allowStateReadsEnd(prevAllowStateReads);
      return false;
    }
  }
}
function checkIfStateModificationsAreAllowed(atom) {
  {
    return;
  }
}
function trackDerivedFunction(derivation, f2, context) {
  var prevAllowStateReads = allowStateReadsStart(true);
  changeDependenciesStateTo0(derivation);
  derivation.newObserving_ = new Array(
    // Reserve constant space for initial dependencies, dynamic space otherwise.
    // See https://github.com/mobxjs/mobx/pull/3833
    derivation.runId_ === 0 ? 100 : derivation.observing_.length
  );
  derivation.unboundDepsCount_ = 0;
  derivation.runId_ = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  globalState.inBatch++;
  var result;
  if (globalState.disableErrorBoundaries === true) {
    result = f2.call(context);
  } else {
    try {
      result = f2.call(context);
    } catch (e2) {
      result = new CaughtException(e2);
    }
  }
  globalState.inBatch--;
  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  allowStateReadsEnd(prevAllowStateReads);
  return result;
}
function bindDependencies(derivation) {
  var prevObserving = derivation.observing_;
  var observing = derivation.observing_ = derivation.newObserving_;
  var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_;
  var i0 = 0, l2 = derivation.unboundDepsCount_;
  for (var i2 = 0; i2 < l2; i2++) {
    var dep = observing[i2];
    if (dep.diffValue === 0) {
      dep.diffValue = 1;
      if (i0 !== i2) {
        observing[i0] = dep;
      }
      i0++;
    }
    if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState_;
    }
  }
  observing.length = i0;
  derivation.newObserving_ = null;
  l2 = prevObserving.length;
  while (l2--) {
    var _dep = prevObserving[l2];
    if (_dep.diffValue === 0) {
      removeObserver(_dep, derivation);
    }
    _dep.diffValue = 0;
  }
  while (i0--) {
    var _dep2 = observing[i0];
    if (_dep2.diffValue === 1) {
      _dep2.diffValue = 0;
      addObserver(_dep2, derivation);
    }
  }
  if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
    derivation.dependenciesState_ = lowestNewObservingDerivationState;
    derivation.onBecomeStale_();
  }
}
function clearObserving(derivation) {
  var obs = derivation.observing_;
  derivation.observing_ = [];
  var i2 = obs.length;
  while (i2--) {
    removeObserver(obs[i2], derivation);
  }
  derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
}
function untracked(action2) {
  var prev = untrackedStart();
  try {
    return action2();
  } finally {
    untrackedEnd(prev);
  }
}
function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
  var prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}
function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
    return;
  }
  derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
  var obs = derivation.observing_;
  var i2 = obs.length;
  while (i2--) {
    obs[i2].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  }
}
var MobXGlobals = function MobXGlobals2() {
  this.version = 6;
  this.UNCHANGED = {};
  this.trackingDerivation = null;
  this.trackingContext = null;
  this.runId = 0;
  this.mobxGuid = 0;
  this.inBatch = 0;
  this.pendingUnobservations = [];
  this.pendingReactions = [];
  this.isRunningReactions = false;
  this.allowStateChanges = false;
  this.allowStateReads = true;
  this.enforceActions = true;
  this.spyListeners = [];
  this.globalReactionErrorHandlers = [];
  this.computedRequiresReaction = false;
  this.reactionRequiresObservable = false;
  this.observableRequiresReaction = false;
  this.disableErrorBoundaries = false;
  this.suppressReactionErrors = false;
  this.useProxies = true;
  this.verifyProxies = false;
  this.safeDescriptors = true;
};
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = /* @__PURE__ */ function() {
  var global2 = /* @__PURE__ */ getGlobal();
  if (global2.__mobxInstanceCount > 0 && !global2.__mobxGlobals) {
    canMergeGlobalState = false;
  }
  if (global2.__mobxGlobals && global2.__mobxGlobals.version !== new MobXGlobals().version) {
    canMergeGlobalState = false;
  }
  if (!canMergeGlobalState) {
    setTimeout(function() {
      if (!isolateCalled) {
        die$1(35);
      }
    }, 1);
    return new MobXGlobals();
  } else if (global2.__mobxGlobals) {
    global2.__mobxInstanceCount += 1;
    if (!global2.__mobxGlobals.UNCHANGED) {
      global2.__mobxGlobals.UNCHANGED = {};
    }
    return global2.__mobxGlobals;
  } else {
    global2.__mobxInstanceCount = 1;
    return global2.__mobxGlobals = /* @__PURE__ */ new MobXGlobals();
  }
}();
function isolateGlobalState() {
  if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) {
    die$1(36);
  }
  isolateCalled = true;
  if (canMergeGlobalState) {
    var global2 = getGlobal();
    if (--global2.__mobxInstanceCount === 0) {
      global2.__mobxGlobals = void 0;
    }
    globalState = new MobXGlobals();
  }
}
function addObserver(observable2, node2) {
  observable2.observers_.add(node2);
  if (observable2.lowestObserverState_ > node2.dependenciesState_) {
    observable2.lowestObserverState_ = node2.dependenciesState_;
  }
}
function removeObserver(observable2, node2) {
  observable2.observers_["delete"](node2);
  if (observable2.observers_.size === 0) {
    queueForUnobservation(observable2);
  }
}
function queueForUnobservation(observable2) {
  if (observable2.isPendingUnobservation === false) {
    observable2.isPendingUnobservation = true;
    globalState.pendingUnobservations.push(observable2);
  }
}
function startBatch() {
  globalState.inBatch++;
}
function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions();
    var list = globalState.pendingUnobservations;
    for (var i2 = 0; i2 < list.length; i2++) {
      var observable2 = list[i2];
      observable2.isPendingUnobservation = false;
      if (observable2.observers_.size === 0) {
        if (observable2.isBeingObserved) {
          observable2.isBeingObserved = false;
          observable2.onBUO();
        }
        if (observable2 instanceof ComputedValue) {
          observable2.suspend_();
        }
      }
    }
    globalState.pendingUnobservations = [];
  }
}
function reportObserved(observable2) {
  var derivation = globalState.trackingDerivation;
  if (derivation !== null) {
    if (derivation.runId_ !== observable2.lastAccessedBy_) {
      observable2.lastAccessedBy_ = derivation.runId_;
      derivation.newObserving_[derivation.unboundDepsCount_++] = observable2;
      if (!observable2.isBeingObserved && globalState.trackingContext) {
        observable2.isBeingObserved = true;
        observable2.onBO();
      }
    }
    return observable2.isBeingObserved;
  } else if (observable2.observers_.size === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable2);
  }
  return false;
}
function propagateChanged(observable2) {
  if (observable2.lowestObserverState_ === IDerivationState_.STALE_) {
    return;
  }
  observable2.lowestObserverState_ = IDerivationState_.STALE_;
  observable2.observers_.forEach(function(d2) {
    if (d2.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d2.onBecomeStale_();
    }
    d2.dependenciesState_ = IDerivationState_.STALE_;
  });
}
function propagateChangeConfirmed(observable2) {
  if (observable2.lowestObserverState_ === IDerivationState_.STALE_) {
    return;
  }
  observable2.lowestObserverState_ = IDerivationState_.STALE_;
  observable2.observers_.forEach(function(d2) {
    if (d2.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
      d2.dependenciesState_ = IDerivationState_.STALE_;
    } else if (d2.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      observable2.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }
  });
}
function propagateMaybeChanged(observable2) {
  if (observable2.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) {
    return;
  }
  observable2.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
  observable2.observers_.forEach(function(d2) {
    if (d2.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d2.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
      d2.onBecomeStale_();
    }
  });
}
var Reaction = /* @__PURE__ */ function() {
  function Reaction2(name_, onInvalidate_, errorHandler_, requiresObservable_) {
    if (name_ === void 0) {
      name_ = "Reaction";
    }
    this.name_ = void 0;
    this.onInvalidate_ = void 0;
    this.errorHandler_ = void 0;
    this.requiresObservable_ = void 0;
    this.observing_ = [];
    this.newObserving_ = [];
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.runId_ = 0;
    this.unboundDepsCount_ = 0;
    this.flags_ = 0;
    this.isTracing_ = TraceMode.NONE;
    this.name_ = name_;
    this.onInvalidate_ = onInvalidate_;
    this.errorHandler_ = errorHandler_;
    this.requiresObservable_ = requiresObservable_;
  }
  var _proto = Reaction2.prototype;
  _proto.onBecomeStale_ = function onBecomeStale_() {
    this.schedule_();
  };
  _proto.schedule_ = function schedule_() {
    if (!this.isScheduled) {
      this.isScheduled = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };
  _proto.runReaction_ = function runReaction_() {
    if (!this.isDisposed) {
      startBatch();
      this.isScheduled = false;
      var prev = globalState.trackingContext;
      globalState.trackingContext = this;
      if (shouldCompute(this)) {
        this.isTrackPending = true;
        try {
          this.onInvalidate_();
          if (false) ;
        } catch (e2) {
          this.reportExceptionInDerivation_(e2);
        }
      }
      globalState.trackingContext = prev;
      endBatch();
    }
  };
  _proto.track = function track(fn2) {
    if (this.isDisposed) {
      return;
    }
    startBatch();
    this.isRunning = true;
    var prevReaction = globalState.trackingContext;
    globalState.trackingContext = this;
    var result = trackDerivedFunction(this, fn2, void 0);
    globalState.trackingContext = prevReaction;
    this.isRunning = false;
    this.isTrackPending = false;
    if (this.isDisposed) {
      clearObserving(this);
    }
    if (isCaughtException(result)) {
      this.reportExceptionInDerivation_(result.cause);
    }
    endBatch();
  };
  _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
    var _this = this;
    if (this.errorHandler_) {
      this.errorHandler_(error, this);
      return;
    }
    if (globalState.disableErrorBoundaries) {
      throw error;
    }
    var message = "[mobx] uncaught error in '" + this + "'";
    if (!globalState.suppressReactionErrors) {
      console.error(message, error);
    }
    globalState.globalReactionErrorHandlers.forEach(function(f2) {
      return f2(error, _this);
    });
  };
  _proto.dispose = function dispose() {
    if (!this.isDisposed) {
      this.isDisposed = true;
      if (!this.isRunning) {
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };
  _proto.getDisposer_ = function getDisposer_(abortSignal) {
    var _this2 = this;
    var dispose = function dispose2() {
      _this2.dispose();
      abortSignal == null || abortSignal.removeEventListener == null || abortSignal.removeEventListener("abort", dispose2);
    };
    abortSignal == null || abortSignal.addEventListener == null || abortSignal.addEventListener("abort", dispose);
    dispose[$mobx] = this;
    return dispose;
  };
  _proto.toString = function toString2() {
    return "Reaction[" + this.name_ + "]";
  };
  _proto.trace = function trace$1(enterBreakPoint) {
  };
  return _createClass(Reaction2, [{
    key: "isDisposed",
    get: function get4() {
      return getFlag(this.flags_, Reaction2.isDisposedMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, Reaction2.isDisposedMask_, newValue);
    }
  }, {
    key: "isScheduled",
    get: function get4() {
      return getFlag(this.flags_, Reaction2.isScheduledMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, Reaction2.isScheduledMask_, newValue);
    }
  }, {
    key: "isTrackPending",
    get: function get4() {
      return getFlag(this.flags_, Reaction2.isTrackPendingMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, Reaction2.isTrackPendingMask_, newValue);
    }
  }, {
    key: "isRunning",
    get: function get4() {
      return getFlag(this.flags_, Reaction2.isRunningMask_);
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, Reaction2.isRunningMask_, newValue);
    }
  }, {
    key: "diffValue",
    get: function get4() {
      return getFlag(this.flags_, Reaction2.diffValueMask_) ? 1 : 0;
    },
    set: function set5(newValue) {
      this.flags_ = setFlag(this.flags_, Reaction2.diffValueMask_, newValue === 1 ? true : false);
    }
  }]);
}();
Reaction.isDisposedMask_ = 1;
Reaction.isScheduledMask_ = 2;
Reaction.isTrackPendingMask_ = 4;
Reaction.isRunningMask_ = 8;
Reaction.diffValueMask_ = 16;
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function reactionScheduler2(f2) {
  return f2();
};
function runReactions() {
  if (globalState.inBatch > 0 || globalState.isRunningReactions) {
    return;
  }
  reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0;
  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error("[mobx] cycle in reaction: " + allReactions[0]);
      allReactions.splice(0);
    }
    var remainingReactions = allReactions.splice(0);
    for (var i2 = 0, l2 = remainingReactions.length; i2 < l2; i2++) {
      remainingReactions[i2].runReaction_();
    }
  }
  globalState.isRunningReactions = false;
}
var isReaction = /* @__PURE__ */ createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn2) {
  var baseScheduler = reactionScheduler;
  reactionScheduler = function reactionScheduler3(f2) {
    return fn2(function() {
      return baseScheduler(f2);
    });
  };
}
function isSpyEnabled() {
  return false;
}
function spyReport(event) {
  {
    return;
  }
}
function spyReportStart(event) {
  {
    return;
  }
}
function spyReportEnd(change) {
  {
    return;
  }
}
function spy(listener) {
  {
    console.warn("[mobx.spy] Is a no-op in production builds");
    return function() {
    };
  }
}
var ACTION = "action";
var ACTION_BOUND = "action.bound";
var AUTOACTION = "autoAction";
var AUTOACTION_BOUND = "autoAction.bound";
var DEFAULT_ACTION_NAME = "<unnamed action>";
var actionAnnotation = /* @__PURE__ */ createActionAnnotation(ACTION);
var actionBoundAnnotation = /* @__PURE__ */ createActionAnnotation(ACTION_BOUND, {
  bound: true
});
var autoActionAnnotation = /* @__PURE__ */ createActionAnnotation(AUTOACTION, {
  autoAction: true
});
var autoActionBoundAnnotation = /* @__PURE__ */ createActionAnnotation(AUTOACTION_BOUND, {
  autoAction: true,
  bound: true
});
function createActionFactory(autoAction2) {
  var res = function action2(arg1, arg2) {
    if (isFunction$1(arg1)) {
      return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction2);
    }
    if (isFunction$1(arg2)) {
      return createAction(arg1, arg2, autoAction2);
    }
    if (is20223Decorator(arg2)) {
      return (autoAction2 ? autoActionAnnotation : actionAnnotation).decorate_20223_(arg1, arg2);
    }
    if (isStringish(arg2)) {
      return storeAnnotation(arg1, arg2, autoAction2 ? autoActionAnnotation : actionAnnotation);
    }
    if (isStringish(arg1)) {
      return createDecoratorAnnotation(createActionAnnotation(autoAction2 ? AUTOACTION : ACTION, {
        name: arg1,
        autoAction: autoAction2
      }));
    }
  };
  return res;
}
var action = /* @__PURE__ */ createActionFactory(false);
Object.assign(action, actionAnnotation);
var autoAction = /* @__PURE__ */ createActionFactory(true);
Object.assign(autoAction, autoActionAnnotation);
action.bound = /* @__PURE__ */ createDecoratorAnnotation(actionBoundAnnotation);
autoAction.bound = /* @__PURE__ */ createDecoratorAnnotation(autoActionBoundAnnotation);
function isAction(thing) {
  return isFunction$1(thing) && thing.isMobxAction === true;
}
function autorun(view, opts) {
  var _opts$name, _opts, _opts2, _opts3;
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }
  var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name : "Autorun";
  var runSync = !opts.scheduler && !opts.delay;
  var reaction2;
  if (runSync) {
    reaction2 = new Reaction(name, function() {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler = createSchedulerFromOptions(opts);
    var isScheduled = false;
    reaction2 = new Reaction(name, function() {
      if (!isScheduled) {
        isScheduled = true;
        scheduler(function() {
          isScheduled = false;
          if (!reaction2.isDisposed) {
            reaction2.track(reactionRunner);
          }
        });
      }
    }, opts.onError, opts.requiresObservable);
  }
  function reactionRunner() {
    view(reaction2);
  }
  if (!((_opts2 = opts) != null && (_opts2 = _opts2.signal) != null && _opts2.aborted)) {
    reaction2.schedule_();
  }
  return reaction2.getDisposer_((_opts3 = opts) == null ? void 0 : _opts3.signal);
}
var run = function run2(f2) {
  return f2();
};
function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function(f2) {
    return setTimeout(f2, opts.delay);
  } : run;
}
var ON_BECOME_OBSERVED = "onBO";
var ON_BECOME_UNOBSERVED = "onBUO";
function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
  var atom = getAtom(thing);
  var cb = isFunction$1(arg3) ? arg3 : arg2;
  var listenersKey = hook + "L";
  if (atom[listenersKey]) {
    atom[listenersKey].add(cb);
  } else {
    atom[listenersKey] = /* @__PURE__ */ new Set([cb]);
  }
  return function() {
    var hookListeners = atom[listenersKey];
    if (hookListeners) {
      hookListeners["delete"](cb);
      if (hookListeners.size === 0) {
        delete atom[listenersKey];
      }
    }
  };
}
var NEVER = "never";
var ALWAYS = "always";
var OBSERVED = "observed";
function configure(options) {
  if (options.isolateGlobalState === true) {
    isolateGlobalState();
  }
  var useProxies = options.useProxies, enforceActions = options.enforceActions;
  if (useProxies !== void 0) {
    globalState.useProxies = useProxies === ALWAYS ? true : useProxies === NEVER ? false : typeof Proxy !== "undefined";
  }
  if (useProxies === "ifavailable") {
    globalState.verifyProxies = true;
  }
  if (enforceActions !== void 0) {
    var ea = enforceActions === ALWAYS ? ALWAYS : enforceActions === OBSERVED;
    globalState.enforceActions = ea;
    globalState.allowStateChanges = ea === true || ea === ALWAYS ? false : true;
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(key) {
    if (key in options) {
      globalState[key] = !!options[key];
    }
  });
  globalState.allowStateReads = !globalState.observableRequiresReaction;
  if (options.reactionScheduler) {
    setReactionScheduler(options.reactionScheduler);
  }
}
function extendObservable(target2, properties, annotations, options) {
  var descriptors = getOwnPropertyDescriptors(properties);
  initObservable(function() {
    var adm = asObservableObject(target2, options)[$mobx];
    ownKeys(descriptors).forEach(function(key) {
      adm.extend_(
        key,
        descriptors[key],
        // must pass "undefined" for { key: undefined }
        !annotations ? true : key in annotations ? annotations[key] : true
      );
    });
  });
  return target2;
}
function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node2) {
  var result = {
    name: node2.name_
  };
  if (node2.observing_ && node2.observing_.length > 0) {
    result.dependencies = unique(node2.observing_).map(nodeToDependencyTree);
  }
  return result;
}
function unique(list) {
  return Array.from(new Set(list));
}
var generatorId = 0;
function FlowCancellationError() {
  this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var flowAnnotation = /* @__PURE__ */ createFlowAnnotation("flow");
var flowBoundAnnotation = /* @__PURE__ */ createFlowAnnotation("flow.bound", {
  bound: true
});
var flow = /* @__PURE__ */ Object.assign(function flow2(arg1, arg2) {
  if (is20223Decorator(arg2)) {
    return flowAnnotation.decorate_20223_(arg1, arg2);
  }
  if (isStringish(arg2)) {
    return storeAnnotation(arg1, arg2, flowAnnotation);
  }
  var generator = arg1;
  var name = generator.name || "<unnamed flow>";
  var res = function res2() {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = void 0;
    var promise = new Promise(function(resolve, reject) {
      var stepId = 0;
      rejector = reject;
      function onFulfilled(res3) {
        pendingPromise = void 0;
        var ret;
        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res3);
        } catch (e2) {
          return reject(e2);
        }
        next(ret);
      }
      function onRejected(err) {
        pendingPromise = void 0;
        var ret;
        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
        } catch (e2) {
          return reject(e2);
        }
        next(ret);
      }
      function next(ret) {
        if (isFunction$1(ret == null ? void 0 : ret.then)) {
          ret.then(next, reject);
          return;
        }
        if (ret.done) {
          return resolve(ret.value);
        }
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }
      onFulfilled(void 0);
    });
    promise.cancel = action(name + " - runid: " + runId + " - cancel", function() {
      try {
        if (pendingPromise) {
          cancelPromise(pendingPromise);
        }
        var _res = gen["return"](void 0);
        var yieldedPromise = Promise.resolve(_res.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise);
        rejector(new FlowCancellationError());
      } catch (e2) {
        rejector(e2);
      }
    });
    return promise;
  };
  res.isMobXFlow = true;
  return res;
}, flowAnnotation);
flow.bound = /* @__PURE__ */ createDecoratorAnnotation(flowBoundAnnotation);
function cancelPromise(promise) {
  if (isFunction$1(promise.cancel)) {
    promise.cancel();
  }
}
function isFlow(fn2) {
  return (fn2 == null ? void 0 : fn2.isMobXFlow) === true;
}
function _isObservable(value, property) {
  if (!value) {
    return false;
  }
  return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}
function isObservable(value) {
  return _isObservable(value);
}
function apiOwnKeys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].ownKeys_();
  }
  die$1(38);
}
function cache(map22, key, value) {
  map22.set(key, value);
  return value;
}
function toJSHelper(source, __alreadySeen) {
  if (source == null || typeof source !== "object" || source instanceof Date || !isObservable(source)) {
    return source;
  }
  if (isObservableValue(source) || isComputedValue(source)) {
    return toJSHelper(source.get(), __alreadySeen);
  }
  if (__alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }
  if (isObservableArray(source)) {
    var res = cache(__alreadySeen, source, new Array(source.length));
    source.forEach(function(value, idx) {
      res[idx] = toJSHelper(value, __alreadySeen);
    });
    return res;
  }
  if (isObservableSet(source)) {
    var _res = cache(__alreadySeen, source, /* @__PURE__ */ new Set());
    source.forEach(function(value) {
      _res.add(toJSHelper(value, __alreadySeen));
    });
    return _res;
  }
  if (isObservableMap(source)) {
    var _res2 = cache(__alreadySeen, source, /* @__PURE__ */ new Map());
    source.forEach(function(value, key) {
      _res2.set(key, toJSHelper(value, __alreadySeen));
    });
    return _res2;
  } else {
    var _res3 = cache(__alreadySeen, source, {});
    apiOwnKeys(source).forEach(function(key) {
      if (objectPrototype.propertyIsEnumerable.call(source, key)) {
        _res3[key] = toJSHelper(source[key], __alreadySeen);
      }
    });
    return _res3;
  }
}
function toJS(source, options) {
  return toJSHelper(source, /* @__PURE__ */ new Map());
}
function transaction(action2, thisArg) {
  if (thisArg === void 0) {
    thisArg = void 0;
  }
  startBatch();
  try {
    return action2.apply(thisArg);
  } finally {
    endBatch();
  }
}
function getAdm(target2) {
  return target2[$mobx];
}
var objectProxyTraps = {
  has: function has2(target2, name) {
    return getAdm(target2).has_(name);
  },
  get: function get2(target2, name) {
    return getAdm(target2).get_(name);
  },
  set: function set3(target2, name, value) {
    var _getAdm$set_;
    if (!isStringish(name)) {
      return false;
    }
    return (_getAdm$set_ = getAdm(target2).set_(name, value, true)) != null ? _getAdm$set_ : true;
  },
  deleteProperty: function deleteProperty(target2, name) {
    var _getAdm$delete_;
    if (!isStringish(name)) {
      return false;
    }
    return (_getAdm$delete_ = getAdm(target2).delete_(name, true)) != null ? _getAdm$delete_ : true;
  },
  defineProperty: function defineProperty2(target2, name, descriptor) {
    var _getAdm$definePropert;
    return (_getAdm$definePropert = getAdm(target2).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
  },
  ownKeys: function ownKeys2(target2) {
    return getAdm(target2).ownKeys_();
  },
  preventExtensions: function preventExtensions(target2) {
    die$1(13);
  }
};
function asDynamicObservableObject(target2, options) {
  var _target$$mobx, _target$$mobx$proxy_;
  assertProxies();
  target2 = asObservableObject(target2, options);
  return (_target$$mobx$proxy_ = (_target$$mobx = target2[$mobx]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target2, objectProxyTraps);
}
function hasInterceptors(interceptable) {
  return interceptable.interceptors_ !== void 0 && interceptable.interceptors_.length > 0;
}
function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
  interceptors.push(handler);
  return once(function() {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1) {
      interceptors.splice(idx, 1);
    }
  });
}
function interceptChange(interceptable, change) {
  var prevU = untrackedStart();
  try {
    var interceptors = [].concat(interceptable.interceptors_ || []);
    for (var i2 = 0, l2 = interceptors.length; i2 < l2; i2++) {
      change = interceptors[i2](change);
      if (change && !change.type) {
        die$1(14);
      }
      if (!change) {
        break;
      }
    }
    return change;
  } finally {
    untrackedEnd(prevU);
  }
}
function hasListeners(listenable) {
  return listenable.changeListeners_ !== void 0 && listenable.changeListeners_.length > 0;
}
function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
  listeners.push(handler);
  return once(function() {
    var idx = listeners.indexOf(handler);
    if (idx !== -1) {
      listeners.splice(idx, 1);
    }
  });
}
function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners_;
  if (!listeners) {
    return;
  }
  listeners = listeners.slice();
  for (var i2 = 0, l2 = listeners.length; i2 < l2; i2++) {
    listeners[i2](change);
  }
  untrackedEnd(prevU);
}
function makeObservable(target2, annotations, options) {
  initObservable(function() {
    var _annotations;
    var adm = asObservableObject(target2, options)[$mobx];
    if (false) ;
    (_annotations = annotations) != null ? _annotations : annotations = collectStoredAnnotations(target2);
    ownKeys(annotations).forEach(function(key) {
      return adm.make_(key, annotations[key]);
    });
  });
  return target2;
}
var SPLICE = "splice";
var UPDATE = "update";
var MAX_SPLICE_SIZE = 1e4;
var arrayTraps = {
  get: function get3(target2, name) {
    var adm = target2[$mobx];
    if (name === $mobx) {
      return adm;
    }
    if (name === "length") {
      return adm.getArrayLength_();
    }
    if (typeof name === "string" && !isNaN(name)) {
      return adm.get_(parseInt(name));
    }
    if (hasProp(arrayExtensions, name)) {
      return arrayExtensions[name];
    }
    return target2[name];
  },
  set: function set4(target2, name, value) {
    var adm = target2[$mobx];
    if (name === "length") {
      adm.setArrayLength_(value);
    }
    if (typeof name === "symbol" || isNaN(name)) {
      target2[name] = value;
    } else {
      adm.set_(parseInt(name), value);
    }
    return true;
  },
  preventExtensions: function preventExtensions2() {
    die$1(15);
  }
};
var ObservableArrayAdministration = /* @__PURE__ */ function() {
  function ObservableArrayAdministration2(name, enhancer, owned_, legacyMode_) {
    if (name === void 0) {
      name = "ObservableArray";
    }
    this.owned_ = void 0;
    this.legacyMode_ = void 0;
    this.atom_ = void 0;
    this.values_ = [];
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.enhancer_ = void 0;
    this.dehancer = void 0;
    this.proxy_ = void 0;
    this.lastKnownLength_ = 0;
    this.owned_ = owned_;
    this.legacyMode_ = legacyMode_;
    this.atom_ = new Atom(name);
    this.enhancer_ = function(newV, oldV) {
      return enhancer(newV, oldV, "ObservableArray[..]");
    };
  }
  var _proto = ObservableArrayAdministration2.prototype;
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.dehanceValues_ = function dehanceValues_(values2) {
    if (this.dehancer !== void 0 && values2.length > 0) {
      return values2.map(this.dehancer);
    }
    return values2;
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }
    if (fireImmediately) {
      listener({
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: "splice",
        index: 0,
        added: this.values_.slice(),
        addedCount: this.values_.length,
        removed: [],
        removedCount: 0
      });
    }
    return registerListener(this, listener);
  };
  _proto.getArrayLength_ = function getArrayLength_() {
    this.atom_.reportObserved();
    return this.values_.length;
  };
  _proto.setArrayLength_ = function setArrayLength_(newLength) {
    if (typeof newLength !== "number" || isNaN(newLength) || newLength < 0) {
      die$1("Out of range: " + newLength);
    }
    var currentLength = this.values_.length;
    if (newLength === currentLength) {
      return;
    } else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);
      for (var i2 = 0; i2 < newLength - currentLength; i2++) {
        newItems[i2] = void 0;
      }
      this.spliceWithArray_(currentLength, 0, newItems);
    } else {
      this.spliceWithArray_(newLength, currentLength - newLength);
    }
  };
  _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta2) {
    if (oldLength !== this.lastKnownLength_) {
      die$1(16);
    }
    this.lastKnownLength_ += delta2;
    if (this.legacyMode_ && delta2 > 0) {
      reserveArrayBuffer(oldLength + delta2 + 1);
    }
  };
  _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
    var _this = this;
    checkIfStateModificationsAreAllowed(this.atom_);
    var length = this.values_.length;
    if (index === void 0) {
      index = 0;
    } else if (index > length) {
      index = length;
    } else if (index < 0) {
      index = Math.max(0, length + index);
    }
    if (arguments.length === 1) {
      deleteCount = length - index;
    } else if (deleteCount === void 0 || deleteCount === null) {
      deleteCount = 0;
    } else {
      deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    }
    if (newItems === void 0) {
      newItems = EMPTY_ARRAY;
    }
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_,
        type: SPLICE,
        index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) {
        return EMPTY_ARRAY;
      }
      deleteCount = change.removedCount;
      newItems = change.added;
    }
    newItems = newItems.length === 0 ? newItems : newItems.map(function(v2) {
      return _this.enhancer_(v2, void 0);
    });
    if (this.legacyMode_ || false) {
      var lengthDelta = newItems.length - deleteCount;
      this.updateArrayLength_(length, lengthDelta);
    }
    var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) {
      this.notifyArraySplice_(index, newItems, res);
    }
    return this.dehanceValues_(res);
  };
  _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
    if (newItems.length < MAX_SPLICE_SIZE) {
      var _this$values_;
      return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
    } else {
      var res = this.values_.slice(index, index + deleteCount);
      var oldItems = this.values_.slice(index + deleteCount);
      this.values_.length += newItems.length - deleteCount;
      for (var i2 = 0; i2 < newItems.length; i2++) {
        this.values_[index + i2] = newItems[i2];
      }
      for (var _i = 0; _i < oldItems.length; _i++) {
        this.values_[index + newItems.length + _i] = oldItems[_i];
      }
      return res;
    }
  };
  _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      type: UPDATE,
      debugObjectName: this.atom_.name_,
      index,
      newValue,
      oldValue
    } : null;
    this.atom_.reportChanged();
    if (notify) {
      notifyListeners(this, change);
    }
  };
  _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: SPLICE,
      index,
      removed,
      added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    this.atom_.reportChanged();
    if (notify) {
      notifyListeners(this, change);
    }
  };
  _proto.get_ = function get_(index) {
    if (this.legacyMode_ && index >= this.values_.length) {
      console.warn("[mobx] Out of bounds read: " + index);
      return void 0;
    }
    this.atom_.reportObserved();
    return this.dehanceValue_(this.values_[index]);
  };
  _proto.set_ = function set_(index, newValue) {
    var values2 = this.values_;
    if (this.legacyMode_ && index > values2.length) {
      die$1(17, index, values2.length);
    }
    if (index < values2.length) {
      checkIfStateModificationsAreAllowed(this.atom_);
      var oldValue = values2[index];
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_,
          // since "this" is the real array we need to pass its proxy
          index,
          newValue
        });
        if (!change) {
          return;
        }
        newValue = change.newValue;
      }
      newValue = this.enhancer_(newValue, oldValue);
      var changed = newValue !== oldValue;
      if (changed) {
        values2[index] = newValue;
        this.notifyArrayChildUpdate_(index, newValue, oldValue);
      }
    } else {
      var newItems = new Array(index + 1 - values2.length);
      for (var i2 = 0; i2 < newItems.length - 1; i2++) {
        newItems[i2] = void 0;
      }
      newItems[newItems.length - 1] = newValue;
      this.spliceWithArray_(values2.length, 0, newItems);
    }
  };
  return ObservableArrayAdministration2;
}();
function createObservableArray(initialValues, enhancer, name, owned) {
  if (name === void 0) {
    name = "ObservableArray";
  }
  if (owned === void 0) {
    owned = false;
  }
  assertProxies();
  return initObservable(function() {
    var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
    addHiddenFinalProp(adm.values_, $mobx, adm);
    var proxy = new Proxy(adm.values_, arrayTraps);
    adm.proxy_ = proxy;
    if (initialValues && initialValues.length) {
      adm.spliceWithArray_(0, 0, initialValues);
    }
    return proxy;
  });
}
var arrayExtensions = {
  clear: function clear() {
    return this.splice(0);
  },
  replace: function replace(newItems) {
    var adm = this[$mobx];
    return adm.spliceWithArray_(0, adm.values_.length, newItems);
  },
  // Used by JSON.stringify
  toJSON: function toJSON() {
    return this.slice();
  },
  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function splice(index, deleteCount) {
    for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      newItems[_key - 2] = arguments[_key];
    }
    var adm = this[$mobx];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return adm.spliceWithArray_(index);
      case 2:
        return adm.spliceWithArray_(index, deleteCount);
    }
    return adm.spliceWithArray_(index, deleteCount, newItems);
  },
  spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
    return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
  },
  push: function push() {
    var adm = this[$mobx];
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }
    adm.spliceWithArray_(adm.values_.length, 0, items);
    return adm.values_.length;
  },
  pop: function pop() {
    return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
  },
  shift: function shift() {
    return this.splice(0, 1)[0];
  },
  unshift: function unshift() {
    var adm = this[$mobx];
    for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      items[_key3] = arguments[_key3];
    }
    adm.spliceWithArray_(0, 0, items);
    return adm.values_.length;
  },
  reverse: function reverse() {
    if (globalState.trackingDerivation) {
      die$1(37, "reverse");
    }
    this.replace(this.slice().reverse());
    return this;
  },
  sort: function sort() {
    if (globalState.trackingDerivation) {
      die$1(37, "sort");
    }
    var copy2 = this.slice();
    copy2.sort.apply(copy2, arguments);
    this.replace(copy2);
    return this;
  },
  remove: function remove2(value) {
    var adm = this[$mobx];
    var idx = adm.dehanceValues_(adm.values_).indexOf(value);
    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }
    return false;
  }
};
addArrayExtension("at", simpleFunc);
addArrayExtension("concat", simpleFunc);
addArrayExtension("flat", simpleFunc);
addArrayExtension("includes", simpleFunc);
addArrayExtension("indexOf", simpleFunc);
addArrayExtension("join", simpleFunc);
addArrayExtension("lastIndexOf", simpleFunc);
addArrayExtension("slice", simpleFunc);
addArrayExtension("toString", simpleFunc);
addArrayExtension("toLocaleString", simpleFunc);
addArrayExtension("toSorted", simpleFunc);
addArrayExtension("toSpliced", simpleFunc);
addArrayExtension("with", simpleFunc);
addArrayExtension("every", mapLikeFunc);
addArrayExtension("filter", mapLikeFunc);
addArrayExtension("find", mapLikeFunc);
addArrayExtension("findIndex", mapLikeFunc);
addArrayExtension("findLast", mapLikeFunc);
addArrayExtension("findLastIndex", mapLikeFunc);
addArrayExtension("flatMap", mapLikeFunc);
addArrayExtension("forEach", mapLikeFunc);
addArrayExtension("map", mapLikeFunc);
addArrayExtension("some", mapLikeFunc);
addArrayExtension("toReversed", mapLikeFunc);
addArrayExtension("reduce", reduceLikeFunc);
addArrayExtension("reduceRight", reduceLikeFunc);
function addArrayExtension(funcName, funcFactory) {
  if (typeof Array.prototype[funcName] === "function") {
    arrayExtensions[funcName] = funcFactory(funcName);
  }
}
function simpleFunc(funcName) {
  return function() {
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}
function mapLikeFunc(funcName) {
  return function(callback, thisArg) {
    var _this2 = this;
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName](function(element, index) {
      return callback.call(thisArg, element, index, _this2);
    });
  };
}
function reduceLikeFunc(funcName) {
  return function() {
    var _this3 = this;
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    var callback = arguments[0];
    arguments[0] = function(accumulator, currentValue, index) {
      return callback(accumulator, currentValue, index, _this3);
    };
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}
var isObservableArrayAdministration = /* @__PURE__ */ createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
  return isObject$2(thing) && isObservableArrayAdministration(thing[$mobx]);
}
var ObservableMapMarker = {};
var ADD = "add";
var DELETE = "delete";
var ObservableMap = /* @__PURE__ */ function() {
  function ObservableMap2(initialData, enhancer_, name_) {
    var _this = this;
    if (enhancer_ === void 0) {
      enhancer_ = deepEnhancer;
    }
    if (name_ === void 0) {
      name_ = "ObservableMap";
    }
    this.enhancer_ = void 0;
    this.name_ = void 0;
    this[$mobx] = ObservableMapMarker;
    this.data_ = void 0;
    this.hasMap_ = void 0;
    this.keysAtom_ = void 0;
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = enhancer_;
    this.name_ = name_;
    if (!isFunction$1(Map)) {
      die$1(18);
    }
    initObservable(function() {
      _this.keysAtom_ = createAtom(false ? _this.name_ + ".keys()" : "ObservableMap.keys()");
      _this.data_ = /* @__PURE__ */ new Map();
      _this.hasMap_ = /* @__PURE__ */ new Map();
      if (initialData) {
        _this.merge(initialData);
      }
    });
  }
  var _proto = ObservableMap2.prototype;
  _proto.has_ = function has_(key) {
    return this.data_.has(key);
  };
  _proto.has = function has3(key) {
    var _this2 = this;
    if (!globalState.trackingDerivation) {
      return this.has_(key);
    }
    var entry = this.hasMap_.get(key);
    if (!entry) {
      var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer, "ObservableMap.key?", false);
      this.hasMap_.set(key, newEntry);
      onBecomeUnobserved(newEntry, function() {
        return _this2.hasMap_["delete"](key);
      });
    }
    return entry.get();
  };
  _proto.set = function set5(key, value) {
    var hasKey = this.has_(key);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? UPDATE : ADD,
        object: this,
        newValue: value,
        name: key
      });
      if (!change) {
        return this;
      }
      value = change.newValue;
    }
    if (hasKey) {
      this.updateValue_(key, value);
    } else {
      this.addValue_(key, value);
    }
    return this;
  };
  _proto["delete"] = function _delete(key) {
    var _this3 = this;
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        name: key
      });
      if (!change) {
        return false;
      }
    }
    if (this.has_(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var _change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: this.data_.get(key).value_,
        name: key
      } : null;
      transaction(function() {
        var _this3$hasMap_$get;
        _this3.keysAtom_.reportChanged();
        (_this3$hasMap_$get = _this3.hasMap_.get(key)) == null || _this3$hasMap_$get.setNewValue_(false);
        var observable2 = _this3.data_.get(key);
        observable2.setNewValue_(void 0);
        _this3.data_["delete"](key);
      });
      if (notify) {
        notifyListeners(this, _change);
      }
      return true;
    }
    return false;
  };
  _proto.updateValue_ = function updateValue_(key, newValue) {
    var observable2 = this.data_.get(key);
    newValue = observable2.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: UPDATE,
        object: this,
        oldValue: observable2.value_,
        name: key,
        newValue
      } : null;
      observable2.setNewValue_(newValue);
      if (notify) {
        notifyListeners(this, change);
      }
    }
  };
  _proto.addValue_ = function addValue_(key, newValue) {
    var _this4 = this;
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    transaction(function() {
      var _this4$hasMap_$get;
      var observable2 = new ObservableValue(newValue, _this4.enhancer_, "ObservableMap.key", false);
      _this4.data_.set(key, observable2);
      newValue = observable2.value_;
      (_this4$hasMap_$get = _this4.hasMap_.get(key)) == null || _this4$hasMap_$get.setNewValue_(true);
      _this4.keysAtom_.reportChanged();
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ADD,
      object: this,
      name: key,
      newValue
    } : null;
    if (notify) {
      notifyListeners(this, change);
    }
  };
  _proto.get = function get4(key) {
    if (this.has(key)) {
      return this.dehanceValue_(this.data_.get(key).get());
    }
    return this.dehanceValue_(void 0);
  };
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.keys = function keys2() {
    this.keysAtom_.reportObserved();
    return this.data_.keys();
  };
  _proto.values = function values2() {
    var self2 = this;
    var keys2 = this.keys();
    return makeIterableForMap({
      next: function next() {
        var _keys$next = keys2.next(), done = _keys$next.done, value = _keys$next.value;
        return {
          done,
          value: done ? void 0 : self2.get(value)
        };
      }
    });
  };
  _proto.entries = function entries2() {
    var self2 = this;
    var keys2 = this.keys();
    return makeIterableForMap({
      next: function next() {
        var _keys$next2 = keys2.next(), done = _keys$next2.done, value = _keys$next2.value;
        return {
          done,
          value: done ? void 0 : [value, self2.get(value)]
        };
      }
    });
  };
  _proto[Symbol.iterator] = function() {
    return this.entries();
  };
  _proto.forEach = function forEach(callback, thisArg) {
    for (var _iterator = _createForOfIteratorHelperLoose$1(this), _step; !(_step = _iterator()).done; ) {
      var _step$value = _step.value, key = _step$value[0], value = _step$value[1];
      callback.call(thisArg, value, key, this);
    }
  };
  _proto.merge = function merge(other) {
    var _this5 = this;
    if (isObservableMap(other)) {
      other = new Map(other);
    }
    transaction(function() {
      if (isPlainObject$2(other)) {
        getPlainObjectKeys(other).forEach(function(key) {
          return _this5.set(key, other[key]);
        });
      } else if (Array.isArray(other)) {
        other.forEach(function(_ref) {
          var key = _ref[0], value = _ref[1];
          return _this5.set(key, value);
        });
      } else if (isES6Map(other)) {
        if (!isPlainES6Map(other)) {
          die$1(19, other);
        }
        other.forEach(function(value, key) {
          return _this5.set(key, value);
        });
      } else if (other !== null && other !== void 0) {
        die$1(20, other);
      }
    });
    return this;
  };
  _proto.clear = function clear2() {
    var _this6 = this;
    transaction(function() {
      untracked(function() {
        for (var _iterator2 = _createForOfIteratorHelperLoose$1(_this6.keys()), _step2; !(_step2 = _iterator2()).done; ) {
          var key = _step2.value;
          _this6["delete"](key);
        }
      });
    });
  };
  _proto.replace = function replace2(values2) {
    var _this7 = this;
    transaction(function() {
      var replacementMap = convertToMap(values2);
      var orderedData = /* @__PURE__ */ new Map();
      var keysReportChangedCalled = false;
      for (var _iterator3 = _createForOfIteratorHelperLoose$1(_this7.data_.keys()), _step3; !(_step3 = _iterator3()).done; ) {
        var key = _step3.value;
        if (!replacementMap.has(key)) {
          var deleted = _this7["delete"](key);
          if (deleted) {
            keysReportChangedCalled = true;
          } else {
            var value = _this7.data_.get(key);
            orderedData.set(key, value);
          }
        }
      }
      for (var _iterator4 = _createForOfIteratorHelperLoose$1(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done; ) {
        var _step4$value = _step4.value, _key = _step4$value[0], _value = _step4$value[1];
        var keyExisted = _this7.data_.has(_key);
        _this7.set(_key, _value);
        if (_this7.data_.has(_key)) {
          var _value2 = _this7.data_.get(_key);
          orderedData.set(_key, _value2);
          if (!keyExisted) {
            keysReportChangedCalled = true;
          }
        }
      }
      if (!keysReportChangedCalled) {
        if (_this7.data_.size !== orderedData.size) {
          _this7.keysAtom_.reportChanged();
        } else {
          var iter1 = _this7.data_.keys();
          var iter2 = orderedData.keys();
          var next1 = iter1.next();
          var next2 = iter2.next();
          while (!next1.done) {
            if (next1.value !== next2.value) {
              _this7.keysAtom_.reportChanged();
              break;
            }
            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      }
      _this7.data_ = orderedData;
    });
    return this;
  };
  _proto.toString = function toString2() {
    return "[object ObservableMap]";
  };
  _proto.toJSON = function toJSON2() {
    return Array.from(this);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    return registerListener(this, listener);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  return _createClass(ObservableMap2, [{
    key: "size",
    get: function get4() {
      this.keysAtom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: Symbol.toStringTag,
    get: function get4() {
      return "Map";
    }
  }]);
}();
var isObservableMap = /* @__PURE__ */ createInstanceofPredicate("ObservableMap", ObservableMap);
function makeIterableForMap(iterator) {
  iterator[Symbol.toStringTag] = "MapIterator";
  return makeIterable(iterator);
}
function convertToMap(dataStructure) {
  if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject$2(dataStructure)) {
    var map22 = /* @__PURE__ */ new Map();
    for (var key in dataStructure) {
      map22.set(key, dataStructure[key]);
    }
    return map22;
  } else {
    return die$1(21, dataStructure);
  }
}
var ObservableSetMarker = {};
var ObservableSet = /* @__PURE__ */ function() {
  function ObservableSet2(initialData, enhancer, name_) {
    var _this = this;
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }
    if (name_ === void 0) {
      name_ = "ObservableSet";
    }
    this.name_ = void 0;
    this[$mobx] = ObservableSetMarker;
    this.data_ = /* @__PURE__ */ new Set();
    this.atom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = void 0;
    this.name_ = name_;
    if (!isFunction$1(Set)) {
      die$1(22);
    }
    this.enhancer_ = function(newV, oldV) {
      return enhancer(newV, oldV, name_);
    };
    initObservable(function() {
      _this.atom_ = createAtom(_this.name_);
      if (initialData) {
        _this.replace(initialData);
      }
    });
  }
  var _proto = ObservableSet2.prototype;
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.clear = function clear2() {
    var _this2 = this;
    transaction(function() {
      untracked(function() {
        for (var _iterator = _createForOfIteratorHelperLoose$1(_this2.data_.values()), _step; !(_step = _iterator()).done; ) {
          var value = _step.value;
          _this2["delete"](value);
        }
      });
    });
  };
  _proto.forEach = function forEach(callbackFn, thisArg) {
    for (var _iterator2 = _createForOfIteratorHelperLoose$1(this), _step2; !(_step2 = _iterator2()).done; ) {
      var value = _step2.value;
      callbackFn.call(thisArg, value, value, this);
    }
  };
  _proto.add = function add2(value) {
    var _this3 = this;
    checkIfStateModificationsAreAllowed(this.atom_);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: ADD,
        object: this,
        newValue: value
      });
      if (!change) {
        return this;
      }
      value = change.newValue;
    }
    if (!this.has(value)) {
      transaction(function() {
        _this3.data_.add(_this3.enhancer_(value, void 0));
        _this3.atom_.reportChanged();
      });
      var notifySpy = false;
      var notify = hasListeners(this);
      var _change = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        newValue: value
      } : null;
      if (notify) {
        notifyListeners(this, _change);
      }
    }
    return this;
  };
  _proto["delete"] = function _delete(value) {
    var _this4 = this;
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        oldValue: value
      });
      if (!change) {
        return false;
      }
    }
    if (this.has(value)) {
      var notifySpy = false;
      var notify = hasListeners(this);
      var _change2 = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: value
      } : null;
      transaction(function() {
        _this4.atom_.reportChanged();
        _this4.data_["delete"](value);
      });
      if (notify) {
        notifyListeners(this, _change2);
      }
      return true;
    }
    return false;
  };
  _proto.has = function has3(value) {
    this.atom_.reportObserved();
    return this.data_.has(this.dehanceValue_(value));
  };
  _proto.entries = function entries2() {
    var values2 = this.values();
    return makeIterableForSet({
      next: function next() {
        var _values$next = values2.next(), value = _values$next.value, done = _values$next.done;
        return !done ? {
          value: [value, value],
          done
        } : {
          value: void 0,
          done
        };
      }
    });
  };
  _proto.keys = function keys2() {
    return this.values();
  };
  _proto.values = function values2() {
    this.atom_.reportObserved();
    var self2 = this;
    var values3 = this.data_.values();
    return makeIterableForSet({
      next: function next() {
        var _values$next2 = values3.next(), value = _values$next2.value, done = _values$next2.done;
        return !done ? {
          value: self2.dehanceValue_(value),
          done
        } : {
          value: void 0,
          done
        };
      }
    });
  };
  _proto.intersection = function intersection2(otherSet) {
    if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
      return otherSet.intersection(this);
    } else {
      var dehancedSet = new Set(this);
      return dehancedSet.intersection(otherSet);
    }
  };
  _proto.union = function union2(otherSet) {
    if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
      return otherSet.union(this);
    } else {
      var dehancedSet = new Set(this);
      return dehancedSet.union(otherSet);
    }
  };
  _proto.difference = function difference(otherSet) {
    return new Set(this).difference(otherSet);
  };
  _proto.symmetricDifference = function symmetricDifference(otherSet) {
    if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
      return otherSet.symmetricDifference(this);
    } else {
      var dehancedSet = new Set(this);
      return dehancedSet.symmetricDifference(otherSet);
    }
  };
  _proto.isSubsetOf = function isSubsetOf(otherSet) {
    return new Set(this).isSubsetOf(otherSet);
  };
  _proto.isSupersetOf = function isSupersetOf(otherSet) {
    return new Set(this).isSupersetOf(otherSet);
  };
  _proto.isDisjointFrom = function isDisjointFrom(otherSet) {
    if (isES6Set(otherSet) && !isObservableSet(otherSet)) {
      return otherSet.isDisjointFrom(this);
    } else {
      var dehancedSet = new Set(this);
      return dehancedSet.isDisjointFrom(otherSet);
    }
  };
  _proto.replace = function replace2(other) {
    var _this5 = this;
    if (isObservableSet(other)) {
      other = new Set(other);
    }
    transaction(function() {
      if (Array.isArray(other)) {
        _this5.clear();
        other.forEach(function(value) {
          return _this5.add(value);
        });
      } else if (isES6Set(other)) {
        _this5.clear();
        other.forEach(function(value) {
          return _this5.add(value);
        });
      } else if (other !== null && other !== void 0) {
        die$1("Cannot initialize set from " + other);
      }
    });
    return this;
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    return registerListener(this, listener);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.toJSON = function toJSON2() {
    return Array.from(this);
  };
  _proto.toString = function toString2() {
    return "[object ObservableSet]";
  };
  _proto[Symbol.iterator] = function() {
    return this.values();
  };
  return _createClass(ObservableSet2, [{
    key: "size",
    get: function get4() {
      this.atom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: Symbol.toStringTag,
    get: function get4() {
      return "Set";
    }
  }]);
}();
var isObservableSet = /* @__PURE__ */ createInstanceofPredicate("ObservableSet", ObservableSet);
function makeIterableForSet(iterator) {
  iterator[Symbol.toStringTag] = "SetIterator";
  return makeIterable(iterator);
}
var descriptorCache = /* @__PURE__ */ Object.create(null);
var REMOVE = "remove";
var ObservableObjectAdministration = /* @__PURE__ */ function() {
  function ObservableObjectAdministration2(target_, values_, name_, defaultAnnotation_) {
    if (values_ === void 0) {
      values_ = /* @__PURE__ */ new Map();
    }
    if (defaultAnnotation_ === void 0) {
      defaultAnnotation_ = autoAnnotation;
    }
    this.target_ = void 0;
    this.values_ = void 0;
    this.name_ = void 0;
    this.defaultAnnotation_ = void 0;
    this.keysAtom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.proxy_ = void 0;
    this.isPlainObject_ = void 0;
    this.appliedAnnotations_ = void 0;
    this.pendingKeys_ = void 0;
    this.target_ = target_;
    this.values_ = values_;
    this.name_ = name_;
    this.defaultAnnotation_ = defaultAnnotation_;
    this.keysAtom_ = new Atom("ObservableObject.keys");
    this.isPlainObject_ = isPlainObject$2(this.target_);
  }
  var _proto = ObservableObjectAdministration2.prototype;
  _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
    return this.values_.get(key).get();
  };
  _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
    var observable2 = this.values_.get(key);
    if (observable2 instanceof ComputedValue) {
      observable2.set(newValue);
      return true;
    }
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: UPDATE,
        object: this.proxy_ || this.target_,
        name: key,
        newValue
      });
      if (!change) {
        return null;
      }
      newValue = change.newValue;
    }
    newValue = observable2.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy = false;
      var _change = notify || notifySpy ? {
        type: UPDATE,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: observable2.value_,
        name: key,
        newValue
      } : null;
      observable2.setNewValue_(newValue);
      if (notify) {
        notifyListeners(this, _change);
      }
    }
    return true;
  };
  _proto.get_ = function get_(key) {
    if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
      this.has_(key);
    }
    return this.target_[key];
  };
  _proto.set_ = function set_(key, value, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    if (hasProp(this.target_, key)) {
      if (this.values_.has(key)) {
        return this.setObservablePropValue_(key, value);
      } else if (proxyTrap) {
        return Reflect.set(this.target_, key, value);
      } else {
        this.target_[key] = value;
        return true;
      }
    } else {
      return this.extend_(key, {
        value,
        enumerable: true,
        writable: true,
        configurable: true
      }, this.defaultAnnotation_, proxyTrap);
    }
  };
  _proto.has_ = function has_(key) {
    if (!globalState.trackingDerivation) {
      return key in this.target_;
    }
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var entry = this.pendingKeys_.get(key);
    if (!entry) {
      entry = new ObservableValue(key in this.target_, referenceEnhancer, "ObservableObject.key?", false);
      this.pendingKeys_.set(key, entry);
    }
    return entry.get();
  };
  _proto.make_ = function make_2(key, annotation) {
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }
    if (annotation === false) {
      return;
    }
    if (!(key in this.target_)) {
      var _this$target_$storedA;
      if ((_this$target_$storedA = this.target_[storedAnnotationsSymbol]) != null && _this$target_$storedA[key]) {
        return;
      } else {
        die$1(1, annotation.annotationType_, this.name_ + "." + key.toString());
      }
    }
    var source = this.target_;
    while (source && source !== objectPrototype) {
      var descriptor = getDescriptor(source, key);
      if (descriptor) {
        var outcome = annotation.make_(this, key, descriptor, source);
        if (outcome === 0) {
          return;
        }
        if (outcome === 1) {
          break;
        }
      }
      source = Object.getPrototypeOf(source);
    }
    recordAnnotationApplied(this, annotation, key);
  };
  _proto.extend_ = function extend_2(key, descriptor, annotation, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }
    if (annotation === false) {
      return this.defineProperty_(key, descriptor, proxyTrap);
    }
    var outcome = annotation.extend_(this, key, descriptor, proxyTrap);
    if (outcome) {
      recordAnnotationApplied(this, annotation, key);
    }
    return outcome;
  };
  _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      startBatch();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: descriptor.value
        });
        if (!change) {
          return null;
        }
        var newValue = change.newValue;
        if (descriptor.value !== newValue) {
          descriptor = _extends$1({}, descriptor, {
            value: newValue
          });
        }
      }
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      this.notifyPropertyAddition_(key, descriptor.value);
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      startBatch();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: value
        });
        if (!change) {
          return null;
        }
        value = change.newValue;
      }
      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: true,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      };
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      var observable2 = new ObservableValue(value, enhancer, false ? this.name_ + "." + key.toString() : "ObservableObject.key", false);
      this.values_.set(key, observable2);
      this.notifyPropertyAddition_(key, observable2.value_);
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      startBatch();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: void 0
        });
        if (!change) {
          return null;
        }
      }
      options.name || (options.name = false ? this.name_ + "." + key.toString() : "ObservableObject.key");
      options.context = this.proxy_ || this.target_;
      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: false,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      };
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      this.values_.set(key, new ComputedValue(options));
      this.notifyPropertyAddition_(key, void 0);
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.delete_ = function delete_(key, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    if (!hasProp(this.target_, key)) {
      return true;
    }
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_ || this.target_,
        name: key,
        type: REMOVE
      });
      if (!change) {
        return null;
      }
    }
    try {
      var _this$pendingKeys_;
      startBatch();
      var notify = hasListeners(this);
      var notifySpy = false;
      var observable2 = this.values_.get(key);
      var value = void 0;
      if (!observable2 && (notify || notifySpy)) {
        var _getDescriptor2;
        value = (_getDescriptor2 = getDescriptor(this.target_, key)) == null ? void 0 : _getDescriptor2.value;
      }
      if (proxyTrap) {
        if (!Reflect.deleteProperty(this.target_, key)) {
          return false;
        }
      } else {
        delete this.target_[key];
      }
      if (false) ;
      if (observable2) {
        this.values_["delete"](key);
        if (observable2 instanceof ObservableValue) {
          value = observable2.value_;
        }
        propagateChanged(observable2);
      }
      this.keysAtom_.reportChanged();
      (_this$pendingKeys_ = this.pendingKeys_) == null || (_this$pendingKeys_ = _this$pendingKeys_.get(key)) == null || _this$pendingKeys_.set(key in this.target_);
      if (notify || notifySpy) {
        var _change2 = {
          type: REMOVE,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: value,
          name: key
        };
        if (false) ;
        if (notify) {
          notifyListeners(this, _change2);
        }
        if (false) ;
      }
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.observe_ = function observe_(callback, fireImmediately) {
    return registerListener(this, callback);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
    var _this$pendingKeys_2;
    var notify = hasListeners(this);
    var notifySpy = false;
    if (notify || notifySpy) {
      var change = notify || notifySpy ? {
        type: ADD,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: value
      } : null;
      if (notify) {
        notifyListeners(this, change);
      }
    }
    (_this$pendingKeys_2 = this.pendingKeys_) == null || (_this$pendingKeys_2 = _this$pendingKeys_2.get(key)) == null || _this$pendingKeys_2.set(true);
    this.keysAtom_.reportChanged();
  };
  _proto.ownKeys_ = function ownKeys_() {
    this.keysAtom_.reportObserved();
    return ownKeys(this.target_);
  };
  _proto.keys_ = function keys_() {
    this.keysAtom_.reportObserved();
    return Object.keys(this.target_);
  };
  return ObservableObjectAdministration2;
}();
function asObservableObject(target2, options) {
  var _options$name;
  if (hasProp(target2, $mobx)) {
    return target2;
  }
  var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name : "ObservableObject";
  var adm = new ObservableObjectAdministration(target2, /* @__PURE__ */ new Map(), String(name), getAnnotationFromOptions(options));
  addHiddenProp(target2, $mobx, adm);
  return target2;
}
var isObservableObjectAdministration = /* @__PURE__ */ createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function getCachedObservablePropDescriptor(key) {
  return descriptorCache[key] || (descriptorCache[key] = {
    get: function get4() {
      return this[$mobx].getObservablePropValue_(key);
    },
    set: function set5(value) {
      return this[$mobx].setObservablePropValue_(key, value);
    }
  });
}
function isObservableObject(thing) {
  if (isObject$2(thing)) {
    return isObservableObjectAdministration(thing[$mobx]);
  }
  return false;
}
function recordAnnotationApplied(adm, annotation, key) {
  var _adm$target_$storedAn;
  (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null || delete _adm$target_$storedAn[key];
}
var ENTRY_0 = /* @__PURE__ */ createArrayEntryDescriptor(0);
var safariPrototypeSetterInheritanceBug = /* @__PURE__ */ function() {
  var v2 = false;
  var p2 = {};
  Object.defineProperty(p2, "0", {
    set: function set5() {
      v2 = true;
    }
  });
  Object.create(p2)["0"] = 1;
  return v2 === false;
}();
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
var StubArray = function StubArray2() {
};
function inherit(ctor, proto) {
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ctor.prototype, proto);
  } else if (ctor.prototype.__proto__ !== void 0) {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor.prototype = proto;
  }
}
inherit(StubArray, Array.prototype);
var LegacyObservableArray = /* @__PURE__ */ function(_StubArray) {
  function LegacyObservableArray2(initialValues, enhancer, name, owned) {
    var _this;
    if (name === void 0) {
      name = "ObservableArray";
    }
    if (owned === void 0) {
      owned = false;
    }
    _this = _StubArray.call(this) || this;
    initObservable(function() {
      var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
      adm.proxy_ = _this;
      addHiddenFinalProp(_this, $mobx, adm);
      if (initialValues && initialValues.length) {
        _this.spliceWithArray(0, 0, initialValues);
      }
      if (safariPrototypeSetterInheritanceBug) {
        Object.defineProperty(_this, "0", ENTRY_0);
      }
    });
    return _this;
  }
  _inheritsLoose(LegacyObservableArray2, _StubArray);
  var _proto = LegacyObservableArray2.prototype;
  _proto.concat = function concat() {
    this[$mobx].atom_.reportObserved();
    for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
      arrays[_key] = arguments[_key];
    }
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      arrays.map(function(a2) {
        return isObservableArray(a2) ? a2.slice() : a2;
      })
    );
  };
  _proto[Symbol.iterator] = function() {
    var self2 = this;
    var nextIndex = 0;
    return makeIterable({
      next: function next() {
        return nextIndex < self2.length ? {
          value: self2[nextIndex++],
          done: false
        } : {
          done: true,
          value: void 0
        };
      }
    });
  };
  return _createClass(LegacyObservableArray2, [{
    key: "length",
    get: function get4() {
      return this[$mobx].getArrayLength_();
    },
    set: function set5(newLength) {
      this[$mobx].setArrayLength_(newLength);
    }
  }, {
    key: Symbol.toStringTag,
    get: function get4() {
      return "Array";
    }
  }]);
}(StubArray);
Object.entries(arrayExtensions).forEach(function(_ref) {
  var prop2 = _ref[0], fn2 = _ref[1];
  if (prop2 !== "concat") {
    addHiddenProp(LegacyObservableArray.prototype, prop2, fn2);
  }
});
function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: true,
    get: function get4() {
      return this[$mobx].get_(index);
    },
    set: function set5(value) {
      this[$mobx].set_(index, value);
    }
  };
}
function createArrayBufferItem(index) {
  defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
  if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
      createArrayBufferItem(index);
    }
    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
  }
}
reserveArrayBuffer(1e3);
function createLegacyArray(initialValues, enhancer, name) {
  return new LegacyObservableArray(initialValues, enhancer, name);
}
function getAtom(thing, property) {
  if (typeof thing === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== void 0) {
        die$1(23);
      }
      return thing[$mobx].atom_;
    }
    if (isObservableSet(thing)) {
      return thing.atom_;
    }
    if (isObservableMap(thing)) {
      if (property === void 0) {
        return thing.keysAtom_;
      }
      var observable2 = thing.data_.get(property) || thing.hasMap_.get(property);
      if (!observable2) {
        die$1(25, property, getDebugName(thing));
      }
      return observable2;
    }
    if (isObservableObject(thing)) {
      if (!property) {
        return die$1(26);
      }
      var _observable = thing[$mobx].values_.get(property);
      if (!_observable) {
        die$1(27, property, getDebugName(thing));
      }
      return _observable;
    }
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (isFunction$1(thing)) {
    if (isReaction(thing[$mobx])) {
      return thing[$mobx];
    }
  }
  die$1(28);
}
function getAdministration(thing, property) {
  if (!thing) {
    die$1(29);
  }
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
    return thing;
  }
  if (isObservableMap(thing) || isObservableSet(thing)) {
    return thing;
  }
  if (thing[$mobx]) {
    return thing[$mobx];
  }
  die$1(24, thing);
}
function getDebugName(thing, property) {
  var named;
  if (property !== void 0) {
    named = getAtom(thing, property);
  } else if (isAction(thing)) {
    return thing.name;
  } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
    named = getAdministration(thing);
  } else {
    named = getAtom(thing);
  }
  return named.name_;
}
function initObservable(cb) {
  var derivation = untrackedStart();
  var allowStateChanges2 = allowStateChangesStart(true);
  startBatch();
  try {
    return cb();
  } finally {
    endBatch();
    allowStateChangesEnd(allowStateChanges2);
    untrackedEnd(derivation);
  }
}
var toString = objectPrototype.toString;
function deepEqual$1(a2, b2, depth) {
  if (depth === void 0) {
    depth = -1;
  }
  return eq(a2, b2, depth);
}
function eq(a2, b2, depth, aStack, bStack) {
  if (a2 === b2) {
    return a2 !== 0 || 1 / a2 === 1 / b2;
  }
  if (a2 == null || b2 == null) {
    return false;
  }
  if (a2 !== a2) {
    return b2 !== b2;
  }
  var type = typeof a2;
  if (type !== "function" && type !== "object" && typeof b2 != "object") {
    return false;
  }
  var className = toString.call(a2);
  if (className !== toString.call(b2)) {
    return false;
  }
  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]":
    // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
    case "[object String]":
      return "" + a2 === "" + b2;
    case "[object Number]":
      if (+a2 !== +a2) {
        return +b2 !== +b2;
      }
      return +a2 === 0 ? 1 / +a2 === 1 / b2 : +a2 === +b2;
    case "[object Date]":
    case "[object Boolean]":
      return +a2 === +b2;
    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a2) === Symbol.valueOf.call(b2);
    case "[object Map]":
    case "[object Set]":
      if (depth >= 0) {
        depth++;
      }
      break;
  }
  a2 = unwrap(a2);
  b2 = unwrap(b2);
  var areArrays = className === "[object Array]";
  if (!areArrays) {
    if (typeof a2 != "object" || typeof b2 != "object") {
      return false;
    }
    var aCtor = a2.constructor, bCtor = b2.constructor;
    if (aCtor !== bCtor && !(isFunction$1(aCtor) && aCtor instanceof aCtor && isFunction$1(bCtor) && bCtor instanceof bCtor) && "constructor" in a2 && "constructor" in b2) {
      return false;
    }
  }
  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  }
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    if (aStack[length] === a2) {
      return bStack[length] === b2;
    }
  }
  aStack.push(a2);
  bStack.push(b2);
  if (areArrays) {
    length = a2.length;
    if (length !== b2.length) {
      return false;
    }
    while (length--) {
      if (!eq(a2[length], b2[length], depth - 1, aStack, bStack)) {
        return false;
      }
    }
  } else {
    var keys2 = Object.keys(a2);
    var _length = keys2.length;
    if (Object.keys(b2).length !== _length) {
      return false;
    }
    for (var i2 = 0; i2 < _length; i2++) {
      var key = keys2[i2];
      if (!(hasProp(b2, key) && eq(a2[key], b2[key], depth - 1, aStack, bStack))) {
        return false;
      }
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}
function unwrap(a2) {
  if (isObservableArray(a2)) {
    return a2.slice();
  }
  if (isES6Map(a2) || isObservableMap(a2)) {
    return Array.from(a2.entries());
  }
  if (isES6Set(a2) || isObservableSet(a2)) {
    return Array.from(a2.entries());
  }
  return a2;
}
var _getGlobal$Iterator;
var maybeIteratorPrototype = ((_getGlobal$Iterator = getGlobal().Iterator) == null ? void 0 : _getGlobal$Iterator.prototype) || {};
function makeIterable(iterator) {
  iterator[Symbol.iterator] = getSelf;
  return Object.assign(Object.create(maybeIteratorPrototype), iterator);
}
function getSelf() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function(m2) {
  var g2 = getGlobal();
  if (typeof g2[m2] === "undefined") {
    die$1("MobX requires global '" + m2 + "' to be available or polyfilled");
  }
});
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy,
    extras: {
      getDebugName
    },
    $mobx
  });
}
if (!d) {
  throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!makeObservable) {
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
}
function defaultNoopBatch(callback) {
  callback();
}
function observerBatching(reactionScheduler3) {
  if (!reactionScheduler3) {
    reactionScheduler3 = defaultNoopBatch;
  }
  configure({ reactionScheduler: reactionScheduler3 });
}
function printDebugValue(v2) {
  return getDependencyTree(v2);
}
var REGISTRY_FINALIZE_AFTER = 1e4;
var REGISTRY_SWEEP_INTERVAL = 1e4;
var TimerBasedFinalizationRegistry = (
  /** @class */
  function() {
    function TimerBasedFinalizationRegistry2(finalize) {
      var _this = this;
      Object.defineProperty(this, "finalize", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: finalize
      });
      Object.defineProperty(this, "registrations", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: /* @__PURE__ */ new Map()
      });
      Object.defineProperty(this, "sweepTimeout", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "sweep", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: function(maxAge) {
          if (maxAge === void 0) {
            maxAge = REGISTRY_FINALIZE_AFTER;
          }
          clearTimeout(_this.sweepTimeout);
          _this.sweepTimeout = void 0;
          var now2 = Date.now();
          _this.registrations.forEach(function(registration, token) {
            if (now2 - registration.registeredAt >= maxAge) {
              _this.finalize(registration.value);
              _this.registrations.delete(token);
            }
          });
          if (_this.registrations.size > 0) {
            _this.scheduleSweep();
          }
        }
      });
      Object.defineProperty(this, "finalizeAllImmediately", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: function() {
          _this.sweep(0);
        }
      });
    }
    Object.defineProperty(TimerBasedFinalizationRegistry2.prototype, "register", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(target2, value, token) {
        this.registrations.set(token, {
          value,
          registeredAt: Date.now()
        });
        this.scheduleSweep();
      }
    });
    Object.defineProperty(TimerBasedFinalizationRegistry2.prototype, "unregister", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(token) {
        this.registrations.delete(token);
      }
    });
    Object.defineProperty(TimerBasedFinalizationRegistry2.prototype, "scheduleSweep", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        if (this.sweepTimeout === void 0) {
          this.sweepTimeout = setTimeout(this.sweep, REGISTRY_SWEEP_INTERVAL);
        }
      }
    });
    return TimerBasedFinalizationRegistry2;
  }()
);
var UniversalFinalizationRegistry = typeof FinalizationRegistry !== "undefined" ? FinalizationRegistry : TimerBasedFinalizationRegistry;
var observerFinalizationRegistry = new UniversalFinalizationRegistry(function(adm) {
  var _a2;
  (_a2 = adm.reaction) === null || _a2 === void 0 ? void 0 : _a2.dispose();
  adm.reaction = null;
});
var shim = { exports: {} };
var useSyncExternalStoreShim_production = {};
const require$$0$2 = /* @__PURE__ */ getAugmentedNamespace(react);
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredUseSyncExternalStoreShim_production;
function requireUseSyncExternalStoreShim_production() {
  if (hasRequiredUseSyncExternalStoreShim_production) return useSyncExternalStoreShim_production;
  hasRequiredUseSyncExternalStoreShim_production = 1;
  var React = require$$0$2;
  function is(x2, y2) {
    return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
  }
  var objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue;
  function useSyncExternalStore$2(subscribe, getSnapshot) {
    var value = getSnapshot(), _useState = useState({ inst: { value, getSnapshot } }), inst = _useState[0].inst, forceUpdate = _useState[1];
    useLayoutEffect(
      function() {
        inst.value = value;
        inst.getSnapshot = getSnapshot;
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      },
      [subscribe, value, getSnapshot]
    );
    useEffect(
      function() {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        return subscribe(function() {
          checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        });
      },
      [subscribe]
    );
    useDebugValue(value);
    return value;
  }
  function checkIfSnapshotChanged(inst) {
    var latestGetSnapshot = inst.getSnapshot;
    inst = inst.value;
    try {
      var nextValue = latestGetSnapshot();
      return !objectIs(inst, nextValue);
    } catch (error) {
      return true;
    }
  }
  function useSyncExternalStore$1(subscribe, getSnapshot) {
    return getSnapshot();
  }
  var shim2 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
  useSyncExternalStoreShim_production.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim2;
  return useSyncExternalStoreShim_production;
}
var hasRequiredShim;
function requireShim() {
  if (hasRequiredShim) return shim.exports;
  hasRequiredShim = 1;
  {
    shim.exports = requireUseSyncExternalStoreShim_production();
  }
  return shim.exports;
}
var shimExports = requireShim();
function createReaction(adm) {
  adm.reaction = new Reaction("observer".concat(adm.name), function() {
    var _a2;
    adm.stateVersion = Symbol();
    (_a2 = adm.onStoreChange) === null || _a2 === void 0 ? void 0 : _a2.call(adm);
  });
}
function useObserver(render, baseComponentName) {
  if (baseComponentName === void 0) {
    baseComponentName = "observed";
  }
  var admRef = Rn.useRef(null);
  if (!admRef.current) {
    var adm_1 = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: baseComponentName,
      subscribe: function(onStoreChange) {
        observerFinalizationRegistry.unregister(adm_1);
        adm_1.onStoreChange = onStoreChange;
        if (!adm_1.reaction) {
          createReaction(adm_1);
          adm_1.stateVersion = Symbol();
        }
        return function() {
          var _a2;
          adm_1.onStoreChange = null;
          (_a2 = adm_1.reaction) === null || _a2 === void 0 ? void 0 : _a2.dispose();
          adm_1.reaction = null;
        };
      },
      getSnapshot: function() {
        return adm_1.stateVersion;
      }
    };
    admRef.current = adm_1;
  }
  var adm = admRef.current;
  if (!adm.reaction) {
    createReaction(adm);
    observerFinalizationRegistry.register(admRef, adm, adm);
  }
  Rn.useDebugValue(adm.reaction, printDebugValue);
  shimExports.useSyncExternalStore(
    // Both of these must be stable, otherwise it would keep resubscribing every render.
    adm.subscribe,
    adm.getSnapshot,
    adm.getSnapshot
  );
  var renderResult;
  var exception;
  adm.reaction.track(function() {
    try {
      renderResult = render();
    } catch (e2) {
      exception = e2;
    }
  });
  if (exception) {
    throw exception;
  }
  return renderResult;
}
var _a$1, _b;
var hasSymbol = typeof Symbol === "function" && Symbol.for;
var isFunctionNameConfigurable = (_b = (_a$1 = Object.getOwnPropertyDescriptor(function() {
}, "name")) === null || _a$1 === void 0 ? void 0 : _a$1.configurable) !== null && _b !== void 0 ? _b : false;
var ReactForwardRefSymbol = hasSymbol ? Symbol.for("react.forward_ref") : typeof D === "function" && D(function(props) {
  return null;
})["$$typeof"];
var ReactMemoSymbol = hasSymbol ? Symbol.for("react.memo") : typeof M === "function" && M(function(props) {
  return null;
})["$$typeof"];
function observer(baseComponent, options) {
  var _a2;
  if (ReactMemoSymbol && baseComponent["$$typeof"] === ReactMemoSymbol) {
    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
  }
  var useForwardRef = (_a2 = void 0) !== null && _a2 !== void 0 ? _a2 : false;
  var render = baseComponent;
  var baseComponentName = baseComponent.displayName || baseComponent.name;
  if (ReactForwardRefSymbol && baseComponent["$$typeof"] === ReactForwardRefSymbol) {
    useForwardRef = true;
    render = baseComponent["render"];
    if (typeof render !== "function") {
      throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
    }
  }
  var observerComponent = function(props, ref) {
    return useObserver(function() {
      return render(props, ref);
    }, baseComponentName);
  };
  observerComponent.displayName = baseComponent.displayName;
  if (isFunctionNameConfigurable) {
    Object.defineProperty(observerComponent, "name", {
      value: baseComponent.name,
      writable: true,
      configurable: true
    });
  }
  if (baseComponent.contextTypes) {
    observerComponent.contextTypes = baseComponent.contextTypes;
  }
  if (useForwardRef) {
    observerComponent = D(observerComponent);
  }
  observerComponent = M(observerComponent);
  copyStaticProperties(baseComponent, observerComponent);
  return observerComponent;
}
var hoistBlackList = {
  $$typeof: true,
  render: true,
  compare: true,
  type: true,
  // Don't redefine `displayName`,
  // it's defined as getter-setter pair on `memo` (see #3192).
  displayName: true
};
function copyStaticProperties(base, target2) {
  Object.keys(base).forEach(function(key) {
    if (!hoistBlackList[key]) {
      Object.defineProperty(target2, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}
function useLocalObservable(initializer, annotations) {
  return d(function() {
    return observable(initializer(), annotations, { autoBind: true });
  })[0];
}
var _a;
observerBatching(gn);
(_a = observerFinalizationRegistry["finalizeAllImmediately"]) !== null && _a !== void 0 ? _a : function() {
};
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var object_hash = { exports: {} };
var hasRequiredObject_hash;
function requireObject_hash() {
  if (hasRequiredObject_hash) return object_hash.exports;
  hasRequiredObject_hash = 1;
  (function(module, exports) {
    !function(e2) {
      module.exports = e2();
    }(function() {
      return function r2(o2, i2, u2) {
        function s2(n2, e3) {
          if (!i2[n2]) {
            if (!o2[n2]) {
              var t2 = "function" == typeof commonjsRequire && commonjsRequire;
              if (!e3 && t2) return t2(n2, true);
              if (a2) return a2(n2, true);
              throw new Error("Cannot find module '" + n2 + "'");
            }
            e3 = i2[n2] = { exports: {} };
            o2[n2][0].call(e3.exports, function(e4) {
              var t3 = o2[n2][1][e4];
              return s2(t3 || e4);
            }, e3, e3.exports, r2, o2, i2, u2);
          }
          return i2[n2].exports;
        }
        for (var a2 = "function" == typeof commonjsRequire && commonjsRequire, e2 = 0; e2 < u2.length; e2++) s2(u2[e2]);
        return s2;
      }({ 1: [function(w2, b2, m2) {
        !(function(e2, n2, s2, c2, d2, h2, p2, g2, y2) {
          var r2 = w2("crypto");
          function t2(e3, t3) {
            t3 = u2(e3, t3);
            var n3;
            return void 0 === (n3 = "passthrough" !== t3.algorithm ? r2.createHash(t3.algorithm) : new l2()).write && (n3.write = n3.update, n3.end = n3.update), f2(t3, n3).dispatch(e3), n3.update || n3.end(""), n3.digest ? n3.digest("buffer" === t3.encoding ? void 0 : t3.encoding) : (e3 = n3.read(), "buffer" !== t3.encoding ? e3.toString(t3.encoding) : e3);
          }
          (m2 = b2.exports = t2).sha1 = function(e3) {
            return t2(e3);
          }, m2.keys = function(e3) {
            return t2(e3, { excludeValues: true, algorithm: "sha1", encoding: "hex" });
          }, m2.MD5 = function(e3) {
            return t2(e3, { algorithm: "md5", encoding: "hex" });
          }, m2.keysMD5 = function(e3) {
            return t2(e3, { algorithm: "md5", encoding: "hex", excludeValues: true });
          };
          var o2 = r2.getHashes ? r2.getHashes().slice() : ["sha1", "md5"], i2 = (o2.push("passthrough"), ["buffer", "hex", "binary", "base64"]);
          function u2(e3, t3) {
            var n3 = {};
            if (n3.algorithm = (t3 = t3 || {}).algorithm || "sha1", n3.encoding = t3.encoding || "hex", n3.excludeValues = !!t3.excludeValues, n3.algorithm = n3.algorithm.toLowerCase(), n3.encoding = n3.encoding.toLowerCase(), n3.ignoreUnknown = true === t3.ignoreUnknown, n3.respectType = false !== t3.respectType, n3.respectFunctionNames = false !== t3.respectFunctionNames, n3.respectFunctionProperties = false !== t3.respectFunctionProperties, n3.unorderedArrays = true === t3.unorderedArrays, n3.unorderedSets = false !== t3.unorderedSets, n3.unorderedObjects = false !== t3.unorderedObjects, n3.replacer = t3.replacer || void 0, n3.excludeKeys = t3.excludeKeys || void 0, void 0 === e3) throw new Error("Object argument required.");
            for (var r3 = 0; r3 < o2.length; ++r3) o2[r3].toLowerCase() === n3.algorithm.toLowerCase() && (n3.algorithm = o2[r3]);
            if (-1 === o2.indexOf(n3.algorithm)) throw new Error('Algorithm "' + n3.algorithm + '"  not supported. supported values: ' + o2.join(", "));
            if (-1 === i2.indexOf(n3.encoding) && "passthrough" !== n3.algorithm) throw new Error('Encoding "' + n3.encoding + '"  not supported. supported values: ' + i2.join(", "));
            return n3;
          }
          function a2(e3) {
            if ("function" == typeof e3) return null != /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e3));
          }
          function f2(o3, t3, i3) {
            i3 = i3 || [];
            function u3(e3) {
              return t3.update ? t3.update(e3, "utf8") : t3.write(e3, "utf8");
            }
            return { dispatch: function(e3) {
              return this["_" + (null === (e3 = o3.replacer ? o3.replacer(e3) : e3) ? "null" : typeof e3)](e3);
            }, _object: function(t4) {
              var n3, e3 = Object.prototype.toString.call(t4), r3 = /\[object (.*)\]/i.exec(e3);
              r3 = (r3 = r3 ? r3[1] : "unknown:[" + e3 + "]").toLowerCase();
              if (0 <= (e3 = i3.indexOf(t4))) return this.dispatch("[CIRCULAR:" + e3 + "]");
              if (i3.push(t4), void 0 !== s2 && s2.isBuffer && s2.isBuffer(t4)) return u3("buffer:"), u3(t4);
              if ("object" === r3 || "function" === r3 || "asyncfunction" === r3) return e3 = Object.keys(t4), o3.unorderedObjects && (e3 = e3.sort()), false === o3.respectType || a2(t4) || e3.splice(0, 0, "prototype", "__proto__", "constructor"), o3.excludeKeys && (e3 = e3.filter(function(e4) {
                return !o3.excludeKeys(e4);
              })), u3("object:" + e3.length + ":"), n3 = this, e3.forEach(function(e4) {
                n3.dispatch(e4), u3(":"), o3.excludeValues || n3.dispatch(t4[e4]), u3(",");
              });
              if (!this["_" + r3]) {
                if (o3.ignoreUnknown) return u3("[" + r3 + "]");
                throw new Error('Unknown object type "' + r3 + '"');
              }
              this["_" + r3](t4);
            }, _array: function(e3, t4) {
              t4 = void 0 !== t4 ? t4 : false !== o3.unorderedArrays;
              var n3 = this;
              if (u3("array:" + e3.length + ":"), !t4 || e3.length <= 1) return e3.forEach(function(e4) {
                return n3.dispatch(e4);
              });
              var r3 = [], t4 = e3.map(function(e4) {
                var t5 = new l2(), n4 = i3.slice();
                return f2(o3, t5, n4).dispatch(e4), r3 = r3.concat(n4.slice(i3.length)), t5.read().toString();
              });
              return i3 = i3.concat(r3), t4.sort(), this._array(t4, false);
            }, _date: function(e3) {
              return u3("date:" + e3.toJSON());
            }, _symbol: function(e3) {
              return u3("symbol:" + e3.toString());
            }, _error: function(e3) {
              return u3("error:" + e3.toString());
            }, _boolean: function(e3) {
              return u3("bool:" + e3.toString());
            }, _string: function(e3) {
              u3("string:" + e3.length + ":"), u3(e3.toString());
            }, _function: function(e3) {
              u3("fn:"), a2(e3) ? this.dispatch("[native]") : this.dispatch(e3.toString()), false !== o3.respectFunctionNames && this.dispatch("function-name:" + String(e3.name)), o3.respectFunctionProperties && this._object(e3);
            }, _number: function(e3) {
              return u3("number:" + e3.toString());
            }, _xml: function(e3) {
              return u3("xml:" + e3.toString());
            }, _null: function() {
              return u3("Null");
            }, _undefined: function() {
              return u3("Undefined");
            }, _regexp: function(e3) {
              return u3("regex:" + e3.toString());
            }, _uint8array: function(e3) {
              return u3("uint8array:"), this.dispatch(Array.prototype.slice.call(e3));
            }, _uint8clampedarray: function(e3) {
              return u3("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e3));
            }, _int8array: function(e3) {
              return u3("int8array:"), this.dispatch(Array.prototype.slice.call(e3));
            }, _uint16array: function(e3) {
              return u3("uint16array:"), this.dispatch(Array.prototype.slice.call(e3));
            }, _int16array: function(e3) {
              return u3("int16array:"), this.dispatch(Array.prototype.slice.call(e3));
            }, _uint32array: function(e3) {
              return u3("uint32array:"), this.dispatch(Array.prototype.slice.call(e3));
            }, _int32array: function(e3) {
              return u3("int32array:"), this.dispatch(Array.prototype.slice.call(e3));
            }, _float32array: function(e3) {
              return u3("float32array:"), this.dispatch(Array.prototype.slice.call(e3));
            }, _float64array: function(e3) {
              return u3("float64array:"), this.dispatch(Array.prototype.slice.call(e3));
            }, _arraybuffer: function(e3) {
              return u3("arraybuffer:"), this.dispatch(new Uint8Array(e3));
            }, _url: function(e3) {
              return u3("url:" + e3.toString());
            }, _map: function(e3) {
              u3("map:");
              e3 = Array.from(e3);
              return this._array(e3, false !== o3.unorderedSets);
            }, _set: function(e3) {
              u3("set:");
              e3 = Array.from(e3);
              return this._array(e3, false !== o3.unorderedSets);
            }, _file: function(e3) {
              return u3("file:"), this.dispatch([e3.name, e3.size, e3.type, e3.lastModfied]);
            }, _blob: function() {
              if (o3.ignoreUnknown) return u3("[blob]");
              throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n');
            }, _domwindow: function() {
              return u3("domwindow");
            }, _bigint: function(e3) {
              return u3("bigint:" + e3.toString());
            }, _process: function() {
              return u3("process");
            }, _timer: function() {
              return u3("timer");
            }, _pipe: function() {
              return u3("pipe");
            }, _tcp: function() {
              return u3("tcp");
            }, _udp: function() {
              return u3("udp");
            }, _tty: function() {
              return u3("tty");
            }, _statwatcher: function() {
              return u3("statwatcher");
            }, _securecontext: function() {
              return u3("securecontext");
            }, _connection: function() {
              return u3("connection");
            }, _zlib: function() {
              return u3("zlib");
            }, _context: function() {
              return u3("context");
            }, _nodescript: function() {
              return u3("nodescript");
            }, _httpparser: function() {
              return u3("httpparser");
            }, _dataview: function() {
              return u3("dataview");
            }, _signal: function() {
              return u3("signal");
            }, _fsevent: function() {
              return u3("fsevent");
            }, _tlswrap: function() {
              return u3("tlswrap");
            } };
          }
          function l2() {
            return { buf: "", write: function(e3) {
              this.buf += e3;
            }, end: function(e3) {
              this.buf += e3;
            }, read: function() {
              return this.buf;
            } };
          }
          m2.writeToStream = function(e3, t3, n3) {
            return void 0 === n3 && (n3 = t3, t3 = {}), f2(t3 = u2(e3, t3), n3).dispatch(e3);
          };
        }).call(this, w2("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, w2("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_9a5aa49d.js", "/");
      }, { buffer: 3, crypto: 5, lYpoI2: 11 }], 2: [function(e2, t2, f2) {
        !(function(e3, t3, n2, r2, o2, i2, u2, s2, a2) {
          !function(e4) {
            var a3 = "undefined" != typeof Uint8Array ? Uint8Array : Array, t4 = "+".charCodeAt(0), n3 = "/".charCodeAt(0), r3 = "0".charCodeAt(0), o3 = "a".charCodeAt(0), i3 = "A".charCodeAt(0), u3 = "-".charCodeAt(0), s3 = "_".charCodeAt(0);
            function f3(e5) {
              e5 = e5.charCodeAt(0);
              return e5 === t4 || e5 === u3 ? 62 : e5 === n3 || e5 === s3 ? 63 : e5 < r3 ? -1 : e5 < r3 + 10 ? e5 - r3 + 26 + 26 : e5 < i3 + 26 ? e5 - i3 : e5 < o3 + 26 ? e5 - o3 + 26 : void 0;
            }
            e4.toByteArray = function(e5) {
              var t5, n4;
              if (0 < e5.length % 4) throw new Error("Invalid string. Length must be a multiple of 4");
              var r4 = e5.length, r4 = "=" === e5.charAt(r4 - 2) ? 2 : "=" === e5.charAt(r4 - 1) ? 1 : 0, o4 = new a3(3 * e5.length / 4 - r4), i4 = 0 < r4 ? e5.length - 4 : e5.length, u4 = 0;
              function s4(e6) {
                o4[u4++] = e6;
              }
              for (t5 = 0; t5 < i4; t5 += 4, 0) s4((16711680 & (n4 = f3(e5.charAt(t5)) << 18 | f3(e5.charAt(t5 + 1)) << 12 | f3(e5.charAt(t5 + 2)) << 6 | f3(e5.charAt(t5 + 3)))) >> 16), s4((65280 & n4) >> 8), s4(255 & n4);
              return 2 == r4 ? s4(255 & (n4 = f3(e5.charAt(t5)) << 2 | f3(e5.charAt(t5 + 1)) >> 4)) : 1 == r4 && (s4((n4 = f3(e5.charAt(t5)) << 10 | f3(e5.charAt(t5 + 1)) << 4 | f3(e5.charAt(t5 + 2)) >> 2) >> 8 & 255), s4(255 & n4)), o4;
            }, e4.fromByteArray = function(e5) {
              var t5, n4, r4, o4, i4 = e5.length % 3, u4 = "";
              function s4(e6) {
                return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e6);
              }
              for (t5 = 0, r4 = e5.length - i4; t5 < r4; t5 += 3) n4 = (e5[t5] << 16) + (e5[t5 + 1] << 8) + e5[t5 + 2], u4 += s4((o4 = n4) >> 18 & 63) + s4(o4 >> 12 & 63) + s4(o4 >> 6 & 63) + s4(63 & o4);
              switch (i4) {
                case 1:
                  u4 = (u4 += s4((n4 = e5[e5.length - 1]) >> 2)) + s4(n4 << 4 & 63) + "==";
                  break;
                case 2:
                  u4 = (u4 = (u4 += s4((n4 = (e5[e5.length - 2] << 8) + e5[e5.length - 1]) >> 10)) + s4(n4 >> 4 & 63)) + s4(n4 << 2 & 63) + "=";
              }
              return u4;
            };
          }(void 0 === f2 ? this.base64js = {} : f2);
        }).call(this, e2("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e2("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib");
      }, { buffer: 3, lYpoI2: 11 }], 3: [function(O2, e2, H2) {
        !(function(e3, n2, f2, r2, h2, p2, g2, y2, w2) {
          var a2 = O2("base64-js"), i2 = O2("ieee754");
          function f2(e4, t3, n3) {
            if (!(this instanceof f2)) return new f2(e4, t3, n3);
            var r3, o3, i3, u3, s3 = typeof e4;
            if ("base64" === t3 && "string" == s3) for (e4 = (u3 = e4).trim ? u3.trim() : u3.replace(/^\s+|\s+$/g, ""); e4.length % 4 != 0; ) e4 += "=";
            if ("number" == s3) r3 = j2(e4);
            else if ("string" == s3) r3 = f2.byteLength(e4, t3);
            else {
              if ("object" != s3) throw new Error("First argument needs to be a number, array or string.");
              r3 = j2(e4.length);
            }
            if (f2._useTypedArrays ? o3 = f2._augment(new Uint8Array(r3)) : ((o3 = this).length = r3, o3._isBuffer = true), f2._useTypedArrays && "number" == typeof e4.byteLength) o3._set(e4);
            else if (C2(u3 = e4) || f2.isBuffer(u3) || u3 && "object" == typeof u3 && "number" == typeof u3.length) for (i3 = 0; i3 < r3; i3++) f2.isBuffer(e4) ? o3[i3] = e4.readUInt8(i3) : o3[i3] = e4[i3];
            else if ("string" == s3) o3.write(e4, 0, t3);
            else if ("number" == s3 && !f2._useTypedArrays && !n3) for (i3 = 0; i3 < r3; i3++) o3[i3] = 0;
            return o3;
          }
          function b2(e4, t3, n3, r3) {
            return f2._charsWritten = c2(function(e5) {
              for (var t4 = [], n4 = 0; n4 < e5.length; n4++) t4.push(255 & e5.charCodeAt(n4));
              return t4;
            }(t3), e4, n3, r3);
          }
          function m2(e4, t3, n3, r3) {
            return f2._charsWritten = c2(function(e5) {
              for (var t4, n4, r4 = [], o3 = 0; o3 < e5.length; o3++) n4 = e5.charCodeAt(o3), t4 = n4 >> 8, n4 = n4 % 256, r4.push(n4), r4.push(t4);
              return r4;
            }(t3), e4, n3, r3);
          }
          function v2(e4, t3, n3) {
            var r3 = "";
            n3 = Math.min(e4.length, n3);
            for (var o3 = t3; o3 < n3; o3++) r3 += String.fromCharCode(e4[o3]);
            return r3;
          }
          function o2(e4, t3, n3, r3) {
            r3 || (d2("boolean" == typeof n3, "missing or invalid endian"), d2(null != t3, "missing offset"), d2(t3 + 1 < e4.length, "Trying to read beyond buffer length"));
            var o3, r3 = e4.length;
            if (!(r3 <= t3)) return n3 ? (o3 = e4[t3], t3 + 1 < r3 && (o3 |= e4[t3 + 1] << 8)) : (o3 = e4[t3] << 8, t3 + 1 < r3 && (o3 |= e4[t3 + 1])), o3;
          }
          function u2(e4, t3, n3, r3) {
            r3 || (d2("boolean" == typeof n3, "missing or invalid endian"), d2(null != t3, "missing offset"), d2(t3 + 3 < e4.length, "Trying to read beyond buffer length"));
            var o3, r3 = e4.length;
            if (!(r3 <= t3)) return n3 ? (t3 + 2 < r3 && (o3 = e4[t3 + 2] << 16), t3 + 1 < r3 && (o3 |= e4[t3 + 1] << 8), o3 |= e4[t3], t3 + 3 < r3 && (o3 += e4[t3 + 3] << 24 >>> 0)) : (t3 + 1 < r3 && (o3 = e4[t3 + 1] << 16), t3 + 2 < r3 && (o3 |= e4[t3 + 2] << 8), t3 + 3 < r3 && (o3 |= e4[t3 + 3]), o3 += e4[t3] << 24 >>> 0), o3;
          }
          function _2(e4, t3, n3, r3) {
            if (r3 || (d2("boolean" == typeof n3, "missing or invalid endian"), d2(null != t3, "missing offset"), d2(t3 + 1 < e4.length, "Trying to read beyond buffer length")), !(e4.length <= t3)) return r3 = o2(e4, t3, n3, true), 32768 & r3 ? -1 * (65535 - r3 + 1) : r3;
          }
          function E2(e4, t3, n3, r3) {
            if (r3 || (d2("boolean" == typeof n3, "missing or invalid endian"), d2(null != t3, "missing offset"), d2(t3 + 3 < e4.length, "Trying to read beyond buffer length")), !(e4.length <= t3)) return r3 = u2(e4, t3, n3, true), 2147483648 & r3 ? -1 * (4294967295 - r3 + 1) : r3;
          }
          function I2(e4, t3, n3, r3) {
            return r3 || (d2("boolean" == typeof n3, "missing or invalid endian"), d2(t3 + 3 < e4.length, "Trying to read beyond buffer length")), i2.read(e4, t3, n3, 23, 4);
          }
          function A2(e4, t3, n3, r3) {
            return r3 || (d2("boolean" == typeof n3, "missing or invalid endian"), d2(t3 + 7 < e4.length, "Trying to read beyond buffer length")), i2.read(e4, t3, n3, 52, 8);
          }
          function s2(e4, t3, n3, r3, o3) {
            o3 || (d2(null != t3, "missing value"), d2("boolean" == typeof r3, "missing or invalid endian"), d2(null != n3, "missing offset"), d2(n3 + 1 < e4.length, "trying to write beyond buffer length"), Y2(t3, 65535));
            o3 = e4.length;
            if (!(o3 <= n3)) for (var i3 = 0, u3 = Math.min(o3 - n3, 2); i3 < u3; i3++) e4[n3 + i3] = (t3 & 255 << 8 * (r3 ? i3 : 1 - i3)) >>> 8 * (r3 ? i3 : 1 - i3);
          }
          function l2(e4, t3, n3, r3, o3) {
            o3 || (d2(null != t3, "missing value"), d2("boolean" == typeof r3, "missing or invalid endian"), d2(null != n3, "missing offset"), d2(n3 + 3 < e4.length, "trying to write beyond buffer length"), Y2(t3, 4294967295));
            o3 = e4.length;
            if (!(o3 <= n3)) for (var i3 = 0, u3 = Math.min(o3 - n3, 4); i3 < u3; i3++) e4[n3 + i3] = t3 >>> 8 * (r3 ? i3 : 3 - i3) & 255;
          }
          function B2(e4, t3, n3, r3, o3) {
            o3 || (d2(null != t3, "missing value"), d2("boolean" == typeof r3, "missing or invalid endian"), d2(null != n3, "missing offset"), d2(n3 + 1 < e4.length, "Trying to write beyond buffer length"), F2(t3, 32767, -32768)), e4.length <= n3 || s2(e4, 0 <= t3 ? t3 : 65535 + t3 + 1, n3, r3, o3);
          }
          function L2(e4, t3, n3, r3, o3) {
            o3 || (d2(null != t3, "missing value"), d2("boolean" == typeof r3, "missing or invalid endian"), d2(null != n3, "missing offset"), d2(n3 + 3 < e4.length, "Trying to write beyond buffer length"), F2(t3, 2147483647, -2147483648)), e4.length <= n3 || l2(e4, 0 <= t3 ? t3 : 4294967295 + t3 + 1, n3, r3, o3);
          }
          function U2(e4, t3, n3, r3, o3) {
            o3 || (d2(null != t3, "missing value"), d2("boolean" == typeof r3, "missing or invalid endian"), d2(null != n3, "missing offset"), d2(n3 + 3 < e4.length, "Trying to write beyond buffer length"), D2(t3, 34028234663852886e22, -34028234663852886e22)), e4.length <= n3 || i2.write(e4, t3, n3, r3, 23, 4);
          }
          function x2(e4, t3, n3, r3, o3) {
            o3 || (d2(null != t3, "missing value"), d2("boolean" == typeof r3, "missing or invalid endian"), d2(null != n3, "missing offset"), d2(n3 + 7 < e4.length, "Trying to write beyond buffer length"), D2(t3, 17976931348623157e292, -17976931348623157e292)), e4.length <= n3 || i2.write(e4, t3, n3, r3, 52, 8);
          }
          H2.Buffer = f2, H2.SlowBuffer = f2, H2.INSPECT_MAX_BYTES = 50, f2.poolSize = 8192, f2._useTypedArrays = function() {
            try {
              var e4 = new ArrayBuffer(0), t3 = new Uint8Array(e4);
              return t3.foo = function() {
                return 42;
              }, 42 === t3.foo() && "function" == typeof t3.subarray;
            } catch (e5) {
              return false;
            }
          }(), f2.isEncoding = function(e4) {
            switch (String(e4).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "raw":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return true;
              default:
                return false;
            }
          }, f2.isBuffer = function(e4) {
            return !(null == e4 || !e4._isBuffer);
          }, f2.byteLength = function(e4, t3) {
            var n3;
            switch (e4 += "", t3 || "utf8") {
              case "hex":
                n3 = e4.length / 2;
                break;
              case "utf8":
              case "utf-8":
                n3 = T2(e4).length;
                break;
              case "ascii":
              case "binary":
              case "raw":
                n3 = e4.length;
                break;
              case "base64":
                n3 = M2(e4).length;
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                n3 = 2 * e4.length;
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return n3;
          }, f2.concat = function(e4, t3) {
            if (d2(C2(e4), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === e4.length) return new f2(0);
            if (1 === e4.length) return e4[0];
            if ("number" != typeof t3) for (o3 = t3 = 0; o3 < e4.length; o3++) t3 += e4[o3].length;
            for (var n3 = new f2(t3), r3 = 0, o3 = 0; o3 < e4.length; o3++) {
              var i3 = e4[o3];
              i3.copy(n3, r3), r3 += i3.length;
            }
            return n3;
          }, f2.prototype.write = function(e4, t3, n3, r3) {
            isFinite(t3) ? isFinite(n3) || (r3 = n3, n3 = void 0) : (a3 = r3, r3 = t3, t3 = n3, n3 = a3), t3 = Number(t3) || 0;
            var o3, i3, u3, s3, a3 = this.length - t3;
            switch ((!n3 || a3 < (n3 = Number(n3))) && (n3 = a3), r3 = String(r3 || "utf8").toLowerCase()) {
              case "hex":
                o3 = function(e5, t4, n4, r4) {
                  n4 = Number(n4) || 0;
                  var o4 = e5.length - n4;
                  (!r4 || o4 < (r4 = Number(r4))) && (r4 = o4), d2((o4 = t4.length) % 2 == 0, "Invalid hex string"), o4 / 2 < r4 && (r4 = o4 / 2);
                  for (var i4 = 0; i4 < r4; i4++) {
                    var u4 = parseInt(t4.substr(2 * i4, 2), 16);
                    d2(!isNaN(u4), "Invalid hex string"), e5[n4 + i4] = u4;
                  }
                  return f2._charsWritten = 2 * i4, i4;
                }(this, e4, t3, n3);
                break;
              case "utf8":
              case "utf-8":
                i3 = this, u3 = t3, s3 = n3, o3 = f2._charsWritten = c2(T2(e4), i3, u3, s3);
                break;
              case "ascii":
              case "binary":
                o3 = b2(this, e4, t3, n3);
                break;
              case "base64":
                i3 = this, u3 = t3, s3 = n3, o3 = f2._charsWritten = c2(M2(e4), i3, u3, s3);
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                o3 = m2(this, e4, t3, n3);
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return o3;
          }, f2.prototype.toString = function(e4, t3, n3) {
            var r3, o3, i3, u3, s3 = this;
            if (e4 = String(e4 || "utf8").toLowerCase(), t3 = Number(t3) || 0, (n3 = void 0 !== n3 ? Number(n3) : s3.length) === t3) return "";
            switch (e4) {
              case "hex":
                r3 = function(e5, t4, n4) {
                  var r4 = e5.length;
                  (!t4 || t4 < 0) && (t4 = 0);
                  (!n4 || n4 < 0 || r4 < n4) && (n4 = r4);
                  for (var o4 = "", i4 = t4; i4 < n4; i4++) o4 += k2(e5[i4]);
                  return o4;
                }(s3, t3, n3);
                break;
              case "utf8":
              case "utf-8":
                r3 = function(e5, t4, n4) {
                  var r4 = "", o4 = "";
                  n4 = Math.min(e5.length, n4);
                  for (var i4 = t4; i4 < n4; i4++) e5[i4] <= 127 ? (r4 += N2(o4) + String.fromCharCode(e5[i4]), o4 = "") : o4 += "%" + e5[i4].toString(16);
                  return r4 + N2(o4);
                }(s3, t3, n3);
                break;
              case "ascii":
              case "binary":
                r3 = v2(s3, t3, n3);
                break;
              case "base64":
                o3 = s3, u3 = n3, r3 = 0 === (i3 = t3) && u3 === o3.length ? a2.fromByteArray(o3) : a2.fromByteArray(o3.slice(i3, u3));
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                r3 = function(e5, t4, n4) {
                  for (var r4 = e5.slice(t4, n4), o4 = "", i4 = 0; i4 < r4.length; i4 += 2) o4 += String.fromCharCode(r4[i4] + 256 * r4[i4 + 1]);
                  return o4;
                }(s3, t3, n3);
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return r3;
          }, f2.prototype.toJSON = function() {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          }, f2.prototype.copy = function(e4, t3, n3, r3) {
            if (t3 = t3 || 0, (r3 = r3 || 0 === r3 ? r3 : this.length) !== (n3 = n3 || 0) && 0 !== e4.length && 0 !== this.length) {
              d2(n3 <= r3, "sourceEnd < sourceStart"), d2(0 <= t3 && t3 < e4.length, "targetStart out of bounds"), d2(0 <= n3 && n3 < this.length, "sourceStart out of bounds"), d2(0 <= r3 && r3 <= this.length, "sourceEnd out of bounds"), r3 > this.length && (r3 = this.length);
              var o3 = (r3 = e4.length - t3 < r3 - n3 ? e4.length - t3 + n3 : r3) - n3;
              if (o3 < 100 || !f2._useTypedArrays) for (var i3 = 0; i3 < o3; i3++) e4[i3 + t3] = this[i3 + n3];
              else e4._set(this.subarray(n3, n3 + o3), t3);
            }
          }, f2.prototype.slice = function(e4, t3) {
            var n3 = this.length;
            if (e4 = S2(e4, n3, 0), t3 = S2(t3, n3, n3), f2._useTypedArrays) return f2._augment(this.subarray(e4, t3));
            for (var r3 = t3 - e4, o3 = new f2(r3, void 0, true), i3 = 0; i3 < r3; i3++) o3[i3] = this[i3 + e4];
            return o3;
          }, f2.prototype.get = function(e4) {
            return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e4);
          }, f2.prototype.set = function(e4, t3) {
            return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e4, t3);
          }, f2.prototype.readUInt8 = function(e4, t3) {
            if (t3 || (d2(null != e4, "missing offset"), d2(e4 < this.length, "Trying to read beyond buffer length")), !(e4 >= this.length)) return this[e4];
          }, f2.prototype.readUInt16LE = function(e4, t3) {
            return o2(this, e4, true, t3);
          }, f2.prototype.readUInt16BE = function(e4, t3) {
            return o2(this, e4, false, t3);
          }, f2.prototype.readUInt32LE = function(e4, t3) {
            return u2(this, e4, true, t3);
          }, f2.prototype.readUInt32BE = function(e4, t3) {
            return u2(this, e4, false, t3);
          }, f2.prototype.readInt8 = function(e4, t3) {
            if (t3 || (d2(null != e4, "missing offset"), d2(e4 < this.length, "Trying to read beyond buffer length")), !(e4 >= this.length)) return 128 & this[e4] ? -1 * (255 - this[e4] + 1) : this[e4];
          }, f2.prototype.readInt16LE = function(e4, t3) {
            return _2(this, e4, true, t3);
          }, f2.prototype.readInt16BE = function(e4, t3) {
            return _2(this, e4, false, t3);
          }, f2.prototype.readInt32LE = function(e4, t3) {
            return E2(this, e4, true, t3);
          }, f2.prototype.readInt32BE = function(e4, t3) {
            return E2(this, e4, false, t3);
          }, f2.prototype.readFloatLE = function(e4, t3) {
            return I2(this, e4, true, t3);
          }, f2.prototype.readFloatBE = function(e4, t3) {
            return I2(this, e4, false, t3);
          }, f2.prototype.readDoubleLE = function(e4, t3) {
            return A2(this, e4, true, t3);
          }, f2.prototype.readDoubleBE = function(e4, t3) {
            return A2(this, e4, false, t3);
          }, f2.prototype.writeUInt8 = function(e4, t3, n3) {
            n3 || (d2(null != e4, "missing value"), d2(null != t3, "missing offset"), d2(t3 < this.length, "trying to write beyond buffer length"), Y2(e4, 255)), t3 >= this.length || (this[t3] = e4);
          }, f2.prototype.writeUInt16LE = function(e4, t3, n3) {
            s2(this, e4, t3, true, n3);
          }, f2.prototype.writeUInt16BE = function(e4, t3, n3) {
            s2(this, e4, t3, false, n3);
          }, f2.prototype.writeUInt32LE = function(e4, t3, n3) {
            l2(this, e4, t3, true, n3);
          }, f2.prototype.writeUInt32BE = function(e4, t3, n3) {
            l2(this, e4, t3, false, n3);
          }, f2.prototype.writeInt8 = function(e4, t3, n3) {
            n3 || (d2(null != e4, "missing value"), d2(null != t3, "missing offset"), d2(t3 < this.length, "Trying to write beyond buffer length"), F2(e4, 127, -128)), t3 >= this.length || (0 <= e4 ? this.writeUInt8(e4, t3, n3) : this.writeUInt8(255 + e4 + 1, t3, n3));
          }, f2.prototype.writeInt16LE = function(e4, t3, n3) {
            B2(this, e4, t3, true, n3);
          }, f2.prototype.writeInt16BE = function(e4, t3, n3) {
            B2(this, e4, t3, false, n3);
          }, f2.prototype.writeInt32LE = function(e4, t3, n3) {
            L2(this, e4, t3, true, n3);
          }, f2.prototype.writeInt32BE = function(e4, t3, n3) {
            L2(this, e4, t3, false, n3);
          }, f2.prototype.writeFloatLE = function(e4, t3, n3) {
            U2(this, e4, t3, true, n3);
          }, f2.prototype.writeFloatBE = function(e4, t3, n3) {
            U2(this, e4, t3, false, n3);
          }, f2.prototype.writeDoubleLE = function(e4, t3, n3) {
            x2(this, e4, t3, true, n3);
          }, f2.prototype.writeDoubleBE = function(e4, t3, n3) {
            x2(this, e4, t3, false, n3);
          }, f2.prototype.fill = function(e4, t3, n3) {
            if (t3 = t3 || 0, n3 = n3 || this.length, d2("number" == typeof (e4 = "string" == typeof (e4 = e4 || 0) ? e4.charCodeAt(0) : e4) && !isNaN(e4), "value is not a number"), d2(t3 <= n3, "end < start"), n3 !== t3 && 0 !== this.length) {
              d2(0 <= t3 && t3 < this.length, "start out of bounds"), d2(0 <= n3 && n3 <= this.length, "end out of bounds");
              for (var r3 = t3; r3 < n3; r3++) this[r3] = e4;
            }
          }, f2.prototype.inspect = function() {
            for (var e4 = [], t3 = this.length, n3 = 0; n3 < t3; n3++) if (e4[n3] = k2(this[n3]), n3 === H2.INSPECT_MAX_BYTES) {
              e4[n3 + 1] = "...";
              break;
            }
            return "<Buffer " + e4.join(" ") + ">";
          }, f2.prototype.toArrayBuffer = function() {
            if ("undefined" == typeof Uint8Array) throw new Error("Buffer.toArrayBuffer not supported in this browser");
            if (f2._useTypedArrays) return new f2(this).buffer;
            for (var e4 = new Uint8Array(this.length), t3 = 0, n3 = e4.length; t3 < n3; t3 += 1) e4[t3] = this[t3];
            return e4.buffer;
          };
          var t2 = f2.prototype;
          function S2(e4, t3, n3) {
            return "number" != typeof e4 ? n3 : t3 <= (e4 = ~~e4) ? t3 : 0 <= e4 || 0 <= (e4 += t3) ? e4 : 0;
          }
          function j2(e4) {
            return (e4 = ~~Math.ceil(+e4)) < 0 ? 0 : e4;
          }
          function C2(e4) {
            return (Array.isArray || function(e5) {
              return "[object Array]" === Object.prototype.toString.call(e5);
            })(e4);
          }
          function k2(e4) {
            return e4 < 16 ? "0" + e4.toString(16) : e4.toString(16);
          }
          function T2(e4) {
            for (var t3 = [], n3 = 0; n3 < e4.length; n3++) {
              var r3 = e4.charCodeAt(n3);
              if (r3 <= 127) t3.push(e4.charCodeAt(n3));
              else for (var o3 = n3, i3 = (55296 <= r3 && r3 <= 57343 && n3++, encodeURIComponent(e4.slice(o3, n3 + 1)).substr(1).split("%")), u3 = 0; u3 < i3.length; u3++) t3.push(parseInt(i3[u3], 16));
            }
            return t3;
          }
          function M2(e4) {
            return a2.toByteArray(e4);
          }
          function c2(e4, t3, n3, r3) {
            for (var o3 = 0; o3 < r3 && !(o3 + n3 >= t3.length || o3 >= e4.length); o3++) t3[o3 + n3] = e4[o3];
            return o3;
          }
          function N2(e4) {
            try {
              return decodeURIComponent(e4);
            } catch (e5) {
              return String.fromCharCode(65533);
            }
          }
          function Y2(e4, t3) {
            d2("number" == typeof e4, "cannot write a non-number as a number"), d2(0 <= e4, "specified a negative value for writing an unsigned value"), d2(e4 <= t3, "value is larger than maximum value for type"), d2(Math.floor(e4) === e4, "value has a fractional component");
          }
          function F2(e4, t3, n3) {
            d2("number" == typeof e4, "cannot write a non-number as a number"), d2(e4 <= t3, "value larger than maximum allowed value"), d2(n3 <= e4, "value smaller than minimum allowed value"), d2(Math.floor(e4) === e4, "value has a fractional component");
          }
          function D2(e4, t3, n3) {
            d2("number" == typeof e4, "cannot write a non-number as a number"), d2(e4 <= t3, "value larger than maximum allowed value"), d2(n3 <= e4, "value smaller than minimum allowed value");
          }
          function d2(e4, t3) {
            if (!e4) throw new Error(t3 || "Failed assertion");
          }
          f2._augment = function(e4) {
            return e4._isBuffer = true, e4._get = e4.get, e4._set = e4.set, e4.get = t2.get, e4.set = t2.set, e4.write = t2.write, e4.toString = t2.toString, e4.toLocaleString = t2.toString, e4.toJSON = t2.toJSON, e4.copy = t2.copy, e4.slice = t2.slice, e4.readUInt8 = t2.readUInt8, e4.readUInt16LE = t2.readUInt16LE, e4.readUInt16BE = t2.readUInt16BE, e4.readUInt32LE = t2.readUInt32LE, e4.readUInt32BE = t2.readUInt32BE, e4.readInt8 = t2.readInt8, e4.readInt16LE = t2.readInt16LE, e4.readInt16BE = t2.readInt16BE, e4.readInt32LE = t2.readInt32LE, e4.readInt32BE = t2.readInt32BE, e4.readFloatLE = t2.readFloatLE, e4.readFloatBE = t2.readFloatBE, e4.readDoubleLE = t2.readDoubleLE, e4.readDoubleBE = t2.readDoubleBE, e4.writeUInt8 = t2.writeUInt8, e4.writeUInt16LE = t2.writeUInt16LE, e4.writeUInt16BE = t2.writeUInt16BE, e4.writeUInt32LE = t2.writeUInt32LE, e4.writeUInt32BE = t2.writeUInt32BE, e4.writeInt8 = t2.writeInt8, e4.writeInt16LE = t2.writeInt16LE, e4.writeInt16BE = t2.writeInt16BE, e4.writeInt32LE = t2.writeInt32LE, e4.writeInt32BE = t2.writeInt32BE, e4.writeFloatLE = t2.writeFloatLE, e4.writeFloatBE = t2.writeFloatBE, e4.writeDoubleLE = t2.writeDoubleLE, e4.writeDoubleBE = t2.writeDoubleBE, e4.fill = t2.fill, e4.inspect = t2.inspect, e4.toArrayBuffer = t2.toArrayBuffer, e4;
          };
        }).call(this, O2("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, O2("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
      }, { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 }], 4: [function(c2, d2, e2) {
        !(function(e3, t2, a2, n2, r2, o2, i2, u2, s2) {
          var a2 = c2("buffer").Buffer, f2 = 4, l2 = new a2(f2);
          l2.fill(0);
          d2.exports = { hash: function(e4, t3, n3, r3) {
            for (var o3 = t3(function(e5, t4) {
              e5.length % f2 != 0 && (n4 = e5.length + (f2 - e5.length % f2), e5 = a2.concat([e5, l2], n4));
              for (var n4, r4 = [], o4 = t4 ? e5.readInt32BE : e5.readInt32LE, i4 = 0; i4 < e5.length; i4 += f2) r4.push(o4.call(e5, i4));
              return r4;
            }(e4 = a2.isBuffer(e4) ? e4 : new a2(e4), r3), 8 * e4.length), t3 = r3, i3 = new a2(n3), u3 = t3 ? i3.writeInt32BE : i3.writeInt32LE, s3 = 0; s3 < o3.length; s3++) u3.call(i3, o3[s3], 4 * s3, true);
            return i3;
          } };
        }).call(this, c2("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, c2("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { buffer: 3, lYpoI2: 11 }], 5: [function(v2, e2, _2) {
        !(function(l2, c2, u2, d2, h2, p2, g2, y2, w2) {
          var u2 = v2("buffer").Buffer, e3 = v2("./sha"), t2 = v2("./sha256"), n2 = v2("./rng"), b2 = { sha1: e3, sha256: t2, md5: v2("./md5") }, s2 = 64, a2 = new u2(s2);
          function r2(e4, n3) {
            var r3 = b2[e4 = e4 || "sha1"], o3 = [];
            return r3 || i2("algorithm:", e4, "is not yet supported"), { update: function(e5) {
              return u2.isBuffer(e5) || (e5 = new u2(e5)), o3.push(e5), e5.length, this;
            }, digest: function(e5) {
              var t3 = u2.concat(o3), t3 = n3 ? function(e6, t4, n4) {
                u2.isBuffer(t4) || (t4 = new u2(t4)), u2.isBuffer(n4) || (n4 = new u2(n4)), t4.length > s2 ? t4 = e6(t4) : t4.length < s2 && (t4 = u2.concat([t4, a2], s2));
                for (var r4 = new u2(s2), o4 = new u2(s2), i3 = 0; i3 < s2; i3++) r4[i3] = 54 ^ t4[i3], o4[i3] = 92 ^ t4[i3];
                return n4 = e6(u2.concat([r4, n4])), e6(u2.concat([o4, n4]));
              }(r3, n3, t3) : r3(t3);
              return o3 = null, e5 ? t3.toString(e5) : t3;
            } };
          }
          function i2() {
            var e4 = [].slice.call(arguments).join(" ");
            throw new Error([e4, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join("\n"));
          }
          a2.fill(0), _2.createHash = function(e4) {
            return r2(e4);
          }, _2.createHmac = r2, _2.randomBytes = function(e4, t3) {
            if (!t3 || !t3.call) return new u2(n2(e4));
            try {
              t3.call(this, void 0, new u2(n2(e4)));
            } catch (e5) {
              t3(e5);
            }
          };
          var o2, f2 = ["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], m2 = function(e4) {
            _2[e4] = function() {
              i2("sorry,", e4, "is not implemented yet");
            };
          };
          for (o2 in f2) m2(f2[o2]);
        }).call(this, v2("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, v2("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./md5": 6, "./rng": 7, "./sha": 8, "./sha256": 9, buffer: 3, lYpoI2: 11 }], 6: [function(w2, b2, e2) {
        !(function(e3, r2, o2, i2, u2, a2, f2, l2, y2) {
          var t2 = w2("./helpers");
          function n2(e4, t3) {
            e4[t3 >> 5] |= 128 << t3 % 32, e4[14 + (t3 + 64 >>> 9 << 4)] = t3;
            for (var n3 = 1732584193, r3 = -271733879, o3 = -1732584194, i3 = 271733878, u3 = 0; u3 < e4.length; u3 += 16) {
              var s3 = n3, a3 = r3, f3 = o3, l3 = i3, n3 = c2(n3, r3, o3, i3, e4[u3 + 0], 7, -680876936), i3 = c2(i3, n3, r3, o3, e4[u3 + 1], 12, -389564586), o3 = c2(o3, i3, n3, r3, e4[u3 + 2], 17, 606105819), r3 = c2(r3, o3, i3, n3, e4[u3 + 3], 22, -1044525330);
              n3 = c2(n3, r3, o3, i3, e4[u3 + 4], 7, -176418897), i3 = c2(i3, n3, r3, o3, e4[u3 + 5], 12, 1200080426), o3 = c2(o3, i3, n3, r3, e4[u3 + 6], 17, -1473231341), r3 = c2(r3, o3, i3, n3, e4[u3 + 7], 22, -45705983), n3 = c2(n3, r3, o3, i3, e4[u3 + 8], 7, 1770035416), i3 = c2(i3, n3, r3, o3, e4[u3 + 9], 12, -1958414417), o3 = c2(o3, i3, n3, r3, e4[u3 + 10], 17, -42063), r3 = c2(r3, o3, i3, n3, e4[u3 + 11], 22, -1990404162), n3 = c2(n3, r3, o3, i3, e4[u3 + 12], 7, 1804603682), i3 = c2(i3, n3, r3, o3, e4[u3 + 13], 12, -40341101), o3 = c2(o3, i3, n3, r3, e4[u3 + 14], 17, -1502002290), n3 = d2(n3, r3 = c2(r3, o3, i3, n3, e4[u3 + 15], 22, 1236535329), o3, i3, e4[u3 + 1], 5, -165796510), i3 = d2(i3, n3, r3, o3, e4[u3 + 6], 9, -1069501632), o3 = d2(o3, i3, n3, r3, e4[u3 + 11], 14, 643717713), r3 = d2(r3, o3, i3, n3, e4[u3 + 0], 20, -373897302), n3 = d2(n3, r3, o3, i3, e4[u3 + 5], 5, -701558691), i3 = d2(i3, n3, r3, o3, e4[u3 + 10], 9, 38016083), o3 = d2(o3, i3, n3, r3, e4[u3 + 15], 14, -660478335), r3 = d2(r3, o3, i3, n3, e4[u3 + 4], 20, -405537848), n3 = d2(n3, r3, o3, i3, e4[u3 + 9], 5, 568446438), i3 = d2(i3, n3, r3, o3, e4[u3 + 14], 9, -1019803690), o3 = d2(o3, i3, n3, r3, e4[u3 + 3], 14, -187363961), r3 = d2(r3, o3, i3, n3, e4[u3 + 8], 20, 1163531501), n3 = d2(n3, r3, o3, i3, e4[u3 + 13], 5, -1444681467), i3 = d2(i3, n3, r3, o3, e4[u3 + 2], 9, -51403784), o3 = d2(o3, i3, n3, r3, e4[u3 + 7], 14, 1735328473), n3 = h2(n3, r3 = d2(r3, o3, i3, n3, e4[u3 + 12], 20, -1926607734), o3, i3, e4[u3 + 5], 4, -378558), i3 = h2(i3, n3, r3, o3, e4[u3 + 8], 11, -2022574463), o3 = h2(o3, i3, n3, r3, e4[u3 + 11], 16, 1839030562), r3 = h2(r3, o3, i3, n3, e4[u3 + 14], 23, -35309556), n3 = h2(n3, r3, o3, i3, e4[u3 + 1], 4, -1530992060), i3 = h2(i3, n3, r3, o3, e4[u3 + 4], 11, 1272893353), o3 = h2(o3, i3, n3, r3, e4[u3 + 7], 16, -155497632), r3 = h2(r3, o3, i3, n3, e4[u3 + 10], 23, -1094730640), n3 = h2(n3, r3, o3, i3, e4[u3 + 13], 4, 681279174), i3 = h2(i3, n3, r3, o3, e4[u3 + 0], 11, -358537222), o3 = h2(o3, i3, n3, r3, e4[u3 + 3], 16, -722521979), r3 = h2(r3, o3, i3, n3, e4[u3 + 6], 23, 76029189), n3 = h2(n3, r3, o3, i3, e4[u3 + 9], 4, -640364487), i3 = h2(i3, n3, r3, o3, e4[u3 + 12], 11, -421815835), o3 = h2(o3, i3, n3, r3, e4[u3 + 15], 16, 530742520), n3 = p2(n3, r3 = h2(r3, o3, i3, n3, e4[u3 + 2], 23, -995338651), o3, i3, e4[u3 + 0], 6, -198630844), i3 = p2(i3, n3, r3, o3, e4[u3 + 7], 10, 1126891415), o3 = p2(o3, i3, n3, r3, e4[u3 + 14], 15, -1416354905), r3 = p2(r3, o3, i3, n3, e4[u3 + 5], 21, -57434055), n3 = p2(n3, r3, o3, i3, e4[u3 + 12], 6, 1700485571), i3 = p2(i3, n3, r3, o3, e4[u3 + 3], 10, -1894986606), o3 = p2(o3, i3, n3, r3, e4[u3 + 10], 15, -1051523), r3 = p2(r3, o3, i3, n3, e4[u3 + 1], 21, -2054922799), n3 = p2(n3, r3, o3, i3, e4[u3 + 8], 6, 1873313359), i3 = p2(i3, n3, r3, o3, e4[u3 + 15], 10, -30611744), o3 = p2(o3, i3, n3, r3, e4[u3 + 6], 15, -1560198380), r3 = p2(r3, o3, i3, n3, e4[u3 + 13], 21, 1309151649), n3 = p2(n3, r3, o3, i3, e4[u3 + 4], 6, -145523070), i3 = p2(i3, n3, r3, o3, e4[u3 + 11], 10, -1120210379), o3 = p2(o3, i3, n3, r3, e4[u3 + 2], 15, 718787259), r3 = p2(r3, o3, i3, n3, e4[u3 + 9], 21, -343485551), n3 = g2(n3, s3), r3 = g2(r3, a3), o3 = g2(o3, f3), i3 = g2(i3, l3);
            }
            return Array(n3, r3, o3, i3);
          }
          function s2(e4, t3, n3, r3, o3, i3) {
            return g2((t3 = g2(g2(t3, e4), g2(r3, i3))) << o3 | t3 >>> 32 - o3, n3);
          }
          function c2(e4, t3, n3, r3, o3, i3, u3) {
            return s2(t3 & n3 | ~t3 & r3, e4, t3, o3, i3, u3);
          }
          function d2(e4, t3, n3, r3, o3, i3, u3) {
            return s2(t3 & r3 | n3 & ~r3, e4, t3, o3, i3, u3);
          }
          function h2(e4, t3, n3, r3, o3, i3, u3) {
            return s2(t3 ^ n3 ^ r3, e4, t3, o3, i3, u3);
          }
          function p2(e4, t3, n3, r3, o3, i3, u3) {
            return s2(n3 ^ (t3 | ~r3), e4, t3, o3, i3, u3);
          }
          function g2(e4, t3) {
            var n3 = (65535 & e4) + (65535 & t3);
            return (e4 >> 16) + (t3 >> 16) + (n3 >> 16) << 16 | 65535 & n3;
          }
          b2.exports = function(e4) {
            return t2.hash(e4, n2, 16);
          };
        }).call(this, w2("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, w2("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 7: [function(e2, l2, t2) {
        !(function(e3, t3, n2, r2, o2, i2, u2, s2, f2) {
          l2.exports = function(e4) {
            for (var t4, n3 = new Array(e4), r3 = 0; r3 < e4; r3++) 0 == (3 & r3) && (t4 = 4294967296 * Math.random()), n3[r3] = t4 >>> ((3 & r3) << 3) & 255;
            return n3;
          };
        }).call(this, e2("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e2("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { buffer: 3, lYpoI2: 11 }], 8: [function(c2, d2, e2) {
        !(function(e3, t2, n2, r2, o2, s2, a2, f2, l2) {
          var i2 = c2("./helpers");
          function u2(l3, c3) {
            l3[c3 >> 5] |= 128 << 24 - c3 % 32, l3[15 + (c3 + 64 >> 9 << 4)] = c3;
            for (var e4, t3, n3, r3 = Array(80), o3 = 1732584193, i3 = -271733879, u3 = -1732584194, s3 = 271733878, d3 = -1009589776, h2 = 0; h2 < l3.length; h2 += 16) {
              for (var p2 = o3, g2 = i3, y2 = u3, w2 = s3, b2 = d3, a3 = 0; a3 < 80; a3++) {
                r3[a3] = a3 < 16 ? l3[h2 + a3] : v2(r3[a3 - 3] ^ r3[a3 - 8] ^ r3[a3 - 14] ^ r3[a3 - 16], 1);
                var f3 = m2(m2(v2(o3, 5), (f3 = i3, t3 = u3, n3 = s3, (e4 = a3) < 20 ? f3 & t3 | ~f3 & n3 : !(e4 < 40) && e4 < 60 ? f3 & t3 | f3 & n3 | t3 & n3 : f3 ^ t3 ^ n3)), m2(m2(d3, r3[a3]), (e4 = a3) < 20 ? 1518500249 : e4 < 40 ? 1859775393 : e4 < 60 ? -1894007588 : -899497514)), d3 = s3, s3 = u3, u3 = v2(i3, 30), i3 = o3, o3 = f3;
              }
              o3 = m2(o3, p2), i3 = m2(i3, g2), u3 = m2(u3, y2), s3 = m2(s3, w2), d3 = m2(d3, b2);
            }
            return Array(o3, i3, u3, s3, d3);
          }
          function m2(e4, t3) {
            var n3 = (65535 & e4) + (65535 & t3);
            return (e4 >> 16) + (t3 >> 16) + (n3 >> 16) << 16 | 65535 & n3;
          }
          function v2(e4, t3) {
            return e4 << t3 | e4 >>> 32 - t3;
          }
          d2.exports = function(e4) {
            return i2.hash(e4, u2, 20, true);
          };
        }).call(this, c2("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, c2("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 9: [function(c2, d2, e2) {
        !(function(e3, t2, n2, r2, u2, s2, a2, f2, l2) {
          function b2(e4, t3) {
            var n3 = (65535 & e4) + (65535 & t3);
            return (e4 >> 16) + (t3 >> 16) + (n3 >> 16) << 16 | 65535 & n3;
          }
          function o2(e4, l3) {
            var c3, d3 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), t3 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), n3 = new Array(64);
            e4[l3 >> 5] |= 128 << 24 - l3 % 32, e4[15 + (l3 + 64 >> 9 << 4)] = l3;
            for (var r3, o3, h2 = 0; h2 < e4.length; h2 += 16) {
              for (var i3 = t3[0], u3 = t3[1], s3 = t3[2], p2 = t3[3], a3 = t3[4], g2 = t3[5], y2 = t3[6], w2 = t3[7], f3 = 0; f3 < 64; f3++) n3[f3] = f3 < 16 ? e4[f3 + h2] : b2(b2(b2((o3 = n3[f3 - 2], m2(o3, 17) ^ m2(o3, 19) ^ v2(o3, 10)), n3[f3 - 7]), (o3 = n3[f3 - 15], m2(o3, 7) ^ m2(o3, 18) ^ v2(o3, 3))), n3[f3 - 16]), c3 = b2(b2(b2(b2(w2, m2(o3 = a3, 6) ^ m2(o3, 11) ^ m2(o3, 25)), a3 & g2 ^ ~a3 & y2), d3[f3]), n3[f3]), r3 = b2(m2(r3 = i3, 2) ^ m2(r3, 13) ^ m2(r3, 22), i3 & u3 ^ i3 & s3 ^ u3 & s3), w2 = y2, y2 = g2, g2 = a3, a3 = b2(p2, c3), p2 = s3, s3 = u3, u3 = i3, i3 = b2(c3, r3);
              t3[0] = b2(i3, t3[0]), t3[1] = b2(u3, t3[1]), t3[2] = b2(s3, t3[2]), t3[3] = b2(p2, t3[3]), t3[4] = b2(a3, t3[4]), t3[5] = b2(g2, t3[5]), t3[6] = b2(y2, t3[6]), t3[7] = b2(w2, t3[7]);
            }
            return t3;
          }
          var i2 = c2("./helpers"), m2 = function(e4, t3) {
            return e4 >>> t3 | e4 << 32 - t3;
          }, v2 = function(e4, t3) {
            return e4 >>> t3;
          };
          d2.exports = function(e4) {
            return i2.hash(e4, o2, 32, true);
          };
        }).call(this, c2("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, c2("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 10: [function(e2, t2, f2) {
        !(function(e3, t3, n2, r2, o2, i2, u2, s2, a2) {
          f2.read = function(e4, t4, n3, r3, o3) {
            var i3, u3, l2 = 8 * o3 - r3 - 1, c2 = (1 << l2) - 1, d2 = c2 >> 1, s3 = -7, a3 = n3 ? o3 - 1 : 0, f3 = n3 ? -1 : 1, o3 = e4[t4 + a3];
            for (a3 += f3, i3 = o3 & (1 << -s3) - 1, o3 >>= -s3, s3 += l2; 0 < s3; i3 = 256 * i3 + e4[t4 + a3], a3 += f3, s3 -= 8) ;
            for (u3 = i3 & (1 << -s3) - 1, i3 >>= -s3, s3 += r3; 0 < s3; u3 = 256 * u3 + e4[t4 + a3], a3 += f3, s3 -= 8) ;
            if (0 === i3) i3 = 1 - d2;
            else {
              if (i3 === c2) return u3 ? NaN : 1 / 0 * (o3 ? -1 : 1);
              u3 += Math.pow(2, r3), i3 -= d2;
            }
            return (o3 ? -1 : 1) * u3 * Math.pow(2, i3 - r3);
          }, f2.write = function(e4, t4, l2, n3, r3, c2) {
            var o3, i3, u3 = 8 * c2 - r3 - 1, s3 = (1 << u3) - 1, a3 = s3 >> 1, d2 = 23 === r3 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f3 = n3 ? 0 : c2 - 1, h2 = n3 ? 1 : -1, c2 = t4 < 0 || 0 === t4 && 1 / t4 < 0 ? 1 : 0;
            for (t4 = Math.abs(t4), isNaN(t4) || t4 === 1 / 0 ? (i3 = isNaN(t4) ? 1 : 0, o3 = s3) : (o3 = Math.floor(Math.log(t4) / Math.LN2), t4 * (n3 = Math.pow(2, -o3)) < 1 && (o3--, n3 *= 2), 2 <= (t4 += 1 <= o3 + a3 ? d2 / n3 : d2 * Math.pow(2, 1 - a3)) * n3 && (o3++, n3 /= 2), s3 <= o3 + a3 ? (i3 = 0, o3 = s3) : 1 <= o3 + a3 ? (i3 = (t4 * n3 - 1) * Math.pow(2, r3), o3 += a3) : (i3 = t4 * Math.pow(2, a3 - 1) * Math.pow(2, r3), o3 = 0)); 8 <= r3; e4[l2 + f3] = 255 & i3, f3 += h2, i3 /= 256, r3 -= 8) ;
            for (o3 = o3 << r3 | i3, u3 += r3; 0 < u3; e4[l2 + f3] = 255 & o3, f3 += h2, o3 /= 256, u3 -= 8) ;
            e4[l2 + f3 - h2] |= 128 * c2;
          };
        }).call(this, e2("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e2("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/ieee754/index.js", "/node_modules/gulp-browserify/node_modules/ieee754");
      }, { buffer: 3, lYpoI2: 11 }], 11: [function(e2, h2, t2) {
        !(function(e3, t3, n2, r2, o2, f2, l2, c2, d2) {
          var i2, u2, s2;
          function a2() {
          }
          (e3 = h2.exports = {}).nextTick = (u2 = "undefined" != typeof window && window.setImmediate, s2 = "undefined" != typeof window && window.postMessage && window.addEventListener, u2 ? function(e4) {
            return window.setImmediate(e4);
          } : s2 ? (i2 = [], window.addEventListener("message", function(e4) {
            var t4 = e4.source;
            t4 !== window && null !== t4 || "process-tick" !== e4.data || (e4.stopPropagation(), 0 < i2.length && i2.shift()());
          }, true), function(e4) {
            i2.push(e4), window.postMessage("process-tick", "*");
          }) : function(e4) {
            setTimeout(e4, 0);
          }), e3.title = "browser", e3.browser = true, e3.env = {}, e3.argv = [], e3.on = a2, e3.addListener = a2, e3.once = a2, e3.off = a2, e3.removeListener = a2, e3.removeAllListeners = a2, e3.emit = a2, e3.binding = function(e4) {
            throw new Error("process.binding is not supported");
          }, e3.cwd = function() {
            return "/";
          }, e3.chdir = function(e4) {
            throw new Error("process.chdir is not supported");
          };
        }).call(this, e2("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e2("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
      }, { buffer: 3, lYpoI2: 11 }] }, {}, [1])(1);
    });
  })(object_hash);
  return object_hash.exports;
}
var object_hashExports = requireObject_hash();
const hash = /* @__PURE__ */ getDefaultExportFromCjs(object_hashExports);
var fastDeepEqual;
var hasRequiredFastDeepEqual;
function requireFastDeepEqual() {
  if (hasRequiredFastDeepEqual) return fastDeepEqual;
  hasRequiredFastDeepEqual = 1;
  fastDeepEqual = function equal(a2, b2) {
    if (a2 === b2) return true;
    if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
      if (a2.constructor !== b2.constructor) return false;
      var length, i2, keys;
      if (Array.isArray(a2)) {
        length = a2.length;
        if (length != b2.length) return false;
        for (i2 = length; i2-- !== 0; )
          if (!equal(a2[i2], b2[i2])) return false;
        return true;
      }
      if (a2.constructor === RegExp) return a2.source === b2.source && a2.flags === b2.flags;
      if (a2.valueOf !== Object.prototype.valueOf) return a2.valueOf() === b2.valueOf();
      if (a2.toString !== Object.prototype.toString) return a2.toString() === b2.toString();
      keys = Object.keys(a2);
      length = keys.length;
      if (length !== Object.keys(b2).length) return false;
      for (i2 = length; i2-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b2, keys[i2])) return false;
      for (i2 = length; i2-- !== 0; ) {
        var key = keys[i2];
        if (!equal(a2[key], b2[key])) return false;
      }
      return true;
    }
    return a2 !== a2 && b2 !== b2;
  };
  return fastDeepEqual;
}
var fastDeepEqualExports = requireFastDeepEqual();
const isEqual = /* @__PURE__ */ getDefaultExportFromCjs(fastDeepEqualExports);
var isCheckBoxInput = (element) => element.type === "checkbox";
var isDateObject = (value) => value instanceof Date;
var isNullOrUndefined = (value) => value == null;
const isObjectType = (value) => typeof value === "object";
var isObject$1 = (value) => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
var getEventValue = (event) => isObject$1(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));
var isPlainObject$1 = (tempObject) => {
  const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
  return isObject$1(prototypeCopy) && prototypeCopy.hasOwnProperty("isPrototypeOf");
};
var isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
function cloneObject(data) {
  let copy2;
  const isArray = Array.isArray(data);
  const isFileListInstance = typeof FileList !== "undefined" ? data instanceof FileList : false;
  if (data instanceof Date) {
    copy2 = new Date(data);
  } else if (data instanceof Set) {
    copy2 = new Set(data);
  } else if (!(isWeb && (data instanceof Blob || isFileListInstance)) && (isArray || isObject$1(data))) {
    copy2 = isArray ? [] : {};
    if (!isArray && !isPlainObject$1(data)) {
      copy2 = data;
    } else {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          copy2[key] = cloneObject(data[key]);
        }
      }
    }
  } else {
    return data;
  }
  return copy2;
}
var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];
var isUndefined = (val) => val === void 0;
var get$1 = (object2, path, defaultValue) => {
  if (!path || !isObject$1(object2)) {
    return defaultValue;
  }
  const result = compact(path.split(/[,[\].]+?/)).reduce((result2, key) => isNullOrUndefined(result2) ? result2 : result2[key], object2);
  return isUndefined(result) || result === object2 ? isUndefined(object2[path]) ? defaultValue : object2[path] : result;
};
var isBoolean = (value) => typeof value === "boolean";
var isKey = (value) => /^\w*$/.test(value);
var stringToPath = (input) => compact(input.replace(/["|']|\]/g, "").split(/\.|\[/));
var set2 = (object2, path, value) => {
  let index = -1;
  const tempPath = isKey(path) ? [path] : stringToPath(path);
  const length = tempPath.length;
  const lastIndex = length - 1;
  while (++index < length) {
    const key = tempPath[index];
    let newValue = value;
    if (index !== lastIndex) {
      const objValue = object2[key];
      newValue = isObject$1(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
    }
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return;
    }
    object2[key] = newValue;
    object2 = object2[key];
  }
};
const EVENTS = {
  BLUR: "blur",
  FOCUS_OUT: "focusout"
};
const VALIDATION_MODE = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
};
const INPUT_VALIDATION_RULES = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
Rn.createContext(null);
var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
  const result = {
    defaultValues: control._defaultValues
  };
  for (const key in formState) {
    Object.defineProperty(result, key, {
      get: () => {
        const _key = key;
        if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
          control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
        }
        return formState[_key];
      }
    });
  }
  return result;
};
var isString = (value) => typeof value === "string";
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
  if (isString(names)) {
    isGlobal && _names.watch.add(names);
    return get$1(formValues, names, defaultValue);
  }
  if (Array.isArray(names)) {
    return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName), get$1(formValues, fieldName)));
  }
  isGlobal && (_names.watchAll = true);
  return formValues;
};
var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria ? {
  ...errors[name],
  types: {
    ...errors[name] && errors[name].types ? errors[name].types : {},
    [type]: message || true
  }
} : {};
var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];
var createSubject = () => {
  let _observers = [];
  const next = (value) => {
    for (const observer2 of _observers) {
      observer2.next && observer2.next(value);
    }
  };
  const subscribe = (observer2) => {
    _observers.push(observer2);
    return {
      unsubscribe: () => {
        _observers = _observers.filter((o2) => o2 !== observer2);
      }
    };
  };
  const unsubscribe = () => {
    _observers = [];
  };
  return {
    get observers() {
      return _observers;
    },
    next,
    subscribe,
    unsubscribe
  };
};
var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);
function deepEqual(object1, object2) {
  if (isPrimitive(object1) || isPrimitive(object2)) {
    return object1 === object2;
  }
  if (isDateObject(object1) && isDateObject(object2)) {
    return object1.getTime() === object2.getTime();
  }
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    if (!keys2.includes(key)) {
      return false;
    }
    if (key !== "ref") {
      const val2 = object2[key];
      if (isDateObject(val1) && isDateObject(val2) || isObject$1(val1) && isObject$1(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2) : val1 !== val2) {
        return false;
      }
    }
  }
  return true;
}
var isEmptyObject = (value) => isObject$1(value) && !Object.keys(value).length;
var isFileInput = (element) => element.type === "file";
var isFunction = (value) => typeof value === "function";
var isHTMLElement = (value) => {
  if (!isWeb) {
    return false;
  }
  const owner = value ? value.ownerDocument : 0;
  return value instanceof (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement);
};
var isMultipleSelect = (element) => element.type === `select-multiple`;
var isRadioInput = (element) => element.type === "radio";
var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);
var live = (ref) => isHTMLElement(ref) && ref.isConnected;
function baseGet(object2, updatePath) {
  const length = updatePath.slice(0, -1).length;
  let index = 0;
  while (index < length) {
    object2 = isUndefined(object2) ? index++ : object2[updatePath[index++]];
  }
  return object2;
}
function isEmptyArray(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
      return false;
    }
  }
  return true;
}
function unset(object2, path) {
  const paths = Array.isArray(path) ? path : isKey(path) ? [path] : stringToPath(path);
  const childObject = paths.length === 1 ? object2 : baseGet(object2, paths);
  const index = paths.length - 1;
  const key = paths[index];
  if (childObject) {
    delete childObject[key];
  }
  if (index !== 0 && (isObject$1(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) {
    unset(object2, paths.slice(0, -1));
  }
  return object2;
}
var objectHasFunction = (data) => {
  for (const key in data) {
    if (isFunction(data[key])) {
      return true;
    }
  }
  return false;
};
function markFieldsDirty(data, fields = {}) {
  const isParentNodeArray = Array.isArray(data);
  if (isObject$1(data) || isParentNodeArray) {
    for (const key in data) {
      if (Array.isArray(data[key]) || isObject$1(data[key]) && !objectHasFunction(data[key])) {
        fields[key] = Array.isArray(data[key]) ? [] : {};
        markFieldsDirty(data[key], fields[key]);
      } else if (!isNullOrUndefined(data[key])) {
        fields[key] = true;
      }
    }
  }
  return fields;
}
function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
  const isParentNodeArray = Array.isArray(data);
  if (isObject$1(data) || isParentNodeArray) {
    for (const key in data) {
      if (Array.isArray(data[key]) || isObject$1(data[key]) && !objectHasFunction(data[key])) {
        if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
          dirtyFieldsFromValues[key] = Array.isArray(data[key]) ? markFieldsDirty(data[key], []) : { ...markFieldsDirty(data[key]) };
        } else {
          getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
        }
      } else {
        dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
      }
    }
  }
  return dirtyFieldsFromValues;
}
var getDirtyFields = (defaultValues, formValues) => getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));
const defaultResult = {
  value: false,
  isValid: false
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
  if (Array.isArray(options)) {
    if (options.length > 1) {
      const values = options.filter((option) => option && option.checked && !option.disabled).map((option) => option.value);
      return { value: values, isValid: !!values.length };
    }
    return options[0].checked && !options[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === "" ? validResult : { value: options[0].value, isValid: true } : validResult
    ) : defaultResult;
  }
  return defaultResult;
};
var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value) ? value : valueAsNumber ? value === "" ? NaN : value ? +value : value : valueAsDate && isString(value) ? new Date(value) : setValueAs ? setValueAs(value) : value;
const defaultReturn = {
  isValid: false,
  value: null
};
var getRadioValue = (options) => Array.isArray(options) ? options.reduce((previous, option) => option && option.checked && !option.disabled ? {
  isValid: true,
  value: option.value
} : previous, defaultReturn) : defaultReturn;
function getFieldValue(_f) {
  const ref = _f.ref;
  if (isFileInput(ref)) {
    return ref.files;
  }
  if (isRadioInput(ref)) {
    return getRadioValue(_f.refs).value;
  }
  if (isMultipleSelect(ref)) {
    return [...ref.selectedOptions].map(({ value }) => value);
  }
  if (isCheckBoxInput(ref)) {
    return getCheckboxValue(_f.refs).value;
  }
  return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
  const fields = {};
  for (const name of fieldsNames) {
    const field = get$1(_fields, name);
    field && set2(fields, name, field._f);
  }
  return {
    criteriaMode,
    names: [...fieldsNames],
    fields,
    shouldUseNativeValidation
  };
};
var isRegex = (value) => value instanceof RegExp;
var getRuleValue = (rule) => isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject$1(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
var getValidationModes = (mode) => ({
  isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
  isOnBlur: mode === VALIDATION_MODE.onBlur,
  isOnChange: mode === VALIDATION_MODE.onChange,
  isOnAll: mode === VALIDATION_MODE.all,
  isOnTouch: mode === VALIDATION_MODE.onTouched
});
const ASYNC_FUNCTION = "AsyncFunction";
var hasPromiseValidation = (fieldReference) => !!fieldReference && !!fieldReference.validate && !!(isFunction(fieldReference.validate) && fieldReference.validate.constructor.name === ASYNC_FUNCTION || isObject$1(fieldReference.validate) && Object.values(fieldReference.validate).find((validateFunction) => validateFunction.constructor.name === ASYNC_FUNCTION));
var hasValidation = (options) => options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
var isWatched = (name, _names, isBlurEvent) => !isBlurEvent && (_names.watchAll || _names.watch.has(name) || [..._names.watch].some((watchName) => name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
const iterateFieldsByAction = (fields, action2, fieldsNames, abortEarly) => {
  for (const key of fieldsNames || Object.keys(fields)) {
    const field = get$1(fields, key);
    if (field) {
      const { _f, ...currentField } = field;
      if (_f) {
        if (_f.refs && _f.refs[0] && action2(_f.refs[0], key) && !abortEarly) {
          return true;
        } else if (_f.ref && action2(_f.ref, _f.name) && !abortEarly) {
          return true;
        } else {
          if (iterateFieldsByAction(currentField, action2)) {
            break;
          }
        }
      } else if (isObject$1(currentField)) {
        if (iterateFieldsByAction(currentField, action2)) {
          break;
        }
      }
    }
  }
  return;
};
function schemaErrorLookup(errors, _fields, name) {
  const error = get$1(errors, name);
  if (error || isKey(name)) {
    return {
      error,
      name
    };
  }
  const names = name.split(".");
  while (names.length) {
    const fieldName = names.join(".");
    const field = get$1(_fields, fieldName);
    const foundError = get$1(errors, fieldName);
    if (field && !Array.isArray(field) && name !== fieldName) {
      return { name };
    }
    if (foundError && foundError.type) {
      return {
        name: fieldName,
        error: foundError
      };
    }
    names.pop();
  }
  return {
    name
  };
}
var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot) => {
  updateFormState(formStateData);
  const { name, ...formState } = formStateData;
  return isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key) => _proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
};
var shouldSubscribeByName = (name, signalName, exact) => !name || !signalName || name === signalName || convertToArrayPayload(name).some((currentName) => currentName && (exact ? currentName === signalName : currentName.startsWith(signalName) || signalName.startsWith(currentName)));
var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
  if (mode.isOnAll) {
    return false;
  } else if (!isSubmitted && mode.isOnTouch) {
    return !(isTouched || isBlurEvent);
  } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
    return !isBlurEvent;
  } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
    return isBlurEvent;
  }
  return true;
};
var unsetEmptyArray = (ref, name) => !compact(get$1(ref, name)).length && unset(ref, name);
var updateFieldArrayRootError = (errors, error, name) => {
  const fieldArrayErrors = convertToArrayPayload(get$1(errors, name));
  set2(fieldArrayErrors, "root", error[name]);
  set2(errors, name, fieldArrayErrors);
  return errors;
};
var isMessage = (value) => isString(value);
function getValidateError(result, ref, type = "validate") {
  if (isMessage(result) || Array.isArray(result) && result.every(isMessage) || isBoolean(result) && !result) {
    return {
      type,
      message: isMessage(result) ? result : "",
      ref
    };
  }
}
var getValueAndMessage = (validationData) => isObject$1(validationData) && !isRegex(validationData) ? validationData : {
  value: validationData,
  message: ""
};
var validateField = async (field, disabledFieldNames, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
  const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount } = field._f;
  const inputValue = get$1(formValues, name);
  if (!mount || disabledFieldNames.has(name)) {
    return {};
  }
  const inputRef = refs ? refs[0] : ref;
  const setCustomValidity = (message) => {
    if (shouldUseNativeValidation && inputRef.reportValidity) {
      inputRef.setCustomValidity(isBoolean(message) ? "" : message || "");
      inputRef.reportValidity();
    }
  };
  const error = {};
  const isRadio = isRadioInput(ref);
  const isCheckBox = isCheckBoxInput(ref);
  const isRadioOrCheckbox2 = isRadio || isCheckBox;
  const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === "" || inputValue === "" || Array.isArray(inputValue) && !inputValue.length;
  const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
  const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
    const message = exceedMax ? maxLengthMessage : minLengthMessage;
    error[name] = {
      type: exceedMax ? maxType : minType,
      message,
      ref,
      ...appendErrorsCurry(exceedMax ? maxType : minType, message)
    };
  };
  if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox2 && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
    const { value, message } = isMessage(required) ? { value: !!required, message: required } : getValueAndMessage(required);
    if (value) {
      error[name] = {
        type: INPUT_VALIDATION_RULES.required,
        message,
        ref: inputRef,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
    let exceedMax;
    let exceedMin;
    const maxOutput = getValueAndMessage(max);
    const minOutput = getValueAndMessage(min);
    if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
      const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
      if (!isNullOrUndefined(maxOutput.value)) {
        exceedMax = valueNumber > maxOutput.value;
      }
      if (!isNullOrUndefined(minOutput.value)) {
        exceedMin = valueNumber < minOutput.value;
      }
    } else {
      const valueDate = ref.valueAsDate || new Date(inputValue);
      const convertTimeToDate = (time) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + time);
      const isTime = ref.type == "time";
      const isWeek = ref.type == "week";
      if (isString(maxOutput.value) && inputValue) {
        exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
      }
      if (isString(minOutput.value) && inputValue) {
        exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
      }
    }
    if (exceedMax || exceedMin) {
      getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
    const maxLengthOutput = getValueAndMessage(maxLength);
    const minLengthOutput = getValueAndMessage(minLength);
    const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
    const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
    if (exceedMax || exceedMin) {
      getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if (pattern && !isEmpty && isString(inputValue)) {
    const { value: patternValue, message } = getValueAndMessage(pattern);
    if (isRegex(patternValue) && !inputValue.match(patternValue)) {
      error[name] = {
        type: INPUT_VALIDATION_RULES.pattern,
        message,
        ref,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (validate) {
    if (isFunction(validate)) {
      const result = await validate(inputValue, formValues);
      const validateError = getValidateError(result, inputRef);
      if (validateError) {
        error[name] = {
          ...validateError,
          ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
        };
        if (!validateAllFieldCriteria) {
          setCustomValidity(validateError.message);
          return error;
        }
      }
    } else if (isObject$1(validate)) {
      let validationResult = {};
      for (const key in validate) {
        if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
          break;
        }
        const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
        if (validateError) {
          validationResult = {
            ...validateError,
            ...appendErrorsCurry(key, validateError.message)
          };
          setCustomValidity(validateError.message);
          if (validateAllFieldCriteria) {
            error[name] = validationResult;
          }
        }
      }
      if (!isEmptyObject(validationResult)) {
        error[name] = {
          ref: inputRef,
          ...validationResult
        };
        if (!validateAllFieldCriteria) {
          return error;
        }
      }
    }
  }
  setCustomValidity(true);
  return error;
};
const defaultOptions = {
  mode: VALIDATION_MODE.onSubmit,
  reValidateMode: VALIDATION_MODE.onChange,
  shouldFocusError: true
};
function createFormControl(props = {}) {
  let _options = {
    ...defaultOptions,
    ...props
  };
  let _formState = {
    submitCount: 0,
    isDirty: false,
    isLoading: isFunction(_options.defaultValues),
    isValidating: false,
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: _options.errors || {},
    disabled: _options.disabled || false
  };
  const _fields = {};
  let _defaultValues = isObject$1(_options.defaultValues) || isObject$1(_options.values) ? cloneObject(_options.values || _options.defaultValues) || {} : {};
  let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
  let _state = {
    action: false,
    mount: false,
    watch: false
  };
  let _names = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  };
  let delayErrorCallback;
  let timer = 0;
  const _proxyFormState = {
    isDirty: false,
    dirtyFields: false,
    validatingFields: false,
    touchedFields: false,
    isValidating: false,
    isValid: false,
    errors: false
  };
  let _proxySubscribeFormState = {
    ..._proxyFormState
  };
  const _subjects = {
    array: createSubject(),
    state: createSubject()
  };
  const validationModeBeforeSubmit = getValidationModes(_options.mode);
  const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
  const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
  const debounce = (callback) => (wait) => {
    clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
  const _setValid = async (shouldUpdateValid) => {
    if (!_options.disabled && (_proxyFormState.isValid || _proxySubscribeFormState.isValid || shouldUpdateValid)) {
      const isValid = _options.resolver ? isEmptyObject((await _runSchema()).errors) : await executeBuiltInValidation(_fields, true);
      if (isValid !== _formState.isValid) {
        _subjects.state.next({
          isValid
        });
      }
    }
  };
  const _updateIsValidating = (names, isValidating) => {
    if (!_options.disabled && (_proxyFormState.isValidating || _proxyFormState.validatingFields || _proxySubscribeFormState.isValidating || _proxySubscribeFormState.validatingFields)) {
      (names || Array.from(_names.mount)).forEach((name) => {
        if (name) {
          isValidating ? set2(_formState.validatingFields, name, isValidating) : unset(_formState.validatingFields, name);
        }
      });
      _subjects.state.next({
        validatingFields: _formState.validatingFields,
        isValidating: !isEmptyObject(_formState.validatingFields)
      });
    }
  };
  const _setFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
    if (args && method && !_options.disabled) {
      _state.action = true;
      if (shouldUpdateFieldsAndState && Array.isArray(get$1(_fields, name))) {
        const fieldValues = method(get$1(_fields, name), args.argA, args.argB);
        shouldSetValues && set2(_fields, name, fieldValues);
      }
      if (shouldUpdateFieldsAndState && Array.isArray(get$1(_formState.errors, name))) {
        const errors = method(get$1(_formState.errors, name), args.argA, args.argB);
        shouldSetValues && set2(_formState.errors, name, errors);
        unsetEmptyArray(_formState.errors, name);
      }
      if ((_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && shouldUpdateFieldsAndState && Array.isArray(get$1(_formState.touchedFields, name))) {
        const touchedFields = method(get$1(_formState.touchedFields, name), args.argA, args.argB);
        shouldSetValues && set2(_formState.touchedFields, name, touchedFields);
      }
      if (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) {
        _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
      }
      _subjects.state.next({
        name,
        isDirty: _getDirty(name, values),
        dirtyFields: _formState.dirtyFields,
        errors: _formState.errors,
        isValid: _formState.isValid
      });
    } else {
      set2(_formValues, name, values);
    }
  };
  const updateErrors = (name, error) => {
    set2(_formState.errors, name, error);
    _subjects.state.next({
      errors: _formState.errors
    });
  };
  const _setErrors = (errors) => {
    _formState.errors = errors;
    _subjects.state.next({
      errors: _formState.errors,
      isValid: false
    });
  };
  const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
    const field = get$1(_fields, name);
    if (field) {
      const defaultValue = get$1(_formValues, name, isUndefined(value) ? get$1(_defaultValues, name) : value);
      isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set2(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
      _state.mount && _setValid();
    }
  };
  const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
    let shouldUpdateField = false;
    let isPreviousDirty = false;
    const output = {
      name
    };
    if (!_options.disabled) {
      if (!isBlurEvent || shouldDirty) {
        if (_proxyFormState.isDirty || _proxySubscribeFormState.isDirty) {
          isPreviousDirty = _formState.isDirty;
          _formState.isDirty = output.isDirty = _getDirty();
          shouldUpdateField = isPreviousDirty !== output.isDirty;
        }
        const isCurrentFieldPristine = deepEqual(get$1(_defaultValues, name), fieldValue);
        isPreviousDirty = !!get$1(_formState.dirtyFields, name);
        isCurrentFieldPristine ? unset(_formState.dirtyFields, name) : set2(_formState.dirtyFields, name, true);
        output.dirtyFields = _formState.dirtyFields;
        shouldUpdateField = shouldUpdateField || (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) && isPreviousDirty !== !isCurrentFieldPristine;
      }
      if (isBlurEvent) {
        const isPreviousFieldTouched = get$1(_formState.touchedFields, name);
        if (!isPreviousFieldTouched) {
          set2(_formState.touchedFields, name, isBlurEvent);
          output.touchedFields = _formState.touchedFields;
          shouldUpdateField = shouldUpdateField || (_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && isPreviousFieldTouched !== isBlurEvent;
        }
      }
      shouldUpdateField && shouldRender && _subjects.state.next(output);
    }
    return shouldUpdateField ? output : {};
  };
  const shouldRenderByError = (name, isValid, error, fieldState) => {
    const previousFieldError = get$1(_formState.errors, name);
    const shouldUpdateValid = (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isBoolean(isValid) && _formState.isValid !== isValid;
    if (_options.delayError && error) {
      delayErrorCallback = debounce(() => updateErrors(name, error));
      delayErrorCallback(_options.delayError);
    } else {
      clearTimeout(timer);
      delayErrorCallback = null;
      error ? set2(_formState.errors, name, error) : unset(_formState.errors, name);
    }
    if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
      const updatedFormState = {
        ...fieldState,
        ...shouldUpdateValid && isBoolean(isValid) ? { isValid } : {},
        errors: _formState.errors,
        name
      };
      _formState = {
        ..._formState,
        ...updatedFormState
      };
      _subjects.state.next(updatedFormState);
    }
  };
  const _runSchema = async (name) => {
    _updateIsValidating(name, true);
    const result = await _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
    _updateIsValidating(name);
    return result;
  };
  const executeSchemaAndUpdateState = async (names) => {
    const { errors } = await _runSchema(names);
    if (names) {
      for (const name of names) {
        const error = get$1(errors, name);
        error ? set2(_formState.errors, name, error) : unset(_formState.errors, name);
      }
    } else {
      _formState.errors = errors;
    }
    return errors;
  };
  const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
    valid: true
  }) => {
    for (const name in fields) {
      const field = fields[name];
      if (field) {
        const { _f, ...fieldValue } = field;
        if (_f) {
          const isFieldArrayRoot = _names.array.has(_f.name);
          const isPromiseFunction = field._f && hasPromiseValidation(field._f);
          if (isPromiseFunction && _proxyFormState.validatingFields) {
            _updateIsValidating([name], true);
          }
          const fieldError = await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
          if (isPromiseFunction && _proxyFormState.validatingFields) {
            _updateIsValidating([name]);
          }
          if (fieldError[_f.name]) {
            context.valid = false;
            if (shouldOnlyCheckValid) {
              break;
            }
          }
          !shouldOnlyCheckValid && (get$1(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set2(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
        }
        !isEmptyObject(fieldValue) && await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context);
      }
    }
    return context.valid;
  };
  const _removeUnmounted = () => {
    for (const name of _names.unMount) {
      const field = get$1(_fields, name);
      field && (field._f.refs ? field._f.refs.every((ref) => !live(ref)) : !live(field._f.ref)) && unregister(name);
    }
    _names.unMount = /* @__PURE__ */ new Set();
  };
  const _getDirty = (name, data) => !_options.disabled && (name && data && set2(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
  const _getWatch = (names, defaultValue, isGlobal) => generateWatchOutput(names, _names, {
    ..._state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? { [names]: defaultValue } : defaultValue
  }, isGlobal, defaultValue);
  const _getFieldArray = (name) => compact(get$1(_state.mount ? _formValues : _defaultValues, name, _options.shouldUnregister ? get$1(_defaultValues, name, []) : []));
  const setFieldValue = (name, value, options = {}) => {
    const field = get$1(_fields, name);
    let fieldValue = value;
    if (field) {
      const fieldReference = field._f;
      if (fieldReference) {
        !fieldReference.disabled && set2(_formValues, name, getFieldValueAs(value, fieldReference));
        fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value) ? "" : value;
        if (isMultipleSelect(fieldReference.ref)) {
          [...fieldReference.ref.options].forEach((optionRef) => optionRef.selected = fieldValue.includes(optionRef.value));
        } else if (fieldReference.refs) {
          if (isCheckBoxInput(fieldReference.ref)) {
            fieldReference.refs.length > 1 ? fieldReference.refs.forEach((checkboxRef) => (!checkboxRef.defaultChecked || !checkboxRef.disabled) && (checkboxRef.checked = Array.isArray(fieldValue) ? !!fieldValue.find((data) => data === checkboxRef.value) : fieldValue === checkboxRef.value)) : fieldReference.refs[0] && (fieldReference.refs[0].checked = !!fieldValue);
          } else {
            fieldReference.refs.forEach((radioRef) => radioRef.checked = radioRef.value === fieldValue);
          }
        } else if (isFileInput(fieldReference.ref)) {
          fieldReference.ref.value = "";
        } else {
          fieldReference.ref.value = fieldValue;
          if (!fieldReference.ref.type) {
            _subjects.state.next({
              name,
              values: cloneObject(_formValues)
            });
          }
        }
      }
    }
    (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
    options.shouldValidate && trigger(name);
  };
  const setValues = (name, value, options) => {
    for (const fieldKey in value) {
      const fieldValue = value[fieldKey];
      const fieldName = `${name}.${fieldKey}`;
      const field = get$1(_fields, fieldName);
      (_names.array.has(name) || isObject$1(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
    }
  };
  const setValue = (name, value, options = {}) => {
    const field = get$1(_fields, name);
    const isFieldArray = _names.array.has(name);
    const cloneValue = cloneObject(value);
    set2(_formValues, name, cloneValue);
    if (isFieldArray) {
      _subjects.array.next({
        name,
        values: cloneObject(_formValues)
      });
      if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields || _proxySubscribeFormState.isDirty || _proxySubscribeFormState.dirtyFields) && options.shouldDirty) {
        _subjects.state.next({
          name,
          dirtyFields: getDirtyFields(_defaultValues, _formValues),
          isDirty: _getDirty(name, cloneValue)
        });
      }
    } else {
      field && !field._f && !isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
    }
    isWatched(name, _names) && _subjects.state.next({ ..._formState });
    _subjects.state.next({
      name: _state.mount ? name : void 0,
      values: cloneObject(_formValues)
    });
  };
  const onChange = async (event) => {
    _state.mount = true;
    const target2 = event.target;
    let name = target2.name;
    let isFieldValueUpdated = true;
    const field = get$1(_fields, name);
    const _updateIsFieldValueUpdated = (fieldValue) => {
      isFieldValueUpdated = Number.isNaN(fieldValue) || isDateObject(fieldValue) && isNaN(fieldValue.getTime()) || deepEqual(fieldValue, get$1(_formValues, name, fieldValue));
    };
    if (field) {
      let error;
      let isValid;
      const fieldValue = target2.type ? getFieldValue(field._f) : getEventValue(event);
      const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
      const shouldSkipValidation = !hasValidation(field._f) && !_options.resolver && !get$1(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get$1(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
      const watched = isWatched(name, _names, isBlurEvent);
      set2(_formValues, name, fieldValue);
      if (isBlurEvent) {
        field._f.onBlur && field._f.onBlur(event);
        delayErrorCallback && delayErrorCallback(0);
      } else if (field._f.onChange) {
        field._f.onChange(event);
      }
      const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent);
      const shouldRender = !isEmptyObject(fieldState) || watched;
      !isBlurEvent && _subjects.state.next({
        name,
        type: event.type,
        values: cloneObject(_formValues)
      });
      if (shouldSkipValidation) {
        if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
          if (_options.mode === "onBlur") {
            if (isBlurEvent) {
              _setValid();
            }
          } else if (!isBlurEvent) {
            _setValid();
          }
        }
        return shouldRender && _subjects.state.next({ name, ...watched ? {} : fieldState });
      }
      !isBlurEvent && watched && _subjects.state.next({ ..._formState });
      if (_options.resolver) {
        const { errors } = await _runSchema([name]);
        _updateIsFieldValueUpdated(fieldValue);
        if (isFieldValueUpdated) {
          const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
          const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
          error = errorLookupResult.error;
          name = errorLookupResult.name;
          isValid = isEmptyObject(errors);
        }
      } else {
        _updateIsValidating([name], true);
        error = (await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
        _updateIsValidating([name]);
        _updateIsFieldValueUpdated(fieldValue);
        if (isFieldValueUpdated) {
          if (error) {
            isValid = false;
          } else if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
            isValid = await executeBuiltInValidation(_fields, true);
          }
        }
      }
      if (isFieldValueUpdated) {
        field._f.deps && trigger(field._f.deps);
        shouldRenderByError(name, isValid, error, fieldState);
      }
    }
  };
  const _focusInput = (ref, key) => {
    if (get$1(_formState.errors, key) && ref.focus) {
      ref.focus();
      return 1;
    }
    return;
  };
  const trigger = async (name, options = {}) => {
    let isValid;
    let validationResult;
    const fieldNames = convertToArrayPayload(name);
    if (_options.resolver) {
      const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
      isValid = isEmptyObject(errors);
      validationResult = name ? !fieldNames.some((name2) => get$1(errors, name2)) : isValid;
    } else if (name) {
      validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
        const field = get$1(_fields, fieldName);
        return await executeBuiltInValidation(field && field._f ? { [fieldName]: field } : field);
      }))).every(Boolean);
      !(!validationResult && !_formState.isValid) && _setValid();
    } else {
      validationResult = isValid = await executeBuiltInValidation(_fields);
    }
    _subjects.state.next({
      ...!isString(name) || (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isValid !== _formState.isValid ? {} : { name },
      ..._options.resolver || !name ? { isValid } : {},
      errors: _formState.errors
    });
    options.shouldFocus && !validationResult && iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
    return validationResult;
  };
  const getValues = (fieldNames) => {
    const values = {
      ..._state.mount ? _formValues : _defaultValues
    };
    return isUndefined(fieldNames) ? values : isString(fieldNames) ? get$1(values, fieldNames) : fieldNames.map((name) => get$1(values, name));
  };
  const getFieldState = (name, formState) => ({
    invalid: !!get$1((formState || _formState).errors, name),
    isDirty: !!get$1((formState || _formState).dirtyFields, name),
    error: get$1((formState || _formState).errors, name),
    isValidating: !!get$1(_formState.validatingFields, name),
    isTouched: !!get$1((formState || _formState).touchedFields, name)
  });
  const clearErrors = (name) => {
    name && convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName));
    _subjects.state.next({
      errors: name ? _formState.errors : {}
    });
  };
  const setError = (name, error, options) => {
    const ref = (get$1(_fields, name, { _f: {} })._f || {}).ref;
    const currentError = get$1(_formState.errors, name) || {};
    const { ref: currentRef, message, type, ...restOfErrorTree } = currentError;
    set2(_formState.errors, name, {
      ...restOfErrorTree,
      ...error,
      ref
    });
    _subjects.state.next({
      name,
      errors: _formState.errors,
      isValid: false
    });
    options && options.shouldFocus && ref && ref.focus && ref.focus();
  };
  const watch = (name, defaultValue) => isFunction(name) ? _subjects.state.subscribe({
    next: (payload) => name(_getWatch(void 0, defaultValue), payload)
  }) : _getWatch(name, defaultValue, true);
  const _subscribe = (props2) => _subjects.state.subscribe({
    next: (formState) => {
      if (shouldSubscribeByName(props2.name, formState.name, props2.exact) && shouldRenderFormState(formState, props2.formState || _proxyFormState, _setFormState, props2.reRenderRoot)) {
        props2.callback({
          values: { ..._formValues },
          ..._formState,
          ...formState
        });
      }
    }
  }).unsubscribe;
  const subscribe = (props2) => {
    _state.mount = true;
    _proxySubscribeFormState = {
      ..._proxySubscribeFormState,
      ...props2.formState
    };
    return _subscribe({
      ...props2,
      formState: _proxySubscribeFormState
    });
  };
  const unregister = (name, options = {}) => {
    for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
      _names.mount.delete(fieldName);
      _names.array.delete(fieldName);
      if (!options.keepValue) {
        unset(_fields, fieldName);
        unset(_formValues, fieldName);
      }
      !options.keepError && unset(_formState.errors, fieldName);
      !options.keepDirty && unset(_formState.dirtyFields, fieldName);
      !options.keepTouched && unset(_formState.touchedFields, fieldName);
      !options.keepIsValidating && unset(_formState.validatingFields, fieldName);
      !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
    }
    _subjects.state.next({
      values: cloneObject(_formValues)
    });
    _subjects.state.next({
      ..._formState,
      ...!options.keepDirty ? {} : { isDirty: _getDirty() }
    });
    !options.keepIsValid && _setValid();
  };
  const _setDisabledField = ({ disabled, name }) => {
    if (isBoolean(disabled) && _state.mount || !!disabled || _names.disabled.has(name)) {
      disabled ? _names.disabled.add(name) : _names.disabled.delete(name);
    }
  };
  const register = (name, options = {}) => {
    let field = get$1(_fields, name);
    const disabledIsDefined = isBoolean(options.disabled) || isBoolean(_options.disabled);
    set2(_fields, name, {
      ...field || {},
      _f: {
        ...field && field._f ? field._f : { ref: { name } },
        name,
        mount: true,
        ...options
      }
    });
    _names.mount.add(name);
    if (field) {
      _setDisabledField({
        disabled: isBoolean(options.disabled) ? options.disabled : _options.disabled,
        name
      });
    } else {
      updateValidAndValue(name, true, options.value);
    }
    return {
      ...disabledIsDefined ? { disabled: options.disabled || _options.disabled } : {},
      ..._options.progressive ? {
        required: !!options.required,
        min: getRuleValue(options.min),
        max: getRuleValue(options.max),
        minLength: getRuleValue(options.minLength),
        maxLength: getRuleValue(options.maxLength),
        pattern: getRuleValue(options.pattern)
      } : {},
      name,
      onChange,
      onBlur: onChange,
      ref: (ref) => {
        if (ref) {
          register(name, options);
          field = get$1(_fields, name);
          const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll("input,select,textarea")[0] || ref : ref : ref;
          const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
          const refs = field._f.refs || [];
          if (radioOrCheckbox ? refs.find((option) => option === fieldRef) : fieldRef === field._f.ref) {
            return;
          }
          set2(_fields, name, {
            _f: {
              ...field._f,
              ...radioOrCheckbox ? {
                refs: [
                  ...refs.filter(live),
                  fieldRef,
                  ...Array.isArray(get$1(_defaultValues, name)) ? [{}] : []
                ],
                ref: { type: fieldRef.type, name }
              } : { ref: fieldRef }
            }
          });
          updateValidAndValue(name, false, void 0, fieldRef);
        } else {
          field = get$1(_fields, name, {});
          if (field._f) {
            field._f.mount = false;
          }
          (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
        }
      }
    };
  };
  const _focusError = () => _options.shouldFocusError && iterateFieldsByAction(_fields, _focusInput, _names.mount);
  const _disableForm = (disabled) => {
    if (isBoolean(disabled)) {
      _subjects.state.next({ disabled });
      iterateFieldsByAction(_fields, (ref, name) => {
        const currentField = get$1(_fields, name);
        if (currentField) {
          ref.disabled = currentField._f.disabled || disabled;
          if (Array.isArray(currentField._f.refs)) {
            currentField._f.refs.forEach((inputRef) => {
              inputRef.disabled = currentField._f.disabled || disabled;
            });
          }
        }
      }, 0, false);
    }
  };
  const handleSubmit = (onValid, onInvalid) => async (e2) => {
    let onValidError = void 0;
    if (e2) {
      e2.preventDefault && e2.preventDefault();
      e2.persist && e2.persist();
    }
    let fieldValues = cloneObject(_formValues);
    _subjects.state.next({
      isSubmitting: true
    });
    if (_options.resolver) {
      const { errors, values } = await _runSchema();
      _formState.errors = errors;
      fieldValues = values;
    } else {
      await executeBuiltInValidation(_fields);
    }
    if (_names.disabled.size) {
      for (const name of _names.disabled) {
        set2(fieldValues, name, void 0);
      }
    }
    unset(_formState.errors, "root");
    if (isEmptyObject(_formState.errors)) {
      _subjects.state.next({
        errors: {}
      });
      try {
        await onValid(fieldValues, e2);
      } catch (error) {
        onValidError = error;
      }
    } else {
      if (onInvalid) {
        await onInvalid({ ..._formState.errors }, e2);
      }
      _focusError();
      setTimeout(_focusError);
    }
    _subjects.state.next({
      isSubmitted: true,
      isSubmitting: false,
      isSubmitSuccessful: isEmptyObject(_formState.errors) && !onValidError,
      submitCount: _formState.submitCount + 1,
      errors: _formState.errors
    });
    if (onValidError) {
      throw onValidError;
    }
  };
  const resetField = (name, options = {}) => {
    if (get$1(_fields, name)) {
      if (isUndefined(options.defaultValue)) {
        setValue(name, cloneObject(get$1(_defaultValues, name)));
      } else {
        setValue(name, options.defaultValue);
        set2(_defaultValues, name, cloneObject(options.defaultValue));
      }
      if (!options.keepTouched) {
        unset(_formState.touchedFields, name);
      }
      if (!options.keepDirty) {
        unset(_formState.dirtyFields, name);
        _formState.isDirty = options.defaultValue ? _getDirty(name, cloneObject(get$1(_defaultValues, name))) : _getDirty();
      }
      if (!options.keepError) {
        unset(_formState.errors, name);
        _proxyFormState.isValid && _setValid();
      }
      _subjects.state.next({ ..._formState });
    }
  };
  const _reset = (formValues, keepStateOptions = {}) => {
    const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
    const cloneUpdatedValues = cloneObject(updatedValues);
    const isEmptyResetValues = isEmptyObject(formValues);
    const values = isEmptyResetValues ? _defaultValues : cloneUpdatedValues;
    if (!keepStateOptions.keepDefaultValues) {
      _defaultValues = updatedValues;
    }
    if (!keepStateOptions.keepValues) {
      if (keepStateOptions.keepDirtyValues) {
        const fieldsToCheck = /* @__PURE__ */ new Set([
          ..._names.mount,
          ...Object.keys(getDirtyFields(_defaultValues, _formValues))
        ]);
        for (const fieldName of Array.from(fieldsToCheck)) {
          get$1(_formState.dirtyFields, fieldName) ? set2(values, fieldName, get$1(_formValues, fieldName)) : setValue(fieldName, get$1(values, fieldName));
        }
      } else {
        if (isWeb && isUndefined(formValues)) {
          for (const name of _names.mount) {
            const field = get$1(_fields, name);
            if (field && field._f) {
              const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
              if (isHTMLElement(fieldReference)) {
                const form = fieldReference.closest("form");
                if (form) {
                  form.reset();
                  break;
                }
              }
            }
          }
        }
        for (const fieldName of _names.mount) {
          setValue(fieldName, get$1(values, fieldName));
        }
      }
      _formValues = cloneObject(values);
      _subjects.array.next({
        values: { ...values }
      });
      _subjects.state.next({
        values: { ...values }
      });
    }
    _names = {
      mount: keepStateOptions.keepDirtyValues ? _names.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: false,
      focus: ""
    };
    _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid || !!keepStateOptions.keepDirtyValues;
    _state.watch = !!_options.shouldUnregister;
    _subjects.state.next({
      submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
      isDirty: isEmptyResetValues ? false : keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
      isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
      dirtyFields: isEmptyResetValues ? {} : keepStateOptions.keepDirtyValues ? keepStateOptions.keepDefaultValues && _formValues ? getDirtyFields(_defaultValues, _formValues) : _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : keepStateOptions.keepDirty ? _formState.dirtyFields : {},
      touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
      errors: keepStateOptions.keepErrors ? _formState.errors : {},
      isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful ? _formState.isSubmitSuccessful : false,
      isSubmitting: false
    });
  };
  const reset = (formValues, keepStateOptions) => _reset(isFunction(formValues) ? formValues(_formValues) : formValues, keepStateOptions);
  const setFocus = (name, options = {}) => {
    const field = get$1(_fields, name);
    const fieldReference = field && field._f;
    if (fieldReference) {
      const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
      if (fieldRef.focus) {
        fieldRef.focus();
        options.shouldSelect && isFunction(fieldRef.select) && fieldRef.select();
      }
    }
  };
  const _setFormState = (updatedFormState) => {
    _formState = {
      ..._formState,
      ...updatedFormState
    };
  };
  const _resetDefaultValues = () => isFunction(_options.defaultValues) && _options.defaultValues().then((values) => {
    reset(values, _options.resetOptions);
    _subjects.state.next({
      isLoading: false
    });
  });
  const methods = {
    control: {
      register,
      unregister,
      getFieldState,
      handleSubmit,
      setError,
      _subscribe,
      _runSchema,
      _getWatch,
      _getDirty,
      _setValid,
      _setFieldArray,
      _setDisabledField,
      _setErrors,
      _getFieldArray,
      _reset,
      _resetDefaultValues,
      _removeUnmounted,
      _disableForm,
      _subjects,
      _proxyFormState,
      get _fields() {
        return _fields;
      },
      get _formValues() {
        return _formValues;
      },
      get _state() {
        return _state;
      },
      set _state(value) {
        _state = value;
      },
      get _defaultValues() {
        return _defaultValues;
      },
      get _names() {
        return _names;
      },
      set _names(value) {
        _names = value;
      },
      get _formState() {
        return _formState;
      },
      get _options() {
        return _options;
      },
      set _options(value) {
        _options = {
          ..._options,
          ...value
        };
      }
    },
    subscribe,
    trigger,
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    resetField,
    clearErrors,
    unregister,
    setError,
    setFocus,
    getFieldState
  };
  return {
    ...methods,
    formControl: methods
  };
}
function useForm(props = {}) {
  const _formControl = Rn.useRef(void 0);
  const _values = Rn.useRef(void 0);
  const [formState, updateFormState] = Rn.useState({
    isDirty: false,
    isValidating: false,
    isLoading: isFunction(props.defaultValues),
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: props.errors || {},
    disabled: props.disabled || false,
    defaultValues: isFunction(props.defaultValues) ? void 0 : props.defaultValues
  });
  if (!_formControl.current) {
    _formControl.current = {
      ...props.formControl ? props.formControl : createFormControl(props),
      formState
    };
    if (props.formControl && props.defaultValues && !isFunction(props.defaultValues)) {
      props.formControl.reset(props.defaultValues, props.resetOptions);
    }
  }
  const control = _formControl.current.control;
  control._options = props;
  Rn.useLayoutEffect(() => control._subscribe({
    formState: control._proxyFormState,
    callback: () => updateFormState({ ...control._formState }),
    reRenderRoot: true
  }), [control]);
  Rn.useEffect(() => control._disableForm(props.disabled), [control, props.disabled]);
  Rn.useEffect(() => {
    if (control._proxyFormState.isDirty) {
      const isDirty = control._getDirty();
      if (isDirty !== formState.isDirty) {
        control._subjects.state.next({
          isDirty
        });
      }
    }
  }, [control, formState.isDirty]);
  Rn.useEffect(() => {
    if (props.values && !deepEqual(props.values, _values.current)) {
      control._reset(props.values, control._options.resetOptions);
      _values.current = props.values;
      updateFormState((state) => ({ ...state }));
    } else {
      control._resetDefaultValues();
    }
  }, [props.values, control]);
  Rn.useEffect(() => {
    if (props.errors && !isEmptyObject(props.errors)) {
      control._setErrors(props.errors);
    }
  }, [props.errors, control]);
  Rn.useEffect(() => {
    if (!control._state.mount) {
      control._setValid();
      control._state.mount = true;
    }
    if (control._state.watch) {
      control._state.watch = false;
      control._subjects.state.next({ ...control._formState });
    }
    control._removeUnmounted();
  });
  Rn.useEffect(() => {
    props.shouldUnregister && control._subjects.state.next({
      values: control._getWatch()
    });
  }, [props.shouldUnregister, control]);
  _formControl.current.formState = getProxyFormState(formState, control);
  return _formControl.current;
}
var showdown$1 = { exports: {} };
var showdown = showdown$1.exports;
var hasRequiredShowdown;
function requireShowdown() {
  if (hasRequiredShowdown) return showdown$1.exports;
  hasRequiredShowdown = 1;
  (function(module) {
    (function() {
      function getDefaultOpts(simple) {
        var defaultOptions2 = {
          omitExtraWLInCodeBlocks: {
            defaultValue: false,
            describe: "Omit the default extra whiteline added to code blocks",
            type: "boolean"
          },
          noHeaderId: {
            defaultValue: false,
            describe: "Turn on/off generated header id",
            type: "boolean"
          },
          prefixHeaderId: {
            defaultValue: false,
            describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
            type: "string"
          },
          rawPrefixHeaderId: {
            defaultValue: false,
            describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
            type: "boolean"
          },
          ghCompatibleHeaderId: {
            defaultValue: false,
            describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
            type: "boolean"
          },
          rawHeaderId: {
            defaultValue: false,
            describe: `Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,
            type: "boolean"
          },
          headerLevelStart: {
            defaultValue: false,
            describe: "The header blocks level start",
            type: "integer"
          },
          parseImgDimensions: {
            defaultValue: false,
            describe: "Turn on/off image dimension parsing",
            type: "boolean"
          },
          simplifiedAutoLink: {
            defaultValue: false,
            describe: "Turn on/off GFM autolink style",
            type: "boolean"
          },
          excludeTrailingPunctuationFromURLs: {
            defaultValue: false,
            describe: "Excludes trailing punctuation from links generated with autoLinking",
            type: "boolean"
          },
          literalMidWordUnderscores: {
            defaultValue: false,
            describe: "Parse midword underscores as literal underscores",
            type: "boolean"
          },
          literalMidWordAsterisks: {
            defaultValue: false,
            describe: "Parse midword asterisks as literal asterisks",
            type: "boolean"
          },
          strikethrough: {
            defaultValue: false,
            describe: "Turn on/off strikethrough support",
            type: "boolean"
          },
          tables: {
            defaultValue: false,
            describe: "Turn on/off tables support",
            type: "boolean"
          },
          tablesHeaderId: {
            defaultValue: false,
            describe: "Add an id to table headers",
            type: "boolean"
          },
          ghCodeBlocks: {
            defaultValue: true,
            describe: "Turn on/off GFM fenced code blocks support",
            type: "boolean"
          },
          tasklists: {
            defaultValue: false,
            describe: "Turn on/off GFM tasklist support",
            type: "boolean"
          },
          smoothLivePreview: {
            defaultValue: false,
            describe: "Prevents weird effects in live previews due to incomplete input",
            type: "boolean"
          },
          smartIndentationFix: {
            defaultValue: false,
            description: "Tries to smartly fix indentation in es6 strings",
            type: "boolean"
          },
          disableForced4SpacesIndentedSublists: {
            defaultValue: false,
            description: "Disables the requirement of indenting nested sublists by 4 spaces",
            type: "boolean"
          },
          simpleLineBreaks: {
            defaultValue: false,
            description: "Parses simple line breaks as <br> (GFM Style)",
            type: "boolean"
          },
          requireSpaceBeforeHeadingText: {
            defaultValue: false,
            description: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
            type: "boolean"
          },
          ghMentions: {
            defaultValue: false,
            description: "Enables github @mentions",
            type: "boolean"
          },
          ghMentionsLink: {
            defaultValue: "https://github.com/{u}",
            description: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
            type: "string"
          },
          encodeEmails: {
            defaultValue: true,
            description: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
            type: "boolean"
          },
          openLinksInNewWindow: {
            defaultValue: false,
            description: "Open all links in new windows",
            type: "boolean"
          },
          backslashEscapesHTMLTags: {
            defaultValue: false,
            description: "Support for HTML Tag escaping. ex: <div>foo</div>",
            type: "boolean"
          },
          emoji: {
            defaultValue: false,
            description: "Enable emoji support. Ex: `this is a :smile: emoji`",
            type: "boolean"
          },
          underline: {
            defaultValue: false,
            description: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
            type: "boolean"
          },
          completeHTMLDocument: {
            defaultValue: false,
            description: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
            type: "boolean"
          },
          metadata: {
            defaultValue: false,
            description: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
            type: "boolean"
          },
          splitAdjacentBlockquotes: {
            defaultValue: false,
            description: "Split adjacent blockquote blocks",
            type: "boolean"
          }
        };
        if (simple === false) {
          return JSON.parse(JSON.stringify(defaultOptions2));
        }
        var ret = {};
        for (var opt in defaultOptions2) {
          if (defaultOptions2.hasOwnProperty(opt)) {
            ret[opt] = defaultOptions2[opt].defaultValue;
          }
        }
        return ret;
      }
      function allOptionsOn() {
        var options = getDefaultOpts(true), ret = {};
        for (var opt in options) {
          if (options.hasOwnProperty(opt)) {
            ret[opt] = true;
          }
        }
        return ret;
      }
      var showdown2 = {}, parsers = {}, extensions = {}, globalOptions = getDefaultOpts(true), setFlavor = "vanilla", flavor = {
        github: {
          omitExtraWLInCodeBlocks: true,
          simplifiedAutoLink: true,
          excludeTrailingPunctuationFromURLs: true,
          literalMidWordUnderscores: true,
          strikethrough: true,
          tables: true,
          tablesHeaderId: true,
          ghCodeBlocks: true,
          tasklists: true,
          disableForced4SpacesIndentedSublists: true,
          simpleLineBreaks: true,
          requireSpaceBeforeHeadingText: true,
          ghCompatibleHeaderId: true,
          ghMentions: true,
          backslashEscapesHTMLTags: true,
          emoji: true,
          splitAdjacentBlockquotes: true
        },
        original: {
          noHeaderId: true,
          ghCodeBlocks: false
        },
        ghost: {
          omitExtraWLInCodeBlocks: true,
          parseImgDimensions: true,
          simplifiedAutoLink: true,
          excludeTrailingPunctuationFromURLs: true,
          literalMidWordUnderscores: true,
          strikethrough: true,
          tables: true,
          tablesHeaderId: true,
          ghCodeBlocks: true,
          tasklists: true,
          smoothLivePreview: true,
          simpleLineBreaks: true,
          requireSpaceBeforeHeadingText: true,
          ghMentions: false,
          encodeEmails: true
        },
        vanilla: getDefaultOpts(true),
        allOn: allOptionsOn()
      };
      showdown2.helper = {};
      showdown2.extensions = {};
      showdown2.setOption = function(key, value) {
        globalOptions[key] = value;
        return this;
      };
      showdown2.getOption = function(key) {
        return globalOptions[key];
      };
      showdown2.getOptions = function() {
        return globalOptions;
      };
      showdown2.resetOptions = function() {
        globalOptions = getDefaultOpts(true);
      };
      showdown2.setFlavor = function(name) {
        if (!flavor.hasOwnProperty(name)) {
          throw Error(name + " flavor was not found");
        }
        showdown2.resetOptions();
        var preset = flavor[name];
        setFlavor = name;
        for (var option in preset) {
          if (preset.hasOwnProperty(option)) {
            globalOptions[option] = preset[option];
          }
        }
      };
      showdown2.getFlavor = function() {
        return setFlavor;
      };
      showdown2.getFlavorOptions = function(name) {
        if (flavor.hasOwnProperty(name)) {
          return flavor[name];
        }
      };
      showdown2.getDefaultOptions = function(simple) {
        return getDefaultOpts(simple);
      };
      showdown2.subParser = function(name, func) {
        if (showdown2.helper.isString(name)) {
          if (typeof func !== "undefined") {
            parsers[name] = func;
          } else {
            if (parsers.hasOwnProperty(name)) {
              return parsers[name];
            } else {
              throw Error("SubParser named " + name + " not registered!");
            }
          }
        }
      };
      showdown2.extension = function(name, ext) {
        if (!showdown2.helper.isString(name)) {
          throw Error("Extension 'name' must be a string");
        }
        name = showdown2.helper.stdExtName(name);
        if (showdown2.helper.isUndefined(ext)) {
          if (!extensions.hasOwnProperty(name)) {
            throw Error("Extension named " + name + " is not registered!");
          }
          return extensions[name];
        } else {
          if (typeof ext === "function") {
            ext = ext();
          }
          if (!showdown2.helper.isArray(ext)) {
            ext = [ext];
          }
          var validExtension = validate(ext, name);
          if (validExtension.valid) {
            extensions[name] = ext;
          } else {
            throw Error(validExtension.error);
          }
        }
      };
      showdown2.getAllExtensions = function() {
        return extensions;
      };
      showdown2.removeExtension = function(name) {
        delete extensions[name];
      };
      showdown2.resetExtensions = function() {
        extensions = {};
      };
      function validate(extension, name) {
        var errMsg = name ? "Error in " + name + " extension->" : "Error in unnamed extension", ret = {
          valid: true,
          error: ""
        };
        if (!showdown2.helper.isArray(extension)) {
          extension = [extension];
        }
        for (var i2 = 0; i2 < extension.length; ++i2) {
          var baseMsg = errMsg + " sub-extension " + i2 + ": ", ext = extension[i2];
          if (typeof ext !== "object") {
            ret.valid = false;
            ret.error = baseMsg + "must be an object, but " + typeof ext + " given";
            return ret;
          }
          if (!showdown2.helper.isString(ext.type)) {
            ret.valid = false;
            ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + " given";
            return ret;
          }
          var type = ext.type = ext.type.toLowerCase();
          if (type === "language") {
            type = ext.type = "lang";
          }
          if (type === "html") {
            type = ext.type = "output";
          }
          if (type !== "lang" && type !== "output" && type !== "listener") {
            ret.valid = false;
            ret.error = baseMsg + "type " + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
            return ret;
          }
          if (type === "listener") {
            if (showdown2.helper.isUndefined(ext.listeners)) {
              ret.valid = false;
              ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
              return ret;
            }
          } else {
            if (showdown2.helper.isUndefined(ext.filter) && showdown2.helper.isUndefined(ext.regex)) {
              ret.valid = false;
              ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
              return ret;
            }
          }
          if (ext.listeners) {
            if (typeof ext.listeners !== "object") {
              ret.valid = false;
              ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + " given";
              return ret;
            }
            for (var ln2 in ext.listeners) {
              if (ext.listeners.hasOwnProperty(ln2)) {
                if (typeof ext.listeners[ln2] !== "function") {
                  ret.valid = false;
                  ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln2 + " must be a function but " + typeof ext.listeners[ln2] + " given";
                  return ret;
                }
              }
            }
          }
          if (ext.filter) {
            if (typeof ext.filter !== "function") {
              ret.valid = false;
              ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + " given";
              return ret;
            }
          } else if (ext.regex) {
            if (showdown2.helper.isString(ext.regex)) {
              ext.regex = new RegExp(ext.regex, "g");
            }
            if (!(ext.regex instanceof RegExp)) {
              ret.valid = false;
              ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + " given";
              return ret;
            }
            if (showdown2.helper.isUndefined(ext.replace)) {
              ret.valid = false;
              ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
              return ret;
            }
          }
        }
        return ret;
      }
      showdown2.validateExtension = function(ext) {
        var validateExtension = validate(ext, null);
        if (!validateExtension.valid) {
          console.warn(validateExtension.error);
          return false;
        }
        return true;
      };
      if (!showdown2.hasOwnProperty("helper")) {
        showdown2.helper = {};
      }
      showdown2.helper.isString = function(a2) {
        return typeof a2 === "string" || a2 instanceof String;
      };
      showdown2.helper.isFunction = function(a2) {
        var getType = {};
        return a2 && getType.toString.call(a2) === "[object Function]";
      };
      showdown2.helper.isArray = function(a2) {
        return Array.isArray(a2);
      };
      showdown2.helper.isUndefined = function(value) {
        return typeof value === "undefined";
      };
      showdown2.helper.forEach = function(obj, callback) {
        if (showdown2.helper.isUndefined(obj)) {
          throw new Error("obj param is required");
        }
        if (showdown2.helper.isUndefined(callback)) {
          throw new Error("callback param is required");
        }
        if (!showdown2.helper.isFunction(callback)) {
          throw new Error("callback param must be a function/closure");
        }
        if (typeof obj.forEach === "function") {
          obj.forEach(callback);
        } else if (showdown2.helper.isArray(obj)) {
          for (var i2 = 0; i2 < obj.length; i2++) {
            callback(obj[i2], i2, obj);
          }
        } else if (typeof obj === "object") {
          for (var prop2 in obj) {
            if (obj.hasOwnProperty(prop2)) {
              callback(obj[prop2], prop2, obj);
            }
          }
        } else {
          throw new Error("obj does not seem to be an array or an iterable object");
        }
      };
      showdown2.helper.stdExtName = function(s2) {
        return s2.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
      };
      function escapeCharactersCallback(wholeMatch, m1) {
        var charCodeToEscape = m1.charCodeAt(0);
        return "¨E" + charCodeToEscape + "E";
      }
      showdown2.helper.escapeCharactersCallback = escapeCharactersCallback;
      showdown2.helper.escapeCharacters = function(text, charsToEscape, afterBackslash) {
        var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";
        if (afterBackslash) {
          regexString = "\\\\" + regexString;
        }
        var regex = new RegExp(regexString, "g");
        text = text.replace(regex, escapeCharactersCallback);
        return text;
      };
      showdown2.helper.unescapeHTMLEntities = function(txt) {
        return txt.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      };
      var rgxFindMatchPos = function(str, left, right, flags) {
        var f2 = flags || "", g2 = f2.indexOf("g") > -1, x2 = new RegExp(left + "|" + right, "g" + f2.replace(/g/g, "")), l2 = new RegExp(left, f2.replace(/g/g, "")), pos = [], t2, s2, m2, start, end;
        do {
          t2 = 0;
          while (m2 = x2.exec(str)) {
            if (l2.test(m2[0])) {
              if (!t2++) {
                s2 = x2.lastIndex;
                start = s2 - m2[0].length;
              }
            } else if (t2) {
              if (!--t2) {
                end = m2.index + m2[0].length;
                var obj = {
                  left: { start, end: s2 },
                  match: { start: s2, end: m2.index },
                  right: { start: m2.index, end },
                  wholeMatch: { start, end }
                };
                pos.push(obj);
                if (!g2) {
                  return pos;
                }
              }
            }
          }
        } while (t2 && (x2.lastIndex = s2));
        return pos;
      };
      showdown2.helper.matchRecursiveRegExp = function(str, left, right, flags) {
        var matchPos = rgxFindMatchPos(str, left, right, flags), results = [];
        for (var i2 = 0; i2 < matchPos.length; ++i2) {
          results.push([
            str.slice(matchPos[i2].wholeMatch.start, matchPos[i2].wholeMatch.end),
            str.slice(matchPos[i2].match.start, matchPos[i2].match.end),
            str.slice(matchPos[i2].left.start, matchPos[i2].left.end),
            str.slice(matchPos[i2].right.start, matchPos[i2].right.end)
          ]);
        }
        return results;
      };
      showdown2.helper.replaceRecursiveRegExp = function(str, replacement, left, right, flags) {
        if (!showdown2.helper.isFunction(replacement)) {
          var repStr = replacement;
          replacement = function() {
            return repStr;
          };
        }
        var matchPos = rgxFindMatchPos(str, left, right, flags), finalStr = str, lng = matchPos.length;
        if (lng > 0) {
          var bits = [];
          if (matchPos[0].wholeMatch.start !== 0) {
            bits.push(str.slice(0, matchPos[0].wholeMatch.start));
          }
          for (var i2 = 0; i2 < lng; ++i2) {
            bits.push(
              replacement(
                str.slice(matchPos[i2].wholeMatch.start, matchPos[i2].wholeMatch.end),
                str.slice(matchPos[i2].match.start, matchPos[i2].match.end),
                str.slice(matchPos[i2].left.start, matchPos[i2].left.end),
                str.slice(matchPos[i2].right.start, matchPos[i2].right.end)
              )
            );
            if (i2 < lng - 1) {
              bits.push(str.slice(matchPos[i2].wholeMatch.end, matchPos[i2 + 1].wholeMatch.start));
            }
          }
          if (matchPos[lng - 1].wholeMatch.end < str.length) {
            bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
          }
          finalStr = bits.join("");
        }
        return finalStr;
      };
      showdown2.helper.regexIndexOf = function(str, regex, fromIndex) {
        if (!showdown2.helper.isString(str)) {
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        }
        if (regex instanceof RegExp === false) {
          throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        }
        var indexOf = str.substring(fromIndex || 0).search(regex);
        return indexOf >= 0 ? indexOf + (fromIndex || 0) : indexOf;
      };
      showdown2.helper.splitAtIndex = function(str, index) {
        if (!showdown2.helper.isString(str)) {
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        }
        return [str.substring(0, index), str.substring(index)];
      };
      showdown2.helper.encodeEmailAddress = function(mail) {
        var encode2 = [
          function(ch) {
            return "&#" + ch.charCodeAt(0) + ";";
          },
          function(ch) {
            return "&#x" + ch.charCodeAt(0).toString(16) + ";";
          },
          function(ch) {
            return ch;
          }
        ];
        mail = mail.replace(/./g, function(ch) {
          if (ch === "@") {
            ch = encode2[Math.floor(Math.random() * 2)](ch);
          } else {
            var r2 = Math.random();
            ch = r2 > 0.9 ? encode2[2](ch) : r2 > 0.45 ? encode2[1](ch) : encode2[0](ch);
          }
          return ch;
        });
        return mail;
      };
      showdown2.helper.padEnd = function padEnd(str, targetLength, padString) {
        targetLength = targetLength >> 0;
        padString = String(padString || " ");
        if (str.length > targetLength) {
          return String(str);
        } else {
          targetLength = targetLength - str.length;
          if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length);
          }
          return String(str) + padString.slice(0, targetLength);
        }
      };
      if (typeof console === "undefined") {
        console = {
          warn: function(msg) {
            alert(msg);
          },
          log: function(msg) {
            alert(msg);
          },
          error: function(msg) {
            throw msg;
          }
        };
      }
      showdown2.helper.regexes = {
        asteriskDashAndColon: /([*_:~])/g
      };
      showdown2.helper.emojis = {
        "+1": "👍",
        "-1": "👎",
        "100": "💯",
        "1234": "🔢",
        "1st_place_medal": "🥇",
        "2nd_place_medal": "🥈",
        "3rd_place_medal": "🥉",
        "8ball": "🎱",
        "a": "🅰️",
        "ab": "🆎",
        "abc": "🔤",
        "abcd": "🔡",
        "accept": "🉑",
        "aerial_tramway": "🚡",
        "airplane": "✈️",
        "alarm_clock": "⏰",
        "alembic": "⚗️",
        "alien": "👽",
        "ambulance": "🚑",
        "amphora": "🏺",
        "anchor": "⚓️",
        "angel": "👼",
        "anger": "💢",
        "angry": "😠",
        "anguished": "😧",
        "ant": "🐜",
        "apple": "🍎",
        "aquarius": "♒️",
        "aries": "♈️",
        "arrow_backward": "◀️",
        "arrow_double_down": "⏬",
        "arrow_double_up": "⏫",
        "arrow_down": "⬇️",
        "arrow_down_small": "🔽",
        "arrow_forward": "▶️",
        "arrow_heading_down": "⤵️",
        "arrow_heading_up": "⤴️",
        "arrow_left": "⬅️",
        "arrow_lower_left": "↙️",
        "arrow_lower_right": "↘️",
        "arrow_right": "➡️",
        "arrow_right_hook": "↪️",
        "arrow_up": "⬆️",
        "arrow_up_down": "↕️",
        "arrow_up_small": "🔼",
        "arrow_upper_left": "↖️",
        "arrow_upper_right": "↗️",
        "arrows_clockwise": "🔃",
        "arrows_counterclockwise": "🔄",
        "art": "🎨",
        "articulated_lorry": "🚛",
        "artificial_satellite": "🛰",
        "astonished": "😲",
        "athletic_shoe": "👟",
        "atm": "🏧",
        "atom_symbol": "⚛️",
        "avocado": "🥑",
        "b": "🅱️",
        "baby": "👶",
        "baby_bottle": "🍼",
        "baby_chick": "🐤",
        "baby_symbol": "🚼",
        "back": "🔙",
        "bacon": "🥓",
        "badminton": "🏸",
        "baggage_claim": "🛄",
        "baguette_bread": "🥖",
        "balance_scale": "⚖️",
        "balloon": "🎈",
        "ballot_box": "🗳",
        "ballot_box_with_check": "☑️",
        "bamboo": "🎍",
        "banana": "🍌",
        "bangbang": "‼️",
        "bank": "🏦",
        "bar_chart": "📊",
        "barber": "💈",
        "baseball": "⚾️",
        "basketball": "🏀",
        "basketball_man": "⛹️",
        "basketball_woman": "⛹️&zwj;♀️",
        "bat": "🦇",
        "bath": "🛀",
        "bathtub": "🛁",
        "battery": "🔋",
        "beach_umbrella": "🏖",
        "bear": "🐻",
        "bed": "🛏",
        "bee": "🐝",
        "beer": "🍺",
        "beers": "🍻",
        "beetle": "🐞",
        "beginner": "🔰",
        "bell": "🔔",
        "bellhop_bell": "🛎",
        "bento": "🍱",
        "biking_man": "🚴",
        "bike": "🚲",
        "biking_woman": "🚴&zwj;♀️",
        "bikini": "👙",
        "biohazard": "☣️",
        "bird": "🐦",
        "birthday": "🎂",
        "black_circle": "⚫️",
        "black_flag": "🏴",
        "black_heart": "🖤",
        "black_joker": "🃏",
        "black_large_square": "⬛️",
        "black_medium_small_square": "◾️",
        "black_medium_square": "◼️",
        "black_nib": "✒️",
        "black_small_square": "▪️",
        "black_square_button": "🔲",
        "blonde_man": "👱",
        "blonde_woman": "👱&zwj;♀️",
        "blossom": "🌼",
        "blowfish": "🐡",
        "blue_book": "📘",
        "blue_car": "🚙",
        "blue_heart": "💙",
        "blush": "😊",
        "boar": "🐗",
        "boat": "⛵️",
        "bomb": "💣",
        "book": "📖",
        "bookmark": "🔖",
        "bookmark_tabs": "📑",
        "books": "📚",
        "boom": "💥",
        "boot": "👢",
        "bouquet": "💐",
        "bowing_man": "🙇",
        "bow_and_arrow": "🏹",
        "bowing_woman": "🙇&zwj;♀️",
        "bowling": "🎳",
        "boxing_glove": "🥊",
        "boy": "👦",
        "bread": "🍞",
        "bride_with_veil": "👰",
        "bridge_at_night": "🌉",
        "briefcase": "💼",
        "broken_heart": "💔",
        "bug": "🐛",
        "building_construction": "🏗",
        "bulb": "💡",
        "bullettrain_front": "🚅",
        "bullettrain_side": "🚄",
        "burrito": "🌯",
        "bus": "🚌",
        "business_suit_levitating": "🕴",
        "busstop": "🚏",
        "bust_in_silhouette": "👤",
        "busts_in_silhouette": "👥",
        "butterfly": "🦋",
        "cactus": "🌵",
        "cake": "🍰",
        "calendar": "📆",
        "call_me_hand": "🤙",
        "calling": "📲",
        "camel": "🐫",
        "camera": "📷",
        "camera_flash": "📸",
        "camping": "🏕",
        "cancer": "♋️",
        "candle": "🕯",
        "candy": "🍬",
        "canoe": "🛶",
        "capital_abcd": "🔠",
        "capricorn": "♑️",
        "car": "🚗",
        "card_file_box": "🗃",
        "card_index": "📇",
        "card_index_dividers": "🗂",
        "carousel_horse": "🎠",
        "carrot": "🥕",
        "cat": "🐱",
        "cat2": "🐈",
        "cd": "💿",
        "chains": "⛓",
        "champagne": "🍾",
        "chart": "💹",
        "chart_with_downwards_trend": "📉",
        "chart_with_upwards_trend": "📈",
        "checkered_flag": "🏁",
        "cheese": "🧀",
        "cherries": "🍒",
        "cherry_blossom": "🌸",
        "chestnut": "🌰",
        "chicken": "🐔",
        "children_crossing": "🚸",
        "chipmunk": "🐿",
        "chocolate_bar": "🍫",
        "christmas_tree": "🎄",
        "church": "⛪️",
        "cinema": "🎦",
        "circus_tent": "🎪",
        "city_sunrise": "🌇",
        "city_sunset": "🌆",
        "cityscape": "🏙",
        "cl": "🆑",
        "clamp": "🗜",
        "clap": "👏",
        "clapper": "🎬",
        "classical_building": "🏛",
        "clinking_glasses": "🥂",
        "clipboard": "📋",
        "clock1": "🕐",
        "clock10": "🕙",
        "clock1030": "🕥",
        "clock11": "🕚",
        "clock1130": "🕦",
        "clock12": "🕛",
        "clock1230": "🕧",
        "clock130": "🕜",
        "clock2": "🕑",
        "clock230": "🕝",
        "clock3": "🕒",
        "clock330": "🕞",
        "clock4": "🕓",
        "clock430": "🕟",
        "clock5": "🕔",
        "clock530": "🕠",
        "clock6": "🕕",
        "clock630": "🕡",
        "clock7": "🕖",
        "clock730": "🕢",
        "clock8": "🕗",
        "clock830": "🕣",
        "clock9": "🕘",
        "clock930": "🕤",
        "closed_book": "📕",
        "closed_lock_with_key": "🔐",
        "closed_umbrella": "🌂",
        "cloud": "☁️",
        "cloud_with_lightning": "🌩",
        "cloud_with_lightning_and_rain": "⛈",
        "cloud_with_rain": "🌧",
        "cloud_with_snow": "🌨",
        "clown_face": "🤡",
        "clubs": "♣️",
        "cocktail": "🍸",
        "coffee": "☕️",
        "coffin": "⚰️",
        "cold_sweat": "😰",
        "comet": "☄️",
        "computer": "💻",
        "computer_mouse": "🖱",
        "confetti_ball": "🎊",
        "confounded": "😖",
        "confused": "😕",
        "congratulations": "㊗️",
        "construction": "🚧",
        "construction_worker_man": "👷",
        "construction_worker_woman": "👷&zwj;♀️",
        "control_knobs": "🎛",
        "convenience_store": "🏪",
        "cookie": "🍪",
        "cool": "🆒",
        "policeman": "👮",
        "copyright": "©️",
        "corn": "🌽",
        "couch_and_lamp": "🛋",
        "couple": "👫",
        "couple_with_heart_woman_man": "💑",
        "couple_with_heart_man_man": "👨&zwj;❤️&zwj;👨",
        "couple_with_heart_woman_woman": "👩&zwj;❤️&zwj;👩",
        "couplekiss_man_man": "👨&zwj;❤️&zwj;💋&zwj;👨",
        "couplekiss_man_woman": "💏",
        "couplekiss_woman_woman": "👩&zwj;❤️&zwj;💋&zwj;👩",
        "cow": "🐮",
        "cow2": "🐄",
        "cowboy_hat_face": "🤠",
        "crab": "🦀",
        "crayon": "🖍",
        "credit_card": "💳",
        "crescent_moon": "🌙",
        "cricket": "🏏",
        "crocodile": "🐊",
        "croissant": "🥐",
        "crossed_fingers": "🤞",
        "crossed_flags": "🎌",
        "crossed_swords": "⚔️",
        "crown": "👑",
        "cry": "😢",
        "crying_cat_face": "😿",
        "crystal_ball": "🔮",
        "cucumber": "🥒",
        "cupid": "💘",
        "curly_loop": "➰",
        "currency_exchange": "💱",
        "curry": "🍛",
        "custard": "🍮",
        "customs": "🛃",
        "cyclone": "🌀",
        "dagger": "🗡",
        "dancer": "💃",
        "dancing_women": "👯",
        "dancing_men": "👯&zwj;♂️",
        "dango": "🍡",
        "dark_sunglasses": "🕶",
        "dart": "🎯",
        "dash": "💨",
        "date": "📅",
        "deciduous_tree": "🌳",
        "deer": "🦌",
        "department_store": "🏬",
        "derelict_house": "🏚",
        "desert": "🏜",
        "desert_island": "🏝",
        "desktop_computer": "🖥",
        "male_detective": "🕵️",
        "diamond_shape_with_a_dot_inside": "💠",
        "diamonds": "♦️",
        "disappointed": "😞",
        "disappointed_relieved": "😥",
        "dizzy": "💫",
        "dizzy_face": "😵",
        "do_not_litter": "🚯",
        "dog": "🐶",
        "dog2": "🐕",
        "dollar": "💵",
        "dolls": "🎎",
        "dolphin": "🐬",
        "door": "🚪",
        "doughnut": "🍩",
        "dove": "🕊",
        "dragon": "🐉",
        "dragon_face": "🐲",
        "dress": "👗",
        "dromedary_camel": "🐪",
        "drooling_face": "🤤",
        "droplet": "💧",
        "drum": "🥁",
        "duck": "🦆",
        "dvd": "📀",
        "e-mail": "📧",
        "eagle": "🦅",
        "ear": "👂",
        "ear_of_rice": "🌾",
        "earth_africa": "🌍",
        "earth_americas": "🌎",
        "earth_asia": "🌏",
        "egg": "🥚",
        "eggplant": "🍆",
        "eight_pointed_black_star": "✴️",
        "eight_spoked_asterisk": "✳️",
        "electric_plug": "🔌",
        "elephant": "🐘",
        "email": "✉️",
        "end": "🔚",
        "envelope_with_arrow": "📩",
        "euro": "💶",
        "european_castle": "🏰",
        "european_post_office": "🏤",
        "evergreen_tree": "🌲",
        "exclamation": "❗️",
        "expressionless": "😑",
        "eye": "👁",
        "eye_speech_bubble": "👁&zwj;🗨",
        "eyeglasses": "👓",
        "eyes": "👀",
        "face_with_head_bandage": "🤕",
        "face_with_thermometer": "🤒",
        "fist_oncoming": "👊",
        "factory": "🏭",
        "fallen_leaf": "🍂",
        "family_man_woman_boy": "👪",
        "family_man_boy": "👨&zwj;👦",
        "family_man_boy_boy": "👨&zwj;👦&zwj;👦",
        "family_man_girl": "👨&zwj;👧",
        "family_man_girl_boy": "👨&zwj;👧&zwj;👦",
        "family_man_girl_girl": "👨&zwj;👧&zwj;👧",
        "family_man_man_boy": "👨&zwj;👨&zwj;👦",
        "family_man_man_boy_boy": "👨&zwj;👨&zwj;👦&zwj;👦",
        "family_man_man_girl": "👨&zwj;👨&zwj;👧",
        "family_man_man_girl_boy": "👨&zwj;👨&zwj;👧&zwj;👦",
        "family_man_man_girl_girl": "👨&zwj;👨&zwj;👧&zwj;👧",
        "family_man_woman_boy_boy": "👨&zwj;👩&zwj;👦&zwj;👦",
        "family_man_woman_girl": "👨&zwj;👩&zwj;👧",
        "family_man_woman_girl_boy": "👨&zwj;👩&zwj;👧&zwj;👦",
        "family_man_woman_girl_girl": "👨&zwj;👩&zwj;👧&zwj;👧",
        "family_woman_boy": "👩&zwj;👦",
        "family_woman_boy_boy": "👩&zwj;👦&zwj;👦",
        "family_woman_girl": "👩&zwj;👧",
        "family_woman_girl_boy": "👩&zwj;👧&zwj;👦",
        "family_woman_girl_girl": "👩&zwj;👧&zwj;👧",
        "family_woman_woman_boy": "👩&zwj;👩&zwj;👦",
        "family_woman_woman_boy_boy": "👩&zwj;👩&zwj;👦&zwj;👦",
        "family_woman_woman_girl": "👩&zwj;👩&zwj;👧",
        "family_woman_woman_girl_boy": "👩&zwj;👩&zwj;👧&zwj;👦",
        "family_woman_woman_girl_girl": "👩&zwj;👩&zwj;👧&zwj;👧",
        "fast_forward": "⏩",
        "fax": "📠",
        "fearful": "😨",
        "feet": "🐾",
        "female_detective": "🕵️&zwj;♀️",
        "ferris_wheel": "🎡",
        "ferry": "⛴",
        "field_hockey": "🏑",
        "file_cabinet": "🗄",
        "file_folder": "📁",
        "film_projector": "📽",
        "film_strip": "🎞",
        "fire": "🔥",
        "fire_engine": "🚒",
        "fireworks": "🎆",
        "first_quarter_moon": "🌓",
        "first_quarter_moon_with_face": "🌛",
        "fish": "🐟",
        "fish_cake": "🍥",
        "fishing_pole_and_fish": "🎣",
        "fist_raised": "✊",
        "fist_left": "🤛",
        "fist_right": "🤜",
        "flags": "🎏",
        "flashlight": "🔦",
        "fleur_de_lis": "⚜️",
        "flight_arrival": "🛬",
        "flight_departure": "🛫",
        "floppy_disk": "💾",
        "flower_playing_cards": "🎴",
        "flushed": "😳",
        "fog": "🌫",
        "foggy": "🌁",
        "football": "🏈",
        "footprints": "👣",
        "fork_and_knife": "🍴",
        "fountain": "⛲️",
        "fountain_pen": "🖋",
        "four_leaf_clover": "🍀",
        "fox_face": "🦊",
        "framed_picture": "🖼",
        "free": "🆓",
        "fried_egg": "🍳",
        "fried_shrimp": "🍤",
        "fries": "🍟",
        "frog": "🐸",
        "frowning": "😦",
        "frowning_face": "☹️",
        "frowning_man": "🙍&zwj;♂️",
        "frowning_woman": "🙍",
        "middle_finger": "🖕",
        "fuelpump": "⛽️",
        "full_moon": "🌕",
        "full_moon_with_face": "🌝",
        "funeral_urn": "⚱️",
        "game_die": "🎲",
        "gear": "⚙️",
        "gem": "💎",
        "gemini": "♊️",
        "ghost": "👻",
        "gift": "🎁",
        "gift_heart": "💝",
        "girl": "👧",
        "globe_with_meridians": "🌐",
        "goal_net": "🥅",
        "goat": "🐐",
        "golf": "⛳️",
        "golfing_man": "🏌️",
        "golfing_woman": "🏌️&zwj;♀️",
        "gorilla": "🦍",
        "grapes": "🍇",
        "green_apple": "🍏",
        "green_book": "📗",
        "green_heart": "💚",
        "green_salad": "🥗",
        "grey_exclamation": "❕",
        "grey_question": "❔",
        "grimacing": "😬",
        "grin": "😁",
        "grinning": "😀",
        "guardsman": "💂",
        "guardswoman": "💂&zwj;♀️",
        "guitar": "🎸",
        "gun": "🔫",
        "haircut_woman": "💇",
        "haircut_man": "💇&zwj;♂️",
        "hamburger": "🍔",
        "hammer": "🔨",
        "hammer_and_pick": "⚒",
        "hammer_and_wrench": "🛠",
        "hamster": "🐹",
        "hand": "✋",
        "handbag": "👜",
        "handshake": "🤝",
        "hankey": "💩",
        "hatched_chick": "🐥",
        "hatching_chick": "🐣",
        "headphones": "🎧",
        "hear_no_evil": "🙉",
        "heart": "❤️",
        "heart_decoration": "💟",
        "heart_eyes": "😍",
        "heart_eyes_cat": "😻",
        "heartbeat": "💓",
        "heartpulse": "💗",
        "hearts": "♥️",
        "heavy_check_mark": "✔️",
        "heavy_division_sign": "➗",
        "heavy_dollar_sign": "💲",
        "heavy_heart_exclamation": "❣️",
        "heavy_minus_sign": "➖",
        "heavy_multiplication_x": "✖️",
        "heavy_plus_sign": "➕",
        "helicopter": "🚁",
        "herb": "🌿",
        "hibiscus": "🌺",
        "high_brightness": "🔆",
        "high_heel": "👠",
        "hocho": "🔪",
        "hole": "🕳",
        "honey_pot": "🍯",
        "horse": "🐴",
        "horse_racing": "🏇",
        "hospital": "🏥",
        "hot_pepper": "🌶",
        "hotdog": "🌭",
        "hotel": "🏨",
        "hotsprings": "♨️",
        "hourglass": "⌛️",
        "hourglass_flowing_sand": "⏳",
        "house": "🏠",
        "house_with_garden": "🏡",
        "houses": "🏘",
        "hugs": "🤗",
        "hushed": "😯",
        "ice_cream": "🍨",
        "ice_hockey": "🏒",
        "ice_skate": "⛸",
        "icecream": "🍦",
        "id": "🆔",
        "ideograph_advantage": "🉐",
        "imp": "👿",
        "inbox_tray": "📥",
        "incoming_envelope": "📨",
        "tipping_hand_woman": "💁",
        "information_source": "ℹ️",
        "innocent": "😇",
        "interrobang": "⁉️",
        "iphone": "📱",
        "izakaya_lantern": "🏮",
        "jack_o_lantern": "🎃",
        "japan": "🗾",
        "japanese_castle": "🏯",
        "japanese_goblin": "👺",
        "japanese_ogre": "👹",
        "jeans": "👖",
        "joy": "😂",
        "joy_cat": "😹",
        "joystick": "🕹",
        "kaaba": "🕋",
        "key": "🔑",
        "keyboard": "⌨️",
        "keycap_ten": "🔟",
        "kick_scooter": "🛴",
        "kimono": "👘",
        "kiss": "💋",
        "kissing": "😗",
        "kissing_cat": "😽",
        "kissing_closed_eyes": "😚",
        "kissing_heart": "😘",
        "kissing_smiling_eyes": "😙",
        "kiwi_fruit": "🥝",
        "koala": "🐨",
        "koko": "🈁",
        "label": "🏷",
        "large_blue_circle": "🔵",
        "large_blue_diamond": "🔷",
        "large_orange_diamond": "🔶",
        "last_quarter_moon": "🌗",
        "last_quarter_moon_with_face": "🌜",
        "latin_cross": "✝️",
        "laughing": "😆",
        "leaves": "🍃",
        "ledger": "📒",
        "left_luggage": "🛅",
        "left_right_arrow": "↔️",
        "leftwards_arrow_with_hook": "↩️",
        "lemon": "🍋",
        "leo": "♌️",
        "leopard": "🐆",
        "level_slider": "🎚",
        "libra": "♎️",
        "light_rail": "🚈",
        "link": "🔗",
        "lion": "🦁",
        "lips": "👄",
        "lipstick": "💄",
        "lizard": "🦎",
        "lock": "🔒",
        "lock_with_ink_pen": "🔏",
        "lollipop": "🍭",
        "loop": "➿",
        "loud_sound": "🔊",
        "loudspeaker": "📢",
        "love_hotel": "🏩",
        "love_letter": "💌",
        "low_brightness": "🔅",
        "lying_face": "🤥",
        "m": "Ⓜ️",
        "mag": "🔍",
        "mag_right": "🔎",
        "mahjong": "🀄️",
        "mailbox": "📫",
        "mailbox_closed": "📪",
        "mailbox_with_mail": "📬",
        "mailbox_with_no_mail": "📭",
        "man": "👨",
        "man_artist": "👨&zwj;🎨",
        "man_astronaut": "👨&zwj;🚀",
        "man_cartwheeling": "🤸&zwj;♂️",
        "man_cook": "👨&zwj;🍳",
        "man_dancing": "🕺",
        "man_facepalming": "🤦&zwj;♂️",
        "man_factory_worker": "👨&zwj;🏭",
        "man_farmer": "👨&zwj;🌾",
        "man_firefighter": "👨&zwj;🚒",
        "man_health_worker": "👨&zwj;⚕️",
        "man_in_tuxedo": "🤵",
        "man_judge": "👨&zwj;⚖️",
        "man_juggling": "🤹&zwj;♂️",
        "man_mechanic": "👨&zwj;🔧",
        "man_office_worker": "👨&zwj;💼",
        "man_pilot": "👨&zwj;✈️",
        "man_playing_handball": "🤾&zwj;♂️",
        "man_playing_water_polo": "🤽&zwj;♂️",
        "man_scientist": "👨&zwj;🔬",
        "man_shrugging": "🤷&zwj;♂️",
        "man_singer": "👨&zwj;🎤",
        "man_student": "👨&zwj;🎓",
        "man_teacher": "👨&zwj;🏫",
        "man_technologist": "👨&zwj;💻",
        "man_with_gua_pi_mao": "👲",
        "man_with_turban": "👳",
        "tangerine": "🍊",
        "mans_shoe": "👞",
        "mantelpiece_clock": "🕰",
        "maple_leaf": "🍁",
        "martial_arts_uniform": "🥋",
        "mask": "😷",
        "massage_woman": "💆",
        "massage_man": "💆&zwj;♂️",
        "meat_on_bone": "🍖",
        "medal_military": "🎖",
        "medal_sports": "🏅",
        "mega": "📣",
        "melon": "🍈",
        "memo": "📝",
        "men_wrestling": "🤼&zwj;♂️",
        "menorah": "🕎",
        "mens": "🚹",
        "metal": "🤘",
        "metro": "🚇",
        "microphone": "🎤",
        "microscope": "🔬",
        "milk_glass": "🥛",
        "milky_way": "🌌",
        "minibus": "🚐",
        "minidisc": "💽",
        "mobile_phone_off": "📴",
        "money_mouth_face": "🤑",
        "money_with_wings": "💸",
        "moneybag": "💰",
        "monkey": "🐒",
        "monkey_face": "🐵",
        "monorail": "🚝",
        "moon": "🌔",
        "mortar_board": "🎓",
        "mosque": "🕌",
        "motor_boat": "🛥",
        "motor_scooter": "🛵",
        "motorcycle": "🏍",
        "motorway": "🛣",
        "mount_fuji": "🗻",
        "mountain": "⛰",
        "mountain_biking_man": "🚵",
        "mountain_biking_woman": "🚵&zwj;♀️",
        "mountain_cableway": "🚠",
        "mountain_railway": "🚞",
        "mountain_snow": "🏔",
        "mouse": "🐭",
        "mouse2": "🐁",
        "movie_camera": "🎥",
        "moyai": "🗿",
        "mrs_claus": "🤶",
        "muscle": "💪",
        "mushroom": "🍄",
        "musical_keyboard": "🎹",
        "musical_note": "🎵",
        "musical_score": "🎼",
        "mute": "🔇",
        "nail_care": "💅",
        "name_badge": "📛",
        "national_park": "🏞",
        "nauseated_face": "🤢",
        "necktie": "👔",
        "negative_squared_cross_mark": "❎",
        "nerd_face": "🤓",
        "neutral_face": "😐",
        "new": "🆕",
        "new_moon": "🌑",
        "new_moon_with_face": "🌚",
        "newspaper": "📰",
        "newspaper_roll": "🗞",
        "next_track_button": "⏭",
        "ng": "🆖",
        "no_good_man": "🙅&zwj;♂️",
        "no_good_woman": "🙅",
        "night_with_stars": "🌃",
        "no_bell": "🔕",
        "no_bicycles": "🚳",
        "no_entry": "⛔️",
        "no_entry_sign": "🚫",
        "no_mobile_phones": "📵",
        "no_mouth": "😶",
        "no_pedestrians": "🚷",
        "no_smoking": "🚭",
        "non-potable_water": "🚱",
        "nose": "👃",
        "notebook": "📓",
        "notebook_with_decorative_cover": "📔",
        "notes": "🎶",
        "nut_and_bolt": "🔩",
        "o": "⭕️",
        "o2": "🅾️",
        "ocean": "🌊",
        "octopus": "🐙",
        "oden": "🍢",
        "office": "🏢",
        "oil_drum": "🛢",
        "ok": "🆗",
        "ok_hand": "👌",
        "ok_man": "🙆&zwj;♂️",
        "ok_woman": "🙆",
        "old_key": "🗝",
        "older_man": "👴",
        "older_woman": "👵",
        "om": "🕉",
        "on": "🔛",
        "oncoming_automobile": "🚘",
        "oncoming_bus": "🚍",
        "oncoming_police_car": "🚔",
        "oncoming_taxi": "🚖",
        "open_file_folder": "📂",
        "open_hands": "👐",
        "open_mouth": "😮",
        "open_umbrella": "☂️",
        "ophiuchus": "⛎",
        "orange_book": "📙",
        "orthodox_cross": "☦️",
        "outbox_tray": "📤",
        "owl": "🦉",
        "ox": "🐂",
        "package": "📦",
        "page_facing_up": "📄",
        "page_with_curl": "📃",
        "pager": "📟",
        "paintbrush": "🖌",
        "palm_tree": "🌴",
        "pancakes": "🥞",
        "panda_face": "🐼",
        "paperclip": "📎",
        "paperclips": "🖇",
        "parasol_on_ground": "⛱",
        "parking": "🅿️",
        "part_alternation_mark": "〽️",
        "partly_sunny": "⛅️",
        "passenger_ship": "🛳",
        "passport_control": "🛂",
        "pause_button": "⏸",
        "peace_symbol": "☮️",
        "peach": "🍑",
        "peanuts": "🥜",
        "pear": "🍐",
        "pen": "🖊",
        "pencil2": "✏️",
        "penguin": "🐧",
        "pensive": "😔",
        "performing_arts": "🎭",
        "persevere": "😣",
        "person_fencing": "🤺",
        "pouting_woman": "🙎",
        "phone": "☎️",
        "pick": "⛏",
        "pig": "🐷",
        "pig2": "🐖",
        "pig_nose": "🐽",
        "pill": "💊",
        "pineapple": "🍍",
        "ping_pong": "🏓",
        "pisces": "♓️",
        "pizza": "🍕",
        "place_of_worship": "🛐",
        "plate_with_cutlery": "🍽",
        "play_or_pause_button": "⏯",
        "point_down": "👇",
        "point_left": "👈",
        "point_right": "👉",
        "point_up": "☝️",
        "point_up_2": "👆",
        "police_car": "🚓",
        "policewoman": "👮&zwj;♀️",
        "poodle": "🐩",
        "popcorn": "🍿",
        "post_office": "🏣",
        "postal_horn": "📯",
        "postbox": "📮",
        "potable_water": "🚰",
        "potato": "🥔",
        "pouch": "👝",
        "poultry_leg": "🍗",
        "pound": "💷",
        "rage": "😡",
        "pouting_cat": "😾",
        "pouting_man": "🙎&zwj;♂️",
        "pray": "🙏",
        "prayer_beads": "📿",
        "pregnant_woman": "🤰",
        "previous_track_button": "⏮",
        "prince": "🤴",
        "princess": "👸",
        "printer": "🖨",
        "purple_heart": "💜",
        "purse": "👛",
        "pushpin": "📌",
        "put_litter_in_its_place": "🚮",
        "question": "❓",
        "rabbit": "🐰",
        "rabbit2": "🐇",
        "racehorse": "🐎",
        "racing_car": "🏎",
        "radio": "📻",
        "radio_button": "🔘",
        "radioactive": "☢️",
        "railway_car": "🚃",
        "railway_track": "🛤",
        "rainbow": "🌈",
        "rainbow_flag": "🏳️&zwj;🌈",
        "raised_back_of_hand": "🤚",
        "raised_hand_with_fingers_splayed": "🖐",
        "raised_hands": "🙌",
        "raising_hand_woman": "🙋",
        "raising_hand_man": "🙋&zwj;♂️",
        "ram": "🐏",
        "ramen": "🍜",
        "rat": "🐀",
        "record_button": "⏺",
        "recycle": "♻️",
        "red_circle": "🔴",
        "registered": "®️",
        "relaxed": "☺️",
        "relieved": "😌",
        "reminder_ribbon": "🎗",
        "repeat": "🔁",
        "repeat_one": "🔂",
        "rescue_worker_helmet": "⛑",
        "restroom": "🚻",
        "revolving_hearts": "💞",
        "rewind": "⏪",
        "rhinoceros": "🦏",
        "ribbon": "🎀",
        "rice": "🍚",
        "rice_ball": "🍙",
        "rice_cracker": "🍘",
        "rice_scene": "🎑",
        "right_anger_bubble": "🗯",
        "ring": "💍",
        "robot": "🤖",
        "rocket": "🚀",
        "rofl": "🤣",
        "roll_eyes": "🙄",
        "roller_coaster": "🎢",
        "rooster": "🐓",
        "rose": "🌹",
        "rosette": "🏵",
        "rotating_light": "🚨",
        "round_pushpin": "📍",
        "rowing_man": "🚣",
        "rowing_woman": "🚣&zwj;♀️",
        "rugby_football": "🏉",
        "running_man": "🏃",
        "running_shirt_with_sash": "🎽",
        "running_woman": "🏃&zwj;♀️",
        "sa": "🈂️",
        "sagittarius": "♐️",
        "sake": "🍶",
        "sandal": "👡",
        "santa": "🎅",
        "satellite": "📡",
        "saxophone": "🎷",
        "school": "🏫",
        "school_satchel": "🎒",
        "scissors": "✂️",
        "scorpion": "🦂",
        "scorpius": "♏️",
        "scream": "😱",
        "scream_cat": "🙀",
        "scroll": "📜",
        "seat": "💺",
        "secret": "㊙️",
        "see_no_evil": "🙈",
        "seedling": "🌱",
        "selfie": "🤳",
        "shallow_pan_of_food": "🥘",
        "shamrock": "☘️",
        "shark": "🦈",
        "shaved_ice": "🍧",
        "sheep": "🐑",
        "shell": "🐚",
        "shield": "🛡",
        "shinto_shrine": "⛩",
        "ship": "🚢",
        "shirt": "👕",
        "shopping": "🛍",
        "shopping_cart": "🛒",
        "shower": "🚿",
        "shrimp": "🦐",
        "signal_strength": "📶",
        "six_pointed_star": "🔯",
        "ski": "🎿",
        "skier": "⛷",
        "skull": "💀",
        "skull_and_crossbones": "☠️",
        "sleeping": "😴",
        "sleeping_bed": "🛌",
        "sleepy": "😪",
        "slightly_frowning_face": "🙁",
        "slightly_smiling_face": "🙂",
        "slot_machine": "🎰",
        "small_airplane": "🛩",
        "small_blue_diamond": "🔹",
        "small_orange_diamond": "🔸",
        "small_red_triangle": "🔺",
        "small_red_triangle_down": "🔻",
        "smile": "😄",
        "smile_cat": "😸",
        "smiley": "😃",
        "smiley_cat": "😺",
        "smiling_imp": "😈",
        "smirk": "😏",
        "smirk_cat": "😼",
        "smoking": "🚬",
        "snail": "🐌",
        "snake": "🐍",
        "sneezing_face": "🤧",
        "snowboarder": "🏂",
        "snowflake": "❄️",
        "snowman": "⛄️",
        "snowman_with_snow": "☃️",
        "sob": "😭",
        "soccer": "⚽️",
        "soon": "🔜",
        "sos": "🆘",
        "sound": "🔉",
        "space_invader": "👾",
        "spades": "♠️",
        "spaghetti": "🍝",
        "sparkle": "❇️",
        "sparkler": "🎇",
        "sparkles": "✨",
        "sparkling_heart": "💖",
        "speak_no_evil": "🙊",
        "speaker": "🔈",
        "speaking_head": "🗣",
        "speech_balloon": "💬",
        "speedboat": "🚤",
        "spider": "🕷",
        "spider_web": "🕸",
        "spiral_calendar": "🗓",
        "spiral_notepad": "🗒",
        "spoon": "🥄",
        "squid": "🦑",
        "stadium": "🏟",
        "star": "⭐️",
        "star2": "🌟",
        "star_and_crescent": "☪️",
        "star_of_david": "✡️",
        "stars": "🌠",
        "station": "🚉",
        "statue_of_liberty": "🗽",
        "steam_locomotive": "🚂",
        "stew": "🍲",
        "stop_button": "⏹",
        "stop_sign": "🛑",
        "stopwatch": "⏱",
        "straight_ruler": "📏",
        "strawberry": "🍓",
        "stuck_out_tongue": "😛",
        "stuck_out_tongue_closed_eyes": "😝",
        "stuck_out_tongue_winking_eye": "😜",
        "studio_microphone": "🎙",
        "stuffed_flatbread": "🥙",
        "sun_behind_large_cloud": "🌥",
        "sun_behind_rain_cloud": "🌦",
        "sun_behind_small_cloud": "🌤",
        "sun_with_face": "🌞",
        "sunflower": "🌻",
        "sunglasses": "😎",
        "sunny": "☀️",
        "sunrise": "🌅",
        "sunrise_over_mountains": "🌄",
        "surfing_man": "🏄",
        "surfing_woman": "🏄&zwj;♀️",
        "sushi": "🍣",
        "suspension_railway": "🚟",
        "sweat": "😓",
        "sweat_drops": "💦",
        "sweat_smile": "😅",
        "sweet_potato": "🍠",
        "swimming_man": "🏊",
        "swimming_woman": "🏊&zwj;♀️",
        "symbols": "🔣",
        "synagogue": "🕍",
        "syringe": "💉",
        "taco": "🌮",
        "tada": "🎉",
        "tanabata_tree": "🎋",
        "taurus": "♉️",
        "taxi": "🚕",
        "tea": "🍵",
        "telephone_receiver": "📞",
        "telescope": "🔭",
        "tennis": "🎾",
        "tent": "⛺️",
        "thermometer": "🌡",
        "thinking": "🤔",
        "thought_balloon": "💭",
        "ticket": "🎫",
        "tickets": "🎟",
        "tiger": "🐯",
        "tiger2": "🐅",
        "timer_clock": "⏲",
        "tipping_hand_man": "💁&zwj;♂️",
        "tired_face": "😫",
        "tm": "™️",
        "toilet": "🚽",
        "tokyo_tower": "🗼",
        "tomato": "🍅",
        "tongue": "👅",
        "top": "🔝",
        "tophat": "🎩",
        "tornado": "🌪",
        "trackball": "🖲",
        "tractor": "🚜",
        "traffic_light": "🚥",
        "train": "🚋",
        "train2": "🚆",
        "tram": "🚊",
        "triangular_flag_on_post": "🚩",
        "triangular_ruler": "📐",
        "trident": "🔱",
        "triumph": "😤",
        "trolleybus": "🚎",
        "trophy": "🏆",
        "tropical_drink": "🍹",
        "tropical_fish": "🐠",
        "truck": "🚚",
        "trumpet": "🎺",
        "tulip": "🌷",
        "tumbler_glass": "🥃",
        "turkey": "🦃",
        "turtle": "🐢",
        "tv": "📺",
        "twisted_rightwards_arrows": "🔀",
        "two_hearts": "💕",
        "two_men_holding_hands": "👬",
        "two_women_holding_hands": "👭",
        "u5272": "🈹",
        "u5408": "🈴",
        "u55b6": "🈺",
        "u6307": "🈯️",
        "u6708": "🈷️",
        "u6709": "🈶",
        "u6e80": "🈵",
        "u7121": "🈚️",
        "u7533": "🈸",
        "u7981": "🈲",
        "u7a7a": "🈳",
        "umbrella": "☔️",
        "unamused": "😒",
        "underage": "🔞",
        "unicorn": "🦄",
        "unlock": "🔓",
        "up": "🆙",
        "upside_down_face": "🙃",
        "v": "✌️",
        "vertical_traffic_light": "🚦",
        "vhs": "📼",
        "vibration_mode": "📳",
        "video_camera": "📹",
        "video_game": "🎮",
        "violin": "🎻",
        "virgo": "♍️",
        "volcano": "🌋",
        "volleyball": "🏐",
        "vs": "🆚",
        "vulcan_salute": "🖖",
        "walking_man": "🚶",
        "walking_woman": "🚶&zwj;♀️",
        "waning_crescent_moon": "🌘",
        "waning_gibbous_moon": "🌖",
        "warning": "⚠️",
        "wastebasket": "🗑",
        "watch": "⌚️",
        "water_buffalo": "🐃",
        "watermelon": "🍉",
        "wave": "👋",
        "wavy_dash": "〰️",
        "waxing_crescent_moon": "🌒",
        "wc": "🚾",
        "weary": "😩",
        "wedding": "💒",
        "weight_lifting_man": "🏋️",
        "weight_lifting_woman": "🏋️&zwj;♀️",
        "whale": "🐳",
        "whale2": "🐋",
        "wheel_of_dharma": "☸️",
        "wheelchair": "♿️",
        "white_check_mark": "✅",
        "white_circle": "⚪️",
        "white_flag": "🏳️",
        "white_flower": "💮",
        "white_large_square": "⬜️",
        "white_medium_small_square": "◽️",
        "white_medium_square": "◻️",
        "white_small_square": "▫️",
        "white_square_button": "🔳",
        "wilted_flower": "🥀",
        "wind_chime": "🎐",
        "wind_face": "🌬",
        "wine_glass": "🍷",
        "wink": "😉",
        "wolf": "🐺",
        "woman": "👩",
        "woman_artist": "👩&zwj;🎨",
        "woman_astronaut": "👩&zwj;🚀",
        "woman_cartwheeling": "🤸&zwj;♀️",
        "woman_cook": "👩&zwj;🍳",
        "woman_facepalming": "🤦&zwj;♀️",
        "woman_factory_worker": "👩&zwj;🏭",
        "woman_farmer": "👩&zwj;🌾",
        "woman_firefighter": "👩&zwj;🚒",
        "woman_health_worker": "👩&zwj;⚕️",
        "woman_judge": "👩&zwj;⚖️",
        "woman_juggling": "🤹&zwj;♀️",
        "woman_mechanic": "👩&zwj;🔧",
        "woman_office_worker": "👩&zwj;💼",
        "woman_pilot": "👩&zwj;✈️",
        "woman_playing_handball": "🤾&zwj;♀️",
        "woman_playing_water_polo": "🤽&zwj;♀️",
        "woman_scientist": "👩&zwj;🔬",
        "woman_shrugging": "🤷&zwj;♀️",
        "woman_singer": "👩&zwj;🎤",
        "woman_student": "👩&zwj;🎓",
        "woman_teacher": "👩&zwj;🏫",
        "woman_technologist": "👩&zwj;💻",
        "woman_with_turban": "👳&zwj;♀️",
        "womans_clothes": "👚",
        "womans_hat": "👒",
        "women_wrestling": "🤼&zwj;♀️",
        "womens": "🚺",
        "world_map": "🗺",
        "worried": "😟",
        "wrench": "🔧",
        "writing_hand": "✍️",
        "x": "❌",
        "yellow_heart": "💛",
        "yen": "💴",
        "yin_yang": "☯️",
        "yum": "😋",
        "zap": "⚡️",
        "zipper_mouth_face": "🤐",
        "zzz": "💤",
        /* special emojis :P */
        "octocat": '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        "showdown": `<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`
      };
      showdown2.Converter = function(converterOptions) {
        var options = {}, langExtensions = [], outputModifiers = [], listeners = {}, setConvFlavor = setFlavor, metadata = {
          parsed: {},
          raw: "",
          format: ""
        };
        _constructor();
        function _constructor() {
          converterOptions = converterOptions || {};
          for (var gOpt in globalOptions) {
            if (globalOptions.hasOwnProperty(gOpt)) {
              options[gOpt] = globalOptions[gOpt];
            }
          }
          if (typeof converterOptions === "object") {
            for (var opt in converterOptions) {
              if (converterOptions.hasOwnProperty(opt)) {
                options[opt] = converterOptions[opt];
              }
            }
          } else {
            throw Error("Converter expects the passed parameter to be an object, but " + typeof converterOptions + " was passed instead.");
          }
          if (options.extensions) {
            showdown2.helper.forEach(options.extensions, _parseExtension);
          }
        }
        function _parseExtension(ext, name) {
          name = name || null;
          if (showdown2.helper.isString(ext)) {
            ext = showdown2.helper.stdExtName(ext);
            name = ext;
            if (showdown2.extensions[ext]) {
              console.warn("DEPRECATION WARNING: " + ext + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!");
              legacyExtensionLoading(showdown2.extensions[ext], ext);
              return;
            } else if (!showdown2.helper.isUndefined(extensions[ext])) {
              ext = extensions[ext];
            } else {
              throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
            }
          }
          if (typeof ext === "function") {
            ext = ext();
          }
          if (!showdown2.helper.isArray(ext)) {
            ext = [ext];
          }
          var validExt = validate(ext, name);
          if (!validExt.valid) {
            throw Error(validExt.error);
          }
          for (var i2 = 0; i2 < ext.length; ++i2) {
            switch (ext[i2].type) {
              case "lang":
                langExtensions.push(ext[i2]);
                break;
              case "output":
                outputModifiers.push(ext[i2]);
                break;
            }
            if (ext[i2].hasOwnProperty("listeners")) {
              for (var ln2 in ext[i2].listeners) {
                if (ext[i2].listeners.hasOwnProperty(ln2)) {
                  listen(ln2, ext[i2].listeners[ln2]);
                }
              }
            }
          }
        }
        function legacyExtensionLoading(ext, name) {
          if (typeof ext === "function") {
            ext = ext(new showdown2.Converter());
          }
          if (!showdown2.helper.isArray(ext)) {
            ext = [ext];
          }
          var valid = validate(ext, name);
          if (!valid.valid) {
            throw Error(valid.error);
          }
          for (var i2 = 0; i2 < ext.length; ++i2) {
            switch (ext[i2].type) {
              case "lang":
                langExtensions.push(ext[i2]);
                break;
              case "output":
                outputModifiers.push(ext[i2]);
                break;
              default:
                throw Error("Extension loader error: Type unrecognized!!!");
            }
          }
        }
        function listen(name, callback) {
          if (!showdown2.helper.isString(name)) {
            throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof name + " given");
          }
          if (typeof callback !== "function") {
            throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof callback + " given");
          }
          if (!listeners.hasOwnProperty(name)) {
            listeners[name] = [];
          }
          listeners[name].push(callback);
        }
        function rTrimInputText(text) {
          var rsp = text.match(/^\s*/)[0].length, rgx = new RegExp("^\\s{0," + rsp + "}", "gm");
          return text.replace(rgx, "");
        }
        this._dispatch = function dispatch(evtName, text, options2, globals) {
          if (listeners.hasOwnProperty(evtName)) {
            for (var ei = 0; ei < listeners[evtName].length; ++ei) {
              var nText = listeners[evtName][ei](evtName, text, this, options2, globals);
              if (nText && typeof nText !== "undefined") {
                text = nText;
              }
            }
          }
          return text;
        };
        this.listen = function(name, callback) {
          listen(name, callback);
          return this;
        };
        this.makeHtml = function(text) {
          if (!text) {
            return text;
          }
          var globals = {
            gHtmlBlocks: [],
            gHtmlMdBlocks: [],
            gHtmlSpans: [],
            gUrls: {},
            gTitles: {},
            gDimensions: {},
            gListLevel: 0,
            hashLinkCounts: {},
            langExtensions,
            outputModifiers,
            converter: this,
            ghCodeBlocks: [],
            metadata: {
              parsed: {},
              raw: "",
              format: ""
            }
          };
          text = text.replace(/¨/g, "¨T");
          text = text.replace(/\$/g, "¨D");
          text = text.replace(/\r\n/g, "\n");
          text = text.replace(/\r/g, "\n");
          text = text.replace(/\u00A0/g, "&nbsp;");
          if (options.smartIndentationFix) {
            text = rTrimInputText(text);
          }
          text = "\n\n" + text + "\n\n";
          text = showdown2.subParser("detab")(text, options, globals);
          text = text.replace(/^[ \t]+$/mg, "");
          showdown2.helper.forEach(langExtensions, function(ext) {
            text = showdown2.subParser("runExtension")(ext, text, options, globals);
          });
          text = showdown2.subParser("metadata")(text, options, globals);
          text = showdown2.subParser("hashPreCodeTags")(text, options, globals);
          text = showdown2.subParser("githubCodeBlocks")(text, options, globals);
          text = showdown2.subParser("hashHTMLBlocks")(text, options, globals);
          text = showdown2.subParser("hashCodeTags")(text, options, globals);
          text = showdown2.subParser("stripLinkDefinitions")(text, options, globals);
          text = showdown2.subParser("blockGamut")(text, options, globals);
          text = showdown2.subParser("unhashHTMLSpans")(text, options, globals);
          text = showdown2.subParser("unescapeSpecialChars")(text, options, globals);
          text = text.replace(/¨D/g, "$$");
          text = text.replace(/¨T/g, "¨");
          text = showdown2.subParser("completeHTMLDocument")(text, options, globals);
          showdown2.helper.forEach(outputModifiers, function(ext) {
            text = showdown2.subParser("runExtension")(ext, text, options, globals);
          });
          metadata = globals.metadata;
          return text;
        };
        this.makeMarkdown = this.makeMd = function(src, HTMLParser) {
          src = src.replace(/\r\n/g, "\n");
          src = src.replace(/\r/g, "\n");
          src = src.replace(/>[ \t]+</, ">¨NBSP;<");
          if (!HTMLParser) {
            if (window && window.document) {
              HTMLParser = window.document;
            } else {
              throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
            }
          }
          var doc = HTMLParser.createElement("div");
          doc.innerHTML = src;
          var globals = {
            preList: substitutePreCodeTags(doc)
          };
          clean(doc);
          var nodes = doc.childNodes, mdDoc = "";
          for (var i2 = 0; i2 < nodes.length; i2++) {
            mdDoc += showdown2.subParser("makeMarkdown.node")(nodes[i2], globals);
          }
          function clean(node2) {
            for (var n2 = 0; n2 < node2.childNodes.length; ++n2) {
              var child = node2.childNodes[n2];
              if (child.nodeType === 3) {
                if (!/\S/.test(child.nodeValue)) {
                  node2.removeChild(child);
                  --n2;
                } else {
                  child.nodeValue = child.nodeValue.split("\n").join(" ");
                  child.nodeValue = child.nodeValue.replace(/(\s)+/g, "$1");
                }
              } else if (child.nodeType === 1) {
                clean(child);
              }
            }
          }
          function substitutePreCodeTags(doc2) {
            var pres = doc2.querySelectorAll("pre"), presPH = [];
            for (var i3 = 0; i3 < pres.length; ++i3) {
              if (pres[i3].childElementCount === 1 && pres[i3].firstChild.tagName.toLowerCase() === "code") {
                var content = pres[i3].firstChild.innerHTML.trim(), language = pres[i3].firstChild.getAttribute("data-language") || "";
                if (language === "") {
                  var classes = pres[i3].firstChild.className.split(" ");
                  for (var c2 = 0; c2 < classes.length; ++c2) {
                    var matches = classes[c2].match(/^language-(.+)$/);
                    if (matches !== null) {
                      language = matches[1];
                      break;
                    }
                  }
                }
                content = showdown2.helper.unescapeHTMLEntities(content);
                presPH.push(content);
                pres[i3].outerHTML = '<precode language="' + language + '" precodenum="' + i3.toString() + '"></precode>';
              } else {
                presPH.push(pres[i3].innerHTML);
                pres[i3].innerHTML = "";
                pres[i3].setAttribute("prenum", i3.toString());
              }
            }
            return presPH;
          }
          return mdDoc;
        };
        this.setOption = function(key, value) {
          options[key] = value;
        };
        this.getOption = function(key) {
          return options[key];
        };
        this.getOptions = function() {
          return options;
        };
        this.addExtension = function(extension, name) {
          name = name || null;
          _parseExtension(extension, name);
        };
        this.useExtension = function(extensionName) {
          _parseExtension(extensionName);
        };
        this.setFlavor = function(name) {
          if (!flavor.hasOwnProperty(name)) {
            throw Error(name + " flavor was not found");
          }
          var preset = flavor[name];
          setConvFlavor = name;
          for (var option in preset) {
            if (preset.hasOwnProperty(option)) {
              options[option] = preset[option];
            }
          }
        };
        this.getFlavor = function() {
          return setConvFlavor;
        };
        this.removeExtension = function(extension) {
          if (!showdown2.helper.isArray(extension)) {
            extension = [extension];
          }
          for (var a2 = 0; a2 < extension.length; ++a2) {
            var ext = extension[a2];
            for (var i2 = 0; i2 < langExtensions.length; ++i2) {
              if (langExtensions[i2] === ext) {
                langExtensions[i2].splice(i2, 1);
              }
            }
            for (var ii2 = 0; ii2 < outputModifiers.length; ++i2) {
              if (outputModifiers[ii2] === ext) {
                outputModifiers[ii2].splice(i2, 1);
              }
            }
          }
        };
        this.getAllExtensions = function() {
          return {
            language: langExtensions,
            output: outputModifiers
          };
        };
        this.getMetadata = function(raw) {
          if (raw) {
            return metadata.raw;
          } else {
            return metadata.parsed;
          }
        };
        this.getMetadataFormat = function() {
          return metadata.format;
        };
        this._setMetadataPair = function(key, value) {
          metadata.parsed[key] = value;
        };
        this._setMetadataFormat = function(format) {
          metadata.format = format;
        };
        this._setMetadataRaw = function(raw) {
          metadata.raw = raw;
        };
      };
      showdown2.subParser("anchors", function(text, options, globals) {
        text = globals.converter._dispatch("anchors.before", text, options, globals);
        var writeAnchorTag = function(wholeMatch, linkText, linkId, url, m5, m6, title) {
          if (showdown2.helper.isUndefined(title)) {
            title = "";
          }
          linkId = linkId.toLowerCase();
          if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
            url = "";
          } else if (!url) {
            if (!linkId) {
              linkId = linkText.toLowerCase().replace(/ ?\n/g, " ");
            }
            url = "#" + linkId;
            if (!showdown2.helper.isUndefined(globals.gUrls[linkId])) {
              url = globals.gUrls[linkId];
              if (!showdown2.helper.isUndefined(globals.gTitles[linkId])) {
                title = globals.gTitles[linkId];
              }
            } else {
              return wholeMatch;
            }
          }
          url = url.replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
          var result = '<a href="' + url + '"';
          if (title !== "" && title !== null) {
            title = title.replace(/"/g, "&quot;");
            title = title.replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
            result += ' title="' + title + '"';
          }
          if (options.openLinksInNewWindow && !/^#/.test(url)) {
            result += ' rel="noopener noreferrer" target="¨E95Eblank"';
          }
          result += ">" + linkText + "</a>";
          return result;
        };
        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);
        text = text.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          writeAnchorTag
        );
        text = text.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          writeAnchorTag
        );
        text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);
        if (options.ghMentions) {
          text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(wm, st, escape, mentions, username) {
            if (escape === "\\") {
              return st + mentions;
            }
            if (!showdown2.helper.isString(options.ghMentionsLink)) {
              throw new Error("ghMentionsLink option must be a string");
            }
            var lnk = options.ghMentionsLink.replace(/\{u}/g, username), target2 = "";
            if (options.openLinksInNewWindow) {
              target2 = ' rel="noopener noreferrer" target="¨E95Eblank"';
            }
            return st + '<a href="' + lnk + '"' + target2 + ">" + mentions + "</a>";
          });
        }
        text = globals.converter._dispatch("anchors.after", text, options, globals);
        return text;
      });
      var simpleURLRegex = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, delimUrlRegex = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, delimMailRegex = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, replaceLink = function(options) {
        return function(wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
          link = link.replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
          var lnkTxt = link, append = "", target2 = "", lmc = leadingMagicChars || "", tmc = trailingMagicChars || "";
          if (/^www\./i.test(link)) {
            link = link.replace(/^www\./i, "http://www.");
          }
          if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
            append = trailingPunctuation;
          }
          if (options.openLinksInNewWindow) {
            target2 = ' rel="noopener noreferrer" target="¨E95Eblank"';
          }
          return lmc + '<a href="' + link + '"' + target2 + ">" + lnkTxt + "</a>" + append + tmc;
        };
      }, replaceMail = function(options, globals) {
        return function(wholeMatch, b2, mail) {
          var href = "mailto:";
          b2 = b2 || "";
          mail = showdown2.subParser("unescapeSpecialChars")(mail, options, globals);
          if (options.encodeEmails) {
            href = showdown2.helper.encodeEmailAddress(href + mail);
            mail = showdown2.helper.encodeEmailAddress(mail);
          } else {
            href = href + mail;
          }
          return b2 + '<a href="' + href + '">' + mail + "</a>";
        };
      };
      showdown2.subParser("autoLinks", function(text, options, globals) {
        text = globals.converter._dispatch("autoLinks.before", text, options, globals);
        text = text.replace(delimUrlRegex, replaceLink(options));
        text = text.replace(delimMailRegex, replaceMail(options, globals));
        text = globals.converter._dispatch("autoLinks.after", text, options, globals);
        return text;
      });
      showdown2.subParser("simplifiedAutoLinks", function(text, options, globals) {
        if (!options.simplifiedAutoLink) {
          return text;
        }
        text = globals.converter._dispatch("simplifiedAutoLinks.before", text, options, globals);
        if (options.excludeTrailingPunctuationFromURLs) {
          text = text.replace(simpleURLRegex2, replaceLink(options));
        } else {
          text = text.replace(simpleURLRegex, replaceLink(options));
        }
        text = text.replace(simpleMailRegex, replaceMail(options, globals));
        text = globals.converter._dispatch("simplifiedAutoLinks.after", text, options, globals);
        return text;
      });
      showdown2.subParser("blockGamut", function(text, options, globals) {
        text = globals.converter._dispatch("blockGamut.before", text, options, globals);
        text = showdown2.subParser("blockQuotes")(text, options, globals);
        text = showdown2.subParser("headers")(text, options, globals);
        text = showdown2.subParser("horizontalRule")(text, options, globals);
        text = showdown2.subParser("lists")(text, options, globals);
        text = showdown2.subParser("codeBlocks")(text, options, globals);
        text = showdown2.subParser("tables")(text, options, globals);
        text = showdown2.subParser("hashHTMLBlocks")(text, options, globals);
        text = showdown2.subParser("paragraphs")(text, options, globals);
        text = globals.converter._dispatch("blockGamut.after", text, options, globals);
        return text;
      });
      showdown2.subParser("blockQuotes", function(text, options, globals) {
        text = globals.converter._dispatch("blockQuotes.before", text, options, globals);
        text = text + "\n\n";
        var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        if (options.splitAdjacentBlockquotes) {
          rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
        }
        text = text.replace(rgx, function(bq) {
          bq = bq.replace(/^[ \t]*>[ \t]?/gm, "");
          bq = bq.replace(/¨0/g, "");
          bq = bq.replace(/^[ \t]+$/gm, "");
          bq = showdown2.subParser("githubCodeBlocks")(bq, options, globals);
          bq = showdown2.subParser("blockGamut")(bq, options, globals);
          bq = bq.replace(/(^|\n)/g, "$1  ");
          bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(wholeMatch, m1) {
            var pre2 = m1;
            pre2 = pre2.replace(/^  /mg, "¨0");
            pre2 = pre2.replace(/¨0/g, "");
            return pre2;
          });
          return showdown2.subParser("hashBlock")("<blockquote>\n" + bq + "\n</blockquote>", options, globals);
        });
        text = globals.converter._dispatch("blockQuotes.after", text, options, globals);
        return text;
      });
      showdown2.subParser("codeBlocks", function(text, options, globals) {
        text = globals.converter._dispatch("codeBlocks.before", text, options, globals);
        text += "¨0";
        var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
        text = text.replace(pattern, function(wholeMatch, m1, m2) {
          var codeblock = m1, nextChar = m2, end = "\n";
          codeblock = showdown2.subParser("outdent")(codeblock, options, globals);
          codeblock = showdown2.subParser("encodeCode")(codeblock, options, globals);
          codeblock = showdown2.subParser("detab")(codeblock, options, globals);
          codeblock = codeblock.replace(/^\n+/g, "");
          codeblock = codeblock.replace(/\n+$/g, "");
          if (options.omitExtraWLInCodeBlocks) {
            end = "";
          }
          codeblock = "<pre><code>" + codeblock + end + "</code></pre>";
          return showdown2.subParser("hashBlock")(codeblock, options, globals) + nextChar;
        });
        text = text.replace(/¨0/, "");
        text = globals.converter._dispatch("codeBlocks.after", text, options, globals);
        return text;
      });
      showdown2.subParser("codeSpans", function(text, options, globals) {
        text = globals.converter._dispatch("codeSpans.before", text, options, globals);
        if (typeof text === "undefined") {
          text = "";
        }
        text = text.replace(
          /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
          function(wholeMatch, m1, m2, m3) {
            var c2 = m3;
            c2 = c2.replace(/^([ \t]*)/g, "");
            c2 = c2.replace(/[ \t]*$/g, "");
            c2 = showdown2.subParser("encodeCode")(c2, options, globals);
            c2 = m1 + "<code>" + c2 + "</code>";
            c2 = showdown2.subParser("hashHTMLSpans")(c2, options, globals);
            return c2;
          }
        );
        text = globals.converter._dispatch("codeSpans.after", text, options, globals);
        return text;
      });
      showdown2.subParser("completeHTMLDocument", function(text, options, globals) {
        if (!options.completeHTMLDocument) {
          return text;
        }
        text = globals.converter._dispatch("completeHTMLDocument.before", text, options, globals);
        var doctype = "html", doctypeParsed = "<!DOCTYPE HTML>\n", title = "", charset = '<meta charset="utf-8">\n', lang2 = "", metadata = "";
        if (typeof globals.metadata.parsed.doctype !== "undefined") {
          doctypeParsed = "<!DOCTYPE " + globals.metadata.parsed.doctype + ">\n";
          doctype = globals.metadata.parsed.doctype.toString().toLowerCase();
          if (doctype === "html" || doctype === "html5") {
            charset = '<meta charset="utf-8">';
          }
        }
        for (var meta in globals.metadata.parsed) {
          if (globals.metadata.parsed.hasOwnProperty(meta)) {
            switch (meta.toLowerCase()) {
              case "doctype":
                break;
              case "title":
                title = "<title>" + globals.metadata.parsed.title + "</title>\n";
                break;
              case "charset":
                if (doctype === "html" || doctype === "html5") {
                  charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
                } else {
                  charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
                }
                break;
              case "language":
              case "lang":
                lang2 = ' lang="' + globals.metadata.parsed[meta] + '"';
                metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
                break;
              default:
                metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
            }
          }
        }
        text = doctypeParsed + "<html" + lang2 + ">\n<head>\n" + title + charset + metadata + "</head>\n<body>\n" + text.trim() + "\n</body>\n</html>";
        text = globals.converter._dispatch("completeHTMLDocument.after", text, options, globals);
        return text;
      });
      showdown2.subParser("detab", function(text, options, globals) {
        text = globals.converter._dispatch("detab.before", text, options, globals);
        text = text.replace(/\t(?=\t)/g, "    ");
        text = text.replace(/\t/g, "¨A¨B");
        text = text.replace(/¨B(.+?)¨A/g, function(wholeMatch, m1) {
          var leadingText = m1, numSpaces = 4 - leadingText.length % 4;
          for (var i2 = 0; i2 < numSpaces; i2++) {
            leadingText += " ";
          }
          return leadingText;
        });
        text = text.replace(/¨A/g, "    ");
        text = text.replace(/¨B/g, "");
        text = globals.converter._dispatch("detab.after", text, options, globals);
        return text;
      });
      showdown2.subParser("ellipsis", function(text, options, globals) {
        text = globals.converter._dispatch("ellipsis.before", text, options, globals);
        text = text.replace(/\.\.\./g, "…");
        text = globals.converter._dispatch("ellipsis.after", text, options, globals);
        return text;
      });
      showdown2.subParser("emoji", function(text, options, globals) {
        if (!options.emoji) {
          return text;
        }
        text = globals.converter._dispatch("emoji.before", text, options, globals);
        var emojiRgx = /:([\S]+?):/g;
        text = text.replace(emojiRgx, function(wm, emojiCode) {
          if (showdown2.helper.emojis.hasOwnProperty(emojiCode)) {
            return showdown2.helper.emojis[emojiCode];
          }
          return wm;
        });
        text = globals.converter._dispatch("emoji.after", text, options, globals);
        return text;
      });
      showdown2.subParser("encodeAmpsAndAngles", function(text, options, globals) {
        text = globals.converter._dispatch("encodeAmpsAndAngles.before", text, options, globals);
        text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");
        text = text.replace(/<(?![a-z\/?$!])/gi, "&lt;");
        text = text.replace(/</g, "&lt;");
        text = text.replace(/>/g, "&gt;");
        text = globals.converter._dispatch("encodeAmpsAndAngles.after", text, options, globals);
        return text;
      });
      showdown2.subParser("encodeBackslashEscapes", function(text, options, globals) {
        text = globals.converter._dispatch("encodeBackslashEscapes.before", text, options, globals);
        text = text.replace(/\\(\\)/g, showdown2.helper.escapeCharactersCallback);
        text = text.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, showdown2.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("encodeBackslashEscapes.after", text, options, globals);
        return text;
      });
      showdown2.subParser("encodeCode", function(text, options, globals) {
        text = globals.converter._dispatch("encodeCode.before", text, options, globals);
        text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, showdown2.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("encodeCode.after", text, options, globals);
        return text;
      });
      showdown2.subParser("escapeSpecialCharsWithinTagAttributes", function(text, options, globals) {
        text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", text, options, globals);
        var tags = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        text = text.replace(tags, function(wholeMatch) {
          return wholeMatch.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, showdown2.helper.escapeCharactersCallback);
        });
        text = text.replace(comments, function(wholeMatch) {
          return wholeMatch.replace(/([\\`*_~=|])/g, showdown2.helper.escapeCharactersCallback);
        });
        text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", text, options, globals);
        return text;
      });
      showdown2.subParser("githubCodeBlocks", function(text, options, globals) {
        if (!options.ghCodeBlocks) {
          return text;
        }
        text = globals.converter._dispatch("githubCodeBlocks.before", text, options, globals);
        text += "¨0";
        text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(wholeMatch, delim, language, codeblock) {
          var end = options.omitExtraWLInCodeBlocks ? "" : "\n";
          codeblock = showdown2.subParser("encodeCode")(codeblock, options, globals);
          codeblock = showdown2.subParser("detab")(codeblock, options, globals);
          codeblock = codeblock.replace(/^\n+/g, "");
          codeblock = codeblock.replace(/\n+$/g, "");
          codeblock = "<pre><code" + (language ? ' class="' + language + " language-" + language + '"' : "") + ">" + codeblock + end + "</code></pre>";
          codeblock = showdown2.subParser("hashBlock")(codeblock, options, globals);
          return "\n\n¨G" + (globals.ghCodeBlocks.push({ text: wholeMatch, codeblock }) - 1) + "G\n\n";
        });
        text = text.replace(/¨0/, "");
        return globals.converter._dispatch("githubCodeBlocks.after", text, options, globals);
      });
      showdown2.subParser("hashBlock", function(text, options, globals) {
        text = globals.converter._dispatch("hashBlock.before", text, options, globals);
        text = text.replace(/(^\n+|\n+$)/g, "");
        text = "\n\n¨K" + (globals.gHtmlBlocks.push(text) - 1) + "K\n\n";
        text = globals.converter._dispatch("hashBlock.after", text, options, globals);
        return text;
      });
      showdown2.subParser("hashCodeTags", function(text, options, globals) {
        text = globals.converter._dispatch("hashCodeTags.before", text, options, globals);
        var repFunc = function(wholeMatch, match, left, right) {
          var codeblock = left + showdown2.subParser("encodeCode")(match, options, globals) + right;
          return "¨C" + (globals.gHtmlSpans.push(codeblock) - 1) + "C";
        };
        text = showdown2.helper.replaceRecursiveRegExp(text, repFunc, "<code\\b[^>]*>", "</code>", "gim");
        text = globals.converter._dispatch("hashCodeTags.after", text, options, globals);
        return text;
      });
      showdown2.subParser("hashElement", function(text, options, globals) {
        return function(wholeMatch, m1) {
          var blockText = m1;
          blockText = blockText.replace(/\n\n/g, "\n");
          blockText = blockText.replace(/^\n/, "");
          blockText = blockText.replace(/\n+$/g, "");
          blockText = "\n\n¨K" + (globals.gHtmlBlocks.push(blockText) - 1) + "K\n\n";
          return blockText;
        };
      });
      showdown2.subParser("hashHTMLBlocks", function(text, options, globals) {
        text = globals.converter._dispatch("hashHTMLBlocks.before", text, options, globals);
        var blockTags = [
          "pre",
          "div",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "blockquote",
          "table",
          "dl",
          "ol",
          "ul",
          "script",
          "noscript",
          "form",
          "fieldset",
          "iframe",
          "math",
          "style",
          "section",
          "header",
          "footer",
          "nav",
          "article",
          "aside",
          "address",
          "audio",
          "canvas",
          "figure",
          "hgroup",
          "output",
          "video",
          "p"
        ], repFunc = function(wholeMatch, match, left, right) {
          var txt = wholeMatch;
          if (left.search(/\bmarkdown\b/) !== -1) {
            txt = left + globals.converter.makeHtml(match) + right;
          }
          return "\n\n¨K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
        };
        if (options.backslashEscapesHTMLTags) {
          text = text.replace(/\\<(\/?[^>]+?)>/g, function(wm, inside) {
            return "&lt;" + inside + "&gt;";
          });
        }
        for (var i2 = 0; i2 < blockTags.length; ++i2) {
          var opTagPos, rgx1 = new RegExp("^ {0,3}(<" + blockTags[i2] + "\\b[^>]*>)", "im"), patLeft = "<" + blockTags[i2] + "\\b[^>]*>", patRight = "</" + blockTags[i2] + ">";
          while ((opTagPos = showdown2.helper.regexIndexOf(text, rgx1)) !== -1) {
            var subTexts = showdown2.helper.splitAtIndex(text, opTagPos), newSubText1 = showdown2.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, "im");
            if (newSubText1 === subTexts[1]) {
              break;
            }
            text = subTexts[0].concat(newSubText1);
          }
        }
        text = text.replace(
          /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
          showdown2.subParser("hashElement")(text, options, globals)
        );
        text = showdown2.helper.replaceRecursiveRegExp(text, function(txt) {
          return "\n\n¨K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
        }, "^ {0,3}<!--", "-->", "gm");
        text = text.replace(
          /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
          showdown2.subParser("hashElement")(text, options, globals)
        );
        text = globals.converter._dispatch("hashHTMLBlocks.after", text, options, globals);
        return text;
      });
      showdown2.subParser("hashHTMLSpans", function(text, options, globals) {
        text = globals.converter._dispatch("hashHTMLSpans.before", text, options, globals);
        function hashHTMLSpan(html) {
          return "¨C" + (globals.gHtmlSpans.push(html) - 1) + "C";
        }
        text = text.replace(/<[^>]+?\/>/gi, function(wm) {
          return hashHTMLSpan(wm);
        });
        text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(wm) {
          return hashHTMLSpan(wm);
        });
        text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(wm) {
          return hashHTMLSpan(wm);
        });
        text = text.replace(/<[^>]+?>/gi, function(wm) {
          return hashHTMLSpan(wm);
        });
        text = globals.converter._dispatch("hashHTMLSpans.after", text, options, globals);
        return text;
      });
      showdown2.subParser("unhashHTMLSpans", function(text, options, globals) {
        text = globals.converter._dispatch("unhashHTMLSpans.before", text, options, globals);
        for (var i2 = 0; i2 < globals.gHtmlSpans.length; ++i2) {
          var repText = globals.gHtmlSpans[i2], limit = 0;
          while (/¨C(\d+)C/.test(repText)) {
            var num2 = RegExp.$1;
            repText = repText.replace("¨C" + num2 + "C", globals.gHtmlSpans[num2]);
            if (limit === 10) {
              console.error("maximum nesting of 10 spans reached!!!");
              break;
            }
            ++limit;
          }
          text = text.replace("¨C" + i2 + "C", repText);
        }
        text = globals.converter._dispatch("unhashHTMLSpans.after", text, options, globals);
        return text;
      });
      showdown2.subParser("hashPreCodeTags", function(text, options, globals) {
        text = globals.converter._dispatch("hashPreCodeTags.before", text, options, globals);
        var repFunc = function(wholeMatch, match, left, right) {
          var codeblock = left + showdown2.subParser("encodeCode")(match, options, globals) + right;
          return "\n\n¨G" + (globals.ghCodeBlocks.push({ text: wholeMatch, codeblock }) - 1) + "G\n\n";
        };
        text = showdown2.helper.replaceRecursiveRegExp(text, repFunc, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim");
        text = globals.converter._dispatch("hashPreCodeTags.after", text, options, globals);
        return text;
      });
      showdown2.subParser("headers", function(text, options, globals) {
        text = globals.converter._dispatch("headers.before", text, options, globals);
        var headerLevelStart = isNaN(parseInt(options.headerLevelStart)) ? 1 : parseInt(options.headerLevelStart), setextRegexH1 = options.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, setextRegexH2 = options.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        text = text.replace(setextRegexH1, function(wholeMatch, m1) {
          var spanGamut = showdown2.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
          return showdown2.subParser("hashBlock")(hashBlock, options, globals);
        });
        text = text.replace(setextRegexH2, function(matchFound, m1) {
          var spanGamut = showdown2.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart + 1, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
          return showdown2.subParser("hashBlock")(hashBlock, options, globals);
        });
        var atxStyle = options.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        text = text.replace(atxStyle, function(wholeMatch, m1, m2) {
          var hText = m2;
          if (options.customizedHeaderId) {
            hText = m2.replace(/\s?\{([^{]+?)}\s*$/, "");
          }
          var span = showdown2.subParser("spanGamut")(hText, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m2) + '"', hLevel = headerLevelStart - 1 + m1.length, header = "<h" + hLevel + hID + ">" + span + "</h" + hLevel + ">";
          return showdown2.subParser("hashBlock")(header, options, globals);
        });
        function headerId(m2) {
          var title, prefix;
          if (options.customizedHeaderId) {
            var match = m2.match(/\{([^{]+?)}\s*$/);
            if (match && match[1]) {
              m2 = match[1];
            }
          }
          title = m2;
          if (showdown2.helper.isString(options.prefixHeaderId)) {
            prefix = options.prefixHeaderId;
          } else if (options.prefixHeaderId === true) {
            prefix = "section-";
          } else {
            prefix = "";
          }
          if (!options.rawPrefixHeaderId) {
            title = prefix + title;
          }
          if (options.ghCompatibleHeaderId) {
            title = title.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase();
          } else if (options.rawHeaderId) {
            title = title.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase();
          } else {
            title = title.replace(/[^\w]/g, "").toLowerCase();
          }
          if (options.rawPrefixHeaderId) {
            title = prefix + title;
          }
          if (globals.hashLinkCounts[title]) {
            title = title + "-" + globals.hashLinkCounts[title]++;
          } else {
            globals.hashLinkCounts[title] = 1;
          }
          return title;
        }
        text = globals.converter._dispatch("headers.after", text, options, globals);
        return text;
      });
      showdown2.subParser("horizontalRule", function(text, options, globals) {
        text = globals.converter._dispatch("horizontalRule.before", text, options, globals);
        var key = showdown2.subParser("hashBlock")("<hr />", options, globals);
        text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
        text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
        text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);
        text = globals.converter._dispatch("horizontalRule.after", text, options, globals);
        return text;
      });
      showdown2.subParser("images", function(text, options, globals) {
        text = globals.converter._dispatch("images.before", text, options, globals);
        var inlineRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, crazyRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, base64RegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, referenceRegExp = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;
        function writeImageTagBase64(wholeMatch, altText, linkId, url, width, height, m5, title) {
          url = url.replace(/\s/g, "");
          return writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title);
        }
        function writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title) {
          var gUrls = globals.gUrls, gTitles = globals.gTitles, gDims = globals.gDimensions;
          linkId = linkId.toLowerCase();
          if (!title) {
            title = "";
          }
          if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
            url = "";
          } else if (url === "" || url === null) {
            if (linkId === "" || linkId === null) {
              linkId = altText.toLowerCase().replace(/ ?\n/g, " ");
            }
            url = "#" + linkId;
            if (!showdown2.helper.isUndefined(gUrls[linkId])) {
              url = gUrls[linkId];
              if (!showdown2.helper.isUndefined(gTitles[linkId])) {
                title = gTitles[linkId];
              }
              if (!showdown2.helper.isUndefined(gDims[linkId])) {
                width = gDims[linkId].width;
                height = gDims[linkId].height;
              }
            } else {
              return wholeMatch;
            }
          }
          altText = altText.replace(/"/g, "&quot;").replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
          url = url.replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
          var result = '<img src="' + url + '" alt="' + altText + '"';
          if (title && showdown2.helper.isString(title)) {
            title = title.replace(/"/g, "&quot;").replace(showdown2.helper.regexes.asteriskDashAndColon, showdown2.helper.escapeCharactersCallback);
            result += ' title="' + title + '"';
          }
          if (width && height) {
            width = width === "*" ? "auto" : width;
            height = height === "*" ? "auto" : height;
            result += ' width="' + width + '"';
            result += ' height="' + height + '"';
          }
          result += " />";
          return result;
        }
        text = text.replace(referenceRegExp, writeImageTag);
        text = text.replace(base64RegExp, writeImageTagBase64);
        text = text.replace(crazyRegExp, writeImageTag);
        text = text.replace(inlineRegExp, writeImageTag);
        text = text.replace(refShortcutRegExp, writeImageTag);
        text = globals.converter._dispatch("images.after", text, options, globals);
        return text;
      });
      showdown2.subParser("italicsAndBold", function(text, options, globals) {
        text = globals.converter._dispatch("italicsAndBold.before", text, options, globals);
        function parseInside(txt, left, right) {
          return left + txt + right;
        }
        if (options.literalMidWordUnderscores) {
          text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
            return parseInside(txt, "<strong><em>", "</em></strong>");
          });
          text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
            return parseInside(txt, "<strong>", "</strong>");
          });
          text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function(wm, txt) {
            return parseInside(txt, "<em>", "</em>");
          });
        } else {
          text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m2) {
            return /\S$/.test(m2) ? parseInside(m2, "<strong><em>", "</em></strong>") : wm;
          });
          text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m2) {
            return /\S$/.test(m2) ? parseInside(m2, "<strong>", "</strong>") : wm;
          });
          text = text.replace(/_([^\s_][\s\S]*?)_/g, function(wm, m2) {
            return /\S$/.test(m2) ? parseInside(m2, "<em>", "</em>") : wm;
          });
        }
        if (options.literalMidWordAsterisks) {
          text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(wm, lead, txt) {
            return parseInside(txt, lead + "<strong><em>", "</em></strong>");
          });
          text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(wm, lead, txt) {
            return parseInside(txt, lead + "<strong>", "</strong>");
          });
          text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(wm, lead, txt) {
            return parseInside(txt, lead + "<em>", "</em>");
          });
        } else {
          text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(wm, m2) {
            return /\S$/.test(m2) ? parseInside(m2, "<strong><em>", "</em></strong>") : wm;
          });
          text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(wm, m2) {
            return /\S$/.test(m2) ? parseInside(m2, "<strong>", "</strong>") : wm;
          });
          text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function(wm, m2) {
            return /\S$/.test(m2) ? parseInside(m2, "<em>", "</em>") : wm;
          });
        }
        text = globals.converter._dispatch("italicsAndBold.after", text, options, globals);
        return text;
      });
      showdown2.subParser("lists", function(text, options, globals) {
        function processListItems(listStr, trimTrailing) {
          globals.gListLevel++;
          listStr = listStr.replace(/\n{2,}$/, "\n");
          listStr += "¨0";
          var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, isParagraphed = /\n[ \t]*\n(?!¨0)/.test(listStr);
          if (options.disableForced4SpacesIndentedSublists) {
            rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
          }
          listStr = listStr.replace(rgx, function(wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
            checked = checked && checked.trim() !== "";
            var item = showdown2.subParser("outdent")(m4, options, globals), bulletStyle = "";
            if (taskbtn && options.tasklists) {
              bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
              item = item.replace(/^[ \t]*\[(x|X| )?]/m, function() {
                var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                if (checked) {
                  otp += " checked";
                }
                otp += ">";
                return otp;
              });
            }
            item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(wm2) {
              return "¨A" + wm2;
            });
            if (m1 || item.search(/\n{2,}/) > -1) {
              item = showdown2.subParser("githubCodeBlocks")(item, options, globals);
              item = showdown2.subParser("blockGamut")(item, options, globals);
            } else {
              item = showdown2.subParser("lists")(item, options, globals);
              item = item.replace(/\n$/, "");
              item = showdown2.subParser("hashHTMLBlocks")(item, options, globals);
              item = item.replace(/\n\n+/g, "\n\n");
              if (isParagraphed) {
                item = showdown2.subParser("paragraphs")(item, options, globals);
              } else {
                item = showdown2.subParser("spanGamut")(item, options, globals);
              }
            }
            item = item.replace("¨A", "");
            item = "<li" + bulletStyle + ">" + item + "</li>\n";
            return item;
          });
          listStr = listStr.replace(/¨0/g, "");
          globals.gListLevel--;
          if (trimTrailing) {
            listStr = listStr.replace(/\s+$/, "");
          }
          return listStr;
        }
        function styleStartNumber(list, listType) {
          if (listType === "ol") {
            var res = list.match(/^ *(\d+)\./);
            if (res && res[1] !== "1") {
              return ' start="' + res[1] + '"';
            }
          }
          return "";
        }
        function parseConsecutiveLists(list, listType, trimTrailing) {
          var olRgx = options.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, ulRgx = options.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, counterRxg = listType === "ul" ? olRgx : ulRgx, result = "";
          if (list.search(counterRxg) !== -1) {
            (function parseCL(txt) {
              var pos = txt.search(counterRxg), style2 = styleStartNumber(list, listType);
              if (pos !== -1) {
                result += "\n\n<" + listType + style2 + ">\n" + processListItems(txt.slice(0, pos), !!trimTrailing) + "</" + listType + ">\n";
                listType = listType === "ul" ? "ol" : "ul";
                counterRxg = listType === "ul" ? olRgx : ulRgx;
                parseCL(txt.slice(pos));
              } else {
                result += "\n\n<" + listType + style2 + ">\n" + processListItems(txt, !!trimTrailing) + "</" + listType + ">\n";
              }
            })(list);
          } else {
            var style = styleStartNumber(list, listType);
            result = "\n\n<" + listType + style + ">\n" + processListItems(list, !!trimTrailing) + "</" + listType + ">\n";
          }
          return result;
        }
        text = globals.converter._dispatch("lists.before", text, options, globals);
        text += "¨0";
        if (globals.gListLevel) {
          text = text.replace(
            /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
            function(wholeMatch, list, m2) {
              var listType = m2.search(/[*+-]/g) > -1 ? "ul" : "ol";
              return parseConsecutiveLists(list, listType, true);
            }
          );
        } else {
          text = text.replace(
            /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
            function(wholeMatch, m1, list, m3) {
              var listType = m3.search(/[*+-]/g) > -1 ? "ul" : "ol";
              return parseConsecutiveLists(list, listType, false);
            }
          );
        }
        text = text.replace(/¨0/, "");
        text = globals.converter._dispatch("lists.after", text, options, globals);
        return text;
      });
      showdown2.subParser("metadata", function(text, options, globals) {
        if (!options.metadata) {
          return text;
        }
        text = globals.converter._dispatch("metadata.before", text, options, globals);
        function parseMetadataContents(content) {
          globals.metadata.raw = content;
          content = content.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
          content = content.replace(/\n {4}/g, " ");
          content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(wm, key, value) {
            globals.metadata.parsed[key] = value;
            return "";
          });
        }
        text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(wholematch, format, content) {
          parseMetadataContents(content);
          return "¨M";
        });
        text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(wholematch, format, content) {
          if (format) {
            globals.metadata.format = format;
          }
          parseMetadataContents(content);
          return "¨M";
        });
        text = text.replace(/¨M/g, "");
        text = globals.converter._dispatch("metadata.after", text, options, globals);
        return text;
      });
      showdown2.subParser("outdent", function(text, options, globals) {
        text = globals.converter._dispatch("outdent.before", text, options, globals);
        text = text.replace(/^(\t|[ ]{1,4})/gm, "¨0");
        text = text.replace(/¨0/g, "");
        text = globals.converter._dispatch("outdent.after", text, options, globals);
        return text;
      });
      showdown2.subParser("paragraphs", function(text, options, globals) {
        text = globals.converter._dispatch("paragraphs.before", text, options, globals);
        text = text.replace(/^\n+/g, "");
        text = text.replace(/\n+$/g, "");
        var grafs = text.split(/\n{2,}/g), grafsOut = [], end = grafs.length;
        for (var i2 = 0; i2 < end; i2++) {
          var str = grafs[i2];
          if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
            grafsOut.push(str);
          } else if (str.search(/\S/) >= 0) {
            str = showdown2.subParser("spanGamut")(str, options, globals);
            str = str.replace(/^([ \t]*)/g, "<p>");
            str += "</p>";
            grafsOut.push(str);
          }
        }
        end = grafsOut.length;
        for (i2 = 0; i2 < end; i2++) {
          var blockText = "", grafsOutIt = grafsOut[i2], codeFlag = false;
          while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
            var delim = RegExp.$1, num2 = RegExp.$2;
            if (delim === "K") {
              blockText = globals.gHtmlBlocks[num2];
            } else {
              if (codeFlag) {
                blockText = showdown2.subParser("encodeCode")(globals.ghCodeBlocks[num2].text, options, globals);
              } else {
                blockText = globals.ghCodeBlocks[num2].codeblock;
              }
            }
            blockText = blockText.replace(/\$/g, "$$$$");
            grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
            if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
              codeFlag = true;
            }
          }
          grafsOut[i2] = grafsOutIt;
        }
        text = grafsOut.join("\n");
        text = text.replace(/^\n+/g, "");
        text = text.replace(/\n+$/g, "");
        return globals.converter._dispatch("paragraphs.after", text, options, globals);
      });
      showdown2.subParser("runExtension", function(ext, text, options, globals) {
        if (ext.filter) {
          text = ext.filter(text, globals.converter, options);
        } else if (ext.regex) {
          var re = ext.regex;
          if (!(re instanceof RegExp)) {
            re = new RegExp(re, "g");
          }
          text = text.replace(re, ext.replace);
        }
        return text;
      });
      showdown2.subParser("spanGamut", function(text, options, globals) {
        text = globals.converter._dispatch("spanGamut.before", text, options, globals);
        text = showdown2.subParser("codeSpans")(text, options, globals);
        text = showdown2.subParser("escapeSpecialCharsWithinTagAttributes")(text, options, globals);
        text = showdown2.subParser("encodeBackslashEscapes")(text, options, globals);
        text = showdown2.subParser("images")(text, options, globals);
        text = showdown2.subParser("anchors")(text, options, globals);
        text = showdown2.subParser("autoLinks")(text, options, globals);
        text = showdown2.subParser("simplifiedAutoLinks")(text, options, globals);
        text = showdown2.subParser("emoji")(text, options, globals);
        text = showdown2.subParser("underline")(text, options, globals);
        text = showdown2.subParser("italicsAndBold")(text, options, globals);
        text = showdown2.subParser("strikethrough")(text, options, globals);
        text = showdown2.subParser("ellipsis")(text, options, globals);
        text = showdown2.subParser("hashHTMLSpans")(text, options, globals);
        text = showdown2.subParser("encodeAmpsAndAngles")(text, options, globals);
        if (options.simpleLineBreaks) {
          if (!/\n\n¨K/.test(text)) {
            text = text.replace(/\n+/g, "<br />\n");
          }
        } else {
          text = text.replace(/  +\n/g, "<br />\n");
        }
        text = globals.converter._dispatch("spanGamut.after", text, options, globals);
        return text;
      });
      showdown2.subParser("strikethrough", function(text, options, globals) {
        function parseInside(txt) {
          if (options.simplifiedAutoLink) {
            txt = showdown2.subParser("simplifiedAutoLinks")(txt, options, globals);
          }
          return "<del>" + txt + "</del>";
        }
        if (options.strikethrough) {
          text = globals.converter._dispatch("strikethrough.before", text, options, globals);
          text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(wm, txt) {
            return parseInside(txt);
          });
          text = globals.converter._dispatch("strikethrough.after", text, options, globals);
        }
        return text;
      });
      showdown2.subParser("stripLinkDefinitions", function(text, options, globals) {
        var regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, base64Regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
        text += "¨0";
        var replaceFunc = function(wholeMatch, linkId, url, width, height, blankLines, title) {
          linkId = linkId.toLowerCase();
          if (url.match(/^data:.+?\/.+?;base64,/)) {
            globals.gUrls[linkId] = url.replace(/\s/g, "");
          } else {
            globals.gUrls[linkId] = showdown2.subParser("encodeAmpsAndAngles")(url, options, globals);
          }
          if (blankLines) {
            return blankLines + title;
          } else {
            if (title) {
              globals.gTitles[linkId] = title.replace(/"|'/g, "&quot;");
            }
            if (options.parseImgDimensions && width && height) {
              globals.gDimensions[linkId] = {
                width,
                height
              };
            }
          }
          return "";
        };
        text = text.replace(base64Regex, replaceFunc);
        text = text.replace(regex, replaceFunc);
        text = text.replace(/¨0/, "");
        return text;
      });
      showdown2.subParser("tables", function(text, options, globals) {
        if (!options.tables) {
          return text;
        }
        var tableRgx = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
        function parseStyles(sLine) {
          if (/^:[ \t]*--*$/.test(sLine)) {
            return ' style="text-align:left;"';
          } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
            return ' style="text-align:right;"';
          } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
            return ' style="text-align:center;"';
          } else {
            return "";
          }
        }
        function parseHeaders(header, style) {
          var id = "";
          header = header.trim();
          if (options.tablesHeaderId || options.tableHeaderId) {
            id = ' id="' + header.replace(/ /g, "_").toLowerCase() + '"';
          }
          header = showdown2.subParser("spanGamut")(header, options, globals);
          return "<th" + id + style + ">" + header + "</th>\n";
        }
        function parseCells(cell, style) {
          var subText = showdown2.subParser("spanGamut")(cell, options, globals);
          return "<td" + style + ">" + subText + "</td>\n";
        }
        function buildTable(headers, cells) {
          var tb = "<table>\n<thead>\n<tr>\n", tblLgn = headers.length;
          for (var i2 = 0; i2 < tblLgn; ++i2) {
            tb += headers[i2];
          }
          tb += "</tr>\n</thead>\n<tbody>\n";
          for (i2 = 0; i2 < cells.length; ++i2) {
            tb += "<tr>\n";
            for (var ii2 = 0; ii2 < tblLgn; ++ii2) {
              tb += cells[i2][ii2];
            }
            tb += "</tr>\n";
          }
          tb += "</tbody>\n</table>\n";
          return tb;
        }
        function parseTable(rawTable) {
          var i2, tableLines = rawTable.split("\n");
          for (i2 = 0; i2 < tableLines.length; ++i2) {
            if (/^ {0,3}\|/.test(tableLines[i2])) {
              tableLines[i2] = tableLines[i2].replace(/^ {0,3}\|/, "");
            }
            if (/\|[ \t]*$/.test(tableLines[i2])) {
              tableLines[i2] = tableLines[i2].replace(/\|[ \t]*$/, "");
            }
            tableLines[i2] = showdown2.subParser("codeSpans")(tableLines[i2], options, globals);
          }
          var rawHeaders = tableLines[0].split("|").map(function(s2) {
            return s2.trim();
          }), rawStyles = tableLines[1].split("|").map(function(s2) {
            return s2.trim();
          }), rawCells = [], headers = [], styles = [], cells = [];
          tableLines.shift();
          tableLines.shift();
          for (i2 = 0; i2 < tableLines.length; ++i2) {
            if (tableLines[i2].trim() === "") {
              continue;
            }
            rawCells.push(
              tableLines[i2].split("|").map(function(s2) {
                return s2.trim();
              })
            );
          }
          if (rawHeaders.length < rawStyles.length) {
            return rawTable;
          }
          for (i2 = 0; i2 < rawStyles.length; ++i2) {
            styles.push(parseStyles(rawStyles[i2]));
          }
          for (i2 = 0; i2 < rawHeaders.length; ++i2) {
            if (showdown2.helper.isUndefined(styles[i2])) {
              styles[i2] = "";
            }
            headers.push(parseHeaders(rawHeaders[i2], styles[i2]));
          }
          for (i2 = 0; i2 < rawCells.length; ++i2) {
            var row = [];
            for (var ii2 = 0; ii2 < headers.length; ++ii2) {
              if (showdown2.helper.isUndefined(rawCells[i2][ii2])) ;
              row.push(parseCells(rawCells[i2][ii2], styles[ii2]));
            }
            cells.push(row);
          }
          return buildTable(headers, cells);
        }
        text = globals.converter._dispatch("tables.before", text, options, globals);
        text = text.replace(/\\(\|)/g, showdown2.helper.escapeCharactersCallback);
        text = text.replace(tableRgx, parseTable);
        text = text.replace(singeColTblRgx, parseTable);
        text = globals.converter._dispatch("tables.after", text, options, globals);
        return text;
      });
      showdown2.subParser("underline", function(text, options, globals) {
        if (!options.underline) {
          return text;
        }
        text = globals.converter._dispatch("underline.before", text, options, globals);
        if (options.literalMidWordUnderscores) {
          text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
            return "<u>" + txt + "</u>";
          });
          text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
            return "<u>" + txt + "</u>";
          });
        } else {
          text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m2) {
            return /\S$/.test(m2) ? "<u>" + m2 + "</u>" : wm;
          });
          text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m2) {
            return /\S$/.test(m2) ? "<u>" + m2 + "</u>" : wm;
          });
        }
        text = text.replace(/(_)/g, showdown2.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("underline.after", text, options, globals);
        return text;
      });
      showdown2.subParser("unescapeSpecialChars", function(text, options, globals) {
        text = globals.converter._dispatch("unescapeSpecialChars.before", text, options, globals);
        text = text.replace(/¨E(\d+)E/g, function(wholeMatch, m1) {
          var charCodeToReplace = parseInt(m1);
          return String.fromCharCode(charCodeToReplace);
        });
        text = globals.converter._dispatch("unescapeSpecialChars.after", text, options, globals);
        return text;
      });
      showdown2.subParser("makeMarkdown.blockquote", function(node2, globals) {
        var txt = "";
        if (node2.hasChildNodes()) {
          var children = node2.childNodes, childrenLength = children.length;
          for (var i2 = 0; i2 < childrenLength; ++i2) {
            var innerTxt = showdown2.subParser("makeMarkdown.node")(children[i2], globals);
            if (innerTxt === "") {
              continue;
            }
            txt += innerTxt;
          }
        }
        txt = txt.trim();
        txt = "> " + txt.split("\n").join("\n> ");
        return txt;
      });
      showdown2.subParser("makeMarkdown.codeBlock", function(node2, globals) {
        var lang2 = node2.getAttribute("language"), num2 = node2.getAttribute("precodenum");
        return "```" + lang2 + "\n" + globals.preList[num2] + "\n```";
      });
      showdown2.subParser("makeMarkdown.codeSpan", function(node2) {
        return "`" + node2.innerHTML + "`";
      });
      showdown2.subParser("makeMarkdown.emphasis", function(node2, globals) {
        var txt = "";
        if (node2.hasChildNodes()) {
          txt += "*";
          var children = node2.childNodes, childrenLength = children.length;
          for (var i2 = 0; i2 < childrenLength; ++i2) {
            txt += showdown2.subParser("makeMarkdown.node")(children[i2], globals);
          }
          txt += "*";
        }
        return txt;
      });
      showdown2.subParser("makeMarkdown.header", function(node2, globals, headerLevel) {
        var headerMark = new Array(headerLevel + 1).join("#"), txt = "";
        if (node2.hasChildNodes()) {
          txt = headerMark + " ";
          var children = node2.childNodes, childrenLength = children.length;
          for (var i2 = 0; i2 < childrenLength; ++i2) {
            txt += showdown2.subParser("makeMarkdown.node")(children[i2], globals);
          }
        }
        return txt;
      });
      showdown2.subParser("makeMarkdown.hr", function() {
        return "---";
      });
      showdown2.subParser("makeMarkdown.image", function(node2) {
        var txt = "";
        if (node2.hasAttribute("src")) {
          txt += "![" + node2.getAttribute("alt") + "](";
          txt += "<" + node2.getAttribute("src") + ">";
          if (node2.hasAttribute("width") && node2.hasAttribute("height")) {
            txt += " =" + node2.getAttribute("width") + "x" + node2.getAttribute("height");
          }
          if (node2.hasAttribute("title")) {
            txt += ' "' + node2.getAttribute("title") + '"';
          }
          txt += ")";
        }
        return txt;
      });
      showdown2.subParser("makeMarkdown.links", function(node2, globals) {
        var txt = "";
        if (node2.hasChildNodes() && node2.hasAttribute("href")) {
          var children = node2.childNodes, childrenLength = children.length;
          txt = "[";
          for (var i2 = 0; i2 < childrenLength; ++i2) {
            txt += showdown2.subParser("makeMarkdown.node")(children[i2], globals);
          }
          txt += "](";
          txt += "<" + node2.getAttribute("href") + ">";
          if (node2.hasAttribute("title")) {
            txt += ' "' + node2.getAttribute("title") + '"';
          }
          txt += ")";
        }
        return txt;
      });
      showdown2.subParser("makeMarkdown.list", function(node2, globals, type) {
        var txt = "";
        if (!node2.hasChildNodes()) {
          return "";
        }
        var listItems = node2.childNodes, listItemsLenght = listItems.length, listNum = node2.getAttribute("start") || 1;
        for (var i2 = 0; i2 < listItemsLenght; ++i2) {
          if (typeof listItems[i2].tagName === "undefined" || listItems[i2].tagName.toLowerCase() !== "li") {
            continue;
          }
          var bullet2 = "";
          if (type === "ol") {
            bullet2 = listNum.toString() + ". ";
          } else {
            bullet2 = "- ";
          }
          txt += bullet2 + showdown2.subParser("makeMarkdown.listItem")(listItems[i2], globals);
          ++listNum;
        }
        txt += "\n<!-- -->\n";
        return txt.trim();
      });
      showdown2.subParser("makeMarkdown.listItem", function(node2, globals) {
        var listItemTxt = "";
        var children = node2.childNodes, childrenLenght = children.length;
        for (var i2 = 0; i2 < childrenLenght; ++i2) {
          listItemTxt += showdown2.subParser("makeMarkdown.node")(children[i2], globals);
        }
        if (!/\n$/.test(listItemTxt)) {
          listItemTxt += "\n";
        } else {
          listItemTxt = listItemTxt.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n");
        }
        return listItemTxt;
      });
      showdown2.subParser("makeMarkdown.node", function(node2, globals, spansOnly) {
        spansOnly = spansOnly || false;
        var txt = "";
        if (node2.nodeType === 3) {
          return showdown2.subParser("makeMarkdown.txt")(node2, globals);
        }
        if (node2.nodeType === 8) {
          return "<!--" + node2.data + "-->\n\n";
        }
        if (node2.nodeType !== 1) {
          return "";
        }
        var tagName = node2.tagName.toLowerCase();
        switch (tagName) {
          //
          // BLOCKS
          //
          case "h1":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.header")(node2, globals, 1) + "\n\n";
            }
            break;
          case "h2":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.header")(node2, globals, 2) + "\n\n";
            }
            break;
          case "h3":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.header")(node2, globals, 3) + "\n\n";
            }
            break;
          case "h4":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.header")(node2, globals, 4) + "\n\n";
            }
            break;
          case "h5":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.header")(node2, globals, 5) + "\n\n";
            }
            break;
          case "h6":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.header")(node2, globals, 6) + "\n\n";
            }
            break;
          case "p":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.paragraph")(node2, globals) + "\n\n";
            }
            break;
          case "blockquote":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.blockquote")(node2, globals) + "\n\n";
            }
            break;
          case "hr":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.hr")(node2, globals) + "\n\n";
            }
            break;
          case "ol":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.list")(node2, globals, "ol") + "\n\n";
            }
            break;
          case "ul":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.list")(node2, globals, "ul") + "\n\n";
            }
            break;
          case "precode":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.codeBlock")(node2, globals) + "\n\n";
            }
            break;
          case "pre":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.pre")(node2, globals) + "\n\n";
            }
            break;
          case "table":
            if (!spansOnly) {
              txt = showdown2.subParser("makeMarkdown.table")(node2, globals) + "\n\n";
            }
            break;
          //
          // SPANS
          //
          case "code":
            txt = showdown2.subParser("makeMarkdown.codeSpan")(node2, globals);
            break;
          case "em":
          case "i":
            txt = showdown2.subParser("makeMarkdown.emphasis")(node2, globals);
            break;
          case "strong":
          case "b":
            txt = showdown2.subParser("makeMarkdown.strong")(node2, globals);
            break;
          case "del":
            txt = showdown2.subParser("makeMarkdown.strikethrough")(node2, globals);
            break;
          case "a":
            txt = showdown2.subParser("makeMarkdown.links")(node2, globals);
            break;
          case "img":
            txt = showdown2.subParser("makeMarkdown.image")(node2, globals);
            break;
          default:
            txt = node2.outerHTML + "\n\n";
        }
        return txt;
      });
      showdown2.subParser("makeMarkdown.paragraph", function(node2, globals) {
        var txt = "";
        if (node2.hasChildNodes()) {
          var children = node2.childNodes, childrenLength = children.length;
          for (var i2 = 0; i2 < childrenLength; ++i2) {
            txt += showdown2.subParser("makeMarkdown.node")(children[i2], globals);
          }
        }
        txt = txt.trim();
        return txt;
      });
      showdown2.subParser("makeMarkdown.pre", function(node2, globals) {
        var num2 = node2.getAttribute("prenum");
        return "<pre>" + globals.preList[num2] + "</pre>";
      });
      showdown2.subParser("makeMarkdown.strikethrough", function(node2, globals) {
        var txt = "";
        if (node2.hasChildNodes()) {
          txt += "~~";
          var children = node2.childNodes, childrenLength = children.length;
          for (var i2 = 0; i2 < childrenLength; ++i2) {
            txt += showdown2.subParser("makeMarkdown.node")(children[i2], globals);
          }
          txt += "~~";
        }
        return txt;
      });
      showdown2.subParser("makeMarkdown.strong", function(node2, globals) {
        var txt = "";
        if (node2.hasChildNodes()) {
          txt += "**";
          var children = node2.childNodes, childrenLength = children.length;
          for (var i2 = 0; i2 < childrenLength; ++i2) {
            txt += showdown2.subParser("makeMarkdown.node")(children[i2], globals);
          }
          txt += "**";
        }
        return txt;
      });
      showdown2.subParser("makeMarkdown.table", function(node2, globals) {
        var txt = "", tableArray = [[], []], headings = node2.querySelectorAll("thead>tr>th"), rows = node2.querySelectorAll("tbody>tr"), i2, ii2;
        for (i2 = 0; i2 < headings.length; ++i2) {
          var headContent = showdown2.subParser("makeMarkdown.tableCell")(headings[i2], globals), allign = "---";
          if (headings[i2].hasAttribute("style")) {
            var style = headings[i2].getAttribute("style").toLowerCase().replace(/\s/g, "");
            switch (style) {
              case "text-align:left;":
                allign = ":---";
                break;
              case "text-align:right;":
                allign = "---:";
                break;
              case "text-align:center;":
                allign = ":---:";
                break;
            }
          }
          tableArray[0][i2] = headContent.trim();
          tableArray[1][i2] = allign;
        }
        for (i2 = 0; i2 < rows.length; ++i2) {
          var r2 = tableArray.push([]) - 1, cols = rows[i2].getElementsByTagName("td");
          for (ii2 = 0; ii2 < headings.length; ++ii2) {
            var cellContent = " ";
            if (typeof cols[ii2] !== "undefined") {
              cellContent = showdown2.subParser("makeMarkdown.tableCell")(cols[ii2], globals);
            }
            tableArray[r2].push(cellContent);
          }
        }
        var cellSpacesCount = 3;
        for (i2 = 0; i2 < tableArray.length; ++i2) {
          for (ii2 = 0; ii2 < tableArray[i2].length; ++ii2) {
            var strLen = tableArray[i2][ii2].length;
            if (strLen > cellSpacesCount) {
              cellSpacesCount = strLen;
            }
          }
        }
        for (i2 = 0; i2 < tableArray.length; ++i2) {
          for (ii2 = 0; ii2 < tableArray[i2].length; ++ii2) {
            if (i2 === 1) {
              if (tableArray[i2][ii2].slice(-1) === ":") {
                tableArray[i2][ii2] = showdown2.helper.padEnd(tableArray[i2][ii2].slice(-1), cellSpacesCount - 1, "-") + ":";
              } else {
                tableArray[i2][ii2] = showdown2.helper.padEnd(tableArray[i2][ii2], cellSpacesCount, "-");
              }
            } else {
              tableArray[i2][ii2] = showdown2.helper.padEnd(tableArray[i2][ii2], cellSpacesCount);
            }
          }
          txt += "| " + tableArray[i2].join(" | ") + " |\n";
        }
        return txt.trim();
      });
      showdown2.subParser("makeMarkdown.tableCell", function(node2, globals) {
        var txt = "";
        if (!node2.hasChildNodes()) {
          return "";
        }
        var children = node2.childNodes, childrenLength = children.length;
        for (var i2 = 0; i2 < childrenLength; ++i2) {
          txt += showdown2.subParser("makeMarkdown.node")(children[i2], globals, true);
        }
        return txt.trim();
      });
      showdown2.subParser("makeMarkdown.txt", function(node2) {
        var txt = node2.nodeValue;
        txt = txt.replace(/ +/g, " ");
        txt = txt.replace(/¨NBSP;/g, " ");
        txt = showdown2.helper.unescapeHTMLEntities(txt);
        txt = txt.replace(/([*_~|`])/g, "\\$1");
        txt = txt.replace(/^(\s*)>/g, "\\$1>");
        txt = txt.replace(/^#/gm, "\\#");
        txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3");
        txt = txt.replace(/^( {0,3}\d+)\./gm, "$1\\.");
        txt = txt.replace(/^( {0,3})([+-])/gm, "$1\\$2");
        txt = txt.replace(/]([\s]*)\(/g, "\\]$1\\(");
        txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:");
        return txt;
      });
      var root = this;
      if (module.exports) {
        module.exports = showdown2;
      } else {
        root.showdown = showdown2;
      }
    }).call(showdown);
  })(showdown$1);
  return showdown$1.exports;
}
var showdownExports = requireShowdown();
var lib$5 = {};
var Parser = {};
var Tokenizer = {};
var decode_codepoint = {};
const require$$0$1 = {
  "0": 65533,
  "128": 8364,
  "130": 8218,
  "131": 402,
  "132": 8222,
  "133": 8230,
  "134": 8224,
  "135": 8225,
  "136": 710,
  "137": 8240,
  "138": 352,
  "139": 8249,
  "140": 338,
  "142": 381,
  "145": 8216,
  "146": 8217,
  "147": 8220,
  "148": 8221,
  "149": 8226,
  "150": 8211,
  "151": 8212,
  "152": 732,
  "153": 8482,
  "154": 353,
  "155": 8250,
  "156": 339,
  "158": 382,
  "159": 376
};
var hasRequiredDecode_codepoint;
function requireDecode_codepoint() {
  if (hasRequiredDecode_codepoint) return decode_codepoint;
  hasRequiredDecode_codepoint = 1;
  var __importDefault = decode_codepoint && decode_codepoint.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(decode_codepoint, "__esModule", { value: true });
  var decode_json_1 = __importDefault(require$$0$1);
  var fromCodePoint = (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    String.fromCodePoint || function(codePoint) {
      var output = "";
      if (codePoint > 65535) {
        codePoint -= 65536;
        output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      output += String.fromCharCode(codePoint);
      return output;
    }
  );
  function decodeCodePoint(codePoint) {
    if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
      return "�";
    }
    if (codePoint in decode_json_1.default) {
      codePoint = decode_json_1.default[codePoint];
    }
    return fromCodePoint(codePoint);
  }
  decode_codepoint.default = decodeCodePoint;
  return decode_codepoint;
}
const Aacute$1 = "Á";
const aacute$1 = "á";
const Abreve = "Ă";
const abreve = "ă";
const ac = "∾";
const acd = "∿";
const acE = "∾̳";
const Acirc$1 = "Â";
const acirc$1 = "â";
const acute$1 = "´";
const Acy = "А";
const acy = "а";
const AElig$1 = "Æ";
const aelig$1 = "æ";
const af = "⁡";
const Afr = "𝔄";
const afr = "𝔞";
const Agrave$1 = "À";
const agrave$1 = "à";
const alefsym = "ℵ";
const aleph = "ℵ";
const Alpha = "Α";
const alpha = "α";
const Amacr = "Ā";
const amacr = "ā";
const amalg = "⨿";
const amp$2 = "&";
const AMP$1 = "&";
const andand = "⩕";
const And = "⩓";
const and = "∧";
const andd = "⩜";
const andslope = "⩘";
const andv = "⩚";
const ang = "∠";
const ange = "⦤";
const angle = "∠";
const angmsdaa = "⦨";
const angmsdab = "⦩";
const angmsdac = "⦪";
const angmsdad = "⦫";
const angmsdae = "⦬";
const angmsdaf = "⦭";
const angmsdag = "⦮";
const angmsdah = "⦯";
const angmsd = "∡";
const angrt = "∟";
const angrtvb = "⊾";
const angrtvbd = "⦝";
const angsph = "∢";
const angst = "Å";
const angzarr = "⍼";
const Aogon = "Ą";
const aogon = "ą";
const Aopf = "𝔸";
const aopf = "𝕒";
const apacir = "⩯";
const ap = "≈";
const apE = "⩰";
const ape = "≊";
const apid = "≋";
const apos$1 = "'";
const ApplyFunction = "⁡";
const approx = "≈";
const approxeq = "≊";
const Aring$1 = "Å";
const aring$1 = "å";
const Ascr = "𝒜";
const ascr = "𝒶";
const Assign = "≔";
const ast = "*";
const asymp = "≈";
const asympeq = "≍";
const Atilde$1 = "Ã";
const atilde$1 = "ã";
const Auml$1 = "Ä";
const auml$1 = "ä";
const awconint = "∳";
const awint = "⨑";
const backcong = "≌";
const backepsilon = "϶";
const backprime = "‵";
const backsim = "∽";
const backsimeq = "⋍";
const Backslash = "∖";
const Barv = "⫧";
const barvee = "⊽";
const barwed = "⌅";
const Barwed = "⌆";
const barwedge = "⌅";
const bbrk = "⎵";
const bbrktbrk = "⎶";
const bcong = "≌";
const Bcy = "Б";
const bcy = "б";
const bdquo = "„";
const becaus = "∵";
const because = "∵";
const Because = "∵";
const bemptyv = "⦰";
const bepsi = "϶";
const bernou = "ℬ";
const Bernoullis = "ℬ";
const Beta = "Β";
const beta = "β";
const beth = "ℶ";
const between = "≬";
const Bfr = "𝔅";
const bfr = "𝔟";
const bigcap = "⋂";
const bigcirc = "◯";
const bigcup = "⋃";
const bigodot = "⨀";
const bigoplus = "⨁";
const bigotimes = "⨂";
const bigsqcup = "⨆";
const bigstar = "★";
const bigtriangledown = "▽";
const bigtriangleup = "△";
const biguplus = "⨄";
const bigvee = "⋁";
const bigwedge = "⋀";
const bkarow = "⤍";
const blacklozenge = "⧫";
const blacksquare = "▪";
const blacktriangle = "▴";
const blacktriangledown = "▾";
const blacktriangleleft = "◂";
const blacktriangleright = "▸";
const blank = "␣";
const blk12 = "▒";
const blk14 = "░";
const blk34 = "▓";
const block = "█";
const bne = "=⃥";
const bnequiv = "≡⃥";
const bNot = "⫭";
const bnot = "⌐";
const Bopf = "𝔹";
const bopf = "𝕓";
const bot = "⊥";
const bottom = "⊥";
const bowtie = "⋈";
const boxbox = "⧉";
const boxdl = "┐";
const boxdL = "╕";
const boxDl = "╖";
const boxDL = "╗";
const boxdr = "┌";
const boxdR = "╒";
const boxDr = "╓";
const boxDR = "╔";
const boxh = "─";
const boxH = "═";
const boxhd = "┬";
const boxHd = "╤";
const boxhD = "╥";
const boxHD = "╦";
const boxhu = "┴";
const boxHu = "╧";
const boxhU = "╨";
const boxHU = "╩";
const boxminus = "⊟";
const boxplus = "⊞";
const boxtimes = "⊠";
const boxul = "┘";
const boxuL = "╛";
const boxUl = "╜";
const boxUL = "╝";
const boxur = "└";
const boxuR = "╘";
const boxUr = "╙";
const boxUR = "╚";
const boxv = "│";
const boxV = "║";
const boxvh = "┼";
const boxvH = "╪";
const boxVh = "╫";
const boxVH = "╬";
const boxvl = "┤";
const boxvL = "╡";
const boxVl = "╢";
const boxVL = "╣";
const boxvr = "├";
const boxvR = "╞";
const boxVr = "╟";
const boxVR = "╠";
const bprime = "‵";
const breve = "˘";
const Breve = "˘";
const brvbar$1 = "¦";
const bscr = "𝒷";
const Bscr = "ℬ";
const bsemi = "⁏";
const bsim = "∽";
const bsime = "⋍";
const bsolb = "⧅";
const bsol = "\\";
const bsolhsub = "⟈";
const bull = "•";
const bullet = "•";
const bump = "≎";
const bumpE = "⪮";
const bumpe = "≏";
const Bumpeq = "≎";
const bumpeq = "≏";
const Cacute = "Ć";
const cacute = "ć";
const capand = "⩄";
const capbrcup = "⩉";
const capcap = "⩋";
const cap = "∩";
const Cap = "⋒";
const capcup = "⩇";
const capdot = "⩀";
const CapitalDifferentialD = "ⅅ";
const caps = "∩︀";
const caret = "⁁";
const caron = "ˇ";
const Cayleys = "ℭ";
const ccaps = "⩍";
const Ccaron = "Č";
const ccaron = "č";
const Ccedil$1 = "Ç";
const ccedil$1 = "ç";
const Ccirc = "Ĉ";
const ccirc = "ĉ";
const Cconint = "∰";
const ccups = "⩌";
const ccupssm = "⩐";
const Cdot = "Ċ";
const cdot = "ċ";
const cedil$1 = "¸";
const Cedilla = "¸";
const cemptyv = "⦲";
const cent$1 = "¢";
const centerdot = "·";
const CenterDot = "·";
const cfr = "𝔠";
const Cfr = "ℭ";
const CHcy = "Ч";
const chcy = "ч";
const check = "✓";
const checkmark = "✓";
const Chi = "Χ";
const chi = "χ";
const circ = "ˆ";
const circeq = "≗";
const circlearrowleft = "↺";
const circlearrowright = "↻";
const circledast = "⊛";
const circledcirc = "⊚";
const circleddash = "⊝";
const CircleDot = "⊙";
const circledR = "®";
const circledS = "Ⓢ";
const CircleMinus = "⊖";
const CirclePlus = "⊕";
const CircleTimes = "⊗";
const cir = "○";
const cirE = "⧃";
const cire = "≗";
const cirfnint = "⨐";
const cirmid = "⫯";
const cirscir = "⧂";
const ClockwiseContourIntegral = "∲";
const CloseCurlyDoubleQuote = "”";
const CloseCurlyQuote = "’";
const clubs = "♣";
const clubsuit = "♣";
const colon = ":";
const Colon = "∷";
const Colone = "⩴";
const colone = "≔";
const coloneq = "≔";
const comma = ",";
const commat = "@";
const comp = "∁";
const compfn = "∘";
const complement = "∁";
const complexes = "ℂ";
const cong = "≅";
const congdot = "⩭";
const Congruent = "≡";
const conint = "∮";
const Conint = "∯";
const ContourIntegral = "∮";
const copf = "𝕔";
const Copf = "ℂ";
const coprod = "∐";
const Coproduct = "∐";
const copy$1 = "©";
const COPY$1 = "©";
const copysr = "℗";
const CounterClockwiseContourIntegral = "∳";
const crarr = "↵";
const cross = "✗";
const Cross = "⨯";
const Cscr = "𝒞";
const cscr = "𝒸";
const csub = "⫏";
const csube = "⫑";
const csup = "⫐";
const csupe = "⫒";
const ctdot = "⋯";
const cudarrl = "⤸";
const cudarrr = "⤵";
const cuepr = "⋞";
const cuesc = "⋟";
const cularr = "↶";
const cularrp = "⤽";
const cupbrcap = "⩈";
const cupcap = "⩆";
const CupCap = "≍";
const cup = "∪";
const Cup = "⋓";
const cupcup = "⩊";
const cupdot = "⊍";
const cupor = "⩅";
const cups = "∪︀";
const curarr = "↷";
const curarrm = "⤼";
const curlyeqprec = "⋞";
const curlyeqsucc = "⋟";
const curlyvee = "⋎";
const curlywedge = "⋏";
const curren$1 = "¤";
const curvearrowleft = "↶";
const curvearrowright = "↷";
const cuvee = "⋎";
const cuwed = "⋏";
const cwconint = "∲";
const cwint = "∱";
const cylcty = "⌭";
const dagger = "†";
const Dagger = "‡";
const daleth = "ℸ";
const darr = "↓";
const Darr = "↡";
const dArr = "⇓";
const dash = "‐";
const Dashv = "⫤";
const dashv = "⊣";
const dbkarow = "⤏";
const dblac = "˝";
const Dcaron = "Ď";
const dcaron = "ď";
const Dcy = "Д";
const dcy = "д";
const ddagger = "‡";
const ddarr = "⇊";
const DD = "ⅅ";
const dd = "ⅆ";
const DDotrahd = "⤑";
const ddotseq = "⩷";
const deg$1 = "°";
const Del = "∇";
const Delta = "Δ";
const delta = "δ";
const demptyv = "⦱";
const dfisht = "⥿";
const Dfr = "𝔇";
const dfr = "𝔡";
const dHar = "⥥";
const dharl = "⇃";
const dharr = "⇂";
const DiacriticalAcute = "´";
const DiacriticalDot = "˙";
const DiacriticalDoubleAcute = "˝";
const DiacriticalGrave = "`";
const DiacriticalTilde = "˜";
const diam = "⋄";
const diamond = "⋄";
const Diamond = "⋄";
const diamondsuit = "♦";
const diams = "♦";
const die = "¨";
const DifferentialD = "ⅆ";
const digamma = "ϝ";
const disin = "⋲";
const div = "÷";
const divide$1 = "÷";
const divideontimes = "⋇";
const divonx = "⋇";
const DJcy = "Ђ";
const djcy = "ђ";
const dlcorn = "⌞";
const dlcrop = "⌍";
const dollar = "$";
const Dopf = "𝔻";
const dopf = "𝕕";
const Dot = "¨";
const dot = "˙";
const DotDot = "⃜";
const doteq = "≐";
const doteqdot = "≑";
const DotEqual = "≐";
const dotminus = "∸";
const dotplus = "∔";
const dotsquare = "⊡";
const doublebarwedge = "⌆";
const DoubleContourIntegral = "∯";
const DoubleDot = "¨";
const DoubleDownArrow = "⇓";
const DoubleLeftArrow = "⇐";
const DoubleLeftRightArrow = "⇔";
const DoubleLeftTee = "⫤";
const DoubleLongLeftArrow = "⟸";
const DoubleLongLeftRightArrow = "⟺";
const DoubleLongRightArrow = "⟹";
const DoubleRightArrow = "⇒";
const DoubleRightTee = "⊨";
const DoubleUpArrow = "⇑";
const DoubleUpDownArrow = "⇕";
const DoubleVerticalBar = "∥";
const DownArrowBar = "⤓";
const downarrow = "↓";
const DownArrow = "↓";
const Downarrow = "⇓";
const DownArrowUpArrow = "⇵";
const DownBreve = "̑";
const downdownarrows = "⇊";
const downharpoonleft = "⇃";
const downharpoonright = "⇂";
const DownLeftRightVector = "⥐";
const DownLeftTeeVector = "⥞";
const DownLeftVectorBar = "⥖";
const DownLeftVector = "↽";
const DownRightTeeVector = "⥟";
const DownRightVectorBar = "⥗";
const DownRightVector = "⇁";
const DownTeeArrow = "↧";
const DownTee = "⊤";
const drbkarow = "⤐";
const drcorn = "⌟";
const drcrop = "⌌";
const Dscr = "𝒟";
const dscr = "𝒹";
const DScy = "Ѕ";
const dscy = "ѕ";
const dsol = "⧶";
const Dstrok = "Đ";
const dstrok = "đ";
const dtdot = "⋱";
const dtri = "▿";
const dtrif = "▾";
const duarr = "⇵";
const duhar = "⥯";
const dwangle = "⦦";
const DZcy = "Џ";
const dzcy = "џ";
const dzigrarr = "⟿";
const Eacute$1 = "É";
const eacute$1 = "é";
const easter = "⩮";
const Ecaron = "Ě";
const ecaron = "ě";
const Ecirc$1 = "Ê";
const ecirc$1 = "ê";
const ecir = "≖";
const ecolon = "≕";
const Ecy = "Э";
const ecy = "э";
const eDDot = "⩷";
const Edot = "Ė";
const edot = "ė";
const eDot = "≑";
const ee = "ⅇ";
const efDot = "≒";
const Efr = "𝔈";
const efr = "𝔢";
const eg = "⪚";
const Egrave$1 = "È";
const egrave$1 = "è";
const egs = "⪖";
const egsdot = "⪘";
const el = "⪙";
const Element = "∈";
const elinters = "⏧";
const ell = "ℓ";
const els = "⪕";
const elsdot = "⪗";
const Emacr = "Ē";
const emacr = "ē";
const empty = "∅";
const emptyset = "∅";
const EmptySmallSquare = "◻";
const emptyv = "∅";
const EmptyVerySmallSquare = "▫";
const emsp13 = " ";
const emsp14 = " ";
const emsp = " ";
const ENG = "Ŋ";
const eng = "ŋ";
const ensp = " ";
const Eogon = "Ę";
const eogon = "ę";
const Eopf = "𝔼";
const eopf = "𝕖";
const epar = "⋕";
const eparsl = "⧣";
const eplus = "⩱";
const epsi = "ε";
const Epsilon = "Ε";
const epsilon = "ε";
const epsiv = "ϵ";
const eqcirc = "≖";
const eqcolon = "≕";
const eqsim = "≂";
const eqslantgtr = "⪖";
const eqslantless = "⪕";
const Equal = "⩵";
const equals = "=";
const EqualTilde = "≂";
const equest = "≟";
const Equilibrium = "⇌";
const equiv = "≡";
const equivDD = "⩸";
const eqvparsl = "⧥";
const erarr = "⥱";
const erDot = "≓";
const escr = "ℯ";
const Escr = "ℰ";
const esdot = "≐";
const Esim = "⩳";
const esim = "≂";
const Eta = "Η";
const eta = "η";
const ETH$1 = "Ð";
const eth$1 = "ð";
const Euml$1 = "Ë";
const euml$1 = "ë";
const euro = "€";
const excl = "!";
const exist = "∃";
const Exists = "∃";
const expectation = "ℰ";
const exponentiale = "ⅇ";
const ExponentialE = "ⅇ";
const fallingdotseq = "≒";
const Fcy = "Ф";
const fcy = "ф";
const female = "♀";
const ffilig = "ﬃ";
const fflig = "ﬀ";
const ffllig = "ﬄ";
const Ffr = "𝔉";
const ffr = "𝔣";
const filig = "ﬁ";
const FilledSmallSquare = "◼";
const FilledVerySmallSquare = "▪";
const fjlig = "fj";
const flat = "♭";
const fllig = "ﬂ";
const fltns = "▱";
const fnof = "ƒ";
const Fopf = "𝔽";
const fopf = "𝕗";
const forall = "∀";
const ForAll = "∀";
const fork = "⋔";
const forkv = "⫙";
const Fouriertrf = "ℱ";
const fpartint = "⨍";
const frac12$1 = "½";
const frac13 = "⅓";
const frac14$1 = "¼";
const frac15 = "⅕";
const frac16 = "⅙";
const frac18 = "⅛";
const frac23 = "⅔";
const frac25 = "⅖";
const frac34$1 = "¾";
const frac35 = "⅗";
const frac38 = "⅜";
const frac45 = "⅘";
const frac56 = "⅚";
const frac58 = "⅝";
const frac78 = "⅞";
const frasl = "⁄";
const frown = "⌢";
const fscr = "𝒻";
const Fscr = "ℱ";
const gacute = "ǵ";
const Gamma = "Γ";
const gamma = "γ";
const Gammad = "Ϝ";
const gammad = "ϝ";
const gap = "⪆";
const Gbreve = "Ğ";
const gbreve = "ğ";
const Gcedil = "Ģ";
const Gcirc = "Ĝ";
const gcirc = "ĝ";
const Gcy = "Г";
const gcy = "г";
const Gdot = "Ġ";
const gdot = "ġ";
const ge = "≥";
const gE = "≧";
const gEl = "⪌";
const gel = "⋛";
const geq = "≥";
const geqq = "≧";
const geqslant = "⩾";
const gescc = "⪩";
const ges = "⩾";
const gesdot = "⪀";
const gesdoto = "⪂";
const gesdotol = "⪄";
const gesl = "⋛︀";
const gesles = "⪔";
const Gfr = "𝔊";
const gfr = "𝔤";
const gg = "≫";
const Gg = "⋙";
const ggg = "⋙";
const gimel = "ℷ";
const GJcy = "Ѓ";
const gjcy = "ѓ";
const gla = "⪥";
const gl = "≷";
const glE = "⪒";
const glj = "⪤";
const gnap = "⪊";
const gnapprox = "⪊";
const gne = "⪈";
const gnE = "≩";
const gneq = "⪈";
const gneqq = "≩";
const gnsim = "⋧";
const Gopf = "𝔾";
const gopf = "𝕘";
const grave = "`";
const GreaterEqual = "≥";
const GreaterEqualLess = "⋛";
const GreaterFullEqual = "≧";
const GreaterGreater = "⪢";
const GreaterLess = "≷";
const GreaterSlantEqual = "⩾";
const GreaterTilde = "≳";
const Gscr = "𝒢";
const gscr = "ℊ";
const gsim = "≳";
const gsime = "⪎";
const gsiml = "⪐";
const gtcc = "⪧";
const gtcir = "⩺";
const gt$2 = ">";
const GT$1 = ">";
const Gt = "≫";
const gtdot = "⋗";
const gtlPar = "⦕";
const gtquest = "⩼";
const gtrapprox = "⪆";
const gtrarr = "⥸";
const gtrdot = "⋗";
const gtreqless = "⋛";
const gtreqqless = "⪌";
const gtrless = "≷";
const gtrsim = "≳";
const gvertneqq = "≩︀";
const gvnE = "≩︀";
const Hacek = "ˇ";
const hairsp = " ";
const half = "½";
const hamilt = "ℋ";
const HARDcy = "Ъ";
const hardcy = "ъ";
const harrcir = "⥈";
const harr = "↔";
const hArr = "⇔";
const harrw = "↭";
const Hat = "^";
const hbar = "ℏ";
const Hcirc = "Ĥ";
const hcirc = "ĥ";
const hearts = "♥";
const heartsuit = "♥";
const hellip = "…";
const hercon = "⊹";
const hfr = "𝔥";
const Hfr = "ℌ";
const HilbertSpace = "ℋ";
const hksearow = "⤥";
const hkswarow = "⤦";
const hoarr = "⇿";
const homtht = "∻";
const hookleftarrow = "↩";
const hookrightarrow = "↪";
const hopf = "𝕙";
const Hopf = "ℍ";
const horbar = "―";
const HorizontalLine = "─";
const hscr = "𝒽";
const Hscr = "ℋ";
const hslash = "ℏ";
const Hstrok = "Ħ";
const hstrok = "ħ";
const HumpDownHump = "≎";
const HumpEqual = "≏";
const hybull = "⁃";
const hyphen = "‐";
const Iacute$1 = "Í";
const iacute$1 = "í";
const ic = "⁣";
const Icirc$1 = "Î";
const icirc$1 = "î";
const Icy = "И";
const icy = "и";
const Idot = "İ";
const IEcy = "Е";
const iecy = "е";
const iexcl$1 = "¡";
const iff = "⇔";
const ifr = "𝔦";
const Ifr = "ℑ";
const Igrave$1 = "Ì";
const igrave$1 = "ì";
const ii = "ⅈ";
const iiiint = "⨌";
const iiint = "∭";
const iinfin = "⧜";
const iiota = "℩";
const IJlig = "Ĳ";
const ijlig = "ĳ";
const Imacr = "Ī";
const imacr = "ī";
const image = "ℑ";
const ImaginaryI = "ⅈ";
const imagline = "ℐ";
const imagpart = "ℑ";
const imath = "ı";
const Im = "ℑ";
const imof = "⊷";
const imped = "Ƶ";
const Implies = "⇒";
const incare = "℅";
const infin = "∞";
const infintie = "⧝";
const inodot = "ı";
const intcal = "⊺";
const int = "∫";
const Int = "∬";
const integers = "ℤ";
const Integral = "∫";
const intercal = "⊺";
const Intersection = "⋂";
const intlarhk = "⨗";
const intprod = "⨼";
const InvisibleComma = "⁣";
const InvisibleTimes = "⁢";
const IOcy = "Ё";
const iocy = "ё";
const Iogon = "Į";
const iogon = "į";
const Iopf = "𝕀";
const iopf = "𝕚";
const Iota = "Ι";
const iota = "ι";
const iprod = "⨼";
const iquest$1 = "¿";
const iscr = "𝒾";
const Iscr = "ℐ";
const isin = "∈";
const isindot = "⋵";
const isinE = "⋹";
const isins = "⋴";
const isinsv = "⋳";
const isinv = "∈";
const it = "⁢";
const Itilde = "Ĩ";
const itilde = "ĩ";
const Iukcy = "І";
const iukcy = "і";
const Iuml$1 = "Ï";
const iuml$1 = "ï";
const Jcirc = "Ĵ";
const jcirc = "ĵ";
const Jcy = "Й";
const jcy = "й";
const Jfr = "𝔍";
const jfr = "𝔧";
const jmath = "ȷ";
const Jopf = "𝕁";
const jopf = "𝕛";
const Jscr = "𝒥";
const jscr = "𝒿";
const Jsercy = "Ј";
const jsercy = "ј";
const Jukcy = "Є";
const jukcy = "є";
const Kappa = "Κ";
const kappa = "κ";
const kappav = "ϰ";
const Kcedil = "Ķ";
const kcedil = "ķ";
const Kcy = "К";
const kcy = "к";
const Kfr = "𝔎";
const kfr = "𝔨";
const kgreen = "ĸ";
const KHcy = "Х";
const khcy = "х";
const KJcy = "Ќ";
const kjcy = "ќ";
const Kopf = "𝕂";
const kopf = "𝕜";
const Kscr = "𝒦";
const kscr = "𝓀";
const lAarr = "⇚";
const Lacute = "Ĺ";
const lacute = "ĺ";
const laemptyv = "⦴";
const lagran = "ℒ";
const Lambda = "Λ";
const lambda = "λ";
const lang = "⟨";
const Lang = "⟪";
const langd = "⦑";
const langle = "⟨";
const lap = "⪅";
const Laplacetrf = "ℒ";
const laquo$1 = "«";
const larrb = "⇤";
const larrbfs = "⤟";
const larr = "←";
const Larr = "↞";
const lArr = "⇐";
const larrfs = "⤝";
const larrhk = "↩";
const larrlp = "↫";
const larrpl = "⤹";
const larrsim = "⥳";
const larrtl = "↢";
const latail = "⤙";
const lAtail = "⤛";
const lat = "⪫";
const late = "⪭";
const lates = "⪭︀";
const lbarr = "⤌";
const lBarr = "⤎";
const lbbrk = "❲";
const lbrace = "{";
const lbrack = "[";
const lbrke = "⦋";
const lbrksld = "⦏";
const lbrkslu = "⦍";
const Lcaron = "Ľ";
const lcaron = "ľ";
const Lcedil = "Ļ";
const lcedil = "ļ";
const lceil = "⌈";
const lcub = "{";
const Lcy = "Л";
const lcy = "л";
const ldca = "⤶";
const ldquo = "“";
const ldquor = "„";
const ldrdhar = "⥧";
const ldrushar = "⥋";
const ldsh = "↲";
const le = "≤";
const lE = "≦";
const LeftAngleBracket = "⟨";
const LeftArrowBar = "⇤";
const leftarrow = "←";
const LeftArrow = "←";
const Leftarrow = "⇐";
const LeftArrowRightArrow = "⇆";
const leftarrowtail = "↢";
const LeftCeiling = "⌈";
const LeftDoubleBracket = "⟦";
const LeftDownTeeVector = "⥡";
const LeftDownVectorBar = "⥙";
const LeftDownVector = "⇃";
const LeftFloor = "⌊";
const leftharpoondown = "↽";
const leftharpoonup = "↼";
const leftleftarrows = "⇇";
const leftrightarrow = "↔";
const LeftRightArrow = "↔";
const Leftrightarrow = "⇔";
const leftrightarrows = "⇆";
const leftrightharpoons = "⇋";
const leftrightsquigarrow = "↭";
const LeftRightVector = "⥎";
const LeftTeeArrow = "↤";
const LeftTee = "⊣";
const LeftTeeVector = "⥚";
const leftthreetimes = "⋋";
const LeftTriangleBar = "⧏";
const LeftTriangle = "⊲";
const LeftTriangleEqual = "⊴";
const LeftUpDownVector = "⥑";
const LeftUpTeeVector = "⥠";
const LeftUpVectorBar = "⥘";
const LeftUpVector = "↿";
const LeftVectorBar = "⥒";
const LeftVector = "↼";
const lEg = "⪋";
const leg = "⋚";
const leq = "≤";
const leqq = "≦";
const leqslant = "⩽";
const lescc = "⪨";
const les = "⩽";
const lesdot = "⩿";
const lesdoto = "⪁";
const lesdotor = "⪃";
const lesg = "⋚︀";
const lesges = "⪓";
const lessapprox = "⪅";
const lessdot = "⋖";
const lesseqgtr = "⋚";
const lesseqqgtr = "⪋";
const LessEqualGreater = "⋚";
const LessFullEqual = "≦";
const LessGreater = "≶";
const lessgtr = "≶";
const LessLess = "⪡";
const lesssim = "≲";
const LessSlantEqual = "⩽";
const LessTilde = "≲";
const lfisht = "⥼";
const lfloor = "⌊";
const Lfr = "𝔏";
const lfr = "𝔩";
const lg = "≶";
const lgE = "⪑";
const lHar = "⥢";
const lhard = "↽";
const lharu = "↼";
const lharul = "⥪";
const lhblk = "▄";
const LJcy = "Љ";
const ljcy = "љ";
const llarr = "⇇";
const ll = "≪";
const Ll = "⋘";
const llcorner = "⌞";
const Lleftarrow = "⇚";
const llhard = "⥫";
const lltri = "◺";
const Lmidot = "Ŀ";
const lmidot = "ŀ";
const lmoustache = "⎰";
const lmoust = "⎰";
const lnap = "⪉";
const lnapprox = "⪉";
const lne = "⪇";
const lnE = "≨";
const lneq = "⪇";
const lneqq = "≨";
const lnsim = "⋦";
const loang = "⟬";
const loarr = "⇽";
const lobrk = "⟦";
const longleftarrow = "⟵";
const LongLeftArrow = "⟵";
const Longleftarrow = "⟸";
const longleftrightarrow = "⟷";
const LongLeftRightArrow = "⟷";
const Longleftrightarrow = "⟺";
const longmapsto = "⟼";
const longrightarrow = "⟶";
const LongRightArrow = "⟶";
const Longrightarrow = "⟹";
const looparrowleft = "↫";
const looparrowright = "↬";
const lopar = "⦅";
const Lopf = "𝕃";
const lopf = "𝕝";
const loplus = "⨭";
const lotimes = "⨴";
const lowast = "∗";
const lowbar = "_";
const LowerLeftArrow = "↙";
const LowerRightArrow = "↘";
const loz = "◊";
const lozenge = "◊";
const lozf = "⧫";
const lpar = "(";
const lparlt = "⦓";
const lrarr = "⇆";
const lrcorner = "⌟";
const lrhar = "⇋";
const lrhard = "⥭";
const lrm = "‎";
const lrtri = "⊿";
const lsaquo = "‹";
const lscr = "𝓁";
const Lscr = "ℒ";
const lsh = "↰";
const Lsh = "↰";
const lsim = "≲";
const lsime = "⪍";
const lsimg = "⪏";
const lsqb = "[";
const lsquo = "‘";
const lsquor = "‚";
const Lstrok = "Ł";
const lstrok = "ł";
const ltcc = "⪦";
const ltcir = "⩹";
const lt$2 = "<";
const LT$1 = "<";
const Lt = "≪";
const ltdot = "⋖";
const lthree = "⋋";
const ltimes = "⋉";
const ltlarr = "⥶";
const ltquest = "⩻";
const ltri = "◃";
const ltrie = "⊴";
const ltrif = "◂";
const ltrPar = "⦖";
const lurdshar = "⥊";
const luruhar = "⥦";
const lvertneqq = "≨︀";
const lvnE = "≨︀";
const macr$1 = "¯";
const male = "♂";
const malt = "✠";
const maltese = "✠";
const map2 = "↦";
const mapsto = "↦";
const mapstodown = "↧";
const mapstoleft = "↤";
const mapstoup = "↥";
const marker = "▮";
const mcomma = "⨩";
const Mcy = "М";
const mcy = "м";
const mdash = "—";
const mDDot = "∺";
const measuredangle = "∡";
const MediumSpace = " ";
const Mellintrf = "ℳ";
const Mfr = "𝔐";
const mfr = "𝔪";
const mho = "℧";
const micro$1 = "µ";
const midast = "*";
const midcir = "⫰";
const mid = "∣";
const middot$1 = "·";
const minusb = "⊟";
const minus = "−";
const minusd = "∸";
const minusdu = "⨪";
const MinusPlus = "∓";
const mlcp = "⫛";
const mldr = "…";
const mnplus = "∓";
const models = "⊧";
const Mopf = "𝕄";
const mopf = "𝕞";
const mp = "∓";
const mscr = "𝓂";
const Mscr = "ℳ";
const mstpos = "∾";
const Mu = "Μ";
const mu = "μ";
const multimap = "⊸";
const mumap = "⊸";
const nabla = "∇";
const Nacute = "Ń";
const nacute = "ń";
const nang = "∠⃒";
const nap = "≉";
const napE = "⩰̸";
const napid = "≋̸";
const napos = "ŉ";
const napprox = "≉";
const natural = "♮";
const naturals = "ℕ";
const natur = "♮";
const nbsp$1 = " ";
const nbump = "≎̸";
const nbumpe = "≏̸";
const ncap = "⩃";
const Ncaron = "Ň";
const ncaron = "ň";
const Ncedil = "Ņ";
const ncedil = "ņ";
const ncong = "≇";
const ncongdot = "⩭̸";
const ncup = "⩂";
const Ncy = "Н";
const ncy = "н";
const ndash = "–";
const nearhk = "⤤";
const nearr = "↗";
const neArr = "⇗";
const nearrow = "↗";
const ne = "≠";
const nedot = "≐̸";
const NegativeMediumSpace = "​";
const NegativeThickSpace = "​";
const NegativeThinSpace = "​";
const NegativeVeryThinSpace = "​";
const nequiv = "≢";
const nesear = "⤨";
const nesim = "≂̸";
const NestedGreaterGreater = "≫";
const NestedLessLess = "≪";
const NewLine = "\n";
const nexist = "∄";
const nexists = "∄";
const Nfr = "𝔑";
const nfr = "𝔫";
const ngE = "≧̸";
const nge = "≱";
const ngeq = "≱";
const ngeqq = "≧̸";
const ngeqslant = "⩾̸";
const nges = "⩾̸";
const nGg = "⋙̸";
const ngsim = "≵";
const nGt = "≫⃒";
const ngt = "≯";
const ngtr = "≯";
const nGtv = "≫̸";
const nharr = "↮";
const nhArr = "⇎";
const nhpar = "⫲";
const ni = "∋";
const nis = "⋼";
const nisd = "⋺";
const niv = "∋";
const NJcy = "Њ";
const njcy = "њ";
const nlarr = "↚";
const nlArr = "⇍";
const nldr = "‥";
const nlE = "≦̸";
const nle = "≰";
const nleftarrow = "↚";
const nLeftarrow = "⇍";
const nleftrightarrow = "↮";
const nLeftrightarrow = "⇎";
const nleq = "≰";
const nleqq = "≦̸";
const nleqslant = "⩽̸";
const nles = "⩽̸";
const nless = "≮";
const nLl = "⋘̸";
const nlsim = "≴";
const nLt = "≪⃒";
const nlt = "≮";
const nltri = "⋪";
const nltrie = "⋬";
const nLtv = "≪̸";
const nmid = "∤";
const NoBreak = "⁠";
const NonBreakingSpace = " ";
const nopf = "𝕟";
const Nopf = "ℕ";
const Not = "⫬";
const not$1 = "¬";
const NotCongruent = "≢";
const NotCupCap = "≭";
const NotDoubleVerticalBar = "∦";
const NotElement = "∉";
const NotEqual = "≠";
const NotEqualTilde = "≂̸";
const NotExists = "∄";
const NotGreater = "≯";
const NotGreaterEqual = "≱";
const NotGreaterFullEqual = "≧̸";
const NotGreaterGreater = "≫̸";
const NotGreaterLess = "≹";
const NotGreaterSlantEqual = "⩾̸";
const NotGreaterTilde = "≵";
const NotHumpDownHump = "≎̸";
const NotHumpEqual = "≏̸";
const notin = "∉";
const notindot = "⋵̸";
const notinE = "⋹̸";
const notinva = "∉";
const notinvb = "⋷";
const notinvc = "⋶";
const NotLeftTriangleBar = "⧏̸";
const NotLeftTriangle = "⋪";
const NotLeftTriangleEqual = "⋬";
const NotLess = "≮";
const NotLessEqual = "≰";
const NotLessGreater = "≸";
const NotLessLess = "≪̸";
const NotLessSlantEqual = "⩽̸";
const NotLessTilde = "≴";
const NotNestedGreaterGreater = "⪢̸";
const NotNestedLessLess = "⪡̸";
const notni = "∌";
const notniva = "∌";
const notnivb = "⋾";
const notnivc = "⋽";
const NotPrecedes = "⊀";
const NotPrecedesEqual = "⪯̸";
const NotPrecedesSlantEqual = "⋠";
const NotReverseElement = "∌";
const NotRightTriangleBar = "⧐̸";
const NotRightTriangle = "⋫";
const NotRightTriangleEqual = "⋭";
const NotSquareSubset = "⊏̸";
const NotSquareSubsetEqual = "⋢";
const NotSquareSuperset = "⊐̸";
const NotSquareSupersetEqual = "⋣";
const NotSubset = "⊂⃒";
const NotSubsetEqual = "⊈";
const NotSucceeds = "⊁";
const NotSucceedsEqual = "⪰̸";
const NotSucceedsSlantEqual = "⋡";
const NotSucceedsTilde = "≿̸";
const NotSuperset = "⊃⃒";
const NotSupersetEqual = "⊉";
const NotTilde = "≁";
const NotTildeEqual = "≄";
const NotTildeFullEqual = "≇";
const NotTildeTilde = "≉";
const NotVerticalBar = "∤";
const nparallel = "∦";
const npar = "∦";
const nparsl = "⫽⃥";
const npart = "∂̸";
const npolint = "⨔";
const npr = "⊀";
const nprcue = "⋠";
const nprec = "⊀";
const npreceq = "⪯̸";
const npre = "⪯̸";
const nrarrc = "⤳̸";
const nrarr = "↛";
const nrArr = "⇏";
const nrarrw = "↝̸";
const nrightarrow = "↛";
const nRightarrow = "⇏";
const nrtri = "⋫";
const nrtrie = "⋭";
const nsc = "⊁";
const nsccue = "⋡";
const nsce = "⪰̸";
const Nscr = "𝒩";
const nscr = "𝓃";
const nshortmid = "∤";
const nshortparallel = "∦";
const nsim = "≁";
const nsime = "≄";
const nsimeq = "≄";
const nsmid = "∤";
const nspar = "∦";
const nsqsube = "⋢";
const nsqsupe = "⋣";
const nsub = "⊄";
const nsubE = "⫅̸";
const nsube = "⊈";
const nsubset = "⊂⃒";
const nsubseteq = "⊈";
const nsubseteqq = "⫅̸";
const nsucc = "⊁";
const nsucceq = "⪰̸";
const nsup = "⊅";
const nsupE = "⫆̸";
const nsupe = "⊉";
const nsupset = "⊃⃒";
const nsupseteq = "⊉";
const nsupseteqq = "⫆̸";
const ntgl = "≹";
const Ntilde$1 = "Ñ";
const ntilde$1 = "ñ";
const ntlg = "≸";
const ntriangleleft = "⋪";
const ntrianglelefteq = "⋬";
const ntriangleright = "⋫";
const ntrianglerighteq = "⋭";
const Nu = "Ν";
const nu = "ν";
const num = "#";
const numero = "№";
const numsp = " ";
const nvap = "≍⃒";
const nvdash = "⊬";
const nvDash = "⊭";
const nVdash = "⊮";
const nVDash = "⊯";
const nvge = "≥⃒";
const nvgt = ">⃒";
const nvHarr = "⤄";
const nvinfin = "⧞";
const nvlArr = "⤂";
const nvle = "≤⃒";
const nvlt = "<⃒";
const nvltrie = "⊴⃒";
const nvrArr = "⤃";
const nvrtrie = "⊵⃒";
const nvsim = "∼⃒";
const nwarhk = "⤣";
const nwarr = "↖";
const nwArr = "⇖";
const nwarrow = "↖";
const nwnear = "⤧";
const Oacute$1 = "Ó";
const oacute$1 = "ó";
const oast = "⊛";
const Ocirc$1 = "Ô";
const ocirc$1 = "ô";
const ocir = "⊚";
const Ocy = "О";
const ocy = "о";
const odash = "⊝";
const Odblac = "Ő";
const odblac = "ő";
const odiv = "⨸";
const odot = "⊙";
const odsold = "⦼";
const OElig = "Œ";
const oelig = "œ";
const ofcir = "⦿";
const Ofr = "𝔒";
const ofr = "𝔬";
const ogon = "˛";
const Ograve$1 = "Ò";
const ograve$1 = "ò";
const ogt = "⧁";
const ohbar = "⦵";
const ohm = "Ω";
const oint = "∮";
const olarr = "↺";
const olcir = "⦾";
const olcross = "⦻";
const oline = "‾";
const olt = "⧀";
const Omacr = "Ō";
const omacr = "ō";
const Omega = "Ω";
const omega = "ω";
const Omicron = "Ο";
const omicron = "ο";
const omid = "⦶";
const ominus = "⊖";
const Oopf = "𝕆";
const oopf = "𝕠";
const opar = "⦷";
const OpenCurlyDoubleQuote = "“";
const OpenCurlyQuote = "‘";
const operp = "⦹";
const oplus = "⊕";
const orarr = "↻";
const Or = "⩔";
const or = "∨";
const ord = "⩝";
const order = "ℴ";
const orderof = "ℴ";
const ordf$1 = "ª";
const ordm$1 = "º";
const origof = "⊶";
const oror = "⩖";
const orslope = "⩗";
const orv = "⩛";
const oS = "Ⓢ";
const Oscr = "𝒪";
const oscr = "ℴ";
const Oslash$1 = "Ø";
const oslash$1 = "ø";
const osol = "⊘";
const Otilde$1 = "Õ";
const otilde$1 = "õ";
const otimesas = "⨶";
const Otimes = "⨷";
const otimes = "⊗";
const Ouml$1 = "Ö";
const ouml$1 = "ö";
const ovbar = "⌽";
const OverBar = "‾";
const OverBrace = "⏞";
const OverBracket = "⎴";
const OverParenthesis = "⏜";
const para$1 = "¶";
const parallel = "∥";
const par = "∥";
const parsim = "⫳";
const parsl = "⫽";
const part = "∂";
const PartialD = "∂";
const Pcy = "П";
const pcy = "п";
const percnt = "%";
const period = ".";
const permil = "‰";
const perp = "⊥";
const pertenk = "‱";
const Pfr = "𝔓";
const pfr = "𝔭";
const Phi = "Φ";
const phi = "φ";
const phiv = "ϕ";
const phmmat = "ℳ";
const phone = "☎";
const Pi = "Π";
const pi = "π";
const pitchfork = "⋔";
const piv = "ϖ";
const planck = "ℏ";
const planckh = "ℎ";
const plankv = "ℏ";
const plusacir = "⨣";
const plusb = "⊞";
const pluscir = "⨢";
const plus = "+";
const plusdo = "∔";
const plusdu = "⨥";
const pluse = "⩲";
const PlusMinus = "±";
const plusmn$1 = "±";
const plussim = "⨦";
const plustwo = "⨧";
const pm = "±";
const Poincareplane = "ℌ";
const pointint = "⨕";
const popf = "𝕡";
const Popf = "ℙ";
const pound$1 = "£";
const prap = "⪷";
const Pr = "⪻";
const pr = "≺";
const prcue = "≼";
const precapprox = "⪷";
const prec = "≺";
const preccurlyeq = "≼";
const Precedes = "≺";
const PrecedesEqual = "⪯";
const PrecedesSlantEqual = "≼";
const PrecedesTilde = "≾";
const preceq = "⪯";
const precnapprox = "⪹";
const precneqq = "⪵";
const precnsim = "⋨";
const pre = "⪯";
const prE = "⪳";
const precsim = "≾";
const prime = "′";
const Prime = "″";
const primes = "ℙ";
const prnap = "⪹";
const prnE = "⪵";
const prnsim = "⋨";
const prod = "∏";
const Product = "∏";
const profalar = "⌮";
const profline = "⌒";
const profsurf = "⌓";
const prop = "∝";
const Proportional = "∝";
const Proportion = "∷";
const propto = "∝";
const prsim = "≾";
const prurel = "⊰";
const Pscr = "𝒫";
const pscr = "𝓅";
const Psi = "Ψ";
const psi = "ψ";
const puncsp = " ";
const Qfr = "𝔔";
const qfr = "𝔮";
const qint = "⨌";
const qopf = "𝕢";
const Qopf = "ℚ";
const qprime = "⁗";
const Qscr = "𝒬";
const qscr = "𝓆";
const quaternions = "ℍ";
const quatint = "⨖";
const quest = "?";
const questeq = "≟";
const quot$2 = '"';
const QUOT$1 = '"';
const rAarr = "⇛";
const race = "∽̱";
const Racute = "Ŕ";
const racute = "ŕ";
const radic = "√";
const raemptyv = "⦳";
const rang = "⟩";
const Rang = "⟫";
const rangd = "⦒";
const range = "⦥";
const rangle = "⟩";
const raquo$1 = "»";
const rarrap = "⥵";
const rarrb = "⇥";
const rarrbfs = "⤠";
const rarrc = "⤳";
const rarr = "→";
const Rarr = "↠";
const rArr = "⇒";
const rarrfs = "⤞";
const rarrhk = "↪";
const rarrlp = "↬";
const rarrpl = "⥅";
const rarrsim = "⥴";
const Rarrtl = "⤖";
const rarrtl = "↣";
const rarrw = "↝";
const ratail = "⤚";
const rAtail = "⤜";
const ratio = "∶";
const rationals = "ℚ";
const rbarr = "⤍";
const rBarr = "⤏";
const RBarr = "⤐";
const rbbrk = "❳";
const rbrace = "}";
const rbrack = "]";
const rbrke = "⦌";
const rbrksld = "⦎";
const rbrkslu = "⦐";
const Rcaron = "Ř";
const rcaron = "ř";
const Rcedil = "Ŗ";
const rcedil = "ŗ";
const rceil = "⌉";
const rcub = "}";
const Rcy = "Р";
const rcy = "р";
const rdca = "⤷";
const rdldhar = "⥩";
const rdquo = "”";
const rdquor = "”";
const rdsh = "↳";
const real = "ℜ";
const realine = "ℛ";
const realpart = "ℜ";
const reals = "ℝ";
const Re = "ℜ";
const rect = "▭";
const reg$1 = "®";
const REG$1 = "®";
const ReverseElement = "∋";
const ReverseEquilibrium = "⇋";
const ReverseUpEquilibrium = "⥯";
const rfisht = "⥽";
const rfloor = "⌋";
const rfr = "𝔯";
const Rfr = "ℜ";
const rHar = "⥤";
const rhard = "⇁";
const rharu = "⇀";
const rharul = "⥬";
const Rho = "Ρ";
const rho = "ρ";
const rhov = "ϱ";
const RightAngleBracket = "⟩";
const RightArrowBar = "⇥";
const rightarrow = "→";
const RightArrow = "→";
const Rightarrow = "⇒";
const RightArrowLeftArrow = "⇄";
const rightarrowtail = "↣";
const RightCeiling = "⌉";
const RightDoubleBracket = "⟧";
const RightDownTeeVector = "⥝";
const RightDownVectorBar = "⥕";
const RightDownVector = "⇂";
const RightFloor = "⌋";
const rightharpoondown = "⇁";
const rightharpoonup = "⇀";
const rightleftarrows = "⇄";
const rightleftharpoons = "⇌";
const rightrightarrows = "⇉";
const rightsquigarrow = "↝";
const RightTeeArrow = "↦";
const RightTee = "⊢";
const RightTeeVector = "⥛";
const rightthreetimes = "⋌";
const RightTriangleBar = "⧐";
const RightTriangle = "⊳";
const RightTriangleEqual = "⊵";
const RightUpDownVector = "⥏";
const RightUpTeeVector = "⥜";
const RightUpVectorBar = "⥔";
const RightUpVector = "↾";
const RightVectorBar = "⥓";
const RightVector = "⇀";
const ring = "˚";
const risingdotseq = "≓";
const rlarr = "⇄";
const rlhar = "⇌";
const rlm = "‏";
const rmoustache = "⎱";
const rmoust = "⎱";
const rnmid = "⫮";
const roang = "⟭";
const roarr = "⇾";
const robrk = "⟧";
const ropar = "⦆";
const ropf = "𝕣";
const Ropf = "ℝ";
const roplus = "⨮";
const rotimes = "⨵";
const RoundImplies = "⥰";
const rpar = ")";
const rpargt = "⦔";
const rppolint = "⨒";
const rrarr = "⇉";
const Rrightarrow = "⇛";
const rsaquo = "›";
const rscr = "𝓇";
const Rscr = "ℛ";
const rsh = "↱";
const Rsh = "↱";
const rsqb = "]";
const rsquo = "’";
const rsquor = "’";
const rthree = "⋌";
const rtimes = "⋊";
const rtri = "▹";
const rtrie = "⊵";
const rtrif = "▸";
const rtriltri = "⧎";
const RuleDelayed = "⧴";
const ruluhar = "⥨";
const rx = "℞";
const Sacute = "Ś";
const sacute = "ś";
const sbquo = "‚";
const scap = "⪸";
const Scaron = "Š";
const scaron = "š";
const Sc = "⪼";
const sc = "≻";
const sccue = "≽";
const sce = "⪰";
const scE = "⪴";
const Scedil = "Ş";
const scedil = "ş";
const Scirc = "Ŝ";
const scirc = "ŝ";
const scnap = "⪺";
const scnE = "⪶";
const scnsim = "⋩";
const scpolint = "⨓";
const scsim = "≿";
const Scy = "С";
const scy = "с";
const sdotb = "⊡";
const sdot = "⋅";
const sdote = "⩦";
const searhk = "⤥";
const searr = "↘";
const seArr = "⇘";
const searrow = "↘";
const sect$1 = "§";
const semi = ";";
const seswar = "⤩";
const setminus = "∖";
const setmn = "∖";
const sext = "✶";
const Sfr = "𝔖";
const sfr = "𝔰";
const sfrown = "⌢";
const sharp = "♯";
const SHCHcy = "Щ";
const shchcy = "щ";
const SHcy = "Ш";
const shcy = "ш";
const ShortDownArrow = "↓";
const ShortLeftArrow = "←";
const shortmid = "∣";
const shortparallel = "∥";
const ShortRightArrow = "→";
const ShortUpArrow = "↑";
const shy$1 = "­";
const Sigma = "Σ";
const sigma = "σ";
const sigmaf = "ς";
const sigmav = "ς";
const sim = "∼";
const simdot = "⩪";
const sime = "≃";
const simeq = "≃";
const simg = "⪞";
const simgE = "⪠";
const siml = "⪝";
const simlE = "⪟";
const simne = "≆";
const simplus = "⨤";
const simrarr = "⥲";
const slarr = "←";
const SmallCircle = "∘";
const smallsetminus = "∖";
const smashp = "⨳";
const smeparsl = "⧤";
const smid = "∣";
const smile = "⌣";
const smt = "⪪";
const smte = "⪬";
const smtes = "⪬︀";
const SOFTcy = "Ь";
const softcy = "ь";
const solbar = "⌿";
const solb = "⧄";
const sol = "/";
const Sopf = "𝕊";
const sopf = "𝕤";
const spades = "♠";
const spadesuit = "♠";
const spar = "∥";
const sqcap = "⊓";
const sqcaps = "⊓︀";
const sqcup = "⊔";
const sqcups = "⊔︀";
const Sqrt = "√";
const sqsub = "⊏";
const sqsube = "⊑";
const sqsubset = "⊏";
const sqsubseteq = "⊑";
const sqsup = "⊐";
const sqsupe = "⊒";
const sqsupset = "⊐";
const sqsupseteq = "⊒";
const square = "□";
const Square = "□";
const SquareIntersection = "⊓";
const SquareSubset = "⊏";
const SquareSubsetEqual = "⊑";
const SquareSuperset = "⊐";
const SquareSupersetEqual = "⊒";
const SquareUnion = "⊔";
const squarf = "▪";
const squ = "□";
const squf = "▪";
const srarr = "→";
const Sscr = "𝒮";
const sscr = "𝓈";
const ssetmn = "∖";
const ssmile = "⌣";
const sstarf = "⋆";
const Star = "⋆";
const star = "☆";
const starf = "★";
const straightepsilon = "ϵ";
const straightphi = "ϕ";
const strns = "¯";
const sub = "⊂";
const Sub = "⋐";
const subdot = "⪽";
const subE = "⫅";
const sube = "⊆";
const subedot = "⫃";
const submult = "⫁";
const subnE = "⫋";
const subne = "⊊";
const subplus = "⪿";
const subrarr = "⥹";
const subset = "⊂";
const Subset = "⋐";
const subseteq = "⊆";
const subseteqq = "⫅";
const SubsetEqual = "⊆";
const subsetneq = "⊊";
const subsetneqq = "⫋";
const subsim = "⫇";
const subsub = "⫕";
const subsup = "⫓";
const succapprox = "⪸";
const succ = "≻";
const succcurlyeq = "≽";
const Succeeds = "≻";
const SucceedsEqual = "⪰";
const SucceedsSlantEqual = "≽";
const SucceedsTilde = "≿";
const succeq = "⪰";
const succnapprox = "⪺";
const succneqq = "⪶";
const succnsim = "⋩";
const succsim = "≿";
const SuchThat = "∋";
const sum = "∑";
const Sum = "∑";
const sung = "♪";
const sup1$1 = "¹";
const sup2$1 = "²";
const sup3$1 = "³";
const sup = "⊃";
const Sup = "⋑";
const supdot = "⪾";
const supdsub = "⫘";
const supE = "⫆";
const supe = "⊇";
const supedot = "⫄";
const Superset = "⊃";
const SupersetEqual = "⊇";
const suphsol = "⟉";
const suphsub = "⫗";
const suplarr = "⥻";
const supmult = "⫂";
const supnE = "⫌";
const supne = "⊋";
const supplus = "⫀";
const supset = "⊃";
const Supset = "⋑";
const supseteq = "⊇";
const supseteqq = "⫆";
const supsetneq = "⊋";
const supsetneqq = "⫌";
const supsim = "⫈";
const supsub = "⫔";
const supsup = "⫖";
const swarhk = "⤦";
const swarr = "↙";
const swArr = "⇙";
const swarrow = "↙";
const swnwar = "⤪";
const szlig$1 = "ß";
const Tab = "	";
const target = "⌖";
const Tau = "Τ";
const tau = "τ";
const tbrk = "⎴";
const Tcaron = "Ť";
const tcaron = "ť";
const Tcedil = "Ţ";
const tcedil = "ţ";
const Tcy = "Т";
const tcy = "т";
const tdot = "⃛";
const telrec = "⌕";
const Tfr = "𝔗";
const tfr = "𝔱";
const there4 = "∴";
const therefore = "∴";
const Therefore = "∴";
const Theta = "Θ";
const theta = "θ";
const thetasym = "ϑ";
const thetav = "ϑ";
const thickapprox = "≈";
const thicksim = "∼";
const ThickSpace = "  ";
const ThinSpace = " ";
const thinsp = " ";
const thkap = "≈";
const thksim = "∼";
const THORN$1 = "Þ";
const thorn$1 = "þ";
const tilde = "˜";
const Tilde = "∼";
const TildeEqual = "≃";
const TildeFullEqual = "≅";
const TildeTilde = "≈";
const timesbar = "⨱";
const timesb = "⊠";
const times$1 = "×";
const timesd = "⨰";
const tint = "∭";
const toea = "⤨";
const topbot = "⌶";
const topcir = "⫱";
const top = "⊤";
const Topf = "𝕋";
const topf = "𝕥";
const topfork = "⫚";
const tosa = "⤩";
const tprime = "‴";
const trade = "™";
const TRADE = "™";
const triangle = "▵";
const triangledown = "▿";
const triangleleft = "◃";
const trianglelefteq = "⊴";
const triangleq = "≜";
const triangleright = "▹";
const trianglerighteq = "⊵";
const tridot = "◬";
const trie = "≜";
const triminus = "⨺";
const TripleDot = "⃛";
const triplus = "⨹";
const trisb = "⧍";
const tritime = "⨻";
const trpezium = "⏢";
const Tscr = "𝒯";
const tscr = "𝓉";
const TScy = "Ц";
const tscy = "ц";
const TSHcy = "Ћ";
const tshcy = "ћ";
const Tstrok = "Ŧ";
const tstrok = "ŧ";
const twixt = "≬";
const twoheadleftarrow = "↞";
const twoheadrightarrow = "↠";
const Uacute$1 = "Ú";
const uacute$1 = "ú";
const uarr = "↑";
const Uarr = "↟";
const uArr = "⇑";
const Uarrocir = "⥉";
const Ubrcy = "Ў";
const ubrcy = "ў";
const Ubreve = "Ŭ";
const ubreve = "ŭ";
const Ucirc$1 = "Û";
const ucirc$1 = "û";
const Ucy = "У";
const ucy = "у";
const udarr = "⇅";
const Udblac = "Ű";
const udblac = "ű";
const udhar = "⥮";
const ufisht = "⥾";
const Ufr = "𝔘";
const ufr = "𝔲";
const Ugrave$1 = "Ù";
const ugrave$1 = "ù";
const uHar = "⥣";
const uharl = "↿";
const uharr = "↾";
const uhblk = "▀";
const ulcorn = "⌜";
const ulcorner = "⌜";
const ulcrop = "⌏";
const ultri = "◸";
const Umacr = "Ū";
const umacr = "ū";
const uml$1 = "¨";
const UnderBar = "_";
const UnderBrace = "⏟";
const UnderBracket = "⎵";
const UnderParenthesis = "⏝";
const Union = "⋃";
const UnionPlus = "⊎";
const Uogon = "Ų";
const uogon = "ų";
const Uopf = "𝕌";
const uopf = "𝕦";
const UpArrowBar = "⤒";
const uparrow = "↑";
const UpArrow = "↑";
const Uparrow = "⇑";
const UpArrowDownArrow = "⇅";
const updownarrow = "↕";
const UpDownArrow = "↕";
const Updownarrow = "⇕";
const UpEquilibrium = "⥮";
const upharpoonleft = "↿";
const upharpoonright = "↾";
const uplus = "⊎";
const UpperLeftArrow = "↖";
const UpperRightArrow = "↗";
const upsi = "υ";
const Upsi = "ϒ";
const upsih = "ϒ";
const Upsilon = "Υ";
const upsilon = "υ";
const UpTeeArrow = "↥";
const UpTee = "⊥";
const upuparrows = "⇈";
const urcorn = "⌝";
const urcorner = "⌝";
const urcrop = "⌎";
const Uring = "Ů";
const uring = "ů";
const urtri = "◹";
const Uscr = "𝒰";
const uscr = "𝓊";
const utdot = "⋰";
const Utilde = "Ũ";
const utilde = "ũ";
const utri = "▵";
const utrif = "▴";
const uuarr = "⇈";
const Uuml$1 = "Ü";
const uuml$1 = "ü";
const uwangle = "⦧";
const vangrt = "⦜";
const varepsilon = "ϵ";
const varkappa = "ϰ";
const varnothing = "∅";
const varphi = "ϕ";
const varpi = "ϖ";
const varpropto = "∝";
const varr = "↕";
const vArr = "⇕";
const varrho = "ϱ";
const varsigma = "ς";
const varsubsetneq = "⊊︀";
const varsubsetneqq = "⫋︀";
const varsupsetneq = "⊋︀";
const varsupsetneqq = "⫌︀";
const vartheta = "ϑ";
const vartriangleleft = "⊲";
const vartriangleright = "⊳";
const vBar = "⫨";
const Vbar = "⫫";
const vBarv = "⫩";
const Vcy = "В";
const vcy = "в";
const vdash = "⊢";
const vDash = "⊨";
const Vdash = "⊩";
const VDash = "⊫";
const Vdashl = "⫦";
const veebar = "⊻";
const vee = "∨";
const Vee = "⋁";
const veeeq = "≚";
const vellip = "⋮";
const verbar = "|";
const Verbar = "‖";
const vert = "|";
const Vert = "‖";
const VerticalBar = "∣";
const VerticalLine = "|";
const VerticalSeparator = "❘";
const VerticalTilde = "≀";
const VeryThinSpace = " ";
const Vfr = "𝔙";
const vfr = "𝔳";
const vltri = "⊲";
const vnsub = "⊂⃒";
const vnsup = "⊃⃒";
const Vopf = "𝕍";
const vopf = "𝕧";
const vprop = "∝";
const vrtri = "⊳";
const Vscr = "𝒱";
const vscr = "𝓋";
const vsubnE = "⫋︀";
const vsubne = "⊊︀";
const vsupnE = "⫌︀";
const vsupne = "⊋︀";
const Vvdash = "⊪";
const vzigzag = "⦚";
const Wcirc = "Ŵ";
const wcirc = "ŵ";
const wedbar = "⩟";
const wedge = "∧";
const Wedge = "⋀";
const wedgeq = "≙";
const weierp = "℘";
const Wfr = "𝔚";
const wfr = "𝔴";
const Wopf = "𝕎";
const wopf = "𝕨";
const wp = "℘";
const wr = "≀";
const wreath = "≀";
const Wscr = "𝒲";
const wscr = "𝓌";
const xcap = "⋂";
const xcirc = "◯";
const xcup = "⋃";
const xdtri = "▽";
const Xfr = "𝔛";
const xfr = "𝔵";
const xharr = "⟷";
const xhArr = "⟺";
const Xi = "Ξ";
const xi = "ξ";
const xlarr = "⟵";
const xlArr = "⟸";
const xmap = "⟼";
const xnis = "⋻";
const xodot = "⨀";
const Xopf = "𝕏";
const xopf = "𝕩";
const xoplus = "⨁";
const xotime = "⨂";
const xrarr = "⟶";
const xrArr = "⟹";
const Xscr = "𝒳";
const xscr = "𝓍";
const xsqcup = "⨆";
const xuplus = "⨄";
const xutri = "△";
const xvee = "⋁";
const xwedge = "⋀";
const Yacute$1 = "Ý";
const yacute$1 = "ý";
const YAcy = "Я";
const yacy = "я";
const Ycirc = "Ŷ";
const ycirc = "ŷ";
const Ycy = "Ы";
const ycy = "ы";
const yen$1 = "¥";
const Yfr = "𝔜";
const yfr = "𝔶";
const YIcy = "Ї";
const yicy = "ї";
const Yopf = "𝕐";
const yopf = "𝕪";
const Yscr = "𝒴";
const yscr = "𝓎";
const YUcy = "Ю";
const yucy = "ю";
const yuml$1 = "ÿ";
const Yuml = "Ÿ";
const Zacute = "Ź";
const zacute = "ź";
const Zcaron = "Ž";
const zcaron = "ž";
const Zcy = "З";
const zcy = "з";
const Zdot = "Ż";
const zdot = "ż";
const zeetrf = "ℨ";
const ZeroWidthSpace = "​";
const Zeta = "Ζ";
const zeta = "ζ";
const zfr = "𝔷";
const Zfr = "ℨ";
const ZHcy = "Ж";
const zhcy = "ж";
const zigrarr = "⇝";
const zopf = "𝕫";
const Zopf = "ℤ";
const Zscr = "𝒵";
const zscr = "𝓏";
const zwj = "‍";
const zwnj = "‌";
const require$$1$1 = {
  Aacute: Aacute$1,
  aacute: aacute$1,
  Abreve,
  abreve,
  ac,
  acd,
  acE,
  Acirc: Acirc$1,
  acirc: acirc$1,
  acute: acute$1,
  Acy,
  acy,
  AElig: AElig$1,
  aelig: aelig$1,
  af,
  Afr,
  afr,
  Agrave: Agrave$1,
  agrave: agrave$1,
  alefsym,
  aleph,
  Alpha,
  alpha,
  Amacr,
  amacr,
  amalg,
  amp: amp$2,
  AMP: AMP$1,
  andand,
  And,
  and,
  andd,
  andslope,
  andv,
  ang,
  ange,
  angle,
  angmsdaa,
  angmsdab,
  angmsdac,
  angmsdad,
  angmsdae,
  angmsdaf,
  angmsdag,
  angmsdah,
  angmsd,
  angrt,
  angrtvb,
  angrtvbd,
  angsph,
  angst,
  angzarr,
  Aogon,
  aogon,
  Aopf,
  aopf,
  apacir,
  ap,
  apE,
  ape,
  apid,
  apos: apos$1,
  ApplyFunction,
  approx,
  approxeq,
  Aring: Aring$1,
  aring: aring$1,
  Ascr,
  ascr,
  Assign,
  ast,
  asymp,
  asympeq,
  Atilde: Atilde$1,
  atilde: atilde$1,
  Auml: Auml$1,
  auml: auml$1,
  awconint,
  awint,
  backcong,
  backepsilon,
  backprime,
  backsim,
  backsimeq,
  Backslash,
  Barv,
  barvee,
  barwed,
  Barwed,
  barwedge,
  bbrk,
  bbrktbrk,
  bcong,
  Bcy,
  bcy,
  bdquo,
  becaus,
  because,
  Because,
  bemptyv,
  bepsi,
  bernou,
  Bernoullis,
  Beta,
  beta,
  beth,
  between,
  Bfr,
  bfr,
  bigcap,
  bigcirc,
  bigcup,
  bigodot,
  bigoplus,
  bigotimes,
  bigsqcup,
  bigstar,
  bigtriangledown,
  bigtriangleup,
  biguplus,
  bigvee,
  bigwedge,
  bkarow,
  blacklozenge,
  blacksquare,
  blacktriangle,
  blacktriangledown,
  blacktriangleleft,
  blacktriangleright,
  blank,
  blk12,
  blk14,
  blk34,
  block,
  bne,
  bnequiv,
  bNot,
  bnot,
  Bopf,
  bopf,
  bot,
  bottom,
  bowtie,
  boxbox,
  boxdl,
  boxdL,
  boxDl,
  boxDL,
  boxdr,
  boxdR,
  boxDr,
  boxDR,
  boxh,
  boxH,
  boxhd,
  boxHd,
  boxhD,
  boxHD,
  boxhu,
  boxHu,
  boxhU,
  boxHU,
  boxminus,
  boxplus,
  boxtimes,
  boxul,
  boxuL,
  boxUl,
  boxUL,
  boxur,
  boxuR,
  boxUr,
  boxUR,
  boxv,
  boxV,
  boxvh,
  boxvH,
  boxVh,
  boxVH,
  boxvl,
  boxvL,
  boxVl,
  boxVL,
  boxvr,
  boxvR,
  boxVr,
  boxVR,
  bprime,
  breve,
  Breve,
  brvbar: brvbar$1,
  bscr,
  Bscr,
  bsemi,
  bsim,
  bsime,
  bsolb,
  bsol,
  bsolhsub,
  bull,
  bullet,
  bump,
  bumpE,
  bumpe,
  Bumpeq,
  bumpeq,
  Cacute,
  cacute,
  capand,
  capbrcup,
  capcap,
  cap,
  Cap,
  capcup,
  capdot,
  CapitalDifferentialD,
  caps,
  caret,
  caron,
  Cayleys,
  ccaps,
  Ccaron,
  ccaron,
  Ccedil: Ccedil$1,
  ccedil: ccedil$1,
  Ccirc,
  ccirc,
  Cconint,
  ccups,
  ccupssm,
  Cdot,
  cdot,
  cedil: cedil$1,
  Cedilla,
  cemptyv,
  cent: cent$1,
  centerdot,
  CenterDot,
  cfr,
  Cfr,
  CHcy,
  chcy,
  check,
  checkmark,
  Chi,
  chi,
  circ,
  circeq,
  circlearrowleft,
  circlearrowright,
  circledast,
  circledcirc,
  circleddash,
  CircleDot,
  circledR,
  circledS,
  CircleMinus,
  CirclePlus,
  CircleTimes,
  cir,
  cirE,
  cire,
  cirfnint,
  cirmid,
  cirscir,
  ClockwiseContourIntegral,
  CloseCurlyDoubleQuote,
  CloseCurlyQuote,
  clubs,
  clubsuit,
  colon,
  Colon,
  Colone,
  colone,
  coloneq,
  comma,
  commat,
  comp,
  compfn,
  complement,
  complexes,
  cong,
  congdot,
  Congruent,
  conint,
  Conint,
  ContourIntegral,
  copf,
  Copf,
  coprod,
  Coproduct,
  copy: copy$1,
  COPY: COPY$1,
  copysr,
  CounterClockwiseContourIntegral,
  crarr,
  cross,
  Cross,
  Cscr,
  cscr,
  csub,
  csube,
  csup,
  csupe,
  ctdot,
  cudarrl,
  cudarrr,
  cuepr,
  cuesc,
  cularr,
  cularrp,
  cupbrcap,
  cupcap,
  CupCap,
  cup,
  Cup,
  cupcup,
  cupdot,
  cupor,
  cups,
  curarr,
  curarrm,
  curlyeqprec,
  curlyeqsucc,
  curlyvee,
  curlywedge,
  curren: curren$1,
  curvearrowleft,
  curvearrowright,
  cuvee,
  cuwed,
  cwconint,
  cwint,
  cylcty,
  dagger,
  Dagger,
  daleth,
  darr,
  Darr,
  dArr,
  dash,
  Dashv,
  dashv,
  dbkarow,
  dblac,
  Dcaron,
  dcaron,
  Dcy,
  dcy,
  ddagger,
  ddarr,
  DD,
  dd,
  DDotrahd,
  ddotseq,
  deg: deg$1,
  Del,
  Delta,
  delta,
  demptyv,
  dfisht,
  Dfr,
  dfr,
  dHar,
  dharl,
  dharr,
  DiacriticalAcute,
  DiacriticalDot,
  DiacriticalDoubleAcute,
  DiacriticalGrave,
  DiacriticalTilde,
  diam,
  diamond,
  Diamond,
  diamondsuit,
  diams,
  die,
  DifferentialD,
  digamma,
  disin,
  div,
  divide: divide$1,
  divideontimes,
  divonx,
  DJcy,
  djcy,
  dlcorn,
  dlcrop,
  dollar,
  Dopf,
  dopf,
  Dot,
  dot,
  DotDot,
  doteq,
  doteqdot,
  DotEqual,
  dotminus,
  dotplus,
  dotsquare,
  doublebarwedge,
  DoubleContourIntegral,
  DoubleDot,
  DoubleDownArrow,
  DoubleLeftArrow,
  DoubleLeftRightArrow,
  DoubleLeftTee,
  DoubleLongLeftArrow,
  DoubleLongLeftRightArrow,
  DoubleLongRightArrow,
  DoubleRightArrow,
  DoubleRightTee,
  DoubleUpArrow,
  DoubleUpDownArrow,
  DoubleVerticalBar,
  DownArrowBar,
  downarrow,
  DownArrow,
  Downarrow,
  DownArrowUpArrow,
  DownBreve,
  downdownarrows,
  downharpoonleft,
  downharpoonright,
  DownLeftRightVector,
  DownLeftTeeVector,
  DownLeftVectorBar,
  DownLeftVector,
  DownRightTeeVector,
  DownRightVectorBar,
  DownRightVector,
  DownTeeArrow,
  DownTee,
  drbkarow,
  drcorn,
  drcrop,
  Dscr,
  dscr,
  DScy,
  dscy,
  dsol,
  Dstrok,
  dstrok,
  dtdot,
  dtri,
  dtrif,
  duarr,
  duhar,
  dwangle,
  DZcy,
  dzcy,
  dzigrarr,
  Eacute: Eacute$1,
  eacute: eacute$1,
  easter,
  Ecaron,
  ecaron,
  Ecirc: Ecirc$1,
  ecirc: ecirc$1,
  ecir,
  ecolon,
  Ecy,
  ecy,
  eDDot,
  Edot,
  edot,
  eDot,
  ee,
  efDot,
  Efr,
  efr,
  eg,
  Egrave: Egrave$1,
  egrave: egrave$1,
  egs,
  egsdot,
  el,
  Element,
  elinters,
  ell,
  els,
  elsdot,
  Emacr,
  emacr,
  empty,
  emptyset,
  EmptySmallSquare,
  emptyv,
  EmptyVerySmallSquare,
  emsp13,
  emsp14,
  emsp,
  ENG,
  eng,
  ensp,
  Eogon,
  eogon,
  Eopf,
  eopf,
  epar,
  eparsl,
  eplus,
  epsi,
  Epsilon,
  epsilon,
  epsiv,
  eqcirc,
  eqcolon,
  eqsim,
  eqslantgtr,
  eqslantless,
  Equal,
  equals,
  EqualTilde,
  equest,
  Equilibrium,
  equiv,
  equivDD,
  eqvparsl,
  erarr,
  erDot,
  escr,
  Escr,
  esdot,
  Esim,
  esim,
  Eta,
  eta,
  ETH: ETH$1,
  eth: eth$1,
  Euml: Euml$1,
  euml: euml$1,
  euro,
  excl,
  exist,
  Exists,
  expectation,
  exponentiale,
  ExponentialE,
  fallingdotseq,
  Fcy,
  fcy,
  female,
  ffilig,
  fflig,
  ffllig,
  Ffr,
  ffr,
  filig,
  FilledSmallSquare,
  FilledVerySmallSquare,
  fjlig,
  flat,
  fllig,
  fltns,
  fnof,
  Fopf,
  fopf,
  forall,
  ForAll,
  fork,
  forkv,
  Fouriertrf,
  fpartint,
  frac12: frac12$1,
  frac13,
  frac14: frac14$1,
  frac15,
  frac16,
  frac18,
  frac23,
  frac25,
  frac34: frac34$1,
  frac35,
  frac38,
  frac45,
  frac56,
  frac58,
  frac78,
  frasl,
  frown,
  fscr,
  Fscr,
  gacute,
  Gamma,
  gamma,
  Gammad,
  gammad,
  gap,
  Gbreve,
  gbreve,
  Gcedil,
  Gcirc,
  gcirc,
  Gcy,
  gcy,
  Gdot,
  gdot,
  ge,
  gE,
  gEl,
  gel,
  geq,
  geqq,
  geqslant,
  gescc,
  ges,
  gesdot,
  gesdoto,
  gesdotol,
  gesl,
  gesles,
  Gfr,
  gfr,
  gg,
  Gg,
  ggg,
  gimel,
  GJcy,
  gjcy,
  gla,
  gl,
  glE,
  glj,
  gnap,
  gnapprox,
  gne,
  gnE,
  gneq,
  gneqq,
  gnsim,
  Gopf,
  gopf,
  grave,
  GreaterEqual,
  GreaterEqualLess,
  GreaterFullEqual,
  GreaterGreater,
  GreaterLess,
  GreaterSlantEqual,
  GreaterTilde,
  Gscr,
  gscr,
  gsim,
  gsime,
  gsiml,
  gtcc,
  gtcir,
  gt: gt$2,
  GT: GT$1,
  Gt,
  gtdot,
  gtlPar,
  gtquest,
  gtrapprox,
  gtrarr,
  gtrdot,
  gtreqless,
  gtreqqless,
  gtrless,
  gtrsim,
  gvertneqq,
  gvnE,
  Hacek,
  hairsp,
  half,
  hamilt,
  HARDcy,
  hardcy,
  harrcir,
  harr,
  hArr,
  harrw,
  Hat,
  hbar,
  Hcirc,
  hcirc,
  hearts,
  heartsuit,
  hellip,
  hercon,
  hfr,
  Hfr,
  HilbertSpace,
  hksearow,
  hkswarow,
  hoarr,
  homtht,
  hookleftarrow,
  hookrightarrow,
  hopf,
  Hopf,
  horbar,
  HorizontalLine,
  hscr,
  Hscr,
  hslash,
  Hstrok,
  hstrok,
  HumpDownHump,
  HumpEqual,
  hybull,
  hyphen,
  Iacute: Iacute$1,
  iacute: iacute$1,
  ic,
  Icirc: Icirc$1,
  icirc: icirc$1,
  Icy,
  icy,
  Idot,
  IEcy,
  iecy,
  iexcl: iexcl$1,
  iff,
  ifr,
  Ifr,
  Igrave: Igrave$1,
  igrave: igrave$1,
  ii,
  iiiint,
  iiint,
  iinfin,
  iiota,
  IJlig,
  ijlig,
  Imacr,
  imacr,
  image,
  ImaginaryI,
  imagline,
  imagpart,
  imath,
  Im,
  imof,
  imped,
  Implies,
  incare,
  "in": "∈",
  infin,
  infintie,
  inodot,
  intcal,
  int,
  Int,
  integers,
  Integral,
  intercal,
  Intersection,
  intlarhk,
  intprod,
  InvisibleComma,
  InvisibleTimes,
  IOcy,
  iocy,
  Iogon,
  iogon,
  Iopf,
  iopf,
  Iota,
  iota,
  iprod,
  iquest: iquest$1,
  iscr,
  Iscr,
  isin,
  isindot,
  isinE,
  isins,
  isinsv,
  isinv,
  it,
  Itilde,
  itilde,
  Iukcy,
  iukcy,
  Iuml: Iuml$1,
  iuml: iuml$1,
  Jcirc,
  jcirc,
  Jcy,
  jcy,
  Jfr,
  jfr,
  jmath,
  Jopf,
  jopf,
  Jscr,
  jscr,
  Jsercy,
  jsercy,
  Jukcy,
  jukcy,
  Kappa,
  kappa,
  kappav,
  Kcedil,
  kcedil,
  Kcy,
  kcy,
  Kfr,
  kfr,
  kgreen,
  KHcy,
  khcy,
  KJcy,
  kjcy,
  Kopf,
  kopf,
  Kscr,
  kscr,
  lAarr,
  Lacute,
  lacute,
  laemptyv,
  lagran,
  Lambda,
  lambda,
  lang,
  Lang,
  langd,
  langle,
  lap,
  Laplacetrf,
  laquo: laquo$1,
  larrb,
  larrbfs,
  larr,
  Larr,
  lArr,
  larrfs,
  larrhk,
  larrlp,
  larrpl,
  larrsim,
  larrtl,
  latail,
  lAtail,
  lat,
  late,
  lates,
  lbarr,
  lBarr,
  lbbrk,
  lbrace,
  lbrack,
  lbrke,
  lbrksld,
  lbrkslu,
  Lcaron,
  lcaron,
  Lcedil,
  lcedil,
  lceil,
  lcub,
  Lcy,
  lcy,
  ldca,
  ldquo,
  ldquor,
  ldrdhar,
  ldrushar,
  ldsh,
  le,
  lE,
  LeftAngleBracket,
  LeftArrowBar,
  leftarrow,
  LeftArrow,
  Leftarrow,
  LeftArrowRightArrow,
  leftarrowtail,
  LeftCeiling,
  LeftDoubleBracket,
  LeftDownTeeVector,
  LeftDownVectorBar,
  LeftDownVector,
  LeftFloor,
  leftharpoondown,
  leftharpoonup,
  leftleftarrows,
  leftrightarrow,
  LeftRightArrow,
  Leftrightarrow,
  leftrightarrows,
  leftrightharpoons,
  leftrightsquigarrow,
  LeftRightVector,
  LeftTeeArrow,
  LeftTee,
  LeftTeeVector,
  leftthreetimes,
  LeftTriangleBar,
  LeftTriangle,
  LeftTriangleEqual,
  LeftUpDownVector,
  LeftUpTeeVector,
  LeftUpVectorBar,
  LeftUpVector,
  LeftVectorBar,
  LeftVector,
  lEg,
  leg,
  leq,
  leqq,
  leqslant,
  lescc,
  les,
  lesdot,
  lesdoto,
  lesdotor,
  lesg,
  lesges,
  lessapprox,
  lessdot,
  lesseqgtr,
  lesseqqgtr,
  LessEqualGreater,
  LessFullEqual,
  LessGreater,
  lessgtr,
  LessLess,
  lesssim,
  LessSlantEqual,
  LessTilde,
  lfisht,
  lfloor,
  Lfr,
  lfr,
  lg,
  lgE,
  lHar,
  lhard,
  lharu,
  lharul,
  lhblk,
  LJcy,
  ljcy,
  llarr,
  ll,
  Ll,
  llcorner,
  Lleftarrow,
  llhard,
  lltri,
  Lmidot,
  lmidot,
  lmoustache,
  lmoust,
  lnap,
  lnapprox,
  lne,
  lnE,
  lneq,
  lneqq,
  lnsim,
  loang,
  loarr,
  lobrk,
  longleftarrow,
  LongLeftArrow,
  Longleftarrow,
  longleftrightarrow,
  LongLeftRightArrow,
  Longleftrightarrow,
  longmapsto,
  longrightarrow,
  LongRightArrow,
  Longrightarrow,
  looparrowleft,
  looparrowright,
  lopar,
  Lopf,
  lopf,
  loplus,
  lotimes,
  lowast,
  lowbar,
  LowerLeftArrow,
  LowerRightArrow,
  loz,
  lozenge,
  lozf,
  lpar,
  lparlt,
  lrarr,
  lrcorner,
  lrhar,
  lrhard,
  lrm,
  lrtri,
  lsaquo,
  lscr,
  Lscr,
  lsh,
  Lsh,
  lsim,
  lsime,
  lsimg,
  lsqb,
  lsquo,
  lsquor,
  Lstrok,
  lstrok,
  ltcc,
  ltcir,
  lt: lt$2,
  LT: LT$1,
  Lt,
  ltdot,
  lthree,
  ltimes,
  ltlarr,
  ltquest,
  ltri,
  ltrie,
  ltrif,
  ltrPar,
  lurdshar,
  luruhar,
  lvertneqq,
  lvnE,
  macr: macr$1,
  male,
  malt,
  maltese,
  "Map": "⤅",
  map: map2,
  mapsto,
  mapstodown,
  mapstoleft,
  mapstoup,
  marker,
  mcomma,
  Mcy,
  mcy,
  mdash,
  mDDot,
  measuredangle,
  MediumSpace,
  Mellintrf,
  Mfr,
  mfr,
  mho,
  micro: micro$1,
  midast,
  midcir,
  mid,
  middot: middot$1,
  minusb,
  minus,
  minusd,
  minusdu,
  MinusPlus,
  mlcp,
  mldr,
  mnplus,
  models,
  Mopf,
  mopf,
  mp,
  mscr,
  Mscr,
  mstpos,
  Mu,
  mu,
  multimap,
  mumap,
  nabla,
  Nacute,
  nacute,
  nang,
  nap,
  napE,
  napid,
  napos,
  napprox,
  natural,
  naturals,
  natur,
  nbsp: nbsp$1,
  nbump,
  nbumpe,
  ncap,
  Ncaron,
  ncaron,
  Ncedil,
  ncedil,
  ncong,
  ncongdot,
  ncup,
  Ncy,
  ncy,
  ndash,
  nearhk,
  nearr,
  neArr,
  nearrow,
  ne,
  nedot,
  NegativeMediumSpace,
  NegativeThickSpace,
  NegativeThinSpace,
  NegativeVeryThinSpace,
  nequiv,
  nesear,
  nesim,
  NestedGreaterGreater,
  NestedLessLess,
  NewLine,
  nexist,
  nexists,
  Nfr,
  nfr,
  ngE,
  nge,
  ngeq,
  ngeqq,
  ngeqslant,
  nges,
  nGg,
  ngsim,
  nGt,
  ngt,
  ngtr,
  nGtv,
  nharr,
  nhArr,
  nhpar,
  ni,
  nis,
  nisd,
  niv,
  NJcy,
  njcy,
  nlarr,
  nlArr,
  nldr,
  nlE,
  nle,
  nleftarrow,
  nLeftarrow,
  nleftrightarrow,
  nLeftrightarrow,
  nleq,
  nleqq,
  nleqslant,
  nles,
  nless,
  nLl,
  nlsim,
  nLt,
  nlt,
  nltri,
  nltrie,
  nLtv,
  nmid,
  NoBreak,
  NonBreakingSpace,
  nopf,
  Nopf,
  Not,
  not: not$1,
  NotCongruent,
  NotCupCap,
  NotDoubleVerticalBar,
  NotElement,
  NotEqual,
  NotEqualTilde,
  NotExists,
  NotGreater,
  NotGreaterEqual,
  NotGreaterFullEqual,
  NotGreaterGreater,
  NotGreaterLess,
  NotGreaterSlantEqual,
  NotGreaterTilde,
  NotHumpDownHump,
  NotHumpEqual,
  notin,
  notindot,
  notinE,
  notinva,
  notinvb,
  notinvc,
  NotLeftTriangleBar,
  NotLeftTriangle,
  NotLeftTriangleEqual,
  NotLess,
  NotLessEqual,
  NotLessGreater,
  NotLessLess,
  NotLessSlantEqual,
  NotLessTilde,
  NotNestedGreaterGreater,
  NotNestedLessLess,
  notni,
  notniva,
  notnivb,
  notnivc,
  NotPrecedes,
  NotPrecedesEqual,
  NotPrecedesSlantEqual,
  NotReverseElement,
  NotRightTriangleBar,
  NotRightTriangle,
  NotRightTriangleEqual,
  NotSquareSubset,
  NotSquareSubsetEqual,
  NotSquareSuperset,
  NotSquareSupersetEqual,
  NotSubset,
  NotSubsetEqual,
  NotSucceeds,
  NotSucceedsEqual,
  NotSucceedsSlantEqual,
  NotSucceedsTilde,
  NotSuperset,
  NotSupersetEqual,
  NotTilde,
  NotTildeEqual,
  NotTildeFullEqual,
  NotTildeTilde,
  NotVerticalBar,
  nparallel,
  npar,
  nparsl,
  npart,
  npolint,
  npr,
  nprcue,
  nprec,
  npreceq,
  npre,
  nrarrc,
  nrarr,
  nrArr,
  nrarrw,
  nrightarrow,
  nRightarrow,
  nrtri,
  nrtrie,
  nsc,
  nsccue,
  nsce,
  Nscr,
  nscr,
  nshortmid,
  nshortparallel,
  nsim,
  nsime,
  nsimeq,
  nsmid,
  nspar,
  nsqsube,
  nsqsupe,
  nsub,
  nsubE,
  nsube,
  nsubset,
  nsubseteq,
  nsubseteqq,
  nsucc,
  nsucceq,
  nsup,
  nsupE,
  nsupe,
  nsupset,
  nsupseteq,
  nsupseteqq,
  ntgl,
  Ntilde: Ntilde$1,
  ntilde: ntilde$1,
  ntlg,
  ntriangleleft,
  ntrianglelefteq,
  ntriangleright,
  ntrianglerighteq,
  Nu,
  nu,
  num,
  numero,
  numsp,
  nvap,
  nvdash,
  nvDash,
  nVdash,
  nVDash,
  nvge,
  nvgt,
  nvHarr,
  nvinfin,
  nvlArr,
  nvle,
  nvlt,
  nvltrie,
  nvrArr,
  nvrtrie,
  nvsim,
  nwarhk,
  nwarr,
  nwArr,
  nwarrow,
  nwnear,
  Oacute: Oacute$1,
  oacute: oacute$1,
  oast,
  Ocirc: Ocirc$1,
  ocirc: ocirc$1,
  ocir,
  Ocy,
  ocy,
  odash,
  Odblac,
  odblac,
  odiv,
  odot,
  odsold,
  OElig,
  oelig,
  ofcir,
  Ofr,
  ofr,
  ogon,
  Ograve: Ograve$1,
  ograve: ograve$1,
  ogt,
  ohbar,
  ohm,
  oint,
  olarr,
  olcir,
  olcross,
  oline,
  olt,
  Omacr,
  omacr,
  Omega,
  omega,
  Omicron,
  omicron,
  omid,
  ominus,
  Oopf,
  oopf,
  opar,
  OpenCurlyDoubleQuote,
  OpenCurlyQuote,
  operp,
  oplus,
  orarr,
  Or,
  or,
  ord,
  order,
  orderof,
  ordf: ordf$1,
  ordm: ordm$1,
  origof,
  oror,
  orslope,
  orv,
  oS,
  Oscr,
  oscr,
  Oslash: Oslash$1,
  oslash: oslash$1,
  osol,
  Otilde: Otilde$1,
  otilde: otilde$1,
  otimesas,
  Otimes,
  otimes,
  Ouml: Ouml$1,
  ouml: ouml$1,
  ovbar,
  OverBar,
  OverBrace,
  OverBracket,
  OverParenthesis,
  para: para$1,
  parallel,
  par,
  parsim,
  parsl,
  part,
  PartialD,
  Pcy,
  pcy,
  percnt,
  period,
  permil,
  perp,
  pertenk,
  Pfr,
  pfr,
  Phi,
  phi,
  phiv,
  phmmat,
  phone,
  Pi,
  pi,
  pitchfork,
  piv,
  planck,
  planckh,
  plankv,
  plusacir,
  plusb,
  pluscir,
  plus,
  plusdo,
  plusdu,
  pluse,
  PlusMinus,
  plusmn: plusmn$1,
  plussim,
  plustwo,
  pm,
  Poincareplane,
  pointint,
  popf,
  Popf,
  pound: pound$1,
  prap,
  Pr,
  pr,
  prcue,
  precapprox,
  prec,
  preccurlyeq,
  Precedes,
  PrecedesEqual,
  PrecedesSlantEqual,
  PrecedesTilde,
  preceq,
  precnapprox,
  precneqq,
  precnsim,
  pre,
  prE,
  precsim,
  prime,
  Prime,
  primes,
  prnap,
  prnE,
  prnsim,
  prod,
  Product,
  profalar,
  profline,
  profsurf,
  prop,
  Proportional,
  Proportion,
  propto,
  prsim,
  prurel,
  Pscr,
  pscr,
  Psi,
  psi,
  puncsp,
  Qfr,
  qfr,
  qint,
  qopf,
  Qopf,
  qprime,
  Qscr,
  qscr,
  quaternions,
  quatint,
  quest,
  questeq,
  quot: quot$2,
  QUOT: QUOT$1,
  rAarr,
  race,
  Racute,
  racute,
  radic,
  raemptyv,
  rang,
  Rang,
  rangd,
  range,
  rangle,
  raquo: raquo$1,
  rarrap,
  rarrb,
  rarrbfs,
  rarrc,
  rarr,
  Rarr,
  rArr,
  rarrfs,
  rarrhk,
  rarrlp,
  rarrpl,
  rarrsim,
  Rarrtl,
  rarrtl,
  rarrw,
  ratail,
  rAtail,
  ratio,
  rationals,
  rbarr,
  rBarr,
  RBarr,
  rbbrk,
  rbrace,
  rbrack,
  rbrke,
  rbrksld,
  rbrkslu,
  Rcaron,
  rcaron,
  Rcedil,
  rcedil,
  rceil,
  rcub,
  Rcy,
  rcy,
  rdca,
  rdldhar,
  rdquo,
  rdquor,
  rdsh,
  real,
  realine,
  realpart,
  reals,
  Re,
  rect,
  reg: reg$1,
  REG: REG$1,
  ReverseElement,
  ReverseEquilibrium,
  ReverseUpEquilibrium,
  rfisht,
  rfloor,
  rfr,
  Rfr,
  rHar,
  rhard,
  rharu,
  rharul,
  Rho,
  rho,
  rhov,
  RightAngleBracket,
  RightArrowBar,
  rightarrow,
  RightArrow,
  Rightarrow,
  RightArrowLeftArrow,
  rightarrowtail,
  RightCeiling,
  RightDoubleBracket,
  RightDownTeeVector,
  RightDownVectorBar,
  RightDownVector,
  RightFloor,
  rightharpoondown,
  rightharpoonup,
  rightleftarrows,
  rightleftharpoons,
  rightrightarrows,
  rightsquigarrow,
  RightTeeArrow,
  RightTee,
  RightTeeVector,
  rightthreetimes,
  RightTriangleBar,
  RightTriangle,
  RightTriangleEqual,
  RightUpDownVector,
  RightUpTeeVector,
  RightUpVectorBar,
  RightUpVector,
  RightVectorBar,
  RightVector,
  ring,
  risingdotseq,
  rlarr,
  rlhar,
  rlm,
  rmoustache,
  rmoust,
  rnmid,
  roang,
  roarr,
  robrk,
  ropar,
  ropf,
  Ropf,
  roplus,
  rotimes,
  RoundImplies,
  rpar,
  rpargt,
  rppolint,
  rrarr,
  Rrightarrow,
  rsaquo,
  rscr,
  Rscr,
  rsh,
  Rsh,
  rsqb,
  rsquo,
  rsquor,
  rthree,
  rtimes,
  rtri,
  rtrie,
  rtrif,
  rtriltri,
  RuleDelayed,
  ruluhar,
  rx,
  Sacute,
  sacute,
  sbquo,
  scap,
  Scaron,
  scaron,
  Sc,
  sc,
  sccue,
  sce,
  scE,
  Scedil,
  scedil,
  Scirc,
  scirc,
  scnap,
  scnE,
  scnsim,
  scpolint,
  scsim,
  Scy,
  scy,
  sdotb,
  sdot,
  sdote,
  searhk,
  searr,
  seArr,
  searrow,
  sect: sect$1,
  semi,
  seswar,
  setminus,
  setmn,
  sext,
  Sfr,
  sfr,
  sfrown,
  sharp,
  SHCHcy,
  shchcy,
  SHcy,
  shcy,
  ShortDownArrow,
  ShortLeftArrow,
  shortmid,
  shortparallel,
  ShortRightArrow,
  ShortUpArrow,
  shy: shy$1,
  Sigma,
  sigma,
  sigmaf,
  sigmav,
  sim,
  simdot,
  sime,
  simeq,
  simg,
  simgE,
  siml,
  simlE,
  simne,
  simplus,
  simrarr,
  slarr,
  SmallCircle,
  smallsetminus,
  smashp,
  smeparsl,
  smid,
  smile,
  smt,
  smte,
  smtes,
  SOFTcy,
  softcy,
  solbar,
  solb,
  sol,
  Sopf,
  sopf,
  spades,
  spadesuit,
  spar,
  sqcap,
  sqcaps,
  sqcup,
  sqcups,
  Sqrt,
  sqsub,
  sqsube,
  sqsubset,
  sqsubseteq,
  sqsup,
  sqsupe,
  sqsupset,
  sqsupseteq,
  square,
  Square,
  SquareIntersection,
  SquareSubset,
  SquareSubsetEqual,
  SquareSuperset,
  SquareSupersetEqual,
  SquareUnion,
  squarf,
  squ,
  squf,
  srarr,
  Sscr,
  sscr,
  ssetmn,
  ssmile,
  sstarf,
  Star,
  star,
  starf,
  straightepsilon,
  straightphi,
  strns,
  sub,
  Sub,
  subdot,
  subE,
  sube,
  subedot,
  submult,
  subnE,
  subne,
  subplus,
  subrarr,
  subset,
  Subset,
  subseteq,
  subseteqq,
  SubsetEqual,
  subsetneq,
  subsetneqq,
  subsim,
  subsub,
  subsup,
  succapprox,
  succ,
  succcurlyeq,
  Succeeds,
  SucceedsEqual,
  SucceedsSlantEqual,
  SucceedsTilde,
  succeq,
  succnapprox,
  succneqq,
  succnsim,
  succsim,
  SuchThat,
  sum,
  Sum,
  sung,
  sup1: sup1$1,
  sup2: sup2$1,
  sup3: sup3$1,
  sup,
  Sup,
  supdot,
  supdsub,
  supE,
  supe,
  supedot,
  Superset,
  SupersetEqual,
  suphsol,
  suphsub,
  suplarr,
  supmult,
  supnE,
  supne,
  supplus,
  supset,
  Supset,
  supseteq,
  supseteqq,
  supsetneq,
  supsetneqq,
  supsim,
  supsub,
  supsup,
  swarhk,
  swarr,
  swArr,
  swarrow,
  swnwar,
  szlig: szlig$1,
  Tab,
  target,
  Tau,
  tau,
  tbrk,
  Tcaron,
  tcaron,
  Tcedil,
  tcedil,
  Tcy,
  tcy,
  tdot,
  telrec,
  Tfr,
  tfr,
  there4,
  therefore,
  Therefore,
  Theta,
  theta,
  thetasym,
  thetav,
  thickapprox,
  thicksim,
  ThickSpace,
  ThinSpace,
  thinsp,
  thkap,
  thksim,
  THORN: THORN$1,
  thorn: thorn$1,
  tilde,
  Tilde,
  TildeEqual,
  TildeFullEqual,
  TildeTilde,
  timesbar,
  timesb,
  times: times$1,
  timesd,
  tint,
  toea,
  topbot,
  topcir,
  top,
  Topf,
  topf,
  topfork,
  tosa,
  tprime,
  trade,
  TRADE,
  triangle,
  triangledown,
  triangleleft,
  trianglelefteq,
  triangleq,
  triangleright,
  trianglerighteq,
  tridot,
  trie,
  triminus,
  TripleDot,
  triplus,
  trisb,
  tritime,
  trpezium,
  Tscr,
  tscr,
  TScy,
  tscy,
  TSHcy,
  tshcy,
  Tstrok,
  tstrok,
  twixt,
  twoheadleftarrow,
  twoheadrightarrow,
  Uacute: Uacute$1,
  uacute: uacute$1,
  uarr,
  Uarr,
  uArr,
  Uarrocir,
  Ubrcy,
  ubrcy,
  Ubreve,
  ubreve,
  Ucirc: Ucirc$1,
  ucirc: ucirc$1,
  Ucy,
  ucy,
  udarr,
  Udblac,
  udblac,
  udhar,
  ufisht,
  Ufr,
  ufr,
  Ugrave: Ugrave$1,
  ugrave: ugrave$1,
  uHar,
  uharl,
  uharr,
  uhblk,
  ulcorn,
  ulcorner,
  ulcrop,
  ultri,
  Umacr,
  umacr,
  uml: uml$1,
  UnderBar,
  UnderBrace,
  UnderBracket,
  UnderParenthesis,
  Union,
  UnionPlus,
  Uogon,
  uogon,
  Uopf,
  uopf,
  UpArrowBar,
  uparrow,
  UpArrow,
  Uparrow,
  UpArrowDownArrow,
  updownarrow,
  UpDownArrow,
  Updownarrow,
  UpEquilibrium,
  upharpoonleft,
  upharpoonright,
  uplus,
  UpperLeftArrow,
  UpperRightArrow,
  upsi,
  Upsi,
  upsih,
  Upsilon,
  upsilon,
  UpTeeArrow,
  UpTee,
  upuparrows,
  urcorn,
  urcorner,
  urcrop,
  Uring,
  uring,
  urtri,
  Uscr,
  uscr,
  utdot,
  Utilde,
  utilde,
  utri,
  utrif,
  uuarr,
  Uuml: Uuml$1,
  uuml: uuml$1,
  uwangle,
  vangrt,
  varepsilon,
  varkappa,
  varnothing,
  varphi,
  varpi,
  varpropto,
  varr,
  vArr,
  varrho,
  varsigma,
  varsubsetneq,
  varsubsetneqq,
  varsupsetneq,
  varsupsetneqq,
  vartheta,
  vartriangleleft,
  vartriangleright,
  vBar,
  Vbar,
  vBarv,
  Vcy,
  vcy,
  vdash,
  vDash,
  Vdash,
  VDash,
  Vdashl,
  veebar,
  vee,
  Vee,
  veeeq,
  vellip,
  verbar,
  Verbar,
  vert,
  Vert,
  VerticalBar,
  VerticalLine,
  VerticalSeparator,
  VerticalTilde,
  VeryThinSpace,
  Vfr,
  vfr,
  vltri,
  vnsub,
  vnsup,
  Vopf,
  vopf,
  vprop,
  vrtri,
  Vscr,
  vscr,
  vsubnE,
  vsubne,
  vsupnE,
  vsupne,
  Vvdash,
  vzigzag,
  Wcirc,
  wcirc,
  wedbar,
  wedge,
  Wedge,
  wedgeq,
  weierp,
  Wfr,
  wfr,
  Wopf,
  wopf,
  wp,
  wr,
  wreath,
  Wscr,
  wscr,
  xcap,
  xcirc,
  xcup,
  xdtri,
  Xfr,
  xfr,
  xharr,
  xhArr,
  Xi,
  xi,
  xlarr,
  xlArr,
  xmap,
  xnis,
  xodot,
  Xopf,
  xopf,
  xoplus,
  xotime,
  xrarr,
  xrArr,
  Xscr,
  xscr,
  xsqcup,
  xuplus,
  xutri,
  xvee,
  xwedge,
  Yacute: Yacute$1,
  yacute: yacute$1,
  YAcy,
  yacy,
  Ycirc,
  ycirc,
  Ycy,
  ycy,
  yen: yen$1,
  Yfr,
  yfr,
  YIcy,
  yicy,
  Yopf,
  yopf,
  Yscr,
  yscr,
  YUcy,
  yucy,
  yuml: yuml$1,
  Yuml,
  Zacute,
  zacute,
  Zcaron,
  zcaron,
  Zcy,
  zcy,
  Zdot,
  zdot,
  zeetrf,
  ZeroWidthSpace,
  Zeta,
  zeta,
  zfr,
  Zfr,
  ZHcy,
  zhcy,
  zigrarr,
  zopf,
  Zopf,
  Zscr,
  zscr,
  zwj,
  zwnj
};
const Aacute = "Á";
const aacute = "á";
const Acirc = "Â";
const acirc = "â";
const acute = "´";
const AElig = "Æ";
const aelig = "æ";
const Agrave = "À";
const agrave = "à";
const amp$1 = "&";
const AMP = "&";
const Aring = "Å";
const aring = "å";
const Atilde = "Ã";
const atilde = "ã";
const Auml = "Ä";
const auml = "ä";
const brvbar = "¦";
const Ccedil = "Ç";
const ccedil = "ç";
const cedil = "¸";
const cent = "¢";
const copy = "©";
const COPY = "©";
const curren = "¤";
const deg = "°";
const divide = "÷";
const Eacute = "É";
const eacute = "é";
const Ecirc = "Ê";
const ecirc = "ê";
const Egrave = "È";
const egrave = "è";
const ETH = "Ð";
const eth = "ð";
const Euml = "Ë";
const euml = "ë";
const frac12 = "½";
const frac14 = "¼";
const frac34 = "¾";
const gt$1 = ">";
const GT = ">";
const Iacute = "Í";
const iacute = "í";
const Icirc = "Î";
const icirc = "î";
const iexcl = "¡";
const Igrave = "Ì";
const igrave = "ì";
const iquest = "¿";
const Iuml = "Ï";
const iuml = "ï";
const laquo = "«";
const lt$1 = "<";
const LT = "<";
const macr = "¯";
const micro = "µ";
const middot = "·";
const nbsp = " ";
const not = "¬";
const Ntilde = "Ñ";
const ntilde = "ñ";
const Oacute = "Ó";
const oacute = "ó";
const Ocirc = "Ô";
const ocirc = "ô";
const Ograve = "Ò";
const ograve = "ò";
const ordf = "ª";
const ordm = "º";
const Oslash = "Ø";
const oslash = "ø";
const Otilde = "Õ";
const otilde = "õ";
const Ouml = "Ö";
const ouml = "ö";
const para = "¶";
const plusmn = "±";
const pound = "£";
const quot$1 = '"';
const QUOT = '"';
const raquo = "»";
const reg = "®";
const REG = "®";
const sect = "§";
const shy = "­";
const sup1 = "¹";
const sup2 = "²";
const sup3 = "³";
const szlig = "ß";
const THORN = "Þ";
const thorn = "þ";
const times = "×";
const Uacute = "Ú";
const uacute = "ú";
const Ucirc = "Û";
const ucirc = "û";
const Ugrave = "Ù";
const ugrave = "ù";
const uml = "¨";
const Uuml = "Ü";
const uuml = "ü";
const Yacute = "Ý";
const yacute = "ý";
const yen = "¥";
const yuml = "ÿ";
const require$$1 = {
  Aacute,
  aacute,
  Acirc,
  acirc,
  acute,
  AElig,
  aelig,
  Agrave,
  agrave,
  amp: amp$1,
  AMP,
  Aring,
  aring,
  Atilde,
  atilde,
  Auml,
  auml,
  brvbar,
  Ccedil,
  ccedil,
  cedil,
  cent,
  copy,
  COPY,
  curren,
  deg,
  divide,
  Eacute,
  eacute,
  Ecirc,
  ecirc,
  Egrave,
  egrave,
  ETH,
  eth,
  Euml,
  euml,
  frac12,
  frac14,
  frac34,
  gt: gt$1,
  GT,
  Iacute,
  iacute,
  Icirc,
  icirc,
  iexcl,
  Igrave,
  igrave,
  iquest,
  Iuml,
  iuml,
  laquo,
  lt: lt$1,
  LT,
  macr,
  micro,
  middot,
  nbsp,
  not,
  Ntilde,
  ntilde,
  Oacute,
  oacute,
  Ocirc,
  ocirc,
  Ograve,
  ograve,
  ordf,
  ordm,
  Oslash,
  oslash,
  Otilde,
  otilde,
  Ouml,
  ouml,
  para,
  plusmn,
  pound,
  quot: quot$1,
  QUOT,
  raquo,
  reg,
  REG,
  sect,
  shy,
  sup1,
  sup2,
  sup3,
  szlig,
  THORN,
  thorn,
  times,
  Uacute,
  uacute,
  Ucirc,
  ucirc,
  Ugrave,
  ugrave,
  uml,
  Uuml,
  uuml,
  Yacute,
  yacute,
  yen,
  yuml
};
const amp = "&";
const apos = "'";
const gt = ">";
const lt = "<";
const quot = '"';
const require$$0 = {
  amp,
  apos,
  gt,
  lt,
  quot
};
var hasRequiredTokenizer;
function requireTokenizer() {
  if (hasRequiredTokenizer) return Tokenizer;
  hasRequiredTokenizer = 1;
  var __importDefault = Tokenizer && Tokenizer.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(Tokenizer, "__esModule", { value: true });
  var decode_codepoint_1 = __importDefault(/* @__PURE__ */ requireDecode_codepoint());
  var entities_json_1 = __importDefault(require$$1$1);
  var legacy_json_1 = __importDefault(require$$1);
  var xml_json_1 = __importDefault(require$$0);
  function whitespace(c2) {
    return c2 === " " || c2 === "\n" || c2 === "	" || c2 === "\f" || c2 === "\r";
  }
  function isASCIIAlpha(c2) {
    return c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z";
  }
  function ifElseState(upper, SUCCESS, FAILURE) {
    var lower = upper.toLowerCase();
    if (upper === lower) {
      return function(t2, c2) {
        if (c2 === lower) {
          t2._state = SUCCESS;
        } else {
          t2._state = FAILURE;
          t2._index--;
        }
      };
    }
    return function(t2, c2) {
      if (c2 === lower || c2 === upper) {
        t2._state = SUCCESS;
      } else {
        t2._state = FAILURE;
        t2._index--;
      }
    };
  }
  function consumeSpecialNameChar(upper, NEXT_STATE) {
    var lower = upper.toLowerCase();
    return function(t2, c2) {
      if (c2 === lower || c2 === upper) {
        t2._state = NEXT_STATE;
      } else {
        t2._state = 3;
        t2._index--;
      }
    };
  }
  var stateBeforeCdata1 = ifElseState(
    "C",
    24,
    16
    /* InDeclaration */
  );
  var stateBeforeCdata2 = ifElseState(
    "D",
    25,
    16
    /* InDeclaration */
  );
  var stateBeforeCdata3 = ifElseState(
    "A",
    26,
    16
    /* InDeclaration */
  );
  var stateBeforeCdata4 = ifElseState(
    "T",
    27,
    16
    /* InDeclaration */
  );
  var stateBeforeCdata5 = ifElseState(
    "A",
    28,
    16
    /* InDeclaration */
  );
  var stateBeforeScript1 = consumeSpecialNameChar(
    "R",
    35
    /* BeforeScript2 */
  );
  var stateBeforeScript2 = consumeSpecialNameChar(
    "I",
    36
    /* BeforeScript3 */
  );
  var stateBeforeScript3 = consumeSpecialNameChar(
    "P",
    37
    /* BeforeScript4 */
  );
  var stateBeforeScript4 = consumeSpecialNameChar(
    "T",
    38
    /* BeforeScript5 */
  );
  var stateAfterScript1 = ifElseState(
    "R",
    40,
    1
    /* Text */
  );
  var stateAfterScript2 = ifElseState(
    "I",
    41,
    1
    /* Text */
  );
  var stateAfterScript3 = ifElseState(
    "P",
    42,
    1
    /* Text */
  );
  var stateAfterScript4 = ifElseState(
    "T",
    43,
    1
    /* Text */
  );
  var stateBeforeStyle1 = consumeSpecialNameChar(
    "Y",
    45
    /* BeforeStyle2 */
  );
  var stateBeforeStyle2 = consumeSpecialNameChar(
    "L",
    46
    /* BeforeStyle3 */
  );
  var stateBeforeStyle3 = consumeSpecialNameChar(
    "E",
    47
    /* BeforeStyle4 */
  );
  var stateAfterStyle1 = ifElseState(
    "Y",
    49,
    1
    /* Text */
  );
  var stateAfterStyle2 = ifElseState(
    "L",
    50,
    1
    /* Text */
  );
  var stateAfterStyle3 = ifElseState(
    "E",
    51,
    1
    /* Text */
  );
  var stateBeforeSpecialT = consumeSpecialNameChar(
    "I",
    54
    /* BeforeTitle1 */
  );
  var stateBeforeTitle1 = consumeSpecialNameChar(
    "T",
    55
    /* BeforeTitle2 */
  );
  var stateBeforeTitle2 = consumeSpecialNameChar(
    "L",
    56
    /* BeforeTitle3 */
  );
  var stateBeforeTitle3 = consumeSpecialNameChar(
    "E",
    57
    /* BeforeTitle4 */
  );
  var stateAfterSpecialTEnd = ifElseState(
    "I",
    58,
    1
    /* Text */
  );
  var stateAfterTitle1 = ifElseState(
    "T",
    59,
    1
    /* Text */
  );
  var stateAfterTitle2 = ifElseState(
    "L",
    60,
    1
    /* Text */
  );
  var stateAfterTitle3 = ifElseState(
    "E",
    61,
    1
    /* Text */
  );
  var stateBeforeEntity = ifElseState(
    "#",
    63,
    64
    /* InNamedEntity */
  );
  var stateBeforeNumericEntity = ifElseState(
    "X",
    66,
    65
    /* InNumericEntity */
  );
  var Tokenizer$1 = (
    /** @class */
    function() {
      function Tokenizer2(options, cbs) {
        var _a2;
        this._state = 1;
        this.buffer = "";
        this.sectionStart = 0;
        this._index = 0;
        this.bufferOffset = 0;
        this.baseState = 1;
        this.special = 1;
        this.running = true;
        this.ended = false;
        this.cbs = cbs;
        this.xmlMode = !!(options === null || options === void 0 ? void 0 : options.xmlMode);
        this.decodeEntities = (_a2 = options === null || options === void 0 ? void 0 : options.decodeEntities) !== null && _a2 !== void 0 ? _a2 : true;
      }
      Tokenizer2.prototype.reset = function() {
        this._state = 1;
        this.buffer = "";
        this.sectionStart = 0;
        this._index = 0;
        this.bufferOffset = 0;
        this.baseState = 1;
        this.special = 1;
        this.running = true;
        this.ended = false;
      };
      Tokenizer2.prototype.write = function(chunk) {
        if (this.ended)
          this.cbs.onerror(Error(".write() after done!"));
        this.buffer += chunk;
        this.parse();
      };
      Tokenizer2.prototype.end = function(chunk) {
        if (this.ended)
          this.cbs.onerror(Error(".end() after done!"));
        if (chunk)
          this.write(chunk);
        this.ended = true;
        if (this.running)
          this.finish();
      };
      Tokenizer2.prototype.pause = function() {
        this.running = false;
      };
      Tokenizer2.prototype.resume = function() {
        this.running = true;
        if (this._index < this.buffer.length) {
          this.parse();
        }
        if (this.ended) {
          this.finish();
        }
      };
      Tokenizer2.prototype.getAbsoluteIndex = function() {
        return this.bufferOffset + this._index;
      };
      Tokenizer2.prototype.stateText = function(c2) {
        if (c2 === "<") {
          if (this._index > this.sectionStart) {
            this.cbs.ontext(this.getSection());
          }
          this._state = 2;
          this.sectionStart = this._index;
        } else if (this.decodeEntities && c2 === "&" && (this.special === 1 || this.special === 4)) {
          if (this._index > this.sectionStart) {
            this.cbs.ontext(this.getSection());
          }
          this.baseState = 1;
          this._state = 62;
          this.sectionStart = this._index;
        }
      };
      Tokenizer2.prototype.isTagStartChar = function(c2) {
        return isASCIIAlpha(c2) || this.xmlMode && !whitespace(c2) && c2 !== "/" && c2 !== ">";
      };
      Tokenizer2.prototype.stateBeforeTagName = function(c2) {
        if (c2 === "/") {
          this._state = 5;
        } else if (c2 === "<") {
          this.cbs.ontext(this.getSection());
          this.sectionStart = this._index;
        } else if (c2 === ">" || this.special !== 1 || whitespace(c2)) {
          this._state = 1;
        } else if (c2 === "!") {
          this._state = 15;
          this.sectionStart = this._index + 1;
        } else if (c2 === "?") {
          this._state = 17;
          this.sectionStart = this._index + 1;
        } else if (!this.isTagStartChar(c2)) {
          this._state = 1;
        } else {
          this._state = !this.xmlMode && (c2 === "s" || c2 === "S") ? 32 : !this.xmlMode && (c2 === "t" || c2 === "T") ? 52 : 3;
          this.sectionStart = this._index;
        }
      };
      Tokenizer2.prototype.stateInTagName = function(c2) {
        if (c2 === "/" || c2 === ">" || whitespace(c2)) {
          this.emitToken("onopentagname");
          this._state = 8;
          this._index--;
        }
      };
      Tokenizer2.prototype.stateBeforeClosingTagName = function(c2) {
        if (whitespace(c2)) ;
        else if (c2 === ">") {
          this._state = 1;
        } else if (this.special !== 1) {
          if (this.special !== 4 && (c2 === "s" || c2 === "S")) {
            this._state = 33;
          } else if (this.special === 4 && (c2 === "t" || c2 === "T")) {
            this._state = 53;
          } else {
            this._state = 1;
            this._index--;
          }
        } else if (!this.isTagStartChar(c2)) {
          this._state = 20;
          this.sectionStart = this._index;
        } else {
          this._state = 6;
          this.sectionStart = this._index;
        }
      };
      Tokenizer2.prototype.stateInClosingTagName = function(c2) {
        if (c2 === ">" || whitespace(c2)) {
          this.emitToken("onclosetag");
          this._state = 7;
          this._index--;
        }
      };
      Tokenizer2.prototype.stateAfterClosingTagName = function(c2) {
        if (c2 === ">") {
          this._state = 1;
          this.sectionStart = this._index + 1;
        }
      };
      Tokenizer2.prototype.stateBeforeAttributeName = function(c2) {
        if (c2 === ">") {
          this.cbs.onopentagend();
          this._state = 1;
          this.sectionStart = this._index + 1;
        } else if (c2 === "/") {
          this._state = 4;
        } else if (!whitespace(c2)) {
          this._state = 9;
          this.sectionStart = this._index;
        }
      };
      Tokenizer2.prototype.stateInSelfClosingTag = function(c2) {
        if (c2 === ">") {
          this.cbs.onselfclosingtag();
          this._state = 1;
          this.sectionStart = this._index + 1;
          this.special = 1;
        } else if (!whitespace(c2)) {
          this._state = 8;
          this._index--;
        }
      };
      Tokenizer2.prototype.stateInAttributeName = function(c2) {
        if (c2 === "=" || c2 === "/" || c2 === ">" || whitespace(c2)) {
          this.cbs.onattribname(this.getSection());
          this.sectionStart = -1;
          this._state = 10;
          this._index--;
        }
      };
      Tokenizer2.prototype.stateAfterAttributeName = function(c2) {
        if (c2 === "=") {
          this._state = 11;
        } else if (c2 === "/" || c2 === ">") {
          this.cbs.onattribend(void 0);
          this._state = 8;
          this._index--;
        } else if (!whitespace(c2)) {
          this.cbs.onattribend(void 0);
          this._state = 9;
          this.sectionStart = this._index;
        }
      };
      Tokenizer2.prototype.stateBeforeAttributeValue = function(c2) {
        if (c2 === '"') {
          this._state = 12;
          this.sectionStart = this._index + 1;
        } else if (c2 === "'") {
          this._state = 13;
          this.sectionStart = this._index + 1;
        } else if (!whitespace(c2)) {
          this._state = 14;
          this.sectionStart = this._index;
          this._index--;
        }
      };
      Tokenizer2.prototype.handleInAttributeValue = function(c2, quote) {
        if (c2 === quote) {
          this.emitToken("onattribdata");
          this.cbs.onattribend(quote);
          this._state = 8;
        } else if (this.decodeEntities && c2 === "&") {
          this.emitToken("onattribdata");
          this.baseState = this._state;
          this._state = 62;
          this.sectionStart = this._index;
        }
      };
      Tokenizer2.prototype.stateInAttributeValueDoubleQuotes = function(c2) {
        this.handleInAttributeValue(c2, '"');
      };
      Tokenizer2.prototype.stateInAttributeValueSingleQuotes = function(c2) {
        this.handleInAttributeValue(c2, "'");
      };
      Tokenizer2.prototype.stateInAttributeValueNoQuotes = function(c2) {
        if (whitespace(c2) || c2 === ">") {
          this.emitToken("onattribdata");
          this.cbs.onattribend(null);
          this._state = 8;
          this._index--;
        } else if (this.decodeEntities && c2 === "&") {
          this.emitToken("onattribdata");
          this.baseState = this._state;
          this._state = 62;
          this.sectionStart = this._index;
        }
      };
      Tokenizer2.prototype.stateBeforeDeclaration = function(c2) {
        this._state = c2 === "[" ? 23 : c2 === "-" ? 18 : 16;
      };
      Tokenizer2.prototype.stateInDeclaration = function(c2) {
        if (c2 === ">") {
          this.cbs.ondeclaration(this.getSection());
          this._state = 1;
          this.sectionStart = this._index + 1;
        }
      };
      Tokenizer2.prototype.stateInProcessingInstruction = function(c2) {
        if (c2 === ">") {
          this.cbs.onprocessinginstruction(this.getSection());
          this._state = 1;
          this.sectionStart = this._index + 1;
        }
      };
      Tokenizer2.prototype.stateBeforeComment = function(c2) {
        if (c2 === "-") {
          this._state = 19;
          this.sectionStart = this._index + 1;
        } else {
          this._state = 16;
        }
      };
      Tokenizer2.prototype.stateInComment = function(c2) {
        if (c2 === "-")
          this._state = 21;
      };
      Tokenizer2.prototype.stateInSpecialComment = function(c2) {
        if (c2 === ">") {
          this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index));
          this._state = 1;
          this.sectionStart = this._index + 1;
        }
      };
      Tokenizer2.prototype.stateAfterComment1 = function(c2) {
        if (c2 === "-") {
          this._state = 22;
        } else {
          this._state = 19;
        }
      };
      Tokenizer2.prototype.stateAfterComment2 = function(c2) {
        if (c2 === ">") {
          this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index - 2));
          this._state = 1;
          this.sectionStart = this._index + 1;
        } else if (c2 !== "-") {
          this._state = 19;
        }
      };
      Tokenizer2.prototype.stateBeforeCdata6 = function(c2) {
        if (c2 === "[") {
          this._state = 29;
          this.sectionStart = this._index + 1;
        } else {
          this._state = 16;
          this._index--;
        }
      };
      Tokenizer2.prototype.stateInCdata = function(c2) {
        if (c2 === "]")
          this._state = 30;
      };
      Tokenizer2.prototype.stateAfterCdata1 = function(c2) {
        if (c2 === "]")
          this._state = 31;
        else
          this._state = 29;
      };
      Tokenizer2.prototype.stateAfterCdata2 = function(c2) {
        if (c2 === ">") {
          this.cbs.oncdata(this.buffer.substring(this.sectionStart, this._index - 2));
          this._state = 1;
          this.sectionStart = this._index + 1;
        } else if (c2 !== "]") {
          this._state = 29;
        }
      };
      Tokenizer2.prototype.stateBeforeSpecialS = function(c2) {
        if (c2 === "c" || c2 === "C") {
          this._state = 34;
        } else if (c2 === "t" || c2 === "T") {
          this._state = 44;
        } else {
          this._state = 3;
          this._index--;
        }
      };
      Tokenizer2.prototype.stateBeforeSpecialSEnd = function(c2) {
        if (this.special === 2 && (c2 === "c" || c2 === "C")) {
          this._state = 39;
        } else if (this.special === 3 && (c2 === "t" || c2 === "T")) {
          this._state = 48;
        } else
          this._state = 1;
      };
      Tokenizer2.prototype.stateBeforeSpecialLast = function(c2, special) {
        if (c2 === "/" || c2 === ">" || whitespace(c2)) {
          this.special = special;
        }
        this._state = 3;
        this._index--;
      };
      Tokenizer2.prototype.stateAfterSpecialLast = function(c2, sectionStartOffset) {
        if (c2 === ">" || whitespace(c2)) {
          this.special = 1;
          this._state = 6;
          this.sectionStart = this._index - sectionStartOffset;
          this._index--;
        } else
          this._state = 1;
      };
      Tokenizer2.prototype.parseFixedEntity = function(map3) {
        if (map3 === void 0) {
          map3 = this.xmlMode ? xml_json_1.default : entities_json_1.default;
        }
        if (this.sectionStart + 1 < this._index) {
          var entity = this.buffer.substring(this.sectionStart + 1, this._index);
          if (Object.prototype.hasOwnProperty.call(map3, entity)) {
            this.emitPartial(map3[entity]);
            this.sectionStart = this._index + 1;
          }
        }
      };
      Tokenizer2.prototype.parseLegacyEntity = function() {
        var start = this.sectionStart + 1;
        var limit = Math.min(this._index - start, 6);
        while (limit >= 2) {
          var entity = this.buffer.substr(start, limit);
          if (Object.prototype.hasOwnProperty.call(legacy_json_1.default, entity)) {
            this.emitPartial(legacy_json_1.default[entity]);
            this.sectionStart += limit + 1;
            return;
          }
          limit--;
        }
      };
      Tokenizer2.prototype.stateInNamedEntity = function(c2) {
        if (c2 === ";") {
          this.parseFixedEntity();
          if (this.baseState === 1 && this.sectionStart + 1 < this._index && !this.xmlMode) {
            this.parseLegacyEntity();
          }
          this._state = this.baseState;
        } else if ((c2 < "0" || c2 > "9") && !isASCIIAlpha(c2)) {
          if (this.xmlMode || this.sectionStart + 1 === this._index) ;
          else if (this.baseState !== 1) {
            if (c2 !== "=") {
              this.parseFixedEntity(legacy_json_1.default);
            }
          } else {
            this.parseLegacyEntity();
          }
          this._state = this.baseState;
          this._index--;
        }
      };
      Tokenizer2.prototype.decodeNumericEntity = function(offset, base, strict) {
        var sectionStart = this.sectionStart + offset;
        if (sectionStart !== this._index) {
          var entity = this.buffer.substring(sectionStart, this._index);
          var parsed = parseInt(entity, base);
          this.emitPartial(decode_codepoint_1.default(parsed));
          this.sectionStart = strict ? this._index + 1 : this._index;
        }
        this._state = this.baseState;
      };
      Tokenizer2.prototype.stateInNumericEntity = function(c2) {
        if (c2 === ";") {
          this.decodeNumericEntity(2, 10, true);
        } else if (c2 < "0" || c2 > "9") {
          if (!this.xmlMode) {
            this.decodeNumericEntity(2, 10, false);
          } else {
            this._state = this.baseState;
          }
          this._index--;
        }
      };
      Tokenizer2.prototype.stateInHexEntity = function(c2) {
        if (c2 === ";") {
          this.decodeNumericEntity(3, 16, true);
        } else if ((c2 < "a" || c2 > "f") && (c2 < "A" || c2 > "F") && (c2 < "0" || c2 > "9")) {
          if (!this.xmlMode) {
            this.decodeNumericEntity(3, 16, false);
          } else {
            this._state = this.baseState;
          }
          this._index--;
        }
      };
      Tokenizer2.prototype.cleanup = function() {
        if (this.sectionStart < 0) {
          this.buffer = "";
          this.bufferOffset += this._index;
          this._index = 0;
        } else if (this.running) {
          if (this._state === 1) {
            if (this.sectionStart !== this._index) {
              this.cbs.ontext(this.buffer.substr(this.sectionStart));
            }
            this.buffer = "";
            this.bufferOffset += this._index;
            this._index = 0;
          } else if (this.sectionStart === this._index) {
            this.buffer = "";
            this.bufferOffset += this._index;
            this._index = 0;
          } else {
            this.buffer = this.buffer.substr(this.sectionStart);
            this._index -= this.sectionStart;
            this.bufferOffset += this.sectionStart;
          }
          this.sectionStart = 0;
        }
      };
      Tokenizer2.prototype.parse = function() {
        while (this._index < this.buffer.length && this.running) {
          var c2 = this.buffer.charAt(this._index);
          if (this._state === 1) {
            this.stateText(c2);
          } else if (this._state === 12) {
            this.stateInAttributeValueDoubleQuotes(c2);
          } else if (this._state === 9) {
            this.stateInAttributeName(c2);
          } else if (this._state === 19) {
            this.stateInComment(c2);
          } else if (this._state === 20) {
            this.stateInSpecialComment(c2);
          } else if (this._state === 8) {
            this.stateBeforeAttributeName(c2);
          } else if (this._state === 3) {
            this.stateInTagName(c2);
          } else if (this._state === 6) {
            this.stateInClosingTagName(c2);
          } else if (this._state === 2) {
            this.stateBeforeTagName(c2);
          } else if (this._state === 10) {
            this.stateAfterAttributeName(c2);
          } else if (this._state === 13) {
            this.stateInAttributeValueSingleQuotes(c2);
          } else if (this._state === 11) {
            this.stateBeforeAttributeValue(c2);
          } else if (this._state === 5) {
            this.stateBeforeClosingTagName(c2);
          } else if (this._state === 7) {
            this.stateAfterClosingTagName(c2);
          } else if (this._state === 32) {
            this.stateBeforeSpecialS(c2);
          } else if (this._state === 21) {
            this.stateAfterComment1(c2);
          } else if (this._state === 14) {
            this.stateInAttributeValueNoQuotes(c2);
          } else if (this._state === 4) {
            this.stateInSelfClosingTag(c2);
          } else if (this._state === 16) {
            this.stateInDeclaration(c2);
          } else if (this._state === 15) {
            this.stateBeforeDeclaration(c2);
          } else if (this._state === 22) {
            this.stateAfterComment2(c2);
          } else if (this._state === 18) {
            this.stateBeforeComment(c2);
          } else if (this._state === 33) {
            this.stateBeforeSpecialSEnd(c2);
          } else if (this._state === 53) {
            stateAfterSpecialTEnd(this, c2);
          } else if (this._state === 39) {
            stateAfterScript1(this, c2);
          } else if (this._state === 40) {
            stateAfterScript2(this, c2);
          } else if (this._state === 41) {
            stateAfterScript3(this, c2);
          } else if (this._state === 34) {
            stateBeforeScript1(this, c2);
          } else if (this._state === 35) {
            stateBeforeScript2(this, c2);
          } else if (this._state === 36) {
            stateBeforeScript3(this, c2);
          } else if (this._state === 37) {
            stateBeforeScript4(this, c2);
          } else if (this._state === 38) {
            this.stateBeforeSpecialLast(
              c2,
              2
              /* Script */
            );
          } else if (this._state === 42) {
            stateAfterScript4(this, c2);
          } else if (this._state === 43) {
            this.stateAfterSpecialLast(c2, 6);
          } else if (this._state === 44) {
            stateBeforeStyle1(this, c2);
          } else if (this._state === 29) {
            this.stateInCdata(c2);
          } else if (this._state === 45) {
            stateBeforeStyle2(this, c2);
          } else if (this._state === 46) {
            stateBeforeStyle3(this, c2);
          } else if (this._state === 47) {
            this.stateBeforeSpecialLast(
              c2,
              3
              /* Style */
            );
          } else if (this._state === 48) {
            stateAfterStyle1(this, c2);
          } else if (this._state === 49) {
            stateAfterStyle2(this, c2);
          } else if (this._state === 50) {
            stateAfterStyle3(this, c2);
          } else if (this._state === 51) {
            this.stateAfterSpecialLast(c2, 5);
          } else if (this._state === 52) {
            stateBeforeSpecialT(this, c2);
          } else if (this._state === 54) {
            stateBeforeTitle1(this, c2);
          } else if (this._state === 55) {
            stateBeforeTitle2(this, c2);
          } else if (this._state === 56) {
            stateBeforeTitle3(this, c2);
          } else if (this._state === 57) {
            this.stateBeforeSpecialLast(
              c2,
              4
              /* Title */
            );
          } else if (this._state === 58) {
            stateAfterTitle1(this, c2);
          } else if (this._state === 59) {
            stateAfterTitle2(this, c2);
          } else if (this._state === 60) {
            stateAfterTitle3(this, c2);
          } else if (this._state === 61) {
            this.stateAfterSpecialLast(c2, 5);
          } else if (this._state === 17) {
            this.stateInProcessingInstruction(c2);
          } else if (this._state === 64) {
            this.stateInNamedEntity(c2);
          } else if (this._state === 23) {
            stateBeforeCdata1(this, c2);
          } else if (this._state === 62) {
            stateBeforeEntity(this, c2);
          } else if (this._state === 24) {
            stateBeforeCdata2(this, c2);
          } else if (this._state === 25) {
            stateBeforeCdata3(this, c2);
          } else if (this._state === 30) {
            this.stateAfterCdata1(c2);
          } else if (this._state === 31) {
            this.stateAfterCdata2(c2);
          } else if (this._state === 26) {
            stateBeforeCdata4(this, c2);
          } else if (this._state === 27) {
            stateBeforeCdata5(this, c2);
          } else if (this._state === 28) {
            this.stateBeforeCdata6(c2);
          } else if (this._state === 66) {
            this.stateInHexEntity(c2);
          } else if (this._state === 65) {
            this.stateInNumericEntity(c2);
          } else if (this._state === 63) {
            stateBeforeNumericEntity(this, c2);
          } else {
            this.cbs.onerror(Error("unknown _state"), this._state);
          }
          this._index++;
        }
        this.cleanup();
      };
      Tokenizer2.prototype.finish = function() {
        if (this.sectionStart < this._index) {
          this.handleTrailingData();
        }
        this.cbs.onend();
      };
      Tokenizer2.prototype.handleTrailingData = function() {
        var data = this.buffer.substr(this.sectionStart);
        if (this._state === 29 || this._state === 30 || this._state === 31) {
          this.cbs.oncdata(data);
        } else if (this._state === 19 || this._state === 21 || this._state === 22) {
          this.cbs.oncomment(data);
        } else if (this._state === 64 && !this.xmlMode) {
          this.parseLegacyEntity();
          if (this.sectionStart < this._index) {
            this._state = this.baseState;
            this.handleTrailingData();
          }
        } else if (this._state === 65 && !this.xmlMode) {
          this.decodeNumericEntity(2, 10, false);
          if (this.sectionStart < this._index) {
            this._state = this.baseState;
            this.handleTrailingData();
          }
        } else if (this._state === 66 && !this.xmlMode) {
          this.decodeNumericEntity(3, 16, false);
          if (this.sectionStart < this._index) {
            this._state = this.baseState;
            this.handleTrailingData();
          }
        } else if (this._state !== 3 && this._state !== 8 && this._state !== 11 && this._state !== 10 && this._state !== 9 && this._state !== 13 && this._state !== 12 && this._state !== 14 && this._state !== 6) {
          this.cbs.ontext(data);
        }
      };
      Tokenizer2.prototype.getSection = function() {
        return this.buffer.substring(this.sectionStart, this._index);
      };
      Tokenizer2.prototype.emitToken = function(name) {
        this.cbs[name](this.getSection());
        this.sectionStart = -1;
      };
      Tokenizer2.prototype.emitPartial = function(value) {
        if (this.baseState !== 1) {
          this.cbs.onattribdata(value);
        } else {
          this.cbs.ontext(value);
        }
      };
      return Tokenizer2;
    }()
  );
  Tokenizer.default = Tokenizer$1;
  return Tokenizer;
}
var hasRequiredParser;
function requireParser() {
  if (hasRequiredParser) return Parser;
  hasRequiredParser = 1;
  var __importDefault = Parser && Parser.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(Parser, "__esModule", { value: true });
  Parser.Parser = void 0;
  var Tokenizer_1 = __importDefault(/* @__PURE__ */ requireTokenizer());
  var formTags = /* @__PURE__ */ new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea"
  ]);
  var pTag = /* @__PURE__ */ new Set(["p"]);
  var openImpliesClose = {
    tr: /* @__PURE__ */ new Set(["tr", "th", "td"]),
    th: /* @__PURE__ */ new Set(["th"]),
    td: /* @__PURE__ */ new Set(["thead", "th", "td"]),
    body: /* @__PURE__ */ new Set(["head", "link", "script"]),
    li: /* @__PURE__ */ new Set(["li"]),
    p: pTag,
    h1: pTag,
    h2: pTag,
    h3: pTag,
    h4: pTag,
    h5: pTag,
    h6: pTag,
    select: formTags,
    input: formTags,
    output: formTags,
    button: formTags,
    datalist: formTags,
    textarea: formTags,
    option: /* @__PURE__ */ new Set(["option"]),
    optgroup: /* @__PURE__ */ new Set(["optgroup", "option"]),
    dd: /* @__PURE__ */ new Set(["dt", "dd"]),
    dt: /* @__PURE__ */ new Set(["dt", "dd"]),
    address: pTag,
    article: pTag,
    aside: pTag,
    blockquote: pTag,
    details: pTag,
    div: pTag,
    dl: pTag,
    fieldset: pTag,
    figcaption: pTag,
    figure: pTag,
    footer: pTag,
    form: pTag,
    header: pTag,
    hr: pTag,
    main: pTag,
    nav: pTag,
    ol: pTag,
    pre: pTag,
    section: pTag,
    table: pTag,
    ul: pTag,
    rt: /* @__PURE__ */ new Set(["rt", "rp"]),
    rp: /* @__PURE__ */ new Set(["rt", "rp"]),
    tbody: /* @__PURE__ */ new Set(["thead", "tbody"]),
    tfoot: /* @__PURE__ */ new Set(["thead", "tbody"])
  };
  var voidElements = /* @__PURE__ */ new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ]);
  var foreignContextElements = /* @__PURE__ */ new Set(["math", "svg"]);
  var htmlIntegrationElements = /* @__PURE__ */ new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title"
  ]);
  var reNameEnd = /\s|\//;
  var Parser$1 = (
    /** @class */
    function() {
      function Parser2(cbs, options) {
        if (options === void 0) {
          options = {};
        }
        var _a2, _b2, _c, _d, _e;
        this.startIndex = 0;
        this.endIndex = null;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.foreignContext = [];
        this.options = options;
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
        this.lowerCaseTagNames = (_a2 = options.lowerCaseTags) !== null && _a2 !== void 0 ? _a2 : !options.xmlMode;
        this.lowerCaseAttributeNames = (_b2 = options.lowerCaseAttributeNames) !== null && _b2 !== void 0 ? _b2 : !options.xmlMode;
        this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_1.default)(this.options, this);
        (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
      }
      Parser2.prototype.updatePosition = function(initialOffset) {
        if (this.endIndex === null) {
          if (this.tokenizer.sectionStart <= initialOffset) {
            this.startIndex = 0;
          } else {
            this.startIndex = this.tokenizer.sectionStart - initialOffset;
          }
        } else {
          this.startIndex = this.endIndex + 1;
        }
        this.endIndex = this.tokenizer.getAbsoluteIndex();
      };
      Parser2.prototype.ontext = function(data) {
        var _a2, _b2;
        this.updatePosition(1);
        this.endIndex--;
        (_b2 = (_a2 = this.cbs).ontext) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, data);
      };
      Parser2.prototype.onopentagname = function(name) {
        var _a2, _b2;
        if (this.lowerCaseTagNames) {
          name = name.toLowerCase();
        }
        this.tagname = name;
        if (!this.options.xmlMode && Object.prototype.hasOwnProperty.call(openImpliesClose, name)) {
          var el2 = void 0;
          while (this.stack.length > 0 && openImpliesClose[name].has(el2 = this.stack[this.stack.length - 1])) {
            this.onclosetag(el2);
          }
        }
        if (this.options.xmlMode || !voidElements.has(name)) {
          this.stack.push(name);
          if (foreignContextElements.has(name)) {
            this.foreignContext.push(true);
          } else if (htmlIntegrationElements.has(name)) {
            this.foreignContext.push(false);
          }
        }
        (_b2 = (_a2 = this.cbs).onopentagname) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, name);
        if (this.cbs.onopentag)
          this.attribs = {};
      };
      Parser2.prototype.onopentagend = function() {
        var _a2, _b2;
        this.updatePosition(1);
        if (this.attribs) {
          (_b2 = (_a2 = this.cbs).onopentag) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, this.tagname, this.attribs);
          this.attribs = null;
        }
        if (!this.options.xmlMode && this.cbs.onclosetag && voidElements.has(this.tagname)) {
          this.cbs.onclosetag(this.tagname);
        }
        this.tagname = "";
      };
      Parser2.prototype.onclosetag = function(name) {
        this.updatePosition(1);
        if (this.lowerCaseTagNames) {
          name = name.toLowerCase();
        }
        if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) {
          this.foreignContext.pop();
        }
        if (this.stack.length && (this.options.xmlMode || !voidElements.has(name))) {
          var pos = this.stack.lastIndexOf(name);
          if (pos !== -1) {
            if (this.cbs.onclosetag) {
              pos = this.stack.length - pos;
              while (pos--) {
                this.cbs.onclosetag(this.stack.pop());
              }
            } else
              this.stack.length = pos;
          } else if (name === "p" && !this.options.xmlMode) {
            this.onopentagname(name);
            this.closeCurrentTag();
          }
        } else if (!this.options.xmlMode && (name === "br" || name === "p")) {
          this.onopentagname(name);
          this.closeCurrentTag();
        }
      };
      Parser2.prototype.onselfclosingtag = function() {
        if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
          this.closeCurrentTag();
        } else {
          this.onopentagend();
        }
      };
      Parser2.prototype.closeCurrentTag = function() {
        var _a2, _b2;
        var name = this.tagname;
        this.onopentagend();
        if (this.stack[this.stack.length - 1] === name) {
          (_b2 = (_a2 = this.cbs).onclosetag) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, name);
          this.stack.pop();
        }
      };
      Parser2.prototype.onattribname = function(name) {
        if (this.lowerCaseAttributeNames) {
          name = name.toLowerCase();
        }
        this.attribname = name;
      };
      Parser2.prototype.onattribdata = function(value) {
        this.attribvalue += value;
      };
      Parser2.prototype.onattribend = function(quote) {
        var _a2, _b2;
        (_b2 = (_a2 = this.cbs).onattribute) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, this.attribname, this.attribvalue, quote);
        if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
          this.attribs[this.attribname] = this.attribvalue;
        }
        this.attribname = "";
        this.attribvalue = "";
      };
      Parser2.prototype.getInstructionName = function(value) {
        var idx = value.search(reNameEnd);
        var name = idx < 0 ? value : value.substr(0, idx);
        if (this.lowerCaseTagNames) {
          name = name.toLowerCase();
        }
        return name;
      };
      Parser2.prototype.ondeclaration = function(value) {
        if (this.cbs.onprocessinginstruction) {
          var name_1 = this.getInstructionName(value);
          this.cbs.onprocessinginstruction("!" + name_1, "!" + value);
        }
      };
      Parser2.prototype.onprocessinginstruction = function(value) {
        if (this.cbs.onprocessinginstruction) {
          var name_2 = this.getInstructionName(value);
          this.cbs.onprocessinginstruction("?" + name_2, "?" + value);
        }
      };
      Parser2.prototype.oncomment = function(value) {
        var _a2, _b2, _c, _d;
        this.updatePosition(4);
        (_b2 = (_a2 = this.cbs).oncomment) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, value);
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
      };
      Parser2.prototype.oncdata = function(value) {
        var _a2, _b2, _c, _d, _e, _f;
        this.updatePosition(1);
        if (this.options.xmlMode || this.options.recognizeCDATA) {
          (_b2 = (_a2 = this.cbs).oncdatastart) === null || _b2 === void 0 ? void 0 : _b2.call(_a2);
          (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
          (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
        } else {
          this.oncomment("[CDATA[" + value + "]]");
        }
      };
      Parser2.prototype.onerror = function(err) {
        var _a2, _b2;
        (_b2 = (_a2 = this.cbs).onerror) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, err);
      };
      Parser2.prototype.onend = function() {
        var _a2, _b2;
        if (this.cbs.onclosetag) {
          for (var i2 = this.stack.length; i2 > 0; this.cbs.onclosetag(this.stack[--i2]))
            ;
        }
        (_b2 = (_a2 = this.cbs).onend) === null || _b2 === void 0 ? void 0 : _b2.call(_a2);
      };
      Parser2.prototype.reset = function() {
        var _a2, _b2, _c, _d;
        (_b2 = (_a2 = this.cbs).onreset) === null || _b2 === void 0 ? void 0 : _b2.call(_a2);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack = [];
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
      };
      Parser2.prototype.parseComplete = function(data) {
        this.reset();
        this.end(data);
      };
      Parser2.prototype.write = function(chunk) {
        this.tokenizer.write(chunk);
      };
      Parser2.prototype.end = function(chunk) {
        this.tokenizer.end(chunk);
      };
      Parser2.prototype.pause = function() {
        this.tokenizer.pause();
      };
      Parser2.prototype.resume = function() {
        this.tokenizer.resume();
      };
      Parser2.prototype.parseChunk = function(chunk) {
        this.write(chunk);
      };
      Parser2.prototype.done = function(chunk) {
        this.end(chunk);
      };
      return Parser2;
    }()
  );
  Parser.Parser = Parser$1;
  return Parser;
}
var lib$4 = {};
var lib$3 = {};
var hasRequiredLib$5;
function requireLib$5() {
  if (hasRequiredLib$5) return lib$3;
  hasRequiredLib$5 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
    var ElementType;
    (function(ElementType2) {
      ElementType2["Root"] = "root";
      ElementType2["Text"] = "text";
      ElementType2["Directive"] = "directive";
      ElementType2["Comment"] = "comment";
      ElementType2["Script"] = "script";
      ElementType2["Style"] = "style";
      ElementType2["Tag"] = "tag";
      ElementType2["CDATA"] = "cdata";
      ElementType2["Doctype"] = "doctype";
    })(ElementType = exports.ElementType || (exports.ElementType = {}));
    function isTag(elem) {
      return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
    }
    exports.isTag = isTag;
    exports.Root = ElementType.Root;
    exports.Text = ElementType.Text;
    exports.Directive = ElementType.Directive;
    exports.Comment = ElementType.Comment;
    exports.Script = ElementType.Script;
    exports.Style = ElementType.Style;
    exports.Tag = ElementType.Tag;
    exports.CDATA = ElementType.CDATA;
    exports.Doctype = ElementType.Doctype;
  })(lib$3);
  return lib$3;
}
var node = {};
var hasRequiredNode;
function requireNode() {
  if (hasRequiredNode) return node;
  hasRequiredNode = 1;
  var __extends = node && node.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d2, b2) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
      } || function(d3, b3) {
        for (var p2 in b3) if (Object.prototype.hasOwnProperty.call(b3, p2)) d3[p2] = b3[p2];
      };
      return extendStatics(d2, b2);
    };
    return function(d2, b2) {
      if (typeof b2 !== "function" && b2 !== null)
        throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
      extendStatics(d2, b2);
      function __() {
        this.constructor = d2;
      }
      d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
    };
  }();
  var __assign = node && node.__assign || function() {
    __assign = Object.assign || function(t2) {
      for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
        s2 = arguments[i2];
        for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
      }
      return t2;
    };
    return __assign.apply(this, arguments);
  };
  Object.defineProperty(node, "__esModule", { value: true });
  node.cloneNode = node.hasChildren = node.isDocument = node.isDirective = node.isComment = node.isText = node.isCDATA = node.isTag = node.Element = node.Document = node.NodeWithChildren = node.ProcessingInstruction = node.Comment = node.Text = node.DataNode = node.Node = void 0;
  var domelementtype_1 = /* @__PURE__ */ requireLib$5();
  var nodeTypes = /* @__PURE__ */ new Map([
    [domelementtype_1.ElementType.Tag, 1],
    [domelementtype_1.ElementType.Script, 1],
    [domelementtype_1.ElementType.Style, 1],
    [domelementtype_1.ElementType.Directive, 1],
    [domelementtype_1.ElementType.Text, 3],
    [domelementtype_1.ElementType.CDATA, 4],
    [domelementtype_1.ElementType.Comment, 8],
    [domelementtype_1.ElementType.Root, 9]
  ]);
  var Node = (
    /** @class */
    function() {
      function Node2(type) {
        this.type = type;
        this.parent = null;
        this.prev = null;
        this.next = null;
        this.startIndex = null;
        this.endIndex = null;
      }
      Object.defineProperty(Node2.prototype, "nodeType", {
        // Read-only aliases
        /**
         * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible
         * node {@link type}.
         */
        get: function() {
          var _a2;
          return (_a2 = nodeTypes.get(this.type)) !== null && _a2 !== void 0 ? _a2 : 1;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Node2.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.parent;
        },
        set: function(parent) {
          this.parent = parent;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Node2.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.prev;
        },
        set: function(prev) {
          this.prev = prev;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Node2.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.next;
        },
        set: function(next) {
          this.next = next;
        },
        enumerable: false,
        configurable: true
      });
      Node2.prototype.cloneNode = function(recursive) {
        if (recursive === void 0) {
          recursive = false;
        }
        return cloneNode(this, recursive);
      };
      return Node2;
    }()
  );
  node.Node = Node;
  var DataNode = (
    /** @class */
    function(_super) {
      __extends(DataNode2, _super);
      function DataNode2(type, data) {
        var _this = _super.call(this, type) || this;
        _this.data = data;
        return _this;
      }
      Object.defineProperty(DataNode2.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.data;
        },
        set: function(data) {
          this.data = data;
        },
        enumerable: false,
        configurable: true
      });
      return DataNode2;
    }(Node)
  );
  node.DataNode = DataNode;
  var Text = (
    /** @class */
    function(_super) {
      __extends(Text2, _super);
      function Text2(data) {
        return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
      }
      return Text2;
    }(DataNode)
  );
  node.Text = Text;
  var Comment = (
    /** @class */
    function(_super) {
      __extends(Comment2, _super);
      function Comment2(data) {
        return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
      }
      return Comment2;
    }(DataNode)
  );
  node.Comment = Comment;
  var ProcessingInstruction = (
    /** @class */
    function(_super) {
      __extends(ProcessingInstruction2, _super);
      function ProcessingInstruction2(name, data) {
        var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;
        _this.name = name;
        return _this;
      }
      return ProcessingInstruction2;
    }(DataNode)
  );
  node.ProcessingInstruction = ProcessingInstruction;
  var NodeWithChildren = (
    /** @class */
    function(_super) {
      __extends(NodeWithChildren2, _super);
      function NodeWithChildren2(type, children) {
        var _this = _super.call(this, type) || this;
        _this.children = children;
        return _this;
      }
      Object.defineProperty(NodeWithChildren2.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function() {
          var _a2;
          return (_a2 = this.children[0]) !== null && _a2 !== void 0 ? _a2 : null;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(NodeWithChildren2.prototype, "lastChild", {
        /** Last child of the node. */
        get: function() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(NodeWithChildren2.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.children;
        },
        set: function(children) {
          this.children = children;
        },
        enumerable: false,
        configurable: true
      });
      return NodeWithChildren2;
    }(Node)
  );
  node.NodeWithChildren = NodeWithChildren;
  var Document = (
    /** @class */
    function(_super) {
      __extends(Document2, _super);
      function Document2(children) {
        return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
      }
      return Document2;
    }(NodeWithChildren)
  );
  node.Document = Document;
  var Element2 = (
    /** @class */
    function(_super) {
      __extends(Element3, _super);
      function Element3(name, attribs, children, type) {
        if (children === void 0) {
          children = [];
        }
        if (type === void 0) {
          type = name === "script" ? domelementtype_1.ElementType.Script : name === "style" ? domelementtype_1.ElementType.Style : domelementtype_1.ElementType.Tag;
        }
        var _this = _super.call(this, type, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        return _this;
      }
      Object.defineProperty(Element3.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.name;
        },
        set: function(name) {
          this.name = name;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Element3.prototype, "attributes", {
        get: function() {
          var _this = this;
          return Object.keys(this.attribs).map(function(name) {
            var _a2, _b2;
            return {
              name,
              value: _this.attribs[name],
              namespace: (_a2 = _this["x-attribsNamespace"]) === null || _a2 === void 0 ? void 0 : _a2[name],
              prefix: (_b2 = _this["x-attribsPrefix"]) === null || _b2 === void 0 ? void 0 : _b2[name]
            };
          });
        },
        enumerable: false,
        configurable: true
      });
      return Element3;
    }(NodeWithChildren)
  );
  node.Element = Element2;
  function isTag(node2) {
    return (0, domelementtype_1.isTag)(node2);
  }
  node.isTag = isTag;
  function isCDATA(node2) {
    return node2.type === domelementtype_1.ElementType.CDATA;
  }
  node.isCDATA = isCDATA;
  function isText(node2) {
    return node2.type === domelementtype_1.ElementType.Text;
  }
  node.isText = isText;
  function isComment(node2) {
    return node2.type === domelementtype_1.ElementType.Comment;
  }
  node.isComment = isComment;
  function isDirective(node2) {
    return node2.type === domelementtype_1.ElementType.Directive;
  }
  node.isDirective = isDirective;
  function isDocument(node2) {
    return node2.type === domelementtype_1.ElementType.Root;
  }
  node.isDocument = isDocument;
  function hasChildren(node2) {
    return Object.prototype.hasOwnProperty.call(node2, "children");
  }
  node.hasChildren = hasChildren;
  function cloneNode(node2, recursive) {
    if (recursive === void 0) {
      recursive = false;
    }
    var result;
    if (isText(node2)) {
      result = new Text(node2.data);
    } else if (isComment(node2)) {
      result = new Comment(node2.data);
    } else if (isTag(node2)) {
      var children = recursive ? cloneChildren(node2.children) : [];
      var clone_1 = new Element2(node2.name, __assign({}, node2.attribs), children);
      children.forEach(function(child) {
        return child.parent = clone_1;
      });
      if (node2.namespace != null) {
        clone_1.namespace = node2.namespace;
      }
      if (node2["x-attribsNamespace"]) {
        clone_1["x-attribsNamespace"] = __assign({}, node2["x-attribsNamespace"]);
      }
      if (node2["x-attribsPrefix"]) {
        clone_1["x-attribsPrefix"] = __assign({}, node2["x-attribsPrefix"]);
      }
      result = clone_1;
    } else if (isCDATA(node2)) {
      var children = recursive ? cloneChildren(node2.children) : [];
      var clone_2 = new NodeWithChildren(domelementtype_1.ElementType.CDATA, children);
      children.forEach(function(child) {
        return child.parent = clone_2;
      });
      result = clone_2;
    } else if (isDocument(node2)) {
      var children = recursive ? cloneChildren(node2.children) : [];
      var clone_3 = new Document(children);
      children.forEach(function(child) {
        return child.parent = clone_3;
      });
      if (node2["x-mode"]) {
        clone_3["x-mode"] = node2["x-mode"];
      }
      result = clone_3;
    } else if (isDirective(node2)) {
      var instruction = new ProcessingInstruction(node2.name, node2.data);
      if (node2["x-name"] != null) {
        instruction["x-name"] = node2["x-name"];
        instruction["x-publicId"] = node2["x-publicId"];
        instruction["x-systemId"] = node2["x-systemId"];
      }
      result = instruction;
    } else {
      throw new Error("Not implemented yet: ".concat(node2.type));
    }
    result.startIndex = node2.startIndex;
    result.endIndex = node2.endIndex;
    if (node2.sourceCodeLocation != null) {
      result.sourceCodeLocation = node2.sourceCodeLocation;
    }
    return result;
  }
  node.cloneNode = cloneNode;
  function cloneChildren(childs) {
    var children = childs.map(function(child) {
      return cloneNode(child, true);
    });
    for (var i2 = 1; i2 < children.length; i2++) {
      children[i2].prev = children[i2 - 1];
      children[i2 - 1].next = children[i2];
    }
    return children;
  }
  return node;
}
var hasRequiredLib$4;
function requireLib$4() {
  if (hasRequiredLib$4) return lib$4;
  hasRequiredLib$4 = 1;
  (function(exports) {
    var __createBinding = lib$4 && lib$4.__createBinding || (Object.create ? function(o2, m2, k2, k22) {
      if (k22 === void 0) k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m2, k2);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m2[k2];
        } };
      }
      Object.defineProperty(o2, k22, desc);
    } : function(o2, m2, k2, k22) {
      if (k22 === void 0) k22 = k2;
      o2[k22] = m2[k2];
    });
    var __exportStar = lib$4 && lib$4.__exportStar || function(m2, exports2) {
      for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2)) __createBinding(exports2, m2, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DomHandler = void 0;
    var domelementtype_1 = /* @__PURE__ */ requireLib$5();
    var node_1 = /* @__PURE__ */ requireNode();
    __exportStar(/* @__PURE__ */ requireNode(), exports);
    var reWhitespace = /\s+/g;
    var defaultOpts = {
      normalizeWhitespace: false,
      withStartIndices: false,
      withEndIndices: false,
      xmlMode: false
    };
    var DomHandler = (
      /** @class */
      function() {
        function DomHandler2(callback, options, elementCB) {
          this.dom = [];
          this.root = new node_1.Document(this.dom);
          this.done = false;
          this.tagStack = [this.root];
          this.lastNode = null;
          this.parser = null;
          if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
          }
          if (typeof callback === "object") {
            options = callback;
            callback = void 0;
          }
          this.callback = callback !== null && callback !== void 0 ? callback : null;
          this.options = options !== null && options !== void 0 ? options : defaultOpts;
          this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
        }
        DomHandler2.prototype.onparserinit = function(parser) {
          this.parser = parser;
        };
        DomHandler2.prototype.onreset = function() {
          this.dom = [];
          this.root = new node_1.Document(this.dom);
          this.done = false;
          this.tagStack = [this.root];
          this.lastNode = null;
          this.parser = null;
        };
        DomHandler2.prototype.onend = function() {
          if (this.done)
            return;
          this.done = true;
          this.parser = null;
          this.handleCallback(null);
        };
        DomHandler2.prototype.onerror = function(error) {
          this.handleCallback(error);
        };
        DomHandler2.prototype.onclosetag = function() {
          this.lastNode = null;
          var elem = this.tagStack.pop();
          if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
          }
          if (this.elementCB)
            this.elementCB(elem);
        };
        DomHandler2.prototype.onopentag = function(name, attribs) {
          var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : void 0;
          var element = new node_1.Element(name, attribs, void 0, type);
          this.addNode(element);
          this.tagStack.push(element);
        };
        DomHandler2.prototype.ontext = function(data) {
          var normalizeWhitespace = this.options.normalizeWhitespace;
          var lastNode = this.lastNode;
          if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            if (normalizeWhitespace) {
              lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
            } else {
              lastNode.data += data;
            }
            if (this.options.withEndIndices) {
              lastNode.endIndex = this.parser.endIndex;
            }
          } else {
            if (normalizeWhitespace) {
              data = data.replace(reWhitespace, " ");
            }
            var node2 = new node_1.Text(data);
            this.addNode(node2);
            this.lastNode = node2;
          }
        };
        DomHandler2.prototype.oncomment = function(data) {
          if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
          }
          var node2 = new node_1.Comment(data);
          this.addNode(node2);
          this.lastNode = node2;
        };
        DomHandler2.prototype.oncommentend = function() {
          this.lastNode = null;
        };
        DomHandler2.prototype.oncdatastart = function() {
          var text = new node_1.Text("");
          var node2 = new node_1.NodeWithChildren(domelementtype_1.ElementType.CDATA, [text]);
          this.addNode(node2);
          text.parent = node2;
          this.lastNode = text;
        };
        DomHandler2.prototype.oncdataend = function() {
          this.lastNode = null;
        };
        DomHandler2.prototype.onprocessinginstruction = function(name, data) {
          var node2 = new node_1.ProcessingInstruction(name, data);
          this.addNode(node2);
        };
        DomHandler2.prototype.handleCallback = function(error) {
          if (typeof this.callback === "function") {
            this.callback(error, this.dom);
          } else if (error) {
            throw error;
          }
        };
        DomHandler2.prototype.addNode = function(node2) {
          var parent = this.tagStack[this.tagStack.length - 1];
          var previousSibling = parent.children[parent.children.length - 1];
          if (this.options.withStartIndices) {
            node2.startIndex = this.parser.startIndex;
          }
          if (this.options.withEndIndices) {
            node2.endIndex = this.parser.endIndex;
          }
          parent.children.push(node2);
          if (previousSibling) {
            node2.prev = previousSibling;
            previousSibling.next = node2;
          }
          node2.parent = parent;
          this.lastNode = null;
        };
        return DomHandler2;
      }()
    );
    exports.DomHandler = DomHandler;
    exports.default = DomHandler;
  })(lib$4);
  return lib$4;
}
var FeedHandler = {};
var lib$2 = {};
var stringify = {};
var lib$1 = {};
var lib = {};
var decode = {};
var hasRequiredDecode;
function requireDecode() {
  if (hasRequiredDecode) return decode;
  hasRequiredDecode = 1;
  var __importDefault = decode && decode.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(decode, "__esModule", { value: true });
  decode.decodeHTML = decode.decodeHTMLStrict = decode.decodeXML = void 0;
  var entities_json_1 = __importDefault(require$$1$1);
  var legacy_json_1 = __importDefault(require$$1);
  var xml_json_1 = __importDefault(require$$0);
  var decode_codepoint_1 = __importDefault(/* @__PURE__ */ requireDecode_codepoint());
  var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
  decode.decodeXML = getStrictDecoder(xml_json_1.default);
  decode.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
  function getStrictDecoder(map3) {
    var replace2 = getReplacer(map3);
    return function(str) {
      return String(str).replace(strictEntityRe, replace2);
    };
  }
  var sorter = function(a2, b2) {
    return a2 < b2 ? 1 : -1;
  };
  decode.decodeHTML = function() {
    var legacy2 = Object.keys(legacy_json_1.default).sort(sorter);
    var keys = Object.keys(entities_json_1.default).sort(sorter);
    for (var i2 = 0, j2 = 0; i2 < keys.length; i2++) {
      if (legacy2[j2] === keys[i2]) {
        keys[i2] += ";?";
        j2++;
      } else {
        keys[i2] += ";";
      }
    }
    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace2 = getReplacer(entities_json_1.default);
    function replacer(str) {
      if (str.substr(-1) !== ";")
        str += ";";
      return replace2(str);
    }
    return function(str) {
      return String(str).replace(re, replacer);
    };
  }();
  function getReplacer(map3) {
    return function replace2(str) {
      if (str.charAt(1) === "#") {
        var secondChar = str.charAt(2);
        if (secondChar === "X" || secondChar === "x") {
          return decode_codepoint_1.default(parseInt(str.substr(3), 16));
        }
        return decode_codepoint_1.default(parseInt(str.substr(2), 10));
      }
      return map3[str.slice(1, -1)] || str;
    };
  }
  return decode;
}
var encode = {};
var hasRequiredEncode;
function requireEncode() {
  if (hasRequiredEncode) return encode;
  hasRequiredEncode = 1;
  var __importDefault = encode && encode.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(encode, "__esModule", { value: true });
  encode.escapeUTF8 = encode.escape = encode.encodeNonAsciiHTML = encode.encodeHTML = encode.encodeXML = void 0;
  var xml_json_1 = __importDefault(require$$0);
  var inverseXML = getInverseObj(xml_json_1.default);
  var xmlReplacer = getInverseReplacer(inverseXML);
  encode.encodeXML = getASCIIEncoder(inverseXML);
  var entities_json_1 = __importDefault(require$$1$1);
  var inverseHTML = getInverseObj(entities_json_1.default);
  var htmlReplacer = getInverseReplacer(inverseHTML);
  encode.encodeHTML = getInverse(inverseHTML, htmlReplacer);
  encode.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
  function getInverseObj(obj) {
    return Object.keys(obj).sort().reduce(function(inverse, name) {
      inverse[obj[name]] = "&" + name + ";";
      return inverse;
    }, {});
  }
  function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];
    for (var _i = 0, _a2 = Object.keys(inverse); _i < _a2.length; _i++) {
      var k2 = _a2[_i];
      if (k2.length === 1) {
        single.push("\\" + k2);
      } else {
        multiple.push(k2);
      }
    }
    single.sort();
    for (var start = 0; start < single.length - 1; start++) {
      var end = start;
      while (end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
        end += 1;
      }
      var count = 1 + end - start;
      if (count < 3)
        continue;
      single.splice(start, count, single[start] + "-" + single[end]);
    }
    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
  }
  var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
  var getCodePoint = (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    String.prototype.codePointAt != null ? (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      function(str) {
        return str.codePointAt(0);
      }
    ) : (
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      function(c2) {
        return (c2.charCodeAt(0) - 55296) * 1024 + c2.charCodeAt(1) - 56320 + 65536;
      }
    )
  );
  function singleCharReplacer(c2) {
    return "&#x" + (c2.length > 1 ? getCodePoint(c2) : c2.charCodeAt(0)).toString(16).toUpperCase() + ";";
  }
  function getInverse(inverse, re) {
    return function(data) {
      return data.replace(re, function(name) {
        return inverse[name];
      }).replace(reNonASCII, singleCharReplacer);
    };
  }
  var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
  function escape(data) {
    return data.replace(reEscapeChars, singleCharReplacer);
  }
  encode.escape = escape;
  function escapeUTF8(data) {
    return data.replace(xmlReplacer, singleCharReplacer);
  }
  encode.escapeUTF8 = escapeUTF8;
  function getASCIIEncoder(obj) {
    return function(data) {
      return data.replace(reEscapeChars, function(c2) {
        return obj[c2] || singleCharReplacer(c2);
      });
    };
  }
  return encode;
}
var hasRequiredLib$3;
function requireLib$3() {
  if (hasRequiredLib$3) return lib;
  hasRequiredLib$3 = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
    var decode_1 = /* @__PURE__ */ requireDecode();
    var encode_1 = /* @__PURE__ */ requireEncode();
    function decode2(data, level) {
      return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
    }
    exports.decode = decode2;
    function decodeStrict(data, level) {
      return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
    }
    exports.decodeStrict = decodeStrict;
    function encode2(data, level) {
      return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
    }
    exports.encode = encode2;
    var encode_2 = /* @__PURE__ */ requireEncode();
    Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function() {
      return encode_2.encodeXML;
    } });
    Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function() {
      return encode_2.encodeHTML;
    } });
    Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function() {
      return encode_2.encodeNonAsciiHTML;
    } });
    Object.defineProperty(exports, "escape", { enumerable: true, get: function() {
      return encode_2.escape;
    } });
    Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function() {
      return encode_2.escapeUTF8;
    } });
    Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function() {
      return encode_2.encodeHTML;
    } });
    Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function() {
      return encode_2.encodeHTML;
    } });
    var decode_2 = /* @__PURE__ */ requireDecode();
    Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function() {
      return decode_2.decodeXML;
    } });
    Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function() {
      return decode_2.decodeHTML;
    } });
    Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function() {
      return decode_2.decodeHTML;
    } });
    Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function() {
      return decode_2.decodeHTML;
    } });
    Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function() {
      return decode_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function() {
      return decode_2.decodeXML;
    } });
  })(lib);
  return lib;
}
var foreignNames = {};
var hasRequiredForeignNames;
function requireForeignNames() {
  if (hasRequiredForeignNames) return foreignNames;
  hasRequiredForeignNames = 1;
  Object.defineProperty(foreignNames, "__esModule", { value: true });
  foreignNames.attributeNames = foreignNames.elementNames = void 0;
  foreignNames.elementNames = /* @__PURE__ */ new Map([
    ["altglyph", "altGlyph"],
    ["altglyphdef", "altGlyphDef"],
    ["altglyphitem", "altGlyphItem"],
    ["animatecolor", "animateColor"],
    ["animatemotion", "animateMotion"],
    ["animatetransform", "animateTransform"],
    ["clippath", "clipPath"],
    ["feblend", "feBlend"],
    ["fecolormatrix", "feColorMatrix"],
    ["fecomponenttransfer", "feComponentTransfer"],
    ["fecomposite", "feComposite"],
    ["feconvolvematrix", "feConvolveMatrix"],
    ["fediffuselighting", "feDiffuseLighting"],
    ["fedisplacementmap", "feDisplacementMap"],
    ["fedistantlight", "feDistantLight"],
    ["fedropshadow", "feDropShadow"],
    ["feflood", "feFlood"],
    ["fefunca", "feFuncA"],
    ["fefuncb", "feFuncB"],
    ["fefuncg", "feFuncG"],
    ["fefuncr", "feFuncR"],
    ["fegaussianblur", "feGaussianBlur"],
    ["feimage", "feImage"],
    ["femerge", "feMerge"],
    ["femergenode", "feMergeNode"],
    ["femorphology", "feMorphology"],
    ["feoffset", "feOffset"],
    ["fepointlight", "fePointLight"],
    ["fespecularlighting", "feSpecularLighting"],
    ["fespotlight", "feSpotLight"],
    ["fetile", "feTile"],
    ["feturbulence", "feTurbulence"],
    ["foreignobject", "foreignObject"],
    ["glyphref", "glyphRef"],
    ["lineargradient", "linearGradient"],
    ["radialgradient", "radialGradient"],
    ["textpath", "textPath"]
  ]);
  foreignNames.attributeNames = /* @__PURE__ */ new Map([
    ["definitionurl", "definitionURL"],
    ["attributename", "attributeName"],
    ["attributetype", "attributeType"],
    ["basefrequency", "baseFrequency"],
    ["baseprofile", "baseProfile"],
    ["calcmode", "calcMode"],
    ["clippathunits", "clipPathUnits"],
    ["diffuseconstant", "diffuseConstant"],
    ["edgemode", "edgeMode"],
    ["filterunits", "filterUnits"],
    ["glyphref", "glyphRef"],
    ["gradienttransform", "gradientTransform"],
    ["gradientunits", "gradientUnits"],
    ["kernelmatrix", "kernelMatrix"],
    ["kernelunitlength", "kernelUnitLength"],
    ["keypoints", "keyPoints"],
    ["keysplines", "keySplines"],
    ["keytimes", "keyTimes"],
    ["lengthadjust", "lengthAdjust"],
    ["limitingconeangle", "limitingConeAngle"],
    ["markerheight", "markerHeight"],
    ["markerunits", "markerUnits"],
    ["markerwidth", "markerWidth"],
    ["maskcontentunits", "maskContentUnits"],
    ["maskunits", "maskUnits"],
    ["numoctaves", "numOctaves"],
    ["pathlength", "pathLength"],
    ["patterncontentunits", "patternContentUnits"],
    ["patterntransform", "patternTransform"],
    ["patternunits", "patternUnits"],
    ["pointsatx", "pointsAtX"],
    ["pointsaty", "pointsAtY"],
    ["pointsatz", "pointsAtZ"],
    ["preservealpha", "preserveAlpha"],
    ["preserveaspectratio", "preserveAspectRatio"],
    ["primitiveunits", "primitiveUnits"],
    ["refx", "refX"],
    ["refy", "refY"],
    ["repeatcount", "repeatCount"],
    ["repeatdur", "repeatDur"],
    ["requiredextensions", "requiredExtensions"],
    ["requiredfeatures", "requiredFeatures"],
    ["specularconstant", "specularConstant"],
    ["specularexponent", "specularExponent"],
    ["spreadmethod", "spreadMethod"],
    ["startoffset", "startOffset"],
    ["stddeviation", "stdDeviation"],
    ["stitchtiles", "stitchTiles"],
    ["surfacescale", "surfaceScale"],
    ["systemlanguage", "systemLanguage"],
    ["tablevalues", "tableValues"],
    ["targetx", "targetX"],
    ["targety", "targetY"],
    ["textlength", "textLength"],
    ["viewbox", "viewBox"],
    ["viewtarget", "viewTarget"],
    ["xchannelselector", "xChannelSelector"],
    ["ychannelselector", "yChannelSelector"],
    ["zoomandpan", "zoomAndPan"]
  ]);
  return foreignNames;
}
var hasRequiredLib$2;
function requireLib$2() {
  if (hasRequiredLib$2) return lib$1;
  hasRequiredLib$2 = 1;
  var __assign = lib$1 && lib$1.__assign || function() {
    __assign = Object.assign || function(t2) {
      for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
        s2 = arguments[i2];
        for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
      }
      return t2;
    };
    return __assign.apply(this, arguments);
  };
  var __createBinding = lib$1 && lib$1.__createBinding || (Object.create ? function(o2, m2, k2, k22) {
    if (k22 === void 0) k22 = k2;
    Object.defineProperty(o2, k22, { enumerable: true, get: function() {
      return m2[k2];
    } });
  } : function(o2, m2, k2, k22) {
    if (k22 === void 0) k22 = k2;
    o2[k22] = m2[k2];
  });
  var __setModuleDefault = lib$1 && lib$1.__setModuleDefault || (Object.create ? function(o2, v2) {
    Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
  } : function(o2, v2) {
    o2["default"] = v2;
  });
  var __importStar = lib$1 && lib$1.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
      for (var k2 in mod) if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2)) __createBinding(result, mod, k2);
    }
    __setModuleDefault(result, mod);
    return result;
  };
  Object.defineProperty(lib$1, "__esModule", { value: true });
  var ElementType = __importStar(/* @__PURE__ */ requireLib$5());
  var entities_1 = /* @__PURE__ */ requireLib$3();
  var foreignNames_1 = /* @__PURE__ */ requireForeignNames();
  var unencodedElements = /* @__PURE__ */ new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript"
  ]);
  function formatAttributes(attributes, opts) {
    if (!attributes)
      return;
    return Object.keys(attributes).map(function(key) {
      var _a2, _b2;
      var value = (_a2 = attributes[key]) !== null && _a2 !== void 0 ? _a2 : "";
      if (opts.xmlMode === "foreign") {
        key = (_b2 = foreignNames_1.attributeNames.get(key)) !== null && _b2 !== void 0 ? _b2 : key;
      }
      if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
        return key;
      }
      return key + '="' + (opts.decodeEntities !== false ? entities_1.encodeXML(value) : value.replace(/"/g, "&quot;")) + '"';
    }).join(" ");
  }
  var singleTag = /* @__PURE__ */ new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ]);
  function render(node2, options) {
    if (options === void 0) {
      options = {};
    }
    var nodes = "length" in node2 ? node2 : [node2];
    var output = "";
    for (var i2 = 0; i2 < nodes.length; i2++) {
      output += renderNode(nodes[i2], options);
    }
    return output;
  }
  lib$1.default = render;
  function renderNode(node2, options) {
    switch (node2.type) {
      case ElementType.Root:
        return render(node2.children, options);
      case ElementType.Directive:
      case ElementType.Doctype:
        return renderDirective(node2);
      case ElementType.Comment:
        return renderComment(node2);
      case ElementType.CDATA:
        return renderCdata(node2);
      case ElementType.Script:
      case ElementType.Style:
      case ElementType.Tag:
        return renderTag(node2, options);
      case ElementType.Text:
        return renderText(node2, options);
    }
  }
  var foreignModeIntegrationPoints = /* @__PURE__ */ new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title"
  ]);
  var foreignElements = /* @__PURE__ */ new Set(["svg", "math"]);
  function renderTag(elem, opts) {
    var _a2;
    if (opts.xmlMode === "foreign") {
      elem.name = (_a2 = foreignNames_1.elementNames.get(elem.name)) !== null && _a2 !== void 0 ? _a2 : elem.name;
      if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
        opts = __assign(__assign({}, opts), { xmlMode: false });
      }
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) {
      opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
    }
    var tag = "<" + elem.name;
    var attribs = formatAttributes(elem.attribs, opts);
    if (attribs) {
      tag += " " + attribs;
    }
    if (elem.children.length === 0 && (opts.xmlMode ? (
      // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
      opts.selfClosingTags !== false
    ) : (
      // User explicitly asked for self-closing tags, even in HTML mode
      opts.selfClosingTags && singleTag.has(elem.name)
    ))) {
      if (!opts.xmlMode)
        tag += " ";
      tag += "/>";
    } else {
      tag += ">";
      if (elem.children.length > 0) {
        tag += render(elem.children, opts);
      }
      if (opts.xmlMode || !singleTag.has(elem.name)) {
        tag += "</" + elem.name + ">";
      }
    }
    return tag;
  }
  function renderDirective(elem) {
    return "<" + elem.data + ">";
  }
  function renderText(elem, opts) {
    var data = elem.data || "";
    if (opts.decodeEntities !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
      data = entities_1.encodeXML(data);
    }
    return data;
  }
  function renderCdata(elem) {
    return "<![CDATA[" + elem.children[0].data + "]]>";
  }
  function renderComment(elem) {
    return "<!--" + elem.data + "-->";
  }
  return lib$1;
}
var hasRequiredStringify;
function requireStringify() {
  if (hasRequiredStringify) return stringify;
  hasRequiredStringify = 1;
  var __importDefault = stringify && stringify.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(stringify, "__esModule", { value: true });
  stringify.innerText = stringify.textContent = stringify.getText = stringify.getInnerHTML = stringify.getOuterHTML = void 0;
  var domhandler_1 = /* @__PURE__ */ requireLib$4();
  var dom_serializer_1 = __importDefault(/* @__PURE__ */ requireLib$2());
  var domelementtype_1 = /* @__PURE__ */ requireLib$5();
  function getOuterHTML(node2, options) {
    return (0, dom_serializer_1.default)(node2, options);
  }
  stringify.getOuterHTML = getOuterHTML;
  function getInnerHTML(node2, options) {
    return (0, domhandler_1.hasChildren)(node2) ? node2.children.map(function(node3) {
      return getOuterHTML(node3, options);
    }).join("") : "";
  }
  stringify.getInnerHTML = getInnerHTML;
  function getText(node2) {
    if (Array.isArray(node2))
      return node2.map(getText).join("");
    if ((0, domhandler_1.isTag)(node2))
      return node2.name === "br" ? "\n" : getText(node2.children);
    if ((0, domhandler_1.isCDATA)(node2))
      return getText(node2.children);
    if ((0, domhandler_1.isText)(node2))
      return node2.data;
    return "";
  }
  stringify.getText = getText;
  function textContent(node2) {
    if (Array.isArray(node2))
      return node2.map(textContent).join("");
    if ((0, domhandler_1.hasChildren)(node2) && !(0, domhandler_1.isComment)(node2)) {
      return textContent(node2.children);
    }
    if ((0, domhandler_1.isText)(node2))
      return node2.data;
    return "";
  }
  stringify.textContent = textContent;
  function innerText(node2) {
    if (Array.isArray(node2))
      return node2.map(innerText).join("");
    if ((0, domhandler_1.hasChildren)(node2) && (node2.type === domelementtype_1.ElementType.Tag || (0, domhandler_1.isCDATA)(node2))) {
      return innerText(node2.children);
    }
    if ((0, domhandler_1.isText)(node2))
      return node2.data;
    return "";
  }
  stringify.innerText = innerText;
  return stringify;
}
var traversal = {};
var hasRequiredTraversal;
function requireTraversal() {
  if (hasRequiredTraversal) return traversal;
  hasRequiredTraversal = 1;
  Object.defineProperty(traversal, "__esModule", { value: true });
  traversal.prevElementSibling = traversal.nextElementSibling = traversal.getName = traversal.hasAttrib = traversal.getAttributeValue = traversal.getSiblings = traversal.getParent = traversal.getChildren = void 0;
  var domhandler_1 = /* @__PURE__ */ requireLib$4();
  var emptyArray = [];
  function getChildren(elem) {
    var _a2;
    return (_a2 = elem.children) !== null && _a2 !== void 0 ? _a2 : emptyArray;
  }
  traversal.getChildren = getChildren;
  function getParent(elem) {
    return elem.parent || null;
  }
  traversal.getParent = getParent;
  function getSiblings(elem) {
    var _a2, _b2;
    var parent = getParent(elem);
    if (parent != null)
      return getChildren(parent);
    var siblings = [elem];
    var prev = elem.prev, next = elem.next;
    while (prev != null) {
      siblings.unshift(prev);
      _a2 = prev, prev = _a2.prev;
    }
    while (next != null) {
      siblings.push(next);
      _b2 = next, next = _b2.next;
    }
    return siblings;
  }
  traversal.getSiblings = getSiblings;
  function getAttributeValue(elem, name) {
    var _a2;
    return (_a2 = elem.attribs) === null || _a2 === void 0 ? void 0 : _a2[name];
  }
  traversal.getAttributeValue = getAttributeValue;
  function hasAttrib(elem, name) {
    return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
  }
  traversal.hasAttrib = hasAttrib;
  function getName(elem) {
    return elem.name;
  }
  traversal.getName = getName;
  function nextElementSibling(elem) {
    var _a2;
    var next = elem.next;
    while (next !== null && !(0, domhandler_1.isTag)(next))
      _a2 = next, next = _a2.next;
    return next;
  }
  traversal.nextElementSibling = nextElementSibling;
  function prevElementSibling(elem) {
    var _a2;
    var prev = elem.prev;
    while (prev !== null && !(0, domhandler_1.isTag)(prev))
      _a2 = prev, prev = _a2.prev;
    return prev;
  }
  traversal.prevElementSibling = prevElementSibling;
  return traversal;
}
var manipulation = {};
var hasRequiredManipulation;
function requireManipulation() {
  if (hasRequiredManipulation) return manipulation;
  hasRequiredManipulation = 1;
  Object.defineProperty(manipulation, "__esModule", { value: true });
  manipulation.prepend = manipulation.prependChild = manipulation.append = manipulation.appendChild = manipulation.replaceElement = manipulation.removeElement = void 0;
  function removeElement(elem) {
    if (elem.prev)
      elem.prev.next = elem.next;
    if (elem.next)
      elem.next.prev = elem.prev;
    if (elem.parent) {
      var childs = elem.parent.children;
      childs.splice(childs.lastIndexOf(elem), 1);
    }
  }
  manipulation.removeElement = removeElement;
  function replaceElement(elem, replacement) {
    var prev = replacement.prev = elem.prev;
    if (prev) {
      prev.next = replacement;
    }
    var next = replacement.next = elem.next;
    if (next) {
      next.prev = replacement;
    }
    var parent = replacement.parent = elem.parent;
    if (parent) {
      var childs = parent.children;
      childs[childs.lastIndexOf(elem)] = replacement;
    }
  }
  manipulation.replaceElement = replaceElement;
  function appendChild(elem, child) {
    removeElement(child);
    child.next = null;
    child.parent = elem;
    if (elem.children.push(child) > 1) {
      var sibling = elem.children[elem.children.length - 2];
      sibling.next = child;
      child.prev = sibling;
    } else {
      child.prev = null;
    }
  }
  manipulation.appendChild = appendChild;
  function append(elem, next) {
    removeElement(next);
    var parent = elem.parent;
    var currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;
    if (currNext) {
      currNext.prev = next;
      if (parent) {
        var childs = parent.children;
        childs.splice(childs.lastIndexOf(currNext), 0, next);
      }
    } else if (parent) {
      parent.children.push(next);
    }
  }
  manipulation.append = append;
  function prependChild(elem, child) {
    removeElement(child);
    child.parent = elem;
    child.prev = null;
    if (elem.children.unshift(child) !== 1) {
      var sibling = elem.children[1];
      sibling.prev = child;
      child.next = sibling;
    } else {
      child.next = null;
    }
  }
  manipulation.prependChild = prependChild;
  function prepend(elem, prev) {
    removeElement(prev);
    var parent = elem.parent;
    if (parent) {
      var childs = parent.children;
      childs.splice(childs.indexOf(elem), 0, prev);
    }
    if (elem.prev) {
      elem.prev.next = prev;
    }
    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
  }
  manipulation.prepend = prepend;
  return manipulation;
}
var querying = {};
var hasRequiredQuerying;
function requireQuerying() {
  if (hasRequiredQuerying) return querying;
  hasRequiredQuerying = 1;
  Object.defineProperty(querying, "__esModule", { value: true });
  querying.findAll = querying.existsOne = querying.findOne = querying.findOneChild = querying.find = querying.filter = void 0;
  var domhandler_1 = /* @__PURE__ */ requireLib$4();
  function filter(test, node2, recurse, limit) {
    if (recurse === void 0) {
      recurse = true;
    }
    if (limit === void 0) {
      limit = Infinity;
    }
    if (!Array.isArray(node2))
      node2 = [node2];
    return find(test, node2, recurse, limit);
  }
  querying.filter = filter;
  function find(test, nodes, recurse, limit) {
    var result = [];
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
      var elem = nodes_1[_i];
      if (test(elem)) {
        result.push(elem);
        if (--limit <= 0)
          break;
      }
      if (recurse && (0, domhandler_1.hasChildren)(elem) && elem.children.length > 0) {
        var children = find(test, elem.children, recurse, limit);
        result.push.apply(result, children);
        limit -= children.length;
        if (limit <= 0)
          break;
      }
    }
    return result;
  }
  querying.find = find;
  function findOneChild(test, nodes) {
    return nodes.find(test);
  }
  querying.findOneChild = findOneChild;
  function findOne(test, nodes, recurse) {
    if (recurse === void 0) {
      recurse = true;
    }
    var elem = null;
    for (var i2 = 0; i2 < nodes.length && !elem; i2++) {
      var checked = nodes[i2];
      if (!(0, domhandler_1.isTag)(checked)) {
        continue;
      } else if (test(checked)) {
        elem = checked;
      } else if (recurse && checked.children.length > 0) {
        elem = findOne(test, checked.children);
      }
    }
    return elem;
  }
  querying.findOne = findOne;
  function existsOne(test, nodes) {
    return nodes.some(function(checked) {
      return (0, domhandler_1.isTag)(checked) && (test(checked) || checked.children.length > 0 && existsOne(test, checked.children));
    });
  }
  querying.existsOne = existsOne;
  function findAll(test, nodes) {
    var _a2;
    var result = [];
    var stack = nodes.filter(domhandler_1.isTag);
    var elem;
    while (elem = stack.shift()) {
      var children = (_a2 = elem.children) === null || _a2 === void 0 ? void 0 : _a2.filter(domhandler_1.isTag);
      if (children && children.length > 0) {
        stack.unshift.apply(stack, children);
      }
      if (test(elem))
        result.push(elem);
    }
    return result;
  }
  querying.findAll = findAll;
  return querying;
}
var legacy = {};
var hasRequiredLegacy;
function requireLegacy() {
  if (hasRequiredLegacy) return legacy;
  hasRequiredLegacy = 1;
  Object.defineProperty(legacy, "__esModule", { value: true });
  legacy.getElementsByTagType = legacy.getElementsByTagName = legacy.getElementById = legacy.getElements = legacy.testElement = void 0;
  var domhandler_1 = /* @__PURE__ */ requireLib$4();
  var querying_1 = /* @__PURE__ */ requireQuerying();
  var Checks = {
    tag_name: function(name) {
      if (typeof name === "function") {
        return function(elem) {
          return (0, domhandler_1.isTag)(elem) && name(elem.name);
        };
      } else if (name === "*") {
        return domhandler_1.isTag;
      }
      return function(elem) {
        return (0, domhandler_1.isTag)(elem) && elem.name === name;
      };
    },
    tag_type: function(type) {
      if (typeof type === "function") {
        return function(elem) {
          return type(elem.type);
        };
      }
      return function(elem) {
        return elem.type === type;
      };
    },
    tag_contains: function(data) {
      if (typeof data === "function") {
        return function(elem) {
          return (0, domhandler_1.isText)(elem) && data(elem.data);
        };
      }
      return function(elem) {
        return (0, domhandler_1.isText)(elem) && elem.data === data;
      };
    }
  };
  function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
      return function(elem) {
        return (0, domhandler_1.isTag)(elem) && value(elem.attribs[attrib]);
      };
    }
    return function(elem) {
      return (0, domhandler_1.isTag)(elem) && elem.attribs[attrib] === value;
    };
  }
  function combineFuncs(a2, b2) {
    return function(elem) {
      return a2(elem) || b2(elem);
    };
  }
  function compileTest(options) {
    var funcs = Object.keys(options).map(function(key) {
      var value = options[key];
      return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
  }
  function testElement(options, node2) {
    var test = compileTest(options);
    return test ? test(node2) : true;
  }
  legacy.testElement = testElement;
  function getElements(options, nodes, recurse, limit) {
    if (limit === void 0) {
      limit = Infinity;
    }
    var test = compileTest(options);
    return test ? (0, querying_1.filter)(test, nodes, recurse, limit) : [];
  }
  legacy.getElements = getElements;
  function getElementById(id, nodes, recurse) {
    if (recurse === void 0) {
      recurse = true;
    }
    if (!Array.isArray(nodes))
      nodes = [nodes];
    return (0, querying_1.findOne)(getAttribCheck("id", id), nodes, recurse);
  }
  legacy.getElementById = getElementById;
  function getElementsByTagName(tagName, nodes, recurse, limit) {
    if (recurse === void 0) {
      recurse = true;
    }
    if (limit === void 0) {
      limit = Infinity;
    }
    return (0, querying_1.filter)(Checks.tag_name(tagName), nodes, recurse, limit);
  }
  legacy.getElementsByTagName = getElementsByTagName;
  function getElementsByTagType(type, nodes, recurse, limit) {
    if (recurse === void 0) {
      recurse = true;
    }
    if (limit === void 0) {
      limit = Infinity;
    }
    return (0, querying_1.filter)(Checks.tag_type(type), nodes, recurse, limit);
  }
  legacy.getElementsByTagType = getElementsByTagType;
  return legacy;
}
var helpers = {};
var hasRequiredHelpers;
function requireHelpers() {
  if (hasRequiredHelpers) return helpers;
  hasRequiredHelpers = 1;
  Object.defineProperty(helpers, "__esModule", { value: true });
  helpers.uniqueSort = helpers.compareDocumentPosition = helpers.removeSubsets = void 0;
  var domhandler_1 = /* @__PURE__ */ requireLib$4();
  function removeSubsets(nodes) {
    var idx = nodes.length;
    while (--idx >= 0) {
      var node2 = nodes[idx];
      if (idx > 0 && nodes.lastIndexOf(node2, idx - 1) >= 0) {
        nodes.splice(idx, 1);
        continue;
      }
      for (var ancestor = node2.parent; ancestor; ancestor = ancestor.parent) {
        if (nodes.includes(ancestor)) {
          nodes.splice(idx, 1);
          break;
        }
      }
    }
    return nodes;
  }
  helpers.removeSubsets = removeSubsets;
  function compareDocumentPosition(nodeA, nodeB) {
    var aParents = [];
    var bParents = [];
    if (nodeA === nodeB) {
      return 0;
    }
    var current = (0, domhandler_1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
    while (current) {
      aParents.unshift(current);
      current = current.parent;
    }
    current = (0, domhandler_1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
    while (current) {
      bParents.unshift(current);
      current = current.parent;
    }
    var maxIdx = Math.min(aParents.length, bParents.length);
    var idx = 0;
    while (idx < maxIdx && aParents[idx] === bParents[idx]) {
      idx++;
    }
    if (idx === 0) {
      return 1;
    }
    var sharedParent = aParents[idx - 1];
    var siblings = sharedParent.children;
    var aSibling = aParents[idx];
    var bSibling = bParents[idx];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
      if (sharedParent === nodeB) {
        return 4 | 16;
      }
      return 4;
    }
    if (sharedParent === nodeA) {
      return 2 | 8;
    }
    return 2;
  }
  helpers.compareDocumentPosition = compareDocumentPosition;
  function uniqueSort(nodes) {
    nodes = nodes.filter(function(node2, i2, arr) {
      return !arr.includes(node2, i2 + 1);
    });
    nodes.sort(function(a2, b2) {
      var relative = compareDocumentPosition(a2, b2);
      if (relative & 2) {
        return -1;
      } else if (relative & 4) {
        return 1;
      }
      return 0;
    });
    return nodes;
  }
  helpers.uniqueSort = uniqueSort;
  return helpers;
}
var feeds = {};
var hasRequiredFeeds;
function requireFeeds() {
  if (hasRequiredFeeds) return feeds;
  hasRequiredFeeds = 1;
  Object.defineProperty(feeds, "__esModule", { value: true });
  feeds.getFeed = void 0;
  var stringify_1 = /* @__PURE__ */ requireStringify();
  var legacy_1 = /* @__PURE__ */ requireLegacy();
  function getFeed(doc) {
    var feedRoot = getOneElement(isValidFeed, doc);
    return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
  }
  feeds.getFeed = getFeed;
  function getAtomFeed(feedRoot) {
    var _a2;
    var childs = feedRoot.children;
    var feed = {
      type: "atom",
      items: (0, legacy_1.getElementsByTagName)("entry", childs).map(function(item) {
        var _a3;
        var children = item.children;
        var entry = { media: getMediaElements(children) };
        addConditionally(entry, "id", "id", children);
        addConditionally(entry, "title", "title", children);
        var href2 = (_a3 = getOneElement("link", children)) === null || _a3 === void 0 ? void 0 : _a3.attribs.href;
        if (href2) {
          entry.link = href2;
        }
        var description = fetch2("summary", children) || fetch2("content", children);
        if (description) {
          entry.description = description;
        }
        var pubDate = fetch2("updated", children);
        if (pubDate) {
          entry.pubDate = new Date(pubDate);
        }
        return entry;
      })
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    var href = (_a2 = getOneElement("link", childs)) === null || _a2 === void 0 ? void 0 : _a2.attribs.href;
    if (href) {
      feed.link = href;
    }
    addConditionally(feed, "description", "subtitle", childs);
    var updated = fetch2("updated", childs);
    if (updated) {
      feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "email", childs, true);
    return feed;
  }
  function getRssFeed(feedRoot) {
    var _a2, _b2;
    var childs = (_b2 = (_a2 = getOneElement("channel", feedRoot.children)) === null || _a2 === void 0 ? void 0 : _a2.children) !== null && _b2 !== void 0 ? _b2 : [];
    var feed = {
      type: feedRoot.name.substr(0, 3),
      id: "",
      items: (0, legacy_1.getElementsByTagName)("item", feedRoot.children).map(function(item) {
        var children = item.children;
        var entry = { media: getMediaElements(children) };
        addConditionally(entry, "id", "guid", children);
        addConditionally(entry, "title", "title", children);
        addConditionally(entry, "link", "link", children);
        addConditionally(entry, "description", "description", children);
        var pubDate = fetch2("pubDate", children);
        if (pubDate)
          entry.pubDate = new Date(pubDate);
        return entry;
      })
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    var updated = fetch2("lastBuildDate", childs);
    if (updated) {
      feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
  }
  var MEDIA_KEYS_STRING = ["url", "type", "lang"];
  var MEDIA_KEYS_INT = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width"
  ];
  function getMediaElements(where) {
    return (0, legacy_1.getElementsByTagName)("media:content", where).map(function(elem) {
      var attribs = elem.attribs;
      var media = {
        medium: attribs.medium,
        isDefault: !!attribs.isDefault
      };
      for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
        var attrib = MEDIA_KEYS_STRING_1[_i];
        if (attribs[attrib]) {
          media[attrib] = attribs[attrib];
        }
      }
      for (var _a2 = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a2 < MEDIA_KEYS_INT_1.length; _a2++) {
        var attrib = MEDIA_KEYS_INT_1[_a2];
        if (attribs[attrib]) {
          media[attrib] = parseInt(attribs[attrib], 10);
        }
      }
      if (attribs.expression) {
        media.expression = attribs.expression;
      }
      return media;
    });
  }
  function getOneElement(tagName, node2) {
    return (0, legacy_1.getElementsByTagName)(tagName, node2, true, 1)[0];
  }
  function fetch2(tagName, where, recurse) {
    if (recurse === void 0) {
      recurse = false;
    }
    return (0, stringify_1.textContent)((0, legacy_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
  }
  function addConditionally(obj, prop2, tagName, where, recurse) {
    if (recurse === void 0) {
      recurse = false;
    }
    var val = fetch2(tagName, where, recurse);
    if (val)
      obj[prop2] = val;
  }
  function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
  }
  return feeds;
}
var hasRequiredLib$1;
function requireLib$1() {
  if (hasRequiredLib$1) return lib$2;
  hasRequiredLib$1 = 1;
  (function(exports) {
    var __createBinding = lib$2 && lib$2.__createBinding || (Object.create ? function(o2, m2, k2, k22) {
      if (k22 === void 0) k22 = k2;
      Object.defineProperty(o2, k22, { enumerable: true, get: function() {
        return m2[k2];
      } });
    } : function(o2, m2, k2, k22) {
      if (k22 === void 0) k22 = k2;
      o2[k22] = m2[k2];
    });
    var __exportStar = lib$2 && lib$2.__exportStar || function(m2, exports2) {
      for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2)) __createBinding(exports2, m2, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
    __exportStar(/* @__PURE__ */ requireStringify(), exports);
    __exportStar(/* @__PURE__ */ requireTraversal(), exports);
    __exportStar(/* @__PURE__ */ requireManipulation(), exports);
    __exportStar(/* @__PURE__ */ requireQuerying(), exports);
    __exportStar(/* @__PURE__ */ requireLegacy(), exports);
    __exportStar(/* @__PURE__ */ requireHelpers(), exports);
    __exportStar(/* @__PURE__ */ requireFeeds(), exports);
    var domhandler_1 = /* @__PURE__ */ requireLib$4();
    Object.defineProperty(exports, "isTag", { enumerable: true, get: function() {
      return domhandler_1.isTag;
    } });
    Object.defineProperty(exports, "isCDATA", { enumerable: true, get: function() {
      return domhandler_1.isCDATA;
    } });
    Object.defineProperty(exports, "isText", { enumerable: true, get: function() {
      return domhandler_1.isText;
    } });
    Object.defineProperty(exports, "isComment", { enumerable: true, get: function() {
      return domhandler_1.isComment;
    } });
    Object.defineProperty(exports, "isDocument", { enumerable: true, get: function() {
      return domhandler_1.isDocument;
    } });
    Object.defineProperty(exports, "hasChildren", { enumerable: true, get: function() {
      return domhandler_1.hasChildren;
    } });
  })(lib$2);
  return lib$2;
}
var hasRequiredFeedHandler;
function requireFeedHandler() {
  if (hasRequiredFeedHandler) return FeedHandler;
  hasRequiredFeedHandler = 1;
  var __extends = FeedHandler && FeedHandler.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d2, b2) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
        d3.__proto__ = b3;
      } || function(d3, b3) {
        for (var p2 in b3) if (Object.prototype.hasOwnProperty.call(b3, p2)) d3[p2] = b3[p2];
      };
      return extendStatics(d2, b2);
    };
    return function(d2, b2) {
      if (typeof b2 !== "function" && b2 !== null)
        throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
      extendStatics(d2, b2);
      function __() {
        this.constructor = d2;
      }
      d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
    };
  }();
  var __createBinding = FeedHandler && FeedHandler.__createBinding || (Object.create ? function(o2, m2, k2, k22) {
    if (k22 === void 0) k22 = k2;
    Object.defineProperty(o2, k22, { enumerable: true, get: function() {
      return m2[k2];
    } });
  } : function(o2, m2, k2, k22) {
    if (k22 === void 0) k22 = k2;
    o2[k22] = m2[k2];
  });
  var __setModuleDefault = FeedHandler && FeedHandler.__setModuleDefault || (Object.create ? function(o2, v2) {
    Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
  } : function(o2, v2) {
    o2["default"] = v2;
  });
  var __importStar = FeedHandler && FeedHandler.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
      for (var k2 in mod) if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2)) __createBinding(result, mod, k2);
    }
    __setModuleDefault(result, mod);
    return result;
  };
  var __importDefault = FeedHandler && FeedHandler.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(FeedHandler, "__esModule", { value: true });
  FeedHandler.parseFeed = FeedHandler.FeedHandler = void 0;
  var domhandler_1 = __importDefault(/* @__PURE__ */ requireLib$4());
  var DomUtils = __importStar(/* @__PURE__ */ requireLib$1());
  var Parser_1 = /* @__PURE__ */ requireParser();
  var FeedItemMediaMedium;
  (function(FeedItemMediaMedium2) {
    FeedItemMediaMedium2[FeedItemMediaMedium2["image"] = 0] = "image";
    FeedItemMediaMedium2[FeedItemMediaMedium2["audio"] = 1] = "audio";
    FeedItemMediaMedium2[FeedItemMediaMedium2["video"] = 2] = "video";
    FeedItemMediaMedium2[FeedItemMediaMedium2["document"] = 3] = "document";
    FeedItemMediaMedium2[FeedItemMediaMedium2["executable"] = 4] = "executable";
  })(FeedItemMediaMedium || (FeedItemMediaMedium = {}));
  var FeedItemMediaExpression;
  (function(FeedItemMediaExpression2) {
    FeedItemMediaExpression2[FeedItemMediaExpression2["sample"] = 0] = "sample";
    FeedItemMediaExpression2[FeedItemMediaExpression2["full"] = 1] = "full";
    FeedItemMediaExpression2[FeedItemMediaExpression2["nonstop"] = 2] = "nonstop";
  })(FeedItemMediaExpression || (FeedItemMediaExpression = {}));
  var FeedHandler$1 = (
    /** @class */
    function(_super) {
      __extends(FeedHandler2, _super);
      function FeedHandler2(callback, options) {
        var _this = this;
        if (typeof callback === "object") {
          callback = void 0;
          options = callback;
        }
        _this = _super.call(this, callback, options) || this;
        return _this;
      }
      FeedHandler2.prototype.onend = function() {
        var _a2, _b2;
        var feedRoot = getOneElement(isValidFeed, this.dom);
        if (!feedRoot) {
          this.handleCallback(new Error("couldn't find root of feed"));
          return;
        }
        var feed = {};
        if (feedRoot.name === "feed") {
          var childs = feedRoot.children;
          feed.type = "atom";
          addConditionally(feed, "id", "id", childs);
          addConditionally(feed, "title", "title", childs);
          var href = getAttribute("href", getOneElement("link", childs));
          if (href) {
            feed.link = href;
          }
          addConditionally(feed, "description", "subtitle", childs);
          var updated = fetch2("updated", childs);
          if (updated) {
            feed.updated = new Date(updated);
          }
          addConditionally(feed, "author", "email", childs, true);
          feed.items = getElements("entry", childs).map(function(item) {
            var entry = {};
            var children = item.children;
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            var href2 = getAttribute("href", getOneElement("link", children));
            if (href2) {
              entry.link = href2;
            }
            var description = fetch2("summary", children) || fetch2("content", children);
            if (description) {
              entry.description = description;
            }
            var pubDate = fetch2("updated", children);
            if (pubDate) {
              entry.pubDate = new Date(pubDate);
            }
            entry.media = getMediaElements(children);
            return entry;
          });
        } else {
          var childs = (_b2 = (_a2 = getOneElement("channel", feedRoot.children)) === null || _a2 === void 0 ? void 0 : _a2.children) !== null && _b2 !== void 0 ? _b2 : [];
          feed.type = feedRoot.name.substr(0, 3);
          feed.id = "";
          addConditionally(feed, "title", "title", childs);
          addConditionally(feed, "link", "link", childs);
          addConditionally(feed, "description", "description", childs);
          var updated = fetch2("lastBuildDate", childs);
          if (updated) {
            feed.updated = new Date(updated);
          }
          addConditionally(feed, "author", "managingEditor", childs, true);
          feed.items = getElements("item", feedRoot.children).map(function(item) {
            var entry = {};
            var children = item.children;
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            var pubDate = fetch2("pubDate", children);
            if (pubDate)
              entry.pubDate = new Date(pubDate);
            entry.media = getMediaElements(children);
            return entry;
          });
        }
        this.feed = feed;
        this.handleCallback(null);
      };
      return FeedHandler2;
    }(domhandler_1.default)
  );
  FeedHandler.FeedHandler = FeedHandler$1;
  function getMediaElements(where) {
    return getElements("media:content", where).map(function(elem) {
      var media = {
        medium: elem.attribs.medium,
        isDefault: !!elem.attribs.isDefault
      };
      if (elem.attribs.url) {
        media.url = elem.attribs.url;
      }
      if (elem.attribs.fileSize) {
        media.fileSize = parseInt(elem.attribs.fileSize, 10);
      }
      if (elem.attribs.type) {
        media.type = elem.attribs.type;
      }
      if (elem.attribs.expression) {
        media.expression = elem.attribs.expression;
      }
      if (elem.attribs.bitrate) {
        media.bitrate = parseInt(elem.attribs.bitrate, 10);
      }
      if (elem.attribs.framerate) {
        media.framerate = parseInt(elem.attribs.framerate, 10);
      }
      if (elem.attribs.samplingrate) {
        media.samplingrate = parseInt(elem.attribs.samplingrate, 10);
      }
      if (elem.attribs.channels) {
        media.channels = parseInt(elem.attribs.channels, 10);
      }
      if (elem.attribs.duration) {
        media.duration = parseInt(elem.attribs.duration, 10);
      }
      if (elem.attribs.height) {
        media.height = parseInt(elem.attribs.height, 10);
      }
      if (elem.attribs.width) {
        media.width = parseInt(elem.attribs.width, 10);
      }
      if (elem.attribs.lang) {
        media.lang = elem.attribs.lang;
      }
      return media;
    });
  }
  function getElements(tagName, where) {
    return DomUtils.getElementsByTagName(tagName, where, true);
  }
  function getOneElement(tagName, node2) {
    return DomUtils.getElementsByTagName(tagName, node2, true, 1)[0];
  }
  function fetch2(tagName, where, recurse) {
    if (recurse === void 0) {
      recurse = false;
    }
    return DomUtils.getText(DomUtils.getElementsByTagName(tagName, where, recurse, 1)).trim();
  }
  function getAttribute(name, elem) {
    if (!elem) {
      return null;
    }
    var attribs = elem.attribs;
    return attribs[name];
  }
  function addConditionally(obj, prop2, what, where, recurse) {
    if (recurse === void 0) {
      recurse = false;
    }
    var tmp = fetch2(what, where, recurse);
    if (tmp)
      obj[prop2] = tmp;
  }
  function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
  }
  function parseFeed(feed, options) {
    if (options === void 0) {
      options = { xmlMode: true };
    }
    var handler = new FeedHandler$1(options);
    new Parser_1.Parser(handler, options).end(feed);
    return handler.feed;
  }
  FeedHandler.parseFeed = parseFeed;
  return FeedHandler;
}
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib$5;
  hasRequiredLib = 1;
  (function(exports) {
    var __createBinding = lib$5 && lib$5.__createBinding || (Object.create ? function(o2, m2, k2, k22) {
      if (k22 === void 0) k22 = k2;
      Object.defineProperty(o2, k22, { enumerable: true, get: function() {
        return m2[k2];
      } });
    } : function(o2, m2, k2, k22) {
      if (k22 === void 0) k22 = k2;
      o2[k22] = m2[k2];
    });
    var __setModuleDefault = lib$5 && lib$5.__setModuleDefault || (Object.create ? function(o2, v2) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
    } : function(o2, v2) {
      o2["default"] = v2;
    });
    var __importStar = lib$5 && lib$5.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k2 in mod) if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2)) __createBinding(result, mod, k2);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = lib$5 && lib$5.__exportStar || function(m2, exports2) {
      for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2)) __createBinding(exports2, m2, p2);
    };
    var __importDefault = lib$5 && lib$5.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RssHandler = exports.DefaultHandler = exports.DomUtils = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.parseDOM = exports.parseDocument = exports.DomHandler = exports.Parser = void 0;
    var Parser_1 = /* @__PURE__ */ requireParser();
    Object.defineProperty(exports, "Parser", { enumerable: true, get: function() {
      return Parser_1.Parser;
    } });
    var domhandler_1 = /* @__PURE__ */ requireLib$4();
    Object.defineProperty(exports, "DomHandler", { enumerable: true, get: function() {
      return domhandler_1.DomHandler;
    } });
    Object.defineProperty(exports, "DefaultHandler", { enumerable: true, get: function() {
      return domhandler_1.DomHandler;
    } });
    function parseDocument(data, options) {
      var handler = new domhandler_1.DomHandler(void 0, options);
      new Parser_1.Parser(handler, options).end(data);
      return handler.root;
    }
    exports.parseDocument = parseDocument;
    function parseDOM(data, options) {
      return parseDocument(data, options).children;
    }
    exports.parseDOM = parseDOM;
    function createDomStream(cb, options, elementCb) {
      var handler = new domhandler_1.DomHandler(cb, options, elementCb);
      return new Parser_1.Parser(handler, options);
    }
    exports.createDomStream = createDomStream;
    var Tokenizer_1 = /* @__PURE__ */ requireTokenizer();
    Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function() {
      return __importDefault(Tokenizer_1).default;
    } });
    var ElementType = __importStar(/* @__PURE__ */ requireLib$5());
    exports.ElementType = ElementType;
    __exportStar(/* @__PURE__ */ requireFeedHandler(), exports);
    exports.DomUtils = __importStar(/* @__PURE__ */ requireLib$1());
    var FeedHandler_1 = /* @__PURE__ */ requireFeedHandler();
    Object.defineProperty(exports, "RssHandler", { enumerable: true, get: function() {
      return FeedHandler_1.FeedHandler;
    } });
  })(lib$5);
  return lib$5;
}
var libExports$1 = /* @__PURE__ */ requireLib();
var libExports = /* @__PURE__ */ requireLib$4();
function _extends() {
  _extends = Object.assign || function(target2) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target2[key] = source[key];
        }
      }
    }
    return target2;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target2 = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0) continue;
    target2[key] = source[key];
  }
  return target2;
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2) return;
  if (typeof o2 === "string") return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor) n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray(o2, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
  return arr2;
}
function _createForOfIteratorHelperLoose(o2, allowArrayLike) {
  var it2;
  if (typeof Symbol === "undefined" || o2[Symbol.iterator] == null) {
    if (Array.isArray(o2) || (it2 = _unsupportedIterableToArray(o2)) || allowArrayLike) {
      if (it2) o2 = it2;
      var i2 = 0;
      return function() {
        if (i2 >= o2.length) return {
          done: true
        };
        return {
          done: false,
          value: o2[i2++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  it2 = o2[Symbol.iterator]();
  return it2.next.bind(it2);
}
function MarkdownView$1(props) {
  var dangerouslySetInnerHTML = props.dangerouslySetInnerHTML, flavor = props.flavor, markdown = props.markdown, markup = props.markup, options = props.options, extensions = props.extensions, components = props.components, sanitizeHtml = props.sanitizeHtml, otherProps = _objectWithoutPropertiesLoose$1(props, ["dangerouslySetInnerHTML", "flavor", "markdown", "markup", "options", "extensions", "components", "sanitizeHtml"]);
  var mapElement = T$1(function() {
    return function mapElement2(node2, index) {
      if (node2.type === "tag" && node2 instanceof libExports.Element) {
        var elementType = (components === null || components === void 0 ? void 0 : components[node2.name]) || node2.name;
        var _props = _extends({
          key: index
        }, node2.attribs);
        if (_props["class"] && !_props.className) {
          _props.className = _props["class"];
          delete _props["class"];
        }
        if (typeof _props.style === "string") {
          var styles = {};
          _props.style.split(";").forEach(function(style) {
            if (style.indexOf(":") !== -1) {
              var _style$split = style.split(":"), key2 = _style$split[0], value = _style$split[1];
              key2 = key2.trim().replace(/-([a-z])/g, function(match) {
                return match[1].toUpperCase();
              });
              value = value.trim();
              styles[key2] = value;
            }
          });
          _props.style = styles;
        }
        var children = skipAnyChildrenFor.includes(node2.name) ? null : skipWhitespaceElementsFor.includes(node2.name) ? node2.children.filter(filterWhitespaceElements).map(mapElement2) : node2.children.map(mapElement2);
        return _$1(elementType, _props, children);
      } else if (node2.type === "text" && node2 instanceof libExports.DataNode) {
        return node2.data;
      } else if (node2.type === "comment") {
        return null;
      } else if (node2.type === "style" && node2 instanceof libExports.Element) {
        var _props2 = _extends({
          key: index
        }, node2.attribs);
        var _children = node2.children.map(mapElement2);
        return _$1("style", _props2, _children);
      } else {
        console.warn('Warning: Could not map element with type "' + node2.type + '".', node2);
        return null;
      }
    };
  }, [components]);
  if (dangerouslySetInnerHTML && components) {
    console.warn("MarkdownView could not render custom components when dangerouslySetInnerHTML is enabled.");
  }
  var converter = new showdownExports.Converter();
  if (flavor) {
    converter.setFlavor(flavor);
  }
  if (options) {
    for (var key in options) {
      if (key === "extensions" && options.extensions) {
        for (var _iterator = _createForOfIteratorHelperLoose(options.extensions), _step; !(_step = _iterator()).done; ) {
          var extension = _step.value;
          if (typeof extension === "string") {
            converter.useExtension(extension);
          } else {
            converter.addExtension(extension);
          }
        }
      }
      converter.setOption(key, options[key]);
    }
  }
  if (extensions) {
    converter.addExtension(extensions);
  }
  var html = converter.makeHtml(markdown !== null && markdown !== void 0 ? markdown : markup);
  if (sanitizeHtml) {
    html = sanitizeHtml(html);
  }
  if (dangerouslySetInnerHTML) {
    return Rn.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }
  var root = libExports$1.parseDOM(html, {
    // Don't change the case of parsed html tags to match inline components.
    lowerCaseTags: false,
    // Don't change the attribute names so that stuff like `className` works correctly.
    lowerCaseAttributeNames: false,
    // Encode entities automatically, so that &copy; and &uuml; works correctly.
    decodeEntities: true,
    // Fix issue with content after a self closing tag.
    recognizeSelfClosing: true
  });
  return _$1("div", otherProps, root.map(mapElement));
}
var skipAnyChildrenFor = ["area", "br", "col", "embed", "hr", "img", "input", "keygen", "param", "source", "track", "wbr"];
var skipWhitespaceElementsFor = ["table", "thead", "tbody", "tr"];
function filterWhitespaceElements(node2) {
  if (node2.type === "text" && node2 instanceof libExports.DataNode) {
    return node2.data.trim().length > 0;
  } else {
    return true;
  }
}
var Markdown = MarkdownView$1;
var core;
var hasRequiredCore;
function requireCore() {
  if (hasRequiredCore) return core;
  hasRequiredCore = 1;
  function deepFreeze(obj) {
    if (obj instanceof Map) {
      obj.clear = obj.delete = obj.set = function() {
        throw new Error("map is read-only");
      };
    } else if (obj instanceof Set) {
      obj.add = obj.clear = obj.delete = function() {
        throw new Error("set is read-only");
      };
    }
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach((name) => {
      const prop2 = obj[name];
      const type = typeof prop2;
      if ((type === "object" || type === "function") && !Object.isFrozen(prop2)) {
        deepFreeze(prop2);
      }
    });
    return obj;
  }
  class Response {
    /**
     * @param {CompiledMode} mode
     */
    constructor(mode) {
      if (mode.data === void 0) mode.data = {};
      this.data = mode.data;
      this.isMatchIgnored = false;
    }
    ignoreMatch() {
      this.isMatchIgnored = true;
    }
  }
  function escapeHTML(value) {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function inherit$1(original, ...objects) {
    const result = /* @__PURE__ */ Object.create(null);
    for (const key in original) {
      result[key] = original[key];
    }
    objects.forEach(function(obj) {
      for (const key in obj) {
        result[key] = obj[key];
      }
    });
    return (
      /** @type {T} */
      result
    );
  }
  const SPAN_CLOSE = "</span>";
  const emitsWrappingTags = (node2) => {
    return !!node2.scope;
  };
  const scopeToCSSClass = (name, { prefix }) => {
    if (name.startsWith("language:")) {
      return name.replace("language:", "language-");
    }
    if (name.includes(".")) {
      const pieces = name.split(".");
      return [
        `${prefix}${pieces.shift()}`,
        ...pieces.map((x2, i2) => `${x2}${"_".repeat(i2 + 1)}`)
      ].join(" ");
    }
    return `${prefix}${name}`;
  };
  class HTMLRenderer {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(parseTree, options) {
      this.buffer = "";
      this.classPrefix = options.classPrefix;
      parseTree.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(text) {
      this.buffer += escapeHTML(text);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(node2) {
      if (!emitsWrappingTags(node2)) return;
      const className = scopeToCSSClass(
        node2.scope,
        { prefix: this.classPrefix }
      );
      this.span(className);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(node2) {
      if (!emitsWrappingTags(node2)) return;
      this.buffer += SPAN_CLOSE;
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(className) {
      this.buffer += `<span class="${className}">`;
    }
  }
  const newNode = (opts = {}) => {
    const result = { children: [] };
    Object.assign(result, opts);
    return result;
  };
  class TokenTree {
    constructor() {
      this.rootNode = newNode();
      this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(node2) {
      this.top.children.push(node2);
    }
    /** @param {string} scope */
    openNode(scope2) {
      const node2 = newNode({ scope: scope2 });
      this.add(node2);
      this.stack.push(node2);
    }
    closeNode() {
      if (this.stack.length > 1) {
        return this.stack.pop();
      }
      return void 0;
    }
    closeAllNodes() {
      while (this.closeNode()) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(builder) {
      return this.constructor._walk(builder, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(builder, node2) {
      if (typeof node2 === "string") {
        builder.addText(node2);
      } else if (node2.children) {
        builder.openNode(node2);
        node2.children.forEach((child) => this._walk(builder, child));
        builder.closeNode(node2);
      }
      return builder;
    }
    /**
     * @param {Node} node
     */
    static _collapse(node2) {
      if (typeof node2 === "string") return;
      if (!node2.children) return;
      if (node2.children.every((el2) => typeof el2 === "string")) {
        node2.children = [node2.children.join("")];
      } else {
        node2.children.forEach((child) => {
          TokenTree._collapse(child);
        });
      }
    }
  }
  class TokenTreeEmitter extends TokenTree {
    /**
     * @param {*} options
     */
    constructor(options) {
      super();
      this.options = options;
    }
    /**
     * @param {string} text
     */
    addText(text) {
      if (text === "") {
        return;
      }
      this.add(text);
    }
    /** @param {string} scope */
    startScope(scope2) {
      this.openNode(scope2);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(emitter, name) {
      const node2 = emitter.root;
      if (name) node2.scope = `language:${name}`;
      this.add(node2);
    }
    toHTML() {
      const renderer = new HTMLRenderer(this, this.options);
      return renderer.value();
    }
    finalize() {
      this.closeAllNodes();
      return true;
    }
  }
  function source(re) {
    if (!re) return null;
    if (typeof re === "string") return re;
    return re.source;
  }
  function lookahead(re) {
    return concat("(?=", re, ")");
  }
  function anyNumberOfTimes(re) {
    return concat("(?:", re, ")*");
  }
  function optional(re) {
    return concat("(?:", re, ")?");
  }
  function concat(...args) {
    const joined = args.map((x2) => source(x2)).join("");
    return joined;
  }
  function stripOptionsFromArgs(args) {
    const opts = args[args.length - 1];
    if (typeof opts === "object" && opts.constructor === Object) {
      args.splice(args.length - 1, 1);
      return opts;
    } else {
      return {};
    }
  }
  function either(...args) {
    const opts = stripOptionsFromArgs(args);
    const joined = "(" + (opts.capture ? "" : "?:") + args.map((x2) => source(x2)).join("|") + ")";
    return joined;
  }
  function countMatchGroups(re) {
    return new RegExp(re.toString() + "|").exec("").length - 1;
  }
  function startsWith(re, lexeme) {
    const match = re && re.exec(lexeme);
    return match && match.index === 0;
  }
  const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function _rewriteBackreferences(regexps, { joinWith }) {
    let numCaptures = 0;
    return regexps.map((regex) => {
      numCaptures += 1;
      const offset = numCaptures;
      let re = source(regex);
      let out = "";
      while (re.length > 0) {
        const match = BACKREF_RE.exec(re);
        if (!match) {
          out += re;
          break;
        }
        out += re.substring(0, match.index);
        re = re.substring(match.index + match[0].length);
        if (match[0][0] === "\\" && match[1]) {
          out += "\\" + String(Number(match[1]) + offset);
        } else {
          out += match[0];
          if (match[0] === "(") {
            numCaptures++;
          }
        }
      }
      return out;
    }).map((re) => `(${re})`).join(joinWith);
  }
  const MATCH_NOTHING_RE = /\b\B/;
  const IDENT_RE = "[a-zA-Z]\\w*";
  const UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
  const NUMBER_RE = "\\b\\d+(\\.\\d+)?";
  const C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
  const BINARY_NUMBER_RE = "\\b(0b[01]+)";
  const RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
  const SHEBANG = (opts = {}) => {
    const beginShebang = /^#![ ]*\//;
    if (opts.binary) {
      opts.begin = concat(
        beginShebang,
        /.*\b/,
        opts.binary,
        /\b.*/
      );
    }
    return inherit$1({
      scope: "meta",
      begin: beginShebang,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (m2, resp) => {
        if (m2.index !== 0) resp.ignoreMatch();
      }
    }, opts);
  };
  const BACKSLASH_ESCAPE = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  };
  const APOS_STRING_MODE = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [BACKSLASH_ESCAPE]
  };
  const QUOTE_STRING_MODE = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [BACKSLASH_ESCAPE]
  };
  const PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  const COMMENT = function(begin, end, modeOptions = {}) {
    const mode = inherit$1(
      {
        scope: "comment",
        begin,
        end,
        contains: []
      },
      modeOptions
    );
    mode.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: true,
      relevance: 0
    });
    const ENGLISH_WORD = either(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    mode.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: concat(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          ENGLISH_WORD,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    );
    return mode;
  };
  const C_LINE_COMMENT_MODE = COMMENT("//", "$");
  const C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
  const HASH_COMMENT_MODE = COMMENT("#", "$");
  const NUMBER_MODE = {
    scope: "number",
    begin: NUMBER_RE,
    relevance: 0
  };
  const C_NUMBER_MODE = {
    scope: "number",
    begin: C_NUMBER_RE,
    relevance: 0
  };
  const BINARY_NUMBER_MODE = {
    scope: "number",
    begin: BINARY_NUMBER_RE,
    relevance: 0
  };
  const REGEXP_MODE = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [BACKSLASH_ESCAPE]
      }
    ]
  };
  const TITLE_MODE = {
    scope: "title",
    begin: IDENT_RE,
    relevance: 0
  };
  const UNDERSCORE_TITLE_MODE = {
    scope: "title",
    begin: UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  const METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  const END_SAME_AS_BEGIN = function(mode) {
    return Object.assign(
      mode,
      {
        /** @type {ModeCallback} */
        "on:begin": (m2, resp) => {
          resp.data._beginMatch = m2[1];
        },
        /** @type {ModeCallback} */
        "on:end": (m2, resp) => {
          if (resp.data._beginMatch !== m2[1]) resp.ignoreMatch();
        }
      }
    );
  };
  var MODES = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE,
    BACKSLASH_ESCAPE,
    BINARY_NUMBER_MODE,
    BINARY_NUMBER_RE,
    COMMENT,
    C_BLOCK_COMMENT_MODE,
    C_LINE_COMMENT_MODE,
    C_NUMBER_MODE,
    C_NUMBER_RE,
    END_SAME_AS_BEGIN,
    HASH_COMMENT_MODE,
    IDENT_RE,
    MATCH_NOTHING_RE,
    METHOD_GUARD,
    NUMBER_MODE,
    NUMBER_RE,
    PHRASAL_WORDS_MODE,
    QUOTE_STRING_MODE,
    REGEXP_MODE,
    RE_STARTERS_RE,
    SHEBANG,
    TITLE_MODE,
    UNDERSCORE_IDENT_RE,
    UNDERSCORE_TITLE_MODE
  });
  function skipIfHasPrecedingDot(match, response) {
    const before = match.input[match.index - 1];
    if (before === ".") {
      response.ignoreMatch();
    }
  }
  function scopeClassName(mode, _parent) {
    if (mode.className !== void 0) {
      mode.scope = mode.className;
      delete mode.className;
    }
  }
  function beginKeywords(mode, parent) {
    if (!parent) return;
    if (!mode.beginKeywords) return;
    mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
    mode.__beforeBegin = skipIfHasPrecedingDot;
    mode.keywords = mode.keywords || mode.beginKeywords;
    delete mode.beginKeywords;
    if (mode.relevance === void 0) mode.relevance = 0;
  }
  function compileIllegal(mode, _parent) {
    if (!Array.isArray(mode.illegal)) return;
    mode.illegal = either(...mode.illegal);
  }
  function compileMatch(mode, _parent) {
    if (!mode.match) return;
    if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");
    mode.begin = mode.match;
    delete mode.match;
  }
  function compileRelevance(mode, _parent) {
    if (mode.relevance === void 0) mode.relevance = 1;
  }
  const beforeMatchExt = (mode, parent) => {
    if (!mode.beforeMatch) return;
    if (mode.starts) throw new Error("beforeMatch cannot be used with starts");
    const originalMode = Object.assign({}, mode);
    Object.keys(mode).forEach((key) => {
      delete mode[key];
    });
    mode.keywords = originalMode.keywords;
    mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
    mode.starts = {
      relevance: 0,
      contains: [
        Object.assign(originalMode, { endsParent: true })
      ]
    };
    mode.relevance = 0;
    delete originalMode.beforeMatch;
  };
  const COMMON_KEYWORDS = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ];
  const DEFAULT_KEYWORD_SCOPE = "keyword";
  function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
    const compiledKeywords = /* @__PURE__ */ Object.create(null);
    if (typeof rawKeywords === "string") {
      compileList(scopeName, rawKeywords.split(" "));
    } else if (Array.isArray(rawKeywords)) {
      compileList(scopeName, rawKeywords);
    } else {
      Object.keys(rawKeywords).forEach(function(scopeName2) {
        Object.assign(
          compiledKeywords,
          compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2)
        );
      });
    }
    return compiledKeywords;
    function compileList(scopeName2, keywordList) {
      if (caseInsensitive) {
        keywordList = keywordList.map((x2) => x2.toLowerCase());
      }
      keywordList.forEach(function(keyword) {
        const pair = keyword.split("|");
        compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
      });
    }
  }
  function scoreForKeyword(keyword, providedScore) {
    if (providedScore) {
      return Number(providedScore);
    }
    return commonKeyword(keyword) ? 0 : 1;
  }
  function commonKeyword(keyword) {
    return COMMON_KEYWORDS.includes(keyword.toLowerCase());
  }
  const seenDeprecations = {};
  const error = (message) => {
    console.error(message);
  };
  const warn = (message, ...args) => {
    console.log(`WARN: ${message}`, ...args);
  };
  const deprecated = (version2, message) => {
    if (seenDeprecations[`${version2}/${message}`]) return;
    console.log(`Deprecated as of ${version2}. ${message}`);
    seenDeprecations[`${version2}/${message}`] = true;
  };
  const MultiClassError = new Error();
  function remapScopeNames(mode, regexes, { key }) {
    let offset = 0;
    const scopeNames = mode[key];
    const emit = {};
    const positions = {};
    for (let i2 = 1; i2 <= regexes.length; i2++) {
      positions[i2 + offset] = scopeNames[i2];
      emit[i2 + offset] = true;
      offset += countMatchGroups(regexes[i2 - 1]);
    }
    mode[key] = positions;
    mode[key]._emit = emit;
    mode[key]._multi = true;
  }
  function beginMultiClass(mode) {
    if (!Array.isArray(mode.begin)) return;
    if (mode.skip || mode.excludeBegin || mode.returnBegin) {
      error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
      throw MultiClassError;
    }
    if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
      error("beginScope must be object");
      throw MultiClassError;
    }
    remapScopeNames(mode, mode.begin, { key: "beginScope" });
    mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
  }
  function endMultiClass(mode) {
    if (!Array.isArray(mode.end)) return;
    if (mode.skip || mode.excludeEnd || mode.returnEnd) {
      error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
      throw MultiClassError;
    }
    if (typeof mode.endScope !== "object" || mode.endScope === null) {
      error("endScope must be object");
      throw MultiClassError;
    }
    remapScopeNames(mode, mode.end, { key: "endScope" });
    mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
  }
  function scopeSugar(mode) {
    if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
      mode.beginScope = mode.scope;
      delete mode.scope;
    }
  }
  function MultiClass(mode) {
    scopeSugar(mode);
    if (typeof mode.beginScope === "string") {
      mode.beginScope = { _wrap: mode.beginScope };
    }
    if (typeof mode.endScope === "string") {
      mode.endScope = { _wrap: mode.endScope };
    }
    beginMultiClass(mode);
    endMultiClass(mode);
  }
  function compileLanguage(language) {
    function langRe(value, global2) {
      return new RegExp(
        source(value),
        "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global2 ? "g" : "")
      );
    }
    class MultiRegex {
      constructor() {
        this.matchIndexes = {};
        this.regexes = [];
        this.matchAt = 1;
        this.position = 0;
      }
      // @ts-ignore
      addRule(re, opts) {
        opts.position = this.position++;
        this.matchIndexes[this.matchAt] = opts;
        this.regexes.push([opts, re]);
        this.matchAt += countMatchGroups(re) + 1;
      }
      compile() {
        if (this.regexes.length === 0) {
          this.exec = () => null;
        }
        const terminators = this.regexes.map((el2) => el2[1]);
        this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
        this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(s2) {
        this.matcherRe.lastIndex = this.lastIndex;
        const match = this.matcherRe.exec(s2);
        if (!match) {
          return null;
        }
        const i2 = match.findIndex((el2, i3) => i3 > 0 && el2 !== void 0);
        const matchData = this.matchIndexes[i2];
        match.splice(0, i2);
        return Object.assign(match, matchData);
      }
    }
    class ResumableMultiRegex {
      constructor() {
        this.rules = [];
        this.multiRegexes = [];
        this.count = 0;
        this.lastIndex = 0;
        this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(index) {
        if (this.multiRegexes[index]) return this.multiRegexes[index];
        const matcher = new MultiRegex();
        this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
        matcher.compile();
        this.multiRegexes[index] = matcher;
        return matcher;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(re, opts) {
        this.rules.push([re, opts]);
        if (opts.type === "begin") this.count++;
      }
      /** @param {string} s */
      exec(s2) {
        const m2 = this.getMatcher(this.regexIndex);
        m2.lastIndex = this.lastIndex;
        let result = m2.exec(s2);
        if (this.resumingScanAtSamePosition()) {
          if (result && result.index === this.lastIndex) ;
          else {
            const m22 = this.getMatcher(0);
            m22.lastIndex = this.lastIndex + 1;
            result = m22.exec(s2);
          }
        }
        if (result) {
          this.regexIndex += result.position + 1;
          if (this.regexIndex === this.count) {
            this.considerAll();
          }
        }
        return result;
      }
    }
    function buildModeRegex(mode) {
      const mm = new ResumableMultiRegex();
      mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
      if (mode.terminatorEnd) {
        mm.addRule(mode.terminatorEnd, { type: "end" });
      }
      if (mode.illegal) {
        mm.addRule(mode.illegal, { type: "illegal" });
      }
      return mm;
    }
    function compileMode(mode, parent) {
      const cmode = (
        /** @type CompiledMode */
        mode
      );
      if (mode.isCompiled) return cmode;
      [
        scopeClassName,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        compileMatch,
        MultiClass,
        beforeMatchExt
      ].forEach((ext) => ext(mode, parent));
      language.compilerExtensions.forEach((ext) => ext(mode, parent));
      mode.__beforeBegin = null;
      [
        beginKeywords,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        compileIllegal,
        // default to 1 relevance if not specified
        compileRelevance
      ].forEach((ext) => ext(mode, parent));
      mode.isCompiled = true;
      let keywordPattern = null;
      if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
        mode.keywords = Object.assign({}, mode.keywords);
        keywordPattern = mode.keywords.$pattern;
        delete mode.keywords.$pattern;
      }
      keywordPattern = keywordPattern || /\w+/;
      if (mode.keywords) {
        mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
      }
      cmode.keywordPatternRe = langRe(keywordPattern, true);
      if (parent) {
        if (!mode.begin) mode.begin = /\B|\b/;
        cmode.beginRe = langRe(cmode.begin);
        if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
        if (mode.end) cmode.endRe = langRe(cmode.end);
        cmode.terminatorEnd = source(cmode.end) || "";
        if (mode.endsWithParent && parent.terminatorEnd) {
          cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
        }
      }
      if (mode.illegal) cmode.illegalRe = langRe(
        /** @type {RegExp | string} */
        mode.illegal
      );
      if (!mode.contains) mode.contains = [];
      mode.contains = [].concat(...mode.contains.map(function(c2) {
        return expandOrCloneMode(c2 === "self" ? mode : c2);
      }));
      mode.contains.forEach(function(c2) {
        compileMode(
          /** @type Mode */
          c2,
          cmode
        );
      });
      if (mode.starts) {
        compileMode(mode.starts, parent);
      }
      cmode.matcher = buildModeRegex(cmode);
      return cmode;
    }
    if (!language.compilerExtensions) language.compilerExtensions = [];
    if (language.contains && language.contains.includes("self")) {
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    }
    language.classNameAliases = inherit$1(language.classNameAliases || {});
    return compileMode(
      /** @type Mode */
      language
    );
  }
  function dependencyOnParent(mode) {
    if (!mode) return false;
    return mode.endsWithParent || dependencyOnParent(mode.starts);
  }
  function expandOrCloneMode(mode) {
    if (mode.variants && !mode.cachedVariants) {
      mode.cachedVariants = mode.variants.map(function(variant) {
        return inherit$1(mode, { variants: null }, variant);
      });
    }
    if (mode.cachedVariants) {
      return mode.cachedVariants;
    }
    if (dependencyOnParent(mode)) {
      return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
    }
    if (Object.isFrozen(mode)) {
      return inherit$1(mode);
    }
    return mode;
  }
  var version = "11.11.1";
  class HTMLInjectionError extends Error {
    constructor(reason, html) {
      super(reason);
      this.name = "HTMLInjectionError";
      this.html = html;
    }
  }
  const escape = escapeHTML;
  const inherit2 = inherit$1;
  const NO_MATCH = Symbol("nomatch");
  const MAX_KEYWORD_HITS = 7;
  const HLJS = function(hljs) {
    const languages = /* @__PURE__ */ Object.create(null);
    const aliases = /* @__PURE__ */ Object.create(null);
    const plugins = [];
    let SAFE_MODE = true;
    const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
    const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
    let options = {
      ignoreUnescapedHTML: false,
      throwUnescapedHTML: false,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: TokenTreeEmitter
    };
    function shouldNotHighlight(languageName) {
      return options.noHighlightRe.test(languageName);
    }
    function blockLanguage(block2) {
      let classes = block2.className + " ";
      classes += block2.parentNode ? block2.parentNode.className : "";
      const match = options.languageDetectRe.exec(classes);
      if (match) {
        const language = getLanguage(match[1]);
        if (!language) {
          warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
          warn("Falling back to no-highlight mode for this block.", block2);
        }
        return language ? match[1] : "no-highlight";
      }
      return classes.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
    }
    function highlight2(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
      let code = "";
      let languageName = "";
      if (typeof optionsOrCode === "object") {
        code = codeOrLanguageName;
        ignoreIllegals = optionsOrCode.ignoreIllegals;
        languageName = optionsOrCode.language;
      } else {
        deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
        deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
        languageName = codeOrLanguageName;
        code = optionsOrCode;
      }
      if (ignoreIllegals === void 0) {
        ignoreIllegals = true;
      }
      const context = {
        code,
        language: languageName
      };
      fire("before:highlight", context);
      const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
      result.code = context.code;
      fire("after:highlight", result);
      return result;
    }
    function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
      const keywordHits = /* @__PURE__ */ Object.create(null);
      function keywordData(mode, matchText) {
        return mode.keywords[matchText];
      }
      function processKeywords() {
        if (!top2.keywords) {
          emitter.addText(modeBuffer);
          return;
        }
        let lastIndex = 0;
        top2.keywordPatternRe.lastIndex = 0;
        let match = top2.keywordPatternRe.exec(modeBuffer);
        let buf = "";
        while (match) {
          buf += modeBuffer.substring(lastIndex, match.index);
          const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
          const data = keywordData(top2, word);
          if (data) {
            const [kind, keywordRelevance] = data;
            emitter.addText(buf);
            buf = "";
            keywordHits[word] = (keywordHits[word] || 0) + 1;
            if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
            if (kind.startsWith("_")) {
              buf += match[0];
            } else {
              const cssClass = language.classNameAliases[kind] || kind;
              emitKeyword(match[0], cssClass);
            }
          } else {
            buf += match[0];
          }
          lastIndex = top2.keywordPatternRe.lastIndex;
          match = top2.keywordPatternRe.exec(modeBuffer);
        }
        buf += modeBuffer.substring(lastIndex);
        emitter.addText(buf);
      }
      function processSubLanguage() {
        if (modeBuffer === "") return;
        let result2 = null;
        if (typeof top2.subLanguage === "string") {
          if (!languages[top2.subLanguage]) {
            emitter.addText(modeBuffer);
            return;
          }
          result2 = _highlight(top2.subLanguage, modeBuffer, true, continuations[top2.subLanguage]);
          continuations[top2.subLanguage] = /** @type {CompiledMode} */
          result2._top;
        } else {
          result2 = highlightAuto(modeBuffer, top2.subLanguage.length ? top2.subLanguage : null);
        }
        if (top2.relevance > 0) {
          relevance += result2.relevance;
        }
        emitter.__addSublanguage(result2._emitter, result2.language);
      }
      function processBuffer() {
        if (top2.subLanguage != null) {
          processSubLanguage();
        } else {
          processKeywords();
        }
        modeBuffer = "";
      }
      function emitKeyword(keyword, scope2) {
        if (keyword === "") return;
        emitter.startScope(scope2);
        emitter.addText(keyword);
        emitter.endScope();
      }
      function emitMultiClass(scope2, match) {
        let i2 = 1;
        const max = match.length - 1;
        while (i2 <= max) {
          if (!scope2._emit[i2]) {
            i2++;
            continue;
          }
          const klass = language.classNameAliases[scope2[i2]] || scope2[i2];
          const text = match[i2];
          if (klass) {
            emitKeyword(text, klass);
          } else {
            modeBuffer = text;
            processKeywords();
            modeBuffer = "";
          }
          i2++;
        }
      }
      function startNewMode(mode, match) {
        if (mode.scope && typeof mode.scope === "string") {
          emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
        }
        if (mode.beginScope) {
          if (mode.beginScope._wrap) {
            emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
            modeBuffer = "";
          } else if (mode.beginScope._multi) {
            emitMultiClass(mode.beginScope, match);
            modeBuffer = "";
          }
        }
        top2 = Object.create(mode, { parent: { value: top2 } });
        return top2;
      }
      function endOfMode(mode, match, matchPlusRemainder) {
        let matched = startsWith(mode.endRe, matchPlusRemainder);
        if (matched) {
          if (mode["on:end"]) {
            const resp = new Response(mode);
            mode["on:end"](match, resp);
            if (resp.isMatchIgnored) matched = false;
          }
          if (matched) {
            while (mode.endsParent && mode.parent) {
              mode = mode.parent;
            }
            return mode;
          }
        }
        if (mode.endsWithParent) {
          return endOfMode(mode.parent, match, matchPlusRemainder);
        }
      }
      function doIgnore(lexeme) {
        if (top2.matcher.regexIndex === 0) {
          modeBuffer += lexeme[0];
          return 1;
        } else {
          resumeScanAtSamePosition = true;
          return 0;
        }
      }
      function doBeginMatch(match) {
        const lexeme = match[0];
        const newMode = match.rule;
        const resp = new Response(newMode);
        const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
        for (const cb of beforeCallbacks) {
          if (!cb) continue;
          cb(match, resp);
          if (resp.isMatchIgnored) return doIgnore(lexeme);
        }
        if (newMode.skip) {
          modeBuffer += lexeme;
        } else {
          if (newMode.excludeBegin) {
            modeBuffer += lexeme;
          }
          processBuffer();
          if (!newMode.returnBegin && !newMode.excludeBegin) {
            modeBuffer = lexeme;
          }
        }
        startNewMode(newMode, match);
        return newMode.returnBegin ? 0 : lexeme.length;
      }
      function doEndMatch(match) {
        const lexeme = match[0];
        const matchPlusRemainder = codeToHighlight.substring(match.index);
        const endMode = endOfMode(top2, match, matchPlusRemainder);
        if (!endMode) {
          return NO_MATCH;
        }
        const origin = top2;
        if (top2.endScope && top2.endScope._wrap) {
          processBuffer();
          emitKeyword(lexeme, top2.endScope._wrap);
        } else if (top2.endScope && top2.endScope._multi) {
          processBuffer();
          emitMultiClass(top2.endScope, match);
        } else if (origin.skip) {
          modeBuffer += lexeme;
        } else {
          if (!(origin.returnEnd || origin.excludeEnd)) {
            modeBuffer += lexeme;
          }
          processBuffer();
          if (origin.excludeEnd) {
            modeBuffer = lexeme;
          }
        }
        do {
          if (top2.scope) {
            emitter.closeNode();
          }
          if (!top2.skip && !top2.subLanguage) {
            relevance += top2.relevance;
          }
          top2 = top2.parent;
        } while (top2 !== endMode.parent);
        if (endMode.starts) {
          startNewMode(endMode.starts, match);
        }
        return origin.returnEnd ? 0 : lexeme.length;
      }
      function processContinuations() {
        const list = [];
        for (let current = top2; current !== language; current = current.parent) {
          if (current.scope) {
            list.unshift(current.scope);
          }
        }
        list.forEach((item) => emitter.openNode(item));
      }
      let lastMatch = {};
      function processLexeme(textBeforeMatch, match) {
        const lexeme = match && match[0];
        modeBuffer += textBeforeMatch;
        if (lexeme == null) {
          processBuffer();
          return 0;
        }
        if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
          modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
          if (!SAFE_MODE) {
            const err = new Error(`0 width match regex (${languageName})`);
            err.languageName = languageName;
            err.badRule = lastMatch.rule;
            throw err;
          }
          return 1;
        }
        lastMatch = match;
        if (match.type === "begin") {
          return doBeginMatch(match);
        } else if (match.type === "illegal" && !ignoreIllegals) {
          const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top2.scope || "<unnamed>") + '"');
          err.mode = top2;
          throw err;
        } else if (match.type === "end") {
          const processed = doEndMatch(match);
          if (processed !== NO_MATCH) {
            return processed;
          }
        }
        if (match.type === "illegal" && lexeme === "") {
          modeBuffer += "\n";
          return 1;
        }
        if (iterations > 1e5 && iterations > match.index * 3) {
          const err = new Error("potential infinite loop, way more iterations than matches");
          throw err;
        }
        modeBuffer += lexeme;
        return lexeme.length;
      }
      const language = getLanguage(languageName);
      if (!language) {
        error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
        throw new Error('Unknown language: "' + languageName + '"');
      }
      const md = compileLanguage(language);
      let result = "";
      let top2 = continuation || md;
      const continuations = {};
      const emitter = new options.__emitter(options);
      processContinuations();
      let modeBuffer = "";
      let relevance = 0;
      let index = 0;
      let iterations = 0;
      let resumeScanAtSamePosition = false;
      try {
        if (!language.__emitTokens) {
          top2.matcher.considerAll();
          for (; ; ) {
            iterations++;
            if (resumeScanAtSamePosition) {
              resumeScanAtSamePosition = false;
            } else {
              top2.matcher.considerAll();
            }
            top2.matcher.lastIndex = index;
            const match = top2.matcher.exec(codeToHighlight);
            if (!match) break;
            const beforeMatch = codeToHighlight.substring(index, match.index);
            const processedCount = processLexeme(beforeMatch, match);
            index = match.index + processedCount;
          }
          processLexeme(codeToHighlight.substring(index));
        } else {
          language.__emitTokens(codeToHighlight, emitter);
        }
        emitter.finalize();
        result = emitter.toHTML();
        return {
          language: languageName,
          value: result,
          relevance,
          illegal: false,
          _emitter: emitter,
          _top: top2
        };
      } catch (err) {
        if (err.message && err.message.includes("Illegal")) {
          return {
            language: languageName,
            value: escape(codeToHighlight),
            illegal: true,
            relevance: 0,
            _illegalBy: {
              message: err.message,
              index,
              context: codeToHighlight.slice(index - 100, index + 100),
              mode: err.mode,
              resultSoFar: result
            },
            _emitter: emitter
          };
        } else if (SAFE_MODE) {
          return {
            language: languageName,
            value: escape(codeToHighlight),
            illegal: false,
            relevance: 0,
            errorRaised: err,
            _emitter: emitter,
            _top: top2
          };
        } else {
          throw err;
        }
      }
    }
    function justTextHighlightResult(code) {
      const result = {
        value: escape(code),
        illegal: false,
        relevance: 0,
        _top: PLAINTEXT_LANGUAGE,
        _emitter: new options.__emitter(options)
      };
      result._emitter.addText(code);
      return result;
    }
    function highlightAuto(code, languageSubset) {
      languageSubset = languageSubset || options.languages || Object.keys(languages);
      const plaintext = justTextHighlightResult(code);
      const results = languageSubset.filter(getLanguage).filter(autoDetection).map(
        (name) => _highlight(name, code, false)
      );
      results.unshift(plaintext);
      const sorted = results.sort((a2, b2) => {
        if (a2.relevance !== b2.relevance) return b2.relevance - a2.relevance;
        if (a2.language && b2.language) {
          if (getLanguage(a2.language).supersetOf === b2.language) {
            return 1;
          } else if (getLanguage(b2.language).supersetOf === a2.language) {
            return -1;
          }
        }
        return 0;
      });
      const [best, secondBest] = sorted;
      const result = best;
      result.secondBest = secondBest;
      return result;
    }
    function updateClassName(element, currentLang, resultLang) {
      const language = currentLang && aliases[currentLang] || resultLang;
      element.classList.add("hljs");
      element.classList.add(`language-${language}`);
    }
    function highlightElement(element) {
      let node2 = null;
      const language = blockLanguage(element);
      if (shouldNotHighlight(language)) return;
      fire(
        "before:highlightElement",
        { el: element, language }
      );
      if (element.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
        return;
      }
      if (element.children.length > 0) {
        if (!options.ignoreUnescapedHTML) {
          console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
          console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
          console.warn("The element with unescaped HTML:");
          console.warn(element);
        }
        if (options.throwUnescapedHTML) {
          const err = new HTMLInjectionError(
            "One of your code blocks includes unescaped HTML.",
            element.innerHTML
          );
          throw err;
        }
      }
      node2 = element;
      const text = node2.textContent;
      const result = language ? highlight2(text, { language, ignoreIllegals: true }) : highlightAuto(text);
      element.innerHTML = result.value;
      element.dataset.highlighted = "yes";
      updateClassName(element, language, result.language);
      element.result = {
        language: result.language,
        // TODO: remove with version 11.0
        re: result.relevance,
        relevance: result.relevance
      };
      if (result.secondBest) {
        element.secondBest = {
          language: result.secondBest.language,
          relevance: result.secondBest.relevance
        };
      }
      fire("after:highlightElement", { el: element, result, text });
    }
    function configure2(userOptions) {
      options = inherit2(options, userOptions);
    }
    const initHighlighting = () => {
      highlightAll();
      deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function initHighlightingOnLoad() {
      highlightAll();
      deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let wantsHighlight = false;
    function highlightAll() {
      function boot() {
        highlightAll();
      }
      if (document.readyState === "loading") {
        if (!wantsHighlight) {
          window.addEventListener("DOMContentLoaded", boot, false);
        }
        wantsHighlight = true;
        return;
      }
      const blocks = document.querySelectorAll(options.cssSelector);
      blocks.forEach(highlightElement);
    }
    function registerLanguage(languageName, languageDefinition) {
      let lang2 = null;
      try {
        lang2 = languageDefinition(hljs);
      } catch (error$1) {
        error("Language definition for '{}' could not be registered.".replace("{}", languageName));
        if (!SAFE_MODE) {
          throw error$1;
        } else {
          error(error$1);
        }
        lang2 = PLAINTEXT_LANGUAGE;
      }
      if (!lang2.name) lang2.name = languageName;
      languages[languageName] = lang2;
      lang2.rawDefinition = languageDefinition.bind(null, hljs);
      if (lang2.aliases) {
        registerAliases(lang2.aliases, { languageName });
      }
    }
    function unregisterLanguage(languageName) {
      delete languages[languageName];
      for (const alias of Object.keys(aliases)) {
        if (aliases[alias] === languageName) {
          delete aliases[alias];
        }
      }
    }
    function listLanguages() {
      return Object.keys(languages);
    }
    function getLanguage(name) {
      name = (name || "").toLowerCase();
      return languages[name] || languages[aliases[name]];
    }
    function registerAliases(aliasList, { languageName }) {
      if (typeof aliasList === "string") {
        aliasList = [aliasList];
      }
      aliasList.forEach((alias) => {
        aliases[alias.toLowerCase()] = languageName;
      });
    }
    function autoDetection(name) {
      const lang2 = getLanguage(name);
      return lang2 && !lang2.disableAutodetect;
    }
    function upgradePluginAPI(plugin) {
      if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
        plugin["before:highlightElement"] = (data) => {
          plugin["before:highlightBlock"](
            Object.assign({ block: data.el }, data)
          );
        };
      }
      if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
        plugin["after:highlightElement"] = (data) => {
          plugin["after:highlightBlock"](
            Object.assign({ block: data.el }, data)
          );
        };
      }
    }
    function addPlugin(plugin) {
      upgradePluginAPI(plugin);
      plugins.push(plugin);
    }
    function removePlugin(plugin) {
      const index = plugins.indexOf(plugin);
      if (index !== -1) {
        plugins.splice(index, 1);
      }
    }
    function fire(event, args) {
      const cb = event;
      plugins.forEach(function(plugin) {
        if (plugin[cb]) {
          plugin[cb](args);
        }
      });
    }
    function deprecateHighlightBlock(el2) {
      deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
      deprecated("10.7.0", "Please use highlightElement now.");
      return highlightElement(el2);
    }
    Object.assign(hljs, {
      highlight: highlight2,
      highlightAuto,
      highlightAll,
      highlightElement,
      // TODO: Remove with v12 API
      highlightBlock: deprecateHighlightBlock,
      configure: configure2,
      initHighlighting,
      initHighlightingOnLoad,
      registerLanguage,
      unregisterLanguage,
      listLanguages,
      getLanguage,
      registerAliases,
      autoDetection,
      inherit: inherit2,
      addPlugin,
      removePlugin
    });
    hljs.debugMode = function() {
      SAFE_MODE = false;
    };
    hljs.safeMode = function() {
      SAFE_MODE = true;
    };
    hljs.versionString = version;
    hljs.regex = {
      concat,
      lookahead,
      either,
      optional,
      anyNumberOfTimes
    };
    for (const key in MODES) {
      if (typeof MODES[key] === "object") {
        deepFreeze(MODES[key]);
      }
    }
    Object.assign(hljs, MODES);
    return hljs;
  };
  const highlight = HLJS({});
  highlight.newInstance = () => HLJS({});
  core = highlight;
  highlight.HighlightJS = highlight;
  highlight.default = highlight;
  return core;
}
var coreExports = /* @__PURE__ */ requireCore();
const HighlightJS = /* @__PURE__ */ getDefaultExportFromCjs(coreExports);
const snippetToNode = ({
  snippet,
  language,
  lineNumbers
}) => {
  snippet = snippet.trim();
  snippet = snippet.replace(
    /[<>]/g,
    (t2) => ({ "<": "&lt;", ">": "&gt;" })[t2] || t2
  );
  snippet = snippet.replace(/`\[/g, "<mark>").replace(/\]`/g, "</mark>");
  if (lineNumbers) {
    const lines = snippet.split("\n");
    snippet = lines.map((line) => `<span class="line-number"></span><code>${line}</code>`).join("\n");
  } else {
    snippet = `<code>${snippet}</code>`;
  }
  const code = document.createElement("code");
  code.className = `language-${language || "rust"}`;
  code.innerHTML = snippet;
  HighlightJS.highlightBlock(code);
  const pre2 = document.createElement("pre");
  pre2.innerHTML = code.innerHTML;
  if (lineNumbers) pre2.classList.add("line-numbers");
  return pre2;
};
const Snippet = (options) => {
  const ref = A$1(null);
  y(() => {
    ref.current.appendChild(snippetToNode(options));
  }, [options]);
  return /* @__PURE__ */ u$1("div", { ref });
};
const highlightExtension = (options) => ({
  type: "output",
  filter(text) {
    const parser = new DOMParser();
    const document2 = parser.parseFromString(text, "text/html");
    const snippets = document2.querySelectorAll("pre > code");
    snippets.forEach((node2) => {
      if (node2.classList.contains("ide")) return;
      let language = void 0;
      node2.classList.forEach((cls) => {
        const prefix = "language-";
        if (cls.startsWith(prefix)) {
          language = cls.slice(prefix.length);
        }
      });
      const newNode = snippetToNode({
        ...options || {},
        snippet: node2.textContent,
        language
      });
      const pre2 = node2.parentNode;
      pre2.replaceWith(newNode);
    });
    return document2.body.innerHTML;
  }
});
const MarkdownView = ({ markdown, imag = null, snippetOptions }) => {
  const ref = A$1(null);
  y(() => {
    var _a2;
    (_a2 = window.initAquascopeBlocks) == null ? void 0 : _a2.call(window, ref.current);
  }, [markdown]);
  return /* @__PURE__ */ u$1("div", { ref, children: [
    /* @__PURE__ */ u$1(
      Markdown,
      {
        markdown,
        extensions: [highlightExtension(snippetOptions)]
      }
    ),
    imag && /* @__PURE__ */ u$1("img", { src: imag, alt: "" })
  ] });
};
const MoreInfo = ({ markdown }) => {
  const [open, setOpen] = d(false);
  return /* @__PURE__ */ u$1("span", { className: "info-wrapper", children: [
    open && /* @__PURE__ */ u$1("div", { className: "info-popout", children: /* @__PURE__ */ u$1(MarkdownView, { markdown }) }),
    /* @__PURE__ */ u$1("span", { className: "info", onClick: () => setOpen(!open) })
  ] });
};
const InformationalMethods = {
  PromptView: ({ prompt, image: image2 }) => /* @__PURE__ */ u$1(
    MarkdownView,
    {
      markdown: prompt.prompt,
      imag: image2,
      snippetOptions: { lineNumbers: true }
    }
  ),
  questionState() {
    return null;
  },
  ResponseView: () => /* @__PURE__ */ u$1("div", { className: "informational-message", children: /* @__PURE__ */ u$1("p", { children: "This is an informational question. No response is required." }) }),
  getAnswerFromDOM() {
    return null;
  },
  compareAnswers() {
    return true;
  },
  AnswerView: () => /* @__PURE__ */ u$1("div", { className: "informational-message", children: /* @__PURE__ */ u$1("p", { children: "This question is informational and does not have an answer." }) })
};
const shuffle = (n2) => [...n2].sort(() => 0.5 - Math.random());
const MultipleChoiceMethods = {
  PromptView: ({ prompt, image: image2 }) => /* @__PURE__ */ u$1(
    MarkdownView,
    {
      markdown: prompt.prompt,
      imag: image2,
      snippetOptions: { lineNumbers: true }
    }
  ),
  questionState(prompt, answer) {
    let choices;
    const answers = Array.isArray(answer.answer) ? answer.answer : [answer.answer];
    if (prompt.answerIndex !== void 0) {
      choices = [...prompt.distractors];
      choices.splice(prompt.answerIndex, 0, ...answers);
    } else {
      choices = [...answers, ...prompt.distractors];
      if (prompt.sortAnswers) {
        choices = choices.concat().sort();
      } else {
        choices = shuffle(choices);
      }
    }
    return { choices };
  },
  ResponseView: ({ answer, state, formValidators: { required, register } }) => /* @__PURE__ */ u$1(k$2, { children: state.choices.map((choice, i2) => {
    const id = g$1();
    const multiAnswer = Array.isArray(answer.answer);
    return /* @__PURE__ */ u$1("div", { className: "choice", children: /* @__PURE__ */ u$1("label", { htmlFor: id, children: [
      /* @__PURE__ */ u$1(
        "input",
        {
          type: multiAnswer ? "checkbox" : "radio",
          ...multiAnswer ? register("answer", {
            validate: (args) => args.length > 0
          }) : required("answer"),
          value: choice,
          id
        }
      ),
      /* @__PURE__ */ u$1(MarkdownView, { markdown: choice })
    ] }) }, i2);
  }) }),
  getAnswerFromDOM(data) {
    if (Array.isArray(data.answer)) data.answer.sort();
    return { answer: data.answer };
  },
  compareAnswers(provided, user) {
    const toList = (s2) => (Array.isArray(s2) ? s2 : [s2]).sort();
    return isEqual(toList(provided.answer), toList(user.answer));
  },
  AnswerView: ({ answer, baseline }) => /* @__PURE__ */ u$1(
    "div",
    {
      className: classNames(
        "md-flex",
        MultipleChoiceMethods.compareAnswers(baseline, answer) ? "correct" : "incorrect"
      ),
      children: Array.isArray(answer.answer) ? /* @__PURE__ */ u$1("ul", { children: answer.answer.map((a2, i2) => /* @__PURE__ */ u$1("li", { children: /* @__PURE__ */ u$1(MarkdownView, { markdown: a2 }) }, i2)) }) : /* @__PURE__ */ u$1(MarkdownView, { markdown: answer.answer })
    }
  )
};
const ShortAnswerMethods = {
  PromptView: ({ prompt, image: image2 }) => /* @__PURE__ */ u$1("div", { children: /* @__PURE__ */ u$1(
    MarkdownView,
    {
      markdown: prompt.prompt,
      imag: image2,
      snippetOptions: { lineNumbers: true }
    }
  ) }),
  ResponseView: ({ prompt, submit, formValidators: { required } }) => {
    const formFields = required("answer");
    return /* @__PURE__ */ u$1(k$2, { children: !prompt.response || prompt.response === "short" ? /* @__PURE__ */ u$1(
      "input",
      {
        ...formFields,
        type: "text",
        placeholder: "Write your answer here...",
        onKeyDown: (e2) => {
          if (e2.key === "Enter") submit();
        }
      }
    ) : (
      /* prompt.response == "long" */
      /* @__PURE__ */ u$1("textarea", { ...formFields, placeholder: "Write your answer here..." })
    ) });
  },
  AnswerView: ({ answer, baseline }) => /* @__PURE__ */ u$1(
    "code",
    {
      className: ShortAnswerMethods.compareAnswers(baseline, answer) ? "correct" : "incorrect",
      children: answer.answer
    }
  ),
  compareAnswers(providedAnswer, userAnswer) {
    const clean = (s2) => s2.toLowerCase().trim();
    const possibleAnswers = [providedAnswer.answer].concat(providedAnswer.alternatives || []).map(clean);
    return possibleAnswers.includes(clean(userAnswer.answer));
  }
};
const TracingMethods = {
  PromptView: ({ prompt, image: image2 }) => /* @__PURE__ */ u$1(k$2, { children: [
    /* @__PURE__ */ u$1("p", { children: "Determine whether the program will pass the compiler. If it passes, write the expected output of the program if it were executed." }),
    /* @__PURE__ */ u$1(Snippet, { snippet: prompt.program, lineNumbers: true }),
    image2 && /* @__PURE__ */ u$1("img", { src: image2, alt: "" })
  ] }),
  ResponseView: ({
    // prompt,
    formValidators: {
      required,
      formState: { errors }
    }
  }) => {
    const [doesCompile, setDoesCompile] = d(
      void 0
    );
    const [doesCompileTrueId, doesCompileFalseId] = [g$1(), g$1()];
    return /* @__PURE__ */ u$1(k$2, { children: [
      /* @__PURE__ */ u$1("div", { className: "response-block", children: [
        "This program:",
        " ",
        /* @__PURE__ */ u$1("span", { className: classNames("option", { error: errors.doesCompile }), children: [
          /* @__PURE__ */ u$1(
            "input",
            {
              type: "radio",
              ...required("doesCompile"),
              id: doesCompileTrueId,
              value: "true",
              onClick: () => setDoesCompile(true)
            }
          ),
          " ",
          /* @__PURE__ */ u$1("label", { htmlFor: doesCompileTrueId, children: "DOES compile" })
        ] }),
        /* @__PURE__ */ u$1("span", { className: "option-separator", children: "OR" }),
        /* @__PURE__ */ u$1("span", { className: classNames("option", { error: errors.doesCompile }), children: [
          /* @__PURE__ */ u$1(
            "input",
            {
              type: "radio",
              ...required("doesCompile"),
              id: doesCompileFalseId,
              value: "false",
              onClick: () => setDoesCompile(false)
            }
          ),
          " ",
          /* @__PURE__ */ u$1("label", { htmlFor: doesCompileFalseId, children: "does NOT compile" })
        ] })
      ] }),
      doesCompile !== void 0 && doesCompile && /* @__PURE__ */ u$1("div", { children: [
        /* @__PURE__ */ u$1("p", { children: "The output of this program will be:" }),
        /* @__PURE__ */ u$1(
          "textarea",
          {
            ...required("stdout"),
            placeholder: "Write the program's stdout here..."
          }
        )
      ] })
    ] });
  },
  getAnswerFromDOM(data) {
    const doesCompile = data.doesCompile === "true";
    if (doesCompile) {
      const stdout = data.stdout;
      return { doesCompile, stdout };
    } else {
      return { doesCompile };
    }
  },
  AnswerView: ({ answer, baseline }) => {
    const correctnessClass = (key) => answer[key] === baseline[key] ? "correct" : "incorrect";
    return /* @__PURE__ */ u$1("div", { children: [
      /* @__PURE__ */ u$1("p", { className: correctnessClass("doesCompile"), children: [
        "This program",
        " ",
        /* @__PURE__ */ u$1("strong", { children: answer.doesCompile ? "does" : "does not" }),
        " compile."
      ] }),
      answer.doesCompile ? /* @__PURE__ */ u$1(k$2, { children: [
        /* @__PURE__ */ u$1(
          "p",
          {
            className: baseline.stdout && answer.stdout.trim() === baseline.stdout.trim() ? "correct" : "incorrect",
            children: "The output of this program will be:"
          }
        ),
        /* @__PURE__ */ u$1("pre", { children: answer.stdout })
      ] }) : (
        /*<p className={correctnessClass("lineNumber")}>
          The last line number in the error is:{" "}
          <code>{answer.lineNumber}</code>
        </p>*/
        null
      )
    ] });
  },
  compareAnswers(providedAnswer, userAnswer) {
    const clean = (s2) => s2.trim();
    return providedAnswer.doesCompile === userAnswer.doesCompile && (providedAnswer.doesCompile ? clean(userAnswer.stdout) === clean(providedAnswer.stdout) : true);
  }
};
const DndContext = K$1({
  dragDropManager: void 0
});
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString()
};
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null) return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action2) {
    if (!isPlainObject(action2)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action2.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action2);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i2 = 0; i2 < listeners.length; i2++) {
      var listener = listeners[i2];
      listener();
    }
    return action2;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable2() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe2(observer2) {
        if (typeof observer2 !== "object" || observer2 === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer2.next) {
            observer2.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable2, _ref2;
}
function invariant(condition, format, ...args) {
  if (isProduction()) {
    if (format === void 0) {
      throw new Error("invariant requires an error message argument");
    }
  }
  if (!condition) {
    let error;
    if (format === void 0) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      let argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return args[argIndex++];
      }));
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
}
function isProduction() {
  return typeof process !== "undefined" && process.env["NODE_ENV"] === "production";
}
function get(obj, path, defaultValue) {
  return path.split(".").reduce(
    (a2, c2) => a2 && a2[c2] ? a2[c2] : defaultValue || null,
    obj
  );
}
function without$1(items, item) {
  return items.filter(
    (i2) => i2 !== item
  );
}
function isObject(input) {
  return typeof input === "object";
}
function xor(itemsA, itemsB) {
  const map3 = /* @__PURE__ */ new Map();
  const insertItem = (item) => {
    map3.set(item, map3.has(item) ? map3.get(item) + 1 : 1);
  };
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  const result = [];
  map3.forEach((count, key) => {
    if (count === 1) {
      result.push(key);
    }
  });
  return result;
}
function intersection(itemsA, itemsB) {
  return itemsA.filter(
    (t2) => itemsB.indexOf(t2) > -1
  );
}
const INIT_COORDS = "dnd-core/INIT_COORDS";
const BEGIN_DRAG = "dnd-core/BEGIN_DRAG";
const PUBLISH_DRAG_SOURCE = "dnd-core/PUBLISH_DRAG_SOURCE";
const HOVER = "dnd-core/HOVER";
const DROP = "dnd-core/DROP";
const END_DRAG = "dnd-core/END_DRAG";
function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}
const ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function beginDrag(sourceIds = [], options = {
    publishSource: true
  }) {
    const { publishSource = true, clientOffset, getSourceClientOffset: getSourceClientOffset2 } = options;
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    manager.dispatch(setClientOffset(clientOffset));
    verifyInvariants$1(sourceIds, monitor, registry);
    const sourceId = getDraggableSource(sourceIds, monitor);
    if (sourceId == null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    }
    let sourceClientOffset = null;
    if (clientOffset) {
      if (!getSourceClientOffset2) {
        throw new Error("getSourceClientOffset must be defined");
      }
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2);
      sourceClientOffset = getSourceClientOffset2(sourceId);
    }
    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    const source = registry.getSource(sourceId);
    const item = source.beginDrag(monitor, sourceId);
    if (item == null) {
      return void 0;
    }
    verifyItemIsObject(item);
    registry.pinSource(sourceId);
    const itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType,
        item,
        sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}
function verifyInvariants$1(sourceIds, monitor, registry) {
  invariant(!monitor.isDragging(), "Cannot call beginDrag while dragging.");
  sourceIds.forEach(function(sourceId) {
    invariant(registry.getSource(sourceId), "Expected sourceIds to be registered.");
  });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset2) {
  invariant(typeof getSourceClientOffset2 === "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function verifyItemIsObject(item) {
  invariant(isObject(item), "Item must be an object.");
}
function getDraggableSource(sourceIds, monitor) {
  let sourceId = null;
  for (let i2 = sourceIds.length - 1; i2 >= 0; i2--) {
    if (monitor.canDragSource(sourceIds[i2])) {
      sourceId = sourceIds[i2];
      break;
    }
  }
  return sourceId;
}
function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread$4(target2) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    var ownKeys3 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys3 = ownKeys3.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys3.forEach(function(key) {
      _defineProperty$4(target2, key, source[key]);
    });
  }
  return target2;
}
function createDrop(manager) {
  return function drop(options = {}) {
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    verifyInvariants(monitor);
    const targetIds = getDroppableTargets(monitor);
    targetIds.forEach((targetId, index) => {
      const dropResult = determineDropResult(targetId, index, registry, monitor);
      const action2 = {
        type: DROP,
        payload: {
          dropResult: _objectSpread$4({}, options, dropResult)
        }
      };
      manager.dispatch(action2);
    });
  };
}
function verifyInvariants(monitor) {
  invariant(monitor.isDragging(), "Cannot call drop while not dragging.");
  invariant(!monitor.didDrop(), "Cannot call drop twice during one drag operation.");
}
function determineDropResult(targetId, index, registry, monitor) {
  const target2 = registry.getTarget(targetId);
  let dropResult = target2 ? target2.drop(monitor, targetId) : void 0;
  verifyDropResultType(dropResult);
  if (typeof dropResult === "undefined") {
    dropResult = index === 0 ? {} : monitor.getDropResult();
  }
  return dropResult;
}
function verifyDropResultType(dropResult) {
  invariant(typeof dropResult === "undefined" || isObject(dropResult), "Drop result must either be an object or undefined.");
}
function getDroppableTargets(monitor) {
  const targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  targetIds.reverse();
  return targetIds;
}
function createEndDrag(manager) {
  return function endDrag() {
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    verifyIsDragging(monitor);
    const sourceId = monitor.getSourceId();
    if (sourceId != null) {
      const source = registry.getSource(sourceId, true);
      source.endDrag(monitor, sourceId);
      registry.unpinSource();
    }
    return {
      type: END_DRAG
    };
  };
}
function verifyIsDragging(monitor) {
  invariant(monitor.isDragging(), "Cannot call endDrag while not dragging.");
}
function matchesType(targetType, draggedItemType) {
  if (draggedItemType === null) {
    return targetType === null;
  }
  return Array.isArray(targetType) ? targetType.some(
    (t2) => t2 === draggedItemType
  ) : targetType === draggedItemType;
}
function createHover(manager) {
  return function hover(targetIdsArg, { clientOffset } = {}) {
    verifyTargetIdsIsArray(targetIdsArg);
    const targetIds = targetIdsArg.slice(0);
    const monitor = manager.getMonitor();
    const registry = manager.getRegistry();
    const draggedItemType = monitor.getItemType();
    removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
    checkInvariants(targetIds, monitor, registry);
    hoverAllTargets(targetIds, monitor, registry);
    return {
      type: HOVER,
      payload: {
        targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}
function verifyTargetIdsIsArray(targetIdsArg) {
  invariant(Array.isArray(targetIdsArg), "Expected targetIds to be an array.");
}
function checkInvariants(targetIds, monitor, registry) {
  invariant(monitor.isDragging(), "Cannot call hover while not dragging.");
  invariant(!monitor.didDrop(), "Cannot call hover after drop.");
  for (let i2 = 0; i2 < targetIds.length; i2++) {
    const targetId = targetIds[i2];
    invariant(targetIds.lastIndexOf(targetId) === i2, "Expected targetIds to be unique in the passed array.");
    const target2 = registry.getTarget(targetId);
    invariant(target2, "Expected targetIds to be registered.");
  }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  for (let i2 = targetIds.length - 1; i2 >= 0; i2--) {
    const targetId = targetIds[i2];
    const targetType = registry.getTargetType(targetId);
    if (!matchesType(targetType, draggedItemType)) {
      targetIds.splice(i2, 1);
    }
  }
}
function hoverAllTargets(targetIds, monitor, registry) {
  targetIds.forEach(function(targetId) {
    const target2 = registry.getTarget(targetId);
    target2.hover(monitor, targetId);
  });
}
function createPublishDragSource(manager) {
  return function publishDragSource() {
    const monitor = manager.getMonitor();
    if (monitor.isDragging()) {
      return {
        type: PUBLISH_DRAG_SOURCE
      };
    }
    return;
  };
}
function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}
class DragDropManagerImpl {
  receiveBackend(backend) {
    this.backend = backend;
  }
  getMonitor() {
    return this.monitor;
  }
  getBackend() {
    return this.backend;
  }
  getRegistry() {
    return this.monitor.registry;
  }
  getActions() {
    const manager = this;
    const { dispatch } = this.store;
    function bindActionCreator(actionCreator) {
      return (...args) => {
        const action2 = actionCreator.apply(manager, args);
        if (typeof action2 !== "undefined") {
          dispatch(action2);
        }
      };
    }
    const actions = createDragDropActions(this);
    return Object.keys(actions).reduce((boundActions, key) => {
      const action2 = actions[key];
      boundActions[key] = bindActionCreator(action2);
      return boundActions;
    }, {});
  }
  dispatch(action2) {
    this.store.dispatch(action2);
  }
  constructor(store, monitor) {
    this.isSetUp = false;
    this.handleRefCountChange = () => {
      const shouldSetUp = this.store.getState().refCount > 0;
      if (this.backend) {
        if (shouldSetUp && !this.isSetUp) {
          this.backend.setup();
          this.isSetUp = true;
        } else if (!shouldSetUp && this.isSetUp) {
          this.backend.teardown();
          this.isSetUp = false;
        }
      }
    };
    this.store = store;
    this.monitor = monitor;
    store.subscribe(this.handleRefCountChange);
  }
}
function add(a2, b2) {
  return {
    x: a2.x + b2.x,
    y: a2.y + b2.y
  };
}
function subtract(a2, b2) {
  return {
    x: a2.x - b2.x,
    y: a2.y - b2.y
  };
}
function getSourceClientOffset(state) {
  const { clientOffset, initialClientOffset, initialSourceClientOffset } = state;
  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }
  return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
function getDifferenceFromInitialOffset(state) {
  const { clientOffset, initialClientOffset } = state;
  if (!clientOffset || !initialClientOffset) {
    return null;
  }
  return subtract(clientOffset, initialClientOffset);
}
const NONE = [];
const ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
function areDirty(dirtyIds, handlerIds) {
  if (dirtyIds === NONE) {
    return false;
  }
  if (dirtyIds === ALL || typeof handlerIds === "undefined") {
    return true;
  }
  const commonIds = intersection(handlerIds, dirtyIds);
  return commonIds.length > 0;
}
class DragDropMonitorImpl {
  subscribeToStateChange(listener, options = {}) {
    const { handlerIds } = options;
    invariant(typeof listener === "function", "listener must be a function.");
    invariant(typeof handlerIds === "undefined" || Array.isArray(handlerIds), "handlerIds, when specified, must be an array of strings.");
    let prevStateId = this.store.getState().stateId;
    const handleChange = () => {
      const state = this.store.getState();
      const currentStateId = state.stateId;
      try {
        const canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);
        if (!canSkipListener) {
          listener();
        }
      } finally {
        prevStateId = currentStateId;
      }
    };
    return this.store.subscribe(handleChange);
  }
  subscribeToOffsetChange(listener) {
    invariant(typeof listener === "function", "listener must be a function.");
    let previousState = this.store.getState().dragOffset;
    const handleChange = () => {
      const nextState = this.store.getState().dragOffset;
      if (nextState === previousState) {
        return;
      }
      previousState = nextState;
      listener();
    };
    return this.store.subscribe(handleChange);
  }
  canDragSource(sourceId) {
    if (!sourceId) {
      return false;
    }
    const source = this.registry.getSource(sourceId);
    invariant(source, `Expected to find a valid source. sourceId=${sourceId}`);
    if (this.isDragging()) {
      return false;
    }
    return source.canDrag(this, sourceId);
  }
  canDropOnTarget(targetId) {
    if (!targetId) {
      return false;
    }
    const target2 = this.registry.getTarget(targetId);
    invariant(target2, `Expected to find a valid target. targetId=${targetId}`);
    if (!this.isDragging() || this.didDrop()) {
      return false;
    }
    const targetType = this.registry.getTargetType(targetId);
    const draggedItemType = this.getItemType();
    return matchesType(targetType, draggedItemType) && target2.canDrop(this, targetId);
  }
  isDragging() {
    return Boolean(this.getItemType());
  }
  isDraggingSource(sourceId) {
    if (!sourceId) {
      return false;
    }
    const source = this.registry.getSource(sourceId, true);
    invariant(source, `Expected to find a valid source. sourceId=${sourceId}`);
    if (!this.isDragging() || !this.isSourcePublic()) {
      return false;
    }
    const sourceType = this.registry.getSourceType(sourceId);
    const draggedItemType = this.getItemType();
    if (sourceType !== draggedItemType) {
      return false;
    }
    return source.isDragging(this, sourceId);
  }
  isOverTarget(targetId, options = {
    shallow: false
  }) {
    if (!targetId) {
      return false;
    }
    const { shallow } = options;
    if (!this.isDragging()) {
      return false;
    }
    const targetType = this.registry.getTargetType(targetId);
    const draggedItemType = this.getItemType();
    if (draggedItemType && !matchesType(targetType, draggedItemType)) {
      return false;
    }
    const targetIds = this.getTargetIds();
    if (!targetIds.length) {
      return false;
    }
    const index = targetIds.indexOf(targetId);
    if (shallow) {
      return index === targetIds.length - 1;
    } else {
      return index > -1;
    }
  }
  getItemType() {
    return this.store.getState().dragOperation.itemType;
  }
  getItem() {
    return this.store.getState().dragOperation.item;
  }
  getSourceId() {
    return this.store.getState().dragOperation.sourceId;
  }
  getTargetIds() {
    return this.store.getState().dragOperation.targetIds;
  }
  getDropResult() {
    return this.store.getState().dragOperation.dropResult;
  }
  didDrop() {
    return this.store.getState().dragOperation.didDrop;
  }
  isSourcePublic() {
    return Boolean(this.store.getState().dragOperation.isSourcePublic);
  }
  getInitialClientOffset() {
    return this.store.getState().dragOffset.initialClientOffset;
  }
  getInitialSourceClientOffset() {
    return this.store.getState().dragOffset.initialSourceClientOffset;
  }
  getClientOffset() {
    return this.store.getState().dragOffset.clientOffset;
  }
  getSourceClientOffset() {
    return getSourceClientOffset(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
  }
  constructor(store, registry) {
    this.store = store;
    this.registry = registry;
  }
}
const scope = typeof global !== "undefined" ? global : self;
const BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
  return function requestCall() {
    const timeoutHandle = setTimeout(handleTimer, 0);
    const intervalHandle = setInterval(handleTimer, 50);
    function handleTimer() {
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      callback();
    }
  };
}
function makeRequestCallFromMutationObserver(callback) {
  let toggle = 1;
  const observer2 = new BrowserMutationObserver(callback);
  const node2 = document.createTextNode("");
  observer2.observe(node2, {
    characterData: true
  });
  return function requestCall() {
    toggle = -toggle;
    node2.data = toggle;
  };
}
const makeRequestCall = typeof BrowserMutationObserver === "function" ? (
  // reliably everywhere they are implemented.
  // They are implemented in all modern browsers.
  //
  // - Android 4-4.3
  // - Chrome 26-34
  // - Firefox 14-29
  // - Internet Explorer 11
  // - iPad Safari 6-7.1
  // - iPhone Safari 7-7.1
  // - Safari 6-7
  makeRequestCallFromMutationObserver
) : (
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
  makeRequestCallFromTimer
);
class AsapQueue {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(task) {
    const { queue: q2, requestFlush } = this;
    if (!q2.length) {
      requestFlush();
      this.flushing = true;
    }
    q2[q2.length] = task;
  }
  constructor() {
    this.queue = [];
    this.pendingErrors = [];
    this.flushing = false;
    this.index = 0;
    this.capacity = 1024;
    this.flush = () => {
      const { queue: q2 } = this;
      while (this.index < q2.length) {
        const currentIndex = this.index;
        this.index++;
        q2[currentIndex].call();
        if (this.index > this.capacity) {
          for (let scan = 0, newLength = q2.length - this.index; scan < newLength; scan++) {
            q2[scan] = q2[scan + this.index];
          }
          q2.length -= this.index;
          this.index = 0;
        }
      }
      q2.length = 0;
      this.index = 0;
      this.flushing = false;
    };
    this.registerPendingError = (err) => {
      this.pendingErrors.push(err);
      this.requestErrorThrow();
    };
    this.requestFlush = makeRequestCall(this.flush);
    this.requestErrorThrow = makeRequestCallFromTimer(() => {
      if (this.pendingErrors.length) {
        throw this.pendingErrors.shift();
      }
    });
  }
}
class RawTask {
  call() {
    try {
      this.task && this.task();
    } catch (error) {
      this.onError(error);
    } finally {
      this.task = null;
      this.release(this);
    }
  }
  constructor(onError, release) {
    this.onError = onError;
    this.release = release;
    this.task = null;
  }
}
class TaskFactory {
  create(task) {
    const tasks = this.freeTasks;
    const t1 = tasks.length ? tasks.pop() : new RawTask(
      this.onError,
      (t2) => tasks[tasks.length] = t2
    );
    t1.task = task;
    return t1;
  }
  constructor(onError) {
    this.onError = onError;
    this.freeTasks = [];
  }
}
const asapQueue = new AsapQueue();
const taskFactory = new TaskFactory(asapQueue.registerPendingError);
function asap(task) {
  asapQueue.enqueueTask(taskFactory.create(task));
}
const ADD_SOURCE = "dnd-core/ADD_SOURCE";
const ADD_TARGET = "dnd-core/ADD_TARGET";
const REMOVE_SOURCE = "dnd-core/REMOVE_SOURCE";
const REMOVE_TARGET = "dnd-core/REMOVE_TARGET";
function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId
    }
  };
}
function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId
    }
  };
}
function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId
    }
  };
}
function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId
    }
  };
}
function validateSourceContract(source) {
  invariant(typeof source.canDrag === "function", "Expected canDrag to be a function.");
  invariant(typeof source.beginDrag === "function", "Expected beginDrag to be a function.");
  invariant(typeof source.endDrag === "function", "Expected endDrag to be a function.");
}
function validateTargetContract(target2) {
  invariant(typeof target2.canDrop === "function", "Expected canDrop to be a function.");
  invariant(typeof target2.hover === "function", "Expected hover to be a function.");
  invariant(typeof target2.drop === "function", "Expected beginDrag to be a function.");
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(
      (t2) => validateType(t2, false)
    );
    return;
  }
  invariant(typeof type === "string" || typeof type === "symbol", allowArray ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
var HandlerRole;
(function(HandlerRole2) {
  HandlerRole2["SOURCE"] = "SOURCE";
  HandlerRole2["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));
let nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}
function getNextHandlerId(role) {
  const id = getNextUniqueId().toString();
  switch (role) {
    case HandlerRole.SOURCE:
      return `S${id}`;
    case HandlerRole.TARGET:
      return `T${id}`;
    default:
      throw new Error(`Unknown Handler Role: ${role}`);
  }
}
function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case "S":
      return HandlerRole.SOURCE;
    case "T":
      return HandlerRole.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${handlerId}`);
  }
}
function mapContainsValue(map3, searchValue) {
  const entries = map3.entries();
  let isDone = false;
  do {
    const { done, value: [, value] } = entries.next();
    if (value === searchValue) {
      return true;
    }
    isDone = !!done;
  } while (!isDone);
  return false;
}
class HandlerRegistryImpl {
  addSource(type, source) {
    validateType(type);
    validateSourceContract(source);
    const sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
    this.store.dispatch(addSource(sourceId));
    return sourceId;
  }
  addTarget(type, target2) {
    validateType(type, true);
    validateTargetContract(target2);
    const targetId = this.addHandler(HandlerRole.TARGET, type, target2);
    this.store.dispatch(addTarget(targetId));
    return targetId;
  }
  containsHandler(handler) {
    return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
  }
  getSource(sourceId, includePinned = false) {
    invariant(this.isSourceId(sourceId), "Expected a valid source ID.");
    const isPinned = includePinned && sourceId === this.pinnedSourceId;
    const source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
    return source;
  }
  getTarget(targetId) {
    invariant(this.isTargetId(targetId), "Expected a valid target ID.");
    return this.dropTargets.get(targetId);
  }
  getSourceType(sourceId) {
    invariant(this.isSourceId(sourceId), "Expected a valid source ID.");
    return this.types.get(sourceId);
  }
  getTargetType(targetId) {
    invariant(this.isTargetId(targetId), "Expected a valid target ID.");
    return this.types.get(targetId);
  }
  isSourceId(handlerId) {
    const role = parseRoleFromHandlerId(handlerId);
    return role === HandlerRole.SOURCE;
  }
  isTargetId(handlerId) {
    const role = parseRoleFromHandlerId(handlerId);
    return role === HandlerRole.TARGET;
  }
  removeSource(sourceId) {
    invariant(this.getSource(sourceId), "Expected an existing source.");
    this.store.dispatch(removeSource(sourceId));
    asap(() => {
      this.dragSources.delete(sourceId);
      this.types.delete(sourceId);
    });
  }
  removeTarget(targetId) {
    invariant(this.getTarget(targetId), "Expected an existing target.");
    this.store.dispatch(removeTarget(targetId));
    this.dropTargets.delete(targetId);
    this.types.delete(targetId);
  }
  pinSource(sourceId) {
    const source = this.getSource(sourceId);
    invariant(source, "Expected an existing source.");
    this.pinnedSourceId = sourceId;
    this.pinnedSource = source;
  }
  unpinSource() {
    invariant(this.pinnedSource, "No source is pinned at the time.");
    this.pinnedSourceId = null;
    this.pinnedSource = null;
  }
  addHandler(role, type, handler) {
    const id = getNextHandlerId(role);
    this.types.set(id, type);
    if (role === HandlerRole.SOURCE) {
      this.dragSources.set(id, handler);
    } else if (role === HandlerRole.TARGET) {
      this.dropTargets.set(id, handler);
    }
    return id;
  }
  constructor(store) {
    this.types = /* @__PURE__ */ new Map();
    this.dragSources = /* @__PURE__ */ new Map();
    this.dropTargets = /* @__PURE__ */ new Map();
    this.pinnedSourceId = null;
    this.pinnedSource = null;
    this.store = store;
  }
}
const strictEquality = (a2, b2) => a2 === b2;
function areCoordsEqual(offsetA, offsetB) {
  if (!offsetA && !offsetB) {
    return true;
  } else if (!offsetA || !offsetB) {
    return false;
  } else {
    return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
  }
}
function areArraysEqual(a2, b2, isEqual2 = strictEquality) {
  if (a2.length !== b2.length) {
    return false;
  }
  for (let i2 = 0; i2 < a2.length; ++i2) {
    if (!isEqual2(a2[i2], b2[i2])) {
      return false;
    }
  }
  return true;
}
function reduce$5(_state = NONE, action2) {
  switch (action2.type) {
    case HOVER:
      break;
    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;
    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }
  const { targetIds = [], prevTargetIds = [] } = action2.payload;
  const result = xor(targetIds, prevTargetIds);
  const didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);
  if (!didChange) {
    return NONE;
  }
  const prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
  const innermostTargetId = targetIds[targetIds.length - 1];
  if (prevInnermostTargetId !== innermostTargetId) {
    if (prevInnermostTargetId) {
      result.push(prevInnermostTargetId);
    }
    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }
  return result;
}
function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread$3(target2) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    var ownKeys3 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys3 = ownKeys3.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys3.forEach(function(key) {
      _defineProperty$3(target2, key, source[key]);
    });
  }
  return target2;
}
const initialState$1 = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function reduce$4(state = initialState$1, action2) {
  const { payload } = action2;
  switch (action2.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };
    case HOVER:
      if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
        return state;
      }
      return _objectSpread$3({}, state, {
        clientOffset: payload.clientOffset
      });
    case END_DRAG:
    case DROP:
      return initialState$1;
    default:
      return state;
  }
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread$2(target2) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    var ownKeys3 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys3 = ownKeys3.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys3.forEach(function(key) {
      _defineProperty$2(target2, key, source[key]);
    });
  }
  return target2;
}
const initialState = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};
function reduce$3(state = initialState, action2) {
  const { payload } = action2;
  switch (action2.type) {
    case BEGIN_DRAG:
      return _objectSpread$2({}, state, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: false
      });
    case PUBLISH_DRAG_SOURCE:
      return _objectSpread$2({}, state, {
        isSourcePublic: true
      });
    case HOVER:
      return _objectSpread$2({}, state, {
        targetIds: payload.targetIds
      });
    case REMOVE_TARGET:
      if (state.targetIds.indexOf(payload.targetId) === -1) {
        return state;
      }
      return _objectSpread$2({}, state, {
        targetIds: without$1(state.targetIds, payload.targetId)
      });
    case DROP:
      return _objectSpread$2({}, state, {
        dropResult: payload.dropResult,
        didDrop: true,
        targetIds: []
      });
    case END_DRAG:
      return _objectSpread$2({}, state, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return state;
  }
}
function reduce$2(state = 0, action2) {
  switch (action2.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;
    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;
    default:
      return state;
  }
}
function reduce$1(state = 0) {
  return state + 1;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread$1(target2) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    var ownKeys3 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys3 = ownKeys3.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys3.forEach(function(key) {
      _defineProperty$1(target2, key, source[key]);
    });
  }
  return target2;
}
function reduce(state = {}, action2) {
  return {
    dirtyHandlerIds: reduce$5(state.dirtyHandlerIds, {
      type: action2.type,
      payload: _objectSpread$1({}, action2.payload, {
        prevTargetIds: get(state, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: reduce$4(state.dragOffset, action2),
    refCount: reduce$2(state.refCount, action2),
    dragOperation: reduce$3(state.dragOperation, action2),
    stateId: reduce$1(state.stateId)
  };
}
function createDragDropManager(backendFactory, globalContext = void 0, backendOptions = {}, debugMode = false) {
  const store = makeStoreInstance(debugMode);
  const monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
  const manager = new DragDropManagerImpl(store, monitor);
  const backend = backendFactory(manager, globalContext, backendOptions);
  manager.receiveBackend(backend);
  return manager;
}
function makeStoreInstance(debugMode) {
  const reduxDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return createStore(reduce, debugMode && reduxDevTools && reduxDevTools({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target2 = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target2[key] = source[key];
    }
  }
  return target2;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target2 = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0) continue;
    target2[key] = source[key];
  }
  return target2;
}
let refCount = 0;
const INSTANCE_SYM = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var DndProvider = /* @__PURE__ */ M(function DndProvider2(_param) {
  var { children } = _param, props = _objectWithoutProperties(_param, [
    "children"
  ]);
  const [manager, isGlobalInstance] = getDndContextValue(props);
  y(() => {
    if (isGlobalInstance) {
      const context = getGlobalContext();
      ++refCount;
      return () => {
        if (--refCount === 0) {
          context[INSTANCE_SYM] = null;
        }
      };
    }
    return;
  }, []);
  return /* @__PURE__ */ u$1(DndContext.Provider, {
    value: manager,
    children
  });
});
function getDndContextValue(props) {
  if ("manager" in props) {
    const manager2 = {
      dragDropManager: props.manager
    };
    return [
      manager2,
      false
    ];
  }
  const manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  const isGlobalInstance = !props.context;
  return [
    manager,
    isGlobalInstance
  ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
  const ctx = context;
  if (!ctx[INSTANCE_SYM]) {
    ctx[INSTANCE_SYM] = {
      dragDropManager: createDragDropManager(backend, context, options, debugMode)
    };
  }
  return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
  return typeof global !== "undefined" ? global : window;
}
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? _ : y;
function useCollector(monitor, collect, onUpdate) {
  const [collected, setCollected] = d(
    () => collect(monitor)
  );
  const updateCollected = q$1(() => {
    const nextValue = collect(monitor);
    if (!isEqual(collected, nextValue)) {
      setCollected(nextValue);
      if (onUpdate) {
        onUpdate();
      }
    }
  }, [
    collected,
    monitor,
    onUpdate
  ]);
  useIsomorphicLayoutEffect(updateCollected);
  return [
    collected,
    updateCollected
  ];
}
function useMonitorOutput(monitor, collect, onCollect) {
  const [collected, updateCollected] = useCollector(monitor, collect, onCollect);
  useIsomorphicLayoutEffect(function subscribeToMonitorStateChange() {
    const handlerId = monitor.getHandlerId();
    if (handlerId == null) {
      return;
    }
    return monitor.subscribeToStateChange(updateCollected, {
      handlerIds: [
        handlerId
      ]
    });
  }, [
    monitor,
    updateCollected
  ]);
  return collected;
}
function useCollectedProps(collector, monitor, connector) {
  return useMonitorOutput(
    monitor,
    collector || (() => ({})),
    () => connector.reconnect()
  );
}
function useOptionalFactory(arg, deps) {
  const memoDeps = [
    ...deps || []
  ];
  if (deps == null && typeof arg !== "function") {
    memoDeps.push(arg);
  }
  return T$1(() => {
    return typeof arg === "function" ? arg() : arg;
  }, memoDeps);
}
function useConnectDragSource(connector) {
  return T$1(
    () => connector.hooks.dragSource(),
    [
      connector
    ]
  );
}
function useConnectDragPreview(connector) {
  return T$1(
    () => connector.hooks.dragPreview(),
    [
      connector
    ]
  );
}
let isCallingCanDrag = false;
let isCallingIsDragging = false;
class DragSourceMonitorImpl {
  receiveHandlerId(sourceId) {
    this.sourceId = sourceId;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    invariant(!isCallingCanDrag, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      isCallingCanDrag = true;
      return this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      isCallingCanDrag = false;
    }
  }
  isDragging() {
    if (!this.sourceId) {
      return false;
    }
    invariant(!isCallingIsDragging, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
    try {
      isCallingIsDragging = true;
      return this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      isCallingIsDragging = false;
    }
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  isDraggingSource(sourceId) {
    return this.internalMonitor.isDraggingSource(sourceId);
  }
  isOverTarget(targetId, options) {
    return this.internalMonitor.isOverTarget(targetId, options);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(listener) {
    return this.internalMonitor.subscribeToOffsetChange(listener);
  }
  canDragSource(sourceId) {
    return this.internalMonitor.canDragSource(sourceId);
  }
  canDropOnTarget(targetId) {
    return this.internalMonitor.canDropOnTarget(targetId);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.sourceId = null;
    this.internalMonitor = manager.getMonitor();
  }
}
let isCallingCanDrop = false;
class DropTargetMonitorImpl {
  receiveHandlerId(targetId) {
    this.targetId = targetId;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(listener, options) {
    return this.internalMonitor.subscribeToStateChange(listener, options);
  }
  canDrop() {
    if (!this.targetId) {
      return false;
    }
    invariant(!isCallingCanDrop, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
    try {
      isCallingCanDrop = true;
      return this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      isCallingCanDrop = false;
    }
  }
  isOver(options) {
    if (!this.targetId) {
      return false;
    }
    return this.internalMonitor.isOverTarget(this.targetId, options);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(manager) {
    this.targetId = null;
    this.internalMonitor = manager.getMonitor();
  }
}
function registerTarget(type, target2, manager) {
  const registry = manager.getRegistry();
  const targetId = registry.addTarget(type, target2);
  return [
    targetId,
    () => registry.removeTarget(targetId)
  ];
}
function registerSource(type, source, manager) {
  const registry = manager.getRegistry();
  const sourceId = registry.addSource(type, source);
  return [
    sourceId,
    () => registry.removeSource(sourceId)
  ];
}
function shallowEqual(objA, objB, compare, compareContext) {
  let compareResult = void 0;
  if (compareResult !== void 0) {
    return !!compareResult;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let idx = 0; idx < keysA.length; idx++) {
    const key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    const valueA = objA[key];
    const valueB = objB[key];
    compareResult = void 0;
    if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
}
function isRef(obj) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    obj !== null && typeof obj === "object" && Object.prototype.hasOwnProperty.call(obj, "current")
  );
}
function throwIfCompositeComponentElement(element) {
  if (typeof element.type === "string") {
    return;
  }
  const displayName = element.type.displayName || element.type.name || "the component";
  throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${displayName} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function wrapHookToRecognizeElement(hook) {
  return (elementOrNode = null, options = null) => {
    if (!pn(elementOrNode)) {
      const node2 = elementOrNode;
      hook(node2, options);
      return node2;
    }
    const element = elementOrNode;
    throwIfCompositeComponentElement(element);
    const ref = options ? (node2) => hook(node2, options) : hook;
    return cloneWithRef(element, ref);
  };
}
function wrapConnectorHooks(hooks) {
  const wrappedHooks = {};
  Object.keys(hooks).forEach((key) => {
    const hook = hooks[key];
    if (key.endsWith("Ref")) {
      wrappedHooks[key] = hooks[key];
    } else {
      const wrappedHook = wrapHookToRecognizeElement(hook);
      wrappedHooks[key] = () => wrappedHook;
    }
  });
  return wrappedHooks;
}
function setRef(ref, node2) {
  if (typeof ref === "function") {
    ref(node2);
  } else {
    ref.current = node2;
  }
}
function cloneWithRef(element, newRef) {
  const previousRef = element.ref;
  invariant(typeof previousRef !== "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs");
  if (!previousRef) {
    return _n(element, {
      ref: newRef
    });
  } else {
    return _n(element, {
      ref: (node2) => {
        setRef(previousRef, node2);
        setRef(newRef, node2);
      }
    });
  }
}
class SourceConnector {
  receiveHandlerId(newHandlerId) {
    if (this.handlerId === newHandlerId) {
      return;
    }
    this.handlerId = newHandlerId;
    this.reconnect();
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(options) {
    this.dragSourceOptionsInternal = options;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(options) {
    this.dragPreviewOptionsInternal = options;
  }
  reconnect() {
    const didChange = this.reconnectDragSource();
    this.reconnectDragPreview(didChange);
  }
  reconnectDragSource() {
    const dragSource = this.dragSource;
    const didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
    if (didChange) {
      this.disconnectDragSource();
    }
    if (!this.handlerId) {
      return didChange;
    }
    if (!dragSource) {
      this.lastConnectedDragSource = dragSource;
      return didChange;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDragSource = dragSource;
      this.lastConnectedDragSourceOptions = this.dragSourceOptions;
      this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
    }
    return didChange;
  }
  reconnectDragPreview(forceDidChange = false) {
    const dragPreview = this.dragPreview;
    const didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
    if (didChange) {
      this.disconnectDragPreview();
    }
    if (!this.handlerId) {
      return;
    }
    if (!dragPreview) {
      this.lastConnectedDragPreview = dragPreview;
      return;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDragPreview = dragPreview;
      this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
      this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    if (this.dragSourceUnsubscribe) {
      this.dragSourceUnsubscribe();
      this.dragSourceUnsubscribe = void 0;
    }
  }
  disconnectDragPreview() {
    if (this.dragPreviewUnsubscribe) {
      this.dragPreviewUnsubscribe();
      this.dragPreviewUnsubscribe = void 0;
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }
  get dragSource() {
    return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
  }
  get dragPreview() {
    return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
  }
  clearDragSource() {
    this.dragSourceNode = null;
    this.dragSourceRef = null;
  }
  clearDragPreview() {
    this.dragPreviewNode = null;
    this.dragPreviewRef = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dragSource: (node2, options) => {
        this.clearDragSource();
        this.dragSourceOptions = options || null;
        if (isRef(node2)) {
          this.dragSourceRef = node2;
        } else {
          this.dragSourceNode = node2;
        }
        this.reconnectDragSource();
      },
      dragPreview: (node2, options) => {
        this.clearDragPreview();
        this.dragPreviewOptions = options || null;
        if (isRef(node2)) {
          this.dragPreviewRef = node2;
        } else {
          this.dragPreviewNode = node2;
        }
        this.reconnectDragPreview();
      }
    });
    this.handlerId = null;
    this.dragSourceRef = null;
    this.dragSourceOptionsInternal = null;
    this.dragPreviewRef = null;
    this.dragPreviewOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDragSource = null;
    this.lastConnectedDragSourceOptions = null;
    this.lastConnectedDragPreview = null;
    this.lastConnectedDragPreviewOptions = null;
    this.backend = backend;
  }
}
class TargetConnector {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    const didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
    if (didChange) {
      this.disconnectDropTarget();
    }
    const dropTarget = this.dropTarget;
    if (!this.handlerId) {
      return;
    }
    if (!dropTarget) {
      this.lastConnectedDropTarget = dropTarget;
      return;
    }
    if (didChange) {
      this.lastConnectedHandlerId = this.handlerId;
      this.lastConnectedDropTarget = dropTarget;
      this.lastConnectedDropTargetOptions = this.dropTargetOptions;
      this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
    }
  }
  receiveHandlerId(newHandlerId) {
    if (newHandlerId === this.handlerId) {
      return;
    }
    this.handlerId = newHandlerId;
    this.reconnect();
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(options) {
    this.dropTargetOptionsInternal = options;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    if (this.unsubscribeDropTarget) {
      this.unsubscribeDropTarget();
      this.unsubscribeDropTarget = void 0;
    }
  }
  get dropTarget() {
    return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
  }
  clearDropTarget() {
    this.dropTargetRef = null;
    this.dropTargetNode = null;
  }
  constructor(backend) {
    this.hooks = wrapConnectorHooks({
      dropTarget: (node2, options) => {
        this.clearDropTarget();
        this.dropTargetOptions = options;
        if (isRef(node2)) {
          this.dropTargetRef = node2;
        } else {
          this.dropTargetNode = node2;
        }
        this.reconnect();
      }
    });
    this.handlerId = null;
    this.dropTargetRef = null;
    this.dropTargetOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDropTarget = null;
    this.lastConnectedDropTargetOptions = null;
    this.backend = backend;
  }
}
function useDragDropManager() {
  const { dragDropManager } = x$1(DndContext);
  invariant(dragDropManager != null, "Expected drag drop context");
  return dragDropManager;
}
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
  const manager = useDragDropManager();
  const connector = T$1(
    () => new SourceConnector(manager.getBackend()),
    [
      manager
    ]
  );
  useIsomorphicLayoutEffect(() => {
    connector.dragSourceOptions = dragSourceOptions || null;
    connector.reconnect();
    return () => connector.disconnectDragSource();
  }, [
    connector,
    dragSourceOptions
  ]);
  useIsomorphicLayoutEffect(() => {
    connector.dragPreviewOptions = dragPreviewOptions || null;
    connector.reconnect();
    return () => connector.disconnectDragPreview();
  }, [
    connector,
    dragPreviewOptions
  ]);
  return connector;
}
function useDragSourceMonitor() {
  const manager = useDragDropManager();
  return T$1(
    () => new DragSourceMonitorImpl(manager),
    [
      manager
    ]
  );
}
class DragSourceImpl {
  beginDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    let result = null;
    if (typeof spec.item === "object") {
      result = spec.item;
    } else if (typeof spec.item === "function") {
      result = spec.item(monitor);
    } else {
      result = {};
    }
    return result !== null && result !== void 0 ? result : null;
  }
  canDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (typeof spec.canDrag === "boolean") {
      return spec.canDrag;
    } else if (typeof spec.canDrag === "function") {
      return spec.canDrag(monitor);
    } else {
      return true;
    }
  }
  isDragging(globalMonitor, target2) {
    const spec = this.spec;
    const monitor = this.monitor;
    const { isDragging } = spec;
    return isDragging ? isDragging(monitor) : target2 === globalMonitor.getSourceId();
  }
  endDrag() {
    const spec = this.spec;
    const monitor = this.monitor;
    const connector = this.connector;
    const { end } = spec;
    if (end) {
      end(monitor.getItem(), monitor);
    }
    connector.reconnect();
  }
  constructor(spec, monitor, connector) {
    this.spec = spec;
    this.monitor = monitor;
    this.connector = connector;
  }
}
function useDragSource(spec, monitor, connector) {
  const handler = T$1(
    () => new DragSourceImpl(spec, monitor, connector),
    [
      monitor,
      connector
    ]
  );
  y(() => {
    handler.spec = spec;
  }, [
    spec
  ]);
  return handler;
}
function useDragType(spec) {
  return T$1(() => {
    const result = spec.type;
    invariant(result != null, "spec.type must be defined");
    return result;
  }, [
    spec
  ]);
}
function useRegisteredDragSource(spec, monitor, connector) {
  const manager = useDragDropManager();
  const handler = useDragSource(spec, monitor, connector);
  const itemType = useDragType(spec);
  useIsomorphicLayoutEffect(function registerDragSource() {
    if (itemType != null) {
      const [handlerId, unregister] = registerSource(itemType, handler, manager);
      monitor.receiveHandlerId(handlerId);
      connector.receiveHandlerId(handlerId);
      return unregister;
    }
    return;
  }, [
    manager,
    monitor,
    connector,
    handler,
    itemType
  ]);
}
function useDrag(specArg, deps) {
  const spec = useOptionalFactory(specArg, deps);
  invariant(!spec.begin, `useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)`);
  const monitor = useDragSourceMonitor();
  const connector = useDragSourceConnector(spec.options, spec.previewOptions);
  useRegisteredDragSource(spec, monitor, connector);
  return [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDragSource(connector),
    useConnectDragPreview(connector)
  ];
}
function useConnectDropTarget(connector) {
  return T$1(
    () => connector.hooks.dropTarget(),
    [
      connector
    ]
  );
}
function useDropTargetConnector(options) {
  const manager = useDragDropManager();
  const connector = T$1(
    () => new TargetConnector(manager.getBackend()),
    [
      manager
    ]
  );
  useIsomorphicLayoutEffect(() => {
    connector.dropTargetOptions = options || null;
    connector.reconnect();
    return () => connector.disconnectDropTarget();
  }, [
    options
  ]);
  return connector;
}
function useDropTargetMonitor() {
  const manager = useDragDropManager();
  return T$1(
    () => new DropTargetMonitorImpl(manager),
    [
      manager
    ]
  );
}
function useAccept(spec) {
  const { accept } = spec;
  return T$1(() => {
    invariant(spec.accept != null, "accept must be defined");
    return Array.isArray(accept) ? accept : [
      accept
    ];
  }, [
    accept
  ]);
}
class DropTargetImpl {
  canDrop() {
    const spec = this.spec;
    const monitor = this.monitor;
    return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
  }
  hover() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (spec.hover) {
      spec.hover(monitor.getItem(), monitor);
    }
  }
  drop() {
    const spec = this.spec;
    const monitor = this.monitor;
    if (spec.drop) {
      return spec.drop(monitor.getItem(), monitor);
    }
    return;
  }
  constructor(spec, monitor) {
    this.spec = spec;
    this.monitor = monitor;
  }
}
function useDropTarget(spec, monitor) {
  const dropTarget = T$1(
    () => new DropTargetImpl(spec, monitor),
    [
      monitor
    ]
  );
  y(() => {
    dropTarget.spec = spec;
  }, [
    spec
  ]);
  return dropTarget;
}
function useRegisteredDropTarget(spec, monitor, connector) {
  const manager = useDragDropManager();
  const dropTarget = useDropTarget(spec, monitor);
  const accept = useAccept(spec);
  useIsomorphicLayoutEffect(function registerDropTarget() {
    const [handlerId, unregister] = registerTarget(accept, dropTarget, manager);
    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    return unregister;
  }, [
    manager,
    monitor,
    dropTarget,
    connector,
    accept.map(
      (a2) => a2.toString()
    ).join("|")
  ]);
}
function useDrop(specArg, deps) {
  const spec = useOptionalFactory(specArg, deps);
  const monitor = useDropTargetMonitor();
  const connector = useDropTargetConnector(spec.options);
  useRegisteredDropTarget(spec, monitor, connector);
  return [
    useCollectedProps(spec.collect, monitor, connector),
    useConnectDropTarget(connector)
  ];
}
function memoize(fn2) {
  let result = null;
  const memoized = () => {
    if (result == null) {
      result = fn2();
    }
    return result;
  };
  return memoized;
}
function without(items, item) {
  return items.filter(
    (i2) => i2 !== item
  );
}
function union(itemsA, itemsB) {
  const set5 = /* @__PURE__ */ new Set();
  const insertItem = (item) => set5.add(item);
  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  const result = [];
  set5.forEach(
    (key) => result.push(key)
  );
  return result;
}
class EnterLeaveCounter {
  enter(enteringNode) {
    const previousLength = this.entered.length;
    const isNodeEntered = (node2) => this.isNodeInDocument(node2) && (!node2.contains || node2.contains(enteringNode));
    this.entered = union(this.entered.filter(isNodeEntered), [
      enteringNode
    ]);
    return previousLength === 0 && this.entered.length > 0;
  }
  leave(leavingNode) {
    const previousLength = this.entered.length;
    this.entered = without(this.entered.filter(this.isNodeInDocument), leavingNode);
    return previousLength > 0 && this.entered.length === 0;
  }
  reset() {
    this.entered = [];
  }
  constructor(isNodeInDocument) {
    this.entered = [];
    this.isNodeInDocument = isNodeInDocument;
  }
}
class NativeDragSource {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach((property) => {
      Object.defineProperty(this.item, property, {
        configurable: true,
        enumerable: true,
        get() {
          console.warn(`Browser doesn't allow reading "${property}" until the drop event.`);
          return null;
        }
      });
    });
  }
  loadDataTransfer(dataTransfer) {
    if (dataTransfer) {
      const newProperties = {};
      Object.keys(this.config.exposeProperties).forEach((property) => {
        const propertyFn = this.config.exposeProperties[property];
        if (propertyFn != null) {
          newProperties[property] = {
            value: propertyFn(dataTransfer, this.config.matchesTypes),
            configurable: true,
            enumerable: true
          };
        }
      });
      Object.defineProperties(this.item, newProperties);
    }
  }
  canDrag() {
    return true;
  }
  beginDrag() {
    return this.item;
  }
  isDragging(monitor, handle) {
    return handle === monitor.getSourceId();
  }
  endDrag() {
  }
  constructor(config) {
    this.config = config;
    this.item = {};
    this.initializeExposedProperties();
  }
}
const FILE = "__NATIVE_FILE__";
const URL = "__NATIVE_URL__";
const TEXT = "__NATIVE_TEXT__";
const HTML = "__NATIVE_HTML__";
const NativeTypes = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE,
  HTML,
  TEXT,
  URL
}, Symbol.toStringTag, { value: "Module" }));
function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  const result = typesToTry.reduce(
    (resultSoFar, typeToTry) => resultSoFar || dataTransfer.getData(typeToTry),
    ""
  );
  return result != null ? result : defaultValue;
}
const nativeTypesConfig = {
  [FILE]: {
    exposeProperties: {
      files: (dataTransfer) => Array.prototype.slice.call(dataTransfer.files),
      items: (dataTransfer) => dataTransfer.items,
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Files"
    ]
  },
  [HTML]: {
    exposeProperties: {
      html: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Html",
      "text/html"
    ]
  },
  [URL]: {
    exposeProperties: {
      urls: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, "").split("\n"),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Url",
      "text/uri-list"
    ]
  },
  [TEXT]: {
    exposeProperties: {
      text: (dataTransfer, matchesTypes) => getDataFromDataTransfer(dataTransfer, matchesTypes, ""),
      dataTransfer: (dataTransfer) => dataTransfer
    },
    matchesTypes: [
      "Text",
      "text/plain"
    ]
  }
};
function createNativeDragSource(type, dataTransfer) {
  const config = nativeTypesConfig[type];
  if (!config) {
    throw new Error(`native type ${type} has no configuration`);
  }
  const result = new NativeDragSource(config);
  result.loadDataTransfer(dataTransfer);
  return result;
}
function matchNativeItemType(dataTransfer) {
  if (!dataTransfer) {
    return null;
  }
  const dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
  return Object.keys(nativeTypesConfig).filter((nativeItemType) => {
    const typeConfig = nativeTypesConfig[nativeItemType];
    if (!(typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.matchesTypes)) {
      return false;
    }
    return typeConfig.matchesTypes.some(
      (t2) => dataTransferTypes.indexOf(t2) > -1
    );
  })[0] || null;
}
const isFirefox = memoize(
  () => /firefox/i.test(navigator.userAgent)
);
const isSafari = memoize(
  () => Boolean(window.safari)
);
class MonotonicInterpolant {
  interpolate(x2) {
    const { xs, ys, c1s, c2s, c3s } = this;
    let i2 = xs.length - 1;
    if (x2 === xs[i2]) {
      return ys[i2];
    }
    let low = 0;
    let high = c3s.length - 1;
    let mid2;
    while (low <= high) {
      mid2 = Math.floor(0.5 * (low + high));
      const xHere = xs[mid2];
      if (xHere < x2) {
        low = mid2 + 1;
      } else if (xHere > x2) {
        high = mid2 - 1;
      } else {
        return ys[mid2];
      }
    }
    i2 = Math.max(0, high);
    const diff = x2 - xs[i2];
    const diffSq = diff * diff;
    return ys[i2] + c1s[i2] * diff + c2s[i2] * diffSq + c3s[i2] * diff * diffSq;
  }
  constructor(xs, ys) {
    const { length } = xs;
    const indexes = [];
    for (let i2 = 0; i2 < length; i2++) {
      indexes.push(i2);
    }
    indexes.sort(
      (a2, b2) => xs[a2] < xs[b2] ? -1 : 1
    );
    const dxs = [];
    const ms = [];
    let dx;
    let dy;
    for (let i1 = 0; i1 < length - 1; i1++) {
      dx = xs[i1 + 1] - xs[i1];
      dy = ys[i1 + 1] - ys[i1];
      dxs.push(dx);
      ms.push(dy / dx);
    }
    const c1s = [
      ms[0]
    ];
    for (let i2 = 0; i2 < dxs.length - 1; i2++) {
      const m22 = ms[i2];
      const mNext = ms[i2 + 1];
      if (m22 * mNext <= 0) {
        c1s.push(0);
      } else {
        dx = dxs[i2];
        const dxNext = dxs[i2 + 1];
        const common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / m22 + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);
    const c2s = [];
    const c3s = [];
    let m2;
    for (let i3 = 0; i3 < c1s.length - 1; i3++) {
      m2 = ms[i3];
      const c1 = c1s[i3];
      const invDx = 1 / dxs[i3];
      const common = c1 + c1s[i3 + 1] - m2 - m2;
      c2s.push((m2 - c1 - common) * invDx);
      c3s.push(common * invDx * invDx);
    }
    this.xs = xs;
    this.ys = ys;
    this.c1s = c1s;
    this.c2s = c2s;
    this.c3s = c3s;
  }
}
const ELEMENT_NODE = 1;
function getNodeClientOffset(node2) {
  const el2 = node2.nodeType === ELEMENT_NODE ? node2 : node2.parentElement;
  if (!el2) {
    return null;
  }
  const { top: top2, left } = el2.getBoundingClientRect();
  return {
    x: left,
    y: top2
  };
}
function getEventClientOffset(e2) {
  return {
    x: e2.clientX,
    y: e2.clientY
  };
}
function isImageNode(node2) {
  var ref;
  return node2.nodeName === "IMG" && (isFirefox() || !((ref = document.documentElement) === null || ref === void 0 ? void 0 : ref.contains(node2)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
  let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
  let dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
  if (isSafari() && isImage) {
    dragPreviewHeight /= window.devicePixelRatio;
    dragPreviewWidth /= window.devicePixelRatio;
  }
  return {
    dragPreviewWidth,
    dragPreviewHeight
  };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
  const isImage = isImageNode(dragPreview);
  const dragPreviewNode = isImage ? sourceNode : dragPreview;
  const dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
  const offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  };
  const { offsetWidth: sourceWidth, offsetHeight: sourceHeight } = sourceNode;
  const { anchorX, anchorY } = anchorPoint;
  const { dragPreviewWidth, dragPreviewHeight } = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight);
  const calculateYOffset = () => {
    const interpolantY = new MonotonicInterpolant([
      0,
      0.5,
      1
    ], [
      // Dock to the top
      offsetFromDragPreview.y,
      // Align at the center
      offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
      // Dock to the bottom
      offsetFromDragPreview.y + dragPreviewHeight - sourceHeight
    ]);
    let y2 = interpolantY.interpolate(anchorY);
    if (isSafari() && isImage) {
      y2 += (window.devicePixelRatio - 1) * dragPreviewHeight;
    }
    return y2;
  };
  const calculateXOffset = () => {
    const interpolantX = new MonotonicInterpolant([
      0,
      0.5,
      1
    ], [
      // Dock to the left
      offsetFromDragPreview.x,
      // Align at the center
      offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
      // Dock to the right
      offsetFromDragPreview.x + dragPreviewWidth - sourceWidth
    ]);
    return interpolantX.interpolate(anchorX);
  };
  const { offsetX, offsetY } = offsetPoint;
  const isManualOffsetX = offsetX === 0 || offsetX;
  const isManualOffsetY = offsetY === 0 || offsetY;
  return {
    x: isManualOffsetX ? offsetX : calculateXOffset(),
    y: isManualOffsetY ? offsetY : calculateYOffset()
  };
}
class OptionsReader {
  get window() {
    if (this.globalContext) {
      return this.globalContext;
    } else if (typeof window !== "undefined") {
      return window;
    }
    return void 0;
  }
  get document() {
    var ref;
    if ((ref = this.globalContext) === null || ref === void 0 ? void 0 : ref.document) {
      return this.globalContext.document;
    } else if (this.window) {
      return this.window.document;
    } else {
      return void 0;
    }
  }
  get rootElement() {
    var ref;
    return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
  }
  constructor(globalContext, options) {
    this.ownerDocument = null;
    this.globalContext = globalContext;
    this.optionsArgs = options;
  }
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectSpread(target2) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    var ownKeys3 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys3 = ownKeys3.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys3.forEach(function(key) {
      _defineProperty(target2, key, source[key]);
    });
  }
  return target2;
}
class HTML5BackendImpl {
  /**
  * Generate profiling statistics for the HTML5Backend.
  */
  profile() {
    var ref, ref1;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds: ((ref = this.dragStartSourceIds) === null || ref === void 0 ? void 0 : ref.length) || 0,
      dropTargetIds: this.dropTargetIds.length,
      dragEnterTargetIds: this.dragEnterTargetIds.length,
      dragOverTargetIds: ((ref1 = this.dragOverTargetIds) === null || ref1 === void 0 ? void 0 : ref1.length) || 0
    };
  }
  // public for test
  get window() {
    return this.options.window;
  }
  get document() {
    return this.options.document;
  }
  /**
  * Get the root element to use for event subscriptions
  */
  get rootElement() {
    return this.options.rootElement;
  }
  setup() {
    const root = this.rootElement;
    if (root === void 0) {
      return;
    }
    if (root.__isReactDndBackendSetUp) {
      throw new Error("Cannot have two HTML5 backends at the same time.");
    }
    root.__isReactDndBackendSetUp = true;
    this.addEventListeners(root);
  }
  teardown() {
    const root = this.rootElement;
    if (root === void 0) {
      return;
    }
    root.__isReactDndBackendSetUp = false;
    this.removeEventListeners(this.rootElement);
    this.clearCurrentDragSourceNode();
    if (this.asyncEndDragFrameId) {
      var ref;
      (ref = this.window) === null || ref === void 0 ? void 0 : ref.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(sourceId, node2, options) {
    this.sourcePreviewNodeOptions.set(sourceId, options);
    this.sourcePreviewNodes.set(sourceId, node2);
    return () => {
      this.sourcePreviewNodes.delete(sourceId);
      this.sourcePreviewNodeOptions.delete(sourceId);
    };
  }
  connectDragSource(sourceId, node2, options) {
    this.sourceNodes.set(sourceId, node2);
    this.sourceNodeOptions.set(sourceId, options);
    const handleDragStart = (e2) => this.handleDragStart(e2, sourceId);
    const handleSelectStart = (e2) => this.handleSelectStart(e2);
    node2.setAttribute("draggable", "true");
    node2.addEventListener("dragstart", handleDragStart);
    node2.addEventListener("selectstart", handleSelectStart);
    return () => {
      this.sourceNodes.delete(sourceId);
      this.sourceNodeOptions.delete(sourceId);
      node2.removeEventListener("dragstart", handleDragStart);
      node2.removeEventListener("selectstart", handleSelectStart);
      node2.setAttribute("draggable", "false");
    };
  }
  connectDropTarget(targetId, node2) {
    const handleDragEnter = (e2) => this.handleDragEnter(e2, targetId);
    const handleDragOver = (e2) => this.handleDragOver(e2, targetId);
    const handleDrop = (e2) => this.handleDrop(e2, targetId);
    node2.addEventListener("dragenter", handleDragEnter);
    node2.addEventListener("dragover", handleDragOver);
    node2.addEventListener("drop", handleDrop);
    return () => {
      node2.removeEventListener("dragenter", handleDragEnter);
      node2.removeEventListener("dragover", handleDragOver);
      node2.removeEventListener("drop", handleDrop);
    };
  }
  addEventListeners(target2) {
    if (!target2.addEventListener) {
      return;
    }
    target2.addEventListener("dragstart", this.handleTopDragStart);
    target2.addEventListener("dragstart", this.handleTopDragStartCapture, true);
    target2.addEventListener("dragend", this.handleTopDragEndCapture, true);
    target2.addEventListener("dragenter", this.handleTopDragEnter);
    target2.addEventListener("dragenter", this.handleTopDragEnterCapture, true);
    target2.addEventListener("dragleave", this.handleTopDragLeaveCapture, true);
    target2.addEventListener("dragover", this.handleTopDragOver);
    target2.addEventListener("dragover", this.handleTopDragOverCapture, true);
    target2.addEventListener("drop", this.handleTopDrop);
    target2.addEventListener("drop", this.handleTopDropCapture, true);
  }
  removeEventListeners(target2) {
    if (!target2.removeEventListener) {
      return;
    }
    target2.removeEventListener("dragstart", this.handleTopDragStart);
    target2.removeEventListener("dragstart", this.handleTopDragStartCapture, true);
    target2.removeEventListener("dragend", this.handleTopDragEndCapture, true);
    target2.removeEventListener("dragenter", this.handleTopDragEnter);
    target2.removeEventListener("dragenter", this.handleTopDragEnterCapture, true);
    target2.removeEventListener("dragleave", this.handleTopDragLeaveCapture, true);
    target2.removeEventListener("dragover", this.handleTopDragOver);
    target2.removeEventListener("dragover", this.handleTopDragOverCapture, true);
    target2.removeEventListener("drop", this.handleTopDrop);
    target2.removeEventListener("drop", this.handleTopDropCapture, true);
  }
  getCurrentSourceNodeOptions() {
    const sourceId = this.monitor.getSourceId();
    const sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
    return _objectSpread({
      dropEffect: this.altKeyPressed ? "copy" : "move"
    }, sourceNodeOptions || {});
  }
  getCurrentDropEffect() {
    if (this.isDraggingNativeItem()) {
      return "copy";
    }
    return this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    const sourceId = this.monitor.getSourceId();
    const sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
    return _objectSpread({
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: false
    }, sourcePreviewNodeOptions || {});
  }
  isDraggingNativeItem() {
    const itemType = this.monitor.getItemType();
    return Object.keys(NativeTypes).some(
      (key) => NativeTypes[key] === itemType
    );
  }
  beginDragNativeItem(type, dataTransfer) {
    this.clearCurrentDragSourceNode();
    this.currentNativeSource = createNativeDragSource(type, dataTransfer);
    this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
    this.actions.beginDrag([
      this.currentNativeHandle
    ]);
  }
  setCurrentDragSourceNode(node2) {
    this.clearCurrentDragSourceNode();
    this.currentDragSourceNode = node2;
    const MOUSE_MOVE_TIMEOUT = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var ref;
      return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
    }, MOUSE_MOVE_TIMEOUT);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      this.currentDragSourceNode = null;
      if (this.rootElement) {
        var ref;
        (ref = this.window) === null || ref === void 0 ? void 0 : ref.clearTimeout(this.mouseMoveTimeoutTimer || void 0);
        this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, true);
      }
      this.mouseMoveTimeoutTimer = null;
      return true;
    }
    return false;
  }
  handleDragStart(e2, sourceId) {
    if (e2.defaultPrevented) {
      return;
    }
    if (!this.dragStartSourceIds) {
      this.dragStartSourceIds = [];
    }
    this.dragStartSourceIds.unshift(sourceId);
  }
  handleDragEnter(_e, targetId) {
    this.dragEnterTargetIds.unshift(targetId);
  }
  handleDragOver(_e, targetId) {
    if (this.dragOverTargetIds === null) {
      this.dragOverTargetIds = [];
    }
    this.dragOverTargetIds.unshift(targetId);
  }
  handleDrop(_e, targetId) {
    this.dropTargetIds.unshift(targetId);
  }
  constructor(manager, globalContext, options) {
    this.sourcePreviewNodes = /* @__PURE__ */ new Map();
    this.sourcePreviewNodeOptions = /* @__PURE__ */ new Map();
    this.sourceNodes = /* @__PURE__ */ new Map();
    this.sourceNodeOptions = /* @__PURE__ */ new Map();
    this.dragStartSourceIds = null;
    this.dropTargetIds = [];
    this.dragEnterTargetIds = [];
    this.currentNativeSource = null;
    this.currentNativeHandle = null;
    this.currentDragSourceNode = null;
    this.altKeyPressed = false;
    this.mouseMoveTimeoutTimer = null;
    this.asyncEndDragFrameId = null;
    this.dragOverTargetIds = null;
    this.lastClientOffset = null;
    this.hoverRafId = null;
    this.getSourceClientOffset = (sourceId) => {
      const source = this.sourceNodes.get(sourceId);
      return source && getNodeClientOffset(source) || null;
    };
    this.endDragNativeItem = () => {
      if (!this.isDraggingNativeItem()) {
        return;
      }
      this.actions.endDrag();
      if (this.currentNativeHandle) {
        this.registry.removeSource(this.currentNativeHandle);
      }
      this.currentNativeHandle = null;
      this.currentNativeSource = null;
    };
    this.isNodeInDocument = (node2) => {
      return Boolean(node2 && this.document && this.document.body && this.document.body.contains(node2));
    };
    this.endDragIfSourceWasRemovedFromDOM = () => {
      const node2 = this.currentDragSourceNode;
      if (node2 == null || this.isNodeInDocument(node2)) {
        return;
      }
      if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.scheduleHover = (dragOverTargetIds) => {
      if (this.hoverRafId === null && typeof requestAnimationFrame !== "undefined") {
        this.hoverRafId = requestAnimationFrame(() => {
          if (this.monitor.isDragging()) {
            this.actions.hover(dragOverTargetIds || [], {
              clientOffset: this.lastClientOffset
            });
          }
          this.hoverRafId = null;
        });
      }
    };
    this.cancelHover = () => {
      if (this.hoverRafId !== null && typeof cancelAnimationFrame !== "undefined") {
        cancelAnimationFrame(this.hoverRafId);
        this.hoverRafId = null;
      }
    };
    this.handleTopDragStartCapture = () => {
      this.clearCurrentDragSourceNode();
      this.dragStartSourceIds = [];
    };
    this.handleTopDragStart = (e2) => {
      if (e2.defaultPrevented) {
        return;
      }
      const { dragStartSourceIds } = this;
      this.dragStartSourceIds = null;
      const clientOffset = getEventClientOffset(e2);
      if (this.monitor.isDragging()) {
        this.actions.endDrag();
        this.cancelHover();
      }
      this.actions.beginDrag(dragStartSourceIds || [], {
        publishSource: false,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset
      });
      const { dataTransfer } = e2;
      const nativeType = matchNativeItemType(dataTransfer);
      if (this.monitor.isDragging()) {
        if (dataTransfer && typeof dataTransfer.setDragImage === "function") {
          const sourceId = this.monitor.getSourceId();
          const sourceNode = this.sourceNodes.get(sourceId);
          const dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
          if (dragPreview) {
            const { anchorX, anchorY, offsetX, offsetY } = this.getCurrentSourcePreviewNodeOptions();
            const anchorPoint = {
              anchorX,
              anchorY
            };
            const offsetPoint = {
              offsetX,
              offsetY
            };
            const dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
            dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
          }
        }
        try {
          dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.setData("application/json", {});
        } catch (err) {
        }
        this.setCurrentDragSourceNode(e2.target);
        const { captureDraggingState } = this.getCurrentSourcePreviewNodeOptions();
        if (!captureDraggingState) {
          setTimeout(
            () => this.actions.publishDragSource(),
            0
          );
        } else {
          this.actions.publishDragSource();
        }
      } else if (nativeType) {
        this.beginDragNativeItem(nativeType);
      } else if (dataTransfer && !dataTransfer.types && (e2.target && !e2.target.hasAttribute || !e2.target.hasAttribute("draggable"))) {
        return;
      } else {
        e2.preventDefault();
      }
    };
    this.handleTopDragEndCapture = () => {
      if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.handleTopDragEnterCapture = (e2) => {
      this.dragEnterTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e2.dataTransfer);
      }
      const isFirstEnter = this.enterLeaveCounter.enter(e2.target);
      if (!isFirstEnter || this.monitor.isDragging()) {
        return;
      }
      const { dataTransfer } = e2;
      const nativeType = matchNativeItemType(dataTransfer);
      if (nativeType) {
        this.beginDragNativeItem(nativeType, dataTransfer);
      }
    };
    this.handleTopDragEnter = (e2) => {
      const { dragEnterTargetIds } = this;
      this.dragEnterTargetIds = [];
      if (!this.monitor.isDragging()) {
        return;
      }
      this.altKeyPressed = e2.altKey;
      if (dragEnterTargetIds.length > 0) {
        this.actions.hover(dragEnterTargetIds, {
          clientOffset: getEventClientOffset(e2)
        });
      }
      const canDrop = dragEnterTargetIds.some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      );
      if (canDrop) {
        e2.preventDefault();
        if (e2.dataTransfer) {
          e2.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
      }
    };
    this.handleTopDragOverCapture = (e2) => {
      this.dragOverTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e2.dataTransfer);
      }
    };
    this.handleTopDragOver = (e2) => {
      const { dragOverTargetIds } = this;
      this.dragOverTargetIds = [];
      if (!this.monitor.isDragging()) {
        e2.preventDefault();
        if (e2.dataTransfer) {
          e2.dataTransfer.dropEffect = "none";
        }
        return;
      }
      this.altKeyPressed = e2.altKey;
      this.lastClientOffset = getEventClientOffset(e2);
      this.scheduleHover(dragOverTargetIds);
      const canDrop = (dragOverTargetIds || []).some(
        (targetId) => this.monitor.canDropOnTarget(targetId)
      );
      if (canDrop) {
        e2.preventDefault();
        if (e2.dataTransfer) {
          e2.dataTransfer.dropEffect = this.getCurrentDropEffect();
        }
      } else if (this.isDraggingNativeItem()) {
        e2.preventDefault();
      } else {
        e2.preventDefault();
        if (e2.dataTransfer) {
          e2.dataTransfer.dropEffect = "none";
        }
      }
    };
    this.handleTopDragLeaveCapture = (e2) => {
      if (this.isDraggingNativeItem()) {
        e2.preventDefault();
      }
      const isLastLeave = this.enterLeaveCounter.leave(e2.target);
      if (!isLastLeave) {
        return;
      }
      if (this.isDraggingNativeItem()) {
        setTimeout(
          () => this.endDragNativeItem(),
          0
        );
      }
      this.cancelHover();
    };
    this.handleTopDropCapture = (e2) => {
      this.dropTargetIds = [];
      if (this.isDraggingNativeItem()) {
        var ref;
        e2.preventDefault();
        (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e2.dataTransfer);
      } else if (matchNativeItemType(e2.dataTransfer)) {
        e2.preventDefault();
      }
      this.enterLeaveCounter.reset();
    };
    this.handleTopDrop = (e2) => {
      const { dropTargetIds } = this;
      this.dropTargetIds = [];
      this.actions.hover(dropTargetIds, {
        clientOffset: getEventClientOffset(e2)
      });
      this.actions.drop({
        dropEffect: this.getCurrentDropEffect()
      });
      if (this.isDraggingNativeItem()) {
        this.endDragNativeItem();
      } else if (this.monitor.isDragging()) {
        this.actions.endDrag();
      }
      this.cancelHover();
    };
    this.handleSelectStart = (e2) => {
      const target2 = e2.target;
      if (typeof target2.dragDrop !== "function") {
        return;
      }
      if (target2.tagName === "INPUT" || target2.tagName === "SELECT" || target2.tagName === "TEXTAREA" || target2.isContentEditable) {
        return;
      }
      e2.preventDefault();
      target2.dragDrop();
    };
    this.options = new OptionsReader(globalContext, options);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();
    this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
  }
}
const HTML5Backend = function createBackend(manager, context, options) {
  return new HTML5BackendImpl(manager, context, options);
};
const containerStyle = {
  position: "relative",
  overflow: "hidden"
};
const CardSortView = ({ data, updateData }) => {
  const cards = data.map((card) => {
    card.children = card.children || [];
    card.left = card.left || Math.random() * 400;
    card.top = card.top || Math.random() * 200;
    return card;
  });
  return /* @__PURE__ */ u$1(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ u$1(Container, { cards, setCards: updateData }) });
};
const Container = ({ cards, setCards }) => {
  const moveCard = q$1(
    (id, left, top2) => {
      var _a2;
      const children = cards.map((c2) => c2.children).flat();
      const parentId = (_a2 = cards.find((c2) => c2.children.find((c22) => c22.id == id))) == null ? void 0 : _a2.id;
      const movedCard = cards.concat(children).find((c2) => c2.id === id);
      const newCards = cards.filter((c2) => c2.id !== id);
      if (parentId) {
        const parentCard = newCards.find((c2) => c2.id == parentId);
        parentCard.children = parentCard.children.filter((c2) => c2.id !== id);
      }
      movedCard.left = left;
      movedCard.top = top2;
      movedCard.id += ".";
      return setCards(newCards.concat([movedCard]));
    },
    [cards, setCards]
  );
  const addCardToGroup = q$1(
    (id, parentId) => {
      const childCards = cards.map((c2) => c2.children).flat();
      const movedCard = childCards.concat(cards).find((c2) => c2.id == id);
      const parentCard = cards.find((c2) => c2.id == parentId);
      console.log(movedCard.id, "was dropped onto", parentCard.id);
      cards.forEach((c2) => {
        const idx = c2.children.findIndex((c22) => c22.id == movedCard.id);
        if (idx == -1) return;
        else c2.children.splice(idx, 1);
      });
      parentCard.children = [
        ...parentCard.children,
        movedCard,
        ...movedCard.children
      ];
      const newCards = cards.filter((c2) => ![c2.id, parentId].includes(id));
      return setCards(newCards);
    },
    [cards, setCards]
  );
  const [, drop] = useDrop(
    () => ({
      accept: "CARD",
      drop(item, monitor) {
        if (monitor.didDrop()) {
          return;
        }
        const change = monitor.getDifferenceFromInitialOffset();
        monitor.getClientOffset();
        const left = Math.round(item.left + change.x);
        const top2 = Math.round(item.top + change.y);
        moveCard(item.id, left, top2);
        return void 0;
      }
    }),
    [moveCard]
  );
  return /* @__PURE__ */ u$1("div", { ref: drop, style: containerStyle, className: "container", children: cards.map((card, idx) => /* @__PURE__ */ u$1(
    Card,
    {
      id: card.id,
      title: card.title,
      content: card.content,
      moveCard,
      addCardToGroup,
      left: card.left,
      top: card.top,
      cards: card.children,
      inGroup: false
    },
    card.id
  )) });
};
const Card = ({
  id,
  title,
  content,
  moveCard,
  addCardToGroup,
  left,
  top: top2,
  cards,
  inGroup
}) => {
  const ref = A$1(null);
  const [clicked, setClicked] = d(false);
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "CARD",
      item: { id, left, top: top2 },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }),
    [id, left, top2]
  );
  const [{ isUnder }, drop] = useDrop({
    accept: "CARD",
    collect: (monitor) => ({
      isUnder: monitor.isOver() && !inGroup
    }),
    drop: (item, monitor) => {
      addCardToGroup(item.id, id);
    }
  });
  drag(drop(ref));
  const cardStyle = {
    position: inGroup ? "unset" : "absolute",
    cursor: "move",
    maxWidth: "200px",
    background: isUnder ? "gray" : cards.length > 0 ? "lightgray" : "white",
    border: isUnder ? "2px solid black" : inGroup ? "none" : "1px dashed gray",
    borderTop: "1px dashed gray",
    zIndex: clicked ? "1000" : "auto",
    opacity: 1,
    display: "flex",
    flexDirection: "column"
  };
  if (isDragging) {
    return /* @__PURE__ */ u$1("div", { ref: drag });
  }
  return /* @__PURE__ */ u$1(
    "div",
    {
      className: "card",
      ref,
      id,
      style: { ...cardStyle, left, top: top2 },
      onMouseDown: () => setClicked(true),
      onMouseLeave: () => setClicked(false),
      children: [
        /* @__PURE__ */ u$1("h3", { children: title }),
        /* @__PURE__ */ u$1(MarkdownView, { markdown: content }),
        cards.map((card, idx) => /* @__PURE__ */ u$1(
          Card,
          {
            id: card.id,
            title: card.title,
            content: card.content,
            moveCard,
            addCardToGroup: (id2, parent) => false,
            left: card.left,
            top: card.top,
            cards: [],
            inGroup: true
          },
          card.id
        ))
      ]
    }
  );
};
const CardSortMethods = {
  PromptView: ({ prompt, image: image2 }) => {
    const [cardGrouping, setCardGrouping] = d(prompt.cards);
    return /* @__PURE__ */ u$1("div", { children: [
      /* @__PURE__ */ u$1(
        MarkdownView,
        {
          markdown: prompt.prompt,
          imag: image2
        }
      ),
      /* @__PURE__ */ u$1(
        CardSortView,
        {
          data: cardGrouping,
          updateData: setCardGrouping
        }
      )
    ] });
  },
  // not done yet - need to figure out how to return the state
  getAnswerFromDOM({ data }) {
    return { answer: new Array(), ordered: false };
  },
  ResponseView: ({ prompt, submit, formValidators: { required } }) => {
    required("answer");
    return /* @__PURE__ */ u$1(k$2, { children: "Emmanuel hasn't figured out how to do this yet!" });
  },
  compareAnswers({ answer, ordered }, userAnswer) {
    const sanitize = (group) => ordered ? group : new Set(group);
    const sanitizeGroups = (groups) => groups.map((g2) => hash.MD5(sanitize(g2)));
    const userHashes = sanitizeGroups(userAnswer.answer);
    const solnHashes = sanitizeGroups(answer);
    return userHashes.length == solnHashes.length && userHashes.every((userHash) => solnHashes.includes(userHash));
  },
  AnswerView: ({ answer, baseline }) => {
    return /* @__PURE__ */ u$1(k$2, { children: "Emmanuel hasn't figured out how to do this yet!" });
  }
};
const methodMapping = {
  ShortAnswer: ShortAnswerMethods,
  Tracing: TracingMethods,
  MultipleChoice: MultipleChoiceMethods,
  Informational: InformationalMethods,
  CardSort: CardSortMethods
};
const getQuestionMethods = (type) => methodMapping[type];
const questionNameToCssClass = (name) => {
  const output = [];
  for (let i2 = 0; i2 < name.length; ++i2) {
    if (i2 > 0 && name[i2].match(/[A-Z]/)) {
      output.push("-");
    }
    output.push(name[i2].toLowerCase());
  }
  return output.join("");
};
const BugReporter = ({
  quizName,
  question
}) => {
  const [show, setShow] = d(false);
  useCaptureMdbookShortcuts(show);
  const onSubmit = (event) => {
    const data = new FormData(event.target);
    const feedback = data.get("feedback").toString();
    window.telemetry.log("bug", {
      quizName,
      question,
      feedback
    });
    event.preventDefault();
    setShow(false);
  };
  return /* @__PURE__ */ u$1("div", { className: "bug-report", children: [
    /* @__PURE__ */ u$1(
      "button",
      {
        type: "button",
        title: "Report a bug in this question",
        onClick: () => setShow(!show),
        children: "🐞"
      }
    ),
    show && /* @__PURE__ */ u$1("div", { className: "reporter", children: [
      /* @__PURE__ */ u$1(
        "button",
        {
          type: "button",
          className: "close",
          onClick: () => setShow(false),
          children: "✕"
        }
      ),
      /* @__PURE__ */ u$1("h3", { children: "Report a bug" }),
      /* @__PURE__ */ u$1("p", { children: "If you found an issue in this question (e.g. a typo or an incorrect answer), please describe the issue and report it:" }),
      /* @__PURE__ */ u$1("form", { onSubmit, children: [
        /* @__PURE__ */ u$1("textarea", { name: "feedback", "aria-label": "Bug feedback" }),
        /* @__PURE__ */ u$1("input", { type: "submit", "aria-label": "Submit bug feedback" })
      ] })
    ] })
  ] });
};
const now = () => (/* @__PURE__ */ new Date()).getTime();
const EXPLANATION_HELP = `
Normally, we only observe *whether* readers get a question correct or incorrect. 
This explanation helps us understand *why* a reader answers a particular way, so 
we can better improve the surrounding text.
`.trim();
const MultipartContext = ({
  title,
  multipart,
  question
}) => /* @__PURE__ */ u$1("div", { className: "multipart-context", children: [
  /* @__PURE__ */ u$1("p", { children: [
    /* @__PURE__ */ u$1("strong", { children: [
      "Question ",
      title.substring(0, 1),
      " has multiple parts."
    ] }),
    " The box below contains the shared context for each part."
  ] }),
  /* @__PURE__ */ u$1("div", { className: "multipart-context-content", children: /* @__PURE__ */ u$1(MarkdownView, { markdown: multipart[question.multipart] }) })
] });
const QuestionView = ({
  multipart,
  question,
  index,
  title,
  attempt,
  questionState,
  onSubmit
}) => {
  const { name: quizName, showBugReporter } = x$1(QuizConfigContext);
  const start = T$1(now, [quizName, question, index]);
  const ref = A$1(null);
  const [showExplanation, setShowExplanation] = d(false);
  const methods = getQuestionMethods(question.type);
  if (!methods) {
    return /* @__PURE__ */ u$1("div", { children: [
      "QUIZ FORMAT ERROR: unknown question type ",
      /* @__PURE__ */ u$1("code", { children: question.type })
    ] });
  }
  const formValidators = useForm();
  const required = (name, options) => {
    const attrs = formValidators.register(name, { ...options, required: true });
    const className = classNames({
      error: formValidators.formState.errors[name]
    });
    return { ...attrs, className };
  };
  const questionClass = questionNameToCssClass(question.type);
  const submit = formValidators.handleSubmit((data) => {
    const answer = methods.getAnswerFromDOM ? methods.getAnswerFromDOM(data, ref.current) : data;
    const comparator = methods.compareAnswers || isEqual;
    const correct = comparator(question.answer, answer);
    onSubmit({
      answer,
      correct,
      start,
      end: now(),
      explanation: data.explanation
    });
  });
  const shouldPrompt = question.promptExplanation && attempt === 0;
  const explanationId = g$1();
  return /* @__PURE__ */ u$1("div", { className: classNames("question", questionClass), children: [
    /* @__PURE__ */ u$1("div", { className: "prompt", children: [
      question.type === "Informational" ? /* @__PURE__ */ u$1("h4", { children: "Informational Poster" }) : /* @__PURE__ */ u$1("h4", { children: [
        "Question ",
        title
      ] }),
      question.multipart && /* @__PURE__ */ u$1(
        MultipartContext,
        {
          question,
          multipart,
          title
        }
      ),
      /* @__PURE__ */ u$1(methods.PromptView, { prompt: question.prompt, image: question.image }),
      window.telemetry && showBugReporter && /* @__PURE__ */ u$1(BugReporter, { quizName, question: index })
    ] }),
    /* @__PURE__ */ u$1("form", { className: "response", ref, onSubmit: submit, children: [
      /* @__PURE__ */ u$1("h4", { children: "Response" }),
      /* @__PURE__ */ u$1("fieldset", { disabled: showExplanation, children: /* @__PURE__ */ u$1(
        methods.ResponseView,
        {
          prompt: question.prompt,
          answer: question.answer,
          submit,
          state: questionState,
          formValidators: { ...formValidators, required }
        },
        `${quizName}-question${index}`
      ) }),
      showExplanation && /* @__PURE__ */ u$1(k$2, { children: [
        /* @__PURE__ */ u$1("p", { children: [
          /* @__PURE__ */ u$1("br", {}),
          /* @__PURE__ */ u$1("label", { htmlFor: explanationId, children: [
            "In 1-2 sentences, please explain why you picked this answer.   ",
            /* @__PURE__ */ u$1(MoreInfo, { markdown: EXPLANATION_HELP })
          ] })
        ] }),
        /* @__PURE__ */ u$1(
          "textarea",
          {
            id: explanationId,
            title: "Explanation",
            ...required("explanation")
          }
        )
      ] }),
      shouldPrompt && !showExplanation ? /* @__PURE__ */ u$1("button", { type: "button", onClick: () => setShowExplanation(true), children: "Submit" }) : /* @__PURE__ */ u$1(
        "input",
        {
          type: "submit",
          value: question.type === "Informational" ? "Continue" : "Submit"
        }
      )
    ] })
  ] });
};
const AnswerView = ({
  multipart,
  question,
  index,
  title,
  userAnswer,
  correct,
  showCorrect
}) => {
  const { name: quizName, showBugReporter } = x$1(QuizConfigContext);
  const methods = getQuestionMethods(question.type);
  const questionClass = questionNameToCssClass(question.type);
  let multipartView = null;
  if (question.multipart) {
    const anchorId = `${quizName}-${question.multipart}`;
    if (title.substring(1, 2) === "a")
      multipartView = /* @__PURE__ */ u$1("div", { children: [
        /* @__PURE__ */ u$1("a", { id: anchorId }),
        /* @__PURE__ */ u$1(
          MultipartContext,
          {
            question,
            multipart,
            title
          }
        )
      ] });
    else
      multipartView = /* @__PURE__ */ u$1("div", { className: "multipart-context", children: /* @__PURE__ */ u$1("a", { href: `#${anchorId}`, children: [
        "Return to question context ",
        /* @__PURE__ */ u$1("span", { className: "rotate-arrow", children: "↳" })
      ] }) });
  }
  return /* @__PURE__ */ u$1("div", { className: classNames("answer", questionClass), children: [
    /* @__PURE__ */ u$1("div", { className: "prompt", children: [
      /* @__PURE__ */ u$1("h4", { children: [
        "Question ",
        title
      ] }),
      multipartView,
      /* @__PURE__ */ u$1(methods.PromptView, { prompt: question.prompt, image: question.image }),
      window.telemetry && showBugReporter && /* @__PURE__ */ u$1(BugReporter, { quizName, question: index })
    ] }),
    /* @__PURE__ */ u$1("div", { className: "answer-row", children: [
      /* @__PURE__ */ u$1("div", { children: [
        /* @__PURE__ */ u$1("div", { className: "answer-header", children: "You answered:" }),
        /* @__PURE__ */ u$1("div", { children: /* @__PURE__ */ u$1(
          methods.AnswerView,
          {
            answer: userAnswer,
            baseline: question.answer,
            prompt: question.prompt
          }
        ) })
      ] }),
      showCorrect && !correct && /* @__PURE__ */ u$1("div", { children: [
        /* @__PURE__ */ u$1("div", { className: "answer-header", children: "The correct answer is:" }),
        /* @__PURE__ */ u$1("div", { children: /* @__PURE__ */ u$1(
          methods.AnswerView,
          {
            answer: question.answer,
            baseline: question.answer,
            prompt: question.prompt
          }
        ) })
      ] })
    ] }),
    showCorrect && question.context && /* @__PURE__ */ u$1("div", { className: "context", children: /* @__PURE__ */ u$1(MarkdownView, { markdown: `**Context**:
${question.context}` }) })
  ] });
};
class AnswerStorage {
  constructor(quizName, quizHash) {
    __publicField(this, "storageKey", () => `quiz:${this.quizName}`);
    this.quizName = quizName;
    this.quizHash = quizHash;
  }
  save(answers, confirmedDone, attempt, wrongAnswers) {
    const storedAnswers = {
      answers,
      confirmedDone,
      attempt,
      quizHash: this.quizHash,
      wrongAnswers
    };
    localStorage.setItem(this.storageKey(), JSON.stringify(storedAnswers));
  }
  load() {
    const storedAnswersJson = localStorage.getItem(this.storageKey());
    if (storedAnswersJson) {
      const storedAnswers = JSON.parse(storedAnswersJson);
      if (storedAnswers.quizHash === this.quizHash) {
        return storedAnswers;
      }
    }
  }
}
const ExitExplanation = ({
  wrapperRef
}) => {
  const [expanded, setExpanded] = d(false);
  y(() => {
    if (expanded) {
      wrapperRef.current.scrollTo({
        top: wrapperRef.current.offsetHeight,
        behavior: "smooth"
      });
    }
  }, [expanded, wrapperRef]);
  return /* @__PURE__ */ u$1("div", { className: "exit-explanation", children: [
    /* @__PURE__ */ u$1("div", { className: "trigger", onClick: () => setExpanded(!expanded), children: "Why is this quiz fullscreen?" }),
    /* @__PURE__ */ u$1("div", { style: { display: expanded ? "block" : "none" }, children: "We want to know how much you are learning that can be recalled without assistance. Please complete the quiz without re-reading the text, e.g. by opening it in another tab." })
  ] });
};
const loadState = ({
  quiz,
  answerStorage,
  cacheAnswers,
  autoStart
}) => {
  const stored = answerStorage.load();
  const badSchema = stored && stored.attempt > 0 && !stored.confirmedDone && !stored.wrongAnswers;
  if (cacheAnswers && stored && !badSchema) {
    return {
      started: true,
      index: quiz.questions.length,
      answers: stored.answers,
      encounteredInfos: quiz.questions.filter((q2) => q2.type === "Informational").length,
      // note: need to provide defaults if schema changes
      confirmedDone: stored.confirmedDone || false,
      attempt: stored.attempt || 0,
      wrongAnswers: stored.wrongAnswers || (stored.attempt > 0 ? Array.from({ length: quiz.questions.length }, (_2, i2) => i2) : void 0)
    };
  } else {
    return {
      started: autoStart || false,
      index: 0,
      encounteredInfos: 0,
      attempt: 0,
      confirmedDone: false,
      answers: []
    };
  }
};
const Header = observer(({ state, ended }) => {
  var _a2;
  const { quiz } = x$1(QuizConfigContext);
  const informationalCount = quiz.questions.filter(
    (q2) => q2.type === "Informational"
  ).length;
  return /* @__PURE__ */ u$1("header", { children: [
    /* @__PURE__ */ u$1("h3", { children: quiz.title || "Quiz" }),
    /* @__PURE__ */ u$1("div", { className: "counter", children: state.started ? ((_a2 = quiz.questions.at(state.index)) == null ? void 0 : _a2.type) === "Informational" ? /* @__PURE__ */ u$1(k$2, {}) : !ended ? /* @__PURE__ */ u$1(k$2, { children: [
      "Question",
      " ",
      (state.attempt === 0 ? state.index : state.wrongAnswers.indexOf(state.index)) + 1 - state.encounteredInfos,
      " ",
      "/",
      " ",
      state.attempt === 0 ? quiz.questions.length - informationalCount : state.wrongAnswers.length
    ] }) : null : /* @__PURE__ */ u$1(k$2, { children: [
      quiz.questions.length - informationalCount,
      " question",
      quiz.questions.length - informationalCount > 1 && "s"
    ] }) })
  ] });
});
const AnswerReview = ({
  state,
  nCorrect,
  onRetry,
  onGiveUp
}) => {
  const { quiz, name } = x$1(QuizConfigContext);
  const informationalCount = quiz.questions.filter(
    (q2) => q2.type === "Informational"
  ).length;
  const confirm = !state.confirmedDone && /* @__PURE__ */ u$1("p", { style: { marginBottom: "1em" }, children: [
    "You can either",
    " ",
    /* @__PURE__ */ u$1("button", { type: "button", onClick: onRetry, children: "retry the quiz" }),
    " ",
    "or",
    " ",
    /* @__PURE__ */ u$1("button", { type: "button", onClick: onGiveUp, children: "see the correct answers" }),
    "."
  ] });
  const questionTitles = generateQuestionTitles(quiz);
  return /* @__PURE__ */ u$1(k$2, { children: [
    /* @__PURE__ */ u$1("h3", { children: "Answer Review" }),
    /* @__PURE__ */ u$1("p", { children: [
      "You answered",
      " ",
      /* @__PURE__ */ u$1("strong", { children: [
        nCorrect - informationalCount,
        "/",
        quiz.questions.length - informationalCount
      ] }),
      " ",
      "questions correctly."
    ] }),
    confirm,
    quiz.questions.map((question, i2) => {
      const { answer, correct } = state.answers[i2];
      return /* @__PURE__ */ u$1("div", { className: "answer-wrapper", children: /* @__PURE__ */ u$1(
        AnswerView,
        {
          index: i2 + 1,
          title: questionTitles[i2],
          multipart: quiz.multipart,
          quizName: name,
          question,
          userAnswer: answer,
          correct,
          showCorrect: state.confirmedDone
        }
      ) }, i2);
    }),
    confirm
  ] });
};
const useCaptureMdbookShortcuts = (capture) => {
  _(() => {
    if (capture) {
      const captureKeyboard = (e2) => e2.stopPropagation();
      const captureTouchscreen = (e2) => {
        e2.preventDefault();
        e2.stopPropagation();
        return false;
      };
      document.documentElement.addEventListener(
        "keydown",
        captureKeyboard,
        false
      );
      document.documentElement.addEventListener(
        "touchmove",
        captureTouchscreen,
        false
      );
      return () => {
        document.documentElement.removeEventListener(
          "keydown",
          captureKeyboard,
          false
        );
        document.documentElement.removeEventListener(
          "touchmove",
          captureTouchscreen
        );
      };
    }
  }, [capture]);
};
const QuizConfigContext = Rn.createContext(null);
const aCode = "a".charCodeAt(0);
const generateQuestionTitles = (quiz) => {
  const groups = [];
  let group = void 0;
  let part2 = void 0;
  quiz.questions.forEach((q2) => {
    if (q2.multipart) {
      if (q2.multipart === part2) {
        group.push(q2);
      } else {
        group = [q2];
        groups.push(group);
      }
      part2 = q2.multipart;
    } else {
      group = [q2];
      groups.push(group);
    }
  });
  return groups.flatMap(
    (g2, i2) => g2.map((q2, j2) => {
      let title = (i2 + 1).toString();
      if (q2.multipart) title += String.fromCharCode(aCode + j2);
      return title;
    })
  );
};
const QuizView = observer(
  ({ onFinish, ...config }) => {
    const [quizHash] = d(() => hash.MD5(config.quiz));
    const answerStorage = new AnswerStorage(config.name, quizHash);
    const questionStates = T$1(
      () => config.quiz.questions.map((q2) => {
        var _a2;
        if (!q2.id) q2.id = hash.MD5(q2);
        const methods = getQuestionMethods(q2.type);
        return (_a2 = methods.questionState) == null ? void 0 : _a2.call(methods, q2.prompt, q2.answer);
      }),
      [config.quiz]
    );
    const state = useLocalObservable(
      () => loadState({
        quiz: config.quiz,
        answerStorage,
        cacheAnswers: config.cacheAnswers,
        autoStart: config.autoStart
      })
    );
    const saveToCache = () => {
      if (config.cacheAnswers)
        answerStorage.save(
          state.answers,
          state.confirmedDone,
          state.attempt,
          state.wrongAnswers
        );
    };
    const ended = state.index === config.quiz.questions.length;
    const inProgress = state.started && !ended;
    useCaptureMdbookShortcuts(inProgress);
    const [lastTop, setLastTop] = d();
    const showFullscreen = inProgress && (config.fullscreen ?? false);
    _(() => {
      document.body.style.overflowY = showFullscreen ? "hidden" : "auto";
      if (showFullscreen) {
        setLastTop(window.scrollY + 100);
      } else if (config.fullscreen && lastTop !== void 0) {
        window.scrollTo(0, lastTop);
      }
    }, [showFullscreen, config.fullscreen, lastTop]);
    const onSubmit = action((answer) => {
      var _a2, _b2;
      answer = structuredClone(answer);
      if (state.attempt === 0) {
        state.answers.push(answer);
        state.index += 1;
        if (((_a2 = config.quiz.questions[state.index - 1]) == null ? void 0 : _a2.type) === "Informational") {
          state.encounteredInfos += 1;
        }
      } else {
        state.answers[state.index] = answer;
        const wrongAnswerIdx = state.wrongAnswers.findIndex(
          (n2) => n2 === state.index
        );
        if (wrongAnswerIdx === state.wrongAnswers.length - 1)
          state.index = config.quiz.questions.length;
        else state.index = state.wrongAnswers[wrongAnswerIdx + 1];
      }
      (_b2 = window.telemetry) == null ? void 0 : _b2.log("answers", {
        quizName: config.name,
        quizHash,
        answers: state.answers,
        attempt: state.attempt
      });
      if (state.index === config.quiz.questions.length) {
        const wrongAnswers = state.answers.map((a2, i2) => ({ a: a2, i: i2 })).filter(({ a: a2 }) => !a2.correct);
        if (wrongAnswers.length === 0 || !config.allowRetry) {
          state.confirmedDone = true;
        } else {
          state.wrongAnswers = wrongAnswers.map(({ i: i2 }) => i2);
        }
        saveToCache();
        onFinish == null ? void 0 : onFinish(toJS(state.answers));
      }
    });
    const nCorrect = state.answers.filter((a2) => a2.correct).length;
    state.confirmedDone;
    const questionTitles = generateQuestionTitles(config.quiz);
    const body = /* @__PURE__ */ u$1("section", { children: state.started ? ended ? /* @__PURE__ */ u$1(
      AnswerReview,
      {
        state,
        nCorrect,
        onRetry: action(() => {
          state.index = state.wrongAnswers[0];
          state.attempt += 1;
        }),
        onGiveUp: action(() => {
          state.confirmedDone = true;
          saveToCache();
        })
      }
    ) : /* @__PURE__ */ u$1(
      QuestionView,
      {
        multipart: config.quiz.multipart,
        index: state.index,
        title: questionTitles[state.index],
        attempt: state.attempt,
        question: config.quiz.questions[state.index],
        questionState: questionStates[state.index],
        onSubmit
      },
      state.index
    ) : /* @__PURE__ */ u$1(
      "button",
      {
        type: "button",
        className: "start",
        onClick: action(() => {
          state.started = true;
        }),
        children: "Start"
      }
    ) });
    const wrapperClass = classNames("mdbook-quiz-wrapper", {
      expanded: showFullscreen
    });
    const onExit = action(() => {
      state.started = false;
      state.index = 0;
      state.answers = [];
    });
    const exitButton = /* @__PURE__ */ u$1("div", { className: "exit", onClick: onExit, children: "✕" });
    const wrapperRef = A$1(void 0);
    return /* @__PURE__ */ u$1(QuizConfigContext.Provider, { value: config, children: /* @__PURE__ */ u$1("div", { ref: wrapperRef, className: wrapperClass, children: /* @__PURE__ */ u$1("div", { className: "mdbook-quiz", children: [
      showFullscreen && /* @__PURE__ */ u$1(k$2, { children: [
        exitButton,
        /* @__PURE__ */ u$1(ExitExplanation, { wrapperRef })
      ] }),
      /* @__PURE__ */ u$1(Header, { state, ended }),
      body
    ] }) }) });
  }
);
const parseTOML = (tomlStr) => parse(tomlStr);
function buildQuiz(rootNode, quizConfig) {
  if (typeof quizConfig !== "object") {
    console.log("Read:\n", quizConfig);
    try {
      console.log("trying to parse quiz string as JSON");
      quizConfig = JSON.parse(quizConfig);
    } catch (e2) {
      try {
        console.log("trying to parse quiz string as TOML");
        quizConfig = parseTOML(quizConfig);
      } catch (e22) {
        throw "Could not parse quiz configuration:\n" + e22;
      }
    }
  }
  console.log("QuizConfig is:\n", quizConfig);
  const App = () => {
    return /* @__PURE__ */ u$1("div", { children: /* @__PURE__ */ u$1(QuizView, { name: "Bootstrap - Assessment", quiz: quizConfig }) });
  };
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ u$1(App, {}));
}
export {
  AnswerView,
  CardSortMethods,
  MultipleChoiceMethods,
  QuestionView,
  QuizConfigContext,
  QuizView,
  Rn as React,
  ReactDOM,
  ShortAnswerMethods,
  Snippet,
  TracingMethods,
  buildQuiz as default,
  generateQuestionTitles,
  getQuestionMethods,
  parseTOML,
  snippetToNode,
  useCaptureMdbookShortcuts
};
