const r=`date,value\r
2017-02-15,122300\r
2017-02-18,113200\r
2017-02-25,120600\r
2017-03-10,124500\r
2017-03-17,130300\r
2017-03-30,131300\r
2017-04-09,122000\r
2017-04-19,116400\r
2017-04-29,125300\r
2017-05-09,136700\r
2017-05-16,134700\r
2017-05-26,130800\r
2017-06-18,137300\r
2017-07-05,136000\r
2017-07-18,131100\r
2017-08-02,117200\r
2017-08-04,124300\r
2017-08-07,119200\r
2017-08-14,121000\r
2017-08-17,109900\r
2017-08-22,105100\r
2017-09-01,112200\r
2017-10-08,110100\r
2017-10-11,111100\r
2017-10-13,113800\r
2017-10-16,112100\r
2017-10-18,110500\r
2017-10-26,112200\r
2017-10-28,111100\r
2017-10-31,111000\r
2017-11-17,115200\r
2017-11-22,114600\r
2017-11-27,112800\r
2017-12-25,121100\r
2018-01-09,122600\r
2018-01-24,126600\r
2018-02-10,122500\r
2018-02-25,123300\r
2018-03-07,130600\r
2018-03-15,121600\r
2018-03-22,135400\r
2018-04-19,121400\r
2018-04-21,128900\r
2018-05-06,119100\r
2018-05-11,137800\r
2018-05-21,120200\r
2018-06-20,132300\r
2018-06-23,135900\r
2018-06-25,133200\r
2018-07-08,126900\r
2018-07-10,131100\r
2018-07-13,128400\r
2018-07-18,122100\r
2018-07-23,125600\r
2018-07-25,124400\r
2018-07-30,121900\r
2018-08-02,117600\r
2018-08-04,114800\r
2018-08-12,112200\r
2018-08-19,109300\r
2018-08-22,105900\r
2018-08-27,97700\r
2018-09-01,96700\r
2018-09-03,94300\r
2018-09-08,101300\r
2018-09-11,103000\r
2018-09-16,94200\r
2018-09-26,100300\r
2018-09-28,107600\r
2018-10-03,104700\r
2018-10-06,104400\r
2018-10-23,104400\r
2018-11-15,107800\r
2018-11-17,111300\r
2018-11-22,105100\r
2018-11-27,108600\r
2019-01-09,111100\r
2019-01-16,119100\r
2019-01-19,120800\r
2019-02-03,129700\r
2019-02-13,112100\r
2019-02-15,123600\r
2019-02-20,117900\r
2019-02-23,113100\r
2019-02-25,121900\r
2019-03-20,112800\r
2019-03-22,119400\r
2019-03-25,125500\r
2019-03-27,127900\r
2019-03-30,119400\r
2019-05-01,121200\r
2019-05-14,127400\r
2019-05-31,119700\r
2019-06-18,137300\r
2019-06-25,112300\r
2019-07-05,130300\r
2019-07-08,125200\r
2019-07-10,127600\r
2019-07-15,133200\r
2019-07-25,121700\r
2019-08-02,115300\r
2019-08-04,125400\r
2019-08-14,124000\r
2019-08-17,120000\r
2019-08-22,117800\r
2019-08-24,123500\r
2019-09-03,122400\r
2019-09-13,119800\r
2019-09-16,115900\r
2019-09-18,96500\r
2019-10-08,115200\r
2019-10-11,114700\r
2019-10-13,118200\r
2019-12-05,125300\r
2019-12-15,101600\r
2019-12-17,114600\r
2019-12-27,115900\r
2019-12-30,113500\r
2020-01-06,126800\r
2020-01-11,121200\r
2020-01-14,118800\r
2020-01-16,114900\r
2020-01-19,112700\r
2020-02-03,108900\r
2020-02-05,125300\r
2020-02-15,115200\r
2020-02-20,122600\r
2020-03-21,122800\r
2020-03-24,116500\r
2020-03-26,118000\r
2020-03-31,131900\r
2020-04-03,118600\r
2020-04-05,123100\r
2020-04-08,128200\r
2020-04-10,124500\r
2020-04-15,128600\r
2020-05-08,127400\r
2020-05-18,128400\r
2020-05-20,124000\r
2020-05-25,133300\r
2020-05-28,129500\r
2020-05-30,124900\r
2020-06-19,105100\r
2020-06-24,123400\r
2020-07-09,125400\r
2020-07-19,121400\r
2020-07-24,113000\r
2020-07-27,119200\r
2020-08-06,108300\r
2020-08-08,113600\r
2020-09-02,105700\r
2020-09-05,109100\r
2020-09-10,112100\r
2020-09-12,109400\r
2020-09-30,111600\r
2020-10-17,121600\r
2020-10-30,124300\r
2020-11-14,115400\r
2020-11-21,120500\r
2020-11-26,117500\r
2020-11-29,108200\r
2020-12-26,110400\r
2021-01-03,125800\r
2021-01-10,120000\r
2021-01-18,118600\r
2021-02-17,132400\r
2021-02-19,121300\r
2021-02-24,133000\r
2021-03-01,120900\r
2021-03-04,122400\r
2021-03-21,123900\r
2021-03-24,117600\r
2021-03-29,120200\r
2021-03-31,126000\r
2021-04-03,120200\r
2021-04-05,126700\r
2021-04-15,127100\r
2021-04-23,124500\r
2021-05-03,120700\r
2021-05-08,123700\r
2021-06-09,120400\r
2021-06-14,126800\r
2021-07-17,124000\r
2021-07-22,119900\r
2021-08-11,127800\r
2021-08-26,120100\r
2021-08-31,118400\r
2021-09-05,119700\r
2021-09-12,121800\r
2021-09-25,113900\r
2021-10-12,118400\r
2021-10-15,115500\r
2021-10-17,117700\r
2021-10-27,111400\r
2021-11-19,116100\r
2021-12-14,120500\r
2021-12-16,116100\r
2021-12-19,112900\r
2021-12-21,119400\r
2022-01-15,111200\r
2022-01-23,119100\r
2022-01-25,120000\r
2022-02-09,118800\r
2022-02-27,123400\r
2022-03-09,115700\r
2022-03-19,118500\r
2022-03-21,118100\r
2022-03-24,118500\r
2022-03-26,122700\r
2022-04-05,119900\r
2022-05-08,121300\r
2022-05-10,125400\r
2022-05-28,121800\r
2022-05-30,127800\r
2022-06-17,120900\r
2022-07-02,127600\r
2022-07-12,129800\r
2022-07-14,128900\r
2022-07-17,128000\r
2022-07-24,124000\r
2022-07-27,111500\r
2022-08-01,117600\r
2022-08-06,112700\r
2022-08-08,110700\r
2022-08-11,107000\r
2022-08-13,100800\r
2022-09-05,93500\r
2022-09-15,95200\r
2022-09-20,94700\r
2022-09-22,97200\r
2022-10-05,94500\r
2022-10-12,99900\r
2022-10-15,103100\r
2022-10-30,110600\r
2022-11-06,106400\r
2022-11-16,107700\r
2022-12-21,116500\r
2023-01-03,121300\r
2023-01-18,119300\r
2023-02-02,115600\r
2023-02-04,126100\r
2023-02-09,119200\r
2023-02-12,119000\r
2023-02-17,125200\r
2023-02-19,128800\r
2023-02-24,107300\r
2023-03-01,127700\r
2023-03-09,120700\r
2023-04-05,132100\r
2023-05-28,135100\r
2023-05-30,127300\r
2023-06-02,126900\r
2023-06-24,130000\r
2023-07-07,128100\r
2023-07-14,117800\r
2023-07-17,119200\r
2023-07-22,126100\r
`;export{r as default};
