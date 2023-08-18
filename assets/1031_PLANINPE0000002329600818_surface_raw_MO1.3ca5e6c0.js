const r=`date,value\r
2017-02-22,24600\r
2017-02-25,23700\r
2017-03-17,26300\r
2017-04-03,27700\r
2017-04-23,25600\r
2017-05-16,26300\r
2017-05-26,26600\r
2017-06-02,23900\r
2017-06-12,28400\r
2017-06-22,28800\r
2017-07-05,27100\r
2017-07-07,25200\r
2017-07-17,26100\r
2017-07-27,27800\r
2017-08-04,25900\r
2017-08-14,27000\r
2017-08-21,27000\r
2017-08-24,25900\r
2017-08-26,24900\r
2017-08-29,24300\r
2017-09-03,7400\r
2017-09-05,23300\r
2017-09-20,26600\r
2017-09-23,25300\r
2017-10-05,24700\r
2017-10-08,25000\r
2017-10-10,25500\r
2017-10-13,25500\r
2017-10-15,25300\r
2017-10-25,23700\r
2017-10-28,22900\r
2017-11-17,22900\r
2017-12-14,16700\r
2017-12-19,25200\r
2018-02-10,25500\r
2018-02-25,26700\r
2018-04-01,25900\r
2018-04-21,26300\r
2018-05-11,27100\r
2018-05-23,7500\r
2018-06-20,28500\r
2018-06-25,27200\r
2018-07-02,26300\r
2018-07-07,24400\r
2018-07-12,19700\r
2018-07-15,26600\r
2018-07-25,26200\r
2018-07-27,27200\r
2018-07-30,25800\r
2018-08-01,24900\r
2018-08-04,24600\r
2018-08-11,23200\r
2018-08-19,24300\r
2018-08-21,24300\r
2018-08-26,26300\r
2018-09-03,25300\r
2018-09-08,27000\r
2018-09-20,25700\r
2018-09-23,26400\r
2018-09-25,26500\r
2018-09-30,26000\r
2018-10-03,27300\r
2018-10-05,28000\r
2018-10-23,25900\r
2018-10-25,26900\r
2018-11-12,27000\r
2018-11-27,26000\r
2018-12-17,25100\r
2018-12-19,23700\r
2018-12-27,25900\r
2019-01-03,22300\r
2019-01-16,25600\r
2019-02-12,21800\r
2019-02-15,18700\r
2019-02-17,23200\r
2019-02-20,23400\r
2019-02-22,21400\r
2019-02-25,27100\r
2019-02-27,21900\r
2019-03-12,25700\r
2019-03-22,22900\r
2019-03-24,24100\r
2019-03-27,27200\r
2019-03-29,23900\r
2019-04-01,27800\r
2019-04-13,21600\r
2019-05-01,25500\r
2019-05-06,28400\r
2019-05-13,24900\r
2019-06-02,26500\r
2019-06-17,22600\r
2019-06-27,21900\r
2019-06-30,29100\r
2019-07-05,26700\r
2019-07-10,26900\r
2019-07-12,25200\r
2019-07-15,25900\r
2019-07-25,26400\r
2019-08-04,23900\r
2019-08-09,24100\r
2019-08-14,27000\r
2019-08-16,23100\r
2019-08-24,24200\r
2019-08-29,24500\r
2019-08-31,26900\r
2019-09-03,24000\r
2019-09-13,25700\r
2019-09-20,26100\r
2019-10-08,23900\r
2019-11-04,24300\r
2019-11-27,26000\r
2019-12-29,24800\r
2020-01-01,26600\r
2020-01-06,24000\r
2020-01-11,26700\r
2020-02-05,27400\r
2020-02-20,25300\r
2020-02-22,22300\r
2020-03-08,17800\r
2020-03-18,24100\r
2020-03-21,27300\r
2020-04-05,26100\r
2020-04-10,28000\r
2020-04-15,26200\r
2020-05-05,26300\r
2020-05-07,22700\r
2020-05-17,23700\r
2020-05-20,26100\r
2020-05-22,24400\r
2020-05-25,24000\r
2020-05-27,25300\r
2020-05-30,25900\r
2020-07-04,27100\r
2020-07-09,24700\r
2020-07-14,26100\r
2020-07-19,23900\r
2020-07-21,22000\r
2020-07-24,25300\r
2020-07-29,28200\r
2020-07-31,21700\r
2020-08-05,21700\r
2020-08-08,25100\r
2020-08-10,24900\r
2020-08-20,22600\r
2020-08-25,21300\r
2020-09-02,23000\r
2020-09-04,22700\r
2020-09-12,22300\r
2020-09-14,25300\r
2020-09-17,24700\r
2020-10-17,24900\r
2020-11-08,21400\r
2020-11-11,22400\r
2020-11-18,22700\r
2020-11-21,23200\r
2021-02-11,25900\r
2021-03-23,23600\r
2021-03-28,26600\r
2021-03-31,28000\r
2021-04-15,29400\r
2021-04-17,27600\r
2021-04-20,27200\r
2021-05-27,28200\r
2021-06-09,27900\r
2021-06-11,26000\r
2021-06-16,25900\r
2021-06-19,25700\r
2021-06-26,24600\r
2021-07-19,25500\r
2021-07-21,26900\r
2021-07-29,27700\r
2021-08-10,25900\r
2021-08-20,25400\r
2021-08-25,24800\r
2021-08-28,25000\r
2021-08-30,24800\r
2021-09-12,26700\r
2021-09-22,26300\r
2021-10-07,24600\r
2021-10-12,26000\r
2021-10-14,24200\r
2021-10-17,25400\r
2021-10-24,24100\r
2021-10-27,23200\r
2021-12-16,23000\r
2021-12-18,22600\r
2021-12-21,23900\r
2022-01-15,25700\r
2022-01-22,22700\r
2022-01-25,22700\r
2022-01-27,21800\r
2022-02-01,25600\r
2022-02-06,23100\r
2022-02-09,23700\r
2022-02-26,24600\r
2022-03-23,24900\r
2022-04-05,27000\r
2022-04-17,25100\r
2022-05-07,27500\r
2022-05-17,27000\r
2022-06-01,25000\r
2022-06-11,27700\r
2022-07-11,22100\r
2022-07-14,25200\r
2022-07-16,22300\r
2022-07-19,24500\r
2022-07-21,22700\r
2022-07-24,23500\r
2022-07-31,23300\r
2022-08-03,24500\r
2022-08-08,25300\r
2022-08-10,23700\r
2022-08-13,21200\r
2022-08-20,23500\r
2022-08-23,23200\r
2022-08-30,24000\r
2022-09-04,24200\r
2022-09-12,22400\r
2022-09-19,21500\r
2022-09-22,23000\r
2022-10-02,23600\r
2022-10-04,22200\r
2022-10-09,21600\r
2022-10-22,24500\r
2022-11-06,21900\r
2022-11-08,21100\r
2022-11-11,20600\r
2022-11-13,21200\r
2022-11-16,21000\r
2022-12-06,21500\r
2023-02-04,21000\r
2023-02-06,19500\r
2023-02-09,20700\r
2023-02-11,20600\r
2023-02-14,22000\r
2023-02-16,20100\r
2023-02-19,20300\r
2023-03-13,22400\r
2023-03-16,22900\r
2023-03-28,24500\r
2023-04-05,26000\r
2023-04-07,25100\r
2023-04-17,26200\r
2023-05-27,23800\r
2023-06-04,25900\r
2023-07-11,700\r
2023-07-14,2500\r
2023-07-16,21000\r
2023-07-19,2700\r
`;export{r as default};
