const r=`date,value\r
2017-01-19,622400\r
2017-01-26,676500\r
2017-01-29,676500\r
2017-02-15,819100\r
2017-02-18,866900\r
2017-02-25,836500\r
2017-02-28,878400\r
2017-03-10,1089600\r
2017-03-17,1118700\r
2017-03-27,1178400\r
2017-03-30,1196000\r
2017-04-06,1174800\r
2017-04-09,1161800\r
2017-04-19,1192800\r
2017-04-29,1213000\r
2017-05-09,1250800\r
2017-05-16,1260700\r
2017-05-19,1260700\r
2017-05-26,1255000\r
2017-06-05,1270900\r
2017-06-18,1269900\r
2017-06-25,1273600\r
2017-07-05,1231000\r
2017-08-02,1074800\r
2017-08-04,1074800\r
2017-08-07,1075400\r
2017-08-14,950000\r
2017-08-17,950000\r
2017-08-19,943400\r
2017-08-22,997200\r
2017-08-24,997200\r
2017-08-27,928400\r
2017-08-29,927100\r
2017-09-21,865800\r
2017-09-28,876400\r
2017-10-11,900400\r
2017-10-13,925800\r
2017-10-16,917400\r
2017-10-18,917400\r
2017-10-23,880700\r
2017-10-26,756000\r
2017-10-28,682500\r
2017-10-31,684700\r
2017-11-02,682300\r
2017-11-05,690200\r
2017-11-07,678100\r
2017-11-15,691800\r
2017-11-17,658600\r
2017-11-20,690000\r
2017-11-22,658300\r
2017-11-25,659600\r
2017-11-27,671400\r
2018-02-10,1634800\r
2018-02-18,1634800\r
2018-02-25,1576700\r
2018-03-02,1576900\r
2018-04-19,1628000\r
2018-04-21,1664300\r
2018-04-26,1663000\r
2018-05-04,1627100\r
2018-05-06,1633800\r
2018-05-11,1614900\r
2018-05-19,1568400\r
2018-05-21,1568400\r
2018-06-20,1589300\r
2018-06-23,1626200\r
2018-06-25,1606900\r
2018-06-28,1620900\r
2018-07-08,1609800\r
2018-07-10,1587100\r
2018-07-15,1567000\r
2018-07-18,1592900\r
2018-07-20,1563600\r
2018-07-23,1579300\r
2018-07-25,1543900\r
2018-08-02,1581200\r
2018-08-04,1581200\r
2018-08-12,1578700\r
2018-08-19,1491200\r
2018-08-22,1428300\r
2018-09-01,1403600\r
2018-09-03,1333000\r
2018-09-08,1345000\r
2018-09-11,1300500\r
2018-09-16,1287600\r
2018-09-26,1329000\r
2018-09-28,1296200\r
2018-10-06,1197700\r
2018-10-13,1184800\r
2018-10-16,1184800\r
2018-10-18,1104600\r
2018-10-21,1059900\r
2018-10-23,1042000\r
2018-12-25,1127700\r
2018-12-30,1195400\r
2019-01-04,1141400\r
2019-01-11,1141400\r
2019-01-16,1141400\r
2019-02-03,1319000\r
2019-02-13,1371700\r
2019-02-15,1327300\r
2019-02-18,1348100\r
2019-02-20,1352200\r
2019-02-23,1345700\r
2019-02-25,1349500\r
2019-03-05,1360700\r
2019-03-07,1352100\r
2019-03-12,1326200\r
2019-03-20,1391700\r
2019-03-22,1420800\r
2019-03-25,1400000\r
2019-03-27,1423300\r
2019-03-30,1412000\r
2019-04-01,1412000\r
2019-04-09,1419800\r
2019-04-14,1610600\r
2019-04-19,1611100\r
2019-05-01,1518600\r
2019-05-14,1570700\r
2019-05-16,1570700\r
2019-05-31,1500000\r
2019-06-13,1500000\r
2019-06-28,1662200\r
2019-06-30,1662200\r
2019-07-03,1689900\r
2019-07-05,1617300\r
2019-07-08,1622800\r
2019-07-10,1610600\r
2019-07-13,1612100\r
2019-07-15,1563400\r
2019-07-23,1525500\r
2019-07-25,1481000\r
2019-07-28,1429200\r
2019-08-02,1415400\r
2019-08-04,1377000\r
2019-08-09,1347100\r
2019-08-14,1255200\r
2019-08-17,1255200\r
2019-08-22,1137000\r
2019-08-24,1127400\r
2019-08-29,1074300\r
2019-09-03,1012000\r
2019-09-06,1007600\r
2019-09-08,971600\r
2019-09-11,972200\r
2019-09-13,921900\r
2019-09-16,911000\r
2019-09-18,920800\r
2019-09-21,914800\r
2019-10-11,761500\r
2019-10-13,778900\r
2019-10-16,778900\r
2019-10-26,778900\r
2019-12-05,1157200\r
2019-12-10,1212700\r
2019-12-25,1227400\r
2019-12-30,1527000\r
2020-01-06,1548800\r
2020-01-11,1548800\r
2020-01-16,1569000\r
2020-01-19,1569000\r
2020-01-21,1568000\r
2020-01-24,1571500\r
2020-03-21,1653100\r
2020-03-24,1578000\r
2020-03-26,1586000\r
2020-03-31,1577800\r
2020-04-03,1588400\r
2020-04-05,1591200\r
2020-04-08,1582600\r
2020-04-10,1587400\r
2020-04-13,1605900\r
2020-04-15,1587800\r
2020-04-25,1585500\r
2020-05-05,1620000\r
2020-05-15,1610800\r
2020-05-18,1652000\r
2020-05-20,1643300\r
2020-05-25,1633600\r
2020-05-28,1654800\r
2020-05-30,1636300\r
2020-06-02,1653100\r
2020-07-07,1672400\r
2020-07-09,1634100\r
2020-07-12,1617600\r
2020-07-14,1614600\r
2020-07-19,1585000\r
2020-07-24,1586400\r
2020-07-27,1575900\r
2020-07-29,1531000\r
2020-08-06,1465100\r
2020-08-08,1399600\r
2020-08-11,1319200\r
2020-09-02,921500\r
2020-09-05,973100\r
2020-09-07,951600\r
2020-09-10,954200\r
2020-09-12,948300\r
2020-09-15,924400\r
2020-09-17,915200\r
2020-11-06,988700\r
2020-11-11,988700\r
2020-11-14,988700\r
2020-11-19,1081500\r
2020-11-21,1067300\r
2020-11-26,1113700\r
2020-11-29,1108300\r
2021-01-10,1466900\r
2021-01-18,1507200\r
2021-02-24,1599800\r
2021-02-27,1599000\r
2021-03-01,1599200\r
2021-03-04,1599200\r
2021-03-06,1614900\r
2021-03-09,1611900\r
2021-03-14,1619600\r
2021-03-24,1650000\r
2021-03-29,1668100\r
2021-03-31,1597800\r
2021-04-03,1608300\r
2021-04-05,1592800\r
2021-04-08,1598800\r
2021-04-13,1577400\r
2021-04-15,1577000\r
2021-04-18,1577000\r
2021-04-23,1603300\r
2021-05-03,1607200\r
2021-05-28,1511300\r
2021-05-30,1561900\r
2021-06-14,1538000\r
2021-06-19,1538000\r
2021-07-19,1658900\r
2021-07-22,1663300\r
2021-07-29,1625400\r
2021-08-11,1545300\r
2021-08-21,1564900\r
2021-08-26,1565300\r
2021-08-28,1572800\r
2021-08-31,1572800\r
2021-09-02,1591400\r
2021-09-05,1582600\r
2021-09-12,1602800\r
2021-09-22,1548200\r
2021-09-30,1534200\r
2021-10-02,1534200\r
2021-10-10,1532000\r
2021-10-12,1507100\r
2021-10-15,1495300\r
2021-10-17,1499100\r
2021-11-09,1511100\r
2021-11-11,1511100\r
2021-11-19,1519800\r
2021-12-14,1489800\r
2021-12-16,1541400\r
2021-12-19,1541400\r
2021-12-21,1535200\r
2022-01-05,1550500\r
2022-01-13,1569400\r
2022-01-15,1524100\r
2022-01-18,1501400\r
2022-01-23,1510900\r
2022-01-25,1543700\r
2022-01-28,1508300\r
2022-01-30,1574400\r
2022-02-09,1522100\r
2022-02-27,1558100\r
2022-03-01,1575100\r
2022-03-06,1562500\r
2022-03-09,1562600\r
2022-03-21,1588600\r
2022-03-24,1593700\r
2022-03-26,1572100\r
2022-04-10,1551200\r
2022-04-15,1583100\r
2022-05-08,1575900\r
2022-05-15,1566500\r
2022-05-28,1597000\r
2022-05-30,1598700\r
2022-06-02,1576300\r
2022-06-14,1560500\r
2022-06-17,1604300\r
2022-06-19,1604300\r
2022-06-27,1561700\r
2022-06-29,1600900\r
2022-07-02,1599900\r
2022-07-07,1577200\r
2022-07-12,1583100\r
2022-07-14,1575600\r
2022-07-17,1575800\r
2022-07-19,1613600\r
2022-07-22,1613600\r
2022-07-24,1556500\r
2022-07-27,1435100\r
2022-08-01,1438800\r
2022-08-03,1418600\r
2022-08-06,1326600\r
2022-08-08,1301100\r
2022-08-11,1285300\r
2022-08-13,1259700\r
2022-08-18,1219000\r
2022-08-28,966600\r
2022-08-31,966600\r
2022-09-05,986900\r
2022-09-12,976500\r
2022-09-20,964800\r
2022-09-22,905700\r
2022-09-30,918700\r
2022-10-05,899600\r
2022-10-12,899200\r
2022-10-20,782200\r
2022-10-22,782200\r
2022-11-11,644100\r
2023-01-03,820400\r
2023-02-09,1060200\r
2023-02-12,1093500\r
2023-02-14,1032200\r
2023-04-05,1343200\r
2023-04-08,1358400\r
2023-04-30,1512000\r
2023-05-03,1547900\r
2023-05-30,1557300\r
2023-06-02,1557300\r
2023-06-04,1514000\r
2023-06-07,1548000\r
2023-06-14,1498300\r
2023-06-17,1498300\r
2023-06-24,1498400\r
2023-06-27,1481300\r
2023-06-29,1516800\r
2023-07-07,1371200\r
2023-07-09,1371200\r
2023-07-14,1479100\r
2023-07-22,1450800\r
`;export{r as default};
