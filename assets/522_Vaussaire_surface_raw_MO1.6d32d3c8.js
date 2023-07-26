const r=`date,value\r
2017-02-22,102900\r
2017-02-25,77100\r
2017-03-14,75700\r
2017-03-17,74800\r
2017-03-27,78400\r
2017-04-23,65000\r
2017-05-16,71600\r
2017-05-23,75400\r
2017-06-15,69200\r
2017-06-22,60400\r
2017-06-25,49100\r
2017-07-05,48100\r
2017-07-07,62600\r
2017-07-17,61400\r
2017-08-04,92600\r
2017-08-14,69300\r
2017-08-19,63000\r
2017-08-21,61800\r
2017-08-24,76800\r
2017-08-26,68200\r
2017-08-29,69000\r
2017-09-03,48900\r
2017-09-20,56400\r
2017-10-05,64700\r
2017-10-15,63100\r
2018-02-22,79300\r
2018-02-25,74300\r
2018-03-17,89900\r
2018-03-22,90000\r
2018-04-06,85300\r
2018-04-18,95300\r
2018-04-21,86900\r
2018-04-23,86400\r
2018-04-26,65600\r
2018-05-11,71500\r
2018-05-26,73100\r
2018-06-20,64100\r
2018-06-22,67400\r
2018-06-25,52800\r
2018-06-27,50700\r
2018-07-12,75900\r
2018-07-15,54500\r
2018-07-27,72100\r
2018-07-30,62900\r
2018-08-11,68900\r
2018-08-19,63500\r
2018-08-21,68900\r
2018-08-26,55400\r
2018-09-08,71200\r
2018-09-10,74400\r
2018-09-13,81200\r
2018-09-18,65600\r
2018-09-20,74100\r
2018-09-25,77400\r
2018-09-28,70200\r
2018-10-05,73700\r
2018-10-20,73300\r
2018-10-23,67900\r
2019-02-15,71900\r
2019-02-17,60700\r
2019-02-20,71300\r
2019-02-22,47800\r
2019-02-25,46400\r
2019-02-27,65300\r
2019-03-12,92900\r
2019-03-22,59400\r
2019-03-24,62500\r
2019-03-27,61300\r
2019-04-01,88200\r
2019-04-13,71100\r
2019-05-06,74500\r
2019-05-13,74100\r
2019-05-23,55800\r
2019-05-31,85200\r
2019-06-02,73300\r
2019-06-17,49300\r
2019-06-27,52000\r
2019-06-30,60500\r
2019-07-05,68800\r
2019-07-07,58600\r
2019-07-10,80500\r
2019-07-22,61100\r
2019-08-04,31700\r
2019-08-09,78000\r
2019-08-14,49500\r
2019-08-16,73200\r
2019-08-24,48800\r
2019-08-26,41800\r
2019-08-29,31000\r
2019-08-31,36600\r
2019-09-03,31000\r
2019-09-13,51700\r
2019-09-15,61500\r
2019-09-18,87100\r
2019-09-20,67400\r
2020-02-20,67000\r
2020-02-22,49800\r
2020-03-28,59600\r
2020-03-31,36400\r
2020-04-05,60800\r
2020-04-10,61400\r
2020-04-12,94100\r
2020-04-15,74800\r
2020-05-20,73400\r
2020-05-25,66300\r
2020-05-27,43400\r
2020-05-30,69200\r
2020-06-24,89900\r
2020-06-26,82600\r
2020-07-04,78200\r
2020-07-09,79200\r
2020-07-19,71600\r
2020-07-21,44400\r
2020-07-24,101900\r
2020-07-29,53800\r
2020-07-31,55000\r
2020-08-05,48600\r
2020-08-08,65400\r
2020-08-10,83400\r
2020-08-15,57500\r
2020-08-20,61900\r
2020-08-25,47000\r
2020-09-04,51100\r
2020-09-14,40200\r
2020-09-17,57700\r
2021-02-21,67300\r
2021-02-24,63500\r
2021-02-26,68900\r
2021-03-01,60500\r
2021-03-21,89800\r
2021-03-23,80600\r
2021-03-28,87000\r
2021-03-31,76800\r
2021-04-02,101900\r
2021-04-05,85200\r
2021-04-15,91000\r
2021-04-27,98200\r
2021-05-27,54400\r
2021-06-14,58300\r
2021-06-16,68000\r
2021-06-26,49600\r
2021-07-11,55300\r
2021-07-19,67700\r
2021-07-21,56100\r
2021-07-29,65300\r
2021-08-20,74300\r
2021-08-25,54600\r
2021-08-28,62800\r
2021-09-22,54300\r
2021-09-24,55400\r
2021-10-07,60000\r
2021-10-09,54200\r
2021-10-12,66200\r
2021-10-14,67000\r
2021-10-19,65500\r
2021-10-24,58700\r
2022-03-08,71600\r
2022-03-23,64400\r
2022-03-26,73900\r
2022-04-10,75000\r
2022-04-15,69200\r
2022-04-17,80100\r
2022-05-17,54300\r
2022-05-27,65700\r
2022-06-01,75400\r
2022-06-04,66900\r
2022-06-11,54700\r
2022-06-19,67200\r
2022-06-29,65800\r
2022-07-01,85100\r
2022-07-04,61800\r
2022-07-06,47900\r
2022-07-11,40600\r
2022-07-14,71200\r
2022-07-16,49500\r
2022-07-19,57300\r
2022-07-21,42400\r
2022-07-24,57400\r
2022-07-26,55500\r
2022-08-03,66200\r
2022-08-08,58400\r
2022-08-10,52100\r
2022-08-13,50200\r
2022-08-28,47400\r
2022-08-30,36200\r
2022-09-02,59800\r
2022-09-12,55500\r
2022-09-19,55600\r
2022-09-22,61900\r
2022-10-04,53900\r
2022-10-09,49400\r
2022-10-12,72400\r
2022-10-22,63200\r
2023-02-16,72000\r
2023-02-26,58000\r
2023-03-01,85900\r
2023-03-06,77100\r
2023-03-13,92500\r
2023-03-16,86700\r
2023-04-05,61800\r
2023-05-30,50700\r
2023-06-14,66300\r
2023-06-16,54700\r
2023-06-24,69200\r
2023-07-04,85100\r
2023-07-06,78200\r
`;export{r as default};