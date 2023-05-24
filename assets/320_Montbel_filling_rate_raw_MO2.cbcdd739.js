const n=`date,value\r
2017-01-03,25.54747747127401\r
2017-01-13,27.020242729161147\r
2017-02-15,42.09681133518524\r
2017-02-22,43.55571195158289\r
2017-02-25,41.24367225948776\r
2017-03-07,49.085053574773305\r
2017-03-14,57.09692074171341\r
2017-03-17,58.33418860838013\r
2017-03-27,59.57519367056767\r
2017-04-06,80.60668900467724\r
2017-04-23,83.33758429534817\r
2017-05-16,87.05118787012228\r
2017-05-23,88.73180320051455\r
2017-05-26,91.30325742679723\r
2017-06-02,94.00982907333241\r
2017-06-05,93.66973195689977\r
2017-06-12,94.4734323984182\r
2017-06-15,93.12696447523848\r
2017-06-22,94.3687865586265\r
2017-06-25,92.03308912218591\r
2017-07-02,92.37895066880263\r
2017-07-05,75.1435091822409\r
2017-07-07,75.1435091822409\r
2017-07-10,75.1435091822409\r
2017-07-12,75.1435091822409\r
2017-07-17,82.98504176160728\r
2017-07-22,82.98504176160728\r
2017-07-25,82.9977701675989\r
2017-07-27,82.43026533662533\r
2017-07-30,75.80445793159744\r
2017-08-04,81.72595190146347\r
2017-08-06,82.32462089972718\r
2017-08-11,77.99881934797787\r
2017-08-14,80.71531367142082\r
2017-08-19,71.01326092033065\r
2017-08-21,71.01326092033065\r
2017-08-24,65.26074334501025\r
2017-08-26,68.98203436400647\r
2017-08-29,78.40966727042678\r
2017-09-05,64.46621395078978\r
2017-09-08,67.11876815233433\r
2017-09-10,69.33952606447569\r
2017-09-13,37.52677433112226\r
2017-09-20,36.815446322195484\r
2017-09-23,34.47462178416353\r
2017-09-28,34.916479839514345\r
2017-10-03,36.18723263006349\r
2017-10-05,28.668880091596726\r
2017-10-08,31.874674729333435\r
2017-10-10,27.84499908172774\r
2017-10-13,30.68403778955251\r
2017-10-15,27.39135114212901\r
2017-10-18,29.877863145036578\r
2017-10-20,26.693178635785742\r
2017-10-23,30.363126948211328\r
2017-10-25,27.442592957472094\r
2017-10-28,25.010298128571083\r
2017-10-30,24.075860308936843\r
2017-11-07,27.20313493371448\r
2017-11-12,27.20313493371448\r
2017-11-14,28.045034079016762\r
2017-11-17,27.783966729502545\r
2017-11-19,26.560209236561523\r
2017-11-22,25.201279445946874\r
2017-11-24,25.125681179297672\r
2017-11-27,27.61299419957312\r
2017-11-29,24.293481985512138\r
2017-12-07,28.85772320956236\r
2017-12-24,30.318837099347213\r
2017-12-27,27.737068105838798\r
2018-01-01,39.86748394546111\r
2018-01-03,39.86748394546111\r
2018-01-11,39.86748394546111\r
2018-01-18,59.13993906479719\r
2018-01-21,59.13993906479719\r
2018-01-23,65.43221832642033\r
2018-01-28,71.79546288784377\r
2018-01-31,75.8812338721701\r
2018-02-02,76.29817283456902\r
2018-02-07,78.10552738330064\r
2018-02-25,96.38620442905402\r
2018-02-27,96.75004258596849\r
2018-03-02,96.67168562021189\r
2018-03-07,96.67168562021189\r
2018-03-09,98.93466985094518\r
2018-03-19,99.5750745034791\r
2018-03-27,99.5750745034791\r
2018-04-01,99.25692977107934\r
2018-04-06,99.26627910098976\r
2018-04-11,99.26627910098976\r
2018-04-21,100.0\r
2018-04-26,100.0\r
2018-05-11,99.65001220769526\r
2018-05-18,99.65938156703696\r
2018-05-21,99.88907987388717\r
2018-06-02,99.77653880445644\r
2018-06-20,99.06537357984497\r
2018-06-22,99.06537357984497\r
2018-06-25,100.0\r
2018-06-27,100.0\r
2018-07-02,99.56102708217738\r
2018-07-05,99.45804544757388\r
2018-07-07,99.87969882768064\r
2018-07-10,99.75778863797228\r
2018-07-12,99.90784339749077\r
2018-07-15,99.77653880445644\r
2018-07-17,99.89377057588855\r
2018-07-20,99.65001220769526\r
2018-07-25,99.49548663796473\r
2018-07-27,100.0\r
2018-07-30,99.7952908790113\r
2018-08-01,99.98760966240093\r
2018-08-04,99.87969882768064\r
2018-08-06,99.80935618711672\r
2018-08-11,99.59848925701019\r
2018-08-14,99.81404486166662\r
2018-08-16,100.0\r
2018-08-19,99.87969882768064\r
2018-08-21,99.28497919125914\r
2018-08-24,99.7952908790113\r
2018-08-26,99.50016732327809\r
2018-08-29,99.50016732327809\r
2018-08-31,99.28965451183929\r
2018-09-03,98.2686040569134\r
2018-09-05,98.65024591637801\r
2018-09-08,98.00378826847927\r
2018-09-10,98.00378826847927\r
2018-09-13,97.95736925156723\r
2018-09-20,98.08737250670713\r
2018-09-23,98.1617019985763\r
2018-09-25,97.96665210235393\r
2018-09-28,98.52915079861991\r
2018-09-30,98.52449490239925\r
2018-10-03,98.14311676744778\r
2018-10-05,97.61423857300169\r
2018-10-13,92.36096653682151\r
2018-10-20,90.79914662707576\r
2018-10-23,90.12787018708393\r
2018-10-25,90.45205779024683\r
2018-10-30,90.45205779024683\r
2018-11-04,88.96513016325831\r
2018-11-12,85.59491311965019\r
2018-11-14,85.59491311965019\r
2018-11-24,88.9431040116923\r
2018-11-27,87.74932967488684\r
2018-12-02,87.98125504913858\r
2018-12-04,87.96373968257541\r
2018-12-07,87.28211290290018\r
2018-12-17,86.08318769595948\r
2018-12-27,88.16089643239101\r
2018-12-29,88.10391548832412\r
2019-01-03,76.19280938109452\r
2019-01-06,78.43024034723538\r
2019-01-11,77.79383358360195\r
2019-01-16,78.09321088628116\r
2019-01-23,75.18774306458043\r
2019-01-26,75.18774306458043\r
2019-02-12,83.98957318169145\r
2019-02-15,94.71025449698777\r
2019-02-17,92.4733984673642\r
2019-02-20,93.24893825924102\r
2019-02-22,92.9644672248871\r
2019-02-25,94.3687865586265\r
2019-02-27,92.97349081875824\r
2019-03-02,93.4388470928643\r
2019-03-07,95.17115338664546\r
2019-03-09,94.92458148715676\r
2019-03-12,95.23056501773675\r
2019-03-14,96.13793196019394\r
2019-03-17,96.3172050754736\r
2019-03-19,96.3172050754736\r
2019-03-22,96.92531775699672\r
2019-03-24,96.51967904723067\r
2019-03-27,97.12848257509219\r
2019-03-29,97.41977871701741\r
2019-04-01,97.41977871701741\r
2019-04-08,97.40589676144845\r
2019-04-13,99.13543187070584\r
2019-04-28,99.08872336379505\r
2019-05-01,98.62229374096925\r
2019-05-06,98.58503084554701\r
2019-05-13,99.17280725794181\r
2019-05-16,99.08405316863484\r
2019-05-23,99.69686377415296\r
2019-05-28,99.69686377415296\r
2019-05-31,99.99699619504793\r
2019-06-02,99.92660882937318\r
2019-06-07,99.92660882937318\r
2019-06-12,100.0\r
2019-06-17,98.83670336813194\r
2019-06-22,98.89734308942417\r
2019-06-25,98.89734308942417\r
2019-06-27,99.05136513968313\r
2019-06-30,99.0933936781413\r
2019-07-02,99.0933936781413\r
2019-07-05,99.61253953996628\r
2019-07-07,99.66875140334986\r
2019-07-10,99.47208499978659\r
2019-07-12,99.6265908960657\r
2019-07-15,99.77185108395491\r
2019-07-17,99.45804544757388\r
2019-07-20,99.45804544757388\r
2019-07-22,99.17280725794181\r
2019-07-25,99.00467808592275\r
2019-08-01,98.52449490239925\r
2019-08-04,98.46863343972717\r
2019-08-06,98.46863343972717\r
2019-08-09,98.46397909215497\r
2019-08-11,98.02235920938143\r
2019-08-14,97.71618229808104\r
2019-08-16,97.09152638405362\r
2019-08-21,96.88840344568868\r
2019-08-24,95.93589219952781\r
2019-08-26,95.51418901115319\r
2019-08-29,95.798269761925\r
2019-08-31,92.66245085114349\r
2019-09-03,92.61291692448196\r
2019-09-05,92.55439531839174\r
2019-09-08,91.18266876061575\r
2019-09-13,87.54830462171805\r
2019-09-15,83.2823133406016\r
2019-09-18,85.6639579540355\r
2019-09-20,73.1517106103245\r
2019-09-28,73.5525221415896\r
2019-09-30,73.5525221415896\r
2019-10-03,69.94143708549981\r
2019-10-05,69.94143708549981\r
2019-10-08,64.65879253250316\r
2019-10-10,64.65508616494938\r
2019-10-13,62.45926261096765\r
2019-10-15,62.46653806890231\r
2019-10-25,53.59826708069069\r
2019-10-30,40.48622831847296\r
2019-11-02,40.48622831847296\r
2019-11-04,40.32818798162877\r
2019-11-09,40.32818798162877\r
2019-11-12,44.002846642056745\r
2019-11-17,43.70248337814463\r
2019-11-19,55.648222366661\r
2019-11-24,55.62772148073839\r
2019-11-27,60.28661587016464\r
2019-11-29,60.28661587016464\r
2019-12-02,60.28661587016464\r
2019-12-07,59.766827055147346\r
2019-12-09,59.47950192946519\r
2019-12-17,80.32296815316464\r
2019-12-22,80.32296815316464\r
2019-12-24,81.78066125130903\r
2019-12-27,89.56095274115712\r
2019-12-29,89.31353533849219\r
2020-01-06,88.66143006658737\r
2020-01-08,88.50320104645138\r
2020-01-11,91.72375792308233\r
2020-01-16,89.77331980215033\r
2020-01-28,87.02506628549838\r
2020-01-31,90.91946047793557\r
2020-02-15,92.34747968201525\r
2020-02-17,94.99303894025616\r
2020-02-20,96.10577387608885\r
2020-02-22,94.6829124853467\r
2020-02-27,93.71957110423251\r
2020-03-01,94.67835589899003\r
2020-03-08,94.00982907333241\r
2020-03-11,96.44142317575466\r
2020-03-13,96.44142317575466\r
2020-03-18,98.245359119534\r
2020-03-21,97.8506506999485\r
2020-03-28,98.1477628965918\r
2020-03-31,98.1849362170868\r
2020-04-05,98.4127891309116\r
2020-04-07,96.6855108221991\r
2020-04-10,98.94400273302266\r
2020-04-15,99.00001003603145\r
2020-04-25,99.48612562501717\r
2020-05-07,97.37813606375308\r
2020-05-17,97.58644573828661\r
2020-05-20,99.45336583528254\r
2020-05-22,98.57105922551514\r
2020-05-25,99.331737761389\r
2020-05-27,99.28030398988457\r
2020-05-30,99.2943299516255\r
2020-06-06,99.30368118881793\r
2020-06-24,99.28965451183929\r
2020-06-26,99.28965451183929\r
2020-07-01,99.70154958664692\r
2020-07-04,99.3504445273017\r
2020-07-06,99.481445297382\r
2020-07-09,99.43464857833597\r
2020-07-14,99.48612562501717\r
2020-07-16,99.48612562501717\r
2020-07-19,99.59380606783232\r
2020-07-21,99.49548663796473\r
2020-07-24,99.481445297382\r
2020-07-26,99.51889125680606\r
2020-07-29,99.52357253825906\r
2020-07-31,98.82271244619334\r
2020-08-03,98.7807461149384\r
2020-08-05,98.05950680701442\r
2020-08-08,97.9295235569343\r
2020-08-10,97.1331026344163\r
2020-08-13,97.11000352767822\r
2020-08-15,96.75926331253721\r
2020-08-20,94.75583401565592\r
2020-08-23,92.74353730285594\r
2020-08-25,91.31666149441153\r
2020-08-30,84.20751428653928\r
2020-09-02,85.1941867611246\r
2020-09-04,75.15155065793357\r
2020-09-07,75.80849772143355\r
2020-09-12,70.30936586833646\r
2020-09-14,63.8056765575371\r
2020-09-17,66.91092584223706\r
2020-09-19,66.83543335090677\r
2020-09-24,65.63008943694481\r
2020-09-27,65.63008943694481\r
2020-09-29,64.77003705547506\r
2020-10-17,64.75519846976783\r
2020-10-24,65.38373330732189\r
2020-11-01,64.32568012398643\r
2020-11-08,71.7209542297111\r
2020-11-11,76.27385119395228\r
2020-11-16,76.27385119395228\r
2020-11-18,74.5497326652196\r
2020-11-21,74.00634827418136\r
2020-11-23,74.17792095729394\r
2020-12-03,69.94530457702024\r
2020-12-18,75.6227880288572\r
2020-12-21,75.6227880288572\r
2020-12-26,73.11209081340697\r
2020-12-28,73.11209081340697\r
2021-02-06,96.6855108221991\r
2021-02-11,98.4965620267807\r
2021-02-14,98.4965620267807\r
2021-02-19,98.55243206668362\r
2021-02-24,99.29900551061822\r
2021-03-01,97.17006739265916\r
2021-03-13,98.62695213901948\r
2021-03-16,98.64558692262374\r
2021-03-21,98.63626929253999\r
2021-03-23,99.51421009458197\r
2021-03-28,99.57039191047802\r
2021-03-31,99.47208499978659\r
2021-04-02,99.74841427024747\r
2021-04-05,99.6406433253211\r
2021-04-07,99.59848925701019\r
2021-04-12,99.64532770688744\r
2021-04-15,99.72029402909729\r
2021-04-20,99.7952908790113\r
2021-04-22,99.86093816643955\r
2021-05-02,98.21746912502579\r
2021-05-12,99.9782236068552\r
2021-05-17,99.9782236068552\r
2021-05-20,99.96883802840708\r
2021-05-25,99.23355853234403\r
2021-05-27,100.0\r
2021-05-30,100.0\r
2021-06-06,100.0\r
2021-06-09,98.91133973122979\r
2021-06-11,98.91133973122979\r
2021-06-14,99.28497919125914\r
2021-06-16,99.0933936781413\r
2021-06-19,99.69686377415296\r
2021-06-21,99.82342256854125\r
2021-06-26,99.30368118881793\r
2021-06-29,99.18215229668567\r
2021-07-01,99.99699619504793\r
2021-07-11,99.76247600071333\r
2021-07-14,99.83280075245213\r
2021-07-16,99.5750745034791\r
2021-07-19,99.60317256542484\r
2021-07-21,99.66406642557175\r
2021-07-26,99.40657626952122\r
2021-07-29,99.41593322891705\r
2021-07-31,99.56102708217738\r
2021-08-10,96.87917605751399\r
2021-08-13,96.87917605751399\r
2021-08-15,96.87917605751399\r
2021-08-18,96.87917605751399\r
2021-08-20,96.96223968226025\r
2021-08-23,82.51906335815451\r
2021-08-25,82.5994490337574\r
2021-08-28,79.09425587439067\r
2021-08-30,78.70207887608552\r
2021-09-04,73.31427329552508\r
2021-09-22,64.44771316993076\r
2021-09-27,59.6922633636513\r
2021-09-29,59.6922633636513\r
2021-10-02,59.69581287277867\r
2021-10-12,50.18029510520089\r
2021-10-14,45.34380782621813\r
2021-10-17,45.91462458959398\r
2021-10-19,44.41615340226126\r
2021-10-22,44.41615340226126\r
2021-10-24,42.77843160343871\r
2021-10-27,41.81528357565022\r
2021-11-06,39.253895936050434\r
2021-12-16,58.86481917169607\r
2021-12-18,61.034940569231686\r
2021-12-21,58.836641018400414\r
2021-12-23,59.083447584157234\r
2021-12-26,59.083447584157234\r
2022-01-12,86.10915582924554\r
2022-01-15,89.63613492916271\r
2022-01-17,89.63613492916271\r
2022-01-20,89.63613492916271\r
2022-01-22,89.24291271814873\r
2022-01-25,88.40219039865622\r
2022-01-27,93.40718109216526\r
2022-01-30,93.83742979059974\r
2022-02-01,93.57462435345163\r
2022-02-06,95.17572279937272\r
2022-02-09,95.18943175028728\r
2022-03-01,96.97147135328488\r
2022-03-03,97.03610637561565\r
2022-03-08,97.5308729245501\r
2022-03-23,98.10595202154309\r
2022-03-26,98.10595202154309\r
2022-04-05,99.65001220769526\r
2022-04-10,99.65001220769526\r
2022-04-17,99.53293545885343\r
2022-04-22,99.7671634827074\r
2022-04-25,99.7671634827074\r
2022-05-17,99.81404486166662\r
2022-05-20,99.81404486166662\r
2022-05-22,99.98760966240093\r
2022-05-27,99.84686892276959\r
2022-05-30,99.65938156703696\r
2022-06-01,99.89846139715596\r
2022-06-04,99.99699619504793\r
2022-06-06,99.96414541809341\r
2022-06-09,100.0\r
2022-06-11,100.0\r
2022-06-14,99.93130048551585\r
2022-06-16,99.93130048551585\r
2022-06-29,95.94048145648043\r
2022-07-01,96.07362161731514\r
2022-07-04,96.16550066889468\r
2022-07-09,96.16550066889468\r
2022-07-11,99.60785599307671\r
2022-07-14,99.47676508897197\r
2022-07-16,99.36447585346176\r
2022-07-19,99.41593322891705\r
2022-07-21,99.1541186107834\r
2022-07-24,98.29650191220315\r
2022-07-26,98.38952573148345\r
2022-07-31,91.87162857714333\r
2022-08-03,85.81941905390596\r
2022-08-05,87.1470033316812\r
2022-08-08,80.56910661213448\r
2022-08-10,80.631749205356\r
2022-08-13,68.63702711615844\r
2022-08-15,69.30488636218654\r
2022-08-20,60.54742442222327\r
2022-08-23,62.95138606609518\r
2022-08-28,60.49735909681322\r
2022-08-30,60.49735909681322\r
2022-09-02,69.61698112379125\r
2022-09-04,64.33676886234603\r
2022-09-12,33.98346068192449\r
2022-09-22,61.463254275327536\r
2022-09-27,61.463254275327536\r
2022-10-02,61.463254275327536\r
2022-10-04,21.82995917158618\r
2022-10-09,21.879400769070656\r
2022-10-12,21.879400769070656\r
2022-10-22,56.49917229369428\r
2022-11-01,61.600368401305104\r
2022-11-06,51.658808901685106\r
2022-11-08,51.658808901685106\r
2022-11-11,56.50261770072959\r
2022-11-13,13.386659804110353\r
2022-11-16,11.636322970958354\r
2022-11-18,11.636322970958354\r
2022-11-23,11.842321057103714\r
2023-02-01,20.533819504895767\r
2023-02-04,20.533819504895767\r
2023-02-06,20.537803090838597\r
2023-02-09,20.537803090838597\r
2023-02-11,22.590530159062197\r
2023-02-14,35.428251773922824\r
2023-02-16,23.706182691227294\r
2023-02-19,23.226609071439093\r
2023-02-24,30.164098259093613\r
2023-03-01,65.31663232973088\r
2023-03-03,65.21232717847802\r
2023-03-06,65.21232717847802\r
2023-03-16,35.07863706694713\r
2023-03-28,36.72534301535203\r
2023-04-02,36.72534301535203\r
2023-04-05,36.72534301535203\r
2023-04-07,40.02740376293886\r
2023-04-12,39.59982620814307\r
2023-04-15,39.59982620814307\r
2023-04-17,45.80076691214814\r
2023-04-20,45.48155412021667\r
2023-04-27,45.48155412021667\r
2023-05-02,61.976474258556294\r
`;export{n as default};