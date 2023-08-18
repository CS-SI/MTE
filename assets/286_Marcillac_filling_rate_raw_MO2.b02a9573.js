const r=`date,value\r
2017-02-25,31.26131692724031\r
2017-03-07,29.865878950658566\r
2017-03-17,28.23167455816062\r
2017-03-27,29.419661379198352\r
2017-04-03,29.07708588212779\r
2017-04-06,32.123925993601745\r
2017-05-16,64.0951884556557\r
2017-05-23,64.0951884556557\r
2017-05-26,70.30408675192629\r
2017-06-02,66.55631098368563\r
2017-06-05,66.84330084699522\r
2017-06-25,79.41528410509491\r
2017-07-02,81.82746980924976\r
2017-07-05,87.33231522143845\r
2017-07-07,84.92853277252411\r
2017-07-12,84.92853277252411\r
2017-08-24,95.3093178775915\r
2017-08-26,95.3093178775915\r
2017-08-29,94.05412527259281\r
2017-09-03,93.38951018583582\r
2017-10-13,89.75782417340776\r
2017-10-15,89.75782417340776\r
2017-10-18,90.74644413293063\r
2017-10-28,85.22401973382556\r
2017-10-30,78.29176288633928\r
2017-11-04,78.29176288633928\r
2017-11-07,79.51902806571603\r
2017-11-14,77.41580745084939\r
2017-11-17,77.63633410377676\r
2018-02-25,62.3206029055244\r
2018-02-27,62.3206029055244\r
2018-03-22,37.50909368405123\r
2018-03-29,37.50909368405123\r
2018-04-01,37.50909368405123\r
2018-04-06,57.09526909488498\r
2018-04-16,57.528338354274\r
2018-04-21,65.85802345197156\r
2018-04-23,65.85802345197156\r
2018-04-26,66.99746097899012\r
2018-05-06,80.76738679211161\r
2018-05-08,80.0458361016226\r
2018-05-11,88.52701600476665\r
2018-05-13,88.52701600476665\r
2018-05-18,85.26950890057338\r
2018-05-21,85.26950890057338\r
2018-05-26,94.52418781249926\r
2018-06-02,94.52418781249926\r
2018-06-20,88.73432681021615\r
2018-06-22,88.73432681021615\r
2018-06-25,90.83156797422221\r
2018-06-27,90.83156797422221\r
2018-07-02,91.6531818034754\r
2018-07-07,86.56164525424262\r
2018-07-10,89.19558201896643\r
2018-07-12,85.96039538802229\r
2018-07-15,94.86153472833202\r
2018-07-17,94.86153472833202\r
2018-07-25,93.02267618789386\r
2018-08-19,88.25084718030443\r
2018-08-21,88.25084718030443\r
2018-08-26,88.25084718030443\r
2018-09-03,88.83419938726506\r
2018-09-05,88.83419938726506\r
2018-09-08,95.07355699589066\r
2018-09-10,95.07355699589066\r
2018-09-13,95.07355699589066\r
2018-09-18,91.28858426200085\r
2018-10-13,90.18991175008325\r
2018-10-18,90.47576840513563\r
2018-10-20,88.90336335337243\r
2018-10-23,89.5266266115175\r
2018-10-25,79.77116109077369\r
2018-10-30,79.20052615768239\r
2019-02-15,71.7114011002508\r
2019-02-17,71.7114011002508\r
2019-02-20,79.32639579609764\r
2019-02-22,79.32639579609764\r
2019-02-25,72.28548528942562\r
2019-02-27,72.28548528942562\r
2019-03-12,76.37475594935394\r
2019-03-22,82.05200594374762\r
2019-03-24,82.05200594374762\r
2019-03-27,82.26924777441906\r
2019-03-29,84.27057435097166\r
2019-04-01,84.27057435097166\r
2019-05-01,78.7641894365461\r
2019-05-06,83.08744685268896\r
2019-05-13,83.08744685268896\r
2019-05-16,81.46115833998374\r
2019-05-23,87.63049500576221\r
2019-05-31,96.23059858547178\r
2019-06-02,92.54727364790348\r
2019-06-30,95.52166506596515\r
2019-07-02,95.52166506596515\r
2019-07-05,97.08356722915386\r
2019-07-07,97.08356722915386\r
2019-07-10,96.21482598232986\r
2019-07-15,97.50304875485564\r
2019-07-17,94.8379862085336\r
2019-07-20,97.85967399526186\r
2019-07-22,100.0\r
2019-07-25,99.21074165270296\r
2019-08-04,93.53012417198873\r
2019-08-09,93.03047627376587\r
2019-08-14,91.70752401472791\r
2019-08-16,91.70752401472791\r
2019-08-21,94.4457911091115\r
2019-08-24,92.51612741289475\r
2019-08-26,93.18652267599077\r
2019-08-29,93.07728125808661\r
2019-08-31,92.15819103329697\r
2019-09-03,91.78517392529992\r
2019-09-13,89.05712375359052\r
2019-09-15,89.20327619693794\r
2019-09-18,89.01098655526081\r
2019-09-20,89.24175032619988\r
2020-02-15,80.96114992869609\r
2020-02-20,85.56538093957809\r
2020-02-22,85.56538093957809\r
2020-03-21,80.87915477883388\r
2020-03-23,80.87915477883388\r
2020-03-26,80.87915477883388\r
2020-03-28,80.87915477883388\r
2020-03-31,80.99097304948215\r
2020-04-02,80.99097304948215\r
2020-04-05,75.4767151458316\r
2020-04-07,77.08540047190023\r
2020-04-10,74.91628896701863\r
2020-04-12,74.91628896701863\r
2020-04-15,80.782286284175\r
2020-05-20,94.54771095084725\r
2020-05-22,94.54771095084725\r
2020-05-25,99.89651548531333\r
2020-05-27,99.89651548531333\r
2020-05-30,96.47518148600285\r
2020-06-01,96.47518148600285\r
2020-07-04,97.875533837467\r
2020-07-09,100.0\r
2020-07-11,100.0\r
2020-07-14,100.0\r
2020-07-19,100.0\r
2020-07-21,98.0897235445602\r
2020-07-24,100.0\r
2020-07-29,100.0\r
2020-07-31,94.48498681487558\r
2020-08-05,100.0\r
2020-08-08,93.39732026771568\r
2020-08-10,94.55555242022211\r
2020-08-15,93.30361331403671\r
2020-08-20,93.30361331403671\r
2020-09-12,94.5712359938233\r
2020-09-14,94.5712359938233\r
2020-09-17,92.04157030678792\r
2020-11-06,80.62588623226597\r
2020-11-08,80.62588623226597\r
2020-11-11,82.14187644385814\r
2020-11-18,82.14187644385814\r
2020-11-21,80.9462397087046\r
2021-02-14,77.56280253943709\r
2021-02-19,77.67310838767469\r
2021-02-21,77.67310838767469\r
2021-02-24,87.95198133757056\r
2021-02-26,87.73761454691508\r
2021-03-01,90.40620861502508\r
2021-03-06,87.80649959269508\r
2021-03-21,88.24317983308066\r
2021-03-23,88.24317983308066\r
2021-03-26,88.24317983308066\r
2021-03-28,88.24317983308066\r
2021-03-31,89.39570081923654\r
2021-04-02,73.73442645872504\r
2021-04-05,77.62897992706792\r
2021-04-07,77.62897992706792\r
2021-04-15,82.32171345615735\r
2021-04-17,80.81208795117585\r
2021-04-22,80.81208795117585\r
2021-07-19,86.61498629998195\r
2021-07-21,86.61498629998195\r
2021-07-29,87.07263360950095\r
2021-09-22,82.39668330871692\r
2021-09-24,82.39668330871692\r
2021-09-27,82.39668330871692\r
2021-10-02,91.75411139478177\r
2021-10-07,91.74634629676952\r
2021-10-09,91.74634629676952\r
2021-10-12,89.36490381315801\r
2021-10-14,83.11000332884295\r
2021-10-17,83.9535357685421\r
2021-10-27,81.4835701994791\r
2021-11-06,79.48938243700209\r
2021-11-11,84.15730164819284\r
2021-11-18,83.56908352979545\r
2022-02-09,72.11310365531325\r
2022-02-11,69.85595100802635\r
2022-02-19,69.85595100802635\r
2022-03-26,83.93090503938467\r
2022-04-10,83.24538401826447\r
2022-04-15,85.2846737114044\r
2022-04-17,85.2846737114044\r
2022-04-22,80.23160117540019\r
2022-06-19,95.29359457472866\r
2022-06-21,95.29359457472866\r
2022-06-29,95.6239611382178\r
2022-07-01,92.04934352678514\r
2022-07-04,92.04934352678514\r
2022-07-06,92.04934352678514\r
2022-07-14,90.97091754180259\r
2022-07-16,90.97091754180259\r
2022-07-19,91.83954158583987\r
2022-07-21,91.83954158583987\r
2022-07-24,89.79637596154093\r
2022-07-26,90.85478807445162\r
2022-07-31,89.45730518969171\r
2022-08-03,91.88615077537965\r
2022-08-08,91.92499764473233\r
2022-08-10,91.92499764473233\r
2022-08-13,87.5998972451065\r
2022-08-28,84.76956279653186\r
2022-08-30,84.76956279653186\r
2022-09-02,84.76956279653186\r
2022-09-04,84.76956279653186\r
2022-09-12,86.82845737839033\r
2022-09-19,86.82845737839033\r
2022-09-22,89.51122034107145\r
2022-10-12,89.0263647569132\r
2022-10-19,89.0263647569132\r
2022-10-22,89.3341102603994\r
2022-10-24,85.01184143189163\r
2022-11-11,82.08944809480244\r
2022-11-13,82.08944809480244\r
2023-02-04,58.71971744737826\r
2023-02-06,58.71971744737826\r
2023-02-09,61.9854054401339\r
2023-02-11,61.9854054401339\r
2023-02-14,58.444594711388994\r
2023-02-16,61.35764660976849\r
2023-03-06,64.11591837335378\r
2023-04-05,84.98154429865636\r
2023-04-07,84.98154429865636\r
2023-06-24,93.53012417198873\r
2023-06-26,92.20485277718741\r
2023-07-04,91.1335798701291\r
2023-07-14,96.90961575629508\r
2023-07-19,93.49887067029655\r
`;export{r as default};
