const n=`date,value\r
2017-01-19,76.36748429871476\r
2017-01-26,72.18782033539617\r
2017-01-29,68.50426269899454\r
2017-02-15,85.42574825226225\r
2017-02-18,96.98853106951933\r
2017-02-25,88.34855418803672\r
2017-03-10,90.98452023225045\r
2017-03-30,89.93685570293204\r
2017-04-09,98.76093045031686\r
2017-04-19,95.73965966693349\r
2017-04-29,100.0\r
2017-05-09,85.96359589980698\r
2017-05-16,96.98853106951933\r
2017-05-26,93.15245854093223\r
2017-06-18,95.40035061051479\r
2017-07-05,91.37190818258311\r
2017-07-18,88.07602498254296\r
2017-08-02,83.34298758603643\r
2017-08-07,87.64078382232083\r
2017-08-14,92.42720402635346\r
2017-08-22,86.502995659714\r
2017-09-03,74.33968304909567\r
2017-09-21,84.40811659256481\r
2017-10-08,83.50236031967833\r
2017-10-11,79.97643082016579\r
2017-10-13,87.64078382232083\r
2017-10-16,86.5570209718909\r
2017-10-23,83.82152581318917\r
2017-10-26,83.44922051675164\r
2017-10-31,82.60110011453773\r
2017-11-07,82.28408246526074\r
2017-11-17,79.3523137477874\r
2017-11-20,83.66187306920496\r
2017-11-22,82.38969272089281\r
2017-11-30,79.19663589805664\r
2017-12-05,80.7597382722997\r
2017-12-12,86.2870495521516\r
2017-12-15,78.26552241991726\r
2017-12-25,91.8155639755055\r
2018-01-24,99.9699701476649\r
2018-01-29,99.5085858511929\r
2018-02-15,96.87468975663009\r
2018-02-25,95.9095219380621\r
2018-03-02,89.16846448622397\r
2018-03-15,100.0\r
2018-03-22,96.70404308734149\r
2018-03-30,89.77194519899004\r
2018-04-19,93.76817113854902\r
2018-04-21,96.24966186773112\r
2018-05-06,89.93685570293204\r
2018-05-11,97.27340334296109\r
2018-05-24,92.09335064979382\r
2018-06-20,96.30640569403211\r
2018-06-23,96.64719161382203\r
2018-06-25,91.42731110580746\r
2018-07-08,92.09335064979382\r
2018-07-13,95.00519039255482\r
2018-07-23,91.03981502215296\r
2018-08-02,95.1744524034877\r
2018-08-04,80.70740855189051\r
2018-08-12,95.85288579460031\r
2018-08-19,88.78540620602536\r
2018-08-22,87.098127156485\r
2018-08-27,85.69447801322252\r
2018-09-01,80.28933245147307\r
2018-09-03,79.50813218696544\r
2018-09-08,82.65399089211078\r
2018-09-11,76.77605475239884\r
2018-09-23,75.50260231600592\r
2018-09-26,76.62272334087056\r
2018-09-28,77.64759470503101\r
2018-10-03,76.82719654892304\r
2018-10-11,79.3523137477874\r
2018-11-10,64.81497987657332\r
2018-11-15,67.82650131466664\r
2018-11-17,77.64759470503101\r
2018-12-07,77.75042621344713\r
2018-12-20,81.02162084375871\r
2019-02-15,85.4794631497141\r
2019-02-18,79.61208924074377\r
2019-02-20,91.03981502215296\r
2019-02-23,80.65509443133344\r
2019-02-25,86.88149858156157\r
2019-02-28,87.42353514771752\r
2019-03-07,96.47672945214538\r
2019-03-22,87.42353514771752\r
2019-03-27,87.04394675360454\r
2019-03-30,74.33968304909567\r
2019-04-09,84.9965881801323\r
2019-05-01,83.44922051675164\r
2019-05-06,90.81872856931248\r
2019-05-14,70.65452733834876\r
2019-05-31,83.50236031967833\r
2019-06-08,88.67610030039799\r
2019-06-13,89.38769541265525\r
2019-06-23,44.23430650406189\r
2019-06-28,95.11801633725766\r
2019-07-05,89.38769541265525\r
2019-07-10,91.48272947364376\r
2019-07-15,91.64907723732118\r
2019-08-09,78.88570205553242\r
2019-08-14,82.49536527278615\r
2019-08-17,51.5557114527471\r
2019-08-22,67.48878315687492\r
2019-08-24,83.768292678243\r
2019-09-11,59.20788946693949\r
2019-09-13,81.54655551008418\r
2019-09-16,69.38022206208458\r
2019-10-08,76.31648349438666\r
2019-10-11,58.21352400096031\r
2019-10-13,80.7597382722997\r
2019-12-05,75.85818150594086\r
2019-12-10,88.62147057095345\r
2019-12-15,59.66243315878897\r
2019-12-25,86.66511813315022\r
2019-12-30,92.37152321471018\r
2020-01-09,93.37613818218195\r
2020-01-11,88.89477403553946\r
2020-01-19,77.03192034279304\r
2020-02-15,88.18499019731385\r
2020-02-18,91.8155639755055\r
2020-02-20,84.94301307131398\r
2020-02-23,88.62147057095345\r
2020-03-11,96.70404308734149\r
2020-03-21,87.69513473562169\r
2020-03-26,88.23949603918011\r
2020-04-08,51.68351362690851\r
2020-04-10,91.98218966797128\r
2020-04-13,92.26020788784476\r
2020-04-30,91.64907723732118\r
2020-05-03,33.594925646295664\r
2020-05-18,31.120955062361837\r
2020-05-20,91.42731110580746\r
2020-05-28,90.43242224201235\r
2020-05-30,95.40035061051479\r
2020-06-14,87.3692617275727\r
2020-06-24,84.83590946244513\r
2020-07-19,81.12648304295227\r
2020-07-22,89.77194519899004\r
2020-07-27,75.09716712423057\r
2020-08-06,44.751536920996685\r
2020-08-31,43.75931856746193\r
2020-09-02,60.25572918626464\r
2020-09-12,51.258072404541444\r
2020-09-25,49.48889847751363\r
2020-09-30,34.97125148452929\r
2020-10-30,57.27158713271769\r
2020-11-11,73.78644009525163\r
2020-11-14,76.26549836005088\r
2020-11-21,75.9599166709298\r
2020-11-29,17.32326292128482\r
2020-12-26,84.08792476050704\r
2021-01-03,50.36991313544994\r
2021-01-18,98.35942112692516\r
2021-02-17,99.45098183694076\r
2021-02-19,90.43242224201235\r
2021-02-24,91.87109043462762\r
2021-02-27,93.5440598100804\r
2021-03-21,93.48807051683767\r
2021-03-29,97.6728699630632\r
2021-03-31,93.93641647747062\r
2021-04-08,97.72999808078625\r
2021-04-15,96.1929334225099\r
2021-04-23,100.0\r
2021-05-03,95.56993588451542\r
2021-05-20,89.93685570293204\r
2021-05-28,98.47406131542903\r
2021-05-30,95.40035061051479\r
2021-06-07,92.14895429451566\r
2021-06-14,98.9332361290917\r
2021-07-22,88.18499019731385\r
2021-08-11,45.271531384732\r
2021-08-26,80.13281139624966\r
2021-08-28,68.9902748724428\r
2021-08-31,79.92433518286084\r
2021-09-05,82.54822490782965\r
2021-09-12,81.07404414626399\r
2021-09-17,73.5857321518429\r
2021-09-25,72.93516822213138\r
2021-09-30,73.9371360361771\r
2021-10-07,78.00777878577749\r
2021-10-20,71.29567792363599\r
2021-10-27,66.62392646319388\r
2021-11-09,61.82018091171608\r
2021-11-11,75.85818150594086\r
2021-11-19,75.09716712423057\r
2021-12-14,97.04547478380088\r
2021-12-16,87.64078382232083\r
2021-12-19,98.30212406385161\r
2022-01-13,100.0\r
2022-01-15,86.23310181443468\r
2022-01-23,100.0\r
2022-01-25,84.7288680038404\r
2022-02-09,87.47782406803621\r
2022-03-09,92.81740173821763\r
2022-03-19,100.0\r
2022-03-26,83.60868659669876\r
2022-04-05,95.06159566670249\r
2022-05-10,96.70404308734149\r
2022-05-15,90.6530759823519\r
2022-05-28,92.03776244069657\r
2022-05-30,93.20835532088384\r
2022-06-17,89.60717390038214\r
2022-07-02,91.20579208809144\r
2022-07-12,90.873977005077\r
2022-07-14,86.39499157614928\r
2022-07-17,85.15740671469729\r
2022-07-24,81.49399188901373\r
2022-08-01,78.1623780454687\r
2022-08-03,77.13437619269622\r
2022-08-06,71.79068269331341\r
2022-09-05,55.320946165603445\r
2022-09-10,53.965318335657784\r
2022-09-12,58.66454809906819\r
2022-09-20,42.387421046638885\r
2022-09-22,42.23191306654279\r
2022-10-02,39.44015228137669\r
2022-10-05,35.65096600702015\r
2022-10-15,36.48182242675549\r
2022-10-17,39.10204931064911\r
2022-10-22,38.28121510980026\r
2022-11-04,34.40353087940239\r
2022-11-06,37.2481118567959\r
2022-11-11,37.54195764401868\r
2022-11-16,38.84000614866579\r
2022-12-04,67.72993130439268\r
2022-12-14,70.50694785250295\r
2022-12-21,74.39007209820659\r
2022-12-24,77.03192034279304\r
2023-01-03,71.39455285961722\r
2023-02-02,98.35942112692516\r
2023-02-04,99.68148993147436\r
2023-02-09,86.2870495521516\r
2023-02-12,90.04687336507227\r
2023-02-17,98.9332361290917\r
2023-02-24,90.26709424489495\r
2023-04-05,94.16095934821384\r
2023-04-08,99.22071919480473\r
2023-04-18,92.98486073290644\r
2023-04-20,91.03981502215296\r
2023-05-20,97.15940832442031\r
2023-05-28,91.76005295574782\r
2023-06-24,96.93160272688779\r
2023-07-14,86.34101280631577\r
2023-07-17,68.11659097013519\r
`;export{n as default};
