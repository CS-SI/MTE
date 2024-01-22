const r=`date,value\r
2017-01-19,13200\r
2017-01-29,13200\r
2017-02-08,5900\r
2017-02-11,20500\r
2017-02-18,20300\r
2017-02-21,20400\r
2017-02-28,18600\r
2017-03-10,23800\r
2017-03-13,24000\r
2017-03-30,30300\r
2017-04-02,30300\r
2017-04-09,30300\r
2017-04-12,29100\r
2017-04-19,27700\r
2017-04-22,24500\r
2017-04-29,24300\r
2017-05-02,25500\r
2017-05-09,25500\r
2017-05-22,26600\r
2017-06-01,26600\r
2017-06-11,23400\r
2017-06-18,25200\r
2017-06-21,24600\r
2017-06-28,25100\r
2017-07-01,22900\r
2017-08-05,15300\r
2017-08-07,15300\r
2017-08-20,13800\r
2017-08-22,13800\r
2017-08-25,16200\r
2017-08-27,14300\r
2017-10-11,12700\r
2017-10-14,13000\r
2017-10-16,13000\r
2017-10-19,12300\r
2017-10-21,12300\r
2017-10-24,12800\r
2017-10-26,13000\r
2017-10-31,13000\r
2017-11-05,17100\r
2017-11-08,16400\r
2017-11-13,16500\r
2017-11-15,16500\r
2017-11-18,12600\r
2017-11-23,12600\r
2017-12-15,3100\r
2017-12-25,3100\r
2018-01-17,20600\r
2018-01-19,20600\r
2018-01-22,20600\r
2018-01-24,20600\r
2018-01-27,23500\r
2018-01-29,21900\r
2018-02-01,21900\r
2018-02-06,21900\r
2018-02-08,25000\r
2018-02-11,25000\r
2018-02-21,27400\r
2018-02-26,28700\r
2018-03-03,28700\r
2018-03-08,27200\r
2018-03-13,25900\r
2018-03-15,25900\r
2018-03-18,25900\r
2018-03-20,30500\r
2018-03-25,30500\r
2018-03-30,30500\r
2018-04-17,28900\r
2018-04-19,32100\r
2018-04-22,32100\r
2018-04-24,32100\r
2018-04-27,32100\r
2018-05-04,29600\r
2018-05-07,29600\r
2018-05-17,24400\r
2018-05-19,31100\r
2018-05-22,31100\r
2018-05-24,31100\r
2018-06-21,26400\r
2018-06-23,32000\r
2018-06-26,32000\r
2018-06-28,30700\r
2018-07-01,29800\r
2018-07-03,29600\r
2018-07-08,28500\r
2018-07-11,28600\r
2018-07-13,28800\r
2018-07-16,28500\r
2018-07-18,28000\r
2018-07-21,27500\r
2018-07-23,29100\r
2018-07-26,28900\r
2018-07-31,27900\r
2018-08-02,28500\r
2018-08-05,24800\r
2018-08-07,25400\r
2018-08-10,25400\r
2018-08-12,25400\r
2018-08-15,21300\r
2018-08-22,15600\r
2018-08-30,15600\r
2018-09-01,16700\r
2018-09-04,14800\r
2018-09-09,14800\r
2018-09-11,15900\r
2018-09-14,24200\r
2018-09-16,24200\r
2018-09-24,22900\r
2018-09-26,15700\r
2018-09-29,13100\r
2018-10-01,13100\r
2018-10-04,13400\r
2018-10-09,11200\r
2018-10-14,14100\r
2018-10-16,11800\r
2018-10-19,11900\r
2018-10-21,12900\r
2018-10-24,9300\r
2018-11-18,8600\r
2018-11-20,8600\r
2018-12-10,18700\r
2018-12-20,18700\r
2018-12-25,22800\r
2018-12-28,22800\r
2019-01-17,20200\r
2019-01-19,20200\r
2019-01-22,20300\r
2019-01-24,21700\r
2019-01-27,21100\r
2019-02-03,20200\r
2019-02-13,21200\r
2019-02-16,21200\r
2019-02-18,21200\r
2019-02-21,20900\r
2019-02-23,22100\r
2019-02-26,19700\r
2019-03-03,20200\r
2019-03-08,20200\r
2019-03-10,20200\r
2019-03-13,22700\r
2019-03-23,25700\r
2019-03-25,26200\r
2019-03-28,28500\r
2019-03-30,24700\r
2019-04-04,24700\r
2019-04-07,25600\r
2019-04-09,23600\r
2019-04-12,26200\r
2019-04-14,22800\r
2019-04-19,27000\r
2019-04-22,27000\r
2019-04-27,26700\r
2019-05-24,21000\r
2019-05-27,21000\r
2019-05-29,21000\r
2019-06-01,30900\r
2019-06-03,30900\r
2019-06-06,30900\r
2019-06-13,29300\r
2019-06-18,26500\r
2019-06-21,26500\r
2019-06-26,29700\r
2019-06-28,29700\r
2019-07-01,26800\r
2019-07-03,27200\r
2019-07-06,26700\r
2019-07-08,26700\r
2019-07-13,24000\r
2019-07-16,23400\r
2019-07-23,21700\r
2019-07-28,21100\r
2019-07-31,25700\r
2019-08-02,20000\r
2019-08-05,20000\r
2019-08-10,16000\r
2019-08-12,16000\r
2019-08-22,10000\r
2019-08-25,10000\r
2019-08-27,10000\r
2019-08-30,10000\r
2019-09-01,10000\r
2019-09-04,11800\r
2019-09-06,9800\r
2019-09-11,4700\r
2019-09-16,8200\r
2019-09-19,7900\r
2019-09-21,8500\r
2019-09-24,10700\r
2019-10-01,10700\r
2019-10-11,9800\r
2019-10-14,9800\r
2019-10-21,17200\r
2019-11-03,17200\r
2019-12-03,24900\r
2019-12-05,24300\r
2019-12-13,27500\r
2019-12-20,27500\r
2019-12-23,27500\r
2019-12-25,27500\r
2020-01-19,22700\r
2020-01-22,22700\r
2020-01-24,29400\r
2020-02-01,29400\r
2020-02-03,29400\r
2020-02-06,29400\r
2020-02-18,18200\r
2020-02-21,18200\r
2020-03-02,29700\r
2020-03-07,29700\r
2020-03-09,29700\r
2020-03-17,29700\r
2020-03-19,600\r
2020-03-24,22300\r
2020-03-27,22300\r
2020-03-29,22300\r
2020-04-01,24600\r
2020-04-03,24600\r
2020-04-08,24600\r
2020-04-11,25000\r
2020-04-13,26400\r
2020-04-16,26400\r
2020-04-18,26400\r
2020-04-23,26400\r
2020-04-26,26400\r
2020-05-06,25900\r
2020-05-16,25900\r
2020-05-18,26400\r
2020-05-21,26400\r
2020-05-23,21800\r
2020-05-26,24400\r
2020-05-28,23300\r
2020-05-31,24300\r
2020-06-02,23300\r
2020-06-05,26500\r
2020-06-07,26500\r
2020-07-12,17800\r
2020-07-15,17800\r
2020-07-17,19600\r
2020-07-20,19600\r
2020-07-22,24800\r
2020-07-27,24800\r
2020-07-30,24900\r
2020-08-01,24900\r
2020-08-04,25000\r
2020-08-06,21500\r
2020-08-09,20700\r
2020-08-11,18300\r
2020-08-14,18300\r
2020-09-08,11700\r
2020-09-10,12600\r
2020-09-13,11500\r
2020-09-15,11500\r
2020-09-20,13600\r
2020-09-25,12700\r
2020-09-28,14600\r
2020-11-04,15900\r
2020-11-09,15900\r
2020-11-12,15900\r
2020-11-14,15900\r
2020-11-19,23700\r
2020-11-22,23700\r
2020-11-27,23700\r
2020-11-29,18600\r
2020-12-12,24300\r
2020-12-17,24100\r
2021-01-08,27000\r
2021-01-11,27000\r
2021-01-18,27000\r
2021-02-07,23700\r
2021-02-17,24000\r
2021-02-27,31300\r
2021-03-02,31300\r
2021-03-04,31300\r
2021-03-09,31300\r
2021-03-12,28600\r
2021-03-14,28600\r
2021-03-17,27600\r
2021-03-19,27600\r
2021-03-22,30000\r
2021-03-24,28900\r
2021-03-27,28900\r
2021-03-29,29900\r
2021-04-01,29900\r
2021-04-03,29800\r
2021-04-06,32500\r
2021-04-08,26600\r
2021-04-11,26600\r
2021-04-13,26400\r
2021-04-16,28200\r
2021-04-18,28200\r
2021-04-21,28200\r
2021-04-23,28500\r
2021-04-28,32300\r
2021-05-03,26100\r
2021-05-08,24200\r
2021-05-11,22400\r
2021-05-13,22400\r
2021-05-16,24100\r
2021-05-21,24000\r
2021-05-31,28200\r
2021-06-05,28200\r
2021-06-07,28200\r
2021-06-10,28200\r
2021-06-15,26400\r
2021-06-22,26400\r
2021-06-25,26400\r
2021-07-17,25200\r
2021-07-20,26100\r
2021-07-22,24900\r
2021-07-25,24900\r
2021-07-30,25800\r
2021-08-01,21700\r
2021-08-11,30200\r
2021-08-14,30500\r
2021-08-24,24500\r
2021-08-26,26200\r
2021-08-29,26200\r
2021-08-31,26200\r
2021-09-03,26200\r
2021-09-05,26200\r
2021-09-08,17900\r
2021-09-10,17600\r
2021-09-23,15400\r
2021-09-28,15400\r
2021-09-30,16800\r
2021-10-03,16800\r
2021-10-08,18900\r
2021-10-10,17400\r
2021-10-15,17400\r
2021-10-23,17400\r
2021-10-28,17400\r
2021-11-04,16900\r
2021-11-09,18700\r
2021-11-17,18400\r
2021-11-19,18900\r
2021-11-24,18200\r
2021-12-17,18300\r
2022-01-11,7100\r
2022-01-13,22800\r
2022-01-21,22100\r
2022-01-23,25600\r
2022-01-31,24900\r
2022-03-07,26500\r
2022-03-09,26500\r
2022-03-12,26500\r
2022-03-14,27900\r
2022-03-19,27800\r
2022-03-22,30100\r
2022-03-24,27700\r
2022-03-27,26800\r
2022-04-01,26800\r
2022-04-11,27700\r
2022-04-13,27700\r
2022-04-16,29800\r
2022-04-21,29800\r
2022-04-26,29800\r
2022-05-01,24700\r
2022-05-03,30500\r
2022-05-06,28900\r
2022-05-08,30700\r
2022-05-11,28900\r
2022-05-13,28900\r
2022-05-16,22000\r
2022-05-21,22000\r
2022-05-28,27300\r
2022-05-31,27000\r
2022-06-02,29100\r
2022-06-05,29100\r
2022-06-07,29100\r
2022-06-10,31400\r
2022-06-12,30300\r
2022-06-15,30000\r
2022-06-17,31800\r
2022-06-27,29800\r
2022-07-02,29800\r
2022-07-05,25700\r
2022-07-07,25800\r
2022-07-10,25800\r
2022-07-12,24400\r
2022-07-15,24400\r
2022-07-17,22500\r
2022-07-20,23500\r
2022-08-06,9000\r
2022-08-09,9900\r
2022-08-11,9000\r
2022-08-24,5600\r
2022-08-26,5600\r
2022-08-29,5600\r
2022-09-03,5600\r
2022-09-08,7300\r
2022-09-18,7500\r
2022-09-20,5500\r
2022-09-30,5200\r
2022-10-08,6500\r
2022-10-18,6500\r
2022-10-20,6400\r
2022-10-23,6400\r
2022-11-12,9400\r
2022-11-17,9400\r
2022-11-19,10000\r
2022-11-22,9000\r
2022-11-29,9200\r
2022-12-09,10900\r
2023-01-11,17700\r
2023-01-13,17700\r
2023-01-16,17100\r
2023-01-21,21600\r
2023-02-10,25500\r
2023-02-12,25100\r
2023-02-15,23800\r
2023-02-20,23800\r
2023-02-27,24100\r
2023-03-02,25100\r
2023-03-04,24800\r
2023-04-21,24200\r
2023-04-23,24200\r
2023-05-01,24200\r
2023-05-26,26800\r
2023-05-28,28800\r
2023-05-31,28700\r
2023-06-02,28700\r
2023-06-05,28700\r
2023-06-07,29100\r
2023-06-10,30400\r
2023-06-15,30800\r
2023-06-22,31000\r
2023-06-25,25300\r
2023-07-02,22000\r
2023-07-05,22000\r
2023-07-07,29500\r
2023-07-10,24600\r
2023-07-15,29500\r
2023-07-17,29500\r
2023-07-20,23100\r
2023-08-09,19600\r
2023-08-19,19600\r
2023-09-03,18100\r
2023-09-05,19400\r
2023-09-08,17900\r
2023-09-10,17900\r
2023-09-13,17900\r
2023-09-15,19200\r
2023-09-18,16300\r
2023-09-30,16700\r
2023-10-03,15400\r
2023-10-05,14800\r
2023-10-08,14900\r
2023-10-10,14200\r
2023-12-02,19100\r
2023-12-04,19100\r
`;export{r as default};