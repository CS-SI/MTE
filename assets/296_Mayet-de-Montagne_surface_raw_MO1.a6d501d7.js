const n=`date,value\r
2017-02-25,132200\r
2017-03-17,123300\r
2017-03-27,145700\r
2017-04-03,142000\r
2017-04-23,151300\r
2017-05-16,165400\r
2017-05-26,150500\r
2017-06-02,108600\r
2017-06-15,140000\r
2017-07-05,136800\r
2017-07-07,162600\r
2017-08-14,164200\r
2017-08-21,151000\r
2017-08-26,143500\r
2017-09-23,140600\r
2017-10-05,135300\r
2017-10-13,150600\r
2017-10-15,140700\r
2017-10-18,149800\r
2017-10-28,140400\r
2017-11-17,127200\r
2017-11-22,135000\r
2017-12-07,134900\r
2018-01-23,136100\r
2018-01-28,143400\r
2018-02-27,137400\r
2018-03-14,125900\r
2018-03-19,124000\r
2018-04-06,112500\r
2018-04-21,142700\r
2018-06-20,138100\r
2018-06-22,140700\r
2018-06-27,159700\r
2018-07-07,150000\r
2018-07-12,150300\r
2018-07-25,153400\r
2018-07-27,156000\r
2018-08-01,152100\r
2018-08-04,156200\r
2018-08-11,148100\r
2018-08-16,161400\r
2018-08-19,162400\r
2018-08-26,159300\r
2018-09-08,163700\r
2018-09-13,154300\r
2018-09-18,148300\r
2018-09-25,149700\r
2018-09-30,149200\r
2018-10-05,139800\r
2018-10-13,146500\r
2018-10-18,143400\r
2018-10-20,143700\r
2018-11-14,139800\r
2018-11-22,140000\r
2018-11-24,140100\r
2018-12-19,121200\r
2018-12-27,129700\r
2019-01-03,129400\r
2019-02-05,124800\r
2019-02-15,126500\r
2019-02-17,123600\r
2019-02-20,149800\r
2019-02-22,120300\r
2019-02-25,147700\r
2019-02-27,130900\r
2019-03-22,125000\r
2019-03-24,130100\r
2019-03-29,122500\r
2019-05-01,130500\r
2019-05-13,148800\r
2019-05-16,151100\r
2019-05-23,147000\r
2019-05-31,150500\r
2019-06-05,156500\r
2019-06-17,154300\r
2019-06-27,156600\r
2019-06-30,150200\r
2019-07-05,170900\r
2019-07-07,162200\r
2019-07-10,167000\r
2019-07-17,162300\r
2019-07-20,163400\r
2019-07-22,159400\r
2019-07-25,168700\r
2019-08-04,165700\r
2019-08-14,168000\r
2019-08-24,169700\r
2019-08-29,160000\r
2019-08-31,156600\r
2019-09-03,169000\r
2019-09-13,167700\r
2019-09-15,158000\r
2019-09-20,162100\r
2019-10-03,159400\r
2019-12-04,90000\r
2019-12-29,112600\r
2020-01-06,129300\r
2020-01-16,131500\r
2020-01-21,129500\r
2020-02-07,125000\r
2020-02-15,129500\r
2020-02-20,117000\r
2020-03-13,124400\r
2020-03-18,136900\r
2020-03-23,155100\r
2020-03-28,135700\r
2020-03-31,145500\r
2020-04-02,129700\r
2020-04-05,137300\r
2020-04-07,126500\r
2020-04-10,145500\r
2020-04-15,155900\r
2020-05-07,103700\r
2020-05-20,154500\r
2020-05-25,152500\r
2020-05-30,160800\r
2020-07-04,159500\r
2020-07-09,161600\r
2020-07-11,161700\r
2020-07-19,175400\r
2020-07-21,170600\r
2020-07-24,172500\r
2020-07-29,169500\r
2020-07-31,163400\r
2020-08-08,160700\r
2020-08-10,152600\r
2020-08-20,156200\r
2020-08-25,159400\r
2020-09-04,160700\r
2020-09-09,158000\r
2020-09-12,158300\r
2020-09-14,152900\r
2020-09-17,159700\r
2020-11-18,140100\r
2020-11-21,144500\r
2020-11-23,137100\r
2020-11-28,132900\r
2021-02-14,104700\r
2021-02-21,133800\r
2021-02-24,135900\r
2021-03-01,134900\r
2021-03-23,143700\r
2021-03-28,146600\r
2021-03-31,132400\r
2021-04-02,139000\r
2021-04-17,134900\r
2021-04-27,147000\r
2021-05-27,137100\r
2021-05-30,155700\r
2021-06-14,148600\r
2021-06-16,159300\r
2021-06-19,157800\r
2021-07-19,151700\r
2021-07-21,142200\r
2021-08-10,153700\r
2021-08-20,147400\r
2021-09-02,154700\r
2021-09-07,153800\r
2021-09-22,143500\r
2021-09-24,142300\r
2021-10-12,142200\r
2021-10-14,137100\r
2021-10-17,146800\r
2021-10-19,133900\r
2021-10-22,133100\r
2021-10-24,122600\r
2021-12-23,119700\r
2022-01-15,132200\r
2022-01-25,138800\r
2022-02-09,129100\r
2022-02-26,136200\r
2022-03-06,138800\r
2022-03-08,138300\r
2022-03-23,130500\r
2022-03-26,118400\r
2022-04-17,143300\r
2022-04-22,141300\r
2022-05-02,150200\r
2022-05-30,151100\r
2022-06-11,145100\r
2022-06-16,150000\r
2022-06-19,158900\r
2022-06-29,133800\r
2022-07-06,141500\r
2022-07-11,156500\r
2022-07-14,153700\r
2022-07-16,161200\r
2022-07-19,164600\r
2022-07-21,151900\r
2022-07-24,159200\r
2022-08-03,163800\r
2022-08-08,161200\r
2022-08-10,153800\r
2022-08-13,162100\r
2022-08-25,160500\r
2022-09-04,157800\r
2022-09-12,152600\r
2022-09-19,145200\r
2022-09-22,153000\r
2022-10-04,153800\r
2022-10-09,148700\r
2022-11-11,141600\r
2022-11-13,144800\r
2022-11-16,14400\r
2022-12-11,138900\r
2023-02-11,120100\r
2023-02-14,150400\r
2023-02-16,140100\r
2023-04-05,136500\r
2023-05-25,138800\r
2023-05-27,135900\r
2023-06-19,167400\r
2023-06-24,137900\r
2023-07-11,150300\r
2023-07-14,134300\r
2023-07-19,107000\r
`;export{n as default};
