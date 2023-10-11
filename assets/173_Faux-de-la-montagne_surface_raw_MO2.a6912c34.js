const n=`date,value\r
2017-02-15,258200\r
2017-02-22,258200\r
2017-02-25,281200\r
2017-03-07,279200\r
2017-03-17,279000\r
2017-03-27,285000\r
2017-04-03,283400\r
2017-04-06,285900\r
2017-05-16,318300\r
2017-05-23,318300\r
2017-05-26,318300\r
2017-06-02,274700\r
2017-06-05,274700\r
2017-06-25,272600\r
2017-07-02,289600\r
2017-07-05,290000\r
2017-07-07,269900\r
2017-07-12,269900\r
2017-08-14,295900\r
2017-08-19,295900\r
2017-08-21,295900\r
2017-08-24,296200\r
2017-08-29,293000\r
2017-09-03,293300\r
2017-11-17,268600\r
2017-11-19,262000\r
2017-11-22,271400\r
2017-11-27,264600\r
2017-11-29,276800\r
2017-12-07,261000\r
2018-02-25,265300\r
2018-02-27,265300\r
2018-04-06,287200\r
2018-04-16,304500\r
2018-04-18,304400\r
2018-04-21,322100\r
2018-04-23,322100\r
2018-04-26,302900\r
2018-05-06,298600\r
2018-05-08,291600\r
2018-05-11,297800\r
2018-05-13,297800\r
2018-05-18,272900\r
2018-05-21,272900\r
2018-06-20,289600\r
2018-06-22,289600\r
2018-06-25,293000\r
2018-06-27,293000\r
2018-07-02,295200\r
2018-07-07,287200\r
2018-07-10,287700\r
2018-07-15,286300\r
2018-07-17,286300\r
2018-07-25,289200\r
2018-08-19,289700\r
2018-08-21,289700\r
2018-08-26,289700\r
2018-09-03,282100\r
2018-09-05,282100\r
2018-09-08,306300\r
2018-09-10,306300\r
2018-09-13,299000\r
2018-09-18,300600\r
2018-10-13,293200\r
2018-10-18,310800\r
2018-10-20,310800\r
2018-10-23,289300\r
2018-10-25,309400\r
2018-10-30,280600\r
2019-02-15,257100\r
2019-02-17,257100\r
2019-02-20,257100\r
2019-02-22,257100\r
2019-02-25,268100\r
2019-02-27,268100\r
2019-03-12,263600\r
2019-03-22,261200\r
2019-03-24,261200\r
2019-03-27,274400\r
2019-03-29,274400\r
2019-04-01,264900\r
2019-05-01,279800\r
2019-05-06,287400\r
2019-05-13,287400\r
2019-05-16,271800\r
2019-05-23,268800\r
2019-05-31,308000\r
2019-06-02,300800\r
2019-06-30,311600\r
2019-07-02,311600\r
2019-07-05,309800\r
2019-07-07,309800\r
2019-07-10,311900\r
2019-07-15,315000\r
2019-07-17,307700\r
2019-07-20,307700\r
2019-07-22,327300\r
2019-07-25,307900\r
2019-08-04,303200\r
2019-08-09,300700\r
2019-08-14,292700\r
2019-08-16,292700\r
2019-08-21,307800\r
2019-08-24,301900\r
2019-08-26,303500\r
2019-08-29,302900\r
2019-08-31,303200\r
2019-09-03,300500\r
2019-09-13,292700\r
2019-09-15,292900\r
2019-09-18,292900\r
2019-09-20,292700\r
2019-11-22,260200\r
2019-11-24,260200\r
2019-12-02,260200\r
2019-12-04,260200\r
2020-01-06,254100\r
2020-01-11,254100\r
2020-01-16,265300\r
2020-01-18,265300\r
2020-01-21,262600\r
2020-02-05,269400\r
2020-02-15,238500\r
2020-02-20,272800\r
2020-02-22,272800\r
2020-03-21,289600\r
2020-03-23,289600\r
2020-03-26,292100\r
2020-03-28,292100\r
2020-03-31,273000\r
2020-04-02,273000\r
2020-04-05,269500\r
2020-04-07,268100\r
2020-04-10,266200\r
2020-04-12,262500\r
2020-04-15,283600\r
2020-05-20,303200\r
2020-05-22,303200\r
2020-05-25,321300\r
2020-05-27,321300\r
2020-05-30,306200\r
2020-06-01,306200\r
2020-07-04,310200\r
2020-07-09,331300\r
2020-07-11,331300\r
2020-07-14,321300\r
2020-07-19,321000\r
2020-07-21,309500\r
2020-07-24,309500\r
2020-07-29,300000\r
2020-07-31,299900\r
2020-08-05,281800\r
2020-08-08,309100\r
2020-08-10,309800\r
2020-08-15,309500\r
2020-08-20,309500\r
2020-09-07,305100\r
2020-09-09,305100\r
2020-09-12,326500\r
2020-09-14,326500\r
2020-09-17,293900\r
2020-11-06,263000\r
2020-11-08,263000\r
2020-11-11,265600\r
2020-11-18,265600\r
2020-11-21,258800\r
2020-11-23,258300\r
2020-11-28,257300\r
2021-01-10,196500\r
2021-02-14,257000\r
2021-02-19,280700\r
2021-02-21,280700\r
2021-02-24,267800\r
2021-02-26,292800\r
2021-03-01,277600\r
2021-03-06,290400\r
2021-03-31,289300\r
2021-04-02,289300\r
2021-04-05,289300\r
2021-04-07,289300\r
2021-04-15,291100\r
2021-04-17,291100\r
2021-04-22,291100\r
2021-06-14,278100\r
2021-06-16,278100\r
2021-07-19,287300\r
2021-07-21,287300\r
2021-07-29,297400\r
2021-09-22,253900\r
2021-09-24,253900\r
2021-09-27,253900\r
2021-10-02,253900\r
2021-10-12,261400\r
2021-10-14,261400\r
2021-10-17,261400\r
2021-10-19,261400\r
2021-10-22,261400\r
2021-10-27,254600\r
2021-11-06,257200\r
2021-12-16,256400\r
2021-12-18,256400\r
2021-12-21,273700\r
2021-12-23,273700\r
2022-01-15,241600\r
2022-01-17,241600\r
2022-01-22,241600\r
2022-01-25,256800\r
2022-01-27,253800\r
2022-01-30,253800\r
2022-02-09,257500\r
2022-02-11,257500\r
2022-02-19,257500\r
2022-03-06,259700\r
2022-03-08,259700\r
2022-03-26,268800\r
2022-04-10,274500\r
2022-04-15,294400\r
2022-04-17,294400\r
2022-04-22,282800\r
2022-05-30,289700\r
2022-06-01,289700\r
2022-06-04,289700\r
2022-06-06,289700\r
2022-06-19,305700\r
2022-06-21,305700\r
2022-06-29,301200\r
2022-07-01,287000\r
2022-07-04,287000\r
2022-07-06,287000\r
2022-07-14,288900\r
2022-07-16,288900\r
2022-07-19,289800\r
2022-07-21,289800\r
2022-07-24,283200\r
2022-07-26,285700\r
2022-07-31,283400\r
2022-08-03,288900\r
2022-08-08,286700\r
2022-08-10,286700\r
2022-08-13,278600\r
2022-09-12,263400\r
2022-09-19,263400\r
2022-09-22,286000\r
2022-10-22,279000\r
2022-10-24,267700\r
2022-11-11,261300\r
2022-11-13,261300\r
2022-12-06,249800\r
2022-12-08,249800\r
2022-12-11,249800\r
2022-12-13,249800\r
2023-02-14,265300\r
2023-02-16,265300\r
2023-04-30,295600\r
2023-05-02,295600\r
2023-06-14,279800\r
2023-06-16,279800\r
2023-06-24,291400\r
2023-06-26,290200\r
2023-07-09,298900\r
2023-07-11,298900\r
2023-07-14,312500\r
2023-07-19,293300\r
2023-07-26,272100\r
2023-08-08,282600\r
2023-08-10,282600\r
2023-08-15,282600\r
2023-08-23,283300\r
2023-09-07,257700\r
2023-09-17,257700\r
2023-10-02,277000\r
2023-10-04,277000\r
2023-10-07,283800\r
`;export{n as default};
