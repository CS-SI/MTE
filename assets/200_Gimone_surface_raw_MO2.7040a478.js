const r=`date,value\r
2017-01-26,1028000\r
2017-02-15,1214400\r
2017-02-22,1214400\r
2017-02-25,1305900\r
2017-03-17,1454700\r
2017-03-27,1454700\r
2017-04-06,1753300\r
2017-05-16,1969300\r
2017-05-26,2007700\r
2017-06-02,2007300\r
2017-06-05,2015600\r
2017-07-05,2065200\r
2017-07-07,2065200\r
2017-08-14,1619200\r
2017-08-17,1619200\r
2017-08-19,1619200\r
2017-08-21,1619200\r
2017-08-22,1619200\r
2017-08-24,1619200\r
2017-08-26,1495300\r
2017-08-29,1510300\r
2017-09-03,1499300\r
2017-09-08,1385300\r
2017-09-13,1366000\r
2017-09-15,1359900\r
2017-10-08,1246600\r
2017-10-10,1246600\r
2017-10-11,1246600\r
2017-10-13,1263300\r
2017-10-15,1263300\r
2017-10-16,1263300\r
2017-10-18,1263300\r
2017-10-20,1232300\r
2017-10-23,1241600\r
2017-10-25,1135800\r
2017-10-26,1135800\r
2017-10-28,1135800\r
2017-10-30,1135800\r
2017-10-31,1135800\r
2017-11-02,1135800\r
2017-11-07,1046200\r
2017-11-14,1046200\r
2017-11-15,1046200\r
2017-11-17,1078600\r
2017-11-19,1077000\r
2017-11-22,1084100\r
2017-11-24,1084100\r
2017-11-25,1084100\r
2017-11-27,1083100\r
2017-11-30,1055000\r
2018-02-15,1961300\r
2018-02-25,2063000\r
2018-02-27,2062000\r
2018-03-02,2120900\r
2018-03-07,2118900\r
2018-03-09,2113400\r
2018-03-22,2131400\r
2018-04-01,2114100\r
2018-04-21,2145000\r
2018-04-23,2145000\r
2018-04-24,2145000\r
2018-04-26,2145000\r
2018-05-11,2151900\r
2018-05-19,2151900\r
2018-05-21,2152900\r
2018-05-23,2112400\r
2018-06-20,2163500\r
2018-06-22,2163500\r
2018-06-23,2163500\r
2018-06-25,2179200\r
2018-06-28,2179200\r
2018-07-02,2170100\r
2018-07-03,2170100\r
2018-07-07,2136100\r
2018-07-08,2136100\r
2018-07-10,2149700\r
2018-07-25,2106400\r
2018-07-27,2104400\r
2018-07-30,2104400\r
2018-08-01,2104400\r
2018-08-02,2104400\r
2018-08-04,2105100\r
2018-08-06,2056000\r
2018-08-11,2056000\r
2018-08-12,2056000\r
2018-08-19,2088200\r
2018-08-21,2088200\r
2018-08-22,2088200\r
2018-08-26,2088200\r
2018-08-27,2088200\r
2018-09-03,1911500\r
2018-09-05,1911500\r
2018-09-08,1973300\r
2018-09-10,1973300\r
2018-09-11,1973300\r
2018-09-23,1846000\r
2018-09-25,1846000\r
2018-09-26,1846000\r
2018-09-28,1846000\r
2018-09-30,1846000\r
2018-10-03,1848600\r
2018-10-05,1798300\r
2018-10-06,1798300\r
2018-10-23,1701900\r
2018-10-25,1701900\r
2018-11-12,1665700\r
2018-11-15,1665700\r
2018-11-17,1700000\r
2018-11-22,1700000\r
2018-11-24,1651700\r
2018-11-27,1679500\r
2019-01-26,1702900\r
2019-01-28,1738100\r
2019-02-03,914500\r
2019-02-15,2041900\r
2019-02-17,2041900\r
2019-02-18,2041900\r
2019-02-20,2059200\r
2019-02-22,2059200\r
2019-02-23,2059200\r
2019-02-25,2050700\r
2019-02-27,2050700\r
2019-03-07,2126000\r
2019-03-12,2115200\r
2019-03-22,2084500\r
2019-03-24,2084500\r
2019-03-25,2084500\r
2019-03-27,2116100\r
2019-03-29,2116100\r
2019-03-30,2116100\r
2019-04-01,2102700\r
2019-04-08,2097400\r
2019-04-09,2097400\r
2019-05-01,2083600\r
2019-05-06,2095100\r
2019-05-11,2095100\r
2019-05-13,2095100\r
2019-05-14,2095100\r
2019-05-16,2101900\r
2019-07-05,2106800\r
2019-07-08,2106800\r
2019-07-10,2109100\r
2019-07-12,2109100\r
2019-07-13,2109100\r
2019-07-15,2067900\r
2019-07-17,2067900\r
2019-07-22,2078600\r
2019-07-23,2078600\r
2019-07-25,1986500\r
2019-07-28,2027900\r
2019-08-02,1797100\r
2019-08-04,1797100\r
2019-08-09,1631800\r
2019-08-14,1513900\r
2019-08-16,1513900\r
2019-08-17,1513900\r
2019-08-21,1514800\r
2019-08-22,1514800\r
2019-08-24,1446800\r
2019-08-26,1456500\r
2019-08-29,1451500\r
2019-08-31,1368400\r
2019-09-03,1368400\r
2019-09-06,1368400\r
2019-09-08,1368400\r
2019-09-13,1096500\r
2019-09-15,1056600\r
2019-09-16,1056600\r
2019-09-20,1056600\r
2019-09-21,1056600\r
2019-10-08,707000\r
2019-10-11,707000\r
2019-10-13,724400\r
2019-10-15,724400\r
2019-10-25,669400\r
2020-02-20,1828500\r
2020-02-22,1816100\r
2020-03-11,2077400\r
2020-03-13,2077400\r
2020-03-18,2077400\r
2020-03-21,2111900\r
2020-03-24,2111900\r
2020-03-26,2076000\r
2020-03-28,2096200\r
2020-03-29,2096200\r
2020-03-31,2096200\r
2020-04-03,2096200\r
2020-04-05,2051200\r
2020-04-08,2071900\r
2020-04-10,2064800\r
2020-04-12,2149400\r
2020-04-15,2144200\r
2020-04-25,2142700\r
2020-05-20,2180300\r
2020-05-22,2162600\r
2020-05-25,2178500\r
2020-05-27,2178500\r
2020-05-28,2178500\r
2020-05-30,2149300\r
2020-06-12,2143200\r
2020-06-14,2145600\r
2020-07-19,2043500\r
2020-07-21,2043500\r
2020-07-22,2043500\r
2020-07-24,2046800\r
2020-07-27,2046800\r
2020-07-29,1997400\r
2020-07-31,1997400\r
2020-08-03,1996100\r
2020-08-05,1942800\r
2020-08-06,1942800\r
2020-08-08,1925300\r
2020-08-10,1861100\r
2020-08-15,1826100\r
2020-08-20,1748000\r
2020-08-21,1748000\r
2020-08-23,1748000\r
2020-09-02,1358400\r
2020-09-04,1358400\r
2020-09-05,1358400\r
2020-09-07,1358400\r
2020-09-10,1358400\r
2020-09-12,1358400\r
2020-09-14,1358400\r
2020-09-17,1358400\r
2020-11-11,1349600\r
2020-11-14,1349600\r
2020-11-16,1349600\r
2020-11-18,1349600\r
2020-11-19,1349600\r
2020-11-21,1435600\r
2020-11-23,1435600\r
2020-11-26,1396500\r
2020-11-29,1440600\r
2021-02-19,2109300\r
2021-02-24,2130400\r
2021-02-27,2136800\r
2021-03-01,2088700\r
2021-03-04,2136000\r
2021-03-09,2066200\r
2021-03-31,2151500\r
2021-04-02,2135000\r
2021-04-03,2135000\r
2021-04-05,2175000\r
2021-04-07,2175000\r
2021-04-15,2172000\r
2021-04-17,2162100\r
2021-04-20,2162100\r
2021-04-22,2162100\r
2021-04-23,2162100\r
2021-06-14,2169800\r
2021-06-16,2169800\r
2021-06-19,2169800\r
2021-06-21,2169800\r
2021-07-19,2142500\r
2021-07-21,2142500\r
2021-07-22,2142500\r
2021-07-29,2142500\r
2021-08-28,1712600\r
2021-08-30,1712600\r
2021-08-31,1712600\r
2021-09-05,1712000\r
2021-09-07,1712000\r
2021-09-12,1547600\r
2021-09-17,1568500\r
2021-09-22,1568500\r
2021-10-07,1554900\r
2021-10-10,1554900\r
2021-10-12,1571400\r
2021-10-14,1571400\r
2021-10-17,1571400\r
2021-10-19,1564600\r
2021-10-20,1564600\r
2021-10-27,1489200\r
2022-01-25,1979000\r
2022-04-05,2168000\r
2022-04-10,2168000\r
2022-04-15,2171700\r
2022-04-17,2151800\r
2022-04-25,2151800\r
2022-07-14,1822600\r
2022-07-16,1822600\r
2022-07-17,1822600\r
2022-07-19,1822600\r
2022-07-21,1822600\r
2022-07-22,1822600\r
2022-07-24,1822800\r
2022-07-26,1676500\r
2022-07-27,1676500\r
2022-07-31,1676500\r
2022-08-01,1676500\r
2022-08-03,1677900\r
2022-08-05,1593600\r
2022-08-06,1593600\r
2022-08-08,1593600\r
2022-08-10,1593600\r
2022-08-11,1593600\r
2022-08-13,1593600\r
2022-08-28,1227000\r
2022-08-30,1227000\r
2022-09-04,1181800\r
2022-09-05,1181800\r
2022-09-22,991300\r
2022-10-02,1043400\r
2022-10-04,1028200\r
2022-10-05,1028200\r
2022-10-07,1028200\r
2022-10-09,1028200\r
2022-10-12,1028200\r
2022-11-06,913700\r
2022-11-08,913700\r
2022-11-11,918100\r
2022-11-13,918100\r
2022-11-16,906300\r
2022-11-24,929300\r
2023-02-04,1518700\r
2023-02-06,1518700\r
2023-02-09,1542600\r
2023-02-11,1542600\r
2023-02-12,1542600\r
2023-02-14,1542600\r
2023-02-16,1487700\r
2023-02-17,1487700\r
2023-02-19,1487700\r
2023-02-24,1623700\r
2023-02-26,1623700\r
2023-03-01,1623700\r
2023-03-03,1623700\r
2023-03-04,1623700\r
2023-03-16,1636700\r
2023-04-05,1789200\r
2023-04-07,1789200\r
2023-04-08,1789200\r
2023-04-15,1789200\r
2023-06-24,2185300\r
2023-07-14,2038400\r
2023-07-16,2038400\r
2023-07-17,2038400\r
2023-07-19,2038400\r
2023-07-22,2038400\r
`;export{r as default};
