const r=`date,value\r
2017-01-04,79.36483696189035\r
2017-01-07,81.53033962831034\r
2017-01-14,85.08348846414913\r
2017-02-03,92.81891650966897\r
2017-02-06,92.81891650966897\r
2017-02-16,92.08634372897247\r
2017-02-23,95.60005247138868\r
2017-02-26,91.84269308406958\r
2017-03-05,92.74554988246865\r
2017-03-08,90.65271481046786\r
2017-03-15,92.62332615304304\r
2017-03-18,93.35768038501475\r
2017-03-25,96.3193319095963\r
2017-03-28,96.26965397196653\r
2017-04-04,95.87261686009265\r
2017-04-07,94.71029653126884\r
2017-04-14,96.96612120426414\r
2017-04-17,96.17033029039696\r
2017-05-07,94.68563082646723\r
2017-05-14,94.68563082646723\r
2017-05-17,95.47626698955533\r
2017-05-24,93.82402666089484\r
2017-05-27,93.13711918607599\r
2017-06-03,90.8707950212184\r
2017-06-06,94.09446116766844\r
2017-06-13,86.1001500906148\r
2017-06-16,84.68294788228897\r
2017-06-23,84.70648718480017\r
2017-06-26,84.09535590315035\r
2017-07-01,76.27509462786661\r
2017-07-03,71.56163877769708\r
2017-07-06,72.55160262292087\r
2017-07-08,71.27671002633147\r
2017-07-11,69.90265129246627\r
2017-07-13,68.3460352252644\r
2017-07-18,68.62600470677329\r
2017-07-21,68.2599871930156\r
2017-07-23,65.31919118670595\r
2017-07-26,64.05753420814196\r
2017-07-28,62.412096268612615\r
2017-07-31,61.56521142551911\r
2017-08-02,59.41849963160578\r
2017-08-05,57.30377981929583\r
2017-08-07,55.9118331084171\r
2017-08-12,55.10321488218221\r
2017-08-15,52.51418746532636\r
2017-08-17,50.41243779860154\r
2017-08-20,50.1475242989642\r
2017-08-22,47.641575222694826\r
2017-08-25,48.90652961150568\r
2017-08-27,47.80819835729264\r
2017-08-30,44.12729723190711\r
2017-09-01,41.85906615872157\r
2017-09-04,40.0359652584987\r
2017-09-09,40.83047294725151\r
2017-09-11,29.1119172592819\r
2017-09-14,31.71772269578242\r
2017-09-16,31.71772269578242\r
2017-09-19,31.71772269578242\r
2017-09-21,32.25006958868014\r
2017-09-24,32.25006958868014\r
2017-10-06,25.096654144919274\r
2017-10-09,25.822419062876246\r
2017-10-11,25.309214880069497\r
2017-10-14,25.309214880069497\r
2017-10-16,25.494040959767357\r
2017-10-19,25.224100517764136\r
2017-10-21,24.884844528740153\r
2017-10-24,24.28182917237473\r
2017-10-26,24.56153099568722\r
2017-10-31,24.21211338567359\r
2017-11-03,23.409555241263256\r
2017-11-05,24.100742751003583\r
2017-11-08,20.834196048779933\r
2017-11-18,19.74722092401739\r
2017-11-20,19.39032784884189\r
2017-11-23,18.224566428791324\r
2017-11-28,18.224566428791324\r
2017-11-30,18.360872199748997\r
2017-12-03,19.811238420892302\r
2017-12-05,19.288859354550574\r
2017-12-13,20.965219186938256\r
2017-12-18,20.93898704896368\r
2017-12-20,20.93898704896368\r
2017-12-23,21.360349643089243\r
2017-12-25,20.965219186938256\r
2017-12-28,21.004593173466247\r
2017-12-30,21.004593173466247\r
2018-01-02,19.93953355800825\r
2018-01-04,19.93953355800825\r
2018-01-14,21.017724708794844\r
2018-01-17,21.5192659460669\r
2018-01-19,21.5192659460669\r
2018-01-22,21.426504831498754\r
2018-01-24,21.426504831498754\r
2018-01-27,23.067124267879063\r
2018-02-03,18.360872199748997\r
2018-02-08,24.21211338567359\r
2018-02-11,23.05347099232155\r
2018-02-13,26.224555883134325\r
2018-02-16,26.224555883134325\r
2018-02-18,26.224555883134325\r
2018-02-26,42.13985159298383\r
2018-03-03,42.13985159298383\r
2018-03-13,56.288229763571415\r
2018-03-18,57.263811157989096\r
2018-03-23,58.04530463525703\r
2018-03-30,72.37519295232474\r
2018-04-02,72.86075209177818\r
2018-04-07,73.23688750243609\r
2018-04-12,71.93495576706208\r
2018-04-17,88.24438544234656\r
2018-04-19,93.9223287738189\r
2018-04-22,91.86704598541324\r
2018-04-24,91.91575989768036\r
2018-04-27,95.74868367905904\r
2018-04-29,96.09586570224535\r
2018-05-07,99.47063644486227\r
2018-05-09,97.51481935621652\r
2018-05-19,97.31514277362521\r
2018-05-22,97.31514277362521\r
2018-05-29,95.60005247138868\r
2018-06-03,92.55002431002656\r
2018-06-08,92.55002431002656\r
2018-06-13,93.5293789737766\r
2018-06-16,97.48985041226028\r
2018-06-18,96.99103390266549\r
2018-06-21,96.14550607768008\r
2018-06-26,96.29449159947147\r
2018-06-28,94.34059345904545\r
2018-07-01,92.47674676681238\r
2018-07-03,94.43912174617179\r
2018-07-06,91.40480324555168\r
2018-07-08,89.03613194807174\r
2018-07-11,90.09639586309177\r
2018-07-13,87.88547995960366\r
2018-07-18,85.91062098624901\r
2018-07-21,79.80057599579294\r
2018-07-23,76.4103226067208\r
2018-07-26,75.51069824469074\r
2018-07-28,72.2650282327628\r
2018-07-31,71.18913540914069\r
2018-08-02,69.07927489275012\r
2018-08-05,66.25094587551575\r
2018-08-07,67.4020049732308\r
2018-08-10,62.101698450902354\r
2018-08-12,61.70945850015524\r
2018-08-15,59.66222244096602\r
2018-08-17,52.49491893820895\r
2018-08-20,51.13443186350811\r
2018-08-22,51.153489733093224\r
2018-08-25,49.2812133192472\r
2018-08-27,49.3938518248491\r
2018-08-30,44.41434335475245\r
2018-09-01,43.075559400520305\r
2018-09-06,41.68397454524321\r
2018-09-09,38.1120800204981\r
2018-09-11,36.34357085972678\r
2018-09-14,34.416407306427956\r
2018-09-16,34.416407306427956\r
2018-09-19,34.416407306427956\r
2018-09-21,34.513336477904815\r
2018-09-24,35.587077270407306\r
2018-09-26,36.508906873611984\r
2018-09-29,37.742140045793136\r
2018-10-01,37.742140045793136\r
2018-10-06,38.50044950870266\r
2018-10-09,38.4666128181435\r
2018-10-14,45.117279578621535\r
2018-10-19,52.16780712129295\r
2018-10-21,49.751250419206144\r
2018-10-24,50.81090316597303\r
2018-10-26,51.07727609618728\r
2018-11-05,44.2527840234827\r
2018-11-08,61.91577087059791\r
2018-11-10,61.91577087059791\r
2018-11-15,61.91577087059791\r
2018-11-18,61.91577087059791\r
2018-11-28,74.48165099599355\r
2018-12-03,79.63992434954537\r
2018-12-05,77.1332313394433\r
2018-12-08,80.55975847643666\r
2018-12-10,82.99532462100744\r
2018-12-15,83.15877462860358\r
2018-12-18,84.23622173631938\r
2018-12-23,84.89490020359858\r
2018-12-25,84.048422563052\r
2018-12-28,84.42419637344702\r
2019-01-02,82.31960965650023\r
2019-01-04,82.31960965650023\r
2019-01-07,85.86326603632395\r
2019-01-09,83.43928781777021\r
2019-01-12,83.53288009249668\r
2019-01-14,82.692131911755\r
2019-01-17,84.00150019342541\r
2019-01-22,83.67335086298984\r
2019-01-24,84.54176959613321\r
2019-01-29,84.2597089715856\r
2019-02-03,82.4126741948522\r
2019-02-06,84.54176959613321\r
2019-02-08,85.74492649302144\r
2019-02-11,84.89490020359858\r
2019-02-13,84.70648718480017\r
2019-02-16,82.4126741948522\r
2019-02-18,82.34287166354953\r
2019-02-21,82.90198507534271\r
2019-02-23,83.43928781777021\r
2019-02-26,83.27560705758474\r
2019-02-28,83.27560705758474\r
2019-03-03,83.43928781777021\r
2019-03-08,84.37718626790762\r
2019-03-10,85.83959266096001\r
2019-03-18,76.5456508614756\r
2019-03-23,87.8137723651154\r
2019-03-25,91.502036369939\r
2019-03-28,90.5558607035449\r
2019-03-30,90.72538383649528\r
2019-04-02,88.62789274951626\r
2019-04-07,88.48399591123666\r
2019-04-09,87.67043070421107\r
2019-04-12,88.4600226233754\r
2019-04-14,83.46268176796875\r
2019-04-17,87.21716248691385\r
2019-04-19,88.98806304032516\r
2019-04-27,91.47772403107578\r
2019-04-29,94.16827258671404\r
2019-05-02,94.16827258671404\r
2019-05-07,95.74868367905904\r
2019-05-09,97.39000140998361\r
2019-05-14,97.93970091374649\r
2019-05-19,96.91630384634186\r
2019-05-24,100.0\r
2019-05-29,100.0\r
2019-06-01,100.0\r
2019-06-03,100.0\r
2019-06-06,100.0\r
2019-06-11,98.94247103012009\r
2019-06-13,99.01785114410397\r
2019-06-18,97.48985041226028\r
2019-06-21,98.03978542524001\r
2019-06-23,98.03978542524001\r
2019-06-26,95.60005247138868\r
2019-06-28,95.60005247138868\r
2019-07-01,91.47772403107578\r
2019-07-03,91.47772403107578\r
2019-07-06,89.03613194807174\r
2019-07-08,83.76705293725391\r
2019-07-11,87.1933335193093\r
2019-07-13,82.15685266752769\r
2019-07-16,80.81348783683097\r
2019-07-18,80.03031343353175\r
2019-07-21,80.81348783683097\r
2019-07-23,75.6678104127657\r
2019-07-26,79.18166682109162\r
2019-07-28,76.36523547057683\r
2019-07-31,76.56821531762094\r
2019-08-02,76.50053030323896\r
2019-08-05,77.69998559943947\r
2019-08-07,76.13996695380166\r
2019-08-10,76.7036605244651\r
2019-08-12,78.40517184597651\r
2019-08-15,76.11745542867594\r
2019-08-17,78.08637032209789\r
2019-08-20,79.52525617365187\r
2019-08-22,74.90597556355154\r
2019-08-25,79.45648847589345\r
2019-08-27,79.36483696189035\r
2019-08-30,73.65823332167373\r
2019-09-04,71.93495576706208\r
2019-09-06,73.36983473754962\r
2019-09-09,69.57714636181372\r
2019-09-11,66.25094587551575\r
2019-09-14,60.43676482665169\r
2019-09-16,60.15092049563242\r
2019-09-19,64.35099903838125\r
2019-09-24,63.32633104924904\r
2019-09-26,63.51401897792912\r
2019-09-29,66.10234266569267\r
2019-10-01,66.86807530523905\r
2019-10-04,65.97507970652265\r
2019-10-06,65.82673605680526\r
2019-10-09,63.95286147591284\r
2019-10-11,63.95286147591284\r
2019-10-26,62.59864588463846\r
2019-10-29,62.59864588463846\r
2019-11-05,62.184407842824754\r
2019-11-30,59.33735153675392\r
2019-12-08,70.27232554181226\r
2019-12-10,66.76150278735761\r
2019-12-13,66.76150278735761\r
2019-12-15,66.76150278735761\r
2019-12-23,68.94964164914953\r
2019-12-25,67.4233991322344\r
2019-12-28,68.92804602100551\r
2019-12-30,65.82673605680526\r
2020-01-02,66.31467573072212\r
2020-01-04,72.48542792502616\r
2020-01-09,68.47519236344112\r
2020-01-12,68.99284140240535\r
2020-01-14,68.19548095686966\r
2020-01-17,69.70727199970935\r
2020-01-22,69.42546180292052\r
2020-01-27,70.57737591810262\r
2020-02-01,72.30908568909739\r
2020-02-06,72.83865173639063\r
2020-02-08,73.56944484384577\r
2020-02-11,73.56944484384577\r
2020-02-13,72.59573313348182\r
2020-02-16,72.59573313348182\r
2020-02-18,76.02743720132973\r
2020-02-21,76.00493961345283\r
2020-02-26,84.2597089715856\r
2020-02-28,84.2597089715856\r
2020-03-04,87.62267194020885\r
2020-03-07,87.59879664430682\r
2020-03-14,92.5011699143792\r
2020-03-19,90.28973547080423\r
2020-03-22,94.31596811592233\r
2020-03-24,94.3652214937462\r
2020-03-29,95.15473907452883\r
2020-04-01,94.56234265444147\r
2020-04-03,94.56234265444147\r
2020-04-06,94.43912174617179\r
2020-04-08,94.68563082646723\r
2020-04-11,94.98179679020872\r
2020-04-23,96.02142526578128\r
2020-04-26,97.8646656197549\r
2020-04-28,99.7981857907964\r
2020-05-03,97.39000140998361\r
2020-05-06,99.7477642398821\r
2020-05-11,100.0\r
2020-05-21,100.0\r
2020-05-23,38.230104889686636\r
2020-05-26,100.0\r
2020-05-28,100.0\r
2020-05-31,100.0\r
2020-06-05,100.0\r
2020-06-10,100.0\r
2020-06-12,100.0\r
2020-06-15,100.0\r
2020-06-17,88.55593209299974\r
2020-06-20,92.13510628788787\r
2020-06-22,86.52722974063526\r
2020-06-25,88.26833424682384\r
2020-06-27,84.68294788228897\r
2020-06-30,87.02660708879057\r
2020-07-02,84.73002922645311\r
2020-07-05,83.64993220564513\r
2020-07-07,82.692131911755\r
2020-07-10,81.99423056522002\r
2020-07-12,78.38238227464275\r
2020-07-15,77.49575395128889\r
2020-07-17,72.37519295232474\r
2020-07-20,69.62051026317012\r
2020-07-22,68.21698019833799\r
2020-07-25,67.25232546812138\r
2020-07-27,65.40366775860313\r
2020-07-30,61.91577087059791\r
2020-08-01,60.355037124227294\r
2020-08-04,59.49969415412919\r
2020-08-06,56.42716866821793\r
2020-08-09,54.358172823667836\r
2020-08-11,49.6382711624153\r
2020-08-14,48.98137055840781\r
2020-08-16,48.32813801039212\r
2020-08-19,48.012179518229786\r
2020-08-21,46.299091186225866\r
2020-08-24,47.752630250216086\r
2020-08-26,46.90397759120417\r
2020-09-03,39.84694351777039\r
2020-09-05,37.15671632883944\r
2020-09-08,28.303836541501447\r
2020-09-10,28.303836541501447\r
2020-09-13,24.393548940877935\r
2020-09-15,24.393548940877935\r
2020-09-18,24.884844528740153\r
2020-09-20,20.965219186938256\r
2020-09-25,20.755747306553225\r
2020-09-28,19.670514475188796\r
2020-09-30,18.72225959888267\r
2020-10-03,17.24608500142238\r
2020-10-08,15.253961664350893\r
2020-10-10,15.1965874375205\r
2020-10-15,14.65041027714816\r
2020-10-18,14.65041027714816\r
2020-10-20,14.99079038688336\r
2020-10-25,14.99079038688336\r
2020-10-28,13.321808638893776\r
2020-10-30,13.321808638893776\r
2020-11-02,13.008693222804412\r
2020-11-07,13.517722195698486\r
2020-11-09,13.517722195698486\r
2020-11-17,13.758796155343077\r
2020-11-19,14.842890498917386\r
2020-11-22,15.727838847663664\r
2020-11-24,17.610365307953924\r
2020-12-02,17.610365307953924\r
2020-12-07,18.6097893428697\r
2020-12-09,19.84969055216168\r
2020-12-12,19.51747676351673\r
2020-12-19,19.51747676351673\r
2020-12-22,18.422969893013843\r
2020-12-27,16.538993518845654\r
2021-01-03,28.348479884933397\r
2021-01-06,28.58707500028751\r
2021-01-13,38.92445850393465\r
2021-01-16,46.591958897983126\r
2021-01-18,47.32750748460621\r
2021-01-23,47.32750748460621\r
2021-01-26,56.6855784259483\r
2021-01-31,56.58613155687796\r
2021-02-02,56.58613155687796\r
2021-02-15,76.68107936328032\r
2021-02-17,76.88441001618858\r
2021-02-20,76.88441001618858\r
2021-02-25,90.36228255606841\r
2021-02-27,91.9888510382829\r
2021-03-02,95.20417534783917\r
2021-03-04,92.13510628788787\r
2021-03-14,93.0146795833917\r
2021-03-22,95.40202793569135\r
2021-03-24,97.48985041226028\r
2021-03-29,95.0064947658918\r
2021-04-01,95.0064947658918\r
2021-04-03,97.51481935621652\r
2021-04-06,98.89223097467277\r
2021-04-08,98.89223097467277\r
2021-04-11,97.58974225043023\r
2021-04-13,97.58974225043023\r
2021-04-18,97.9146864736947\r
2021-04-23,94.75963601035689\r
2021-04-28,94.75963601035689\r
2021-05-03,95.60005247138868\r
2021-05-06,95.97181172724578\r
2021-05-08,94.80898624799872\r
2021-05-13,95.92220892504871\r
2021-05-18,95.97181172724578\r
2021-05-21,96.54301540005747\r
2021-05-23,96.54301540005747\r
2021-05-26,96.54301540005747\r
2021-05-28,96.54301540005747\r
2021-05-31,100.0\r
2021-06-05,95.42677160044543\r
2021-06-10,97.6646892358213\r
2021-06-12,97.6646892358213\r
2021-06-15,97.43992055618925\r
2021-06-17,97.43992055618925\r
2021-06-22,92.62332615304304\r
2021-06-25,91.502036369939\r
2021-06-27,82.04068025654341\r
2021-06-30,83.15877462860358\r
2021-07-02,76.99746888868493\r
2021-07-05,76.65850098593542\r
2021-07-07,75.44340631784884\r
2021-07-10,78.08637032209789\r
2021-07-12,75.1297095395543\r
2021-07-15,76.23004092344068\r
2021-07-17,72.33111863314899\r
2021-07-20,72.37519295232474\r
2021-07-22,68.36755432474851\r
2021-07-27,60.66175470980948\r
2021-07-30,60.98963733115323\r
2021-08-01,58.7706157157364\r
2021-08-04,56.76518855480628\r
2021-08-06,56.864766990365446\r
2021-08-11,55.43789702493444\r
2021-08-14,55.22124109608296\r
2021-08-16,54.57340612030389\r
2021-08-19,54.358172823667836\r
2021-08-21,54.43639827251958\r
2021-08-24,54.49509826491832\r
2021-08-26,54.59299043994314\r
2021-08-29,53.75352357747689\r
2021-08-31,53.13234257112099\r
2021-09-03,54.182337806701156\r
2021-09-05,53.63682191390778\r
2021-09-08,54.08475477370725\r
2021-09-23,48.40260725583798\r
2021-09-30,48.40260725583798\r
2021-10-03,48.4398598800289\r
2021-10-05,49.074989112977605\r
2021-10-08,49.074989112977605\r
2021-10-10,46.591958897983126\r
2021-10-13,47.32750748460621\r
2021-10-15,47.5121478844948\r
2021-10-18,46.55530815488332\r
2021-10-20,46.55530815488332\r
2021-10-23,47.06951683212738\r
2021-11-02,41.87659221855703\r
2021-11-04,42.2101707243529\r
2021-11-19,46.098193334934365\r
2021-11-22,46.098193334934365\r
2021-11-24,46.098193334934365\r
2021-11-27,46.37223562017324\r
2021-12-07,44.504205030988395\r
2021-12-09,44.27072288628185\r
2021-12-12,45.770240782592154\r
2021-12-14,44.2527840234827\r
2021-12-17,44.88245407400442\r
2021-12-19,44.39638014580636\r
2021-12-24,43.87677141760285\r
2021-12-29,43.270840177620975\r
2022-01-08,43.359726395520184\r
2022-01-11,46.33565736022561\r
2022-01-13,44.39638014580636\r
2022-01-16,44.2527840234827\r
2022-01-18,44.00195967359909\r
2022-01-21,44.14521478129578\r
2022-01-23,43.6981901829021\r
2022-01-26,43.966176362504456\r
2022-01-28,43.66251053452769\r
2022-01-31,44.34250877517235\r
2022-02-02,43.51991399027047\r
2022-02-05,42.36856820748935\r
2022-02-07,45.71567736014675\r
2022-02-10,44.39638014580636\r
2022-02-12,46.44542839170987\r
2022-02-15,46.44542839170987\r
2022-02-17,48.21652417210825\r
2022-02-20,50.52615100493646\r
2022-02-22,53.59794496104598\r
2022-02-25,54.2604572547224\r
2022-02-27,54.2604572547224\r
2022-03-02,56.010782336771925\r
2022-03-07,69.12250862753287\r
2022-03-09,67.83042809917494\r
2022-03-14,70.03303133321577\r
2022-03-22,78.93009728824751\r
2022-03-24,81.36823821089631\r
2022-03-29,81.36823821089631\r
2022-04-03,82.34287166354953\r
2022-04-11,93.65210168600122\r
2022-04-13,93.48030875560364\r
2022-04-16,93.5048425169525\r
2022-04-18,94.48840203691637\r
2022-04-23,94.34059345904545\r
2022-04-26,94.78430978441551\r
2022-04-28,94.63630748691854\r
2022-05-01,94.9324089047994\r
2022-05-08,99.39511216949242\r
2022-05-11,97.7646560196432\r
2022-05-13,98.89223097467277\r
2022-05-16,98.89223097467277\r
2022-05-18,99.11839534896988\r
2022-05-21,98.94247103012009\r
2022-05-23,97.9146864736947\r
2022-05-26,96.41871997404473\r
2022-05-28,96.84159790833924\r
2022-05-31,96.66737786346388\r
2022-06-02,97.6646892358213\r
2022-06-07,95.87261686009265\r
2022-06-10,95.89741155035914\r
2022-06-12,95.10531355249516\r
2022-06-15,94.9077189953006\r
2022-06-17,92.52559576215593\r
2022-06-20,89.83083729808303\r
2022-06-25,87.38404158589852\r
2022-06-27,84.56529246119318\r
2022-07-02,76.86180658908113\r
2022-07-05,77.1332313394433\r
2022-07-07,72.17694705106913\r
2022-07-10,72.68402785831907\r
2022-07-12,70.92668209156604\r
2022-07-15,67.85187908434047\r
2022-07-17,64.93961251620273\r
2022-07-20,63.59751047337894\r
2022-07-22,61.97772079501457\r
2022-07-25,60.62082142436353\r
2022-07-27,60.68222569057335\r
2022-07-30,58.08550073109701\r
2022-08-01,56.367605862778206\r
2022-08-04,53.71461122351376\r
2022-08-06,50.67793544429369\r
2022-08-09,49.299978926204666\r
2022-08-11,47.54911208087318\r
2022-08-14,42.91605938628035\r
2022-08-16,40.104793276579954\r
2022-08-19,40.104793276579954\r
2022-08-21,38.50044950870266\r
2022-08-24,36.6414018408253\r
2022-08-26,33.9977007860653\r
2022-08-29,34.48101407252567\r
2022-09-05,32.80194356755941\r
2022-09-10,20.274721887000535\r
2022-09-13,16.669883533381917\r
2022-09-18,13.880001570865709\r
2022-09-20,13.891042309517543\r
2022-09-23,8.183347505047475\r
2022-10-05,7.488372668144406\r
2022-10-08,7.522506853834128\r
2022-10-10,7.522506853834128\r
2022-10-13,7.454303504065924\r
2022-10-15,7.8326326189294555\r
2022-10-18,8.42370595088172\r
2022-10-20,8.531465652186498\r
2022-10-23,8.468536125463562\r
2022-10-25,9.069595172184066\r
2022-10-28,9.088077906640885\r
2022-10-30,8.227638430142429\r
2022-11-02,8.042289924389824\r
2022-11-04,7.780580984640883\r
2022-11-14,8.949841703793519\r
2022-11-17,9.060359713425608\r
2022-11-24,9.060359713425608\r
2022-11-27,8.81249374030693\r
2022-12-02,8.095066164676377\r
2022-12-04,9.687814144424374\r
2022-12-07,9.687814144424374\r
2022-12-09,9.574142709048044\r
2022-12-22,11.165795613840668\r
2022-12-27,10.666684746308437\r
2022-12-29,10.706261592958729\r
2023-01-18,11.03510806111681\r
2023-01-21,11.03510806111681\r
2023-01-26,11.03510806111681\r
2023-01-31,10.825360082674642\r
2023-02-02,10.955005377393851\r
2023-02-05,10.955005377393851\r
2023-02-10,10.905065333310056\r
2023-02-12,10.666684746308437\r
2023-02-15,10.905065333310056\r
2023-02-17,10.905065333310056\r
2023-02-20,10.905065333310056\r
2023-02-22,10.775668674692728\r
2023-03-07,19.952382138218457\r
2023-03-09,23.643613950066825\r
2023-03-12,23.588453612553632\r
2023-03-14,26.296639665690137\r
2023-03-17,26.296639665690137\r
2023-03-22,28.378258478416534\r
2023-03-24,47.752630250216086\r
2023-03-27,50.924991585594924\r
2023-04-01,50.924991585594924\r
2023-04-03,50.63997146407503\r
2023-04-06,54.847854252443675\r
2023-04-08,58.52842638561773\r
2023-04-16,71.21102483726077\r
2023-04-21,71.21102483726077\r
2023-04-23,71.21102483726077\r
2023-04-26,83.29898178410534\r
2023-04-28,84.30669166648896\r
2023-05-03,84.30669166648896\r
2023-05-06,91.25903472482632\r
2023-05-11,93.11262587067158\r
2023-05-23,95.50101871368459\r
2023-05-26,97.14056635818613\r
2023-05-28,95.05589878264655\r
2023-06-02,94.98179679020872\r
2023-06-05,92.59888950558599\r
2023-06-07,91.94012090837076\r
2023-06-10,97.34009297453589\r
2023-06-12,97.34009297453589\r
2023-06-15,98.61610167220586\r
2023-06-17,96.36902057725565\r
2023-06-20,96.96612120426414\r
2023-06-22,95.27834991446217\r
2023-06-25,94.63630748691854\r
2023-06-27,94.48840203691637\r
2023-07-02,88.07682000506068\r
2023-07-05,93.30864790913351\r
2023-07-07,89.87909626022925\r
2023-07-10,93.5048425169525\r
2023-07-12,93.35768038501475\r
2023-07-15,94.38985221991032\r
2023-07-17,94.0698627466099\r
2023-07-20,94.3652214937462\r
2023-07-22,92.91677646059323\r
2023-07-25,91.7939953915448\r
2023-07-27,91.11336362560277\r
2023-07-30,87.52718710244574\r
2023-08-01,87.86157470516702\r
2023-08-06,86.21869457099771\r
2023-08-09,79.84650136070857\r
2023-08-11,68.2814949459341\r
2023-08-14,71.12348403146302\r
2023-08-16,68.51826742880336\r
2023-08-19,66.91072423910272\r
2023-08-21,63.890092242165196\r
2023-08-24,61.010154561954565\r
2023-08-26,59.723218399625885\r
2023-08-29,59.86564377176129\r
2023-08-31,56.705476572530024\r
2023-09-03,53.90929095531983\r
2023-09-05,50.791898846143845\r
2023-09-08,48.086444621275746\r
2023-09-10,45.95231561692038\r
2023-09-15,40.20812809795013\r
2023-09-23,37.29018956822549\r
2023-09-25,38.06154471464687\r
2023-09-28,36.52545775378564\r
2023-09-30,36.5751292374048\r
2023-10-03,34.5618438584522\r
2023-10-05,34.642752869892455\r
2023-10-08,33.32586807627403\r
`;export{r as default};
