const r=`date,value\r
2017-01-26,27.37053383566864\r
2017-01-29,27.37053383566864\r
2017-02-15,26.45408547916955\r
2017-02-18,26.45408547916955\r
2017-02-25,29.322341209819403\r
2017-04-06,35.36667522315644\r
2017-04-09,35.36667522315644\r
2017-05-06,64.65805790871184\r
2017-05-09,64.65805790871184\r
2017-05-16,77.48044972992683\r
2017-05-19,76.75333693534321\r
2017-05-26,85.63810090135043\r
2017-06-05,85.8898157299058\r
2017-07-05,94.0822805739025\r
2017-08-14,90.59371794457843\r
2017-08-17,90.59371794457843\r
2017-08-22,90.59371794457843\r
2017-08-24,90.59371794457843\r
2017-08-27,76.75333693534321\r
2017-08-29,76.75333693534321\r
2017-09-01,76.75333693534321\r
2017-09-03,76.75333693534321\r
2017-09-08,74.22772819344249\r
2017-09-13,74.22772819344249\r
2017-09-16,74.22772819344249\r
2017-10-08,42.58585577550054\r
2017-10-11,42.58585577550054\r
2017-10-13,42.58585577550054\r
2017-10-16,42.58585577550054\r
2017-10-18,42.58585577550054\r
2017-10-23,25.385411411364235\r
2017-10-26,19.23780540616957\r
2017-10-28,20.20742946443028\r
2017-10-31,20.20742946443028\r
2017-11-05,18.722763602007486\r
2017-11-07,20.132241747702615\r
2017-11-15,19.832490064868306\r
2017-11-17,20.358103901688963\r
2017-11-20,19.1639237249086\r
2017-11-22,19.23780540616957\r
2017-11-25,19.23780540616957\r
2017-11-27,18.285272652477865\r
2017-11-30,19.460056761358295\r
2017-12-05,19.311788213791488\r
2017-12-07,19.311788213791488\r
2018-02-10,35.55049143956865\r
2018-02-15,34.81726506774749\r
2018-02-25,52.05007469332719\r
2018-03-02,55.1373283457852\r
2018-03-07,55.1373283457852\r
2018-03-22,56.86758542651533\r
2018-03-30,56.86758542651533\r
2018-04-06,46.67492272217795\r
2018-04-09,46.67492272217795\r
2018-04-21,65.11390311376424\r
2018-04-24,65.11390311376424\r
2018-04-26,65.11390311376424\r
2018-05-11,95.9095667303717\r
2018-05-21,100.0\r
2018-05-24,95.9095667303717\r
2018-06-20,97.61750493360387\r
2018-06-23,97.61750493360387\r
2018-06-25,98.93858927515143\r
2018-07-08,91.62247163146978\r
2018-07-10,91.75135635118848\r
2018-07-15,89.95284900012854\r
2018-07-18,89.95284900012854\r
2018-07-23,89.82486962231336\r
2018-07-25,90.20900224644332\r
2018-07-30,98.67386695146583\r
2018-08-02,98.67386695146583\r
2018-08-04,83.13545770524578\r
2018-08-12,78.20999932303081\r
2018-08-19,68.1045503437886\r
2018-08-22,68.1045503437886\r
2018-08-27,68.1045503437886\r
2018-09-03,48.614716797551985\r
2018-09-08,57.08520298840245\r
2018-09-11,57.08520298840245\r
2018-09-16,52.89539960879909\r
2018-09-18,52.89539960879909\r
2018-09-23,40.06262132277826\r
2018-09-26,40.06262132277826\r
2018-09-28,40.06262132277826\r
2018-10-03,41.31738260774912\r
2018-10-06,39.679318379588146\r
2018-10-13,40.25476416881629\r
2018-10-16,38.53730442642138\r
2018-10-21,38.53730442642138\r
2018-10-23,41.99871043711584\r
2018-11-12,53.31987688509932\r
2018-11-15,53.31987688509932\r
2018-11-17,54.38634100870448\r
2018-11-22,54.38634100870448\r
2018-11-27,55.46030081232156\r
2018-12-07,59.49843953270639\r
2018-12-10,55.783944094128714\r
2019-01-16,60.38476711345555\r
2019-01-19,60.38476711345555\r
2019-01-24,60.38476711345555\r
2019-01-26,63.07160017584691\r
2019-02-03,75.06625420518984\r
2019-02-15,60.38476711345555\r
2019-02-18,60.38476711345555\r
2019-02-20,63.86307567560712\r
2019-02-23,63.86307567560712\r
2019-02-25,59.49843953270639\r
2019-02-28,59.49843953270639\r
2019-03-12,52.47213127749741\r
2019-03-22,48.306567082680026\r
2019-03-25,48.306567082680026\r
2019-03-27,56.2165100187668\r
2019-03-30,56.2165100187668\r
2019-04-01,56.2165100187668\r
2019-04-09,55.67598853465978\r
2019-05-01,72.32372460993022\r
2019-05-06,83.75864006302875\r
2019-05-09,83.75864006302875\r
2019-05-11,83.75864006302875\r
2019-05-14,83.75864006302875\r
2019-05-16,77.96654577679905\r
2019-05-29,69.6177212587505\r
2019-05-31,69.6177212587505\r
2019-07-05,88.80337200714654\r
2019-07-08,88.80337200714654\r
2019-07-10,94.21238580054312\r
2019-07-13,94.21238580054312\r
2019-07-15,88.80337200714654\r
2019-07-20,94.60308526099466\r
2019-07-23,91.75135635118848\r
2019-07-25,91.75135635118848\r
2019-07-28,83.63387110575346\r
2019-08-02,92.78475285121678\r
2019-08-04,81.15243509040026\r
2019-08-09,78.33182737054968\r
2019-08-14,77.7233624979629\r
2019-08-17,77.7233624979629\r
2019-08-22,81.8940712235195\r
2019-08-24,74.22772819344249\r
2019-08-29,73.86938722543177\r
2019-09-03,79.18651133850322\r
2019-09-06,79.18651133850322\r
2019-09-08,79.18651133850322\r
2019-09-11,71.49627340163728\r
2019-09-13,71.49627340163728\r
2019-09-16,54.38634100870448\r
2019-09-18,54.38634100870448\r
2019-09-21,54.38634100870448\r
2019-09-26,54.38634100870448\r
2019-10-08,52.89539960879909\r
2019-10-11,52.89539960879909\r
2019-10-13,55.67598853465978\r
2019-10-26,44.26512040214914\r
2019-12-27,80.65934644431267\r
2019-12-30,80.65934644431267\r
2020-01-11,81.64659240214404\r
2020-01-14,81.64659240214404\r
2020-01-16,86.26788071684165\r
2020-01-19,86.26788071684165\r
2020-01-29,81.0290626682773\r
2020-01-31,81.0290626682773\r
2020-02-05,77.3590948637169\r
2020-02-10,77.3590948637169\r
2020-02-15,79.06421159298104\r
2020-02-18,79.06421159298104\r
2020-02-20,73.15455905899199\r
2020-02-23,74.70647542929078\r
2020-03-21,96.696512523399\r
2020-03-24,96.696512523399\r
2020-03-26,88.80337200714654\r
2020-03-31,91.62247163146978\r
2020-04-03,91.62247163146978\r
2020-04-05,80.78251831588247\r
2020-04-08,81.39938028005395\r
2020-04-10,80.53624148169898\r
2020-04-15,86.14179339229153\r
2020-04-25,88.42138348095658\r
2020-04-30,87.02578183058648\r
2020-05-05,91.2362045552234\r
2020-05-08,91.2362045552234\r
2020-05-18,91.2362045552234\r
2020-05-20,100.0\r
2020-05-25,88.42138348095658\r
2020-05-28,88.42138348095658\r
2020-05-30,87.91297782271165\r
2020-06-12,90.20900224644332\r
2020-06-14,90.20900224644332\r
2020-06-24,85.13546063587928\r
2020-07-04,85.13546063587928\r
2020-07-07,85.13546063587928\r
2020-07-09,95.38620891034495\r
2020-07-19,94.73344625659573\r
2020-07-22,94.73344625659573\r
2020-07-24,83.13545770524578\r
2020-07-27,86.6465363320479\r
2020-07-29,86.6465363320479\r
2020-08-03,86.6465363320479\r
2020-08-06,68.33657498417152\r
2020-08-08,75.18631712377908\r
2020-08-18,62.846110175683066\r
2020-08-21,62.846110175683066\r
2020-08-23,62.846110175683066\r
2020-09-02,37.22002799960518\r
2020-09-05,37.22002799960518\r
2020-09-07,39.87080590865168\r
2020-09-10,39.87080590865168\r
2020-09-12,39.966672658451586\r
2020-09-17,39.966672658451586\r
2020-11-11,72.56076114085297\r
2020-11-14,72.56076114085297\r
2020-11-21,78.20999932303081\r
2020-11-26,73.27352522776089\r
2020-11-29,77.3590948637169\r
2020-12-26,81.8940712235195\r
2021-02-14,100.0\r
2021-02-17,100.0\r
2021-02-19,100.0\r
2021-02-24,99.86710328870296\r
2021-02-27,100.0\r
2021-03-01,86.77288599233451\r
2021-03-04,100.0\r
2021-03-09,86.6465363320479\r
2021-03-21,90.85051865366917\r
2021-03-24,90.85051865366917\r
2021-03-29,90.85051865366917\r
2021-03-31,100.0\r
2021-04-03,94.60308526099466\r
2021-04-05,97.7493287919509\r
2021-04-08,97.7493287919509\r
2021-04-15,97.7493287919509\r
2021-04-20,97.4857444043805\r
2021-04-23,97.4857444043805\r
2021-06-09,88.67597738267287\r
2021-06-14,94.99435985880947\r
2021-06-22,94.86387113097402\r
2021-06-29,94.0822805739025\r
2021-07-02,96.17162765310043\r
2021-07-09,96.17162765310043\r
2021-09-12,85.38664912901005\r
2021-09-17,88.16705022215693\r
2021-09-22,88.16705022215693\r
2021-10-07,87.27893950941\r
2021-10-12,87.78603951304288\r
2021-10-15,87.78603951304288\r
2021-10-17,84.50864271853249\r
2021-10-20,88.80337200714654\r
2021-10-27,77.23780771680583\r
2021-12-16,67.98864338419159\r
2021-12-19,67.98864338419159\r
2021-12-21,67.98864338419159\r
2022-01-15,66.37334181201146\r
2022-01-23,66.37334181201146\r
2022-01-25,74.34731228612854\r
2022-02-09,69.50090369529622\r
2022-03-01,80.90575706699465\r
2022-03-09,80.90575706699465\r
2022-03-26,71.85048035568741\r
2022-04-05,75.06625420518984\r
2022-04-10,70.90731441599499\r
2022-07-14,18.57652437211636\r
2022-07-17,18.57652437211636\r
2022-07-24,19.016464190636707\r
2022-08-28,12.30766114013198\r
2022-09-05,12.30766114013198\r
2022-09-22,9.131230093993059\r
2022-10-02,9.131230093993059\r
2022-10-05,4.971693773678357\r
2022-10-07,7.277135556929654\r
2022-10-12,7.277135556929654\r
2022-10-15,7.277135556929654\r
2022-10-17,7.277135556929654\r
2022-11-06,7.382018454104607\r
2022-11-11,7.806859285876305\r
2022-11-16,7.382018454104607\r
2022-12-21,18.722763602007486\r
2022-12-24,18.5035579256563\r
2023-01-10,20.964772826874814\r
2023-01-18,20.964772826874814\r
2023-01-20,20.964772826874814\r
2023-02-04,30.185785867199773\r
2023-02-09,36.01151357684628\r
2023-02-12,36.01151357684628\r
2023-02-14,36.01151357684628\r
2023-02-17,32.116525462369445\r
2023-02-19,32.116525462369445\r
2023-02-24,43.867921853475615\r
2023-03-01,43.867921853475615\r
2023-03-16,55.2449112299777\r
2023-04-05,62.7334730033687\r
2023-04-08,62.7334730033687\r
2023-04-10,64.54427479484005\r
2023-05-30,68.4526925961398\r
2023-06-02,68.4526925961398\r
2023-06-04,68.4526925961398\r
2023-06-09,68.4526925961398\r
2023-06-24,95.64776041591067\r
2023-06-27,95.64776041591067\r
2023-07-09,94.34255500756694\r
2023-07-14,85.13546063587928\r
2023-07-17,85.13546063587928\r
2023-07-22,77.23780771680583\r
`;export{r as default};
