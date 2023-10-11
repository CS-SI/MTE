const r=`date,value\r
2017-02-15,16800\r
2017-02-25,17700\r
2017-03-17,17700\r
2017-03-27,18600\r
2017-04-03,21300\r
2017-04-06,21300\r
2017-04-23,22100\r
2017-05-16,27000\r
2017-05-23,27000\r
2017-05-26,27000\r
2017-06-02,21100\r
2017-06-05,21100\r
2017-06-15,21200\r
2017-06-22,21200\r
2017-06-25,21300\r
2017-07-02,20700\r
2017-07-05,20800\r
2017-07-07,19500\r
2017-07-17,18700\r
2017-07-18,18400\r
2017-07-22,18400\r
2017-08-11,14200\r
2017-08-14,15500\r
2017-08-19,15500\r
2017-08-21,15400\r
2017-08-22,17400\r
2017-08-24,15000\r
2017-08-26,16000\r
2017-08-27,16000\r
2017-08-29,16000\r
2017-09-03,17000\r
2017-09-23,12300\r
2017-10-03,12300\r
2017-10-05,11800\r
2017-10-06,11800\r
2017-10-11,11800\r
2017-10-13,12900\r
2017-10-15,12500\r
2017-10-16,14100\r
2017-10-18,12300\r
2017-10-25,13800\r
2017-10-26,2000\r
2017-10-28,2000\r
2017-11-04,12500\r
2017-11-05,12500\r
2017-11-07,12500\r
2017-11-14,12500\r
2017-11-17,12200\r
2017-11-22,12400\r
2017-11-27,12400\r
2018-02-27,18200\r
2018-03-05,18200\r
2018-03-14,18800\r
2018-03-17,18800\r
2018-03-19,18800\r
2018-03-20,18800\r
2018-03-24,18800\r
2018-04-18,21300\r
2018-04-19,21300\r
2018-04-21,21500\r
2018-04-26,21500\r
2018-05-11,17700\r
2018-05-18,17700\r
2018-05-19,17700\r
2018-05-21,17700\r
2018-05-26,17300\r
2018-06-20,17300\r
2018-06-22,17500\r
2018-06-23,17500\r
2018-06-25,17500\r
2018-06-27,15600\r
2018-06-28,15600\r
2018-07-03,15800\r
2018-07-07,14900\r
2018-07-08,15900\r
2018-07-12,15900\r
2018-07-22,14800\r
2018-07-27,16100\r
2018-07-28,16100\r
2018-07-30,16900\r
2018-08-01,16900\r
2018-08-02,16900\r
2018-08-04,16900\r
2018-08-06,15800\r
2018-08-07,16700\r
2018-08-11,16200\r
2018-08-12,16200\r
2018-08-14,16200\r
2018-08-16,16200\r
2018-08-19,13200\r
2018-08-22,13200\r
2018-08-26,15000\r
2018-09-01,14300\r
2018-09-03,14300\r
2018-09-05,14300\r
2018-09-08,12200\r
2018-09-10,13900\r
2018-09-11,13900\r
2018-09-18,13900\r
2018-09-20,13400\r
2018-09-25,15200\r
2018-09-26,15200\r
2018-09-28,15200\r
2018-09-30,13200\r
2018-10-05,13700\r
2018-10-06,12500\r
2018-10-10,15500\r
2018-10-11,12800\r
2018-10-13,14900\r
2018-10-16,11600\r
2018-10-18,13600\r
2018-10-20,12600\r
2018-10-21,12600\r
2018-10-23,13200\r
2018-10-25,12100\r
2018-10-30,11400\r
2018-11-04,10500\r
2018-11-09,10500\r
2018-11-14,11100\r
2018-11-19,11100\r
2018-11-22,14200\r
2018-11-24,12200\r
2018-11-27,15100\r
2019-02-05,13000\r
2019-02-13,13000\r
2019-02-15,13200\r
2019-02-17,10700\r
2019-02-18,10700\r
2019-02-20,12600\r
2019-02-22,11900\r
2019-02-23,11900\r
2019-02-25,10600\r
2019-02-27,11900\r
2019-03-07,12400\r
2019-03-22,14100\r
2019-03-24,14300\r
2019-03-27,14300\r
2019-03-29,14600\r
2019-03-30,14600\r
2019-04-01,14600\r
2019-04-08,13900\r
2019-04-09,17600\r
2019-04-11,17600\r
2019-04-13,16500\r
2019-04-14,16100\r
2019-04-18,16300\r
2019-04-19,16300\r
2019-05-01,16800\r
2019-05-06,16700\r
2019-05-13,17800\r
2019-05-14,17800\r
2019-05-16,16800\r
2019-05-23,16900\r
2019-05-28,16900\r
2019-05-29,17600\r
2019-05-31,17300\r
2019-06-02,16600\r
2019-06-08,17600\r
2019-06-17,18000\r
2019-06-25,20700\r
2019-06-27,18000\r
2019-06-28,18000\r
2019-06-30,18200\r
2019-07-02,18200\r
2019-07-03,17600\r
2019-07-05,17900\r
2019-07-07,17400\r
2019-07-08,17400\r
2019-07-10,17500\r
2019-07-12,17000\r
2019-07-13,17500\r
2019-07-15,17500\r
2019-07-17,17400\r
2019-07-20,17400\r
2019-07-22,17100\r
2019-07-23,17100\r
2019-07-25,17200\r
2019-08-02,18400\r
2019-08-04,17000\r
2019-08-09,18400\r
2019-08-12,17100\r
2019-08-14,17700\r
2019-08-22,16500\r
2019-08-24,16500\r
2019-08-26,15500\r
2019-08-29,15500\r
2019-08-31,15400\r
2019-09-03,16400\r
2019-09-06,16400\r
2019-09-10,16300\r
2019-09-13,16400\r
2019-09-15,16000\r
2019-09-16,16500\r
2019-09-18,16500\r
2019-09-20,16000\r
2019-09-21,16000\r
2019-10-03,15600\r
2019-10-08,14100\r
2019-10-11,14100\r
2019-10-13,13200\r
2019-10-21,11100\r
2019-11-22,12700\r
2019-11-24,13200\r
2019-12-04,11400\r
2019-12-05,11400\r
2019-12-10,10700\r
2019-12-17,10700\r
2020-01-06,14600\r
2020-01-13,14600\r
2020-01-16,16600\r
2020-01-18,16200\r
2020-01-19,16200\r
2020-01-21,16600\r
2020-01-24,16300\r
2020-02-15,17900\r
2020-02-18,17900\r
2020-02-20,18500\r
2020-02-22,17500\r
2020-03-13,21500\r
2020-03-18,21600\r
2020-03-19,21600\r
2020-03-21,21600\r
2020-03-23,20400\r
2020-03-24,20400\r
2020-03-26,20600\r
2020-03-28,20500\r
2020-03-31,20400\r
2020-04-02,21000\r
2020-04-05,21100\r
2020-04-07,21100\r
2020-04-08,22500\r
2020-04-10,21500\r
2020-04-12,22300\r
2020-04-13,21500\r
2020-04-15,21800\r
2020-04-17,21300\r
2020-04-22,22000\r
2020-04-23,22000\r
2020-04-27,21700\r
2020-05-07,17800\r
2020-05-17,20100\r
2020-05-18,20100\r
2020-05-20,19400\r
2020-05-25,21900\r
2020-05-27,22400\r
2020-05-28,22400\r
2020-05-30,22200\r
2020-06-01,22200\r
2020-06-02,23600\r
2020-06-26,20900\r
2020-06-29,20900\r
2020-07-04,24500\r
2020-07-06,24500\r
2020-07-07,24500\r
2020-07-09,21700\r
2020-07-11,22000\r
2020-07-12,24800\r
2020-07-14,24800\r
2020-07-17,24800\r
2020-07-19,24700\r
2020-07-21,24700\r
2020-07-22,24700\r
2020-07-24,24500\r
2020-07-27,26000\r
2020-07-29,24000\r
2020-07-31,25200\r
2020-08-05,24100\r
2020-08-06,24100\r
2020-08-08,24300\r
2020-08-10,23500\r
2020-08-15,24600\r
2020-08-20,23700\r
2020-08-25,22100\r
2020-09-04,20600\r
2020-09-07,21300\r
2020-09-09,20500\r
2020-09-10,22500\r
2020-09-12,20500\r
2020-09-14,20900\r
2020-09-15,20900\r
2020-09-17,18800\r
2020-11-18,18100\r
2020-11-19,18100\r
2020-11-21,18200\r
2020-11-23,18200\r
2020-11-28,18200\r
2020-11-29,18200\r
2020-12-04,18700\r
2020-12-11,21400\r
2020-12-13,21400\r
2020-12-18,21100\r
2020-12-24,21100\r
2021-02-14,16900\r
2021-02-17,16900\r
2021-02-21,18900\r
2021-02-24,18900\r
2021-02-27,20200\r
2021-03-01,19200\r
2021-03-04,20400\r
2021-03-06,20400\r
2021-03-08,17700\r
2021-03-09,17700\r
2021-03-23,20900\r
2021-03-24,20900\r
2021-03-28,23000\r
2021-03-29,23000\r
2021-03-31,21600\r
2021-04-02,22500\r
2021-04-03,21700\r
2021-04-05,21700\r
2021-04-07,21700\r
2021-04-08,22100\r
2021-04-22,22200\r
2021-04-23,22200\r
2021-04-25,22200\r
2021-04-27,22200\r
2021-05-05,18200\r
2021-05-08,18200\r
2021-05-13,18200\r
2021-05-27,18100\r
2021-05-28,18100\r
2021-05-30,25100\r
2021-06-01,20100\r
2021-06-09,25800\r
2021-06-11,20800\r
2021-06-14,23400\r
2021-06-16,25900\r
2021-06-26,23000\r
2021-07-04,22600\r
2021-07-07,21300\r
2021-07-11,21300\r
2021-07-19,22500\r
2021-07-21,24100\r
2021-07-22,24100\r
2021-07-29,20900\r
2021-08-10,21000\r
2021-08-11,21000\r
2021-08-15,21000\r
2021-08-20,21900\r
2021-08-25,21700\r
2021-08-26,21700\r
2021-09-07,21000\r
2021-09-12,21000\r
2021-09-17,21000\r
2021-09-22,18000\r
2021-09-24,20600\r
2021-09-25,20600\r
2021-09-27,20000\r
2021-09-30,20000\r
2021-10-02,20000\r
2021-10-04,21300\r
2021-10-14,20300\r
2021-10-15,20300\r
2021-10-17,20500\r
2021-10-19,20800\r
2021-10-22,20800\r
2021-10-24,20600\r
2021-10-27,20600\r
2021-11-01,21300\r
2021-12-21,19200\r
2021-12-23,21100\r
2022-01-15,18400\r
2022-01-25,19600\r
2022-02-09,18300\r
2022-02-26,17500\r
2022-02-27,17500\r
2022-03-06,18400\r
2022-03-08,18300\r
2022-03-09,19600\r
2022-03-23,19600\r
2022-03-24,19600\r
2022-03-26,20500\r
2022-04-17,21700\r
2022-04-20,21700\r
2022-04-22,21700\r
2022-05-10,20700\r
2022-05-15,23700\r
2022-05-17,22400\r
2022-05-30,21300\r
2022-06-01,21800\r
2022-06-02,21800\r
2022-06-04,21800\r
2022-06-11,23200\r
2022-06-14,22800\r
2022-06-16,22800\r
2022-06-21,21600\r
2022-06-29,23900\r
2022-07-02,20300\r
2022-07-04,21300\r
2022-07-06,20600\r
2022-07-11,21500\r
2022-07-12,21500\r
2022-07-14,22400\r
2022-07-16,22200\r
2022-07-17,22100\r
2022-07-19,22200\r
2022-07-21,21800\r
2022-07-24,21500\r
2022-07-31,21700\r
2022-08-03,22200\r
2022-08-06,21000\r
2022-08-08,22100\r
2022-08-10,21600\r
2022-08-11,21600\r
2022-08-13,22300\r
2022-08-18,21600\r
2022-09-04,19500\r
2022-09-12,19500\r
2022-09-19,18000\r
2022-09-20,18000\r
2022-09-22,17100\r
2022-10-04,16900\r
2022-10-05,16900\r
2022-10-09,18300\r
2022-10-19,17800\r
2022-10-22,16800\r
2022-11-11,14600\r
2022-11-13,14600\r
2022-12-06,15000\r
2022-12-08,15600\r
2022-12-09,15600\r
2022-12-11,15600\r
2022-12-16,15600\r
2022-12-28,14900\r
2023-01-15,1700\r
2023-02-11,13700\r
2023-02-12,13700\r
2023-02-14,14400\r
2023-02-16,14400\r
2023-04-05,17400\r
2023-04-08,17400\r
2023-04-13,17400\r
2023-04-20,18100\r
2023-05-27,21800\r
2023-05-28,21800\r
2023-05-30,20800\r
2023-06-01,20800\r
2023-06-02,20800\r
2023-06-04,20800\r
2023-06-06,20800\r
2023-06-14,23700\r
2023-06-16,23700\r
2023-06-19,23700\r
2023-06-24,23800\r
2023-06-27,22100\r
2023-07-09,24600\r
2023-07-11,24600\r
2023-07-14,23200\r
2023-07-17,23200\r
2023-07-19,23700\r
2023-07-22,24300\r
2023-07-26,23100\r
2023-07-31,21300\r
2023-08-08,21900\r
2023-08-10,21900\r
2023-08-18,20700\r
2023-08-20,24300\r
2023-08-21,24300\r
2023-08-23,22800\r
2023-08-26,22800\r
2023-09-04,21100\r
2023-09-05,21100\r
2023-09-07,22000\r
2023-09-09,22000\r
2023-09-10,22000\r
2023-09-14,22000\r
2023-09-15,23100\r
2023-09-19,23000\r
2023-10-02,18900\r
2023-10-05,18900\r
2023-10-07,20700\r
`;export{r as default};
