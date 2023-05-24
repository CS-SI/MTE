const r=`date,value\r
2017-02-25,83.7963010375415\r
2017-03-14,83.7963010375415\r
2017-03-17,90.67192883472995\r
2017-03-27,79.54999687447439\r
2017-04-03,73.67399936459456\r
2017-04-23,86.36310100729074\r
2017-05-16,96.7670683721079\r
2017-05-26,90.67192883472995\r
2017-06-02,79.54999687447439\r
2017-06-25,98.52162057636501\r
2017-07-05,100.0\r
2017-07-07,84.6503367810762\r
2017-08-04,81.24370161582921\r
2017-08-06,84.6503367810762\r
2017-08-14,82.09297307028149\r
2017-08-21,83.7963010375415\r
2017-08-24,91.53823291836297\r
2017-08-26,67.88195604291246\r
2017-08-29,74.5083859316667\r
2017-09-20,67.88195604291246\r
2017-09-23,87.22180962019416\r
2017-10-05,77.86281575171746\r
2017-10-08,76.18224792303498\r
2017-10-10,79.54999687447439\r
2017-10-13,71.18116485844847\r
2017-10-15,77.02169946053955\r
2017-10-18,68.70408609304938\r
2017-10-25,77.02169946053955\r
2017-10-28,62.17836672187877\r
2017-11-07,68.70408609304938\r
2017-11-14,71.18116485844847\r
2017-11-17,78.70558532162364\r
2017-11-22,68.70408609304938\r
2017-12-09,78.70558532162364\r
2018-02-02,72.84132533453459\r
2018-02-10,85.50594010675582\r
2018-03-14,82.09297307028149\r
2018-03-22,87.22180962019416\r
2018-04-21,100.0\r
2018-04-23,86.36310100729074\r
2018-04-26,100.0\r
2018-05-11,93.2753063604894\r
2018-05-21,91.53823291836297\r
2018-06-20,95.0182745431624\r
2018-06-25,97.64362881258822\r
2018-07-07,68.70408609304938\r
2018-07-10,84.6503367810762\r
2018-07-12,93.2753063604894\r
2018-07-15,87.22180962019416\r
2018-07-25,88.08205622453487\r
2018-07-27,85.50594010675582\r
2018-08-01,82.09297307028149\r
2018-08-04,91.53823291836297\r
2018-08-06,84.6503367810762\r
2018-08-11,79.54999687447439\r
2018-08-19,92.40602840512953\r
2018-08-21,79.54999687447439\r
2018-08-31,79.54999687447439\r
2018-09-08,93.2753063604894\r
2018-09-10,77.02169946053955\r
2018-09-13,84.6503367810762\r
2018-09-20,91.53823291836297\r
2018-09-23,88.94383123778806\r
2018-09-28,79.54999687447439\r
2018-10-05,81.24370161582921\r
2018-10-20,78.70558532162364\r
2018-11-19,71.18116485844847\r
2018-11-22,78.70558532162364\r
2018-11-29,67.06163019597126\r
2018-12-19,71.18116485844847\r
2019-01-03,41.86185674287225\r
2019-01-16,47.18595642699283\r
2019-02-12,45.6530428562355\r
2019-02-15,44.89005796391975\r
2019-02-17,44.129420886054625\r
2019-02-20,53.406789103793926\r
2019-02-22,44.89005796391975\r
2019-02-25,51.83855676727796\r
2019-02-27,49.502327906615925\r
2019-03-12,50.27889367116666\r
2019-03-22,58.960818547744545\r
2019-03-24,42.615293593030415\r
2019-03-27,47.955836762539214\r
2019-03-29,49.502327906615925\r
2019-04-01,56.568323730315925\r
2019-04-13,37.39380585888185\r
2019-05-01,32.3017442610829\r
2019-05-06,53.406789103793926\r
2019-05-13,37.39380585888185\r
2019-05-23,43.371157314566155\r
2019-05-31,51.83855676727796\r
2019-06-02,41.86185674287225\r
2019-06-17,54.19406811402403\r
2019-06-27,33.74272318290731\r
2019-06-30,72.01037628261446\r
2019-07-05,70.35370392564808\r
2019-07-12,60.56571225911846\r
2019-07-15,59.76228706432355\r
2019-07-22,49.502327906615925\r
2019-07-25,62.17836672187877\r
2019-08-04,44.89005796391975\r
2019-08-09,56.568323730315925\r
2019-08-14,67.06163019597126\r
2019-08-21,47.18595642699283\r
2019-08-24,51.05764371663829\r
2019-08-26,51.05764371663829\r
2019-09-03,43.371157314566155\r
2019-09-13,52.621612015055454\r
2019-09-15,53.406789103793926\r
2019-09-18,57.363819473011034\r
2019-09-20,52.621612015055454\r
2019-10-08,44.89005796391975\r
2019-10-13,49.502327906615925\r
2020-01-06,39.616388394350786\r
2020-01-11,54.19406811402403\r
2020-01-16,41.11087449101745\r
2020-02-05,36.658176871773186\r
2020-02-15,29.454872219030136\r
2020-02-20,40.36237529910198\r
2020-02-22,33.02080625350534\r
2020-03-18,44.89005796391975\r
2020-03-21,50.27889367116666\r
2020-03-28,62.17836672187877\r
2020-04-05,62.17836672187877\r
2020-04-10,58.960818547744545\r
2020-04-12,55.77485431848067\r
2020-05-17,52.621612015055454\r
2020-05-20,64.61161937540606\r
2020-05-22,57.363819473011034\r
2020-05-25,55.77485431848067\r
2020-05-27,54.19406811402403\r
2020-06-21,38.87294380224869\r
2020-06-24,68.70408609304938\r
2020-06-26,54.19406811402403\r
2020-07-04,56.568323730315925\r
2020-07-09,50.27889367116666\r
2020-07-19,47.955836762539214\r
2020-07-21,31.585577518781367\r
2020-07-24,57.363819473011034\r
2020-07-29,72.01037628261446\r
2020-07-31,44.129420886054625\r
2020-08-05,41.11087449101745\r
2020-08-08,60.56571225911846\r
2020-08-10,62.17836672187877\r
2020-08-15,47.18595642699283\r
2020-08-20,51.05764371663829\r
2020-08-25,31.585577518781367\r
2020-09-02,41.86185674287225\r
2020-09-04,29.454872219030136\r
2020-09-12,34.4674559963687\r
2020-09-14,41.86185674287225\r
2020-09-17,48.72796818309861\r
2020-10-17,44.129420886054625\r
2020-11-06,41.11087449101745\r
2020-11-08,34.4674559963687\r
2020-11-11,37.39380585888185\r
2020-11-18,35.92521900582955\r
2020-11-23,33.74272318290731\r
2020-12-18,50.27889367116666\r
2021-02-06,75.34447279779026\r
2021-02-14,88.94383123778806\r
2021-02-19,78.70558532162364\r
2021-02-24,77.86281575171746\r
2021-03-01,75.34447279779026\r
2021-03-23,84.6503367810762\r
2021-03-28,94.14605797128058\r
2021-03-31,87.22180962019416\r
2021-04-02,85.50594010675582\r
2021-04-05,89.80712521278113\r
2021-04-07,82.09297307028149\r
2021-04-15,97.64362881258822\r
2021-05-27,81.24370161582921\r
2021-05-30,86.36310100729074\r
2021-06-11,88.08205622453487\r
2021-06-16,82.94384303159342\r
2021-06-19,82.09297307028149\r
2021-06-21,85.50594010675582\r
2021-06-26,80.39603928931523\r
2021-07-01,78.70558532162364\r
2021-08-10,87.22180962019416\r
2021-08-20,77.86281575171746\r
2021-08-23,85.50594010675582\r
2021-08-25,73.67399936459456\r
2021-08-28,74.5083859316667\r
2021-08-30,75.34447279779026\r
2021-09-14,73.67399936459456\r
2021-09-17,72.01037628261446\r
2021-09-22,79.54999687447439\r
2021-09-24,79.54999687447439\r
2021-10-07,65.42644745765483\r
2021-10-12,75.34447279779026\r
2021-10-14,67.88195604291246\r
2021-10-24,64.61161937540606\r
2021-10-27,67.06163019597126\r
2021-12-16,70.35370392564808\r
2021-12-18,73.67399936459456\r
2021-12-21,81.24370161582921\r
2021-12-23,67.88195604291246\r
2022-01-05,73.67399936459456\r
2022-01-15,77.02169946053955\r
2022-01-22,66.24312257581926\r
2022-01-25,67.88195604291246\r
2022-01-27,67.88195604291246\r
2022-02-09,79.54999687447439\r
2022-02-26,79.54999687447439\r
2022-03-23,82.94384303159342\r
2022-03-26,82.94384303159342\r
2022-04-05,97.64362881258822\r
2022-04-10,89.80712521278113\r
2022-04-15,99.40103552730822\r
2022-04-17,77.86281575171746\r
2022-04-30,96.7670683721079\r
2022-05-15,95.89194749813154\r
2022-05-17,83.7963010375415\r
2022-05-27,82.09297307028149\r
2022-05-30,68.70408609304938\r
2022-06-01,71.18116485844847\r
2022-06-06,88.94383123778806\r
2022-06-16,74.5083859316667\r
2022-06-19,92.40602840512953\r
2022-06-29,97.64362881258822\r
2022-07-06,82.09297307028149\r
2022-07-11,71.18116485844847\r
2022-07-14,97.64362881258822\r
2022-07-16,81.24370161582921\r
2022-07-19,100.0\r
2022-07-21,84.6503367810762\r
2022-07-24,98.52162057636501\r
2022-07-26,88.08205622453487\r
2022-07-31,92.40602840512953\r
2022-08-03,99.40103552730822\r
2022-08-10,91.53823291836297\r
2022-08-13,88.08205622453487\r
2022-08-28,100.0\r
2022-09-04,100.0\r
2022-09-12,97.64362881258822\r
2022-09-19,89.80712521278113\r
2022-09-22,90.67192883472995\r
2022-10-04,82.09297307028149\r
2022-10-07,97.64362881258822\r
2022-10-09,81.24370161582921\r
2022-10-22,88.94383123778806\r
2022-10-24,70.35370392564808\r
2022-11-11,75.34447279779026\r
2022-11-16,77.02169946053955\r
2023-02-04,82.94384303159342\r
2023-02-06,72.84132533453459\r
2023-02-09,67.06163019597126\r
2023-02-11,77.86281575171746\r
2023-02-14,84.6503367810762\r
2023-02-16,72.01037628261446\r
2023-02-26,75.34447279779026\r
2023-03-01,88.94383123778806\r
2023-03-16,88.94383123778806\r
2023-03-28,86.36310100729074\r
2023-04-05,88.08205622453487\r
2023-04-07,89.80712521278113\r
2023-04-20,86.36310100729074\r
2023-05-02,86.36310100729074\r
`;export{r as default};