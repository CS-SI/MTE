const r=`date,value\r
2017-02-26,401000\r
2017-03-05,404200\r
2017-03-08,394200\r
2017-03-15,389600\r
2017-03-18,390700\r
2017-03-25,387200\r
2017-03-28,384500\r
2017-04-04,392700\r
2017-04-07,389800\r
2017-04-14,398500\r
2017-04-17,396300\r
2017-04-24,388800\r
2017-05-07,401700\r
2017-05-14,400900\r
2017-05-17,394900\r
2017-05-24,391100\r
2017-05-27,401600\r
2017-06-03,401000\r
2017-06-06,408700\r
2017-06-13,395900\r
2017-06-16,404200\r
2017-06-23,385800\r
2017-06-26,388800\r
2017-07-01,371600\r
2017-07-03,364700\r
2017-07-06,366900\r
2017-07-08,361700\r
2017-07-11,361700\r
2017-07-13,338900\r
2017-07-18,338900\r
2017-07-21,321500\r
2017-07-23,334700\r
2017-07-26,334700\r
2017-07-28,315900\r
2017-07-31,313700\r
2017-08-02,313700\r
2017-08-05,304600\r
2017-08-07,305100\r
2017-08-12,285200\r
2017-08-15,253500\r
2017-08-17,247500\r
2017-08-20,248400\r
2017-08-22,234700\r
2017-08-25,239800\r
2017-08-27,232400\r
2017-08-30,212900\r
2017-09-01,194000\r
2017-09-04,196000\r
2017-09-09,167300\r
2017-09-14,104200\r
2017-09-16,104200\r
2017-09-19,104200\r
2017-09-21,121300\r
2017-09-24,121300\r
2017-10-06,100200\r
2017-10-09,100200\r
2017-10-11,101700\r
2017-10-14,101700\r
2017-10-16,111100\r
2017-10-19,109400\r
2017-10-21,113700\r
2017-10-24,108500\r
2017-10-26,114700\r
2017-10-31,111800\r
2018-03-13,367800\r
2018-03-18,367800\r
2018-03-23,367800\r
2018-04-19,391900\r
2018-04-22,397100\r
2018-04-24,396600\r
2018-04-27,397800\r
2018-04-29,400200\r
2018-05-07,406200\r
2018-05-09,404600\r
2018-06-03,398300\r
2018-06-08,398300\r
2018-06-13,398300\r
2018-06-16,412600\r
2018-06-18,415800\r
2018-06-21,409900\r
2018-06-26,412000\r
2018-06-28,407600\r
2018-07-01,407600\r
2018-07-03,410100\r
2018-07-06,410200\r
2018-07-08,412600\r
2018-07-11,412600\r
2018-07-13,413100\r
2018-07-18,407100\r
2018-07-21,408100\r
2018-07-23,399900\r
2018-07-26,403200\r
2018-07-28,403200\r
2018-07-31,409800\r
2018-08-02,393100\r
2018-08-05,400400\r
2018-08-07,400400\r
2018-08-10,400400\r
2018-08-12,390000\r
2018-08-20,378200\r
2018-08-22,377500\r
2018-08-25,377000\r
2018-08-27,363000\r
2018-08-30,367600\r
2018-09-01,331000\r
2018-09-06,330400\r
2018-09-11,325900\r
2018-09-14,334400\r
2018-09-16,334400\r
2018-09-19,334400\r
2018-09-21,324800\r
2018-09-24,338200\r
2018-09-26,329200\r
2018-09-29,310000\r
2018-10-01,310000\r
2018-10-06,314300\r
2018-10-09,299800\r
2018-10-14,341000\r
2018-10-19,341000\r
2018-10-21,380400\r
2018-10-24,354000\r
2018-10-26,364800\r
2019-02-18,367800\r
2019-02-21,367800\r
2019-02-23,381600\r
2019-02-26,381600\r
2019-02-28,379900\r
2019-03-03,379400\r
2019-03-08,365600\r
2019-03-10,365600\r
2019-03-18,331100\r
2019-03-23,387400\r
2019-03-25,400300\r
2019-03-28,390200\r
2019-03-30,391900\r
2019-04-02,391900\r
2019-04-07,391900\r
2019-04-09,386200\r
2019-04-12,368200\r
2019-04-14,372000\r
2019-04-17,401400\r
2019-04-19,386700\r
2019-04-27,406900\r
2019-04-29,397600\r
2019-05-02,397600\r
2019-05-09,399100\r
2019-05-14,402000\r
2019-06-01,412500\r
2019-06-03,413100\r
2019-06-06,413100\r
2019-06-11,413100\r
2019-06-13,408200\r
2019-06-18,418200\r
2019-06-21,418800\r
2019-06-23,418800\r
2019-06-26,415400\r
2019-06-28,415900\r
2019-07-01,409700\r
2019-07-03,409800\r
2019-07-06,408600\r
2019-07-08,404000\r
2019-07-11,403500\r
2019-07-13,401600\r
2019-07-16,397700\r
2019-07-18,398300\r
2019-07-21,364900\r
2019-07-23,344800\r
2019-07-26,372300\r
2019-07-28,371800\r
2019-07-31,378400\r
2019-08-02,390200\r
2019-08-05,389300\r
2019-08-07,395400\r
2019-08-10,395100\r
2019-08-12,384100\r
2019-08-15,386700\r
2019-08-17,380600\r
2019-08-20,378200\r
2019-08-22,359500\r
2019-08-25,369000\r
2019-08-27,364700\r
2019-08-30,352500\r
2019-09-04,338000\r
2019-09-06,329300\r
2019-09-09,319900\r
2019-09-11,303200\r
2019-09-14,278400\r
2019-09-16,278500\r
2019-09-19,278500\r
2019-09-24,294300\r
2019-09-26,269300\r
2019-09-29,316000\r
2019-10-01,315900\r
2019-10-09,287000\r
2019-10-11,287000\r
2019-10-14,287000\r
2019-10-16,287000\r
2019-10-19,295000\r
2019-10-26,309100\r
2019-10-29,309100\r
2020-02-26,391600\r
2020-02-28,386400\r
2020-03-04,384100\r
2020-03-07,384100\r
2020-03-14,381900\r
2020-03-19,397000\r
2020-03-22,396800\r
2020-03-24,400800\r
2020-03-29,397200\r
2020-04-01,400000\r
2020-04-03,400000\r
2020-04-06,402300\r
2020-04-08,400700\r
2020-04-11,406200\r
2020-04-23,408000\r
2020-04-26,411600\r
2020-04-28,412400\r
2020-05-03,409100\r
2020-05-06,409100\r
2020-05-11,404800\r
2020-05-21,177700\r
2020-05-23,177700\r
2020-05-26,415800\r
2020-05-28,406400\r
2020-05-31,406400\r
2020-06-05,406400\r
2020-06-10,413500\r
2020-06-12,406700\r
2020-06-20,217000\r
2020-06-22,410300\r
2020-06-25,401100\r
2020-06-27,412000\r
2020-06-30,412000\r
2020-07-02,410600\r
2020-07-05,410700\r
2020-07-07,408200\r
2020-07-10,411000\r
2020-07-12,408600\r
2020-07-15,404500\r
2020-07-17,404500\r
2020-07-20,408100\r
2020-07-22,390900\r
2020-07-25,411200\r
2020-07-27,389600\r
2020-07-30,355700\r
2020-08-01,349100\r
2020-08-04,349100\r
2020-08-06,343900\r
2020-08-09,323100\r
2020-08-11,326000\r
2020-08-14,313800\r
2020-08-16,311200\r
2020-08-19,307800\r
2020-08-21,307800\r
2020-08-24,303900\r
2020-08-26,287100\r
2020-09-03,245700\r
2020-09-05,191700\r
2020-09-08,89000\r
2020-09-10,89000\r
2020-09-13,68800\r
2020-09-15,68700\r
2020-09-18,64200\r
2020-09-20,71100\r
2020-09-25,73800\r
2020-09-28,73800\r
2020-09-30,94100\r
2020-10-03,94200\r
2020-10-08,86000\r
2020-10-10,37000\r
2020-10-15,33800\r
2020-10-18,33800\r
2020-10-20,33800\r
2020-10-25,58500\r
2021-02-17,284800\r
2021-02-20,284800\r
2021-02-25,281200\r
2021-02-27,298700\r
2021-03-02,290700\r
2021-03-04,292000\r
2021-03-14,279900\r
2021-03-22,299800\r
2021-03-24,304400\r
2021-03-29,296500\r
2021-04-01,296500\r
2021-04-03,305900\r
2021-04-06,310100\r
2021-04-08,310100\r
2021-04-11,277500\r
2021-04-13,277500\r
2021-04-23,308600\r
2021-04-28,308600\r
2021-05-03,310000\r
2021-05-13,336200\r
2021-05-18,323500\r
2021-05-21,323300\r
2021-05-23,323300\r
2021-05-26,327100\r
2021-05-28,327100\r
2021-05-31,351400\r
2021-06-05,331000\r
2021-06-10,354100\r
2021-06-12,354100\r
2021-06-15,358500\r
2021-06-17,358500\r
2021-06-22,346500\r
2021-06-25,346500\r
2021-06-27,316900\r
2021-07-10,340700\r
2021-07-12,306100\r
2021-07-15,341500\r
2021-07-17,341500\r
2021-07-20,314600\r
2021-07-22,305800\r
2021-07-27,303000\r
2021-07-30,294500\r
2021-08-01,288000\r
2021-08-04,288000\r
2021-08-06,288000\r
2021-08-11,281200\r
2021-08-14,270200\r
2021-08-16,270200\r
2021-08-19,263700\r
2021-08-21,252800\r
2021-08-24,249700\r
2021-08-26,234500\r
2021-08-29,224200\r
2021-08-31,221700\r
2021-09-03,239200\r
2021-09-05,234300\r
2021-09-08,248200\r
2021-09-30,193000\r
2021-10-03,193000\r
2021-10-05,219100\r
2021-10-08,219100\r
2021-10-10,219100\r
2021-10-13,217500\r
2021-10-15,221100\r
2021-10-18,199800\r
2021-10-20,199800\r
2021-10-23,199800\r
2022-02-17,280600\r
2022-02-20,285100\r
2022-02-22,292700\r
2022-02-25,297200\r
2022-02-27,297200\r
2022-03-02,302600\r
2022-03-07,310200\r
2022-03-09,309100\r
2022-03-14,291900\r
2022-03-22,342900\r
2022-03-24,346600\r
2022-03-29,346600\r
2022-04-03,336500\r
2022-04-11,357400\r
2022-04-13,358300\r
2022-04-16,350400\r
2022-04-18,357100\r
2022-04-23,362000\r
2022-04-26,375900\r
2022-04-28,377000\r
2022-05-01,376700\r
2022-05-08,368100\r
2022-05-11,398100\r
2022-05-13,412900\r
2022-05-16,393500\r
2022-05-18,399300\r
2022-05-21,396400\r
2022-05-23,397700\r
2022-05-26,400700\r
2022-05-28,401000\r
2022-05-31,399600\r
2022-06-02,399300\r
2022-06-07,399800\r
2022-06-10,393300\r
2022-06-12,392300\r
2022-06-15,380200\r
2022-06-17,384200\r
2022-06-20,370400\r
2022-06-25,365500\r
2022-06-27,360000\r
2022-07-02,350500\r
2022-07-05,353300\r
2022-07-07,353300\r
2022-07-10,345600\r
2022-07-12,330900\r
2022-07-15,330800\r
2022-07-17,332300\r
2022-07-20,320100\r
2022-07-22,307300\r
2022-07-25,306800\r
2022-07-27,292700\r
2022-07-30,293200\r
2022-08-01,260100\r
2022-08-04,244100\r
2022-08-06,232500\r
2022-08-09,233900\r
2022-08-11,220000\r
2022-08-14,209300\r
2022-08-16,196900\r
2022-08-19,198300\r
2022-08-21,190400\r
2022-08-24,182000\r
2022-08-26,145700\r
2022-08-29,147800\r
2022-09-05,187300\r
2022-09-10,184700\r
2022-09-13,58800\r
2022-09-18,54500\r
2022-09-20,54800\r
2022-09-23,49800\r
2022-10-05,63500\r
2022-10-08,80800\r
2022-10-10,80800\r
2022-10-13,67200\r
2022-10-15,69500\r
2022-10-18,75600\r
2022-10-20,74600\r
2022-10-23,73700\r
2022-10-25,90200\r
2022-10-28,88700\r
2022-10-30,83500\r
2023-02-22,194800\r
2023-03-09,346600\r
2023-03-12,354900\r
2023-03-14,346000\r
2023-03-17,346300\r
2023-03-22,347500\r
2023-03-24,339300\r
2023-03-27,349400\r
2023-04-01,382700\r
2023-04-03,382100\r
2023-04-06,378800\r
2023-04-08,350000\r
2023-04-16,351700\r
2023-04-21,344000\r
2023-04-23,344000\r
2023-04-26,343700\r
2023-05-06,350100\r
2023-05-11,349300\r
2023-05-23,378500\r
2023-05-26,389000\r
2023-05-28,378200\r
2023-06-02,373400\r
2023-06-05,375100\r
2023-06-07,367100\r
2023-06-25,398900\r
2023-06-27,401700\r
2023-07-02,403600\r
2023-07-05,406600\r
2023-07-07,403100\r
2023-07-10,406300\r
`;export{r as default};