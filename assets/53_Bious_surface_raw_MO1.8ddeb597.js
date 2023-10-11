const r=`date,value\r
2017-01-19,12600\r
2017-01-26,15900\r
2017-03-10,300\r
2017-03-17,1300\r
2017-03-20,11500\r
2017-04-09,156500\r
2017-04-16,160400\r
2017-04-19,185000\r
2017-04-29,155100\r
2017-05-06,159400\r
2017-05-26,223400\r
2017-05-29,278000\r
2017-06-18,259500\r
2017-07-05,271200\r
2017-08-04,271900\r
2017-08-07,287200\r
2017-08-12,273800\r
2017-08-14,276800\r
2017-08-17,274900\r
2017-08-22,267000\r
2017-08-24,273700\r
2017-09-08,275900\r
2017-09-13,278300\r
2017-09-26,282600\r
2017-09-28,286200\r
2017-10-03,286100\r
2017-10-06,288800\r
2017-10-08,286200\r
2017-10-11,282000\r
2017-10-16,275300\r
2017-10-23,275700\r
2017-10-26,246900\r
2017-10-31,224400\r
2017-11-07,223400\r
2017-11-17,227600\r
2018-01-24,26400\r
2018-01-29,13600\r
2018-01-31,16700\r
2018-02-15,700\r
2018-02-25,700\r
2018-03-30,100\r
2018-04-21,200300\r
2018-04-24,238900\r
2018-05-11,280200\r
2018-06-18,296500\r
2018-06-23,294200\r
2018-06-25,293100\r
2018-07-18,287200\r
2018-07-23,282900\r
2018-08-02,284400\r
2018-08-04,277200\r
2018-08-27,271200\r
2018-09-01,268300\r
2018-09-03,276500\r
2018-09-16,269800\r
2018-09-18,269700\r
2018-09-23,250600\r
2018-09-26,220500\r
2018-09-28,206400\r
2018-10-03,145200\r
2018-10-21,158100\r
2018-10-23,149200\r
2018-10-26,143300\r
2019-01-16,262700\r
2019-02-13,1100\r
2019-02-15,3600\r
2019-02-18,3600\r
2019-02-20,100\r
2019-02-23,2100\r
2019-02-25,3900\r
2019-02-28,2200\r
2019-03-05,900\r
2019-03-15,200\r
2019-03-20,900\r
2019-03-22,1400\r
2019-03-27,2000\r
2019-03-30,2100\r
2019-04-29,220500\r
2019-05-01,204000\r
2019-05-06,189200\r
2019-05-14,221300\r
2019-05-31,243300\r
2019-06-18,278800\r
2019-06-25,267400\r
2019-06-28,267000\r
2019-06-30,263500\r
2019-07-05,267100\r
2019-07-13,276800\r
2019-07-15,282600\r
2019-07-20,281500\r
2019-07-23,278800\r
2019-07-25,282400\r
2019-08-02,278600\r
2019-08-04,262000\r
2019-08-09,275000\r
2019-08-14,276000\r
2019-08-17,280300\r
2019-08-22,275600\r
2019-08-24,280600\r
2019-08-29,280500\r
2019-09-03,255000\r
2019-09-06,249300\r
2019-09-08,210800\r
2019-09-11,249500\r
2019-09-13,184300\r
2019-09-26,57800\r
2019-09-28,79300\r
2019-10-03,102700\r
2019-10-08,99700\r
2019-10-11,95400\r
2019-10-26,208000\r
2020-01-24,8800\r
2020-02-05,251200\r
2020-02-10,262000\r
2020-02-15,275900\r
2020-02-18,274100\r
2020-02-20,271000\r
2020-02-23,277700\r
2020-03-11,235100\r
2020-03-19,239800\r
2020-03-21,208500\r
2020-04-03,145000\r
2020-04-05,140100\r
2020-05-05,267400\r
2020-05-08,254100\r
2020-05-18,285800\r
2020-05-20,271700\r
2020-05-30,271200\r
2020-06-02,277900\r
2020-06-22,274400\r
2020-06-24,273500\r
2020-07-04,263200\r
2020-07-07,270700\r
2020-07-19,274400\r
2020-07-22,281800\r
2020-07-24,271400\r
2020-07-27,277500\r
2020-08-03,263100\r
2020-08-06,268000\r
2020-08-21,273900\r
2020-08-23,269200\r
2020-08-26,272100\r
2020-08-31,273200\r
2020-09-02,254100\r
2020-09-05,236800\r
2020-09-12,192900\r
2020-09-20,206600\r
2020-11-01,276000\r
2020-11-11,267300\r
2021-02-14,17800\r
2021-02-19,227400\r
2021-02-24,275800\r
2021-02-27,269300\r
2021-03-01,278900\r
2021-03-04,261400\r
2021-03-24,189400\r
2021-03-26,153400\r
2021-03-29,184200\r
2021-03-31,186900\r
2021-04-05,227700\r
2021-04-08,213700\r
2021-04-13,193500\r
2021-04-15,170200\r
2021-04-18,154300\r
2021-04-23,139700\r
2021-05-08,191800\r
2021-05-25,270500\r
2021-06-07,275500\r
2021-06-14,253700\r
2021-07-09,273100\r
2021-07-19,271900\r
2021-07-22,278100\r
2021-07-29,279000\r
2021-08-06,279600\r
2021-08-11,283800\r
2021-08-13,278300\r
2021-08-18,279300\r
2021-08-23,283600\r
2021-08-26,283600\r
2021-09-17,187900\r
2021-09-30,174800\r
2021-10-02,188600\r
2021-10-07,190400\r
2021-10-12,190500\r
2021-10-17,208400\r
2021-10-22,187000\r
2021-10-25,197900\r
2021-10-27,173500\r
2022-01-18,32300\r
2022-01-23,16900\r
2022-01-25,26200\r
2022-01-28,7600\r
2022-01-30,13700\r
2022-02-09,4900\r
2022-02-22,2600\r
2022-03-01,300\r
2022-03-09,400\r
2022-04-05,164100\r
2022-04-15,236600\r
2022-04-18,261400\r
2022-04-25,261500\r
2022-05-10,275100\r
2022-05-28,290200\r
2022-06-09,288400\r
2022-06-19,288600\r
2022-07-09,272200\r
2022-07-12,283400\r
2022-07-14,276900\r
2022-07-17,282900\r
2022-07-24,279700\r
2022-07-27,281600\r
2022-08-01,284000\r
2022-08-06,286700\r
2022-08-08,283100\r
2022-08-11,286300\r
2022-09-20,206800\r
2022-09-22,201600\r
2022-10-02,245100\r
2022-10-05,231500\r
2022-10-15,205400\r
2022-11-06,262500\r
2022-11-16,277900\r
2023-01-18,97500\r
2023-02-02,7100\r
2023-02-04,7300\r
2023-02-09,2600\r
2023-02-12,4000\r
2023-02-17,2900\r
2023-02-19,3200\r
2023-03-01,200\r
2023-03-04,300\r
2023-03-06,700\r
2023-04-08,247500\r
2023-04-10,253200\r
2023-04-18,258300\r
2023-05-03,281500\r
2023-05-05,281300\r
2023-05-28,273500\r
2023-06-24,295500\r
2023-07-07,282100\r
2023-07-09,282900\r
2023-07-14,284000\r
2023-07-17,285200\r
2023-07-19,287100\r
2023-08-06,282100\r
2023-08-08,282500\r
2023-08-11,286600\r
2023-08-16,287000\r
2023-08-31,290300\r
2023-09-05,301400\r
2023-09-25,275100\r
2023-09-30,274800\r
2023-10-02,269900\r
2023-10-05,272800\r
2023-10-07,269900\r
`;export{r as default};
