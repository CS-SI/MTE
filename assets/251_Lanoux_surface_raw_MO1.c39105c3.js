const r=`date,value\r
2017-02-22,8000\r
2017-02-25,1300\r
2017-03-14,1000\r
2017-03-17,1300\r
2017-04-03,200\r
2017-04-06,100\r
2017-04-16,4300\r
2017-04-23,17100\r
2017-06-15,1483500\r
2017-06-22,1489500\r
2017-07-05,1412800\r
2017-07-27,1414800\r
2017-08-11,1338100\r
2017-08-21,1420300\r
2017-08-26,1368800\r
2017-09-08,1324200\r
2017-09-13,1307200\r
2017-09-28,1308400\r
2017-10-05,1340300\r
2017-10-08,1359000\r
2017-10-10,1347300\r
2017-10-13,1336900\r
2017-10-15,1306600\r
2017-10-25,1294700\r
2018-02-25,2100\r
2018-04-18,100\r
2018-04-21,1500\r
2018-04-26,1600\r
2018-05-11,28000\r
2018-06-20,1551000\r
2018-06-25,1558400\r
2018-06-27,1557300\r
2018-07-15,1528800\r
2018-07-17,1564400\r
2018-08-16,1549800\r
2018-08-24,1500700\r
2018-08-26,1549200\r
2018-09-03,1479400\r
2018-09-20,1510200\r
2018-09-25,1527200\r
2018-09-28,1456100\r
2018-10-05,1510800\r
2018-10-13,1411600\r
2018-10-25,1456500\r
2019-02-20,1500\r
2019-02-22,4300\r
2019-02-25,4300\r
2019-02-27,3300\r
2019-03-02,1100\r
2019-03-12,2700\r
2019-03-14,1300\r
2019-03-17,3100\r
2019-03-27,2100\r
2019-04-28,1600\r
2019-05-01,1900\r
2019-05-13,100600\r
2019-05-16,345500\r
2019-05-23,615300\r
2019-05-31,1328200\r
2019-06-12,1449900\r
2019-06-25,1426300\r
2019-06-27,1443200\r
2019-07-05,1477500\r
2019-07-10,1476800\r
2019-07-12,1443800\r
2019-07-15,1470100\r
2019-08-01,1443300\r
2019-08-06,1449200\r
2019-08-09,1438300\r
2019-08-16,1437900\r
2019-08-21,1472200\r
2019-08-26,1487900\r
2019-09-03,1448200\r
2019-09-08,1399400\r
2019-09-30,1395900\r
2019-10-03,1419800\r
2019-10-05,1355700\r
2019-10-08,1440500\r
2019-10-10,1406400\r
2019-10-13,1414400\r
2020-02-20,27300\r
2020-02-22,23200\r
2020-03-08,2500\r
2020-03-11,3900\r
2020-03-21,3600\r
2020-04-05,900\r
2020-04-10,2600\r
2020-04-15,7800\r
2020-05-07,1161000\r
2020-05-20,1405100\r
2020-05-22,1316700\r
2020-05-25,1427800\r
2020-06-21,1445700\r
2020-06-24,1475900\r
2020-06-26,1474300\r
2020-07-04,1475100\r
2020-07-06,1480900\r
2020-07-16,1486700\r
2020-07-19,1462200\r
2020-07-29,1487000\r
2020-07-31,1455700\r
2020-08-05,1432400\r
2020-08-23,1459100\r
2020-08-25,1424500\r
2020-09-04,1381700\r
2020-09-14,1423800\r
2020-09-29,1427900\r
2020-10-17,1466800\r
2021-02-19,8300\r
2021-02-24,3300\r
2021-03-01,1000\r
2021-03-28,9200\r
2021-03-31,3000\r
2021-04-05,10000\r
2021-05-20,1141500\r
2021-06-14,1264200\r
2021-06-16,1080200\r
2021-06-21,1303300\r
2021-07-01,1245900\r
2021-07-09,1311900\r
2021-07-11,1292000\r
2021-07-16,1316700\r
2021-07-19,1322100\r
2021-07-21,1369500\r
2021-08-10,1298600\r
2021-08-20,1259700\r
2021-08-23,1225300\r
2021-08-28,1237000\r
2021-09-17,1196000\r
2021-09-19,1206800\r
2021-10-07,1224700\r
2021-10-09,1156400\r
2021-10-12,1210600\r
2021-10-17,1169700\r
2021-10-24,1242900\r
2021-10-27,1226100\r
2022-02-24,4000\r
2022-03-01,4700\r
2022-03-03,100\r
2022-04-10,100\r
2022-04-17,1900\r
2022-05-10,137800\r
2022-05-12,364800\r
2022-05-17,1150200\r
2022-05-20,1201900\r
2022-05-22,1114200\r
2022-05-27,1335200\r
2022-06-04,1380500\r
2022-06-09,1299900\r
2022-06-19,1364300\r
2022-06-26,1274400\r
2022-06-29,1218700\r
2022-07-01,1306700\r
2022-07-11,1363400\r
2022-07-14,1297900\r
2022-07-16,1371000\r
2022-07-21,1342400\r
2022-07-24,1306400\r
2022-07-26,1368800\r
2022-08-03,1319700\r
2022-08-20,1347100\r
2022-08-23,1262100\r
2022-08-30,1334000\r
2022-09-19,1249400\r
2022-10-04,1326600\r
2022-10-09,1301000\r
2022-10-12,1246500\r
2023-02-19,17700\r
2023-03-03,300\r
2023-03-13,36800\r
2023-03-16,38200\r
2023-03-28,135400\r
2023-04-07,15200\r
2023-04-17,107100\r
`;export{r as default};