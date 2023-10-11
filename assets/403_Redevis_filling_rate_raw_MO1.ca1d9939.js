const r=`date,value\r
2017-02-15,89.42827268768218\r
2017-02-25,69.59019533767861\r
2017-03-14,100.0\r
2017-03-17,56.3157511397401\r
2017-03-27,61.999413721829946\r
2017-04-23,70.45287638221872\r
2017-05-16,81.09796940929799\r
2017-05-26,45.54995113609695\r
2017-06-12,6.6757995371281496\r
2017-06-15,41.1912137386046\r
2017-06-22,53.94034981329724\r
2017-06-25,53.94034981329724\r
2017-07-05,78.38656131792871\r
2017-07-07,76.59738159816459\r
2017-08-06,73.06368075604875\r
2017-08-14,54.72807150191108\r
2017-08-19,70.45287638221872\r
2017-08-21,86.61912903881634\r
2017-08-29,66.1777621134961\r
2017-10-05,61.999413721829946\r
2017-10-13,54.72807150191108\r
2017-10-15,67.87629340750033\r
2017-10-28,64.49471220083366\r
2017-10-30,67.87629340750033\r
2017-11-17,65.33429496070902\r
2017-11-22,47.037498427596596\r
2017-12-07,53.94034981329724\r
2018-01-13,72.18963216102476\r
2018-01-23,66.1777621134961\r
2018-01-28,79.28669079302382\r
2018-01-31,18.04666601362451\r
2018-02-27,51.60185966716183\r
2018-03-14,61.175512852639145\r
2018-03-19,63.659028091674166\r
2018-04-21,56.3157511397401\r
2018-05-11,60.35556942458313\r
2018-06-22,89.42827268768218\r
2018-06-27,86.61912903881634\r
2018-07-12,85.68990569739819\r
2018-07-15,51.60185966716183\r
2018-07-25,44.07961327711517\r
2018-08-01,74.82305509660209\r
2018-08-16,83.84226150754476\r
2018-08-19,58.72761570701981\r
2018-09-08,73.06368075604875\r
2018-09-10,59.53959859365297\r
2018-09-13,51.60185966716183\r
2018-09-18,71.31935970440593\r
2018-09-25,72.18963216102476\r
2018-09-28,62.827257063345456\r
2018-10-05,71.31935970440593\r
2018-10-18,53.156729214932476\r
2018-10-20,70.45287638221872\r
2018-11-14,52.377226743052105\r
2018-11-22,57.11567613608046\r
2018-11-24,46.2915834590929\r
2018-12-27,26.612173340111607\r
2019-01-03,29.723811398270616\r
2019-02-12,4.5842801331328245\r
2019-02-15,8.624082408450807\r
2019-02-17,3.9514802951133117\r
2019-02-20,5.594947481702953\r
2019-02-22,2.523714950662155\r
2019-02-25,24.805059750743556\r
2019-02-27,45.54995113609695\r
2019-03-22,62.827257063345456\r
2019-03-24,82.92386293913015\r
2019-03-27,36.30781732222865\r
2019-03-29,67.87629340750033\r
2019-04-01,31.00266540910655\r
2019-04-13,79.28669079302382\r
2019-05-13,97.07493374642418\r
2019-05-16,100.0\r
2019-05-23,100.0\r
2019-06-02,65.33429496070902\r
2019-06-17,95.14223463460804\r
2019-06-27,76.59738159816459\r
2019-06-30,78.38656131792871\r
2019-07-05,71.31935970440593\r
2019-07-07,78.38656131792871\r
2019-07-10,87.55193854314935\r
2019-07-12,100.0\r
2019-07-17,83.84226150754476\r
2019-07-22,75.70835556145258\r
2019-07-25,100.0\r
2019-08-04,81.09796940929799\r
2019-08-14,80.19049741939071\r
2019-08-24,82.00909509750682\r
2019-08-31,66.1777621134961\r
2019-09-03,68.73132986403601\r
2019-09-13,50.830645495499674\r
2019-09-15,67.0250995702449\r
2019-09-20,56.3157511397401\r
2019-10-03,57.919636307155706\r
2019-10-08,69.59019533767861\r
2019-10-13,17.518789076164445\r
2019-10-25,63.659028091674166\r
2020-01-06,56.3157511397401\r
2020-01-16,57.919636307155706\r
2020-01-21,73.06368075604875\r
2020-02-07,82.00909509750682\r
2020-02-15,72.18963216102476\r
2020-02-20,68.73132986403601\r
2020-02-22,75.70835556145258\r
2020-03-13,67.0250995702449\r
2020-03-28,76.59738159816459\r
2020-04-02,67.87629340750033\r
2020-04-05,70.45287638221872\r
2020-04-07,77.49012090652371\r
2020-04-15,73.94149263787004\r
2020-05-17,73.06368075604875\r
2020-05-20,79.28669079302382\r
2020-05-25,83.84226150754476\r
2020-05-27,61.175512852639145\r
2020-05-30,49.300747125526975\r
2020-06-21,82.92386293913015\r
2020-06-26,85.68990569739819\r
2020-07-01,100.0\r
2020-07-04,100.0\r
2020-07-09,51.60185966716183\r
2020-07-19,100.0\r
2020-07-24,82.00909509750682\r
2020-07-29,77.49012090652371\r
2020-07-31,79.28669079302382\r
2020-08-05,93.22350393020713\r
2020-08-08,79.28669079302382\r
2020-08-10,62.827257063345456\r
2020-08-20,72.18963216102476\r
2020-08-25,86.61912903881634\r
2020-09-04,76.59738159816459\r
2020-09-09,65.33429496070902\r
2020-09-12,56.3157511397401\r
2020-09-14,61.999413721829946\r
2020-09-17,50.06360198067992\r
2020-11-18,65.33429496070902\r
2020-11-21,59.53959859365297\r
2020-11-23,62.827257063345456\r
2020-12-18,57.919636307155706\r
2021-02-14,55.51987747252176\r
2021-02-21,50.06360198067992\r
2021-02-24,59.53959859365297\r
2021-02-26,74.82305509660209\r
2021-03-01,58.72761570701981\r
2021-03-06,63.659028091674166\r
2021-03-23,84.76427949235375\r
2021-03-28,74.82305509660209\r
2021-03-31,68.73132986403601\r
2021-04-02,90.37177591654515\r
2021-04-07,71.31935970440593\r
2021-05-27,53.94034981329724\r
2021-05-30,83.84226150754476\r
2021-06-14,46.2915834590929\r
2021-06-16,81.09796940929799\r
2021-06-26,88.48832334549112\r
2021-07-11,69.59019533767861\r
2021-07-19,68.73132986403601\r
2021-07-21,87.55193854314935\r
2021-08-10,99.02152191634457\r
2021-08-20,72.18963216102476\r
2021-09-02,76.59738159816459\r
2021-09-07,67.87629340750033\r
2021-09-12,61.999413721829946\r
2021-09-24,69.59019533767861\r
2021-10-12,44.81262109694913\r
2021-10-14,60.35556942458313\r
2021-10-17,57.919636307155706\r
2021-10-19,61.175512852639145\r
2021-10-24,60.35556942458313\r
2021-10-27,41.1912137386046\r
2021-12-21,47.787676692969065\r
2022-01-25,51.60185966716183\r
2022-01-27,73.94149263787004\r
2022-02-09,69.59019533767861\r
2022-02-11,50.830645495499674\r
2022-02-19,63.659028091674166\r
2022-02-26,66.1777621134961\r
2022-03-06,69.59019533767861\r
2022-03-08,71.31935970440593\r
2022-03-26,81.09796940929799\r
2022-04-17,91.31882248216134\r
2022-04-27,64.49471220083366\r
2022-06-04,88.48832334549112\r
2022-06-11,98.04649660115997\r
2022-06-16,100.0\r
2022-06-21,85.68990569739819\r
2022-06-29,58.72761570701981\r
2022-07-06,70.45287638221872\r
2022-07-11,95.14223463460804\r
2022-07-14,82.92386293913015\r
2022-07-16,98.04649660115997\r
2022-07-19,90.37177591654515\r
2022-07-21,87.55193854314935\r
2022-07-24,79.28669079302382\r
2022-08-03,89.42827268768218\r
2022-08-08,82.00909509750682\r
2022-08-10,94.18111821412883\r
2022-08-13,75.70835556145258\r
2022-08-25,87.55193854314935\r
2022-09-04,76.59738159816459\r
2022-09-12,71.31935970440593\r
2022-09-19,77.49012090652371\r
2022-09-22,52.377226743052105\r
2022-10-04,69.59019533767861\r
2022-10-09,61.175512852639145\r
2022-10-22,58.72761570701981\r
2022-11-11,36.30781732222865\r
2022-12-06,15.46417108859925\r
2022-12-11,27.842020590095412\r
2023-02-14,62.827257063345456\r
2023-02-16,68.73132986403601\r
2023-04-05,80.19049741939071\r
2023-06-19,54.72807150191108\r
2023-06-24,100.0\r
2023-07-09,100.0\r
2023-07-11,91.31882248216134\r
2023-07-19,64.49471220083366\r
2023-07-31,84.76427949235375\r
2023-08-08,87.55193854314935\r
2023-08-15,83.84226150754476\r
2023-08-23,98.04649660115997\r
2023-09-04,93.22350393020713\r
2023-09-07,50.06360198067992\r
2023-09-12,39.07132134546124\r
2023-09-24,73.94149263787004\r
2023-09-27,71.31935970440593\r
2023-10-02,54.72807150191108\r
2023-10-07,67.0250995702449\r
`;export{r as default};
