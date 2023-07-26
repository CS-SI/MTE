const n=`date,value\r
2017-04-20,31.24994736305256\r
2017-04-30,36.853446240234845\r
2017-05-10,60.68853734278502\r
2017-05-17,60.614352763710535\r
2017-05-30,82.86822835480243\r
2017-06-06,82.86822835480243\r
2017-06-09,82.86822835480243\r
2017-06-19,95.84184646965294\r
2017-06-26,95.84184646965294\r
2017-07-04,95.29354893986282\r
2017-07-06,95.29354893986282\r
2017-07-14,95.29354893986282\r
2017-08-13,95.20230627690727\r
2017-08-15,95.20230627690727\r
2017-08-18,95.79609991667701\r
2017-08-20,95.79609991667701\r
2017-08-23,95.24792259828557\r
2017-09-22,90.82521196188134\r
2017-09-24,90.82521196188134\r
2017-09-27,94.88327262626169\r
2017-09-29,94.88327262626169\r
2017-10-02,94.88327262626169\r
2017-10-07,82.91103305289967\r
2018-04-25,11.216695615988758\r
2018-04-27,11.165428884903385\r
2018-04-30,11.165428884903385\r
2018-05-05,39.67581447402155\r
2018-05-07,39.584265101178\r
2018-05-12,39.584265101178\r
2018-05-15,39.584265101178\r
2018-06-19,100.0\r
2018-06-21,100.0\r
2018-06-24,100.0\r
2018-06-26,100.0\r
2018-06-29,100.0\r
2018-07-29,92.93427478619971\r
2018-07-31,92.93427478619971\r
2018-08-03,96.80483694662826\r
2018-08-05,96.80483694662826\r
2018-08-08,94.97437498692769\r
2018-08-10,98.88324332556734\r
2018-08-15,96.57515309328902\r
2018-08-18,96.57515309328902\r
2018-08-28,88.2091271122116\r
2018-08-30,88.2091271122116\r
2018-09-02,92.8440753051393\r
2018-09-04,92.8440753051393\r
2018-09-07,92.8440753051393\r
2018-09-17,89.31335681403347\r
2018-09-19,89.31335681403347\r
2018-09-22,89.31335681403347\r
2018-09-24,83.98444360048177\r
2018-09-27,91.85453266879243\r
2018-09-29,88.2091271122116\r
2018-10-02,98.18819188779987\r
2018-10-04,98.18819188779987\r
2018-10-07,98.18819188779987\r
2019-04-17,2.141116192039953\r
2019-04-20,2.022587164443302\r
2019-04-27,14.086938527844314\r
2019-04-30,13.70947031826557\r
2019-05-02,17.610016761337377\r
2019-05-05,17.610016761337377\r
2019-05-07,17.316617909187222\r
2019-05-10,23.226769695113255\r
2019-05-12,23.226769695113255\r
2019-05-15,52.15390291249289\r
2019-05-30,54.70858596983278\r
2019-06-04,64.26015560935863\r
2019-06-14,64.26015560935863\r
2019-06-29,92.25875786424893\r
2019-07-01,92.25875786424893\r
2019-07-04,91.1826332233762\r
2019-07-06,92.57371786969551\r
2019-07-09,92.57371786969551\r
2019-07-14,92.66379684365184\r
2019-07-16,92.8440753051393\r
2019-07-19,92.48367907124792\r
2019-07-21,92.97938958789457\r
2019-07-24,91.31683213975296\r
2019-07-26,91.31683213975296\r
2019-07-29,91.31683213975296\r
2019-07-31,91.85453266879243\r
2019-08-03,91.40634836100106\r
2019-08-05,90.29028730690047\r
2019-08-08,90.29028730690047\r
2019-09-12,85.02087146919722\r
2019-09-14,85.02087146919722\r
2019-09-17,89.80121287252254\r
2019-09-19,89.80121287252254\r
2019-09-22,89.80121287252254\r
2019-09-27,87.6374180438177\r
2019-09-29,88.2091271122116\r
2019-10-02,88.2091271122116\r
2019-10-04,85.32426066884472\r
2019-10-07,85.32426066884472\r
2020-04-11,2.230000845631558\r
2020-04-14,2.1251335933865914\r
2020-04-16,2.1251335933865914\r
2020-04-24,26.60436431574264\r
2020-04-29,26.55354718220958\r
2020-05-04,70.2879192782897\r
2020-05-06,70.2879192782897\r
2020-05-09,71.76337253432035\r
2020-05-14,71.76337253432035\r
2020-05-19,70.20856558527232\r
2020-05-21,77.72224194583549\r
2020-05-24,77.39009044046013\r
2020-05-26,84.8044683387568\r
2020-05-29,84.8044683387568\r
2020-05-31,84.8044683387568\r
2020-06-03,84.8044683387568\r
2020-06-05,84.32927183302579\r
2020-07-08,91.58550145359372\r
2020-07-10,91.58550145359372\r
2020-07-13,91.58550145359372\r
2020-07-18,91.58550145359372\r
2020-07-20,91.58550145359372\r
2020-07-23,93.11479423279165\r
2020-08-07,93.11479423279165\r
2020-08-09,90.1567825709292\r
2020-08-12,90.1567825709292\r
2020-08-14,90.1567825709292\r
2020-08-19,90.1567825709292\r
2020-08-22,90.1567825709292\r
2020-08-27,86.84863606520749\r
2020-09-01,86.84863606520749\r
2020-09-03,86.84863606520749\r
2020-09-06,86.84863606520749\r
2020-09-08,86.84863606520749\r
2020-09-11,86.84863606520749\r
2021-04-09,8.422597705616795\r
2021-04-14,12.786414872134017\r
2021-04-16,12.786414872134017\r
2021-04-19,12.641467174044346\r
2021-04-24,13.133699950205951\r
2021-05-09,58.15324168480194\r
2021-05-14,58.15324168480194\r
2021-05-19,58.15324168480194\r
2021-07-18,97.44928247584403\r
2021-07-20,97.44928247584403\r
2021-07-23,97.86460408375854\r
2021-08-12,95.88760303766666\r
2021-08-14,95.88760303766666\r
2021-08-17,95.88760303766666\r
2021-08-19,95.88760303766666\r
2021-08-27,93.29547430381838\r
2021-08-29,93.29547430381838\r
2021-09-01,94.42836228987468\r
2021-09-06,93.06964931159423\r
2021-09-11,93.43108975134938\r
2021-09-13,95.11110369633883\r
2021-09-18,93.74787704402033\r
2021-09-21,93.88379353549512\r
2021-10-01,90.46843452526053\r
2022-04-14,12.569277581331505\r
2022-04-16,12.569277581331505\r
2022-04-19,26.680673544385925\r
2022-04-29,26.5027746053619\r
2022-05-14,59.322862117381916\r
2022-05-19,59.322862117381916\r
2022-05-21,55.27599405577682\r
2022-06-18,97.17285144214274\r
2022-06-20,97.17285144214274\r
2022-06-23,97.17285144214274\r
2022-06-25,97.17285144214274\r
2022-07-08,99.58054232036423\r
2022-07-10,99.58054232036423\r
2022-07-13,100.0\r
2022-07-15,100.0\r
2022-07-18,99.11542666001458\r
2022-07-20,100.0\r
2022-07-25,98.32702230778486\r
2022-07-28,99.62710880107075\r
2022-07-30,91.36158522294957\r
2022-08-02,99.86009094093194\r
2022-08-04,99.86009094093194\r
2022-08-07,99.86009094093194\r
2022-08-09,98.92966001573012\r
2022-08-12,99.30135309948098\r
2022-08-22,96.39158616509044\r
2022-09-01,74.47086206763223\r
2022-09-06,91.09321756088862\r
2022-09-08,91.89940638333395\r
2022-09-11,91.45112155349923\r
2022-09-13,96.20817940155733\r
2022-09-16,96.20817940155733\r
2022-09-18,95.7503633791352\r
2022-09-21,95.7503633791352\r
2022-09-23,90.29028730690047\r
2022-09-26,90.29028730690047\r
2022-10-01,90.29028730690047\r
2023-04-09,4.629683223818348\r
2023-04-14,9.773845702280854\r
2023-04-16,9.773845702280854\r
2023-04-19,9.757791638648637\r
2023-04-24,12.84096556974439\r
2023-05-04,45.50801877120196\r
2023-05-06,45.50801877120196\r
2023-05-11,45.50801877120196\r
2023-06-28,100.0\r
2023-07-03,100.0\r
2023-07-08,100.0\r
2023-07-10,100.0\r
`;export{n as default};