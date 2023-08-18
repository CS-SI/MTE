const r=`date,value\r
2017-02-19,16800\r
2017-03-01,20800\r
2017-03-11,19400\r
2017-04-10,20100\r
2017-04-20,22500\r
2017-05-30,21300\r
2017-06-19,21000\r
2017-07-04,18100\r
2017-07-14,17600\r
2017-07-24,14900\r
2017-07-29,14700\r
2017-08-13,11900\r
2017-08-18,12100\r
2017-08-23,7700\r
2017-09-02,5800\r
2017-09-07,4400\r
2017-09-12,4900\r
2017-09-17,4700\r
2017-09-22,3800\r
2017-09-27,4800\r
2017-10-07,3700\r
2017-10-12,2700\r
2017-10-17,4100\r
2017-10-27,1100\r
2017-11-26,400\r
2018-01-30,16100\r
2018-02-04,20700\r
2018-02-09,12800\r
2018-02-14,12000\r
2018-02-24,8600\r
2018-03-16,8700\r
2018-03-26,22500\r
2018-04-15,23100\r
2018-04-20,20900\r
2018-04-25,20100\r
2018-05-25,21400\r
2018-06-09,22200\r
2018-06-14,21600\r
2018-06-19,19600\r
2018-06-29,20500\r
2018-07-04,21100\r
2018-07-19,20900\r
2018-07-24,20300\r
2018-07-29,20800\r
2018-08-18,22800\r
2018-08-28,20000\r
2018-09-02,21800\r
2018-09-07,21900\r
2018-09-12,20100\r
2018-09-27,19100\r
2018-10-02,19200\r
2018-12-01,19400\r
2018-12-11,19000\r
2019-01-05,7000\r
2019-01-10,9900\r
2019-01-15,16000\r
2019-01-20,10500\r
2019-01-25,11300\r
2019-01-30,4000\r
2019-02-04,10500\r
2019-03-01,18400\r
2019-03-11,17500\r
2019-03-16,18900\r
2019-03-21,18300\r
2019-03-26,19400\r
2019-03-31,20500\r
2019-04-05,17800\r
2019-04-15,20700\r
2019-04-20,20300\r
2019-04-30,23600\r
2019-05-10,19100\r
2019-05-30,20100\r
2019-06-04,19700\r
2019-06-19,18000\r
2019-06-24,17900\r
2019-06-29,19200\r
2019-07-14,16700\r
2019-07-19,18000\r
2019-07-24,18200\r
2019-07-29,19000\r
2019-08-03,18000\r
2019-08-08,18500\r
2019-08-18,18200\r
2019-08-23,16500\r
2019-09-02,14500\r
2019-09-07,12300\r
2019-09-12,15700\r
2019-09-17,13500\r
2019-09-27,15400\r
2019-10-02,18800\r
2019-10-07,9900\r
2019-12-26,12100\r
2020-01-25,18400\r
2020-01-30,15200\r
2020-02-04,11700\r
2020-02-09,11700\r
2020-02-14,6200\r
2020-02-19,14200\r
2020-02-24,13300\r
2020-03-20,16200\r
2020-04-04,16600\r
2020-04-09,18600\r
2020-04-14,19100\r
2020-05-04,15400\r
2020-05-14,17600\r
2020-05-24,17600\r
2020-06-23,19000\r
2020-06-28,24700\r
2020-07-03,18000\r
2020-07-08,18600\r
2020-07-23,20400\r
2020-08-02,21200\r
2020-08-07,19000\r
2020-08-12,19800\r
2020-08-22,20900\r
2020-08-27,19900\r
2020-09-01,19700\r
2020-09-06,19500\r
2020-09-16,17600\r
2020-09-26,8700\r
2020-10-11,16700\r
2020-10-16,17800\r
2020-10-21,16200\r
2020-10-31,14700\r
2020-11-05,11100\r
2020-11-10,8400\r
2020-11-20,8900\r
2020-11-25,6400\r
2020-11-30,11400\r
2021-01-14,1600\r
2021-02-08,15500\r
2021-02-23,15100\r
2021-02-28,16200\r
2021-03-10,19000\r
2021-03-25,21900\r
2021-03-30,20800\r
2021-05-19,21400\r
2021-06-13,20500\r
2021-06-18,20300\r
2021-07-18,20600\r
2021-07-23,23700\r
2021-07-28,21400\r
2021-08-02,20100\r
2021-08-12,19000\r
2021-08-17,20300\r
2021-08-27,18700\r
2021-09-01,17900\r
2021-09-11,15000\r
2021-10-01,13000\r
2021-10-06,21200\r
2021-10-11,14800\r
2021-10-16,10000\r
2021-10-26,10300\r
2021-11-05,1700\r
2021-11-20,1400\r
2021-11-30,2300\r
2022-01-14,12800\r
2022-01-19,9400\r
2022-01-24,7900\r
2022-01-29,8000\r
2022-02-08,14500\r
2022-02-13,14200\r
2022-02-18,16400\r
2022-02-23,15100\r
2022-02-28,17400\r
2022-04-04,21900\r
2022-04-09,22000\r
2022-04-14,22000\r
2022-04-19,24600\r
2022-04-29,22900\r
2022-05-14,22200\r
2022-05-19,21700\r
2022-05-29,21000\r
2022-06-13,21700\r
2022-07-03,20900\r
2022-07-18,16500\r
2022-08-02,12700\r
2022-08-07,14100\r
2022-08-12,10400\r
2022-08-27,9900\r
2022-09-01,6300\r
2022-09-11,5000\r
2022-09-16,6100\r
2022-09-21,6200\r
2022-09-26,4900\r
2022-11-10,1300\r
2022-11-20,1600\r
2022-11-25,700\r
2022-11-30,900\r
2022-12-10,12000\r
2022-12-25,17000\r
2023-01-04,17800\r
2023-01-19,15300\r
2023-01-29,17900\r
2023-02-03,16700\r
2023-02-13,15600\r
2023-02-18,18300\r
2023-03-05,21000\r
2023-03-20,21900\r
2023-03-25,20700\r
2023-03-30,22900\r
2023-04-14,23600\r
2023-04-24,21300\r
2023-05-24,21500\r
2023-06-08,22400\r
2023-06-23,17700\r
2023-06-28,20900\r
2023-07-03,20400\r
2023-07-08,18700\r
2023-07-13,18100\r
2023-07-23,19900\r
`;export{r as default};
