const r=`date,value\r
2017-03-14,529900\r
2017-03-17,529900\r
2017-04-03,538800\r
2017-04-06,538800\r
2017-04-10,538800\r
2017-04-23,530500\r
2017-04-30,530500\r
2017-06-02,529900\r
2017-06-05,529400\r
2017-06-09,529400\r
2017-06-12,529600\r
2017-08-21,444600\r
2017-08-23,444600\r
2017-08-24,444600\r
2017-08-26,454600\r
2017-08-29,454600\r
2017-10-05,373700\r
2017-10-07,373700\r
2017-10-10,373700\r
2017-10-12,373700\r
2017-10-13,373700\r
2017-10-15,373900\r
2017-10-17,340400\r
2017-10-18,340400\r
2017-10-22,340400\r
2017-10-25,340400\r
2017-11-04,243300\r
2017-11-06,243300\r
2017-11-11,243300\r
2017-11-14,243900\r
2018-02-22,564000\r
2018-02-24,564000\r
2018-02-25,564000\r
2018-02-27,564300\r
2018-03-24,565500\r
2018-04-08,577300\r
2018-04-11,577300\r
2018-04-13,577300\r
2018-04-15,577300\r
2018-04-16,577300\r
2018-04-18,577300\r
2018-04-20,564500\r
2018-04-21,564500\r
2018-04-25,564500\r
2018-04-26,564500\r
2018-05-08,560000\r
2018-05-11,560000\r
2018-05-18,565800\r
2018-05-20,557400\r
2018-05-25,557400\r
2018-06-22,564400\r
2018-06-27,569200\r
2018-07-02,560300\r
2018-07-04,567900\r
2018-07-07,563300\r
2018-07-09,564100\r
2018-07-12,564100\r
2018-07-15,558000\r
2018-07-17,559200\r
2018-08-26,496200\r
2018-08-28,496200\r
2018-09-02,495900\r
2018-09-05,495900\r
2018-09-20,461600\r
2018-09-22,455200\r
2018-09-25,461800\r
2018-09-27,461800\r
2018-09-28,461800\r
2018-09-30,443800\r
2018-10-05,440200\r
2018-10-10,429400\r
2018-10-12,435400\r
2018-10-13,435400\r
2018-10-15,435400\r
2018-10-17,427000\r
2018-10-18,427000\r
2018-10-20,427000\r
2018-10-22,397800\r
2018-10-23,397800\r
2019-01-03,397600\r
2019-01-15,397600\r
2019-02-17,465600\r
2019-02-19,465600\r
2019-02-20,465600\r
2019-02-22,468300\r
2019-02-24,468300\r
2019-02-25,468300\r
2019-02-27,468600\r
2019-03-19,471000\r
2019-03-21,471000\r
2019-03-22,471000\r
2019-03-24,471000\r
2019-03-26,471000\r
2019-03-27,471000\r
2019-03-29,474400\r
2019-03-31,474400\r
2019-04-10,473400\r
2019-04-11,473400\r
2019-04-13,473700\r
2019-05-13,485700\r
2019-05-15,485700\r
2019-05-16,485700\r
2019-05-23,485800\r
2019-05-28,485800\r
2019-05-30,471300\r
2019-05-31,471300\r
2019-06-02,489700\r
2019-06-04,489700\r
2019-06-17,469200\r
2019-06-19,469200\r
2019-06-24,469200\r
2019-06-25,469200\r
2019-06-27,470800\r
2019-06-29,470800\r
2019-06-30,470800\r
2019-07-02,467700\r
2019-07-04,471500\r
2019-07-05,471500\r
2019-07-07,465000\r
2019-07-09,465000\r
2019-07-10,465000\r
2019-07-15,464200\r
2019-07-17,460300\r
2019-07-22,433400\r
2019-07-24,428500\r
2019-07-25,428500\r
2019-07-29,428500\r
2019-08-01,418800\r
2019-08-04,407100\r
2019-08-08,398300\r
2019-08-09,398300\r
2019-08-14,398300\r
2019-08-21,370000\r
2019-08-23,370000\r
2019-08-24,370000\r
2019-08-26,370800\r
2019-08-28,370800\r
2019-08-29,370800\r
2019-08-31,359100\r
2019-09-02,359100\r
2019-09-03,359100\r
2019-09-07,360800\r
2019-09-10,343500\r
2019-09-12,348900\r
2019-09-13,348900\r
2019-09-15,341300\r
2019-09-17,343100\r
2019-09-18,343100\r
2019-09-20,340400\r
2019-09-22,340400\r
2019-09-30,338700\r
2019-12-04,360700\r
2019-12-14,382100\r
2019-12-19,377600\r
2019-12-29,392800\r
2020-01-23,478900\r
2020-01-26,478900\r
2020-02-07,507600\r
2020-02-15,507600\r
2020-02-22,535500\r
2020-03-23,568100\r
2020-03-25,568100\r
2020-03-26,568100\r
2020-03-28,564100\r
2020-03-30,564400\r
2020-03-31,564400\r
2020-04-02,560900\r
2020-04-04,560900\r
2020-04-05,560900\r
2020-04-07,562600\r
2020-04-09,558400\r
2020-04-10,558400\r
2020-04-12,558400\r
2020-04-14,565800\r
2020-04-15,565800\r
2020-04-17,565800\r
2020-04-20,560500\r
2020-04-22,568100\r
2020-04-24,567100\r
2020-04-25,567100\r
2020-04-27,567100\r
2020-05-04,567100\r
2020-05-07,567300\r
2020-05-09,554800\r
2020-05-10,554800\r
2020-05-12,554800\r
2020-05-17,559600\r
2020-05-19,559600\r
2020-05-20,559600\r
2020-05-27,559700\r
2020-05-29,559700\r
2020-05-30,559700\r
2020-06-01,557800\r
2020-06-03,564700\r
2020-06-08,564700\r
2020-07-06,527200\r
2020-07-08,527200\r
2020-07-09,527200\r
2020-07-11,527200\r
2020-07-13,527200\r
2020-07-14,527200\r
2020-07-18,527200\r
2020-07-19,527200\r
2020-07-21,527200\r
2020-07-31,514200\r
2020-08-05,522200\r
2020-08-07,522200\r
2020-08-08,522200\r
2020-08-10,517300\r
2020-08-12,517300\r
2020-08-13,517300\r
2020-08-15,517300\r
2020-08-17,521900\r
2020-08-20,514000\r
2020-08-25,520500\r
2020-09-04,512400\r
2020-09-07,488400\r
2020-09-09,492900\r
2020-09-11,492900\r
2020-09-12,492900\r
2020-09-14,485900\r
2020-09-16,485900\r
2020-09-17,485900\r
2020-09-19,488800\r
2020-09-21,481900\r
2020-09-22,481900\r
2020-11-18,464800\r
2020-11-20,464800\r
2020-11-21,464800\r
2020-11-23,464800\r
2020-11-25,464800\r
2020-11-26,464800\r
2020-11-28,465200\r
2020-12-06,451600\r
2020-12-10,451600\r
2020-12-13,463400\r
2021-02-21,570200\r
2021-02-23,570200\r
2021-02-24,570200\r
2021-02-28,570200\r
2021-03-01,570200\r
2021-03-08,585300\r
2021-03-10,585300\r
2021-03-28,582300\r
2021-03-30,582300\r
2021-03-31,582300\r
2021-04-02,593100\r
2021-04-04,593100\r
2021-04-09,590300\r
2021-04-27,588800\r
2021-06-01,580800\r
2021-06-03,580800\r
2021-06-11,583100\r
2021-06-16,583300\r
2021-06-19,583300\r
2021-06-21,583300\r
2021-06-23,574300\r
2021-06-26,574300\r
2021-07-21,562600\r
2021-07-23,562600\r
2021-07-29,562600\r
2021-09-04,560200\r
2021-09-06,560200\r
2021-09-07,560200\r
2021-09-09,560200\r
2021-09-24,540700\r
2021-10-01,540700\r
2021-10-14,524500\r
2021-10-16,524500\r
2021-10-19,534600\r
2021-10-24,523700\r
2021-10-29,530600\r
2021-12-18,545200\r
2021-12-21,545200\r
2021-12-23,552800\r
2022-02-26,568200\r
2022-02-28,568200\r
2022-03-03,568200\r
2022-03-05,568200\r
2022-03-06,568200\r
2022-03-23,584700\r
2022-03-25,584700\r
2022-03-26,584700\r
2022-03-28,585100\r
2022-04-17,588200\r
2022-04-20,588200\r
2022-04-22,588200\r
2022-04-27,588300\r
2022-05-04,579600\r
2022-05-07,579600\r
2022-05-17,580200\r
2022-05-25,580200\r
2022-06-11,575300\r
2022-06-13,575300\r
2022-06-16,578400\r
2022-06-18,578400\r
2022-06-19,578400\r
2022-06-21,573300\r
2022-06-29,567800\r
2022-07-01,570700\r
2022-07-06,562000\r
2022-07-08,562000\r
2022-07-11,563200\r
2022-07-13,563200\r
2022-07-14,563200\r
2022-07-18,556400\r
2022-07-19,556400\r
2022-07-21,556400\r
2022-08-10,513500\r
2022-08-12,510000\r
2022-08-13,510000\r
2022-08-17,510000\r
2022-08-20,510000\r
2022-10-09,411000\r
2022-10-12,411000\r
2022-10-16,411000\r
2022-10-17,411000\r
2022-10-19,411900\r
2022-10-22,404200\r
2022-10-26,404200\r
2022-11-13,372100\r
2022-11-20,372100\r
2023-05-27,489300\r
2023-05-29,489300\r
2023-06-01,499500\r
2023-06-03,499500\r
2023-06-04,499500\r
2023-06-06,499500\r
2023-06-08,489600\r
2023-07-06,452500\r
2023-07-08,452500\r
2023-07-11,458300\r
2023-07-14,458300\r
2023-07-18,450000\r
2023-07-19,450000\r
2023-09-09,329600\r
2023-09-11,329600\r
2023-09-14,329600\r
2023-09-17,329600\r
2023-09-19,329600\r
2023-09-24,260800\r
2023-09-26,260800\r
2023-10-01,260800\r
2023-10-02,260800\r
`;export{r as default};
