const r=`date,value\r
2017-02-22,59632.01972596658\r
2017-02-25,56097.441816561644\r
2017-03-17,66535.8568995522\r
2017-04-03,72440.50601735854\r
2017-04-23,63657.41252001152\r
2017-05-16,66535.8568995522\r
2017-05-26,67784.62859294582\r
2017-06-02,56875.61575195262\r
2017-06-12,75465.79514572995\r
2017-06-22,77216.13639773594\r
2017-07-05,69885.98075399005\r
2017-07-07,62034.95584298595\r
2017-07-17,65708.38171669364\r
2017-07-27,72869.73150604013\r
2017-08-04,64884.950911583495\r
2017-08-14,69463.71002610182\r
2017-08-21,69463.71002610182\r
2017-08-24,64884.950911583495\r
2017-08-26,60828.859958751134\r
2017-08-29,58444.475691430336\r
2017-09-03,8321.519889071189\r
2017-09-05,54553.669370383795\r
2017-09-20,67784.62859294582\r
2017-09-23,62439.03770306361\r
2017-10-05,60029.93557539569\r
2017-10-08,61229.86549758454\r
2017-10-10,63250.267491196384\r
2017-10-13,63250.267491196384\r
2017-10-15,62439.03770306361\r
2017-10-25,56097.441816561644\r
2017-10-28,53026.75035271513\r
2017-11-17,53026.75035271513\r
2017-12-14,31601.163330255615\r
2017-12-19,62034.95584298595\r
2018-02-10,63250.267491196384\r
2018-02-25,68202.89604114906\r
2018-04-01,64884.950911583495\r
2018-04-21,66535.8568995522\r
2018-05-11,69885.98075399005\r
2018-05-23,8506.669664669322\r
2018-06-20,75901.91241088435\r
2018-06-25,70309.24895831657\r
2018-07-02,66535.8568995522\r
2018-07-07,58839.288261432135\r
2018-07-12,41431.352827268835\r
2018-07-15,67784.62859294582\r
2018-07-25,66121.6144584829\r
2018-07-27,70309.24895831657\r
2018-07-30,64474.75565684953\r
2018-08-01,60828.859958751134\r
2018-08-04,59632.01972596658\r
2018-08-11,54170.355525384635\r
2018-08-19,58444.475691430336\r
2018-08-21,58444.475691430336\r
2018-08-26,66535.8568995522\r
2018-09-03,62439.03770306361\r
2018-09-08,69463.71002610182\r
2018-09-20,64065.57571870289\r
2018-09-23,66951.10765378221\r
2018-09-25,67367.3653422061\r
2018-09-30,65296.16006752081\r
2018-10-03,70733.51331510436\r
2018-10-05,73731.14624058572\r
2018-10-23,64884.950911583495\r
2018-10-25,69042.43810529294\r
2018-11-12,69463.71002610182\r
2018-11-27,65296.16006752081\r
2018-12-17,61631.89795140891\r
2018-12-19,56097.441816561644\r
2018-12-27,64884.950911583495\r
2019-01-03,50768.203644998765\r
2019-01-16,63657.41252001152\r
2019-02-12,48915.49460771913\r
2019-02-15,38039.8216393695\r
2019-02-17,54170.355525384635\r
2019-02-20,54938.03654276429\r
2019-02-22,47452.737361872445\r
2019-02-25,69885.98075399005\r
2019-02-27,49283.88568114017\r
2019-03-12,64065.57571870289\r
2019-03-22,53026.75035271513\r
2019-03-24,57657.96455262645\r
2019-03-27,70309.24895831657\r
2019-03-29,56875.61575195262\r
2019-04-01,72869.73150604013\r
2019-04-13,48181.950977726636\r
2019-05-01,63250.267491196384\r
2019-05-06,75465.79514572995\r
2019-05-13,60828.859958751134\r
2019-06-02,67367.3653422061\r
2019-06-17,51892.684568342345\r
2019-06-27,49283.88568114017\r
2019-06-30,78539.14289047643\r
2019-07-05,68202.89604114906\r
2019-07-10,69042.43810529294\r
2019-07-12,62034.95584298595\r
2019-07-15,64884.950911583495\r
2019-07-25,66951.10765378221\r
2019-08-04,56875.61575195262\r
2019-08-09,57657.96455262645\r
2019-08-14,69463.71002610182\r
2019-08-16,53788.09664275248\r
2019-08-24,58050.700607182465\r
2019-08-29,59235.13678187074\r
2019-08-31,69042.43810529294\r
2019-09-03,57266.26908040529\r
2019-09-13,64065.57571870289\r
2019-09-20,65708.38171669364\r
2019-10-08,56875.61575195262\r
2019-11-04,58444.475691430336\r
2019-11-27,65296.16006752081\r
2019-12-29,60428.882820208724\r
2020-01-01,67784.62859294582\r
2020-01-06,57266.26908040529\r
2020-01-11,68202.89604114906\r
2020-02-05,71158.77250698273\r
2020-02-20,62439.03770306361\r
2020-02-22,50768.203644998765\r
2020-03-08,35084.88397516522\r
2020-03-18,57657.96455262645\r
2020-03-21,70733.51331510436\r
2020-04-05,65708.38171669364\r
2020-04-10,73731.14624058572\r
2020-04-15,66121.6144584829\r
2020-05-05,66535.8568995522\r
2020-05-07,52269.64377428059\r
2020-05-17,56097.441816561644\r
2020-05-20,65708.38171669364\r
2020-05-22,58839.288261432135\r
2020-05-25,57266.26908040529\r
2020-05-27,62439.03770306361\r
2020-05-30,64884.950911583495\r
2020-07-04,69885.98075399005\r
2020-07-09,60029.93557539569\r
2020-07-14,65708.38171669364\r
2020-07-19,56875.61575195262\r
2020-07-21,49653.3538842678\r
2020-07-24,62439.03770306361\r
2020-07-29,74596.50415639684\r
2020-07-31,48548.182443152335\r
2020-08-05,48548.182443152335\r
2020-08-08,61631.89795140891\r
2020-08-10,60828.859958751134\r
2020-08-20,51892.684568342345\r
2020-08-25,47089.75884881667\r
2020-09-02,53406.89436708993\r
2020-09-04,52269.64377428059\r
2020-09-12,50768.203644998765\r
2020-09-14,62439.03770306361\r
2020-09-17,60029.93557539569\r
2020-10-17,60828.859958751134\r
2020-11-08,47452.737361872445\r
2020-11-11,51141.962794106395\r
2020-11-18,52269.64377428059\r
2020-11-21,54170.355525384635\r
2021-02-11,64884.950911583495\r
2021-03-23,55709.924377230156\r
2021-03-28,67784.62859294582\r
2021-03-31,73731.14624058572\r
2021-04-15,79870.89913026169\r
2021-04-17,72012.27015921926\r
2021-04-20,70309.24895831657\r
2021-05-27,74596.50415639684\r
2021-06-09,73299.94534008425\r
2021-06-11,65296.16006752081\r
2021-06-16,64884.950911583495\r
2021-06-19,64065.57571870289\r
2021-06-26,59632.01972596658\r
2021-07-19,63250.267491196384\r
2021-07-21,69042.43810529294\r
2021-07-29,72440.50601735854\r
2021-08-10,64884.950911583495\r
2021-08-20,62844.1420703013\r
2021-08-25,60428.882820208724\r
2021-08-28,61229.86549758454\r
2021-08-30,60428.882820208724\r
2021-09-12,68202.89604114906\r
2021-09-22,66535.8568995522\r
2021-10-07,59632.01972596658\r
2021-10-12,65296.16006752081\r
2021-10-14,58050.700607182465\r
2021-10-17,62844.1420703013\r
2021-10-24,57657.96455262645\r
2021-10-27,54170.355525384635\r
2021-12-16,53406.89436708993\r
2021-12-18,51892.684568342345\r
2021-12-21,56875.61575195262\r
2022-01-15,64065.57571870289\r
2022-01-22,52269.64377428059\r
2022-01-25,52269.64377428059\r
2022-01-27,48915.49460771913\r
2022-02-01,63657.41252001152\r
2022-02-06,53788.09664275248\r
2022-02-09,56097.441816561644\r
2022-02-26,59632.01972596658\r
2022-03-23,60828.859958751134\r
2022-04-05,69463.71002610182\r
2022-04-17,61631.89795140891\r
2022-05-07,71585.02522313043\r
2022-05-17,69463.71002610182\r
2022-06-01,61229.86549758454\r
2022-06-11,72440.50601735854\r
2022-07-11,50023.89744897371\r
2022-07-14,62034.95584298595\r
2022-07-16,50768.203644998765\r
2022-07-19,59235.13678187074\r
2022-07-21,52269.64377428059\r
2022-07-24,55323.45541706032\r
2022-07-31,54553.669370383795\r
2022-08-03,59235.13678187074\r
2022-08-08,62439.03770306361\r
2022-08-10,56097.441816561644\r
2022-08-13,46727.86830990012\r
2022-08-20,55323.45541706032\r
2022-08-23,54170.355525384635\r
2022-08-30,57266.26908040529\r
2022-09-04,58050.700607182465\r
2022-09-12,51141.962794106395\r
2022-09-19,47816.80201298947\r
2022-09-22,53406.89436708993\r
2022-10-02,55709.924377230156\r
2022-10-04,50395.51461803112\r
2022-10-09,48181.950977726636\r
2022-10-22,59235.13678187074\r
2022-11-06,49283.88568114017\r
2022-11-08,46367.067592967054\r
2022-11-11,44579.47685298046\r
2022-11-13,46727.86830990012\r
2022-11-16,46007.35855775941\r
2022-12-06,47816.80201298947\r
2023-02-04,46007.35855775941\r
2023-02-06,40744.02748153204\r
2023-02-09,44934.80032119354\r
2023-02-11,44579.47685298046\r
2023-02-14,49653.3538842678\r
2023-02-16,42819.41584094472\r
2023-02-19,43520.12117916093\r
2023-03-13,51141.962794106395\r
2023-03-16,53026.75035271513\r
2023-03-28,59235.13678187074\r
2023-04-05,65296.16006752081\r
2023-04-07,61631.89795140891\r
2023-04-17,66121.6144584829\r
2023-05-27,56486.00613757934\r
2023-06-04,64884.950911583495\r
2023-07-11,51892.684568342345\r
2023-07-14,62034.95584298595\r
2023-07-16,64065.57571870289\r
2023-07-19,67367.3653422061\r
2023-07-29,66951.10765378221\r
2023-08-08,66535.8568995522\r
2023-08-10,59235.13678187074\r
2023-08-20,59235.13678187074\r
2023-08-23,62844.1420703013\r
2023-09-07,65296.16006752081\r
2023-09-14,61631.89795140891\r
2023-09-24,60029.93557539569\r
2023-09-27,64065.57571870289\r
2023-09-29,57657.96455262645\r
2023-10-02,65708.38171669364\r
2023-10-04,61229.86549758454\r
2023-10-07,62844.1420703013\r
`;export{r as default};
