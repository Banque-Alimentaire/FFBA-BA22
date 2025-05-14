var size = 0;
var placement = 'point';

var style_DpartementsBretagne_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10.4px \'Trebuchet MS\', sans-serif";
    var labelFill = "#060401";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("libgeo") !== null) {
        labelText = String(feature.get("libgeo"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(254,128,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
