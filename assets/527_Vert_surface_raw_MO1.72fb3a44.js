const r=`date,value\r
2017-01-03,36800\r
2017-02-12,43400\r
2017-02-19,40400\r
2017-02-22,41700\r
2017-03-11,36700\r
2017-03-14,39100\r
2017-04-03,47700\r
2017-04-10,45000\r
2017-04-20,44900\r
2017-04-23,39000\r
2017-05-23,41900\r
2017-06-09,43800\r
2017-06-12,42400\r
2017-06-19,39600\r
2017-06-22,39700\r
2017-07-04,34500\r
2017-07-07,31400\r
2017-07-14,32000\r
2017-07-17,32900\r
2017-08-03,18500\r
2017-08-06,20800\r
2017-08-18,20500\r
2017-08-21,18400\r
2017-08-23,18700\r
2017-08-26,16400\r
2017-09-20,11400\r
2017-09-22,15100\r
2017-09-27,7400\r
2017-10-05,5300\r
2017-10-07,4900\r
2017-10-10,4600\r
2017-10-12,3500\r
2017-10-15,2400\r
2017-10-17,1500\r
2017-10-22,1400\r
2017-10-30,1100\r
2017-11-21,1600\r
2018-01-15,6200\r
2018-01-23,4200\r
2018-02-24,3800\r
2018-03-14,16600\r
2018-03-19,24000\r
2018-03-21,26800\r
2018-03-31,19600\r
2018-04-05,30700\r
2018-04-18,41400\r
2018-04-20,43100\r
2018-04-25,42000\r
2018-05-05,38700\r
2018-05-20,37300\r
2018-06-09,37100\r
2018-06-19,35500\r
2018-06-22,35000\r
2018-06-24,32900\r
2018-06-27,36100\r
2018-06-29,38200\r
2018-07-02,40900\r
2018-07-04,36200\r
2018-07-07,35500\r
2018-07-09,33200\r
2018-07-17,31700\r
2018-07-19,27200\r
2018-07-24,37700\r
2018-07-27,33400\r
2018-07-29,27000\r
2018-08-01,31000\r
2018-08-03,26900\r
2018-08-16,20300\r
2018-08-18,21800\r
2018-08-21,18800\r
2018-08-28,17400\r
2018-09-02,12500\r
2018-09-05,15300\r
2018-09-10,10700\r
2018-09-17,2800\r
2018-09-20,1300\r
2018-09-25,1400\r
2018-09-27,1100\r
2018-10-05,800\r
2018-11-04,2300\r
2018-11-24,9400\r
2019-01-03,18900\r
2019-02-04,24700\r
2019-02-12,28400\r
2019-02-14,25900\r
2019-02-17,24900\r
2019-02-19,29100\r
2019-02-22,28400\r
2019-02-27,34300\r
2019-03-16,21300\r
2019-03-21,28100\r
2019-03-24,33700\r
2019-03-26,27900\r
2019-03-29,37300\r
2019-03-31,34200\r
2019-04-13,36300\r
2019-04-15,36600\r
2019-04-20,34700\r
2019-04-23,31000\r
2019-04-30,43100\r
2019-05-23,35700\r
2019-05-30,35900\r
2019-06-02,37300\r
2019-06-07,40500\r
2019-06-17,26400\r
2019-06-19,34900\r
2019-06-24,37100\r
2019-06-27,31200\r
2019-06-29,27100\r
2019-07-02,35900\r
2019-07-04,34200\r
2019-07-07,37200\r
2019-07-09,31500\r
2019-07-14,28200\r
2019-07-17,31500\r
2019-07-19,23600\r
2019-07-22,26200\r
2019-07-24,25600\r
2019-07-29,15800\r
2019-08-03,24200\r
2019-08-08,18800\r
2019-08-11,19700\r
2019-08-18,23400\r
2019-08-21,18300\r
2019-08-23,18400\r
2019-08-26,17800\r
2019-08-28,17200\r
2019-08-31,15200\r
2019-09-02,16000\r
2019-09-07,15100\r
2019-09-12,10800\r
2019-09-15,9500\r
2019-09-17,7000\r
2019-09-20,5300\r
2019-09-27,5600\r
2019-09-30,4000\r
2019-12-06,43400\r
2020-02-07,24800\r
2020-02-12,29500\r
2020-02-22,36800\r
2020-02-24,37000\r
2020-03-18,40500\r
2020-03-20,40700\r
2020-03-23,49700\r
2020-03-25,40100\r
2020-03-28,52000\r
2020-04-02,47200\r
2020-04-04,49800\r
2020-04-07,46700\r
2020-04-09,48200\r
2020-04-14,51800\r
2020-04-24,46300\r
2020-05-04,42500\r
2020-05-09,46700\r
2020-05-17,42300\r
2020-05-19,41000\r
2020-05-22,47200\r
2020-05-27,47500\r
2020-05-29,45900\r
2020-06-23,44300\r
2020-07-01,40800\r
2020-07-08,41800\r
2020-07-11,37100\r
2020-07-13,36600\r
2020-07-18,35300\r
2020-07-21,41400\r
2020-07-23,29900\r
2020-07-28,24200\r
2020-07-31,34500\r
2020-08-05,21700\r
2020-08-07,19000\r
2020-08-10,29300\r
2020-08-20,17400\r
2020-08-25,20000\r
2020-08-27,19000\r
2020-09-01,13500\r
2020-09-04,15100\r
2020-09-14,11100\r
2020-09-16,11000\r
2020-10-24,10600\r
2020-10-31,14000\r
2020-11-10,16200\r
2020-11-18,6700\r
2020-11-23,13400\r
2020-11-25,8600\r
2020-12-13,9600\r
2021-01-24,15300\r
2021-02-21,37600\r
2021-02-23,41100\r
2021-02-28,46900\r
2021-03-10,44200\r
2021-03-23,45800\r
2021-03-25,51200\r
2021-03-28,42200\r
2021-03-30,47300\r
2021-04-02,45100\r
2021-04-04,39500\r
2021-04-07,41600\r
2021-04-09,43200\r
2021-04-14,42900\r
2021-04-17,41700\r
2021-04-19,43500\r
2021-04-24,46900\r
2021-05-27,42300\r
2021-05-29,47400\r
2021-06-01,46500\r
2021-06-11,43800\r
2021-06-13,42000\r
2021-06-16,45800\r
2021-06-18,40700\r
2021-06-26,43300\r
2021-07-21,38700\r
2021-08-10,35500\r
2021-08-15,36000\r
2021-08-20,37400\r
2021-08-25,35500\r
2021-08-27,35200\r
2021-09-01,34800\r
2021-09-04,37700\r
2021-09-06,36400\r
2021-09-24,32600\r
2021-09-26,39300\r
2021-09-29,34000\r
2021-10-01,29400\r
2021-10-11,34300\r
2021-10-14,35500\r
2021-10-16,32000\r
2021-10-21,36100\r
2021-10-24,33700\r
2021-11-30,34200\r
2021-12-23,30400\r
2022-01-14,28400\r
2022-02-08,24700\r
2022-02-26,34700\r
2022-02-28,34300\r
2022-03-05,40600\r
2022-03-23,43300\r
2022-03-25,42400\r
2022-04-14,33700\r
2022-04-17,40100\r
2022-05-09,40400\r
2022-05-29,36500\r
2022-06-11,33000\r
2022-06-13,33500\r
2022-06-16,28100\r
2022-06-18,28100\r
2022-06-28,28200\r
2022-07-03,28400\r
2022-07-06,27900\r
2022-07-08,25900\r
2022-07-11,25400\r
2022-07-13,21800\r
2022-07-16,23100\r
2022-07-18,21900\r
2022-07-21,20100\r
2022-07-26,20600\r
2022-07-28,18200\r
2022-07-31,17900\r
2022-08-02,16100\r
2022-08-07,13500\r
2022-08-10,15100\r
2022-08-12,9600\r
2022-08-22,8400\r
2022-08-25,8000\r
2022-09-01,6400\r
2022-09-04,8500\r
2022-09-09,7200\r
2022-09-11,7500\r
2022-09-19,5600\r
2022-09-21,6700\r
2022-10-04,6200\r
2022-10-11,7200\r
2022-10-26,6100\r
2022-11-23,10300\r
2022-12-05,11100\r
2023-02-03,17000\r
2023-02-08,13200\r
2023-02-11,19800\r
2023-02-13,15700\r
2023-02-16,18500\r
2023-02-21,18900\r
2023-03-05,15000\r
2023-04-19,15700\r
2023-05-02,20100\r
2023-05-27,19800\r
2023-05-29,18500\r
2023-06-01,19600\r
2023-06-03,21100\r
2023-06-06,21900\r
2023-06-08,22600\r
2023-06-16,29600\r
2023-06-26,27800\r
2023-06-28,25100\r
2023-07-06,21800\r
2023-07-08,26300\r
2023-07-11,26200\r
2023-07-13,23000\r
2023-07-16,23600\r
2023-07-18,23900\r
2023-07-23,21900\r
2023-07-31,12700\r
2023-08-02,13500\r
2023-08-15,13900\r
2023-08-22,7300\r
2023-08-25,8700\r
2023-09-01,5800\r
2023-09-04,6700\r
2023-09-06,7300\r
2023-09-11,4200\r
2023-09-26,5300\r
2023-10-01,2700\r
2023-10-06,4300\r
`;export{r as default};
