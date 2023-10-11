const n=`date,value\r
2017-02-15,49.546472994008006\r
2017-03-27,95.84401048430924\r
2017-04-03,92.89417193215617\r
2017-05-16,99.57917628748261\r
2017-05-26,93.11758640523415\r
2017-08-14,80.04323670242685\r
2017-08-29,75.9167318155195\r
2017-10-15,40.68831957018042\r
2017-10-18,22.56845845474613\r
2017-11-22,9.481080657527482\r
2018-02-22,95.67007302340936\r
2018-03-24,100.0\r
2018-04-18,100.0\r
2018-05-06,94.308545306306\r
2018-05-08,100.0\r
2018-06-20,96.72119957662815\r
2018-06-27,96.47270491153239\r
2018-07-27,93.37764401012085\r
2018-08-06,90.53576053296742\r
2018-09-20,47.51366159131905\r
2018-09-25,45.271774527711464\r
2018-09-30,37.95014855858271\r
2018-10-05,38.762886430847026\r
2018-10-10,42.19322298175362\r
2018-10-13,21.227783451921677\r
2018-10-20,19.799093673303396\r
2018-11-14,18.692140362427846\r
2019-02-15,70.64743240134068\r
2019-02-17,75.02022099612326\r
2019-02-25,78.1152669791375\r
2019-02-27,81.75955547616634\r
2019-03-22,87.00241461028173\r
2019-03-24,92.98574184160383\r
2019-03-29,92.10404456586949\r
2019-04-01,85.7776579266647\r
2019-04-11,90.39392155541688\r
2019-05-01,92.11442038095748\r
2019-05-13,96.77657412897806\r
2019-06-02,91.54100881507983\r
2019-06-27,88.60704218457548\r
2019-07-02,91.01523833253697\r
2019-07-05,92.07691174271649\r
2019-07-25,86.76198374711879\r
2019-08-24,70.39719212467685\r
2019-08-26,69.42406753447715\r
2019-08-31,67.66348679743574\r
2019-09-03,62.44958904652243\r
2019-09-15,52.18526850617581\r
2019-09-20,45.1268680763985\r
2019-12-04,18.465538358333085\r
2019-12-29,33.25665071017585\r
2020-01-16,41.79342821206326\r
2020-01-21,47.182784293376756\r
2020-01-23,48.37861917182487\r
2020-01-26,51.78384460945124\r
2020-02-07,77.42872474717778\r
2020-02-15,76.39158582615799\r
2020-03-26,88.30148864989317\r
2020-03-28,92.21023633445256\r
2020-04-02,93.46793908358241\r
2020-04-05,87.13891974286176\r
2020-04-17,94.96269803916988\r
2020-04-20,92.40688027534978\r
2020-04-22,93.32929713976202\r
2020-04-27,92.9471782811328\r
2020-05-07,91.39249678360322\r
2020-05-15,90.12957779076358\r
2020-05-17,86.8584056164891\r
2020-05-27,90.1987575481769\r
2020-05-30,93.20689796369585\r
2020-06-01,92.19745678650986\r
2020-06-24,89.62680246666227\r
2020-07-29,84.84118502745127\r
2020-07-31,88.2085755127758\r
2020-08-05,88.10181125986006\r
2020-08-08,77.2595221938727\r
2020-08-20,79.28583512498099\r
2020-09-17,47.62248730288422\r
2020-09-22,42.15426717717199\r
2020-11-21,19.822141007246866\r
2020-11-28,18.299341785450235\r
2021-02-21,89.55636981047672\r
2021-02-24,88.74066617616498\r
2021-03-01,89.42500069833403\r
2021-03-06,90.73775922061444\r
2021-03-23,98.40730657308563\r
2021-03-28,97.3921632739603\r
2021-03-31,92.75372871977868\r
2021-04-02,95.6790925620831\r
2021-04-25,98.194157629279\r
2021-04-27,97.47522687216707\r
2021-06-01,100.0\r
2021-06-14,97.41873815420774\r
2021-06-16,100.0\r
2021-07-19,97.57580107683327\r
2021-08-25,85.01749024153351\r
2021-09-02,79.17897364822358\r
2021-09-24,51.22448944961119\r
2021-10-09,31.87409738846422\r
2021-10-14,33.862958057070855\r
2021-10-24,23.038739316149552\r
2021-10-29,15.671748415895163\r
2021-11-23,23.217624753457738\r
2021-12-18,18.628699111942485\r
2022-01-15,46.42430098168603\r
2022-02-09,66.25074766923555\r
2022-03-06,90.19954389840045\r
2022-03-08,91.83297170232663\r
2022-03-21,95.6454773505397\r
2022-03-23,96.52962870419023\r
2022-03-26,91.61572661061544\r
2022-03-28,96.15305551778779\r
2022-04-17,100.0\r
2022-04-22,100.0\r
2022-05-15,93.49536235217181\r
2022-06-04,89.96935146525513\r
2022-06-19,92.52693116629051\r
2022-06-21,96.17856682947775\r
2022-07-11,99.47966871019787\r
2022-07-16,99.94492413122788\r
2022-07-19,98.51191126422287\r
2022-07-24,94.60105252881006\r
2022-07-31,94.39460561942012\r
2022-08-03,91.595055655082\r
2022-08-10,91.58074693391389\r
2022-08-13,86.05188750219949\r
2022-09-22,48.28975732233265\r
2022-10-09,31.87560005796417\r
2023-02-14,68.01033385979447\r
2023-03-01,73.17385271530128\r
2023-03-11,73.37807254584345\r
2023-04-05,94.37998767448377\r
2023-05-15,93.94462459959644\r
2023-05-25,96.37706067257012\r
2023-05-27,100.0\r
2023-06-01,99.29433469532603\r
2023-06-04,96.45620971874284\r
2023-06-06,92.30132702797337\r
2023-06-09,90.57518828117253\r
2023-06-14,95.80707103724824\r
2023-06-16,88.20470563942139\r
2023-06-24,93.50584922941114\r
2023-07-11,97.92964161273204\r
2023-07-14,91.65946454774743\r
2023-09-02,72.84631945005393\r
2023-09-07,67.67695176628348\r
2023-09-09,66.93983590932741\r
2023-09-24,52.427180734667914\r
2023-10-07,34.101200115965305\r
`;export{n as default};
