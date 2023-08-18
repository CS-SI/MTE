const r=`date,value\r
2017-01-26,89200\r
2017-02-15,111200\r
2017-02-18,112100\r
2017-02-25,114400\r
2017-03-10,121000\r
2017-03-30,121400\r
2017-04-09,136900\r
2017-04-19,134700\r
2017-04-29,145700\r
2017-05-06,139100\r
2017-05-09,137300\r
2017-05-16,148400\r
2017-05-26,146800\r
2017-06-18,146000\r
2017-07-05,145100\r
2017-07-18,144600\r
2017-08-02,138100\r
2017-08-04,147900\r
2017-08-12,137600\r
2017-08-14,143500\r
2017-08-22,132700\r
2017-09-03,128400\r
2017-09-21,124400\r
2017-09-26,121300\r
2017-10-08,122400\r
2017-10-11,120100\r
2017-10-13,120600\r
2017-10-16,117400\r
2017-10-23,116200\r
2017-10-26,114500\r
2017-10-31,115700\r
2017-11-07,115700\r
2017-11-17,114100\r
2017-11-20,110600\r
2017-11-22,113300\r
2017-11-27,111800\r
2017-12-05,107400\r
2017-12-12,117100\r
2017-12-25,118100\r
2018-02-15,150700\r
2018-03-02,149300\r
2018-03-07,150500\r
2018-03-15,151000\r
2018-03-22,151100\r
2018-03-30,143800\r
2018-04-06,145100\r
2018-04-19,143400\r
2018-04-21,149300\r
2018-05-06,144000\r
2018-05-11,150800\r
2018-05-21,149900\r
2018-06-20,148200\r
2018-06-23,148300\r
2018-06-25,145700\r
2018-07-08,144100\r
2018-07-13,147700\r
2018-07-23,143800\r
2018-07-25,143700\r
2018-07-30,146800\r
2018-08-02,140500\r
2018-08-04,135100\r
2018-08-12,132200\r
2018-08-19,126300\r
2018-08-22,119700\r
2018-08-27,111800\r
2018-09-03,104700\r
2018-09-08,107700\r
2018-09-11,104500\r
2018-09-16,95700\r
2018-09-23,89900\r
2018-09-26,87800\r
2018-09-28,91100\r
2018-10-03,83700\r
2018-10-06,85600\r
2018-12-07,83300\r
2019-01-16,91200\r
2019-02-13,109400\r
2019-02-15,124400\r
2019-02-20,129400\r
2019-02-23,130000\r
2019-02-25,125800\r
2019-02-28,131800\r
2019-03-12,125100\r
2019-03-20,128800\r
2019-03-22,120800\r
2019-03-27,126400\r
2019-03-30,124600\r
2019-04-16,130400\r
2019-05-01,134200\r
2019-05-06,141200\r
2019-05-09,144800\r
2019-05-14,142600\r
2019-06-08,145000\r
2019-06-13,144600\r
2019-06-23,149400\r
2019-06-28,150600\r
2019-07-05,140100\r
2019-07-15,143400\r
2019-07-25,125800\r
2019-08-04,125100\r
2019-08-09,131000\r
2019-08-14,129500\r
2019-08-17,127900\r
2019-08-22,128700\r
2019-08-24,131900\r
2019-08-29,131200\r
2019-09-11,116300\r
2019-09-13,113700\r
2019-09-16,106700\r
2019-09-18,114400\r
2019-10-08,95400\r
2019-10-11,100900\r
2019-10-13,100800\r
2019-12-05,148100\r
2019-12-10,145700\r
2019-12-15,131200\r
2019-12-25,141000\r
2019-12-27,145000\r
2019-12-30,139300\r
2020-01-09,150000\r
2020-01-11,149400\r
2020-01-16,148200\r
2020-01-19,145400\r
2020-02-05,126600\r
2020-02-15,142900\r
2020-02-20,146000\r
2020-02-23,152400\r
2020-03-11,150500\r
2020-03-21,150600\r
2020-03-24,150100\r
2020-03-26,145100\r
2020-04-03,151800\r
2020-04-05,143900\r
2020-04-10,147700\r
2020-05-05,148200\r
2020-05-18,148200\r
2020-05-20,147900\r
2020-05-28,147600\r
2020-05-30,147900\r
2020-06-24,144600\r
2020-07-07,150600\r
2020-07-09,144600\r
2020-07-19,137100\r
2020-07-22,136300\r
2020-07-24,128700\r
2020-07-27,128200\r
2020-08-06,116800\r
2020-09-02,110700\r
2020-09-10,109100\r
2020-09-12,105500\r
2020-09-17,100300\r
2020-09-30,98300\r
2020-10-17,115500\r
2020-11-11,129900\r
2020-11-14,123600\r
2020-11-21,128600\r
2020-11-26,128100\r
2020-11-29,126800\r
2020-12-26,146300\r
2021-01-03,149800\r
2021-01-18,151200\r
2021-02-14,151600\r
2021-02-19,145200\r
2021-02-24,151800\r
2021-02-27,152100\r
2021-03-01,149800\r
2021-03-04,148800\r
2021-03-21,149100\r
2021-03-24,143900\r
2021-03-29,150400\r
2021-03-31,151200\r
2021-04-05,150700\r
2021-04-08,150700\r
2021-04-15,151400\r
2021-04-23,150100\r
2021-05-03,144800\r
2021-05-20,136400\r
2021-05-28,148600\r
2021-05-30,146300\r
2021-06-07,147200\r
2021-06-14,148300\r
2021-07-02,145900\r
2021-07-22,142100\r
2021-08-11,140700\r
2021-08-26,119900\r
2021-08-28,112700\r
2021-09-05,104100\r
2021-09-12,105400\r
2021-09-22,98600\r
2021-09-30,102000\r
2021-10-07,105600\r
2021-10-12,103200\r
2021-10-15,100800\r
2021-10-27,94300\r
2021-11-09,99600\r
2021-11-19,99000\r
2021-12-14,145400\r
2021-12-19,144600\r
2022-01-13,140300\r
2022-01-15,140200\r
2022-01-23,151100\r
2022-01-25,143200\r
2022-02-09,145300\r
2022-03-09,150500\r
2022-03-21,151500\r
2022-04-05,148500\r
2022-04-10,149300\r
2022-05-08,148500\r
2022-05-10,150800\r
2022-05-15,135400\r
2022-05-28,144500\r
2022-06-17,146000\r
2022-07-02,147300\r
2022-07-12,146700\r
2022-07-14,147300\r
2022-07-17,146600\r
2022-08-01,137600\r
2022-08-03,132200\r
2022-08-11,122000\r
2022-08-28,112900\r
2022-09-05,100200\r
2022-09-10,100300\r
2022-09-15,97000\r
2022-09-20,98200\r
2022-09-22,98000\r
2022-10-02,90900\r
2022-10-05,93200\r
2022-10-07,96900\r
2022-10-15,96800\r
2022-10-17,92300\r
2022-10-30,88500\r
2022-11-06,93000\r
2022-11-11,91000\r
2022-11-16,88000\r
2022-12-21,112200\r
2023-01-10,121000\r
2023-01-18,139600\r
2023-02-02,149400\r
2023-02-04,147200\r
2023-02-09,143800\r
2023-02-12,147400\r
2023-02-14,146000\r
2023-02-17,149500\r
2023-03-09,147800\r
2023-03-16,151300\r
2023-04-05,150100\r
2023-04-20,148300\r
2023-05-05,143900\r
2023-05-28,147100\r
2023-06-24,151800\r
2023-07-07,149700\r
2023-07-14,143200\r
2023-07-17,125300\r
2023-07-22,146800\r
`;export{r as default};
