const r=`date,value\r
2017-02-15,29000\r
2017-02-22,35900\r
2017-02-25,18600\r
2017-03-14,37600\r
2017-03-17,38800\r
2017-04-03,38900\r
2017-04-06,38500\r
2017-04-16,38500\r
2017-04-23,35000\r
2017-05-16,34800\r
2017-05-23,36000\r
2017-06-02,32900\r
2017-06-12,38100\r
2017-06-15,34400\r
2017-06-22,41300\r
2017-07-05,38000\r
2017-07-12,39500\r
2017-07-17,38600\r
2017-07-22,36200\r
2017-07-27,36600\r
2017-08-04,39400\r
2017-08-21,36400\r
2017-08-24,37100\r
2017-08-26,34600\r
2017-09-05,35000\r
2017-09-08,36400\r
2017-09-13,36300\r
2017-09-20,34500\r
2017-09-23,35000\r
2017-09-28,36000\r
2017-10-05,35400\r
2017-10-08,35400\r
2017-10-10,32300\r
2017-10-13,35000\r
2017-10-15,33000\r
2017-10-25,31500\r
2017-10-28,33000\r
2017-10-30,11300\r
2018-02-25,31900\r
2018-04-01,33100\r
2018-04-18,39200\r
2018-04-21,41900\r
2018-05-11,40600\r
2018-06-17,38000\r
2018-06-20,38200\r
2018-06-25,37600\r
2018-06-27,39500\r
2018-07-07,40100\r
2018-07-10,38400\r
2018-07-15,37000\r
2018-07-17,38100\r
2018-07-25,38700\r
2018-07-27,38400\r
2018-07-30,40800\r
2018-08-01,38600\r
2018-08-11,37300\r
2018-08-21,38400\r
2018-08-26,37200\r
2018-08-31,36800\r
2018-09-03,31600\r
2018-09-05,38800\r
2018-09-08,34600\r
2018-09-13,34000\r
2018-09-18,34000\r
2018-09-20,34300\r
2018-09-23,31100\r
2018-09-25,35800\r
2018-09-28,32600\r
2018-09-30,34400\r
2018-10-03,34000\r
2018-10-05,33700\r
2018-10-13,30100\r
2018-10-23,29800\r
2018-10-25,31400\r
2019-02-12,20300\r
2019-02-15,100\r
2019-02-17,30900\r
2019-02-20,100\r
2019-02-22,29000\r
2019-02-25,27200\r
2019-02-27,21400\r
2019-03-02,22200\r
2019-03-12,32000\r
2019-03-22,32700\r
2019-03-27,37000\r
2019-03-29,29400\r
2019-04-13,25400\r
2019-04-28,34100\r
2019-05-01,34200\r
2019-05-06,27500\r
2019-05-13,36900\r
2019-05-16,37000\r
2019-05-23,33200\r
2019-05-31,36700\r
2019-06-02,40100\r
2019-06-12,37500\r
2019-06-17,35700\r
2019-06-27,36100\r
2019-06-30,40700\r
2019-07-02,36300\r
2019-07-05,32800\r
2019-07-07,37700\r
2019-07-12,34200\r
2019-07-15,34500\r
2019-07-22,33400\r
2019-07-25,34400\r
2019-08-04,37700\r
2019-08-09,35000\r
2019-08-16,32200\r
2019-08-21,37800\r
2019-08-24,35600\r
2019-08-26,36700\r
2019-08-31,32400\r
2019-09-03,32100\r
2019-09-15,32200\r
2019-09-18,27400\r
2019-09-20,35400\r
2019-09-28,33400\r
2019-09-30,30100\r
2019-10-03,31900\r
2019-10-05,26800\r
2019-10-08,31200\r
2019-10-10,29900\r
2019-10-13,29900\r
2019-10-25,28100\r
2020-02-15,30100\r
2020-02-20,35500\r
2020-02-22,26300\r
2020-03-11,34100\r
2020-03-21,26600\r
2020-04-05,36700\r
2020-04-15,35700\r
2020-05-05,38700\r
2020-05-07,32300\r
2020-05-17,35700\r
2020-05-20,37000\r
2020-05-22,34500\r
2020-05-25,37900\r
2020-05-27,35400\r
2020-05-30,37300\r
2020-06-06,39000\r
2020-06-19,38600\r
2020-06-21,36200\r
2020-06-24,30600\r
2020-07-04,27700\r
2020-07-14,38500\r
2020-07-16,37700\r
2020-07-19,36400\r
2020-07-21,33800\r
2020-07-26,34500\r
2020-07-29,35900\r
2020-08-05,32800\r
2020-08-08,36900\r
2020-08-10,33100\r
2020-08-13,36100\r
2020-08-15,33400\r
2020-08-25,33300\r
2020-09-04,29800\r
2020-09-12,35200\r
2020-09-14,30100\r
2020-09-17,39100\r
2020-09-29,26800\r
2020-10-17,39300\r
2020-10-24,27200\r
2021-02-11,36300\r
2021-02-19,31300\r
2021-02-24,31400\r
2021-03-01,33100\r
2021-03-23,39200\r
2021-03-28,36300\r
2021-04-05,38200\r
2021-04-07,35500\r
2021-04-15,38100\r
2021-05-20,35200\r
2021-05-27,40200\r
2021-06-09,34300\r
2021-06-14,34000\r
2021-06-16,34200\r
2021-06-21,39400\r
2021-07-09,34100\r
2021-07-11,38300\r
2021-07-16,29700\r
2021-07-19,35600\r
2021-07-21,38600\r
2021-08-10,36000\r
2021-08-13,33400\r
2021-08-15,33600\r
2021-08-20,35200\r
2021-08-25,35600\r
2021-08-28,30900\r
2021-08-30,33200\r
2021-09-12,34300\r
2021-09-17,30300\r
2021-09-22,34500\r
2021-10-07,32200\r
2021-10-09,30800\r
2021-10-12,33300\r
2021-10-14,33600\r
2021-10-17,31600\r
2021-10-22,34900\r
2021-10-24,32400\r
2021-10-27,31000\r
2022-02-09,32700\r
2022-02-24,28700\r
2022-03-01,33200\r
2022-03-03,37400\r
2022-03-23,36100\r
2022-04-05,36500\r
2022-04-10,41800\r
2022-04-17,35300\r
2022-05-17,38600\r
2022-05-22,37600\r
2022-05-27,37300\r
2022-06-01,39000\r
2022-06-04,35200\r
2022-06-06,37400\r
2022-06-19,30200\r
2022-06-29,35700\r
2022-07-11,39400\r
2022-07-14,37800\r
2022-07-16,38400\r
2022-07-19,37600\r
2022-07-21,38800\r
2022-07-24,36000\r
2022-07-31,34400\r
2022-08-03,38500\r
2022-08-05,34700\r
2022-08-08,34300\r
2022-08-10,36100\r
2022-08-20,34300\r
2022-08-23,34500\r
2022-08-28,34800\r
2022-08-30,35200\r
2022-09-02,34300\r
2022-09-04,22600\r
2022-09-19,29100\r
2022-09-22,32300\r
2022-10-02,33000\r
2022-10-04,33800\r
2022-10-09,32300\r
2022-10-12,32600\r
2022-10-22,29600\r
2023-02-11,36500\r
2023-02-14,33400\r
2023-02-16,35800\r
2023-02-19,36700\r
2023-03-01,29600\r
2023-03-13,35800\r
2023-03-16,35900\r
2023-03-28,37600\r
2023-04-07,36700\r
2023-04-17,37600\r
2023-05-02,33800\r
`;export{r as default};