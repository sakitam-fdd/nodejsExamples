webpackJsonp([2], {
  18: function (t, a, e) {
    (function (t) {
      !function () {
        var a = function (t) {
          var a = t.split(",");
          return {x: a[0], y: a[1]}
        }, e = function (t, e) {
          var i = t.buslist[e], n = t.frominfo, r = a(n.lnglat), o = amap.favapi.toPixelXY2(r.x, r.y), s = t.toinfo,
            m = a(s.lnglat), d = amap.favapi.toPixelXY2(m.x, m.y),
            p = amap.favapi.md5fav(o.x, o.y, d.x, d.y, 2, i.alllength), f = amap.dirnew, c = {
              id: p,
              version: "1.0.0",
              route_type: "2",
              mDataLength: "0",
              type: "1",
              has_mid_poi: !1,
              method: f.policy + "",
              start_x: o.x + "",
              start_y: o.y + "",
              from_poi: {
                mCityCode: n.adcode || "",
                mCityName: amapcity.getname(n.adcode) || "",
                mId: n.id || "",
                mName: n.name || "",
                mAddr: n.address || "",
                mx: o.x + "",
                my: o.y + ""
              },
              end_x: d.x + "",
              end_y: d.y + "",
              to_poi: {
                mCityCode: s.adcode || 1e5,
                mCityName: amapcity.getname(s.adcode) || "",
                mId: s.id || "",
                mName: s.name || "",
                mAddr: s.address || "",
                mx: d.x + "",
                my: d.y + ""
              },
              route_name: "从 " + n.name + " 到 " + s.name,
              taxi_price: t.taxicost + "",
              route_len: i.alllength + "",
              mTotalLength: i.alllength + "",
              mStartWalkLength: "0",
              mEndWalkLength: "0",
              route_alias: "",
              mCostTime: i.expensetime + "",
              expense: i.expense + "",
              allfootlength: i.allfootlength + "",
              totaldriverlength: i.allbuslength,
              endfoottime: i.segmentlist[i.segmentlist.length - 1] && "walk" == i.segmentlist[i.segmentlist.length - 1].type ? i.segmentlist[i.segmentlist.length - 1].foottime + "" : "0",
              mSectionNum: i.transferNum + "",
              create_time: Math.floor((new Date).getTime() / 1e3)
            };
          return c
        };
        t.extend(amap, {favdir: {addBus: e}})
      }()
    }).call(a, e(1))
  }, 19: function (t, a) {
    !function () {
      var t = {
        addDirve: function (t, a, e) {
          this.idx = t.idx, t = t.data;
          var i = amap.dirnew;
          this.data = t;
          var n = t.frominfo, r = this.getModXY(n.lnglat), o = amap.favapi.toPixelXY2(r.x, r.y), s = t.toinfo,
            m = this.getModXY(s.lnglat), d = amap.favapi.toPixelXY2(m.x, m.y), p = i.via,
            f = (t.sortType, this.idx, t.path_list[a]), c = f.distance, l = f.strategy, v = f.drivetime,
            u = amap.favapi.md5fav(o.x, o.y, d.x, d.y, "1", c), h = "", g = {
              type: "1",
              version: "1.0",
              id: u,
              route_type: "1",
              method: i.policy,
              from_poi: {
                mCityCode: n.adcode || 1e5,
                mCityName: amapcity.getname(n.adcode) || "",
                mId: n.id || n.pguid || "startMarkerID",
                mAddr: n.address ? n.address : "暂无",
                mName: n.name,
                mx: o.x,
                my: o.y
              },
              to_poi: {
                mCityCode: s.adcode || 1e5,
                mCityName: amapcity.getname(s.adcode) || "",
                mId: s.id || s.pguid || "endMarkerID",
                mAddr: s.address ? s.address : "暂无",
                mName: s.name,
                mx: d.x,
                my: d.y
              },
              strategy: l,
              start_x: o.x,
              start_y: o.y,
              end_x: d.x,
              end_y: d.y,
              has_mid_poi: !!p.length,
              create_time: Math.floor((new Date).getTime() / 1e3),
              route_len: c,
              mCostTime: v
            };
          if (p.length) {
            for (var y = [], _ = 0; _ < p.length; _++) {
              var x = p[_];
              h += "途经" + x.name;
              var b = this.getModXY(x.lnglat);
              curDrive_xy = amap.favapi.toPixelXY2(b.x, b.y), y.push({
                mId: x.id,
                mName: x.name,
                mAddr: x.address ? x.address : "暂无",
                mCityCode: x.adcode || PCMAP.city.adcode,
                mCityName: x.name,
                mx: curDrive_xy.x,
                my: curDrive_xy.y
              })
            }
            h = "从" + n.name + h + "到" + s.name, g.mid_pois = y, g.route_name = h
          }
          return g
        }, getModXY: function (t) {
          var a = t.split(",");
          return {x: a[0] || "", y: a[1] || ""}
        }
      };
      amap.favCarObj = t
    }()
  }, 20: function (t, a, e) {
    (function (t) {
      !function () {
        var a = {
          addWalk: function (t, a) {
            t = t.data, this.data = t, this.start = t.frominfo;
            var e = this.getModXY(this.start.lnglat);
            this.start.x = e.x, this.start.y = e.y, this.end = t.toinfo;
            var i = this.getModXY(this.end.lnglat);
            return this.end.x = i.x, this.end.y = i.y, this.initNavigtionActionData(), this.validate = this._favofiteValidate(t), this.validate || (this.validate = this._drivingValidate(t, t.frominfo, t.toinfo)), this.produceFavoriteData()
          },
          getModXY: function (t) {
            var a = t.split(",");
            return {x: a[0] || "", y: a[1] || ""}
          },
          getValidateStatus: function () {
            return !!this.validate
          },
          _favofiteValidate: function (a) {
            return !(!t.isString(a.id) || 32 != a.id.length || (this.favorite = a, 0))
          },
          _favofiteChange: function (t) {
            for (var a = this, e = t.data, i = t.start, n = t.end, r = amap.favapi.toPixelXY2(i.x, i.y), o = amap.favapi.toPixelXY2(n.x, n.y), s = e.routes[0].distanceNum, m = "", d = {
              route_name: "从 " + i.name + " 到 " + n.name,
              start_x: r.x + "",
              start_y: r.y + "",
              end_x: o.x + "",
              end_y: o.y + "",
              method: "0",
              type: "1",
              route_type: "3",
              version: "1.0",
              mDataLength: "-1",
              mSectionNum: e.routes[0].steps.length + "",
              from_poi: {
                mCityCode: i.adcode || 1e5,
                mCityName: amapcity.getname(i.adcode) || "",
                mId: "startMarkerID",
                mAddr: i.address ? i.address : "暂无",
                mName: i.name,
                mx: r.x + "",
                my: r.y + ""
              },
              to_poi: {
                mCityCode: n.adcode || 1e5,
                mCityName: amapcity.getname(n.adcode) || "",
                mId: "endMarkerID",
                mAddr: n.address ? n.address : "暂无",
                mName: n.name,
                mx: o.x + "",
                my: o.y + ""
              },
              navigationSection: []
            }, p = 0; p < e.routes[0].steps.length; p++) {
              var f, c = e.routes[0].steps[p], l = [], v = this.getNavigtionActionNumber(c.action);
              f = c.road, "无名道路" !== f && "未知道路" !== f || (f = "null");
              for (var u = c.path, h = 0; h < u.length; h++) {
                var g = u[h], y = a.toPixelXY(g.lng, g.lat);
                l.push({x: y.x + "", y: y.y + ""})
              }
              var _ = {
                mNavigtionAction: v + "",
                mDataLength: "-1",
                mStreetName: f + "",
                mPathlength: c.distance + "",
                mPointNum: l.length + "",
                points: l
              };
              d.navigationSection.push(_)
            }
            return m = amap.favapi.md5fav(r.x, r.y, o.x, o.y, "1", s), d.id = d.item_id = m, d.route_len = d.mPathlength = s + "", this.favorite = d, d
          },
          produceFavoriteData: function () {
            return this._favofiteChange(this.driving)
          },
          _drivingValidate: function (t, a, e, i) {
            var n = !0;
            return (!t.routes || t.routes.length < 1) && (n = !1), i || (i = 0), n && (this.driving = {
              data: t,
              start: a,
              end: e,
              routeType: i
            }), n
          },
          _drivingChange: function (t) {
            var a = t.from_poi, e = t.to_poi, i = AF.Favorite.toLngLat(t.start_x, t.start_y),
              n = AF.Favorite.toLngLat(t.end_x, t.end_y), r = a.mAddr;
            r && "null" !== r || (r = "");
            var o = e.mAddr;
            o && "null" !== o || (o = "");
            for (var s = {
              start: {id: a.mId, name: a.mName, citycode: a.mCityCode, address: r, y: i.lat, x: i.lng},
              end: {id: e.mId, name: e.mName, citycode: e.mCityCode, address: o, y: n.lat, x: n.lng},
              data: {favorite: "favorite"}
            }, m = [], d = t.navigationSection, p = 0; p < d.length; p++) {
              var f = d[p], c = f.mStreetName, l = f.mPathlength, v = "",
                u = this.getNavigtionActionDescribe(f.mNavigtionAction);
              c && "null" !== c && "" !== c || (c = "未知道路");
              for (var h = 0; h < f.points.length; h++) {
                var g = f.points[h], y = AF.Favorite.toLngLat(g.x, g.y);
                v += y.lng + "," + y.lat, h < f.points.length - 1 && (v += ";")
              }
              var _ = {
                locationCode: "",
                form: "",
                coor: v,
                direction: "",
                roadLength: l + "米",
                action: u,
                grade: "",
                textInfo: "",
                accessorialInfo: "",
                roadName: c,
                driveTime: ""
              };
              m.push(_)
            }
            return s.data.list = m, this.driving = s
          },
          produceDrivingData: function () {
            return this.validate && !this.driving && this._drivingChange(this.favorite), this.driving
          },
          NavigtionActionData: {
            0: "",
            1: "左转",
            2: "右转",
            3: "向左前方行走",
            4: "向右前方行走",
            5: "向左后方行走",
            6: "向右后方行走",
            8: "直行",
            9: "靠左",
            10: "靠右",
            15: "通过人行横道",
            16: "通过天桥",
            17: "通过地下通道",
            18: "通过广场",
            19: ""
          },
          initNavigtionActionData: function () {
            var t = [], a = [];
            for (var e in this.NavigtionActionData) {
              var i = this.NavigtionActionData[e];
              t[e] = i, i && (a[i] = e)
            }
            this.navigtionActionNumber = t, this.navigtionActionDescribe = a
          },
          getNavigtionActionNumber: function (t) {
            return this.navigtionActionDescribe[t] || "9"
          },
          getNavigtionActionDescribe: function (t) {
            return this.navigtionActionNumber[t] || ""
          },
          toLngLat: function (t, a) {
            var e = /^[-]*\d+$/;
            if (e.test(t) && e.test(a)) {
              var i = this._vep.PixelsToLatLong(t, a, 20);
              return new AMap.LngLat(i.lo, i.la)
            }
            return new AMap.LngLat(t, a)
          },
          toPixelXY: function (t, a) {
            var e = /^[-]*\d+$/;
            return e.test(t) && e.test(a) ? {x: t, y: a} : this._vep.LatLongToPixels(a, t, 20)
          },
          _vep: new amap.favapi.VirtualEarthProjection,
          getWalkData: function (t, a) {
            return null
          },
          formatDirection: function (t) {
            var a = "default";
            switch (t) {
              case"北":
                a = "north";
                break;
              case"西北":
                a = "northwest";
                break;
              case"西":
                a = "west";
                break;
              case"西南":
                a = "southwest";
                break;
              case"南":
                a = "south";
                break;
              case"东北":
                a = "northeast";
                break;
              case"东":
                a = "east";
                break;
              case"东南":
                a = "southeast";
                break;
              default:
                t = ""
            }
            return a
          },
          formatAction: function (t) {
            var a = "advance";
            switch (t) {
              case"左转":
                a = "left";
                break;
              case"右转":
                a = "right";
                break;
              case"靠左":
                a = "keepleft";
                break;
              case"向左前方行走":
              case"向左后方行走":
                a = "leftdown";
                break;
              case"靠右":
                a = "keepright";
                break;
              case"向右后方行走":
              case"向右前方行走":
                a = "rightdown";
                break;
              case"左转调头":
                a = "back";
                break;
              case"直行":
              case"往前走":
                a = "advance";
                break;
              case"通过天桥":
                a = "footbridge";
                break;
              case"通过地下通道":
                a = "underpass";
                break;
              case"通过人行横道":
                a = "zebra";
                break;
              case"通过广场":
                a = "square"
            }
            return a
          },
          formatDistance: function (t) {
            return t <= 1e3 ? t + "米" : Math.round(t / 100) / 10 + "公里"
          },
          formatTime: function (t) {
            if (!t)return "";
            if (t = Math.round(t / 60), t <= 60)return t + "分钟";
            var a = Math.round(t / 60) + "小时";
            return t % 60 !== 0 && (a += t % 60 + "分钟"), a
          }
        };
        amap.favWalkObj = a
      }()
    }).call(a, e(5))
  }, 21: function (t, a, e) {
    (function (t, a) {
      !function () {
        var i = e(127), n = e(7), r = function () {
          var t = 256, a = -85.0511287798, e = 85.0511287798, i = -180, n = 180, r = 6378137, o = Math.PI, s = {};
          return s.PixelsToQuadKey = function (t, a) {
            var e = s.PixelsToTile(t, a), i = s.TileToQuadKey(e.xTile, e.yTile, 20);
            return i
          }, s.Clip = function (t, a, e) {
            return Math.min(Math.max(t, a), e)
          }, s.LatLongToPixels = function (m, d, p) {
            var f = 2 * o * r;
            m = s.Clip(m, a, e) * o / 180, d = s.Clip(d, i, n) * o / 180, sinLatitude = Math.sin(m);
            var c = r * d, l = Math.log((1 + sinLatitude) / (1 - sinLatitude)), v = r / 2 * l, u = t << p, h = f / u,
              g = s.Clip((f / 2 + c) / h + .5, 0, u - 1), y = f / 2 - v, _ = s.Clip(y / h + .5, 0, u - 1);
            return {x: parseInt(g), y: parseInt(_)}
          }, s.LatLongToPixels2 = function (m, d, p) {
            var f = 2 * o * r;
            m = s.Clip(m, a, e) * o / 180, d = s.Clip(d, i, n) * o / 180, sinLatitude = Math.sin(m);
            var c = r * d, l = Math.log((1 + sinLatitude) / (1 - sinLatitude)), v = parseInt(r / 2) * l, u = t << p,
              h = f / u, g = s.Clip((f / 2 + c) / h + .5, 0, u - 1), y = f / 2 - v;
            y = parseInt(y);
            var _ = s.Clip(y / h + .5, 0, u - 1);
            return {x: parseInt(g), y: parseInt(_)}
          }, s.PixelsToPixels = function (t, a, e, i) {
            var n = i - e;
            return n > 0 ? (Pixel = t >> n, a >>= n) : n < 0 && (t <<= n, a <<= n), {x: parseInt(t), y: parseInt(a)}
          }, s.PixelsToLatLong = function (a, e, i) {
            var n = 2 * o * r, s = n / ((1 << i) * t), m = a * s - n / 2, d = n / 2 - e * s,
              p = o / 2 - 2 * Math.atan(Math.exp(-d / r));
            p *= 180 / o;
            var f = m / r;
            return f *= 180 / o, {la: p, lo: f}
          }, s.PixelsToTile = function (a, e) {
            return xTile = Math.floor(a / t), yTile = Math.floor(e / t), {xTile: xTile, yTile: yTile}
          }, s.TileToQuadKey = function (t, a, e) {
            for (var i = "", n = e; n > 0; n--) {
              mask = 1 << n - 1;
              var r = 0;
              0 != (t & mask) && r++, 0 != (a & mask) && (r += 2), i += r
            }
            return i
          }, s.QuadKeyToTile = function (t) {
            var a, e;
            a = 0, e = 0;
            for (var i = t.length, n = 1; n <= i; n++) {
              var r = t[n - 1], o = 1 << i - n;
              switch (r) {
                case"0":
                  a &= ~o, e &= ~o;
                  break;
                case"1":
                  a |= o, e &= ~o;
                  break;
                case"2":
                  a &= ~o, e |= o;
                  break;
                case"3":
                  a |= o, e |= o
              }
            }
            return {xTile: a, yTile: e}
          }, s
        }, o = new r, s = function () {
          var a = t.rest(arguments, 0).join("+");
          return i.MD5(a).toString(i.enc.Hex)
        }, m = function (t, a) {
          var e = /^[-]*\d+$/;
          if (e.test(t) && e.test(a)) {
            var i = o.PixelsToLatLong(t, a, 20);
            return new AMap.LngLat(i.lo, i.la)
          }
          return new AMap.LngLat(t, a)
        }, d = function (t, a) {
          var e = /^[-]*\d+$/;
          return e.test(t) && e.test(a) ? {x: t, y: a} : o.LatLongToPixels2(a, t, 20)
        }, p = function (t, e) {
          if (!t)return void(e && e({status: 3, data: "parameter error"}));
          if (301 == t.type) {
            var i = s(t.data.name);
            t.id = i, t.act = "c", t.data.id = i, t.data.version = "1", t.data.type = 0, a.post(amap.service.addHistory, {data: t}, function (t) {
              e && e(t)
            })
          } else t = v(t), a.post(amap.service.addHistory, {data: t}, function (t) {
            e && e(t)
          })
        }, f = function (t, e) {
          amap.userinfo || e && e(null), "dir" == t ? a.get(amap.service.getHistory + "type=302,303,304", function (t) {
            "1" == t.status && l(t), e && e(t)
          }) : a.get(amap.service.getHistory + "type=301", function (t) {
            "1" == t.status && c(t), e && e(t)
          })
        }, c = function (t) {
          var e = [];
          if (t.data && t.data.items.length > 0) {
            for (var i in t.data.items) {
              var n = t.data.items[i], r = {query: n.data && n.data.name};
              n.data && n.data.adcode && (r.city = n.data.adcode), n.data && n.data.poiid && (r.id = n.data.poiid, r.query_type = "IDQ"), r.search = "?" + a.param(r), r.act = n.act, r.ts = n.ts, r.itemid = n.id, r.address = n.data && n.data.address, e.push(r)
            }
            amap.poiHistory = e
          } else t.data && 0 === t.data.items.length && (amap.poiHistory = e)
        }, l = function (t) {
          if (amap.dirHistory || (amap.dirHistory = {car: [], bus: [], walk: []}), t.data && t.data.items) {
            var e = t.data.items;
            amap.dirHistory = e
          }
          a(document).trigger("amap.dirhistory")
        }, v = function (a) {
          if (!a || !a.from || !a.to)return null;
          var e = g(a), i = [], n = [], r = _(a.from.lnglat), o = _(a.to.lnglat);
          n.push(r.x), n.push(r.y), n.push(a.from.name), n.push(o.x), n.push(o.y), n.push(a.to.name), i.push(a.from.name);
          var m = {
            id: "",
            act: "c",
            type: a.type,
            data: {
              id: "",
              version: "1",
              from_poi_json: {},
              to_poi_json: {},
              type: a.type,
              routeName: "",
              method: e,
              startX: r.x,
              startY: r.y,
              endX: o.x,
              endY: o.y
            }
          };
          if (302 == a.type && a.via && a.via.length > 0) {
            var d = [];
            t.each(a.via, function (t) {
              i.push(t.name);
              var a = _(t.lnglat), e = {
                mAddr: "",
                mType: t.poitype || "",
                mId: t.id || "",
                floorNoName: "",
                mName: t.name,
                mCityCode: t.adcode || "",
                mX: a.x,
                mY: a.y
              };
              d.push(e), n.push(a.x), n.push(a.y), n.push(t.name)
            }), d = JSON.stringify(d), m.data.mid_poi_json = d
          }
          i.push(a.to.name);
          var p = -1;
          for (var f in n)if ("我的位置" == n[f]) {
            p = f;
            break
          }
          p > -1 && (n.splice(p - 1, 1), n.splice(p - 2, 1)), n.push(h(a));
          var c = s.apply("", n);
          m.id = c, m.data.id = c;
          var l = {
            mName: a.from.name,
            mAddr: "",
            mCityCode: a.from.adcode || "",
            mX: r.x || "",
            mY: r.y || "",
            mType: a.from.poitype || ""
          };
          if (a.from.modxy && a.from.modxy != a.from.lnglat) {
            var v = _(a.from.modxy);
            l.mEntranceList = JSON.stringify([{mEntranceX: v.x, mEntranceY: v.y}])
          }
          var u = /^[A-Za-z0-9]{10}$/;
          u.test(a.from.id) && (l.mId = a.from.id);
          var y = {
            mName: a.to.name,
            mAddr: "",
            mCityCode: a.to.adcode || "",
            mX: o.x || "",
            mY: o.y || "",
            mType: a.to.poitype || ""
          };
          if (a.to.modxy && a.to.modxy != a.to.lnglat) {
            var x = _(a.to.modxy);
            y.mEntranceList = JSON.stringify([{mEntranceX: x.x, mEntranceY: x.y}])
          }
          return u.test(a.to.id) && (y.mId = a.to.id), m.data.routeName = i.join(" → "), m.data.from_poi_json = l, m.data.to_poi_json = y, m
        }, u = function (t) {
          if (!(t && t.data && t.data.from_poi_json && t.data.to_poi_json))return null;
          var a = {302: "car", 303: "bus", 304: "walk"}, e = t.data.from_poi_json, i = t.data.to_poi_json, r = [];
          t.data.mid_poi_json && (r = JSON.parse(t.data.mid_poi_json));
          var o = x(e), s = x(e.mEntranceList, o), m = x(i), d = x(i.mEntranceList, m);
          if ("我的位置" === e.mName)if (amap.loc && amap.loc.lng) {
            var p = amap.loc;
            o = s = p.lng + "," + p.lat
          } else o = s = "", e = {}, n.warning("我的位置定位失败，请您输入起点。"); else if ("我的位置" === i.mName)if (amap.loc && amap.loc.lng) {
            var p = amap.loc;
            m = d = p.lng + "," + p.lat
          } else m = d = "", i = {}, n.warning("我的位置定位失败，请您输入终点。");
          for (var f = {
            dateTime: "now",
            from: {
              adcode: e.mCityCode || "",
              id: e.mId || "",
              lnglat: o || "",
              modxy: s || "",
              name: e.mName || "",
              poitype: e.mType || ""
            },
            to: {
              adcode: i.mCityCode || "",
              id: i.mId || "",
              lnglat: m || "",
              modxy: d || "",
              name: i.mName || "",
              poitype: i.mType || ""
            },
            policy: y(t),
            type: a[t.type],
            via: []
          }, c = 0; c < r.length; c++) {
            var l = r[c], v = x(l), u = v;
            if ("我的位置" === l.mName) {
              if (!amap.loc || !amap.loc.lng)continue;
              var p = amap.loc;
              v = u = p.lng + "," + p.lat
            }
            var h = {
              adcode: l.mCityCode || "",
              id: l.mId || "",
              lnglat: v || "",
              modxy: u || "",
              name: l.mName || "",
              poitype: l.mType || ""
            };
            f.via.push(h)
          }
          return f
        }, h = function (t) {
          var a = 0;
          return 302 == t.type ? a = 0 : 303 == t.type ? a = 1 : 304 == t.type && (a = 2), a
        }, g = function (t) {
          var a = 0, e = {1: 0, 2: 1, 4: 4}, i = {0: 0, 3: 3, 2: 2, 5: 5};
          return 302 == t.type ? a = e[t.policy] || 0 : 303 == t.type && (a = i[t.policy] || 0), "" === t.policy && (a = 0), a
        }, y = function (t) {
          var a = "0", e = {0: "1", 1: "2", 4: "4"}, i = {0: "0", 3: "3", 2: "2", 5: "5"};
          return 302 == t.type ? a = e[t.data.method] || "1" : 303 == t.type && (a = i[t.data.method] || "0"), a
        }, _ = function (t) {
          var a = t.split(",");
          return a = new AMap.LngLat(a[0], a[1]), amap.favapi.toPixelXY2(a.lng, a.lat)
        }, x = function (t, a) {
          if (!t)return a;
          "string" == typeof t && (t = JSON.parse(t), t = t[0]), t.mX = t.mX || t.mEntranceX, t.mY = t.mY || t.mEntranceY;
          var e = m(t.mX, t.mY);
          return e.lng + "," + e.lat
        }, b = function (t, e) {
          if (!t || !t.ids || t.ids.length < 1)return void(e && e({status: 3, data: "parameter error"}));
          var i = {ids: t.ids.join(","), type: t.type || 301};
          a.get(amap.service.deleteHistory + a.param(i), function (t) {
            e && e(t)
          })
        }, w = function (t, e, i) {
          var n = amap.favapi.toPixelXY2(t.location.lng, t.location.lat), r = s(n.x, n.y, t.name), o = {
            item_id: r,
            custom_address: t.address || "",
            poiid: t.id || t.pguid || amap.iwdata.id || "",
            custom_name: t.name,
            type: "0",
            address: t.address || "",
            phone_numbers: t.tel || "",
            comment: "",
            name: t.name,
            point_x: n.x,
            point_y: n.y,
            top_time: "",
            city_code: amap.adcode,
            custom_phone_numbers: t.tel || "",
            city_name: amapcity.getname(amap.adcode),
            tag: ""
          }, m = {};
          a.post(amap.service.addFav + a.param(m), {
            data: [{
              id: o.item_id || o.id,
              data: o,
              type: 101,
              ver: t.ver
            }]
          }, function (t) {
            t.favid = r, e && e(t)
          })
        }, k = function (e, i) {
          var n = "c", r = 101;
          if (t.isEmpty(e))return void(i && i({status: 3, data: "参数错误"}));
          for (var o in e) {
            var m = new AMap.LngLat(e[o].data.point_y, e[o].data.point_x), d = amap.favapi.toPixelXY2(m.lng, m.lat),
              p = s(d.x, d.y, e[o].data.name);
            e[o].type = r, e[o].act = n, e[o].id = p, e[o].data.item_id = p, e[o].data.point_x = d.x, e[o].data.point_y = d.y
          }
          var f = amap.favesStore && amap.favesStore.getFave("ver");
          a.post(amap.service.syncFaves, {data: e, ver: f}, function (t) {
            t && "1" == t.status && amap.favesStore && amap.favesStore.update(t.data), i && i(t)
          })
        }, C = function (t, e) {
          a.post(amap.service.updateFav, {data: t}, function (t) {
            e && e(t)
          })
        }, N = function (t, e) {
          a.get(amap.service.delFav + a.param(t), function (t) {
            e && e(t)
          })
        }, S = function (t, e) {
          a.post(amap.service.updateFav, {data: t}, function (t) {
            e && e(t)
          })
        }, F = function (t, e, i) {
          var n = t, r = s(n.name, n.front_name, n.terminal_name), o = {
            id: r,
            item_id: r,
            startName: n.front_name,
            endName: n.terminal_name,
            start_time: n.start_time.split(":").join(""),
            end_time: n.end_time.split(":").join(""),
            type: 1,
            route_type: 0,
            version: "1.0.0",
            key_name: n.key_name,
            name: n.name,
            route_name: n.name,
            length: Math.floor(1e3 * n.length),
            route_len: Math.floor(1e3 * n.length),
            station_num: n.via_stops.length,
            bus_line_id: n.id,
            point_num: n.path.length
          };
          a.post(amap.service.addFav, {data: [{id: o.item_id || o.id, data: o, type: 105, ver: t.ver}]}, function (t) {
            e && e(t)
          })
        }, L = function (t, e) {
          ver = amap.favesStore.getFave("ver"), a.post(amap.service.addFav, {
            data: [{
              id: t.poiData.id,
              data: t.poiData,
              type: t.type,
              ver: ver
            }]
          }, function (t) {
            e && e(t)
          })
        };
        f(), a.extend(amap, {
          favapi: {
            VirtualEarthProjection: r,
            md5fav: s,
            toLngLat: m,
            toPixelXY2: d,
            favpoi: w,
            favpois: k,
            favDir: L,
            favline: F,
            editpoi: C,
            toppoi: S,
            deletefav: N,
            addHistory: p,
            getHistory: f,
            deleteHistory: b,
            toPoihistory: c,
            toLocalDirhistory: u
          }
        })
      }()
    }).call(a, e(5), e(1))
  }, 22: function (t, a, e) {
    (function (t, a, e, n) {
      amap.favesStore = {
        type: "poi", unitNum: 100, pagenum: 1, isFetch: !1, fetch: function (e) {
          var i = this, n = i.getFave("ver");
          t.get(amap.service.getFav + t.param({ver: n})).done(function (t) {
            if (1 == t.status) {
              t = t.data, i.update(t);
              var n = amap.userinfo ? amap.userinfo.id : "";
              a.remove("favespoi-" + n), a.remove("favepoi-" + n), a.remove("favesdir-" + n), a.remove("favedir-" + n), a.remove("favesver-" + n), a.remove("favever-" + n)
            }
            e && e(t)
          })
        }, show: function (a) {
          var e = this.type;
          a = a || this.pagenum, this.pagenum = a;
          var i = this.get(e);
          return i && this.isFetch ? void this.createTpl(i, function (a) {
            amap.faves = i, amap.favesp = a, t(document).trigger("watchfaves"), t(document).trigger("watchshowfaves")
          }) : (this.isFetch = !0, void this.fetch())
        }, get: function (t, a) {
          var i = this;
          if (!t && !a)return {
            poi: i.getFave("poi"),
            dir: i.getFave("dir"),
            ver: i.getFave("ver"),
            conf: i.getFave("conf")
          };
          var n = i.getFave(t), r = e.clone(n);
          if (!n || !n.items)return {};
          a = a || i.pagenum, a = a > n.total_page ? n.total_page : a;
          var o = i.unitNum * (a - 1), s = o + i.unitNum;
          return s = s > n.total ? n.total : s, r.items = n.items.slice(o, s), r.pageNum = a, r
        }, getFave: function (t) {
          t = t || this.type;
          var e = this.getName(), i = a.get(e[t]);
          return "poi" == t || "dir" == t ? i = i || {items: []} : "conf" == t && (i = i || {favpoishow: !0}), i
        }, getById: function (t, a) {
          var i = void 0, n = this.getFave(t);
          return n && n.items && (i = e.find(n.items, function (t) {
            return t.id === a
          })), i
        }, getByName: function (t, a) {
          var i = void 0, n = this.getFave(t);
          return n && n.items && (i = e.find(n.items, function (t) {
            return t.data.name === a
          })), i
        }, getName: function () {
          var t = amap.userinfo ? amap.userinfo.id : "";
          return {poi: "favepois-" + t, dir: "favedirs-" + t, ver: "favevers-" + t, conf: "faveconf-" + t}
        }, setFave: function (t, e) {
          var i = this;
          e = e || this.type;
          var n = this.getName(e);
          a.set(n[e], t), amap.allFaves = i.get()
        }, update: function (a) {
          var e = this, n = e.getFave("poi"), r = e.getFave("dir"), o = e.getFave("ver");
          if (a && a.items) {
            o = encodeURIComponent(a.ver);
            var s = [], m = [];
            for (i = 0; i < a.items.length; i++)"101" == a.items[i].type ? s.push(a.items[i]) : m.push(a.items[i]);
            n = e.mergeFav(n, s), r = e.mergeFav(r, m)
          }
          s && s.length > 0 && (n.total = n.items.length, n.total_page = Math.ceil(n.items.length / e.unitNum), e.setFave(n, "poi")), m && m.length > 0 && (r.total = r.items.length, r.total_page = Math.ceil(r.items.length / e.unitNum), e.setFave(r, "dir")), o && "undefined" != o && "null" != o && e.setFave(o, "ver"), amap.allFaves = e.get(), amap.state === amap.FAVES ? e.show(e.pagenum) : t(document).trigger("watchshowfaves")
        }, createTpl: function (t, a) {
          t ? t.type = this.type : t = {type: this.type}, n.tplLoad({
            filename: "fav.list",
            data: t,
            callback: function (t) {
              a && a(t)
            },
            path: "/assets/biz/faves/tpl/"
          })
        }, mergeFav: function (t, a) {
          if (t.items && t.items.length > 0 && a && a.length > 0) {
            for (var i = [], n = 0; n < t.items.length; n++)t.items[n].data && "null" != t.items[n].data && "undefined" != t.items[n].data || i.push(n);
            for (var n = i.length - 1; n >= 0; n--)t.items.splice(i[n], 1);
            a.reverse();
            for (var n = 0; n < a.length; n++) {
              var r = a[n];
              if ("c" == r.act) {
                var o = e.findIndex(t.items, {id: r.id});
                o != -1 && t.items.splice(o, 1);
                for (var s = 0; s < t.items.length; s++) {
                  if (!t.items[s].data.top_time_format) {
                    t.items.splice(s, 0, r);
                    break
                  }
                  if (s == t.items.length - 1) {
                    t.items.push(r);
                    break
                  }
                }
              } else if ("u" == r.act)if (r.data.top_time_format)for (var s = 0; s < t.items.length; s++) {
                if (t.items[s].data.top_time_format && t.items[s].id == r.id) {
                  t.items[s] = r;
                  break
                }
                if (t.items[s].id == r.id) {
                  t.items.splice(s, 1), t.items.unshift(r);
                  break
                }
              } else {
                for (var m = "", d = "", s = 0; s < t.items.length; s++)if ("" !== d || t.items[s].data.top_time_format || (d = s), t.items[s].id == r.id) {
                  var p = t.items[s].data.top_time_format;
                  if (m = s, p) {
                    for (var f = 0; f < t.items.length; f++) {
                      if (!t.items[f].data.top_time_format && t.items[f].timestamp <= r.timestamp) {
                        t.items.splice(f, 0, r);
                        break
                      }
                      if (f == t.items.length - 1) {
                        t.items.push(r);
                        break
                      }
                      if (!t.items[f].data.top_time_format && !t.items[f + 1].data.top_time_format && t.items[f].timestamp >= r.timestamp && t.items[f + 1].timestamp <= r.timestamp) {
                        t.items.splice(f + 1, 0, r);
                        break
                      }
                    }
                    t.items.splice(s, 1)
                  } else t.items[s] = r;
                  break
                }
                "" === m && t.items.splice(d, 0, r)
              } else if ("d" == r.act)for (var s = 0; s < t.items.length; s++)t.items[s].id == r.id && t.items.splice(s, 1)
            }
          } else 0 == t.items.length ? t.items = a : a.length > 0 && (t.items = a.concat(t.items));
          return t
        }, dateformat: function (t, a) {
          a = a || "yy-mm-dd hh:mm:ss";
          var e = t || new Date, i = e.getFullYear(),
            n = e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1,
            t = e.getDate() < 10 ? "0" + e.getDate() : e.getDate(),
            r = e.getHours() < 10 ? "0" + e.getHours() : e.getHours(),
            o = e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(),
            s = e.getSeconds() < 10 ? "0" + e.getSeconds() : e.getSeconds(),
            m = i + "-" + n + "-" + t + " " + r + ":" + o + ":" + s;
          switch (a) {
            case"yy-mm-dd hh:mm:ss":
              m = i + "-" + n + "-" + t + " " + r + ":" + o + ":" + s;
              break;
            case"yymmdd":
              m = i + n + t;
              break;
            case"yy-mm-dd":
              m = i + "-" + n + "-" + t
          }
          return m
        }, checkFaveData: function () {
          var t = this.get();
          if (t.poi && t.poi.items && t.poi.items.length > 0) {
            var a = t.poi;
            a.items = e.filter(a.items, function (t) {
              return !(!t.data || "d" == t.act || "null" == t.data || "undefined" == t.data)
            }), a.total = a.items.length, a.total_page = Math.ceil(a.items.length / this.unitNum), this.setFave(a, "poi")
          }
          if (t.dir && t.dir.items && t.dir.items.length > 0) {
            var i = t.dir;
            i.items = e.filter(i.items, function (t) {
              return !(!t.data || "d" == t.act || "null" == t.data || "undefined" == t.data)
            }), i.total = i.items.length, i.total_page = Math.ceil(i.items.length / this.unitNum), this.setFave(i, "dir")
          }
        }, init: function () {
          var t = this;
          t.checkFaveData(), t.fetch(function (a) {
            amap.allFaves = t.get(), amap.faves = amap.allFaves.poi
          })
        }
      }, amap.favesStore.init()
    }).call(a, e(1), e(13), e(5), e(14))
  }, 23: function (t, a, e) {
    (function (t, a, i) {
      !function () {
        var n = e(14), r = e(7), o = e(10), s = t(".faves-panel");
        amap.favTip = new o("Tooltip", {id: "favTip", fade: 50, offset: {x: -2}});
        var m = function () {
          watch(amap, "userinfo", function () {
            amap.userinfo && amap.state === amap.FAVES && a.delay(function () {
              amap.favesStore.show()
            }, 100)
          }, !0), t(document).on("watchfaves", function () {
            var a = t.trim(amap.favesp);
            if (t("#favesbox").length)if (a) {
              var e = t("#favesbox");
              e.hide().html(a).show(), amap.slimscroll(e)
            } else n.tplLoad({
              filename: "fav.empty", data: {}, callback: function (a) {
                s.html(t(a))
              }, path: "/assets/biz/faves/tpl/"
            }); else {
              var i = "" === a ? "fav.empty" : "fav.login";
              n.tplLoad({
                filename: i, data: {html: a}, callback: function (e) {
                  if (a) {
                    s.html(t(e));
                    var i = t("#favesbox");
                    i.hide().html(a).show(), amap.slimscroll(i)
                  } else s.html(t(e))
                }, path: "/assets/biz/faves/tpl/"
              })
            }
          })
        }, d = function () {
          var e = "", n = function (a) {
            var e = i.parse(location.search);
            e.pagenum = a.attr("pageno") || 1, amap.fwd("/faves?" + t.param(e))
          };
          s.on("click", ".serp-paging .paging-index", function (a) {
            n(t(this))
          }), s.on("click", ".serp-paging .paging-prev", function (a) {
            n(t(this))
          }), s.on("click", ".serp-paging .paging-next", function (a) {
            n(t(this))
          }), s.on("click", ".fav-tab", function (a) {
            a && a.stopPropagation(), t(".fav-tab").removeClass("current"), t(this).addClass("current"), amap.favState.poiid = void 0;
            var e = t(this).data("type");
            amap.favesStore.type = e, amap.favesStore.pagenum = 1, amap.favesStore.show()
          }), s.on("click", ".favdel", function (a) {
            a.stopPropagation(), _this = t(this);
            var e = '<div class="f-modal"><h2 class"f-title">删除收藏</h2><div class="f-label">确定删除该收藏？</div><div class="f-foot"><span class="cancel">取消</span><span class="ok">确定</span></div></div>',
              i = new o("Modal", {
                width: 350, height: 146, content: e, closeButton: !1, onCloseComplete: function () {
                  this.destroy()
                }
              });
            i.open(), t(".f-modal").on("click", ".cancel", function (t) {
              i.close()
            }), t(".f-modal").on("click", ".ok", function (t) {
              var a = _this.closest("li").attr("id"), e = parseInt(_this.closest("li").attr("type")),
                n = amap.favesStore.getFave("ver"), o = {id: a, type: e, ver: n};
              i.close(), amap.favapi.deletefav(o, function (t) {
                "1" == t.status ? (r.success("删除成功！"), amap.favesStore.update(t.data)) : "14" == t.status ? r.warning("请先登录后操作") : r.warning("删除失败")
              })
            })
          }), s.on("click", ".favtop", function (a) {
            var e = t(this), i = e.closest(".favitem"), n = i.attr("id"), o = amap.favesStore.getById("poi", n);
            if (!o.data)return r.warning("请刷新后重试"), !1;
            var s = ((new Date).getTime() + "").substr(0, 10);
            o.data.top_time = s;
            var m = amap.favesStore.getFave("ver");
            m && (o.ver = m);
            var d = [];
            return d.push(o), amap.favapi.toppoi(d, function (t) {
              "1" == t.status ? (r.success("置顶成功！"), amap.favesStore.update(t.data)) : r.warning("置顶失败")
            }), amap.cancelBubble(a)
          }), s.on("click", ".favtopcancel", function (a) {
            var e = t(this), i = e.closest(".favitem"), n = i.attr("id"), o = amap.favesStore.getById("poi", n);
            if (!o.data)return r.warning("请刷新后重试"), !1;
            var s = "";
            o.data.top_time = s;
            var m = amap.favesStore.getFave("ver");
            m && (o.ver = m);
            var d = [];
            return d.push(o), amap.favapi.toppoi(d, function (t) {
              "1" == t.status ? (r.success("取消置顶成功！"), amap.favesStore.update(t.data)) : r.warning("取消置顶失败")
            }), amap.cancelBubble(a)
          }), s.on("click", ".favedit", function (a) {
            if (a.stopPropagation(), t(".favlistbox").find(".fav-edit-input").length > 0)return r.warning("还有收藏点未编辑完成"), !1;
            var i = t(this), n = i.closest(".favitem");
            n.css({background: "#f7f7f9"});
            var o = n.find(".favtitle").text() || "", s = n.find(".fav-tit");
            e = s.html(), s.empty();
            var m = '<input class="fav-edit-input" value="' + o + '"/>';
            s.append(m), n.find(".favctrl span ").hide(), n.find(".favctrl-edit").show(), amap.cancelBubble(a)
          }), s.on("click", ".fav-edit-cancel", function (a) {
            a.stopPropagation(), $favitem = t(this).closest(".favitem"), $tit = $favitem.find(".fav-tit"), t.trim(t(".fav-edit-input").val()), $tit.empty(), $tit.append(e), $favitem.removeAttr("style"), $favitem.attr("style", ""), $favitem.find(".favctrl span ").show(), $favitem.find(".favctrl-edit").hide(), amap.cancelBubble(a)
          }), s.on("click", ".fav-edit-save", function (a) {
            a.stopPropagation(), $favitem = t(this).closest(".favitem");
            var e = t.trim(t(".fav-edit-input").val());
            if (null === e)return !1;
            if (e.length > 50)return r.warning("备注不能超过50个字符"), !1;
            var i = $favitem.attr("id"), n = amap.favesStore.getById("poi", i);
            if (!n.data)return r.warning("请刷新后重试"), !1;
            n.data.custom_name = e;
            var o = amap.favesStore.getFave("ver");
            o && (n.ver = o);
            var s = [];
            s.push(n), amap.favapi.editpoi(s, function (t) {
              "1" == t.status ? (r.success("编辑成功！"), amap.favesStore.update(t.data)) : r.warning(e.data || "编辑失败")
            }), amap.cancelBubble(a)
          }), s.on("click", ".fav-edit-input", function (t) {
            amap.cancelBubble(t)
          }), t(".amap-layers").on("mouseover mouseout", ".amap-marker .marker-fav", function (a) {
            var e = t(this);
            if (e.closest(".amap-marker").hasClass("active"))return void amap.favTip.close();
            if ("mouseover" == a.type) {
              var i = "<div>" + filterXss(t(this).data("name")) + "</div>";
              amap.favTip.setContent(i).position({target: t(this)}).open()
            } else"mouseout" == a.type && amap.favTip.close()
          }).on("click", ".amap-marker .marker-fav", function (t) {
            amap.favTip.close()
          }), s.on("click", ".favitem", function (a) {
            var e = t(this), i = e.attr("id");
            amap.favState.poiid = i
          }), t(document).on("click", ".faved", function (e) {
            if (!amap.userinfo)return void amap.showLogin();
            var i = t(this), n = amap.favesStore.getFave("ver"), o = "", s = "", m = 101,
              d = amap.favesStore && amap.favesStore.getFave("poi");
            if (i.closest(".infowindow-body").length > 0 ? s = i.closest(".favitem").attr("id") : amap.placeinfo ? o = amap.placeinfo.base.id || amap.placeinfo.base.poiid : i.parents(".poibox-transport").attr("id") ? (o = i.parents(".poibox-transport").attr("id"), d = amap.favesStore && amap.favesStore.getFave("dir"), m = 105) : s = i.parents(".favitem").attr("id"), amap.userinfo && d && d.items && d.items.length) {
              if (o) {
                var p = a.find(d.items, function (t) {
                  var a = t.data.bus_line_id || t.data.poiid || t.data.id;
                  return a == o
                });
                s = p && p.id
              }
              if (s) {
                var f = {id: s, type: m, ver: n};
                amap.favapi.deletefav(f, function (t) {
                  "1" == t.status ? (r.success("取消收藏成功！"), i.removeClass("faved"), i.find("span").text("收藏"), amap.favesStore.update(t.data)) : "14" == t.status ? r.warning("请先登录后操作") : r.warning("取消收藏失败")
                })
              }
            }
          }), t(document).on("click", ".favit", function (a) {
            if (!amap.userinfo)return void amap.showLogin();
            var e = amap.iwdata;
            !e.address && t(this).closest(".placebox").length > 0 ? (e.name = amap.placeinfo.base && amap.placeinfo.base.name, e.address = amap.placeinfo.base && amap.placeinfo.base.address, e.tel || (e.tel = amap.placeinfo.base.telephone)) : !e.address && e.nearpoi && (e.address = "在" + e.nearpoi + "附近");
            var i = t(this);
            if (e.id, !i.hasClass("faved")) {
              t(".poibox.active .favit") && t(".poibox.active .favit").addClass("faved"), t(".deep_shortcut .favit") && 1 == t(".deep_shortcut .favit").length && t(".deep_shortcut .favit").addClass("faved");
              var n = e.pos || e.location, o = new AMap.LngLat(n.lng, n.lat), s = e.name, m = e.address,
                d = amap.favesStore.getFave("ver"), p = {location: o, name: s, address: m, ver: d};
              amap.favapi.favpoi(p, function (t) {
                "1" == t.status ? (r.success("收藏成功！"), i.find("span").text("已收藏"), i.addClass("faved"), amap.favesStore.update(t.data), amap.state === amap.FAVES) : "14" == t.status ? r.warning("请重新登录！") : r.warning("收藏失败！")
              })
            }
          }), t(document).on("click", ".favline", function (e) {
            if (!amap.userinfo)return void amap.fwd("/faves");
            var i = t(this), n = i.closest(".poibox"), o = n.attr("id");
            if (!i.hasClass("faved")) {
              i.addClass("faved");
              var s = amap.serp.busdata[o], m = a.clone(s[1].list[0]);
              m.via_stops = a.clone(s[0].list);
              var d = amap.favesStore.getFave("ver");
              m.ver = d, amap.favapi.favline(m, function (t) {
                "1" == t.status ? (r.success("收藏成功！"), amap.favesStore.update(t.data)) : r.warning(ret.data || "收藏失败！")
              }), amap.cancelBubble(e)
            }
          }), t(document).on("click", ".favdir", function (e) {
            if (!amap.userinfo)return void amap.fwd("/faves");
            var i = this, n = a.clone(amap.dirnew), o = a.clone(amap.dirp);
            "我的位置" == n.from.name && "object" == typeof amap.myloc && (o.frominfo.name = amap.myloc.name), "我的位置" == n.to.name && "object" == typeof amap.myloc && (o.toinfo.name = amap.myloc.name);
            var s = {}, m = parseInt(t(this).parents(".planTitle").attr("index")) || 0, d = "";
            if (amap.favesStore.getFave("ver"), t(this).hasClass("mark-bus") ? (s = amap.favdir.addBus(o, m), d = 103) : (t(this).hasClass("mark-car") || t(this).hasClass("mark-walk")) && (s = amap.favCarObj.addDirve({
                  idx: 0,
                  data: o
                }, m), d = 102), t(this).hasClass("favdired")) {
              var p = t(this).attr("favID"), f = {};
              return f.id = p, f.type = d, f.ver = amap.favesStore.getFave("ver"), amap.favapi.deletefav(f, function (a) {
                "1" == a.status ? (r.success("取消收藏成功！"), t(i).removeClass("favdired"), t(i).find("span").text("收藏"), amap.favesStore.update(a.data)) : "14" == a.status ? r.warning("请先登录后操作") : r.warning("删除收藏失败")
              }), !1
            }
            amap.favapi.favDir({poiData: s, type: d}, function (a) {
              if ("1" == a.status) {
                var e = s.id;
                t(i).attr("favID", e), t(i).addClass("favdired"), t(i).find("span").text("已收藏"), r.success("收藏成功！"), amap.favesStore.update(a.data)
              } else r.warning("失败啦~ 请重新操作一次！")
            }), amap.cancelBubble(e)
          })
        }, p = function () {
          m(), d()
        };
        p()
      }()
    }).call(a, e(1), e(5), e(12))
  }, 127: function (t, a) {
    var e = e || function (t, a) {
        var e = {}, i = e.lib = {}, n = function () {
        }, r = i.Base = {
          extend: function (t) {
            n.prototype = this;
            var a = new n;
            return t && a.mixIn(t), a.hasOwnProperty("init") || (a.init = function () {
              a.$super.init.apply(this, arguments)
            }), a.init.prototype = a, a.$super = this, a
          }, create: function () {
            var t = this.extend();
            return t.init.apply(t, arguments), t
          }, init: function () {
          }, mixIn: function (t) {
            for (var a in t)t.hasOwnProperty(a) && (this[a] = t[a]);
            t.hasOwnProperty("toString") && (this.toString = t.toString)
          }, clone: function () {
            return this.init.prototype.extend(this)
          }
        }, o = i.WordArray = r.extend({
          init: function (t, e) {
            t = this.words = t || [], this.sigBytes = e != a ? e : 4 * t.length
          }, toString: function (t) {
            return (t || m).stringify(this)
          }, concat: function (t) {
            var a = this.words, e = t.words, i = this.sigBytes;
            if (t = t.sigBytes, this.clamp(), i % 4)for (var n = 0; n < t; n++)a[i + n >>> 2] |= (e[n >>> 2] >>> 24 - 8 * (n % 4) & 255) << 24 - 8 * ((i + n) % 4); else if (65535 < e.length)for (n = 0; n < t; n += 4)a[i + n >>> 2] = e[n >>> 2]; else a.push.apply(a, e);
            return this.sigBytes += t, this
          }, clamp: function () {
            var a = this.words, e = this.sigBytes;
            a[e >>> 2] &= 4294967295 << 32 - 8 * (e % 4), a.length = t.ceil(e / 4)
          }, clone: function () {
            var t = r.clone.call(this);
            return t.words = this.words.slice(0), t
          }, random: function (a) {
            for (var e = [], i = 0; i < a; i += 4)e.push(4294967296 * t.random() | 0);
            return new o.init(e, a)
          }
        }), s = e.enc = {}, m = s.Hex = {
          stringify: function (t) {
            var a = t.words;
            t = t.sigBytes;
            for (var e = [], i = 0; i < t; i++) {
              var n = a[i >>> 2] >>> 24 - 8 * (i % 4) & 255;
              e.push((n >>> 4).toString(16)),
                e.push((15 & n).toString(16))
            }
            return e.join("")
          }, parse: function (t) {
            for (var a = t.length, e = [], i = 0; i < a; i += 2)e[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - 4 * (i % 8);
            return new o.init(e, a / 2)
          }
        }, d = s.Latin1 = {
          stringify: function (t) {
            var a = t.words;
            t = t.sigBytes;
            for (var e = [], i = 0; i < t; i++)e.push(String.fromCharCode(a[i >>> 2] >>> 24 - 8 * (i % 4) & 255));
            return e.join("")
          }, parse: function (t) {
            for (var a = t.length, e = [], i = 0; i < a; i++)e[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - 8 * (i % 4);
            return new o.init(e, a)
          }
        }, p = s.Utf8 = {
          stringify: function (t) {
            try {
              return decodeURIComponent(escape(d.stringify(t)))
            } catch (t) {
              throw Error("Malformed UTF-8 data")
            }
          }, parse: function (t) {
            return d.parse(unescape(encodeURIComponent(t)))
          }
        }, f = i.BufferedBlockAlgorithm = r.extend({
          reset: function () {
            this._data = new o.init, this._nDataBytes = 0
          }, _append: function (t) {
            "string" == typeof t && (t = p.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
          }, _process: function (a) {
            var e = this._data, i = e.words, n = e.sigBytes, r = this.blockSize, s = n / (4 * r),
              s = a ? t.ceil(s) : t.max((0 | s) - this._minBufferSize, 0);
            if (a = s * r, n = t.min(4 * a, n), a) {
              for (var m = 0; m < a; m += r)this._doProcessBlock(i, m);
              m = i.splice(0, a), e.sigBytes -= n
            }
            return new o.init(m, n)
          }, clone: function () {
            var t = r.clone.call(this);
            return t._data = this._data.clone(), t
          }, _minBufferSize: 0
        });
        i.Hasher = f.extend({
          cfg: r.extend(), init: function (t) {
            this.cfg = this.cfg.extend(t), this.reset()
          }, reset: function () {
            f.reset.call(this), this._doReset()
          }, update: function (t) {
            return this._append(t), this._process(), this
          }, finalize: function (t) {
            return t && this._append(t), this._doFinalize()
          }, blockSize: 16, _createHelper: function (t) {
            return function (a, e) {
              return new t.init(e).finalize(a)
            }
          }, _createHmacHelper: function (t) {
            return function (a, e) {
              return new c.HMAC.init(t, e).finalize(a)
            }
          }
        });
        var c = e.algo = {};
        return e
      }(Math);
    !function (t) {
      function a (t, a, e, i, n, r, o) {
        return t = t + (a & e | ~a & i) + n + o, (t << r | t >>> 32 - r) + a
      }

      function i (t, a, e, i, n, r, o) {
        return t = t + (a & i | e & ~i) + n + o, (t << r | t >>> 32 - r) + a
      }

      function n (t, a, e, i, n, r, o) {
        return t = t + (a ^ e ^ i) + n + o, (t << r | t >>> 32 - r) + a
      }

      function r (t, a, e, i, n, r, o) {
        return t = t + (e ^ (a | ~i)) + n + o, (t << r | t >>> 32 - r) + a
      }

      for (var o = e, s = o.lib, m = s.WordArray, d = s.Hasher, s = o.algo, p = [], f = 0; 64 > f; f++)p[f] = 4294967296 * t.abs(t.sin(f + 1)) | 0;
      s = s.MD5 = d.extend({
        _doReset: function () {
          this._hash = new m.init([1732584193, 4023233417, 2562383102, 271733878])
        }, _doProcessBlock: function (t, e) {
          for (var o = 0; 16 > o; o++) {
            var s = e + o, m = t[s];
            t[s] = 16711935 & (m << 8 | m >>> 24) | 4278255360 & (m << 24 | m >>> 8)
          }
          var o = this._hash.words, s = t[e + 0], m = t[e + 1], d = t[e + 2], f = t[e + 3], c = t[e + 4], l = t[e + 5],
            v = t[e + 6], u = t[e + 7], h = t[e + 8], g = t[e + 9], y = t[e + 10], _ = t[e + 11], x = t[e + 12],
            b = t[e + 13], w = t[e + 14], k = t[e + 15], C = o[0], N = o[1], S = o[2], F = o[3],
            C = a(C, N, S, F, s, 7, p[0]), F = a(F, C, N, S, m, 12, p[1]), S = a(S, F, C, N, d, 17, p[2]),
            N = a(N, S, F, C, f, 22, p[3]), C = a(C, N, S, F, c, 7, p[4]), F = a(F, C, N, S, l, 12, p[5]),
            S = a(S, F, C, N, v, 17, p[6]), N = a(N, S, F, C, u, 22, p[7]), C = a(C, N, S, F, h, 7, p[8]),
            F = a(F, C, N, S, g, 12, p[9]), S = a(S, F, C, N, y, 17, p[10]), N = a(N, S, F, C, _, 22, p[11]),
            C = a(C, N, S, F, x, 7, p[12]), F = a(F, C, N, S, b, 12, p[13]), S = a(S, F, C, N, w, 17, p[14]),
            N = a(N, S, F, C, k, 22, p[15]), C = i(C, N, S, F, m, 5, p[16]), F = i(F, C, N, S, v, 9, p[17]),
            S = i(S, F, C, N, _, 14, p[18]), N = i(N, S, F, C, s, 20, p[19]), C = i(C, N, S, F, l, 5, p[20]),
            F = i(F, C, N, S, y, 9, p[21]), S = i(S, F, C, N, k, 14, p[22]), N = i(N, S, F, C, c, 20, p[23]),
            C = i(C, N, S, F, g, 5, p[24]), F = i(F, C, N, S, w, 9, p[25]), S = i(S, F, C, N, f, 14, p[26]),
            N = i(N, S, F, C, h, 20, p[27]), C = i(C, N, S, F, b, 5, p[28]), F = i(F, C, N, S, d, 9, p[29]),
            S = i(S, F, C, N, u, 14, p[30]), N = i(N, S, F, C, x, 20, p[31]), C = n(C, N, S, F, l, 4, p[32]),
            F = n(F, C, N, S, h, 11, p[33]), S = n(S, F, C, N, _, 16, p[34]), N = n(N, S, F, C, w, 23, p[35]),
            C = n(C, N, S, F, m, 4, p[36]), F = n(F, C, N, S, c, 11, p[37]), S = n(S, F, C, N, u, 16, p[38]),
            N = n(N, S, F, C, y, 23, p[39]), C = n(C, N, S, F, b, 4, p[40]), F = n(F, C, N, S, s, 11, p[41]),
            S = n(S, F, C, N, f, 16, p[42]), N = n(N, S, F, C, v, 23, p[43]), C = n(C, N, S, F, g, 4, p[44]),
            F = n(F, C, N, S, x, 11, p[45]), S = n(S, F, C, N, k, 16, p[46]), N = n(N, S, F, C, d, 23, p[47]),
            C = r(C, N, S, F, s, 6, p[48]), F = r(F, C, N, S, u, 10, p[49]), S = r(S, F, C, N, w, 15, p[50]),
            N = r(N, S, F, C, l, 21, p[51]), C = r(C, N, S, F, x, 6, p[52]), F = r(F, C, N, S, f, 10, p[53]),
            S = r(S, F, C, N, y, 15, p[54]), N = r(N, S, F, C, m, 21, p[55]), C = r(C, N, S, F, h, 6, p[56]),
            F = r(F, C, N, S, k, 10, p[57]), S = r(S, F, C, N, v, 15, p[58]), N = r(N, S, F, C, b, 21, p[59]),
            C = r(C, N, S, F, c, 6, p[60]), F = r(F, C, N, S, _, 10, p[61]), S = r(S, F, C, N, d, 15, p[62]),
            N = r(N, S, F, C, g, 21, p[63]);
          o[0] = o[0] + C | 0, o[1] = o[1] + N | 0, o[2] = o[2] + S | 0, o[3] = o[3] + F | 0
        }, _doFinalize: function () {
          var a = this._data, e = a.words, i = 8 * this._nDataBytes, n = 8 * a.sigBytes;
          e[n >>> 5] |= 128 << 24 - n % 32;
          var r = t.floor(i / 4294967296);
          for (e[(n + 64 >>> 9 << 4) + 15] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), e[(n + 64 >>> 9 << 4) + 14] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), a.sigBytes = 4 * (e.length + 1), this._process(), a = this._hash, e = a.words, i = 0; 4 > i; i++)n = e[i], e[i] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
          return a
        }, clone: function () {
          var t = d.clone.call(this);
          return t._hash = this._hash.clone(), t
        }
      }), o.MD5 = d._createHelper(s), o.HmacMD5 = d._createHmacHelper(s)
    }(Math), t.exports = e
  }
});