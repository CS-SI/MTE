const r=`date,value\r
2017-02-25,78.26966850590247\r
2017-03-04,76.26280767665627\r
2017-03-07,76.26280767665627\r
2017-03-17,66.21260775610578\r
2017-04-06,84.99893029124395\r
2017-04-16,87.67195996948874\r
2017-04-23,86.06245975621083\r
2017-05-16,77.26250950435784\r
2017-05-23,77.26250950435784\r
2017-05-26,79.28429864642519\r
2017-06-02,78.26966850590247\r
2017-06-05,78.26966850590247\r
2017-07-05,84.47000166880112\r
2017-07-07,84.47000166880112\r
2017-07-12,84.47000166880112\r
2017-08-04,83.9429615157843\r
2017-08-11,83.9429615157843\r
2017-08-14,85.52974908681519\r
2017-08-16,81.85365141795863\r
2017-08-19,81.85365141795863\r
2017-08-21,81.85365141795863\r
2017-08-24,81.85365141795863\r
2017-09-08,75.27054900618391\r
2017-09-10,75.27054900618391\r
2017-09-13,83.41780812547151\r
2017-09-20,69.94554141074342\r
2017-09-23,74.28571942436903\r
2017-09-28,72.33829098971133\r
2017-10-03,72.33829098971133\r
2017-10-08,66.67282419490857\r
2017-10-10,66.67282419490857\r
2017-10-13,69.00131797216073\r
2017-10-15,69.00131797216073\r
2017-10-18,69.00131797216073\r
2017-10-20,62.15248306323182\r
2017-10-23,62.15248306323182\r
2018-03-02,81.85365141795863\r
2018-03-07,81.85365141795863\r
2018-03-09,81.85365141795863\r
2018-04-21,91.49399154045054\r
2018-04-26,91.49399154045054\r
2018-05-11,63.04203929138779\r
2018-05-13,63.04203929138779\r
2018-05-21,63.04203929138779\r
2018-06-25,90.39245567093678\r
2018-06-27,90.39245567093678\r
2018-07-02,92.60316895430233\r
2018-07-07,84.47000166880112\r
2018-07-10,84.47000166880112\r
2018-07-25,92.60316895430233\r
2018-07-27,92.60316895430233\r
2018-07-30,93.16062740265956\r
2018-08-01,93.16062740265956\r
2018-08-06,84.99893029124395\r
2018-08-19,90.94226924653636\r
2018-08-21,90.94226924653636\r
2018-08-24,90.94226924653636\r
2018-08-26,90.94226924653636\r
2018-08-29,90.94226924653636\r
2018-09-03,81.33602795037503\r
2018-09-05,81.33602795037503\r
2018-09-08,81.33602795037503\r
2018-09-10,81.33602795037503\r
2018-09-13,81.33602795037503\r
2018-09-23,76.26280767665627\r
2018-09-25,76.26280767665627\r
2018-09-28,84.99893029124395\r
2018-09-30,84.99893029124395\r
2018-10-03,78.26966850590247\r
2018-10-05,85.52974908681519\r
2018-10-10,74.77720646052288\r
2018-10-13,74.77720646052288\r
2019-03-02,69.47251174622244\r
2019-03-04,69.47251174622244\r
2019-03-07,69.47251174622244\r
2019-03-12,72.82237368869613\r
2019-03-14,73.79608613095276\r
2019-03-17,73.79608613095276\r
2019-03-22,75.27054900618391\r
2019-03-24,75.27054900618391\r
2019-03-27,72.33829098971133\r
2019-03-29,83.41780812547151\r
2019-04-01,83.41780812547151\r
2019-05-01,79.28429864642519\r
2019-05-06,79.28429864642519\r
2019-05-13,79.28429864642519\r
2019-05-16,71.37566373552382\r
2019-05-23,32.635829809260706\r
2019-05-28,32.635829809260706\r
2019-05-31,75.76574882482876\r
2019-06-02,73.3083048101959\r
2019-06-12,73.3083048101959\r
2019-06-15,73.3083048101959\r
2019-06-25,90.94226924653636\r
2019-06-27,90.94226924653636\r
2019-06-30,96.54565887368454\r
2019-07-05,85.52974908681519\r
2019-07-07,85.52974908681519\r
2019-07-10,92.60316895430233\r
2019-07-12,90.94226924653636\r
2019-07-15,94.84450162457303\r
2019-07-20,89.29854798641072\r
2019-07-22,96.54565887368454\r
2019-07-25,88.7544505261423\r
2019-08-01,80.82028266611557\r
2019-08-04,81.85365141795863\r
2019-08-06,81.85365141795863\r
2019-08-09,75.27054900618391\r
2019-08-14,74.28571942436903\r
2019-08-16,74.28571942436903\r
2019-08-21,84.99893029124395\r
2019-08-24,73.3083048101959\r
2019-08-26,77.26250950435784\r
2019-08-29,71.85605493314371\r
2019-08-31,80.82028266611557\r
2019-09-03,69.00131797216073\r
2019-09-05,69.00131797216073\r
2019-09-08,76.26280767665627\r
2019-09-13,75.76574882482876\r
2019-09-15,71.37566373552382\r
2019-09-18,78.26966850590247\r
2019-09-20,77.76515598437787\r
2019-09-28,75.76574882482876\r
2019-09-30,86.06245975621083\r
2019-10-03,78.26966850590247\r
2019-10-05,80.30641384005402\r
2019-10-08,76.26280767665627\r
2019-10-10,76.26280767665627\r
2019-10-13,77.26250950435784\r
2019-10-15,67.59873393486944\r
2019-10-25,66.21260775610578\r
2020-03-01,61.270153221883994\r
2020-03-08,52.03715781497866\r
2020-03-11,71.85605493314371\r
2020-03-18,69.47251174622244\r
2020-03-21,71.85605493314371\r
2020-03-26,71.85605493314371\r
2020-03-28,65.29764261474334\r
2020-04-05,65.29764261474334\r
2020-04-15,80.82028266611557\r
2020-04-25,80.82028266611557\r
2020-05-05,85.52974908681519\r
2020-05-07,85.52974908681519\r
2020-05-17,85.52974908681519\r
2020-05-20,98.26414359222647\r
2020-05-22,92.0476242211625\r
2020-05-25,98.84083002978531\r
2020-05-27,98.84083002978531\r
2020-05-30,91.49399154045054\r
2020-06-14,100.0\r
2020-06-19,97.68938734416788\r
2020-06-21,97.68938734416788\r
2020-06-24,100.0\r
2020-06-26,100.0\r
2020-07-01,100.0\r
2020-07-04,92.60316895430233\r
2020-07-06,93.16062740265956\r
2020-07-09,92.60316895430233\r
2020-07-11,97.68938734416788\r
2020-07-14,92.0476242211625\r
2020-07-16,92.0476242211625\r
2020-07-19,92.60316895430233\r
2020-07-21,87.13356350430776\r
2020-07-24,87.13356350430776\r
2020-07-26,92.0476242211625\r
2020-07-31,84.47000166880112\r
2020-08-03,92.0476242211625\r
2020-08-05,89.84454914230355\r
2020-08-08,95.9766833730073\r
2020-08-10,95.9766833730073\r
2020-08-13,95.9766833730073\r
2020-08-15,95.9766833730073\r
2020-08-20,81.33602795037503\r
2020-08-23,94.28129208205289\r
2020-08-25,86.59706399713397\r
2020-08-30,86.59706399713397\r
2020-09-02,86.59706399713397\r
2020-09-04,86.59706399713397\r
2020-09-07,86.59706399713397\r
2020-09-12,66.21260775610578\r
2020-09-14,66.21260775610578\r
2020-09-17,80.82028266611557\r
2020-09-19,80.82028266611557\r
2020-09-27,80.82028266611557\r
2020-09-29,72.82237368869613\r
2020-10-17,75.27054900618391\r
2020-10-19,75.27054900618391\r
2020-10-24,75.27054900618391\r
2020-10-27,75.27054900618391\r
2020-10-29,75.27054900618391\r
2020-11-01,78.7760488129686\r
2021-03-01,73.79608613095276\r
2021-03-31,73.3083048101959\r
2021-04-02,73.3083048101959\r
2021-04-05,80.30641384005402\r
2021-04-07,80.30641384005402\r
2021-04-12,77.76515598437787\r
2021-04-15,85.52974908681519\r
2021-04-20,84.99893029124395\r
2021-04-22,84.99893029124395\r
2021-05-20,89.29854798641072\r
2021-05-22,89.29854798641072\r
2021-05-25,89.29854798641072\r
2021-05-27,89.29854798641072\r
2021-05-30,89.29854798641072\r
2021-06-14,84.47000166880112\r
2021-06-16,84.47000166880112\r
2021-06-19,84.47000166880112\r
2021-06-21,84.47000166880112\r
2021-06-24,84.47000166880112\r
2021-07-09,85.52974908681519\r
2021-07-11,85.52974908681519\r
2021-07-14,85.52974908681519\r
2021-07-16,85.52974908681519\r
2021-07-19,87.67195996948874\r
2021-07-21,82.3731547908907\r
2021-07-24,82.3731547908907\r
2021-07-29,82.3731547908907\r
2021-08-13,74.28571942436903\r
2021-08-15,74.28571942436903\r
2021-08-18,74.28571942436903\r
2021-08-20,74.28571942436903\r
2021-08-23,74.28571942436903\r
2021-08-28,66.67282419490857\r
2021-08-30,66.67282419490857\r
2021-09-17,63.93883675693254\r
2021-09-19,63.93883675693254\r
2021-09-22,74.77720646052288\r
2021-09-27,74.77720646052288\r
2021-10-02,74.28571942436903\r
2021-10-07,59.52711299620299\r
2021-10-09,59.52711299620299\r
2021-10-12,64.84289025095642\r
2021-10-14,64.84289025095642\r
2021-10-17,61.71041577470848\r
2021-10-19,73.3083048101959\r
2021-10-22,64.38995557824899\r
2021-10-24,72.82237368869613\r
2021-10-27,65.75421450565385\r
2022-03-26,90.94226924653636\r
2022-03-28,90.94226924653636\r
2022-04-05,100.0\r
2022-04-10,89.29854798641072\r
2022-04-12,89.29854798641072\r
2022-04-15,89.29854798641072\r
2022-04-25,80.30641384005402\r
2022-04-27,80.30641384005402\r
2022-05-10,81.85365141795863\r
2022-05-12,81.85365141795863\r
2022-05-15,100.0\r
2022-05-17,100.0\r
2022-05-20,100.0\r
2022-05-22,100.0\r
2022-05-30,92.60316895430233\r
2022-06-01,92.60316895430233\r
2022-06-04,100.0\r
2022-06-06,100.0\r
2022-06-09,94.84450162457303\r
2022-06-11,99.41944828916856\r
2022-06-14,99.41944828916856\r
2022-06-16,90.94226924653636\r
2022-06-19,90.94226924653636\r
2022-06-26,78.7760488129686\r
2022-06-29,83.9429615157843\r
2022-07-01,84.47000166880112\r
2022-07-04,94.28129208205289\r
2022-07-09,94.28129208205289\r
2022-07-11,92.60316895430233\r
2022-07-14,93.72000122619494\r
2022-07-16,83.41780812547151\r
2022-07-19,84.47000166880112\r
2022-07-21,84.47000166880112\r
2022-07-24,84.47000166880112\r
2022-07-26,76.76172731860291\r
2022-08-03,79.79441974394803\r
2022-08-05,79.79441974394803\r
2022-08-08,86.06245975621083\r
2022-08-10,86.06245975621083\r
2022-08-13,81.33602795037503\r
2022-08-15,88.7544505261423\r
2022-08-20,83.9429615157843\r
2022-08-23,87.13356350430776\r
2022-08-25,76.26280767665627\r
2022-08-28,93.72000122619494\r
2022-08-30,93.72000122619494\r
2022-09-04,93.72000122619494\r
2022-09-22,73.3083048101959\r
2022-10-02,73.3083048101959\r
2022-10-07,83.9429615157843\r
2022-10-09,83.9429615157843\r
2022-10-12,83.9429615157843\r
2022-10-14,83.9429615157843\r
2023-03-06,87.13356350430776\r
2023-03-13,77.76515598437787\r
2023-03-16,86.59706399713397\r
2023-03-23,84.47000166880112\r
2023-06-24,86.06245975621083\r
2023-07-14,78.7760488129686\r
2023-07-16,78.7760488129686\r
2023-07-19,78.7760488129686\r
`;export{r as default};
