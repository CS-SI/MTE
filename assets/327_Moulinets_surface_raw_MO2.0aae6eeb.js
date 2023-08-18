const r=`date,value\r
2017-04-02,23600\r
2017-04-05,23600\r
2017-04-12,23600\r
2017-04-22,32700\r
2017-04-25,32700\r
2017-05-02,35700\r
2017-05-05,34900\r
2017-05-12,34900\r
2017-05-22,34600\r
2017-05-25,34600\r
2017-06-01,34600\r
2017-06-04,23700\r
2017-06-11,23700\r
2017-06-21,38500\r
2017-06-24,38500\r
2017-07-01,34100\r
2017-08-05,28600\r
2017-08-13,28600\r
2017-08-15,28800\r
2017-10-04,35600\r
2017-10-12,35600\r
2017-10-14,37200\r
2017-10-22,18400\r
2017-12-18,30100\r
2017-12-28,30100\r
2018-01-22,25700\r
2018-01-25,25700\r
2018-01-30,25500\r
2018-02-16,23400\r
2018-02-21,23400\r
2018-02-24,23400\r
2018-02-26,23400\r
2018-04-17,5500\r
2018-04-20,5500\r
2018-04-25,5500\r
2018-05-07,33700\r
2018-05-10,33700\r
2018-05-15,33700\r
2018-05-17,34700\r
2018-05-20,30200\r
2018-05-22,38000\r
2018-05-25,38000\r
2018-06-26,35400\r
2018-06-29,35400\r
2018-07-04,32900\r
2018-07-06,32900\r
2018-07-11,34900\r
2018-07-14,34900\r
2018-07-19,34900\r
2018-07-21,34900\r
2018-07-24,26100\r
2018-07-26,29100\r
2018-07-31,29100\r
2018-08-05,33200\r
2018-08-08,31700\r
2018-08-13,31700\r
2018-10-09,26700\r
2018-10-19,26700\r
2018-10-24,27500\r
2018-10-27,27500\r
2018-10-29,27500\r
2018-11-01,27500\r
2018-11-03,28300\r
2018-11-06,27600\r
2018-11-13,27600\r
2018-11-18,24800\r
2018-11-23,27000\r
2018-11-26,27000\r
2018-12-03,22100\r
2019-02-26,28200\r
2019-03-11,28200\r
2019-03-13,28200\r
2019-05-22,34700\r
2019-05-25,34700\r
2019-05-27,34700\r
2019-05-30,34700\r
2019-06-01,34700\r
2019-06-06,37800\r
2019-06-09,33600\r
2019-06-11,33600\r
2019-06-14,33600\r
2019-06-21,35900\r
2019-06-26,35900\r
2019-06-29,35900\r
2019-07-01,40100\r
2019-07-04,40100\r
2019-07-06,40100\r
2019-07-09,37300\r
2019-07-11,37300\r
2019-07-14,37300\r
2019-07-16,41200\r
2019-07-21,36500\r
2019-07-24,36500\r
2019-07-29,36500\r
2019-07-31,36500\r
2019-08-30,38300\r
2019-09-02,38300\r
2019-09-04,34600\r
2019-09-07,35200\r
2019-09-14,33500\r
2019-09-17,34500\r
2019-09-19,33700\r
2019-09-22,35700\r
2019-09-24,35700\r
2019-10-02,34200\r
2019-10-04,34200\r
2019-11-03,35100\r
2019-11-08,35100\r
2019-11-11,35100\r
2019-11-13,35100\r
2019-11-18,35100\r
2019-12-03,35300\r
2019-12-08,35300\r
2019-12-13,35600\r
2019-12-23,34500\r
2019-12-26,34500\r
2020-02-06,38000\r
2020-02-11,38000\r
2020-03-02,37300\r
2020-03-12,37300\r
2020-03-17,37700\r
2020-03-25,32500\r
2020-03-27,32500\r
2020-03-30,32500\r
2020-04-01,32500\r
2020-04-11,36500\r
2020-04-14,36500\r
2020-04-16,36500\r
2020-04-19,36500\r
2020-04-21,37800\r
2020-04-26,37300\r
2020-05-01,40200\r
2020-05-06,37100\r
2020-05-09,39200\r
2020-05-11,39200\r
2020-05-14,36100\r
2020-05-19,36100\r
2020-05-21,36100\r
2020-05-26,30000\r
2020-05-29,30000\r
2020-05-31,33900\r
2020-06-05,33900\r
2020-06-08,33900\r
2020-06-15,30600\r
2020-06-25,36600\r
2020-06-28,36600\r
2020-07-05,36600\r
2020-07-08,36600\r
2020-07-10,39500\r
2020-07-13,37600\r
2020-07-20,37700\r
2020-07-30,36300\r
2020-08-02,36300\r
2020-08-04,39100\r
2020-08-09,40300\r
2020-08-12,40300\r
2020-08-17,39300\r
2020-09-13,38600\r
2020-09-16,38600\r
2020-09-18,38600\r
2020-09-21,38600\r
2020-09-26,38600\r
2020-12-17,22500\r
2020-12-20,22500\r
2020-12-27,22500\r
2021-02-05,34000\r
2021-04-21,22700\r
2021-04-24,22700\r
2021-04-26,31200\r
2021-04-29,31200\r
2021-05-01,31200\r
2021-05-11,28800\r
2021-05-14,28800\r
2021-05-16,28800\r
2021-05-19,28800\r
2021-05-21,28800\r
2021-05-31,32900\r
2021-06-05,34900\r
2021-06-08,34900\r
2021-06-13,33800\r
2021-06-15,38000\r
2021-06-20,37400\r
2021-06-23,37400\r
2021-06-25,37400\r
2021-07-15,34900\r
2021-07-18,34900\r
2021-07-20,34900\r
2021-07-28,29800\r
2021-08-14,30800\r
2021-08-17,30600\r
2021-08-22,30600\r
2021-08-24,30600\r
2021-08-29,27500\r
2021-09-03,27500\r
2021-09-06,27500\r
2021-09-23,25900\r
2021-09-26,25900\r
2021-10-01,25900\r
2021-10-03,25900\r
2021-12-17,26700\r
2022-01-01,35700\r
2022-02-25,25300\r
2022-03-12,26000\r
2022-03-17,26000\r
2022-03-20,26000\r
2022-03-22,26600\r
2022-03-25,24300\r
2022-03-27,24300\r
2022-03-30,24300\r
2022-04-01,24300\r
2022-04-16,39700\r
2022-04-19,39700\r
2022-04-21,39700\r
2022-04-24,39700\r
2022-04-26,30900\r
2022-04-29,30800\r
2022-05-31,25100\r
2022-06-08,25100\r
2022-06-10,25100\r
2022-06-25,29000\r
2022-06-28,29000\r
2022-07-03,30300\r
2022-07-05,30900\r
2022-07-10,34300\r
2022-07-15,29600\r
2022-07-18,34000\r
2022-07-20,29300\r
2022-08-09,22800\r
2022-08-12,22800\r
2022-08-17,21900\r
2022-08-19,21900\r
2022-10-08,22300\r
2022-10-11,22300\r
2022-10-13,22300\r
2022-10-18,28100\r
2022-10-23,25700\r
2022-11-12,12900\r
2022-11-15,12900\r
2022-11-17,12900\r
2022-11-22,12900\r
2022-12-07,28100\r
2022-12-10,28100\r
2022-12-15,28100\r
2022-12-17,28100\r
2022-12-27,29500\r
2023-01-21,25400\r
2023-01-26,25000\r
2023-02-15,25800\r
2023-05-16,35600\r
2023-05-19,35600\r
2023-05-21,35900\r
2023-05-24,35900\r
2023-05-26,35900\r
2023-05-29,6500\r
2023-05-31,4600\r
2023-06-15,34500\r
2023-06-20,34500\r
2023-06-23,34500\r
2023-06-25,38100\r
2023-07-03,31600\r
2023-07-05,31700\r
2023-07-10,32100\r
2023-07-13,32100\r
2023-07-15,32100\r
`;export{r as default};
