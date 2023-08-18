const r=`date,value\r
2017-01-03,52000\r
2017-01-13,52000\r
2017-02-25,75000\r
2017-03-07,70800\r
2017-03-14,64100\r
2017-03-17,65800\r
2017-03-27,70800\r
2017-04-03,64800\r
2017-04-06,64900\r
2017-04-23,70700\r
2017-05-03,70700\r
2017-05-16,82800\r
2017-05-23,82800\r
2017-05-26,79700\r
2017-06-02,73500\r
2017-06-05,73500\r
2017-06-25,74000\r
2017-07-02,70400\r
2017-07-05,71300\r
2017-07-07,79700\r
2017-07-17,79600\r
2017-07-27,65000\r
2017-08-04,69300\r
2017-08-06,68100\r
2017-08-11,68100\r
2017-08-14,66200\r
2017-08-19,67000\r
2017-08-21,57600\r
2017-08-24,59100\r
2017-08-26,56700\r
2017-08-29,52300\r
2017-09-03,51400\r
2017-09-20,47200\r
2017-09-23,51100\r
2017-09-28,51100\r
2017-10-03,49500\r
2017-10-05,44200\r
2017-10-08,44200\r
2017-10-10,48100\r
2017-10-13,47400\r
2017-10-15,47900\r
2017-10-18,48100\r
2017-10-25,43700\r
2017-10-28,42000\r
2017-10-30,39000\r
2017-11-07,46200\r
2017-11-17,41400\r
2017-11-19,46100\r
2017-11-22,45300\r
2017-11-27,46100\r
2017-12-02,47500\r
2017-12-07,45200\r
2017-12-19,51900\r
2017-12-24,68800\r
2017-12-27,68800\r
2018-02-02,64000\r
2018-02-10,66600\r
2018-02-12,61900\r
2018-02-22,59600\r
2018-02-25,63300\r
2018-02-27,63300\r
2018-03-14,74500\r
2018-03-17,74500\r
2018-03-19,74500\r
2018-03-22,74500\r
2018-04-06,80300\r
2018-04-21,80000\r
2018-04-23,82400\r
2018-04-26,79700\r
2018-05-06,74900\r
2018-05-11,78300\r
2018-05-18,72700\r
2018-05-21,72700\r
2018-06-22,60900\r
2018-06-25,64100\r
2018-06-27,64100\r
2018-07-02,66700\r
2018-07-07,64000\r
2018-07-10,70200\r
2018-07-12,64800\r
2018-07-15,72200\r
2018-07-17,72200\r
2018-07-20,75200\r
2018-07-22,72300\r
2018-07-25,75100\r
2018-07-27,71400\r
2018-07-30,71600\r
2018-08-01,65500\r
2018-08-04,65500\r
2018-08-06,65200\r
2018-08-11,64600\r
2018-08-16,59800\r
2018-08-19,56600\r
2018-08-21,56900\r
2018-08-26,55800\r
2018-08-31,55400\r
2018-09-03,57100\r
2018-09-08,53100\r
2018-09-10,47900\r
2018-09-13,47900\r
2018-09-18,49900\r
2018-09-20,48800\r
2018-09-23,44200\r
2018-09-25,44200\r
2018-09-28,41000\r
2018-09-30,41000\r
2018-10-03,39700\r
2018-10-05,36800\r
2018-10-13,42500\r
2018-10-20,27200\r
2018-10-23,29300\r
2018-10-25,27000\r
2018-10-30,30500\r
2018-11-04,34800\r
2018-11-12,20600\r
2018-11-14,20600\r
2018-11-17,20600\r
2018-11-19,20600\r
2018-11-22,28300\r
2018-11-29,31700\r
2018-12-27,37300\r
2018-12-29,37300\r
2019-01-03,30500\r
2019-01-06,30500\r
2019-01-11,30500\r
2019-01-16,38800\r
2019-01-23,36400\r
2019-01-28,36400\r
2019-02-12,63500\r
2019-02-15,60600\r
2019-02-17,62800\r
2019-02-20,60800\r
2019-02-22,62800\r
2019-02-25,65900\r
2019-02-27,63300\r
2019-03-12,60400\r
2019-03-22,71800\r
2019-03-24,68500\r
2019-03-27,69600\r
2019-03-29,72600\r
2019-04-01,70700\r
2019-04-13,70400\r
2019-05-01,75400\r
2019-05-06,78800\r
2019-05-11,78800\r
2019-05-13,74800\r
2019-05-16,76600\r
2019-05-23,74400\r
2019-05-31,76800\r
2019-06-02,70800\r
2019-06-17,68800\r
2019-06-27,68800\r
2019-06-30,68300\r
2019-07-02,69100\r
2019-07-05,72900\r
2019-07-07,72900\r
2019-07-10,74800\r
2019-07-12,74800\r
2019-07-15,75800\r
2019-07-17,76100\r
2019-07-20,75900\r
2019-07-22,67200\r
2019-07-25,69700\r
2019-08-04,55600\r
2019-08-09,57700\r
2019-08-14,53700\r
2019-08-16,53700\r
2019-08-21,63000\r
2019-08-24,51600\r
2019-08-26,51300\r
2019-08-29,52600\r
2019-08-31,47700\r
2019-09-03,48300\r
2019-09-05,44500\r
2019-09-08,44500\r
2019-09-13,42700\r
2019-09-15,38500\r
2019-09-18,38500\r
2019-09-20,42900\r
2019-10-08,30600\r
2019-10-13,39000\r
2019-10-25,41300\r
2019-12-02,68200\r
2019-12-14,68200\r
2019-12-29,63900\r
2020-01-06,55000\r
2020-01-11,69400\r
2020-01-16,60200\r
2020-01-18,60200\r
2020-02-05,57700\r
2020-02-07,57700\r
2020-02-12,57700\r
2020-02-15,57700\r
2020-02-20,62600\r
2020-02-22,62600\r
2020-03-08,59000\r
2020-03-13,68200\r
2020-03-18,73600\r
2020-03-21,73600\r
2020-03-28,73000\r
2020-03-31,76700\r
2020-04-02,73500\r
2020-04-05,71800\r
2020-04-07,71800\r
2020-04-10,75800\r
2020-04-12,75800\r
2020-04-15,71200\r
2020-04-25,74400\r
2020-05-07,48100\r
2020-05-17,60900\r
2020-05-20,58800\r
2020-05-22,67400\r
2020-05-25,76400\r
2020-05-30,76400\r
2020-06-19,72400\r
2020-06-21,76000\r
2020-06-24,71800\r
2020-06-26,72200\r
2020-06-29,72200\r
2020-07-01,72200\r
2020-07-04,71500\r
2020-07-06,75200\r
2020-07-09,76800\r
2020-07-11,73900\r
2020-07-14,75800\r
2020-07-19,74100\r
2020-07-21,69700\r
2020-07-24,69600\r
2020-07-26,68700\r
2020-07-29,64900\r
2020-07-31,62000\r
2020-08-05,45700\r
2020-08-08,51000\r
2020-08-10,50600\r
2020-08-15,44200\r
2020-08-20,42400\r
2020-08-25,38600\r
2020-09-02,35500\r
2020-09-04,36400\r
2020-09-07,33300\r
2020-09-12,35100\r
2020-09-14,31200\r
2020-09-17,32700\r
2020-11-06,66300\r
2020-11-08,66300\r
2020-11-11,66500\r
2020-11-18,49200\r
2020-11-21,51400\r
2020-11-23,50000\r
2020-11-28,49100\r
2021-01-10,53200\r
2021-01-17,67100\r
2021-01-25,66600\r
2021-02-14,63100\r
2021-02-19,63100\r
2021-02-24,64400\r
2021-02-26,58000\r
2021-03-01,63000\r
2021-03-06,62800\r
2021-03-23,70900\r
2021-03-28,77500\r
2021-03-31,74600\r
2021-04-02,76600\r
2021-04-05,75500\r
2021-04-15,80600\r
2021-04-17,80700\r
2021-05-27,68700\r
2021-05-30,71600\r
2021-06-01,71600\r
2021-06-11,67400\r
2021-06-14,70300\r
2021-06-16,68100\r
2021-06-19,68100\r
2021-06-26,63500\r
2021-07-01,64700\r
2021-07-09,69400\r
2021-07-11,70100\r
2021-07-19,71800\r
2021-07-21,74100\r
2021-07-26,63800\r
2021-07-29,63800\r
2021-08-10,71400\r
2021-08-13,71400\r
2021-08-18,71400\r
2021-08-20,71400\r
2021-08-23,60400\r
2021-08-25,60400\r
2021-08-28,66300\r
2021-08-30,60200\r
2021-09-04,65500\r
2021-09-07,65500\r
2021-09-22,55300\r
2021-09-24,59600\r
2021-10-07,55500\r
2021-10-09,55500\r
2021-10-12,57000\r
2021-10-14,56300\r
2021-10-17,56300\r
2021-10-19,60700\r
2021-10-24,57700\r
2021-10-27,58500\r
2021-11-06,56700\r
2021-11-18,68600\r
2021-11-23,68600\r
2021-12-16,64000\r
2021-12-18,68200\r
2021-12-21,61400\r
2021-12-23,61400\r
2022-01-12,67800\r
2022-01-15,62900\r
2022-01-17,60800\r
2022-01-22,63400\r
2022-01-25,63900\r
2022-01-27,64100\r
2022-01-30,63600\r
2022-02-09,65500\r
2022-03-01,67500\r
2022-03-06,67500\r
2022-03-08,67500\r
2022-03-23,71100\r
2022-03-26,71500\r
2022-03-28,71500\r
2022-04-05,92800\r
2022-04-10,92800\r
2022-04-15,77500\r
2022-04-17,70200\r
2022-04-22,75400\r
2022-05-15,71500\r
2022-05-17,69000\r
2022-05-20,71000\r
2022-05-22,70100\r
2022-05-27,68300\r
2022-05-30,72300\r
2022-06-01,71400\r
2022-06-04,70900\r
2022-06-06,72500\r
2022-06-11,71500\r
2022-06-14,66500\r
2022-06-16,65500\r
2022-06-19,60600\r
2022-06-29,65600\r
2022-07-01,69900\r
2022-07-04,69900\r
2022-07-06,65600\r
2022-07-11,62400\r
2022-07-14,62900\r
2022-07-16,63400\r
2022-07-19,62300\r
2022-07-21,59400\r
2022-07-24,58700\r
2022-07-26,57100\r
2022-07-31,55000\r
2022-08-03,54600\r
2022-08-05,51300\r
2022-08-08,45400\r
2022-08-10,45900\r
2022-08-13,44400\r
2022-08-20,45300\r
2022-08-28,23600\r
2022-08-30,26500\r
2022-09-02,26500\r
2022-09-04,24800\r
2022-09-12,25300\r
2022-09-19,24600\r
2022-09-22,20100\r
2022-10-04,16700\r
2022-10-07,19900\r
2022-10-09,17300\r
2022-10-12,17300\r
2022-10-19,17600\r
2022-10-22,15500\r
2022-10-24,13600\r
2022-11-11,13300\r
2022-11-13,13300\r
2022-11-16,13300\r
2022-12-28,25000\r
2023-01-20,12200\r
2023-01-30,12200\r
2023-02-04,41300\r
2023-02-06,42900\r
2023-02-09,41200\r
2023-02-11,42800\r
2023-02-14,42200\r
2023-02-16,42400\r
2023-02-19,43500\r
2023-02-26,48100\r
2023-03-01,47300\r
2023-03-16,65800\r
2023-03-28,62900\r
2023-04-05,66300\r
2023-04-07,61400\r
2023-04-17,59700\r
2023-05-17,77800\r
2023-05-25,77800\r
2023-05-27,77800\r
2023-06-16,60500\r
2023-06-24,61300\r
2023-06-26,61900\r
2023-06-29,57000\r
2023-07-06,69300\r
2023-07-09,69700\r
2023-07-11,63400\r
2023-07-14,52100\r
2023-07-16,52100\r
2023-07-19,53600\r
`;export{r as default};
