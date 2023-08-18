const r=`date,value\r
2017-01-03,118200\r
2017-02-15,128200\r
2017-02-25,128300\r
2017-03-14,135100\r
2017-03-17,124400\r
2017-03-27,125900\r
2017-04-03,134500\r
2017-04-06,147100\r
2017-04-23,122800\r
2017-05-16,147000\r
2017-05-23,139100\r
2017-06-02,123600\r
2017-06-15,136200\r
2017-06-22,125600\r
2017-06-25,111800\r
2017-07-05,111400\r
2017-07-07,123300\r
2017-08-14,126600\r
2017-08-19,122800\r
2017-08-21,121200\r
2017-08-24,130300\r
2017-08-26,125200\r
2017-08-29,129000\r
2017-09-20,123700\r
2017-09-23,143100\r
2017-10-05,123800\r
2017-10-15,123000\r
2017-10-28,119000\r
2017-10-30,122700\r
2017-11-14,127200\r
2017-11-17,119100\r
2017-11-19,124100\r
2017-11-22,116900\r
2017-11-27,119100\r
2017-11-29,104600\r
2017-12-12,15500\r
2017-12-24,93200\r
2018-01-28,142900\r
2018-02-25,117500\r
2018-03-22,124200\r
2018-04-06,130700\r
2018-04-18,143900\r
2018-04-21,137700\r
2018-04-26,132600\r
2018-05-11,123200\r
2018-05-26,131200\r
2018-06-20,101100\r
2018-06-22,124500\r
2018-06-25,110000\r
2018-06-27,112200\r
2018-07-12,101400\r
2018-07-15,123100\r
2018-07-27,126000\r
2018-07-30,114500\r
2018-08-11,123000\r
2018-08-19,116400\r
2018-08-26,114500\r
2018-09-03,114300\r
2018-09-08,124300\r
2018-09-10,126100\r
2018-09-18,115000\r
2018-09-20,124100\r
2018-09-25,124400\r
2018-09-28,120600\r
2018-10-05,125200\r
2018-10-13,124800\r
2018-10-20,121100\r
2018-10-23,115500\r
2018-10-25,118000\r
2018-11-14,118100\r
2018-11-22,118600\r
2018-12-19,125400\r
2018-12-27,122400\r
2018-12-29,116300\r
2019-01-01,109900\r
2019-01-03,116100\r
2019-01-06,127900\r
2019-02-12,16500\r
2019-02-17,15000\r
2019-02-22,16500\r
2019-02-25,84600\r
2019-02-27,116300\r
2019-03-12,136900\r
2019-03-22,110500\r
2019-03-24,117500\r
2019-03-27,112700\r
2019-04-01,125300\r
2019-04-13,123700\r
2019-05-13,125100\r
2019-05-23,126400\r
2019-05-31,132200\r
2019-06-02,127800\r
2019-06-17,113300\r
2019-06-27,119200\r
2019-06-30,129400\r
2019-07-02,141600\r
2019-07-05,124200\r
2019-07-07,116300\r
2019-07-10,108600\r
2019-07-22,121100\r
2019-08-04,111800\r
2019-08-14,117000\r
2019-08-16,71800\r
2019-08-24,109000\r
2019-08-29,100000\r
2019-08-31,101300\r
2019-09-03,102200\r
2019-09-13,111000\r
2019-09-15,118100\r
2019-09-18,132200\r
2019-09-20,116900\r
2019-12-29,115300\r
2020-01-06,109400\r
2020-01-16,114700\r
2020-02-05,124900\r
2020-02-07,119100\r
2020-02-12,127200\r
2020-02-15,107600\r
2020-02-20,117900\r
2020-02-22,110600\r
2020-03-21,116400\r
2020-03-28,116500\r
2020-03-31,97900\r
2020-04-05,111600\r
2020-04-12,136800\r
2020-04-15,117600\r
2020-05-07,108600\r
2020-05-20,123800\r
2020-05-25,125900\r
2020-05-27,108400\r
2020-05-30,123600\r
2020-06-21,132400\r
2020-06-24,135400\r
2020-06-26,135200\r
2020-07-04,133700\r
2020-07-09,138700\r
2020-07-19,121900\r
2020-07-21,110900\r
2020-07-29,113000\r
2020-07-31,105700\r
2020-08-05,107700\r
2020-08-08,118900\r
2020-08-10,130300\r
2020-08-15,110000\r
2020-08-20,120300\r
2020-08-25,111100\r
2020-09-04,107200\r
2020-09-14,100000\r
2020-09-17,110600\r
2020-11-06,110200\r
2020-11-18,111900\r
2020-11-21,110800\r
2020-11-23,120100\r
2020-12-18,126100\r
2021-01-10,100\r
2021-02-14,112700\r
2021-02-21,116300\r
2021-02-24,120100\r
2021-02-26,120900\r
2021-03-01,114900\r
2021-03-23,125000\r
2021-03-28,130500\r
2021-03-31,125700\r
2021-04-02,139900\r
2021-04-05,129000\r
2021-04-07,125500\r
2021-04-15,135500\r
2021-05-27,120300\r
2021-06-14,121800\r
2021-06-16,124200\r
2021-06-26,114500\r
2021-07-11,118200\r
2021-07-19,114400\r
2021-07-21,118300\r
2021-07-29,127600\r
2021-08-20,130000\r
2021-08-28,119500\r
2021-09-22,115800\r
2021-09-24,115500\r
2021-10-07,119400\r
2021-10-12,121100\r
2021-10-14,120200\r
2021-10-17,112500\r
2021-10-24,114800\r
2021-10-27,117800\r
2021-12-16,120200\r
2021-12-18,118700\r
2021-12-21,121600\r
2021-12-23,122500\r
2022-01-12,113100\r
2022-01-15,116700\r
2022-01-27,102000\r
2022-01-30,97200\r
2022-02-09,125700\r
2022-02-11,126700\r
2022-02-19,139600\r
2022-03-06,120300\r
2022-03-08,123800\r
2022-03-23,117800\r
2022-03-26,123800\r
2022-04-10,123000\r
2022-04-15,118400\r
2022-04-17,130900\r
2022-04-27,130800\r
2022-04-30,120000\r
2022-05-10,141500\r
2022-05-17,119300\r
2022-05-30,109500\r
2022-06-01,130500\r
2022-06-04,123500\r
2022-06-11,117900\r
2022-06-14,116500\r
2022-06-19,122600\r
2022-06-29,127400\r
2022-07-01,134500\r
2022-07-04,121700\r
2022-07-06,115300\r
2022-07-11,106300\r
2022-07-14,125700\r
2022-07-16,111300\r
2022-07-19,113400\r
2022-07-21,107100\r
2022-07-24,115600\r
2022-07-26,117000\r
2022-07-31,119400\r
2022-08-03,121500\r
2022-08-08,109500\r
2022-08-10,112900\r
2022-08-13,116400\r
2022-08-25,120500\r
2022-08-28,116600\r
2022-09-02,126400\r
2022-09-12,118300\r
2022-09-19,120800\r
2022-09-22,126500\r
2022-10-04,114600\r
2022-10-09,117400\r
2022-10-12,120300\r
2022-10-22,118800\r
2022-11-11,116500\r
2023-02-14,6400\r
2023-02-16,7700\r
2023-03-06,124100\r
2023-03-13,128700\r
2023-03-16,121800\r
2023-04-05,119100\r
2023-04-30,136800\r
2023-05-02,131100\r
2023-05-17,130900\r
2023-05-25,126300\r
2023-05-27,117900\r
2023-06-14,119900\r
2023-06-24,123100\r
2023-07-04,135100\r
2023-07-06,135300\r
2023-07-09,127800\r
2023-07-14,123600\r
2023-07-19,124000\r
`;export{r as default};
