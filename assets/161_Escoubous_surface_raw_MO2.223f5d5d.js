const r=`date,value\r
2017-05-06,8900\r
2017-05-09,8900\r
2017-05-16,67700\r
2017-05-19,66900\r
2017-05-26,66900\r
2017-05-29,61000\r
2017-06-05,61000\r
2017-06-15,69300\r
2017-06-18,69300\r
2017-06-25,69300\r
2017-07-05,69200\r
2017-07-25,73300\r
2017-07-30,73900\r
2017-08-02,73900\r
2017-08-04,62000\r
2017-08-07,62600\r
2017-08-12,60500\r
2017-08-14,67000\r
2017-08-17,67000\r
2017-08-19,67000\r
2017-08-22,67000\r
2017-08-24,67000\r
2017-09-08,83200\r
2017-09-11,83200\r
2017-09-13,87200\r
2017-09-16,87200\r
2017-09-21,77800\r
2017-09-23,92100\r
2017-09-26,92100\r
2017-09-28,93800\r
2017-10-03,92700\r
2017-10-06,94000\r
2017-10-08,92700\r
2017-10-11,96400\r
2017-10-13,95000\r
2017-10-16,97900\r
2017-10-23,96400\r
2017-10-28,89900\r
2017-10-31,89900\r
2017-11-05,89900\r
2017-11-07,90300\r
2017-11-12,81000\r
2017-11-15,81000\r
2017-11-17,93100\r
2018-02-10,1800\r
2018-04-21,100\r
2018-04-24,100\r
2018-04-26,500\r
2018-05-01,100\r
2018-05-04,400\r
2018-05-11,13600\r
2018-05-16,22200\r
2018-05-19,22200\r
2018-05-21,22200\r
2018-06-20,93400\r
2018-06-23,93400\r
2018-06-25,99300\r
2018-07-03,97200\r
2018-07-05,97200\r
2018-07-08,93500\r
2018-07-10,93500\r
2018-07-25,82600\r
2018-07-30,82600\r
2018-08-02,82600\r
2018-08-04,86500\r
2018-08-14,91400\r
2018-08-19,94200\r
2018-08-22,94200\r
2018-08-24,94200\r
2018-09-03,94500\r
2018-09-06,94500\r
2018-09-08,94500\r
2018-09-11,83200\r
2018-09-13,85500\r
2018-09-16,82100\r
2018-09-18,84000\r
2018-09-21,84000\r
2018-09-23,76400\r
2018-09-26,77800\r
2018-09-28,73900\r
2018-10-01,76000\r
2018-10-03,76000\r
2018-10-06,73900\r
2018-10-08,84800\r
2018-10-13,84700\r
2018-10-16,84700\r
2018-10-23,80300\r
2018-10-26,78800\r
2018-10-31,78800\r
2018-11-02,78800\r
2019-02-15,500\r
2019-02-18,500\r
2019-02-25,100\r
2019-02-28,100\r
2019-03-05,100\r
2019-03-10,100\r
2019-03-12,100\r
2019-05-26,13700\r
2019-05-29,13700\r
2019-05-31,73500\r
2019-06-03,72100\r
2019-06-08,72100\r
2019-06-10,72100\r
2019-06-13,72100\r
2019-06-15,72100\r
2019-06-25,70100\r
2019-06-28,70100\r
2019-06-30,70300\r
2019-07-03,70300\r
2019-07-05,70300\r
2019-07-10,69800\r
2019-07-13,67000\r
2019-07-15,68000\r
2019-07-18,65600\r
2019-07-20,71100\r
2019-07-23,71100\r
2019-07-25,71100\r
2019-07-28,71100\r
2019-08-02,69900\r
2019-08-04,72600\r
2019-08-09,73400\r
2019-08-12,73400\r
2019-08-14,70000\r
2019-08-17,70000\r
2019-08-22,73500\r
2019-08-24,70800\r
2019-08-29,71700\r
2019-09-03,70700\r
2019-09-06,70700\r
2019-09-08,68200\r
2019-09-11,69200\r
2019-09-13,70100\r
2019-09-16,69000\r
2019-09-18,69000\r
2019-09-26,75100\r
2019-09-28,75100\r
2019-10-01,65700\r
2019-10-03,74200\r
2019-10-08,69700\r
2019-10-11,69700\r
2019-10-13,69700\r
2020-02-10,1300\r
2020-02-15,1100\r
2020-02-18,1000\r
2020-02-20,800\r
2020-04-15,800\r
2020-05-05,81200\r
2020-05-08,81200\r
2020-05-18,81200\r
2020-05-20,89900\r
2020-05-25,93300\r
2020-05-28,93300\r
2020-05-30,92300\r
2020-06-02,92300\r
2020-06-24,79200\r
2020-06-27,79200\r
2020-07-04,92100\r
2020-07-07,92100\r
2020-07-09,84800\r
2020-07-14,85800\r
2020-07-17,85800\r
2020-07-19,85800\r
2020-07-22,79600\r
2020-07-24,79600\r
2020-07-27,73500\r
2020-07-29,73500\r
2020-08-01,73500\r
2020-08-03,67400\r
2020-08-06,69600\r
2020-08-08,67000\r
2020-08-21,70300\r
2020-08-23,78700\r
2020-08-26,78300\r
2020-08-31,78300\r
2020-09-02,78300\r
2020-09-05,78300\r
2020-09-07,78300\r
2020-09-12,74900\r
2020-09-15,74900\r
2020-09-17,74900\r
2020-09-20,74900\r
2020-09-27,81200\r
2020-09-30,80000\r
2020-10-12,89300\r
2020-10-15,88600\r
2020-10-17,91400\r
2020-10-27,91400\r
2020-10-30,90600\r
2020-11-01,90700\r
2020-11-09,79100\r
2020-11-11,81200\r
2020-11-14,81200\r
2020-11-16,81200\r
2020-11-19,77400\r
2020-11-21,85400\r
2020-11-24,85400\r
2020-11-26,85400\r
2021-03-31,3500\r
2021-04-03,3500\r
2021-04-05,300\r
2021-04-08,3600\r
2021-04-13,400\r
2021-04-15,2200\r
2021-04-18,1800\r
2021-04-23,1800\r
2021-06-09,73900\r
2021-06-12,73900\r
2021-06-14,73900\r
2021-06-19,73900\r
2021-07-09,78700\r
2021-07-14,78400\r
2021-07-19,78400\r
2021-07-22,68000\r
2021-07-29,68000\r
2021-08-13,71100\r
2021-08-16,71100\r
2021-08-18,74200\r
2021-08-21,74200\r
2021-08-23,74200\r
2021-08-26,74100\r
2021-08-28,74100\r
2021-09-12,84900\r
2021-09-15,84900\r
2021-09-17,85000\r
2021-09-22,85000\r
2021-09-27,72800\r
2021-10-02,86600\r
2021-10-07,88400\r
2021-10-10,88400\r
2021-10-12,84200\r
2021-10-15,85800\r
2021-10-17,84200\r
2021-10-22,80900\r
2021-10-25,83400\r
2021-10-27,79600\r
2021-11-01,82300\r
2021-11-04,73900\r
2022-02-09,100\r
2022-04-30,100\r
2022-05-05,100\r
2022-05-10,39300\r
2022-05-13,39200\r
2022-05-15,39200\r
2022-05-18,39200\r
2022-06-04,95200\r
2022-06-07,95200\r
2022-06-09,94800\r
2022-06-17,92400\r
2022-06-19,93500\r
2022-06-22,92000\r
2022-06-24,92000\r
2022-06-29,92000\r
2022-07-02,70600\r
2022-07-04,70600\r
2022-07-07,70600\r
2022-07-09,84900\r
2022-07-12,84900\r
2022-07-14,86700\r
2022-07-17,86700\r
2022-07-19,84000\r
2022-07-24,83500\r
2022-07-27,83900\r
2022-08-01,79800\r
2022-08-03,79800\r
2022-08-08,80800\r
2022-08-11,80800\r
2022-08-13,80800\r
2022-09-22,87000\r
2022-09-25,87000\r
2022-09-30,87000\r
2022-10-02,96700\r
2022-10-05,96700\r
2022-10-07,96700\r
2022-10-12,96700\r
2022-11-06,81600\r
2022-11-11,81600\r
2022-11-16,81300\r
2023-06-24,91400\r
2023-07-02,90500\r
`;export{r as default};