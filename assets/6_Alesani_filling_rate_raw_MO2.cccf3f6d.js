const n=`date,value\r
2017-02-26,95.26256684696675\r
2017-03-05,96.52037901751676\r
2017-03-08,92.61135558844175\r
2017-03-15,90.83464875956771\r
2017-03-18,91.25827923735613\r
2017-03-25,89.91306251111803\r
2017-03-28,88.88070972813257\r
2017-04-04,92.03050489718024\r
2017-04-07,90.91161470430086\r
2017-04-14,94.28443016701404\r
2017-04-17,93.42696382547737\r
2017-04-24,90.52704191994613\r
2017-05-07,95.53715757355747\r
2017-05-14,95.22336502740455\r
2017-05-17,92.88291185472501\r
2017-05-24,91.41251920407043\r
2017-05-27,95.49791126045864\r
2017-06-03,95.26256684696675\r
2017-06-06,98.30015776253845\r
2017-06-13,93.2713926546013\r
2017-06-16,96.52037901751676\r
2017-06-23,89.37718205438566\r
2017-06-26,90.52704191994613\r
2017-07-01,84.01348065833287\r
2017-07-03,81.45459934307745\r
2017-07-06,82.26708643774147\r
2017-07-08,80.35179017785292\r
2017-07-11,80.35179017785292\r
2017-07-13,72.16557139550594\r
2017-07-18,72.16557139550594\r
2017-07-21,66.15362636334125\r
2017-07-23,70.69557865551216\r
2017-07-26,70.69557865551216\r
2017-07-28,64.26279617164758\r
2017-07-31,63.52589225693461\r
2017-08-02,63.52589225693461\r
2017-08-05,60.51350172130577\r
2017-08-07,60.67751825072115\r
2017-08-12,54.28577199312643\r
2017-08-15,44.692790653679246\r
2017-08-17,42.96054404582998\r
2017-08-20,43.21865925167226\r
2017-08-22,39.355941887170765\r
2017-08-25,40.777226277036036\r
2017-08-27,38.721486693320216\r
2017-08-30,33.50740157604018\r
2017-09-01,28.741640557540254\r
2017-09-04,29.23227154120289\r
2017-09-09,22.51062508289682\r
2017-09-14,10.304781865169508\r
2017-09-16,10.304781865169508\r
2017-09-19,10.304781865169508\r
2017-09-21,13.241809799291508\r
2017-09-24,13.241809799291508\r
2017-10-06,9.660145462475256\r
2017-10-09,9.660145462475256\r
2017-10-11,9.899960218124006\r
2017-10-14,9.899960218124006\r
2017-10-16,11.45496285168814\r
2017-10-19,11.16714213731254\r
2017-10-21,11.900721522716967\r
2017-10-24,11.015937055230836\r
2017-10-26,12.073948405466497\r
2017-10-31,11.574314758497888\r
2018-03-13,82.60038282222371\r
2018-03-18,82.60038282222371\r
2018-03-23,82.60038282222371\r
2018-04-19,91.72130695865309\r
2018-04-22,93.73841257035086\r
2018-04-24,93.54370923916981\r
2018-04-27,94.01126516352053\r
2018-04-29,94.9491303577606\r
2018-05-07,97.30980969311076\r
2018-05-09,96.67806240532158\r
2018-06-03,94.20635115575904\r
2018-06-08,94.20635115575904\r
2018-06-13,94.20635115575904\r
2018-06-16,99.85297966152443\r
2018-06-18,100.0\r
2018-06-21,98.77692745026745\r
2018-06-26,99.61346000534634\r
2018-06-28,97.86391779995913\r
2018-07-01,97.86391779995913\r
2018-07-03,98.8564774197052\r
2018-07-06,98.89626186697225\r
2018-07-08,99.85297966152443\r
2018-07-11,99.85297966152443\r
2018-07-13,100.0\r
2018-07-18,97.66587973211742\r
2018-07-21,98.06211391004429\r
2018-07-23,94.83169663736528\r
2018-07-26,96.12661444127876\r
2018-07-28,96.12661444127876\r
2018-07-31,98.7371619291729\r
2018-08-02,92.18525759401417\r
2018-08-05,95.02745131723394\r
2018-08-07,95.02745131723394\r
2018-08-10,95.02745131723394\r
2018-08-12,90.98860633374014\r
2018-08-20,86.49019807114388\r
2018-08-22,86.22617283260624\r
2018-08-25,86.03777817185667\r
2018-08-27,80.82894680626883\r
2018-08-30,82.52627107228047\r
2018-09-01,69.41048163546509\r
2018-09-06,69.20296364722742\r
2018-09-11,67.65439638465743\r
2018-09-14,70.59103571081423\r
2018-09-16,70.59103571081423\r
2018-09-19,70.59103571081423\r
2018-09-21,67.27796068091087\r
2018-09-24,71.91974516574128\r
2018-09-26,68.78866258957001\r
2018-09-29,62.29411988717036\r
2018-10-01,62.29411988717036\r
2018-10-06,63.72653385851965\r
2018-10-09,58.94786122305125\r
2018-10-14,72.90503163227737\r
2018-10-19,72.90503163227737\r
2018-10-21,87.32206083311095\r
2018-10-24,77.54844141291582\r
2018-10-26,81.49146161523967\r
2019-02-18,82.60038282222371\r
2019-02-21,82.60038282222371\r
2019-02-23,87.77712571367417\r
2019-02-26,87.77712571367417\r
2019-02-28,87.1327256467737\r
2019-03-03,86.94355244053365\r
2019-03-08,81.78659632283339\r
2019-03-10,81.78659632283339\r
2019-03-18,69.44509176769155\r
2019-03-23,89.98971987887626\r
2019-03-25,94.9882876566136\r
2019-03-28,91.06562364327877\r
2019-03-30,91.72130695865309\r
2019-04-02,91.72130695865309\r
2019-04-07,91.72130695865309\r
2019-04-09,89.53016193872158\r
2019-04-12,82.74868495264819\r
2019-04-14,84.16277685963192\r
2019-04-17,95.41943769848935\r
2019-04-19,89.72153173578093\r
2019-04-27,97.58670877200392\r
2019-04-29,93.93327539274472\r
2019-05-02,93.93327539274472\r
2019-05-09,94.51882010613136\r
2019-05-14,95.65493463467241\r
2019-06-01,99.81304397873066\r
2019-06-03,100.0\r
2019-06-06,100.0\r
2019-06-11,100.0\r
2019-06-13,98.1017720911675\r
2019-06-18,100.0\r
2019-06-21,100.0\r
2019-06-23,100.0\r
2019-06-26,100.0\r
2019-06-28,100.0\r
2019-07-01,98.69740271787897\r
2019-07-03,98.7371619291729\r
2019-07-06,98.26046799463336\r
2019-07-08,96.44157536282691\r
2019-07-11,96.24467720901765\r
2019-07-13,95.49791126045864\r
2019-07-16,93.97226708999227\r
2019-07-18,94.20635115575904\r
2019-07-21,81.52833045915673\r
2019-07-23,74.25064099287813\r
2019-07-26,84.27481754617226\r
2019-07-28,84.08811570254308\r
2019-07-31,86.56569226694823\r
2019-08-02,91.06562364327877\r
2019-08-05,90.71924801137752\r
2019-08-07,93.07707238932599\r
2019-08-10,92.96055689636273\r
2019-08-12,88.72816832026872\r
2019-08-15,89.72153173578093\r
2019-08-17,87.39784024538393\r
2019-08-20,86.49019807114388\r
2019-08-22,79.54683277169063\r
2019-08-25,83.04560359626626\r
2019-08-27,81.45459934307745\r
2019-08-30,77.00690764294501\r
2019-09-04,71.8495698223023\r
2019-09-06,68.8231502288055\r
2019-09-09,65.61118542772718\r
2019-09-11,60.05518670304664\r
2019-09-14,52.166340280921496\r
2019-09-16,52.19726710986542\r
2019-09-19,52.19726710986542\r
2019-09-24,57.173840529223995\r
2019-09-26,49.382350459947645\r
2019-09-29,64.29637134206867\r
2019-10-01,64.26279617164758\r
2019-10-09,54.852353255613515\r
2019-10-11,54.852353255613515\r
2019-10-14,54.852353255613515\r
2019-10-16,54.852353255613515\r
2019-10-19,57.398437726173114\r
2019-10-26,61.99593810597918\r
2019-10-29,61.99593810597918\r
2020-02-26,91.60546346652247\r
2020-02-28,89.60669053549238\r
2020-03-04,88.72816832026872\r
2020-03-07,88.72816832026872\r
2020-03-14,87.89103752851405\r
2020-03-19,93.69945914257019\r
2020-03-22,93.62157142820107\r
2020-03-24,95.18416956627858\r
2020-03-29,93.77737237777967\r
2020-04-01,94.87083484758031\r
2020-04-03,94.87083484758031\r
2020-04-06,95.77276886690686\r
2020-04-08,95.14498046414352\r
2020-04-11,97.30980969311076\r
2020-04-23,98.02246204790089\r
2020-04-26,99.45390618739559\r
2020-04-28,99.77311459126399\r
2020-05-03,98.45897998609871\r
2020-05-06,98.45897998609871\r
2020-05-11,96.75694212966589\r
2020-05-21,24.866314884735075\r
2020-05-23,24.866314884735075\r
2020-05-26,100.0\r
2020-05-28,97.38889207731937\r
2020-05-31,97.38889207731937\r
2020-06-05,97.38889207731937\r
2020-06-10,100.0\r
2020-06-12,97.50756311385199\r
2020-06-20,34.57896382568812\r
2020-06-22,98.93605262188758\r
2020-06-25,95.30177502441056\r
2020-06-27,99.61346000534634\r
2020-06-30,99.61346000534634\r
2020-07-02,99.0554627271478\r
2020-07-05,99.09527870728164\r
2020-07-07,98.1017720911675\r
2020-07-10,99.21476447530748\r
2020-07-12,98.26046799463336\r
2020-07-15,96.63863204993801\r
2020-07-17,96.63863204993801\r
2020-07-20,98.06211391004429\r
2020-07-22,91.33538639100934\r
2020-07-25,99.29445317164617\r
2020-07-27,90.83464875956771\r
2020-07-30,78.16398596985687\r
2020-08-01,75.784974920337\r
2020-08-04,75.784974920337\r
2020-08-06,73.93106795189682\r
2020-08-09,66.69782567190585\r
2020-08-11,67.68865884335035\r
2020-08-14,63.55931520865615\r
2020-08-16,62.692572039744334\r
2020-08-19,61.566227057912116\r
2020-08-21,61.566227057912116\r
2020-08-24,60.28417258463381\r
2020-08-26,54.883897933800554\r
2020-09-03,42.44614337367744\r
2020-09-05,28.18146845923499\r
2020-09-08,7.94382866787897\r
2020-09-10,7.94382866787897\r
2020-09-13,5.194257435228461\r
2020-09-15,5.181803883319285\r
2020-09-18,4.63368230853001\r
2020-09-20,5.48392753181022\r
2020-09-25,5.83182868966427\r
2020-09-28,5.83182868966427\r
2020-09-30,8.708965193172096\r
2020-10-03,8.724244036866246\r
2020-10-08,7.506790554433264\r
2020-10-10,1.8661816918516267\r
2020-10-15,1.607391823196329\r
2020-10-18,1.607391823196329\r
2020-10-20,1.607391823196329\r
2020-10-25,3.974554220987186\r
2021-02-17,54.16018001688779\r
2021-02-20,54.16018001688779\r
2021-02-25,53.035018564234704\r
2021-02-27,58.59134935400165\r
2021-03-02,56.02425878926775\r
2021-03-04,56.43832394095385\r
2021-03-14,52.63100064596116\r
2021-03-22,58.94786122305125\r
2021-03-24,60.447944100911855\r
2021-03-29,57.88088500119321\r
2021-04-01,57.88088500119321\r
2021-04-03,60.940308425129984\r
2021-04-06,62.32728599010899\r
2021-04-08,62.32728599010899\r
2021-04-11,51.88832397430117\r
2021-04-13,51.88832397430117\r
2021-04-23,61.83052525595636\r
2021-04-28,61.83052525595636\r
2021-05-03,62.29411988717036\r
2021-05-13,71.21920730756295\r
2021-05-18,66.83414988695876\r
2021-05-21,66.76597406895144\r
2021-05-23,66.76597406895144\r
2021-05-26,68.06599685976086\r
2021-05-28,68.06599685976086\r
2021-05-31,76.61073385347991\r
2021-06-05,69.41048163546509\r
2021-06-10,77.58459681823966\r
2021-06-12,77.58459681823966\r
2021-06-15,79.18199950745006\r
2021-06-17,79.18199950745006\r
2021-06-22,74.85575983863637\r
2021-06-25,74.85575983863637\r
2021-06-27,64.59885874360188\r
2021-07-10,72.79921263280484\r
2021-07-12,61.00607587626531\r
2021-07-15,73.0815311951169\r
2021-07-17,73.0815311951169\r
2021-07-20,63.82694813368782\r
2021-07-22,60.9074351828937\r
2021-07-27,59.989825251033615\r
2021-07-30,57.23797574813736\r
2021-08-01,55.168121499042975\r
2021-08-04,55.168121499042975\r
2021-08-06,55.168121499042975\r
2021-08-11,53.035018564234704\r
2021-08-14,49.65500512804702\r
2021-08-16,49.65500512804702\r
2021-08-19,47.69915970950702\r
2021-08-21,44.48930637934443\r
2021-08-24,43.59256706300626\r
2021-08-26,39.300610648784215\r
2021-08-29,36.492738504728706\r
2021-08-31,35.82363261282655\r
2021-09-03,40.608986099204955\r
2021-09-05,39.24531009019684\r
2021-09-08,43.161247670546125\r
2021-09-30,28.497553688558458\r
2021-10-03,28.497553688558458\r
2021-10-05,35.13294876293303\r
2021-10-08,35.13294876293303\r
2021-10-10,35.13294876293303\r
2021-10-13,34.71055020719054\r
2021-10-15,35.66377391989819\r
2021-10-18,30.173460220888547\r
2021-10-20,30.173460220888547\r
2021-10-23,30.173460220888547\r
2022-02-17,52.84839747882884\r
2022-02-20,54.2543632530893\r
2022-02-22,56.66177948103779\r
2022-02-25,58.10657130517159\r
2022-02-27,58.10657130517159\r
2022-03-02,59.85918650317063\r
2022-03-07,62.360459048951796\r
2022-03-09,61.99593810597918\r
2022-03-14,56.40643012911804\r
2022-03-22,73.5766241481851\r
2022-03-24,74.89141531724299\r
2022-03-29,74.89141531724299\r
2022-04-03,71.32411569034932\r
2022-04-11,78.78144661768359\r
2022-04-13,79.10911217692478\r
2022-04-16,76.2512749642747\r
2022-04-18,78.67234388368941\r
2022-04-23,80.46180442591684\r
2022-04-26,85.62388172424089\r
2022-04-28,86.03777817185667\r
2022-05-01,85.92481932965784\r
2022-05-08,82.71159959278172\r
2022-05-11,94.12829763618478\r
2022-05-13,99.97282447653316\r
2022-05-16,92.34011272724419\r
2022-05-18,94.59700103939245\r
2022-05-21,93.46587257997705\r
2022-05-23,93.97226708999227\r
2022-05-26,95.14498046414352\r
2022-05-28,95.26256684696675\r
2022-05-31,94.71432019289813\r
2022-06-02,94.59700103939245\r
2022-06-07,94.79256479114213\r
2022-06-10,92.26267235835743\r
2022-06-12,91.87585467321796\r
2022-06-15,87.24630732573438\r
2022-06-17,88.76629399219394\r
2022-06-20,83.56621903895144\r
2022-06-25,81.74968149425527\r
2022-06-27,79.72949714931244\r
2022-07-02,76.28719087182093\r
2022-07-05,77.2955395655394\r
2022-07-07,77.2955395655394\r
2022-07-10,74.5351617118725\r
2022-07-12,69.37587830228453\r
2022-07-15,69.34128176886841\r
2022-07-17,69.86094341887417\r
2022-07-20,65.67889427890896\r
2022-07-22,61.401267314614394\r
2022-07-25,61.23648202139663\r
2022-07-27,56.66177948103779\r
2022-07-30,56.82160353205232\r
2022-08-01,46.62928863054613\r
2022-08-04,41.99095060578688\r
2022-08-06,38.748987168024925\r
2022-08-09,39.13480104905222\r
2022-08-11,35.37143189233532\r
2022-08-14,32.577510701996005\r
2022-08-16,29.454121896288775\r
2022-08-19,29.800534743785178\r
2022-08-21,27.866774097503942\r
2022-08-24,25.867121526798577\r
2022-08-26,17.918817925318507\r
2022-08-29,18.347030876854003\r
2022-09-05,27.121981537713058\r
2022-09-10,26.503463083184126\r
2022-09-13,4.008247282661411\r
2022-09-18,3.536113315058844\r
2022-09-20,3.5682936515137964\r
2022-09-23,3.0471126878425827\r
2022-10-05,4.550600028250519\r
2022-10-08,6.772552931418993\r
2022-10-10,6.772552931418993\r
2022-10-13,4.996417917646494\r
2022-10-15,5.281761713586784\r
2022-10-18,6.0684235989026725\r
2022-10-20,5.936524198970755\r
2022-10-23,5.818793405100484\r
2022-10-25,8.121362648289532\r
2022-10-28,7.8996870536671135\r
2022-10-30,7.15007610277143\r
2023-02-22,27.217636732146044\r
2023-03-09,74.10854147453311\r
2023-03-12,77.58459681823966\r
2023-03-14,75.10548866423474\r
2023-03-17,75.46281241469998\r
2023-03-22,75.03410412919045\r
2023-03-24,72.86975190288736\r
2023-03-27,74.64196750378761\r
2023-04-01,86.03777817185667\r
2023-04-03,85.77429852044672\r
2023-04-06,85.17325580085019\r
2023-04-08,76.50282624412257\r
2023-04-16,77.2233416970348\r
2023-04-21,74.60635887708804\r
2023-04-23,74.60635887708804\r
2023-04-26,74.42841619467121\r
`;export{n as default};