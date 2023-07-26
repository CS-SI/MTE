const r=`date,value\r
2017-02-25,75.86297547539235\r
2017-03-17,76.90608179196268\r
2017-03-27,77.42960955669652\r
2017-04-03,69.46397463290792\r
2017-04-06,74.30822421342064\r
2017-05-16,75.34340159998362\r
2017-05-26,85.98312978321052\r
2017-06-02,85.98312978321052\r
2017-06-05,87.89813194990978\r
2017-06-25,84.08378371540465\r
2017-07-02,85.98312978321052\r
2017-07-05,88.44813848851827\r
2017-07-07,86.25574508766245\r
2017-08-14,81.39777179065503\r
2017-08-17,80.86444972984562\r
2017-08-19,81.13094857627222\r
2017-08-21,81.13094857627222\r
2017-08-22,81.13094857627222\r
2017-08-24,76.38386965449084\r
2017-08-26,77.69186607466257\r
2017-08-29,62.79032306788341\r
2017-09-03,77.42960955669652\r
2017-09-05,83.81373190289997\r
2017-09-08,83.81373190289997\r
2017-09-13,83.00550737050041\r
2017-10-08,72.76541987762315\r
2017-10-10,72.76541987762315\r
2017-10-11,72.76541987762315\r
2017-10-13,78.21736294016995\r
2017-10-15,78.21736294016995\r
2017-10-16,78.21736294016995\r
2017-10-18,78.21736294016995\r
2017-10-20,76.1232576738973\r
2017-10-23,76.1232576738973\r
2017-10-28,64.4965294856033\r
2017-10-30,64.4965294856033\r
2017-10-31,64.4965294856033\r
2017-11-02,66.71499676474049\r
2017-11-07,63.76322555962564\r
2017-11-14,63.27608229871853\r
2017-11-15,63.27608229871853\r
2017-11-17,67.70986998335626\r
2017-11-19,67.70986998335626\r
2017-11-22,69.21237253490808\r
2017-11-24,69.21237253490808\r
2017-11-25,69.21237253490808\r
2017-11-27,62.79032306788341\r
2017-11-30,63.51948109805041\r
2017-12-07,61.581998374255285\r
2018-02-10,66.96320396784975\r
2018-02-12,66.96320396784975\r
2018-02-15,66.96320396784975\r
2018-02-25,68.20934773182869\r
2018-02-27,68.20934773182869\r
2018-03-02,68.20934773182869\r
2018-03-07,80.06690217650218\r
2018-03-09,80.06690217650218\r
2018-03-14,80.06690217650218\r
2018-03-15,80.06690217650218\r
2018-03-17,80.06690217650218\r
2018-03-22,82.20018487954344\r
2018-04-01,82.20018487954344\r
2018-04-21,88.17297650508704\r
2018-04-23,88.17297650508704\r
2018-04-24,88.17297650508704\r
2018-04-26,92.6134866245431\r
2018-05-06,84.89586629594447\r
2018-05-11,87.62360508057732\r
2018-05-19,87.62360508057732\r
2018-05-21,88.17297650508704\r
2018-05-23,83.27459346057069\r
2018-06-20,92.05401432503137\r
2018-06-22,92.05401432503137\r
2018-06-23,92.05401432503137\r
2018-06-25,98.27683728631496\r
2018-06-28,98.27683728631496\r
2018-07-02,99.13703305708957\r
2018-07-03,99.13703305708957\r
2018-07-07,89.27552644311491\r
2018-07-08,89.27552644311491\r
2018-07-10,97.41941896955545\r
2018-07-12,97.13423116877912\r
2018-07-15,97.13423116877912\r
2018-07-18,97.13423116877912\r
2018-07-22,83.00550737050041\r
2018-07-23,83.00550737050041\r
2018-07-25,84.89586629594447\r
2018-07-27,83.81373190289997\r
2018-07-30,83.81373190289997\r
2018-08-01,83.81373190289997\r
2018-08-02,83.81373190289997\r
2018-08-04,83.81373190289997\r
2018-08-06,74.30822421342064\r
2018-08-11,74.30822421342064\r
2018-08-12,74.30822421342064\r
2018-08-19,90.38313887507883\r
2018-08-21,90.38313887507883\r
2018-08-22,90.38313887507883\r
2018-08-26,90.38313887507883\r
2018-08-27,90.38313887507883\r
2018-09-03,72.50945189605116\r
2018-09-05,72.50945189605116\r
2018-09-08,85.43885796549911\r
2018-09-10,85.43885796549911\r
2018-09-11,85.43885796549911\r
2018-09-16,85.43885796549911\r
2018-09-18,85.43885796549911\r
2018-09-20,79.53683075507178\r
2018-09-23,88.44813848851827\r
2018-09-25,88.44813848851827\r
2018-09-26,88.44813848851827\r
2018-09-28,79.00806351337657\r
2018-09-30,87.62360508057732\r
2018-10-03,81.93239021768593\r
2018-10-05,87.34939615539766\r
2018-10-06,87.34939615539766\r
2018-10-23,65.47908660025396\r
2018-10-25,65.47908660025396\r
2018-11-17,66.96320396784975\r
2018-11-22,79.80170358418658\r
2018-11-24,79.80170358418658\r
2018-11-27,67.46064090466416\r
2018-11-29,81.13094857627222\r
2018-12-05,67.95943903402069\r
2019-01-11,73.0217215295486\r
2019-01-16,75.60302335258554\r
2019-01-19,75.60302335258554\r
2019-01-23,75.60302335258554\r
2019-01-26,75.60302335258554\r
2019-01-28,74.82515038793491\r
2019-02-15,80.3324262513249\r
2019-02-17,80.3324262513249\r
2019-02-18,80.3324262513249\r
2019-02-20,80.3324262513249\r
2019-02-22,80.3324262513249\r
2019-02-23,80.3324262513249\r
2019-02-25,80.3324262513249\r
2019-02-27,80.3324262513249\r
2019-03-07,88.99941371334519\r
2019-03-12,88.99941371334519\r
2019-03-22,76.38386965449084\r
2019-03-24,76.38386965449084\r
2019-03-25,76.38386965449084\r
2019-03-27,87.34939615539766\r
2019-03-29,87.34939615539766\r
2019-03-30,87.34939615539766\r
2019-04-01,80.3324262513249\r
2019-04-08,87.62360508057732\r
2019-04-09,87.62360508057732\r
2019-04-13,80.59827552878767\r
2019-05-11,67.95943903402069\r
2019-05-13,67.95943903402069\r
2019-05-14,67.95943903402069\r
2019-05-16,97.13423116877912\r
2019-05-23,97.13423116877912\r
2019-05-31,97.70491607935926\r
2019-06-02,72.50945189605116\r
2019-06-08,72.50945189605116\r
2019-06-12,72.50945189605116\r
2019-06-13,72.50945189605116\r
2019-07-05,97.13423116877912\r
2019-07-08,97.13423116877912\r
2019-07-10,97.13423116877912\r
2019-07-12,97.13423116877912\r
2019-07-13,97.13423116877912\r
2019-07-15,96.84935291273004\r
2019-07-17,96.84935291273004\r
2019-07-22,100.0\r
2019-07-23,100.0\r
2019-07-25,93.73619008067935\r
2019-07-28,100.0\r
2019-08-02,89.55195557788007\r
2019-08-04,89.55195557788007\r
2019-08-09,83.81373190289997\r
2019-08-14,83.27459346057069\r
2019-08-16,83.27459346057069\r
2019-08-17,83.27459346057069\r
2019-08-21,85.98312978321052\r
2019-08-22,85.98312978321052\r
2019-08-24,82.46830280776805\r
2019-08-26,85.71083398801422\r
2019-08-29,83.5440017281254\r
2019-08-31,85.167201979836\r
2019-09-03,85.167201979836\r
2019-09-06,85.167201979836\r
2019-09-08,74.30822421342064\r
2019-09-11,64.98712080874876\r
2019-09-13,73.53532462664204\r
2019-09-15,77.42960955669652\r
2019-09-16,77.42960955669652\r
2019-09-20,77.42960955669652\r
2019-09-21,77.42960955669652\r
2019-10-08,61.581998374255285\r
2019-10-11,61.581998374255285\r
2019-10-13,70.47375705704351\r
2019-10-15,70.47375705704351\r
2019-10-25,70.22080597920993\r
2019-11-27,58.71764697773125\r
2019-12-05,58.71764697773125\r
2019-12-10,58.71764697773125\r
2020-01-06,87.07550543339948\r
2020-01-09,87.07550543339948\r
2020-01-11,87.07550543339948\r
2020-01-14,87.07550543339948\r
2020-01-16,87.07550543339948\r
2020-01-19,87.07550543339948\r
2020-01-28,75.86297547539235\r
2020-02-05,71.99851816751992\r
2020-02-07,71.99851816751992\r
2020-02-08,71.99851816751992\r
2020-02-15,72.50945189605116\r
2020-02-18,72.50945189605116\r
2020-02-20,72.50945189605116\r
2020-02-22,75.0841105129951\r
2020-03-21,79.53683075507178\r
2020-03-24,79.53683075507178\r
2020-03-26,79.53683075507178\r
2020-03-28,79.53683075507178\r
2020-03-29,79.53683075507178\r
2020-03-31,88.99941371334519\r
2020-04-03,88.99941371334519\r
2020-04-05,81.93239021768593\r
2020-04-08,88.99941371334519\r
2020-04-10,86.80193317433552\r
2020-04-12,86.80193317433552\r
2020-04-15,88.44813848851827\r
2020-04-25,85.167201979836\r
2020-04-28,87.07550543339948\r
2020-05-05,83.27459346057069\r
2020-05-07,83.27459346057069\r
2020-05-08,83.27459346057069\r
2020-05-17,81.39777179065503\r
2020-05-18,81.39777179065503\r
2020-05-20,100.0\r
2020-05-22,99.42438110552752\r
2020-05-25,100.0\r
2020-05-27,100.0\r
2020-05-28,100.0\r
2020-05-30,91.7747488948072\r
2020-06-12,91.49579760790945\r
2020-06-14,91.49579760790945\r
2020-07-19,88.99941371334519\r
2020-07-21,88.99941371334519\r
2020-07-22,88.99941371334519\r
2020-07-24,88.99941371334519\r
2020-07-27,88.99941371334519\r
2020-07-29,84.08378371540465\r
2020-07-31,84.08378371540465\r
2020-08-03,84.89586629594447\r
2020-08-05,79.00806351337657\r
2020-08-06,79.00806351337657\r
2020-08-08,83.27459346057069\r
2020-08-10,81.13094857627222\r
2020-08-15,87.34939615539766\r
2020-08-20,84.62485117949666\r
2020-08-21,84.62485117949666\r
2020-08-23,84.62485117949666\r
2020-09-02,67.70986998335626\r
2020-09-04,67.70986998335626\r
2020-09-05,67.70986998335626\r
2020-09-07,67.70986998335626\r
2020-09-10,67.70986998335626\r
2020-09-12,67.70986998335626\r
2020-09-14,67.70986998335626\r
2020-09-17,70.98066826787604\r
2020-09-19,70.22080597920993\r
2020-09-29,69.96819167207752\r
2020-09-30,69.96819167207752\r
2020-10-17,69.21237253490808\r
2020-10-24,69.21237253490808\r
2020-10-30,69.21237253490808\r
2020-11-01,69.21237253490808\r
2020-11-16,61.581998374255285\r
2020-11-18,61.581998374255285\r
2020-11-19,61.581998374255285\r
2020-11-21,67.46064090466416\r
2020-11-23,67.46064090466416\r
2020-11-26,58.71764697773125\r
2020-11-29,58.71764697773125\r
2020-12-26,69.71591445114062\r
2021-02-14,93.17421253128056\r
2021-02-17,93.17421253128056\r
2021-02-19,93.17421253128056\r
2021-02-24,83.5440017281254\r
2021-02-27,83.5440017281254\r
2021-03-01,77.69186607466257\r
2021-03-04,83.5440017281254\r
2021-03-09,74.30822421342064\r
2021-03-21,86.52867963868607\r
2021-03-23,86.52867963868607\r
2021-03-24,86.52867963868607\r
2021-03-26,86.52867963868607\r
2021-03-28,86.52867963868607\r
2021-03-29,86.52867963868607\r
2021-03-31,88.17297650508704\r
2021-04-02,85.71083398801422\r
2021-04-03,85.71083398801422\r
2021-04-05,98.27683728631496\r
2021-04-07,98.27683728631496\r
2021-04-15,100.0\r
2021-04-17,100.0\r
2021-04-20,100.0\r
2021-04-22,100.0\r
2021-04-23,100.0\r
2021-05-20,85.71083398801422\r
2021-05-27,85.71083398801422\r
2021-05-28,85.71083398801422\r
2021-05-30,86.80193317433552\r
2021-06-01,86.80193317433552\r
2021-06-09,86.80193317433552\r
2021-06-14,99.42438110552752\r
2021-06-16,99.42438110552752\r
2021-06-19,99.42438110552752\r
2021-06-21,99.42438110552752\r
2021-08-23,91.49579760790945\r
2021-08-25,91.49579760790945\r
2021-08-26,91.49579760790945\r
2021-08-28,91.49579760790945\r
2021-08-30,91.49579760790945\r
2021-08-31,91.49579760790945\r
2021-09-12,92.33359365068586\r
2021-09-17,92.6134866245431\r
2021-09-22,87.62360508057732\r
2021-09-24,84.35415689692074\r
2021-09-25,84.35415689692074\r
2021-09-27,89.82870086358542\r
2021-09-30,96.84935291273004\r
2021-10-07,95.99657777920257\r
2021-10-17,65.232932064546\r
2021-10-19,65.232932064546\r
2021-10-20,65.232932064546\r
2021-10-24,65.232932064546\r
2021-10-27,65.232932064546\r
2021-12-16,76.1232576738973\r
2021-12-18,76.1232576738973\r
2021-12-19,76.1232576738973\r
2021-12-21,76.1232576738973\r
2021-12-23,76.1232576738973\r
2022-01-15,84.62485117949666\r
2022-01-22,84.62485117949666\r
2022-01-23,84.62485117949666\r
2022-01-25,84.89586629594447\r
2022-01-27,76.64481112445576\r
2022-02-01,76.64481112445576\r
2022-02-09,81.39777179065503\r
2022-03-26,84.35415689692074\r
2022-04-05,96.56478443772404\r
2022-04-10,98.27683728631496\r
2022-04-15,98.27683728631496\r
2022-04-17,95.14659709287949\r
2022-04-30,94.29941731867797\r
2022-05-07,94.29941731867797\r
2022-05-08,94.29941731867797\r
2022-05-10,94.8638923016222\r
2022-05-15,92.33359365068586\r
2022-05-17,92.33359365068586\r
2022-05-30,95.99657777920257\r
2022-06-01,95.99657777920257\r
2022-06-06,95.99657777920257\r
2022-06-09,95.99657777920257\r
2022-07-14,76.1232576738973\r
2022-07-16,76.1232576738973\r
2022-07-17,76.1232576738973\r
2022-07-19,76.1232576738973\r
2022-07-21,76.1232576738973\r
2022-07-22,76.1232576738973\r
2022-07-24,76.1232576738973\r
2022-08-08,59.42899675453231\r
2022-08-10,59.42899675453231\r
2022-08-11,59.42899675453231\r
2022-08-13,60.382385131248824\r
2022-08-15,60.382385131248824\r
2022-08-18,60.382385131248824\r
2022-08-20,55.2087276568209\r
2022-08-23,55.2087276568209\r
2022-09-12,52.686712686965805\r
2022-09-15,52.686712686965805\r
2022-09-19,52.686712686965805\r
2022-09-20,52.686712686965805\r
2022-09-22,55.67195156042235\r
2022-10-02,54.746937708008815\r
2022-10-07,57.539124872304704\r
2022-10-09,57.539124872304704\r
2022-10-12,59.19152798127772\r
2022-10-15,59.19152798127772\r
2022-10-22,56.13660630914956\r
2022-11-11,50.88006814005508\r
2022-11-13,50.88006814005508\r
2022-11-16,61.581998374255285\r
2022-11-24,60.62160873223691\r
2022-12-11,56.36946928495477\r
2022-12-21,57.30448292773236\r
2022-12-28,49.98552078858296\r
2023-02-04,66.96320396784975\r
2023-02-06,66.96320396784975\r
2023-02-09,67.21175212383955\r
2023-02-11,67.21175212383955\r
2023-02-12,67.21175212383955\r
2023-02-14,66.21960653477437\r
2023-02-16,69.21237253490808\r
2023-02-17,69.21237253490808\r
2023-02-19,60.14351177144409\r
2023-02-21,69.21237253490808\r
2023-02-24,68.96110847569551\r
2023-02-26,77.16768136606544\r
2023-03-01,70.98066826787604\r
2023-03-03,77.42960955669652\r
2023-03-04,77.42960955669652\r
2023-03-09,71.48892280069974\r
2023-03-16,68.45959575301175\r
2023-04-05,69.71591445114062\r
2023-04-07,69.71591445114062\r
2023-04-08,69.71591445114062\r
2023-04-15,69.71591445114062\r
2023-06-24,88.7236176433265\r
`;export{r as default};