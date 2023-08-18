const r=`date,value\r
2017-01-26,45.12422370222074\r
2017-01-29,45.12422370222074\r
2017-02-25,46.96573665862533\r
2017-03-07,46.96573665862533\r
2017-03-17,63.338661676139054\r
2017-03-27,71.26956470742093\r
2017-03-30,70.89062329810784\r
2017-04-06,72.03038892088736\r
2017-04-09,69.38466587963296\r
2017-05-16,78.65557793197259\r
2017-05-19,78.65557793197259\r
2017-05-26,81.26344907764836\r
2017-06-05,80.85955105224343\r
2017-06-15,75.11288217823093\r
2017-06-25,77.26844676778488\r
2017-07-03,77.46587485596805\r
2017-07-05,79.45360203137113\r
2017-08-04,31.683671179721706\r
2017-08-07,31.683671179721706\r
2017-08-14,58.93664994650572\r
2017-08-17,55.86257596927504\r
2017-08-19,58.07472415839571\r
2017-08-22,58.07472415839571\r
2017-08-24,58.07472415839571\r
2017-08-27,48.68518025349262\r
2017-08-29,49.15932608401768\r
2017-09-03,42.13455248252406\r
2017-10-08,40.677042739505225\r
2017-10-11,40.677042739505225\r
2017-10-13,40.677042739505225\r
2017-10-16,40.677042739505225\r
2017-10-18,41.25705793321209\r
2017-10-28,38.39686724736415\r
2017-10-31,37.55826915967732\r
2017-11-02,37.55826915967732\r
2017-11-07,37.55826915967732\r
2017-11-15,29.791913556453675\r
2017-11-17,42.42904231721649\r
2017-11-20,42.42904231721649\r
2017-11-22,46.1940948575975\r
2017-11-25,46.1940948575975\r
2017-11-27,38.116335869691504\r
2017-12-05,35.23108891450952\r
2018-02-10,68.63757425733331\r
2018-02-25,76.87432426199223\r
2018-03-02,76.87432426199223\r
2018-03-07,76.87432426199223\r
2018-03-22,97.77597989284098\r
2018-03-30,97.77597989284098\r
2018-04-01,97.77597989284098\r
2018-05-06,79.25372943415545\r
2018-05-11,98.21884142993646\r
2018-05-19,93.83395897720015\r
2018-05-21,94.0508941005005\r
2018-05-26,88.48965311649013\r
2018-06-20,86.39454325128804\r
2018-06-23,86.39454325128804\r
2018-06-25,94.70315830702735\r
2018-06-28,94.70315830702735\r
2018-07-03,100.0\r
2018-07-08,88.48965311649013\r
2018-07-10,97.55491342810353\r
2018-07-15,100.0\r
2018-07-18,100.0\r
2018-07-20,98.21884142993646\r
2018-07-23,89.12293673348687\r
2018-07-25,86.60295762557517\r
2018-07-30,76.48118010548242\r
2018-08-02,77.46587485596805\r
2018-08-04,67.33961251630305\r
2018-08-12,69.38466587963296\r
2018-08-19,59.109774669644366\r
2018-08-22,59.109774669644366\r
2018-08-27,59.109774669644366\r
2018-09-03,59.804738076157605\r
2018-09-08,62.268146170388775\r
2018-09-11,62.268146170388775\r
2018-09-16,51.401485129165735\r
2018-09-18,60.503643696260326\r
2018-09-23,60.503643696260326\r
2018-09-26,60.503643696260326\r
2018-09-28,60.67898591516613\r
2018-10-03,56.878385844747605\r
2018-10-06,56.878385844747605\r
2018-11-17,48.84298102119981\r
2018-11-20,48.84298102119981\r
2018-11-22,48.84298102119981\r
2018-11-27,48.84298102119981\r
2019-01-16,61.38281742154903\r
2019-01-24,61.38281742154903\r
2019-02-15,82.48100316701003\r
2019-02-18,82.48100316701003\r
2019-02-20,84.52978489568015\r
2019-02-23,84.52978489568015\r
2019-02-25,78.65557793197259\r
2019-03-05,80.85955105224343\r
2019-03-07,80.85955105224343\r
2019-03-12,76.67762988092541\r
2019-03-22,78.25803235213012\r
2019-03-25,78.25803235213012\r
2019-03-27,79.85408026259576\r
2019-03-30,79.85408026259576\r
2019-04-09,73.37126510362977\r
2019-05-01,77.86146461174145\r
2019-05-06,77.86146461174145\r
2019-05-11,77.86146461174145\r
2019-05-14,77.86146461174145\r
2019-05-16,77.86146461174145\r
2019-05-31,68.26550076000161\r
2019-06-08,68.26550076000161\r
2019-06-13,68.26550076000161\r
2019-07-05,73.94960051412104\r
2019-07-08,73.94960051412104\r
2019-07-10,74.72414241333922\r
2019-07-13,74.72414241333922\r
2019-07-15,70.51266255725746\r
2019-07-23,72.60358020284846\r
2019-07-25,63.338661676139054\r
2019-08-02,39.528974593799944\r
2019-08-04,39.528974593799944\r
2019-08-09,31.046805209918123\r
2019-08-14,30.4162180802374\r
2019-08-17,30.4162180802374\r
2019-08-22,35.90805296708286\r
2019-08-24,30.165742145715363\r
2019-08-29,30.4162180802374\r
2019-09-03,29.296995971372432\r
2019-09-06,29.296995971372432\r
2019-09-11,26.06168911755473\r
2019-09-13,26.06168911755473\r
2019-09-16,26.06168911755473\r
2019-09-18,26.06168911755473\r
2019-09-21,21.39502906762575\r
2019-10-08,24.343775009315575\r
2019-10-11,24.343775009315575\r
2019-10-13,26.06168911755473\r
2020-01-11,72.03038892088736\r
2020-01-14,72.03038892088736\r
2020-01-16,73.56379867793773\r
2020-01-19,73.56379867793773\r
2020-01-21,73.56379867793773\r
2020-02-05,84.52978489568015\r
2020-02-15,89.33451836105766\r
2020-02-20,78.25803235213012\r
2020-02-23,81.87112750269407\r
2020-03-21,87.22966310312725\r
2020-03-24,87.22966310312725\r
2020-03-29,87.22966310312725\r
2020-03-31,87.22966310312725\r
2020-04-03,87.22966310312725\r
2020-04-05,91.67798463359479\r
2020-04-08,80.85955105224343\r
2020-04-10,94.48549378178981\r
2020-04-13,94.48549378178981\r
2020-04-15,84.52978489568015\r
2020-04-18,84.52978489568015\r
2020-04-25,93.83395897720015\r
2020-05-20,83.91258853053564\r
2020-05-25,89.33451836105766\r
2020-05-28,89.33451836105766\r
2020-05-30,84.3238088409519\r
2020-06-02,84.3238088409519\r
2020-06-14,88.48965311649013\r
2020-06-24,93.40081824732106\r
2020-06-27,93.40081824732106\r
2020-07-04,93.40081824732106\r
2020-07-07,93.40081824732106\r
2020-07-09,94.0508941005005\r
2020-07-19,85.56332346970575\r
2020-07-24,83.09307559417731\r
2020-07-27,84.73600486023057\r
2020-07-29,80.65796837022235\r
2020-08-03,80.65796837022235\r
2020-08-06,85.35612803928338\r
2020-08-08,78.65557793197259\r
2020-08-11,86.39454325128804\r
2020-08-16,77.0712632303734\r
2020-09-02,65.68848407582067\r
2020-09-05,65.68848407582067\r
2020-09-07,74.33638180901579\r
2020-09-10,74.33638180901579\r
2020-09-12,61.38281742154903\r
2020-09-15,61.38281742154903\r
2020-09-17,62.62400049908694\r
2020-09-30,58.41875482332115\r
2020-10-17,62.80229675903981\r
2020-10-30,62.80229675903981\r
2020-11-21,72.03038892088736\r
2020-11-26,72.22120765390952\r
2020-11-29,72.22120765390952\r
2020-12-26,81.87112750269407\r
2021-01-10,83.91258853053564\r
2021-01-18,83.91258853053564\r
2021-02-14,97.33408985398431\r
2021-02-17,97.33408985398431\r
2021-02-19,98.21884142993646\r
2021-02-24,95.57624725745184\r
2021-02-27,99.55325374951923\r
2021-03-01,89.54634350477558\r
2021-03-04,96.67307663626723\r
2021-03-09,85.35612803928338\r
2021-03-21,78.45668292117657\r
2021-03-24,78.45668292117657\r
2021-03-29,78.45668292117657\r
2021-03-31,93.40081824732106\r
2021-04-03,87.64868521264263\r
2021-04-05,93.40081824732106\r
2021-04-08,93.40081824732106\r
2021-04-13,91.24970921827833\r
2021-04-15,92.10723337682612\r
2021-04-23,89.12293673348687\r
2021-05-30,87.64868521264263\r
2021-06-09,87.64868521264263\r
2021-06-14,91.03593655019216\r
2021-06-19,91.03593655019216\r
2021-07-19,85.14917644936236\r
2021-07-22,85.14917644936236\r
2021-08-23,81.26344907764836\r
2021-08-26,81.26344907764836\r
2021-08-28,91.46372525163167\r
2021-08-31,91.46372525163167\r
2021-09-05,80.25553575660706\r
2021-09-07,80.25553575660706\r
2021-09-12,78.8547173664355\r
2021-09-15,78.8547173664355\r
2021-09-17,79.05410120650748\r
2021-09-22,79.05410120650748\r
2021-10-12,74.53013970681258\r
2021-10-15,74.53013970681258\r
2021-10-17,80.65796837022235\r
2021-10-20,80.65796837022235\r
2021-10-27,72.79513398096215\r
2021-12-11,97.11350918656646\r
2021-12-14,97.11350918656646\r
2021-12-16,100.0\r
2021-12-19,100.0\r
2021-12-21,100.0\r
2022-01-25,84.3238088409519\r
2022-02-09,75.50260095525054\r
2022-03-26,87.43905232349127\r
2022-04-05,100.0\r
2022-04-10,100.0\r
2022-04-15,97.99728923213317\r
2022-04-30,96.67307663626723\r
2022-05-05,96.67307663626723\r
2022-05-08,96.67307663626723\r
2022-05-10,96.67307663626723\r
2022-05-30,91.24970921827833\r
2022-07-14,87.02051756862106\r
2022-07-17,81.87112750269407\r
2022-07-19,83.50234406836064\r
2022-07-22,83.50234406836064\r
2022-07-24,81.66832386639979\r
2022-08-01,64.59878800769174\r
2022-08-03,64.59878800769174\r
2022-08-06,50.59514245692529\r
2022-08-08,55.525947483577866\r
2022-08-11,55.525947483577866\r
2022-08-13,45.12422370222074\r
2022-08-28,29.91627167056146\r
2022-08-31,29.91627167056146\r
2022-09-05,29.91627167056146\r
2022-09-12,30.165742145715363\r
2022-09-15,30.165742145715363\r
2022-09-20,30.165742145715363\r
2022-09-22,30.165742145715363\r
2022-10-07,17.945185622147644\r
2022-10-12,17.945185622147644\r
2022-10-15,17.945185622147644\r
2022-11-06,24.23126969468172\r
2022-11-11,24.343775009315575\r
2022-11-16,23.895271761574634\r
2022-12-11,22.465613341155276\r
2022-12-16,22.465613341155276\r
2023-01-10,33.1068595377688\r
2023-01-15,33.1068595377688\r
2023-01-18,33.1068595377688\r
2023-01-20,33.1068595377688\r
2023-02-04,47.276130486700886\r
2023-02-09,52.70450123014805\r
2023-02-12,52.70450123014805\r
2023-02-14,47.89989499064801\r
2023-02-17,53.85762396283125\r
2023-02-19,47.74358181813915\r
2023-02-27,46.96573665862533\r
2023-03-01,53.19721333578966\r
2023-03-09,53.19721333578966\r
2023-04-05,61.5593908521162\r
2023-04-08,61.5593908521162\r
2023-04-15,71.26956470742093\r
2023-04-20,74.1428687385696\r
2023-05-30,74.33638180901579\r
2023-06-02,74.33638180901579\r
2023-06-04,74.33638180901579\r
2023-06-07,74.33638180901579\r
2023-07-09,74.33638180901579\r
2023-07-14,66.97097583006844\r
2023-07-22,53.52692427331795\r
`;export{r as default};
