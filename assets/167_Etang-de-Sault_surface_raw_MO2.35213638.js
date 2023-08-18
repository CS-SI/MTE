const r=`date,value\r
2017-01-26,175100\r
2017-02-05,175100\r
2017-02-15,178700\r
2017-02-25,179900\r
2017-03-17,177800\r
2017-03-27,178800\r
2017-04-03,182100\r
2017-04-06,180100\r
2017-04-23,186600\r
2017-05-23,182900\r
2017-05-26,186800\r
2017-06-02,185400\r
2017-06-05,187800\r
2017-06-15,189400\r
2017-06-22,192800\r
2017-06-25,190900\r
2017-07-02,191200\r
2017-07-05,193500\r
2017-07-07,193500\r
2017-07-17,196800\r
2017-07-18,196800\r
2017-07-22,196800\r
2017-08-14,192700\r
2017-08-19,194100\r
2017-08-21,197400\r
2017-08-22,200500\r
2017-08-24,200500\r
2017-08-26,205000\r
2017-08-27,205000\r
2017-08-29,199100\r
2017-09-03,199200\r
2017-10-18,189800\r
2017-10-25,193800\r
2017-10-26,190500\r
2017-10-28,190600\r
2017-11-07,181200\r
2017-11-14,180100\r
2017-11-17,180100\r
2017-11-22,176900\r
2017-11-27,176900\r
2017-12-12,177000\r
2017-12-15,177000\r
2017-12-20,177000\r
2018-01-13,179300\r
2018-01-14,179300\r
2018-01-23,179300\r
2018-02-25,184700\r
2018-02-27,185300\r
2018-03-05,185300\r
2018-04-18,188000\r
2018-04-19,188000\r
2018-04-21,188700\r
2018-04-26,187100\r
2018-05-06,181400\r
2018-05-08,181400\r
2018-05-11,192000\r
2018-05-18,191800\r
2018-05-19,191800\r
2018-05-21,191800\r
2018-05-24,189200\r
2018-05-26,194800\r
2018-06-20,194100\r
2018-06-22,196100\r
2018-06-23,196100\r
2018-06-25,192100\r
2018-06-27,193400\r
2018-06-28,193400\r
2018-07-03,192700\r
2018-07-07,191800\r
2018-07-08,194600\r
2018-07-12,192000\r
2018-07-22,189400\r
2018-08-06,194700\r
2018-08-07,194700\r
2018-08-11,195200\r
2018-08-12,195200\r
2018-08-14,195200\r
2018-08-16,195200\r
2018-08-19,192400\r
2018-08-22,191800\r
2018-08-26,197200\r
2018-09-01,197000\r
2018-09-03,197000\r
2018-09-05,197000\r
2018-09-08,191800\r
2018-09-10,195800\r
2018-09-11,195800\r
2018-09-18,192300\r
2018-09-20,195400\r
2018-09-25,195300\r
2018-09-26,195300\r
2018-09-28,191500\r
2018-09-30,191500\r
2018-10-05,191700\r
2018-10-06,186100\r
2018-10-10,196200\r
2018-10-11,185100\r
2018-10-13,191100\r
2018-10-16,182500\r
2018-10-18,189400\r
2018-10-20,188700\r
2018-10-21,188700\r
2018-10-23,188700\r
2018-10-25,181700\r
2018-11-09,178200\r
2018-11-14,182000\r
2018-11-19,182000\r
2018-11-22,186200\r
2018-11-24,176000\r
2018-11-27,182300\r
2018-12-07,185600\r
2019-02-15,174100\r
2019-02-17,182500\r
2019-02-18,182500\r
2019-02-20,182500\r
2019-02-22,178500\r
2019-02-23,178500\r
2019-02-25,179900\r
2019-02-27,178300\r
2019-03-07,183800\r
2019-03-19,183100\r
2019-03-20,183100\r
2019-03-22,187100\r
2019-03-24,181500\r
2019-03-27,181500\r
2019-03-29,183300\r
2019-03-30,183300\r
2019-04-01,181100\r
2019-04-08,179700\r
2019-04-09,179700\r
2019-04-11,179700\r
2019-04-13,184400\r
2019-04-14,187100\r
2019-04-18,189800\r
2019-04-19,189800\r
2019-05-01,189200\r
2019-05-06,190700\r
2019-05-13,192100\r
2019-05-14,192100\r
2019-05-16,192100\r
2019-05-23,197400\r
2019-05-28,194900\r
2019-05-29,202600\r
2019-05-31,190400\r
2019-06-02,195000\r
2019-06-08,190400\r
2019-06-27,188600\r
2019-06-28,188600\r
2019-06-30,203100\r
2019-07-02,194100\r
2019-07-03,194100\r
2019-07-05,198900\r
2019-07-07,198300\r
2019-07-08,198300\r
2019-07-10,200100\r
2019-07-12,200100\r
2019-07-13,200000\r
2019-07-15,202000\r
2019-07-17,201500\r
2019-07-20,201100\r
2019-07-22,201600\r
2019-07-23,198500\r
2019-07-25,200100\r
2019-08-02,197800\r
2019-08-04,200500\r
2019-08-09,206000\r
2019-08-12,205300\r
2019-08-14,206100\r
2019-08-22,201600\r
2019-08-24,204700\r
2019-08-26,205000\r
2019-08-29,205900\r
2019-08-31,204500\r
2019-09-03,206500\r
2019-09-06,206500\r
2019-09-10,204100\r
2019-09-13,203100\r
2019-09-15,204000\r
2019-09-16,204000\r
2019-09-18,205800\r
2019-09-20,205300\r
2019-09-21,205300\r
2019-10-03,205400\r
2019-10-13,188200\r
2019-10-21,188200\r
2019-11-04,189900\r
2019-11-07,189900\r
2019-11-09,190100\r
2019-11-22,184600\r
2019-11-24,184700\r
2019-12-04,180100\r
2019-12-05,180100\r
2019-12-10,176800\r
2019-12-17,176800\r
2020-01-06,172500\r
2020-01-13,179900\r
2020-01-16,177300\r
2020-01-18,177300\r
2020-01-19,177300\r
2020-01-21,177600\r
2020-01-24,177800\r
2020-02-15,174600\r
2020-02-18,174600\r
2020-02-20,174600\r
2020-02-22,178600\r
2020-03-18,187000\r
2020-03-19,187000\r
2020-03-21,187000\r
2020-03-23,183900\r
2020-03-24,183900\r
2020-03-26,182400\r
2020-03-28,184600\r
2020-03-31,183400\r
2020-04-02,186700\r
2020-04-05,186500\r
2020-04-07,185200\r
2020-04-08,188200\r
2020-04-10,184200\r
2020-04-12,187700\r
2020-04-13,182700\r
2020-04-15,185500\r
2020-04-17,182600\r
2020-04-22,182900\r
2020-04-23,187600\r
2020-04-27,187300\r
2020-05-20,188200\r
2020-05-25,188200\r
2020-05-27,194800\r
2020-05-28,194800\r
2020-05-30,192300\r
2020-06-01,195900\r
2020-06-02,195900\r
2020-06-26,185100\r
2020-06-29,188400\r
2020-07-04,195000\r
2020-07-06,193400\r
2020-07-07,193400\r
2020-07-09,194400\r
2020-07-11,194400\r
2020-07-12,195000\r
2020-07-14,195000\r
2020-07-17,194600\r
2020-07-19,197100\r
2020-07-21,194900\r
2020-07-22,201900\r
2020-07-24,196600\r
2020-07-27,199100\r
2020-07-29,197200\r
2020-07-31,197200\r
2020-08-05,200600\r
2020-08-06,200600\r
2020-08-08,196300\r
2020-08-10,198500\r
2020-08-15,195000\r
2020-08-20,195700\r
2020-08-25,194700\r
2020-09-04,195700\r
2020-09-07,192400\r
2020-09-09,197200\r
2020-09-10,196000\r
2020-09-12,196400\r
2020-09-14,193300\r
2020-09-15,193300\r
2020-09-17,193500\r
2020-11-11,183700\r
2020-11-14,183700\r
2020-11-18,184900\r
2020-11-19,184900\r
2020-11-21,184900\r
2020-11-23,184900\r
2020-11-28,183500\r
2020-11-29,183500\r
2020-12-04,185000\r
2020-12-11,192900\r
2020-12-13,192900\r
2020-12-18,191200\r
2020-12-24,191200\r
2021-02-24,182000\r
2021-02-27,180800\r
2021-03-01,181700\r
2021-03-04,181700\r
2021-03-06,181700\r
2021-03-08,187100\r
2021-03-09,187100\r
2021-03-14,187100\r
2021-03-28,186400\r
2021-03-29,186400\r
2021-03-31,191900\r
2021-04-02,184800\r
2021-04-03,184800\r
2021-04-05,186900\r
2021-04-07,186600\r
2021-04-08,184700\r
2021-04-15,181500\r
2021-04-22,188000\r
2021-04-23,188000\r
2021-04-25,188000\r
2021-04-27,199900\r
2021-05-03,194200\r
2021-05-05,194200\r
2021-05-27,182000\r
2021-05-28,182000\r
2021-05-30,195100\r
2021-06-01,183800\r
2021-06-09,195400\r
2021-06-11,184200\r
2021-06-14,192300\r
2021-06-16,199100\r
2021-06-26,195000\r
2021-07-04,188100\r
2021-07-19,186400\r
2021-07-21,194100\r
2021-07-22,194100\r
2021-07-29,186700\r
2021-08-10,193500\r
2021-08-11,193500\r
2021-08-15,193500\r
2021-08-20,197000\r
2021-08-25,196500\r
2021-08-26,196500\r
2021-09-07,189100\r
2021-09-12,189100\r
2021-09-17,189100\r
2021-09-22,182400\r
2021-09-24,189600\r
2021-09-25,189600\r
2021-09-27,189600\r
2021-09-30,189600\r
2021-10-02,189600\r
2021-10-04,189400\r
2021-10-09,174600\r
2021-10-14,189200\r
2021-10-15,189200\r
2021-10-17,189200\r
2021-10-19,181800\r
2021-10-22,191200\r
2021-10-24,184500\r
2021-10-27,183600\r
2021-11-01,184700\r
2021-12-23,174400\r
2022-01-15,177300\r
2022-01-25,183200\r
2022-02-09,178300\r
2022-02-26,172800\r
2022-02-27,172800\r
2022-03-06,178400\r
2022-03-08,176000\r
2022-03-09,181500\r
2022-03-23,180300\r
2022-03-24,180300\r
2022-03-26,182300\r
2022-04-15,182700\r
2022-04-17,195300\r
2022-04-20,195300\r
2022-04-22,195300\r
2022-05-15,199900\r
2022-05-17,201200\r
2022-05-30,192800\r
2022-06-01,192800\r
2022-06-02,192800\r
2022-06-04,192800\r
2022-06-11,197000\r
2022-06-14,197000\r
2022-06-16,197000\r
2022-06-21,197000\r
2022-06-29,192000\r
2022-07-02,190500\r
2022-07-04,190500\r
2022-07-06,191500\r
2022-07-11,195200\r
2022-07-12,195200\r
2022-07-14,192600\r
2022-07-16,194800\r
2022-07-17,194800\r
2022-07-19,195700\r
2022-07-21,193400\r
2022-07-24,194000\r
2022-07-31,196900\r
2022-08-03,200600\r
2022-08-06,203200\r
2022-08-08,203100\r
2022-08-10,201400\r
2022-08-11,199900\r
2022-08-13,201700\r
2022-08-18,201300\r
2022-08-25,199900\r
2022-08-28,199900\r
2022-09-04,198100\r
2022-09-12,198400\r
2022-09-19,198100\r
2022-09-20,198100\r
2022-09-22,193000\r
2022-10-04,189000\r
2022-10-05,189000\r
2022-10-09,192500\r
2022-10-19,192300\r
2022-10-22,191900\r
2022-11-11,185900\r
2022-11-13,195000\r
2022-12-16,179000\r
2022-12-28,180500\r
2023-01-15,161100\r
2023-02-11,176900\r
2023-02-12,176900\r
2023-02-14,180900\r
2023-02-16,180900\r
2023-04-05,181600\r
2023-04-08,181600\r
2023-04-13,181600\r
2023-04-20,176100\r
2023-05-27,187200\r
2023-05-28,187200\r
2023-05-30,183400\r
2023-06-01,194600\r
2023-06-02,194600\r
2023-06-04,194600\r
2023-06-06,194600\r
2023-06-11,186500\r
2023-06-14,196900\r
2023-06-16,196900\r
2023-06-19,196900\r
2023-06-24,196900\r
2023-06-27,191300\r
2023-07-02,193600\r
2023-07-04,193600\r
2023-07-09,196800\r
2023-07-11,190200\r
2023-07-14,185900\r
2023-07-17,186600\r
2023-07-19,185100\r
2023-07-22,178700\r
`;export{r as default};
