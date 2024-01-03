/**
 * This script is inteded to display the map on the landing page of this website.
 */

map = new OpenLayers.Map("mapdiv", {
    controls: [
        new OpenLayers.Control.Navigation({
            zoomWheelEnabled: false  // Disable zooming with the mouse wheel
        }),
        // Add any other controls you need here
    ]
});
map.addLayer(new OpenLayers.Layer.OSM());

var lonLat = new OpenLayers.LonLat(11.45123536890872, 52.062377175318154)
    .transform(
        new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
        map.getProjectionObject() // to Spherical Mercator Projection
    );
        
var zoom = 11;

var markers = new OpenLayers.Layer.Markers( "Markers" );
map.addLayer(markers);

markers.addMarker(new OpenLayers.Marker(lonLat));

map.setCenter (lonLat, zoom);
