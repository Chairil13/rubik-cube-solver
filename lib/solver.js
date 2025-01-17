!(function (e, r) {
  "object" == typeof exports && "object" == typeof module ? (module.exports = r()) : "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports ? (exports.rubiksCubeSolver = r()) : (e.rubiksCubeSolver = r());
})(this, function () {
  return (function (e) {
    function r(o) {
      if (t[o]) return t[o].exports;
      var n = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
    }
    var t = {};
    return (
      (r.m = e),
      (r.c = t),
      (r.i = function (e) {
        return e;
      }),
      (r.d = function (e, t, o) {
        r.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: o });
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
      }),
      (r.p = ""),
      r((r.s = 34))
    );
  })([
    function (e, r, t) {
      "use strict";
      function o(e) {
        var r = {};
        return (
          Object.keys(e).forEach(function (t) {
            r[t.toLowerCase()] = e[t].toLowerCase();
          }),
          r
        );
      }
      function n(e, r) {
        var t = Object.keys(e);
        if (t.length <= 1 && ["front", "back"].includes(t[0])) throw new Error('Orientation object "' + e + '" is ambiguous. Please specify one of these faces: "up", "right", "down", "left"');
        var o = e;
        return (
          (e = {}),
          t.forEach(function (r) {
            ["front", "back"].includes(r) || (e[r] = o[r]);
          }),
          (e.front = r.toLowerCase()),
          e
        );
      }
      function i(e) {
        if (Object.keys(e) <= 1) throw new Error('Orientation object "' + e + '" is ambiguous. Please specify 2 faces.');
        var r = Object.keys(e),
          t = r.map(function (r) {
            return new l.Face(e[r]);
          }),
          o = r.map(function (e) {
            return new l.Face(e);
          }),
          n = f.Vector.getRotationFromNormals(t[0].normal(), t[0].orientTo(o[0]).normal());
        t[1].rotate(n.axis, n.angle);
        var i = f.Vector.getRotationFromNormals(t[1].normal(), t[1].orientTo(o[1]).normal());
        if (Math.abs(i.angle) === Math.PI) {
          var a = new l.Face(r[0]).vector.getAxis();
          i.axis = a;
        }
        return [n, i];
      }
      function a(e, r) {
        var t = !0,
          o = !1,
          n = void 0;
        try {
          for (var i, a = e[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
            var u = i.value,
              c = !0,
              s = !1,
              l = void 0;
            try {
              for (var f, v = r[Symbol.iterator](); !(c = (f = v.next()).done); c = !0) {
                var m = f.value;
                u.rotate(m.axis, m.angle);
              }
            } catch (e) {
              (s = !0), (l = e);
            } finally {
              try {
                !c && v.return && v.return();
              } finally {
                if (s) throw l;
              }
            }
          }
        } catch (e) {
          (o = !0), (n = e);
        } finally {
          try {
            !t && a.return && a.return();
          } finally {
            if (o) throw n;
          }
        }
      }
      function u(e) {
        var r = [],
          t = !0,
          o = !1,
          n = void 0;
        try {
          for (var i, a = e[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
            var u = i.value;
            (u = u.includes("prime") ? u[0] : u[0] + "prime"), r.push(u);
          }
        } catch (e) {
          (o = !0), (n = e);
        } finally {
          try {
            !t && a.return && a.return();
          } finally {
            if (o) throw n;
          }
        }
        return "string" == typeof moves ? r.join(" ") : r;
      }
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.orientMoves = r.getRotationFromTo = r.getFaceFromDirection = r.getDirectionFromFaces = r.normalizeNotations = r.transformNotations = r.getFaceMatchingMiddle = r.getMiddleMatchingFace = r.getMoveOfFace = r.getFaceOfMove = void 0);
      var c = t(7),
        s = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(c),
        l = t(10),
        f = t(4),
        v = { f: "s", r: "mprime", u: "eprime", d: "e", l: "m", b: "sprime" },
        m = (r.getFaceOfMove = function (e) {
          if ("string" != typeof e) throw new TypeError("move must be a string");
          var r = e[0].toLowerCase();
          return "f" === r ? "front" : "r" === r ? "right" : "u" === r ? "up" : "d" === r ? "down" : "l" === r ? "left" : "b" === r ? "back" : void 0;
        }),
        h = (r.getMoveOfFace = function (e) {
          if ("string" != typeof e) throw new TypeError("face must be a string");
          if (((e = e.toLowerCase()), !["front", "right", "up", "down", "left", "back"].includes(e))) throw new Error(e + " is not valid face");
          return e[0];
        }),
        p = (r.getMiddleMatchingFace = function (e) {
          return (e = e.toLowerCase()[0]), v[e];
        }),
        g = (r.getFaceMatchingMiddle = function (e) {
          e = e.toLowerCase();
          var r = !0,
            t = !1,
            o = void 0;
          try {
            for (var n, i = Object.keys(v)[Symbol.iterator](); !(r = (n = i.next()).done); r = !0) {
              var a = n.value;
              if (e === v[a]) return a;
            }
          } catch (e) {
            (t = !0), (o = e);
          } finally {
            try {
              !r && i.return && i.return();
            } finally {
              if (t) throw o;
            }
          }
        }),
        d = (r.transformNotations = function (e) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = y(e);
          return (
            r.upperCase &&
              (t = t.map(function (e) {
                return e[0].toUpperCase() + e.slice(1);
              })),
            r.orientation && (t = w(t, r.orientation)),
            r.reverse && (t = u(t)),
            "string" == typeof e ? t.join(" ") : t
          );
        }),
        y = (r.normalizeNotations = function (e) {
          return (
            "string" == typeof e && (e = e.split(" ")),
            (e = e.filter(function (e) {
              return "" !== e;
            })),
            e.map(function (e) {
              var r = e.toLowerCase().includes("prime"),
                t = e.includes("2");
              return (e = e[0]), t ? (e = e[0] + "2") : r && (e += "prime"), e;
            })
          );
        }),
        P = (r.getDirectionFromFaces = function (e, r, t) {
          (t = o(t)), (t = n(t, e));
          var u = new l.Face(e),
            c = new l.Face(r);
          a([u, c], i(t));
          var v = new f.Vector((0, s.default)([], u.normal(), c.normal())).getAxis(),
            m = f.Vector.getAngle(u.normal(), c.normal());
          return "x" === v && m > 0 ? "down" : "x" === v && m < 0 ? "up" : "y" === v && m > 0 ? "right" : "y" === v && m < 0 ? "left" : 0 === m ? "front" : m === Math.PI ? "back" : void 0;
        }),
        b = (r.getFaceFromDirection = function (e, r, t) {
          (t = o(t)), (t = n(t, e));
          var u = new l.Face(e),
            c = i(t);
          a([u], c);
          var s = new l.Face(r),
            v = f.Vector.getRotationFromNormals(u.normal(), s.normal()),
            m = v.axis,
            h = v.angle;
          return (
            u.rotate(m, h),
            a(
              [u],
              c
                .map(function (e) {
                  return f.Vector.reverseRotation(e);
                })
                .reverse()
            ),
            u.toString()
          );
        }),
        F = (r.getRotationFromTo = function (e, r, t) {
          var o = new l.Face(e),
            n = new l.Face(r),
            i = new l.Face(t),
            a = o.vector.getAxis(),
            u = [n.vector.getAxis(), i.vector.getAxis()],
            c = u[0],
            s = u[1];
          if ([c.toLowerCase(), s.toLowerCase()].includes(a.toLowerCase())) throw new Error("moving " + o + " from " + n + " to " + i + " is not possible.");
          var v = h(e).toUpperCase(),
            m = f.Vector.getAngle(n.normal(), i.normal());
          return o.vector.getMagnitude() < 0 && (m *= -1), 0 === m ? "" : Math.abs(m) === Math.PI ? v + " " + v : m < 0 ? "" + v : m > 0 ? v + "Prime" : void 0;
        }),
        w = (r.orientMoves = function (e, r) {
          r = o(r);
          var t = i(r);
          return (
            t.reverse().map(function (e) {
              return f.Vector.reverseRotation(e);
            }),
            e.map(function (e) {
              var r = e.toLowerCase().includes("prime"),
                o = e.includes("2"),
                n = e[0] === e[0].toLowerCase(),
                i = ["m", "e", "s"].includes(e[0].toLowerCase());
              o && (e = e.replace("2", ""));
              var u = void 0;
              if (i) {
                var c = m(g(e));
                u = new l.Face(c);
              } else {
                var s = m(e[0]);
                u = new l.Face(s);
              }
              a([u], t);
              var f = void 0;
              return (f = i ? p(u.toString()) : u.toString()[0]), n || (f = f.toUpperCase()), o && (f += "2"), r && !i && (f += "prime"), f;
            })
          );
        });
      r.default = { getFaceOfMove: m, getMoveOfFace: h, getMiddleMatchingFace: p, getFaceMatchingMiddle: g, transformNotations: d, normalizeNotations: y, getDirectionFromFaces: P, getRotationFromTo: F, getFaceFromDirection: b, orientMoves: w };
    },
    function (e, r, t) {
      "use strict";
      function o(e) {
        if (Array.isArray(e)) {
          for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
          return t;
        }
        return Array.from(e);
      }
      function n(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.RubiksCube = void 0);
      var i = (function () {
          function e(e, r) {
            for (var t = 0; t < r.length; t++) {
              var o = r[t];
              (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
          }
          return function (r, t, o) {
            return t && e(r.prototype, t), o && e(r, o), r;
          };
        })(),
        a = t(9),
        u = t(3),
        c = t(0),
        s = "fffffffffrrrrrrrrruuuuuuuuudddddddddlllllllllbbbbbbbbb",
        l = (function () {
          function e(r) {
            if ((n(this, e), 54 !== r.length)) throw new Error("Wrong number of colors provided");
            (this._notationToRotation = { f: { axis: "z", mag: -1 }, r: { axis: "x", mag: -1 }, u: { axis: "y", mag: -1 }, d: { axis: "y", mag: 1 }, l: { axis: "x", mag: 1 }, b: { axis: "z", mag: 1 }, m: { axis: "x", mag: 1 }, e: { axis: "y", mag: 1 }, s: { axis: "z", mag: -1 } }), this._build(r);
          }
          return (
            i(e, null, [
              {
                key: "Solved",
                value: function () {
                  return new e(s);
                },
              },
              {
                key: "FromMoves",
                value: function (r) {
                  var t = e.Solved();
                  return t.move(r), t;
                },
              },
              {
                key: "Scrambled",
                value: function () {
                  var r = e.Solved(),
                    t = e.getRandomMoves(25);
                  return r.move(t), r;
                },
              },
              {
                key: "reverseMoves",
                value: function (r) {
                  return e.transformMoves(r, { reverse: !0 });
                },
              },
              {
                key: "transformMoves",
                value: function (e) {
                  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  return (0, c.transformNotations)(e, r);
                },
              },
              {
                key: "getRandomMoves",
                value: function () {
                  for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25, r = [], t = ["F", "Fprime", "R", "Rprime", "U", "Uprime", "D", "Dprime", "L", "Lprime", "B", "Bprime"]; r.length < e; ) {
                    for (var o = 0; o < e - r.length; o++) {
                      var n = ~~(Math.random() * t.length);
                      r.push(t[n]);
                    }
                    r = (0, u.algorithmShortener)(r).split(" ");
                  }
                  return r.join(" ");
                },
              },
            ]),
            i(e, [
              {
                key: "getFace",
                value: function (e) {
                  if ("string" != typeof e) throw new Error('"face" must be a string (received: ' + e + ")");
                  e = e.toLowerCase()[0];
                  var r = void 0,
                    t = void 0,
                    o = void 0,
                    n = void 0,
                    i = void 0;
                  if ("f" === e)
                    (r = "Y"),
                      (t = "X"),
                      (o = -1),
                      (n = 1),
                      (i = this._cubies.filter(function (e) {
                        return 1 === e.getZ();
                      }));
                  else if ("r" === e)
                    (r = "Y"),
                      (t = "Z"),
                      (o = -1),
                      (n = -1),
                      (i = this._cubies.filter(function (e) {
                        return 1 === e.getX();
                      }));
                  else if ("u" === e)
                    (r = "Z"),
                      (t = "X"),
                      (o = 1),
                      (n = 1),
                      (i = this._cubies.filter(function (e) {
                        return 1 === e.getY();
                      }));
                  else if ("d" === e)
                    (r = "Z"),
                      (t = "X"),
                      (o = -1),
                      (n = 1),
                      (i = this._cubies.filter(function (e) {
                        return -1 === e.getY();
                      }));
                  else if ("l" === e)
                    (r = "Y"),
                      (t = "Z"),
                      (o = -1),
                      (n = 1),
                      (i = this._cubies.filter(function (e) {
                        return -1 === e.getX();
                      }));
                  else if ("b" === e)
                    (r = "Y"),
                      (t = "X"),
                      (o = -1),
                      (n = -1),
                      (i = this._cubies.filter(function (e) {
                        return -1 === e.getZ();
                      }));
                  else if (["m", "e", "s"].includes(e)) return this._getMiddleCubiesForMove(e);
                  return i.sort(function (e, i) {
                    var a = e["get" + r]() * o,
                      u = e["get" + t]() * n,
                      c = i["get" + r]() * o,
                      s = i["get" + t]() * n;
                    return a < c ? -1 : a > c ? 1 : u < s ? -1 : 1;
                  });
                },
              },
              {
                key: "getCubie",
                value: function (e) {
                  return this._cubies.find(function (r) {
                    if (e.length != r.faces().length) return !1;
                    var t = !0,
                      o = !1,
                      n = void 0;
                    try {
                      for (var i, a = e[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                        var u = i.value;
                        if (!r.faces().includes(u)) return !1;
                      }
                    } catch (e) {
                      (o = !0), (n = e);
                    } finally {
                      try {
                        !t && a.return && a.return();
                      } finally {
                        if (o) throw n;
                      }
                    }
                    return !0;
                  });
                },
              },
              {
                key: "corners",
                value: function () {
                  return this._cubies.filter(function (e) {
                    return e.isCorner();
                  });
                },
              },
              {
                key: "edges",
                value: function () {
                  return this._cubies.filter(function (e) {
                    return e.isEdge();
                  });
                },
              },
              {
                key: "middles",
                value: function () {
                  return this._cubies.filter(function (e) {
                    return e.isMiddle();
                  });
                },
              },
              {
                key: "move",
                value: function (e) {
                  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  "string" == typeof e && (e = e.split(" ")), (e = (0, c.transformNotations)(e, r));
                  var t = !0,
                    n = !1,
                    i = void 0;
                  try {
                    for (var a, u = e[Symbol.iterator](); !(t = (a = u.next()).done); t = !0) {
                      var s = a.value,
                        l = s[0];
                      if (l) {
                        var f = s.toLowerCase().includes("prime"),
                          v = l === l.toLowerCase(),
                          m = s.includes("2"),
                          h = this._getRotationForFace(l),
                          p = h.axis,
                          g = h.mag,
                          d = this.getFace(l);
                        if ((f && (g *= -1), m && (g *= 2), v)) {
                          var y = (0, c.getMiddleMatchingFace)(l),
                            P = this._getMiddleCubiesForMove(y);
                          d = [].concat(o(d), o(P));
                        }
                        var b = !0,
                          F = !1,
                          w = void 0;
                        try {
                          for (var R, C = d[Symbol.iterator](); !(b = (R = C.next()).done); b = !0) {
                            R.value.rotate(p, g);
                          }
                        } catch (e) {
                          (F = !0), (w = e);
                        } finally {
                          try {
                            !b && C.return && C.return();
                          } finally {
                            if (F) throw w;
                          }
                        }
                      }
                    }
                  } catch (e) {
                    (n = !0), (i = e);
                  } finally {
                    try {
                      !t && u.return && u.return();
                    } finally {
                      if (n) throw i;
                    }
                  }
                },
              },
              {
                key: "isSolved",
                value: function () {
                  return this.toString() === s;
                },
              },
              {
                key: "toString",
                value: function () {
                  var e = "",
                    r = ["front", "right", "up", "down", "left", "back"],
                    t = !0,
                    o = !1,
                    n = void 0;
                  try {
                    for (var i, a = r[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                      var u = i.value,
                        c = this.getFace(u),
                        s = !0,
                        l = !1,
                        f = void 0;
                      try {
                        for (var v, m = c[Symbol.iterator](); !(s = (v = m.next()).done); s = !0) {
                          e += v.value.getColorOfFace(u);
                        }
                      } catch (e) {
                        (l = !0), (f = e);
                      } finally {
                        try {
                          !s && m.return && m.return();
                        } finally {
                          if (l) throw f;
                        }
                      }
                    }
                  } catch (e) {
                    (o = !0), (n = e);
                  } finally {
                    try {
                      !t && a.return && a.return();
                    } finally {
                      if (o) throw n;
                    }
                  }
                  return e;
                },
              },
              {
                key: "clone",
                value: function () {
                  return new e(this.toString());
                },
              },
              {
                key: "_build",
                value: function (e) {
                  (this._cubies = []), this._populateCube();
                  var r = this._parseColors(e),
                    t = !0,
                    o = !1,
                    n = void 0;
                  try {
                    for (var i, a = Object.keys(r)[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                      var u = i.value,
                        c = r[u];
                      this._colorFace(u, c);
                    }
                  } catch (e) {
                    (o = !0), (n = e);
                  } finally {
                    try {
                      !t && a.return && a.return();
                    } finally {
                      if (o) throw n;
                    }
                  }
                },
              },
              {
                key: "_populateCube",
                value: function () {
                  for (var e = -1; e <= 1; e++)
                    for (var r = -1; r <= 1; r++)
                      for (var t = -1; t <= 1; t++)
                        if (0 !== e || 0 !== r || 0 !== t) {
                          var o = new a.Cubie({ position: [e, r, t] });
                          this._cubies.push(o);
                        }
                },
              },
              {
                key: "_parseColors",
                value: function (e) {
                  for (var r = { front: [], right: [], up: [], down: [], left: [], back: [] }, t = void 0, o = 0; o < e.length; o++) {
                    var n = e[o];
                    (t = o < 9 ? "front" : o < 18 ? "right" : o < 27 ? "up" : o < 36 ? "down" : o < 45 ? "left" : "back"), r[t].push(n);
                  }
                  return r;
                },
              },
              {
                key: "_colorFace",
                value: function (e, r) {
                  for (var t = this.getFace(e), o = 0; o < r.length; o++) t[o].colorFace(e, r[o]);
                },
              },
              {
                key: "_getRotationForFace",
                value: function (e) {
                  if ("string" != typeof e) throw new Error('"face" must be a string (received: ' + e + ")");
                  return (e = e.toLowerCase()), { axis: this._notationToRotation[e].axis, mag: (this._notationToRotation[e].mag * Math.PI) / 2 };
                },
              },
              {
                key: "_getMiddleCubiesForMove",
                value: function (e) {
                  e = e[0].toLowerCase();
                  var r = void 0;
                  return (
                    "m" === e ? (r = ["left", "right"]) : "e" === e ? (r = ["up", "down"]) : "s" === e && (r = ["front", "back"]),
                    this._cubies.filter(function (e) {
                      return !e.hasFace(r[0]) && !e.hasFace(r[1]);
                    })
                  );
                },
              },
            ]),
            e
          );
        })();
      r.RubiksCube = l;
    },
    function (e, r, t) {
      "use strict";
      function o(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.BaseSolver = void 0);
      var n = (function () {
          function e(e, r) {
            for (var t = 0; t < r.length; t++) {
              var o = r[t];
              (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
          }
          return function (r, t, o) {
            return t && e(r.prototype, t), o && e(r, o), r;
          };
        })(),
        i = t(1),
        a = t(0),
        u = (function () {
          function e(r) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            o(this, e), (this.cube = "string" == typeof r ? new i.RubiksCube(r) : r), (this.options = t), (this.partition = {}), (this.partitions = []), (this.totalMoves = []), (this._afterEachCallbacks = []);
          }
          return (
            n(e, [
              {
                key: "move",
                value: function (e, r) {
                  "string" == typeof e && (e = e.split(" ")), this.cube.move(e, r), (e = (0, a.transformNotations)(e, r));
                  var t = !0,
                    o = !1,
                    n = void 0;
                  try {
                    for (var i, u = e[Symbol.iterator](); !(t = (i = u.next()).done); t = !0) {
                      var c = i.value;
                      this.totalMoves.push(c);
                    }
                  } catch (e) {
                    (o = !0), (n = e);
                  } finally {
                    try {
                      !t && u.return && u.return();
                    } finally {
                      if (o) throw n;
                    }
                  }
                },
              },
              {
                key: "afterEach",
                value: function (e) {
                  this._afterEachCallbacks.push(e);
                },
              },
              {
                key: "_triggerAfterEach",
                value: function () {
                  for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                  this._afterEachCallbacks.forEach(function (e) {
                    return e.apply(void 0, r);
                  });
                },
              },
              {
                key: "_solve",
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.partition = {}), (this.partition.cubies = e);
                  var r = e.corner,
                    t = e.edge;
                  return (
                    (this.partition.caseNumber = this._getCaseNumber({ corner: r, edge: t })),
                    this._solveCase(this.partition.caseNumber, { corner: r, edge: t }),
                    (this.partition.moves = this.totalMoves),
                    (this.totalMoves = []),
                    this._overrideAfterEach || this._triggerAfterEach(this.partition, this.phase),
                    this.partition
                  );
                },
              },
              {
                key: "_solveCase",
                value: function (e) {
                  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = r.corner,
                    o = r.edge;
                  this["_solveCase" + e]({ corner: t, edge: o });
                },
              },
            ]),
            e
          );
        })();
      r.BaseSolver = u;
    },
    function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.algorithmShortener = void 0);
      var o = t(19),
        n = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(o),
        i = { F: "B", R: "L", U: "D" },
        a = function (e) {
          "string" == typeof e && (e = e.split(" "));
          var r = {
            compare: function (e, r) {
              return e[0] === r[0];
            },
            combine: function (e, r) {
              var t = e.includes("2") ? 2 : e.includes("prime") ? -1 : 1,
                o = r.includes("2") ? 2 : r.includes("prime") ? -1 : 1,
                n = t + o;
              if ((4 === n && (n = 0), -2 === n && (n = 2), 3 === n && (n = -1), 0 === n)) return "";
              var i = 2 === n ? "2" : -1 === n ? "prime" : "";
              return "" + e[0] + i;
            },
            cancel: function (e) {
              return "" === e;
            },
            ignore: function (e, r) {
              return i[e[0]] === r[0] || i[r[0]] === e[0];
            },
          };
          return (0, n.default)(e, r).join(" ");
        };
      r.algorithmShortener = a;
    },
    function (e, r, t) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function n(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.Vector = void 0);
      var i = (function () {
          function e(e, r) {
            for (var t = 0; t < r.length; t++) {
              var o = r[t];
              (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
          }
          return function (r, t, o) {
            return t && e(r.prototype, t), o && e(r, o), r;
          };
        })(),
        a = t(22),
        u = o(a),
        c = t(7),
        s = o(c),
        l = t(26),
        f = o(l),
        v = t(27),
        m = o(v),
        h = t(28),
        p = o(h),
        g = { x: f.default, y: m.default, z: p.default },
        d = (function () {
          function e(r) {
            n(this, e), this.set(r);
          }
          return (
            i(e, null, [
              {
                key: "FromString",
                value: function (r) {
                  return new e(
                    r.split(" ").map(function (e) {
                      return parseInt(e);
                    })
                  );
                },
              },
              {
                key: "areEqual",
                value: function (e, r) {
                  return e[0] === r[0] && e[1] === r[1] && e[2] === r[2];
                },
              },
              {
                key: "getAngle",
                value: function (r, t) {
                  var o = (0, u.default)(r, t),
                    n = (0, s.default)([], r, t),
                    i = new e(n).getMagnitude();
                  return i ? o * i : o;
                },
              },
              {
                key: "getRotationFromNormals",
                value: function (r, t) {
                  var o = new e((0, s.default)([], r, t)).getAxis(),
                    n = e.getAngle(r, t);
                  if (!o) {
                    var i = ["x", "y", "z"];
                    i.splice(i.indexOf(new e(r).getAxis()), 1), (o = i[0]);
                  }
                  return { axis: o, angle: n };
                },
              },
              {
                key: "reverseRotation",
                value: function (e) {
                  return (e.angle *= -1), e;
                },
              },
            ]),
            i(e, [
              {
                key: "toArray",
                value: function () {
                  return this.vector;
                },
              },
              {
                key: "set",
                value: function (e) {
                  void 0 !== e &&
                    (this.vector = e.map(function (e) {
                      return Math.round(e);
                    }));
                },
              },
              {
                key: "setX",
                value: function (e) {
                  this.vector[0] = e;
                },
              },
              {
                key: "setY",
                value: function (e) {
                  this.vector[1] = e;
                },
              },
              {
                key: "setZ",
                value: function (e) {
                  this.vector[2] = e;
                },
              },
              {
                key: "getX",
                value: function () {
                  return this.toArray()[0];
                },
              },
              {
                key: "getY",
                value: function () {
                  return this.toArray()[1];
                },
              },
              {
                key: "getZ",
                value: function () {
                  return this.toArray()[2];
                },
              },
              {
                key: "isAxis",
                value: function () {
                  var e = 0,
                    r = !0,
                    t = !1,
                    o = void 0;
                  try {
                    for (var n, i = this.vector[Symbol.iterator](); !(r = (n = i.next()).done); r = !0) {
                      0 === n.value && (e += 1);
                    }
                  } catch (e) {
                    (t = !0), (o = e);
                  } finally {
                    try {
                      !r && i.return && i.return();
                    } finally {
                      if (t) throw o;
                    }
                  }
                  return 2 === e;
                },
              },
              {
                key: "getAxis",
                value: function () {
                  if (this.isAxis()) return 0 !== this.vector[0] ? "x" : 0 !== this.vector[1] ? "y" : 0 !== this.vector[2] ? "z" : void 0;
                },
              },
              {
                key: "getMagnitude",
                value: function () {
                  if (this.isAxis()) return this["get" + this.getAxis().toUpperCase()]();
                },
              },
              {
                key: "rotate",
                value: function (e, r) {
                  return (e = e.toLowerCase()), this.set(g[e]([], this.vector, [0, 0, 0], r)), this;
                },
              },
            ]),
            e
          );
        })();
      r.Vector = d;
    },
    function (e, r, t) {
      "use strict";
      function o(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      function n(e, r) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !r || ("object" != typeof r && "function" != typeof r) ? e : r;
      }
      function i(e, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
        (e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : (e.__proto__ = r));
      }
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.F2LCaseBaseSolver = void 0);
      var a = (function () {
          function e(e, r) {
            for (var t = 0; t < r.length; t++) {
              var o = r[t];
              (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
          }
          return function (r, t, o) {
            return t && e(r.prototype, t), o && e(r, o), r;
          };
        })(),
        u = t(12),
        c = (function (e) {
          function r() {
            return o(this, r), n(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
          }
          return (
            i(r, e),
            a(r, [
              {
                key: "solve",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge;
                  return this._solve({ corner: r, edge: t });
                },
              },
            ]),
            r
          );
        })(u.F2LBaseSolver);
      r.F2LCaseBaseSolver = c;
    },
    function (e, r, t) {
      "use strict";
      e.exports = function () {
        return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
      };
    },
    function (e, r, t) {
      "use strict";
      function o(e, r, t) {
        var o = r[0],
          n = r[1],
          i = r[2],
          a = t[0],
          u = t[1],
          c = t[2];
        return (e[0] = n * c - i * u), (e[1] = i * a - o * c), (e[2] = o * u - n * a), e;
      }
      e.exports = o;
    },
    function (e, r, t) {
      "use strict";
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function n() {
        throw new Error("clearTimeout has not been defined");
      }
      function i(e) {
        if (f === setTimeout) return setTimeout(e, 0);
        if ((f === o || !f) && setTimeout) return (f = setTimeout), setTimeout(e, 0);
        try {
          return f(e, 0);
        } catch (r) {
          try {
            return f.call(null, e, 0);
          } catch (r) {
            return f.call(this, e, 0);
          }
        }
      }
      function a(e) {
        if (v === clearTimeout) return clearTimeout(e);
        if ((v === n || !v) && clearTimeout) return (v = clearTimeout), clearTimeout(e);
        try {
          return v(e);
        } catch (r) {
          try {
            return v.call(null, e);
          } catch (r) {
            return v.call(this, e);
          }
        }
      }
      function u() {
        g && h && ((g = !1), h.length ? (p = h.concat(p)) : (d = -1), p.length && c());
      }
      function c() {
        if (!g) {
          var e = i(u);
          g = !0;
          for (var r = p.length; r; ) {
            for (h = p, p = []; ++d < r; ) h && h[d].run();
            (d = -1), (r = p.length);
          }
          (h = null), (g = !1), a(e);
        }
      }
      function s(e, r) {
        (this.fun = e), (this.array = r);
      }
      function l() {}
      var f,
        v,
        m = (e.exports = {});
      !(function () {
        try {
          f = "function" == typeof setTimeout ? setTimeout : o;
        } catch (e) {
          f = o;
        }
        try {
          v = "function" == typeof clearTimeout ? clearTimeout : n;
        } catch (e) {
          v = n;
        }
      })();
      var h,
        p = [],
        g = !1,
        d = -1;
      (m.nextTick = function (e) {
        var r = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
        p.push(new s(e, r)), 1 !== p.length || g || i(c);
      }),
        (s.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (m.title = "browser"),
        (m.browser = !0),
        (m.env = {}),
        (m.argv = []),
        (m.version = ""),
        (m.versions = {}),
        (m.on = l),
        (m.addListener = l),
        (m.once = l),
        (m.off = l),
        (m.removeListener = l),
        (m.removeAllListeners = l),
        (m.emit = l),
        (m.prependListener = l),
        (m.prependOnceListener = l),
        (m.listeners = function (e) {
          return [];
        }),
        (m.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (m.cwd = function () {
          return "/";
        }),
        (m.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (m.umask = function () {
          return 0;
        });
    },
    function (e, r, t) {
      "use strict";
      function o(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.Cubie = void 0);
      var n = (function () {
          function e(e, r) {
            for (var t = 0; t < r.length; t++) {
              var o = r[t];
              (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
          }
          return function (r, t, o) {
            return t && e(r.prototype, t), o && e(r, o), r;
          };
        })(),
        i = t(4),
        a = t(10),
        u = (function () {
          function e(r) {
            var t = this,
              n = r.position,
              i = r.colorMap,
              a = void 0 === i ? {} : i;
            o(this, e),
              this.position(n),
              (this.colorMap = {}),
              Object.keys(a).forEach(function (e) {
                var r = a[e];
                t.colorFace(e, r);
              });
          }
          return (
            n(e, null, [
              {
                key: "FromFaces",
                value: function (r) {
                  var t = new i.Vector([0, 0, 0]),
                    o = {},
                    n = !0,
                    u = !1,
                    c = void 0;
                  try {
                    for (var s, l = r[Symbol.iterator](); !(n = (s = l.next()).done); n = !0) {
                      var f = s.value;
                      if (f) {
                        var v = new a.Face(f);
                        t["set" + v.vector.getAxis().toUpperCase()](v.vector.getMagnitude()), (o[f.toLowerCase()] = v.toString()[0].toLowerCase());
                      }
                    }
                  } catch (e) {
                    (u = !0), (c = e);
                  } finally {
                    try {
                      !n && l.return && l.return();
                    } finally {
                      if (u) throw c;
                    }
                  }
                  return new e({ position: t.toArray(), colorMap: o });
                },
              },
            ]),
            n(e, [
              {
                key: "clone",
                value: function () {
                  return new e({ position: this.position(), colorMap: this.colorMap });
                },
              },
              {
                key: "position",
                value: function (e) {
                  if (void 0 === e) return this.vector ? this.vector.toArray() : this.vector;
                  this.vector = new i.Vector(e);
                },
              },
              {
                key: "getX",
                value: function () {
                  return this.vector.getX();
                },
              },
              {
                key: "getY",
                value: function () {
                  return this.vector.getY();
                },
              },
              {
                key: "getZ",
                value: function () {
                  return this.vector.getZ();
                },
              },
              {
                key: "isCorner",
                value: function () {
                  return 3 === Object.keys(this.colorMap).length;
                },
              },
              {
                key: "isEdge",
                value: function () {
                  return 2 === Object.keys(this.colorMap).length;
                },
              },
              {
                key: "isMiddle",
                value: function () {
                  return 1 === Object.keys(this.colorMap).length;
                },
              },
              {
                key: "colors",
                value: function () {
                  var e = this;
                  return Object.keys(this.colorMap).map(function (r) {
                    return e.colorMap[r];
                  });
                },
              },
              {
                key: "hasColor",
                value: function (e) {
                  e = e.toLowerCase();
                  var r = !0,
                    t = !1,
                    o = void 0;
                  try {
                    for (var n, i = Object.keys(this.colorMap)[Symbol.iterator](); !(r = (n = i.next()).done); r = !0) {
                      var a = n.value;
                      if (this.colorMap[a] === e) return !0;
                    }
                  } catch (e) {
                    (t = !0), (o = e);
                  } finally {
                    try {
                      !r && i.return && i.return();
                    } finally {
                      if (t) throw o;
                    }
                  }
                  return !1;
                },
              },
              {
                key: "hasFace",
                value: function (e) {
                  return (e = e.toLowerCase()), Object.keys(this.colorMap).includes(e);
                },
              },
              {
                key: "colorFace",
                value: function (e, r) {
                  return (e = e.toLowerCase()), (r = r.toLowerCase()), (this.colorMap[e] = r), this;
                },
              },
              {
                key: "getColorOfFace",
                value: function (e) {
                  return (e = e.toLowerCase()), this.colorMap[e];
                },
              },
              {
                key: "getFaceOfColor",
                value: function (e) {
                  var r = this;
                  return (
                    (e = e.toLowerCase()),
                    Object.keys(this.colorMap).find(function (t) {
                      return r.colorMap[t] === e;
                    })
                  );
                },
              },
              {
                key: "faces",
                value: function () {
                  return Object.keys(this.colorMap);
                },
              },
              {
                key: "rotate",
                value: function (e, r) {
                  var t = this;
                  this.vector.rotate(e, r);
                  var o = {},
                    n = !0,
                    i = !1,
                    u = void 0;
                  try {
                    for (var c, s = Object.keys(this.colorMap)[Symbol.iterator](); !(n = (c = s.next()).done); n = !0) {
                      var l = c.value,
                        f = this.colorMap[l],
                        v = new a.Face(l),
                        m = v.rotate(e, r).normal().join(" "),
                        h = a.Face.FromNormal(m).toString().toLowerCase();
                      o[h] = f;
                    }
                  } catch (e) {
                    (i = !0), (u = e);
                  } finally {
                    try {
                      !n && s.return && s.return();
                    } finally {
                      if (i) throw u;
                    }
                  }
                  (this.colorMap = {}),
                    Object.keys(o).forEach(function (e) {
                      return t.colorFace(e, o[e]);
                    });
                },
              },
            ]),
            e
          );
        })();
      r.Cubie = u;
    },
    function (e, r, t) {
      "use strict";
      function o(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.Face = void 0);
      var n = (function () {
          function e(e, r) {
            for (var t = 0; t < r.length; t++) {
              var o = r[t];
              (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
          }
          return function (r, t, o) {
            return t && e(r.prototype, t), o && e(r, o), r;
          };
        })(),
        i = t(4),
        a = { front: "0 0 1", right: "1 0 0", up: "0 1 0", down: "0 -1 0", left: "-1 0 0", back: "0 0 -1" },
        u = (function () {
          function e(r) {
            if ((o(this, e), "string" != typeof r)) throw new Error('"face" must be a string (received: ' + r + ")");
            (r = r.toLowerCase()), (this.vector = i.Vector.FromString(a[r]));
          }
          return (
            n(e, null, [
              {
                key: "FromNormal",
                value: function (r) {
                  return "string" == typeof r && (r = i.Vector.FromString(r).toArray()), new e(e.getFace(r));
                },
              },
              {
                key: "getNormal",
                value: function (e) {
                  return i.Vector.FromString(a[e]).toArray();
                },
              },
              {
                key: "getFace",
                value: function (e) {
                  "string" == typeof e && (e = i.Vector.FromString(e).toArray());
                  var r = !0,
                    t = !1,
                    o = void 0;
                  try {
                    for (var n, u = Object.keys(a)[Symbol.iterator](); !(r = (n = u.next()).done); r = !0) {
                      var c = n.value;
                      if (e.join(" ") === a[c]) return c;
                    }
                  } catch (e) {
                    (t = !0), (o = e);
                  } finally {
                    try {
                      !r && u.return && u.return();
                    } finally {
                      if (t) throw o;
                    }
                  }
                },
              },
            ]),
            n(e, [
              {
                key: "normal",
                value: function () {
                  return this.vector.toArray();
                },
              },
              {
                key: "toString",
                value: function () {
                  return e.getFace(this.normal());
                },
              },
              {
                key: "orientTo",
                value: function (r) {
                  "string" == typeof r && (r = new e(r));
                  var t = i.Vector.getRotationFromNormals(this.normal(), r.normal()),
                    o = t.axis,
                    n = t.angle;
                  return this.vector.rotate(o, n), this;
                },
              },
              {
                key: "rotate",
                value: function (e, r) {
                  return this.vector.rotate(e, r), this;
                },
              },
            ]),
            e
          );
        })();
      (u.FRONT = new u("FRONT")), (u.RIGHT = new u("RIGHT")), (u.UP = new u("UP")), (u.DOWN = new u("DOWN")), (u.LEFT = new u("LEFT")), (u.BACK = new u("BACK")), (r.Face = u);
    },
    function (e, r, t) {
      "use strict";
      function o(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      function n(e, r) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !r || ("object" != typeof r && "function" != typeof r) ? e : r;
      }
      function i(e, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
        (e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : (e.__proto__ = r));
      }
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.CrossSolver = void 0);
      var a = (function () {
          function e(e, r) {
            for (var t = 0; t < r.length; t++) {
              var o = r[t];
              (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
          }
          return function (r, t, o) {
            return t && e(r.prototype, t), o && e(r, o), r;
          };
        })(),
        u = t(2),
        c = t(1),
        s = t(0),
        l = function (e) {
          return c.RubiksCube.reverseMoves(e);
        },
        f = (function (e) {
          function r() {
            var e;
            o(this, r);
            for (var t = arguments.length, i = Array(t), a = 0; a < t; a++) i[a] = arguments[a];
            var u = n(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [this].concat(i)));
            return (u.phase = "cross"), u;
          }
          return (
            i(r, e),
            a(r, [
              {
                key: "solve",
                value: function () {
                  var e = this._getCrossEdges(),
                    r = !0,
                    t = !1,
                    o = void 0;
                  try {
                    for (var n, i = e[Symbol.iterator](); !(r = (n = i.next()).done); r = !0) {
                      var a = n.value,
                        u = this._solve({ edge: a });
                      this.partitions.push(u);
                    }
                  } catch (e) {
                    (t = !0), (o = e);
                  } finally {
                    try {
                      !r && i.return && i.return();
                    } finally {
                      if (t) throw o;
                    }
                  }
                  return this.partitions;
                },
              },
              {
                key: "isSolved",
                value: function () {
                  var e = this._getCrossEdges(),
                    r = !0,
                    t = !1,
                    o = void 0;
                  try {
                    for (var n, i = e[Symbol.iterator](); !(r = (n = i.next()).done); r = !0) {
                      var a = n.value;
                      if (!this.isEdgeSolved(a)) return !1;
                    }
                  } catch (e) {
                    (t = !0), (o = e);
                  } finally {
                    try {
                      !r && i.return && i.return();
                    } finally {
                      if (t) throw o;
                    }
                  }
                  return !0;
                },
              },
              {
                key: "isEdgeSolved",
                value: function (e) {
                  var r = e.colors().find(function (e) {
                      return "u" !== e;
                    }),
                    t = e.faces().find(function (e) {
                      return "up" !== e;
                    }),
                    o = t[0] === r;
                  return "u" === e.getColorOfFace("up") && o;
                },
              },
              {
                key: "_getCrossEdges",
                value: function () {
                  return this.cube.edges().filter(function (e) {
                    return e.hasColor("u");
                  });
                },
              },
              {
                key: "_getCaseNumber",
                value: function (e) {
                  var r = e.edge;
                  if ("u" === r.getColorOfFace("up")) return 1;
                  if ("u" === r.getColorOfFace("down")) return 2;
                  if (r.faces().includes("up")) return 3;
                  if (r.faces().includes("down")) return 4;
                  var t = r.getFaceOfColor("u"),
                    o = r.getFaceOfColor(
                      r.colors().find(function (e) {
                        return "u" !== e;
                      })
                    ),
                    n = (0, s.getDirectionFromFaces)(t, o, { up: "up" });
                  return "right" === n ? 5 : "left" === n ? 6 : void 0;
                },
              },
              {
                key: "_solveCase1",
                value: function (e) {
                  var r = e.edge;
                  if (!this.isEdgeSolved(r)) {
                    var t = r.faces().find(function (e) {
                      return "up" !== e;
                    });
                    this.move(t + " " + t, { upperCase: !0 }), this._solveCase2({ edge: r });
                  }
                },
              },
              {
                key: "_solveCase2",
                value: function (e) {
                  var r = e.edge,
                    t = this._case1And2Helper({ edge: r }, 2);
                  this.move(t, { upperCase: !0 });
                },
              },
              {
                key: "_solveCase3",
                value: function (e) {
                  var r = e.edge,
                    t = this._case3And4Helper({ edge: r }, 3);
                  this.move(t, { upperCase: !0 }), this._solveCase5({ edge: r });
                },
              },
              {
                key: "_solveCase4",
                value: function (e) {
                  var r = e.edge,
                    t = (0, s.getRotationFromTo)("down", r.getFaceOfColor("u"), (0, s.getFaceOfMove)(r.getColorOfFace("down")));
                  this.move(t, { upperCase: !0 });
                  var o = l(r.getFaceOfColor("u"));
                  this.move(o, { upperCase: !0 }), this._solveCase5({ edge: r });
                },
              },
              {
                key: "_solveCase5",
                value: function (e) {
                  var r = e.edge,
                    t = this._case5And6Helper({ edge: r }, 5);
                  this.move(t, { upperCase: !0 });
                },
              },
              {
                key: "_solveCase6",
                value: function (e) {
                  var r = e.edge,
                    t = this._case5And6Helper({ edge: r }, 6);
                  this.move(t, { upperCase: !0 });
                },
              },
              {
                key: "_case1And2Helper",
                value: function (e, r) {
                  var t = e.edge,
                    o = 1 === r ? "up" : "down",
                    n = t.faces().find(function (e) {
                      return e !== o;
                    }),
                    i = (0, s.getFaceOfMove)(t.getColorOfFace(n)),
                    a = (0, s.getRotationFromTo)(o, n, i);
                  if (2 === r) {
                    var u = (0, s.getMoveOfFace)(i);
                    a += " " + u + " " + u;
                  }
                  return a;
                },
              },
              {
                key: "_case3And4Helper",
                value: function (e, r) {
                  var t = e.edge,
                    o = t.faces().find(function (e) {
                      return !["up", "down"].includes(e);
                    });
                  return 4 === r && (o = l(o)), o;
                },
              },
              {
                key: "_case5And6Helper",
                value: function (e, r) {
                  var t = e.edge,
                    o = t.colors().find(function (e) {
                      return "u" !== e;
                    }),
                    n = t.getFaceOfColor(o),
                    i = (0, s.getFaceOfMove)(o),
                    a = (0, s.getRotationFromTo)("up", n, i),
                    u = (0, s.getMoveOfFace)(n);
                  return 6 === r && (u = l(u)), l(a) + " " + u + " " + a;
                },
              },
              {
                key: "_getPartitionBefore",
                value: function (e) {
                  return { edge: e.edge.clone() };
                },
              },
              {
                key: "_getPartitionAfter",
                value: function (e) {
                  return { edge: e.edge };
                },
              },
            ]),
            r
          );
        })(u.BaseSolver);
      r.CrossSolver = f;
    },
    function (e, r, t) {
      "use strict";
      function o(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      function n(e, r) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !r || ("object" != typeof r && "function" != typeof r) ? e : r;
      }
      function i(e, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
        (e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : (e.__proto__ = r));
      }
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.F2LBaseSolver = void 0);
      var a = (function () {
          function e(e, r) {
            for (var t = 0; t < r.length; t++) {
              var o = r[t];
              (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
          }
          return function (r, t, o) {
            return t && e(r.prototype, t), o && e(r, o), r;
          };
        })(),
        u = t(2),
        c = t(1),
        s = t(0),
        l = function (e) {
          return c.RubiksCube.reverseMoves(e);
        },
        f = (function (e) {
          function r() {
            var e;
            o(this, r);
            for (var t = arguments.length, i = Array(t), a = 0; a < t; a++) i[a] = arguments[a];
            var u = n(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [this].concat(i)));
            return (u.phase = "f2l"), u;
          }
          return (
            i(r, e),
            a(r, [
              {
                key: "colorsMatch",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge,
                    o = t.colors();
                  return !(!r.colors().includes(o[0]) || !r.colors().includes(o[1]));
                },
              },
              {
                key: "isPairSolved",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge;
                  if (!this.isPairMatched({ corner: r, edge: t })) return !1;
                  if ("up" !== r.getFaceOfColor("u")) return !1;
                  var o = !0,
                    n = !1,
                    i = void 0;
                  try {
                    for (var a, u = t.colors()[Symbol.iterator](); !(o = (a = u.next()).done); o = !0) {
                      var c = a.value;
                      if (t.getFaceOfColor(c) !== (0, s.getFaceOfMove)(c)) return !1;
                    }
                  } catch (e) {
                    (n = !0), (i = e);
                  } finally {
                    try {
                      !o && u.return && u.return();
                    } finally {
                      if (n) throw i;
                    }
                  }
                  return !0;
                },
              },
              {
                key: "isPairMatched",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge;
                  if (!this.colorsMatch({ corner: r, edge: t })) return !1;
                  var o = !0,
                    n = !1,
                    i = void 0;
                  try {
                    for (var a, u = t.colors()[Symbol.iterator](); !(o = (a = u.next()).done); o = !0) {
                      var c = a.value;
                      if (r.getFaceOfColor(c) !== t.getFaceOfColor(c)) return !1;
                    }
                  } catch (e) {
                    (n = !0), (i = e);
                  } finally {
                    try {
                      !o && u.return && u.return();
                    } finally {
                      if (n) throw i;
                    }
                  }
                  return !0;
                },
              },
              {
                key: "isPairSeparated",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge;
                  if (!this.colorsMatch({ corner: r, edge: t })) return !1;
                  if (["up", "down"].includes(r.getFaceOfColor("u"))) return !1;
                  if (!t.faces().includes("down")) return !1;
                  var o = r.colors().find(function (e) {
                    return "u" !== e && "down" !== r.getFaceOfColor(e);
                  });
                  return "down" === t.getFaceOfColor(o) && "back" === (0, s.getDirectionFromFaces)(r.getFaceOfColor(o), t.getFaceOfColor(r.getColorOfFace("down")), { up: "up" });
                },
              },
              {
                key: "solveMatchedPair",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge;
                  if (!this.isPairMatched({ corner: r, edge: t })) throw new Error("Pair is not matched");
                  var o = t.colors().find(function (e) {
                      return "down" !== t.getFaceOfColor(e);
                    }),
                    n = "left" === (0, s.getDirectionFromFaces)(t.getFaceOfColor(o), r.getFaceOfColor("u"), { up: "down" }),
                    i = (0, s.getFaceOfMove)(o),
                    a = r.getFaceOfColor(o),
                    u = (0, s.getFaceFromDirection)(i, n ? "left" : "right", { up: "down" }),
                    c = (0, s.getRotationFromTo)("down", a, u),
                    f = n ? i : l(i),
                    v = n ? "DPrime" : "D",
                    m = [c, f, v, l(f)].join(" ");
                  return this.move(m, { upperCase: !0 }), m;
                },
              },
              {
                key: "solveSeparatedPair",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge;
                  if (!this.isPairSeparated({ corner: r, edge: t })) throw new Error("Pair is not separated");
                  var o = t.colors().find(function (e) {
                      return "down" !== t.getFaceOfColor(e);
                    }),
                    n = "LEFT" === (0, s.getDirectionFromFaces)(r.getFaceOfColor("u"), t.getFaceOfColor(o), { up: "down" }).toUpperCase(),
                    i = r.getFaceOfColor("u"),
                    a = (0, s.getFaceOfMove)(o),
                    u = (0, s.getRotationFromTo)("down", i, a),
                    c = (0, s.getMoveOfFace)(a);
                  c = n ? l(c) : c;
                  var f = n ? "DPrime" : "D",
                    v = [u, c, f, l(c)].join(" ");
                  return this.move(v, { upperCase: !0 }), v;
                },
              },
              {
                key: "_getPartitionBefore",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge;
                  return { corner: r.clone(), edge: t.clone() };
                },
              },
              {
                key: "_getPartitionAfter",
                value: function (e) {
                  return { corner: e.corner, edge: e.edge };
                },
              },
            ]),
            r
          );
        })(u.BaseSolver);
      r.F2LBaseSolver = f;
    },
    function (e, r, t) {
      "use strict";
      function o(e) {
        if (Array.isArray(e)) {
          for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
          return t;
        }
        return Array.from(e);
      }
      function n(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      function i(e, r) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !r || ("object" != typeof r && "function" != typeof r) ? e : r;
      }
      function a(e, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
        (e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : (e.__proto__ = r));
      }
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.F2LSolver = void 0);
      var u = (function () {
          function e(e, r) {
            for (var t = 0; t < r.length; t++) {
              var o = r[t];
              (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
          }
          return function (r, t, o) {
            return t && e(r.prototype, t), o && e(r, o), r;
          };
        })(),
        c = t(1),
        s = t(12),
        l = t(35),
        f = t(36),
        v = t(37),
        m = t(0),
        h = function (e) {
          return c.RubiksCube.reverseMoves(e);
        },
        p = (function (e) {
          function r() {
            var e;
            n(this, r);
            for (var t = arguments.length, o = Array(t), a = 0; a < t; a++) o[a] = arguments[a];
            var u = i(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [this].concat(o)));
            return (u.subCaseOptions = Object.assign(u.options, { _overrideAfterEach: !0 })), u;
          }
          return (
            a(r, e),
            u(r, [
              {
                key: "solve",
                value: function () {
                  var e = this;
                  return (
                    (this.partitions = []),
                    this.getAllPairs().forEach(function (r) {
                      var t = r.corner,
                        o = r.edge,
                        n = e._solve({ corner: t, edge: o });
                      e.partitions.push(n);
                    }),
                    this.partitions
                  );
                },
              },
              {
                key: "isSolved",
                value: function () {
                  var e = this.getAllPairs(),
                    r = !0,
                    t = !1,
                    o = void 0;
                  try {
                    for (var n, i = e[Symbol.iterator](); !(r = (n = i.next()).done); r = !0) {
                      var a = n.value;
                      if (!this.isPairSolved(a)) return !1;
                    }
                  } catch (e) {
                    (t = !0), (o = e);
                  } finally {
                    try {
                      !r && i.return && i.return();
                    } finally {
                      if (t) throw o;
                    }
                  }
                  return !0;
                },
              },
              {
                key: "getAllPairs",
                value: function () {
                  var e = this.cube.corners().filter(function (e) {
                      return e.hasColor("u");
                    }),
                    r = this.cube.edges().filter(function (e) {
                      return !e.hasColor("u") && !e.hasColor("d");
                    }),
                    t = [],
                    o = !0,
                    n = !1,
                    i = void 0;
                  try {
                    for (var a, u = r[Symbol.iterator](); !(o = (a = u.next()).done); o = !0)
                      !(function () {
                        var r = a.value,
                          o = e.find(function (e) {
                            var t = r.colors();
                            return e.hasColor(t[0]) && e.hasColor(t[1]);
                          });
                        t.push({ edge: r, corner: o });
                      })();
                  } catch (e) {
                    (n = !0), (i = e);
                  } finally {
                    try {
                      !o && u.return && u.return();
                    } finally {
                      if (n) throw i;
                    }
                  }
                  return t;
                },
              },
              {
                key: "_getCaseNumber",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge;
                  if (r.faces().includes("down")) {
                    if (t.faces().includes("down")) return 1;
                    if (!t.faces().includes("down") && !t.faces().includes("up")) return 2;
                  }
                  if (r.faces().includes("up")) {
                    if (t.faces().includes("down")) return 3;
                    if (!t.faces().includes("down") && !t.faces().includes("up")) return 4;
                  }
                  throw new Error("Could not find a top level F2L case");
                },
              },
              {
                key: "_solveCase1",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge,
                    o = new l.Case1Solver(this.cube, this.subCaseOptions),
                    n = o.solve({ corner: r, edge: t });
                  (this.totalMoves = n.moves), (this.partition.caseNumber = [this.partition.caseNumber, n.caseNumber]);
                },
              },
              {
                key: "_solveCase2",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge,
                    o = new f.Case2Solver(this.cube, this.subCaseOptions),
                    n = o.solve({ corner: r, edge: t });
                  (this.totalMoves = n.moves), (this.partition.caseNumber = [this.partition.caseNumber, n.caseNumber]);
                },
              },
              {
                key: "_solveCase3",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge,
                    o = new v.Case3Solver(this.cube, this.subCaseOptions),
                    n = o.solve({ corner: r, edge: t });
                  (this.totalMoves = n.moves), (this.partition.caseNumber = [this.partition.caseNumber, n.caseNumber]);
                },
              },
              {
                key: "_solveCase4",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge;
                  if (!this.isPairSolved({ corner: r, edge: t })) {
                    var n = void 0;
                    n = r.faces().includes(t.faces()[0]) && r.faces().includes(t.faces()[1]) ? new l.Case1Solver(this.cube, this.subCaseOptions) : new f.Case2Solver(this.cube, this.subCaseOptions);
                    var i = r.faces().filter(function (e) {
                        return "up" !== e;
                      }),
                      a = (0, m.getDirectionFromFaces)(i[0], i[1], { up: "down" }),
                      u = "right" === a ? i[1] : i[0];
                    this.move(u + " D " + h(u), { upperCase: !0 });
                    var c = n.solve({ corner: r, edge: t });
                    (this.partition.caseNumber = [this.partition.caseNumber, c.caseNumber]), (this.totalMoves = [].concat(o(this.totalMoves), o(c.moves)));
                  }
                },
              },
            ]),
            r
          );
        })(s.F2LBaseSolver);
      r.F2LSolver = p;
    },
    function (e, r, t) {
      "use strict";
      function o(e, r, t) {
        return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[r] = t), e;
      }
      function n(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      function i(e, r) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !r || ("object" != typeof r && "function" != typeof r) ? e : r;
      }
      function a(e, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
        (e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : (e.__proto__ = r));
      }
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.OLLSolver = void 0);
      var u = (function () {
          function e(e, r) {
            var t = [],
              o = !0,
              n = !1,
              i = void 0;
            try {
              for (var a, u = e[Symbol.iterator](); !(o = (a = u.next()).done) && (t.push(a.value), !r || t.length !== r); o = !0);
            } catch (e) {
              (n = !0), (i = e);
            } finally {
              try {
                !o && u.return && u.return();
              } finally {
                if (n) throw i;
              }
            }
            return t;
          }
          return function (r, t) {
            if (Array.isArray(r)) return r;
            if (Symbol.iterator in Object(r)) return e(r, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        })(),
        c = (function () {
          function e(e, r) {
            for (var t = 0; t < r.length; t++) {
              var o = r[t];
              (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
          }
          return function (r, t, o) {
            return t && e(r.prototype, t), o && e(r, o), r;
          };
        })(),
        s = (t(1), t(2)),
        l = t(0),
        f = "00000000",
        v = (function (e) {
          function r() {
            var e, t;
            n(this, r);
            for (var a = arguments.length, u = Array(a), c = 0; c < a; c++) u[c] = arguments[c];
            var s = i(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [this].concat(u)));
            return (
              (s.phase = "oll"),
              (s.algorithms =
                ((t = {}),
                o(t, f, ""),
                o(t, "21000110", "F R U RPrime UPrime FPrime"),
                o(t, "21211010", "F R U RPrime UPrime FPrime F R U RPrime UPrime FPrime"),
                o(t, "10201020", "R U2 RPrime UPrime R U RPrime UPrime R UPrime RPrime"),
                o(t, "01112000", "F U R UPrime RPrime FPrime"),
                o(t, "11102120", "F U R UPrime RPrime U R UPrime RPrime FPrime"),
                o(t, "11210000", "RPrime UPrime FPrime U F R"),
                o(t, "11102021", "FPrime LPrime UPrime L U LPrime UPrime L U F"),
                o(t, "10011110", "R L2 BPrime L BPrime LPrime B2 L BPrime L RPrime"),
                o(t, "00202121", "LPrime R2 B RPrime B R B2 RPrime B RPrime L"),
                o(t, "01111111", "F U R UPrime RPrime FPrime L F U FPrime UPrime LPrime"),
                o(t, "21212101", "F U R UPrime RPrime FPrime R B U BPrime UPrime RPrime"),
                o(t, "21211111", "F R U RPrime UPrime FPrime B U L UPrime LPrime BPrime"),
                o(t, "20201010", "R U2 R2 UPrime R2 UPrime R2 U2 R"),
                o(t, "01101110", "R B RPrime L U LPrime UPrime R BPrime RPrime"),
                o(t, "21002120", "LPrime BPrime L RPrime UPrime R U LPrime B L"),
                o(t, "21001100", "RPrime F R U RPrime UPrime FPrime U R"),
                o(t, "01000100", "R U RPrime UPrime MPrime U R UPrime rPrime"),
                o(t, "01010101", "M U R U RPrime UPrime M2 U R UPrime rPrime"),
                o(t, "10211021", "F R U RPrime UPrime R U RPrime UPrime FPrime B U L UPrime LPrime BPrime"),
                o(t, "11000120", "R U RPrime UPrime RPrime F R FPrime"),
                o(t, "10000020", "LPrime BPrime R B L BPrime RPrime B"),
                o(t, "20001000", "B LPrime BPrime R B L BPrime RPrime"),
                o(t, "00112001", "RPrime UPrime RPrime F R FPrime U R"),
                o(t, "21112111", "R U2 RPrime RPrime F R FPrime U2 RPrime F R FPrime"),
                o(t, "10002101", "R U2 RPrime RPrime F R FPrime R U2 RPrime"),
                o(t, "21110101", "M U R U RPrime UPrime MPrime RPrime F R FPrime"),
                o(t, "11212010", "F LPrime U2 L U2 L F2 LPrime F"),
                o(t, "01110020", "R U RPrime U R UPrime RPrime UPrime RPrime F R FPrime"),
                o(t, "10012100", "RPrime UPrime R UPrime RPrime U R U R BPrime RPrime B"),
                o(t, "10112021", "RPrime UPrime R UPrime RPrime U FPrime U F R"),
                o(t, "01110121", "F U R UPrime RPrime FPrime F U FPrime UPrime FPrime L F LPrime"),
                o(t, "01112101", "F U R UPrime RPrime FPrime B U BPrime UPrime SPrime U B UPrime bPrime"),
                o(t, "21212000", "lPrime U2 L U LPrime U l"),
                o(t, "01212020", "r U RPrime U R U2 rPrime"),
                o(t, "00202020", "R U RPrime U R U2 RPrime"),
                o(t, "10101000", "RPrime UPrime R URprime RPrime U2 R"),
                o(t, "01001021", "RPrime U R U2 RPrime UPrime FPrime U F U R"),
                o(t, "10200101", "R UPrime RPrime U2 R U B UPrime BPrime UPrime RPrime"),
                o(t, "21102011", "r U RPrime U R UPrime RPrime U R U2 rPrime"),
                o(t, "21112010", "lPrime UPrime L UPrime LPrime U L UPrime LPrime U2 l"),
                o(t, "11100011", "r U2 RPrime UPrime R UPrime rPrime"),
                o(t, "11012000", "F R UPrime RPrime UPrime R U RPrime FPrime"),
                o(t, "11001011", "lPrime UPrime L UPrime LPrime U2 l"),
                o(t, "01010000", "r U RPrime UPrime M U R UPrime RPrime"),
                o(t, "01002110", "R U RPrime UPrime BPrime RPrime F R FPrime B"),
                o(t, "01202120", "L FPrime LPrime UPrime L F LPrime FPrime U F"),
                o(t, "11001110", "RPrime F R U RPrime FPrime R F UPrime FPrime"),
                o(t, "10200000", "R2 D RPrime U2 R DPrime RPrime U2 RPrime"),
                o(t, "20112011", "RPrime U2 R2 U RPrime U R U2 BPrime RPrime B"),
                o(t, "10000121", "R U BPrime UPrime RPrime U R B RPrime"),
                o(t, "11000021", "RPrime UPrime F U R UPrime RPrime FPrime R"),
                o(t, "01100120", "L FPrime LPrime UPrime L U F UPrime LPrime"),
                o(t, "11112020", "RPrime F R2 FPrime U2 FPrime U2 F RPrime"),
                o(t, "20110100", "BPrime RPrime B LPrime BPrime R R BPrime RPrime B2 L"),
                o(t, "20100101", "B L BPrime R B L2 B L B2 RPrime"),
                o(t, "01101011", "FPrime UPrime F L FPrime LPrime U L F LPrime"),
                o(t, "21012020", "F U FPrime RPrime F R UPrime RPrime FPrime R"),
                t)),
              s
            );
          }
          return (
            a(r, e),
            c(r, [
              {
                key: "isSolved",
                value: function () {
                  return this.getOllString() === f;
                },
              },
              {
                key: "solve",
                value: function () {
                  return this._solve();
                },
              },
              {
                key: "_getCaseNumber",
                value: function () {
                  return this.getOllString();
                },
              },
              {
                key: "_solveCase",
                value: function (e) {
                  var r = this.findPattern(e),
                    t = this.getAlgorithm(r),
                    o = this._getFrontFace(e, r);
                  this.move(t, { orientation: { up: "down", front: o } });
                },
              },
              {
                key: "getOllString",
                value: function () {
                  var e = this,
                    r = [];
                  return (
                    this._getOllCubies().forEach(function (t) {
                      var o = e._getCubieOrientation(t);
                      r.push(o);
                    }),
                    r.join("")
                  );
                },
              },
              {
                key: "findPattern",
                value: function (e) {
                  void 0 === e && (e = this.getOllString());
                  for (var r = 0; r < 4; r++) {
                    if ("string" == typeof this.algorithms[e]) return e;
                    e = this._rotateOllStringLeft(e);
                  }
                  throw new Error('No pattern found for oll string "' + e + '"');
                },
              },
              {
                key: "getAlgorithm",
                value: function (e) {
                  if ((void 0 === e && (e = this.getPattern(e)), void 0 === this.algorithms[e])) throw new Error('No algorithm found for pattern "' + e + '"');
                  return this.algorithms[e];
                },
              },
              {
                key: "_getOllCubies",
                value: function () {
                  var e = this;
                  return [
                    ["front", "down", "right"],
                    ["front", "down"],
                    ["front", "down", "left"],
                    ["left", "down"],
                    ["left", "down", "back"],
                    ["back", "down"],
                    ["back", "down", "right"],
                    ["right", "down"],
                  ].map(function (r) {
                    return e.cube.getCubie(r);
                  });
                },
              },
              {
                key: "_getCubieOrientation",
                value: function (e) {
                  if ("d" === e.getColorOfFace("down")) return 0;
                  if (e.isEdge()) return 1;
                  var r = e.faces().filter(function (e) {
                      return "down" !== e;
                    }),
                    t = u(r, 2),
                    o = t[0],
                    n = t[1],
                    i = (0, l.getDirectionFromFaces)(o, n, { up: "down" }),
                    a = "right" === i ? n : o;
                  return "d" === e.getColorOfFace(a) ? 1 : 2;
                },
              },
              {
                key: "_getFrontFace",
                value: function (e, r) {
                  for (var t = ["front", "left", "back", "right"], o = 0; o < 4; o++) {
                    if (e === r) return t[o];
                    e = this._rotateOllStringLeft(e);
                  }
                  throw new Error('OLL string "' + e + '" does not resolve to the pattern "' + r + '"');
                },
              },
              {
                key: "_rotateOllStringLeft",
                value: function (e) {
                  return e.slice(2) + e.slice(0, 2);
                },
              },
              {
                key: "_getPartitionBefore",
                value: function () {
                  return this.getOllString();
                },
              },
              {
                key: "_getPartitionAfter",
                value: function () {
                  return null;
                },
              },
            ]),
            r
          );
        })(s.BaseSolver);
      r.OLLSolver = v;
    },
    function (e, r, t) {
      "use strict";
      function o(e) {
        if (Array.isArray(e)) {
          for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
          return t;
        }
        return Array.from(e);
      }
      function n(e, r, t) {
        return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[r] = t), e;
      }
      function i(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      function a(e, r) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !r || ("object" != typeof r && "function" != typeof r) ? e : r;
      }
      function u(e, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
        (e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : (e.__proto__ = r));
      }
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.PLLSolver = void 0);
      var c = (function () {
          function e(e, r) {
            for (var t = 0; t < r.length; t++) {
              var o = r[t];
              (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
          }
          return function (r, t, o) {
            return t && e(r.prototype, t), o && e(r, o), r;
          };
        })(),
        s = t(2),
        l = t(0),
        f = "0 0 0 0 0 0 0 0",
        v = (function (e) {
          function r() {
            var e, t;
            i(this, r);
            for (var o = arguments.length, u = Array(o), c = 0; c < o; c++) u[c] = arguments[c];
            var s = a(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [this].concat(u)));
            return (
              (s.phase = "pll"),
              (s.algorithms =
                ((t = {}),
                n(t, f, ""),
                n(t, "2 -1 1 -1 1 0 0 2", "R2 F2 RPrime BPrime R F2 RPrime B RPrime"),
                n(t, "-1 1 -1 2 2 0 0 1", "R BPrime R F2 RPrime B R F2 R2"),
                n(t, "1 -1 2 2 0 0 1 -1", "R UPrime R U R U R UPrime RPrime UPrime R2"),
                n(t, "-1 1 -1 1 0 0 2 2", "R2 U R U RPrime UPrime RPrime UPrime RPrime U RPrime"),
                n(t, "2 2 2 2 2 2 2 2", "M M U M M U2 M M U M M"),
                n(t, "0 1 1 1 1 0 2 2", "R U RPrime UPrime RPrime F R2 UPrime RPrime UPrime R U RPrime FPrime"),
                n(t, "1 0 2 0 1 0 0 0", "R U2 RPrime UPrime R U2 LPrime U RPrime UPrime L"),
                n(t, "0 2 2 0 1 1 1 1", "F R UPrime RPrime UPrime R U RPrime FPrime R U RPrime UPrime RPrime F R FPrime"),
                n(t, "1 -1 -1 2 -1 -1 1 0", "RPrime U2 R U2 RPrime F R U RPrime UPrime RPrime FPrime R2"),
                n(t, "0 1 -1 -1 2 -1 -1 1", "R UPrime RPrime UPrime R U R D RPrime UPrime R DPrime RPrime U2 RPrime"),
                n(t, "0 2 -1 -1 -1 -1 2 0", "RPrime U RPrime UPrime BPrime D BPrime DPrime B2 RPrime BPrime R B R"),
                n(t, "2 -1 -1 -1 -1 2 0 0", "RPrime UPrime FPrime R U RPrime UPrime RPrime F R2 UPrime RPrime UPrime R U RPrime U R"),
                n(t, "-1 2 2 2 -1 2 0 2", "L U LPrime B2 uPrime B UPrime BPrime U BPrime u B2"),
                n(t, "2 -1 2 0 2 -1 2 2", "RPrime UPrime R B2 u BPrime U B UPrime B uPrime B2"),
                n(t, "2 -1 1 1 0 1 1 -1", "R2 uPrime R UPrime R U RPrime u R2 B UPrime BPrime"),
                n(t, "1 0 1 1 -1 2 -1 1", "R2 u RPrime U RPrime UPrime R uPrime R2 FPrime U F"),
                n(t, "1 -1 -1 1 1 -1 -1 1", "U RPrime UPrime R UPrime R U R UPrime RPrime U R U R2 UPrime RPrime"),
                n(t, "0 1 0 0 0 1 0 2", "LPrime U2 L U LPrime U2 R UPrime L U RPrime"),
                n(t, "1 1 -1 -1 1 1 -1 -1", "R BPrime RPrime F R B RPrime FPrime R B RPrime F R BPrime RPrime FPrime"),
                n(t, "2 0 2 0 2 0 2 0", "R U RPrime U R U RPrime FPrime R U RPrime UPrime RPrime F R2 UPrime RPrime U2 R UPrime RPrime"),
                n(t, "0 2 0 2 0 2 0 2", "RPrime U R UPrime RPrime FPrime UPrime F R U RPrime F RPrime FPrime R UPrime R"),
                t)),
              s
            );
          }
          return (
            u(r, e),
            c(r, [
              {
                key: "solve",
                value: function () {
                  return this._solve();
                },
              },
              {
                key: "_getCaseNumber",
                value: function () {
                  return this.getPllString();
                },
              },
              {
                key: "_solveCase",
                value: function (e) {
                  var r = this.findPattern(e),
                    t = this.getAlgorithm(r),
                    o = this._getFrontFace(e, r);
                  this.move(t, { orientation: { up: "down", front: o } });
                  var n = this.cube.getCubie(["down", "front"]),
                    i = (0, l.getFaceOfMove)(n.getColorOfFace("front")),
                    a = (0, l.getRotationFromTo)("down", "front", i);
                  this.move(a);
                },
              },
              {
                key: "isSolved",
                value: function () {
                  return this.cube.isSolved();
                },
              },
              {
                key: "getPllString",
                value: function () {
                  for (var e = [], r = this._getPllCubies(), t = ["front", "left", "back", "right"], o = 0; o < r.length; o++) {
                    var n = r[o],
                      i = r[o + 1],
                      a = t[~~(o / 2)],
                      u = n.getColorOfFace(a);
                    i || (i = r[0]);
                    var c = i.getColorOfFace(a),
                      s = (0, l.getFaceOfMove)(u),
                      f = (0, l.getFaceOfMove)(c),
                      v = (0, l.getDirectionFromFaces)(s, f, { up: "down" });
                    "front" === v && (v = 0), "right" === v && (v = 1), "left" === v && (v = -1), "back" === v && (v = 2), e.push(v);
                  }
                  return e.join(" ");
                },
              },
              {
                key: "findPattern",
                value: function (e) {
                  var r = e;
                  void 0 === e && (e = this.getPllString());
                  for (var t = 0; t < 4; t++) {
                    if ("string" == typeof this.algorithms[e]) return e;
                    e = this._rotatePllStringLeft(e);
                  }
                  throw new Error('No pattern found for pll string "' + r + '"');
                },
              },
              {
                key: "getAlgorithm",
                value: function (e) {
                  if ((void 0 === e && (e = this.findPattern(e)), void 0 === this.algorithms[e])) throw new Error('No algorithm found for pattern "' + e + '"');
                  return this.algorithms[e];
                },
              },
              {
                key: "_getPllCubies",
                value: function () {
                  var e = this;
                  return [
                    ["front", "down", "right"],
                    ["front", "down"],
                    ["front", "down", "left"],
                    ["left", "down"],
                    ["left", "down", "back"],
                    ["back", "down"],
                    ["back", "down", "right"],
                    ["right", "down"],
                  ].map(function (r) {
                    return e.cube.getCubie(r);
                  });
                },
              },
              {
                key: "_getCubiePermutation",
                value: function (e) {
                  var r = e.faces().find(function (e) {
                      return "down" !== e;
                    }),
                    t = (0, l.getFaceOfMove)(e.getColorOfFace(r)),
                    o = (0, l.getRotationFromTo)("down", r, t);
                  o = o.toLowerCase();
                  return "" === o ? 0 : o.includes("prime") ? 1 : o.split(" ").length > 1 ? 2 : -1;
                },
              },
              {
                key: "_rotatePllStringLeft",
                value: function (e) {
                  var r = e.split(" ").map(function (e) {
                    return parseInt(e);
                  });
                  return [].concat(o(r.slice(2)), o(r.slice(0, 2))).join(" ");
                },
              },
              {
                key: "_getFrontFace",
                value: function (e, r) {
                  for (var t = ["front", "left", "back", "right"], o = 0; o < 4; o++) {
                    if (e === r) return t[o];
                    e = this._rotatePllStringLeft(e);
                  }
                  throw new Error('OLL string "' + e + '" does not resolve to the pattern "' + r + '"');
                },
              },
            ]),
            r
          );
        })(s.BaseSolver);
      r.PLLSolver = v;
    },
    function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.algorithmShortener = r.PLLSolver = r.OLLSolver = r.F2LSolver = r.CrossSolver = r.RubiksCube = r.Cubie = r.Solver = void 0);
      var o = t(9);
      Object.defineProperty(r, "Cubie", {
        enumerable: !0,
        get: function () {
          return o.Cubie;
        },
      });
      var n = t(1);
      Object.defineProperty(r, "RubiksCube", {
        enumerable: !0,
        get: function () {
          return n.RubiksCube;
        },
      });
      var i = t(11);
      Object.defineProperty(r, "CrossSolver", {
        enumerable: !0,
        get: function () {
          return i.CrossSolver;
        },
      });
      var a = t(13);
      Object.defineProperty(r, "F2LSolver", {
        enumerable: !0,
        get: function () {
          return a.F2LSolver;
        },
      });
      var u = t(14);
      Object.defineProperty(r, "OLLSolver", {
        enumerable: !0,
        get: function () {
          return u.OLLSolver;
        },
      });
      var c = t(15);
      Object.defineProperty(r, "PLLSolver", {
        enumerable: !0,
        get: function () {
          return c.PLLSolver;
        },
      });
      var s = t(3);
      Object.defineProperty(r, "algorithmShortener", {
        enumerable: !0,
        get: function () {
          return s.algorithmShortener;
        },
      });
      var l = t(33);
      (r.Solver = l.Solver),
        (r.default = function (e) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = new l.Solver(e, r);
          return t.solve(), r.partitioned ? t.getPartitions() : (0, s.algorithmShortener)(t.getMoves());
        });
    },
    function (e, r, t) {
      "use strict";
      (function (e) {
        function r() {
          var e = {
            modifiers: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] },
            colors: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], gray: [90, 39] },
            bgColors: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49] },
          };
          return (
            (e.colors.grey = e.colors.gray),
            Object.keys(e).forEach(function (r) {
              var t = e[r];
              Object.keys(t).forEach(function (r) {
                var o = t[r];
                e[r] = t[r] = { open: "[" + o[0] + "m", close: "[" + o[1] + "m" };
              }),
                Object.defineProperty(e, r, { value: t, enumerable: !1 });
            }),
            e
          );
        }
        Object.defineProperty(e, "exports", { enumerable: !0, get: r });
      }).call(r, t(32)(e));
    },
    function (e, r, t) {
      "use strict";
      function o(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      function n(e) {
        u && e && e();
      }
      var i = (function () {
          function e(e, r) {
            for (var t = 0; t < r.length; t++) {
              var o = r[t];
              (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
          }
          return function (r, t, o) {
            return t && e(r.prototype, t), o && e(r, o), r;
          };
        })(),
        a = void 0,
        u = void 0,
        c = {
          cancel: function () {
            return !1;
          },
          ignore: function () {
            return !1;
          },
        },
        s = (function () {
          function e(r, n) {
            o(this, e), (this.options = Object.assign({}, c, n)), this.options.DEBUG && ((a = t(20)), (u = n.DEBUG)), (this.input = r.slice()), (this.output = []);
          }
          return (
            i(e, [
              {
                key: "run",
                value: function () {
                  var e = this;
                  if (this.input.length <= 1) return this.input;
                  this.temp = [this.input.shift()];
                  for (var r = void 0, t = void 0, o = void 0; this.temp.length > 0; ) {
                    n(function () {
                      console.log(a.bold("========= START =========")), e._logInfo(), console.log();
                    });
                    var i = void 0,
                      u = void 0;
                    if (1 === this.temp.length) {
                      for (i = 0, u = this.input[i]; i < this.input.length && this.options.ignore(this.temp[0], u); ) u = this.input[++i];
                      i < this.input.length && this.temp.push(u);
                    }
                    if (
                      (n(function () {
                        return (o = e.temp.slice());
                      }),
                      0 === this.temp.length)
                    ) {
                      n(function () {
                        console.log(a.green("breaking")), console.log(a.bold("========= END =========")), console.log();
                      });
                      break;
                    }
                    1 !== this.temp.length
                      ? (this.options.compare(this.temp[0], this.temp[1])
                          ? (function () {
                              void 0 !== i && e.input.splice(i, 1);
                              var o = e.options.combine(e.temp[0], e.temp[1]);
                              n(function () {
                                (r = "Combining:"), (t = o);
                              }),
                                (e.temp = e.options.cancel(o) ? [] : [o]),
                                e.populateTempBackward(),
                                0 === e.temp.length && e.populateTempForward();
                            })()
                          : (this.output.push(this.temp.shift()),
                            void 0 !== i && (i > 0 ? (this.temp = this.input.splice(0, 1)) : this.input.splice(i, 1)),
                            n(function () {
                              return (r = "Skipping:");
                            })),
                        n(function () {
                          console.log(a.green(r), o), console.log(a.green("value:"), t), console.log(), e._logInfo(), console.log(a.bold("========= END =========")), console.log(), (r = null), (t = null), (o = null);
                        }))
                      : (this.output.push(this.temp.pop()),
                        this.populateTempForward(),
                        n(function () {
                          console.log(a.green("continuing")), e._logInfo(), console.log(a.bold("========= END =========")), console.log();
                        }));
                  }
                  return (
                    n(function () {
                      console.log(a.bold.green("========= FINAL =========")), e._logInfo(), console.log(a.bold.green("========= FINAL =========")), console.log();
                    }),
                    this.output
                  );
                },
              },
              {
                key: "populateTempBackward",
                value: function () {
                  this.output.length > 0 && this.temp.unshift(this.output.pop());
                },
              },
              {
                key: "populateTempForward",
                value: function () {
                  this.input.length > 0 && this.temp.push(this.input.shift());
                },
              },
              {
                key: "_logInfo",
                value: function () {
                  console.log(a.bold("output"), this.output), console.log(a.bold("temp"), this.temp), console.log(a.bold("input"), this.input);
                },
              },
            ]),
            e
          );
        })();
      e.exports = s;
    },
    function (e, r, t) {
      "use strict";
      function o(e, r) {
        if (!e) throw new Error("Why are you even importing this.");
        if (!r.compare) throw new Error("options.compare callback must be present");
        if (!r.combine) throw new Error("options.combine callback must be present");
      }
      var n = t(18);
      e.exports = function (e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return o(e, r), new n(e, r).run();
      };
    },
    function (e, r, t) {
      "use strict";
      (function (r) {
        function o(e) {
          this.enabled = e && void 0 !== e.enabled ? e.enabled : l;
        }
        function n(e) {
          var r = function e() {
            return i.apply(e, arguments);
          };
          return (r._styles = e), (r.enabled = this.enabled), (r.__proto__ = h), r;
        }
        function i() {
          var e = arguments,
            r = e.length,
            t = 0 !== r && String(arguments[0]);
          if (r > 1) for (var o = 1; o < r; o++) t += " " + e[o];
          if (!this.enabled || !t) return t;
          var n = this._styles,
            i = n.length,
            a = u.dim.open;
          for (!v || (-1 === n.indexOf("gray") && -1 === n.indexOf("grey")) || (u.dim.open = ""); i--; ) {
            var c = u[n[i]];
            t = c.open + t.replace(c.closeRe, c.open) + c.close;
          }
          return (u.dim.open = a), t;
        }
        var a = t(21),
          u = t(17),
          c = t(30),
          s = t(29),
          l = t(31),
          f = Object.defineProperties,
          v = "win32" === r.platform && !/^xterm/i.test(r.env.TERM);
        v && (u.blue.open = "[94m");
        var m = (function () {
            var e = {};
            return (
              Object.keys(u).forEach(function (r) {
                (u[r].closeRe = new RegExp(a(u[r].close), "g")),
                  (e[r] = {
                    get: function () {
                      return n.call(this, this._styles.concat(r));
                    },
                  });
              }),
              e
            );
          })(),
          h = f(function () {}, m);
        f(
          o.prototype,
          (function () {
            var e = {};
            return (
              Object.keys(m).forEach(function (r) {
                e[r] = {
                  get: function () {
                    return n.call(this, [r]);
                  },
                };
              }),
              e
            );
          })()
        ),
          (e.exports = new o()),
          (e.exports.styles = u),
          (e.exports.hasColor = s),
          (e.exports.stripColor = c),
          (e.exports.supportsColor = l);
      }).call(r, t(8));
    },
    function (e, r, t) {
      "use strict";
      var o = /[|\\{}()[\]^$+*?.]/g;
      e.exports = function (e) {
        if ("string" != typeof e) throw new TypeError("Expected a string");
        return e.replace(o, "\\$&");
      };
    },
    function (e, r, t) {
      "use strict";
      function o(e, r) {
        var t = n(e[0], e[1], e[2]),
          o = n(r[0], r[1], r[2]);
        i(t, t), i(o, o);
        var u = a(t, o);
        return u > 1 ? 0 : Math.acos(u);
      }
      e.exports = o;
      var n = t(24),
        i = t(25),
        a = t(23);
    },
    function (e, r, t) {
      "use strict";
      function o(e, r) {
        return e[0] * r[0] + e[1] * r[1] + e[2] * r[2];
      }
      e.exports = o;
    },
    function (e, r, t) {
      "use strict";
      function o(e, r, t) {
        var o = new Float32Array(3);
        return (o[0] = e), (o[1] = r), (o[2] = t), o;
      }
      e.exports = o;
    },
    function (e, r, t) {
      "use strict";
      function o(e, r) {
        var t = r[0],
          o = r[1],
          n = r[2],
          i = t * t + o * o + n * n;
        return i > 0 && ((i = 1 / Math.sqrt(i)), (e[0] = r[0] * i), (e[1] = r[1] * i), (e[2] = r[2] * i)), e;
      }
      e.exports = o;
    },
    function (e, r, t) {
      "use strict";
      function o(e, r, t, o) {
        var n = t[1],
          i = t[2],
          a = r[1] - n,
          u = r[2] - i,
          c = Math.sin(o),
          s = Math.cos(o);
        return (e[0] = r[0]), (e[1] = n + a * s - u * c), (e[2] = i + a * c + u * s), e;
      }
      e.exports = o;
    },
    function (e, r, t) {
      "use strict";
      function o(e, r, t, o) {
        var n = t[0],
          i = t[2],
          a = r[0] - n,
          u = r[2] - i,
          c = Math.sin(o),
          s = Math.cos(o);
        return (e[0] = n + u * c + a * s), (e[1] = r[1]), (e[2] = i + u * s - a * c), e;
      }
      e.exports = o;
    },
    function (e, r, t) {
      "use strict";
      function o(e, r, t, o) {
        var n = t[0],
          i = t[1],
          a = r[0] - n,
          u = r[1] - i,
          c = Math.sin(o),
          s = Math.cos(o);
        return (e[0] = n + a * s - u * c), (e[1] = i + a * c + u * s), (e[2] = r[2]), e;
      }
      e.exports = o;
    },
    function (e, r, t) {
      "use strict";
      var o = t(6),
        n = new RegExp(o().source);
      e.exports = n.test.bind(n);
    },
    function (e, r, t) {
      "use strict";
      var o = t(6)();
      e.exports = function (e) {
        return "string" == typeof e ? e.replace(o, "") : e;
      };
    },
    function (e, r, t) {
      "use strict";
      (function (r) {
        var t = r.argv,
          o = t.indexOf("--"),
          n = function (e) {
            e = "--" + e;
            var r = t.indexOf(e);
            return -1 !== r && (-1 === o || r < o);
          };
        e.exports = (function () {
          return (
            "FORCE_COLOR" in r.env ||
            (!(n("no-color") || n("no-colors") || n("color=false")) &&
              (!!(n("color") || n("colors") || n("color=true") || n("color=always")) || (!(r.stdout && !r.stdout.isTTY) && ("win32" === r.platform || "COLORTERM" in r.env || ("dumb" !== r.env.TERM && !!/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(r.env.TERM))))))
          );
        })();
      }).call(r, t(8));
    },
    function (e, r, t) {
      "use strict";
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function (e, r, t) {
      "use strict";
      function o(e) {
        if (Array.isArray(e)) {
          for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
          return t;
        }
        return Array.from(e);
      }
      function n(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.Solver = void 0);
      var i = (function () {
          function e(e, r) {
            for (var t = 0; t < r.length; t++) {
              var o = r[t];
              (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
          }
          return function (r, t, o) {
            return t && e(r.prototype, t), o && e(r, o), r;
          };
        })(),
        a = t(1),
        u = t(11),
        c = t(13),
        s = t(14),
        l = t(15),
        f = t(0),
        v = t(3),
        m = (function () {
          function e(r, t) {
            var o = this;
            if ((n(this, e), r instanceof a.RubiksCube)) this.cube = r;
            else {
              if ("string" != typeof r) throw new Error('"cubeState" is not a valid cubeState. Please provide a list of scramble moves or a string representing a cube state');
              r.split(" ").length > 1 || r.length <= 6 ? ((this.cube = a.RubiksCube.Solved()), this.cube.move(r)) : (this.cube = new a.RubiksCube(r));
            }
            (this.options = t),
              (this.phases = ["cross", "f2l", "oll", "pll"]),
              (this.progress = {}),
              this.phases.forEach(function (e) {
                return (o.progress[e] = []);
              });
            var i = function (e, r) {
              o._updateProgress(e, r);
            };
            (this.currentPhase = null),
              (this.currentSolver = null),
              (this.crossSolver = new u.CrossSolver(this.cube, this.options)),
              (this.f2lSolver = new c.F2LSolver(this.cube, this.options)),
              (this.ollSolver = new s.OLLSolver(this.cube, this.options)),
              (this.pllSolver = new l.PLLSolver(this.cube, this.options)),
              this.afterEach("all", i);
          }
          return (
            i(e, [
              {
                key: "afterEach",
                value: function (e, r) {
                  if (("function" == typeof e ? ((r = e), (e = "all")) : "string" == typeof e && (e = "all" === e ? this.phases.slice() : [e]), "function" != typeof r)) throw new Error('"afterEach" callback is not a function.');
                  var t = !0,
                    o = !1,
                    n = void 0;
                  try {
                    for (var i, a = e[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                      var u = i.value;
                      if (!this.phases.includes(u)) throw new Error('Phase "' + u + '" isn\'t recognized. Please specify "cross", "f2l", "oll", "pll", or "all".');
                    }
                  } catch (e) {
                    (o = !0), (n = e);
                  } finally {
                    try {
                      !t && a.return && a.return();
                    } finally {
                      if (o) throw n;
                    }
                  }
                  var c = !0,
                    s = !1,
                    l = void 0;
                  try {
                    for (var f, v = e[Symbol.iterator](); !(c = (f = v.next()).done); c = !0) {
                      this[f.value + "Solver"].afterEach(r);
                    }
                  } catch (e) {
                    (s = !0), (l = e);
                  } finally {
                    try {
                      !c && v.return && v.return();
                    } finally {
                      if (s) throw l;
                    }
                  }
                },
              },
              {
                key: "solve",
                value: function () {
                  (this.currentPhase = "cross"),
                    (this.currentSolver = this.crossSolver),
                    this.crossSolver.solve(),
                    (this.currentPhase = "f2l"),
                    (this.currentSolver = this.f2lSolver),
                    this.f2lSolver.solve(),
                    (this.currentPhase = "oll"),
                    (this.currentSolver = this.ollSolver),
                    this.ollSolver.solve(),
                    (this.currentPhase = "pll"),
                    (this.currentSolver = this.pllSolver),
                    this.pllSolver.solve();
                },
              },
              {
                key: "getMoves",
                value: function () {
                  var e = this,
                    r = [];
                  return (
                    Object.keys(this.progress).forEach(function (t) {
                      e.progress[t].forEach(function (e) {
                        var t;
                        return (t = r).push.apply(t, o(e.moves));
                      });
                    }),
                    (r = (0, f.normalizeNotations)(r)),
                    r.join(" ")
                  );
                },
              },
              {
                key: "getPartitions",
                value: function () {
                  var e = this,
                    r = {};
                  return (
                    Object.keys(this.progress).forEach(function (t) {
                      var o = e.progress[t];
                      if (1 === o.length) r[t] = (0, v.algorithmShortener)(o[0].moves);
                      else {
                        var n = [];
                        e.progress[t].forEach(function (e) {
                          n.push((0, v.algorithmShortener)(e.moves));
                        }),
                          (r[t] = n);
                      }
                    }),
                    r
                  );
                },
              },
              {
                key: "isCrossEdgeSolved",
                value: function (e) {
                  return this.crossSolver.isEdgeSolved(e);
                },
              },
              {
                key: "isF2LPairSolved",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge;
                  return this.f2lSolver.isPairSolved({ corner: r, edge: t });
                },
              },
              {
                key: "isOLLSolved",
                value: function () {
                  return this.ollSolver.isSolved();
                },
              },
              {
                key: "isPLLSolved",
                value: function () {
                  return this.pllSolver.isSolved();
                },
              },
              {
                key: "_updateProgress",
                value: function (e, r) {
                  this.progress[r].push(e);
                },
              },
            ]),
            e
          );
        })();
      r.Solver = m;
    },
    function (e, r, t) {
      "use strict";
      var o = t(16),
        n = (function (e) {
          if (e && e.__esModule) return e;
          var r = {};
          if (null != e) for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
          return (r.default = e), r;
        })(o),
        i = n.default;
      delete n.default, Object.assign(i, n), (e.exports = i);
    },
    function (e, r, t) {
      "use strict";
      function o(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      function n(e, r) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !r || ("object" != typeof r && "function" != typeof r) ? e : r;
      }
      function i(e, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
        (e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : (e.__proto__ = r));
      }
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.Case1Solver = void 0);
      var a = (function () {
          function e(e, r) {
            for (var t = 0; t < r.length; t++) {
              var o = r[t];
              (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
          }
          return function (r, t, o) {
            return t && e(r.prototype, t), o && e(r, o), r;
          };
        })(),
        u = t(1),
        c = t(5),
        s = t(0),
        l = function (e) {
          return u.RubiksCube.reverseMoves(e);
        },
        f = (function (e) {
          function r() {
            return o(this, r), n(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
          }
          return (
            i(r, e),
            a(r, [
              {
                key: "_getCaseNumber",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge;
                  if (this.isPairMatched({ corner: r, edge: t })) return 1;
                  if (this.isPairSeparated({ corner: r, edge: t })) return 2;
                  var o = void 0;
                  t.faces().forEach(function (e) {
                    r.faces().includes(e) && "down" !== e && (o = e);
                  });
                  var n = r.colors().find(function (e) {
                      return "u" !== e && e !== r.getColorOfFace("down");
                    }),
                    i = t.colors().find(function (e) {
                      return "down" !== t.getFaceOfColor(e);
                    });
                  return "down" === r.getFaceOfColor("u") ? (o ? (r.getColorOfFace(o) === t.getColorOfFace(o) ? 3 : 4) : 5) : n === i ? (o ? 6 : 7) : o ? (o === r.getFaceOfColor("u") ? 8 : 9) : 10;
                },
              },
              {
                key: "_solveCase1",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge;
                  return this.solveMatchedPair({ corner: r, edge: t });
                },
              },
              {
                key: "_solveCase2",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge;
                  return this.solveSeparatedPair({ corner: r, edge: t });
                },
              },
              {
                key: "_solveCase3",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge,
                    o = t.faces().find(function (e) {
                      return "down" !== e;
                    }),
                    n = (0, s.getFaceOfMove)(t.getColorOfFace("down")),
                    i = (0, s.getFaceFromDirection)(n, "back", { up: "down" }),
                    a = r.getFaceOfColor(t.getColorOfFace("down")),
                    u = "left" === (0, s.getFaceFromDirection)(o, a, { up: "down" }),
                    c = (0, s.getRotationFromTo)("down", o, i),
                    f = (0, s.getFaceOfMove)(t.getColorOfFace(o)),
                    v = u ? "D" : "DPrime";
                  f = u ? f : l(f);
                  var m = c + " " + f + " " + f + " D D ";
                  (m += f + " " + v + " " + l(f) + " " + v + " " + f + " " + f), this.move(m, { upperCase: !0 });
                },
              },
              {
                key: "_solveCase4",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge,
                    o = t.faces().find(function (e) {
                      return "down" !== e;
                    }),
                    n = (0, s.getFaceOfMove)(t.getColorOfFace(o)),
                    i = r.faces().find(function (e) {
                      return !t.faces().includes(e);
                    }),
                    a = "left" === (0, s.getFaceFromDirection)(i, o, { up: "down" }),
                    u = (0, s.getRotationFromTo)("down", o, n),
                    c = (0, s.getMoveOfFace)(n);
                  (c = a ? l(c) : c), this.move(u + " " + c + " D D " + l(c), { upperCase: !0 }), this.solveSeparatedPair({ corner: r, edge: t });
                },
              },
              {
                key: "_solveCase5",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge,
                    o = t.colors().find(function (e) {
                      return "down" !== t.getFaceOfColor(e);
                    }),
                    n = t.colors().find(function (e) {
                      return "down" === t.getFaceOfColor(e);
                    }),
                    i = "right" === (0, s.getFaceFromDirection)((0, s.getFaceOfMove)(o), (0, s.getFaceOfMove)(n), { up: "down" }),
                    a = t.getFaceOfColor(o),
                    u = (0, s.getFaceOfMove)(o),
                    c = (0, s.getRotationFromTo)("down", a, u);
                  this.move(c, { upperCase: !0 });
                  var f = r.getFaceOfColor(o),
                    v = u,
                    m = (0, s.getRotationFromTo)("down", f, v),
                    h = i ? l(u) : u;
                  this.move(h + " " + m + " " + l(h), { upperCase: !0 }), this.solveMatchedPair({ corner: r, edge: t });
                },
              },
              {
                key: "_solveCase6",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge,
                    o = t.colors().find(function (e) {
                      return "down" !== t.getFaceOfColor(e);
                    }),
                    n = t.getFaceOfColor(o),
                    i = (0, s.getFaceOfMove)(t.getColorOfFace("down")),
                    a = "left" === (0, s.getDirectionFromFaces)(n, r.getFaceOfColor(o), { up: "down" }),
                    u = (0, s.getRotationFromTo)("down", n, i),
                    c = a ? i : l(i),
                    f = a ? "DPrime" : "D";
                  this.move(u + " " + c + " " + f + " " + l(c), { upperCase: !0 }), this.solveSeparatedPair({ corner: r, edge: t });
                },
              },
              {
                key: "_solveCase7",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge,
                    o = t.colors().find(function (e) {
                      return "down" !== t.getFaceOfColor(e);
                    }),
                    n = r.getFaceOfColor("u"),
                    i = (0, s.getFaceOfMove)(o),
                    a = "left" === (0, s.getDirectionFromFaces)(r.getFaceOfColor(o), r.getFaceOfColor("u"), { up: "down" }),
                    u = (0, s.getRotationFromTo)("down", n, i);
                  this.move(u, { upperCase: !0 });
                  var c = t.getFaceOfColor(o),
                    f = r.getFaceOfColor(o),
                    v = a ? r.getFaceOfColor("u") : l(r.getFaceOfColor("u")),
                    m = (0, s.getRotationFromTo)("down", c, f);
                  this.move(v + " " + m + " " + l(v), { upperCase: !0 }), this.solveMatchedPair({ corner: r, edge: t });
                },
              },
              {
                key: "_solveCase8",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge,
                    o = t.colors().find(function (e) {
                      return "down" !== t.getFaceOfColor(e);
                    }),
                    n = t.colors().find(function (e) {
                      return "down" === t.getFaceOfColor(e);
                    }),
                    i = r.getFaceOfColor(n),
                    a = (0, s.getFaceOfMove)(o),
                    u = "left" === (0, s.getDirectionFromFaces)(i, r.getFaceOfColor("u"), { up: "down" }),
                    c = (0, s.getRotationFromTo)("down", i, a),
                    f = u ? l(a) : a,
                    v = u ? "D" : "DPrime";
                  this.move(c + " " + f + " " + v + " " + l(f), { upperCase: !0 }), this.solveSeparatedPair({ corner: r, edge: t });
                },
              },
              {
                key: "_solveCase9",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge,
                    o = t.colors().find(function (e) {
                      return "down" === t.getFaceOfColor(e);
                    }),
                    n = r.getFaceOfColor("u"),
                    i = (0, s.getFaceOfMove)(o),
                    a = "left" === (0, s.getDirectionFromFaces)(r.getFaceOfColor(o), n, { up: "down" }),
                    u = (0, s.getRotationFromTo)("down", n, i),
                    c = a ? i : l(i);
                  this.move(u + " " + c + " D D " + l(c), { upperCase: !0 }), this.solveSeparatedPair({ corner: r, edge: t });
                },
              },
              {
                key: "_solveCase10",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge,
                    o = t.colors().find(function (e) {
                      return "down" !== t.getFaceOfColor(e);
                    }),
                    n = t.colors().find(function (e) {
                      return "down" === t.getFaceOfColor(e);
                    }),
                    i = r.getFaceOfColor("u"),
                    a = (0, s.getFaceOfMove)(n),
                    u = "left" === (0, s.getDirectionFromFaces)(r.getFaceOfColor(n), r.getFaceOfColor("u"), { up: "down" }),
                    c = (0, s.getRotationFromTo)("down", i, a);
                  this.move(c, { upperCase: !0 });
                  var f = t.getFaceOfColor(o),
                    v = (0, s.getFaceOfMove)(o),
                    m = u ? a : l(a),
                    h = (0, s.getRotationFromTo)("down", f, v);
                  this.move(m + " " + h + " " + l(m), { upperCase: !0 }), this.solveSeparatedPair({ corner: r, edge: t });
                },
              },
            ]),
            r
          );
        })(c.F2LCaseBaseSolver);
      r.Case1Solver = f;
    },
    function (e, r, t) {
      "use strict";
      function o(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      function n(e, r) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !r || ("object" != typeof r && "function" != typeof r) ? e : r;
      }
      function i(e, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
        (e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : (e.__proto__ = r));
      }
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.Case2Solver = void 0);
      var a = (function () {
          function e(e, r) {
            var t = [],
              o = !0,
              n = !1,
              i = void 0;
            try {
              for (var a, u = e[Symbol.iterator](); !(o = (a = u.next()).done) && (t.push(a.value), !r || t.length !== r); o = !0);
            } catch (e) {
              (n = !0), (i = e);
            } finally {
              try {
                !o && u.return && u.return();
              } finally {
                if (n) throw i;
              }
            }
            return t;
          }
          return function (r, t) {
            if (Array.isArray(r)) return r;
            if (Symbol.iterator in Object(r)) return e(r, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        })(),
        u = (function () {
          function e(e, r) {
            for (var t = 0; t < r.length; t++) {
              var o = r[t];
              (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
          }
          return function (r, t, o) {
            return t && e(r.prototype, t), o && e(r, o), r;
          };
        })(),
        c = t(1),
        s = t(5),
        l = t(0),
        f = function (e) {
          return c.RubiksCube.reverseMoves(e);
        },
        v = (function (e) {
          function r() {
            return o(this, r), n(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
          }
          return (
            i(r, e),
            u(r, [
              {
                key: "_getCaseNumber",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge,
                    o = r.faces().filter(function (e) {
                      return "down" !== e;
                    }),
                    n = t.faces(),
                    i = (0, l.getDirectionFromFaces)(o[0], o[1], { up: "down" }),
                    a = (0, l.getDirectionFromFaces)(n[0], n[1], { up: "down" }),
                    u = "right" === i ? o[1] : o[0],
                    c = "right" === a ? n[1] : n[0];
                  if ("down" === r.getFaceOfColor("u")) return r.getColorOfFace(u) === t.getColorOfFace(c) ? 1 : 2;
                  var s = r.colors().find(function (e) {
                    return "u" !== e && e !== r.getColorOfFace("down");
                  });
                  return s ===
                    ("left" === (0, l.getDirectionFromFaces)(r.getFaceOfColor(s), r.getFaceOfColor("u"), { up: "down" })
                      ? t.getColorOfFace(c)
                      : t.colors().find(function (e) {
                          return t.getFaceOfColor(e) !== c;
                        }))
                    ? 3
                    : 4;
                },
              },
              {
                key: "_solveCase1",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge,
                    o = t.colors()[0],
                    n = r.getFaceOfColor(o),
                    i = t.getFaceOfColor(o),
                    u = (0, l.getRotationFromTo)("down", n, i);
                  this.move(u, { upperCase: !0 });
                  var c = t.faces(),
                    s = a(c, 2),
                    v = s[0],
                    m = s[1],
                    h = (0, l.getDirectionFromFaces)(v, m, { up: "down" }),
                    p = "right" === h ? m : v;
                  this.move(p + " DPrime " + f(p), { upperCase: !0 }), this.solveMatchedPair({ corner: r, edge: t });
                },
              },
              {
                key: "_solveCase2",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge,
                    o = r.getFaceOfColor(t.colors()[0]),
                    n = t.getFaceOfColor(t.colors()[1]),
                    i = (0, l.getRotationFromTo)("down", o, n);
                  this.move(i, { upperCase: !0 });
                  var a = (0, l.getDirectionFromFaces)(t.faces()[0], t.faces()[1], { up: "down" }),
                    u = t.faces()["right" === a ? 1 : 0];
                  this.move(u + " D " + f(u) + " DPrime", { upperCase: !0 }), this.move(u + " D " + f(u), { upperCase: !0 }), this.solveSeparatedPair({ corner: r, edge: t });
                },
              },
              {
                key: "_solveCase3",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge;
                  this._case3And4Helper({ corner: r, edge: t }, 3);
                },
              },
              {
                key: "_solveCase4",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge;
                  this._case3And4Helper({ corner: r, edge: t }, 4);
                },
              },
              {
                key: "_case3And4Helper",
                value: function (e, r) {
                  var t = e.corner,
                    o = e.edge,
                    n = t.getColorOfFace("down"),
                    i = t.colors().find(function (e) {
                      return ![n, "u"].includes(e);
                    }),
                    a = 3 === r ? i : n,
                    u = "left" === (0, l.getDirectionFromFaces)(t.getFaceOfColor(i), t.getFaceOfColor("u"), { up: "down" }),
                    c = t.getFaceOfColor("u"),
                    s = o.getFaceOfColor(a),
                    v = (0, l.getRotationFromTo)("down", c, s),
                    m = u ? s : f(s),
                    h = u ? "DPrime" : "D";
                  (h = 4 === r ? f(h) : h), this.move(v + " " + m + " " + h + " " + f(m), { upperCase: !0 }), this["solve" + (3 === r ? "Matched" : "Separated") + "Pair"]({ corner: t, edge: o });
                },
              },
            ]),
            r
          );
        })(s.F2LCaseBaseSolver);
      r.Case2Solver = v;
    },
    function (e, r, t) {
      "use strict";
      function o(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
      }
      function n(e, r) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !r || ("object" != typeof r && "function" != typeof r) ? e : r;
      }
      function i(e, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
        (e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : (e.__proto__ = r));
      }
      Object.defineProperty(r, "__esModule", { value: !0 }), (r.Case3Solver = void 0);
      var a = (function () {
          function e(e, r) {
            var t = [],
              o = !0,
              n = !1,
              i = void 0;
            try {
              for (var a, u = e[Symbol.iterator](); !(o = (a = u.next()).done) && (t.push(a.value), !r || t.length !== r); o = !0);
            } catch (e) {
              (n = !0), (i = e);
            } finally {
              try {
                !o && u.return && u.return();
              } finally {
                if (n) throw i;
              }
            }
            return t;
          }
          return function (r, t) {
            if (Array.isArray(r)) return r;
            if (Symbol.iterator in Object(r)) return e(r, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        })(),
        u = (function () {
          function e(e, r) {
            for (var t = 0; t < r.length; t++) {
              var o = r[t];
              (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
          }
          return function (r, t, o) {
            return t && e(r.prototype, t), o && e(r, o), r;
          };
        })(),
        c = t(1),
        s = t(5),
        l = t(0),
        f = function (e) {
          return c.RubiksCube.reverseMoves(e);
        },
        v = (function (e) {
          function r() {
            return o(this, r), n(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
          }
          return (
            i(r, e),
            u(r, [
              {
                key: "_getCaseNumber",
                value: function (e) {
                  var r = e.corner;
                  e.edge;
                  return "u" === r.getColorOfFace("up") ? 1 : 2;
                },
              },
              {
                key: "_solveCase1",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge,
                    o = r.faces().filter(function (e) {
                      return "up" !== e;
                    }),
                    n = (0, l.getDirectionFromFaces)(o[0], o[1], { up: "down" }),
                    i = "right" === n ? o : o.reverse(),
                    u = a(i, 2),
                    c = u[0],
                    s = u[1],
                    v = t.faces().find(function (e) {
                      return "down" !== e;
                    }),
                    m = t.getColorOfFace(v),
                    h = (0, l.getFaceFromDirection)(r.getFaceOfColor(m), m === r.getColorOfFace(s) ? "right" : "left", { up: "down" }),
                    p = m === r.getColorOfFace(c),
                    g = (0, l.getRotationFromTo)("down", v, h),
                    d = p ? s : f(c),
                    y = p ? "DPrime" : "D";
                  this.move(g + " " + d + " " + y + " " + f(d), { upperCase: !0 }), this.solveMatchedPair({ corner: r, edge: t });
                },
              },
              {
                key: "_solveCase2",
                value: function (e) {
                  var r = e.corner,
                    t = e.edge,
                    o = r.colors().find(function (e) {
                      return "u" !== e && "up" !== r.getFaceOfColor(e);
                    }),
                    n = t.faces().find(function (e) {
                      return "down" !== e;
                    }),
                    i = t.getColorOfFace(n),
                    a = o !== i,
                    u = r.getFaceOfColor(a ? o : "u"),
                    c = (0, l.getRotationFromTo)("down", n, u),
                    s = "left" === (0, l.getDirectionFromFaces)(r.getFaceOfColor(o), r.getFaceOfColor("u"), { up: "down" }),
                    v = s ? "DPrime" : "D",
                    m = r.getFaceOfColor("u");
                  (m = s ? f(m) : m), this.move(c + " " + m + " " + v + " " + f(m), { upperCase: !0 }), this["solve" + (a ? "Matched" : "Separated") + "Pair"]({ corner: r, edge: t });
                },
              },
            ]),
            r
          );
        })(s.F2LCaseBaseSolver);
      r.Case3Solver = v;
    },
  ]);
});
