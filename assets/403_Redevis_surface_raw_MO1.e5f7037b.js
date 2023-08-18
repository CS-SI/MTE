const r=`date,value\r
2017-02-15,14800\r
2017-02-25,12600\r
2017-03-14,16200\r
2017-03-17,11000\r
2017-03-27,11700\r
2017-04-23,12700\r
2017-05-16,13900\r
2017-05-26,9600\r
2017-06-12,2800\r
2017-06-15,9000\r
2017-06-22,10700\r
2017-06-25,10700\r
2017-07-05,13600\r
2017-07-07,13400\r
2017-08-06,13000\r
2017-08-14,10800\r
2017-08-19,12700\r
2017-08-21,14500\r
2017-08-29,12200\r
2017-10-05,11700\r
2017-10-13,10800\r
2017-10-15,12400\r
2017-10-28,12000\r
2017-10-30,12400\r
2017-11-17,12100\r
2017-11-22,9800\r
2017-12-07,10700\r
2018-01-13,12900\r
2018-01-23,12200\r
2018-01-28,13700\r
2018-01-31,5300\r
2018-02-27,10400\r
2018-03-14,11600\r
2018-03-19,11900\r
2018-04-21,11000\r
2018-05-11,11500\r
2018-06-22,14800\r
2018-06-27,14500\r
2018-07-12,14400\r
2018-07-15,10400\r
2018-07-25,9400\r
2018-08-01,13200\r
2018-08-16,14200\r
2018-08-19,11300\r
2018-09-08,13000\r
2018-09-10,11400\r
2018-09-13,10400\r
2018-09-18,12800\r
2018-09-25,12900\r
2018-09-28,11800\r
2018-10-05,12800\r
2018-10-18,10600\r
2018-10-20,12700\r
2018-11-14,10500\r
2018-11-22,11100\r
2018-11-24,9700\r
2018-12-27,6800\r
2019-01-03,7300\r
2019-02-05,700\r
2019-02-12,2200\r
2019-02-15,3300\r
2019-02-17,2000\r
2019-02-20,2500\r
2019-02-22,1500\r
2019-02-25,6500\r
2019-02-27,9600\r
2019-03-22,11800\r
2019-03-24,14100\r
2019-03-27,8300\r
2019-03-29,12400\r
2019-04-01,7500\r
2019-04-13,13700\r
2019-05-13,15600\r
2019-05-16,15900\r
2019-05-23,15900\r
2019-06-02,12100\r
2019-06-17,15400\r
2019-06-27,13400\r
2019-06-30,13600\r
2019-07-05,12800\r
2019-07-07,13600\r
2019-07-10,14600\r
2019-07-12,16200\r
2019-07-17,14200\r
2019-07-22,13300\r
2019-07-25,15900\r
2019-08-04,13900\r
2019-08-14,13800\r
2019-08-24,14000\r
2019-08-31,12200\r
2019-09-03,12500\r
2019-09-13,10300\r
2019-09-15,12300\r
2019-09-20,11000\r
2019-10-03,11200\r
2019-10-08,12600\r
2019-10-13,5200\r
2019-10-25,11900\r
2020-01-06,11000\r
2020-01-16,11200\r
2020-01-21,13000\r
2020-02-07,14000\r
2020-02-15,12900\r
2020-02-20,12500\r
2020-02-22,13300\r
2020-03-13,12300\r
2020-03-28,13400\r
2020-04-02,12400\r
2020-04-05,12700\r
2020-04-07,13500\r
2020-04-15,13100\r
2020-05-17,13000\r
2020-05-20,13700\r
2020-05-25,14200\r
2020-05-27,11600\r
2020-05-30,10100\r
2020-06-21,14100\r
2020-06-26,14400\r
2020-07-01,15900\r
2020-07-04,15900\r
2020-07-09,10400\r
2020-07-19,15900\r
2020-07-24,14000\r
2020-07-29,13500\r
2020-07-31,13700\r
2020-08-05,15200\r
2020-08-08,13700\r
2020-08-10,11800\r
2020-08-20,12900\r
2020-08-25,14500\r
2020-09-04,13400\r
2020-09-09,12100\r
2020-09-12,11000\r
2020-09-14,11700\r
2020-09-17,10200\r
2020-11-18,12100\r
2020-11-21,11400\r
2020-11-23,11800\r
2020-12-18,11200\r
2021-02-14,10900\r
2021-02-21,10200\r
2021-02-24,11400\r
2021-02-26,13200\r
2021-03-01,11300\r
2021-03-06,11900\r
2021-03-23,14300\r
2021-03-28,13200\r
2021-03-31,12500\r
2021-04-02,14900\r
2021-04-07,12800\r
2021-05-27,10700\r
2021-05-30,14200\r
2021-06-14,9700\r
2021-06-16,13900\r
2021-06-26,14700\r
2021-07-11,12600\r
2021-07-19,12500\r
2021-07-21,14600\r
2021-08-10,15800\r
2021-08-20,12900\r
2021-09-02,13400\r
2021-09-07,12400\r
2021-09-12,11700\r
2021-09-24,12600\r
2021-10-12,9500\r
2021-10-14,11500\r
2021-10-17,11200\r
2021-10-19,11600\r
2021-10-24,11500\r
2021-10-27,9000\r
2021-12-21,9900\r
2022-01-25,10400\r
2022-01-27,13100\r
2022-02-09,12600\r
2022-02-11,10300\r
2022-02-19,11900\r
2022-02-26,12200\r
2022-03-06,12600\r
2022-03-08,12800\r
2022-03-26,13900\r
2022-04-17,15000\r
2022-04-27,12000\r
2022-06-04,14700\r
2022-06-11,15700\r
2022-06-16,15900\r
2022-06-21,14400\r
2022-06-29,11300\r
2022-07-06,12700\r
2022-07-11,15400\r
2022-07-14,14100\r
2022-07-16,15700\r
2022-07-19,14900\r
2022-07-21,14600\r
2022-07-24,13700\r
2022-08-03,14800\r
2022-08-08,14000\r
2022-08-10,15300\r
2022-08-13,13300\r
2022-08-25,14600\r
2022-09-04,13400\r
2022-09-12,12800\r
2022-09-19,13500\r
2022-09-22,10500\r
2022-10-04,12600\r
2022-10-09,11600\r
2022-10-22,11300\r
2022-11-11,8300\r
2022-12-06,4800\r
2022-12-11,7000\r
2023-02-14,11800\r
2023-02-16,12500\r
2023-04-05,13800\r
2023-06-19,10800\r
2023-06-24,16500\r
2023-07-09,15400\r
2023-07-11,14100\r
2023-07-19,7300\r
`;export{r as default};
