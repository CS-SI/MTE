const n=`date,value\r
2017-06-02,88.76298817027039\r
2017-06-12,92.72320689023195\r
2017-06-19,92.20128810585683\r
2017-06-22,94.64213165972743\r
2017-09-25,84.17167708604171\r
2017-09-27,84.17167708604171\r
2017-10-15,83.60167719474016\r
2017-10-17,83.60167719474016\r
2017-10-20,85.12579507024209\r
2017-10-30,85.06286781579475\r
2018-02-22,92.22023334468086\r
2018-02-24,92.18708084120405\r
2018-02-27,92.18708084120405\r
2018-03-04,92.18708084120405\r
2018-03-24,84.79352291626732\r
2018-04-18,97.41403566234963\r
2018-04-20,97.41403566234963\r
2018-05-08,98.79977955668348\r
2018-05-15,98.79977955668348\r
2018-05-18,100.0\r
2018-05-25,99.50988423076012\r
2018-05-28,99.50988423076012\r
2018-06-27,91.22433017938283\r
2018-06-29,91.22433017938283\r
2018-07-02,94.93628545173542\r
2018-07-04,94.93628545173542\r
2018-07-07,93.90215779342509\r
2018-07-09,94.07000139625436\r
2018-08-06,89.8111482738322\r
2018-08-11,87.0824894403008\r
2018-08-16,88.05793817599681\r
2018-09-20,85.31926128546449\r
2018-09-22,85.31926128546449\r
2018-09-25,89.67620123459773\r
2018-09-27,89.67620123459773\r
2018-09-30,85.46342193334787\r
2018-10-05,86.11863899292325\r
2018-10-07,87.84667826294798\r
2018-10-10,86.97302325539682\r
2018-10-12,86.15035270572915\r
2018-10-15,86.28635481421647\r
2018-10-17,85.54909236837445\r
2018-10-20,85.82451774273018\r
2018-10-22,86.53605522529215\r
2019-02-17,86.64516279484647\r
2019-02-24,86.64516279484647\r
2019-02-27,88.00738941767497\r
2019-03-29,90.18410181425568\r
2019-03-31,90.18410181425568\r
2019-04-18,90.88610687974146\r
2019-04-20,90.88610687974146\r
2019-04-30,90.88610687974146\r
2019-05-13,98.40890393167217\r
2019-05-15,98.40890393167217\r
2019-05-23,98.6165855211273\r
2019-05-25,98.6165855211273\r
2019-06-02,95.55546138876181\r
2019-06-04,95.55546138876181\r
2019-06-07,95.55546138876181\r
2019-06-27,92.79928233339115\r
2019-06-29,92.79928233339115\r
2019-07-02,92.44302994094984\r
2019-07-04,94.26206189355607\r
2019-07-09,94.26206189355607\r
2019-07-12,94.26206189355607\r
2019-07-17,94.20441694112655\r
2019-07-22,88.47222971797302\r
2019-07-24,88.47222971797302\r
2019-07-29,88.47222971797302\r
2019-08-01,90.2961843286969\r
2019-08-08,89.31853491130407\r
2019-08-11,89.31853491130407\r
2019-08-13,89.31853491130407\r
2019-08-31,87.192045364606\r
2019-09-02,87.192045364606\r
2019-09-10,88.0441502752416\r
2019-09-12,86.03712438000295\r
2019-09-15,87.48921024044482\r
2019-09-20,87.20117907677434\r
2019-11-19,84.33691314428314\r
2019-12-04,88.62445423426394\r
2019-12-14,87.23315197914454\r
2019-12-19,89.50421934735418\r
2019-12-29,89.31853491130407\r
2020-02-07,90.26815519538592\r
2020-02-19,90.26815519538592\r
2020-02-22,90.26815519538592\r
2020-03-28,92.2818228891933\r
2020-03-30,92.2818228891933\r
2020-04-02,91.10209954706774\r
2020-04-04,93.02775266734848\r
2020-04-07,91.79457868108322\r
2020-04-12,93.8015453661821\r
2020-04-14,93.63401413819193\r
2020-04-17,94.55544580933197\r
2020-04-19,93.50968866998176\r
2020-04-22,95.29392666619339\r
2020-04-24,94.60359822473407\r
2020-04-27,96.02156603162723\r
2020-05-07,96.77725356513015\r
2020-05-12,97.32570348092982\r
2020-05-17,96.45988233884698\r
2020-05-19,96.45988233884698\r
2020-05-27,96.60627695518122\r
2020-05-29,97.41403566234963\r
2020-06-01,95.86603359005625\r
2020-06-03,99.20656712942507\r
2020-07-21,92.5854237538208\r
2020-07-23,92.5854237538208\r
2020-07-31,92.05454848983909\r
2020-08-05,90.82043628088648\r
2020-08-07,92.78025966105822\r
2020-08-10,92.78025966105822\r
2020-08-12,92.78025966105822\r
2020-08-17,88.65676620823845\r
2020-08-20,88.7352701025724\r
2020-11-18,83.97991120609663\r
2020-11-25,83.97991120609663\r
2020-11-28,84.17614014929573\r
2020-11-30,84.17614014929573\r
2021-02-21,92.09240219812249\r
2021-02-23,91.67656891819335\r
2021-02-28,91.67656891819335\r
2021-03-03,91.81819250547406\r
2021-03-23,96.24543184418857\r
2021-03-28,97.25703676953381\r
2021-03-30,97.25703676953381\r
2021-04-02,95.69610805347247\r
2021-04-04,99.28109736300992\r
2021-04-09,97.59577139080481\r
2021-04-27,100.0\r
2021-06-01,96.11885725383593\r
2021-06-11,96.1869993149832\r
2021-06-13,92.17761012400098\r
2021-06-16,95.5312255864605\r
2021-06-18,95.5312255864605\r
2021-06-21,95.19234482934796\r
2021-07-21,91.22903349038461\r
2021-07-23,91.22903349038461\r
2021-09-04,92.04508664724894\r
2021-09-06,91.79457868108322\r
2021-10-09,89.89497502311531\r
2021-10-14,92.22970691526032\r
2021-10-19,92.22970691526032\r
2021-10-24,91.1302971378308\r
2021-10-29,93.8015453661821\r
2021-11-23,90.46915597759912\r
2022-01-12,92.88015704400486\r
2022-01-14,92.88015704400486\r
2022-02-26,95.71066540269186\r
2022-02-28,95.71066540269186\r
2022-03-03,97.66951092835042\r
2022-03-05,97.66951092835042\r
2022-03-08,96.27465678074917\r
2022-03-10,98.4385552641459\r
2022-03-23,96.13832320321465\r
2022-03-25,96.13832320321465\r
2022-03-28,98.58689925395504\r
2022-04-04,96.25517284729553\r
2022-04-17,99.60946383930752\r
2022-04-22,100.0\r
2022-05-17,99.13207336368734\r
2022-07-16,95.97294449426109\r
2022-07-18,95.97294449426109\r
2022-07-31,94.13239306022992\r
2022-08-02,94.13239306022992\r
2022-08-07,94.13239306022992\r
2022-08-10,94.16119830510279\r
2022-08-12,91.06451160416628\r
2022-08-17,91.06451160416628\r
2022-08-20,91.64354390974644\r
2022-08-22,90.24013173223136\r
2022-08-25,91.78985639113687\r
2022-08-30,91.78985639113687\r
2022-09-01,88.58753566170029\r
2022-09-04,90.73604809807186\r
2022-09-06,90.52998101721087\r
2022-10-09,86.81809970980045\r
2022-11-13,88.02576859599897\r
2022-11-20,88.02576859599897\r
2022-11-23,88.9803082499007\r
2023-02-21,93.51446842850024\r
2023-03-03,97.01205623807007\r
2023-05-27,98.76015126197602\r
2023-05-29,98.76015126197602\r
2023-06-01,100.0\r
2023-06-03,100.0\r
2023-06-06,100.0\r
2023-06-08,100.0\r
2023-06-11,99.58954272531116\r
`;export{n as default};
