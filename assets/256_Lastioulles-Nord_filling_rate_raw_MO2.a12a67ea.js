const r=`date,value\r
2017-02-15,85.18966749057165\r
2017-02-22,90.17498612385162\r
2017-02-25,84.99697408267953\r
2017-03-07,66.48227188644353\r
2017-03-14,94.90932854603207\r
2017-03-17,95.29667630426025\r
2017-03-27,80.79857157624174\r
2017-04-03,79.72108309095917\r
2017-04-06,96.32627226860899\r
2017-04-23,78.05879518281054\r
2017-05-03,80.113842361358\r
2017-05-16,100.0\r
2017-05-23,100.0\r
2017-05-26,100.0\r
2017-06-22,99.63926318114554\r
2017-06-25,89.44678606449422\r
2017-07-02,94.2732678800539\r
2017-07-05,84.63366373037772\r
2017-07-07,86.99992475097488\r
2017-07-12,86.99992475097488\r
2017-07-17,86.56697866168184\r
2017-08-14,100.0\r
2017-08-19,94.36398716568162\r
2017-08-21,84.91141094117445\r
2017-08-24,89.55690704671015\r
2017-08-26,92.9408269176574\r
2017-08-29,86.91323883355153\r
2017-09-03,89.75531590333375\r
2017-10-05,56.58042198696531\r
2017-10-10,56.58042198696531\r
2017-10-13,57.12714439586924\r
2017-10-15,55.27691483407167\r
2017-10-18,59.78190451160127\r
2017-10-25,59.51864826346287\r
2017-10-28,59.116250994902316\r
2017-10-30,66.3890665609359\r
2017-11-04,66.3890665609359\r
2017-11-07,66.3890665609359\r
2017-11-17,76.94124343352047\r
2017-11-19,84.63366373037772\r
2017-11-22,75.77249499185997\r
2017-11-27,78.03839554548274\r
2017-11-29,75.57199803971226\r
2017-12-07,73.42555064540797\r
2018-02-12,22.384181593353684\r
2018-02-22,72.11133101097741\r
2018-02-25,75.75243191876764\r
2018-02-27,75.71231469182513\r
2018-03-17,53.592852288630375\r
2018-03-22,56.61450595823319\r
2018-03-29,47.06964733097848\r
2018-04-01,47.90381583635376\r
2018-04-06,68.96939766008802\r
2018-04-16,68.62723262844163\r
2018-04-18,76.15425839666841\r
2018-04-21,76.57745694390434\r
2018-04-23,75.0720558205535\r
2018-04-26,72.91397774873772\r
2018-05-06,65.64605697576292\r
2018-05-11,61.19692958728733\r
2018-05-13,61.19692958728733\r
2018-05-18,62.6305046961663\r
2018-05-21,61.21473468046814\r
2018-06-20,82.38793881098421\r
2018-06-22,91.59667800673604\r
2018-06-25,84.9327972055676\r
2018-06-27,81.8841613878726\r
2018-07-02,81.40299665265238\r
2018-07-07,78.3855952345851\r
2018-07-10,77.77347174006314\r
2018-07-12,93.27857704392613\r
2018-07-15,91.57436833400452\r
2018-07-17,91.57436833400452\r
2018-07-25,88.67806137842558\r
2018-07-30,89.33674089701778\r
2018-08-01,89.33674089701778\r
2018-08-04,89.33674089701778\r
2018-08-06,85.25395289352498\r
2018-08-11,89.38074986695146\r
2018-08-16,89.38074986695146\r
2018-08-19,88.15308097618266\r
2018-08-21,88.02210838336516\r
2018-08-26,78.9798684637402\r
2018-09-03,86.43733048868197\r
2018-09-05,83.18912445557551\r
2018-09-08,87.02160378655596\r
2018-09-10,83.33718465794101\r
2018-09-13,83.69737295000348\r
2018-09-18,77.34658254928016\r
2018-09-20,68.30495092200978\r
2018-09-23,66.44498097529738\r
2018-09-25,58.66320577513257\r
2018-09-28,59.88738908542845\r
2018-09-30,58.99408540261305\r
2018-10-05,55.73205347704432\r
2018-10-08,55.52951178915877\r
2018-10-13,58.22942386349482\r
2018-10-18,60.31036835344909\r
2018-10-20,51.8242682642151\r
2018-10-23,46.00050704002741\r
2018-10-25,43.57879264579687\r
2018-10-30,43.57879264579687\r
2018-11-04,41.77451628061601\r
2018-11-14,41.40160798987937\r
2018-11-19,45.697561373494096\r
2018-11-22,42.134847471340024\r
2018-11-29,44.066164748638705\r
2019-01-11,74.23633081293744\r
2019-01-16,73.64258801840204\r
2019-01-23,30.66205741187588\r
2019-02-05,5.163036735169342\r
2019-02-12,84.86864745381165\r
2019-02-15,56.155341202281505\r
2019-02-17,59.83463379045364\r
2019-02-20,59.83463379045364\r
2019-02-22,61.75023575224845\r
2019-02-25,50.16844296001586\r
2019-02-27,55.64761095695333\r
2019-03-12,57.81468746737007\r
2019-03-22,75.75243191876764\r
2019-03-24,69.23618456086744\r
2019-03-27,73.03185539530396\r
2019-03-29,71.48832761817462\r
2019-04-01,74.13718837719541\r
2019-04-13,80.38319489752499\r
2019-04-18,43.63770652989823\r
2019-05-13,87.84764775657754\r
2019-05-16,84.18607059283362\r
2019-05-23,84.50564444373849\r
2019-05-31,83.23141233674454\r
2019-06-02,86.26463538828374\r
2019-06-17,75.91301975852495\r
2019-06-25,75.91301975852495\r
2019-06-27,81.57017831982675\r
2019-06-30,80.81937186263247\r
2019-07-02,82.64047609569282\r
2019-07-05,85.8122300757928\r
2019-07-07,84.07969652885939\r
2019-07-10,86.45893096638216\r
2019-07-15,88.50287408580036\r
2019-07-17,88.28416255279774\r
2019-07-20,87.30370634471292\r
2019-07-22,86.24306208953455\r
2019-07-25,88.28416255279774\r
2019-08-04,81.48656349356837\r
2019-08-09,88.10941133688623\r
2019-08-14,74.53420306076863\r
2019-08-16,86.00595506609086\r
2019-08-21,85.79072016623036\r
2019-08-24,87.4340798721208\r
2019-08-26,79.1442480246327\r
2019-08-29,71.87735022189725\r
2019-08-31,68.36176248084341\r
2019-09-03,64.44863763911553\r
2019-09-13,63.390574728546746\r
2019-09-15,64.24721723720144\r
2019-09-18,71.2167145718652\r
2019-09-20,71.83839479202769\r
2019-09-30,71.7410579171635\r
2019-10-03,86.28621170655636\r
2020-01-16,70.61734384437028\r
2020-01-18,70.61734384437028\r
2020-01-21,70.61734384437028\r
2020-02-07,79.28823704425695\r
2020-02-12,80.736188693028\r
2020-02-15,74.45470519231262\r
2020-02-20,76.19450648181031\r
2020-02-22,71.68269123972347\r
2020-03-28,64.10095124261848\r
2020-03-31,52.90112268928435\r
2020-04-02,52.90112268928435\r
2020-04-05,50.872104893803524\r
2020-04-07,46.94676390123577\r
2020-04-10,40.350483035045805\r
2020-04-12,41.315817890563125\r
2020-04-15,37.463176931090025\r
2020-05-20,88.98510570653966\r
2020-05-22,88.98510570653966\r
2020-05-25,98.40405851413236\r
2020-05-27,82.42999832398161\r
2020-05-30,90.7066622815978\r
2020-06-01,90.7066622815978\r
2020-06-24,97.94018335606567\r
2020-06-26,100.0\r
2020-06-29,100.0\r
2020-07-01,100.0\r
2020-07-04,100.0\r
2020-07-09,100.0\r
2020-07-11,98.98562789066098\r
2020-07-14,97.26974227179392\r
2020-07-19,88.65615236463547\r
2020-07-21,83.21026689287186\r
2020-07-24,87.7169293841636\r
2020-07-29,87.10835015647419\r
2020-07-31,81.23600690337189\r
2020-08-05,77.81419643643697\r
2020-08-08,77.02221591643857\r
2020-08-10,75.67220935657973\r
2020-08-15,74.79289905912223\r
2020-08-20,76.98172371733492\r
2020-08-25,85.14682563048773\r
2020-09-04,73.66233646548949\r
2020-09-07,72.44353241618155\r
2020-09-09,72.44353241618155\r
2020-09-12,77.63102924528727\r
2020-09-14,67.30563565288644\r
2020-09-17,69.88649631779329\r
2020-11-06,63.009898376750414\r
2020-11-08,63.009898376750414\r
2020-11-11,63.009898376750414\r
2020-11-18,68.02128952478294\r
2020-11-21,54.97464891924517\r
2020-11-23,56.053588682071066\r
2020-11-28,56.053588682071066\r
2021-02-14,72.69814543861338\r
2021-02-19,72.69814543861338\r
2021-02-21,80.113842361358\r
2021-02-24,73.14983960829177\r
2021-02-26,72.09181635777728\r
2021-03-01,75.09201786053974\r
2021-03-06,69.48443146549633\r
2021-03-21,50.02518750611009\r
2021-03-23,50.184374384250184\r
2021-03-26,50.184374384250184\r
2021-03-28,38.15667970974333\r
2021-03-31,38.23873646845386\r
2021-04-02,29.218229398380675\r
2021-04-05,29.018495780189674\r
2021-04-07,27.973835845491944\r
2021-04-15,30.408679231766317\r
2021-04-17,29.94123881321103\r
2021-04-22,30.38460932706463\r
2021-05-27,83.40068413540249\r
2021-05-30,83.40068413540249\r
2021-06-01,83.50657674696517\r
2021-06-14,86.50214098287246\r
2021-06-16,96.92397334026674\r
2021-06-26,91.32916262706352\r
2021-07-01,91.3960004242993\r
2021-07-11,80.96505776461022\r
2021-07-19,95.84502364183363\r
2021-07-21,80.69461508326474\r
2021-07-29,86.00595506609086\r
2021-08-20,92.02113971485515\r
2021-08-25,92.04351022810205\r
2021-08-28,91.262352190973\r
2021-08-30,83.35834814318416\r
2021-09-02,79.74172770459582\r
2021-09-22,50.39174053275267\r
2021-09-24,59.48359654840446\r
2021-09-27,59.48359654840446\r
2021-10-02,59.48359654840446\r
2021-10-12,64.11922429011749\r
2021-10-14,62.19848135200061\r
2021-10-17,61.232542672197155\r
2021-10-19,61.19692958728733\r
2021-10-22,60.2574048311668\r
2021-10-24,56.51228850131286\r
2021-10-27,47.47026042088573\r
2021-11-06,45.005034196030955\r
2022-01-15,69.94404014169847\r
2022-01-17,66.70626326630911\r
2022-01-22,66.61288228768944\r
2022-01-27,58.021848298304754\r
2022-01-30,53.295780958622785\r
2022-02-09,72.16989270519544\r
2022-02-11,75.47186102951933\r
2022-02-19,75.33179402810242\r
2022-03-06,64.9445295492343\r
2022-03-08,66.51957450642739\r
2022-03-23,48.1058594903271\r
2022-03-26,51.9866316326858\r
2022-04-10,47.03890962070595\r
2022-04-15,55.95193941977752\r
2022-04-17,54.30626550032744\r
2022-04-22,60.664124117923734\r
2022-04-27,62.99180293279554\r
2022-04-30,66.85582511311246\r
2022-05-02,66.85582511311246\r
2022-05-07,63.15476664461822\r
2022-05-17,87.41234339047435\r
2022-05-27,71.9552965371347\r
2022-06-01,87.67338079862144\r
2022-06-04,86.84825612911587\r
2022-06-06,86.84825612911587\r
2022-06-11,82.76690695039231\r
2022-06-14,81.19428944771893\r
2022-06-19,82.61941480151076\r
2022-06-21,83.10458477033278\r
2022-06-29,92.379433130397\r
2022-07-01,94.02404158856376\r
2022-07-04,92.49155963016123\r
2022-07-06,85.8122300757928\r
2022-07-11,78.71315950932882\r
2022-07-14,82.49311011772011\r
2022-07-16,78.50834225981488\r
2022-07-19,77.89568162165514\r
2022-07-21,74.7331554611535\r
2022-07-24,77.06272003157831\r
2022-07-26,76.15425839666841\r
2022-07-31,76.81987406634153\r
2022-08-03,80.0103799288647\r
2022-08-08,82.11484473820238\r
2022-08-10,77.81419643643697\r
2022-08-13,81.15258398326458\r
2022-08-25,79.34999146209269\r
2022-08-28,80.61150381013775\r
2022-08-30,77.10323606350093\r
2022-09-02,79.90699231025897\r
2022-09-04,79.72108309095917\r
2022-09-12,81.090048268474\r
2022-09-19,81.8841613878726\r
2022-09-22,82.99897780081784\r
2022-10-04,75.67220935657973\r
2022-10-09,80.71540039030309\r
2022-10-12,80.32099171410306\r
2022-10-19,88.94120586816575\r
2022-10-22,89.33674089701778\r
2022-10-24,82.03091786430757\r
2022-11-11,76.94124343352047\r
2022-11-13,76.94124343352047\r
2023-02-04,42.948279630131125\r
2023-02-06,42.948279630131125\r
2023-02-09,42.948279630131125\r
2023-02-11,42.948279630131125\r
2023-02-14,45.6522161203195\r
2023-02-16,39.106293622405744\r
2023-02-26,34.24335575823862\r
2023-03-01,64.8341475148742\r
2023-03-06,65.4980164366676\r
2023-03-13,50.104745568020945\r
2023-03-16,80.84017514516944\r
2023-04-05,80.32099171410306\r
2023-04-07,80.32099171410306\r
2023-04-30,94.09197578222731\r
2023-05-02,97.10829768948147\r
2023-05-27,91.06208502570414\r
2023-05-30,83.31602417982053\r
2023-06-01,87.56456227698747\r
2023-06-06,90.66228912371949\r
2023-06-14,84.54830548984799\r
2023-06-16,85.29682490509984\r
2023-06-24,86.91323883355153\r
2023-06-26,82.07287529795899\r
2023-07-04,88.9192604948353\r
2023-07-14,94.88657087481307\r
2023-07-19,92.28978672803878\r
`;export{r as default};
