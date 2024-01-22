const r=`date,value\r
2017-02-26,77.52439521010592\r
2017-03-05,78.17609916496531\r
2017-03-08,75.3010676939128\r
2017-03-15,77.92084866486789\r
2017-03-18,77.92084866486789\r
2017-03-28,81.82457184652539\r
2017-04-04,90.33060855155263\r
2017-04-07,86.59098687751315\r
2017-04-14,89.70335643159923\r
2017-04-17,91.37955087971854\r
2017-04-24,95.49699300211809\r
2017-05-04,97.90346943256885\r
2017-05-07,93.27870220304533\r
2017-05-14,93.27870220304533\r
2017-05-17,91.72516235536989\r
2017-05-24,100.0\r
2017-05-27,94.24877285547272\r
2017-06-03,95.1615194846869\r
2017-06-06,95.7565160360221\r
2017-06-13,100.0\r
2017-06-16,100.0\r
2017-06-23,99.5095113451852\r
2017-06-26,94.03625857045027\r
2017-07-01,98.47376204875586\r
2017-07-03,96.85850454010236\r
2017-07-06,94.70474687626496\r
2017-07-08,96.29163297689712\r
2017-07-11,96.62854612556194\r
2017-07-13,95.02440391309422\r
2017-07-18,97.33438056093607\r
2017-07-21,94.71995976959104\r
2017-07-26,94.15767397465989\r
2017-07-28,96.33755051429026\r
2017-08-02,94.91780811112943\r
2017-08-05,95.84817345089728\r
2017-08-07,95.1615194846869\r
2017-08-12,94.33990372200851\r
2017-08-15,92.50828954763189\r
2017-08-17,93.05186943678318\r
2017-08-20,92.91586606195925\r
2017-08-22,91.10940294904157\r
2017-08-25,90.48018811646708\r
2017-08-27,91.45464350414787\r
2017-08-30,93.1879450317267\r
2017-09-01,92.05619033546793\r
2017-09-04,90.76463678563414\r
2017-09-06,92.61389505178906\r
2017-09-21,86.10553632019126\r
2017-09-24,86.53209161338673\r
2017-10-04,82.21440970250427\r
2017-10-11,78.50269347036503\r
2017-10-14,76.74778770330609\r
2017-10-16,74.78381645156972\r
2017-10-19,74.24000856329211\r
2017-10-21,74.5605414452487\r
2017-10-24,73.50330052203321\r
2017-10-26,74.93745859752481\r
2017-10-29,75.09121521532373\r
2017-10-31,75.70738512247445\r
2018-03-23,92.5837175862105\r
2018-03-25,91.63495716912374\r
2018-03-28,91.63495716912374\r
2018-03-30,91.63495716912374\r
2018-04-02,92.4932066188694\r
2018-04-07,89.15209330650387\r
2018-04-09,89.15209330650387\r
2018-04-14,90.46522611617416\r
2018-04-17,91.06440653583586\r
2018-04-19,91.06440653583586\r
2018-04-22,88.36459820535936\r
2018-04-24,90.88450161419028\r
2018-04-27,89.30096164147592\r
2018-04-29,91.90566939197456\r
2018-05-07,96.36816662183261\r
2018-05-24,99.9280143415776\r
2018-06-01,99.9280143415776\r
2018-06-03,97.68799683922028\r
2018-06-08,96.64387051082696\r
2018-06-16,99.69543393640359\r
2018-06-18,99.04525649704725\r
2018-06-21,99.33919303710468\r
2018-06-23,99.33919303710468\r
2018-06-26,98.65898000819507\r
2018-06-28,99.33919303710468\r
2018-07-01,94.40067539869966\r
2018-07-03,92.02607899159909\r
2018-07-06,93.03675438373729\r
2018-07-08,98.36577661459064\r
2018-07-11,94.91780811112943\r
2018-07-13,95.78706496949746\r
2018-07-18,98.36577661459064\r
2018-07-21,95.63435569082792\r
2018-07-23,94.08178268029714\r
2018-07-26,92.70444887345892\r
2018-07-28,96.39878626177406\r
2018-07-31,94.71995976959104\r
2018-08-02,97.07331141663123\r
2018-08-05,96.58257826460618\r
2018-08-07,99.99006901434129\r
2018-08-10,99.26181065293554\r
2018-08-12,98.24241737980293\r
2018-08-15,95.13104315361068\r
2018-08-17,95.64962263705951\r
2018-08-20,95.86345278236557\r
2018-08-22,95.87873299820399\r
2018-09-11,85.5770850936836\r
2018-09-14,83.70773655857978\r
2018-09-16,83.70773655857978\r
2018-09-19,83.70773655857978\r
2018-09-21,84.29029690260074\r
2018-09-24,86.00268941236715\r
2018-09-26,83.85323908141604\r
2018-09-29,81.34901775832878\r
2018-10-01,81.34901775832878\r
2018-10-04,80.27196191074827\r
2018-10-09,83.02510483615151\r
2018-10-14,80.14306577019973\r
2018-10-19,83.17017560579319\r
2018-10-21,80.93193813328993\r
2018-10-24,78.40324286867967\r
2018-10-26,80.47261647936368\r
2019-02-26,81.7091935910468\r
2019-02-28,82.0988320517589\r
2019-03-03,81.49301875378299\r
2019-03-08,82.73523930308978\r
2019-03-18,84.94742914362014\r
2019-03-20,85.8118064588735\r
2019-03-23,85.44515694623726\r
2019-03-25,83.70773655857978\r
2019-03-28,82.79318295682684\r
2019-03-30,82.92361002728732\r
2019-04-02,82.92361002728732\r
2019-04-09,84.18824295729141\r
2019-04-14,86.85619557729551\r
2019-04-17,89.80778821038405\r
2019-04-19,92.99141457463446\r
2019-04-27,94.52226137841075\r
2019-04-29,94.00591360902784\r
2019-05-02,92.93097398072616\r
2019-05-07,97.48806955114048\r
2019-05-09,91.89062221746593\r
2019-05-12,91.89062221746593\r
2019-05-14,91.89062221746593\r
2019-05-24,94.94825962126454\r
2019-05-29,86.25253788398562\r
2019-06-01,86.25253788398562\r
2019-06-03,97.19613576777223\r
2019-06-06,97.19613576777223\r
2019-06-11,97.41121404977535\r
2019-06-13,96.70517687559791\r
2019-06-18,93.3846261100443\r
2019-06-21,98.04207854101983\r
2019-06-23,94.94825962126454\r
2019-06-26,97.58032520262225\r
2019-06-28,97.96506468954055\r
2019-07-01,97.87267707965277\r
2019-07-03,96.38347600027265\r
2019-07-06,96.9965748394467\r
2019-07-08,96.59790000241323\r
2019-07-11,97.58032520262225\r
2019-07-13,96.13863193872176\r
2019-07-16,95.2834602519319\r
2019-07-18,93.58145772267767\r
2019-07-21,93.52087812153393\r
2019-07-23,92.88565290035551\r
2019-07-26,92.96119249399155\r
2019-07-31,92.4932066188694\r
2019-08-02,89.86748332026602\r
2019-08-05,91.71012591963189\r
2019-08-07,89.04793914558063\r
2019-08-10,87.55007220015757\r
2019-08-12,84.74278945201367\r
2019-08-15,82.31558857096705\r
2019-08-17,80.21466545115189\r
2019-08-20,79.12885894446082\r
2019-08-25,77.32644398458677\r
2019-08-27,74.60238704149776\r
2019-08-30,74.4629348803586\r
2019-09-01,74.50476058011365\r
2019-09-04,75.49712180401981\r
2019-09-06,73.7532040327271\r
2019-09-09,74.99335685360981\r
2019-09-11,72.28599116700745\r
2019-09-14,72.76926403070225\r
2019-09-16,72.83839842917682\r
2019-09-19,73.29528297317285\r
2019-09-24,74.86760706386585\r
2019-09-26,74.85363959581008\r
2019-09-29,79.4283470184982\r
2019-10-01,76.1566561052939\r
2019-10-04,79.1858726149423\r
2019-10-06,74.49081773258142\r
2019-10-09,73.96169214070112\r
2019-10-11,71.07608065821219\r
2019-10-14,69.7238179587292\r
2019-10-19,68.47564649432381\r
2019-10-21,70.99385704822518\r
2019-10-26,68.92241829241766\r
2020-02-28,73.21213590798497\r
2020-03-04,72.36875488099808\r
2020-03-07,72.36875488099808\r
2020-03-12,61.79761279046044\r
2020-03-14,76.4520144401423\r
2020-03-19,77.8499995560745\r
2020-03-22,79.00063271573813\r
2020-03-24,78.8440143447842\r
2020-03-27,78.8440143447842\r
2020-03-29,79.47116455837234\r
2020-04-01,79.39980664731087\r
2020-04-03,79.39980664731087\r
2020-04-06,80.17170285645705\r
2020-04-08,74.8396730740924\r
2020-04-11,73.72542176782967\r
2020-04-16,72.53438545168642\r
2020-04-23,81.43540725817999\r
2020-04-26,89.47972266499883\r
2020-05-06,93.52087812153393\r
2020-05-11,93.52087812153393\r
2020-05-21,93.79359847812599\r
2020-05-28,91.55981080260337\r
2020-05-31,91.55981080260337\r
2020-06-05,91.55981080260337\r
2020-06-07,93.12745807531536\r
2020-06-10,96.59790000241323\r
2020-06-15,100.0\r
2020-06-20,100.0\r
2020-06-22,97.62646490999673\r
2020-06-25,98.0112703633243\r
2020-06-27,98.36577661459064\r
2020-06-30,99.63344573724427\r
2020-07-02,98.27325191852232\r
2020-07-05,94.59828147010454\r
2020-07-07,96.0162947310417\r
2020-07-10,96.70517687559791\r
2020-07-12,98.1653464066334\r
2020-07-15,98.25783420995381\r
2020-07-17,97.718768082888\r
2020-07-20,97.62646490999673\r
2020-07-22,97.31901650508975\r
2020-07-25,97.48806955114048\r
2020-07-27,95.58856016198546\r
2020-07-30,96.3069379394542\r
2020-08-01,95.89401409837402\r
2020-08-04,93.23331960729645\r
2020-08-06,91.37955087971854\r
2020-08-09,93.6269017710071\r
2020-08-11,88.20147393917536\r
2020-08-14,87.37272165044607\r
2020-08-16,85.5770850936836\r
2020-08-19,85.5770850936836\r
2020-08-21,82.156613496925\r
2020-08-24,81.76687532896611\r
2020-08-26,79.85689930667652\r
2020-08-31,78.2896411037885\r
2020-09-03,79.51399047685945\r
2020-09-05,77.92084866486789\r
2020-09-08,80.9606772470907\r
2020-09-10,81.59387446555165\r
2020-09-13,82.34450511810407\r
2020-09-15,80.22898817328425\r
2020-09-18,81.99775004851514\r
2020-09-20,80.77393924939655\r
2020-09-23,85.1376121463853\r
2020-09-30,87.60921806506387\r
2020-10-03,88.34976420422602\r
2020-10-08,80.93193813328993\r
2020-10-13,80.67345289111691\r
2020-10-18,80.64475084660312\r
2020-10-20,80.64475084660312\r
2021-02-25,89.80778821038405\r
2021-02-27,88.3349311074458\r
2021-03-02,88.75059952674246\r
2021-03-04,88.3349311074458\r
2021-03-07,88.3349311074458\r
2021-03-12,88.48330276615236\r
2021-03-22,72.78308900323009\r
2021-03-24,76.00211033917397\r
2021-03-27,76.00211033917397\r
2021-03-29,74.421117709857\r
2021-04-01,74.421117709857\r
2021-04-03,78.51690443589598\r
2021-04-06,77.22753730351674\r
2021-04-23,85.03518672316707\r
2021-04-26,85.03518672316707\r
2021-05-03,92.77993493617832\r
2021-05-06,93.49059366308462\r
2021-05-08,92.19173564293965\r
2021-05-16,94.41587053822197\r
2021-05-18,99.63344573724427\r
2021-05-21,98.62810157214942\r
2021-05-26,94.52226137841075\r
2021-05-28,94.52226137841075\r
2021-05-31,95.55803423468763\r
2021-06-02,93.94523435593807\r
2021-06-15,96.3069379394542\r
2021-06-22,99.94352669830072\r
2021-06-25,98.3812004710263\r
2021-06-27,99.24633680388136\r
2021-06-30,100.0\r
2021-07-02,100.0\r
2021-07-07,100.0\r
2021-07-10,100.0\r
2021-07-12,100.0\r
2021-07-15,100.0\r
2021-07-17,100.0\r
2021-07-20,98.45833292418982\r
2021-07-22,98.58179049952696\r
2021-07-25,97.84188824418702\r
2021-07-27,95.1462808760538\r
2021-07-30,95.64962263705951\r
2021-08-01,93.61175286474077\r
2021-08-06,92.04113421639546\r
2021-08-09,93.00652695262328\r
2021-08-14,90.71970228588789\r
2021-08-16,87.18073929598795\r
2021-08-19,84.74278945201367\r
2021-08-21,85.98800064079737\r
2021-08-24,84.01339781202391\r
2021-08-26,85.6650782465857\r
2021-08-29,83.66410369712123\r
2021-08-31,83.1556643906492\r
2021-09-13,76.90288200317266\r
2021-09-18,75.70738512247445\r
2021-09-20,77.46781896549302\r
2021-09-23,72.52057765304365\r
2021-09-25,73.48942602614457\r
2021-09-28,70.89797319098203\r
2021-09-30,71.501452874719\r
2021-10-03,68.90886425612626\r
2021-10-05,69.84636089152367\r
2021-10-08,69.84636089152367\r
2021-10-10,70.89797319098203\r
2021-10-13,69.39741901108403\r
2021-10-15,67.45073709984123\r
2021-10-23,66.57863098147898\r
2021-10-25,67.30286031922027\r
2022-02-27,82.83665036335965\r
2022-03-02,83.37342913845232\r
2022-03-07,82.67731038143415\r
2022-03-09,82.48914316364623\r
2022-03-14,81.7091935910468\r
2022-03-22,76.56464106700626\r
2022-03-24,84.5529274141408\r
2022-03-27,84.5529274141408\r
2022-03-29,84.5529274141408\r
2022-04-03,84.40698494649006\r
2022-04-11,91.6048959361556\r
2022-04-13,92.93097398072616\r
2022-04-16,91.30448065638664\r
2022-04-18,92.02607899159909\r
2022-04-26,92.19173564293965\r
2022-04-28,95.52751184796196\r
2022-05-01,94.82647486453351\r
2022-05-03,95.66489046820203\r
2022-05-06,95.66489046820203\r
2022-05-11,94.55266675199846\r
2022-05-13,99.52500008075785\r
2022-05-16,94.46146128500165\r
2022-05-18,99.75743613447064\r
2022-05-21,95.34445189697031\r
2022-05-23,98.58179049952696\r
2022-05-26,98.98341543059702\r
2022-05-28,98.85977537930404\r
2022-05-31,97.53419341599503\r
2022-06-02,98.62810157214942\r
2022-06-07,98.24241737980293\r
2022-06-10,98.3195103143562\r
2022-06-12,98.76708217169174\r
2022-06-15,98.55092083918149\r
2022-06-17,99.5095113451852\r
2022-06-20,98.30408997076123\r
2022-06-25,91.01941819465564\r
2022-06-27,100.0\r
2022-07-02,88.06809005720567\r
2022-07-05,91.77027703313338\r
2022-07-07,91.77027703313338\r
2022-07-10,90.59991646043544\r
2022-07-12,92.5837175862105\r
2022-07-15,93.06698538143543\r
2022-07-17,96.32224378526473\r
2022-07-20,93.0972199454005\r
2022-07-22,95.13104315361068\r
2022-07-25,92.7497378338492\r
2022-07-27,93.7026596531094\r
2022-07-30,92.59880587260054\r
2022-08-01,92.77993493617832\r
2022-08-04,91.80035796003204\r
2022-08-06,91.89062221746593\r
2022-08-09,91.77027703313338\r
2022-08-11,92.61389505178906\r
2022-08-14,90.85453002197649\r
2022-08-16,91.63495716912374\r
2022-08-19,90.04665505347067\r
2022-08-21,90.86951536937445\r
2022-08-24,90.49515101523335\r
2022-08-26,87.40227100625249\r
2022-08-29,84.80123964587382\r
2022-09-03,84.21739664614498\r
2022-09-05,84.7866257254623\r
2022-09-08,82.38788685331694\r
2022-09-10,85.24008233445913\r
2022-09-13,79.20012836236246\r
2022-09-18,78.58797327323728\r
2022-09-20,79.71395551072575\r
2022-09-23,77.97754480002679\r
2022-10-05,83.5477897926946\r
2022-10-08,83.9260247472352\r
2022-10-10,83.9260247472352\r
2022-10-13,83.9260247472352\r
2022-10-15,83.9260247472352\r
2022-10-18,77.82166646580201\r
2022-10-20,81.6082861217863\r
2022-10-23,77.38298272410982\r
2022-10-25,80.55866696799036\r
2022-10-28,77.24166401490699\r
2022-10-30,77.12867659837504\r
2022-11-02,78.1193506377574\r
2023-03-12,66.64556967822442\r
2023-03-14,66.64556967822442\r
2023-03-17,67.74684404521749\r
2023-03-22,69.42459767795253\r
2023-03-24,62.26726493654354\r
2023-03-27,69.42459767795253\r
2023-04-06,78.54532916903399\r
2023-04-08,77.11455739457465\r
2023-04-16,78.46006617847988\r
2023-04-21,89.28607074962302\r
2023-04-23,89.28607074962302\r
2023-04-26,91.87557593763418\r
2023-04-28,92.17667147718346\r
2023-05-01,92.17667147718346\r
2023-05-03,90.49515101523335\r
2023-05-06,93.00652695262328\r
2023-05-11,90.61488654552488\r
2023-05-16,90.61488654552488\r
2023-05-26,91.259449277011\r
2023-05-28,97.31901650508975\r
2023-05-31,98.64354035143424\r
2023-06-02,98.64354035143424\r
2023-06-05,98.64354035143424\r
2023-06-07,98.33493153621791\r
2023-06-17,97.94966455649981\r
2023-06-20,98.18075884413017\r
2023-06-25,98.10370544346505\r
2023-06-27,97.64184657244375\r
2023-07-05,88.78031723588956\r
2023-07-07,96.6591957785014\r
2023-07-10,92.43288383499234\r
2023-07-12,92.43288383499234\r
2023-07-15,93.58145772267767\r
2023-07-17,96.75116591300028\r
2023-07-20,93.6269017710071\r
2023-07-22,93.96040283539291\r
2023-07-25,91.45464350414787\r
2023-07-27,91.77027703313338\r
2023-07-30,89.36053422553435\r
2023-08-01,91.04940952516348\r
2023-08-06,88.72088543052799\r
2023-08-09,85.43050282595208\r
2023-08-11,87.74234928372636\r
2023-08-14,87.74234928372636\r
2023-08-16,88.52783189324987\r
2023-08-19,89.13721143397449\r
2023-08-21,88.2756077646876\r
2023-08-24,85.15224800432006\r
2023-08-26,83.98426978903441\r
2023-08-29,84.6989614111503\r
2023-08-31,84.29029690260074\r
2023-09-03,83.18468774037161\r
2023-09-05,82.82216030734358\r
2023-09-08,82.0988320517589\r
2023-09-10,79.35700307453908\r
2023-09-15,79.97132128574181\r
2023-10-03,61.993144260761724\r
2023-10-05,64.75403888103139\r
2023-10-08,63.934376889291244\r
2023-10-10,65.23170940561019\r
2023-10-13,63.802528704300386\r
2023-10-18,63.73664168230402\r
`;export{r as default};