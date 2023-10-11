const r=`date,value\r
2017-01-02,400\r
2017-01-19,307900\r
2017-02-18,317900\r
2017-02-28,317900\r
2017-04-09,361400\r
2017-04-12,356700\r
2017-04-19,351900\r
2017-05-09,344500\r
2017-05-19,343600\r
2017-06-18,362200\r
2017-06-21,365000\r
2017-06-28,365000\r
2017-07-01,349100\r
2017-07-06,357600\r
2017-08-27,358200\r
2017-09-01,361100\r
2017-11-05,295000\r
2017-11-08,295000\r
2017-11-10,295000\r
2017-11-13,296700\r
2017-11-15,296700\r
2017-11-25,309000\r
2017-11-28,309000\r
2017-11-30,309000\r
2018-01-17,320600\r
2018-01-19,321800\r
2018-01-24,321100\r
2018-01-27,321100\r
2018-02-21,309800\r
2018-02-26,356300\r
2018-03-03,356300\r
2018-04-17,361300\r
2018-04-19,344400\r
2018-04-22,342200\r
2018-04-24,344800\r
2018-05-04,342700\r
2018-05-07,337200\r
2018-05-09,332100\r
2018-05-14,333500\r
2018-05-17,342300\r
2018-05-19,341700\r
2018-05-22,333600\r
2018-06-23,360000\r
2018-06-26,364600\r
2018-06-28,359500\r
2018-07-03,360900\r
2018-07-06,362400\r
2018-07-08,362800\r
2018-07-13,367900\r
2018-07-16,366900\r
2018-07-18,365900\r
2018-07-23,361200\r
2018-07-26,373600\r
2018-07-28,364000\r
2018-07-31,364000\r
2018-08-02,355200\r
2018-08-05,349900\r
2018-08-10,349000\r
2018-09-26,241900\r
2018-09-29,241900\r
2018-10-01,249500\r
2018-10-04,243300\r
2018-10-09,248600\r
2018-10-16,249400\r
2018-10-19,249400\r
2018-10-21,229900\r
2018-10-24,234900\r
2018-10-29,234900\r
2018-11-03,226300\r
2018-11-08,206800\r
2018-11-10,206800\r
2018-11-13,206800\r
2018-11-15,206800\r
2018-11-18,226500\r
2018-11-23,249400\r
2018-11-30,230700\r
2018-12-20,304300\r
2018-12-25,304300\r
2019-02-26,307900\r
2019-03-10,307900\r
2019-03-13,307900\r
2019-03-30,352700\r
2019-04-12,352700\r
2019-04-19,331900\r
2019-04-22,331900\r
2019-04-27,349300\r
2019-04-29,355700\r
2019-05-04,355700\r
2019-05-14,362600\r
2019-05-24,362600\r
2019-05-27,362600\r
2019-06-01,354000\r
2019-06-03,354000\r
2019-06-06,354000\r
2019-06-08,354000\r
2019-06-26,364500\r
2019-06-28,372700\r
2019-07-01,372700\r
2019-07-03,362200\r
2019-07-06,361400\r
2019-07-11,356500\r
2019-07-13,360100\r
2019-07-16,358800\r
2019-07-23,344400\r
2019-07-28,356300\r
2019-07-31,356300\r
2019-08-02,291500\r
2019-08-07,322900\r
2019-08-10,319000\r
2019-08-15,319000\r
2019-08-20,319000\r
2019-08-22,319000\r
2019-08-25,284300\r
2019-08-27,264700\r
2019-08-30,269900\r
2019-09-01,269900\r
2019-09-04,269900\r
2019-09-14,261600\r
2019-09-16,248900\r
2019-09-19,224100\r
2019-09-21,224100\r
2019-09-24,224100\r
2019-10-06,188400\r
2019-11-03,39300\r
2019-11-05,39300\r
2019-11-08,283400\r
2019-11-10,283400\r
2019-11-13,282900\r
2019-12-03,400\r
2019-12-08,400\r
2019-12-13,400\r
2019-12-15,400\r
2019-12-25,280900\r
2019-12-30,280900\r
2020-01-19,290100\r
2020-01-22,289400\r
2020-02-06,281300\r
2020-02-11,152400\r
2020-03-17,134600\r
2020-03-19,134600\r
2020-03-24,311700\r
2020-03-27,311700\r
2020-04-01,253400\r
2020-04-06,312800\r
2020-04-08,306600\r
2020-04-11,279800\r
2020-04-13,278700\r
2020-04-16,337500\r
2020-04-21,350500\r
2020-04-23,336200\r
2020-04-26,353500\r
2020-05-06,352000\r
2020-05-08,349500\r
2020-05-11,352500\r
2020-05-18,340400\r
2020-05-21,342300\r
2020-05-23,336700\r
2020-05-26,337900\r
2020-05-28,332700\r
2020-05-31,334200\r
2020-06-02,341600\r
2020-06-07,350300\r
2020-07-12,346700\r
2020-07-20,364900\r
2020-07-22,335000\r
2020-07-27,335000\r
2020-07-30,341200\r
2020-08-01,341200\r
2020-08-04,344100\r
2020-08-06,327400\r
2020-08-09,325300\r
2020-08-11,325900\r
2020-09-13,346800\r
2020-09-15,345400\r
2020-09-20,345400\r
2020-09-25,333800\r
2020-09-28,333800\r
2020-11-04,280500\r
2020-11-12,335600\r
2020-11-19,335600\r
2020-11-29,305700\r
2020-12-04,305700\r
2020-12-12,305700\r
2021-02-10,318300\r
2021-02-12,318300\r
2021-02-17,318300\r
2021-02-27,339300\r
2021-03-02,339500\r
2021-03-07,331600\r
2021-03-09,332500\r
2021-03-19,314000\r
2021-03-29,342200\r
2021-04-01,343200\r
2021-04-06,345200\r
2021-04-08,345200\r
2021-04-13,341400\r
2021-04-16,341400\r
2021-04-18,350300\r
2021-04-21,350300\r
2021-04-23,349300\r
2021-04-26,352100\r
2021-04-28,352100\r
2021-05-01,365300\r
2021-05-03,365300\r
2021-05-31,335200\r
2021-06-05,329600\r
2021-06-10,329600\r
2021-06-15,326600\r
2021-07-17,346700\r
2021-07-20,346700\r
2021-07-22,350100\r
2021-08-14,321400\r
2021-08-24,321400\r
2021-09-05,372100\r
2021-09-13,372100\r
2021-09-25,335100\r
2021-11-02,307600\r
2021-11-22,290400\r
2021-11-24,299200\r
2021-12-02,299200\r
2021-12-09,313000\r
2021-12-17,313000\r
2022-01-01,333000\r
2022-02-07,255600\r
2022-02-12,255600\r
2022-02-17,255600\r
2022-02-27,339400\r
2022-03-07,340100\r
2022-03-09,341100\r
2022-03-12,331500\r
2022-03-14,331500\r
2022-03-17,335400\r
2022-03-19,334000\r
2022-03-22,319700\r
2022-03-24,335800\r
2022-03-27,335800\r
2022-03-29,352200\r
2022-04-03,360300\r
2022-04-16,337300\r
2022-04-21,337500\r
2022-04-26,337500\r
2022-07-15,336100\r
2022-07-17,335200\r
2022-07-20,335200\r
2022-08-06,322200\r
2022-08-09,319300\r
2022-08-11,320200\r
2022-10-23,283500\r
2022-11-12,286100\r
2022-11-14,286100\r
2022-11-17,286100\r
2022-11-19,303300\r
2022-11-29,298900\r
2023-01-21,321500\r
2023-01-23,323400\r
2023-01-31,321700\r
2023-02-07,319000\r
2023-02-12,319000\r
2023-02-15,344100\r
2023-02-27,328400\r
2023-03-02,337600\r
2023-04-03,352600\r
2023-04-06,352600\r
2023-04-08,352600\r
2023-04-13,352600\r
2023-05-03,356100\r
2023-05-28,346100\r
2023-05-31,345100\r
2023-06-02,340100\r
2023-06-05,338800\r
2023-06-07,337000\r
2023-06-12,335600\r
2023-06-15,347900\r
2023-06-20,358800\r
2023-06-22,358800\r
2023-06-25,365500\r
2023-07-07,337900\r
2023-07-10,337900\r
2023-07-12,337900\r
2023-07-15,337900\r
2023-07-17,337900\r
2023-08-21,324800\r
2023-08-26,324800\r
2023-09-05,346400\r
2023-09-15,346800\r
2023-09-20,341100\r
2023-09-23,341100\r
2023-09-25,341100\r
2023-10-08,338800\r
`;export{r as default};
