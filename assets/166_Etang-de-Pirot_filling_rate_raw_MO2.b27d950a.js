const r=`date,value\r
2017-02-15,77.81722940771454\r
2017-02-25,80.02471532915591\r
2017-03-17,90.08214267855918\r
2017-03-27,90.29608786826269\r
2017-04-03,90.32284197823243\r
2017-04-06,90.16235385176006\r
2017-04-23,91.5561586789787\r
2017-05-16,100.0\r
2017-05-23,100.0\r
2017-05-26,100.0\r
2017-06-02,91.69052415300877\r
2017-06-05,91.69052415300877\r
2017-06-15,92.39019944612608\r
2017-06-22,95.2595582463837\r
2017-06-25,95.2595582463837\r
2017-07-02,95.42277926185653\r
2017-07-05,98.92518128037857\r
2017-07-07,98.92518128037857\r
2017-07-17,95.12360633123002\r
2017-07-18,95.12360633123002\r
2017-07-22,97.3333507857975\r
2017-08-14,96.10378994015495\r
2017-08-19,95.31395571250192\r
2017-08-21,96.34931773292298\r
2017-08-22,96.37661047735183\r
2017-08-24,96.37661047735183\r
2017-08-26,96.64966849078188\r
2017-08-27,96.64966849078188\r
2017-08-29,94.52612721969723\r
2017-09-03,94.85188154185056\r
2017-10-05,84.15554245629737\r
2017-10-06,84.15554245629737\r
2017-10-11,84.15554245629737\r
2017-10-13,84.4174700423107\r
2017-10-15,81.75758784553405\r
2017-10-16,82.61527298425239\r
2017-10-18,81.23911900007066\r
2017-10-25,82.27706879561217\r
2017-10-26,78.99561819795534\r
2017-10-28,78.99561819795534\r
2017-11-22,62.265800264344904\r
2017-11-27,62.265800264344904\r
2018-02-25,82.4591257805158\r
2018-02-27,78.99561819795534\r
2018-03-05,80.43749827932417\r
2018-03-14,88.11056351392949\r
2018-03-17,88.11056351392949\r
2018-03-19,88.64210006863006\r
2018-03-20,88.64210006863006\r
2018-03-24,88.64210006863006\r
2018-04-18,92.74064927855889\r
2018-04-19,92.74064927855889\r
2018-04-21,91.74428729041428\r
2018-04-26,91.74428729041428\r
2018-05-06,91.15342572541225\r
2018-05-08,93.71324974271865\r
2018-05-11,89.38789889017045\r
2018-05-18,88.66870266761453\r
2018-05-19,91.15342572541225\r
2018-05-21,90.93885798013301\r
2018-05-24,89.62802727895408\r
2018-05-26,89.62802727895408\r
2018-06-20,94.98771408541978\r
2018-06-22,97.0597002127405\r
2018-06-23,97.0597002127405\r
2018-06-25,96.4585029581715\r
2018-06-27,94.17361551259617\r
2018-06-28,94.17361551259617\r
2018-07-03,96.26745375080026\r
2018-07-07,91.74428729041428\r
2018-07-08,96.62235201039316\r
2018-07-12,91.66364621542866\r
2018-07-25,92.33632027870269\r
2018-07-27,97.38810929744058\r
2018-07-28,97.38810929744058\r
2018-07-30,97.38810929744058\r
2018-08-01,97.38810929744058\r
2018-08-02,97.38810929744058\r
2018-08-04,97.38810929744058\r
2018-08-06,95.34115802309432\r
2018-08-07,93.95688646048865\r
2018-08-11,94.49899657164195\r
2018-08-12,94.49899657164195\r
2018-08-14,94.49899657164195\r
2018-08-16,94.49899657164195\r
2018-08-19,95.31395571250192\r
2018-08-22,94.90620739290176\r
2018-08-26,96.26745375080026\r
2018-09-01,94.01105433989959\r
2018-09-03,94.09232414053236\r
2018-09-05,94.09232414053236\r
2018-09-08,91.36814875578902\r
2018-09-10,93.6861909955337\r
2018-09-11,93.6861909955337\r
2018-09-18,92.28245076847048\r
2018-09-20,91.74428729041428\r
2018-09-25,92.57885255114667\r
2018-09-26,92.57885255114667\r
2018-09-28,92.57885255114667\r
2018-09-30,93.36167337028972\r
2018-10-05,88.72191522226242\r
2018-10-06,95.31395571250192\r
2018-10-10,94.39049791050597\r
2018-10-11,89.147968521716\r
2018-10-13,93.92980611788559\r
2018-10-16,87.44752588346671\r
2018-10-18,92.79460080578716\r
2018-10-20,90.10887729925099\r
2018-10-21,89.81493057544043\r
2018-10-23,89.81493057544043\r
2018-10-25,91.7174045114285\r
2018-10-30,90.02868074969524\r
2018-11-04,86.81245939972533\r
2018-11-09,90.67086688328246\r
2018-11-14,90.67086688328246\r
2018-11-19,86.04698781872811\r
2018-11-22,71.90798723080145\r
2018-11-24,71.90798723080145\r
2018-11-27,70.14359430633725\r
2019-01-28,77.25557923979524\r
2019-02-03,64.9079642307794\r
2019-02-05,88.40278707905321\r
2019-02-13,80.02471532915591\r
2019-02-15,80.20522758208688\r
2019-02-17,78.63640234821179\r
2019-02-18,78.63640234821179\r
2019-02-20,81.00613888034387\r
2019-02-22,80.54079591486972\r
2019-02-23,80.54079591486972\r
2019-02-25,77.68947191357425\r
2019-02-27,80.25682545749345\r
2019-03-07,81.26501836655866\r
2019-03-22,84.75834949262003\r
2019-03-24,85.28360264910427\r
2019-03-27,84.88956929948623\r
2019-03-29,85.62555132596049\r
2019-03-30,85.62555132596049\r
2019-04-01,84.8633203492237\r
2019-04-08,85.7045222361964\r
2019-04-09,85.59923265994946\r
2019-04-11,86.68033299873292\r
2019-04-13,85.86253113509399\r
2019-04-14,87.02399019135667\r
2019-05-13,91.93253449620265\r
2019-05-14,91.93253449620265\r
2019-05-16,95.55886233401567\r
2019-05-23,93.41573561327178\r
2019-05-28,93.87565262821695\r
2019-05-29,93.95688646048865\r
2019-05-31,94.96054279947303\r
2019-06-02,93.36167337028972\r
2019-06-08,91.42185376017183\r
2019-06-27,93.79444038655843\r
2019-06-28,93.79444038655843\r
2019-06-30,97.82651781042887\r
2019-07-02,93.76737443849815\r
2019-07-03,93.76737443849815\r
2019-07-05,96.4585029581715\r
2019-07-07,95.99472827676534\r
2019-07-08,95.99472827676534\r
2019-07-10,96.51310981573734\r
2019-07-12,96.84095025987014\r
2019-07-13,96.75895813147955\r
2019-07-15,96.97765121105297\r
2019-07-17,96.18561115087337\r
2019-07-20,95.72224064275187\r
2019-07-22,95.28675578684424\r
2019-07-23,95.28675578684424\r
2019-07-25,94.96054279947303\r
2019-08-02,95.20517032210437\r
2019-08-04,97.68945016988138\r
2019-08-09,98.37537833654775\r
2019-08-12,98.29298912890741\r
2019-08-14,97.57983857922252\r
2019-08-24,93.57798001773055\r
2019-08-26,93.63208070390995\r
2019-08-29,93.63208070390995\r
2019-08-31,93.57798001773055\r
2019-09-03,93.11851230787686\r
2019-09-06,93.11851230787686\r
2019-09-10,92.71367713016086\r
2019-09-13,89.86835348335474\r
2019-09-15,89.94850614188373\r
2019-09-16,89.44124364869339\r
2019-09-18,89.33456391042685\r
2019-09-20,89.22792329628106\r
2019-09-21,89.22792329628106\r
2019-10-03,91.60989760388195\r
2019-10-13,83.16250221196364\r
2019-10-21,83.16250221196364\r
2019-11-07,79.99893806689194\r
2019-11-09,79.99893806689194\r
2019-11-20,79.99893806689194\r
2019-11-22,81.39455323516846\r
2019-11-24,74.61750949698603\r
2019-12-04,74.61750949698603\r
2019-12-05,74.61750949698603\r
2020-01-06,63.126791628330444\r
2020-01-13,63.126791628330444\r
2020-01-16,65.39196878211213\r
2020-01-18,65.29507952090384\r
2020-01-19,65.29507952090384\r
2020-01-21,62.64801457732682\r
2020-01-24,63.91921692968251\r
2020-02-07,75.35029107681915\r
2020-02-12,75.35029107681915\r
2020-02-15,82.58924214826477\r
2020-02-18,82.58924214826477\r
2020-02-20,82.58924214826477\r
2020-02-22,79.22680810302603\r
2020-03-18,90.96567045131785\r
2020-03-19,90.96567045131785\r
2020-03-21,90.96567045131785\r
2020-03-23,90.24258695415746\r
2020-03-24,90.24258695415746\r
2020-03-26,90.24258695415746\r
2020-03-28,90.56373850544077\r
2020-03-31,89.84164080943398\r
2020-04-02,90.93885798013301\r
2020-04-05,90.590516951982\r
2020-04-07,90.590516951982\r
2020-04-08,89.33456391042685\r
2020-04-10,90.69765505668465\r
2020-04-12,91.87873748426514\r
2020-04-13,90.67086688328246\r
2020-04-15,91.44870989787056\r
2020-04-17,91.98634118166272\r
2020-04-22,94.09232414053236\r
2020-04-23,94.09232414053236\r
2020-04-27,96.75895813147955\r
2020-05-07,97.66204372796844\r
2020-05-17,94.79756524842907\r
2020-05-18,94.79756524842907\r
2020-05-20,93.87565262821695\r
2020-05-25,97.7716836690349\r
2020-05-27,92.74064927855889\r
2020-05-28,92.74064927855889\r
2020-05-30,96.29473936938776\r
2020-06-01,95.74947869592557\r
2020-06-02,97.90878673035269\r
2020-06-24,100.0\r
2020-06-26,100.0\r
2020-06-29,100.0\r
2020-07-04,99.1453658813432\r
2020-07-06,99.36570081643053\r
2020-07-07,99.36570081643053\r
2020-07-09,98.21062113249391\r
2020-07-11,96.86828571040789\r
2020-07-12,98.3204498416563\r
2020-07-14,98.3204498416563\r
2020-07-17,98.43031625560626\r
2020-07-19,98.29298912890741\r
2020-07-21,99.42080802483072\r
2020-07-22,98.18316984848036\r
2020-07-24,100.0\r
2020-07-27,100.0\r
2020-07-29,99.97239599935246\r
2020-07-31,99.97239599935246\r
2020-08-05,100.0\r
2020-08-06,100.0\r
2020-08-08,100.0\r
2020-08-10,100.0\r
2020-08-15,99.03525478104534\r
2020-08-20,98.40284611818292\r
2020-08-25,97.99107689355557\r
2020-09-04,99.22797387163547\r
2020-09-07,98.65016213296246\r
2020-09-09,96.92296372154718\r
2020-09-10,96.92296372154718\r
2020-09-12,97.49765470133703\r
2020-09-14,96.40390559654234\r
2020-09-15,96.40390559654234\r
2020-09-17,96.24017050801224\r
2020-11-18,78.35451445015026\r
2020-11-19,78.35451445015026\r
2020-11-21,74.69321241098507\r
2020-11-23,74.69321241098507\r
2020-11-28,72.10763457295756\r
2020-11-29,72.10763457295756\r
2020-12-04,73.43458275990503\r
2020-12-11,71.03653315129235\r
2020-12-13,71.03653315129235\r
2020-12-18,73.4094772711693\r
2020-12-24,73.4094772711693\r
2021-01-10,52.31427369426792\r
2021-02-14,79.92162159073037\r
2021-02-17,79.92162159073037\r
2021-02-21,82.35507807933958\r
2021-02-24,82.19908222866587\r
2021-02-27,86.62749975331073\r
2021-03-01,83.97234200999068\r
2021-03-04,88.72191522226242\r
2021-03-06,86.36348203918132\r
2021-03-08,85.46767662366105\r
2021-03-09,85.46767662366105\r
2021-03-14,88.1371170067922\r
2021-03-23,88.26992133559047\r
2021-03-24,88.26992133559047\r
2021-03-28,92.47103629974434\r
2021-03-29,92.47103629974434\r
2021-03-31,90.590516951982\r
2021-04-02,92.9835070422676\r
2021-04-03,91.47556845887495\r
2021-04-05,91.47556845887495\r
2021-04-07,91.47556845887495\r
2021-04-08,92.68670739226728\r
2021-04-22,89.46791969429427\r
2021-04-23,89.46791969429427\r
2021-04-25,89.46791969429427\r
2021-04-27,95.42277926185653\r
2021-05-03,93.1995443469001\r
2021-05-05,93.1995443469001\r
2021-06-14,96.29473936938776\r
2021-06-16,98.56770227067541\r
2021-06-26,94.25492844891004\r
2021-07-19,94.25492844891004\r
2021-07-21,96.24017050801224\r
2021-07-22,96.24017050801224\r
2021-07-29,96.0492543527023\r
2021-08-10,90.96567045131785\r
2021-08-11,90.96567045131785\r
2021-08-15,91.12659626220719\r
2021-08-20,92.84856197179055\r
2021-08-25,89.62802727895408\r
2021-08-26,89.86835348335474\r
2021-09-02,94.71610873347065\r
2021-09-05,94.36337922931834\r
2021-09-07,95.2595582463837\r
2021-09-12,95.2595582463837\r
2021-09-17,91.26076783877186\r
2021-09-22,88.34963341418832\r
2021-09-24,90.99248535076148\r
2021-09-25,90.99248535076148\r
2021-09-27,90.99248535076148\r
2021-09-30,90.99248535076148\r
2021-10-02,90.18909578301992\r
2021-10-04,94.17361551259617\r
2021-10-09,93.22655983823653\r
2021-10-14,84.91582074359853\r
2021-10-15,84.91582074359853\r
2021-10-17,84.91582074359853\r
2021-10-19,87.3415827430719\r
2021-10-22,83.47570251983944\r
2021-10-24,86.33709388840212\r
2021-10-27,83.37126223053419\r
2021-11-01,87.28862597144499\r
2021-11-11,76.66973789483941\r
2021-12-18,60.38919609380466\r
2021-12-21,60.38919609380466\r
2021-12-23,62.50460000601784\r
2022-01-15,56.80542365803958\r
2022-01-25,56.80542365803958\r
2022-02-09,58.57717925414542\r
2022-02-26,53.996543452831624\r
2022-02-27,53.996543452831624\r
2022-03-06,55.02750785359174\r
2022-03-08,52.382155085687934\r
2022-03-09,53.517481656693924\r
2022-03-23,54.40821017788304\r
2022-03-24,54.40821017788304\r
2022-03-26,55.672011969555804\r
2022-04-17,61.83666922758443\r
2022-04-20,61.83666922758443\r
2022-04-22,62.21807402741491\r
2022-06-11,72.20752199455535\r
2022-06-14,72.20752199455535\r
2022-06-16,73.15856750595195\r
2022-06-21,72.30745188625795\r
2022-06-29,76.69518075588329\r
2022-07-02,71.43450706926035\r
2022-07-04,71.43450706926035\r
2022-07-06,75.12264071485457\r
2022-07-11,80.41168023511976\r
2022-07-12,80.41168023511976\r
2022-07-14,78.30329552938777\r
2022-07-16,79.14972173972265\r
2022-07-17,78.81594739974311\r
2022-07-19,79.87009003531949\r
2022-07-21,79.87009003531949\r
2022-07-24,79.63832445342887\r
2022-07-31,82.01720196217472\r
2022-08-03,77.919481825313\r
2022-08-06,81.73164034518469\r
2022-08-08,76.08526863060716\r
2022-08-10,77.61284838096823\r
2022-08-11,76.11065175190787\r
2022-08-13,76.4154519938106\r
2022-08-18,74.81943632916762\r
2022-09-02,66.43630995329526\r
2022-09-04,65.00467673947765\r
2022-09-12,63.05490370400813\r
2022-09-19,61.14721289247099\r
2022-09-20,61.14721289247099\r
2022-09-22,61.36092787204747\r
2022-10-09,61.408451189835525\r
2022-10-19,61.408451189835525\r
2022-10-22,59.44577176559304\r
2022-11-11,57.71252585572294\r
2022-11-13,57.71252585572294\r
2022-12-11,61.45598580943693\r
2022-12-16,61.45598580943693\r
2023-02-09,74.99625977222598\r
2023-02-11,76.51713520831984\r
2023-02-12,76.51713520831984\r
2023-02-14,70.71368279037755\r
2023-02-16,70.71368279037755\r
2023-03-01,75.98376216258991\r
2023-03-04,75.98376216258991\r
2023-04-05,87.15627722338381\r
2023-04-08,87.15627722338381\r
2023-04-13,87.15627722338381\r
2023-04-20,83.60630935535269\r
2023-06-01,88.05746390338498\r
2023-06-02,88.05746390338498\r
2023-06-04,88.05746390338498\r
2023-06-06,90.34959852310946\r
2023-06-11,90.34959852310946\r
2023-06-14,96.78628647014791\r
2023-06-16,95.50442195559063\r
2023-06-19,97.38810929744058\r
2023-06-24,97.99107689355557\r
2023-06-27,99.1453658813432\r
2023-07-09,98.07338829315775\r
2023-07-11,99.61375715453649\r
2023-07-14,94.82472220030418\r
2023-07-17,94.82472220030418\r
2023-07-19,93.87565262821695\r
2023-08-23,98.6226731583535\r
2023-08-26,98.6226731583535\r
2023-09-04,94.28203755183\r
2023-09-05,94.28203755183\r
2023-09-07,94.98771408541978\r
2023-09-09,93.74031089046252\r
2023-09-10,93.74031089046252\r
2023-09-14,93.74031089046252\r
2023-09-15,94.93337390187921\r
2023-09-19,94.0652318098076\r
2023-10-02,90.37635750261568\r
2023-10-05,90.37635750261568\r
2023-10-07,91.5561586789787\r
`;export{r as default};
