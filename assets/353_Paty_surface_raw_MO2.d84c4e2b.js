const r=`date,value\r
2017-01-03,17300\r
2017-01-13,17300\r
2017-02-19,15600\r
2017-02-22,18800\r
2017-03-01,18800\r
2017-03-11,17900\r
2017-03-14,18000\r
2017-03-21,18000\r
2017-04-03,19200\r
2017-04-10,21800\r
2017-04-20,21300\r
2017-04-23,21500\r
2017-05-03,21100\r
2017-05-13,19200\r
2017-05-23,19200\r
2017-05-30,11900\r
2017-06-02,11900\r
2017-06-09,11900\r
2017-06-12,17900\r
2017-06-19,19600\r
2017-06-22,19100\r
2017-06-29,20300\r
2017-07-02,20100\r
2017-07-04,17800\r
2017-07-07,16400\r
2017-07-09,17600\r
2017-07-12,17200\r
2017-07-14,17400\r
2017-07-17,17600\r
2017-07-19,18100\r
2017-07-22,17600\r
2017-07-24,18400\r
2017-07-27,17500\r
2017-07-29,16500\r
2017-08-03,16100\r
2017-08-06,15100\r
2017-08-11,16900\r
2017-08-13,14700\r
2017-08-18,15600\r
2017-08-21,14800\r
2017-08-23,15600\r
2017-08-26,15400\r
2017-09-02,12600\r
2017-09-05,11500\r
2017-09-07,12500\r
2017-09-10,14100\r
2017-09-12,12700\r
2017-09-17,14400\r
2017-09-20,11800\r
2017-09-22,13100\r
2017-09-27,12300\r
2017-10-02,13700\r
2017-10-05,13500\r
2017-10-07,13500\r
2017-10-10,13500\r
2017-10-12,11400\r
2017-10-15,10800\r
2017-10-17,11400\r
2017-10-20,10700\r
2017-10-22,10300\r
2017-10-25,13100\r
2017-10-27,11200\r
2017-10-30,10700\r
2017-11-01,10700\r
2017-11-06,12000\r
2017-11-09,12000\r
2017-11-11,12800\r
2017-11-14,11600\r
2017-11-16,12200\r
2017-11-19,11500\r
2017-11-21,11000\r
2017-11-26,11400\r
2017-11-29,11800\r
2017-12-01,10100\r
2017-12-06,11300\r
2017-12-09,11400\r
2017-12-14,11700\r
2017-12-16,10200\r
2017-12-19,11500\r
2017-12-21,10200\r
2017-12-24,11700\r
2017-12-26,11700\r
2018-01-13,9500\r
2018-01-15,9500\r
2018-01-20,9500\r
2018-01-23,10000\r
2018-01-28,11000\r
2018-01-30,10300\r
2018-02-02,10300\r
2018-02-04,11400\r
2018-02-07,9100\r
2018-02-09,9700\r
2018-02-12,12600\r
2018-02-14,12600\r
2018-02-19,12700\r
2018-02-22,12700\r
2018-02-24,9900\r
2018-02-27,9900\r
2018-03-06,9800\r
2018-03-11,9800\r
2018-03-14,10800\r
2018-03-16,9900\r
2018-03-19,11700\r
2018-03-26,11300\r
2018-03-31,10900\r
2018-04-05,13600\r
2018-04-15,15700\r
2018-04-18,16000\r
2018-04-20,15300\r
2018-04-25,15800\r
2018-04-28,15300\r
2018-04-30,15200\r
2018-05-03,14900\r
2018-05-05,15700\r
2018-05-08,14900\r
2018-05-10,20300\r
2018-05-15,19600\r
2018-05-18,20200\r
2018-05-20,18100\r
2018-05-23,18900\r
2018-05-25,18300\r
2018-06-02,22000\r
2018-06-04,22600\r
2018-06-14,22400\r
2018-06-19,20600\r
2018-06-22,21100\r
2018-06-24,21100\r
2018-06-27,24900\r
2018-06-29,23200\r
2018-07-02,24600\r
2018-07-04,23300\r
2018-07-07,23400\r
2018-07-09,21300\r
2018-07-12,21300\r
2018-07-14,22100\r
2018-07-17,21800\r
2018-07-19,20700\r
2018-07-22,21100\r
2018-07-24,20600\r
2018-07-27,20100\r
2018-07-29,19300\r
2018-08-01,19900\r
2018-08-03,19600\r
2018-08-06,20000\r
2018-08-08,20300\r
2018-08-11,21000\r
2018-08-13,20700\r
2018-08-16,20500\r
2018-08-18,19800\r
2018-08-21,20100\r
2018-08-23,18500\r
2018-08-26,19500\r
2018-08-28,18200\r
2018-08-31,19000\r
2018-09-02,17900\r
2018-09-05,17700\r
2018-09-07,16300\r
2018-09-10,17400\r
2018-09-12,18000\r
2018-09-17,14400\r
2018-09-20,15800\r
2018-09-22,12800\r
2018-09-25,12800\r
2018-09-27,16100\r
2018-10-02,13400\r
2018-10-05,15400\r
2018-10-07,15400\r
2018-10-20,14000\r
2018-10-22,16700\r
2018-10-25,12000\r
2018-10-30,15800\r
2018-11-01,12500\r
2018-11-16,19600\r
2018-11-19,19600\r
2018-11-24,19600\r
2018-11-26,19600\r
2018-12-04,14600\r
2018-12-06,15300\r
2018-12-11,13800\r
2018-12-14,13800\r
2018-12-24,13700\r
2018-12-26,13700\r
2018-12-29,15200\r
2019-01-05,11300\r
2019-01-10,9700\r
2019-01-15,10100\r
2019-01-18,10100\r
2019-01-23,10500\r
2019-01-25,9300\r
2019-01-28,9800\r
2019-01-30,12200\r
2019-02-04,13400\r
2019-02-12,13300\r
2019-02-14,12600\r
2019-02-17,13500\r
2019-02-19,13500\r
2019-02-22,13600\r
2019-02-27,13600\r
2019-03-01,10600\r
2019-03-04,12000\r
2019-03-11,10600\r
2019-03-14,10600\r
2019-03-16,10800\r
2019-03-19,12600\r
2019-03-21,12800\r
2019-03-24,12200\r
2019-03-26,12400\r
2019-03-29,12600\r
2019-03-31,10600\r
2019-04-05,11000\r
2019-04-08,9600\r
2019-04-13,11900\r
2019-04-15,11900\r
2019-04-18,15200\r
2019-04-20,12900\r
2019-04-28,14200\r
2019-04-30,13400\r
2019-05-05,13800\r
2019-05-10,13300\r
2019-05-13,12300\r
2019-05-15,11800\r
2019-05-23,15500\r
2019-05-25,15500\r
2019-05-28,15300\r
2019-05-30,18500\r
2019-06-02,18300\r
2019-06-04,16700\r
2019-06-07,17900\r
2019-06-12,17400\r
2019-06-14,17400\r
2019-06-17,17500\r
2019-06-19,17900\r
2019-06-22,17900\r
2019-06-24,14200\r
2019-06-27,16100\r
2019-06-29,13000\r
2019-07-02,15500\r
2019-07-04,13000\r
2019-07-07,13600\r
2019-07-12,14600\r
2019-07-14,13200\r
2019-07-17,13600\r
2019-07-19,13000\r
2019-07-22,12700\r
2019-07-24,10700\r
2019-07-27,10700\r
2019-07-29,10700\r
2019-08-01,11700\r
2019-08-03,11200\r
2019-08-06,10600\r
2019-08-08,10800\r
2019-08-11,9000\r
2019-08-13,9000\r
2019-08-16,9600\r
2019-08-18,9000\r
2019-08-21,11000\r
2019-08-23,8200\r
2019-08-26,9600\r
2019-08-31,10200\r
2019-09-02,9500\r
2019-09-05,9500\r
2019-09-07,9900\r
2019-09-12,8700\r
2019-09-15,9600\r
2019-09-17,9200\r
2019-09-20,9700\r
2019-09-25,9700\r
2019-09-27,9800\r
2019-09-30,9800\r
2019-10-02,10100\r
2019-10-05,10100\r
2019-10-07,9200\r
2019-10-10,9200\r
2019-10-15,8500\r
2019-10-17,11300\r
2019-10-25,8900\r
2019-10-27,8900\r
2019-10-30,11300\r
2019-11-04,11300\r
2019-11-06,10200\r
2019-11-09,10900\r
2019-11-16,12300\r
2019-11-21,12300\r
2019-11-29,15400\r
2019-12-06,14100\r
2019-12-09,11100\r
2019-12-14,11100\r
2019-12-21,10000\r
2019-12-24,11300\r
2019-12-26,11800\r
2019-12-29,9200\r
2020-01-05,7700\r
2020-01-08,7900\r
2020-01-10,7900\r
2020-01-18,7900\r
2020-02-04,10500\r
2020-02-07,14400\r
2020-02-09,14400\r
2020-02-12,10500\r
2020-02-14,11700\r
2020-02-19,11200\r
2020-02-22,11700\r
2020-02-24,10700\r
2020-03-03,10700\r
2020-03-08,10700\r
2020-03-10,12900\r
2020-03-13,13700\r
2020-03-15,13700\r
2020-03-18,13800\r
2020-03-20,13700\r
2020-03-25,14100\r
2020-03-28,13900\r
2020-03-30,11900\r
2020-04-02,11900\r
2020-04-04,11600\r
2020-04-07,11800\r
2020-04-09,12200\r
2020-04-12,12200\r
2020-04-14,12700\r
2020-04-24,13300\r
2020-04-29,16000\r
2020-05-02,16000\r
2020-05-04,16500\r
2020-05-07,15400\r
2020-05-09,15400\r
2020-05-12,17000\r
2020-05-17,17000\r
2020-05-19,14900\r
2020-05-22,15800\r
2020-05-24,16700\r
2020-05-27,16700\r
2020-05-29,12900\r
2020-06-01,16900\r
2020-06-03,13800\r
2020-06-06,16600\r
2020-06-08,14900\r
2020-06-11,17400\r
2020-06-21,15100\r
2020-06-23,15100\r
2020-06-26,14700\r
2020-06-28,15300\r
2020-07-01,15300\r
2020-07-03,15300\r
2020-07-06,15000\r
2020-07-08,12600\r
2020-07-11,14900\r
2020-07-13,14800\r
2020-07-16,14700\r
2020-07-18,13800\r
2020-07-21,14900\r
2020-07-23,14300\r
2020-07-26,15700\r
2020-07-31,13100\r
2020-08-02,14600\r
2020-08-05,15200\r
2020-08-07,11900\r
2020-08-10,13600\r
2020-08-15,13600\r
2020-08-20,13900\r
2020-08-22,13900\r
2020-08-25,13900\r
2020-08-27,11000\r
2020-08-30,10500\r
2020-09-01,11300\r
2020-09-04,10300\r
2020-09-06,9700\r
2020-09-11,9500\r
2020-09-14,9700\r
2020-09-16,9400\r
2020-09-21,8700\r
2020-09-26,8900\r
2020-09-29,8900\r
2020-10-04,10800\r
2020-10-11,11600\r
2020-10-14,11300\r
2020-10-16,11700\r
2020-10-19,11700\r
2020-10-24,11100\r
2020-10-26,11100\r
2020-10-31,11200\r
2020-11-05,10100\r
2020-11-08,10100\r
2020-11-10,11800\r
2020-11-18,8100\r
2020-11-20,6800\r
2020-11-23,8600\r
2020-11-30,11000\r
2020-12-03,9000\r
2020-12-13,10900\r
2020-12-25,11900\r
2020-12-28,12500\r
2020-12-30,10900\r
2021-01-12,12300\r
2021-01-14,13100\r
2021-01-17,11400\r
2021-01-19,12100\r
2021-01-24,10700\r
2021-01-27,10600\r
2021-01-29,11800\r
2021-02-03,12900\r
2021-02-11,13800\r
2021-02-13,13800\r
2021-02-21,12400\r
2021-02-23,13900\r
2021-02-26,13900\r
2021-02-28,11900\r
2021-03-05,12700\r
2021-03-08,11500\r
2021-03-10,11700\r
2021-03-13,10600\r
2021-03-15,10600\r
2021-03-18,13200\r
2021-03-20,11100\r
2021-03-23,13300\r
2021-03-25,11300\r
2021-03-28,12700\r
2021-03-30,12600\r
2021-04-02,13500\r
2021-04-04,13500\r
2021-04-07,13300\r
2021-04-12,13100\r
2021-04-14,12200\r
2021-04-19,13900\r
2021-04-22,13900\r
2021-04-24,12300\r
2021-05-02,11600\r
2021-05-04,11600\r
2021-05-07,15000\r
2021-05-09,15000\r
2021-05-12,15500\r
2021-05-14,15500\r
2021-05-17,15500\r
2021-05-19,15500\r
2021-05-24,15500\r
2021-05-27,16200\r
2021-06-01,15500\r
2021-06-03,15700\r
2021-06-06,15700\r
2021-06-08,15600\r
2021-06-11,15400\r
2021-06-13,14500\r
2021-06-16,15200\r
2021-06-18,16500\r
2021-06-21,16900\r
2021-06-23,16500\r
2021-06-26,16900\r
2021-07-01,16900\r
2021-07-03,16900\r
2021-07-08,13600\r
2021-07-11,17100\r
2021-07-16,17300\r
2021-07-18,14900\r
2021-07-21,15500\r
2021-07-23,15100\r
2021-07-26,15100\r
2021-07-28,14800\r
2021-07-31,14300\r
2021-08-02,13100\r
2021-08-05,13200\r
2021-08-10,14600\r
2021-08-12,11600\r
2021-08-15,12600\r
2021-08-17,13900\r
2021-08-20,12200\r
2021-08-22,11900\r
2021-08-25,11700\r
2021-08-27,11500\r
2021-08-30,11500\r
2021-09-01,11600\r
2021-09-04,12300\r
2021-09-06,12400\r
2021-09-11,11700\r
2021-09-19,11200\r
2021-09-21,11200\r
2021-09-24,11900\r
2021-09-29,12500\r
2021-10-01,12100\r
2021-10-06,12600\r
2021-10-09,13200\r
2021-10-11,13700\r
2021-10-14,13300\r
2021-10-16,12500\r
2021-10-21,12600\r
2021-10-24,12900\r
2021-10-26,12800\r
2021-10-29,14700\r
2021-11-05,13800\r
2021-11-13,12900\r
2021-11-18,13900\r
2021-11-20,15200\r
2021-11-23,15200\r
2021-11-28,15200\r
2021-11-30,14200\r
2021-12-03,13200\r
2021-12-18,15700\r
2021-12-20,15700\r
2021-12-25,17500\r
2022-01-07,12100\r
2022-01-09,12100\r
2022-01-12,14300\r
2022-01-14,13100\r
2022-01-17,13900\r
2022-01-22,13800\r
2022-01-24,14700\r
2022-01-27,14900\r
2022-01-29,14700\r
2022-02-01,15300\r
2022-02-03,15100\r
2022-02-06,13600\r
2022-02-08,12300\r
2022-02-11,14600\r
2022-02-18,14100\r
2022-02-21,14000\r
2022-02-23,14100\r
2022-02-26,15200\r
2022-02-28,13900\r
2022-03-03,14200\r
2022-03-05,14700\r
2022-03-23,13900\r
2022-03-25,15800\r
2022-03-28,15800\r
2022-04-04,15600\r
2022-04-09,15200\r
2022-04-14,15200\r
2022-04-17,15800\r
2022-04-19,15900\r
2022-04-22,15700\r
2022-04-27,15500\r
2022-04-29,16400\r
2022-05-02,17400\r
2022-05-04,16200\r
2022-05-07,16300\r
2022-05-09,17300\r
2022-05-12,16700\r
2022-05-14,16800\r
2022-05-17,17700\r
2022-05-19,17900\r
2022-05-22,17800\r
2022-05-27,18700\r
2022-05-29,18800\r
2022-06-01,17000\r
2022-06-03,17000\r
2022-06-06,17300\r
2022-06-11,16300\r
2022-06-13,16700\r
2022-06-16,17400\r
2022-06-18,17500\r
2022-06-23,16200\r
2022-06-26,17900\r
2022-06-28,16300\r
2022-07-01,15700\r
2022-07-03,16400\r
2022-07-06,15600\r
2022-07-08,15600\r
2022-07-11,14800\r
2022-07-13,15100\r
2022-07-16,14800\r
2022-07-18,13300\r
2022-07-21,15700\r
2022-07-23,14600\r
2022-07-26,13600\r
2022-07-28,14100\r
2022-07-31,14300\r
2022-08-02,14300\r
2022-08-05,13200\r
2022-08-07,12300\r
2022-08-10,11700\r
2022-08-12,11000\r
2022-08-15,11200\r
2022-08-20,11500\r
2022-08-22,11500\r
2022-08-25,11000\r
2022-08-27,11800\r
2022-09-04,9900\r
2022-09-06,12200\r
2022-09-09,10800\r
2022-09-11,10600\r
2022-09-16,10800\r
2022-09-19,11000\r
2022-09-21,11100\r
2022-09-26,9200\r
2022-09-29,11400\r
2022-10-04,9200\r
2022-10-06,11400\r
2022-10-14,11400\r
2022-10-16,11400\r
2022-10-26,10000\r
2022-10-31,11300\r
2022-11-05,11300\r
2022-11-10,12100\r
2022-11-18,11500\r
2022-11-20,11500\r
2022-11-25,10900\r
2022-11-30,9800\r
2022-12-05,11100\r
2022-12-10,15000\r
2022-12-18,18400\r
2022-12-25,17800\r
2022-12-28,15000\r
2023-01-19,12100\r
2023-01-22,13800\r
2023-01-24,13800\r
2023-01-27,12400\r
2023-01-29,13300\r
2023-02-01,14000\r
2023-02-03,13700\r
2023-02-06,13200\r
2023-02-08,14100\r
2023-02-11,14000\r
2023-02-13,13900\r
2023-02-16,14100\r
2023-02-18,14500\r
2023-02-26,14900\r
2023-03-03,15600\r
2023-03-05,14800\r
2023-03-10,15400\r
2023-03-13,15200\r
2023-03-15,16200\r
2023-03-18,17300\r
2023-03-20,15400\r
2023-03-25,16900\r
2023-03-28,15800\r
2023-03-30,16800\r
2023-04-02,15900\r
2023-04-04,15900\r
2023-04-07,15900\r
2023-04-09,14800\r
2023-04-14,14800\r
2023-04-17,16000\r
2023-04-19,16900\r
2023-04-24,16500\r
2023-04-29,17800\r
2023-05-02,17800\r
2023-05-04,17800\r
2023-05-07,14700\r
2023-06-01,15900\r
2023-06-03,14400\r
2023-06-06,16400\r
2023-06-08,16500\r
2023-06-11,16500\r
2023-06-13,18400\r
2023-06-16,18700\r
2023-06-18,16700\r
2023-06-23,15800\r
2023-06-26,16800\r
2023-06-28,16400\r
2023-07-01,15500\r
2023-07-03,18200\r
2023-07-06,16500\r
2023-07-08,17500\r
2023-07-11,17000\r
2023-07-13,17000\r
2023-07-16,16700\r
2023-07-18,17100\r
2023-07-21,16900\r
2023-07-23,16700\r
2023-07-26,16800\r
2023-07-28,16600\r
2023-07-31,16600\r
2023-08-02,15800\r
2023-08-05,16200\r
2023-08-07,15100\r
2023-08-10,15100\r
2023-08-12,14800\r
2023-08-15,16200\r
2023-08-17,14700\r
2023-08-22,14700\r
2023-08-25,12300\r
2023-09-01,13500\r
2023-09-04,12400\r
2023-09-06,12600\r
2023-09-11,11400\r
2023-09-14,12400\r
2023-09-19,11600\r
2023-09-24,10700\r
2023-09-26,12900\r
2023-09-29,10900\r
2023-10-01,12300\r
2023-10-04,12300\r
2023-10-06,12400\r
2023-10-09,12200\r
2023-10-11,12100\r
2023-10-21,13000\r
2023-10-24,12900\r
2023-10-31,13400\r
2023-11-05,11800\r
2023-11-08,12400\r
2023-11-18,10900\r
2023-11-20,9700\r
2023-11-25,8600\r
2023-11-28,8600\r
2023-12-03,11900\r
2023-12-05,11000\r
2023-12-15,11200\r
2023-12-20,10600\r
2023-12-23,11500\r
2023-12-25,10200\r
2023-12-30,11300\r
`;export{r as default};