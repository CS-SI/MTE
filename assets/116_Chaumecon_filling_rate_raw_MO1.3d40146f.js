const n=`date,value\r
2017-02-25,88.14005338935176\r
2017-03-14,94.65638219019142\r
2017-03-17,86.18120811429142\r
2017-03-27,88.20521428725426\r
2017-04-03,86.68546159522958\r
2017-04-06,85.92306945607308\r
2017-04-23,93.439718409437\r
2017-05-16,74.04325684683126\r
2017-05-26,91.13077130546962\r
2017-06-02,88.74025388929522\r
2017-07-05,86.8149452822859\r
2017-07-22,76.51567316993247\r
2017-08-21,56.820049436148125\r
2017-08-29,53.69130042752074\r
2017-10-05,43.23941673223332\r
2017-10-15,44.25590698508028\r
2017-10-18,43.10197706931711\r
2017-11-14,27.43652896940796\r
2017-11-22,26.31401558739659\r
2018-02-25,90.05060517638277\r
2018-02-27,83.61367219408949\r
2018-03-14,78.3226684241839\r
2018-03-24,81.05182864792947\r
2018-04-18,94.29474269971175\r
2018-05-11,96.64844214807037\r
2018-05-18,84.8165770924651\r
2018-06-22,87.00931453663051\r
2018-06-27,99.07969433288942\r
2018-07-07,91.14397558385436\r
2018-07-27,86.918587425823\r
2018-08-04,81.8727321564584\r
2018-08-06,78.2356500739563\r
2018-08-19,64.42157524965046\r
2018-08-26,57.963107987151034\r
2018-09-08,41.26358309664028\r
2018-09-25,25.30542386866996\r
2018-09-28,24.838536137424175\r
2018-09-30,24.610314857475256\r
2018-10-05,24.500438353837787\r
2018-10-10,21.214185994237873\r
2018-10-13,21.600678586697995\r
2018-10-18,20.749651680277154\r
2018-10-20,20.493342874832347\r
2018-10-23,20.98509575236168\r
2018-11-04,21.488906334346765\r
2018-11-19,24.838536137424175\r
2019-02-15,65.9823816867145\r
2019-02-17,70.09759748821598\r
2019-02-20,75.91297091812265\r
2019-02-22,68.27473856757885\r
2019-02-25,66.1799773627578\r
2019-02-27,69.71725424355878\r
2019-03-19,77.1573417083686\r
2019-03-22,81.45555565327587\r
2019-03-24,73.61814731597647\r
2019-03-29,80.30954484703265\r
2019-04-11,80.61116391088838\r
2019-05-01,74.8108987145467\r
2019-05-13,87.98374518534742\r
2019-05-16,86.09082464258115\r
2019-05-23,83.94570850373073\r
2019-06-02,92.38856309440435\r
2019-06-27,91.55368451444407\r
2019-07-02,91.42144070032857\r
2019-07-05,91.10436502548403\r
2019-07-10,88.70106113399801\r
2019-07-15,81.41767244634916\r
2019-07-17,83.47335248095249\r
2019-07-25,77.39232751568508\r
2019-08-04,68.48681597927722\r
2019-08-14,55.94693002235624\r
2019-08-24,51.398986079382524\r
2019-08-26,51.72553454458119\r
2019-08-31,41.09015875479059\r
2019-09-03,42.71024946849582\r
2019-09-10,43.39670309952441\r
2019-09-13,35.37698193352165\r
2019-09-15,44.156808197713865\r
2019-09-18,40.25603212667188\r
2019-09-20,43.25906513734933\r
2019-10-13,34.39367289831549\r
2020-01-21,61.197974271868816\r
2020-02-07,65.03256871878122\r
2020-02-15,73.49686585388531\r
2020-02-22,76.15874345879146\r
2020-03-28,86.73724586974654\r
2020-03-31,85.48493905001042\r
2020-04-02,80.85026366290661\r
2020-04-05,81.11485853050488\r
2020-04-07,84.23986791513632\r
2020-04-10,93.21312216512855\r
2020-04-15,91.2364267804096\r
2020-04-22,96.52683368068912\r
2020-05-07,95.75805803728925\r
2020-05-10,87.72347615627098\r
2020-05-12,86.33623872505453\r
2020-05-17,96.00056581527397\r
2020-05-20,98.8341280045682\r
2020-05-27,100.0\r
2020-05-30,100.0\r
2020-06-24,99.91368789669977\r
2020-07-04,98.91595658657586\r
2020-07-09,95.98708677795724\r
2020-07-19,84.67545961460206\r
2020-07-24,84.29106773481895\r
2020-07-29,76.54031341111963\r
2020-07-31,70.62190887172845\r
2020-08-05,66.34287915896473\r
2020-08-08,59.71691316636516\r
2020-08-20,52.71009480964652\r
2020-08-25,47.05613818265771\r
2020-09-04,38.28941891708326\r
2020-09-09,32.66209646826274\r
2020-09-12,32.98792148655964\r
2020-09-14,32.750030745721006\r
2020-09-17,31.026450837025028\r
2020-11-06,19.031809907931386\r
2020-11-23,23.128174949058273\r
2020-11-28,20.24556883143464\r
2021-02-21,78.42216494946385\r
2021-02-24,85.75544409593088\r
2021-03-01,79.19496078135447\r
2021-03-06,83.57539390957321\r
2021-03-08,89.85356691594684\r
2021-03-23,89.0671272088628\r
2021-03-28,94.73682108288219\r
2021-03-31,91.07796178136165\r
2021-04-02,100.0\r
2021-04-27,100.0\r
2021-06-01,96.33778570202665\r
2021-06-14,98.69780674102482\r
2021-06-16,100.0\r
2021-07-19,93.03998997867325\r
2021-07-21,92.65423230374738\r
2021-09-02,71.84331055563449\r
2021-09-07,67.55797381071865\r
2021-09-22,60.88260760946628\r
2021-09-24,63.32070424150428\r
2021-10-14,64.44459005464344\r
2021-10-19,64.81327026274198\r
2021-10-22,64.80173637976179\r
2021-10-24,66.2381383373646\r
2021-11-11,62.49999806475562\r
2022-01-25,65.6574411594351\r
2022-02-09,63.480778917063944\r
2022-02-26,68.10996990988836\r
2022-03-06,70.52646426390639\r
2022-03-08,73.29086946836937\r
2022-03-23,74.64004025563867\r
2022-03-26,66.07533868998708\r
2022-03-28,75.11638842735388\r
2022-04-17,78.11140472132547\r
2022-04-27,79.02019577801349\r
2022-05-07,89.09329766727396\r
2022-05-15,91.39500103783494\r
2022-06-11,84.90642765244239\r
2022-06-16,93.13319913607442\r
2022-06-19,93.00005453162677\r
2022-06-21,84.79091243590847\r
2022-06-29,78.39728612059524\r
2022-07-06,89.34206910962679\r
2022-07-11,85.20191655940799\r
2022-07-14,86.87971587351885\r
2022-07-16,84.8422448300748\r
2022-07-19,85.93596909263616\r
2022-07-24,81.10225099909417\r
2022-08-03,69.70538174705293\r
2022-08-08,68.13349861966843\r
2022-08-10,66.38945170604204\r
2022-08-13,64.89403024181482\r
2022-09-19,53.15714585680338\r
2022-09-22,50.497378484748914\r
2022-10-09,54.81990888534756\r
2022-10-22,53.87339532683417\r
2022-11-13,51.630645644327856\r
2023-02-11,70.00243472568334\r
2023-02-14,63.67537078691817\r
2023-03-01,70.7174046775719\r
2023-04-05,100.0\r
2023-04-20,98.08528517570949\r
`;export{n as default};