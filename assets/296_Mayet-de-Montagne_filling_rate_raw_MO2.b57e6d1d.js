const n=`date,value\r
2017-02-25,68.36002957598019\r
2017-03-17,57.957728024702874\r
2017-03-27,76.60822122418799\r
2017-04-03,80.334632663717\r
2017-04-06,80.334632663717\r
2017-04-23,81.5925264159346\r
2017-05-03,85.13791466506319\r
2017-05-16,94.69440645862373\r
2017-05-23,94.69440645862373\r
2017-05-26,92.88340280078745\r
2017-06-02,79.61936458794784\r
2017-06-05,73.38458402871784\r
2017-06-15,72.43696380522054\r
2017-06-22,71.66532194571079\r
2017-06-25,75.46925170537538\r
2017-07-05,73.38458402871784\r
2017-07-07,92.03046762368103\r
2017-07-12,81.41234687014153\r
2017-07-17,89.9588442517464\r
2017-08-14,94.98163735103584\r
2017-08-19,96.80886964559757\r
2017-08-21,89.9588442517464\r
2017-08-24,89.9588442517464\r
2017-08-26,79.61936458794784\r
2017-08-29,79.61936458794784\r
2017-09-03,76.60822122418799\r
2017-09-23,72.26520103070237\r
2017-10-03,72.1793810730715\r
2017-10-05,67.68978601643603\r
2017-10-10,67.68978601643603\r
2017-10-13,82.22441405740989\r
2017-10-15,74.16358517843965\r
2017-10-18,76.87203280989326\r
2017-10-25,81.23232735411369\r
2017-10-28,80.87276869021453\r
2017-10-30,72.00786406492794\r
2017-11-04,72.00786406492794\r
2017-11-07,72.00786406492794\r
2017-11-17,61.05401038151824\r
2017-11-22,72.9532343154014\r
2017-11-27,72.9532343154014\r
2017-11-29,67.43912893260593\r
2017-12-02,67.43912893260593\r
2017-12-07,67.35565959145292\r
2017-12-12,72.43696380522054\r
2018-01-23,68.36002957598019\r
2018-01-28,76.34477403838754\r
2018-01-31,71.66532194571079\r
2018-02-27,69.45482504610126\r
2018-03-14,60.01472891522894\r
2018-03-19,67.02219759721316\r
2018-03-24,67.02219759721316\r
2018-04-06,49.725093350951944\r
2018-04-13,49.725093350951944\r
2018-04-16,60.813540264699114\r
2018-04-21,75.38192266569\r
2018-04-26,75.38192266569\r
2018-05-01,73.99018833516315\r
2018-06-20,70.04722108031226\r
2018-06-22,81.23232735411369\r
2018-06-25,81.23232735411369\r
2018-06-27,78.90666822963561\r
2018-07-02,81.50241664366789\r
2018-07-07,81.95336531869027\r
2018-07-10,84.58853170433589\r
2018-07-12,84.67999631169928\r
2018-07-15,84.67999631169928\r
2018-07-17,84.67999631169928\r
2018-07-20,80.693229682081\r
2018-07-22,80.693229682081\r
2018-07-25,83.49405601718813\r
2018-07-27,94.79011126386982\r
2018-07-30,90.89814257771566\r
2018-08-01,86.88703728880415\r
2018-08-04,85.04625164691873\r
2018-08-06,87.81335906247504\r
2018-08-11,82.13402453689463\r
2018-08-16,96.03780429199281\r
2018-08-19,90.89814257771566\r
2018-08-21,91.27495854460432\r
2018-08-26,91.27495854460432\r
2018-08-29,92.97836839873857\r
2018-09-03,88.93014743551262\r
2018-09-08,93.07337297246217\r
2018-09-10,95.65320085311136\r
2018-09-13,86.33313963201675\r
2018-09-18,88.1849918894842\r
2018-09-20,83.676070935995\r
2018-09-25,79.5301368093266\r
2018-09-28,80.60352028959663\r
2018-09-30,85.22961734012793\r
2018-10-05,76.87203280989326\r
2018-10-10,85.59682444179458\r
2018-10-13,88.1849918894842\r
2018-10-15,88.1849918894842\r
2018-10-18,87.81335906247504\r
2018-10-20,75.64403160047978\r
2018-10-23,75.64403160047978\r
2018-11-14,71.4942969884487\r
2018-11-19,71.4942969884487\r
2018-11-22,83.49405601718813\r
2018-11-24,71.32343620220199\r
2018-12-19,56.317403364870245\r
2018-12-27,64.95315427982881\r
2019-01-03,62.829081617987285\r
2019-01-11,62.829081617987285\r
2019-01-16,63.23535269522823\r
2019-02-05,59.140943324811545\r
2019-02-15,64.37849955581889\r
2019-02-17,59.140943324811545\r
2019-02-20,68.36002957598019\r
2019-02-22,67.27223177720893\r
2019-02-25,65.36487688712718\r
2019-02-27,68.78027782854974\r
2019-03-04,66.68940068256447\r
2019-03-07,74.77175719885679\r
2019-03-22,59.299430442949856\r
2019-03-24,66.44023984683038\r
2019-03-27,65.69500694328477\r
2019-03-29,59.45808788276782\r
2019-04-08,65.94304270018367\r
2019-04-11,58.82448041243883\r
2019-04-13,57.33061250252738\r
2019-05-01,63.724265378188115\r
2019-05-13,83.22133222988023\r
2019-05-16,78.81776223507335\r
2019-05-23,78.99561447836216\r
2019-05-31,80.51385098318913\r
2019-06-02,88.09202458687714\r
2019-06-05,85.22961734012793\r
2019-06-17,84.3143761606918\r
2019-06-25,84.3143761606918\r
2019-06-27,89.49066570013146\r
2019-06-30,85.04625164691873\r
2019-07-02,85.04625164691873\r
2019-07-05,87.5350482851454\r
2019-07-07,90.89814257771566\r
2019-07-10,90.52195300459938\r
2019-07-12,91.5579812841718\r
2019-07-15,92.88340280078745\r
2019-07-17,94.98163735103584\r
2019-07-20,94.8858548972433\r
2019-07-22,93.35862047002469\r
2019-07-25,95.55714687170116\r
2019-08-04,97.58240972370427\r
2019-08-09,100.0\r
2019-08-14,100.0\r
2019-08-21,97.19533058656351\r
2019-08-24,100.0\r
2019-08-26,100.0\r
2019-08-29,98.26128429622543\r
2019-08-31,92.88340280078745\r
2019-09-03,98.16418649102\r
2019-09-10,95.74929359349558\r
2019-09-13,98.0671272477721\r
2019-09-15,98.26128429622543\r
2019-09-18,96.51942992255174\r
2019-09-20,95.46113165692418\r
2019-10-03,94.8858548972433\r
2019-10-08,95.07745861754529\r
2019-10-13,95.07745861754529\r
2019-12-04,34.2459336361641\r
2019-12-29,49.79898739458245\r
2020-01-06,62.74795365675888\r
2020-01-16,66.52325183355366\r
2020-01-18,66.52325183355366\r
2020-01-21,64.05104694849862\r
2020-02-05,62.91025167819549\r
2020-02-07,59.299430442949856\r
2020-02-10,59.299430442949856\r
2020-02-12,63.479619974663315\r
2020-02-15,70.64163631501351\r
2020-02-20,59.45808788276782\r
2020-02-22,59.77591336972032\r
2020-03-13,58.82448041243883\r
2020-03-18,73.90355105888773\r
2020-03-21,69.53932929878093\r
2020-03-23,74.25034472667804\r
2020-03-26,74.25034472667804\r
2020-03-28,71.75089596436537\r
2020-03-31,73.38458402871784\r
2020-04-02,72.69491497182408\r
2020-04-05,71.75089596436537\r
2020-04-07,71.4942969884487\r
2020-04-10,70.98220745198864\r
2020-04-12,70.98220745198864\r
2020-04-15,74.33714501348928\r
2020-04-17,69.20155998972686\r
2020-04-22,72.9532343154014\r
2020-04-25,90.80403644008429\r
2020-04-27,85.78066571621615\r
2020-05-07,43.396540178502256\r
2020-05-17,78.90666822963561\r
2020-05-20,78.64007104415326\r
2020-05-25,83.94939173465616\r
2020-05-27,86.79462221783054\r
2020-05-30,87.34970495801\r
2020-06-01,87.34970495801\r
2020-07-04,90.24022220307187\r
2020-07-06,90.24022220307187\r
2020-07-09,99.03945406992933\r
2020-07-11,91.08647229381658\r
2020-07-14,92.97836839873857\r
2020-07-19,97.58240972370427\r
2020-07-21,99.42946306833394\r
2020-07-24,99.72237372518975\r
2020-07-26,100.0\r
2020-07-29,100.0\r
2020-07-31,99.91783972232138\r
2020-08-05,100.0\r
2020-08-08,100.0\r
2020-08-10,98.45559556252647\r
2020-08-15,88.83686529220505\r
2020-08-20,85.04625164691873\r
2020-08-25,85.32135966371784\r
2020-09-04,89.9588442517464\r
2020-09-07,93.54898020392729\r
2020-09-09,90.33409327535948\r
2020-09-12,88.74362247550724\r
2020-09-14,92.88340280078745\r
2020-09-17,89.67781936740475\r
2020-11-18,76.78405514099636\r
2020-11-21,76.69611794272075\r
2020-11-23,75.29463424357662\r
2020-11-28,73.8169545587105\r
2020-12-11,65.69500694328477\r
2020-12-13,65.69500694328477\r
2021-02-14,44.098213761218176\r
2021-02-21,66.44023984683038\r
2021-02-24,64.2965735311001\r
2021-02-26,70.81183964300742\r
2021-03-01,67.60619215519583\r
2021-03-06,76.69611794272075\r
2021-03-08,69.28594038169032\r
2021-03-23,74.85880172085767\r
2021-03-28,81.5925264159346\r
2021-03-31,72.52290660299018\r
2021-04-02,74.85880172085767\r
2021-04-05,69.37036207044468\r
2021-04-07,69.37036207044468\r
2021-04-12,70.81183964300742\r
2021-04-17,67.35565959145292\r
2021-04-22,67.35565959145292\r
2021-04-25,67.35565959145292\r
2021-04-27,81.95336531869027\r
2021-05-05,77.75403338220572\r
2021-05-27,69.20155998972686\r
2021-05-30,88.2779985757043\r
2021-06-01,88.2779985757043\r
2021-06-14,79.17362770264444\r
2021-06-16,95.65320085311136\r
2021-06-19,88.1849918894842\r
2021-06-26,86.70224665375414\r
2021-07-19,81.95336531869027\r
2021-07-21,85.32135966371784\r
2021-07-29,84.95462829409695\r
2021-08-10,83.7671380880001\r
2021-08-15,83.7671380880001\r
2021-08-20,84.22307043380246\r
2021-08-28,78.10796450128134\r
2021-09-02,84.67999631169928\r
2021-09-04,84.67999631169928\r
2021-09-07,87.16451946046749\r
2021-09-12,87.16451946046749\r
2021-09-17,83.85824502372189\r
2021-09-22,74.68475335940138\r
2021-09-24,78.46254097710518\r
2021-09-27,78.46254097710518\r
2021-10-02,78.46254097710518\r
2021-10-04,73.64388392427247\r
2021-10-12,73.55740980884437\r
2021-10-14,78.90666822963561\r
2021-10-17,73.12565162706052\r
2021-10-19,76.16934514750538\r
2021-10-22,69.79308962030996\r
2021-10-24,68.27610410412349\r
2021-10-27,71.92216703358714\r
2021-11-01,71.15273966424238\r
2021-12-23,55.15735066078242\r
2022-01-15,66.60630544886959\r
2022-01-25,75.03301277527378\r
2022-02-09,62.58582407404906\r
2022-02-11,67.27223177720893\r
2022-02-19,66.52325183355366\r
2022-02-26,70.47159754587042\r
2022-03-06,72.52290660299018\r
2022-03-08,69.28594038169032\r
2022-03-23,63.724265378188115\r
2022-03-26,66.52325183355366\r
2022-03-28,66.52325183355366\r
2022-04-17,74.51086776540063\r
2022-04-22,80.334632663717\r
2022-04-27,80.334632663717\r
2022-05-02,81.32231710405456\r
2022-05-07,80.60352028959663\r
2022-05-30,81.41234687014153\r
2022-06-04,81.41234687014153\r
2022-06-11,76.08169149944965\r
2022-06-16,82.49582216097127\r
2022-06-19,81.77286592193082\r
2022-06-21,84.49710680441514\r
2022-06-29,83.13050395917504\r
2022-07-01,80.87276869021453\r
2022-07-04,63.724265378188115\r
2022-07-06,74.94588691609634\r
2022-07-11,86.70224665375414\r
2022-07-14,81.77286592193082\r
2022-07-16,86.42535708568869\r
2022-07-19,92.50393032348053\r
2022-07-21,87.5350482851454\r
2022-07-24,87.44235689699235\r
2022-07-26,93.07337297246217\r
2022-07-31,87.90620816519163\r
2022-08-03,93.35862047002469\r
2022-08-08,95.94159532058019\r
2022-08-10,88.83686529220505\r
2022-08-13,93.54898020392729\r
2022-08-25,90.0525976832397\r
2022-08-28,90.0525976832397\r
2022-09-04,91.74685859354406\r
2022-09-12,89.02346889731378\r
2022-09-14,89.02346889731378\r
2022-09-19,83.94939173465616\r
2022-09-22,80.693229682081\r
2022-10-04,83.85824502372189\r
2022-10-09,87.44235689699235\r
2022-10-17,79.2626946603883\r
2022-10-19,79.2626946603883\r
2022-11-11,73.03942253596757\r
2022-11-13,82.58637134741961\r
2022-11-16,66.8557159642868\r
2022-12-11,74.33714501348928\r
2022-12-16,74.33714501348928\r
2023-02-11,73.12565162706052\r
2023-02-14,74.68475335940138\r
2023-02-16,73.8169545587105\r
2023-02-26,71.75089596436537\r
2023-04-05,68.69614542553238\r
2023-05-25,70.64163631501351\r
2023-05-27,76.34477403838754\r
2023-06-01,74.16358517843965\r
2023-06-04,74.16358517843965\r
2023-06-06,69.03292313577548\r
2023-06-19,99.72237372518975\r
2023-06-21,99.72237372518975\r
2023-06-24,88.55725485443931\r
2023-07-11,80.693229682081\r
2023-07-14,81.23232735411369\r
2023-07-19,77.48900890509543\r
`;export{n as default};
