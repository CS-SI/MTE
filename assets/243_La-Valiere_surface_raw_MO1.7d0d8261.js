const r=`date,value\r
2017-01-19,682800\r
2017-02-08,808800\r
2017-02-18,758200\r
2017-03-30,846900\r
2017-04-09,854800\r
2017-04-12,812800\r
2017-04-22,834100\r
2017-05-09,814100\r
2017-06-18,832500\r
2017-06-21,867100\r
2017-10-04,758900\r
2017-10-14,752700\r
2017-11-05,765800\r
2017-11-13,732600\r
2017-11-15,742500\r
2017-12-18,785900\r
2018-02-21,827300\r
2018-02-26,878700\r
2018-02-28,804400\r
2018-04-17,867600\r
2018-04-19,845200\r
2018-05-04,856500\r
2018-05-07,855100\r
2018-05-17,865300\r
2018-05-19,846600\r
2018-06-23,863400\r
2018-06-26,857500\r
2018-06-28,842700\r
2018-07-01,835900\r
2018-07-08,849000\r
2018-07-16,836500\r
2018-07-26,883500\r
2018-08-02,834100\r
2018-08-05,822300\r
2018-09-11,821700\r
2018-09-26,800200\r
2018-10-04,798600\r
2018-10-19,760900\r
2018-10-21,783600\r
2018-10-24,766200\r
2018-11-08,731000\r
2018-11-18,696300\r
2018-12-25,762000\r
2019-01-17,751200\r
2019-02-03,816800\r
2019-02-23,763400\r
2019-02-26,785300\r
2019-03-23,767800\r
2019-03-30,877100\r
2019-04-12,789600\r
2019-04-19,872400\r
2019-04-27,830900\r
2019-05-12,819200\r
2019-06-01,844300\r
2019-06-08,767300\r
2019-06-26,777000\r
2019-06-28,794700\r
2019-07-03,831500\r
2019-07-06,761900\r
2019-07-08,766600\r
2019-07-11,790200\r
2019-07-16,814700\r
2019-07-23,694700\r
2019-08-10,760600\r
2019-08-22,670000\r
2019-08-27,803100\r
2019-09-11,723100\r
2019-09-16,761300\r
2019-09-19,681200\r
2019-11-13,828300\r
2019-12-03,738600\r
2019-12-23,854600\r
2019-12-25,814400\r
2019-12-30,760800\r
2020-01-04,800300\r
2020-01-19,781800\r
2020-01-22,793600\r
2020-02-06,848900\r
2020-03-27,821700\r
2020-04-01,784900\r
2020-04-11,786800\r
2020-04-23,842200\r
2020-04-26,847600\r
2020-05-08,817000\r
2020-05-18,862300\r
2020-05-21,858400\r
2020-05-26,842900\r
2020-05-28,835100\r
2020-05-31,835700\r
2020-06-02,884200\r
2020-06-22,855000\r
2020-06-25,671400\r
2020-07-12,818000\r
2020-07-22,805200\r
2020-07-30,793800\r
2020-08-04,825900\r
2020-08-06,771300\r
2020-08-09,753800\r
2020-08-11,772900\r
2020-09-08,732800\r
2020-11-04,713900\r
2020-11-12,720500\r
2020-11-29,750300\r
2020-12-04,743100\r
2021-01-01,840800\r
2021-02-10,846700\r
2021-02-27,871300\r
2021-03-02,802200\r
2021-03-07,840800\r
2021-03-19,821400\r
2021-03-29,864500\r
2021-04-01,834500\r
2021-04-13,829700\r
2021-04-23,843600\r
2021-05-21,829200\r
2021-05-28,813400\r
2021-05-31,807800\r
2021-06-05,804600\r
2021-07-17,809900\r
2021-07-20,835900\r
2021-07-22,831200\r
2021-08-14,814900\r
2021-09-13,846300\r
2021-09-23,803200\r
2021-09-30,780600\r
2021-10-08,822400\r
2021-10-28,799200\r
2021-11-09,781100\r
2021-11-19,779500\r
2021-11-22,791800\r
2021-11-24,786700\r
2022-01-01,834100\r
2022-01-06,839700\r
2022-01-21,805600\r
2022-02-05,799400\r
2022-02-17,855200\r
2022-02-25,821200\r
2022-02-27,856800\r
2022-03-14,817600\r
2022-03-22,815600\r
2022-03-24,832600\r
2022-03-27,840800\r
2022-04-16,831700\r
2022-04-21,803600\r
2022-05-01,847700\r
2022-05-08,796500\r
2022-05-28,815300\r
2022-06-12,806300\r
2022-06-15,807600\r
2022-06-17,792800\r
2022-07-10,807300\r
2022-07-12,807900\r
2022-07-15,806700\r
2022-07-17,769700\r
2022-07-30,793400\r
2022-08-04,743200\r
2022-08-06,778000\r
2022-08-09,780400\r
2022-08-11,785300\r
2022-09-18,732000\r
2022-11-02,704500\r
2022-11-19,746000\r
2022-11-22,735200\r
2022-11-29,738700\r
2022-12-09,748000\r
2022-12-27,830300\r
2022-12-29,835600\r
2023-01-08,832500\r
2023-01-11,836300\r
2023-01-13,816800\r
2023-01-21,849900\r
2023-02-07,836100\r
2023-02-15,829300\r
2023-02-27,806500\r
2023-03-02,846800\r
2023-05-26,829800\r
2023-05-28,815200\r
2023-06-02,831500\r
2023-06-05,850800\r
2023-06-07,832100\r
2023-06-15,843000\r
2023-06-25,828600\r
2023-07-07,803100\r
2023-08-21,801300\r
2023-09-03,807300\r
2023-09-15,784400\r
2023-09-30,752900\r
2023-10-08,772900\r
2023-10-10,769400\r
2023-11-07,801800\r
2023-12-02,785000\r
`;export{r as default};