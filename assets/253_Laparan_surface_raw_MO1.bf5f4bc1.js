const r=`date,value\r
2017-02-15,2200\r
2017-02-22,700\r
2017-02-25,1500\r
2017-03-17,165000\r
2017-04-03,50300\r
2017-04-06,86900\r
2017-04-16,164700\r
2017-04-23,178400\r
2017-05-16,243600\r
2017-06-02,266500\r
2017-06-12,258500\r
2017-06-15,234600\r
2017-06-22,284400\r
2017-07-05,290300\r
2017-07-12,292800\r
2017-07-27,306500\r
2017-08-04,284800\r
2017-08-14,269100\r
2017-08-21,227000\r
2017-08-24,196600\r
2017-08-26,178600\r
2017-09-08,171900\r
2017-09-13,172400\r
2017-09-20,221600\r
2017-09-23,216000\r
2017-09-28,207300\r
2017-10-05,217900\r
2017-10-08,226700\r
2017-10-10,238000\r
2017-10-13,225700\r
2017-10-15,228000\r
2017-10-25,241500\r
2017-10-28,243600\r
2018-02-15,1200\r
2018-03-02,1100\r
2018-03-14,3300\r
2018-03-19,3600\r
2018-04-01,1500\r
2018-04-21,205700\r
2018-05-11,317600\r
2018-06-17,332000\r
2018-06-25,196000\r
2018-06-27,327600\r
2018-07-07,321100\r
2018-07-25,309100\r
2018-07-27,301500\r
2018-08-01,302800\r
2018-08-26,307400\r
2018-09-03,293100\r
2018-09-08,299300\r
2018-09-13,296100\r
2018-09-18,290700\r
2018-09-20,272700\r
2018-09-23,271900\r
2018-09-25,264000\r
2018-09-28,258400\r
2018-09-30,252900\r
2018-10-03,264000\r
2018-10-05,244800\r
2018-10-13,248900\r
2018-10-23,285700\r
2018-10-25,276600\r
2019-02-15,15900\r
2019-02-20,16900\r
2019-02-22,8100\r
2019-02-25,25200\r
2019-02-27,60000\r
2019-03-02,28900\r
2019-03-12,144100\r
2019-03-14,157300\r
2019-03-22,111100\r
2019-03-27,107000\r
2019-03-29,115600\r
2019-04-13,132400\r
2019-04-28,265000\r
2019-05-01,241600\r
2019-05-06,249300\r
2019-05-13,271600\r
2019-05-16,280200\r
2019-05-31,290500\r
2019-06-17,302900\r
2019-06-22,303000\r
2019-06-27,299300\r
2019-07-12,312400\r
2019-07-15,250400\r
2019-07-22,287000\r
2019-07-25,252700\r
2019-08-09,223000\r
2019-08-16,206700\r
2019-08-24,237600\r
2019-09-03,208400\r
2019-09-28,235900\r
2019-09-30,230300\r
2019-10-03,252200\r
2019-10-05,238700\r
2019-10-08,238500\r
2019-10-13,241200\r
2019-10-25,294200\r
2019-11-04,308700\r
2020-02-15,219400\r
2020-02-20,197800\r
2020-02-22,174400\r
2020-03-08,180600\r
2020-03-11,185000\r
2020-03-21,223600\r
2020-04-15,206600\r
2020-05-05,293900\r
2020-05-07,283100\r
2020-05-20,269600\r
2020-05-22,277600\r
2020-05-27,296500\r
2020-06-21,323000\r
2020-06-24,242100\r
2020-06-26,320100\r
2020-07-01,319700\r
2020-07-04,157900\r
2020-07-16,321100\r
2020-07-19,319900\r
2020-07-26,323900\r
2020-07-31,320600\r
2020-08-05,260400\r
2020-08-08,255900\r
2020-08-10,230400\r
2020-08-13,230000\r
2020-08-20,217600\r
2020-08-25,193300\r
2020-09-04,200100\r
2020-09-12,204300\r
2020-09-14,206200\r
2020-10-17,317800\r
2020-11-01,46700\r
2021-02-14,7100\r
2021-02-19,161100\r
2021-03-01,192400\r
2021-03-13,152000\r
2021-03-23,83700\r
2021-03-28,119600\r
2021-03-31,147300\r
2021-04-05,175300\r
2021-04-15,142600\r
2021-05-20,304900\r
2021-06-09,297200\r
2021-07-09,306200\r
2021-07-11,327200\r
2021-07-19,319000\r
2021-07-21,327800\r
2021-08-10,324800\r
2021-08-13,315400\r
2021-08-15,298200\r
2021-08-18,266200\r
2021-08-20,260300\r
2021-08-25,256800\r
2021-08-28,213800\r
2021-08-30,209100\r
2021-09-22,184100\r
2021-10-07,154900\r
2021-10-09,152500\r
2021-10-12,156000\r
2021-10-14,158900\r
2021-10-17,164900\r
2021-10-22,161600\r
2021-10-27,152700\r
2022-02-24,1800\r
2022-03-01,1500\r
2022-03-03,1800\r
2022-03-23,142200\r
2022-03-26,141700\r
2022-04-05,110100\r
2022-04-10,138500\r
2022-04-17,203500\r
2022-04-25,204600\r
2022-05-10,228700\r
2022-05-12,255800\r
2022-05-17,302700\r
2022-05-27,315900\r
2022-05-30,317400\r
2022-06-01,316300\r
2022-06-19,262400\r
2022-06-29,250800\r
2022-07-11,265600\r
2022-07-14,242100\r
2022-07-16,263300\r
2022-07-19,241100\r
2022-07-21,263300\r
2022-07-31,276200\r
2022-08-03,252100\r
2022-08-05,240100\r
2022-08-08,226200\r
2022-08-10,224500\r
2022-08-20,179500\r
2022-08-23,172600\r
2022-08-28,177800\r
2022-09-04,174800\r
2022-09-22,118500\r
2022-10-02,121800\r
2022-10-04,134600\r
2022-10-09,159400\r
2022-10-12,128100\r
2022-11-01,167300\r
2023-02-14,3500\r
2023-02-19,2900\r
2023-03-06,600\r
2023-03-16,222300\r
2023-03-28,253400\r
2023-04-07,280700\r
2023-04-17,301000\r
2023-05-02,327500\r
2023-06-16,330900\r
2023-07-26,323000\r
2023-07-31,321100\r
2023-08-08,311800\r
2023-08-10,316900\r
2023-08-13,301000\r
2023-08-15,275500\r
2023-08-20,260000\r
2023-08-23,235000\r
2023-09-14,215700\r
2023-09-17,188900\r
2023-09-19,187700\r
2023-09-24,174300\r
2023-09-27,161500\r
2023-09-29,145000\r
2023-10-02,123100\r
2023-10-04,115600\r
2023-10-07,115600\r
`;export{r as default};
