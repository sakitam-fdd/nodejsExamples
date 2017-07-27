(function () {
  var W = W || {Aa: {Mc: 0, Jk: []}}, uc = {};
  W.CLASS_NAME = "AMap";
  W.a = W.BuryPoint = {WK: {}, ZA: {}, options: {}, pB: {}, NF: {}, OF: {}, yG: {}, zG: {}};
  W.a.dg = W.BuryPoint.dic = {
    "AMap.event": {
      c: "ev",
      m: {addDomListener: "a", addListener: "b", addListenerOnce: "c", removeListener: "d", trigger: "e"}
    },
    AMap: {c: "aa", m: {convertFrom: "a"}},
    "AMap.Map": {
      c: "m",
      o: {
        view: "a",
        layers: "b",
        level: "c",
        center: "d",
        zooms: "e",
        lang: "f",
        cursor: "g",
        crs: "h",
        animateEnable: "i",
        isHotspot: "j",
        defaultLayer: "k",
        rotateEnable: "l",
        resizeEnable: "m",
        dragEnable: "n",
        zoomEnable: "o",
        doubleClickZoom: "p",
        keyboardEnable: "q",
        jogEnable: "r",
        scrollWheel: "s",
        touchZoom: "t",
        mapStyle: "u",
        "features ": "v",
        zoom: "w"
      },
      m: {
        setMapStyle: "a",
        getMapStyle: "b",
        getFeatures: "c",
        setFeatures: "d",
        setLang: "e",
        getLang: "f",
        setCity: "g",
        getCity: "h",
        getAdcode: "i",
        setLimitBounds: "j",
        clearLimitBounds: "k",
        getLimitBounds: "l",
        setZoom: "m",
        getZoom: "n",
        getCenter: "o",
        setCenter: "p",
        setRotation: "q",
        getBounds: "r",
        getStatus: "s",
        setStatus: "t",
        getResolution: "u",
        getScale: "v",
        getDefaultCursor: "w",
        setDefaultCursor: "x",
        zoomIn: "y",
        zoomOut: "z",
        setZoomAndCenter: "0",
        setBounds: "1",
        clearMap: "2",
        destroy: "3",
        addControl: "4",
        removeControl: "5",
        clearControl: "6",
        clearInfoWindow: "7",
        remove: "8",
        add: "9",
        getAllOverlays: "a1",
        getSize: "a2",
        getContainer: "a3",
        panTo: "a4",
        panBy: "a5",
        setFitView: "a6",
        setLayers: "a7",
        getLayers: "a8",
        getDefaultLayer: "a9",
        setDefaultLayer: "a0",
        pixelToLngLat: "b0",
        lnglatToPixel: "b1",
        drawPolyline: "b2",
        drawPolygon: "b3",
        drawCircle: "b4"
      }
    },
    "AMap.View2D": {c: "v", o: {center: "a", rotation: "b", zoom: "c", crs: "d"}},
    "AMap.Buildings": {p: "AMap.Layer", c: "b"},
    "AMap.CustomLayer": {
      p: "AMap.Layer", c: "c", o: {map: "a", zIndex: "b", opacity: "c", zooms: "d"}, m: {
        setOpacity: "2a",
        getContainer: "2b", show: "2c", hide: "2d", setzIndex: "2e"
      }
    },
    "AMap.ImageLayer": {
      p: "AMap.Layer",
      c: "i",
      o: {bounds: "a", url: "b", map: "c", opacity: "d", visible: "e", zIndex: "f", zooms: "g"},
      m: {
        getMap: "4a",
        show: "4b",
        getOpacity: "4c",
        setOpacity: "4d",
        getBounds: "4e",
        setBounds: "4f",
        getImageUrl: "4g",
        setImageUrl: "4h",
        hide: "4i",
        setOptions: "4j",
        getOptions: "4k"
      }
    },
    "AMap.Layer": {
      c: "l",
      m: {getZooms: "a", setOpacity: "b", show: "c", hide: "d", setMap: "e", getMap: "f", setzIndex: "g"}
    },
    "AMap.MassMarks": {
      p: "AMap.Layer", c: "ma", o: {
        zIndex: "a", opacity: "b",
        zooms: "c", anchor: "d", url: "e", size: "f", cursor: "g", alwaysRender: "h"
      }, m: {setData: "0a", getData: "0b", getStyle: "0c", setStyle: "0d", setMap: "0e"}
    },
    "AMap.TileLayer": {
      p: "AMap.Layer",
      c: "tl",
      o: {
        map: "a",
        tileSize: "b",
        tileUrl: "c",
        errorUrl: "d",
        getTileUrl: "e",
        zIndex: "f",
        opacity: "g",
        zooms: "h",
        detectRetina: "i"
      },
      m: {
        setTextIndex: "3a",
        getTiles: "3b",
        reload: "3c",
        setTileUrl: "3d",
        getTileUrl: "3e",
        getZooms: "3f",
        stopRefresh: "3g",
        startRefresh: "3h",
        reload: "3i"
      }
    },
    "AMap.TileLayer.Satellite": {
      p: "AMap.TileLayer", c: "s", o: {
        map: "a", zIndex: "b",
        opacity: "c", zooms: "d", detectRetina: "e"
      }
    },
    "AMap.TileLayer.RoadNet": {
      p: "AMap.TileLayer",
      c: "r",
      o: {map: "a", zIndex: "b", opacity: "c", zooms: "d", detectRetina: "e"}
    },
    "AMap.TileLayer.Traffic": {
      p: "AMap.TileLayer",
      c: "t",
      o: {map: "a", zIndex: "b", opacity: "c", zooms: "d", detectRetina: "e", autoRefresh: "f", interval: "g"}
    },
    "AMap.Vector": {
      p: "AMap.Overlay",
      c: "v",
      m: {show: "4a", hide: "4b", getVisible: "4c", getOptions: "4d", setOptions: "4e", setDraggable: "4f"}
    },
    "AMap.VectorTile": {p: "AMap.Layer", c: "vt"},
    "AMap.Circle": {
      p: "AMap.Vector", c: "ci",
      o: {
        map: "a",
        zIndex: "b",
        center: "c",
        radius: "d",
        strokeColor: "e",
        strokeOpacity: "f",
        strokeWeight: "g",
        fillColor: "h",
        fillOpacity: "i",
        strokeStyle: "j",
        extData: "k",
        strokeDasharray: "l"
      }, m: {setCenter: "8a", getCenter: "8b", setRadius: "8c", getRadius: "8d", contains: "8e"}
    },
    "AMap.ContextMenu": {
      p: "AMap.Overlay",
      c: "cm",
      o: {position: "a", content: "b", width: "c"},
      m: {addItem: "2a", removeItem: "2b", open: "2c", close: "2d"}
    },
    "AMap.GroundImage": {p: "AMap.ImageLayer", c: "g", o: {map: "a", clickable: "b", opacity: "c"}, m: {setMap: "8a"}},
    "AMap.Icon": {
      c: "ic",
      o: {size: "a", imageOffset: "b", image: "c", imageSize: "c"}, m: {setImageSize: "a", getImageSize: "b"}
    },
    "AMap.ImageMarker": {
      p: "AMap.Overlay",
      c: "im",
      m: {
        setPosition: "3a",
        getBounds: "3b",
        getPosition: "3c",
        hide: "3d",
        show: "3e",
        setCursor: "3f",
        setRotation: "3g",
        setzIndex: "3h"
      }
    },
    "AMap.InfoWindow": {
      p: "AMap.Overlay",
      c: "iw",
      o: {
        isCustom: "a",
        autoMove: "b",
        closeWhenClickMap: "c",
        content: "d",
        size: "e",
        offset: "f",
        position: "g",
        showShadow: "h"
      },
      m: {
        open: "1a", close: "1b", setContent: "1c", getContentU: "1d", getContent: "1e", setPosition: "1f",
        setOffset: "1g", getPosition: "1h", setSize: "1i", getSize: "1j", getIsOpen: "1k"
      }
    },
    "AMap.Marker": {
      p: "AMap.Overlay",
      c: "mk",
      o: {
        map: "a",
        position: "b",
        offset: "c",
        icon: "d",
        content: "e",
        topWhenClick: "f",
        topWhenMouseOver: "g",
        draggable: "h",
        raiseOnDrag: "j",
        cursor: "k",
        visible: "l",
        zIndex: "m",
        angle: "n",
        autoRotation: "o",
        animation: "p",
        shadow: "q",
        title: "r",
        clickable: "s",
        shape: "t",
        extData: "u"
      },
      m: {
        setRaiseOnDrag: "9a",
        setPosition: "9b",
        getPosition: "9c",
        setIcon: "9d",
        getIcon: "9e",
        setContent: "9f",
        getContent: "9g",
        hide: "9h",
        show: "9i",
        setCursor: "9j",
        setRotation: "9k",
        setAngle: "9l",
        getAngle: "9m",
        setOffset: "9n",
        getOffset: "9o",
        setzIndex: "9p",
        setOpacity: "9q",
        setDraggable: "9r",
        getDraggable: "9s",
        moveTo: "9t",
        moveAlong: "9u",
        stopMove: "9v",
        setShadow: "9w",
        getShadow: "9x",
        setClickable: "9y",
        getClickable: "9z",
        setTitle: "90",
        getTitle: "91",
        setLabel: "92",
        getLabel: "93",
        setTop: "94",
        getTop: "95",
        setShape: "96",
        getShape: "97",
        setAnimation: "98",
        getAnimation: "99",
        getMap: "9a1"
      }
    },
    "AMap.MarkerShape": {c: "ms", o: {coords: "a", type: "b"}},
    "AMap.Overlay": {
      c: "o", m: {
        show: "a",
        hide: "b", setMap: "c", getMap: "d", setExtData: "e", getExtData: "f"
      }
    },
    "AMap.Poly": {p: "AMap.Vector", c: "ly", m: {setPath: "5a", getPath: "5b"}},
    "AMap.Polygon": {
      p: "AMap.Poly",
      c: "gn",
      o: {
        map: "a",
        zIndex: "b",
        path: "c",
        strokeColor: "d",
        strokeOpacity: "e",
        strokeWeight: "f",
        fillColor: "g",
        fillOpacity: "h",
        extData: "i",
        strokeStyle: "j",
        strokeDasharray: "k"
      },
      m: {getArea: "6a", toString: "6b", contains: "6c"}
    },
    "AMap.Polyline": {
      p: "AMap.Poly", c: "le", o: {
        map: "a", zIndex: "b", geodesic: "c", isOutline: "d", outlineColor: "e", path: "f", strokeColor: "g",
        strokeOpacity: "h", strokeWeight: "i", strokeStyle: "j", strokeDasharray: "k", extData: "l"
      }, m: {getLength: "7a"}
    },
    "AMap.Text": {p: "AMap.Overlay", c: "tt"},
    "AMap.Panorama": {c: "aa"},
    "AMap.PanoramaMarker": {c: "ar"},
    "AMap.PanoramaService": {c: "ae"},
    "AMap.AdvancedInfoWindow": {
      p: "AMap.InfoWindow",
      c: "pa",
      o: {
        autoMove: "a",
        closeWhenClickMap: "b",
        content: "c",
        offset: "d",
        position: "e",
        panel: "f",
        searchRadius: "g",
        placeSearch: "h",
        driving: "i",
        walking: "j",
        transit: "k",
        asOrigin: "l",
        asDestination: "m"
      },
      m: {clear: "aa", searchPoiByKeyWord: "ab"}
    },
    "AMap.AntiCrabFrame": {c: "pb", m: {setMapStyle: "a"}},
    "AMap.ArrivalRange": {c: "pc", m: {search: "a"}},
    "AMap.Autocomplete": {c: "pd", o: {type: "a", city: "b", input: "c"}, m: {setType: "a", setCity: "b", search: "c"}},
    "AMap.AutoPanby": {c: "pe"},
    "AMap.CircleEditor": {c: "pf", m: {open: "a", close: "b"}},
    "AMap.CitySearch": {c: "pg", m: {getLocalCity: "a", getCityByIp: "b"}},
    "AMap.CloudDataLayer": {
      c: "ph",
      o: {map: "a", query: "b", clickable: "c"},
      m: {reload: "a", setMap: "b", getMap: "c", setOptions: "d", wrapUrl: "e"}
    },
    "AMap.CloudDataSearch": {
      c: "pi",
      o: {
        keywords: "a",
        filter: "b", orderBy: "c", pageSize: "d", pageIndex: "e"
      },
      m: {
        setOptions: "a",
        clear: "b",
        setPageIndex: "c",
        setPageSize: "d",
        searchNearBy: "e",
        searchById: "f",
        searchByDistrict: "g",
        searchInPolygon: "h"
      }
    },
    "AMap.CloudDataSearchRender": {c: "pj"},
    "AMap.DistrictSearch": {
      c: "pk",
      o: {level: "a", extensions: "b", subdistrict: "c"},
      m: {setLevel: "a", setExtensions: "b", setSubdistrict: "c", search: "d"}
    },
    "AMap.DragRoute": {
      c: "pl",
      o: {polyOptions: "a", startMarkerOptions: "b", midMarkerOptions: "c", endMarkerOptions: "d", showTraffic: "e"},
      m: {
        setAvoidPolygons: "a",
        clearAvoidPolygons: "b",
        getAvoidPolygons: "c",
        setAvoidRoad: "d",
        clearAvoidRoad: "e",
        getAvoidRoad: "f",
        search: "g",
        setPolicy: "h",
        showRoute: "i",
        close: "j",
        open: "k",
        getWays: "l",
        getRoute: "m",
        destroy: "n",
        getPolyline: "o",
        getStart: "p",
        getEnd: "q",
        getPoint: "r",
        getRoutes: "s"
      }
    },
    "AMap.Driving": {
      c: "pm", o: {policy: "a", extensions: "b", map: "c", panel: "d", hideMarkers: "e"}, m: {
        clear: "a",
        search: "b",
        setAvoidPolygons: "c",
        clearAvoidPolygons: "d",
        getAvoidPolygons: "e",
        setAvoidRoad: "f",
        clearAvoidRoad: "g",
        getAvoidRoad: "h",
        setPolicy: "i",
        setLocation: "j",
        close: "k",
        open: "l"
      }
    },
    "AMap.DrivingRender": {c: "pp"},
    "AMap.Geocoder": {
      c: "pq",
      o: {city: "a", radius: "b", extensions: "c"},
      m: {getLocation: "a", setCity: "b", getAddress: "c"}
    },
    "AMap.Geolocation": {
      c: "pr",
      o: {
        enableHighAccuracy: "a",
        timeout: "b",
        maximumAge: "c",
        convert: "d",
        showButton: "e",
        buttonDom: "f",
        buttonPosition: "g",
        buttonOffset: "h",
        showMarker: "i",
        markerOptions: "j",
        showCircle: "k",
        circleOptions: "l",
        panToLocation: "m",
        zoomToAccuracy: "n",
        useNative: "o"
      },
      m: {
        isSupported: "a", getCurrentPosition: "b", watchPosition: "c",
        clearWatch: "d"
      }
    },
    "AMap.GetLL": {c: "ps"},
    "AMap.Heatmap": {
      c: "pt",
      o: {radius: "a", gradient: "b", opacity: "c", zooms: "d"},
      m: {
        setOptions: "a",
        getOptions: "b",
        setDataSet: "c",
        getDataSet: "d",
        addDataPoint: "e",
        setMap: "f",
        hide: "g",
        show: "h",
        getMap: "i",
        setzIndex: "j",
        getzIndex: "k"
      }
    },
    "AMap.HotSpot": {c: "pu", m: {setMap: "a"}},
    "AMap.LineSearch": {
      c: "pv",
      o: {pageIndex: "a", pageSize: "b", city: "c", extensions: "d"},
      m: {setPageIndex: "a", setPageSize: "b", setCity: "c", searchById: "d", search: "e"}
    },
    "AMap.MapType": {c: "pw", m: {hide: "a", show: "b"}},
    "AMap.Cluster": {c: "px"},
    "AMap.MarkerClusterer": {
      c: "py",
      o: {gridSize: "a", minClusterSize: "b", maxZoom: "c", averageCenter: "d", styles: "e", zoomOnClick: "f"},
      m: {
        disperse: "a",
        addMarker: "b",
        addMarkers: "c",
        removeMarker: "d",
        removeMarkers: "e",
        clearMarkers: "f",
        getClustersCount: "g",
        getMap: "h",
        setMap: "i",
        getMarkers: "j",
        setMarkers: "k",
        getGridSize: "l",
        setGridSize: "m",
        getMinClusterSize: "n",
        setMinClusterSize: "o",
        getMaxZoom: "p",
        setMaxZoom: "q",
        isAverageCenter: "r",
        setAverageCenter: "s",
        getStyles: "t",
        setStyles: "u"
      }
    },
    "AMap.MouseTool": {
      c: "pz",
      m: {
        marker: "a",
        polyline: "b",
        polygon: "c",
        rectangle: "d",
        circle: "e",
        rule: "f",
        measureArea: "g",
        rectZoomIn: "h",
        rectZoomOut: "i",
        close: "j"
      }
    },
    "AMap.OverView": {
      c: "p0",
      o: {tileLayer: "a", isOpen: "b", visible: "c"},
      m: {open: "a", close: "b", getTileLayer: "c", setTileLayer: "d", show: "e", hide: "f"}
    },
    "AMap.PlaceSearch": {
      c: "p1",
      o: {city: "a", type: "b", lang: "c", pageSize: "d", pageIndex: "e", extensions: "f", map: "g", panel: "h"},
      m: {
        clear: "a",
        setLang: "b",
        searchInBounds: "c",
        searchNearBy: "d",
        getDetails: "e",
        setType: "f",
        setPageIndex: "g",
        setPageSize: "h",
        setCity: "i",
        close: "j",
        open: "k"
      }
    },
    "AMap.PlaceSearchLayer": {c: "p2", o: {map: "a", keywords: "b"}, m: {setMap: "a", setKeywords: "b"}},
    "AMap.PlaceSearchRender": {c: "p3"},
    "AMap.PolyEditor": {c: "p4", m: {open: "a", close: "b"}},
    "AMap.RangingTool": {
      c: "p5",
      o: {
        startMarkerOptions: "a",
        midMarkerOptions: "b",
        endMarkerOptions: "c",
        lineOptions: "d",
        tmpLineOptions: "e",
        startLabelText: "f",
        midLabelText: "g",
        endLabelText: "h",
        startLabelOffset: "i",
        midLabelOffset: "j",
        endLabelOffset: "k"
      },
      m: {turnOn: "a", turnOff: "b"}
    },
    "AMap.RoadInfoSearch": {
      c: "p6",
      o: {pageIndex: "a", pageSize: "b", city: "c"},
      m: {
        setPageIndex: "a",
        setPageSize: "b",
        setCity: "c",
        roadInfoSearchByRoadId: "d",
        roadInfoSearchByRoadName: "e",
        crossInfoSearchByCrossId: "f",
        crossInfoSearchByRoadName: "g"
      }
    },
    "AMap.Scale": {c: "p7", m: {show: "a", hide: "b"}},
    "AMap.StationSearch": {
      c: "p8",
      o: {pageIndex: "a", pageSize: "b", city: "c"},
      m: {setPageIndex: "a", setPageSize: "b", setCity: "c", searchById: "d", search: "e"}
    },
    "AMap.ToolBar": {
      c: "p9", o: {offset: "a", ruler: "b", direction: "c", autoPosition: "d", locationMarker: "e", useNative: "f"},
      m: {
        getOffset: "a",
        setOffset: "b",
        hideRuler: "c",
        showRuler: "d",
        hideDirection: "e",
        showDirection: "f",
        hideLocation: "g",
        showLocation: "h",
        hide: "i",
        show: "j",
        doLocation: "k",
        getLocation: "l"
      }
    },
    "AMap.Transfer": {
      c: "1",
      o: {city: "a", policy: "b", nightflag: "c", cityd: "d", extensions: "e", map: "f", panel: "g", hideMarkers: "h"},
      m: {clear: "a", search: "b", leaveAt: "c", setPolicy: "d", setCity: "e", setCityd: "f", close: "g", open: "h"}
    },
    "AMap.TransferRender": {c: "2"},
    "AMap.UTFGrid": {c: "3", m: {setMap: "a"}},
    "AMap.Walking": {
      c: "4", o: {
        map: "a", panel: "b",
        hideMarkers: "c"
      }, m: {clear: "a", search: "b", close: "c", open: "d"}
    },
    "AMap.WalkingRender": {c: "5"},
    "AMap.Weather": {c: "6", m: {getLive: "a", getForecast: "b"}},
    "AMap.IndoorMap": {
      p: "AMap.CustomLayer",
      c: "7",
      o: {alwaysShow: "9a"},
      m: {
        showIndoorMap: "9a",
        showFloor: "9b",
        showFloorBar: "9c",
        hideFloorBar: "9d",
        hideLabels: "9e",
        showLabels: "9f",
        getSelectedBuildingId: "9g",
        getSelectedBuilding: "9h",
        setSelectedBuildingId: "9i",
        getVisibleBuildingIds: "9j"
      }
    },
    "AMap.Riding": {
      c: "prd", o: {map: "a", panel: "b", policy: "c"}, m: {
        clear: "a", search: "b",
        close: "c", open: "d", setPolicy: "e"
      }
    },
    "AMap.RidingRender": {c: "prdr"}
  };
  W.a.JY = W.BuryPoint.getMethodName = function (a, b) {
    var c;
    for (c = this.dg[a].m && this.dg[a].m[b]; !c && this.dg[a].p;) {
      var d = this.dg[a].p;
      c = this.dg[d].m && this.dg[d].m[b];
      a = d
    }
    c || (c = b);
    return c
  };
  W.a.add = W.BuryPoint.add = function (a, b, c) {
    var d = this.dg[a].c;
    if (d) {
      if (b) {
        a = this.JY(a, b);
        if (!a)return;
        d += "," + a
      }
      this.WK[d] = 1;
      c && (this.ZA[d] = c)
    }
  };
  W.a.Xa = W.BuryPoint.addOptions = function (a, b) {
    var c = this.dg[a].c, d, f;
    for (f in b)(d = this.dg[a].o && this.dg[a].o[f]) || (d = f), d = c + "," + d, this.options[d] = 1;
    "AMap.Map" == a && this.NO(a, b, ["mapStyle", "lang", "renderer", "zoom"])
  };
  W.a.NO = W.BuryPoint._addOptionsValue = function (a, b, c) {
    for (var d = 0, f, g; d < c.length; d++)f = c[d], b && b[f] && (g = {}, g[f] = b[f], this.IV(a, g))
  };
  W.a.IV = W.BuryPoint.addOptionsValue = function (a, b) {
    var c = this.dg[a].c, d, f;
    for (f in b)(d = this.dg[a].o && this.dg[a].o[f]) || (d = f), d = c + "," + d, this.pB[d] = b[f]
  };
  W.a.send = W.BuryPoint.send = function () {
    var a = [], b = [], c = [], d = [], f = W.a, g;
    for (g in f.WK)1 != f.NF[g] && a.push(g);
    for (g in f.ZA)1 != f.OF[g] && b.push(g + "=" + f.ZA[g]);
    for (g in f.options)1 != f.yG[g] && c.push(g);
    for (g in f.pB)1 != f.zG[g] && d.push(g + "=" + f.pB[g]);
    if (0 < a.length || 0 < b.length || 0 < c.length || 0 < d.length) new W.qa.Ca(W.q.vc + "://webapi.amap.com/count?" + ["type=f", "k=" + W.q.key, "u=" + W.q.ql, "m=" + (W.j.V ? 1 : 0), "pf=" + W.j.ar, "methods=" + a.join("@"), "methodsParams=" + b.join("@"), "options=" + c.join("@"), "optionsValue=" + d.join("@")].join("&")),
      f.clear(a, b, c, d);
    window.setTimeout(f.send, 1E4)
  };
  W.a.clear = W.BuryPoint.clear = function (a, b, c, d) {
    for (var f = 0; f < a.length; f++)this.NF[a[f]] = 1;
    for (f = 0; f < b.length; f++)this.OF[b[f].split("=")[0]] = 1;
    for (f = 0; f < c.length; f++)this.yG[c[f]] = 1;
    for (f = 0; f < d.length; f++)this.zG[d[f].split("=")[0]] = 1
  };
  window.setTimeout(W.a.send, 1E4);
  W.W = function () {
  };
  W.W.extend = W.W.extend = function (a) {
    function b () {
    }

    function c () {
      this.D && (this.D.apply(this, arguments), this.CLASS_NAME && W.a.add(this.CLASS_NAME))
    }

    b.prototype = this.prototype;
    var d = new b;
    d.constructor = c;
    c.prototype = d;
    for (var f in this)this.hasOwnProperty(f) && "prototype" !== f && (c[f] = this[f]);
    a.QM && (W.extend(c, a.QM), a.QM = null);
    a.ta && (W.extend.apply(null, [d].concat(a.ta)), a.ta = null);
    a.G && d.G && (a.G = W.extend({}, d.G, a.G));
    W.extend(d, a);
    a.toString && (d.toString = a.toString);
    c.ye = this.prototype;
    return c
  };
  W.W.Zb = W.W.include = function (a) {
    W.extend(this.prototype, a)
  };
  W.extend = function (a) {
    var b = Array.prototype.slice.call(arguments, 1), c, d, f, g;
    d = 0;
    for (f = b.length; d < f; d += 1)for (c in g = b[d] || {}, g)Object.prototype.hasOwnProperty.call(g, c) && ("function" === typeof g[c] && "function" === typeof a[c] && (g[c].bb = a[c]), a[c] = g[c]);
    return a
  };
  W.W.Jn = function (a) {
    for (var b in a)if (a.hasOwnProperty(b)) {
      var c = a[b];
      this.prototype[b] && (this.prototype[c] = this.prototype[b])
    }
  };
  W.da = {
    e: function (a, b, c, d, f) {
      if (this.mf(a, b, c || this))return this;
      var g = this.Jh = this.Jh || {};
      g[a] = g[a] || [];
      f ? g[a].unshift({La: b, Ge: c || this, tk: d}) : g[a].push({La: b, Ge: c || this, tk: d});
      "complete" === a && this.cb && this.w(a);
      return this
    }, mf: function (a, b, c) {
      var d = this.Jh;
      if (b && c) {
        if (d && a in d && d[a])for (var f = 0; f < d[a].length; f += 1)if (d[a][f].La === b && d[a][f].Ge === c)return !0;
        return !1
      }
      return d && a in d && d[a] && 0 < d[a].length
    }, F: function (a, b, c) {
      if (!this.mf(a))return this;
      var d = this.Jh;
      if (d && d[a])for (var f = 0; f < d[a].length; f +=
        1)if (!(d[a][f].La !== b && "mv" !== b || c && d[a][f].Ge !== c)) {
        d[a].splice(f, 1);
        d[a].length || (d[a] = null);
        break
      }
      return this
    }, w: function (a, b) {
      if (!this.mf(a))return this;
      var c = {type: a};
      b || "string" != typeof b && "number" != typeof b && "boolean" != typeof b ? W.g.DA(b) ? c.value = b : c = W.extend(c, b) : c.value = b;
      for (var d = [].concat(this.Jh[a]), f = 0; f < d.length; f += 1)d[f].La && (d[f].La.call(d[f].Ge || this, c), d[f].tk && this.Jh[a] && this.Jh[a].splice(f, 1));
      return this
    }, Zi: function (a) {
      a ? this.Jh && this.Jh[a] && (this.Jh[a] = null) : this.Jh = null;
      return this
    }
  };
  W.da.on || (W.da.on = W.da.e);
  W.da.off || (W.da.off = W.da.F);
  W.da.emit || (W.da.emit = W.da.w);
  W.xd = {
    set: function (a, b, c) {
      var d = this.og;
      if (d && d[a]) {
        var d = d[a], f = "set" + this.PJ(a);
        d[f] ? (d[f](b, c), c || this.Ou(a, b)) : d.set(a, b, c)
      } else(this.Ii = this.Ii || {})[a] = b, c || this.Ou(a, b)
    }, PJ: function (a) {
      return a.charAt(0).toUpperCase() + a.substr(1)
    }, get: function (a, b, c) {
      var d, f = this.og;
      d = "get" + this.PJ(a);
      if (f && f[a])return c = f[a], c[d] ? c[d](b) : c.get(a, b);
      if (this[d] && !c)return this[d](b);
      if (this.Ii && this.Ii.hasOwnProperty(a))return this.Ii[a]
    }, P: function (a, b, c) {
      this.og || (this.og = {});
      this.og[a] !== b && (b.e(a, function (b) {
        this.Ou(a,
          b)
      }, this), this.og[a] = b, c || this.Ou(a))
    }, Ad: function (a, b, c) {
      for (var d = 0; d < a.length; d += 1)this.P(a[d], b, !c)
    }, zi: function (a) {
      this.og && this.og[a] && (this.og[a].F(a, "mv", this), this.og[a] = void 0)
    }, sm: function () {
      if (this.og)for (var a in this.og)this.og.hasOwnProperty(a) && this.zi(a)
    }, Ou: function (a, b) {
      if (this[a + "Changed"]) this[a + "Changed"](b); else this.oI && this.oI();
      this.w(a, b)
    }, K5: function (a, b, c) {
      var d = new (W.W.extend({ta: [W.da, W.xd]}));
      d.oI = function () {
        for (var b = !0, f = 0; f < a.length; f += 1)d.get(a[f]) || (b = !1);
        b &&
        (d.sm(), c())
      };
      for (var f = 0; f < a.length; f += 1)d.P(a[f], b)
    }, Zd: function (a, b) {
      var c, d;
      for (c in a)a.hasOwnProperty(c) && (d = a[c], this.set(c, d, b))
    }
  };
  W || (W = {});
  W.q = {
    localStorage: !0,
    nt: 500,
    lm: !0,
    Ai: "1.3.27.5",
    pg: {
      dark: "#202020",
      blue_night: "#090d20",
      test: "#033447",
      mapv: "#000001",
      techblue: "#000b11",
      insight: "#19212a",
      "default": "#fcf9f2"
    },
    n_: "dark light blue darkblue fresh grey midblue".split(" "),
    key: "",
    vc: "http",
    Bd: [115.423412, 39.442759, 117.514625, 41.060816, 116.405285, 39.904989],
    ec: "http://restapi.amap.com",
    rb: "http://webapi.amap.com",
    Fu: "http://gaode.com",
    rk: "http://m.amap.com",
    Vq: "http://webrd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&scale=1&style=8&x=[x]&y=[y]&z=[z]",
    uu: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=[x]&y=[y]&z=[z]&scl=1&ltype=3",
    SB: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x=[x]&y=[y]&z=[z]",
    Yu: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scale=1&style=8",
    Zu: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scl=1&style=8&ltype=11",
    tr: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&style=7&x=[x]&y=[y]&z=[z]",
    yr: "http://vector.amap.com",
    xr: "vdata.amap.com",
    sN: "ws"
  };
  function vc (a) {
    W.W.En = a.En;
    W.j = a.j;
    W.Fd = a.Fd;
    a.j = null;
    W.q.rb = a[2].split(",")[0];
    var b = W.q.vc = W.q.rb.split(":")[0];
    "https" === b && (W.q.sN = "wss", W.q.ec = W.q.ec.replace("http", "https"), W.q.Vq = W.q.Vq.replace("http", "https"), W.q.uu = W.q.uu.replace("http", "https"), W.q.SB = W.q.SB.replace("http", "https"), W.q.Yu = W.q.Yu.replace("http", "https"), W.q.Zu = W.q.Zu.replace("http", "https"), W.q.tr = W.q.tr.replace("http", "https"), W.q.yr = W.q.yr.replace("http", "https"));
    var c = window.location.href;
    0 !== c.indexOf("http") && window.parent &&
    window.parent !== window && (c = window.parent.location.href);
    W.q.fY = c;
    c = encodeURIComponent(c);
    W.q.ql = c;
    W.q.Le = W.q.rb + "/theme/v1.3/markers/" + (W.j.Sc ? "b" : "n");
    var d = document.createElement("style");
    d.type = "text/css";
    W.q.kX = "url(" + b + "://webapi.amap.com/theme/v1.3/openhand.cur),default";
    var f = ".amap-container{cursor:" + W.q.kX + ";}.amap-drag{cursor:url(" + b + "://webapi.amap.com/theme/v1.3/closedhand.cur),default;}";
    d.styleSheet ? (b = function () {
      try {
        d.styleSheet.cssText = f
      } catch (a) {
      }
    }, d.styleSheet.disabled ? setTimeout(b,
      10) : b()) : d.appendChild(document.createTextNode(f));
    (document.head || document.getElementsByTagName("head")[0]).appendChild(d);
    W.q.mode = Number(a[3]);
    W.q.Bd = a[1];
    W.q.key = a[0];
    W.q.My = a[4];
    W.q.sc = a[5];
    W.q.xV = a[6]
  }

  window.AMap && window.AMap.wC && window.AMap.wC.__load__ && window.AMap.wC.__load__(vc);
  W.LC = {rX: Math.PI / 180, g0: 180 / Math.PI};
  (function () {
    function a (a) {
      return "undefined" == typeof a ? "" : a
    }

    W.ve = {
      MY: function (b) {
        b.name = a(b.name);
        var c = [b.y, b.x, b.name];
        if (W.j.V) {
          var d = [W.q.rk + "/callAPP?", "src=jsapi_q"];
          d.push("&ios=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y + "&lon=" + b.x));
          d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&q=" + c.join(",") + "&sourceApplication=jsapi_q"));
          d.push("&wp=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" +
              b.y + "&lon=" + b.x));
          d.push("&mo=" + encodeURIComponent(W.q.rk + "?q=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_q"));
          return d.join("")
        }
        return W.q.Fu + "?q=" + c.join(",") + "&src=jsapi_q"
      }, HJ: function (b) {
        b.name = a(b.name);
        b.address = a(b.address);
        b.x = a(b.x);
        b.y = a(b.y);
        var c = [b.id, b.y, b.x, b.name, b.address];
        if (W.j.V) {
          var d = [W.q.rk + "/callAPP?", "src=jsapi_p"];
          d.push("&ios=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
          d.push("&android=" +
            encodeURIComponent("androidamap?action=shorturl&p=" + c.join(",") + "&sourceApplication=jsapi_p"));
          d.push("&wp=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
          d.push("&mo=" + encodeURIComponent(W.q.rk + "/?p=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_p"));
          return d.join("")
        }
        return W.q.Fu + "?p=" + c.join(",") + "&src=jsapi_p"
      }, FJ: function (b) {
        if (W.j.V) {
          var c = [W.q.rk + "/callAPP?", "src=jsapi_detail"];
          c.push("&ios=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" +
              b.id));
          b.name = a(b.name);
          b.x = a(b.x);
          b.y = a(b.y);
          c.push("&android=" + encodeURIComponent("androidamap?action=openFeature&featureName=PoiDetail&poiid=" + b.id + "&poiname=" + b.name + "&x=" + b.x + "&y=" + b.y + "&sourceApplication=jsapi_detail"));
          c.push("&wp=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
          c.push("&mo=" + encodeURIComponent(W.q.rk + "/detail/index/poiid=" + b.id + "&sourceApplication=jsapi_detail"));
          return c.join("")
        }
        return W.q.Fu + "/detail/" + b.id + "?src=jsapi_detail"
      }, fA: function (b) {
        b.sname =
          a(b.sname);
        "" == b.sname && (b.sname = "\u8d77\u70b9");
        b.dname = a(b.dname);
        "" == b.dname && (b.dname = "\u7ec8\u70b9");
        b.mcount = a(b.mcount);
        b.my = a(b.my);
        b.mx = a(b.mx);
        b.mname = a(b.mname);
        var c = [b.sy, b.sx, b.sname, b.dy, b.dx, b.dname, b.m, b.t, b.mcount, b.my, b.mx, b.mname];
        if (W.j.V) {
          var d = [W.q.rk + "/callAPP?", "src=jsapi_r_" + b.t];
          d.push("&ios=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
          var f = b.t;
          0 === b.t ? f = 2 : 2 === b.t && (f = 4);
          d.push("&android=" + encodeURIComponent("androidamap://route?sourceApplication=jsapi_r_" + b.t + "&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&dev=0&" + b.m + "&t=" + f));
          d.push("&wp=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
          d.push("&mo=" + encodeURIComponent(W.q.rk +
              "/?r=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_r_" + b.t));
          return d.join("")
        }
        return W.q.Fu + "?r=" + c.join(",") + "src=jsapi_r_" + b.t
      }, Dk: function (a) {
        W.j.V ? window.location.href = a : window.open(a)
      }
    }
  })();
  W.g = {
    nv: [], Za: 4.007501668557849E7, vW: "ASDFGHJKLQWERTYUIO!sdfghjkl", qq: {
      start: function (a) {
        function b () {
          var d = (new Date).getTime();
          a.dN.push(d - c);
          c = d;
          a.id = requestAnimationFrame(b)
        }

        a.startTime = new Date;
        a.dN = [];
        var c = (new Date).getTime();
        a.id = requestAnimationFrame(b)
      }, cancel: function (a) {
        a.id && cancelAnimationFrame(a.id)
      }, stop: function (a) {
        a.cX = new Date - a.startTime;
        this.cancel(a);
        a.qq = Math.round(1E3 / (a.cX / (a.dN.length + 1)))
      }
    }, Sb: function (a) {
      if ("object" === typeof a) {
        var b = {}, c;
        for (c in a)a.hasOwnProperty(c) &&
        (b[c] = W.g.Sb(a[c]));
        return b
      }
      return a
    }, DA: function (a) {
      return "object" === typeof HTMLElement ? a instanceof HTMLElement : a && "object" === typeof a && 1 === a.nodeType && "string" === typeof a.nodeName
    }, rC: function (a) {
      var b, c, d, f, g;
      c = [];
      d = NaN;
      f = 0;
      for (g = a.length; f < g; f += 1)b = a[f], b = this.vW.indexOf(b), isNaN(d) ? d = 27 * b : (c.push(d + b - 333), d = NaN);
      return c
    }, c1: function (a, b) {
      for (var c = Math.ceil(b.length / 8), d = 0; d < c; d += 1) {
        var f = 8 * d, g = f + 8;
        g > b.length && (g = b.length);
        for (; f < g; f += 1)a(b[f])
      }
    }, Ez: function (a, b, c) {
      var d, f;
      d = Math.floor(c /
        2);
      f = c - d;
      d = (1 << d) - 1 << f;
      f = (1 << f) - 1;
      return [c, a & d | b & f, b & d | a & f]
    }, Qt: function (a) {
      return a ? encodeURIComponent(a) : ""
    }, Kc: function (a, b, c, d) {
      c = a[b].i[c];
      if ("undefined" === typeof c)return null;
      a = a[b].s;
      if ("number" === typeof c)return a[c];
      for (; "undefined" === typeof c[d.toString()] && !(d -= 1, 3 > d););
      d = c[d.toString()];
      return "number" === typeof d ? a[d] : null
    }, Af: function (a) {
      for (var b = [], c = 0, d = a.length; c < d; c += 2)b.push(parseInt(a.substr(c, 2), 16));
      b.push((b.shift() / 255).toFixed(2));
      return "rgba(" + b.join(",") + ")"
    }, Pq: function (a) {
      for (var b in a)if (a.hasOwnProperty(b))return !1;
      return !0
    }, bj: function (a, b) {
      return 0 > b ? a : a.slice(0, b).concat(a.slice(b + 1, a.length))
    }, tX: function (a, b) {
      var c = W.g.indexOf(a, b);
      return W.g.bj(a, c)
    }, indexOf: function (a, b) {
      if (a && !a.length)return -1;
      if (a.indexOf)return a.indexOf(b);
      for (var c = 0; c < a.length; c += 1)if (a[c] === b)return c;
      return -1
    }, bind: function (a, b) {
      var c = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : null;
      return function () {
        return a.apply(b, c || arguments)
      }
    }, gb: function (a, b) {
      b = b || {};
      a.G = W.extend({}, a.G, b);
      return a.G
    }, dJ: function () {
      return !1
    },
    vJ: function (a, b) {
      return (a || "") + Math.round(Math.random() * Math.pow(10, b || 6))
    }, zb: function () {
      var a = 0;
      return function (b) {
        b._amap_id || (a += 1, b._amap_id = a);
        return b._amap_id
      }
    }(), TX: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", ph: Date.now ? function () {
      return Date.now()
    } : function () {
      return (new Date).getTime()
    }, P5: function (a, b, c, d) {
      var f;
      if (d) {
        var g = 0, h, k = this.ph;
        f = function () {
          h = k();
          if (h - g < b)return !1;
          g = h;
          a.apply(c, arguments)
        }
      } else {
        var l, m, n;
        n = function () {
          l = !1;
          m && (f.apply(c, m), m = !1)
        };
        f = function () {
          l ?
            m = arguments : (l = !0, a.apply(c, arguments), setTimeout(n, b))
        }
      }
      return f
    }, lf: function (a, b) {
      return Number(Number(a).toFixed(b || 0))
    }, isArray: function (a) {
      return Array.isArray ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
    }, SM: function (a) {
      var b = 0;
      if (0 === a.length)return b;
      for (var c, d = 0, f = a.length; d < f; d += 1)c = a.charCodeAt(d), b = (b << 5) - b + c, b &= b;
      return b
    }, I4: function (a, b) {
      b = b ? Math.ceil(parseInt(b.substr(6)) / 24) : 1;
      for (var c = "", d = 0, f = a.length; d < f; d++)c += String.fromCharCode((a.charCodeAt(d) - 256 -
        b + 65535) % 65535);
      return c
    }, nX: function (a, b) {
      var c = (a + "").slice(-2), d = (b + "").slice(-2);
      a = a.slice(0, -2);
      b = b.slice(0, -2);
      var f = parseInt((d + c).slice(1)), d = parseInt("1" + d) / 3E3;
      a -= parseInt("1" + c) / 3E3 * (Math.ceil(f / 250) % 2 ? 1 : -1);
      b -= d * (1 < f / 500 ? 1 : -1);
      return new W.Q(parseFloat(a).toFixed(5), parseFloat(b).toFixed(5))
    }, fL: function (a) {
      return "undefined" !== typeof JSON && JSON.stringify ? W.g.SM(JSON.stringify(a)) : null
    }, Q6: function (a, b) {
      if (b || !a.hasOwnProperty("_amap_hash")) {
        var c = W.g.fL(a);
        c && (a._amap_hash = c)
      }
      return a._amap_hash
    },
    iepngFix: function (a) {
      function b () {
        for (var a; c.length;)a = c.shift(), window.DD_belatedPNG.fixPng(a);
        d.FA = !0
      }

      this.LL || (this.LL = [], this.FA = !1);
      var c = this.LL, d = this;
      if ("img" === a.tagName.toLowerCase()) c.push(a); else {
        a = a.getElementsByTagName("*");
        for (var f = 0; f < a.length; f += 1)c.push(a[f])
      }
      window.DD_belatedPNG && this.FA ? setTimeout(function () {
        b()
      }, 100) : this.FA || W.Ra.load("AMap.FixPng", b)
    }, ia: function (a) {
      if (W.g.isArray(a))if (W.g.isArray(a[0]))for (var b = 0; b < a.length; b += 1)a[b] = W.g.ia(a[b]); else if (b = typeof a[0],
        "string" === b || "number" === b)return new W.Q(a[0], a[1]);
      return a
    }, mj: function (a) {
      return W.g.isArray(a) ? new W.bc(a[0], a[1]) : a
    }
  };
  (function () {
    function a (a) {
      window.clearTimeout(a)
    }

    function b (a) {
      var b, c, d = ["webkit", "moz", "o", "ms"];
      for (b = 0; b < d.length && !c; b += 1)c = window[d[b] + a];
      return c
    }

    function c (a) {
      var b = +new Date, c = Math.max(0, (W.j.xg ? 50 : 20) - (b - d));
      d = b + c;
      return window.setTimeout(a, c)
    }

    var d = 0, f = window.requestAnimationFrame || b("RequestAnimationFrame") || c,
      g = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || a;
    W.g.Oe = function (a, b, c, d) {
      a = W.g.bind(a, b);
      if (c) a(); else return f.call(window, a, d)
    };
    W.g.tl =
      function (a) {
        a && g.call(window, a)
      }
  })();
  W.g.O0 = window.requestIdleCallback ? window.requestIdleCallback.bind(window) : function (a) {
    var b = Date.now();
    return setTimeout(function () {
      a({
        didTimeout: !1, timeRemaining: function () {
          return Math.max(0, 70 - (Date.now() - b))
        }
      })
    }, 0)
  };
  W.g.qW = window.cancelIdleCallback ? window.cancelIdleCallback.bind(window) : function (a) {
    clearTimeout(a)
  };
  (function (a) {
    var b = 1, c = {};
    a.g.n1 = function (a, b) {
      if (c[a]) {
        var g = c[a];
        g.nr = 1;
        g.result = b;
        if (g.fh) {
          for (var h = g.fh, k = 0, l = h.length; k < l; k++)h[k].call(null, b);
          g.fh = null
        }
      }
    };
    a.g.LW = function (a) {
      c[a] = null
    };
    a.g.F2 = function (a, b) {
      if (c[a]) {
        var g = c[a];
        0 < g.nr ? b(null, g.result) : (g.fh || (g.fh = []), g.fh.push(b))
      } else b(null, a)
    };
    a.g.Zz = function (d, f) {
      var g = navigator.geolocation;
      if (!a.j.qZ || "https:" === document.location.protocol)return d(null, g);
      var h;
      f && f.G2 && (h = "f" + b++, c[h] = {nr: 0});
      var k = void 0, l = !1;
      f && f.timeout && (k = setTimeout(function () {
        k =
          void 0;
        d({code: 3, info: "TIME_OUT", message: "Get geolocation time out."});
        l = !0
      }, f.timeout));
      g.getCurrentPosition(function () {
        l || (clearTimeout(k), k = void 0, d(null, g))
      }, function (b) {
        l || (clearTimeout(k), k = void 0, 2 === b.code && 0 < b.message.indexOf("permission") ? a.Ra.load("AMap.GeoRemoteLoc", function () {
          d(null, a.JN, h)
        }) : d(null, g))
      });
      return h
    }
  })(W);
  (function (a) {
    var b = a.W.extend({
      ta: [a.da], D: function () {
      }
    });
    a.zm = new b
  })(W);
  (function (a) {
    var b = a.W.extend({
      ta: [a.da], D: function () {
        this.ER()
      }, ER: function () {
        a.zm && a.zm.e("vecTileParsed.buildings", this.oR, this)
      }, vK: function (a) {
        return a.map.qF
      }, xJ: function (a) {
        return this.vK(a) ? a.map.kx : null
      }, l1: function (a, b) {
        if (b) {
          var f = b.map;
          f && (f.kx ? f.kx.toString() : "") !== (a ? a.toString() : "") && (f.kx = a || [], f.set("display", 0))
        }
      }, zM: function (a, b) {
        if (b) {
          var f = b.map;
          f && f.qF !== a && (f.qF = a, f.set("display", 0))
        }
      }, B3: function () {
      }, lF: function (a, b) {
        if (a)for (var f = 0, g = a.length; f < g; f++)a[f] && 0 > b.indexOf(a[f]) &&
        b.push(a[f])
      }, gJ: function (b) {
        if (!b)return null;
        b = b.map.Ba;
        for (var d = 0, f = b.length; d < f; d++)if (a.T.Lg && b[d] instanceof a.T.Lg && b[d].va && b[d].va.length && (-1 !== b[d].va.indexOf("building") || -1 !== b[d].va.indexOf("poilabel")))return b[d];
        return null
      }, hY: function (a) {
        if (a = this.gJ(a)) {
          if (a = a.Pa.get("tiles", null, !0)) a = a[0]; else return null;
          if (!a || !a.length)return null;
          for (var b = [], f = 0, g = a.length; f < g; f++) {
            var h = a[f];
            h.Tf && h.Tf.cd && this.lF(h.Tf.cd, b)
          }
          return b
        }
      }, oR: function (a) {
        if (a.qv && a.qv.Tf && (a = a.qv.Tf.cd)) {
          var b =
            [];
          this.lF(a, b);
          this.w("vecTileParsed.builds.found", {jI: b})
        }
      }
    });
    a.Se = new b
  })(W);
  (function (a) {
    function b () {
      return {
        checkup: function () {
          var a = Array.prototype.slice.call(arguments, 0);
          a.pop()(null, a)
        }
      }
    }

    function c (a) {
      return {
        injectCode: function (b, c) {
          var d = null, f = null;
          try {
            d = (new Function("self", b))(a)
          } catch (g) {
            f = g.toString()
          }
          c(f, d)
        }
      }
    }

    function d (a) {
      function b (c, d) {
        function f (a, b, c) {
          a = {xo: Date.now(), to: h, error: a, result: b};
          if (c)for (var g in c)c.hasOwnProperty(g) && (a[g] = c[g]);
          d(a)
        }

        var g = c.qA, h = c.to, l = c.oz, m = c.bq, v = c.RV || [], r = a._wkHandlers[g];
        r ? r[l] ? m ? r[l].apply(r, v.concat(f)) : f(null, r[l].apply(r,
          v)) : f("Unknown cmd: " + l) : f("Can not find handler for: " + g)
      }

      var c = [];
      a.mt = function (a) {
        c.push.apply(c, a)
      };
      a.addEventListener("message", function (d) {
        function f (b) {
          if (B) {
            B.push(b);
            var d = !!b.l_;
            d || u++;
            if (u > h) console.error("Resp len wrong!!"); else if (b = u === h, d || b) {
              d = 1 < B.length ? {P0: B} : B[0];
              d.xo = Date.now();
              d.E6 = t;
              if (c.length) {
                try {
                  a.postMessage(d, c)
                } catch (g) {
                  a.postMessage(d), console.error(g)
                }
                c.length = 0
              } else a.postMessage(d);
              B.length = 0;
              b && (f = B = null)
            }
          } else console.error("Seemed callback already sent!!")
        }

        var g =
          d.data;
        d = g.M0 || [g];
        for (var h = d.length, u = 0, t = Date.now() - g.xo, B = [], g = 0; g < h; g++)b(d[g], f)
      }, !1)
    }

    function f (d, h) {
      this.G = a.extend({batchSend: !0, lazy: !1, libPolyfills: null}, h);
      this.mn = [];
      this.Xo = this.G.clientId || "w" + g++;
      this.G.onReady && this.jB(this.G.onReady);
      this.is = this.EQ();
      if ("function" === typeof d) {
        var m = {};
        m[this.is] = d;
        d = m
      }
      d[f.jA] = c;
      d[this.FE()] = b;
      this.vs = d;
      this.MG();
      this.G.lazy || this.wn();
      a.Bq || !1 === this.G.hostWorker || (a.Bq = this)
    }

    var g = 1, h = 1;
    a.extend(f, {
      jA: "_g_", x1: function (a) {
        if (!a.JO) {
          var b = [];
          a.addEventListener("message",
            function (a) {
              a = a.data;
              a = a.P0 || [a];
              for (var c = 0, d = a.length; c < d; c++) {
                var f = a[c], g;
                a:{
                  g = f.to;
                  for (var h = !!f.l_, k = 0, B = b.length; k < B; k++) {
                    var v = b[k];
                    if (g === v.to) {
                      h || b.splice(k, 1);
                      g = v;
                      break a
                    }
                  }
                  g = void 0
                }
                g ? g.bq.call(null, f.error, f.result, !0) : console.warn("Receive worker msg: ", f)
              }
            }, !1);
          a.xO = b;
          a.JO = !0
        }
      }
    });
    a.extend(f.prototype, {
      EQ: function () {
        return "_def_" + this.Xo
      }, FE: function () {
        return "_cln_" + this.Xo
      }, gU: function () {
        var a = Array.prototype.slice.call(arguments, 0);
        this.PG = a;
        if (this.gn) {
          for (var b = 0, c = this.gn.length; b <
          c; b++)this.gn[b].apply(null, a);
          this.gn.length = 0
        }
      }, mt: function (a) {
        this.bU && this.mn.push.apply(this.mn, a)
      }, jB: function (a) {
        this.PG ? a.apply(null, this.PG) : (this.gn || (this.gn = []), this.gn.push(a))
      }, wn: function (b) {
        var c = this;
        if (!c.MD) {
          c.MD = !0;
          var d = function (d, f) {
            d && a.j.AK && console.warn(d);
            c.gU.call(c, d, f);
            b && b(d, f)
          };
          a.j.AK ? this.aU(function (a, b) {
            b ? this.MR(b, function (a, c) {
              a ? d(a) : (this.Ls(c), this.Oy = c, this.mn.length = 0, this.Bs = null, d(null, {$V: b, Q2: c}))
            }) : d("Worker start failed!")
          }) : d("Worker not supported!")
        }
      },
      mK: function (a, b, c) {
        var d = this;
        a = a || d.is;
        var g = {};
        d.BD(a, b, g);
        d.Ls(null, g);
        d.jB(function (h) {
          h ? c(h) : d.Oy ? (h = d.LE(b, d.Yw(d.Xo, a)), d.Oy.sendMessage(f.jA + ":injectCode", h, function (a, b) {
            a || d.Ls(d.Oy, g);
            c(a, b)
          })) : c("Worker msger missing!!")
        })
      }, Yw: function (a, b) {
        if (!a || !b)throw Error("clientId or ns missing!!");
        return a + "_" + b
      }, UQ: function (a, b, c) {
        function d () {
          var b = Array.prototype.slice.call(arguments, 0);
          c.sendMessage.apply(c, [a].concat(b))
        }

        var f = this;
        if (!c)return function () {
          f.MD || "utilCall" === f.G.lazy && f.wn();
          b.apply(this.Bs, arguments)
        };
        d._proxy2Worker = !0;
        return d
      }, MG: function () {
        this.Ls(null)
      }, sP: function (a) {
        var b = {}, c;
        for (c in a)a.hasOwnProperty(c) && this.BD(c, a[c], b);
        return b
      }, BD: function (a, b, c) {
        b = b.call(null, !1);
        for (var d in b)b.hasOwnProperty(d) && (c[a + ":" + d] = b[d], a === this.is && (c[d] = b[d]))
      }, Ls: function (a, b) {
        b || (this.Bs || (this.Bs = this.sP(this.vs)), b = this.Bs);
        for (var c in b)if (b.hasOwnProperty(c)) {
          var d = b[c];
          "function" === typeof d && (this[c] = this.UQ(c, d, a))
        }
        this.bU = !!a
      }, LE: function (a, b) {
        var c = a.toString(),
          d, c = c.replace(/^function([^\(]*)\(/, function () {
            d = "_prep_h" + h++;
            return "function " + d + "("
          });
        return d ? c + ';if(self._wkHandlers["' + b + '"]){ console.log(self._wkHandlers["' + b + '"]); throw new Error("' + b + ' already exists!"); }self._wkHandlers["' + b + '"]=' + d + ".call(null,self)||{};" + d + "=null;" : (console.error("No function match!!"), !1)
      }, aU: function (a) {
        var b = this.Xo, c = [], d;
        for (d in this.vs)if (this.vs.hasOwnProperty(d)) {
          var g = this.LE(this.vs[d], this.Yw(b, d));
          g && c.push(g)
        }
        b = this.G.libPolyfills || [];
        d = 0;
        for (g = b.length; d <
        g; d++)b[d] = "(" + b[d].toString() + ")(self);";
        var h = b.join(";\n") + ";\n" + c.join(";\n"), c = this.G.hostWorker, s = this;
        c && c !== s ? c.jB(function (b, c) {
          b ? a.call(s, b) : c.Q2.sendMessage(f.jA + ":injectCode", h, function (b) {
            b ? a.call(s, b) : a.call(s, null, c.$V)
          })
        }) : setTimeout(function () {
          a.call(s, null, s.bV(h))
        }, 0)
      }, bV: function (a) {
        var b = {type: "text/javascript; charset=utf-8"};
        a = "self._wkHandlers={};(" + d.toString() + ")(self);\n" + a;
        var c;
        try {
          var f = window.URL || window.webkitURL, g = f.createObjectURL(new Blob([a], b));
          c = new Worker(g);
          setTimeout(function () {
            f.revokeObjectURL(g);
            g = null
          }, 3E3)
        } catch (h) {
          console.error(h);
          return
        }
        return c
      }, ZP: function (b) {
        var c = 1, d = b.xO, f = this, g = !!f.G.batchSend;
        return function (h) {
          var s = Array.prototype.slice.call(arguments, 1), u = "function" === typeof s[s.length - 1] ? s.pop() : null,
            t = f.Xo, B = h.split(":"), v = f.is;
          1 < B.length && (h = B[1], v = B[0]);
          s = {xo: a.g.ph(), qA: f.Yw(t, v), bq: !!u, to: t + "_" + c++, oz: h, RV: s};
          u && d.push({oz: s.oz, qA: s.qA, xo: s.xo, to: s.to, bq: u});
          g ? f.aP(b, s) : f.en(b, s)
        }
      }, en: function (a, b) {
        if (this.mn.length) {
          try {
            a.postMessage(b,
              this.mn)
          } catch (c) {
            a.postMessage(b), console.error(c)
          }
          this.mn.length = 0
        } else a.postMessage(b)
      }, aP: function (b, c) {
        b.Lx || (b.Lx = []);
        b.Lx.push(c);
        if (!b.KG) {
          var d = this;
          b.KG = setTimeout(function () {
            b.KG = null;
            var c = b.Lx;
            c.length && (d.en(b, 1 === c.length ? c[0] : {xo: a.g.ph(), M0: c}), c.length = 0)
          }, 0)
        }
      }, UU: function (a) {
        var b = this;
        a.addEventListener("error", function (a) {
          console.error(a);
          b.MG(null)
        }, !1);
        f.x1(a)
      }, MR: function (a, b) {
        var c = this;
        c.UU(a);
        var d = this.ZP(a);
        if (f.LP) b.call(c, null, {sendMessage: d}); else {
          f.LP = !0;
          var g = [c.FE() +
          ":checkup", Math.random().toFixed(5) + "", Math.round(1E3 * Math.random()), !1, function (a, f) {
            var h = !0;
            if (a || !f || f.length !== g.length - 2) h = !1; else for (var k = 0, B = f.length; k < B; k++)if (f[k] !== g[k + 1]) {
              h = !1;
              break
            }
            h ? b.call(c, null, {sendMessage: d}) : (console.error(a), b.call(c, "Self checkup failed!!"))
          }];
          d.apply(c, g)
        }
      }
    });
    a.Sr = f
  })(W);
  (function () {
    if (!W.ae) {
      W.ae = {Te: {}, Nq: {}};
      var a = W.ae, b = W.ae.Te, c = W.g;
      b.start = function (b) {
        a.Nq[b.id] = {
          C: b.C, time: {lK: c.ph()}, oW: function () {
            return c.ph() - this.time.lK
          }
        }
      };
      b.end = function (b) {
        var d = a.Nq[b.id], h = d.time, d = c.bind(d.oW, d), k = b.index, l = b.key;
        "function" !== typeof b.sc && (b.sc = function () {
        });
        if (void 0 === h[l]) void 0 === k ? h[l] = d() : (h[l] = [], h[l][k] = d()); else if (void 0 !== k && void 0 === h[l][k]) h[l][k] = d(); else return b.sc(Error("Duplicate Invoke"));
        b.sc(null)
      };
      b.push = function (b) {
        var c = a.Nq[b.id].time, d = b.key,
          k = b.Ik;
        "function" !== typeof b.sc && (b.sc = function () {
        });
        if (void 0 === c[d]) c[d] = k; else return b.sc(Error("Duplicate Invoke"));
        b.sc(null)
      };
      b.send = function (b) {
        var c = W.q.vc + "://webapi.amap.com/count?", h = W.extend(d({C: a.Nq[b.id].C}), b.params || {}), k = W.g;
        b.params && b.params.rs && !b.params.type && (b = a.Nq[b.id].time, delete b.lK, h = W.extend(h, b));
        b = [];
        for (var l in h)k.isArray(h[l]) ? b.push([l, h[l].join("-")].join("=")) : b.push([l, h[l]].join("="));
        new W.qa.Ca(c + b.join("&"))
      };
      var d = function (a) {
        var b = W.j, c = W.q;
        a = W.f.qJ(a.C);
        return {
          type: "q",
          resolution: a.width + "*" + a.height,
          k: c.key,
          u: c.ql,
          iw: b.Vn ? 1 : 0,
          cw: b.pW ? 1 : 0,
          gc: b.RJ,
          m: b.V ? 1 : 0,
          cv: b.cf ? 1 : 0,
          pf: b.ar,
          dpr: window.devicePixelRatio,
          screenwidth: screen.width,
          scale: b.xC || 0,
          detect: b.oa ? 1 : 0
        }
      }
    }
  })();
  W.f = {
    get: function (a) {
      return "string" === typeof a ? document.getElementById(a) : a
    }, T5: function (a, b) {
      var c = document.head || document.getElementsByTagName("head")[0];
      if (c) {
        var d = document.createElement("link");
        d.setAttribute("rel", "stylesheet");
        d.setAttribute("type", "text/css");
        d.setAttribute("href", a);
        b ? c.appendChild(d) : c.insertBefore(d, c.firstChild)
      } else document.write("<link rel='stylesheet' href='" + a + "'/>")
    }, Kc: function (a, b) {
      var c = a.style[b];
      !c && a.currentStyle && (c = a.currentStyle[b]);
      c && "auto" !== c || !document.defaultView ||
      (c = (c = document.defaultView.getComputedStyle(a, null)) ? c[b] : null);
      c && "auto" !== c || "height" !== b || (c = a.clientHeight + "px");
      c && "auto" !== c || "width" !== b || (c = a.clientWidth + "px");
      return "auto" === c ? null : c
    }, Aq: function (a) {
      if (a)return new W.bc(a.clientWidth || document.body.clientWidth, a.clientHeight || (W.j.Sn ? "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight : document.body.clientHeight), !0)
    }, qJ: function (a) {
      return new W.bc(a.clientWidth, a.clientHeight)
    }, iA: function (a) {
      var b =
        0, c = 0, d = a, f = document.body, g = document.documentElement, h, k = W.j.Jq;
      do {
        b += d.offsetTop || 0;
        c += d.offsetLeft || 0;
        b += parseInt(W.f.Kc(d, "borderTopWidth"), 10) || 0;
        c += parseInt(W.f.Kc(d, "borderLeftWidth"), 10) || 0;
        h = W.f.Kc(d, "position");
        if (d.offsetParent === f && "absolute" === h)break;
        if ("fixed" === h) {
          b += f.scrollTop || g.scrollTop || 0;
          c += f.scrollLeft || g.scrollLeft || 0;
          break
        }
        d = d.offsetParent
      } while (d);
      d = a;
      do {
        if (d === f)break;
        b -= d.scrollTop || 0;
        c -= d.scrollLeft || 0;
        W.f.CX() || !W.j.K2 && !k || (c += d.scrollWidth - d.clientWidth, k && "hidden" !==
        W.f.Kc(d, "overflow-y") && "hidden" !== W.f.Kc(d, "overflow") && (c += 17));
        d = d.parentNode
      } while (d);
      return new W.L(c, b)
    }, CX: function () {
      W.f.iQ || (W.f.iQ = !0, W.f.hQ = "ltr" === W.f.Kc(document.body, "direction"));
      return W.f.hQ
    }, create: function (a, b, c) {
      a = document.createElement(a);
      c && (a.className = c);
      b && b.appendChild(a);
      return a
    }, MI: function () {
      document.selection && document.selection.empty && document.selection.empty();
      this.rT || (this.rT = document.onselectstart, document.onselectstart = W.g.dJ)
    }, VI: function () {
    }, Qn: function (a, b) {
      if (a &&
        b)return 0 < a.className.length && RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
    }, tb: function (a, b) {
      a && b && !W.f.Qn(a, b) && (a.className += (a.className ? " " : "") + b)
    }, yb: function (a, b) {
      function c (a, c) {
        return c === b ? "" : a
      }

      a && b && (a.className = a.className.replace(/(\S+)\s*/g, c).replace(/(^\s+|\s+$)/, ""))
    }, CJ: function (a, b) {
      return 1 === b ? "" : "opacity" in a.style ? "opacity:" + b : 8 <= document.documentMode ? "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * b) + ")'" : "filter:alpha(opacity=" + Math.ceil(100 *
          b) + ")"
    }, Ak: function (a, b) {
      if ("opacity" in a.style) a.style.opacity = b; else if ("filter" in a.style) {
        a = a.childNodes.length ? a.childNodes : [a];
        for (var c = Math.round(100 * b), d = 0; d < a.length; d += 1)a[d].childNodes && a[d].childNodes.length ? this.Ak(a[d], b) : a[d].style && (a[d].style.filter = "", 100 !== c && (a[d].style.filter = " progid:DXImageTransform.Microsoft.Alpha(opacity=" + c + ")"))
      }
    }, jC: function (a) {
      for (var b = document.documentElement.style, c = 0; c < a.length; c += 1)if (a[c] in b)return a[c];
      return !1
    }, NJ: function (a) {
      var b = W.j.L2;
      return "translate" +
        (b ? "3d" : "") + "(" + a.x + "px," + a.y + "px" + ((b ? ",0" : "") + ")")
    }, p5: function (a, b) {
      return W.f.NJ(b.add(b.Gc(-1 * a))) + (" scale(" + a + ") ")
    }, M6: function (a, b, c) {
      a.Ye = b;
      !c && W.j.MV ? (b = W.f.NJ(b), c = a.style[W.f.Ld].split("rotate"), 1 < c.length ? (c[0] = b, a.style[W.f.Ld] = c.join("rotate")) : a.style[W.f.Ld] = b, W.j.$Z && (a.style.WebkitBackfaceVisibility = "hidden")) : (a.style.left = b.x + "px", a.style.top = b.y + "px")
    }, Wc: function (a) {
      a.Ye || (a.Ye = a.style.left ? new W.L(parseInt(a.style.left), parseInt(a.style.top)) : new W.L(0, 0));
      return a.Ye
    }, K6: function (a,
                     b) {
      a = a instanceof Array ? a : [a];
      for (var c = 0; c < a.length; c += 1)a[c].style.cssText = b
    }, wM: function (a, b) {
      ";" !== b[b.length - 1] && (b += ";");
      return b.toLowerCase() !== a.style.cssText.replace(/ /g, "").toLowerCase() ? (a.style.cssText = b, !0) : !1
    }, ja: function (a, b) {
      a = a instanceof Array ? a : [a];
      for (var c = 0; c < a.length; c += 1)for (var d in b)b.hasOwnProperty(d) && (a[c].style[d] = b[d]);
      return this
    }, VL: function (a) {
      for (; a.childNodes.length;)a.removeChild(a.childNodes[0])
    }, remove: function (a) {
      a && a.parentNode && a.parentNode.removeChild(a)
    },
    rotate: function (a, b, c) {
      var d = W.f.Ld;
      c = c || {x: a.clientWidth / 2, y: a.clientHeight / 2};
      d ? (a.style[d] = "" + (" rotate(" + b + "deg)"), a.style[W.f.Fk[d] + "-origin"] = c.x + "px " + c.y + "px") : (d = Math.cos(b * Math.PI / 180), b = Math.sin(b * Math.PI / 180), a.style.filter = "progid:DXImageTransform.Microsoft.Matrix()", 0 < a.filters.length && (a = a.filters.item(0), a.c3 = -c.x * d + c.y * b + c.x, a.d3 = -c.x * b - c.y * d + c.y, a.M11 = a.M22 = d, a.M12 = -(a.M21 = b)))
    }, QY: function (a, b, c) {
      var d = W.f.Ld;
      c = c || {x: a.clientWidth / 2, y: a.clientHeight / 2};
      return d ? W.f.Fk[d] + ":" + ("" +
        (" rotate(" + b + "deg)")) + ";" + (W.f.Fk[d] + "-origin:" + c.x + "px " + c.y + "px") : ""
    }, xi: function (a, b, c) {
      a.width = b;
      a.height = c
    }, getElementsByClassName: function (a, b, c) {
      b = b || "*";
      c = c || document;
      if (c.getElementsByClassName)return c.getElementsByClassName(a);
      b = c.getElementsByTagName(b);
      a = RegExp("(^|\\s)" + a + "(\\s|$)");
      c = [];
      for (var d = 0, f; d < b.length; d++)f = b[d], a.test(f.className) && c.push(f);
      return c
    }, fillText: function (a, b) {
      if (a)return void 0 !== a.textContent ? a.textContent = b : void 0 !== a.innerText ? a.innerText = b : a.innerHTML =
        b, a
    }
  };
  (function () {
    var a = W.f.jC(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]), b;
    W.extend(W.f, {
      MI: function () {
        W.B.e(window, "selectstart", W.B.preventDefault);
        if (a) {
          var c = document.documentElement.style;
          "none" !== c[a] && (b = c[a], c[a] = "none")
        }
      }, VI: function () {
        W.B.F(window, "selectstart", W.B.preventDefault);
        a && "none" !== b && (document.documentElement.style[a] = b, b = "none")
      }, wX: function () {
        W.B.e(window, "dragstart", W.B.preventDefault)
      }, VX: function () {
        W.B.F(window, "dragstart", W.B.preventDefault)
      }
    })
  })();
  W.f.Ld = W.f.jC(["WebkitTransform", "OTransform", "MozTransform", "msTransform", "transform"]);
  W.f.Fk = {
    transform: "transform",
    WebkitTransform: "-webkit-transform",
    OTransform: "-o-transform",
    MozTransform: "-moz-transform",
    msTransform: "-ms-transform"
  };
  W.f.Tv = W.f.jC(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
  W.f.o3 = "webkitTransition" === W.f.Tv || "OTransition" === W.f.Tv ? W.f.Tv + "End" : "transitionend";
  W.B = {
    e: function (a, b, c, d) {
      function f (b) {
        b = b || window.event;
        b.target = b.target || b.srcElement;
        return c.call(d || a, b, k)
      }

      var g = W.g.zb(a) + "_" + W.g.zb(c) + "_" + W.g.zb(d || a), h = b + g;
      if (a[h])return this;
      var k = b;
      W.j.hJ && "mousewheel" === b && (b = "DOMMouseScroll");
      if (W.j.Sn && ("mouseover" === b || "mouseout" === b)) {
        var l = f;
        b = "mouseover" === b ? "mouseenter" : "mouseleave";
        f = function (a) {
          l(a)
        }
      }
      if (W.j.NL && 0 === b.indexOf("touch"))return a[h] = f, this.EV(a, b, f, g);
      W.j.ud && "dblclick" === b && this.CV && this.CV(a, f, g);
      "addEventListener" in a ? a.addEventListener(b,
        f, !1) : "attachEvent" in a ? a.attachEvent("on" + b, f) : a["on" + b] = f;
      a[h] = f;
      return this
    }, tk: function (a, b, c, d) {
      var f = this;
      this.e(a, b, function h (k) {
        f.F(a, b, h, d);
        return c.call(d || a, k || window.event, b)
      }, d)
    }, F: function (a, b, c, d) {
      c = W.g.zb(a) + "_" + W.g.zb(c) + "_" + W.g.zb(d || a);
      d = b + c;
      var f = a[d];
      W.j.hJ && "mousewheel" === b && (b = "DOMMouseScroll");
      !W.j.Sn || "mouseover" !== b && "mouseout" !== b || (b = "mouseover" === b ? "mouseenter" : "mouseleave");
      W.j.NL && -1 < b.indexOf("touch") ? this.s0(a, b, c) : W.j.ud && "dblclick" === b && this.o0 ? this.o0(a, c) : "removeEventListener" in
      a ? a.removeEventListener(b, f, !1) : "detachEvent" in a && -1 === b.indexOf("touch") ? f && a.detachEvent("on" + b, f) : a["on" + b] = null;
      a[d] = null;
      return this
    }, O6: function (a, b) {
      var c = document.createEvent("MouseEvents");
      c.initMouseEvent(a, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
      b.target.dispatchEvent(c)
    }, stopPropagation: function (a) {
      a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
      return this
    }, J1: function (a) {
      var b = W.B.stopPropagation;
      W.j.ud && (W.B.e(a, "touchstart", b, this), W.B.e(a,
        "touchmove", b, this), W.B.e(a, "touchend", b, this));
      W.j.V || (W.B.e(a, "mousedown", b, this), W.B.e(a, "mouseup", b, this), W.B.e(a, "mousemove", b, this));
      W.j.ML && (W.B.e(a, "pointerdown", b, this), W.B.e(a, "pointerup", b, this), W.B.e(a, "pointermove", b, this));
      W.j.f_ && (W.B.e(a, "MSPointerDown", b, this), W.B.e(a, "MSPointerUp", b, this), W.B.e(a, "MSPointerMove", b, this))
    }, preventDefault: function (a) {
      a.preventDefault ? a.preventDefault() : a.returnValue = !1;
      return this
    }, stop: function (a) {
      return W.B.preventDefault(a).stopPropagation(a)
    },
    f1: function (a) {
      return a && a.getBoundingClientRect ? (a.Vv = a.getBoundingClientRect(), a.oD = [a.clientLeft, a.clientTop], !0) : !1
    }, p2: function (a) {
      a.Vv && (a.Vv = null, a.oD = null)
    }, ZX: function (a, b) {
      var c = b.Vv || b.getBoundingClientRect(), d = b.oD || [b.clientLeft, b.clientTop];
      return new W.L(a.clientX - c.left - d[0], a.clientY - c.top - d[1])
    }, Ag: function (a, b) {
      if (b && b.getBoundingClientRect)return this.ZX(a, b);
      var c = document.body, d = document.documentElement,
        c = new W.L(W.j.ud ? a.pageX : a.clientX + (c.scrollLeft || d.scrollLeft), W.j.ud ? a.pageY :
          a.clientY + (c.scrollTop || d.scrollTop));
      return b ? c.Qa(W.f.iA(b)) : c
    }, yK: function (a) {
      return 1 === a.which || 0 === a.button || 1 === a.button
    }
  };
  W.extend(W.B, {
    Kx: [], RF: !1, EV: function (a, b, c, d) {
      switch (b) {
        case "touchstart":
          return this.HV(a, b, c, d);
        case "touchend":
          return this.FV(a, b, c, d);
        case "touchmove":
          return this.GV(a, b, c, d)
      }
    }, gi: function (a) {
      if (W.j.ML)return a;
      switch (a) {
        case "pointerdown":
          return "MSPointerDown";
        case "pointerup":
          return "MSPointerUp";
        case "pointercancel":
          return "MSPointerCancel";
        case "pointermove":
          return "MSPointerMove"
      }
    }, HV: function (a, b, c, d) {
      function f (a) {
        for (var b = !1, d = 0; d < g.length; d += 1)if (g[d].pointerId === a.pointerId) {
          b = !0;
          break
        }
        b ||
        g.push(a);
        a.touches = g.slice();
        a.changedTouches = [a];
        c(a)
      }

      var g = this.Kx;
      a["_amap_touchstart" + d] = f;
      a.addEventListener(this.gi("pointerdown"), f, !1);
      this.RF || (a = function (a) {
        for (var b = 0; b < g.length; b += 1)if (g[b].pointerId === a.pointerId) {
          g.splice(b, 1);
          break
        }
      }, document.documentElement.addEventListener(this.gi("pointerup"), a, !1), document.documentElement.addEventListener(this.gi("pointercancel"), a, !1), this.RF = !0);
      return this
    }, GV: function (a, b, c, d) {
      function f (a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE || 0 !== a.buttons) {
          for (var b =
            0; b < g.length; b += 1)if (g[b].pointerId === a.pointerId) {
            g[b] = a;
            break
          }
          a.touches = g.slice();
          a.changedTouches = [a];
          c(a)
        }
      }

      var g = this.Kx;
      a["_amap_touchmove" + d] = f;
      a.addEventListener(this.gi("pointermove"), f, !1);
      return this
    }, FV: function (a, b, c, d) {
      function f (a) {
        for (var b = 0; b < g.length; b += 1)if (g[b].pointerId === a.pointerId) {
          g.splice(b, 1);
          break
        }
        a.touches = g.slice();
        a.changedTouches = [a];
        c(a)
      }

      var g = this.Kx;
      a["_amap_touchend" + d] = f;
      a.addEventListener(this.gi("pointerup"), f, !1);
      a.addEventListener(this.gi("pointercancel"),
        f, !1);
      return this
    }, s0: function (a, b, c) {
      c = a["_amap_" + b + c];
      switch (b) {
        case "touchstart":
          a.removeEventListener(this.gi("pointerdown"), c, !1);
          break;
        case "touchmove":
          a.removeEventListener(this.gi("pointermove"), c, !1);
          break;
        case "touchend":
          a.removeEventListener(this.gi("pointerup"), c, !1), a.removeEventListener(this.gi("pointercancel"), c, !1)
      }
      return this
    }
  });
  (function () {
    function a (a) {
      var b = a.target || a.srcElement;
      b.wD && g(b.wD);
      b.wD = f(function () {
        var c = b.Gi;
        if (c && c.Fi)for (var d = 0; d < c.Fi.length; d += 1)c.Fi[d].call(c, a)
      })
    }

    function b () {
      var b = this.contentDocument.defaultView;
      b.Gi = this.HO;
      b.addEventListener("resize", a);
      a.call(b, {target: b})
    }

    var c = document.attachEvent, d = navigator.userAgent.match(/(Trident|Edge)/), f = W.g.Oe, g = W.g.tl;
    W.extend(W.B, {
      JV: function (f, g) {
        if (!f.Fi)if (f.Fi = [], c) f.Gi = f, f.attachEvent("onresize", a); else {
          "static" === window.getComputedStyle(f).position &&
          (f.style.position = "relative");
          var l = f.Gi = document.createElement("object");
          l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;");
          l.HO = f;
          l.onload = b;
          l.type = "text/html";
          d && f.appendChild(l);
          l.data = "about:blank";
          d || f.appendChild(l)
        }
        f.Fi.push(g)
      }, w6: function (b, d) {
        b.Fi.splice(b.Fi.indexOf(d), 1);
        b.Fi.length || (c ? b.detachEvent("onresize", a) : (b.Gi.contentDocument.defaultView.removeEventListener("resize", a),
          b.Gi = !b.removeChild(b.Gi)))
      }, MW: function (a) {
        a.Fi = null;
        if (a.Gi) {
          var b = a.Gi;
          b.parentNode === a && b.parentNode.removeChild(b);
          a.Gi = null
        }
      }
    })
  })();
  W.Ra = {
    a_: W.q.rb + "/maps", En: W.W.En, SA: 0, jo: [], zl: {}, of: function (a, b) {
      function c () {
        d += 1;
        d === f.length && b && b()
      }

      a.length || b();
      for (var d = 0, f = [], g = 0; g < a.length; g += 1) {
        var h = this.En[a[g]];
        if (h)for (var k = 0; k < h.length; k += 1)f.push(h[k]);
        f.push(a[g])
      }
      for (g = 0; g < f.length; g += 1)this.Iz(f[g], c)
    }, lu: function (a) {
      for (var b = 0; b < a.length; b += 1)if (1 !== this.Jt(a[b]).status)return !1;
      return !0
    }, Iz: function (a, b) {
      var c = this.Jt(a);
      if (1 === c.status) b && b(); else {
        b && c.xn.push(b);
        try {
          if (W.j.ru && window.localStorage) {
            var d = window.localStorage["_AMap_" +
            a];
            d && (d = JSON.parse(d), d.version === W.q.Ai ? (window._jsload_(a, d.script, !0), d.css && window._cssload_(a, d.css, !0)) : window.localStorage.removeItem("_AMap_" + a))
          }
        } catch (f) {
        }
        if (0 === c.status) {
          this.e0(a);
          var g = this;
          g.SA || (g.SA = 1, window.setTimeout(function () {
            g.SA = 0;
            var a = g.a_ + "/modules?v=" + W.q.My + "&key=" + W.q.key + "&m=" + g.jo.join(",") + "&vrs=" + W.q.Ai;
            W.Ra.UP(g.jo.join(","));
            g.jo = [];
            c.ev = g.JZ(a)
          }, 1));
          c.status = -1
        }
      }
    }, UP: function (a) {
      new W.qa.Ca(W.q.ec + "/v3/log/init?" + ["s=rsv3&product=JsModule&key=" + W.q.key, "m=" + a].join("&"),
        {callback: "callback"})
    }, load: function (a, b) {
      var c = this.En[a];
      if (c) {
        for (var d = [], f = 0; f < c.length; f += 1)d.push(c[f]);
        d.push(a);
        for (var g = 0, c = function () {
          g += 1;
          g === d.length && b && b()
        }, f = 0; f < d.length; f += 1)this.Iz(d[f], c)
      } else this.Iz(a, b)
    }, e0: function (a) {
      for (var b = 0; b < this.jo.length; b += 1)if (this.jo[b] === a)return;
      this.jo.push(a)
    }, yk: function (a, b) {
      var c = this.Jt(a);
      try {
        eval(b)
      } catch (d) {
        return
      }
      c.status = 1;
      for (var f = 0, g = c.xn.length; f < g; f += 1)c.xn[f]();
      c.xn = []
    }, s4: function (a, b) {
      var c = this;
      c.timeout = setTimeout(function () {
        1 !==
        c.zl[a].status ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
      }, 5E3)
    }, Jt: function (a) {
      this.zl[a] || (this.zl[a] = {}, this.zl[a].status = 0, this.zl[a].xn = []);
      return this.zl[a]
    }, remove: function (a) {
      this.zl[a] = null
    }, JZ: function (a) {
      W.q.mode && (a += "&mode=" + W.q.mode);
      var b = document.createElement("script");
      b.charset = "utf-8";
      b.src = a;
      document.body.appendChild(b);
      return b
    }
  };
  window._jsload_ = function (a, b, c) {
    var d = W.Ra.Jt(a);
    d.ev && W.g.indexOf(document.body.childNodes, d.ev) && document.body.removeChild(d.ev);
    d.ev = null;
    try {
      if (!c && window.localStorage && b && "" !== b && W.j.ru) {
        var f = window.localStorage["_AMap_" + a], f = f || "{}", f = JSON.parse(f);
        f.version !== W.q.Ai || f.script ? window.localStorage.setItem("_AMap_" + a, JSON.stringify({
          script: b,
          version: W.q.Ai
        })) : window.localStorage.setItem("_AMap_" + a, JSON.stringify({script: b, css: f.css, version: W.q.Ai}))
      }
    } catch (g) {
    }
    W.Ra.yk(a, b)
  };
  window._cssload_ = function (a, b, c) {
    try {
      !c && window.localStorage && b && "" !== b && W.j.ru && window.localStorage.setItem("_AMap_" + a, JSON.stringify({
        css: b,
        version: W.q.Ai
      }))
    } catch (d) {
    }
    var f = document.createElement("style");
    f.type = "text/css";
    -1 === W.q.rb.indexOf("webapi.amap.com") && (b = b.replace(eval("/webapi.amap.com/gi"), W.q.rb.split("://")[1]));
    "https" === W.q.vc && (b = b.replace(eval("/http:/gi"), "https:"));
    f.styleSheet ? (a = function () {
      try {
        f.styleSheet.cssText = b
      } catch (a) {
      }
    }, f.styleSheet.disabled ? setTimeout(a, 10) : a()) :
      f.appendChild(document.createTextNode(b));
    a = document.head || document.getElementsByTagName("head")[0];
    2 > a.childNodes.length ? a.appendChild(f) : a.insertBefore(f, a.childNodes[1])
  };
  W.Q = W.W.extend({
    D: function (a, b, c) {
      var d = parseFloat(b), f = parseFloat(a);
      if (isNaN(a) || isNaN(b))throw"Invalid Object: LngLat(" + f + ", " + d + ")";
      !0 !== c && (d = Math.max(Math.min(d, 90), -90), f = (f + 180) % 360 + (-180 > f || 180 === f ? 180 : -180));
      this.N = d;
      this.J = f
    }, BJ: function () {
      return W.g.lf(this.J, 6)
    }, zJ: function () {
      return W.g.lf(this.N, 6)
    }, add: function (a, b) {
      return new W.Q(this.J + a.J, this.N + a.N, b)
    }, Qa: function (a, b) {
      return new W.Q(this.J - a.J, this.N - a.N, b)
    }, Eb: function (a, b) {
      return new W.Q(this.J / a, this.N / a, b)
    }, Gc: function (a, b) {
      return new W.Q(this.J *
        a, this.N * a, b)
    }, Df: function (a) {
      a = W.g.ia(a);
      if (a instanceof W.Q) {
        var b = Math.PI / 180, c = Math.sin((a.N - this.N) * b / 2), d = Math.sin((a.J - this.J) * b / 2);
        a = c * c + d * d * Math.cos(this.N * b) * Math.cos(a.N * b);
        return 12756274 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      }
      if (a instanceof Array)return this.xX(a)
    }, xX: function (a) {
      a = W.g.ia(a);
      for (var b = Infinity, c = 0, d = 1, f = a.length; d < f; c = d, d += 1)c = W.Vc.wI([this.J, this.N], [[a[c].J, a[c].N], [a[d].J, a[d].N]]), b = Math.min(b, this.Df(new W.Q(c[0], c[1])));
      return b
    }, offset: function (a, b) {
      if (isNaN(a) ||
        isNaN(b))return !1;
      var c = 2 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.N * Math.PI / 180)),
        c = this.J + 180 * c / Math.PI, d = 2 * Math.asin(Math.round(b) / 12756274);
      return new W.Q(c, this.N + 180 * d / Math.PI)
    }, Kb: function (a) {
      a = W.g.ia(a);
      return a instanceof W.Q ? 1E-9 >= Math.max(Math.abs(this.N - a.N), Math.abs(this.J - a.J)) : !1
    }, toString: function () {
      return W.g.lf(this.J, 6) + "," + W.g.lf(this.N, 6)
    }, Sb: function () {
      return new W.Q(this.J, this.N)
    }
  });
  W.Q.FY = function (a, b, c) {
    c = c + 1 || Math.round(Math.abs(a.J - b.J));
    if (!c || 0.001 > Math.abs(a.J - b.J))return [];
    var d = [], f = W.LC.rX, g = W.LC.g0, h = Math.asin, k = Math.sqrt, l = Math.sin, m = Math.pow, n = Math.cos,
      p = Math.atan2, q = a.N * f;
    a = a.J * f;
    var s = b.N * f;
    b = b.J * f;
    for (var h = 2 * h(k(m(l((q - s) / 2), 2) + n(q) * n(s) * m(l((a - b) / 2), 2))), u, t, B, v, f = 1; f < c; f += 1)u = 1 / c * f, t = l((1 - u) * h) / l(h), B = l(u * h) / l(h), u = t * n(q) * n(a) + B * n(s) * n(b), v = t * n(q) * l(a) + B * n(s) * l(b), t = t * l(q) + B * l(s), t = p(t, k(m(u, 2) + m(v, 2))), u = p(v, u), d.push(new W.Q(u * g, t * g));
    return d
  };
  W.Q.Jn({
    BJ: "getLng",
    zJ: "getLat",
    add: "add",
    Qa: "subtract",
    Eb: "divideBy",
    Gc: "multiplyBy",
    Df: "distance",
    offset: "offset",
    Kb: "equals",
    toString: "toString"
  });
  W.vd = W.W.extend({
    D: function () {
      if (2 === arguments.length) this.nb = W.g.ia(arguments[0]), this.fb = W.g.ia(arguments[1]); else if (4 === arguments.length) this.nb = new W.Q(arguments[0], arguments[1]), this.fb = new W.Q(arguments[2], arguments[3]); else throw"Invalid Object: Bounds(" + arguments.join(",") + ")";
    }, zq: function () {
      return this.nb
    }, xq: function () {
      return this.fb
    }, oh: function () {
      return new W.Q(this.nb.J, this.fb.N, !0)
    }, hk: function () {
      return new W.Q(this.fb.J, this.nb.N, !0)
    }, contains: function (a) {
      var b = this.nb, c = this.fb,
        d;
      a instanceof W.vd ? (d = a.nb, a = a.fb) : d = a = W.g.ia(a);
      var f = d.J, g = b.J, h = a.J, k = c.J;
      g > k && (k += 360, 0 > f && (f += 360), 0 > h && (h += 360));
      return d.N >= b.N && a.N <= c.N && f >= g && h <= k
    }, Ud: function (a) {
      var b = this.nb, c = this.fb, d = a.nb;
      a = a.fb;
      var f = a.J >= b.J && d.J <= c.J;
      return a.N >= b.N && d.N <= c.N && f
    }, Ff: function () {
      return new W.Q(this.nb.J > this.fb.J ? (this.nb.J + this.fb.J + 360) / 2 % 360 : (this.nb.J + this.fb.J) / 2, (this.nb.N + this.fb.N) / 2)
    }, extend: function (a) {
      this.nb.J = Math.min(this.nb.J, a.J);
      this.nb.N = Math.min(this.nb.N, a.N);
      this.fb.J = Math.max(this.fb.J,
        a.J);
      this.fb.N = Math.max(this.fb.N, a.N);
      return this
    }, o2: function (a) {
      return this.extend(a.nb).extend(a.fb)
    }, toString: function () {
      return this.nb.toString() + ";" + this.fb.toString()
    }, Sb: function () {
      return new W.vd(this.nb.Sb(), this.fb.Sb())
    }, Kb: function (a) {
      return a instanceof W.vd ? this.nb.Kb(a.nb) && this.fb.Kb(a.fb) : !1
    }, Je: function () {
      return Math.abs(this.fb.J - this.nb.J)
    }, He: function () {
      return Math.abs(this.nb.N - this.fb.N)
    }
  });
  W.vd.Jn({
    zq: "getSouthWest",
    xq: "getNorthEast",
    oh: "getNorthWest",
    hk: "getSouthEast",
    contains: "contains",
    Ud: "intersects",
    Ff: "getCenter"
  });
  W.L = W.W.extend({
    D: function (a, b, c) {
      if (isNaN(a) || isNaN(b))throw"Invalid Object: Pixel(" + a + ", " + b + ")";
      this.x = c ? Math.round(a) : Number(a);
      this.y = c ? Math.round(b) : Number(b)
    }, dd: function () {
      return this.x
    }, Fc: function () {
      return this.y
    }, add: function (a, b) {
      return new W.L(this.x + a.x, this.y + a.y, b)
    }, Qa: function (a, b) {
      return new W.L(this.x - a.x, this.y - a.y, b)
    }, Eb: function (a, b) {
      return new W.L(this.x / a, this.y / a, b)
    }, Gc: function (a, b) {
      return new W.L(this.x * a, this.y * a, b)
    }, Df: function (a) {
      var b = a.x - this.x;
      a = a.y - this.y;
      return Math.sqrt(b *
        b + a * a)
    }, floor: function () {
      return new W.L(Math.floor(this.x), Math.floor(this.y))
    }, round: function () {
      return new W.L(this.x, this.y, !0)
    }, Kb: function (a) {
      return a instanceof W.L && this.x === a.x && this.y === a.y
    }, Sb: function (a) {
      return new W.L(this.x, this.y, a)
    }, toString: function () {
      return this.x + "," + this.y
    }
  });
  W.L.Jn({
    dd: "getX",
    Fc: "getY",
    add: "add",
    Qa: "subtract",
    Eb: "divideBy",
    Gc: "multiplyBy",
    Df: "distance",
    Kb: "equals",
    toString: "toString"
  });
  W.bc = W.W.extend({
    D: function (a, b, c) {
      if (isNaN(a) || isNaN(b))throw"Invalid Object: Size(" + a + ", " + b + ")";
      this.width = c ? Math.round(a) : Number(a);
      this.height = c ? Math.round(b) : Number(b)
    }, Je: function () {
      return this.width
    }, He: function () {
      return this.height
    }, yo: function () {
      return new W.L(this.Je(), this.He())
    }, contains: function (a) {
      return Math.abs(a.x) <= Math.abs(this.width) && Math.abs(a.y) <= Math.abs(this.height)
    }, Kb: function (a) {
      return a instanceof W.bc && this.width === a.width && this.height === a.height
    }, toString: function () {
      return this.Je() +
        "," + this.He()
    }
  });
  W.bc.Jn({Je: "getWidth", He: "getHeight", toString: "toString"});
  W.ce = W.W.extend({
    D: function () {
      if (2 === arguments.length) this.eb = arguments[0], this.ac = arguments[1]; else if (1 === arguments.length && arguments[0] instanceof Array || 4 === arguments.length) {
        var a = arguments[0] instanceof Array ? arguments[0] : arguments;
        this.eb = new W.L(a[0], a[1]);
        this.ac = new W.L(a[2], a[3])
      } else throw"Invalid Object: PixelBounds(" + arguments.join(",") + ")";
    }, Ff: function (a) {
      return new W.L((this.eb.x + this.ac.x) / 2, (this.eb.y + this.ac.y) / 2, a)
    }, contains: function (a) {
      var b;
      a instanceof W.ce ? (b = a.eb, a = a.ac) : b =
        a;
      return b.x > this.eb.x && a.x < this.ac.x && b.y > this.eb.y && a.y < this.ac.y
    }, Je: function () {
      return this.ac.x - this.eb.x
    }, He: function () {
      return this.ac.y - this.eb.y
    }, Ud: function (a, b) {
      b || 0 === b || (b = 20);
      var c = this.eb, d = this.ac, f = a.eb, g = a.ac, h = g.y >= c.y - b && f.y <= d.y + b;
      return g.x >= c.x - b && f.x <= d.x + b && h
    }, toString: function () {
      return this.eb + ";" + this.ac
    }, Sb: function () {
      return new W.ce(this.eb.Sb(), this.ac.Sb())
    }
  });
  W.A = {};
  W.A.bI = function (a) {
    for (var b = [Infinity, Infinity, -Infinity, -Infinity], c = 0, d = a.length; c < d; c += 1)W.A.$I(b, a[c]);
    return b
  };
  W.A.cI = function (a, b, c) {
    var d = Math.min.apply(null, a);
    a = Math.max.apply(null, a);
    var f = Math.min.apply(null, b);
    b = Math.max.apply(null, b);
    return W.A.gX(d, a, f, b, c)
  };
  W.A.buffer = function (a, b) {
    a[0] -= b;
    a[1] -= b;
    a[2] += b;
    a[3] += b
  };
  W.A.Sb = function (a) {
    return a.slice()
  };
  W.A.Dd = function (a, b) {
    return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3]
  };
  W.A.zI = function (a, b) {
    return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
  };
  W.A.D4 = function () {
    return [Infinity, Infinity, -Infinity, -Infinity]
  };
  W.A.gX = function (a, b, c, d, f) {
    return "undefined" !== typeof f ? (f[0] = a, f[2] = b, f[1] = c, f[3] = d, f) : [a, c, b, d]
  };
  W.A.empty = function (a) {
    a[0] = a[1] = Infinity;
    a[2] = a[3] = -Infinity;
    return a
  };
  W.A.Kb = function (a, b) {
    return a[0] === b[0] && a[2] === b[2] && a[1] === b[1] && a[3] === b[3]
  };
  W.A.extend = function (a, b) {
    b[0] < a[0] && (a[0] = b[0]);
    b[2] > a[2] && (a[2] = b[2]);
    b[1] < a[1] && (a[1] = b[1]);
    b[3] > a[3] && (a[3] = b[3])
  };
  W.A.$I = function (a, b) {
    b[0] < a[0] && (a[0] = b[0]);
    b[0] > a[2] && (a[2] = b[0]);
    b[1] < a[1] && (a[1] = b[1]);
    b[1] > a[3] && (a[3] = b[1])
  };
  W.A.W4 = function (a) {
    return [a[0], a[1]]
  };
  W.A.X4 = function (a) {
    return [a[2], a[1]]
  };
  W.A.Ff = function (a) {
    return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
  };
  W.A.e5 = function (a, b, c, d, f) {
    var g = b * d[0] / 2;
    d = b * d[1] / 2;
    b = Math.cos(c);
    c = Math.sin(c);
    g = [-g, -g, g, g];
    d = [-d, d, -d, d];
    var h, k, l;
    for (h = 0; 4 > h; h += 1)k = g[h], l = d[h], g[h] = a[0] + k * b - l * c, d[h] = a[1] + k * c + l * b;
    return W.A.cI(g, d, f)
  };
  W.A.He = function (a) {
    return a[3] - a[1]
  };
  W.A.q5 = function (a) {
    return [a[2] - a[0], a[3] - a[1]]
  };
  W.A.v5 = function (a) {
    return [a[0], a[3]]
  };
  W.A.w5 = function (a) {
    return [a[2], a[3]]
  };
  W.A.Je = function (a) {
    return a[2] - a[0]
  };
  W.A.Ud = function (a, b) {
    return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
  };
  W.A.Pq = function (a) {
    return a[2] < a[0] || a[3] < a[1]
  };
  W.A.normalize = function (a, b) {
    return [(b[0] - a[0]) / (a[2] - a[0]), (b[1] - a[1]) / (a[3] - a[1])]
  };
  W.A.G6 = function (a, b) {
    var c = (a[2] - a[0]) / 2 * (b - 1), d = (a[3] - a[1]) / 2 * (b - 1);
    a[0] -= c;
    a[2] += c;
    a[1] -= d;
    a[3] += d
  };
  W.A.touches = function (a, b) {
    return W.A.Ud(a, b) && (a[0] === b[2] || a[2] === b[0] || a[1] === b[3] || a[3] === b[1])
  };
  W.A.transform = function (a, b, c) {
    a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
    b(a, a, 2);
    return W.A.cI([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c)
  };
  W.vd.Zb({
    D: function () {
      var a = W.vd.prototype.D;
      return function () {
        a.apply(this, arguments);
        this.southwest = this.nb;
        this.northeast = this.fb
      }
    }(), extend: function () {
      var a = W.vd.prototype.extend;
      return function () {
        a.apply(this, arguments);
        this.nb.lng = this.nb.J;
        this.nb.lat = this.nb.N;
        this.fb.lng = this.fb.J;
        this.fb.lat = this.fb.N;
        return this
      }
    }()
  });
  W.Q.Zb({
    D: function () {
      var a = W.Q.prototype.D;
      return function () {
        a.apply(this, arguments);
        this.lng = parseFloat(this.J.toFixed(6));
        this.lat = parseFloat(this.N.toFixed(6))
      }
    }()
  });
  W.Qr = W.W.extend({
    D: function (a, b, c, d) {
      this.yD = a;
      this.ID = b;
      this.OD = c;
      this.iE = d
    }, transform: function (a, b) {
      return this.zH(a.Sb(), b)
    }, zH: function (a, b) {
      b = b || 1;
      a.x = b * (this.yD * a.x + this.ID);
      a.y = b * (this.OD * a.y + this.iE);
      return a
    }, q2: function (a, b) {
      b = b || 1;
      return new W.L((a.x / b - this.ID) / this.yD, (a.y / b - this.iE) / this.OD)
    }
  });
  W.Ei = W.W.extend({
    D: function (a) {
      this.Jv = a.MAX_LATITUDE || 85.0511287798;
      a.project && a.unproject && (this.mb = a.project, this.vf = a.unproject)
    }
  });
  W.Ei.aD = {
    mb: function (a) {
      return new W.L(a.J, a.N)
    }, vf: function (a, b) {
      return new W.Q(a.x, a.y, b)
    }
  };
  W.Ei.jO = new W.Ei({
    MAX_LATITUDE: 85.0511287798, project: function (a) {
      var b = Math.PI / 180, c = this.Jv, c = Math.max(Math.min(c, a.N), -c);
      a = a.J * b;
      b = Math.log(Math.tan(Math.PI / 4 + c * b / 2));
      return new W.L(a, b, !1)
    }, unproject: function (a, b) {
      var c = 180 / Math.PI;
      return new W.Q(a.x * c, (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * c, b)
    }
  });
  W.Ei.bD = {
    Jv: 85.0840591556, Pv: 6356752.3142, Ov: 6378137, mb: function (a) {
      var b = Math.PI / 180, c = this.Jv, d = Math.max(Math.min(c, a.N), -c), f = this.Ov, c = this.Pv;
      a = a.J * b * f;
      b *= d;
      f = c / f;
      f = Math.sqrt(1 - f * f);
      d = f * Math.sin(b);
      d = Math.pow((1 - d) / (1 + d), 0.5 * f);
      b = -c * Math.log(Math.tan(0.5 * (0.5 * Math.PI - b)) / d);
      return new W.L(a, b)
    }, vf: function (a, b) {
      for (var c = 180 / Math.PI, d = this.Ov, f = this.Pv, g = a.x * c / d, d = f / d, d = Math.sqrt(1 - d * d), f = Math.exp(-a.y / f), h = Math.PI / 2 - 2 * Math.atan(f), k = 15, l = 0.1; 1E-7 < Math.abs(l) && (k -= 1, 0 < k);)l = d * Math.sin(h), l = Math.PI /
        2 - 2 * Math.atan(f * Math.pow((1 - l) / (1 + l), 0.5 * d)) - h, h += l;
      return new W.Q(g, h * c, b)
    }
  };
  W.mg = {};
  W.mg.Er = {
    qu: function (a, b) {
      var c = this.Yd.mb(a), d = this.scale(b);
      return this.ur.zH(c, d)
    }, CB: function (a, b, c) {
      b = this.scale(b);
      a = this.ur.q2(a, b);
      return this.Yd.vf(a, c)
    }, mb: function (a) {
      return this.Yd.mb(a)
    }, scale: function (a) {
      return 256 * Math.pow(2, a)
    }, hi: function (a) {
      return 12756274 * Math.PI / (256 * Math.pow(2, a))
    }
  };
  W.mg.FN = W.extend({}, W.mg.Er, {
    code: "EPSG:3857",
    Yd: W.Ei.jO,
    ur: new W.Qr(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),
    mb: function (a) {
      return this.Yd.mb(a).Gc(6378137)
    }
  });
  W.mg.EN = W.extend({}, W.mg.Er, {
    code: "EPSG:3395", Yd: W.Ei.bD, ur: function () {
      var a = W.Ei.bD;
      return new W.Qr(0.5 / (Math.PI * a.Ov), 0.5, -0.5 / (Math.PI * a.Pv), 0.5)
    }()
  });
  W.mg.GN = W.extend({}, W.mg.Er, {code: "EPSG:4326", Yd: W.Ei.aD, ur: new W.Qr(1 / 360, 0.5, -1 / 360, 0.25)});
  W.mg.m3 = W.extend({}, W.mg.Er, {Yd: W.Ei.aD, ur: new W.Qr(1, 0, 1, 0)});
  W.RK = {
    mb: function (a, b) {
      a = W.g.ia(a);
      return (this.Cn || this.get("crs")).qu(a, b || this.get("zoom"))
    }, vf: function (a, b, c) {
      return (this.Cn || this.get("crs")).CB(a, b || this.get("zoom"), c)
    }, R5: function (a, b) {
      return this.mb(a, b)
    }, V4: function (a, b) {
      return this.vf(a, b)
    }, NA: function (a, b) {
      var c = this.Ub(a, b);
      return this.Yj(c, b)
    }, Wj: function (a, b) {
      var c = this.get("size").yo().Eb(2);
      if (a.Kb(c))return this.get("center");
      c = this.qz(a, b);
      return this.df(c, b)
    }, df: function (a, b) {
      return this.vf(a.Eb(this.get("resolution", b)), b)
    }, Ub: function (a,
                     b, c) {
      a = W.g.ia(a);
      return this.mb(a, b).Gc(c || this.get("resolution", b))
    }, a5: function (a) {
      return a ? this.mb(this.get("center"), a) : this.get("centerPixel")
    }, qz: function (a, b) {
      var c = this.get("size").yo().Eb(2), d = a.Qa(c),
        f = (this.get("rotateEnable") ? this.get("rotation") : 0) * Math.PI / 180,
        c = d.x * Math.cos(f) + Math.sin(f) * d.y, d = -Math.sin(f) * d.x + Math.cos(f) * d.y,
        c = this.get("centerCoords").add((new W.L(c, d)).Gc(this.get("resolution", b)));
      c.x = (c.x + 4.00750166855784E7) % 4.00750166855784E7;
      return c
    }, Yj: function (a, b) {
      a = a.Sb();
      var c = this.df(a), d = this.get("center");
      -180 > d.J - c.J ? a.x -= W.g.Za : 180 < d.J - c.J && (a.x += W.g.Za);
      var c = this.get("centerCoords"), c = a.Qa(c).Eb(this.get("resolution", b)), d = this.get("size").yo().Eb(2),
        f = (this.get("rotateEnable") ? this.get("rotation") : 0) * Math.PI / 180;
      return d.add(new W.L(c.x * Math.cos(f) - Math.sin(f) * c.y, Math.sin(f) * c.x + Math.cos(f) * c.y))
    }
  };
  var wc = W.W.extend({
    ta: [W.da, W.xd],
    G: {center: new W.Q(116.397128, 39.916527), zoom: 13, rotation: 0, crs: "EPSG3857"},
    D: function (a) {
      this.CLASS_NAME = "AMap.View2D";
      W.a.Xa("AMap.View2D", a);
      a = a || {};
      a.center && (a.center = W.g.ia(a.center));
      this.yL = a;
      a = this.EI(a.crs || "EPSG3857");
      this.set("crs", a)
    },
    lY: function (a) {
      var b = this.map.getSize(), c = new W.Q(a[4], a[5]);
      if ((a = new W.vd(a[0], a[1], a[2], a[3])) && b && c) {
        for (var d = this.map.get("zooms"), f = d[1]; f > d[0]; f -= 1) {
          var g = this.map.mb(a.nb, f), h = this.map.mb(a.fb, f);
          if (Math.abs(h.x -
              g.x) < b.width && Math.abs(g.y - h.y) < b.height)break
        }
        return [c, f]
      }
      return null
    },
    od: function () {
      var a = this.yL;
      if (!(a && a.center && a.zoom)) {
        var b = this.lY(W.q.Bd);
        a.center = a.center || b && b[0];
        "[object Number]" !== Object.prototype.toString.call(a.zoom) && (a.zoom = b && b[1])
      }
      a.zoom = Math.round(a.zoom);
      W.g.gb(this, a);
      W.j.ed && (this.G.rotation = 0);
      this.G.crs = this.EI(this.G.crs || "EPSG3857");
      this.Zd(this.G);
      this.yL = null
    },
    getRotation: function () {
      return this.map && this.map.get("rotateEnable") ? this.get("rotation", null, !0) || 0 : 0
    },
    EI: function (a) {
      if (this.G.center instanceof
        W.Q) {
        if ("string" === typeof a) {
          switch (a) {
            case "EPSG3395":
              return W.mg.EN;
            case "EPSG4326":
              return W.mg.GN
          }
          return W.mg.FN
        }
        if (a.pointToLngLat && a.lngLatToPoint)return {CB: a.pointToLngLat, qu: a.lngLatToPoint, hi: a.getResolution};
        throw"illegal projection";
      }
      var b = this.get("zoom");
      return {
        hi: function (a) {
          return Math.pow(2, b - a)
        }, qu: function () {
        }, CB: function () {
        }
      }
    },
    getCenterPixel: function () {
      return this.get("crs").qu(this.get("center"), this.get("zoom"))
    },
    getCenterCoords: function () {
      return this.map.Ub(this.get("center"))
    },
    centerCoordsChanged: function () {
      var a = this.get("centerCoords");
      this.get("center") instanceof W.Q ? this.set("center", this.map.df(a), !0) : this.set("center", a, !0)
    },
    getResolution: function (a) {
      return this.get("crs").hi(a || this.get("zoom"))
    }
  });
  var Ec = W.W.extend({
    ta: [W.da, W.xd, W.RK], G: {
      features: "all",
      dragEnable: !0,
      showIndoorMap: W.j.V ? !1 : !0,
      lang: "zh_cn",
      keyboardEnable: !0,
      doubleClickZoom: !0,
      "3rdpartyDataEnable": !1,
      scrollWheel: !0,
      zoomEnable: !0,
      jogEnable: !0,
      continuousZoomEnable: !0,
      resizeEnable: !1,
      animateEnable: !0,
      rotateEnable: !1,
      labelzIndex: 99,
      touchZoom: !0,
      zooms: [3, W.j.V ? W.j.Sc ? 19 : 20 : 18],
      defaultCursor: "url(" + W.q.rb + "/theme/v1.3/openhand.cur),default",
      limitBounds: null,
      logoUrl: W.q.rb + "/theme/v1.3/autonavi.png",
      logoUrlRetina: W.q.rb + "/theme/v1.3/mapinfo_05.png",
      copyright: "\x3c!--v1.3.24--\x3e &copy " + (new Date).getFullYear() + " AutoNavi ",
      isHotspot: !W.j.V,
      baseRender: W.j.ZV,
      overlayRender: W.j.E_,
      mapStyle: "normal",
      showBuildingBlock: !W.j.V
    }, poiOnAMAP: function (a) {
      W.a.add(this.CLASS_NAME, "poiOnAMAP");
      var b = {}, c = W.g.ia(a.location);
      b.id = a.id;
      c && (b.y = c.N, b.x = c.J);
      b.name = a.name;
      b.address = a.address;
      W.ve.Dk(W.ve.HJ(b))
    }, detailOnAMAP: function (a) {
      W.a.add(this.CLASS_NAME, "detailOnAMAP");
      var b = {}, c = W.g.ia(a.location);
      b.id = a.id;
      c && (b.y = c.N, b.x = c.J);
      b.name = a.name;
      W.ve.Dk(W.ve.FJ(b))
    },
    setLabelzIndex: function (a) {
      return this.set("labelzIndex", a)
    }, getLabelzIndex: function () {
      return this.get("labelzIndex", null, !0)
    }, setMapStyle: function (a) {
      W.a.add(this.CLASS_NAME, "setMapStyle", a);
      -1 == a.indexOf("amap://styles/") ? (this.set("styleUrl", "", !0), this.set("mapStyle", a)) : this.set("styleUrl", a);
      this.SZ()
    }, getMapStyle: function () {
      W.a.add(this.CLASS_NAME, "getMapStyle");
      return this.get("styleUrl") || this.get("mapStyle", null, !0)
    }, getFeatures: function () {
      W.a.add(this.CLASS_NAME, "getFeatures");
      return this.get("features",
        null, !0)
    }, setFeatures: function (a) {
      W.a.add(this.CLASS_NAME, "setFeatures");
      this.set("features", a)
    }, setLang: function (a) {
      W.a.add(this.CLASS_NAME, "setLang", a);
      "en" !== a && "zh_cn" !== a && "zh_en" !== a || a === this.getLang() || (this.set("lang", a), this.ki && this.ki.mM(this))
    }, getLang: function () {
      W.a.add(this.CLASS_NAME, "getLang");
      return this.get("lang", null, !0)
    }, setCity: function (a, b) {
      W.a.add(this.CLASS_NAME, "setCity");
      var c = this;
      (new W.qa.Ca(W.q.ec + "/v3/config/district?subdistrict=0&extensions=all&key=" + W.q.key + "&s=rsv3&output=json&keywords=" +
        a, {callback: "callback"})).e("complete", function (a) {
        if ((a = a.districts) && a.length)try {
          var f = a[0].center.split(","), g;
          switch (a[0].level) {
            case "city":
              g = 10;
              break;
            case "province":
              g = 7;
              break;
            case "district":
              g = 12;
              break;
            case "country":
              g = 4;
              break;
            default:
              g = 12
          }
          -1 !== a[0].name.indexOf("\u5e02") && (g = 10);
          c.setZoomAndCenter(g, new W.Q(f[0], f[1]), !0)
        } catch (h) {
        }
        b && b.call(c, f, g)
      }, this)
    }, getCity: function (a, b) {
      W.a.add(this.CLASS_NAME, "getCity");
      var c = W.q.ec + "/v3/geocode/regeo?&extensions=&&key=" + W.q.key + "&s=rsv3&output=json&location=" +
        (b || this.get("center"));
      (new W.qa.Ca(c, {callback: "callback"})).e("complete", function (b) {
        b = b.regeocode.addressComponent;
        a({
          province: b.province,
          city: b.city instanceof Array ? "" : b.city,
          citycode: b.citycode instanceof Array ? "" : b.citycode,
          district: b.district instanceof Array ? "" : b.district
        })
      }, this)
    }, D: function (a, b) {
      this.id = W.g.zb(this);
      this.CLASS_NAME = "AMap.Map";
      W.a.Xa("AMap.Map", b);
      b = b || {};
      b.mapStyle && -1 !== b.mapStyle.indexOf("amap://styles/") && (b.styleUrl = b.mapStyle, delete b.mapStyle);
      b.bgColor && W.extend(W.q.pg,
        b.bgColor);
      W.q.vt = b.buildingColor || null;
      b.center && (b.center = W.g.ia(b.center));
      b.view && b.view.get("center") && b.view.set("center", W.g.ia(b.view.get("center")));
      b.mobile && (W.j.V = !0);
      b.noPoi && (W.q.k_ = !0);
      b.editEnable && (b.nolimg = 1, b.showIndoorMap = !1);
      this.Wn = b.disableSocket ? !1 : W.j.Wn;
      b.server && (W.q.ec = b.server);
      b.vdataUrl && (W.q.xr = b.vdataUrl);
      if ("string" === typeof a) {
        if (a = this.C = document.getElementById(a), !a)return
      } else"DIV" === a.tagName && (this.C = a);
      this.C.hw && this.C.hw.destroy();
      W.ae.Te.start({
        id: this.id,
        C: this.C
      });
      this.C.hw = this;
      var c = this.G.zooms[1], d = this.G.zooms[0];
      b.zooms ? (b.zooms[0] = Math.max(d, b.zooms[0]), !0 === b.expandZoomRange && (c = W.j.V ? W.j.Sc ? 19 : 20 : 20), b.zooms[1] = Math.min(c, b.zooms[1])) : b.zooms = [d, c];
      b.forceZooms && (b.zooms = b.forceZooms);
      b = this.wW(b);
      c = b.lang;
      "en" !== c && "zh_cn" !== c && "zh_en" !== c && (b.lang = "zh_cn");
      W.j.ed && (this.G.rotateEnable = !1);
      c = b.view;
      c.map = this;
      this.Ad("zoom crs resolution centerPixel center centerCoords rotation".split(" "), c);
      this.Cn = c.get("crs");
      this.Zd(this.G);
      this.Zd(b);
      b.forceVector && (W.j.Vn ? this.set("baseRender", "vw") : this.set("baseRender", "v"));
      b.disableVector && this.set("baseRender", "d");
      "dom" == b.renderer && (this.set("baseRender", "d"), this.set("overlayRender", "d"));
      W.j.cf || (b.baseRender = "d");
      b.baseRender && this.set("baseRender", b.baseRender);
      d = this.getSize();
      d = Math.max(d.width, d.height);
      W.j.oa && (d *= Math.min(2, window.devicePixelRatio || 1));
      "vw" == this.get("baseRender") && d > W.j.VZ && this.set("baseRender", "dv");
      this.fz();
      W.j.Oq && this.AV();
      c.od();
      var d = c.get("zoom"), f =
        this.get("zooms");
      d > f[1] ? d = f[1] : d < f[0] && (d = f[0]);
      c.set("zoom", d);
      var g = this;
      this.Zd({overlays: [], infos: {}, controls: {}});
      c = [];
      b.forceVector && (c.push("vectorlayer"), c.push("overlay"));
      b.editEnable && (c.push("edit"), c.push("labelDir"));
      W.Ra.of(c, function () {
        if (!g.get("destroy")) {
          var b = new W.ad(a, g);
          b.e("complete", function () {
            this.w("complete")
          }, g, !0);
          b.Cn = g.Cn;
          g.Ad(["zoomSlow", "panTo", "targetLevel", "render"], b);
          b.Ad(["size", "bounds"], g);
          g.loaded = !0;
          g.w("coreMapCreated")
        }
      })
    }, featuresChanged: function () {
      this.fz()
    },
    SZ: function () {
      this.fz();
      this.aC()
    }, aC: function () {
      if (this.rh) {
        var a = !0, b = this.getMapStyle();
        if (!1 == this.get("showIndoorMap") || "normal" !== b && "amap://styles/normal" !== b) a = !1;
        var b = this.getLayers(), c;
        for (c in b)"AMap.IndoorMap" === b[c].CLASS_NAME && b[c] !== this.rh && (a = !1);
        this.rh.getMap() !== this && this.rh.setMap(this);
        this.rh.set("visible", a)
      }
    }, fz: function () {
      var a = this.get("baseRender");
      if (a && !("dv" < a)) {
        var b = this.get("features", null, !0), c = this.getMapStyle(), d = this.get("editEnable");
        b && c && (W.j.cf && (d || "all" !==
        b || "normal" !== c && "amap://styles/normal" !== c) ? (this.set("baseRender", "v"), this.sB = a) : this.sB && (this.set("baseRender", this.sB), this.sB = null))
      }
    }, AV: function () {
      var a = this;
      AMap.plugin(["AMap.IndoorMap"], function () {
        !a.rh && a.C && (a.indoorMap = a.rh = new AMap.IndoorMap({innerLayer: !0, map: a}), a.aC(), W.g.Oe(function () {
          a.w("indoor_create", {target: a});
          a.set("display")
        }))
      })
    }, layersChanged: function () {
      var a = this.getLayers();
      this.yu = !1;
      for (var b = 0; b < a.length; b += 1)a[b].getMap() !== this && a[b].setMap(this), a[b].yu && (this.yu =
        !0);
      this.aC()
    }, getMapNumber: function () {
      if (this.map)return this.map.Qu()
    }, getAdcode: function () {
      W.a.add(this.CLASS_NAME, "getAdcode");
      return W.q.xV
    }, wW: function (a) {
      a || (a = {});
      if (a.hasOwnProperty("defaultLayer")) {
        a.layers = [a.defaultLayer];
        var b = a.defaultLayer;
        b.Sy = !0;
        this.set("defaultLayer", b, !0)
      }
      a.layers && 0 !== a.layers.length || (b = new Y, a.layers = [b], b.Sy = !0, this.set("defaultLayer", b, !0));
      a.view || (a.view = new wc({center: a.center, zoom: a.zoom || a.level, crs: a.crs}));
      return a
    }, setLimitBounds: function (a) {
      W.a.add(this.CLASS_NAME,
        "setLimitBounds");
      a instanceof W.vd || (a = null);
      this.set("limitBounds", a)
    }, clearLimitBounds: function () {
      W.a.add(this.CLASS_NAME, "clearLimitBounds");
      this.set("limitBounds", null)
    }, getLimitBounds: function () {
      W.a.add(this.CLASS_NAME, "getLimitBounds");
      return this.get("limitBounds", null, !0)
    }, OH: function (a) {
      var b = this.get("layers");
      0 <= W.g.indexOf(b, a) || (b.push(a), this.set("layers", b))
    }, RH: function (a) {
      var b = this.get("overlays");
      0 <= W.g.indexOf(b, a) || (a instanceof xc ? (this.get("overlays").push(a), this.Gt instanceof
      xc && this.Gt.close(), this.Gt = a, this.set("contextmenu", a, !0)) : (a instanceof yc && (this.mi instanceof yc && this.Su(this.mi), this.mi = a), this.get("overlays").push(a)), this.w("overlays"))
    }, mo: function (a) {
      var b = this.get("layers");
      a = W.g.indexOf(b, a);
      -1 !== a && this.set("layers", W.g.bj(b, a))
    }, Su: function (a) {
      var b = this.get("overlays");
      this.set("overlays", W.g.bj(b, W.g.indexOf(b, a)))
    }, setZoom: function (a, b) {
      W.a.add(this.CLASS_NAME, "setZoom");
      a = Math.round(a);
      var c = this.get("zooms");
      a > c[1] && (a = c[1]);
      a < c[0] && (a = c[0]);
      this.get("zoomEnable") && (b || !this.loaded ? (this.set("zoom", a), this.w("zoomstart"), this.w("zoomchange"), this.w("zoomend")) : this.set("zoomSlow", a))
    }, getZoom: function () {
      W.a.add(this.CLASS_NAME, "getZoom");
      return Math.round(this.get("targetLevel") || this.get("zoom"))
    }, getCenter: function () {
      W.a.add(this.CLASS_NAME, "getCenter");
      return this.get("center")
    }, setCenter: function (a, b) {
      W.a.add(this.CLASS_NAME, "setCenter");
      a = W.g.ia(a);
      b || !this.loaded ? (this.w("movestart"), this.set("center", a), this.w("mapmove"), this.map ?
        this.map.w("moveend") : this.w("moveend")) : this.panTo(a)
    }, getCoordsBound: function () {
      var a = this.get("size"), b = this.get("centerCoords"), c = this.get("rotation") % 360,
        d = this.get("resolution"), c = Math.PI * c / 180,
        a = new W.L((Math.abs(a.width * Math.cos(c)) + Math.abs(a.height * Math.sin(c))) / 2, (Math.abs(a.width * Math.sin(c)) + Math.abs(a.height * Math.cos(c))) / 2),
        d = new W.ce(b.Qa(a.Gc(d)), b.add(a.Gc(d))), c = this.get("zoom", null, !0), f = this.get("targetLevel");
      if (f > c - 1) {
        var g = this.get("resolution", f);
        d.uN = new W.ce(b.Qa(a.Gc(g)),
          b.add(a.Gc(g)))
      }
      d.Q1 = f || c;
      d.hb = a;
      return d
    }, setRotation: function (a) {
      W.a.add(this.CLASS_NAME, "setRotation");
      !W.j.ed && this.get("rotateEnable") && this.set("rotation", a)
    }, getRotation: function () {
      W.a.add(this.CLASS_NAME, "getRotation");
      return this.get("rotateEnable") && this.get("rotation") || 0
    }, getBounds: function () {
      W.a.add(this.CLASS_NAME, "getBounds");
      this.get("crs");
      var a = this.getCoordsBound(), b = a.ac.x, c = a.eb.y, a = new W.L(a.eb.x, a.ac.y), b = new W.L(b, c);
      return new W.vd(this.df(a, this.get("zoom")), this.df(b, this.get("zoom")))
    },
    getStatus: function () {
      W.a.add(this.CLASS_NAME, "getStatus");
      for (var a = "isHotspot dragEnable zoomEnable keyboardEnable jogEnable doubleClickZoom scrollWheel resizeEnable touchZoom rotateEnable animateEnable".split(" "), b = {}, c = 0; c < a.length; c += 1)b[a[c]] = this.get(a[c], null, !0);
      return b
    }, setStatus: function (a) {
      W.a.add(this.CLASS_NAME, "setStatus");
      for (var b in a)a.hasOwnProperty(b) && -1 !== "isHotspot,dragEnable,keyboardEnable,doubleClickZoom,scrollWheel,zoomEnable,jogEnable,continuousZoomEnable,resizeEnable,animateEnable,rotateEnable,touchZoom".indexOf(b) &&
      this.set(b, a[b])
    }, getResolution: function (a) {
      W.a.add(this.CLASS_NAME, "getResolution");
      a = (a = W.g.ia(a)) ? a.N : this.get("center").N;
      return this.get("resolution") * Math.cos(a * Math.PI / 180)
    }, getScale: function (a) {
      W.a.add(this.CLASS_NAME, "getScale");
      return this.getResolution() * (a || 96) / 0.0254
    }, getDefaultCursor: function () {
      W.a.add(this.CLASS_NAME, "getDefaultCursor");
      return this.get("defaultCursor", null, !0)
    }, setDefaultCursor: function (a) {
      W.a.add(this.CLASS_NAME, "setDefaultCursor");
      return this.set("defaultCursor",
        a, !0)
    }, zoomIn: function (a) {
      W.a.add(this.CLASS_NAME, "zoomIn");
      this.setZoom(this.get("targetLevel") + 1, a)
    }, zoomOut: function (a) {
      W.a.add(this.CLASS_NAME, "zoomOut");
      this.setZoom(this.get("targetLevel") - 1, a)
    }, setZoomAndCenter: function (a, b, c) {
      W.a.add(this.CLASS_NAME, "setZoomAndCenter");
      b = W.g.ia(b);
      a = Math.round(a);
      var d = this.get("zooms");
      a > d[1] && (a = d[1]);
      a < d[0] && (a = d[0]);
      this.loaded ? this.set("zoomAndCenter", [a, b, c]) : (this.setZoom(a, !0), this.setCenter(b, !0))
    }, setBounds: function (a, b, c, d, f, g) {
      W.a.add(this.CLASS_NAME,
        "setBounds");
      b = b ? Number(b) : 0;
      var h = this.zL || this.get("zooms")[1];
      g = this.getSize().yo();
      var k = 0, l = 0;
      if (f) {
        var l = f[0], m = f[1], k = f[2];
        f = f[3];
        g.x -= k + f;
        g.y -= l + m;
        k = (k - f) / 2;
        l = (l - m) / 2
      }
      f = this.get("zooms");
      for (c && (g = g.Qa(c)); h > f[0] && !(c = this.mb(a.nb, h), m = this.mb(a.fb, h), a.nb.J > a.fb.J && (m.x += this.mb(new W.Q(180, 0), h).x), Math.abs(m.x - c.x) < g.x && Math.abs(c.y - m.y) < g.y); h -= 1);
      g = W.j.V ? 17 : 18;
      d = d || !this.getBounds().contains(a.Ff()) || W.j.V && 1 < Math.abs(h + b - this.get("zoom"));
      b = Math.min(f[1], g, Math.max(f[0], h + b));
      h = this.vf(this.mb(a.Ff(),
        b).Qa(new W.L(k, l)), b);
      this.setZoomAndCenter(b, h, d);
      return a
    }, clearMap: function () {
      W.a.add(this.CLASS_NAME, "clearMap");
      for (var a = this.get("overlays"), b = 0; b < a.length; b += 1)a[b].set("map", null, !0);
      this.set("overlays", []);
      if (this.map && this.map.Ba)for (var a = this.map.Ba, c = a.length, b = 0; b < c; b += 1)a[b].Pa instanceof zc && a[b].Pa.setMap(null)
    }, destroy: function () {
      W.a.add(this.CLASS_NAME, "destroy");
      this.rh && (this.rh.setMap(), this.indoorMap = this.rh = null);
      this.set("overlays", []);
      this.set("layers", []);
      var a = this.get("controls");
      a.remove = [];
      for (var b in a.Ac)a.Ac.hasOwnProperty(b) && a.remove.push(a.Ac[b]);
      a.Ac = [];
      a.add = [];
      this.set("controls", a);
      this.set("destroy", !0);
      this.cb = !1;
      this.sm();
      this.C = null
    }, addControl: function (a) {
      W.a.add(this.CLASS_NAME, "addControl");
      var b = W.g.zb(a), c = this.get("controls") || {};
      c.Ac = c.Ac || {};
      c.Ac[b] || (c.Ac[b] = a);
      c.add = c.add || [];
      c.add.push(a);
      this.set("controls", c)
    }, removeControl: function (a) {
      W.a.add(this.CLASS_NAME, "removeControl");
      var b = W.g.zb(a), c = this.get("controls") || {};
      c.Ac = c.Ac || {};
      c.Ac[b] && delete c.Ac[b];
      c.remove = c.remove || [];
      c.remove.push(a);
      this.set("controls", c)
    }, clearControl: function () {
      W.a.add(this.CLASS_NAME, "clearControl");
      var a = this.get("controls") || {};
      a.remove = a.remove || [];
      a.Ac = a.Ac || {};
      for (var b in a.Ac)a.Ac.hasOwnProperty(b) && (a.remove.push(a.Ac[b]), delete a.Ac[b]);
      this.set("controls", a)
    }, plugin: function (a, b) {
      "string" === typeof a && (a = [a]);
      for (var c = 0; c < a.length; c += 1) {
        var d = a[c].split(".");
        "function" === typeof window[d[0]][d[1]] && (a.splice(c, 1), c -= 1)
      }
      if (0 === a.length)return b(), this;
      for (var f =
        a.length, c = 0; c < a.length; c += 1)W.Ra.load(a[c], function () {
        f -= 1;
        0 === f && b()
      });
      return this
    }, clearInfoWindow: function () {
      W.a.add(this.CLASS_NAME, "clearInfoWindow");
      var a = this.get("overlays");
      a && 0 !== a.length && this.mi && this.mi.close()
    }, remove: function (a) {
      W.a.add(this.CLASS_NAME, "remove");
      a instanceof Array || (a = [a]);
      for (var b = 0; b < a.length; b += 1) {
        var c = a[b];
        c.getMap && c.getMap() === this && (c.close ? c.close() : c.setMap && c.setMap(null))
      }
    }, add: function (a) {
      W.a.add(this.CLASS_NAME, "add");
      a instanceof Array || (a = [a]);
      for (var b =
        0; b < a.length; b += 1) {
        var c = a[b];
        c.getMap && c.getMap() !== this && !c.open && c.setMap && c.setMap(this)
      }
    }, getAllOverlays: function (a, b) {
      W.a.add(this.CLASS_NAME, "getAllOverlays");
      var c = this.get("overlays"), d;
      if (a)switch (a) {
        case "marker":
          d = Z;
          break;
        case "circle":
          d = Ac;
          break;
        case "polyline":
          d = Bc;
          break;
        case "polygon":
          d = Cc
      }
      if (d) {
        for (var f = [], g = 0; g < c.length; g += 1)c[g] instanceof d && (b || !c[g].fa && !c[g].isOfficial) && f.push(c[g]);
        return f
      }
      if (!b) {
        f = [];
        for (g = 0; g < c.length; g += 1)c[g].fa || c[g].isOfficial || f.push(c[g]);
        c = f
      }
      d = this.get("layers");
      f = [];
      if (d)for (var g = 0, h = d.length; g < h; g += 1)d[g] instanceof zc && f.push(d[g]);
      return c.concat(f)
    }, triggerResize: function () {
      this.map && this.map.hy()
    }, refreshSize: function () {
      this.as = this.nY()
    }, nY: function () {
      return W.f.qJ(this.C)
    }, getSize: function () {
      W.a.add(this.CLASS_NAME, "getSize");
      (!this.as || 10 > this.as.width * this.as.height) && this.refreshSize();
      return this.as
    }, getContainer: function () {
      W.a.add(this.CLASS_NAME, "getContainer");
      return this.C
    }, panTo: function (a) {
      W.a.add(this.CLASS_NAME, "panTo");
      a = W.g.ia(a);
      this.loaded ?
        this.set("panTo", a) : this.setCenter(a)
    }, panBy: function (a, b, c) {
      W.a.add(this.CLASS_NAME, "panBy");
      var d = this.get("rotation") * Math.PI / 180, f = a * Math.cos(d) + Math.sin(d) * b;
      a = -Math.sin(d) * a + Math.cos(d) * b;
      f = (this.loaded && this.map && this.map.Xb ? this.mb(this.map.Xb.YM) : this.get("centerPixel")).add(new W.L(-f, -a));
      f = this.vf(f);
      !this.loaded || c ? this.setCenter(f, c) : this.set("panTo", f)
    }, setFitView: function (a, b, c, d) {
      W.a.add(this.CLASS_NAME, "setFitView");
      var f;
      if (a)if (a instanceof Dc) a = [a]; else {
        if (!(a instanceof Array))return null
      } else a =
        this.getAllOverlays();
      for (var g = 0; g < a.length; g += 1) {
        var h = a[g];
        !h.get("visible") || h instanceof yc || h instanceof xc || (h = h.getBounds()) && (f = f ? h.o2(f) : h)
      }
      f && this.setBounds(f, null, new W.L(50, 50), b, c, d);
      return f
    }, setLayers: function (a) {
      W.a.add(this.CLASS_NAME, "setLayers");
      for (var b = 0; b < a.length; b += 1)a[b].set("map", this, !0);
      this.set("layers", a)
    }, getLayers: function () {
      W.a.add(this.CLASS_NAME, "getLayers");
      return this.get("layers", null, !0)
    }, getDefaultLayer: function () {
      W.a.add(this.CLASS_NAME, "getDefaultLayer");
      return this.get("defaultLayer", null, !0)
    }, setDefaultLayer: function (a) {
      W.a.add(this.CLASS_NAME, "setDefaultLayer");
      a.Sy = !0;
      var b = this.get("defaultLayer"), c = this.get("layers");
      if (b) {
        if (a === b)return;
        b.Sy = !1;
        c = W.g.bj(c, W.g.indexOf(c, b))
      }
      this.set("defaultLayer", a, !0);
      c.push(a);
      this.setLayers(c)
    }, pixelToLngLat: function (a, b) {
      W.a.add(this.CLASS_NAME, "pixelToLngLat");
      return this.vf(a, b)
    }, lnglatToPixel: function (a, b) {
      W.a.add(this.CLASS_NAME, "lnglatToPixel");
      return this.mb(a, b)
    }, drawPolyline: function (a) {
      W.a.add(this.CLASS_NAME,
        "drawPolyline");
      this.set("draw", "polyline");
      this.set("drawStyle", a || {strokeColor: "#006600", ya: 0.9})
    }, drawPolygon: function (a) {
      W.a.add(this.CLASS_NAME, "drawPolygon");
      this.set("draw", "polygon");
      this.set("drawStyle", a || {strokeColor: "#006600", ya: 0.9, fillColor: "#FFAA00", lc: 0.9})
    }, drawCircle: function (a) {
      W.a.add(this.CLASS_NAME, "drawCircle");
      this.set("draw", "circle");
      this.set("drawStyle", a || {strokeColor: "#006600", ya: 0.9, fillColor: "#006600", lc: 0.9})
    }, endDraw: function () {
      this.set("draw", null)
    }, isGoogleTileVisible: function () {
      return this.map &&
        this.map.px()
    }
  });
  Ec.Jn({
    NA: "lnglatTocontainer",
    lnglatTocontainer: "lngLatToContainer",
    Wj: "containTolnglat",
    containTolnglat: "containerToLngLat",
    mb: "project",
    vf: "unproject"
  });
  Ec.Zb({
    isHotspotChanged: function () {
      if ("undefined" !== typeof this.Eq && (this.PW(), this.get("isHotspot"))) {
        var a = this.get("layers", null, !0);
        a && a.length && !this.Eq && this.yu && this.C_()
      }
    }, C_: function () {
      if (this.ki) this.fK(); else {
        var a = this;
        this.plugin("AMap.HotSpot", function () {
          if (!a.Eq) {
            if (!a.ki) {
              var b = new W.we;
              new yc;
              a.ki = b
            }
            a.fK()
          }
        })
      }
    }, PW: function () {
      this.ki && this.aZ()
    }, uL: function (a) {
      a.type = "hotspotover";
      a.isIndoorPOI = !1;
      this.w("hotspotover", a)
    }, sL: function (a) {
      a.type = "hotspotclick";
      a.isIndoorPOI = !1;
      this.w("hotspotclick",
        a)
    }, tL: function (a) {
      a.type = "hotspotout";
      a.isIndoorPOI = !1;
      this.w("hotspotout", a)
    }, fK: function () {
      var a = this.ki;
      this.ki.setMap(this);
      a.e("mouseover", this.uL, this);
      a.e("click", this.sL, this);
      a.e("mouseout", this.tL, this)
    }, aZ: function () {
      var a = this.ki;
      a.F("mouseover", this.uL, this);
      a.F("click", this.sL, this);
      a.F("mouseout", this.tL, this);
      this.ki.setMap(null);
      this.ki = null
    }
  });
  var $ = {
    U: function (a, b, c, d) {
      W.a.add("AMap.event", "addDomListener");
      W.B.e(a, b, c, d);
      return new W.Hr(0, a, b, c, d)
    }, BV: function () {
    }, addListener: function (a, b, c, d) {
      W.a.add("AMap.event", "addListener");
      a.mf || (a.mf = W.da.mf);
      W.da.e.call(a, b, c, d);
      return new W.Hr(1, a, b, c, d)
    }, PH: function (a, b, c, d) {
      W.a.add("AMap.event", "addListenerOnce");
      a.mf || (a.mf = W.da.mf);
      W.da.e.call(a, b, c, d, !0);
      return new W.Hr(1, a, b, c, d)
    }, sI: function (a) {
      W.da.Zi.call(a)
    }, At: function (a, b) {
      W.da.Zi.call(a, b)
    }, removeListener: function (a) {
      W.a.add("AMap.event",
        "removeListener");
      !a instanceof W.Hr || (0 === a.type ? W.B.F(a.Tl, a.YI, a.$J, a.Ge) : 1 === a.type && (a.Tl.mf || (a.Tl.mf = W.da.mf), W.da.F.call(a.Tl, a.YI, a.$J, a.Ge)))
    }, H: function (a, b) {
      W.a.add("AMap.event", "trigger");
      a.mf || (a.mf = W.da.mf);
      var c = Array.prototype.slice.call(arguments, 1);
      W.da.w.apply(a, c)
    }
  };
  W.Hr = W.W.extend({
    D: function (a, b, c, d, f) {
      this.type = a;
      this.Tl = b;
      this.YI = c;
      this.$J = d;
      this.Ge = f
    }
  });
  var Fc = {
    U: "addDomListener",
    BV: "addDomListenerOnce",
    addListener: "addListener",
    PH: "addListenerOnce",
    sI: "clearInstanceListeners",
    At: "clearListeners",
    removeListener: "removeListener",
    H: "trigger"
  }, Gc;
  for (Gc in Fc)Fc.hasOwnProperty(Gc) && ($[Fc[Gc]] = $[Gc]);
  W.event = $;
  W.event.U(window, "beforeunload", W.a.send);
  var Hc = W.W.extend({
    ta: [W.da, W.xd], D: function (a) {
      this.CLASS_NAME = "AMap.Layer";
      W.g.gb(this, a);
      this.Zd(this.G)
    }, getContainer: function () {
      if (this.T && this.T.K)return this.T.K.Gf()
    }, getZooms: function () {
      W.a.add(this.CLASS_NAME, "getZooms");
      return this.get("zooms", null, !0)
    }, setOpacity: function (a) {
      W.a.add(this.CLASS_NAME, "setOpacity");
      a !== this.get("opacity", null, !0) && this.set("opacity", a)
    }, getOpacity: function () {
      return this.get("opacity", null, !0)
    }, show: function () {
      W.a.add(this.CLASS_NAME, "show");
      this.set("visible",
        !0);
      this.sk && this.T.l.layersChanged()
    }, hide: function () {
      W.a.add(this.CLASS_NAME, "hide");
      this.set("visible", !1);
      this.sk && this.T.l.layersChanged()
    }, setMap: function (a) {
      W.a.add(this.CLASS_NAME, "setMap");
      var b = this.get("map");
      a ? (b && a !== b && b.mo(this), this.set("map", a)) : b && (b.mo(this), this.set("map", null, !0), this.eh = !1, this.Ne && this.Ne())
    }, getMap: function () {
      W.a.add(this.CLASS_NAME, "getMap");
      return this.get("map", null, !0)
    }, mapChanged: function () {
      this.get("map") && this.get("map").OH(this)
    }, setzIndex: function (a) {
      W.a.add(this.CLASS_NAME,
        "setzIndex");
      this.set("zIndex", a)
    }, getzIndex: function () {
      return this.get("zIndex", null, !0)
    }
  });
  var Y = Hc.extend({
    G: {
      tileSize: 256,
      visible: !0,
      opacity: 1,
      zIndex: 0,
      noLimg: 1,
      zooms: [3, 20],
      getTileUrl: W.j.V ? W.q.tr : W.q.Vq,
      errorUrl: W.g.TX,
      detectRetina: !0,
      className: "amap-layer",
      mapNumber: ""
    }, D: function (a) {
      W.a.Xa("AMap.TileLayer", a);
      (a = a || {}) && a.tileUrl && (a.getTileUrl = a.tileUrl);
      this.DW(a);
      var b = a.zooms;
      b && b[1] >= this.hg[0] ? (b[0] < this.hg[0] && (b[0] = this.hg[0]), b[1] > this.hg[1] && (b[1] = this.hg[1])) : a.zooms = [this.hg[0], this.hg[1]];
      arguments.callee.bb.call(this, a);
      this.CLASS_NAME = "AMap.TileLayer"
    }, setTextIndex: function (a) {
      W.a.add(this.CLASS_NAME,
        "setTextIndex");
      this.set("textIndex", a)
    }, EA: function () {
      var a = this.get("getTileUrl");
      return a !== W.q.Vq && a !== W.q.tr ? !1 : !0
    }, gz: function () {
      if (!this.EA() || !W.j.cf)return !1;
      var a = this.get("map");
      return !a || "zh_cn" !== a.get("lang") || "d" === a.get("baseRender") || this.noVector ? !1 : !0
    }, bg: function (a) {
      var b = this.get("map");
      this.EA() && (this.gz() ? this.set("mapNumber", "GS(2016)710") : this.set("mapNumber", "GS(2015)2681"));
      if (this.gz())if (this.sk = !0, W.T.Lg) {
        if ("dv" === b.get("baseRender") && !this.get("watermark")) {
          var c =
            W.q.uu;
          W.j.oa && this.get("detectRetina") && (c = W.q.uu.replace("scl=1", "scl=2"));
          var d = b.get("showBuildingBlock");
          d || (c = c.replace("ltype=3", "ltype=11"));
          c = new W.T.Rf(this, a, this.lp(c), void 0, !0);
          d && (c.Bk = new W.T.Md(new Y({
            zooms: [16, 20],
            innerLayer: "true"
          }), a), c.Bk.type = "\u697c\u5757\u56fe\u5c42", c.Bk.Ad(["visible", "opacity", "zIndex"], c, !0), c.Bk.va = ["building"], c.Bk.ut(b.get("mapStyle") || "normal"));
          c.type = "\u6805\u683c\u5e95\u56fe";
          return c
        }
        if ("v" <= b.get("baseRender") || this.get("watermark"))return a = new W.T.Md(this,
          a), a.type = "\u77e2\u91cf\u5e95\u56fe", a
      } else return ["vectorlayer", "overlay"]; else return this.sk = !1, new W.T.Rf(this, a, null, this.G.maxDataZoom)
    }, getTileUrlChanged: function () {
      var a = this.get("getTileUrl");
      if (a == W.q.Vq || a == W.q.tr || a == W.q.Yu) this.yu = !0;
      "string" === typeof a && (a = this.lp(a));
      this.set("tileFun", a)
    }, DW: function (a) {
      this.hg || (this.hg = [this.G.zooms[0], this.G.zooms[1]]);
      var b;
      a.hasOwnProperty("detectRetina") && !1 === a.detectRetina && (b = !0);
      W.j.V && W.j.oa && this.G.detectRetina && !b && (this.hg[1] -= 1)
    }, getTiles: function () {
      W.a.add(this.CLASS_NAME,
        "getTiles");
      var a = this.get("tiles", null, !0);
      if (a && a.length) a = a[0]; else return [];
      for (var b = [], c, d = 0; d < a.length; d += 1)a[d].key && (c = a[d].key.split("/"), b.push("" + c[1] + "," + c[2]));
      return b
    }, reload: function () {
      W.a.add(this.CLASS_NAME, "reload");
      this.set("reload", 1)
    }, hm: function () {
      var a = this.get("map", null, !0);
      this.setMap(null);
      this.eh = !1;
      this.setMap(a)
    }, setTileUrl: function (a) {
      W.a.add(this.CLASS_NAME, "setTileUrl");
      this.gz() ? (this.set("getTileUrl", a), this.hm()) : this.set("getTileUrl", a)
    }, lp: function (a) {
      var b =
        this, c, d, f;
      return function (g, h, k) {
        g = (g + Math.pow(2, k)) % Math.pow(2, k);
        if ("number" !== typeof(g + h + k))return null;
        var l = b.get("map"), m = "zh_cn";
        l && (m = l.get("lang") || "zh_cn");
        k = a.replace("[x]", g).replace("[y]", h).replace("[z]", k).replace("[lang]", m);
        if (!c) {
          if (d = a.match(/\{.*\}/)) f = d.toString().replace("{", "").replace("}", ""), f = f.split(",");
          c = !0
        }
        f && f.length && (k = k.replace(d, f[Math.abs(g + h) % f.length]));
        return k
      }
    }, getTileUrl: function (a, b, c) {
      W.a.add(this.CLASS_NAME, "getTileUrl");
      return this.get("tileFun", null,
        !0)(a, b, c)
    }, getZooms: function () {
      W.a.add(this.CLASS_NAME, "getZooms");
      return this.get("zooms", null, !0)
    }
  });
  Y.Fv = Y.extend({
    G: {
      getTileUrl: function (a, b, c) {
        if (this && this.get) {
          var d = this.get("map"), f = "zh_cn";
          d && (f = d.get("lang") || "zh_cn")
        }
        return "http://grid.amap.com/grid/" + c + "/" + a + "/" + b + "?src=jsapi&key=" + W.q.key + "&lang=" + f + "&dpiType=" + (W.j.Sc ? "wprd" : "webrd")
      }, zooms: [10, 18], zIndex: 2
    }, D: function (a) {
      arguments.callee.bb.apply(this, arguments)
    }
  });
  Y.gD = Y.extend({
    G: {
      getTileUrl: W.q.SB,
      zooms: [3, 20],
      zIndex: 2,
      maxDataZoom: 18,
      detectRetina: !1,
      mapNumber: "GS(2017)154",
      className: "amap-layer amap-satellite"
    }, D: function (a) {
      this.hg = [3, 20];
      arguments.callee.bb.apply(this, arguments);
      this.CLASS_NAME = "AMap.TileLayer.Satellite";
      W.a.Xa(this.CLASS_NAME, a)
    }
  });
  Y.eD = Y.extend({
    G: {
      getTileUrl: W.q.Yu,
      zooms: [3, 20],
      zIndex: 3,
      type: "overlayer",
      maxDataZoom: 18,
      className: "amap-layer amap-roadnet"
    }, D: function (a) {
      this.hg = [3, 20];
      arguments.callee.bb.apply(this, arguments);
      this.CLASS_NAME = "AMap.TileLayer.RoadNet";
      W.a.Xa(this.CLASS_NAME, a)
    }, bg: function (a) {
      var b = this.get("map");
      W.j.cf && "d" !== b.get("baseRender") ? (this.sk = !0, b = W.q.Zu, W.j.oa && this.get("detectRetina") && (b = W.q.Zu.replace("scl=1", "scl=2")), a = new W.T.Rf(this, a, this.lp(b), this.G.maxDataZoom)) : (this.sk = !1, a = new W.T.Rf(this,
        a));
      return a
    }
  });
  Y.iD = Y.extend({
    G: {
      getTileUrl: function (a, b, c) {
        return W.q.vc + "://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&t=1&zoom=" + (17 - c) + "&x=" + a + "&y=" + b
      },
      zooms: [6, 20],
      zIndex: 4,
      type: "overlayer",
      autoRefresh: !1,
      interval: 180,
      maxDataZoom: 17,
      alwaysRender: !W.j.Cz,
      className: "amap-layer amap-traffic"
    }, D: function (a) {
      this.hg = [6, 20];
      arguments.callee.bb.apply(this, arguments);
      this.startRefresh();
      this.CLASS_NAME = "AMap.TileLayer.Traffic";
      W.a.Xa(this.CLASS_NAME, a)
    }, stopRefresh: function () {
      W.a.add(this.CLASS_NAME, "stopRefresh");
      this.Pu && (clearInterval(this.Pu), this.Pu = null)
    }, startRefresh: function () {
      W.a.add(this.CLASS_NAME, "startRefresh");
      if (this.get("autoRefresh") && !this.Pu) {
        var a = this;
        this.Pu = setInterval(function () {
          a.reload();
          a.w("refresh")
        }, Math.max(1E3 * (this.get("interval") || 180), 1E4))
      }
    }, reload: function () {
      W.a.add(this.CLASS_NAME, "reload");
      W.g.Oe(function () {
        this.set("reload")
      }, this)
    }, Ne: function () {
      this.stopRefresh();
      this.get("map") && this.get("map").F("zoomstart", this.reload, this)
    }, bg: function (a) {
      var b = this.get("map"),
        b = a.na;
      b.e("zoomstart", this.reload, this);
      return "d" !== b.get("baseRender") ? W.T.Qo ? a = new W.T.Qo(this, a) : ["vt"] : a = new W.T.Rf(this, a, null, this.G.maxDataZoom)
    }
  });
  var Ic = Hc.extend({
    G: {visible: !0, zooms: [3, 25], type: "overlay", zIndex: 5, alwaysRender: !0}, D: function (a) {
      arguments.callee.bb.apply(this, arguments)
    }, bg: function (a) {
      return new W.T.kd(this, a)
    }
  });
  var Jc = Hc.extend({
    G: {
      zooms: [17, 20],
      zIndex: 8,
      url: W.q.yr + "/vector/buildings",
      wallColor: [200, 190, 180],
      strokeColor: [145, 140, 135],
      CAM_Z: 400,
      lineCap: "round",
      lineJoin: "round",
      lineWidth: 1,
      fadeFactor: 1,
      visible: !0
    }, D: function () {
      arguments.callee.bb.apply(this, arguments);
      this.CLASS_NAME = "AMap.Buildings"
    }, bg: function (a) {
      if (W.T.Ko)return new W.T.Ko(this, a);
      if (W.j.Oq)return ["building", "overlay"]
    }
  });
  var Kc = Hc.extend({
    G: {visible: !0, zooms: [3, W.j.V ? 20 : 18], opacity: 1, type: "overlay", zIndex: 6}, D: function (a) {
      arguments.callee.bb.apply(this, arguments);
      this.CLASS_NAME = "AMap.ImageLayer";
      W.a.Xa(this.CLASS_NAME, a)
    }, bg: function (a) {
      return W.T.RC ? new W.T.RC(this, a) : ["imagelayer"]
    }, getMap: function () {
      W.a.add(this.CLASS_NAME, "getMap");
      return this.Ii.map
    }, show: function () {
      W.a.add(this.CLASS_NAME, "show");
      this.set("visible", !0);
      this.w("options")
    }, getOpacity: function () {
      W.a.add(this.CLASS_NAME, "getOpacity");
      return this.get("opacity",
        null, !0)
    }, setOpacity: function (a) {
      W.a.add(this.CLASS_NAME, "setOpacity");
      this.set("opacity", a)
    }, getBounds: function () {
      W.a.add(this.CLASS_NAME, "getBounds");
      return this.get("bounds", null, !0).Sb()
    }, setBounds: function (a) {
      W.a.add(this.CLASS_NAME, "setBounds");
      this.setOptions({bounds: a})
    }, getImageUrl: function () {
      W.a.add(this.CLASS_NAME, "getImageUrl");
      return this.get("url")
    }, setImageUrl: function (a) {
      W.a.add(this.CLASS_NAME, "setImageUrl");
      return this.set("url", a)
    }, hide: function () {
      W.a.add(this.CLASS_NAME, "hide");
      this.set("visible", !1);
      this.w("options")
    }, setOptions: function (a) {
      W.a.add(this.CLASS_NAME ? this.CLASS_NAME : "AMap.ImageLayer", "setOptions");
      this.Zd(a);
      this.w("options")
    }, getOptions: function () {
      W.a.add(this.CLASS_NAME, "getOptions");
      var a = {}, b;
      for (b in this.G)this.G.hasOwnProperty(b) && (a[b] = this.get(b));
      return a
    }
  });
  var Lc = Hc.extend({
    G: {
      visible: !0,
      zooms: [3, W.j.V ? 20 : 18],
      type: "overlay",
      zIndex: 5,
      cursor: "pointer",
      alwaysRender: !0,
      stable: !0,
      bubble: !0,
      className: "amap-mass"
    }, D: function (a, b) {
      this.CLASS_NAME = "AMap.MassMarks";
      W.a.Xa(this.CLASS_NAME, b);
      W.j.Oq && (this.pi = !0, b.size && (b.size = W.g.mj(b.size)), this.setData(a), W.g.gb(this, b), b.style ? (this.Zd(this.G, !0), this.setStyle(b.style)) : this.setStyle(this.G))
    }, getStyle: function () {
      W.a.add(this.CLASS_NAME, "getStyle");
      return this.Ch
    }, setStyle: function (a) {
      W.a.add(this.CLASS_NAME,
        "setStyle");
      if (a instanceof Array) {
        for (var b = 0; b < a.length; b += 1)a[b].size = W.g.mj(a[b].size), a.rf = Math.max(a.rf || 0, a[b].size.width + a[b].anchor.x), a.jg = Math.max(a.rf || 0, a[b].size.height + a[b].anchor.y);
        this.Ch = a
      } else a.size && (a.size = W.g.mj(a.size)), this.Zd(a, !0), this.Ch = {
        anchor: this.get("anchor"),
        url: this.get("url"),
        size: this.get("size")
      }, this.Ch.rf = this.Ch.size.width + this.Ch.anchor.x, this.Ch.jg = this.Ch.size.height + this.Ch.anchor.y;
      this.w("style")
    }, setData: function (a) {
      W.a.add(this.CLASS_NAME, "setData");
      this.set("dataSources", a)
    }, getData: function () {
      W.a.add(this.CLASS_NAME, "getData");
      return this.get("datas") || this.get("dataSources")
    }, setMap: function (a) {
      W.a.add(this.CLASS_NAME, "setMap");
      W.j.Oq && (a ? (this.get("map") && this.get("map").mo(this), this.set("map", a)) : this.get("map") && (this.get("map").mo(this), this.set("map", null, !0), this.eh = !1, this.Ne && this.Ne()))
    }, bg: function (a) {
      return W.Ra.lu(["cvector"]) ? (a = new W.T.kd(this, a), this.P("datas", a), a) : ["cvector"]
    }
  });
  var zc = Kc.extend({
    D: function (a, b, c) {
      W.a.Xa("AMap.GroundImage", c);
      c = c || {};
      this.hj = !0;
      var d = parseFloat(c.opacity);
      isNaN(d) && (d = 1);
      arguments.callee.bb.call(this, {
        url: a,
        bounds: b,
        clickable: c.clickable,
        opacity: d,
        map: c.map,
        zooms: c.zooms || [3, 20]
      });
      this.CLASS_NAME = "AMap.GroundImage"
    }, u_: function (a) {
      this.get("bounds").contains(a.lnglat) && (a.target = this, this.w("click", a))
    }, v_: function (a) {
      this.get("bounds").contains(a.lnglat) && (a.target = this, this.w("dblclick", a))
    }, setMap: function (a) {
      W.a.add(this.CLASS_NAME, "setMap");
      a ? (this.get("map") && (this.get("map").mo(this), this.vI && $.removeListener(this.vI), this.II && $.removeListener(this.II)), this.set("map", a)) : this.get("map") && (this.get("map").mo(this), this.Ii.map = null)
    }, mapChanged: function () {
      this.get("map") && (this.get("map").OH(this), this.get("clickable") && (this.vI = $.addListener(this.get("map"), "click", this.u_, this), this.II = $.addListener(this.get("map"), "dblclick", this.v_, this)))
    }
  });
  var Dc = W.W.extend({
    ta: [W.da, W.xd, {ia: W.g.ia}], G: {extData: {}, bubble: !1, clickable: !0, draggable: !1}, D: function () {
      this.ys = W.g.zb(this)
    }, i5: function () {
      return this.ys
    }, t4: function () {
      this.get("map", null, !0) && this.setMap(this.get("map"))
    }, mapChanged: function () {
      this.get("map", null, !0) && this.get("map", null, !0).RH(this)
    }, show: function () {
      W.a.add(this.CLASS_NAME, "show");
      this.set("visible", !0)
    }, hide: function () {
      W.a.add(this.CLASS_NAME, "hide");
      this.set("visible", !1)
    }, setMap: function (a) {
      W.a.add(this.CLASS_NAME, "setMap");
      a !== this.get("map", null, !0) && (a ? (this.get("map", null, !0) && this.get("map", null, !0).Su(this), this.set("map", a)) : this.get("map", null, !0) && (this.get("map", null, !0).Su(this), this.set("map", null, !0)))
    }, getMap: function () {
      W.a.add(this.CLASS_NAME, "getMap");
      return this.get("map", null, !0)
    }, setExtData: function (a) {
      W.a.add(this.CLASS_NAME, "setExtData");
      this.set("extData", a)
    }, getExtData: function () {
      W.a.add(this.CLASS_NAME, "getExtData");
      return this.get("extData", null, !0)
    }
  });
  var Mc = Dc.extend({
    D: function (a) {
      Mc.ye.D.apply(this, arguments)
    }, show: function () {
      this.set("visible", !0);
      this.w("show", {type: "show", target: this})
    }, hide: function () {
      this.set("visible", !1);
      this.w("hide", {type: "hide", target: this})
    }, getVisible: function () {
      return this.get("visible", null, !0)
    }, getOptions: function () {
      var a = {},
        b = "map zIndex strokeColor strokeOpacity strokeWeight strokeStyle strokeDasharray extData bubble clickable".split(" "),
        c = "isOutline outlineColor geodesic path lineJoin lineCap borderWeight showDir".split(" "),
        d = ["fillColor", "fillOpacity", "path", "lineJoin"], f = ["center", "radius"], g = [];
      this instanceof Bc && (g = b.concat(c));
      this instanceof Cc && (g = b.concat(d));
      this instanceof Ac && (g = b.concat(f).concat(d));
      for (b = 0; b < g.length; b += 1)a[g[b]] = this.get(g[b], null, !0);
      return a
    }, setOptions: function (a) {
      a.hasOwnProperty("path") && (a.path && a.path.length || (a.path = []), a.path = W.g.ia(a.path));
      a.center && (a.center = W.g.ia(a.center));
      a.hasOwnProperty("map") && this.setMap(a.map);
      this.Zd(a);
      this.w("options");
      this.w("change", {
        type: "change",
        target: this
      })
    }, setDraggable: function (a) {
      this.set("draggable", a)
    }
  });
  var Nc = Mc.extend({
    G: {
      visible: !0,
      zIndex: 10,
      strokeColor: "#006600",
      strokeOpacity: 0.9,
      strokeWeight: 3,
      strokeStyle: "solid",
      strokeDasharray: [10, 5],
      lineJoin: "miter",
      path: []
    }, D: function (a) {
      Nc.ye.D.apply(this, arguments)
    }, setPath: function (a, b) {
      W.a.add(this.CLASS_NAME, "setPath");
      a && a.length || (a = []);
      a = this.ia(a);
      this.set("path", a);
      this.w("change", {type: "change", target: this});
      b || this.w("setPath")
    }, getPath: function () {
      W.a.add(this.CLASS_NAME, "getPath");
      return this.get("path", null, !0)
    }, mc: function () {
      var a = this.get("path");
      if (!a || !a.length)return null;
      a[0] instanceof W.Q && (a = [a]);
      for (var b = new W.vd(180, 90, -180, -90), c = 0; c < a.length; c += 1)for (var d = a[c], f = d.length - 1; 0 <= f; f -= 1)b.extend(d[f]);
      return b
    }
  });
  Nc.Jn({mc: "getBounds"});
  var Oc = W.W.extend({
    ta: [W.da, W.xd],
    G: {
      size: new W.bc(36, 36),
      imageOffset: new W.L(0, 0),
      image: W.q.rb + "/theme/v1.3/markers/0.png",
      imageSize: null
    },
    D: function (a) {
      this.CLASS_NAME = "AMap.Icon";
      W.a.Xa(this.CLASS_NAME, a);
      a = a || {};
      a.size && (a.size = W.g.mj(a.size));
      a.imageSize && (a.imageSize = W.g.mj(a.imageSize));
      W.g.gb(this, a);
      this.Zd(this.G)
    },
    setImageSize: function (a) {
      W.a.add(this.CLASS_NAME, "setImageSize");
      a = W.g.mj(a);
      this.set("imageSize", a)
    },
    getImageSize: function () {
      W.a.add(this.CLASS_NAME, "getImageSize");
      return this.get("imageSize",
        null, !0)
    }
  });
  var Pc = W.W.extend({
    ta: [W.da, W.xd], G: {coords: [], type: ""}, D: function (a) {
      this.CLASS_NAME = "AMap.MarkerShape";
      W.a.Xa(this.CLASS_NAME, a);
      W.g.gb(this, a);
      this.Zd(this.G)
    }
  });
  var Z = Dc.extend({
    G: {
      cursor: "pointer",
      visible: !0,
      zIndex: 100,
      angle: 0,
      autoRotation: !1,
      opacity: 1,
      offset: new W.L(-9, -31),
      size: new W.L(19, 33),
      raiseOnDrag: !1,
      topWhenClick: !1,
      topWhenMouseOver: !1,
      animation: "AMAP_ANIMATION_NONE"
    }, D: function (a) {
      this.CLASS_NAME = "AMap.Marker";
      W.a.Xa(this.CLASS_NAME, a);
      a = a || {};
      this.hj = !0;
      a && a.position && (a.position = this.ia(a.position));
      W.g.gb(this, a);
      W.j.ed && (this.G.angle = 0);
      this.Zd(this.G);
      W.bl.QP(a)
    }, setRaiseOnDrag: function (a) {
      W.a.add(this.CLASS_NAME, "setRaiseOnDrag");
      this.set("raiseOnDrag",
        a)
    }, setPosition: function (a) {
      W.a.add(this.CLASS_NAME, "setPosition");
      a = this.ia(a);
      this.set("position", a)
    }, getBounds: function () {
      var a = this.getPosition().Sb();
      return new W.vd(a, a.Sb())
    }, mapChanged: function () {
      this.get("map", null, !0) && (this.get("position", null, !0) || this.set("position", this.get("map").get("center")), this.get("map", null, !0).RH(this))
    }, getPosition: function () {
      W.a.add(this.CLASS_NAME, "getPosition");
      return this.get("position", null, !0)
    }, setIcon: function (a) {
      W.a.add(this.CLASS_NAME, "setIcon");
      this.set("icon",
        a)
    }, getIcon: function () {
      W.a.add(this.CLASS_NAME, "getIcon");
      return this.get("icon", null, !0)
    }, setContent: function (a) {
      W.a.add(this.CLASS_NAME, "setContent");
      this.set("content", a)
    }, getContent: function () {
      W.a.add(this.CLASS_NAME, "getContent");
      return this.get("content", null, !0)
    }, getContentDom: function () {
      return this.get("contentDom", null, !0)
    }, hide: function () {
      W.a.add(this.CLASS_NAME, "hide");
      this.set("visible", !1)
    }, show: function () {
      W.a.add(this.CLASS_NAME, "show");
      this.set("visible", !0)
    }, setCursor: function (a) {
      W.a.add(this.CLASS_NAME,
        "setCursor");
      this.set("cursor", a)
    }, setRotation: function (a) {
      W.a.add(this.CLASS_NAME, "setRotation");
      W.j.ed || this.set("angle", a)
    }, setAngle: function (a) {
      W.a.add(this.CLASS_NAME, "setAngle");
      W.j.ed || "number" !== typeof a || this.set("angle", a)
    }, getAngle: function () {
      W.a.add(this.CLASS_NAME, "getAngle");
      return this.get("angle", null, !0)
    }, setOffset: function (a) {
      W.a.add(this.CLASS_NAME, "setOffset");
      this.set("offset", a)
    }, getOffset: function () {
      W.a.add(this.CLASS_NAME, "getOffset");
      return this.get("offset", null, !0)
    }, setzIndex: function (a) {
      W.a.add(this.CLASS_NAME,
        "setzIndex");
      this.set("zIndex", a)
    }, getzIndex: function () {
      W.a.add(this.CLASS_NAME, "getzIndex");
      return this.get("zIndex", null, !0)
    }, setOpacity: function (a) {
      W.a.add(this.CLASS_NAME, "setOpacity");
      this.set("opacity", a)
    }, setDraggable: function (a) {
      W.a.add(this.CLASS_NAME, "setDraggable");
      this.set("draggable", a)
    }, getDraggable: function () {
      W.a.add(this.CLASS_NAME, "getDraggable");
      return this.get("draggable", null, !0)
    }, moveTo: function (a, b, c) {
      W.a.add(this.CLASS_NAME, "moveTo");
      a = this.ia(a);
      this.set("move", {
        Ke: a, speed: b,
        La: c
      })
    }, moveAlong: function (a, b, c, d) {
      W.a.add(this.CLASS_NAME, "moveAlong");
      this.set("move", {Ke: a, speed: b, La: c, GW: d})
    }, stopMove: function () {
      W.a.add(this.CLASS_NAME, "stopMove");
      this.set("move", !1)
    }, pauseMove: function () {
      W.a.add(this.CLASS_NAME, "pauseMove");
      var a = this.get("move");
      if (!a)return !1;
      a.action = "pause";
      this.set("move", a);
      return !0
    }, resumeMove: function () {
      W.a.add(this.CLASS_NAME, "resumeMove");
      var a = this.get("move");
      if (!a)return !1;
      a.action = "resume";
      this.set("move", a);
      return !0
    }, setShadow: function (a) {
      W.a.add(this.CLASS_NAME,
        "setShadow");
      this.set("shadow", a)
    }, getShadow: function () {
      W.a.add(this.CLASS_NAME, "getShadow");
      return this.get("shadow", null, !0)
    }, setClickable: function (a) {
      W.a.add(this.CLASS_NAME, "setClickable");
      a !== this.getClickable() && this.set("clickable", a)
    }, getClickable: function () {
      W.a.add(this.CLASS_NAME, "getClickable");
      return this.get("clickable", null, !0)
    }, setTitle: function (a, b) {
      W.a.add(this.CLASS_NAME, "setTitle");
      "string" === typeof a && this.set("title", a, b)
    }, getTitle: function () {
      W.a.add(this.CLASS_NAME, "getTitle");
      return this.get("title", null, !0)
    }, setLabel: function (a) {
      W.a.add(this.CLASS_NAME, "setLabel");
      a && (a.hasOwnProperty("content") || a.hasOwnProperty("offSet")) || (a = {content: ""});
      a = W.extend({}, this.get("label"), a);
      this.set("label", a)
    }, getLabel: function () {
      W.a.add(this.CLASS_NAME, "getLabel");
      return this.get("label", null, !0)
    }, setTop: function (a, b) {
      W.a.add(this.CLASS_NAME, "setTop");
      this.set("isTop", a, b)
    }, getTop: function () {
      W.a.add(this.CLASS_NAME, "getTop");
      return this.get("isTop", null, !0)
    }, setShape: function (a, b) {
      W.a.add(this.CLASS_NAME,
        "setShape");
      this.set("shape", a, b)
    }, getShape: function () {
      W.a.add(this.CLASS_NAME, "getShape");
      return this.get("shape", null, !0)
    }, setAnimation: function (a, b) {
      W.a.add(this.CLASS_NAME, "setAnimation");
      this.set("animation", a, b)
    }, getAnimation: function () {
      W.a.add(this.CLASS_NAME, "getAnimation");
      return this.get("animation", null, !0)
    }, getMap: function () {
      W.a.add(this.CLASS_NAME, "getMap");
      return this.get("map", null, !0)
    }, markOnAMAP: function (a) {
      W.a.add(this.CLASS_NAME, "markOnAMAP");
      a = a || {};
      var b = {};
      b.name = a.name || this.get("name",
          null, !0) || "";
      a = this.ia(a.position) || this.get("position", null, !0);
      b.y = a.N;
      b.x = a.J;
      W.ve.Dk(W.ve.MY(b))
    }
  });
  W.bl = {
    KB: 12, QP: function (a) {
      if (W.j.cf && !W.j.V && a.position && (new Date).getHours() === W.bl.KB && (W.sa || (W.sa = []), a.title || a.content)) {
        var b = {p: [a.position.J, a.position.N]};
        a.title && (b.t = a.title);
        a.content && (b.c = a.content.outerHTML || a.content);
        a.name && (b.n = a.name);
        W.sa.push(b)
      }
    }, JG: function () {
      if (W.sa && W.sa.length) {
        var a = W.bl.pq(JSON.stringify({mks: W.sa, from: W.q.fY, key: W.q.key}));
        new W.qa.XMLHttpRequest(W.q.rb + "/count", {$W: "data=" + a, Tc: "POST"});
        W.sa = []
      }
    }, pq: function (a) {
      for (var b = "", c = 0, d = a.length; c < d; c++)b +=
        String.fromCharCode((a.charCodeAt(c) + 256) % 65535);
      return b
    }, Bf: function (a) {
      for (var b = "", c = 0, d = a.length; c < d; c++)b += String.fromCharCode((a.charCodeAt(c) - 256 + 65535) % 65535);
      return b
    }
  };
  if (W.j.cf && !W.j.V && (new Date).getHours() === W.bl.KB) {
    var Qc = setInterval(function () {
      (new Date).getHours() !== W.bl.KB ? clearInterval(Qc) : W.bl.JG()
    }, 6E3);
    W.event.U(window, "beforeunload", W.bl.JG)
  }
  ;
  var xc = Dc.extend({
    G: {visible: !1, items: []}, D: function (a) {
      this.CLASS_NAME = "AMap.ContextMenu";
      W.a.Xa(this.CLASS_NAME, a);
      this.hj = !0;
      W.g.gb(this, a);
      this.G.items = [];
      this.Zd(this.G)
    }, addItem: function (a, b, c) {
      W.a.add(this.CLASS_NAME, "addItem");
      this.get("items").push({mN: a, La: b, Du: c});
      this.w("items")
    }, removeItem: function (a, b) {
      W.a.add(this.CLASS_NAME, "removeItem");
      var c = this.get("items"), d, f;
      for (f = 0; f < c.length; f += 1)if (d = c[f], d.mN === a && d.La === b) {
        c.splice(f, 1);
        break
      }
      this.w("items")
    }, open: function (a, b) {
      W.a.add(this.CLASS_NAME,
        "open");
      b = W.g.ia(b);
      this.set("position", b);
      this.map ? this.map && this.map !== a && (this.map.Su(this), this.map = a, this.setMap(a)) : (this.map = a, this.setMap(a));
      this.w("open", {type: "open", target: this})
    }, close: function () {
      W.a.add(this.CLASS_NAME, "close");
      this.setMap(null);
      this.map && (this.map = this.map.Gt = null, this.w("close", {type: "close", target: this}))
    }
  });
  var yc = Dc.extend({
    G: {visible: !0, offset: new W.L(0, 0), showShadow: !1, closeWhenClickMap: !1, retainWhenClose: !0, autoMove: !0},
    D: function (a) {
      this.CLASS_NAME = "AMap.InfoWindow";
      W.a.Xa(this.CLASS_NAME, a);
      a = a || {};
      this.hj = !0;
      a && a.size && (a.size = W.g.mj(a.size));
      W.g.gb(this, a);
      this.Zd(this.G);
      a.position && this.set("position", W.g.ia(a.position), !0)
    },
    open: function (a, b) {
      W.a.add(this.CLASS_NAME, "open");
      b = W.g.ia(b);
      if (a)if (this.get("toBeClose")) this.set("toBeClose", !1); else if (b = b || this.get("position", null, !0)) {
        this.w("change",
          {type: "change", target: this});
        var c = this.get("map", null, !0);
        c && c === a ? this.set("position", b) : (this.map = a, a.mi && a.mi.close(), this.set("position", b, !0), this.setMap(a));
        this.w("open", {type: "open", target: this})
      }
    },
    close: function () {
      W.a.add(this.CLASS_NAME, "close");
      this.setMap(null);
      this.map = null;
      this.w("change", {type: "change", target: this})
    },
    setContent: function (a) {
      W.a.add(this.CLASS_NAME, "setContent");
      this.set("content", a);
      this.w("change", {type: "change", target: this})
    },
    getContentU: function () {
      W.a.add(this.CLASS_NAME,
        "getContentU");
      return this.get("content", null, !0)
    },
    getContentDom: function () {
      return this.get("contentDom", null, !0)
    },
    getContent: function () {
      W.a.add(this.CLASS_NAME, "getContent");
      return this.get("content", null, !0)
    },
    setPosition: function (a) {
      W.a.add(this.CLASS_NAME, "setPosition");
      a = W.g.ia(a);
      this.set("position", a);
      this.w("change", {type: "change", target: this})
    },
    setOffset: function (a) {
      W.a.add(this.CLASS_NAME, "setOffset");
      this.set("offset", a);
      this.w("change", {type: "change", target: this})
    },
    getPosition: function () {
      W.a.add(this.CLASS_NAME,
        "getPosition");
      return this.get("position", null, !0)
    },
    setSize: function (a) {
      W.a.add(this.CLASS_NAME, "setSize");
      a = W.g.mj(a);
      this.set("size", a);
      this.w("change", {type: "change", target: this})
    },
    getSize: function (a) {
      W.a.add(this.CLASS_NAME, "getSize");
      var b = this.get("size", null, !0);
      if (b)return b;
      if (this.Ia && !a)return new W.bc(this.Ia.Fe.offsetWidth, this.Ia.Fe.offsetHeight)
    },
    getIsOpen: function () {
      W.a.add(this.CLASS_NAME, "getIsOpen");
      return !!this.get("map")
    }
  });
  var Bc = Nc.extend({
    G: {isOutline: !1, outlineColor: "#000000", geodesic: !1, borderWeight: 1}, D: function (a) {
      Bc.ye.D.apply(this, arguments);
      this.CLASS_NAME = "AMap.Polyline";
      W.a.Xa(this.CLASS_NAME, a);
      this.hj = !0;
      a = a || {};
      a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 50;
      a.path && (a.path = this.ia(a.path));
      W.g.gb(this, a);
      this.setOptions(this.G)
    }, getLength: function () {
      W.a.add(this.CLASS_NAME, "getLength");
      for (var a = this.get("path"), b = 0, c = 0; c < a.length - 1; c += 1)b += a[c].Df(a[c + 1]);
      return parseFloat(b.toFixed(2))
    }
  });
  var Cc = Nc.extend({
    D: function (a) {
      Cc.ye.D.apply(this, arguments);
      this.CLASS_NAME = "AMap.Polygon";
      W.a.Xa(this.CLASS_NAME, a);
      this.hj = !0;
      a = a || {};
      a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
      a.path && (a.path = this.ia(a.path));
      W.g.gb(this, W.extend({fillColor: "#FFAA00", fillOpacity: 0.9}, a));
      this.setOptions(this.G)
    }, cA: function (a) {
      var b = 6378137 * Math.PI / 180, c = 0, d = a.length;
      if (3 > d)return 0;
      for (var f = 0; f < d - 1; f += 1)var g = a[f], h = a[f + 1], c = c + (g.J * b * Math.cos(g.N * Math.PI / 180) * h.N * b - h.J * b * Math.cos(h.N * Math.PI / 180) * g.N *
        b);
      d = a[f];
      a = a[0];
      c += d.J * b * Math.cos(d.N * Math.PI / 180) * a.N * b - a.J * b * Math.cos(a.N * Math.PI / 180) * d.N * b;
      return 0.5 * Math.abs(c)
    }, getArea: function () {
      W.a.add(this.CLASS_NAME, "getArea");
      var a = this.get("path", null, !0), b;
      if (!a.length || a[0] instanceof W.Q) b = this.cA(a); else {
        b = this.cA(a[0]);
        for (var c = 1; c < a.length; c += 1)b -= this.cA(a[c])
      }
      return Number(b.toFixed(2))
    }, toString: function () {
      W.a.add(this.CLASS_NAME, "toString");
      return this.get("path").join(";")
    }, contains: function (a) {
      W.a.add(this.CLASS_NAME, "contains");
      a = W.g.ia(a);
      var b = this.get("path");
      b.length && b[0] instanceof W.Q && (b = [b]);
      a = [a.J, a.N];
      for (var c, d = 0, f = b.length; d < f && (c = this.uW(b[d]), W.Vc.kk(c) || c.reverse(), c = W.Vc.Dd(a, c, 0 === d ? !0 : !1), 0 < d && (c = !c), c); d += 1);
      return c
    }, uW: function (a) {
      for (var b = [], c = 0; c < a.length; c += 1)b.push([a[c].J, a[c].N]);
      return b
    }
  });
  var Ac = Mc.extend({
    G: {
      visible: !0,
      zIndex: 10,
      strokeColor: "#006600",
      strokeOpacity: 0.9,
      strokeWeight: 3,
      strokeStyle: "solid",
      strokeDasharray: [10, 5],
      radius: 1E3,
      fillColor: "#006600",
      fillOpacity: 0.9
    }, D: function (a) {
      Ac.ye.D.apply(this, arguments);
      this.CLASS_NAME = "AMap.Circle";
      W.a.Xa(this.CLASS_NAME, a);
      a = a || {};
      a.center && (a.center = W.g.ia(a.center));
      a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
      W.g.gb(this, a);
      this.hj = this.G.center ? !0 : !1;
      this.setOptions(this.G)
    }, setCenter: function (a, b) {
      W.a.add(this.CLASS_NAME, "setCenter");
      (a = W.g.ia(a)) && a instanceof W.Q && (this.set("center", a), this.w("change", {
        type: "change",
        target: this
      }), this.hj || (this.hj = !0, this.get("map") && this.get("map").w("overlays")), b || this.w("setCenter"))
    }, getCenter: function () {
      W.a.add(this.CLASS_NAME, "getCenter");
      return this.get("center", null, !0)
    }, setRadius: function (a, b) {
      W.a.add(this.CLASS_NAME, "setRadius");
      this.set("radius", a);
      this.w("change", {type: "change", target: this});
      b || this.w("setRadius")
    }, getRadius: function () {
      W.a.add(this.CLASS_NAME, "getRadius");
      return this.get("radius",
        null, !0)
    }, getBounds: function () {
      var a = this.get("center"), b = this.get("radius");
      if (!a)return null;
      var c = a.offset(-b, -b), a = a.offset(b, b);
      return new W.vd(c, a)
    }, contains: function (a) {
      W.a.add(this.CLASS_NAME, "contains");
      return this.get("center").Df(a) <= this.get("radius") ? !0 : !1
    }
  });
  W.YN = Ec.extend({
    D: function (a, b) {
      b && (b.center = b.position, b.zoom = 11);
      arguments.callee.bb.apply(this, arguments);
      window.console && window.console.log && window.console.log("\u9ad8\u5fb7\u5730\u56feJSAPI\u8857\u666f\u5df2\u4e0b\u7ebf\uff0c\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002")
    }
  });
  W.ZN = Z.extend({
    D: function (a) {
      arguments.callee.bb.apply(this, arguments)
    }
  });
  W.Vc = {
    Zj: function (a, b) {
      for (var c = Infinity, d = 0, f = 1, g = b.length; f < g; d = f, f += 1)c = Math.min(c, W.Vc.E1(a, [b[d], b[f]]));
      return Math.sqrt(c)
    }, E1: function (a, b) {
      return this.D1(a, this.wI(a, b))
    }, D1: function (a, b) {
      var c = a[0] - b[0], d = a[1] - b[1];
      return c * c + d * d
    }, wI: function (a, b) {
      var c = a[0], d = a[1], f = b[0], g = b[1], h = f[0], f = f[1], k = g[0], g = g[1], l = k - h, m = g - f,
        c = 0 === l && 0 === m ? 0 : (l * (c - h) + m * (d - f)) / (l * l + m * m || 0);
      0 >= c || (1 <= c ? (h = k, f = g) : (h += c * l, f += c * m));
      return [h, f]
    }, kk: function (a) {
      for (var b = a.length, c = 0, d = a[b - 1], f = d[0], d = d[1], g, h, k = 0; k <
      b; k += 1)h = a[k], g = h[0], h = h[1], c += (g - f) * (h + d), f = g, d = h;
      return 0 < c
    }, Dd: function (a, b, c) {
      var d = a[0];
      a = a[1];
      var f = !1, g, h, k, l, m = b.length, n = 0;
      for (l = m - 1; n < m; l = n, n += 1) {
        var p = !1;
        g = b[n][0];
        h = b[n][1];
        k = b[l][0];
        l = b[l][1];
        if (g === d && h === a || k === d && l === a)return c ? !0 : !1;
        if (h < a === l >= a) {
          g = (k - g) * (a - h) / (l - h) + g;
          if (d === g)return c ? !0 : !1;
          p = d < g
        }
        p && (f = !f)
      }
      return f
    }
  };
  var Rc = {
    Pixel: W.L,
    LngLat: W.Q,
    Size: W.bc,
    Bounds: W.vd,
    PixelBounds: W.ce,
    event: $,
    Panorama: W.YN,
    PanoramaMarker: W.ZN,
    Map: Ec,
    View2D: wc,
    GroundImage: zc,
    Marker: Z,
    ImageMarker: uc.f3,
    Text: uc.p3,
    Icon: Oc,
    MarkerShape: Pc,
    Polyline: Bc,
    Polygon: Cc,
    Circle: Ac,
    ContextMenu: xc,
    InfoWindow: yc,
    Buildings: Jc,
    TileLayer: Y,
    ImageLayer: Kc,
    VectorLayer: Ic,
    MassMarks: Lc,
    CANVAS: "canvas",
    DOM: "dom"
  };
  Rc.plugin = Rc.service = Ec.prototype.plugin;
  Rc.TileLayer.Satellite = Y.gD;
  Rc.TileLayer.RoadNet = Y.eD;
  Rc.TileLayer.Traffic = Y.iD;
  Rc.Panorama.Events = $;
  Rc.TileLayer.PanoramaLayer = Y.h3;
  Rc.UA = {ie: W.j.Sn, ielt9: W.j.ed, ielt11: W.j.eZ, mobile: W.j.V, android: W.j.xg, ios: W.j.oK};
  Rc.User = {key: W.q.key};
  window.AMap = Rc;
  window.AMap.BuryPoint = W.BuryPoint;
  window.AMap.Class = W.W;
  if ("undefined" !== typeof arguments && arguments.callee)try {
    W.j.ru && window.localStorage && ((rc = window.localStorage["_AMap_" + W.Fd]) && JSON.parse(rc).version === W.q.Ai || window.localStorage.setItem("_AMap_" + W.Fd, JSON.stringify({
      script: "(" + arguments.callee + ")()",
      version: W.q.Ai
    })))
  } catch (Sc) {
  }
  ;
  window.AMap.convertFrom = function (a, b, c) {
    W.a.add("AMap", "convertFrom", b);
    var d = W.q.ec + "/v3/assistant/coordinate/convert";
    a = W.g.ia(a);
    var f = [];
    if (a instanceof Array) {
      for (var g = 0, h = a.length; g < h; g += 1)f.push(a[g] + "");
      f = f.join(";")
    } else f = a + "";
    b = ["key=" + W.q.key, "s=rsv3", "locations=" + f, "coordsys=" + (b || "gps")];
    d += 0 < b.length ? "?" + b.join("&") : "";
    d = new W.qa.Ca(d, {callback: "callback"});
    d.e("complete", function (a) {
      if ("1" === a.status) {
        a = a.locations.split(";");
        for (var b = 0; b < a.length; b += 1) {
          var d = a[b].split(",");
          a[b] =
            new AMap.LngLat(d[0], d[1])
        }
        c && "function" === typeof c && c("complete", {info: "ok", locations: a})
      } else c && "function" === typeof c && c("error", a.info)
    }, this);
    d.e("error", function (a) {
      c && "function" === typeof c && c("error", a.info)
    }, this)
  };
  _jsload_('http', 'W.qa=W.qa||{}; W.qa.Qv=W.W.extend({ta:[W.da],D:function(a,b){this.G={callback:"cbk",type:"json",charset:"utf-8"};b=b||{};W.g.gb(this,b);this.url=a;this.send(a,b.Tc,b.$W)},send:function(a){var b=W.f.create("script");b.type="text/javascript";b.charset=this.G.charset;var c=this;W.j.ed?b.onreadystatechange=function(){"loaded"!==this.readyState&&"complete"!==this.readyState||c.w("complete")}:(b.onload=function(){c.w("complete")},b.onerror=function(){c.w("error",{status:0,info:"service error",url:a})});b.src=a;document.getElementsByTagName("head")[0].appendChild(b)}});W.qa.Ca=W.qa.Qv.extend({xW:function(){if(W.g.vM)return W.g.nv.push(this),!0},Q0:function(){this.w("error",{info:"TIME_OUT_A"})},send:function(a,b,c,d){function f(){window[g]=null;try{window[g]=null}catch(a){}h.onerror=null;h.parentNode&&h.parentNode.removeChild(h)}if(!this.G.$p||!this.xW()){a=encodeURI(a);var g=this.G.fun;if(!g||window[g])g=W.g.vJ("jsonp_",6)+"_";var h=document.createElement("script");h.type="text/javascript";h.charset="utf-8";h.async=!0;var k=this;W.j.ed||(h.onerror=function(){f(); k.w("error",{info:"REQUEST_FAILED",url:a})});window[g]=function(a){f();if(k.G.callbackFunction)k.G.callbackFunction.call(k.G.context,a);else if(3E4===a.errcode&&a.data)W.g.vM=!0,W.Ra.load("AMap.AntiCrabFrame",function(){W.g.$p||(W.g.$p=new W.xN);W.g.nv.push(k);W.g.$p.open(k.G.Tc,a.data.host,k.yB||"",k.url)});else{if(a instanceof Array||"string"===typeof a)a={data:a};a.T4=g;k.w("complete",a)}};b="?";-1!==a.indexOf("?")&&(b="&");b=a+b+this.G.callback+"="+g;if(-1!==a.indexOf(W.q.ec+"/v")||-1!==a.indexOf("yuntuapi.amap.com/datasearch"))b+= "&platform=JS&logversion=2.0&sdkversion="+W.q.My,b+="&appname="+W.q.ql;b+="&csid="+this.y2();if(c=this.G.Qt){var l=[],m;for(m in c)c.hasOwnProperty(m)&&(l.push(m+"="+c[m]),b+="&"+m+"="+encodeURIComponent(c[m]));k.yB=l.join("&")}h.src=d?b+"&rereq=true":b;W.qa.Ca.nE||(W.qa.Ca.nE=document.getElementsByTagName("head")[0]);W.qa.Ca.nE.appendChild(h)}},y2:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");return function(b,c){var d=[],f;c=c||a.length;if(b)for(f=0;f< b;f++)d[f]=a[0|Math.random()*c];else{var g;d[8]=d[13]=d[18]=d[23]="-";d[14]="4";for(f=0;36>f;f++)d[f]||(g=0|16*Math.random(),d[f]=a[19==f?g&3|8:g])}return d.join("")}}()});window.AMap.Http={};window.AMap.Http.JSONP=W.qa.Ca;W.qa.XMLHttpRequest=W.qa.Qv.extend({send:function(a,b,c){var d=this.T2=new XMLHttpRequest,f=this;d.onreadystatechange=function(){4===d.readyState&&200===d.status?f.w("complete",{url:a,data:d.responseText}):404===d.status&&(d.abort(),f.w("error",{url:a,data:"404"}))};d.open(b||"GET",a);"POST"===b&&d.setRequestHeader("Content-type","application/x-www-form-urlencoded");d.send(c||void 0)},abort:function(){this.T2.abort()}}); ', true), _jsload_('map', 'W.Gh=W.W.extend({D:function(a,b,c,d){this.start=a;this.end=b;this.transition=c;this.precision=d||0;this.zk=!1;return this},yk:function(a){this.Sh=+new Date;this.frames=0;this.Ge=a;this.startTime=+new Date;this.zk=!0;this.UH=W.g.Oe(this.update,this,!1)},update:function(){this.UH=W.g.Oe(this.update,this,!1);this.frames+=1;var a=+new Date,b=a-this.startTime,b=this.transition?this.transition(this.start,this.end,b,this.frames,a-this.Sh):null;"number"===typeof b&&Math.abs(b-this.end)<this.precision&&(this.stop(), b=this.end);this.Sh=a;this.fo.call(this.Ge||this,b)},stop:function(a){W.g.tl(this.UH);a&&this.update();this.zk=!1}});W.Gh.Easing={Linear:{None:function(a){return a}},Bounce:{In:function(a){return 1-(a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375)},Out:function(a){return W.Gh.Easing.Bounce.In(1-a)}},Cubic:{In:function(a){return 1-a*a*a},Out:function(a){a=1-a;return 1-a*a*a}}};W.ad=W.W.extend({ta:[W.da,W.xd,W.RK],D:function(a,b){this.na=b;this.sj="";this.Og=this.Ug=this.wg=!1;this.C=a;this.cS();this.nZ();this.P("size",b);this.P("zooms",b);this.P("limitBounds",b);this.P("view",b);this.P("nolimg",b,!0);this.P("mapNumber",b,!0);this.P("lang",b,!0);this.P("features",b,!0);this.P("styleID",b,!0);this.P("forceBig",b,!0);this.P("mode",b,!0);this.P("showBuildingBlock",b,!0);this.P("mapStyle",b);var c=this.get("mapStyle");this.pg=W.q.pg[c]||W.q.pg["default"];this.P("editEnable", b);this.Jc&&this.P("style",b,!0);this.P("styleUrl",b);this.P("hightlight",b,!0);this.P("labelzIndex",b,!0);W.j.cf&&(this.Lc=new W.T.ng(new Y({zIndex:b.get("labelzIndex"),visible:!1}),this),this.Lc.type="\\u77e2\\u91cf\\u6807\\u6ce8",b.labelsLayer=this.Lc.Pa,this.Lc.Pa.e("complete",this.Bj,this,!0),this.Lc.Pa.e("renderComplete",this.Bj,this),this.Lc.rp=this.Lc.Qq=!0);this.qk=new W.K.canvas.ad(this);this.P("isHotspot",b,!0);this.P("layers",b);this.P("overlays",b);this.P("infos",b,!0);this.P("contextmenus", b,!0);this.P("coordsBound",b);this.P("controls",b);this.P("bounds",b);this.P("draw",b);this.Ad("zoomAndCenter destroy defaultCursor jogEnable animateEnable baseRender overlayRender 3rdpartyDataEnable".split(" "),b);this.Ad("rotateEnable dragEnable keyboardEnable doubleClickZoom scrollWheel zoomEnable touchZoom".split(" "),b,!0);this.get("jogEnable")?this.Mq=!0:this.Mq=!1;this.DR();this.JR();this.FR();this.P("resizeEnable",b);this.na.map=this;c=this.get("size");c=c.width*c.height/65536;W.j.Sc&&3<c&& (this.$H=!0);this.kM()},editEnableChanged:function(){location.hostname.match(/.amap.com/)&&(this.Jc=this.get("editEnable"))},labelzIndexChanged:function(){this.Lc&&this.Lc.set("zIndex",this.get("labelzIndex"))},styleChanged:function(){this.uh=!0},mapStyleChanged:function(){if(W.j.cf){this.sj&&(this.set("style",""),this.sz=this.sj="");var a=this.get("mapStyle");this.uh=!0;this.pg=W.q.pg[a]||W.q.pg["default"];this.Qu()}},styleUrlChanged:function(){if(W.j.cf){var a=this.get("styleUrl")||"";if(a!=this.sj){var a= a.substr(0,46),b=a.split("amap://styles/")[1];"normal"==b?(this.sj="",this.set("nolimg",!1),this.set("style",""),this.sz=""):(this.uC=!0,this.set("nolimg",!0),b=-1!==W.g.indexOf(W.q.n_,b)?W.q.rb+"/style?name="+b+"&key="+W.q.key:W.q.ec+"/v4/map/styles?styleid="+b+"&s=rsv3&key="+W.q.key,b=new W.qa.Ca(b,{callback:"callback"}),b.e("complete",function(a){a.data&&a.data.content?this.set("style",JSON.parse(a.data.content)):this.set("style","");this.uC=!1},this),b.e("error",function(){this.uC=!1},this),this.sj= a)}}},e1:function(a){this.C.style.background=a},getTargetLevel:function(){var a=this.get("targetLevel",null,!0);a||(a=this.get("zoom"));return a},resizeEnableChanged:function(){},UW:function(){var a;if(this.get("center")instanceof W.Q){a=new W.vd(-180,-85,180,85);var b=this.Ub(a.oh());a=this.Ub(a.hk());this.aw={pe:b.x,gd:b.y,Xd:a.x,pd:a.y}}else a=this.get("limitBounds"),this.aw={pe:a[0],gd:a[1],Xd:a[2],pd:a[3]}},zW:function(){var a=this.get("limitBounds"),b=this.get("bounds");b.nb.J>b.fb.J&&(b.fb.J+= 360);if(!a.contains(b)){var c=this.get("center").Sb();a.Je()<b.Je()?c.J=a.Ff().J:(a.nb.J>b.nb.J&&(c.J+=a.nb.J-b.nb.J),a.fb.J<b.fb.J&&(c.J+=a.fb.J-b.fb.J));a.He()<b.He()?c.N=a.Ff().N:(a.nb.N>b.nb.N&&(c.N+=a.nb.N-b.nb.N),a.fb.N<b.fb.N&&(c.N+=a.fb.N-b.fb.N));return c}},tD:function(){this.aw||this.UW();return this.aw},hy:function(){var a=this.bC;this.na.refreshSize();var b=this.get("size");b&&a&&!b.Kb(a)&&(this.bC=b,this.kv=!0,this.set("display"),this.lM(b),this.get("resizeEnable")&&this.la("resize", {o_:a,eL:b}))},EG:function(){var a=this;a.hy();a.ey=setTimeout(function(){a.EG()},200)},JP:function(){this.ey&&(clearTimeout(this.ey),this.ey=null)},cS:function(){this.bC=this.na.getSize();if(W.j.ed||W.j.M2&&W.j.oK||W.j.WZ)this.EG();else{var a=this;W.B.JV(this.C,function(b){a.hy(b)})}},viewChanged:function(a){if(a=this.get("view"))this.view=new W.uO(a,this)},nZ:function(){var a=this.C;W.f.tb(a,"amap-container");var b={};b.Ed=W.f.create("div",a,"amap-maps");this.Wk=W.f.create("div",a);this.Wk.style.display= "none";b.Sj=W.f.create("div",b.Ed,"amap-drags");b.T=W.f.create("div",b.Sj,"amap-layers");b.Ia=W.f.create("div",b.Sj,"amap-overlays");b.controls=W.f.create("div",a,"amap-controls");b.TA=W.f.create("a",a,"amap-logo");var c=window.location.host;-1===c.indexOf("amap.com")&&-1===c.indexOf("gaode.com")&&(b.TA.href=W.j.V?"http://m.amap.com":"http://gaode.com",b.TA.target="_blank");W.f.create("img",b.TA).src=W.j.Sc?this.na.G.logoUrlRetina:this.na.G.logoUrl;b.$h=W.f.create("div",a,"amap-copyright");b.$h.style.display= "none";350<W.f.Aq(this.C).width&&(b.$h.innerHTML=this.na.G.copyright,b.$h.QK=W.f.create("span",b.$h,"amap-mcode"),this.Qu());this.$a=b},Qu:function(){var a=this.get("layers");if(a){for(var b=-1,c="",d=0;d<a.length;d+=1){var f=a[d].get("mapNumber"),g=a[d].getzIndex();f&&g>b&&a[d].get("visible")&&(c=f,b=g)}this.set("mapNumber",c);a=this.na.getMapStyle();"GS(2016)710"==c&&a&&"normal"!==a&&"amap://styles/normal"!==a&&(c="");c&&this.$a.$h.QK&&(this.$a.$h.QK.innerHTML="- "+c+"\\u53f7");return c}},Bj:function(){if(!this.vz)if(this.na.cb)1== this.Xk&&13==this.get("zoom")&&(W.g.qq.stop(this.ls),W.ae.Te.send({id:this.na.id,params:{fps:this.ls.qq,type:"fps",rs:this.get("baseRender")}}),this.Xk=2);else{for(var a=this.get("layers"),b=this.get("zoom"),c=0;c<a.length;c+=1){var d=a[c].get("zooms");if(!(!d||b>d[1]||b<d[0]||!a[c].get("visible")||a[c].T&&a[c].T.va&&0==a[c].T.va.length||a[c].T&&a[c].T.cb))return}if("d"===this.get("baseRender")||this.Lc.cb)a={id:this.na.id},W.ae.Te.end(W.extend(a,{key:"rd"})),W.ae.Te.send(W.extend(a,{params:{rs:this.get("baseRender")}})), this.na.cb=!0,this.set("display"),W.g.Oe(function(){this.w("complete");this.na&&this.na.rh&&this.na.rh.fy()},this)}},layersChanged:function(){this.Ba=this.Ba||[];for(var a=this.get("layers"),b=this.Ba.length-1;0<=b;b-=1)this.Ba[b]===this.$b||this.Ba[b]===this.vk||this.Ba[b].rp||this.Ba[b].Pa.rp||-1!==W.g.indexOf(a,this.Ba[b].Pa)||(this.Ba[b].Ne(),this.Ba[b].Bk&&this.Ba[b].Bk.Ne(),this.Ba[b].Pa.F("complete",this.Bj,this),this.Ba[b].Pa.F("renderComplete",this.Bj,this),this.Ba=W.g.bj(this.Ba,b));for(var c= !1,d=!0,f=this.get("labelzIndex"),b=0;b<a.length;b+=1){if(a[b].eh)-1===W.g.indexOf(this.Ba,a[b].T)&&this.Ba.push(a[b].T);else{var g=this.bg(a[b]);g&&(this.Ba.push(g),a[b].eh=!0,a[b].T=g);a[b].e("complete",this.Bj,this,!0);a[b].e("renderComplete",this.Bj,this)}a[b].sk&&a[b].get("visible")&&!a[b].Zs&&(c=!0,!1==a[b].get("detectRetina")&&(d=!1),f=a[b].get("textIndex")||f)}a=W.g.indexOf(this.Ba,this.Lc);c?(-1===a&&this.Ba.push(this.Lc),this.Lc.oa=d&&W.j.oa,this.Lc.ut(this.get("mapStyle")||"normal"),this.Lc.set("zIndex", f),this.Lc.set("visible",!0),this.na.Eq=!0,this.na.get("isHotspot")?this.Lc.A_():this.Lc.lz()):(this.Lc&&(this.Lc.set("visible",!1),this.na.Eq=!1,this.Lc.lz()),this.na.Eq=!1);this.na.isHotspotChanged();this.set("display",0);this.Qu()},isHotspotChanged:function(){this.layersChanged()},controlsChanged:function(){var a=this.get("controls"),b,c;if(a.add&&0<a.add.length)for(;0<a.add.length;)b=a.add.shift(),(c=b.tn||b.addTo)&&c.call(b,this.na,this.$a.controls);else if(a.remove&&a.remove.length)for(;0<a.remove.length;)b= a.remove.shift(),(c=b.lo||b.removeFrom)&&c.call(b,this.na,this.$a.controls)},FH:function(){if(!this.vz){var a=this;this.IH=!1;a.$b||(a.$b=new W.T.kd(new Ic,a),a.$b.rf=36,a.$b.jg=36,a.$b.set("zIndex",120),a.Ba.push(a.$b),a.$b.Ot=!0);for(var b=a.get("overlays"),c=[],d=0;d<a.Gb.length;d+=1)-1===W.g.indexOf(b,a.Gb[d].cc)&&(a.Gb[d].cc instanceof yc||a.Gb[d].cc instanceof xc?a.Gb[d].Ne():(a.$b&&a.Gb[d]instanceof W.Ia.be?(a.$b.yh=W.g.tX(a.$b.yh,a.Gb[d].I),a.$b.WL([a.Gb[d].I])):a.vk&&a.vk.WL([a.Gb[d].I]), a.Gb[d].I.Y?(W.f.remove(a.Gb[d].I.Y),a.Gb[d].I.Y=null):a.Gb[d].I.ha&&(W.f.remove(a.Gb[d].I.ha.Qc),W.f.remove(a.Gb[d].I.ha.jb),a.Gb[d].I.ha=null),a.Gb[d].vh&&a.Gb[d].vh.stop(),a.Gb[d].cc.eh=!1,a.Gb[d].cc.Ii.map=null,a.Gb[d].cc.Ia=null,a.Gb[d].cc=null,a.Gb[d].I.yX(),a.Gb[d].I=null,a.Gb[d].sm(),a.Gb[d].Ii=null,a.Gb[d].Zi(),a.Gb[d].map=null),c.push(a.Gb[d]));for(d=0;d<c.length;d+=1)a.Gb=W.g.bj(a.Gb,W.g.indexOf(a.Gb,c[d]));var f=[],g=[];W.g.c1(function(b){if(!b.eh&&b.hj){var c=b.Ia||a.iW(b);c&&(a.Gb.push(c), c instanceof W.Ia.Ih||c instanceof W.Ia.Ev?c.iL(a):c instanceof W.Ia.be?f.push(c.I):g.push(c.I),b.eh=!0)}},b);f.length&&a.$b.ol(f);g.length&&(a.vk||(a.vk=new W.T.kd(new Ic,a),a.vk.set("zIndex",110),a.Ba.push(a.vk)),a.vk.ol(g));a.set("display",0)}},overlaysChanged:function(){this.Gb=this.Gb||[];this.get("overlays")&&0===this.get("overlays").length?this.FH():this.IH||(W.g.Oe(this.FH,this),this.IH=!0)},contextmenusChanged:function(){var a=this.get("contextmenu");if(a){var b=this;W.Ra.load("overlay", function(){b.Gt=new W.Ia.Ev(a,b);b.set("display",0)})}},infosChanged:function(){var a=this.get("infos");if(a){this.mi=this.mi||{};var b,c=this;W.Ra.load("overlay",function(){for(var d in a)a.hasOwnProperty(d)&&(b=a[d],c.mi[d]=c.mi[d]||new W.Ia.Ih(b,c))})}},iW:function(a){var b=null;if(a instanceof Z)b=new W.Ia.be(a,this);else if(a instanceof xc)b=new W.Ia.Ev(a,this);else if(a instanceof yc)b=new W.Ia.Ih(a,this);else{var c=["overlay"];"d"===this.get("overlayRender")?(c.push("dvector"),W.j.gj?c.push("svg"): c.push("vml")):c.push("cvector");if(!this.B2&&!W.Ra.lu(c)){var d=this;W.Ra.of(c,function(){this.B2=!0;d.overlaysChanged()});return}a instanceof Cc?b=new W.Ia.jd(a,this):a instanceof Bc?b=new W.Ia.yd(a,this):a instanceof Ac&&(b=new W.Ia.Bi(a,this))}return b},h4:function(){function a(){}var b=new W.T.kd,c=[],d=new W.Q(116.405467,39.907761);new W.style.zd.Jr;for(var f=0;100>f;f+=1)for(var g=0;100>g;g+=1){var h=new W.Q(d.J+0.02*g,d.N+0.02*f),h=new W.$d({name:"point"+(100*f+g),map:this,za:new W.ca.xe(this.Ub(h))}); c[100*f+g]=h;h.e("hover",a,h)}b.ol(c);this.Ba.push(b)},ab:function(){},g4:function(a){var b=new W.T.kd,c=[],c=(new W.KN({map:this})).Nu(a);b.ol(c);this.Ba.push(b);this.set("display",0)},bg:function(a){a=a.bg(this);if(!a)return null;if(a.length){var b=this;W.Ra.of(a,function(){b.layersChanged()})}else return a;return null},m5:function(){return this.$a},x6:function(){this.set("display",0)},displayChanged:function(a){this.kM(a)},kM:function(a){if(a)if(W.g.tl(this.Vu),W.j.xg){var b=this;setTimeout(function(){b.se()}, 0)}else this.se();else this.Fo||(this.Vu=W.g.Oe(this.se,this),this.Fo=!0)},se:function(){if(!this.vz){this.w("render");this.Fo=!1;var a={};if(this.Ba){for(var b=[],c=0,d=this.Ba.length;c<d;c+=1)b.push(this.Ba[c]),this.Ba[c].Bk&&b.push(this.Ba[c].Bk);b.sort(function(a,b){return a.get("zIndex")>b.get("zIndex")?1:a.get("zIndex")===b.get("zIndex")?a.$v>b.$v?1:-1:-1});a.Ba=b;a.size=this.get("size");b=W.j.oa?Math.min(window.devicePixelRatio||1,2):1;a.aW=15E5<a.size.width*a.size.height*b*b;a.V=W.j.V;a.pa= this.view.WY();a.tu=this.get("mapStyle");a.uh=this.uh;a.yc=this.Og;a.Jd=this.wg;a.gg=this.Ug;a.nC=this.Ug&&W.j.V;a.hN=W.j.V&&this.wg;a.uv=W.j.V&&this.Og;this.uv=a.uv;a.Jo=a.pa.zoom>this.get("targetLevel");a.g_=!0;a.ra=this.get("coordsBound");a.$H=this.$H;for(var b=!1,f,c=!1,d=0;d<this.Ba.length;d+=1)this.Ba[d].qi&&this.Ba[d].get("visible")&&a.pa.zoom<=this.Ba[d].get("zooms")[1]&&(a.NB=!0),this.Ba[d].ik().Sc&&(b=!0);for(d=0;d<this.Ba.length;d+=1)this.Ba[d].Pa.YH&&a.NB&&(!this.wg&&this.Ba[d].Pa.get("visible")&& (f=this.Ba[d].Pa.YH(),f.H5=1,f.zoom=a.pa.zoom),c=!0);c?f&&this.Fb!==f&&(this.Fb=f):this.Fb=[];a.Fb=this.Fb;a.Sc=b;a.scale=Math.pow(2,a.pa.zoom-a.pa.Hc);this.rq=a;this.qk.se(a);this.uh=!1}}},k5:function(){return this.qk},oY:function(){var a=[],b=this.get("controls").Ac,c;for(c in b)b[c].On&&b[c].On()&&a.push(b[c].On());return a},destroyChanged:function(){this.vz=1;this.R={};this.Lc&&(this.Lc.Pa.F("complete",this.Bj,this),this.Lc.Ne(),this.Ba=W.g.bj(this.Ba,W.g.indexOf(this.Ba,this.Lc)));this.FU&&clearTimeout(this.FU); this.nU();this.xS();this.Qx&&this.Qx();this.nV();this.sm();this.na=this.na.map=null;this.C=this.C.hw=null;this.Td&&(this.Td.stop(),this.Td=null);this.Zc&&(this.Zc.stop(),this.Zc=null);this.Xb&&(this.Xb.stop(),this.Xb=null)},nV:function(){var a=this.C;this.JP();W.B.MW(a);W.f.VL(a);this.Wk=null;W.f.yb(a,"amap-container");this.$a=null},jogEnableChanged:function(){this.get("jogEnable")?this.Mq=!0:this.Mq=!1},drawChanged:function(){var a=this,b,c,d=this.get("draw");if(d){this.fj||(this.fj=[]);b=0;for(c= this.fj.length;b<c;b+=1)this.fj[b].p0();W.Ra.load("interaction",function(){var b=new W.g3({type:d,T:a.vk},a);a.fj.push(b);a.loaded=!0})}else if(this.fj)for(b=0,c=this.fj.length;b<c;b+=1)this.fj[b].p0(),this.fj[b].w4(),this.F("click",this.fj[b].y5,this)}});W.ad.Zb({DR:function(){this.vp=!1;W.j.ud&&this.hP();W.j.V||this.eP()},nU:function(){W.j.ud&&this.CS();W.j.V||this.yS()},rotateEnableChanged:function(){this.bv=this.get("rotateEnable");W.j.ud&&(this.bv?this.bW():this.m_())},zoomEnableChanged:function(){this.get("zoomEnable")?(W.j.ud&&this.aI(),W.j.V||this.gP()):(W.j.ud&&this.gL(),W.j.V||this.BS())},mousewheelChanged:function(){},OK:function(a){a&&this.QZ(a.kl)},QZ:function(a){this.vp=a},oN:function(){this.vp=!1},Gg:function(a,b){var c,d={};a||(a=window.event); var f=W.B.Ag(a,this.$a.Ed);W.j.ud&&("touchend"!==a.type?this.R.DF=f:f=this.R.DF);d.Vb=f;d.wk=this.qz(f);d.Ke=this.Wj(f);(f=!1!==this.vp?this.vp?[this.vp]:null:this.HQ(d.wk))&&0<f.length&&f[0].Lj&&(c=f[0].Lj,d.kl=f[0]);c||(c=this);d.he=c;d.x3=a.altKey;d.ctrlKey=a.ctrlKey;d.button=void 0==a.button?0:a.button;!b&&a.preventDefault&&a.preventDefault();return d},sF:function(a){return a&&a!==this&&a!==document},IG:function(){if((!this.jh||this.jh.zk)&&this.R.lq&&this.R&&this.R.If){var a=this.R.lq.Vb.Qa(this.R.If); a.x||a.y?(this.R.Ug=!0,this.R.Vk||(this.R.mq.w("dragstart",this.R.NI),this.R.Vk=!0),this.R.mq.w("dragging",this.R.lq),this.R.If=this.R.lq.Vb):this.R.Ug=!1}},C1:function(a){for(var b=[],c=0;c<a.length;c+=1)a[c]&&(b=b.concat(a[c]));return b},$q:function(a,b){return a&&b&&(a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y)<(W.j.V?18:10)},HQ:function(a){var b,c=this;this.Ba.sort(function(a,b){return a.get("zIndex")>b.get("zIndex")?-1:1});this.qk.Uz(a,this.Ba,function(a){b=a;b=c.C1(b)},function(){b=[]});return b}});W.ad.Zb({JR:function(){this.e("moveend",this.pL,this);W.j.xg&&(W.j.qC||W.j.Xy)&&this.e("zoomend",this.AC,this);this.e("movestart",this.qL,this);this.e("zoomstart",this.wL,this);this.e("zoomend",this.vL,this);this.ow();this.Xk=0;this.ls={};"undefined"===typeof window.requestAnimationFrame&&(this.Xk=2)},wL:function(){2!==this.Xk&&12===this.get("zoom")&&(this.Xk=1,W.g.qq.start(this.ls));this.wg=!0},vL:function(){1===this.Xk&&13!==this.get("zoom")&&(this.Xk=0,W.g.qq.cancel(this.ls));this.wg=!1;this.set("display")}, xS:function(){this.F("moveend",this.pL,this);W.j.xg&&(W.j.qC||W.j.Xy)&&this.F("zoomend",this.AC,this);this.F("movestart",this.qL,this);this.F("zoomstart",this.wL,this);this.F("zoomend",this.vL,this);this.zS()},pL:function(a){this.Ug=!1;this.lM();!a.zK&&this.get("limitBounds")?(a=this.zW())&&!a.Kb(this.get("center"))?this.iv(this.get("zoom"),a,!1,!0):this.la("moveend"):this.la("moveend");this.set("display")},qL:function(){this.Ug=!0},dragEnableChanged:function(){(this.Pt=this.get("dragEnable"))?this.nw(): this.Px()},la:function(a,b){var c;b&&(c=b.eL?{type:a,newsize:b.eL,oldsize:b.o_}:{type:a,pixel:b.Vb,target:this.na,lnglat:b.Ke});this.na.w(a,c)},ow:function(){this.e("click",this.$F);this.e("dblclick",this.bG);W.j.ud&&this.jP();W.j.V||this.fP()},zS:function(){this.F("click",this.$F);this.F("dblclick",this.bG);W.j.ud&&this.DS();W.j.V||this.AS()},Ks:function(a,b){var c=this.getTargetLevel(),c=0<b?Math.floor(c)+1:Math.ceil(c)-1,c=Math.min(Math.max(c,this.get("zooms")[0]),this.get("zooms")[1]);c===this.get("zoom")|| this.Zc&&this.Zc.zk&&c===this.Zc.end||this.Dr(c,!1,a)},$F:function(a){this.la("click",a)},bG:function(a){this.get("doubleClickZoom")&&this.get("zoomEnable")&&this.Ks(a.wk,1);this.la("dblclick",a)},R3:function(a){this.Ks(a.W6,a.X6);this.la("touchend",a)},nw:function(){this.Pt&&(this.e("dragstart",this.eG),this.e("dragging",this.cG),this.e("dragend",this.dG))},Px:function(){this.Pt||(this.F("dragstart",this.eG),this.F("dragging",this.cG),this.F("dragend",this.dG))},eG:function(a){this.OK(a);this.Og= !0;this.R.OI=a.Vb.x;this.R.QI=a.Vb.y;this.Td&&(this.Td.stop(),this.Rt(!0));this.la("dragstart");this.la("movestart");this.w("movestart",a);this.I1()},cG:function(a){var b=this.R,c=a.Vb.x-b.OI,d=a.Vb.y-b.QI;if(d||c){this.R.Ug=!0;b.OI=a.Vb.x;b.QI=a.Vb.y;a=c;var b=d,f=this.bv?this.rotation:0;f&&(f*=Math.PI/180,a=c*Math.cos(f)+Math.sin(f)*d,b=-Math.sin(f)*c+Math.cos(f)*d);a=this.get("centerCoords").Qa((new W.L(a,b)).Gc(this.O));(b=this.pI(a))&&(d=Math.round(this.Yj(b).Qa(this.Yj(a)).y));this.lj(this.$a.Sj, c,d);a.x=(a.x+W.g.Za)%W.g.Za;this.set("centerCoords",a,!0);this.set("center",this.df(a),!0);this.Mq&&(this.Sh?(a=new Date,this.Yk=100<a-this.Sh?new W.L(0,0):new W.L(c,d),this.Sh=a):this.Sh=new Date);this.la("dragging");this.la("mapmove")}else this.R.Ug=!1,this.Yk=null},lj:function(a,b,c){if(a&&!(1>Math.abs(b)&&1>Math.abs(c))){var d=parseFloat(a.style.top)||0,f=parseFloat(a.style.left)||0,g="";this.get("rotation")&&(g=W.f.Fk[W.f.Ld]+":rotate("+this.rotation+"deg);overflow:visible;");a.style.cssText= "position:absolute;top:"+(d+c)+"px;left:"+(f+b)+"px;"+g}},pI:function(a){var b=this.tD(),c=this.bC.height*this.O/2;return a.y<b.gd+c?(a.y=b.gd+c,a):a.y>b.pd-c?(a.y=b.pd-c,a):null},dG:function(){this.oN();100<new Date-this.Sh&&(this.Yk=null);this.R.If=null;this.Og=!1;this.la("dragend");if(this.Mq&&this.Yk)if(this.R.Ug){var a=this.Yk,b=new W.L(0,0);this.Td=new W.Gh(a,b,function(a,b,f){return 600<=f?b:a.Gc(1-Math.pow(f/600,2)).floor()},1);this.Td.fo=function(a){if(2>Math.abs(a.x)&&2>Math.abs(a.y))this.Td.stop(), this.w("moveend"),this.Rt(),this.Yk=this.Sh=null;else{var b=a.x,f=a.y,g=this.bv?this.rotation:0;g&&(g*=Math.PI/180,b=a.x*Math.cos(g)+Math.sin(g)*a.y,f=-Math.sin(g)*a.x+Math.cos(g)*a.y);b=this.get("centerCoords").Qa((new W.L(b,f)).Gc(this.O));f=this.pI(b);g=a.y;f&&(g=Math.round(this.Yj(f).Qa(this.Yj(b)).y));this.lj(this.$a.Sj,a.x,g);b.x=(b.x+W.g.Za)%W.g.Za;this.set("centerCoords",b,!0);this.set("center",this.df(b),!0);this.la("mapmove")}};this.Td.yk(this)}else this.w("moveend"),this.Rt(!0),this.Yk= this.Sh=null;else this.w("moveend"),this.Rt(),this.Yk=this.Sh=null},I1:function(){if(!this.R.refresh){var a=this;this.R.refresh=setInterval(function(){a.set("display",0)},W.j.V?400:100)}},AC:function(){if(W.j.xg&&(W.j.qC||W.j.Xy)){for(var a=this.$a.T.childNodes,b=0;b<a.length;b+=1){var c=a[b];c instanceof HTMLCanvasElement&&(c.width=0);"amap-e"===c.className&&(c.style.height="0")}for(b=0;b<this.Ba.length;b+=1)c=this.Ba[b],"undefined"!==typeof AMap.IndoorMap&&c instanceof AMap.IndoorMap&&(c.ll&&(c.ll.width= 0),c.pn&&(c.pn.width=0))}},Rt:function(a){this.R.refresh&&(clearInterval(this.R.refresh),this.R.refresh=null);a||(this.AC(),this.set("display",0))},lM:function(a){this.set("refresh",a)}});W.ad.Zb({setZoomSlow:function(a){this.iv(a,null,!this.get("animateEnable"))},setPanTo:function(a){this.iv(null,a,!this.get("animateEnable"))},zoomAndCenterChanged:function(a){var b=a[0];b<this.get("zooms")[0]&&(b=this.get("zooms")[0]);b>this.get("zooms")[1]&&(b=this.get("zooms")[1]);this.iv(b,a[1],a[2]||!this.get("animateEnable"))},zoomChanged:function(){this.O=this.get("resolution");this.w("closeOverlays");this.set("display",0)},rotationChanged:function(){this.rotation=this.get("rotation");this.set("display", 0)},centerCoordsChanged:function(){this.w("closeOverlays");this.set("display",0)}});W.ad.Fv=W.W.extend({D:function(a){this.xc=a;this.jl=["zooms","visible","opacity","zIndex"];this.up=!1;this.MP=this.lP();this.xc.e("zoomend",this.ty,this);this.xc.e("moveend",this.ty,this);this.ty()},lP:function(){for(var a=[[69,2],[72,14],[89,4],[96,4],[193,2],[196,14],[213,4],[220,4],[317,2],[320,14],[337,4],[344,4],[441,1],[444,14],[461,4],[468,4],[565,1],[568,14],[585,4],[592,4],[689,1],[692,14],[709,4],[716,4],[813,1],[816,14],[833,4],[840,4],[940,14],[957,4],[964,4],[1064,15],[1081,4],[1088, 4],[1188,16],[1205,4],[1212,4],[1312,21],[1336,4],[1436,21],[1460,4],[1560,21],[1584,4],[1684,21],[1708,4],[1808,21],[1832,4],[1932,21],[1956,4],[2056,21],[2080,4],[2180,21],[2204,4],[2304,21],[2328,4],[2428,21],[2452,4],[2552,22],[2576,4],[2676,22],[2700,4],[2800,22],[2824,4],[2924,22],[2948,4],[3048,22],[3072,4],[3172,22],[3196,4],[3295,23],[3320,4],[3418,24],[3444,4],[3541,26],[3568,4],[3664,27],[3692,4],[3788,27],[3816,4],[3912,32],[4036,32],[4160,32],[4285,31],[4394,4],[4409,31],[4517,5],[4531, 33],[4640,9],[4655,33],[4764,12],[4777,35],[4887,50],[5009,1],[5011,50],[5133,53],[5257,53],[5381,60],[5506,59],[5631,58],[5742,4],[5755,58],[5859,2],[5865,6],[5879,58],[5977,8],[5987,10],[5999,2],[6002,59],[6100,78],[6222,80],[6344,82],[6464,1],[6466,84],[6586,88],[6708,90],[6831,91],[6955,91],[7078,92],[7202,92],[7327,91],[7451,91],[7575,91],[7698,92],[7820,94],[7942,96],[8065,97],[8187,99],[8310,100],[8435,99],[8558,100],[8681,101],[8805,101],[8929,102],[9053,104],[9179,3],[9183,100],[9307,104], [9435,101],[9561,48],[9613,49],[9663,1],[9686,44],[9745,44],[9810,33],[9871,42],[9934,32],[9997,40],[10058,32],[10120,41],[10181,30],[10244,42],[10306,27],[10369,3],[10374,39],[10434,18],[10501,37],[10558,19],[10626,36],[10683,18],[10752,35],[10807,17],[10880,32],[10937,10],[10997,39],[11061,9],[11121,31],[11155,5],[11186,5],[11245,31],[11311,3],[11370,29],[11494,26],[11624,18],[11748,17],[11873,16],[11997,15],[12123,13],[12246,13],[12370,12],[12498,1],[12500,2]],b=[],c=0,d=a.length;c<d;c++)for(var f= a[c][0],g=f+a[c][1];f<g;f++)b[f]=1;return b},fS:function(a,b){var c=parseInt((a-73)/0.5),d=parseInt((b-3.5)/0.5);return 0>d||101<=d||0>c||124<=c?!1:1===this.MP[124*d+c]},VO:function(){var a=this.xc.na.getBounds();if(a){for(var a=[a.Ff(),a.zq(),a.xq(),a.oh(),a.hk()],b=0,c=a.length;b<c;b++)if(this.fS(a[b].BJ(),a[b].zJ()))return!0;return!1}},ty:function(){if(!this.ZG){var a=this;a.ZG=setTimeout(function(){a.ZG=null;a.eQ()},0)}},eQ:function(){var a=this.NQ();0<a.length&&10<=this.xc.get("zoom")&&!1=== this.VO()?this.WU(a):this.qR(a)},OP:function(a){if(a.Zs)for(var b=0,c=this.jl.length;b<c;b++)a.F(this.jl[b],a.Zs.Ix)},TU:function(a,b){this.OP(a);if(a.Zs=b)for(var c=0,d=this.jl.length;c<d;c++)a.e(this.jl[c],b.Ix)},jH:function(a,b){b&&(b.nS=a);for(var c=0,d=a.length;c<d;c++)this.TU(a[c],b)},NQ:function(){for(var a=this.xc.Ba,b=[],c=0,d=a.length;c<d;c++)a[c]!==this.We&&a[c].Pa instanceof Y&&a[c].Pa.EA()&&b.push(a[c]);return b},SU:function(a){var b=this;a.Ix=function(){a.QF||(a.QF=setTimeout(function(){a.QF= null;b.oS(a)},0))}},TP:function(a,b){for(var c=0,d=this.jl.length;c<d;c++)a.set(this.jl[c],b.get(this.jl[c]))},oS:function(a){var b=a.nS;if(b&&b.length)for(var c=0,d=b.length;c<d;c++){if(!(b[c]instanceof W.T.ng)){this.TP(a,b[c]);break}}else console.warn("No moni layers")},WU:function(a){if(!this.up){this.up=!0;this.We||(this.We=new W.T.Rf(new Y.Fv,this.xc),this.We.sk=!1,this.We.rp=!0,this.SU(this.We));var b=this.xc.Ba;0>b.indexOf(this.We)&&b.push(this.We);this.jH(a,this.We);this.We.Ix();this.VU(); this.xc.layersChanged();this.xc.na.w("googleTileVisibleChanged",{display:!0})}},px:function(){return this.up},qR:function(a){this.up&&(this.up=!1,this.jH(a,null),this.We&&(this.We.set("visible",!1),a=this.xc.Ba,W.g.bj(a,a.indexOf(this.We)),this.We.Ne(),this.We.Pa.F("complete",this.xc.Bj,this.xc),this.We=null),this.pR(),this.xc.layersChanged(),this.xc.na.w("googleTileVisibleChanged",{display:!1}))},JE:function(a,b,c){if(!a)return null;a=W.f.getElementsByClassName(b,c,a);return a.length?a[0]:null}, MQ:function(a){var b=this.xc.$a;if(b&&b.$h){var c=this.JE(b.$h,"google-copyright","span");!c&&a&&(c=W.f.create("span",b.$h,"google-copyright"),c.innerHTML=" - Data &copy; Google");return c}},xH:function(a){var b=this.MQ(a);b&&(b.style.display=a?"":"none");this.xc.$a&&(b=this.JE(this.xc.$a.$h,"amap-mcode","span"))&&(b.style.display=a?"none":"")},VU:function(){this.xH(!0)},pR:function(){this.xH(!1)}});W.ad.Zb({FR:function(){this.get("3rdpartyDataEnable")&&(this.YE=new W.ad.Fv(this))},px:function(){return this.YE&&this.YE.px()}});W.uO=W.W.extend({ta:[W.da,W.xd],D:function(a,b){this.view=a;this.map=b;this.P("zoom",a);this.P("rotation",a);this.P("size",b);this.P("resolution",a);this.P("crs",a);this.P("rotateEnable",b);a.P("centerCoords",this,!0);b.P("resolution",this);b.P("zoom",this);b.P("crs",this);b.P("resolution",this);b.P("centerCoords",this);b.P("rotation",this);b.P("center",this);this.P("center",a)},centerChanged:function(){this.set("centerCoords",this.map.Ub(this.get("center")))},centerCoordsChanged:function(){var a= this.map.tD(),b=this.get("centerCoords"),c=this.get("size").height*this.getResolution()/2;this.get("size");this.getResolution();this.get("center")instanceof W.Q?b.x=(b.x+4.00750166855784E7)%4.00750166855784E7:0>b.x?b.x=0:b.x>a.Xd&&(b.x=a.Xd);b.y<a.gd+c?b.y=a.gd+c:b.y>a.pd-c&&(b.y=a.pd-c)},zoomChanged:function(){},rotationChanged:function(){},getResolution:function(a){return this.get("crs").hi(a||this.get("zoom"))},WY:function(){return{zoom:this.get("zoom"),Zh:this.get("center"),Fa:this.get("centerCoords"), rotation:this.get("rotateEnable")&&parseInt(this.get("rotation"))||0,Yd:this.get("crs"),O:this.getResolution(),Hc:Math.round(this.get("zoom")),Bc:this.getResolution(Math.round(this.get("zoom")))}}}); ', true), _jsload_('anip', 'W.ad.Zb({Dr:function(a,b,c,d){function f(b){var d=this.Yj(c);this.set("zoom",b);var f=this.Yj(c).Qa(d),k=(this.bv?this.rotation:0)*Math.PI/180,d=f.x*Math.cos(k)+Math.sin(k)*f.y,f=-Math.sin(k)*f.x+Math.cos(k)*f.y;this.set("centerCoords",this.get("centerCoords").add((new W.L(d,f)).Gc(this.O)));d&&f&&this.la("mapmove");b===a&&Math.floor(a)===a&&(this.set("targetLevel",null),g&&(this.la("zoomchange"),this.la("zoomend")),h&&this.w("moveend"),this.w("zoomend"),this.Zc=null)}if(W.j.V||W.j.ed)b=!0;a=a||this.get("zoom"); a=Math.min(Math.max(a,this.get("zooms")[0]),this.get("zooms")[1]);var g=a!==this.get("zoom"),h=!!c;this.Td&&(this.Td.stop(),this.Td=null);c=c||this.get("centerCoords");var k;this.Xb&&this.Xb.zk&&(this.Xb.stop(),this.Xb.pA&&(d=!0),this.Xb.Dq&&(k=!0),this.Xb=null,this.set("targetLevel",null));this.Zc&&this.Zc.zk&&(this.Zc.stop(),d=!0,this.Zc.Dq&&(k=!0),this.Zc=null,this.set("targetLevel",null));g&&!d&&this.la("zoomstart");h&&!k&&this.la("movestart");this.w("zoomstart");b?f.call(this,a):(this.set("targetLevel", a),this.Zc=new W.Gh(this.get("zoom"),a,null,0.02),this.Zc.pA=g,this.Zc.Dq=h,this.Zc.transition=function(a,b,c){return c>=W.q.nt?b:(b-a)*(1-Math.pow(1-c/W.q.nt,4))+a},this.Zc.fo=f,this.Zc.yk(this))},iv:function(a,b,c,d){a||(a=this.Xb?this.Xb.P1:this.get("targetLevel")||this.get("zoom"));b||(b=this.Xb?this.Xb.YM:this.get("center"));var f=a!==this.get("zoom"),g=!b.Kb(this.get("center")),h=!1,k=!1;this.Zc&&this.Zc.zk&&(this.Zc.stop(),h=!0,this.Zc.Dq&&(k=!0),this.Zc=null,this.set("targetLevel",null)); this.Xb&&this.Xb.zk&&(this.Xb.stop(),this.Xb.pA&&(h=!0),this.Xb.Dq&&(k=!0),this.Xb=null,this.set("targetLevel",null));this.Td&&(this.Td.stop(),this.Td=null);if(f||g){if(!this.get("bounds").contains(b)||f&&(W.j.V||W.j.ed))c=!0;if(c)f&&(h||(this.w("zoomstart"),this.la("zoomstart")),this.set("zoom",a),this.la("zoomchange"),this.la("zoomend"),this.w("zoomend")),g&&(k||d||(this.la("movestart"),this.w("movestart")),this.set("center",b),this.la("mapmove"),this.w("moveend",{zK:d})),this.set("targetLevel", null);else{this.set("targetLevel",a);var l=a-this.get("zoom"),m=b.Qa(this.get("center"));this.Xb=new W.Gh(1,0,null,0.001);this.Xb.pA=f;this.Xb.Dq=g;this.Xb.YM=b;this.Xb.P1=a;this.Xb.transition=function(a,b,c){return Math.pow(1-Math.min(W.q.nt,c)/W.q.nt,2)};this.Xb.fo=function(c){if(0.02>c)this.Xb&&(this.Xb.stop(),this.Xb=null),f&&(this.set("zoom",a),this.la("zoomchange"),this.la("zoomend"),f=!1,this.w("zoomend")),g&&(c=b,this.set("center",c),this.w("mapmove"),this.w("moveend",{zK:d})),this.set("targetLevel", null);else if(f&&this.set("zoom",a-l*c),g){c=b.Qa(m.Gc(c));if(W.j.V){var h=this.mb(this.get("center")),k=this.mb(c);this.lj(this.$a.Sj,h.x-k.x,h.y-k.y);this.set("center",c,!0);this.set("centerCoords",this.Ub(c),!0)}else this.set("center",c);this.la("mapmove")}this.set("display",1)};this.Xb.yk(this);f&&!h&&(this.w("zoomstart"),this.la("zoomstart"));!g||k||d||(this.w("movestart"),this.la("movestart"))}}}}); ', true), _jsload_('layers', 'W.T={}; W.T.Pf=W.W.extend({ta:[W.da,W.xd],D:function(a,b){this.Pa=a;this.$c=[3,18];this.$v=W.g.zb(this);a&&this.Ad(["opacity","visible","zIndex","zooms"],a);this.l=b;this.P("display",b)},Ne:function(){this.qi&&this.lz();if(W.Aa&&W.Aa.Jk&&W.Aa.Jk.length){var a=W.g.indexOf(W.Aa.Jk,this);-1!==a&&(W.Aa.Jk=W.g.bj(W.Aa.Jk,a))}if(a=this.pb){if(a.length)for(var b=0;b<a.length;b+=1)a[b].parentNode&&a[b].parentNode.removeChild(a[b]);else a.parentNode&&a.parentNode.removeChild(a);this.pb=null}this.Pa.Ne&&this.Pa.Ne();this.Pa.eh= !1;this.Pa.T=null;this.sm();this.K&&(this.K.KI(),this.K=null)},la:function(a,b){this.Pa.w(a,b)},visibleChanged:function(){this.set("display",0)},zIndexChanged:function(){this.set("display",0)},YB:function(a){W.f.Ak(a,this.opacity)},opacityChanged:function(){var a=this.get("opacity");this.opacity=Math.min(Math.max(0,a),1);if(a=this.pb)if(a.length)for(var b=0;b<a.length;b+=1)this.YB(a[b]);else this.YB(a)},Yt:function(){var a=this.get("bounds");if(a){if(a instanceof W.vd){var b=a.oh(),c=a.hk(),d=this.l.Ub(new W.Q(180, 0)).x,f=this.l.Ub(b),g=this.l.Ub(c),h=this.l.get("center");b.J>c.J?0<h.J?g.x+=d:f.x-=d:0<h.J?(0>b.J&&(f.x+=d),0>c.J&&(g.x+=d)):(0<b.J&&(f.x-=d),0<c.J&&(g.x-=d));this.A=[f.x,f.y,g.x,g.y]}a instanceof W.ce&&(this.A=[a.eb.x,a.eb.y,a.ac.x,a.ac.y]);return this.A}return null}});function Tc(a,b,c){this.z=a;this.x=b;this.y=c}Tc.prototype.Sb=function(){return new Tc(this.z,this.x,this.y)};Tc.prototype.toString=function(){return[this.z,this.x,this.y].join("/")};W.Rf=function(a,b){this.Ga=a;this.key=a.toString();this.url=b};W.Hh=Tc;W.T.Rf=W.T.Pf.extend({D:function(a,b,c,d,f){arguments.callee.bb.apply(this,arguments);this.P("tileSize",a);this.P("tiles",a);this.Ad(["zooms","type","detectRetina","tileFun","errorUrl"],a);this.P("lang",b,!0);this.P("mapStyle",b,!0);this.P("style",b,!0);this.P("features",b,!0);var g="overlayer"===a.get("type");this.Mg=!g&&!W.j.V;if(W.j.ed||W.j.v7)this.Mg=!1;var h=b.get("size"),h=h.width*h.height/65536;this.oa=W.j.V&&W.j.oa&&this.get("detectRetina");W.j.Sc&&W.j.V&&9<h&&(this.Mg=!1);this.Mh=!g;this.Nh= !g;this.P("reload",a);this.W1=c;this.Kf=d;this.fZ=f},langChanged:function(){this.set("reload");this.Pa.hm()},mapStyleChanged:function(){this.set("reload");this.Pa.hm()},styleChanged:function(){this.l.Jc||(this.set("reload"),this.Pa.hm())},featuresChanged:function(){this.set("reload");this.Pa.hm()},reloadChanged:function(){this.set("display",0)},tileFunChanged:function(){this.set("reload")},ik:function(){return{hd:this.get("tileSize"),visible:this.get("visible"),A:this.Yt(),$c:this.get("zooms"),rt:this.Mg, Mh:this.Mh,Nh:this.Nh,opacity:this.get("opacity"),ii:this.W1||this.get("tileFun"),Sc:this.Pa.sk?!1:this.get("detectRetina")&&W.j.oa&&W.j.V}},ai:function(a){if(W.K.uc.Kg)return new W.K.uc.Kg(this,a)}});W.T.kd=W.T.Pf.extend({D:function(a,b){this.Bb=Math.min(2,window.devicePixelRatio||1);this.Sc=W.j.oa&&!a.pi;this.map=b;this.Ek=0;this.qh=!1;this.jg=this.rf=0;this.yh=[];arguments.callee.bb.apply(this,arguments);this.$l=[];this.Ef=new W.T.MC;a&&(this.P("style",a),this.P("cursor",a,!0),this.F1=a.get("stable")||!1,this.P("dataSources",a),this.P("bubble",a));this.P("display",b);this.bP()},ik:function(){return{visible:this.get("visible"),$c:this.get("zooms"),opacity:this.get("opacity"),zIndex:this.get("zIndex"), Zp:this.Pa.get("alwaysRender")||!1}},dataSourcesChanged:function(){var a=this.get("dataSources");a&&("string"===typeof a?(new W.qa.Ca(a)).e("complete",function(a){this.EL(a.data);this.Bl=a.data;this.qh=!0;this.set("display");this.cb=!0;this.Pa.w("complete")},this):a.length&&(this.EL(a),this.Bl=a,this.qh=!0,this.set("display"),this.cb=!0,this.Pa.w("complete")))},getDatas:function(){return this.Bl},s2:function(){if(this.Pa.pi){var a=this.Ch;this.rf=a.rf;this.jg=a.jg}},la:function(a,b){var c={type:a, data:"mouseout"===a?this.ZR||null:b.kl.Da,target:this.Pa};this.ZR="mouseout"===a?null:b.kl.Da;this.Pa.w(a,c)},S3:function(){},wb:function(a){this.la(a.type,a)},bP:function(){this.e("click",this.wb);this.e("dblclick",this.wb);this.e("mousedown",this.wb);this.e("mouseup",this.wb);this.e("mouseover",this.wb);this.e("mouseout",this.wb);this.e("touchstart",this.wb);this.e("touchend",this.wb)},b4:function(){this.F("click",this.wb);this.F("dblclick",this.wb);this.F("mousedown",this.wb);this.F("mouseup", this.wb);this.F("mouseover",this.wb);this.F("mouseout",this.wb);this.F("touchstart",this.wb);this.F("touchend",this.wb)},styleChanged:function(){this.Ch=this.get("style");this.s2();this.set("display",0)},EL:function(a){if(a){this.clear();for(var b=this.map.get("resolution",18),c=0;c<a.length;c+=1){var d=a[c].lnglat;a[c].lnglat=W.g.ia(d);d=this.map.Ub(d,18,b);d=new W.$d({name:"point-"+W.g.zb(this),za:new W.ca.xe([d.x,d.y],!0)});d.Lj=this;d.Da=a[c];this.lt(d)}}},EJ:function(a){if("geojson"===a)return new W.KN({map:this.map}); if("topjson"===a)return new W.q3({map:this.map});if("subway"===a)return new W.n3({map:this.map})},V_:function(a){if(a){var b=[],b=[],c={};if(a.rules){for(var b=a.rules,d=0,f=b.length;d<f;d+=1){for(var g=[],h=b[d].symbolizers,k=0,l=h.length;k<l;k+=1)h[k].fill&&(g[k]=new W.style.zd.NC(h[k].fill)),h[k].stroke&&(g[k]=new W.style.zd.hD(h[k].stroke));h=g;b[d].ov=h;b[d]=new W.style.fO(b[d])}c.rules=b}if(a.symbolizers){b=a.symbolizers;a=0;for(d=b.length;a<d;a+=1)b[a].fill&&(b[a]=new W.style.zd.NC(b[a].fill)), b[a].stroke&&(b[a]=new W.style.zd.hD(b[a].stroke));c.ov=b}a=new W.Sv(c)}else a=new W.Sv({});this.set("style",a);return a},a4:function(a,b){if(-1===W.g.indexOf(a,W.q.rb)){var c=new W.qa.Ca(a);c.e("complete",function(c){c=this.va[a]=this.EJ(b).Nu(c);this.ol(c);this.la("complete")},this);c.e("error",this.ab,this)}else(new W.qa.XMLHttpRequest(a)).e("complete",function(c){c=eval("("+c.data+")");c=this.va[a]=this.EJ(b).Nu(c);this.ol(c)},this)},h0:function(a){a.qj>this.jj&&(this.jj=a.qj)},lt:function(a){this.Ef.add(a); if(!this.Ot&&!this.Pa.pi){0===a.name.indexOf("circle")&&(a.e("rad",this.h0,this),this.jj||(this.jj=a.get("radius")),a.qj>this.jj&&(this.jj=a.get("radius")));var b=a.get("strokeWeight")||0;if(!this.bo||b>this.bo)this.bo=b}this.F1||a.P("feature",this,!0)},ol:function(a){this.qh=!0;for(var b=0,c=a.length;b<c;b+=1)this.lt(a[b])},clear:function(){this.qh=!0;this.Ef.clear()},nh:function(a){var b;return 0>a[0]?(b=[a[0]+W.g.Za,a[1],W.g.Za,a[3]],a=[0,a[1],a[2],a[3]],b=this.Ef.nh(b),a=this.Ef.nh(a),W.extend(b, a)):a[2]>W.g.Za?(b=[a[0],a[1],W.g.Za,a[3]],a=[0,a[1],a[2]-W.g.Za,a[3]],b=this.Ef.nh(b),a=this.Ef.nh(a),W.extend(b,a)):this.Ef.nh(a)},j5:function(a){var b,c=this.get("style"),d=a.lg;c instanceof W.Sv||(c=this.V_(c));if(d&&0<d.length)b=c.CI(d,a);else{if(c.qM.length||c.lg.length)b=c.fX(a);b||(b=a.vY())}return b},SJ:function(a){function b(a,b){return a.Ln-b.Ln}var c=[],d,f,g,h,k,l={};for(d in a)if(a.hasOwnProperty(d)){g=a[d];h=g.get("zIndex");for(f in l)if(l.hasOwnProperty(f)&&(k=c[l[f]][2],k===h))break; "undefined"===typeof l[h]&&(c.push([[],[],h]),l[h]=c.length-1);h=c[l[h]];h[0].push(g)}c.sort(this.B1);a=0;for(d=c.length;a<d;a+=1)c[a][0].sort(b);return c},featureChanged:function(a){this.qh=!0;var b=a.target,c=b.za;0!==this.Ef.AY([W.g.zb(b)]).length&&(this.Ef.remove(b,a.am),c&&!a.sX&&this.Ef.add(b))},WL:function(a){this.qh=!0;for(var b,c=0,d=a.length;c<d;c+=1)b=a[c],b.za.am=null,b.ck(!0),b.zi("feature")},P6:function(a,b){return a[1].zIndex===b[1].zIndex?W.g.zb(a[1])-W.g.zb(b[1]):a[1].zIndex-b[1].zIndex}, B1:function(a,b){return a[2]-b[2]},H6:function(a){return a.n5()===W.T.v3.l3},ai:function(a){return this.Ot?new W.K.fd.Qk(this,a):"c"==this.map.get("overlayRender")&&W.K.canvas.Qk?new W.K.canvas.Qk(this,a):W.K.uc.Qk&&"d"==this.map.get("overlayRender")?new W.K.uc.Qk(this,a):null}});W.T.MC=W.W.extend({D:function(){this.clear()},clear:function(){this.Ql=[];this.HB=new W.Qf},add:function(a){var b=W.g.zb(a),c=a.za;this.Ql[b]||(this.count+=1,this.Ql[b]=a,c&&!W.A.Kb(c.mc(),[Infinity,Infinity,-Infinity,-Infinity])&&this.HB.hu(c.mc(),a))},d5:function(){return this.Ql},nh:function(a){return this.HB.Y0(a)},AY:function(a){var b=a.length,c=[],d;for(d=0;d<b;d+=1)this.Ql[a[d]]&&c.push(this.Ql[a[d]]);return c},remove:function(a,b){var c=W.g.zb(a).toString(),d=a.za;this.Ql[c]&&(this.Ql[c]= null,d&&(c="undefined"!==typeof b?b:d.mc(),this.HB.remove(c,a)))}});function Uc(a,b,c){this.url=a;this.sc=b;this.lJ=c;this.Yi=this.QB=!1}function Vc(a,b,c){var d=Wc;return function(){return d.call(this,a,b,c)}}function Wc(a,b,c){a.Q4=+new Date;a.loaded=b;clearTimeout(a.Y1);var d=a.MZ;d.nj.remove(a.url)&&d.$R();d=a.vZ?a.va:a.wa;a.va=null;(c||b||a.lJ)&&a.sc(b?d:null,a);a.CK?(a.CK.Zi(),a.CK=null):d&&(d.onload=null,d.onerror=null,d.onabort=null,a.wa=null)} W.TC=W.W.extend({z3:"assets/image/blank.gif",D:function(a,b,c){this.timeout=b||15E3;this.fm=new W.wd(1024);this.nj=new W.wd(1024);this.yI=a;this.XI=c},SD:function(a){a&&this.nj.count>=this.yI&&(a=this.nj.Ab.Ma.value,a.Yi&&(this.nj.remove(a.url),this.zD(a)));for(;this.fm.count&&!(this.nj.count>=this.yI);)this.fQ(this.fm.shift())},$R:function(){if(!this.UD){this.UD=!0;var a=this;setTimeout(function(){a.UD=!1;a.SD()},0)}},fQ:function(a){var b=document.createElement("img");b.src=a.url;a.wa=b;a.MZ=this; a.startTime=+new Date;a.QB=!0;b.complete?Wc(a,!0):(this.nj.set(a.url,a),b.onload=Vc(a,!0),b.onerror=Vc(a,!1,!0),b.onabort=Vc(a,!1),a.Y1=setTimeout(Vc(a,!1,!0),this.timeout))},zD:function(a){a.QB&&(Wc(a,!1),a.Yi=!0,a.f4=!0)},S5:function(a,b,c){return this.KK(a.url,b,c,!0,a.Ga.z+"_"+a.Ga.x+"_"+a.Ga.y)},KK:function(a,b,c,d,f){var g=this.nj.get(a);if(g&&g.Yi)g.Yi=!1,g.sc=b,g.lJ=c;else{g=new Uc(a,b,c);g.vZ=d;g.key=f;if(this.fm.get(W.g.zb(g)))return;this.fm.set(W.g.zb(g),g);this.SD(!0)}return g},rW:function(a){a.Yi|| (a.Yi=!0,this.fm.remove(W.g.zb(a)))},clear:function(a){this.fm.forEach(function(a){a.Yi=!0});this.fm.clear();if(a)for(;a=this.nj.pop();)this.zD(a);else this.nj.forEach(function(a){a.Yi=!0})}});var Xc=function(){function a(a){this.Wv[W.g.zb(a)]=a;return this}function b(a){this.Wv[W.g.zb(a)]=null;return this}return function(){function c(){var a=c.Wv,b,g=[],h;for(h in a)Object.prototype.hasOwnProperty.call(a,h)&&g.push(a[h]);for(a=g.length-1;0<=a;a-=1)h=g[a].apply(this,arguments),void 0!==h&&(b=h);return b}c.Wv={};c.yV=a;c.v6=b;return c}}(); W.wd=W.W.extend({ta:[W.da],D:function(a,b){this.Cj=a|0;this.Ur=!!b;this.count=0;this.lL=Xc();this.clear();this.Cs=[]},Pq:function(){return!this.count},G5:function(){return this.count>=this.Cj},L6:function(a){this.Cj!==a&&(this.Cj=a|0)&&this.BH(this.Cj)},Ac:function(a){return!!this.l[a]},get:function(a,b){var c=this.xE(a);return c?c.value:b},set:function(a,b){var c=this.xE(a);c?c.value=b:(c=new W.wd.Ok(a,b),this.l[a]=c,this.kF(c),this.count+=1)},um:function(a){this.remove(a)},remove:function(a){return Object.prototype.hasOwnProperty.call(this.l, a)?(this.Hp(this.l[a]),!0):!1},forEach:function(a,b){for(var c=this.Ab.next;c!==this.Ab;c=c.next)a.call(b,c.value,c.key,this)},io:function(a,b){return Object.prototype.hasOwnProperty.call(this.l,a)?this.l[a].value:b},n6:function(){return this.Ab.next.value},o6:function(){return this.Ab.Ma.value},shift:function(){return this.FG(this.Ab.next)},KW:function(){this.Cs.length=0},PZ:function(a){this.Cs.push(a)},push:function(a){a=new W.wd.Ok("",a);0===this.count?(this.Ab.Ma=null,a.Ma=this.Ab,this.Ab.next= a):(this.Qp.next=a,a.Ma=this.Qp);this.count+=1;this.Qp=a},zv:function(a){a=new W.wd.Ok("",a);0===this.count?(this.Ab.Ma=null,a.Ma=this.Ab,this.Qp=this.Ab.next=a):(this.Ab.next.Ma=a,a.next=this.Ab.next,a.Ma=this.Ab,this.Ab.next=a);this.count+=1},j_:function(){if(this.count){this.count-=1;var a=this.Ab.next;a.next?(a.next.Ma=this.Ab,this.Ab.next=a.next):(this.Ab.next=null,this.Qp=this.Ab.Ma=null);a.next=null;a.Ma=null;return a.value}return null},pop:function(){return this.FG(this.Ab.Ma)},xE:function(a){if(Object.prototype.hasOwnProperty.call(this.l, a))return a=this.l[a],this.Ur&&(a.remove(),this.kF(a)),a},kF:function(a){this.Ur?(a.next=this.Ab.next,a.Ma=this.Ab,this.Ab.next=a,a.next.Ma=a):(a.Ma=this.Ab.Ma,a.next=this.Ab,this.Ab.Ma=a,a.Ma.next=a);this.Cj&&this.KU(this.Cj)},KU:function(){var a=this;a.Rp||(a.Rp=setTimeout(function(){a.Rp=null;a.BH(a.Cj)},0))},BH:function(a){this.Rp&&(clearTimeout(this.Rp),this.Rp=null);for(var b=this.Ur?this.Ab.Ma:this.Ab.next,c={},d=0,f=this.Cs.length;d<f;d++)c[this.Cs[d]]=!0;for(;b&&this.count>a&&(d=this.Ur? b.Ma:b.next,b.key&&!c[b.key]&&(this.Hp(b),this.lL(b.value)),b=d,b!==this.Ab&&b!==this.Qp););},Hp:function(a){a.remove();delete this.l[a.key];this.count-=1},FG:function(a){this.Ab!==a&&this.Hp(a);return a.value},clear:function(){this.l={};this.Ab=new W.wd.Ok("",null);this.Ab.Ma=this.Ab.next=this.Ab;this.count=0}});W.wd.Ok=function(a,b){this.key=a;this.value=b};W.wd.Ok.prototype.Ma=null;W.wd.Ok.prototype.next=null; W.wd.Ok.prototype.remove=function(){this.Ma.next=this.next;this.next.Ma=this.Ma;this.next=this.Ma=null};W.Qf=W.W.extend({D:function(a){this.UK="undefined"!==typeof a?a:6;this.wu=Math.floor(this.UK/2);this.av={A:[Infinity,Infinity,-Infinity,-Infinity],Ha:[]};this.count=0},EW:function(a,b){var c=-1,d=[],f;d.push(b);var g=b.Ha;do{-1!==c&&(d.push(g[c]),g=g[c].Ha,c=-1);for(var h=g.length-1;0<=h;h-=1){var k=g[h];if("undefined"!==typeof k.Vl){c=-1;break}var l=W.Qf.vo(k.A[2]-k.A[0],k.A[3]-k.A[1],k.Ha.length+1),k=W.Qf.vo((k.A[2]>a.A[2]?k.A[2]:a.A[2])-(k.A[0]<a.A[0]?k.A[0]:a.A[0]),(k.A[3]>a.A[3]?k.A[3]:a.A[3])- (k.A[1]<a.A[1]?k.A[1]:a.A[1]),k.Ha.length+2);if(0>c||Math.abs(k-l)<f)f=Math.abs(k-l),c=h}}while(-1!==c);return d},hu:function(a,b,c){a={A:a,Vl:b};"undefined"!==typeof c&&(a.type=c);this.nK(a,this.av);this.count+=1},nK:function(a,b){var c;if(0===b.Ha.length)b.A=W.A.Sb(a.A),b.Ha.push(a);else{var d=this.EW(a,b),f=a;do{if(c&&"undefined"!==typeof c.Ha&&0===c.Ha.length){var g=c;c=d.pop();for(var h=0,k=c.Ha.length;h<k;h+=1)if(c.Ha[h]===g||0===c.Ha[h].Ha.length){c.Ha.splice(h,1);break}}else c=d.pop();g=f instanceof Array;if("undefined"!==typeof f.Vl||"undefined"!==typeof f.Ha||g){if(g){g=0;for(h=f.length;g<h;g+=1)W.A.extend(c.A,f[g].A);c.Ha=c.Ha.concat(f)}else W.A.extend(c.A,f.A),c.Ha.push(f);c.Ha.length<=this.UK?f={A:W.A.Sb(c.A)}:(f=g=this.GZ(c.Ha),1>d.length&&(c.Ha.push(g[0]),d.push(c),f=g[1]))}else W.A.extend(c.A,f.A),f={A:W.A.Sb(c.A)}}while(0<d.length)}},GZ:function(a){for(var b=this.Y_(a);0<a.length;)this.Z_(a,b[0],b[1]);return b},Y_:function(a){for(var b=a.length-1,c=0,d=a.length-1,f=0,g=a.length-2;0<= g;g-=1){var h=a[g];h.A[0]>a[c].A[0]?c=g:h.A[2]<a[b].A[1]&&(b=g);h.A[1]>a[f].A[1]?f=g:h.A[3]<a[d].A[3]&&(d=g)}Math.abs(a[b].A[2]-a[c].A[0])>Math.abs(a[d].A[3]-a[f].A[1])?b>c?(b=a.splice(b,1)[0],c=a.splice(c,1)[0]):(c=a.splice(c,1)[0],b=a.splice(b,1)[0]):d>f?(b=a.splice(d,1)[0],c=a.splice(f,1)[0]):(c=a.splice(f,1)[0],b=a.splice(d,1)[0]);return[{A:W.A.Sb(b.A),Ha:[b]},{A:W.A.Sb(c.A),Ha:[c]}]},Z_:function(a,b,c){for(var d=W.Qf.vo(b.A[2]-b.A[0],b.A[3]-b.A[1],b.Ha.length+1),f=W.Qf.vo(c.A[2]-c.A[0],c.A[3]- c.A[1],c.Ha.length+1),g,h,k,l=a.length-1;0<=l;l-=1){var m=a[l],n=[b.A[0]<m.A[0]?b.A[0]:m.A[0],b.A[2]>m.A[2]?b.A[2]:m.A[2],b.A[1]<m.A[1]?b.A[1]:m.A[1],b.A[3]>m.A[3]?b.A[3]:m.A[3]],n=Math.abs(W.Qf.vo(n[1]-n[0],n[3]-n[2],b.Ha.length+2)-d),m=[c.A[0]<m.A[0]?c.A[0]:m.A[0],c.A[2]>m.A[2]?c.A[2]:m.A[2],c.A[1]<m.A[1]?c.A[1]:m.A[1],c.A[3]>m.A[3]?c.A[3]:m.A[3]],m=Math.abs(W.Qf.vo(m[1]-m[0],m[3]-m[2],c.Ha.length+2)-f),p=Math.abs(m-n);if(!h||!g||p<g)h=l,g=p,k=m<n?c:b}d=a.splice(h,1)[0];b.Ha.length+a.length+1<= this.wu?(b.Ha.push(d),W.A.extend(b.A,d.A)):c.Ha.length+a.length+1<=this.wu?(c.Ha.push(d),W.A.extend(c.A,d.A)):(k.Ha.push(d),W.A.extend(k.A,d.A))},remove:function(a,b){var c=[];c[0]={A:a};(c[1]=b)||(c[1]=!1);c[2]=this.av;this.count-=1;if(!1===c[1]){var d=0,f=[];do d=f.length,f=f.concat(this.ZL.apply(this,c));while(d!==f.length);return f}return this.ZL.apply(this,c)},ZL:function(a,b,c){var d=[],f=[],g=[];if(!a||!W.A.Ud(a.A,c.A))return g;a=W.A.Sb(a.A);var h;f.push(c.Ha.length);d.push(c);do{c=d.pop(); var k=f.pop()-1;if("undefined"!==typeof b)for(;0<=k;){var l=c.Ha[k];if(W.A.Ud(a,l.A))if(b&&"undefined"!==typeof l.Vl&&l.Vl===b||!b&&("undefined"!==typeof l.Vl||W.A.zI(a,l.A))){"undefined"!==typeof l.Ha?(g=this.so(l,!0,[],l),c.Ha.splice(k,1)):g=c.Ha.splice(k,1);W.Qf.JB(c);b=void 0;c.Ha.length<this.wu&&(h=this.so(c,!0,[],c));break}else"undefined"!==typeof l.Ha&&(f.push(k),d.push(c),c=l,k=l.Ha.length);k-=1}else if("undefined"!==typeof h){c.Ha.splice(k+1,1);0<c.Ha.length&&W.Qf.JB(c);k=0;for(l=h.length;k< l;k+=1)this.nK(h[k],c);h.length=0;0===d.length&&1>=c.Ha.length?(h=this.so(c,!0,h,c),c.Ha.length=0,d.push(c),f.push(1)):0<d.length&&c.Ha.length<this.wu?(h=this.so(c,!0,h,c),c.Ha.length=0):h=void 0}else W.Qf.JB(c)}while(0<d.length);return g},search:function(a,b){return this.so({A:a},!1,[],this.av,b)},Y0:function(a,b){return this.so({A:a},!1,[],this.av,b,!0)},so:function(a,b,c,d,f,g){var h={},k=[];if(!W.A.Ud(a.A,d.A))return c;k.push(d.Ha);do{d=k.pop();for(var l=d.length-1;0<=l;l-=1){var m=d[l];if(W.A.Ud(a.A, m.A))if("undefined"!==typeof m.Ha)k.push(m.Ha);else if("undefined"!==typeof m.Vl)if(b)c.push(m);else if("undefined"===typeof f||m.type===f)m=m.Vl,"undefined"!==typeof g?h[W.g.zb(m)]=m:c.push(m)}}while(0<k.length);return"undefined"!==typeof g?h:c}});W.Qf.JB=function(a){var b=a.Ha.length,c=a.A;if(0===b)W.A.empty(c);else{var d=a.Ha[0].A;c[0]=d[0];c[2]=d[2];c[1]=d[1];c[3]=d[3];for(d=1;d<b;d+=1)W.A.extend(c,a.Ha[d].A)}};W.Qf.vo=function(a,b,c){var d=(a+b)/2;a*=b;return a*c/(a/(d*d))}; ', true), _jsload_('overlay0', 'W.Ia=W.Ia||{}; W.Ia.vj=W.W.extend({ta:[W.da,W.xd],J_:["position","visible","clickable","bubble"],D:function(a,b){this.map=b;this.Ad(this.J_,a);this.P("zIndex",a);this.P("draggable",a);W.j.ud&&this.iP();W.j.V||this.ow();this.cc=a;this.cc.Ia=this},draggableChanged:function(){this.get("draggable")?this.nw():this.Px()},la:function(a,b){var c;c=b?{type:a,pixel:b.Vb,target:this.cc,lnglat:b.Ke}:{type:a};this.cc&&this.cc.w(a,c)},wb:function(a){("click"!==a.type&&"rightclick"!==a.type&&"dblclick"!==a.type||this.get("clickable"))&& this.la(a.type,a)},mw:function(){this.e("click",this.wb);this.e("rightclick",this.wb);this.e("dblclick",this.wb)},DH:function(){this.F("click",this.wb);this.F("rightclick",this.wb);this.F("dblclick",this.wb)},ow:function(){this.get("clickable")&&this.mw();this.e("mousemove",this.wb);this.e("mouseout",this.wb);this.e("mouseover",this.wb);this.e("mousedown",this.wb);this.e("mouseup",this.wb)},d4:function(){this.DH();this.F("mousemove",this.wb);this.F("mouseout",this.wb);this.F("mouseover",this.wb); this.F("mousedown",this.wb);this.F("mouseup",this.wb)},clickableChanged:function(){this.get("clickable")?this.mw():this.DH()},iP:function(){this.get("clickable")&&this.mw();this.e("touchstart",this.wb,this);this.e("touchmove",this.wb,this);this.e("touchend",this.wb,this)},nw:function(){this.e("dragstart",this.el);this.e("dragging",this.cl);this.e("dragend",this.dl)},el:function(a){this.map.OK(a);this.If=a.Vb;this.la("dragstart",a)},cl:function(a){var b=a.Vb.Qa(this.If),c=b.x,b=b.y;this.If=a.Vb;var d= this.map.get("rotation")*Math.PI/180;this.lj(new W.L(c*Math.cos(d)+Math.sin(d)*b,-Math.sin(d)*c+Math.cos(d)*b));this.la("dragging",a)},dl:function(a){this.map.oN();this.la("dragend",a)},Px:function(){this.F("dragstart",this.el);this.F("dragging",this.cl);this.F("dragend",this.dl)},HE:function(a){var b,c,d=[];b=0;for(c=a.length;b<c;b+=1)d.push(this.Vw(a[b]));return d},Vw:function(a){a=this.map.Ub(a);return[a.x,a.y]},Nb:function(a){var b=this.I.Ua||this.map.get("centerCoords"),c=this.map.get("crs").hi(Math.floor(this.map.get("zoom"))); return[(a[0]-b.x)/c,(a[1]-b.y)/c]}});W.Ia.be=W.Ia.vj.extend({yB:"content contentDom icon opacity angle autoRotation offset shadow title label isTop shape topWhenClick topWhenMouseOver noSelect".split(" "),D:function(a,b){arguments.callee.bb.apply(this,arguments);this.Ad(this.yB,a);this.P("move",a);this.jW();this.sl();this.set("AnimationOffset",new W.L(0,0));this.P("raiseOnDrag",a);this.LV={AMAP_ANIMATION_NONE:!1,AMAP_ANIMATION_DROP:W.Gh.Easing.Bounce,AMAP_ANIMATION_BOUNCE:W.Gh.Easing.Cubic};this.P("animation",a)},lx:function(a,b,c){if(this.get("animation")&& "AMAP_ANIMATION_NONE"!==this.get("animation")){var d=this;this.vh=new W.Gh;this.vh.transition=function(c,g,h){if(a&&600<=h)return d.vh.stop(),0;c=0===Math.floor(h/600)%2?"Out":"In";"out"===b?c="Out":"in"===b&&(c="In");return d.LV[d.get("animation")][c](h%600/600)};c=c||40;this.vh.fo=function(a){d.set("AnimationOffset",d.Rx.add(new W.L(0,-1*c*a)))};this.Rx=new W.L(0,0);this.vh.yk()}},AnimationOffsetChanged:function(){this.positionChanged()},OG:function(){this.vh&&(this.vh.stop(),this.set("AnimationOffset", this.Rx));this.set("AnimationOffset",new W.L(0,-40));if(this.Ho)this.Ho.set("position",this.get("position"));else{var a=new Z({zIndex:this.get("zIndex")-1,icon:new Oc({image:W.q.rb+"/theme/v1.3/dragCross.png",size:new W.bc(14,11)}),offset:new W.L(-4,-5),position:this.get("position")});a.fa=!0;this.Ho=a}this.Ho.setMap(this.map.na)},oE:function(){this.set("animation","AMAP_ANIMATION_DROP",!0);this.lx(!0,"in");this.Ho.setMap(null)},animationChanged:function(){this.vh&&(this.vh.stop(),this.set("AnimationOffset", this.Rx),this.vh=null);var a=this.get("animation");a&&"AMAP_ANIMATION_NONE"!==a&&("AMAP_ANIMATION_DROP"===a?this.lx(!0,"in",100):this.lx())},Og:function(){this.Ho&&this.Ho.set("position",this.get("position"))},raiseOnDragChanged:function(){this.get("raiseOnDrag")?(this.e("dragstart",this.OG,this),this.e("dragging",this.Og,this),this.e("dragend",this.oE,this)):(this.F("dragstart",this.OG,this),this.F("dragging",this.Og,this),this.F("dragend",this.oE,this))},lj:function(a){var b=this.get("position"); a=this.map.Ub(b).add(a.Gc(this.map.get("resolution")));b instanceof W.Q?this.set("position",this.map.df(a)):this.set("position",a)},jW:function(){var a=this.get("content"),b=this.get("shadow"),c=this.get("offset"),d=this.get("label"),a=a?this.eI(a,c):this.cz(this.get("icon"),c);this.set("contentDom",a);b&&(b=this.hI(b,c),this.set("shadowDom",b));d&&d.content&&this.set("labelDom",this.gI(d.content))},gI:function(a){var b=document.createElement("div");b.className="amap-marker-label";b.innerHTML=a;return b}, sl:function(){if(this.map&&this.get("position")&&!this.I){var a=this.map,b=this.map.Ub(this.get("position")),a=this.I=new W.$d({name:"marker-"+W.g.zb(this),map:a,za:new W.ca.xe([b.x,b.y])});a.Lj=this;this.P("coords",a,!0);a.P("offset",this,!0);a.P("isTop",this,!0);a.P("zIndex",this,!0);a.P("params",this,!0);a.P("noSelect",this,!0)}},getParams:function(){return{zIndex:this.get("zIndex"),SH:this.get("angle"),Xj:this.get("contentDom"),zZ:this.get("labelDom"),y1:this.get("shadowDom"),opacity:this.get("opacity"), title:this.get("title"),label:this.get("label"),FC:this.get("AnimationOffset"),offset:this.get("offset"),yZ:this.get("isTop"),shape:this.get("shape"),visible:this.get("visible")}},offsetChanged:function(){if(this.I&&this.I.Y){var a=this.map.Ub(this.get("position")).Qa(this.I.ka).Eb(this.map.get("resolution"));this.I.Y&&(this.I.Y.style.left=Math.round(a.x)+this.get("offset").x+this.get("AnimationOffset").x+"px",this.I.Y.style.top=Math.round(a.y)+this.get("offset").y+this.get("AnimationOffset").y+"px")}}, positionChanged:function(){if(this.I){var a=this.map.Ub(this.get("position"));this.set("coords",[a.x,a.y]);this.map&&(this.I.bO=!0,this.map.set("display"))}},contentChanged:function(){if(this.I){this.map.$b.Cq=!0;-1===W.g.indexOf(this.map.$b.yh,this.I)&&this.map.$b.yh.push(this.I);this.I.Y&&this.I.Y.removeChild(this.get("contentDom"));var a=this.get("content"),b=this.get("offset"),a=this.eI(a,b);this.set("contentDom",a);this.I.Y?(W.j.Eg&&W.g.iepngFix(a),this.I.Y.appendChild(a),this.I.Xj=a):this.map&& this.map.set("display")}},iconChanged:function(){if(this.I&&this.I.Y&&!this.get("content")){this.map.$b.Cq=!0;-1===W.g.indexOf(this.map.$b.yh,this.I)&&this.map.$b.yh.push(this.I);this.I.Y&&this.get("contentDom")&&this.I.Y.removeChild(this.get("contentDom"));var a=this.get("icon"),b=this.get("offset"),a=this.cz(a,b);this.set("contentDom",a);this.I.Y?(W.j.Eg&&W.g.iepngFix(a),this.I.Y.appendChild(a),this.I.Xj=a):this.map&&this.map.set("display")}},shadowChanged:function(){if(this.I&&this.I.Y){var a= this.get("shadowDom");this.I.Y&&a&&a.parentNode===this.I.Y&&this.I.Y.removeChild(a);if(a=this.get("shadow")){var b=this.get("offset"),a=this.hI(a,b);this.set("shadowDom",a);this.I.Y&&this.I.Y.appendChild(a)}}},titleChanged:function(){this.I&&this.I.Xj&&"string"===typeof this.get("title")&&this.I.Xj&&this.get("title")&&(this.I.Xj.title=this.get("title"))},labelChanged:function(){if(this.I&&this.I.Y){var a=this.get("label"),b=this.I.Y;if(b&&a&&a.hasOwnProperty("content")){this.get("labelDom")&&b.removeChild(this.get("labelDom")); var c="";if(a.content){var c=this.gI(a.content),d=0,f=0;a.offset&&(d=a.offset.y+"px",f=a.offset.x+"px");c.style.top=d;c.style.left=f;b.appendChild(c)}this.set("labelDom",c)}}},isTopChanged:function(){var a=this.map.$b.sv,b=this.get("isTop"),c=this.get("zIndex");a?a===this?this.I&&this.I.Y&&(this.I.Y.style.zIndex=b?this.map.$b.Ek+10:c,this.map.$b.sv=b?this:null):(a.I&&a.I.Y&&(a.I.Y.style.zIndex=b?a.get("zIndex"):this.map.$b.Ek+10),this.I&&this.I.Y&&(this.I.Y.style.zIndex=b?this.map.$b.Ek+10:c),this.map.$b.sv= b?this:a):(this.map.$b.sv=this,this.I&&this.I.Y&&(this.I.Y.style.zIndex=b?this.map.$b.Ek+10:c))},visibleChanged:function(){this.I&&this.I.Y&&(this.get("visible")?this.I.Y.style.display="block":this.I.Y.style.display="none")},angleChanged:function(){if(this.I&&this.I.Y){var a={x:-1*this.get("offset").x,y:-1*this.get("offset").y};W.f.rotate(this.I.Y,this.get("angle")||0,a)}},zIndexChanged:function(){var a=this.get("zIndex");if(a>this.map.$b.Ek){this.map.$b.Ek=a;var b=this.map.$b.sv;b&&b.I&&b.I.Y&&(b.I.Y.style.zIndex= a+10)}this.I&&this.I.Y&&(this.I.Y.style.zIndex=this.get("isTop")?this.map.$b.Ek+10:this.get("zIndex"))},opacityChanged:function(){var a=this.get("contentDom"),b=this.get("shadowDom");a&&W.f.Ak(a,this.get("opacity"));b&&W.f.Ak(b,this.get("opacity"))},eI:function(a){var b;b=document.createElement("div");b.className="amap-marker-content";"string"!==typeof a?b.appendChild(a):(b.innerHTML=a,b.childNodes[0]&&!b.childNodes[0].style&&(b.style["white-space"]="pre"));W.f.Ak(b,this.get("opacity"));return b}, cz:function(a){var b,c=0,d=0,f,g,h,k;a?("string"===typeof a?(b=a,k=!0):(b=a.get("image"),d=a.get("size"),f=a.get("imageSize"),c=d.width,d=d.height,f&&(g=f.width,h=f.height)),c||(c=0),d||(d=0),a="string"!==typeof a?a.get("imageOffset"):{x:0,y:0}):(b=W.q.Le+"/mark_bs.png",a={x:0,y:0},c=19,d=33,g=19,h=33);f=document.createElement("div");f.className="amap-icon";f.style.position="absolute";k&&!W.j.ed&&(f.style.overflow="inherit");c&&(f.style.width=c+"px");d&&(f.style.height=d+"px");c=document.createElement("img"); c.src=b;g&&h&&(c.style.width=g+"px",c.style.height=h+"px");c.style.top=a.y+"px";c.style.left=a.x+"px";W.j.ed&&k||f.appendChild(c);W.f.Ak(W.j.ed&&k?c:f,this.get("opacity"));return W.j.ed&&k?c:f},hI:function(a,b){var c=this.cz(a,b);c.style.zIndex=-1;return c},moveChanged:function(){var a=this.get("move");if(!1===a)return this.K1();void 0!==a&&("pause"===a.action?this.X_():"[object Array]"===Object.prototype.toString.call(a.Ke)?a.Ke&&("resume"===a.action&&this.zs?this.moveTo(a.Ke[a.Ke.Pi||0],a.speed, a.La):(this.zs&&this.w("movestop"),a.Ke.Pi=0,this.set("position",a.Ke[0]),this.d_(a.Ke,a.speed,a.La,a.GW))):this.moveTo(a.Ke,a.speed,a.La,!0))},moveTo:function(a,b,c,d){var f=this.get("position");a.Qa(f);var g=Math.round(a.Df(f)/1E3/b*36E5);if(0===g)return this.w("moveend");this.Me&&(this.Me.stop(),this.Me=null);this.Me=new W.Gh(f,a);c=c||function(a){return a};this.Me.transition=function(a,b,d){if(d>=g)return b;var f=(b.J-a.J)*c(d/g)+a.J;a=(b.N-a.N)*c(d/g)+a.N;return new W.Q(f,a)};this.Me.fo=function(b){this.set("position", b);b.Kb(a)?(this.Me&&(this.Me.stop(),this.Me=null),this.cc.w("moveend"),this.w("moveend")):(d&&this.cc.w("moving",{passedPath:[this.Me.start,this.get("position")]}),this.w("moving"))};this.get("autoRotation")&&!W.j.ed&&(b=this.GQ(f,a),this.set("angle",b));this.Me.yk(this)},K1:function(){this.Me&&(this.Me.stop(),this.Me=null,this.w("movestop"))},X_:function(){this.Me&&(this.Me.stop(),this.Me=null,this.w("movepause"))},d_:function(a,b,c,d){function f(){var b=a.slice(0,a.Pi||0);b.push(this.get("position")); this.cc.w("moving",{passedPath:b})}function g(){a.Pi<a.length-1?(a.Pi+=1,this.moveTo(a[a.Pi],b,c)):(this.la("movealong"),d?(a.Pi=0,this.set("position",a[0]),this.moveTo(a[a.Pi],b,c)):this.w("movestop"))}var h=Math.min(a.Pi||0,a.length-1);this.zs||(this.zs=!0,this.e("moving",f,this),this.e("moveend",g,this),this.e("movestop",function l(){this.zs=!1;this.F("moveend",g,this);this.F("moving",f,this);this.F("movestop",l,this)},this));this.moveTo(a[h],b,c)},GQ:function(a,b){var c=this.map,d=c.Ub(a),c=c.Ub(b), f=0;c.Df(d);var g=c.y-d.y,h=c.x-d.x;0!==c.x-d.x?(f=Math.atan((c.y-d.y)/(c.x-d.x)),0<=g&&0>h?f=Math.PI+f:0>g&&0>=h?f=Math.PI+f:0>g&&0<=h&&(f=2*Math.PI+f)):f=c.y>d.y?Math.PI/2:3*Math.PI/2;return W.g.lf(180*f/Math.PI,1)}});W.Ia.Ev=W.Ia.vj.extend({D:function(a,b){arguments.callee.bb.apply(this,arguments);this.P("items",a,!0);this.P("content",a,!0);this.P("resolution",b);this.P("centerCoords",b);this.aq=a},iL:function(){this.ne();this.Ao();this.Hk();this.map.e("movestart",this.Vg,this);this.map.e("mapmove",this.Vg,this);this.map.e("zoomstart",this.Vg,this);this.map.e("click",this.Vg,this);this.map.e("closeOverlays",this.Vg,this);this.map.e("rotate",this.Vg,this)},Vg:function(){this.aq.map&&this.aq.close()},mapChanged:function(){}, positionChanged:function(){this.Hk()},ne:function(){this.C&&(this.C.parentNode&&this.C.parentNode.removeChild(this.C),this.C=null);var a=W.f.create("div",null,"amap-menu");W.B.e(a,"mousedown",function(a){W.B.stopPropagation(a)},this);this.C=a;this.map.$a.Ia.appendChild(this.C)},Ao:function(){var a=this,b=this.C;b.innerHTML="";var c=this.get("content");if("object"===typeof c)b.appendChild(c);else if("string"===typeof c)b.innerHTML=c;else if((c=this.get("items"))&&c.length){var d=W.f.create("ul",b, "amap-menu-outer");c.sort(function(a,b){return isNaN(a.Du)||isNaN(b.Du)?0:a.Du-b.Du});for(b=0;b<c.length;b+=1)(function(b){var c=b.mN,h=b.La,k=W.f.create("li",d);k.innerHTML=c;W.B.e(k,"click",function(){h.call(k);a.aq.close()},k)})(c[b])}else this.C.innerHTML=""},Hk:function(){var a=this.map,b=this.C;if(a&&b){var c=a.Ub(this.get("position")),d=this.get("centerCoords"),b=(c.x-d.x)/this.get("resolution"),c=(c.y-d.y)/this.get("resolution"),a=a.get("size"),c=c+a.height/2,b=b+a.width/2,d=W.f.Aq(this.C); b>a.width-d.width-5&&(b-=d.width);c>a.height-d.height-5&&(c-=d.height);this.C.style.right="";this.C.style.bottom="";this.C.style.left=b+"px";this.C.style.top=c+"px"}},Ne:function(){this.C&&(this.map.F("click",this.YD,this),this.map.$a.Ia.removeChild(this.C),this.aq.eh=!1,this.C=this.aq.Ii.map=null,this.map.F("movestart",this.Vg,this),this.map.F("zoomstart",this.Vg,this),this.map.F("click",this.Vg,this),this.map.F("closeOverlays",this.Vg,this),this.map.F("rotate",this.Vg,this))},visibleChanged:function(){this.C&& (this.get("visible")?this.C.style.display="block":this.C.style.display="none")},itemsChanged:function(){this.C&&this.Ao()}});W.Ia.Ih=W.Ia.vj.extend({D:function(a,b){arguments.callee.bb.apply(this,arguments);this.Ad("content contentDom position contentU isCustom autoMove showShadow closeWhenClickMap size offset".split(" "),a);this.P("retainWhenClose",a,!0);a.P("toBeClose",this);this.pl=a},iL:function(a){this.YW||(this.ne(),this.Ao(),this.QW());this.zi("resolution");this.zi("centerCoords");this.zi("render");this.P("resolution",a);this.P("centerCoords",a);this.P("render",a);this.map=a;a.$a.Ia.appendChild(this.jb);this.tC(); this.Hk();this.DD();this.YW=!0;this.cc.w("onAdd",{type:"onAdd",target:this.cc})},ne:function(){var a=W.f.create("div");a.className="amap-info";var b=W.f.create("div",a),c=W.f.create("div",a),d=W.f.create("div",c);a.style.position="absolute";c.style.position="absolute";c.style.bottom=-1*(this.get("offset").y||0)+"px";c.style.left=(this.get("offset").x||0)+"px";b.style.position="absolute";b.style.bottom=-1*(this.get("offset").y||0)+"px";b.style.left=(this.get("offset").x||0)+"px";this.jb=a;this.Qc= c;this.mr=b;this.Fe=d;this.set("contentDom",this.Fe,!0)},Ao:function(){var a=this.get("contentU");if(a){var b=this.get("isCustom"),c=this.Fe,d=this.mr;c.innerHTML="";var f=null;if(b){if("string"===typeof a)c.innerHTML=a;else if(a instanceof Array)for(f=0;f<a.length;f+=1)c.appendChild(a[f]);else c.appendChild(a);f=c;d.parentNode&&d.parentNode.removeChild(d)}else{f=d=W.f.create("div",c,"amap-info-content amap-info-outer");"string"===typeof a?d.innerHTML=a:d.appendChild(a);this.ZW=d;a=W.f.create("a", this.Fe,"amap-info-close");a.innerHTML="\\u00d7";this.kz=a;a.href="javascript: void(0)";W.j.ud&&(W.B.e(a,"touchstart",function(a){W.B.stop(a)},this),W.B.e(a,"touchend",function(a){W.B.stop(a);this.pl.close()},this),W.B.e(a,"click",function(a){W.B.stop(a);this.pl.close()},this));W.j.V||(W.B.e(a,"mousedown",function(a){W.B.stop(a)},this),W.B.e(a,"click",function(a){W.B.stop(a);this.pl.close()},this));if(a=this.get("size",!0))0!==a.width&&(d.style.width=a.width+"px"),0!==a.height&&(d.style.height=a.height+ "px");a=W.f.create("div",c,"amap-info-sharp");a.style.height="23px";if(W.j.Eg||W.j.Jq)a.style.marginLeft=c.childNodes[0].offsetWidth/2-5;this.mr.style.display="block"}W.B.J1(f)}},tC:function(){var a=this.get("isCustom"),b=this.get("showShadow");if(!a&&b){var a=this.mr,b=W.f.Aq(this.Fe),c=b.height-23,d=b.width;if(W.j.Eg||W.j.Jq)c=this.Fe.childNodes[0].offsetHeight,d=this.Fe.childNodes[0].offsetWidth+26;b="background-image:url("+W.q.rb+(W.j.Eg?"/theme/v1.3/iws.gif);":"/theme/v1.3/iws.png);");a.innerHTML= "";var f=[],g;g=f[1]={};g.height=0.5*c+4;g.width=d;g.offsetX=400;g.offsetY=16;g.top=-g.height-10-15;g.left=23;g=f[2]={};g.height=f[1].height;g.width=f[1].height;g.offsetX=1075-g.width;g.offsetY=f[1].offsetY;g.top=f[1].top;g.left=23+f[1].width;g=f[3]={};g.height=10;g.width=22;g.offsetX=30;g.offsetY=445;g.top=-25;g.left=23+(W.j.Jq||W.j.Eg?5:0);g=f[4]={};g.height=10;g.width=d/2-15-f[3].left-f[3].width;g.offsetX=132;g.offsetY=445;g.top=-25;g.left=f[3].left+f[3].width;g=f[5]={};g.height=10;g.width=70; g.offsetX=80;g.offsetY=445;g.top=-25;g.left=f[4].left+f[4].width;g=f[6]={};g.height=10;g.width=d-f[5].left-f[5].width;g.offsetX=132;g.offsetY=445;g.top=-25;g.left=f[5].left+f[5].width;g=f[7]={};g.height=10;g.width=30;g.offsetX=621;g.offsetY=445;g.top=-25;g.left=d;g=f[8]={};g.height=15;g.width=70;g.offsetX=47;g.offsetY=470;g.top=-15;g.left=d/2-15;for(c=1;8>=c;c+=1)d=W.f.create("div",a),g=[],g.push("position:absolute;"),g.push(b),g.push("top:"+f[c].top+"px;"),g.push("left:"+f[c].left+"px;"),g.push("width:"+ f[c].width+"px;"),g.push("height:"+f[c].height+"px;"),g.push("background-position:"+-f[c].offsetX+"px "+-f[c].offsetY+"px;"),d.style.cssText=g.join("")}},f7:function(){},Hk:function(){var a=this.map,b=this.jb,c=this.get("position"),d=this.get("resolution");if(a&&b&&c){var c=a.Ub(this.get("position")),f=this.get("centerCoords"),b=(c.x-f.x)/d,d=(c.y-f.y)/d,a=a.get("size"),c=W.f.Aq(this.Fe);if(W.j.Eg||W.j.Jq)c.width=this.Fe.childNodes[0].offsetWidth+14;c=this.get("isCustom")?c.width/2:(c.width-30)/2; this.jb.style.left=Math.round(b+a.width/2-c)+"px";this.jb.style.top=Math.round(d+a.height/2)+"px";b=this.ZW;if(this.kz&&b.childNodes[0]){for(d=a=0;d<b.childNodes.length;d+=1)a+=b.childNodes[0].clientHeight||0;a>(this.get("size").height||b.clientHeight)?this.kz.style.right="20px":this.kz.style.right="5px"}}},RP:function(){var a=new W.L(2-this.Fe.offsetWidth/2,2-this.Fe.offsetHeight),b=this.get("offset")||new W.L(0,0);this.get("isCustom")||(a=a.add(new W.L(0,-23)));return a.add(b)},DD:function(){if(this.get("position")&& this.get("autoMove")&&this.Fe){var a=this.map,b=new W.bc(this.Fe.offsetWidth,this.Fe.offsetHeight);a.NA(this.get("position"));for(var c=a.NA(this.get("position")).add(this.RP()),d=c.add(b.yo()),f=a.get("size"),g=a.oY(),h=0,k=0,l=0;l<g.length;l+=1){var m=g[l],n=0,p=0;0===m[1]&&0===m[2]?(n=m[3]-(c.x+h),p=m[0]-(c.y+k),0<n&&0<p&&(Math.abs(n)<Math.abs(p)?h+=n:k+=p)):0===m[2]&&0===m[3]?(n=f.Je()-m[1]-(d.x+h),p=m[0]-(c.y+k),0>n&&0<p&&(Math.abs(n)<Math.abs(p)?h+=n:k+=p)):0===m[0]&&0===m[3]?(n=f.Je()-m[1]- (d.x+h),p=f.He()-m[2]-(d.y+k),0>n&&0>p&&(Math.abs(n)<Math.abs(p)?h+=n:k+=p)):0===m[0]&&0===m[1]&&(n=m[3]-(c.x+h),p=f.He()-m[2]-(d.y+k),0<n&&0>p&&(Math.abs(n)<Math.abs(p)?h+=n:k+=p))}c=c.add(new W.L(h,k));d=d.add(new W.L(h,k));l=g=0;0>c.x||b.Je()>f.Je()?g=20-c.x:f.Je()<d.x&&(g=f.Je()-d.x-25);0>c.y||b.He()>f.He()?l=5-c.y:f.He()<d.y&&(l=f.He()-d.y-15);g+=h;l+=k;(g||l)&&a.na.panBy(g,l)}},QW:function(){this.get("closeWhenClickMap")&&this.map.e("closeInfo",this.YD,this,!1)},YD:function(){this.pl.eh&&this.pl.close()}, Ne:function(){this.jb&&(this.get("retainWhenClose")?this.map.Wk.appendChild(this.jb):(this.jb.parentNode===this.map.$a.Ia&&this.map.$a.Ia.removeChild(this.jb),this.pl.Ia=null),this.map=null,this.pl.eh=!1,this.cc.w("close",{type:"close",target:this.cc}))},I3:function(){if(!this.get("isCustom"))return this.Fe.offsetWidth;for(var a=this.Ae,b=a.firstChild,c=a.lastChild;b&&c&&b.style&&c.style&&b===c;)a=b,b=a.firstChild,c=a.lastChild;a=W.f.Kc(a,"width");return a=parseInt(a.replace("px",""),10)},renderChanged:function(){this.Hk()}, positionChanged:function(){this.map&&this.jb&&(this.Hk(),this.DD())},offsetChanged:function(){var a=this.get("offset");this.Qc.style.bottom=-1*(a.y||0)+"px";this.Qc.style.left=(a.x||0)+"px";this.mr.style.bottom=-1*(a.y||0)+"px";this.mr.style.left=(a.x||0)+"px"},contentChanged:function(){this.Ao();this.tC();this.Hk()},sizeChanged:function(){this.Ao();this.tC();this.Hk()}});W.ca={};W.ca.Mk=W.W.extend({ta:[W.da,W.xd],D:function(){},Sb:function(){return new this.D(this.Ka)},Qz:function(){return this.Ka},setCoords:function(a){this.h1(a)},h1:function(a){this.am=this.mc();this.Cd=null;if(W.ca.jd&&this instanceof W.ca.jd){var b=a.length;this.sf=Array(b);for(var c,d,f=0;f<b;f+=1)if(c=a[f],d=new W.ca.$C(c),this.sf[f]=d,0===f){if(0===c.length)break;d.kk(c)||c.reverse()}else 0!==c.length&&d.kk(c)&&c.reverse()}else this.Ka=a}}); W.ca.Cc=W.extend({},{Bm:"point",Iv:"linestring",YC:"linearring",Nr:"polygon",Lv:"multipoint",Kv:"multilinestring",Lr:"multipolygon",e3:"geometrycollection"});W.$d=W.W.extend({ta:[W.da,W.xd],D:function(a){a=a||{};this.xs=a.xs;this.map=a.map;this.Ln=a.Rw||W.g.zb(this);this.name=a.name||"";this.zg=!1;this.set("visible",!0,!0);this.WB(a.za);this.lg=a.ov;this.style=a.style},yX:function(){this.style=this.lg=this.Lj=this.DZ=this.za=this.name=this.map=null;this.sm();this.Zi()},TY:function(){return this.lg},s1:function(a){this.lg=a;this.zIndex=this.lg[0].Of||this.zIndex},f5:function(){return this.za},WB:function(a){a&&(this.za=a,this.P("coords",a,!0),this.xs&& (a.P("radius",this),a.P("center",this),a.P("resolution",this),a.P("strokeWeight",this)))},setStyle:function(a){this.s1(a);this.ck()},coordsChanged:function(){this.ck()},radiusChanged:function(){this.za.am=this.za.mc();this.za.Cd=null;this.ck()},ck:function(a){this.set("feature",{target:this,sX:a,am:this.za.am||this.za.mc(),h_:this.za.mc()});this.za.am=this.za.mc()},visibleChanged:function(){this.ck()},s5:function(a){for(var b=0;b<this.lg.length;b+=1){var c=this.lg[b];if(a.Kb(c.An(this)))return c}}, vY:function(){var a=this.za,b=[];a.Ie()===W.ca.Cc.Nr||a.Ie()===W.ca.Cc.Lr?b.push(new W.style.wc.jd({fillColor:"#78cdd1",lc:0.2,strokeColor:"#122e29",ya:0.5,ob:1})):a.Ie()===W.ca.Cc.Iv||a.Ie()===W.ca.Cc.YC||a.Ie()===W.ca.Cc.Kv?b.push(new W.style.wc.ZC({color:"#888888",width:1,zIndex:10})):a.Ie()!==W.ca.Cc.Bm&&a.Ie()!==W.ca.Cc.Lv||b.push(new W.style.wc.Jr({url:W.q.rb+"/theme/v1.3/markers/0.png",width:36,height:36,rotation:0,w7:-12,x7:-36,zIndex:100}));return b}});W.$d.Z2="geometry";W.ca.xe=W.ca.Mk.extend({D:function(a,b){this.Ka=a;this.pi=b;this.Cd=null},mc:function(){if(!this.Cd){var a=this.Ka[0],b=this.Ka[1];if(this.pi)this.Cd=[a,b,a,b];else{var c=this.get("radius"),c=c?c/Math.cos(Math.PI*this.get("center").N/180):0,d=this.get("resolution")*this.get("strokeWeight")||0;this.Cd=[a-c-d,b-c-d,a+c+d,b+c+d]}}return this.Cd},Ie:function(){return W.ca.Cc.Bm}}); ', true), _jsload_('brender', 'W.K={canvas:{},uc:{},Pe:{},fd:{}};W.K.Pf=W.W.extend({ta:[W.da,W.xd],D:function(a,b){this.r=a;this.pi=a.Pa.pi;this.Mb=b;this.l=b.l;this.P("display",b)},KI:function(){this.oL&&this.oL();this.sm();this.l=this.Mb=this.r=null},Uz:function(a,b){var c=this.zoom,d=[],f=this.r;if(Math.floor(c)!==c)b(d,f);else{c=[a.x,a.y];if(f.Cq){for(var g=f.yh,h=!0,k=[],l=0;l<g.length;l+=1){var m=g[l].Xj;if(m)if(m.parentNode&&m.parentNode.parentNode&&this.Mb&&m.parentNode.parentNode!==this.Mb.Wk&&"none"!==m.parentNode.style.display){var n=m.clientWidth,p= m.clientHeight;m.childNodes[0]&&(n=n||m.childNodes[0].clientWidth,p=p||m.childNodes[0].clientHeight);window.opera&&(n=Math.max(n,m.childNodes[0].scrollWidth),p=Math.max(p,m.childNodes[0].scrollHeight));m=Math.max(Math.abs(g[l].get("offset").x),Math.abs(g[l].get("offset").y))+Math.max(n,p);f.rf=Math.max(f.rf,m);f.jg=Math.max(f.jg,m);g[l].width=n;g[l].height=p}else h=!1,k.push(g[l])}h?(f.Cq=!1,f.yh=[]):f.yh=k}g=Math.max(f.rf,f.bo||0)*this.O;h=Math.max(f.jg,f.bo||0)*this.O;h=Math.max(h,f.jj||0);g=Math.max(g, f.jj||0);if(g=f.nh([c[0]-g,c[1]-h,c[0]+g,c[1]+h])){for(var q in g)if(g.hasOwnProperty(q)&&(h=g[q],h.get("visible")&&!h.get("noSelect")))if(l=h.za,l instanceof W.ca.xe)if(this.pi){k=this.r.Ch;k instanceof Array&&(k="number"==typeof h.Da.style&&k[h.Da.style]?k[h.Da.style]:k[0]);var p=k.size.width*this.O,m=k.size.height*this.O,s=k.anchor.x*this.O,u=k.anchor.y*this.O,p=W.A.bI([[c[0]-p+s,c[1]-m+u],[c[0]+s,c[1]+u]]);W.A.Dd(p,l.Ka)&&d.push(h)}else if("undefined"!==typeof l.get("radius"))k=l.Ka,k=new W.L(k[0], k[1]),(new W.L(c[0],c[1])).Df(k)*Math.cos(h.get("center").N*Math.PI/180)<=l.get("radius")&&d.push(h);else{if(k=h.get("params"),k.visible){l=l.Ka;s=k.SH%360;n=[c[0],c[1]];if(s){var p=(c[0]-l[0])/this.O,m=(c[1]-l[1])/this.O,u=Math.PI*s/180,s=Math.cos(-u),u=Math.sin(-u),t=p*u+m*s;n[0]=l[0]+(p*s-m*u)*this.O;n[1]=l[1]+t*this.O}p=h.width*this.O;m=h.height*this.O;s=k.offset.x*this.O;u=k.offset.y*this.O;p=W.A.bI([[n[0]-p-s,n[1]-m-u],[n[0]-s,n[1]-u]]);l[0]instanceof Array||(l=[l]);for(m=l.length-1;0<=m;m-= 1)if(W.A.Dd(p,l[m])){k.shape?this.tZ(h,n,l)&&d.push(h):d.push(h);break}}}else l.Dd?l.Dd(c)&&d.push(h):l.Nt&&1.8*l.Nt(c)<=h.get("strokeWeight")*this.O&&d.push(h);this.pi?d.sort(function(a,b){return a.Ln>b.Ln?-1:1}):d.sort(function(a,b){return a.get("isTop")?-1:b.get("isTop")?1:a.get("zIndex")>b.get("zIndex")||a.get("zIndex")===b.get("zIndex")&&a.Ln>b.Ln?-1:1});b(d,f)}else b([],f)}},tZ:function(a,b,c){var d=(b[0]-c[0][0])/this.O;b=(b[1]-c[0][1])/this.O;a=a.get("params");c=a.offset;var d=[d-c.x,b-c.y], f;a=a.shape;if("circle"===a.G.type){if(b=a.G.coords[0],c=a.G.coords[1],Math.sqrt((d[0]-b)*(d[0]-b)+(d[1]-c)*(d[1]-c))<=a.G.coords[2])return!0}else{if("poly"===a.G.type)return f=a.G.coords,f=this.tW(f),W.Vc.Dd(d,f);if("rect"===a.G.type)return f=a.G.coords,a=f[0],b=f[1],c=f[2],f=f[3],f=[[a,b],[c,b],[c,f],[a,f]],W.Vc.Dd(d,f)}return!1},tW:function(a){for(var b=[],c=0;c/2<a.length/2;c+=2)b.push([a[c],a[c+1]]);return b},wJ:function(a,b,c,d,f,g,h){var k=["position:absolute;"];k.push("top:"+Math.round(c)+ "px;");k.push("left:"+Math.round(b)+"px;");k.push("width:"+Math.round(d)+"px;");k.push("height:"+Math.round(f)+"px;");1>g&&("opacity"in a.style?(k.push("opacity"),k.push(":"),k.push(g),k.push(";")):8<=document.documentMode?(k.push("-ms-filter:\'progid:DXImageTransform.Microsoft.Alpha(opacity="),k.push(Math.ceil(100*g)),k.push(")\';")):(k.push("filter:alpha(opacity="),k.push(Math.ceil(100*g)),k.push(");")));k.push("z-index:"+h+";");W.f.wM(a,k.join(""))}});W.K.ad=W.W.extend({ta:[W.da,W.xd],D:function(a){this.l=a;this.Wk=a.Wk;this.C=a.$a.T;this.P("display",a);this.P("rotateEnable",a);this.P("style",a);this.P("hightlight",a)},Uz:function(a,b,c,d){function f(a,d){a.length&&(h[W.g.indexOf(b,d)]=a);k-=1;0>=k&&(c(h),k=0)}for(var g=b.length,h=[],k=0,l,m=[],n=0;n<g;n+=1)l=b[n],l instanceof W.T.kd&&l.get("visible")&&(m.push(this.Zt(l)),k+=1);for(g=0;g<m.length;g+=1)m[g].Uz(a,f,d)}});W.K.ad.Zb({Af:function(a,b){for(var c=[],d=0,f=a.length;d<f;d+=2){var g=0,g="str"==b?W.g.lf(parseInt(a.substr(d,2),16)/(0==d?255:1),3):W.g.lf(parseInt(a.substr(d,2),16)/255,3);c.push(g)}c.push(c.shift());return"str"==b?"rgba("+c.join(",")+")":c},N_:function(a,b,c){if(b[c])console.log("customType repeat!!",c);else{var d={};d.visible=void 0==a.visible?!0:a.visible;d.z1=void 0==a.showLabel?!0:a.showLabel;d.mm=void 0==a.showIcon?!0:a.showIcon;if(void 0!==a.color){var f="",g="";a.color&&(f=this.Af(a.color, "str"),g=this.Af(a.color));d.color={canvas:f,Pe:g}}else d.opacity=a.opacity;void 0!==a.fillColor?(g=f="",a.fillColor&&(f=this.Af(a.fillColor,"str"),g=this.Af(a.fillColor)),d.fillColor={canvas:f,Pe:g}):d.lc=a.fillOpacity;void 0!==a.strokeColor?(g=f="",a.strokeColor&&(f=this.Af(a.strokeColor,"str"),g=this.Af(a.strokeColor)),d.strokeColor={canvas:f,Pe:g}):d.ya=a.strokeOpacity;void 0!==a.textFillColor?(g=f="",a.textFillColor&&(f=this.Af(a.textFillColor,"str"),g=this.Af(a.textFillColor)),d.R1={canvas:f, Pe:g}):d.S1=a.textFillOpacity;void 0!==a.textStrokeColor?(g=f="",a.textStrokeColor&&(f=this.Af(a.textStrokeColor,"str"),g=this.Af(a.textStrokeColor)),d.T1={canvas:f,Pe:g}):d.U1=a.textStrokeOpacity;void 0!==a.backgroundColor?(g=f="",a.backgroundColor&&(f=this.Af(a.backgroundColor,"str"),g=this.Af(a.backgroundColor)),d.backgroundColor={canvas:f,Pe:g}):d.VV=a.backgroundOpacity;b[c]=d}},FL:function(a,b,c){if(a)for(var d in a)if(a.hasOwnProperty(d)){var f=a[d],g=d;c&&(g=c+":"+d);f.subType?this.FL(f.subType, b,g):this.N_(f,b,g)}},styleChanged:function(){if(W.j.cf){var a={};this.FL(this.get("style"),a);this.FI=a;var b=this.FI["regions:land"];b&&(a="rgba(0,0,0,0)",b.visible&&(b=this.Kl(this.l.pg,b.opacity,b.color))&&(a=b),this.l.sz=a);this.set("display")}},Kl:function(a,b,c){if(a){if(void 0!==b)return a=a.split(","),a[3]=W.g.lf(parseFloat(b),3)+")",a.join(",");if(c)return c.canvas}return a},Sz:function(a,b,c){if(a){if(void 0!==b)return[a[0],a[1],a[2],W.g.lf(parseFloat(b),3)];if(c)return c.Pe}return a}, $t:function(a){return this.FI[a]},gk:function(a,b,c,d){var f=null,g=a;d=d?this.Kl:this.Sz;if(f=this.$t(b))if(f.visible){var g=1,h="";if(c)if(f.fillColor||f.lc)g=f.lc,h=f.fillColor;else{if(f.color||f.opacity)g=f.opacity,h=f.color}else if(f.strokeColor||f.ya)g=f.ya,h=f.strokeColor;else if(f.color||f.opacity)g=f.opacity,h=f.color;g=d(a,g,h)}else g="";this.Iq==b&&(g=this.Ll(g||a));return g},Xt:function(a,b,c){c=c?this.Kl:this.Sz;var d=null,f=a;(d=this.$t(b))&&(f=d.visible?c(a,d.opacity,d.color):"");this.Iq== b&&(f=this.Ll(f||a));return f},Wt:function(a,b,c,d){var f=a,g=b,h=c,k=!0,l=!0,m=1,n=this.$t(d);n&&(n.visible&&n.z1?(f=this.Kl(a,n.S1,n.R1),g=this.Kl(b,n.U1,n.T1),h=this.Kl(c,n.VV,n.backgroundColor),k=n.mm):(l=k=!1,f=g=h=""));this.Iq==d&&(f=this.Ll(f||a),g=this.Ll(g||b),h=this.Ll(h||c),m=1-1.6*this.fu,l=k=!0);return[f,g,h,k,l,m]},tq:function(a,b,c,d){var f=null,g=a,h=b;d=d?this.Kl:this.Sz;if(f=this.$t(c))f.visible?(g=d(a,f.lc,f.fillColor),h=d(b,f.ya,f.strokeColor)):g=h="";this.Iq==c&&(b=h||b,g=this.Ll(g|| a),h=this.Ll(b));return[g,h]}});W.K.canvas.ad=W.K.ad.extend({D:function(a){arguments.callee.bb.apply(this,arguments)},Zt:function(a){if(!a.K){var b=a.ai(this);b&&!b.E4&&(a.K=b)}return a.K},se:function(a){var b=this.l.sz||this.l.pg;this.j0!==b&&(this.l.e1(b),this.j0=b);this.l.$a.Sj.style.cssText="";for(var c=a.Ba,b=a.pa,d=a.size.width,f=a.size.height,g=0;g<c.length;g+=1){var h=c[g],k=this.Zt(h),l=c[g].ik();if(k&&k.r)if(!l.visible||l.$c[0]>b.zoom||l.$c[1]<b.zoom||h.Zs||h.va&&0==h.va.length){if(k=k.Gf())if(k.length)for(l=0;l<k.length;l+= 1)k[l].parentNode===this.C&&this.C.removeChild(k[l]);else k.parentNode===this.C&&this.C.removeChild(k)}else{k.se(a,l);var h=k.Gf(),m,n,p=k.transform;if(p&&h){c[g].pb=h;h.length||(h=[h],p=[p]);for(var q=0;q<h.length;q+=1){m=h[q];n=p[q];var s=n.translate.x,u=n.translate.y;c[g].ku||(s=W.g.lf(s,2),u=W.g.lf(u,2));var t=n.scale;1E-5>Math.abs(s)&&(s=0);1E-5>Math.abs(u)&&(u=0);var B=[];B.push("position:absolute");B.push("z-index:"+(n.Of||c[g].get("zIndex")));c[g].Ot?(B.push("top:"+Math.floor(f/2+u)+"px"), B.push("left:"+Math.floor(d/2+s)+"px")):m.xK?(B.push("height:"+m.height*t+"px"),B.push("width:"+m.width*t+"px"),B.push("top:"+(f/2-u*t)+"px"),B.push("left:"+(d/2-s*t)+"px")):(1!==t&&(B.push(W.f.Fk[W.f.Ld]+"-origin:"+s+"px "+u+"px"),B.push(W.f.Fk[W.f.Ld]+":scale3d("+t+","+t+",1)")),B.push("top:"+Math.floor(f/2-u)+"px"),B.push("left:"+Math.floor(d/2-s)+"px"),k.lk&&(B.push("height:"+m.height+"px"),B.push("width:"+m.width+"px")));k.ku||1===l.opacity||"number"!==typeof l.opacity||B.push(W.f.CJ(m,l.opacity)); (m.parentNode!==this.C||W.j.xg)&&this.C.appendChild(m);W.f.wM(m,B.join(";"))}}else c[g].oi&&(h.parentNode!==this.C||W.j.xg)&&(this.C.appendChild(h),c[g].pb=h)}}a=this.l.$a.Sj;h=this.l.$a.T;c=this.l.$a.Ia;W.f.Ld&&"number"===typeof b.rotation&&0!==b.rotation?(a.style[W.f.Ld+"Origin"]=d/2+"px "+f/2+"px",a.style[W.f.Ld]="rotate("+b.rotation+"deg)",a.style.overflow="visible",h.style.overflow="visible",c.style.overflow="visible"):(a.style.cssText="",h.style.cssText="-webkit-transform: translateZ(0);",c.style.cssText= "");this.l.kv=!1}});W.K.Kg=W.K.Pf.extend({D:function(a,b){arguments.callee.bb.apply(this,arguments);this.P("reload",a,!0);var c=W.j.size;if(this.l&&this.l.na){var d=this.l.na.get("tileCacheSize");d&&0<d&&(c=d)}this.Na=new W.wd(c);var f=this;this.Na.lL.yV(function(a){f.Lw(a)});this.hc=1;this.Fm=50;this.SO=!0;this.r.Na=this.Na;this.xA=new W.TC(6,null,a.XI);new W.TC(5,null,a.XI)},oL:function(){this.clear();this.Na.clear();this.ub&&(this.ub.F("tiles",this.nL,this),this.ub.F("ack",this.mL,this),this.ub.F("disable",this.kL, this),this.ub=null);this.lk&&W.B.F(this.xa,"webglcontextlost",this.eB,this);this.l.F("zoomend",this.lh,this);this.l.F("moveend",this.lh,this)},reloadChanged:function(){this.r&&(this.r.cb=!1);this.Na.clear();this.reload=!0;this.set("display")},MK:function(a,b,c){if(!a.Xn||a.Xn.Yi){var d=this;a.loaded=!1;a.Xn=b.KK(a.url,function(b){a.Xn=null;a.loaded=!0;d.Na.set(a.key,a);d.r&&(a.wa=!0,a.dc=b,a.Xn=null,d.set("display",0),"function"==typeof c&&c())},!1)}},a2:function(a,b,c,d){var f=[];c=c||18;b=Math.pow(2, b-c);for(var g=0;g<a.length;g+=1){var h=a[g].Ga,k=Math.floor(h.x/b),h=Math.floor(h.y/b);d?(k=c+"/"+k+"/"+h,h=this.Na.get(k)):(h=new W.Hh(c,k,h),k=h+"",h=new W.Rf(h));!f[k]&&h&&(f.push(h),f[k]=1)}return f},NK:function(a){for(var b=a.length-1;0<=b;b-=1){var c=a[b];if(c.length)if(this.qi){if(this.l.uC)break;var d=c[0].Ga.z;18<d&&(c=this.a2(c,d));this.MM(c,this.lk?1:0);for(var f=0,g=0;f<c.length;)this.LZ(c.slice(50*g,50*g+50),d),f+=50,g+=1}else{var h=this,d=function(){var a=c.length;return function(){if(0=== --a){var b={id:h.l.na.id,key:"rb",index:0};W.ae.Te.end(b);W.ae.Te.end(W.extend(b,{index:1}))}}}();this.MM(c);this.RA+=c.length;for(f=c.length-1;0<=f;f-=1)this.MK(c[f],this.xA,d)}}},au:function(a,b){var c=a+"";return(b?this.Na.io(c):this.Na.get(c))||new W.Rf(a.Sb(),this.ii&&this.ii(a.x,a.y,a.z))},lv:function(a,b){return this.hd*Math.pow(2,a-b)},Lw:function(a){a.Xn&&this.xA.rW(a.Xn);a.QB=!1;a.loaded=!1},Dt:function(a,b){var c=this.qc,d=this.O,f=a.ac.x,g=a.ac.y,h=a.eb.x,k=a.eb.y;new W.L(0,0);d*=this.lv(this.zoom, c);b&&(h=Math.max(b[0],h)-b[0],k=Math.max(b[1],k)-b[1],f=Math.min(b[2],f)-b[0],g=Math.min(b[3],g)-b[1],new W.L(Math.floor(b[0]/d),Math.floor(b[1]/d)));f/=d;g/=d;f={Xd:0===f%1?f-1:Math.floor(f),pd:0===g%1?g-1:Math.floor(g),pe:Math.floor(h/d),gd:Math.floor(k/d)};f.Mu=f.Xd-f.pe+1;f.TL=f.pd-f.gd+1;f.z=c;f.O=this.O*Math.pow(2,this.zoom-c);return f},zA:function(a,b,c){return b<a.pe||b>a.Xd||c<a.gd||c>a.pd?!1:!0},MM:function(a,b){if(a.length){var c=this.Fa.Eb(this.hd*Math.pow(2,this.Hc-a[0].Ga.z)*this.Bc), d=Math.floor(c.x),f=Math.floor(c.y);a.sort(function(a,c){var k=a.Ga,l=c.Ga,m=k.x-d,k=k.y-f,n=l.x-d,l=l.y-f;return(b?-1:1)*(n*n+l*l-(m*m+k*k))})}},clear:function(){this.xA.clear()},Ju:function(a,b){this.Xi=!1;b.ii!==this.ii&&(this.ii=b.ii,this.Na.clear());this.clear();this.Nh=b.Nh;this.Mh=b.Mh;this.hd=b.hd;var c=a.pa;this.Yd=b.Yd||a.pa.Yd;this.Zh=c.Zh;this.size=a.size;this.rotation=c.rotation;this.Fa=c.Fa;this.ra=a.ra;this.zoom&&(this.lB=c.zoom>this.zoom?"in":c.zoom<this.zoom?"out":!1);this.Jd=a.Jd; this.gg=a.gg;this.zoom=c.zoom;this.Hc=c.Hc;this.qc=!1==this.qi&&!this.r.fZ&&this.r.oa?this.Hc+1:this.Hc;this.Kf&&this.qc>this.Kf&&(this.qc=this.Kf);this.O=c.O;this.Bc=c.Bc;c=a.ra;this.ig=this.Dt(c,b.A);this.Br=c.uN?this.Dt(c.uN,b.A):null;var d=this.ig,f=this.ra.Q1,g=null,g=f<this.zoom&&this.Br?this.Br:d,h=[],k=[],l,m=[],n=[],p=[],q=new W.Hh(0,0,0),s,u=this.zoom,n=this.Mm||"",t={},B={},v,r,P,G,E,C;this.Id=1E6*Math.random()<<0;for(s=n.length-1;0<=s;s-=1)if(l=n[s],!(l.Tr<b.opacity))if(q.z=l.Ga.z,q.x= l.Ga.x,q.y=l.Ga.y,q.z===this.qc)t[q+""]|=16;else if(q.z<this.qc){if(t[q+""]|=64,this.Nh)for(C=this.qc-q.z,v=Math.max(d.pe,q.x<<C),u=Math.min(d.Xd,(q.x+1<<C)-1),r=Math.max(d.gd,q.y<<C),P=Math.min(d.pd,(q.y+1<<C)-1),q.z=this.qc,G=v;G<=u;G+=1)for(q.x=G,E=r;E<=P;E+=1)q.y=E,C=q+"",t[C]|=32,B[C]=B[C]?Math.max(l.Ga.z,B[C]):l.Ga.z}else if(this.Mh)for(C=1;q.z>=this.qc;){t[q+""]|=C;v=q.x>>1;r=q.y>>1;u=v<<1;P=r<<1;l=0;for(G=2;0<G;G-=1)for(q.x=u+G,E=2;0<E;E-=1)q.y=P+E,t[q+""]&5&&(l+=1);q.z-=1;q.x=v;q.y=r;C=4=== l?4:2}n=[];q.z=this.qc;s=!0;this.Na.KW();for(G=g.pe;G<=g.Xd;G+=1)for(q.x=G,E=g.gd;E<=g.pd;E+=1)q.y=E,this.Na.PZ(""+q),l=this.au(q),v=!1,l.wa?(l.Id=this.Id,this.zA(d,G,E)&&(n.push(l),this.Mg&&(l.hc!==this.hc||1>l.Tr)&&(v=!0))):(s=!1,this.zA(d,G,E)&&(v=!0),l.status||this.Hc!=f||this.Br&&!this.zA(this.Br,G,E)||m.push(l)),v&&p.push(l);s?(this.iJ||(this.iJ=!0),this.r.cb||(l={key:"rb",index:1,id:this.l.na.id},this.r.Qq&&(l.key="rl"),W.ae.Te.end(l),W.ae.Te.push({key:"ftc",Ik:n.length,id:this.l.na.id}))): this.r.cb=!1;this.Xi=s;n.length&&this.iJ&&(h.push(n),n.Xi=s);k.push(m);m=!1;if(this.Mh){p=p.slice(0);g=[];for(s=p.length-1;0<=s;s-=1)l=p[s],t[l.key]&4||g.push(l);l=b.$c[1];for(u=this.qc+1;p.length&&u<=l;u+=1){n=[];f=p;p=[];q.z=u;for(s=f.length-1;0<=s;s-=1)if(G=f[s],C=t[G.key],C&7)for(v=G.Ga.x<<1,r=G.Ga.y<<1,G=1;0<=G;G-=1)for(q.x=v+G,E=1;0<=E;E-=1)q.y=r+E,C=q+"",P=this.Na.io(C),t[C]&5&&P&&P.wa?(P.Nx=!0,P.Id=this.Id,n.push(P)):p.push(new W.Rf(q.Sb(),""));n.length&&(m=!0,h.push(n))}p=g}if(!m&&this.Nh)for(G= !h.length||this.lk?b.$c[0]:Math.max(b.$c[0],this.qc-2),E=Math.max(G,this.qc-this.O3),u=this.qc-1;p.length&&u>=G;u-=1){r=u>=E;m=[];n=[];g={};f=p;p=[];for(s=f.length-1;0<=s;s-=1)l=f[s],q.z=u,q.x=l.Ga.x>>1,q.y=l.Ga.y>>1,l=this.au(q,!r),g[l.key]||(g[l.key]=1,v=!1,l.wa&&(!this.T3||t[l.key]&64)?(q.x=Math.min(d.Xd,Math.max(d.pe,q.x<<this.qc-u)),q.y=Math.min(d.pd,Math.max(d.gd,q.y<<this.qc-u)),q.z=this.qc,C=q+"","number"===typeof B[C]&&l.Ga.z>B[C]?v=!0:l.Nx=!0,l.Id=this.Id,n.push(l)):v=!0,v&&p.push(l));n.length&& h.push(n);r&&m.length&&k.push(m)}this.QA=this.RA=0;this.NK(k,c);this.rr=h;this.r.set("tiles",h)},r6:function(){if(!this.qi){for(var a=this.ig.Xd+1,b=this.ig.pd+1,c=this.ig.pe-1,d=this.ig.gd-1,f,g=[],h=c;h<=a;h+=1)for(var k=d;k<=b;k+=1)if(h==c||h==a||k==d||k==b)f=new W.Hh(this.Hc,h,k),this.Na.io(void 0)||(f=this.au(f),g.push(f));this.NK([g])}}});W.K.uc.Kg=W.K.Kg.extend({D:function(a,b){arguments.callee.bb.apply(this,arguments);this.Fm=120;this.qi=!1;this.ne();this.Kf=a.Kf},Gf:function(){return this.pb},ne:function(){this.pb=document.createElement("div");this.pb.className=this.r.Pa.get("className")||"amap-layer";this.Hl=document.createDocumentFragment()},im:function(a){var b=Math.pow(2,a.pa.zoom-this.qd),c=a.pa.Fa.Qa(this.mk).Eb(this.Lf);this.transform={translate:this.transform.translate.add(c),scale:b,rotate:0};this.Fa=a.pa.Fa},Zy:function(a, b){if(!this.ka||3E4<Math.abs(this.Fa.x-this.ka.x)/this.O||3E4<Math.abs(this.Fa.y-this.ka.y)/this.O)this.ka=this.Fa;this.qd=this.Hc;this.Lf=this.Bc;this.rj=!1;this.currentTime=+new Date;this.vC=b.vC;var c=this.ig;this.fc=[256*c.pe*this.Bc,256*c.gd*this.Bc];this.Mg=this.Fm&&b.rt;var d=this.rr,f=256*c.Mu,c=256*c.TL;this.Jd=this.zoom<<0!==this.zoom;var g=this.Fa.Qa(this.ka);g.x<-W.g.Za/2&&(g.x+=W.g.Za);g.x>W.g.Za/2&&(g.x-=W.g.Za);this.ez=g.Eb(this.Bc);return[d,f,c,b]},po:function(a,b){var c=this.Zy(a, b);this.Wu.apply(this,c);this.Uc(a);this.Xi&&!this.r.cb&&(c=this.r,W.ae.Te.end({id:this.l.na.id,key:"rb",index:2}),c.cb=!0,c.kf?(c.kf=!0,c.la("complete")):c.la("renderComplete"))},se:function(a,b){this.Jo=a.Jo;this.gg=a.gg;this.Ju(a,b);this.mk&&W.j.xg&&(a.Jd||a.gg)?this.im(a,b):this.po(a,b);this.mk=this.Fa;this.rj&&this.set("display",0)},er:function(){for(var a=this.pb.childNodes,b=a.length-1;0<=b;b-=1)a[b]&&a[b].hc!==this.hc&&this.pb.removeChild(a[b])},IB:function(a,b){return a.gd===b.gd&&a.pe=== b.pe&&a.pd===b.pd&&a.Xd===b.Xd},Wu:function(a){var b=this.hc;this.hc+=1;var c=!1,d,f,g;f=!1;var h=[];this.ka.x-this.Fa.x<-W.g.Za/2?this.ka=new W.L(this.ka.x+W.g.Za,this.ka.y):this.ka.x-this.Fa.x>W.g.Za/2&&(this.ka=new W.L(this.ka.x-W.g.Za,this.ka.y));for(d=a.length-1;0<=d;d-=1)if(g=a[d],g.length){f=g[0].Ga.z;for(var k,l=this.lv(this.Hc,f),m=g.length-1;0<=m;m-=1){k=g[m];this.hM(k);if(!k.pc&&this.ka===k.ka&&k.qd===this.qd){var n=k.dc;if(n&&n.parentNode===this.pb&&1===k.Tr){h.push(k);n.hc=this.hc;k.hc= this.hc;continue}}k.ka=this.ka;k.qd=this.qd;f=k.Ga;var c=!0,p=new W.L(f.x*l*this.Bc,f.y*l*this.Bc);p.Qa(this.Fa);p=p.Qa(this.ka);p=p.Eb(this.Bc);p.x=Math.floor(p.x);p.y=Math.floor(p.y);var q=1;if(!k.pE||this.SO&&k.hc!==b)k.pE=this.currentTime;this.Mg&&!k.Nx?(n=Math.max(0,Math.abs(f.z-this.zoom)-1),q=Math.min(1,(this.currentTime-k.pE)/(1/Math.pow(1.32,n)*this.Fm)),1!==q&&(this.rj=!0)):k.Nx=!1;k.hc=this.hc;k.Tr=q;k.wa?(n=k.dc,!n&&k.pc&&k.pc.dc&&(n=k.pc.dc),0!==q&&n&&(this.wJ(n,p.x,p.y,l,l,q,f.z),n.parentNode!== this.pb&&(W.j.Eg&&"overlayer"===this.r.get("type")&&(n.style.display="none"),this.Hl.appendChild(n)),n.hc=this.hc,k.Hc=this.Hc,h.push(k))):k.Id=null}f=!0}1<a.length&&(this.rj=!0);this.Mm=h;this.er();this.pb.appendChild(this.Hl);return c||!f},hM:function(){},Uc:function(){this.transform={translate:this.ez,scale:Math.pow(2,this.zoom-this.Hc),rotate:0}}});window.CanvasRenderingContext2D&&(window.CanvasRenderingContext2D.prototype.uz=function(a,b,c,d,f){"undefined"===typeof f&&(f=[10,10]);this.moveTo(a,b);var g=c-a,h=d-b,k=Math.floor(Math.sqrt(g*g+h*h));d=g/k;c=h/k;f.KA=0;for(var l=[],g=this.Kt,m=0,n=0,p=!1,q=h=0;q<f.length;q+=1)f.KA+=f[q],l[q]={Gn:f[q]*d,Hn:f[q]*c,nf:h+=f[q]},g-=f[q],0>g&&!p&&(m=q,n=-g,p=!0);for(p=0;n+p<=k;)n<f[m]?(g=n*d,h=n*c):(g=l[m].Gn,h=l[m].Hn),a+=g,b+=h,this.or?this.moveTo(a,b):this.lineTo(a,b),p+=n,this.or=!this.or,n=f[(m+1)% f.length],m=(m+1)%f.length;k-=p;a+=k*d;b+=k*c;this.or?this.moveTo(a,b):this.lineTo(a,b);this.Kt=(this.Kt+p+k)%f.KA},window.CanvasRenderingContext2D.prototype.iX=function(a,b,c,d){"undefined"===typeof d&&(d=[10,10]);var f=2*Math.PI*c,g=0>=d?f:Math.round(f/(d[0]+d[1])),h=(d[0]+d[1])/f*2*Math.PI;d=d[0]/f*2*Math.PI;for(f=0;f<g;f+=1)this.beginPath(),this.arc(a,b,c,f*h,f*h+d),this.stroke()}); ', true), _jsload_('mrender', 'W.K.fd.Qk=W.K.Kg.extend({D:function(a,b){arguments.callee.bb.apply(this,arguments);this.ne()},LJ:function(){return this.Wa.VM},Gf:function(){return this.pb},ne:function(){this.pb=document.createElement("div");this.pb.className="amap-markers";this.Wa=new W.K.fd.kd(this.pb);this.Wa.r=this.r;this.Mb.C.appendChild(this.pb)},wr:function(a,b){this.Hl=b.Hl;this.Uq=b;this.Yd=a.pa.Yd;this.O=a.pa.O;this.zoom=a.pa.zoom;this.size=a.size;this.ra=a.ra;this.Ua=a.pa.Fa;this.Zh=a.pa.Zh;var c=!1;if(!this.ka||3E4<Math.abs(this.Ua.x- this.ka.x)/this.O||3E4<Math.abs(this.Ua.y-this.ka.y)/this.O)c=!0;if(c||this.zoom<<0!==this.zoom||this.qd!==this.zoom)this.ka=this.Ua,this.qd=this.zoom},hA:function(a){var b=a.ra.hb.y*this.O;a=a.ra.hb.x*this.O;return[this.Ua.x-a,this.Ua.y-b,this.Ua.x+a,this.Ua.y+b]},er:function(){if(this.zh&&this.zh)for(var a in this.zh)if(this.zh.hasOwnProperty(a)){var b=this.zh[a];b.Id!==this.Id&&b.Y&&this.Mb.Wk.appendChild(b.Y)}},se:function(a,b){this.Id=1E6*Math.random()<<0;this.wr(a,b);this.pa=a.pa;this.size= a.size;var c=this.r;this.hd=256;var d,f;f=this.hA(a);var g=0;c.Cq&&(g=50*this.O);f[0]-=this.r.rf*this.O+g;f[1]-=this.r.jg*this.O+g;f[2]+=this.r.rf*this.O+g;f[3]+=this.r.jg*this.O+g;c=c.nh(f);for(d in c)c.hasOwnProperty(d)&&(c[d].Id=this.Id,c[d].DZ=this);this.er(c);this.wr.call(this.Wa,a,b);this.Wa.E0(c);this.zh=c;this.Uc(a)},Uc:function(){var a=Math.pow(2,this.zoom-this.Hc);this.transform={translate:this.ka.Qa(this.Ua).Eb(this.O),scale:a,rotate:0}}});W.K.fd.kd=W.W.extend({D:function(a){this.dm=a},E0:function(a){var b=document.createDocumentFragment(),c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c],f,g=d.get("params");if(d.Y)f=d.Y;else{f=W.f.create("div");f.className="amap-marker";var h=g.Xj,k=g.y1;h&&f.appendChild(h);k&&f.appendChild(k);d.Y=f;d.Xj=h;if(k=g.title)h.title=k;this.r.Cq=!0;-1===W.g.indexOf(this.r.yh,d)&&this.r.yh.push(d);d.zg=!0}var h=g.offset,k=h.x,l=h.y,m,n;if(d.zg){var p=[];m=this.Nb(d.za.Ka);d.ka=this.ka;n=g.FC;h=Math.round(m[1]+ l+n.y);m=Math.round(m[0]+k+n.x);p.push("top:"+h+"px");p.push("left:"+m+"px");p.push("z-index:"+(g.yZ?this.r.Ek+10:g.zIndex));W.j.ed||p.push(W.f.QY(f,g.SH,{x:-k,y:-l}));p.push("display:"+(g.visible?"block":"none")+";");f.style.cssText=p.join(";");(k=g.label)&&k.content&&(g=g.zZ,m=h=0,k.offset&&(h=k.offset.y+"px",m=k.offset.x+"px"),g.style.top=h,g.style.left=m,f.appendChild(g))}else if(d.bO||this.zoom<<0!==this.zoom||d.zoom!==this.zoom||f.parentNode!==this.dm||d.ka!==this.ka)m=this.Nb(d.za.Ka),d.ka= this.ka,n=g.FC,h=Math.round(m[1]+l+n.y),m=Math.round(m[0]+k+n.x),f.style.top=h+"px",f.style.left=m+"px";d.zoom=this.zoom;f.parentNode!==this.dm&&(W.j.Eg&&W.g.iepngFix(f),b.appendChild(f),d.zg=!1);f.V3=this.dm}this.dm.appendChild(b)},Nb:function(a){return[(a[0]-this.ka.x)/this.O,(a[1]-this.ka.y)/this.O]}}); ', true), _jsload_('mouse', 'W.ad.Zb({Mw:"_docMsMov",eP:function(){var a=this.$a.Ed;W.B.e(a,"mousedown",this.UJ,this);this.lA||(this.lA=function(){this.ox=!1},this.LM=function(a){var c=this.Gg(a,!0);this.w(this.Mw,{event:a,PK:c})});W.B.e(document,"mousedown",this.lA,this);W.B.e(document,"mousemove",this.LM,this);W.B.e(a,"mousemove",this.VJ,this);W.B.e(a,"mouseup",this.WJ,this);W.B.e(a,"contextmenu",this.Pr,this);W.B.e(a,"rightclick",this.Pr,this);this.e(this.Mw,this.ZK,this)},yS:function(){var a=this.$a.Ed;W.B.F(a,"mousedown", this.UJ,this);W.B.F(document,"mousedown",this.lA,this);this.F(this.Mw,this.ZK,this);W.B.F(document,"mousemove",this.LM,this);W.B.F(a,"mousemove",this.VJ,this);W.B.F(a,"mouseup",this.WJ,this);W.B.F(a,"contextmenu",this.Pr,this);W.B.F(a,"rightclick",this.Pr,this)},gP:function(){W.B.e(this.$a.Ed,"mousewheel",this.TJ,this)},BS:function(){W.B.F(this.$a.Ed,"mousewheel",this.TJ,this)},fP:function(){this.e("mousemove",this.gG);this.e("mouseout",this.hG);this.e("mouseover",this.iG);this.e("mouseup",this.jG); this.e("mousedown",this.fG);this.e("rightclick",this.lG);this.e("contextmenu",this.aG);this.e("rdblclick",this.mG)},AS:function(){this.F("mousemove",this.gG);this.F("mouseout",this.hG);this.F("mouseover",this.iG);this.F("mouseup",this.jG);this.F("mousedown",this.fG);this.F("rightclick",this.lG);this.F("contextmenu",this.aG);this.F("rdblclick",this.mG)},keyboardEnableChanged:function(){this.get("keyboardEnable")?this.cP():this.Qx()},scrollWheelChanged:function(){this.get("scrollWheel")?this.e("mousewheel", this.kG):this.F("mousewheel",this.kG)},Pr:function(a){W.B.preventDefault(a)},pS:function(a){var b=this.Gg(a),c=0;a.wheelDelta?(c=a.wheelDelta/120,window.opera&&9.5>parseFloat(window.opera.version())&&(c=-c)):a.detail&&(c=-a.detail);this.R.kq=(this.R.kq||0)+c;this.w("mousewheel",b)},TJ:function(a){if(this.get("scrollWheel"))if(this.pS(a),a.preventDefault)a.preventDefault();else return!1},mA:function(a,b){W.B.preventDefault(a);b=this.Gg(a);var c=this.R;if(!this.$q(b.Vb,c.$k)){c.$k=b.Vb;if(c.Aj){if(!c.yc&& (b.Vb.x!==this.R.Mi.x||b.Vb.y!==this.R.Mi.y)){var d;this.sF(c.Zk)&&c.Zk.get("draggable")&&(d=c.Zk);!d&&this.get("dragEnable")&&(d=this);d&&(c.yc=!0,c.mq=d,c.If=c.Mi,c.NI=c.DB)}c.yc&&(c.lq=b,this.IG())}if(a.preventDefault)a.preventDefault();else return!1}},du:function(a){W.f.yb(this.C,"amap-drag");a=this.Gg(a);W.f.VX();W.f.VI();this.R&&(this.R.yc=!1);this.jh&&(this.jh.stop(),this.R.yc=!1,this.set("display"));this.R.Vk&&(this.R.Vk=!1,this.R.yc=!1,this.R.mq.w("dragend",a));this.R.Aj=!1;this.R.$k=null; this.R.If=null;W.B.F(document,"mousemove",this.mA,this);W.B.F(document,"mouseup",this.du,this);try{W.B.F(window.parent.document,"mouseup",this.du,this)}catch(b){}W.B.p2(this.$a.Ed)},XY:function(a,b){b=b||this.Gg(a);var c=this.get("size"),d;0<=b.Vb.x&&b.Vb.x<=c.width&&0<=b.Vb.y&&b.Vb.y<=c.height&&(d=!0);this.uK&&!d?this.w("mouseout",b):!this.uK&&d&&this.w("mouseover",b);this.uK=d},VJ:function(a){W.B.preventDefault(a);W.j.Sn&&(a=window.event);if(a){a=this.Gg(a);var b=this.R,c=a.he,d;this.R.Aj||(c instanceof W.Ia.vj?d=c.cc.get("cursor"):c instanceof W.T.Pf?d=c.get("cursor"):c===this&&(d=c.get("defaultCursor")),d=this.na.get("optimalCursor")||d,this.C.style.cursor=d||"");d=b.YR;var f=a.kl;d!==f&&(d&&b.CF&&b.CF.w("mouseout",a),f&&c&&(c.w("mouseover",a),c.get("topWhenMouseOver")&&c.cc.setTop(!0)));a.he.w("mousemove",a);a.he!==this&&this.w("mousemove",a);b.YR=a.kl||null;b.CF=a.he||null}},R:{yc:!1},UJ:function(a){this.ox=!0;W.f.wX();W.f.MI();this.jh&&(this.jh.stop(),this.R.yc=!1);this.R.$k=null;this.R.If= null;var b=this.Gg(a,!0);this.R.EX=new Date;this.R.Zk=b.he;this.R.Mi=b.Vb;this.R.WR=b.button;this.R.Aj=!0;this.R.XR=b;this.R.yc||(this.R.DB=b);this.Td&&this.Td.stop();var c=b.he;!c.cc&&c.get("dragEnable")&&(this.R.Aj=!0);W.f.tb(this.C,"amap-drag");b.he.w("mousedown",b);b.he!==this&&this.w("mousedown",b);W.B.f1(this.$a.Ed);W.B.e(document,"mousemove",this.mA,this);W.B.e(document,"mouseup",this.du,this);try{window.parent.document&&W.j.Sn&&W.B.e(window.parent.document,"mouseup",this.du,this)}catch(d){}W.B.stopPropagation(a)}, ZK:function(a){this.XY(a.event,a.PK)},K4:function(a){this.mA(a.event,a.PK)},WJ:function(a){a=this.Gg(a);var b=a.he,c=this.na.get("allBubble")||b.get("bubble");b!==document&&(b.w("mouseup",a),a.he!==this&&c&&this.w("mouseup",a));this.$q(a.Vb,this.R.Mi)&&(this.$f&&this.$q(this.R.tx,a.Vb)&&a.button===this.R.WR?(clearTimeout(this.$f),this.$f=null,W.B.yK(a)?c?(b.w("dblclick",a),b!==this&&this.w("dblclick",a)):b.w("dblclick",a):b.w("rdblclick",a),this.R.tx=null):(W.B.yK(a)?(c?(b.w("click",a),b!==this&& this.w("click",a)):(b.w("click",a),this.w("closeOverlays",a)),this.w("closeInfo",a),b.get("topWhenClick")&&b.cc.setTop(!0)):c?(b.w("rightclick",a),b!==this&&this.w("rightclick",a),this.w("contextmenu",a)):(b.w("rightclick",a),b.w("contextmenu",a)),this.R.tx=a.Vb,this.$f&&clearTimeout(this.$f),this.$f=setTimeout(W.g.bind(function(){clearTimeout(this.$f);this.$f=null;this.R.tx=null},this),260)))}});W.ad.Zb({kG:function(a){this.la("mousewheel",a);var b=this;if(1<=Math.abs(this.R.kq)&&!this.tN){var c=this.R.kq;if(1<=c)c=1;else if(-1>=c)c=-1;else return;b.Ks(a.wk,c);this.R.kq=0;this.tN=!0;setTimeout(function(){b.tN=!1;b.R.kq=0},W.j.su?50:40)}},gG:function(a){this.la("mousemove",a)},hG:function(a){this.la("mouseout",a)},iG:function(a){this.la("mouseover",a)},jG:function(a){this.la("mouseup",a)},fG:function(a){this.la("mousedown",a)},lG:function(a){this.la("rightclick",a)},aG:function(a){this.la("contextmenu", a)},mG:function(a){this.get("doubleClickZoom")&&this.get("zoomEnable")&&this.Ks(a.wk,-1);this.la("rdblclick",a)}});W.ad.Zb({IR:function(){this.sp={left:[37],right:[39],DX:[40],sC:[38],U2:[187,107,61],V2:[189,109,173]};this.GP={left:this.rn(this.Is(100,0)),right:this.rn(this.Is(-100,0)),DX:this.rn(this.Is(0,-100)),sC:this.rn(this.Is(0,100)),U2:this.rn(this.LH(1)),V2:this.rn(this.LH(-1))}},cP:function(){this.get("keyboardEnable")&&(this.sp||this.IR(),W.B.e(document,"keydown",this.Gs,this),W.B.e(document,"keyup",this.ZF,this))},Qx:function(){W.B.F(document,"keydown",this.Gs,this);W.B.F(document,"keyup",this.ZF,this)}, ZF:function(a){var b=a.keyCode;!a.ctrlKey||37!==b&&39!==b||this.set("refresh",1)},Gs:function(a){var b=a.keyCode,c;for(c in this.sp)if(this.sp.hasOwnProperty(c))for(var d=0;d<this.sp[c].length;d+=1)if(b===this.sp[c][d]){if(!this.ox)return;if(!a.ctrlKey){this.GP[c]();W.B.preventDefault(a);return}37===b?(this.aS(),W.B.preventDefault(a)):39===b&&(this.JU(),W.B.preventDefault(a))}},rn:function(a){return function(){a()}},aS:function(){this.get("rotateEnable")&&(this.w("rotate"),this.set("rotation",-15+ parseFloat(this.get("rotation"))%360))},JU:function(){this.get("rotateEnable")&&(this.w("rotate"),this.set("rotation",(15+parseFloat(this.get("rotation")))%360))},LH:function(a){var b=this.na;return function(){1===a?b.zoomIn():b.zoomOut()}},Is:function(a,b){var c=this.na;return function(){c.panBy(a,b)}}}); ', true), _jsload_('vectorlayer', '(function(a){a.Zl=a.j.Wn?new a.Sr(function(){function a(b,c,d){for(var f=0,g=d.length;f<g;f++){var h=d.charCodeAt(f);if(128>h)b.setUint8(c++,h>>>0&127|0);else if(2048>h)b.setUint8(c++,h>>>6&31|192),b.setUint8(c++,h>>>0&63|128);else if(65536>h)b.setUint8(c++,h>>>12&15|224),b.setUint8(c++,h>>>6&63|128),b.setUint8(c++,h>>>0&63|128);else if(1114112>h)b.setUint8(c++,h>>>18&7|240),b.setUint8(c++,h>>>12&63|128),b.setUint8(c++,h>>>6&63|128),b.setUint8(c++,h>>>0&63|128);else throw Error("bad codepoint "+h); }}function c(a,b,c){var d="",f=b;for(b+=c;f<b;f++)if(c=a.getUint8(f),0===(c&128))d+=String.fromCharCode(c);else if(192===(c&224))d+=String.fromCharCode((c&15)<<6|a.getUint8(++f)&63);else if(224===(c&240))d+=String.fromCharCode((c&15)<<12|(a.getUint8(++f)&63)<<6|(a.getUint8(++f)&63)<<0);else if(240===(c&248))d+=String.fromCharCode((c&7)<<18|(a.getUint8(++f)&63)<<12|(a.getUint8(++f)&63)<<6|(a.getUint8(++f)&63)<<0);else throw Error("Invalid byte "+c.toString(16));return d}function d(a){for(var b=0,c= 0,d=a.length;c<d;c++){var f=a.charCodeAt(c);if(128>f)b+=1;else if(2048>f)b+=2;else if(65536>f)b+=3;else if(1114112>f)b+=4;else throw Error("bad codepoint "+f);}return b}function f(a,b){this.offset=b||0;this.view=a}function g(c,f,h){var k=typeof c;if("string"===k){var q=d(c);if(32>q)return f.setUint8(h,q|160),a(f,h+1,c),1+q;if(256>q)return f.setUint8(h,217),f.setUint8(h+1,q),a(f,h+2,c),2+q;if(65536>q)return f.setUint8(h,218),f.setUint16(h+1,q),a(f,h+3,c),3+q;if(4294967296>q)return f.setUint8(h,219), f.setUint32(h+1,q),a(f,h+5,c),5+q}if(c instanceof ArrayBuffer){q=c.byteLength;if(256>q)return f.setUint8(h,196),f.setUint8(h+1,q),(new Uint8Array(f.buffer)).set(new Uint8Array(c),h+2),2+q;if(65536>q)return f.setUint8(h,197),f.setUint16(h+1,q),(new Uint8Array(f.buffer)).set(new Uint8Array(c),h+3),3+q;if(4294967296>q)return f.setUint8(h,198),f.setUint32(h+1,q),(new Uint8Array(f.buffer)).set(new Uint8Array(c),h+5),5+q}if("number"===k){if(c<<0!==c)return f.setUint8(h,203),f.setFloat64(h+1,c),9;if(0<= c){if(128>c)return f.setUint8(h,c),1;if(256>c)return f.setUint8(h,204),f.setUint8(h+1,c),2;if(65536>c)return f.setUint8(h,205),f.setUint16(h+1,c),3;if(4294967296>c)return f.setUint8(h,206),f.setUint32(h+1,c),5;throw Error("Number too big 0x"+c.toString(16));}if(-32<=c)return f.setInt8(h,c),1;if(-128<=c)return f.setUint8(h,208),f.setInt8(h+1,c),2;if(-32768<=c)return f.setUint8(h,209),f.setInt16(h+1,c),3;if(-2147483648<=c)return f.setUint8(h,210),f.setInt32(h+1,c),5;throw Error("Number too small -0x"+ (-c).toString(16).substr(1));}if("undefined"===k)return f.setUint8(h,212),f.setUint8(h+1,0),f.setUint8(h+2,0),3;if(null===c)return f.setUint8(h,192),1;if("boolean"===k)return f.setUint8(h,c?195:194),1;if("object"===k){var k=0,s=Array.isArray(c);if(s)q=c.length;else var u=Object.keys(c),q=u.length;16>q?(f.setUint8(h,q|(s?144:128)),k=1):65536>q?(f.setUint8(h,s?220:222),f.setUint16(h+1,q),k=3):4294967296>q&&(f.setUint8(h,s?221:223),f.setUint32(h+1,q),k=5);if(s)for(s=0;s<q;s++)k+=g(c[s],f,h+k);else for(s= 0;s<q;s++)var t=u[s],k=k+g(t,f,h+k),k=k+g(c[t],f,h+k);return k}throw Error("Unknown type "+k);}function h(a){var b=typeof a;if("string"===b){var c=d(a);if(32>c)return 1+c;if(256>c)return 2+c;if(65536>c)return 3+c;if(4294967296>c)return 5+c}if(a instanceof ArrayBuffer){c=a.byteLength;if(256>c)return 2+c;if(65536>c)return 3+c;if(4294967296>c)return 5+c}if("number"===b){if(a<<0!==a)return 9;if(0<=a){if(128>a)return 1;if(256>a)return 2;if(65536>a)return 3;if(4294967296>a)return 5;if(1.8446744073709552E19> a)return 9;throw Error("Number too big 0x"+a.toString(16));}if(-32<=a)return 1;if(-128<=a)return 2;if(-32768<=a)return 3;if(-2147483648<=a)return 5;if(-9223372036854775E3<=a)return 9;throw Error("Number too small -0x"+a.toString(16).substr(1));}if("undefined"===b)return 3;if("boolean"===b||null===a)return 1;if("object"===b){b=0;if(Array.isArray(a))for(var c=a.length,f=0;f<c;f++)b+=h(a[f]);else for(var g=Object.keys(a),c=g.length,f=0;f<c;f++)var k=g[f],b=b+(h(k)+h(a[k]));if(16>c)return 1+b;if(65536> c)return 3+b;if(4294967296>c)return 5+b;throw Error("Array or object too long 0x"+c.toString(16));}throw Error("Unknown type "+b);}var k={E5:function(a){if(void 0===a)return"undefined";var b,c;a instanceof ArrayBuffer?(c="ArrayBuffer",b=new DataView(a)):a instanceof DataView&&(c="DataView",b=a);if(!b)return JSON.stringify(a);for(var d=[],f=0;f<a.byteLength;f++){if(20<f){d.push("...");break}var g=b.getUint8(f).toString(16);1===g.length&&(g="0"+g);d.push(g)}return"<"+c+" "+d.join(" ")+">"}};k.j7=a; k.i7=c;k.h7=d;k.pq=function(a){var b=new ArrayBuffer(h(a)),c=new DataView(b);g(a,c,0);return b};k.Bf=function(a){var b=new DataView(a),b=new f(b),c=b.parse();if(b.offset!==a.byteLength)throw Error(a.byteLength-b.offset+" trailing bytes");return c};f.prototype.map=function(a){for(var b={},c=0;c<a;c++){var d=this.parse();b[d]=this.parse()}return b};f.prototype.$y=function(a){var b=new ArrayBuffer(a);(new Uint8Array(b)).set(new Uint8Array(this.view.buffer,this.offset,a),0);this.offset+=a;return b};f.prototype.mv= function(a){var b=c(this.view,this.offset,a);this.offset+=a;return b};f.prototype.Ry=function(a){for(var b=Array(a),c=0;c<a;c++)b[c]=this.parse();return b};f.prototype.parse=function(){var a=this.view.getUint8(this.offset);if(160===(a&224))return this.offset++,this.mv(a&31);if(128===(a&240))return this.offset++,this.map(a&15);if(144===(a&240))return this.offset++,this.Ry(a&15);if(0===(a&128))return this.offset++,a;if(224===(a&224))return a=this.view.getInt8(this.offset),this.offset++,a;if(212===a&& 0===this.view.getUint8(this.offset+1))this.offset+=3;else{switch(a){case 217:return a=this.view.getUint8(this.offset+1),this.offset+=2,this.mv(a);case 218:return a=this.view.getUint16(this.offset+1),this.offset+=3,this.mv(a);case 219:return a=this.view.getUint32(this.offset+1),this.offset+=5,this.mv(a);case 196:return a=this.view.getUint8(this.offset+1),this.offset+=2,this.$y(a);case 197:return a=this.view.getUint16(this.offset+1),this.offset+=3,this.$y(a);case 198:return a=this.view.getUint32(this.offset+ 1),this.offset+=5,this.$y(a);case 192:return this.offset++,null;case 194:return this.offset++,!1;case 195:return this.offset++,!0;case 204:return a=this.view.getUint8(this.offset+1),this.offset+=2,a;case 205:return a=this.view.getUint16(this.offset+1),this.offset+=3,a;case 206:return a=this.view.getUint32(this.offset+1),this.offset+=5,a;case 207:var a=this.view.getUint32(this.offset+1),b=this.view.getUint32(this.offset+5);this.offset+=9;return 4294967296*a+b;case 208:return a=this.view.getInt8(this.offset+ 1),this.offset+=2,a;case 209:return a=this.view.getInt16(this.offset+1),this.offset+=3,a;case 210:return a=this.view.getInt32(this.offset+1),this.offset+=5,a;case 211:return a=this.view.getInt32(this.offset+1),b=this.view.getUint32(this.offset+5),this.offset+=9,4294967296*a+b;case 222:return a=this.view.getUint16(this.offset+1),this.offset+=3,this.map(a);case 223:return a=this.view.getUint32(this.offset+1),this.offset+=5,this.map(a);case 220:return a=this.view.getUint16(this.offset+1),this.offset+= 3,this.Ry(a);case 221:return a=this.view.getUint32(this.offset+1),this.offset+=5,this.Ry(a);case 202:return a=this.view.getFloat32(this.offset+1),this.offset+=5,a;case 203:return a=this.view.getFloat64(this.offset+1),this.offset+=9,a}throw Error("Unknown type 0x"+a.toString(16));}};return{pq:function(a,b){b(null,{Rn:a.Rn,Tc:a.Tc,Jb:k.pq(a.Jb)})},Bf:function(a,b){b(null,{Rn:a.Rn,Tc:a.Tc,Jb:k.Bf(a.Jb)})}}},{hostWorker:a.Bq,clientId:"msg",lazy:!0}):new a.Sr(function(){},{hostWorker:a.Bq,clientId:"msg", lazy:!0})})(W);W.iO=W.W.extend({ta:[W.da],D:function(){this.$U=W.q.sN+"://"+W.q.xr;this.Vi=[];this.Ph=W.g.zb(this);this.ZO=1;this.Rb="closed";this.count=0;this.PB=[];W.event.U(window,"beforeunload",this.RZ,this);W.Zl&&W.Zl.wn()},RZ:function(){this.PB.length&&new W.qa.Ca(W.q.vc+"://webapi.amap.com/count?"+["type=v","k="+W.q.key,"u="+W.q.ql,"m="+(W.j.V?1:0),"pf="+W.j.ar,"frq="+this.PB.join(",")].join("&"))},close:function(){this.ub&&(this.Rb="closed",this.Vi=[],this.Qw())},VW:function(){var a=this;if("closed"===a.Rb){var b= new WebSocket(this.$U);b.binaryType="arraybuffer";a.Rb="connecting";b.onopen=W.g.bind(this.dT,this);b.onclose=W.g.bind(this.KS,this);b.onerror=W.g.bind(this.ab,this);b.ontimeout=W.g.bind(this.ab,this);b.onmessage=W.g.bind(this.mT,this);this.ub=b;b.XW=setTimeout(function(){b.readyState!==WebSocket.OPEN&&a.Xq()},1200)}},qK:function(){return"connected"===this.Rb},Xq:function(){this.Rb="unsupport";this.Vi=[];this.Qw();this.w("disable")},ab:function(){this.Xq()},dT:function(){this.WW=!0;this.flush();this.w("open")}, KS:function(){this.WW?(this.Rb="closed",this.Qw()):this.Xq()},YF:function(a,b){if("unsupport"===this.Rb)return!1;"connected"===this.Rb?this.eH(a):("closed"===this.Rb&&this.VW(),this.Vi.push({data:a,kr:b}));this.count+=1},SS:function(a){if("ack"===a.type)switch(a.command){case "tiles":this.w("ack",a);break;case "retain":this.Rb="connected";this.flush();break;case "close":this.Xq()}else 0===a.content.errcode&&("tiles"===a.type?this.w("tiles",a):"traffic"===a.type&&this.w("traffic",a))},y_:function(a){"encode"=== a.Tc?this.YF(a.Jb):"decode"===a.Tc&&this.SS(a.Jb)},send:function(a){var b=this.ZO++,c=this;W.Zl.pq({Tc:"encode",Jb:a,Rn:this.Ph},function(a,f){a||c.YF(f.Jb,b)});return b},eH:function(a){var b=this,c=b.ub;c.readyState==WebSocket.OPEN&&(c.send(a),b.Eo&&clearTimeout(b.Eo),b.Eo=setTimeout(function(){b.Xq();b.Eo=null},5E3),b.zC&&clearTimeout(b.zC),b.zC=setTimeout(function(){b.close();b.zC=null},1E4))},Qw:function(){var a=this.ub;a&&(clearTimeout(a.XW),a.onopen=a.onmessage=a.onerror=null,a.close(),this.ub= null)},flush:function(){if("connected"===this.Rb){for(var a=0;a<this.Vi.length;a+=1)this.eH(this.Vi[a].data);this.Vi=[]}},PX:function(a){for(var b=0;b<this.Vi.length;b+=1)if(this.Vi[b].kr===a)return this.Vi.splice(b,1),!0;return!1},mT:function(a){this.Eo&&(clearTimeout(this.Eo),this.Eo=null);var b=this;W.Zl.mt([a.data]);W.Zl.Bf({Rn:b.Ph,Tc:"decode",Jb:a.data},function(a,d){a||b.y_(d)})}});W.li={lN:function(){0===W.Aa.Mc&&W.li.ZJ()},g7:function(a,b){if(!a)return!1;for(var c=0,d=a.length;c<d;c++)if(a[c]&&a[c].Bo===b)return!0},JW:function(a,b){var c="limg-"+a.key+"-"+b.r.Ph;W.Aa[c]&&delete W.Aa[c]},kY:function(a){return W.Aa[a.Bo?a.Bo:a]},Wl:function(a){var b=null,c=null,d=!1;a.Bo?(b=a,c=b.Bo,(a=b.url)&&(d=!0)):c=a;var f=W.Aa[c];d&&f&&f.src!==a&&(f=W.Aa[c]=null);if(!f&&a){d="data:"===a.substr(0,5);f=document.createElement("img");d||(f.crossOrigin="Anonymous");W.Aa[c]=f;f.loaded=!1;W.Aa.Mc+= 1;W.B.e(f,"load",this.eu,this);W.B.e(f,"error",this.YJ,this);var g=this;f.wo=setTimeout(function(){f.loaded||g.ZJ()},300);f.src=a;b&&(f.e4=c,b.url=null)}},ZJ:function(){for(var a=0;a<W.Aa.Jk.length;a+=1)W.Aa.Jk[a].set("display")},rI:function(a){W.B.F(a,"load",this.eu,this);W.B.F(a,"error",this.YJ,this)},eu:function(a){a=a.target;a.loaded=!0;W.Aa.Mc-=1;this.rI(a);this.lN();a.wo&&(clearTimeout(a.wo),a.wo=null)},YJ:function(a){a=a.target;a.loaded=!1;W.Aa.Mc-=1;this.rI(a);this.lN();a.wo&&(clearTimeout(a.wo), a.wo=null)}};W.T.Lg=W.T.Pf.extend({D:function(a,b){W.Aa.Jk.push(this);this.Ph=W.g.vJ("layer");this.Bb=2;a.get("textRatio");this.OC=25;this.P("tiles",a);this.z2=a.get("vdataUrl")||b.na.get("vdataUrl")||W.q.xr;this.qi=!0;this.Pa=a;this.Mg=W.j.V?!1:!0;this.l=b;this.Nh=this.Mh=!0;this.Ad("zoom center crs centerCoords resolution coordsBound styleID iconsID businessIconsID forceBig mode display".split(" "),b);this.Ad("zooms detectRetina visible zIndex textIndex watermark opacity".split(" "),a);this.P("lang",b,!0);this.get("watermark")&& (this.Go=new Image,this.Go.src=this.get("watermark"));this.Na={};this.Ef={};this.hd=256;this.$l=[];this.rf=this.jg=0;this.oa=W.j.oa&&this.get("detectRetina");this.hd=256*(this.oa?2:1);this.P("mapStyle",b);this.P("style",b);this.aj=0;this.P("features",b);this.Cn=this.get("crs");this.Kf=18;this.P("reload",a)},mapStyleChanged:function(){this.get("mapStyle");this.lm=!1;if(this.l.get("styleUrl")||"normal"==this.get("mapStyle"))this.lm=!!this.l.get("showBuildingBlock");this.featuresChanged()},featuresChanged:function(){this.set("reload")}, langChanged:function(){this.set("reload");this.Pa.hm()},lV:function(){var a=!1,b=this.TE();if(b){if(this.Ue){var c="active"===this.Ue.mp;b.vw(this.Ue);c&&(b.Rm(this.Ue,"active"),a=!0)}W.j.FW&&!a&&b.Dy()}},gw:function(){this.lV()},vr:function(a,b){var c=!0;if("hotspotout"===a)this.l.na.set("optimalCursor",null);else if("hotspotover"===a)this.l.na.set("optimalCursor","pointer");else if("mouseup"===a||"mousedown"===a)c=!1;var d=this.TE();if(d)switch(a){case "hotspotout":d.Ly(b);break;case "hotspotover":d.Rm(b, "hover");break;case "mouseup":d.Rm(b,"hoverup");break;case "mousedown":d.Rm(b,"active")}c&&(c=b.Ka,c=new W.L(c[0],c[1]),c=this.l.df(c,3),this.l.na.w(a,{name:b.name,lnglat:c,id:b.Zq,isIndoorPOI:b.wK}))},TE:function(){if(!W.j.cZ){if(!this.K)return null;var a=this.l?this.l.na.get("hotspotOptions"):{},a=W.extend({},a);if(a.disableHighlight)return null;this.Mp||(this.Mp=new W.T.Lg.kO(this.K));return this.Mp}},Ej:function(a){(a=this.DJ(a))&&this.vr("hotspotclick",a)},$m:function(a){if(!this.l.Og||"mousemove"!== a.type){var b=this.DJ(a);switch(a.type){case "mousemove":b&&this.Ue!==b&&(this.Ue&&this.vr("hotspotout",this.Ue),this.vr("hotspotover",b));!b&&this.Ue&&this.vr("hotspotout",this.Ue);break;case "mouseup":case "mousedown":b&&this.vr(a.type,b)}this.Ue=b}},textIndexChanged:function(){this.set("display")},A_:function(){this.l.e("click",this.Ej,this);this.l.e("mousemove",this.$m,this);this.l.e("mousedown",this.$m,this);this.l.e("mouseup",this.$m,this)},lz:function(){this.l.F("click",this.Ej,this);this.l.F("mousemove", this.$m,this);this.l.F("mousedown",this.$m,this);this.l.F("mouseup",this.$m,this)},ii:function(){return null},ik:function(){return{qi:!0,hd:256,visible:this.get("visible"),A:this.Yt(),$c:this.get("zooms"),rt:this.Mg&&this.cb,Mh:!this.l.uv,Nh:!this.l.uv,opacity:this.get("opacity"),Sc:!1}},ai:function(a){if(W.K.canvas.Lg)return new W.K.canvas.Lg(this,a)},ut:function(a){0==a.indexOf("amap://styles/")&&(a="normal");var b=this.get("forceBig")||W.j.V&&!this.oa?"6":"5";this.url=W.q.vc+"://"+this.z2+"/tiles?mapType="+ a+"&v=2&style="+b;this.url+=this.oa?"&rd=2":"&rd=1";this.url+="&flds="+this.va;this.url+="&t="},styleChanged:function(){this.l.Jc||this.featuresChanged()}}); W.T.Md=W.T.Lg.extend({ai:function(a){var b=this;if(!b.Go&&W.j.Vn&&"vw"===b.l.get("baseRender")){var c=["wgl"];this.l.Jc&&c.push("wgl2");if(W.Ra.lu(c))return new W.K.Pe.Md(b,a)}else if(c=["cmng","cgl"],this.l.Jc&&c.push("cgl2"),W.Ra.lu(c))return new W.K.canvas.Md(b,a);W.Ra.of(c,function(){b.set("display")})},featuresChanged:function(){var a=this.get("features"),b=[];"all"===a?b=["region","building","road"]:a&&(-1!==W.g.indexOf(a,"bg")&&b.push("region"),-1!==W.g.indexOf(a,"building")&&b.push("building"), -1!==W.g.indexOf(a,"road")&&b.push("road"));this.va=b;this.ut(this.get("mapStyle")||"normal");this.set("reload")}}); W.T.ng=W.T.Lg.extend({ai:function(a){var b=this;if(this.gK()){if(this.Av=!0,W.K.canvas.lD)return this.hW(),a=new W.K.canvas.lD(this,a),a.e("afterLabelRender",this.gw,this),a}else{b.Av=!1;if(W.K.canvas.kD)return a=new W.K.canvas.kD(this,a),a.e("afterLabelRender",this.gw,this),a;a=["cmng","labelcanvas"];W.j.Cz&&a.push("labelDir");W.Ra.of(a,function(){b.set("display")})}},gK:function(){var a=this.get("mapStyle");return"normal"!==a&&"amap://styles/normal"!==a||this.l.get("nolimg")?!1:W.j.Av?!0:!1},iZ:function(){var a= this.get("mapStyle");return"normal"!==a&&"amap://styles/normal"!==a||this.l.get("nolimg")||W.j.Sc||W.j.V?!1:!0},featuresChanged:function(){var a=this.get("features"),b=this.get("mapStyle"),c=[];"all"===a?c=["roadlabel","poilabel"]:a&&(-1!==W.g.indexOf(a,"road")&&c.push("roadlabel"),-1!==W.g.indexOf(a,"point")&&c.push("poilabel"));a=this.gK();c.length&&(a||this.iZ())&&c.unshift("limg");this.va=c;this.ut(b);this.set("reload");this.K&&a^this.Av&&(this.Mp&&(this.Mp=this.Mp.K=null),this.K.F("afterLabelRender", this.gw,this),this.K.KI(),this.K=null)},hW:function(){this.Ul=W.q.vc+"://"+(this.Pa.get("vdataUrl")||this.l.na.get("vdataUrl")||W.q.xr)+"/limg?";var a=this.oa?2:1;this.Ul+="&font="+(W.j.V&&!this.oa?"big":"small");this.Ul+="&scl="+a;this.Ul+="&t="},DJ:function(a){return(a=this.tJ(this.l.mb(a.Ke,20),!0))?a[0]:null},tJ:function(a,b){var c=this.l.qk.Zt(this);if(c)return c.vq(a,b)}});W.T.Lg.kO=W.W.extend({D:function(a){this.QU(a)},QU:function(a){this.K=a},Ly:function(a){if(a.mp){a.mp=!1;var b=this.K;b&&b.Ly.apply(b,arguments)}},vw:function(a){a.mp=!1;var b=this.K;b&&b.vw.apply(b,arguments)},Rm:function(a,b){b||(console.warn("hlStyle is required, e.g. hover, active.."),b="hover");if(a.mp!==b){a.mp=b;var c=this.K;c&&c.Rm.apply(c,arguments)}},Dy:function(){var a=this.K;a&&a.Dy()}});W.Uv={pw:function(a,b){this.Od={};this.Od.Rn=W.g.zb(this.Od);b.ub||(b.ub=new W.iO);this.ub=b.ub;this.ub.e("tiles",this.nL,this);this.ub.e("ack",this.mL,this);this.ub.e("disable",this.kL,this);this.P("mapStyle",a,!0)},rL:function(a){if(this.r&&a.GK===this.r.Ph){var b=this.r.va,b=b[b.length],c=null,c="poilabel"==b||"roadlabel"==b?"labels":"allbase";this.Jd||this.gg?this.FB([this.r,"groupcomplete",null,null,c]):(this.lh(),this.bn.Ht(this.r,"groupcomplete",null,null,c));b=0;for(c=a.Fg.length;b<c;b+=1)this.iB(a.Fg[b], a.pu,a.ir,a.V)}},iB:function(a,b){var c=a.Tc,d=this.Na.get(a.lC);if(d){var f=this.r.va;d.va||(d.Lb={});d.va||(d.va=[]);var g="";this.l.sj&&!this.l.Jc&&this.jJ(c,a.Jb);"poilabel"===c||"roadlabel"===c?(a.ti||(g=a.Jb,a.ti=null),d.va.push.apply(d.va,a.Jb),c===this.r.va[this.r.va.length-1]&&(d.ti=null)):d.Lb[c]=a.Jb;"building"!==c&&"poilabel"!==c||!a.Sl||d.Tf||(d.Tf={},d.Tf.cd=a.Sl,W.zm&&W.zm.w("vecTileParsed.buildings",{qv:d}));if("roadlabel"!==c&&"poilabel"!==c||!W.j.Cz&&!this.l.Jc)this.Jd||this.gg? this.FB([this.r,g,d,b,c]):(this.lh(),this.bn.Ht(this.r,g,d,b,c));c===f[f.length-1]&&(c="roadlabel"===c||"poilabel"===c?"labels":"allbase",this.Jd||this.gg?this.FB([this.r,"tileComplete",d,b,c]):(this.lh(),this.bn.Ht(this.r,"tileComplete",d,b,c)))}},nI:function(){if(this.ub&&"unsupport"!==this.ub.Rb){var a={command:"status",payload:{mapType:this.get("mapStyle"),style:W.j.V&&!this.r.oa?"6":"5",rd:this.r.oa?2:1}};this.ub.send(a)}},mapStyleChanged:function(){this.nI()},kL:function(){for(var a in this.Od)this.Od.hasOwnProperty(a)&& this.Od[a].rv&&(this.bp(this.Od[a].rv,this.Od[a].si),delete this.Od[a]);this.ub=null;this.zi("mapStyle");this.set("display",1)},mL:function(a){var b=a.reqId;this.Od[b]&&(!a.content.status&&this.Od[b]&&this.bp(this.Od[b].rv,this.Od[b].si),delete this.Od[b])},nL:function(a){if(this.Od[a.reqId]){var b=a.content.opt;b===this.qc?this.hB(a.content.data,b):this.bp(this.Od[a.reqId].rv,this.Od[a.reqId].si)}},LZ:function(a,b){if(a.length){var c=1,d=[];18<b&&(c=Math.pow(2,b-18));for(var f=this.r.Cn.hi(a[0].Ga.z), g=0;g<a.length;g+=1){var h=a[g],k=h.Ga;h.si=b;k.O=f;if(18<b&&!this.lk){for(var l=0;l<c;l+=1)for(var m=0;m<c;m+=1){var n=new W.Rf(new W.Hh(b,c*k.x+l,c*k.y+m));this.Na.Ac(n.key)||(this.Na.set(n.key,n),n.status="loading")}this.Na.set(h.key+"/"+b,h)}else{this.Na.set(h.key,h);if(this.lk&&10>k.z&&this.gY(h)){this.set("display",0);continue}h.status="loading"}h=k.x;l=k.y;k=k.z;10>k&&(m=Math.pow(2,k),h>=m||0>h)&&(h=(h+m)%m);d.push(W.g.Ez(h,l,k).join(","))}d.length&&(!this.Qq&&this.ub&&"unsupport"!==this.ub.Rb? (1>this.ub.count||3<this.yy?this.PA(a,b,d):(2!==this.ub.count&&"connected"===this.ub.Rb||this.nI(),this.KZ(a,b,d)),this.ub.count+=1,this.ub.FK&&this.ub.PB.push(Math.ceil((new Date-this.ub.FK)/1E3)),this.ub.FK=new Date):this.PA(a,b,d))}},KZ:function(a,b,c){var d=(new Date).getTime()+"-"+(this.ub.count+1&65535),f={command:"tiles",reqId:d,payload:{t:c,opt:b,cs:{level:b,flds:this.r.va.join(",")}}},g;if(!this.ub.qK()){var h=this;setTimeout(function(){h.ub&&!h.ub.qK()&&(h.yy?h.yy++:h.yy=1,h.ub.PX(g)&&(delete h.Od[d], h.PA(a,b,c)))},300)}g=this.ub.send(f);this.Od[d]={rv:a,si:b}},kB:function(a){a.cb||(a.status="",a.cb=void 0,a.wa=null,a.dc=null,a.pc&&(a.pc.dc=null,a.pc.pc=null,a.pc=null),this.Na.um(a.key))},lX:function(a){a=a.split(";");for(var b=0,c=a.length;b<c;b+=1){a[b]=a[b].split(",");for(var d=0,f=a[b].length;d<f;d+=1)a[b][d]=parseInt(a[b][d],36)}return a},hB:function(a,b,c){if(this.r){for(var d=[],f=0,g=a.length;f<g;f+=1){var h=a[f];h&&(c&&(h=JSON.parse(h)),h["x-vd-v"]?(this.jq=h["x-vd-v"],this.uA=h.tv,h.bgc&& (h="#"+h.bgc.substring(2),this.l.pg!==h&&(this.l.pg=h))):this.gB(h,b,d))}if(d.length){var k=this;a=null;var l;this.lk?(a=W.J2,l=a.zB):(a=W.Bq,l=this.Qq?a["label:parseLabel"]:a["base:parseData"]);var m=k.r.get("iconsID"),n=k.r.get("businessIconsID"),p=k.r.get("mode");(function(){l({GK:k.r.Ph,pu:b,mode:p,A5:m,r4:n,ir:k.r.get("forceBig")?!1:k.r.oa,nM:k.r.get("forceBig")?1:k.r.Bb,V:k.r.get("forceBig")||W.j.V,vt:W.q.vt||null,Fg:d,d0:W.q.vc,kW:k.r.lm,jq:k.jq,uA:k.uA},function(a,b){if(k.r)if(a)console.log(a); else{var c=b.icons;if(c)for(var d=0;d<c.length;d+=1)W.li.Wl(c[d]);b.data&&k.rL(b.data)}})})()}}},gB:function(a,b,c){function d(d,f,g){f=[g,d,f].join("/");18<b&&!l.lk&&(f+="/"+b);if((d=l.Na.get(f))&&"loaded"!==d.status)if(l.bN(d,p)){if(-1!==n.indexOf(m))if("limg"===m){if(f=a[1],d.ti=f,"string"===typeof f.b&&(f.b=l.lX(f.b)),g="",g="object"===typeof f.u?f.u.url:f.u)d={url:g,Bo:"limg-"+d.key+"-"+l.r.Ph},f.u=d,W.li.Wl(d,!0)}else{f={nm:d.Ga,lC:f,Jb:a,Tc:m,ZH:l.l.pg,rZ:"building"===m,Un:"poilabel"===m|| "roadlabel"===m||"building"===m&&l.r.lm};if("poilabel"===m||"roadlabel"===m)f.ti=d.ti;m===n[n.length-1]&&(d.status="loaded");c.push(f)}}else l.ZB(b,d,p,W.g.bind(l.kB,l)),18<b&&l.Na.um(f)}var f=a[0].split("-"),g=parseInt(f[1]),h=parseInt(f[2]),k=parseInt(f[0]),l=this,m=f[3],n=this.r.va,p=18<b?Math.pow(2,b-18):1,f=Math.ceil(l.ig.Mu/2),q=Math.pow(2,k);10>k&&(g<=f&&d(g+q,h,k),g>=q-f&&d(g-q,h,k));d(g,h,k)},FB:function(a){this.ml||(this.ml=[]);this.ml.push(a)},lh:function(){if(this.ml&&this.ml.length){for(var a= 0,b=this.ml.length;a<b;a+=1)this.bn.Ht.apply(this.bn,this.ml[a]);this.ml=[]}},bp:function(a,b,c){c||(c=18<b?Math.pow(2,b-18):1);for(var d=0;d<a.length;d+=1){var f=a[d];this.ZB(b,f,c,W.g.bind(this.kB,this));18<b&&this.Na.um(f.key+"/"+b)}},oJ:function(a,b){return this.r.url+b.join(";")+"&lv="+a},PA:function(a,b,c){function d(c,d){if(b!==h.qc)h.bp(a,b,k),f.qE=!0,f.startTime||(f.onreadystatechange="");else{var g=c.split("|");g[0]=d+g[0];var l=g,s="";g[g.length-1]&&(s=g[g.length-1],l=g.splice(0,g.length- 1));h.hB(l,b,!0);return s}}var f=new XMLHttpRequest;c=this.oJ(b,c,a);var g=0,h=this;f.Ku="";var k=18<b?Math.pow(2,b-18):1,l="rb";if(/\\/limg/.test(c)||/flds=[^&]+label/.test(c))l="rl";f.onreadystatechange=function(){if(h.r)if(3===f.readyState){if(!f.qE){var c=f.responseText.substring(g);f.Ku=d(c,f.Ku);g=f.responseText.length;f.bE=!0}}else 4===f.readyState&&(W.ae.Te.end({key:l,index:0,id:h.l.na.id}),f.qE||(c=f.responseText.substring(g),h.Qq&&(c+="|"),d(c,f.Ku),f.Ku="",f.bE=!0),f.startTime&&W.ae.Te.push({id:h.l.na.id, key:"ds",Ik:f.responseText.length/2}),f.bE||h.bp(a,b,k))};f.onerror=function(){};this.YY||(this.YY=1);f.open("GET",c,!0);f.send()},bN:function(a,b){var c=this.Br||this.ig,d=a.Ga.x,f=a.Ga.y;return d>Math.floor(c.Xd/b)||d<Math.floor(c.pe/b)||f>Math.floor(c.pd/b)||f<Math.floor(c.gd/b)?!1:!0},ZB:function(a,b,c,d){if(18<a){b=b.Ga;for(var f=0;f<c;f+=1)for(var g=0;g<c;g+=1){var h=new W.Hh(a,c*b.x+f,c*b.y+g)+"";(h=this.Na.get(h))&&d(h)}}else d(b),b.pc&&d(b.pc)}};W.K.canvas.ng=W.K.Kg.extend({ta:[W.Uv],D:function(a,b){arguments.callee.bb.apply(this,arguments);this.Ph=W.g.zb(this);this.Fm=300;this.Kf=a.Kf;this.Qq=this.qi=!0;this.kn=1;var c=this;this.eF=function(){c.i_=!0;c.set("display",0)};this.ne()},Lw:function(a){W.li.JW(a,this);var b=W.K.canvas.ng.ye.Lw;b&&b.apply(this,arguments)},ne:function(){this.Sg=document.createElement("canvas");this.Sg.className="amap-labels";this.Sg.draggable=!1;this.Sg.xK=!0;this.sg=this.Sg.getContext("2d");this.Fq=[];this.Tq=[]; this.Cg=this.r.oa?16:8},im:function(a){var b=Math.pow(2,a.pa.zoom-this.Hc),c=this.r.oa?this.r.Bb:1,d=a.pa.Fa.Qa(this.mk).Eb(this.Bc);this.transform={translate:this.transform.translate.add(d.Gc(c)),scale:b/c,rotate:0};this.Fa=a.pa.Fa},po:function(a,b){if(!this.ka||3E4<Math.abs(this.Fa.x-this.ka.x)/this.O||3E4<Math.abs(this.Fa.y-this.ka.y)/this.O)this.ka=this.Fa;this.qd=this.Hc;this.Lf=this.Bc;this.rj=!1;this.currentTime=+new Date;this.vC=b.vC;this.fc=[this.ra.eb.x,this.ra.eb.y];this.Mg=b.rt;var c= this.rr;this.Jd=this.zoom<<0!==this.zoom;var d=this.Fa.Qa(this.ka);d.x<-W.g.Za/2&&(d.x+=W.g.Za);d.x>W.g.Za/2&&(d.x-=W.g.Za);this.ez=d.Eb(this.Bc);for(j=c.length-1;0<=j;j-=1)if(d=c[j],d.length){var f=d[0].Ga.z,g=!1;!1===a.WV||!d.Xi||W.Aa.Mc||!(f<=this.zoom&&"in"==this.lB||f>=this.zoom&&"out"==this.lB)&&this.lB||this.labels&&this.labels.length&&!a.uh&&this.IB(this.labels.qr,this.ig)||(g=!0,this.labels&&this.labels.th?(this.nk=this.labels.th,this.nk.zoom=this.labels.zoom):(this.nk=[],this.nk.zoom=null), this.labels=[],this.labels.zoom=f,this.labels.qr=this.ig);if(g){for(f=d.length-1;0<=f;f-=1){var h=d[f],g=!1,k=h.va;!k&&h.pc&&h.pc.va&&(k=h.pc.va,g=!0);if(k){for(var h=0,l=k.length;h<l;h+=1)k[h].reverse=g;Array.prototype.push.apply(this.labels,k)}}this.labels.sort(function(a,b){return a.xk>b.xk?-1:a.le>=b.le?-1:1})}}this.yW(a)&&this.A0(a);this.i_=!1;this.Uc(a);this.Xi&&!this.r.cb&&(c=this.r,W.ae.Te.end({id:this.l.na.id,key:"rl",index:2}),c.cb=!0,c.kf?c.la("renderComplete"):(c.kf=!0,c.la("complete")))}, se:function(a,b){this.Jo=a.Jo;this.Ju(a,b);this.Jd||this.lh();this.mk&&(a.hN||a.nC&&W.j.xg||a.gg&&!a.Jd&&a.aW)?this.im(a,b):this.po(a,b);this.mk=this.Fa;this.cj=this.labels;this.rj&&this.set("display",0)},Uc:function(a){var b=this.Fa.Qa(this.ka);b.x<-W.g.Za/2&&(b.x+=W.g.Za);b.x>W.g.Za/2&&(b.x-=W.g.Za);this.transform={translate:new W.L(a.ra.hb.x*(this.r.oa?this.r.Bb:1),a.ra.hb.y*(this.r.oa?this.r.Bb:1)),scale:1/(this.r.oa?this.r.Bb:1),rotate:0}},IB:function(a,b){return a.gd===b.gd&&a.pe===b.pe&&a.pd=== b.pd&&a.Xd===b.Xd},vq:function(a,b){var c;if(this.zoom){var d=a.Eb(Math.pow(2,20-this.zoom));this.labels&&(c=this.zY(d,b))&&(c.wK=!1);!c&&this.Fb&&(c=this.yY(d))&&(c.wK=!0)}return c?[c]:[]},zY:function(a,b){for(var c=a.x,d=a.y,f=this.labels.th||this.labels,g=f.length-1;0<=g;g-=1){var h=f[g],k=h.Ka[0]/this.O,l=h.Ka[1]/this.O;if((h.Zq||!b)&&this.sK(h,c,d,k,l))return h}},yY:function(a){var b=a.x;a=a.y;for(var c=this.Fb.length-1;0<=c;c-=1){var d=this.Fb[c],f=d.Ka[0]/this.O,g=d.Ka[1]/this.O;if(d.Zq&&this.sK(d, b,a,f,g))return d}},sK:function(a,b,c,d,f){for(var g=0;g<a.lb.length;g+=1){var h=a.lb[g][2],k=a.lb[g][3],l=a.lb[g][0],m=a.lb[g][1];this.r.oa&&(h/=this.r.Bb,k/=this.r.Bb,l/=this.r.Bb,m/=this.r.Bb);if(b>=d+l-1&&b<=d+l+h+1&&c>=f+m-1&&c<=f+m+k+1)return!0}return!1},reloadChanged:function(){this.r&&(this.r.cb=!1);this.Na.clear();this.labels=[];this.Fq=[];this.Tq=[];this.pb&&this.pb.parentNode&&this.pb.parentNode.removeChild(this.pb);this.Sg&&this.Sg.parentNode&&this.Sg.parentNode.removeChild(this.Sg);this.set("display")}, Gf:function(){return this.Sg},jJ:function(a,b){if("roadlabel"==a||"poilabel"==a)for(var c=0;c<b.length;c+=1){var d=b[c];if(d.Db){var f=strokeColor=haloColor="";if(d.Yc){var g=d.Yc[0],f=g[3];strokeColor=g[4];haloColor=d.Tn?"":g[7]}if(f=this.Mb.Wt&&this.Mb.Wt(f,strokeColor,haloColor,d.Db))d.visible=f[4],d.mm=f[3];if(d.Yc)for(g=0;g<d.Yc.length;g+=1){var h=d.Yc[g];h[3]=f[0];h[4]=f[1];h[7]=f[2]}}}}});W.K.canvas.lD=W.K.canvas.ng.extend({oJ:function(a,b){return this.r.Ul+b.join(";")+"&lv="+a},hB:function(a,b){if(this.r){for(var c=[],d=0,f=a.length;d<f;d+=1){var g=a[d];g&&(g=JSON.parse(g),g["x-vd-v"]?this.jq=g["x-vd-v"]:this.gB(g,b,c,this.jq||"v4"))}this.set("display")}},OL:function(a,b){var c=0,d=0,f=1,c=256*b.x,d=256*b.y,f=b.O;return[(c+a[0])*f,(d+a[1])*f]},gB:function(a,b,c,d){function f(c,f,k){if(c=n.Na.get([k,c,f].join("/"))){f=c.Ga;var l=W.q.vc+"://vdata.amap.com/icons/"+(g||h?"b":"n")+(10> f.z?"39":"18")+"/1/";if(c&&"loaded"!==c.status)if(n.bN(c,s)){if(-1!==q.indexOf(p))if("limg"===p)a[1]&&(c.ti={url:"data:image/png;base64,"+a[1],Bo:"limg-"+c.key+"-"+n.r.Ph},W.li.Wl(c.ti,!0));else{if("roadlabel"===p)for(var m=1;m<a.length;m+=1){var t=a[m];t.pv=t[0];var C=W.g.rC(t[1]);if(!(0>C[0]||256<=C[0]||0>C[1]||256<=C[1])){var Q=n.OL(C,f),C={Ka:Q,name:t[0],Tn:!0,wk:C,Aa:[],lb:[],visible:!0,mm:!0},S=C.name;C.jr=15>t[2]%90||75<t[2]%90?90*Math.floor((t[2]+15)/90):t[2];var Q=t[3],T=Q[2];k=Q[3];var O= -Math.floor(k/2);if(t[4])if("v5"==d){var w=t[5].split(":"),x=w[1],x=parseInt(x)-1,w=W.q.vc+"://vdata.amap.com/style_icon/icon-normal-"+(g||h?"big":"small")+".png";W.li.Wl(w);C.Aa.push(w);var w=Math.floor(x/10),I=x%10,D=gridSize=0,z=0;h?(D=48,z=gridSize=40):g?(D=gridSize=40,z=36):(D=gridSize=24,z=20);var A=D*Math.max(T+2,z)/z,w=[-A/2,-D/2,A,D,gridSize*I,gridSize*w,gridSize,gridSize];C.le=7;C.lb.push(w)}else{O=!1;x=parseInt(t[5]);153==x&&(0===S.indexOf("G")?(x="153g",O=!0):0===S.indexOf("S")&&(x="153s", O=!0));if(151==x||150==x)O=!1,0===S.indexOf("G")&&(x=150,O=!0),0===S.indexOf("S")&&(x=151,O=!0);152===x&&(x=151);!0===O&&(l=W.q.vc+"://webapi.amap.com/theme/v1.3/icons/"+(g||h?"b/":"n/"));w=l+x+".png";W.li.Wl(w);C.Aa.push(w);A=t[4][0]*u;t=t[4][1]*u;w=[-A/2,-t/2,A,t];C.lb.push(w);T=Math.min(A-3,T);k=Math.min(t,k);O=-Math.floor(k/2)+(h?3:1)}C.Aa.push(c.ti);C.le=11;C.lb.push([-Math.floor(T/2),O,T,k,Q[0],Q[1],Q[2],Q[3]]);c.va||(c.va=[]);c.va.push(C)}}else if("poilabel"===p){S=[];for(m=1;m<a.length;m+= 1)if(t=a[m],t.pv=t[0],C=W.g.rC(t[1]),!(0>C[0]||256<=C[0]||0>C[1]||256<=C[1])){Q=n.OL(C,f);C={Ka:Q,name:t[0].replace("^",""),nu:!0,wk:C,Aa:[],lb:[],visible:!0,mm:!0};x=0;C.xk=t[8];t[6]&&("v5"==d?(w=t[6].split(":"),x=w[1],O=Math.floor((parseInt(w[0].split("_")[1])-28)/2)):x=t[6]);if(x&&t[3]){if("v5"==d){w=W.q.vc+"://vdata.amap.com/style_icon/icon-"+("1"==O?"biz-":"normal-")+(g||h?"big":"small")+".png";W.li.Wl(w);C.Aa.push(w);x=parseInt(x)-1;w=Math.floor(x/10);I=x%10;gridSize=0;h?(D=48,gridSize=40,z= 28):g?(D=gridSize=40,z=28):(D=gridSize=24,z=20);A=D;if(151==x||152==x||153==x)z-=4,T=t[7][0][2],A=D*Math.max(T+2,z)/z;w=[-A/2,-D/2,A,D,gridSize*I,gridSize*w,gridSize,gridSize]}else w=l+x+".png",W.li.Wl(w),C.Aa.push(w),w=[-Math.round(t[3][0]/2),-Math.round(t[3][1]/2),t[3][0],t[3][1]],h&&(w[0]*=u,w[1]*=u,w[2]*=u,w[3]*=u);C.lb.push(w)}if(t[2]&&t[7])for(T=t[2],w=0;w<t[2].length;w+=1){C.Aa.push(c.ti);Q=t[7][w];h&&(T[w][0]=Math.round(T[w][0]*u),T[w][1]=Math.round(T[w][1]*u),T[w][2]=Math.round(T[w][2]*u), T[w][3]=Math.round(T[w][3]*u));A=T[w][0];I=T[w][1]-(h?4:2);D=Q[3];z=Q[2];A<-z&&x&&t[3]&&(A=-z+C.lb[0][0]);if("v5"!==d){if("375"===x||"3751"===x)z=Math.min(T[w][2],h?24:14),A=-Math.floor(z/2),I=-Math.floor(D/2)}else A-=2;C.le=D-4;4==k&&"\\u5317\\u4eac"==C.name&&(I=h?-50:-26);C.lb.push([A,I,z,Q[3],Q[0],Q[1],Q[2],Q[3]])}C.Rl=t[5];C.Rl&&S.push(C.Rl);C.Zq=t[4];C.Yl=t[9];C.Y5=t[10];c.va||(c.va=[]);c.va.push(C)}c.Tf||(c.Tf={},c.Tf.cd=S)}p===q[q.length-1]&&(c.status="loaded",c.cb=c.wa=!0,c.pc&&(c.pc.cb=c.pc.wa= !0))}}else n.ZB(b,c,s,W.g.bind(n.kB,n))}}var g=W.j.V,h=this.r.oa,k=a[0].split("-");1==k.length&&(k=a[0].split("_"));c=parseInt(k[1]);var l=parseInt(k[2]),m=parseInt(k[0]),n=this,p=k[3],q=this.r.va,s=18<b?Math.pow(2,b-18):1,k=Math.ceil(n.ig.Mu/2),u=this.r.oa?this.r.Bb:1,t=Math.pow(2,m);10>m&&(c<=k&&f(c+t,l,m),c>=t-k&&f(c-t,l,m));f(c,l,m)}});W.K.canvas.ng.Zb({A0:function(a){this.kn++;var b=this.Sg,c=this.sg;this.jk={};var d=a.ra.eb.Eb(this.O);this.jk.R6=d.x%this.Cg-this.Cg;this.jk.S6=d.x%this.Cg-this.Cg;var f=this.r.oa?this.r.Bb:1;0!==a.pa.rotation?(d=2*Math.floor(a.ra.hb.x)*f,f*=2*Math.floor(a.ra.hb.y)):(d=a.size.width*f,f*=a.size.height);W.f.xi(b,d,f,!0);c.textBaseline="bottom";this.aK=0;a.Fb&&(this.PL(a.Fb,1,a.Fb),0===a.Fb.length&&this.labels&&this.labels.th&&this.labels.zoom===this.zoom&&this.labels.th.length!==this.labels.length&& (this.labels.th=null));this.labels&&this.PL(this.labels,0,a.Fb);!W.j.V&&this.nk&&this.nk.length&&this.xY(a);this.Fq=this.Fq&&this.aM(c,this.Fq,480);this.Tq=this.Tq&&this.aM(c,this.Tq,200);a.Fb&&this.dM(a.Fb,c,W.Se.xJ(this.l.na),this.hc,d,f);this.labels&&this.dM(this.labels,c,W.Se.xJ(this.l.na),this.hc,d,f);this.nk=[];this.labels&&(this.labels.qo=this.zoom,this.labels.no=this.Fa,this.labels.hr=this.rotation,this.labels.eM=this.r.oa,this.labels.size=a.size);a.Fb&&(this.Fb=a.Fb);this.Fb&&(this.Fb.qo= this.zoom,this.Fb.no=this.Fa,this.Fb.hr=this.rotation,this.Fb.size=a.size);this.w("afterLabelRender")},bM:function(a,b,c){var d=void 0==b.mm?!0:b.mm,f=1,g=void 0==b.visible?!0:b.visible,h=null;if(b.Db&&this.l.Jc){h=strokeColor=haloColor="";if(b.Yc&&this.Az){var k=b.Yc[0],h=k[3];strokeColor=k[4];haloColor=b.Tn?"":k[7]}if(h=this.Mb.Wt&&this.Mb.Wt(h,strokeColor,haloColor,b.Db))g=h[4],d=h[3],f=h[5]}if(g){if(this.sg.globalAlpha!==c||f)this.sg.globalAlpha=c||f;g=0;for(k=b.Aa.length;g<k;g+=1)(d||"CANVAS"=== b.Aa[g].tagName)&&this.IX(a,b.Aa[g],b.lb[g],b.jr,c||f);this.sg.globalAlpha!==c&&(this.sg.globalAlpha=c);b.Yc&&this.Az&&this.Az(a,b,h)}},IX:function(a,b,c,d){var f=this.sg;b=this.wq(b);if(!b)return 1;var g=c[2],h=c[3],k=c[0],l=c[1];d=(d||0)%360*-Math.PI/180;if(0!==d){var m=Math.cos(d),n=Math.sin(d),p=a[0],q=a[1];f.transform(m,n,-n,m,(1-m)*p+n*q,(1-m)*q-n*p)}k=a[0]+k;a=a[1]+l;4===c.length?b.loaded&&f.drawImage(b,k,a,g,h):f.drawImage(b,c[4],c[5],c[6],c[7],k,a,g,h);0!==d&&f.setTransform(1,0,0,1,0,0)}, wq:function(a){if("IMG"===a.tagName||"CANVAS"===a.tagName||(a=W.li.kY(a))&&a.loaded)return a},bu:function(a){var b=a.Ka,c=b[0];a.reverse&&(c>W.g.Za/2?c-=W.g.Za:c<-W.g.Za/2&&(c+=W.g.Za));return this.Nb(c,b[1])},Nb:function(a,b){var c=this.r.oa?this.r.Bb:1,d=this.O,f=y=0,f=(a-this.fc[0])/d;y=(b-this.fc[1])/d;return[Math.round(f*c),Math.round(y*c)]},EY:function(a){var b=a.Ka,c=b[0];a.reverse&&(c>W.g.Za/2?c-=W.g.Za:c<W.g.Za/2&&(c+=W.g.Za));return[c/this.O,b[1]/this.O]},AZ:function(a,b){var c=a.Ka;return c[0]> b.ac.x||c[1]>b.ac.y||c[0]<b.eb.x||c[1]<b.eb.y?!1:!0},xY:function(a){var b=this.nk;if(this.nk.zoom!==this.labels.zoom)for(var c=0,d=b.length;c<d;c+=1){var f=b[c];f.nu&&this.AZ(f,a.ra)&&(this.Tq.push(f),f.zoom=b.zoom,f.rA=new Date)}},PL:function(a,b,c){var d=!(!c||!c.length),f=a.zoom-this.zoom,g=a.th||a;if(0<f||d){a.th=[];for(var h=0,k=g.length;h<k;h+=1){var l=g[h],m=this.EY(l);l.nu||b?l.Rl&&d&&c.cL&&-1!==W.g.indexOf(c.cL,l.Rl)||(5>f&&this.gZ(m,l,0<f,b,d)?a.th.push(l):W.j.V||0==f&&!b||(this.Fq.push(l), l.zoom=this.labels?this.labels.zoom:this.Hc,l.rA=new Date)):l.Tn&&a.th.push(l)}}else a.th=a;return!1},aM:function(a,b,c,d,f){a=new Date;for(var g=[],h=0,k=b.length;h<k;h+=1){var l=b[h],m=Math.max(0,Math.abs(l.zoom-this.zoom)),m=Math.max(0,1-(a-l.rA)/(1/Math.pow(1.3,m)*c));if(0<m){g.push(l);var n=this.bu(l);-20>n[0]||n[0]>d+20||-20>n[1]||n[1]>f+20||this.bM(n,l,m)}else l.rA=void 0}g.length&&(this.aK=this.rj=1);return g},dM:function(a,b,c,d,f,g){d=a.zoom!==this.zoom;18==a.zoom&&18<this.zoom&&(d=!1); b.globalAlpha=1;a=a.th;b=0;for(var h=a.length;b<h;b+=1){var k=a[b];if(!(d&&k.Tn||k.Ji&&c&&0<=c.indexOf(k.Ji))){var l=this.bu(k);-20>l[0]||l[0]>f+20||-20>l[1]||l[1]>g+20||this.bM(l,k)}}},yW:function(a){this.cj&&this.cj.eM!==this.r.oa&&this.r.set("reload");if(this.aK)return!0;if(a.Fb&&a.Fb.length)if(this.Fb&&this.Fb.length){if(this.Fb!==a.Fb||this.Fb.qo!==this.zoom||this.Fb.no!==this.Fa||this.Fb.hr!==this.rotation||!this.Fb.size.Kb(a.size))return!0}else return!0;else if(this.Fb&&this.Fb.length)return!0; return!this.labels||this.labels===this.cj&&this.cj&&this.cj.qo===this.zoom&&this.cj.no===this.Fa&&!a.uh&&this.cj.hr===this.rotation&&this.cj.eM===this.r.oa&&this.cj.size.Kb(a.size)?!1:!0},gZ:function(a,b,c,d,f){if(!f&&!c&&!d)return!0;var g;f=b.Aa.length;if(b.Yl>this.zoom)g=!0;else if(!c&&d)g=!1;else for(var h=0;h<f;h+=1){var k=b.lb[h],l=k[2],m=k[3],n=k[0],k=k[1],n=a[0]+n,k=a[1]+k;this.hZ(n,k,l,m)||(g=!0)}if(!g&&(c||d))for(h=0;h<f;h+=1)for(k=b.lb[h],l=k[2],m=k[3],n=k[0],k=k[1],n=a[0]+n,k=a[1]+k,c= Math.ceil((n+l)/this.Cg),d=Math.ceil((k+m)/this.Cg),n=Math.floor(n/this.Cg),k=Math.floor(k/this.Cg),V=0,il=c-n;V<=il;V+=1)for(h=0,jl=d-k;h<=jl;h+=1)this.jk[n+V]||(this.jk[n+V]={}),this.jk[n+V][k+h]=1;return!g},hZ:function(a,b,c,d){c=Math.ceil((a+c)/this.Cg);d=Math.ceil((b+d)/this.Cg);a=Math.floor(a/this.Cg);b=Math.floor(b/this.Cg);V=0;for(il=c-a;V<=il;V+=1)if(this.jk[a+V])for(j=0,jl=d-b;j<=jl;j+=1){if(1===this.jk[a+V][b+j])return!1}else this.jk[a+V]={};return!0}});W.K.canvas.ng.NN=W.W.extend({D:function(a){this.K=a},PU:function(a){this.tu=a;return this.qy([0,0,0])?!0:this.tu=!1},tF:function(){return this.K.Jd?!1:!0},tR:function(a){if(a){var b=Array.prototype.slice.call(arguments,0);switch(a.type){case "icon":return this.wR.apply(this,b);case "label":return this.xR.apply(this,b);default:console.error("Unknown type",a)}}},OE:function(a,b,c){a=null;try{a=b.getImageData.apply(b,c)}catch(d){console.error(d),a=null}return a},kV:function(a){return 0>a?0:255<a?255: Math.round(a)},CH:function(a,b){for(var c=0;4>c;c++)a[b+c]=this.kV(a[b+c]);return a},py:function(a,b){var c=259*(b+255)/(255*(259-b));return[c*(a[0]-128)+128,c*(a[1]-128)+128,c*(a[2]-128)+128]},HU:function(a){return[255-a[0],255-a[1],255-a[2]]},qy:function(a,b){isNaN(b)&&(b=20);var c=Math.max(0,0.299*a[0]+0.587*a[1]+0.114*a[2]-b);switch(this.tu){case "normal":return[1*c,1.2*c,255];case "light":return[1*c,1*c,255];case "fresh":return[1*c,1*c,220];case "dark":return[1.5*a[0],1.5*a[1],1*a[2]];case "blue_night":case "mapv":return[2* a[0],1.5*a[1],1*a[2]]}return!1},yR:function(a,b){var c=20,d=10;switch(b.Pl){case "active":c+=20,d+=20}return this.py(this.qy(a,c),d)},cF:function(a,b){var c=-110;switch(b.Pl){case "active":c+=30}return this.py(this.qy(this.HU(a),c),50)},vR:function(a){return this.py(a,20)},bF:function(a,b,c,d,f,g){var h=a[b],k=a[b+1],l=a[b+2];a=a[b+3];0<a?(f=f.call(this,[h,k,l,a],g),c[d]=f[0],c[d+1]=f[1],c[d+2]=f[2]):(c[d]=h,c[d+1]=k,c[d+2]=l);c[d+3]=a;this.CH(c,d)},PQ:function(a){var b=a.data,c=a.width;a=a.height; for(var d=0,f=0,g=[Infinity,Infinity],h=[-Infinity,-Infinity],k=0;k<c;k++)for(var l=0;l<a;l++){var m=4*this.Zw(k,l,c,a);if(!(76.5>b[m+3])){f++;k<g[0]&&(g[0]=k);l<g[1]&&(g[1]=l);k>h[0]&&(h[0]=k);l>h[1]&&(h[1]=l);for(var n=!0,p=0;4>p;p++)if(220>b[m+p]){n=!1;break}n&&d++}}return{O2:0<f?d/f:0,RW:[g[0],g[1],h[0]-g[0]+1,h[1]-g[1]+1]}},Zw:function(a,b,c){return b*c+a},at:function(a,b,c,d,f,g,h){var k=this.Zw(b,c,d,f);d=a[4*k+0];f=a[4*k+1];var l=a[4*k+2];a=a[4*k+3];if(a/255<h.XK||h.$M&&!h.$M.call(this,d, f,l,a))return!1;g.push([b,c]);return!0},YT:function(a,b){var c=Math.abs(a[0]-b[0]),d=Math.abs(a[1]-b[1]);return Math.sqrt(c*c+d*d)},cn:function(a,b){return 0.1>Math.abs(a[0]-b[0])&&0.1>Math.abs(a[1]-b[1])},ZU:function(a,b){for(var c=[a[0]],d=1,f=a.length;d<f;d++){var g=a[d];this.YT(g,c[c.length-1])<=b&&c.push(g)}return this.cn(c[c.length-1],a[a.length-1])?c:null},Y3:function(){},FP:function(a,b,c,d){d=W.extend({XK:0.2,TK:4},d);var f,g,h=[],k=[],l=[],m=[];for(f=0;f<c;f++){for(g=0;g<b&&!this.at(a,g, f,b,c,h,d);g++);for(g=b-1;0<=g&&!this.at(a,g,f,b,c,k,d);g--);}if(!h.length||!k.length)return null;for(g=0;g<b;g++){var n;f=h[0][0];n=k[0][0];if(g>=f&&g<=n)for(f=0;f<c&&!this.at(a,g,f,b,c,l,d);f++);f=h[h.length-1][0];n=k[k.length-1][0];if(g>=f&&g<=n)for(f=c-1;0<=f&&!this.at(a,g,f,b,c,m,d);f--);}if(!l.length||!m.length)return null;m.reverse();h.reverse();if(this.cn(l[l.length-1],k[0])&&this.cn(k[k.length-1],m[0])&&this.cn(m[m.length-1],h[0])&&this.cn(h[h.length-1],l[0])){b=[m,h,l,k];f=0;for(a=b.length;f< a;f++)if(!(2>b[f].length||(b[f]=this.ZU(b[f],d.TK),b[f])))return null;return[].concat(b[0]).concat(b[1].slice(1)).concat(b[2].slice(1)).concat(b[3].slice(1))}return null},AQ:function(a){for(var b=[Infinity,Infinity],c=[-Infinity,-Infinity],d=0,f=a.length;d<f;d++){var g=a[d][0],h=a[d][1];b[0]>g&&(b[0]=g);b[1]>h&&(b[1]=h);c[0]<g&&(c[0]=g);c[1]<h&&(c[1]=h)}return b.concat([c[0]-b[0]+1,c[1]-b[1]+1])},UE:function(a,b){this.uH||(this.uH=document.createElement("canvas"));var c=this.uH;c.width=a;c.height= b;return c},TQ:function(a){switch(a.length){case 2:return"lineTo";case 4:return"quadraticCurveTo"}return null},vE:function(a){switch(a.length){case 2:return[a[0]+0.5,a[1]+0.5];case 4:return[a[0]+0.5,a[1]+0.5,a[2]+0.5,a[3]+0.5]}return a},JD:function(a,b){a.beginPath();for(var c=0,d=b.length;c<d;c++){var f=b[c];0===c?(2<f.length&&(4===f.length?f=f.slice(-2):console.error("Unknown start point: ",b)),a.moveTo.apply(a,this.vE(f))):a[this.TQ(f)].apply(a,this.vE(f))}},DQ:function(a){a=this.cF([255,255,255], {Pl:a.Pl});this.CH(a,0);return"rgba("+a.slice(0,3).join(",")+", 0.8)"},uR:function(a,b,c){function d(a){return[Math.round((a[0]-n)*q+n-m[0]),Math.round((a[1]-p)*s+p-m[1])]}c=W.extend({Pl:"hover",TH:!0,padding:[1.5,1.5]},c);var f=a.width,g=a.height,h=this.UE(2*f+10,g),k=h.getContext("2d"),l=this.AQ(b),m=c.padding;W.j.Sc&&(m[0]+=2.5,m[1]+=2.5);for(var n=l[0],p=l[1],q=(l[2]+2*m[0])/l[2],s=(l[3]+2*m[1])/l[3],l=0,u=b.length;l<u;l++)switch(b[l].length){case 2:b[l]=d(b[l]);break;case 4:b[l]=d(b[l]).concat(d(b[l].slice(2))); break;default:console.error("Unknown point: ",b[l])}k.save();this.JD(k,b);k.closePath();k.fillStyle=c.fillStyle||"rgba(255,255,255,0.85)";k.fill();k.putImageData(a,f+6,0);k.drawImage(h,f+6,0,f,g,0,0,f,g);a=c.TH&&10<b.length;var t=c.strokeStyle||this.DQ(c);k.strokeStyle=a?"#fff":t;k.lineCap="butt";k.lineJoin="round";k.lineWidth=W.j.Sc?2:1.2;k.stroke();k.restore();return{wa:h,je:[0,0,f,g],Qy:a?function(a,c){this.aV(a,c,b,t)}:null}},aV:function(a,b,c,d){this.IP();var f=this.K.kn;this.ED(a,c,{duration:200, BB:0,startTime:Date.now(),g1:function(a){a.strokeStyle=d;a.lineCap="butt";a.lineJoin="round";a.lineWidth=W.j.Sc?2:1;a.translate(b[0],b[1])},P2:function(){return this.K.kn!==f}})},IP:function(){this.jw&&W.g.tl(this.jw)},ED:function(a,b,c,d){this.tF()?this.jw=W.g.Oe(function(){this.jw=null;if(c.P2.call(this))d&&d.call(this);else{var f=(Date.now()-c.startTime)/c.duration;1<f&&(f=1);var g=Math.round(b.length*f);if(c.BB<g){var h=1===f?b:b.slice(c.BB,g+1);h.length&&(a.save(),c.g1.call(this,a,f),this.JD(a, h),a.stroke(),a.restore());c.BB=g}1>f?this.ED(a,b,c,d):d&&d.call(this)}},this):d&&d.call(this)},PP:function(a,b,c){a=a.createImageData(b.width,b.height);var d=a.data,f=a.width,g=a.height,h=c[0]+c[2],k=c[1],l=c[1]+c[3];for(c=c[0];c<h;c++)for(var m=k;m<l;m++)for(var n=4*this.Zw(c,m,f,g),p=0;4>p;p++)d[n+p]=b.data[n+p];return a},bS:function(a,b,c){var d=a[1]+(b[1]-a[1])*c;return[Math.round(a[0]+(b[0]-a[0])*c),Math.round(d)]},OR:function(a,b,c){for(var d=1/c,f=[],g=1;g<c;g++){var h=this.bS(a,b,d*g);f.length&& this.cn(h,f[f.length-1])||f.push(h)}return f},PR:function(a,b){for(var c=1,d=a.length;c<d;c++){var f=a[c-1],g=a[c];2===g.length&&(4===f.length&&(f=f.slice(2)),2===f.length&&(f=this.OR(f,g,b),a.splice.apply(a,[c,0].concat(f)),c+=f.length,d+=f.length))}},VQ:function(a,b,c,d,f){f=Math.round(Math.min(c,d)*f);c--;d--;f?a=[[a+c,b+d-f],[a+c,b+d,a+c-f,b+d],[a+f,b+d],[a,b+d,a,b+d-f],[a,b+f],[a,b,a+f,b],[a+c-f,b],[a+c,b,a+c,b+f],[a+c,b+d-f]]:(f=[a+c,b+d],a=[f,[a,b+d],[a,b],[a+c,b],f]);this.PR(a,5);return a}, wR:function(a,b,c,d,f,g){b=a.je;var h=c?c.wA:this.OE(d,f,b);if(h){var k=c?c.dK:null,l=h,m=a.padding,n=m?m[0]:0,p=m?m[1]:0;(m=0<n*p)&&(l=this.PP(f,l,[n,p,l.width-2*n,l.height-2*p]));d=l.data;b=l.width;var q=l.height;if(b&&q){c=(c=this.K.l)&&c.na?c.na.get("hotspotOptions"):{};c=W.extend({borderAnimation:!0},c);l=this.PQ(l);a=!a.uZ&&0.46<=l.O2;var s=f.createImageData(b,q);f=s.data;for(var u=a?this.cF:this.vR,t=0,B=d.length;t<B;t+=4)this.bF(d,t,f,t,u,{Pl:g});if(m&&(f=a&&!W.j.Sc?this.FP(d,b,q,{$M:a?function(a, b,c){return!(220<a&&220<b&&220<c)}:null,XK:0.2,TK:4}):null,f||(f=l.RW,f=this.VQ(f[0],f[1],f[2],f[3],0.2)),f)){var v=this.uR(s,f,{Pl:g,fillStyle:"active"!==g?null:"#ddd",Au:h,TH:c.borderAnimation&&"hover"===g&&!k,padding:a?[1.5,1.5]:[2.5,2.5]}),s=null;return{Au:h,oo:function(a,b){k&&h&&a.putImageData(h,b[0],b[1]);a.drawImage(v.wa,v.je[0],v.je[1],v.je[2],v.je[3],b[0],b[1],b[2],b[3]);v.Qy&&(v.Qy.call(this,a,b),v.Qy=null)}}}return{Au:h,oo:function(a,b){if(m){var c=this.UE(s.width,s.height);c.getContext("2d").putImageData(s, 0,0);a.clearRect(b[0]+n,b[1]+p,b[2]-2*n,b[3]-2*p);a.drawImage(c,0,0,c.width,c.height,b[0],b[1],b[2],b[3])}else a.putImageData(s,b[0],b[1]);s=null}}}}},xR:function(a,b,c,d,f,g){a=a.je;if(c=c?c.wA:this.OE(d,f,a))if(d=c.data,a=c.width,b=c.height,a&&b){var h=f.createImageData(a,b);f=h.data;a=0;for(b=d.length;a<b;a+=4)this.bF(d,a,f,a,this.yR,{Pl:g});return{Au:c,oo:function(a,b){a.putImageData(h,b[0],b[1]);h=null}}}},WE:function(a,b,c){var d=c[2],f=c[3],g=a[0]+c[0];a=a[1]+c[1];if(4===c.length||c.pF){if((b= this.K.wq(b))&&b.loaded)return c=[4,4],W.j.Sc&&(c[0]*=2,c[1]*=2),{type:"icon",uZ:b.src&&b.src.indexOf&&0<=b.src.indexOf("/indoor_icon/"),padding:c,je:[g-c[0],a-c[1],d+2*c[0],f+2*c[1]]}}else return{type:"label",je:[g,a,d,f]}}}); W.K.canvas.ng.Zb({ME:function(){this.hx||(this.hx=new W.K.canvas.ng.NN(this));return!1===this.hx.PU(this.tu)?null:this.hx},Rm:function(a,b){var c=this.ME();if(c&&c.tF()&&a&&a.Aa&&a.lb&&0===this.rotation){var d=this.kn,f=this.bu(a),g=[],h;a.Hj||(a.Hj=[]);var k=a.Hj;for(h=a.lb.length-1;0<=h;h--){if(k[h]){if(k[h].rev!==d)continue;if(k[h].dK===b)continue}var l=c.WE(f,a.Aa[h],a.lb[h]);if(l){var m=c.tR(l,a,k[h],this.Sg,this.sg,b);m&&(k[h]={dK:b,rev:d,wA:m.Au},g.push({oo:m.oo,je:l.je,cr:"icon"===l.type? 2:1}))}}g.sort(function(a,b){return a.cr-b.cr});h=0;for(d=g.length;h<d;h++)g[h].oo.call(c,this.sg,g[h].je),g[h].oo=null}},vw:function(a){a.Hj&&(a.Hj.length=0,a.Hj=null)},Dy:function(){var a=this.sg;a&&a.putImageData&&a.putImageData(a.getImageData(0,0,1,1),0,0)},Ly:function(a){if(a&&a.Aa&&a.lb&&a.Hj){var b=this.sg,c=this.ME();if(c){for(var d=this.kn,f=this.bu(a),g=a.Hj,h=0,k=a.lb.length;h<k;h++){var l=g[h];if(l&&(g[h]=null,d===l.rev)){var m=c.WE(f,a.Aa[h],a.lb[h]);m&&m.je&&b.putImageData(l.wA,m.je[0], m.je[1])}}a.Hj=null;this.kn++}}}}); ', true), _jsload_('overlay', 'W.ca.jd=W.ca.Mk.extend({D:function(a,b){var c=a.length;this.sf=Array(c);for(var d,f,g=0;g<c;g+=1)if(d=a[g],f=new W.ca.$C(d),this.sf[g]=f,!b)if(0===g){if(0===d.length)break;f.kk(d)||d.reverse()}else 0!==d.length&&f.kk(d)&&d.reverse()},mc:function(){if(0===this.sf.length)return[Infinity,Infinity,-Infinity,-Infinity];if(!this.Cd){for(var a=this.sf[0].mc(),b=1;b<this.sf.length;b+=1){var c=this.sf[b].mc();W.A.zI(a,c)||W.A.extend(a,c)}this.Cd=a}return this.Cd},JJ:function(){return this.sf},Ie:function(){return W.ca.Cc.Nr}, Dd:function(a){for(var b=this.sf,c,d=0,f=b.length;d<f&&(c=b[d].Dd(a),0<d&&(c=!c),c);d+=1);return c}});W.ca.Po=W.ca.Mk.extend({D:function(a){var b=a.length;this.Rd=Array(b);for(var c=0;c<b;c+=1){var d=new W.ca.jd(a[c]);this.Rd[c]=d}},mc:function(){if(!this.Cd){for(var a=[Infinity,Infinity,-Infinity,-Infinity],b=this.Rd,c=0,d=b.length;c<d;c+=1)W.A.extend(a,b[c].mc());this.Cd=a}return this.Cd},Qz:function(){return this.Ka},Ie:function(){return W.ca.Cc.Lr},sJ:function(){return this.Rd},Dd:function(a){for(var b=!1,c=0,d=this.Rd.length;c<d;c+=1)if(this.Rd[c].Dd(a)){b=!0;break}return b}});W.ca.Nk=W.ca.Mk.extend({D:function(a){this.Ka=a},mc:function(){if(!this.Cd){for(var a=[Infinity,Infinity,-Infinity,-Infinity],b=0,c=this.Ka.length;b<c;b+=1)W.A.$I(a,this.Ka[b]);this.Cd=a}return this.Cd},Qz:function(){return this.Ka},Ie:function(){return W.ca.Cc.Iv},pY:function(){return this.Ka.length},Nt:function(a){return W.Vc.Zj(a,this.Ka)}});W.ca.$C=W.ca.Nk.extend({Ie:function(){return W.ca.Cc.YC},kk:W.Vc.kk,Dd:function(a){return W.Vc.Dd(a,this.Ka)}});W.ca.Mr=W.ca.Mk.extend({D:function(a){var b=a.length;this.Rd=Array(b);for(var c=0;c<b;c+=1){var d=new W.ca.Nk(a[c]);this.Rd[c]=d}},sJ:function(){return this.Rd},mc:function(){if(!this.Cd){for(var a=[Infinity,Infinity,-Infinity,-Infinity],b=this.Rd,c=0,d=b.length;c<d;c+=1)W.A.extend(a,b[c].mc());this.Cd=a}return this.Cd},Qz:function(){return this.Ka},Ie:function(){return W.ca.Cc.Kv},pY:function(){return this.Ka.length},Nt:function(a){for(var b=Infinity,c=0,d=this.Rd.length;c<d;c+=1)b=Math.min(b,this.Rd[c].Nt(a)); return b}});W.Ia.yd=W.Ia.vj.extend({D:function(a,b){arguments.callee.bb.apply(this,arguments);this.PV=a;this.P("options",a);this.P("geodesic",a);this.P("path",a);this.P("noSelect",a);this.sl();this.P("display",b);b.e("zoomend",this.Gj,this)},geodesicChanged:function(){this.pathChanged()},lj:function(a){var b=this.get("path"),c=a.Gc(this.map.get("resolution")),d=[],f,g,h;f=0;for(g=b.length;f<g;f+=1)h=this.map.Ub(b[f]).add(c),d.push(this.map.df(h));0<d.length&&this.set("path",d);if(this.cy&&0<this.cy.length)for(f= 0,b=this.cy.length;f<b;f+=1)this.cy[f].lj(a);this.PV.w("movepoly",{JL:c})},jp:function(a){this.get("options");return this.nF()?this.LQ(a):this.HE(a)},nF:function(){var a=this.get("options");return a&&!!a.geodesic},getStrokeWeight:function(){return this.get("options").strokeWeight},LQ:function(a){if(!a||!a.length)return[];var b,c=[],d,f,g=[],h,k=this.map.get("resolution"),l=this.get("options").geodesicInterpolatePixelWidth||17;c.push(a[0]);g.push(this.Vw(a[0]));d=1;for(f=a.length;d<f;d+=1)h=this.Vw(a[d]), b=Math.round(Math.abs(h[0]-g[g.length-1][0])/k),b=Math.min(31,Math.round(b/l),Math.round(Math.abs(a[d-1].J-a[d].J))),b=W.Q.FY(a[d-1],a[d],b),c.push.apply(c,b),g.push.apply(g,this.HE(b)),c.push(a[d]),g.push(h);return g},st:function(a){var b=[],c=[],d,f,g,h,k,l,m=a.za;m instanceof W.ca.Nk?l=[m]:m instanceof W.ca.Mr&&(l=m.Rd);m=[];a=a.ha.rotation;b=this.map.get("size");d=Math.PI*a/180;a=(Math.abs(b.width*Math.cos(d))+Math.abs(b.height*Math.sin(d)))/2;var n=(Math.abs(b.width*Math.sin(d))+Math.abs(b.height* Math.cos(d)))/2;d=0;for(f=l.length;d<f;d+=1)if(g=l[d].Ka,g.length)for(h=0,k=g.length;h<k;h+=1)if(b=g[h],b=this.Nb(b),b[0]=Math.round(b[0]+a),b[1]=Math.round(b[1]+n),0===h)c[0]=NaN,c[1]=NaN,m.push("M"+b[0]+" "+b[1]);else if(b[0]!==c[0]||b[1]!==c[1])m.push("L"+b[0]+" "+b[1]),c[0]=b[0],c[1]=b[1];return m},sl:function(){if(this.map&&!this.I){var a=this.map,b=this.get("path"),b=this.I=new W.$d({Rw:this.cc.ys,name:"polyline-"+W.g.zb(this),zIndex:this.get("options").zIndex||1,map:a,za:new W.ca.Nk(this.jp(b)), style:this.get("options")});b.Lj=this;this.P("resolution",a);this.P("center",a);this.P("coords",b);this.P("style",b);b.Ad(["noSelect","visible","zIndex","strokeWeight","isOutline"],this)}},pathChanged:function(){var a=this.I,b=this.get("path");a&&(this.set("coords",this.jp(b)),a.zg=!0,"c"!==this.map.get("overlayRender")&&a.ha?(b=this.st(a),W.j.gj||b.push("e"),b=b.join(" "),0===b.length&&a.ha?(a.ha.Qc.parentNode.removeChild(a.ha.Qc),a.ha.jb.parentNode&&a.ha.jb.parentNode.removeChild(a.ha.jb),a.ha= null):W.j.gj?(a.ha.Qc.setAttribute("d",b),a.ha.jb&&a.ha.jb.setAttribute("d",b)):(a.ha.Qc.path=b,a.ha.jb&&(a.ha.jb.path=b))):this.set("display"))},Gj:function(){this.nF()&&this.pathChanged()},visibleChanged:function(){this.I&&(this.I.ha?this.get("visible")?(this.I.ha.Qc.style.display="block",this.I.ha.jb&&(this.I.ha.jb.style.display="block")):(this.I.ha.Qc.style.display="none",this.I.ha.jb&&(this.I.ha.jb.style.display="none")):this.set("display"))},optionsChanged:function(){this.I&&(this.I.style=this.get("options"), this.I.zIndex=this.get("options").zIndex,this.I.ck(),this.I.ha&&(this.I.ha.Qc.parentNode&&this.I.ha.Qc.parentNode.removeChild(this.I.ha.Qc),this.I.ha.jb&&this.I.ha.jb.parentNode&&this.I.ha.jb.parentNode.removeChild(this.I.ha.jb)));this.set("display")}});W.Ia.jd=W.Ia.vj.extend({D:function(a,b){arguments.callee.bb.apply(this,arguments);this.OV=a;this.P("options",a);this.P("path",a);this.sl();this.P("display",b)},lj:function(a){var b=this.get("path");a=a.Gc(this.map.get("resolution"));var c=[],d,f;b.length&&b[0]instanceof W.Q&&(b=[b],f=!0);for(var g=0,h=b.length;g<h;g+=1){for(var k=b[g],l=[],m=0,n=k.length;m<n;m+=1)d=this.map.Ub(k[m]).add(a),l.push(this.map.df(d));c.push(l)}0<c.length&&this.set("path",f?c[0]:c);this.OV.w("movepoly",{JL:a})},jp:function(a){a.length&& a[0]instanceof W.Q&&(a=[a]);for(var b,c,d=[],f,g=this.map,h=0;h<a.length;h+=1){var k=a[h];f=[];b=0;for(c=k.length;b<c;b+=1){var l=g.Ub(k[b]);f.push([l.x,l.y])}d.push(f)}return d},sl:function(){if(this.map&&!this.I){var a=this.map,b=this.get("path"),b=this.I=new W.$d({Rw:this.cc.ys,name:"polygon-"+W.g.zb(this),zIndex:this.get("options").zIndex||1,map:a,za:new W.ca.jd(this.jp(b)),style:this.get("options")});b.Lj=this;this.P("resolution",a);this.P("center",a);this.P("coords",b);this.P("style",b);b.Ad(["visible", "zIndex","strokeWeight"],this)}},pathChanged:function(){var a=this.I,b=this.get("path");a&&(this.set("coords",this.jp(b)),a.zg=!0,"c"!==this.map.get("overlayRender")&&a.Y?(b=this.tt(a),0===b.length?(a.Y.parentNode.removeChild(a.Y),a.Y=null):W.j.gj?a.Y.setAttribute("d",b.join(" ")):(b.push("e"),a.Y.path=b.join(" "))):this.set("display"))},getStrokeWeight:function(){return this.get("options").strokeWeight},visibleChanged:function(){this.I&&(this.I.Y?this.get("visible")?this.I.Y.style.display="block": this.I.Y.style.display="none":this.set("display"))},optionsChanged:function(){this.I&&(this.I.style=this.get("options"),this.I.zIndex=this.get("options").zIndex,this.I.ck());this.set("display")},tt:function(a){var b=[NaN,NaN,0],c=[NaN,NaN],d,f,g,h,k,l,m,n=a.Y.rotation,p=this.map.get("size");f=Math.PI*n/180;n=(Math.abs(p.width*Math.cos(f))+Math.abs(p.height*Math.sin(f)))/2;p=(Math.abs(p.width*Math.sin(f))+Math.abs(p.height*Math.cos(f)))/2;a=a.za;a instanceof W.ca.jd?d=[a]:a instanceof W.ca.Po&&(d= a.Rd);var q=[];a=0;for(f=d.length;a<f;a+=1)if(b=d[a],g=b.sf,h=g.length,0<h)for(var s=0;s<h;s+=1){var u;k=g[s].Ka;l=0;for(m=k.length;l<m;l+=1)if(b=k[l],b=this.Nb(b),b[0]=Math.ceil(b[0]+n),b[1]=Math.ceil(b[1]+p),0===l)c[0]=NaN,c[1]=NaN,u=b,q.push("M"+b[0]+" "+b[1]);else if(b[0]!==c[0]||b[1]!==c[1])q.push("L"+b[0]+" "+b[1]),c=b;u&&q.push("L"+u[0]+" "+u[1])}return q}});W.Ia.Bi=W.Ia.vj.extend({D:function(a,b){arguments.callee.bb.apply(this,arguments);this.NV=a;this.P("center",a);this.P("draggable",a);this.P("radius",a);this.P("options",a);this.sl();this.P("display",b)},lj:function(a){var b=this.get("center");a=a.Gc(this.map.get("resolution"));var c=this.map.Ub(b).add(a);b instanceof W.Q?this.set("center",this.map.df(c)):this.set("center",c);this.NV.w("movepoly",{JL:a})},sl:function(){if(this.map&&!this.I){var a=this.map,b=a.Ub(this.get("center")),b=this.I=new W.$d({xs:!0, Rw:this.cc.ys,name:"circle-"+W.g.zb(this),zIndex:this.get("options").zIndex||1,map:a,za:new W.ca.xe([b.x,b.y]),style:this.get("options")});b.Lj=this;this.P("resolution",a);this.P("coords",b);this.P("style",b);b.P("visible",this,!0);b.Ad(["radius","center","resolution","zIndex","strokeWeight"],this)}},getStrokeWeight:function(){return this.get("options").strokeWeight},centerChanged:function(){var a=this.I,b=this.map.Ub(this.get("center"));a&&(a.za.Ka=[b.x,b.y],this.set("coords",[b.x,b.y]),this.zg= !0,a.Y?this.UL():this.set("display"))},visibleChanged:function(){this.I&&(this.I.Y?this.get("visible")?this.I.Y.style.display="block":this.I.Y.style.display="none":this.set("display"))},optionsChanged:function(){this.I&&(this.I.style=this.get("options"),this.I.zIndex=this.get("options").zIndex,this.I.ck(),this.I.zg=!0,this.set("display"))},bz:function(a){var b=[],c=[],d,c=a.za;c instanceof W.ca.xe&&(d=[c]);var c=this.map.get("crs").hi(Math.floor(this.map.get("zoom"))),f=a.Y.rotation,b=this.map.get("size"), g=Math.PI*f/180,f=(Math.abs(b.width*Math.cos(g))+Math.abs(b.height*Math.sin(g)))/2,g=(Math.abs(b.width*Math.sin(g))+Math.abs(b.height*Math.cos(g)))/2,b=this.Nb(d[0].Ka);b[0]=Math.round(b[0]+f);b[1]=Math.round(b[1]+g);a=a.get("remain")?5.23:this.get("radius")/(c*Math.cos(Math.PI*this.get("center").N/180));return c=["M",b[0],b[1]-a,"A",a,a,0,1,1,b[0]-0.helloworld,b[1]-a,"Z"].join(" ")},UL:function(){var a=this.I,b=this.get("radius");if("c"!==this.map.get("overlayRender")&&a.Y)if(W.j.gj)b=this.bz(a),a.Y.setAttribute("d", b);else{b=this.map.get("crs").hi(Math.floor(this.map.get("zoom")));b=this.get("radius")/(b*Math.cos(Math.PI*this.get("center").N/180));a.Y.style.width=Math.round(2*b);a.Y.style.height=Math.round(2*b);var c=this.map.get("size").width/2,d=this.map.get("size").height/2,f=this.Nb(a.za.Ka);f[0]=Math.round(f[0]+c);f[1]=Math.round(f[1]+d);a.Y.style.top=Math.round(f[1]-b);a.Y.style.left=Math.round(f[0]-b)}else this.set("display")},radiusChanged:function(){var a=this.I,b=this.get("radius");a&&(a.zg=!0,a.w("rad", {qj:b}),this.UL())}}); ', true), _jsload_('wgl', '(function(){W.j.Vn&&(W.J2=new W.Sr(function(a){function b(a,b,d){for(var f=a.Jb,g=[],h=a.nm,m=null,p=null,C={},Q=1,S=f.length;Q<S;Q+=1){var T=f[Q],O=T[1].split("&"),m=k(q?q:O[0]),p=k(O[2]),w=O[0]+O[2];C[w]||(C[w]={iN:[],pM:[],ok:[],cJ:[],YX:m,borderColor:p,Db:T[2]});var m=C[w].iN,p=C[w].pM,O=C[w].ok,w=C[w].cJ,x=T[0],I=T[3]*Math.pow(2,0);if((T=T[5])&&T.length)for(var D=0,z=T.length;D<z;D+=1)for(var A=T[D].split("-")[1].split("^"),H=0,R=A.length;H<R;H+=1)-1==c(g,A[H])&&g.push(A[H]);T=0;for(D=x.length;T< D;T+=1){for(var L=x[T],L=n(L),z=l(L,h,b),L=z[1],A=z[2],z=[],H=0,R=L.length-1;H<R;H+=1){var F=L[H],J=L[H+1],K=[F[0]-0*I,F[1]-0.3*I],U=[J[0]-0*I,J[1]-0.3*I],M=A[H],X=A[H+1],N=M[0],aa=X[0],M=M[1],X=X[1];0==N&&N==aa||256==N&&N==aa||0==M&&M==X||256==M&&M==X||(d?((J[0]-F[0])*(K[1]-F[1])<(K[0]-F[0])*(J[1]-F[1])&&(m.push(K[0],K[1],2),m.push(J[0],J[1],-1),m.push(F[0],F[1],-1),m.push(K[0],K[1],2),m.push(U[0],U[1],2),m.push(J[0],J[1],-1),w.push([F,J,U,K])),O.push(K[0],K[1],-1,U[0],U[1],-1)):O.push(F[0],F[1], -1,J[0],J[1],-1));z.push([K[0],K[1]])}L.pop();A=s.jN(d?z:L,[],0,1);w.push(d?z:L);L=0;for(z=A.length;L<z;L+=1)for(H=0;3>H;H+=1)p.push(A[L][H][0],A[L][H][1],3)}}a.Jb=[];for(L in C)C.hasOwnProperty(L)&&a.Jb.push([new Float32Array(C[L].iN),new Float32Array(C[L].pM),new Float32Array(C[L].ok),[C[L].YX,C[L].borderColor,C[L].Db],C[L].cJ]);a.Sl=g;return a}function c(a,b){if(a&&!a.length)return-1;if(a.indexOf)return a.indexOf(b);for(var c=0;c<a.length;c+=1)if(a[c]===b)return c;return-1}function d(a,b,c,d){for(var g= "solid solid_roundcap solid_squarecap dash railway dash_crewel".split(" "),h=a.Jb.slice(1),l=h.length-1;0<=l;l--)h[l].iK=l;h.sort(function(a,b){return a[2]>b[2]?1:a.iK>b.iK?1:-1});for(var m={},l=0,n=h.length;l<n;l+=1){var p=h[l],q=p[1].split("&"),s,O,w,x,I;s=O=w=x=I=null;var D,z,A,H,R=null,L=!1;D=z=A=H=null;q[1]&&(s=k(q[1]));O=parseInt(q[0]);w=q[2];w!==g[0]&&(w===g[1]?D="round":w===g[2]?D="square":0===w.indexOf(g[5])?(R=!0,A=[3,2]):0===w.indexOf(g[3])?A=eval("["+w.substring(5).split(")")[0]+"]"): 0===w.indexOf(g[4])&&(x=s,s=q[4]?k(q[4]):[1,1,1,s[3]],A=[12,12],L=!0,I=3,O=1));q[3]&&q[4]&&3<q.length&&(I=O+parseInt(q[3]),x=k(q[4]),w=q[5],w!==g[0]&&(w===g[1]?z="round":w===g[2]?z="square":0!==w.indexOf(g[5])&&0===w.indexOf(g[3])&&(I+=1,H=eval("["+w.substring(5).split(")")[0]+"]"))));if(b){if(A)for(q=A.length-1;0<=q;q-=1)A[q]*=d;if(H)for(q=H.length-1;0<=q;q-=1)H[q]*=d}w=[];w.Sd=0;var F=[],J=[];f(w,J,F,p[0],a.nm,b,c,d,D);"app"==mode&&(O/=4,I/=4);q=[O,s,A,I,x,H,R,L,D,z,p[3]];p=p[2];m[p]||(m[p]=[]); m[p].push([new Float32Array(w),new Uint16Array(J),q,F])}a.Jb=m;return a}function f(a,b,c,d,f,g,h,k,m){for(var p=0,q=d.length;p<q;p+=1){var s=a.length/11,O=s+6,w=n(d[p]),x=l(w,f,h);if(1<x[1].length){for(var w=x[0],I=x[2],D=0,x=x[1].length;D<x;D+=1){if(0<D){var z=w[2*D]-w[2*D-2],A=w[2*D+1]-w[2*D-1];dis=Math.sqrt(z*z+A*A)*(g?k:1);a.Sd+=dis}var z=w[2*D],A=w[2*D+1],H=I[D][0],R=I[D][1],L,F;D==x-1?(L=w[2*x-2],F=w[2*x-1]):(L=w[2*D+2],F=w[2*D+3]);var J,K;0==D?(J=z,K=A):(J=w[2*D-2],K=w[2*D-1]);if(0!==D){var U= D==x-1?0:-1;a.push(z,A,H,R,1,J,K,U,L,F,a.Sd);a.push(z,A,H,R,-1,J,K,U,L,F,a.Sd)}else a.push(z,A,H,R,0,J,K,0,L,F,a.Sd),a.push(z,A,H,R,1,J,K,0,L,F,a.Sd),a.push(z,A,H,R,1,J,K,1,L,F,a.Sd),a.push(z,A,H,R,0,J,K,1,L,F,a.Sd),a.push(z,A,H,R,-1,J,K,1,L,F,a.Sd),a.push(z,A,H,R,-1,J,K,0,L,F,a.Sd),m&&(b.push(s+2,s+0,s+3),b.push(s+2,s+1,s+0),b.push(s+3,s+0,s+4),b.push(s+4,s+0,s+5));D!==x-1?(U=0==D?0:1,a.push(z,A,H,R,1,J,K,U,L,F,a.Sd),a.push(z,A,H,R,-1,J,K,U,L,F,a.Sd)):(a.push(z,A,H,R,0,J,K,0,L,F,a.Sd),a.push(z,A, H,R,1,J,K,0,L,F,a.Sd),a.push(z,A,H,R,1,J,K,-1,L,F,a.Sd),a.push(z,A,H,R,0,J,K,-1,L,F,a.Sd),a.push(z,A,H,R,-1,J,K,-1,L,F,a.Sd),a.push(z,A,H,R,-1,J,K,0,L,F,a.Sd));D!==x-1?(b.push(O+4*D,O+4*D+3,O+4*D+1),b.push(O+4*D,O+4*D+2,O+4*D+3)):m&&(z=O+4*(x-1),b.push(z+1,z+2,z+0),b.push(z+2,z+3,z+0),b.push(z+0,z+4,z+5),b.push(z+0,z+3,z+4))}c.push(I)}}}function g(a,b){var c=a.Jb,d=[],f=[],g=[];h(a,f,g,b);var l=[[[0,0],[255,0],[255,255],[0,255]]];d.push([new Float32Array(f),new Uint16Array(g),k("ff"+a.ZH.substr(1)), "regions:land",l]);c.sort(function(a,b){return"string"==typeof a?-1:"string"==typeof b?1:a[2]>b[2]?1:a[2]<b[2]?-1:0});for(var n=1,p=c.length;n<p;n+=1){var q=c[n],f=[],g=[],l=[],s=k(q[1].split("&")[0]);m(f,g,l,q[0],a.nm,b);d.push([new Float32Array(f),new Uint16Array(g),s,q[3],l])}a.Jb=d;return a}function h(a,b,c,d){var f=a.nm,g=Math.pow(2,0);a=256*f.x*d-53109887*g;f=256*f.y*d-26262068*g;b.push(a,f);g=256*d;d=a+g;b.push(d,f);f+=g;b.push(a,f);b.push(d,f);c.push(0,1,2,1,3,2)}function k(a){for(var b=[], c=0,d=a.length;c<d;c+=2)b.push(parseInt(a.substr(c,2),16)/255);b.push(b.shift());return b}function l(a,b,c){var d=0,f=0,d=256*b.x,f=256*b.y;b=[];for(var g=[],h=[],k=Math.pow(2,0),l=0,m=a.length;l<m;l+=2){var n=(d+a[l])*c-53109887*k,p=(f+a[l+1])*c-26262068*k,q=h.length;if(0<!b.length||n!=h[q-2]||p!=h[q-1])1<b.length?n===h[q-2]&&n===h[q-4]?(h[q-1]=p,b[b.length-1][1]=p,g[b.length-1][1]=a[l+1]):p===h[q-1]&&p===h[q-3]?(h[q-2]=n,b[b.length-1][0]=n,g[b.length-1][0]=a[l]):(h.push(n),h.push(p),b.push([n,p]), g.push([a[l],a[l+1]])):(h.push(n),h.push(p),b.push([n,p]),g.push([a[l],a[l+1]]))}return[h,b,g]}function m(a,b,c,d,f,g){for(var h=0,k=d.length;h<k;h+=1){var m=a.length/2,p=l(n(d[h]),f,g);2<p[1].length&&(m=s.jN(p[1],[],m),m.length&&(a.push.apply(a,p[0]),b.push.apply(b,m),c.push(p[2])))}}function n(a){var b,c,d,f,g;c=[];d=NaN;var h=null,k=null;f=0;for(g=a.length;f<g;f+=1)(b=a[f],b="ASDFGHJKLQWERTYUIO!sdfghjkl".indexOf(b),isNaN(d))?d=27*b:(h?k||(k=h=null):h=d+b-333,c.push(d+b-333),d=NaN);return c}var p= Number.EPSILON||2E-16,q=null,s={je:function(a){for(var b=a.length,c=0,d=b-1,f=0;f<b;d=f++)c+=a[d][0]*a[f][1]-a[f][0]*a[d][1];return 0.5*c},c2:function(){return function(a,b){var c=a.length;if(3>c)return null;var d=[],f=[],g=[],h,k,l;if(0<s.je(a))for(k=0;k<c;k++)f[k]=k;else for(k=0;k<c;k++)f[k]=c-1-k;var m=2*c;for(k=c-1;2<c&&!(0>=m--);){h=k;c<=h&&(h=0);k=h+1;c<=k&&(k=0);l=k+1;c<=l&&(l=0);var n;a:{var q=n=void 0,O=void 0,w=void 0,x=void 0,I=void 0,D=void 0,z=void 0,A=void 0,q=a[f[h]][0],O=a[f[h]][1], w=a[f[k]][0],x=a[f[k]][1],I=a[f[l]][0],D=a[f[l]][1];if(p>(w-q)*(D-O)-(x-O)*(I-q))n=!1;else{var H=void 0,R=void 0,L=void 0,F=void 0,J=void 0,K=void 0,U=void 0,M=void 0,X=void 0,N=void 0,X=M=U=A=z=void 0,H=I-w,R=D-x,L=q-I,F=O-D,J=w-q,K=x-O;for(n=0;n<c;n++)if(z=a[f[n]][0],A=a[f[n]][1],!(z===q&&A===O||z===w&&A===x||z===I&&A===D)&&(U=z-q,M=A-O,X=z-w,N=A-x,z-=I,A-=D,X=H*N-R*X,U=J*M-K*U,M=L*A-F*z,X>=-p&&M>=-p&&U>=-p)){n=!1;break a}n=!0}}if(n){d.push([a[f[h]],a[f[k]],a[f[l]]]);g.push([f[h],f[k],f[l]]);h= k;for(l=k+1;l<c;h++,l++)f[h]=f[l];c--;m=2*c}}return b?g:d}}(),jN:function(a,b,c,d){var f,g,h,k={};b=0;for(f=a.length;b<f;b++)h=a[b][0]+":"+a[b][1],k[h]=b;a=s.c2(a,!1);if(!a)return[];if(d)return a;var l=[];b=0;for(f=a.length;b<f;b++)for(g=a[b],d=0;3>d;d++)h=g[d][0]+":"+g[d][1],h=k[h],l.push(h+c);return l},F5:function(a){return 0>s.je(a)}};return{zB:function(c,f){mode=c.mode;var h=c.pu,k=c.ir;q=c.vt;for(var l=[],m=Math.pow(2,18-h),h=0,n=c.Fg.length;h<n;h+=1){var p=c.Fg[h];switch(p.Tc){case "region":l.push(g(p, m));break;case "road":l.push(d(p,k,m,c.nM));break;case "building":l.push(b(p,m,c.kW))}}c.Fg=l;if(a){k=[];h=0;for(n=l.length;h<n;h++)if((m=l[h].Jb)&&m.length)for(var p=0,s=m.length;p<s;p++)m[p].buffer&&m[p].buffer instanceof ArrayBuffer&&k.push(m[p].buffer);a.mt(k)}f(null,{data:c})},q6:function(){}}},{}))})(W);(function(a){function b(a){var b=new Float32Array(3);a&&"object"===typeof a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2]);this.elements=b}function c(a){var b,c;if(a&&"object"===typeof a&&a.hasOwnProperty("elements")){b=a.elements;c=new Float32Array(16);for(a=0;16>a;++a)c[a]=b[a];this.elements=c}else this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}c.prototype.set=function(a){var b,c;b=a.elements;c=this.elements;if(b!==c){for(a=0;16>a;++a)c[a]=b[a];return this}};c.prototype.concat=function(a){var b, c,h,k,l,m,n;c=b=this.elements;h=a.elements;if(b===h)for(h=new Float32Array(16),a=0;16>a;++a)h[a]=b[a];for(a=0;4>a;a++)k=c[a],l=c[a+4],m=c[a+8],n=c[a+12],b[a]=k*h[0]+l*h[1]+m*h[2]+n*h[3],b[a+4]=k*h[4]+l*h[5]+m*h[6]+n*h[7],b[a+8]=k*h[8]+l*h[9]+m*h[10]+n*h[11],b[a+12]=k*h[12]+l*h[13]+m*h[14]+n*h[15];return this};c.prototype.p1=function(a,b,c,h){var k,l,m;if(a===b||c===h)throw"null frustum";l=1/(b-a);m=1/(h-c);k=this.elements;k[0]=2*l;k[1]=0;k[2]=0;k[3]=0;k[4]=0;k[5]=2*m;k[6]=0;k[7]=0;k[8]=0;k[9]=0;k[10]= -2;k[11]=0;k[12]=-(b+a)*l;k[13]=-(h+c)*m;k[14]=-1;k[15]=1;return this};c.prototype.scale=function(a,b,c){var h=this.elements;h[0]*=a;h[4]*=b;h[8]*=c;h[1]*=a;h[5]*=b;h[9]*=c;h[2]*=a;h[6]*=b;h[10]*=c;h[3]*=a;h[7]*=b;h[11]*=c;return this};c.prototype.translate=function(a,b,c){var h=this.elements;h[12]+=h[0]*a+h[4]*b+h[8]*c;h[13]+=h[1]*a+h[5]*b+h[9]*c;h[14]+=h[2]*a+h[6]*b+h[10]*c;h[15]+=h[3]*a+h[7]*b+h[11]*c;return this};c.prototype.q1=function(a,b,c,h){var k,l,m,n,p,q,s,u;a=Math.PI*a/180;k=this.elements; l=Math.sin(a);a=Math.cos(a);0!==b&&0===c&&0===h?(0>b&&(l=-l),k[0]=1,k[4]=0,k[8]=0,k[12]=0,k[1]=0,k[5]=a,k[9]=-l,k[13]=0,k[2]=0,k[6]=l,k[10]=a,k[14]=0,k[3]=0,k[7]=0,k[11]=0):0===b&&0!==c&&0===h?(0>c&&(l=-l),k[0]=a,k[4]=0,k[8]=l,k[12]=0,k[1]=0,k[5]=1,k[9]=0,k[13]=0,k[2]=-l,k[6]=0,k[10]=a,k[14]=0,k[3]=0,k[7]=0,k[11]=0):0===b&&0===c&&0!==h?(0>h&&(l=-l),k[0]=a,k[4]=-l,k[8]=0,k[12]=0,k[1]=l,k[5]=a,k[9]=0,k[13]=0,k[2]=0,k[6]=0,k[10]=1,k[14]=0,k[3]=0,k[7]=0,k[11]=0):(m=Math.sqrt(b*b+c*c+h*h),1!==m&&(m=1/ m,b*=m,c*=m,h*=m),m=1-a,n=b*c,p=c*h,q=h*b,s=b*l,u=c*l,l*=h,k[0]=b*b*m+a,k[1]=n*m+l,k[2]=q*m-u,k[3]=0,k[4]=n*m-l,k[5]=c*c*m+a,k[6]=p*m+s,k[7]=0,k[8]=q*m+u,k[9]=p*m-s,k[10]=h*h*m+a,k[11]=0,k[12]=0,k[13]=0,k[14]=0);k[15]=1;return this};c.prototype.rotate=function(a,b,g,h){return this.concat((new c).q1(a,b,g,h))};a.Nv=c;b.prototype.normalize=function(){var a=this.elements,b=a[0],c=a[1],h=a[2],k=Math.sqrt(b*b+c*c+h*h);if(k){if(1==k)return this}else return a[0]=0,a[1]=0,a[2]=0,this;k=1/k;a[0]=b*k;a[1]= c*k;a[2]=h*k;return this};a.t3=b;a.u3=function(a){var b=new Float32Array(4);a&&"object"===typeof a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]);this.elements=b}})(W);W.Cv={pZ:function(a,b,c){b=W.Cv.createProgram(a,b,c);if(!b)return console.log("Failed to create program"),!1;a.useProgram(b);a.qe=b;return!0},createProgram:function(a,b,c){b=W.Cv.LK(a,a.VERTEX_SHADER,b);c=W.Cv.LK(a,a.FRAGMENT_SHADER,c);if(!b||!c)return null;var d=a.createProgram();if(!d)return null;a.attachShader(d,b);a.attachShader(d,c);a.linkProgram(d);return a.getProgramParameter(d,a.LINK_STATUS)?d:(console.log("Failed to link program: "+a.getProgramInfoLog(d)),a.deleteProgram(d),a.deleteShader(c), a.deleteShader(b),null)},LK:function(a,b,c){b=a.createShader(b);if(null==b)return console.log("unable to create shader"),null;a.shaderSource(b,c);a.compileShader(b);return a.getShaderParameter(b,a.COMPILE_STATUS)?b:(console.log("Failed to compile shader: "+a.getShaderInfoLog(b)),a.deleteShader(b),null)}};W.K.Pe.Md=W.K.uc.Kg.extend({ta:[W.Uv],D:function(a,b){this.vn=18;this.Bb=Math.min(2,window.devicePixelRatio||1);this.zu=1;this.HI=Math.pow(2,this.vn-18);arguments.callee.bb.apply(this,arguments);this.lk=this.qi=!0;a.l.na.Wn&&this.pw(a,b);this.Fm=0;this.jK()||this.set("reload")},rO:"precision highp float;attribute vec4 a_Position;attribute vec3 a_op,a_Next,a_Previous;attribute float a_Tags;uniform float u_xDelta,u_width;uniform lowp int u_type;uniform mat4 u_othMatrix,u_zoomMatrix,u_modelMatrix;uniform float u_scale;varying float v_distance;varying vec2 v_op;varying float v_TB;varying float v_cap;varying lowp float v_Tags;void main() {vec4 position=a_Position;position.x+=u_xDelta;if (u_type==0) {gl_Position=u_othMatrix*u_zoomMatrix*u_modelMatrix*position;}else if(u_type>1) {v_op=a_op.xy;v_TB=a_op.z;vec3 curPos=position.xyz;v_distance=a_Next.z;float ddis=0.0;vec3 previous=vec3(a_Previous.x+u_xDelta,a_Previous.y,0);vec3 next=vec3(a_Next.x+u_xDelta,a_Next.y,0);vec4 up,dir;v_distance *= u_scale;if(previous==curPos){ dir= vec4(normalize(next-curPos).xy,0,0);}else if(next==curPos){dir= -vec4(normalize(previous-curPos).xy,0,0);}else {vec3 dir0=previous-curPos;vec3 dir1=next-curPos;vec3 dir2=normalize(dir0);vec3 dir3=normalize(dir1);float f0=dir0.x*dir1.y-dir1.x*dir0.y;dir = vec4(0); v_cap=1.0;if(f0==0.0){up = vec4(dir3.y,-dir3.x,0,0); }else{vec3 dir4=normalize(dir2+dir3);float sinA=length(cross(dir4,dir2));float cosA=dot(dir4,dir2);if(sinA<0.5){sinA=0.5;}up= vec4(dir4,0)/sinA;ddis=abs(length(up)*cosA*u_width*0.5);if(f0<0.0){up=-up;ddis=-ddis;}v_distance += v_TB*a_Previous.z*ddis;}}if(previous==curPos||next==curPos){ up = vec4(dir.y,-dir.x,0,0); if(u_type==4){v_cap=sqrt(v_TB*v_TB+a_Previous.z*a_Previous.z);}else if(u_type==3){v_cap=1.0;}else{dir = vec4(0);}}vec4 pos=u_zoomMatrix*u_modelMatrix*position;pos=pos+(up*v_TB-dir*a_Previous.z)*u_width*0.5;gl_Position=u_othMatrix*pos;}else if (u_type==1) {v_Tags=a_Tags;gl_Position=u_othMatrix*u_zoomMatrix*u_modelMatrix*position;}}", HN:"precision lowp float;uniform vec4 u_FragColor,u_FragColor2;varying lowp float v_distance,v_TB;varying vec2 v_op;varying lowp float v_Tags;varying float v_cap;uniform lowp int u_type;uniform int u_isDash,u_onlyBorder;uniform vec4 u_dash;void main() {vec4 color=u_FragColor;if (u_type==0) {}else if(u_type>1) {if(v_op.x<-0.2||v_op.x>256.2||v_op.y<-0.2||v_op.y>256.2){discard;}if(v_cap>1.0){discard;}if(u_isDash==1){float all = u_dash[0] + u_dash[1] + u_dash[2] + u_dash[3];float off = mod(v_distance - u_dash[0], all);if(off> u_dash[0]&&off<=(u_dash[0]+u_dash[1])||off>(all-u_dash[3])){discard;}}if(u_onlyBorder==1&&v_TB<=0.7&&v_TB>=-0.7){discard;}}else if(u_type==1) {color=v_Tags==3.0?u_FragColor2:vec4((u_FragColor+(u_FragColor2-u_FragColor)*v_Tags/3.0).xyzw);}gl_FragColor=color;}", reloadChanged:function(){this.r&&(this.r.cb=!1);this.Na.clear();this.xa&&this.xa.parentNode&&this.xa.parentNode.removeChild(this.xa);this.set("display")},rL:function(a){if(this.r&&a.GK===this.r.Ph)for(var b=0,c=a.Fg.length;b<c;b+=1)this.iB(a.Fg[b],a.pu,a.ir,a.V)},m0:function(a){for(var b=0,c=a.length;b<c;b+=1){var d=a[b];this.l.sj&&d[3]&&!this.l.Jc&&(d[2]=this.Mb.Xt(d[2],d[3]));d.xu=d[1].length;d[0]=this.Tk(this.Bg.ARRAY_BUFFER,d[0]);d[1]=this.Tk(this.Bg.ELEMENT_ARRAY_BUFFER,d[1])}},W0:function(a){for(var b= 0,c=a.length;b<c;b+=1){var d=a[b];d.xu=d[1].length;d[0]=this.Tk(this.Bg.ARRAY_BUFFER,d[0]);d[1]=this.Tk(this.Bg.ELEMENT_ARRAY_BUFFER,d[1]);this.l.sj&&d[2][10]&&!this.l.Jc&&(d[2][1]=this.Mb.gk(d[2][1],d[2][10],1),d[2][4]=this.Mb.gk(d[2][4],d[2][10],0))}},mW:function(a){for(var b=0,c=a.length;b<c;b+=1){var d=a[b];d.$K=d[0].length/3;d[0]=this.Tk(this.Bg.ARRAY_BUFFER,d[0]);d.aL=d[1].length/3;d[1]=this.Tk(this.Bg.ARRAY_BUFFER,d[1]);d.bL=d[2].length/3;d[2]=this.Tk(this.Bg.ARRAY_BUFFER,d[2]);if(this.l.sj&& d[3][2]&&!this.l.Jc){var f=this.Mb.tq(d[3][0],d[3][1],d[3][2]);d[3][0]=f[0];d[3][1]=f[1]}}},Tk:function(a,b){if(b.length){var c=this.Bg,d=c.createBuffer();c.bindBuffer(a,d);c.bufferData(a,b,c.STATIC_DRAW);return d}},gY:function(a){var b=a.Ga,c=b.x,d=b.y,f=b.z,g=Math.pow(2,f),h=(c+g)%g,k=h+g,l=h-g,m=null;h!==c&&(m=this.gA(f,h,d));m||l===c||(m=this.gA(f,l,d));m||k===c||(m=this.gA(f,k,d));return m?(a.status=m.status,a.wa=m.wa,a.hc=m.hc,a.Id=m.Id,a.Lb={building:m.Lb.building,region:m.Lb.region,road:m.Lb.road, Lt:(b.x-m.Ga.x)/g+m.Lb.Lt},!0):!1},gA:function(a,b,c){if((a=this.Na.get(a+"/"+b+"/"+c))&&a.Lb)return a},iB:function(a){var b=a.Tc,c=this.Na.get(a.lC);if(c){c.Lb||(c.Lb={Lt:0});c.Lb[b]=a.Jb;if("region"==b)this.m0(a.Jb);else if("road"===b)for(var d in a.Jb)a.Jb.hasOwnProperty(d)&&this.W0(a.Jb[d]);else"building"===b&&(this.mW(a.Jb),a.Sl&&a.Sl.length&&!c.Tf&&(c.Tf={},c.Tf.cd=a.Sl,W.zm&&W.zm.w("vecTileParsed.buildings",{qv:c})));b==this.r.va[this.r.va.length-1]&&(c.wa=!0,this.set("display"))}},se:function(a, b){this.Jo=a.Jo;this.Ju(a,b);a.WV=this.Xi;this.po(a,b);if(this.Xi&&!this.r.cb){var c=this.r;W.ae.Te.end({id:this.l.na.id,key:"rb",index:2});c.cb=!0;c.kf?c.la("renderComplete"):(c.kf=!0,c.la("complete"))}this.mk=this.Fa;this.rj&&this.set("display",0)},Gf:function(){return this.xa},eB:function(){W.K.Pe.Md.gq+=1;this.xa&&W.B.F(this.xa,"webglcontextlost",this.eB,this);this.xa.parentNode&&this.xa.parentNode.removeChild(this.xa);if(1<W.K.Pe.Md.gq)this.fB();else{var a=this.xa.className;this.xa=document.createElement("canvas"); this.xa.className=a;this.jK()}this.set("reload");new W.qa.Ca(W.q.vc+"://webapi.amap.com/count?"+["type=glfail","c="+W.K.Pe.Md.gq,"crd="+W.j.RJ,"k="+W.q.key,"u="+W.q.ql,"m="+(W.j.V?1:0),"pf="+W.j.ar,"dpr="+window.devicePixelRatio,"scale="+(W.j.xC||0),"detect="+W.j.oa].join("&"))},fB:function(){W.j.Vn=!1;this.r&&this.r.l.na&&(this.r.l.set("baseRender",W.j.WX?"dv":"d"),this.r.l.na.mapStyleChanged(),this.r.K=null,this.r.Pa.hm(),this.r=null);this.xa=this.Mb=null},ne:function(a){this.xa=document.createElement("canvas"); this.xa.className=a||"amap-layer"},jK:function(){if(1<W.K.Pe.Md.gq)return this.fB(),!1;var a=this.Bg=this.xa.getContext(W.j.H2,W.j.I2);if(a)W.B.e(this.xa,"webglcontextlost",this.eB,this);else return this.fB(),!1;W.Cv.pZ(a,this.rO.replace("{this.dashScale}",this.HI),this.HN.replace("{this.dashScale}",this.HI));this.m2=a.getUniformLocation(a.qe,"u_xDelta");this.k2=a.getUniformLocation(a.qe,"u_othMatrix");this.n2=a.getUniformLocation(a.qe,"u_zoomMatrix");this.i2=a.getUniformLocation(a.qe,"u_modelMatrix"); this.nl=a.getAttribLocation(a.qe,"a_Position");this.Xp=a.getAttribLocation(a.qe,"a_op");this.Wp=a.getAttribLocation(a.qe,"a_Previous");this.Vp=a.getAttribLocation(a.qe,"a_Next");this.sn=a.getAttribLocation(a.qe,"a_Tags");a.enableVertexAttribArray(this.nl);this.xv=a.getUniformLocation(a.qe,"u_FragColor");this.f2=a.getUniformLocation(a.qe,"u_FragColor2");this.yv=a.getUniformLocation(a.qe,"u_type");this.nN=a.getUniformLocation(a.qe,"u_width");this.h2=a.getUniformLocation(a.qe,"u_isDash");this.j2=a.getUniformLocation(a.qe, "u_onlyBorder");this.g2=a.getUniformLocation(a.qe,"u_dash");this.l2=a.getUniformLocation(a.qe,"u_scale");a.enable(a.BLEND);a.enable(a.CULL_FACE);a.cullFace(a.FRONT);a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD);a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.SRC_ALPHA,a.ONE);a.clearColor(0,0,0,0);this.xL=this.GI=this.rK=void 0;this.Ar=0;return!0},im:function(a){var b=Math.pow(2,a.pa.zoom-this.qd),c=a.pa.Fa.Qa(this.mk).Eb(this.Lf);this.transform={translate:this.transform[0].translate.add(c), scale:b,rotate:0};this.Fa=a.pa.Fa},po:function(a,b){var c=this.Zy(a,b),d=this.Bg;d.clear(d.COLOR_BUFFER_BIT);var f=this.r.oa?this.Bb:this.zu,g=height=0;0!==a.pa.rotation?(g=2*Math.floor(a.ra.hb.x)*f,height=2*Math.floor(a.ra.hb.y)*f):(g=a.size.width*f,height=a.size.height*f);g&&height&&(this.xa.width=g,this.xa.height=height,d.viewport(0,0,this.xa.width,this.xa.height),this.Wu.apply(this,c),this.Uc(a))},cC:256*Math.pow(2,18),MX:function(a,b){var c=b.Lb.region;if(c){this.zt(b.Lb.Lt*this.cC);for(var d= 0;d<c.length;d+=1){var f=c[d],g=f[2],h=f[3];h&&this.l.Jc&&(g=this.Mb.Xt(g,h),f.sd=g);g&&(a.bindBuffer(a.ARRAY_BUFFER,f[0]),a.vertexAttribPointer(this.nl,2,a.FLOAT,!1,8,0),a.uniform4f(this.xv,g[0],g[1],g[2],g[3]),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,f[1]),a.drawElements(a.TRIANGLES,f.xu,a.UNSIGNED_SHORT,0))}}},NX:function(a,b,c){var d=this.r.oa?this.Bb:this.zu,f;for(f in b){for(var g=b[f],h=0;h<g.length;h+=1){var k=g[h],l=k[2],m=l[4],n=l[10];n&&this.l.Jc&&(m=this.Mb.gk(m,n,0),k.sd=m);m&&(n="square"== k[2][9]?3:"round"==k[2][9]?4:2,a.uniform1i(this.yv,n),k[2][3]&&(this.zt(k.Ar*this.cC),a.bindBuffer(a.ARRAY_BUFFER,k[0]),a.vertexAttribPointer(this.nl,2,a.FLOAT,!1,44,0),a.vertexAttribPointer(this.Xp,3,a.FLOAT,!1,44,8),a.vertexAttribPointer(this.Wp,3,a.FLOAT,!1,44,20),a.vertexAttribPointer(this.Vp,3,a.FLOAT,!1,44,32),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,k[1]),k=k.xu,n=l[7]?l[3]:l[3]*c,a.uniform1f(this.nN,n*d),a.uniform4f(this.xv,m[0],m[1],m[2],m[3]),this.yt(l[5]?1:0,l[5],0),a.drawElements(a.TRIANGLES, k,a.UNSIGNED_SHORT,0)))}for(h=0;h<g.length;h+=1)k=g[h],l=k[2],l[0]&&(m=l[1],(n=l[10])&&this.l.Jc&&(m=this.Mb.gk(m,n,1),k.sd=m),m&&(n="square"==k[2][8]?3:"round"==k[2][8]?4:2,a.uniform1i(this.yv,n),this.zt(k.Ar*this.cC),a.bindBuffer(a.ARRAY_BUFFER,k[0]),a.vertexAttribPointer(this.nl,2,a.FLOAT,!1,44,0),a.vertexAttribPointer(this.Xp,3,a.FLOAT,!1,44,8),a.vertexAttribPointer(this.Wp,3,a.FLOAT,!1,44,20),a.vertexAttribPointer(this.Vp,3,a.FLOAT,!1,44,32),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,k[1]),k=k.xu,n= l[7]?l[0]:l[0]*c,a.uniform1f(this.nN,n*d),a.uniform4f(this.xv,m[0],m[1],m[2],m[3]),this.yt(l[2]?1:0,l[2],l[6]?1:0),a.drawElements(a.TRIANGLES,k,a.UNSIGNED_SHORT,0)))}},Gn:53109887,Hn:26262068,Wu:function(a,b,c){if(a.length){this.hc+=1;b=this.xa.width;c=this.xa.height;var d=this.Bg;b=(new W.Nv).p1(-b/2,b/2,c/2,-c/2);c=Math.pow(2,this.zoom-this.vn)*(this.r.oa?this.Bb:this.zu);c=(new W.Nv).scale(c,c,1);var f=Math.pow(2,this.vn-18),f=this.Fa.Eb(this.O/Math.pow(2,this.vn-this.zoom)).Qa(new W.L(this.Gn* f,this.Hn*f)),f=(new W.Nv).translate(-f.x,-f.y,0);d.uniformMatrix4fv(this.k2,!1,b.elements);d.uniformMatrix4fv(this.n2,!1,c.elements);d.uniformMatrix4fv(this.i2,!1,f.elements);d.uniform1f(this.l2,Math.pow(2,this.zoom-this.vn)*(this.r.oa?this.Bb:1));b=this.Mm=[];for(c=a.length-1;0<=c;c-=1){f=a[c];d.disableVertexAttribArray(this.Xp);d.disableVertexAttribArray(this.Wp);d.disableVertexAttribArray(this.Vp);d.disableVertexAttribArray(this.sn);this.yt(0,void 0,void 0);d.uniform1i(this.yv,0);this.zt(0);for(var g= 0,h=f.length;g<h;g+=1){var k=f[g];f[g].Lb&&(k.hc=this.hc,b.push(k),this.MX(d,k))}d.enableVertexAttribArray(this.Xp);d.enableVertexAttribArray(this.Wp);d.enableVertexAttribArray(this.Vp);d.disableVertexAttribArray(this.sn);if(f.length){for(var l={},g=0,h=f.length;g<h;g+=1){var k=f[g],m=k.Lb.road;if(m)for(var n in m){l[n]||(l[n]=[]);for(var p=0,q=m[n].length;p<q;p+=1)m[n][p].Ar=k.Lb.Lt,l[n].push(m[n][p])}}this.NX(d,l,Math.pow(1.3,this.zoom-f[0].Ga.z))}if(!(14>this.zoom))for(d.uniform1i(this.yv,1),this.yt(0, void 0,void 0),d.disableVertexAttribArray(this.Xp),d.disableVertexAttribArray(this.Wp),d.disableVertexAttribArray(this.Vp),d.enableVertexAttribArray(this.sn),g=0,h=f.length;g<h;g+=1)k=f[g],k.Lb.building&&this.FX(d,k)}}},FX:function(a,b){for(var c=b.Lb.building,d=0;d<c.length;d+=1){var f=c[d],g=f[3][0],h=f[3][1];if(!f||!g)break;var k=f[3][2];k&&this.l.Jc&&(h=this.Mb.tq(g,h,k),g=h[0],h=h[1],f.sd=g);if(g||h)g||(g=[0,0,0,0]),h||(h=[0,0,0,0]),a.uniform4f(this.f2,g[0],g[1],g[2],g[3]),a.uniform4f(this.xv, h[0],h[1],h[2],h[3]),f.$K&&(a.bindBuffer(a.ARRAY_BUFFER,f[0]),a.vertexAttribPointer(this.nl,2,a.FLOAT,!1,12,0),a.vertexAttribPointer(this.sn,1,a.FLOAT,!1,12,8),a.drawArrays(a.TRIANGLES,0,f.$K)),f.bL&&(a.bindBuffer(a.ARRAY_BUFFER,f[2]),a.vertexAttribPointer(this.nl,2,a.FLOAT,!1,12,0),a.vertexAttribPointer(this.sn,1,a.FLOAT,!1,12,8),a.drawArrays(a.LINES,0,f.bL)),f.aL&&(a.bindBuffer(a.ARRAY_BUFFER,f[1]),a.vertexAttribPointer(this.nl,2,a.FLOAT,!1,12,0),a.vertexAttribPointer(this.sn,1,a.FLOAT,!1,12,8), a.drawArrays(a.TRIANGLES,0,f.aL))}},yt:function(a,b,c){var d=this.Bg;a!==this.rK&&(d.uniform1i(this.h2,a),this.rK=a);a&&b!==this.GI&&(this.GI=b,d.uniform4f(this.g2,b[0],b[1],b[2]||0,b[3]||0));c!==this.xL&&(d.uniform1i(this.j2,c),this.xL=c)},zt:function(a){a!==this.Ar&&(this.Bg.uniform1f(this.m2,a),this.Ar=a)},Uc:function(){this.transform={translate:{x:this.xa.width/2,y:this.xa.height/2},scale:this.r.oa?1/this.Bb:1/this.zu,rotate:0}}});W.K.Pe.Md.gq=0; ', true), _jsload_('sync', '(function(){if(W.q.sc){var a=function(){var a=W.q.sc.split("."),b=window;do if(b=b[a.shift()],!b)return null;while(a.length);return b||null},b=function(b){var c=a();if(c){if("function"!==typeof c)throw Error(W.q.sc+" is not a function!");c()}else if(b)throw Error("Can not find callback: "+W.q.sc+", try define it before load JsApi!");};document.body&&a()?b():setTimeout(function(){b(!0)},300)}var c=["s=rsv3&product=JsInit&key="+W.q.key,"t="+(new Date).getTime()];c.push("resolution="+window.innerWidth+ "*"+window.innerHeight);c.push("mob="+(W.j.V?1:0));c.push("vt="+(W.j.cf?1:0));c.push("dpr="+window.devicePixelRatio);c.push("scale="+W.j.xC||0);c.push("detect="+W.j.oa);new W.qa.Ca(W.q.ec+"/v3/log/init?"+c.join("&"),{callback:"callback"})})(); ', true)
})()