require([
      "esri/views/MapView",
      "esri/WebMap",
      "dojo/domReady!"
    ], function(
      MapView, WebMap
    ) {

      /************************************************************
       * Creates a new WebMap instance. A WebMap must reference
       * a PortalItem ID that represents a WebMap saved to
       * arcgis.com or an on-premise portal.
       *
       * To load a WebMap from an on-premise portal, set the portal
       * url with esriConfig.portalUrl.
       ************************************************************/
      
  var webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: "e6a4eb8e582d4f23bc7fd7ee067bc393"
        }
      });

      /************************************************************
       * Set the WebMap instance to the map property in a MapView.
       ************************************************************/
      var view = new MapView({
        map: webmap,
        container: "viewDiv",
        zoom: 7,
          center: [-94.3569, 38.09127]
      });
    });
