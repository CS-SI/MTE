const n=`date,value\r
2017-02-25,88.03392734728581\r
2017-03-14,96.13281943864645\r
2017-03-17,100.0\r
2017-03-27,95.6010114766189\r
2017-04-23,87.3942717687944\r
2017-05-16,73.83686391135113\r
2017-05-26,95.33558678232885\r
2017-06-25,84.3520978771991\r
2017-07-05,84.8558832748197\r
2017-07-07,69.84777498539911\r
2017-07-17,75.26763912441872\r
2017-08-06,80.86205406437921\r
2017-08-14,79.75383991773474\r
2017-08-21,71.4787177326893\r
2017-08-24,73.12594016574108\r
2017-08-26,59.430687390736914\r
2017-08-29,57.6056141797045\r
2017-09-20,57.499025343167055\r
2017-09-23,68.46281949347764\r
2017-10-05,60.84293849693313\r
2017-10-10,63.71042477343241\r
2017-10-13,60.84293849693313\r
2017-10-15,60.515759733075484\r
2017-10-18,45.913869492936804\r
2017-10-25,50.654267879202166\r
2017-10-28,44.95175323802692\r
2017-10-30,41.93249495312774\r
2017-11-14,50.251544995536825\r
2017-11-17,50.75516609409537\r
2017-11-22,45.624308171539006\r
2018-02-02,77.6786456545033\r
2018-02-10,90.22384990567278\r
2018-03-14,79.63111404454169\r
2018-04-18,100.0\r
2018-04-21,92.69894212343696\r
2018-04-23,78.65225573025197\r
2018-04-26,72.18267967947344\r
2018-05-11,80.12250857732153\r
2018-06-20,81.10922300743404\r
2018-06-22,66.29458873496286\r
2018-06-25,74.55076484057753\r
2018-07-02,66.18130918136734\r
2018-07-07,72.53578072893578\r
2018-07-12,70.19588972330727\r
2018-07-15,82.10116412845863\r
2018-07-25,79.99953720095796\r
2018-07-27,83.22333484969123\r
2018-07-30,76.1077453727781\r
2018-08-01,56.96736427196845\r
2018-08-04,77.9215556738339\r
2018-08-06,78.65225573025197\r
2018-08-11,66.97602728457352\r
2018-08-19,64.60421571204516\r
2018-08-21,69.26925032453443\r
2018-09-08,68.6928108852601\r
2018-09-10,64.82850574080456\r
2018-09-20,67.08989373579634\r
2018-09-23,56.75529902586868\r
2018-09-25,62.822032067774316\r
2018-09-28,57.81904830547878\r
2018-10-03,52.38134726227342\r
2018-10-05,61.06148204881109\r
2018-10-23,38.19768475847765\r
2018-10-30,43.619643182245085\r
2018-11-29,47.177791651875864\r
2018-12-19,61.389933533699406\r
2019-01-03,60.515759733075484\r
2019-01-16,57.712288507525635\r
2019-02-12,78.4083608484346\r
2019-02-15,58.24694177653529\r
2019-02-17,70.3120945152848\r
2019-02-20,81.35671861831507\r
2019-02-22,67.43199561066959\r
2019-02-25,87.13897541762591\r
2019-02-27,70.66120827139778\r
2019-03-22,69.96372993991496\r
2019-03-24,67.54619701273606\r
2019-03-27,64.38026244429422\r
2019-03-29,68.57777342896107\r
2019-04-01,60.952167848854785\r
2019-04-13,65.61617058464702\r
2019-05-01,73.5995583414699\r
2019-05-06,87.52204123600568\r
2019-05-13,62.49027860315296\r
2019-05-23,67.66048210510002\r
2019-05-31,79.50847003943571\r
2019-06-02,77.6786456545033\r
2019-06-17,71.71303967155683\r
2019-06-27,62.71136304715876\r
2019-06-30,99.7558856489437\r
2019-07-05,75.3874069804404\r
2019-07-12,80.3686967155218\r
2019-07-15,73.83686391135113\r
2019-07-25,78.77432618511865\r
2019-08-04,64.94077699177787\r
2019-08-09,81.10922300743404\r
2019-08-14,83.0983234498688\r
2019-08-16,71.36168134308576\r
2019-08-24,62.49027860315296\r
2019-08-26,72.88962784576772\r
2019-09-03,54.237291781945316\r
2019-09-13,63.82185363192606\r
2019-09-15,58.56875828384188\r
2019-09-18,67.77485086884109\r
2019-09-20,69.26925032453443\r
2019-10-08,48.555532384023834\r
2019-10-13,63.04362360657817\r
2019-12-29,70.3120945152848\r
2020-01-06,56.649394884368206\r
2020-01-16,63.487820117969605\r
2020-01-18,74.55076484057753\r
2020-02-05,57.073525333849496\r
2020-02-20,42.4916740349562\r
2020-02-22,51.87078017170164\r
2020-03-13,87.9058346146303\r
2020-03-18,78.04313385116279\r
2020-03-21,66.18130918136734\r
2020-03-28,98.54174835619004\r
2020-04-05,81.35671861831507\r
2020-04-10,100.0\r
2020-05-07,63.154546084979245\r
2020-05-20,93.48657172777617\r
2020-05-22,64.15664609399487\r
2020-05-25,84.10069255289542\r
2020-05-27,69.73190334697182\r
2020-06-19,56.75529902586868\r
2020-06-21,60.952167848854785\r
2020-06-24,76.46902673359853\r
2020-06-26,71.12785781457002\r
2020-07-04,71.4787177326893\r
2020-07-09,86.50215034777942\r
2020-07-19,71.01107071213302\r
2020-07-21,54.86215153400096\r
2020-07-24,76.1077453727781\r
2020-07-29,93.35509971312781\r
2020-07-31,55.910466216832276\r
2020-08-05,62.60077855229995\r
2020-08-08,83.59885730208008\r
2020-08-15,66.97602728457352\r
2020-08-20,62.822032067774316\r
2020-08-25,54.341219745005674\r
2020-09-02,54.54933413187756\r
2020-09-04,46.398233863756325\r
2020-09-14,54.96659613271533\r
2020-09-17,54.133450001876405\r
2020-11-08,37.486584299359805\r
2020-11-11,38.645058882579\r
2020-11-18,44.760389682767524\r
2020-11-23,46.88479826910361\r
2020-12-18,76.46902673359853\r
2021-01-17,76.71029256791464\r
2021-02-14,91.39264542674874\r
2021-02-24,83.0983234498688\r
2021-03-01,78.04313385116279\r
2021-03-23,70.3120945152848\r
2021-03-28,84.47792240726231\r
2021-03-31,93.74975613302315\r
2021-04-02,87.77782267469658\r
2021-04-05,83.34842763589604\r
2021-04-15,100.0\r
2021-05-27,92.69894212343696\r
2021-06-11,79.50847003943571\r
2021-06-14,85.1082630894371\r
2021-06-16,73.71816976776897\r
2021-06-26,76.95188751539601\r
2021-07-01,89.31929482025582\r
2021-07-19,70.77774592224621\r
2021-07-29,80.86205406437921\r
2021-08-10,78.16479411743616\r
2021-08-20,80.3686967155218\r
2021-08-28,70.3120945152848\r
2021-08-30,75.62719008478092\r
2021-09-22,77.0728083633165\r
2021-09-24,80.49191344380039\r
2021-10-12,62.60077855229995\r
2021-10-14,56.54357642575943\r
2021-10-17,59.64702143660989\r
2021-10-24,53.40897252469979\r
2021-10-27,46.68990869964338\r
2021-12-16,68.23316225995043\r
2021-12-18,75.14795375587528\r
2021-12-23,64.49219697327486\r
2022-01-05,71.4787177326893\r
2022-01-15,71.4787177326893\r
2022-01-22,71.12785781457002\r
2022-01-25,66.0681135468781\r
2022-01-27,71.36168134308576\r
2022-02-09,77.0728083633165\r
2022-02-26,77.9215556738339\r
2022-03-23,69.61611504313622\r
2022-03-26,72.65364689551129\r
2022-04-05,95.6010114766189\r
2022-04-10,87.77782267469658\r
2022-04-15,98.2728149440353\r
2022-04-17,74.78939275080072\r
2022-05-15,75.14795375587528\r
2022-05-17,77.9215556738339\r
2022-06-01,77.55731384679534\r
2022-06-16,53.92602507911369\r
2022-06-19,73.00774259351138\r
2022-06-29,73.48102965027066\r
2022-07-06,81.72857424575977\r
2022-07-11,80.3686967155218\r
2022-07-14,84.98203260259385\r
2022-07-16,79.1410294015192\r
2022-07-19,88.54710589071172\r
2022-07-21,79.99953720095796\r
2022-07-24,75.62719008478092\r
2022-07-26,74.19344246792988\r
2022-07-29,89.31929482025582\r
2022-07-31,75.14795375587528\r
2022-08-03,77.4360641966194\r
2022-08-10,71.01107071213302\r
2022-08-13,70.3120945152848\r
2022-08-28,70.89436674192837\r
2022-09-04,73.24422054453915\r
2022-09-12,68.92313628544443\r
2022-09-19,61.82905548882718\r
2022-09-22,70.07976819203773\r
2022-10-04,54.237291781945316\r
2022-10-09,51.36238055194862\r
2022-10-22,49.450279955387074\r
2022-10-24,43.71421797946158\r
2022-11-11,33.34220099381667\r
2022-11-16,37.309714091761855\r
2023-01-20,20.666930062768447\r
2023-02-06,75.3874069804404\r
2023-02-11,77.6786456545033\r
2023-02-14,84.60382816100208\r
2023-02-16,81.10922300743404\r
2023-02-19,77.9215556738339\r
2023-02-26,73.36258371200806\r
2023-03-16,96.39920246937363\r
2023-03-28,94.27708602590684\r
2023-04-05,100.0\r
2023-04-07,89.83570005898555\r
2023-04-20,83.97511179109384\r
2023-05-02,81.35671861831507\r
2023-05-27,73.36258371200806\r
2023-05-30,66.29458873496286\r
2023-06-24,91.26245755911887\r
2023-06-29,100.0\r
2023-07-14,67.88930328506122\r
`;export{n as default};
