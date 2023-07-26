const n=`date,value\r
2017-01-26,59.01790900139642\r
2017-02-22,66.86014860612455\r
2017-02-25,48.94764893866833\r
2017-03-17,92.94110162660034\r
2017-04-23,73.02399299496828\r
2017-05-16,91.77916814579456\r
2017-05-26,91.77916814579456\r
2017-06-02,42.151505810565475\r
2017-06-25,100.0\r
2017-07-05,98.84747166468408\r
2017-07-07,56.18905043693806\r
2017-07-17,66.86014860612455\r
2017-08-04,94.10949430281111\r
2017-08-14,100.0\r
2017-08-21,62.88496652607235\r
2017-08-24,79.4269547766105\r
2017-08-26,37.351244305216404\r
2017-09-05,33.54825580983345\r
2017-09-20,48.07362900252203\r
2017-09-23,73.02399299496828\r
2017-10-05,50.71654321942177\r
2017-10-08,56.18905043693806\r
2017-10-10,48.94764893866833\r
2017-10-13,59.01790900139642\r
2017-10-15,51.6113890704915\r
2017-10-18,37.351244305216404\r
2017-10-25,37.351244305216404\r
2017-10-28,39.71930596442979\r
2017-11-17,43.80838704914384\r
2017-11-19,51.6113890704915\r
2017-11-22,48.07362900252203\r
2017-12-09,55.25977253351987\r
2018-01-31,64.85909046835926\r
2018-02-25,48.94764893866833\r
2018-02-27,35.04777839579686\r
2018-03-14,40.52293483799475\r
2018-03-19,50.71654321942177\r
2018-04-18,59.97449373101361\r
2018-04-21,88.33221729764796\r
2018-04-26,83.82729128915165\r
2018-05-11,80.51719827167878\r
2018-06-20,75.13186193496544\r
2018-07-02,62.88496652607235\r
2018-07-07,51.6113890704915\r
2018-07-15,78.34328889105893\r
2018-07-25,80.51719827167878\r
2018-07-27,58.06813166495901\r
2018-08-01,45.49345262886934\r
2018-08-04,74.07461202545143\r
2018-08-11,54.337354005442826\r
2018-08-19,70.94269151891586\r
2018-08-21,49.82862512160818\r
2018-09-03,53.42180821557028\r
2018-09-08,71.98001580387783\r
2018-09-20,64.85909046835926\r
2018-09-23,59.01790900139642\r
2018-09-28,60.93787321100987\r
2018-09-30,51.6113890704915\r
2018-10-03,54.337354005442826\r
2018-10-05,50.71654321942177\r
2018-10-23,40.52293483799475\r
2018-10-25,32.07780072250188\r
2018-11-12,31.353520509627415\r
2019-01-16,73.02399299496828\r
2019-02-12,53.42180821557028\r
2019-02-15,52.51314867983813\r
2019-02-17,29.926951318645912\r
2019-02-20,42.151505810565475\r
2019-02-22,55.25977253351987\r
2019-02-25,61.90803493413839\r
2019-02-27,35.808394021739936\r
2019-03-12,70.94269151891586\r
2019-03-22,67.87074840407763\r
2019-03-24,54.337354005442826\r
2019-03-27,62.88496652607235\r
2019-03-29,35.04777839579686\r
2019-04-13,66.86014860612455\r
2019-05-01,70.94269151891586\r
2019-05-06,100.0\r
2019-05-13,69.91203131509486\r
2019-05-23,56.18905043693806\r
2019-06-02,61.90803493413839\r
2019-06-17,43.80838704914384\r
2019-06-27,52.51314867983813\r
2019-06-30,97.65333466311846\r
2019-07-05,57.12517450276644\r
2019-07-12,66.86014860612455\r
2019-07-15,57.12517450276644\r
2019-07-22,41.33367354177423\r
2019-07-25,77.26621107042652\r
2019-08-04,75.13186193496544\r
2019-08-09,78.34328889105893\r
2019-08-14,97.65333466311846\r
2019-08-16,59.01790900139642\r
2019-08-24,81.61400901677689\r
2019-08-29,33.54825580983345\r
2019-08-31,66.86014860612455\r
2019-09-03,45.49345262886934\r
2019-09-15,46.34651607261663\r
2019-10-08,42.151505810565475\r
2019-10-25,17.310128900514698\r
2020-01-06,20.77522083661868\r
2020-01-11,48.94764893866833\r
2020-01-16,66.86014860612455\r
2020-02-20,25.166994079916172\r
2020-02-22,33.54825580983345\r
2020-03-08,54.337354005442826\r
2020-03-13,39.71930596442979\r
2020-03-18,47.20657981917347\r
2020-03-21,57.12517450276644\r
2020-04-05,63.86865574284474\r
2020-04-10,87.19621542676725\r
2020-04-12,62.88496652607235\r
2020-04-15,88.33221729764796\r
2020-05-07,38.133443872590654\r
2020-05-20,96.46562002778086\r
2020-05-22,47.20657981917347\r
2020-05-25,79.4269547766105\r
2020-05-27,47.20657981917347\r
2020-05-30,91.77916814579456\r
2020-06-21,38.133443872590654\r
2020-07-04,65.85625871196953\r
2020-07-09,100.0\r
2020-07-14,86.0667205764283\r
2020-07-19,87.19621542676725\r
2020-07-21,30.636564170260446\r
2020-07-24,89.47471645835208\r
2020-07-31,41.33367354177423\r
2020-08-05,50.71654321942177\r
2020-08-08,100.0\r
2020-08-10,67.87074840407763\r
2020-08-20,48.94764893866833\r
2020-08-25,38.922803405952244\r
2020-09-02,50.71654321942177\r
2020-09-04,35.808394021739936\r
2020-09-07,73.02399299496828\r
2020-09-12,38.922803405952244\r
2020-09-14,47.20657981917347\r
2020-09-17,59.01790900139642\r
2020-11-08,4.077549661190773\r
2020-11-11,25.824626084841185\r
2020-11-18,32.07780072250188\r
2020-11-21,7.076179065136152\r
2021-02-11,3.7898002534438264\r
2021-02-19,43.80838704914384\r
2021-02-24,73.02399299496828\r
2021-03-01,42.976415593542086\r
2021-03-23,43.80838704914384\r
2021-03-28,65.85625871196953\r
2021-04-05,91.77916814579456\r
2021-04-15,100.0\r
2021-04-17,61.90803493413839\r
2021-04-22,80.51719827167878\r
2021-05-27,70.94269151891586\r
2021-06-14,84.94374256285327\r
2021-06-16,48.07362900252203\r
2021-06-26,38.133443872590654\r
2021-07-19,46.34651607261663\r
2021-07-29,78.34328889105893\r
2021-08-10,64.85909046835926\r
2021-08-20,69.91203131509486\r
2021-08-28,47.20657981917347\r
2021-08-30,59.97449373101361\r
2021-09-12,64.85909046835926\r
2021-09-14,46.34651607261663\r
2021-09-22,53.42180821557028\r
2021-09-24,48.07362900252203\r
2021-10-12,46.34651607261663\r
2021-10-14,43.80838704914384\r
2021-10-17,42.151505810565475\r
2021-10-24,30.636564170260446\r
2021-10-27,27.16233811743728\r
2021-12-16,36.57622188144182\r
2021-12-21,50.71654321942177\r
2022-01-12,52.51314867983813\r
2022-01-15,36.57622188144182\r
2022-01-17,39.71930596442979\r
2022-01-22,42.976415593542086\r
2022-01-25,31.353520509627415\r
2022-01-27,35.808394021739936\r
2022-02-09,47.20657981917347\r
2022-02-26,39.71930596442979\r
2022-03-01,57.12517450276644\r
2022-03-03,50.71654321942177\r
2022-03-08,60.93787321100987\r
2022-03-23,45.49345262886934\r
2022-03-26,45.49345262886934\r
2022-04-05,79.4269547766105\r
2022-04-10,78.34328889105893\r
2022-04-17,70.94269151891586\r
2022-05-17,67.87074840407763\r
2022-06-01,69.91203131509486\r
2022-06-06,73.02399299496828\r
2022-06-19,77.26621107042652\r
2022-07-11,65.85625871196953\r
2022-07-14,95.28433685155096\r
2022-07-16,65.85625871196953\r
2022-07-19,78.34328889105893\r
2022-07-21,62.88496652607235\r
2022-07-24,82.71737674673695\r
2022-07-31,67.87074840407763\r
2022-08-03,84.94374256285327\r
2022-08-08,54.337354005442826\r
2022-08-10,57.12517450276644\r
2022-08-13,65.85625871196953\r
2022-08-28,54.337354005442826\r
2022-08-30,48.07362900252203\r
2022-09-04,50.71654321942177\r
2022-09-12,51.6113890704915\r
2022-09-19,41.33367354177423\r
2022-09-22,46.34651607261663\r
2022-10-02,38.922803405952244\r
2022-10-04,48.94764893866833\r
2022-10-09,35.04777839579686\r
2022-10-22,42.151505810565475\r
2022-10-27,70.94269151891586\r
2022-11-08,38.133443872590654\r
2022-11-11,26.48974809376629\r
2022-11-13,37.351244305216404\r
2022-11-16,44.64740454014156\r
2022-12-06,67.87074840407763\r
2023-02-04,29.224701879013487\r
2023-02-11,53.42180821557028\r
2023-02-14,59.97449373101361\r
2023-02-16,55.25977253351987\r
2023-02-19,51.6113890704915\r
2023-02-21,64.85909046835926\r
2023-03-01,75.13186193496544\r
2023-03-13,69.91203131509486\r
2023-03-16,56.18905043693806\r
2023-03-28,64.85909046835926\r
2023-04-05,20.178349136031283\r
2023-04-07,67.87074840407763\r
2023-04-20,57.12517450276644\r
2023-06-16,51.6113890704915\r
`;export{n as default};