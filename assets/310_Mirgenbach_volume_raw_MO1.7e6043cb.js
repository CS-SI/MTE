const r=`date,value\r
2017-03-14,103524.1444452426\r
2017-04-03,88515.3757102664\r
2017-04-20,92067.08233394584\r
2017-04-30,88722.63117799185\r
2017-05-10,86659.4877517905\r
2017-06-12,101098.72203154233\r
2017-06-19,84820.57502834515\r
2017-07-07,86044.62823843338\r
2017-08-06,82194.4385183908\r
2017-08-23,87070.44205863563\r
2017-09-25,80397.23414686428\r
2017-09-27,91856.492624552\r
2017-10-15,83402.07771436086\r
2017-11-01,84414.23808031276\r
2018-01-18,75688.68686123892\r
2018-02-14,89137.76871898974\r
2018-02-22,93547.02580346259\r
2018-02-24,100004.45888564803\r
2018-03-14,92700.09816447011\r
2018-03-21,91016.21337590468\r
2018-03-24,94397.27137626923\r
2018-04-08,102198.11422726572\r
2018-04-18,96537.3741736272\r
2018-04-20,100660.40085701221\r
2018-05-05,98481.12196815145\r
2018-05-08,100004.45888564803\r
2018-05-15,99568.1914853274\r
2018-05-18,102860.20830510394\r
2018-06-04,104412.25523887326\r
2018-06-29,31209.55595051514\r
2018-07-02,84008.74245359174\r
2018-07-09,85635.77066171226\r
2018-07-14,93334.98267517131\r
2018-07-19,86659.4877517905\r
2018-07-24,104412.25523887326\r
2018-07-27,102198.11422726572\r
2018-08-03,96752.52110348837\r
2018-08-06,93334.98267517131\r
2018-08-18,91225.97111797755\r
2018-08-26,101318.19039224244\r
2018-08-28,98481.12196815145\r
2018-09-12,87688.4440985621\r
2018-09-25,89137.76871898974\r
2018-09-27,71103.13080840606\r
2018-09-30,74723.18549348766\r
2018-10-05,88515.3757102664\r
2018-10-10,78617.18156881373\r
2018-10-15,95250.83074425493\r
2018-10-20,84008.74245359174\r
2018-11-04,96107.69979510442\r
2019-01-20,89345.65065778972\r
2019-02-14,89553.74128599331\r
2019-02-17,97183.43412742988\r
2019-02-24,85840.09452763949\r
2019-02-27,82395.18436905167\r
2019-03-19,86454.32491921578\r
2019-03-21,91016.21337590468\r
2019-03-24,86044.62823843338\r
2019-03-29,85024.0588236764\r
2019-03-31,82194.4385183908\r
2019-04-15,82797.30910111645\r
2019-04-18,86249.37172521367\r
2019-04-20,83806.31031034431\r
2019-05-13,87688.4440985621\r
2019-05-15,88930.09553666353\r
2019-06-02,92911.5187905934\r
2019-06-17,88515.3757102664\r
2019-06-27,79801.97492980813\r
2019-06-29,90179.26463797661\r
2019-07-02,94397.27137626923\r
2019-07-04,78814.11654400262\r
2019-07-17,84211.38506689378\r
2019-07-24,84617.30142402994\r
2019-08-21,88722.63117799185\r
2019-08-23,84820.57502834515\r
2019-08-26,87070.44205863563\r
2019-08-31,86864.86015440364\r
2019-09-10,86659.4877517905\r
2019-09-15,71291.72636805345\r
2019-09-20,89345.65065778972\r
2019-12-04,78617.18156881373\r
2019-12-19,89137.76871898974\r
2020-01-15,82194.4385183908\r
2020-01-20,89137.76871898974\r
2020-02-07,97183.43412742988\r
2020-03-20,95037.13045929967\r
2020-03-28,90388.18935529397\r
2020-03-30,89137.76871898974\r
2020-04-02,87688.4440985621\r
2020-04-04,82998.68784083737\r
2020-04-07,105526.98893447062\r
2020-04-12,94823.63709349772\r
2020-04-14,96967.87444252138\r
2020-04-17,85635.77066171226\r
2020-04-22,89553.74128599331\r
2020-05-07,93123.14698253847\r
2020-05-12,87688.4440985621\r
2020-05-17,93547.02580346259\r
2020-05-19,85227.75274055958\r
2020-05-27,99132.74646105585\r
2020-05-29,80198.60256174937\r
2020-06-01,85840.09452763949\r
2020-06-23,97399.20009501684\r
2020-06-26,98481.12196815145\r
2020-07-21,84617.30142402994\r
2020-07-23,85431.65670964804\r
2020-07-31,81593.4678805602\r
2020-08-05,86864.86015440364\r
2020-08-07,81393.56687690257\r
2020-08-10,82194.4385183908\r
2020-08-20,80596.07748167471\r
2020-09-04,89970.54834288186\r
2020-09-11,75688.68686123892\r
2020-09-14,82194.4385183908\r
2020-09-16,83806.31031034431\r
2020-09-21,81393.56687690257\r
2020-10-31,79011.26385060456\r
2020-11-05,83200.27740209812\r
2020-12-05,78420.45899833067\r
2020-12-25,70726.58587399952\r
2021-02-11,85227.75274055958\r
2021-02-21,96537.3741736272\r
2021-02-23,101098.72203154233\r
2021-02-28,93759.27630248725\r
2021-03-03,99568.1914853274\r
2021-03-28,92067.08233394584\r
2021-03-30,87070.44205863563\r
2021-04-17,87894.86332735533\r
2021-04-27,93971.73410742424\r
2021-06-01,95893.17247353472\r
2021-06-13,87688.4440985621\r
2021-07-18,83200.27740209812\r
2021-07-21,90806.66379061717\r
2021-07-23,88101.49171737758\r
2021-08-25,86044.62823843338\r
2021-09-01,86659.4877517905\r
2021-09-04,78420.45899833067\r
2021-10-01,86044.62823843338\r
2021-10-09,87482.23409884931\r
2021-10-24,88722.63117799185\r
2021-11-23,89137.76871898974\r
2022-01-12,85024.0588236764\r
2022-01-24,87688.4440985621\r
2022-02-23,86659.4877517905\r
2022-02-28,85635.77066171226\r
2022-03-03,79406.19516552312\r
2022-03-05,84617.30142402994\r
2022-03-08,84008.74245359174\r
2022-03-10,84008.74245359174\r
2022-03-23,81993.90377263649\r
2022-03-25,86249.37172521367\r
2022-03-28,86454.32491921578\r
2022-04-17,90806.66379061717\r
2022-05-09,85227.75274055958\r
2022-06-01,30029.774136698456\r
2022-06-16,86864.86015440364\r
2022-06-18,81993.90377263649\r
2022-07-08,83604.08870720847\r
2022-07-18,83604.08870720847\r
2022-07-31,82194.4385183908\r
2022-08-07,82395.18436905167\r
2022-08-10,79208.62341545617\r
2022-08-12,83200.27740209812\r
2022-08-20,85227.75274055958\r
2022-08-22,85431.65670964804\r
2022-08-25,85840.09452763949\r
2022-09-04,85024.0588236764\r
2022-09-06,85635.77066171226\r
2022-09-21,81993.90377263649\r
2022-10-04,83200.27740209812\r
2022-10-09,81793.58020293614\r
2022-10-26,89345.65065778972\r
2022-12-15,85840.09452763949\r
2023-02-08,85431.65670964804\r
2023-02-13,90806.66379061717\r
2023-02-21,87070.44205863563\r
2023-03-03,91856.492624552\r
2023-05-14,87482.23409884931\r
2023-05-19,88101.49171737758\r
2023-05-24,93123.14698253847\r
2023-05-27,94823.63709349772\r
2023-05-29,84414.23808031276\r
2023-06-01,95464.73788426214\r
2023-06-03,91225.97111797755\r
2023-06-11,90179.26463797661\r
2023-06-13,87894.86332735533\r
2023-06-23,32678.041807014524\r
2023-07-11,97615.17228218431\r
2023-07-18,87482.23409884931\r
2023-08-10,86249.37172521367\r
2023-08-20,92277.87987074946\r
2023-08-22,82596.14125359437\r
2023-09-04,84414.23808031276\r
2023-09-06,82998.68784083737\r
2023-09-09,84820.57502834515\r
2023-09-11,84820.57502834515\r
2023-09-14,83200.27740209812\r
2023-09-24,89762.04053664065\r
2023-09-26,84820.57502834515\r
2023-10-01,79011.26385060456\r
2023-10-06,81993.90377263649\r
2023-10-11,88515.3757102664\r
2023-10-14,93759.27630248725\r
2023-10-16,84414.23808031276\r
2023-12-03,81393.56687690257\r
`;export{r as default};