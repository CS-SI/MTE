const r=`date,value\r
2017-01-19,280200\r
2017-01-26,256400\r
2017-02-15,290900\r
2017-02-18,297700\r
2017-02-25,298700\r
2017-03-10,314300\r
2017-03-30,307900\r
2017-04-09,346500\r
2017-04-19,335500\r
2017-04-29,359100\r
2017-05-09,340200\r
2017-05-16,355200\r
2017-05-19,347800\r
2017-05-26,349900\r
2017-06-18,353100\r
2017-07-05,354500\r
2017-07-18,352300\r
2017-08-02,341100\r
2017-08-12,324700\r
2017-08-14,337000\r
2017-08-22,302700\r
2017-08-24,312300\r
2017-09-08,300500\r
2017-09-21,292400\r
2017-10-08,288700\r
2017-10-11,283000\r
2017-10-13,279900\r
2017-10-16,277200\r
2017-10-23,282200\r
2017-10-26,271300\r
2017-10-31,280700\r
2017-11-17,280200\r
2017-11-20,263400\r
2017-11-22,275900\r
2017-11-30,267800\r
2017-12-05,264900\r
2017-12-12,284400\r
2017-12-15,283100\r
2017-12-25,292900\r
2018-01-24,388500\r
2018-01-29,360500\r
2018-02-15,390900\r
2018-02-25,385900\r
2018-03-02,386500\r
2018-03-15,394800\r
2018-03-22,395400\r
2018-03-30,381400\r
2018-04-19,381300\r
2018-04-21,391600\r
2018-04-24,376400\r
2018-05-06,374400\r
2018-05-11,394300\r
2018-05-21,388600\r
2018-06-20,396500\r
2018-06-23,397500\r
2018-06-25,395400\r
2018-07-08,382100\r
2018-07-13,389900\r
2018-07-23,380700\r
2018-08-02,383200\r
2018-08-04,377400\r
2018-08-12,372600\r
2018-08-19,364600\r
2018-08-22,356100\r
2018-08-27,329100\r
2018-09-03,312100\r
2018-09-08,321500\r
2018-09-11,316800\r
2018-09-16,305700\r
2018-09-23,294900\r
2018-09-26,292100\r
2018-10-03,283700\r
2018-11-15,281600\r
2018-11-17,278200\r
2018-12-07,279600\r
2018-12-20,305900\r
2019-02-13,327900\r
2019-02-15,357400\r
2019-02-20,366400\r
2019-02-23,363300\r
2019-02-25,358700\r
2019-02-28,365100\r
2019-03-12,346600\r
2019-03-20,354300\r
2019-03-22,347700\r
2019-03-25,363000\r
2019-03-27,354200\r
2019-03-30,348100\r
2019-04-09,365900\r
2019-05-01,354700\r
2019-05-06,362400\r
2019-05-14,375600\r
2019-06-08,384400\r
2019-06-13,383400\r
2019-06-18,376300\r
2019-06-23,394800\r
2019-06-28,396900\r
2019-07-05,383700\r
2019-07-15,389300\r
2019-07-23,376400\r
2019-07-25,372800\r
2019-08-09,368900\r
2019-08-14,366700\r
2019-08-17,358400\r
2019-08-22,359100\r
2019-08-24,367800\r
2019-09-11,349200\r
2019-09-13,354400\r
2019-09-16,340200\r
2019-10-08,329000\r
2019-10-11,312800\r
2019-10-13,328100\r
2019-12-05,384600\r
2019-12-10,376300\r
2019-12-15,350100\r
2019-12-25,364700\r
2019-12-30,368800\r
2020-01-09,381100\r
2020-01-11,379300\r
2020-01-14,289500\r
2020-01-19,376300\r
2020-01-29,377400\r
2020-01-31,383600\r
2020-02-05,376700\r
2020-02-15,364500\r
2020-02-20,370800\r
2020-02-23,369400\r
2020-03-11,383300\r
2020-03-21,385600\r
2020-03-26,367700\r
2020-04-03,379500\r
2020-04-05,376500\r
2020-04-08,379600\r
2020-04-10,379000\r
2020-04-30,377900\r
2020-05-03,378200\r
2020-05-05,389700\r
2020-05-18,386300\r
2020-05-20,385400\r
2020-05-25,394600\r
2020-05-30,388400\r
2020-06-24,376200\r
2020-07-07,396400\r
2020-07-09,381300\r
2020-07-19,370200\r
2020-07-22,367300\r
2020-07-24,333500\r
2020-07-27,335700\r
2020-08-06,306400\r
2020-08-31,282700\r
2020-09-02,281800\r
2020-09-12,272800\r
2020-09-30,270000\r
2020-10-30,276400\r
2020-11-11,283400\r
2020-11-14,275000\r
2020-11-21,292800\r
2020-11-26,286900\r
2020-11-29,274000\r
2020-12-26,363900\r
2021-01-03,386200\r
2021-02-14,397600\r
2021-02-19,381300\r
2021-02-24,396600\r
2021-02-27,388300\r
2021-03-01,385000\r
2021-03-04,382400\r
2021-03-24,376500\r
2021-03-29,381500\r
2021-03-31,388800\r
2021-04-08,383200\r
2021-04-15,391500\r
2021-04-23,384300\r
2021-05-03,376200\r
2021-05-20,372500\r
2021-05-28,379800\r
2021-05-30,306300\r
2021-06-07,370700\r
2021-06-14,385100\r
2021-07-02,377300\r
2021-07-22,357700\r
2021-08-11,337100\r
2021-08-26,285300\r
2021-08-28,266600\r
2021-08-31,272800\r
2021-09-05,257300\r
2021-09-12,255700\r
2021-09-17,248600\r
2021-09-30,235400\r
2021-10-07,243700\r
2021-10-12,233300\r
2021-10-20,219300\r
2021-10-27,226900\r
2021-11-11,234300\r
2021-11-19,237700\r
2021-12-14,354500\r
2021-12-19,348700\r
2022-01-13,354800\r
2022-01-15,363300\r
2022-01-23,382600\r
2022-01-25,370900\r
2022-02-09,372800\r
2022-03-09,380500\r
2022-03-26,375100\r
2022-04-05,381400\r
2022-05-08,382700\r
2022-05-10,392900\r
2022-05-15,359600\r
2022-06-17,380900\r
2022-07-02,373700\r
2022-07-12,368900\r
2022-07-14,360700\r
2022-07-17,351900\r
2022-08-01,299300\r
2022-08-03,281600\r
2022-08-11,253500\r
2022-08-28,219700\r
2022-09-05,194100\r
2022-09-10,187100\r
2022-09-20,172900\r
2022-09-22,167200\r
2022-10-02,162900\r
2022-10-05,162100\r
2022-10-07,164700\r
2022-10-15,165700\r
2022-10-17,154500\r
2022-10-22,153900\r
2022-10-30,146900\r
2022-11-06,155200\r
2022-11-11,150200\r
2022-11-16,142000\r
2022-12-14,238500\r
2022-12-21,247600\r
2022-12-24,251100\r
2023-01-10,267400\r
2023-01-18,312700\r
2023-02-04,344400\r
2023-02-09,341400\r
2023-02-12,343000\r
2023-02-14,343400\r
2023-02-17,345400\r
2023-04-05,363500\r
2023-04-20,356300\r
2023-05-05,361700\r
2023-05-28,380500\r
2023-06-09,396000\r
2023-06-24,392400\r
2023-07-14,387600\r
2023-07-17,389600\r
2023-07-22,373300\r
2023-07-27,370400\r
2023-08-08,368100\r
2023-08-11,358300\r
2023-08-21,340500\r
2023-08-23,339600\r
2023-08-31,319000\r
2023-09-20,297800\r
2023-09-25,294600\r
2023-09-30,302900\r
2023-10-05,295400\r
2023-10-07,296800\r
2023-10-10,295200\r
2023-10-12,300000\r
2023-11-19,341600\r
2023-11-26,334600\r
`;export{r as default};