const n=`date,value\r
2017-02-25,23.553101358274166\r
2017-03-17,38.02888160593791\r
2017-03-27,55.86674625657142\r
2017-04-03,55.86674625657142\r
2017-04-06,58.85123495801532\r
2017-05-16,77.28015948859537\r
2017-05-26,85.56700505820227\r
2017-06-02,85.4260175871934\r
2017-06-05,86.98220220174775\r
2017-06-12,65.76949075177845\r
2017-06-25,90.56239472924577\r
2017-07-02,94.34939808825035\r
2017-07-05,94.79051327286179\r
2017-07-07,86.69838923637518\r
2017-08-14,48.85854075187823\r
2017-08-17,42.98449691980907\r
2017-08-19,43.51518729451475\r
2017-08-21,43.51518729451475\r
2017-08-22,43.51518729451475\r
2017-08-24,31.91325530071592\r
2017-08-26,29.52067043932789\r
2017-08-29,22.169772624227065\r
2017-09-03,29.069489704609175\r
2017-09-05,37.52727173125092\r
2017-09-08,37.52727173125092\r
2017-09-13,37.52727173125092\r
2017-09-15,20.66520663405598\r
2017-09-20,20.66520663405598\r
2017-09-21,20.66520663405598\r
2017-09-23,20.66520663405598\r
2017-10-08,21.610336663019027\r
2017-10-10,21.610336663019027\r
2017-10-11,21.610336663019027\r
2017-10-13,26.683398217186017\r
2017-10-15,26.683398217186017\r
2017-10-16,26.683398217186017\r
2017-10-18,26.683398217186017\r
2017-10-20,25.140232497732494\r
2017-10-23,25.140232497732494\r
2017-10-28,22.49212080782118\r
2017-10-30,22.49212080782118\r
2017-10-31,22.49212080782118\r
2017-11-02,22.49212080782118\r
2017-11-07,22.654021313361167\r
2017-11-14,20.04493122438908\r
2017-11-15,20.04493122438908\r
2017-11-17,21.056870419279704\r
2017-11-19,20.199261445066576\r
2017-11-22,21.849365437740413\r
2017-11-24,21.849365437740413\r
2017-11-25,21.849365437740413\r
2017-11-27,20.04493122438908\r
2017-11-30,22.169772624227065\r
2017-12-07,20.431680652364147\r
2018-02-10,66.65670551033386\r
2018-02-12,66.65670551033386\r
2018-02-15,66.65670551033386\r
2018-02-25,75.79919307492817\r
2018-02-27,75.79919307492817\r
2018-03-02,75.79919307492817\r
2018-03-07,75.79919307492817\r
2018-03-22,87.97858868085734\r
2018-04-01,87.97858868085734\r
2018-04-21,85.56700505820227\r
2018-04-23,85.56700505820227\r
2018-04-24,85.56700505820227\r
2018-04-26,91.14080044255984\r
2018-05-06,84.16149305413397\r
2018-05-11,93.46974111301353\r
2018-05-19,90.41803308515959\r
2018-05-21,90.56239472924577\r
2018-05-23,79.72925292068958\r
2018-06-20,95.37999970585987\r
2018-06-22,95.37999970585987\r
2018-06-23,95.37999970585987\r
2018-06-25,100.0\r
2018-06-28,100.0\r
2018-07-02,100.0\r
2018-07-03,100.0\r
2018-07-07,93.03120066284558\r
2018-07-08,93.03120066284558\r
2018-07-10,100.0\r
2018-07-12,98.64933576204189\r
2018-07-15,100.0\r
2018-07-18,100.0\r
2018-07-22,81.24156253310443\r
2018-07-23,81.24156253310443\r
2018-07-25,86.69838923637518\r
2018-07-27,86.69838923637518\r
2018-07-30,92.88521149927288\r
2018-08-01,92.88521149927288\r
2018-08-02,92.88521149927288\r
2018-08-04,86.69838923637518\r
2018-08-06,87.40864598358313\r
2018-08-11,73.53396202031006\r
2018-08-12,73.53396202031006\r
2018-08-19,73.79897266287398\r
2018-08-21,73.79897266287398\r
2018-08-22,73.79897266287398\r
2018-08-26,73.79897266287398\r
2018-08-27,73.79897266287398\r
2018-09-03,42.878684563299075\r
2018-09-05,42.878684563299075\r
2018-09-08,52.14151810794513\r
2018-09-10,52.14151810794513\r
2018-09-11,52.14151810794513\r
2018-09-16,44.907652562712265\r
2018-09-18,44.907652562712265\r
2018-09-23,20.50939977516826\r
2018-09-25,20.50939977516826\r
2018-09-26,20.50939977516826\r
2018-09-28,26.423547295924017\r
2018-09-30,26.423547295924017\r
2018-10-03,19.73775182514158\r
2018-10-05,27.118834660509428\r
2018-10-06,27.118834660509428\r
2018-10-23,16.561642693799477\r
2018-10-25,16.561642693799477\r
2018-11-17,22.81640532226284\r
2018-11-22,30.340077156201055\r
2018-11-24,30.340077156201055\r
2018-11-27,22.49212080782118\r
2018-11-29,28.71063192052439\r
2018-12-05,22.009326112722714\r
2019-01-11,36.631378662362856\r
2019-01-16,43.4088322221085\r
2019-01-19,43.4088322221085\r
2019-01-23,43.4088322221085\r
2019-01-26,43.4088322221085\r
2019-01-28,40.06297904761307\r
2019-02-15,78.90935234537008\r
2019-02-17,78.90935234537008\r
2019-02-18,78.90935234537008\r
2019-02-20,82.48770076823104\r
2019-02-22,82.48770076823104\r
2019-02-23,82.48770076823104\r
2019-02-25,80.69026212625585\r
2019-02-27,80.69026212625585\r
2019-03-07,89.12309977272264\r
2019-03-12,86.41496282796521\r
2019-03-22,80.41519863224818\r
2019-03-24,80.41519863224818\r
2019-03-25,80.41519863224818\r
2019-03-27,82.90483517442749\r
2019-03-29,82.90483517442749\r
2019-03-30,82.90483517442749\r
2019-04-01,82.90483517442749\r
2019-04-08,78.90935234537008\r
2019-04-09,78.90935234537008\r
2019-05-01,84.0214755646757\r
2019-05-06,86.69838923637518\r
2019-05-11,83.04407473861663\r
2019-05-13,83.04407473861663\r
2019-05-14,83.04407473861663\r
2019-05-16,84.0214755646757\r
2019-05-23,90.70685231250654\r
2019-05-31,92.4478173181926\r
2019-06-02,77.82165005353082\r
2019-06-08,77.82165005353082\r
2019-06-12,77.82165005353082\r
2019-06-13,77.82165005353082\r
2019-07-05,91.57561110926402\r
2019-07-08,91.57561110926402\r
2019-07-10,92.4478173181926\r
2019-07-12,92.4478173181926\r
2019-07-13,92.4478173181926\r
2019-07-15,87.97858868085734\r
2019-07-17,87.97858868085734\r
2019-07-22,90.27376740577147\r
2019-07-23,90.27376740577147\r
2019-07-25,68.96080671528296\r
2019-07-28,82.34885081931384\r
2019-08-02,53.525922840799545\r
2019-08-04,54.57412712451367\r
2019-08-09,46.10013150660045\r
2019-08-14,44.69223848347169\r
2019-08-16,44.69223848347169\r
2019-08-17,44.69223848347169\r
2019-08-21,49.64283260562681\r
2019-08-22,49.64283260562681\r
2019-08-24,40.78531956191762\r
2019-08-26,44.04858792639882\r
2019-08-29,38.432165528762276\r
2019-08-31,40.57838792142206\r
2019-09-03,40.57838792142206\r
2019-09-06,40.57838792142206\r
2019-09-08,29.611253791074095\r
2019-09-11,34.479537925426285\r
2019-09-13,23.142621551338312\r
2019-09-15,23.142621551338312\r
2019-09-16,23.142621551338312\r
2019-09-20,23.142621551338312\r
2019-09-21,23.142621551338312\r
2019-10-08,10.983846354371277\r
2019-10-11,10.983846354371277\r
2019-10-13,13.68675348978563\r
2019-10-15,13.68675348978563\r
2019-10-25,10.804572411227022\r
2019-11-27,48.41271249770957\r
2019-12-05,48.41271249770957\r
2019-12-10,48.41271249770957\r
2019-12-27,80.27781365998231\r
2019-12-29,80.27781365998231\r
2019-12-30,80.27781365998231\r
2020-01-06,76.33634475025664\r
2020-01-09,76.33634475025664\r
2020-01-11,79.18226016604132\r
2020-01-14,79.18226016604132\r
2020-01-16,72.87317420642012\r
2020-01-19,72.87317420642012\r
2020-01-28,69.47725322291065\r
2020-02-05,74.33018495203686\r
2020-02-07,74.33018495203686\r
2020-02-08,74.33018495203686\r
2020-02-15,74.33018495203686\r
2020-02-18,74.33018495203686\r
2020-02-20,77.82165005353082\r
2020-02-22,77.01000515216033\r
2020-03-21,70.38489396766794\r
2020-03-24,70.38489396766794\r
2020-03-26,70.38489396766794\r
2020-03-28,70.38489396766794\r
2020-03-29,70.38489396766794\r
2020-03-31,70.38489396766794\r
2020-04-03,70.38489396766794\r
2020-04-05,81.24156253310443\r
2020-04-08,74.99643100144237\r
2020-04-10,92.01128362840225\r
2020-04-12,92.01128362840225\r
2020-04-15,77.95726875506632\r
2020-04-25,92.4478173181926\r
2020-04-28,78.90935234537008\r
2020-05-05,79.45556043294782\r
2020-05-07,79.45556043294782\r
2020-05-08,79.45556043294782\r
2020-05-17,79.45556043294782\r
2020-05-18,79.45556043294782\r
2020-05-20,96.56353646165756\r
2020-05-22,93.03120066284558\r
2020-05-25,96.26708227577468\r
2020-05-27,96.26708227577468\r
2020-05-28,96.26708227577468\r
2020-05-30,92.30221044462003\r
2020-06-12,89.84154641148811\r
2020-06-14,89.84154641148811\r
2020-07-19,68.96080671528296\r
2020-07-21,68.96080671528296\r
2020-07-22,68.96080671528296\r
2020-07-24,70.25493058527356\r
2020-07-27,70.25493058527356\r
2020-07-29,58.971958351015985\r
2020-07-31,58.971958351015985\r
2020-08-03,60.063102054125785\r
2020-08-05,58.85123495801532\r
2020-08-06,58.85123495801532\r
2020-08-08,53.06277565038431\r
2020-08-10,50.658841887537456\r
2020-08-15,46.10013150660045\r
2020-08-20,35.6465425478631\r
2020-08-21,35.6465425478631\r
2020-08-23,35.6465425478631\r
2020-09-02,24.802520234850707\r
2020-09-04,24.802520234850707\r
2020-09-05,24.802520234850707\r
2020-09-07,28.800172226667502\r
2020-09-10,28.800172226667502\r
2020-09-12,20.04493122438908\r
2020-09-14,20.04493122438908\r
2020-09-17,20.04493122438908\r
2020-09-19,23.718134430732515\r
2020-10-17,18.45437990727817\r
2020-10-24,18.45437990727817\r
2020-10-30,18.45437990727817\r
2020-11-01,18.45437990727817\r
2020-11-16,26.94430772858779\r
2020-11-18,26.94430772858779\r
2020-11-19,26.94430772858779\r
2020-11-21,33.806274006172835\r
2020-11-23,33.806274006172835\r
2020-11-26,24.63437821491383\r
2020-11-29,24.63437821491383\r
2020-12-26,66.27586415400884\r
2021-02-14,81.79442601965611\r
2021-02-17,81.79442601965611\r
2021-02-19,83.18341163844123\r
2021-02-24,81.65606370606032\r
2021-02-27,89.12309977272264\r
2021-03-01,77.82165005353082\r
2021-03-04,88.26413855390696\r
2021-03-09,77.14503305094071\r
2021-03-21,86.98220220174775\r
2021-03-23,86.98220220174775\r
2021-03-24,86.98220220174775\r
2021-03-26,86.98220220174775\r
2021-03-28,86.98220220174775\r
2021-03-29,86.98220220174775\r
2021-03-31,91.86596373610983\r
2021-04-02,80.0033374044478\r
2021-04-03,80.0033374044478\r
2021-04-05,93.03120066284558\r
2021-04-07,93.03120066284558\r
2021-04-15,94.34939808825035\r
2021-04-17,93.32346549468517\r
2021-04-20,93.32346549468517\r
2021-04-22,93.32346549468517\r
2021-04-23,93.32346549468517\r
2021-05-30,87.97858868085734\r
2021-06-01,87.83595833629786\r
2021-06-09,87.83595833629786\r
2021-09-12,31.540117254198286\r
2021-09-17,34.76977116164647\r
2021-09-22,32.10050952424283\r
2021-09-24,35.84261479557065\r
2021-09-25,35.84261479557065\r
2021-09-27,34.094138323249766\r
2021-09-30,37.42728291757525\r
2021-10-07,39.346024365929196\r
2021-10-12,42.246094205805875\r
2021-10-14,42.246094205805875\r
2021-10-17,39.14217167301311\r
2021-10-19,44.69223848347169\r
2021-10-20,44.69223848347169\r
2021-10-24,37.42728291757525\r
2021-10-27,37.42728291757525\r
2021-12-16,85.84927052698905\r
2021-12-18,85.84927052698905\r
2021-12-19,85.84927052698905\r
2021-12-21,75.12997734125749\r
2021-12-23,76.20190869058452\r
2022-01-15,76.74024508640963\r
2022-01-22,76.74024508640963\r
2022-01-23,76.74024508640963\r
2022-01-25,77.14503305094071\r
2022-01-27,67.80467846896087\r
2022-02-01,67.80467846896087\r
2022-02-09,77.28015948859537\r
2022-03-21,90.9960551946108\r
2022-03-23,90.9960551946108\r
2022-03-24,90.9960551946108\r
2022-03-26,93.76257862986091\r
2022-04-05,95.37999970585987\r
2022-04-10,94.64337963308563\r
2022-04-15,94.64337963308563\r
2022-04-30,89.12309977272264\r
2022-05-07,89.12309977272264\r
2022-05-08,89.12309977272264\r
2022-05-10,90.85140580944902\r
2022-05-15,87.12425357746496\r
2022-05-17,87.12425357746496\r
2022-05-30,79.04575718581603\r
2022-06-01,79.04575718581603\r
2022-06-06,79.04575718581603\r
2022-06-09,79.04575718581603\r
2022-08-08,22.979272259055836\r
2022-08-10,22.979272259055836\r
2022-08-11,22.979272259055836\r
2022-08-13,24.63437821491383\r
2022-08-15,24.63437821491383\r
2022-08-18,24.63437821491383\r
2022-08-20,17.716315121673254\r
2022-08-23,18.30576360006038\r
2022-08-28,14.149999390101323\r
2022-08-30,14.149999390101323\r
2022-09-12,5.8762839554574935\r
2022-09-15,5.8762839554574935\r
2022-09-19,5.8762839554574935\r
2022-09-20,5.8762839554574935\r
2022-09-22,5.8762839554574935\r
2022-10-02,5.156494962675503\r
2022-10-12,6.345885001383271\r
2022-10-15,6.345885001383271\r
2022-10-22,6.250763131165524\r
2022-11-11,6.537920620882871\r
2022-11-13,6.537920620882871\r
2022-11-16,6.203426837601878\r
2022-11-24,6.0155837203030895\r
2022-12-11,8.318491676825989\r
2022-12-21,8.587304137701327\r
2022-12-28,7.687949789895825\r
2023-02-04,58.24916501900591\r
2023-02-06,58.24916501900591\r
2023-02-09,62.27032980138056\r
2023-02-11,62.27032980138056\r
2023-02-12,62.27032980138056\r
2023-02-14,60.42866716431795\r
2023-02-16,63.63549237672503\r
2023-02-17,63.63549237672503\r
2023-02-19,53.40997885158405\r
2023-02-21,62.393925553680006\r
2023-02-24,56.57711768323891\r
2023-02-26,57.53008922868699\r
2023-03-01,57.53008922868699\r
2023-03-03,56.45846281422743\r
2023-03-04,56.45846281422743\r
2023-03-16,67.93273485516497\r
2023-04-05,74.86298366569376\r
2023-04-07,74.86298366569376\r
2023-04-08,74.86298366569376\r
2023-04-15,74.86298366569376\r
2023-06-04,72.34633440386598\r
2023-06-07,72.34633440386598\r
2023-06-24,100.0\r
2023-07-09,86.55662769936771\r
2023-07-11,86.55662769936771\r
2023-07-14,100.0\r
2023-07-16,100.0\r
2023-07-17,100.0\r
2023-07-19,100.0\r
2023-07-22,99.2486862061098\r
2023-07-29,66.78385461061657\r
2023-07-31,66.78385461061657\r
2023-08-03,66.78385461061657\r
2023-08-05,66.78385461061657\r
2023-08-06,66.78385461061657\r
2023-08-08,66.78385461061657\r
2023-08-10,48.19043720363895\r
2023-08-11,48.19043720363895\r
2023-08-13,48.301521580601296\r
2023-08-15,48.301521580601296\r
2023-08-18,35.940818905571\r
2023-08-20,36.03913493820402\r
2023-08-21,36.03913493820402\r
2023-08-23,26.857220376518033\r
2023-08-31,14.61965177300345\r
2023-09-07,5.968999419074786\r
2023-09-10,5.968999419074786\r
2023-09-14,5.968999419074786\r
2023-10-02,5.288464915273849\r
2023-10-04,5.288464915273849\r
2023-10-05,5.288464915273849\r
2023-10-07,6.203426837601878\r
2023-10-10,6.203426837601878\r
2023-10-12,6.062318806655275\r
2023-10-15,6.586301751688671\r
2023-11-26,71.42820050598509\r
2023-12-03,71.42820050598509\r
2023-12-16,84.86303674755918\r
`;export{n as default};