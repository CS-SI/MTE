const r=`date,value\r
2017-02-19,181000\r
2017-02-26,181000\r
2017-03-01,186400\r
2017-03-08,184100\r
2017-03-11,189300\r
2017-03-18,188000\r
2017-03-21,188000\r
2017-04-10,201900\r
2017-04-17,201900\r
2017-04-20,202800\r
2017-06-19,196300\r
2017-06-26,196300\r
2017-06-29,199200\r
2017-07-01,193300\r
2017-07-04,199700\r
2017-07-06,199700\r
2017-07-09,199700\r
2017-07-11,189800\r
2017-07-14,195600\r
2017-07-19,192800\r
2017-07-21,192800\r
2017-07-24,192800\r
2017-07-29,189900\r
2017-07-31,189900\r
2017-08-03,189900\r
2017-08-05,189900\r
2017-08-08,190300\r
2017-08-10,177200\r
2017-08-13,192100\r
2017-08-15,192100\r
2017-08-18,179900\r
2017-08-20,195700\r
2017-08-23,182000\r
2017-08-25,194300\r
2017-08-30,181700\r
2017-09-02,186200\r
2017-09-04,184300\r
2017-09-07,184300\r
2017-09-12,184700\r
2017-09-17,185800\r
2017-09-22,185800\r
2017-09-24,178300\r
2017-09-27,182600\r
2017-09-29,180900\r
2017-10-04,180900\r
2017-10-07,181600\r
2017-10-09,172700\r
2017-10-12,177700\r
2017-10-17,173900\r
2017-10-19,185100\r
2017-10-22,176300\r
2017-10-24,186900\r
2017-10-27,174100\r
2017-10-29,179000\r
2017-11-01,175100\r
2017-11-03,179300\r
2017-11-06,169000\r
2017-11-08,176400\r
2017-11-11,176400\r
2017-11-16,163600\r
2017-11-18,163600\r
2017-11-21,163600\r
2017-11-23,163600\r
2017-11-26,174900\r
2017-11-28,173700\r
2017-12-01,177100\r
2017-12-03,177500\r
2017-12-06,177500\r
2017-12-16,162100\r
2017-12-21,170700\r
2017-12-23,170700\r
2017-12-26,170700\r
2017-12-28,166700\r
2018-01-05,160400\r
2018-01-07,160400\r
2018-01-12,160400\r
2018-01-15,160400\r
2018-02-04,167300\r
2018-02-09,176800\r
2018-02-11,176800\r
2018-02-14,170300\r
2018-02-16,174300\r
2018-02-19,174300\r
2018-02-21,170400\r
2018-03-26,187600\r
2018-03-31,187600\r
2018-04-02,187600\r
2018-04-05,197100\r
2018-04-10,193300\r
2018-04-15,193300\r
2018-04-20,201200\r
2018-04-22,201200\r
2018-04-25,213900\r
2018-04-30,201500\r
2018-05-05,208800\r
2018-05-07,201200\r
2018-05-10,201200\r
2018-05-20,196800\r
2018-05-25,196800\r
2018-05-30,196800\r
2018-06-09,209700\r
2018-06-11,209700\r
2018-06-14,209700\r
2018-06-16,209700\r
2018-06-19,210700\r
2018-06-21,205200\r
2018-06-24,205200\r
2018-06-26,205200\r
2018-06-29,205600\r
2018-07-01,196000\r
2018-07-04,207200\r
2018-07-06,207200\r
2018-07-09,199700\r
2018-07-11,209700\r
2018-07-14,201400\r
2018-07-16,210700\r
2018-07-19,199200\r
2018-07-21,210200\r
2018-07-24,199100\r
2018-07-26,208800\r
2018-07-29,199500\r
2018-07-31,210000\r
2018-08-03,210000\r
2018-08-05,201000\r
2018-08-08,201200\r
2018-09-02,188800\r
2018-09-04,188800\r
2018-09-07,196100\r
2018-09-09,196100\r
2018-09-12,196100\r
2018-09-22,188800\r
2018-09-24,188800\r
2018-09-27,202200\r
2018-09-29,202200\r
2018-10-02,180300\r
2018-10-04,191800\r
2018-10-09,177300\r
2018-10-12,177300\r
2018-10-22,182800\r
2018-10-24,182800\r
2018-12-06,195300\r
2018-12-08,195300\r
2018-12-11,202800\r
2019-01-10,201100\r
2019-01-12,201100\r
2019-01-15,196800\r
2019-01-17,196800\r
2019-01-22,202400\r
2019-01-25,194000\r
2019-01-27,197700\r
2019-01-30,195200\r
2019-02-04,197500\r
2019-02-06,197500\r
2019-02-09,197500\r
2019-02-11,207200\r
2019-02-14,202800\r
2019-02-16,205000\r
2019-02-21,205000\r
2019-02-26,205000\r
2019-03-01,208900\r
2019-03-03,200100\r
2019-03-08,200100\r
2019-03-11,202700\r
2019-03-13,202700\r
2019-03-16,200500\r
2019-03-18,208300\r
2019-03-21,202100\r
2019-03-23,202100\r
2019-03-26,202100\r
2019-03-28,214500\r
2019-03-31,197900\r
2019-04-05,200100\r
2019-04-07,213700\r
2019-04-10,213700\r
2019-04-15,205900\r
2019-04-17,214100\r
2019-04-20,214100\r
2019-04-27,206400\r
2019-04-30,220800\r
2019-05-02,218000\r
2019-05-05,226100\r
2019-05-07,226100\r
2019-05-10,216400\r
2019-05-12,216400\r
2019-05-15,216400\r
2019-05-20,223000\r
2019-05-25,213000\r
2019-05-30,223100\r
2019-06-01,223100\r
2019-06-04,232800\r
2019-06-06,232800\r
2019-06-11,232800\r
2019-06-14,227000\r
2019-06-19,223400\r
2019-06-21,223400\r
2019-06-24,224400\r
2019-06-26,224400\r
2019-06-29,224400\r
2019-07-01,224400\r
2019-07-04,224400\r
2019-07-06,194400\r
2019-07-09,194400\r
2019-07-19,232000\r
2019-07-21,232000\r
2019-07-24,227600\r
2019-07-26,227600\r
2019-07-29,222800\r
2019-07-31,218700\r
2019-08-03,219200\r
2019-08-05,208500\r
2019-08-08,211900\r
2019-08-10,202200\r
2019-08-15,210100\r
2019-08-18,209400\r
2019-08-20,212500\r
2019-08-23,211700\r
2019-08-25,217500\r
2019-08-28,224400\r
2019-08-30,224400\r
2019-09-02,216800\r
2019-09-04,206800\r
2019-09-07,207400\r
2019-09-09,205700\r
2019-09-12,206100\r
2019-09-14,196500\r
2019-09-17,203400\r
2019-09-19,197100\r
2019-09-24,209500\r
2019-09-27,187400\r
2019-09-29,209100\r
2019-10-02,192000\r
2019-10-04,193300\r
2019-10-07,186400\r
2019-10-09,186400\r
2019-10-14,199300\r
2019-10-17,199300\r
2019-10-19,192400\r
2019-10-27,194000\r
2019-10-29,194000\r
2019-11-03,194000\r
2019-11-06,199100\r
2019-11-16,197100\r
2019-11-26,189700\r
2019-11-28,189700\r
2019-12-21,192400\r
2019-12-23,192400\r
2019-12-26,197300\r
2019-12-28,197300\r
2020-01-05,209600\r
2020-01-10,209600\r
2020-01-12,209600\r
2020-01-15,209600\r
2020-01-17,209600\r
2020-02-04,198400\r
2020-02-09,198400\r
2020-02-14,204400\r
2020-02-19,203000\r
2020-02-21,211900\r
2020-02-24,206800\r
2020-02-26,206800\r
2020-03-07,209000\r
2020-03-15,213000\r
2020-03-20,213000\r
2020-03-22,213000\r
2020-03-30,213000\r
2020-04-04,181800\r
2020-04-06,181800\r
2020-04-09,200600\r
2020-04-11,200600\r
2020-04-14,186200\r
2020-04-24,198000\r
2020-04-26,210700\r
2020-04-29,195800\r
2020-05-04,211500\r
2020-05-06,211500\r
2020-05-09,214500\r
2020-05-14,204700\r
2020-05-19,223000\r
2020-05-21,207100\r
2020-05-24,221600\r
2020-05-26,215800\r
2020-05-29,215800\r
2020-05-31,215800\r
2020-06-03,218900\r
2020-06-05,218900\r
2020-06-08,218900\r
2020-06-23,204700\r
2020-06-25,204700\r
2020-06-28,215100\r
2020-06-30,215100\r
2020-07-03,202800\r
2020-07-05,202800\r
2020-07-08,205000\r
2020-07-10,197800\r
2020-07-13,208500\r
2020-07-15,202600\r
2020-07-18,202600\r
2020-07-20,228100\r
2020-07-23,218000\r
2020-07-25,228000\r
2020-07-28,228000\r
2020-08-02,205500\r
2020-08-04,205500\r
2020-08-07,194800\r
2020-08-09,198200\r
2020-08-14,198200\r
2020-08-17,198200\r
2020-08-19,153700\r
2020-08-22,196400\r
2020-08-24,196100\r
2020-08-27,199800\r
2020-09-01,165200\r
2020-09-03,165200\r
2020-09-06,181000\r
2020-09-08,166800\r
2020-09-13,188700\r
2020-09-16,164500\r
2020-09-18,188600\r
2020-09-21,188600\r
2020-09-23,152000\r
2020-09-26,167900\r
2020-09-28,167900\r
2020-10-03,167900\r
2020-10-06,167900\r
2020-10-08,167900\r
2020-10-11,175100\r
2020-11-05,168400\r
2020-11-07,168400\r
2020-11-10,168400\r
2020-11-17,168400\r
2020-11-20,178400\r
2020-11-22,176700\r
2020-11-25,184100\r
2020-11-27,184100\r
2020-11-30,184100\r
2020-12-02,184100\r
2020-12-25,178300\r
2020-12-30,178300\r
2021-01-14,172500\r
2021-01-19,180200\r
2021-01-21,180200\r
2021-01-24,174100\r
2021-01-26,180700\r
2021-01-29,176800\r
2021-01-31,190300\r
2021-02-03,190300\r
2021-02-23,185200\r
2021-02-25,185200\r
2021-02-28,187500\r
2021-03-05,187500\r
2021-03-07,174100\r
2021-03-10,188800\r
2021-03-15,197200\r
2021-03-17,197200\r
2021-03-20,197200\r
2021-03-22,187400\r
2021-03-25,187400\r
2021-03-30,197200\r
2021-04-01,197200\r
2021-04-04,197600\r
2021-04-09,197600\r
2021-04-11,176800\r
2021-04-14,188600\r
2021-04-19,208600\r
2021-04-21,208600\r
2021-04-24,208600\r
2021-04-26,205600\r
2021-05-04,216900\r
2021-05-06,216900\r
2021-05-09,219700\r
2021-05-11,219700\r
2021-05-14,211000\r
2021-05-16,212800\r
2021-05-19,206600\r
2021-05-21,208000\r
2021-05-26,205100\r
2021-05-29,205100\r
2021-06-03,209700\r
2021-06-05,209700\r
2021-06-08,212400\r
2021-06-10,212400\r
2021-06-13,209900\r
2021-06-15,213700\r
2021-06-18,209800\r
2021-06-25,210400\r
2021-06-28,210400\r
2021-07-03,203200\r
2021-07-05,203200\r
2021-07-08,203200\r
2021-07-10,203000\r
2021-07-13,204000\r
2021-07-15,198700\r
2021-07-18,209700\r
2021-07-20,209700\r
2021-07-23,204500\r
2021-07-25,215900\r
2021-07-28,208800\r
2021-07-30,213500\r
2021-08-02,207900\r
2021-08-07,211100\r
2021-08-09,202600\r
2021-08-12,202600\r
2021-08-17,200600\r
2021-08-19,200600\r
2021-08-22,204900\r
2021-08-24,204900\r
2021-08-27,199300\r
2021-08-29,202600\r
2021-09-01,197200\r
2021-09-06,195000\r
2021-09-08,198500\r
2021-09-11,196500\r
2021-09-13,200000\r
2021-09-18,199500\r
2021-09-21,201100\r
2021-09-23,197700\r
2021-09-26,197700\r
2021-09-28,197700\r
2021-10-01,199400\r
2021-10-03,196300\r
2021-10-06,202100\r
2021-10-08,202100\r
2021-10-11,198100\r
2021-10-13,203500\r
2021-10-16,199800\r
2021-10-18,203100\r
2021-10-23,198800\r
2021-10-26,198900\r
2021-11-20,189600\r
2021-11-22,189600\r
2021-11-30,206200\r
2021-12-02,197600\r
2021-12-05,200600\r
2021-12-07,200600\r
2021-12-10,197400\r
2021-12-12,206800\r
2021-12-15,206800\r
2021-12-17,194500\r
2021-12-20,196900\r
2021-12-22,189100\r
2022-01-09,195300\r
2022-01-11,195300\r
2022-01-14,197400\r
2022-01-16,197400\r
2022-01-21,192300\r
2022-01-24,199600\r
2022-01-26,198800\r
2022-01-29,198800\r
2022-02-03,198800\r
2022-02-08,195700\r
2022-02-10,195700\r
2022-02-13,195700\r
2022-02-15,195700\r
2022-02-18,208100\r
2022-02-20,196500\r
2022-02-23,203100\r
2022-02-28,201700\r
2022-03-02,207900\r
2022-03-07,206500\r
2022-03-25,210200\r
2022-03-27,210200\r
2022-04-01,210200\r
2022-04-04,210200\r
2022-04-09,215200\r
2022-04-11,215200\r
2022-04-14,224700\r
2022-04-16,224700\r
2022-05-09,218600\r
2022-05-11,218600\r
2022-05-14,222000\r
2022-05-16,222000\r
2022-05-21,217200\r
2022-05-24,217200\r
2022-05-29,218800\r
2022-05-31,218800\r
2022-06-18,211600\r
2022-06-20,211600\r
2022-06-25,211600\r
2022-06-28,211600\r
2022-07-08,220100\r
2022-07-10,220100\r
2022-07-13,220500\r
2022-07-15,221500\r
2022-07-18,215800\r
2022-07-20,220700\r
2022-07-23,216800\r
2022-07-25,220500\r
2022-07-28,220500\r
2022-07-30,218200\r
2022-08-02,218900\r
2022-08-04,212400\r
2022-08-07,218200\r
2022-08-09,218200\r
2022-08-12,211000\r
2022-08-14,216300\r
2022-08-19,208900\r
2022-08-22,216300\r
2022-08-24,215500\r
2022-08-27,215500\r
2022-08-29,215500\r
2022-09-01,217500\r
2022-09-03,209600\r
2022-09-06,209600\r
2022-09-08,209600\r
2022-09-11,210000\r
2022-09-16,209200\r
2022-09-18,209200\r
2022-09-21,200400\r
2022-09-23,206300\r
2022-09-26,201000\r
2022-09-28,201500\r
2022-10-01,201500\r
2022-10-06,201600\r
2022-10-11,198100\r
2022-10-16,198100\r
2022-11-05,195000\r
2022-11-10,195000\r
2022-11-20,186600\r
2022-11-22,186600\r
2022-11-25,193700\r
2022-11-30,189900\r
2022-12-02,193400\r
2022-12-05,192000\r
2022-12-07,194800\r
2022-12-10,194800\r
2023-01-09,190800\r
2023-01-19,196400\r
2023-01-21,195600\r
2023-01-24,208500\r
2023-01-26,208500\r
2023-01-29,194700\r
2023-01-31,208200\r
2023-02-03,191500\r
2023-02-05,194800\r
2023-02-08,189700\r
2023-02-10,192500\r
2023-02-13,192500\r
2023-02-15,186200\r
2023-02-18,186200\r
2023-03-05,125900\r
2023-03-07,125900\r
2023-03-10,126700\r
2023-03-12,126700\r
2023-03-17,119900\r
2023-03-20,121400\r
2023-03-25,124600\r
2023-03-27,124600\r
2023-03-30,124600\r
2023-04-14,117500\r
2023-04-16,117500\r
2023-04-19,119500\r
2023-04-24,116800\r
2023-04-26,119000\r
2023-04-29,118300\r
2023-05-01,129600\r
2023-05-04,129600\r
2023-05-24,150400\r
2023-05-26,150400\r
2023-05-29,170400\r
2023-06-03,166000\r
2023-06-05,182500\r
2023-06-08,184800\r
2023-06-10,196500\r
2023-06-13,196500\r
2023-06-15,195000\r
2023-06-18,211000\r
2023-06-20,210100\r
2023-06-23,222200\r
2023-06-25,222200\r
2023-06-28,222200\r
2023-07-03,210400\r
2023-07-05,210400\r
2023-07-08,213800\r
2023-07-10,213800\r
2023-07-13,209600\r
2023-07-15,212600\r
2023-07-18,210600\r
2023-07-20,213500\r
2023-07-23,210000\r
2023-07-25,214700\r
2023-07-28,210400\r
2023-07-30,211900\r
2023-08-02,211000\r
2023-08-04,213700\r
2023-08-07,211600\r
2023-08-09,214200\r
2023-08-12,210400\r
2023-08-14,212400\r
2023-08-17,207900\r
2023-08-19,208500\r
2023-08-22,203500\r
2023-08-24,204600\r
2023-08-29,201200\r
2023-09-01,209300\r
2023-09-06,204500\r
2023-09-08,204500\r
2023-09-11,198100\r
2023-09-13,200100\r
2023-09-26,195500\r
2023-10-01,200300\r
2023-10-03,200300\r
`;export{r as default};
