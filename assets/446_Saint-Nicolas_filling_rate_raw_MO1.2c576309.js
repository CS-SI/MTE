const n=`date,value\r
2017-03-14,92.25845210526795\r
2017-03-27,58.967888967823015\r
2017-04-23,73.2888365737995\r
2017-05-16,22.982555231747117\r
2017-05-26,85.30574357447419\r
2017-07-07,95.69915407672815\r
2017-08-29,89.55967923251617\r
2017-10-15,83.39283838719092\r
2017-10-18,85.39872426018475\r
2018-02-25,76.62109350042962\r
2018-03-24,81.67936091932492\r
2018-04-11,89.52811169305541\r
2018-04-18,92.86589374417849\r
2018-04-21,94.82639428047878\r
2018-05-06,84.903275450626\r
2018-05-08,83.8541146559545\r
2018-05-18,96.60746730728962\r
2018-06-05,94.18188041187231\r
2018-06-27,87.45408918479681\r
2018-07-02,69.86999114813976\r
2018-07-22,83.14722276566185\r
2018-07-25,73.845157133101\r
2018-07-27,87.70449420689216\r
2018-08-04,95.73153726459115\r
2018-08-06,55.87886823632297\r
2018-09-18,22.34819390992793\r
2018-09-30,79.43606869875502\r
2018-10-05,84.00808975345453\r
2018-10-08,75.49418665269567\r
2018-10-10,93.44277115728956\r
2019-02-25,77.45552945121177\r
2019-02-27,83.76178150146049\r
2019-03-29,69.98485886288222\r
2019-04-01,85.92634673020024\r
2019-04-11,76.50217091495057\r
2019-04-18,95.24622992704248\r
2019-04-21,89.97044471580425\r
2019-05-13,90.6037954128716\r
2019-06-02,74.10923908628936\r
2019-06-22,87.57925744211691\r
2019-06-25,96.47750725724138\r
2019-06-27,83.88490102577967\r
2019-06-30,91.46151354519037\r
2019-07-05,92.92992369861673\r
2019-07-17,98.63039621986435\r
2019-08-24,60.291771183129875\r
2019-08-31,64.7482504226219\r
2019-09-15,59.804140111995544\r
2019-09-20,69.4112429137606\r
2020-03-26,61.95554254703153\r
2020-03-28,92.99397054339303\r
2020-04-05,88.48877468097962\r
2020-04-10,76.14582754986165\r
2020-04-12,94.95549886629976\r
2020-04-15,97.12797678902614\r
2020-04-20,88.86617789241336\r
2020-04-22,73.5814361529976\r
2020-04-25,90.41361167069772\r
2020-05-07,92.70589277123325\r
2020-05-12,37.55888987445357\r
2020-05-15,37.33277998871177\r
2020-05-17,90.31857716793304\r
2020-05-20,86.9541016901037\r
2020-05-30,97.61692608528728\r
2020-06-01,63.91381670821284\r
2020-06-24,61.62687453203455\r
2020-06-26,63.85833517366108\r
2020-07-21,96.18534203737433\r
2020-07-31,96.8350584788186\r
2020-08-05,98.10681456364526\r
2020-08-08,99.84525942582056\r
2020-08-20,96.9326602892249\r
2020-09-12,97.97608586727767\r
2020-09-14,97.84542389967358\r
2020-09-17,99.91108978576638\r
2020-09-19,94.4394840611886\r
2020-09-22,96.86758823403974\r
2021-02-24,77.66467862064465\r
2021-03-01,81.34438672243377\r
2021-03-06,88.64595130560875\r
2021-03-23,75.90861922422857\r
2021-03-31,97.74747122728469\r
2021-04-22,3.617172888154163\r
2021-04-27,3.201645115085068\r
2021-09-02,35.01237714156007\r
2021-09-07,57.149365753314726\r
2021-10-09,87.141468412493\r
2022-02-26,93.05803427577881\r
2022-03-03,82.9938538508104\r
2022-03-06,88.36311026352989\r
2022-03-08,96.0555997185144\r
2022-03-11,56.03708216394438\r
2022-03-18,98.17220392859505\r
2022-03-23,96.12046249936367\r
2022-03-26,97.0628545693497\r
2022-03-28,85.73998501312205\r
2022-04-17,91.81184047482543\r
2022-04-20,89.14963357495239\r
2022-04-30,84.06971006110837\r
2022-07-14,94.05317960092857\r
2022-07-19,57.12278564173031\r
2022-07-24,73.17192172102608\r
2022-08-03,59.45290545293981\r
2022-08-08,64.58103236675954\r
2022-08-10,88.52020146461835\r
2022-08-13,76.23485368751157\r
2022-09-22,81.70983924057883\r
2022-10-09,84.43979493324466\r
2023-03-01,92.25845210526795\r
2023-04-05,100.0\r
2023-05-20,96.67247243960479\r
2023-05-25,100.0\r
2023-06-01,99.71364853376846\r
2023-06-04,100.0\r
2023-06-06,97.94341411873964\r
2023-06-09,100.0\r
2023-06-14,99.71364853376846\r
2023-06-24,98.89258687926402\r
2023-07-11,100.0\r
2023-08-10,99.91108978576638\r
2023-08-18,94.85866412383102\r
2023-09-04,99.6478680068002\r
2023-09-07,98.43392810605552\r
2023-09-09,99.28637219086394\r
2023-09-24,90.76239868130655\r
2023-10-07,96.38008116786888\r
`;export{n as default};