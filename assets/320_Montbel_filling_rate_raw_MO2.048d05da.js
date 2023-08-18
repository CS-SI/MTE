const n=`date,value\r
2017-01-03,25.550211538530366\r
2017-01-13,27.02313441038438\r
2017-02-15,42.101316496745625\r
2017-02-22,43.56037324332914\r
2017-02-25,41.24808611889848\r
2017-03-07,49.0903066115127\r
2017-03-14,57.10303120101861\r
2017-03-17,58.34043147894062\r
2017-03-27,59.581569352334654\r
2017-04-06,80.61531545749628\r
2017-04-23,83.34650300603896\r
2017-05-16,87.06050400721058\r
2017-05-23,88.741299195491\r
2017-05-26,91.31302861641115\r
2017-06-02,94.01988991772436\r
2017-06-05,93.67975640441492\r
2017-06-12,94.48354285720643\r
2017-06-15,93.13693083628301\r
2017-06-22,94.37888581831434\r
2017-06-25,92.04293841770847\r
2017-07-02,92.38883697810594\r
2017-07-05,75.15155097064111\r
2017-07-07,75.15155097064111\r
2017-07-10,75.15155097064111\r
2017-07-12,75.15155097064111\r
2017-07-17,82.99392274352431\r
2017-07-22,82.99392274352431\r
2017-07-25,83.00665251169809\r
2017-07-27,82.4390869468858\r
2017-07-30,75.81257045411752\r
2017-08-04,81.73469813675578\r
2017-08-06,82.33343120401835\r
2017-08-11,78.00716670901396\r
2017-08-14,80.72395174915056\r
2017-08-19,71.02086069340679\r
2017-08-21,71.02086069340679\r
2017-08-24,65.26772748901061\r
2017-08-26,68.98941675710746\r
2017-08-29,78.41805860002505\r
2017-09-05,64.473113064994\r
2017-09-08,67.12595114041989\r
2017-09-10,69.34694671600568\r
2017-09-13,37.53079041157681\r
2017-09-20,36.81938627698871\r
2017-09-23,34.47831122609381\r
2017-09-28,34.92021656868237\r
2017-10-03,36.1911053540122\r
2017-10-05,28.671948208455746\r
2017-10-08,31.87808592735025\r
2017-10-10,27.847979027608044\r
2017-10-13,30.687321566712413\r
2017-10-15,27.394282539029124\r
2017-10-18,29.881060646136504\r
2017-10-20,26.69603531491417\r
2017-10-23,30.36637638179173\r
2017-10-25,27.445529838223585\r
2017-10-28,25.01297470739426\r
2017-10-30,24.078436885094444\r
2017-11-07,27.206046187891186\r
2017-11-12,27.206046187891186\r
2017-11-14,28.04803543245626\r
2017-11-17,27.786940143757334\r
2017-11-19,26.563051685428636\r
2017-11-22,25.203976463412847\r
2017-11-24,25.128370106307525\r
2017-11-27,27.615949316506917\r
2017-11-29,24.296081851338975\r
2017-12-07,28.86081153623606\r
2017-12-24,30.322081793069223\r
2017-12-27,27.74003650104654\r
2018-01-01,39.87175052647957\r
2018-01-03,39.87175052647957\r
2018-01-11,39.87175052647957\r
2018-01-18,59.14626816602144\r
2018-01-21,59.14626816602144\r
2018-01-23,65.43922082151357\r
2018-01-28,71.8031463714463\r
2018-01-31,75.88935461117985\r
2018-02-02,76.30633819399839\r
2018-02-07,78.11388616413133\r
2018-02-25,96.39651959092431\r
2018-02-27,96.76039668545965\r
2018-03-02,96.6820313340135\r
2018-03-07,96.6820313340135\r
2018-03-09,98.94525774721252\r
2018-03-19,99.5857309352562\r
2018-03-27,99.5857309352562\r
2018-04-01,99.26755215530333\r
2018-04-06,99.27690248577034\r
2018-04-11,99.27690248577034\r
2018-04-21,100.0\r
2018-04-26,100.0\r
2018-05-11,99.66067665923569\r
2018-05-18,99.67004702127751\r
2018-05-21,99.8997699102267\r
2018-06-02,99.78721679675547\r
2018-06-20,99.0759754639037\r
2018-06-22,99.0759754639037\r
2018-06-25,100.0\r
2018-06-27,100.0\r
2018-07-02,99.57168201061252\r
2018-07-05,99.46868935501037\r
2018-07-07,99.89038786006932\r
2018-07-10,99.76846462364595\r
2018-07-12,99.91853544188511\r
2018-07-15,99.78721679675547\r
2018-07-17,99.90446111422263\r
2018-07-20,99.66067665923569\r
2018-07-25,99.50613455232255\r
2018-07-27,100.0\r
2018-07-30,99.80597087813989\r
2018-08-01,99.9983102433067\r
2018-08-04,99.89038786006932\r
2018-08-06,99.82003769150151\r
2018-08-11,99.60914819461242\r
2018-08-14,99.82472686782899\r
2018-08-16,100.0\r
2018-08-19,99.89038786006932\r
2018-08-21,99.29560457730598\r
2018-08-24,99.80597087813989\r
2018-08-26,99.51081573855849\r
2018-08-29,99.51081573855849\r
2018-08-31,99.30028039823458\r
2018-09-03,98.27912067143951\r
2018-09-05,98.66080337386065\r
2018-09-08,98.01427654266622\r
2018-09-10,98.01427654266622\r
2018-09-13,97.96785255803421\r
2018-09-20,98.09786972600145\r
2018-09-23,98.17220717254365\r
2018-09-25,97.97713640226297\r
2018-09-28,98.53969529661578\r
2018-09-30,98.53503890212544\r
2018-10-03,98.15361995244099\r
2018-10-05,97.62468515794288\r
2018-10-13,92.37085092147976\r
2018-10-20,90.80886386722119\r
2018-10-23,90.13751558784965\r
2018-10-25,90.46173788526805\r
2018-10-30,90.46173788526805\r
2018-11-04,88.97465112866911\r
2018-11-12,85.60407340757037\r
2018-11-14,85.60407340757037\r
2018-11-24,88.95262261988486\r
2018-11-27,87.75872052646119\r
2018-12-02,87.99067072115058\r
2018-12-04,87.97315348010918\r
2018-12-07,87.29145375337052\r
2018-12-17,86.09240023857028\r
2018-12-27,88.1703313294566\r
2018-12-29,88.11334428734212\r
2019-01-03,76.20096346462518\r
2019-01-06,78.43863387854519\r
2019-01-11,77.80215900725234\r
2019-01-16,78.1015683490118\r
2019-01-23,75.19578958684954\r
2019-01-26,75.19578958684954\r
2019-02-12,83.99856166762592\r
2019-02-15,94.72039030025653\r
2019-02-17,92.483294884383\r
2019-02-20,93.25891767380638\r
2019-02-22,92.97441619562717\r
2019-02-25,94.37888581831434\r
2019-02-27,92.98344075519492\r
2019-03-02,93.44884683129622\r
2019-03-07,95.18133851488432\r
2019-03-09,94.93474022750047\r
2019-03-12,95.24075650415307\r
2019-03-14,96.14822055217574\r
2019-03-17,96.32751285309732\r
2019-03-19,96.32751285309732\r
2019-03-22,96.93569061427351\r
2019-03-24,96.53000849343036\r
2019-03-27,97.13887717487867\r
2019-03-29,97.43020449104583\r
2019-04-01,97.43020449104583\r
2019-04-08,97.4163210498429\r
2019-04-13,99.14604125233764\r
2019-04-28,99.09932774672593\r
2019-05-01,98.6328482070361\r
2019-05-06,98.59558132377347\r
2019-05-13,99.18342063945276\r
2019-05-16,99.09465705176578\r
2019-05-23,99.70753323970442\r
2019-05-28,99.70753323970442\r
2019-05-31,100.0\r
2019-06-02,99.93730288202659\r
2019-06-07,99.93730288202659\r
2019-06-12,100.0\r
2019-06-17,98.84728078011747\r
2019-06-22,98.90792699101625\r
2019-06-25,98.90792699101625\r
2019-06-27,99.06196552457163\r
2019-06-30,99.10399856088486\r
2019-07-02,99.10399856088486\r
2019-07-05,99.62319998121669\r
2019-07-07,99.67941786034157\r
2019-07-10,99.48273040972286\r
2019-07-12,99.63725284107916\r
2019-07-15,99.78252857457848\r
2019-07-17,99.46868935501037\r
2019-07-20,99.46868935501037\r
2019-07-22,99.18342063945276\r
2019-07-25,99.01527347440623\r
2019-08-01,98.53503890212544\r
2019-08-04,98.47917146121162\r
2019-08-06,98.47917146121162\r
2019-08-09,98.47451661553549\r
2019-08-11,98.03284947101321\r
2019-08-14,97.72663979294478\r
2019-08-16,97.10191702882295\r
2019-08-21,96.89877235243023\r
2019-08-24,95.94615916940252\r
2019-08-26,95.52441085074526\r
2019-08-29,95.80852200357455\r
2019-08-31,92.6723675003724\r
2019-09-03,92.62282827263616\r
2019-09-05,92.56430040361812\r
2019-09-08,91.19242704494287\r
2019-09-13,87.55767395977833\r
2019-09-15,83.29122613624628\r
2019-09-18,85.67312563106958\r
2019-09-20,73.15953923829574\r
2019-09-28,73.56039366403779\r
2019-09-30,73.56039366403779\r
2019-10-03,69.94892215298692\r
2019-10-05,69.94892215298692\r
2019-10-08,64.66571225628792\r
2019-10-10,64.66200549208214\r
2019-10-13,62.465946943107795\r
2019-10-15,62.47322317965519\r
2019-10-25,53.60400311733805\r
2019-10-30,40.49056111693823\r
2019-11-02,40.49056111693823\r
2019-11-04,40.33250386676431\r
2019-11-09,40.33250386676431\r
2019-11-12,44.00755578574132\r
2019-11-17,43.70716037723231\r
2019-11-19,55.654177787614735\r
2019-11-24,55.63367470770638\r
2019-11-27,60.29306768767315\r
2019-11-29,60.29306768767315\r
2019-12-02,60.29306768767315\r
2019-12-07,59.773223245340745\r
2019-12-09,59.48586737039111\r
2019-12-17,80.33156424244227\r
2019-12-22,80.33156424244227\r
2019-12-24,81.78941334154501\r
2019-12-27,89.57053747094554\r
2019-12-29,89.32309358990051\r
2020-01-06,88.67091853029653\r
2020-01-08,88.5126725766381\r
2020-01-11,91.73357411426792\r
2020-01-16,89.7829272592639\r
2020-01-28,87.03437962707902\r
2020-01-31,90.92919059395733\r
2020-02-15,92.35736262332284\r
2020-02-17,95.00320500685278\r
2020-02-20,96.11605902654242\r
2020-02-22,94.69304536249882\r
2020-02-27,93.7296008854868\r
2020-03-01,94.68848828850052\r
2020-03-08,94.01988991772436\r
2020-03-11,96.45174424708382\r
2020-03-13,96.45174424708382\r
2020-03-18,98.25587324640857\r
2020-03-21,97.86112258549544\r
2020-03-28,98.15826657880943\r
2020-03-31,98.19544387755859\r
2020-04-05,98.42332117599011\r
2020-04-07,96.69585801556097\r
2020-04-10,98.95459162808635\r
2020-04-15,99.01060492494457\r
2020-04-25,99.49677253756808\r
2020-05-07,97.38855738122352\r
2020-05-17,97.59688934886451\r
2020-05-20,99.46400924191126\r
2020-05-22,98.58160820851185\r
2020-05-25,99.34236815149447\r
2020-05-27,99.2909288755957\r
2020-05-30,99.30495633838198\r
2020-06-06,99.31430857633514\r
2020-06-24,99.30028039823458\r
2020-06-26,99.30028039823458\r
2020-07-01,99.71221955366967\r
2020-07-04,99.36107691938786\r
2020-07-06,99.49209170904861\r
2020-07-09,99.44528998186127\r
2020-07-14,99.49677253756808\r
2020-07-16,99.49677253756808\r
2020-07-19,99.60446450424399\r
2020-07-21,99.50613455232255\r
2020-07-24,99.49209170904861\r
2020-07-26,99.5295416759044\r
2020-07-29,99.53422345834377\r
2020-07-31,98.83328836088344\r
2020-08-03,98.7913175384308\r
2020-08-05,98.0700010441475\r
2020-08-08,97.94000388338098\r
2020-08-10,97.14349772863724\r
2020-08-13,97.12039614985424\r
2020-08-15,96.76961839882193\r
2020-08-20,94.76597469680233\r
2020-08-23,92.75346262988143\r
2020-08-25,91.3264341185163\r
2020-08-30,84.2165260963279\r
2020-09-02,85.20330416368293\r
2020-09-04,75.15959330692502\r
2020-09-07,75.81661067628818\r
2020-09-12,70.31689031121941\r
2020-09-14,63.8125049816444\r
2020-09-17,66.91808658723208\r
2020-09-19,66.84258601676565\r
2020-09-24,65.63711310802009\r
2020-09-27,65.63711310802009\r
2020-09-29,64.77696868454511\r
2020-10-17,64.76212851082626\r
2020-10-24,65.39073061359352\r
2020-11-01,64.33256419839134\r
2020-11-08,71.72862973946641\r
2020-11-11,76.28201395050233\r
2020-11-16,76.28201395050233\r
2020-11-18,74.55771090820971\r
2020-11-21,74.01426836467981\r
2020-11-23,74.1858594093412\r
2020-12-03,69.9527900584027\r
2020-12-18,75.6308811092334\r
2020-12-21,75.6308811092334\r
2020-12-26,73.11991520130444\r
2020-12-28,73.11991520130444\r
2021-02-06,96.69585801556097\r
2021-02-11,98.50710303715654\r
2021-02-14,98.50710303715654\r
2021-02-19,98.56297905621912\r
2021-02-24,99.30963239774869\r
2021-03-01,97.18046644281412\r
2021-03-13,98.63750710362376\r
2021-03-16,98.65614388150522\r
2021-03-21,98.64682525425735\r
2021-03-23,99.52486001270667\r
2021-03-28,99.58104784112837\r
2021-03-31,99.48273040972286\r
2021-04-02,99.75908925268503\r
2021-04-05,99.65130677421246\r
2021-04-07,99.60914819461242\r
2021-04-12,99.65599165709696\r
2021-04-15,99.73096600213283\r
2021-04-20,99.80597087813989\r
2021-04-22,99.87162519107974\r
2021-05-02,98.22798026713909\r
2021-05-12,99.98892318327404\r
2021-05-17,99.98892318327404\r
2021-05-20,99.97953660039003\r
2021-05-25,99.24417841539982\r
2021-05-27,100.0\r
2021-05-30,100.0\r
2021-06-06,100.0\r
2021-06-09,98.92192513072943\r
2021-06-11,98.92192513072943\r
2021-06-14,99.29560457730598\r
2021-06-16,99.10399856088486\r
2021-06-19,99.70753323970442\r
2021-06-21,99.83410557829706\r
2021-06-26,99.31430857633514\r
2021-06-29,99.19276667829396\r
2021-07-01,100.0\r
2021-07-11,99.7731524880242\r
2021-07-14,99.84348476585247\r
2021-07-16,99.5857309352562\r
2021-07-19,99.61383200423036\r
2021-07-21,99.6747323811815\r
2021-07-26,99.41721466877416\r
2021-07-29,99.42657262954309\r
2021-07-31,99.57168201061252\r
2021-08-10,96.88954397674905\r
2021-08-13,96.88954397674905\r
2021-08-15,96.88954397674905\r
2021-08-18,96.88954397674905\r
2021-08-20,96.97261649088712\r
2021-08-23,82.5278944714966\r
2021-08-25,82.60828874989964\r
2021-08-28,79.10272046802405\r
2021-08-30,78.71050149930163\r
2021-09-04,73.32211932080357\r
2021-09-22,64.45461030419864\r
2021-09-27,59.698651574107856\r
2021-09-29,59.698651574107856\r
2021-10-02,59.702201463100366\r
2021-10-12,50.185665353669286\r
2021-10-14,45.348660478320305\r
2021-10-17,45.91953832997479\r
2021-10-19,44.42090677765055\r
2021-10-22,44.42090677765055\r
2021-10-24,42.78300971136568\r
2021-10-27,41.81975860837186\r
2021-11-06,39.258096851451334\r
2021-12-16,58.87111882984548\r
2021-12-18,61.041472471752854\r
2021-12-21,58.84293766095009\r
2021-12-23,59.08977063971581\r
2021-12-26,59.08977063971581\r
2022-01-12,82.57020196621995\r
2022-01-15,85.35831984814473\r
2022-01-17,85.35831984814473\r
2022-01-20,85.35831984814473\r
2022-01-22,84.51619101301063\r
2022-01-25,84.34060306683978\r
2022-01-27,91.460547746797\r
2022-01-30,91.50974944427047\r
2022-02-01,91.28622080879019\r
2022-02-06,92.25398776930851\r
2022-02-09,92.31690412803682\r
2022-03-01,91.80974194938857\r
2022-03-03,94.06529148738312\r
2022-03-08,94.48809458794251\r
2022-03-23,95.87732721333018\r
2022-03-26,95.87732721333018\r
2022-04-05,96.53000849343036\r
2022-04-10,96.53000849343036\r
2022-04-17,97.93536285439704\r
2022-04-22,98.43728213899348\r
2022-04-25,98.39074976521736\r
2022-05-17,98.29772075556146\r
2022-05-20,98.29772075556146\r
2022-05-22,98.94059098555094\r
2022-05-27,98.69342315671362\r
2022-05-30,98.59558132377347\r
2022-06-01,98.40936128516711\r
2022-06-04,98.60955551137093\r
2022-06-06,98.4326283655271\r
2022-06-09,98.46986188899561\r
2022-06-11,98.46986188899561\r
2022-06-14,82.15187493253549\r
2022-06-16,87.0561496490447\r
2022-06-29,82.70142981530307\r
2022-07-01,83.53799936106037\r
2022-07-04,82.82005518705621\r
2022-07-09,82.82005518705621\r
2022-07-11,94.32885465238571\r
2022-07-14,95.14478357773812\r
2022-07-16,94.77965233151856\r
2022-07-19,94.64292407966678\r
2022-07-21,91.18349702833206\r
2022-07-24,86.62130927167608\r
2022-07-26,86.70818303071833\r
2022-07-31,78.30289104974256\r
2022-08-03,67.75163984565003\r
2022-08-05,67.97232571094702\r
2022-08-08,61.2860507436765\r
2022-08-10,61.39051727622849\r
2022-08-13,53.51697343960748\r
2022-08-15,54.05375524170134\r
2022-08-20,48.64438688810739\r
2022-08-23,33.289761451099785\r
2022-08-28,33.39593641572102\r
2022-08-30,33.39593641572102\r
2022-09-02,33.77290232913294\r
2022-09-04,29.421751525682023\r
2022-09-12,27.14114025974535\r
2022-09-22,21.933313871998347\r
2022-09-27,21.933313871998347\r
2022-10-02,21.933313871998347\r
2022-10-04,18.515204949934798\r
2022-10-09,18.970174825697857\r
2022-10-12,18.970174825697857\r
2022-10-22,13.768605631029947\r
2022-11-01,13.865039216122286\r
2022-11-06,9.913983242392323\r
2022-11-08,9.913983242392323\r
2022-11-11,11.815513711269812\r
2022-11-13,11.35820665696127\r
2022-11-16,9.245802484992867\r
2022-11-18,9.245802484992867\r
2022-11-23,9.33395571341553\r
2023-02-01,19.398282626653433\r
2023-02-04,19.398282626653433\r
2023-02-06,19.398282626653433\r
2023-02-09,19.398282626653433\r
2023-02-11,20.571888190665884\r
2023-02-14,20.54797030732092\r
2023-02-16,20.06687250404737\r
2023-02-19,19.91375378128323\r
2023-02-24,19.348102243724572\r
2023-03-01,19.00262874769273\r
2023-03-03,18.575522160617336\r
2023-03-06,18.575522160617336\r
2023-03-16,24.886813933457137\r
2023-03-28,30.455070600224698\r
2023-04-02,30.455070600224698\r
2023-04-05,30.455070600224698\r
2023-04-07,33.520471465783125\r
2023-04-12,33.145037721023236\r
2023-04-15,33.145037721023236\r
2023-04-17,37.597085334896214\r
2023-04-20,36.92877440949099\r
2023-04-27,36.92877440949099\r
2023-05-02,48.5967404327898\r
2023-05-10,48.5967404327898\r
2023-05-12,48.5967404327898\r
2023-06-16,84.91950495330174\r
2023-06-19,84.91950495330174\r
2023-06-24,85.69039339760197\r
2023-06-26,85.69039339760197\r
2023-07-11,81.9283948300167\r
2023-07-14,83.25721947050182\r
2023-07-16,83.25721947050182\r
2023-07-19,83.25721947050182\r
2023-07-21,83.25721947050182\r
`;export{n as default};
