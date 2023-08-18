const r=`date,value\r
2017-01-03,89.11943545288678\r
2017-01-13,89.11943545288678\r
2017-02-22,89.8753006980255\r
2017-02-25,93.00831038871978\r
2017-03-07,92.72249642942414\r
2017-03-14,96.26126761931378\r
2017-03-17,96.74175579863254\r
2017-03-27,94.82304108557983\r
2017-04-03,95.49360759650818\r
2017-04-06,96.16523457730247\r
2017-04-23,96.93410156931537\r
2017-05-03,97.31905059228555\r
2017-05-23,6.444952352892665\r
2017-05-26,40.348601888179815\r
2017-06-02,97.4153414218096\r
2017-06-05,99.8295391383037\r
2017-06-12,90.72736057968709\r
2017-06-15,89.49718864740409\r
2017-06-22,89.49718864740409\r
2017-06-25,97.03030665742254\r
2017-07-02,93.77144621702188\r
2017-07-05,93.38970302962709\r
2017-07-07,98.76565541020318\r
2017-07-17,98.76565541020318\r
2017-07-27,91.39132089899704\r
2017-08-04,96.35732220835706\r
2017-08-06,97.6079872877736\r
2017-08-11,97.6079872877736\r
2017-08-14,96.64561513953109\r
2017-08-19,99.24892116450725\r
2017-08-21,95.68539298761247\r
2017-08-24,95.68539298761247\r
2017-08-26,92.5320637479634\r
2017-08-29,92.62726908459845\r
2017-09-03,90.63259804586546\r
2017-09-20,93.77144621702188\r
2017-09-23,97.6079872877736\r
2017-09-28,96.93410156931537\r
2017-10-03,97.6079872877736\r
2017-10-05,91.67620814801558\r
2017-10-08,91.67620814801558\r
2017-10-10,92.91301709390042\r
2017-10-13,91.39132089899704\r
2017-10-15,91.48626116073608\r
2017-10-18,91.58122358129125\r
2017-10-25,88.17662796155848\r
2017-10-28,82.28949130144554\r
2017-10-30,81.45599929696259\r
2017-11-07,82.19678692749542\r
2017-11-14,84.14849226463663\r
2017-11-17,84.14849226463663\r
2017-11-19,79.42665122390454\r
2017-11-22,76.86063274839871\r
2017-11-27,76.86063274839871\r
2017-12-02,76.03988510639917\r
2017-12-07,46.69419636614623\r
2017-12-09,61.87921012312568\r
2017-12-12,55.01224287680589\r
2017-12-14,55.01224287680589\r
2017-12-19,70.26147664845811\r
2018-01-28,77.68335583677062\r
2018-02-02,79.70270148934347\r
2018-02-10,8.945170813164436\r
2018-02-12,11.080355243715493\r
2018-02-22,6.972577765813213\r
2018-03-22,90.5378577854708\r
2018-03-29,90.5378577854708\r
2018-04-01,90.5378577854708\r
2018-04-06,93.6759775994986\r
2018-04-21,97.70434230095404\r
2018-04-23,97.70434230095404\r
2018-04-26,100.0\r
2018-05-06,99.92638278560521\r
2018-05-11,99.34563792382886\r
2018-05-18,99.34563792382886\r
2018-05-21,99.34563792382886\r
2018-05-23,100.0\r
2018-05-28,100.0\r
2018-06-10,96.74175579863254\r
2018-06-20,96.74175579863254\r
2018-06-22,94.72733267847381\r
2018-06-25,91.20150690264232\r
2018-06-27,92.0563676242719\r
2018-07-02,93.29432197486925\r
2018-07-07,95.68539298761247\r
2018-07-10,96.26126761931378\r
2018-07-12,93.6759775994986\r
2018-07-15,94.44033793560442\r
2018-07-17,94.44033793560442\r
2018-07-20,98.08997595101381\r
2018-07-22,94.72733267847381\r
2018-07-25,94.72733267847381\r
2018-07-27,94.05798318069463\r
2018-07-30,94.72733267847381\r
2018-08-01,93.77144621702188\r
2018-08-04,93.77144621702188\r
2018-08-06,93.96244901985192\r
2018-08-11,90.91695241640875\r
2018-08-16,93.6759775994986\r
2018-08-19,92.24657991186669\r
2018-08-21,89.78073908816708\r
2018-08-26,87.89422605966215\r
2018-08-31,87.04824504419749\r
2018-09-03,86.95436084164221\r
2018-09-08,82.28949130144554\r
2018-09-10,81.17859327849328\r
2018-09-13,82.19678692749542\r
2018-09-18,81.54851523160644\r
2018-09-20,78.87519779119579\r
2018-09-23,77.86645029613423\r
2018-09-25,79.88685455301275\r
2018-09-28,77.04328979265884\r
2018-09-30,77.04328979265884\r
2018-10-03,78.14127355256909\r
2018-10-05,72.68670808102715\r
2018-10-13,70.08256865435746\r
2018-10-20,64.50027457606176\r
2018-10-23,61.18441299755952\r
2018-10-25,58.852602681900294\r
2018-10-30,58.852602681900294\r
2018-11-04,56.711871583704664\r
2018-11-22,43.69630088616258\r
2018-11-29,44.582883828106276\r
2018-12-27,74.49501533502242\r
2018-12-29,74.49501533502242\r
2019-01-03,78.59979545197005\r
2019-01-06,78.59979545197005\r
2019-01-11,78.59979545197005\r
2019-01-16,87.89422605966215\r
2019-01-23,81.08617191680736\r
2019-01-28,75.13027440617587\r
2019-03-12,1.638508848122959\r
2019-03-22,87.98833739207737\r
2019-03-24,90.15911973488497\r
2019-03-27,86.48528190614947\r
2019-03-29,89.11943545288678\r
2019-04-01,88.08247136381527\r
2019-04-13,89.30826714097648\r
2019-05-01,93.29432197486925\r
2019-05-06,96.74175579863254\r
2019-05-11,96.74175579863254\r
2019-05-13,94.34471655449515\r
2019-05-16,94.34471655449515\r
2019-05-23,95.49360759650818\r
2019-05-31,99.63591521422227\r
2019-06-02,93.86693669455306\r
2019-06-17,94.72733267847381\r
2019-06-27,94.72733267847381\r
2019-06-30,94.53598109138494\r
2019-07-02,95.30190877413388\r
2019-07-05,97.70434230095404\r
2019-07-07,97.31905059228555\r
2019-07-10,97.4153414218096\r
2019-07-12,97.4153414218096\r
2019-07-15,97.8971164296772\r
2019-07-17,96.83791794580891\r
2019-07-20,95.97323318174433\r
2019-07-22,92.5320637479634\r
2019-07-25,91.20150690264232\r
2019-08-04,86.86049942615713\r
2019-08-09,77.5003583597744\r
2019-08-14,74.313735795908\r
2019-08-16,75.31199950529441\r
2019-08-21,74.948648089369\r
2019-08-24,66.7029846704038\r
2019-08-26,65.99630995573075\r
2019-08-29,65.99630995573075\r
2019-08-31,66.7029846704038\r
2019-09-03,69.63574801866818\r
2019-09-05,69.63574801866818\r
2019-09-08,69.5464610675764\r
2019-09-13,70.70919472415287\r
2019-09-15,70.70919472415287\r
2019-09-18,60.57791675619904\r
2019-09-20,60.57791675619904\r
2019-10-03,60.57791675619904\r
2019-10-08,50.898130422898625\r
2019-10-13,54.082432971613194\r
2019-10-25,62.66295846767832\r
2019-12-29,82.19678692749542\r
2020-01-06,60.40488200467973\r
2020-01-11,60.40488200467973\r
2020-01-16,82.84621030761558\r
2020-01-18,75.40289905719227\r
2020-02-05,85.08148020982229\r
2020-02-07,88.45923337792871\r
2020-02-12,88.45923337792871\r
2020-02-15,88.45923337792871\r
2020-02-20,85.36182693404302\r
2020-02-22,80.716723421623\r
2020-03-08,76.13098137342392\r
2020-03-18,90.5378577854708\r
2020-03-21,90.72736057968709\r
2020-03-28,89.49718864740409\r
2020-03-31,89.68619986778478\r
2020-04-02,89.68619986778478\r
2020-04-05,91.10663319340779\r
2020-04-07,91.01178169375179\r
2020-04-10,91.01178169375179\r
2020-04-12,91.01178169375179\r
2020-04-15,92.24657991186669\r
2020-04-25,98.86226611745643\r
2020-05-07,98.9588980579183\r
2020-05-17,92.24657991186669\r
2020-05-20,90.82214537413061\r
2020-05-22,97.99353552205147\r
2020-05-25,99.73271661074925\r
2020-05-30,99.73271661074925\r
2020-06-21,93.29432197486925\r
2020-06-24,93.29432197486925\r
2020-06-26,95.39774735824949\r
2020-06-29,95.39774735824949\r
2020-07-01,95.39774735824949\r
2020-07-04,98.37942514203957\r
2020-07-06,97.70434230095404\r
2020-07-09,97.03030665742254\r
2020-07-11,98.47595080203966\r
2020-07-14,98.47595080203966\r
2020-07-19,96.93410156931537\r
2020-07-21,95.30190877413388\r
2020-07-24,93.58053085424002\r
2020-07-26,97.99353552205147\r
2020-07-29,95.68539298761247\r
2020-07-31,93.29432197486925\r
2020-08-05,88.17662796155848\r
2020-08-08,92.34171914911407\r
2020-08-10,91.48626116073608\r
2020-08-15,88.27080717200846\r
2020-08-20,87.14215202029538\r
2020-08-25,87.98833739207737\r
2020-09-02,74.2231332848099\r
2020-09-04,74.313735795908\r
2020-09-07,72.50642838685022\r
2020-09-12,69.81439915127254\r
2020-09-14,67.234098644242\r
2020-09-17,62.05318461578576\r
2020-11-06,93.38970302962709\r
2020-11-08,94.53598109138494\r
2020-11-11,88.45923337792871\r
2020-11-18,88.55348034689585\r
2020-11-21,83.96217265015656\r
2020-11-23,82.19678692749542\r
2020-11-28,81.27103830562223\r
2021-01-07,41.14021107531799\r
2021-01-10,41.14021107531799\r
2021-01-17,41.14021107531799\r
2021-02-14,85.82953169082089\r
2021-02-19,91.58122358129125\r
2021-02-24,86.11043006652623\r
2021-02-26,89.11943545288678\r
2021-03-01,89.11943545288678\r
2021-03-06,82.93907880040082\r
2021-03-23,92.72249642942414\r
2021-03-28,94.72733267847381\r
2021-03-31,95.49360759650818\r
2021-04-02,98.37942514203957\r
2021-04-05,97.31905059228555\r
2021-04-15,99.34563792382886\r
2021-04-17,99.53913496001778\r
2021-05-27,95.01452306653056\r
2021-05-30,95.01452306653056\r
2021-06-01,95.01452306653056\r
2021-06-14,97.51165365751807\r
2021-06-16,100.0\r
2021-06-19,100.0\r
2021-06-26,96.26126761931378\r
2021-07-01,98.18643770501771\r
2021-07-09,95.30190877413388\r
2021-07-11,99.24892116450725\r
2021-07-19,100.0\r
2021-07-21,100.0\r
2021-07-26,91.48626116073608\r
2021-07-29,91.48626116073608\r
2021-08-20,88.64774987556342\r
2021-08-23,87.70607136616366\r
2021-08-25,87.70607136616366\r
2021-08-28,93.10362564206724\r
2021-08-30,89.68619986778478\r
2021-09-04,94.34471655449515\r
2021-09-07,94.34471655449515\r
2021-09-22,87.04824504419749\r
2021-09-24,89.11943545288678\r
2021-10-07,89.8753006980255\r
2021-10-09,89.8753006980255\r
2021-10-12,90.72736057968709\r
2021-10-14,88.74204195072652\r
2021-10-17,90.06449103432362\r
2021-10-19,87.80013737990583\r
2021-10-24,87.61202803180977\r
2021-10-27,84.61469709082306\r
2021-11-06,85.54883987355736\r
2021-11-11,87.70607136616366\r
2021-11-18,87.70607136616366\r
2021-12-11,75.58477208383805\r
2021-12-16,89.02505332341893\r
2021-12-18,85.08148020982229\r
2021-12-21,84.70800750732003\r
2021-12-23,88.55348034689585\r
2022-01-15,92.34171914911407\r
2022-01-17,83.12488593461617\r
2022-01-22,78.50804283083981\r
2022-01-25,80.90140024914547\r
2022-01-27,82.28949130144554\r
2022-01-30,84.33490468756514\r
2022-02-09,89.68619986778478\r
2022-03-01,1.2647892474142428\r
2022-03-06,1.2647892474142428\r
2022-03-08,92.0563676242719\r
2022-03-23,94.24911696019895\r
2022-03-26,95.11029661626992\r
2022-03-28,91.96129459899393\r
2022-04-05,92.34171914911407\r
2022-04-15,90.82214537413061\r
2022-04-17,94.82304108557983\r
2022-04-22,94.82304108557983\r
2022-05-17,93.10362564206724\r
2022-05-20,93.00831038871978\r
2022-05-22,93.00831038871978\r
2022-05-27,98.18643770501771\r
2022-05-30,98.18643770501771\r
2022-06-01,100.0\r
2022-06-04,97.4153414218096\r
2022-06-06,99.73271661074925\r
2022-06-11,98.9588980579183\r
2022-06-14,96.06922309416136\r
2022-06-16,100.0\r
2022-06-19,94.53598109138494\r
2022-07-01,94.15353916487395\r
2022-07-04,94.15353916487395\r
2022-07-06,96.45339833260975\r
2022-07-11,93.10362564206724\r
2022-07-14,93.38970302962709\r
2022-07-16,94.53598109138494\r
2022-07-19,92.72249642942414\r
2022-07-21,92.72249642942414\r
2022-07-24,92.72249642942414\r
2022-07-26,91.58122358129125\r
2022-07-31,90.4431398113259\r
2022-08-03,89.68619986778478\r
2022-08-05,85.54883987355736\r
2022-08-08,80.90140024914547\r
2022-08-10,80.99377423540408\r
2022-08-13,80.25544706253407\r
2022-08-20,86.76666081128924\r
2022-08-28,65.5554995779713\r
2022-08-30,69.18957112266038\r
2022-09-02,69.18957112266038\r
2022-09-04,66.26111459702075\r
2022-09-12,67.0569554426084\r
2022-09-19,68.74404024743835\r
2022-09-22,65.5554995779713\r
2022-10-04,67.234098644242\r
2022-10-07,71.4268704764973\r
2022-10-09,67.50001028684895\r
2022-10-12,67.50001028684895\r
2022-10-19,66.34943576292648\r
2022-10-22,62.227268852631966\r
2022-10-24,62.48860060861391\r
2022-11-11,61.531591049735404\r
2022-11-13,61.531591049735404\r
2022-11-16,61.531591049735404\r
2022-12-06,69.81439915127254\r
2022-12-11,69.81439915127254\r
2022-12-16,69.81439915127254\r
2022-12-28,90.25377077316563\r
2023-01-20,77.5003583597744\r
2023-01-30,77.5003583597744\r
2023-02-06,64.41251326112626\r
2023-02-09,64.41251326112626\r
2023-02-11,78.14127355256909\r
2023-02-14,86.01677434662476\r
2023-02-16,88.45923337792871\r
2023-02-19,86.86049942615713\r
2023-02-26,88.27080717200846\r
2023-03-16,95.39774735824949\r
2023-03-28,91.86624366947052\r
2023-04-05,92.81774576999949\r
2023-04-07,91.10663319340779\r
2023-04-17,89.96988468439375\r
2023-05-27,90.15911973488497\r
2023-05-30,90.15911973488497\r
2023-06-04,90.72736057968709\r
2023-06-24,91.20150690264232\r
2023-06-26,91.39132089899704\r
2023-06-29,91.39132089899704\r
2023-07-09,96.35732220835706\r
2023-07-11,93.19896284156928\r
2023-07-14,93.96244901985192\r
2023-07-16,93.96244901985192\r
2023-07-19,94.24911696019895\r
`;export{r as default};
