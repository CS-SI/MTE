const r=`date,value\r
2017-03-21,1524000\r
2017-03-28,1378600\r
2017-03-31,1378600\r
2017-04-20,1351400\r
2017-04-30,1335400\r
2017-05-07,1333300\r
2017-05-10,1385300\r
2017-05-17,1372500\r
2017-06-19,1877400\r
2017-06-26,1877400\r
2017-07-04,2000600\r
2017-07-06,2000600\r
2017-07-14,2003200\r
2017-08-18,2187400\r
2017-08-20,2187400\r
2017-08-23,2186000\r
2017-08-25,2182600\r
2017-09-07,2208900\r
2017-09-12,2208900\r
2017-09-17,2208900\r
2017-09-22,2201200\r
2017-09-24,2201200\r
2017-09-27,2205900\r
2017-09-29,2205900\r
2017-10-02,2074700\r
2018-04-25,1280700\r
2018-04-27,1280700\r
2018-04-30,1280700\r
2018-05-05,1280700\r
2018-05-25,1554400\r
2018-06-01,1554400\r
2018-06-14,1947200\r
2018-06-16,1947200\r
2018-06-19,1938500\r
2018-06-21,2011300\r
2018-06-24,2011300\r
2018-06-26,2004500\r
2018-06-29,2170800\r
2018-07-01,2160500\r
2018-07-04,2169400\r
2018-07-06,2169400\r
2018-07-09,2221600\r
2018-07-24,2286900\r
2018-07-26,2286900\r
2018-07-29,2297600\r
2018-07-31,2297600\r
2018-08-03,2289800\r
2018-08-05,2285500\r
2018-08-08,2284700\r
2018-08-18,2309000\r
2018-08-20,2277400\r
2018-08-23,2307000\r
2018-08-28,2280300\r
2018-08-30,2293700\r
2018-09-02,2293700\r
2018-09-04,2245000\r
2018-09-07,2245000\r
2018-09-12,2251200\r
2018-09-14,2251200\r
2018-09-17,2277600\r
2018-09-19,2277600\r
2018-09-22,2277600\r
2018-09-24,2252400\r
2018-09-27,2261300\r
2019-03-31,1362300\r
2019-04-05,1379300\r
2019-04-10,1383400\r
2019-04-15,1387500\r
2019-04-17,1394500\r
2019-04-20,1393600\r
2019-05-10,1392800\r
2019-05-12,1392800\r
2019-05-15,1386000\r
2019-05-30,1459600\r
2019-06-01,1448700\r
2019-06-04,1511400\r
2019-06-14,1511400\r
2019-06-24,1630700\r
2019-06-26,1630700\r
2019-06-29,1648200\r
2019-07-01,1648200\r
2019-07-04,1646200\r
2019-07-06,1669400\r
2019-07-09,1669400\r
2019-07-14,1729800\r
2019-07-16,1733000\r
2019-07-19,1738400\r
2019-07-21,1739900\r
2019-07-24,1737800\r
2019-07-26,1737800\r
2019-07-29,1747500\r
2019-07-31,1746700\r
2019-08-03,1759200\r
2019-08-05,1758500\r
2019-08-08,1768600\r
2019-08-10,1768300\r
2019-08-15,1773900\r
2019-08-18,1769600\r
2019-08-23,1775900\r
2019-08-25,1775500\r
2019-08-30,1775500\r
2019-09-02,1777600\r
2019-09-12,1769200\r
2019-09-14,1769200\r
2019-09-17,1772100\r
2019-09-19,1772200\r
2019-09-22,1772200\r
2019-09-27,1772200\r
2019-09-29,1769600\r
2019-10-02,1769600\r
2020-03-15,1546200\r
2020-03-17,1546200\r
2020-03-20,1546200\r
2020-03-22,1546200\r
2020-03-25,1546900\r
2020-03-30,1546900\r
2020-04-01,1531900\r
2020-04-04,1532400\r
2020-04-06,1532400\r
2020-04-09,1489600\r
2020-04-11,1489500\r
2020-04-14,1481000\r
2020-04-16,1481000\r
2020-04-24,1481900\r
2020-04-29,1456000\r
2020-05-04,1461400\r
2020-05-06,1461400\r
2020-05-09,1494000\r
2020-05-14,1461200\r
2020-05-19,1462800\r
2020-05-24,1515200\r
2020-05-26,1574300\r
2020-05-29,1575500\r
2020-05-31,1592600\r
2020-06-03,1597700\r
2020-06-05,1597700\r
2020-06-23,1618300\r
2020-06-25,1618300\r
2020-06-28,1618300\r
2020-06-30,1618300\r
2020-07-03,1618300\r
2020-07-05,1618300\r
2020-07-08,1687400\r
2020-07-10,1686300\r
2020-07-13,1686300\r
2020-07-18,1686500\r
2020-07-20,1686500\r
2020-07-23,1678900\r
2020-07-25,1679400\r
2020-07-28,1679400\r
2020-07-30,1679400\r
2020-08-02,1679400\r
2020-08-04,1673700\r
2020-08-07,1694000\r
2020-08-09,1693500\r
2020-08-12,1702800\r
2020-08-14,1702800\r
2020-08-19,1702800\r
2020-08-22,1704900\r
2020-08-27,1726000\r
2020-09-01,1739700\r
2020-09-03,1739700\r
2020-09-06,1744200\r
2020-09-08,1737500\r
2020-09-11,1737500\r
2020-09-13,1752600\r
2020-09-16,1750400\r
2020-09-18,1767500\r
2020-09-23,1767500\r
2020-09-26,1767500\r
2020-09-28,1767500\r
2021-03-20,1562000\r
2021-03-22,1562000\r
2021-03-25,1564500\r
2021-03-27,1564500\r
2021-03-30,1513600\r
2021-04-01,1518600\r
2021-04-04,1509500\r
2021-04-06,1494200\r
2021-04-09,1494200\r
2021-04-24,1383100\r
2021-06-13,1671600\r
2021-06-15,1671600\r
2021-06-18,1671600\r
2021-07-18,2014400\r
2021-07-20,2014400\r
2021-07-23,2014400\r
2021-08-17,2095800\r
2021-08-19,2095800\r
2021-08-24,2095800\r
2021-08-27,2108400\r
2021-08-29,2103100\r
2021-09-01,2122400\r
2021-09-06,2121200\r
2021-09-11,2130700\r
2021-09-13,2136000\r
2021-09-18,2129300\r
2021-09-21,2181400\r
2021-09-23,2181100\r
2021-09-28,2181100\r
2021-10-01,2188200\r
2022-03-20,1681100\r
2022-03-22,1664600\r
2022-03-25,1664600\r
2022-04-04,1626400\r
2022-04-06,1623900\r
2022-04-09,1623900\r
2022-04-11,1623900\r
2022-04-14,1669500\r
2022-04-16,1669200\r
2022-04-19,1681600\r
2022-05-14,1789100\r
2022-05-19,1827500\r
2022-05-21,1827500\r
2022-05-29,1985100\r
2022-06-18,2096300\r
2022-06-20,2096300\r
2022-06-23,2096300\r
2022-06-25,2096300\r
2022-07-08,2099900\r
2022-07-10,2099900\r
2022-07-13,2112700\r
2022-07-15,2112700\r
2022-07-18,2103300\r
2022-07-20,2116600\r
2022-07-25,2107600\r
2022-07-28,2109300\r
2022-08-02,2086400\r
2022-08-04,2086400\r
2022-08-07,2086400\r
2022-08-09,2074400\r
2022-08-12,2095500\r
2022-08-22,2123300\r
2022-08-24,2122300\r
2022-08-27,2128300\r
2022-08-29,2128300\r
2022-09-01,2118400\r
2022-09-06,2121100\r
2022-09-08,2113400\r
2022-09-11,2131100\r
2022-09-13,2129000\r
2022-09-16,2129000\r
2022-09-18,2129000\r
2022-09-21,2148900\r
2022-09-23,2145200\r
2022-09-26,2145200\r
2022-10-01,2145200\r
2023-03-20,1719000\r
2023-03-22,1719000\r
2023-03-25,1719000\r
2023-03-27,1717200\r
2023-04-04,1652600\r
2023-04-06,1652600\r
2023-04-09,1672200\r
2023-04-14,1667900\r
2023-04-16,1694400\r
2023-04-19,1679000\r
2023-04-24,1696500\r
2023-04-26,1681200\r
2023-06-23,2124500\r
2023-06-25,2124500\r
2023-06-28,2140500\r
2023-07-03,2184900\r
2023-07-08,2184900\r
2023-07-10,2184900\r
2023-07-13,2184900\r
2023-08-07,2232800\r
2023-08-09,2232800\r
2023-08-12,2232800\r
2023-08-14,2232800\r
2023-08-22,2201000\r
2023-08-24,2200800\r
2023-08-27,2200800\r
2023-08-29,2200800\r
2023-09-01,2202700\r
2023-09-06,2186000\r
2023-09-08,2186000\r
2023-09-11,2187100\r
2023-09-26,2134500\r
2023-09-28,2134500\r
2023-10-01,2151000\r
2023-10-03,2151000\r
`;export{r as default};
