const r=`date,value\r
2017-02-22,733300\r
2017-02-25,747200\r
2017-03-07,744100\r
2017-03-17,815100\r
2017-03-27,816500\r
2017-04-23,844900\r
2017-05-03,844900\r
2017-05-16,836600\r
2017-05-23,836600\r
2017-05-26,837000\r
2017-06-02,813400\r
2017-06-05,813400\r
2017-06-12,843800\r
2017-06-15,845600\r
2017-06-22,837100\r
2017-06-25,830200\r
2017-07-02,836600\r
2017-07-05,828100\r
2017-07-07,822600\r
2017-07-10,822600\r
2017-07-12,822600\r
2017-07-17,811300\r
2017-07-22,796400\r
2017-07-27,812300\r
2017-08-04,817900\r
2017-08-06,817900\r
2017-08-11,806900\r
2017-08-14,814400\r
2017-08-19,813700\r
2017-08-21,813000\r
2017-08-24,809700\r
2017-08-26,808100\r
2017-08-29,810700\r
2017-09-03,817800\r
2017-09-05,804600\r
2017-09-20,794700\r
2017-09-23,785900\r
2017-09-28,799800\r
2017-10-03,791100\r
2017-10-05,776300\r
2017-10-08,780400\r
2017-10-10,774700\r
2017-10-13,778500\r
2017-10-15,771500\r
2017-10-18,768400\r
2017-10-25,762000\r
2017-10-28,753600\r
2017-10-30,763300\r
2017-11-07,739200\r
2017-11-19,732200\r
2017-11-22,732900\r
2017-11-24,732900\r
2017-11-27,732900\r
2017-11-29,732900\r
2017-12-24,737100\r
2017-12-27,737100\r
2018-01-01,743700\r
2018-01-03,743700\r
2018-02-25,832700\r
2018-02-27,832700\r
2018-03-02,849700\r
2018-03-14,862000\r
2018-03-19,878800\r
2018-03-22,878800\r
2018-04-01,880000\r
2018-04-18,885000\r
2018-04-21,892800\r
2018-04-23,892800\r
2018-04-26,888500\r
2018-05-06,886500\r
2018-05-11,885400\r
2018-05-18,885400\r
2018-05-21,885400\r
2018-06-20,868900\r
2018-06-22,868900\r
2018-06-25,879200\r
2018-06-27,879200\r
2018-07-02,874800\r
2018-07-07,871200\r
2018-07-10,871600\r
2018-07-12,862500\r
2018-07-15,864400\r
2018-07-17,864400\r
2018-07-20,862300\r
2018-07-22,864300\r
2018-07-25,862500\r
2018-07-27,865100\r
2018-07-30,865100\r
2018-08-01,862500\r
2018-08-04,862600\r
2018-08-06,866100\r
2018-08-11,856100\r
2018-08-16,871200\r
2018-08-19,863600\r
2018-08-21,848500\r
2018-08-26,859400\r
2018-08-31,846700\r
2018-09-03,832300\r
2018-09-08,850100\r
2018-09-10,845100\r
2018-09-13,845100\r
2018-09-20,816800\r
2018-09-23,816500\r
2018-09-25,811100\r
2018-09-28,811900\r
2018-09-30,792300\r
2018-10-03,780300\r
2018-10-05,771600\r
2018-10-23,712500\r
2018-10-25,736800\r
2018-10-30,736800\r
2018-11-04,722600\r
2018-12-27,694800\r
2018-12-29,694800\r
2019-01-03,696800\r
2019-01-11,696800\r
2019-01-16,738400\r
2019-02-12,762700\r
2019-02-15,776900\r
2019-02-17,761700\r
2019-02-20,771400\r
2019-02-22,764500\r
2019-02-25,767400\r
2019-02-27,766200\r
2019-03-12,768900\r
2019-03-22,784000\r
2019-03-24,774400\r
2019-03-27,777200\r
2019-03-29,780600\r
2019-04-01,780600\r
2019-04-08,773000\r
2019-04-13,785300\r
2019-05-01,791300\r
2019-05-06,822900\r
2019-05-11,822900\r
2019-05-13,801100\r
2019-05-16,801800\r
2019-05-23,788800\r
2019-06-02,823100\r
2019-06-12,827500\r
2019-06-22,861600\r
2019-06-25,861600\r
2019-06-27,829800\r
2019-06-30,845900\r
2019-07-02,845900\r
2019-07-05,857300\r
2019-07-07,854300\r
2019-07-10,852000\r
2019-07-12,851100\r
2019-07-15,854600\r
2019-07-17,854000\r
2019-07-22,848100\r
2019-07-25,850300\r
2019-08-01,846700\r
2019-08-04,842500\r
2019-08-09,849200\r
2019-08-11,840700\r
2019-08-14,847900\r
2019-08-16,836400\r
2019-08-21,834300\r
2019-08-24,826100\r
2019-08-26,835500\r
2019-08-29,819800\r
2019-08-31,821400\r
2019-09-03,821700\r
2019-09-05,821700\r
2019-09-13,825900\r
2019-09-15,825600\r
2019-09-18,817800\r
2019-09-20,826000\r
2019-10-08,792000\r
2019-10-13,792000\r
2019-10-30,781200\r
2019-11-04,771800\r
2019-11-09,771800\r
2019-12-29,765700\r
2020-01-01,769500\r
2020-01-06,774200\r
2020-01-11,799800\r
2020-01-16,799800\r
2020-01-18,796200\r
2020-02-05,785100\r
2020-02-07,785100\r
2020-02-15,785100\r
2020-02-20,787400\r
2020-02-22,769700\r
2020-03-01,769700\r
2020-03-08,805500\r
2020-03-11,833200\r
2020-03-13,818000\r
2020-03-18,820700\r
2020-03-21,818700\r
2020-03-28,817200\r
2020-03-31,794100\r
2020-04-05,802300\r
2020-04-07,815700\r
2020-04-10,828300\r
2020-04-12,828300\r
2020-04-15,831800\r
2020-04-25,827200\r
2020-05-07,834100\r
2020-05-17,834100\r
2020-05-20,847100\r
2020-05-22,845800\r
2020-05-25,855800\r
2020-05-27,860900\r
2020-05-30,860900\r
2020-06-14,849400\r
2020-06-19,856100\r
2020-06-21,862800\r
2020-06-24,862800\r
2020-06-26,862800\r
2020-07-01,862800\r
2020-07-04,852500\r
2020-07-09,890500\r
2020-07-11,890500\r
2020-07-14,866500\r
2020-07-19,870300\r
2020-07-21,858200\r
2020-07-24,850100\r
2020-07-26,858100\r
2020-07-29,856400\r
2020-07-31,849000\r
2020-08-03,849000\r
2020-08-05,837900\r
2020-08-08,847500\r
2020-08-10,842800\r
2020-08-15,844500\r
2020-08-20,843500\r
2020-08-23,838800\r
2020-08-25,827100\r
2020-09-02,810400\r
2020-09-04,809200\r
2020-09-07,786300\r
2020-09-12,791600\r
2020-09-14,797500\r
2020-09-17,794400\r
2020-09-19,796700\r
2020-10-17,785600\r
2020-10-24,799600\r
2020-11-01,799600\r
2020-11-06,779900\r
2020-11-08,779900\r
2020-11-11,724500\r
2020-11-18,732400\r
2020-11-21,717300\r
2020-11-23,717300\r
2020-11-26,717300\r
2021-02-11,805300\r
2021-02-14,805300\r
2021-02-19,805300\r
2021-03-23,857400\r
2021-03-26,857400\r
2021-03-28,880400\r
2021-03-31,880400\r
2021-04-02,880400\r
2021-04-05,895300\r
2021-04-07,894300\r
2021-04-15,873100\r
2021-04-17,862300\r
2021-04-20,880000\r
2021-04-22,880000\r
2021-05-20,863900\r
2021-05-25,863900\r
2021-05-27,883300\r
2021-05-30,883300\r
2021-06-09,861100\r
2021-06-11,868700\r
2021-06-14,863300\r
2021-06-16,867000\r
2021-06-19,860800\r
2021-06-21,873900\r
2021-06-26,855100\r
2021-07-01,852200\r
2021-07-19,842300\r
2021-07-21,842300\r
2021-07-26,831500\r
2021-07-29,861500\r
2021-08-05,857100\r
2021-08-10,855600\r
2021-08-13,855600\r
2021-08-18,861400\r
2021-08-20,858000\r
2021-08-23,863200\r
2021-08-25,850400\r
2021-08-28,849600\r
2021-08-30,846000\r
2021-09-04,851800\r
2021-09-07,839300\r
2021-09-24,839000\r
2021-09-29,838200\r
2021-10-12,820200\r
2021-10-14,829900\r
2021-10-17,813400\r
2021-10-24,815800\r
2021-10-27,808600\r
2021-12-16,825400\r
2021-12-18,845600\r
2021-12-21,830800\r
2021-12-23,830800\r
2022-01-15,828900\r
2022-01-17,833300\r
2022-01-22,830200\r
2022-01-25,836600\r
2022-01-27,836000\r
2022-01-30,833900\r
2022-02-01,833900\r
2022-02-06,828300\r
2022-02-09,845400\r
2022-02-26,836000\r
2022-03-01,857700\r
2022-03-03,847000\r
2022-03-08,847000\r
2022-03-26,854200\r
2022-04-05,864400\r
2022-04-10,881200\r
2022-04-15,880400\r
2022-04-17,874300\r
2022-04-27,869000\r
2022-05-12,869600\r
2022-05-15,869600\r
2022-05-17,876800\r
2022-05-20,876800\r
2022-05-22,868200\r
2022-05-27,879700\r
2022-05-30,863900\r
2022-06-01,873600\r
2022-06-04,864700\r
2022-06-06,878000\r
2022-06-11,878000\r
2022-06-14,873900\r
2022-06-16,871200\r
2022-06-19,867200\r
2022-06-29,864500\r
2022-07-11,857400\r
2022-07-14,859300\r
2022-07-16,865900\r
2022-07-19,859700\r
2022-07-21,861800\r
2022-07-24,859100\r
2022-07-26,855800\r
2022-07-29,857200\r
2022-07-31,856000\r
2022-08-03,854900\r
2022-08-05,852500\r
2022-08-08,848300\r
2022-08-10,851100\r
2022-08-13,846600\r
2022-08-15,852500\r
2022-08-20,847300\r
2022-08-23,836000\r
2022-08-28,841300\r
2022-08-30,837800\r
2022-09-02,843400\r
2022-09-04,840200\r
2022-09-12,843500\r
2022-09-19,836800\r
2022-09-22,829100\r
2022-10-02,818400\r
2022-10-04,816900\r
2022-10-07,816900\r
2022-10-09,807700\r
2022-10-12,807700\r
2022-10-22,795400\r
2022-10-24,795400\r
2022-10-27,809300\r
2022-11-01,800600\r
2022-11-06,794200\r
2022-11-08,791000\r
2022-11-11,791000\r
2022-11-13,788300\r
2022-11-16,788300\r
2022-12-06,781700\r
2023-01-10,685800\r
2023-01-12,685800\r
2023-01-20,685800\r
2023-02-16,693800\r
2023-02-19,691700\r
2023-02-21,693300\r
2023-02-26,690400\r
2023-03-01,696400\r
2023-03-13,724300\r
2023-03-16,729300\r
2023-03-28,752900\r
2023-04-05,771200\r
2023-04-07,764300\r
2023-04-15,783300\r
2023-04-17,802900\r
2023-05-02,807100\r
2023-05-27,835100\r
2023-05-30,835100\r
2023-06-04,843600\r
2023-06-16,848600\r
2023-06-24,843800\r
2023-06-26,843800\r
2023-07-09,515100\r
2023-07-11,686600\r
2023-07-14,558600\r
2023-07-16,711900\r
2023-07-19,711900\r
2023-07-21,837800\r
`;export{r as default};
