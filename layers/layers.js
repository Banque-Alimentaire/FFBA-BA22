var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Communes_1 = new ol.format.GeoJSON();
var features_Communes_1 = format_Communes_1.readFeatures(json_Communes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_1.addFeatures(features_Communes_1);
var lyr_Communes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_1, 
                style: style_Communes_1,
                popuplayertitle: 'Communes',
                interactive: true,
                title: '<img src="styles/legend/Communes_1.png" /> Communes'
            });
var format_TauxdepauvretEPCI_2 = new ol.format.GeoJSON();
var features_TauxdepauvretEPCI_2 = format_TauxdepauvretEPCI_2.readFeatures(json_TauxdepauvretEPCI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TauxdepauvretEPCI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TauxdepauvretEPCI_2.addFeatures(features_TauxdepauvretEPCI_2);
var lyr_TauxdepauvretEPCI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TauxdepauvretEPCI_2, 
                style: style_TauxdepauvretEPCI_2,
                popuplayertitle: 'Taux de pauvreté EPCI',
                interactive: true,
    title: 'Taux de pauvreté EPCI<br />\
    <img src="styles/legend/TauxdepauvretEPCI_2_0.png" /> 9,6 - 9,6<br />\
    <img src="styles/legend/TauxdepauvretEPCI_2_1.png" /> 9,6 - 12,2<br />\
    <img src="styles/legend/TauxdepauvretEPCI_2_2.png" /> 12,2 - 14,8<br />\
    <img src="styles/legend/TauxdepauvretEPCI_2_3.png" /> 14,8 - 19,1<br />' });
var format_Communescouvertespardautresassociations_3 = new ol.format.GeoJSON();
var features_Communescouvertespardautresassociations_3 = format_Communescouvertespardautresassociations_3.readFeatures(json_Communescouvertespardautresassociations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communescouvertespardautresassociations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communescouvertespardautresassociations_3.addFeatures(features_Communescouvertespardautresassociations_3);
var lyr_Communescouvertespardautresassociations_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communescouvertespardautresassociations_3, 
                style: style_Communescouvertespardautresassociations_3,
                popuplayertitle: 'Communes couvertes par d\'autres associations',
                interactive: true,
                title: '<img src="styles/legend/Communescouvertespardautresassociations_3.png" /> Communes couvertes par d\'autres associations'
            });
var format_Couvertureassociationspartenaires_4 = new ol.format.GeoJSON();
var features_Couvertureassociationspartenaires_4 = format_Couvertureassociationspartenaires_4.readFeatures(json_Couvertureassociationspartenaires_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Couvertureassociationspartenaires_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Couvertureassociationspartenaires_4.addFeatures(features_Couvertureassociationspartenaires_4);
var lyr_Couvertureassociationspartenaires_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Couvertureassociationspartenaires_4, 
                style: style_Couvertureassociationspartenaires_4,
                popuplayertitle: 'Couverture associations partenaires ',
                interactive: true,
                title: '<img src="styles/legend/Couvertureassociationspartenaires_4.png" /> Couverture associations partenaires '
            });
var format_Communesnoncouvertes_5 = new ol.format.GeoJSON();
var features_Communesnoncouvertes_5 = format_Communesnoncouvertes_5.readFeatures(json_Communesnoncouvertes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communesnoncouvertes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communesnoncouvertes_5.addFeatures(features_Communesnoncouvertes_5);
var lyr_Communesnoncouvertes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communesnoncouvertes_5, 
                style: style_Communesnoncouvertes_5,
                popuplayertitle: 'Communes non couvertes',
                interactive: true,
                title: '<img src="styles/legend/Communesnoncouvertes_5.png" /> Communes non couvertes'
            });
var format_SSVPCommunesdesservies_6 = new ol.format.GeoJSON();
var features_SSVPCommunesdesservies_6 = format_SSVPCommunesdesservies_6.readFeatures(json_SSVPCommunesdesservies_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSVPCommunesdesservies_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSVPCommunesdesservies_6.addFeatures(features_SSVPCommunesdesservies_6);
var lyr_SSVPCommunesdesservies_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSVPCommunesdesservies_6, 
                style: style_SSVPCommunesdesservies_6,
                popuplayertitle: 'SSVP - Communes desservies',
                interactive: true,
                title: '<img src="styles/legend/SSVPCommunesdesservies_6.png" /> SSVP - Communes desservies'
            });
var format_UltimoCommunesdesservies_7 = new ol.format.GeoJSON();
var features_UltimoCommunesdesservies_7 = format_UltimoCommunesdesservies_7.readFeatures(json_UltimoCommunesdesservies_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UltimoCommunesdesservies_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UltimoCommunesdesservies_7.addFeatures(features_UltimoCommunesdesservies_7);
var lyr_UltimoCommunesdesservies_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UltimoCommunesdesservies_7, 
                style: style_UltimoCommunesdesservies_7,
                popuplayertitle: 'Ultimo - Communes desservies',
                interactive: true,
                title: '<img src="styles/legend/UltimoCommunesdesservies_7.png" /> Ultimo - Communes desservies'
            });
var format_EPCICtesdArmor_8 = new ol.format.GeoJSON();
var features_EPCICtesdArmor_8 = format_EPCICtesdArmor_8.readFeatures(json_EPCICtesdArmor_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCICtesdArmor_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCICtesdArmor_8.addFeatures(features_EPCICtesdArmor_8);
var lyr_EPCICtesdArmor_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EPCICtesdArmor_8, 
                style: style_EPCICtesdArmor_8,
                popuplayertitle: 'EPCI - Côtes d\'Armor',
                interactive: true,
                title: '<img src="styles/legend/EPCICtesdArmor_8.png" /> EPCI - Côtes d\'Armor'
            });
var format_DpartementsBretagne_9 = new ol.format.GeoJSON();
var features_DpartementsBretagne_9 = format_DpartementsBretagne_9.readFeatures(json_DpartementsBretagne_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DpartementsBretagne_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DpartementsBretagne_9.addFeatures(features_DpartementsBretagne_9);
var lyr_DpartementsBretagne_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DpartementsBretagne_9, 
                style: style_DpartementsBretagne_9,
                popuplayertitle: 'Départements Bretagne',
                interactive: true,
                title: '<img src="styles/legend/DpartementsBretagne_9.png" /> Départements Bretagne'
            });
var format_Pointspostaux_10 = new ol.format.GeoJSON();
var features_Pointspostaux_10 = format_Pointspostaux_10.readFeatures(json_Pointspostaux_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointspostaux_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointspostaux_10.addFeatures(features_Pointspostaux_10);
var lyr_Pointspostaux_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pointspostaux_10, 
                style: style_Pointspostaux_10,
                popuplayertitle: 'Points postaux',
                interactive: true,
                title: '<img src="styles/legend/Pointspostaux_10.png" /> Points postaux'
            });
var format_RestoduCoeur_11 = new ol.format.GeoJSON();
var features_RestoduCoeur_11 = format_RestoduCoeur_11.readFeatures(json_RestoduCoeur_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RestoduCoeur_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RestoduCoeur_11.addFeatures(features_RestoduCoeur_11);
var lyr_RestoduCoeur_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RestoduCoeur_11, 
                style: style_RestoduCoeur_11,
                popuplayertitle: 'Resto du Coeur',
                interactive: true,
                title: '<img src="styles/legend/RestoduCoeur_11.png" /> Resto du Coeur'
            });
var format_SPF_12 = new ol.format.GeoJSON();
var features_SPF_12 = format_SPF_12.readFeatures(json_SPF_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPF_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPF_12.addFeatures(features_SPF_12);
var lyr_SPF_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPF_12, 
                style: style_SPF_12,
                popuplayertitle: 'SPF',
                interactive: true,
                title: '<img src="styles/legend/SPF_12.png" /> SPF'
            });
var format_SecoursCatholique_13 = new ol.format.GeoJSON();
var features_SecoursCatholique_13 = format_SecoursCatholique_13.readFeatures(json_SecoursCatholique_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SecoursCatholique_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SecoursCatholique_13.addFeatures(features_SecoursCatholique_13);
var lyr_SecoursCatholique_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SecoursCatholique_13, 
                style: style_SecoursCatholique_13,
                popuplayertitle: 'Secours Catholique',
                interactive: true,
                title: '<img src="styles/legend/SecoursCatholique_13.png" /> Secours Catholique'
            });
var format_CRF_14 = new ol.format.GeoJSON();
var features_CRF_14 = format_CRF_14.readFeatures(json_CRF_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRF_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRF_14.addFeatures(features_CRF_14);
var lyr_CRF_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CRF_14, 
                style: style_CRF_14,
                popuplayertitle: 'CRF',
                interactive: true,
                title: '<img src="styles/legend/CRF_14.png" /> CRF'
            });
var format_assospartenairesindpendantes_15 = new ol.format.GeoJSON();
var features_assospartenairesindpendantes_15 = format_assospartenairesindpendantes_15.readFeatures(json_assospartenairesindpendantes_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_assospartenairesindpendantes_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_assospartenairesindpendantes_15.addFeatures(features_assospartenairesindpendantes_15);
var lyr_assospartenairesindpendantes_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_assospartenairesindpendantes_15, 
                style: style_assospartenairesindpendantes_15,
                popuplayertitle: 'assos partenaires indépendantes',
                interactive: true,
                title: '<img src="styles/legend/assospartenairesindpendantes_15.png" /> assos partenaires indépendantes'
            });
var format_assospartenaires_grandsrseauxCRFSCFSPF_16 = new ol.format.GeoJSON();
var features_assospartenaires_grandsrseauxCRFSCFSPF_16 = format_assospartenaires_grandsrseauxCRFSCFSPF_16.readFeatures(json_assospartenaires_grandsrseauxCRFSCFSPF_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_assospartenaires_grandsrseauxCRFSCFSPF_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_assospartenaires_grandsrseauxCRFSCFSPF_16.addFeatures(features_assospartenaires_grandsrseauxCRFSCFSPF_16);
var lyr_assospartenaires_grandsrseauxCRFSCFSPF_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_assospartenaires_grandsrseauxCRFSCFSPF_16, 
                style: style_assospartenaires_grandsrseauxCRFSCFSPF_16,
                popuplayertitle: 'assos partenaires_grands réseaux (CRF, SCF, SPF, ...)',
                interactive: true,
                title: '<img src="styles/legend/assospartenaires_grandsrseauxCRFSCFSPF_16.png" /> assos partenaires_grands réseaux (CRF, SCF, SPF, ...)'
            });
var format_assospartenaires_CCAS_17 = new ol.format.GeoJSON();
var features_assospartenaires_CCAS_17 = format_assospartenaires_CCAS_17.readFeatures(json_assospartenaires_CCAS_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_assospartenaires_CCAS_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_assospartenaires_CCAS_17.addFeatures(features_assospartenaires_CCAS_17);
var lyr_assospartenaires_CCAS_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_assospartenaires_CCAS_17, 
                style: style_assospartenaires_CCAS_17,
                popuplayertitle: 'assos partenaires_CCAS',
                interactive: true,
                title: '<img src="styles/legend/assospartenaires_CCAS_17.png" /> assos partenaires_CCAS'
            });
var format_associationspartenaires_18 = new ol.format.GeoJSON();
var features_associationspartenaires_18 = format_associationspartenaires_18.readFeatures(json_associationspartenaires_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_associationspartenaires_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_associationspartenaires_18.addFeatures(features_associationspartenaires_18);
var lyr_associationspartenaires_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_associationspartenaires_18, 
                style: style_associationspartenaires_18,
                popuplayertitle: ' associations partenaires',
                interactive: true,
                title: '<img src="styles/legend/associationspartenaires_18.png" />  associations partenaires'
            });
var format_AntennesBABretagne_19 = new ol.format.GeoJSON();
var features_AntennesBABretagne_19 = format_AntennesBABretagne_19.readFeatures(json_AntennesBABretagne_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AntennesBABretagne_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AntennesBABretagne_19.addFeatures(features_AntennesBABretagne_19);
var lyr_AntennesBABretagne_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AntennesBABretagne_19, 
                style: style_AntennesBABretagne_19,
                popuplayertitle: 'Antennes BA Bretagne',
                interactive: true,
                title: '<img src="styles/legend/AntennesBABretagne_19.png" /> Antennes BA Bretagne'
            });
var format_BanquesAlimentairesdeBretagne_20 = new ol.format.GeoJSON();
var features_BanquesAlimentairesdeBretagne_20 = format_BanquesAlimentairesdeBretagne_20.readFeatures(json_BanquesAlimentairesdeBretagne_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BanquesAlimentairesdeBretagne_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BanquesAlimentairesdeBretagne_20.addFeatures(features_BanquesAlimentairesdeBretagne_20);
var lyr_BanquesAlimentairesdeBretagne_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BanquesAlimentairesdeBretagne_20, 
                style: style_BanquesAlimentairesdeBretagne_20,
                popuplayertitle: 'Banques Alimentaires de Bretagne',
                interactive: true,
                title: '<img src="styles/legend/BanquesAlimentairesdeBretagne_20.png" /> Banques Alimentaires de Bretagne'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Communes_1.setVisible(false);lyr_TauxdepauvretEPCI_2.setVisible(false);lyr_Communescouvertespardautresassociations_3.setVisible(true);lyr_Couvertureassociationspartenaires_4.setVisible(true);lyr_Communesnoncouvertes_5.setVisible(true);lyr_SSVPCommunesdesservies_6.setVisible(false);lyr_UltimoCommunesdesservies_7.setVisible(false);lyr_EPCICtesdArmor_8.setVisible(true);lyr_DpartementsBretagne_9.setVisible(true);lyr_Pointspostaux_10.setVisible(false);lyr_RestoduCoeur_11.setVisible(true);lyr_SPF_12.setVisible(true);lyr_SecoursCatholique_13.setVisible(true);lyr_CRF_14.setVisible(true);lyr_assospartenairesindpendantes_15.setVisible(false);lyr_assospartenaires_grandsrseauxCRFSCFSPF_16.setVisible(false);lyr_assospartenaires_CCAS_17.setVisible(false);lyr_associationspartenaires_18.setVisible(true);lyr_AntennesBABretagne_19.setVisible(true);lyr_BanquesAlimentairesdeBretagne_20.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Communes_1,lyr_TauxdepauvretEPCI_2,lyr_Communescouvertespardautresassociations_3,lyr_Couvertureassociationspartenaires_4,lyr_Communesnoncouvertes_5,lyr_SSVPCommunesdesservies_6,lyr_UltimoCommunesdesservies_7,lyr_EPCICtesdArmor_8,lyr_DpartementsBretagne_9,lyr_Pointspostaux_10,lyr_RestoduCoeur_11,lyr_SPF_12,lyr_SecoursCatholique_13,lyr_CRF_14,lyr_assospartenairesindpendantes_15,lyr_assospartenaires_grandsrseauxCRFSCFSPF_16,lyr_assospartenaires_CCAS_17,lyr_associationspartenaires_18,lyr_AntennesBABretagne_19,lyr_BanquesAlimentairesdeBretagne_20];
lyr_Communes_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codgeo': 'codgeo', 'dep': 'dep', 'reg': 'reg', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'libgeo', 'Population au dernier recensement 2021': 'Population au dernier recensement 2021', 'Libellé commune': 'Libellé commune', 'BA': 'BA', });
lyr_TauxdepauvretEPCI_2.set('fieldAliases', {'fid': 'fid', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'DEPT': 'DEPT', 'SIREN': 'SIREN', 'SOCIALE': 'EPCI', 'JURIDIQUE': 'JURIDIQUE', 'DEP_COM': 'DEP_COM', 'INSEE': 'INSEE', 'Taux de pa': 'Taux de pauvreté (en %)', });
lyr_Communescouvertespardautresassociations_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codgeo': 'codgeo', 'dep': 'dep', 'reg': 'reg', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'libgeo', 'Population': 'Population', });
lyr_Couvertureassociationspartenaires_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codgeo': 'codgeo', 'dep': 'dep', 'reg': 'reg', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'Commune', 'Population': 'Population', 'Libellé c': 'Libellé c', 'BA': 'Association ', });
lyr_Communesnoncouvertes_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codgeo': 'codgeo', 'dep': 'dep', 'reg': 'reg', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'libgeo', 'Population': 'Population', });
lyr_SSVPCommunesdesservies_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codgeo': 'codgeo', 'dep': 'dep', 'reg': 'reg', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'Commune', 'BA': 'BA', });
lyr_UltimoCommunesdesservies_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codgeo': 'codgeo', 'dep': 'dep', 'reg': 'reg', 'xcl2154': 'xcl2154', 'ycl2154': 'ycl2154', 'libgeo': 'libgeo', 'BA': 'BA', });
lyr_EPCICtesdArmor_8.set('fieldAliases', {'fid': 'fid', 'ID_GEOFLA': 'ID_GEOFLA', 'X_CHF_LIEU': 'X_CHF_LIEU', 'Y_CHF_LIEU': 'Y_CHF_LIEU', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'Z_MOYEN': 'Z_MOYEN', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'DEPT': 'DEPT', 'SOCIALE': 'EPCI', 'JURIDIQUE': 'JURIDIQUE', 'INSEE': 'INSEE', 'Taux de pauvreté (seuil à 60% du revenu médian) 2020': 'Taux de pauvreté en % (2020)', });
lyr_DpartementsBretagne_9.set('fieldAliases', {'id': 'id', 'dep': 'Code', 'reg': 'Code', 'libgeo': 'Région', });
lyr_Pointspostaux_10.set('fieldAliases', {'id': 'id', 'latitude': 'latitude', '_i': '_i', 'caracteristique_du_site': 'Type d\'agence postale', 'libelle_du_site': 'Commune', 'longitude': 'longitude', });
lyr_RestoduCoeur_11.set('fieldAliases', {'fid': 'fid', 'Code commu': 'Code commu', 'Libellé c': 'Commune', 'Adresse': 'Adresse', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_SPF_12.set('fieldAliases', {'fid': 'fid', 'Partenaires associatifs': 'Partenaires associatifs', 'Adresse': 'Adresse', 'CP': 'CP', 'Ville': 'Ville', 'Full Address': 'Full Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SecoursCatholique_13.set('fieldAliases', {'Secours Ca': 'Secours Ca', 'Adresse': 'Adresse', 'CP': 'CP', 'Ville': 'Ville', 'Full Addre': 'Full Addre', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_CRF_14.set('fieldAliases', {'fid': 'fid', 'Croix-Rouge': 'Croix-Rouge', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Infos': 'Infos', });
lyr_assospartenairesindpendantes_15.set('fieldAliases', {'fid': 'fid', 'Code Assoc': 'Code Assoc', 'Famille d\'': 'Famille d\'', 'catégorie': 'catégorie', 'Associatio': 'Association', 'Adresse': 'Adresse', 'Code posta': 'Code posta', 'Départeme': 'Départeme', 'Ville': 'Ville', 'Full Addre': 'Full Addre', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type de di': 'Type de distribution', 'Personnes': 'Personnes', 'Informatio': 'Informations', });
lyr_assospartenaires_grandsrseauxCRFSCFSPF_16.set('fieldAliases', {'fid': 'fid', 'Code Association': 'Code Association', 'Famille d\'appartenance': 'Famille d\'appartenance', 'catégorie': 'catégorie', 'Association': 'Association', 'Adresse': 'Adresse', 'Code postal': 'Code postal', 'Département': 'Département', 'Ville': 'Ville', 'Full Address': 'Full Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type de distribution': 'Type de distribution', 'Personnes concernées': 'Personnes concernées', 'Informations complémentaires': 'Informations complémentaires', });
lyr_assospartenaires_CCAS_17.set('fieldAliases', {'fid': 'fid', 'Code Association': 'Code Association', 'Famille d\'appartenance': 'Famille d\'appartenance', 'catégorie': 'catégorie', 'Association': 'Association', 'Adresse': 'Adresse', 'Code postal': 'Code postal', 'Département': 'Département', 'Ville': 'Ville', 'Full Address': 'Full Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type de distribution': 'Type de distribution', 'Personnes concernées': 'Personnes concernées', 'Informations complémentaires': 'Informations complémentaires', });
lyr_associationspartenaires_18.set('fieldAliases', {'fid': 'fid', 'Code Association': 'Code Association', 'Famille d\'appartenance': 'Famille d\'appartenance', 'catégorie': 'catégorie', 'Association': 'Association', 'Adresse': 'Adresse', 'Code postal': 'Code postal', 'Département': 'Département', 'Ville': 'Ville', 'Full Address': 'Full Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type de distribution': 'Type de distribution', 'Personnes concernées': 'Personnes concernées', 'Informations complémentaires': 'Informations complémentaires', });
lyr_AntennesBABretagne_19.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'BANQUES AL': 'BANQUES AL', });
lyr_BanquesAlimentairesdeBretagne_20.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'Code_BA': 'Code_BA', 'BANQUES AL': 'BANQUES AL', 'Email': 'Email', 'adresse1': 'adresse1', 'adresse2': 'adresse2', 'CP': 'CP', 'ville': 'ville', 'Full Addre': 'Full Addre', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Communes_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'codgeo': 'TextEdit', 'dep': 'TextEdit', 'reg': 'TextEdit', 'xcl2154': 'TextEdit', 'ycl2154': 'TextEdit', 'libgeo': 'TextEdit', 'Population au dernier recensement 2021': 'Range', 'Libellé commune': 'TextEdit', 'BA': 'TextEdit', });
lyr_TauxdepauvretEPCI_2.set('fieldImages', {'fid': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'DEPT': 'TextEdit', 'SIREN': 'TextEdit', 'SOCIALE': 'TextEdit', 'JURIDIQUE': 'TextEdit', 'DEP_COM': 'TextEdit', 'INSEE': 'TextEdit', 'Taux de pa': 'TextEdit', });
lyr_Communescouvertespardautresassociations_3.set('fieldImages', {'fid': '', 'id': '', 'codgeo': '', 'dep': '', 'reg': '', 'xcl2154': '', 'ycl2154': '', 'libgeo': '', 'Population': '', });
lyr_Couvertureassociationspartenaires_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'codgeo': 'TextEdit', 'dep': 'TextEdit', 'reg': 'TextEdit', 'xcl2154': 'TextEdit', 'ycl2154': 'TextEdit', 'libgeo': 'TextEdit', 'Population': 'TextEdit', 'Libellé c': '', 'BA': 'TextEdit', });
lyr_Communesnoncouvertes_5.set('fieldImages', {'fid': '', 'id': '', 'codgeo': '', 'dep': '', 'reg': '', 'xcl2154': '', 'ycl2154': '', 'libgeo': '', 'Population': '', });
lyr_SSVPCommunesdesservies_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'codgeo': 'TextEdit', 'dep': 'TextEdit', 'reg': 'TextEdit', 'xcl2154': 'TextEdit', 'ycl2154': 'TextEdit', 'libgeo': 'TextEdit', 'BA': 'TextEdit', });
lyr_UltimoCommunesdesservies_7.set('fieldImages', {'fid': '', 'id': '', 'codgeo': '', 'dep': '', 'reg': '', 'xcl2154': '', 'ycl2154': '', 'libgeo': '', 'BA': '', });
lyr_EPCICtesdArmor_8.set('fieldImages', {'fid': 'Hidden', 'ID_GEOFLA': 'Hidden', 'X_CHF_LIEU': 'Hidden', 'Y_CHF_LIEU': 'Hidden', 'X_CENTROID': 'Hidden', 'Y_CENTROID': 'Hidden', 'Z_MOYEN': 'Hidden', 'SUPERFICIE': 'Hidden', 'POPULATION': 'TextEdit', 'DEPT': 'Hidden', 'SOCIALE': 'TextEdit', 'JURIDIQUE': 'Hidden', 'INSEE': 'Hidden', 'Taux de pauvreté (seuil à 60% du revenu médian) 2020': 'TextEdit', });
lyr_DpartementsBretagne_9.set('fieldImages', {'id': 'Hidden', 'dep': 'Hidden', 'reg': 'Hidden', 'libgeo': 'TextEdit', });
lyr_Pointspostaux_10.set('fieldImages', {'id': 'TextEdit', 'latitude': 'TextEdit', '_i': 'Range', 'caracteristique_du_site': 'TextEdit', 'libelle_du_site': 'TextEdit', 'longitude': 'TextEdit', });
lyr_RestoduCoeur_11.set('fieldImages', {'fid': 'TextEdit', 'Code commu': 'TextEdit', 'Libellé c': 'TextEdit', 'Adresse': 'TextEdit', 'longitude': 'Hidden', 'latitude': 'Hidden', });
lyr_SPF_12.set('fieldImages', {'fid': 'TextEdit', 'Partenaires associatifs': 'TextEdit', 'Adresse': 'TextEdit', 'CP': 'Range', 'Ville': 'TextEdit', 'Full Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_SecoursCatholique_13.set('fieldImages', {'Secours Ca': 'TextEdit', 'Adresse': 'TextEdit', 'CP': 'TextEdit', 'Ville': 'TextEdit', 'Full Addre': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_CRF_14.set('fieldImages', {'fid': '', 'Croix-Rouge': '', 'Adresse': '', 'Latitude': '', 'Longitude': '', 'Infos': '', });
lyr_assospartenairesindpendantes_15.set('fieldImages', {'fid': 'TextEdit', 'Code Assoc': 'TextEdit', 'Famille d\'': 'TextEdit', 'catégorie': 'TextEdit', 'Associatio': 'TextEdit', 'Adresse': 'TextEdit', 'Code posta': 'TextEdit', 'Départeme': 'TextEdit', 'Ville': 'TextEdit', 'Full Addre': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type de di': 'TextEdit', 'Personnes': 'TextEdit', 'Informatio': 'TextEdit', });
lyr_assospartenaires_grandsrseauxCRFSCFSPF_16.set('fieldImages', {'fid': '', 'Code Association': '', 'Famille d\'appartenance': '', 'catégorie': '', 'Association': '', 'Adresse': '', 'Code postal': '', 'Département': '', 'Ville': '', 'Full Address': '', 'Latitude': '', 'Longitude': '', 'Type de distribution': '', 'Personnes concernées': '', 'Informations complémentaires': '', });
lyr_assospartenaires_CCAS_17.set('fieldImages', {'fid': '', 'Code Association': '', 'Famille d\'appartenance': '', 'catégorie': '', 'Association': '', 'Adresse': '', 'Code postal': '', 'Département': '', 'Ville': '', 'Full Address': '', 'Latitude': '', 'Longitude': '', 'Type de distribution': '', 'Personnes concernées': '', 'Informations complémentaires': '', });
lyr_associationspartenaires_18.set('fieldImages', {'fid': 'TextEdit', 'Code Association': 'Range', 'Famille d\'appartenance': 'TextEdit', 'catégorie': 'Range', 'Association': 'TextEdit', 'Adresse': 'TextEdit', 'Code postal': 'Range', 'Département': 'Range', 'Ville': 'TextEdit', 'Full Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Type de distribution': 'TextEdit', 'Personnes concernées': 'Range', 'Informations complémentaires': 'TextEdit', });
lyr_AntennesBABretagne_19.set('fieldImages', {'fid': '', 'REGION': '', 'Adresse': '', 'Latitude': '', 'Longitude': '', 'BANQUES AL': '', });
lyr_BanquesAlimentairesdeBretagne_20.set('fieldImages', {'fid': '', 'REGION': '', 'Code_BA': '', 'BANQUES AL': '', 'Email': '', 'adresse1': '', 'adresse2': '', 'CP': '', 'ville': '', 'Full Addre': '', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Communes_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'codgeo': 'hidden field', 'dep': 'hidden field', 'reg': 'hidden field', 'xcl2154': 'hidden field', 'ycl2154': 'hidden field', 'libgeo': 'no label', 'Population au dernier recensement 2021': 'inline label - visible with data', 'Libellé commune': 'no label', 'BA': 'no label', });
lyr_TauxdepauvretEPCI_2.set('fieldLabels', {'fid': 'hidden field', 'SUPERFICIE': 'hidden field', 'POPULATION': 'header label - visible with data', 'DEPT': 'hidden field', 'SIREN': 'hidden field', 'SOCIALE': 'inline label - visible with data', 'JURIDIQUE': 'hidden field', 'DEP_COM': 'hidden field', 'INSEE': 'hidden field', 'Taux de pa': 'header label - visible with data', });
lyr_Communescouvertespardautresassociations_3.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'codgeo': 'hidden field', 'dep': 'hidden field', 'reg': 'hidden field', 'xcl2154': 'hidden field', 'ycl2154': 'hidden field', 'libgeo': 'no label', 'Population': 'inline label - visible with data', });
lyr_Couvertureassociationspartenaires_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'codgeo': 'hidden field', 'dep': 'hidden field', 'reg': 'hidden field', 'xcl2154': 'hidden field', 'ycl2154': 'hidden field', 'libgeo': 'no label', 'Population': 'inline label - always visible', 'Libellé c': 'no label', 'BA': 'header label - visible with data', });
lyr_Communesnoncouvertes_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'codgeo': 'hidden field', 'dep': 'hidden field', 'reg': 'hidden field', 'xcl2154': 'hidden field', 'ycl2154': 'hidden field', 'libgeo': 'no label', 'Population': 'inline label - visible with data', });
lyr_SSVPCommunesdesservies_6.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'codgeo': 'hidden field', 'dep': 'hidden field', 'reg': 'hidden field', 'xcl2154': 'hidden field', 'ycl2154': 'hidden field', 'libgeo': 'no label', 'BA': 'hidden field', });
lyr_UltimoCommunesdesservies_7.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'codgeo': 'hidden field', 'dep': 'hidden field', 'reg': 'hidden field', 'xcl2154': 'hidden field', 'ycl2154': 'hidden field', 'libgeo': 'no label', 'BA': 'hidden field', });
lyr_EPCICtesdArmor_8.set('fieldLabels', {'POPULATION': 'header label - visible with data', 'SOCIALE': 'inline label - visible with data', 'Taux de pauvreté (seuil à 60% du revenu médian) 2020': 'header label - visible with data', });
lyr_DpartementsBretagne_9.set('fieldLabels', {'libgeo': 'header label - visible with data', });
lyr_Pointspostaux_10.set('fieldLabels', {'id': 'hidden field', 'latitude': 'hidden field', '_i': 'hidden field', 'caracteristique_du_site': 'header label - visible with data', 'libelle_du_site': 'header label - visible with data', 'longitude': 'hidden field', });
lyr_RestoduCoeur_11.set('fieldLabels', {'fid': 'hidden field', 'Code commu': 'hidden field', 'Libellé c': 'header label - visible with data', 'Adresse': 'header label - visible with data', });
lyr_SPF_12.set('fieldLabels', {'fid': 'hidden field', 'Partenaires associatifs': 'no label', 'Adresse': 'header label - visible with data', 'CP': 'no label', 'Ville': 'no label', 'Full Address': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_SecoursCatholique_13.set('fieldLabels', {'Secours Ca': 'header label - visible with data', 'Adresse': 'header label - visible with data', 'CP': 'no label', 'Ville': 'no label', 'Full Addre': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_CRF_14.set('fieldLabels', {'fid': 'hidden field', 'Croix-Rouge': 'header label - visible with data', 'Adresse': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Infos': 'header label - visible with data', });
lyr_assospartenairesindpendantes_15.set('fieldLabels', {'fid': 'hidden field', 'Code Assoc': 'hidden field', 'Famille d\'': 'hidden field', 'catégorie': 'header label - visible with data', 'Associatio': 'header label - visible with data', 'Adresse': 'header label - visible with data', 'Code posta': 'no label', 'Départeme': 'hidden field', 'Ville': 'no label', 'Full Addre': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Type de di': 'header label - visible with data', 'Personnes': 'header label - visible with data', 'Informatio': 'header label - visible with data', });
lyr_assospartenaires_grandsrseauxCRFSCFSPF_16.set('fieldLabels', {'fid': 'inline label - always visible', 'Code Association': 'hidden field', 'Famille d\'appartenance': 'hidden field', 'catégorie': 'header label - visible with data', 'Association': 'header label - visible with data', 'Adresse': 'header label - visible with data', 'Code postal': 'no label', 'Département': 'hidden field', 'Ville': 'no label', 'Full Address': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Type de distribution': 'header label - visible with data', 'Personnes concernées': 'header label - visible with data', 'Informations complémentaires': 'header label - visible with data', });
lyr_assospartenaires_CCAS_17.set('fieldLabels', {'fid': 'hidden field', 'Code Association': 'hidden field', 'Famille d\'appartenance': 'hidden field', 'catégorie': 'header label - visible with data', 'Association': 'header label - visible with data', 'Adresse': 'header label - visible with data', 'Code postal': 'no label', 'Département': 'hidden field', 'Ville': 'no label', 'Full Address': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Type de distribution': 'header label - visible with data', 'Personnes concernées': 'header label - visible with data', 'Informations complémentaires': 'header label - visible with data', });
lyr_associationspartenaires_18.set('fieldLabels', {'fid': 'hidden field', 'Code Association': 'hidden field', 'Famille d\'appartenance': 'hidden field', 'catégorie': 'hidden field', 'Association': 'header label - visible with data', 'Adresse': 'header label - visible with data', 'Code postal': 'no label', 'Département': 'hidden field', 'Ville': 'no label', 'Full Address': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Type de distribution': 'header label - visible with data', 'Personnes concernées': 'header label - visible with data', 'Informations complémentaires': 'header label - visible with data', });
lyr_AntennesBABretagne_19.set('fieldLabels', {'fid': 'hidden field', 'REGION': 'hidden field', 'Adresse': 'header label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'BANQUES AL': 'header label - visible with data', });
lyr_BanquesAlimentairesdeBretagne_20.set('fieldLabels', {'fid': 'hidden field', 'REGION': 'hidden field', 'Code_BA': 'hidden field', 'BANQUES AL': 'header label - visible with data', 'Email': 'hidden field', 'adresse1': 'header label - visible with data', 'adresse2': 'no label', 'CP': 'no label', 'ville': 'header label - visible with data', 'Full Addre': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_BanquesAlimentairesdeBretagne_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});