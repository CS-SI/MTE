const r=`date,value\r
2017-03-21,53.480712872515824\r
2017-04-20,66.66766838382364\r
2017-04-23,66.66606274690442\r
2017-04-30,66.67248539017989\r
2017-05-30,87.83804027440748\r
2017-06-02,87.83804027440748\r
2017-06-09,92.29738700363696\r
2017-06-19,100.0\r
2017-06-22,100.0\r
2017-07-04,99.03219948456729\r
2017-07-07,99.03219948456729\r
2017-07-12,99.03219948456729\r
2017-07-14,100.0\r
2017-07-17,99.50074289470116\r
2017-07-19,99.50074289470116\r
2017-07-22,99.50074289470116\r
2017-07-24,99.8412118979848\r
2017-08-18,95.5543722684767\r
2017-08-21,95.5543722684767\r
2017-08-23,95.02730515994982\r
2017-08-26,95.6276365137839\r
2017-09-02,92.22763234572358\r
2017-09-07,88.95142323701532\r
2017-09-10,88.95142323701532\r
2017-09-12,88.05581276651952\r
2017-09-17,87.4079492704413\r
2017-10-07,79.20696421166292\r
2018-04-25,36.87892011758314\r
2018-04-28,37.13425144979842\r
2018-05-05,32.92822102589911\r
2018-06-14,90.65722070634803\r
2018-06-19,90.33367541672807\r
2018-06-22,98.14303542226484\r
2018-06-27,97.30283090843456\r
2018-06-29,97.81374178224715\r
2018-07-04,99.94363573920855\r
2018-07-07,99.94363573920855\r
2018-07-09,99.70913642641366\r
2018-07-12,100.0\r
2018-07-14,100.0\r
2018-07-19,99.99612891444505\r
2018-07-22,99.8026561106822\r
2018-07-24,100.0\r
2018-07-27,100.0\r
2018-07-29,99.60744320084444\r
2018-08-03,99.26225835709666\r
2018-08-06,99.25532186184186\r
2018-08-08,99.25658302794179\r
2018-08-28,98.7413171443037\r
2018-08-31,98.7413171443037\r
2018-09-02,99.89368290500451\r
2018-09-05,99.8943151550619\r
2018-09-07,98.96165018172509\r
2018-09-10,99.69460620515243\r
2018-09-12,98.91567830543063\r
2018-09-17,96.47682325574078\r
2018-09-20,97.36288084457964\r
2018-09-22,97.36288084457964\r
2018-09-27,94.03720645010483\r
2018-10-02,92.42961330673684\r
2018-10-05,92.42961330673684\r
2019-03-21,53.77282698025011\r
2019-03-24,53.77282698025011\r
2019-03-26,54.472731920018866\r
2019-03-29,53.67734073025968\r
2019-03-31,54.002279181719125\r
2019-04-05,53.03427356131516\r
2019-04-13,53.14976067530866\r
2019-04-15,51.78136666128279\r
2019-04-18,52.29121696138614\r
2019-04-20,51.75966527521925\r
2019-04-30,52.817710376451366\r
2019-05-05,57.68365875503589\r
2019-05-10,63.26504071769866\r
2019-05-13,63.26504071769866\r
2019-05-15,62.59553729215565\r
2019-05-23,65.24761514738661\r
2019-05-30,71.38416044860068\r
2019-06-02,71.03384500606863\r
2019-06-04,73.78253012652046\r
2019-06-07,73.78253012652046\r
2019-06-12,73.78253012652046\r
2019-06-19,86.15620991698944\r
2019-06-24,90.91980588647401\r
2019-06-27,90.91980588647401\r
2019-06-29,90.12026335777861\r
2019-07-02,90.12026335777861\r
2019-07-04,92.30962690329864\r
2019-07-07,91.87185517984085\r
2019-07-12,94.41926613635229\r
2019-07-14,93.01577322944259\r
2019-07-17,93.79373791563876\r
2019-07-19,93.29036954857047\r
2019-07-22,94.72463102145721\r
2019-07-24,93.1207807540502\r
2019-07-29,94.0661934348177\r
2019-08-01,93.41456944837113\r
2019-08-03,93.89910629581684\r
2019-08-06,91.9989407204235\r
2019-08-08,92.92308787560141\r
2019-08-11,91.764988322235\r
2019-08-16,93.09744153003969\r
2019-08-18,90.85656233883364\r
2019-08-21,90.8067100188286\r
2019-08-23,88.83934306241574\r
2019-09-02,83.92739392370856\r
2019-09-05,84.28608828843424\r
2019-09-07,81.58538571952481\r
2019-09-12,80.11062737716077\r
2019-09-15,80.11062737716077\r
2019-09-17,80.41972493548309\r
2019-09-20,78.83326232841608\r
2019-09-25,80.23998424047247\r
2019-09-27,79.60787887907097\r
2019-09-30,81.69651189439051\r
2019-10-02,81.0689749129615\r
2019-10-05,84.21771696266009\r
2019-10-07,80.94312708076565\r
2019-10-10,80.94312708076565\r
2020-03-20,58.47246367634702\r
2020-03-25,57.09696318728062\r
2020-03-28,57.09696318728062\r
2020-03-30,57.09696318728062\r
2020-04-04,55.412227469335505\r
2020-04-07,55.43008290280539\r
2020-04-09,45.09808741193193\r
2020-04-14,45.0589127155536\r
2020-04-22,50.06140363807439\r
2020-04-24,49.92592512451671\r
2020-04-29,60.002291620748075\r
2020-05-04,68.57394509093292\r
2020-05-07,68.57394509093292\r
2020-05-09,70.43824219195692\r
2020-05-14,76.76172533639352\r
2020-05-19,77.8203207321176\r
2020-05-24,89.00627937063138\r
2020-05-27,95.35084405440503\r
2020-05-29,95.23612805430413\r
2020-06-03,96.19466232894833\r
2020-06-06,96.19466232894833\r
2020-06-23,98.53878949494243\r
2020-06-26,98.53878949494243\r
2020-06-28,98.97613629478353\r
2020-07-01,98.97613629478353\r
2020-07-03,98.58091622489755\r
2020-07-06,98.96794838440567\r
2020-07-08,99.01519016841335\r
2020-07-11,99.90506365829552\r
2020-07-16,100.0\r
2020-07-18,98.58343148822628\r
2020-07-21,98.8980475923322\r
2020-07-23,98.38606375816131\r
2020-07-26,98.83320289813994\r
2020-07-28,98.691612823427\r
2020-07-31,98.691612823427\r
2020-08-02,98.20706536731551\r
2020-08-05,98.67148236201487\r
2020-08-07,98.05078724131097\r
2020-08-10,98.51175684556874\r
2020-08-12,98.23280774219464\r
2020-08-15,98.35339438643878\r
2020-08-20,96.86730121822991\r
2020-08-22,98.39423179956867\r
2020-08-25,97.07715477523287\r
2020-08-27,98.13926949075153\r
2020-09-01,95.62266871522436\r
2020-09-04,95.62266871522436\r
2020-09-06,96.95971365577628\r
2020-09-14,97.40917975472873\r
2020-09-16,95.4048112480326\r
2020-09-26,95.46809915159152\r
2020-09-29,95.46809915159152\r
2020-10-11,95.76739939590463\r
2021-03-30,63.50407302189124\r
2021-04-02,64.31776554471853\r
2021-04-04,64.31776554471853\r
2021-04-07,63.54289837328324\r
2021-04-09,63.78131109850117\r
2021-06-13,98.52432979072292\r
2021-06-16,97.87517531157542\r
2021-06-18,98.87097437564192\r
2021-07-23,100.0\r
2021-07-26,100.0\r
2021-07-28,100.0\r
2021-08-02,100.0\r
2021-08-05,99.83362666814905\r
2021-08-10,99.42879415427363\r
2021-08-12,99.69460620515243\r
2021-08-17,99.72429932662685\r
2021-08-20,99.72429932662685\r
2021-08-22,99.68134024338494\r
2021-08-25,99.33794218759526\r
2021-08-27,99.33983458786551\r
2021-08-30,97.74543132221669\r
2021-09-01,98.12044072630222\r
2021-09-06,97.93035365545771\r
2021-09-11,96.56097679825774\r
2021-09-21,94.38652845037527\r
2021-09-24,93.86397808648468\r
2021-09-29,93.86397808648468\r
2021-10-01,93.96814592008364\r
2022-04-14,76.60070285432461\r
2022-04-17,76.81845655397817\r
2022-04-19,76.81845655397817\r
2022-05-14,87.0802758821512\r
2022-05-17,87.0802758821512\r
2022-05-19,89.27412888938385\r
2022-05-22,89.27412888938385\r
2022-05-29,91.15773950196593\r
2022-06-01,90.13844377766246\r
2022-06-06,90.13844377766246\r
2022-07-03,83.90209121816959\r
2022-07-06,83.90209121816959\r
2022-07-08,83.99684540360165\r
2022-07-11,83.99684540360165\r
2022-07-13,83.22186626855716\r
2022-07-16,80.44401129752322\r
2022-07-18,80.12679228223655\r
2022-07-21,78.3292626698164\r
2022-07-26,77.34176264553896\r
2022-07-28,77.65781649072832\r
2022-08-02,72.95963335178175\r
2022-08-05,72.95963335178175\r
2022-08-07,74.88245231702577\r
2022-08-10,75.33893147291207\r
2022-08-12,70.99044879261436\r
2022-08-20,67.97346165556503\r
2022-08-22,69.41152608212697\r
2022-08-25,68.50681657695202\r
2022-08-27,70.70068891089086\r
2022-09-01,67.66461238912953\r
2022-09-04,69.80597544454781\r
2022-09-06,69.76834319737044\r
2022-09-09,63.43064640294372\r
2022-09-11,64.31723818559568\r
2022-09-16,67.10552962561316\r
2022-09-19,67.1296811387373\r
2022-09-21,64.54258253304329\r
2022-09-26,67.05401836584318\r
2022-10-06,67.74810082070715\r
2023-03-20,60.36301260262182\r
2023-03-25,61.95701076603039\r
2023-03-28,61.97310983389076\r
2023-03-30,61.902494470027726\r
2023-04-04,63.88803313944176\r
2023-04-14,65.33835458296493\r
2023-04-17,65.98084673069987\r
2023-04-19,64.67096794513864\r
2023-04-22,66.014958280778\r
2023-04-24,65.47960807129219\r
`;export{r as default};