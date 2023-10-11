const r=`date,value\r
2017-03-14,18800\r
2017-04-03,20900\r
2017-04-10,20900\r
2017-04-23,18900\r
2017-04-30,18900\r
2017-06-02,19300\r
2017-06-09,19300\r
2017-06-12,21000\r
2017-06-19,20400\r
2017-06-22,22000\r
2017-07-02,22100\r
2017-07-07,18300\r
2017-07-09,18300\r
2017-07-12,21800\r
2017-07-14,21800\r
2017-07-17,21800\r
2017-07-22,21400\r
2017-07-27,20500\r
2017-07-29,20500\r
2017-08-03,20500\r
2017-08-06,20500\r
2017-08-21,18700\r
2017-08-23,18700\r
2017-08-26,19400\r
2017-09-15,20000\r
2017-09-20,20000\r
2017-09-22,20000\r
2017-10-05,16400\r
2017-10-07,16400\r
2017-10-10,19800\r
2017-10-12,19800\r
2017-10-15,17100\r
2017-10-17,20400\r
2017-10-22,17800\r
2017-10-25,17800\r
2017-12-14,17300\r
2017-12-21,17300\r
2018-02-27,24900\r
2018-03-04,24900\r
2018-03-14,19600\r
2018-03-16,19600\r
2018-03-19,19600\r
2018-03-21,19600\r
2018-03-24,19600\r
2018-05-08,23000\r
2018-05-18,23000\r
2018-06-22,18100\r
2018-06-24,18100\r
2018-06-27,18100\r
2018-06-29,18100\r
2018-07-02,19500\r
2018-07-12,21700\r
2018-07-17,23200\r
2018-07-19,23200\r
2018-07-22,23200\r
2018-07-24,23100\r
2018-07-27,24500\r
2018-07-29,24500\r
2018-08-01,24500\r
2018-08-03,24500\r
2018-08-06,24500\r
2018-08-11,21400\r
2018-08-16,21400\r
2018-08-18,21400\r
2018-08-21,21700\r
2018-08-23,7900\r
2018-08-26,19900\r
2018-08-28,20300\r
2018-08-31,20300\r
2018-09-02,19000\r
2018-09-05,19400\r
2018-09-07,9100\r
2018-09-10,20000\r
2018-09-12,20000\r
2018-09-17,19300\r
2018-09-20,21900\r
2018-09-22,19500\r
2018-09-25,22500\r
2018-09-27,22500\r
2018-10-02,20000\r
2018-10-05,20200\r
2018-10-10,18600\r
2018-10-12,18600\r
2018-10-15,18600\r
2018-10-20,18200\r
2018-10-22,18200\r
2018-10-25,18200\r
2018-10-30,18200\r
2018-11-24,15300\r
2019-02-12,1200\r
2019-02-14,1200\r
2019-02-17,14800\r
2019-02-19,14800\r
2019-02-22,14400\r
2019-02-24,14400\r
2019-02-27,17400\r
2019-03-04,20500\r
2019-03-16,20100\r
2019-03-19,20100\r
2019-03-24,19900\r
2019-03-26,19900\r
2019-03-29,21900\r
2019-03-31,21900\r
2019-04-05,21900\r
2019-04-13,23600\r
2019-04-15,22600\r
2019-04-18,22600\r
2019-04-20,22600\r
2019-04-23,22600\r
2019-05-13,19700\r
2019-05-15,19700\r
2019-05-23,22300\r
2019-05-25,22300\r
2019-05-30,22300\r
2019-06-02,24200\r
2019-06-04,24200\r
2019-06-07,24200\r
2019-06-12,24400\r
2019-06-27,20100\r
2019-06-29,20100\r
2019-07-02,20100\r
2019-07-04,20100\r
2019-07-07,19000\r
2019-07-09,19000\r
2019-07-12,20300\r
2019-07-14,20000\r
2019-07-17,20000\r
2019-07-19,22400\r
2019-07-22,20200\r
2019-07-24,24500\r
2019-07-29,21000\r
2019-08-01,21000\r
2019-08-03,21000\r
2019-08-06,21000\r
2019-08-11,22300\r
2019-08-13,22300\r
2019-08-16,22300\r
2019-08-18,22300\r
2019-08-21,22300\r
2019-08-23,22300\r
2019-08-26,23400\r
2019-08-28,22000\r
2019-08-31,23700\r
2019-09-02,23700\r
2019-09-07,23700\r
2019-09-12,22600\r
2019-09-15,23100\r
2019-09-17,19100\r
2019-09-20,23200\r
2019-09-22,23200\r
2019-09-27,23200\r
2019-09-30,22200\r
2019-10-07,22600\r
2019-12-04,15000\r
2019-12-06,15000\r
2019-12-14,15000\r
2019-12-19,15000\r
2019-12-29,5000\r
2020-02-22,17000\r
2020-02-24,17600\r
2020-03-08,16800\r
2020-03-18,9600\r
2020-03-20,9600\r
2020-03-23,9600\r
2020-03-25,9600\r
2020-03-28,25900\r
2020-04-02,24800\r
2020-04-04,26000\r
2020-04-07,25500\r
2020-04-09,25500\r
2020-04-12,25500\r
2020-04-14,24600\r
2020-04-17,24600\r
2020-04-22,25400\r
2020-04-24,23300\r
2020-04-27,23300\r
2020-05-17,17900\r
2020-05-19,17900\r
2020-05-22,23200\r
2020-05-24,23200\r
2020-05-27,22100\r
2020-05-29,22100\r
2020-06-01,22100\r
2020-06-21,21200\r
2020-06-23,21200\r
2020-06-26,21200\r
2020-06-28,21200\r
2020-07-01,21200\r
2020-07-21,24600\r
2020-07-23,24600\r
2020-07-28,24600\r
2020-07-31,25600\r
2020-08-05,24800\r
2020-08-07,25600\r
2020-08-10,25600\r
2020-08-15,25600\r
2020-08-20,24300\r
2020-08-25,25300\r
2020-08-27,25300\r
2020-09-01,25300\r
2020-09-04,23500\r
2020-09-09,24900\r
2020-09-14,23600\r
2020-09-16,23600\r
2020-09-19,23600\r
2020-11-18,13700\r
2020-11-23,15300\r
2020-11-25,15300\r
2020-11-28,15300\r
2020-12-13,14100\r
2020-12-28,13900\r
2021-02-21,17800\r
2021-02-23,17800\r
2021-02-26,20700\r
2021-02-28,20700\r
2021-03-05,20000\r
2021-03-23,22000\r
2021-03-25,22000\r
2021-03-28,23400\r
2021-03-30,23400\r
2021-04-02,21500\r
2021-04-04,22800\r
2021-04-07,22800\r
2021-04-09,16000\r
2021-05-27,19800\r
2021-05-29,19700\r
2021-06-01,19700\r
2021-06-03,19700\r
2021-06-16,21900\r
2021-06-18,21900\r
2021-06-21,21900\r
2021-06-26,21900\r
2021-08-20,20500\r
2021-08-25,22200\r
2021-08-27,22200\r
2021-09-01,21800\r
2021-09-04,21800\r
2021-09-24,17400\r
2021-09-26,17400\r
2021-09-29,17400\r
2021-10-01,17400\r
2021-10-14,17300\r
2021-10-16,17300\r
2021-10-21,17300\r
2021-10-24,17700\r
2022-03-08,16500\r
2022-03-10,16500\r
2022-04-17,18700\r
2022-04-19,18700\r
2022-04-27,19100\r
2022-05-02,17800\r
2022-05-04,17800\r
2022-05-07,17800\r
2022-05-12,20100\r
2022-05-14,20100\r
2022-05-17,20100\r
2022-05-19,20100\r
2022-06-11,20100\r
2022-06-13,20100\r
2022-06-16,20400\r
2022-06-18,20400\r
2022-06-21,19300\r
2022-06-23,23200\r
2022-06-28,22300\r
2022-07-01,21900\r
2022-07-11,20200\r
2022-07-13,20200\r
2022-07-16,21000\r
2022-07-18,21800\r
2022-07-21,19500\r
2022-07-26,21300\r
2022-07-28,18600\r
2022-07-31,18600\r
2022-08-05,21800\r
2022-08-07,21800\r
2022-08-10,22500\r
2022-08-12,22500\r
2022-08-15,22500\r
2022-08-17,21600\r
2022-08-25,19000\r
2022-08-30,19800\r
2022-09-01,19800\r
2022-09-04,19100\r
2022-09-06,20200\r
2022-09-09,20200\r
2022-09-11,19700\r
2022-09-19,16400\r
2022-09-21,16400\r
2022-10-04,16700\r
2022-10-06,16700\r
2022-10-09,16700\r
2022-10-11,16700\r
2022-11-23,15400\r
2022-12-18,12100\r
2022-12-28,12100\r
2023-02-11,13100\r
2023-02-13,13100\r
2023-02-16,14400\r
2023-02-21,13800\r
2023-02-26,14800\r
2023-03-03,14700\r
2023-03-28,15100\r
2023-04-04,15100\r
2023-04-07,19300\r
2023-04-09,19300\r
2023-05-27,17300\r
2023-05-29,17000\r
2023-06-01,20000\r
2023-06-03,20000\r
2023-06-06,17900\r
2023-06-08,18300\r
2023-06-16,20700\r
2023-06-23,18500\r
2023-06-26,19400\r
2023-06-28,18600\r
2023-07-11,18700\r
2023-07-13,18700\r
2023-07-16,18700\r
2023-07-18,17600\r
2023-07-21,17600\r
2023-07-26,16000\r
2023-07-28,16000\r
2023-07-31,17000\r
2023-08-02,17000\r
2023-08-05,17000\r
2023-08-07,15600\r
2023-08-15,18700\r
2023-08-17,18700\r
2023-08-22,18700\r
2023-08-25,18700\r
2023-09-04,14800\r
2023-09-06,14800\r
2023-09-11,14800\r
2023-09-14,14800\r
2023-09-29,14500\r
2023-10-01,14500\r
2023-10-06,14500\r
`;export{r as default};
