const n=`date,value\r
2017-02-19,13.209450164660701\r
2017-03-11,56.47977521134104\r
2017-03-21,28.68011984334689\r
2017-04-20,83.30169797137135\r
2017-05-30,72.25847127878647\r
2017-06-19,90.57436043670018\r
2017-07-04,53.54224974282289\r
2017-07-14,66.36963804282847\r
2017-08-03,47.33819564663531\r
2017-08-18,65.09276576374992\r
2017-08-23,52.3877569669971\r
2017-09-07,58.277379651723095\r
2017-09-17,63.82747385888597\r
2017-09-22,53.54224974282289\r
2017-10-07,88.36275606547103\r
2017-10-17,21.374194881355532\r
2017-10-27,26.970286927396263\r
2017-11-11,50.114038126459604\r
2017-11-16,48.994846984788005\r
2018-02-14,7.586233143928528\r
2018-03-16,32.24638781740267\r
2018-04-20,71.59263274292545\r
2018-04-25,81.88128664646635\r
2018-05-25,2.3979939927790346\r
2018-06-09,8.05918145773146\r
2018-06-14,10.351510540807908\r
2018-06-19,2.2635795262735896\r
2018-06-29,1.0277097045380368\r
2019-02-14,2.3979939927790346\r
2019-02-19,1.121357533411187\r
2019-03-01,2.677640668981747\r
2019-03-11,55.295982374376464\r
2019-03-21,57.675258879014336\r
2019-03-31,43.576294225172695\r
2019-04-05,63.1991752941929\r
2019-04-20,27.819074434163554\r
2019-04-30,63.82747385888597\r
2019-05-10,100.0\r
2019-05-15,86.17668032753326\r
2019-05-30,80.47227932649356\r
2019-06-04,58.277379651723095\r
2019-06-19,89.83432508111288\r
2019-06-24,75.6307527693304\r
2019-06-29,60.715008524438616\r
2019-07-04,90.57436043670018\r
2019-07-14,63.1991752941929\r
2019-07-19,37.95947696008179\r
2019-07-24,50.114038126459604\r
2019-07-29,48.994846984788005\r
2019-08-03,32.24638781740267\r
2019-08-08,26.970286927396263\r
2019-08-18,20.99775056578408\r
2019-09-02,46.79189034651443\r
2019-09-07,39.96011482235733\r
2019-09-12,33.168356999751346\r
2019-09-17,40.46775849705692\r
2019-09-27,8.05918145773146\r
2019-10-07,16.72508973358444\r
2019-10-17,26.970286927396263\r
2019-11-06,25.72014499734072\r
2020-02-04,5.225579061501835\r
2020-02-14,24.90211456856395\r
2020-02-19,19.887168689921676\r
2020-02-24,26.550497816214897\r
2020-04-04,7.354769659000976\r
2020-04-09,24.09643319870945\r
2020-04-14,67.65807565922532\r
2020-04-24,32.70585666994073\r
2020-05-04,49.55296835880635\r
2020-05-14,87.63122553715385\r
2020-05-24,65.09276576374992\r
2020-06-03,54.12389694326082\r
2020-06-23,70.92967092645269\r
2020-07-03,67.65807565922532\r
2020-07-18,50.67805406830291\r
2020-07-23,63.82747385888597\r
2020-08-07,48.994846984788005\r
2020-08-12,75.6307527693304\r
2020-08-17,59.490368941352955\r
2020-08-22,54.12389694326082\r
2020-08-27,29.115231441512172\r
2020-09-01,88.36275606547103\r
2020-09-06,30.8861989467702\r
2020-09-16,36.00686228057254\r
2020-10-11,70.92967092645269\r
2020-10-31,51.81491567112456\r
2020-11-05,28.24806647208314\r
2020-11-10,29.115231441512172\r
2021-02-08,3.60220354884119\r
2021-02-23,14.759531336718346\r
2021-02-28,46.2485447676819\r
2021-03-05,22.136436732658048\r
2021-03-20,38.953803407108076\r
2021-03-30,36.97715622703488\r
2021-04-04,81.17535666114088\r
2021-04-09,67.01241211684793\r
2021-04-24,80.47227932649356\r
2021-06-13,92.81145126561898\r
2021-07-23,43.576294225172695\r
2021-08-02,100.0\r
2021-08-12,51.24501397979786\r
2021-08-17,63.82747385888597\r
2021-08-27,31.789953312144743\r
2021-09-01,31.33655604874854\r
2021-09-06,53.54224974282289\r
2021-09-11,68.3066268174214\r
2021-09-21,87.63122553715385\r
2021-10-01,54.70847518886791\r
2021-10-06,45.170742042352735\r
2021-10-11,48.43967623894741\r
2021-10-16,44.104806172175905\r
2021-10-26,28.68011984334689\r
2021-11-05,44.104806172175905\r
2022-02-08,4.289005178099728\r
2022-02-13,9.299700706430277\r
2022-02-18,7.354769659000976\r
2022-02-23,8.05918145773146\r
2022-02-28,17.75073064474453\r
2022-03-25,52.3877569669971\r
2022-04-14,64.4586713178546\r
2022-05-14,95.07398699392368\r
2022-05-19,12.90907753376791\r
2022-05-29,84.73350019058222\r
2022-06-13,72.25847127878647\r
2022-06-18,81.88128664646635\r
2022-07-03,86.90253309600892\r
2022-07-08,83.30169797137135\r
2022-07-13,89.09712310337412\r
2022-07-18,63.82747385888597\r
2022-08-02,64.4586713178546\r
2022-08-07,100.0\r
2022-08-12,66.36963804282847\r
2022-08-22,93.56280466548446\r
2022-08-27,100.0\r
2022-09-01,36.49050457540856\r
2022-09-11,43.05075612702215\r
2022-09-16,58.277379651723095\r
2022-09-21,29.99461703263448\r
2022-09-26,17.405686836470462\r
2022-10-11,26.550497816214897\r
2022-10-26,22.52222696709529\r
2022-11-05,46.2485447676819\r
2022-11-10,40.978390777477244\r
2023-02-03,18.804793451905123\r
2023-02-08,7.82103934630715\r
2023-02-13,2.5360188706025935\r
2023-02-18,5.423210560488861\r
2023-03-05,29.99461703263448\r
2023-03-15,32.70585666994073\r
2023-03-20,50.114038126459604\r
2023-03-25,62.573777542455275\r
2023-04-04,88.36275606547103\r
2023-04-09,72.92718475340732\r
2023-04-14,79.07468925877993\r
2023-04-24,87.63122553715385\r
2023-05-04,65.09276576374992\r
2023-05-24,87.63122553715385\r
2023-06-23,100.0\r
2023-06-28,67.01241211684793\r
2023-07-03,64.4586713178546\r
2023-07-08,58.88241701054079\r
`;export{n as default};