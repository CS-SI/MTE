const r=`date,value\r
2017-02-11,716300\r
2017-02-18,715200\r
2017-02-21,713200\r
2017-03-10,684500\r
2017-03-13,743600\r
2017-03-23,721000\r
2017-03-30,734300\r
2017-04-02,734300\r
2017-04-09,749600\r
2017-04-12,798800\r
2017-04-19,746500\r
2017-04-22,744700\r
2017-04-29,738300\r
2017-05-02,751600\r
2017-06-18,773500\r
2017-06-21,783300\r
2017-06-28,767600\r
2017-07-01,752700\r
2017-08-07,803300\r
2017-08-20,750600\r
2017-08-22,750600\r
2017-08-25,750600\r
2017-08-27,792100\r
2017-10-11,712100\r
2017-10-14,714300\r
2017-10-16,714300\r
2017-10-19,709700\r
2017-10-21,709700\r
2017-10-24,680300\r
2017-11-13,655500\r
2017-11-15,655500\r
2017-11-18,610800\r
2017-11-23,610800\r
2017-11-25,603600\r
2017-11-28,614200\r
2017-11-30,614300\r
2017-12-08,603100\r
2017-12-15,628100\r
2018-01-17,668100\r
2018-01-19,668500\r
2018-01-22,668500\r
2018-01-24,691800\r
2018-01-27,691800\r
2018-02-26,719100\r
2018-03-03,719100\r
2018-03-08,725700\r
2018-03-20,745900\r
2018-03-25,763600\r
2018-03-30,764100\r
2018-04-17,780300\r
2018-04-19,808800\r
2018-04-22,787400\r
2018-04-24,792800\r
2018-04-27,792800\r
2018-05-04,794000\r
2018-05-07,794300\r
2018-05-19,802600\r
2018-05-22,802600\r
2018-05-24,803300\r
2018-06-21,772600\r
2018-06-23,777100\r
2018-06-26,796900\r
2018-06-28,789600\r
2018-07-01,804400\r
2018-07-03,817600\r
2018-07-08,818600\r
2018-07-11,803300\r
2018-07-13,794700\r
2018-07-16,804700\r
2018-07-18,804700\r
2018-07-21,839500\r
2018-07-23,839500\r
2018-07-26,832000\r
2018-08-02,808400\r
2018-08-05,789800\r
2018-08-07,798500\r
2018-08-10,798500\r
2018-08-12,798500\r
2018-08-15,761600\r
2018-09-11,834600\r
2018-09-14,841000\r
2018-09-16,841000\r
2018-09-26,814800\r
2018-09-29,807900\r
2018-10-01,801200\r
2018-10-04,801000\r
2018-10-09,779800\r
2018-10-14,792800\r
2018-10-16,745500\r
2018-10-19,746200\r
2018-10-21,764500\r
2018-10-24,721200\r
2018-11-15,676200\r
2018-11-18,680500\r
2018-11-20,680500\r
2019-01-09,576600\r
2019-01-17,586800\r
2019-01-19,588100\r
2019-01-22,588100\r
2019-01-24,550300\r
2019-01-27,637500\r
2019-02-03,597200\r
2019-02-13,583300\r
2019-02-16,583300\r
2019-02-18,583300\r
2019-02-21,588100\r
2019-02-23,594500\r
2019-02-26,572800\r
2019-03-03,581800\r
2019-03-08,581800\r
2019-03-10,582600\r
2019-03-13,691900\r
2019-03-23,706000\r
2019-03-25,703300\r
2019-03-28,681700\r
2019-03-30,693900\r
2019-04-04,693900\r
2019-04-07,693900\r
2019-04-09,712000\r
2019-04-12,705400\r
2019-04-14,698800\r
2019-04-19,687600\r
2019-04-22,710000\r
2019-04-27,693300\r
2019-04-29,781500\r
2019-05-07,823600\r
2019-05-12,809800\r
2019-05-14,754200\r
2019-05-19,754200\r
2019-05-24,731800\r
2019-05-27,731800\r
2019-05-29,747700\r
2019-06-01,809200\r
2019-06-03,809200\r
2019-06-06,793000\r
2019-06-13,818700\r
2019-06-18,130500\r
2019-06-21,130500\r
2019-06-26,785700\r
2019-06-28,785700\r
2019-07-01,785700\r
2019-07-03,753900\r
2019-07-06,783500\r
2019-07-08,767600\r
2019-07-13,724100\r
2019-07-16,741800\r
2019-07-23,716300\r
2019-07-28,763300\r
2019-07-31,797500\r
2019-08-22,741600\r
2019-08-25,807100\r
2019-08-27,814100\r
2019-08-30,811300\r
2019-09-01,812900\r
2019-09-04,791600\r
2019-09-06,766400\r
2019-09-11,766300\r
2019-09-16,730100\r
2019-09-19,710000\r
2019-09-21,690500\r
2019-09-24,714100\r
2019-10-01,714100\r
2019-10-11,621900\r
2019-10-14,621900\r
2019-10-21,647200\r
2019-11-03,717100\r
2019-11-10,716800\r
2019-11-13,716800\r
2019-11-18,744600\r
2019-12-03,587500\r
2019-12-05,581500\r
2019-12-13,734900\r
2020-02-06,559200\r
2020-02-18,559200\r
2020-02-21,559200\r
2020-03-19,483900\r
2020-03-24,678900\r
2020-03-27,677900\r
2020-03-29,688400\r
2020-04-01,693300\r
2020-04-03,693300\r
2020-04-08,712700\r
2020-04-11,735900\r
2020-04-13,748000\r
2020-04-16,749300\r
2020-04-18,749300\r
2020-04-23,777100\r
2020-04-26,777100\r
2020-05-18,719300\r
2020-05-21,709100\r
2020-05-23,719900\r
2020-05-26,707400\r
2020-05-28,719500\r
2020-05-31,718100\r
2020-06-02,732600\r
2020-06-05,731000\r
2020-06-07,759400\r
2020-07-12,661300\r
2020-07-15,661300\r
2020-07-17,689100\r
2020-07-20,688900\r
2020-07-22,766000\r
2020-07-27,766000\r
2020-07-30,768700\r
2020-08-01,768700\r
2020-08-04,773600\r
2020-08-06,735900\r
2020-08-09,737100\r
2020-08-11,705200\r
2020-08-14,714500\r
2020-09-08,726100\r
2020-09-10,716600\r
2020-09-13,716900\r
2020-09-15,716900\r
2020-09-20,706200\r
2020-09-25,746100\r
2020-09-28,747600\r
2020-11-04,517600\r
2020-11-09,517600\r
2020-11-12,567400\r
2020-11-14,567400\r
2020-11-19,658300\r
2020-11-22,657500\r
2020-11-27,657500\r
2020-11-29,537500\r
2020-12-12,670300\r
2021-01-08,696900\r
2021-01-11,696900\r
2021-01-18,696900\r
2021-02-17,678900\r
2021-02-27,752000\r
2021-03-02,751700\r
2021-03-04,751700\r
2021-03-09,757500\r
2021-03-17,741500\r
2021-03-19,741500\r
2021-03-24,778300\r
2021-03-27,778300\r
2021-03-29,794100\r
2021-04-01,784900\r
2021-04-03,785700\r
2021-04-06,758700\r
2021-04-08,754600\r
2021-04-11,732100\r
2021-04-13,746000\r
2021-04-16,780100\r
2021-04-18,734400\r
2021-04-21,775600\r
2021-04-23,754100\r
2021-04-28,756300\r
2021-05-03,783000\r
2021-05-08,809400\r
2021-05-31,775500\r
2021-06-05,774700\r
2021-06-07,774700\r
2021-06-10,774700\r
2021-07-17,738700\r
2021-07-20,756500\r
2021-07-22,756500\r
2021-07-25,756500\r
2021-07-30,752200\r
2021-08-11,829200\r
2021-08-14,833200\r
2021-08-24,777200\r
2021-08-26,829400\r
2021-08-29,829400\r
2021-08-31,829400\r
2021-09-03,829400\r
2021-09-05,829400\r
2021-09-08,757900\r
2021-09-10,757900\r
2021-09-23,772300\r
2021-09-28,772300\r
2021-09-30,784900\r
2021-10-03,750400\r
2021-10-08,733300\r
2021-10-10,730000\r
2021-10-15,737000\r
2021-10-23,677500\r
2021-10-28,686300\r
2021-11-04,635300\r
2021-11-09,659900\r
2021-11-17,713800\r
2021-11-19,680900\r
2021-11-24,715000\r
2022-01-13,682800\r
2022-01-21,673800\r
2022-01-23,679300\r
2022-01-31,653600\r
2022-03-07,699900\r
2022-03-09,699100\r
2022-03-12,699100\r
2022-03-14,738300\r
2022-03-22,753200\r
2022-03-24,735300\r
2022-03-27,721500\r
2022-04-01,731000\r
2022-04-11,754900\r
2022-04-13,749600\r
2022-04-16,796800\r
2022-04-21,796800\r
2022-04-26,796200\r
2022-05-03,799000\r
2022-05-06,779100\r
2022-05-08,799300\r
2022-05-11,764900\r
2022-05-13,764900\r
2022-05-16,764400\r
2022-05-21,764700\r
2022-05-28,760500\r
2022-05-31,760500\r
2022-06-02,823600\r
2022-06-05,823600\r
2022-06-07,823600\r
2022-06-10,848500\r
2022-06-12,826600\r
2022-06-15,842200\r
2022-06-17,855600\r
2022-06-27,832600\r
2022-07-02,844000\r
2022-07-05,829900\r
2022-07-07,789400\r
2022-07-10,790600\r
2022-07-12,781900\r
2022-07-15,781100\r
2022-07-17,789500\r
2022-07-20,785600\r
2022-07-30,813900\r
2022-08-01,813800\r
2022-08-06,793500\r
2022-08-09,777700\r
2022-08-11,769300\r
2022-09-18,726700\r
2022-09-20,734400\r
2022-09-30,712400\r
2022-10-08,663900\r
2022-10-18,663900\r
2022-11-12,639200\r
2022-11-17,639200\r
2022-11-19,671400\r
2022-11-22,671400\r
2022-11-29,646100\r
2023-01-11,639400\r
2023-01-13,639400\r
2023-01-16,636500\r
2023-01-21,669600\r
2023-02-10,692100\r
2023-02-12,704800\r
2023-02-15,690600\r
2023-02-20,690600\r
2023-02-27,707600\r
2023-03-02,715300\r
2023-03-04,711800\r
2023-05-26,769400\r
2023-05-28,795200\r
2023-05-31,789600\r
2023-06-02,789600\r
2023-06-05,789400\r
2023-06-07,794800\r
2023-06-10,801800\r
2023-06-15,802700\r
2023-06-22,780600\r
2023-06-25,778000\r
2023-07-07,796000\r
2023-07-10,796400\r
2023-07-15,795900\r
2023-07-17,795900\r
2023-07-22,714100\r
2023-07-25,715200\r
2023-08-09,752000\r
2023-08-19,774200\r
2023-09-05,762100\r
2023-09-08,743400\r
2023-09-10,740900\r
2023-09-13,740900\r
2023-09-15,731400\r
2023-09-18,726400\r
2023-09-30,690300\r
2023-10-03,690900\r
2023-10-05,694100\r
2023-10-08,682600\r
2023-10-10,677000\r
`;export{r as default};