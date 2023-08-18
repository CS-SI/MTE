const r=`date,value\r
2017-02-06,6300\r
2017-02-16,5600\r
2017-02-19,4200\r
2017-02-26,5100\r
2017-03-08,5500\r
2017-03-11,5100\r
2017-03-28,7300\r
2017-04-07,6600\r
2017-04-10,5300\r
2017-04-17,6100\r
2017-04-20,6400\r
2017-05-07,6100\r
2017-05-17,4900\r
2017-05-27,5900\r
2017-05-30,5300\r
2017-06-16,5500\r
2017-06-19,5300\r
2017-06-29,5800\r
2017-07-01,7300\r
2017-07-04,5500\r
2017-07-06,6200\r
2017-07-14,6700\r
2017-07-26,6200\r
2017-07-29,6100\r
2017-07-31,6700\r
2017-08-05,6200\r
2017-08-08,6900\r
2017-08-13,6800\r
2017-08-18,5900\r
2017-08-23,4200\r
2017-08-25,5400\r
2017-09-02,5700\r
2017-09-04,4700\r
2017-09-12,5000\r
2017-09-14,5500\r
2017-09-17,5400\r
2017-09-27,5700\r
2017-10-07,4700\r
2017-10-09,3600\r
2017-10-12,4600\r
2017-10-17,5100\r
2017-10-22,4800\r
2017-11-13,4300\r
2017-11-16,3500\r
2017-11-18,4000\r
2017-11-21,3700\r
2017-11-26,3900\r
2017-11-28,4700\r
2017-12-01,4900\r
2017-12-03,3700\r
2017-12-13,4000\r
2017-12-16,3800\r
2017-12-21,3100\r
2017-12-28,5700\r
2018-01-05,5400\r
2018-01-17,4500\r
2018-02-04,6100\r
2018-02-11,5200\r
2018-02-14,5400\r
2018-03-03,7300\r
2018-03-13,6400\r
2018-03-23,7300\r
2018-03-26,8100\r
2018-04-05,6200\r
2018-04-17,8000\r
2018-04-20,6700\r
2018-04-22,6500\r
2018-04-25,6700\r
2018-04-27,6900\r
2018-05-12,6400\r
2018-05-20,8600\r
2018-05-25,6500\r
2018-06-01,6000\r
2018-06-09,6300\r
2018-06-14,6900\r
2018-06-16,6500\r
2018-06-19,6900\r
2018-06-21,7900\r
2018-06-29,6000\r
2018-07-01,6100\r
2018-07-04,7000\r
2018-07-06,6600\r
2018-07-09,6200\r
2018-07-14,5400\r
2018-07-19,5900\r
2018-07-21,6000\r
2018-07-24,6100\r
2018-07-26,6800\r
2018-07-29,6600\r
2018-07-31,6900\r
2018-08-03,7300\r
2018-08-05,7100\r
2018-08-08,6200\r
2018-08-15,5400\r
2018-08-20,7400\r
2018-08-25,5000\r
2018-08-28,4500\r
2018-08-30,5300\r
2018-09-02,6800\r
2018-09-12,5100\r
2018-09-19,5800\r
2018-09-22,6000\r
2018-09-27,4400\r
2018-09-29,4900\r
2018-10-02,4600\r
2018-10-04,5100\r
2018-10-09,5100\r
2018-10-12,7300\r
2018-10-19,5400\r
2018-10-22,4800\r
2018-10-24,3400\r
2018-11-18,5500\r
2018-11-28,4400\r
2018-12-01,6200\r
2018-12-08,5600\r
2018-12-11,5900\r
2018-12-18,5000\r
2018-12-28,5600\r
2019-01-02,4400\r
2019-01-05,4900\r
2019-01-07,2600\r
2019-01-10,2400\r
2019-01-12,4100\r
2019-01-15,3000\r
2019-01-22,3400\r
2019-01-25,3000\r
2019-02-04,5300\r
2019-02-06,2600\r
2019-02-11,5200\r
2019-02-14,4300\r
2019-02-16,4800\r
2019-02-21,5300\r
2019-03-01,4700\r
2019-03-03,4600\r
2019-03-08,2700\r
2019-03-11,2800\r
2019-03-13,2700\r
2019-03-21,5500\r
2019-03-23,900\r
2019-03-28,2100\r
2019-03-31,2500\r
2019-04-05,500\r
2019-04-15,5600\r
2019-04-17,3000\r
2019-04-27,4500\r
2019-04-30,5800\r
2019-05-12,5500\r
2019-05-30,11200\r
2019-06-01,4400\r
2019-06-04,8900\r
2019-06-06,7000\r
2019-06-11,6400\r
2019-06-16,7400\r
2019-06-19,11000\r
2019-06-24,7500\r
2019-06-26,3900\r
2019-06-29,8500\r
2019-07-01,8400\r
2019-07-04,6900\r
2019-07-06,5600\r
2019-07-11,8400\r
2019-07-16,2800\r
2019-07-19,8600\r
2019-07-21,5600\r
2019-07-24,8600\r
2019-07-26,3700\r
2019-07-29,7700\r
2019-07-31,5100\r
2019-08-03,7400\r
2019-08-05,6800\r
2019-08-08,7700\r
2019-08-10,5300\r
2019-08-15,5500\r
2019-08-18,6900\r
2019-08-23,7600\r
2019-08-25,3500\r
2019-08-28,7000\r
2019-09-04,2800\r
2019-09-07,5200\r
2019-09-12,3300\r
2019-09-29,3800\r
2019-10-02,4300\r
2019-10-07,5100\r
2019-10-27,3900\r
2019-11-06,4200\r
2019-11-16,4200\r
2019-12-03,2000\r
2019-12-08,6400\r
2019-12-13,6700\r
2019-12-21,5700\r
2019-12-23,6800\r
2020-01-02,6900\r
2020-01-05,6100\r
2020-01-12,3100\r
2020-01-30,7400\r
2020-02-04,5400\r
2020-02-11,5000\r
2020-02-14,3000\r
2020-02-24,6800\r
2020-03-07,3600\r
2020-04-04,4900\r
2020-04-06,5800\r
2020-04-09,7000\r
2020-04-11,4400\r
2020-04-14,7500\r
2020-04-24,8200\r
2020-04-26,7900\r
2020-05-04,7900\r
2020-05-06,7600\r
2020-05-21,4700\r
2020-05-26,5200\r
2020-05-31,8100\r
2020-06-05,6400\r
2020-06-10,8900\r
2020-06-15,6100\r
2020-06-20,7200\r
2020-06-23,11400\r
2020-06-28,10500\r
2020-06-30,5900\r
2020-07-03,10900\r
2020-07-05,6800\r
2020-07-08,9700\r
2020-07-10,7100\r
2020-07-15,6600\r
2020-07-20,6100\r
2020-07-30,5800\r
2020-08-04,4500\r
2020-08-07,6300\r
2020-08-09,3600\r
2020-08-12,6200\r
2020-08-14,6200\r
2020-08-17,7400\r
2020-08-19,4200\r
2020-08-22,5800\r
2020-08-27,4100\r
2020-09-01,4900\r
2020-09-03,3000\r
2020-09-08,4900\r
2020-09-13,2400\r
2020-09-16,4600\r
2020-09-23,4200\r
2020-09-26,2200\r
2020-09-28,1000\r
2020-10-03,5600\r
2020-10-08,2100\r
2020-10-13,3400\r
2020-10-16,5600\r
2020-10-28,1900\r
2020-11-05,1900\r
2020-11-07,1300\r
2020-11-10,4700\r
2020-11-15,10000\r
2020-11-17,2000\r
2020-11-20,4400\r
2020-11-22,3900\r
2020-11-25,4000\r
2020-12-07,1500\r
2020-12-22,5900\r
2020-12-25,6000\r
2021-01-06,2500\r
2021-01-11,5700\r
2021-01-14,5200\r
2021-01-19,6600\r
2021-01-24,6500\r
2021-01-26,6200\r
2021-01-31,6000\r
2021-02-08,6100\r
2021-02-15,3900\r
2021-02-20,5400\r
2021-02-23,4500\r
2021-02-25,6000\r
2021-02-28,6600\r
2021-03-07,6200\r
2021-03-15,6600\r
2021-03-17,7100\r
2021-03-20,8000\r
2021-03-22,6800\r
2021-03-27,7400\r
2021-03-30,7300\r
2021-04-01,5900\r
2021-04-06,4700\r
2021-04-24,6600\r
2021-05-04,6600\r
2021-05-21,5800\r
2021-05-26,7000\r
2021-05-29,7300\r
2021-05-31,7700\r
2021-06-03,6200\r
2021-06-05,6800\r
2021-06-08,7400\r
2021-06-13,5400\r
2021-06-15,6700\r
2021-06-18,6900\r
2021-06-25,5600\r
2021-06-28,6800\r
2021-06-30,7000\r
2021-07-03,6900\r
2021-07-05,6800\r
2021-07-08,5700\r
2021-07-10,7700\r
2021-07-13,5800\r
2021-07-18,6300\r
2021-07-20,6400\r
2021-07-25,5000\r
2021-07-30,4500\r
2021-08-02,5700\r
2021-08-09,5200\r
2021-08-14,4400\r
2021-08-17,5800\r
2021-08-19,6200\r
2021-08-22,6900\r
2021-08-27,3900\r
2021-08-29,4400\r
2021-09-01,5900\r
2021-09-06,4900\r
2021-09-08,3900\r
2021-09-11,4600\r
2021-09-13,3600\r
2021-09-21,4500\r
2021-10-01,4100\r
2021-10-06,5100\r
2021-10-11,4100\r
2021-10-13,3600\r
2021-10-16,3400\r
2021-10-18,3800\r
2021-10-23,3700\r
2021-11-02,4500\r
2021-11-05,4500\r
2021-11-20,3700\r
2021-11-30,3800\r
2021-12-02,4300\r
2021-12-07,3200\r
2021-12-12,3500\r
2021-12-17,2800\r
2021-12-20,3100\r
2022-01-06,2400\r
2022-01-09,3500\r
2022-01-11,3100\r
2022-01-14,3400\r
2022-01-16,3300\r
2022-01-21,3300\r
2022-01-24,4200\r
2022-01-26,3700\r
2022-01-29,4200\r
2022-02-05,3300\r
2022-02-08,3600\r
2022-02-10,3300\r
2022-02-13,3600\r
2022-02-15,2600\r
2022-02-18,5300\r
2022-02-20,3700\r
2022-02-23,3700\r
2022-02-28,3400\r
2022-03-02,3700\r
2022-03-22,1600\r
2022-07-03,800\r
2022-07-05,600\r
2022-07-08,700\r
2022-07-13,900\r
2022-07-15,200\r
2022-07-18,900\r
2022-07-20,700\r
2022-07-30,400\r
2022-08-02,900\r
2022-08-04,600\r
2022-08-07,300\r
2022-08-09,300\r
2022-08-12,300\r
2022-08-22,900\r
2022-08-24,700\r
2022-08-27,100\r
2022-09-03,100\r
2022-09-08,100\r
2022-10-01,300\r
2022-10-16,200\r
2022-10-18,800\r
2022-10-28,200\r
2022-11-05,900\r
2022-11-17,500\r
2022-11-20,600\r
2022-11-25,2600\r
2022-11-30,1200\r
2022-12-02,1600\r
2022-12-05,800\r
2022-12-07,1600\r
2022-12-27,1600\r
2023-01-04,400\r
2023-01-09,2700\r
2023-01-19,1000\r
2023-01-21,1300\r
2023-01-26,400\r
2023-01-29,700\r
2023-02-03,1400\r
2023-02-05,700\r
2023-02-08,900\r
2023-02-10,300\r
2023-02-13,1200\r
2023-02-15,800\r
2023-03-02,2600\r
2023-03-05,2700\r
2023-03-10,3400\r
2023-03-12,1200\r
2023-03-22,2700\r
2023-03-25,2400\r
2023-03-27,2000\r
2023-03-30,3900\r
2023-04-01,3600\r
2023-04-14,3600\r
2023-04-16,3500\r
2023-04-19,5100\r
2023-04-24,4600\r
2023-04-26,3600\r
2023-05-04,3700\r
2023-05-06,4600\r
2023-05-11,3400\r
2023-05-16,4800\r
2023-05-24,5300\r
2023-05-26,4600\r
2023-06-03,5100\r
2023-06-08,5300\r
2023-06-15,4700\r
2023-06-23,6700\r
2023-06-25,4600\r
2023-07-05,4400\r
2023-07-08,4500\r
2023-07-10,7000\r
2023-07-13,6700\r
2023-07-15,6200\r
2023-07-18,5700\r
2023-07-20,6100\r
2023-07-23,6300\r
`;export{r as default};
