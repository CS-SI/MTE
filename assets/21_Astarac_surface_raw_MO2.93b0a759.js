const r=`date,value\r
2017-02-15,843700\r
2017-02-22,843700\r
2017-02-25,902300\r
2017-03-17,1041100\r
2017-03-27,1041100\r
2017-04-06,1208900\r
2017-05-16,1329000\r
2017-05-26,1360900\r
2017-06-02,1360900\r
2017-06-05,1365800\r
2017-06-12,1326100\r
2017-07-05,1382500\r
2017-07-07,1382500\r
2017-08-14,1022500\r
2017-08-17,1022500\r
2017-08-19,1022500\r
2017-08-21,1022500\r
2017-08-22,1022500\r
2017-08-24,1022500\r
2017-08-26,885700\r
2017-08-29,885700\r
2017-09-03,885700\r
2017-09-08,750000\r
2017-09-13,749500\r
2017-09-15,749500\r
2017-10-08,784400\r
2017-10-10,784400\r
2017-10-11,784400\r
2017-10-13,787000\r
2017-10-15,791600\r
2017-10-16,791600\r
2017-10-18,791600\r
2017-10-20,774100\r
2017-10-23,778200\r
2017-10-25,752300\r
2017-10-26,752300\r
2017-10-28,752300\r
2017-10-30,752300\r
2017-10-31,752300\r
2017-11-02,752300\r
2017-11-07,685800\r
2017-11-14,685800\r
2017-11-15,685800\r
2017-11-17,724100\r
2017-11-19,722300\r
2017-11-22,727000\r
2017-11-24,727000\r
2017-11-25,727000\r
2017-11-27,707400\r
2018-02-15,1421400\r
2018-02-25,1482400\r
2018-02-27,1472300\r
2018-03-02,1524500\r
2018-03-07,1524500\r
2018-03-09,1519700\r
2018-03-22,1495300\r
2018-04-01,1487300\r
2018-04-21,1522500\r
2018-04-23,1522500\r
2018-04-24,1522500\r
2018-04-26,1522500\r
2018-05-11,1518100\r
2018-05-19,1518100\r
2018-05-21,1518100\r
2018-05-23,1437400\r
2018-06-20,1523900\r
2018-06-22,1523900\r
2018-06-23,1523900\r
2018-06-25,1541400\r
2018-06-28,1541400\r
2018-07-02,1543600\r
2018-07-03,1543600\r
2018-07-07,1511500\r
2018-07-08,1511500\r
2018-07-10,1514900\r
2018-07-15,1488300\r
2018-07-18,1488300\r
2018-07-22,1482600\r
2018-07-23,1482600\r
2018-07-25,1484400\r
2018-07-27,1468600\r
2018-07-30,1475100\r
2018-08-01,1475100\r
2018-08-02,1475100\r
2018-08-04,1465800\r
2018-08-06,1431600\r
2018-08-11,1413100\r
2018-08-12,1413100\r
2018-08-19,1466100\r
2018-08-21,1466100\r
2018-08-22,1466100\r
2018-08-26,1466100\r
2018-08-27,1466100\r
2018-09-03,1335800\r
2018-09-05,1335800\r
2018-09-08,1386800\r
2018-09-10,1386800\r
2018-09-11,1386800\r
2018-09-16,1381000\r
2018-09-18,1381000\r
2018-09-23,1324400\r
2018-09-25,1324400\r
2018-09-26,1324400\r
2018-09-28,1327000\r
2018-09-30,1327000\r
2018-10-03,1315200\r
2018-10-05,1294200\r
2018-10-06,1294200\r
2018-10-23,1226200\r
2018-10-25,1226200\r
2018-11-12,1171700\r
2018-11-15,1171700\r
2018-11-17,1257300\r
2018-11-22,1257300\r
2018-11-24,1217400\r
2018-11-27,1227700\r
2019-02-15,1352800\r
2019-02-17,1352800\r
2019-02-18,1352800\r
2019-02-20,1363200\r
2019-02-22,1363200\r
2019-02-23,1363200\r
2019-02-25,1355000\r
2019-02-27,1355000\r
2019-03-07,1362900\r
2019-03-12,1371600\r
2019-03-22,1358400\r
2019-03-24,1333200\r
2019-03-25,1333200\r
2019-03-27,1348400\r
2019-03-29,1348400\r
2019-03-30,1348400\r
2019-04-01,1348400\r
2019-04-08,1337800\r
2019-04-09,1337800\r
2019-05-01,1331100\r
2019-05-06,1339200\r
2019-05-11,1339200\r
2019-05-13,1339200\r
2019-05-14,1339200\r
2019-05-16,1340300\r
2019-05-23,1368200\r
2019-05-31,1368200\r
2019-07-05,1372900\r
2019-07-08,1372900\r
2019-07-10,1379100\r
2019-07-12,1379100\r
2019-07-13,1379100\r
2019-07-15,1366800\r
2019-07-17,1366800\r
2019-07-22,1384000\r
2019-07-23,1384000\r
2019-07-25,1344400\r
2019-07-28,1364800\r
2019-08-02,1227600\r
2019-08-04,1227600\r
2019-08-09,1055200\r
2019-08-14,968600\r
2019-08-16,968600\r
2019-08-17,968600\r
2019-08-21,968900\r
2019-08-22,968900\r
2019-08-24,921200\r
2019-08-26,929900\r
2019-08-29,924000\r
2019-08-31,837700\r
2019-09-03,837700\r
2019-09-06,837700\r
2019-09-08,837700\r
2019-09-13,568400\r
2019-09-15,565300\r
2019-09-16,565300\r
2019-09-20,565300\r
2019-09-21,565300\r
2019-10-08,473200\r
2019-10-11,473200\r
2019-10-13,494200\r
2019-10-15,494200\r
2019-10-25,478200\r
2020-02-05,1295300\r
2020-02-07,1295300\r
2020-02-08,1295300\r
2020-02-15,1295300\r
2020-02-18,1295300\r
2020-02-20,1298800\r
2020-02-22,1282900\r
2020-03-21,1472500\r
2020-03-24,1472500\r
2020-03-26,1426100\r
2020-03-28,1433400\r
2020-03-29,1433400\r
2020-03-31,1433400\r
2020-04-03,1433400\r
2020-04-05,1409700\r
2020-04-08,1420100\r
2020-04-10,1417700\r
2020-04-12,1487200\r
2020-04-15,1472000\r
2020-04-25,1487400\r
2020-05-05,1448500\r
2020-05-07,1448500\r
2020-05-08,1448500\r
2020-05-17,1448500\r
2020-05-18,1448500\r
2020-05-20,1517500\r
2020-05-22,1505300\r
2020-05-25,1513900\r
2020-05-27,1513900\r
2020-05-28,1513900\r
2020-05-30,1499100\r
2020-06-12,1503600\r
2020-06-14,1503600\r
2020-07-19,1474100\r
2020-07-21,1474100\r
2020-07-22,1474100\r
2020-07-24,1475400\r
2020-07-27,1475400\r
2020-07-29,1475400\r
2020-07-31,1475400\r
2020-08-03,1462300\r
2020-08-05,1393200\r
2020-08-06,1393200\r
2020-08-08,1386500\r
2020-08-10,1305000\r
2020-08-15,1305000\r
2020-08-20,1295900\r
2020-08-21,1295900\r
2020-08-23,1295900\r
2020-09-02,939500\r
2020-09-04,939500\r
2020-09-05,939500\r
2020-09-07,939500\r
2020-09-10,939500\r
2020-09-12,939500\r
2020-09-14,939500\r
2020-09-17,910200\r
2020-11-11,800200\r
2020-11-14,800200\r
2020-11-16,800200\r
2020-11-18,800200\r
2020-11-19,800200\r
2020-11-21,865400\r
2020-11-23,865400\r
2020-11-26,849100\r
2020-11-29,874000\r
2021-02-14,1536600\r
2021-02-17,1536600\r
2021-02-19,1548800\r
2021-02-24,1528100\r
2021-02-27,1539200\r
2021-03-01,1502900\r
2021-03-04,1530600\r
2021-03-09,1477700\r
2021-03-21,1476200\r
2021-03-23,1476200\r
2021-03-24,1476200\r
2021-03-26,1504900\r
2021-03-28,1504900\r
2021-03-29,1504900\r
2021-03-31,1536300\r
2021-04-02,1537200\r
2021-04-03,1537200\r
2021-04-05,1550100\r
2021-04-07,1550100\r
2021-04-15,1548200\r
2021-04-17,1504500\r
2021-04-20,1504500\r
2021-04-22,1504500\r
2021-04-23,1504500\r
2021-06-14,1525600\r
2021-06-16,1525600\r
2021-06-19,1525600\r
2021-06-21,1525600\r
2021-07-19,1515600\r
2021-07-21,1515600\r
2021-07-22,1515600\r
2021-07-29,1515600\r
2021-08-28,1329600\r
2021-08-30,1329600\r
2021-08-31,1329600\r
2021-09-05,1329600\r
2021-09-07,1329600\r
2021-09-12,1228200\r
2021-09-17,1228300\r
2021-09-22,1220700\r
2021-10-07,1192000\r
2021-10-10,1192000\r
2021-10-12,1204100\r
2021-10-14,1204100\r
2021-10-17,1204100\r
2021-10-19,1193200\r
2021-10-20,1193200\r
2021-10-27,1127200\r
2022-02-09,1501300\r
2022-03-21,1538500\r
2022-03-23,1538500\r
2022-03-24,1538500\r
2022-03-26,1541900\r
2022-04-05,1607500\r
2022-04-10,1607000\r
2022-04-15,1614400\r
2022-04-17,1521800\r
2022-04-25,1522300\r
2022-07-14,1372700\r
2022-07-16,1372700\r
2022-07-17,1372700\r
2022-07-19,1372700\r
2022-07-21,1372700\r
2022-07-22,1372700\r
2022-07-24,1373100\r
2022-07-26,1246300\r
2022-07-27,1246300\r
2022-07-31,1246300\r
2022-08-01,1246300\r
2022-08-03,1247200\r
2022-08-28,683100\r
2022-08-30,683100\r
2022-09-04,643200\r
2022-09-05,643200\r
2022-09-22,525300\r
2022-10-02,542000\r
2022-10-04,511100\r
2022-10-05,511100\r
2022-10-07,511100\r
2022-10-09,511100\r
2022-10-12,511100\r
2022-11-06,453100\r
2022-11-08,453100\r
2022-11-11,455000\r
2022-11-13,455000\r
2022-11-16,439500\r
2022-11-24,453400\r
2023-02-04,1107800\r
2023-02-06,1107800\r
2023-02-09,1137100\r
2023-02-11,1137100\r
2023-02-12,1137100\r
2023-02-14,1137100\r
2023-02-16,1112700\r
2023-02-17,1112700\r
2023-02-19,1112700\r
2023-02-24,1202200\r
2023-02-26,1202200\r
2023-03-01,1202200\r
2023-03-03,1202200\r
2023-03-04,1202200\r
2023-03-16,1249200\r
2023-04-05,1347000\r
2023-04-07,1347000\r
2023-04-08,1347000\r
2023-04-15,1347000\r
2023-06-24,1562500\r
2023-07-14,1537200\r
2023-07-16,1537200\r
2023-07-17,1537200\r
2023-07-19,1537200\r
2023-07-22,1537200\r
2023-08-03,1458200\r
2023-08-05,1458200\r
2023-08-06,1458200\r
2023-08-08,1447300\r
2023-08-10,1450000\r
2023-08-11,1450000\r
2023-08-13,1427900\r
2023-08-15,1444700\r
2023-08-18,1380000\r
2023-08-20,1380600\r
2023-08-21,1380600\r
2023-08-23,1334900\r
2023-08-31,1264100\r
2023-09-07,1137100\r
2023-09-10,1137100\r
2023-09-14,1137100\r
2023-10-02,1034700\r
2023-10-04,1034700\r
2023-10-05,1034700\r
2023-10-07,1036600\r
`;export{r as default};
