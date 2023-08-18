const n=`date,value\r
2017-01-04,30081.493380767603\r
2017-01-07,121221.272022081\r
2017-01-14,71333.86611635299\r
2017-02-16,1240034.9676940225\r
2017-02-26,1525440.616573228\r
2017-03-05,1815156.9236957906\r
2017-03-08,1950646.7152233005\r
2017-03-15,2179976.763078557\r
2017-03-28,2774427.29059808\r
2017-04-04,2954855.243039769\r
2017-04-07,3246475.8979767077\r
2017-05-07,4224995.08405119\r
2017-05-17,4239028.701012355\r
2017-05-24,4111781.7832474527\r
2017-05-27,4355043.712614785\r
2017-06-03,4005783.915438944\r
2017-06-13,4285927.14063342\r
2017-06-16,4438819.970184366\r
2017-06-26,4234348.984764472\r
2017-07-01,3975244.815777056\r
2017-07-03,3810278.134394588\r
2017-07-06,3879592.907471118\r
2017-07-08,3499552.7205258585\r
2017-07-11,3670026.832613669\r
2017-07-13,3306252.6885562795\r
2017-07-18,3043113.969138602\r
2017-07-26,2702334.2901380234\r
2017-07-31,2477259.3076473167\r
2017-08-05,2140718.5669346238\r
2017-08-07,2061762.117551845\r
2017-08-12,1845222.3331659504\r
2017-08-15,1747587.8079679832\r
2017-08-17,1740767.691346881\r
2017-08-20,1677573.59466953\r
2017-08-22,1694418.8052426819\r
2017-08-25,1618536.4349016757\r
2017-08-27,1571195.1035687171\r
2017-08-30,1440694.101557973\r
2017-09-14,1219963.7936586123\r
2017-09-21,1191068.7032033135\r
2017-10-11,798739.2833536752\r
2017-10-16,659751.5019879328\r
2017-10-21,608257.2973236331\r
2017-10-24,531997.089706451\r
2017-10-26,495976.356390727\r
2017-11-03,483690.9878055037\r
2017-11-18,496702.4427589093\r
2017-11-20,461572.7561158741\r
2017-11-23,448900.16104039556\r
2017-11-30,498155.75151027733\r
2017-12-05,404872.281787693\r
2017-12-13,655737.6066639475\r
2017-12-23,1056043.701869647\r
2017-12-28,1163405.1646659079\r
2018-01-02,1353533.485553574\r
2018-01-14,1825544.242829752\r
2018-01-17,1938829.9564913071\r
2018-02-03,2133386.013889426\r
2018-02-08,2673157.5775443786\r
2018-02-11,2545868.6841347613\r
2018-02-13,2633553.5393115175\r
2018-03-13,3756343.3362137685\r
2018-04-02,4004254.9815621115\r
2018-04-17,4024147.3507503895\r
2018-04-19,4105610.051604798\r
2018-04-22,4148881.538281402\r
2018-04-29,4315724.553894296\r
2018-05-19,4153527.359374565\r
2018-06-03,4036406.27314749\r
2018-06-16,4342447.747410878\r
2018-06-18,4179888.6804962605\r
2018-06-21,4309445.297042146\r
2018-06-26,4084035.042013211\r
2018-07-01,4127225.570677331\r
2018-07-08,4375539.890116869\r
2018-07-11,4301600.812292135\r
2018-07-13,4196977.678328756\r
2018-07-18,4013431.7065403867\r
2018-07-21,3681889.97824975\r
2018-07-23,3744395.10103517\r
2018-07-26,3783276.4586877297\r
2018-07-31,3799769.345677285\r
2018-08-02,3464644.3951285975\r
2018-08-17,2833668.5740399263\r
2018-08-20,2793228.354237739\r
2018-08-22,2603333.4724932862\r
2018-08-27,2161542.8062925595\r
2018-08-30,2171367.30274674\r
2018-09-01,2038882.973900817\r
2018-09-09,1928216.7851745812\r
2018-09-11,1826699.6937969779\r
2018-09-14,1718102.756009334\r
2018-09-21,1751001.4314380947\r
2018-09-24,1586553.508655406\r
2018-09-26,1511376.4672161536\r
2018-09-29,1730555.3622254734\r
2018-10-14,1869634.2589048329\r
2018-10-19,2082309.9935186752\r
2018-10-21,1827855.4054699063\r
2018-10-24,1784122.0391388373\r
2018-11-28,2186133.8129504872\r
2018-12-03,2186133.8129504872\r
2018-12-05,2198466.479039109\r
2018-12-08,2130943.8239695104\r
2018-12-10,2001749.757850773\r
2018-12-15,2049709.1130298525\r
2018-12-18,2251778.1529883523\r
2018-12-25,2340796.604567542\r
2018-12-28,2408045.638414055\r
2019-01-02,2385130.202325786\r
2019-01-07,2420810.168599692\r
2019-01-09,2545868.6841347613\r
2019-01-12,2363559.6913610627\r
2019-01-14,2547169.6169554144\r
2019-01-29,2799953.9880843903\r
2019-02-06,3297689.348349637\r
2019-02-13,3229468.353682564\r
2019-02-16,3263515.2769805654\r
2019-02-28,4051748.616965668\r
2019-03-03,3342018.425349709\r
2019-03-23,3873547.857520654\r
2019-03-25,3940228.0164121287\r
2019-03-28,3922002.28192645\r
2019-03-30,3619761.010221821\r
2019-04-02,4021084.698418227\r
2019-04-09,3429861.055954042\r
2019-04-14,4147333.3433419177\r
2019-04-19,3967623.071336923\r
2019-04-27,4304737.994534405\r
2019-04-29,4209421.650975688\r
2019-05-07,4117956.8203606075\r
2019-05-09,4002726.2558529126\r
2019-05-14,4628985.147786794\r
2019-06-01,4424553.710809727\r
2019-06-03,4082495.5216236324\r
2019-06-11,4292194.160703297\r
2019-06-18,4524760.785592729\r
2019-06-21,4369229.718872964\r
2019-06-26,4464222.620956566\r
2019-06-28,3804271.8448282373\r
2019-07-01,2052117.6974077658\r
2019-07-03,3662619.302449999\r
2019-07-06,4369229.718872964\r
2019-07-08,3999669.4290286005\r
2019-07-13,2671834.04869667\r
2019-07-16,3100139.979540707\r
2019-07-18,2770404.3854460265\r
2019-07-21,2770404.3854460265\r
2019-07-23,2197232.0992883276\r
2019-07-26,2681103.658038976\r
2019-07-31,2378778.680995399\r
2019-08-05,2344584.995006161\r
2019-08-10,2008917.8253905515\r
2019-08-15,2104145.659345033\r
2019-08-20,1764679.6620595257\r
2019-08-27,1766963.0556561863\r
2019-08-30,1431149.409219564\r
2019-09-04,1439632.4631216654\r
2019-09-09,1344199.3263716833\r
2019-09-11,1352495.2194880098\r
2019-09-16,1600862.5289396814\r
2019-10-09,1587652.5752816622\r
2019-10-19,1650746.3565626394\r
2019-10-26,1705682.2545147743\r
2019-11-30,1829011.3778012611\r
2019-12-10,2636187.2457122174\r
2019-12-23,2978208.555732785\r
2019-12-25,2843134.424246489\r
2019-12-30,2615143.9009290417\r
2020-01-04,3442890.1384077\r
2020-01-09,3206841.231584539\r
2020-01-12,3635996.4229101525\r
2020-01-14,3622710.9758804417\r
2020-01-17,3870526.593399549\r
2020-02-01,3872037.12036934\r
2020-02-06,4036406.27314749\r
2020-02-08,4070186.812956195\r
2020-02-26,4136501.750312471\r
2020-03-04,3949352.179285833\r
2020-03-19,4117956.8203606075\r
2020-03-24,4124135.1615222106\r
2020-03-29,4108695.504153358\r
2020-04-01,4142689.9951069225\r
2020-04-06,4195423.105731621\r
2020-04-08,4318865.40486968\r
2020-04-11,4037939.57329352\r
2020-04-23,4281229.019072916\r
2020-04-26,4454690.569063239\r
2020-05-03,3911384.5266856947\r
2020-05-21,3969147.002882986\r
2020-05-23,4350318.700971692\r
2020-05-26,4464222.620956566\r
2020-05-28,4198532.456306476\r
2020-06-05,4662838.220483547\r
2020-06-15,4413469.059002069\r
2020-06-17,4212534.696635892\r
2020-06-20,3140702.9467771947\r
2020-06-22,4037939.57329352\r
2020-06-25,4317294.877520594\r
2020-06-27,4472171.5465963\r
2020-06-30,4598432.054915912\r
2020-07-02,4457867.112310789\r
2020-07-05,4698397.598014946\r
2020-07-07,4051748.616965668\r
2020-07-12,4235908.685350092\r
2020-07-15,4703254.06524112\r
2020-07-17,4383432.170197595\r
2020-07-20,4353468.505490768\r
2020-07-22,3793768.9720687494\r
2020-07-25,3973720.0495929956\r
2020-07-27,3428414.4678662685\r
2020-07-30,3180045.300059514\r
2020-08-01,2591542.1213553715\r
2020-08-06,2424644.218726051\r
2020-08-09,2638821.8908196157\r
2020-08-11,2483703.304634918\r
2020-08-14,2836371.9538134253\r
2020-08-16,2712971.9840554097\r
2020-08-19,2402946.568025565\r
2020-08-21,2002943.8011428092\r
2020-08-26,2066590.3724617441\r
2020-09-05,1521108.238692971\r
2020-09-13,1687673.5189777026\r
2020-09-18,1655206.8467111841\r
2020-10-03,1955380.584841584\r
2020-10-08,68446.8899368365\r
2020-10-10,1993398.567946388\r
2020-10-28,1468394.4825445642\r
2020-10-30,2486282.5747227534\r
2020-11-02,2395305.192995855\r
2020-11-07,2848548.534407804\r
2020-11-19,3437097.2601398723\r
2020-11-22,3342018.425349709\r
2020-11-24,3618286.348802114\r
2020-12-09,3929592.6755846487\r
2020-12-27,3321972.703947402\r
2021-01-03,3949352.179285833\r
2021-01-13,3733951.5359345307\r
2021-01-26,4065574.4653080897\r
2021-02-15,4096358.6550136283\r
2021-02-17,4002726.2558529126\r
2021-02-25,4181441.198086279\r
2021-03-02,3996613.435148454\r
2021-03-04,4091735.7484146296\r
2021-03-22,4179888.6804962605\r
2021-03-24,4073262.747401131\r
2021-03-29,4155076.3784237257\r
2021-04-06,4057891.3647769843\r
2021-04-11,4256203.425316123\r
2021-04-23,4010371.9658474233\r
2021-05-06,4117956.8203606075\r
2021-05-08,4068649.1565151364\r
2021-05-18,4320436.135920311\r
2021-05-21,4262454.9178274935\r
2021-05-26,4209421.650975688\r
2021-06-10,4467401.586025013\r
2021-06-15,4260891.737939475\r
2021-06-25,4271838.290292981\r
2021-06-27,4195423.105731621\r
2021-06-30,4314154.434012039\r
2021-07-05,4212534.696635892\r
2021-07-07,2669187.692358209\r
2021-07-10,4337727.615710124\r
2021-07-12,4169026.815981274\r
2021-07-15,4128771.084820873\r
2021-07-20,3714583.9595364416\r
2021-07-22,3621235.88592294\r
2021-07-30,3364980.4353426564\r
2021-08-01,2866169.7441127594\r
2021-08-06,2596780.3650508747\r
2021-08-14,2036479.9429182082\r
2021-08-16,1983869.6072942398\r
2021-08-19,1773819.5517612556\r
2021-08-21,1652976.0650682396\r
2021-08-26,1486607.7786640613\r
2021-08-29,1279508.4474768038\r
2021-09-05,1174245.3278197849\r
2021-09-23,1038985.1465289794\r
2021-10-03,972671.51934094\r
2021-10-05,1640725.959513255\r
2021-10-10,1339023.6429928376\r
2021-10-13,1495206.4158278934\r
2021-10-15,1564629.2542574112\r
2021-10-18,1537377.2939646558\r
2021-11-04,1606378.188915191\r
2021-11-19,1862647.750310927\r
2021-12-07,2583691.831362406\r
2021-12-12,2743638.2721968167\r
2021-12-14,2457963.1692999788\r
2021-12-17,3004386.8108004215\r
2021-12-19,2739631.3530161944\r
2022-01-08,3291984.856200328\r
2022-01-13,4223436.817934525\r
2022-01-16,3762322.543002943\r
2022-01-18,3723518.3775295294\r
2022-01-21,3635996.4229101525\r
2022-01-23,3689311.3753191093\r
2022-01-26,3613863.650481891\r
2022-02-02,3879592.907471118\r
2022-02-07,4179888.6804962605\r
2022-02-10,4248393.662371273\r
2022-02-12,4355043.712614785\r
2022-02-17,3923519.9419305525\r
2022-02-20,4282794.8554082075\r
2022-02-22,4256203.425316123\r
2022-03-02,4317294.877520594\r
2022-03-09,4210978.071213513\r
2022-03-22,4418218.409839619\r
2022-03-24,4339300.789524751\r
2022-04-11,4429307.310699925\r
2022-04-16,4426138.041839874\r
2022-04-18,4422969.5820738515\r
2022-04-23,4389749.645447341\r
2022-05-01,4435648.2750380505\r
2022-05-11,4492862.342743606\r
2022-05-13,4396070.364743289\r
2022-05-16,4438819.970184366\r
2022-05-18,4424553.710809727\r
2022-05-21,4434062.730678117\r
2022-05-23,4496048.564391245\r
2022-06-02,4429307.310699925\r
2022-06-07,4361346.57304891\r
2022-06-10,4366075.851319783\r
2022-06-12,4397651.051292642\r
2022-06-15,4309445.297042146\r
2022-06-17,4340874.166765383\r
2022-06-20,4251516.953705852\r
2022-06-25,4254641.063526978\r
2022-07-02,3856941.3127231863\r
2022-07-05,3915933.7362446184\r
2022-07-10,3599135.2613597102\r
2022-07-15,3432754.884957895\r
2022-07-17,3168786.809403409\r
2022-07-20,3061154.4941930394\r
2022-07-22,2736961.2340127886\r
2022-07-25,2594160.7716819495\r
2022-07-30,2267985.1498878\r
2022-08-01,1996976.1246548\r
2022-08-04,1789854.832114294\r
2022-08-06,1732822.9165177622\r
2022-08-09,1667495.3095619513\r
2022-08-11,1541726.1254188463\r
2022-08-14,1508137.4960972536\r
2022-08-16,1393197.5528991977\r
2022-08-24,1407913.3714097291\r
2022-08-26,1412128.0112578028\r
2022-09-10,1171285.3646074692\r
2022-09-13,1298898.450294148\r
2022-09-18,1006100.4294740716\r
2022-09-20,1151620.481649555\r
2022-09-23,1007969.3814919193\r
2022-10-05,1033321.0059089982\r
2022-10-08,453110.3738109774\r
2022-10-13,1250114.2887942414\r
2022-10-15,1207977.2525776636\r
2022-10-18,1450261.398544255\r
2022-10-20,1170299.302382556\r
2022-10-28,1168328.0666305867\r
2022-10-30,1107810.5995290389\r
2022-11-02,1132074.6308494897\r
2022-11-04,1281544.599851416\r
2022-11-14,1496282.4885822677\r
2022-11-24,1276456.3845338554\r
2022-11-27,1370184.3389430712\r
2022-12-04,1479098.490094011\r
2022-12-22,1917624.406067232\r
2022-12-27,2056937.8916314295\r
2022-12-29,2157862.717980142\r
2023-01-18,2719628.108278661\r
2023-01-31,2975457.705177319\r
2023-02-02,3025111.5051459633\r
2023-02-10,3698224.084334676\r
2023-02-12,3543363.342889634\r
2023-02-15,3708631.9345177524\r
2023-02-22,3811780.234727823\r
2023-03-07,3870526.593399549\r
2023-03-09,3852416.672489769\r
2023-03-12,3925037.8113216413\r
2023-03-14,3955439.1347101633\r
2023-03-27,4085574.76939618\r
2023-04-06,3978294.9739285605\r
2023-04-16,3967623.071336923\r
2023-04-26,4002726.2558529126\r
2023-04-28,3675956.698736124\r
2023-05-06,4156625.603445228\r
2023-05-23,4218763.249736184\r
2023-05-26,4234348.984764472\r
2023-05-28,4170577.8937640614\r
2023-06-02,3961529.432551937\r
2023-06-07,4014961.8889448005\r
2023-06-10,4362922.796036636\r
2023-06-15,4217205.803792952\r
2023-06-17,4195423.105731621\r
2023-06-25,4256203.425316123\r
2023-06-27,4389749.645447341\r
2023-07-02,4116412.7512722616\r
2023-07-05,4307875.992348723\r
2023-07-07,4088654.8450528053\r
2023-07-10,4289060.24245548\r
2023-07-15,2650689.4030959886\r
2023-07-17,2890632.250914434\r
2023-07-20,1111680.2368878862\r
2023-07-22,2667864.864933891\r
`;export{n as default};
