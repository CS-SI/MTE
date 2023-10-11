const r=`date,value\r
2017-01-03,70.8926584875038\r
2017-02-12,88.4667195422373\r
2017-02-19,80.35579585160102\r
2017-02-22,83.84607973988355\r
2017-03-11,70.6341571794617\r
2017-03-14,76.90377183151608\r
2017-04-03,100.0\r
2017-04-10,92.87260526182678\r
2017-04-20,92.59564255343349\r
2017-04-23,76.63983980558467\r
2017-05-23,84.38639152700614\r
2017-06-09,89.56305959221122\r
2017-06-12,85.74103258393238\r
2017-06-19,78.22689356507675\r
2017-06-22,78.4922075385444\r
2017-07-04,65.00891802475974\r
2017-07-07,57.29004989123938\r
2017-07-14,58.76448364582907\r
2017-07-17,60.99390933480434\r
2017-08-03,28.159901579426155\r
2017-08-06,32.95738040837143\r
2017-08-18,32.320812468698335\r
2017-08-21,27.955742688315443\r
2017-08-23,28.569352959458588\r
2017-08-26,23.954184755400902\r
2017-09-20,14.70109299762835\r
2017-09-22,21.440276574903795\r
2017-09-27,8.230003687207642\r
2017-10-05,5.257726906332086\r
2017-10-07,4.732015893682593\r
2017-10-10,4.347209577004904\r
2017-10-12,3.012108004101298\r
2017-10-15,1.815073288972549\r
2017-11-21,1.0531570435672688\r
2018-01-15,6.489973713512629\r
2018-01-23,3.8474297129629758\r
2018-02-24,3.363708615762231\r
2018-03-14,24.34717585830618\r
2018-03-19,39.93794596772505\r
2018-03-21,46.31510890332962\r
2018-03-31,30.430329243972487\r
2018-04-05,55.58204220282077\r
2018-04-18,83.03727571371093\r
2018-04-20,87.64673089422779\r
2018-04-25,84.65687910481896\r
2018-05-05,75.84943537044356\r
2018-05-20,72.18876690211401\r
2018-06-09,71.66960486815391\r
2018-06-19,67.5510745797517\r
2018-06-22,66.2768866952177\r
2018-06-24,60.99390933480434\r
2018-06-27,69.08822820422056\r
2018-06-29,74.53675714157704\r
2018-07-02,81.69372893107656\r
2018-07-04,69.3452762210321\r
2018-07-07,67.5510745797517\r
2018-07-09,61.741733800530454\r
2018-07-17,58.02607200452557\r
2018-07-19,47.24549765543795\r
2018-07-24,73.22995045200027\r
2018-07-27,62.24157205942937\r
2018-07-29,46.77971318208982\r
2018-08-01,56.31243005449459\r
2018-08-03,46.547263158577564\r
2018-08-16,31.898200075160382\r
2018-08-18,35.101876038472966\r
2018-08-21,28.774642783105765\r
2018-08-28,25.935264275644883\r
2018-09-02,16.636279829411713\r
2018-09-05,21.822375741390864\r
2018-09-10,13.502146499549688\r
2018-09-17,2.232387929707578\r
2018-11-04,1.7142744388454787\r
2018-11-24,11.346964929161057\r
2019-01-03,28.980306938615453\r
2019-02-04,41.50951771166419\r
2019-02-12,50.06467341983885\r
2019-02-14,44.2391513375165\r
2019-02-17,41.96136638144809\r
2019-02-19,51.72824741348939\r
2019-02-22,50.06467341983885\r
2019-02-27,64.50348513187592\r
2019-03-16,34.02531763886674\r
2019-03-21,49.35598111952623\r
2019-03-24,62.993252219441764\r
2019-03-26,48.88495548273368\r
2019-03-29,72.18876690211401\r
2019-03-31,64.25114658034768\r
2019-04-13,69.6025675486954\r
2019-04-15,70.37589699760103\r
2019-04-20,65.5153554351304\r
2019-04-23,56.31243005449459\r
2019-04-30,87.64673089422779\r
2019-05-23,68.06247813507849\r
2019-05-30,68.5748638769751\r
2019-06-02,72.18876690211401\r
2019-06-07,80.62293119647627\r
2019-06-17,45.389464136229506\r
2019-06-19,66.02279355239195\r
2019-06-24,71.66960486815391\r
2019-06-27,56.8007033890395\r
2019-06-29,47.01245825314633\r
2019-07-02,68.5748638769751\r
2019-07-04,64.25114658034768\r
2019-07-07,71.92906638998643\r
2019-07-09,57.5351241723106\r
2019-07-14,49.59192537746722\r
2019-07-17,57.5351241723106\r
2019-07-19,39.04689986361447\r
2019-07-22,44.92843543263577\r
2019-07-24,43.55259632384529\r
2019-07-29,22.78509295800061\r
2019-08-03,40.38538537789248\r
2019-08-08,28.774642783105765\r
2019-08-11,30.638942066665987\r
2019-08-18,38.60330734040659\r
2019-08-21,27.751963459955732\r
2019-08-23,27.955742688315443\r
2019-08-26,26.738810396821332\r
2019-08-28,25.535848569752783\r
2019-08-31,21.631110917248645\r
2019-09-02,23.173129898973876\r
2019-09-07,21.440276574903795\r
2019-09-12,13.671823777125597\r
2019-09-15,11.509314838942721\r
2019-09-17,7.6383713515678116\r
2019-09-20,5.257726906332086\r
2019-09-27,5.661087844342346\r
2019-09-30,3.603497619403372\r
2019-12-06,88.4667195422373\r
2020-02-07,41.73528604385604\r
2020-02-12,52.68505444299787\r
2020-02-22,70.8926584875038\r
2020-02-24,71.41038275997495\r
2020-03-18,80.62293119647627\r
2020-03-20,81.15787952283956\r
2020-03-23,100.0\r
2020-03-25,79.55574950669131\r
2020-03-28,100.0\r
2020-04-02,99.01860121870301\r
2020-04-04,100.0\r
2020-04-07,97.61298755185105\r
2020-04-09,100.0\r
2020-04-14,100.0\r
2020-04-24,96.49219922614655\r
2020-05-04,86.01262003197772\r
2020-05-09,97.61298755185105\r
2020-05-17,85.46966442579863\r
2020-05-19,81.96199063385195\r
2020-05-22,99.01860121870301\r
2020-05-27,99.86442402589209\r
2020-05-29,95.37472232287236\r
2020-06-23,90.93831203588152\r
2020-07-01,81.4256917735016\r
2020-07-08,84.11612495619454\r
2020-07-11,71.66960486815391\r
2020-07-13,70.37589699760103\r
2020-07-18,67.04065684581234\r
2020-07-21,83.03727571371093\r
2020-07-23,53.646315286471506\r
2020-07-28,40.38538537789248\r
2020-07-31,65.00891802475974\r
2020-08-05,34.88588100329309\r
2020-08-07,29.186344122538934\r
2020-08-10,52.20609171272934\r
2020-08-20,25.935264275644883\r
2020-08-25,31.266953704556833\r
2020-08-27,29.186344122538934\r
2020-09-01,18.44706705394917\r
2020-09-04,21.440276574903795\r
2020-09-14,14.18407629900833\r
2020-09-16,14.012791908499805\r
2020-10-24,13.333011472700054\r
2020-10-31,19.37006137396451\r
2020-11-10,23.56283167925792\r
2020-11-18,7.202151172636653\r
2020-11-23,18.26385545001136\r
2020-11-25,10.069781937570177\r
2020-12-13,11.672251113761693\r
2021-01-24,21.822375741390864\r
2021-02-21,72.96929817483428\r
2021-02-23,82.23047652157814\r
2021-02-28,98.17461765120024\r
2021-03-10,90.66283415712041\r
2021-03-23,95.09587272107913\r
2021-03-25,100.0\r
2021-03-28,85.19851589830196\r
2021-03-30,99.30033817370844\r
2021-04-02,93.14977884480103\r
2021-04-04,77.96180895674306\r
2021-04-07,83.57625622695316\r
2021-04-09,87.91984394197172\r
2021-04-14,87.10115595511961\r
2021-04-17,83.84607973988355\r
2021-04-19,88.74048143790834\r
2021-04-24,98.17461765120024\r
2021-05-27,85.46966442579863\r
2021-05-29,99.58227920383321\r
2021-06-01,97.05218063474837\r
2021-06-11,89.56305959221122\r
2021-06-13,84.65687910481896\r
2021-06-16,95.09587272107913\r
2021-06-18,81.15787952283956\r
2021-06-26,88.19317360099286\r
2021-07-21,75.84943537044356\r
2021-08-10,67.5510745797517\r
2021-08-15,68.83142394120676\r
2021-08-20,72.44870598306031\r
2021-08-25,67.5510745797517\r
2021-08-27,66.78581880705414\r
2021-09-01,65.76894964214029\r
2021-09-04,73.22995045200027\r
2021-09-06,69.86010174628812\r
2021-09-24,60.248416726002006\r
2021-09-26,77.43232936360856\r
2021-09-29,63.747227689201345\r
2021-10-01,52.445433587271786\r
2021-10-11,64.50348513187592\r
2021-10-14,67.5510745797517\r
2021-10-16,58.76448364582907\r
2021-10-21,69.08822820422056\r
2021-10-24,62.993252219441764\r
2021-11-30,64.25114658034768\r
2021-12-23,54.85409477612515\r
2022-01-14,50.06467341983885\r
2022-02-08,41.50951771166419\r
2022-02-26,65.5153554351304\r
2022-02-28,64.50348513187592\r
2022-03-05,80.8902925422754\r
2022-03-23,88.19317360099286\r
2022-03-25,85.74103258393238\r
2022-04-14,62.993252219441764\r
2022-04-17,79.55574950669131\r
2022-05-09,80.35579585160102\r
2022-05-29,70.11787837489652\r
2022-06-11,61.242925751042954\r
2022-06-13,62.49187624698206\r
2022-06-16,49.35598111952623\r
2022-06-18,49.35598111952623\r
2022-06-28,49.59192537746722\r
2022-07-03,50.06467341983885\r
2022-07-06,48.88495548273368\r
2022-07-08,44.2391513375165\r
2022-07-11,43.09641948484267\r
2022-07-13,35.101876038472966\r
2022-07-16,37.94035203199107\r
2022-07-18,35.31821068297873\r
2022-07-21,31.477011318923893\r
2022-07-26,32.53264966499233\r
2022-07-28,27.54856525719119\r
2022-07-31,26.940670618008568\r
2022-08-02,23.367773537203878\r
2022-08-07,18.44706705394917\r
2022-08-10,21.440276574903795\r
2022-08-12,11.672251113761693\r
2022-08-22,9.756654428278209\r
2022-08-25,9.138069731900575\r
2022-09-01,6.772571415946797\r
2022-09-04,9.91290275517653\r
2022-09-09,7.9327802335964215\r
2022-09-11,8.379655083895276\r
2022-09-19,5.661087844342346\r
2022-09-21,7.202151172636653\r
2022-10-04,6.489973713512629\r
2022-10-11,7.9327802335964215\r
2022-10-26,6.349835254401237\r
2022-11-23,12.828893744532794\r
2022-12-05,14.18407629900833\r
2023-02-03,25.13802038735647\r
2023-02-08,17.89883758381866\r
2023-02-11,30.847917886970006\r
2023-02-13,22.59170311186105\r
2023-02-16,28.159901579426155\r
2023-02-21,28.980306938615453\r
2023-03-05,21.24987458673234\r
2023-04-19,22.59170311186105\r
2023-05-02,31.477011318923893\r
2023-05-27,30.847917886970006\r
2023-05-29,28.159901579426155\r
2023-06-01,30.430329243972487\r
2023-06-03,33.5971007251635\r
2023-06-06,35.31821068297873\r
2023-06-08,36.841977498170934\r
2023-06-16,52.924953657739096\r
2023-06-26,48.64987545684538\r
2023-06-28,42.41445978049639\r
2023-07-06,35.101876038472966\r
2023-07-08,45.15879969058032\r
2023-07-11,44.92843543263577\r
2023-07-13,37.72001953222416\r
2023-07-16,39.04689986361447\r
2023-07-18,39.71470403520277\r
2023-07-23,35.31821068297873\r
2023-07-31,16.99460056386986\r
2023-08-02,18.44706705394917\r
2023-08-15,19.184545044673364\r
2023-08-22,8.081043333771616\r
2023-08-25,10.227287142450585\r
2023-09-01,5.934162304131455\r
2023-09-04,7.202151172636653\r
2023-09-06,8.081043333771616\r
2023-09-11,3.8474297129629758\r
2023-09-26,5.257726906332086\r
2023-10-01,2.1260133891518924\r
2023-10-06,3.9709081134794744\r
`;export{r as default};
