const r=`date,value\r
2017-02-23,398100\r
2017-02-26,392100\r
2017-03-05,400300\r
2017-03-08,396500\r
2017-03-15,401700\r
2017-03-18,401700\r
2017-03-25,401000\r
2017-03-28,408800\r
2017-04-04,408800\r
2017-04-07,410200\r
2017-04-14,413700\r
2017-04-17,413700\r
2017-04-24,413000\r
2017-05-07,430100\r
2017-05-14,423100\r
2017-05-17,423600\r
2017-05-24,426800\r
2017-05-27,436600\r
2017-06-03,435500\r
2017-06-06,435500\r
2017-06-13,431300\r
2017-06-16,437600\r
2017-06-23,429200\r
2017-06-26,436600\r
2017-07-01,420100\r
2017-07-03,413300\r
2017-07-06,414500\r
2017-07-08,408200\r
2017-07-11,411700\r
2017-07-13,404200\r
2017-07-18,402800\r
2017-07-21,396500\r
2017-07-23,382700\r
2017-07-26,388100\r
2017-07-28,374800\r
2017-07-31,358200\r
2017-08-02,349000\r
2017-08-05,351600\r
2017-08-07,335600\r
2017-08-12,328400\r
2017-08-15,312900\r
2017-08-17,300300\r
2017-08-20,293000\r
2017-08-22,284000\r
2017-08-25,279200\r
2017-08-27,270300\r
2017-08-30,258500\r
2017-09-01,251900\r
2017-09-04,250200\r
2017-09-09,246600\r
2017-09-11,232800\r
2017-09-19,181300\r
2017-09-21,171200\r
2017-09-24,171200\r
2017-10-14,147700\r
2017-10-16,147100\r
2017-10-19,150800\r
2017-10-21,147500\r
2017-10-24,147700\r
2017-10-26,144800\r
2017-10-31,140900\r
2017-11-03,143400\r
2017-11-05,142500\r
2018-03-13,409300\r
2018-03-18,409300\r
2018-03-23,408500\r
2018-04-02,412200\r
2018-04-07,412100\r
2018-04-12,412100\r
2018-04-19,415400\r
2018-04-22,419400\r
2018-04-24,417000\r
2018-04-27,419500\r
2018-04-29,422800\r
2018-05-07,428900\r
2018-05-09,428600\r
2018-06-03,428500\r
2018-06-08,428500\r
2018-06-13,428500\r
2018-06-26,427100\r
2018-06-28,427100\r
2018-07-01,429800\r
2018-07-03,429800\r
2018-07-06,430500\r
2018-07-08,425200\r
2018-07-11,441000\r
2018-07-13,441000\r
2018-07-18,441200\r
2018-07-21,437500\r
2018-07-23,421100\r
2018-07-26,421200\r
2018-07-28,423200\r
2018-07-31,425600\r
2018-08-02,425400\r
2018-08-05,425400\r
2018-08-07,423500\r
2018-08-10,418900\r
2018-08-12,418900\r
2018-08-30,386000\r
2018-09-01,384400\r
2018-09-11,340100\r
2018-09-14,338600\r
2018-09-16,338600\r
2018-09-19,338600\r
2018-09-21,338600\r
2018-09-24,333400\r
2018-09-26,316000\r
2018-09-29,306300\r
2018-10-01,306300\r
2018-10-06,310600\r
2018-10-09,302600\r
2018-10-14,294100\r
2018-10-19,294100\r
2018-10-21,317700\r
2018-10-24,308800\r
2018-10-26,318900\r
2019-02-06,382200\r
2019-02-08,382200\r
2019-02-11,382200\r
2019-02-13,382200\r
2019-02-16,356600\r
2019-02-18,356600\r
2019-02-21,356600\r
2019-02-23,357800\r
2019-02-26,357800\r
2019-02-28,410200\r
2019-03-03,389000\r
2019-03-08,410200\r
2019-03-10,410200\r
2019-03-18,406600\r
2019-03-20,417800\r
2019-03-23,396900\r
2019-03-25,396900\r
2019-03-28,405500\r
2019-03-30,399100\r
2019-04-02,399300\r
2019-04-07,371400\r
2019-04-09,415500\r
2019-04-12,415500\r
2019-04-14,398300\r
2019-04-19,406900\r
2019-04-27,406900\r
2019-04-29,406900\r
2019-05-02,392500\r
2019-05-07,385800\r
2019-05-09,428600\r
2019-05-14,428600\r
2019-05-19,428600\r
2019-05-24,415700\r
2019-06-03,433700\r
2019-06-06,433000\r
2019-06-11,433000\r
2019-06-13,427900\r
2019-06-16,288300\r
2019-06-18,444000\r
2019-06-21,437800\r
2019-06-23,437800\r
2019-06-26,442300\r
2019-06-28,437900\r
2019-07-01,437900\r
2019-07-03,430000\r
2019-07-06,430000\r
2019-07-08,429000\r
2019-07-11,429000\r
2019-07-13,421300\r
2019-07-16,425200\r
2019-07-18,425200\r
2019-07-21,418800\r
2019-07-23,393500\r
2019-07-26,382200\r
2019-07-28,382200\r
2019-07-31,369400\r
2019-08-02,352000\r
2019-08-05,354500\r
2019-08-07,359800\r
2019-08-10,351600\r
2019-08-12,344000\r
2019-08-15,345700\r
2019-08-17,339500\r
2019-08-20,334000\r
2019-08-22,334600\r
2019-08-25,315500\r
2019-08-27,323400\r
2019-08-30,323400\r
2019-09-04,289100\r
2019-09-06,277400\r
2019-09-09,256900\r
2019-09-11,212100\r
2019-09-14,212100\r
2019-09-16,212100\r
2019-09-19,212100\r
2019-09-24,210400\r
2019-09-26,195000\r
2019-09-29,185400\r
2019-10-01,184900\r
2019-10-04,183800\r
2019-10-06,183800\r
2019-10-09,180000\r
2019-10-11,180000\r
2019-10-14,165600\r
2019-10-16,156800\r
2019-10-19,149200\r
2019-10-26,148300\r
2019-10-29,145300\r
2019-11-05,147500\r
2019-11-13,151600\r
2019-11-20,263500\r
2019-11-28,263500\r
2019-11-30,273900\r
2020-02-06,397900\r
2020-02-08,397900\r
2020-02-11,397900\r
2020-02-13,397900\r
2020-02-16,397900\r
2020-02-18,397900\r
2020-02-21,421100\r
2020-02-26,420400\r
2020-02-28,404800\r
2020-03-04,404800\r
2020-03-07,404800\r
2020-03-24,422200\r
2020-03-29,422200\r
2020-04-01,429700\r
2020-04-03,429700\r
2020-04-06,420300\r
2020-04-08,430400\r
2020-04-11,430600\r
2020-04-23,432000\r
2020-04-26,422500\r
2020-05-06,439600\r
2020-05-11,439600\r
2020-05-21,443800\r
2020-05-23,442500\r
2020-05-26,436600\r
2020-05-28,436700\r
2020-05-31,436700\r
2020-06-05,436700\r
2020-06-10,436900\r
2020-06-15,438800\r
2020-06-20,440900\r
2020-06-22,427900\r
2020-06-25,437700\r
2020-06-27,437700\r
2020-06-30,443200\r
2020-07-02,443400\r
2020-07-05,444200\r
2020-07-07,442900\r
2020-07-10,443300\r
2020-07-12,448300\r
2020-07-15,448500\r
2020-07-17,446100\r
2020-07-20,445400\r
2020-07-22,439200\r
2020-07-25,433500\r
2020-07-27,422400\r
2020-07-30,420700\r
2020-08-01,404500\r
2020-08-04,408800\r
2020-08-06,408800\r
2020-08-09,402200\r
2020-08-11,399800\r
2020-08-14,386800\r
2020-08-16,375600\r
2020-08-19,381200\r
2020-08-21,369400\r
2020-08-24,369400\r
2020-08-26,361100\r
2020-09-03,339800\r
2020-09-05,325200\r
2020-09-08,316600\r
2020-09-10,316600\r
2020-09-13,292200\r
2020-09-15,292200\r
2020-09-18,292200\r
2020-09-20,302800\r
2020-09-25,314600\r
2020-09-28,314600\r
2020-09-30,314600\r
2020-10-03,315100\r
2020-10-08,274700\r
2020-10-10,274700\r
2020-10-15,274700\r
2020-10-18,274700\r
2020-10-20,261700\r
2020-10-25,279800\r
2020-10-28,287600\r
2020-10-30,279800\r
2020-11-02,279800\r
2020-11-07,280300\r
2020-11-09,280300\r
2020-11-17,293100\r
2020-11-19,293000\r
2020-11-22,299200\r
2020-11-24,282200\r
2020-12-02,282200\r
2020-12-07,287300\r
2021-01-26,391300\r
2021-01-31,391300\r
2021-02-02,391100\r
2021-02-10,386100\r
2021-02-15,398200\r
2021-02-17,398200\r
2021-02-20,398200\r
2021-02-25,404700\r
2021-02-27,404100\r
2021-03-02,405000\r
2021-03-04,405000\r
2021-03-14,415300\r
2021-03-17,415300\r
2021-03-19,415300\r
2021-03-22,418100\r
2021-03-24,416100\r
2021-03-29,411000\r
2021-04-01,407600\r
2021-04-23,406600\r
2021-04-28,406600\r
2021-05-03,423200\r
2021-05-06,429500\r
2021-05-08,429000\r
2021-05-13,429000\r
2021-05-18,434300\r
2021-05-21,437300\r
2021-05-23,437300\r
2021-05-26,430000\r
2021-05-28,430000\r
2021-05-31,436700\r
2021-06-05,428800\r
2021-06-15,425100\r
2021-06-17,425100\r
2021-06-22,427800\r
2021-06-25,436800\r
2021-06-27,438700\r
2021-06-30,438200\r
2021-07-02,418600\r
2021-07-05,431500\r
2021-07-07,420000\r
2021-07-10,429700\r
2021-07-12,427100\r
2021-07-15,429100\r
2021-07-17,416000\r
2021-07-20,416000\r
2021-07-22,406200\r
2021-07-27,387000\r
2021-07-30,391000\r
2021-08-01,374900\r
2021-08-04,361100\r
2021-08-06,358500\r
2021-08-11,346600\r
2021-08-14,337900\r
2021-08-16,327300\r
2021-08-19,309100\r
2021-08-21,309100\r
2021-08-24,309400\r
2021-08-26,297600\r
2021-08-29,248600\r
2021-08-31,249700\r
2021-09-03,251300\r
2021-09-05,251300\r
2021-09-08,222500\r
2021-09-23,158700\r
2021-09-30,157100\r
2021-10-03,157100\r
2021-10-10,117500\r
2021-10-13,118000\r
2021-10-15,113700\r
2021-10-18,113700\r
2021-10-20,112700\r
2021-10-23,109400\r
2022-01-28,331700\r
2022-01-31,344600\r
2022-02-02,339200\r
2022-02-05,347700\r
2022-02-07,347700\r
2022-02-10,356000\r
2022-02-12,353900\r
2022-02-15,361400\r
2022-02-17,354000\r
2022-02-20,361300\r
2022-02-22,368000\r
2022-02-25,365000\r
2022-02-27,372200\r
2022-03-02,377500\r
2022-03-07,383800\r
2022-03-09,378700\r
2022-03-14,381600\r
2022-03-22,410400\r
2022-03-24,410800\r
2022-03-29,410800\r
2022-04-03,403200\r
2022-04-11,418600\r
2022-04-13,418600\r
2022-04-16,424400\r
2022-04-18,419300\r
2022-04-23,417200\r
2022-04-26,417200\r
2022-04-28,417800\r
2022-05-01,418500\r
2022-05-08,418500\r
2022-05-13,434200\r
2022-05-16,434200\r
2022-05-18,438000\r
2022-05-21,436100\r
2022-05-23,438300\r
2022-05-26,436800\r
2022-05-28,438000\r
2022-05-31,436800\r
2022-06-02,437700\r
2022-06-07,433700\r
2022-06-10,435800\r
2022-06-12,434700\r
2022-06-15,427900\r
2022-06-17,431600\r
2022-06-20,431200\r
2022-06-25,431800\r
2022-06-27,425900\r
2022-07-05,407700\r
2022-07-07,406600\r
2022-07-10,405400\r
2022-07-12,399900\r
2022-07-15,398800\r
2022-07-17,378400\r
2022-07-20,366800\r
2022-07-22,363900\r
2022-07-25,356000\r
2022-07-27,340000\r
2022-07-30,336100\r
2022-08-01,319200\r
2022-08-04,317800\r
2022-08-06,312000\r
2022-08-09,304600\r
2022-08-11,296400\r
2022-08-14,288900\r
2022-08-16,288900\r
2022-08-19,273200\r
2022-08-21,273100\r
2022-08-24,246900\r
2022-08-26,246600\r
2022-08-29,246600\r
2022-10-05,153200\r
2022-10-08,153200\r
2022-10-10,153200\r
2022-10-13,153200\r
2022-10-15,153200\r
2022-10-20,169400\r
2022-10-23,162700\r
2022-10-25,167000\r
2022-10-28,165500\r
2022-10-30,161000\r
2022-11-02,160100\r
2022-11-04,161100\r
2022-11-14,163300\r
2022-11-17,163100\r
2022-11-24,162400\r
2022-11-27,188200\r
2023-02-02,377600\r
2023-02-05,377600\r
2023-02-10,385600\r
2023-02-12,385800\r
2023-02-15,391100\r
2023-02-17,391100\r
2023-02-20,391100\r
2023-02-22,392200\r
2023-03-22,395500\r
2023-03-24,399600\r
2023-03-27,412300\r
2023-04-01,405200\r
2023-04-03,405200\r
2023-04-06,406400\r
2023-04-08,407300\r
2023-04-16,377300\r
2023-05-06,411600\r
2023-05-11,425000\r
2023-06-22,440400\r
2023-06-25,440400\r
2023-06-27,440700\r
2023-06-30,431400\r
2023-07-02,433000\r
2023-07-05,432900\r
2023-07-07,432900\r
2023-07-10,436400\r
2023-07-12,420600\r
2023-07-15,418200\r
2023-07-17,424800\r
2023-07-20,423500\r
2023-07-22,423300\r
`;export{r as default};
