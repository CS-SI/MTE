const n=`date,value\r
2017-02-25,124800\r
2017-03-07,121200\r
2017-03-14,127400\r
2017-03-17,136000\r
2017-03-27,133000\r
2017-04-03,127000\r
2017-04-06,127000\r
2017-04-23,120700\r
2017-05-03,120700\r
2017-05-16,109700\r
2017-05-23,109700\r
2017-05-26,126800\r
2017-06-02,126800\r
2017-06-05,126800\r
2017-06-25,118300\r
2017-07-02,118000\r
2017-07-05,122500\r
2017-07-07,120100\r
2017-07-10,120100\r
2017-07-12,120100\r
2017-07-17,112600\r
2017-07-22,110900\r
2017-07-27,110900\r
2017-08-06,122600\r
2017-08-11,119300\r
2017-08-14,115600\r
2017-08-19,116100\r
2017-08-21,113900\r
2017-08-24,110700\r
2017-08-26,108400\r
2017-08-29,115000\r
2017-09-03,97100\r
2017-09-05,100700\r
2017-09-08,95300\r
2017-09-20,95200\r
2017-09-23,106000\r
2017-09-28,106000\r
2017-10-03,105100\r
2017-10-05,98300\r
2017-10-08,98300\r
2017-10-10,104800\r
2017-10-13,99100\r
2017-10-15,101700\r
2017-10-18,99400\r
2017-10-25,89600\r
2017-10-28,84900\r
2017-10-30,83600\r
2017-11-07,86600\r
2017-11-14,90000\r
2017-11-17,93500\r
2017-11-19,95100\r
2017-11-22,85000\r
2017-11-24,85000\r
2017-11-27,91000\r
2017-11-29,83500\r
2018-02-02,112900\r
2018-02-10,123200\r
2018-02-12,122200\r
2018-03-14,114500\r
2018-03-19,114500\r
2018-03-22,114500\r
2018-04-18,133100\r
2018-04-21,134900\r
2018-04-23,128600\r
2018-04-26,129100\r
2018-05-06,109000\r
2018-05-11,115600\r
2018-05-18,114900\r
2018-05-21,114900\r
2018-06-20,115700\r
2018-06-22,117800\r
2018-06-25,110000\r
2018-06-27,110000\r
2018-07-02,109400\r
2018-07-07,106900\r
2018-07-10,107600\r
2018-07-12,107100\r
2018-07-15,110300\r
2018-07-17,110300\r
2018-07-20,115900\r
2018-07-22,117900\r
2018-07-25,119100\r
2018-07-27,128600\r
2018-07-30,112500\r
2018-08-01,119000\r
2018-08-04,112200\r
2018-08-06,111100\r
2018-08-11,108300\r
2018-08-16,121300\r
2018-08-19,113400\r
2018-08-21,105200\r
2018-08-26,112800\r
2018-08-31,106200\r
2018-09-08,105700\r
2018-09-10,114500\r
2018-09-13,114500\r
2018-09-20,110200\r
2018-09-23,104900\r
2018-09-25,100500\r
2018-09-28,102300\r
2018-09-30,102300\r
2018-10-03,101300\r
2018-10-05,99300\r
2018-10-23,93000\r
2018-10-25,93000\r
2018-10-30,84600\r
2018-11-04,81400\r
2018-11-29,85800\r
2018-12-19,98800\r
2018-12-27,99200\r
2018-12-29,99200\r
2019-01-03,98000\r
2019-01-11,98000\r
2019-01-16,105400\r
2019-01-23,95400\r
2019-01-28,95400\r
2019-02-12,113500\r
2019-02-15,114300\r
2019-02-17,107300\r
2019-02-20,112300\r
2019-02-22,108400\r
2019-02-25,111100\r
2019-02-27,108000\r
2019-03-12,115400\r
2019-03-22,106500\r
2019-03-24,106500\r
2019-03-27,104500\r
2019-03-29,107800\r
2019-04-01,103900\r
2019-04-08,106100\r
2019-04-13,112200\r
2019-05-01,109500\r
2019-05-06,123500\r
2019-05-11,123500\r
2019-05-13,111200\r
2019-05-16,111200\r
2019-05-23,105300\r
2019-05-31,122900\r
2019-06-02,112000\r
2019-06-12,122100\r
2019-06-17,107900\r
2019-06-22,107900\r
2019-06-25,107900\r
2019-06-27,108400\r
2019-06-30,108300\r
2019-07-02,108300\r
2019-07-05,112000\r
2019-07-07,112000\r
2019-07-10,112000\r
2019-07-12,116600\r
2019-07-15,119700\r
2019-07-17,113300\r
2019-07-22,113600\r
2019-07-25,116600\r
2019-08-01,117400\r
2019-08-04,103500\r
2019-08-09,106700\r
2019-08-11,117300\r
2019-08-14,106500\r
2019-08-16,114700\r
2019-08-21,113300\r
2019-08-24,118600\r
2019-08-26,117800\r
2019-08-29,117800\r
2019-08-31,108900\r
2019-09-03,94900\r
2019-09-05,94900\r
2019-09-13,101600\r
2019-09-15,97800\r
2019-09-18,101500\r
2019-09-20,106100\r
2019-10-05,105800\r
2019-10-08,86500\r
2019-10-13,103200\r
2019-10-25,100300\r
2019-12-29,106700\r
2020-01-06,94400\r
2020-01-11,115400\r
2020-01-16,100900\r
2020-01-18,109700\r
2020-02-05,94800\r
2020-02-07,94800\r
2020-02-15,96200\r
2020-02-20,86400\r
2020-02-22,85200\r
2020-03-01,85200\r
2020-03-08,115000\r
2020-03-13,125700\r
2020-03-18,125100\r
2020-03-21,122100\r
2020-03-28,126900\r
2020-03-31,114800\r
2020-04-05,121200\r
2020-04-07,130000\r
2020-04-10,129100\r
2020-04-12,128300\r
2020-04-15,132800\r
2020-04-25,131200\r
2020-05-07,100400\r
2020-05-17,108600\r
2020-05-20,107400\r
2020-05-22,109400\r
2020-05-25,112700\r
2020-05-27,108500\r
2020-05-30,108500\r
2020-06-19,94500\r
2020-06-21,114700\r
2020-06-24,106100\r
2020-06-26,111200\r
2020-07-01,111200\r
2020-07-04,106300\r
2020-07-09,114500\r
2020-07-11,108700\r
2020-07-14,112100\r
2020-07-19,115400\r
2020-07-21,113300\r
2020-07-24,108600\r
2020-07-26,112000\r
2020-07-29,111000\r
2020-07-31,105500\r
2020-08-03,105500\r
2020-08-05,105400\r
2020-08-08,107300\r
2020-08-10,120600\r
2020-08-15,105600\r
2020-08-20,105800\r
2020-08-23,104900\r
2020-08-25,97700\r
2020-09-02,96600\r
2020-09-04,97900\r
2020-09-07,86800\r
2020-09-12,96600\r
2020-09-14,85300\r
2020-09-17,94100\r
2020-09-19,91000\r
2020-11-08,74700\r
2020-11-11,76600\r
2020-11-18,76000\r
2020-11-21,76000\r
2020-11-23,83100\r
2020-11-26,82300\r
2020-12-18,111900\r
2021-01-17,112100\r
2021-02-14,123800\r
2021-02-19,125800\r
2021-02-24,125700\r
2021-03-01,127300\r
2021-03-23,106700\r
2021-03-26,106700\r
2021-03-28,118400\r
2021-03-31,113600\r
2021-04-02,124600\r
2021-04-05,124400\r
2021-04-07,124400\r
2021-04-15,135000\r
2021-04-17,135000\r
2021-04-20,135000\r
2021-04-22,135000\r
2021-05-27,124800\r
2021-05-30,125600\r
2021-06-09,119200\r
2021-06-11,115800\r
2021-06-14,115200\r
2021-06-16,116300\r
2021-06-19,116300\r
2021-06-21,115500\r
2021-06-26,114900\r
2021-07-01,130700\r
2021-07-09,122200\r
2021-07-19,107100\r
2021-07-21,107100\r
2021-07-26,107100\r
2021-07-29,121000\r
2021-08-05,115500\r
2021-08-10,113300\r
2021-08-13,113300\r
2021-08-18,113300\r
2021-08-20,116400\r
2021-08-23,115100\r
2021-08-25,115100\r
2021-08-28,126600\r
2021-08-30,111600\r
2021-09-04,120200\r
2021-09-07,117200\r
2021-09-22,113600\r
2021-09-24,112700\r
2021-09-29,119300\r
2021-10-12,99900\r
2021-10-14,108100\r
2021-10-17,95700\r
2021-10-24,93800\r
2021-10-27,92800\r
2021-12-16,104900\r
2021-12-18,118300\r
2021-12-21,111200\r
2021-12-23,108200\r
2022-01-05,107700\r
2022-01-12,107700\r
2022-01-15,110800\r
2022-01-17,107700\r
2022-01-22,115000\r
2022-01-25,107200\r
2022-01-27,107300\r
2022-01-30,107300\r
2022-02-01,107300\r
2022-02-06,107600\r
2022-02-09,112400\r
2022-02-26,113100\r
2022-03-01,113400\r
2022-03-03,113400\r
2022-03-08,113400\r
2022-03-23,106100\r
2022-03-26,112200\r
2022-04-05,128500\r
2022-04-10,127500\r
2022-04-15,123400\r
2022-04-17,116100\r
2022-04-27,110500\r
2022-05-15,111200\r
2022-05-17,115800\r
2022-05-20,116200\r
2022-05-22,116200\r
2022-05-27,113100\r
2022-06-01,112800\r
2022-06-04,112800\r
2022-06-06,112800\r
2022-06-11,112800\r
2022-06-16,91800\r
2022-06-19,109000\r
2022-06-29,113600\r
2022-07-01,114300\r
2022-07-04,114300\r
2022-07-06,116500\r
2022-07-11,119300\r
2022-07-14,116700\r
2022-07-16,119000\r
2022-07-19,120000\r
2022-07-21,117400\r
2022-07-24,117000\r
2022-07-26,112200\r
2022-07-29,114500\r
2022-07-31,113300\r
2022-08-03,112900\r
2022-08-05,115700\r
2022-08-08,113300\r
2022-08-10,110100\r
2022-08-13,110000\r
2022-08-15,116200\r
2022-08-20,104400\r
2022-08-23,113500\r
2022-08-28,107900\r
2022-08-30,107900\r
2022-09-02,107200\r
2022-09-04,110800\r
2022-09-12,110400\r
2022-09-19,110000\r
2022-09-22,102700\r
2022-10-02,106500\r
2022-10-04,92100\r
2022-10-07,97400\r
2022-10-09,92700\r
2022-10-12,92700\r
2022-10-22,87400\r
2022-10-24,88500\r
2022-10-27,88500\r
2022-11-01,88500\r
2022-11-11,69900\r
2022-11-13,69900\r
2022-11-16,86200\r
2023-01-20,53300\r
2023-02-06,111000\r
2023-02-09,114600\r
2023-02-11,112500\r
2023-02-14,115200\r
2023-02-16,113600\r
2023-02-19,114600\r
2023-02-21,116000\r
2023-02-26,110700\r
2023-03-01,115400\r
2023-03-03,109500\r
2023-03-16,127600\r
2023-03-28,126000\r
2023-04-05,138800\r
2023-04-07,127800\r
2023-04-15,137900\r
2023-04-17,122600\r
2023-04-20,118000\r
2023-05-02,115900\r
2023-05-27,115800\r
2023-05-30,114700\r
2023-06-04,116100\r
2023-06-24,123700\r
2023-06-26,123700\r
2023-06-29,136500\r
2023-07-06,135600\r
2023-07-09,127900\r
2023-07-14,104700\r
2023-07-16,104700\r
2023-07-19,104700\r
2023-07-21,104700\r
`;export{n as default};
