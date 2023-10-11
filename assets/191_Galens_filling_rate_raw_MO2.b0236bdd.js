const n=`date,value\r
2017-01-03,67.43548782787136\r
2017-01-13,67.43548782787136\r
2017-02-22,54.76881698529048\r
2017-02-25,67.43548782787136\r
2017-03-07,66.7826705353603\r
2017-03-17,39.36712987504774\r
2017-03-27,73.82572902600741\r
2017-04-03,73.82572902600741\r
2017-04-06,87.66790930956375\r
2017-04-23,100.0\r
2017-05-03,100.0\r
2017-05-16,48.492063788250064\r
2017-05-23,48.492063788250064\r
2017-05-26,81.5628633461938\r
2017-06-02,87.2079532738558\r
2017-06-05,85.09675067733201\r
2017-06-12,82.06301143540215\r
2017-06-25,97.61309660311194\r
2017-07-02,92.09923750922317\r
2017-07-05,92.27645160602043\r
2017-07-07,97.00582009295297\r
2017-07-17,96.88459738762843\r
2017-07-27,94.59609358374136\r
2017-08-04,95.79708148977026\r
2017-08-06,95.19561883944674\r
2017-08-11,93.28395626574077\r
2017-08-14,98.22231162249835\r
2017-08-19,99.8153448788992\r
2017-08-21,96.03820908311228\r
2017-08-24,96.09853942540676\r
2017-08-26,93.52182946139268\r
2017-08-29,92.69062878243392\r
2017-09-03,91.68641551082224\r
2017-09-20,90.27822610213858\r
2017-09-23,91.98119157479697\r
2017-09-28,91.98119157479697\r
2017-10-05,95.49610797276982\r
2017-10-08,96.03820908311228\r
2017-10-10,96.702908692167\r
2017-10-13,95.07555880570665\r
2017-10-15,95.61643925156986\r
2017-10-18,95.01555784905601\r
2017-10-25,92.80913937320774\r
2017-10-28,90.57067962019093\r
2017-10-30,88.5336626912587\r
2017-11-07,88.93917019016128\r
2017-11-17,90.4536401594882\r
2017-11-19,86.92110914998902\r
2017-11-22,85.32371313431987\r
2017-11-27,85.32371313431987\r
2017-12-02,87.15054578016004\r
2017-12-24,94.17757850426479\r
2017-12-27,94.17757850426479\r
2018-01-28,89.98625634395255\r
2018-02-02,92.80913937320774\r
2018-02-12,89.69477030969412\r
2018-02-22,47.518962046762056\r
2018-02-25,74.40689786995092\r
2018-02-27,74.5658030064806\r
2018-03-14,92.15828951518327\r
2018-03-17,92.15828951518327\r
2018-03-19,92.15828951518327\r
2018-03-22,98.22231162249835\r
2018-03-29,95.91760653183256\r
2018-04-01,95.91760653183256\r
2018-04-06,42.08955397232886\r
2018-04-21,81.23030004291088\r
2018-04-23,81.23030004291088\r
2018-04-26,85.89247209335632\r
2018-05-06,85.55098479709213\r
2018-05-11,98.64991569722716\r
2018-05-18,98.64991569722716\r
2018-05-21,98.64991569722716\r
2018-06-10,77.23975552122356\r
2018-06-20,90.27822610213858\r
2018-06-22,91.09831514205734\r
2018-06-25,88.70733556314394\r
2018-06-27,92.3946911373098\r
2018-07-02,94.3568258891037\r
2018-07-07,95.25567791709689\r
2018-07-10,95.67663395469032\r
2018-07-12,89.40376796337029\r
2018-07-15,88.88118251848431\r
2018-07-17,88.88118251848431\r
2018-07-20,97.67393086756466\r
2018-07-22,90.4536401594882\r
2018-07-25,90.4536401594882\r
2018-07-30,85.7216414718165\r
2018-08-01,89.92792044033764\r
2018-08-04,89.92792044033764\r
2018-08-06,88.47581041782375\r
2018-08-11,85.55098479709213\r
2018-08-16,94.65595893454748\r
2018-08-19,92.45383994383488\r
2018-08-21,85.77856568451344\r
2018-08-26,86.52033937892223\r
2018-08-31,88.36016389500439\r
2018-09-03,90.4536401594882\r
2018-09-08,91.45094309212197\r
2018-09-10,86.12051685307142\r
2018-09-13,86.12051685307142\r
2018-09-18,90.6292283781441\r
2018-09-20,91.21578037139491\r
2018-09-23,89.98625634395255\r
2018-09-25,89.98625634395255\r
2018-09-28,90.39514945616483\r
2018-09-30,90.39514945616483\r
2018-10-03,53.01822511072459\r
2018-10-05,57.937309223794244\r
2018-10-13,57.00952511435502\r
2018-10-20,80.12677426353304\r
2018-10-23,81.34107725978733\r
2018-10-25,79.57790615465142\r
2018-10-30,80.07180061878036\r
2018-11-04,79.68752541079074\r
2018-11-22,84.24839500494397\r
2018-11-29,86.00645581542511\r
2018-12-19,89.57831133062986\r
2018-12-24,89.57831133062986\r
2018-12-27,89.63653114654733\r
2018-12-29,89.63653114654733\r
2019-01-01,59.62663030024046\r
2019-01-03,65.6356415054773\r
2019-01-06,64.69576052706209\r
2019-01-11,64.69576052706209\r
2019-01-16,66.28271338861359\r
2019-01-23,59.48490499322121\r
2019-01-28,59.48490499322121\r
2019-02-12,3.9079931766983314\r
2019-02-15,3.0581110604830233\r
2019-02-17,24.92030339889565\r
2019-02-20,18.822516655707645\r
2019-02-22,48.27966164884843\r
2019-02-25,63.22585128879484\r
2019-02-27,59.48490499322121\r
2019-03-12,78.37718754448717\r
2019-03-22,51.51579131420673\r
2019-03-24,57.37971952073847\r
2019-03-27,51.428100707018565\r
2019-03-29,52.441156638004884\r
2019-04-01,47.39277947220499\r
2019-04-13,43.72737542914725\r
2019-05-01,95.13557913574343\r
2019-05-06,98.58877123367114\r
2019-05-11,98.58877123367114\r
2019-05-13,96.21925824470046\r
2019-05-16,96.40048181458683\r
2019-05-23,96.64238455590754\r
2019-05-31,98.52764615963028\r
2019-06-02,95.13557913574343\r
2019-06-17,95.13557913574343\r
2019-06-27,95.13557913574343\r
2019-06-30,95.01555784905601\r
2019-07-02,97.12712032755184\r
2019-07-05,100.0\r
2019-07-07,100.0\r
2019-07-10,99.38516174236386\r
2019-07-12,99.38516174236386\r
2019-07-15,100.0\r
2019-07-17,100.0\r
2019-07-20,100.0\r
2019-07-22,98.77226279398758\r
2019-07-25,97.49148622920826\r
2019-08-04,90.27822610213858\r
2019-08-09,93.4623321140868\r
2019-08-14,90.27822610213858\r
2019-08-16,91.39212337846918\r
2019-08-21,88.70733556314394\r
2019-08-24,83.62903029121588\r
2019-08-26,83.4605183045847\r
2019-08-29,83.4605183045847\r
2019-08-31,88.93917019016128\r
2019-09-03,84.47419810865391\r
2019-09-05,84.47419810865391\r
2019-09-08,83.4605183045847\r
2019-09-13,43.68704805079826\r
2019-09-15,43.68704805079826\r
2019-09-18,42.68504759633592\r
2019-09-20,49.94904852979999\r
2019-10-03,49.94904852979999\r
2019-10-08,81.95173226659725\r
2019-10-13,81.95173226659725\r
2019-12-02,93.4623321140868\r
2019-12-14,93.4623321140868\r
2020-01-06,42.72489932253893\r
2020-01-11,55.95204163119533\r
2020-01-16,50.07866525600115\r
2020-01-18,53.91233119698163\r
2020-02-05,80.29181098417831\r
2020-02-07,82.73230841258906\r
2020-02-12,79.85209900898117\r
2020-02-15,79.85209900898117\r
2020-02-20,79.41362197833233\r
2020-02-22,70.38764418001787\r
2020-03-08,31.449954471169196\r
2020-03-11,100.0\r
2020-03-13,100.0\r
2020-03-18,100.0\r
2020-03-21,88.82321419028204\r
2020-03-28,71.83598446842569\r
2020-03-31,71.83598446842569\r
2020-04-02,69.15821583314242\r
2020-04-05,53.509037047270624\r
2020-04-07,33.52874531402612\r
2020-04-10,54.3171743056007\r
2020-04-12,56.41057275175043\r
2020-04-15,85.21019325628284\r
2020-04-25,93.04639290905222\r
2020-05-07,88.59153430643049\r
2020-05-17,88.5336626912587\r
2020-05-20,72.51355767132091\r
2020-05-22,85.26694353276804\r
2020-05-25,89.11324926893363\r
2020-05-30,88.07138604804265\r
2020-06-21,92.63140253034135\r
2020-06-24,99.01718967381665\r
2020-06-26,95.31575636897416\r
2020-06-29,95.31575636897416\r
2020-07-01,98.77226279398758\r
2020-07-04,98.89468745211626\r
2020-07-06,99.3237845831428\r
2020-07-09,99.7538319622598\r
2020-07-11,99.26242681674017\r
2020-07-14,99.69233844036059\r
2020-07-19,99.01718967381665\r
2020-07-21,96.702908692167\r
2020-07-24,97.18779951902354\r
2020-07-26,97.61309660311194\r
2020-07-29,98.83346542774312\r
2020-07-31,98.22231162249835\r
2020-08-05,95.91760653183256\r
2020-08-08,94.11786811470083\r
2020-08-10,97.24849809364703\r
2020-08-15,91.09831514205734\r
2020-08-20,91.09831514205734\r
2020-08-25,82.73230841258906\r
2020-09-02,53.33029232991541\r
2020-09-04,53.41962645074453\r
2020-09-07,24.55859181555394\r
2020-09-12,24.950568137027453\r
2020-09-14,22.67511680724308\r
2020-09-17,25.132551132344567\r
2020-11-11,82.844128258563\r
2020-11-18,84.36125791613028\r
2020-11-21,80.2367794459284\r
2020-11-23,79.68752541079074\r
2020-11-28,76.91633685290844\r
2021-01-25,66.18295253501523\r
2021-02-14,96.82401510774928\r
2021-02-19,94.05817709402518\r
2021-02-24,93.4623321140868\r
2021-02-26,91.62751837096292\r
2021-03-01,91.74533200794663\r
2021-03-06,82.2300750001049\r
2021-03-21,61.43675191578245\r
2021-03-23,62.255508841887774\r
2021-03-28,59.013733049222\r
2021-03-31,61.19699604911845\r
2021-04-02,64.00765268968168\r
2021-04-05,63.909658765649056\r
2021-04-15,67.73788369049313\r
2021-04-17,71.10992833747912\r
2021-05-27,84.81348239795442\r
2021-05-30,84.81348239795442\r
2021-06-01,84.81348239795442\r
2021-06-14,59.67391040315218\r
2021-06-16,61.67698729083855\r
2021-06-19,61.67698729083855\r
2021-06-26,63.567284741451424\r
2021-07-01,66.7826705353603\r
2021-07-09,56.73268351302178\r
2021-07-11,60.71892266889276\r
2021-07-19,63.909658765649056\r
2021-07-21,55.86056508949056\r
2021-07-26,59.15488340874568\r
2021-07-29,59.15488340874568\r
2021-08-10,63.76281186152829\r
2021-08-13,64.15478756440481\r
2021-08-18,64.15478756440481\r
2021-08-20,57.56527631993706\r
2021-08-23,57.937309223794244\r
2021-08-25,51.47193645929001\r
2021-08-28,55.7234938149797\r
2021-08-30,52.131765269472155\r
2021-09-04,53.86744424897494\r
2021-09-07,53.86744424897494\r
2021-09-22,52.48543184525617\r
2021-09-24,56.08939998898093\r
2021-10-07,54.227075296079505\r
2021-10-09,54.227075296079505\r
2021-10-12,55.3133133747381\r
2021-10-14,54.04710678016475\r
2021-10-17,55.86056508949056\r
2021-10-19,51.691401767786374\r
2021-10-24,52.884768758400405\r
2021-10-27,52.795893430026716\r
2021-11-06,51.29670806234229\r
2021-11-11,52.087642938411214\r
2021-11-18,52.087642938411214\r
2021-12-11,77.45575358853934\r
2021-12-16,81.72940561656355\r
2021-12-18,56.77877591451362\r
2021-12-21,58.26384362259556\r
2021-12-23,54.13705278857254\r
2022-01-15,56.68661025685703\r
2022-01-17,71.47248485123755\r
2022-01-22,62.448963286855665\r
2022-01-25,63.713901287318606\r
2022-01-27,64.00765268968168\r
2022-01-30,60.10029391013379\r
2022-02-09,59.201971855507665\r
2022-03-01,80.40193195629986\r
2022-03-06,80.40193195629986\r
2022-03-08,80.51213012460565\r
2022-03-23,18.58738276948955\r
2022-03-26,19.483601141801707\r
2022-03-28,19.483601141801707\r
2022-04-05,17.233351830629477\r
2022-04-10,8.81909075371811\r
2022-04-15,33.59921057004666\r
2022-04-17,31.042359150390602\r
2022-04-22,38.98580972061497\r
2022-05-17,44.619393393046764\r
2022-05-20,49.862732827088976\r
2022-05-22,49.862732827088976\r
2022-05-27,64.59722899189963\r
2022-05-30,71.83598446842569\r
2022-06-01,81.95173226659725\r
2022-06-04,81.0642789937175\r
2022-06-06,81.00897724974449\r
2022-06-11,86.12051685307142\r
2022-06-14,89.8113066788285\r
2022-06-16,89.8113066788285\r
2022-06-19,90.21979345086135\r
2022-06-29,94.11786811470083\r
2022-07-06,94.8356712166155\r
2022-07-11,94.89561405479104\r
2022-07-14,92.80913937320774\r
2022-07-16,93.99850544195608\r
2022-07-19,93.76001251410568\r
2022-07-21,93.76001251410568\r
2022-07-24,93.52182946139268\r
2022-07-26,93.64088225448627\r
2022-07-31,91.92219764576143\r
2022-08-03,92.7498743966281\r
2022-08-05,89.28750244938965\r
2022-08-08,83.51666965081947\r
2022-08-10,76.5398922829888\r
2022-08-13,54.04710678016475\r
2022-08-20,54.95000967304213\r
2022-08-28,44.497212030308766\r
2022-08-30,49.132131878319285\r
2022-09-02,49.132131878319285\r
2022-09-04,44.98696569269399\r
2022-09-12,50.29507495056949\r
2022-09-19,68.2940735381273\r
2022-09-22,65.33808792633906\r
2022-10-04,83.01200287048253\r
2022-10-07,89.05520356509673\r
2022-10-09,84.3048168005182\r
2022-10-12,84.3048168005182\r
2022-10-19,83.51666965081947\r
2022-10-22,83.40438627392837\r
2022-10-24,85.49413789232472\r
2022-11-11,79.3588991737774\r
2022-11-13,93.99850544195608\r
2022-11-16,93.99850544195608\r
2022-12-06,82.2300750001049\r
2022-12-11,84.47419810865391\r
2022-12-16,85.66473658654351\r
2023-01-20,46.55594709835124\r
2023-01-30,46.55594709835124\r
2023-02-04,36.07662302154766\r
2023-02-06,36.07662302154766\r
2023-02-09,36.07662302154766\r
2023-02-11,14.178855328906021\r
2023-02-14,24.19958472300715\r
2023-02-16,23.022415074677742\r
2023-02-19,23.022415074677742\r
2023-02-26,25.102173658309056\r
2023-03-06,51.2092084722705\r
2023-03-13,44.78256844073501\r
2023-03-16,98.77226279398758\r
2023-03-28,47.26676849620148\r
2023-04-05,66.38255109726013\r
2023-04-07,55.814855526606756\r
2023-04-17,62.352197690685074\r
2023-05-27,58.17045230024781\r
2023-05-30,58.17045230024781\r
2023-06-04,59.06076400595277\r
2023-06-16,81.78495831887656\r
2023-06-24,91.15703807937888\r
2023-06-26,91.15703807937888\r
2023-06-29,85.7216414718165\r
2023-07-09,95.61643925156986\r
2023-07-11,95.79708148977026\r
2023-07-14,94.89561405479104\r
2023-07-16,94.89561405479104\r
2023-07-19,97.49148622920826\r
2023-07-31,89.40376796337029\r
2023-08-08,89.40376796337029\r
2023-08-10,89.40376796337029\r
2023-08-15,87.61034712733665\r
2023-08-18,87.61034712733665\r
2023-08-20,85.32371313431987\r
2023-08-23,86.57753420641117\r
2023-09-04,16.270415345816915\r
2023-09-07,16.270415345816915\r
2023-09-14,15.171013219533098\r
2023-09-24,38.00325950719562\r
2023-09-27,37.51679381601256\r
2023-09-29,42.44633666190781\r
2023-10-02,40.6778221075912\r
2023-10-04,41.302217372353006\r
2023-10-07,42.40661807282946\r
`;export{n as default};
