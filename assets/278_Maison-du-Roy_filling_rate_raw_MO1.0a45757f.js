const n=`date,value\r
2017-02-19,13.25843357684047\r
2017-03-11,56.68921406568482\r
2017-03-21,28.78647174400436\r
2017-04-20,83.61059814179045\r
2017-05-30,72.52642084807269\r
2017-06-19,90.91022916513968\r
2017-07-04,53.7407956365196\r
2017-07-14,66.61575058316502\r
2017-08-03,47.5137356063082\r
2017-08-18,65.33414339382395\r
2017-08-23,52.5820217593011\r
2017-09-07,58.493484400418396\r
2017-09-17,64.0641595211543\r
2017-09-22,53.7407956365196\r
2017-10-07,88.69042370096996\r
2017-10-17,21.453454879677423\r
2017-10-27,27.070298408926778\r
2017-11-11,50.29987149234096\r
2017-11-16,49.17653015514138\r
2018-02-14,7.614364487803462\r
2018-03-16,32.36596418781014\r
2018-04-20,71.85811324324659\r
2018-04-25,82.18491963373056\r
2018-05-25,2.4068862575356063\r
2018-06-09,8.089066593165162\r
2018-06-14,10.389896113347492\r
2018-06-19,2.2719733539920037\r
2018-06-29,1.031520667706906\r
2019-02-14,2.4068862575356063\r
2019-02-19,1.1255157623741847\r
2019-03-01,2.6875699222756446\r
2019-03-11,55.501031476554495\r
2019-03-21,57.889130837576516\r
2019-03-31,43.737884265234236\r
2019-04-05,63.43353109358406\r
2019-04-20,27.922233397820783\r
2019-04-30,64.0641595211543\r
2019-05-10,100.0\r
2019-05-15,86.496241535619\r
2019-05-30,80.7706874190454\r
2019-06-04,58.493484400418396\r
2019-06-19,90.16744960321536\r
2019-06-24,75.91120746579287\r
2019-06-29,60.94015251233957\r
2019-07-04,90.91022916513968\r
2019-07-14,63.43353109358406\r
2019-07-19,38.1002386634749\r
2019-07-24,50.29987149234096\r
2019-07-29,49.17653015514138\r
2019-08-03,32.36596418781014\r
2019-08-08,27.070298408926778\r
2019-08-18,21.075614629616457\r
2019-09-02,46.965404491535054\r
2019-09-07,40.10829531062103\r
2019-09-12,33.291352225290034\r
2019-09-17,40.61782143455569\r
2019-09-27,8.089066593165162\r
2019-10-07,16.78710987476757\r
2019-10-17,27.070298408926778\r
2019-11-06,25.81552069035016\r
2020-02-04,5.24495660484064\r
2020-02-14,24.99445683314382\r
2020-02-19,19.960914483189672\r
2020-02-24,26.648952631661267\r
2020-04-04,7.382042687719302\r
2020-04-09,24.18578782776073\r
2020-04-14,67.90896599652126\r
2020-04-24,32.82713684723698\r
2020-05-04,49.73672116029268\r
2020-05-14,87.95618050399935\r
2020-05-24,65.33414339382395\r
2020-06-03,54.32459970678989\r
2020-06-23,71.1926930252877\r
2020-07-03,67.90896599652126\r
2020-07-18,50.86597892361122\r
2020-07-23,64.0641595211543\r
2020-08-07,49.17653015514138\r
2020-08-12,75.91120746579287\r
2020-08-17,59.71097170878507\r
2020-08-22,54.32459970678989\r
2020-08-27,29.223196827249755\r
2020-09-01,88.69042370096996\r
2020-09-06,31.000731451516188\r
2020-09-16,36.140383279130674\r
2020-10-11,71.1926930252877\r
2020-10-31,52.00705624773756\r
2020-11-05,28.352816228207377\r
2020-11-10,29.223196827249755\r
2021-02-08,3.6155612752407613\r
2021-02-23,14.81426277504731\r
2021-02-28,46.420044073317676\r
2021-03-05,22.21852328366136\r
2021-03-20,39.09825228154833\r
2021-03-30,37.11427527908674\r
2021-04-04,81.47637191193535\r
2021-04-09,67.26090819828678\r
2021-04-24,80.7706874190454\r
2021-06-13,93.15561559613053\r
2021-07-23,43.737884265234236\r
2021-08-02,100.0\r
2021-08-12,51.43504124139015\r
2021-08-17,64.0641595211543\r
2021-08-27,31.907837127659654\r
2021-09-01,31.45275857210086\r
2021-09-06,53.7407956365196\r
2021-09-11,68.55992211845964\r
2021-09-21,87.95618050399935\r
2021-10-01,54.91134569115969\r
2021-10-06,45.33824462939046\r
2021-10-11,48.61930071971608\r
2021-10-16,44.2683560454038\r
2021-10-26,28.78647174400436\r
2021-11-05,44.2683560454038\r
2022-02-08,4.304909709012155\r
2022-02-13,9.33418594746402\r
2022-02-18,7.382042687719302\r
2022-02-23,8.089066593165162\r
2022-02-28,17.816554077576704\r
2022-03-25,52.5820217593011\r
2022-04-14,64.69769759270815\r
2022-05-14,95.42654128153181\r
2022-05-19,12.95694710122264\r
2022-05-29,85.04770978398176\r
2022-06-13,72.52642084807269\r
2022-06-18,82.18491963373056\r
2022-07-03,87.22478591842358\r
2022-07-08,83.61059814179045\r
2022-07-13,89.42751392589902\r
2022-07-18,64.0641595211543\r
2022-08-02,64.69769759270815\r
2022-08-07,100.0\r
2022-08-12,66.61575058316502\r
2022-08-22,93.90975517201542\r
2022-08-27,100.0\r
2022-09-01,36.62581902105042\r
2022-09-11,43.21039736157271\r
2022-09-16,58.493484400418396\r
2022-09-21,30.10584336461417\r
2022-09-26,17.470230774481124\r
2022-10-11,26.648952631661267\r
2022-10-26,22.605744109215777\r
2022-11-05,46.420044073317676\r
2022-11-10,41.13034724658803\r
2023-02-03,18.874525570738832\r
2023-02-08,7.850041400836207\r
2023-02-13,2.545422960559852\r
2023-02-18,5.443320962883411\r
2023-03-05,30.10584336461417\r
2023-03-15,32.82713684723698\r
2023-03-20,50.29987149234096\r
2023-03-25,62.805814235792226\r
2023-04-04,88.69042370096996\r
2023-04-09,73.19761405253462\r
2023-04-14,79.36791479418581\r
2023-04-24,87.95618050399935\r
2023-05-04,65.33414339382395\r
2023-05-24,87.95618050399935\r
2023-06-23,100.0\r
2023-06-28,67.26090819828678\r
2023-07-03,64.69769759270815\r
2023-07-08,59.10076536468232\r
2023-07-13,66.61575058316502\r
2023-07-23,66.61575058316502\r
`;export{n as default};
