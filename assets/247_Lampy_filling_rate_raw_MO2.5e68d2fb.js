const r=`date,value\r
2017-01-03,55.97658599180876\r
2017-01-13,55.97658599180876\r
2017-02-22,75.78818862946264\r
2017-02-25,76.58362367710045\r
2017-03-07,70.49093978113632\r
2017-03-17,100.0\r
2017-03-27,100.0\r
2017-04-23,99.20379651018081\r
2017-05-03,99.20379651018081\r
2017-05-16,96.46940968392289\r
2017-05-23,96.46940968392289\r
2017-05-26,100.0\r
2017-06-02,99.49308328242164\r
2017-06-05,91.00623401170044\r
2017-06-25,97.33018835671592\r
2017-07-02,95.25427838272572\r
2017-07-05,97.04298328382625\r
2017-07-07,95.89695337380611\r
2017-07-10,95.89695337380611\r
2017-07-12,95.89695337380611\r
2017-07-17,89.18526824970176\r
2017-07-22,85.71756157991831\r
2017-07-27,87.8622248937844\r
2017-08-04,84.54886419056969\r
2017-08-06,84.54886419056969\r
2017-08-11,80.60142712466904\r
2017-08-14,80.06183208829735\r
2017-08-19,83.93227766835086\r
2017-08-21,77.44841563781254\r
2017-08-24,80.46641684352043\r
2017-08-26,76.98236231258745\r
2017-08-29,78.91915114567591\r
2017-09-03,74.86363360155129\r
2017-09-05,70.68487892042474\r
2017-09-08,71.91721332621428\r
2017-09-10,62.3814267236521\r
2017-09-13,66.64912914704628\r
2017-09-20,66.1422491794599\r
2017-09-23,63.81452746066017\r
2017-09-28,64.62925434242739\r
2017-10-03,62.00933511377473\r
2017-10-05,56.156402790867524\r
2017-10-08,59.48636600255045\r
2017-10-10,56.63683871066071\r
2017-10-13,60.15987986112529\r
2017-10-15,57.23926971431551\r
2017-10-18,56.9980462595301\r
2017-10-25,56.396452811516\r
2017-10-28,54.96120817636352\r
2017-10-30,59.6086378489452\r
2017-11-07,54.48549888240425\r
2017-11-17,62.75424832806527\r
2017-11-19,69.33098567340373\r
2017-11-22,65.00642488239818\r
2017-11-24,65.00642488239818\r
2017-11-27,65.00642488239818\r
2017-11-29,68.17736748091065\r
2017-12-24,81.07454775739279\r
2017-12-27,81.07454775739279\r
2018-02-25,83.31717447586828\r
2018-02-27,83.52204382790092\r
2018-03-02,84.27464284818113\r
2018-03-14,83.93227766835086\r
2018-03-19,95.61114491637136\r
2018-03-22,95.61114491637136\r
2018-04-01,92.13281807488907\r
2018-04-18,95.68257077499823\r
2018-04-21,98.84257712137138\r
2018-04-23,98.84257712137138\r
2018-04-26,96.11149341287287\r
2018-05-06,93.90218808077752\r
2018-05-11,96.18304172506608\r
2018-05-18,96.18304172506608\r
2018-05-21,96.18304172506608\r
2018-06-20,95.39697242629165\r
2018-06-22,95.39697242629165\r
2018-06-25,98.84257712137138\r
2018-06-27,98.84257712137138\r
2018-07-02,98.12143732708172\r
2018-07-07,96.25460751272986\r
2018-07-10,94.82661720795075\r
2018-07-12,94.61302363205624\r
2018-07-15,93.40565132104727\r
2018-07-17,93.40565132104727\r
2018-07-20,92.76851809881236\r
2018-07-22,89.95420209749737\r
2018-07-25,94.68420392220204\r
2018-07-27,99.71022974907602\r
2018-07-30,94.54186091644705\r
2018-08-01,95.04036883223439\r
2018-08-04,91.9212371404806\r
2018-08-06,94.89785019448591\r
2018-08-11,87.79277101144854\r
2018-08-16,86.47657893482254\r
2018-08-19,90.58493946072626\r
2018-08-21,86.26935641274174\r
2018-08-26,89.95420209749737\r
2018-08-31,83.45373569348547\r
2018-09-03,79.65791736766396\r
2018-09-08,87.65391734769912\r
2018-09-10,87.65391734769912\r
2018-09-13,87.65391734769912\r
2018-09-20,75.85437070525694\r
2018-09-23,77.38178007048387\r
2018-09-25,75.12741194586036\r
2018-09-28,75.12741194586036\r
2018-09-30,75.19340410429713\r
2018-10-03,72.30782182056437\r
2018-10-05,72.69912420807273\r
2018-10-23,71.72216969250168\r
2018-10-25,78.78507295641505\r
2018-10-30,78.78507295641505\r
2018-11-04,71.52730001720221\r
2018-11-29,61.82356352567915\r
2018-12-19,61.390808723284266\r
2018-12-27,67.41182669789015\r
2018-12-29,67.41182669789015\r
2019-01-01,73.35283335147857\r
2019-01-03,76.45086192406576\r
2019-01-11,76.45086192406576\r
2019-01-16,73.6804075431344\r
2019-02-12,73.28737602975511\r
2019-02-15,78.58409604954083\r
2019-02-17,72.89503520989093\r
2019-02-20,76.25186112943399\r
2019-02-22,74.27124709232292\r
2019-02-25,74.40275499986252\r
2019-02-27,75.58975622125665\r
2019-03-12,81.68417975565237\r
2019-03-22,80.33148088182699\r
2019-03-24,78.18264813558253\r
2019-03-27,79.25467384663256\r
2019-03-29,78.71806193171741\r
2019-04-01,77.18198637676159\r
2019-04-08,78.65106962760089\r
2019-04-13,77.98217742532128\r
2019-05-01,88.07069468388255\r
2019-05-06,95.46834573752199\r
2019-05-11,95.46834573752199\r
2019-05-13,91.07651213532522\r
2019-05-16,91.07651213532522\r
2019-05-23,89.46462980742864\r
2019-06-02,92.83923996558995\r
2019-06-12,92.83923996558995\r
2019-06-17,87.30709900603267\r
2019-06-22,96.75605696501155\r
2019-06-25,96.75605696501155\r
2019-06-27,88.55775440209862\r
2019-06-30,93.83120136094803\r
2019-07-02,93.83120136094803\r
2019-07-05,98.33759722486414\r
2019-07-07,98.33759722486414\r
2019-07-10,93.33478807041449\r
2019-07-12,98.12143732708172\r
2019-07-15,98.84257712137138\r
2019-07-17,92.62712745123876\r
2019-07-22,97.54577492359088\r
2019-07-25,94.2573858902792\r
2019-08-01,95.39697242629165\r
2019-08-04,95.68257077499823\r
2019-08-09,86.82231225487844\r
2019-08-11,87.93169680323018\r
2019-08-14,84.2061332175715\r
2019-08-16,85.23569550505027\r
2019-08-21,82.49935077720755\r
2019-08-24,84.89205183137746\r
2019-08-26,82.97609280500401\r
2019-08-29,84.75472201561215\r
2019-08-31,82.83978879465035\r
2019-09-03,83.59037030584524\r
2019-09-05,83.59037030584524\r
2019-09-13,80.26404078416518\r
2019-09-15,78.85210269622317\r
2019-09-18,76.71646102284132\r
2019-09-20,77.04888481027456\r
2019-10-08,67.666691590337\r
2019-10-13,67.666691590337\r
2019-10-25,65.88928596222328\r
2019-10-30,72.11243075614986\r
2019-11-04,70.49093978113632\r
2019-11-09,70.49093978113632\r
2020-01-01,66.26885005797352\r
2020-01-06,74.27124709232292\r
2020-01-11,71.72216969250168\r
2020-01-16,71.72216969250168\r
2020-01-18,76.91585867939736\r
2020-02-05,75.52365004389831\r
2020-02-07,75.52365004389831\r
2020-02-15,75.52365004389831\r
2020-02-20,76.51723334868028\r
2020-02-22,73.09111920363293\r
2020-03-01,73.09111920363293\r
2020-03-08,84.68608448237104\r
2020-03-11,84.68608448237104\r
2020-03-13,86.75312936906282\r
2020-03-18,83.18068669429051\r
2020-03-21,84.00071409943858\r
2020-03-28,79.25467384663256\r
2020-03-31,79.72518990822266\r
2020-04-05,81.95560813003544\r
2020-04-07,81.07454775739279\r
2020-04-10,90.02421256236457\r
2020-04-12,90.02421256236457\r
2020-04-15,90.02421256236457\r
2020-04-25,89.53451499775845\r
2020-05-05,88.55775440209862\r
2020-05-07,91.00623401170044\r
2020-05-17,89.95420209749737\r
2020-05-20,89.25508174897078\r
2020-05-22,89.18526824970176\r
2020-05-25,90.65511064903706\r
2020-05-27,90.30443314632477\r
2020-05-30,90.30443314632477\r
2020-06-21,91.9917463752161\r
2020-06-24,91.9917463752161\r
2020-06-26,91.9917463752161\r
2020-07-01,91.9917463752161\r
2020-07-04,87.37642656125806\r
2020-07-09,100.0\r
2020-07-11,100.0\r
2020-07-14,95.325616639858\r
2020-07-19,97.97741750185594\r
2020-07-21,95.04036883223439\r
2020-07-24,92.34455862990252\r
2020-07-26,94.75540178234543\r
2020-07-29,94.18631111556057\r
2020-07-31,91.56895730488239\r
2020-08-03,91.56895730488239\r
2020-08-05,85.64866898668373\r
2020-08-08,91.42816974921601\r
2020-08-10,88.48812046838901\r
2020-08-15,88.97593538001932\r
2020-08-20,89.60441809883322\r
2020-08-23,87.58451757609168\r
2020-08-25,82.97609280500401\r
2020-09-02,79.85979090098387\r
2020-09-04,80.06183208829735\r
2020-09-07,71.91721332621428\r
2020-09-12,74.40275499986252\r
2020-09-14,75.98679173231459\r
2020-09-17,75.78818862946264\r
2020-09-19,73.74597985700913\r
2020-10-17,72.30782182056437\r
2020-10-24,74.33699149987565\r
2020-11-01,74.33699149987565\r
2020-11-11,49.34334303933167\r
2020-11-18,51.776680303509984\r
2020-11-21,49.056229881078934\r
2020-11-23,49.056229881078934\r
2020-11-26,49.056229881078934\r
2021-02-11,65.3843151548127\r
2021-02-14,65.3843151548127\r
2021-02-19,65.3843151548127\r
2021-03-23,82.3633044829645\r
2021-03-26,79.65791736766396\r
2021-03-28,91.21712179587111\r
2021-03-31,91.21712179587111\r
2021-04-02,91.21712179587111\r
2021-04-05,97.40203314710325\r
2021-04-07,97.40203314710325\r
2021-04-15,99.34840533191569\r
2021-04-20,98.84257712137138\r
2021-04-22,98.84257712137138\r
2021-05-12,100.0\r
2021-05-20,100.0\r
2021-05-27,99.85508037049256\r
2021-05-30,100.0\r
2021-06-09,94.11525394268591\r
2021-06-11,95.46834573752199\r
2021-06-14,95.46834573752199\r
2021-06-16,92.90997952151928\r
2021-06-19,92.90997952151928\r
2021-06-21,97.90543363436474\r
2021-06-26,91.70981595277703\r
2021-07-01,86.33841245266466\r
2021-07-19,86.82231225487844\r
2021-07-21,86.82231225487844\r
2021-07-26,86.82231225487844\r
2021-07-29,93.26394247661872\r
2021-08-05,91.9917463752161\r
2021-08-10,93.5474307744188\r
2021-08-13,93.5474307744188\r
2021-08-18,93.5474307744188\r
2021-08-20,95.53973656904783\r
2021-08-23,93.83120136094803\r
2021-08-25,93.83120136094803\r
2021-08-28,95.89695337380611\r
2021-08-30,86.68396458918667\r
2021-09-04,88.34890655546688\r
2021-09-07,88.34890655546688\r
2021-09-12,84.89205183137746\r
2021-09-14,84.89205183137746\r
2021-09-17,86.20031851356806\r
2021-09-22,82.9079316047848\r
2021-09-24,78.71806193171741\r
2021-09-29,78.31638910753777\r
2021-10-12,76.0530306722224\r
2021-10-14,78.5171412030173\r
2021-10-17,78.5171412030173\r
2021-10-24,72.37299073291726\r
2021-10-27,70.62021310684817\r
2021-12-16,74.66599980826993\r
2021-12-18,79.18753193078024\r
2021-12-21,75.12741194586036\r
2021-12-23,75.12741194586036\r
2022-01-12,77.18198637676159\r
2022-01-15,78.85210269622317\r
2022-01-17,75.32544546783171\r
2022-01-22,76.58362367710045\r
2022-01-25,76.45086192406576\r
2022-01-27,76.31817580879988\r
2022-01-30,74.33699149987565\r
2022-02-01,74.33699149987565\r
2022-02-06,72.56861305913587\r
2022-02-09,78.0489822216993\r
2022-02-26,74.1398155777378\r
2022-03-01,76.58362367710045\r
2022-03-03,78.45020509351511\r
2022-03-08,78.31638910753777\r
2022-03-26,74.79773661657791\r
2022-04-05,87.72333516111975\r
2022-04-10,87.72333516111975\r
2022-04-15,90.51478611155004\r
2022-04-17,87.65391734769912\r
2022-04-27,79.85979090098387\r
2022-05-17,90.51478611155004\r
2022-05-20,90.51478611155004\r
2022-05-22,91.56895730488239\r
2022-05-27,92.48580761588683\r
2022-05-30,87.65391734769912\r
2022-06-01,91.07651213532522\r
2022-06-04,87.93169680323018\r
2022-06-06,92.90997952151928\r
2022-06-11,92.90997952151928\r
2022-06-14,91.70981595277703\r
2022-06-16,91.70981595277703\r
2022-06-19,90.86573120135562\r
2022-06-29,90.65511064903706\r
2022-07-11,84.27464284818113\r
2022-07-14,88.00118673489268\r
2022-07-16,85.09818335216534\r
2022-07-19,86.40748662835189\r
2022-07-21,84.82337780030606\r
2022-07-24,83.86385954994763\r
2022-07-26,83.31717447586828\r
2022-07-29,81.61636885952414\r
2022-07-31,77.18198637676159\r
2022-08-03,76.98236231258745\r
2022-08-05,77.98217742532128\r
2022-08-08,76.18556537644481\r
2022-08-10,76.18556537644481\r
2022-08-13,74.33699149987565\r
2022-08-15,71.13808319284647\r
2022-08-20,67.0936898839874\r
2022-08-23,71.07328152753936\r
2022-08-28,64.127482362947\r
2022-08-30,61.51435111099903\r
2022-09-02,61.82356352567915\r
2022-09-04,59.6086378489452\r
2022-09-12,55.08034744878749\r
2022-09-19,45.878437774998545\r
2022-09-22,41.57038189425768\r
2022-10-02,37.7721548762968\r
2022-10-04,38.14129711738836\r
2022-10-07,38.14129711738836\r
2022-10-09,35.22143753025367\r
2022-10-12,35.22143753025367\r
2022-10-22,33.233553994973185\r
2022-10-24,33.233553994973185\r
2022-10-27,33.233553994973185\r
2022-11-01,34.19727447390186\r
2022-11-06,30.10359545462188\r
2022-11-08,31.581376628106177\r
2022-11-11,31.581376628106177\r
2022-11-13,32.27892148623405\r
2022-11-16,31.333468390663178\r
2022-12-06,51.252019242849286\r
2022-12-26,56.27638578565103\r
2022-12-28,58.75446831581959\r
2023-01-10,35.840679678412116\r
2023-01-12,53.12542186771342\r
2023-01-20,53.12542186771342\r
2023-02-06,67.6029457727266\r
2023-02-09,67.6029457727266\r
2023-02-11,70.62021310684817\r
2023-02-14,70.55556672504754\r
2023-02-16,72.11243075614986\r
2023-02-19,73.35283335147857\r
2023-02-21,73.35283335147857\r
2023-02-26,73.09111920363293\r
2023-03-01,75.06143881062363\r
2023-03-03,78.9862182993121\r
2023-03-13,85.30447890803693\r
2023-03-16,84.54886419056969\r
2023-03-28,91.85074565537656\r
2023-04-05,100.0\r
2023-04-07,94.96910073742221\r
2023-04-15,100.0\r
2023-04-17,96.32619077140039\r
2023-05-02,94.39958822701212\r
2023-05-27,87.37642656125806\r
2023-05-30,87.37642656125806\r
2023-06-04,89.81423481854138\r
2023-06-16,88.20976461430682\r
2023-06-24,88.20976461430682\r
2023-06-26,88.20976461430682\r
2023-07-09,54.604298910010264\r
2023-07-11,54.604298910010264\r
2023-07-14,91.49855463817318\r
2023-07-16,88.90619364892413\r
2023-07-19,88.90619364892413\r
2023-07-21,94.96910073742221\r
`;export{r as default};
