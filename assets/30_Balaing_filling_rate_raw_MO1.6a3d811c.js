const n=`date,value\r
2017-01-19,54.70237392017614\r
2017-01-26,46.8583634483599\r
2017-02-15,58.39633558520958\r
2017-02-18,60.79720617513821\r
2017-02-25,61.15375051042696\r
2017-03-10,66.83045150113486\r
2017-03-30,64.47556416835295\r
2017-04-09,79.21997298782091\r
2017-04-19,74.88666444820349\r
2017-04-29,84.3107484005245\r
2017-05-09,76.72544684719824\r
2017-05-16,82.72059174391299\r
2017-05-19,79.7389484846961\r
2017-05-26,80.58034455491133\r
2017-06-18,81.8697074923018\r
2017-07-05,82.43654678134016\r
2017-07-18,81.54654853180227\r
2017-08-02,77.07972252023177\r
2017-08-12,70.73370102053552\r
2017-08-14,75.4714426086548\r
2017-08-22,62.588808290288576\r
2017-08-24,66.09068029936248\r
2017-09-08,61.797769586901566\r
2017-09-21,58.92239096207762\r
2017-10-08,57.62843049874493\r
2017-10-11,55.65906612995295\r
2017-10-13,54.60029098650796\r
2017-10-16,53.68520740815672\r
2017-10-23,55.385003761077655\r
2017-10-26,51.708588056114976\r
2017-10-31,54.87269282973093\r
2017-11-17,54.70237392017614\r
2017-11-20,49.11161878472597\r
2017-11-22,53.24696616069365\r
2017-11-30,50.55099193884386\r
2017-12-05,49.60032149779151\r
2017-12-12,56.140062856082274\r
2017-12-15,55.693364488152795\r
2017-12-25,59.09818972158032\r
2018-01-24,96.71064664394342\r
2018-01-29,84.88472116794767\r
2018-02-15,97.7547830568204\r
2018-02-25,95.58489991211326\r
2018-03-02,95.84418857783302\r
2018-03-15,99.4616928283385\r
2018-03-22,99.72541222219293\r
2018-03-30,93.64979412018131\r
2018-04-19,93.60698359172783\r
2018-04-21,98.06022327611707\r
2018-04-24,91.51950610473682\r
2018-05-06,90.67325054083764\r
2018-05-11,99.24215421729227\r
2018-05-21,96.75405682753959\r
2018-06-20,100.0\r
2018-06-23,100.0\r
2018-06-25,99.72541222219293\r
2018-07-08,93.94970154052656\r
2018-07-13,97.31914507787177\r
2018-07-23,93.35029576687253\r
2018-08-02,94.42181064984021\r
2018-08-04,91.94389066139001\r
2018-08-12,89.9144891135986\r
2018-08-19,86.57518500201387\r
2018-08-22,83.08640452405844\r
2018-08-27,72.41344804174734\r
2018-09-03,66.01689640198182\r
2018-09-08,69.52264261408227\r
2018-09-11,67.7600995432879\r
2018-09-16,63.67440495204818\r
2018-09-23,59.803616988508026\r
2018-09-26,58.81701894085136\r
2018-10-03,55.899343841403116\r
2018-11-15,55.17983573574053\r
2018-11-17,54.0233580398683\r
2018-12-07,54.4982893891747\r
2018-12-20,63.7470610180464\r
2019-02-13,71.95366815724806\r
2019-02-15,83.61601564212636\r
2019-02-20,87.32182671749914\r
2019-02-23,86.03764528440534\r
2019-02-25,84.14706132491882\r
2019-02-28,86.78231115528492\r
2019-03-12,79.25984286036584\r
2019-03-20,82.35546762514623\r
2019-03-22,79.69897598699825\r
2019-03-25,85.9138004815024\r
2019-03-27,82.31494080802365\r
2019-03-30,79.8589172632412\r
2019-04-09,87.11415196901913\r
2019-05-01,82.51765996269778\r
2019-05-06,85.66633917103808\r
2019-05-14,91.18060154674149\r
2019-06-08,94.93798942043207\r
2019-06-13,94.5077570885697\r
2019-06-18,91.47711371092245\r
2019-06-23,99.4616928283385\r
2019-06-28,100.0\r
2019-07-05,94.63673927368608\r
2019-07-15,97.05816071676475\r
2019-07-23,91.51950610473682\r
2019-07-25,89.99866162587395\r
2019-08-09,88.36336196530539\r
2019-08-14,87.44653278658284\r
2019-08-17,84.02438506291602\r
2019-08-22,84.3107484005245\r
2019-08-24,87.90443758074129\r
2019-09-11,80.29946070568101\r
2019-09-13,82.39600294979019\r
2019-09-16,76.72544684719824\r
2019-10-08,72.37508535055866\r
2019-10-11,66.27529380572601\r
2019-10-13,72.03021138894334\r
2019-12-05,95.0241358832856\r
2019-12-10,91.47711371092245\r
2019-12-15,80.66067390598961\r
2019-12-25,86.61659334452226\r
2019-12-30,88.32159945540936\r
2020-01-09,93.52138758198402\r
2020-01-11,92.75252703245744\r
2020-01-14,57.907167063617614\r
2020-01-19,91.47711371092245\r
2020-01-29,91.94389066139001\r
2020-01-31,94.59373687578731\r
2020-02-05,91.64673354344986\r
2020-02-15,86.53378510476534\r
2020-02-20,89.15844877179507\r
2020-02-23,88.57230080185248\r
2020-03-11,94.46477970036523\r
2020-03-21,95.45536793559516\r
2020-03-26,87.8627677286008\r
2020-04-03,92.8378222805112\r
2020-04-05,91.56190687514302\r
2020-04-08,92.8804824433197\r
2020-04-10,92.62464686275781\r
2020-04-30,92.15639688393384\r
2020-05-03,92.28400103868573\r
2020-05-05,97.23211707991737\r
2020-05-18,95.75772573698208\r
2020-05-20,95.36905490818009\r
2020-05-25,99.37385255593102\r
2020-05-30,96.66724476927835\r
2020-06-24,91.43472969427046\r
2020-07-07,100.0\r
2020-07-09,93.60698359172783\r
2020-07-19,88.90704059373041\r
2020-07-22,87.69617259543836\r
2020-07-24,74.10998015839054\r
2020-07-27,74.96452276384044\r
2020-08-06,63.92885576393398\r
2020-08-31,55.556225129969306\r
2020-09-02,55.24818899285624\r
2020-09-12,52.20811907247882\r
2020-09-30,51.27731908299115\r
2020-10-30,53.415339172105014\r
2020-11-11,55.79631362594355\r
2020-11-14,52.94446626987316\r
2020-11-21,59.063012100920744\r
2020-11-26,57.00337188180531\r
2020-11-29,52.60921775274072\r
2020-12-26,86.2855631049989\r
2021-01-03,95.71450679783237\r
2021-02-14,100.0\r
2021-02-19,93.60698359172783\r
2021-02-24,100.0\r
2021-02-27,96.62385120409263\r
2021-03-01,95.19652876991258\r
2021-03-04,94.07835846905627\r
2021-03-24,91.56190687514302\r
2021-03-29,93.6926129969409\r
2021-03-31,96.84090211933298\r
2021-04-08,94.42181064984021\r
2021-04-15,98.01656407866527\r
2021-04-23,94.8949286860636\r
2021-05-03,91.43472969427046\r
2021-05-20,89.87241545478197\r
2021-05-28,92.96582784367756\r
2021-05-30,63.89247915132753\r
2021-06-07,89.11652638329763\r
2021-06-14,95.2396478135242\r
2021-07-02,91.90141452729931\r
2021-07-22,83.73843736630745\r
2021-08-11,75.51049678297818\r
2021-08-26,56.4502067292904\r
2021-08-28,50.15667752971885\r
2021-08-31,52.20811907247882\r
2021-09-05,47.14553717642769\r
2021-09-12,46.635523667271286\r
2021-09-17,44.400958140102404\r
2021-09-30,40.37164319807279\r
2021-10-07,42.886162850256795\r
2021-10-12,39.74573314831763\r
2021-10-20,35.6801918622111\r
2021-10-27,37.86399499210636\r
2021-11-11,40.043265335518655\r
2021-11-19,41.061943822770466\r
2021-12-14,82.43654678134016\r
2021-12-19,80.09908554822267\r
2022-01-13,82.55822931127575\r
2022-01-15,86.03764528440534\r
2022-01-23,94.16417146919952\r
2022-01-25,89.2003795691302\r
2022-02-09,89.99866162587395\r
2022-03-09,93.26479997049643\r
2022-03-26,90.96905856717515\r
2022-04-05,93.64979412018131\r
2022-05-08,94.20709048193088\r
2022-05-10,98.62854721960639\r
2022-05-15,84.5155480006129\r
2022-06-17,93.43582497220083\r
2022-07-02,90.37785352843028\r
2022-07-12,88.36336196530539\r
2022-07-14,84.96685283257884\r
2022-07-17,81.3851735087333\r
2022-08-01,61.368103786005356\r
2022-08-03,55.17983573574053\r
2022-08-11,45.93812207598288\r
2022-08-28,35.79374777204663\r
2022-09-05,28.83960471764601\r
2022-09-10,27.050454049737866\r
2022-09-20,23.57237330578512\r
2022-09-22,22.23399791247814\r
2022-10-02,21.246504605526905\r
2022-10-05,21.06489907758542\r
2022-10-07,21.65754525941169\r
2022-10-15,21.887351232432522\r
2022-10-17,19.372949808616667\r
2022-10-22,19.241953965527294\r
2022-10-30,17.741792633547444\r
2022-11-06,19.526257119947605\r
2022-11-11,18.44254120828357\r
2022-11-16,16.72272599634712\r
2022-12-14,41.30321759293336\r
2022-12-21,44.089995860069756\r
2022-12-24,45.182437624302025\r
2023-01-10,50.419407482563535\r
2023-01-18,66.2383535344319\r
2023-02-04,78.38468312407626\r
2023-02-09,77.19796906748498\r
2023-02-12,77.82992239081719\r
2023-02-14,77.98825396431793\r
2023-02-17,78.78196923867348\r
2023-04-05,86.12025075231257\r
2023-04-20,83.1677897299473\r
2023-05-05,85.37801917383148\r
2023-05-28,93.26479997049643\r
2023-06-09,99.98942939085555\r
2023-06-24,98.40979532294956\r
`;export{n as default};