const r=`date,value\r
2017-02-25,36200\r
2017-03-04,35800\r
2017-03-07,35800\r
2017-03-17,33700\r
2017-04-06,37500\r
2017-04-16,38000\r
2017-04-23,37700\r
2017-05-16,36000\r
2017-05-23,36000\r
2017-05-26,36400\r
2017-06-02,36200\r
2017-06-05,36200\r
2017-07-05,37400\r
2017-07-07,37400\r
2017-07-12,37400\r
2017-08-04,37300\r
2017-08-11,37300\r
2017-08-14,37600\r
2017-08-16,36900\r
2017-08-19,36900\r
2017-08-21,36900\r
2017-08-24,36900\r
2017-09-08,35600\r
2017-09-10,35600\r
2017-09-13,37200\r
2017-09-20,34500\r
2017-09-23,35400\r
2017-09-28,35000\r
2017-10-03,35000\r
2017-10-08,33800\r
2017-10-10,33800\r
2017-10-13,34300\r
2017-10-15,34300\r
2017-10-18,34300\r
2017-10-20,32800\r
2017-10-23,32800\r
2018-03-02,36900\r
2018-03-07,36900\r
2018-03-09,36900\r
2018-04-21,38700\r
2018-04-26,38700\r
2018-05-11,33000\r
2018-05-13,33000\r
2018-05-21,33000\r
2018-06-25,38500\r
2018-06-27,38500\r
2018-07-02,38900\r
2018-07-07,37400\r
2018-07-10,37400\r
2018-07-25,38900\r
2018-07-27,38900\r
2018-07-30,39000\r
2018-08-01,39000\r
2018-08-06,37500\r
2018-08-19,38600\r
2018-08-21,38600\r
2018-08-24,38600\r
2018-08-26,38600\r
2018-08-29,38600\r
2018-09-03,36800\r
2018-09-05,36800\r
2018-09-08,36800\r
2018-09-10,36800\r
2018-09-13,36800\r
2018-09-23,35800\r
2018-09-25,35800\r
2018-09-28,37500\r
2018-09-30,37500\r
2018-10-03,36200\r
2018-10-05,37600\r
2018-10-10,35500\r
2018-10-13,35500\r
2019-03-02,34400\r
2019-03-04,34400\r
2019-03-07,34400\r
2019-03-12,35100\r
2019-03-14,35300\r
2019-03-17,35300\r
2019-03-22,35600\r
2019-03-24,35600\r
2019-03-27,35000\r
2019-03-29,37200\r
2019-04-01,37200\r
2019-05-01,36400\r
2019-05-06,36400\r
2019-05-13,36400\r
2019-05-16,34800\r
2019-05-23,24900\r
2019-05-28,24900\r
2019-05-31,35700\r
2019-06-02,35200\r
2019-06-12,35200\r
2019-06-15,35200\r
2019-06-25,38600\r
2019-06-27,38600\r
2019-06-30,39600\r
2019-07-05,37600\r
2019-07-07,37600\r
2019-07-10,38900\r
2019-07-12,38600\r
2019-07-15,39300\r
2019-07-20,38300\r
2019-07-22,39600\r
2019-07-25,38200\r
2019-08-01,36700\r
2019-08-04,36900\r
2019-08-06,36900\r
2019-08-09,35600\r
2019-08-14,35400\r
2019-08-16,35400\r
2019-08-21,37500\r
2019-08-24,35200\r
2019-08-26,36000\r
2019-08-29,34900\r
2019-08-31,36700\r
2019-09-03,34300\r
2019-09-05,34300\r
2019-09-08,35800\r
2019-09-13,35700\r
2019-09-15,34800\r
2019-09-18,36200\r
2019-09-20,36100\r
2019-09-28,35700\r
2019-09-30,37700\r
2019-10-03,36200\r
2019-10-05,36600\r
2019-10-08,35800\r
2019-10-10,35800\r
2019-10-13,36000\r
2019-10-15,34000\r
2019-10-25,33700\r
2020-03-01,32600\r
2020-03-08,30400\r
2020-03-11,34900\r
2020-03-18,34400\r
2020-03-21,34900\r
2020-03-26,34900\r
2020-03-28,33500\r
2020-04-05,33500\r
2020-04-15,36700\r
2020-04-25,36700\r
2020-05-05,37600\r
2020-05-07,37600\r
2020-05-17,37600\r
2020-05-20,39900\r
2020-05-22,38800\r
2020-05-25,40000\r
2020-05-27,40000\r
2020-05-30,38700\r
2020-06-14,40300\r
2020-06-19,39800\r
2020-06-21,39800\r
2020-06-24,40600\r
2020-06-26,40600\r
2020-07-01,40600\r
2020-07-04,38900\r
2020-07-06,39000\r
2020-07-09,38900\r
2020-07-11,39800\r
2020-07-14,38800\r
2020-07-16,38800\r
2020-07-19,38900\r
2020-07-21,37900\r
2020-07-24,37900\r
2020-07-26,38800\r
2020-07-31,37400\r
2020-08-03,38800\r
2020-08-05,38400\r
2020-08-08,39500\r
2020-08-10,39500\r
2020-08-13,39500\r
2020-08-15,39500\r
2020-08-20,36800\r
2020-08-23,39200\r
2020-08-25,37800\r
2020-08-30,37800\r
2020-09-02,37800\r
2020-09-04,37800\r
2020-09-07,37800\r
2020-09-12,33700\r
2020-09-14,33700\r
2020-09-17,36700\r
2020-09-19,36700\r
2020-09-27,36700\r
2020-09-29,35100\r
2020-10-17,35600\r
2020-10-19,35600\r
2020-10-24,35600\r
2020-10-27,35600\r
2020-10-29,35600\r
2020-11-01,36300\r
2021-03-01,35300\r
2021-03-31,35200\r
2021-04-02,35200\r
2021-04-05,36600\r
2021-04-07,36600\r
2021-04-12,36100\r
2021-04-15,37600\r
2021-04-20,37500\r
2021-04-22,37500\r
2021-05-20,38300\r
2021-05-22,38300\r
2021-05-25,38300\r
2021-05-27,38300\r
2021-05-30,38300\r
2021-06-14,37400\r
2021-06-16,37400\r
2021-06-19,37400\r
2021-06-21,37400\r
2021-06-24,37400\r
2021-07-09,37600\r
2021-07-11,37600\r
2021-07-14,37600\r
2021-07-16,37600\r
2021-07-19,38000\r
2021-07-21,37000\r
2021-07-24,37000\r
2021-07-29,37000\r
2021-08-13,35400\r
2021-08-15,35400\r
2021-08-18,35400\r
2021-08-20,35400\r
2021-08-23,35400\r
2021-08-28,33800\r
2021-08-30,33800\r
2021-09-17,33200\r
2021-09-19,33200\r
2021-09-22,35500\r
2021-09-27,35500\r
2021-10-02,35400\r
2021-10-07,32200\r
2021-10-09,32200\r
2021-10-12,33400\r
2021-10-14,33400\r
2021-10-17,32700\r
2021-10-19,35200\r
2021-10-22,33300\r
2021-10-24,35100\r
2021-10-27,33600\r
2022-03-26,38600\r
2022-03-28,38600\r
2022-04-05,40400\r
2022-04-10,38300\r
2022-04-12,38300\r
2022-04-15,38300\r
2022-04-25,36600\r
2022-04-27,36600\r
2022-05-10,36900\r
2022-05-12,36900\r
2022-05-15,40500\r
2022-05-17,40500\r
2022-05-20,40500\r
2022-05-22,40500\r
2022-05-30,38900\r
2022-06-01,38900\r
2022-06-04,40200\r
2022-06-06,40200\r
2022-06-09,39300\r
2022-06-11,40100\r
2022-06-14,40100\r
2022-06-16,38600\r
2022-06-19,38600\r
2022-06-26,36300\r
2022-06-29,37300\r
2022-07-01,37400\r
2022-07-04,39200\r
2022-07-09,39200\r
2022-07-11,38900\r
2022-07-14,39100\r
2022-07-16,37200\r
2022-07-19,37400\r
2022-07-21,37400\r
2022-07-24,37400\r
2022-07-26,35900\r
2022-08-03,36500\r
2022-08-05,36500\r
2022-08-08,37700\r
2022-08-10,37700\r
2022-08-13,36800\r
2022-08-15,38200\r
2022-08-20,37300\r
2022-08-23,37900\r
2022-08-25,35800\r
2022-08-28,39100\r
2022-08-30,39100\r
2022-09-04,39100\r
2022-09-22,35200\r
2022-10-02,35200\r
2022-10-07,37300\r
2022-10-09,37300\r
2022-10-12,37300\r
2022-10-14,37300\r
2023-03-06,37900\r
2023-03-13,36100\r
2023-03-16,37800\r
2023-03-23,37400\r
2023-06-24,37700\r
2023-07-14,36300\r
2023-07-16,36300\r
2023-07-19,36300\r
`;export{r as default};
