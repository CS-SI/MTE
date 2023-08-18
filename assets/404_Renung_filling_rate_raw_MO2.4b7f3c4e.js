const n=`date,value\r
2017-01-19,62.374688543812226\r
2017-01-26,72.53050963632347\r
2017-01-29,66.33605860587728\r
2017-02-15,80.79276597362745\r
2017-02-18,84.12054897812533\r
2017-02-25,80.79276597362745\r
2017-03-10,85.46730448150753\r
2017-03-17,85.46730448150753\r
2017-03-30,87.36771389635376\r
2017-04-06,93.87445875747822\r
2017-04-09,90.80450455062457\r
2017-04-19,89.76766739664988\r
2017-04-29,82.51622746384558\r
2017-05-09,95.14258950534683\r
2017-05-16,82.58281702020092\r
2017-05-19,91.4984841513875\r
2017-05-26,87.98225512792875\r
2017-06-05,90.73522773122866\r
2017-06-18,93.80421506983657\r
2017-06-25,93.80421506983657\r
2017-06-28,93.80421506983657\r
2017-07-05,93.94472435745396\r
2017-07-18,92.05525240219052\r
2017-08-02,82.25009314726266\r
2017-08-04,92.96300097576881\r
2017-08-07,92.96300097576881\r
2017-08-12,92.12494738993892\r
2017-08-14,91.2900590807804\r
2017-08-17,85.39975506672543\r
2017-08-22,86.68699711339217\r
2017-08-24,86.61904751400067\r
2017-08-27,72.78306785101222\r
2017-08-29,72.46742725894566\r
2017-09-01,73.73341706915596\r
2017-09-03,70.77286153660543\r
2017-09-06,70.77286153660543\r
2017-09-08,70.77286153660543\r
2017-09-21,70.96032099836668\r
2017-09-23,70.96032099836668\r
2017-09-26,70.96032099836668\r
2017-09-28,70.96032099836668\r
2017-10-08,68.17017504239062\r
2017-10-11,67.37283194323798\r
2017-10-13,66.76215369135376\r
2017-10-16,67.0061468900424\r
2017-10-18,67.0061468900424\r
2017-10-23,67.18938516524499\r
2017-10-26,65.66877949990923\r
2017-10-28,67.31165985610845\r
2017-10-31,65.78989381373952\r
2017-11-05,65.54775820781353\r
2017-11-07,68.84790095334634\r
2017-11-17,65.00431430432222\r
2017-11-20,65.00431430432222\r
2017-11-22,68.60113190227439\r
2017-11-25,68.60113190227439\r
2017-11-27,64.28265803901736\r
2017-11-30,63.624091925549585\r
2017-12-05,62.55254223991048\r
2017-12-07,62.55254223991048\r
2017-12-12,67.98582584324382\r
2017-12-15,67.98582584324382\r
2017-12-20,74.30609092785846\r
2017-12-25,73.60640705185095\r
2017-12-27,73.60640705185095\r
2018-03-02,90.45834084929815\r
2018-03-07,90.45834084929815\r
2018-03-15,96.34677319754186\r
2018-03-17,96.34677319754186\r
2018-03-22,99.564719372143\r
2018-03-30,98.12908214828143\r
2018-04-06,86.82296292381608\r
2018-04-09,86.82296292381608\r
2018-04-19,89.97463776134487\r
2018-04-21,99.63672924388675\r
2018-04-24,91.91592838098177\r
2018-04-26,91.91592838098177\r
2018-05-06,87.57236149357178\r
2018-05-11,100.0\r
2018-05-21,100.0\r
2018-05-24,96.98683572137605\r
2018-06-03,91.0818321398671\r
2018-06-20,94.6485849358892\r
2018-06-23,96.4888566586252\r
2018-06-25,92.40394712395225\r
2018-07-08,98.12908214828143\r
2018-07-10,91.70710727648095\r
2018-07-13,92.12494738993892\r
2018-07-15,92.12494738993892\r
2018-07-18,92.12494738993892\r
2018-07-23,98.8458145148793\r
2018-07-25,95.4961058694702\r
2018-07-30,89.90562556835329\r
2018-08-02,91.2900590807804\r
2018-08-04,92.96300097576881\r
2018-08-12,89.76766739664988\r
2018-08-19,92.61342761921408\r
2018-08-22,87.57236149357178\r
2018-08-27,86.55112012235416\r
2018-09-01,83.9193049844963\r
2018-09-03,80.92480141564964\r
2018-09-08,84.59089922616424\r
2018-09-11,88.87309271443654\r
2018-09-16,89.62979752946609\r
2018-09-18,89.62979752946609\r
2018-09-23,92.89304239753878\r
2018-09-26,86.27963269125695\r
2018-09-28,90.32002968498396\r
2018-10-03,90.66597294859584\r
2018-10-06,85.39975506672543\r
2018-10-13,85.26472302075148\r
2018-11-22,69.09503917436555\r
2018-11-27,69.09503917436555\r
2019-02-03,94.15565260410001\r
2019-02-13,94.93074202654547\r
2019-02-15,91.63754423336624\r
2019-02-18,91.63754423336624\r
2019-02-20,89.69872142358123\r
2019-02-23,91.4984841513875\r
2019-02-25,90.8738034039838\r
2019-02-28,90.8738034039838\r
2019-03-12,92.05525240219052\r
2019-03-20,84.12054897812533\r
2019-03-22,88.73579737864183\r
2019-03-25,88.73579737864183\r
2019-03-27,88.59859051749498\r
2019-03-30,90.66597294859584\r
2019-04-01,90.66597294859584\r
2019-04-09,94.01501186703445\r
2019-04-16,84.59089922616424\r
2019-04-19,84.59089922616424\r
2019-05-01,91.2206280823479\r
2019-05-06,90.9431242885081\r
2019-05-09,90.9431242885081\r
2019-05-11,90.9431242885081\r
2019-05-14,90.52752950482676\r
2019-05-16,90.52752950482676\r
2019-05-29,99.92498566566364\r
2019-06-13,100.0\r
2019-06-18,100.0\r
2019-06-23,100.0\r
2019-06-25,100.0\r
2019-06-28,97.12931163663508\r
2019-07-05,90.32002968498396\r
2019-07-08,91.63754423336624\r
2019-07-10,90.45834084929815\r
2019-07-13,93.31312303128568\r
2019-07-15,92.68329837809787\r
2019-07-20,92.68329837809787\r
2019-07-23,91.91592838098177\r
2019-07-25,95.56687470291513\r
2019-07-28,97.48588267430112\r
2019-08-02,88.32444231035352\r
2019-08-04,92.82310577001502\r
2019-08-09,92.82310577001502\r
2019-08-14,93.94472435745396\r
2019-08-17,91.42898711808647\r
2019-08-22,86.95901753045462\r
2019-08-24,90.25090718181566\r
2019-08-29,88.53002027203708\r
2019-09-03,86.41533197390049\r
2019-09-06,86.41533197390049\r
2019-09-08,86.27963269125695\r
2019-09-11,80.06817806688046\r
2019-09-13,85.94077342523366\r
2019-09-16,83.4505171840174\r
2019-09-18,81.25528302745288\r
2019-09-21,81.25528302745288\r
2019-09-26,82.71606328451243\r
2019-10-08,78.62717401519356\r
2019-10-11,79.6740955594784\r
2019-10-13,76.16391430926001\r
2019-10-26,80.13393725415703\r
2019-12-05,90.32002968498396\r
2019-12-07,90.32002968498396\r
2019-12-10,90.38917424174794\r
2019-12-15,82.11716037643312\r
2019-12-17,82.11716037643312\r
2019-12-20,82.11716037643312\r
2019-12-25,82.18361556038101\r
2019-12-27,85.73772468425865\r
2019-12-30,81.65260162462647\r
2020-01-09,83.85226829957064\r
2020-01-11,86.48321494135332\r
2020-01-14,85.39975506672543\r
2020-01-16,85.39975506672543\r
2020-01-19,85.87306827085571\r
2020-01-29,87.84553528552665\r
2020-01-31,89.83663544584803\r
2020-02-03,80.33134978767526\r
2020-02-05,82.05072759843631\r
2020-02-10,82.05072759843631\r
2020-02-15,86.21181638187952\r
2020-02-18,79.93672719661856\r
2020-02-20,86.89097912905565\r
2020-02-23,88.05064827569456\r
2020-03-21,93.10298397334569\r
2020-03-24,93.66379344248054\r
2020-03-26,89.28550934214832\r
2020-03-31,89.28550934214832\r
2020-04-03,90.25090718181566\r
2020-04-05,89.76766739664988\r
2020-04-08,89.49201598940067\r
2020-04-10,90.18180673505412\r
2020-04-15,93.31312303128568\r
2020-04-25,98.98942177110396\r
2020-04-30,98.48717660597896\r
2020-05-05,14.027528801620118\r
2020-05-08,14.027528801620118\r
2020-05-18,94.22600582613408\r
2020-05-20,89.76766739664988\r
2020-05-25,96.63102736913486\r
2020-05-28,100.0\r
2020-05-30,97.41452490602903\r
2020-06-12,98.41551422780714\r
2020-06-14,100.0\r
2020-06-24,89.21671798115017\r
2020-07-04,89.83663544584803\r
2020-07-07,96.27576419222396\r
2020-07-09,95.77931227597561\r
2020-07-19,96.27576419222396\r
2020-07-22,95.99194640161816\r
2020-07-24,93.38321325603846\r
2020-07-27,88.32444231035352\r
2020-07-29,88.32444231035352\r
2020-08-03,88.32444231035352\r
2020-08-06,84.25482322659106\r
2020-08-08,81.71889990345133\r
2020-08-18,78.82303210237971\r
2020-08-21,78.82303210237971\r
2020-08-23,80.39719894584022\r
2020-08-31,74.62504059073419\r
2020-09-02,74.051341252547\r
2020-09-05,71.58667758721606\r
2020-09-07,71.58667758721606\r
2020-09-10,74.11499448710934\r
2020-09-12,72.34133113893142\r
2020-09-17,72.2783174029288\r
2020-09-30,69.9629269880832\r
2020-10-12,68.84790095334634\r
2020-10-30,86.34747122289977\r
2020-11-09,84.72548571527716\r
2020-11-11,85.19724039542467\r
2020-11-14,83.1831299863176\r
2020-11-21,82.05072759843631\r
2020-11-26,82.11716037643312\r
2020-11-29,81.52007235137894\r
2020-12-26,87.70890406641811\r
2021-01-03,94.6485849358892\r
2021-01-08,94.6485849358892\r
2021-01-10,94.71909139173984\r
2021-01-18,93.5936155082325\r
2021-02-24,97.41452490602903\r
2021-02-27,96.84444698080313\r
2021-03-01,95.63766538360944\r
2021-03-04,97.05806278350168\r
2021-03-09,93.17300838719531\r
2021-03-14,91.0818321398671\r
2021-03-21,94.08532128349191\r
2021-03-24,95.77931227597561\r
2021-03-29,92.89304239753878\r
2021-03-31,95.42535888596916\r
2021-04-03,94.86016993977829\r
2021-04-05,95.4961058694702\r
2021-04-08,94.78961972727325\r
2021-04-15,96.98683572137605\r
2021-04-20,99.27689689831662\r
2021-04-23,100.0\r
2021-05-03,99.06125797999556\r
2021-05-08,91.2900590807804\r
2021-05-28,95.92104652504244\r
2021-05-30,95.92104652504244\r
2021-06-07,95.92104652504244\r
2021-06-09,86.21181638187952\r
2021-06-14,95.92104652504244\r
2021-06-22,95.92104652504244\r
2021-07-17,81.38763281089012\r
2021-07-19,81.38763281089012\r
2021-07-22,92.33416422852899\r
2021-08-11,89.69872142358123\r
2021-08-23,79.73971969813527\r
2021-08-26,82.31659313406267\r
2021-08-28,82.31659313406267\r
2021-08-31,80.13393725415703\r
2021-09-05,78.82303210237971\r
2021-09-12,77.5860300269234\r
2021-09-17,75.90652662152067\r
2021-09-22,76.3571933149333\r
2021-09-25,75.90652662152067\r
2021-09-27,75.20058394966988\r
2021-09-30,73.86051833156775\r
2021-10-07,68.04725245935592\r
2021-10-12,65.06460382877911\r
2021-10-15,65.06460382877911\r
2021-10-17,62.25623668458206\r
2021-10-20,65.66877949990923\r
2021-10-27,60.081837289456374\r
2021-11-09,70.46088849412595\r
2021-11-11,71.46122277212523\r
2021-11-19,70.1494900601351\r
2021-12-14,94.71909139173984\r
2021-12-16,94.71909139173984\r
2021-12-19,95.35463375510805\r
2021-12-21,95.35463375510805\r
2022-01-15,84.92753261369226\r
2022-01-23,94.93074202654547\r
2022-01-25,88.46147215379153\r
2022-02-09,89.97463776134487\r
2022-03-09,86.89097912905565\r
2022-03-19,86.89097912905565\r
2022-03-21,89.83663544584803\r
2022-03-24,89.83663544584803\r
2022-03-26,89.83663544584803\r
2022-04-05,88.18750101002948\r
2022-04-10,88.18750101002948\r
2022-05-08,89.28550934214832\r
2022-05-10,89.28550934214832\r
2022-05-15,89.28550934214832\r
2022-05-28,89.90562556835329\r
2022-05-30,89.90562556835329\r
2022-06-17,88.94177355321047\r
2022-06-19,89.01047650210998\r
2022-06-22,89.01047650210998\r
2022-06-24,89.01047650210998\r
2022-07-02,91.56800319074152\r
2022-07-04,91.56800319074152\r
2022-07-07,93.24305474075688\r
2022-07-12,90.32002968498396\r
2022-07-14,87.57236149357178\r
2022-07-17,89.69872142358123\r
2022-07-24,87.16326588269483\r
2022-07-27,89.0792015582931\r
2022-08-01,83.78525394273608\r
2022-08-03,83.78525394273608\r
2022-08-06,81.25528302745288\r
2022-08-08,81.25528302745288\r
2022-08-11,77.39145977345035\r
2022-08-13,72.53050963632347\r
2022-08-18,68.10870219356276\r
2022-08-28,65.97173963783659\r
2022-09-05,66.33605860587728\r
2022-09-10,58.86208023040835\r
2022-09-12,58.86208023040835\r
2022-09-15,57.194831572954484\r
2022-09-20,55.60406298485378\r
2022-09-22,55.209296186751054\r
2022-10-02,54.08785879329652\r
2022-10-05,48.67888013732839\r
2022-10-07,51.49035776843171\r
2022-10-12,51.87384001312704\r
2022-10-15,55.37833841705315\r
2022-10-17,57.194831572954484\r
2022-10-22,57.08058550088877\r
2022-11-06,55.04046938869348\r
2022-11-11,55.04046938869348\r
2022-11-16,58.57319993846324\r
2022-12-11,61.783368063642506\r
2022-12-14,61.783368063642506\r
2022-12-21,69.28063497544811\r
2022-12-24,68.97142393138617\r
2023-01-03,70.71042097972861\r
2023-01-10,76.16391430926001\r
2023-01-18,75.71372420749549\r
2023-01-20,82.18361556038101\r
2023-02-02,95.77931227597561\r
2023-02-04,97.62866353336608\r
2023-02-09,93.80421506983657\r
2023-02-12,96.55993110903879\r
2023-02-14,93.10298397334569\r
2023-02-17,95.07195181203552\r
2023-02-19,95.07195181203552\r
2023-02-24,96.84444698080313\r
2023-03-01,98.63056657382539\r
2023-03-09,99.20499554622266\r
2023-04-05,98.27225469613819\r
2023-04-08,98.27225469613819\r
2023-04-10,98.27225469613819\r
2023-04-18,85.8053853562242\r
2023-04-20,85.73772468425865\r
2023-05-05,85.39975506672543\r
2023-05-10,85.39975506672543\r
2023-05-28,89.28550934214832\r
2023-05-30,90.18180673505412\r
2023-06-02,93.31312303128568\r
2023-06-04,93.31312303128568\r
2023-06-09,91.35951209362226\r
2023-06-24,98.27225469613819\r
2023-06-27,98.27225469613819\r
2023-07-07,91.91592838098177\r
2023-07-09,92.82310577001502\r
2023-07-14,85.39975506672543\r
2023-07-17,86.89097912905565\r
2023-07-22,85.33222791216286\r
`;export{n as default};
