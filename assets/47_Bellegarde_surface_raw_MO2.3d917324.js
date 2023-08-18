const r=`date,value\r
2017-02-22,21600\r
2017-02-25,22200\r
2017-03-07,21700\r
2017-03-17,22600\r
2017-03-27,22200\r
2017-04-03,21700\r
2017-04-06,21700\r
2017-04-23,21500\r
2017-05-03,21500\r
2017-05-16,20400\r
2017-05-23,20400\r
2017-05-26,21200\r
2017-06-02,21000\r
2017-06-05,21000\r
2017-06-12,18600\r
2017-06-25,21500\r
2017-07-02,21000\r
2017-07-05,21900\r
2017-07-07,21900\r
2017-07-10,21900\r
2017-07-12,21900\r
2017-07-17,20600\r
2017-07-22,18700\r
2017-07-27,22400\r
2017-08-04,22400\r
2017-08-06,18600\r
2017-08-11,17100\r
2017-08-14,18600\r
2017-08-19,20000\r
2017-08-21,19500\r
2017-08-24,18800\r
2017-08-26,18900\r
2017-08-29,19900\r
2017-09-03,15900\r
2017-09-05,15700\r
2017-09-08,16300\r
2017-09-10,14700\r
2017-09-13,14700\r
2017-09-20,15000\r
2017-09-23,16200\r
2017-09-28,15300\r
2017-10-03,16400\r
2017-10-05,16300\r
2017-10-08,16300\r
2017-10-10,17800\r
2017-10-13,15900\r
2017-10-15,15900\r
2017-10-18,15500\r
2017-10-25,14500\r
2017-10-28,14900\r
2017-10-30,14900\r
2017-11-07,14100\r
2017-11-14,14800\r
2017-11-17,15000\r
2017-11-19,15000\r
2017-11-22,13600\r
2017-11-24,13600\r
2017-11-27,14000\r
2017-11-29,12100\r
2017-12-09,13900\r
2017-12-14,13900\r
2017-12-19,15700\r
2017-12-24,15700\r
2017-12-27,15700\r
2018-02-25,21700\r
2018-02-27,21700\r
2018-03-02,21700\r
2018-03-14,20800\r
2018-03-19,20800\r
2018-03-22,20800\r
2018-04-21,20200\r
2018-04-23,20200\r
2018-04-26,20800\r
2018-05-06,20000\r
2018-05-11,21500\r
2018-05-18,21500\r
2018-05-21,21500\r
2018-06-20,21400\r
2018-06-22,21500\r
2018-06-25,22100\r
2018-06-27,22100\r
2018-07-02,21200\r
2018-07-07,20500\r
2018-07-10,21000\r
2018-07-12,21200\r
2018-07-15,21100\r
2018-07-17,21100\r
2018-07-20,20900\r
2018-07-22,22600\r
2018-07-25,21500\r
2018-07-27,22100\r
2018-07-30,20500\r
2018-08-01,21300\r
2018-08-04,20700\r
2018-08-06,20500\r
2018-08-11,19700\r
2018-08-16,20200\r
2018-08-19,18700\r
2018-08-21,17000\r
2018-08-26,19300\r
2018-08-31,17900\r
2018-09-08,18200\r
2018-09-10,17300\r
2018-09-13,18200\r
2018-09-20,16800\r
2018-09-23,17100\r
2018-09-25,16400\r
2018-09-28,16700\r
2018-09-30,16700\r
2018-10-03,16900\r
2018-10-05,15700\r
2018-10-20,15500\r
2018-10-23,15800\r
2018-10-25,15800\r
2018-10-30,14700\r
2018-11-04,13900\r
2018-11-12,15500\r
2018-11-17,15500\r
2018-11-19,15500\r
2018-11-22,15500\r
2018-11-24,15600\r
2018-11-27,15600\r
2018-11-29,15800\r
2018-12-27,15400\r
2018-12-29,15400\r
2019-01-03,15800\r
2019-01-11,15800\r
2019-01-16,17600\r
2019-01-23,15300\r
2019-01-28,15300\r
2019-02-12,19000\r
2019-02-15,19000\r
2019-02-17,18600\r
2019-02-20,19900\r
2019-02-22,18800\r
2019-02-25,18800\r
2019-02-27,19900\r
2019-03-12,19000\r
2019-03-22,19600\r
2019-03-24,19100\r
2019-03-27,19500\r
2019-03-29,20000\r
2019-04-01,19700\r
2019-04-08,20400\r
2019-04-13,21900\r
2019-05-01,20500\r
2019-05-06,20500\r
2019-05-11,20500\r
2019-05-13,21300\r
2019-05-16,21300\r
2019-05-23,19400\r
2019-05-31,22800\r
2019-06-02,21100\r
2019-06-12,22700\r
2019-06-17,20100\r
2019-06-22,20100\r
2019-06-25,20100\r
2019-06-27,20100\r
2019-06-30,20100\r
2019-07-02,20100\r
2019-07-05,21200\r
2019-07-07,21200\r
2019-07-10,21200\r
2019-07-12,21300\r
2019-07-15,21400\r
2019-07-17,20200\r
2019-07-22,20200\r
2019-07-25,19800\r
2019-08-01,20300\r
2019-08-04,19000\r
2019-08-09,18400\r
2019-08-11,19400\r
2019-08-14,17700\r
2019-08-16,17700\r
2019-08-21,20700\r
2019-08-24,18500\r
2019-08-26,18400\r
2019-08-29,19600\r
2019-08-31,19200\r
2019-09-03,19200\r
2019-09-05,18100\r
2019-09-13,18300\r
2019-09-15,18600\r
2019-09-18,17400\r
2019-09-20,17300\r
2019-10-05,18400\r
2019-10-08,14600\r
2019-10-13,17000\r
2019-10-25,16200\r
2019-10-30,12700\r
2019-11-04,12700\r
2019-11-09,12700\r
2019-11-27,19100\r
2019-12-02,19100\r
2019-12-29,19700\r
2020-01-06,17400\r
2020-01-11,19000\r
2020-01-16,17400\r
2020-01-18,17400\r
2020-02-05,16000\r
2020-02-07,16000\r
2020-02-15,16600\r
2020-02-20,15500\r
2020-02-22,15100\r
2020-03-01,15800\r
2020-03-08,16500\r
2020-03-13,20000\r
2020-03-18,20800\r
2020-03-21,18600\r
2020-03-28,18600\r
2020-03-31,19200\r
2020-04-05,20800\r
2020-04-07,20100\r
2020-04-10,21600\r
2020-04-12,20400\r
2020-04-15,20400\r
2020-04-25,21900\r
2020-05-07,20100\r
2020-05-17,20500\r
2020-05-20,21100\r
2020-05-22,19400\r
2020-05-25,19500\r
2020-05-27,20000\r
2020-05-30,20000\r
2020-06-19,17400\r
2020-06-21,20000\r
2020-06-24,18800\r
2020-06-26,19900\r
2020-07-01,19900\r
2020-07-04,18600\r
2020-07-09,19900\r
2020-07-11,16800\r
2020-07-14,17300\r
2020-07-19,15900\r
2020-07-21,17000\r
2020-07-24,18600\r
2020-07-26,18500\r
2020-07-29,18400\r
2020-07-31,18500\r
2020-08-03,18500\r
2020-08-05,17400\r
2020-08-08,18900\r
2020-08-10,18800\r
2020-08-15,14600\r
2020-08-20,14800\r
2020-08-23,16700\r
2020-08-25,15100\r
2020-09-02,12900\r
2020-09-04,12900\r
2020-09-07,9900\r
2020-09-12,10700\r
2020-09-14,10200\r
2020-09-17,12900\r
2020-09-19,13000\r
2020-11-06,10700\r
2020-11-08,11000\r
2020-11-11,9300\r
2020-11-18,9500\r
2020-11-21,9500\r
2020-11-23,8500\r
2020-11-26,8300\r
2020-12-18,16100\r
2021-02-06,23000\r
2021-02-11,23000\r
2021-02-14,23200\r
2021-02-19,22800\r
2021-02-24,21500\r
2021-03-01,20200\r
2021-03-23,19600\r
2021-03-26,19600\r
2021-03-28,20500\r
2021-03-31,20300\r
2021-04-02,21600\r
2021-04-05,20400\r
2021-04-07,20400\r
2021-04-15,20400\r
2021-04-17,20400\r
2021-04-20,20400\r
2021-04-22,20700\r
2021-05-27,21600\r
2021-05-30,21600\r
2021-06-11,20400\r
2021-06-14,21200\r
2021-06-16,20900\r
2021-06-19,20900\r
2021-06-21,20900\r
2021-06-26,21700\r
2021-07-01,21600\r
2021-07-19,21400\r
2021-07-21,21400\r
2021-07-26,21400\r
2021-07-29,23100\r
2021-08-05,21500\r
2021-08-10,20900\r
2021-08-13,20900\r
2021-08-18,20900\r
2021-08-20,20900\r
2021-08-23,20400\r
2021-08-25,20400\r
2021-08-28,20200\r
2021-08-30,20200\r
2021-09-04,22000\r
2021-09-07,19500\r
2021-09-12,19000\r
2021-09-14,19000\r
2021-09-17,19000\r
2021-09-22,18200\r
2021-09-24,19000\r
2021-09-29,19000\r
2021-10-12,16700\r
2021-10-14,19300\r
2021-10-17,17500\r
2021-10-24,16800\r
2021-10-27,16300\r
2021-12-16,19500\r
2021-12-18,21800\r
2021-12-21,20600\r
2021-12-23,19800\r
2022-01-05,19500\r
2022-01-12,19500\r
2022-01-15,20400\r
2022-01-17,20100\r
2022-01-22,20900\r
2022-01-25,19800\r
2022-01-27,19000\r
2022-01-30,19000\r
2022-02-01,19000\r
2022-02-06,19800\r
2022-02-09,20200\r
2022-03-01,19600\r
2022-03-03,19200\r
2022-03-08,19200\r
2022-03-23,17700\r
2022-03-26,19200\r
2022-04-05,20000\r
2022-04-10,19400\r
2022-04-15,19200\r
2022-04-17,19300\r
2022-04-27,19200\r
2022-05-15,20600\r
2022-05-17,20800\r
2022-05-20,20800\r
2022-05-22,20800\r
2022-05-27,20200\r
2022-06-01,20000\r
2022-06-04,20000\r
2022-06-06,20400\r
2022-06-11,20400\r
2022-06-14,22100\r
2022-06-16,19900\r
2022-06-19,19100\r
2022-06-29,20600\r
2022-07-01,20400\r
2022-07-04,20400\r
2022-07-06,19200\r
2022-07-11,18900\r
2022-07-14,18600\r
2022-07-16,18700\r
2022-07-19,19200\r
2022-07-21,18800\r
2022-07-24,18700\r
2022-07-26,17600\r
2022-07-29,17100\r
2022-07-31,16700\r
2022-08-03,16600\r
2022-08-05,16700\r
2022-08-08,16500\r
2022-08-10,16400\r
2022-08-13,15500\r
2022-08-15,16800\r
2022-08-20,14000\r
2022-08-23,15400\r
2022-08-28,12000\r
2022-08-30,12000\r
2022-09-02,10900\r
2022-09-04,11500\r
2022-09-12,11400\r
2022-09-19,10400\r
2022-09-22,10400\r
2022-10-04,2800\r
2022-10-07,2800\r
2022-10-09,8700\r
2022-10-12,8700\r
2022-10-22,7900\r
2022-10-24,8100\r
2022-10-27,7900\r
2022-11-01,7900\r
2022-11-06,8400\r
2022-11-11,7000\r
2022-11-13,7000\r
2022-11-16,8500\r
2022-12-26,9300\r
2022-12-28,9900\r
2023-02-06,12100\r
2023-02-09,13400\r
2023-02-11,12200\r
2023-02-14,12800\r
2023-02-16,12200\r
2023-02-19,12500\r
2023-02-21,12900\r
2023-02-26,12800\r
2023-03-01,12100\r
2023-03-16,16600\r
2023-03-28,17600\r
2023-04-05,19200\r
2023-04-07,18200\r
2023-04-15,19100\r
2023-04-17,18100\r
2023-04-20,17900\r
2023-05-02,18600\r
2023-05-27,18800\r
2023-05-30,19900\r
2023-06-04,19500\r
2023-06-11,18000\r
2023-06-29,21500\r
2023-07-06,21600\r
2023-07-09,20400\r
2023-07-11,14100\r
2023-07-14,16800\r
2023-07-16,16500\r
2023-07-19,16500\r
2023-07-21,16500\r
`;export{r as default};
