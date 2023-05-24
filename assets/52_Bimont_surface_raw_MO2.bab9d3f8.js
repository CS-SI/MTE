const r=`date,value\r
2017-02-19,573300\r
2017-02-22,573300\r
2017-02-26,573300\r
2017-03-01,584900\r
2017-03-08,584300\r
2017-03-11,589600\r
2017-03-14,587900\r
2017-04-10,596600\r
2017-04-17,596600\r
2017-04-20,598500\r
2017-04-23,597600\r
2017-06-09,592700\r
2017-06-12,592700\r
2017-06-16,592700\r
2017-06-19,592800\r
2017-06-22,502300\r
2017-06-26,502300\r
2017-06-29,502500\r
2017-07-04,452200\r
2017-07-06,452200\r
2017-07-07,452200\r
2017-07-12,447400\r
2017-07-14,449800\r
2017-07-17,434800\r
2017-07-19,434800\r
2017-07-21,434800\r
2017-07-22,434800\r
2017-07-24,446800\r
2017-07-29,450800\r
2017-07-31,450800\r
2017-08-03,436700\r
2017-08-05,447700\r
2017-08-06,447700\r
2017-08-08,447700\r
2017-08-11,424600\r
2017-08-13,426700\r
2017-08-15,414000\r
2017-08-18,432300\r
2017-08-20,432300\r
2017-08-21,432300\r
2017-08-23,401000\r
2017-08-25,406200\r
2017-08-26,406200\r
2017-09-02,358700\r
2017-09-04,329400\r
2017-09-05,329400\r
2017-09-07,336600\r
2017-09-10,336600\r
2017-09-12,303600\r
2017-09-14,311000\r
2017-09-17,295900\r
2017-09-20,286500\r
2017-09-22,286500\r
2017-09-27,241800\r
2017-10-04,188600\r
2017-10-05,188600\r
2017-10-07,192100\r
2017-10-09,90000\r
2017-10-10,90000\r
2017-10-12,93600\r
2017-10-14,93600\r
2017-10-15,93600\r
2017-10-17,74500\r
2017-10-19,84600\r
2017-10-20,84600\r
2017-10-22,75900\r
2017-10-24,82200\r
2017-10-25,82200\r
2017-10-27,74100\r
2017-10-29,81300\r
2017-10-30,81300\r
2017-11-01,81300\r
2017-11-03,74800\r
2017-11-06,74800\r
2018-02-04,144500\r
2018-02-07,144500\r
2018-02-09,152200\r
2018-02-11,152200\r
2018-02-12,152200\r
2018-02-14,134500\r
2018-02-16,140000\r
2018-02-19,140000\r
2018-02-21,127700\r
2018-02-24,127700\r
2018-03-16,104500\r
2018-03-19,104500\r
2018-03-21,104500\r
2018-03-23,104500\r
2018-03-26,106800\r
2018-03-31,101300\r
2018-04-05,101100\r
2018-04-10,61900\r
2018-04-15,72100\r
2018-04-17,67200\r
2018-04-18,67200\r
2018-04-20,71700\r
2018-04-22,71700\r
2018-04-25,55200\r
2018-04-27,60900\r
2018-04-28,60900\r
2018-04-30,60900\r
2018-05-03,54200\r
2018-05-05,55700\r
2018-05-25,68100\r
2018-06-01,68100\r
2018-06-02,68100\r
2018-06-09,74800\r
2018-06-14,75500\r
2018-06-16,75500\r
2018-06-17,75500\r
2018-06-19,70000\r
2018-06-21,70700\r
2018-06-22,70700\r
2018-06-24,70700\r
2018-06-26,60400\r
2018-06-27,60400\r
2018-06-29,60400\r
2018-07-04,52000\r
2018-07-06,52000\r
2018-07-07,52000\r
2018-07-09,56100\r
2018-07-11,56100\r
2018-07-12,56100\r
2018-07-14,50500\r
2018-07-17,55600\r
2018-07-19,49700\r
2018-07-21,53200\r
2018-07-22,53200\r
2018-07-24,49100\r
2018-07-26,51600\r
2018-07-27,51600\r
2018-07-29,46500\r
2018-07-31,50200\r
2018-08-01,50200\r
2018-08-03,50200\r
2018-08-05,43500\r
2018-08-06,43500\r
2018-08-08,43500\r
2018-08-13,51800\r
2018-08-15,51800\r
2018-08-16,51800\r
2018-08-18,51800\r
2018-08-20,51800\r
2018-08-21,51800\r
2018-08-23,51800\r
2018-08-28,49300\r
2018-08-30,49300\r
2018-08-31,49300\r
2018-09-02,55500\r
2018-09-04,55500\r
2018-09-05,55500\r
2018-09-07,55500\r
2018-09-09,49900\r
2018-09-10,49900\r
2018-09-12,50300\r
2018-09-14,46500\r
2018-09-17,53300\r
2018-09-19,53300\r
2018-09-20,53300\r
2018-09-22,53300\r
2018-09-24,44600\r
2018-09-25,44600\r
2018-09-27,60700\r
2018-09-29,57900\r
2018-10-02,62600\r
2018-10-04,62600\r
2018-10-05,62600\r
2018-10-09,56900\r
2018-10-12,56900\r
2019-02-04,53700\r
2019-02-06,53700\r
2019-02-09,53700\r
2019-02-11,105100\r
2019-02-12,105100\r
2019-02-14,54500\r
2019-02-16,61100\r
2019-02-17,61100\r
2019-02-19,61100\r
2019-02-21,47900\r
2019-02-22,47900\r
2019-02-27,47900\r
2019-03-01,52600\r
2019-03-03,40800\r
2019-03-08,40800\r
2019-03-11,43200\r
2019-03-13,43200\r
2019-03-16,39300\r
2019-03-18,42100\r
2019-03-19,42100\r
2019-03-21,38000\r
2019-03-23,38000\r
2019-03-24,38000\r
2019-03-26,38000\r
2019-03-28,38800\r
2019-03-29,38800\r
2019-03-31,30600\r
2019-04-02,33300\r
2019-04-05,30000\r
2019-04-07,37300\r
2019-04-08,37300\r
2019-04-13,37300\r
2019-04-15,31700\r
2019-04-17,44600\r
2019-04-18,44600\r
2019-04-20,44600\r
2019-04-22,39100\r
2019-04-27,39100\r
2019-04-30,57300\r
2019-05-02,56800\r
2019-05-05,56800\r
2019-05-07,56800\r
2019-05-10,68700\r
2019-05-12,68700\r
2019-05-13,68700\r
2019-05-15,68700\r
2019-05-23,68700\r
2019-06-04,129700\r
2019-06-06,129700\r
2019-06-07,129700\r
2019-06-11,129700\r
2019-06-12,129700\r
2019-06-19,146600\r
2019-06-22,146600\r
2019-06-24,161500\r
2019-06-26,161500\r
2019-06-27,161500\r
2019-06-29,161100\r
2019-07-01,161100\r
2019-07-02,161100\r
2019-07-04,161800\r
2019-07-06,171000\r
2019-07-07,171000\r
2019-07-11,176300\r
2019-07-12,176300\r
2019-07-14,202200\r
2019-07-19,206300\r
2019-07-21,203100\r
2019-07-22,203100\r
2019-07-24,207900\r
2019-07-26,207900\r
2019-07-29,183000\r
2019-07-31,183000\r
2019-08-03,182900\r
2019-08-05,189500\r
2019-08-06,189500\r
2019-08-08,186600\r
2019-08-10,184000\r
2019-08-11,184000\r
2019-08-15,203000\r
2019-08-16,203000\r
2019-08-18,197500\r
2019-08-20,203400\r
2019-08-21,203400\r
2019-08-23,198200\r
2019-08-25,211700\r
2019-08-26,211700\r
2019-08-30,211700\r
2019-08-31,211700\r
2019-09-02,178700\r
2019-09-04,188000\r
2019-09-05,188000\r
2019-09-07,183900\r
2019-09-09,198200\r
2019-09-12,185300\r
2019-09-14,185300\r
2019-09-15,185300\r
2019-09-17,193400\r
2019-09-19,193400\r
2019-09-25,198400\r
2019-09-27,195500\r
2019-09-29,208800\r
2019-09-30,208800\r
2019-10-02,206500\r
2019-10-05,232800\r
2019-10-07,227200\r
2019-10-10,227200\r
2019-10-19,243100\r
2019-10-27,286000\r
2019-10-29,286000\r
2019-10-30,286000\r
2019-11-06,296300\r
2019-11-08,296300\r
2019-11-09,296300\r
2019-11-13,288400\r
2019-11-16,327400\r
2020-02-04,521900\r
2020-02-07,521900\r
2020-02-09,530200\r
2020-02-11,545000\r
2020-02-12,545000\r
2020-02-14,518900\r
2020-02-19,513600\r
2020-02-22,547100\r
2020-02-24,509700\r
2020-02-26,509700\r
2020-03-03,501400\r
2020-03-07,501400\r
2020-03-08,501400\r
2020-03-10,501400\r
2020-04-04,545100\r
2020-04-06,544600\r
2020-04-07,544600\r
2020-04-09,553500\r
2020-04-11,553500\r
2020-04-14,547700\r
2020-04-24,567000\r
2020-04-26,564500\r
2020-04-29,582100\r
2020-05-04,586500\r
2020-05-06,586500\r
2020-05-09,586500\r
2020-05-14,592900\r
2020-05-19,598000\r
2020-05-21,597700\r
2020-05-22,597700\r
2020-05-24,598600\r
2020-05-26,598600\r
2020-05-31,598600\r
2020-06-01,598600\r
2020-06-03,598600\r
2020-06-05,579400\r
2020-06-06,579400\r
2020-06-08,589500\r
2020-06-23,597500\r
2020-06-25,597500\r
2020-06-26,597500\r
2020-06-28,599100\r
2020-06-30,599100\r
2020-07-01,599100\r
2020-07-03,592200\r
2020-07-05,592200\r
2020-07-06,592200\r
2020-07-08,593800\r
2020-07-10,586500\r
2020-07-11,586500\r
2020-07-15,594100\r
2020-07-16,594100\r
2020-07-18,594100\r
2020-07-20,583000\r
2020-07-21,583000\r
2020-07-23,597400\r
2020-07-25,597100\r
2020-07-26,597100\r
2020-07-30,597100\r
2020-07-31,597100\r
2020-08-02,597100\r
2020-08-04,597100\r
2020-08-05,597100\r
2020-08-07,582700\r
2020-08-09,582900\r
2020-08-10,582900\r
2020-08-12,582900\r
2020-08-14,582900\r
2020-08-15,582900\r
2020-08-17,582900\r
2020-08-19,566800\r
2020-08-20,566800\r
2020-08-22,580200\r
2020-08-24,564400\r
2020-08-25,564400\r
2020-08-27,576100\r
2020-09-01,564900\r
2020-09-03,564900\r
2020-09-04,564900\r
2020-09-06,569000\r
2020-09-08,534900\r
2020-09-09,534900\r
2020-09-13,570400\r
2020-09-14,570400\r
2020-09-16,518000\r
2020-09-18,519200\r
2020-09-21,519200\r
2020-09-23,518300\r
2020-09-26,543500\r
2020-09-28,543500\r
2020-09-29,543500\r
2020-10-01,543500\r
2020-10-03,543500\r
2020-10-08,543500\r
2020-10-11,556000\r
2020-10-13,554500\r
2020-10-16,554500\r
2020-10-18,554500\r
2020-10-19,554500\r
2020-10-21,554500\r
2020-10-24,554500\r
2020-10-31,550300\r
2020-11-02,550300\r
2020-11-05,550700\r
2020-11-07,550700\r
2020-11-10,531900\r
2020-11-12,531900\r
2020-11-17,535100\r
2020-11-18,535100\r
2020-11-20,514100\r
2020-11-22,532500\r
2020-11-23,532500\r
2020-11-25,532500\r
2021-02-23,566700\r
2021-02-25,566700\r
2021-02-26,566700\r
2021-02-28,576300\r
2021-03-02,576300\r
2021-03-05,576300\r
2021-03-07,573800\r
2021-03-08,573800\r
2021-03-10,584200\r
2021-03-12,584000\r
2021-03-13,584000\r
2021-03-15,584900\r
2021-03-17,584900\r
2021-03-20,584900\r
2021-03-22,567000\r
2021-03-23,567000\r
2021-03-25,567000\r
2021-03-30,597200\r
2021-04-01,597200\r
2021-04-02,597200\r
2021-04-06,597200\r
2021-04-09,597200\r
2021-04-24,595000\r
2021-04-26,595000\r
2021-05-02,595000\r
2021-05-04,598100\r
2021-05-06,597700\r
2021-05-07,597700\r
2021-05-09,597700\r
2021-05-11,597700\r
2021-05-12,597700\r
2021-05-14,598700\r
2021-05-19,601200\r
2021-05-21,601200\r
2021-05-26,601200\r
2021-05-27,601200\r
2021-06-13,601800\r
2021-06-15,599900\r
2021-06-16,599900\r
2021-06-18,600900\r
2021-07-03,602500\r
2021-07-05,602500\r
2021-07-10,602500\r
2021-07-11,602500\r
2021-07-13,602500\r
2021-07-15,599800\r
2021-07-16,599800\r
2021-07-18,602600\r
2021-07-20,602600\r
2021-07-21,602600\r
2021-07-23,602600\r
2021-07-25,602500\r
2021-07-28,602800\r
2021-07-30,602100\r
2021-08-02,602900\r
2021-08-05,602900\r
2021-08-09,601000\r
2021-08-10,601000\r
2021-08-12,601000\r
2021-08-17,601600\r
2021-08-19,601600\r
2021-08-20,601600\r
2021-08-22,602500\r
2021-08-27,601300\r
2021-08-29,601800\r
2021-08-30,601800\r
2021-09-01,599600\r
2021-09-06,599700\r
2021-09-08,594900\r
2021-09-11,599200\r
2021-09-13,598800\r
2021-09-18,598800\r
2021-09-19,598800\r
2021-09-21,599000\r
2021-10-01,594600\r
2021-10-06,597600\r
2021-10-11,594900\r
2021-10-13,597500\r
2021-10-14,597500\r
2021-10-16,595800\r
2021-10-18,597300\r
2021-10-23,595300\r
2021-10-24,595300\r
2021-10-26,595300\r
2021-11-05,560200\r
2022-02-08,553100\r
2022-02-10,539500\r
2022-02-11,539500\r
2022-02-13,545100\r
2022-02-15,545100\r
2022-02-18,578700\r
2022-02-20,578600\r
2022-02-21,578600\r
2022-02-23,590900\r
2022-02-26,591600\r
2022-02-28,587400\r
2022-03-02,591900\r
2022-03-03,591900\r
2022-04-09,601500\r
2022-04-14,601500\r
2022-04-16,601500\r
2022-04-17,601500\r
2022-04-19,601900\r
2022-04-26,601300\r
2022-04-27,601300\r
2022-04-29,601300\r
2022-05-09,602700\r
2022-05-11,602700\r
2022-05-12,602700\r
2022-05-14,602900\r
2022-05-16,602900\r
2022-05-17,602900\r
2022-05-19,602800\r
2022-05-21,602800\r
2022-05-22,602800\r
2022-05-24,602800\r
2022-05-29,602900\r
2022-05-31,602900\r
2022-06-01,602900\r
2022-06-05,602900\r
2022-06-06,602900\r
2022-06-13,603000\r
2022-06-15,603000\r
2022-06-16,603000\r
2022-06-18,603100\r
2022-06-20,603100\r
2022-06-25,602900\r
2022-06-26,602900\r
2022-06-28,603000\r
2022-07-01,603000\r
2022-07-03,603100\r
2022-07-05,603100\r
2022-07-06,603100\r
2022-07-08,602900\r
2022-07-10,603000\r
2022-07-11,603000\r
2022-07-13,603000\r
2022-07-15,602300\r
2022-07-16,602300\r
2022-07-18,603100\r
2022-08-02,602800\r
2022-08-04,602600\r
2022-08-05,602600\r
2022-08-07,603000\r
2022-08-09,603000\r
2022-08-10,603000\r
2022-08-12,602700\r
2022-08-19,602300\r
2022-08-20,602300\r
2022-08-22,603000\r
2022-08-24,603000\r
2022-08-25,603000\r
2022-08-27,603100\r
2022-08-29,603100\r
2022-09-01,603100\r
2022-09-03,601500\r
2022-09-04,601500\r
2022-09-06,601500\r
2022-09-11,602500\r
2022-09-16,602800\r
2022-09-18,602800\r
2022-09-19,602800\r
2022-09-21,602800\r
2022-09-26,602200\r
2022-09-28,602000\r
2022-10-01,602000\r
2022-10-03,602000\r
2022-10-04,602000\r
2022-10-06,602000\r
2022-10-26,600400\r
2022-10-28,600100\r
2022-10-31,600100\r
2022-11-05,600200\r
2022-11-10,599200\r
2023-02-03,595900\r
2023-02-05,595900\r
2023-02-06,595900\r
2023-02-08,595600\r
2023-02-10,596800\r
2023-02-11,596800\r
2023-02-13,596200\r
2023-02-15,597800\r
2023-02-16,597800\r
2023-02-18,596500\r
2023-02-20,597500\r
2023-02-21,597500\r
2023-02-26,595700\r
2023-03-05,597000\r
2023-03-07,597000\r
2023-03-10,597000\r
2023-03-12,597000\r
2023-03-13,597000\r
2023-03-30,600200\r
2023-04-01,600200\r
2023-04-02,600200\r
2023-04-06,599500\r
2023-04-07,599500\r
`;export{r as default};