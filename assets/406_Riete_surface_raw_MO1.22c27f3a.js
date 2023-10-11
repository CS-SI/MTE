const r=`date,value\r
2017-01-26,8500\r
2017-02-22,22900\r
2017-02-25,26500\r
2017-03-14,30600\r
2017-03-17,33100\r
2017-04-03,30500\r
2017-04-06,30800\r
2017-04-16,37500\r
2017-04-23,32800\r
2017-05-16,24100\r
2017-05-23,26400\r
2017-06-02,25900\r
2017-06-12,27000\r
2017-06-15,16600\r
2017-06-22,33000\r
2017-07-05,35300\r
2017-07-17,38800\r
2017-07-27,36100\r
2017-08-04,32800\r
2017-08-14,38000\r
2017-08-21,26500\r
2017-08-24,26300\r
2017-08-26,30100\r
2017-09-05,30300\r
2017-09-08,33200\r
2017-09-13,31200\r
2017-09-20,38700\r
2017-09-23,36700\r
2017-09-28,35900\r
2017-10-05,30200\r
2017-10-08,29000\r
2017-10-10,30500\r
2017-10-13,31400\r
2017-10-15,25100\r
2017-10-25,34900\r
2017-10-30,28900\r
2017-11-12,30500\r
2017-11-14,35800\r
2017-11-17,34600\r
2017-11-19,34700\r
2017-11-22,39200\r
2018-01-18,34100\r
2018-01-28,16000\r
2018-01-31,22200\r
2018-02-27,8000\r
2018-03-14,33000\r
2018-03-19,34100\r
2018-04-01,42600\r
2018-04-18,38300\r
2018-04-21,39100\r
2018-05-11,29700\r
2018-06-17,36700\r
2018-06-25,26800\r
2018-06-27,36700\r
2018-07-07,37500\r
2018-07-17,38200\r
2018-07-25,39300\r
2018-07-27,38600\r
2018-07-30,38600\r
2018-08-01,35100\r
2018-08-11,37200\r
2018-08-16,34100\r
2018-08-21,36200\r
2018-08-26,29900\r
2018-09-03,32600\r
2018-09-08,30600\r
2018-09-18,30300\r
2018-09-20,29300\r
2018-09-23,32400\r
2018-09-25,34100\r
2018-09-28,34300\r
2018-09-30,29900\r
2018-10-03,35700\r
2018-10-05,28600\r
2018-10-13,31500\r
2018-10-23,25900\r
2018-10-25,26100\r
2018-11-04,34500\r
2018-11-12,32500\r
2018-11-24,34600\r
2019-01-16,17600\r
2019-01-26,4800\r
2019-02-12,8600\r
2019-02-15,10600\r
2019-02-17,10500\r
2019-02-20,5400\r
2019-02-22,1600\r
2019-02-25,22100\r
2019-02-27,25200\r
2019-03-02,26500\r
2019-03-12,34200\r
2019-03-14,37300\r
2019-03-22,29700\r
2019-03-27,34300\r
2019-03-29,33000\r
2019-04-13,41200\r
2019-04-28,30600\r
2019-05-01,31700\r
2019-05-06,35200\r
2019-05-13,33000\r
2019-05-16,33600\r
2019-05-31,35000\r
2019-06-02,38500\r
2019-06-17,4000\r
2019-06-27,27900\r
2019-06-30,37500\r
2019-07-05,27500\r
2019-07-12,24900\r
2019-07-22,27700\r
2019-07-25,35300\r
2019-08-06,32100\r
2019-08-09,33100\r
2019-08-14,37200\r
2019-08-16,29200\r
2019-08-21,34800\r
2019-08-24,37000\r
2019-08-26,36400\r
2019-08-31,34200\r
2019-09-03,35700\r
2019-09-20,34700\r
2019-09-28,33400\r
2019-09-30,28700\r
2019-10-03,32500\r
2019-10-05,29600\r
2019-10-08,27700\r
2019-10-13,29500\r
2019-10-25,26100\r
2019-11-04,25800\r
2019-11-19,28300\r
2020-02-05,29300\r
2020-02-15,31900\r
2020-02-20,27100\r
2020-02-22,30700\r
2020-03-08,29700\r
2020-03-11,25000\r
2020-03-21,30000\r
2020-04-05,27400\r
2020-04-15,30500\r
2020-05-05,36100\r
2020-05-07,34100\r
2020-05-20,34900\r
2020-05-22,28300\r
2020-05-25,29900\r
2020-05-27,26300\r
2020-05-30,30500\r
2020-06-21,30200\r
2020-06-24,30300\r
2020-06-26,37600\r
2020-07-04,16900\r
2020-07-19,40000\r
2020-07-26,31700\r
2020-07-31,34500\r
2020-08-05,27500\r
2020-08-08,37500\r
2020-08-10,30400\r
2020-08-20,29700\r
2020-08-25,36500\r
2020-09-04,24800\r
2020-09-12,30300\r
2020-09-14,24600\r
2020-10-17,37400\r
2020-10-24,17000\r
2020-11-01,28300\r
2020-11-11,26600\r
2020-11-18,25700\r
2020-11-23,31200\r
2021-02-11,32200\r
2021-02-14,29400\r
2021-02-19,29400\r
2021-02-24,35100\r
2021-03-01,35900\r
2021-03-28,34200\r
2021-03-31,28000\r
2021-04-05,39100\r
2021-04-07,42900\r
2021-04-15,29800\r
2021-05-20,37000\r
2021-05-27,41200\r
2021-06-09,28000\r
2021-06-14,13300\r
2021-07-01,33200\r
2021-07-09,35300\r
2021-07-11,39400\r
2021-07-19,39600\r
2021-07-21,40000\r
2021-08-05,38200\r
2021-08-10,40300\r
2021-08-13,33300\r
2021-08-15,35300\r
2021-08-18,35800\r
2021-08-20,37100\r
2021-08-25,38500\r
2021-08-28,36700\r
2021-08-30,34800\r
2021-09-22,36300\r
2021-10-07,39400\r
2021-10-09,35600\r
2021-10-12,35600\r
2021-10-14,31900\r
2021-10-17,33400\r
2021-10-22,16900\r
2021-10-27,28100\r
2021-11-18,30700\r
2022-01-17,31600\r
2022-01-22,22500\r
2022-01-25,17100\r
2022-01-27,18800\r
2022-01-30,14400\r
2022-02-01,10300\r
2022-02-09,25200\r
2022-02-24,29200\r
2022-03-01,34800\r
2022-03-03,31700\r
2022-03-23,34000\r
2022-03-26,36300\r
2022-04-05,35200\r
2022-04-17,35900\r
2022-04-25,31900\r
2022-05-17,35300\r
2022-05-27,34500\r
2022-06-01,36900\r
2022-06-04,31100\r
2022-06-09,32800\r
2022-06-19,33100\r
2022-06-29,25200\r
2022-07-11,44300\r
2022-07-14,34400\r
2022-07-16,43700\r
2022-07-19,34700\r
2022-07-21,43700\r
2022-07-31,39600\r
2022-08-03,30500\r
2022-08-08,36000\r
2022-08-10,39800\r
2022-08-13,41700\r
2022-08-20,41200\r
2022-08-23,39400\r
2022-08-28,36300\r
2022-09-04,38700\r
2022-09-22,37000\r
2022-10-02,38200\r
2022-10-04,37900\r
2022-10-07,42500\r
2022-10-09,37700\r
2022-10-12,33100\r
2022-11-01,28100\r
2022-11-06,34900\r
2022-11-11,33100\r
2022-11-13,29800\r
2022-11-16,29200\r
2023-01-20,5100\r
2023-01-30,5400\r
2023-02-01,12700\r
2023-02-11,11600\r
2023-02-14,12400\r
2023-02-19,14700\r
2023-03-01,900\r
2023-03-06,21600\r
2023-03-16,33500\r
2023-03-28,31100\r
2023-04-05,44000\r
2023-04-07,38600\r
2023-04-17,39900\r
2023-05-02,35500\r
2023-06-16,34200\r
2023-06-24,36000\r
2023-07-26,39300\r
2023-07-31,28000\r
2023-08-08,41600\r
2023-08-13,39500\r
2023-08-15,38100\r
2023-08-20,35600\r
2023-08-23,36900\r
2023-09-07,34800\r
2023-09-14,37800\r
2023-09-17,35300\r
2023-09-19,36100\r
2023-09-24,36000\r
2023-09-27,33200\r
2023-09-29,29900\r
2023-10-02,26400\r
2023-10-07,19800\r
`;export{r as default};
