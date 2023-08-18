const r=`date,value\r
2017-01-04,133200\r
2017-01-14,138900\r
2017-02-03,166800\r
2017-02-16,178500\r
2017-02-23,189300\r
2017-02-26,173200\r
2017-03-05,171700\r
2017-03-08,179000\r
2017-03-15,186800\r
2017-03-28,187300\r
2017-04-04,194600\r
2017-04-07,194300\r
2017-04-17,190800\r
2017-05-04,193800\r
2017-05-07,196100\r
2017-05-17,194800\r
2017-05-27,199300\r
2017-06-03,187400\r
2017-06-13,194300\r
2017-06-16,199600\r
2017-06-26,193800\r
2017-07-01,188000\r
2017-07-03,185600\r
2017-07-06,187500\r
2017-07-08,182500\r
2017-07-13,160100\r
2017-07-18,171800\r
2017-07-23,173300\r
2017-07-28,163400\r
2017-07-31,162600\r
2017-08-05,159800\r
2017-08-07,158300\r
2017-08-12,146700\r
2017-08-15,141500\r
2017-08-17,150600\r
2017-08-22,145000\r
2017-08-25,149600\r
2017-08-27,139300\r
2017-08-30,134600\r
2017-09-14,117700\r
2017-09-21,116200\r
2017-10-06,101400\r
2017-10-11,104000\r
2017-10-16,100500\r
2017-10-21,111700\r
2017-10-24,105800\r
2017-10-26,110100\r
2017-11-03,104900\r
2017-11-08,92100\r
2017-11-18,92100\r
2017-11-30,91100\r
2017-12-05,102900\r
2017-12-13,95000\r
2017-12-23,97200\r
2017-12-28,97000\r
2018-01-17,97900\r
2018-02-08,125600\r
2018-02-11,117700\r
2018-03-13,171900\r
2018-04-14,194500\r
2018-04-17,193000\r
2018-04-19,198600\r
2018-04-22,203600\r
2018-04-29,204300\r
2018-05-17,210300\r
2018-05-19,204300\r
2018-06-03,199900\r
2018-06-16,207000\r
2018-06-18,203300\r
2018-06-21,204300\r
2018-06-26,203200\r
2018-07-01,202900\r
2018-07-08,206200\r
2018-07-13,202400\r
2018-07-18,199900\r
2018-07-21,194500\r
2018-07-23,198900\r
2018-07-31,205300\r
2018-08-02,200200\r
2018-08-05,200500\r
2018-08-17,198000\r
2018-08-20,200400\r
2018-08-27,189500\r
2018-08-30,198900\r
2018-09-11,182600\r
2018-09-14,175100\r
2018-09-21,185500\r
2018-09-26,179000\r
2018-09-29,177100\r
2018-10-14,181400\r
2018-10-19,188500\r
2018-10-21,185100\r
2018-10-24,174900\r
2018-11-08,180600\r
2018-11-28,182200\r
2018-12-03,178900\r
2018-12-05,183800\r
2018-12-08,182700\r
2018-12-10,183800\r
2018-12-18,181200\r
2018-12-25,183400\r
2019-01-02,178400\r
2019-01-07,164500\r
2019-01-09,183400\r
2019-01-12,165800\r
2019-01-14,182600\r
2019-01-17,195800\r
2019-01-29,180500\r
2019-02-06,185500\r
2019-02-16,162400\r
2019-02-18,185000\r
2019-02-28,196500\r
2019-03-03,174100\r
2019-03-20,196900\r
2019-03-23,181500\r
2019-03-25,195000\r
2019-03-28,195000\r
2019-03-30,166500\r
2019-04-09,169100\r
2019-04-17,194000\r
2019-04-19,197800\r
2019-04-27,205500\r
2019-05-09,191100\r
2019-05-14,209700\r
2019-05-24,211500\r
2019-06-01,204800\r
2019-06-03,198700\r
2019-06-13,201000\r
2019-06-18,209100\r
2019-06-21,207500\r
2019-06-26,207700\r
2019-06-28,198500\r
2019-07-01,107900\r
2019-07-03,194400\r
2019-07-06,208100\r
2019-07-08,208200\r
2019-07-11,150800\r
2019-07-13,196200\r
2019-07-16,171500\r
2019-07-21,121600\r
2019-07-26,204000\r
2019-07-31,198800\r
2019-08-02,197700\r
2019-08-05,204000\r
2019-08-10,192000\r
2019-08-15,201700\r
2019-08-20,189300\r
2019-08-25,200800\r
2019-08-30,180600\r
2019-09-04,177900\r
2019-09-09,168600\r
2019-09-11,167800\r
2019-09-14,161900\r
2019-09-16,180400\r
2019-09-24,168400\r
2019-10-04,160000\r
2019-10-09,166800\r
2019-10-26,176200\r
2019-11-13,164200\r
2019-11-30,154800\r
2019-12-10,168400\r
2019-12-23,165600\r
2019-12-25,157300\r
2019-12-30,157700\r
2020-01-02,159900\r
2020-01-04,175900\r
2020-01-09,166000\r
2020-01-12,163300\r
2020-01-14,168900\r
2020-01-17,179000\r
2020-01-27,187200\r
2020-02-01,191900\r
2020-02-06,179100\r
2020-02-08,182800\r
2020-02-26,176500\r
2020-02-28,168500\r
2020-03-04,168300\r
2020-03-19,176800\r
2020-03-22,180000\r
2020-03-24,176700\r
2020-03-29,196600\r
2020-04-01,199500\r
2020-04-06,193100\r
2020-04-08,203600\r
2020-04-11,190700\r
2020-04-23,205800\r
2020-04-26,208600\r
2020-05-03,193300\r
2020-05-06,210400\r
2020-05-21,159100\r
2020-05-23,205200\r
2020-05-26,206900\r
2020-05-28,203500\r
2020-06-15,195700\r
2020-06-20,166000\r
2020-06-22,195100\r
2020-06-25,202400\r
2020-06-27,205000\r
2020-07-02,204500\r
2020-07-05,206900\r
2020-07-07,194800\r
2020-07-10,201500\r
2020-07-12,202500\r
2020-07-15,211400\r
2020-07-17,208400\r
2020-07-20,208300\r
2020-07-22,198900\r
2020-07-25,206600\r
2020-07-27,199200\r
2020-07-30,201200\r
2020-08-01,181200\r
2020-08-06,180200\r
2020-08-09,197400\r
2020-08-11,189100\r
2020-08-14,202300\r
2020-08-16,199700\r
2020-08-19,200500\r
2020-08-21,190400\r
2020-08-26,201300\r
2020-09-03,187400\r
2020-09-05,187800\r
2020-09-08,205600\r
2020-09-13,186000\r
2020-09-18,194800\r
2020-09-25,197600\r
2020-10-08,123600\r
2020-10-10,183500\r
2020-10-28,159300\r
2020-11-07,167000\r
2020-11-19,175600\r
2020-11-22,174100\r
2020-11-24,179400\r
2020-12-09,191300\r
2020-12-22,185600\r
2020-12-27,158900\r
2021-01-06,174200\r
2021-01-13,167400\r
2021-01-16,172500\r
2021-01-26,173300\r
2021-02-15,171700\r
2021-02-17,172300\r
2021-02-25,180100\r
2021-03-04,173100\r
2021-03-17,184500\r
2021-03-22,175600\r
2021-03-24,177700\r
2021-03-29,178700\r
2021-04-03,176500\r
2021-04-23,173800\r
2021-05-13,171800\r
2021-05-18,172700\r
2021-05-21,179500\r
2021-05-26,179000\r
2021-06-10,183500\r
2021-06-15,177100\r
2021-06-22,174900\r
2021-06-27,167400\r
2021-06-30,167200\r
2021-07-10,165800\r
2021-07-20,151000\r
2021-07-22,150400\r
2021-07-27,137300\r
2021-07-30,154100\r
2021-08-11,127400\r
2021-08-14,119700\r
2021-08-16,122700\r
2021-08-19,117800\r
2021-08-21,113500\r
2021-08-26,115000\r
2021-08-29,104900\r
2021-09-05,106000\r
2021-09-30,84700\r
2021-10-03,80700\r
2021-10-05,92400\r
2021-10-13,92800\r
2021-10-15,80900\r
2021-10-20,87900\r
2021-11-02,88200\r
2021-11-19,101900\r
2021-12-07,92600\r
2021-12-12,97900\r
2021-12-14,92700\r
2021-12-17,94600\r
2021-12-19,99300\r
2022-01-08,140300\r
2022-01-11,153000\r
2022-01-13,150000\r
2022-01-16,156900\r
2022-01-18,160900\r
2022-01-21,164400\r
2022-01-23,167900\r
2022-01-26,170100\r
2022-01-31,180800\r
2022-02-02,178500\r
2022-02-07,177800\r
2022-02-10,170600\r
2022-02-17,180400\r
2022-02-20,177700\r
2022-02-22,180500\r
2022-03-02,182500\r
2022-03-09,182800\r
2022-03-22,190500\r
2022-03-24,188400\r
2022-04-11,191800\r
2022-04-13,184000\r
2022-04-16,189400\r
2022-04-18,190000\r
2022-04-23,201800\r
2022-04-26,194200\r
2022-04-28,189500\r
2022-05-11,201300\r
2022-05-13,198000\r
2022-05-16,201600\r
2022-05-18,202300\r
2022-05-21,206200\r
2022-05-23,205000\r
2022-06-10,200400\r
2022-06-12,203600\r
2022-06-15,203400\r
2022-06-17,201900\r
2022-06-20,199800\r
2022-07-02,202800\r
2022-07-05,204800\r
2022-07-10,200600\r
2022-07-12,206700\r
2022-07-15,205100\r
2022-07-17,198100\r
2022-07-20,205400\r
2022-07-22,199200\r
2022-07-25,206000\r
2022-08-01,195500\r
2022-08-04,203300\r
2022-08-06,199800\r
2022-08-09,201300\r
2022-08-11,197100\r
2022-08-14,204800\r
2022-08-16,196300\r
2022-08-24,202100\r
2022-08-26,197500\r
2022-09-05,201300\r
2022-09-10,190900\r
2022-09-13,190800\r
2022-09-20,184000\r
2022-09-23,174400\r
2022-10-08,175200\r
2022-10-13,170600\r
2022-10-15,169700\r
2022-10-18,176900\r
2022-10-20,169500\r
2022-10-23,177200\r
2022-10-30,153900\r
2022-11-02,154300\r
2022-11-04,149500\r
2022-11-17,145500\r
2022-11-24,137300\r
2022-11-27,136000\r
2022-12-02,137300\r
2022-12-04,142600\r
2022-12-27,135000\r
2022-12-29,145800\r
2023-01-03,138400\r
2023-01-31,134600\r
2023-02-02,135100\r
2023-02-10,139300\r
2023-02-12,131500\r
2023-02-15,127400\r
2023-02-22,123600\r
2023-03-12,125000\r
2023-03-17,127600\r
2023-03-22,158200\r
2023-03-27,172000\r
2023-04-03,182400\r
2023-04-06,187600\r
2023-04-16,190300\r
2023-04-26,195000\r
2023-05-03,193500\r
2023-05-06,200600\r
2023-05-23,202700\r
2023-05-26,203200\r
2023-05-28,201600\r
2023-06-02,198000\r
2023-06-15,200700\r
2023-06-25,199000\r
2023-06-27,203700\r
2023-06-30,200600\r
2023-07-02,198900\r
2023-07-05,204200\r
2023-07-10,201100\r
2023-07-15,149600\r
2023-07-17,184300\r
2023-07-20,133400\r
2023-07-22,189600\r
`;export{r as default};
