const r=`date,value\r
2017-02-25,252300\r
2017-03-17,266400\r
2017-03-27,294900\r
2017-04-06,301500\r
2017-05-06,333000\r
2017-05-13,333000\r
2017-05-16,333000\r
2017-05-26,326900\r
2017-06-02,326900\r
2017-06-05,330600\r
2017-07-05,310700\r
2017-07-07,310200\r
2017-08-14,241800\r
2017-08-17,241800\r
2017-08-19,241800\r
2017-08-21,241800\r
2017-08-22,241800\r
2017-08-24,241800\r
2017-08-26,203100\r
2017-08-29,207200\r
2017-09-03,207200\r
2017-09-05,178400\r
2017-09-08,178400\r
2017-10-08,185700\r
2017-10-10,185700\r
2017-10-11,185700\r
2017-10-13,192500\r
2017-10-15,192500\r
2017-10-16,192500\r
2017-10-18,181700\r
2017-10-20,188300\r
2017-10-23,188300\r
2017-10-25,177600\r
2017-10-26,177600\r
2017-10-28,186700\r
2017-10-30,185700\r
2017-10-31,185700\r
2017-11-02,185700\r
2017-11-07,186800\r
2017-11-14,183500\r
2017-11-15,183500\r
2017-11-17,190200\r
2017-11-19,189800\r
2017-11-22,195900\r
2017-11-24,195900\r
2017-11-25,195900\r
2017-11-27,190500\r
2017-11-30,200200\r
2017-12-07,194200\r
2018-02-10,283100\r
2018-02-12,283100\r
2018-02-15,283100\r
2018-02-25,305000\r
2018-02-27,305000\r
2018-03-02,305000\r
2018-03-07,305000\r
2018-03-17,332500\r
2018-03-19,332500\r
2018-03-22,356700\r
2018-04-01,345700\r
2018-04-21,400900\r
2018-04-23,400900\r
2018-04-24,400900\r
2018-04-26,400900\r
2018-05-11,415700\r
2018-05-19,415700\r
2018-05-21,417300\r
2018-05-23,411000\r
2018-06-20,416600\r
2018-06-22,416600\r
2018-06-23,416600\r
2018-06-25,421800\r
2018-06-28,421800\r
2018-07-02,420100\r
2018-07-03,420100\r
2018-07-07,408800\r
2018-07-08,408800\r
2018-07-10,412500\r
2018-07-15,405300\r
2018-07-18,405300\r
2018-07-22,392300\r
2018-07-23,392300\r
2018-07-25,393600\r
2018-07-30,403300\r
2018-08-01,403300\r
2018-08-02,403300\r
2018-08-04,388400\r
2018-08-06,401900\r
2018-08-11,363200\r
2018-08-12,363200\r
2018-08-19,362700\r
2018-08-21,362700\r
2018-08-22,362700\r
2018-08-26,362700\r
2018-08-27,362700\r
2018-09-03,320700\r
2018-09-05,320700\r
2018-09-08,347100\r
2018-09-10,347100\r
2018-09-11,347100\r
2018-09-16,333700\r
2018-09-18,333700\r
2018-09-23,306400\r
2018-09-25,306400\r
2018-09-26,306400\r
2018-09-28,325000\r
2018-09-30,325000\r
2018-10-03,304100\r
2018-10-05,325300\r
2018-10-06,325300\r
2018-10-23,283100\r
2018-10-25,283100\r
2018-11-17,283500\r
2018-11-22,283500\r
2018-11-24,283500\r
2018-11-27,291500\r
2018-11-29,285400\r
2018-12-05,285400\r
2019-01-11,284900\r
2019-01-16,308200\r
2019-01-19,308200\r
2019-01-23,308200\r
2019-01-26,308200\r
2019-01-28,298100\r
2019-02-15,343300\r
2019-02-17,343300\r
2019-02-18,343300\r
2019-02-20,350000\r
2019-02-22,350000\r
2019-02-23,350000\r
2019-02-25,343900\r
2019-02-27,343900\r
2019-03-07,360100\r
2019-03-12,351400\r
2019-03-22,342300\r
2019-03-24,342300\r
2019-03-25,342300\r
2019-03-27,360900\r
2019-03-29,360900\r
2019-03-30,360900\r
2019-04-01,347300\r
2019-04-08,355400\r
2019-04-09,355400\r
2019-05-01,353800\r
2019-05-06,353800\r
2019-05-11,353800\r
2019-05-13,353800\r
2019-05-14,353800\r
2019-05-16,379200\r
2019-05-23,373000\r
2019-05-31,373000\r
2019-07-05,374700\r
2019-07-08,374700\r
2019-07-10,379200\r
2019-07-12,379200\r
2019-07-13,379200\r
2019-07-15,374200\r
2019-07-17,374200\r
2019-07-22,385900\r
2019-07-23,385900\r
2019-07-25,362100\r
2019-07-28,375300\r
2019-08-02,348900\r
2019-08-04,350200\r
2019-08-09,334900\r
2019-08-14,325000\r
2019-08-16,325000\r
2019-08-17,325000\r
2019-08-21,331200\r
2019-08-22,331200\r
2019-08-24,309400\r
2019-08-26,313100\r
2019-08-29,308200\r
2019-08-31,314600\r
2019-09-03,314600\r
2019-09-06,314600\r
2019-09-08,294900\r
2019-09-11,288600\r
2019-09-13,286200\r
2019-09-15,287200\r
2019-09-16,287200\r
2019-09-20,287200\r
2019-09-21,287200\r
2019-10-08,267100\r
2019-10-11,267100\r
2019-10-13,285400\r
2019-10-15,285400\r
2019-10-25,272000\r
2019-11-27,289800\r
2019-12-05,289800\r
2019-12-10,289800\r
2019-12-27,359300\r
2019-12-29,359300\r
2019-12-30,359300\r
2020-01-06,359500\r
2020-01-09,359500\r
2020-01-11,367700\r
2020-01-14,367700\r
2020-01-16,359200\r
2020-01-19,359200\r
2020-01-28,351300\r
2020-02-05,382500\r
2020-02-07,382500\r
2020-02-08,382500\r
2020-02-15,382500\r
2020-02-18,382500\r
2020-02-20,399900\r
2020-02-22,399800\r
2020-03-21,394500\r
2020-03-24,394500\r
2020-03-26,394500\r
2020-03-28,394500\r
2020-03-29,394500\r
2020-03-31,408200\r
2020-04-03,408200\r
2020-04-05,400400\r
2020-04-08,409500\r
2020-04-10,406700\r
2020-04-12,406700\r
2020-04-15,408800\r
2020-04-25,402600\r
2020-04-28,403500\r
2020-05-05,400800\r
2020-05-07,400800\r
2020-05-08,400800\r
2020-05-17,395300\r
2020-05-18,395300\r
2020-05-20,412000\r
2020-05-22,408500\r
2020-05-25,411400\r
2020-05-27,411400\r
2020-05-28,411400\r
2020-05-30,405300\r
2020-06-12,403700\r
2020-06-14,403800\r
2020-07-19,387400\r
2020-07-21,387400\r
2020-07-22,387400\r
2020-07-24,388800\r
2020-07-27,388800\r
2020-07-29,374000\r
2020-07-31,374000\r
2020-08-03,373800\r
2020-08-05,364600\r
2020-08-06,364600\r
2020-08-08,364600\r
2020-08-10,364100\r
2020-08-15,368500\r
2020-08-20,360000\r
2020-08-21,360000\r
2020-08-23,362600\r
2020-09-02,323500\r
2020-09-04,323500\r
2020-09-05,323500\r
2020-09-07,332400\r
2020-09-10,340900\r
2020-09-12,329700\r
2020-09-14,329700\r
2020-09-17,308700\r
2020-09-19,312000\r
2020-09-29,296300\r
2020-09-30,296300\r
2020-10-17,299900\r
2020-10-24,299900\r
2020-10-30,299900\r
2020-11-01,312500\r
2020-11-21,314400\r
2020-11-23,314400\r
2020-11-26,315300\r
2020-11-29,315300\r
2020-12-26,331800\r
2021-02-14,399000\r
2021-02-17,399000\r
2021-02-19,404400\r
2021-02-24,403700\r
2021-02-27,413800\r
2021-03-01,396600\r
2021-03-04,414400\r
2021-03-09,395600\r
2021-03-21,298700\r
2021-03-23,298700\r
2021-03-24,298700\r
2021-03-26,298700\r
2021-03-28,298700\r
2021-03-29,298700\r
2021-03-31,408300\r
2021-04-02,398800\r
2021-04-03,398800\r
2021-04-05,420400\r
2021-04-07,420400\r
2021-04-15,420700\r
2021-04-17,413900\r
2021-04-20,413900\r
2021-04-22,413900\r
2021-04-23,413900\r
2021-05-30,391900\r
2021-06-01,386200\r
2021-06-09,399900\r
2021-06-11,397300\r
2021-06-14,397300\r
2021-06-16,397300\r
2021-06-19,397300\r
2021-09-17,319500\r
2021-09-22,324700\r
2021-09-24,326000\r
2021-09-25,326000\r
2021-09-27,326000\r
2021-09-30,316200\r
2021-10-12,319600\r
2021-10-14,319600\r
2021-10-17,322600\r
2021-10-19,322600\r
2021-10-20,322600\r
2021-10-24,285700\r
2021-10-27,298500\r
2021-12-16,338200\r
2021-12-18,338200\r
2021-12-19,338200\r
2021-12-21,339100\r
2021-12-23,346300\r
2022-01-15,382400\r
2022-01-22,382400\r
2022-01-23,382400\r
2022-01-25,383100\r
2022-01-27,371200\r
2022-02-01,371200\r
2022-02-09,387800\r
2022-03-26,405800\r
2022-04-05,417000\r
2022-04-10,417000\r
2022-04-15,417000\r
2022-05-30,390700\r
2022-06-01,390700\r
2022-06-06,390700\r
2022-06-09,390700\r
2022-07-04,364700\r
2022-07-06,364700\r
2022-07-07,364700\r
2022-07-11,364700\r
2022-07-12,364700\r
2022-07-14,366300\r
2022-07-16,342300\r
2022-07-17,342300\r
2022-07-19,342300\r
2022-07-21,342300\r
2022-07-22,342300\r
2022-07-24,342300\r
2022-08-08,219500\r
2022-08-10,219500\r
2022-08-11,219500\r
2022-08-13,224200\r
2022-08-15,224200\r
2022-08-18,224200\r
2022-08-20,194100\r
2022-08-23,197100\r
2022-08-28,182700\r
2022-08-30,183600\r
2022-09-04,179000\r
2022-09-05,179000\r
2022-09-12,139800\r
2022-09-15,139800\r
2022-09-19,139800\r
2022-09-20,139800\r
2022-09-22,141500\r
2022-10-02,137600\r
2022-10-12,158100\r
2022-10-15,158100\r
2022-10-22,158700\r
2022-11-11,171200\r
2022-11-13,171200\r
2022-11-16,166400\r
2022-11-24,163300\r
2022-12-11,167500\r
2022-12-21,169300\r
2022-12-28,163800\r
2023-02-04,229200\r
2023-02-06,229200\r
2023-02-09,227000\r
2023-02-11,235700\r
2023-02-12,235700\r
2023-02-14,228300\r
2023-02-16,237800\r
2023-02-17,237800\r
2023-02-19,227600\r
2023-02-21,235600\r
2023-02-24,235000\r
2023-02-26,245700\r
2023-03-01,243000\r
2023-03-03,254400\r
2023-03-04,254400\r
2023-03-09,243600\r
2023-03-16,274900\r
2023-04-05,296800\r
2023-04-07,296800\r
2023-04-08,296800\r
2023-04-15,296800\r
`;export{r as default};