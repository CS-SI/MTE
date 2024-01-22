const r=`date,value\r
2017-01-26,57.67264480713299\r
2017-02-15,55.060476460882\r
2017-02-22,55.060476460882\r
2017-02-25,56.871853844579114\r
2017-03-17,51.51732303368164\r
2017-03-27,51.51732303368164\r
2017-04-06,63.77903627468202\r
2017-05-06,62.58321381129927\r
2017-05-13,62.58321381129927\r
2017-05-16,62.58321381129927\r
2017-05-26,45.78060140294251\r
2017-06-05,27.817483348605425\r
2017-06-12,27.817483348605425\r
2017-07-05,59.17322202545125\r
2017-07-07,59.17322202545125\r
2017-08-14,40.35128476250796\r
2017-08-17,40.35128476250796\r
2017-08-19,40.35128476250796\r
2017-08-21,40.35128476250796\r
2017-08-22,40.35128476250796\r
2017-08-24,40.35128476250796\r
2017-08-29,13.983074155594705\r
2017-09-03,13.983074155594705\r
2017-09-05,13.983074155594705\r
2017-09-08,16.109460186834525\r
2017-09-13,24.759704913188376\r
2017-09-15,24.759704913188376\r
2017-10-08,10.833799266380593\r
2017-10-10,10.833799266380593\r
2017-10-11,10.833799266380593\r
2017-10-13,12.971047085944004\r
2017-10-15,12.971047085944004\r
2017-10-16,12.971047085944004\r
2017-10-18,12.971047085944004\r
2017-10-20,11.434604890510712\r
2017-10-23,11.434604890510712\r
2017-11-07,11.712528574268104\r
2017-11-14,11.712528574268104\r
2017-11-15,11.712528574268104\r
2017-11-17,12.050008246286502\r
2017-11-19,11.214437139872814\r
2017-11-22,11.76847461278008\r
2017-11-24,11.76847461278008\r
2017-11-25,11.76847461278008\r
2017-11-27,11.105078249819766\r
2017-11-30,11.76847461278008\r
2017-12-12,11.37938184960649\r
2017-12-14,11.37938184960649\r
2017-12-15,11.37938184960649\r
2017-12-19,11.37938184960649\r
2018-02-15,69.1616616888539\r
2018-02-25,75.12780924440332\r
2018-02-27,71.79984995142867\r
2018-03-02,84.01596650031598\r
2018-03-07,72.0534291441035\r
2018-03-09,83.47276256299585\r
2018-03-14,31.908114116219938\r
2018-03-15,31.908114116219938\r
2018-03-17,33.41737206747457\r
2018-04-21,92.9227813141141\r
2018-04-23,92.9227813141141\r
2018-04-24,92.9227813141141\r
2018-04-26,92.9227813141141\r
2018-05-11,90.65814034944601\r
2018-05-19,90.65814034944601\r
2018-05-21,90.93984084317455\r
2018-05-23,83.7441657359185\r
2018-06-20,90.79894128685878\r
2018-06-22,90.79894128685878\r
2018-06-23,90.79894128685878\r
2018-06-25,98.110233010893\r
2018-06-28,98.110233010893\r
2018-07-02,98.54825574912621\r
2018-07-03,98.54825574912621\r
2018-07-07,85.51797206577596\r
2018-07-08,85.51797206577596\r
2018-07-10,85.9296939198244\r
2018-07-25,82.25637185226824\r
2018-07-27,82.25637185226824\r
2018-07-30,82.25637185226824\r
2018-08-01,82.25637185226824\r
2018-08-02,82.25637185226824\r
2018-08-04,84.15201594015048\r
2018-08-06,74.74034265450076\r
2018-08-11,74.74034265450076\r
2018-08-12,74.74034265450076\r
2018-08-19,84.6972070523573\r
2018-08-21,84.6972070523573\r
2018-08-22,84.6972070523573\r
2018-08-26,84.6972070523573\r
2018-08-27,84.6972070523573\r
2018-09-03,72.43455435760059\r
2018-09-05,72.43455435760059\r
2018-09-08,88.14060435424113\r
2018-09-10,88.14060435424113\r
2018-09-11,88.14060435424113\r
2018-09-16,81.31586559621324\r
2018-09-18,81.31586559621324\r
2018-09-23,75.25716570328136\r
2018-09-25,75.25716570328136\r
2018-09-26,75.25716570328136\r
2018-09-28,95.50060910456725\r
2018-09-30,95.50060910456725\r
2018-10-03,74.86939770317602\r
2018-10-05,96.51168921721055\r
2018-10-06,96.51168921721055\r
2018-10-23,65.71357430520163\r
2018-10-25,65.71357430520163\r
2018-11-17,69.53581537907465\r
2018-11-22,69.53581537907465\r
2018-11-24,69.53581537907465\r
2018-11-27,75.51617991352144\r
2018-11-29,74.99855323875899\r
2018-12-05,74.99855323875899\r
2019-01-26,1.1712413128327905\r
2019-01-28,1.1712413128327905\r
2019-02-03,1.1712413128327905\r
2019-02-15,79.05212519186689\r
2019-02-17,79.05212519186689\r
2019-02-18,79.05212519186689\r
2019-02-20,86.75581423759449\r
2019-02-22,86.75581423759449\r
2019-02-23,86.75581423759449\r
2019-02-25,83.7441657359185\r
2019-02-27,83.7441657359185\r
2019-03-07,91.08083900351969\r
2019-03-12,87.30854245796415\r
2019-03-22,84.01596650031598\r
2019-03-24,84.01596650031598\r
2019-03-25,84.01596650031598\r
2019-03-27,86.89384774570073\r
2019-03-29,86.89384774570073\r
2019-03-30,86.89384774570073\r
2019-04-01,86.61787978632861\r
2019-04-08,99.28025018561787\r
2019-04-09,99.28025018561787\r
2019-04-13,98.98715901469097\r
2019-05-01,85.9296939198244\r
2019-05-06,89.81540655674144\r
2019-05-11,89.81540655674144\r
2019-05-13,89.81540655674144\r
2019-05-14,89.81540655674144\r
2019-05-16,88.557970716588\r
2019-05-23,93.49287980495346\r
2019-05-31,93.49287980495346\r
2019-07-05,91.22193575303532\r
2019-07-08,91.22193575303532\r
2019-07-10,97.09160637380089\r
2019-07-12,97.09160637380089\r
2019-07-13,97.09160637380089\r
2019-07-15,91.22193575303532\r
2019-07-17,91.22193575303532\r
2019-07-22,100.0\r
2019-07-23,100.0\r
2019-07-25,93.63565031126001\r
2019-07-28,96.07778067047903\r
2019-08-02,91.22193575303532\r
2019-08-04,91.78730834614638\r
2019-08-09,85.10714297052132\r
2019-08-14,80.78062612066893\r
2019-08-16,80.78062612066893\r
2019-08-17,80.78062612066893\r
2019-08-21,88.69729057540769\r
2019-08-22,88.69729057540769\r
2019-08-24,78.52367563442138\r
2019-08-26,80.64706557880271\r
2019-08-29,80.64706557880271\r
2019-08-31,80.38024379983297\r
2019-09-03,82.39112830132471\r
2019-09-06,82.39112830132471\r
2019-09-08,82.39112830132471\r
2019-09-11,78.52367563442138\r
2019-09-13,81.44992471204824\r
2019-09-15,81.44992471204824\r
2019-09-16,81.44992471204824\r
2019-09-20,78.39181325966054\r
2019-09-21,78.39181325966054\r
2019-10-08,66.56813163995325\r
2019-10-11,66.56813163995325\r
2019-10-13,81.98715768403585\r
2019-10-15,81.98715768403585\r
2019-10-25,76.29563167755428\r
2019-11-27,58.24773086582427\r
2019-12-05,58.24773086582427\r
2019-12-10,58.24773086582427\r
2020-01-06,89.81540655674144\r
2020-01-09,89.81540655674144\r
2020-01-11,90.65814034944601\r
2020-01-14,90.65814034944601\r
2020-01-16,84.28816473088565\r
2020-01-19,84.28816473088565\r
2020-01-28,74.3537805986671\r
2020-02-20,76.55625153115325\r
2020-02-22,76.55625153115325\r
2020-03-11,87.30854245796415\r
2020-03-13,87.30854245796415\r
2020-03-18,87.30854245796415\r
2020-03-21,88.97622680938638\r
2020-03-24,88.97622680938638\r
2020-03-26,86.06713285657239\r
2020-03-28,89.81540655674144\r
2020-03-29,89.81540655674144\r
2020-03-31,89.81540655674144\r
2020-04-03,89.81540655674144\r
2020-04-05,77.7340022913688\r
2020-04-08,83.47276256299585\r
2020-04-10,80.1138212011272\r
2020-04-12,95.35656151657066\r
2020-04-15,88.14060435424113\r
2020-04-25,92.63832239421967\r
2020-04-28,94.20771543300572\r
2020-05-05,92.78050264815899\r
2020-05-07,92.78050264815899\r
2020-05-08,92.78050264815899\r
2020-05-17,83.88001642702045\r
2020-05-18,83.88001642702045\r
2020-05-20,95.93334062567766\r
2020-05-22,90.93984084317455\r
2020-05-25,94.20771543300572\r
2020-05-27,94.20771543300572\r
2020-05-28,94.20771543300572\r
2020-05-30,90.23632939958648\r
2020-06-12,88.557970716588\r
2020-06-14,88.557970716588\r
2020-07-14,89.95561546755174\r
2020-07-19,97.81870722233951\r
2020-07-21,97.81870722233951\r
2020-07-22,97.81870722233951\r
2020-07-24,86.75581423759449\r
2020-07-27,86.75581423759449\r
2020-07-29,86.75581423759449\r
2020-07-31,94.49433764800482\r
2020-08-03,94.49433764800482\r
2020-08-05,83.60841444268115\r
2020-08-06,83.60841444268115\r
2020-08-08,87.1702118711796\r
2020-08-10,76.16547219636615\r
2020-08-15,76.16547219636615\r
2020-08-20,76.16547219636615\r
2020-08-21,76.16547219636615\r
2020-08-23,76.16547219636615\r
2020-09-02,54.61177029191919\r
2020-09-04,54.61177029191919\r
2020-09-05,54.61177029191919\r
2020-09-07,54.61177029191919\r
2020-09-10,54.61177029191919\r
2020-09-12,54.61177029191919\r
2020-09-14,54.61177029191919\r
2020-09-17,54.61177029191919\r
2020-11-11,43.0272871233062\r
2020-11-14,43.0272871233062\r
2020-11-16,43.0272871233062\r
2020-11-18,43.0272871233062\r
2020-11-19,43.0272871233062\r
2020-11-21,44.44531065875527\r
2020-11-23,44.44531065875527\r
2020-11-26,41.33335207500647\r
2020-11-29,42.62595245884276\r
2020-12-26,73.83977236623895\r
2021-02-19,88.27962759086606\r
2021-02-24,96.36695498057934\r
2021-02-27,96.36695498057934\r
2021-03-01,86.75581423759449\r
2021-03-04,95.35656151657066\r
2021-03-09,84.01596650031598\r
2021-03-21,61.989135941791275\r
2021-03-23,61.989135941791275\r
2021-03-24,61.989135941791275\r
2021-03-26,61.989135941791275\r
2021-03-28,61.989135941791275\r
2021-03-29,61.989135941791275\r
2021-03-31,100.0\r
2021-04-02,95.93334062567766\r
2021-04-03,95.93334062567766\r
2021-04-05,98.25614273039861\r
2021-04-07,98.25614273039861\r
2021-04-15,98.25614273039861\r
2021-04-17,95.50060910456725\r
2021-04-20,95.50060910456725\r
2021-04-22,95.50060910456725\r
2021-04-23,95.50060910456725\r
2021-05-20,90.93984084317455\r
2021-05-27,90.93984084317455\r
2021-05-28,90.93984084317455\r
2021-05-30,90.93984084317455\r
2021-06-14,92.78050264815899\r
2021-06-16,92.78050264815899\r
2021-06-19,92.78050264815899\r
2021-06-21,92.78050264815899\r
2021-07-19,90.79894128685878\r
2021-07-21,90.79894128685878\r
2021-07-22,90.79894128685878\r
2021-07-29,90.79894128685878\r
2021-08-28,73.5833719162484\r
2021-08-30,73.5833719162484\r
2021-08-31,73.5833719162484\r
2021-09-05,73.5833719162484\r
2021-09-07,73.5833719162484\r
2021-09-12,74.86939770317602\r
2021-09-17,74.86939770317602\r
2021-09-22,74.86939770317602\r
2021-10-07,72.56179773961352\r
2021-10-10,72.56179773961352\r
2021-10-12,79.3169497773604\r
2021-10-14,79.3169497773604\r
2021-10-17,79.3169497773604\r
2021-10-19,76.94793329024724\r
2021-10-20,76.94793329024724\r
2021-10-27,64.74304392742806\r
2021-12-16,84.6972070523573\r
2021-12-18,84.6972070523573\r
2021-12-19,84.6972070523573\r
2021-12-21,88.69729057540769\r
2021-12-23,88.69729057540769\r
2022-01-15,84.97039840187354\r
2022-01-22,84.97039840187354\r
2022-01-23,84.97039840187354\r
2022-01-25,86.89384774570073\r
2022-01-27,82.25637185226824\r
2022-02-01,82.25637185226824\r
2022-02-09,86.75581423759449\r
2022-03-21,91.50442496021721\r
2022-03-23,91.50442496021721\r
2022-03-24,91.50442496021721\r
2022-03-26,91.50442496021721\r
2022-04-05,100.0\r
2022-04-10,100.0\r
2022-04-15,94.92500771145195\r
2022-04-17,95.78899867351043\r
2022-04-25,93.9214862819698\r
2022-06-19,100.0\r
2022-06-22,100.0\r
2022-06-24,100.0\r
2022-06-27,100.0\r
2022-06-29,100.0\r
2022-07-14,84.97039840187354\r
2022-07-16,84.97039840187354\r
2022-07-17,84.97039840187354\r
2022-07-19,84.97039840187354\r
2022-07-21,84.97039840187354\r
2022-07-22,84.97039840187354\r
2022-07-24,88.83670927804057\r
2022-07-26,81.31586559621324\r
2022-07-27,81.31586559621324\r
2022-07-31,81.31586559621324\r
2022-08-01,81.31586559621324\r
2022-08-03,84.15201594015048\r
2022-08-05,77.7340022913688\r
2022-08-06,77.7340022913688\r
2022-08-08,77.7340022913688\r
2022-08-10,77.7340022913688\r
2022-08-11,77.7340022913688\r
2022-08-13,77.7340022913688\r
2022-08-23,34.319853016109725\r
2022-08-28,34.95804164595368\r
2022-08-30,34.95804164595368\r
2022-09-04,32.437197814211444\r
2022-09-05,32.437197814211444\r
2022-09-22,20.333058662205595\r
2022-10-02,27.90011662972668\r
2022-10-04,27.90011662972668\r
2022-10-05,27.90011662972668\r
2022-10-07,27.982860525056815\r
2022-10-09,27.982860525056815\r
2022-10-12,26.34903600742894\r
2022-10-15,25.390081094312077\r
2022-10-22,18.370746660699915\r
2022-11-06,19.551436287136337\r
2022-11-08,19.551436287136337\r
2022-11-11,19.62192112809575\r
2022-11-13,19.62192112809575\r
2022-11-16,17.759141623632573\r
2022-11-24,15.91638538532553\r
2022-12-21,22.309999964737855\r
2022-12-28,22.309999964737855\r
2023-01-10,23.06315336474902\r
2023-01-12,23.06315336474902\r
2023-01-18,23.06315336474902\r
2023-02-04,38.70627487902985\r
2023-02-06,38.70627487902985\r
2023-02-09,42.42592190894652\r
2023-02-11,42.42592190894652\r
2023-02-12,42.42592190894652\r
2023-02-14,42.42592190894652\r
2023-02-16,37.753078849752534\r
2023-02-17,37.753078849752534\r
2023-02-19,37.753078849752534\r
2023-02-24,42.62595245884276\r
2023-02-26,42.62595245884276\r
2023-03-01,42.62595245884276\r
2023-03-03,42.62595245884276\r
2023-03-04,42.62595245884276\r
2023-03-16,40.84098605362148\r
2023-04-05,41.234665841668914\r
2023-04-07,41.234665841668914\r
2023-04-08,41.234665841668914\r
2023-04-15,41.234665841668914\r
2023-06-24,96.22231879355986\r
2023-07-14,93.9214862819698\r
2023-07-16,93.9214862819698\r
2023-07-17,93.9214862819698\r
2023-07-19,93.9214862819698\r
2023-07-22,93.9214862819698\r
2023-07-29,86.34230811566708\r
2023-07-31,86.34230811566708\r
2023-08-03,86.34230811566708\r
2023-08-05,86.34230811566708\r
2023-08-06,86.34230811566708\r
2023-08-08,92.63832239421967\r
2023-08-10,92.21237225139251\r
2023-08-11,92.21237225139251\r
2023-08-13,92.21237225139251\r
2023-08-15,92.21237225139251\r
2023-08-18,92.9227813141141\r
2023-08-20,86.2046709269855\r
2023-08-21,86.2046709269855\r
2023-08-23,86.48004440723643\r
2023-08-31,81.58408349469417\r
2023-09-07,75.12780924440332\r
2023-09-10,75.12780924440332\r
2023-09-14,75.12780924440332\r
2023-09-27,65.22749436744287\r
2023-09-29,65.22749436744287\r
2023-09-30,65.22749436744287\r
2023-10-02,65.22749436744287\r
2023-10-04,65.22749436744287\r
2023-10-05,65.22749436744287\r
2023-10-07,63.89918019505726\r
2023-10-10,61.75222110608147\r
2023-10-12,60.105293238722055\r
2023-10-15,60.57379323776687\r
2023-11-26,64.26022416724076\r
2023-12-03,64.26022416724076\r
2023-12-16,73.71152182155636\r
`;export{r as default};