const r=`date,value\r
2017-02-06,6300\r
2017-02-16,6600\r
2017-02-19,5600\r
2017-02-26,5100\r
2017-03-01,5400\r
2017-03-08,5900\r
2017-03-11,6200\r
2017-03-21,5100\r
2017-03-28,7300\r
2017-03-31,7300\r
2017-04-07,7400\r
2017-04-10,6700\r
2017-04-17,6100\r
2017-04-20,5900\r
2017-04-30,6400\r
2017-05-07,6100\r
2017-05-10,6100\r
2017-05-17,6400\r
2017-05-27,6000\r
2017-05-30,6300\r
2017-06-06,6200\r
2017-06-09,5300\r
2017-06-16,5500\r
2017-06-19,6200\r
2017-06-26,6200\r
2017-06-29,6000\r
2017-07-01,7300\r
2017-07-04,6300\r
2017-07-06,6400\r
2017-07-11,6200\r
2017-07-14,6300\r
2017-07-19,6700\r
2017-07-21,6700\r
2017-07-24,6700\r
2017-07-26,6200\r
2017-07-29,6700\r
2017-07-31,6000\r
2017-08-03,6000\r
2017-08-05,6500\r
2017-08-08,6800\r
2017-08-13,6500\r
2017-08-15,6500\r
2017-08-18,6300\r
2017-08-20,7700\r
2017-08-23,5600\r
2017-08-25,5100\r
2017-08-30,5800\r
2017-09-02,5200\r
2017-09-04,5200\r
2017-09-07,6300\r
2017-09-12,5100\r
2017-09-14,4700\r
2017-09-17,5300\r
2017-09-19,5300\r
2017-09-22,5300\r
2017-09-24,5800\r
2017-09-27,6000\r
2017-10-04,5700\r
2017-10-07,6000\r
2017-10-09,4800\r
2017-10-12,4200\r
2017-10-14,4200\r
2017-10-17,5000\r
2017-10-19,4300\r
2017-10-22,4600\r
2017-10-24,5700\r
2017-10-27,5700\r
2017-10-29,4800\r
2017-11-01,4800\r
2017-11-13,4300\r
2017-11-16,4700\r
2017-11-18,4100\r
2017-11-21,4200\r
2017-11-23,4200\r
2017-11-26,4200\r
2017-11-28,4500\r
2017-12-01,4600\r
2017-12-03,4600\r
2017-12-06,4600\r
2017-12-08,4600\r
2017-12-13,4300\r
2017-12-16,4400\r
2017-12-21,3600\r
2017-12-23,3600\r
2017-12-26,3900\r
2017-12-28,5700\r
2018-01-05,5400\r
2018-01-07,5400\r
2018-01-15,5400\r
2018-01-17,4500\r
2018-01-20,4500\r
2018-01-27,4500\r
2018-02-04,6100\r
2018-02-09,6100\r
2018-02-11,6200\r
2018-02-14,5500\r
2018-02-19,5700\r
2018-02-21,5700\r
2018-03-03,7300\r
2018-03-06,7300\r
2018-03-08,7300\r
2018-03-13,7300\r
2018-03-16,6400\r
2018-03-21,6400\r
2018-03-23,7500\r
2018-03-26,8600\r
2018-03-28,8600\r
2018-03-31,8600\r
2018-04-02,8600\r
2018-04-05,8100\r
2018-04-07,6200\r
2018-04-17,8000\r
2018-04-20,8100\r
2018-04-22,7200\r
2018-04-25,7600\r
2018-04-27,6700\r
2018-04-30,6900\r
2018-05-05,7200\r
2018-05-12,6400\r
2018-05-15,6400\r
2018-05-17,6400\r
2018-05-20,8600\r
2018-05-25,8800\r
2018-06-01,6700\r
2018-06-09,6800\r
2018-06-14,7200\r
2018-06-16,6600\r
2018-06-19,6800\r
2018-06-21,7200\r
2018-06-24,7200\r
2018-06-26,6700\r
2018-06-29,6600\r
2018-07-01,6300\r
2018-07-04,6700\r
2018-07-06,6700\r
2018-07-09,6500\r
2018-07-11,6900\r
2018-07-14,6800\r
2018-07-19,5900\r
2018-07-21,5800\r
2018-07-24,6700\r
2018-07-26,6900\r
2018-07-29,6300\r
2018-07-31,6700\r
2018-08-03,6800\r
2018-08-05,6900\r
2018-08-08,6800\r
2018-08-10,7500\r
2018-08-15,6800\r
2018-08-18,7000\r
2018-08-20,7600\r
2018-08-23,7600\r
2018-08-25,5400\r
2018-08-28,4900\r
2018-08-30,5500\r
2018-09-02,5500\r
2018-09-04,5500\r
2018-09-07,5400\r
2018-09-12,6800\r
2018-09-14,5100\r
2018-09-19,7000\r
2018-09-22,5900\r
2018-09-24,6500\r
2018-09-27,5900\r
2018-09-29,5900\r
2018-10-02,5500\r
2018-10-04,5500\r
2018-10-09,5400\r
2018-10-12,6100\r
2018-10-14,6100\r
2018-10-19,5400\r
2018-10-22,5600\r
2018-10-24,4900\r
2018-11-01,5200\r
2018-11-03,3400\r
2018-11-18,5500\r
2018-11-26,5500\r
2018-11-28,5600\r
2018-12-01,6400\r
2018-12-03,6400\r
2018-12-06,6400\r
2018-12-08,5600\r
2018-12-11,6100\r
2018-12-18,5700\r
2018-12-23,5000\r
2018-12-26,5000\r
2018-12-28,5700\r
2019-01-02,4400\r
2019-01-05,5200\r
2019-01-07,4100\r
2019-01-10,4200\r
2019-01-12,4100\r
2019-01-15,4100\r
2019-01-22,3200\r
2019-01-25,3200\r
2019-01-27,3700\r
2019-01-30,3000\r
2019-02-04,3400\r
2019-02-06,3600\r
2019-02-09,3300\r
2019-02-11,4800\r
2019-02-14,5000\r
2019-02-16,4600\r
2019-02-19,4600\r
2019-02-21,4700\r
2019-03-01,5300\r
2019-03-03,5100\r
2019-03-08,4900\r
2019-03-11,4100\r
2019-03-13,3400\r
2019-03-16,3400\r
2019-03-18,3500\r
2019-03-21,3300\r
2019-03-23,2600\r
2019-03-26,3100\r
2019-03-28,2600\r
2019-03-31,2700\r
2019-04-02,2700\r
2019-04-05,2000\r
2019-04-07,2000\r
2019-04-10,2100\r
2019-04-15,3700\r
2019-04-17,3900\r
2019-04-20,3900\r
2019-04-22,3900\r
2019-04-27,4400\r
2019-04-30,4300\r
2019-05-02,4400\r
2019-05-05,4400\r
2019-05-07,4400\r
2019-05-10,5900\r
2019-05-12,4700\r
2019-05-15,7600\r
2019-05-30,11200\r
2019-06-01,11200\r
2019-06-04,8400\r
2019-06-06,8400\r
2019-06-11,7000\r
2019-06-16,7400\r
2019-06-19,11000\r
2019-06-21,11000\r
2019-06-24,8200\r
2019-06-26,8200\r
2019-06-29,7800\r
2019-07-01,8400\r
2019-07-04,8000\r
2019-07-06,7400\r
2019-07-11,7500\r
2019-07-14,7500\r
2019-07-16,7100\r
2019-07-19,6700\r
2019-07-21,5800\r
2019-07-24,7100\r
2019-07-26,7100\r
2019-07-29,7000\r
2019-07-31,5400\r
2019-08-03,6700\r
2019-08-05,6300\r
2019-08-08,7000\r
2019-08-10,6100\r
2019-08-15,6300\r
2019-08-18,6900\r
2019-08-20,6300\r
2019-08-23,6500\r
2019-08-25,5800\r
2019-08-28,6300\r
2019-08-30,6300\r
2019-09-02,7000\r
2019-09-04,6500\r
2019-09-07,5200\r
2019-09-12,5200\r
2019-09-14,3800\r
2019-09-17,3800\r
2019-09-19,3800\r
2019-09-24,3300\r
2019-09-27,3300\r
2019-09-29,3800\r
2019-10-02,4700\r
2019-10-04,4700\r
2019-10-07,4300\r
2019-10-14,4300\r
2019-10-17,5500\r
2019-10-19,5100\r
2019-10-27,3900\r
2019-10-29,3900\r
2019-11-06,4400\r
2019-11-08,4400\r
2019-11-13,4200\r
2019-11-16,4800\r
2019-12-03,2000\r
2019-12-06,2000\r
2019-12-08,6400\r
2019-12-13,6200\r
2019-12-21,6500\r
2019-12-23,6800\r
2019-12-28,6300\r
2020-01-02,6900\r
2020-01-05,7500\r
2020-01-12,5600\r
2020-01-20,6200\r
2020-01-22,3100\r
2020-01-25,3100\r
2020-01-27,3100\r
2020-01-30,7400\r
2020-02-01,7400\r
2020-02-04,7400\r
2020-02-09,7400\r
2020-02-11,5700\r
2020-02-14,5700\r
2020-02-16,4700\r
2020-02-19,4700\r
2020-02-21,5000\r
2020-02-24,4300\r
2020-02-26,4300\r
2020-03-07,6800\r
2020-03-10,6800\r
2020-03-12,3600\r
2020-03-15,3600\r
2020-03-17,3600\r
2020-03-20,5300\r
2020-03-22,5300\r
2020-04-04,6600\r
2020-04-06,6700\r
2020-04-09,6500\r
2020-04-11,6500\r
2020-04-14,6200\r
2020-04-24,7800\r
2020-04-26,7800\r
2020-04-29,7800\r
2020-05-04,8000\r
2020-05-06,8800\r
2020-05-09,8800\r
2020-05-11,7800\r
2020-05-14,8800\r
2020-05-21,7600\r
2020-05-24,4700\r
2020-05-26,5500\r
2020-05-31,5500\r
2020-06-03,5500\r
2020-06-05,6000\r
2020-06-08,5700\r
2020-06-10,8400\r
2020-06-15,8400\r
2020-06-20,7200\r
2020-06-23,11400\r
2020-06-25,11400\r
2020-06-28,9700\r
2020-06-30,9700\r
2020-07-03,9700\r
2020-07-05,9700\r
2020-07-08,9800\r
2020-07-10,9500\r
2020-07-15,8200\r
2020-07-20,6900\r
2020-07-23,8400\r
2020-07-30,6000\r
2020-08-02,6200\r
2020-08-04,5800\r
2020-08-07,5200\r
2020-08-09,5200\r
2020-08-12,5100\r
2020-08-14,5700\r
2020-08-17,6500\r
2020-08-19,5500\r
2020-08-22,5900\r
2020-08-24,6100\r
2020-08-27,6500\r
2020-09-01,4900\r
2020-09-03,4200\r
2020-09-06,5400\r
2020-09-08,5100\r
2020-09-13,4900\r
2020-09-16,3900\r
2020-09-18,4200\r
2020-09-21,4000\r
2020-09-23,4300\r
2020-09-26,4000\r
2020-09-28,2600\r
2020-10-01,4000\r
2020-10-03,4200\r
2020-10-08,2400\r
2020-10-13,3700\r
2020-10-16,5000\r
2020-10-18,5000\r
2020-10-21,3600\r
2020-10-28,3400\r
2020-11-02,1900\r
2020-11-05,2300\r
2020-11-07,1600\r
2020-11-10,2400\r
2020-11-12,2400\r
2020-11-15,4700\r
2020-11-17,2300\r
2020-11-20,4200\r
2020-11-22,4500\r
2020-11-25,4700\r
2020-11-27,4200\r
2020-11-30,4200\r
2020-12-07,3300\r
2020-12-10,4000\r
2020-12-12,1500\r
2020-12-17,1500\r
2020-12-22,5900\r
2020-12-25,6400\r
2020-12-30,6400\r
2021-01-06,2500\r
2021-01-11,5700\r
2021-01-14,5100\r
2021-01-16,5100\r
2021-01-19,5800\r
2021-01-24,6100\r
2021-01-26,6500\r
2021-01-29,6500\r
2021-01-31,6200\r
2021-02-03,6200\r
2021-02-08,6300\r
2021-02-10,6300\r
2021-02-15,6100\r
2021-02-18,6100\r
2021-02-20,5400\r
2021-02-23,4600\r
2021-02-25,5400\r
2021-02-28,6100\r
2021-03-02,6100\r
2021-03-05,5900\r
2021-03-07,6400\r
2021-03-10,7000\r
2021-03-12,6200\r
2021-03-15,6600\r
2021-03-17,6400\r
2021-03-20,7100\r
2021-03-22,7200\r
2021-03-25,7200\r
2021-03-27,7400\r
2021-03-30,8300\r
2021-04-01,7700\r
2021-04-04,6500\r
2021-04-06,6500\r
2021-04-09,6000\r
2021-04-16,4800\r
2021-04-24,6600\r
2021-05-04,7000\r
2021-05-06,6600\r
2021-05-09,6600\r
2021-05-14,6600\r
2021-05-21,5800\r
2021-05-26,7300\r
2021-05-29,7000\r
2021-05-31,7700\r
2021-06-03,7500\r
2021-06-05,7000\r
2021-06-08,7100\r
2021-06-10,7300\r
2021-06-13,6900\r
2021-06-15,7100\r
2021-06-18,7000\r
2021-06-25,6600\r
2021-06-28,6600\r
2021-06-30,6300\r
2021-07-03,7000\r
2021-07-05,6500\r
2021-07-08,6600\r
2021-07-10,7100\r
2021-07-13,6400\r
2021-07-15,7100\r
2021-07-18,6400\r
2021-07-20,7100\r
2021-07-23,6300\r
2021-07-25,6200\r
2021-07-28,6200\r
2021-07-30,5300\r
2021-08-02,5100\r
2021-08-07,5800\r
2021-08-09,5300\r
2021-08-12,5800\r
2021-08-14,5200\r
2021-08-17,5100\r
2021-08-19,5600\r
2021-08-22,6300\r
2021-08-24,6300\r
2021-08-27,6300\r
2021-08-29,6100\r
2021-09-01,5900\r
2021-09-06,5400\r
2021-09-08,5400\r
2021-09-11,4900\r
2021-09-13,4600\r
2021-09-18,4300\r
2021-09-21,4300\r
2021-09-23,4600\r
2021-09-28,4500\r
2021-10-01,4600\r
2021-10-06,5200\r
2021-10-11,4400\r
2021-10-13,4200\r
2021-10-16,4700\r
2021-10-18,4000\r
2021-10-23,4000\r
2021-10-26,3700\r
2021-10-28,4300\r
2021-11-02,4600\r
2021-11-05,5000\r
2021-11-20,3700\r
2021-11-27,3700\r
2021-11-30,5300\r
2021-12-02,4500\r
2021-12-05,4500\r
2021-12-07,3700\r
2021-12-10,3700\r
2021-12-12,3500\r
2021-12-15,3600\r
2021-12-17,3300\r
2021-12-20,3100\r
2021-12-22,3100\r
2022-01-06,2400\r
2022-01-09,3800\r
2022-01-11,2700\r
2022-01-14,3400\r
2022-01-16,3200\r
2022-01-19,3500\r
2022-01-21,3400\r
2022-01-24,3800\r
2022-01-26,3900\r
2022-01-29,4300\r
2022-02-03,3700\r
2022-02-05,3400\r
2022-02-08,3900\r
2022-02-10,3300\r
2022-02-13,3800\r
2022-02-15,3400\r
2022-02-18,3600\r
2022-02-20,3700\r
2022-02-23,4000\r
2022-02-25,4100\r
2022-02-28,4100\r
2022-03-02,3900\r
2022-03-07,4100\r
2022-03-10,4100\r
2022-03-22,1600\r
2022-03-25,1600\r
2022-07-03,400\r
2022-07-05,500\r
2022-07-08,600\r
2022-07-10,600\r
2022-07-13,900\r
2022-07-15,600\r
2022-07-18,900\r
2022-07-20,900\r
2022-07-23,900\r
2022-07-25,600\r
2022-07-28,600\r
2022-07-30,400\r
2022-08-02,300\r
2022-08-04,500\r
2022-08-07,600\r
2022-08-09,300\r
2022-08-12,400\r
2022-08-14,400\r
2022-08-19,400\r
2022-08-22,900\r
2022-08-24,1300\r
2022-08-27,300\r
2022-08-29,300\r
2022-09-01,100\r
2022-10-11,300\r
2022-10-16,200\r
2022-10-18,800\r
2022-10-26,800\r
2022-10-28,900\r
2022-10-31,200\r
2022-11-02,200\r
2022-11-05,1000\r
2022-11-10,900\r
2022-11-17,500\r
2022-11-20,800\r
2022-11-22,800\r
2022-11-25,800\r
2022-11-27,800\r
2022-11-30,1300\r
2022-12-02,1900\r
2022-12-05,2100\r
2022-12-07,1400\r
2022-12-10,1400\r
2022-12-17,1600\r
2022-12-27,1600\r
2022-12-30,1600\r
2023-01-04,400\r
2023-01-06,400\r
2023-01-09,2700\r
2023-01-14,2700\r
2023-01-19,2800\r
2023-01-21,1600\r
2023-01-24,1600\r
2023-01-26,900\r
2023-01-29,1200\r
2023-01-31,400\r
2023-02-03,600\r
2023-02-05,900\r
2023-02-08,1000\r
2023-02-10,800\r
2023-02-13,700\r
2023-02-15,600\r
2023-02-18,1100\r
2023-02-20,900\r
2023-03-02,2600\r
2023-03-05,3400\r
2023-03-07,3400\r
2023-03-10,2900\r
2023-03-12,3000\r
2023-03-15,2800\r
2023-03-17,3400\r
2023-03-20,3400\r
2023-03-22,3000\r
2023-03-25,2800\r
2023-03-27,2500\r
2023-03-30,2900\r
2023-04-01,2700\r
2023-04-04,3400\r
2023-04-06,3300\r
2023-04-09,4300\r
2023-04-14,3600\r
2023-04-16,4200\r
2023-04-19,4200\r
2023-04-24,4700\r
2023-04-26,4700\r
2023-05-04,4000\r
2023-05-06,4000\r
2023-05-11,4100\r
2023-05-16,4300\r
2023-05-24,5500\r
2023-05-26,4800\r
2023-06-03,5000\r
2023-06-08,5500\r
2023-06-10,5500\r
2023-06-15,5500\r
2023-06-20,4700\r
2023-06-23,6300\r
2023-06-25,4800\r
2023-06-28,6300\r
2023-07-05,5200\r
2023-07-08,5500\r
2023-07-10,5200\r
2023-07-13,6000\r
2023-07-15,5100\r
2023-07-18,5600\r
2023-07-20,5800\r
2023-07-23,5100\r
2023-07-25,5200\r
2023-07-28,5400\r
2023-07-30,5000\r
2023-08-02,4700\r
2023-08-04,4900\r
2023-08-07,4800\r
2023-08-09,5600\r
2023-08-12,6400\r
2023-08-14,6500\r
2023-08-17,6500\r
2023-08-19,6700\r
2023-08-22,6000\r
2023-08-24,4500\r
2023-08-29,4600\r
2023-09-01,3200\r
2023-09-03,4400\r
2023-09-06,2000\r
2023-09-08,2700\r
2023-09-11,2700\r
2023-09-13,4900\r
2023-09-23,5600\r
2023-09-26,4800\r
2023-09-28,4800\r
2023-10-01,3000\r
2023-10-03,3200\r
`;export{r as default};
