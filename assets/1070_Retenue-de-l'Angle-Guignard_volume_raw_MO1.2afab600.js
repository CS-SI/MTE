const n=`date,value\r
2017-02-11,925326.5849844329\r
2017-03-30,1262872.9263066684\r
2017-04-09,1080260.4912023426\r
2017-04-12,1396691.1332978895\r
2017-04-19,894214.4601429105\r
2017-04-22,1015618.7004682608\r
2017-06-18,1070013.129211973\r
2017-06-21,885609.5383608458\r
2017-08-07,1054406.4644423865\r
2017-08-20,899770.7664914943\r
2017-08-27,1140774.3570629328\r
2017-10-11,910318.5340702671\r
2017-10-14,764339.9295247428\r
2017-11-13,520281.4661803617\r
2017-11-15,796320.1463189546\r
2018-03-20,1089185.723089015\r
2018-03-25,1175670.301462543\r
2018-04-17,1155657.800230315\r
2018-04-19,1210424.9455875559\r
2018-05-04,1190082.6291249709\r
2018-05-19,1263620.5185333805\r
2018-06-21,775108.2557566673\r
2018-06-23,1150684.6690700736\r
2018-06-28,1304358.217779163\r
2018-07-11,1142187.1825552655\r
2018-07-26,1214809.0990573014\r
2018-08-02,1289942.17987478\r
2018-08-05,1090562.4800160034\r
2018-09-01,1303597.2457588771\r
2018-09-11,1490927.0738914271\r
2018-09-26,1395110.1188869604\r
2018-10-04,1057111.4612195569\r
2018-10-09,1079575.634913186\r
2018-10-19,832583.6856529575\r
2018-10-21,970530.3844086054\r
2018-10-24,909074.0530696934\r
2018-11-15,794588.3324020704\r
2018-11-18,711215.23602537\r
2019-02-03,213416.77153152018\r
2019-02-13,302880.29199329787\r
2019-02-23,397509.4243620089\r
2019-02-26,2452.5472619199963\r
2019-03-23,647287.704880602\r
2019-03-28,937938.1754055691\r
2019-03-30,847461.8560269388\r
2019-04-09,885609.5383608458\r
2019-04-12,884384.0596463074\r
2019-04-19,683329.813982196\r
2019-05-07,1217736.7912305836\r
2019-05-12,954476.0519984034\r
2019-05-14,704185.4099704614\r
2019-06-01,1133724.887867966\r
2019-06-18,916555.2181137505\r
2019-06-26,866721.1265602165\r
2019-07-01,1034242.375085028\r
2019-07-03,914057.6880745253\r
2019-07-08,703646.2705433974\r
2019-07-13,688111.5461573288\r
2019-07-23,696658.454413844\r
2019-08-22,609842.9127973662\r
2019-08-25,1305119.4380449383\r
2019-08-30,881324.5121728794\r
2019-09-06,387783.77776226256\r
2019-09-16,795165.3695341265\r
2019-09-19,567408.743507609\r
2019-09-21,441909.6389199422\r
2019-10-11,438178.03169481456\r
2020-02-06,16395.80675379743\r
2020-03-19,90.71170245163478\r
2020-03-24,598458.2417623419\r
2020-03-27,879491.6281565581\r
2020-04-01,513024.8467145979\r
2020-04-08,1433331.0180278337\r
2020-04-11,914057.6880745253\r
2020-05-18,446912.6478512622\r
2020-05-21,810833.952765123\r
2020-05-26,1046314.710363198\r
2020-05-28,674348.4745441756\r
2020-05-31,400650.0949744177\r
2020-06-02,766034.5941373728\r
2020-07-17,139510.01584635847\r
2020-07-20,1201683.2100311075\r
2020-07-22,1083002.3444000462\r
2020-07-30,621850.5735167876\r
2020-08-04,978937.8337842321\r
2020-08-06,833175.9851292025\r
2020-09-08,375151.7547786573\r
2020-09-10,599936.3997550149\r
2020-09-13,1161356.0626128642\r
2020-10-18,552230.0009040934\r
2020-11-04,103294.91411224306\r
2020-11-19,475426.27910730324\r
2020-11-22,14731.820944129104\r
2021-02-27,1133724.887867966\r
2021-03-17,1034911.0062779486\r
2021-03-22,941740.2699205545\r
2021-03-24,1134428.7357121338\r
2021-03-29,1273361.7296999334\r
2021-04-01,1130209.3108909945\r
2021-04-03,1119000.4596407085\r
2021-04-08,991298.6101423064\r
2021-04-13,1211155.022564514\r
2021-04-23,1018930.4860060174\r
2021-04-28,1469688.339061486\r
2021-05-03,991951.5795670118\r
2021-05-28,1381711.8939111093\r
2021-05-31,1093318.9107101164\r
2021-06-15,1044969.4717642205\r
2021-07-17,993258.2395019255\r
2021-07-20,1001118.3973398184\r
2021-08-11,1426120.6004406177\r
2021-08-14,1091940.2091747664\r
2021-08-26,1469688.339061486\r
2021-09-23,1190082.6291249709\r
2021-09-30,800948.6233399673\r
2021-10-23,1178544.915367131\r
2021-10-28,855858.0214502607\r
2021-11-09,820787.1123494066\r
2021-11-19,848658.4757775576\r
2022-02-05,819612.6286166877\r
2022-03-07,1029568.7188878284\r
2022-03-22,1103690.181330261\r
2022-03-24,997839.122631005\r
2022-04-11,1059820.332657815\r
2022-04-16,1294484.9384398134\r
2022-04-21,1135132.8277476158\r
2022-04-26,835547.537835134\r
2022-05-01,1233909.5531287563\r
2022-05-06,1030235.6596714447\r
2022-05-11,856459.5184721124\r
2022-05-16,1054406.4644423865\r
2022-05-21,1009013.2039579998\r
2022-05-28,881935.9475378979\r
2022-05-31,1450234.4185758599\r
2022-06-02,1360580.7902407607\r
2022-06-15,1427721.158923899\r
2022-06-17,1452658.2358180664\r
2022-07-02,1459943.2659587897\r
2022-07-05,1020256.8879153474\r
2022-07-07,1014295.6735585353\r
2022-07-10,951283.1399129296\r
2022-07-12,1166354.8974578043\r
2022-07-15,1326534.4624371883\r
2022-07-20,794588.3324020704\r
2022-08-06,684921.6537962301\r
2022-08-09,657622.3927970922\r
2022-08-11,796320.1463189546\r
2022-08-29,1065929.4661820002\r
2022-09-18,851654.1550133112\r
2022-09-20,822550.6008325183\r
2022-10-08,649347.3233405417\r
2022-11-12,629421.8782197338\r
2022-11-19,627397.8550918526\r
2023-02-05,976346.6085315684\r
2023-02-10,960879.8234892254\r
2023-02-12,881324.5121728794\r
2023-02-15,803849.0377600223\r
2023-02-27,907830.523646966\r
2023-05-26,948096.2071162664\r
2023-05-28,1135837.163992286\r
2023-05-31,1114116.2172226289\r
2023-06-02,785387.5686086554\r
2023-06-05,1368385.9011117236\r
2023-06-07,1354354.6652290123\r
2023-06-15,1012973.6106009827\r
2023-06-25,625882.2287921627\r
2023-07-07,1286918.6327980182\r
2023-07-10,716104.915317072\r
2023-08-09,1053055.4186858302\r
2023-09-03,1157080.8971147835\r
2023-09-05,713386.1148722472\r
2023-09-15,1211885.3456253414\r
2023-09-30,1308929.2636540553\r
2023-10-08,756459.2219890627\r
2023-10-10,753655.744125809\r
2023-11-04,751417.1503867005\r
`;export{n as default};