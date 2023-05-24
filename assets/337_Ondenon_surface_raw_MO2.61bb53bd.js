const n=`date,value\r
2017-02-22,18600\r
2017-03-04,18600\r
2017-03-14,17000\r
2017-05-23,100\r
2017-05-30,100\r
2017-06-02,100\r
2017-06-12,16500\r
2017-06-19,16500\r
2017-06-22,16500\r
2017-07-07,18000\r
2017-07-09,18000\r
2017-07-12,21000\r
2017-07-14,21000\r
2017-07-17,21000\r
2017-07-22,19700\r
2017-08-21,18200\r
2017-08-23,18200\r
2017-08-26,21300\r
2017-09-05,17600\r
2017-10-05,17500\r
2017-10-07,17500\r
2017-10-10,17500\r
2017-10-12,17500\r
2017-10-15,17900\r
2017-10-17,16700\r
2017-10-22,16700\r
2017-10-25,16700\r
2018-03-14,15500\r
2018-03-16,15500\r
2018-03-19,15500\r
2018-03-21,15500\r
2018-03-24,15500\r
2018-04-18,20600\r
2018-04-20,20600\r
2018-04-25,20600\r
2018-06-22,17700\r
2018-06-24,17700\r
2018-06-27,17700\r
2018-06-29,17700\r
2018-07-02,17600\r
2018-07-17,16500\r
2018-07-19,16500\r
2018-07-22,16500\r
2018-07-24,16500\r
2018-07-27,22400\r
2018-07-29,22400\r
2018-08-01,22400\r
2018-08-03,22400\r
2018-08-06,22400\r
2018-08-11,19300\r
2018-08-16,20400\r
2018-08-18,20400\r
2018-08-21,18300\r
2018-08-23,19600\r
2018-08-26,17900\r
2018-08-28,20200\r
2018-08-31,20200\r
2018-09-02,18300\r
2018-09-05,18400\r
2018-09-07,3000\r
2018-09-10,18600\r
2018-09-12,18600\r
2018-09-17,17100\r
2018-09-20,19100\r
2018-09-22,18500\r
2018-09-25,20300\r
2018-09-27,20300\r
2018-10-02,19300\r
2018-10-05,19400\r
2018-10-10,17900\r
2018-10-12,17900\r
2018-10-15,17900\r
2018-10-20,16600\r
2018-10-22,16600\r
2018-10-25,16600\r
2018-10-30,16600\r
2019-02-22,13900\r
2019-02-24,13900\r
2019-02-27,12500\r
2019-03-04,13600\r
2019-03-16,2700\r
2019-03-19,2700\r
2019-03-24,17800\r
2019-03-26,17800\r
2019-03-29,17800\r
2019-03-31,17800\r
2019-04-05,17800\r
2019-04-13,18900\r
2019-04-15,18900\r
2019-04-18,18900\r
2019-04-20,18900\r
2019-04-23,18900\r
2019-05-23,21600\r
2019-05-25,21600\r
2019-05-30,21600\r
2019-06-02,22200\r
2019-06-04,22200\r
2019-06-07,20900\r
2019-06-12,22200\r
2019-06-27,21400\r
2019-06-29,21400\r
2019-07-02,21400\r
2019-07-04,21400\r
2019-07-07,22100\r
2019-07-09,22100\r
2019-07-12,20000\r
2019-07-14,21300\r
2019-07-17,16900\r
2019-07-19,16900\r
2019-07-22,17100\r
2019-07-24,5800\r
2019-07-29,7200\r
2019-08-01,7200\r
2019-08-03,900\r
2019-08-06,900\r
2019-08-11,20800\r
2019-08-13,20800\r
2019-08-16,20800\r
2019-08-18,20800\r
2019-08-21,20800\r
2019-08-23,20800\r
2019-08-26,21000\r
2019-08-28,16700\r
2019-08-31,17200\r
2019-09-02,17200\r
2019-09-07,17200\r
2019-09-12,900\r
2019-09-15,1200\r
2019-09-17,1000\r
2019-09-20,1400\r
2019-09-22,1400\r
2019-09-27,1400\r
2019-09-30,1400\r
2019-10-30,8600\r
2020-02-22,18300\r
2020-02-24,18300\r
2020-03-08,16800\r
2020-03-18,2100\r
2020-03-20,2100\r
2020-03-23,2100\r
2020-03-25,2100\r
2020-03-28,22000\r
2020-04-02,20900\r
2020-04-04,22100\r
2020-04-07,21600\r
2020-04-09,21600\r
2020-04-12,22500\r
2020-04-14,22000\r
2020-04-17,22000\r
2020-04-22,23200\r
2020-04-24,22600\r
2020-04-27,26000\r
2020-05-17,16400\r
2020-05-19,16400\r
2020-05-22,22600\r
2020-05-24,22600\r
2020-05-27,20600\r
2020-05-29,20600\r
2020-06-01,20600\r
2020-06-21,18600\r
2020-06-23,18600\r
2020-06-26,18600\r
2020-06-28,18600\r
2020-07-01,18600\r
2020-07-31,27600\r
2020-08-05,23100\r
2020-08-07,23100\r
2020-08-10,23100\r
2020-08-15,21000\r
2020-08-20,19700\r
2020-08-25,18000\r
2020-08-27,18000\r
2020-09-01,18100\r
2020-09-04,14800\r
2020-09-09,16700\r
2020-09-14,20800\r
2020-09-16,20800\r
2020-09-19,20800\r
2021-02-21,18600\r
2021-02-23,18600\r
2021-02-26,20700\r
2021-02-28,20700\r
2021-03-05,19100\r
2021-03-23,20900\r
2021-03-25,20900\r
2021-03-28,21600\r
2021-03-30,21600\r
2021-04-02,21000\r
2021-04-04,24000\r
2021-04-07,24000\r
2021-04-09,22500\r
2021-04-22,21000\r
2021-04-24,21000\r
2021-04-27,21000\r
2021-05-12,20100\r
2021-05-17,20100\r
2021-05-22,20100\r
2021-05-27,18500\r
2021-05-29,18500\r
2021-06-01,18700\r
2021-06-03,18700\r
2021-06-11,15900\r
2021-06-16,19600\r
2021-06-18,19600\r
2021-06-21,19600\r
2021-06-26,19600\r
2021-07-11,13900\r
2021-07-18,13900\r
2021-07-21,16700\r
2021-07-23,14900\r
2021-08-15,16100\r
2021-08-17,16100\r
2021-08-20,17800\r
2021-08-25,17800\r
2021-08-27,17300\r
2021-09-24,14900\r
2021-09-26,14900\r
2021-09-29,14900\r
2021-10-01,14900\r
2021-10-14,15700\r
2021-10-16,15700\r
2021-10-21,15700\r
2021-10-24,16200\r
2022-02-26,11200\r
2022-02-28,11200\r
2022-03-03,11200\r
2022-03-05,11200\r
2022-03-08,16500\r
2022-03-10,15900\r
2022-03-23,11300\r
2022-03-25,11300\r
2022-03-28,11300\r
2022-04-17,18200\r
2022-04-19,18200\r
2022-04-27,19200\r
2022-05-02,18800\r
2022-05-04,18800\r
2022-05-07,18800\r
2022-05-17,14800\r
2022-05-19,14800\r
2022-05-27,14800\r
2022-06-11,16700\r
2022-06-13,16700\r
2022-06-16,27200\r
2022-06-18,27200\r
2022-06-21,27200\r
2022-07-11,16000\r
2022-07-13,16000\r
2022-07-16,18000\r
2022-07-18,18000\r
2022-07-21,14900\r
2022-07-26,17300\r
2022-07-28,14500\r
2022-07-31,14500\r
2022-08-05,15100\r
2022-08-07,15100\r
2022-08-10,16300\r
2022-08-12,16300\r
2022-08-15,16300\r
2022-08-17,15500\r
2022-08-25,15600\r
2022-08-30,16100\r
2022-09-01,16100\r
2022-09-04,15400\r
2022-09-06,16100\r
2022-09-09,16100\r
2022-09-11,15900\r
2022-10-04,11900\r
2022-10-06,11900\r
2022-10-09,12700\r
2022-10-11,12700\r
2022-10-16,11400\r
2023-02-21,8000\r
2023-02-26,10800\r
2023-03-03,9300\r
2023-03-28,2500\r
2023-04-04,2500\r
2023-04-07,2500\r
`;export{n as default};