const r=`date,value\r
2017-02-19,1700\r
2017-03-11,2200\r
2017-04-10,2500\r
2017-04-20,2600\r
2017-06-19,2200\r
2017-06-29,2500\r
2017-07-04,2400\r
2017-07-14,3400\r
2017-07-29,2100\r
2017-08-08,1800\r
2017-08-13,1700\r
2017-08-18,2000\r
2017-09-02,1400\r
2017-09-17,1000\r
2017-10-07,800\r
2017-10-12,1000\r
2017-10-17,1300\r
2017-10-22,900\r
2017-10-27,1000\r
2017-11-01,1400\r
2017-11-16,500\r
2017-11-26,1000\r
2017-12-01,1200\r
2017-12-16,700\r
2017-12-21,1000\r
2018-01-05,200\r
2018-02-04,1200\r
2018-02-09,1400\r
2018-03-26,2300\r
2018-04-05,2200\r
2018-04-20,2100\r
2018-04-25,2900\r
2018-04-30,2900\r
2018-05-20,3100\r
2018-06-09,3200\r
2018-06-19,3600\r
2018-06-29,2200\r
2018-07-04,2800\r
2018-07-09,2000\r
2018-07-14,2600\r
2018-07-19,2400\r
2018-07-24,2900\r
2018-09-02,1800\r
2018-09-22,1400\r
2018-09-27,1600\r
2018-10-02,900\r
2018-10-22,1700\r
2018-12-06,1300\r
2018-12-11,1800\r
2019-01-05,1900\r
2019-01-10,1100\r
2019-01-15,1400\r
2019-01-25,1700\r
2019-01-30,2200\r
2019-02-04,1800\r
2019-02-14,2000\r
2019-03-01,2100\r
2019-03-11,2200\r
2019-03-16,2100\r
2019-03-21,2500\r
2019-03-31,1500\r
2019-04-05,2800\r
2019-04-15,2300\r
2019-04-30,2900\r
2019-05-05,2700\r
2019-05-10,2900\r
2019-05-30,4100\r
2019-06-04,3700\r
2019-06-19,3800\r
2019-06-29,3600\r
2019-07-24,2400\r
2019-07-29,2600\r
2019-08-03,2400\r
2019-08-08,1100\r
2019-08-23,2400\r
2019-09-07,1600\r
2019-09-12,1100\r
2019-09-17,3000\r
2019-09-27,400\r
2019-10-02,1200\r
2019-10-07,1500\r
2019-10-27,1300\r
2019-11-06,1700\r
2019-11-16,1800\r
2019-12-21,1900\r
2019-12-26,1700\r
2020-01-05,1800\r
2020-02-04,900\r
2020-02-14,1200\r
2020-02-19,2000\r
2020-02-24,2200\r
2020-03-15,2300\r
2020-04-04,1700\r
2020-04-09,3200\r
2020-04-24,3500\r
2020-04-29,1400\r
2020-05-04,4500\r
2020-05-09,2600\r
2020-05-24,4400\r
2020-06-03,4400\r
2020-06-23,4000\r
2020-06-28,4100\r
2020-07-03,3400\r
2020-07-08,3600\r
2020-07-23,4500\r
2020-08-02,4200\r
2020-08-07,1900\r
2020-08-22,3400\r
2020-08-27,1700\r
2020-09-06,3000\r
2020-09-16,1200\r
2020-09-26,1600\r
2020-11-05,1400\r
2020-11-20,1900\r
2020-11-25,1500\r
2020-12-25,1700\r
2021-01-14,1800\r
2021-01-24,1900\r
2021-01-29,2200\r
2021-02-08,2400\r
2021-02-23,1900\r
2021-02-28,2100\r
2021-03-10,2000\r
2021-03-15,1900\r
2021-03-30,2600\r
2021-05-04,2800\r
2021-05-09,2300\r
2021-05-19,2100\r
2021-06-03,2100\r
2021-06-13,3300\r
2021-06-28,2700\r
2021-07-13,1600\r
2021-07-18,2800\r
2021-07-23,3300\r
2021-07-28,2600\r
2021-08-02,2300\r
2021-08-17,2200\r
2021-08-22,2000\r
2021-08-27,2000\r
2021-09-01,1500\r
2021-09-06,1500\r
2021-09-11,1600\r
2021-10-01,900\r
2021-10-06,1500\r
2021-10-11,1100\r
2021-10-16,1600\r
2021-10-26,800\r
2021-11-20,900\r
2021-11-30,1500\r
2021-12-05,2000\r
2021-12-20,1300\r
2022-01-09,1500\r
2022-01-14,1400\r
2022-01-24,1800\r
2022-01-29,1400\r
2022-02-08,1200\r
2022-02-18,1700\r
2022-02-23,2000\r
2022-02-28,2000\r
2022-03-25,2200\r
2022-04-09,3200\r
2022-04-14,3200\r
2022-05-04,3500\r
2022-05-14,2600\r
2022-07-03,3000\r
2022-07-08,2200\r
2022-07-13,2300\r
2022-07-18,2900\r
2022-07-23,2100\r
2022-08-02,1900\r
2022-08-07,2000\r
2022-08-22,1900\r
2022-09-06,1800\r
2022-09-11,1500\r
2022-09-16,1600\r
2022-09-26,1800\r
2022-10-01,1900\r
2022-11-05,1100\r
2022-11-20,500\r
2022-11-25,900\r
2022-11-30,800\r
2023-01-09,1100\r
2023-01-19,1100\r
2023-01-24,1800\r
2023-01-29,1200\r
2023-02-03,800\r
2023-02-08,1500\r
2023-02-13,1400\r
2023-03-05,1900\r
2023-03-10,1700\r
2023-03-25,2100\r
2023-03-30,2100\r
2023-04-14,2900\r
2023-04-19,2700\r
2023-04-24,2500\r
2023-05-24,2600\r
2023-06-03,2300\r
2023-06-23,2600\r
2023-07-03,1800\r
2023-07-08,2000\r
2023-07-13,1600\r
2023-07-18,1500\r
2023-07-23,1700\r
`;export{r as default};
