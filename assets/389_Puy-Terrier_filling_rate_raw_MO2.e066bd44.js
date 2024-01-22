const r=`date,value\r
2017-02-18,15.559531919863751\r
2017-02-25,15.559531919863751\r
2017-02-28,15.559531919863751\r
2017-04-09,61.4338855975179\r
2017-04-19,62.675583527687586\r
2017-04-29,60.752084021211914\r
2017-05-09,62.08019745774773\r
2017-06-18,54.91036135654562\r
2017-06-25,54.91036135654562\r
2017-08-02,43.9519945821296\r
2017-08-04,43.9519945821296\r
2017-08-07,45.674833775175514\r
2017-08-09,45.674833775175514\r
2017-08-14,41.111547700341774\r
2017-08-27,44.06808843217399\r
2017-08-29,44.06808843217399\r
2017-09-03,44.06808843217399\r
2017-09-06,44.15008911926844\r
2017-10-11,33.61143295973674\r
2017-10-13,33.61143295973674\r
2017-10-16,34.49428256430568\r
2017-10-18,34.49428256430568\r
2017-10-21,33.92191462446078\r
2017-10-26,31.9963048960184\r
2017-10-28,28.393324744045596\r
2017-10-31,28.393324744045596\r
2017-11-02,28.23657729119765\r
2017-11-05,28.659147376038298\r
2017-11-25,25.83876545311722\r
2017-11-30,25.235668218489764\r
2018-01-14,41.64843826329888\r
2018-01-16,41.64843826329888\r
2018-01-19,41.64843826329888\r
2018-01-24,41.64843826329888\r
2018-03-20,96.69590819015463\r
2018-04-19,95.09593004552426\r
2018-04-21,95.09593004552426\r
2018-04-24,97.71254898458034\r
2018-04-26,97.71254898458034\r
2018-05-04,95.92050858370108\r
2018-05-09,96.38042299089702\r
2018-05-11,96.38042299089702\r
2018-05-19,96.52533946533698\r
2018-05-21,95.03650227217312\r
2018-05-24,95.6142446746503\r
2018-05-26,95.6142446746503\r
2018-06-23,97.74677394644104\r
2018-06-25,97.74677394644104\r
2018-06-28,99.96141607355676\r
2018-07-03,100.0\r
2018-07-08,98.61207538806713\r
2018-07-18,89.5560076330398\r
2018-07-20,88.90556317296844\r
2018-07-23,89.90680139751697\r
2018-07-25,89.52261892429863\r
2018-07-28,89.52261892429863\r
2018-08-02,89.99873997610554\r
2018-08-04,89.06388128476819\r
2018-08-12,89.91515835261802\r
2018-08-22,85.06413979288648\r
2018-09-01,75.00678957331887\r
2018-09-11,68.68555393680472\r
2018-09-16,64.82153092825783\r
2018-09-26,61.246363305225884\r
2018-09-28,60.19924076404346\r
2018-10-06,60.19924076404346\r
2018-10-21,57.30939136557236\r
2018-10-23,57.30939136557236\r
2018-11-15,50.05188753244144\r
2018-11-22,50.05188753244144\r
2018-12-25,78.22564372676926\r
2019-02-03,85.64058663571187\r
2019-02-13,84.63663529027275\r
2019-02-15,84.63663529027275\r
2019-02-18,90.40023706986786\r
2019-02-20,90.34165395872992\r
2019-02-23,90.87767018752115\r
2019-02-25,90.87767018752115\r
2019-03-30,99.79784461388043\r
2019-04-01,99.79784461388043\r
2019-04-11,99.76341816591723\r
2019-04-14,100.0\r
2019-04-19,100.0\r
2019-06-13,91.91033740654552\r
2019-06-18,99.00688658650868\r
2019-06-25,99.00688658650868\r
2019-06-28,99.05841655748222\r
2019-07-03,100.0\r
2019-07-05,97.34484470469671\r
2019-07-08,97.55857858638585\r
2019-07-10,97.55857858638585\r
2019-07-13,95.14687649260519\r
2019-07-15,94.19714955141785\r
2019-07-23,91.64976097772924\r
2019-07-25,92.52477781763943\r
2019-07-28,90.04053901731089\r
2019-08-02,87.58381831658727\r
2019-08-04,87.58381831658727\r
2019-08-22,65.79881112582979\r
2019-08-24,65.79881112582979\r
2019-08-29,65.79881112582979\r
2019-09-03,65.79881112582979\r
2019-09-06,66.67267059494192\r
2019-09-08,59.28349492772982\r
2019-09-11,59.28349492772982\r
2019-09-13,59.28349492772982\r
2019-09-16,60.355983516503564\r
2019-09-18,60.355983516503564\r
2019-09-21,57.788236177316534\r
2019-10-11,47.14445688653976\r
2019-10-13,47.14445688653976\r
2020-01-19,81.05193451132855\r
2020-01-21,81.05193451132855\r
2020-01-24,82.174057705911\r
2020-03-19,89.78147342017897\r
2020-03-24,93.69793144711791\r
2020-03-26,94.0701586327267\r
2020-03-31,94.0701586327267\r
2020-04-05,91.88511119612322\r
2020-04-13,99.54832894861116\r
2020-04-15,99.54832894861116\r
2020-04-18,99.70317996064489\r
2020-04-23,98.5005791526186\r
2020-05-18,99.04982770275164\r
2020-05-20,99.04982770275164\r
2020-05-25,99.04982770275164\r
2020-05-28,100.0\r
2020-05-30,100.0\r
2020-06-02,99.70317996064489\r
2020-06-09,100.0\r
2020-07-07,90.52580844133796\r
2020-07-09,89.13890185326673\r
2020-07-12,93.37679843670334\r
2020-07-14,93.37679843670334\r
2020-07-17,91.61615344696685\r
2020-07-19,91.61615344696685\r
2020-07-22,91.12923603750998\r
2020-07-24,87.45941460771553\r
2020-07-27,88.35623524475292\r
2020-08-06,75.53927948065956\r
2020-08-08,76.3280377579425\r
2020-08-11,70.55132410104507\r
2020-09-10,55.5219811838878\r
2020-09-12,55.5219811838878\r
2020-09-15,57.09611660168097\r
2020-09-17,57.09611660168097\r
2020-11-04,42.87716073373677\r
2020-11-06,42.87716073373677\r
2020-11-14,45.77838327749541\r
2020-11-19,42.70101171131167\r
2020-11-21,45.185600269500966\r
2020-11-26,45.185600269500966\r
2020-11-29,43.6382927745078\r
2021-02-27,94.65471744382288\r
2021-03-01,94.65471744382288\r
2021-03-04,94.65471744382288\r
2021-03-06,94.65471744382288\r
2021-03-09,96.4486113133859\r
2021-03-14,97.05437936453671\r
2021-03-24,94.62080204188797\r
2021-03-29,98.59491980085608\r
2021-03-31,98.59491980085608\r
2021-04-03,95.18933775559621\r
2021-04-05,97.4388712900868\r
2021-04-08,93.07285480208314\r
2021-04-13,88.97221372743823\r
2021-04-15,90.15760550845478\r
2021-04-18,90.15760550845478\r
2021-04-23,88.82226983500759\r
2021-05-03,90.55092862637449\r
2021-05-08,90.04889948376712\r
2021-05-28,85.4098758740777\r
2021-05-30,85.4098758740777\r
2021-06-07,85.4098758740777\r
2021-07-17,75.38816675779451\r
2021-07-19,75.38816675779451\r
2021-07-22,77.17512778929937\r
2021-08-11,64.34964985039788\r
2021-08-13,64.34964985039788\r
2021-08-26,55.412622998859895\r
2021-08-28,55.412622998859895\r
2021-09-02,55.412622998859895\r
2021-09-05,55.412622998859895\r
2021-09-30,41.95804002992657\r
2021-10-07,41.95804002992657\r
2021-10-10,41.95804002992657\r
2021-11-09,38.91127326816552\r
2021-11-19,39.47302827605265\r
2021-11-24,37.350550010054675\r
2021-11-29,37.350550010054675\r
2022-02-27,50.04480576628644\r
2022-03-06,50.04480576628644\r
2022-03-09,53.62788557060437\r
2022-03-24,47.912156232438036\r
2022-03-26,47.912156232438036\r
2022-05-08,54.40214396535453\r
2022-05-10,54.40214396535453\r
2022-05-28,55.2304948554732\r
2022-05-30,55.2304948554732\r
2022-06-02,55.2304948554732\r
2022-06-04,55.2304948554732\r
2022-06-17,52.69143348583464\r
2022-06-19,52.69143348583464\r
2022-06-27,52.928706420773565\r
2022-07-02,48.76065836671325\r
2022-07-04,48.76065836671325\r
2022-07-07,48.77471851495901\r
2022-07-12,48.66929533698109\r
2022-07-14,47.26287218285441\r
2022-07-17,47.26287218285441\r
2022-07-19,46.30405078292518\r
2022-08-06,48.423558862193886\r
2022-08-08,48.423558862193886\r
2022-08-11,47.646554915789224\r
2022-08-13,48.76065836671325\r
2022-08-18,45.99951019159513\r
2022-09-20,38.19424771449838\r
2022-09-22,38.19424771449838\r
2022-09-30,38.19424771449838\r
2022-11-19,30.13358614739031\r
2023-05-03,94.79889621559148\r
2023-05-28,96.34633394134944\r
2023-05-30,96.07374429492536\r
2023-06-02,99.4623300090819\r
2023-06-04,99.4623300090819\r
2023-06-07,97.70399327342238\r
2023-06-14,97.31920554369012\r
2023-07-07,87.67507945766894\r
2023-07-14,87.66678188037893\r
2023-07-17,87.66678188037893\r
2023-08-21,79.22371297765663\r
2023-08-23,79.22371297765663\r
2023-08-28,79.22371297765663\r
2023-09-15,72.28967502501983\r
2023-10-10,69.03430802840815\r
`;export{r as default};