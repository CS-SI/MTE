const r=`date,value\r
2017-02-15,100\r
2017-02-22,300\r
2017-03-14,300\r
2017-03-17,2200\r
2017-04-03,3800\r
2017-04-06,6300\r
2017-04-16,165500\r
2017-06-15,636000\r
2017-07-05,672900\r
2017-07-27,649400\r
2017-08-04,573900\r
2017-08-14,565700\r
2017-08-21,522200\r
2017-08-24,514200\r
2017-08-26,517100\r
2017-09-05,496300\r
2017-09-08,474100\r
2017-09-13,453600\r
2017-09-20,501800\r
2017-09-28,458700\r
2017-10-05,452600\r
2017-10-08,453000\r
2017-10-10,465100\r
2017-10-13,453200\r
2017-10-15,455800\r
2017-10-25,409800\r
2017-10-30,426900\r
2017-11-07,417500\r
2018-02-25,10900\r
2018-03-02,3000\r
2018-03-19,300\r
2018-04-18,36400\r
2018-04-21,174300\r
2018-04-26,366300\r
2018-05-11,431500\r
2018-06-25,712800\r
2018-06-27,724900\r
2018-07-27,694900\r
2018-08-06,732800\r
2018-08-16,656600\r
2018-08-26,568500\r
2018-09-03,545200\r
2018-09-18,559700\r
2018-09-20,525300\r
2018-09-23,513000\r
2018-09-25,488300\r
2018-09-28,492900\r
2018-09-30,485800\r
2018-10-05,473800\r
2018-10-13,482000\r
2018-10-23,472100\r
2018-10-25,466800\r
2019-02-20,56700\r
2019-02-22,53000\r
2019-02-25,57800\r
2019-02-27,55100\r
2019-03-02,43000\r
2019-03-12,52200\r
2019-03-14,20100\r
2019-03-22,17000\r
2019-03-27,19600\r
2019-03-29,41500\r
2019-05-01,474700\r
2019-05-13,553900\r
2019-05-16,547300\r
2019-05-31,667000\r
2019-06-17,718100\r
2019-06-27,756300\r
2019-07-12,774000\r
2019-07-15,777700\r
2019-07-22,770100\r
2019-07-25,767600\r
2019-08-06,735700\r
2019-08-09,739500\r
2019-08-14,711700\r
2019-08-16,673000\r
2019-08-21,690500\r
2019-08-29,680700\r
2019-09-03,629400\r
2019-09-08,608800\r
2019-09-20,606600\r
2019-09-30,560000\r
2019-10-03,583400\r
2019-10-05,552300\r
2019-10-08,534500\r
2019-10-25,553000\r
2019-11-04,577400\r
2020-02-20,556600\r
2020-02-22,551100\r
2020-03-08,644800\r
2020-03-11,714800\r
2020-03-21,730100\r
2020-04-05,734200\r
2020-04-10,698000\r
2020-04-15,763400\r
2020-05-07,752500\r
2020-05-20,782900\r
2020-05-22,776800\r
2020-06-21,775500\r
2020-06-24,784300\r
2020-06-26,786300\r
2020-07-04,762000\r
2020-07-16,783600\r
2020-07-19,777600\r
2020-07-21,784200\r
2020-08-03,770900\r
2020-08-05,758700\r
2020-08-08,773100\r
2020-08-13,772900\r
2020-08-20,763900\r
2020-08-25,766700\r
2020-09-04,742400\r
2020-09-12,744400\r
2020-09-14,746600\r
2020-09-27,794500\r
2020-10-17,786900\r
2020-10-19,777600\r
2020-10-24,762600\r
2020-11-01,426400\r
2020-11-11,723700\r
2021-02-19,28100\r
2021-02-24,347500\r
2021-03-01,699800\r
2021-03-26,630600\r
2021-03-28,656000\r
2021-03-31,631600\r
2021-04-05,629300\r
2021-04-15,563700\r
2021-05-20,639200\r
2021-06-14,717700\r
2021-06-21,747900\r
2021-07-09,739900\r
2021-07-11,735800\r
2021-07-19,725100\r
2021-07-21,713300\r
2021-08-05,685500\r
2021-08-10,682000\r
2021-08-13,665700\r
2021-08-18,652300\r
2021-08-20,656100\r
2021-08-28,607500\r
2021-09-17,495700\r
2021-09-19,492200\r
2021-09-22,502600\r
2021-10-02,518900\r
2021-10-07,487400\r
2021-10-09,475200\r
2021-10-12,483300\r
2021-10-14,476400\r
2021-10-19,458200\r
2021-10-22,458700\r
2021-10-27,455400\r
2021-11-06,450000\r
2022-02-24,10400\r
2022-03-01,8200\r
2022-03-03,5500\r
2022-03-23,269500\r
2022-03-26,264400\r
2022-04-05,238400\r
2022-04-10,259900\r
2022-04-17,332200\r
2022-04-25,344500\r
2022-05-10,393800\r
2022-05-12,429700\r
2022-05-17,499100\r
2022-05-22,513000\r
2022-05-27,541700\r
2022-06-01,592800\r
2022-06-06,603200\r
2022-06-09,622400\r
2022-06-19,643400\r
2022-06-29,657500\r
2022-07-11,641600\r
2022-07-14,614400\r
2022-07-16,602700\r
2022-07-19,561500\r
2022-07-21,562600\r
2022-07-31,512600\r
2022-08-03,487800\r
2022-08-05,489600\r
2022-08-20,401600\r
2022-08-23,385600\r
2022-08-28,386400\r
2022-09-19,265600\r
2022-09-22,229000\r
2022-10-02,224200\r
2022-10-04,232500\r
2022-11-01,265800\r
2023-02-19,3000\r
2023-03-16,243300\r
2023-04-07,420000\r
2023-04-10,435900\r
2023-04-17,447100\r
2023-05-02,518600\r
2023-06-16,748100\r
2023-06-24,765900\r
2023-07-09,768100\r
2023-07-11,757900\r
2023-07-19,761400\r
2023-07-26,769900\r
2023-07-29,758800\r
2023-07-31,762000\r
2023-08-08,759900\r
2023-08-15,738400\r
2023-08-20,739400\r
2023-08-23,720600\r
2023-09-17,695100\r
2023-09-24,610900\r
2023-09-27,583600\r
2023-09-29,549200\r
2023-10-02,547800\r
2023-10-07,491300\r
`;export{r as default};
