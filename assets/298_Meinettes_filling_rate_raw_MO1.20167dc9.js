const n=`date,value\r
2017-02-19,78.08690033665022\r
2017-02-22,85.01230621234807\r
2017-03-11,79.83431153179063\r
2017-03-14,79.08411740567738\r
2017-04-03,97.8749990129115\r
2017-04-10,84.24897317086162\r
2017-04-20,86.1608509690716\r
2017-04-23,74.6242931315234\r
2017-05-23,82.2227270498117\r
2017-06-02,76.22655303333747\r
2017-06-09,81.59231899732882\r
2017-06-12,80.46096034780027\r
2017-06-19,81.08895596458981\r
2017-06-22,88.85720114552055\r
2017-07-04,74.99321280758808\r
2017-07-07,63.79514977379562\r
2017-07-14,60.639290668647384\r
2017-07-17,62.85549152270349\r
2017-08-03,37.50368134428362\r
2017-08-06,37.19898346597481\r
2017-08-18,35.38528551778191\r
2017-08-21,28.6720445991192\r
2017-08-23,28.95572850481462\r
2017-08-26,25.055590980400826\r
2017-09-07,22.544060641878023\r
2017-09-27,19.850899475916012\r
2017-10-05,12.757169812832178\r
2017-10-07,14.841110992188739\r
2017-10-10,13.672639857213964\r
2017-10-12,12.082183323031966\r
2017-10-15,13.060382227161298\r
2017-10-17,12.681673963218962\r
2017-10-22,2.523025952389016\r
2017-10-27,8.729838402028552\r
2017-10-30,4.872535553858452\r
2017-11-21,6.378600693453293\r
2018-01-15,20.968790443785736\r
2018-01-23,5.047284725864135\r
2018-02-19,44.37567951955255\r
2018-02-24,46.30403900459431\r
2018-02-27,67.59180100027106\r
2018-03-14,60.291373710469685\r
2018-03-19,64.03066325921324\r
2018-03-21,80.46096034780027\r
2018-03-31,66.99460249481994\r
2018-04-18,88.72828580964152\r
2018-04-20,86.1608509690716\r
2018-04-30,90.40819435679055\r
2018-05-05,82.4752639804608\r
2018-05-20,55.139677109809845\r
2018-06-09,81.59231899732882\r
2018-06-19,76.72143688819143\r
2018-06-22,80.58645187799065\r
2018-06-24,79.83431153179063\r
2018-06-27,85.90525221962072\r
2018-06-29,90.66741049536729\r
2018-07-02,88.98616800368936\r
2018-07-07,87.18533281251969\r
2018-07-09,79.95953332406881\r
2018-07-17,76.96920919258916\r
2018-07-19,76.35019130279814\r
2018-07-24,75.9794421238596\r
2018-07-27,71.0840945223335\r
2018-07-29,64.50240616176637\r
2018-08-01,64.85683823202088\r
2018-08-03,58.4451739068534\r
2018-08-11,62.504111477441214\r
2018-08-16,39.449198374746906\r
2018-08-18,50.55836050948731\r
2018-08-21,42.78611571880452\r
2018-08-26,38.62673320173995\r
2018-08-28,36.38981501650185\r
2018-09-02,30.86640546647893\r
2018-09-05,33.104605189750394\r
2018-09-10,28.389131487752078\r
2018-09-17,25.878180821643166\r
2018-09-20,25.1466278460219\r
2018-09-25,24.783026928792726\r
2018-09-27,22.10334182460225\r
2018-10-02,28.389131487752078\r
2018-10-05,17.66678835876872\r
2018-10-17,19.850899475916012\r
2018-10-20,16.927325378666204\r
2018-10-22,16.27739969888256\r
2018-11-04,19.93629030749901\r
2018-11-24,51.44365079643103\r
2019-01-03,63.442328115105994\r
2019-02-04,76.102969960274\r
2019-02-12,67.2333067462103\r
2019-02-14,68.4303245322484\r
2019-02-17,67.47224459402253\r
2019-02-22,74.37862524094646\r
2019-02-27,79.95953332406881\r
2019-03-16,65.80459831420112\r
2019-03-21,80.08480913975782\r
2019-03-24,88.34184927221324\r
2019-03-29,86.67267507648442\r
2019-03-31,88.08448314324569\r
2019-04-05,79.08411740567738\r
2019-04-13,93.14011300785648\r
2019-04-15,89.8903758230208\r
2019-04-20,91.44628324602871\r
2019-04-23,88.34184927221324\r
2019-05-03,96.15772943557815\r
2019-05-23,90.01975365608115\r
2019-05-30,85.39468272474868\r
2019-06-02,100.0\r
2019-06-07,90.9268308642805\r
2019-06-12,88.47060983928337\r
2019-06-17,87.95587764910387\r
2019-06-19,91.31634377666565\r
2019-06-24,85.90525221962072\r
2019-06-27,87.44197360134797\r
2019-06-29,68.0706087603342\r
2019-07-02,91.18645520153919\r
2019-07-04,87.05709034672068\r
2019-07-07,83.9949506023596\r
2019-07-14,78.21136177334478\r
2019-07-17,77.83814130741487\r
2019-07-19,71.0840945223335\r
2019-07-22,66.51789627715605\r
2019-07-24,65.56730354149542\r
2019-07-29,45.551439461231645\r
2019-08-03,55.7057992020099\r
2019-08-08,43.84405252824106\r
2019-08-11,40.172752761461034\r
2019-08-13,45.98108058250726\r
2019-08-16,42.04981236405631\r
2019-08-23,29.240179802851024\r
2019-08-26,29.62063611452665\r
2019-08-28,35.08544163732986\r
2019-08-31,31.059311547190543\r
2019-09-02,33.596836388307\r
2019-09-07,31.640009020099903\r
2019-09-12,25.97003001956608\r
2019-09-15,23.79069755519264\r
2019-09-17,20.45074601532006\r
2019-09-20,20.70932217403453\r
2019-09-27,19.765609670528395\r
2019-10-25,28.013118973719454\r
2019-12-06,83.61431315085022\r
2019-12-29,78.70975275687397\r
2020-02-07,53.33884828369069\r
2020-02-12,68.91075648030977\r
2020-02-22,73.88795949195938\r
2020-02-24,72.2994949222309\r
2020-03-20,82.98097687015468\r
2020-03-25,81.970403520032\r
2020-03-28,100.0\r
2020-04-02,98.8031401545503\r
2020-04-04,100.0\r
2020-04-07,99.86681974572377\r
2020-04-09,91.83640669477644\r
2020-04-14,100.0\r
2020-04-24,92.22698702478218\r
2020-05-04,86.54464081044581\r
2020-05-09,90.40819435679055\r
2020-05-17,87.5703718558015\r
2020-05-19,78.33587777265993\r
2020-05-22,89.50254998889487\r
2020-05-27,98.67040095308596\r
2020-05-29,86.41665868073683\r
2020-06-23,85.52224651040008\r
2020-07-01,82.2227270498117\r
2020-07-08,75.9794421238596\r
2020-07-11,71.2053789772649\r
2020-07-13,66.63698492864081\r
2020-07-18,62.621177882339055\r
2020-07-21,69.39211252733337\r
2020-07-23,52.110386534428066\r
2020-07-28,42.47012626392289\r
2020-07-31,55.93269328593764\r
2020-08-05,33.00639938523016\r
2020-08-07,30.385592227200657\r
2020-08-10,32.02878091420327\r
2020-08-20,20.27886001763404\r
2020-08-27,13.826904891736069\r
2020-09-01,6.130239128037239\r
2020-09-04,7.011182060164489\r
2020-09-14,1.696313777856201\r
2020-09-16,1.8277218985368726\r
2020-09-19,1.8721189956841005\r
2020-10-31,5.945763756183795\r
2020-11-18,4.3025414526474846\r
2020-11-23,11.052633425450601\r
2020-12-13,7.923752877438742\r
2021-01-24,36.59164735726104\r
2021-02-21,78.33587777265993\r
2021-02-23,83.10753801030845\r
2021-02-28,92.096742870675\r
2021-03-20,97.61025937553967\r
2021-03-23,92.48762730441088\r
2021-03-25,94.4488637711234\r
2021-03-28,88.47060983928337\r
2021-03-30,100.0\r
2021-04-02,96.15772943557815\r
2021-04-04,84.63040270845539\r
2021-04-14,93.00951485162935\r
2021-04-24,93.53221001398016\r
2021-05-27,78.95927484672042\r
2021-06-01,79.33396535891374\r
2021-06-03,93.27076160815376\r
2021-06-11,87.05709034672068\r
2021-06-13,82.2227270498117\r
2021-06-16,91.05661755320682\r
2021-06-18,80.58645187799065\r
2021-06-26,93.00951485162935\r
2021-07-11,77.34127972371085\r
2021-07-21,75.9794421238596\r
2021-07-23,80.46096034780027\r
2021-08-10,73.1536409446402\r
2021-08-15,75.85596956442296\r
2021-08-20,80.83759640329446\r
2021-08-25,76.102969960274\r
2021-08-27,72.17769981578425\r
2021-09-01,72.2994949222309\r
2021-09-04,74.25587498750494\r
2021-09-06,69.75373426585095\r
2021-09-24,61.10403609953373\r
2021-09-26,75.85596956442296\r
2021-10-01,54.12468429355219\r
2021-10-11,64.14850956728748\r
2021-10-14,59.94400871908974\r
2021-10-16,55.93269328593764\r
2021-10-21,44.90906611755284\r
2021-10-24,56.04623550553296\r
2021-11-30,61.91968563750948\r
2021-12-23,59.366297560948226\r
2022-01-14,49.457725658354626\r
2022-01-24,51.22193176939101\r
2022-02-01,3.2759667752438104\r
2022-02-08,36.289014216977975\r
2022-02-13,57.52803061543962\r
2022-02-26,57.642454885616914\r
2022-02-28,63.32484071284089\r
2022-03-05,76.102969960274\r
2022-03-08,71.81265406774135\r
2022-03-23,84.24897317086162\r
2022-03-25,82.85446886062887\r
2022-04-04,83.10753801030845\r
2022-04-14,67.11392539765072\r
2022-04-17,81.59231899732882\r
2022-04-19,92.22698702478218\r
2022-05-09,90.53777688087806\r
2022-05-19,85.90525221962072\r
2022-05-29,76.102969960274\r
2022-06-06,77.5896009982705\r
2022-06-11,73.76543288700496\r
2022-06-13,76.47388472848068\r
2022-06-16,60.40728477079003\r
2022-06-18,71.93427934557997\r
2022-06-21,62.504111477441214\r
2022-06-28,72.0559612759283\r
2022-07-03,74.37862524094646\r
2022-07-06,67.71141566623956\r
2022-07-08,66.99460249481994\r
2022-07-11,65.56730354149542\r
2022-07-13,64.97510102223504\r
2022-07-16,63.442328115105994\r
2022-07-18,63.09004593372835\r
2022-07-21,53.22684471035109\r
2022-07-26,56.72881767926026\r
2022-07-28,50.66879015352882\r
2022-07-31,43.73793912115486\r
2022-08-07,38.21729564439856\r
2022-08-10,37.097569760864616\r
2022-08-12,35.585571201916615\r
2022-08-22,28.294998998625136\r
2022-09-01,27.825631455161652\r
2022-09-04,34.289306943461966\r
2022-09-09,28.76652042601234\r
2022-09-11,34.388548250548794\r
2022-09-19,29.906864982228903\r
2022-09-21,33.596836388307\r
2022-10-04,32.7122647689811\r
2022-10-06,31.059311547190543\r
2022-10-11,39.34612958955722\r
2022-11-18,57.75694173592324\r
2022-12-05,67.71141566623956\r
2023-01-17,65.56730354149542\r
2023-02-03,83.36081953709957\r
2023-02-08,70.59952669930834\r
2023-02-11,83.36081953709957\r
2023-02-13,69.99510270662957\r
2023-02-16,73.64296229835064\r
2023-02-21,78.70975275687397\r
2023-03-05,80.71199724236784\r
2023-03-28,82.4752639804608\r
2023-04-04,71.0840945223335\r
2023-04-19,98.13993598117489\r
2023-05-27,86.28872872203334\r
2023-05-29,100.0\r
2023-06-01,100.0\r
2023-06-03,98.5377109052663\r
2023-06-08,89.8903758230208\r
2023-06-16,86.28872872203334\r
2023-06-26,91.96654941659519\r
2023-06-28,94.18671158311024\r
2023-07-06,84.88495244068876\r
2023-07-08,94.31776259705784\r
2023-07-11,100.0\r
2023-07-13,83.74113939994561\r
2023-07-16,49.23840101262962\r
2023-07-18,85.77753129290718\r
2023-07-31,71.56957364202925\r
2023-08-02,79.45897067630914\r
2023-08-22,54.12468429355219\r
2023-08-25,57.642454885616914\r
2023-09-04,45.551439461231645\r
2023-09-06,52.221738712909314\r
2023-09-11,50.22747010475121\r
2023-09-19,66.39886630610711\r
2023-09-26,68.19045600352999\r
2023-09-29,51.66563327195255\r
2023-10-01,66.87533808446304\r
2023-10-06,64.26641551984503\r
`;export{n as default};
