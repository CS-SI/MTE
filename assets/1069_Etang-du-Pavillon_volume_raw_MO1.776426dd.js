const n=`date,value\r
2017-02-18,35734.521579979795\r
2017-03-30,32724.00190526183\r
2017-04-09,26443.371133730278\r
2017-04-12,35607.057180967655\r
2017-04-19,26103.37132692064\r
2017-04-22,33841.007626776955\r
2017-06-18,32724.00190526183\r
2017-06-21,38582.749863575846\r
2017-08-07,36246.12727359689\r
2017-08-20,33966.00726862738\r
2017-08-27,32477.73854123691\r
2017-09-14,28052.278857000078\r
2017-09-21,35479.767880580825\r
2017-10-11,31865.213055012402\r
2017-10-14,31378.425546937782\r
2017-10-16,37667.40198889176\r
2017-10-19,31257.179012843273\r
2017-11-13,28518.649633190093\r
2017-11-15,34845.95295556044\r
2017-11-25,31743.24629340364\r
2017-12-08,29223.732250872756\r
2017-12-15,30773.999097311622\r
2018-01-17,26216.51670172825\r
2018-01-19,28752.941706980153\r
2018-02-26,27358.277340396082\r
2018-02-28,28168.594440265573\r
2018-03-20,29697.45546802569\r
2018-04-17,32724.00190526183\r
2018-04-19,30174.10046335994\r
2018-04-22,31378.425546937782\r
2018-05-04,31015.22748577069\r
2018-05-09,28987.969708001154\r
2018-05-19,29816.343222493928\r
2018-06-23,29105.759247919555\r
2018-06-26,32724.00190526183\r
2018-06-28,25990.414097020777\r
2018-07-01,31257.179012843273\r
2018-07-08,30773.999097311622\r
2018-07-16,35607.057180967655\r
2018-07-18,28635.70359222086\r
2018-07-26,34972.36457594074\r
2018-08-02,34845.95295556044\r
2018-08-05,33342.78230272412\r
2018-09-01,32109.685389393297\r
2018-09-09,31743.24629340364\r
2018-09-11,35479.767880580825\r
2018-09-26,32600.780868124442\r
2018-09-29,33841.007626776955\r
2018-10-01,30293.716977284374\r
2018-10-04,33716.185157420616\r
2018-10-09,34216.537465764326\r
2018-10-19,32970.97948686155\r
2018-10-21,33342.78230272412\r
2018-10-24,35734.521579979795\r
2018-11-15,27588.868656811923\r
2018-11-18,30413.51526334038\r
2018-12-20,5269.177367824612\r
2019-01-09,12730.575252358032\r
2019-01-17,14943.902638175585\r
2019-01-24,23228.195710560332\r
2019-02-03,19767.642591013453\r
2019-02-16,21628.654803353515\r
2019-02-23,23120.19868740275\r
2019-02-26,28401.78000456316\r
2019-03-23,22690.147740229466\r
2019-03-30,36889.55686680139\r
2019-04-12,34719.7173116821\r
2019-04-19,25540.47041593181\r
2019-05-12,30413.51526334038\r
2019-05-14,31257.179012843273\r
2019-05-24,27013.786655393407\r
2019-06-01,35989.975095271606\r
2019-06-18,31257.179012843273\r
2019-06-26,30773.999097311622\r
2019-06-28,32600.780868124442\r
2019-07-03,34845.95295556044\r
2019-07-06,24760.356674884595\r
2019-07-08,33218.67004414194\r
2019-07-13,26899.32949919305\r
2019-07-16,34091.18393184265\r
2019-07-23,33966.00726862738\r
2019-08-22,31378.425546937782\r
2019-08-25,31257.179012843273\r
2019-09-01,35607.057180967655\r
2019-09-06,32232.190644635568\r
2019-09-16,30174.10046335994\r
2019-09-19,32232.190644635568\r
2019-10-06,31987.359473349596\r
2019-11-13,28401.78000456316\r
2019-11-18,26670.97589520445\r
2019-12-03,33591.54001216097\r
2019-12-13,23228.195710560332\r
2019-12-20,21418.707389258347\r
2019-12-23,745.6588193964724\r
2020-01-22,21523.582728147856\r
2020-02-06,19767.642591013453\r
2020-03-19,22263.206369384334\r
2020-03-24,20690.107445154426\r
2020-03-27,22583.120343257007\r
2020-04-01,26216.51670172825\r
2020-04-11,27013.786655393407\r
2020-04-23,26670.97589520445\r
2020-05-18,29341.888545171423\r
2020-05-21,28285.094881623347\r
2020-05-26,29816.343222493928\r
2020-05-28,29341.888545171423\r
2020-05-31,32477.73854123691\r
2020-06-02,34216.537465764326\r
2020-06-22,24428.87519182147\r
2020-06-25,32354.875081079612\r
2020-07-07,29105.759247919555\r
2020-07-12,31015.22748577069\r
2020-07-17,30293.716977284374\r
2020-07-20,32354.875081079612\r
2020-07-22,37148.145386258664\r
2020-07-27,39109.59006572762\r
2020-07-30,34342.06772020216\r
2020-08-04,32970.97948686155\r
2020-08-06,34845.95295556044\r
2020-08-11,35098.95202539035\r
2020-09-08,35352.653824020024\r
2020-09-10,32232.190644635568\r
2020-09-13,36631.663029407624\r
2020-11-04,48765.78564277445\r
2020-11-12,33094.7357208517\r
2020-11-14,32354.875081079612\r
2020-11-19,32600.780868124442\r
2020-11-22,29223.732250872756\r
2020-11-29,31015.22748577069\r
2020-12-12,30533.49515555298\r
2020-12-29,22904.78536459883\r
2021-02-17,31136.112938398484\r
2021-02-27,32477.73854123691\r
2021-03-22,35989.975095271606\r
2021-03-24,35225.71515692772\r
2021-03-29,35098.95202539035\r
2021-04-01,29223.732250872756\r
2021-04-03,26785.059184398622\r
2021-04-08,33591.54001216097\r
2021-04-13,30653.656488500535\r
2021-04-23,33716.185157420616\r
2021-04-26,31499.852379046384\r
2021-04-28,25652.67316973425\r
2021-05-23,28401.78000456316\r
2021-05-28,28987.969708001154\r
2021-05-31,29816.343222493928\r
2021-06-10,27820.20297388595\r
2021-06-12,29697.45546802569\r
2021-06-15,32109.685389393297\r
2021-07-17,29105.759247919555\r
2021-07-20,29697.45546802569\r
2021-07-22,32477.73854123691\r
2021-08-11,32354.875081079612\r
2021-08-14,34593.657792191836\r
2021-08-26,33467.07234307648\r
2021-09-05,27358.277340396082\r
2021-09-23,32970.97948686155\r
2021-09-30,27704.44303016815\r
2021-10-23,26670.97589520445\r
2021-10-28,31257.179012843273\r
2021-11-09,31257.179012843273\r
2021-11-19,29697.45546802569\r
2021-12-17,28752.941706980153\r
2022-01-06,23771.076123922394\r
2022-01-21,23012.39516893625\r
2022-02-05,26670.97589520445\r
2022-02-12,28635.70359222086\r
2022-03-07,27820.20297388595\r
2022-03-14,35225.71515692772\r
2022-03-22,27013.786655393407\r
2022-03-24,25540.47041593181\r
2022-04-11,25990.414097020777\r
2022-04-16,27473.480033460695\r
2022-04-21,26329.85003318759\r
2022-05-11,28052.278857000078\r
2022-05-21,27704.44303016815\r
2022-05-28,28518.649633190093\r
2022-05-31,30174.10046335994\r
2022-06-02,33716.185157420616\r
2022-06-15,30653.656488500535\r
2022-06-17,35989.975095271606\r
2022-07-02,32724.00190526183\r
2022-07-05,35225.71515692772\r
2022-07-10,35352.653824020024\r
2022-07-12,36631.663029407624\r
2022-07-30,34719.7173116821\r
2022-08-06,33966.00726862738\r
2022-08-09,36760.52304244473\r
2022-08-11,38058.659682280886\r
2022-08-24,35734.521579979795\r
2022-08-29,34719.7173116821\r
2022-09-05,34719.7173116821\r
2022-09-18,32477.73854123691\r
2022-09-30,33342.78230272412\r
2022-11-02,31257.179012843273\r
2022-11-12,30773.999097311622\r
2022-11-19,33094.7357208517\r
2022-11-22,32600.780868124442\r
2022-12-09,29105.759247919555\r
2022-12-27,37928.06784728408\r
2023-01-11,30894.52281766184\r
2023-02-10,44666.28052079096\r
2023-02-12,27936.148308956163\r
2023-02-15,25765.06482843274\r
2023-02-20,30054.66588809864\r
2023-02-27,31621.4593480621\r
2023-03-02,31015.22748577069\r
2023-03-04,25204.99750508212\r
2023-05-26,28518.649633190093\r
2023-05-28,27588.868656811923\r
2023-05-31,29816.343222493928\r
2023-06-02,30894.52281766184\r
2023-06-05,29935.413418591834\r
2023-06-07,32724.00190526183\r
2023-06-15,35225.71515692772\r
2023-06-25,26785.059184398622\r
2023-06-27,33966.00726862738\r
2023-07-07,32724.00190526183\r
2023-07-10,32109.685389393297\r
2023-08-09,29935.413418591834\r
2023-08-19,31621.4593480621\r
2023-08-21,34216.537465764326\r
2023-09-03,37928.06784728408\r
2023-09-05,30894.52281766184\r
2023-09-08,22797.369484660587\r
2023-09-10,35734.521579979795\r
2023-09-15,35607.057180967655\r
2023-09-30,34972.36457594074\r
2023-10-08,24428.87519182147\r
`;export{n as default};
