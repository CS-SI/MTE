const r=`date,value\r
2017-02-12,41.02449456226831\r
2017-02-15,41.02449456226831\r
2017-02-19,41.02449456226831\r
2017-03-14,78.34838393831745\r
2017-03-17,78.34838393831745\r
2017-04-23,71.78621350879155\r
2017-04-30,71.78621350879155\r
2017-06-02,68.95491064100239\r
2017-06-05,66.91774561709428\r
2017-06-09,66.91774561709428\r
2017-06-12,66.91774561709428\r
2017-08-21,54.61932754382638\r
2017-08-23,54.61932754382638\r
2017-08-24,54.61932754382638\r
2017-08-26,60.50948857342656\r
2017-08-29,60.50948857342656\r
2017-10-05,42.01061071108224\r
2017-10-07,42.01061071108224\r
2017-10-10,42.01061071108224\r
2017-10-12,42.01061071108224\r
2017-10-13,42.01061071108224\r
2017-10-15,42.19400704477616\r
2017-10-17,32.142600304371335\r
2017-10-18,32.142600304371335\r
2017-10-22,32.142600304371335\r
2017-10-25,32.142600304371335\r
2017-11-04,17.69142857312875\r
2017-11-06,17.69142857312875\r
2017-11-11,17.69142857312875\r
2017-11-14,17.69142857312875\r
2017-11-29,13.704798172410943\r
2017-12-01,13.704798172410943\r
2017-12-02,13.704798172410943\r
2017-12-07,13.704798172410943\r
2017-12-09,13.704798172410943\r
2018-02-22,100.0\r
2018-02-24,100.0\r
2018-02-25,100.0\r
2018-02-27,100.0\r
2018-03-24,97.24210428431437\r
2018-04-08,98.99873652815174\r
2018-04-11,98.99873652815174\r
2018-04-13,98.99873652815174\r
2018-04-15,98.99873652815174\r
2018-04-16,98.99873652815174\r
2018-04-18,98.99873652815174\r
2018-05-18,89.71133730370285\r
2018-05-20,89.71133730370285\r
2018-05-25,89.71133730370285\r
2018-06-22,90.45141833669001\r
2018-06-27,93.00953044578658\r
2018-07-02,88.51266948287005\r
2018-07-04,95.40093938312407\r
2018-07-07,91.4255832849603\r
2018-07-09,92.44954316369123\r
2018-07-12,92.44954316369123\r
2018-07-15,90.26622428583048\r
2018-07-17,92.82275344323322\r
2018-07-19,87.54811264606927\r
2018-07-22,87.54811264606927\r
2018-07-24,87.54811264606927\r
2018-07-25,87.54811264606927\r
2018-07-27,87.54811264606927\r
2018-09-20,68.1887915642731\r
2018-09-22,68.1887915642731\r
2018-09-25,70.23755843147256\r
2018-09-27,70.23755843147256\r
2018-09-28,70.23755843147256\r
2018-09-30,65.78006171499123\r
2018-10-05,64.69015560501887\r
2018-10-10,63.48106572356835\r
2018-10-12,65.78006171499123\r
2018-10-13,65.78006171499123\r
2018-10-15,63.35638511444903\r
2018-10-17,61.70114554662346\r
2018-10-18,61.70114554662346\r
2018-10-20,55.53496931188684\r
2018-10-22,50.887019631015775\r
2018-10-23,50.887019631015775\r
2019-01-03,49.648099787520934\r
2019-01-15,49.648099787520934\r
2019-02-17,64.52297134435638\r
2019-02-19,64.52297134435638\r
2019-02-20,64.52297134435638\r
2019-02-22,64.52297134435638\r
2019-02-24,64.52297134435638\r
2019-02-25,64.52297134435638\r
2019-02-27,67.76429952377761\r
2019-03-29,71.69990723695166\r
2019-03-31,71.69990723695166\r
2019-04-10,71.69990723695166\r
2019-04-11,71.69990723695166\r
2019-04-13,71.69990723695166\r
2019-05-13,73.47549483361148\r
2019-05-15,73.47549483361148\r
2019-05-16,73.47549483361148\r
2019-05-23,74.12840053448734\r
2019-05-28,74.12840053448734\r
2019-05-30,71.39808478989602\r
2019-05-31,71.39808478989602\r
2019-06-02,72.91107034166917\r
2019-06-04,72.91107034166917\r
2019-06-17,65.1505918773835\r
2019-06-19,65.1505918773835\r
2019-06-24,65.1505918773835\r
2019-06-25,65.1505918773835\r
2019-06-27,67.509992683567\r
2019-06-29,67.509992683567\r
2019-06-30,67.509992683567\r
2019-07-02,67.29829320924928\r
2019-07-04,66.07444522822495\r
2019-07-05,66.07444522822495\r
2019-07-07,66.07444522822495\r
2019-07-09,66.07444522822495\r
2019-07-10,66.07444522822495\r
2019-07-17,59.93674886385553\r
2019-07-22,62.23763174790449\r
2019-07-24,62.23763174790449\r
2019-07-25,62.23763174790449\r
2019-07-29,62.23763174790449\r
2019-08-01,56.53547958758309\r
2019-08-04,58.4716464632289\r
2019-08-08,54.06425876108274\r
2019-08-09,54.06425876108274\r
2019-08-14,54.06425876108274\r
2019-08-21,51.50996060773283\r
2019-08-23,51.50996060773283\r
2019-08-24,51.50996060773283\r
2019-08-26,52.80204716451448\r
2019-08-28,52.80204716451448\r
2019-08-29,52.80204716451448\r
2019-08-31,50.22768383769649\r
2019-09-02,50.22768383769649\r
2019-09-03,50.22768383769649\r
2019-09-07,51.392983191410224\r
2019-09-10,49.032143304966716\r
2019-09-12,50.80931469624637\r
2019-09-13,50.80931469624637\r
2019-09-15,47.27440354224836\r
2019-09-17,48.533409093734235\r
2019-09-18,48.533409093734235\r
2019-09-20,44.339088523259775\r
2019-09-22,44.339088523259775\r
2019-09-30,44.6374970765192\r
2019-12-04,23.217778245741915\r
2019-12-14,24.358001123910295\r
2019-12-19,15.025831419571482\r
2019-12-29,15.4563150713315\r
2020-01-23,7.480853672392287\r
2020-01-26,7.480853672392287\r
2020-02-07,9.504920048070058\r
2020-02-15,7.567632431989126\r
2020-02-22,7.676533981903885\r
2021-12-18,16.465867746893075\r
2021-12-21,16.465867746893075\r
2021-12-23,19.84107171624184\r
2022-01-12,42.74565492616821\r
2022-01-14,42.74565492616821\r
2022-01-15,42.74565492616821\r
2022-01-22,42.74565492616821\r
2022-02-26,49.455361552306236\r
2022-02-28,49.455361552306236\r
2022-03-03,49.455361552306236\r
2022-03-05,49.455361552306236\r
2022-03-06,49.455361552306236\r
2022-03-23,57.380105454276475\r
2022-03-25,57.380105454276475\r
2022-03-26,57.380105454276475\r
2022-03-28,58.512194216773736\r
2022-04-17,64.60654698262067\r
2022-04-20,64.60654698262067\r
2022-04-22,64.60654698262067\r
2022-04-27,64.81563034748396\r
2022-05-04,61.16607816694773\r
2022-05-07,61.16607816694773\r
2022-06-11,60.22291107704037\r
2022-06-13,60.22291107704037\r
2022-06-16,61.70114554662346\r
2022-06-18,61.70114554662346\r
2022-06-19,61.70114554662346\r
2022-06-21,60.34567919794861\r
2022-06-29,59.89590249333673\r
2022-07-01,60.796480584708576\r
2022-07-06,57.42042090978725\r
2022-07-08,57.42042090978725\r
2022-07-11,60.42756695778123\r
2022-07-13,60.42756695778123\r
2022-07-14,60.42756695778123\r
2022-07-18,59.977603725295815\r
2022-07-19,59.977603725295815\r
2022-07-21,59.977603725295815\r
2022-07-31,57.743255185623\r
2022-08-02,57.743255185623\r
2022-08-03,57.743255185623\r
2022-08-07,57.743255185623\r
2022-08-08,57.743255185623\r
2022-08-10,60.87855433054238\r
2022-08-12,58.71506150269775\r
2022-08-13,58.71506150269775\r
2022-08-17,58.71506150269775\r
2022-08-20,59.977603725295815\r
2022-10-09,58.59331543444672\r
2022-10-12,58.59331543444672\r
2022-10-16,58.59331543444672\r
2022-10-17,58.59331543444672\r
2022-10-19,59.81423523409818\r
2022-10-22,58.83688460558554\r
2022-10-26,58.83688460558554\r
2023-05-27,100.0\r
2023-05-29,100.0\r
2023-06-01,100.0\r
2023-06-03,100.0\r
2023-06-04,100.0\r
2023-06-06,100.0\r
2023-07-06,83.94858847090867\r
2023-07-11,81.15615160690535\r
2023-07-14,81.15615160690535\r
2023-07-18,74.91420804401476\r
2023-07-19,74.91420804401476\r
`;export{r as default};
