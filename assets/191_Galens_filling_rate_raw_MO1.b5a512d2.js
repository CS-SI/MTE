const n=`date,value\r
2017-01-03,67.84424995459581\r
2017-02-22,55.10079972657699\r
2017-02-25,67.18747559150597\r
2017-03-17,39.60575485203072\r
2017-03-27,74.27322578143507\r
2017-04-06,88.14139973729547\r
2017-04-23,100.0\r
2017-05-16,48.785999811578584\r
2017-05-26,79.12599300594535\r
2017-06-02,82.33660902917296\r
2017-06-25,98.3272066924334\r
2017-07-07,97.41091662812481\r
2017-07-17,88.89576154061845\r
2017-08-04,93.6701178810233\r
2017-08-14,99.18636987347766\r
2017-08-19,89.47827749889512\r
2017-08-21,94.98892274568102\r
2017-08-29,85.49851460183746\r
2017-09-20,90.82545013635352\r
2017-10-05,96.074960346293\r
2017-10-10,93.07377834022643\r
2017-10-13,96.074960346293\r
2017-10-15,95.47082651735779\r
2017-10-25,90.6491480108977\r
2017-10-28,86.41311175495584\r
2017-10-30,88.95392557017422\r
2017-11-17,82.2807001689515\r
2017-11-19,85.49851460183746\r
2017-11-22,87.67881129118035\r
2017-12-24,94.74843857392757\r
2018-01-28,90.53171059517729\r
2018-02-12,47.80699958621832\r
2018-02-25,74.85791739684934\r
2018-03-14,92.7169096072284\r
2018-03-22,96.49901383085513\r
2018-04-06,42.34468100037865\r
2018-04-21,81.72267981607659\r
2018-04-26,86.06955452373654\r
2018-05-11,99.24788496593794\r
2018-06-10,77.70794649531602\r
2018-06-20,87.67881129118035\r
2018-06-22,87.50566158916094\r
2018-06-25,94.02885669742038\r
2018-06-27,90.12129281155806\r
2018-07-02,90.94308222461446\r
2018-07-10,95.2899664359627\r
2018-07-15,91.00192747099896\r
2018-07-30,86.24124563874666\r
2018-08-01,65.1375090913525\r
2018-08-06,93.43134830312816\r
2018-08-11,84.70232468548544\r
2018-08-19,90.70789591884373\r
2018-08-21,86.12676545132246\r
2018-08-26,83.85349148839919\r
2018-09-03,86.24124563874666\r
2018-09-08,86.7573690229267\r
2018-09-10,86.7573690229267\r
2018-09-20,90.53171059517729\r
2018-09-28,53.33959658959241\r
2018-10-05,57.35508997167133\r
2018-10-20,80.61246498381274\r
2018-10-23,79.61991146287824\r
2018-10-25,77.49094952027484\r
2018-10-30,33.062299169165364\r
2018-11-22,84.75906904652938\r
2018-11-29,84.70232468548544\r
2018-12-19,90.12129281155806\r
2018-12-27,83.1775729728994\r
2019-01-01,59.98805881504784\r
2019-01-03,62.05084410283806\r
2019-01-06,72.48081950568209\r
2019-01-16,59.845474436050715\r
2019-02-12,1.1811634899690513\r
2019-02-15,33.62578490935563\r
2019-02-17,48.40170392033711\r
2019-02-20,47.72234878107321\r
2019-02-22,62.14765581614293\r
2019-02-25,76.41061950800895\r
2019-02-27,63.46217063268762\r
2019-03-22,51.82805574790132\r
2019-03-24,56.84500024110638\r
2019-03-27,43.62797297591014\r
2019-03-29,45.92091032853335\r
2019-04-01,42.50402094443911\r
2019-04-13,47.468856732388396\r
2019-05-01,95.71224615347079\r
2019-05-06,97.7158591288348\r
2019-05-13,94.56828005516047\r
2019-05-23,99.43254728836392\r
2019-05-31,86.12676545132246\r
2019-06-02,92.0644713081837\r
2019-06-17,95.71224615347079\r
2019-06-27,88.60523325852712\r
2019-06-30,98.75631040798014\r
2019-07-02,99.67903683371799\r
2019-07-05,100.0\r
2019-07-10,100.0\r
2019-07-15,98.26598417648225\r
2019-07-22,85.21372368647776\r
2019-07-25,98.38844871153806\r
2019-08-04,89.77026524795427\r
2019-08-09,94.98892274568102\r
2019-08-14,82.61644469522616\r
2019-08-16,80.77850207923237\r
2019-08-21,79.29045782455991\r
2019-08-24,85.04308241044129\r
2019-08-26,93.31208039725145\r
2019-09-03,43.91130565701671\r
2019-09-13,37.258012954910605\r
2019-09-18,50.25181610756289\r
2019-10-08,82.44848502169782\r
2019-12-02,94.02885669742038\r
2020-01-06,42.86365505668089\r
2020-01-11,53.115917239090884\r
2020-01-16,50.94929317467006\r
2020-01-18,58.38226256833487\r
2020-02-05,80.77850207923237\r
2020-02-07,79.34531824463426\r
2020-02-20,40.729089232732456\r
2020-02-22,31.640589264348655\r
2020-03-11,100.0\r
2020-03-18,88.89576154061845\r
2020-03-21,72.32374107470973\r
2020-03-28,33.73198075700159\r
2020-03-31,26.9317240556539\r
2020-04-05,56.84500024110638\r
2020-04-10,87.15988735605661\r
2020-04-15,97.04562909007129\r
2020-05-07,89.01210905812383\r
2020-05-17,56.56775174812644\r
2020-05-20,77.81656137060635\r
2020-05-22,89.3616186284259\r
2020-05-25,96.074960346293\r
2020-06-21,92.77633903549412\r
2020-06-24,99.86410883901615\r
2020-06-26,91.06079218593803\r
2020-07-01,100.0\r
2020-07-04,100.0\r
2020-07-06,97.65483162908272\r
2020-07-09,97.7158591288348\r
2020-07-11,97.53283512955281\r
2020-07-19,96.9240225586633\r
2020-07-24,97.22818511752916\r
2020-07-29,100.0\r
2020-07-31,86.12676545132246\r
2020-08-05,85.32758173283854\r
2020-08-08,95.4105203339644\r
2020-08-15,90.8842564464956\r
2020-08-20,85.27064298989269\r
2020-08-25,53.33959658959241\r
2020-09-04,23.779960094684625\r
2020-09-14,21.97938175579949\r
2020-09-17,26.397705505657836\r
2020-11-11,80.2809149762536\r
2020-11-18,80.66779126737734\r
2020-11-21,77.43674876960452\r
2020-11-23,67.64181748729222\r
2021-01-17,66.58412238345126\r
2021-02-14,93.90919916230972\r
2021-02-19,94.56828005516047\r
2021-02-24,92.59810918108839\r
2021-02-26,81.16660152239193\r
2021-03-01,80.17055361166128\r
2021-03-21,61.809152534225944\r
2021-03-23,51.82805574790132\r
2021-03-28,63.07121763531301\r
2021-03-31,58.89934638353481\r
2021-04-02,68.19925129319687\r
2021-04-15,68.14847879833627\r
2021-04-17,64.88973542037542\r
2021-05-27,85.32758173283854\r
2021-06-16,56.47548964701438\r
2021-06-26,63.903469846950614\r
2021-07-01,57.07657028710076\r
2021-07-11,60.32143063358464\r
2021-07-19,55.14634360502949\r
2021-07-21,55.28309071895693\r
2021-08-10,64.14931195846505\r
2021-08-13,58.241644428303154\r
2021-08-20,51.78393506553468\r
2021-08-30,51.51961454535224\r
2021-09-22,52.803573782597525\r
2021-09-24,55.648596596369806\r
2021-10-07,54.55577425471463\r
2021-10-12,53.47403497477402\r
2021-10-14,52.93731989431901\r
2021-10-17,50.33873183617328\r
2021-10-27,51.607644516676956\r
2021-11-11,52.40337366698421\r
2021-12-11,77.92525384105788\r
2021-12-16,55.420011058390514\r
2021-12-18,52.536600678987725\r
2021-12-21,55.009769706769106\r
2022-01-15,57.030217756583845\r
2022-01-17,70.50403564984332\r
2022-01-22,63.217680208324225\r
2022-01-25,56.84500024110638\r
2022-01-27,54.148823500772394\r
2022-01-30,51.916354769445405\r
2022-02-09,57.72752832197406\r
2022-03-01,80.83388660813347\r
2022-03-08,31.26459096332679\r
2022-03-23,18.70005071860399\r
2022-03-26,17.337812282711614\r
2022-04-10,8.87254792305701\r
2022-04-15,33.51976032323574\r
2022-04-17,36.40572667244687\r
2022-05-17,44.88985511467101\r
2022-05-27,72.27142033064723\r
2022-06-01,82.2807001689515\r
2022-06-06,89.47827749889512\r
2022-06-11,87.79434168512752\r
2022-06-19,94.5082661874021\r
2022-07-06,93.96901818842228\r
2022-07-11,92.83578794093864\r
2022-07-14,93.31208039725145\r
2022-07-16,93.72985897843975\r
2022-07-19,91.76868741746854\r
2022-07-24,93.43134830312816\r
2022-07-26,93.6701178810233\r
2022-07-31,84.24906948782973\r
2022-08-03,85.09994339704991\r
2022-08-05,79.34531824463426\r
2022-08-08,46.503533043422735\r
2022-08-10,48.61500973275232\r
2022-08-13,53.968456706305254\r
2022-08-28,44.76693314612905\r
2022-08-30,49.343838430177\r
2022-09-04,44.35843822360157\r
2022-09-12,50.512793768010646\r
2022-09-19,68.14847879833627\r
2022-09-22,66.28348961162945\r
2022-10-04,83.5151824859931\r
2022-10-07,88.7213861993945\r
2022-10-09,84.0229083183672\r
2022-10-22,83.90994433259475\r
2022-10-24,84.58889427274832\r
2022-11-11,79.83993539736912\r
2022-11-13,94.32834149564732\r
2022-12-06,82.7285149375982\r
2023-01-20,46.83814729531828\r
2023-02-04,36.29530249768588\r
2023-02-14,23.19120567321111\r
2023-02-16,25.254331197617848\r
2023-03-06,45.054019252550034\r
2023-03-16,98.87908701130509\r
2023-03-28,47.55327735728091\r
2023-04-05,66.28348961162945\r
2023-04-07,55.10079972657699\r
2023-05-27,58.5230541507077\r
2023-06-16,82.2807001689515\r
2023-06-24,86.24124563874666\r
2023-07-09,96.074960346293\r
2023-07-14,95.5311521907228\r
2023-07-31,89.94569144471541\r
2023-08-15,81.33322111235671\r
2023-08-20,86.06955452373654\r
2023-08-23,84.24906948782973\r
2023-09-04,16.36903893101915\r
2023-09-07,8.378769347069799\r
2023-09-14,16.052442846211104\r
2023-09-24,37.74420292836687\r
2023-09-29,42.30489384024962\r
2023-10-02,39.490464853606674\r
2023-10-04,40.184783658111904\r
2023-10-07,44.930867414785894\r
`;export{n as default};
