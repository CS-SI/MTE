const n=`date,value\r
2017-02-25,83.54239938221177\r
2017-03-17,85.6374491639372\r
2017-03-27,86.49826936334686\r
2017-04-03,83.69671707361131\r
2017-04-23,89.66404308594532\r
2017-05-03,96.41062437745848\r
2017-05-16,81.54895812618221\r
2017-05-23,87.75789416316451\r
2017-05-26,83.77392819824561\r
2017-06-02,83.31118424989124\r
2017-06-05,84.31538188134803\r
2017-06-12,86.41983882646763\r
2017-06-15,88.39104924317505\r
2017-06-22,88.94688761050757\r
2017-06-25,88.23255158455923\r
2017-07-02,96.41062437745848\r
2017-07-05,97.07355176464169\r
2017-07-07,94.92716958629819\r
2017-07-12,94.92716958629819\r
2017-07-17,92.56085002934144\r
2017-07-27,87.36330379629527\r
2017-08-14,88.15335497576707\r
2017-08-19,95.09144179368846\r
2017-08-21,88.23255158455923\r
2017-08-24,88.23255158455923\r
2017-08-26,91.91321885285842\r
2017-08-29,93.78115760546899\r
2017-09-03,93.2920956797471\r
2017-10-05,84.70317993627296\r
2017-10-10,84.70317993627296\r
2017-10-13,84.70317993627296\r
2017-10-15,89.2652753254173\r
2017-10-18,91.1068104906291\r
2017-10-25,91.1068104906291\r
2017-10-28,86.8909444601172\r
2017-11-17,86.8909444601172\r
2017-11-19,86.8909444601172\r
2017-11-22,89.82379380983994\r
2017-11-27,89.82379380983994\r
2017-12-07,83.92845500201787\r
2017-12-09,83.92845500201787\r
2017-12-12,83.92845500201787\r
2017-12-14,83.92845500201787\r
2018-01-23,87.67890645150564\r
2018-01-28,91.59023806274824\r
2018-01-31,91.59023806274824\r
2018-03-14,89.10601185453571\r
2018-03-19,93.0480341473508\r
2018-03-22,93.0480341473508\r
2018-04-21,89.10601185453571\r
2018-04-23,89.10601185453571\r
2018-04-26,89.10601185453571\r
2018-05-01,88.23255158455923\r
2018-05-06,87.75789416316451\r
2018-05-08,93.0480341473508\r
2018-05-11,91.34836772798933\r
2018-05-18,91.83242147756616\r
2018-05-21,92.23675618870865\r
2018-06-02,60.78300692844169\r
2018-06-07,65.07911831395674\r
2018-06-12,65.07911831395674\r
2018-06-20,85.24756062879398\r
2018-06-22,100.0\r
2018-06-25,91.02636099170923\r
2018-06-27,97.98870764032988\r
2018-07-02,96.99056422952886\r
2018-07-07,96.41062437745848\r
2018-07-10,88.78790259854505\r
2018-07-12,94.35331185274151\r
2018-07-15,95.33811079833832\r
2018-07-17,95.33811079833832\r
2018-07-20,95.83238724226133\r
2018-07-22,95.83238724226133\r
2018-07-25,89.66404308594532\r
2018-07-27,95.25585303848493\r
2018-07-30,94.10789428682904\r
2018-08-01,93.45497723538062\r
2018-08-04,93.45497723538062\r
2018-08-06,95.99742409320072\r
2018-08-11,92.96674985270997\r
2018-08-16,97.98870764032988\r
2018-08-19,90.62463537758545\r
2018-08-21,94.27147123156973\r
2018-08-26,91.02636099170923\r
2018-09-03,87.44215223006954\r
2018-09-05,93.21070706150547\r
2018-09-08,93.37351907125061\r
2018-09-10,90.14371286282409\r
2018-09-13,94.10789428682904\r
2018-09-18,92.56085002934144\r
2018-09-20,90.94594628396206\r
2018-09-23,88.47035029169007\r
2018-09-25,90.38401753670372\r
2018-09-28,89.2652753254173\r
2018-10-05,87.83691669265204\r
2018-10-18,84.6255506352621\r
2018-10-20,92.64196043857945\r
2018-10-23,92.64196043857945\r
2018-10-25,92.64196043857945\r
2018-10-30,89.74390104713589\r
2018-11-04,91.75165888702297\r
2018-11-09,91.75165888702297\r
2018-11-12,90.46418868819237\r
2018-11-14,90.54439463536822\r
2018-11-22,84.6255506352621\r
2018-11-24,84.6255506352621\r
2018-11-27,80.18269176199908\r
2018-12-27,77.63280688723624\r
2018-12-29,77.63280688723624\r
2019-02-05,65.28402129408173\r
2019-02-10,65.28402129408173\r
2019-02-12,74.2471974048598\r
2019-02-15,70.22538144883694\r
2019-02-17,78.75278342339779\r
2019-02-20,78.00525983228684\r
2019-02-22,78.90270692635747\r
2019-02-25,81.01628955021512\r
2019-02-27,79.57908993585858\r
2019-03-04,81.39659273732934\r
2019-03-07,86.73376994157826\r
2019-03-22,83.54239938221177\r
2019-03-24,91.75165888702297\r
2019-03-27,85.79364843234181\r
2019-03-29,88.31178300724669\r
2019-04-01,88.31178300724669\r
2019-04-08,87.28449018363615\r
2019-04-13,95.99742409320072\r
2019-04-18,91.6709310818699\r
2019-05-01,90.54439463536822\r
2019-05-13,100.0\r
2019-05-16,94.76303642134918\r
2019-05-23,97.07355176464169\r
2019-05-26,97.07355176464169\r
2019-05-31,96.24524001141272\r
2019-06-02,91.1068104906291\r
2019-06-05,91.1068104906291\r
2019-06-12,98.23902512882098\r
2019-06-17,99.41130668172094\r
2019-06-27,99.41130668172094\r
2019-06-30,96.7418100964307\r
2019-07-02,98.74059795173487\r
2019-07-05,98.9918532528146\r
2019-07-07,95.74992094703043\r
2019-07-10,97.48901059280641\r
2019-07-12,96.99056422952886\r
2019-07-15,99.41130668172094\r
2019-07-17,98.32253376378044\r
2019-07-20,99.15953043838871\r
2019-07-22,97.15657404409042\r
2019-07-25,97.73870278941564\r
2019-08-01,95.00928831000296\r
2019-08-04,93.53647017150212\r
2019-08-06,93.53647017150212\r
2019-08-09,97.23963106725292\r
2019-08-11,96.0799946476568\r
2019-08-14,95.5027305898135\r
2019-08-16,95.5027305898135\r
2019-08-24,94.02615796452464\r
2019-08-26,92.23675618870865\r
2019-08-29,96.90761143937426\r
2019-08-31,94.76303642134918\r
2019-09-03,91.59023806274824\r
2019-09-13,91.75165888702297\r
2019-09-15,92.88550033387544\r
2019-09-18,96.65896154488793\r
2019-09-20,96.82469339480056\r
2019-09-30,96.65896154488793\r
2019-10-03,91.83242147756616\r
2019-10-08,87.28449018363615\r
2019-10-13,90.30388118154843\r
2019-10-25,90.38401753670372\r
2019-10-30,89.10601185453571\r
2019-11-04,89.10601185453571\r
2019-12-29,47.75562861522712\r
2020-01-06,75.34308032709487\r
2020-01-16,77.93069943279367\r
2020-01-18,77.93069943279367\r
2020-01-21,77.93069943279367\r
2020-01-26,75.12327493934441\r
2020-02-07,85.0918490830679\r
2020-02-12,85.0918490830679\r
2020-02-15,87.12696742429662\r
2020-02-20,78.52815989723302\r
2020-02-22,78.52815989723302\r
2020-03-21,78.60299950792377\r
2020-03-23,82.38946092232193\r
2020-03-26,82.38946092232193\r
2020-03-28,81.47275799572444\r
2020-03-31,81.6251931280199\r
2020-04-02,79.12785389517113\r
2020-04-05,79.50379670193203\r
2020-04-07,77.85617393784239\r
2020-04-10,76.52068450448645\r
2020-04-12,75.05007633855888\r
2020-04-15,73.1591759745959\r
2020-04-27,73.738475604274\r
2020-05-07,97.73870278941564\r
2020-05-17,89.42467801794523\r
2020-05-20,93.12935321716141\r
2020-05-22,93.12935321716141\r
2020-05-25,93.0480341473508\r
2020-05-27,90.46418868819237\r
2020-05-30,93.2920956797471\r
2020-06-01,93.2920956797471\r
2020-06-14,100.0\r
2020-06-21,96.82469339480056\r
2020-06-24,96.82469339480056\r
2020-06-26,99.24342112478512\r
2020-06-29,98.23902512882098\r
2020-07-01,100.0\r
2020-07-04,98.07211206647713\r
2020-07-06,98.07211206647713\r
2020-07-09,98.40607713377393\r
2020-07-11,98.40607713377393\r
2020-07-14,100.0\r
2020-07-19,97.65543731701862\r
2020-07-21,100.0\r
2020-07-24,98.74059795173487\r
2020-07-26,100.0\r
2020-07-29,97.73870278941564\r
2020-07-31,98.5732680763918\r
2020-08-05,97.57220658460872\r
2020-08-08,93.86278962321147\r
2020-08-10,92.39873354848409\r
2020-08-15,98.32253376378044\r
2020-08-18,93.2920956797471\r
2020-08-20,97.57220658460872\r
2020-08-25,91.59023806274824\r
2020-09-02,98.82431498763592\r
2020-09-04,94.35331185274151\r
2020-09-07,97.98870764032988\r
2020-09-09,97.98870764032988\r
2020-09-12,96.16259995393597\r
2020-09-14,93.0480341473508\r
2020-09-17,93.53647017150212\r
2020-11-18,47.696993033277835\r
2020-11-21,47.696993033277835\r
2020-11-23,49.590818319881116\r
2020-11-26,48.52109991121616\r
2020-11-28,48.462005962667725\r
2020-12-18,83.77392819824561\r
2020-12-28,83.77392819824561\r
2021-02-14,53.177130076551826\r
2021-02-21,54.233211522389055\r
2021-02-24,51.825531453781\r
2021-02-26,51.216800537011\r
2021-03-01,52.07000958241886\r
2021-03-06,50.55126363605661\r
2021-03-23,44.186943902901795\r
2021-03-28,53.36275862378118\r
2021-03-31,51.64254249671678\r
2021-04-02,60.387611480649696\r
2021-04-05,62.57791508514332\r
2021-04-07,60.98117833342576\r
2021-04-12,64.87453066267878\r
2021-04-15,68.04618236463156\r
2021-04-17,67.35038963163906\r
2021-04-27,95.25585303848493\r
2021-05-05,95.00928831000296\r
2021-05-27,90.46418868819237\r
2021-05-30,90.46418868819237\r
2021-06-01,90.46418868819237\r
2021-06-11,88.47035029169007\r
2021-06-14,94.5170973895286\r
2021-06-16,90.62463537758545\r
2021-06-26,96.0799946476568\r
2021-07-11,89.2652753254173\r
2021-07-19,100.0\r
2021-07-21,92.39873354848409\r
2021-07-29,91.6709310818699\r
2021-08-05,91.34836772798933\r
2021-08-08,94.59904230388112\r
2021-08-10,97.15657404409042\r
2021-08-13,97.15657404409042\r
2021-08-15,97.15657404409042\r
2021-08-20,95.74992094703043\r
2021-08-25,88.39104924317505\r
2021-08-28,88.39104924317505\r
2021-09-04,93.0480341473508\r
2021-09-07,91.4289563851659\r
2021-09-12,90.14371286282409\r
2021-09-22,86.1064649759216\r
2021-09-24,85.55940178290707\r
2021-10-14,84.39287180096755\r
2021-10-17,85.01404557037125\r
2021-10-19,87.59995355833216\r
2021-10-22,87.59995355833216\r
2021-10-24,84.85854306864825\r
2021-10-27,77.63280688723624\r
2021-12-21,81.39659273732934\r
2021-12-23,86.49826936334686\r
2022-01-25,84.85854306864825\r
2022-01-27,95.33811079833832\r
2022-02-09,83.4652928167937\r
2022-02-11,83.4652928167937\r
2022-02-19,88.07419318152503\r
2022-02-26,83.4652928167937\r
2022-03-01,83.4652928167937\r
2022-03-06,88.54968615213797\r
2022-03-08,86.02820859084044\r
2022-03-26,89.58421992691719\r
2022-04-15,85.24756062879398\r
2022-04-17,92.96674985270997\r
2022-04-22,88.86737770019215\r
2022-04-27,88.78790259854505\r
2022-04-30,95.74992094703043\r
2022-05-02,90.70491091419855\r
2022-05-07,95.66748940612749\r
2022-05-12,86.96958395732068\r
2022-05-17,96.82469339480056\r
2022-05-25,96.82469339480056\r
2022-05-27,96.82469339480056\r
2022-05-30,90.14371286282409\r
2022-06-01,90.14371286282409\r
2022-06-04,92.07491795512766\r
2022-06-06,92.07491795512766\r
2022-06-11,98.9918532528146\r
2022-06-16,99.07567448086012\r
2022-06-19,95.66748940612749\r
2022-06-21,95.66748940612749\r
2022-06-29,94.68102198136488\r
2022-07-01,88.86737770019215\r
2022-07-06,92.88550033387544\r
2022-07-11,99.91579678144046\r
2022-07-14,94.84508562320364\r
2022-07-16,96.7418100964307\r
2022-07-19,97.65543731701862\r
2022-07-21,95.83238724226133\r
2022-07-24,95.33811079833832\r
2022-07-26,94.76303642134918\r
2022-07-31,96.0799946476568\r
2022-08-03,95.66748940612749\r
2022-08-05,97.57220658460872\r
2022-08-08,97.90533795169097\r
2022-08-10,97.48901059280641\r
2022-08-13,97.57220658460872\r
2022-08-25,96.0799946476568\r
2022-08-28,96.32791481946187\r
2022-08-30,96.32791481946187\r
2022-09-02,96.32791481946187\r
2022-09-04,93.69956035718063\r
2022-09-09,92.31772747814172\r
2022-09-12,92.64196043857945\r
2022-09-14,87.44215223006954\r
2022-09-19,86.41983882646763\r
2022-09-22,86.57673472859926\r
2022-10-02,80.1071194334648\r
2022-10-04,94.84508562320364\r
2022-10-07,96.57614774079572\r
2022-10-09,92.88550033387544\r
2022-10-12,92.88550033387544\r
2022-10-22,88.31178300724669\r
2022-11-11,78.60299950792377\r
2022-11-13,78.60299950792377\r
2022-12-06,81.24436683946003\r
2022-12-08,92.4797743990969\r
2022-12-11,85.48138923821195\r
2022-12-13,85.48138923821195\r
2022-12-18,90.30388118154843\r
2023-02-09,79.80517897033288\r
2023-02-11,88.70846230621852\r
2023-02-14,82.15981448223857\r
2023-02-16,85.24756062879398\r
2023-02-21,82.84969510925222\r
2023-02-26,84.93627689867542\r
2023-03-28,96.65896154488793\r
2023-03-31,96.65896154488793\r
2023-04-05,96.99056422952886\r
2023-04-07,96.99056422952886\r
2023-05-27,90.86556636803162\r
2023-05-30,90.86556636803162\r
2023-06-01,92.39873354848409\r
2023-06-04,92.39873354848409\r
2023-06-06,97.65543731701862\r
2023-06-11,91.4289563851659\r
2023-06-14,92.88550033387544\r
2023-06-16,91.83242147756616\r
2023-06-19,99.15953043838871\r
2023-06-24,100.0\r
2023-06-26,95.99742409320072\r
2023-07-04,87.75789416316451\r
2023-07-06,94.92716958629819\r
`;export{n as default};