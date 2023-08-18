const r=`date,value\r
2017-04-16,100\r
2017-04-23,1300\r
2017-05-06,7200\r
2017-05-13,7200\r
2017-05-16,6800\r
2017-05-26,300\r
2017-06-12,200\r
2017-06-15,3900\r
2017-06-22,3300\r
2017-06-25,5800\r
2017-07-02,7900\r
2017-07-05,5800\r
2017-07-07,5800\r
2017-07-12,8800\r
2017-07-17,6000\r
2017-07-22,8400\r
2017-07-25,11900\r
2017-07-27,10700\r
2017-07-30,10700\r
2017-08-04,10800\r
2017-08-11,13000\r
2017-08-14,11300\r
2017-08-16,13100\r
2017-08-19,13100\r
2017-08-21,11100\r
2017-08-24,2600\r
2017-08-26,2100\r
2017-08-29,2100\r
2017-09-05,8400\r
2017-09-08,8500\r
2017-09-10,8500\r
2017-09-13,7200\r
2017-09-20,14300\r
2017-09-23,14300\r
2017-09-28,14500\r
2017-10-03,11800\r
2017-10-05,11900\r
2017-10-08,9700\r
2017-10-10,6300\r
2017-10-13,6900\r
2017-10-15,6300\r
2017-10-18,6600\r
2017-10-20,4900\r
2017-10-23,7700\r
2017-10-25,10500\r
2017-10-28,11200\r
2017-10-30,11200\r
2017-11-07,10500\r
2017-11-12,10100\r
2018-04-21,200\r
2018-04-26,200\r
2018-05-11,9700\r
2018-05-13,9700\r
2018-05-21,9700\r
2018-06-17,11300\r
2018-06-22,11300\r
2018-06-25,13700\r
2018-06-27,13300\r
2018-07-02,11200\r
2018-07-07,14300\r
2018-07-10,3000\r
2018-08-16,2300\r
2018-08-19,2300\r
2018-08-21,3800\r
2018-08-24,3800\r
2018-08-26,2500\r
2018-08-29,4200\r
2018-08-31,4200\r
2018-09-03,4800\r
2018-09-05,4800\r
2018-09-08,3400\r
2018-09-10,3400\r
2018-09-13,3400\r
2018-09-18,9100\r
2018-09-20,10900\r
2018-09-23,9000\r
2018-09-25,10800\r
2018-09-28,9500\r
2018-09-30,11200\r
2018-10-03,10300\r
2018-10-05,9800\r
2018-10-10,7300\r
2018-10-13,7500\r
2018-10-23,8700\r
2018-10-25,11100\r
2018-11-04,9000\r
2018-11-14,13500\r
2018-11-17,13500\r
2018-11-22,13500\r
2018-11-24,13500\r
2018-11-27,12100\r
2018-11-29,12000\r
2018-12-09,2900\r
2018-12-12,2900\r
2018-12-17,2900\r
2019-05-16,5100\r
2019-05-23,6500\r
2019-05-28,6500\r
2019-05-31,5700\r
2019-06-02,6700\r
2019-06-12,6400\r
2019-06-15,6400\r
2019-06-17,7000\r
2019-06-22,7500\r
2019-06-25,7400\r
2019-06-27,7400\r
2019-06-30,7400\r
2019-07-05,8600\r
2019-07-07,6100\r
2019-07-10,8500\r
2019-07-12,9400\r
2019-07-15,9800\r
2019-07-20,9700\r
2019-07-22,10500\r
2019-07-25,11200\r
2019-08-01,12600\r
2019-08-04,12600\r
2019-08-06,11700\r
2019-08-09,12000\r
2019-08-14,12700\r
2019-08-16,13100\r
2019-08-21,12000\r
2019-08-24,13200\r
2019-08-26,11300\r
2019-08-29,11900\r
2019-08-31,10300\r
2019-09-03,7500\r
2019-09-05,7500\r
2019-09-08,5900\r
2019-09-13,5100\r
2019-09-15,2000\r
2019-09-18,2300\r
2019-09-20,2200\r
2019-09-28,8200\r
2019-09-30,8800\r
2019-10-03,8600\r
2019-10-05,9200\r
2019-10-08,8600\r
2019-10-10,9100\r
2019-10-13,8800\r
2019-10-15,9600\r
2019-10-25,9200\r
2019-10-30,10700\r
2019-11-04,10700\r
2019-11-09,8400\r
2019-11-12,10600\r
2019-11-17,7100\r
2020-01-01,100\r
2020-01-06,100\r
2020-05-05,10500\r
2020-05-07,10900\r
2020-05-17,10900\r
2020-05-20,10400\r
2020-05-22,4200\r
2020-05-25,2900\r
2020-05-27,3000\r
2020-05-30,3000\r
2020-06-21,3000\r
2020-06-24,4500\r
2020-06-26,4500\r
2020-07-01,4500\r
2020-07-04,4500\r
2020-07-06,4500\r
2020-07-09,10800\r
2020-07-11,10800\r
2020-07-14,10800\r
2020-07-16,10800\r
2020-07-19,11800\r
2020-07-21,13700\r
2020-07-24,13700\r
2020-07-26,12200\r
2020-07-31,13600\r
2020-08-03,13600\r
2020-08-05,13700\r
2020-08-08,12100\r
2020-08-10,12400\r
2020-08-13,13900\r
2020-08-15,13900\r
2020-08-20,12500\r
2020-08-23,10800\r
2020-08-25,11400\r
2020-08-30,11400\r
2020-09-02,11400\r
2020-09-04,9200\r
2020-09-07,10200\r
2020-09-12,9300\r
2020-09-14,7100\r
2020-09-17,7100\r
2020-09-19,7100\r
2020-09-27,7100\r
2020-09-29,8400\r
2020-10-09,12200\r
2020-10-12,8400\r
2020-10-17,13700\r
2020-10-19,13700\r
2020-10-24,7300\r
2020-10-27,7300\r
2020-10-29,7300\r
2020-11-01,8800\r
2020-11-08,8700\r
2020-11-11,8000\r
2020-11-13,8000\r
2020-11-16,8000\r
2020-11-18,7600\r
2020-11-21,7600\r
2020-11-23,9200\r
2020-11-26,7500\r
2020-12-03,9100\r
2021-01-12,100\r
2021-01-15,100\r
2021-01-17,100\r
2021-04-05,1700\r
2021-04-07,1700\r
2021-04-12,1700\r
2021-04-15,8000\r
2021-04-20,7200\r
2021-04-22,7200\r
2021-05-20,11400\r
2021-05-22,11400\r
2021-05-25,11400\r
2021-05-27,11400\r
2021-05-30,11400\r
2021-06-09,1900\r
2021-06-14,2200\r
2021-06-16,2200\r
2021-06-19,2200\r
2021-06-21,7500\r
2021-06-24,7500\r
2021-06-26,13000\r
2021-06-29,12700\r
2021-07-01,12100\r
2021-07-09,10100\r
2021-07-11,8000\r
2021-07-14,8700\r
2021-07-16,8300\r
2021-07-19,11000\r
2021-07-21,10600\r
2021-07-24,13300\r
2021-07-29,11500\r
2021-08-10,13700\r
2021-08-13,13700\r
2021-08-15,9900\r
2021-08-18,9900\r
2021-08-20,7200\r
2021-08-23,7200\r
2021-08-25,3000\r
2021-08-28,2900\r
2021-08-30,3000\r
2021-09-17,2300\r
2021-09-19,2300\r
2021-09-22,4300\r
2021-09-27,4300\r
2021-10-02,4300\r
2021-10-07,6300\r
2021-10-09,7600\r
2021-10-12,7300\r
2021-10-14,7300\r
2021-10-17,7900\r
2021-10-19,8000\r
2021-10-22,11100\r
2021-10-24,10900\r
2021-10-27,10500\r
2021-11-06,9700\r
2021-11-13,6900\r
2021-11-16,6900\r
2022-05-10,3200\r
2022-05-12,16200\r
2022-05-15,16200\r
2022-05-17,15800\r
2022-05-20,15800\r
2022-05-22,15800\r
2022-05-27,14700\r
2022-05-30,14700\r
2022-06-01,14900\r
2022-06-04,14500\r
2022-06-06,14800\r
2022-06-09,14600\r
2022-06-11,14600\r
2022-06-14,14100\r
2022-06-16,14900\r
2022-06-19,13800\r
2022-06-26,12800\r
2022-06-29,13500\r
2022-07-01,15600\r
2022-07-04,15600\r
2022-07-09,14300\r
2022-07-11,14600\r
2022-07-14,12800\r
2022-07-16,14500\r
2022-07-19,13800\r
2022-07-21,14300\r
2022-07-24,14700\r
2022-07-26,14600\r
2022-07-31,15300\r
2022-08-03,14800\r
2022-08-05,14800\r
2022-08-08,14800\r
2022-08-10,14800\r
2022-08-13,13900\r
2022-08-20,14300\r
2022-08-23,14300\r
2022-08-25,14300\r
2022-08-28,15000\r
2022-08-30,15000\r
2022-09-04,14300\r
2022-09-19,14200\r
2022-09-22,14200\r
2022-10-02,14300\r
2022-10-04,14400\r
2022-10-07,14400\r
2022-10-09,14400\r
2022-10-12,14400\r
2022-10-14,14900\r
2022-11-01,12400\r
2022-11-06,12700\r
2022-11-08,12500\r
2022-11-11,12500\r
2022-11-13,11400\r
2022-11-16,10700\r
2022-11-18,11300\r
2022-11-26,10200\r
2023-04-05,8000\r
2023-04-07,9700\r
2023-04-10,9700\r
2023-04-12,9700\r
2023-04-15,10700\r
2023-04-17,13300\r
2023-04-20,13000\r
2023-04-27,14100\r
2023-05-02,7700\r
2023-05-05,7700\r
2023-05-10,7700\r
2023-06-16,8300\r
2023-06-21,8400\r
2023-06-24,6400\r
2023-07-09,14500\r
2023-07-11,13400\r
2023-07-14,13400\r
2023-07-16,13400\r
2023-07-19,13200\r
`;export{r as default};
