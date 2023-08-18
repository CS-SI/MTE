const n=`date,value\r
2017-02-15,97190577.45712276\r
2017-02-19,97190577.45712276\r
2017-02-25,97190577.45712276\r
2017-03-27,188008028.86419556\r
2017-03-31,188008028.86419556\r
2017-04-03,189769252.60541508\r
2017-04-06,189717380.69179502\r
2017-04-10,182470598.78700772\r
2017-05-16,195989360.66325018\r
2017-05-23,194731615.29687262\r
2017-05-26,192960729.5806997\r
2017-06-02,182625154.54020154\r
2017-06-05,176738455.1787799\r
2017-06-22,171636020.66933984\r
2017-08-14,161101772.69671816\r
2017-08-19,157651756.65012804\r
2017-08-21,157651756.65012804\r
2017-08-23,157651756.65012804\r
2017-08-24,157129391.11096817\r
2017-08-29,150960612.94755408\r
2017-09-03,150744370.3778939\r
2017-10-15,82342710.5397376\r
2017-10-17,82342710.5397376\r
2017-10-18,55929083.32485194\r
2017-10-20,55446510.63758459\r
2017-10-25,65935456.89002796\r
2017-11-22,18626490.98011181\r
2017-11-29,18619943.219790563\r
2017-12-01,18661439.987349983\r
2017-12-02,19779839.557948306\r
2018-02-22,188838713.40064156\r
2018-02-24,187666832.38249382\r
2018-02-25,187993535.16118494\r
2018-02-27,187945228.54842734\r
2018-03-24,198888967.62952468\r
2018-04-18,198500381.60502148\r
2018-04-20,199896436.28577828\r
2018-04-21,196334588.67047343\r
2018-04-25,200280222.8083484\r
2018-05-06,184996053.67610323\r
2018-05-08,199866159.6109134\r
2018-05-11,193451672.7835337\r
2018-05-18,195422663.60288876\r
2018-06-20,189728726.81240016\r
2018-06-22,190735581.7730591\r
2018-06-27,191749491.64757\r
2018-07-02,198785068.5198799\r
2018-07-04,198785068.5198799\r
2018-07-07,191380651.9545375\r
2018-07-25,178169787.42972422\r
2018-07-27,180172768.080765\r
2018-07-29,183796795.90521455\r
2018-07-30,183796795.90521455\r
2018-08-03,184264720.83956155\r
2018-08-04,184264720.83956155\r
2018-08-06,185007198.5493917\r
2018-08-11,177595342.61466074\r
2018-08-16,177644838.51114726\r
2018-08-21,161299571.92284516\r
2018-08-23,161302460.77935517\r
2018-08-26,156081293.76734892\r
2018-08-29,155771076.06911162\r
2018-09-20,101851139.68030764\r
2018-09-22,101851139.68030764\r
2018-09-25,95809606.06442168\r
2018-09-27,95809606.06442168\r
2018-09-28,94945306.59239088\r
2018-09-30,87574797.47665986\r
2018-10-05,80787878.46602392\r
2018-10-10,75721230.91112216\r
2018-10-13,66825826.8572274\r
2018-10-15,66825826.8572274\r
2018-10-17,83195266.13679145\r
2018-10-18,41680832.061036475\r
2018-10-20,47659578.14982272\r
2018-10-22,35535131.974546775\r
2018-11-14,47248223.84574364\r
2018-11-17,38265611.09268373\r
2018-11-19,38265611.09268373\r
2018-11-22,9804168.7307292\r
2019-02-15,135311020.28396797\r
2019-02-17,141610222.9901422\r
2019-02-20,141610222.9901422\r
2019-02-22,147594861.80870155\r
2019-02-24,147594861.80870155\r
2019-02-25,149321588.48262003\r
2019-02-27,154896375.1536081\r
2019-03-22,173773885.17791954\r
2019-03-24,177259956.91216356\r
2019-03-29,178585570.2548341\r
2019-03-31,178585570.2548341\r
2019-04-01,175390410.04413897\r
2019-04-11,175552954.40132007\r
2019-04-15,177599982.43887553\r
2019-04-18,181055549.66435823\r
2019-04-20,181055549.66435823\r
2019-04-26,181590775.6429403\r
2019-05-01,184269483.738854\r
2019-05-06,184962621.9168712\r
2019-05-13,191458947.41018513\r
2019-05-15,191458947.41018513\r
2019-05-16,192285696.39315778\r
2019-05-23,191480156.34337214\r
2019-05-25,191480156.34337214\r
2019-05-26,192663966.83404237\r
2019-06-02,183994966.02890915\r
2019-06-04,183994966.02890915\r
2019-06-05,183994966.02890915\r
2019-06-27,179286819.22430423\r
2019-06-29,179286819.22430423\r
2019-06-30,179851097.1862418\r
2019-07-02,179576594.8154916\r
2019-07-04,179093820.07757297\r
2019-07-05,180975597.62511572\r
2019-07-07,180942683.4858762\r
2019-07-09,180942683.4858762\r
2019-07-10,178790611.86660537\r
2019-07-15,180415071.2105412\r
2019-07-17,178109339.07276434\r
2019-07-25,170992298.7631846\r
2019-07-29,175342893.69291142\r
2019-07-30,176007418.28304145\r
2019-08-01,174944729.25137985\r
2019-08-04,171735671.99194628\r
2019-08-08,171735671.99194628\r
2019-08-09,171737182.1763752\r
2019-08-24,147329225.8690894\r
2019-08-26,144293424.62099895\r
2019-08-28,144293424.62099895\r
2019-08-29,144144011.14096305\r
2019-08-31,140160384.87840736\r
2019-09-03,137617286.6870584\r
2019-09-07,136800904.43112776\r
2019-09-10,131278274.03604966\r
2019-09-12,126807307.71858233\r
2019-09-15,124349116.73398335\r
2019-09-18,114869761.93505213\r
2019-09-20,101701159.07587883\r
2019-09-22,101701159.07587883\r
2019-12-04,29137570.424811497\r
2019-12-14,31907715.79509958\r
2019-12-19,38068903.98927524\r
2019-12-29,65675643.8904867\r
2020-01-16,82444903.35049129\r
2020-01-20,82862675.5561932\r
2020-01-21,82563344.35191381\r
2020-01-23,92574402.49325922\r
2020-01-25,92574402.49325922\r
2020-01-26,95803619.43827914\r
2020-02-07,101001250.85637861\r
2020-02-10,151344054.0371819\r
2020-02-15,153431894.64753336\r
2020-02-22,154865501.19939673\r
2020-03-26,183291752.78145167\r
2020-03-28,182259417.81956747\r
2020-03-30,182617266.7928278\r
2020-03-31,182221612.69843313\r
2020-04-02,180912907.68978384\r
2020-04-04,180892536.7816699\r
2020-04-05,179963479.4473515\r
2020-04-07,179954112.35472885\r
2020-04-09,179954112.35472885\r
2020-04-10,179557889.58629176\r
2020-04-12,180077473.47688267\r
2020-04-14,180981867.46699923\r
2020-04-15,180981867.46699923\r
2020-04-17,180964625.77298775\r
2020-04-19,183356609.0189044\r
2020-04-20,181702356.8169515\r
2020-04-22,183464211.38817614\r
2020-04-27,185786928.27245188\r
2020-05-07,181914652.49541098\r
2020-05-15,183866534.4933244\r
2020-05-17,176253421.98197484\r
2020-05-19,176253421.98197484\r
2020-05-20,180104027.39098433\r
2020-05-27,179274363.21144322\r
2020-05-29,179274363.21144322\r
2020-05-30,179568800.80183113\r
2020-06-01,179751243.69028157\r
2020-06-03,184044135.69097063\r
2020-06-24,178670983.95454225\r
2020-07-01,178670983.95454225\r
2020-07-04,182089338.62808025\r
2020-07-06,182134996.96676156\r
2020-07-08,190004423.43804428\r
2020-07-09,188643309.08556816\r
2020-07-29,176479653.01200807\r
2020-07-31,176900343.329711\r
2020-08-02,176900343.329711\r
2020-08-05,174619019.49707806\r
2020-08-07,176299574.8437516\r
2020-08-08,170515517.09173265\r
2020-08-10,171231797.77903423\r
2020-08-12,171231797.77903423\r
2020-08-13,170820728.98022586\r
2020-08-17,171509251.11114696\r
2020-08-20,158974500.92821372\r
2020-08-25,156235154.95274577\r
2020-09-02,155661195.01355058\r
2020-09-04,155686547.29308662\r
2020-09-17,105138371.15894231\r
2020-09-21,103561916.04040961\r
2020-09-22,100393448.14744157\r
2020-11-21,63882502.835642844\r
2020-11-25,63882502.835642844\r
2020-11-26,63882502.835642844\r
2020-11-28,56053770.78619473\r
2020-12-10,35896068.634961225\r
2021-02-21,175234100.36742052\r
2021-02-24,174200664.9432263\r
2021-02-28,177158039.47076157\r
2021-03-01,174970743.44222927\r
2021-03-06,175777011.3586817\r
2021-03-08,182437491.78602475\r
2021-03-23,193036201.6483994\r
2021-03-28,195354804.44166747\r
2021-03-30,195354804.44166747\r
2021-03-31,189798434.98247868\r
2021-04-02,192024000.2643685\r
2021-04-04,184929194.4483352\r
2021-04-25,193961613.35356697\r
2021-04-27,193484543.41118824\r
2021-04-30,193670336.97511238\r
2021-06-01,201463475.65256897\r
2021-06-03,203740835.15439585\r
2021-06-04,203427279.6245585\r
2021-06-11,208735138.61093614\r
2021-06-14,192128648.34445152\r
2021-06-16,198547251.28482935\r
2021-06-19,194419726.1125615\r
2021-06-21,194218589.32103267\r
2021-07-19,191405116.84142816\r
2021-07-21,198800148.2566553\r
2021-07-23,198800148.2566553\r
2021-08-25,172570728.96310696\r
2021-08-27,166770679.55027252\r
2021-09-01,166770679.55027252\r
2021-09-02,169331432.0138346\r
2021-09-04,154757476.77385107\r
2021-09-06,157092531.40312076\r
2021-09-07,157092531.40312076\r
2021-09-12,152139336.56441686\r
2021-09-24,106582123.44028166\r
2021-10-01,106290749.89076973\r
2021-10-04,101439070.51403329\r
2021-10-09,71547214.27178954\r
2021-10-14,69301296.56503676\r
2021-10-16,78454619.72815287\r
2021-10-19,78253077.63808137\r
2021-10-21,66927858.909073934\r
2021-10-24,74226534.4148697\r
2021-10-27,45781950.7797302\r
2021-10-29,33683910.4181503\r
2021-11-06,35138101.183910854\r
2021-11-23,45543793.949656986\r
2021-12-18,36542137.40266921\r
2021-12-21,37978836.15777851\r
2022-01-15,91861628.93450451\r
2022-01-24,91066111.22448623\r
2022-01-25,91066111.22448623\r
2022-02-09,131629264.63325378\r
2022-02-11,130863192.561488\r
2022-02-13,130863192.561488\r
2022-02-19,132240396.9689555\r
2022-03-06,177895561.82775912\r
2022-03-08,179557889.58629176\r
2022-03-10,181499660.9428824\r
2022-03-21,187618585.40335086\r
2022-03-23,191674377.20028153\r
2022-03-25,191674377.20028153\r
2022-03-26,186164073.20904157\r
2022-03-28,188940509.71917164\r
2022-04-04,189100554.08747834\r
2022-04-17,200330759.95938906\r
2022-04-20,200618994.65914708\r
2022-04-22,194155970.35036284\r
2022-04-27,194797669.11720723\r
2022-05-15,183400910.44764075\r
2022-05-17,188623937.97493666\r
2022-05-25,187377482.62587863\r
2022-06-04,179947867.8186714\r
2022-06-11,181328515.99119467\r
2022-06-13,180379101.94012016\r
2022-06-19,183711233.3135308\r
2022-06-21,186820574.88813\r
2022-06-23,193111694.67668167\r
2022-06-28,193111694.67668167\r
2022-06-29,185796509.9751903\r
2022-07-01,193877654.37887886\r
2022-07-11,199343560.0069825\r
2022-07-14,198766638.83364147\r
2022-07-16,197356194.02491805\r
2022-07-18,198696282.10182336\r
2022-07-19,194797669.11720723\r
2022-07-24,192567302.10214958\r
2022-07-31,189427407.84904528\r
2022-08-02,189427407.84904528\r
2022-08-03,183133635.16321743\r
2022-08-07,185700708.73812002\r
2022-08-08,185662398.06745297\r
2022-08-10,182363410.62241614\r
2022-08-12,184036204.46924928\r
2022-08-13,177437639.80397385\r
2022-08-15,178773518.6834782\r
2022-08-20,178865213.8844885\r
2022-08-22,168804233.1685368\r
2022-08-23,167502464.047979\r
2022-09-12,138760055.3112274\r
2022-09-22,122810556.76022841\r
2022-10-09,63817430.36810864\r
2022-10-12,60750397.73412228\r
2022-10-19,62792269.134490825\r
2022-10-22,45600305.78787599\r
2023-02-14,134744491.24689665\r
2023-02-21,135043459.1656958\r
2023-03-01,143633900.63000113\r
2023-03-11,146124598.15701756\r
2023-03-18,151584401.15926778\r
2023-04-05,185136195.3370231\r
2023-04-09,185136195.3370231\r
2023-05-15,184282185.23105803\r
2023-05-19,184282185.23105803\r
2023-05-24,184282185.23105803\r
2023-05-25,192372439.05027696\r
2023-05-27,204709221.71229574\r
2023-05-29,204709221.71229574\r
2023-06-01,195439217.15677375\r
2023-06-03,195439217.15677375\r
2023-06-04,196450868.22883213\r
2023-06-06,194376848.4973278\r
2023-06-08,189272021.42343703\r
2023-06-09,189563445.26626933\r
2023-06-11,183947391.36784944\r
2023-06-13,184002895.9885139\r
2023-06-14,182710357.62917063\r
2023-06-16,181146505.9932841\r
2023-06-23,189021328.18039846\r
2023-06-24,184102834.27599743\r
2023-06-26,186111304.17370516\r
2023-06-28,183421481.55175823\r
2023-07-11,182350803.19054267\r
2023-07-14,178110888.84867662\r
2023-07-19,180605949.90360844\r
`;export{n as default};
