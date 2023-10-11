const r=`date,value\r
2017-03-14,14700\r
2017-03-17,14700\r
2017-04-23,63000\r
2017-05-03,63000\r
2017-07-07,58700\r
2017-07-12,58700\r
2017-07-17,58700\r
2017-08-21,68500\r
2017-08-24,67200\r
2017-08-26,81100\r
2017-08-29,81100\r
2017-09-03,79200\r
2017-10-05,84700\r
2017-10-10,84700\r
2017-10-13,84700\r
2017-10-15,87700\r
2017-10-18,87000\r
2017-10-25,87000\r
2017-10-30,82000\r
2018-01-13,48200\r
2018-01-23,153600\r
2018-01-28,152000\r
2018-01-31,152000\r
2018-03-14,1100\r
2018-03-19,1600\r
2018-03-22,1600\r
2018-04-18,46300\r
2018-04-21,46300\r
2018-04-23,46300\r
2018-04-26,46300\r
2018-06-22,87000\r
2018-06-25,87000\r
2018-06-27,94100\r
2018-07-02,94300\r
2018-07-07,102200\r
2018-07-10,102100\r
2018-07-12,102100\r
2018-07-15,102100\r
2018-07-17,109400\r
2018-08-16,137600\r
2018-08-19,137600\r
2018-08-21,137600\r
2018-08-26,150900\r
2018-09-03,150900\r
2018-09-05,151100\r
2018-09-08,143200\r
2018-09-10,160000\r
2018-09-13,160000\r
2018-09-18,157300\r
2018-09-20,163500\r
2018-09-23,159700\r
2018-09-25,164500\r
2018-09-28,164500\r
2018-10-05,158900\r
2018-10-20,159800\r
2018-10-23,159800\r
2018-10-25,159800\r
2018-10-30,159800\r
2019-02-12,3300\r
2019-02-15,3300\r
2019-02-17,4300\r
2019-02-20,4300\r
2019-02-22,4200\r
2019-02-25,4200\r
2019-02-27,4400\r
2019-03-04,4100\r
2019-03-07,6000\r
2019-03-24,76800\r
2019-03-27,76800\r
2019-03-29,77100\r
2019-04-01,77100\r
2019-04-08,77100\r
2019-04-13,67800\r
2019-04-18,52500\r
2019-05-13,51000\r
2019-05-16,51000\r
2019-05-23,51000\r
2019-05-26,51000\r
2019-05-31,42800\r
2019-06-02,43400\r
2019-06-05,43400\r
2019-06-17,42900\r
2019-06-27,42900\r
2019-06-30,42900\r
2019-07-02,42900\r
2019-07-05,32600\r
2019-07-07,33900\r
2019-07-10,33900\r
2019-07-12,58600\r
2019-07-15,59600\r
2019-07-17,59100\r
2019-07-20,59100\r
2019-07-22,59100\r
2019-07-25,59700\r
2019-08-31,78500\r
2019-09-03,78500\r
2019-09-13,78500\r
2019-09-15,92600\r
2019-09-18,92600\r
2019-09-20,94000\r
2019-09-30,89400\r
2019-10-03,90500\r
2019-10-25,111600\r
2019-10-30,111600\r
2019-11-04,111600\r
2019-12-29,160600\r
2020-02-07,116700\r
2020-02-12,116700\r
2020-02-15,116700\r
2020-02-20,116700\r
2020-02-22,116700\r
2020-03-28,33700\r
2020-03-31,33700\r
2020-04-02,34400\r
2020-04-05,34400\r
2020-04-07,34100\r
2020-04-10,34100\r
2020-04-12,41100\r
2020-04-15,41100\r
2020-04-27,46600\r
2020-05-07,54700\r
2020-05-17,54700\r
2020-05-20,54700\r
2020-05-22,54700\r
2020-05-27,48400\r
2020-05-30,48400\r
2020-06-01,48400\r
2020-06-21,91700\r
2020-06-24,91700\r
2020-06-26,91700\r
2020-06-29,91700\r
2020-07-01,107700\r
2020-07-04,107700\r
2020-07-06,107700\r
2020-07-09,107700\r
2020-07-11,112700\r
2020-07-14,112700\r
2020-07-21,135800\r
2020-07-24,135800\r
2020-07-26,135800\r
2020-07-31,135800\r
2020-08-05,126100\r
2020-08-08,127400\r
2020-08-10,127400\r
2020-08-15,127400\r
2020-08-18,117300\r
2020-08-20,126700\r
2020-08-25,130500\r
2020-09-02,130500\r
2020-09-04,129000\r
2020-09-07,135100\r
2020-09-09,135100\r
2020-09-12,134800\r
2020-09-14,141600\r
2020-09-17,141600\r
2020-11-18,173400\r
2020-11-21,173400\r
2020-11-23,173400\r
2020-11-26,173400\r
2020-11-28,173400\r
2020-12-13,152100\r
2020-12-18,152100\r
2020-12-28,152100\r
2021-02-21,52500\r
2021-02-24,52500\r
2021-02-26,186100\r
2021-03-01,186100\r
2021-03-06,178600\r
2021-03-23,113300\r
2021-03-28,113400\r
2021-03-31,113400\r
2021-04-02,93100\r
2021-04-05,93200\r
2021-04-07,87000\r
2021-04-12,84000\r
2021-06-01,133100\r
2021-06-09,132500\r
2021-06-11,132600\r
2021-06-14,118300\r
2021-06-16,139000\r
2021-06-26,155700\r
2021-09-24,163700\r
2021-10-14,177800\r
2021-10-17,177800\r
2021-10-19,184800\r
2021-10-22,184800\r
2021-10-24,180100\r
2021-10-27,189700\r
2021-12-23,24300\r
2022-01-27,9500\r
2022-02-11,7300\r
2022-02-19,7300\r
2022-03-08,17100\r
2022-04-17,66100\r
2022-04-22,66100\r
2022-04-27,81900\r
2022-04-30,81800\r
2022-05-02,81800\r
2022-05-07,81800\r
2022-06-11,112400\r
2022-06-16,116000\r
2022-06-19,116000\r
2022-06-21,116400\r
2022-06-29,120000\r
2022-07-01,123900\r
2022-07-06,115900\r
2022-07-11,121300\r
2022-07-14,121300\r
2022-07-16,118500\r
2022-07-19,126500\r
2022-07-21,120200\r
2022-07-24,126800\r
2022-07-26,124400\r
2022-07-31,128400\r
2022-08-03,127400\r
2022-08-05,127400\r
2022-08-10,127600\r
2022-08-13,127600\r
2022-08-25,132200\r
2022-08-28,132200\r
2022-08-30,132200\r
2022-09-02,132200\r
2022-09-04,132400\r
2022-09-19,139000\r
2022-09-22,139000\r
2022-10-04,150000\r
2022-10-07,150000\r
2022-10-09,154700\r
2022-10-12,154700\r
2022-12-18,131700\r
2022-12-28,121400\r
2023-02-11,15500\r
2023-02-14,15500\r
2023-02-16,49300\r
2023-02-21,48400\r
2023-02-26,53300\r
2023-03-28,78300\r
2023-03-31,78300\r
2023-04-05,78300\r
2023-04-07,78300\r
2023-07-11,183000\r
2023-07-14,183000\r
2023-07-16,183000\r
2023-07-19,183000\r
2023-07-31,168500\r
2023-08-08,168500\r
2023-08-15,178800\r
2023-08-23,178800\r
2023-08-25,178800\r
2023-09-04,189000\r
2023-09-07,189000\r
2023-09-12,189000\r
2023-09-14,189000\r
`;export{r as default};
