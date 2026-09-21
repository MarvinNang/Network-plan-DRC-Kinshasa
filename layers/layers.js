var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Locationscores_1 = new ol.format.GeoJSON();
var features_Locationscores_1 = format_Locationscores_1.readFeatures(json_Locationscores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Locationscores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locationscores_1.addFeatures(features_Locationscores_1);
var lyr_Locationscores_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Locationscores_1, 
                style: style_Locationscores_1,
                popuplayertitle: 'Location scores',
                interactive: true,
    title: 'Location scores<br />\
    <img src="styles/legend/Locationscores_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/Locationscores_1_1.png" /> 1 - 2<br />\
    <img src="styles/legend/Locationscores_1_2.png" /> 2 - 3<br />\
    <img src="styles/legend/Locationscores_1_3.png" /> 3 - 4<br />' });
var format_Provinces_2 = new ol.format.GeoJSON();
var features_Provinces_2 = format_Provinces_2.readFeatures(json_Provinces_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provinces_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provinces_2.addFeatures(features_Provinces_2);
var lyr_Provinces_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provinces_2, 
                style: style_Provinces_2,
                popuplayertitle: 'Provinces',
                interactive: true,
                title: '<img src="styles/legend/Provinces_2.png" /> Provinces'
            });
var format_Kinshasa_3 = new ol.format.GeoJSON();
var features_Kinshasa_3 = format_Kinshasa_3.readFeatures(json_Kinshasa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kinshasa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kinshasa_3.addFeatures(features_Kinshasa_3);
var lyr_Kinshasa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kinshasa_3, 
                style: style_Kinshasa_3,
                popuplayertitle: 'Kinshasa',
                interactive: true,
                title: '<img src="styles/legend/Kinshasa_3.png" /> Kinshasa'
            });
var format_PlannedsitesKinshasa_4 = new ol.format.GeoJSON();
var features_PlannedsitesKinshasa_4 = format_PlannedsitesKinshasa_4.readFeatures(json_PlannedsitesKinshasa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlannedsitesKinshasa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlannedsitesKinshasa_4.addFeatures(features_PlannedsitesKinshasa_4);
var lyr_PlannedsitesKinshasa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlannedsitesKinshasa_4, 
                style: style_PlannedsitesKinshasa_4,
                popuplayertitle: 'Planned sites Kinshasa',
                interactive: true,
                title: '<img src="styles/legend/PlannedsitesKinshasa_4.png" /> Planned sites Kinshasa'
            });
var format_Identifiessites_5 = new ol.format.GeoJSON();
var features_Identifiessites_5 = format_Identifiessites_5.readFeatures(json_Identifiessites_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Identifiessites_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Identifiessites_5.addFeatures(features_Identifiessites_5);
var lyr_Identifiessites_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Identifiessites_5, 
                style: style_Identifiessites_5,
                popuplayertitle: 'Identifies sites',
                interactive: true,
                title: '<img src="styles/legend/Identifiessites_5.png" /> Identifies sites'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Locationscores_1.setVisible(true);lyr_Provinces_2.setVisible(true);lyr_Kinshasa_3.setVisible(true);lyr_PlannedsitesKinshasa_4.setVisible(true);lyr_Identifiessites_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Locationscores_1,lyr_Provinces_2,lyr_Kinshasa_3,lyr_PlannedsitesKinshasa_4,lyr_Identifiessites_5];
lyr_Locationscores_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_Provinces_2.set('fieldAliases', {'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', });
lyr_Kinshasa_3.set('fieldAliases', {'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', });
lyr_PlannedsitesKinshasa_4.set('fieldAliases', {'Scenario': 'Scenario', 'Station ID': 'Station ID', 'Country': 'Country', 'City': 'City', 'Region': 'Region', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Nb_racks': 'Nb_racks', });
lyr_Identifiessites_5.set('fieldAliases', {'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Commentaires': 'Commentaires', });
lyr_Locationscores_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'score': 'TextEdit', });
lyr_Provinces_2.set('fieldImages', {'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', });
lyr_Kinshasa_3.set('fieldImages', {'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', });
lyr_PlannedsitesKinshasa_4.set('fieldImages', {'Scenario': 'TextEdit', 'Station ID': 'TextEdit', 'Country': 'TextEdit', 'City': 'TextEdit', 'Region': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type': 'TextEdit', 'Nb_racks': 'Range', });
lyr_Identifiessites_5.set('fieldImages', {'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Commentaires': 'TextEdit', });
lyr_Locationscores_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'score': 'inline label - always visible', });
lyr_Provinces_2.set('fieldLabels', {'adm1_name': 'inline label - always visible', 'adm1_name1': 'hidden field', 'adm1_name2': 'hidden field', 'adm1_name3': 'hidden field', 'adm1_pcode': 'hidden field', 'adm0_name': 'inline label - always visible', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'area_sqkm': 'hidden field', 'version': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', });
lyr_Kinshasa_3.set('fieldLabels', {'adm1_name': 'inline label - always visible', 'adm1_name1': 'hidden field', 'adm1_name2': 'hidden field', 'adm1_name3': 'hidden field', 'adm1_pcode': 'hidden field', 'adm0_name': 'inline label - always visible', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'area_sqkm': 'hidden field', 'version': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', });
lyr_PlannedsitesKinshasa_4.set('fieldLabels', {'Scenario': 'hidden field', 'Station ID': 'hidden field', 'Country': 'hidden field', 'City': 'inline label - always visible', 'Region': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Type': 'inline label - always visible', 'Nb_racks': 'inline label - always visible', });
lyr_Identifiessites_5.set('fieldLabels', {'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Commentaires': 'inline label - always visible', });
lyr_Identifiessites_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});