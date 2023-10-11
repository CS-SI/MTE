const r=`date,value\r
2017-02-19,3700\r
2017-03-01,3300\r
2017-03-11,3600\r
2017-04-10,4600\r
2017-04-20,4000\r
2017-05-30,4700\r
2017-06-19,3800\r
2017-06-29,3600\r
2017-07-04,3700\r
2017-07-14,3900\r
2017-07-24,3300\r
2017-07-29,3600\r
2017-08-18,3100\r
2017-09-02,2500\r
2017-09-12,2500\r
2017-09-17,2700\r
2017-09-27,3400\r
2017-10-07,2400\r
2017-10-12,2200\r
2017-10-17,2700\r
2017-10-22,3100\r
2017-10-27,2400\r
2017-11-01,2900\r
2017-11-16,2400\r
2017-11-21,2700\r
2017-11-26,3200\r
2017-12-01,2900\r
2017-12-16,2600\r
2017-12-21,2700\r
2018-01-05,2100\r
2018-02-04,3000\r
2018-02-09,2700\r
2018-02-14,3100\r
2018-03-26,3800\r
2018-04-05,4500\r
2018-04-15,4700\r
2018-04-20,4700\r
2018-04-25,4300\r
2018-04-30,4600\r
2018-05-20,4700\r
2018-06-09,5200\r
2018-06-19,5000\r
2018-06-29,3300\r
2018-07-09,4600\r
2018-07-14,3700\r
2018-07-19,4000\r
2018-07-24,4000\r
2018-07-29,4100\r
2018-08-08,3700\r
2018-08-23,4400\r
2018-09-02,3600\r
2018-09-07,3500\r
2018-09-27,2900\r
2018-10-02,2500\r
2018-10-22,3100\r
2018-12-01,4200\r
2018-12-06,4500\r
2018-12-11,4100\r
2019-01-05,3600\r
2019-01-10,3000\r
2019-01-15,3000\r
2019-01-25,3000\r
2019-01-30,3800\r
2019-02-04,3400\r
2019-02-14,3700\r
2019-03-01,3100\r
2019-03-11,3300\r
2019-03-16,3200\r
2019-03-21,3000\r
2019-03-31,2400\r
2019-04-05,3900\r
2019-04-15,3600\r
2019-04-30,4200\r
2019-05-05,4000\r
2019-05-10,3600\r
2019-05-30,4800\r
2019-06-04,4600\r
2019-06-19,4300\r
2019-06-24,3500\r
2019-06-29,4700\r
2019-07-04,5300\r
2019-07-14,5200\r
2019-07-19,4700\r
2019-07-24,3800\r
2019-07-29,3400\r
2019-08-03,3700\r
2019-08-08,3000\r
2019-08-18,4200\r
2019-08-23,3500\r
2019-09-02,3700\r
2019-09-07,2500\r
2019-09-12,2800\r
2019-09-17,3800\r
2019-09-27,900\r
2019-10-02,3300\r
2019-10-07,2700\r
2019-10-27,3300\r
2019-11-06,3200\r
2019-11-16,3100\r
2019-12-21,3100\r
2019-12-26,2300\r
2020-01-05,4200\r
2020-02-04,3800\r
2020-02-14,3300\r
2020-02-19,3900\r
2020-02-24,3900\r
2020-03-15,4000\r
2020-04-04,3300\r
2020-04-09,4700\r
2020-04-14,3500\r
2020-04-24,4500\r
2020-04-29,3700\r
2020-05-04,4900\r
2020-05-09,4500\r
2020-05-24,4800\r
2020-06-03,5600\r
2020-06-08,4000\r
2020-06-23,4600\r
2020-06-28,4700\r
2020-07-03,4100\r
2020-07-08,4000\r
2020-07-13,5700\r
2020-08-02,4200\r
2020-08-07,3200\r
2020-08-22,4100\r
2020-08-27,2900\r
2020-09-01,1400\r
2020-09-06,4300\r
2020-09-16,2400\r
2020-09-26,2500\r
2020-10-16,3000\r
2020-11-05,2700\r
2020-11-10,3100\r
2020-11-20,2700\r
2020-11-25,3200\r
2020-12-25,3000\r
2021-01-14,3600\r
2021-01-19,3200\r
2021-01-24,3500\r
2021-02-23,3300\r
2021-02-28,3500\r
2021-03-05,4100\r
2021-03-10,3700\r
2021-03-15,3900\r
2021-03-30,4100\r
2021-04-14,3800\r
2021-04-19,3700\r
2021-05-04,4600\r
2021-06-08,4700\r
2021-06-13,5100\r
2021-06-18,4300\r
2021-06-28,4000\r
2021-07-03,4300\r
2021-07-13,4000\r
2021-07-18,3900\r
2021-07-23,5000\r
2021-07-28,3900\r
2021-08-02,4100\r
2021-08-17,3500\r
2021-08-22,4200\r
2021-08-27,3100\r
2021-09-01,3100\r
2021-09-06,3000\r
2021-09-11,3100\r
2021-09-21,2900\r
2021-10-01,2700\r
2021-10-06,3300\r
2021-10-11,2900\r
2021-10-16,3500\r
2021-10-26,3200\r
2021-11-20,3000\r
2021-11-30,3400\r
2021-12-05,3900\r
2021-12-20,3000\r
2022-01-09,3700\r
2022-01-14,3400\r
2022-01-24,3600\r
2022-02-08,3100\r
2022-02-18,3200\r
2022-02-23,3500\r
2022-02-28,3700\r
2022-03-25,3300\r
2022-04-09,3400\r
2022-04-14,3700\r
2022-04-29,3600\r
2022-05-09,3900\r
2022-05-14,4300\r
2022-05-24,4600\r
2022-05-29,4600\r
2022-07-03,4700\r
2022-07-08,4600\r
2022-07-13,4100\r
2022-07-18,4100\r
2022-08-02,4300\r
2022-08-07,3600\r
2022-08-22,3600\r
2022-08-27,3200\r
2022-09-01,2800\r
2022-09-11,3300\r
2022-09-16,3600\r
2022-09-26,3100\r
2022-10-06,3100\r
2022-11-05,3100\r
2022-11-20,2500\r
2022-11-25,2800\r
2022-11-30,2900\r
2022-12-05,3500\r
2023-01-04,3300\r
2023-01-09,3400\r
2023-01-19,3100\r
2023-01-24,3500\r
2023-01-29,3100\r
2023-02-03,3400\r
2023-02-08,3500\r
2023-02-18,3300\r
2023-03-05,3800\r
2023-03-25,3300\r
2023-04-14,3400\r
2023-04-19,3300\r
2023-04-24,3400\r
2023-04-29,3800\r
2023-05-24,3800\r
2023-05-29,4100\r
2023-06-18,4400\r
2023-06-23,4300\r
2023-07-03,3300\r
2023-07-08,4200\r
2023-07-13,3500\r
2023-07-18,3800\r
2023-07-23,4300\r
2023-08-02,3600\r
2023-08-07,4300\r
2023-08-12,3200\r
2023-08-17,2900\r
2023-08-22,2800\r
2023-09-06,2600\r
2023-09-11,2400\r
2023-09-26,2200\r
2023-10-01,2500\r
`;export{r as default};
