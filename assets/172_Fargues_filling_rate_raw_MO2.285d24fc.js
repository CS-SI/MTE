const r=`date,value\r
2017-01-19,24.456157013458586\r
2017-01-26,30.50715085436862\r
2017-01-29,15.827009540133858\r
2017-02-15,29.29513033441456\r
2017-02-18,30.980298583361993\r
2017-02-25,28.56228841408336\r
2017-03-10,41.5976232511925\r
2017-03-17,41.5976232511925\r
2017-03-30,40.384047328306174\r
2017-04-06,53.642180535958914\r
2017-04-09,47.35629348605032\r
2017-04-19,47.83421990642512\r
2017-04-29,46.29031537780403\r
2017-05-09,48.43523016661857\r
2017-05-16,50.385397148969936\r
2017-05-19,49.283374709947545\r
2017-05-26,52.00018521417488\r
2017-06-05,56.35225221558207\r
2017-06-18,58.73197479855956\r
2017-06-25,64.3489957312444\r
2017-06-28,64.3489957312444\r
2017-07-05,62.12441759625704\r
2017-08-02,49.52714502494646\r
2017-08-04,55.57067254924421\r
2017-08-07,55.57067254924421\r
2017-08-12,55.57067254924421\r
2017-08-14,49.7715571978264\r
2017-08-17,39.51347824320482\r
2017-08-22,40.16545594327964\r
2017-08-24,40.16545594327964\r
2017-08-27,29.29513033441456\r
2017-08-29,29.29513033441456\r
2017-09-01,36.75390939084872\r
2017-09-03,42.49227508388283\r
2017-09-06,38.43948966886014\r
2017-09-08,38.43948966886014\r
2017-10-08,35.108593758043654\r
2017-10-11,36.85807725985046\r
2017-10-13,35.51615457465902\r
2017-10-16,36.02913659624519\r
2017-10-18,36.02913659624519\r
2017-10-23,36.02913659624519\r
2017-10-26,31.36161541202683\r
2017-10-28,32.911802000725956\r
2017-10-31,33.80133757133552\r
2017-11-05,30.50715085436862\r
2017-11-07,33.01001437734302\r
2017-11-15,31.745422139713607\r
2017-11-17,33.40442574164936\r
2017-11-20,30.601469610505642\r
2017-11-22,30.980298583361993\r
2017-11-25,30.980298583361993\r
2017-11-27,28.290025249278305\r
2017-11-30,28.01915299845028\r
2017-12-05,28.01915299845028\r
2017-12-07,28.01915299845028\r
2017-12-12,31.84176310684967\r
2017-12-15,31.84176310684967\r
2017-12-20,38.974510145682686\r
2017-12-25,38.332958966248135\r
2017-12-27,38.332958966248135\r
2018-01-09,55.70053140663931\r
2018-01-11,55.70053140663931\r
2018-01-19,55.70053140663931\r
2018-01-24,76.87038444748244\r
2018-01-29,76.87038444748244\r
2018-01-31,76.87038444748244\r
2018-02-15,88.24405774091835\r
2018-02-25,19.1862559983665\r
2018-03-02,85.44450755054136\r
2018-03-07,85.44450755054136\r
2018-03-15,94.15974511688393\r
2018-03-17,94.15974511688393\r
2018-03-22,99.39364536407015\r
2018-03-30,100.0\r
2018-04-04,83.8201901722348\r
2018-04-06,84.14372310945944\r
2018-04-09,84.14372310945944\r
2018-04-19,80.30517495042945\r
2018-04-21,100.0\r
2018-04-24,85.44450755054136\r
2018-04-26,85.44450755054136\r
2018-05-06,75.03059220338037\r
2018-05-11,100.0\r
2018-05-21,100.0\r
2018-05-24,98.68706044764352\r
2018-06-03,33.40442574164936\r
2018-06-20,97.63222455588925\r
2018-06-23,100.0\r
2018-06-25,94.33177615461746\r
2018-07-08,96.9323597320203\r
2018-07-10,91.76889230303549\r
2018-07-13,93.13107638707898\r
2018-07-15,93.13107638707898\r
2018-07-18,93.13107638707898\r
2018-07-23,99.21674697016427\r
2018-07-25,90.754279115932\r
2018-07-30,88.07804488308795\r
2018-08-02,88.74309723572757\r
2018-08-04,89.74568226362165\r
2018-08-12,84.14372310945944\r
2018-08-19,90.58576196107863\r
2018-08-22,85.44450755054136\r
2018-08-27,85.28132715992814\r
2018-09-01,81.09698916004251\r
2018-09-03,73.5155836576585\r
2018-09-08,82.85358022617879\r
2018-09-11,88.74309723572757\r
2018-09-16,88.24405774091835\r
2018-09-18,91.93857973790978\r
2018-09-23,84.63026962712328\r
2018-09-26,87.58100693583114\r
2018-09-28,85.60785438684513\r
2018-10-03,82.21249592496657\r
2018-10-06,76.56210076108762\r
2018-10-13,76.71615998106067\r
2018-10-23,67.33221512945381\r
2018-11-15,73.36498943634315\r
2018-11-17,73.36498943634315\r
2018-11-22,73.96835505955622\r
2018-11-27,62.12441759625704\r
2019-02-03,85.1183131936548\r
2019-02-13,87.58100693583114\r
2019-02-15,83.98187351437441\r
2019-02-18,83.98187351437441\r
2019-02-20,77.9545844816\r
2019-02-23,78.42172255740434\r
2019-02-25,76.10091435687276\r
2019-02-28,76.10091435687276\r
2019-03-12,83.8201901722348\r
2019-03-20,78.11013171990737\r
2019-03-22,69.94674774054188\r
2019-03-25,75.94751589961687\r
2019-03-27,75.48831124723276\r
2019-03-30,80.9382946785386\r
2019-04-01,80.9382946785386\r
2019-04-09,81.89294995424805\r
2019-05-01,74.72627121291673\r
2019-05-06,82.05263994267457\r
2019-05-09,82.05263994267457\r
2019-05-11,82.05263994267457\r
2019-05-14,81.73342593798807\r
2019-05-16,81.73342593798807\r
2019-05-29,89.74568226362165\r
2019-06-08,90.58576196107863\r
2019-06-13,100.0\r
2019-06-28,100.0\r
2019-07-05,100.0\r
2019-07-08,97.45700648793705\r
2019-07-10,87.08546948446659\r
2019-07-13,86.92062367884807\r
2019-07-15,83.98187351437441\r
2019-07-20,83.98187351437441\r
2019-07-23,87.58100693583114\r
2019-07-25,91.43001914809881\r
2019-07-28,99.92534948636983\r
2019-08-04,66.04485975020287\r
2019-08-09,66.61538073523293\r
2019-08-14,66.32979296048889\r
2019-08-17,65.47695626639388\r
2019-08-22,62.26223077754815\r
2019-08-24,63.50988495343183\r
2019-08-29,63.23148693466257\r
2019-09-03,57.80028615828825\r
2019-09-06,57.80028615828825\r
2019-09-08,68.77817228675755\r
2019-09-11,59.1337040924824\r
2019-09-13,38.5461781299617\r
2019-09-16,35.82347277561834\r
2019-09-18,36.75390939084872\r
2019-09-21,36.75390939084872\r
2019-09-26,37.38127691664173\r
2019-10-11,30.50715085436862\r
2019-10-13,25.643744587488506\r
2019-10-26,26.33587064729927\r
2019-12-05,79.67470728986552\r
2019-12-07,79.67470728986552\r
2019-12-10,79.98960969924993\r
2019-12-15,68.77817228675755\r
2019-12-17,68.77817228675755\r
2019-12-20,68.77817228675755\r
2019-12-25,69.21515714567377\r
2019-12-27,73.5155836576585\r
2019-12-30,72.76425984294069\r
2020-01-09,76.10091435687276\r
2020-01-11,79.51750459603356\r
2020-01-14,78.42172255740434\r
2020-01-16,78.42172255740434\r
2020-01-19,79.20359612031318\r
2020-01-29,83.01426650269316\r
2020-01-31,91.26083338652083\r
2020-02-03,78.42172255740434\r
2020-02-05,79.20359612031318\r
2020-02-10,79.20359612031318\r
2020-02-15,83.8201901722348\r
2020-02-18,74.87834921925773\r
2020-02-20,80.46320619644061\r
2020-02-23,81.89294995424805\r
2020-03-21,87.74651950164555\r
2020-03-24,89.91336412914266\r
2020-03-26,86.59143195775559\r
2020-03-31,86.59143195775559\r
2020-04-03,87.91219881036145\r
2020-04-05,86.09889378316186\r
2020-04-08,82.69306005177219\r
2020-04-10,83.01426650269316\r
2020-04-15,91.76889230303549\r
2020-04-25,96.40922372214608\r
2020-04-30,96.40922372214608\r
2020-05-03,40.93329622541425\r
2020-05-05,92.96021765617209\r
2020-05-08,92.96021765617209\r
2020-05-18,86.09889378316186\r
2020-05-20,87.91219881036145\r
2020-05-25,92.27845642614446\r
2020-05-28,96.58343456526825\r
2020-05-30,92.78952631527629\r
2020-06-12,89.91336412914266\r
2020-06-14,92.10843443870627\r
2020-06-24,86.09889378316186\r
2020-07-04,86.09889378316186\r
2020-07-07,100.0\r
2020-07-09,95.19444507246374\r
2020-07-19,95.36748174521679\r
2020-07-22,95.36748174521679\r
2020-07-24,96.06130541475663\r
2020-07-27,84.30573897897176\r
2020-07-29,84.30573897897176\r
2020-08-03,84.30573897897176\r
2020-08-06,72.31544166794328\r
2020-08-08,51.87500553837695\r
2020-08-18,39.40536863903701\r
2020-08-21,39.40536863903701\r
2020-08-23,28.290025249278305\r
2020-08-31,28.38062504731596\r
2020-09-02,23.873617881179154\r
2020-09-05,24.87684697760756\r
2020-09-07,25.38673151986815\r
2020-09-10,27.30362018194169\r
2020-09-12,24.456157013458586\r
2020-09-17,24.456157013458586\r
2020-09-30,23.708553821437594\r
2020-10-12,24.961444485456525\r
2020-10-30,70.09355844260523\r
2020-11-09,69.36114695311099\r
2020-11-11,74.57435816185053\r
2020-11-14,69.94674774054188\r
2020-11-21,68.48766928447884\r
2020-11-26,69.50730089313994\r
2020-11-29,68.19782225443475\r
2020-12-26,73.2145599669142\r
2021-01-03,89.41081949714837\r
2021-01-08,89.41081949714837\r
2021-01-10,91.43001914809881\r
2021-01-15,90.08121301075207\r
2021-01-18,89.24363855430896\r
2021-02-24,90.24922892935443\r
2021-02-27,92.96021765617209\r
2021-03-01,90.08121301075207\r
2021-03-04,93.64465712607408\r
2021-03-09,87.74651950164555\r
2021-03-14,87.41566109179317\r
2021-03-21,83.3361374484214\r
2021-03-24,85.44450755054136\r
2021-03-29,83.01426650269316\r
2021-03-31,91.93857973790978\r
2021-04-03,90.754279115932\r
2021-04-05,90.4174119058388\r
2021-04-08,92.78952631527629\r
2021-04-15,95.88759790978428\r
2021-04-20,95.02157605671819\r
2021-04-23,95.19444507246374\r
2021-05-03,85.93504748184543\r
2021-05-08,81.89294995424805\r
2021-05-28,71.42224870261238\r
2021-05-30,71.42224870261238\r
2021-06-07,81.73342593798807\r
2021-06-14,93.30210252862531\r
2021-06-22,93.64465712607408\r
2021-07-22,84.46792114437675\r
2021-08-11,73.5155836576585\r
2021-08-23,51.50043219069873\r
2021-08-26,51.62512905271307\r
2021-08-28,51.62512905271307\r
2021-08-31,49.161730182766064\r
2021-09-05,37.17152487237111\r
2021-09-12,30.980298583361993\r
2021-09-17,29.665268048099037\r
2021-09-22,30.318979301460875\r
2021-09-25,27.749670763866707\r
2021-09-27,27.749670763866707\r
2021-09-30,25.216156667853696\r
2021-10-07,25.38673151986815\r
2021-10-12,24.20557983227873\r
2021-10-15,24.20557983227873\r
2021-10-17,23.544100659834264\r
2021-10-20,22.730988310887405\r
2021-10-27,22.65051528629303\r
2021-11-09,27.392521807121177\r
2021-11-11,27.83934378470298\r
2021-11-19,26.86142405766653\r
2021-12-14,52.00018521417488\r
2021-12-16,52.00018521417488\r
2021-12-19,53.642180535958914\r
2021-12-21,53.642180535958914\r
2022-01-15,52.00018521417488\r
2022-01-23,61.57479386261217\r
2022-01-25,54.7949144073106\r
2022-02-09,57.403423572677504\r
2022-03-26,58.59838968817185\r
2022-04-05,66.04485975020287\r
2022-04-10,62.81511322109397\r
2022-05-08,71.71932162507397\r
2022-05-10,77.6439862552172\r
2022-05-15,77.6439862552172\r
2022-05-28,70.24053339299694\r
2022-05-30,70.24053339299694\r
2022-06-17,54.0249723002996\r
2022-06-19,69.94674774054188\r
2022-06-22,69.94674774054188\r
2022-06-24,73.96835505955622\r
2022-06-29,75.64121436718561\r
2022-07-02,71.27395893599908\r
2022-07-04,71.27395893599908\r
2022-07-07,69.36114695311099\r
2022-07-12,61.98676733837881\r
2022-07-14,54.92380339102046\r
2022-07-17,55.70053140663931\r
2022-07-24,39.94749745487715\r
2022-07-27,40.71312159122563\r
2022-08-01,34.200751849226656\r
2022-08-03,34.200751849226656\r
2022-08-06,30.22512644020956\r
2022-08-08,30.22512644020956\r
2022-08-11,25.216156667853696\r
2022-08-13,24.288952574965926\r
2022-08-18,26.86142405766653\r
2022-08-28,25.046195246546425\r
2022-09-05,25.046195246546425\r
2022-09-10,18.674862903039244\r
2022-09-12,18.674862903039244\r
2022-09-15,18.674862903039244\r
2022-09-20,18.82022313976971\r
2022-09-22,19.854604340112054\r
2022-10-02,18.457949685231473\r
2022-10-05,14.1506936470105\r
2022-10-07,14.1506936470105\r
2022-10-12,17.744661348284062\r
2022-10-15,17.32388049910833\r
2022-10-17,20.841584743807047\r
2022-10-22,20.841584743807047\r
2022-11-06,18.3859456922448\r
2022-11-11,18.3859456922448\r
2022-11-16,19.705027050726045\r
2022-12-04,20.382880745170702\r
2022-12-11,23.79100947124156\r
2022-12-14,23.79100947124156\r
2022-12-21,26.075170775631946\r
2022-12-24,2.376055787303135\r
2023-01-03,14.08821642661032\r
2023-01-10,23.298565727154664\r
2023-01-20,55.8305519984457\r
2023-02-02,58.86572221955906\r
2023-02-04,66.75842014327279\r
2023-02-09,61.7119554958388\r
2023-02-12,62.40020690648078\r
2023-02-14,62.67664810407848\r
2023-02-17,61.7119554958388\r
2023-02-19,61.7119554958388\r
2023-02-24,60.89142760367163\r
2023-03-01,68.19782225443475\r
2023-03-09,68.63283877743453\r
2023-03-16,60.619220201593734\r
2023-04-05,80.62140321856401\r
2023-04-08,80.62140321856401\r
2023-04-10,80.62140321856401\r
2023-04-18,69.65361898894683\r
2023-05-05,63.50988495343183\r
2023-05-10,63.50988495343183\r
2023-05-28,89.5781673932688\r
2023-05-30,85.77136769017379\r
2023-06-02,86.59143195775559\r
2023-06-04,86.59143195775559\r
2023-06-09,82.05263994267457\r
2023-06-24,92.10843443870627\r
2023-06-27,92.27845642614446\r
2023-07-07,85.77136769017379\r
2023-07-09,87.58100693583114\r
2023-07-14,86.42708599985555\r
2023-07-17,89.91336412914266\r
2023-07-22,86.92062367884807\r
2023-07-27,83.01426650269316\r
2023-07-29,81.57406787217877\r
2023-08-08,86.92062367884807\r
2023-08-11,85.1183131936548\r
2023-08-16,69.94674774054188\r
2023-08-18,69.94674774054188\r
2023-08-21,68.9236698357321\r
2023-08-23,68.63283877743453\r
2023-08-28,74.57435816185053\r
2023-08-31,67.6200953640651\r
2023-09-05,59.67161665439252\r
2023-09-07,59.67161665439252\r
2023-09-10,58.33170630000761\r
2023-09-15,59.4023355048952\r
2023-09-20,60.89142760367163\r
2023-09-25,59.4023355048952\r
2023-09-27,59.4023355048952\r
2023-09-30,57.9328979266052\r
2023-10-02,58.9996319759482\r
`;export{r as default};
