const r=`date,value\r
2017-02-22,62700\r
2017-03-04,62700\r
2017-06-12,21800\r
2017-06-19,21800\r
2017-06-22,21800\r
2017-07-02,8100\r
2017-07-07,2500\r
2017-07-09,2500\r
2017-07-12,3500\r
2017-07-14,3500\r
2017-07-17,3500\r
2017-07-22,3200\r
2017-08-21,700\r
2017-08-23,700\r
2017-08-26,800\r
2017-09-05,100\r
2017-10-05,400\r
2017-10-07,400\r
2017-10-10,400\r
2017-10-12,400\r
2017-10-15,1500\r
2017-10-17,1500\r
2017-10-22,1500\r
2017-10-25,2300\r
2018-01-28,13100\r
2018-02-02,13100\r
2018-03-14,51100\r
2018-03-16,48900\r
2018-03-19,48900\r
2018-03-21,48900\r
2018-03-24,48900\r
2018-06-22,4300\r
2018-06-24,4300\r
2018-06-27,5100\r
2018-06-29,5100\r
2018-07-02,6100\r
2018-07-04,800\r
2018-07-07,1600\r
2018-07-17,1600\r
2018-07-19,600\r
2018-07-22,600\r
2018-07-24,600\r
2018-07-27,1400\r
2018-07-29,1400\r
2018-08-01,2400\r
2018-08-03,2400\r
2018-08-06,2400\r
2018-08-11,1500\r
2018-08-16,500\r
2018-08-18,500\r
2018-08-21,600\r
2018-08-23,600\r
2018-08-26,1000\r
2018-08-28,1000\r
2018-08-31,1000\r
2018-09-02,500\r
2018-09-05,500\r
2018-09-10,4300\r
2018-09-12,4300\r
2018-09-17,4300\r
2018-09-20,4300\r
2018-09-25,1400\r
2018-09-27,1400\r
2018-10-02,1400\r
2018-10-05,1900\r
2018-10-10,1400\r
2018-10-12,1400\r
2018-10-15,1400\r
2018-10-20,4300\r
2018-10-22,4300\r
2018-10-25,4300\r
2018-10-30,4300\r
2018-11-04,10700\r
2018-11-09,10700\r
2018-11-11,10700\r
2018-11-14,14500\r
2018-11-24,26700\r
2019-02-17,7200\r
2019-02-19,7200\r
2019-02-22,10700\r
2019-02-24,10700\r
2019-02-27,9300\r
2019-03-04,9300\r
2019-03-24,14400\r
2019-03-26,14400\r
2019-03-29,14400\r
2019-03-31,14400\r
2019-04-05,14400\r
2019-05-23,600\r
2019-05-25,600\r
2019-05-30,600\r
2019-06-02,600\r
2019-06-04,600\r
2019-06-07,12700\r
2019-06-12,13800\r
2019-06-27,22700\r
2019-06-29,22700\r
2019-07-02,22700\r
2019-07-04,22700\r
2019-07-07,35400\r
2019-07-09,35400\r
2019-07-12,34100\r
2019-07-14,40700\r
2019-07-17,36600\r
2019-07-19,36600\r
2019-07-22,39300\r
2019-07-24,38500\r
2019-07-29,42600\r
2019-08-01,41900\r
2019-08-03,46600\r
2019-08-06,46600\r
2019-08-26,57000\r
2019-08-28,57000\r
2019-08-31,57000\r
2019-09-02,57000\r
2019-09-07,57000\r
2019-09-15,67300\r
2019-09-17,67300\r
2019-09-20,75400\r
2019-09-22,75400\r
2019-09-27,75400\r
2019-09-30,75400\r
2020-02-07,20600\r
2020-02-09,20600\r
2020-02-12,39900\r
2020-02-14,39900\r
2020-02-22,52200\r
2020-02-24,55300\r
2020-03-08,49800\r
2020-03-18,47900\r
2020-03-20,47900\r
2020-03-23,47900\r
2020-03-25,47900\r
2020-03-28,54300\r
2020-04-02,52300\r
2020-04-04,55000\r
2020-04-07,54200\r
2020-04-09,54200\r
2020-04-12,53600\r
2020-04-14,54400\r
2020-04-17,54400\r
2020-04-22,55700\r
2020-05-22,73500\r
2020-05-24,73500\r
2020-05-27,70300\r
2020-05-29,70300\r
2020-06-01,70300\r
2020-07-01,74300\r
2020-07-08,69000\r
2020-07-11,69000\r
2020-07-13,69000\r
2020-07-31,64000\r
2020-08-05,66200\r
2020-08-07,66200\r
2020-08-10,66200\r
2020-08-15,66200\r
2020-08-20,60400\r
2020-08-25,65400\r
2020-08-27,65400\r
2020-09-01,65400\r
2020-09-04,56000\r
2020-09-09,62200\r
2020-09-14,59800\r
2020-09-16,59800\r
2020-09-19,59800\r
2020-11-18,50400\r
2020-11-23,63000\r
2020-11-25,63000\r
2020-11-28,63000\r
2021-02-21,70500\r
2021-02-23,70500\r
2021-02-26,70500\r
2021-02-28,70500\r
2021-03-28,72700\r
2021-03-30,72700\r
2021-04-02,73300\r
2021-04-04,76700\r
2021-04-07,76700\r
2021-04-09,75400\r
2021-05-22,72400\r
2021-05-24,72400\r
2021-05-27,74800\r
2021-05-29,74800\r
2021-06-01,73200\r
2021-06-03,74700\r
2021-07-21,77000\r
2021-07-23,77000\r
2021-08-20,76000\r
2021-08-25,76900\r
2021-08-27,76900\r
2021-10-14,65800\r
2021-10-16,65800\r
2021-10-21,65800\r
2021-10-24,66200\r
2022-01-27,24700\r
2022-01-29,24700\r
2022-02-01,24700\r
2022-02-26,60800\r
2022-02-28,60800\r
2022-03-03,60800\r
2022-03-05,60800\r
2022-03-08,66600\r
2022-03-10,64700\r
2022-03-23,68600\r
2022-03-25,68600\r
2022-03-28,68600\r
2022-04-17,71700\r
2022-04-19,71700\r
2022-04-27,72200\r
2022-05-02,68000\r
2022-05-04,68000\r
2022-05-07,68000\r
2022-05-12,70000\r
2022-05-14,70000\r
2022-05-17,70000\r
2022-05-19,70000\r
2022-06-11,55000\r
2022-06-13,55000\r
2022-06-16,57400\r
2022-06-18,57400\r
2022-06-21,55000\r
2022-06-23,61900\r
2022-06-28,58600\r
2022-07-01,58500\r
2022-07-11,55600\r
2022-07-13,55600\r
2022-07-16,57500\r
2022-07-18,59300\r
2022-07-21,55600\r
2022-07-26,60000\r
2022-07-28,56100\r
2022-07-31,59700\r
2022-08-05,65700\r
2022-08-07,65700\r
2022-08-10,64800\r
2022-08-12,65500\r
2022-08-15,65500\r
2022-08-17,62500\r
2022-08-25,53600\r
2022-08-30,56000\r
2022-09-01,56000\r
2022-09-04,56000\r
2022-09-06,53100\r
2022-09-09,53100\r
2022-10-04,60800\r
2022-10-06,60800\r
2022-10-09,63800\r
2022-10-11,63800\r
2022-10-16,60200\r
2023-02-11,50000\r
2023-02-13,50000\r
2023-02-16,59800\r
2023-02-21,57400\r
2023-02-26,61400\r
2023-03-03,59500\r
2023-03-28,61000\r
2023-04-04,61000\r
2023-04-07,61000\r
`;export{r as default};