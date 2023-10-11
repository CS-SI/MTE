const r=`date,value\r
2017-02-25,77.3944326338482\r
2017-03-07,77.3944326338482\r
2017-03-14,77.3944326338482\r
2017-03-17,85.34639419415697\r
2017-03-27,83.74477633370333\r
2017-04-03,77.3944326338482\r
2017-04-06,77.3944326338482\r
2017-04-23,79.7651342624836\r
2017-05-03,79.7651342624836\r
2017-05-16,89.37425950275352\r
2017-05-23,89.37425950275352\r
2017-05-26,91.80699687933046\r
2017-06-02,94.25149819381446\r
2017-06-05,89.37425950275352\r
2017-06-12,73.47253754513669\r
2017-06-25,90.99476745708567\r
2017-07-02,90.99476745708567\r
2017-07-05,99.17501889307464\r
2017-07-07,99.17501889307464\r
2017-07-10,99.17501889307464\r
2017-07-12,99.17501889307464\r
2017-07-17,78.18322176894718\r
2017-08-04,75.0368466600186\r
2017-08-06,84.54489653245919\r
2017-08-11,84.54489653245919\r
2017-08-14,74.2539440257335\r
2017-08-19,75.82123548811269\r
2017-08-21,80.5582392691555\r
2017-08-24,79.7651342624836\r
2017-08-26,80.5582392691555\r
2017-08-29,85.34639419415697\r
2017-09-03,70.36207782170428\r
2017-09-05,70.36207782170428\r
2017-09-08,69.58830702645142\r
2017-09-20,62.695911501670395\r
2017-09-23,80.5582392691555\r
2017-09-28,80.5582392691555\r
2017-10-03,80.5582392691555\r
2017-10-05,71.91425365754823\r
2017-10-08,78.18322176894718\r
2017-10-10,71.91425365754823\r
2017-10-13,75.0368466600186\r
2017-10-15,72.69263733196291\r
2017-10-18,71.13739695470122\r
2017-10-25,68.81609551072764\r
2017-10-28,62.695911501670395\r
2017-10-30,72.69263733196291\r
2017-11-07,64.2162070858699\r
2017-11-14,68.04545439463683\r
2017-11-17,67.27639498118421\r
2017-11-19,73.47253754513669\r
2017-11-22,66.50892876102037\r
2017-11-24,66.50892876102037\r
2017-11-27,72.69263733196291\r
2017-11-29,63.45523247400161\r
2017-12-09,72.69263733196291\r
2017-12-14,72.69263733196291\r
2017-12-19,72.69263733196291\r
2018-02-02,67.27639498118421\r
2018-02-10,78.97345872607659\r
2018-02-12,78.97345872607659\r
2018-03-14,75.82123548811269\r
2018-03-19,75.82123548811269\r
2018-03-22,84.54489653245919\r
2018-04-01,89.37425950275352\r
2018-04-21,94.25149819381446\r
2018-04-23,94.25149819381446\r
2018-04-26,91.80699687933046\r
2018-05-06,92.62053334247065\r
2018-05-11,86.14926106683727\r
2018-05-18,86.14926106683727\r
2018-05-21,94.25149819381446\r
2018-05-23,84.54489653245919\r
2018-06-20,87.75906999547234\r
2018-06-22,89.37425950275352\r
2018-06-25,86.14926106683727\r
2018-06-27,86.14926106683727\r
2018-07-02,86.14926106683727\r
2018-07-07,87.75906999547234\r
2018-07-10,77.3944326338482\r
2018-07-12,76.60710070036613\r
2018-07-15,86.14926106683727\r
2018-07-17,86.14926106683727\r
2018-07-20,86.14926106683727\r
2018-07-22,86.95348901064592\r
2018-07-25,82.14870190803967\r
2018-07-27,86.14926106683727\r
2018-07-30,86.14926106683727\r
2018-08-01,81.35276476782059\r
2018-08-04,81.35276476782059\r
2018-08-06,84.54489653245919\r
2018-08-11,78.97345872607659\r
2018-08-16,82.94604196438505\r
2018-08-19,85.34639419415697\r
2018-08-21,75.0368466600186\r
2018-08-26,86.14926106683727\r
2018-08-31,73.47253754513669\r
2018-09-03,73.47253754513669\r
2018-09-08,86.14926106683727\r
2018-09-10,73.47253754513669\r
2018-09-13,75.82123548811269\r
2018-09-20,76.60710070036613\r
2018-09-23,84.54489653245919\r
2018-09-25,89.37425950275352\r
2018-09-28,82.94604196438505\r
2018-09-30,82.94604196438505\r
2018-10-03,87.75906999547234\r
2018-10-05,79.7651342624836\r
2018-10-20,72.69263733196291\r
2018-10-23,72.69263733196291\r
2018-10-25,72.69263733196291\r
2018-10-30,72.69263733196291\r
2018-11-19,65.74306741735462\r
2018-11-22,73.47253754513669\r
2018-11-24,73.47253754513669\r
2018-11-27,73.47253754513669\r
2018-11-29,65.74306741735462\r
2018-12-19,65.74306741735462\r
2018-12-27,65.74306741735462\r
2018-12-29,65.74306741735462\r
2019-01-03,38.663695312309045\r
2019-01-11,38.663695312309045\r
2019-01-16,51.51376793207669\r
2019-01-23,43.58104451790176\r
2019-01-28,43.58104451790176\r
2019-02-12,42.1652424524581\r
2019-02-15,47.15694270681522\r
2019-02-17,42.1652424524581\r
2019-02-20,50.78280641844106\r
2019-02-22,45.72044988800682\r
2019-02-25,46.43768759427918\r
2019-02-27,45.72044988800682\r
2019-03-12,47.878195575286675\r
2019-03-22,54.45633091949477\r
2019-03-24,48.60142698135489\r
2019-03-27,52.98133935333475\r
2019-03-29,52.98133935333475\r
2019-04-01,50.78280641844106\r
2019-04-08,50.78280641844106\r
2019-04-13,48.60142698135489\r
2019-05-01,29.833956143841746\r
2019-05-06,49.32661812401388\r
2019-05-11,49.32661812401388\r
2019-05-13,35.90312929248089\r
2019-05-16,35.90312929248089\r
2019-05-23,40.05768836419638\r
2019-05-31,53.71791577895328\r
2019-06-02,38.663695312309045\r
2019-06-12,50.05375060560156\r
2019-06-17,50.05375060560156\r
2019-06-22,50.05375060560156\r
2019-06-25,50.05375060560156\r
2019-06-27,50.05375060560156\r
2019-06-30,50.05375060560156\r
2019-07-02,50.05375060560156\r
2019-07-05,64.2162070858699\r
2019-07-07,64.2162070858699\r
2019-07-10,64.2162070858699\r
2019-07-12,65.74306741735462\r
2019-07-15,66.50892876102037\r
2019-07-17,63.45523247400161\r
2019-07-22,54.45633091949477\r
2019-07-25,58.175440948663805\r
2019-08-01,58.175440948663805\r
2019-08-04,50.78280641844106\r
2019-08-09,50.78280641844106\r
2019-08-11,53.71791577895328\r
2019-08-14,52.246617881071344\r
2019-08-16,52.246617881071344\r
2019-08-21,55.196568857762884\r
2019-08-24,58.175440948663805\r
2019-08-26,55.938613987977334\r
2019-08-29,55.938613987977334\r
2019-08-31,43.58104451790176\r
2019-09-03,44.29210754846291\r
2019-09-05,44.29210754846291\r
2019-09-13,48.60142698135489\r
2019-09-15,45.72044988800682\r
2019-09-18,52.246617881071344\r
2019-09-20,52.246617881071344\r
2019-10-05,48.60142698135489\r
2019-10-08,41.46054806717109\r
2019-10-13,50.05375060560156\r
2019-10-25,45.72044988800682\r
2020-01-06,36.589776217082814\r
2020-01-11,51.51376793207669\r
2020-01-16,39.35957110660336\r
2020-01-18,41.46054806717109\r
2020-02-05,33.85756608887877\r
2020-02-07,33.85756608887877\r
2020-02-15,37.970086589958\r
2020-02-20,33.85756608887877\r
2020-02-22,31.164847182122436\r
2020-03-01,31.164847182122436\r
2020-03-08,30.498083250206097\r
2020-03-18,41.46054806717109\r
2020-03-21,46.43768759427918\r
2020-03-28,46.43768759427918\r
2020-03-31,46.43768759427918\r
2020-04-05,56.68245100635794\r
2020-04-07,59.67542196013403\r
2020-04-10,58.175440948663805\r
2020-04-12,58.92456469553253\r
2020-04-15,55.938613987977334\r
2020-04-25,61.182281606357755\r
2020-05-17,48.60142698135489\r
2020-05-20,63.45523247400161\r
2020-05-22,49.32661812401388\r
2020-05-25,55.196568857762884\r
2020-05-27,50.78280641844106\r
2020-05-30,52.246617881071344\r
2020-06-21,35.90312929248089\r
2020-06-24,63.45523247400161\r
2020-06-26,52.98133935333475\r
2020-07-01,52.98133935333475\r
2020-07-04,57.42806490209179\r
2020-07-09,61.182281606357755\r
2020-07-11,50.78280641844106\r
2020-07-14,65.74306741735462\r
2020-07-19,45.005249685681946\r
2020-07-21,43.58104451790176\r
2020-07-24,45.72044988800682\r
2020-07-26,42.1652424524581\r
2020-07-29,55.196568857762884\r
2020-07-31,49.32661812401388\r
2020-08-03,49.32661812401388\r
2020-08-05,45.72044988800682\r
2020-08-08,52.246617881071344\r
2020-08-10,54.45633091949477\r
2020-08-15,45.005249685681946\r
2020-08-20,47.878195575286675\r
2020-08-23,54.45633091949477\r
2020-08-25,51.51376793207669\r
2020-09-02,40.75802212804562\r
2020-09-04,41.46054806717109\r
2020-09-07,28.513762564678398\r
2020-09-12,31.834211870234945\r
2020-09-14,35.90312929248089\r
2020-09-17,33.85756608887877\r
2020-09-19,39.35957110660336\r
2020-10-17,40.75802212804562\r
2020-10-24,40.75802212804562\r
2020-11-01,40.75802212804562\r
2020-11-06,37.970086589958\r
2020-11-08,40.75802212804562\r
2020-11-11,33.85756608887877\r
2020-11-18,34.53699450494669\r
2020-11-21,34.53699450494669\r
2020-11-23,32.50614235326084\r
2020-11-26,32.50614235326084\r
2020-12-18,46.43768759427918\r
2021-02-06,69.58830702645142\r
2021-02-11,69.58830702645142\r
2021-02-14,84.54489653245919\r
2021-02-19,82.94604196438505\r
2021-02-24,79.7651342624836\r
2021-03-01,71.91425365754823\r
2021-03-23,78.18322176894718\r
2021-03-26,78.18322176894718\r
2021-03-28,86.95348901064592\r
2021-03-31,85.34639419415697\r
2021-04-02,90.18385249337797\r
2021-04-05,80.5582392691555\r
2021-04-07,79.7651342624836\r
2021-04-15,84.54489653245919\r
2021-04-17,90.18385249337797\r
2021-04-20,90.18385249337797\r
2021-04-22,90.18385249337797\r
2021-05-27,75.0368466600186\r
2021-05-30,86.14926106683727\r
2021-06-09,79.7651342624836\r
2021-06-11,81.35276476782059\r
2021-06-14,82.94604196438505\r
2021-06-16,93.43536952383053\r
2021-06-19,83.74477633370333\r
2021-06-21,90.18385249337797\r
2021-06-26,77.3944326338482\r
2021-07-01,75.82123548811269\r
2021-07-09,72.69263733196291\r
2021-08-10,80.5582392691555\r
2021-08-13,80.5582392691555\r
2021-08-18,80.5582392691555\r
2021-08-20,81.35276476782059\r
2021-08-23,78.97345872607659\r
2021-08-25,72.69263733196291\r
2021-08-28,72.69263733196291\r
2021-08-30,69.58830702645142\r
2021-09-04,69.58830702645142\r
2021-09-07,80.5582392691555\r
2021-09-14,68.04545439463683\r
2021-09-17,68.81609551072764\r
2021-09-22,68.81609551072764\r
2021-09-24,72.69263733196291\r
2021-09-29,74.2539440257335\r
2021-10-07,60.42799882019755\r
2021-10-12,70.36207782170428\r
2021-10-14,62.695911501670395\r
2021-10-17,62.695911501670395\r
2021-10-24,64.9788228310444\r
2021-10-27,64.9788228310444\r
2021-12-16,64.9788228310444\r
2021-12-18,73.47253754513669\r
2021-12-21,71.91425365754823\r
2021-12-23,73.47253754513669\r
2022-01-05,68.04545439463683\r
2022-01-12,68.04545439463683\r
2022-01-15,74.2539440257335\r
2022-01-17,71.13739695470122\r
2022-01-22,73.47253754513669\r
2022-01-25,70.36207782170428\r
2022-01-27,60.42799882019755\r
2022-01-30,60.42799882019755\r
2022-02-01,60.42799882019755\r
2022-02-06,62.695911501670395\r
2022-02-09,73.47253754513669\r
2022-02-26,73.47253754513669\r
2022-03-01,73.47253754513669\r
2022-03-03,73.47253754513669\r
2022-03-08,73.47253754513669\r
2022-03-23,76.60710070036613\r
2022-03-26,82.94604196438505\r
2022-04-05,94.25149819381446\r
2022-04-10,90.18385249337797\r
2022-04-15,86.95348901064592\r
2022-04-17,78.18322176894718\r
2022-04-27,71.91425365754823\r
2022-04-30,89.37425950275352\r
2022-05-07,89.37425950275352\r
2022-05-15,88.56599609865535\r
2022-05-17,89.37425950275352\r
2022-05-20,89.37425950275352\r
2022-05-22,89.37425950275352\r
2022-05-27,77.3944326338482\r
2022-05-30,75.82123548811269\r
2022-06-01,67.27639498118421\r
2022-06-04,67.27639498118421\r
2022-06-06,75.82123548811269\r
2022-06-11,83.74477633370333\r
2022-06-14,82.14870190803967\r
2022-06-16,82.14870190803967\r
2022-06-19,85.34639419415697\r
2022-06-29,96.70756819754855\r
2022-07-01,75.0368466600186\r
2022-07-04,75.0368466600186\r
2022-07-06,76.60710070036613\r
2022-07-11,75.82123548811269\r
2022-07-14,75.82123548811269\r
2022-07-16,77.3944326338482\r
2022-07-19,89.37425950275352\r
2022-07-21,81.35276476782059\r
2022-07-24,89.37425950275352\r
2022-07-26,82.94604196438505\r
2022-07-29,90.99476745708567\r
2022-07-31,86.95348901064592\r
2022-08-03,91.80699687933046\r
2022-08-05,86.14926106683727\r
2022-08-08,94.25149819381446\r
2022-08-10,86.95348901064592\r
2022-08-13,86.14926106683727\r
2022-08-15,88.56599609865535\r
2022-08-20,88.56599609865535\r
2022-08-23,81.35276476782059\r
2022-08-28,96.70756819754855\r
2022-08-30,96.70756819754855\r
2022-09-02,96.70756819754855\r
2022-09-04,97.52879632444488\r
2022-09-12,97.52879632444488\r
2022-09-19,90.18385249337797\r
2022-09-22,84.54489653245919\r
2022-10-02,83.74477633370333\r
2022-10-04,75.82123548811269\r
2022-10-07,91.80699687933046\r
2022-10-09,78.18322176894718\r
2022-10-12,78.18322176894718\r
2022-10-22,82.14870190803967\r
2022-10-24,82.14870190803967\r
2022-10-27,82.14870190803967\r
2022-11-01,82.14870190803967\r
2022-11-11,69.58830702645142\r
2022-11-13,69.58830702645142\r
2022-11-16,82.94604196438505\r
2023-02-04,75.82123548811269\r
2023-02-06,76.60710070036613\r
2023-02-09,66.50892876102037\r
2023-02-11,73.47253754513669\r
2023-02-14,72.69263733196291\r
2023-02-16,68.04545439463683\r
2023-02-19,72.69263733196291\r
2023-02-21,72.69263733196291\r
2023-02-26,68.81609551072764\r
2023-03-01,82.94604196438505\r
2023-03-03,82.94604196438505\r
2023-03-16,77.3944326338482\r
2023-03-28,76.60710070036613\r
2023-04-05,86.14926106683727\r
2023-04-07,80.5582392691555\r
2023-04-15,86.95348901064592\r
2023-04-17,81.35276476782059\r
2023-04-20,78.97345872607659\r
2023-05-02,77.3944326338482\r
2023-05-27,74.2539440257335\r
2023-05-30,75.0368466600186\r
2023-06-04,78.18322176894718\r
2023-06-24,100.0\r
2023-06-26,100.0\r
2023-06-29,100.0\r
2023-07-11,100.0\r
2023-07-14,100.0\r
2023-07-16,100.0\r
2023-07-19,100.0\r
2023-07-21,100.0\r
2023-07-31,84.54489653245919\r
2023-08-03,84.54489653245919\r
2023-08-05,84.54489653245919\r
2023-08-08,100.0\r
2023-08-10,100.0\r
2023-08-13,100.0\r
2023-08-15,100.0\r
2023-08-18,100.0\r
2023-08-20,80.5582392691555\r
2023-08-23,78.18322176894718\r
2023-09-07,98.35128212562213\r
2023-09-14,93.43536952383053\r
2023-09-19,95.88760453570737\r
2023-09-24,95.88760453570737\r
2023-09-27,89.37425950275352\r
2023-09-29,83.74477633370333\r
2023-10-02,88.56599609865535\r
2023-10-04,88.56599609865535\r
2023-10-07,88.56599609865535\r
`;export{r as default};
