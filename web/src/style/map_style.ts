import sortBy from 'lodash.sortby'
import { StyleSpecification } from 'maplibre-gl'
import basemap from './basemap'
import { LayerSpecificationWithZIndex } from './types'

const backgroundColour = '#DBE8A5'
const waterColour = '#2EADD9'

const layers: LayerSpecificationWithZIndex[] = [
    {
        id: 'background',
        type: 'background',
        paint: {
            'background-color': backgroundColour,
        },
    },
    ...basemap,
    {
        id: 'bounding_box',
        type: 'fill',
        source: 'site_plan',
        'source-layer': 'bounding_box',
        paint: {
            'fill-color': backgroundColour,
        },
    },
    {
        id: 'slope',
        type: 'raster',
        source: 'slope',
        minzoom: 5,
    },
    {
        id: 'hillshade',
        type: 'raster',
        source: 'hillshade',
        minzoom: 5,
    },
    {
        id: 'ortho',
        type: 'raster',
        source: 'ortho',
        minzoom: 15,
    },
    {
        id: 'background_areas_backstage',
        type: 'fill',
        source: 'site_plan',
        'source-layer': 'areas_backstage_polygon',
        paint: {
            'fill-pattern': 'no-access',
        },
    },
    {
        id: 'background_areas_camping_polygon',
        type: 'fill',
        source: 'site_plan',
        'source-layer': 'areas_camping_polygon',
        paint: {
            'fill-color': '#AFC944',
        },
    },
    {
        id: 'background_areas_camping_outline',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'areas_camping_polygon',
        paint: {
            'line-color': 'rgba(10, 100, 10, 0.4)',
            'line-blur': 7,
            'line-width': 3,
        },
    },
    {
        id: 'background_natural_woodland_polygon',
        type: 'fill',
        source: 'site_plan',
        'source-layer': 'natural_woodland_polygon',
        layout: {},
        paint: {
            'fill-color': '#528329',
        },
    },
    {
        id: 'background_natural_hedges_polygon',
        type: 'fill',
        source: 'site_plan',
        'source-layer': 'natural_hedges_polygon',
        layout: {},
        paint: {
            'fill-color': '#528329',
        },
    },
    {
        id: 'background_water_linestring',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'natural_water_linestring',
        layout: {
            'line-cap': 'round',
            'line-join': 'round',
            'line-round-limit': 1.1,
        },
        paint: {
            'line-color': waterColour,
            'line-width': ['interpolate', ['linear'], ['zoom'], 13, 1, 15, 2, 18, 6],
        },
    },
    {
        id: 'background_water_polygon',
        type: 'fill',
        source: 'site_plan',
        'source-layer': 'natural_water_polygon',
        layout: {},
        paint: {
            'fill-pattern': 'water',
        },
    },
    {
        id: 'background_water_polygon_shadow',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'natural_water_polygon',
        layout: {},
        paint: {
            'line-color': '#1D718C',
            'line-width': ['interpolate', ['linear'], ['zoom'], 13, 0, 18, 2],
        },
    },
    {
        id: 'paths_fire',
        type: 'fill',
        source: 'site_plan',
        'source-layer': 'paths_fire_polygon',
        layout: {},
        paint: {
            'fill-color': backgroundColour,
        },
    },
    {
        id: 'paths_tracks_case',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'paths_roads_polygon',
        minzoom: 0,
        layout: {
            'line-cap': 'round',
            'line-join': 'round',
        },
        paint: {
            'line-width': ['interpolate', ['linear'], ['zoom'], 12, 0, 17, 5],
            'line-color': 'rgba(132, 131, 131, 1)',
            'line-blur': 0.5,
        },
    },
    {
        id: 'paths_trackway_case',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'paths_trackway_polygon',
        layout: {},
        paint: {
            'line-width': 3,
            'line-color': 'rgba(140, 140, 140, 1)',
        },
    },
    {
        id: 'paths_trackway',
        type: 'fill',
        source: 'site_plan',
        'source-layer': 'paths_trackway_polygon',
        layout: {},
        paint: {
            'fill-color': 'rgba(185, 185, 185, 1)',
        },
    },
    {
        id: 'paths_tracks',
        type: 'fill',
        source: 'site_plan',
        'source-layer': 'paths_roads_polygon',
        minzoom: 0,
        paint: {
            'fill-color': 'rgba(177, 165, 147, 1)',
            'fill-outline-color': 'rgba(98, 98, 97, 0)',
        },
    },
    {
        id: 'heras',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'heras_internal__linestring',
        paint: {
            'line-color': 'rgba(148, 63, 63, 1)',
        },
    },
    {
        id: 'structures_shadow',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'structures_polygon',
        minzoom: 0,
        layout: {
            'line-cap': 'round',
            'line-join': 'round',
        },
        paint: {
            'line-color': 'rgba(0, 0, 0, 0.3)',
            'line-width': 6,
            'line-blur': 3,
        },
    },
    {
        id: 'structures_polygon',
        type: 'fill',
        source: 'site_plan',
        'source-layer': 'structures_polygon',
        minzoom: 0,
        paint: {
            'fill-color': '#F9E200',
        },
    },
    {
        id: 'structures_outline',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'structures_polygon',
        minzoom: 0,
        layout: {
            'line-cap': 'round',
            'line-join': 'round',
        },
        paint: {
            'line-color': 'rgba(90, 81, 31, 1)',
        },
    },
    {
        id: 'structures_linestring',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'structures_linestring',
        minzoom: 0,
        layout: {
            'line-cap': 'round',
            'line-join': 'round',
        },
        paint: {
            'line-color': 'rgba(90, 81, 31, 1)',
        },
    },
    {
        id: 'structures_guys',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'structures_guys_&_poles_linestring',
        minzoom: 0,
        paint: {
            'line-color': 'rgb(153, 144, 93)',
        },
    },
    {
        id: 'structures_exits',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'structures_exits_linestring',
        minzoom: 0,
        paint: {
            'line-width': 3,
            'line-color': 'rgb(153, 144, 93)',
        },
    },
    {
        id: 'structures_internal_linestring',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'structures_internal_linestring',
        minzoom: 0,
        paint: {
            'line-color': 'rgba(90, 81, 31, 1)',
        },
    },
    {
        id: 'structures_internal_polygon',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'structures_internal_polygon',
        minzoom: 0,
        paint: {
            'line-color': 'rgba(90, 81, 31, 1)',
        },
    },
    {
        id: 'walls',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'walls_linestring',
    },
    {
        id: 'fences',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'fences_linestring',
        paint: {
            'line-color': 'rgba(134, 134, 101, 1)',
        },
    },
    {
        id: 'buildings',
        type: 'fill-extrusion',
        source: 'site_plan',
        'source-layer': 'buildings_polygon',
        layout: {},
        paint: {
            'fill-extrusion-color': 'rgba(189, 170, 85, 1)',
            'fill-extrusion-height': 4,
        },
    },
    {
        id: 'services_comms_ducts_case',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'services_comms_ducts_linestring',
        layout: {},
        paint: {
            'line-color': 'rgba(150, 150, 150, 1)',
            'line-width': 3,
        },
    },
    {
        id: 'services_comms_ducts',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'services_comms_ducts_linestring',
        layout: {},
        paint: {
            'line-color': 'rgba(187, 0, 218, 1)',
            'line-width': 2,
        },
    },
    {
        id: 'services_comms_lines',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'services_comms_buried_lines_linestring',
        layout: {},
        paint: {
            'line-color': 'rgba(187, 0, 218, 1)',
            'line-width': 2,
        },
    },
    {
        id: 'services_comms_manholes',
        type: 'circle',
        source: 'site_plan',
        'source-layer': 'services_comms_manholes_point',
        minzoom: 15,
        paint: {
            'circle-color': 'rgba(187, 0, 218, 1)',
            'circle-stroke-width': 1,
        },
    },
    {
        id: 'services_comms_bt_poles',
        type: 'circle',
        source: 'site_plan',
        'source-layer': 'services_comms_bt_poles_point',
        minzoom: 15,
        paint: {
            'circle-color': 'rgba(136, 89, 6, 1)',
            'circle-stroke-width': 1,
        },
    },
    {
        id: 'services_comms_cabinets',
        type: 'circle',
        source: 'site_plan',
        'source-layer': 'services_comms_cabinets_point',
        minzoom: 15,
        paint: {
            'circle-color': 'rgba(218, 0, 62, 1)',
            'circle-stroke-width': 1,
        },
    },
    {
        id: 'services_comms_manholes_label-copy',
        type: 'symbol',
        source: 'site_plan',
        'source-layer': 'services_comms_manholes_point',
        minzoom: 15,
        layout: {
            'text-field': '{id}',
            'text-font': ['Open Sans Regular'],
            'text-size': 14,
            'text-offset': [-1, 0],
        },
        paint: {
            'text-halo-color': 'rgba(255, 255, 255, 1)',
            'text-halo-width': 2,
        },
    },
    {
        id: 'services_comms_cabinets_label',
        type: 'symbol',
        source: 'site_plan',
        'source-layer': 'services_comms_cabinets_point',
        minzoom: 15,
        layout: {
            'text-field': '{name}',
            'text-font': ['Open Sans Regular'],
            'text-size': 12,
            'text-offset': [-2, 0],
        },
        paint: {
            'text-halo-color': 'rgba(255, 255, 255, 1)',
            'text-halo-width': 2,
        },
    },
    {
        id: 'services_water_lines',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'services_water_lines_linestring',
        layout: {},
        paint: {
            'line-color': '#00C5FF',
            'line-width': 2,
        },
    },
    {
        id: 'services_water_points',
        type: 'circle',
        source: 'site_plan',
        'source-layer': 'services_water_points_point',
        paint: {
            'circle-color': 'rgba(0, 197, 255, 1)',
            'circle-stroke-color': 'rgba(22, 0, 195, 1)',
            'circle-stroke-width': 2,
            'circle-radius': 3,
        },
    },
    {
        id: 'site_water_pipes',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'water_pipes_linestring',
        paint: {
            'line-color': 'rgba(0, 89, 255, 1)',
            'line-width': 2,
        },
    },
    {
        id: 'boundary',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'heras_perimeter__linestring',
        layout: {
            'line-cap': 'round',
            'line-join': 'round',
        },
        paint: {
            'line-color': 'rgba(226, 11, 11, 1)',
            'line-dasharray': [10, 3],
            'line-width': ['interpolate', ['linear'], ['zoom'], 10, 1, 17, 2],
        },
    },
    {
        id: 'dk_radius',
        type: 'fill',
        source: 'site_plan',
        'source-layer': 'noc_dk_radius_polygon',
        paint: {
            'fill-color': 'rgba(169, 105, 163, 1)',
            'fill-opacity': 0.3,
        },
    },
    {
        id: 'dk',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'noc_dk_polygon',
        layout: {},
        paint: {},
    },
    {
        id: 'dk_names',
        type: 'symbol',
        source: 'site_plan',
        'source-layer': 'noc_dk_names_point',
        minzoom: 16,
        maxzoom: 24,
        layout: {
            'symbol-placement': 'point',
            'text-field': '{text}',
            'text-font': ['Open Sans Regular'],
            'text-justify': 'center',
            'text-size': 14,
            'text-padding': 2,
            'symbol-avoid-edges': true,
            'text-max-width': 8,
        },
        paint: {
            'text-halo-color': 'rgba(241, 241, 241, 0.8)',
            'text-halo-width': 3,
            'text-color': 'rgba(169, 105, 163, 1)',
            'text-translate': [-4, 0],
        },
    },
    {
        id: 'noc_fiber',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'noc_fibre_linestring',
        paint: {
            'line-opacity': 1,
            'line-color': 'rgba(147, 84, 150, 1)',
            'line-width': 2,
        },
    },
    {
        id: 'noc_fiber_labels',
        type: 'symbol',
        source: 'site_plan',
        'source-layer': 'noc_fibre_linestring',
        minzoom: 19,
        maxzoom: 24,
        layout: {
            'symbol-placement': 'line',
            'text-field': 'Fiber ({length}m)',
            'text-size': 12,
            'text-optional': false,
            'text-font': ['Open Sans Regular'],
            'text-keep-upright': true,
            'text-allow-overlap': false,
            'text-offset': [0, -1],
        },
        paint: {
            'text-halo-color': 'rgba(241, 241, 241, 0.8)',
            'text-halo-width': 3,
            'text-color': 'rgba(147, 84, 150, 1)',
        },
    },
    {
        id: 'noc_copper',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'noc_copper_linestring',
        minzoom: 0,
        paint: {
            'line-opacity': 1,
            'line-color': 'rgba(174, 127, 176, 1)',
            'line-width': 2,
        },
    },
    {
        id: 'noc_copper_labels',
        type: 'symbol',
        source: 'site_plan',
        'source-layer': 'noc_copper_linestring',
        minzoom: 19,
        maxzoom: 24,
        layout: {
            'symbol-placement': 'line',
            'text-field': 'Cat5e ({length}m)',
            'text-size': 12,
            'text-optional': false,
            'text-font': ['Open Sans Regular'],
            'text-keep-upright': true,
            'text-allow-overlap': false,
            'text-offset': [0, -1],
        },
        paint: {
            'text-halo-color': 'rgba(241, 241, 241, 0.8)',
            'text-halo-width': 3,
            'text-color': 'rgba(174, 127, 176, 1)',
        },
    },
    {
        id: 'noc_switch',
        type: 'circle',
        source: 'site_plan',
        'source-layer': 'noc_switch_point',
        minzoom: 0,
        maxzoom: 24,
        layout: {},
        paint: {
            'circle-color': 'rgba(75, 0, 130, 1)',
            'circle-radius': 3,
        },
    },
    {
        id: 'noc_switch_labels',
        type: 'symbol',
        source: 'site_plan',
        'source-layer': 'noc_switch_point',
        minzoom: 19,
        maxzoom: 24,
        layout: {
            'symbol-placement': 'point',
            'symbol-spacing': 1000,
            'symbol-avoid-edges': true,
            'text-field': '{switch}',
            'text-size': 12,
            'text-optional': false,
            'text-font': ['Open Sans Regular'],
            'text-keep-upright': true,
            'text-allow-overlap': false,
            'text-anchor': 'right',
            'text-offset': [-1, 0],
            'text-justify': 'right',
        },
        paint: {
            'text-halo-color': 'rgba(241, 241, 241, 0.8)',
            'text-halo-width': 3,
            'text-color': 'rgba(75, 0, 130, 1)',
        },
    },
    {
        id: 'power_generator',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'power_generator_polygon',
        layout: {},
        paint: {
            'line-color': 'magenta',
        },
    },
    {
        id: 'power_400_3',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'power_400_3_linestring',
        layout: {},
        paint: {
            'line-color': 'rgba(255, 68, 0, 1)',
            'line-width': 4,
        },
    },
    {
        id: 'power_125_3',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'power_125_3_linestring',
        layout: {},
        paint: {
            'line-color': 'rgba(199, 33, 33, 1)',
            'line-width': 3,
        },
    },
    {
        id: 'power_63_3',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'power_63_3_linestring',
        layout: {},
        paint: {
            'line-color': 'rgba(199, 33, 33, 1)',
            'line-width': 2,
        },
    },
    {
        id: 'power_32_3',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'power_32_3_linestring',
        layout: {},
        paint: {
            'line-color': 'rgba(199, 33, 33, 1)',
            'line-width': 1,
        },
    },
    {
        id: 'power_32_1',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'power_32_linestring',
        layout: {},
        paint: {
            'line-color': 'rgba(11, 11, 214, 1)',
            'line-width': 2,
        },
    },
    {
        id: 'power_16_1',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'power_16_linestring',
        layout: {},
        paint: {
            'line-color': 'rgba(11, 11, 214, 1)',
            'line-width': 1,
        },
    },
    {
        id: 'power_400_3_labels',
        type: 'symbol',
        source: 'site_plan',
        'source-layer': 'power_400_3_linestring',
        minzoom: 19,
        maxzoom: 24,
        layout: {
            'symbol-placement': 'line',
            'text-field': '400A ({length}m)',
            'text-size': 12,
            'text-optional': false,
            'text-font': ['Open Sans Regular'],
            'text-keep-upright': true,
            'text-allow-overlap': false,
            'text-offset': [0, -1],
        },
        paint: {
            'text-halo-color': 'rgba(241, 241, 241, 0.8)',
            'text-halo-width': 3,
            'text-color': 'rgba(199, 33, 33, 1)',
        },
    },
    {
        id: 'power_125_3_labels',
        type: 'symbol',
        source: 'site_plan',
        'source-layer': 'power_125_3_linestring',
        minzoom: 19,
        maxzoom: 24,
        layout: {
            'symbol-placement': 'line',
            'text-field': '125A ({length}m)',
            'text-size': 12,
            'text-optional': false,
            'text-font': ['Open Sans Regular'],
            'text-keep-upright': true,
            'text-allow-overlap': false,
            'text-offset': [0, -1],
        },
        paint: {
            'text-halo-color': 'rgba(241, 241, 241, 0.8)',
            'text-halo-width': 3,
            'text-color': 'rgba(199, 33, 33, 1)',
        },
    },
    {
        id: 'power_63_3_labels',
        type: 'symbol',
        source: 'site_plan',
        'source-layer': 'power_63_3_linestring',
        minzoom: 19,
        maxzoom: 24,
        layout: {
            'symbol-placement': 'line',
            'text-field': '63A ({length}m)',
            'text-size': 12,
            'text-optional': false,
            'text-font': ['Open Sans Regular'],
            'text-keep-upright': true,
            'text-allow-overlap': false,
            'text-offset': [0, -1],
        },
        paint: {
            'text-halo-color': 'rgba(241, 241, 241, 0.8)',
            'text-halo-width': 3,
            'text-color': 'rgba(199, 33, 33, 1)',
        },
    },
    {
        id: 'power_32_3_labels',
        type: 'symbol',
        source: 'site_plan',
        'source-layer': 'power_32_3_linestring',
        minzoom: 19,
        maxzoom: 24,
        layout: {
            'symbol-placement': 'line',
            'text-field': '32A ({length}m)',
            'text-size': 12,
            'text-optional': false,
            'text-font': ['Open Sans Regular'],
            'text-keep-upright': true,
            'text-allow-overlap': false,
            'text-offset': [0, -1],
        },
        paint: {
            'text-halo-color': 'rgba(241, 241, 241, 0.8)',
            'text-halo-width': 3,
            'text-color': 'rgba(199, 33, 33, 1)',
        },
    },
    {
        id: 'power_32_1_labels',
        type: 'symbol',
        source: 'site_plan',
        'source-layer': 'power_32_linestring',
        minzoom: 19,
        maxzoom: 24,
        layout: {
            'symbol-placement': 'line',
            'text-field': '32A ({length}m)',
            'text-size': 12,
            'text-optional': false,
            'text-font': ['Open Sans Regular'],
            'text-keep-upright': true,
            'text-allow-overlap': false,
            'text-offset': [0, -1],
        },
        paint: {
            'text-halo-color': 'rgba(241, 241, 241, 0.8)',
            'text-halo-width': 3,
            'text-color': 'rgba(11, 11, 214, 1)',
        },
    },
    {
        id: 'power_16_1_labels',
        type: 'symbol',
        source: 'site_plan',
        'source-layer': 'power_16_linestring',
        minzoom: 19,
        maxzoom: 24,
        layout: {
            'symbol-placement': 'line',
            'symbol-spacing': 1000,
            'text-field': '16A ({length}m)',
            'text-size': 12,
            'text-optional': false,
            'text-font': ['Open Sans Regular'],
            'text-keep-upright': true,
            'text-allow-overlap': false,
            'text-offset': [0, -1],
        },
        paint: {
            'text-halo-color': 'rgba(241, 241, 241, 0.8)',
            'text-halo-width': 3,
            'text-color': 'rgba(11, 11, 214, 1)',
        },
    },
    {
        id: 'power_distro',
        type: 'circle',
        source: 'site_plan',
        'source-layer': 'power_distro_point',
        layout: {},
        paint: {
            'circle-color': [
                'match',
                ['get', 'distro'],
                'TOB/32',
                'blue',
                'TOB/16',
                'blue',
                'CABIN',
                'blue',
                'ColdRoom',
                'blue',
                'SOB',
                'blue',
                'SSB 1',
                'blue',
                'SSB 2',
                'blue',
                'MD1 32 1',
                'blue',
                'rgba(199, 33, 33, 1)',
            ],
            'circle-radius': 3,
        },
    },
    {
        id: 'power_distro_labels',
        type: 'symbol',
        source: 'site_plan',
        'source-layer': 'power_distro_point',
        minzoom: 19,
        maxzoom: 24,
        layout: {
            'symbol-placement': 'point',
            'symbol-spacing': 1000,
            'symbol-avoid-edges': true,
            'text-field': '{name}\n({distro})',
            'text-size': 12,
            'text-optional': false,
            'text-font': ['Open Sans Regular'],
            'text-keep-upright': true,
            'text-allow-overlap': false,
            'text-anchor': 'left',
            'text-offset': [1, 0],
        },
        paint: {
            'text-halo-color': 'rgba(241, 241, 241, 0.8)',
            'text-halo-width': 3,
            'text-color': [
                'match',
                ['get', 'distro'],
                'TOB/32',
                'blue',
                'TOB/16',
                'blue',
                'CABIN',
                'blue',
                'ColdRoom',
                'blue',
                'SOB',
                'blue',
                'SSB 1',
                'blue',
                'SSB 2',
                'blue',
                'MD1 32 1',
                'blue',
                'rgba(199, 33, 33, 1)',
            ],
        },
    },
    {
        id: 'lighting_festoon',
        type: 'line',
        source: 'site_plan',
        'source-layer': 'lighting_festoon_linestring',
        layout: {},
        paint: {
            'line-color': 'rgba(200, 184, 42, 1)',
            'line-width': 2,
        },
    },
    {
        id: 'lighting_festoon_labels',
        type: 'symbol',
        source: 'site_plan',
        'source-layer': 'lighting_festoon_linestring',
        minzoom: 19,
        maxzoom: 24,
        layout: {
            'symbol-placement': 'line',
            'text-field': 'Festoon ({length}m)',
            'text-size': 12,
            'text-optional': false,
            'text-font': ['Open Sans Regular'],
            'text-keep-upright': true,
            'text-allow-overlap': false,
            'text-offset': [0, -1],
        },
        paint: {
            'text-halo-color': 'rgba(241, 241, 241, 0.8)',
            'text-halo-width': 3,
            'text-color': 'rgba(200, 184, 42, 1)',
        },
    },
    {
        id: 'villages_symbol',
        type: 'circle',
        source: 'villages',
        'source-layer': '',
        minzoom: 16,
        paint: {
            'circle-color': 'rgb(246, 163, 24)',
            'circle-radius': ['interpolate', ['linear'], ['zoom'], 16, 6, 24, 26],
            'circle-blur': 0.5,
            'circle-stroke-width': 0.5,
        },
    },
    {
        id: 'background_trees',
        type: 'symbol',
        source: 'site_plan',
        'source-layer': 'natural_trees_point',
        minzoom: 13,
        layout: {
            'icon-image': 'tree',
            'icon-size': [
                'interpolate',
                ['exponential', 1.5],
                ['zoom'],
                14,
                0.01,
                22,
                ['*', ['to-number', ['coalesce', ['get', 'size'], 0.6]], 2.5],
            ],
            'icon-allow-overlap': true,
            'icon-rotate': ['%', ['*', ['get', 'gid'], 200], 360],
        },
        paint: {},
    },
    {
        id: 'villages_text',
        type: 'symbol',
        source: 'villages',
        'source-layer': '',
        minzoom: 17,
        maxzoom: 24,
        layout: {
            'text-field': '{name}',
            'text-font': ['Open Sans Regular'],
            'text-offset': [0, -1.8],
            'text-size': ['interpolate', ['linear'], ['zoom'], 17, 11, 24, 16],
        },
        paint: {
            'text-halo-color': 'rgba(244, 235, 247, 0.73)',
            'text-halo-width': 2,
            'text-halo-blur': 1,
        },
    },
    {
        id: 'labels_camping',
        type: 'symbol',
        source: 'site_plan',
        'source-layer': 'camping_centroid',
        minzoom: 16,
        maxzoom: 24,
        layout: {
            'text-field': 'Camping: {camping}',
            'text-font': ['Open Sans Regular'],
            'text-justify': 'center',
            'text-size': ['interpolate', ['linear'], ['zoom'], 16, 10, 24, 24],
            'text-padding': 2,
            'symbol-placement': 'point',
            'symbol-spacing': 1000,
            'symbol-avoid-edges': true,
            'text-max-width': 8,
        },
        paint: {
            'text-halo-width': 3,
            'text-halo-blur': 4,
            'text-halo-color': 'rgba(241, 241, 241, 1)',
        },
    },
    {
        id: 'labels_gate',
        type: 'symbol',
        source: 'site_plan',
        'source-layer': 'labels_gate_labels_point',
        minzoom: 16,
        maxzoom: 24,
        layout: {
            'text-field': '{text}',
            'text-size': 12,
            'text-optional': false,
            'text-font': ['Open Sans Regular'],
            'text-keep-upright': true,
            'text-ignore-placement': false,
            'text-allow-overlap': false,
        },
        paint: {
            'text-halo-color': 'rgba(241, 241, 241, 1)',
            'text-halo-width': 3,
            'text-halo-blur': 4,
            'text-color': 'rgba(0, 0, 0, 1)',
        },
    },
    {
        id: 'labels_streets',
        type: 'symbol',
        source: 'site_plan',
        'source-layer': 'streets_linestring',
        minzoom: 16,
        layout: {
            'text-field': '{name}',
            'text-font': ['Raleway SemiBold'],
            'text-size': ['interpolate', ['linear'], ['zoom'], 16, 8, 17, 9, 23, 50],
            'text-max-angle': 10,
            'symbol-placement': 'line',
            'symbol-spacing': 500,
        },
        paint: {
            'text-halo-color': 'rgba(120, 120, 120, 1)',
            'text-halo-width': 15,
            'text-halo-blur': 40,
            'text-color': 'rgba(250, 250, 250, 1)',
        },
    },
    {
        id: 'labels_main_3',
        type: 'symbol',
        filter: ['!', ['has', 'priority']],
        source: 'site_plan',
        'source-layer': 'labels_point',
        minzoom: 17.5,
        layout: {
            'text-field': '{text}',
            'text-font': ['Raleway SemiBold'],
            'text-size': 13,
            'text-optional': false,
        },
        paint: {
            'text-halo-color': 'rgba(241, 241, 241, 1)',
            'text-halo-width': 3,
            'text-halo-blur': 1,
            'text-color': 'rgba(0, 0, 0, 1)',
        },
    },
    {
        id: 'labels_main_2',
        type: 'symbol',
        filter: ['==', ['get', 'priority'], '2'],
        source: 'site_plan',
        'source-layer': 'labels_point',
        minzoom: 16,
        layout: {
            'text-field': '{text}',
            'text-font': ['Raleway SemiBold'],
            'text-size': ['interpolate', ['linear'], ['zoom'], 16, 6, 23, 30],
            'text-optional': false,
        },
        paint: {
            'text-halo-color': 'rgba(241, 241, 241, 1)',
            'text-halo-width': 3,
            'text-halo-blur': 1,
            'text-color': 'rgba(0, 0, 0, 1)',
        },
    },
    {
        id: 'labels_main_1',
        type: 'symbol',
        filter: ['==', ['get', 'priority'], '1'],
        source: 'site_plan',
        'source-layer': 'labels_point',
        minzoom: 15,
        layout: {
            'text-field': '{text}',
            'text-font': ['Raleway SemiBold'],
            'text-size': ['interpolate', ['linear'], ['zoom'], 15, 10, 23, 40],
            'text-optional': false,
        },
        paint: {
            'text-halo-color': 'rgba(241, 241, 241, 1)',
            'text-halo-width': 3,
            'text-halo-blur': 1,
            'text-color': 'rgba(0, 0, 0, 1)',
        },
    },
]

const style: StyleSpecification = {
    version: 8,
    name: 'EMF',
    center: [-2.3784, 52.0411],
    zoom: 16,
    bearing: 0,
    pitch: 0,
    sources: {
        openmaptiles: {
            type: 'vector',
            url: 'https://api.maptiler.com/tiles/v3/tiles.json?key=iiaOS0kq1MPr2LlHPTSa',
        },
        site_plan: {
            type: 'vector',
            url: 'https://map.emfcamp.org/capabilities/buildmap',
        },
        villages: {
            type: 'geojson',
            data: 'https://www.emfcamp.org/api/villages.geojson',
        },
        slope: {
            type: 'raster',
            tiles: ['https://map.emfcamp.org/data/slope/{z}/{x}/{y}'],
            attribution: 'Elevation data © Environment Agency 2022. All rights reserved.',
        },
        hillshade: {
            type: 'raster',
            tiles: ['https://map.emfcamp.org/data/hillshade/{z}/{x}/{y}'],
            attribution: 'Elevation data © Environment Agency 2022. All rights reserved.',
        },
        ortho: {
            type: 'raster',
            tiles: ['https://map.emfcamp.org/data/ortho/{z}/{x}/{y}'],
        },
    },
    sprite: 'https://openmaptiles.github.io/positron-gl-style/sprite',
    glyphs: 'https://map.emfcamp.org/fonts/{fontstack}/{range}.pbf',
    layers: sortBy(layers, [(item) => item.zindex || 0]).map((item) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { zindex: _, ...new_item } = item
        return new_item
    }),
}

export default style