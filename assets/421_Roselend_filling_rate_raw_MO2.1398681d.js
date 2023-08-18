const n=`date,value\r
2017-03-21,15.299414096035338\r
2017-03-28,15.296666879729395\r
2017-03-31,15.296666879729395\r
2017-04-30,35.16671121585529\r
2017-05-07,17.23948871451407\r
2017-05-10,49.18547745669164\r
2017-05-17,48.272271976616835\r
2017-07-04,78.02830354306653\r
2017-07-06,78.02830354306653\r
2017-07-14,78.02830354306653\r
2017-08-23,91.22608145683365\r
2017-08-25,91.53413621803975\r
2017-08-30,91.01307438319625\r
2018-04-15,2.912885282168904\r
2018-04-17,2.912885282168904\r
2018-04-22,2.912885282168904\r
2018-04-25,13.205981954116478\r
2018-07-29,100.0\r
2018-07-31,100.0\r
2018-08-03,100.0\r
2018-08-05,100.0\r
2018-08-08,100.0\r
2018-08-10,100.0\r
2018-08-28,98.44837669203716\r
2018-08-30,96.82704785861384\r
2018-09-02,97.2343368269491\r
2018-09-04,97.35605805740263\r
2018-09-07,97.35605805740263\r
2018-09-12,97.4047648808158\r
2018-09-14,95.36207154978904\r
2018-09-17,96.54177645712552\r
2018-09-19,96.54177645712552\r
2018-09-22,96.54177645712552\r
2018-09-27,97.44130187190508\r
2018-09-29,96.61457730419949\r
2018-10-02,100.0\r
2018-10-04,100.0\r
2018-10-07,100.0\r
2018-10-12,99.89037411148031\r
2019-03-31,15.088499479085993\r
2019-04-05,16.21191454927507\r
2019-04-10,15.431529821018117\r
2019-04-15,10.550685074697776\r
2019-04-17,10.625731667580663\r
2019-04-20,10.471198781029726\r
2019-04-27,11.70273191341634\r
2019-04-30,11.683152358753288\r
2019-05-02,43.05128130422878\r
2019-05-05,43.05128130422878\r
2019-05-07,43.016996208138615\r
2019-05-10,50.31668800537838\r
2019-05-12,50.31668800537838\r
2019-05-15,47.455792158343485\r
2019-05-30,55.66768405594304\r
2019-06-04,60.18611564091163\r
2019-06-14,60.18611564091163\r
2019-06-29,77.90103941319093\r
2019-07-01,77.90103941319093\r
2019-07-04,77.84573504329148\r
2019-07-06,81.0306108299802\r
2019-07-09,81.0137343382066\r
2019-07-14,82.41962228933642\r
2019-07-16,82.84511914620933\r
2019-07-19,82.99284456602359\r
2019-07-21,83.04400665006492\r
2019-07-24,82.65778447447111\r
2019-07-26,82.385623241563\r
2019-07-29,82.91328604854033\r
2019-07-31,83.12930691308541\r
2019-08-03,83.60768398620138\r
2019-08-05,83.80735600341967\r
2019-08-08,84.35035479105842\r
2019-09-12,85.00394253783706\r
2019-09-14,85.00394253783706\r
2019-09-17,85.50994911435066\r
2019-09-19,85.50994911435066\r
2019-09-22,85.78649677520266\r
2019-09-27,85.59632901614536\r
2019-09-29,85.61936998933999\r
2019-10-02,85.61936998933999\r
2019-10-04,85.16480456380535\r
2019-10-07,85.16480456380535\r
2020-03-15,62.753768384329135\r
2020-03-17,62.753768384329135\r
2020-03-20,64.37554975085499\r
2020-03-22,64.37554975085499\r
2020-03-25,62.94542359591569\r
2020-03-30,62.94542359591569\r
2020-04-01,63.9430293253886\r
2020-04-04,61.56412126912246\r
2020-04-06,61.07008116779009\r
2020-04-09,56.26265371414525\r
2020-04-11,56.36368389513415\r
2020-04-14,55.50980370483437\r
2020-04-16,55.50980370483437\r
2020-04-24,56.25784469707994\r
2020-04-29,56.87966628760559\r
2020-05-04,71.91916738278627\r
2020-05-06,71.91916738278627\r
2020-05-09,72.52418580593289\r
2020-05-14,72.70128359287818\r
2020-05-19,72.17054751250278\r
2020-05-21,79.97034538529944\r
2020-05-24,80.46326697017659\r
2020-05-26,84.40187495287896\r
2020-05-29,83.73887395752025\r
2020-05-31,83.73887395752025\r
2020-06-03,83.73887395752025\r
2020-06-05,84.75715906930184\r
2020-07-08,90.1690781842417\r
2020-07-10,89.94536821950568\r
2020-07-13,90.13962901247294\r
2020-07-18,89.77480296441041\r
2020-07-20,89.77480296441041\r
2020-07-23,89.83948374411952\r
2020-07-25,89.37540285048912\r
2020-07-28,89.33433160499305\r
2020-07-30,89.38713898283336\r
2020-08-02,89.17598998166\r
2020-08-04,89.01776914696126\r
2020-08-07,89.66312879643048\r
2020-08-09,88.608129717775\r
2020-08-12,89.25221346502596\r
2020-08-14,89.25221346502596\r
2020-08-19,89.25221346502596\r
2020-08-22,89.25221346502596\r
2020-08-27,88.12929993487104\r
2020-09-01,87.16918380671244\r
2020-09-03,87.16918380671244\r
2020-09-06,87.16918380671244\r
2020-09-08,87.16918380671244\r
2020-09-11,87.16918380671244\r
2021-03-30,19.4790273432198\r
2021-04-01,17.170140174121574\r
2021-04-04,21.262191012719754\r
2021-04-06,21.262191012719754\r
2021-04-09,16.73372725761923\r
2021-04-14,14.17494627701743\r
2021-04-16,14.217511551932855\r
2021-04-19,12.000589532678047\r
2021-04-24,8.21233990358205\r
2021-05-09,63.63340526450083\r
2021-05-14,63.63340526450083\r
2021-05-19,63.63340526450083\r
2021-06-13,53.498462746241685\r
2021-06-15,53.498462746241685\r
2021-06-18,54.28685512377939\r
2021-07-18,79.14427961560018\r
2021-07-20,79.14427961560018\r
2021-07-23,79.1888375163218\r
2021-08-12,82.98147705501448\r
2021-08-14,81.81421151459733\r
2021-08-17,82.62941634078767\r
2021-08-19,82.62941634078767\r
2021-09-11,74.16806525411236\r
2021-09-13,74.05978477165371\r
2021-09-18,72.9054443796275\r
2021-09-21,73.37379170664624\r
2021-10-01,70.75281963835938\r
2021-10-06,68.25130546953511\r
2021-10-08,68.25130546953511\r
2021-10-11,69.46826102028814\r
2022-04-14,15.967666188683319\r
2022-04-16,15.96207003581161\r
2022-04-19,55.027792701544165\r
2022-04-29,58.591345508839886\r
2022-05-14,77.17238202189077\r
2022-05-19,77.17238202189077\r
2022-05-21,74.3794077953448\r
2022-06-18,99.89037411148031\r
2022-06-20,99.89037411148031\r
2022-06-23,99.89037411148031\r
2022-06-25,99.20813701481335\r
2022-07-03,96.46293549990986\r
2022-07-05,96.46293549990986\r
2022-07-08,96.5357107849164\r
2022-07-10,96.5357107849164\r
2022-07-13,91.49856865202452\r
2022-07-15,91.5578512304578\r
2022-07-18,90.3281751744689\r
2022-07-20,90.87118862018471\r
2022-07-25,89.77480296441041\r
2022-07-28,89.91595048637843\r
2022-08-02,84.82026035908001\r
2022-08-04,84.82026035908001\r
2022-08-07,84.69407797138014\r
2022-08-09,83.88157204640302\r
2022-08-12,84.0015191599939\r
2022-08-22,84.77436650955906\r
2022-09-01,82.96442704378437\r
2022-09-06,81.67303703610301\r
2022-09-08,82.02899745414898\r
2022-09-11,80.91812943495181\r
2022-09-13,81.66739223746262\r
2022-09-16,81.66739223746262\r
2022-09-18,80.55302896421072\r
2022-09-21,81.6335269683293\r
2022-09-23,80.88439811689163\r
2022-09-26,80.88439811689163\r
2022-10-01,80.88439811689163\r
2023-03-20,51.59786256297873\r
2023-03-22,51.59786256297873\r
2023-03-25,51.59786256297873\r
2023-03-27,51.579330247644364\r
2023-04-14,58.97849577594726\r
2023-04-16,59.415964931249334\r
2023-04-19,59.05703942400082\r
2023-04-24,59.578525732755\r
2023-06-28,100.0\r
2023-07-03,100.0\r
2023-07-08,100.0\r
`;export{n as default};
