const n=`date,value\r
2017-02-25,16167054.046431748\r
2017-03-14,18864553.695861563\r
2017-03-17,18864553.695861563\r
2017-03-27,18961126.767457873\r
2017-04-03,19146309.875061914\r
2017-04-06,18867026.766112626\r
2017-04-23,19288617.57492287\r
2017-05-16,20436258.08321399\r
2017-05-23,20436258.08321399\r
2017-05-26,20233218.99312821\r
2017-06-02,19115174.372423314\r
2017-06-05,19030617.412850343\r
2017-06-12,18904142.792103812\r
2017-07-05,18920238.033332758\r
2017-08-29,18852190.841073085\r
2017-08-31,18852190.841073085\r
2017-09-03,18852190.841073085\r
2017-10-05,16692260.710958181\r
2017-10-13,16718979.784754101\r
2017-10-15,16482758.797611589\r
2017-10-18,16455081.534949709\r
2017-10-25,16530096.03131112\r
2017-11-22,15339748.957267446\r
2017-11-27,15394282.99030069\r
2017-11-29,15383145.526576122\r
2017-12-02,15383145.526576122\r
2018-02-22,17357342.270200036\r
2018-02-25,17909128.093615137\r
2018-02-27,17478402.63154228\r
2018-03-14,18267314.00366684\r
2018-03-24,18593531.905280095\r
2018-04-18,18759602.04820991\r
2018-04-21,18868263.36365031\r
2018-05-06,18512617.947661925\r
2018-05-08,18512617.947661925\r
2018-05-11,19219892.808801003\r
2018-05-18,19079089.7798401\r
2018-05-21,19079089.7798401\r
2018-06-20,19317394.36644646\r
2018-06-22,18953689.0815325\r
2018-06-25,19276112.79588744\r
2018-06-27,19218644.43324051\r
2018-07-02,19303628.8052929\r
2018-07-07,19286116.286056213\r
2018-08-04,19612680.40705282\r
2018-08-06,19372506.9896416\r
2018-08-11,19578636.986544523\r
2018-08-19,19171237.00813729\r
2018-08-21,19067898.230376374\r
2018-08-26,19041797.725142855\r
2018-09-08,18041812.561152734\r
2018-09-10,18193200.758901794\r
2018-09-18,18030937.67233643\r
2018-09-20,17408324.853689812\r
2018-09-25,17542668.3012017\r
2018-09-28,16907796.537842125\r
2018-09-30,16705036.661217641\r
2018-10-05,16504686.899409661\r
2018-10-08,16032548.890895892\r
2018-10-10,15457845.555300774\r
2018-10-13,15001436.57374282\r
2018-10-15,15001436.57374282\r
2018-10-18,14864351.165046822\r
2018-10-20,14904861.131721202\r
2018-10-23,14474233.15429629\r
2019-02-15,18255153.69095445\r
2019-02-17,18162871.164436877\r
2019-02-20,18162871.164436877\r
2019-02-22,18043021.08992309\r
2019-02-25,18239351.499345753\r
2019-02-27,18096237.499717906\r
2019-03-04,18506495.484347954\r
2019-03-22,18523641.001614988\r
2019-03-24,18228415.63602551\r
2019-03-27,18375723.94158432\r
2019-03-29,18368405.053917363\r
2019-04-01,18368405.053917363\r
2019-04-06,18433107.015901726\r
2019-04-11,19003301.95212019\r
2019-04-13,19052981.408524938\r
2019-05-01,18859608.054654554\r
2019-05-13,19674540.466642752\r
2019-05-16,19506867.25011422\r
2019-05-23,19348698.468334764\r
2019-05-28,19386297.740565732\r
2019-05-31,19397584.829679396\r
2019-06-02,19607635.021422032\r
2019-06-05,19607635.021422032\r
2019-06-27,19511899.308292344\r
2019-06-30,19516932.032799438\r
2019-07-02,19474175.113407545\r
2019-07-05,19613941.857588593\r
2019-07-07,19613941.857588593\r
2019-07-10,19513157.426950596\r
2019-07-15,19449046.47197294\r
2019-07-17,19401347.942216918\r
2019-07-20,19484231.234010432\r
2019-07-22,19324904.977696516\r
2019-07-25,19339930.696773857\r
2019-08-01,19288617.57492287\r
2019-08-04,18810188.256574962\r
2019-08-09,18810188.256574962\r
2019-08-14,18320868.768334925\r
2019-08-21,17231992.107903067\r
2019-08-24,17558157.75074922\r
2019-08-26,17484348.06975103\r
2019-08-29,17484348.06975103\r
2019-08-31,17326552.831474457\r
2019-09-03,17023720.513925973\r
2019-09-10,17272147.95444603\r
2019-09-13,16764336.182583382\r
2019-09-15,16658602.713751484\r
2019-09-18,16773647.856541973\r
2019-09-20,16731766.227755452\r
2019-09-30,16970977.387018643\r
2019-10-03,17304070.6040702\r
2019-10-13,15088407.76943005\r
2019-12-04,15178954.686723175\r
2019-12-14,14995940.75236569\r
2020-01-16,16561307.392548757\r
2020-01-18,16561307.392548757\r
2020-01-21,16290666.147920284\r
2020-01-23,16382542.328123724\r
2020-01-26,16403251.027203145\r
2020-02-07,17203675.69372432\r
2020-02-10,17293426.358468376\r
2020-02-15,17977820.004477218\r
2020-02-22,17888667.168147814\r
2020-03-28,18278261.83952632\r
2020-03-31,18305037.392517988\r
2020-04-02,18344019.571964856\r
2020-04-05,18306254.941208895\r
2020-04-07,18381824.158055127\r
2020-04-10,18307472.531474344\r
2020-04-12,18528541.217981573\r
2020-04-15,18677087.293766953\r
2020-04-20,18638972.01225388\r
2020-04-22,18715242.54985894\r
2020-04-25,19019440.471594423\r
2020-04-27,18874446.97546308\r
2020-05-07,19281114.207913406\r
2020-05-10,18672166.946742505\r
2020-05-12,18767000.539665103\r
2020-05-15,18767000.539665103\r
2020-05-17,18667247.265263073\r
2020-05-20,18922714.84845591\r
2020-05-25,18789205.000169724\r
2020-05-27,19199923.795234993\r
2020-05-30,19283615.16371991\r
2020-06-01,19327408.847857736\r
2020-07-06,19299875.43565163\r
2020-07-09,19358721.2768636\r
2020-07-11,19269861.967574745\r
2020-07-14,19269861.967574745\r
2020-07-19,19304880.011773765\r
2020-07-21,19209906.969916224\r
2020-07-24,19449046.47197294\r
2020-07-29,19449046.47197294\r
2020-07-31,19625296.786731027\r
2020-08-05,19607635.021422032\r
2020-08-08,19327408.847857736\r
2020-08-10,19298624.395704743\r
2020-08-15,19192438.162585355\r
2020-08-20,19173730.63720585\r
2020-08-25,19040555.30174888\r
2020-09-02,18998337.668776467\r
2020-09-04,19054224.24810609\r
2020-09-07,18879394.61386693\r
2020-09-09,18634056.823080484\r
2020-09-12,18619315.24859324\r
2020-09-14,18451440.098391373\r
2020-09-17,18464890.30528561\r
2020-09-19,18464890.30528561\r
2020-09-22,18174999.8847236\r
2020-11-06,16748047.140552869\r
2020-11-18,16835404.746560577\r
2020-11-21,16008671.999481957\r
2020-11-23,16234522.976879142\r
2020-11-28,15575286.496399421\r
2021-01-10,13446772.501793912\r
2021-02-21,17907924.17736656\r
2021-02-24,18228415.63602551\r
2021-03-01,18087765.870628495\r
2021-03-06,18263665.47334872\r
2021-03-08,18402572.669406854\r
2021-03-23,18818831.915756665\r
2021-03-28,19116419.29304923\r
2021-03-31,18727559.22470155\r
2021-04-02,19157525.024499077\r
2021-04-07,19082821.045495633\r
2021-04-25,19967513.718711242\r
2021-04-27,19963694.621599294\r
2021-05-30,18810188.256574962\r
2021-06-01,19447790.477146626\r
2021-06-11,19218644.43324051\r
2021-06-14,19378774.888219595\r
2021-06-16,19901369.123004172\r
2021-06-19,19901369.123004172\r
2021-06-21,19901369.123004172\r
2021-07-19,18753437.782713093\r
2021-07-21,19329912.884558853\r
2021-09-02,19283615.16371991\r
2021-09-04,19283615.16371991\r
2021-09-07,19324904.977696516\r
2021-09-17,19003301.95212019\r
2021-09-22,18698006.193716425\r
2021-09-24,18813892.432308514\r
2021-09-27,18769467.03630035\r
2021-10-02,18769467.03630035\r
2021-10-04,18878157.64185287\r
2021-10-14,18330614.64577845\r
2021-10-17,18076876.768486455\r
2021-10-19,18270962.908134483\r
2021-10-22,17702665.47179738\r
2021-10-24,17823753.287612535\r
2022-01-10,17428501.9329513\r
2022-01-15,17816548.11250491\r
2022-01-25,17306436.44861117\r
2022-02-09,17817748.871161457\r
2022-02-26,17828557.5685799\r
2022-03-06,18279478.47359612\r
2022-03-08,18246643.94556015\r
2022-03-23,18966086.057013713\r
2022-03-26,18972286.105273\r
2022-03-28,18831183.53675643\r
2022-04-17,19328660.84539077\r
2022-04-22,19499320.412203815\r
2022-04-27,19023165.744123377\r
2022-05-07,19038070.579815794\r
2022-05-15,19528258.099229544\r
2022-05-17,19506867.25011422\r
2022-05-20,19498062.751642775\r
2022-05-25,19498062.751642775\r
2022-06-11,18915284.90242096\r
2022-06-16,19849296.093076125\r
2022-06-19,19711198.633372128\r
2022-06-21,19412639.528355643\r
2022-06-29,19132607.04888247\r
2022-07-04,18714011.111171093\r
2022-07-06,19398839.158886127\r
2022-07-11,19501835.858260483\r
2022-07-14,19313639.622886766\r
2022-07-16,19431466.3337907\r
2022-07-19,19498062.751642775\r
2022-07-24,19524482.368936975\r
2022-07-31,19513157.426950596\r
2022-08-03,19357468.28006953\r
2022-08-05,19031859.50329982\r
2022-08-08,18963606.329008177\r
2022-08-10,18848482.79598115\r
2022-08-13,18870736.68355032\r
2022-08-20,19000819.727216348\r
2022-09-22,4773671.506272678\r
2022-09-24,4492265.787110979\r
2022-10-09,1737708.9318747749\r
2022-10-12,1737708.9318747749\r
2022-10-19,1740254.3579325327\r
2022-10-22,9580.119631793466\r
2022-10-24,2092.6405251692863\r
2022-11-01,61588.09100225344\r
2022-11-13,10508.457610681906\r
2023-02-09,6618847.238358308\r
2023-02-11,6573427.253661999\r
2023-02-14,6582066.300560306\r
2023-02-16,6582066.300560306\r
2023-03-01,5746961.102224448\r
2023-04-05,9714402.764883082\r
2023-04-20,11898132.241580175\r
2023-05-25,14812974.170178654\r
2023-06-14,14854505.94762221\r
2023-06-16,14854505.94762221\r
2023-06-19,14854505.94762221\r
2023-06-24,14886241.415679593\r
2023-07-16,14308516.648763755\r
2023-07-19,13897453.055774482\r
2023-08-23,14021400.399441136\r
2023-08-25,13670111.292732649\r
2023-09-02,13333741.72039568\r
2023-09-04,13170768.43196438\r
2023-09-07,13084543.283523977\r
2023-09-09,12887532.021961614\r
2023-09-14,12275929.721427472\r
2023-09-24,6406129.832192062\r
2023-10-02,3635531.411858044\r
2023-10-07,47078.782577580685\r
`;export{n as default};
