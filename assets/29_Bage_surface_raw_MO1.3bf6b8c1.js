const r=`date,value\r
2017-01-03,276900\r
2017-02-22,201600\r
2017-02-25,305300\r
2017-03-14,297200\r
2017-03-17,319500\r
2017-03-27,346700\r
2017-04-06,393700\r
2017-04-23,407700\r
2017-05-16,379600\r
2017-05-26,359800\r
2017-06-25,212800\r
2017-07-05,247200\r
2017-07-07,284600\r
2017-07-17,265700\r
2017-08-04,285000\r
2017-08-14,282900\r
2017-08-19,234600\r
2017-08-21,223200\r
2017-08-24,221700\r
2017-08-26,217200\r
2017-08-29,214500\r
2017-09-20,220000\r
2017-10-05,290000\r
2017-10-10,290200\r
2017-10-13,349700\r
2017-10-15,283700\r
2017-10-25,301000\r
2017-10-28,282900\r
2017-10-30,209400\r
2017-11-17,203100\r
2017-11-19,296000\r
2017-11-22,317900\r
2017-11-27,315800\r
2018-02-02,366800\r
2018-02-25,255800\r
2018-03-14,411000\r
2018-03-19,372000\r
2018-04-06,416000\r
2018-04-18,431100\r
2018-04-21,429300\r
2018-05-06,430500\r
2018-05-11,420700\r
2018-06-22,273400\r
2018-06-25,199700\r
2018-07-02,194100\r
2018-07-10,219600\r
2018-07-15,213600\r
2018-07-20,232800\r
2018-07-25,212000\r
2018-07-30,219900\r
2018-08-01,219100\r
2018-08-06,215200\r
2018-08-11,204800\r
2018-08-19,211500\r
2018-08-21,196900\r
2018-08-26,205700\r
2018-09-08,206800\r
2018-09-10,221100\r
2018-09-20,219700\r
2018-09-23,214000\r
2018-09-28,218800\r
2018-10-05,225700\r
2018-10-20,356700\r
2018-10-23,285200\r
2018-10-25,272400\r
2018-10-30,182100\r
2018-11-22,302500\r
2018-11-29,306600\r
2018-12-27,263100\r
2019-01-03,233700\r
2019-01-16,269800\r
2019-02-12,211400\r
2019-02-15,267900\r
2019-02-17,242200\r
2019-02-20,218600\r
2019-02-22,272200\r
2019-02-25,194500\r
2019-02-27,236200\r
2019-03-22,272700\r
2019-03-24,272400\r
2019-03-27,262400\r
2019-03-29,297500\r
2019-04-01,248100\r
2019-04-13,248300\r
2019-05-01,304500\r
2019-05-06,248200\r
2019-05-13,203500\r
2019-05-16,217600\r
2019-05-23,265000\r
2019-05-31,303900\r
2019-06-02,256800\r
2019-06-17,377200\r
2019-06-27,355300\r
2019-06-30,411500\r
2019-07-05,432200\r
2019-07-10,416200\r
2019-07-12,415500\r
2019-07-22,371100\r
2019-07-25,412000\r
2019-08-04,390000\r
2019-08-09,412100\r
2019-08-14,384900\r
2019-08-16,398400\r
2019-08-24,359900\r
2019-08-29,358800\r
2019-09-03,350900\r
2019-09-05,367400\r
2019-09-13,341400\r
2019-10-08,334900\r
2019-10-25,259900\r
2019-12-02,267700\r
2019-12-29,370000\r
2020-01-06,313800\r
2020-01-16,238200\r
2020-01-18,221600\r
2020-02-05,262000\r
2020-02-15,324300\r
2020-02-20,281100\r
2020-02-22,266600\r
2020-03-13,233900\r
2020-03-18,250200\r
2020-03-21,281700\r
2020-03-28,320400\r
2020-04-05,307000\r
2020-04-10,325100\r
2020-04-12,348800\r
2020-05-07,360300\r
2020-05-17,384000\r
2020-05-22,431300\r
2020-05-25,418700\r
2020-06-19,376600\r
2020-06-21,373500\r
2020-06-24,397800\r
2020-06-26,379500\r
2020-07-04,416600\r
2020-07-09,413500\r
2020-07-11,412600\r
2020-07-19,395800\r
2020-07-24,415700\r
2020-07-26,413500\r
2020-07-29,412800\r
2020-07-31,374200\r
2020-08-05,363700\r
2020-08-08,390400\r
2020-08-15,389700\r
2020-08-20,371500\r
2020-08-25,370300\r
2020-09-02,354800\r
2020-09-04,360100\r
2020-09-14,256500\r
2020-09-17,364200\r
2020-11-08,191300\r
2020-11-11,182900\r
2020-11-18,206300\r
2020-11-21,204800\r
2020-11-23,191100\r
2021-01-10,278600\r
2021-02-24,390700\r
2021-03-01,315400\r
2021-03-23,390100\r
2021-03-28,367500\r
2021-03-31,393200\r
2021-04-02,387600\r
2021-04-15,320000\r
2021-04-17,299700\r
2021-05-27,348600\r
2021-05-30,370000\r
2021-06-16,358000\r
2021-07-01,369800\r
2021-07-11,401000\r
2021-07-19,380800\r
2021-08-10,395400\r
2021-08-20,372700\r
2021-08-28,372300\r
2021-08-30,371900\r
2021-09-14,361800\r
2021-09-22,362100\r
2021-09-24,351300\r
2021-10-07,360000\r
2021-10-12,345900\r
2021-10-14,356400\r
2021-10-17,341300\r
2021-10-24,300900\r
2021-10-27,310900\r
2021-12-16,330000\r
2021-12-18,296100\r
2021-12-21,289100\r
2022-01-15,272300\r
2022-01-17,247400\r
2022-01-22,274400\r
2022-01-25,231800\r
2022-01-27,259900\r
2022-01-30,231900\r
2022-02-09,223100\r
2022-03-01,276900\r
2022-03-23,316200\r
2022-03-26,308400\r
2022-04-05,416800\r
2022-04-15,390900\r
2022-04-17,337900\r
2022-05-17,348400\r
2022-05-27,371400\r
2022-06-01,384200\r
2022-06-06,385500\r
2022-06-11,356700\r
2022-06-19,367800\r
2022-06-29,359600\r
2022-07-06,352700\r
2022-07-11,343800\r
2022-07-14,350000\r
2022-07-16,344800\r
2022-07-19,339600\r
2022-07-21,318800\r
2022-07-24,333400\r
2022-07-26,332800\r
2022-07-31,323700\r
2022-08-03,312400\r
2022-08-05,320300\r
2022-08-08,299600\r
2022-08-10,305900\r
2022-08-13,313100\r
2022-08-28,266200\r
2022-08-30,277500\r
2022-09-04,264300\r
2022-09-12,386500\r
2022-09-19,384800\r
2022-09-22,375500\r
2022-10-04,322400\r
2022-10-09,295300\r
2022-10-22,278000\r
2022-10-24,238200\r
2022-11-06,226600\r
2022-11-11,217300\r
2022-11-16,223800\r
2022-12-06,159400\r
2022-12-28,235400\r
2023-02-04,281300\r
2023-02-06,263900\r
2023-02-11,304700\r
2023-02-14,304900\r
2023-02-16,314600\r
2023-02-19,329700\r
2023-03-01,357900\r
2023-03-16,384200\r
2023-03-28,356800\r
2023-04-05,380900\r
2023-04-07,383000\r
2023-05-02,381000\r
2023-05-30,389100\r
2023-06-16,370300\r
2023-06-24,366700\r
2023-07-06,370500\r
2023-07-09,397800\r
2023-07-11,388000\r
2023-07-14,400500\r
2023-07-16,400200\r
2023-07-31,379000\r
2023-08-08,369900\r
2023-08-13,374800\r
2023-08-15,357400\r
2023-08-20,364100\r
2023-08-23,357700\r
2023-09-04,360300\r
2023-09-07,349500\r
2023-09-14,363000\r
2023-09-24,343500\r
2023-09-27,347500\r
2023-09-29,346500\r
2023-10-02,341700\r
2023-10-07,295100\r
`;export{r as default};
