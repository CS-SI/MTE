const r=`date,value\r
2017-03-17,60.7765849721199\r
2017-03-27,63.6030320775705\r
2017-04-03,56.060732235288434\r
2017-04-06,56.060732235288434\r
2017-05-16,28.248225946161043\r
2017-05-23,28.248225946161043\r
2017-05-26,54.59551679339468\r
2017-06-02,40.36403978550721\r
2017-06-05,40.36403978550721\r
2017-06-25,30.19873813014532\r
2017-07-02,35.000654608568404\r
2017-07-05,37.3056862144785\r
2017-07-07,37.69521119615323\r
2017-07-12,37.69521119615323\r
2017-08-04,79.99326357450887\r
2017-08-06,79.99326357450887\r
2017-08-14,70.7544351615984\r
2017-08-19,60.426682495574354\r
2017-08-21,51.489498994319646\r
2017-08-24,51.929022174992944\r
2017-08-26,55.15733468710052\r
2017-08-29,55.15733468710052\r
2017-09-03,54.259464768556896\r
2018-03-22,100.0\r
2018-03-29,100.0\r
2018-04-01,100.0\r
2018-04-06,82.99167240312372\r
2018-04-16,100.0\r
2018-04-18,100.0\r
2018-04-21,100.0\r
2018-04-23,100.0\r
2018-04-26,79.86384026637762\r
2018-05-06,64.67535884282938\r
2018-05-08,59.034682661000005\r
2018-05-11,72.99282683484279\r
2018-05-13,72.99282683484279\r
2018-05-18,53.701113083366714\r
2018-05-21,53.701113083366714\r
2018-05-26,57.540485434633396\r
2018-06-02,57.540485434633396\r
2018-06-20,41.06711094140773\r
2018-06-22,41.26882564637505\r
2018-06-25,47.703966771858646\r
2018-06-27,47.703966771858646\r
2018-07-02,48.989612687523106\r
2018-07-07,37.500258603153654\r
2018-07-10,41.97774793527792\r
2018-07-12,32.47411768114941\r
2018-07-15,51.599248120082386\r
2018-07-17,49.74549335996387\r
2018-07-25,55.26995754769916\r
2018-08-19,35.76285389500467\r
2018-08-21,35.76285389500467\r
2018-08-26,44.75441885543474\r
2018-09-03,53.478380707389015\r
2018-09-05,53.478380707389015\r
2018-09-08,60.7765849721199\r
2018-09-10,60.7765849721199\r
2018-09-13,60.7765849721199\r
2018-09-18,48.34518336768704\r
2018-09-28,46.959955507589555\r
2018-09-30,46.959955507589555\r
2018-10-05,52.1493099806035\r
2018-10-08,52.1493099806035\r
2019-03-12,76.14496634412058\r
2019-03-22,76.39929696684112\r
2019-03-24,76.39929696684112\r
2019-03-27,40.86576796068183\r
2019-03-29,42.28295928562744\r
2019-04-01,42.28295928562744\r
2019-05-01,53.58970340075692\r
2019-05-06,60.426682495574354\r
2019-05-13,60.426682495574354\r
2019-05-16,57.42614427820906\r
2019-05-23,76.01792060296884\r
2019-05-31,85.10189278324674\r
2019-06-02,53.92419323704216\r
2019-06-25,54.819984493417685\r
2019-06-27,45.799700629798586\r
2019-06-30,54.483412804226624\r
2019-07-02,54.483412804226624\r
2019-07-05,47.597410434569085\r
2019-07-07,42.89587153224386\r
2019-07-10,45.38049964000609\r
2019-07-15,45.27592590105595\r
2019-07-17,46.642440861345605\r
2019-07-20,46.32573657553606\r
2019-07-22,52.369948104817944\r
2019-07-25,53.255996468136914\r
2019-08-04,53.03396072594408\r
2019-08-09,54.59551679339468\r
2019-08-14,45.48516403413541\r
2019-08-16,43.615117885771134\r
2019-08-21,51.599248120082386\r
2019-08-24,40.46419898923626\r
2019-08-26,43.20356946717353\r
2019-08-29,43.20356946717353\r
2019-08-31,34.81107041999533\r
2019-09-03,33.21529512201754\r
2019-09-13,32.38191306180243\r
2019-09-15,32.38191306180243\r
2019-09-18,35.57172572749129\r
2019-09-20,34.81107041999533\r
2020-03-21,61.47866530800938\r
2020-03-23,61.47866530800938\r
2020-03-26,61.47866530800938\r
2020-03-28,62.77366729913931\r
2020-03-31,60.426682495574354\r
2020-04-02,60.426682495574354\r
2020-04-05,22.938736999701394\r
2020-04-07,22.857836383525566\r
2020-04-10,20.4812309260473\r
2020-04-12,20.4812309260473\r
2020-04-15,35.09559177464609\r
2020-05-20,63.48430098270389\r
2020-05-22,63.48430098270389\r
2020-05-25,67.5676990903957\r
2020-05-27,51.27026436004509\r
2020-05-30,53.701113083366714\r
2020-06-01,53.701113083366714\r
2020-07-04,74.75185533408339\r
2020-07-09,68.6645498207413\r
2020-07-11,68.6645498207413\r
2020-07-14,75.00442873185482\r
2020-07-19,63.959725412082435\r
2020-07-21,53.03396072594408\r
2020-07-24,77.41980317109767\r
2020-07-29,73.24315201466902\r
2020-07-31,41.26882564637505\r
2020-08-05,65.995110137368\r
2020-08-08,51.70908505632919\r
2020-08-10,40.36403978550721\r
2020-09-12,45.38049964000609\r
2020-09-14,45.904727127363344\r
2020-09-17,51.70908505632919\r
2021-03-01,69.3994661723355\r
2021-03-06,63.247089049913775\r
2021-03-21,76.5265817824402\r
2021-03-23,81.16161351989564\r
2021-03-26,81.16161351989564\r
2021-03-28,78.70257968993573\r
2021-03-31,76.7813902575509\r
2021-04-02,42.18112983480959\r
2021-04-05,45.27592590105595\r
2021-04-07,45.38049964000609\r
2021-04-15,67.5676990903957\r
2021-04-17,67.20355912010181\r
2021-04-22,66.96121025610584\r
2021-07-19,49.85383114436155\r
2021-07-21,46.32573657553606\r
2021-07-29,49.42101186879835\r
2021-09-22,33.775294367523195\r
2021-09-24,34.056611854135795\r
2021-09-27,34.056611854135795\r
2021-10-02,66.71919062927945\r
2021-10-07,69.27677595010456\r
2021-10-09,69.27677595010456\r
2021-10-12,43.82144162604939\r
2021-10-14,37.98835189943652\r
2021-10-17,46.642440861345605\r
2021-10-19,52.03912226498319\r
2021-10-22,52.03912226498319\r
2022-03-06,55.83436585510332\r
2022-03-08,53.144935012336006\r
2022-03-26,45.06705059654295\r
2022-04-10,64.79492188128177\r
2022-04-15,67.20355912010181\r
2022-04-17,67.20355912010181\r
2022-04-22,42.18112983480959\r
2022-05-15,67.32485692376684\r
2022-05-17,67.32485692376684\r
2022-05-30,41.97774793527792\r
2022-06-01,41.97774793527792\r
2022-06-04,50.942072150778806\r
2022-06-06,50.942072150778806\r
2022-06-11,51.70908505632919\r
2022-06-14,51.70908505632919\r
2022-06-19,43.40916035595239\r
2022-06-21,43.40916035595239\r
2022-06-29,71.24958936562079\r
2022-07-01,68.05436863388668\r
2022-07-04,68.05436863388668\r
2022-07-06,68.29819542597829\r
2022-07-14,35.76285389500467\r
2022-07-16,33.02941164564766\r
2022-07-19,35.95436677090484\r
2022-07-21,29.929882785204338\r
2022-07-24,33.12230437083007\r
2022-07-26,33.68171688675557\r
2022-07-31,31.73924481926127\r
2022-08-03,35.19062556853199\r
2022-08-08,37.11149452145863\r
2022-08-10,37.11149452145863\r
2022-08-13,28.07334174038053\r
2022-08-28,29.306075477955705\r
2022-08-30,29.306075477955705\r
2022-09-02,29.306075477955705\r
2022-09-04,35.66724169074787\r
2022-09-12,37.98835189943652\r
2022-09-19,36.146263845450505\r
2022-09-22,47.065973567165585\r
2022-10-12,53.478380707389015\r
2022-10-19,52.81227384245823\r
2022-10-22,55.83436585510332\r
2023-03-06,57.654912057649135\r
2023-04-05,45.58991903161195\r
2023-04-07,45.58991903161195\r
`;export{r as default};