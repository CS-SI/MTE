const r=`date,value\r
2017-02-25,45.07578425713316\r
2017-03-17,50.0906199077196\r
2017-03-27,50.0906199077196\r
2017-04-06,62.32454058121362\r
2017-05-06,62.24650731085058\r
2017-05-13,62.24650731085058\r
2017-05-16,62.8717834629578\r
2017-05-26,82.76310848609222\r
2017-06-02,82.76310848609222\r
2017-06-05,89.00057128272184\r
2017-06-12,87.93462563606175\r
2017-07-05,84.50318725326213\r
2017-07-07,84.50318725326213\r
2017-08-14,69.90064736979534\r
2017-08-17,69.90064736979534\r
2017-08-19,69.90064736979534\r
2017-08-21,69.90064736979534\r
2017-08-22,69.90064736979534\r
2017-08-24,69.90064736979534\r
2017-08-26,55.223486216664874\r
2017-08-29,56.95006928029973\r
2017-09-03,56.95006928029973\r
2017-09-05,44.2476199064452\r
2017-09-08,44.2476199064452\r
2017-10-08,42.60837320051592\r
2017-10-10,42.60837320051592\r
2017-10-11,42.60837320051592\r
2017-10-13,43.767147469094255\r
2017-10-15,43.767147469094255\r
2017-10-16,43.767147469094255\r
2017-10-18,41.93211832317798\r
2017-10-20,42.87999239605001\r
2017-10-23,39.66290032708779\r
2017-10-25,38.48051745648729\r
2017-10-26,38.48051745648729\r
2017-10-28,38.34995855161918\r
2017-10-30,39.135765769074936\r
2017-10-31,39.135765769074936\r
2017-11-02,39.135765769074936\r
2017-11-07,39.07005720163085\r
2017-11-14,37.63481865332074\r
2017-11-15,37.63481865332074\r
2017-11-17,38.0242787791578\r
2017-11-19,37.376001990333755\r
2017-11-22,38.154427598558996\r
2017-11-24,38.154427598558996\r
2017-11-25,38.154427598558996\r
2017-11-27,36.475350022456524\r
2017-11-30,37.24684113067778\r
2017-12-07,38.34995855161918\r
2017-12-09,37.05340960112771\r
2017-12-12,37.05340960112771\r
2017-12-14,37.05340960112771\r
2017-12-15,37.05340960112771\r
2018-02-10,76.35782054829818\r
2018-02-12,76.35782054829818\r
2018-02-15,76.35782054829818\r
2018-02-25,93.58349103972886\r
2018-02-27,93.58349103972886\r
2018-03-02,93.58349103972886\r
2018-03-07,93.58349103972886\r
2018-03-22,71.1260137883845\r
2018-04-01,71.1260137883845\r
2018-04-21,91.23648315139855\r
2018-04-23,91.23648315139855\r
2018-04-24,91.23648315139855\r
2018-04-26,91.23648315139855\r
2018-05-06,99.73231989801984\r
2018-05-11,100.0\r
2018-05-19,100.0\r
2018-05-21,100.0\r
2018-06-20,100.0\r
2018-06-22,100.0\r
2018-06-23,100.0\r
2018-06-25,100.0\r
2018-06-28,100.0\r
2018-07-02,98.71291631862321\r
2018-07-03,98.71291631862321\r
2018-07-07,93.31155997626219\r
2018-07-08,93.31155997626219\r
2018-07-10,98.25083064878983\r
2018-07-12,96.13557027175953\r
2018-07-15,96.13557027175953\r
2018-07-18,96.13557027175953\r
2018-07-25,84.41586605038222\r
2018-07-27,84.41586605038222\r
2018-07-30,89.53532077703763\r
2018-08-01,89.53532077703763\r
2018-08-02,89.53532077703763\r
2018-08-04,82.15724432457064\r
2018-08-06,87.22663330798439\r
2018-08-11,77.28531215955361\r
2018-08-12,77.28531215955361\r
2018-08-19,74.43191864469462\r
2018-08-21,74.43191864469462\r
2018-08-22,74.43191864469462\r
2018-08-26,74.43191864469462\r
2018-08-27,74.43191864469462\r
2018-09-03,58.4673426237595\r
2018-09-05,58.4673426237595\r
2018-09-08,66.59163222748187\r
2018-09-10,66.59163222748187\r
2018-09-11,66.59163222748187\r
2018-09-16,65.39587642318465\r
2018-09-18,65.39587642318465\r
2018-09-23,54.553222633889334\r
2018-09-25,54.553222633889334\r
2018-09-26,54.553222633889334\r
2018-09-28,58.23881324446698\r
2018-09-30,58.23881324446698\r
2018-10-03,54.18216143596953\r
2018-10-05,57.10113309065631\r
2018-10-06,57.10113309065631\r
2018-10-23,51.75671184508085\r
2018-10-25,51.75671184508085\r
2018-11-12,51.39280692848337\r
2018-11-15,51.39280692848337\r
2018-11-17,53.07460063304414\r
2018-11-22,53.07460063304414\r
2018-11-24,51.029851047491846\r
2018-11-27,51.53825510905388\r
2018-11-29,49.22936918184845\r
2018-12-05,49.22936918184845\r
2019-01-11,49.5875532544464\r
2019-01-16,53.81203624876465\r
2019-01-19,53.81203624876465\r
2019-01-23,53.81203624876465\r
2019-01-26,49.80292362998921\r
2019-01-28,57.78274681200908\r
2019-02-15,79.32324310595007\r
2019-02-17,79.32324310595007\r
2019-02-18,79.32324310595007\r
2019-02-20,80.43528111438866\r
2019-02-22,80.43528111438866\r
2019-02-23,80.43528111438866\r
2019-02-25,69.41270556270742\r
2019-02-27,69.41270556270742\r
2019-03-07,68.52142839039382\r
2019-03-12,66.91185005223298\r
2019-03-22,56.272112930513494\r
2019-03-24,52.19464800983864\r
2019-03-25,52.19464800983864\r
2019-03-27,55.821809679132386\r
2019-03-29,55.821809679132386\r
2019-03-30,55.821809679132386\r
2019-04-01,55.821809679132386\r
2019-04-08,52.26776977966841\r
2019-04-09,52.26776977966841\r
2019-05-01,51.10236621650704\r
2019-05-06,54.553222633889334\r
2019-05-11,52.63394526564903\r
2019-05-13,52.63394526564903\r
2019-05-14,52.63394526564903\r
2019-05-16,53.59041111964381\r
2019-05-23,56.57305670586391\r
2019-05-31,54.033998946004644\r
2019-07-05,45.6310383823611\r
2019-07-08,45.6310383823611\r
2019-07-10,45.6310383823611\r
2019-07-12,45.6310383823611\r
2019-07-13,45.6310383823611\r
2019-07-15,41.46112102197416\r
2019-07-17,41.46112102197416\r
2019-07-22,43.35685773546939\r
2019-07-23,43.35685773546939\r
2019-07-25,36.41132853553985\r
2019-07-28,39.135765769074936\r
2019-08-02,27.117574037380994\r
2019-08-04,31.7903422101213\r
2019-08-09,30.581533382785636\r
2019-08-14,35.013399741521674\r
2019-08-16,35.013399741521674\r
2019-08-17,35.013399741521674\r
2019-08-21,40.391953519311826\r
2019-08-22,40.391953519311826\r
2019-08-24,39.07005720163085\r
2019-08-26,40.724959894945925\r
2019-08-29,40.724959894945925\r
2019-08-31,40.52503490407194\r
2019-09-03,40.5916361965385\r
2019-09-06,40.5916361965385\r
2019-09-08,40.5916361965385\r
2019-09-11,30.28204175756133\r
2019-09-13,31.002647190253533\r
2019-09-15,31.002647190253533\r
2019-09-16,31.002647190253533\r
2019-09-20,28.332862801961987\r
2019-09-21,28.332862801961987\r
2019-10-08,22.671228787551776\r
2019-10-11,22.671228787551776\r
2019-10-13,25.92207288712716\r
2019-10-15,25.92207288712716\r
2019-10-25,24.304109929257542\r
2019-11-27,28.508077536273017\r
2019-12-05,28.508077536273017\r
2019-12-10,28.508077536273017\r
2019-12-27,64.36604050574978\r
2019-12-29,64.36604050574978\r
2019-12-30,64.36604050574978\r
2020-01-06,66.27198200345092\r
2020-01-09,66.27198200345092\r
2020-01-11,68.52142839039382\r
2020-01-14,68.52142839039382\r
2020-01-16,65.87321850078361\r
2020-01-19,65.87321850078361\r
2020-01-28,62.48071539403139\r
2020-02-05,71.53621448231169\r
2020-02-07,71.53621448231169\r
2020-02-08,71.53621448231169\r
2020-02-15,71.53621448231169\r
2020-02-18,71.53621448231169\r
2020-02-20,74.68209212364914\r
2020-02-22,73.84938701121587\r
2020-03-21,95.12994460862693\r
2020-03-24,95.12994460862693\r
2020-03-26,95.12994460862693\r
2020-03-28,95.12994460862693\r
2020-03-29,95.12994460862693\r
2020-03-31,95.12994460862693\r
2020-04-03,95.12994460862693\r
2020-04-05,97.23706350435745\r
2020-04-08,90.96709296547265\r
2020-04-10,96.50221972370457\r
2020-04-12,96.50221972370457\r
2020-04-15,93.13043498615731\r
2020-04-25,94.58306896804703\r
2020-04-28,95.49517480468754\r
2020-05-05,92.58784019310423\r
2020-05-07,92.58784019310423\r
2020-05-08,92.58784019310423\r
2020-05-17,79.40858142431732\r
2020-05-18,79.40858142431732\r
2020-05-20,90.42919563189467\r
2020-05-22,83.63147669551671\r
2020-05-25,88.55585093704914\r
2020-05-27,88.55585093704914\r
2020-05-28,88.55585093704914\r
2020-05-30,83.37061487216273\r
2020-06-12,83.37061487216273\r
2020-06-14,83.37061487216273\r
2020-07-19,74.59866652330192\r
2020-07-21,74.59866652330192\r
2020-07-22,74.59866652330192\r
2020-07-24,75.35073546520667\r
2020-07-27,75.35073546520667\r
2020-07-29,75.35073546520667\r
2020-07-31,75.35073546520667\r
2020-08-03,65.63438721881147\r
2020-08-05,67.07217159241937\r
2020-08-06,67.07217159241937\r
2020-08-08,65.39587642318465\r
2020-08-10,73.76630623872501\r
2020-08-15,73.76630623872501\r
2020-08-20,68.03707204972301\r
2020-08-21,68.03707204972301\r
2020-08-23,68.03707204972301\r
2020-09-02,31.42588391058623\r
2020-09-04,31.42588391058623\r
2020-09-05,31.42588391058623\r
2020-09-07,31.42588391058623\r
2020-09-10,31.42588391058623\r
2020-09-12,31.42588391058623\r
2020-09-14,31.42588391058623\r
2020-09-17,31.72949143088873\r
2020-09-19,21.18537358979075\r
2020-09-29,21.18537358979075\r
2020-09-30,21.18537358979075\r
2020-10-17,19.4316363260777\r
2020-10-24,19.4316363260777\r
2020-10-30,19.4316363260777\r
2020-11-01,19.4316363260777\r
2020-11-11,19.68602063304768\r
2020-11-14,19.68602063304768\r
2020-11-16,19.68602063304768\r
2020-11-18,19.68602063304768\r
2020-11-19,19.68602063304768\r
2020-11-21,20.146983228770203\r
2020-11-23,20.146983228770203\r
2020-11-26,18.47617334608592\r
2020-11-29,18.926543433694366\r
2021-02-24,100.0\r
2021-02-27,99.54668621244048\r
2021-03-01,98.71291631862321\r
2021-03-04,99.73231989801984\r
2021-03-09,80.43528111438866\r
2021-03-31,64.44504422324898\r
2021-04-02,64.44504422324898\r
2021-04-03,64.44504422324898\r
2021-04-05,68.52142839039382\r
2021-04-07,68.8450369836157\r
2021-04-15,68.11770997913413\r
2021-04-17,67.23263476621482\r
2021-04-20,67.23263476621482\r
2021-04-22,67.23263476621482\r
2021-04-23,67.23263476621482\r
2021-05-20,62.168510146947696\r
2021-05-27,62.168510146947696\r
2021-05-28,62.168510146947696\r
2021-05-30,62.168510146947696\r
2021-06-09,64.28707257998482\r
2021-06-11,64.28707257998482\r
2021-06-14,66.35184130786686\r
2021-06-16,66.35184130786686\r
2021-06-19,66.35184130786686\r
2021-06-21,63.656619057769284\r
2021-09-12,39.9936802199291\r
2021-09-17,39.9936802199291\r
2021-09-22,40.059957870584114\r
2021-09-24,34.19688539068233\r
2021-09-25,34.19688539068233\r
2021-09-27,34.19688539068233\r
2021-09-30,34.19688539068233\r
2021-10-12,35.70983808793523\r
2021-10-14,35.70983808793523\r
2021-10-17,36.283410203093105\r
2021-10-19,36.283410203093105\r
2021-10-20,36.283410203093105\r
2021-10-24,27.867576967733182\r
2021-10-27,30.581533382785636\r
2021-12-16,41.19286271814306\r
2021-12-18,41.19286271814306\r
2021-12-19,41.19286271814306\r
2021-12-21,41.19286271814306\r
2021-12-23,38.67666285402518\r
2022-01-15,87.75742945300593\r
2022-01-22,87.75742945300593\r
2022-01-23,87.75742945300593\r
2022-01-25,87.93462563606175\r
2022-01-27,63.735300234953215\r
2022-02-01,63.735300234953215\r
2022-02-09,52.92756479229554\r
2022-03-21,58.086644005207624\r
2022-03-23,58.086644005207624\r
2022-03-24,58.086644005207624\r
2022-03-26,58.086644005207624\r
2022-04-05,62.168510146947696\r
2022-04-10,63.735300234953215\r
2022-04-15,63.49936440180935\r
2022-07-14,57.10113309065631\r
2022-07-16,57.10113309065631\r
2022-07-17,57.10113309065631\r
2022-07-19,57.10113309065631\r
2022-07-21,57.10113309065631\r
2022-07-22,57.10113309065631\r
2022-07-24,58.54359250548057\r
2022-07-26,53.59041111964381\r
2022-07-27,53.59041111964381\r
2022-07-31,53.59041111964381\r
2022-08-01,53.59041111964381\r
2022-08-03,53.59041111964381\r
2022-08-13,23.4280208612088\r
2022-08-15,23.4280208612088\r
2022-08-18,23.4280208612088\r
2022-08-20,23.4280208612088\r
2022-08-23,23.4280208612088\r
2022-08-28,15.62446490603826\r
2022-08-30,15.62446490603826\r
2022-09-04,15.62446490603826\r
2022-09-05,15.62446490603826\r
2022-09-22,7.393984708133369\r
2022-10-02,7.393984708133369\r
2022-10-22,6.390627945676991\r
2022-10-24,6.390627945676991\r
2022-11-01,6.390627945676991\r
2022-11-06,6.424322046503781\r
2022-11-08,6.424322046503781\r
2022-11-11,6.424322046503781\r
2022-11-13,6.424322046503781\r
2022-11-16,6.223141349497227\r
2022-11-24,5.958596005092296\r
2022-12-21,7.644190924001021\r
2022-12-28,7.644190924001021\r
2023-02-04,44.041465965789314\r
2023-02-06,44.041465965789314\r
2023-02-09,48.01873337012021\r
2023-02-11,48.01873337012021\r
2023-02-12,48.01873337012021\r
2023-02-14,45.561494391741526\r
2023-02-16,49.01491931003487\r
2023-02-17,49.01491931003487\r
2023-02-19,42.405077362744784\r
2023-02-21,47.100484318347604\r
2023-02-24,47.100484318347604\r
2023-02-26,42.13457517784083\r
2023-03-01,45.561494391741526\r
2023-03-03,45.21436238874942\r
2023-03-04,45.21436238874942\r
2023-03-09,45.21436238874942\r
2023-03-16,44.52304442619454\r
2023-04-05,46.46861631756386\r
2023-04-07,46.46861631756386\r
2023-04-08,46.46861631756386\r
2023-04-15,46.46861631756386\r
2023-06-24,77.62360612825758\r
2023-07-14,47.80624892291549\r
2023-07-16,47.80624892291549\r
2023-07-17,47.80624892291549\r
2023-07-19,47.80624892291549\r
2023-07-22,47.80624892291549\r
`;export{r as default};
