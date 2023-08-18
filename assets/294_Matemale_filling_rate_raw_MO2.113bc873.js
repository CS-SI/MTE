const r=`date,value\r
2017-01-03,31.835862204265965\r
2017-01-13,31.835862204265965\r
2017-03-07,6.868365477649722\r
2017-03-14,10.987798606045056\r
2017-03-17,10.483013667143718\r
2017-04-03,18.772701996098586\r
2017-04-06,20.5524909999589\r
2017-04-16,24.409077835122915\r
2017-04-23,28.311291508562842\r
2017-05-23,57.868358398088546\r
2017-05-26,62.975260722750924\r
2017-06-02,61.72060961707317\r
2017-06-05,63.710668586621026\r
2017-06-12,70.24143291183196\r
2017-06-15,70.69469015287147\r
2017-06-22,70.69469015287147\r
2017-07-05,73.57767969947382\r
2017-07-07,73.96808964809387\r
2017-07-10,74.079843121926\r
2017-07-12,73.90294277265538\r
2017-07-17,76.96080204312862\r
2017-07-22,78.26056456774772\r
2017-07-25,78.17418257715086\r
2017-07-27,77.30369725855125\r
2017-07-30,75.1554999963576\r
2017-08-04,76.00324328044398\r
2017-08-06,75.0053349300031\r
2017-08-11,74.59322861179139\r
2017-08-14,74.76166732624134\r
2017-08-19,72.69878021704133\r
2017-08-21,73.44779436297402\r
2017-08-24,70.46786202875937\r
2017-08-26,68.31059571241342\r
2017-08-29,69.98830585176101\r
2017-09-05,68.4532716021471\r
2017-09-08,67.23688289146415\r
2017-09-10,68.9897580291136\r
2017-09-13,63.54779245602482\r
2017-09-20,62.346207393956554\r
2017-09-23,62.346207393956554\r
2017-09-28,62.22758612309378\r
2017-10-03,51.932499931780065\r
2017-10-05,50.93301539405055\r
2017-10-08,51.31324341114005\r
2017-10-10,49.86160296231129\r
2017-10-13,48.698917394066065\r
2017-10-15,48.02026524497433\r
2017-10-18,47.902770852931404\r
2017-10-20,48.07171859465489\r
2017-10-23,47.8367494979882\r
2017-10-25,47.405176971337475\r
2017-10-28,47.44166788483879\r
2017-10-30,47.84408274249199\r
2017-11-07,45.34344697249302\r
2017-11-12,44.535609736365714\r
2017-11-14,40.76294496609025\r
2017-11-17,43.37348611551269\r
2017-11-19,41.6821862922131\r
2017-11-22,39.881460993723486\r
2017-11-24,40.26080766993017\r
2017-11-27,41.25496603229016\r
2017-11-29,41.07260901881912\r
2017-12-07,43.477806194571606\r
2017-12-09,38.22787395663338\r
2017-12-12,37.453906929144324\r
2017-12-14,37.453906929144324\r
2017-12-17,36.46701113732253\r
2017-12-19,2.914099936665211\r
2017-12-24,4.325136678999514\r
2017-12-27,4.325136678999514\r
2018-01-03,2.426668398844462\r
2018-01-11,1.713429149618543\r
2018-01-18,9.158568557974927\r
2018-01-21,9.158568557974927\r
2018-01-23,12.13317602139754\r
2018-01-28,11.461958356312289\r
2018-01-31,16.424335967568986\r
2018-02-02,16.424335967568986\r
2018-02-07,15.662328220353094\r
2018-03-19,6.597660107499394\r
2018-03-27,6.597660107499394\r
2018-04-18,11.172177367748738\r
2018-04-21,11.142431762994011\r
2018-04-26,13.568033698600965\r
2018-05-11,46.23118196214886\r
2018-05-18,46.23118196214886\r
2018-05-21,46.23118196214886\r
2018-06-17,98.23907274558151\r
2018-06-20,98.46756062148806\r
2018-06-22,98.11950458358861\r
2018-06-25,97.46871757846533\r
2018-06-27,96.92820565053167\r
2018-07-02,95.77703606077597\r
2018-07-05,95.3165366989261\r
2018-07-07,96.46468113784344\r
2018-07-10,96.29251737480114\r
2018-07-12,98.51111506998241\r
2018-07-15,97.03617640411805\r
2018-07-17,98.42401671708365\r
2018-07-20,98.11950458358861\r
2018-07-25,98.36960166353052\r
2018-07-27,99.9982432075992\r
2018-07-30,100.0\r
2018-08-01,100.0\r
2018-08-04,100.0\r
2018-08-06,100.0\r
2018-08-11,99.97628528249533\r
2018-08-19,99.17662720325048\r
2018-08-21,99.22035305517505\r
2018-08-24,97.26312920340828\r
2018-08-26,96.6585666355386\r
2018-08-29,96.6585666355386\r
2018-08-31,97.04697709885988\r
2018-09-03,93.49726373642736\r
2018-09-05,96.29251737480114\r
2018-09-08,95.22030686221852\r
2018-09-10,95.22030686221852\r
2018-09-13,95.95942912758166\r
2018-09-18,96.31402863805238\r
2018-09-20,95.01732971707642\r
2018-09-23,91.69716625604907\r
2018-09-25,92.02207827502244\r
2018-09-28,92.71592267738589\r
2018-09-30,92.71592267738589\r
2018-10-03,91.86478422074049\r
2018-10-05,91.18487851095799\r
2018-10-13,87.2143503810815\r
2018-10-20,85.58260489989075\r
2018-10-23,87.15323724887371\r
2018-10-25,87.2449157417962\r
2018-10-30,87.2449157417962\r
2018-11-04,84.81819834464345\r
2018-11-12,79.85349605664132\r
2018-11-14,79.56256491831842\r
2018-11-17,79.07897120395263\r
2018-11-22,77.27509078188199\r
2018-11-24,77.56141641130375\r
2018-11-27,75.6635212719285\r
2018-12-02,75.63524870948689\r
2018-12-04,74.28496440133591\r
2018-12-07,71.86230599364686\r
2018-12-09,68.37299636155257\r
2018-12-14,65.21289555512445\r
2018-12-17,62.78788372029299\r
2018-12-19,61.64475893351353\r
2018-12-27,60.797045955478936\r
2018-12-29,53.736521161874585\r
2019-01-01,48.189439536815904\r
2019-01-03,48.218894402908354\r
2019-01-06,43.19298958502921\r
2019-01-11,43.33874324123746\r
2019-01-16,41.437765393455514\r
2019-01-23,35.982105802734395\r
2019-01-26,20.40961668989919\r
2019-03-14,19.979717983996586\r
2019-03-17,20.487899552039117\r
2019-03-19,20.993732428362485\r
2019-03-22,20.728371887303428\r
2019-03-24,20.863148962073268\r
2019-03-27,20.835224814480704\r
2019-03-29,21.27035138288964\r
2019-04-01,21.61535437568028\r
2019-04-08,22.38216932552342\r
2019-04-28,38.88601876251448\r
2019-05-01,41.437765393455514\r
2019-05-06,41.09284907065239\r
2019-05-13,45.585920699070776\r
2019-05-16,45.55735763147399\r
2019-05-23,56.55814893316426\r
2019-05-28,57.73822371940693\r
2019-05-31,65.79645340846464\r
2019-06-02,67.88354562514627\r
2019-06-07,67.70604072223271\r
2019-06-12,69.51054181079442\r
2019-06-27,76.30591798204101\r
2019-06-30,76.078850217259\r
2019-07-02,76.91324370243888\r
2019-07-05,77.294161122293\r
2019-07-07,78.83777949986559\r
2019-07-10,78.57774541953846\r
2019-07-12,78.76068333279949\r
2019-07-15,79.1658989627773\r
2019-07-17,79.25287900723617\r
2019-07-20,79.05000690243217\r
2019-07-22,78.27016579059034\r
2019-07-25,77.58052540030553\r
2019-08-01,75.72951308040174\r
2019-08-04,77.92492793706617\r
2019-08-06,77.46591012000894\r
2019-08-09,77.6187511095339\r
2019-08-11,77.82917679124114\r
2019-08-14,77.4277256407661\r
2019-08-16,76.93226510745448\r
2019-08-21,76.84668906216548\r
2019-08-24,74.5090872442529\r
2019-08-26,74.74294164226\r
2019-08-29,74.67742197059893\r
2019-08-31,72.59738633058893\r
2019-09-03,71.1860012084256\r
2019-09-05,69.51054181079442\r
2019-09-08,68.7480553977444\r
2019-09-13,66.61118602771221\r
2019-09-15,66.0499209133262\r
2019-09-18,65.63067773057533\r
2019-09-20,65.36939271526458\r
2019-09-28,65.23027398788021\r
2019-09-30,62.890051464946936\r
2019-10-03,59.78163854594199\r
2019-10-05,58.04755550228345\r
2019-10-08,57.04149659444432\r
2019-10-10,57.13035462759343\r
2019-10-13,56.55814893316426\r
2019-10-15,56.614423478890394\r
2019-10-25,55.08991005342202\r
2019-10-30,57.45411317329421\r
2019-11-02,57.34068374837784\r
2019-11-04,57.41358857695562\r
2019-11-09,58.35779234448882\r
2019-11-19,56.8156541344954\r
2019-11-24,58.227055964330575\r
2019-11-27,59.48379832972904\r
2019-11-29,59.89768525944656\r
2019-12-02,58.17807120270931\r
2019-12-07,58.603355775905364\r
2019-12-09,56.96078226661187\r
2019-12-14,36.35964841345674\r
2019-12-17,50.35049067603317\r
2019-12-22,53.3465492980942\r
2019-12-24,59.04679290925886\r
2019-12-27,62.736833947619395\r
2019-12-29,62.736833947619395\r
2020-01-01,61.51845458921663\r
2020-01-06,66.0499209133262\r
2020-01-08,64.99587901005162\r
2020-01-11,65.71789954858053\r
2020-01-16,62.6603019082412\r
2020-01-28,41.64139482336291\r
2020-01-31,36.21466875076341\r
2020-02-02,43.62408482282224\r
2020-02-05,44.4651259675461\r
2020-02-07,44.4651259675461\r
2020-02-10,46.73648642180432\r
2020-02-15,48.09377926490276\r
2020-02-17,49.27838294033849\r
2020-02-20,48.38107231060608\r
2020-02-22,45.564497479561375\r
2020-02-27,45.68596862235385\r
2020-03-01,45.67166871018842\r
2020-03-08,38.99084384410587\r
2020-03-11,36.923645947875045\r
2020-03-13,36.923645947875045\r
2020-03-18,18.962175916434703\r
2020-03-21,37.038290858421604\r
2020-03-28,37.33855903515165\r
2020-03-31,37.33855903515165\r
2020-04-05,37.98830989617848\r
2020-04-07,34.53027292107102\r
2020-04-10,35.83169263358862\r
2020-04-15,35.81917377158499\r
2020-04-25,40.97822761677502\r
2020-05-07,83.46962278373526\r
2020-05-17,96.27100874199093\r
2020-05-20,95.19892968027146\r
2020-05-22,97.33884464049817\r
2020-05-25,99.2750252084791\r
2020-05-27,98.62004732451565\r
2020-05-30,98.62004732451565\r
2020-06-06,99.05643551412531\r
2020-06-21,99.87750728661615\r
2020-06-24,100.0\r
2020-06-26,100.0\r
2020-07-01,99.78974949665029\r
2020-07-04,99.88847997981861\r
2020-07-06,98.8817536623284\r
2020-07-09,99.23128616684413\r
2020-07-11,99.10013235111467\r
2020-07-14,99.19848881027617\r
2020-07-16,100.0\r
2020-07-19,100.0\r
2020-07-21,100.0\r
2020-07-24,100.0\r
2020-07-26,100.0\r
2020-07-29,99.84459316635323\r
2020-07-31,100.0\r
2020-08-03,99.47198148648195\r
2020-08-05,98.53289624840163\r
2020-08-08,98.50022546932618\r
2020-08-10,98.71814270665365\r
2020-08-13,98.80538342492245\r
2020-08-15,98.33696053877452\r
2020-08-20,96.79872760438803\r
2020-08-23,94.38854329952751\r
2020-08-25,93.14838439739081\r
2020-08-30,93.25403001027851\r
2020-09-02,92.43173236501589\r
2020-09-04,92.24253746531832\r
2020-09-07,91.41469090099672\r
2020-09-12,89.6057311149959\r
2020-09-14,90.40380644191802\r
2020-09-17,90.99708571370118\r
2020-09-19,90.99708571370118\r
2020-09-24,92.3686438182686\r
2020-09-27,92.3686438182686\r
2020-09-29,91.16400217786732\r
2020-10-04,90.55972660172269\r
2020-10-12,92.85292540708042\r
2020-10-14,94.91059487666634\r
2020-10-17,98.1303711224375\r
2020-10-24,97.55535220583634\r
2020-11-01,93.92110523847677\r
2020-11-08,91.95914297543813\r
2020-11-11,92.62113950467997\r
2020-11-16,92.62113950467997\r
2020-11-18,87.0921475676613\r
2020-11-21,89.21330306015787\r
2020-11-23,87.31625771898773\r
2020-12-03,84.08749938177716\r
2020-12-18,2.321839743772976\r
2021-02-19,31.432402793108196\r
2021-02-24,27.660624028566268\r
2021-03-01,24.464921331254498\r
2021-03-11,23.23272008667026\r
2021-03-13,25.011773876236536\r
2021-03-16,25.596483884253317\r
2021-03-21,25.362748398975405\r
2021-03-23,28.460075291601804\r
2021-03-28,28.609286109084113\r
2021-03-31,29.272013037856542\r
2021-04-02,28.609286109084113\r
2021-04-05,28.825567175297905\r
2021-04-07,29.507901551482234\r
2021-04-12,33.98666265191242\r
2021-04-15,36.66323645166119\r
2021-05-17,58.06386118932102\r
2021-05-20,59.516851473441804\r
2021-05-25,60.488105276297645\r
2021-05-27,60.488105276297645\r
2021-05-30,59.8562258613706\r
2021-06-09,71.05844539011052\r
2021-06-11,71.05844539011052\r
2021-06-14,72.00899445929821\r
2021-06-16,71.55113662441681\r
2021-06-19,71.55113662441681\r
2021-06-21,75.90879247979343\r
2021-06-26,79.14657716471876\r
2021-06-29,78.94385415870627\r
2021-07-01,77.57097058367656\r
2021-07-09,74.74294164226\r
2021-07-11,76.42906771665233\r
2021-07-14,76.63772265839009\r
2021-07-16,75.7106550641496\r
2021-07-19,76.38168956801502\r
2021-07-21,78.04950078568112\r
2021-07-26,77.59963696636217\r
2021-07-29,78.94385415870627\r
2021-08-10,74.90219181594394\r
2021-08-13,74.93968941267013\r
2021-08-15,73.38289880407538\r
2021-08-18,73.38289880407538\r
2021-08-20,72.74489395873104\r
2021-08-23,71.35931301486855\r
2021-08-25,70.94011283211991\r
2021-08-28,69.4116077041776\r
2021-08-30,69.44757481743783\r
2021-09-04,68.67652897852848\r
2021-09-19,60.01385518665248\r
2021-09-22,60.63829311827932\r
2021-09-27,60.63829311827932\r
2021-09-29,61.58579925780822\r
2021-10-02,60.13014835021677\r
2021-10-07,51.81751594390372\r
2021-10-09,52.07066491516756\r
2021-10-12,50.743481807322624\r
2021-10-14,51.221847486578795\r
2021-10-17,49.96668121845402\r
2021-10-19,48.211529762654706\r
2021-10-22,44.973973676461796\r
2021-10-24,42.1186562324584\r
2021-10-27,41.410656087182524\r
2021-11-06,33.61075689255533\r
2021-11-13,32.94347658996175\r
2021-11-18,34.34650584294252\r
2021-11-21,35.70661177106107\r
2021-11-26,34.74534652816117\r
2021-12-03,26.56974521885927\r
2021-12-06,26.490091064054415\r
2021-12-08,26.56974521885927\r
2021-12-11,26.051703263548813\r
2021-12-16,5.56278578930889\r
2021-12-18,5.299840968026713\r
2021-12-21,5.676308455175432\r
2021-12-23,5.956238469584235\r
2021-12-26,5.664899676559695\r
2022-01-15,25.362748398975405\r
2022-01-17,17.521993966666596\r
2022-01-20,20.08900314142621\r
2022-01-22,19.62679364956845\r
2022-01-25,19.032943824814684\r
2022-01-27,11.381612957984329\r
2022-01-30,62.60081234389744\r
2022-02-01,21.091962820175702\r
2022-02-06,24.592098236622327\r
2022-02-09,26.718783351109455\r
2022-02-21,11.145734686362491\r
2022-02-24,15.23185864693117\r
2022-02-26,14.92784325972846\r
2022-03-01,13.961042485282698\r
2022-03-03,13.774895499885586\r
2022-03-23,6.845578976812019\r
2022-03-26,6.957373897244878\r
2022-04-05,6.233945084502399\r
2022-04-10,4.382394808749946\r
2022-04-17,6.5062874304440435\r
2022-04-22,6.5062874304440435\r
2022-04-25,6.5062874304440435\r
2022-05-12,15.001589215554567\r
2022-05-15,14.773238669512804\r
2022-05-17,18.676164531233162\r
2022-05-20,16.559419079057772\r
2022-05-22,21.340994386303926\r
2022-05-27,31.08964874942387\r
2022-05-30,24.393859914823544\r
2022-06-01,36.04487977250551\r
2022-06-04,11.228481984210621\r
2022-06-06,27.535819333267085\r
2022-06-09,10.870155853644864\r
2022-06-11,10.870155853644864\r
2022-06-16,8.644593945945802\r
2022-06-19,7.997334355392645\r
2022-06-24,8.49299633301872\r
2022-06-26,46.490677242806505\r
2022-06-29,46.490677242806505\r
2022-07-01,45.90793069678295\r
2022-07-04,45.91510056979418\r
2022-07-09,6.5136700425565826\r
2022-07-11,47.87342187439035\r
2022-07-14,12.979244816543739\r
2022-07-16,45.5430797728682\r
2022-07-19,45.5430797728682\r
2022-07-21,45.36481323810065\r
2022-07-24,9.7562708757021\r
2022-07-26,45.37193655118416\r
2022-07-31,45.97965701212338\r
2022-08-03,44.627330012946146\r
2022-08-05,45.65022343695535\r
2022-08-20,47.04837927985138\r
2022-08-23,46.678585123707435\r
2022-08-28,47.070181632056475\r
2022-08-30,47.25208297326103\r
2022-09-02,47.44166788483879\r
2022-09-19,46.96122516466972\r
2022-09-22,47.46356981150361\r
2022-09-27,47.46356981150361\r
2022-10-02,48.46227306823437\r
2022-10-04,48.89907700621996\r
2022-10-09,48.46227306823437\r
2022-10-12,48.780409648343856\r
2022-10-22,49.629360558745454\r
2022-11-01,49.11456398444552\r
2022-11-06,47.697534762588404\r
2022-11-08,47.697534762588404\r
2022-11-11,45.98683301535179\r
2022-11-13,43.206859304982345\r
2022-11-16,43.51957264287263\r
2022-11-18,41.11984429831866\r
2022-11-23,41.451323688804045\r
2022-12-03,21.087279489739498\r
2022-12-06,31.75963271096198\r
2022-12-23,29.210403956603347\r
2022-12-26,29.210403956603347\r
2022-12-28,30.187584777661396\r
2023-01-05,28.947965373885854\r
2023-01-07,29.457266752254093\r
2023-01-10,29.457266752254093\r
2023-01-12,28.27278761704113\r
2023-01-17,28.636964621390266\r
2023-01-20,27.476239337755192\r
2023-01-22,27.476239337755192\r
2023-01-27,18.137135113397537\r
2023-02-14,37.04466572538843\r
2023-02-19,16.641582513687723\r
2023-02-24,37.300153017059365\r
2023-02-26,17.097464601152204\r
2023-03-01,19.943362111057425\r
2023-03-03,4.532390347617934\r
2023-03-06,12.394220249027693\r
2023-03-13,20.49712008744673\r
2023-03-16,22.756420529842238\r
2023-03-28,22.440270747417472\r
2023-04-02,22.440270747417472\r
2023-04-05,22.92275614821368\r
2023-04-07,22.844397952893793\r
2023-04-12,23.569843726935012\r
2023-04-15,23.475379725545267\r
2023-04-17,23.699446876481918\r
2023-04-20,23.87452724452565\r
2023-04-27,24.444606522123795\r
2023-05-02,31.310169761570457\r
2023-05-10,31.310169761570457\r
2023-05-12,31.310169761570457\r
2023-05-17,35.77537661328335\r
2023-05-27,35.77537661328335\r
2023-06-16,52.58671251621592\r
2023-06-19,52.58671251621592\r
2023-06-24,55.59820425127686\r
2023-06-26,55.59820425127686\r
2023-06-29,25.539240138259867\r
2023-07-01,24.842412536779218\r
2023-07-11,43.763647905234116\r
2023-07-14,2.0694936145626444\r
2023-07-16,22.74665673145415\r
2023-07-19,22.74665673145415\r
2023-07-21,41.845570844898866\r
`;export{r as default};
