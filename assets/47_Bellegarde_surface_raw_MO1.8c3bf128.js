const r=`date,value\r
2017-02-22,21600\r
2017-02-25,21700\r
2017-03-17,22200\r
2017-03-27,21700\r
2017-04-23,21500\r
2017-05-16,20400\r
2017-05-26,21000\r
2017-06-02,18600\r
2017-06-25,21500\r
2017-07-05,21900\r
2017-07-07,20500\r
2017-07-17,18700\r
2017-07-27,22400\r
2017-08-04,18400\r
2017-08-06,9700\r
2017-08-14,19000\r
2017-08-21,19200\r
2017-08-24,18800\r
2017-08-26,15600\r
2017-08-29,16200\r
2017-09-05,14700\r
2017-09-20,15000\r
2017-09-23,15900\r
2017-09-28,14800\r
2017-10-05,16200\r
2017-10-10,16200\r
2017-10-13,16100\r
2017-10-15,14200\r
2017-10-18,14300\r
2017-10-25,14500\r
2017-10-30,13800\r
2017-11-14,14600\r
2017-11-17,14000\r
2017-11-22,12100\r
2017-12-09,13900\r
2017-12-19,15700\r
2018-02-25,21700\r
2018-03-14,20800\r
2018-04-21,20200\r
2018-04-26,20000\r
2018-05-11,21500\r
2018-06-20,21400\r
2018-06-25,21800\r
2018-07-02,20600\r
2018-07-07,19800\r
2018-07-10,19600\r
2018-07-12,22600\r
2018-07-15,20400\r
2018-07-25,21200\r
2018-07-27,20600\r
2018-07-30,19700\r
2018-08-01,19700\r
2018-08-04,20000\r
2018-08-06,19700\r
2018-08-11,16600\r
2018-08-19,17400\r
2018-08-21,17600\r
2018-09-08,17500\r
2018-09-20,16000\r
2018-09-23,16400\r
2018-09-25,16600\r
2018-09-28,15100\r
2018-10-03,14800\r
2018-10-05,15700\r
2018-10-20,15500\r
2018-10-23,13900\r
2018-10-30,13900\r
2018-11-12,15500\r
2018-11-24,15600\r
2018-11-29,13300\r
2018-12-27,15400\r
2019-01-03,15800\r
2019-01-16,15300\r
2019-02-12,19000\r
2019-02-15,16600\r
2019-02-17,19700\r
2019-02-20,20400\r
2019-02-22,17900\r
2019-02-27,18900\r
2019-03-12,16100\r
2019-03-22,19600\r
2019-03-24,19300\r
2019-03-27,19000\r
2019-03-29,19800\r
2019-04-01,21400\r
2019-04-08,22400\r
2019-04-13,19500\r
2019-05-01,20500\r
2019-05-13,18900\r
2019-05-23,19100\r
2019-05-31,21200\r
2019-06-02,21100\r
2019-06-17,20100\r
2019-06-27,18400\r
2019-06-30,23100\r
2019-07-05,21500\r
2019-07-12,19700\r
2019-07-15,19900\r
2019-07-25,20000\r
2019-08-04,16800\r
2019-08-09,19200\r
2019-08-14,19000\r
2019-08-24,17500\r
2019-08-26,18600\r
2019-08-31,19200\r
2019-09-13,17100\r
2019-09-15,17800\r
2019-09-18,8200\r
2019-09-20,18400\r
2019-10-08,14600\r
2019-10-13,15900\r
2019-10-25,12700\r
2019-11-27,19100\r
2019-12-29,19700\r
2020-01-06,17400\r
2020-01-11,18300\r
2020-01-16,17500\r
2020-02-05,16000\r
2020-02-15,14900\r
2020-02-20,14900\r
2020-02-22,15500\r
2020-03-13,20000\r
2020-03-18,18800\r
2020-03-21,18400\r
2020-04-05,20100\r
2020-04-10,20400\r
2020-04-12,20700\r
2020-05-07,20100\r
2020-05-20,19300\r
2020-05-22,19000\r
2020-05-25,20800\r
2020-05-27,19500\r
2020-06-19,17400\r
2020-06-21,17900\r
2020-06-24,19000\r
2020-06-26,19800\r
2020-07-04,1800\r
2020-07-09,16700\r
2020-07-19,17000\r
2020-07-21,15600\r
2020-07-24,19300\r
2020-07-26,16200\r
2020-07-29,20100\r
2020-07-31,14800\r
2020-08-05,13700\r
2020-08-08,17400\r
2020-08-10,18600\r
2020-08-15,13500\r
2020-08-20,14400\r
2020-08-25,12100\r
2020-09-02,10400\r
2020-09-04,8700\r
2020-09-14,12500\r
2020-09-17,13000\r
2020-09-19,12600\r
2020-11-06,10700\r
2020-11-08,8300\r
2020-11-11,9500\r
2020-11-18,8500\r
2020-11-23,7700\r
2020-12-18,16100\r
2021-02-06,23000\r
2021-02-14,22100\r
2021-02-19,20400\r
2021-02-24,20500\r
2021-03-01,19800\r
2021-03-23,19600\r
2021-03-28,20200\r
2021-03-31,20200\r
2021-04-02,20300\r
2021-04-05,19200\r
2021-04-15,20400\r
2021-04-22,20100\r
2021-05-27,21600\r
2021-06-11,20400\r
2021-06-14,21500\r
2021-06-16,21200\r
2021-06-26,21600\r
2021-07-19,21400\r
2021-07-29,21500\r
2021-08-10,20900\r
2021-08-20,20300\r
2021-08-28,19500\r
2021-08-30,20000\r
2021-09-07,19000\r
2021-09-22,18200\r
2021-09-24,18800\r
2021-10-12,16700\r
2021-10-14,17300\r
2021-10-17,17200\r
2021-10-24,16000\r
2021-10-27,15200\r
2021-12-16,19500\r
2021-12-18,19700\r
2021-12-23,19300\r
2022-01-05,19500\r
2022-01-15,20100\r
2022-01-22,18800\r
2022-01-25,19200\r
2022-01-27,19800\r
2022-02-09,20200\r
2022-03-01,18900\r
2022-03-03,20400\r
2022-03-23,17700\r
2022-03-26,18500\r
2022-04-05,19400\r
2022-04-10,19100\r
2022-04-17,19200\r
2022-05-15,20600\r
2022-05-17,20200\r
2022-06-01,20000\r
2022-06-06,20400\r
2022-06-14,19700\r
2022-06-16,18700\r
2022-06-19,19100\r
2022-06-29,20600\r
2022-07-01,19900\r
2022-07-06,18400\r
2022-07-11,18600\r
2022-07-14,18900\r
2022-07-16,17400\r
2022-07-19,19600\r
2022-07-21,17200\r
2022-07-24,18000\r
2022-07-26,17000\r
2022-07-29,15500\r
2022-07-31,16900\r
2022-08-03,17000\r
2022-08-10,15400\r
2022-08-20,11700\r
2022-08-28,10900\r
2022-09-04,11400\r
2022-09-12,10400\r
2022-09-19,8100\r
2022-10-04,2800\r
2022-10-09,8700\r
2022-10-22,7900\r
2022-10-24,6800\r
2022-10-27,8400\r
2022-11-11,7000\r
2022-11-16,7800\r
2022-12-26,9300\r
2022-12-28,8500\r
2023-02-06,12100\r
2023-02-09,11800\r
2023-02-11,12900\r
2023-02-14,13500\r
2023-02-16,12200\r
2023-02-19,12100\r
2023-03-16,16600\r
2023-03-28,17600\r
2023-04-05,18700\r
2023-04-07,18100\r
2023-04-20,17900\r
2023-05-02,18600\r
2023-05-27,18800\r
2023-05-30,18000\r
2023-06-04,18000\r
2023-06-29,21500\r
2023-07-11,14100\r
2023-07-14,16800\r
2023-07-16,18800\r
`;export{r as default};
