const n=`date,value\r
2017-02-19,9957677.65720973\r
2017-03-11,9690582.200578215\r
2017-04-10,8670627.56466555\r
2017-04-20,8264098.766567193\r
2017-04-30,7845211.177120731\r
2017-05-10,7257251.40672219\r
2017-06-02,5953653.791837495\r
2017-06-19,5045250.334078582\r
2017-07-07,4409723.296269867\r
2017-07-17,3870063.098648989\r
2017-07-29,3000025.3284352\r
2017-08-23,1294833.6095870445\r
2017-08-26,1039713.3223292215\r
2017-09-20,99830.23385163028\r
2017-09-22,92497.6422918116\r
2017-09-25,88788.05574858263\r
2017-10-05,216573.29293872457\r
2017-10-15,1309.9119222810225\r
2017-10-17,513.5345666273832\r
2018-01-13,32708.286769311064\r
2018-02-24,7689.82497276717\r
2018-02-27,4165.2073310084925\r
2018-03-21,1051.4935270268109\r
2018-03-24,7595.646345738534\r
2018-04-20,66481.87709887685\r
2018-05-05,70487.84453960211\r
2018-05-08,35167.70096907633\r
2018-05-25,342396.5826015254\r
2018-06-27,1740871.8415113788\r
2018-07-02,1571200.8959437942\r
2018-07-09,1479723.2993996104\r
2018-07-17,1510533.666641671\r
2018-07-19,1377294.1519190534\r
2018-07-24,1487400.9865672824\r
2018-07-27,1526038.3294593825\r
2018-07-29,1401363.3634554911\r
2018-08-01,1766488.9025929614\r
2018-08-03,1561601.3524472322\r
2018-08-06,1689207.4470902432\r
2018-08-16,1440741.7506301594\r
2018-08-21,1306136.512532442\r
2018-08-28,1284374.8742150317\r
2018-09-05,1276353.8488451764\r
2018-09-12,1208243.3706072108\r
2018-09-17,994549.4016935655\r
2018-09-20,1025783.6564510297\r
2018-09-25,1078984.1216460234\r
2018-09-27,928384.2298841074\r
2018-09-30,1019212.8426968124\r
2018-10-05,953061.4290111795\r
2018-10-10,859377.2524705805\r
2018-10-12,864815.6350191494\r
2018-10-15,812405.4806519046\r
2018-10-20,915798.6890411907\r
2018-10-22,688057.4166080867\r
2019-01-03,1892187.1552802587\r
2019-01-18,2925970.2263619057\r
2019-02-14,3836998.942245349\r
2019-02-17,4805702.658360871\r
2019-02-24,4165071.4977987087\r
2019-02-27,5722172.702169343\r
2019-03-21,6554605.14942367\r
2019-03-24,7961993.942016745\r
2019-03-29,8043132.877012473\r
2019-03-31,7843499.170931918\r
2019-04-15,8100308.253990436\r
2019-04-18,9483915.579044359\r
2019-04-20,8576225.73116927\r
2019-05-23,10508685.563199803\r
2019-06-04,9651340.238055367\r
2019-06-07,10025874.114370966\r
2019-06-17,10337084.390639797\r
2019-06-27,9999330.136459941\r
2019-06-29,9474650.160204835\r
2019-07-04,10168574.773262251\r
2019-07-09,8994457.069303207\r
2019-07-17,9063455.082378775\r
2019-07-24,8095103.493543399\r
2019-08-01,7712144.448613353\r
2019-08-03,7568221.597483932\r
2019-08-08,6872193.827948341\r
2019-08-21,6873813.741930298\r
2019-08-23,7126827.321896773\r
2019-08-26,7126827.321896773\r
2019-08-28,5800415.152243804\r
2019-08-31,6465924.572476845\r
2019-09-07,5654821.991727942\r
2019-09-12,4896718.753028168\r
2019-09-15,5393154.647059291\r
2019-09-17,4944611.395769837\r
2019-09-20,5009717.3596637845\r
2019-12-04,3852244.576640797\r
2019-12-29,5172599.02435503\r
2020-01-05,5537392.018555862\r
2020-01-15,6093148.746296642\r
2020-01-20,6086988.722918963\r
2020-02-07,7664609.336404441\r
2020-02-09,7263881.457554157\r
2020-03-13,6390315.209856767\r
2020-03-15,9788039.235294444\r
2020-03-18,10279507.803760277\r
2020-03-25,10225891.070240105\r
2020-03-28,10294848.406880038\r
2020-04-02,9703677.652662605\r
2020-04-04,9028928.507678745\r
2020-04-07,10231630.109939648\r
2020-04-12,9912321.560332865\r
2020-04-14,9291975.748112665\r
2020-04-17,10031565.938636106\r
2020-04-22,9810587.224839274\r
2020-04-27,9640140.484067427\r
2020-05-07,10178118.130688438\r
2020-05-17,10174300.338374702\r
2020-05-19,9625215.940846918\r
2020-05-27,10141873.296817234\r
2020-05-29,9297489.469890416\r
2020-06-01,10071446.53319138\r
2020-06-23,9614028.881343616\r
2020-07-01,10201037.463996956\r
2020-07-13,9063455.082378775\r
2020-07-23,8335968.418829016\r
2020-07-31,9143622.857716009\r
2020-08-05,8645649.226905772\r
2020-08-07,7761506.769859071\r
2020-08-20,7499205.823757112\r
2020-09-04,6578444.622671068\r
2020-09-09,6491210.313765183\r
2020-09-11,5868483.342048034\r
2020-09-14,6113186.817437298\r
2020-10-14,4678103.204070364\r
2020-10-19,4715401.924383473\r
2020-10-31,4979950.881709125\r
2020-11-18,5301272.839741491\r
2020-11-25,5069472.731025551\r
2021-02-11,8206441.6473676935\r
2021-02-21,9216758.725995498\r
2021-02-23,9269934.543853844\r
2021-02-28,9387740.480619868\r
2021-03-08,9090751.828633398\r
2021-03-23,9437626.374396442\r
2021-03-30,9788039.235294444\r
2021-04-02,10086656.546276916\r
2021-04-04,9827512.456082745\r
2021-04-24,9662545.43081556\r
2021-04-27,10010702.522821052\r
2021-05-29,10056246.121930914\r
2021-06-01,10003120.331143895\r
2021-06-13,9683102.406487107\r
2021-06-16,9606573.865064599\r
2021-07-18,8036214.042174444\r
2021-07-21,8339480.912274512\r
2021-07-23,8034484.722620709\r
2021-08-12,6682166.928979969\r
2021-09-01,5243278.306589935\r
2021-09-04,5413662.448436956\r
2021-09-06,5207167.316165882\r
2021-09-24,4682241.387044016\r
2021-10-01,4260109.01548827\r
2021-10-09,4227008.2580709485\r
2021-10-14,4073535.294535403\r
2021-10-24,3854787.973817478\r
2021-10-29,3723464.1109579117\r
2021-11-23,3664741.580502433\r
2022-01-12,5578894.828717638\r
2022-01-14,5675739.799155831\r
2022-01-24,5466546.192062187\r
2022-02-08,5541832.547069243\r
2022-02-13,5011136.6614235\r
2022-02-26,4962974.79097193\r
2022-02-28,4992698.857942512\r
2022-03-03,4881265.836774189\r
2022-03-05,4938966.849499396\r
2022-03-08,4936145.587694055\r
2022-03-10,4839225.4145529615\r
2022-03-20,5215824.4330719095\r
2022-03-23,4794550.073209479\r
2022-03-25,4874248.538669295\r
2022-03-28,4895313.0983157065\r
2022-04-17,5068046.541029965\r
2022-04-27,5110905.221396209\r
2022-05-04,5230266.325580397\r
2022-05-07,5201399.246985995\r
2022-05-09,5128090.945413627\r
2022-06-11,4715401.924383473\r
2022-06-13,4580613.449564289\r
2022-06-16,4398964.986257902\r
2022-06-18,4469090.322772434\r
2022-07-03,4000919.8888393277\r
2022-07-06,4056629.4684972614\r
2022-07-11,3845889.1559504694\r
2022-07-13,3311099.1267594127\r
2022-07-16,3607647.031234504\r
2022-07-18,3123612.748235084\r
2022-08-07,2266193.4553824393\r
2022-08-10,2210467.739511403\r
2022-08-12,1886523.9615596982\r
2022-08-25,1512253.1357822418\r
2022-10-09,451286.24635634525\r
2022-11-23,3074853.064504502\r
2023-01-07,5949078.080976261\r
2023-02-08,7280467.662016202\r
2023-02-11,7143281.990802194\r
2023-02-13,7066083.130165168\r
2023-02-16,6807528.288801183\r
2023-02-21,7000658.566057257\r
2023-04-04,10225891.070240105\r
2023-04-09,10181936.52208366\r
2023-05-27,10176209.159644088\r
2023-05-29,10302522.296380956\r
2023-06-01,10429486.539655944\r
2023-06-03,10287176.909242658\r
2023-06-08,10331320.679573424\r
2023-06-11,10149499.293484848\r
2023-06-13,10185755.512523642\r
2023-06-21,10216328.997250848\r
2023-06-23,9424682.376502853\r
2023-06-26,9660677.521040127\r
2023-07-11,9280952.40914731\r
2023-08-10,7645968.47129085\r
2023-08-20,6330721.832729159\r
2023-08-22,6825285.817210225\r
2023-09-04,6212236.604838737\r
2023-09-06,5876066.970253868\r
2023-09-09,5282395.351271485\r
2023-09-11,5286749.19458924\r
2023-09-24,5086600.100535435\r
2023-09-26,4696046.381475481\r
2023-10-01,4520628.815892653\r
2023-10-06,4155879.6092657773\r
`;export{n as default};
