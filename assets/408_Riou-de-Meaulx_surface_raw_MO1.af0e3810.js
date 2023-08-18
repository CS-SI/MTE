const r=`date,value\r
2017-02-19,4000\r
2017-03-11,8600\r
2017-04-10,15200\r
2017-04-17,17300\r
2017-04-20,17000\r
2017-05-07,19500\r
2017-05-17,21700\r
2017-05-27,25100\r
2017-05-30,19600\r
2017-06-06,24900\r
2017-06-19,22300\r
2017-07-01,15800\r
2017-07-04,22600\r
2017-07-14,23900\r
2017-07-24,17800\r
2017-07-26,15800\r
2017-07-31,14400\r
2017-08-05,15100\r
2017-08-13,16600\r
2017-08-18,15900\r
2017-08-23,13600\r
2017-08-25,11700\r
2017-09-04,9300\r
2017-09-14,12300\r
2017-09-27,12700\r
2017-10-07,6300\r
2017-10-12,9700\r
2017-10-14,9300\r
2017-10-17,6100\r
2017-10-22,6800\r
2017-10-24,7100\r
2017-11-01,14200\r
2017-11-13,15200\r
2017-11-16,9300\r
2017-11-21,8500\r
2017-11-26,8100\r
2017-11-28,11100\r
2017-12-01,14900\r
2017-12-16,20500\r
2017-12-21,13800\r
2017-12-28,21800\r
2018-01-02,28700\r
2018-01-17,28000\r
2018-02-04,41800\r
2018-03-03,65100\r
2018-03-13,80300\r
2018-03-16,90400\r
2018-03-23,93700\r
2018-03-26,98400\r
2018-04-05,85000\r
2018-04-17,102900\r
2018-04-20,100100\r
2018-04-22,95700\r
2018-04-25,91400\r
2018-04-30,500\r
2018-10-19,27200\r
2018-10-24,19400\r
2018-11-18,72100\r
2018-11-26,79100\r
2018-12-01,72600\r
2018-12-03,93400\r
2019-01-02,72200\r
2019-01-05,71700\r
2019-01-10,48500\r
2019-01-15,56200\r
2019-01-22,66000\r
2019-01-25,52700\r
2019-01-27,96600\r
2019-02-04,79600\r
2019-02-06,58900\r
2019-02-11,74200\r
2019-02-14,67900\r
2019-02-16,64800\r
2019-02-21,73400\r
2019-03-01,65700\r
2019-03-11,25200\r
2019-03-13,58300\r
2019-03-16,45000\r
2019-03-21,77400\r
2019-03-31,68800\r
2019-04-05,66500\r
2019-04-15,80100\r
2019-04-17,59400\r
2019-04-30,86900\r
2019-05-10,103800\r
2019-05-12,89800\r
2019-05-30,121200\r
2019-06-01,79300\r
2019-06-04,113600\r
2019-06-11,101300\r
2019-06-19,118000\r
2019-06-24,96100\r
2019-06-26,77100\r
2019-07-01,102600\r
2019-07-06,76100\r
2019-07-16,72000\r
2019-07-21,92200\r
2019-07-24,108900\r
2019-07-26,70500\r
2019-07-29,111100\r
2019-07-31,83800\r
2019-08-03,99100\r
2019-08-05,100600\r
2019-08-10,80200\r
2019-08-15,82100\r
2019-08-23,98500\r
2019-08-30,81500\r
2019-09-07,84700\r
2019-09-12,70700\r
2019-09-27,81200\r
2019-10-02,70300\r
2019-10-07,81700\r
2019-10-27,61100\r
2019-11-06,72000\r
2019-12-03,58000\r
2019-12-21,87600\r
2020-01-05,83900\r
2020-01-30,96700\r
2020-02-04,74800\r
2020-02-09,97500\r
2020-02-14,63000\r
2020-02-24,85600\r
2020-04-04,60800\r
2020-04-06,75200\r
2020-04-09,85200\r
2020-04-11,64800\r
2020-04-14,87500\r
2020-04-24,98400\r
2020-05-04,98400\r
2020-05-21,82600\r
2020-05-24,117000\r
2020-05-26,80000\r
2020-06-03,120000\r
2020-06-15,92200\r
2020-06-20,82800\r
2020-06-23,118100\r
2020-07-03,118400\r
2020-07-08,115200\r
2020-07-10,104000\r
2020-07-30,86500\r
2020-08-02,112900\r
2020-08-07,90900\r
2020-08-09,70300\r
2020-08-12,79500\r
2020-08-14,88700\r
2020-08-17,97100\r
2020-08-19,76200\r
2020-08-22,87900\r
2020-08-27,75400\r
2020-09-06,88500\r
2020-09-08,86800\r
2020-09-13,64600\r
2020-09-16,71700\r
2020-09-18,55700\r
2020-09-23,80400\r
2020-09-26,62300\r
2020-10-01,66900\r
2020-10-08,77800\r
2020-10-13,82900\r
2020-10-21,82100\r
2020-10-28,63400\r
2020-11-05,61300\r
2020-11-10,79800\r
2020-11-17,60600\r
2020-11-20,84800\r
2020-11-22,73800\r
2020-11-25,77200\r
2020-12-07,57900\r
2020-12-25,74300\r
2021-01-06,78600\r
2021-01-11,91000\r
2021-01-14,88800\r
2021-01-19,94600\r
2021-01-24,90800\r
2021-01-26,86800\r
2021-01-31,90800\r
2021-02-20,87100\r
2021-02-23,85400\r
2021-02-25,91100\r
2021-02-28,93600\r
2021-03-02,100\r
2021-03-15,86400\r
2021-03-17,91900\r
2021-03-20,95900\r
2021-03-27,93600\r
2021-03-30,92000\r
2021-04-01,78800\r
2021-04-06,79700\r
2021-05-04,90300\r
2021-05-26,100700\r
2021-05-31,104600\r
2021-06-05,101500\r
2021-06-13,92600\r
2021-06-18,100700\r
2021-06-30,100800\r
2021-07-05,99700\r
2021-07-10,102300\r
2021-07-13,94100\r
2021-07-18,101200\r
2021-07-20,98500\r
2021-07-23,99000\r
2021-07-25,92100\r
2021-07-28,89700\r
2021-08-02,96300\r
2021-08-09,86700\r
2021-08-14,81200\r
2021-08-17,83200\r
2021-08-19,83700\r
2021-08-22,91600\r
2021-09-08,75400\r
2021-09-11,83300\r
2021-09-21,83000\r
2021-10-01,80400\r
2021-10-06,83300\r
2021-10-11,77100\r
2021-10-13,69600\r
2021-10-16,71600\r
2021-10-18,69100\r
2021-11-02,76200\r
2021-11-05,76500\r
2021-11-20,77700\r
2021-11-30,70200\r
2021-12-02,82200\r
2021-12-05,79500\r
2021-12-07,69700\r
2021-12-12,85300\r
2021-12-20,73500\r
2022-01-06,78500\r
2022-01-09,73100\r
2022-01-11,67400\r
2022-01-14,69500\r
2022-01-16,64400\r
2022-01-19,74000\r
2022-01-21,58200\r
2022-01-24,70800\r
2022-01-29,68600\r
2022-02-08,62900\r
2022-02-10,70700\r
2022-02-13,67800\r
2022-02-15,75700\r
2022-02-18,72000\r
2022-02-20,69200\r
2022-02-23,64600\r
2022-02-28,65300\r
2022-03-25,48500\r
2022-04-01,81700\r
2022-04-09,85400\r
2022-04-16,90700\r
2022-05-16,109600\r
2022-05-21,92900\r
2022-06-05,98600\r
2022-06-10,99200\r
2022-06-20,93500\r
2022-07-03,100000\r
2022-07-05,95100\r
2022-07-08,93700\r
2022-07-10,90900\r
2022-07-13,102400\r
2022-07-15,86600\r
2022-07-18,100600\r
2022-07-20,93600\r
2022-07-25,86600\r
2022-08-09,88400\r
2022-08-19,79400\r
2022-08-22,87300\r
2022-08-29,74800\r
2022-09-26,63600\r
2022-10-01,74000\r
2022-10-06,62100\r
2022-10-28,65500\r
2022-10-31,64400\r
2022-11-05,61500\r
2022-11-17,53300\r
2022-11-20,48200\r
2022-11-30,59500\r
2022-12-02,65800\r
2022-12-05,51000\r
2022-12-07,64100\r
2022-12-27,66700\r
2022-12-30,86000\r
2023-01-09,70300\r
2023-01-14,69100\r
2023-01-19,70700\r
2023-01-24,79100\r
2023-01-29,49600\r
2023-02-03,70300\r
2023-02-08,57700\r
2023-02-10,57400\r
2023-02-13,66700\r
2023-02-15,59000\r
2023-03-05,75600\r
2023-03-07,75800\r
2023-03-10,80600\r
2023-03-12,66000\r
2023-03-17,78900\r
2023-03-22,76700\r
2023-03-25,74500\r
2023-03-27,73000\r
2023-03-30,84000\r
2023-04-14,84700\r
2023-04-16,81800\r
2023-04-24,90800\r
2023-04-26,84000\r
2023-05-04,89200\r
2023-05-11,83800\r
2023-05-16,92100\r
2023-05-26,94400\r
2023-06-03,99600\r
2023-06-23,107600\r
2023-06-25,92300\r
2023-07-05,91400\r
2023-07-08,93000\r
2023-07-10,99800\r
2023-07-13,82500\r
2023-07-15,92600\r
2023-07-18,78900\r
2023-07-20,88200\r
2023-07-23,94900\r
`;export{r as default};
