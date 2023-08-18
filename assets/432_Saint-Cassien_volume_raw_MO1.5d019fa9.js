const n=`date,value\r
2017-02-16,36220292.55548695\r
2017-02-19,33148092.23731054\r
2017-02-26,36372975.45748431\r
2017-03-08,36002970.53971935\r
2017-03-11,37158361.688855596\r
2017-03-28,42099088.69415734\r
2017-04-07,42477402.09041138\r
2017-04-10,42071709.61158076\r
2017-04-17,43685898.90645027\r
2017-04-20,44062390.39684075\r
2017-05-07,43853737.696018554\r
2017-05-17,43759653.15812128\r
2017-05-27,44193625.11942501\r
2017-05-30,43601122.355875954\r
2017-06-19,44108587.99005201\r
2017-07-01,44797522.39105723\r
2017-07-06,44217665.22816276\r
2017-07-26,42737440.01173796\r
2017-07-31,41800001.03673414\r
2017-08-05,41557864.44809344\r
2017-08-18,40138164.53648314\r
2017-08-23,38526483.89237128\r
2017-10-07,29113695.086020086\r
2017-10-17,29771110.370162472\r
2017-10-22,29380507.403374657\r
2018-03-13,38125871.43827561\r
2018-04-17,42764933.389190964\r
2018-04-20,41357883.531515166\r
2018-04-22,41800001.03673414\r
2018-06-01,43689585.83471401\r
2018-06-09,44476778.38851018\r
2018-06-16,44067933.429579645\r
2018-06-19,45187685.164167926\r
2018-06-21,44234310.4127749\r
2018-06-29,44360127.74416316\r
2018-07-14,43682212.0607694\r
2018-07-24,43453789.04934097\r
2018-07-26,43075015.99918926\r
2018-07-31,41993249.117207095\r
2018-08-05,42183080.68103148\r
2018-08-15,41036634.34449442\r
2018-08-25,38003239.920451894\r
2018-08-28,37632431.792291634\r
2018-09-12,35646197.57473584\r
2018-09-19,33035071.17988614\r
2018-09-27,30450825.686733343\r
2018-09-29,29004505.545147084\r
2018-10-02,30697322.867713593\r
2018-10-04,29481766.323289942\r
2018-10-19,31050374.452404026\r
2018-10-24,29146804.313756485\r
2019-02-11,26476808.756905053\r
2019-02-14,24715763.769300535\r
2019-02-16,24295161.274800718\r
2019-02-19,28801306.91428349\r
2019-02-21,24617557.474960882\r
2019-03-01,25593065.356240362\r
2019-03-03,25838106.363321386\r
2019-03-08,25849332.2029313\r
2019-03-11,26796896.714382857\r
2019-03-21,30348692.770287618\r
2019-03-23,27838459.001476597\r
2019-03-28,28428940.973150898\r
2019-03-31,31153128.07963302\r
2019-04-05,33358995.422534585\r
2019-04-15,34989357.953314595\r
2019-04-17,31636089.292276107\r
2019-04-22,38122315.42626622\r
2019-04-27,40811975.03960642\r
2019-04-30,40851810.0566984\r
2019-05-30,46539665.92000288\r
2019-06-01,40084100.213761434\r
2019-06-19,46365408.774620615\r
2019-06-24,44128919.00086329\r
2019-06-26,38774527.730760105\r
2019-07-01,44147403.89554038\r
2019-07-16,39578638.678233385\r
2019-07-21,42893297.83255571\r
2019-07-24,43901722.99500726\r
2019-07-26,38617443.70712689\r
2019-07-31,41161787.9953628\r
2019-08-03,42312807.64416606\r
2019-08-05,42810766.110819265\r
2019-08-10,40174218.16039099\r
2019-08-15,40589451.295063384\r
2019-08-30,37308546.95733686\r
2019-09-07,38366105.56540057\r
2019-09-12,34207870.12823003\r
2019-09-29,32776878.604620144\r
2019-10-02,33980030.755480304\r
2019-10-07,34806997.105584584\r
2019-10-27,32413589.498277847\r
2019-11-06,34306380.11613941\r
2020-02-11,35585081.40082101\r
2020-02-14,32401668.675455153\r
2020-03-07,34890330.68148102\r
2020-04-04,36397561.03531357\r
2020-04-06,35988961.69049276\r
2020-04-09,40120140.94670448\r
2020-04-11,34749735.96556088\r
2020-04-14,38383916.60881307\r
2020-04-24,42073534.736672886\r
2020-05-04,42950177.551425114\r
2020-05-21,40066083.0715033\r
2020-05-26,41541492.75933012\r
2020-06-15,42612862.25355858\r
2020-06-23,46382264.78509082\r
2020-06-28,45770875.65014283\r
2020-07-05,43363612.79976049\r
2020-07-10,45489280.37502061\r
2020-07-30,42625681.97720002\r
2020-08-04,40471987.96610498\r
2020-08-07,43293714.44168874\r
2020-08-09,40138164.53648314\r
2020-08-12,43623233.76381375\r
2020-08-14,43176058.576299004\r
2020-08-22,43400413.42689689\r
2020-08-27,41705286.64671324\r
2020-09-08,42503020.907961845\r
2020-09-13,39812270.46371294\r
2020-09-16,40408775.92232351\r
2020-09-26,36810904.47691396\r
2020-09-28,33518694.201460935\r
2020-10-08,39515800.21204565\r
2020-10-28,34888594.025963426\r
2020-11-05,34853865.73434882\r
2021-02-08,41036634.34449442\r
2021-02-20,40551491.72518063\r
2021-02-23,41863783.201365225\r
2021-02-25,42152034.98848912\r
2021-02-28,42515831.85393981\r
2021-03-02,41705286.64671324\r
2021-03-15,37797313.3672856\r
2021-03-17,38099203.49419395\r
2021-03-30,38175664.847767666\r
2021-04-01,37543864.91806097\r
2021-04-06,37655468.24934953\r
2021-05-26,43838975.79107564\r
2021-05-31,45569422.77826995\r
2021-06-03,44682503.35695756\r
2021-06-05,45176525.20263907\r
2021-06-10,45148628.499914214\r
2021-06-13,44834642.04090793\r
2021-06-18,45314215.83514174\r
2021-06-25,44589803.266382225\r
2021-06-30,43720928.05877672\r
2021-07-05,44058695.1444946\r
2021-07-13,43899877.14906348\r
2021-07-18,44428626.999691494\r
2021-07-20,44158495.81849264\r
2021-07-25,43295553.48869845\r
2021-08-02,43715396.644605584\r
2021-08-09,42435322.934689425\r
2021-08-14,41552407.02827354\r
2021-08-17,41865605.928140044\r
2021-08-19,42082660.677323446\r
2021-09-11,37981923.40728277\r
2021-09-13,36557474.68285291\r
2021-09-18,33425941.231861006\r
2021-09-21,34394584.320488125\r
2021-09-28,32423808.272625662\r
2021-10-01,32570371.246647295\r
2021-10-06,31888481.31005542\r
2021-10-11,30981361.20062051\r
2021-10-13,28822765.265780684\r
2021-10-16,29676242.67012121\r
2021-10-18,28517796.37147933\r
2021-11-02,31367346.441355255\r
2021-11-05,32173694.696301088\r
2022-02-08,36078292.88629665\r
2022-02-10,36985406.663018666\r
2022-02-13,37855865.69245366\r
2022-02-20,38056545.087190814\r
2022-02-23,40066083.0715033\r
2022-02-28,40913393.54634312\r
2022-03-22,42194039.43253464\r
2022-04-01,44138161.19137447\r
2022-04-09,44491596.985060915\r
2022-04-16,44523090.852233976\r
2022-04-29,43637976.355252594\r
2022-05-11,43851892.385766305\r
2022-05-16,46251205.36004825\r
2022-05-19,45478100.6912594\r
2022-05-21,44630585.01111013\r
2022-06-10,45038945.860297784\r
2022-06-25,43580856.179313324\r
2022-07-03,44602778.20273586\r
2022-07-05,43794697.9920348\r
2022-07-08,43359933.1927789\r
2022-07-18,42792431.458601385\r
2022-07-20,41645209.026691124\r
2022-07-30,39252168.37342599\r
2022-08-04,39384822.45638922\r
2022-08-09,37713962.20830793\r
2022-09-28,29508341.340797476\r
2022-10-18,26509094.4878778\r
2022-10-28,26394527.435578413\r
2022-11-05,26554312.04821024\r
2023-02-08,33256071.47064424\r
2023-02-10,33556501.99756497\r
2023-02-13,34624889.48250427\r
2023-02-15,32319957.25489683\r
2023-03-05,34911172.337049045\r
2023-03-12,34477654.92200992\r
2023-03-25,36174696.28324907\r
2023-03-27,36320306.92743262\r
2023-03-30,37650151.81179586\r
2023-04-14,37889588.54634218\r
2023-04-16,37838120.023508154\r
2023-04-24,37742331.58775197\r
2023-05-04,38033443.74694279\r
2023-05-16,39925623.1879655\r
2023-05-26,41532398.116531186\r
2023-06-23,45780207.88195927\r
2023-06-25,44347171.58160679\r
2023-07-08,43779941.36497894\r
2023-07-10,44493449.401746474\r
2023-07-13,39785294.3310971\r
2023-07-18,38588901.166539535\r
2023-07-20,41403311.2536768\r
2023-07-23,42035211.523175254\r
`;export{n as default};
