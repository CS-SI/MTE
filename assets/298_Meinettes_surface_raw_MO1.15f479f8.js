const r=`date,value\r
2017-02-19,86600\r
2017-02-22,92100\r
2017-03-11,88000\r
2017-03-14,87400\r
2017-04-03,102000\r
2017-04-10,91500\r
2017-04-20,93000\r
2017-04-23,83800\r
2017-05-23,89900\r
2017-06-02,85100\r
2017-06-09,89400\r
2017-06-12,88500\r
2017-06-19,89000\r
2017-06-22,95100\r
2017-07-04,84100\r
2017-07-07,74800\r
2017-07-14,72100\r
2017-07-17,74000\r
2017-08-03,50900\r
2017-08-06,50600\r
2017-08-18,48800\r
2017-08-21,41900\r
2017-08-23,42200\r
2017-08-26,38000\r
2017-09-07,35200\r
2017-09-27,32100\r
2017-10-05,23300\r
2017-10-07,26000\r
2017-10-10,24500\r
2017-10-12,22400\r
2017-10-15,23700\r
2017-10-17,23200\r
2017-10-22,7200\r
2017-10-27,17700\r
2017-10-30,11600\r
2017-11-21,14100\r
2018-01-15,33400\r
2018-01-23,11900\r
2018-02-19,57500\r
2018-02-24,59300\r
2018-02-27,78000\r
2018-03-14,71800\r
2018-03-19,75000\r
2018-03-21,88500\r
2018-03-31,77500\r
2018-04-18,95000\r
2018-04-20,93000\r
2018-04-30,96300\r
2018-05-05,90100\r
2018-05-20,67300\r
2018-06-09,89400\r
2018-06-19,85500\r
2018-06-22,88600\r
2018-06-24,88000\r
2018-06-27,92800\r
2018-06-29,96500\r
2018-07-02,95200\r
2018-07-07,93800\r
2018-07-09,88100\r
2018-07-17,85700\r
2018-07-19,85200\r
2018-07-24,84900\r
2018-07-27,80900\r
2018-07-29,75400\r
2018-08-01,75700\r
2018-08-03,70200\r
2018-08-11,73700\r
2018-08-16,52800\r
2018-08-18,63200\r
2018-08-21,56000\r
2018-08-26,52000\r
2018-08-28,49800\r
2018-09-02,44200\r
2018-09-05,46500\r
2018-09-10,41600\r
2018-09-17,38900\r
2018-09-20,38100\r
2018-09-25,37700\r
2018-09-27,34700\r
2018-10-02,41600\r
2018-10-05,29500\r
2018-10-17,32100\r
2018-10-20,28600\r
2018-10-22,27800\r
2018-11-04,32200\r
2018-11-24,64000\r
2019-01-03,74500\r
2019-02-04,85000\r
2019-02-12,77700\r
2019-02-14,78700\r
2019-02-17,77900\r
2019-02-22,83600\r
2019-02-27,88100\r
2019-03-16,76500\r
2019-03-21,88200\r
2019-03-24,94700\r
2019-03-29,93400\r
2019-03-31,94500\r
2019-04-05,87400\r
2019-04-13,98400\r
2019-04-15,95900\r
2019-04-20,97100\r
2019-04-23,94700\r
2019-05-03,100700\r
2019-05-23,96000\r
2019-05-30,92400\r
2019-06-02,106400\r
2019-06-07,96700\r
2019-06-12,94800\r
2019-06-17,94400\r
2019-06-19,97000\r
2019-06-24,92800\r
2019-06-27,94000\r
2019-06-29,78400\r
2019-07-02,96900\r
2019-07-04,93700\r
2019-07-07,91300\r
2019-07-14,86700\r
2019-07-17,86400\r
2019-07-19,80900\r
2019-07-22,77100\r
2019-07-24,76300\r
2019-07-29,58600\r
2019-08-03,67800\r
2019-08-08,57000\r
2019-08-11,53500\r
2019-08-13,59000\r
2019-08-16,55300\r
2019-08-23,42500\r
2019-08-26,42900\r
2019-08-28,48500\r
2019-08-31,44400\r
2019-09-02,47000\r
2019-09-07,45000\r
2019-09-12,39000\r
2019-09-15,36600\r
2019-09-17,32800\r
2019-09-20,33100\r
2019-09-27,32000\r
2019-10-25,41200\r
2019-11-16,1400\r
2019-12-06,91000\r
2019-12-29,87100\r
2020-02-07,65700\r
2020-02-12,79100\r
2020-02-22,83200\r
2020-02-24,81900\r
2020-03-20,90500\r
2020-03-25,89700\r
2020-03-28,105600\r
2020-04-02,102700\r
2020-04-04,105500\r
2020-04-07,103500\r
2020-04-09,97400\r
2020-04-14,106300\r
2020-04-24,97700\r
2020-05-04,93300\r
2020-05-09,96300\r
2020-05-17,94100\r
2020-05-19,86800\r
2020-05-22,95600\r
2020-05-27,102600\r
2020-05-29,93200\r
2020-06-23,92500\r
2020-07-01,89900\r
2020-07-08,84900\r
2020-07-11,81000\r
2020-07-13,77200\r
2020-07-18,73800\r
2020-07-21,79500\r
2020-07-23,64600\r
2020-07-28,55700\r
2020-07-31,68000\r
2020-08-05,46400\r
2020-08-07,43700\r
2020-08-10,45400\r
2020-08-20,32600\r
2020-08-27,24700\r
2020-09-01,13700\r
2020-09-04,15100\r
2020-09-14,5400\r
2020-09-16,5700\r
2020-09-19,5800\r
2020-10-31,13400\r
2020-11-18,10600\r
2020-11-23,21000\r
2020-12-13,16500\r
2021-01-24,50000\r
2021-02-21,86800\r
2021-02-23,90600\r
2021-02-28,97600\r
2021-03-20,101800\r
2021-03-23,97900\r
2021-03-25,99400\r
2021-03-28,94800\r
2021-03-30,105200\r
2021-04-02,100700\r
2021-04-04,91800\r
2021-04-14,98300\r
2021-04-24,98700\r
2021-05-27,87300\r
2021-06-01,87600\r
2021-06-03,98500\r
2021-06-11,93700\r
2021-06-13,89900\r
2021-06-16,96800\r
2021-06-18,88600\r
2021-06-26,98300\r
2021-07-11,86000\r
2021-07-21,84900\r
2021-07-23,88500\r
2021-08-10,82600\r
2021-08-15,84800\r
2021-08-20,88800\r
2021-08-25,85000\r
2021-08-27,81800\r
2021-09-01,81900\r
2021-09-04,83500\r
2021-09-06,79800\r
2021-09-24,72500\r
2021-09-26,84800\r
2021-10-01,66400\r
2021-10-11,75100\r
2021-10-14,71500\r
2021-10-16,68000\r
2021-10-21,58000\r
2021-10-24,68100\r
2021-11-30,73200\r
2021-12-23,71000\r
2022-01-14,62200\r
2022-01-24,63800\r
2022-02-01,8700\r
2022-02-08,49700\r
2022-02-13,69400\r
2022-02-26,69500\r
2022-02-28,74400\r
2022-03-05,85000\r
2022-03-08,81500\r
2022-03-23,91500\r
2022-03-25,90400\r
2022-04-04,90600\r
2022-04-14,77600\r
2022-04-17,89400\r
2022-04-19,97700\r
2022-05-09,96400\r
2022-05-19,92800\r
2022-05-29,85000\r
2022-06-06,86200\r
2022-06-11,83100\r
2022-06-13,85300\r
2022-06-16,71900\r
2022-06-18,81600\r
2022-06-21,73700\r
2022-06-28,81700\r
2022-07-03,83600\r
2022-07-06,78100\r
2022-07-08,77500\r
2022-07-11,76300\r
2022-07-13,75800\r
2022-07-16,74500\r
2022-07-18,74200\r
2022-07-21,65600\r
2022-07-26,68700\r
2022-07-28,63300\r
2022-07-31,56900\r
2022-08-07,51600\r
2022-08-10,50500\r
2022-08-12,49000\r
2022-08-22,41500\r
2022-09-01,41000\r
2022-09-04,47700\r
2022-09-09,42000\r
2022-09-11,47800\r
2022-09-19,43200\r
2022-09-21,47000\r
2022-10-04,46100\r
2022-10-06,44400\r
2022-10-11,52700\r
2022-11-18,69600\r
2022-12-05,78100\r
2023-01-17,76300\r
2023-02-03,90800\r
2023-02-08,80500\r
2023-02-11,90800\r
2023-02-13,80000\r
2023-02-16,83000\r
2023-02-21,87100\r
2023-03-05,88700\r
2023-03-28,90100\r
2023-04-04,80900\r
2023-04-19,102200\r
2023-05-27,93100\r
2023-05-29,103600\r
2023-06-01,107100\r
2023-06-03,102500\r
2023-06-08,95900\r
2023-06-16,93100\r
2023-06-26,97500\r
2023-06-28,99200\r
2023-07-06,94900\r
2023-07-08,99400\r
`;export{r as default};