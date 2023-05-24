const n=`date,value\r
2017-01-26,136700\r
2017-02-22,151800\r
2017-02-25,156000\r
2017-03-17,156000\r
2017-03-27,158500\r
2017-04-06,160100\r
2017-04-23,158200\r
2017-05-16,155400\r
2017-05-26,157700\r
2017-06-02,159600\r
2017-06-22,167100\r
2017-07-05,162100\r
2017-07-07,165400\r
2017-07-17,162600\r
2017-08-14,155500\r
2017-08-21,163800\r
2017-08-24,151700\r
2017-08-26,152600\r
2017-08-29,139500\r
2017-09-05,142100\r
2017-09-20,151000\r
2017-09-23,150000\r
2017-10-05,149700\r
2017-10-08,140800\r
2017-10-13,146400\r
2017-10-15,148600\r
2017-10-18,135600\r
2017-10-28,135700\r
2017-11-07,130400\r
2017-11-14,133000\r
2017-11-17,136000\r
2017-11-22,132200\r
2017-11-27,129600\r
2017-12-19,135600\r
2018-02-10,145000\r
2018-02-25,147200\r
2018-02-27,158400\r
2018-03-14,151200\r
2018-04-01,141800\r
2018-04-21,164200\r
2018-05-11,172000\r
2018-06-20,171500\r
2018-06-25,174600\r
2018-07-07,163000\r
2018-07-12,170000\r
2018-07-15,165900\r
2018-07-25,168100\r
2018-07-27,175100\r
2018-07-30,175800\r
2018-08-04,161700\r
2018-08-06,175200\r
2018-08-11,166400\r
2018-08-19,172400\r
2018-08-21,167300\r
2018-08-31,156400\r
2018-09-03,158300\r
2018-09-08,167700\r
2018-09-10,157400\r
2018-09-20,164000\r
2018-09-23,161500\r
2018-09-25,166600\r
2018-09-28,165700\r
2018-09-30,157300\r
2018-10-03,160100\r
2018-10-05,165500\r
2018-10-23,151700\r
2018-11-12,150500\r
2018-11-17,148500\r
2018-11-24,147200\r
2018-11-27,147400\r
2018-12-17,146000\r
2018-12-19,142200\r
2019-01-03,144000\r
2019-01-11,148600\r
2019-01-16,155100\r
2019-02-12,159600\r
2019-02-15,161600\r
2019-02-17,158500\r
2019-02-20,156000\r
2019-02-22,165600\r
2019-02-25,170000\r
2019-02-27,148200\r
2019-03-22,160200\r
2019-03-24,153600\r
2019-03-27,162600\r
2019-03-29,152700\r
2019-04-13,166200\r
2019-05-01,163200\r
2019-05-13,168900\r
2019-06-02,162000\r
2019-06-17,154400\r
2019-06-27,172100\r
2019-06-30,166300\r
2019-07-05,168200\r
2019-07-10,169200\r
2019-07-12,167800\r
2019-07-15,178600\r
2019-07-25,171300\r
2019-08-04,167700\r
2019-08-09,164600\r
2019-08-14,165900\r
2019-08-16,159700\r
2019-08-24,171100\r
2019-08-29,160600\r
2019-08-31,152600\r
2019-09-13,163900\r
2019-09-15,156800\r
2019-09-20,162900\r
2019-10-08,154500\r
2019-10-13,161000\r
2019-10-25,149100\r
2019-11-27,144700\r
2019-12-29,150800\r
2020-01-06,155700\r
2020-01-11,155300\r
2020-01-16,151800\r
2020-02-02,161600\r
2020-02-05,158400\r
2020-02-20,157700\r
2020-02-22,157900\r
2020-03-13,135600\r
2020-03-18,167500\r
2020-03-21,158100\r
2020-03-28,172600\r
2020-04-05,156800\r
2020-04-10,170200\r
2020-04-15,164000\r
2020-05-05,164600\r
2020-05-17,158300\r
2020-05-20,172300\r
2020-05-22,165600\r
2020-05-25,166400\r
2020-05-27,160000\r
2020-05-30,166300\r
2020-06-21,156300\r
2020-06-26,176100\r
2020-07-19,174400\r
2020-07-21,166700\r
2020-07-24,167300\r
2020-07-29,168400\r
2020-07-31,158400\r
2020-08-05,162400\r
2020-08-08,171500\r
2020-08-10,153800\r
2020-08-15,161300\r
2020-08-20,151700\r
2020-08-25,158600\r
2020-09-02,155700\r
2020-09-04,162600\r
2020-09-07,160800\r
2020-09-12,149800\r
2020-09-14,163000\r
2020-09-17,158100\r
2020-10-17,147900\r
2020-11-08,143100\r
2020-11-11,138200\r
2020-11-18,132400\r
2020-11-21,141800\r
2021-02-14,165100\r
2021-02-19,154500\r
2021-02-24,162400\r
2021-03-01,155700\r
2021-03-23,160700\r
2021-03-28,165500\r
2021-03-31,169900\r
2021-04-02,172300\r
2021-04-07,165500\r
2021-04-15,175900\r
2021-04-17,163500\r
2021-05-27,170300\r
2021-05-30,171000\r
2021-06-01,174700\r
2021-06-16,169600\r
2021-06-21,169500\r
2021-06-26,159600\r
2021-07-11,181300\r
2021-07-29,176300\r
2021-08-10,175400\r
2021-08-18,168300\r
2021-08-20,173200\r
2021-08-25,161700\r
2021-08-30,167400\r
2021-09-12,167500\r
2021-09-17,155500\r
2021-09-24,162500\r
2021-10-12,160400\r
2021-10-14,152200\r
2021-10-24,146600\r
2021-10-27,147200\r
2021-12-16,142700\r
2021-12-18,145700\r
2021-12-21,142600\r
2022-01-02,145200\r
2022-01-15,153200\r
2022-01-22,151400\r
2022-01-25,147600\r
2022-02-06,168500\r
2022-02-09,159000\r
2022-02-26,168100\r
2022-03-23,169800\r
2022-04-05,178000\r
2022-04-17,176100\r
2022-05-17,176300\r
2022-06-01,176400\r
2022-06-16,177300\r
2022-07-11,177300\r
2022-07-14,176200\r
2022-07-16,172500\r
2022-07-19,174100\r
2022-07-21,166900\r
2022-07-26,173600\r
2022-07-31,168100\r
2022-08-05,163100\r
2022-08-08,160300\r
2022-08-10,162900\r
2022-08-13,151000\r
2022-08-28,159000\r
2022-08-30,159300\r
2022-09-04,161300\r
2022-09-12,146900\r
2022-09-19,153400\r
2022-09-22,146800\r
2022-10-04,153400\r
2022-10-09,151800\r
2022-10-12,137200\r
2022-10-22,137400\r
2022-10-24,144100\r
2022-11-06,141900\r
2022-11-11,131200\r
2022-11-13,143100\r
2022-11-16,140600\r
2022-12-06,143800\r
2022-12-28,136300\r
2023-02-04,148000\r
2023-02-06,152000\r
2023-02-09,138200\r
2023-02-11,153900\r
2023-02-14,150400\r
2023-02-16,155300\r
2023-02-19,147600\r
2023-02-26,153600\r
2023-03-01,153600\r
2023-03-03,163800\r
2023-03-16,157800\r
2023-03-28,166100\r
2023-04-05,156500\r
2023-04-07,164500\r
2023-05-02,155100\r
`;export{n as default};