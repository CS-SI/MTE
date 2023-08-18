const n=`date,value\r
2017-01-04,30081.493380767603\r
2017-01-07,126532.33562325173\r
2017-01-14,74632.23368113044\r
2017-02-16,1240034.9676940225\r
2017-02-23,1284600.9927161632\r
2017-02-26,1501666.9920617244\r
2017-03-05,1780685.5126642457\r
2017-03-08,1800190.376135116\r
2017-03-15,1953013.1385224524\r
2017-03-18,2157862.717980142\r
2017-03-25,2193530.4437466045\r
2017-03-28,2774427.29059808\r
2017-04-04,2963090.101307777\r
2017-04-07,2956227.151789295\r
2017-04-14,3254991.611129736\r
2017-04-17,3376482.4532786338\r
2017-05-07,4229671.11224926\r
2017-05-14,4187653.3242186327\r
2017-05-17,4214091.52722108\r
2017-05-24,4155076.3784237257\r
2017-05-27,4265581.890994831\r
2017-06-03,4189206.869585414\r
2017-06-06,4375539.890116869\r
2017-06-13,4312584.517895082\r
2017-06-16,4470581.358037495\r
2017-06-23,4470581.358037495\r
2017-06-26,4438819.970184366\r
2017-07-01,4311014.805564693\r
2017-07-03,3976769.7905632243\r
2017-07-06,4041006.7965675904\r
2017-07-08,3925037.8113216413\r
2017-07-11,3765313.4180204244\r
2017-07-13,3627137.531041101\r
2017-07-18,3584428.3355265944\r
2017-07-21,3476266.634022558\r
2017-07-23,3151925.7917652605\r
2017-07-26,2994732.685894567\r
2017-07-28,2996111.1680824794\r
2017-07-31,2803992.1365176192\r
2017-08-02,2632237.038210259\r
2017-08-05,2503071.085949758\r
2017-08-07,2347111.802189571\r
2017-08-12,2018489.454008246\r
2017-08-15,2008917.8253905515\r
2017-08-17,1902361.0768061937\r
2017-08-20,1852185.4901368232\r
2017-08-22,1771533.00089679\r
2017-08-25,1670852.3312698652\r
2017-08-27,1666376.8374821877\r
2017-08-30,1589851.5226927353\r
2017-09-01,1652976.0650682396\r
2017-09-04,1551527.0021468007\r
2017-09-09,1429031.4405776872\r
2017-09-14,1304018.34994851\r
2017-09-16,1304018.34994851\r
2017-09-19,1304018.34994851\r
2017-09-21,1257187.1117255013\r
2017-09-24,1257187.1117255013\r
2017-10-11,887303.641541253\r
2017-10-14,887303.641541253\r
2017-10-16,811681.7183449572\r
2017-10-19,799599.8026784328\r
2017-10-21,680764.1110089482\r
2017-10-24,597362.6403070107\r
2017-10-26,599691.2952213\r
2017-10-31,532741.550837078\r
2017-11-03,506175.97193517664\r
2017-11-05,519398.1881469992\r
2017-11-08,483690.9878055037\r
2017-11-18,496702.4427589093\r
2017-11-20,506907.34608518315\r
2017-11-23,461572.7561158741\r
2017-11-28,509836.6063537193\r
2017-11-30,508371.2237968544\r
2017-12-03,499610.57389152015\r
2017-12-05,495976.356390727\r
2017-12-13,666191.8823507623\r
2017-12-18,655737.6066639475\r
2017-12-20,655737.6066639475\r
2017-12-23,1062704.3029761694\r
2017-12-25,1056043.701869647\r
2017-12-28,1206980.2804441995\r
2017-12-30,1206980.2804441995\r
2018-01-02,1353533.485553574\r
2018-01-04,1353533.485553574\r
2018-01-14,1825544.242829752\r
2018-01-17,1949463.8873173618\r
2018-01-19,1949463.8873173618\r
2018-01-22,1911748.7473867813\r
2018-01-24,1911748.7473867813\r
2018-01-27,1960118.5451189303\r
2018-02-03,2133386.013889426\r
2018-02-08,2675805.336430773\r
2018-02-11,2540667.323542984\r
2018-02-13,2636187.2457122174\r
2018-02-16,2633553.5393115175\r
2018-02-18,2633553.5393115175\r
2018-03-13,3756343.3362137685\r
2018-03-18,3756343.3362137685\r
2018-03-23,3756343.3362137685\r
2018-04-02,4201642.628316431\r
2018-04-07,4201642.628316431\r
2018-04-12,4004254.9815621115\r
2018-04-17,4024147.3507503895\r
2018-04-19,4267145.684231158\r
2018-04-22,4117956.8203606075\r
2018-04-24,4117956.8203606075\r
2018-04-27,4245271.189695735\r
2018-04-29,4206309.4261407135\r
2018-05-07,4437234.021547039\r
2018-05-09,4315724.553894296\r
2018-05-19,4377117.940333989\r
2018-05-22,4364499.222133941\r
2018-05-29,4153527.359374565\r
2018-06-03,4036406.27314749\r
2018-06-08,4036406.27314749\r
2018-06-13,4036406.27314749\r
2018-06-16,4342447.747410878\r
2018-06-18,4402394.3267472945\r
2018-06-21,4231230.198192413\r
2018-06-26,4309445.297042146\r
2018-06-28,4187653.3242186327\r
2018-07-01,4165925.2777610775\r
2018-07-03,4281229.019072916\r
2018-07-06,4175232.361539844\r
2018-07-08,4273402.901026301\r
2018-07-11,4356619.1229536785\r
2018-07-13,4386590.502232987\r
2018-07-18,4364499.222133941\r
2018-07-21,4165925.2777610775\r
2018-07-23,4082495.5216236324\r
2018-07-26,3943268.5677552917\r
2018-07-28,3915933.7362446184\r
2018-07-31,3890179.831448386\r
2018-08-02,3760827.4233636907\r
2018-08-05,3675956.698736124\r
2018-08-07,3591779.1139583434\r
2018-08-10,3596192.1583244703\r
2018-08-12,3424076.009575498\r
2018-08-17,2871599.447884389\r
2018-08-20,2863456.2667935695\r
2018-08-22,2810726.994695337\r
2018-08-25,2795917.9155542594\r
2018-08-27,2727623.132428909\r
2018-08-30,2473395.7759514456\r
2018-09-01,2279229.640782533\r
2018-09-06,2152959.4133653212\r
2018-09-09,2010113.391494177\r
2018-09-11,1937649.6894762993\r
2018-09-14,1826699.6937969779\r
2018-09-16,1826699.6937969779\r
2018-09-19,1826699.6937969779\r
2018-09-21,1794445.7869859461\r
2018-09-24,1622965.71624151\r
2018-09-26,1651861.0766473187\r
2018-09-29,1715842.0931026908\r
2018-10-01,1715842.0931026908\r
2018-10-06,1730555.3622254734\r
2018-10-09,1730555.3622254734\r
2018-10-14,1869634.2589048329\r
2018-10-19,2205877.947744926\r
2018-10-21,1862647.750310927\r
2018-10-24,1916448.7599511156\r
2018-10-26,1852185.4901368232\r
2018-11-28,2186133.8129504872\r
2018-12-03,2330704.91653147\r
2018-12-05,2198466.479039109\r
2018-12-08,2226925.3653496373\r
2018-12-10,2230647.0102939745\r
2018-12-15,2175055.5836678124\r
2018-12-18,2195997.9667960885\r
2018-12-23,2287989.059135213\r
2018-12-25,2245555.73665335\r
2018-12-28,2338272.2249372103\r
2019-01-02,2385130.202325786\r
2019-01-04,2385130.202325786\r
2019-01-07,2628288.9437068105\r
2019-01-09,2514717.48684415\r
2019-01-12,2526383.1554281362\r
2019-01-14,2484992.820336323\r
2019-01-17,2484992.820336323\r
2019-01-22,2552375.7178872614\r
2019-01-24,2499193.2384596174\r
2019-01-29,2829615.228450462\r
2019-02-03,2799953.9880843903\r
2019-02-06,3349188.02946581\r
2019-02-08,3349188.02946581\r
2019-02-11,3349188.02946581\r
2019-02-13,3177229.34249791\r
2019-02-16,3260673.1717654886\r
2019-02-18,3301970.028442062\r
2019-02-21,3301970.028442062\r
2019-02-23,3324833.744705337\r
2019-02-26,3323403.1145290504\r
2019-02-28,3429861.055954042\r
2019-03-03,3453036.0435649627\r
2019-03-08,3713095.6341729895\r
2019-03-10,3713095.6341729895\r
2019-03-18,3342018.425349709\r
2019-03-23,3873547.857520654\r
2019-03-25,4028742.8882323066\r
2019-03-28,3906837.2032843577\r
2019-03-30,3952395.2391035953\r
2019-04-02,3896234.120607771\r
2019-04-07,3896234.120607771\r
2019-04-09,3834337.0618544263\r
2019-04-12,3911384.5266856947\r
2019-04-14,3923519.9419305525\r
2019-04-17,3923519.9419305525\r
2019-04-19,3908352.768139577\r
2019-04-27,4214091.52722108\r
2019-04-29,4165925.2777610775\r
2019-05-02,4130316.8053121944\r
2019-05-07,4253078.9063163735\r
2019-05-09,4315724.553894296\r
2019-05-14,4355043.712614785\r
2019-05-19,4273402.901026301\r
2019-05-24,4646706.738323791\r
2019-05-29,4628985.147786794\r
2019-06-01,4424553.710809727\r
2019-06-03,4437234.021547039\r
2019-06-06,4437234.021547039\r
2019-06-11,4318865.40486968\r
2019-06-13,4325149.551069116\r
2019-06-18,4553538.130647173\r
2019-06-21,4521567.320629732\r
2019-06-23,4521567.320629732\r
2019-06-26,4478534.317368807\r
2019-06-28,4446752.744571427\r
2019-07-01,4306306.89150571\r
2019-07-03,4289060.24245548\r
2019-07-06,4240589.016045756\r
2019-07-08,4156625.603445228\r
2019-07-11,4021084.698418227\r
2019-07-13,3754849.0645003133\r
2019-07-16,3562408.245627658\r
2019-07-18,3434202.1258213553\r
2019-07-21,3254991.611129736\r
2019-07-23,2871599.447884389\r
2019-07-26,2752995.8689016886\r
2019-07-28,2783822.161976569\r
2019-07-31,2765043.75108135\r
2019-08-02,2648050.537131694\r
2019-08-05,2506951.077144918\r
2019-08-07,2464389.235516306\r
2019-08-10,2440002.0430581532\r
2019-08-12,2291746.762422347\r
2019-08-15,2275479.273693471\r
2019-08-17,2182438.8398534856\r
2019-08-20,2154184.8665615562\r
2019-08-22,1950646.7152233005\r
2019-08-25,1986250.3206843946\r
2019-08-27,1911748.7473867813\r
2019-08-30,1746450.4614853708\r
2019-09-04,1618536.4349016757\r
2019-09-06,1637390.6647143753\r
2019-09-09,1541726.1254188463\r
2019-09-11,1450261.398544255\r
2019-09-14,1447069.7905724302\r
2019-09-16,1484460.8839322585\r
2019-09-19,1484460.8839322585\r
2019-09-24,1461985.39670144\r
2019-09-26,1594252.6726421746\r
2019-09-29,1620750.5359652208\r
2019-10-01,1620750.5359652208\r
2019-10-09,1607482.1326031242\r
2019-10-11,1589851.5226927353\r
2019-10-14,1589851.5226927353\r
2019-10-16,1589851.5226927353\r
2019-10-19,1624073.7109523565\r
2019-10-26,1761256.546542042\r
2019-10-29,1761256.546542042\r
2019-11-05,1705682.2545147743\r
2019-11-30,1829011.3778012611\r
2019-12-08,2129723.103149072\r
2019-12-10,2644093.9960794155\r
2019-12-13,2644093.9960794155\r
2019-12-15,2644093.9960794155\r
2019-12-23,2969958.7243448934\r
2019-12-25,2824213.987251436\r
2019-12-28,3016815.530696104\r
2019-12-30,2814770.6746801566\r
2020-01-04,3442890.1384077\r
2020-01-09,3483537.5795668215\r
2020-01-12,3432754.884957895\r
2020-01-14,3582958.824394119\r
2020-01-17,3582958.824394119\r
2020-01-22,3720539.3877303577\r
2020-01-27,3762322.543002943\r
2020-02-01,3900777.040526501\r
2020-02-06,3976769.7905632243\r
2020-02-08,4002726.2558529126\r
2020-02-11,4002726.2558529126\r
2020-02-13,3944789.157067067\r
2020-02-16,3944789.157067067\r
2020-02-18,4187653.3242186327\r
2020-02-21,4141142.6246299753\r
2020-02-26,4153527.359374565\r
2020-02-28,4153527.359374565\r
2020-03-04,4121045.5780241527\r
2020-03-07,4151978.5463197688\r
2020-03-14,4010371.9658474233\r
2020-03-19,4124135.1615222106\r
2020-03-22,4156625.603445228\r
2020-03-24,4228112.231230231\r
2020-03-29,4097900.0375389904\r
2020-04-01,4206309.4261407135\r
2020-04-03,4206309.4261407135\r
2020-04-06,4251516.953705852\r
2020-04-08,4176784.262201137\r
2020-04-11,4196977.678328756\r
2020-04-23,4265581.890994831\r
2020-04-26,4340874.166765383\r
2020-04-28,4454690.569063239\r
2020-05-03,4281229.019072916\r
2020-05-06,4421385.65565302\r
2020-05-11,4449927.268500269\r
2020-05-21,4454690.569063239\r
2020-05-23,4606465.345641425\r
2020-05-26,4449927.268500269\r
2020-05-28,4464222.620956566\r
2020-05-31,4462633.4410778275\r
2020-06-05,4511991.751353942\r
2020-06-10,4537542.683793213\r
2020-06-12,4664452.465034959\r
2020-06-15,4678989.630081242\r
2020-06-17,4212534.696635892\r
2020-06-20,4419801.931568015\r
2020-06-22,4165925.2777610775\r
2020-06-25,4317294.877520594\r
2020-06-27,4271838.290292981\r
2020-06-30,4429307.310699925\r
2020-07-02,4361346.57304891\r
2020-07-05,4481716.912389754\r
2020-07-07,4421385.65565302\r
2020-07-10,4547137.543160523\r
2020-07-12,4531150.127348466\r
2020-07-15,4620937.865414616\r
2020-07-17,4526357.81958345\r
2020-07-20,4475352.5287162075\r
2020-07-22,4385011.234807452\r
2020-07-25,4385011.234807452\r
2020-07-27,4169026.815981274\r
2020-07-30,4007313.057460624\r
2020-08-01,3832831.7970880875\r
2020-08-04,3835842.5373927914\r
2020-08-06,3432754.884957895\r
2020-08-09,3201193.3207565\r
2020-08-11,2777110.38373172\r
2020-08-14,2703663.1866700603\r
2020-08-16,2691711.509181829\r
2020-08-19,2654649.459267303\r
2020-08-21,2530275.988911794\r
2020-08-24,2646731.4556948915\r
2020-08-26,2588924.414344281\r
2020-09-03,2123623.2420822647\r
2020-09-05,1925861.1251385512\r
2020-09-08,1878964.1045621238\r
2020-09-10,1878964.1045621238\r
2020-09-13,1664140.6963658796\r
2020-09-15,1664140.6963658796\r
2020-09-18,1640725.959513255\r
2020-09-20,1634057.79104254\r
2020-09-25,1819770.9002357956\r
2020-09-28,1819770.9002357956\r
2020-09-30,1655206.8467111841\r
2020-10-03,2002943.8011428092\r
2020-10-08,1955380.584841584\r
2020-10-10,1861484.239326515\r
2020-10-15,1861484.239326515\r
2020-10-18,1861484.239326515\r
2020-10-20,1993398.567946388\r
2020-10-25,2132164.7942299508\r
2020-10-28,1849863.3986267874\r
2020-10-30,2309311.7649873355\r
2020-11-02,2369896.7032983536\r
2020-11-07,2405495.621378384\r
2020-11-09,2405495.621378384\r
2020-11-17,2847194.662508228\r
2020-11-19,3262094.1139879194\r
2020-11-22,3409628.6379742064\r
2020-11-24,3560941.960807101\r
2020-12-02,3560941.960807101\r
2020-12-07,3683373.831285533\r
2020-12-09,3934149.423495051\r
2020-12-12,3929592.6755846487\r
2020-12-19,3929592.6755846487\r
2020-12-22,3929592.6755846487\r
2020-12-27,3431307.8616600223\r
2021-01-03,3949352.179285833\r
2021-01-06,3949352.179285833\r
2021-01-13,3979820.36585013\r
2021-01-16,3801269.967439431\r
2021-01-18,3801269.967439431\r
2021-01-23,3801269.967439431\r
2021-01-26,4091735.7484146296\r
2021-01-31,4065574.4653080897\r
2021-02-02,4065574.4653080897\r
2021-02-15,4096358.6550136283\r
2021-02-17,4285927.14063342\r
2021-02-20,4285927.14063342\r
2021-02-25,4136501.750312471\r
2021-02-27,4331436.955134836\r
2021-03-02,4318865.40486968\r
2021-03-04,4107152.67454976\r
2021-03-14,4091735.7484146296\r
2021-03-22,4179888.6804962605\r
2021-03-24,4229671.11224926\r
2021-03-29,4169026.815981274\r
2021-04-01,4169026.815981274\r
2021-04-03,4295328.895205897\r
2021-04-06,4422969.5820738515\r
2021-04-08,4422969.5820738515\r
2021-04-11,4257765.991662272\r
2021-04-13,4257765.991662272\r
2021-04-18,4256203.425316123\r
2021-04-23,4010371.9658474233\r
2021-04-28,4010371.9658474233\r
2021-05-03,4010371.9658474233\r
2021-05-06,4117956.8203606075\r
2021-05-08,4201642.628316431\r
2021-05-13,4190760.6204419485\r
2021-05-18,4311014.805564693\r
2021-05-21,4369229.718872964\r
2021-05-23,4369229.718872964\r
2021-05-26,4298464.4457924245\r
2021-05-28,4298464.4457924245\r
2021-05-31,4481716.912389754\r
2021-06-05,4209421.650975688\r
2021-06-10,4467401.586025013\r
2021-06-12,4467401.586025013\r
2021-06-15,4481716.912389754\r
2021-06-17,4481716.912389754\r
2021-06-22,4264018.302186446\r
2021-06-25,4402394.3267472945\r
2021-06-27,4472171.5465963\r
2021-06-30,4555138.779155163\r
2021-07-02,3950873.604709579\r
2021-07-05,4239028.701012355\r
2021-07-07,4239028.701012355\r
2021-07-10,4190760.6204419485\r
2021-07-12,4203198.022305068\r
2021-07-15,4281229.019072916\r
2021-07-17,4356619.1229536785\r
2021-07-20,4278097.959064024\r
2021-07-22,4082495.5216236324\r
2021-07-27,3707144.4601925835\r
2021-07-30,3627137.531041101\r
2021-08-01,3418294.446774288\r
2021-08-04,3352057.405060418\r
2021-08-06,2916534.1203535115\r
2021-08-11,2871599.447884389\r
2021-08-14,2596780.3650508747\r
2021-08-16,2087155.341567365\r
2021-08-19,1941191.2593468034\r
2021-08-21,1941191.2593468034\r
2021-08-24,1941191.2593468034\r
2021-08-26,1781830.7589337605\r
2021-08-29,1651861.0766473187\r
2021-08-31,1474813.5601789856\r
2021-09-03,1486607.7786640613\r
2021-09-05,1297875.3325578135\r
2021-09-08,1297875.3325578135\r
2021-09-23,1038985.1465289794\r
2021-09-30,1038985.1465289794\r
2021-10-03,1052244.3537740032\r
2021-10-05,1640725.959513255\r
2021-10-08,1640725.959513255\r
2021-10-10,1337989.3610276156\r
2021-10-13,1483387.851565105\r
2021-10-15,1567910.9532045582\r
2021-10-18,1549347.1157164017\r
2021-10-20,1539551.1620737198\r
2021-10-23,1548257.582440868\r
2021-11-04,1715842.0931026908\r
2021-11-19,1862647.750310927\r
2021-11-22,1862647.750310927\r
2021-11-24,1862647.750310927\r
2021-11-27,1862647.750310927\r
2021-12-07,2583691.831362406\r
2021-12-09,2583691.831362406\r
2021-12-12,2767723.605417873\r
2021-12-14,2586307.6509220744\r
2021-12-17,2711641.4573376584\r
2021-12-19,2750321.1104722377\r
2021-12-24,2667864.864933891\r
2021-12-29,2739631.3530161944\r
2022-01-08,3291984.856200328\r
2022-01-11,3415404.9722427228\r
2022-01-13,4220320.900755327\r
2022-01-16,3831326.7431175057\r
2022-01-18,3795268.7484069923\r
2022-01-21,3819293.902850853\r
2022-01-23,3730969.5712605068\r
2022-01-26,3681889.97824975\r
2022-01-28,3708631.9345177524\r
2022-01-31,3698224.084334676\r
2022-02-02,3772794.312915329\r
2022-02-05,3855432.888863493\r
2022-02-07,3998141.327959098\r
2022-02-10,4158175.0344170574\r
2022-02-12,4296896.5684993435\r
2022-02-15,4282794.8554082075\r
2022-02-17,4320436.135920311\r
2022-02-20,4314154.434012039\r
2022-02-22,4350318.700971692\r
2022-02-25,4228112.231230231\r
2022-02-27,4228112.231230231\r
2022-03-02,4306306.89150571\r
2022-03-07,4334581.878443507\r
2022-03-09,4315724.553894296\r
2022-03-14,4223436.817934525\r
2022-03-22,4418218.409839619\r
2022-03-24,4448339.905544095\r
2022-03-29,4448339.905544095\r
2022-04-03,4339300.789524751\r
2022-04-11,4429307.310699925\r
2022-04-13,4429307.310699925\r
2022-04-16,4521567.320629732\r
2022-04-18,4429307.310699925\r
2022-04-23,4413469.059002069\r
2022-04-26,4437234.021547039\r
2022-04-28,4443579.028659298\r
2022-05-01,4453102.6002804935\r
2022-05-08,4473761.936829391\r
2022-05-11,4550337.4355543265\r
2022-05-13,4600038.312999784\r
2022-05-16,4437234.021547039\r
2022-05-18,4472171.5465963\r
2022-05-21,4443579.028659298\r
2022-05-23,4426138.041839874\r
2022-05-26,4480125.514093504\r
2022-05-28,4435648.2750380505\r
2022-05-31,4616111.893321206\r
2022-06-02,4511991.751353942\r
2022-06-07,4449927.268500269\r
2022-06-10,4381853.308424362\r
2022-06-12,4440406.120929319\r
2022-06-15,4462633.4410778275\r
2022-06-17,4380274.649508708\r
2022-06-20,4380274.649508708\r
2022-06-25,4440406.120929319\r
2022-06-27,4370806.957198259\r
2022-07-02,4156625.603445228\r
2022-07-05,4200087.439642969\r
2022-07-07,3956961.3958765953\r
2022-07-10,3988977.095777307\r
2022-07-12,3853924.6754444833\r
2022-07-15,3656697.1222401136\r
2022-07-17,3489358.235882926\r
2022-07-20,3383678.319831239\r
2022-07-22,3168786.809403409\r
2022-07-25,3032031.0213688086\r
2022-07-27,3036185.436726328\r
2022-07-30,2778452.277112065\r
2022-08-01,2557585.608593901\r
2022-08-04,2274229.6408590996\r
2022-08-06,1998169.151871031\r
2022-08-09,1810547.1260364265\r
2022-08-11,1731689.007006923\r
2022-08-14,1663023.027432417\r
2022-08-16,1551527.0021468007\r
2022-08-19,1553707.981382486\r
2022-08-21,1487681.6409140762\r
2022-08-24,1439632.4631216654\r
2022-08-26,1395296.4353909984\r
2022-08-29,1468394.4825445642\r
2022-09-05,1487681.6409140762\r
2022-09-10,1399497.5796095068\r
2022-09-13,1267315.8047972438\r
2022-09-18,1157507.4745677726\r
2022-09-20,1197026.7185509498\r
2022-09-23,1152600.9036129052\r
2022-10-05,1033321.0059089982\r
2022-10-08,1046554.4945969342\r
2022-10-10,1046554.4945969342\r
2022-10-13,1044660.3208620198\r
2022-10-15,1174245.3278197849\r
2022-10-18,1273406.921916256\r
2022-10-20,1282563.1089650216\r
2022-10-23,1275439.6079815975\r
2022-10-25,1378536.9604594563\r
2022-10-28,1382720.0560912108\r
2022-10-30,1231992.4835793327\r
2022-11-02,1256175.8373495305\r
2022-11-04,1232996.7732381923\r
2022-11-14,1499512.3629558953\r
2022-11-17,1497358.8373929968\r
2022-11-24,1380627.9432789758\r
2022-11-27,1320450.2320940008\r
2022-12-02,1390051.3425510738\r
2022-12-04,1343163.6200990102\r
2022-12-07,1530862.265495228\r
2022-12-09,1479098.490094011\r
2022-12-22,1917624.406067232\r
2022-12-27,2093217.672229463\r
2022-12-29,2073840.3032742108\r
2023-01-18,2719628.108278661\r
2023-01-21,2853966.3169001257\r
2023-01-26,2853966.3169001257\r
2023-01-31,2980960.3127273987\r
2023-02-02,3069493.709684513\r
2023-02-05,3069493.709684513\r
2023-02-10,3069493.709684513\r
2023-02-12,3482082.957051399\r
2023-02-15,3680406.3384522675\r
2023-02-17,3680406.3384522675\r
2023-02-20,3710119.621639189\r
2023-02-22,3745887.887946813\r
2023-03-07,3870526.593399549\r
2023-03-09,3970671.1431229995\r
2023-03-12,3899262.5241194656\r
2023-03-14,3949352.179285833\r
2023-03-17,3949352.179285833\r
2023-03-22,3999669.4290286005\r
2023-03-24,3955439.1347101633\r
2023-03-27,4085574.76939618\r
2023-04-01,4085574.76939618\r
2023-04-03,4085574.76939618\r
2023-04-06,4125680.2629037234\r
2023-04-08,3978294.9739285605\r
2023-04-16,4047143.7344109965\r
2023-04-21,3967623.071336923\r
2023-04-23,3967623.071336923\r
2023-04-26,4102525.425779842\r
2023-04-28,4212534.696635892\r
2023-05-03,4201642.628316431\r
2023-05-06,4128771.084820873\r
2023-05-11,4156625.603445228\r
2023-05-23,4218763.249736184\r
2023-05-26,4314154.434012039\r
2023-05-28,4200087.439642969\r
2023-06-02,4131862.73212915\r
2023-06-05,4047143.7344109965\r
2023-06-07,4007313.057460624\r
2023-06-10,4042540.7196504204\r
2023-06-12,4042540.7196504204\r
2023-06-15,4245271.189695735\r
2023-06-17,4281229.019072916\r
2023-06-20,4273402.901026301\r
2023-06-22,4274967.716080212\r
2023-06-25,4240589.016045756\r
2023-06-27,4240589.016045756\r
2023-06-30,4192314.5767663866\r
2023-07-02,4245271.189695735\r
2023-07-05,4331436.955134836\r
2023-07-07,4248393.662371273\r
2023-07-10,4281229.019072916\r
2023-07-12,3922002.28192645\r
2023-07-15,3337719.2935830317\r
2023-07-17,3274892.525343265\r
2023-07-20,2690384.7109685317\r
2023-07-22,2856676.584645176\r
`;export{n as default};
