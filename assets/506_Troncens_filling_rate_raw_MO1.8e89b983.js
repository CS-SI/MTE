const n=`date,value\r
2017-01-26,32.77515593845206\r
2017-01-29,49.141725633182894\r
2017-02-15,36.70593781760398\r
2017-02-18,44.43617448370519\r
2017-02-25,47.23836717577131\r
2017-03-10,53.031728784677654\r
2017-03-30,41.99928779020897\r
2017-04-06,66.06156420630877\r
2017-04-09,64.28670173539034\r
2017-04-19,45.05336278612814\r
2017-04-29,61.48453918256305\r
2017-05-09,58.04766071081499\r
2017-05-26,60.79128414749492\r
2017-06-18,51.722816421045245\r
2017-07-05,65.34946013181062\r
2017-07-18,55.35149250678456\r
2017-08-02,46.2972207013609\r
2017-08-12,42.30109526335453\r
2017-08-14,56.02105432956236\r
2017-08-22,35.56598213792417\r
2017-08-24,49.141725633182894\r
2017-08-29,41.69828565043002\r
2017-09-08,52.37575023200356\r
2017-09-21,52.70335952199983\r
2017-09-23,44.1287703588418\r
2017-10-08,45.05336278612814\r
2017-10-11,39.61394557574317\r
2017-10-13,39.61394557574317\r
2017-10-16,36.70593781760398\r
2017-10-23,42.30109526335453\r
2017-10-26,35.84971490842856\r
2017-10-31,46.610152446253345\r
2017-11-17,40.20540710388411\r
2017-11-20,35.00103909763707\r
2017-11-22,36.99301472097568\r
2017-11-27,39.319440209664485\r
2017-11-30,37.56966247139032\r
2017-12-05,35.84971490842856\r
2017-12-12,40.800126084024676\r
2017-12-25,31.141729717017725\r
2018-01-09,46.2972207013609\r
2018-01-24,73.71042604398134\r
2018-02-25,88.3278950184629\r
2018-03-02,83.60586701055075\r
2018-03-22,91.9324363667185\r
2018-03-30,77.08318339222909\r
2018-04-19,82.05340600126696\r
2018-04-21,93.95807045944935\r
2018-04-24,78.98111637713237\r
2018-05-11,93.14584474550396\r
2018-05-21,93.55162940995432\r
2018-06-20,98.47203767203499\r
2018-06-23,86.34864988894407\r
2018-06-25,95.18132466969091\r
2018-07-08,66.06156420630877\r
2018-07-10,95.5903840246364\r
2018-07-13,77.46139411222455\r
2018-07-15,82.82828228090182\r
2018-07-23,77.08318339222909\r
2018-07-25,77.84029362660743\r
2018-08-02,78.98111637713237\r
2018-08-04,72.96857498279424\r
2018-08-12,72.59869807705874\r
2018-08-19,66.77653777308336\r
2018-08-22,63.933892346869435\r
2018-08-27,63.581806352517766\r
2018-09-03,59.41357583603784\r
2018-09-08,74.08239839520125\r
2018-09-11,71.49327276993591\r
2018-09-16,57.708032815959584\r
2018-09-23,60.44575524669627\r
2018-09-26,60.10096017843465\r
2018-10-03,63.581806352517766\r
2018-10-06,68.57647420756152\r
2018-10-23,51.722816421045245\r
2018-11-15,68.21506194922009\r
2018-11-17,59.756900015478244\r
2018-11-27,59.0709887238143\r
2018-12-07,63.23044477316239\r
2018-12-27,61.137545813458146\r
2019-01-16,57.708032815959584\r
2019-02-03,100.0\r
2019-02-13,43.211335017326604\r
2019-02-15,80.89618417816527\r
2019-02-20,72.22952146412902\r
2019-02-23,74.82843225834847\r
2019-02-25,72.59869807705874\r
2019-03-22,66.41869279723703\r
2019-03-25,81.66698556204831\r
2019-03-27,72.59869807705874\r
2019-03-30,66.77653777308336\r
2019-05-01,56.02105432956236\r
2019-05-06,74.45506743070192\r
2019-05-14,81.28124468031737\r
2019-06-08,95.5903840246364\r
2019-06-13,25.423542568558126\r
2019-06-28,80.12810761823424\r
2019-07-05,71.86104605628661\r
2019-07-10,63.933892346869435\r
2019-07-15,78.2198810776445\r
2019-07-23,44.1287703588418\r
2019-07-25,46.2972207013609\r
2019-08-04,50.42612221098203\r
2019-08-09,45.36314417246972\r
2019-08-14,49.46166746046788\r
2019-08-17,38.14962456764428\r
2019-08-22,36.99301472097568\r
2019-08-24,42.60370659868416\r
2019-08-29,54.35278157176258\r
2019-09-08,40.20540710388411\r
2019-09-11,42.30109526335453\r
2019-09-13,45.98507450058873\r
2019-09-16,41.09870330256829\r
2019-10-08,44.1287703588418\r
2019-10-11,38.14962456764428\r
2019-10-13,40.50236017813524\r
2019-10-26,41.69828565043002\r
2019-12-05,77.84029362660743\r
2019-12-10,65.70515298727013\r
2019-12-15,39.90926839013532\r
2019-12-25,57.36914749087625\r
2019-12-27,79.36276252842038\r
2019-12-30,59.756900015478244\r
2020-01-09,98.88629947557789\r
2020-01-11,97.64545830934954\r
2020-01-14,84.38615373518405\r
2020-01-16,92.33624749064123\r
2020-01-19,86.74316211762678\r
2020-01-29,72.59869807705874\r
2020-02-05,93.55162940995432\r
2020-02-15,56.02105432956236\r
2020-02-20,68.93859702595832\r
2020-03-11,90.32379246974011\r
2020-03-21,81.66698556204831\r
2020-03-24,63.581806352517766\r
2020-03-26,64.28670173539034\r
2020-04-03,80.89618417816527\r
2020-04-05,60.10096017843465\r
2020-04-10,67.49437295500522\r
2020-05-03,80.12810761823424\r
2020-05-05,90.32379246974011\r
2020-05-18,72.96857498279424\r
2020-05-20,84.38615373518405\r
2020-05-25,100.0\r
2020-05-28,83.60586701055075\r
2020-05-30,86.74316211762678\r
2020-06-24,74.08239839520125\r
2020-07-07,60.44575524669627\r
2020-07-09,78.60015561128469\r
2020-07-19,74.82843225834847\r
2020-07-22,67.85436121038579\r
2020-07-24,40.50236017813524\r
2020-07-27,52.37575023200356\r
2020-08-06,33.050407411364255\r
2020-08-08,53.690742416912464\r
2020-08-21,51.397494342391646\r
2020-08-23,39.90926839013532\r
2020-08-31,39.319440209664485\r
2020-09-02,37.28092348731685\r
2020-09-05,41.99928779020897\r
2020-09-10,47.869707983313724\r
2020-09-12,32.77515593845206\r
2020-09-17,35.00103909763707\r
2020-09-30,41.99928779020897\r
2020-11-09,20.378610284734727\r
2020-11-11,22.251447597186708\r
2020-11-14,18.345855876465166\r
2020-11-21,35.56598213792417\r
2020-11-26,25.925419531349007\r
2020-11-29,17.905001067095743\r
2020-12-26,35.56598213792417\r
2021-01-03,70.02921931363903\r
2021-02-02,100.0\r
2021-02-14,98.05842371771925\r
2021-02-17,100.0\r
2021-02-19,72.59869807705874\r
2021-02-24,92.74071719512234\r
2021-02-27,89.92328536871523\r
2021-03-01,81.66698556204831\r
2021-03-04,74.82843225834847\r
2021-03-24,66.06156420630877\r
2021-03-29,88.3278950184629\r
2021-03-31,90.32379246974011\r
2021-04-05,71.86104605628661\r
2021-04-15,93.55162940995432\r
2021-04-23,88.3278950184629\r
2021-05-03,85.95480761299508\r
2021-05-20,71.86104605628661\r
2021-05-30,100.0\r
2021-06-09,79.36276252842038\r
2021-06-14,85.56163607232816\r
2021-07-02,71.86104605628661\r
2021-07-22,80.12810761823424\r
2021-08-11,78.98111637713237\r
2021-08-26,62.529898967785094\r
2021-08-28,53.690742416912464\r
2021-08-31,68.21506194922009\r
2021-09-05,59.756900015478244\r
2021-09-12,71.86104605628661\r
2021-10-07,67.49437295500522\r
2021-10-12,70.02921931363903\r
2021-10-15,57.03100585323503\r
2021-10-17,55.01783679554748\r
2021-10-27,56.35695814020579\r
2021-11-19,59.41357583603784\r
2021-12-14,96.41046036617286\r
2021-12-16,94.77291881140494\r
2021-12-19,93.14584474550396\r
2022-01-13,65.34946013181062\r
2022-01-15,78.60015561128469\r
2022-01-23,100.0\r
2022-01-25,82.82828228090182\r
2022-02-09,79.36276252842038\r
2022-03-01,99.71676385636077\r
2022-03-21,99.71676385636077\r
2022-03-24,98.88629947557789\r
2022-03-26,84.38615373518405\r
2022-04-05,83.21673649416222\r
2022-05-08,65.34946013181062\r
2022-05-10,93.95807045944935\r
2022-05-15,48.822557479671495\r
2022-06-17,80.51180488113268\r
2022-06-22,90.32379246974011\r
2022-07-12,78.2198810776445\r
2022-07-14,79.74509322198395\r
2022-07-17,68.93859702595832\r
2022-08-01,60.10096017843465\r
2022-08-03,57.03100585323503\r
2022-08-28,61.137545813458146\r
2022-09-05,41.99928779020897\r
2022-09-10,43.82216145994437\r
2022-09-20,49.7823816804827\r
2022-09-22,49.141725633182894\r
2022-10-02,36.13428623749984\r
2022-10-05,38.14962456764428\r
2022-10-07,44.1287703588418\r
2022-11-11,41.69828565043002\r
2022-11-16,42.60370659868416\r
2022-12-04,40.20540710388411\r
2022-12-21,39.61394557574317\r
2022-12-24,41.69828565043002\r
2023-01-10,40.20540710388411\r
2023-01-18,60.44575524669627\r
2023-02-02,57.36914749087625\r
2023-02-04,50.42612221098203\r
2023-02-09,44.1287703588418\r
2023-02-12,50.10386701948883\r
2023-02-14,60.79128414749492\r
2023-02-17,52.048902125761245\r
2023-02-24,52.37575023200356\r
2023-03-09,56.02105432956236\r
2023-03-16,61.8322631980905\r
2023-04-05,61.137545813458146\r
2023-04-08,52.048902125761245\r
2023-04-10,50.74914599562225\r
2023-04-18,56.02105432956236\r
2023-04-20,59.0709887238143\r
`;export{n as default};