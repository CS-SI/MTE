const r=`date,value\r
2017-02-25,163900\r
2017-03-17,162200\r
2017-03-27,169600\r
2017-04-03,169200\r
2017-04-06,173500\r
2017-05-06,157600\r
2017-05-13,157600\r
2017-05-16,172700\r
2017-05-26,173200\r
2017-06-02,173200\r
2017-06-05,174200\r
2017-06-25,173600\r
2017-07-02,175300\r
2017-07-05,176100\r
2017-07-07,173400\r
2017-08-04,150400\r
2017-08-06,150400\r
2017-08-07,150400\r
2017-08-11,150400\r
2017-08-12,150400\r
2017-08-14,150400\r
2017-08-17,143100\r
2017-08-19,143800\r
2017-08-21,143800\r
2017-08-22,143800\r
2017-08-24,137000\r
2017-08-26,137800\r
2017-08-29,127700\r
2017-09-03,135200\r
2017-09-05,102100\r
2017-09-08,102100\r
2017-10-08,127600\r
2017-10-10,127600\r
2017-10-11,127600\r
2017-10-13,134800\r
2017-10-15,134800\r
2017-10-16,134800\r
2017-10-18,129100\r
2017-10-20,134100\r
2017-10-23,134100\r
2017-10-25,125600\r
2017-10-26,125600\r
2017-10-28,131800\r
2017-10-30,131300\r
2017-10-31,131300\r
2017-11-02,131300\r
2017-11-07,134300\r
2017-11-14,133700\r
2017-11-15,133700\r
2017-11-17,138600\r
2017-11-19,138300\r
2017-11-22,142000\r
2017-11-24,142000\r
2017-11-25,142000\r
2017-11-27,136900\r
2017-11-30,139900\r
2017-12-07,134800\r
2018-02-10,165500\r
2018-02-12,165500\r
2018-02-15,165500\r
2018-02-25,175100\r
2018-02-27,175100\r
2018-03-02,175100\r
2018-03-07,177500\r
2018-03-22,181900\r
2018-04-01,181900\r
2018-04-21,195000\r
2018-04-23,195000\r
2018-04-24,195000\r
2018-04-26,196800\r
2018-05-06,182900\r
2018-05-11,192700\r
2018-05-19,192700\r
2018-05-21,192800\r
2018-05-23,183300\r
2018-06-20,196700\r
2018-06-22,196700\r
2018-06-23,196700\r
2018-06-25,199600\r
2018-06-28,199600\r
2018-07-02,199200\r
2018-07-03,199200\r
2018-07-07,192100\r
2018-07-08,192100\r
2018-07-10,199300\r
2018-07-12,196100\r
2018-07-15,196800\r
2018-07-18,196800\r
2018-07-22,182900\r
2018-07-23,182900\r
2018-07-25,185000\r
2018-07-27,181900\r
2018-07-30,183100\r
2018-08-01,183100\r
2018-08-02,183100\r
2018-08-04,181400\r
2018-08-06,178800\r
2018-08-11,175800\r
2018-08-12,175800\r
2018-08-19,183500\r
2018-08-21,183500\r
2018-08-22,183500\r
2018-08-26,183500\r
2018-08-27,183500\r
2018-09-03,170500\r
2018-09-05,170500\r
2018-09-08,180000\r
2018-09-10,180000\r
2018-09-11,180000\r
2018-09-16,177200\r
2018-09-18,177200\r
2018-09-23,172300\r
2018-09-25,172300\r
2018-09-26,172300\r
2018-09-28,180600\r
2018-09-30,180600\r
2018-10-03,171300\r
2018-10-05,180900\r
2018-10-06,180900\r
2018-10-23,161900\r
2018-10-25,161900\r
2018-11-17,163400\r
2018-11-22,173400\r
2018-11-24,173400\r
2018-11-27,166700\r
2018-11-29,174800\r
2019-01-11,172800\r
2019-01-16,174500\r
2019-01-19,174500\r
2019-01-23,174500\r
2019-01-26,174500\r
2019-01-28,171100\r
2019-02-15,179400\r
2019-02-17,179400\r
2019-02-18,179400\r
2019-02-20,186000\r
2019-02-22,186000\r
2019-02-23,186000\r
2019-02-25,182600\r
2019-02-27,182600\r
2019-03-07,192600\r
2019-03-12,189100\r
2019-03-22,183700\r
2019-03-24,183700\r
2019-03-25,183700\r
2019-03-27,192500\r
2019-03-29,192500\r
2019-03-30,192500\r
2019-04-01,191900\r
2019-04-08,197200\r
2019-04-09,197200\r
2019-05-01,183200\r
2019-05-06,183200\r
2019-05-11,183200\r
2019-05-13,183200\r
2019-05-14,183200\r
2019-05-16,197100\r
2019-05-23,190500\r
2019-05-31,197100\r
2019-06-02,179000\r
2019-06-08,179000\r
2019-06-12,179000\r
2019-06-13,179000\r
2019-07-05,193100\r
2019-07-08,193100\r
2019-07-10,193800\r
2019-07-12,193800\r
2019-07-13,193800\r
2019-07-15,192300\r
2019-07-17,192300\r
2019-07-22,198200\r
2019-07-23,198200\r
2019-07-25,190300\r
2019-07-28,197500\r
2019-08-02,186200\r
2019-08-04,186300\r
2019-08-09,179500\r
2019-08-14,177000\r
2019-08-16,177000\r
2019-08-17,177000\r
2019-08-21,180900\r
2019-08-22,180900\r
2019-08-24,176200\r
2019-08-26,178000\r
2019-08-29,178000\r
2019-08-31,176100\r
2019-09-03,177100\r
2019-09-06,177100\r
2019-09-08,177100\r
2019-09-11,170800\r
2019-09-13,171800\r
2019-09-15,171800\r
2019-09-16,171800\r
2019-09-20,164200\r
2019-09-21,164200\r
2019-10-08,152100\r
2019-10-11,152100\r
2019-10-13,160400\r
2019-10-15,160400\r
2019-10-25,157500\r
2019-11-27,158100\r
2019-12-05,158100\r
2019-12-10,158100\r
2019-12-27,199300\r
2019-12-29,199300\r
2019-12-30,199300\r
2020-01-06,198600\r
2020-01-09,198600\r
2020-01-11,199200\r
2020-01-14,199200\r
2020-01-16,196100\r
2020-01-19,196100\r
2020-01-28,191200\r
2020-02-05,177400\r
2020-02-07,177400\r
2020-02-08,177400\r
2020-02-15,177400\r
2020-02-18,177400\r
2020-02-20,181600\r
2020-02-22,179500\r
2020-03-21,174200\r
2020-03-24,174200\r
2020-03-26,174200\r
2020-03-28,174200\r
2020-03-29,174200\r
2020-03-31,174200\r
2020-04-03,174200\r
2020-04-05,183900\r
2020-04-08,180400\r
2020-04-10,192700\r
2020-04-12,192700\r
2020-04-15,188200\r
2020-04-25,189400\r
2020-04-28,191000\r
2020-05-05,187300\r
2020-05-07,187300\r
2020-05-08,187300\r
2020-05-17,178200\r
2020-05-18,178200\r
2020-05-20,194500\r
2020-05-22,190100\r
2020-05-25,193500\r
2020-05-27,193500\r
2020-05-28,193500\r
2020-05-30,187700\r
2020-06-12,187700\r
2020-06-14,187800\r
2020-07-14,186500\r
2020-07-19,190800\r
2020-07-21,190800\r
2020-07-22,190800\r
2020-07-24,185500\r
2020-07-27,185500\r
2020-07-29,186700\r
2020-07-31,181200\r
2020-08-03,181200\r
2020-08-05,182000\r
2020-08-06,182000\r
2020-08-08,162700\r
2020-08-10,165100\r
2020-08-15,152800\r
2020-08-20,152800\r
2020-08-21,152800\r
2020-08-23,152800\r
2020-09-02,137700\r
2020-09-04,137700\r
2020-09-05,137700\r
2020-09-07,137800\r
2020-09-10,137800\r
2020-09-12,137700\r
2020-09-14,137700\r
2020-09-17,129000\r
2020-09-19,130800\r
2020-09-29,126900\r
2020-09-30,126900\r
2020-11-21,143000\r
2020-11-23,143000\r
2020-11-26,133100\r
2020-11-29,133100\r
2021-01-10,177800\r
2021-01-17,177800\r
2021-01-18,177800\r
2021-02-14,196100\r
2021-02-17,196100\r
2021-02-19,197700\r
2021-02-24,190700\r
2021-02-27,192300\r
2021-03-01,187000\r
2021-03-04,190700\r
2021-03-09,183200\r
2021-03-31,189600\r
2021-04-02,179500\r
2021-04-03,179500\r
2021-04-05,191100\r
2021-04-07,191100\r
2021-04-15,193500\r
2021-04-17,193400\r
2021-04-20,193400\r
2021-04-22,193400\r
2021-04-23,193400\r
2021-05-20,186100\r
2021-05-27,186100\r
2021-05-28,186100\r
2021-05-30,189100\r
2021-06-01,188200\r
2021-06-09,188200\r
2021-09-07,54100\r
2021-09-12,54400\r
2021-09-17,79300\r
2021-09-22,80300\r
2021-09-24,80300\r
2021-09-25,80300\r
2021-09-27,80300\r
2021-09-30,61000\r
2021-10-12,68400\r
2021-10-14,68400\r
2021-10-17,69500\r
2021-10-19,69500\r
2021-10-20,69500\r
2021-10-24,60000\r
2021-10-27,60000\r
2021-12-16,103000\r
2021-12-18,103000\r
2021-12-19,103000\r
2021-12-21,103000\r
2021-12-23,101300\r
2022-01-15,135700\r
2022-01-22,135700\r
2022-01-23,135700\r
2022-01-25,135800\r
2022-01-27,107000\r
2022-02-01,107000\r
2022-02-09,108200\r
2022-03-26,120900\r
2022-04-05,131400\r
2022-04-10,133300\r
2022-04-15,133300\r
2022-04-17,132200\r
2022-04-30,150100\r
2022-05-07,150100\r
2022-05-08,150100\r
2022-05-10,151200\r
2022-05-30,142900\r
2022-06-01,142900\r
2022-06-06,142900\r
2022-06-09,142900\r
2022-06-29,126400\r
2022-07-01,127400\r
2022-07-02,127400\r
2022-07-04,127400\r
2022-07-06,127400\r
2022-07-07,127400\r
2022-07-14,88700\r
2022-07-16,88700\r
2022-07-17,88700\r
2022-07-19,88700\r
2022-07-21,88700\r
2022-07-22,88700\r
2022-07-24,88700\r
2022-08-08,55700\r
2022-08-10,55700\r
2022-08-11,55700\r
2022-08-13,58200\r
2022-08-15,58200\r
2022-08-18,58200\r
2022-08-20,54000\r
2022-08-23,57300\r
2022-09-12,64900\r
2022-09-15,64900\r
2022-09-19,64900\r
2022-09-20,64900\r
2022-09-22,66300\r
2022-10-02,65900\r
2022-10-07,67900\r
2022-10-09,67900\r
2022-10-12,74200\r
2022-10-15,74200\r
2022-10-22,75000\r
2022-10-24,74200\r
2022-11-01,74200\r
2022-11-06,88500\r
2022-11-08,88500\r
2022-11-11,90400\r
2022-11-13,90400\r
2022-11-16,89200\r
2022-11-24,93700\r
2022-12-11,105200\r
2022-12-21,108100\r
2022-12-28,103800\r
2023-02-04,137800\r
2023-02-06,137800\r
2023-02-09,143100\r
2023-02-11,143100\r
2023-02-12,143100\r
2023-02-14,139200\r
2023-02-16,144800\r
2023-02-17,144800\r
2023-02-19,135100\r
2023-02-21,140500\r
2023-02-24,140500\r
2023-02-26,131200\r
2023-03-01,140300\r
2023-03-03,140000\r
2023-03-04,140000\r
2023-03-09,140000\r
2023-03-16,137100\r
2023-04-05,149500\r
2023-04-07,149500\r
2023-04-08,149500\r
2023-04-15,152800\r
2023-06-24,188300\r
2023-07-14,155200\r
2023-07-16,155200\r
2023-07-17,155200\r
2023-07-19,155200\r
2023-07-22,155000\r
`;export{r as default};
