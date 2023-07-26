const r=`date,value\r
2017-02-09,80.58619111109051\r
2017-02-12,80.58619111109051\r
2017-02-19,80.58619111109051\r
2017-03-11,96.0201280279218\r
2017-03-14,96.0201280279218\r
2017-04-03,65.13110209120788\r
2017-04-10,92.03756933797233\r
2017-04-20,93.82016264622087\r
2017-04-23,94.18520207281716\r
2017-04-30,93.72071908079079\r
2017-05-10,58.05127526108835\r
2017-05-13,53.2490473958526\r
2017-06-02,41.18876306139881\r
2017-06-09,41.18876306139881\r
2017-06-12,51.64851596977358\r
2017-06-19,54.45764336966663\r
2017-06-22,47.63582033723491\r
2017-07-02,33.04559772419169\r
2017-07-04,94.68402876794138\r
2017-07-07,97.93886772201516\r
2017-07-12,97.93886772201516\r
2017-07-17,93.45577230270167\r
2017-08-03,96.32193124372756\r
2017-08-06,96.32193124372756\r
2017-08-13,98.75195504606484\r
2017-08-18,99.90909465750546\r
2017-08-21,98.65015083924393\r
2017-08-23,98.65015083924393\r
2017-08-26,96.65777662561523\r
2017-09-05,96.89318677808059\r
2017-09-10,58.90578908544041\r
2017-09-12,58.90578908544041\r
2017-09-27,57.99805799954903\r
2017-10-05,70.5318773741877\r
2017-10-07,64.73888929259746\r
2017-10-10,71.52431498642667\r
2017-10-12,71.52431498642667\r
2017-10-15,72.40526448468846\r
2017-10-17,70.47369643861185\r
2017-10-20,55.18355656191672\r
2017-10-22,57.2289197085178\r
2017-10-25,36.53954374987733\r
2017-10-30,31.13859541063631\r
2017-11-04,31.13859541063631\r
2017-11-21,77.18687898519764\r
2017-11-29,73.67656287763037\r
2018-03-04,74.24152493510356\r
2018-03-14,50.61892415608117\r
2018-03-16,51.094871992166325\r
2018-03-21,51.094871992166325\r
2018-03-24,97.29735688183322\r
2018-04-18,89.71763611302059\r
2018-04-20,94.48435333505752\r
2018-04-25,94.48435333505752\r
2018-04-30,84.81069184320572\r
2018-05-20,60.985362578078174\r
2018-05-25,58.02466383718448\r
2018-05-30,55.209563406951744\r
2018-06-02,48.784692607200306\r
2018-06-04,48.784692607200306\r
2018-06-09,49.351471496793856\r
2018-06-19,83.23454271960345\r
2018-06-22,87.23233560135637\r
2018-06-24,89.19857984937983\r
2018-06-27,87.26440729579966\r
2018-06-29,84.58921624046832\r
2018-07-02,81.05069770844825\r
2018-07-04,81.17477253495487\r
2018-07-07,81.98337620427549\r
2018-07-09,88.10016528238205\r
2018-07-12,90.6945814513676\r
2018-07-17,92.07043801876176\r
2018-07-19,94.18520207281716\r
2018-07-22,93.78700942654163\r
2018-07-24,94.95056284237583\r
2018-07-27,94.95056284237583\r
2018-07-29,95.35100699724133\r
2018-08-01,98.00650744058915\r
2018-08-03,99.73854006686231\r
2018-08-06,98.48058399628425\r
2018-08-08,98.48058399628425\r
2018-08-11,94.78393884890617\r
2018-08-16,88.90721672164742\r
2018-08-18,90.04274631831005\r
2018-08-21,85.31791717719321\r
2018-08-23,88.22906707961883\r
2018-08-26,88.9395688498255\r
2018-08-28,89.32821464806132\r
2018-09-02,88.39031564950395\r
2018-09-05,89.2309804686117\r
2018-09-07,92.20196646880005\r
2018-09-12,90.2055032920107\r
2018-09-17,89.1337947727834\r
2018-09-20,51.62329108094244\r
2018-09-22,51.62329108094244\r
2018-09-25,42.633092528323495\r
2018-09-27,46.5235415986699\r
2018-09-30,41.69054216749043\r
2018-10-02,48.588254883788586\r
2018-10-05,45.733019809427475\r
2018-10-10,47.952339308330046\r
2018-10-12,47.61151247744485\r
2018-10-20,44.83041132720144\r
2018-10-22,38.478802726502515\r
2018-11-01,39.076182967346504\r
2018-11-24,69.19927992385165\r
2018-12-11,87.93915937663674\r
2018-12-19,87.93915937663674\r
2019-01-03,66.8526767432689\r
2019-01-10,67.79258467890254\r
2019-01-15,67.79258467890254\r
2019-01-25,48.09874860061059\r
2019-01-28,18.199851612812665\r
2019-02-04,77.49037302155443\r
2019-02-12,80.36983971555566\r
2019-02-14,66.48406004236226\r
2019-02-17,66.90946981456939\r
2019-02-19,59.22770504821503\r
2019-02-22,50.56894302680121\r
2019-02-24,52.128860459607516\r
2019-02-27,47.61151247744485\r
2019-03-16,87.64968856348148\r
2019-03-19,88.19683354158833\r
2019-03-21,87.29648438745058\r
2019-03-24,38.43471998550101\r
2019-03-26,38.34662391159823\r
2019-03-29,40.735015226780966\r
2019-03-31,38.19267851332048\r
2019-04-10,35.640354847458354\r
2019-04-13,59.09347578529699\r
2019-04-15,26.46910008825822\r
2019-04-18,19.84431796582351\r
2019-04-20,19.63317664523501\r
2019-04-30,26.692448702169823\r
2019-05-03,26.246610971378963\r
2019-05-13,50.120130353823875\r
2019-05-15,45.85239708798889\r
2019-05-23,46.16344464068658\r
2019-05-25,46.7884266137691\r
2019-05-30,27.74608888232445\r
2019-06-02,27.765073499763947\r
2019-06-04,31.51986698895421\r
2019-06-07,33.29277592295949\r
2019-06-12,42.980337034726276\r
2019-06-17,91.84047009214973\r
2019-06-19,94.28487090288371\r
2019-06-24,81.32998824737875\r
2019-06-27,76.5513167994511\r
2019-06-29,74.21174083707412\r
2019-07-02,78.19047788099935\r
2019-07-04,78.19047788099935\r
2019-07-07,92.16907629758198\r
2019-07-09,89.68515470506502\r
2019-07-12,95.11732080846708\r
2019-07-14,96.22128199429855\r
2019-07-17,100.0\r
2019-07-19,98.6162267867311\r
2019-07-22,98.44668665434915\r
2019-07-24,98.58230807602366\r
2019-07-29,98.58230807602366\r
2019-08-01,100.0\r
2019-08-03,83.89487657114051\r
2019-08-08,81.98337620427549\r
2019-08-11,81.98337620427549\r
2019-08-18,81.98337620427549\r
2019-08-21,88.03574674031208\r
2019-08-23,83.67449986544669\r
2019-08-26,92.33358087408352\r
2019-08-28,90.01021107177682\r
2019-08-31,87.48906026934816\r
2019-09-02,87.48906026934816\r
2019-09-05,87.48906026934816\r
2019-09-07,83.04631475638367\r
2019-09-10,86.01761220076708\r
2019-09-12,79.04666870755403\r
2019-09-15,80.03039702129261\r
2019-09-17,75.37737321096357\r
2019-09-20,83.01496239752896\r
2019-09-22,79.96875083875533\r
2019-09-30,81.547518273582\r
2019-11-16,60.06303719417839\r
2019-11-21,72.25809675076307\r
2019-12-06,83.4543885619381\r
2019-12-14,85.0641314270222\r
2019-12-19,76.21936363148836\r
2019-12-21,75.94825690069898\r
2020-01-20,68.6809979412493\r
2020-01-25,68.6809979412493\r
2020-02-07,66.34253287648473\r
2020-02-09,71.02730261830366\r
2020-02-22,67.30763941145864\r
2020-02-24,43.328870685755724\r
2020-03-18,82.9836154586628\r
2020-03-20,24.803389610015767\r
2020-03-23,59.41586022773097\r
2020-03-25,59.41586022773097\r
2020-03-28,60.306555861797804\r
2020-03-30,58.77189452778199\r
2020-04-02,55.652537883707744\r
2020-04-04,60.414931160954424\r
2020-04-07,65.21528877774972\r
2020-04-09,63.98554294743719\r
2020-04-12,63.12557077439907\r
2020-04-14,57.20248155973311\r
2020-04-17,54.43179930487355\r
2020-04-22,36.38896680530056\r
2020-04-24,36.4749759165493\r
2020-04-27,28.375718196503374\r
2020-05-04,28.126910334645316\r
2020-05-07,26.246610971378963\r
2020-05-09,23.04769804825759\r
2020-05-17,38.43471998550101\r
2020-05-19,46.90905645871496\r
2020-05-27,69.17043968702986\r
2020-05-29,71.67079700656316\r
2020-06-01,68.85356039294172\r
2020-06-03,69.5747037844926\r
2020-06-23,77.1565595721594\r
2020-06-28,100.0\r
2020-07-01,100.0\r
2020-07-06,100.0\r
2020-07-08,84.8740192813004\r
2020-07-11,100.0\r
2020-07-13,87.36065476170607\r
2020-07-18,84.68410189091118\r
2020-07-21,84.68410189091118\r
2020-07-23,86.81589479570813\r
2020-07-28,87.45695079796428\r
2020-07-31,87.97134977104926\r
2020-08-05,86.33652010393104\r
2020-08-07,82.70173693686019\r
2020-08-10,81.60971856561447\r
2020-08-12,80.70994002269187\r
2020-08-15,77.7639837688952\r
2020-08-17,77.82484611128085\r
2020-08-20,77.42963059592932\r
2020-08-25,78.12948476996783\r
2020-08-27,78.12948476996783\r
2020-09-01,88.71321712152044\r
2020-09-04,77.97709733195688\r
2020-09-09,66.59738118110002\r
2020-09-11,66.3708272634863\r
2020-09-14,68.33646787525001\r
2020-09-16,32.004507738815676\r
2020-09-19,32.349842233142226\r
2020-10-31,21.032404455197433\r
2020-11-05,24.911689283417424\r
2020-11-15,22.441141071637734\r
2020-11-18,22.995417350651287\r
2020-11-23,23.90930210397223\r
2020-11-25,23.90930210397223\r
2020-11-28,24.984009057465798\r
2020-12-10,27.651254977699708\r
2020-12-13,26.48767965316171\r
2021-02-21,55.835410103070856\r
2021-02-23,75.82790699392228\r
2021-02-26,73.91420081950257\r
2021-02-28,75.40737055321154\r
2021-03-08,85.66743764865289\r
2021-03-10,81.98337620427549\r
2021-03-20,15.30929191493362\r
2021-03-23,18.735482644363245\r
2021-03-25,16.620742847903465\r
2021-03-28,19.423069789508123\r
2021-03-30,19.26215364694435\r
2021-04-02,22.18345677326533\r
2021-04-04,26.117222817078705\r
2021-04-07,82.70173693686019\r
2021-04-09,24.839465498874947\r
2021-04-12,19.005963236994162\r
2021-04-14,2.652618355689762\r
2021-04-17,2.49288527303557\r
2021-04-19,2.49288527303557\r
2021-04-22,4.814055717688838\r
2021-04-24,11.0679059951645\r
2021-04-27,12.848636336364255\r
2021-06-01,21.60442105795049\r
2021-06-03,10.782970071744689\r
2021-06-11,13.922515206396447\r
2021-06-13,68.16450034508567\r
2021-06-16,81.32998824737875\r
2021-06-18,81.32998824737875\r
2021-06-23,90.56404223314033\r
2021-06-26,87.55329540005982\r
2021-07-18,94.18520207281716\r
2021-07-21,95.21743988672877\r
2021-07-23,95.21743988672877\r
2021-08-25,74.39052749117013\r
2021-08-27,74.45016680757092\r
2021-09-01,74.68894285890433\r
2021-09-04,74.68894285890433\r
2021-09-06,26.562057592986356\r
2021-09-11,26.562057592986356\r
2021-09-24,18.121682559950557\r
2021-10-01,17.043518388402457\r
2021-10-11,13.991808247817495\r
2021-10-14,12.202437422947835\r
2021-10-16,8.515894119513915\r
2021-10-19,8.538013660107433\r
2021-10-24,8.405690613918857\r
2021-10-29,12.267676328237274\r
2022-01-22,77.3689099780372\r
2022-02-08,74.33091005630016\r
2022-02-11,79.72238360720807\r
2022-02-13,69.2569769089177\r
2022-02-18,76.97475762499057\r
2022-02-23,54.89785157434724\r
2022-02-26,76.27966962737415\r
2022-02-28,81.20580481764196\r
2022-03-03,75.82790699392228\r
2022-03-05,69.89309632469512\r
2022-03-08,69.74828993876652\r
2022-03-20,63.18089206113473\r
2022-03-23,84.68410189091118\r
2022-03-25,82.26413217931912\r
2022-04-04,86.97595636538156\r
2022-04-14,49.351471496793856\r
2022-04-17,68.10722191993075\r
2022-04-27,67.93551892105494\r
2022-05-14,15.892602843438095\r
2022-05-24,15.892602843438095\r
2022-05-27,64.5431896738285\r
2022-05-29,66.17288255460426\r
2022-06-03,66.17288255460426\r
2022-06-06,65.74962698080846\r
2022-06-11,90.43358910024585\r
2022-06-13,88.39031564950395\r
2022-06-16,90.2055032920107\r
2022-06-18,90.6945814513676\r
2022-06-21,90.6945814513676\r
2022-06-23,85.22270696003514\r
2022-07-03,77.58152754633562\r
2022-07-06,87.26440729579966\r
2022-07-08,87.39274804397607\r
2022-07-11,90.49880490537231\r
2022-07-18,92.43234807995279\r
2022-07-21,86.62399909925462\r
2022-07-26,87.61755211358306\r
2022-07-28,84.36800579656646\r
2022-07-31,83.14040435115218\r
2022-08-02,84.30485152343427\r
2022-08-05,84.30485152343427\r
2022-08-07,84.90569111523827\r
2022-08-10,86.62399909925462\r
2022-08-12,87.0720580931152\r
2022-08-17,87.58542105905353\r
2022-08-22,88.19683354158833\r
2022-08-25,98.24341480237189\r
2022-09-01,99.84085681235646\r
2022-09-04,99.4318780292242\r
2022-09-11,97.33107248874168\r
2022-09-19,84.14706057008814\r
2022-09-21,47.0298284887374\r
2022-10-06,71.70010987414818\r
2022-10-09,71.70010987414818\r
2022-10-16,71.70010987414818\r
2022-10-26,55.652537883707744\r
2022-10-31,57.94486308394815\r
2022-11-10,73.58753897910061\r
2022-12-08,78.0685134501198\r
2023-02-08,57.1232006722434\r
2023-02-11,56.543346132704016\r
2023-02-13,39.14281855834612\r
2023-02-16,39.36531252290259\r
2023-02-21,27.273406481221983\r
2023-02-26,17.1652038684967\r
2023-03-05,79.23069343210496\r
2023-04-04,100.0\r
2023-04-09,100.0\r
2023-04-19,100.0\r
2023-05-27,21.015686857922333\r
2023-05-29,26.506265186439386\r
2023-06-01,25.492933215484854\r
2023-06-03,37.05796773326919\r
2023-06-06,57.94486308394815\r
2023-06-08,69.31469590792372\r
2023-06-11,80.24632990877191\r
2023-06-13,80.24632990877191\r
2023-06-16,92.20196646880005\r
2023-06-23,91.21759896852708\r
2023-06-28,83.4543885619381\r
2023-07-06,89.16618461738202\r
2023-07-08,93.22422558849456\r
`;export{r as default};