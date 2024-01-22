const n=`date,value\r
2017-01-03,12.915278979401682\r
2017-01-13,12.915278979401682\r
2017-02-25,89.8070302261897\r
2017-03-07,81.53129169734387\r
2017-03-14,90.86118034198705\r
2017-03-17,90.86118034198705\r
2017-03-27,79.50667527076169\r
2017-04-03,92.98243511812372\r
2017-04-06,92.98243511812372\r
2017-04-23,80.01114813043813\r
2017-05-03,80.01114813043813\r
2017-05-16,98.63214804639149\r
2017-05-23,98.63214804639149\r
2017-05-26,98.90409880806\r
2017-06-02,90.0701616483234\r
2017-06-05,90.0701616483234\r
2017-06-15,95.92718025683477\r
2017-06-22,95.92718025683477\r
2017-06-25,75.26426619500613\r
2017-07-02,80.01114813043813\r
2017-07-05,74.03215100370491\r
2017-07-07,75.01727068306509\r
2017-07-12,75.01727068306509\r
2017-07-17,77.00121834232151\r
2017-07-22,77.00121834232151\r
2017-07-27,77.00121834232151\r
2017-08-04,100.0\r
2017-08-06,100.0\r
2017-08-14,94.04951035462724\r
2017-08-19,98.36046099578002\r
2017-08-21,88.7572181778383\r
2017-08-24,94.3169483529157\r
2017-08-26,94.58465357667319\r
2017-08-29,85.89272726512517\r
2017-09-03,87.97271508854263\r
2017-09-20,77.25049157702118\r
2017-09-23,77.25049157702118\r
2017-09-28,77.25049157702118\r
2017-10-05,84.34426822170228\r
2017-10-10,99.9945346778754\r
2017-10-13,85.89272726512517\r
2017-10-15,84.85931904056076\r
2017-10-18,82.04024095671313\r
2017-10-25,79.75877129166605\r
2017-10-28,72.07570961691499\r
2017-10-30,81.27723543494574\r
2017-11-04,81.27723543494574\r
2017-11-07,79.25486033092683\r
2017-11-17,80.7699609336863\r
2017-11-19,43.20051487470967\r
2017-11-22,22.510949515724178\r
2017-11-27,24.479139754648028\r
2017-11-29,16.239832809582573\r
2017-12-07,18.2999362157015\r
2017-12-19,63.03812756668174\r
2017-12-24,65.84595882294614\r
2017-12-27,65.84595882294614\r
2018-02-25,79.00332673615182\r
2018-02-27,79.00332673615182\r
2018-03-14,85.37547271414303\r
2018-03-17,85.37547271414303\r
2018-03-22,100.0\r
2018-03-29,96.73588872326631\r
2018-04-01,96.73588872326631\r
2018-04-06,81.02345842754211\r
2018-04-16,81.02345842754211\r
2018-04-18,100.0\r
2018-04-21,100.0\r
2018-04-23,100.0\r
2018-04-26,100.0\r
2018-05-06,91.12539393779653\r
2018-05-08,91.12539393779653\r
2018-05-11,95.38937036330823\r
2018-05-13,95.38937036330823\r
2018-05-18,92.18494562626944\r
2018-05-21,92.18494562626944\r
2018-05-23,88.7572181778383\r
2018-05-26,100.0\r
2018-06-02,91.38987749525027\r
2018-06-20,82.29513344036914\r
2018-06-22,87.19066710636056\r
2018-06-25,78.00001111527642\r
2018-06-27,81.02345842754211\r
2018-07-02,75.51154738642948\r
2018-07-07,76.5035234163859\r
2018-07-10,77.00121834232151\r
2018-07-12,77.50004829757279\r
2018-07-15,86.93053114620297\r
2018-07-17,86.93053114620297\r
2018-07-25,90.86118034198705\r
2018-07-27,88.23394364785284\r
2018-07-30,88.23394364785284\r
2018-08-01,88.23394364785284\r
2018-08-04,90.5972369398927\r
2018-08-06,92.18494562626944\r
2018-08-11,86.15176675481028\r
2018-08-16,95.12086480501759\r
2018-08-19,86.93053114620297\r
2018-08-21,79.25486033092683\r
2018-08-26,81.02345842754211\r
2018-09-03,74.27800100875498\r
2018-09-05,74.27800100875498\r
2018-09-08,91.65463078291197\r
2018-09-10,82.55030415238184\r
2018-09-13,82.55030415238184\r
2018-09-18,94.3169483529157\r
2018-09-20,89.8070302261897\r
2018-09-23,83.83032224626436\r
2018-09-25,85.37547271414303\r
2018-09-28,82.80575283796693\r
2018-09-30,82.80575283796693\r
2018-10-05,77.00121834232151\r
2018-10-08,79.00332673615182\r
2018-10-13,72.5630895333178\r
2018-10-18,22.834937659687753\r
2018-10-20,24.479139754648028\r
2018-10-23,18.752558802673132\r
2018-10-25,15.383734398858351\r
2018-10-30,15.383734398858351\r
2018-11-04,12.915278979401682\r
2018-11-14,18.2999362157015\r
2018-11-19,19.515536333339238\r
2018-11-22,16.819576241728882\r
2018-11-29,17.40644152701049\r
2018-12-19,45.04348660227733\r
2018-12-27,45.04348660227733\r
2018-12-29,64.67079640236894\r
2019-01-01,59.36189372556394\r
2019-01-03,67.26595821602068\r
2019-01-06,66.79144042557326\r
2019-01-11,66.79144042557326\r
2019-01-16,66.79144042557326\r
2019-02-12,77.00121834232151\r
2019-02-15,77.00121834232151\r
2019-02-17,64.67079640236894\r
2019-02-20,64.67079640236894\r
2019-02-22,65.37500001591839\r
2019-02-25,60.7313626247701\r
2019-02-27,65.37500001591839\r
2019-03-12,75.01727068306509\r
2019-03-22,75.75911398016653\r
2019-03-24,79.50667527076169\r
2019-03-27,76.00696569990461\r
2019-03-29,78.25041667399962\r
2019-04-01,74.52413781061092\r
2019-04-13,69.89685709722251\r
2019-04-18,92.71633662895972\r
2019-05-01,82.55030415238184\r
2019-05-06,96.19648414932253\r
2019-05-13,79.50667527076169\r
2019-05-16,80.01114813043813\r
2019-05-23,83.5737641994328\r
2019-05-31,94.85262580185574\r
2019-06-02,89.01926367201526\r
2019-06-17,74.27800100875498\r
2019-06-25,74.27800100875498\r
2019-06-27,74.27800100875498\r
2019-06-30,74.27800100875498\r
2019-07-02,74.27800100875498\r
2019-07-05,77.50004829757279\r
2019-07-07,78.50110464170875\r
2019-07-10,78.00001111527642\r
2019-07-15,78.50110464170875\r
2019-07-17,77.74988823353218\r
2019-07-20,77.74988823353218\r
2019-07-22,78.00001111527642\r
2019-07-25,81.7856269569445\r
2019-08-04,77.25049157702118\r
2019-08-09,84.60165565026533\r
2019-08-14,73.05162459516107\r
2019-08-16,73.05162459516107\r
2019-08-21,73.05162459516107\r
2019-08-24,80.01114813043813\r
2019-08-26,81.27723543494574\r
2019-08-29,71.58948715201883\r
2019-08-31,71.8324535583252\r
2019-09-03,72.07570961691499\r
2019-09-13,69.41587210089662\r
2019-09-15,71.10442445944398\r
2019-09-18,68.69658986263705\r
2019-09-20,74.52413781061092\r
2019-09-30,81.02345842754211\r
2019-10-03,80.2638055246606\r
2019-10-13,76.25510227018248\r
2019-10-15,76.25510227018248\r
2019-10-25,76.25510227018248\r
2019-11-22,15.242643726194366\r
2019-11-24,15.242643726194366\r
2019-12-02,15.242643726194366\r
2019-12-04,15.242643726194366\r
2019-12-17,76.5035234163859\r
2019-12-22,76.5035234163859\r
2019-12-29,79.25486033092683\r
2020-01-06,50.51781308806957\r
2020-01-11,71.10442445944398\r
2020-01-16,61.420211171938924\r
2020-01-18,61.420211171938924\r
2020-01-21,61.420211171938924\r
2020-02-07,72.8072128146167\r
2020-02-12,72.8072128146167\r
2020-02-15,69.41587210089662\r
2020-02-20,69.89685709722251\r
2020-02-22,69.41587210089662\r
2020-03-13,78.25041667399962\r
2020-03-18,78.25041667399962\r
2020-03-21,92.98243511812372\r
2020-03-23,92.98243511812372\r
2020-03-26,92.98243511812372\r
2020-03-28,79.75877129166605\r
2020-03-31,74.52413781061092\r
2020-04-02,74.52413781061092\r
2020-04-05,77.50004829757279\r
2020-04-07,69.89685709722251\r
2020-04-10,77.25049157702118\r
2020-04-12,77.25049157702118\r
2020-04-15,85.89272726512517\r
2020-05-07,78.25041667399962\r
2020-05-17,78.25041667399962\r
2020-05-20,90.5972369398927\r
2020-05-22,90.5972369398927\r
2020-05-25,99.72153121430563\r
2020-05-27,78.25041667399962\r
2020-05-30,89.01926367201526\r
2020-06-01,89.01926367201526\r
2020-06-26,88.7572181778383\r
2020-06-29,96.46605371143754\r
2020-07-01,96.46605371143754\r
2020-07-04,97.00598896547503\r
2020-07-09,93.24880196204182\r
2020-07-11,93.24880196204182\r
2020-07-14,99.72153121430563\r
2020-07-19,97.54698426657926\r
2020-07-21,89.54416993245951\r
2020-07-24,88.7572181778383\r
2020-07-29,82.04024095671313\r
2020-07-31,77.74988823353218\r
2020-08-05,68.45741572162497\r
2020-08-08,72.5630895333178\r
2020-08-10,71.10442445944398\r
2020-08-15,76.00696569990461\r
2020-08-20,82.04024095671313\r
2020-08-25,77.74988823353218\r
2020-09-04,60.04525373363171\r
2020-09-07,58.68129192746559\r
2020-09-09,58.68129192746559\r
2020-09-12,73.54131251096977\r
2020-09-14,61.8809610557292\r
2020-09-17,66.31810646316286\r
2020-11-06,22.834937659687753\r
2020-11-08,22.834937659687753\r
2020-11-11,26.333742443823688\r
2020-11-18,17.40644152701049\r
2020-11-21,17.40644152701049\r
2020-11-23,17.70252229787759\r
2020-11-28,14.267911634788932\r
2020-12-18,78.00001111527642\r
2020-12-28,78.00001111527642\r
2021-01-10,44.01626663191981\r
2021-02-11,84.34426822170228\r
2021-02-14,84.34426822170228\r
2021-02-19,70.6205238749134\r
2021-02-21,76.5035234163859\r
2021-02-24,67.26595821602068\r
2021-02-26,74.77056112863542\r
2021-03-01,70.8623287571037\r
2021-03-06,68.45741572162497\r
2021-03-21,89.01926367201526\r
2021-03-23,92.45050672223934\r
2021-03-26,92.45050672223934\r
2021-03-28,88.49544475714524\r
2021-03-31,89.2815810024211\r
2021-04-02,86.93053114620297\r
2021-04-05,84.60165565026533\r
2021-04-07,84.60165565026533\r
2021-04-15,80.51674321269668\r
2021-04-17,80.51674321269668\r
2021-04-22,85.63396250310062\r
2021-04-27,84.34426822170228\r
2021-05-27,72.07570961691499\r
2021-05-30,72.07570961691499\r
2021-06-01,72.5630895333178\r
2021-06-09,65.84595882294614\r
2021-06-11,65.84595882294614\r
2021-06-14,75.75911398016653\r
2021-06-16,74.77056112863542\r
2021-06-26,74.27800100875498\r
2021-07-01,82.04024095671313\r
2021-07-11,68.93605750741271\r
2021-07-19,91.91965356997697\r
2021-07-21,65.61033065768345\r
2021-07-29,75.26426619500613\r
2021-08-25,77.00121834232151\r
2021-08-28,77.00121834232151\r
2021-08-30,72.07570961691499\r
2021-09-02,72.07570961691499\r
2021-09-07,56.20950351334645\r
2021-09-22,57.553110608144145\r
2021-09-24,63.27046538421847\r
2021-09-27,63.27046538421847\r
2021-10-02,63.27046538421847\r
2021-10-07,67.9799491642197\r
2021-10-09,67.9799491642197\r
2021-10-12,68.69658986263705\r
2021-10-14,66.79144042557326\r
2021-10-17,66.79144042557326\r
2021-10-19,67.26595821602068\r
2021-10-22,67.26595821602068\r
2021-10-24,63.27046538421847\r
2021-10-27,39.5967387339473\r
2021-11-06,23.32396725298377\r
2021-11-11,11.99699117958556\r
2021-11-18,13.182000941298364\r
2021-11-23,8.686015577365103\r
2021-12-16,37.25623321356402\r
2021-12-18,52.68158600971776\r
2021-12-21,46.49554934081553\r
2021-12-23,53.77540291767171\r
2022-01-12,52.68158600971776\r
2022-01-15,61.6504345861415\r
2022-01-17,52.68158600971776\r
2022-01-22,55.7641222528235\r
2022-01-25,54.215141306199875\r
2022-01-27,51.5957063751337\r
2022-01-30,53.336926782586936\r
2022-02-09,73.29632458897123\r
2022-02-11,68.45741572162497\r
2022-02-19,68.45741572162497\r
2022-03-08,67.26595821602068\r
2022-03-23,67.74165735699746\r
2022-03-26,71.10442445944398\r
2022-04-10,72.31925503815101\r
2022-04-15,84.34426822170228\r
2022-04-17,73.78658807697676\r
2022-04-22,86.15176675481028\r
2022-04-27,75.01727068306509\r
2022-04-30,82.29513344036914\r
2022-05-02,82.29513344036914\r
2022-05-07,83.06147924308294\r
2022-05-10,86.41108072744672\r
2022-05-15,90.0701616483234\r
2022-05-17,86.93053114620297\r
2022-05-27,81.27723543494574\r
2022-05-30,81.53129169734387\r
2022-06-01,79.00332673615182\r
2022-06-04,81.02345842754211\r
2022-06-06,89.01926367201526\r
2022-06-11,87.7117593184643\r
2022-06-14,84.08715700381495\r
2022-06-19,77.25049157702118\r
2022-06-21,77.25049157702118\r
2022-06-29,82.04024095671313\r
2022-07-01,78.50110464170875\r
2022-07-04,79.75877129166605\r
2022-07-06,73.78658807697676\r
2022-07-11,65.61033065768345\r
2022-07-14,72.31925503815101\r
2022-07-16,68.21853538745839\r
2022-07-19,73.29632458897123\r
2022-07-21,67.74165735699746\r
2022-07-24,72.07570961691499\r
2022-07-26,67.26595821602068\r
2022-07-31,66.55462531037107\r
2022-08-03,70.6205238749134\r
2022-08-08,68.93605750741271\r
2022-08-10,70.6205238749134\r
2022-08-13,72.5630895333178\r
2022-08-25,70.13778774922054\r
2022-08-28,79.25486033092683\r
2022-08-30,70.6205238749134\r
2022-09-02,70.6205238749134\r
2022-09-04,75.26426619500613\r
2022-09-12,82.04024095671313\r
2022-09-19,82.80575283796693\r
2022-09-22,78.25041667399962\r
2022-10-04,68.69658986263705\r
2022-10-09,72.5630895333178\r
2022-10-12,72.5630895333178\r
2022-10-19,68.69658986263705\r
2022-10-22,71.58948715201883\r
2022-10-24,71.8324535583252\r
2022-11-11,63.27046538421847\r
2022-11-13,80.7699609336863\r
2022-11-23,75.75911398016653\r
2022-12-06,57.553110608144145\r
2022-12-08,57.553110608144145\r
2022-12-11,69.89685709722251\r
2022-12-13,69.89685709722251\r
2023-02-04,66.79144042557326\r
2023-02-06,69.17581835386504\r
2023-02-09,66.31810646316286\r
2023-02-11,64.90523257010602\r
2023-02-14,64.67079640236894\r
2023-02-16,64.43665903076243\r
2023-02-26,62.57435545731591\r
2023-03-06,70.6205238749134\r
2023-03-13,81.53129169734387\r
2023-03-16,78.50110464170875\r
2023-03-28,98.36046099578002\r
2023-04-05,98.36046099578002\r
2023-04-07,98.36046099578002\r
2023-05-02,74.52413781061092\r
2023-05-25,83.5737641994328\r
2023-05-27,83.5737641994328\r
2023-05-30,69.89685709722251\r
2023-06-01,76.00696569990461\r
2023-06-06,73.29632458897123\r
2023-06-11,66.55462531037107\r
2023-06-14,72.5630895333178\r
2023-06-16,67.9799491642197\r
2023-06-24,75.51154738642948\r
2023-06-26,87.45107657753857\r
2023-07-06,99.72153121430563\r
2023-07-09,100.0\r
2023-07-11,95.92718025683477\r
2023-07-14,95.12086480501759\r
2023-07-19,87.7117593184643\r
2023-07-26,79.25486033092683\r
2023-07-31,76.5035234163859\r
2023-08-08,83.06147924308294\r
2023-08-10,83.06147924308294\r
2023-08-15,83.06147924308294\r
2023-08-20,80.01114813043813\r
2023-08-23,75.01727068306509\r
2023-09-04,89.54416993245951\r
2023-09-07,89.54416993245951\r
2023-09-17,65.61033065768345\r
2023-09-24,80.51674321269668\r
2023-09-27,84.34426822170228\r
2023-09-29,72.31925503815101\r
2023-10-02,76.5035234163859\r
2023-10-04,76.5035234163859\r
2023-10-07,75.75911398016653\r
2023-10-09,74.52413781061092\r
2023-10-12,73.54131251096977\r
2023-12-03,57.778129723391956\r
2023-12-06,57.778129723391956\r
2023-12-16,58.4550392236496\r
2023-12-18,60.502354801210245\r
`;export{n as default};