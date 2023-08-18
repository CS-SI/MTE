const r=`date,value\r
2017-01-16,447200\r
2017-01-26,543900\r
2017-02-25,613600\r
2017-03-14,598500\r
2017-03-17,598500\r
2017-03-27,565300\r
2017-04-03,587100\r
2017-04-06,571900\r
2017-04-23,599900\r
2017-05-16,656100\r
2017-05-23,656100\r
2017-05-26,610200\r
2017-06-02,597700\r
2017-06-05,610800\r
2017-06-12,587500\r
2017-07-05,587800\r
2017-08-26,564500\r
2017-08-29,572900\r
2017-08-31,572900\r
2017-09-03,572900\r
2017-10-05,524300\r
2017-10-13,528300\r
2017-10-15,523700\r
2017-10-18,521500\r
2017-10-25,525000\r
2017-10-28,520800\r
2017-11-22,497300\r
2017-11-27,496100\r
2017-11-29,489400\r
2017-12-02,489400\r
2018-02-22,549900\r
2018-02-25,563300\r
2018-02-27,560800\r
2018-03-14,581800\r
2018-03-24,589600\r
2018-04-18,594400\r
2018-04-21,594400\r
2018-05-06,583500\r
2018-05-08,583500\r
2018-05-11,608100\r
2018-05-18,603100\r
2018-05-21,603100\r
2018-06-20,609800\r
2018-06-22,603400\r
2018-06-25,610700\r
2018-06-27,607100\r
2018-07-02,609400\r
2018-07-07,607700\r
2018-07-12,604900\r
2018-08-04,602600\r
2018-08-06,603000\r
2018-08-11,603000\r
2018-08-19,587400\r
2018-08-21,589600\r
2018-08-26,589300\r
2018-09-03,587200\r
2018-09-05,587200\r
2018-09-08,563000\r
2018-09-10,563000\r
2018-09-18,563000\r
2018-09-25,568800\r
2018-09-28,562800\r
2018-09-30,559700\r
2018-10-05,558700\r
2018-10-08,554500\r
2018-10-10,545400\r
2018-10-13,538400\r
2018-10-15,551300\r
2018-10-18,546600\r
2018-10-20,531700\r
2018-10-23,527500\r
2019-02-05,583900\r
2019-02-15,586900\r
2019-02-17,581500\r
2019-02-20,581500\r
2019-02-22,576800\r
2019-02-25,580300\r
2019-02-27,573500\r
2019-03-04,586300\r
2019-03-19,560000\r
2019-03-22,586200\r
2019-03-24,579000\r
2019-03-27,579400\r
2019-03-29,587200\r
2019-04-01,587200\r
2019-04-06,586200\r
2019-04-11,599600\r
2019-04-13,600200\r
2019-04-21,603400\r
2019-05-01,587100\r
2019-05-13,620300\r
2019-05-16,616600\r
2019-05-23,612900\r
2019-05-28,612900\r
2019-05-31,613800\r
2019-06-02,622500\r
2019-06-05,622500\r
2019-06-27,616800\r
2019-06-30,618700\r
2019-07-02,615200\r
2019-07-05,620000\r
2019-07-07,611900\r
2019-07-10,614500\r
2019-07-15,612300\r
2019-07-17,612800\r
2019-07-20,605400\r
2019-07-22,610900\r
2019-07-25,610700\r
2019-08-01,604700\r
2019-08-04,595900\r
2019-08-09,593000\r
2019-08-14,595400\r
2019-08-24,562300\r
2019-08-26,566200\r
2019-08-29,566200\r
2019-08-31,568100\r
2019-09-03,554700\r
2019-09-10,552600\r
2019-09-13,534500\r
2019-09-15,546200\r
2019-09-18,538100\r
2019-09-20,538600\r
2019-09-30,542700\r
2019-10-03,531200\r
2019-10-13,509300\r
2020-01-16,574300\r
2020-01-18,574300\r
2020-01-21,563100\r
2020-01-23,562200\r
2020-01-26,564600\r
2020-02-07,562600\r
2020-02-10,570100\r
2020-02-15,574700\r
2020-02-22,565200\r
2020-03-13,577400\r
2020-03-18,577400\r
2020-03-23,628000\r
2020-03-26,586500\r
2020-03-28,595000\r
2020-03-31,599200\r
2020-04-02,590400\r
2020-04-05,593100\r
2020-04-07,590700\r
2020-04-10,588500\r
2020-04-12,594500\r
2020-04-15,597600\r
2020-04-20,602600\r
2020-04-22,604900\r
2020-04-25,612800\r
2020-04-27,604600\r
2020-05-07,616800\r
2020-05-10,588100\r
2020-05-12,598200\r
2020-05-15,598200\r
2020-05-17,594800\r
2020-05-20,605200\r
2020-05-25,605500\r
2020-05-27,614700\r
2020-05-30,619500\r
2020-06-01,615300\r
2020-06-24,602800\r
2020-07-04,611500\r
2020-07-06,601800\r
2020-07-09,606700\r
2020-07-11,589900\r
2020-07-14,589900\r
2020-07-19,600800\r
2020-07-21,590200\r
2020-07-24,613000\r
2020-07-29,598700\r
2020-07-31,593200\r
2020-08-05,586400\r
2020-08-08,584500\r
2020-08-10,585600\r
2020-08-15,578900\r
2020-08-20,577500\r
2020-08-25,567500\r
2020-09-02,567500\r
2020-09-04,575000\r
2020-09-07,561800\r
2020-09-09,536900\r
2020-09-12,536900\r
2020-09-14,549200\r
2020-09-17,542200\r
2020-09-19,542200\r
2020-09-22,540300\r
2020-11-06,427300\r
2020-11-18,526600\r
2020-11-21,506600\r
2020-11-23,510700\r
2020-11-28,500000\r
2021-02-21,558700\r
2021-02-24,573900\r
2021-03-01,565300\r
2021-03-06,572900\r
2021-03-08,582200\r
2021-03-28,596500\r
2021-03-31,591500\r
2021-04-02,598600\r
2021-04-07,599800\r
2021-04-27,622900\r
2021-05-30,596200\r
2021-06-01,615300\r
2021-06-11,603900\r
2021-06-14,611100\r
2021-06-16,630700\r
2021-06-19,630700\r
2021-06-21,630700\r
2021-07-19,589400\r
2021-07-21,609500\r
2021-09-02,590700\r
2021-09-04,590700\r
2021-09-07,592300\r
2021-09-17,586200\r
2021-09-22,581100\r
2021-09-24,576000\r
2021-09-27,576000\r
2021-10-02,580000\r
2021-10-04,574200\r
2021-10-14,570900\r
2021-10-17,570900\r
2021-10-19,581400\r
2021-10-22,575200\r
2021-10-24,574800\r
2022-01-15,565600\r
2022-01-25,565600\r
2022-02-09,566100\r
2022-02-26,553900\r
2022-03-06,565300\r
2022-03-08,563100\r
2022-03-21,629500\r
2022-03-23,629600\r
2022-03-26,590400\r
2022-03-28,606700\r
2022-04-15,589700\r
2022-04-17,616300\r
2022-04-22,601200\r
2022-04-27,590400\r
2022-05-07,607400\r
2022-05-15,606600\r
2022-05-17,607000\r
2022-06-11,591100\r
2022-06-16,617000\r
2022-06-19,606800\r
2022-06-21,610000\r
2022-06-29,607000\r
2022-07-06,605400\r
2022-07-11,610800\r
2022-07-14,605000\r
2022-07-16,609900\r
2022-07-19,611800\r
2022-07-24,613100\r
2022-07-31,612300\r
2022-08-03,612500\r
2022-08-05,592400\r
2022-08-08,603100\r
2022-08-10,593800\r
2022-08-13,598000\r
2022-08-20,604100\r
2022-08-25,587300\r
2022-08-28,587300\r
2022-09-04,587300\r
2022-09-12,572800\r
2022-09-19,574800\r
2022-09-22,571500\r
2022-09-24,568100\r
2022-10-09,561500\r
2022-10-12,561500\r
2022-10-19,561600\r
2022-10-22,536200\r
2022-10-24,536200\r
2022-11-01,531400\r
2022-11-13,514700\r
2023-02-09,545500\r
2023-02-11,545500\r
2023-02-14,577200\r
2023-02-16,577200\r
2023-03-01,591500\r
2023-03-18,605900\r
2023-04-05,619100\r
2023-04-20,597700\r
2023-05-15,605400\r
2023-05-20,605400\r
2023-05-25,605400\r
2023-05-27,594700\r
2023-06-01,615200\r
2023-06-04,615200\r
2023-06-06,591700\r
2023-06-09,600100\r
2023-06-14,610900\r
2023-06-16,608300\r
2023-06-19,613900\r
2023-06-24,612400\r
2023-07-16,583600\r
2023-07-19,560900\r
`;export{r as default};
