#!/bin/bash

# Minify the geojson file
minify-geojson -v -w "ID_DB,DAM_NAME,LONG_WW,LAT_WW,MAIN_USE,COUNTRY,LAT_DD,LONG_DD,NEAR_CITY,CAP_MCM,AREA_HA" -c 5 ../MTE/src/data/geojson/filtered/data.geojson

minify-geojson -v -b "code, nom" -c 5 ../MTE/src/data/geojson/departements/departements.geojson
# Exit the script
exit 0
