const n=`date,value\r
2017-02-19,62.873202447808104\r
2017-02-22,69.0209118873491\r
2017-03-04,46.308881198807235\r
2017-03-11,65.15605297603125\r
2017-03-14,69.0209118873491\r
2017-04-03,94.87282696589705\r
2017-04-10,94.87282696589705\r
2017-04-20,86.6060236480121\r
2017-04-23,86.04525830668138\r
2017-04-30,86.04525830668138\r
2017-05-23,84.92739535326817\r
2017-05-30,84.92739535326817\r
2017-06-02,91.99373324316969\r
2017-06-09,94.29463270862894\r
2017-06-12,88.29562379128738\r
2017-06-19,84.09221781011286\r
2017-06-22,79.13963880952943\r
2017-07-02,78.05280847087546\r
2017-07-04,65.41138272925711\r
2017-07-07,66.69303806956216\r
2017-07-09,66.69303806956216\r
2017-07-12,66.69303806956216\r
2017-07-14,59.87214140032926\r
2017-07-17,61.616787377748736\r
2017-07-22,53.78012508262609\r
2017-07-24,53.78012508262609\r
2017-07-27,42.05318592573679\r
2017-07-29,42.05318592573679\r
2017-08-03,39.22158913625676\r
2017-08-06,41.83303088700231\r
2017-08-13,34.376750389757646\r
2017-08-18,33.55622373218371\r
2017-08-21,27.23677657609087\r
2017-08-23,28.775029443178873\r
2017-08-26,27.810301189260457\r
2017-09-05,14.906592796727278\r
2017-09-15,12.486901110209871\r
2017-09-20,10.768712501270079\r
2017-09-22,12.486901110209871\r
2017-09-27,10.21517370904635\r
2017-10-05,7.107937575793856\r
2017-10-07,3.410373996859264\r
2017-10-10,3.129478952296601\r
2017-10-12,3.410373996859264\r
2017-10-15,2.946759427952828\r
2017-10-17,2.2538828775587127\r
2017-10-22,2.1717242444863762\r
2017-10-25,3.896152458258572\r
2017-10-27,3.129478952296601\r
2017-10-30,2.946759427952828\r
2017-11-21,1.5526385166250125\r
2017-11-26,1.5526385166250125\r
2017-11-29,1.5526385166250125\r
2018-01-13,12.929597428553782\r
2018-01-15,17.30192131785141\r
2018-01-23,11.61716099967066\r
2018-01-28,2.5064061451055766\r
2018-02-02,2.5064061451055766\r
2018-02-24,30.93584305751517\r
2018-02-27,30.93584305751517\r
2018-03-04,4.403140199562066\r
2018-03-14,64.64639822836422\r
2018-03-16,95.74233565449516\r
2018-03-19,73.75618732611288\r
2018-03-21,73.75618732611288\r
2018-03-24,73.75618732611288\r
2018-04-18,86.88686363765501\r
2018-04-20,100.0\r
2018-04-25,100.0\r
2018-04-30,100.0\r
2018-05-05,96.32348285845939\r
2018-05-08,96.32348285845939\r
2018-05-18,92.56717163923626\r
2018-05-20,97.78149534658235\r
2018-05-25,85.20640180205984\r
2018-06-02,81.60334007445161\r
2018-06-14,79.13963880952943\r
2018-06-19,89.99612605598237\r
2018-06-22,79.95805953833118\r
2018-06-24,87.7312089809416\r
2018-06-27,87.7312089809416\r
2018-06-29,87.7312089809416\r
2018-07-02,90.85044405602846\r
2018-07-04,88.29562379128738\r
2018-07-07,85.76533360893063\r
2018-07-09,84.92739535326817\r
2018-07-12,84.92739535326817\r
2018-07-17,74.288797640449\r
2018-07-19,70.84989045767738\r
2018-07-22,77.24099625543461\r
2018-07-24,71.11247890580063\r
2018-07-27,72.43029200806134\r
2018-07-29,70.84989045767738\r
2018-08-01,70.84989045767738\r
2018-08-03,58.636283937873976\r
2018-08-06,60.36889744121674\r
2018-08-11,70.84989045767738\r
2018-08-16,38.15024065502575\r
2018-08-18,49.997732255954986\r
2018-08-21,46.53664947851021\r
2018-08-23,46.53664947851021\r
2018-08-26,47.45145750803696\r
2018-08-28,46.99330771307373\r
2018-08-31,35.61992658615915\r
2018-09-02,29.75071794153464\r
2018-09-05,31.734499772561342\r
2018-09-07,27.427506397419727\r
2018-09-10,25.540422526927003\r
2018-09-12,25.540422526927003\r
2018-09-17,22.97537504072834\r
2018-09-20,18.795491771743773\r
2018-09-22,20.850319396757058\r
2018-09-25,16.81334090674843\r
2018-09-27,16.81334090674843\r
2018-10-02,16.169236508006655\r
2018-10-05,16.169236508006655\r
2018-10-10,20.67636931541689\r
2018-10-12,20.67636931541689\r
2018-10-15,9.806488739487051\r
2018-10-17,12.633892081385046\r
2018-10-20,12.633892081385046\r
2018-10-22,10.768712501270079\r
2018-10-25,10.768712501270079\r
2018-10-30,12.194653700274952\r
2018-11-04,14.288284212991542\r
2018-11-09,14.288284212991542\r
2018-11-11,14.288284212991542\r
2018-11-14,14.288284212991542\r
2018-11-24,56.19062696369911\r
2018-12-11,69.0209118873491\r
2018-12-14,69.0209118873491\r
2019-01-03,55.22217940567295\r
2019-01-10,55.22217940567295\r
2019-01-15,55.70569810372354\r
2019-02-04,66.17937633058384\r
2019-02-12,69.0209118873491\r
2019-02-14,54.01957886434906\r
2019-02-17,59.624279518268466\r
2019-02-19,59.624279518268466\r
2019-02-22,57.653834415319885\r
2019-02-24,57.653834415319885\r
2019-02-27,57.653834415319885\r
2019-03-04,64.39207410247579\r
2019-03-16,57.653834415319885\r
2019-03-19,57.653834415319885\r
2019-03-21,72.95968298995238\r
2019-03-24,71.63863115743538\r
2019-03-26,77.24099625543461\r
2019-03-29,75.89431077590994\r
2019-03-31,80.50523849238735\r
2019-04-05,81.87864336958455\r
2019-04-13,88.86124993760095\r
2019-04-15,88.86124993760095\r
2019-04-18,87.1680080724136\r
2019-04-20,94.00597993485451\r
2019-04-23,89.99612605598237\r
2019-04-30,86.88686363765501\r
2019-05-03,89.14451646437506\r
2019-05-10,92.85433821449345\r
2019-05-13,94.00597993485451\r
2019-05-15,90.2805982063314\r
2019-05-23,88.29562379128738\r
2019-05-25,88.29562379128738\r
2019-05-30,76.4320325348823\r
2019-06-02,88.01326480913659\r
2019-06-04,88.01326480913659\r
2019-06-07,96.03276197863016\r
2019-06-12,95.16236785227287\r
2019-06-17,78.59559426312211\r
2019-06-19,93.14180263484123\r
2019-06-24,86.04525830668138\r
2019-06-27,89.99612605598237\r
2019-06-29,80.50523849238735\r
2019-07-02,86.04525830668138\r
2019-07-04,84.09221781011286\r
2019-07-07,78.86745937137908\r
2019-07-09,78.86745937137908\r
2019-07-12,76.16301267054652\r
2019-07-14,72.694826050426\r
2019-07-17,72.95968298995238\r
2019-07-19,70.32569090310852\r
2019-07-22,67.46602119918997\r
2019-07-24,62.62124015597542\r
2019-07-29,62.62124015597542\r
2019-08-01,58.39015041196644\r
2019-08-03,56.67696195842247\r
2019-08-06,51.641154022416416\r
2019-08-08,49.29887762740919\r
2019-08-11,40.956292280817394\r
2019-08-13,46.99330771307373\r
2019-08-16,45.175672510118076\r
2019-08-18,45.175672510118076\r
2019-08-21,44.72502912892462\r
2019-08-23,39.86915373182932\r
2019-08-26,41.39388392080093\r
2019-08-28,38.79185726337932\r
2019-08-31,34.78949746022087\r
2019-09-02,32.33795231651966\r
2019-09-07,31.93522733285803\r
2019-09-12,33.96565695464067\r
2019-09-15,24.429991764817245\r
2019-09-17,17.465820658947422\r
2019-09-20,12.78145825408486\r
2019-09-22,12.78145825408486\r
2019-09-27,10.768712501270079\r
2019-09-30,10.908619598381584\r
2019-10-07,10.768712501270079\r
2019-10-25,19.64298399581472\r
2019-10-30,19.64298399581472\r
2019-12-06,72.16608125150034\r
2019-12-14,72.16608125150034\r
2019-12-19,72.16608125150034\r
2019-12-21,97.78149534658235\r
2019-12-29,95.74233565449516\r
2020-02-12,58.39015041196644\r
2020-02-14,58.39015041196644\r
2020-02-22,64.13808605709119\r
2020-02-24,62.11833358450806\r
2020-03-08,64.39207410247579\r
2020-03-20,74.82269033426098\r
2020-03-23,77.78188850727307\r
2020-03-25,77.51128431435293\r
2020-03-28,93.14180263484123\r
2020-04-02,91.70746203430564\r
2020-04-04,94.87282696589705\r
2020-04-07,99.54076985741422\r
2020-04-09,96.90580711154702\r
2020-04-12,97.78149534658235\r
2020-04-14,95.45220418057319\r
2020-04-17,95.45220418057319\r
2020-04-22,96.03276197863016\r
2020-04-24,93.14180263484123\r
2020-04-27,98.3667520219209\r
2020-05-04,88.01326480913659\r
2020-05-07,88.01326480913659\r
2020-05-09,83.81444034333387\r
2020-05-17,78.05280847087546\r
2020-05-19,84.09221781011286\r
2020-05-22,87.7312089809416\r
2020-05-24,87.7312089809416\r
2020-05-27,89.14451646437506\r
2020-05-29,79.68493924828863\r
2020-06-01,79.68493924828863\r
2020-06-21,84.64869564958684\r
2020-06-23,98.65981884993846\r
2020-06-26,98.65981884993846\r
2020-06-28,98.65981884993846\r
2020-07-01,81.32834759221072\r
2020-07-08,78.86745937137908\r
2020-07-11,76.7013699992064\r
2020-07-13,77.78188850727307\r
2020-07-18,71.9021941707989\r
2020-07-21,68.24198287778644\r
2020-07-23,68.24198287778644\r
2020-07-28,53.30228801137666\r
2020-07-31,56.92065550726358\r
2020-08-05,43.15974995968522\r
2020-08-07,39.65290424695134\r
2020-08-10,37.30034752835722\r
2020-08-15,42.49465576195911\r
2020-08-20,32.539947992018234\r
2020-08-25,21.72735661764796\r
2020-08-27,21.55098200514972\r
2020-09-01,13.377431339769124\r
2020-09-04,13.982436088676794\r
2020-09-09,8.485302328556285\r
2020-09-14,7.22975046124992\r
2020-09-16,7.475446981273974\r
2020-09-19,6.746687281654934\r
2020-10-31,1.7766249776284895\r
2020-11-10,1.7766249776284895\r
2020-11-23,3.222210610456197\r
2020-11-25,3.222210610456197\r
2020-11-28,3.222210610456197\r
2020-12-13,3.602082022338972\r
2020-12-28,23.33622007023666\r
2021-01-24,50.231415235887454\r
2021-01-29,50.231415235887454\r
2021-02-21,79.41213222046261\r
2021-02-23,89.14451646437506\r
2021-02-26,89.14451646437506\r
2021-02-28,87.1680080724136\r
2021-03-05,95.45220418057319\r
2021-03-10,94.87282696589705\r
2021-03-20,100.0\r
2021-03-23,100.0\r
2021-03-25,98.95317762229384\r
2021-03-28,100.0\r
2021-03-30,98.3667520219209\r
2021-04-02,94.29463270862894\r
2021-04-04,94.58358181864743\r
2021-04-07,93.14180263484123\r
2021-04-09,96.90580711154702\r
2021-04-14,86.32548842887414\r
2021-04-17,89.14451646437506\r
2021-04-19,89.71195483924693\r
2021-04-22,89.71195483924693\r
2021-04-24,91.13581713190267\r
2021-04-27,91.99373324316969\r
2021-05-27,66.43604088355096\r
2021-05-29,71.37539260431942\r
2021-06-01,79.41213222046261\r
2021-06-03,84.09221781011286\r
2021-06-11,84.92739535326817\r
2021-06-13,83.25980999649413\r
2021-06-16,80.77929645305474\r
2021-06-18,83.81444034333387\r
2021-06-21,83.81444034333387\r
2021-06-26,89.71195483924693\r
2021-07-11,79.13963880952943\r
2021-07-18,79.13963880952943\r
2021-07-21,82.15425713239881\r
2021-07-23,79.41213222046261\r
2021-08-02,87.1680080724136\r
2021-08-10,86.32548842887414\r
2021-08-12,72.694826050426\r
2021-08-15,71.9021941707989\r
2021-08-17,71.9021941707989\r
2021-08-20,76.4320325348823\r
2021-08-25,79.95805953833118\r
2021-08-27,79.13963880952943\r
2021-09-01,76.16301267054652\r
2021-09-04,76.16301267054652\r
2021-09-06,69.80279713631593\r
2021-09-24,55.94798651598324\r
2021-09-26,55.94798651598324\r
2021-09-29,59.37676235652417\r
2021-10-01,59.37676235652417\r
2021-10-11,63.125503477632996\r
2021-10-14,70.84989045767738\r
2021-10-16,62.62124015597542\r
2021-10-21,66.69303806956216\r
2021-10-24,69.54184092848136\r
2021-11-30,64.39207410247579\r
2021-12-03,64.39207410247579\r
2021-12-23,60.86702673013497\r
2022-01-14,48.83480881040033\r
2022-01-19,48.83480881040033\r
2022-01-22,48.83480881040033\r
2022-01-24,54.259388779469774\r
2022-01-27,50.231415235887454\r
2022-01-29,50.231415235887454\r
2022-02-01,87.4494566279439\r
2022-02-08,84.37030302388239\r
2022-02-11,84.37030302388239\r
2022-02-13,30.93584305751517\r
2022-02-18,30.93584305751517\r
2022-02-26,61.867390208496765\r
2022-02-28,65.92304483576955\r
2022-03-03,65.92304483576955\r
2022-03-05,65.41138272925711\r
2022-03-08,68.76093986796067\r
2022-03-10,77.51128431435293\r
2022-03-23,85.20640180205984\r
2022-03-25,88.86124993760095\r
2022-03-28,88.86124993760095\r
2022-04-04,83.25980999649413\r
2022-04-14,80.23149273712063\r
2022-04-17,85.20640180205984\r
2022-04-19,85.20640180205984\r
2022-04-27,85.20640180205984\r
2022-05-02,73.22486243940395\r
2022-05-04,73.22486243940395\r
2022-05-07,73.22486243940395\r
2022-05-19,83.81444034333387\r
2022-05-27,83.81444034333387\r
2022-05-29,77.78188850727307\r
2022-06-06,76.7013699992064\r
2022-06-11,85.48571466418106\r
2022-06-13,79.13963880952943\r
2022-06-16,77.78188850727307\r
2022-06-18,75.09011662686153\r
2022-06-21,72.16608125150034\r
2022-06-23,75.62592722198418\r
2022-06-28,69.54184092848136\r
2022-07-01,83.25980999649413\r
2022-07-03,70.06408059558412\r
2022-07-06,65.15605297603125\r
2022-07-08,65.92304483576955\r
2022-07-11,66.69303806956216\r
2022-07-13,61.116605179408545\r
2022-07-16,57.40909222844477\r
2022-07-18,57.89892516621725\r
2022-07-21,55.94798651598324\r
2022-07-26,53.541027956722274\r
2022-07-28,48.60332639931097\r
2022-07-31,43.60506472503649\r
2022-08-02,36.03759587068899\r
2022-08-05,36.03759587068899\r
2022-08-07,32.13637847306324\r
2022-08-10,24.063537899032625\r
2022-08-12,19.302485246860478\r
2022-08-15,16.009531697753925\r
2022-08-17,16.009531697753925\r
2022-08-22,12.78145825408486\r
2022-08-25,9.806488739487051\r
2022-08-30,9.806488739487051\r
2022-09-01,8.874914818223928\r
2022-09-04,9.806488739487051\r
2022-09-06,15.219022588010489\r
2022-09-09,15.219022588010489\r
2022-09-11,13.678813071755675\r
2022-09-19,16.651525444900784\r
2022-09-21,13.678813071755675\r
2022-10-04,11.904734144748181\r
2022-10-06,13.07830743020952\r
2022-10-09,13.07830743020952\r
2022-10-11,12.049401791369927\r
2022-10-16,13.830345438977886\r
2022-11-18,72.43029200806134\r
2022-11-20,75.89431077590994\r
2022-11-23,75.89431077590994\r
2022-12-05,58.14436399359617\r
2023-01-17,45.175672510118076\r
2023-01-24,45.175672510118076\r
2023-02-03,50.231415235887454\r
2023-02-08,51.16978938004365\r
2023-02-11,51.16978938004365\r
2023-02-13,48.141468460384516\r
2023-02-16,47.9110940961545\r
2023-02-21,54.01957886434906\r
2023-02-26,60.1203475311758\r
2023-03-03,57.40909222844477\r
2023-03-05,60.617790662787094\r
2023-03-15,60.617790662787094\r
2023-03-28,74.82269033426098\r
2023-04-04,76.7013699992064\r
2023-04-07,76.7013699992064\r
2023-04-09,61.3665255486432\r
2023-04-19,81.60334007445161\r
2023-05-27,97.78149534658235\r
2023-05-29,100.0\r
2023-06-01,95.45220418057319\r
2023-06-03,98.07397742494925\r
2023-06-06,97.1974099001766\r
2023-06-08,96.32348285845939\r
2023-06-16,100.0\r
2023-06-23,93.71762379724966\r
2023-06-26,100.0\r
2023-06-28,100.0\r
2023-07-06,87.7312089809416\r
2023-07-08,92.28030321362844\r
`;export{n as default};