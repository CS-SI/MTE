const r=`date,value\r
2017-01-03,265900\r
2017-01-13,286600\r
2017-02-22,471300\r
2017-02-25,471800\r
2017-03-07,450600\r
2017-03-17,398800\r
2017-03-27,399800\r
2017-04-03,234700\r
2017-04-06,229400\r
2017-04-23,282600\r
2017-05-03,282500\r
2017-05-16,316600\r
2017-05-23,342000\r
2017-05-26,323000\r
2017-06-02,330500\r
2017-06-05,308800\r
2017-06-12,318900\r
2017-06-15,322200\r
2017-06-22,331300\r
2017-06-25,320400\r
2017-07-02,340000\r
2017-07-05,305300\r
2017-07-07,307700\r
2017-07-10,307700\r
2017-07-12,307700\r
2017-07-17,303300\r
2017-07-22,291100\r
2017-07-27,313800\r
2017-08-04,313900\r
2017-08-06,296000\r
2017-08-11,296600\r
2017-08-14,284400\r
2017-08-19,288800\r
2017-08-21,278600\r
2017-08-24,278600\r
2017-08-26,287900\r
2017-08-29,280300\r
2017-09-08,270900\r
2017-09-10,269800\r
2017-09-13,269800\r
2017-09-20,259400\r
2017-09-23,268300\r
2017-09-28,268300\r
2017-10-03,266200\r
2017-10-05,239600\r
2017-10-08,243800\r
2017-10-10,239800\r
2017-10-13,242600\r
2017-10-15,242600\r
2017-10-18,237100\r
2017-10-25,244600\r
2017-10-28,245300\r
2017-10-30,241400\r
2017-11-07,239900\r
2017-11-14,249800\r
2017-11-17,248300\r
2017-11-19,250300\r
2017-11-22,250300\r
2017-11-24,250300\r
2017-11-27,258300\r
2017-11-29,253200\r
2017-12-24,226900\r
2017-12-27,226900\r
2018-02-02,192100\r
2018-02-10,192200\r
2018-02-12,58900\r
2018-02-25,146400\r
2018-02-27,146400\r
2018-03-02,146400\r
2018-03-14,289900\r
2018-03-19,297300\r
2018-03-22,297300\r
2018-04-01,163900\r
2018-04-18,366900\r
2018-04-21,372700\r
2018-04-23,372700\r
2018-04-26,370100\r
2018-05-06,389100\r
2018-05-11,429100\r
2018-05-18,429100\r
2018-05-21,429100\r
2018-06-20,430500\r
2018-06-22,435400\r
2018-06-25,452100\r
2018-06-27,448700\r
2018-07-02,453500\r
2018-07-07,450800\r
2018-07-10,449700\r
2018-07-12,454500\r
2018-07-15,447100\r
2018-07-17,457200\r
2018-07-20,454300\r
2018-07-22,454400\r
2018-07-25,455700\r
2018-07-27,453900\r
2018-07-30,449300\r
2018-08-01,451300\r
2018-08-04,440800\r
2018-08-06,438200\r
2018-08-11,422200\r
2018-08-16,396900\r
2018-08-19,352100\r
2018-08-21,313400\r
2018-08-26,291200\r
2018-08-31,275800\r
2018-09-03,271100\r
2018-09-08,270300\r
2018-09-10,270700\r
2018-09-13,270700\r
2018-09-20,268800\r
2018-09-23,253500\r
2018-09-25,253500\r
2018-09-28,243200\r
2018-09-30,243200\r
2018-10-03,231200\r
2018-10-05,245300\r
2018-10-23,430800\r
2018-10-25,447300\r
2018-10-30,447300\r
2018-11-04,435800\r
2018-11-24,447000\r
2018-11-27,447000\r
2018-11-29,447000\r
2018-12-27,386200\r
2018-12-29,389200\r
2019-01-01,386200\r
2019-01-03,391800\r
2019-01-11,391800\r
2019-01-16,382300\r
2019-01-23,394100\r
2019-01-28,394100\r
2019-02-12,314800\r
2019-02-15,314900\r
2019-02-17,314900\r
2019-02-20,312800\r
2019-02-22,287800\r
2019-02-25,287700\r
2019-02-27,259000\r
2019-03-12,258300\r
2019-03-22,177800\r
2019-03-24,177000\r
2019-03-27,168400\r
2019-03-29,168400\r
2019-04-01,169200\r
2019-04-08,164900\r
2019-04-13,176700\r
2019-05-06,273600\r
2019-05-11,273600\r
2019-05-13,275500\r
2019-05-16,275400\r
2019-05-23,317600\r
2019-05-31,334900\r
2019-06-02,334500\r
2019-06-12,335300\r
2019-06-17,332100\r
2019-06-22,406400\r
2019-06-25,406400\r
2019-06-27,334100\r
2019-06-30,352900\r
2019-07-02,352900\r
2019-07-05,360400\r
2019-07-07,360400\r
2019-07-10,349400\r
2019-07-12,344800\r
2019-07-15,348000\r
2019-07-17,347700\r
2019-07-22,344800\r
2019-07-25,347600\r
2019-08-01,341900\r
2019-08-04,332100\r
2019-08-09,341100\r
2019-08-11,311300\r
2019-08-14,334600\r
2019-08-16,317700\r
2019-08-21,327300\r
2019-08-24,324500\r
2019-08-26,323300\r
2019-08-29,319100\r
2019-08-31,320600\r
2019-09-03,318400\r
2019-09-05,318400\r
2019-09-13,311300\r
2019-09-15,314000\r
2019-09-18,317300\r
2019-09-20,314900\r
2019-10-08,292700\r
2019-10-13,292700\r
2019-10-25,391800\r
2019-10-30,396300\r
2019-11-04,396300\r
2019-11-09,396300\r
2020-01-01,422100\r
2020-01-06,422100\r
2020-01-11,435700\r
2020-01-16,435700\r
2020-01-18,427500\r
2020-02-05,334600\r
2020-02-07,334600\r
2020-02-15,336100\r
2020-02-20,275100\r
2020-02-22,253100\r
2020-03-01,253100\r
2020-03-08,229500\r
2020-03-11,185400\r
2020-03-13,192500\r
2020-03-18,181100\r
2020-03-21,181100\r
2020-03-28,190000\r
2020-03-31,165400\r
2020-04-05,131400\r
2020-04-07,131400\r
2020-04-10,168900\r
2020-04-12,168900\r
2020-04-15,168900\r
2020-04-25,261400\r
2020-05-05,291000\r
2020-05-07,277000\r
2020-05-17,291300\r
2020-05-20,409700\r
2020-05-22,418100\r
2020-05-25,422600\r
2020-05-27,430900\r
2020-05-30,430900\r
2020-06-19,403000\r
2020-06-21,403000\r
2020-06-24,403000\r
2020-06-26,403000\r
2020-07-01,403000\r
2020-07-04,436200\r
2020-07-09,441100\r
2020-07-11,440600\r
2020-07-14,429200\r
2020-07-19,431600\r
2020-07-21,421400\r
2020-07-24,418000\r
2020-07-26,421500\r
2020-07-29,421500\r
2020-07-31,415200\r
2020-08-03,415200\r
2020-08-05,411900\r
2020-08-08,418300\r
2020-08-10,418400\r
2020-08-15,422100\r
2020-08-20,413400\r
2020-08-23,411800\r
2020-08-25,398900\r
2020-09-02,389100\r
2020-09-04,389700\r
2020-09-07,389700\r
2020-09-12,380800\r
2020-09-14,383500\r
2020-09-17,382300\r
2020-09-19,393600\r
2020-11-11,393900\r
2020-11-18,408200\r
2020-11-21,402000\r
2020-11-23,404000\r
2020-11-26,404000\r
2021-02-11,352000\r
2021-02-14,352000\r
2021-02-19,352000\r
2021-03-23,185400\r
2021-03-26,85000\r
2021-03-28,73100\r
2021-03-31,80900\r
2021-04-02,80900\r
2021-04-05,74200\r
2021-04-07,84500\r
2021-04-17,156400\r
2021-04-20,160100\r
2021-04-22,160100\r
2021-05-27,217500\r
2021-05-30,217500\r
2021-06-11,264900\r
2021-06-14,265300\r
2021-06-16,265200\r
2021-06-19,265200\r
2021-06-21,265200\r
2021-06-26,251700\r
2021-07-01,247500\r
2021-07-09,263200\r
2021-07-19,264400\r
2021-07-21,230800\r
2021-07-26,255300\r
2021-07-29,247000\r
2021-08-05,254800\r
2021-08-13,251600\r
2021-08-18,263000\r
2021-08-20,248800\r
2021-08-23,249900\r
2021-08-25,244800\r
2021-08-28,241500\r
2021-08-30,239400\r
2021-09-04,236700\r
2021-09-07,241700\r
2021-09-12,238100\r
2021-09-14,238100\r
2021-09-17,238100\r
2021-09-22,240200\r
2021-09-24,228900\r
2021-09-29,228900\r
2021-10-07,213600\r
2021-10-12,218100\r
2021-10-14,214700\r
2021-10-17,214700\r
2021-10-24,210400\r
2021-10-27,196600\r
2021-12-18,432300\r
2021-12-21,419100\r
2021-12-23,419100\r
2022-01-05,422300\r
2022-01-12,431700\r
2022-01-15,421900\r
2022-01-17,420500\r
2022-01-22,416400\r
2022-01-25,414500\r
2022-01-27,402600\r
2022-01-30,392900\r
2022-02-01,392900\r
2022-02-06,380900\r
2022-02-09,364200\r
2022-04-17,469400\r
2022-04-27,492700\r
2022-04-30,496200\r
2022-05-07,496200\r
2022-05-15,445400\r
2022-05-17,456300\r
2022-05-20,455400\r
2022-05-22,455400\r
2022-05-27,452600\r
2022-05-30,454200\r
2022-06-01,447600\r
2022-06-04,447600\r
2022-06-06,443900\r
2022-06-11,454200\r
2022-06-14,456900\r
2022-06-16,448900\r
2022-06-19,444700\r
2022-06-29,445500\r
2022-07-01,440900\r
2022-07-04,440900\r
2022-07-06,436800\r
2022-07-11,441600\r
2022-07-14,441800\r
2022-07-16,445900\r
2022-07-19,443300\r
2022-07-21,438500\r
2022-07-24,432700\r
2022-07-26,433800\r
2022-07-29,435800\r
2022-07-31,434600\r
2022-08-03,430100\r
2022-08-05,429900\r
2022-08-08,424400\r
2022-08-10,424900\r
2022-08-13,421600\r
2022-08-15,423800\r
2022-08-20,419800\r
2022-08-23,415000\r
2022-08-28,409800\r
2022-08-30,409800\r
2022-09-02,381300\r
2022-09-19,399600\r
2022-09-22,399600\r
2022-10-02,396500\r
2022-10-04,399600\r
2022-10-07,399600\r
2022-10-09,399600\r
2022-10-12,399600\r
2022-11-01,380100\r
2022-11-06,381800\r
2022-11-08,381000\r
2022-11-11,381000\r
2022-12-06,381200\r
2023-02-06,433700\r
2023-02-09,433700\r
2023-02-11,425600\r
2023-02-14,425600\r
2023-02-16,383100\r
2023-02-19,428300\r
2023-02-21,428300\r
2023-02-26,444100\r
2023-03-01,442800\r
2023-03-03,443200\r
2023-03-13,441600\r
2023-03-16,456000\r
2023-03-28,467500\r
2023-04-05,478800\r
2023-04-07,468700\r
2023-04-15,478500\r
2023-04-17,477400\r
2023-04-20,473900\r
2023-05-02,466300\r
2023-05-17,447000\r
2023-05-27,447200\r
2023-06-29,482000\r
2023-07-06,483900\r
2023-07-09,346900\r
2023-07-11,182800\r
2023-07-14,206100\r
2023-07-16,201600\r
2023-07-19,201600\r
2023-07-21,433800\r
`;export{r as default};
