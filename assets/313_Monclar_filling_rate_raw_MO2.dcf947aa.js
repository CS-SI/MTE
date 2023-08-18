const r=`date,value\r
2017-01-26,83.82086685997919\r
2017-02-25,92.15682448420763\r
2017-03-17,90.02260385669142\r
2017-03-27,90.02260385669142\r
2017-04-03,74.29158562501996\r
2017-04-06,74.43899833524095\r
2017-05-16,98.1450576576573\r
2017-05-26,98.45381505310087\r
2017-06-02,95.98827311823749\r
2017-06-05,95.98827311823749\r
2017-06-25,93.68630216450116\r
2017-07-02,94.60598038953893\r
2017-07-05,97.83646091007483\r
2017-07-07,96.44977268636879\r
2017-08-04,95.68081048429437\r
2017-08-06,95.68081048429437\r
2017-08-07,95.68081048429437\r
2017-08-11,95.68081048429437\r
2017-08-12,95.68081048429437\r
2017-08-14,98.2994162955115\r
2017-08-17,98.2994162955115\r
2017-08-19,100.0\r
2017-08-21,100.0\r
2017-08-22,100.0\r
2017-08-24,97.68222288505703\r
2017-08-26,99.38104776208284\r
2017-08-29,90.63153586807921\r
2017-09-03,97.68222288505703\r
2017-09-05,83.36998342092656\r
2017-09-08,83.36998342092656\r
2017-09-28,92.46238637976143\r
2017-10-03,92.46238637976143\r
2017-10-05,92.46238637976143\r
2017-10-08,93.68630216450116\r
2017-10-10,89.87047711271602\r
2017-10-11,89.87047711271602\r
2017-10-13,96.29589880617873\r
2017-10-15,96.29589880617873\r
2017-10-16,96.29589880617873\r
2017-10-18,88.80678541048145\r
2017-10-20,95.21992302652416\r
2017-10-23,95.21992302652416\r
2017-10-25,85.17592161039532\r
2017-10-26,85.17592161039532\r
2017-10-28,85.32670473379741\r
2017-10-30,82.01975786884255\r
2017-10-31,82.01975786884255\r
2017-11-02,82.01975786884255\r
2017-11-07,82.1696025183197\r
2017-11-14,77.69419187410848\r
2017-11-15,77.69419187410848\r
2017-11-17,78.28850610825727\r
2017-11-22,76.5078212657968\r
2017-11-24,76.5078212657968\r
2017-11-25,76.5078212657968\r
2017-11-27,77.99125531455509\r
2017-11-30,78.13985732207757\r
2017-12-07,73.70241929084555\r
2018-02-10,75.62003426644439\r
2018-02-12,75.62003426644439\r
2018-02-15,75.62003426644439\r
2018-02-25,77.24894904928945\r
2018-02-27,77.24894904928945\r
2018-03-02,77.24894904928945\r
2018-03-07,77.24894904928945\r
2018-03-17,82.31949239884719\r
2018-03-19,82.31949239884719\r
2018-03-22,90.63153586807921\r
2018-04-01,88.04829286564132\r
2018-04-21,93.68630216450116\r
2018-04-23,93.68630216450116\r
2018-04-24,93.68630216450116\r
2018-04-26,93.68630216450116\r
2018-05-06,65.97111432272261\r
2018-05-11,82.769432876302\r
2018-05-19,82.769432876302\r
2018-05-21,91.08867982514164\r
2018-05-23,86.9882185905077\r
2018-06-20,94.45259752142819\r
2018-06-22,94.45259752142819\r
2018-06-23,94.45259752142819\r
2018-06-25,99.38104776208284\r
2018-06-28,99.38104776208284\r
2018-07-02,99.07181044018293\r
2018-07-03,99.07181044018293\r
2018-07-07,89.11048335648111\r
2018-07-08,89.11048335648111\r
2018-07-10,98.60825388831977\r
2018-07-12,96.91163795098214\r
2018-07-15,99.38104776208284\r
2018-07-18,99.38104776208284\r
2018-07-22,88.19990519783566\r
2018-07-23,88.19990519783566\r
2018-07-25,88.65500082359377\r
2018-07-27,85.47753196158791\r
2018-07-30,94.75940441864935\r
2018-08-01,94.75940441864935\r
2018-08-02,94.75940441864935\r
2018-08-04,86.08128087704456\r
2018-08-06,96.29589880617873\r
2018-08-11,85.93027775115127\r
2018-08-12,85.93027775115127\r
2018-08-19,93.68630216450116\r
2018-08-21,93.68630216450116\r
2018-08-22,93.68630216450116\r
2018-08-26,93.68630216450116\r
2018-08-27,93.68630216450116\r
2018-09-03,82.769432876302\r
2018-09-05,82.769432876302\r
2018-09-08,93.83947855479397\r
2018-09-10,93.83947855479397\r
2018-09-11,93.83947855479397\r
2018-09-16,91.69879593008685\r
2018-09-18,91.69879593008685\r
2018-09-23,89.26239661762541\r
2018-09-25,89.26239661762541\r
2018-09-26,89.26239661762541\r
2018-09-28,97.37386774509854\r
2018-09-30,97.37386774509854\r
2018-10-03,88.9586129377928\r
2018-10-05,97.68222288505703\r
2018-10-06,97.68222288505703\r
2018-11-17,77.10062897161465\r
2018-11-22,81.4208326891128\r
2018-11-24,81.4208326891128\r
2018-11-27,81.4208326891128\r
2018-11-29,71.50001179156193\r
2019-01-11,71.06086336985304\r
2019-01-16,81.72020448426952\r
2019-01-19,81.72020448426952\r
2019-01-23,81.72020448426952\r
2019-01-26,81.72020448426952\r
2019-01-28,81.12164292981015\r
2019-02-15,86.68573132079797\r
2019-02-17,86.68573132079797\r
2019-02-18,86.68573132079797\r
2019-02-20,88.19990519783566\r
2019-02-22,88.19990519783566\r
2019-02-23,88.19990519783566\r
2019-02-25,86.83695316080106\r
2019-02-27,86.83695316080106\r
2019-03-07,91.39365363076713\r
2019-03-12,90.02260385669142\r
2019-03-22,84.72383738942997\r
2019-03-24,84.72383738942997\r
2019-03-25,84.72383738942997\r
2019-03-27,88.19990519783566\r
2019-03-29,88.19990519783566\r
2019-03-30,88.19990519783566\r
2019-04-01,88.19990519783566\r
2019-04-08,85.32670473379741\r
2019-04-09,85.32670473379741\r
2019-05-01,84.72383738942997\r
2019-05-06,84.72383738942997\r
2019-05-11,84.72383738942997\r
2019-05-13,84.72383738942997\r
2019-05-14,84.72383738942997\r
2019-05-16,84.72383738942997\r
2019-05-31,80.37446789054665\r
2019-06-02,80.37446789054665\r
2019-06-08,80.37446789054665\r
2019-06-12,80.37446789054665\r
2019-06-13,80.37446789054665\r
2019-06-30,89.71839296846025\r
2019-07-03,89.71839296846025\r
2019-07-05,98.45381505310087\r
2019-07-08,98.45381505310087\r
2019-07-10,91.54620374221781\r
2019-07-12,91.54620374221781\r
2019-07-13,91.54620374221781\r
2019-07-15,98.45381505310087\r
2019-07-17,97.2197507154733\r
2019-07-22,100.0\r
2019-07-23,100.0\r
2019-07-25,98.1450576576573\r
2019-07-28,100.0\r
2019-08-02,98.91725162371917\r
2019-08-04,99.07181044018293\r
2019-08-09,94.29925585902565\r
2019-08-14,93.68630216450116\r
2019-08-16,93.68630216450116\r
2019-08-17,93.68630216450116\r
2019-08-21,97.5280251491959\r
2019-08-22,97.5280251491959\r
2019-08-24,95.06637578157913\r
2019-08-26,98.76273275916174\r
2019-08-29,94.29925585902565\r
2019-08-31,100.0\r
2019-09-03,98.1450576576573\r
2019-09-06,98.1450576576573\r
2019-09-08,98.1450576576573\r
2019-09-11,98.76273275916174\r
2019-09-13,95.52714042199663\r
2019-09-15,98.76273275916174\r
2019-09-16,98.76273275916174\r
2019-09-20,95.52714042199663\r
2019-09-21,95.52714042199663\r
2019-10-08,84.72383738942997\r
2019-10-11,84.72383738942997\r
2019-10-13,95.21992302652416\r
2019-10-15,95.21992302652416\r
2019-10-25,93.83947855479397\r
2019-11-27,66.83917363000728\r
2019-12-05,66.83917363000728\r
2019-12-10,66.83917363000728\r
2020-01-06,80.67320059075928\r
2020-01-09,80.67320059075928\r
2020-01-11,82.4694274553067\r
2020-01-14,82.4694274553067\r
2020-01-16,77.24894904928945\r
2020-01-19,77.24894904928945\r
2020-01-28,74.43899833524095\r
2020-02-05,77.69419187410848\r
2020-02-07,77.69419187410848\r
2020-02-08,77.69419187410848\r
2020-02-15,77.69419187410848\r
2020-02-18,77.69419187410848\r
2020-02-20,77.24894904928945\r
2020-02-22,83.82086685997919\r
2020-04-05,77.84270014530375\r
2020-04-08,77.84270014530375\r
2020-04-10,94.45259752142819\r
2020-04-12,94.45259752142819\r
2020-04-15,88.04829286564132\r
2020-04-25,90.47923920577561\r
2020-04-28,91.54620374221781\r
2020-05-05,69.89199926189953\r
2020-05-07,69.89199926189953\r
2020-05-08,69.89199926189953\r
2020-05-20,96.44977268636879\r
2020-05-22,96.44977268636879\r
2020-05-25,98.2994162955115\r
2020-05-27,98.2994162955115\r
2020-05-28,98.2994162955115\r
2020-05-30,95.37351125471942\r
2020-06-12,95.21992302652416\r
2020-06-14,95.21992302652416\r
2020-06-19,95.68081048429437\r
2020-06-21,95.68081048429437\r
2020-06-22,95.68081048429437\r
2020-06-24,96.7576423020434\r
2020-06-26,96.7576423020434\r
2020-07-19,96.60368719943192\r
2020-07-21,96.60368719943192\r
2020-07-22,96.60368719943192\r
2020-07-24,96.91163795098214\r
2020-07-27,96.91163795098214\r
2020-07-29,92.76811546349843\r
2020-07-31,92.76811546349843\r
2020-08-03,92.76811546349843\r
2020-08-05,93.07401136657747\r
2020-08-06,93.07401136657747\r
2020-08-08,92.92104258560138\r
2020-08-10,100.0\r
2020-08-15,99.84520234462235\r
2020-08-20,99.84520234462235\r
2020-08-21,99.84520234462235\r
2020-08-23,99.84520234462235\r
2020-09-02,90.32698495121508\r
2020-09-04,90.32698495121508\r
2020-09-05,90.32698495121508\r
2020-09-07,90.32698495121508\r
2020-09-10,90.32698495121508\r
2020-09-12,90.63153586807921\r
2020-09-14,90.63153586807921\r
2020-09-17,89.26239661762541\r
2020-09-19,95.98827311823749\r
2020-09-29,94.91286956415982\r
2020-09-30,94.91286956415982\r
2020-10-17,80.67320059075928\r
2020-10-24,80.67320059075928\r
2020-10-30,80.67320059075928\r
2020-11-01,80.67320059075928\r
2020-11-11,75.47223675894253\r
2020-11-14,75.47223675894253\r
2020-11-16,76.5078212657968\r
2020-11-18,76.5078212657968\r
2020-11-19,76.5078212657968\r
2020-11-21,76.5078212657968\r
2020-11-23,76.5078212657968\r
2020-11-26,76.5078212657968\r
2020-12-16,73.70241929084555\r
2020-12-18,73.70241929084555\r
2020-12-26,73.70241929084555\r
2021-02-14,83.5202331781802\r
2021-02-17,83.5202331781802\r
2021-02-19,83.5202331781802\r
2021-02-24,87.7451978137458\r
2021-02-27,85.32670473379741\r
2021-03-01,87.89672372100749\r
2021-03-04,87.89672372100749\r
2021-03-09,80.37446789054665\r
2021-03-21,85.93027775115127\r
2021-03-23,85.93027775115127\r
2021-03-24,85.93027775115127\r
2021-03-26,92.61523004620251\r
2021-03-28,92.61523004620251\r
2021-03-29,92.61523004620251\r
2021-03-31,87.7451978137458\r
2021-04-02,92.00410634776446\r
2021-04-03,92.00410634776446\r
2021-04-05,90.63153586807921\r
2021-04-07,97.37386774509854\r
2021-04-15,97.83646091007483\r
2021-04-17,97.37386774509854\r
2021-04-20,99.53572618438969\r
2021-04-22,99.53572618438969\r
2021-04-23,99.53572618438969\r
2021-05-30,91.54620374221781\r
2021-06-01,91.54620374221781\r
2021-06-09,96.29589880617873\r
2021-06-11,95.68081048429437\r
2021-06-14,100.0\r
2021-06-16,100.0\r
2021-06-19,100.0\r
2021-06-21,99.22640916684192\r
2021-08-23,95.37351125471942\r
2021-08-25,95.37351125471942\r
2021-08-26,95.37351125471942\r
2021-08-28,95.37351125471942\r
2021-08-30,95.37351125471942\r
2021-08-31,95.37351125471942\r
2021-09-17,80.82263565527354\r
2021-09-22,90.02260385669142\r
2021-09-24,90.02260385669142\r
2021-09-25,90.02260385669142\r
2021-09-27,90.02260385669142\r
2021-09-30,89.41435267243001\r
2021-10-17,80.22517036864579\r
2021-10-19,80.22517036864579\r
2021-10-20,80.22517036864579\r
2021-10-24,80.22517036864579\r
2021-10-27,80.97211645379187\r
2021-12-16,74.88152614308517\r
2021-12-18,74.88152614308517\r
2021-12-19,74.88152614308517\r
2021-12-21,82.769432876302\r
2021-12-23,82.769432876302\r
2022-01-15,81.4208326891128\r
2022-01-22,81.4208326891128\r
2022-01-23,81.4208326891128\r
2022-01-25,82.4694274553067\r
2022-01-27,75.76787958982753\r
2022-02-01,75.76787958982753\r
2022-02-09,83.5202331781802\r
2022-03-01,96.14206560229054\r
2022-03-03,96.14206560229054\r
2022-03-08,96.14206560229054\r
2022-03-09,96.14206560229054\r
2022-03-26,89.11048335648111\r
2022-04-05,97.37386774509854\r
2022-04-10,98.76273275916174\r
2022-04-15,98.76273275916174\r
2022-04-17,95.98827311823749\r
2022-04-30,95.37351125471942\r
2022-05-07,95.37351125471942\r
2022-05-08,95.37351125471942\r
2022-05-10,95.37351125471942\r
2022-06-29,92.30958451033744\r
2022-07-01,95.37351125471942\r
2022-07-02,95.37351125471942\r
2022-07-04,95.37351125471942\r
2022-07-06,95.37351125471942\r
2022-07-07,95.37351125471942\r
2022-07-14,93.68630216450116\r
2022-07-16,93.68630216450116\r
2022-07-17,93.68630216450116\r
2022-07-19,99.69044439234362\r
2022-07-21,99.69044439234362\r
2022-07-22,99.69044439234362\r
2022-07-24,99.69044439234362\r
2022-07-26,99.38104776208284\r
2022-07-27,99.38104776208284\r
2022-08-08,97.68222288505703\r
2022-08-10,97.68222288505703\r
2022-08-11,97.68222288505703\r
2022-08-13,99.38104776208284\r
2022-08-15,99.38104776208284\r
2022-08-18,99.38104776208284\r
2022-09-12,94.45259752142819\r
2022-09-15,94.45259752142819\r
2022-09-19,94.45259752142819\r
2022-09-20,94.45259752142819\r
2022-09-22,95.52714042199663\r
2022-10-02,95.06637578157913\r
2022-10-07,95.37351125471942\r
2022-10-09,95.37351125471942\r
2022-10-12,95.37351125471942\r
2022-10-15,95.37351125471942\r
2022-10-22,87.29088001625279\r
2022-10-24,87.29088001625279\r
2022-11-01,87.29088001625279\r
2022-11-11,76.35973779602546\r
2022-11-13,76.35973779602546\r
2022-11-16,84.12167907366191\r
2022-11-24,82.91950313135234\r
2023-01-10,80.37446789054665\r
2023-01-12,80.37446789054665\r
2023-01-18,80.37446789054665\r
2023-02-09,78.58594377898301\r
2023-02-11,78.58594377898301\r
2023-02-12,78.58594377898301\r
2023-02-14,93.68630216450116\r
2023-02-16,93.68630216450116\r
2023-02-17,93.68630216450116\r
2023-02-19,85.77931852214091\r
2023-02-21,93.38007372198099\r
2023-02-24,93.38007372198099\r
2023-02-26,84.87448788578116\r
2023-03-01,93.83947855479397\r
2023-03-03,93.68630216450116\r
2023-03-04,93.68630216450116\r
2023-03-09,93.68630216450116\r
2023-03-16,94.14595544714909\r
2023-04-05,96.60368719943192\r
2023-04-07,96.60368719943192\r
2023-04-08,96.60368719943192\r
2023-04-15,96.60368719943192\r
2023-05-05,82.1696025183197\r
2023-05-10,82.1696025183197\r
2023-06-04,80.22517036864579\r
2023-06-07,80.22517036864579\r
2023-06-24,100.0\r
2023-07-09,90.93625622527279\r
2023-07-11,62.8044945330522\r
2023-07-14,78.13985732207757\r
2023-07-16,78.13985732207757\r
2023-07-17,78.13985732207757\r
2023-07-19,78.13985732207757\r
2023-07-22,77.99125531455509\r
`;export{r as default};
