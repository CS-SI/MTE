const n=`date,value\r
2017-02-19,12.948682233717527\r
2017-02-26,12.948682233717527\r
2017-03-01,12.948682233717527\r
2017-03-11,55.36480721960743\r
2017-03-21,55.36480721960743\r
2017-03-28,28.11394521703579\r
2017-03-31,31.609811447703994\r
2017-04-20,81.65723804660007\r
2017-04-30,81.65723804660007\r
2017-05-30,70.83201583865801\r
2017-06-06,70.83201583865801\r
2017-06-09,70.83201583865801\r
2017-06-19,88.78633078571838\r
2017-06-26,88.78633078571838\r
2017-06-29,88.78633078571838\r
2017-07-04,52.485271480333836\r
2017-07-06,52.485271480333836\r
2017-07-14,67.59676169819535\r
2017-07-19,65.05943413773501\r
2017-07-21,65.05943413773501\r
2017-07-24,65.05943413773501\r
2017-08-03,48.57474255304281\r
2017-08-05,48.57474255304281\r
2017-08-08,48.57474255304281\r
2017-08-18,63.80776861125733\r
2017-08-20,63.80776861125733\r
2017-08-23,80.95965601011008\r
2017-08-25,80.95965601011008\r
2017-08-30,51.353569561711666\r
2017-09-02,51.353569561711666\r
2017-09-07,57.126925126884046\r
2017-09-12,57.126925126884046\r
2017-09-14,57.126925126884046\r
2017-09-17,68.2381656156586\r
2017-09-19,62.56745485067324\r
2017-09-22,67.59676169819535\r
2017-09-24,67.59676169819535\r
2017-09-27,67.59676169819535\r
2017-10-07,86.61838572572182\r
2017-10-09,86.61838572572182\r
2017-10-12,86.61838572572182\r
2017-10-14,86.61838572572182\r
2017-10-17,86.61838572572182\r
2017-10-19,20.952246616642846\r
2017-10-22,20.952246616642846\r
2017-10-24,20.952246616642846\r
2017-10-27,31.162387422069628\r
2017-10-29,26.43786613536237\r
2017-11-01,26.43786613536237\r
2017-11-03,26.43786613536237\r
2017-11-06,26.43786613536237\r
2017-11-11,49.12473623496941\r
2017-11-13,49.12473623496941\r
2017-11-16,54.78316192028867\r
2017-11-18,54.78316192028867\r
2017-11-21,46.403691698364916\r
2017-11-23,48.57474255304281\r
2017-11-26,48.57474255304281\r
2018-02-09,3.694262751157333\r
2018-02-14,7.436473214791796\r
2018-02-24,7.666644104814215\r
2018-03-16,31.609811447703994\r
2018-03-21,31.609811447703994\r
2018-03-23,31.609811447703994\r
2018-03-26,31.609811447703994\r
2018-04-20,70.17932163016674\r
2018-04-22,70.17932163016674\r
2018-04-25,89.51453301401934\r
2018-04-27,89.51453301401934\r
2018-04-30,89.51453301401934\r
2018-05-25,2.3506551615546982\r
2018-06-01,2.3506551615546982\r
2018-06-09,7.900085049657596\r
2018-06-14,14.468163232793493\r
2018-06-16,14.468163232793493\r
2018-06-19,6.765648239557834\r
2018-06-21,12.074845052274858\r
2018-06-26,2.218894172815741\r
2018-06-29,3.0622889979015833\r
2018-07-01,2.218894172815741\r
2018-07-04,2.3506551615546982\r
2018-07-06,2.3506551615546982\r
2019-02-04,9.116115191410552\r
2019-02-06,9.116115191410552\r
2019-02-09,9.116115191410552\r
2019-02-14,2.912960381652402\r
2019-02-16,2.912960381652402\r
2019-02-19,1.0992207994676748\r
2019-02-21,3.860866813598275\r
2019-03-01,2.0906860056861056\r
2019-03-03,4.030894471579149\r
2019-03-08,2.624781329012572\r
2019-03-11,55.36480721960743\r
2019-03-13,55.36480721960743\r
2019-03-16,37.21011842182502\r
2019-03-18,56.53669082833734\r
2019-03-21,54.204383652742095\r
2019-03-23,54.204383652742095\r
2019-03-26,54.204383652742095\r
2019-03-28,63.1861918322306\r
2019-03-31,45.33555163186874\r
2019-04-05,48.02763906047325\r
2019-04-15,63.1861918322306\r
2019-04-17,61.95155953628107\r
2019-04-20,68.2381656156586\r
2019-04-27,27.26989771669816\r
2019-04-30,62.56745485067324\r
2019-05-02,62.56745485067324\r
2019-05-07,62.56745485067324\r
2019-05-10,100.0\r
2019-05-12,100.0\r
2019-05-15,90.97925917490522\r
2019-05-30,100.0\r
2019-06-01,78.88367499272718\r
2019-06-04,93.94195632423833\r
2019-06-14,93.94195632423833\r
2019-06-19,88.06090447790336\r
2019-06-24,93.19713015538163\r
2019-06-26,93.19713015538163\r
2019-06-29,70.17932163016674\r
2019-07-01,70.17932163016674\r
2019-07-04,85.90129635126897\r
2019-07-06,72.8070006377066\r
2019-07-14,62.56745485067324\r
2019-07-16,90.97925917490522\r
2019-07-19,60.12094246041843\r
2019-07-21,61.95155953628107\r
2019-07-24,54.204383652742095\r
2019-07-26,54.204383652742095\r
2019-07-29,55.94931752620247\r
2019-07-31,45.86817101842126\r
2019-08-03,51.91798184546236\r
2019-08-05,44.80583580608168\r
2019-08-08,50.233385478982875\r
2019-08-10,34.824908211493344\r
2019-08-15,43.234132608416445\r
2019-08-18,24.014118579523515\r
2019-08-25,20.58323369329917\r
2019-08-30,20.58323369329917\r
2019-09-02,50.79203673346051\r
2019-09-04,45.86817101842126\r
2019-09-07,51.91798184546236\r
2019-09-09,51.91798184546236\r
2019-09-12,42.20089057918758\r
2019-09-14,42.20089057918758\r
2019-09-17,46.403691698364916\r
2019-09-24,44.279025824438925\r
2019-09-27,28.5404672713693\r
2019-09-29,39.668883939702724\r
2019-10-02,8.13678949538944\r
2019-10-04,8.376751004129773\r
2019-10-07,8.13678949538944\r
2019-10-17,12.948682233717527\r
2019-10-27,26.43786613536237\r
2019-11-06,25.21240327373301\r
2019-11-08,25.21240327373301\r
2019-11-13,25.21240327373301\r
2019-11-16,25.21240327373301\r
2020-02-04,18.78415859545816\r
2020-02-09,5.713656221708854\r
2020-02-11,5.713656221708854\r
2020-02-14,7.900085049657596\r
2020-02-16,2.624781329012572\r
2020-02-19,19.137829226819097\r
2020-02-24,26.43786613536237\r
2020-02-26,26.43786613536237\r
2020-03-07,26.026364086593944\r
2020-03-10,26.026364086593944\r
2020-04-04,7.2095790535908995\r
2020-04-06,7.2095790535908995\r
2020-04-09,24.41052159450308\r
2020-04-11,24.41052159450308\r
2020-04-14,23.620745191259424\r
2020-04-24,36.24718969540112\r
2020-04-29,59.516432735684596\r
2020-05-04,48.02763906047325\r
2020-05-06,48.02763906047325\r
2020-05-09,48.02763906047325\r
2020-05-14,75.47968792231828\r
2020-05-21,85.90129635126897\r
2020-05-24,86.61838572572182\r
2020-05-26,86.61838572572182\r
2020-06-03,72.14585707348029\r
2020-06-05,72.14585707348029\r
2020-06-15,53.055436375671526\r
2020-06-23,69.5294473517081\r
2020-06-25,69.5294473517081\r
2020-06-28,69.5294473517081\r
2020-06-30,69.5294473517081\r
2020-07-03,75.47968792231828\r
2020-07-05,75.47968792231828\r
2020-07-08,75.47968792231828\r
2020-07-10,68.2381656156586\r
2020-07-18,73.47095720755715\r
2020-07-20,50.79203673346051\r
2020-07-23,65.68951920023191\r
2020-07-25,65.68951920023191\r
2020-07-28,65.68951920023191\r
2020-07-30,65.68951920023191\r
2020-08-02,65.68951920023191\r
2020-08-04,62.56745485067324\r
2020-08-07,65.68951920023191\r
2020-08-09,48.02763906047325\r
2020-08-12,78.88367499272718\r
2020-08-14,78.88367499272718\r
2020-08-17,58.31596877885525\r
2020-08-19,58.31596877885525\r
2020-08-22,70.83201583865801\r
2020-08-27,70.17932163016674\r
2020-09-01,74.80730254349652\r
2020-09-03,62.56745485067324\r
2020-09-06,66.32243669005356\r
2020-09-08,32.513580024192656\r
2020-09-13,90.97925917490522\r
2020-09-16,37.695997329331874\r
2020-09-18,38.67657147354767\r
2020-09-23,35.296050334608246\r
2020-09-26,35.296050334608246\r
2020-09-28,35.296050334608246\r
2020-10-01,35.296050334608246\r
2020-10-11,69.5294473517081\r
2020-10-13,69.5294473517081\r
2020-10-21,69.5294473517081\r
2020-10-31,50.79203673346051\r
2020-11-02,50.79203673346051\r
2020-11-05,50.79203673346051\r
2020-11-07,50.79203673346051\r
2020-11-10,31.162387422069628\r
2020-11-12,31.162387422069628\r
2020-11-15,31.162387422069628\r
2020-11-17,31.162387422069628\r
2020-11-20,29.837990519513557\r
2020-11-22,36.24718969540112\r
2020-11-25,36.24718969540112\r
2021-02-08,3.5310924007950364\r
2021-02-13,3.5310924007950364\r
2021-02-15,3.5310924007950364\r
2021-02-18,3.5310924007950364\r
2021-02-23,14.468163232793493\r
2021-02-25,14.468163232793493\r
2021-02-28,46.94211142011931\r
2021-03-02,46.94211142011931\r
2021-03-05,27.69042101710597\r
2021-03-07,46.403691698364916\r
2021-03-12,21.699441041446548\r
2021-03-15,21.699441041446548\r
2021-03-20,38.18481585726938\r
2021-03-22,38.18481585726938\r
2021-03-25,38.18481585726938\r
2021-03-27,38.18481585726938\r
2021-03-30,47.48342794769144\r
2021-04-01,36.24718969540112\r
2021-04-04,79.57287286838388\r
2021-04-06,79.57287286838388\r
2021-04-09,63.80776861125733\r
2021-04-14,81.65723804660007\r
2021-04-19,65.68951920023191\r
2021-04-24,78.88367499272718\r
2021-05-04,80.26486708050385\r
2021-06-13,90.97925917490522\r
2021-06-18,92.45507091981028\r
2021-07-23,42.71605402277051\r
2021-07-25,42.71605402277051\r
2021-07-30,42.71605402277051\r
2021-08-02,100.0\r
2021-08-09,100.0\r
2021-08-12,100.0\r
2021-08-14,50.233385478982875\r
2021-08-17,65.68951920023191\r
2021-08-19,65.68951920023191\r
2021-08-22,65.68951920023191\r
2021-08-27,62.56745485067324\r
2021-08-29,31.162387422069628\r
2021-09-01,37.21011842182502\r
2021-09-06,35.296050334608246\r
2021-09-08,54.204383652742095\r
2021-09-11,53.055436375671526\r
2021-09-13,68.2381656156586\r
2021-09-18,66.95818479123173\r
2021-09-21,88.78633078571838\r
2021-09-23,85.90129635126897\r
2021-09-28,85.90129635126897\r
2021-10-01,85.90129635126897\r
2021-10-06,63.80776861125733\r
2021-10-08,63.80776861125733\r
2021-10-11,49.6776179306223\r
2021-10-13,63.80776861125733\r
2021-10-16,48.02763906047325\r
2021-10-18,54.204383652742095\r
2021-10-21,54.204383652742095\r
2021-10-23,43.234132608416445\r
2021-10-26,45.86817101842126\r
2021-10-28,28.11394521703579\r
2021-11-05,49.12473623496941\r
2021-11-07,43.234132608416445\r
2022-02-08,8.866420016634141\r
2022-02-10,4.204335869978956\r
2022-02-13,13.246282610364233\r
2022-02-15,13.246282610364233\r
2022-02-18,6.334907622244346\r
2022-02-20,13.85093646544244\r
2022-02-23,7.436473214791796\r
2022-02-25,14.157980545831506\r
2022-02-28,8.376751004129773\r
2022-03-02,21.699441041446548\r
2022-03-05,21.324316931825063\r
2022-03-07,17.400313235597313\r
2022-03-10,17.400313235597313\r
2022-03-25,51.353569561711666\r
2022-04-01,51.353569561711666\r
2022-04-04,51.353569561711666\r
2022-04-14,63.1861918322306\r
2022-04-16,63.1861918322306\r
2022-04-19,63.1861918322306\r
2022-05-14,93.19713015538163\r
2022-05-19,93.19713015538163\r
2022-05-21,93.19713015538163\r
2022-05-26,12.65423926291607\r
2022-05-29,85.18698903727184\r
2022-06-05,83.06077503920656\r
2022-06-13,70.83201583865801\r
2022-06-18,83.06077503920656\r
2022-06-20,83.06077503920656\r
2022-06-25,80.26486708050385\r
2022-07-03,85.18698903727184\r
2022-07-05,85.18698903727184\r
2022-07-08,92.45507091981028\r
2022-07-10,92.45507091981028\r
2022-07-13,86.61838572572182\r
2022-07-15,98.4689369497646\r
2022-07-18,75.47968792231828\r
2022-07-20,91.71578009733616\r
2022-07-25,62.56745485067324\r
2022-07-28,63.1861918322306\r
2022-08-02,63.1861918322306\r
2022-08-04,63.1861918322306\r
2022-08-07,95.43990357784598\r
2022-08-09,99.23309080284753\r
2022-08-12,74.13772507555888\r
2022-08-19,65.05943413773501\r
2022-08-22,93.94195632423833\r
2022-08-24,91.71578009733616\r
2022-08-27,100.0\r
2022-08-29,100.0\r
2022-09-01,88.06090447790336\r
2022-09-06,100.0\r
2022-09-08,35.77014504048569\r
2022-09-11,49.12473623496941\r
2022-09-16,60.72830144343778\r
2022-09-18,60.72830144343778\r
2022-09-21,40.67291485494049\r
2022-09-26,28.5404672713693\r
2022-09-28,30.27647408361156\r
2022-10-01,30.27647408361156\r
2022-10-03,17.062080941719895\r
2022-10-06,17.062080941719895\r
2022-10-11,26.026364086593944\r
2022-10-16,26.026364086593944\r
2022-10-18,26.026364086593944\r
2022-10-26,22.077615385747695\r
2022-10-28,22.077615385747695\r
2022-10-31,22.077615385747695\r
2022-11-05,45.33555163186874\r
2022-11-10,46.94211142011931\r
2022-11-17,40.16943582150099\r
2022-11-20,40.16943582150099\r
2023-02-03,18.433567774898073\r
2023-02-05,24.014118579523515\r
2023-02-08,17.741641144422946\r
2023-02-10,18.433567774898073\r
2023-02-13,8.13678949538944\r
2023-02-15,8.13678949538944\r
2023-02-18,4.381181402621494\r
2023-02-20,6.548625574202672\r
2023-02-28,5.316150888867458\r
2023-03-05,29.40249289987093\r
2023-03-07,29.40249289987093\r
2023-03-10,29.40249289987093\r
2023-03-12,29.40249289987093\r
2023-03-15,41.68864464437636\r
2023-03-20,52.485271480333836\r
2023-03-22,52.485271480333836\r
2023-03-25,49.6776179306223\r
2023-03-27,65.05943413773501\r
2023-03-30,65.05943413773501\r
2023-04-01,61.3385077698573\r
2023-04-04,93.19713015538163\r
2023-04-09,90.24550964666271\r
2023-04-11,90.24550964666271\r
2023-04-14,80.26486708050385\r
2023-04-16,82.35761158766441\r
2023-04-19,71.48752823170491\r
2023-04-24,76.83287570166854\r
2023-04-26,85.90129635126897\r
2023-05-04,87.3382556141872\r
2023-05-06,63.80776861125733\r
2023-05-11,63.80776861125733\r
2023-05-24,85.90129635126897\r
2023-05-26,85.90129635126897\r
2023-06-23,100.0\r
2023-06-25,100.0\r
2023-06-28,100.0\r
2023-07-03,68.88239475851081\r
2023-07-05,68.88239475851081\r
2023-07-08,74.13772507555888\r
2023-07-10,74.13772507555888\r
2023-07-13,73.47095720755715\r
2023-07-18,89.51453301401934\r
2023-07-20,93.19713015538163\r
2023-07-23,88.78633078571838\r
2023-07-25,65.05943413773501\r
2023-07-28,65.05943413773501\r
2023-07-30,65.05943413773501\r
2023-08-02,70.83201583865801\r
2023-08-04,58.31596877885525\r
2023-08-07,61.95155953628107\r
2023-08-09,61.95155953628107\r
2023-08-12,54.204383652742095\r
2023-08-14,57.126925126884046\r
2023-08-17,57.126925126884046\r
2023-08-19,44.80583580608168\r
2023-08-22,46.403691698364916\r
2023-08-24,33.429223996790014\r
2023-08-29,33.429223996790014\r
2023-09-01,59.516432735684596\r
2023-09-03,56.53669082833734\r
2023-09-06,57.720018435174616\r
2023-09-08,57.720018435174616\r
2023-09-11,49.12473623496941\r
2023-09-26,36.24718969540112\r
2023-09-28,36.24718969540112\r
2023-10-01,39.171261665520014\r
2023-10-03,39.171261665520014\r
`;export{n as default};
