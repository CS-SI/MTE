const n=`date,value\r
2017-02-15,58881.2557316409\r
2017-02-25,60387.18735967697\r
2017-03-17,41343.32989355491\r
2017-03-27,46008.97325192405\r
2017-04-03,65774.14437118919\r
2017-04-06,65774.14437118919\r
2017-04-23,62673.84995066342\r
2017-05-16,106415.4005030013\r
2017-05-23,106415.4005030013\r
2017-05-26,106415.4005030013\r
2017-06-02,41343.32989355491\r
2017-06-05,41343.32989355491\r
2017-06-25,33806.7648066873\r
2017-07-02,32016.198947333574\r
2017-07-05,47377.59811295115\r
2017-07-07,47377.59811295115\r
2017-07-17,61145.71629228255\r
2017-07-18,61145.71629228255\r
2017-07-22,61145.71629228255\r
2017-08-14,69731.27380833428\r
2017-08-19,69731.27380833428\r
2017-08-21,64216.68527135678\r
2017-08-22,73778.17564561962\r
2017-08-24,73778.17564561962\r
2017-08-26,89956.331497811\r
2017-08-27,89956.331497811\r
2017-08-29,72148.71374627632\r
2017-09-03,84712.50483789903\r
2017-09-23,58881.2557316409\r
2017-10-03,58881.2557316409\r
2017-10-05,80437.21914101862\r
2017-10-06,80437.21914101862\r
2017-10-11,80437.21914101862\r
2017-10-13,82136.94743452211\r
2017-10-15,77913.75027053243\r
2017-10-16,79592.57167432678\r
2017-10-18,76248.94796238866\r
2017-10-25,82992.01240190628\r
2017-10-26,73778.17564561962\r
2017-10-28,73778.17564561962\r
2017-11-04,46691.32594757032\r
2017-11-05,46691.32594757032\r
2017-11-07,46691.32594757032\r
2017-11-14,46691.32594757032\r
2017-11-17,50867.319656828164\r
2017-11-22,60387.18735967697\r
2017-11-27,60387.18735967697\r
2018-02-25,70533.5083144435\r
2018-02-27,70533.5083144435\r
2018-03-05,70533.5083144435\r
2018-03-14,50867.319656828164\r
2018-03-17,50867.319656828164\r
2018-03-19,50867.319656828164\r
2018-03-20,50867.319656828164\r
2018-03-24,50867.319656828164\r
2018-04-18,61145.71629228255\r
2018-04-19,61145.71629228255\r
2018-04-21,68932.6300271295\r
2018-04-26,68932.6300271295\r
2018-05-11,52290.2192672167\r
2018-05-18,51576.85186253629\r
2018-05-19,51576.85186253629\r
2018-05-21,51576.85186253629\r
2018-05-26,50867.319656828164\r
2018-06-20,63443.4348076594\r
2018-06-22,69731.27380833428\r
2018-06-23,69731.27380833428\r
2018-06-25,62673.84995066342\r
2018-06-27,68137.58601616451\r
2018-06-28,68137.58601616451\r
2018-07-03,64993.59165576996\r
2018-07-07,57390.22758121379\r
2018-07-08,71339.32458564916\r
2018-07-12,64993.59165576996\r
2018-07-22,64216.68527135678\r
2018-07-27,76248.94796238866\r
2018-07-28,76248.94796238866\r
2018-07-30,92624.19709252252\r
2018-08-01,92624.19709252252\r
2018-08-02,92624.19709252252\r
2018-08-04,92624.19709252252\r
2018-08-06,87319.03430538911\r
2018-08-07,95322.43657338984\r
2018-08-11,90842.2332429234\r
2018-08-12,90842.2332429234\r
2018-08-14,90842.2332429234\r
2018-08-16,90842.2332429234\r
2018-08-19,89073.82620229527\r
2018-08-22,89073.82620229527\r
2018-08-26,94419.66035227664\r
2018-09-01,77913.75027053243\r
2018-09-03,80437.21914101862\r
2018-09-05,80437.21914101862\r
2018-09-08,83850.53412343524\r
2018-09-10,91731.52417565661\r
2018-09-11,91731.52417565661\r
2018-09-18,80437.21914101862\r
2018-09-20,91731.52417565661\r
2018-09-25,102664.80611554008\r
2018-09-26,102664.80611554008\r
2018-09-28,102664.80611554008\r
2018-09-30,116020.20265931301\r
2018-10-05,85577.91684970855\r
2018-10-06,100809.28198662346\r
2018-10-10,100809.28198662346\r
2018-10-11,79592.57167432678\r
2018-10-13,102664.80611554008\r
2018-10-16,65774.14437118919\r
2018-10-18,85577.91684970855\r
2018-10-20,68932.6300271295\r
2018-10-21,68932.6300271295\r
2018-10-23,69731.27380833428\r
2018-10-25,67346.15090772952\r
2018-10-30,54453.21842922274\r
2018-11-04,42656.44914012577\r
2018-11-09,68137.58601616451\r
2018-11-14,69731.27380833428\r
2018-11-19,69731.27380833428\r
2018-11-22,70533.5083144435\r
2018-11-24,59632.36377493112\r
2018-11-27,93520.24484770776\r
2019-02-05,61907.94048432067\r
2019-02-13,61907.94048432067\r
2019-02-15,61907.94048432067\r
2019-02-17,50161.63427101501\r
2019-02-18,50161.63427101501\r
2019-02-20,56650.32840462841\r
2019-02-22,54453.21842922274\r
2019-02-23,54453.21842922274\r
2019-02-25,47377.59811295115\r
2019-02-27,53728.41384681078\r
2019-03-07,59632.36377493112\r
2019-03-22,72961.66700342113\r
2019-03-24,85577.91684970855\r
2019-03-27,64216.68527135678\r
2019-03-29,72148.71374627632\r
2019-03-30,72148.71374627632\r
2019-04-01,72148.71374627632\r
2019-04-08,62673.84995066342\r
2019-04-09,76248.94796238866\r
2019-04-11,76248.94796238866\r
2019-04-18,63443.4348076594\r
2019-04-19,63443.4348076594\r
2019-05-01,86446.76252793838\r
2019-05-06,82992.01240190628\r
2019-05-13,82992.01240190628\r
2019-05-14,82992.01240190628\r
2019-05-16,82992.01240190628\r
2019-05-23,83850.53412343524\r
2019-05-28,83850.53412343524\r
2019-05-29,83850.53412343524\r
2019-05-31,94419.66035227664\r
2019-06-02,72148.71374627632\r
2019-06-08,82136.94743452211\r
2019-06-17,82136.94743452211\r
2019-06-25,82136.94743452211\r
2019-06-27,82992.01240190628\r
2019-06-28,82992.01240190628\r
2019-06-30,81285.3470490911\r
2019-07-02,82136.94743452211\r
2019-07-03,68137.58601616451\r
2019-07-05,79592.57167432678\r
2019-07-07,76248.94796238866\r
2019-07-08,76248.94796238866\r
2019-07-10,82136.94743452211\r
2019-07-12,82136.94743452211\r
2019-07-13,87319.03430538911\r
2019-07-15,87319.03430538911\r
2019-07-17,86446.76252793838\r
2019-07-20,96228.56653353828\r
2019-07-22,92624.19709252252\r
2019-07-23,90842.2332429234\r
2019-07-25,107361.25024204527\r
2019-08-02,112139.39025103439\r
2019-08-04,103597.52119581218\r
2019-08-09,111177.264100855\r
2019-08-12,96228.56653353828\r
2019-08-14,96228.56653353828\r
2019-08-22,79592.57167432678\r
2019-08-24,80437.21914101862\r
2019-08-26,77913.75027053243\r
2019-08-29,77913.75027053243\r
2019-08-31,98967.00988737681\r
2019-09-03,92624.19709252252\r
2019-09-06,92624.19709252252\r
2019-09-10,98050.86003306088\r
2019-09-13,98050.86003306088\r
2019-09-15,90842.2332429234\r
2019-09-16,90842.2332429234\r
2019-09-18,90842.2332429234\r
2019-09-20,89956.331497811\r
2019-09-21,89956.331497811\r
2019-10-03,104533.52958802153\r
2019-10-08,84712.50483789903\r
2019-10-11,84712.50483789903\r
2019-10-13,84712.50483789903\r
2019-10-21,76248.94796238866\r
2019-11-04,52290.2192672167\r
2019-11-07,52290.2192672167\r
2019-11-09,52290.2192672167\r
2019-11-22,63443.4348076594\r
2019-11-24,66558.33392253114\r
2019-12-04,60387.18735967697\r
2019-12-05,60387.18735967697\r
2020-01-16,57390.22758121379\r
2020-01-18,57390.22758121379\r
2020-01-19,57390.22758121379\r
2020-01-21,54453.21842922274\r
2020-01-24,60387.18735967697\r
2020-02-15,54453.21842922274\r
2020-02-18,54453.21842922274\r
2020-02-20,56650.32840462841\r
2020-02-22,46008.97325192405\r
2020-03-18,42656.44914012577\r
2020-03-19,42656.44914012577\r
2020-03-21,42656.44914012577\r
2020-03-23,63443.4348076594\r
2020-03-24,63443.4348076594\r
2020-03-26,56650.32840462841\r
2020-03-28,61907.94048432067\r
2020-03-31,54453.21842922274\r
2020-04-02,60387.18735967697\r
2020-04-05,62673.84995066342\r
2020-04-07,62673.84995066342\r
2020-04-08,58133.87353048912\r
2020-04-10,58881.2557316409\r
2020-04-12,51576.85186253629\r
2020-04-13,58133.87353048912\r
2020-04-15,55914.186634695834\r
2020-04-17,61907.94048432067\r
2020-04-22,75421.82463874732\r
2020-04-23,75421.82463874732\r
2020-04-27,75421.82463874732\r
2020-05-07,27429.932897667975\r
2020-05-17,38765.50445816532\r
2020-05-18,38765.50445816532\r
2020-05-20,38765.50445816532\r
2020-05-25,48067.777277162684\r
2020-05-27,53728.41384681078\r
2020-05-28,53728.41384681078\r
2020-05-30,53728.41384681078\r
2020-06-01,53728.41384681078\r
2020-06-02,65774.14437118919\r
2020-06-26,77913.75027053243\r
2020-06-29,77913.75027053243\r
2020-07-04,73778.17564561962\r
2020-07-06,73778.17564561962\r
2020-07-07,73778.17564561962\r
2020-07-09,79592.57167432678\r
2020-07-11,66558.33392253114\r
2020-07-12,61907.94048432067\r
2020-07-14,61907.94048432067\r
2020-07-17,61907.94048432067\r
2020-07-19,95322.43657338984\r
2020-07-21,76248.94796238866\r
2020-07-22,76248.94796238866\r
2020-07-24,102664.80611554008\r
2020-07-27,111177.264100855\r
2020-07-29,98050.86003306088\r
2020-07-31,100809.28198662346\r
2020-08-05,86446.76252793838\r
2020-08-06,86446.76252793838\r
2020-08-08,90842.2332429234\r
2020-08-10,89073.82620229527\r
2020-08-15,78751.4126826966\r
2020-08-20,85577.91684970855\r
2020-08-25,87319.03430538911\r
2020-09-04,80437.21914101862\r
2020-09-07,83850.53412343524\r
2020-09-09,79592.57167432678\r
2020-09-10,89956.331497811\r
2020-09-12,89956.331497811\r
2020-09-14,79592.57167432678\r
2020-09-15,79592.57167432678\r
2020-09-17,85577.91684970855\r
2020-11-11,52290.2192672167\r
2020-11-14,52290.2192672167\r
2020-11-18,72148.71374627632\r
2020-11-19,72148.71374627632\r
2020-11-21,57390.22758121379\r
2020-11-23,68932.6300271295\r
2020-11-28,68932.6300271295\r
2020-11-29,68932.6300271295\r
2020-12-04,61907.94048432067\r
2020-12-11,88194.72467766918\r
2020-12-13,88194.72467766918\r
2021-02-14,40692.80088124895\r
2021-02-17,40692.80088124895\r
2021-02-21,50867.319656828164\r
2021-02-24,50161.63427101501\r
2021-02-27,68137.58601616451\r
2021-03-01,51576.85186253629\r
2021-03-04,71339.32458564916\r
2021-03-06,58881.2557316409\r
2021-03-08,61907.94048432067\r
2021-03-09,61907.94048432067\r
2021-03-14,50161.63427101501\r
2021-03-23,54453.21842922274\r
2021-03-24,54453.21842922274\r
2021-03-28,75421.82463874732\r
2021-03-29,75421.82463874732\r
2021-03-31,67346.15090772952\r
2021-04-02,77079.59261405007\r
2021-04-03,76248.94796238866\r
2021-04-05,76248.94796238866\r
2021-04-07,76248.94796238866\r
2021-04-08,75421.82463874732\r
2021-04-22,75421.82463874732\r
2021-04-23,75421.82463874732\r
2021-04-25,75421.82463874732\r
2021-04-27,75421.82463874732\r
2021-05-05,38765.50445816532\r
2021-05-08,38765.50445816532\r
2021-05-13,38765.50445816532\r
2021-05-27,31427.83337422\r
2021-05-28,31427.83337422\r
2021-05-30,31427.83337422\r
2021-06-01,48067.777277162684\r
2021-06-09,48067.777277162684\r
2021-06-11,48067.777277162684\r
2021-06-14,73778.17564561962\r
2021-06-16,86446.76252793838\r
2021-06-26,67346.15090772952\r
2021-07-04,57390.22758121379\r
2021-07-07,46691.32594757032\r
2021-07-11,46691.32594757032\r
2021-07-19,61145.71629228255\r
2021-07-21,71339.32458564916\r
2021-07-22,71339.32458564916\r
2021-07-29,71339.32458564916\r
2021-08-10,46691.32594757032\r
2021-08-11,46691.32594757032\r
2021-08-15,46691.32594757032\r
2021-08-20,55914.186634695834\r
2021-08-25,54453.21842922274\r
2021-08-26,54453.21842922274\r
2021-09-07,72961.66700342113\r
2021-09-12,72961.66700342113\r
2021-09-17,72961.66700342113\r
2021-09-22,36252.99499329395\r
2021-09-24,67346.15090772952\r
2021-09-25,67346.15090772952\r
2021-09-27,64993.59165576996\r
2021-09-30,64993.59165576996\r
2021-10-02,64993.59165576996\r
2021-10-04,72148.71374627632\r
2021-10-14,57390.22758121379\r
2021-10-15,57390.22758121379\r
2021-10-17,57390.22758121379\r
2021-10-19,64216.68527135678\r
2021-10-22,64216.68527135678\r
2021-10-24,58133.87353048912\r
2021-10-27,57390.22758121379\r
2021-11-01,61145.71629228255\r
2022-01-15,48067.777277162684\r
2022-01-25,59632.36377493112\r
2022-02-09,43319.01198066182\r
2022-02-26,47377.59811295115\r
2022-02-27,47377.59811295115\r
2022-03-06,50867.319656828164\r
2022-03-08,50867.319656828164\r
2022-03-09,66558.33392253114\r
2022-03-23,56650.32840462841\r
2022-03-24,56650.32840462841\r
2022-03-26,57390.22758121379\r
2022-04-17,77913.75027053243\r
2022-04-20,77913.75027053243\r
2022-04-22,77913.75027053243\r
2022-05-02,63443.4348076594\r
2022-05-03,63443.4348076594\r
2022-05-08,63443.4348076594\r
2022-05-10,67346.15090772952\r
2022-05-15,42656.44914012577\r
2022-05-17,55181.81302065797\r
2022-05-30,40692.80088124895\r
2022-06-01,50867.319656828164\r
2022-06-02,50867.319656828164\r
2022-06-04,50867.319656828164\r
2022-06-11,48067.777277162684\r
2022-06-14,41997.88390833889\r
2022-06-16,43985.55899499621\r
2022-06-21,43985.55899499621\r
2022-06-29,62673.84995066342\r
2022-07-02,40692.80088124895\r
2022-07-04,41997.88390833889\r
2022-07-06,41997.88390833889\r
2022-07-11,59632.36377493112\r
2022-07-12,59632.36377493112\r
2022-07-14,62673.84995066342\r
2022-07-16,64216.68527135678\r
2022-07-17,64216.68527135678\r
2022-07-19,65774.14437118919\r
2022-07-21,63443.4348076594\r
2022-07-24,64216.68527135678\r
2022-07-31,71339.32458564916\r
2022-08-03,81285.3470490911\r
2022-08-06,73778.17564561962\r
2022-08-08,82992.01240190628\r
2022-08-10,71339.32458564916\r
2022-08-11,71339.32458564916\r
2022-08-13,79592.57167432678\r
2022-08-18,72148.71374627632\r
2022-08-25,64993.59165576996\r
2022-08-28,64993.59165576996\r
2022-08-31,64993.59165576996\r
2022-09-02,64993.59165576996\r
2022-09-04,89073.82620229527\r
2022-09-12,91731.52417565661\r
2022-09-19,83850.53412343524\r
2022-09-20,83850.53412343524\r
2022-09-22,77079.59261405007\r
2022-10-04,76248.94796238866\r
2022-10-05,76248.94796238866\r
2022-10-09,89956.331497811\r
2022-10-19,86446.76252793838\r
2022-10-22,83850.53412343524\r
2022-11-11,48761.85111833943\r
2022-11-13,48761.85111833943\r
2023-01-15,71339.32458564916\r
2023-02-11,68932.6300271295\r
2023-02-12,68932.6300271295\r
2023-02-14,61145.71629228255\r
2023-02-16,61145.71629228255\r
2023-03-01,66558.33392253114\r
2023-03-04,66558.33392253114\r
2023-04-05,42656.44914012577\r
2023-04-08,42656.44914012577\r
2023-04-13,42656.44914012577\r
2023-04-20,51576.85186253629\r
`;export{n as default};