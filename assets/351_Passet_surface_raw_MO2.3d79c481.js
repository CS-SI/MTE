const r=`date,value\r
2017-02-15,200\r
2017-02-22,600\r
2017-03-07,200\r
2017-03-14,1100\r
2017-03-17,600\r
2017-03-27,2900\r
2017-04-03,25700\r
2017-04-06,29400\r
2017-04-16,34500\r
2017-04-23,34200\r
2017-05-06,31500\r
2017-05-13,31500\r
2017-05-16,31500\r
2017-05-23,24100\r
2017-05-26,24100\r
2017-06-02,24300\r
2017-06-12,28800\r
2017-06-15,30600\r
2017-06-22,30600\r
2017-06-25,31300\r
2017-07-02,33200\r
2017-07-05,31500\r
2017-07-07,34800\r
2017-07-10,34800\r
2017-07-12,33200\r
2017-07-17,33700\r
2017-07-22,33700\r
2017-07-25,31800\r
2017-07-27,35400\r
2017-07-30,32800\r
2017-08-04,32800\r
2017-08-06,33400\r
2017-08-14,35200\r
2017-08-19,35500\r
2017-08-21,31900\r
2017-08-24,31900\r
2017-08-26,29500\r
2017-08-29,29500\r
2017-09-05,29500\r
2017-09-08,26900\r
2017-09-10,26900\r
2017-09-13,29000\r
2017-09-20,32400\r
2017-09-23,32400\r
2017-09-28,32700\r
2017-10-03,30800\r
2017-10-05,31200\r
2017-10-08,30200\r
2017-10-10,29800\r
2017-10-13,30100\r
2017-10-15,29400\r
2017-10-18,29600\r
2017-10-20,28400\r
2017-10-23,30000\r
2017-10-25,28500\r
2017-10-28,27400\r
2017-10-30,27100\r
2017-11-07,25800\r
2017-11-12,27200\r
2017-11-14,25400\r
2017-11-17,25900\r
2017-11-19,27700\r
2017-11-22,27800\r
2017-11-24,27100\r
2017-11-27,27800\r
2018-01-28,11900\r
2018-01-31,5900\r
2018-02-02,5900\r
2018-02-07,5900\r
2018-02-10,5300\r
2018-03-19,700\r
2018-03-27,700\r
2018-04-01,1800\r
2018-04-11,700\r
2018-04-18,30700\r
2018-04-21,30600\r
2018-04-26,32100\r
2018-05-11,34000\r
2018-05-18,34000\r
2018-05-21,34000\r
2018-06-20,32700\r
2018-06-22,32700\r
2018-06-25,33100\r
2018-06-27,33600\r
2018-07-02,31400\r
2018-07-05,31400\r
2018-07-07,34400\r
2018-07-10,33600\r
2018-07-12,33000\r
2018-07-15,35100\r
2018-07-17,31100\r
2018-07-20,31100\r
2018-07-25,31700\r
2018-07-27,33600\r
2018-07-30,33400\r
2018-08-01,33800\r
2018-08-04,33800\r
2018-08-06,33800\r
2018-08-11,30800\r
2018-08-14,30800\r
2018-08-16,30800\r
2018-08-19,30700\r
2018-08-21,31600\r
2018-08-24,31500\r
2018-08-26,32100\r
2018-08-29,32100\r
2018-08-31,31400\r
2018-09-03,27500\r
2018-09-05,32200\r
2018-09-08,29600\r
2018-09-10,29600\r
2018-09-13,29600\r
2018-09-18,30800\r
2018-09-20,31700\r
2018-09-23,30000\r
2018-09-25,31600\r
2018-09-28,30500\r
2018-09-30,30900\r
2018-10-03,30800\r
2018-10-05,31100\r
2018-10-13,27000\r
2018-10-20,28900\r
2018-10-23,26900\r
2018-10-25,26400\r
2018-10-30,26400\r
2018-11-04,27500\r
2018-11-12,27500\r
2018-11-14,27500\r
2019-01-26,1600\r
2019-02-15,100\r
2019-02-17,100\r
2019-03-17,100\r
2019-03-19,500\r
2019-03-22,500\r
2019-03-24,600\r
2019-03-27,1600\r
2019-03-29,1500\r
2019-04-01,4900\r
2019-04-08,16200\r
2019-04-13,5500\r
2019-04-28,28200\r
2019-05-01,30000\r
2019-05-06,30000\r
2019-05-13,29600\r
2019-05-16,32400\r
2019-05-23,32300\r
2019-05-28,32600\r
2019-05-31,32300\r
2019-06-02,30700\r
2019-06-07,30700\r
2019-06-12,30700\r
2019-06-17,30200\r
2019-06-22,30200\r
2019-06-25,34200\r
2019-06-27,30600\r
2019-06-30,30600\r
2019-07-02,30600\r
2019-07-05,31600\r
2019-07-07,33000\r
2019-07-10,33000\r
2019-07-12,31500\r
2019-07-15,31700\r
2019-07-17,31700\r
2019-07-20,31700\r
2019-07-22,30900\r
2019-07-25,31100\r
2019-08-01,27400\r
2019-08-04,27400\r
2019-08-06,27700\r
2019-08-09,28800\r
2019-08-11,28300\r
2019-08-14,29000\r
2019-08-16,28200\r
2019-08-21,29800\r
2019-08-24,32300\r
2019-08-26,32300\r
2019-08-29,32300\r
2019-08-31,28200\r
2019-09-03,29200\r
2019-09-05,29300\r
2019-09-08,27900\r
2019-09-13,26900\r
2019-09-15,28600\r
2019-09-18,28600\r
2019-09-20,27700\r
2019-09-28,29400\r
2019-09-30,25300\r
2019-10-03,24900\r
2019-10-05,25200\r
2019-10-08,24700\r
2019-10-10,25600\r
2019-10-13,24900\r
2019-10-15,25900\r
2019-10-25,24000\r
2019-10-30,30400\r
2019-11-02,30400\r
2019-11-04,30400\r
2019-11-09,21000\r
2019-11-12,30400\r
2019-11-17,5100\r
2019-11-19,700\r
2019-11-24,700\r
2019-11-27,7600\r
2019-11-29,16400\r
2019-12-02,16400\r
2020-01-28,13500\r
2020-01-31,13500\r
2020-02-02,5900\r
2020-02-05,8200\r
2020-02-07,8200\r
2020-02-10,6100\r
2020-02-15,4200\r
2020-02-17,4200\r
2020-02-20,3100\r
2020-02-22,2700\r
2020-02-27,3000\r
2020-03-01,2900\r
2020-03-08,3200\r
2020-03-11,5200\r
2020-03-13,5200\r
2020-03-18,5300\r
2020-03-21,5100\r
2020-03-28,31200\r
2020-03-31,31200\r
2020-04-05,31200\r
2020-04-15,32100\r
2020-04-25,32100\r
2020-05-05,28500\r
2020-05-07,30200\r
2020-05-17,28900\r
2020-05-20,31300\r
2020-05-22,30700\r
2020-05-25,32200\r
2020-05-27,32200\r
2020-05-30,30700\r
2020-06-06,30000\r
2020-06-21,30700\r
2020-06-24,31000\r
2020-06-26,27000\r
2020-07-01,31200\r
2020-07-04,30000\r
2020-07-06,31100\r
2020-07-09,30000\r
2020-07-11,31500\r
2020-07-14,31300\r
2020-07-16,31800\r
2020-07-19,31900\r
2020-07-21,31700\r
2020-07-24,31700\r
2020-07-26,31300\r
2020-07-29,31400\r
2020-07-31,31300\r
2020-08-03,31600\r
2020-08-05,31000\r
2020-08-08,30200\r
2020-08-10,30800\r
2020-08-13,30900\r
2020-08-15,28100\r
2020-08-20,27500\r
2020-08-23,26800\r
2020-08-25,27400\r
2020-08-30,26500\r
2020-09-02,26500\r
2020-09-04,26700\r
2020-09-07,26400\r
2020-09-12,27600\r
2020-09-14,25500\r
2020-09-17,25500\r
2020-09-19,25500\r
2020-09-24,30100\r
2020-09-27,30100\r
2020-09-29,30200\r
2020-10-04,26400\r
2020-10-12,26400\r
2020-10-14,26400\r
2020-10-17,33500\r
2020-10-24,25200\r
2020-11-01,25600\r
2020-11-08,24100\r
2020-11-11,21300\r
2020-11-16,21300\r
2020-11-18,9200\r
2020-11-21,9200\r
2020-11-23,9300\r
2020-12-03,2300\r
2021-02-11,2200\r
2021-02-14,2200\r
2021-02-19,3500\r
2021-02-24,7600\r
2021-03-01,3100\r
2021-03-11,4100\r
2021-03-23,30800\r
2021-03-28,31100\r
2021-03-31,31000\r
2021-04-02,31000\r
2021-04-05,30300\r
2021-04-07,30300\r
2021-04-12,33800\r
2021-04-15,33800\r
2021-04-20,31100\r
2021-04-22,31100\r
2021-05-20,24700\r
2021-05-25,24700\r
2021-05-27,24700\r
2021-05-30,24700\r
2021-06-14,30400\r
2021-06-16,34300\r
2021-06-19,34300\r
2021-06-21,32900\r
2021-06-26,35000\r
2021-06-29,33900\r
2021-07-01,35000\r
2021-07-09,35000\r
2021-07-11,34500\r
2021-07-14,35400\r
2021-07-16,33200\r
2021-07-19,34000\r
2021-07-21,34400\r
2021-07-26,34300\r
2021-07-29,33300\r
2021-08-10,32200\r
2021-08-13,32900\r
2021-08-15,31300\r
2021-08-18,31300\r
2021-08-20,32200\r
2021-08-23,31800\r
2021-08-25,31000\r
2021-08-28,30600\r
2021-08-30,30700\r
2021-09-04,30700\r
2021-09-17,30200\r
2021-09-19,30200\r
2021-09-22,29800\r
2021-09-27,29800\r
2021-09-29,30800\r
2021-10-02,30900\r
2021-10-07,30000\r
2021-10-09,28500\r
2021-10-12,29800\r
2021-10-14,28900\r
2021-10-17,29400\r
2021-10-19,28600\r
2021-10-22,30800\r
2021-10-24,31200\r
2021-10-27,26500\r
2021-11-06,24700\r
2021-11-13,24800\r
2021-11-18,28900\r
2021-11-21,31300\r
2021-11-26,31300\r
2022-01-25,22600\r
2022-01-27,18600\r
2022-01-30,28400\r
2022-02-01,14400\r
2022-02-06,26100\r
2022-02-09,30900\r
2022-02-21,300\r
2022-02-24,22800\r
2022-02-26,6200\r
2022-03-01,22500\r
2022-03-03,5400\r
2022-03-08,6800\r
2022-04-05,2600\r
2022-04-10,26400\r
2022-04-17,30900\r
2022-04-22,30700\r
2022-04-25,30700\r
2022-05-10,26700\r
2022-05-12,27300\r
2022-05-15,27300\r
2022-05-17,27300\r
2022-05-20,27300\r
2022-05-22,24700\r
2022-05-27,25400\r
2022-05-30,25400\r
2022-06-01,25500\r
2022-06-04,28500\r
2022-06-06,28100\r
2022-06-09,29800\r
2022-06-11,29800\r
2022-06-14,30900\r
2022-06-16,28800\r
2022-06-19,28800\r
2022-06-26,28300\r
2022-06-29,28500\r
2022-07-01,27400\r
2022-07-04,27900\r
2022-07-09,28700\r
2022-07-11,29600\r
2022-07-14,29000\r
2022-07-16,29100\r
2022-07-19,29700\r
2022-07-21,29200\r
2022-07-24,29200\r
2022-07-26,28700\r
2022-07-31,30100\r
2022-08-03,30100\r
2022-08-05,29500\r
2022-08-08,30400\r
2022-08-10,30400\r
2022-08-13,30100\r
2022-08-20,30600\r
2022-08-23,31200\r
2022-08-28,29400\r
2022-08-30,29400\r
2022-09-02,29900\r
2022-09-04,28800\r
2022-09-19,30000\r
2022-09-22,30000\r
2022-09-27,30000\r
2022-10-02,29400\r
2022-10-04,30200\r
2022-10-09,30200\r
2022-10-12,29100\r
2022-10-22,27100\r
2022-11-01,26100\r
2022-11-06,27600\r
2022-11-08,27600\r
2022-11-11,27600\r
2022-11-13,28000\r
2022-11-16,28700\r
2022-11-18,30200\r
2022-11-23,30200\r
2023-01-30,1200\r
2023-02-01,7400\r
2023-02-04,7400\r
2023-02-06,7400\r
2023-02-09,500\r
2023-02-11,1500\r
2023-02-14,800\r
2023-02-16,800\r
2023-02-19,21600\r
2023-02-24,20700\r
2023-02-26,25300\r
2023-03-01,1500\r
2023-03-13,13800\r
2023-03-16,29600\r
2023-03-28,30700\r
2023-04-02,30700\r
2023-04-05,31700\r
2023-04-07,29700\r
2023-04-12,30600\r
2023-04-15,27200\r
2023-04-17,29700\r
2023-04-20,32800\r
2023-04-27,28100\r
2023-05-02,29900\r
2023-05-10,29900\r
2023-05-12,29900\r
2023-06-16,30500\r
2023-06-19,30500\r
2023-06-24,34000\r
2023-06-26,34000\r
2023-06-29,30600\r
2023-07-01,30600\r
2023-07-09,32200\r
2023-07-11,32200\r
`;export{r as default};