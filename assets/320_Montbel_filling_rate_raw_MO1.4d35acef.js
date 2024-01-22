const n=`date,value\r
2017-01-03,25.59882442393535\r
2017-02-15,42.18142019652005\r
2017-02-22,38.83564098329166\r
2017-02-25,43.60428034405474\r
2017-03-14,55.37729103037987\r
2017-03-17,59.69493170155851\r
2017-04-23,82.62982864177188\r
2017-05-16,88.58866547356537\r
2017-05-26,90.63830835247828\r
2017-06-02,92.7539474040563\r
2017-06-12,94.29431446940643\r
2017-06-22,92.21806310545873\r
2017-07-05,75.29453740853552\r
2017-07-17,83.15183040114024\r
2017-07-27,75.88397218083442\r
2017-08-04,78.15558635909295\r
2017-08-14,71.15598790975274\r
2017-08-21,47.57938075006391\r
2017-08-24,77.77788063422918\r
2017-08-26,65.87811579483062\r
2017-08-29,78.3118844074809\r
2017-09-05,37.54413167718155\r
2017-09-08,65.14581110927979\r
2017-09-13,35.692799903137114\r
2017-09-20,31.570194006195923\r
2017-09-23,36.04062713959217\r
2017-10-05,28.17232877821815\r
2017-10-08,32.98608952515268\r
2017-10-10,25.89174467016874\r
2017-10-13,29.749965663696987\r
2017-10-15,26.753729642684675\r
2017-10-25,24.124249511391536\r
2017-11-07,27.25780953253748\r
2017-11-17,27.795164460933798\r
2017-11-19,24.230965701714112\r
2017-11-22,23.495736793749806\r
2017-11-27,28.915723305627484\r
2017-12-24,30.23701384169051\r
2018-01-01,39.94761216215789\r
2018-01-18,59.25880229326933\r
2018-01-28,76.04589556093015\r
2018-02-25,96.5799275816271\r
2018-02-27,96.51078954873694\r
2018-03-02,99.09143860336421\r
2018-03-19,99.77520685089105\r
2018-04-01,99.45642269087921\r
2018-04-06,96.14250608533055\r
2018-04-21,100.0\r
2018-05-11,99.85029516969354\r
2018-06-20,99.2644814977716\r
2018-06-25,99.51732401631818\r
2018-07-07,100.0\r
2018-07-10,99.8221334657991\r
2018-07-12,99.70014911745282\r
2018-07-15,99.4423714055092\r
2018-07-25,99.65325356483618\r
2018-07-27,100.0\r
2018-07-30,98.33106049823124\r
2018-08-06,99.87846117492315\r
2018-08-11,99.29255791265192\r
2018-08-21,99.43768788260184\r
2018-09-03,96.42785929518296\r
2018-09-20,98.28451477558437\r
2018-09-23,97.16637081271983\r
2018-09-25,98.70385590573093\r
2018-09-28,97.25889929422159\r
2018-10-03,92.59165376517558\r
2018-10-05,96.67215332896966\r
2018-10-13,89.85618754979514\r
2018-10-23,87.52308583534484\r
2018-10-25,89.05126208210244\r
2018-11-04,85.76694724540481\r
2018-11-24,87.0560933791162\r
2018-12-27,87.62364405454109\r
2019-01-03,76.34594655797724\r
2019-02-12,84.15838079266032\r
2019-02-15,93.02929630233471\r
2019-02-17,90.43353612867169\r
2019-02-20,91.60768205315783\r
2019-02-22,95.16109403026032\r
2019-02-25,95.66946361776753\r
2019-02-27,89.41785704782644\r
2019-03-12,96.51078954873694\r
2019-03-22,96.9029262381488\r
2019-03-24,95.49068015133778\r
2019-03-27,98.60592317306103\r
2019-04-13,98.7925070708857\r
2019-05-01,98.68519799353781\r
2019-05-06,99.24576627632256\r
2019-05-13,99.43768788260184\r
2019-05-23,99.79397606313923\r
2019-05-31,99.18963207630824\r
2019-06-02,100.0\r
2019-06-17,99.03535169005542\r
2019-06-27,99.1568950675008\r
2019-06-30,99.85968336017233\r
2019-07-05,99.56418492625001\r
2019-07-07,99.69076905121145\r
2019-07-10,98.91855917572666\r
2019-07-12,99.47984388868296\r
2019-07-15,99.51732401631818\r
2019-07-22,97.84292547780474\r
2019-07-25,98.74584319119042\r
2019-08-04,98.67586975363494\r
2019-08-09,96.00459632641284\r
2019-08-14,95.64653254115156\r
2019-08-16,91.88567179132919\r
2019-08-21,95.90353062513398\r
2019-08-24,96.28052304072392\r
2019-08-26,92.40700676675594\r
2019-08-31,80.76032822863696\r
2019-09-03,88.41278129970898\r
2019-09-15,71.20679197342582\r
2019-09-20,69.87291784686956\r
2019-10-08,62.61760621149054\r
2019-10-13,53.5149337109153\r
2019-10-25,37.17200776377371\r
2019-11-04,43.79031942175104\r
2019-11-19,55.73952562988546\r
2019-11-27,59.7553459713037\r
2019-12-17,82.24477754156231\r
2019-12-27,87.64113882281417\r
2020-01-06,84.29964994942671\r
2020-01-11,92.71335956668014\r
2020-01-16,87.19997482447003\r
2020-02-15,93.37297234031129\r
2020-02-20,95.87138544367086\r
2020-02-22,92.72688777704715\r
2020-03-08,96.78750254191712\r
2020-03-11,97.88935786059743\r
2020-03-21,98.34502654193349\r
2020-04-05,97.10625287092529\r
2020-04-10,99.35808626719344\r
2020-04-15,99.41895498537258\r
2020-05-07,96.6398688957459\r
2020-05-20,99.77989897474082\r
2020-05-22,98.61524783212428\r
2020-05-25,99.77520685089105\r
2020-05-27,99.09143860336421\r
2020-05-30,99.1381908324105\r
2020-06-24,99.28319862999261\r
2020-07-14,99.69076905121145\r
2020-07-19,99.74705661673184\r
2020-07-21,97.87078347608451\r
2020-07-24,98.66187828901218\r
2020-07-31,97.16637081271983\r
2020-08-05,96.58914801156239\r
2020-08-10,94.47643752069999\r
2020-08-20,84.40247173939032\r
2020-08-25,75.96086248418584\r
2020-09-04,60.90591581566891\r
2020-09-12,69.67961572788258\r
2020-09-14,63.45921843868412\r
2020-09-17,67.1438143129517\r
2020-10-17,64.79246183743987\r
2020-10-24,62.59208730861682\r
2020-11-01,67.13245571486837\r
2020-11-11,74.17507029629675\r
2020-11-18,69.22842161829257\r
2020-11-21,78.25428124495083\r
2020-11-23,68.44551872052574\r
2020-12-18,75.77477954040283\r
2021-02-06,96.8798355398863\r
2021-02-11,98.33571572680164\r
2021-02-24,99.00264226413455\r
2021-03-13,98.82517888951998\r
2021-03-23,99.72829218339093\r
2021-03-28,99.3674493715908\r
2021-04-02,99.65325356483618\r
2021-04-05,99.84560125367666\r
2021-04-07,99.91132695090165\r
2021-04-15,99.99586583136623\r
2021-04-22,98.41487287039948\r
2021-05-12,100.0\r
2021-05-20,99.39554155120214\r
2021-05-27,100.0\r
2021-06-09,99.11013806208497\r
2021-06-14,97.23576270319519\r
2021-06-16,99.24108776951492\r
2021-06-19,98.19611077621488\r
2021-06-26,99.43300447913491\r
2021-07-11,99.94419858177196\r
2021-07-16,99.62981026838061\r
2021-07-19,99.35808626719344\r
2021-07-21,99.70952966156074\r
2021-08-10,97.07389001596599\r
2021-08-20,82.684915444517\r
2021-08-30,66.28352528013401\r
2021-09-22,59.81223668879184\r
2021-10-12,45.303265696289344\r
2021-10-14,41.41687190368779\r
2021-10-24,40.553190088797\r
2021-10-27,39.3327909243587\r
2021-12-16,58.983129446627366\r
2021-12-18,57.78611185069108\r
2021-12-21,61.45678128027904\r
2022-01-12,86.28222351285712\r
2022-01-15,85.92698017260794\r
2022-01-25,87.90816838151537\r
2022-01-27,93.71279913594228\r
2022-01-30,92.73590717770998\r
2022-02-01,94.13511287733071\r
2022-02-06,97.82435586456747\r
2022-02-09,92.31250876135636\r
2022-03-01,97.36999642119049\r
2022-03-03,97.24501698194567\r
2022-03-23,97.55531092036657\r
2022-04-05,99.85029516969354\r
2022-04-17,99.73298311252088\r
2022-05-17,100.0\r
2022-05-22,99.57355854165868\r
2022-06-01,100.0\r
2022-06-06,100.0\r
2022-06-29,96.13330876654233\r
2022-07-11,99.61574572402654\r
2022-07-16,99.46110669155334\r
2022-07-19,97.52750158258556\r
2022-07-21,96.79673369653325\r
2022-07-24,91.8946467959101\r
2022-07-31,82.63406538239944\r
2022-08-03,83.34750795149213\r
2022-08-08,69.27462490123835\r
2022-08-10,60.079302731711294\r
2022-08-28,63.97448412434959\r
2022-09-04,34.05176281268732\r
2022-09-22,61.58678705116563\r
2022-10-04,21.873834418425826\r
2022-10-09,19.105822731442824\r
2022-10-22,56.61272794036943\r
2022-11-01,51.76263607672416\r
2022-11-11,12.682229407966389\r
2022-11-13,10.302444009075867\r
2022-11-16,12.233574085502873\r
2023-02-01,19.43519059858787\r
2023-02-11,20.28483539912436\r
2023-02-14,17.82246069157406\r
2023-03-01,18.60897460445138\r
2023-03-16,24.9341646112399\r
2023-03-28,30.513015672611154\r
2023-04-07,33.208100835708066\r
2023-04-17,36.99903661752821\r
2023-05-02,48.689202593823275\r
2023-06-16,84.99931630034298\r
2023-07-11,96.48314184180276\r
2023-07-14,95.25258383993244\r
2023-08-08,87.02123240282333\r
2023-08-10,87.89502549550437\r
2023-08-20,77.29079570818348\r
2023-08-23,79.69709425372872\r
2023-09-04,61.539823363289834\r
2023-09-07,66.64124906606072\r
2023-09-19,51.746193254325355\r
2023-09-24,52.983928768694774\r
2023-09-27,55.118362607998336\r
2023-09-29,50.32648730024397\r
2023-10-02,53.28748635384878\r
2023-10-07,48.18790984809452\r
2023-10-12,43.85042352200512\r
2023-10-27,36.23826906673403\r
2023-11-08,30.14367882084745\r
2023-11-18,26.95659826199716\r
2023-11-26,27.288030354328153\r
2023-12-03,26.002621479589454\r
2023-12-11,31.126501118749445\r
`;export{n as default};