var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MapaTuristicoInteractivo_1 = new ol.format.GeoJSON();
var features_MapaTuristicoInteractivo_1 = format_MapaTuristicoInteractivo_1.readFeatures(json_MapaTuristicoInteractivo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapaTuristicoInteractivo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapaTuristicoInteractivo_1.addFeatures(features_MapaTuristicoInteractivo_1);
var lyr_MapaTuristicoInteractivo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MapaTuristicoInteractivo_1, 
                style: style_MapaTuristicoInteractivo_1,
                popuplayertitle: 'Mapa Turistico Interactivo',
                interactive: true,
                title: '<img src="styles/legend/MapaTuristicoInteractivo_1.png" /> Mapa Turistico Interactivo'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_MapaTuristicoInteractivo_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MapaTuristicoInteractivo_1];
lyr_MapaTuristicoInteractivo_1.set('fieldAliases', {'Atractivo': 'Atractivo', 'Tipo': 'Tipo', 'Coordenada': 'Coordenada', 'UTM ( E)': 'UTM ( E)', 'UTM (N)': 'UTM (N)', 'Dirección': 'Dirección', 'Municipio': 'Municipio', 'Estado': 'Estado', 'Descripci�': 'Descripci�', 'Sector Ind': 'Sector Ind', 'Parque Nac': 'Parque Nac', 'Servicios': 'Servicios', 'Ente Regul': 'Ente Regul', 'Registro F': 'Registro F', });
lyr_MapaTuristicoInteractivo_1.set('fieldImages', {'Atractivo': 'TextEdit', 'Tipo': 'TextEdit', 'Coordenada': 'TextEdit', 'UTM ( E)': 'TextEdit', 'UTM (N)': 'TextEdit', 'Dirección': 'TextEdit', 'Municipio': 'TextEdit', 'Estado': 'TextEdit', 'Descripci�': 'TextEdit', 'Sector Ind': 'TextEdit', 'Parque Nac': 'TextEdit', 'Servicios': 'TextEdit', 'Ente Regul': 'TextEdit', 'Registro F': 'ExternalResource', });
lyr_MapaTuristicoInteractivo_1.set('fieldLabels', {'Atractivo': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Coordenada': 'inline label - always visible', 'UTM ( E)': 'inline label - always visible', 'UTM (N)': 'inline label - always visible', 'Dirección': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Estado': 'inline label - always visible', 'Descripci�': 'inline label - always visible', 'Sector Ind': 'inline label - always visible', 'Parque Nac': 'inline label - always visible', 'Servicios': 'inline label - always visible', 'Ente Regul': 'inline label - always visible', 'Registro F': 'inline label - always visible', });
lyr_MapaTuristicoInteractivo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});