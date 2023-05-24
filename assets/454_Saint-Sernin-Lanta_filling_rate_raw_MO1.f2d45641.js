const n=`date,value\r
2017-01-26,67.50848800829297\r
2017-02-22,79.35175371118818\r
2017-02-25,82.76409231853509\r
2017-03-17,82.76409231853509\r
2017-03-27,84.81913313929651\r
2017-04-06,86.14363903687506\r
2017-04-23,84.57159289591904\r
2017-05-16,82.27352566975763\r
2017-05-26,84.15959176730983\r
2017-06-02,85.72895560435929\r
2017-06-22,92.02261857882897\r
2017-07-05,87.8093971910718\r
2017-07-07,90.58233576607061\r
2017-07-17,88.22758785780852\r
2017-08-14,82.35521551752574\r
2017-08-21,89.23409337416174\r
2017-08-24,79.27112489528511\r
2017-08-26,79.99782142886282\r
2017-08-29,69.65350524762741\r
2017-09-05,71.66634879767659\r
2017-09-20,78.70753118496879\r
2017-09-23,77.90485463167947\r
2017-10-05,77.66461654572149\r
2017-10-08,70.65740552280208\r
2017-10-13,75.0392857819626\r
2017-10-15,76.78597956907458\r
2017-10-18,66.67227826491067\r
2017-10-28,66.74814574644354\r
2017-11-07,62.7692458524873\r
2017-11-14,64.7104095741826\r
2017-11-17,66.97593023701569\r
2017-11-22,64.11091455343879\r
2017-11-27,62.17615912009803\r
2017-12-19,66.67227826491067\r
2018-02-10,73.9351340651871\r
2018-02-25,75.67281075032291\r
2018-02-27,84.7365914467351\r
2018-03-14,78.86841358628438\r
2018-04-01,71.43306924239113\r
2018-04-21,89.57048692577449\r
2018-05-11,96.21851027755861\r
2018-06-20,95.78734826351362\r
2018-06-25,98.47150618231404\r
2018-07-07,88.56264334087811\r
2018-07-12,94.49795582926075\r
2018-07-15,91.00511838567088\r
2018-07-25,92.873571131805\r
2018-07-27,98.90687439513442\r
2018-07-30,99.5175240573665\r
2018-08-04,87.47534822162784\r
2018-08-06,98.99402909172838\r
2018-08-11,91.4285930928891\r
2018-08-19,96.563930074568\r
2018-08-21,92.19258859130801\r
2018-08-31,83.09170633232596\r
2018-09-03,84.6540780295537\r
2018-09-08,92.53285948378513\r
2018-09-10,83.91273101702053\r
2018-09-20,89.40223449056897\r
2018-09-23,87.30849176539337\r
2018-09-25,91.5981765469745\r
2018-09-28,90.83592223387747\r
2018-09-30,83.83050080405471\r
2018-10-03,86.14363903687506\r
2018-10-05,90.66683687715611\r
2018-10-23,79.27112489528511\r
2018-11-12,78.30583109947267\r
2018-11-17,76.70627798166376\r
2018-11-24,75.67281075032291\r
2018-11-27,75.83148457089594\r
2018-12-17,74.72322650806386\r
2018-12-19,71.7441680920896\r
2019-01-03,73.14998579860863\r
2019-01-11,76.78597956907458\r
2019-01-16,82.028627302265\r
2019-02-12,85.72895560435929\r
2019-02-15,87.391905984537\r
2019-02-17,84.81913313929651\r
2019-02-20,82.76409231853509\r
2019-02-22,90.75136570230983\r
2019-02-25,94.49795582926075\r
2019-02-27,76.46734798918882\r
2019-03-22,86.22666016861795\r
2019-03-24,80.80799413097434\r
2019-03-27,88.22758785780852\r
2019-03-29,80.07870941259728\r
2019-04-13,91.25912022049395\r
2019-05-01,88.7303385596337\r
2019-05-13,93.55631477646334\r
2019-06-02,87.72584296137002\r
2019-06-17,81.45819738390834\r
2019-06-27,96.30482439971544\r
2019-06-30,91.3438428301807\r
2019-07-05,92.9588178555866\r
2019-07-10,93.81279689747717\r
2019-07-12,92.61799609373324\r
2019-07-15,100.0\r
2019-07-25,95.61507427182939\r
2019-08-04,92.53285948378513\r
2019-08-09,89.90732550459165\r
2019-08-14,91.00511838567088\r
2019-08-16,85.8118359671972\r
2019-08-24,95.44290940394235\r
2019-08-29,86.55902591188324\r
2019-08-31,79.99782142886282\r
2019-09-13,89.31815001363472\r
2019-09-15,83.41977538878925\r
2019-09-20,88.47883758905347\r
2019-10-08,81.53960161581418\r
2019-10-13,86.89184121675618\r
2019-10-25,77.18492402735816\r
2019-11-27,73.69928002390435\r
2019-12-29,78.5467643869538\r
2020-01-06,82.51868075061773\r
2020-01-11,82.19186434569177\r
2020-01-16,79.35175371118818\r
2020-02-02,87.391905984537\r
2020-02-05,84.7365914467351\r
2020-02-20,84.15959176730983\r
2020-02-22,84.32430727807576\r
2020-03-13,66.67227826491067\r
2020-03-18,92.3626689130437\r
2020-03-21,84.48913605400537\r
2020-03-28,96.73680320922674\r
2020-04-05,83.41977538878925\r
2020-04-10,94.66951947126522\r
2020-04-15,89.40223449056897\r
2020-05-05,89.90732550459165\r
2020-05-17,84.6540780295537\r
2020-05-20,96.47753430544752\r
2020-05-22,90.75136570230983\r
2020-05-25,91.4285930928891\r
2020-05-27,86.06064604281725\r
2020-05-30,91.3438428301807\r
2020-06-21,83.00976014783397\r
2020-06-26,99.77963558643401\r
2020-07-19,98.29754815522509\r
2020-07-21,91.68300972316999\r
2020-07-24,92.19258859130801\r
2020-07-29,93.12939382488177\r
2020-07-31,84.7365914467351\r
2020-08-05,88.06022771899016\r
2020-08-08,95.78734826351362\r
2020-08-10,80.9703730581689\r
2020-08-15,87.14174741268307\r
2020-08-20,79.27112489528511\r
2020-08-25,84.9017030990787\r
2020-09-02,82.51868075061773\r
2020-09-04,88.22758785780852\r
2020-09-07,86.72537740110641\r
2020-09-12,77.74466690419324\r
2020-09-14,88.56264334087811\r
2020-09-17,84.48913605400537\r
2020-10-17,76.22868034004829\r
2020-11-08,72.44587734056056\r
2020-11-11,68.65466940936507\r
2020-11-18,64.2606042448907\r
2020-11-21,71.43306924239113\r
2021-02-14,90.32899879386804\r
2021-02-19,81.53960161581418\r
2021-02-24,88.06022771899016\r
2021-03-01,82.51868075061773\r
2021-03-23,86.64218761169757\r
2021-03-28,90.66683687715611\r
2021-03-31,94.41221506880424\r
2021-04-02,96.47753430544752\r
2021-04-07,90.66683687715611\r
2021-04-15,99.6048676170367\r
2021-04-17,88.98209055824834\r
2021-05-27,94.75534233809762\r
2021-05-30,95.35686790964138\r
2021-06-01,98.55852576530697\r
2021-06-16,94.15515711804352\r
2021-06-21,94.0695259359259\r
2021-06-26,85.72895560435929\r
2021-07-11,100.0\r
2021-07-29,99.95451130924276\r
2021-08-10,99.16841948250547\r
2021-08-18,93.04409208910417\r
2021-08-20,97.2560748660388\r
2021-08-25,87.47534822162784\r
2021-08-30,92.27761496728691\r
2021-09-12,92.3626689130437\r
2021-09-17,82.35521551752574\r
2021-09-24,88.14389381495982\r
2021-10-12,86.39278681303293\r
2021-10-14,79.6745571987579\r
2021-10-24,75.1974913311916\r
2021-10-27,75.67281075032291\r
2021-12-16,72.13370995416145\r
2021-12-18,74.4864901881928\r
2021-12-21,72.05574222819044\r
2022-01-02,74.09251731663757\r
2022-01-15,80.48358045787542\r
2022-01-22,79.02941152094863\r
2022-01-25,75.99027527745146\r
2022-02-06,93.2147230554499\r
2022-02-09,85.23226544749281\r
2022-02-26,92.873571131805\r
2022-03-23,94.32650169186574\r
2022-04-05,100.0\r
2022-04-17,99.77963558643401\r
2022-05-17,99.95451130924276\r
2022-06-01,100.0\r
2022-06-16,100.0\r
2022-07-11,100.0\r
2022-07-14,99.86705998215888\r
2022-07-16,96.65035304489844\r
2022-07-19,98.03681406821295\r
2022-07-21,91.85275893596251\r
2022-07-26,97.6027989400681\r
2022-07-31,92.873571131805\r
2022-08-05,88.64647700034683\r
2022-08-08,86.30970943001257\r
2022-08-10,88.47883758905347\r
2022-08-13,78.70753118496879\r
2022-08-28,85.23226544749281\r
2022-08-30,85.4804836159322\r
2022-09-04,87.14174741268307\r
2022-09-12,75.43501933952648\r
2022-09-19,80.64572990808857\r
2022-09-22,75.3558140576574\r
2022-10-04,80.64572990808857\r
2022-10-09,79.35175371118818\r
2022-10-12,67.8897940022879\r
2022-10-22,68.04252783985417\r
2022-10-24,73.22836787210302\r
2022-11-06,71.51079936325492\r
2022-11-11,63.36431055812932\r
2022-11-13,72.44587734056056\r
2022-11-16,70.50263055071818\r
2022-12-06,72.99331026602489\r
2022-12-28,67.20398758224391\r
2023-02-04,76.30820705883761\r
2023-02-06,79.51309782753131\r
2023-02-09,68.65466940936507\r
2023-02-11,81.05160551455374\r
2023-02-14,78.22557788130987\r
2023-02-16,82.19186434569177\r
2023-02-19,75.99027527745146\r
2023-02-26,80.80799413097434\r
2023-03-01,80.80799413097434\r
2023-03-03,89.23409337416174\r
2023-03-16,84.24193536044606\r
2023-03-28,91.17442527143622\r
2023-04-05,83.17368095697529\r
2023-04-07,89.82307416568067\r
2023-05-02,82.028627302265\r
`;export{n as default};