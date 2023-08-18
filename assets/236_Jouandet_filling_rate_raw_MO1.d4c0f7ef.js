const n=`date,value\r
2017-02-15,82.26017216239951\r
2017-02-18,71.03714669839722\r
2017-02-25,80.10450910657214\r
2017-03-10,85.09000076807925\r
2017-03-17,92.7669901881924\r
2017-03-30,94.1222652055895\r
2017-04-09,81.87779441918764\r
2017-04-19,74.89496912623929\r
2017-04-29,86.13024459111871\r
2017-05-09,100.0\r
2017-05-16,98.79965681887842\r
2017-05-26,93.44346581363006\r
2017-06-18,100.0\r
2017-07-05,100.0\r
2017-07-18,93.85046665529511\r
2017-08-02,75.87448717119308\r
2017-08-04,84.83087389888692\r
2017-08-07,78.34959501169561\r
2017-08-14,80.60928839796475\r
2017-08-17,67.1599544969471\r
2017-08-22,61.704453873497634\r
2017-09-01,69.85137621559367\r
2017-10-08,67.39200545650087\r
2017-10-11,68.55793564777136\r
2017-10-13,71.75313802385723\r
2017-10-16,69.733318387639\r
2017-10-18,67.85724266593132\r
2017-10-26,69.85137621559367\r
2017-10-28,68.55793564777136\r
2017-10-31,68.44091711944095\r
2017-11-17,73.43698217572286\r
2017-11-22,72.71307316618487\r
2017-11-27,70.56170590256612\r
2017-12-25,80.73571748737335\r
2018-01-09,82.6433922665232\r
2018-01-24,87.83338305121954\r
2018-02-10,82.51555864927951\r
2018-02-25,83.54084716559639\r
2018-03-07,93.17259666025544\r
2018-03-15,81.36926813557197\r
2018-03-22,99.7759565685939\r
2018-04-19,81.11556686786\r
2018-04-21,90.88522868791516\r
2018-05-06,78.22494756710564\r
2018-05-11,100.0\r
2018-05-21,79.60122950466787\r
2018-06-20,95.48683164377073\r
2018-06-23,100.0\r
2018-06-25,96.72287960742109\r
2018-07-08,88.22865393315206\r
2018-07-10,93.85046665529511\r
2018-07-13,90.21759176361557\r
2018-07-18,82.00516005813512\r
2018-07-23,86.52187671748175\r
2018-07-25,84.96039061758324\r
2018-07-30,81.75052239955286\r
2018-08-02,76.36650262306547\r
2018-08-04,72.95399936287566\r
2018-08-12,69.85137621559367\r
2018-08-19,66.46607304924353\r
2018-08-22,62.59852070007883\r
2018-08-27,53.72340315039988\r
2018-09-01,52.68502356226617\r
2018-09-03,50.2320534631678\r
2018-09-08,57.54080728821228\r
2018-09-11,59.386488740523866\r
2018-09-16,50.13104705086281\r
2018-09-26,56.467992074398744\r
2018-09-28,64.51859284819804\r
2018-10-03,61.25970177263046\r
2018-10-06,60.927136260288826\r
2018-10-23,60.927136260288826\r
2018-11-15,64.74628646399393\r
2018-11-17,68.79225627192297\r
2018-11-22,61.704453873497634\r
2018-11-27,65.66085297282672\r
2019-01-09,68.55793564777136\r
2019-01-16,78.22494756710564\r
2019-01-19,80.35671132306273\r
2019-02-03,91.95828809966866\r
2019-02-13,69.733318387639\r
2019-02-15,83.92687360885085\r
2019-02-20,76.73650096674429\r
2019-02-23,70.91814496284034\r
2019-02-25,81.75052239955286\r
2019-03-20,70.56170590256612\r
2019-03-22,78.5991714226435\r
2019-03-25,86.39123932562269\r
2019-03-27,89.55228303899678\r
2019-03-30,78.5991714226435\r
2019-05-01,80.86224026746336\r
2019-05-14,88.88930344913628\r
2019-05-31,78.97423972211749\r
2019-06-18,100.0\r
2019-06-25,69.96952847316538\r
2019-07-05,92.7669901881924\r
2019-07-08,85.99988726379723\r
2019-07-10,89.15421572889679\r
2019-07-15,96.72287960742109\r
2019-07-25,81.49625924983316\r
2019-08-02,73.55796333380675\r
2019-08-04,86.26069528094888\r
2019-08-14,84.4428844109614\r
2019-08-17,79.35015224746857\r
2019-08-22,76.61307422531713\r
2019-08-24,83.79810462352185\r
2019-09-03,82.38781861194975\r
2019-09-13,79.09945010511026\r
2019-09-16,74.28582745603374\r
2019-09-18,52.478497945754576\r
2019-10-08,73.43698217572286\r
2019-10-11,72.8334891566829\r
2019-10-13,77.107344853796\r
2019-12-05,86.13024459111871\r
2019-12-15,57.86451314174471\r
2019-12-17,72.71307316618487\r
2019-12-27,74.28582745603374\r
2019-12-30,71.39471793132289\r
2020-01-06,88.09680372174917\r
2020-01-11,80.86224026746336\r
2020-01-14,77.85156837416818\r
2020-01-16,73.07460377631352\r
2020-01-19,70.44308162660109\r
2020-02-03,66.00537898802054\r
2020-02-05,86.13024459111871\r
2020-02-15,73.43698217572286\r
2020-02-20,82.6433922665232\r
2020-03-21,82.89934020932557\r
2020-03-24,75.01707971302342\r
2020-03-26,76.86002165743\r
2020-03-31,94.93989056352655\r
2020-04-03,77.60311827746766\r
2020-04-05,83.28396377665123\r
2020-04-08,89.95118883753214\r
2020-04-10,85.09000076807925\r
2020-04-15,90.48436720160305\r
2020-05-08,88.88930344913628\r
2020-05-18,90.21759176361557\r
2020-05-20,84.4428844109614\r
2020-05-25,96.8606822501835\r
2020-05-28,91.68946490998677\r
2020-05-30,85.6093755336374\r
2020-06-19,61.704453873497634\r
2020-06-24,83.6694291398386\r
2020-07-09,86.26069528094888\r
2020-07-19,81.11556686786\r
2020-07-24,70.79923757928822\r
2020-07-27,78.34959501169561\r
2020-08-06,65.31717968142844\r
2020-08-08,71.51409698916704\r
2020-09-02,62.37443385102617\r
2020-09-05,66.23553661402465\r
2020-09-10,69.733318387639\r
2020-09-12,66.58148329799161\r
2020-09-30,69.14444599572775\r
2020-10-17,81.36926813557197\r
2020-10-30,84.83087389888692\r
2020-11-14,73.67903865700895\r
2020-11-21,79.97854859020511\r
2020-11-26,76.24335777867371\r
2020-11-29,65.20281145374999\r
2020-12-26,67.7407914743659\r
2021-01-03,86.78343151215587\r
2021-01-10,79.35015224746857\r
2021-01-18,77.60311827746766\r
2021-02-17,95.62379903598396\r
2021-02-19,80.98885673027607\r
2021-02-24,96.44755265969401\r
2021-03-01,80.48295300720345\r
2021-03-04,82.38781861194975\r
2021-03-21,84.31374149686353\r
2021-03-24,76.36650262306547\r
2021-03-29,79.60122950466787\r
2021-03-31,87.04535960383876\r
2021-04-03,79.60122950466787\r
2021-04-05,87.96504675858108\r
2021-04-15,88.49263407040795\r
2021-04-23,85.09000076807925\r
2021-05-03,80.23056335352304\r
2021-05-08,84.05573608803726\r
2021-06-09,79.85268181242436\r
2021-06-14,88.09680372174917\r
2021-07-17,84.4428844109614\r
2021-07-22,79.22475428291196\r
2021-08-11,89.4195007602506\r
2021-08-26,79.47564399073359\r
2021-08-31,77.35504374892969\r
2021-09-05,78.97423972211749\r
2021-09-12,81.62334400713195\r
2021-09-25,71.87279998363174\r
2021-10-12,77.35504374892969\r
2021-10-15,73.80020813692823\r
2021-10-17,76.48974144135336\r
2021-10-27,68.90955835024889\r
2021-11-19,74.52920183804709\r
2021-12-14,79.97854859020511\r
2021-12-16,74.52920183804709\r
2021-12-19,70.68042455633072\r
2021-12-21,78.5991714226435\r
2022-01-15,68.67504870151603\r
2022-01-23,78.22494756710564\r
2022-01-25,79.35015224746857\r
2022-02-09,77.85156837416818\r
2022-02-27,83.6694291398386\r
2022-03-09,74.04282953335363\r
2022-03-19,77.4790340631036\r
2022-03-21,76.98363628917706\r
2022-03-24,77.4790340631036\r
2022-03-26,82.77131945582235\r
2022-04-05,79.22475428291196\r
2022-05-08,80.98885673027607\r
2022-05-10,86.26069528094888\r
2022-05-28,81.62334400713195\r
2022-05-30,89.4195007602506\r
2022-06-17,80.48295300720345\r
2022-07-02,89.15421572889679\r
2022-07-12,92.09283924541256\r
2022-07-14,90.88522868791516\r
2022-07-17,89.68515848312032\r
2022-07-24,84.4428844109614\r
2022-07-27,69.02695492775915\r
2022-08-01,76.36650262306547\r
2022-08-06,70.44308162660109\r
2022-08-08,68.0904287745855\r
2022-08-11,63.837788387510194\r
2022-08-13,57.003206222850544\r
2022-09-05,49.426694797076074\r
2022-09-15,51.145435943312144\r
2022-09-20,50.63704034650759\r
2022-09-22,53.20301542255324\r
2022-10-05,50.434354678966805\r
2022-10-12,56.041540156685734\r
2022-10-15,59.495916079350906\r
2022-10-30,67.97378843560598\r
2022-11-06,63.16040003707809\r
2022-11-16,64.63239224196404\r
2022-12-21,75.01707971302342\r
2023-01-03,80.98885673027607\r
2023-01-18,78.47433629957443\r
2023-02-02,73.92147176517152\r
2023-02-04,87.17646361698391\r
2023-02-09,78.34959501169561\r
2023-02-12,78.10039397391071\r
2023-02-17,85.99988726379723\r
2023-02-19,90.75151509182959\r
2023-02-24,64.17776372719321\r
2023-03-01,89.28681165438181\r
2023-03-09,80.23056335352304\r
2023-04-05,95.21317539146739\r
2023-05-28,99.35698652557618\r
2023-05-30,88.75698710990605\r
2023-06-02,88.22865393315206\r
2023-06-24,92.36222060181156\r
2023-07-07,89.81812708512778\r
2023-07-14,76.61307422531713\r
2023-07-17,78.34959501169561\r
2023-07-22,87.17646361698391\r
`;export{n as default};
