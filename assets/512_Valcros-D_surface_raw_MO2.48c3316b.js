const r=`date,value\r
2017-02-19,25100\r
2017-02-26,25100\r
2017-03-01,27100\r
2017-03-08,27000\r
2017-03-11,29400\r
2017-03-18,29100\r
2017-03-21,29100\r
2017-04-10,31100\r
2017-04-17,31100\r
2017-04-20,31400\r
2017-06-19,28400\r
2017-06-26,28400\r
2017-06-29,28400\r
2017-07-04,25600\r
2017-07-06,25600\r
2017-07-09,25600\r
2017-07-11,25000\r
2017-07-14,27700\r
2017-07-19,27100\r
2017-07-21,27100\r
2017-07-24,27100\r
2017-07-29,24600\r
2017-07-31,24600\r
2017-08-03,24600\r
2017-08-05,24600\r
2017-08-08,25200\r
2017-08-10,23900\r
2017-08-13,25900\r
2017-08-15,25900\r
2017-08-18,23800\r
2017-08-20,25900\r
2017-08-23,22000\r
2017-08-25,26300\r
2017-08-30,22200\r
2017-09-02,22600\r
2017-09-04,20800\r
2017-09-07,20800\r
2017-09-12,20800\r
2017-09-17,19900\r
2017-09-22,19900\r
2017-09-24,19900\r
2017-09-27,23800\r
2017-09-29,23800\r
2017-10-04,23800\r
2017-10-07,23800\r
2017-10-09,20700\r
2017-10-12,22800\r
2017-10-17,21800\r
2017-10-19,24200\r
2017-10-22,21900\r
2017-10-24,24200\r
2017-10-27,20400\r
2017-10-29,21200\r
2017-11-01,21200\r
2017-11-03,18500\r
2017-11-06,18500\r
2017-11-16,17500\r
2017-11-18,17500\r
2017-11-21,20200\r
2017-11-23,20200\r
2017-11-26,19300\r
2017-11-28,20400\r
2017-12-01,20400\r
2017-12-03,19700\r
2017-12-06,19700\r
2017-12-16,19200\r
2017-12-21,21100\r
2017-12-23,21100\r
2017-12-26,21100\r
2017-12-28,19800\r
2018-01-05,18400\r
2018-01-07,18400\r
2018-01-12,18400\r
2018-01-15,18400\r
2018-02-04,21400\r
2018-02-09,24200\r
2018-02-11,24200\r
2018-02-14,22900\r
2018-02-16,23700\r
2018-02-19,23700\r
2018-02-21,22900\r
2018-03-26,30100\r
2018-03-31,30100\r
2018-04-02,30100\r
2018-04-05,30800\r
2018-04-10,29500\r
2018-04-15,29500\r
2018-04-20,28800\r
2018-04-22,28800\r
2018-04-25,33200\r
2018-04-30,30900\r
2018-05-05,32000\r
2018-05-07,30500\r
2018-05-10,30500\r
2018-05-20,30000\r
2018-05-25,30000\r
2018-05-30,30000\r
2018-06-09,32100\r
2018-06-11,32100\r
2018-06-14,32100\r
2018-06-16,32100\r
2018-06-19,32300\r
2018-06-21,31900\r
2018-06-24,31900\r
2018-06-26,31900\r
2018-06-29,31900\r
2018-07-04,31000\r
2018-07-06,31000\r
2018-07-09,32000\r
2018-07-11,32100\r
2018-07-14,30800\r
2018-07-16,33000\r
2018-07-19,29500\r
2018-07-21,33000\r
2018-07-24,30400\r
2018-07-26,31800\r
2018-07-29,29900\r
2018-07-31,32000\r
2018-08-03,32000\r
2018-08-05,30200\r
2018-08-08,30300\r
2018-08-10,26800\r
2018-08-15,26800\r
2018-08-18,26800\r
2018-08-23,29600\r
2018-08-25,29600\r
2018-08-28,29600\r
2018-08-30,29600\r
2018-09-02,29600\r
2018-09-04,25100\r
2018-09-07,28600\r
2018-09-09,28600\r
2018-09-12,28600\r
2018-09-14,24400\r
2018-09-17,24400\r
2018-09-22,24900\r
2018-09-24,24900\r
2018-09-27,27700\r
2018-09-29,27700\r
2018-10-02,23800\r
2018-10-04,25800\r
2018-10-09,23700\r
2018-10-12,23700\r
2018-10-22,23500\r
2018-10-24,23500\r
2018-12-06,23700\r
2018-12-08,23700\r
2018-12-11,23700\r
2019-01-05,25700\r
2019-01-07,25700\r
2019-01-10,26900\r
2019-01-12,26900\r
2019-01-15,24500\r
2019-01-17,24500\r
2019-01-22,25700\r
2019-01-25,22600\r
2019-01-27,23200\r
2019-01-30,23100\r
2019-02-04,24500\r
2019-02-06,24500\r
2019-02-09,24500\r
2019-02-11,28100\r
2019-02-14,27100\r
2019-02-16,28900\r
2019-02-21,28900\r
2019-02-26,28900\r
2019-03-01,29000\r
2019-03-03,24500\r
2019-03-08,24500\r
2019-03-11,26100\r
2019-03-13,26100\r
2019-03-16,25500\r
2019-03-18,28400\r
2019-03-21,26500\r
2019-03-23,26500\r
2019-03-26,26500\r
2019-03-28,30300\r
2019-03-31,25100\r
2019-04-05,25600\r
2019-04-07,29300\r
2019-04-10,29300\r
2019-04-15,29300\r
2019-04-17,29100\r
2019-04-20,29100\r
2019-04-30,31800\r
2019-05-02,31800\r
2019-05-05,33700\r
2019-05-07,33700\r
2019-05-10,32100\r
2019-05-12,32100\r
2019-05-15,32100\r
2019-05-20,32900\r
2019-05-25,32100\r
2019-05-30,32900\r
2019-06-01,32900\r
2019-06-04,35300\r
2019-06-06,35300\r
2019-06-11,35300\r
2019-06-14,35300\r
2019-06-19,34600\r
2019-06-21,34600\r
2019-06-24,34600\r
2019-06-26,34600\r
2019-06-29,34700\r
2019-07-01,34700\r
2019-07-04,34700\r
2019-07-06,32800\r
2019-07-09,32800\r
2019-07-11,32800\r
2019-07-14,32800\r
2019-07-19,35800\r
2019-07-21,35800\r
2019-07-24,35800\r
2019-07-26,35800\r
2019-07-29,31900\r
2019-07-31,31900\r
2019-08-03,31900\r
2019-08-05,28300\r
2019-08-08,28300\r
2019-08-10,30700\r
2019-08-15,25300\r
2019-08-18,32000\r
2019-08-23,32300\r
2019-08-25,32300\r
2019-08-28,32300\r
2019-08-30,32300\r
2019-09-02,27200\r
2019-09-04,27300\r
2019-09-07,26500\r
2019-09-09,27100\r
2019-09-12,23900\r
2019-09-14,23900\r
2019-09-17,25500\r
2019-09-19,23800\r
2019-09-24,26600\r
2019-09-27,19700\r
2019-09-29,26600\r
2019-10-02,20900\r
2019-10-04,21000\r
2019-10-07,19100\r
2019-10-09,19100\r
2019-10-14,23600\r
2019-10-17,23600\r
2019-10-19,21700\r
2019-10-27,22300\r
2019-10-29,22300\r
2019-11-03,22300\r
2019-11-06,24300\r
2019-11-16,24300\r
2019-11-26,21000\r
2019-11-28,21000\r
2019-12-21,22300\r
2019-12-23,22300\r
2019-12-26,22800\r
2019-12-28,22800\r
2020-01-05,27800\r
2020-01-10,27800\r
2020-01-12,27800\r
2020-01-15,27800\r
2020-01-17,27800\r
2020-02-04,21700\r
2020-02-09,21700\r
2020-02-14,22800\r
2020-02-19,22800\r
2020-02-21,28300\r
2020-02-24,25900\r
2020-02-26,25900\r
2020-03-07,27600\r
2020-03-15,30300\r
2020-03-20,30300\r
2020-03-22,30300\r
2020-03-30,30300\r
2020-04-04,25200\r
2020-04-06,25200\r
2020-04-09,32100\r
2020-04-11,32100\r
2020-04-14,28400\r
2020-04-24,32400\r
2020-04-26,35000\r
2020-04-29,31400\r
2020-05-04,35000\r
2020-05-06,35000\r
2020-05-09,35000\r
2020-05-14,30600\r
2020-05-19,36300\r
2020-05-21,30600\r
2020-05-24,35700\r
2020-05-26,35700\r
2020-05-29,35700\r
2020-05-31,35700\r
2020-06-03,35700\r
2020-06-05,35700\r
2020-06-08,35700\r
2020-06-23,33900\r
2020-06-25,33900\r
2020-06-28,35300\r
2020-06-30,35300\r
2020-07-03,32900\r
2020-07-05,32900\r
2020-07-08,33900\r
2020-07-10,31600\r
2020-07-13,31600\r
2020-07-15,33300\r
2020-07-18,33300\r
2020-07-20,30100\r
2020-07-23,30100\r
2020-08-02,33200\r
2020-08-04,33200\r
2020-08-07,33200\r
2020-08-09,33200\r
2020-08-14,33200\r
2020-08-17,33200\r
2020-08-19,20900\r
2020-08-22,30500\r
2020-08-24,30400\r
2020-08-27,31300\r
2020-09-01,21900\r
2020-09-03,21900\r
2020-09-06,24700\r
2020-09-08,22100\r
2020-09-13,25700\r
2020-09-16,20200\r
2020-09-18,25000\r
2020-09-21,25000\r
2020-09-23,16800\r
2020-09-26,21800\r
2020-09-28,21800\r
2020-10-03,21800\r
2020-10-06,21800\r
2020-10-08,21800\r
2020-10-11,27900\r
2020-10-13,27700\r
2020-10-16,27700\r
2020-10-18,27700\r
2020-11-05,17700\r
2020-11-07,17700\r
2020-11-10,17700\r
2020-11-17,17700\r
2020-11-20,22600\r
2020-11-22,22600\r
2020-11-25,24200\r
2020-11-27,24200\r
2020-11-30,24200\r
2020-12-02,24200\r
2020-12-07,23500\r
2020-12-25,23500\r
2020-12-30,23500\r
2021-01-14,22800\r
2021-01-19,24800\r
2021-01-21,24800\r
2021-01-24,23200\r
2021-01-26,25100\r
2021-01-29,25100\r
2021-01-31,23400\r
2021-02-03,23400\r
2021-02-23,26400\r
2021-02-25,26400\r
2021-02-28,27600\r
2021-03-05,27600\r
2021-03-07,24900\r
2021-03-10,29200\r
2021-03-15,30800\r
2021-03-17,30800\r
2021-03-20,30800\r
2021-03-22,28000\r
2021-03-25,28000\r
2021-03-30,30700\r
2021-04-01,30700\r
2021-04-04,30700\r
2021-04-09,30700\r
2021-04-11,26600\r
2021-04-14,26600\r
2021-05-04,32600\r
2021-05-06,32600\r
2021-05-09,32600\r
2021-05-11,32600\r
2021-05-14,32600\r
2021-05-19,30600\r
2021-05-21,30600\r
2021-05-26,30600\r
2021-05-29,30600\r
2021-06-03,32300\r
2021-06-05,32300\r
2021-06-08,32700\r
2021-06-10,32700\r
2021-06-13,32600\r
2021-06-15,34900\r
2021-06-18,34900\r
2021-06-28,32500\r
2021-06-30,35000\r
2021-07-03,35400\r
2021-07-05,35400\r
2021-07-08,35400\r
2021-07-10,34000\r
2021-07-13,34000\r
2021-07-15,30700\r
2021-07-18,32400\r
2021-07-20,32400\r
2021-07-23,31800\r
2021-07-25,33800\r
2021-07-28,31700\r
2021-07-30,33000\r
2021-08-02,31700\r
2021-08-07,31900\r
2021-08-09,30400\r
2021-08-12,30400\r
2021-08-17,27200\r
2021-08-19,27200\r
2021-08-22,28700\r
2021-08-24,28700\r
2021-08-27,27200\r
2021-08-29,28300\r
2021-09-01,28300\r
2021-09-06,26300\r
2021-09-11,23800\r
2021-09-13,23800\r
2021-09-18,23400\r
2021-09-21,23400\r
2021-10-06,20900\r
2021-10-08,20900\r
2021-10-11,21200\r
2021-10-13,21200\r
2021-10-16,19800\r
2021-10-18,20400\r
2021-10-23,19200\r
2021-10-26,20800\r
2021-10-28,19900\r
2021-11-02,19900\r
2021-11-05,19900\r
2021-11-20,18600\r
2021-11-22,18600\r
2021-11-30,23000\r
2021-12-02,19600\r
2021-12-05,21600\r
2021-12-07,21600\r
2021-12-10,20000\r
2021-12-12,23400\r
2021-12-15,23400\r
2021-12-20,21200\r
2021-12-22,20300\r
2022-01-09,22300\r
2022-01-11,22300\r
2022-01-14,22400\r
2022-01-16,22400\r
2022-01-21,20700\r
2022-01-24,23600\r
2022-01-26,23500\r
2022-01-29,23500\r
2022-02-03,23500\r
2022-02-08,22200\r
2022-02-10,22200\r
2022-02-13,22200\r
2022-02-15,22200\r
2022-02-18,26100\r
2022-02-20,21800\r
2022-02-23,23400\r
2022-02-28,22600\r
2022-03-02,25000\r
2022-03-07,24200\r
2022-03-25,26500\r
2022-03-27,26500\r
2022-04-01,26500\r
2022-04-04,26900\r
2022-04-09,28700\r
2022-04-11,28700\r
2022-04-14,26700\r
2022-04-16,29900\r
2022-05-04,32400\r
2022-05-09,32400\r
2022-05-11,32400\r
2022-05-14,31600\r
2022-05-16,31900\r
2022-05-21,30500\r
2022-05-24,30500\r
2022-05-29,30900\r
2022-05-31,30900\r
2022-06-18,22400\r
2022-06-20,22400\r
2022-06-25,22400\r
2022-06-28,22400\r
2022-07-03,28100\r
2022-07-05,28100\r
2022-07-08,29400\r
2022-07-10,29400\r
2022-07-13,28100\r
2022-07-15,30600\r
2022-07-18,28500\r
2022-07-20,30700\r
2022-07-23,29000\r
2022-07-25,29900\r
2022-07-28,29900\r
2022-07-30,29300\r
2022-08-02,29400\r
2022-08-04,26600\r
2022-08-07,28300\r
2022-08-09,28300\r
2022-08-12,28300\r
2022-08-14,27100\r
2022-08-22,26300\r
2022-08-24,26300\r
2022-08-27,26300\r
2022-08-29,26300\r
2022-09-01,26400\r
2022-09-03,20900\r
2022-09-06,20900\r
2022-09-08,20900\r
2022-09-11,24500\r
2022-09-16,26200\r
2022-09-18,26200\r
2022-09-21,26200\r
2022-09-23,25600\r
2022-09-26,25700\r
2022-09-28,24300\r
2022-10-01,24300\r
2022-10-06,25200\r
2022-10-11,24700\r
2022-10-16,24700\r
2022-11-05,23400\r
2022-11-10,23400\r
2022-11-20,23200\r
2022-11-22,23200\r
2022-11-25,24400\r
2022-11-30,23300\r
2022-12-02,24300\r
2022-12-05,22800\r
2022-12-07,24000\r
2022-12-10,24000\r
2023-01-09,19700\r
2023-01-19,20800\r
2023-01-21,20300\r
2023-01-24,25000\r
2023-01-26,25000\r
2023-01-29,19600\r
2023-01-31,24200\r
2023-02-03,17400\r
2023-02-05,18400\r
2023-02-08,17700\r
2023-02-10,18800\r
2023-02-13,18800\r
2023-02-15,18500\r
2023-02-18,19700\r
2023-03-05,21200\r
2023-03-07,21200\r
2023-03-10,21900\r
2023-03-12,21900\r
2023-03-17,19500\r
2023-03-20,19500\r
2023-03-25,27800\r
2023-03-27,27800\r
2023-03-30,29600\r
2023-04-06,28400\r
2023-04-09,28400\r
2023-04-14,31600\r
2023-04-16,31600\r
2023-04-19,33600\r
2023-04-24,31900\r
2023-04-26,33500\r
2023-04-29,32900\r
2023-05-01,33000\r
2023-05-04,33000\r
2023-05-06,31600\r
2023-05-24,31400\r
2023-05-26,31400\r
2023-05-29,31400\r
2023-06-03,31900\r
2023-06-08,33700\r
2023-06-10,33700\r
2023-06-13,33700\r
2023-06-15,33700\r
2023-06-18,33800\r
2023-06-20,32700\r
2023-06-23,34200\r
2023-06-25,34200\r
2023-06-28,34200\r
2023-07-03,32800\r
2023-07-05,32800\r
2023-07-08,33000\r
2023-07-10,33000\r
2023-07-13,30400\r
2023-07-15,30600\r
2023-07-18,30400\r
2023-07-20,32700\r
2023-07-23,30700\r
2023-07-25,33200\r
2023-07-28,33200\r
2023-07-30,31100\r
2023-08-02,32100\r
2023-08-04,30400\r
2023-08-07,30400\r
2023-08-09,30400\r
2023-08-12,27400\r
2023-08-14,27700\r
2023-08-17,26300\r
2023-08-19,27200\r
2023-08-22,24700\r
2023-08-24,25300\r
2023-08-29,25200\r
2023-09-01,27300\r
2023-09-03,24800\r
2023-09-06,24900\r
2023-09-08,24900\r
2023-09-11,22700\r
2023-09-13,22800\r
2023-09-26,20600\r
2023-10-01,22100\r
2023-10-03,22100\r
`;export{r as default};
