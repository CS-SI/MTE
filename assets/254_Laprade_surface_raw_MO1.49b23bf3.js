const r=`date,value\r
2017-02-22,733300\r
2017-02-25,744100\r
2017-03-17,812000\r
2017-04-23,844900\r
2017-05-16,836000\r
2017-06-02,768300\r
2017-06-12,843800\r
2017-06-15,834300\r
2017-06-22,827600\r
2017-06-25,828600\r
2017-07-05,817400\r
2017-07-07,810300\r
2017-07-17,796400\r
2017-08-04,806900\r
2017-08-14,812200\r
2017-08-21,801400\r
2017-08-24,813600\r
2017-08-26,802500\r
2017-09-20,792300\r
2017-09-23,791100\r
2017-10-05,776300\r
2017-10-08,771900\r
2017-10-10,773600\r
2017-10-13,772700\r
2017-10-15,766800\r
2017-10-18,762700\r
2017-10-25,761000\r
2017-10-28,739200\r
2017-11-19,732200\r
2017-12-24,737100\r
2018-01-01,743700\r
2018-02-25,832700\r
2018-03-14,862000\r
2018-04-01,880000\r
2018-04-18,885000\r
2018-04-21,890200\r
2018-04-26,886500\r
2018-05-11,885400\r
2018-06-20,868900\r
2018-06-25,871200\r
2018-07-07,860000\r
2018-07-15,860500\r
2018-07-25,864400\r
2018-07-27,865500\r
2018-08-01,849000\r
2018-08-04,856800\r
2018-08-06,863000\r
2018-08-11,851700\r
2018-08-19,851500\r
2018-08-21,845600\r
2018-09-03,829200\r
2018-09-08,839500\r
2018-09-20,814900\r
2018-09-23,798600\r
2018-09-25,803400\r
2018-09-28,780600\r
2018-09-30,768800\r
2018-10-03,751700\r
2018-10-05,751300\r
2018-10-23,712500\r
2018-10-25,722600\r
2018-12-27,693100\r
2019-01-03,686600\r
2019-02-12,762700\r
2019-02-15,770800\r
2019-02-17,745300\r
2019-02-20,776000\r
2019-02-22,757700\r
2019-02-27,779800\r
2019-03-12,749100\r
2019-03-22,783700\r
2019-03-24,775600\r
2019-03-27,766300\r
2019-03-29,771700\r
2019-04-13,769200\r
2019-05-01,791300\r
2019-05-06,822200\r
2019-05-13,785600\r
2019-06-02,823100\r
2019-06-27,826900\r
2019-06-30,856000\r
2019-07-05,851700\r
2019-07-12,848200\r
2019-07-15,847700\r
2019-07-25,850900\r
2019-08-01,848300\r
2019-08-04,833700\r
2019-08-09,838800\r
2019-08-14,844500\r
2019-08-16,819200\r
2019-08-21,767300\r
2019-08-24,827800\r
2019-08-29,817400\r
2019-08-31,837100\r
2019-09-03,817400\r
2019-09-13,815000\r
2019-09-15,820600\r
2019-10-08,792000\r
2019-10-30,769500\r
2019-12-29,765700\r
2020-01-01,769500\r
2020-01-11,795000\r
2020-02-05,785100\r
2020-02-20,758700\r
2020-02-22,759800\r
2020-03-08,801300\r
2020-03-11,828700\r
2020-03-13,825200\r
2020-03-18,802700\r
2020-04-05,815200\r
2020-04-10,827200\r
2020-05-07,821200\r
2020-05-20,866600\r
2020-05-22,850700\r
2020-05-25,863000\r
2020-05-27,854100\r
2020-06-14,849400\r
2020-06-19,856100\r
2020-06-21,836100\r
2020-07-09,870100\r
2020-07-14,860300\r
2020-07-19,854500\r
2020-07-21,816000\r
2020-07-24,856900\r
2020-07-31,829000\r
2020-08-05,814100\r
2020-08-08,850000\r
2020-08-10,848900\r
2020-08-20,825700\r
2020-08-25,794600\r
2020-09-02,797200\r
2020-09-04,774900\r
2020-09-12,792500\r
2020-09-14,796800\r
2020-09-17,812500\r
2020-09-19,827500\r
2020-10-17,785600\r
2020-10-24,779900\r
2020-11-11,724500\r
2020-11-18,721600\r
2020-11-21,707900\r
2021-02-11,805300\r
2021-03-23,857400\r
2021-03-28,880300\r
2021-04-05,872900\r
2021-04-17,861100\r
2021-04-20,871700\r
2021-05-20,863900\r
2021-05-27,879700\r
2021-06-09,861100\r
2021-06-11,864600\r
2021-06-14,862500\r
2021-06-16,857400\r
2021-06-19,858900\r
2021-06-26,847100\r
2021-07-19,842300\r
2021-07-29,857100\r
2021-08-10,855600\r
2021-08-20,857300\r
2021-08-28,839300\r
2021-09-24,838200\r
2021-10-12,820200\r
2021-10-14,810900\r
2021-10-27,791600\r
2021-12-16,825400\r
2021-12-18,829800\r
2021-12-21,831400\r
2022-01-15,828500\r
2022-01-17,824400\r
2022-01-22,835500\r
2022-01-25,829000\r
2022-01-27,828300\r
2022-02-09,845400\r
2022-02-26,836000\r
2022-03-01,857400\r
2022-03-26,854200\r
2022-04-10,879800\r
2022-04-15,882400\r
2022-04-17,869000\r
2022-05-12,869600\r
2022-05-17,870100\r
2022-05-22,863900\r
2022-06-01,864700\r
2022-06-06,871700\r
2022-06-19,864500\r
2022-07-11,857400\r
2022-07-16,855700\r
2022-07-19,857600\r
2022-07-21,856300\r
2022-07-24,849900\r
2022-07-31,851100\r
2022-08-03,849200\r
2022-08-08,845400\r
2022-08-10,844900\r
2022-08-20,836000\r
2022-08-28,838500\r
2022-08-30,840600\r
2022-09-04,842700\r
2022-09-12,835500\r
2022-09-19,815300\r
2022-10-02,815500\r
2022-10-04,802300\r
2022-10-09,802100\r
2022-10-22,795400\r
2022-11-01,787500\r
2022-11-06,784700\r
2022-11-08,802300\r
2022-11-13,775000\r
2022-12-06,781700\r
2023-01-10,685800\r
2023-02-16,687800\r
2023-02-19,684000\r
2023-03-13,719000\r
2023-03-16,719900\r
2023-03-28,752900\r
2023-04-07,768300\r
2023-05-02,807100\r
2023-05-27,835100\r
2023-06-16,843800\r
2023-07-09,505300\r
2023-07-14,385400\r
2023-07-16,844200\r
`;export{r as default};
