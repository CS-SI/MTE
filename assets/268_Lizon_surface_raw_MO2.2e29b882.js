const r=`date,value\r
2017-01-26,123700\r
2017-01-29,123700\r
2017-02-15,140400\r
2017-02-18,140400\r
2017-02-25,144900\r
2017-03-17,170000\r
2017-03-27,170000\r
2017-04-06,183700\r
2017-04-09,183700\r
2017-05-06,185700\r
2017-05-09,185700\r
2017-05-16,199000\r
2017-05-19,199000\r
2017-05-26,199400\r
2017-06-05,198500\r
2017-07-05,200400\r
2017-08-14,193000\r
2017-08-17,193000\r
2017-08-22,193000\r
2017-08-24,193000\r
2017-10-08,177500\r
2017-10-11,177500\r
2017-10-13,181500\r
2017-10-16,181500\r
2017-10-18,181500\r
2017-10-23,178700\r
2017-10-26,175000\r
2017-10-28,175000\r
2017-10-31,175000\r
2017-11-07,173800\r
2017-11-15,173800\r
2017-11-17,175800\r
2017-11-20,174700\r
2017-11-22,177800\r
2017-11-25,177800\r
2017-11-27,177800\r
2017-11-30,175100\r
2017-12-07,131400\r
2017-12-12,184700\r
2017-12-15,184700\r
2017-12-20,179200\r
2018-01-31,192700\r
2018-02-10,192700\r
2018-02-15,196500\r
2018-02-25,196700\r
2018-03-02,198800\r
2018-03-07,198800\r
2018-03-22,201400\r
2018-03-30,200100\r
2018-04-21,198200\r
2018-04-24,198200\r
2018-04-26,198200\r
2018-05-11,197500\r
2018-05-21,197800\r
2018-05-24,196500\r
2018-06-20,196000\r
2018-06-23,196000\r
2018-06-25,200400\r
2018-07-08,195100\r
2018-07-10,195100\r
2018-07-15,196800\r
2018-07-18,196800\r
2018-07-23,196800\r
2018-07-25,197200\r
2018-08-04,196200\r
2018-08-12,193700\r
2018-09-03,177500\r
2018-09-08,186200\r
2018-09-11,186200\r
2018-09-16,183300\r
2018-09-18,183300\r
2018-09-23,175200\r
2018-09-26,175200\r
2018-09-28,181000\r
2018-10-03,174900\r
2018-10-06,180300\r
2018-10-13,173200\r
2018-10-23,165800\r
2018-11-17,162800\r
2018-11-22,162800\r
2018-11-27,164500\r
2018-12-07,168300\r
2018-12-10,167300\r
2018-12-27,178700\r
2019-01-11,181900\r
2019-01-16,183400\r
2019-01-19,183400\r
2019-01-24,183400\r
2019-01-26,177700\r
2019-02-15,194300\r
2019-02-18,194300\r
2019-02-20,195700\r
2019-02-23,195700\r
2019-02-25,195000\r
2019-02-28,195000\r
2019-03-12,197800\r
2019-03-22,194600\r
2019-03-25,194600\r
2019-03-27,196100\r
2019-03-30,196100\r
2019-04-01,196100\r
2019-04-09,195600\r
2019-05-01,187400\r
2019-05-06,192100\r
2019-05-09,192100\r
2019-05-11,192100\r
2019-05-14,192100\r
2019-05-16,192100\r
2019-07-05,196300\r
2019-07-08,196300\r
2019-07-10,199600\r
2019-07-13,199600\r
2019-07-15,196600\r
2019-07-20,196600\r
2019-07-23,200800\r
2019-07-25,193000\r
2019-07-28,197600\r
2019-08-02,181400\r
2019-08-04,181900\r
2019-08-09,180500\r
2019-08-14,176900\r
2019-08-17,176900\r
2019-08-22,179900\r
2019-08-24,169200\r
2019-08-29,169800\r
2019-09-03,159700\r
2019-09-06,159700\r
2019-09-08,161900\r
2019-09-11,145200\r
2019-09-13,150800\r
2019-09-16,150800\r
2019-09-18,150800\r
2019-09-21,150800\r
2019-09-26,148200\r
2019-10-08,136000\r
2019-10-11,136000\r
2019-10-13,140400\r
2019-10-26,132400\r
2019-12-17,185700\r
2019-12-20,185700\r
2019-12-25,185700\r
2019-12-27,189200\r
2019-12-30,189200\r
2020-01-06,191700\r
2020-01-09,191700\r
2020-01-11,192800\r
2020-01-14,192800\r
2020-01-16,192000\r
2020-01-19,192000\r
2020-01-29,191600\r
2020-01-31,191600\r
2020-02-05,186800\r
2020-02-10,188800\r
2020-02-15,187700\r
2020-02-18,187700\r
2020-02-20,189600\r
2020-02-23,188900\r
2020-03-11,189400\r
2020-03-21,194700\r
2020-03-24,194700\r
2020-03-26,192900\r
2020-03-31,195800\r
2020-04-03,195800\r
2020-04-05,191000\r
2020-04-08,191500\r
2020-04-10,191000\r
2020-04-15,194100\r
2020-04-25,195600\r
2020-04-30,195200\r
2020-05-05,196300\r
2020-05-08,196300\r
2020-05-18,196300\r
2020-05-20,200500\r
2020-05-25,195400\r
2020-05-28,195400\r
2020-05-30,196300\r
2020-06-12,196200\r
2020-06-14,197200\r
2020-06-24,192700\r
2020-07-04,192700\r
2020-07-07,192700\r
2020-07-09,198400\r
2020-07-19,197900\r
2020-07-22,197900\r
2020-07-24,191200\r
2020-07-27,191700\r
2020-07-29,191700\r
2020-08-03,191700\r
2020-08-06,180000\r
2020-08-08,188500\r
2020-08-18,181300\r
2020-08-21,181300\r
2020-08-23,181300\r
2020-09-02,123900\r
2020-09-05,123900\r
2020-09-07,123900\r
2020-09-10,123900\r
2020-09-12,123900\r
2020-09-17,116700\r
2020-09-30,114100\r
2020-11-11,126200\r
2020-11-14,126200\r
2020-11-21,129000\r
2020-11-26,125400\r
2020-11-29,126900\r
2020-12-26,174700\r
2021-02-14,199500\r
2021-02-17,199500\r
2021-02-19,199600\r
2021-02-24,199000\r
2021-02-27,200700\r
2021-03-01,196300\r
2021-03-04,201100\r
2021-03-09,196700\r
2021-03-21,197500\r
2021-03-24,197500\r
2021-03-29,197500\r
2021-03-31,201800\r
2021-04-03,199300\r
2021-04-05,199600\r
2021-04-08,199600\r
2021-04-15,197800\r
2021-04-20,193100\r
2021-04-23,193100\r
2021-05-20,185400\r
2021-05-28,185400\r
2021-05-30,185400\r
2021-06-09,195100\r
2021-06-14,197000\r
2021-06-22,196900\r
2021-07-19,199500\r
2021-07-22,199500\r
2021-09-12,151700\r
2021-09-17,152300\r
2021-09-22,152300\r
2021-09-25,132500\r
2021-09-27,132500\r
2021-10-07,145900\r
2021-10-12,146300\r
2021-10-15,146300\r
2021-10-17,143400\r
2021-10-20,144100\r
2021-10-27,138400\r
2021-12-16,190800\r
2021-12-19,190800\r
2021-12-21,190800\r
2022-01-15,189400\r
2022-01-23,189400\r
2022-01-25,192000\r
2022-02-09,192400\r
2022-03-01,199400\r
2022-03-09,199400\r
2022-03-26,195200\r
2022-04-05,199800\r
2022-04-10,199500\r
2022-05-10,184400\r
2022-05-15,196100\r
2022-06-19,199300\r
2022-06-22,198000\r
2022-06-24,198000\r
2022-06-29,198000\r
2022-07-14,183000\r
2022-07-17,183000\r
2022-07-24,183000\r
2022-08-03,157200\r
2022-08-06,157200\r
2022-08-08,157200\r
2022-08-11,157200\r
2022-08-13,157200\r
2022-08-28,130800\r
2022-09-05,130800\r
2022-09-22,113700\r
2022-10-02,113900\r
2022-10-05,108600\r
2022-10-07,108600\r
2022-10-12,108600\r
2022-11-06,98300\r
2022-11-11,98300\r
2022-11-16,95000\r
2022-12-21,106800\r
2022-12-24,106800\r
2023-01-10,116500\r
2023-01-18,116500\r
2023-01-20,145500\r
2023-01-30,143800\r
2023-02-04,157200\r
2023-02-09,162100\r
2023-02-12,162100\r
2023-02-14,157700\r
2023-02-17,162400\r
2023-02-19,162300\r
2023-02-24,167300\r
2023-03-01,172000\r
2023-03-16,166100\r
2023-04-05,166000\r
2023-04-08,166000\r
2023-04-10,170300\r
2023-04-18,169800\r
2023-04-20,169800\r
2023-05-05,177700\r
2023-05-10,177700\r
2023-06-24,199700\r
2023-06-27,199700\r
2023-07-14,197100\r
2023-07-17,197100\r
2023-07-22,197100\r
2023-08-08,197300\r
2023-08-11,197000\r
2023-08-16,197000\r
2023-08-18,197100\r
2023-08-21,188500\r
2023-08-23,188500\r
2023-08-28,188500\r
2023-08-31,179900\r
2023-09-07,177400\r
2023-09-10,177400\r
2023-09-15,177400\r
2023-10-02,167000\r
`;export{r as default};
