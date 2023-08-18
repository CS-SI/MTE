const r=`date,value\r
2017-02-09,49.44203738470303\r
2017-03-11,83.18940425328462\r
2017-04-03,69.7489381146541\r
2017-04-20,76.3550043538384\r
2017-04-30,78.60799241248453\r
2017-05-10,76.3550043538384\r
2017-06-02,70.83389488159017\r
2017-06-12,84.3503546443431\r
2017-06-19,83.18940425328462\r
2017-07-17,78.60799241248453\r
2017-07-22,79.74394670370337\r
2017-08-06,75.23801252867979\r
2017-08-23,80.88618029736122\r
2017-09-22,74.12738390137716\r
2017-09-25,71.92530303400217\r
2017-09-27,71.92530303400217\r
2017-10-15,61.30433001264836\r
2017-10-17,59.25935825242671\r
2017-11-01,58.24693850035886\r
2017-11-06,70.83389488159017\r
2018-02-07,100.0\r
2018-02-14,89.0559567303266\r
2018-02-22,90.24771198612858\r
2018-02-24,84.3503546443431\r
2018-03-14,17.551519377859748\r
2018-03-21,67.59847008722527\r
2018-04-18,92.649517618633\r
2018-04-20,90.24771198612858\r
2018-05-05,73.02314010186853\r
2018-05-08,70.83389488159017\r
2018-05-15,77.47833801495597\r
2018-05-18,77.47833801495597\r
2018-05-30,62.336830202333125\r
2018-06-04,93.85953151841821\r
2018-06-27,65.47408468628959\r
2018-07-02,80.88618029736122\r
2018-07-09,78.60799241248453\r
2018-07-14,64.42173237749725\r
2018-07-17,84.3503546443431\r
2018-07-19,73.02314010186853\r
2018-07-24,82.0346728484757\r
2018-07-27,74.12738390137716\r
2018-08-03,75.23801252867979\r
2018-08-06,80.88618029736122\r
2018-08-16,67.59847008722527\r
2018-08-18,66.53300525688381\r
2018-08-23,65.47408468628959\r
2018-09-12,68.67045549587058\r
2018-09-22,68.67045549587058\r
2018-09-25,52.31503878615563\r
2018-09-27,50.39274186886307\r
2018-09-30,53.28657190894551\r
2018-10-05,49.44203738470303\r
2018-10-10,59.25935825242671\r
2018-10-15,44.79418467779728\r
2018-10-20,57.24126467226197\r
2018-10-22,59.25935825242671\r
2018-11-04,54.2649893676859\r
2018-11-14,51.3504189656631\r
2019-02-14,69.7489381146541\r
2019-02-24,39.45353857588118\r
2019-02-27,48.49833588268133\r
2019-03-21,85.51750438576087\r
2019-03-29,69.7489381146541\r
2019-03-31,71.92530303400217\r
2019-04-18,66.53300525688381\r
2019-04-20,67.59847008722527\r
2019-05-15,80.88618029736122\r
2019-06-04,84.3503546443431\r
2019-06-07,90.24771198612858\r
2019-06-19,91.44557172867422\r
2019-06-27,96.29769178310092\r
2019-06-29,86.69083406857531\r
2019-07-02,86.69083406857531\r
2019-07-04,74.12738390137716\r
2019-07-22,60.278497454633396\r
2019-07-24,87.87032450625465\r
2019-07-29,62.336830202333125\r
2019-08-23,57.24126467226197\r
2019-08-26,59.25935825242671\r
2019-08-31,53.28657190894551\r
2019-09-10,23.61867335577751\r
2019-09-15,18.83944476360357\r
2019-09-20,42.09116733004187\r
2019-12-04,51.3504189656631\r
2019-12-19,96.29769178310092\r
2019-12-29,87.87032450625465\r
2020-01-20,58.24693850035886\r
2020-02-07,100.0\r
2020-02-22,100.0\r
2020-03-15,62.336830202333125\r
2020-03-20,100.0\r
2020-03-25,79.74394670370337\r
2020-03-28,75.23801252867979\r
2020-03-30,85.51750438576087\r
2020-04-02,77.47833801495597\r
2020-04-04,74.12738390137716\r
2020-04-07,97.52580284778564\r
2020-04-14,84.3503546443431\r
2020-04-17,69.7489381146541\r
2020-04-22,65.47408468628959\r
2020-04-27,93.85953151841821\r
2020-05-07,69.7489381146541\r
2020-05-19,76.3550043538384\r
2020-05-27,86.69083406857531\r
2020-06-01,82.0346728484757\r
2020-06-23,91.44557172867422\r
2020-07-21,78.60799241248453\r
2020-07-23,66.53300525688381\r
2020-07-31,75.23801252867979\r
2020-08-05,62.336830202333125\r
2020-08-07,78.60799241248453\r
2020-08-12,66.53300525688381\r
2020-08-20,49.44203738470303\r
2020-09-09,37.731924702538734\r
2020-09-11,41.20464538103868\r
2020-09-14,39.45353857588118\r
2020-09-16,53.28657190894551\r
2020-09-19,44.79418467779728\r
2020-09-21,53.28657190894551\r
2020-10-31,41.20464538103868\r
2020-11-05,45.70956046043329\r
2020-11-25,41.20464538103868\r
2020-11-28,52.31503878615563\r
2020-12-25,90.24771198612858\r
2021-02-21,83.18940425328462\r
2021-02-23,68.67045549587058\r
2021-02-28,63.37597266075321\r
2021-03-03,78.60799241248453\r
2021-03-30,82.0346728484757\r
2021-04-02,85.51750438576087\r
2021-04-22,68.67045549587058\r
2021-04-27,89.0559567303266\r
2021-06-01,89.0559567303266\r
2021-06-13,85.51750438576087\r
2021-06-16,83.18940425328462\r
2021-07-18,69.7489381146541\r
2021-07-21,66.53300525688381\r
2021-07-23,79.74394670370337\r
2021-08-15,62.336830202333125\r
2021-09-01,42.98495426182956\r
2021-09-04,69.7489381146541\r
2021-09-06,75.23801252867979\r
2021-09-21,32.74711858528397\r
2021-10-09,58.24693850035886\r
2021-10-24,43.88597142596468\r
2021-11-23,46.63206578745675\r
2022-01-12,90.24771198612858\r
2022-01-24,77.47833801495597\r
2022-02-23,100.0\r
2022-02-28,98.75991131475045\r
2022-03-03,91.44557172867422\r
2022-03-05,82.0346728484757\r
2022-03-08,70.83389488159017\r
2022-03-10,74.12738390137716\r
2022-03-23,67.59847008722527\r
2022-03-25,67.59847008722527\r
2022-03-28,69.7489381146541\r
2022-04-04,79.74394670370337\r
2022-04-17,86.69083406857531\r
2022-04-22,78.60799241248453\r
2022-05-09,82.0346728484757\r
2022-05-14,82.0346728484757\r
2022-06-01,75.23801252867979\r
2022-06-11,69.7489381146541\r
2022-06-16,84.3503546443431\r
2022-06-18,74.12738390137716\r
2022-07-03,51.3504189656631\r
2022-07-06,70.83389488159017\r
2022-07-08,64.42173237749725\r
2022-07-16,56.242363631115445\r
2022-07-18,66.53300525688381\r
2022-07-31,66.53300525688381\r
2022-08-02,63.37597266075321\r
2022-08-10,66.53300525688381\r
2022-08-12,66.53300525688381\r
2022-08-20,53.28657190894551\r
2022-08-22,57.24126467226197\r
2022-08-25,57.24126467226197\r
2022-08-30,67.59847008722527\r
2022-09-04,63.37597266075321\r
2022-09-06,67.59847008722527\r
2022-10-04,58.24693850035886\r
2022-10-09,58.24693850035886\r
2022-11-23,70.83389488159017\r
2023-02-08,62.336830202333125\r
2023-02-13,60.278497454633396\r
2023-02-21,54.2649893676859\r
2023-03-03,74.12738390137716\r
2023-04-27,73.02314010186853\r
2023-05-24,100.0\r
2023-05-27,86.69083406857531\r
2023-05-29,89.0559567303266\r
2023-06-03,100.0\r
2023-06-11,92.649517618633\r
2023-06-13,95.07559548838027\r
2023-06-26,90.24771198612858\r
2023-07-08,90.24771198612858\r
2023-07-11,75.23801252867979\r
`;export{r as default};
