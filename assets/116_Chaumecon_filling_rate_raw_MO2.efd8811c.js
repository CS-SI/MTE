const n=`date,value\r
2017-02-25,87.61352437763387\r
2017-03-14,93.66129429933268\r
2017-03-17,94.08610156581906\r
2017-03-27,88.2991707449499\r
2017-04-03,88.80505621692485\r
2017-04-06,86.1715956052296\r
2017-04-23,92.45742085946664\r
2017-05-16,73.26486719593605\r
2017-05-23,73.26486719593605\r
2017-05-26,95.24489754764524\r
2017-06-02,92.35188143082458\r
2017-06-05,90.32958202649995\r
2017-06-12,88.999932719593\r
2017-07-05,85.9022915467735\r
2017-07-22,75.71129191142083\r
2017-08-21,58.20789910648807\r
2017-08-24,58.20789910648807\r
2017-08-26,58.20789910648807\r
2017-08-29,57.135561239704245\r
2017-08-31,59.58712993494998\r
2017-09-03,53.126863443308366\r
2017-10-05,42.78485657471973\r
2017-10-13,42.852918372738415\r
2017-10-15,44.78591658396564\r
2017-10-18,44.81561421002297\r
2017-10-25,45.28189582149576\r
2017-10-28,42.64886176466105\r
2017-11-14,27.148098785273135\r
2017-11-17,27.188686982377707\r
2017-11-22,28.640950225115574\r
2017-11-27,26.08529461345721\r
2017-11-29,26.03738597547804\r
2017-12-02,26.03738597547804\r
2018-02-25,89.312087484803\r
2018-02-27,85.97920144010362\r
2018-03-14,77.49929088613212\r
2018-03-24,83.34162153957223\r
2018-04-18,94.28549240924164\r
2018-04-21,96.08753480064806\r
2018-05-11,97.2425490296965\r
2018-05-18,95.63241246019716\r
2018-05-21,95.63241246019716\r
2018-06-22,87.57477762922902\r
2018-06-25,90.08130963221943\r
2018-06-27,95.80632860527867\r
2018-07-02,96.51666790770305\r
2018-07-07,95.09807245404129\r
2018-07-12,92.28594357271463\r
2018-07-15,92.2727582430744\r
2018-07-17,92.2727582430744\r
2018-07-27,88.33804430212169\r
2018-08-01,86.14593319393892\r
2018-08-04,90.43419885299086\r
2018-08-06,81.02455596882537\r
2018-08-11,85.23688350861197\r
2018-08-16,77.63467318065074\r
2018-08-19,68.51505422351369\r
2018-08-21,68.51505422351369\r
2018-08-26,63.68741678612757\r
2018-09-03,57.353763054036435\r
2018-09-05,57.353763054036435\r
2018-09-08,40.829794154755646\r
2018-09-10,40.829794154755646\r
2018-09-18,40.829794154755646\r
2018-09-25,34.26320125428253\r
2018-09-28,26.06932118563706\r
2018-09-30,26.598490893682474\r
2018-10-05,25.79836720895816\r
2018-10-08,24.538423878459124\r
2018-10-10,23.10537804218185\r
2018-10-13,21.21882618846\r
2018-10-15,21.21882618846\r
2018-10-18,20.80098266505008\r
2018-10-20,21.580655199242287\r
2018-10-23,21.93744908091232\r
2018-11-04,21.2630013294614\r
2018-11-09,21.2630013294614\r
2018-11-19,24.577417700768255\r
2019-02-15,66.09529646922853\r
2019-02-17,70.30509886164043\r
2019-02-20,71.18318470611882\r
2019-02-22,71.52847772829891\r
2019-02-25,68.6088101578691\r
2019-02-27,70.89792644763418\r
2019-03-04,70.12763583106721\r
2019-03-19,76.34621482343677\r
2019-03-22,80.79927978171317\r
2019-03-24,77.54850996581169\r
2019-03-27,78.14010529720609\r
2019-03-29,77.05687722958746\r
2019-04-01,77.05687722958746\r
2019-04-06,78.14010529720609\r
2019-04-11,79.44042935320422\r
2019-04-13,81.61394946155953\r
2019-04-21,79.98785560789595\r
2019-05-01,74.02443912574128\r
2019-05-13,88.27325881116482\r
2019-05-16,85.37747169408337\r
2019-05-23,85.1730101751445\r
2019-05-28,85.76136099975878\r
2019-05-31,85.31355657950763\r
2019-06-02,89.6507442178999\r
2019-06-05,89.6507442178999\r
2019-06-27,91.28599010395828\r
2019-06-30,91.28599010395828\r
2019-07-02,91.5750058192375\r
2019-07-05,91.16786088000045\r
2019-07-07,91.16786088000045\r
2019-07-10,90.70904651809029\r
2019-07-15,90.01601985129575\r
2019-07-17,87.09746032260419\r
2019-07-20,88.58440108697508\r
2019-07-22,84.79016919592908\r
2019-07-25,85.2496604545808\r
2019-08-01,83.68380347934777\r
2019-08-04,76.83604733165053\r
2019-08-09,76.83604733165053\r
2019-08-14,67.80183890741533\r
2019-08-21,55.35878043003285\r
2019-08-24,51.558011919210124\r
2019-08-26,52.46124761560436\r
2019-08-29,52.46124761560436\r
2019-08-31,48.19091584737022\r
2019-09-03,45.85994307708901\r
2019-09-10,45.82997277479374\r
2019-09-13,42.048665804910904\r
2019-09-15,41.01123964844763\r
2019-09-18,40.86796668071087\r
2019-09-20,41.48064955661913\r
2019-09-30,43.047617046880546\r
2019-10-03,45.87992759631692\r
2019-10-13,34.03210480716973\r
2020-01-21,60.87849225677593\r
2020-01-23,59.50955457949073\r
2020-01-26,59.50955457949073\r
2020-02-07,65.71456999039567\r
2020-02-10,64.34890513322952\r
2020-02-15,73.95196508329337\r
2020-02-22,71.58807798553791\r
2020-03-08,84.96874317647662\r
2020-03-28,89.67681579250947\r
2020-03-31,88.86999622201034\r
2020-04-02,85.69733200892624\r
2020-04-05,85.74855368396904\r
2020-04-07,84.29349934188008\r
2020-04-10,84.80291953743142\r
2020-04-12,85.83822082773868\r
2020-04-15,86.68548031752941\r
2020-04-20,88.10490478936755\r
2020-04-22,90.95800322939208\r
2020-04-25,93.5286984609633\r
2020-04-27,94.52498239899555\r
2020-05-07,98.0786264969298\r
2020-05-10,95.13810674976038\r
2020-05-12,92.74790078745863\r
2020-05-15,89.9246457095399\r
2020-05-17,94.6581365143798\r
2020-05-20,92.85361945482377\r
2020-05-25,94.2190101897994\r
2020-05-27,99.06667648467467\r
2020-05-30,100.0\r
2020-06-01,100.0\r
2020-06-24,98.86333187572617\r
2020-07-04,100.0\r
2020-07-06,98.93109499548743\r
2020-07-09,98.41655738189804\r
2020-07-11,95.32502183163477\r
2020-07-14,95.36509399591984\r
2020-07-19,92.15412391100368\r
2020-07-21,89.46832741221932\r
2020-07-24,85.73574712696747\r
2020-07-29,81.82755149177515\r
2020-07-31,82.23022647710411\r
2020-08-05,76.41961046380011\r
2020-08-08,70.66055846272988\r
2020-08-10,69.58452601548343\r
2020-08-15,65.82984950602894\r
2020-08-20,61.44971752035856\r
2020-08-25,51.558011919210124\r
2020-09-02,51.150458216027474\r
2020-09-04,45.99990723051458\r
2020-09-07,42.89183009530421\r
2020-09-09,38.16517164013625\r
2020-09-12,34.89742794761688\r
2020-09-14,34.70041372035354\r
2020-09-17,33.65126972956942\r
2020-09-19,33.863619209280614\r
2020-09-22,32.231814776966885\r
2020-11-06,18.831735458197443\r
2020-11-18,19.176919673441407\r
2020-11-21,19.176919673441407\r
2020-11-23,22.93055600252679\r
2020-11-28,22.771396233079816\r
2021-02-21,78.00437385954123\r
2021-02-24,81.576277979493\r
2021-03-01,80.51178908559936\r
2021-03-06,83.67112015722395\r
2021-03-08,84.05195146332774\r
2021-03-23,88.13079710931353\r
2021-03-28,94.91133413567715\r
2021-03-31,91.65389117534126\r
2021-04-02,96.71808510891383\r
2021-04-07,96.02055129122672\r
2021-04-27,100.0\r
2021-06-01,97.40414883459982\r
2021-06-11,95.40517284095816\r
2021-06-14,97.74115687163231\r
2021-06-16,100.0\r
2021-06-19,100.0\r
2021-06-21,100.0\r
2021-07-19,92.06189462734902\r
2021-07-21,95.79294599008314\r
2021-09-02,71.206976734947\r
2021-09-04,71.17128987450415\r
2021-09-07,71.67155142489081\r
2021-09-17,66.8477615660237\r
2021-09-22,60.24257104569444\r
2021-09-24,63.25549925779554\r
2021-09-27,62.02305704838814\r
2021-10-02,62.02305704838814\r
2021-10-04,62.55329730539402\r
2021-10-14,65.05900841733163\r
2021-10-17,63.76710767352011\r
2021-10-19,66.85936433427614\r
2021-10-22,64.1889873242554\r
2021-10-24,66.76656455756319\r
2021-11-11,61.842958467277974\r
2022-01-25,73.1806622391349\r
2022-02-09,62.8134287295644\r
2022-02-26,67.3939547322968\r
2022-03-06,70.89792644763418\r
2022-03-08,69.7850453658855\r
2022-03-23,79.13005644172675\r
2022-03-26,73.92781332765907\r
2022-03-28,73.78296852304767\r
2022-04-17,80.56175826413924\r
2022-04-22,80.48680910862255\r
2022-04-27,79.5025617626581\r
2022-05-07,88.2603039756397\r
2022-05-15,91.15473915658092\r
2022-05-17,91.15473915658092\r
2022-05-20,90.43419885299086\r
2022-05-25,90.43419885299086\r
2022-06-11,84.0138374640359\r
2022-06-16,92.19366196095879\r
2022-06-19,90.70904651809029\r
2022-06-21,91.78542663997018\r
2022-06-29,85.53094542925507\r
2022-07-04,81.87784297621803\r
2022-07-06,85.81259785033164\r
2022-07-11,86.60832035152356\r
2022-07-14,87.22636294231735\r
2022-07-16,86.9686333374088\r
2022-07-19,86.13310312537746\r
2022-07-24,85.62052226328744\r
2022-07-31,81.9029933149228\r
2022-08-03,76.59097573705311\r
2022-08-05,74.10902776456602\r
2022-08-08,69.91491512357901\r
2022-08-10,68.78473958617484\r
2022-08-13,67.68520095463363\r
2022-08-20,68.1522305591717\r
2022-09-19,53.43437601724492\r
2022-09-22,52.18752024619603\r
2022-09-24,51.33840048652293\r
2022-10-09,54.243607253618364\r
2022-10-12,54.243607253618364\r
2022-10-19,54.243607253618364\r
2022-10-22,53.30704404561296\r
2022-10-24,53.30704404561296\r
2022-11-01,53.30704404561296\r
2022-11-13,55.79008733960339\r
2023-02-11,72.62827155493146\r
2023-02-14,70.68428104944985\r
2023-02-16,70.68428104944985\r
2023-03-01,76.21172882315922\r
2023-04-05,87.39404938355287\r
2023-04-20,93.75415571950658\r
2023-05-25,97.12141903994366\r
2023-06-01,95.8732528048026\r
2023-06-04,95.36509399591984\r
2023-06-06,96.61064187288318\r
2023-06-09,95.41853394048252\r
2023-06-14,98.98531875196652\r
2023-06-16,99.69129961061498\r
2023-06-19,99.51461782440111\r
2023-06-24,100.0\r
`;export{n as default};
