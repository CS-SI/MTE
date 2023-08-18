const r=`date,value\r
2017-01-26,216100\r
2017-02-15,219100\r
2017-02-25,223100\r
2017-03-17,236500\r
2017-03-27,237900\r
2017-04-23,255800\r
2017-05-16,239900\r
2017-05-26,251400\r
2017-06-02,254800\r
2017-06-22,263000\r
2017-07-05,239700\r
2017-07-07,258200\r
2017-07-17,248600\r
2017-08-14,208300\r
2017-08-21,226300\r
2017-08-24,198700\r
2017-08-26,209500\r
2017-08-29,179100\r
2017-09-20,193800\r
2017-09-23,183500\r
2017-10-05,194200\r
2017-10-08,174000\r
2017-10-13,172500\r
2017-10-15,179200\r
2017-10-28,164500\r
2017-11-14,167800\r
2017-11-17,165300\r
2017-11-22,160100\r
2017-11-27,162100\r
2017-12-14,173700\r
2017-12-19,168700\r
2018-02-10,195600\r
2018-02-25,206900\r
2018-02-27,229200\r
2018-03-14,222000\r
2018-03-22,229200\r
2018-04-18,275100\r
2018-04-21,262600\r
2018-04-26,266100\r
2018-05-11,274500\r
2018-06-20,291800\r
2018-06-25,293700\r
2018-07-07,280500\r
2018-07-10,298500\r
2018-07-15,280800\r
2018-07-25,276600\r
2018-07-27,290300\r
2018-07-30,288100\r
2018-08-01,273600\r
2018-08-04,272200\r
2018-08-11,274100\r
2018-08-19,283200\r
2018-08-21,275600\r
2018-08-31,254700\r
2018-09-03,262700\r
2018-09-08,272100\r
2018-09-20,268300\r
2018-09-23,257700\r
2018-09-25,267500\r
2018-09-28,259700\r
2018-09-30,247500\r
2018-10-03,256600\r
2018-10-05,260700\r
2018-10-23,256600\r
2018-11-12,263600\r
2018-11-24,261000\r
2018-11-27,261900\r
2018-12-19,260200\r
2019-01-03,263300\r
2019-01-16,271600\r
2019-02-12,276600\r
2019-02-15,271600\r
2019-02-17,270800\r
2019-02-20,266000\r
2019-02-22,282800\r
2019-02-25,278600\r
2019-02-27,249700\r
2019-03-12,242500\r
2019-03-22,265400\r
2019-03-24,263300\r
2019-03-27,270700\r
2019-03-29,260200\r
2019-04-13,279500\r
2019-05-01,273400\r
2019-05-13,281800\r
2019-05-31,271800\r
2019-06-02,278600\r
2019-06-17,265300\r
2019-06-27,288600\r
2019-06-30,274700\r
2019-07-05,285800\r
2019-07-10,281000\r
2019-07-12,276600\r
2019-07-15,290600\r
2019-07-25,282000\r
2019-08-04,268900\r
2019-08-09,255600\r
2019-08-14,252600\r
2019-08-24,239300\r
2019-08-29,241100\r
2019-09-03,228400\r
2019-09-13,230700\r
2019-09-15,205200\r
2019-09-20,221200\r
2019-10-08,192100\r
2019-10-13,194500\r
2019-10-25,197500\r
2020-01-06,247100\r
2020-01-11,241900\r
2020-01-16,239200\r
2020-02-02,269100\r
2020-02-05,267600\r
2020-02-20,271400\r
2020-02-22,273000\r
2020-03-18,281300\r
2020-03-21,271100\r
2020-03-28,295700\r
2020-04-05,261900\r
2020-04-10,287000\r
2020-04-15,280200\r
2020-05-05,275100\r
2020-05-17,277300\r
2020-05-20,290000\r
2020-05-22,279400\r
2020-05-25,275500\r
2020-05-27,273100\r
2020-07-19,284300\r
2020-07-21,276600\r
2020-07-24,275000\r
2020-07-29,278100\r
2020-07-31,261700\r
2020-08-05,264200\r
2020-08-08,273200\r
2020-08-10,249500\r
2020-08-15,262600\r
2020-08-20,237600\r
2020-08-25,244500\r
2020-09-02,245000\r
2020-09-04,255400\r
2020-09-07,240000\r
2020-09-12,222200\r
2020-09-14,241200\r
2020-09-17,221500\r
2020-09-19,231800\r
2020-11-08,219800\r
2020-11-18,208400\r
2021-02-06,286500\r
2021-02-14,288400\r
2021-02-19,277400\r
2021-02-24,287100\r
2021-03-01,271100\r
2021-03-23,280300\r
2021-03-26,297500\r
2021-03-28,281900\r
2021-03-31,288200\r
2021-04-07,283600\r
2021-04-15,294900\r
2021-05-27,284200\r
2021-05-30,283000\r
2021-06-16,286400\r
2021-07-11,300900\r
2021-07-29,284300\r
2021-08-10,287300\r
2021-08-20,284200\r
2021-08-23,272900\r
2021-08-30,272500\r
2021-09-12,250800\r
2021-09-17,242600\r
2021-09-22,245600\r
2021-09-24,245900\r
2021-10-12,248700\r
2021-10-14,235200\r
2021-10-17,216500\r
2021-10-24,225200\r
2021-10-27,229200\r
2021-12-16,232700\r
2021-12-18,239400\r
2021-12-21,239300\r
2021-12-23,222200\r
2022-01-02,245200\r
2022-01-15,275000\r
2022-01-22,274100\r
2022-01-25,258000\r
2022-02-09,271000\r
2022-02-26,285200\r
2022-03-23,288200\r
2022-03-26,278700\r
2022-04-05,293400\r
2022-04-17,292000\r
2022-05-07,285000\r
2022-05-17,285900\r
2022-06-01,288400\r
2022-06-09,297800\r
2022-06-16,290500\r
2022-07-11,288800\r
2022-07-14,278600\r
2022-07-16,283500\r
2022-07-19,282300\r
2022-07-21,263800\r
2022-07-26,286700\r
2022-07-31,265100\r
2022-08-05,264500\r
2022-08-08,246200\r
2022-08-10,253500\r
2022-08-13,235900\r
2022-08-15,258100\r
2022-08-30,228300\r
2022-09-04,234400\r
2022-09-12,195400\r
2022-09-19,216900\r
2022-09-22,192700\r
2022-10-04,217900\r
2022-10-09,208000\r
2022-10-12,191300\r
2022-10-22,179700\r
2022-10-24,196900\r
2022-11-06,198100\r
2022-11-11,173000\r
2022-11-13,194900\r
2022-11-16,187500\r
2022-12-28,188500\r
2023-01-10,198200\r
2023-02-04,206900\r
2023-02-06,207500\r
2023-02-09,192700\r
2023-02-11,214300\r
2023-02-14,208800\r
2023-02-16,214600\r
2023-02-19,191700\r
2023-02-21,229700\r
2023-02-26,216000\r
2023-03-01,214600\r
2023-03-16,217500\r
2023-03-28,227600\r
2023-04-05,218300\r
2023-04-07,228800\r
2023-05-02,238100\r
2023-05-17,230600\r
2023-05-27,237300\r
2023-06-24,241000\r
2023-07-11,157100\r
2023-07-14,182800\r
2023-07-16,197000\r
2023-07-19,147000\r
`;export{r as default};
