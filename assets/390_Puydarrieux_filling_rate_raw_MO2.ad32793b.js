const r=`date,value\r
2017-01-26,44.95646759326013\r
2017-01-29,44.95646759326013\r
2017-02-15,67.2997514749615\r
2017-02-18,67.2997514749615\r
2017-02-25,72.99100492244868\r
2017-03-17,83.76415110312658\r
2017-03-27,83.76415110312658\r
2017-04-06,94.89779795609432\r
2017-04-09,94.89779795609432\r
2017-05-16,100.0\r
2017-05-19,100.0\r
2017-05-26,100.0\r
2017-06-05,99.65775457751232\r
2017-07-05,97.24778315236564\r
2017-08-14,74.17769242486777\r
2017-08-17,74.17769242486777\r
2017-08-22,74.17769242486777\r
2017-08-24,74.2351750203099\r
2017-08-27,58.06495769996158\r
2017-08-29,58.06495769996158\r
2017-09-01,58.06495769996158\r
2017-09-03,58.06495769996158\r
2017-09-08,45.69086288305765\r
2017-09-13,45.69086288305765\r
2017-09-16,45.69086288305765\r
2017-10-08,42.18464448461467\r
2017-10-11,42.18464448461467\r
2017-10-13,42.676763129856596\r
2017-10-16,42.676763129856596\r
2017-10-18,42.676763129856596\r
2017-10-23,41.20729249008507\r
2017-10-26,39.20397077638134\r
2017-10-28,39.20397077638134\r
2017-10-31,39.20397077638134\r
2017-11-07,33.7479378569979\r
2017-11-15,33.7479378569979\r
2017-11-17,35.68504743585597\r
2017-11-20,35.5016030481051\r
2017-11-22,36.18839598559392\r
2017-11-25,36.18839598559392\r
2017-11-27,36.18839598559392\r
2017-11-30,34.77162574745001\r
2017-12-12,39.394854478830325\r
2017-12-15,39.394854478830325\r
2017-12-20,39.28027960406774\r
2018-01-31,65.61852213118372\r
2018-02-10,65.72798689724947\r
2018-02-15,74.94284726969303\r
2018-02-25,91.38050508294675\r
2018-03-02,90.99695166590715\r
2018-03-07,90.99695166590715\r
2018-03-22,88.01343679213643\r
2018-03-30,86.9957218594935\r
2018-04-21,99.38983744111324\r
2018-04-24,99.38983744111324\r
2018-04-26,99.38983744111324\r
2018-05-11,99.71322184345365\r
2018-05-21,99.85194419318344\r
2018-05-24,99.18678308580462\r
2018-06-20,99.87044635418701\r
2018-06-23,99.87044635418701\r
2018-06-25,100.0\r
2018-07-08,98.66146331475527\r
2018-07-10,98.67066980094813\r
2018-07-15,99.01155210577653\r
2018-07-18,99.01155210577653\r
2018-07-23,99.01155210577653\r
2018-07-25,99.05765346480892\r
2018-07-30,97.77007381559066\r
2018-08-02,97.77007381559066\r
2018-08-04,98.04541444560687\r
2018-08-12,94.79811801303278\r
2018-08-19,83.36796420787668\r
2018-08-22,83.36796420787668\r
2018-08-27,83.36796420787668\r
2018-09-03,65.53256547835203\r
2018-09-08,67.09457958617749\r
2018-09-11,67.09457958617749\r
2018-09-16,63.421506829790765\r
2018-09-18,63.421506829790765\r
2018-09-23,53.35936911050675\r
2018-09-26,53.35936911050675\r
2018-09-28,53.35936911050675\r
2018-10-03,53.46731903191242\r
2018-10-06,47.45499203634326\r
2018-10-13,47.45499203634326\r
2018-10-23,41.62968269066909\r
2018-11-12,44.427188396121416\r
2018-11-15,44.427188396121416\r
2018-11-17,46.44363347742794\r
2018-11-22,46.44363347742794\r
2018-11-27,47.44126678765251\r
2018-12-07,48.329804473101426\r
2018-12-10,47.50304295390777\r
2019-01-11,58.8933672563831\r
2019-01-16,60.11838115930471\r
2019-01-19,60.11838115930471\r
2019-01-24,60.11838115930471\r
2019-01-26,59.49333631514649\r
2019-02-15,79.65880158382281\r
2019-02-18,79.65880158382281\r
2019-02-20,81.34722885810594\r
2019-02-23,81.34722885810594\r
2019-02-25,80.83665913714154\r
2019-02-28,80.83665913714154\r
2019-03-12,82.27806150135504\r
2019-03-22,84.35119868267081\r
2019-03-25,84.35119868267081\r
2019-03-27,86.54104798956182\r
2019-03-30,86.54104798956182\r
2019-04-01,86.54104798956182\r
2019-04-09,86.34024733707467\r
2019-05-01,88.46238273852495\r
2019-05-06,91.88098670059847\r
2019-05-09,91.88098670059847\r
2019-05-11,91.88098670059847\r
2019-05-14,91.88098670059847\r
2019-05-16,91.79153452991355\r
2019-07-05,93.76754886647738\r
2019-07-08,93.76754886647738\r
2019-07-10,94.3274730867418\r
2019-07-13,94.3274730867418\r
2019-07-15,92.49915928636412\r
2019-07-20,92.49915928636412\r
2019-07-23,94.11056952597713\r
2019-07-25,89.8235803559944\r
2019-07-28,91.14851167330208\r
2019-08-02,75.19859879687331\r
2019-08-04,75.28943337716703\r
2019-08-09,66.37060714832604\r
2019-08-14,59.59858171009419\r
2019-08-17,59.59858171009419\r
2019-08-22,60.04293568074436\r
2019-08-24,55.644655162260236\r
2019-08-29,56.194428272717175\r
2019-09-03,50.80197826118592\r
2019-09-06,50.80197826118592\r
2019-09-08,50.85136122325389\r
2019-09-13,32.55936899067846\r
2019-09-16,32.55936899067846\r
2019-09-18,32.55936899067846\r
2019-09-21,32.55936899067846\r
2019-09-26,31.73757575678008\r
2019-10-08,21.290153940010104\r
2019-10-11,21.290153940010104\r
2019-10-13,22.24383804920174\r
2019-10-26,17.05877364029986\r
2020-01-11,78.63912874819133\r
2020-01-14,78.63912874819133\r
2020-01-16,72.1608393803083\r
2020-01-19,72.1608393803083\r
2020-01-29,66.21363916635504\r
2020-01-31,66.28425629894859\r
2020-02-05,66.13521112090281\r
2020-02-10,66.13521112090281\r
2020-02-15,67.41823421167157\r
2020-02-18,67.42613603450347\r
2020-02-20,65.74363069819896\r
2020-02-23,66.15089374558039\r
2020-03-11,89.57546960283733\r
2020-03-21,89.83244654782912\r
2020-03-24,89.83244654782912\r
2020-03-26,86.86446781267082\r
2020-03-31,87.12705543004797\r
2020-04-03,87.12705543004797\r
2020-04-05,84.69728902614636\r
2020-04-08,85.46068824997795\r
2020-04-10,85.31299919835199\r
2020-04-15,87.58296049803111\r
2020-04-25,88.00464309577532\r
2020-05-05,98.7719639021084\r
2020-05-08,98.7719639021084\r
2020-05-18,98.7719639021084\r
2020-05-20,99.88894989096218\r
2020-05-25,100.0\r
2020-05-28,100.0\r
2020-05-30,98.8917288842324\r
2020-06-12,98.9009439876261\r
2020-06-14,98.95624184448445\r
2020-06-24,97.80676794315539\r
2020-07-04,97.69670213952021\r
2020-07-07,96.90935356254816\r
2020-07-09,98.50500580454606\r
2020-07-19,97.9811405039133\r
2020-07-22,98.17401307075299\r
2020-07-24,89.59318266470278\r
2020-07-27,89.77039058073612\r
2020-07-29,88.64750920618332\r
2020-08-03,88.27741162401594\r
2020-08-06,81.55181785344952\r
2020-08-08,80.94717308043577\r
2020-08-18,60.04293568074436\r
2020-08-21,57.41896004804378\r
2020-08-23,57.41896004804378\r
2020-09-02,36.33625238849862\r
2020-09-05,36.33625238849862\r
2020-09-07,36.33625238849862\r
2020-09-10,36.33625238849862\r
2020-09-12,36.63269056789244\r
2020-09-17,29.436319408216683\r
2020-09-30,25.835886477548147\r
2020-11-11,55.24286800343374\r
2020-11-14,55.24286800343374\r
2020-11-21,61.41437446066259\r
2020-11-26,60.133474817424016\r
2020-11-29,61.40676332795937\r
2021-02-14,85.6432691812736\r
2021-02-17,85.6432691812736\r
2021-02-19,86.00890002566217\r
2021-02-24,85.51283827251203\r
2021-02-27,86.37515574136064\r
2021-03-01,84.78390045774653\r
2021-03-04,87.0132284080465\r
2021-03-09,85.41723965157276\r
2021-03-31,87.70586728316641\r
2021-04-03,87.69708593318913\r
2021-04-05,88.34785848812851\r
2021-04-08,88.34785848812851\r
2021-04-15,87.95188832319789\r
2021-04-20,86.94321069659019\r
2021-04-23,86.94321069659019\r
2021-06-09,97.33017544685399\r
2021-06-14,98.88251412545064\r
2021-06-22,98.8364455009428\r
2021-07-19,99.73171368456664\r
2021-07-22,99.72246759198839\r
2021-08-28,74.31732401064338\r
2021-08-31,74.31732401064338\r
2021-09-05,74.31732401064338\r
2021-09-12,60.38273966072034\r
2021-09-17,60.57185207009529\r
2021-09-22,58.37039821107152\r
2021-10-07,52.07793477513947\r
2021-10-12,52.64194272634099\r
2021-10-15,52.64194272634099\r
2021-10-17,49.69945566616184\r
2021-10-20,47.963945607400646\r
2021-10-27,42.374658710660555\r
2022-01-15,87.10078235517507\r
2022-01-23,87.10078235517507\r
2022-01-25,87.83762987359123\r
2022-02-09,73.50565651510595\r
2022-03-01,82.04709232362075\r
2022-03-09,82.04709232362075\r
2022-04-05,90.15186330526254\r
2022-04-10,90.12522786512929\r
2022-05-15,89.65518944974636\r
2022-07-14,86.01761314009968\r
2022-07-17,86.01761314009968\r
2022-07-24,86.01761314009968\r
2022-08-03,54.68959591908521\r
2022-08-06,54.68959591908521\r
2022-08-08,54.68959591908521\r
2022-08-11,54.68959591908521\r
2022-08-13,54.68959591908521\r
2022-08-28,35.568821930683676\r
2022-09-05,35.568821930683676\r
2022-09-22,29.83401339899274\r
2022-10-02,30.2166669752702\r
2022-10-05,27.16668498896534\r
2022-10-07,27.16668498896534\r
2022-10-12,27.16668498896534\r
2022-11-06,28.17257241573556\r
2022-11-11,26.544119773565424\r
2022-11-16,26.35956519495283\r
2023-01-10,54.508087325172085\r
2023-01-18,54.508087325172085\r
2023-01-20,55.600767060734476\r
2023-02-09,69.71729427050067\r
2023-02-12,69.71729427050067\r
2023-02-14,68.63152982446958\r
2023-02-17,69.693269846533\r
2023-02-19,69.693269846533\r
2023-02-24,71.27791903775201\r
2023-03-16,76.0840381641538\r
2023-04-05,83.21313981335243\r
2023-04-08,83.21313981335243\r
2023-04-10,83.47124462948291\r
2023-05-05,89.68176905650361\r
2023-05-10,89.68176905650361\r
2023-06-24,100.0\r
2023-06-27,100.0\r
2023-07-14,97.36680323277898\r
2023-07-17,97.36680323277898\r
2023-07-22,97.36680323277898\r
`;export{r as default};
