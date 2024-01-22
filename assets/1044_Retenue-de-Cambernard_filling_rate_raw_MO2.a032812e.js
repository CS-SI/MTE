const r=`date,value\r
2017-02-25,53.93701866666372\r
2017-03-17,60.33116376761396\r
2017-03-27,60.33116376761396\r
2017-04-06,73.64560161772185\r
2017-05-06,72.61654735320991\r
2017-05-13,72.61654735320991\r
2017-05-16,75.10939831684045\r
2017-05-26,84.0326744946544\r
2017-06-02,84.0326744946544\r
2017-06-05,98.18186243784699\r
2017-06-12,97.49238549230738\r
2017-07-05,100.0\r
2017-07-07,100.0\r
2017-08-14,83.64658882280746\r
2017-08-17,83.64658882280746\r
2017-08-19,83.64658882280746\r
2017-08-21,83.64658882280746\r
2017-08-22,83.64658882280746\r
2017-08-24,83.71088121493327\r
2017-08-26,66.28871974615387\r
2017-08-29,66.28871974615387\r
2017-09-03,66.28871974615387\r
2017-09-05,51.58322922086087\r
2017-09-08,52.98986766459104\r
2017-10-08,50.65488306955238\r
2017-10-10,50.65488306955238\r
2017-10-11,50.65488306955238\r
2017-10-13,52.98986766459104\r
2017-10-15,52.98986766459104\r
2017-10-16,52.98986766459104\r
2017-10-18,51.32459908726549\r
2017-10-20,52.728102578648326\r
2017-10-23,49.83602186556459\r
2017-10-25,50.1423953633161\r
2017-10-26,50.1423953633161\r
2017-10-28,49.632239504613054\r
2017-10-30,50.19353924221488\r
2017-10-31,50.19353924221488\r
2017-11-02,50.19353924221488\r
2017-11-07,52.20631233665417\r
2017-11-14,51.22130984469283\r
2017-11-15,51.22130984469283\r
2017-11-17,53.989858121826664\r
2017-11-19,52.67581913677641\r
2017-11-22,53.93701866666372\r
2017-11-24,53.93701866666372\r
2017-11-25,53.93701866666372\r
2017-11-27,52.57132184777492\r
2017-11-30,53.725892265604855\r
2017-12-07,54.042720714162854\r
2018-02-10,95.77820694963468\r
2018-02-12,95.77820694963468\r
2018-02-15,95.77820694963468\r
2018-02-25,94.96023450395612\r
2018-02-27,94.96023450395612\r
2018-03-02,98.66578882990312\r
2018-03-07,98.66578882990312\r
2018-03-09,98.59659134438962\r
2018-03-22,99.28954297058908\r
2018-04-01,99.28954297058908\r
2018-04-21,99.77590010856946\r
2018-04-23,99.77590010856946\r
2018-04-24,99.77590010856946\r
2018-04-26,99.77590010856946\r
2018-05-11,99.49785160079865\r
2018-05-19,99.49785160079865\r
2018-05-21,99.49785160079865\r
2018-06-20,99.63683247894146\r
2018-06-22,99.63683247894146\r
2018-06-23,99.63683247894146\r
2018-06-25,99.84546645119839\r
2018-06-28,99.84546645119839\r
2018-07-02,99.84546645119839\r
2018-07-03,99.84546645119839\r
2018-07-07,98.80424893024198\r
2018-07-08,98.80424893024198\r
2018-07-10,98.94279585895154\r
2018-07-25,95.5052008717513\r
2018-07-27,95.5052008717513\r
2018-07-30,98.735008025723\r
2018-08-01,98.735008025723\r
2018-08-02,98.735008025723\r
2018-08-04,95.5052008717513\r
2018-08-06,98.735008025723\r
2018-08-11,91.3182443423661\r
2018-08-12,91.3182443423661\r
2018-08-19,93.2662102379051\r
2018-08-21,93.2662102379051\r
2018-08-22,93.2662102379051\r
2018-08-26,93.2662102379051\r
2018-08-27,93.2662102379051\r
2018-09-03,54.7852250742668\r
2018-09-05,54.7852250742668\r
2018-09-08,61.11099324007338\r
2018-09-10,61.11099324007338\r
2018-09-11,61.11099324007338\r
2018-09-16,60.164640365928015\r
2018-09-18,60.164640365928015\r
2018-09-23,48.16599745245889\r
2018-09-25,48.16599745245889\r
2018-09-26,48.16599745245889\r
2018-09-28,51.11811366657108\r
2018-09-30,51.11811366657108\r
2018-10-03,46.868177482440885\r
2018-10-05,49.83602186556459\r
2018-10-06,49.83602186556459\r
2018-10-23,39.278681406540656\r
2018-10-25,39.278681406540656\r
2018-11-12,49.12441801228152\r
2018-11-15,49.12441801228152\r
2018-11-17,50.29589694536034\r
2018-11-22,50.29589694536034\r
2018-11-24,47.3156285626326\r
2018-11-27,48.06560254302799\r
2018-11-29,47.36546269288312\r
2018-12-05,47.36546269288312\r
2019-01-11,51.79055182141086\r
2019-01-16,54.57261865694007\r
2019-01-19,54.57261865694007\r
2019-01-23,54.57261865694007\r
2019-01-26,54.36038201506691\r
2019-01-28,60.7762321792485\r
2019-02-15,87.87146456608161\r
2019-02-17,87.87146456608161\r
2019-02-18,87.87146456608161\r
2019-02-20,89.7200538988452\r
2019-02-22,89.7200538988452\r
2019-02-23,89.7200538988452\r
2019-02-25,89.58744119681892\r
2019-02-27,89.58744119681892\r
2019-03-07,95.4370038108169\r
2019-03-12,95.64166034714694\r
2019-03-22,94.55242520738055\r
2019-03-24,92.59242102188455\r
2019-03-25,92.59242102188455\r
2019-03-27,96.94236897611462\r
2019-03-29,96.94236897611462\r
2019-03-30,96.94236897611462\r
2019-04-01,96.94236897611462\r
2019-04-08,96.59931549953885\r
2019-04-09,96.59931549953885\r
2019-05-01,94.89221178268245\r
2019-05-06,97.56123539371434\r
2019-05-11,96.46224640962463\r
2019-05-13,96.46224640962463\r
2019-05-14,96.46224640962463\r
2019-05-16,97.42355732864544\r
2019-05-23,99.49785160079865\r
2019-05-31,99.2201501501195\r
2019-07-05,97.21720328034164\r
2019-07-08,97.21720328034164\r
2019-07-10,97.21720328034164\r
2019-07-12,97.21720328034164\r
2019-07-13,97.21720328034164\r
2019-07-15,96.94236897611462\r
2019-07-17,96.94236897611462\r
2019-07-22,97.90581091025017\r
2019-07-23,97.90581091025017\r
2019-07-25,94.2131838353113\r
2019-07-28,97.01104493013688\r
2019-08-02,68.09545554667194\r
2019-08-04,68.09545554667194\r
2019-08-09,52.10223284264407\r
2019-08-14,44.12685625750814\r
2019-08-16,44.12685625750814\r
2019-08-17,44.12685625750814\r
2019-08-21,44.22348710853719\r
2019-08-22,44.22348710853719\r
2019-08-24,42.49861447049863\r
2019-08-26,43.837531036769796\r
2019-08-29,42.879266397350186\r
2019-08-31,45.63524504496191\r
2019-09-03,44.32021247854816\r
2019-09-06,44.32021247854816\r
2019-09-08,44.32021247854816\r
2019-09-13,42.451139731700124\r
2019-09-15,35.81996862233293\r
2019-09-16,35.81996862233293\r
2019-09-20,35.81996862233293\r
2019-09-21,35.81996862233293\r
2019-10-08,29.293581967083316\r
2019-10-11,29.293581967083316\r
2019-10-13,32.378262136338726\r
2019-10-15,32.378262136338726\r
2019-10-25,31.542190196734264\r
2019-11-27,50.70625999531906\r
2019-12-05,50.70625999531906\r
2019-12-10,50.70625999531906\r
2019-12-27,97.14846208387532\r
2019-12-29,97.14846208387532\r
2019-12-30,97.14846208387532\r
2020-01-06,97.63010703124634\r
2020-01-09,97.63010703124634\r
2020-01-11,98.66578882990312\r
2020-01-14,98.66578882990312\r
2020-01-16,97.63010703124634\r
2020-01-19,97.63010703124634\r
2020-01-28,96.05156148341179\r
2020-02-05,91.85377736478186\r
2020-02-07,91.85377736478186\r
2020-02-08,91.85377736478186\r
2020-02-15,91.85377736478186\r
2020-02-18,91.85377736478186\r
2020-02-20,95.7099227583247\r
2020-02-22,95.36882853658177\r
2020-04-05,97.90581091025017\r
2020-04-08,96.53077007432927\r
2020-04-10,100.0\r
2020-04-12,100.0\r
2020-04-15,98.87351154185343\r
2020-04-25,99.08142960318801\r
2020-04-28,99.42839369752896\r
2020-05-05,97.90581091025017\r
2020-05-07,97.90581091025017\r
2020-05-08,97.90581091025017\r
2020-05-17,94.62033891279518\r
2020-05-18,94.62033891279518\r
2020-05-20,99.77590010856946\r
2020-05-22,99.2201501501195\r
2020-05-25,99.63683247894146\r
2020-05-27,99.63683247894146\r
2020-05-28,99.63683247894146\r
2020-05-30,98.735008025723\r
2020-06-12,98.735008025723\r
2020-06-14,98.735008025723\r
2020-07-19,95.16443345051269\r
2020-07-21,95.16443345051269\r
2020-07-22,95.16443345051269\r
2020-07-24,95.16443345051269\r
2020-07-27,95.16443345051269\r
2020-07-29,94.2131838353113\r
2020-07-31,94.2131838353113\r
2020-08-03,93.2662102379051\r
2020-08-05,81.02964274321022\r
2020-08-06,81.02964274321022\r
2020-08-08,79.01303228379268\r
2020-08-10,52.78040921552798\r
2020-08-15,49.58135226718524\r
2020-08-20,48.71984326575132\r
2020-08-21,48.71984326575132\r
2020-08-23,48.71984326575132\r
2020-09-02,29.85889513810584\r
2020-09-04,29.85889513810584\r
2020-09-05,29.85889513810584\r
2020-09-07,29.85889513810584\r
2020-09-10,29.85889513810584\r
2020-09-12,29.85889513810584\r
2020-09-14,29.85889513810584\r
2020-09-17,29.98066207525883\r
2020-10-17,30.021300298179877\r
2020-10-24,30.021300298179877\r
2020-10-30,30.021300298179877\r
2020-11-01,30.22486058346157\r
2020-11-21,31.293277442817303\r
2020-11-23,31.293277442817303\r
2020-11-26,30.715913485216262\r
2020-11-29,31.791984517952347\r
2021-02-24,96.94236897611462\r
2021-02-27,96.94236897611462\r
2021-03-01,95.23254335478481\r
2021-03-04,97.01104493013688\r
2021-03-09,89.91913741692838\r
2021-03-31,94.62033891279518\r
2021-04-02,94.62033891279518\r
2021-04-03,94.62033891279518\r
2021-04-05,97.97479120413306\r
2021-04-07,98.11281696954589\r
2021-04-15,98.38912916577198\r
2021-04-17,98.18186243784699\r
2021-04-20,98.18186243784699\r
2021-04-22,98.18186243784699\r
2021-04-23,98.18186243784699\r
2021-05-20,94.14540100348577\r
2021-05-27,94.14540100348577\r
2021-05-28,94.14540100348577\r
2021-05-30,94.14540100348577\r
2021-06-09,98.59659134438962\r
2021-06-11,98.59659134438962\r
2021-06-14,99.77590010856946\r
2021-06-16,99.77590010856946\r
2021-06-19,99.77590010856946\r
2021-06-21,98.59659134438962\r
2021-07-29,92.59242102188455\r
2021-08-18,68.03683476040976\r
2021-08-20,68.03683476040976\r
2021-08-21,68.03683476040976\r
2021-08-23,68.03683476040976\r
2021-08-25,68.03683476040976\r
2021-08-26,68.03683476040976\r
2021-08-28,68.03683476040976\r
2021-09-12,40.0152222702584\r
2021-09-17,40.38578598091633\r
2021-09-22,40.66471085158039\r
2021-09-24,39.922820089633156\r
2021-09-25,39.922820089633156\r
2021-09-27,39.922820089633156\r
2021-09-30,39.922820089633156\r
2021-10-12,45.4393407614711\r
2021-10-14,45.4393407614711\r
2021-10-17,45.92980796139601\r
2021-10-19,45.92980796139601\r
2021-10-20,45.92980796139601\r
2021-10-24,38.54826597011962\r
2021-10-27,40.94449396110952\r
2021-12-16,53.93701866666372\r
2021-12-18,53.93701866666372\r
2021-12-19,53.93701866666372\r
2021-12-21,53.93701866666372\r
2021-12-23,53.93701866666372\r
2022-01-15,90.71744419861112\r
2022-01-22,90.71744419861112\r
2022-01-23,90.71744419861112\r
2022-01-25,91.05100309880899\r
2022-01-27,85.45512009695818\r
2022-02-01,85.45512009695818\r
2022-02-09,93.94218342301765\r
2022-03-21,98.5274155707906\r
2022-03-23,98.5274155707906\r
2022-03-24,98.5274155707906\r
2022-03-26,98.5274155707906\r
2022-04-05,95.84651291943703\r
2022-04-10,95.84651291943703\r
2022-04-15,97.8368523444034\r
2022-04-17,97.69900040328407\r
2022-04-25,97.69900040328407\r
2022-07-14,51.169700121337684\r
2022-07-16,51.169700121337684\r
2022-07-17,51.169700121337684\r
2022-07-19,51.169700121337684\r
2022-07-21,51.169700121337684\r
2022-07-22,51.169700121337684\r
2022-07-24,51.73868630665319\r
2022-07-26,39.969009238229454\r
2022-07-27,39.969009238229454\r
2022-07-31,39.969009238229454\r
2022-08-01,39.969009238229454\r
2022-08-03,39.969009238229454\r
2022-08-13,13.846336505104393\r
2022-08-15,13.846336505104393\r
2022-08-18,13.846336505104393\r
2022-08-20,13.846336505104393\r
2022-08-23,14.426832714061808\r
2022-08-28,7.618022431482334\r
2022-08-30,7.618022431482334\r
2022-09-04,7.1406015725146155\r
2022-09-05,7.1406015725146155\r
2022-09-22,7.839589689129918\r
2022-10-02,7.839589689129918\r
2022-10-22,10.411568539576574\r
2022-10-24,10.411568539576574\r
2022-11-01,10.411568539576574\r
2022-11-06,12.142016864051987\r
2022-11-08,12.142016864051987\r
2022-11-11,12.359822705137129\r
2022-11-13,12.359822705137129\r
2022-11-16,12.196305943896279\r
2022-11-24,13.588596304026682\r
2022-12-21,19.819967950564337\r
2022-12-28,19.819967950564337\r
2023-02-04,55.37179813901611\r
2023-02-06,55.37179813901611\r
2023-02-09,56.71529781254736\r
2023-02-11,56.71529781254736\r
2023-02-12,56.71529781254736\r
2023-02-14,56.49937019913628\r
2023-02-16,58.4559642407586\r
2023-02-17,58.4559642407586\r
2023-02-19,53.67316853221703\r
2023-02-21,58.23709454895396\r
2023-02-24,58.23709454895396\r
2023-02-26,52.93746827194295\r
2023-03-01,59.11477534625797\r
2023-03-03,59.00474422281088\r
2023-03-04,59.00474422281088\r
2023-03-09,59.00474422281088\r
2023-03-16,59.16982528419046\r
2023-04-05,62.40185580127508\r
2023-04-07,62.40185580127508\r
2023-04-08,62.40185580127508\r
2023-04-15,62.40185580127508\r
2023-06-24,100.0\r
2023-07-14,100.0\r
2023-07-16,100.0\r
2023-07-17,100.0\r
2023-07-19,100.0\r
2023-07-22,100.0\r
2023-08-08,97.49238549230738\r
2023-08-10,98.66578882990312\r
2023-08-11,98.66578882990312\r
2023-08-13,98.66578882990312\r
2023-08-15,98.66578882990312\r
2023-08-18,99.01210187993121\r
2023-08-20,83.45384420631264\r
2023-08-21,83.45384420631264\r
2023-08-23,83.51807031670388\r
2023-08-31,68.7417738330649\r
2023-09-07,54.732038811792286\r
2023-09-10,54.732038811792286\r
2023-09-14,54.732038811792286\r
2023-09-27,33.693468428887755\r
2023-09-29,33.693468428887755\r
2023-09-30,33.693468428887755\r
2023-10-02,34.079684089713076\r
2023-10-04,34.079684089713076\r
2023-10-05,34.079684089713076\r
2023-10-07,33.565167482055095\r
2023-10-10,34.38143434000667\r
2023-10-12,33.86487679476488\r
2023-10-15,34.81456847763858\r
2023-11-06,35.60031478924721\r
2023-11-08,35.60031478924721\r
2023-11-26,39.18704424493728\r
2023-12-03,39.18704424493728\r
2023-12-16,49.530488375935214\r
`;export{r as default};