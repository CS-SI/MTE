const r=`date,value\r
2017-01-26,34200\r
2017-02-15,31700\r
2017-02-22,31700\r
2017-02-25,32600\r
2017-03-17,31700\r
2017-03-27,36700\r
2017-04-06,37400\r
2017-05-06,37700\r
2017-05-13,37700\r
2017-05-16,37700\r
2017-05-26,35800\r
2017-06-02,35800\r
2017-06-05,39200\r
2017-06-12,38900\r
2017-07-05,39400\r
2017-07-07,39400\r
2017-08-04,36300\r
2017-08-06,36300\r
2017-08-07,36300\r
2017-08-11,36300\r
2017-08-12,36300\r
2017-08-14,36400\r
2017-08-17,34900\r
2017-08-19,34900\r
2017-08-21,34900\r
2017-08-22,34900\r
2017-08-24,34900\r
2017-08-26,33000\r
2017-08-29,34700\r
2017-09-03,34700\r
2017-09-05,28600\r
2017-09-08,28600\r
2017-09-23,33300\r
2017-09-28,33300\r
2017-10-03,33300\r
2017-10-08,32200\r
2017-10-10,32200\r
2017-10-11,32200\r
2017-10-13,34100\r
2017-10-15,34100\r
2017-10-16,34100\r
2017-10-18,31900\r
2017-10-20,33800\r
2017-10-23,33800\r
2017-10-25,30400\r
2017-10-26,30400\r
2017-10-28,31500\r
2017-10-30,31000\r
2017-10-31,31000\r
2017-11-02,31000\r
2017-11-07,32000\r
2017-11-14,31400\r
2017-11-15,31400\r
2017-11-17,31600\r
2017-11-19,30200\r
2017-11-22,31000\r
2017-11-24,31000\r
2017-11-25,31000\r
2017-11-27,30500\r
2017-11-30,32100\r
2017-12-07,31600\r
2018-02-10,36300\r
2018-02-12,36300\r
2018-02-15,39700\r
2018-02-25,39700\r
2018-02-27,36600\r
2018-03-02,36600\r
2018-03-07,36600\r
2018-03-22,40700\r
2018-04-01,40700\r
2018-04-21,42700\r
2018-04-23,42700\r
2018-04-24,42700\r
2018-04-26,42700\r
2018-05-11,44500\r
2018-05-19,44500\r
2018-05-21,44500\r
2018-05-23,42400\r
2018-06-20,44400\r
2018-06-22,44400\r
2018-06-23,44400\r
2018-06-25,45700\r
2018-06-28,45700\r
2018-07-02,45200\r
2018-07-03,45200\r
2018-07-07,41800\r
2018-07-08,41800\r
2018-07-10,41800\r
2018-07-25,42100\r
2018-07-27,42100\r
2018-07-30,45100\r
2018-08-01,45100\r
2018-08-02,45100\r
2018-08-04,42100\r
2018-08-06,45300\r
2018-08-11,40500\r
2018-08-12,40500\r
2018-08-19,43500\r
2018-08-21,43500\r
2018-08-22,43500\r
2018-08-26,43500\r
2018-08-27,43500\r
2018-09-03,40200\r
2018-09-05,40200\r
2018-09-08,44300\r
2018-09-10,44300\r
2018-09-11,44300\r
2018-09-16,43200\r
2018-09-18,43200\r
2018-09-23,40800\r
2018-09-25,40800\r
2018-09-26,40800\r
2018-09-28,43300\r
2018-09-30,43300\r
2018-10-03,41300\r
2018-10-05,45100\r
2018-10-06,45100\r
2018-11-17,40000\r
2018-11-22,40000\r
2018-11-24,39900\r
2018-11-27,40000\r
2018-11-29,36700\r
2018-12-05,36700\r
2019-01-11,38000\r
2019-01-16,40600\r
2019-01-19,40600\r
2019-01-23,40600\r
2019-01-26,38100\r
2019-01-28,39700\r
2019-02-15,38800\r
2019-02-17,38800\r
2019-02-18,38800\r
2019-02-20,40800\r
2019-02-22,40800\r
2019-02-23,40800\r
2019-02-25,38900\r
2019-02-27,38900\r
2019-03-07,42900\r
2019-03-12,40600\r
2019-03-22,40000\r
2019-03-24,40000\r
2019-03-25,40000\r
2019-03-27,42200\r
2019-03-29,42200\r
2019-03-30,42200\r
2019-04-01,38400\r
2019-04-08,40600\r
2019-04-09,40600\r
2019-04-13,8600\r
2019-05-01,41600\r
2019-05-06,43300\r
2019-05-11,43300\r
2019-05-13,43300\r
2019-05-14,43300\r
2019-05-16,42000\r
2019-05-23,44500\r
2019-05-31,44500\r
2019-07-05,42800\r
2019-07-08,42800\r
2019-07-10,42900\r
2019-07-12,42900\r
2019-07-13,42900\r
2019-07-15,42400\r
2019-07-17,42400\r
2019-07-22,43900\r
2019-07-23,43900\r
2019-07-25,42100\r
2019-07-28,43800\r
2019-08-02,42000\r
2019-08-04,42200\r
2019-08-09,41300\r
2019-08-14,41700\r
2019-08-16,41700\r
2019-08-17,41700\r
2019-08-21,44700\r
2019-08-22,44700\r
2019-08-24,43000\r
2019-08-26,43900\r
2019-08-29,42700\r
2019-08-31,45100\r
2019-09-03,45100\r
2019-09-06,45100\r
2019-09-08,45100\r
2019-09-11,41900\r
2019-09-13,44100\r
2019-09-15,43200\r
2019-09-16,43200\r
2019-09-20,43200\r
2019-09-21,43200\r
2019-10-08,40900\r
2019-10-11,40900\r
2019-10-13,43400\r
2019-10-15,43400\r
2019-10-25,41400\r
2019-11-27,36800\r
2019-12-05,36800\r
2019-12-10,36800\r
2019-12-27,40500\r
2019-12-29,40500\r
2019-12-30,40500\r
2020-01-06,38600\r
2020-01-09,38600\r
2020-01-11,39200\r
2020-01-14,39200\r
2020-01-16,37900\r
2020-01-19,37900\r
2020-01-28,37000\r
2020-02-05,39100\r
2020-02-07,39100\r
2020-02-08,39100\r
2020-02-15,39100\r
2020-02-18,39100\r
2020-02-20,41600\r
2020-02-22,40600\r
2020-03-21,42200\r
2020-03-24,42200\r
2020-03-26,42400\r
2020-03-28,42400\r
2020-03-29,42400\r
2020-03-31,42400\r
2020-04-03,42400\r
2020-04-05,43400\r
2020-04-08,40300\r
2020-04-10,45000\r
2020-04-12,45100\r
2020-04-15,41900\r
2020-04-25,42300\r
2020-04-28,43100\r
2020-05-05,42900\r
2020-05-07,42900\r
2020-05-08,42900\r
2020-05-17,42700\r
2020-05-18,42700\r
2020-05-20,46400\r
2020-05-22,43200\r
2020-05-25,45800\r
2020-05-27,45800\r
2020-05-28,45800\r
2020-05-30,42200\r
2020-06-12,42200\r
2020-06-14,42200\r
2020-07-19,44600\r
2020-07-21,44600\r
2020-07-22,44600\r
2020-07-24,45500\r
2020-07-27,45500\r
2020-07-29,45500\r
2020-07-31,45500\r
2020-08-03,45500\r
2020-08-05,41500\r
2020-08-06,41500\r
2020-08-08,46600\r
2020-08-10,44900\r
2020-08-15,44900\r
2020-08-20,44900\r
2020-08-21,44900\r
2020-08-23,44900\r
2020-09-02,42500\r
2020-09-04,42500\r
2020-09-05,42500\r
2020-09-07,42500\r
2020-09-10,42500\r
2020-09-12,42900\r
2020-09-14,42900\r
2020-09-17,42100\r
2020-09-19,44900\r
2020-09-29,42500\r
2020-09-30,42500\r
2020-10-17,42200\r
2020-10-24,42200\r
2020-10-30,42200\r
2020-11-01,43700\r
2020-11-08,40500\r
2020-11-11,40900\r
2020-11-14,40900\r
2020-11-16,40900\r
2020-11-18,39500\r
2020-11-19,39500\r
2020-11-21,39500\r
2020-11-23,39500\r
2020-11-26,36800\r
2020-11-29,36800\r
2020-12-26,38500\r
2021-02-14,41300\r
2021-02-17,41300\r
2021-02-19,42000\r
2021-02-24,41400\r
2021-02-27,44700\r
2021-03-01,40500\r
2021-03-04,44700\r
2021-03-09,40500\r
2021-03-31,43300\r
2021-04-02,43000\r
2021-04-03,43000\r
2021-04-05,46000\r
2021-04-07,46000\r
2021-04-15,45200\r
2021-04-17,44900\r
2021-04-20,44900\r
2021-04-22,44900\r
2021-04-23,44900\r
2021-06-09,43300\r
2021-06-11,43300\r
2021-06-14,44500\r
2021-06-16,44500\r
2021-06-19,44500\r
2021-06-21,43800\r
2021-09-07,40600\r
2021-09-12,43800\r
2021-09-17,43800\r
2021-09-22,42500\r
2021-10-12,44700\r
2021-10-14,44700\r
2021-10-17,45400\r
2021-10-19,45400\r
2021-10-20,45400\r
2021-10-24,39200\r
2021-10-27,40100\r
2021-12-16,37300\r
2021-12-18,37300\r
2021-12-19,37300\r
2021-12-21,40300\r
2021-12-23,40300\r
2022-01-15,36900\r
2022-01-22,36900\r
2022-01-23,36900\r
2022-01-25,37600\r
2022-01-27,35900\r
2022-02-01,35900\r
2022-02-09,39700\r
2022-03-01,42000\r
2022-03-03,42000\r
2022-03-08,42000\r
2022-03-09,42000\r
2022-03-21,46000\r
2022-03-23,46000\r
2022-03-24,46000\r
2022-03-26,46500\r
2022-04-05,46700\r
2022-04-10,46300\r
2022-04-15,46300\r
2022-07-14,41900\r
2022-07-16,41900\r
2022-07-17,41900\r
2022-07-19,41900\r
2022-07-21,41900\r
2022-07-22,41900\r
2022-07-24,42600\r
2022-07-26,42200\r
2022-07-27,42200\r
2022-07-31,42200\r
2022-08-01,42200\r
2022-08-03,42200\r
2022-08-13,34100\r
2022-08-15,34100\r
2022-08-18,34600\r
2022-08-20,34600\r
2022-08-23,34600\r
2022-08-28,33000\r
2022-08-30,31800\r
2022-09-04,31800\r
2022-09-05,31800\r
2022-09-22,27700\r
2022-10-02,27700\r
2022-11-11,28200\r
2022-11-13,28200\r
2022-11-16,31800\r
2022-11-24,29700\r
2022-12-11,30900\r
2022-12-21,31300\r
2022-12-28,30700\r
2023-02-04,36000\r
2023-02-06,36000\r
2023-02-09,38800\r
2023-02-11,38800\r
2023-02-12,38800\r
2023-02-14,37400\r
2023-02-16,40400\r
2023-02-17,40400\r
2023-02-19,35500\r
2023-02-21,39000\r
2023-02-24,39000\r
2023-02-26,35100\r
2023-03-01,41000\r
2023-03-03,41000\r
2023-03-04,41000\r
2023-03-09,41000\r
2023-03-16,40100\r
2023-04-05,40900\r
2023-04-07,40900\r
2023-04-08,40900\r
2023-04-15,40900\r
2023-06-24,43600\r
2023-07-14,41700\r
2023-07-16,41700\r
2023-07-17,41700\r
2023-07-19,41700\r
2023-07-22,41700\r
2023-07-29,37400\r
2023-07-31,37400\r
2023-08-03,37400\r
2023-08-05,37400\r
2023-08-06,37400\r
2023-08-08,37400\r
2023-08-10,34100\r
2023-08-11,34100\r
2023-08-13,34100\r
2023-08-15,34100\r
2023-08-18,34500\r
2023-08-20,32600\r
2023-08-21,32600\r
2023-08-23,32600\r
2023-08-31,28200\r
2023-09-07,23000\r
2023-09-10,23000\r
2023-09-14,23000\r
2023-09-27,16900\r
2023-09-29,16900\r
2023-09-30,16900\r
2023-10-02,16900\r
2023-10-04,16900\r
2023-10-05,16900\r
2023-10-07,16000\r
2023-10-10,16000\r
2023-10-12,15700\r
2023-10-15,16300\r
2023-11-06,20600\r
2023-11-08,20600\r
2023-11-26,18700\r
2023-12-03,18700\r
2023-12-16,27400\r
`;export{r as default};