const r=`date,value\r
2017-01-26,69.5350476738674\r
2017-01-29,77.8156769887407\r
2017-02-15,75.63462690678257\r
2017-02-18,77.63295671586489\r
2017-02-25,79.59100073452727\r
2017-03-10,83.31580766810318\r
2017-03-30,80.63929752960554\r
2017-04-06,93.58569948505146\r
2017-04-09,91.0375907522399\r
2017-04-19,86.66368161040398\r
2017-05-06,89.29037122109584\r
2017-05-09,87.42915339229467\r
2017-05-16,92.9951268134841\r
2017-05-26,89.6774472804216\r
2017-06-18,86.98229420229146\r
2017-07-05,87.87694694212955\r
2017-08-12,67.62528296553518\r
2017-08-14,77.02515634881098\r
2017-08-22,63.59034251543802\r
2017-08-24,71.7609916001577\r
2017-09-21,69.94293718072394\r
2017-09-23,64.77321434622364\r
2017-10-08,63.758779083489856\r
2017-10-11,59.98571167323694\r
2017-10-13,60.534674341904314\r
2017-10-16,58.2969281918122\r
2017-10-23,60.920162172712665\r
2017-10-26,57.97234368247125\r
2017-10-31,64.03991077320555\r
2017-11-17,61.30664840687909\r
2017-11-20,57.3791951666199\r
2017-11-22,59.32965399091002\r
2017-11-27,60.58968286123982\r
2017-11-30,58.18865115472055\r
2017-12-05,60.25993780308564\r
2017-12-25,60.75483078116986\r
2018-01-09,72.64752231916117\r
2018-02-25,95.83050322918876\r
2018-03-02,97.62858693559711\r
2018-03-22,100.0\r
2018-03-30,89.93587761855244\r
2018-04-19,88.83964679577974\r
2018-04-21,99.84473971220596\r
2018-04-24,90.90769329291294\r
2018-05-11,100.0\r
2018-05-21,99.64243259813436\r
2018-06-20,96.82775409350205\r
2018-06-23,96.62796680216817\r
2018-06-25,90.32409217281271\r
2018-07-08,89.93587761855244\r
2018-07-10,96.16245182550084\r
2018-07-13,89.5483459808564\r
2018-07-15,90.90769329291294\r
2018-07-23,87.55699910204771\r
2018-07-25,89.4838238072275\r
2018-08-02,88.45405303444323\r
2018-08-04,85.39400931157753\r
2018-08-12,85.20421867396234\r
2018-08-19,85.26746306433223\r
2018-08-22,80.5156779321143\r
2018-08-27,76.66141276940075\r
2018-09-01,81.32058851230529\r
2018-09-03,74.91324341003033\r
2018-09-08,83.37847614756717\r
2018-09-11,83.25315842658061\r
2018-09-16,71.99696521559169\r
2018-09-23,77.75475074681592\r
2018-09-26,76.29837241644056\r
2018-10-03,76.05673649837622\r
2018-10-06,76.96448360967968\r
2018-11-12,79.22235154268122\r
2018-11-15,76.84319669401462\r
2018-11-17,75.75513177781717\r
2018-11-27,76.72198788065002\r
2018-12-07,78.7931443174138\r
2019-01-11,80.70113636005493\r
2019-01-16,80.94868516304243\r
2019-02-03,99.91221263901163\r
2019-02-13,74.5536106653119\r
2019-02-15,92.92960186434406\r
2019-02-20,87.81291926252803\r
2019-02-23,88.51827110654649\r
2019-02-25,89.4838238072275\r
2019-02-28,91.81856473060157\r
2019-03-20,85.90096013875699\r
2019-03-22,84.88828415902844\r
2019-03-25,90.90769329291294\r
2019-03-27,89.6774472804216\r
2019-03-30,85.01460046717112\r
2019-04-09,87.81291926252803\r
2019-05-01,83.44116386231832\r
2019-05-06,90.58328100720894\r
2019-05-14,91.4928279481127\r
2019-06-08,94.3755022318652\r
2019-06-13,91.4277373124803\r
2019-06-28,100.0\r
2019-07-05,89.61288713942442\r
2019-07-15,97.89612937960402\r
2019-07-23,84.32081009126158\r
2019-07-25,87.42915339229467\r
2019-08-04,87.42915339229467\r
2019-08-09,88.58250820393951\r
2019-08-14,87.94099367242485\r
2019-08-17,85.39400931157753\r
2019-08-22,81.50680109351663\r
2019-08-24,86.72736594035646\r
2019-09-11,81.19654340551489\r
2019-09-13,82.8776671230501\r
2019-09-16,82.3780905192046\r
2019-10-08,82.44047014997821\r
2019-10-11,76.54032115192409\r
2019-10-13,79.71403902856454\r
2019-10-26,82.25338909416338\r
2019-12-05,98.96928597128563\r
2019-12-10,95.43278369600874\r
2019-12-15,75.69486955250039\r
2019-12-25,83.5038708097039\r
2019-12-27,89.87124157290988\r
2019-12-30,83.19052842565532\r
2020-01-09,95.63155905458109\r
2020-01-11,95.36656276896605\r
2020-01-14,93.06067061643593\r
2020-01-16,92.60226001122749\r
2020-01-19,87.68492106560112\r
2020-02-05,91.23257889175896\r
2020-02-15,82.25338909416338\r
2020-02-20,85.33072661107298\r
2020-03-11,98.23097764842859\r
2020-03-21,94.30958186279494\r
2020-03-24,85.26746306433223\r
2020-03-26,66.99352652833677\r
2020-04-03,97.09439914195481\r
2020-04-05,84.76204453906654\r
2020-04-08,88.83964679577974\r
2020-04-10,87.6209505533766\r
2020-05-05,95.2341772179434\r
2020-05-18,86.2819768074411\r
2020-05-20,93.58569948505146\r
2020-05-25,97.76232079432584\r
2020-05-28,88.51827110654649\r
2020-05-30,93.9802621454035\r
2020-06-24,90.06520661703749\r
2020-07-07,99.70984968945864\r
2020-07-09,96.76113961197562\r
2020-07-19,89.5483459808564\r
2020-07-22,92.86409577145471\r
2020-07-24,79.16097795280258\r
2020-07-27,87.30138395679184\r
2020-08-06,77.14656037555862\r
2020-08-08,86.34554650257017\r
2020-08-18,80.63929752960554\r
2020-08-21,80.94868516304243\r
2020-08-23,74.6135003873129\r
2020-08-31,76.23793410318416\r
2020-09-02,71.81995535301417\r
2020-09-05,74.79328732995675\r
2020-09-10,78.7931443174138\r
2020-09-12,70.76163540242159\r
2020-09-30,67.3952732891029\r
2020-10-17,69.76800813740579\r
2020-10-30,66.99352652833677\r
2020-11-09,71.46646948003405\r
2020-11-11,72.41067970341612\r
2020-11-14,69.30240540176798\r
2020-11-21,74.01548705677573\r
2020-11-26,71.34879912166552\r
2020-11-29,70.64444044130506\r
2020-12-26,87.94099367242485\r
2021-01-03,100.0\r
2021-02-02,100.0\r
2021-02-14,100.0\r
2021-02-17,98.09698232878237\r
2021-02-19,85.01460046717112\r
2021-02-24,99.91221263901163\r
2021-02-27,98.09698232878237\r
2021-03-01,92.47145533212611\r
2021-03-04,91.29761278183155\r
2021-03-24,85.26746306433223\r
2021-03-29,95.30036060881373\r
2021-03-31,97.76232079432584\r
2021-04-05,95.69785502529385\r
2021-04-15,98.96928597128563\r
2021-04-23,96.69454384740938\r
2021-05-03,89.03270038124964\r
2021-05-20,89.0970895899086\r
2021-05-30,100.0\r
2021-06-09,90.71298910405339\r
2021-06-14,94.04608846377242\r
2021-07-02,89.35483642483378\r
2021-07-22,90.77787156367908\r
2021-08-11,91.10256787448715\r
2021-08-26,91.23257889175896\r
2021-08-28,87.36525913898294\r
2021-09-05,85.77410759783778\r
2021-09-12,91.16756392181907\r
2021-09-25,89.87124157290988\r
2021-10-07,90.84277296079347\r
2021-10-12,84.95143272838543\r
2021-10-15,88.06914427491091\r
2021-10-17,75.99637641791688\r
2021-10-27,76.29837241644056\r
2021-11-19,77.99857258671385\r
2021-12-14,99.77728539491892\r
2021-12-16,90.90769329291294\r
2021-12-19,93.58569948505146\r
2022-01-13,84.95143272838543\r
2022-01-15,85.14099344257193\r
2022-01-23,97.62858693559711\r
2022-01-25,83.25315842658061\r
2022-02-09,83.44116386231832\r
2022-03-21,98.03001267267757\r
2022-03-24,97.29457934068216\r
2022-04-05,92.01423359481316\r
2022-05-08,93.45432922778633\r
2022-05-10,96.76113961197562\r
2022-05-15,77.14656037555862\r
2022-06-17,95.49902338755135\r
2022-06-22,99.03651679397132\r
2022-07-02,92.9951268134841\r
2022-07-12,92.73314016418999\r
2022-07-14,91.94899174626165\r
2022-07-17,87.17369081601234\r
2022-08-01,75.69486955250039\r
2022-08-28,63.14206806965497\r
2022-09-05,52.10186463829808\r
2022-09-10,50.30414630060459\r
2022-09-20,49.998557201739594\r
2022-09-22,49.44028659243761\r
2022-10-02,43.90284978309215\r
2022-10-05,46.687466868194214\r
2022-10-07,49.08635694551852\r
2022-11-11,46.9846416746183\r
2022-11-16,47.431846101186956\r
2022-12-04,54.50361954165505\r
2022-12-21,56.25374656083033\r
2023-01-10,59.87616423149487\r
2023-01-18,66.07893424959737\r
2023-02-02,79.46804004084976\r
2023-02-04,73.6576225709279\r
2023-02-09,68.95403903090171\r
2023-02-12,77.14656037555862\r
2023-02-14,69.94293718072394\r
2023-02-17,77.45041184373962\r
2023-02-24,76.35883028078352\r
2023-03-09,76.47980465136428\r
2023-03-16,78.2427059814398\r
2023-04-05,77.8156769887407\r
2023-04-08,75.69486955250039\r
2023-04-10,79.46804004084976\r
2023-04-18,76.84319669401462\r
2023-05-05,79.96034832976882\r
2023-05-28,76.84319669401462\r
2023-06-24,84.06909836778624\r
2023-07-07,88.71103946446611\r
2023-07-14,84.69895349369833\r
2023-07-17,85.39400931157753\r
2023-07-22,85.58397230962586\r
2023-07-27,81.19654340551489\r
2023-07-29,84.44678113747571\r
2023-08-08,76.35883028078352\r
2023-08-11,70.35180010378356\r
2023-08-18,67.1082112476563\r
2023-08-21,66.93621420207768\r
2023-08-23,67.45274571399317\r
2023-08-31,62.86255430136979\r
2023-09-05,70.35180010378356\r
2023-09-07,63.702613350458236\r
2023-09-10,61.805024458073774\r
2023-09-20,59.32965399091002\r
2023-09-25,60.15018607816944\r
2023-09-30,59.93092773392781\r
2023-10-02,59.32965399091002\r
`;export{r as default};
