const r=`date,value\r
2017-04-10,700\r
2017-04-17,700\r
2017-04-20,800\r
2017-04-30,3900\r
2017-05-07,3900\r
2017-05-10,23700\r
2017-05-17,23200\r
2017-05-30,844900\r
2017-06-06,844900\r
2017-06-09,844900\r
2017-07-04,1055200\r
2017-07-06,1055200\r
2017-07-14,1055800\r
2017-08-23,763200\r
2017-08-25,763200\r
2017-08-30,756000\r
2017-09-07,732600\r
2017-09-12,732600\r
2017-09-17,732600\r
2017-09-22,800900\r
2017-09-24,800900\r
2017-09-27,822300\r
2017-09-29,822300\r
2017-10-02,819700\r
2017-10-07,869200\r
2017-10-09,866300\r
2017-10-12,872100\r
2017-10-14,873100\r
2017-10-17,871300\r
2018-04-25,9700\r
2018-04-27,9700\r
2018-04-30,30400\r
2018-05-05,30400\r
2018-06-19,1055800\r
2018-06-21,1055600\r
2018-06-24,1055600\r
2018-06-26,1055600\r
2018-06-29,1059800\r
2018-07-09,862600\r
2018-07-11,982400\r
2018-07-14,934800\r
2018-07-19,871200\r
2018-07-21,823300\r
2018-07-24,823300\r
2018-08-28,880200\r
2018-08-30,880200\r
2018-09-02,885500\r
2018-09-04,885500\r
2018-09-07,885500\r
2018-09-12,828900\r
2018-09-14,822300\r
2018-09-17,822500\r
2018-09-19,822500\r
2018-09-22,897500\r
2018-09-24,898000\r
2018-09-27,934700\r
2018-09-29,935800\r
2018-10-02,935800\r
2018-10-04,914100\r
2018-10-07,914100\r
2019-04-30,9800\r
2019-05-02,20500\r
2019-05-05,20500\r
2019-05-07,20500\r
2019-05-10,130400\r
2019-05-12,130400\r
2019-05-15,104500\r
2019-05-30,796400\r
2019-06-01,774300\r
2019-06-04,783600\r
2019-06-14,652000\r
2019-06-19,1030900\r
2019-06-24,1030900\r
2019-06-26,1030900\r
2019-06-29,1096800\r
2019-07-01,1096800\r
2019-07-04,1095100\r
2019-07-06,1095500\r
2019-07-09,1095500\r
2019-07-14,1093800\r
2019-07-16,998100\r
2019-07-19,989700\r
2019-07-21,990300\r
2019-07-24,903500\r
2019-07-26,903500\r
2019-07-29,904500\r
2019-07-31,864300\r
2019-08-03,867500\r
2019-08-05,857400\r
2019-08-08,862100\r
2019-08-10,844300\r
2019-08-15,869100\r
2019-08-18,865600\r
2019-08-23,894500\r
2019-09-12,893700\r
2019-09-14,893700\r
2019-09-17,919800\r
2019-09-19,920500\r
2019-09-22,920500\r
2019-09-27,918000\r
2019-09-29,953900\r
2019-10-02,953900\r
2019-10-04,951500\r
2019-10-07,951500\r
2020-04-06,200\r
2020-04-09,200\r
2020-04-11,400\r
2020-04-14,100\r
2020-04-16,100\r
2020-04-24,14600\r
2020-04-29,128300\r
2020-05-04,886600\r
2020-05-06,886600\r
2020-05-09,879000\r
2020-05-14,825400\r
2020-05-19,822100\r
2020-05-21,791000\r
2020-05-24,828700\r
2020-05-26,896000\r
2020-05-29,900900\r
2020-05-31,920900\r
2020-06-03,921800\r
2020-06-05,921100\r
2020-07-08,827200\r
2020-07-10,819500\r
2020-07-13,819500\r
2020-07-18,822600\r
2020-07-20,822600\r
2020-07-23,788400\r
2020-07-25,791200\r
2020-07-28,791200\r
2020-07-30,791200\r
2020-08-02,791200\r
2020-08-04,770400\r
2020-08-07,771600\r
2020-08-09,732800\r
2020-08-12,734200\r
2020-08-14,734200\r
2020-08-19,734200\r
2020-08-22,734200\r
2020-08-27,836400\r
2020-09-01,887600\r
2020-09-03,887600\r
2020-09-06,916900\r
2020-09-08,940200\r
2020-09-11,940200\r
2020-09-13,961300\r
2020-09-16,960800\r
2020-09-18,945800\r
2021-03-30,400\r
2021-04-01,400\r
2021-04-04,400\r
2021-04-06,400\r
2021-04-14,700\r
2021-04-16,700\r
2021-04-19,700\r
2021-04-24,1200\r
2021-06-13,884900\r
2021-06-15,884900\r
2021-06-18,919800\r
2021-08-17,832100\r
2021-08-19,832100\r
2021-08-24,818300\r
2021-08-27,818700\r
2021-08-29,752400\r
2021-09-01,757600\r
2021-09-06,757600\r
2021-10-01,800300\r
2021-10-06,800300\r
2021-10-08,800300\r
2021-10-11,915500\r
2022-04-14,100\r
2022-04-16,100\r
2022-04-19,7800\r
2022-04-29,24300\r
2022-05-01,22600\r
2022-05-04,22600\r
2022-05-09,22600\r
2022-05-19,647100\r
2022-05-21,647100\r
2022-07-03,808500\r
2022-07-05,808500\r
2022-07-08,809000\r
2022-07-10,809000\r
2022-07-13,744500\r
2022-07-15,745500\r
2022-07-18,742000\r
2022-07-20,768700\r
2022-07-25,765600\r
2022-07-28,767300\r
2022-08-02,602400\r
2022-08-04,602400\r
2022-08-07,602400\r
2022-08-09,600700\r
2022-08-12,737500\r
2022-08-22,743400\r
2022-09-01,864600\r
2022-09-06,864600\r
2022-09-08,864600\r
2022-09-11,974800\r
2022-09-13,972300\r
2022-09-16,1015700\r
2022-09-18,1015700\r
2022-09-21,1020900\r
2022-09-23,1044100\r
2022-09-26,1044100\r
2022-10-01,1040700\r
2022-10-06,1064400\r
2022-10-11,1078800\r
2022-10-16,1085300\r
2023-04-19,800\r
2023-04-24,8400\r
2023-04-26,8400\r
2023-05-04,598600\r
2023-05-06,598600\r
2023-05-11,598600\r
2023-06-28,984300\r
2023-07-03,1038700\r
2023-07-08,1001100\r
2023-07-10,1042400\r
2023-07-13,1032500\r
2023-07-15,837800\r
2023-07-18,1066100\r
2023-07-20,1063200\r
2023-07-23,1063300\r
`;export{r as default};
