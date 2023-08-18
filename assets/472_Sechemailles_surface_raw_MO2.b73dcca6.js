const r=`date,value\r
2017-02-15,280800\r
2017-02-22,280800\r
2017-02-25,370800\r
2017-03-07,369000\r
2017-03-17,368500\r
2017-03-27,372000\r
2017-04-03,368700\r
2017-04-06,368700\r
2017-05-16,400700\r
2017-05-23,400700\r
2017-05-26,400700\r
2017-06-02,360200\r
2017-06-05,360200\r
2017-06-25,360400\r
2017-07-02,369100\r
2017-07-05,369700\r
2017-07-07,358900\r
2017-07-12,358900\r
2017-08-14,376600\r
2017-08-19,381400\r
2017-08-21,381400\r
2017-08-24,373800\r
2017-08-26,378800\r
2017-08-29,368100\r
2017-09-03,387000\r
2017-09-23,364500\r
2017-09-28,364500\r
2017-10-18,346100\r
2017-10-25,332000\r
2017-10-28,332900\r
2017-10-30,318400\r
2017-11-04,318400\r
2017-11-07,326800\r
2017-11-14,313300\r
2017-11-17,326100\r
2017-11-19,313500\r
2017-11-22,318800\r
2017-11-27,316400\r
2017-11-29,325700\r
2017-12-07,324100\r
2018-02-25,359300\r
2018-02-27,359300\r
2018-03-22,385500\r
2018-03-29,385500\r
2018-04-01,385500\r
2018-04-06,372600\r
2018-04-16,384200\r
2018-04-18,383500\r
2018-04-21,393300\r
2018-04-23,393300\r
2018-04-26,381400\r
2018-05-06,377900\r
2018-05-08,373000\r
2018-05-11,381600\r
2018-05-13,381600\r
2018-05-18,370600\r
2018-05-21,370600\r
2018-05-26,378700\r
2018-06-02,378700\r
2018-06-20,366200\r
2018-06-22,366200\r
2018-06-25,372300\r
2018-06-27,372300\r
2018-07-02,373700\r
2018-07-07,363800\r
2018-07-10,369000\r
2018-07-12,362900\r
2018-07-15,362900\r
2018-07-17,362900\r
2018-08-19,368600\r
2018-08-21,368600\r
2018-08-26,368600\r
2018-09-03,369100\r
2018-09-05,369100\r
2018-09-08,385600\r
2018-09-10,385600\r
2018-09-13,385600\r
2018-09-18,377800\r
2018-09-28,375400\r
2018-09-30,375400\r
2018-10-05,375400\r
2018-10-08,375400\r
2018-10-13,373700\r
2018-10-18,373700\r
2018-10-20,373700\r
2018-10-23,379600\r
2018-10-25,365500\r
2018-10-30,365500\r
2018-11-22,361300\r
2018-11-29,361300\r
2019-01-01,324100\r
2019-01-03,324100\r
2019-01-06,324100\r
2019-01-11,324100\r
2019-01-16,324200\r
2019-02-05,367900\r
2019-02-12,367900\r
2019-02-15,377900\r
2019-02-17,377900\r
2019-02-20,357600\r
2019-02-22,357100\r
2019-02-25,349800\r
2019-02-27,349800\r
2019-03-12,348700\r
2019-03-22,350500\r
2019-03-24,350500\r
2019-03-27,363600\r
2019-03-29,363600\r
2019-04-01,363600\r
2019-05-01,367100\r
2019-05-06,374700\r
2019-05-13,374700\r
2019-05-16,373600\r
2019-05-23,396500\r
2019-05-31,403300\r
2019-06-02,384200\r
2019-06-30,378100\r
2019-07-02,378100\r
2019-07-05,382600\r
2019-07-07,382600\r
2019-07-10,379600\r
2019-07-15,384700\r
2019-07-17,379700\r
2019-07-20,389300\r
2019-07-22,388900\r
2019-07-25,392800\r
2019-08-04,378200\r
2019-08-09,377500\r
2019-08-14,369700\r
2019-08-16,369700\r
2019-08-21,372800\r
2019-08-24,374100\r
2019-08-26,375400\r
2019-08-29,375400\r
2019-08-31,373900\r
2019-09-03,374500\r
2019-09-13,366300\r
2019-09-15,366300\r
2019-09-18,366300\r
2019-09-20,365000\r
2019-10-13,378100\r
2019-10-15,378100\r
2019-10-25,378100\r
2019-11-22,355400\r
2019-11-24,355400\r
2019-12-02,355400\r
2019-12-04,355400\r
2020-01-06,319600\r
2020-01-11,319600\r
2020-01-16,325200\r
2020-01-18,325200\r
2020-01-21,325200\r
2020-02-15,353200\r
2020-02-20,356800\r
2020-02-22,356800\r
2020-03-21,368900\r
2020-03-23,368900\r
2020-03-26,377800\r
2020-03-28,377800\r
2020-03-31,358200\r
2020-04-02,358200\r
2020-04-05,365400\r
2020-04-07,361900\r
2020-04-10,365700\r
2020-04-12,359200\r
2020-04-15,370600\r
2020-05-20,377500\r
2020-05-22,377500\r
2020-05-25,392100\r
2020-05-27,392100\r
2020-05-30,381300\r
2020-06-01,381300\r
2020-07-04,397900\r
2020-07-09,397600\r
2020-07-11,397600\r
2020-07-14,399600\r
2020-07-19,395100\r
2020-07-21,390000\r
2020-07-24,390000\r
2020-07-29,381900\r
2020-07-31,383500\r
2020-08-05,365600\r
2020-08-08,383100\r
2020-08-10,383100\r
2020-08-15,382100\r
2020-08-20,382100\r
2020-09-12,378100\r
2020-09-14,378100\r
2020-09-17,382300\r
2020-11-06,355000\r
2020-11-08,355000\r
2020-11-11,361300\r
2020-11-18,361300\r
2020-11-21,339600\r
2020-11-23,344700\r
2020-11-28,310400\r
2021-01-10,320300\r
2021-02-14,351200\r
2021-02-19,365000\r
2021-02-21,365000\r
2021-02-24,358100\r
2021-02-26,372700\r
2021-03-01,362600\r
2021-03-06,372900\r
2021-03-21,361700\r
2021-03-23,361700\r
2021-03-26,361700\r
2021-03-28,361700\r
2021-03-31,378600\r
2021-04-02,361000\r
2021-04-05,361000\r
2021-04-07,361000\r
2021-04-15,379000\r
2021-04-17,379000\r
2021-04-22,379000\r
2021-07-19,367400\r
2021-07-21,367400\r
2021-07-29,368900\r
2021-09-02,380000\r
2021-09-07,380000\r
2021-09-22,354000\r
2021-09-24,354000\r
2021-09-27,354000\r
2021-10-02,354000\r
2021-10-12,353800\r
2021-10-14,353800\r
2021-10-17,353800\r
2021-10-19,353800\r
2021-10-22,356700\r
2021-10-24,330100\r
2021-10-27,341300\r
2021-11-06,318900\r
2021-11-11,324200\r
2021-11-18,324200\r
2021-12-16,344900\r
2021-12-18,344900\r
2021-12-21,351800\r
2021-12-23,351800\r
2022-01-15,334900\r
2022-01-17,334900\r
2022-01-22,334900\r
2022-01-25,341000\r
2022-01-27,321900\r
2022-01-30,321900\r
2022-02-09,323100\r
2022-02-11,323100\r
2022-02-19,323100\r
2022-03-26,362300\r
2022-04-10,362100\r
2022-04-15,371300\r
2022-04-17,371300\r
2022-04-22,364900\r
2022-06-04,374200\r
2022-06-06,374200\r
2022-06-11,374200\r
2022-06-14,374200\r
2022-06-19,377200\r
2022-06-21,377200\r
2022-06-29,378200\r
2022-07-01,368400\r
2022-07-04,368400\r
2022-07-06,368400\r
2022-07-14,368500\r
2022-07-16,368500\r
2022-07-19,369700\r
2022-07-21,369700\r
2022-07-24,365300\r
2022-07-26,367100\r
2022-07-31,364000\r
2022-08-03,371500\r
2022-08-08,372000\r
2022-08-10,372000\r
2022-08-13,364000\r
2022-08-28,287700\r
2022-08-30,287700\r
2022-09-02,287700\r
2022-09-04,287700\r
2022-09-12,370000\r
2022-09-19,370000\r
2022-09-22,373300\r
2022-10-22,360100\r
2022-10-24,360100\r
2022-11-11,357200\r
2022-11-13,357200\r
2022-12-06,349800\r
2022-12-08,349800\r
2022-12-11,354600\r
2022-12-13,354600\r
2023-02-14,363500\r
2023-02-16,363300\r
2023-03-06,363900\r
2023-03-13,363900\r
2023-03-16,363900\r
2023-04-05,362500\r
2023-04-07,362500\r
2023-05-30,369100\r
2023-06-01,370600\r
2023-06-06,370600\r
2023-06-14,365500\r
2023-06-16,365500\r
2023-06-24,372500\r
2023-06-26,371000\r
2023-07-04,369000\r
2023-07-14,372100\r
2023-07-19,373400\r
`;export{r as default};
