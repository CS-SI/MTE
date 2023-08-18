const r=`date,value\r
2017-02-19,57.68320029718763\r
2017-02-26,57.68320029718763\r
2017-03-01,65.17271849106935\r
2017-03-08,64.79020569285674\r
2017-03-11,74.19903216535688\r
2017-03-18,72.9970986153579\r
2017-03-21,72.9970986153579\r
2017-04-10,81.14674804933017\r
2017-04-17,81.14674804933017\r
2017-04-20,82.3967013573878\r
2017-06-19,70.22109538211416\r
2017-06-26,70.22109538211416\r
2017-06-29,70.22109538211416\r
2017-07-04,59.523624125122154\r
2017-07-06,59.523624125122154\r
2017-07-09,59.523624125122154\r
2017-07-11,57.31770049077136\r
2017-07-14,67.48532722863021\r
2017-07-19,65.17271849106935\r
2017-07-21,65.17271849106935\r
2017-07-24,65.17271849106935\r
2017-07-29,55.864364618029214\r
2017-07-31,55.864364618029214\r
2017-08-03,55.864364618029214\r
2017-08-05,55.864364618029214\r
2017-08-08,58.04956361382051\r
2017-08-10,53.35460234987802\r
2017-08-13,60.63816859874551\r
2017-08-15,60.63816859874551\r
2017-08-18,52.99957670558856\r
2017-08-20,60.63816859874551\r
2017-08-23,46.76151722751422\r
2017-08-25,62.13615722282271\r
2017-08-30,47.440230994575266\r
2017-09-02,48.80853931600428\r
2017-09-04,42.766256943671195\r
2017-09-07,42.766256943671195\r
2017-09-12,42.766256943671195\r
2017-09-17,39.85774942998444\r
2017-09-22,39.85774942998444\r
2017-09-24,39.85774942998444\r
2017-09-27,52.99957670558856\r
2017-09-29,52.99957670558856\r
2017-10-04,52.99957670558856\r
2017-10-07,52.99957670558856\r
2017-10-09,42.43933563074357\r
2017-10-12,49.498107527595295\r
2017-10-17,46.086448230945834\r
2017-10-19,54.42495888173309\r
2017-10-22,46.42352628725072\r
2017-10-24,54.42495888173309\r
2017-10-27,41.464183692049176\r
2017-10-29,44.083246714173754\r
2017-11-01,44.083246714173754\r
2017-11-03,35.486780944187316\r
2017-11-06,35.486780944187316\r
2017-11-16,32.48168726260722\r
2017-11-18,32.48168726260722\r
2017-11-21,40.818777686138944\r
2017-11-23,40.818777686138944\r
2017-11-26,37.96137550584791\r
2017-11-28,41.464183692049176\r
2017-12-01,41.464183692049176\r
2017-12-03,39.22180687908543\r
2017-12-06,39.22180687908543\r
2017-12-16,37.64866550904447\r
2017-12-21,43.752607211740475\r
2017-12-23,43.752607211740475\r
2017-12-26,43.752607211740475\r
2017-12-28,39.53930256268419\r
2018-01-05,35.18183482796892\r
2018-01-07,35.18183482796892\r
2018-01-12,35.18183482796892\r
2018-01-15,35.18183482796892\r
2018-02-04,44.747299110951246\r
2018-02-09,54.42495888173309\r
2018-02-11,54.42495888173309\r
2018-02-14,49.844239464246584\r
2018-02-16,52.64543349909226\r
2018-02-19,52.64543349909226\r
2018-02-21,49.844239464246584\r
2018-03-26,77.03182785440889\r
2018-03-31,77.03182785440889\r
2018-04-02,77.03182785440889\r
2018-04-05,79.90391605355248\r
2018-04-10,74.60129737901774\r
2018-04-15,74.60129737901774\r
2018-04-20,71.80248200688062\r
2018-04-22,71.80248200688062\r
2018-04-25,90.04443647014932\r
2018-04-30,80.3174003958008\r
2018-05-05,84.91786100728562\r
2018-05-07,78.66823356908849\r
2018-05-10,78.66823356908849\r
2018-05-20,76.62472839214988\r
2018-05-25,76.62472839214988\r
2018-05-30,76.62472839214988\r
2018-06-09,85.34079749782154\r
2018-06-11,85.34079749782154\r
2018-06-14,85.34079749782154\r
2018-06-16,85.34079749782154\r
2018-06-19,86.18901281833955\r
2018-06-21,84.49570662080664\r
2018-06-24,84.49570662080664\r
2018-06-26,84.49570662080664\r
2018-06-29,84.49570662080664\r
2018-07-04,80.73167807585058\r
2018-07-06,80.73167807585058\r
2018-07-09,84.91786100728562\r
2018-07-11,85.34079749782154\r
2018-07-14,79.90391605355248\r
2018-07-16,89.18225796174427\r
2018-07-19,74.60129737901774\r
2018-07-21,89.18225796174427\r
2018-07-24,78.25793311770002\r
2018-07-26,84.07433533703693\r
2018-07-29,76.21843188620156\r
2018-07-31,84.91786100728562\r
2018-08-03,84.91786100728562\r
2018-08-05,77.43972918430785\r
2018-08-08,77.84843129825555\r
2018-08-10,64.02769596372288\r
2018-08-15,64.02769596372288\r
2018-08-18,64.02769596372288\r
2018-08-23,75.0043710699837\r
2018-08-25,75.0043710699837\r
2018-08-28,75.0043710699837\r
2018-08-30,75.0043710699837\r
2018-09-02,75.0043710699837\r
2018-09-04,57.68320029718763\r
2018-09-07,71.01015118197924\r
2018-09-09,71.01015118197924\r
2018-09-12,71.01015118197924\r
2018-09-14,55.142914694377296\r
2018-09-17,55.142914694377296\r
2018-09-22,56.9530656011295\r
2018-09-24,56.9530656011295\r
2018-09-27,67.48532722863021\r
2018-09-29,67.48532722863021\r
2018-10-02,52.99957670558856\r
2018-10-04,60.26579944274766\r
2018-10-09,52.64543349909226\r
2018-10-12,52.64543349909226\r
2018-10-22,51.939800473052145\r
2018-10-24,51.939800473052145\r
2018-12-06,52.64543349909226\r
2018-12-08,52.64543349909226\r
2018-12-11,52.64543349909226\r
2019-01-05,59.894284167196\r
2019-01-07,59.894284167196\r
2019-01-10,64.408531094075\r
2019-01-12,64.408531094075\r
2019-01-15,55.50320362107467\r
2019-01-17,55.50320362107467\r
2019-01-22,59.894284167196\r
2019-01-25,48.80853931600428\r
2019-01-27,50.88800741631876\r
2019-01-30,50.53919099481232\r
2019-02-04,55.50320362107467\r
2019-02-06,55.50320362107467\r
2019-02-09,55.50320362107467\r
2019-02-11,69.0436729064365\r
2019-02-14,65.17271849106935\r
2019-02-16,72.19987264651758\r
2019-02-21,72.19987264651758\r
2019-02-26,72.19987264651758\r
2019-03-01,72.59807856512649\r
2019-03-03,55.50320362107467\r
2019-03-08,55.50320362107467\r
2019-03-11,61.385463176696945\r
2019-03-13,61.385463176696945\r
2019-03-16,59.15382067698932\r
2019-03-18,70.22109538211416\r
2019-03-21,62.89024017346668\r
2019-03-23,62.89024017346668\r
2019-03-26,62.89024017346668\r
2019-03-28,77.84843129825555\r
2019-03-31,57.68320029718763\r
2019-04-05,59.523624125122154\r
2019-04-07,73.79757654902414\r
2019-04-10,73.79757654902414\r
2019-04-15,73.79757654902414\r
2019-04-17,72.9970986153579\r
2019-04-20,72.9970986153579\r
2019-04-30,84.07433533703693\r
2019-05-02,84.07433533703693\r
2019-05-05,92.2133492160265\r
2019-05-07,92.2133492160265\r
2019-05-10,85.34079749782154\r
2019-05-12,85.34079749782154\r
2019-05-15,85.34079749782154\r
2019-05-20,88.7523267614395\r
2019-05-25,85.34079749782154\r
2019-05-30,88.7523267614395\r
2019-06-01,88.7523267614395\r
2019-06-04,99.28195960445638\r
2019-06-06,99.28195960445638\r
2019-06-11,99.28195960445638\r
2019-06-14,99.28195960445638\r
2019-06-19,96.16555917501225\r
2019-06-21,96.16555917501225\r
2019-06-24,96.16555917501225\r
2019-06-26,96.16555917501225\r
2019-06-29,96.60849356509037\r
2019-07-01,96.60849356509037\r
2019-07-04,96.60849356509037\r
2019-07-06,88.32316887071359\r
2019-07-09,88.32316887071359\r
2019-07-11,88.32316887071359\r
2019-07-14,88.32316887071359\r
2019-07-19,100.0\r
2019-07-21,100.0\r
2019-07-24,100.0\r
2019-07-26,100.0\r
2019-07-29,84.49570662080664\r
2019-07-31,84.49570662080664\r
2019-08-03,84.49570662080664\r
2019-08-05,69.8277985453165\r
2019-08-08,69.8277985453165\r
2019-08-10,79.49122609824605\r
2019-08-15,58.41678904197867\r
2019-08-18,84.91786100728562\r
2019-08-23,86.18901281833955\r
2019-08-25,86.18901281833955\r
2019-08-28,86.18901281833955\r
2019-08-30,86.18901281833955\r
2019-09-02,65.55606822631297\r
2019-09-04,65.94025364272844\r
2019-09-07,62.89024017346668\r
2019-09-09,65.17271849106935\r
2019-09-12,53.35460234987802\r
2019-09-14,53.35460234987802\r
2019-09-17,59.15382067698932\r
2019-09-19,52.99957670558856\r
2019-09-24,63.268549217653934\r
2019-09-27,39.22180687908543\r
2019-09-29,63.268549217653934\r
2019-10-02,43.09411052356838\r
2019-10-04,43.422894549246045\r
2019-10-07,37.3369187044015\r
2019-10-09,37.3369187044015\r
2019-10-14,52.29217424652431\r
2019-10-17,52.29217424652431\r
2019-10-19,45.750284763560536\r
2019-10-27,47.78095046559728\r
2019-10-29,47.78095046559728\r
2019-11-03,47.78095046559728\r
2019-11-06,54.78349929332664\r
2019-11-16,54.78349929332664\r
2019-11-26,43.422894549246045\r
2019-11-28,43.422894549246045\r
2019-12-21,47.78095046559728\r
2019-12-23,47.78095046559728\r
2019-12-26,49.498107527595295\r
2019-12-28,49.498107527595295\r
2020-01-05,67.87367243793386\r
2020-01-10,67.87367243793386\r
2020-01-12,67.87367243793386\r
2020-01-15,67.87367243793386\r
2020-01-17,67.87367243793386\r
2020-02-04,45.750284763560536\r
2020-02-09,45.750284763560536\r
2020-02-14,49.498107527595295\r
2020-02-19,49.498107527595295\r
2020-02-21,69.8277985453165\r
2020-02-24,60.63816859874551\r
2020-02-26,60.63816859874551\r
2020-03-07,67.09781151731448\r
2020-03-15,77.84843129825555\r
2020-03-20,77.84843129825555\r
2020-03-22,77.84843129825555\r
2020-03-30,77.84843129825555\r
2020-04-04,58.04956361382051\r
2020-04-06,58.04956361382051\r
2020-04-09,85.34079749782154\r
2020-04-11,85.34079749782154\r
2020-04-14,70.22109538211416\r
2020-04-24,86.6142896728037\r
2020-04-26,97.9418333693943\r
2020-04-29,82.3967013573878\r
2020-05-04,97.9418333693943\r
2020-05-06,97.9418333693943\r
2020-05-09,97.9418333693943\r
2020-05-14,79.07933158382795\r
2020-05-19,100.0\r
2020-05-21,79.07933158382795\r
2020-05-24,100.0\r
2020-05-26,100.0\r
2020-05-29,100.0\r
2020-05-31,100.0\r
2020-06-03,100.0\r
2020-06-05,100.0\r
2020-06-08,100.0\r
2020-06-23,93.08628124355714\r
2020-06-25,93.08628124355714\r
2020-06-28,99.28195960445638\r
2020-06-30,99.28195960445638\r
2020-07-03,88.7523267614395\r
2020-07-05,88.7523267614395\r
2020-07-08,93.08628124355714\r
2020-07-10,83.23394609435162\r
2020-07-13,83.23394609435162\r
2020-07-15,90.47668187792574\r
2020-07-18,90.47668187792574\r
2020-07-20,77.03182785440889\r
2020-07-23,77.03182785440889\r
2020-08-02,90.04443647014932\r
2020-08-04,90.04443647014932\r
2020-08-07,90.04443647014932\r
2020-08-09,90.04443647014932\r
2020-08-14,90.04443647014932\r
2020-08-17,90.04443647014932\r
2020-08-19,43.09411052356838\r
2020-08-22,78.66823356908849\r
2020-08-24,78.25793311770002\r
2020-08-27,81.97926072271402\r
2020-09-01,46.42352628725072\r
2020-09-03,46.42352628725072\r
2020-09-06,56.22639623818982\r
2020-09-08,47.10041935769962\r
2020-09-13,59.894284167196\r
2020-09-16,40.818777686138944\r
2020-09-18,57.31770049077136\r
2020-09-21,57.31770049077136\r
2020-09-23,30.437507762382054\r
2020-09-26,46.086448230945834\r
2020-09-28,46.086448230945834\r
2020-10-03,46.086448230945834\r
2020-10-06,46.086448230945834\r
2020-10-08,46.086448230945834\r
2020-10-11,68.26284592742161\r
2020-10-13,67.48532722863021\r
2020-10-16,67.48532722863021\r
2020-10-18,67.48532722863021\r
2020-11-05,33.07477671066661\r
2020-11-07,33.07477671066661\r
2020-11-10,33.07477671066661\r
2020-11-17,33.07477671066661\r
2020-11-20,48.80853931600428\r
2020-11-22,48.80853931600428\r
2020-11-25,54.42495888173309\r
2020-11-27,54.42495888173309\r
2020-11-30,54.42495888173309\r
2020-12-02,54.42495888173309\r
2020-12-07,51.939800473052145\r
2020-12-25,51.939800473052145\r
2020-12-30,51.939800473052145\r
2021-01-14,49.498107527595295\r
2021-01-19,56.5892970427624\r
2021-01-21,56.5892970427624\r
2021-01-24,50.88800741631876\r
2021-01-26,57.68320029718763\r
2021-01-29,57.68320029718763\r
2021-01-31,51.58831371296787\r
2021-02-03,51.58831371296787\r
2021-02-23,62.512775740890426\r
2021-02-25,62.512775740890426\r
2021-02-28,67.09781151731448\r
2021-03-05,67.09781151731448\r
2021-03-07,56.9530656011295\r
2021-03-10,73.39693165541826\r
2021-03-15,79.90391605355248\r
2021-03-17,79.90391605355248\r
2021-03-20,79.90391605355248\r
2021-03-22,68.65284648544072\r
2021-03-25,68.65284648544072\r
2021-03-30,79.49122609824605\r
2021-04-01,79.49122609824605\r
2021-04-04,79.49122609824605\r
2021-04-09,79.49122609824605\r
2021-04-11,63.268549217653934\r
2021-04-14,63.268549217653934\r
2021-05-04,87.4671768635417\r
2021-05-06,87.4671768635417\r
2021-05-09,87.4671768635417\r
2021-05-11,87.4671768635417\r
2021-05-14,87.4671768635417\r
2021-05-19,79.07933158382795\r
2021-05-21,79.07933158382795\r
2021-05-26,79.07933158382795\r
2021-05-29,79.07933158382795\r
2021-06-03,86.18901281833955\r
2021-06-05,86.18901281833955\r
2021-06-08,87.89478524991972\r
2021-06-10,87.89478524991972\r
2021-06-13,87.4671768635417\r
2021-06-15,97.49663154775993\r
2021-06-18,97.49663154775993\r
2021-06-28,87.04034468022418\r
2021-06-30,97.9418333693943\r
2021-07-03,99.73017236254287\r
2021-07-05,99.73017236254287\r
2021-07-08,99.73017236254287\r
2021-07-10,93.52389360775928\r
2021-07-13,93.52389360775928\r
2021-07-15,79.49122609824605\r
2021-07-18,86.6142896728037\r
2021-07-20,86.6142896728037\r
2021-07-23,84.07433533703693\r
2021-07-25,92.6494328060938\r
2021-07-28,83.65374815904552\r
2021-07-30,89.18225796174427\r
2021-08-02,83.65374815904552\r
2021-08-07,84.49570662080664\r
2021-08-09,78.25793311770002\r
2021-08-12,78.25793311770002\r
2021-08-17,65.55606822631297\r
2021-08-19,65.55606822631297\r
2021-08-22,71.40590779916748\r
2021-08-24,71.40590779916748\r
2021-08-27,65.55606822631297\r
2021-08-29,69.8277985453165\r
2021-09-01,69.8277985453165\r
2021-09-06,62.13615722282271\r
2021-09-11,52.99957670558856\r
2021-09-13,52.99957670558856\r
2021-09-18,51.58831371296787\r
2021-09-21,51.58831371296787\r
2021-10-06,43.09411052356838\r
2021-10-08,43.09411052356838\r
2021-10-11,44.083246714173754\r
2021-10-13,44.083246714173754\r
2021-10-16,39.53930256268419\r
2021-10-18,41.464183692049176\r
2021-10-23,37.64866550904447\r
2021-10-26,42.766256943671195\r
2021-10-28,39.85774942998444\r
2021-11-02,39.85774942998444\r
2021-11-05,39.85774942998444\r
2021-11-20,35.79270494814732\r
2021-11-22,35.79270494814732\r
2021-11-30,50.19126781700499\r
2021-12-02,38.90526434477098\r
2021-12-05,45.415037601101126\r
2021-12-07,45.415037601101126\r
2021-12-10,40.17714552932849\r
2021-12-12,51.58831371296787\r
2021-12-15,51.58831371296787\r
2021-12-20,44.083246714173754\r
2021-12-22,41.141009908419186\r
2022-01-09,47.78095046559728\r
2022-01-11,47.78095046559728\r
2022-01-14,48.122576108793936\r
2022-01-16,48.122576108793936\r
2022-01-21,42.43933563074357\r
2022-01-24,52.29217424652431\r
2022-01-26,51.939800473052145\r
2022-01-29,51.939800473052145\r
2022-02-03,51.939800473052145\r
2022-02-08,47.440230994575266\r
2022-02-10,47.440230994575266\r
2022-02-13,47.440230994575266\r
2022-02-15,47.440230994575266\r
2022-02-18,61.385463176696945\r
2022-02-20,46.086448230945834\r
2022-02-23,51.58831371296787\r
2022-02-28,48.80853931600428\r
2022-03-02,57.31770049077136\r
2022-03-07,54.42495888173309\r
2022-03-25,62.89024017346668\r
2022-03-27,62.89024017346668\r
2022-04-01,62.89024017346668\r
2022-04-04,64.408531094075\r
2022-04-09,71.40590779916748\r
2022-04-11,71.40590779916748\r
2022-04-14,63.64770157745742\r
2022-04-16,76.21843188620156\r
2022-05-04,86.6142896728037\r
2022-05-09,86.6142896728037\r
2022-05-11,86.6142896728037\r
2022-05-14,83.23394609435162\r
2022-05-16,84.49570662080664\r
2022-05-21,78.66823356908849\r
2022-05-24,78.66823356908849\r
2022-05-29,80.3174003958008\r
2022-05-31,80.3174003958008\r
2022-06-18,48.122576108793936\r
2022-06-20,48.122576108793936\r
2022-06-25,48.122576108793936\r
2022-06-28,48.122576108793936\r
2022-07-03,69.0436729064365\r
2022-07-05,69.0436729064365\r
2022-07-08,74.19903216535688\r
2022-07-10,74.19903216535688\r
2022-07-13,69.0436729064365\r
2022-07-15,79.07933158382795\r
2022-07-18,70.61521331961384\r
2022-07-20,79.49122609824605\r
2022-07-23,72.59807856512649\r
2022-07-25,76.21843188620156\r
2022-07-28,76.21843188620156\r
2022-07-30,73.79757654902414\r
2022-08-02,74.19903216535688\r
2022-08-04,63.268549217653934\r
2022-08-07,69.8277985453165\r
2022-08-09,69.8277985453165\r
2022-08-12,69.8277985453165\r
2022-08-14,65.17271849106935\r
2022-08-22,62.13615722282271\r
2022-08-24,62.13615722282271\r
2022-08-27,62.13615722282271\r
2022-08-29,62.13615722282271\r
2022-09-01,62.512775740890426\r
2022-09-03,43.09411052356838\r
2022-09-06,43.09411052356838\r
2022-09-08,43.09411052356838\r
2022-09-11,55.50320362107467\r
2022-09-16,61.760385929127104\r
2022-09-18,61.760385929127104\r
2022-09-21,61.760385929127104\r
2022-09-23,59.523624125122154\r
2022-09-26,59.894284167196\r
2022-09-28,54.78349929332664\r
2022-10-01,54.78349929332664\r
2022-10-06,58.04956361382051\r
2022-10-11,56.22639623818982\r
2022-10-16,56.22639623818982\r
2022-11-05,51.58831371296787\r
2022-11-10,51.58831371296787\r
2022-11-20,50.88800741631876\r
2022-11-22,50.88800741631876\r
2022-11-25,55.142914694377296\r
2022-11-30,51.237715509782035\r
2022-12-02,54.78349929332664\r
2022-12-05,49.498107527595295\r
2022-12-07,53.71050892476661\r
2022-12-10,53.71050892476661\r
2023-01-09,39.22180687908543\r
2023-01-19,42.766256943671195\r
2023-01-21,41.141009908419186\r
2023-01-24,57.31770049077136\r
2023-01-26,57.31770049077136\r
2023-01-29,38.90526434477098\r
2023-01-31,54.42495888173309\r
2023-02-03,32.186641821598386\r
2023-02-05,35.18183482796892\r
2023-02-08,33.07477671066661\r
2023-02-10,36.407478047834324\r
2023-02-13,36.407478047834324\r
2023-02-15,35.486780944187316\r
2023-02-18,39.22180687908543\r
2023-03-05,44.083246714173754\r
2023-03-07,44.083246714173754\r
2023-03-10,46.42352628725072\r
2023-03-12,46.42352628725072\r
2023-03-17,38.58967693941972\r
2023-03-20,38.58967693941972\r
2023-03-25,67.87367243793386\r
2023-03-27,67.87367243793386\r
2023-03-30,75.0043710699837\r
2023-04-06,70.22109538211416\r
2023-04-09,70.22109538211416\r
2023-04-14,83.23394609435162\r
2023-04-16,83.23394609435162\r
2023-04-19,91.77803139785489\r
2023-04-24,84.49570662080664\r
2023-04-26,91.3434802799485\r
2023-04-29,88.7523267614395\r
2023-05-01,89.18225796174427\r
2023-05-04,89.18225796174427\r
2023-05-06,83.23394609435162\r
2023-05-24,82.3967013573878\r
2023-05-26,82.3967013573878\r
2023-05-29,82.3967013573878\r
2023-06-03,84.49570662080664\r
2023-06-08,92.2133492160265\r
2023-06-10,92.2133492160265\r
2023-06-13,92.2133492160265\r
2023-06-15,92.2133492160265\r
2023-06-18,92.6494328060938\r
2023-06-20,87.89478524991972\r
2023-06-23,94.40140645279956\r
2023-06-25,94.40140645279956\r
2023-06-28,94.40140645279956\r
2023-06-30,60.26579944274766\r
2023-07-03,97.9418333693943\r
2023-07-05,97.05218465176276\r
2023-07-08,97.05218465176276\r
2023-07-10,63.268549217653934\r
2023-07-13,60.26579944274766\r
2023-07-15,61.760385929127104\r
2023-07-18,56.5892970427624\r
2023-07-20,62.13615722282271\r
2023-07-23,59.15382067698932\r
`;export{r as default};
