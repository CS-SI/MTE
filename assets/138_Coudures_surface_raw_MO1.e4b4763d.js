const r=`date,value\r
2017-01-26,45700\r
2017-01-29,49900\r
2017-02-15,71900\r
2017-02-18,73500\r
2017-02-25,70500\r
2017-03-10,82200\r
2017-03-30,78700\r
2017-04-06,102400\r
2017-04-09,96700\r
2017-04-19,96900\r
2017-05-06,109000\r
2017-05-09,112900\r
2017-05-16,115000\r
2017-05-26,115900\r
2017-06-05,116000\r
2017-06-18,116300\r
2017-07-05,114400\r
2017-07-18,118200\r
2017-08-02,115200\r
2017-08-12,111600\r
2017-08-14,114000\r
2017-08-22,107900\r
2017-08-29,98200\r
2017-09-03,93900\r
2017-09-21,98700\r
2017-10-08,95800\r
2017-10-11,93000\r
2017-10-13,93000\r
2017-10-16,90000\r
2017-10-23,59900\r
2017-10-26,86000\r
2017-10-28,91600\r
2017-10-31,87000\r
2017-11-17,78300\r
2017-11-20,81500\r
2017-11-22,77300\r
2017-11-30,87000\r
2017-12-05,62200\r
2017-12-12,98200\r
2017-12-20,102400\r
2017-12-25,96700\r
2018-01-09,123700\r
2018-01-24,128700\r
2018-03-02,124600\r
2018-03-15,129400\r
2018-03-22,130800\r
2018-03-30,128800\r
2018-04-06,125600\r
2018-04-19,128600\r
2018-04-21,134500\r
2018-05-06,124900\r
2018-05-11,138600\r
2018-05-21,137300\r
2018-06-20,135900\r
2018-06-23,136400\r
2018-06-25,129700\r
2018-07-10,132600\r
2018-07-13,131000\r
2018-07-23,124900\r
2018-07-25,121700\r
2018-07-30,129400\r
2018-08-02,116300\r
2018-08-04,108600\r
2018-08-12,104800\r
2018-08-19,103800\r
2018-08-22,99200\r
2018-08-27,85400\r
2018-09-03,75700\r
2018-09-08,80000\r
2018-09-11,75000\r
2018-09-16,71500\r
2018-09-23,68600\r
2018-09-26,67200\r
2018-10-03,66600\r
2018-10-23,60100\r
2018-11-15,68300\r
2019-02-13,76400\r
2019-02-15,85900\r
2019-02-20,85400\r
2019-02-23,83000\r
2019-02-25,82500\r
2019-03-20,81400\r
2019-03-22,81100\r
2019-03-27,81700\r
2019-03-30,77900\r
2019-05-01,95500\r
2019-05-06,105300\r
2019-05-14,111000\r
2019-06-13,122100\r
2019-06-28,128300\r
2019-07-05,114600\r
2019-07-10,118200\r
2019-07-15,120400\r
2019-07-23,108000\r
2019-07-25,109400\r
2019-08-04,104300\r
2019-08-09,100000\r
2019-08-14,99500\r
2019-08-17,95300\r
2019-08-22,90900\r
2019-08-24,91600\r
2019-08-29,86300\r
2019-09-08,58500\r
2019-09-13,59400\r
2019-09-16,60900\r
2019-10-11,41700\r
2019-10-13,44900\r
2019-12-05,83700\r
2019-12-10,72500\r
2019-12-15,80400\r
2019-12-25,105400\r
2019-12-30,103800\r
2020-01-09,113100\r
2020-01-11,111300\r
2020-01-14,108300\r
2020-01-19,105000\r
2020-01-29,104900\r
2020-01-31,114000\r
2020-02-03,101800\r
2020-02-05,108700\r
2020-02-15,105500\r
2020-02-20,111500\r
2020-03-21,132000\r
2020-03-24,128900\r
2020-03-26,125900\r
2020-04-03,133000\r
2020-04-05,130800\r
2020-04-08,134200\r
2020-04-10,131800\r
2020-04-15,134700\r
2020-05-18,135400\r
2020-05-20,128200\r
2020-05-25,139700\r
2020-05-28,135600\r
2020-05-30,131700\r
2020-06-24,127300\r
2020-07-07,138900\r
2020-07-09,128200\r
2020-07-19,117900\r
2020-07-24,103300\r
2020-07-27,109000\r
2020-08-06,86700\r
2020-08-18,84100\r
2020-09-02,77300\r
2020-09-12,73600\r
2020-09-30,71900\r
2020-10-30,103700\r
2020-11-11,116700\r
2020-11-14,108700\r
2020-11-21,116900\r
2020-11-26,114300\r
2020-11-29,110000\r
2020-12-26,132200\r
2021-01-03,137000\r
2021-01-10,139900\r
2021-01-18,138200\r
2021-02-19,129600\r
2021-02-24,136800\r
2021-02-27,136600\r
2021-03-01,135700\r
2021-03-04,136400\r
2021-03-21,137300\r
2021-03-24,130500\r
2021-03-29,135900\r
2021-03-31,132700\r
2021-04-03,134300\r
2021-04-05,134200\r
2021-04-08,134500\r
2021-04-15,136900\r
2021-04-20,107900\r
2021-04-23,136200\r
2021-05-03,133700\r
2021-05-28,129700\r
2021-06-07,130000\r
2021-06-09,129400\r
2021-06-14,132600\r
2021-07-22,127800\r
2021-08-11,119600\r
2021-08-23,99500\r
2021-08-26,100100\r
2021-08-31,91900\r
2021-09-05,87700\r
2021-09-12,85700\r
2021-09-25,85900\r
2021-09-30,83000\r
2021-10-07,89300\r
2021-10-12,82000\r
2021-10-17,76700\r
2021-10-20,74200\r
2021-10-27,75500\r
2021-11-09,81900\r
2021-11-11,82100\r
2021-11-19,80700\r
2021-12-14,116100\r
2021-12-19,115400\r
2022-01-13,113500\r
2022-01-15,116000\r
2022-01-23,125400\r
2022-01-25,118300\r
2022-02-09,119100\r
2022-02-22,134900\r
2022-03-21,131900\r
2022-03-26,121700\r
2022-04-05,123500\r
2022-05-08,131600\r
2022-05-10,133000\r
2022-05-28,131100\r
2022-06-17,128100\r
2022-06-19,132100\r
2022-06-24,125600\r
2022-07-02,123300\r
2022-07-07,119200\r
2022-07-12,111800\r
2022-07-14,101500\r
2022-07-17,104200\r
2022-07-24,82500\r
2022-08-01,72700\r
2022-08-06,63900\r
2022-08-11,49000\r
2022-08-13,45300\r
2022-08-28,46400\r
2022-09-05,41900\r
2022-09-10,39200\r
2022-09-12,36600\r
2022-09-20,39800\r
2022-09-22,37900\r
2022-10-15,39500\r
2022-10-22,35100\r
2022-11-06,37400\r
2022-11-16,33400\r
2022-12-04,50200\r
2022-12-11,48800\r
2022-12-21,57300\r
2023-01-03,56700\r
2023-02-02,92600\r
2023-02-04,91600\r
2023-02-09,90200\r
2023-02-12,95700\r
2023-02-14,94600\r
2023-02-17,98700\r
2023-02-24,95800\r
2023-03-01,106800\r
2023-04-05,124800\r
2023-04-18,123800\r
2023-05-05,131900\r
2023-05-28,134800\r
2023-06-02,106000\r
2023-06-24,135000\r
2023-06-27,133300\r
2023-07-07,136200\r
2023-07-09,133400\r
2023-07-14,121300\r
2023-07-17,86100\r
2023-07-22,124700\r
`;export{r as default};
