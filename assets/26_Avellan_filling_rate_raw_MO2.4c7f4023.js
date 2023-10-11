const n=`date,value\r
2017-02-06,55.80757785491802\r
2017-02-16,65.65770084830265\r
2017-02-19,65.37790107316181\r
2017-02-26,61.497329004605625\r
2017-03-01,63.9841056220538\r
2017-03-08,65.37790107316181\r
2017-03-11,64.8193403233642\r
2017-03-21,56.61056821430122\r
2017-03-28,71.89962048341317\r
2017-03-31,71.89962048341317\r
2017-04-07,57.95622983401727\r
2017-04-10,48.73299338996831\r
2017-04-17,50.80013990562114\r
2017-04-20,47.96425228602837\r
2017-04-30,48.73299338996831\r
2017-05-07,48.99002491260797\r
2017-05-10,48.99002491260797\r
2017-05-17,43.92483073007893\r
2017-05-27,49.76346080543305\r
2017-05-30,52.104642230894186\r
2017-06-06,44.42410996676776\r
2017-06-09,48.22010620181941\r
2017-06-16,51.581693282124895\r
2017-06-19,52.104642230894186\r
2017-06-26,52.104642230894186\r
2017-06-29,47.45372822490872\r
2017-07-01,52.62911429248043\r
2017-07-04,59.03931696810356\r
2017-07-06,50.80013990562114\r
2017-07-11,50.80013990562114\r
2017-07-14,54.74210647305857\r
2017-07-19,62.599040692995054\r
2017-07-21,62.599040692995054\r
2017-07-24,62.599040692995054\r
2017-07-26,48.73299338996831\r
2017-07-29,48.73299338996831\r
2017-07-31,59.03931696810356\r
2017-08-03,59.03931696810356\r
2017-08-05,50.28102728225201\r
2017-08-08,53.418664211947075\r
2017-08-13,55.007916808048584\r
2017-08-15,55.007916808048584\r
2017-08-18,56.0748723776827\r
2017-08-20,67.0618689327483\r
2017-08-23,67.0618689327483\r
2017-08-25,51.32079199924448\r
2017-09-02,56.0748723776827\r
2017-09-04,51.84297696372299\r
2017-09-07,58.76800154950583\r
2017-09-12,40.71976835350984\r
2017-09-14,37.8245781953758\r
2017-09-17,40.23296132123988\r
2017-09-19,40.23296132123988\r
2017-09-22,40.23296132123988\r
2017-09-24,43.67580439828884\r
2017-09-27,43.92483073007893\r
2017-10-04,45.93169083584277\r
2017-10-07,39.99019416791359\r
2017-10-09,44.674360927849996\r
2017-10-12,36.63665814294182\r
2017-10-14,39.99019416791359\r
2017-10-17,38.06347424516106\r
2017-10-19,40.71976835350984\r
2017-10-22,39.74785269940412\r
2017-10-24,41.20826521191646\r
2017-10-27,40.23296132123988\r
2017-10-29,35.92919689012497\r
2017-11-01,36.16457360662324\r
2017-11-03,42.43684504906588\r
2017-11-06,42.43684504906588\r
2017-11-13,39.264451190480756\r
2017-11-16,44.42410996676776\r
2017-11-18,34.294098768337435\r
2017-11-21,34.52633197022894\r
2017-11-23,34.52633197022894\r
2017-11-26,34.06231972081495\r
2017-11-28,35.22574365597723\r
2017-12-01,38.782765617800344\r
2017-12-03,39.74785269940412\r
2017-12-06,39.74785269940412\r
2017-12-08,39.264451190480756\r
2017-12-13,41.20826521191646\r
2017-12-16,47.19905986119731\r
2017-12-21,40.23296132123988\r
2017-12-23,40.23296132123988\r
2017-12-26,36.16457360662324\r
2017-12-28,37.58611793335954\r
2018-01-17,41.45314467500399\r
2018-01-20,41.45314467500399\r
2018-01-27,41.45314467500399\r
2018-02-04,73.05198273214944\r
2018-02-09,73.05198273214944\r
2018-02-11,75.66406448236954\r
2018-02-14,67.62593703161095\r
2018-02-19,72.47513889766371\r
2018-02-21,69.89580846849168\r
2018-03-03,89.72479185327393\r
2018-03-06,87.28292385789791\r
2018-03-08,87.28292385789791\r
2018-03-13,87.58708967100361\r
2018-03-16,58.497048083418704\r
2018-03-21,58.497048083418704\r
2018-03-23,68.19136979113118\r
2018-03-26,81.26455989244266\r
2018-03-28,81.26455989244266\r
2018-03-31,81.26455989244266\r
2018-04-02,81.26455989244266\r
2018-04-05,83.6569627717508\r
2018-04-07,70.7525777939108\r
2018-04-17,91.87733403741905\r
2018-04-20,95.91378353533435\r
2018-04-22,86.67551185675484\r
2018-04-25,90.95300836626733\r
2018-04-27,75.66406448236954\r
2018-04-30,73.34090029934649\r
2018-05-05,73.34090029934649\r
2018-05-10,66.4991703187289\r
2018-06-01,69.61089082929232\r
2018-06-09,71.0388377910675\r
2018-06-14,65.65770084830265\r
2018-06-16,70.7525777939108\r
2018-06-19,70.18106255976659\r
2018-06-21,69.61089082929232\r
2018-06-24,69.61089082929232\r
2018-06-26,69.61089082929232\r
2018-06-29,71.89962048341317\r
2018-07-01,80.37260548128702\r
2018-07-04,68.75816243251282\r
2018-07-06,68.75816243251282\r
2018-07-09,69.32631022165826\r
2018-07-11,66.21833608867811\r
2018-07-14,66.21833608867811\r
2018-07-19,64.54058060193518\r
2018-07-21,52.104642230894186\r
2018-07-24,66.4991703187289\r
2018-07-26,59.583030859635386\r
2018-07-29,59.583030859635386\r
2018-07-31,63.15201387098164\r
2018-08-03,68.75816243251282\r
2018-08-05,65.37790107316181\r
2018-08-08,85.46437903128808\r
2018-08-10,60.948601080178946\r
2018-08-15,59.31099363750222\r
2018-08-18,57.147734859445535\r
2018-08-20,57.147734859445535\r
2018-08-23,62.87535138403398\r
2018-08-25,56.878968052302014\r
2018-08-28,50.54039074470559\r
2018-08-30,46.69091496230003\r
2018-09-02,55.27409932010301\r
2018-09-04,55.27409932010301\r
2018-09-07,53.15510305354408\r
2018-09-12,57.416867907629346\r
2018-09-14,47.70879266435447\r
2018-09-19,55.54065325307168\r
2018-09-22,48.22010620181941\r
2018-09-24,53.15510305354408\r
2018-09-27,47.70879266435447\r
2018-09-29,47.96425228602837\r
2018-10-02,45.93169083584277\r
2018-10-04,46.94478847217511\r
2018-10-09,49.24744722982628\r
2018-10-12,60.67477143998692\r
2018-10-14,60.67477143998692\r
2018-10-19,62.04747731540583\r
2018-10-22,56.878968052302014\r
2018-10-24,51.32079199924448\r
2018-11-01,56.34253607744776\r
2018-11-03,46.94478847217511\r
2018-11-18,55.54065325307168\r
2018-11-26,69.89580846849168\r
2018-11-28,52.89191948358156\r
2018-12-01,57.416867907629346\r
2018-12-03,57.416867907629346\r
2018-12-06,66.21833608867811\r
2018-12-08,61.772225945439985\r
2018-12-11,59.31099363750222\r
2018-12-18,55.80757785491802\r
2018-12-28,27.762463258330765\r
2019-01-02,10.715630094874795\r
2019-01-05,17.31867884762938\r
2019-01-07,10.221891099980585\r
2019-01-10,11.384306900579173\r
2019-01-12,11.384306900579173\r
2019-01-15,8.938920545051795\r
2019-01-22,8.938920545051795\r
2019-01-25,10.221891099980585\r
2019-01-27,13.45862757713991\r
2019-01-30,13.45862757713991\r
2019-02-04,29.52418921947435\r
2019-02-06,17.128590179039087\r
2019-02-09,28.63940631053715\r
2019-02-11,37.8245781953758\r
2019-02-14,31.091125475793213\r
2019-02-16,28.199948424745052\r
2019-02-19,33.13977121394251\r
2019-02-21,40.71976835350984\r
2019-03-01,51.32079199924448\r
2019-03-03,52.104642230894186\r
2019-03-08,51.06027393289878\r
2019-03-11,37.8245781953758\r
2019-03-13,36.16457360662324\r
2019-03-16,39.02339335585646\r
2019-03-18,34.52633197022894\r
2019-03-21,36.400394429040425\r
2019-03-23,36.400394429040425\r
2019-03-26,35.69426550296911\r
2019-03-28,33.13977121394251\r
2019-03-31,28.199948424745052\r
2019-04-02,33.830996127071536\r
2019-04-05,29.969489278821516\r
2019-04-07,27.762463258330765\r
2019-04-10,29.52418921947435\r
2019-04-15,40.4761530753283\r
2019-04-17,39.99019416791359\r
2019-04-20,35.459780677676754\r
2019-04-22,41.698443427752515\r
2019-04-27,48.47635352895888\r
2019-04-30,49.24744722982628\r
2019-05-02,50.80013990562114\r
2019-05-05,55.54065325307168\r
2019-05-07,55.54065325307168\r
2019-05-10,62.32308245123782\r
2019-05-12,71.0388377910675\r
2019-05-15,70.7525777939108\r
2019-05-30,100.0\r
2019-06-01,100.0\r
2019-06-04,94.04456872972064\r
2019-06-06,100.0\r
2019-06-11,100.0\r
2019-06-16,77.12663499364815\r
2019-06-19,100.0\r
2019-06-21,100.0\r
2019-06-24,91.56892507244021\r
2019-06-26,85.46437903128808\r
2019-06-29,83.35681570570253\r
2019-07-01,84.55927359553333\r
2019-07-04,81.86077575441264\r
2019-07-06,73.91972398997537\r
2019-07-11,66.21833608867811\r
2019-07-14,83.95742175560244\r
2019-07-16,70.18106255976659\r
2019-07-19,74.49986212577039\r
2019-07-21,55.27409932010301\r
2019-07-24,86.37226657149154\r
2019-07-26,55.27409932010301\r
2019-07-29,65.65770084830265\r
2019-07-31,54.211605379660966\r
2019-08-03,62.599040692995054\r
2019-08-05,58.497048083418704\r
2019-08-08,64.8193403233642\r
2019-08-10,55.54065325307168\r
2019-08-15,51.32079199924448\r
2019-08-18,60.40129891578319\r
2019-08-20,51.84297696372299\r
2019-08-23,51.06027393289878\r
2019-08-25,51.06027393289878\r
2019-08-28,63.70639163530616\r
2019-08-30,50.28102728225201\r
2019-09-02,52.104642230894186\r
2019-09-04,52.104642230894186\r
2019-09-07,42.19029464538859\r
2019-09-12,36.400394429040425\r
2019-09-14,33.60012929655477\r
2019-09-17,33.830996127071536\r
2019-09-19,34.52633197022894\r
2019-09-24,38.06347424516106\r
2019-09-27,39.264451190480756\r
2019-09-29,32.68125615418544\r
2019-10-02,33.830996127071536\r
2019-10-04,33.830996127071536\r
2019-10-07,29.30226402578341\r
2019-10-14,28.199948424745052\r
2019-10-17,45.17608072219373\r
2019-10-19,40.963806086419595\r
2019-10-27,32.68125615418544\r
2019-10-29,32.68125615418544\r
2019-11-06,39.74785269940412\r
2019-11-08,39.74785269940412\r
2019-11-13,38.06347424516106\r
2019-11-16,38.06347424516106\r
2019-12-03,16.00093698570889\r
2019-12-06,16.00093698570889\r
2019-12-08,54.47666907543337\r
2019-12-13,37.1105094317621\r
2019-12-21,47.96425228602837\r
2019-12-23,54.47666907543337\r
2019-12-28,51.32079199924448\r
2020-01-05,53.68260217279036\r
2020-01-12,52.104642230894186\r
2020-01-20,52.62911429248043\r
2020-01-22,26.246990707974067\r
2020-01-25,26.246990707974067\r
2020-01-27,26.246990707974067\r
2020-01-30,80.07592113947477\r
2020-02-01,80.07592113947477\r
2020-02-04,80.07592113947477\r
2020-02-09,80.07592113947477\r
2020-02-11,69.04206722776874\r
2020-02-14,63.15201387098164\r
2020-02-16,50.28102728225201\r
2020-02-19,50.28102728225201\r
2020-02-21,60.40129891578319\r
2020-02-24,60.12818418787156\r
2020-02-26,55.007916808048584\r
2020-03-07,80.07592113947477\r
2020-03-10,80.07592113947477\r
2020-03-12,31.543103361686974\r
2020-03-15,31.543103361686974\r
2020-03-17,31.543103361686974\r
2020-03-20,31.543103361686974\r
2020-03-22,31.543103361686974\r
2020-04-01,100.0\r
2020-04-04,100.0\r
2020-04-06,74.79042275845428\r
2020-04-09,82.45825075092297\r
2020-04-11,71.61235970087361\r
2020-04-14,76.24812017232372\r
2020-04-24,80.07592113947477\r
2020-04-26,72.47513889766371\r
2020-04-29,88.19633867866033\r
2020-05-04,88.8068078905769\r
2020-05-06,88.8068078905769\r
2020-05-09,88.8068078905769\r
2020-05-11,80.6696070487622\r
2020-05-14,80.6696070487622\r
2020-05-21,50.28102728225201\r
2020-05-24,50.28102728225201\r
2020-05-26,56.878968052302014\r
2020-05-31,56.878968052302014\r
2020-06-03,56.878968052302014\r
2020-06-05,48.22010620181941\r
2020-06-08,53.68260217279036\r
2020-06-10,53.68260217279036\r
2020-06-15,62.599040692995054\r
2020-06-23,100.0\r
2020-06-25,100.0\r
2020-06-28,100.0\r
2020-06-30,100.0\r
2020-07-03,100.0\r
2020-07-05,100.0\r
2020-07-08,100.0\r
2020-07-10,100.0\r
2020-07-15,83.05698103014603\r
2020-07-20,83.05698103014603\r
2020-07-23,80.07592113947477\r
2020-07-30,59.85542794004909\r
2020-08-02,56.34253607744776\r
2020-08-04,58.497048083418704\r
2020-08-07,51.84297696372299\r
2020-08-09,51.84297696372299\r
2020-08-12,49.76346080543305\r
2020-08-14,53.418664211947075\r
2020-08-17,51.84297696372299\r
2020-08-19,52.104642230894186\r
2020-08-22,51.84297696372299\r
2020-08-24,43.42718823050668\r
2020-08-27,46.69091496230003\r
2020-09-01,39.99019416791359\r
2020-09-03,39.99019416791359\r
2020-09-06,63.70639163530616\r
2020-09-08,55.27409932010301\r
2020-09-13,52.62911429248043\r
2020-09-16,33.830996127071536\r
2020-09-18,33.830996127071536\r
2020-09-21,33.830996127071536\r
2020-09-23,40.4761530753283\r
2020-09-26,34.992155688920654\r
2020-09-28,30.8658457746598\r
2020-10-01,28.41943158362875\r
2020-10-03,31.091125475793213\r
2020-10-08,31.091125475793213\r
2020-10-13,22.2609477540959\r
2020-10-16,34.759018036992266\r
2020-10-18,46.18436522566883\r
2020-10-21,31.316878484957943\r
2020-10-28,31.316878484957943\r
2020-11-02,13.813959488137643\r
2020-11-05,16.187331330148634\r
2020-11-07,15.815168803676787\r
2020-11-10,18.471832688047666\r
2020-11-12,18.471832688047666\r
2020-11-15,18.471832688047666\r
2020-11-17,18.666103393881723\r
2020-11-20,18.666103393881723\r
2020-11-22,23.084231598656675\r
2020-11-25,27.980958442151838\r
2020-11-27,32.45269314183426\r
2020-11-30,32.45269314183426\r
2020-12-07,24.545560651699073\r
2020-12-10,31.996963014408486\r
2020-12-12,13.635958628063635\r
2020-12-17,13.635958628063635\r
2020-12-22,13.635958628063635\r
2020-12-25,50.80013990562114\r
2020-12-30,52.104642230894186\r
2021-01-06,32.45269314183426\r
2021-01-11,34.294098768337435\r
2021-01-14,39.505938007234576\r
2021-01-16,39.505938007234576\r
2021-01-19,36.873363542774506\r
2021-01-24,26.032514099417536\r
2021-01-26,23.29139910559195\r
2021-01-29,23.29139910559195\r
2021-01-31,23.084231598656675\r
2021-02-03,23.084231598656675\r
2021-02-08,28.63940631053715\r
2021-02-10,28.63940631053715\r
2021-02-15,22.05648367946639\r
2021-02-18,22.05648367946639\r
2021-02-20,24.756428822300997\r
2021-02-23,21.44638185437084\r
2021-02-25,26.032514099417536\r
2021-02-28,29.52418921947435\r
2021-03-02,27.109962941903532\r
2021-03-05,28.199948424745052\r
2021-03-07,28.63940631053715\r
2021-03-10,28.199948424745052\r
2021-03-12,25.818547567040433\r
2021-03-15,29.08082410523822\r
2021-03-17,26.032514099417536\r
2021-03-20,25.818547567040433\r
2021-03-22,25.818547567040433\r
2021-03-25,24.12539482993354\r
2021-03-27,26.032514099417536\r
2021-03-30,28.199948424745052\r
2021-04-01,23.084231598656675\r
2021-04-04,23.084231598656675\r
2021-04-06,24.756428822300997\r
2021-04-09,20.8412613883098\r
2021-04-16,19.646208289883134\r
2021-05-04,35.92919689012497\r
2021-05-06,37.348094621801195\r
2021-05-09,37.348094621801195\r
2021-05-14,37.348094621801195\r
2021-05-26,30.19286110322034\r
2021-05-29,30.19286110322034\r
2021-05-31,32.22459496744522\r
2021-06-03,31.996963014408486\r
2021-06-05,33.60012929655477\r
2021-06-08,32.68125615418544\r
2021-06-10,32.91028263208256\r
2021-06-13,33.830996127071536\r
2021-06-15,31.091125475793213\r
2021-06-18,32.22459496744522\r
2021-06-25,25.392151854248297\r
2021-06-28,34.294098768337435\r
2021-06-30,26.67746712904504\r
2021-07-03,21.85256657112838\r
2021-07-05,24.12539482993354\r
2021-07-08,29.52418921947435\r
2021-07-10,23.916100996155194\r
2021-07-13,24.3352153544544\r
2021-07-15,24.96781798525228\r
2021-07-18,27.544464510185048\r
2021-07-20,24.545560651699073\r
2021-07-23,22.465956672798416\r
2021-07-25,23.084231598656675\r
2021-07-28,23.084231598656675\r
2021-07-30,20.8412613883098\r
2021-08-02,19.843962020126355\r
2021-08-07,19.843962020126355\r
2021-08-09,17.31867884762938\r
2021-08-12,22.877600663079704\r
2021-08-14,17.31867884762938\r
2021-08-17,15.261652322018962\r
2021-08-19,16.187331330148634\r
2021-08-22,17.128590179039087\r
2021-08-24,17.128590179039087\r
2021-08-27,17.128590179039087\r
2021-08-29,21.85256657112838\r
2021-09-01,21.244118603725372\r
2021-09-06,17.31867884762938\r
2021-09-08,16.187331330148634\r
2021-09-11,16.750241055917048\r
2021-09-13,16.187331330148634\r
2021-09-18,13.281970039533686\r
2021-09-21,14.351944687447538\r
2021-09-23,15.445523321202367\r
2021-09-28,14.53258880815479\r
2021-10-01,15.078420089599327\r
2021-10-06,17.31867884762938\r
2021-10-11,15.078420089599327\r
2021-10-13,14.895829882834255\r
2021-10-16,16.37434878911084\r
2021-10-18,14.713885005674685\r
2021-10-23,12.930690600099712\r
2021-10-26,17.31867884762938\r
2021-10-28,13.992626507428163\r
2021-11-02,19.056402675649426\r
2021-11-05,23.29139910559195\r
2021-11-20,20.640671923834685\r
2021-11-27,20.640671923834685\r
2021-11-30,25.392151854248297\r
2021-12-02,21.244118603725372\r
2021-12-05,21.244118603725372\r
2021-12-07,17.31867884762938\r
2021-12-10,17.31867884762938\r
2021-12-12,19.646208289883134\r
2021-12-15,21.042411035719592\r
2021-12-17,16.187331330148634\r
2021-12-20,15.261652322018962\r
2021-12-22,15.261652322018962\r
2022-01-09,15.445523321202367\r
2022-01-11,16.750241055917048\r
2022-01-14,14.53258880815479\r
2022-01-16,15.630029872327025\r
2022-01-19,15.630029872327025\r
2022-01-21,15.261652322018962\r
2022-01-24,15.630029872327025\r
2022-01-26,15.815168803676787\r
2022-01-29,16.00093698570889\r
2022-02-03,17.128590179039087\r
2022-02-05,16.93910996238533\r
2022-02-08,17.128590179039087\r
2022-02-10,16.00093698570889\r
2022-02-13,15.261652322018962\r
2022-02-15,15.630029872327025\r
2022-02-18,16.00093698570889\r
2022-02-20,15.815168803676787\r
2022-02-23,17.700670285036697\r
2022-02-25,19.646208289883134\r
2022-02-28,19.843962020126355\r
2022-03-02,17.509373145533296\r
2022-03-07,18.471832688047666\r
2022-03-10,18.471832688047666\r
2022-03-22,19.449028853798165\r
2022-03-25,27.762463258330765\r
2022-04-01,21.44638185437084\r
2022-04-04,26.246990707974067\r
2022-04-09,23.916100996155194\r
2022-04-11,23.916100996155194\r
2022-04-14,23.707335790090205\r
2022-04-16,22.05648367946639\r
2022-04-19,22.05648367946639\r
2022-04-24,26.246990707974067\r
2022-04-26,23.084231598656675\r
2022-04-29,22.2609477540959\r
2022-05-01,22.2609477540959\r
2022-05-04,26.246990707974067\r
2022-05-09,25.605092887517344\r
2022-05-11,22.2609477540959\r
2022-05-14,24.96781798525228\r
2022-05-16,25.392151854248297\r
2022-05-19,24.545560651699073\r
2022-05-21,24.12539482993354\r
2022-05-24,24.96781798525228\r
2022-05-26,26.032514099417536\r
2022-05-29,25.818547567040433\r
2022-05-31,23.29139910559195\r
2022-06-05,25.17972627761662\r
2022-06-10,23.084231598656675\r
2022-06-13,23.084231598656675\r
2022-06-18,23.084231598656675\r
2022-06-20,23.084231598656675\r
2022-06-25,18.085062108364188\r
2022-07-03,26.246990707974067\r
2022-07-05,21.042411035719592\r
2022-07-08,24.545560651699073\r
2022-07-10,25.17972627761662\r
2022-07-13,23.916100996155194\r
2022-07-15,21.244118603725372\r
2022-07-18,20.241182717578237\r
2022-07-20,18.27815138512263\r
2022-07-23,18.471832688047666\r
2022-07-25,16.93910996238533\r
2022-07-28,16.93910996238533\r
2022-07-30,18.27815138512263\r
2022-08-02,18.27815138512263\r
2022-08-04,14.351944687447538\r
2022-08-07,18.860960910366163\r
2022-08-09,16.750241055917048\r
2022-08-12,16.750241055917048\r
2022-08-14,17.700670285036697\r
2022-08-19,16.93910996238533\r
2022-08-22,16.561986354246976\r
2022-08-24,14.351944687447538\r
2022-08-27,14.351944687447538\r
2022-08-29,13.992626507428163\r
2022-09-01,15.445523321202367\r
2022-09-03,14.895829882834255\r
2022-09-06,13.281970039533686\r
2022-09-08,13.281970039533686\r
2022-09-16,15.630029872327025\r
2022-09-18,15.630029872327025\r
2022-09-26,15.630029872327025\r
2022-09-28,14.895829882834255\r
2022-10-01,14.895829882834255\r
2022-10-03,14.895829882834255\r
2022-10-06,15.261652322018962\r
2022-10-11,17.700670285036697\r
2022-10-18,14.53258880815479\r
2022-10-26,14.171956088954051\r
2022-10-28,16.750241055917048\r
2022-10-31,13.45862757713991\r
2022-11-02,13.45862757713991\r
2022-11-05,18.666103393881723\r
2022-11-10,16.187331330148634\r
2022-11-17,12.408918664169505\r
2022-11-20,12.930690600099712\r
2022-11-22,12.930690600099712\r
2022-11-25,12.930690600099712\r
2022-11-27,12.930690600099712\r
2022-11-30,13.281970039533686\r
2022-12-02,14.895829882834255\r
2022-12-05,12.064548821564152\r
2022-12-07,13.105989774969725\r
2022-12-10,13.105989774969725\r
2022-12-25,12.75607638991883\r
2022-12-27,16.93910996238533\r
2022-12-30,16.93910996238533\r
2023-01-04,10.881699073818433\r
2023-01-06,10.881699073818433\r
2023-01-09,15.815168803676787\r
2023-01-14,15.815168803676787\r
2023-01-19,16.561986354246976\r
2023-01-21,17.509373145533296\r
2023-01-24,16.37434878911084\r
2023-01-26,16.37434878911084\r
2023-01-29,15.630029872327025\r
2023-01-31,15.630029872327025\r
2023-02-03,15.630029872327025\r
2023-02-05,16.37434878911084\r
2023-02-08,16.37434878911084\r
2023-02-10,16.561986354246976\r
2023-02-13,17.128590179039087\r
2023-02-15,16.37434878911084\r
2023-02-18,16.37434878911084\r
2023-02-20,16.00093698570889\r
2023-03-02,16.00093698570889\r
2023-03-05,18.27815138512263\r
2023-03-07,18.27815138512263\r
2023-03-10,17.31867884762938\r
2023-03-12,17.700670285036697\r
2023-03-15,16.561986354246976\r
2023-03-17,18.666103393881723\r
2023-03-20,18.666103393881723\r
2023-03-22,13.45862757713991\r
2023-03-25,15.078420089599327\r
2023-03-27,16.750241055917048\r
2023-03-30,16.187331330148634\r
2023-04-01,17.31867884762938\r
2023-04-04,17.31867884762938\r
2023-04-06,15.815168803676787\r
2023-04-09,20.8412613883098\r
2023-04-14,15.445523321202367\r
2023-04-16,18.27815138512263\r
2023-04-19,16.93910996238533\r
2023-04-24,17.31867884762938\r
2023-04-26,17.128590179039087\r
2023-05-04,14.713885005674685\r
2023-05-06,13.813959488137643\r
2023-05-11,17.128590179039087\r
2023-05-16,20.640671923834685\r
2023-05-24,24.3352153544544\r
2023-05-26,21.244118603725372\r
2023-06-03,24.545560651699073\r
2023-06-08,27.109962941903532\r
2023-06-10,27.109962941903532\r
2023-06-15,19.646208289883134\r
2023-06-20,19.646208289883134\r
2023-06-23,30.641040833900625\r
2023-06-25,19.646208289883134\r
2023-06-28,30.641040833900625\r
2023-07-05,15.445523321202367\r
2023-07-08,21.44638185437084\r
2023-07-10,19.2524261577106\r
2023-07-13,21.85256657112838\r
2023-07-15,19.056402675649426\r
2023-07-18,20.640671923834685\r
2023-07-20,18.666103393881723\r
2023-07-23,17.31867884762938\r
2023-07-25,17.31867884762938\r
2023-07-28,18.666103393881723\r
2023-07-30,16.37434878911084\r
2023-08-02,16.561986354246976\r
2023-08-04,15.815168803676787\r
2023-08-07,14.895829882834255\r
2023-08-09,14.895829882834255\r
2023-08-12,15.078420089599327\r
2023-08-14,15.630029872327025\r
2023-08-17,13.635958628063635\r
2023-08-19,16.561986354246976\r
2023-08-22,13.45862757713991\r
2023-08-24,15.445523321202367\r
2023-08-29,18.27815138512263\r
2023-09-01,17.128590179039087\r
2023-09-03,16.37434878911084\r
2023-09-06,15.078420089599327\r
2023-09-08,10.715630094874795\r
2023-09-11,11.384306900579173\r
2023-09-13,11.384306900579173\r
2023-09-23,20.44064492945067\r
2023-09-26,17.89256751263684\r
2023-09-28,17.89256751263684\r
2023-10-01,12.064548821564152\r
2023-10-03,12.930690600099712\r
`;export{n as default};
