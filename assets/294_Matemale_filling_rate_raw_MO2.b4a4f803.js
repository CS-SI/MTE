const r=`date,value\r
2017-01-03,31.83558256171837\r
2017-01-13,31.83558256171837\r
2017-03-07,6.868305146718281\r
2017-03-14,10.98770209048738\r
2017-03-17,10.482921585558818\r
2017-04-03,18.772537098845994\r
2017-04-06,20.55231046924464\r
2017-04-16,24.408863428594\r
2017-04-23,28.31104282543837\r
2017-05-23,57.86785008909211\r
2017-05-26,62.97470755531255\r
2017-06-02,61.72006747034563\r
2017-06-05,63.710108959444646\r
2017-06-12,70.2408159191738\r
2017-06-15,70.6940691788539\r
2017-06-22,70.6940691788539\r
2017-07-05,73.57703340160805\r
2017-07-07,73.96743992091204\r
2017-07-10,74.07919241311455\r
2017-07-12,73.90229361771623\r
2017-07-17,76.96012602830578\r
2017-07-22,78.25987713596054\r
2017-07-25,78.17349590413312\r
2017-07-27,77.30301823177629\r
2017-07-30,75.15483983910003\r
2017-08-04,76.00257567670702\r
2017-08-06,75.0046760917782\r
2017-08-11,74.59257339346092\r
2017-08-14,74.7610106283646\r
2017-08-19,72.6981416393274\r
2017-08-21,73.44714920600609\r
2017-08-24,70.46724304717391\r
2017-08-26,68.30999568000686\r
2017-08-29,69.98769108254179\r
2017-09-05,68.45267031649198\r
2017-09-08,67.23629229042737\r
2017-09-10,68.98915203102347\r
2017-09-13,63.547234259533624\r
2017-09-20,62.345659752050175\r
2017-09-23,62.345659752050175\r
2017-09-28,62.22703952314299\r
2017-10-03,51.932043762680856\r
2017-10-05,50.93256800430843\r
2017-10-08,51.312792681518815\r
2017-10-10,49.86116498373259\r
2017-10-13,48.69848962838352\r
2017-10-15,48.01984344049411\r
2017-10-18,47.90235008050839\r
2017-10-20,48.07129633821437\r
2017-10-23,47.836329305489166\r
2017-10-25,47.40476056972182\r
2017-10-28,47.44125116269115\r
2017-10-30,47.843662485578584\r
2017-11-07,45.34304868087626\r
2017-11-12,44.53521854069822\r
2017-11-14,40.76258690907565\r
2017-11-17,43.373105127805246\r
2017-11-19,41.68182016068855\r
2017-11-22,39.881110679562596\r
2017-11-24,40.26045402363176\r
2017-11-27,41.25460365341918\r
2017-11-29,41.07224824175115\r
2017-12-07,43.4774242905286\r
2017-12-09,38.22753816739061\r
2017-12-12,37.453577938338796\r
2017-12-14,37.453577938338796\r
2017-12-17,36.466690815296\r
2017-12-19,2.9140743395469353\r
2017-12-24,4.32509868749698\r
2017-12-27,4.32509868749698\r
2018-01-03,2.4266470832686857\r
2018-01-11,1.7134140990541995\r
2018-01-18,9.158488110163354\r
2018-01-21,9.158488110163354\r
2018-01-23,12.133069444976543\r
2018-01-28,11.461857675789968\r
2018-01-31,16.42419169809316\r
2018-02-02,16.42419169809316\r
2018-02-07,15.662190644265575\r
2018-03-19,6.597602154412751\r
2018-03-27,6.597602154412751\r
2018-04-18,11.172079232629253\r
2018-04-21,11.142333889156493\r
2018-04-26,13.56791451855536\r
2018-05-11,46.23077587277018\r
2018-05-18,46.23077587277018\r
2018-05-21,46.23077587277018\r
2018-06-17,98.23820982487908\r
2018-06-20,98.46669569377443\r
2018-06-22,98.11864271315913\r
2018-06-25,97.46786142447397\r
2018-06-27,96.92735424433482\r
2018-07-02,95.77619476632026\r
2018-07-05,95.31569944944374\r
2018-07-07,96.46383380319256\r
2018-07-10,96.2916715524169\r
2018-07-12,98.51024975969152\r
2018-07-15,97.03532404951855\r
2018-07-17,98.42315217185465\r
2018-07-20,98.11864271315913\r
2018-07-25,98.36873759627707\r
2018-07-27,99.997364834546\r
2018-07-30,100.0\r
2018-08-01,100.0\r
2018-08-04,100.0\r
2018-08-06,100.0\r
2018-08-11,99.97540710231799\r
2018-08-19,99.17575604717764\r
2018-08-21,99.21948151501935\r
2018-08-24,97.26227485528153\r
2018-08-26,96.65771759781983\r
2018-08-29,96.65771759781983\r
2018-08-31,97.04612464938832\r
2018-09-03,93.49644246722923\r
2018-09-05,96.2916715524169\r
2018-09-08,95.21947045800798\r
2018-09-10,95.21947045800798\r
2018-09-13,95.95858623100624\r
2018-09-18,96.3131826267157\r
2018-09-20,95.01649509579374\r
2018-09-23,91.69636079869991\r
2018-09-25,92.02126996368351\r
2018-09-28,92.71510827139763\r
2018-09-30,92.71510827139763\r
2018-10-03,91.86397729105443\r
2018-10-05,91.1840775534854\r
2018-10-13,87.21358430027078\r
2018-10-20,85.58185315214443\r
2018-10-23,87.15247170487369\r
2018-10-25,87.24414939250286\r
2018-10-30,87.24414939250286\r
2018-11-04,84.81745331135627\r
2018-11-12,79.85279463272734\r
2018-11-14,79.56186604991005\r
2018-11-17,79.07827658337577\r
2018-11-22,77.27441200638303\r
2018-11-24,77.56073512075345\r
2018-11-27,75.66285665227055\r
2018-12-02,75.63458433817188\r
2018-12-04,74.28431189076275\r
2018-12-07,71.86167476342618\r
2018-12-09,68.3723957810259\r
2018-12-14,65.21232273255939\r
2018-12-17,62.78733219875262\r
2018-12-19,61.644217453049656\r
2018-12-27,60.79651192122824\r
2018-12-29,53.73604914646063\r
2019-01-01,48.18901624632818\r
2019-01-03,48.21847085369249\r
2019-01-06,43.19261018278251\r
2019-01-11,43.33836255870743\r
2019-01-16,41.437401408895994\r
2019-01-23,35.981789740060485\r
2019-01-26,20.40943741417642\r
2019-03-14,19.979542484454544\r
2019-03-17,20.4877195886887\r
2019-03-19,20.993548021834332\r
2019-03-22,20.72818981167171\r
2019-03-24,20.86296570257524\r
2019-03-27,20.835041800265177\r
2019-03-29,21.270164546572442\r
2019-04-01,21.61516450889652\r
2019-04-08,22.381972723125447\r
2019-04-28,38.88567719220353\r
2019-05-01,41.437401408895994\r
2019-05-06,41.09248811579813\r
2019-05-13,45.58552027759272\r
2019-05-16,45.55695746089063\r
2019-05-23,56.557652132896884\r
2019-05-28,57.73771655349853\r
2019-05-31,65.79587545999458\r
2019-06-02,67.88294934389852\r
2019-06-07,67.70544600016757\r
2019-06-12,69.50993123819951\r
2019-06-27,76.30524771964434\r
2019-06-30,76.07818194939941\r
2019-07-02,76.91256810536301\r
2019-07-05,77.29348217928238\r
2019-07-07,78.83708699788889\r
2019-07-10,78.57705520167117\r
2019-07-12,78.75999150802664\r
2019-07-15,79.16520357863702\r
2019-07-17,79.2521828590732\r
2019-07-20,79.04931253627441\r
2019-07-22,78.2694782744671\r
2019-07-25,77.57984394190407\r
2019-08-01,75.72884788107935\r
2019-08-04,77.92424345347247\r
2019-08-06,77.4652296683749\r
2019-08-09,77.6180693153622\r
2019-08-11,77.82849314871449\r
2019-08-14,77.42704552454013\r
2019-08-16,76.93158934329679\r
2019-08-21,76.84601404969791\r
2019-08-24,74.50843276501051\r
2019-08-26,74.7422851088675\r
2019-08-29,74.67676601272369\r
2019-08-31,72.59674864350724\r
2019-09-03,71.18537591878828\r
2019-09-05,69.50993123819951\r
2019-09-08,68.74745152274234\r
2019-09-13,66.61060092272464\r
2019-09-15,66.04934073842678\r
2019-09-18,65.63010123825973\r
2019-09-20,65.36881851804647\r
2019-09-28,65.22970101266499\r
2019-09-30,62.88949904597686\r
2019-10-03,59.781113430913045\r
2019-10-05,58.04704561924028\r
2019-10-08,57.04099554850674\r
2019-10-10,57.129852801137126\r
2019-10-13,56.557652132896884\r
2019-10-15,56.613926184313904\r
2019-10-25,55.08942614999589\r
2019-10-30,57.453608502980124\r
2019-11-02,57.34018007441476\r
2019-11-04,57.41308426260493\r
2019-11-09,58.35727973636096\r
2019-11-19,56.81515507233199\r
2019-11-24,58.226544504576026\r
2019-11-27,59.483275830894264\r
2019-11-29,59.89715912507666\r
2019-12-02,58.17756017323126\r
2019-12-07,58.602841010776594\r
2019-12-09,56.960281929659665\r
2019-12-14,36.35932903449201\r
2019-12-17,50.35004840312109\r
2019-12-22,53.3460807081482\r
2019-12-24,59.04627424902937\r
2019-12-27,62.73628287449435\r
2019-12-29,62.73628287449435\r
2020-01-01,61.51791421819557\r
2020-01-06,66.04934073842678\r
2020-01-08,64.99530809373488\r
2020-01-11,65.71732229011855\r
2020-01-16,62.65975150736478\r
2020-01-28,41.641029050145924\r
2020-01-31,36.21435064528334\r
2020-02-02,43.623701633884615\r
2020-02-05,44.464735390999905\r
2020-02-07,44.464735390999905\r
2020-02-10,46.736075893889456\r
2020-02-15,48.09335681468385\r
2020-02-17,49.2779500846973\r
2020-02-20,48.38064733683814\r
2020-02-22,45.56409724626241\r
2020-02-27,45.685567322066355\r
2020-03-01,45.671267535509706\r
2020-03-08,38.99050135302346\r
2020-03-11,36.923321614820914\r
2020-03-13,36.923321614820914\r
2020-03-18,18.96200935486501\r
2020-03-21,37.03796551833978\r
2020-03-28,37.33823105754874\r
2020-03-31,37.33823105754874\r
2020-04-05,37.98797621123883\r
2020-04-07,34.52996961112996\r
2020-04-10,35.83137789212666\r
2020-04-15,35.818859140087284\r
2020-04-25,40.977867668742405\r
2020-05-07,83.46888959618053\r
2020-05-17,96.27016310853605\r
2020-05-20,95.19809346383562\r
2020-05-22,97.33798962729573\r
2020-05-25,99.27415318808951\r
2020-05-27,98.61918105737637\r
2020-05-30,98.61918105737637\r
2020-06-06,99.05556541380244\r
2020-06-21,99.87662997409336\r
2020-06-24,100.0\r
2020-06-26,100.0\r
2020-07-01,99.78887295498183\r
2020-07-04,99.88760257091296\r
2020-07-06,98.8808850963908\r
2020-07-09,99.23041453065325\r
2020-07-11,99.0992618669638\r
2020-07-14,99.1976174621735\r
2020-07-16,100.0\r
2020-07-19,100.0\r
2020-07-21,100.0\r
2020-07-24,100.0\r
2020-07-26,100.0\r
2020-07-29,99.84371614294429\r
2020-07-31,100.0\r
2020-08-03,99.4711077360511\r
2020-08-05,98.53203074678736\r
2020-08-08,98.49936025468827\r
2020-08-10,98.71727557785583\r
2020-08-13,98.8045155298122\r
2020-08-15,98.33609675823696\r
2020-08-20,96.79787733551144\r
2020-08-23,94.38771420143233\r
2020-08-25,93.14756619270861\r
2020-08-30,93.2532108776174\r
2020-09-02,92.4309204553226\r
2020-09-04,92.24172721749126\r
2020-09-07,91.41388792487855\r
2020-09-12,89.60494402857219\r
2020-09-14,90.40301234529254\r
2020-09-17,90.99628640577887\r
2020-09-19,90.99628640577887\r
2020-09-24,92.36783246273784\r
2020-09-27,92.36783246273784\r
2020-09-29,91.16320140377002\r
2020-10-04,90.55893113551247\r
2020-10-12,92.85210979767596\r
2020-10-14,94.9097611929302\r
2020-10-17,98.12950915655759\r
2020-10-24,97.55449529085638\r
2020-11-01,93.92028024630368\r
2020-11-08,91.95833521691561\r
2020-11-11,92.62032593125619\r
2020-11-16,92.62032593125619\r
2020-11-18,87.09138256026601\r
2020-11-21,89.212519420777\r
2020-11-23,87.31549074303469\r
2020-12-03,84.08676076686554\r
2020-12-18,2.321819349000034\r
2021-02-19,31.4321266945016\r
2021-02-24,27.66038106083001\r
2021-03-01,24.46470643420274\r
2021-03-11,23.23251601313234\r
2021-03-13,25.011554175694993\r
2021-03-16,25.5962590476864\r
2021-03-21,25.36252561551407\r
2021-03-23,28.459825301577713\r
2021-03-28,28.609034808409383\r
2021-03-31,29.271755915864784\r
2021-04-02,28.609034808409383\r
2021-04-05,28.825313974835197\r
2021-04-07,29.50764235747294\r
2021-04-12,33.98636411698136\r
2021-04-15,36.66291440601409\r
2021-05-17,58.063351163050584\r
2021-05-20,59.51632868427201\r
2021-05-25,60.48757395574631\r
2021-05-27,60.48757395574631\r
2021-05-30,59.85570009117528\r
2021-06-09,71.05782122090882\r
2021-06-11,71.05782122090882\r
2021-06-14,72.00836194058294\r
2021-06-16,71.55050812747206\r
2021-06-19,71.55050812747206\r
2021-06-21,75.90812570570144\r
2021-06-26,79.14588195029893\r
2021-06-29,78.943160724982\r
2021-07-01,77.5702892092035\r
2021-07-09,74.7422851088675\r
2021-07-11,76.42839637252257\r
2021-07-14,76.63704948145933\r
2021-07-16,75.70999003047385\r
2021-07-19,76.38101864004946\r
2021-07-21,78.04881520785388\r
2021-07-26,77.5989553400869\r
2021-07-29,78.943160724982\r
2021-08-10,74.90153388371627\r
2021-08-13,74.9390311510679\r
2021-08-15,73.38225421714256\r
2021-08-18,73.38225421714256\r
2021-08-20,72.74425497595931\r
2021-08-23,71.35868620288028\r
2021-08-25,70.93948970233778\r
2021-08-28,69.4109980006085\r
2021-08-30,69.44696479793775\r
2021-09-04,68.67592573180626\r
2021-09-19,60.0133280318593\r
2021-09-22,60.63776047849526\r
2021-09-27,60.63776047849526\r
2021-09-29,61.58525829523934\r
2021-10-02,60.12962017391784\r
2021-10-07,51.81706078481063\r
2021-10-09,52.07020753244305\r
2021-10-12,50.743036082421696\r
2021-10-14,51.221397559768846\r
2021-10-17,49.96624231688003\r
2021-10-19,48.21110627812899\r
2021-10-22,44.97357863025593\r
2021-10-24,42.118286267032154\r
2021-10-27,41.41029234074803\r
2021-11-06,33.61046165953717\r
2021-11-13,32.94318721825693\r
2021-11-18,34.34620414719031\r
2021-11-21,35.70629812829501\r
2021-11-26,34.74504132903831\r
2021-12-03,26.56951183327686\r
2021-12-06,26.48985837814493\r
2021-12-08,26.56951183327686\r
2021-12-11,26.051474428387284\r
2021-12-16,5.56273692643909\r
2021-12-18,5.2997944148339435\r
2021-12-21,5.676258595135606\r
2021-12-23,5.956186150671399\r
2021-12-26,5.664849916733267\r
2022-01-15,25.36252561551407\r
2022-01-17,17.521840055489307\r
2022-01-20,20.088826681935927\r
2022-01-22,19.626621250073125\r
2022-01-25,19.03277664162783\r
2022-01-27,11.381512983206736\r
2022-01-30,62.60026246557049\r
2022-02-01,21.091777550803098\r
2022-02-06,24.591882222463276\r
2022-02-09,26.718548656393253\r
2022-02-21,11.145636783512474\r
2022-02-24,15.231724852038814\r
2022-02-26,14.927712135272259\r
2022-03-01,13.960919853093168\r
2022-03-03,13.774774502789741\r
2022-03-23,6.845518846034578\r
2022-03-26,6.9573127844737295\r
2022-04-05,6.2338903262466365\r
2022-04-10,4.382356314298593\r
2022-04-17,6.506230279964475\r
2022-04-22,6.506230279964475\r
2022-04-25,6.506230279964475\r
2022-05-12,15.00145744332238\r
2022-05-15,14.773108903085518\r
2022-05-17,18.676000481954542\r
2022-05-20,16.559273623027455\r
2022-05-22,21.340806929466723\r
2022-05-27,31.089375661529328\r
2022-05-30,24.393645641967083\r
2022-06-01,36.044563158432275\r
2022-06-04,11.228383354517868\r
2022-06-06,27.5355774618009\r
2022-06-09,10.870060371447579\r
2022-06-11,10.870060371447579\r
2022-06-16,8.644518012828033\r
2022-06-19,7.997264107728587\r
2022-06-24,8.492921731516928\r
2022-06-26,46.490268874051154\r
2022-06-29,46.490268874051154\r
2022-07-01,45.907527446806164\r
2022-07-04,45.914697256838046\r
2022-07-09,6.513612827228998\r
2022-07-11,47.87300135976539\r
2022-07-14,12.979130808351874\r
2022-07-16,45.542679727699905\r
2022-07-19,45.542679727699905\r
2022-07-21,45.364414758805076\r
2022-07-24,9.756185177742195\r
2022-07-26,45.37153800931822\r
2022-07-31,45.97925313211089\r
2022-08-03,44.6269380116183\r
2022-08-05,45.64982245064945\r
2022-08-20,47.047966012305565\r
2022-08-23,46.67817510439091\r
2022-08-28,47.0697681730013\r
2022-08-30,47.251667916405424\r
2022-09-02,47.44125116269115\r
2022-09-19,46.96081266267561\r
2022-09-22,47.46315289697197\r
2022-09-27,47.46315289697197\r
2022-10-02,48.46184738120833\r
2022-10-04,48.89864748235843\r
2022-10-09,48.46184738120833\r
2022-10-12,48.77998116684273\r
2022-10-22,49.62892462015729\r
2022-11-01,49.11413256777118\r
2022-11-06,47.69711579293558\r
2022-11-08,47.69711579293558\r
2022-11-11,45.98642907230612\r
2022-11-13,43.206479780905624\r
2022-11-16,43.519190371957954\r
2022-11-18,41.11948310634143\r
2022-11-23,41.450959585150024\r
2022-12-03,21.08709426150473\r
2022-12-06,31.759353738005476\r
2022-12-23,29.210147375778668\r
2022-12-26,29.210147375778668\r
2022-12-28,30.18731961339291\r
2023-01-05,28.947711098291464\r
2023-01-07,29.45700800301504\r
2023-01-10,29.45700800301504\r
2023-01-12,28.272539272130402\r
2023-01-17,28.636713077590674\r
2023-01-20,27.475997989632827\r
2023-01-22,27.475997989632827\r
2023-01-27,18.13697579889125\r
2023-02-14,37.04434032931051\r
2023-02-19,16.641436335943258\r
2023-02-24,37.299825376810496\r
2023-02-26,17.097314418991978\r
2023-03-01,19.943186930861184\r
2023-03-03,4.532350535623039\r
2023-03-06,12.39411137962426\r
2023-03-13,20.496940043104196\r
2023-03-16,22.756220640064782\r
2023-03-28,22.4400736346633\r
2023-04-02,22.4400736346633\r
2023-04-05,22.922554797363304\r
2023-04-07,22.84419729033278\r
2023-04-12,23.569636692141863\r
2023-04-15,23.475173520513025\r
2023-04-17,23.699238703269625\r
2023-04-20,23.87431753342756\r
2023-04-27,24.444391803514982\r
2023-05-02,31.30989473664474\r
2023-05-10,31.30989473664474\r
2023-05-12,31.30989473664474\r
2023-05-17,35.77506236649483\r
2023-05-27,35.77506236649483\r
2023-06-16,52.5862506005887\r
2023-06-19,52.5862506005887\r
2023-06-24,55.597715883053034\r
2023-06-26,55.597715883053034\r
2023-06-29,25.53901580451542\r
2023-07-01,24.84219432388818\r
2023-07-11,43.76326349039044\r
`;export{r as default};