const n=`date,value\r
2017-01-26,512844.20287580916\r
2017-02-15,795642.4237828883\r
2017-02-18,784239.192307226\r
2017-02-25,817546.514490837\r
2017-03-10,876681.4711425256\r
2017-03-30,908288.3924029784\r
2017-04-06,1094683.5887600991\r
2017-04-09,1096714.2447242702\r
2017-04-19,1077167.215145966\r
2017-05-09,1137742.0534925372\r
2017-05-16,1194384.3373511948\r
2017-05-26,1178153.9992891732\r
2017-06-18,1195801.1750274024\r
2017-07-05,1127411.0141750327\r
2017-07-18,1108258.5792829788\r
2017-08-02,945488.0404275837\r
2017-08-12,843299.1381863032\r
2017-08-14,926170.4598789944\r
2017-08-22,704679.4929122947\r
2017-08-24,775743.4009330039\r
2017-10-08,623007.2145017507\r
2017-10-11,591224.4723974445\r
2017-10-13,596133.0192605926\r
2017-10-16,563651.793379112\r
2017-10-23,586824.9728530153\r
2017-10-26,548474.7864865927\r
2017-10-31,568919.0794574671\r
2017-11-07,582442.7019235375\r
2017-11-17,572765.973006789\r
2017-11-20,511935.4442116589\r
2017-11-22,568439.173555098\r
2017-12-05,514664.25594164326\r
2017-12-12,585362.3018966002\r
2017-12-25,637696.2991462942\r
2018-01-11,1141888.3078695713\r
2018-02-15,1532233.4077225868\r
2018-02-25,1537888.0065054703\r
2018-03-02,1474705.3763560324\r
2018-03-15,1537079.5379230233\r
2018-03-30,1439336.1675466096\r
2018-04-19,1415232.5139282448\r
2018-04-21,1541933.6935424341\r
2018-05-06,1348725.8952997813\r
2018-05-11,1531426.4995181405\r
2018-05-21,1459716.7890455443\r
2018-06-20,1473914.5013849542\r
2018-06-23,1373754.9629321108\r
2018-06-25,1332923.9173369515\r
2018-07-08,1243774.580833882\r
2018-07-13,1335175.3640830896\r
2018-07-23,1306804.215739593\r
2018-07-25,1320203.3495494686\r
2018-08-02,1159946.8315098896\r
2018-08-04,1086580.6972003335\r
2018-08-12,963115.9969023216\r
2018-08-19,891803.8382324722\r
2018-08-22,826862.6500136357\r
2018-08-27,689727.0574984393\r
2018-09-01,633626.2071942405\r
2018-09-03,612981.3507125424\r
2018-09-08,667091.5810183656\r
2018-09-11,636168.4131685117\r
2018-09-16,575660.0657197132\r
2018-09-23,576143.1582035733\r
2018-09-26,563174.2230535632\r
2018-10-03,566042.829402418\r
2018-10-06,577109.9807053305\r
2018-11-15,525195.2006284993\r
2018-12-07,495722.2375012251\r
2018-12-20,605022.050661328\r
2019-01-16,586337.2031800777\r
2019-02-03,1100781.477591104\r
2019-02-13,918131.7523935968\r
2019-02-15,1083213.8085366234\r
2019-02-20,1108939.6320655567\r
2019-02-23,1089278.1534779533\r
2019-02-25,1055811.9092680558\r
2019-02-28,1138432.5466491827\r
2019-03-12,1041260.1651361262\r
2019-03-20,1056475.8687758083\r
2019-03-22,1014423.4438952748\r
2019-03-25,1151593.6645851473\r
2019-03-27,1081196.305250989\r
2019-03-30,982831.9408580572\r
2019-05-01,1094007.141982706\r
2019-05-06,1149510.3190234145\r
2019-05-14,1233668.4935108947\r
2019-06-08,1323190.6699232862\r
2019-06-13,1195092.6460851557\r
2019-06-18,1290524.8079543477\r
2019-06-23,1270691.742635816\r
2019-06-28,1355528.0723158203\r
2019-07-05,1152288.5527178217\r
2019-07-15,1190846.0965827277\r
2019-07-25,862888.627615518\r
2019-08-14,766734.6952438968\r
2019-08-17,729062.757422406\r
2019-08-22,742245.1085381598\r
2019-08-24,792212.3900929939\r
2019-09-11,708982.5129610262\r
2019-09-13,733991.6232743408\r
2019-09-16,660845.3625961408\r
2019-10-08,672320.3061002069\r
2019-10-11,624014.4928236464\r
2019-10-13,683370.3328476105\r
2019-12-05,1384446.285322214\r
2019-12-10,1335926.2891280085\r
2019-12-15,1178857.2449935174\r
2019-12-25,1245221.8373949782\r
2019-12-30,1249568.902881309\r
2020-01-09,1438555.2980515587\r
2020-01-11,1420656.6174461828\r
2020-01-16,1436214.022797306\r
2020-01-19,1382916.2924087236\r
2020-01-29,1319457.0726722484\r
2020-02-05,1399025.4726318568\r
2020-02-15,1294954.0339997478\r
2020-02-20,1326929.7997940353\r
2020-02-23,1353258.6861040513\r
2020-03-11,1492956.9164584186\r
2020-03-21,1492160.9230170257\r
2020-03-24,1374517.1875071737\r
2020-03-26,1329175.9336908278\r
2020-04-03,1485006.9986194684\r
2020-04-05,1315729.007278361\r
2020-04-08,1380622.966387881\r
2020-04-10,1372231.1789060323\r
2020-04-15,1433095.4331106537\r
2020-05-18,1370708.2816720065\r
2020-05-20,1390575.129209443\r
2020-05-28,1427646.4543945068\r
2020-05-30,1405188.04143651\r
2020-06-24,1312006.4729781416\r
2020-07-07,1475496.4738053754\r
2020-07-09,1310519.0077930852\r
2020-07-19,1144656.8717602068\r
2020-07-22,1108939.6320655567\r
2020-07-24,975811.9784766446\r
2020-07-27,950507.1762004815\r
2020-08-06,709521.3563991964\r
2020-08-08,757781.1554367916\r
2020-08-21,561742.7856771755\r
2020-08-31,520602.7847049345\r
2020-09-02,519686.83933289803\r
2020-09-05,534908.1446242261\r
2020-09-10,514208.9256851615\r
2020-09-12,511481.38181479304\r
2020-09-17,497062.8898110481\r
2020-09-30,469307.5626377545\r
2020-10-30,665006.0843754848\r
2020-11-09,705753.9601265593\r
2020-11-11,713299.271898634\r
2020-11-14,671796.4702095976\r
2020-11-21,741693.3704232058\r
2020-11-26,727423.6717520553\r
2020-11-29,692384.8032052577\r
2020-12-26,1233668.4935108947\r
2021-01-03,1485006.9986194684\r
2021-02-14,1623187.0245357463\r
2021-02-19,1462865.6087450483\r
2021-02-24,1684504.0579807924\r
2021-02-27,1614880.2409803446\r
2021-03-01,1534655.469722654\r
2021-03-04,1504124.2015095078\r
2021-03-21,1563876.7414505975\r
2021-03-24,1369947.165587003\r
2021-03-29,1409819.2899762322\r
2021-03-31,1479455.2984297338\r
2021-04-05,1395949.5141938347\r
2021-04-08,1462078.0702485822\r
2021-04-15,1529007.112211346\r
2021-04-23,1480247.7308708492\r
2021-05-03,1326181.5311737366\r
2021-05-20,1241605.350758613\r
2021-05-30,1291262.4596715688\r
2021-06-07,1278018.5420980484\r
2021-06-09,1254650.5206639152\r
2021-06-14,1406730.903067069\r
2021-07-02,1299391.218638595\r
2021-07-17,1309032.4274117576\r
2021-07-22,1195092.6460851557\r
2021-08-11,1041919.3108110932\r
2021-08-26,858117.9967767597\r
2021-08-28,786512.9333198871\r
2021-09-05,667613.4902419639\r
2021-09-12,678623.0400717669\r
2021-09-17,628557.80644755\r
2021-10-07,649473.9636372024\r
2021-10-12,627546.6875219967\r
2021-10-20,585362.3018966002\r
2021-10-27,598102.3976704221\r
2021-11-19,599088.364220508\r
2021-12-14,1287576.4113748092\r
2021-12-16,1280955.4475795964\r
2021-12-19,1292738.4262359503\r
2022-01-13,1197928.0831675178\r
2022-01-15,1286839.8647714353\r
2022-01-23,1477079.3361621369\r
2022-01-25,1364625.5596954003\r
2022-02-09,1399795.016994592\r
2022-02-22,1668430.0426738576\r
2022-03-09,1419881.0793421867\r
2022-03-21,1503325.0909765128\r
2022-03-24,1487389.6368920535\r
2022-03-26,1355528.0723158203\r
2022-04-05,1398256.1501763682\r
2022-05-08,1379858.9679168328\r
2022-05-10,1461290.7541370715\r
2022-05-15,1191553.304370818\r
2022-06-17,1275085.1714984367\r
2022-07-12,1319457.0726722484\r
2022-07-14,1290524.8079543477\r
2022-07-17,1219306.208556727\r
2022-08-01,906448.9557710743\r
2022-08-03,825111.657930486\r
2022-08-11,620995.217638765\r
2022-08-28,415078.0972296619\r
2022-09-05,292475.9692366689\r
2022-09-10,263792.0388794456\r
2022-09-20,274489.45794998185\r
2022-09-22,265720.4418751417\r
2022-10-02,243065.06487042623\r
2022-10-05,240307.50399800154\r
2022-10-07,258368.2136511535\r
2022-10-17,238782.65352164625\r
2022-10-30,237870.18618906717\r
2022-11-01,246148.37781050752\r
2022-11-06,255205.32003636632\r
2022-11-11,247077.3466450271\r
2022-11-16,251436.80531023256\r
2022-12-04,492601.4317929838\r
2022-12-14,545183.7641436051\r
2022-12-21,39526.99685232073\r
2023-01-10,768419.6245217306\r
2023-01-18,1135671.8920804462\r
2023-02-02,1369186.2711819985\r
2023-02-04,1332173.8778641927\r
2023-02-09,1302353.763827907\r
2023-02-12,1352502.667136504\r
2023-02-14,1336677.435581153\r
2023-02-17,1381387.186622888\r
2023-02-24,1252471.3602081852\r
2023-03-09,1372231.1789060323\r
2023-03-16,1508123.0946809873\r
2023-04-05,1437774.6507655804\r
2023-04-08,1345708.465068935\r
2023-04-10,1377568.3030275535\r
2023-04-18,1030743.5774375158\r
2023-04-20,1309032.4274117576\r
2023-05-28,1388275.1491034091\r
2023-06-24,1480247.7308708492\r
2023-07-07,1396718.1709633137\r
2023-07-14,1267767.2075067393\r
2023-07-17,1243774.580833882\r
2023-07-22,1313494.8230158903\r
`;export{n as default};
