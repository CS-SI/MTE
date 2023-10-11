const r=`date,value\r
2017-03-21,53.37231342871023\r
2017-04-20,66.53254045107059\r
2017-04-23,66.53093806859845\r
2017-04-30,66.53734769389189\r
2017-05-30,87.66000235757163\r
2017-06-02,87.66000235757163\r
2017-06-09,92.11031048803865\r
2017-06-19,100.0\r
2017-06-22,99.8761537114344\r
2017-07-04,98.83147225476088\r
2017-07-07,98.83147225476088\r
2017-07-12,98.83147225476088\r
2017-07-14,99.80417912739468\r
2017-07-17,99.29906597962825\r
2017-07-19,99.29906597962825\r
2017-07-22,99.29906597962825\r
2017-07-24,99.63884489019236\r
2017-08-18,95.36069420678395\r
2017-08-21,95.36069420678395\r
2017-08-23,94.83469540453692\r
2017-08-26,95.43380995363225\r
2017-09-02,92.04069721504172\r
2017-09-07,88.77112861701664\r
2017-09-10,88.77112861701664\r
2017-09-12,87.87733344911601\r
2017-09-17,87.23078310013074\r
2017-10-07,79.04642052394992\r
2018-04-25,36.804170657185594\r
2018-04-28,37.05898446125077\r
2018-05-05,32.861479192198736\r
2018-06-14,90.47346862501445\r
2018-06-19,90.1505791256328\r
2018-06-22,97.94411042890275\r
2018-06-27,97.10560891596923\r
2018-06-29,97.61548423038889\r
2018-07-04,99.74106112970654\r
2018-07-07,99.74106112970654\r
2018-07-09,99.5070371208804\r
2018-07-12,100.0\r
2018-07-14,99.93299085158944\r
2018-07-19,99.79344790712794\r
2018-07-22,99.60036725117301\r
2018-07-24,99.83574429543195\r
2018-07-27,100.0\r
2018-07-29,99.40555001614425\r
2018-08-03,99.06106482359898\r
2018-08-06,99.0541423878469\r
2018-08-08,99.05540099770371\r
2018-08-28,98.54117950057804\r
2018-08-31,98.54117950057804\r
2018-09-02,99.69120954432947\r
2018-09-05,99.69184051288647\r
2018-09-07,98.76106594749182\r
2018-09-10,99.49253635075806\r
2018-09-12,98.7151872510664\r
2018-09-17,96.28127548871714\r
2018-09-20,97.16553713758715\r
2018-09-22,97.16553713758715\r
2018-09-27,93.84660351441619\r
2018-10-02,92.24226878316064\r
2018-10-05,92.24226878316064\r
2019-03-21,53.66383545370842\r
2019-03-24,53.66383545370842\r
2019-03-26,54.36232176417863\r
2019-03-29,53.56854274370342\r
2019-03-31,53.89282258114076\r
2019-04-05,52.92677900023135\r
2019-04-13,53.04203203471748\r
2019-04-15,51.67641160283103\r
2019-04-18,52.18522849320615\r
2019-04-20,51.65475420305812\r
2019-04-30,52.71065476480422\r
2019-05-05,57.566740408404605\r
2019-05-10,63.13680953195355\r
2019-05-13,63.13680953195355\r
2019-05-15,62.468663115228416\r
2019-05-23,65.11536550425868\r
2019-05-30,71.23947271215253\r
2019-06-02,70.88986731997485\r
2019-06-04,73.63298116206762\r
2019-06-07,73.63298116206762\r
2019-06-12,73.63298116206762\r
2019-06-19,85.98158088282413\r
2019-06-24,90.73552157424916\r
2019-06-27,90.73552157424916\r
2019-06-29,89.93759962913903\r
2019-07-02,89.93759962913903\r
2019-07-04,92.12252557878803\r
2019-07-07,91.6856411698178\r
2019-07-12,94.22788880826562\r
2019-07-14,92.82724062503895\r
2019-07-17,93.60362846353145\r
2019-07-19,93.10128036803562\r
2019-07-22,94.53263475278571\r
2019-07-24,92.93203531109876\r
2019-07-29,93.87553174574205\r
2019-08-01,93.22522852848324\r
2019-08-03,93.70878327374771\r
2019-08-06,91.81246912217517\r
2019-08-08,92.73474313407888\r
2019-08-11,91.57899091942048\r
2019-08-16,92.90874339309383\r
2019-08-18,90.67240621423048\r
2019-08-21,90.62265493932131\r
2019-08-23,88.65927561643807\r
2019-09-02,83.75728245112836\r
2019-09-05,84.11524978235833\r
2019-09-07,81.4200212365243\r
2019-09-12,79.94825206493744\r
2019-09-15,79.94825206493744\r
2019-09-17,80.25672311696236\r
2019-09-20,78.67347609276602\r
2019-09-25,80.07734673630586\r
2019-09-27,79.44652258201478\r
2019-09-30,81.53092217102017\r
2019-10-02,80.90465713710458\r
2019-10-05,84.04701703764057\r
2019-10-07,80.77906438443704\r
2019-10-10,80.77906438443704\r
2020-03-20,58.35394651006377\r
2020-03-25,56.98123400716959\r
2020-03-28,56.98123400716959\r
2020-03-30,56.98123400716959\r
2020-04-04,55.29991306073696\r
2020-04-07,55.31773230323345\r
2020-04-09,45.00667861557197\r
2020-04-14,44.96758332193662\r
2020-04-22,49.9599347529563\r
2020-04-24,49.824730839244594\r
2020-04-29,59.88067366374262\r
2020-05-04,68.43495334777624\r
2020-05-07,68.43495334777624\r
2020-05-09,70.29547172637892\r
2020-05-14,76.60613787532401\r
2020-05-19,77.66258761617648\r
2020-05-24,88.82587356336437\r
2020-05-27,95.15757852171608\r
2020-05-29,95.04309503816066\r
2020-06-03,95.99968647067244\r
2020-06-06,95.99968647067244\r
2020-06-23,98.33906235218744\r
2020-06-26,98.33906235218744\r
2020-06-28,98.77552269881379\r
2020-07-01,98.77552269881379\r
2020-07-03,98.38110369595657\r
2020-07-06,98.7673513844176\r
2020-07-08,98.81449741459487\r
2020-07-11,99.70256723010212\r
2020-07-16,99.84963427221881\r
2020-07-18,98.38361386112689\r
2020-07-21,98.69759227345823\r
2020-07-23,98.18664617345131\r
2020-07-26,98.63287901223323\r
2020-07-28,98.4915759248195\r
2020-07-31,98.4915759248195\r
2020-08-02,98.00801059239183\r
2020-08-05,98.47148626560882\r
2020-08-07,97.85204922472927\r
2020-08-10,98.31208449498085\r
2020-08-12,98.03370079034643\r
2020-08-15,98.15404301890379\r
2020-08-20,96.67096199590063\r
2020-08-22,98.19479765914917\r
2020-08-25,96.88039020313472\r
2020-08-27,97.94035213051284\r
2020-09-01,95.42885222424667\r
2020-09-04,95.42885222424667\r
2020-09-06,96.76318712373678\r
2020-09-14,97.21174220500605\r
2020-09-16,95.21143632985759\r
2020-09-26,95.27459595589033\r
2020-09-29,95.27459595589033\r
2020-10-11,95.57328955196948\r
2021-03-30,63.37535734430908\r
2021-04-02,64.18740060309021\r
2021-04-04,64.18740060309021\r
2021-04-07,63.41410400104145\r
2021-04-09,63.65203349023986\r
2021-06-13,98.32463195617663\r
2021-06-16,97.67679324080086\r
2021-06-18,98.67057393116048\r
2021-07-23,100.0\r
2021-07-26,100.0\r
2021-07-28,100.0\r
2021-08-02,100.0\r
2021-08-05,99.63127503477199\r
2021-08-10,99.22726307127786\r
2021-08-12,99.49253635075806\r
2021-08-17,99.52216928758499\r
2021-08-20,99.52216928758499\r
2021-08-22,99.47929727761638\r
2021-08-25,99.1365952514092\r
2021-08-27,99.13848381599503\r
2021-08-30,97.54731222804674\r
2021-09-01,97.92156152987033\r
2021-09-06,97.73185974433049\r
2021-09-11,96.36525846138353\r
2021-09-21,94.19521747792898\r
2021-09-24,93.67372626538032\r
2021-09-29,93.67372626538032\r
2021-10-01,93.77768296239157\r
2022-04-14,76.44544176787798\r
2022-04-17,76.66275410505409\r
2022-04-19,76.66275410505409\r
2022-05-14,86.9037738692748\r
2022-05-17,86.9037738692748\r
2022-05-19,89.09318018099796\r
2022-05-22,89.09318018099796\r
2022-05-29,90.97297292482357\r
2022-06-01,89.95574319933823\r
2022-06-06,89.95574319933823\r
2022-07-03,83.73203103135317\r
2022-07-06,83.73203103135317\r
2022-07-08,83.82659316061306\r
2022-07-11,83.82659316061306\r
2022-07-13,83.05318482189286\r
2022-07-16,80.2809602532537\r
2022-07-18,79.96438420555243\r
2022-07-21,78.17049798529638\r
2022-07-26,77.18499951349722\r
2022-07-28,77.50041275277108\r
2022-08-02,72.81175230736774\r
2022-08-05,72.81175230736774\r
2022-08-07,74.73067393289476\r
2022-08-10,75.1862278564132\r
2022-08-12,70.84655906580812\r
2022-08-20,67.83568702539942\r
2022-08-22,69.27083665566147\r
2022-08-25,68.36796089581075\r
2022-08-27,70.557386495067\r
2022-09-01,67.52746376200133\r
2022-09-04,69.66448651319168\r
2022-09-06,69.6269305423847\r
2022-09-09,63.30207955293373\r
2022-09-11,64.18687431286553\r
2022-09-16,66.96951419692888\r
2022-09-19,66.99361675762795\r
2022-09-21,64.41176191243869\r
2022-09-26,66.91810734474079\r
2022-10-06,67.61078297183413\r
2023-03-20,60.033675912499504\r
2023-03-25,61.25470139220188\r
2023-03-28,61.25625014206687\r
2023-03-30,61.18605636190873\r
2023-04-04,63.97650084246445\r
2023-04-14,65.48320493423007\r
2023-04-17,65.71951644668867\r
2023-04-19,64.86990891453158\r
2023-04-22,65.73652314988686\r
2023-04-24,64.71299607135641\r
2023-05-24,79.24665453284115\r
2023-05-27,79.24665453284115\r
2023-06-03,82.928567324748\r
2023-06-23,99.32993520890217\r
2023-06-26,99.32993520890217\r
2023-06-28,99.8344816097491\r
2023-07-03,99.45156062106983\r
2023-07-06,99.45156062106983\r
2023-07-08,100.0\r
2023-07-11,100.0\r
2023-07-13,100.0\r
2023-07-16,100.0\r
2023-07-18,100.0\r
2023-07-23,100.0\r
2023-07-26,99.95699275523286\r
2023-07-28,99.98162875735287\r
2023-07-31,99.99931768610656\r
2023-08-02,99.56883276953845\r
2023-08-05,99.1365952514092\r
2023-08-07,98.2851096876143\r
2023-08-10,98.45955882938117\r
2023-08-12,96.78500241756763\r
2023-08-15,96.93527130252096\r
2023-08-17,96.21535444853573\r
2023-08-22,95.29069822837843\r
2023-08-25,93.91923880574146\r
2023-08-30,93.22952497976583\r
2023-09-01,94.91444629228567\r
2023-09-04,94.54806789523626\r
2023-09-06,94.61104587326956\r
2023-09-11,92.16711632341129\r
2023-09-19,90.92193879405086\r
2023-09-26,91.88567195011343\r
2023-09-29,91.88567195011343\r
2023-10-01,92.22088136792912\r
2023-10-04,92.22088136792912\r
`;export{r as default};
