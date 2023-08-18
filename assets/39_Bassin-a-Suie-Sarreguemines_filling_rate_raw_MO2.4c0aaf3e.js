const r=`date,value\r
2017-02-09,44.49527535117213\r
2017-02-19,44.49527535117213\r
2017-03-11,74.86615933216166\r
2017-03-14,74.86615933216166\r
2017-04-03,62.770435261707014\r
2017-04-10,62.770435261707014\r
2017-04-20,68.71555305718705\r
2017-04-23,72.79337694828004\r
2017-04-30,74.86615933216166\r
2017-05-10,75.91095461268907\r
2017-05-13,68.71555305718705\r
2017-06-02,63.746840212686514\r
2017-06-12,75.91095461268907\r
2017-06-19,82.29628285851355\r
2017-06-22,82.29628285851355\r
2017-06-29,74.86615933216166\r
2017-07-17,70.74312573289112\r
2017-07-19,70.74312573289112\r
2017-07-22,76.9613289877649\r
2017-07-29,71.76542581694399\r
2017-08-06,67.71031821140745\r
2017-08-23,72.79337694828004\r
2017-08-26,72.79337694828004\r
2017-09-02,72.79337694828004\r
2017-09-22,66.71080991444529\r
2017-09-25,69.72649522718207\r
2017-09-27,64.72905107677828\r
2017-10-05,69.72649522718207\r
2017-10-15,55.17072492194385\r
2017-10-17,59.87626209275013\r
2017-10-27,53.33035615136835\r
2017-11-01,52.419230760464416\r
2017-11-06,64.72905107677828\r
2017-11-14,63.746840212686514\r
2018-02-07,100.0\r
2018-02-12,100.0\r
2018-02-14,100.0\r
2018-02-22,83.37977186332147\r
2018-02-24,81.21827107145998\r
2018-02-27,88.87881001778334\r
2018-03-04,88.87881001778334\r
2018-03-14,15.795459266226064\r
2018-03-19,15.795459266226064\r
2018-03-21,62.770435261707014\r
2018-03-24,62.770435261707014\r
2018-04-18,83.37977186332147\r
2018-04-20,100.0\r
2018-05-05,65.71704763212554\r
2018-05-08,67.71031821140745\r
2018-05-15,63.746840212686514\r
2018-05-18,68.71555305718705\r
2018-05-25,71.76542581694399\r
2018-05-28,69.72649522718207\r
2018-05-30,56.099921667674536\r
2018-06-04,84.46872176299422\r
2018-06-27,58.92328837127908\r
2018-06-29,58.92328837127908\r
2018-07-02,81.21827107145998\r
2018-07-04,81.21827107145998\r
2018-07-07,81.21827107145998\r
2018-07-09,78.01726499032705\r
2018-07-14,80.14575300660933\r
2018-07-17,75.91095461268907\r
2018-07-19,75.91095461268907\r
2018-07-22,74.86615933216166\r
2018-07-24,75.91095461268907\r
2018-07-27,74.86615933216166\r
2018-07-29,69.72649522718207\r
2018-08-03,65.71704763212554\r
2018-08-06,69.72649522718207\r
2018-08-11,74.86615933216166\r
2018-08-16,72.79337694828004\r
2018-08-18,69.72649522718207\r
2018-08-21,69.72649522718207\r
2018-08-23,60.83512530937195\r
2018-08-26,60.83512530937195\r
2018-08-28,75.91095461268907\r
2018-09-12,61.7998567090709\r
2018-09-17,61.7998567090709\r
2018-09-20,61.7998567090709\r
2018-09-22,64.72905107677828\r
2018-09-25,61.7998567090709\r
2018-09-27,48.835682580318796\r
2018-09-30,53.33035615136835\r
2018-10-05,48.835682580318796\r
2018-10-07,44.49527535117213\r
2018-10-10,49.7223775432331\r
2018-10-12,58.92328837127908\r
2018-10-15,42.80304040520743\r
2018-10-17,55.17072492194385\r
2018-10-20,47.9551574940181\r
2018-10-22,47.9551574940181\r
2018-11-04,48.835682580318796\r
2018-11-11,48.835682580318796\r
2018-11-14,50.615217101500164\r
2018-11-16,46.21272002804129\r
2019-02-14,62.770435261707014\r
2019-02-17,62.770435261707014\r
2019-02-24,62.770435261707014\r
2019-02-27,43.64599282959948\r
2019-03-21,76.9613289877649\r
2019-03-24,76.9613289877649\r
2019-03-29,47.9551574940181\r
2019-03-31,67.71031821140745\r
2019-04-15,64.72905107677828\r
2019-04-18,59.87626209275013\r
2019-04-20,78.01726499032705\r
2019-04-30,78.01726499032705\r
2019-05-15,72.79337694828004\r
2019-05-23,72.79337694828004\r
2019-05-25,72.79337694828004\r
2019-06-04,75.91095461268907\r
2019-06-07,81.21827107145998\r
2019-06-19,82.29628285851355\r
2019-06-24,82.29628285851355\r
2019-06-27,91.11620790324977\r
2019-06-29,81.21827107145998\r
2019-07-02,81.21827107145998\r
2019-07-04,78.01726499032705\r
2019-07-17,79.07874535348972\r
2019-07-22,54.24752869971059\r
2019-07-24,80.14575300660933\r
2019-07-29,55.17072492194385\r
2019-08-01,55.17072492194385\r
2019-08-11,56.099921667674536\r
2019-08-13,56.099921667674536\r
2019-08-23,51.51417635207787\r
2019-08-26,55.17072492194385\r
2019-08-28,55.17072492194385\r
2019-08-31,51.51417635207787\r
2019-09-02,51.51417635207787\r
2019-09-10,37.879872660383555\r
2019-09-12,47.9551574940181\r
2019-09-15,24.552710806755318\r
2019-09-20,24.552710806755318\r
2019-12-04,46.21272002804129\r
2019-12-14,46.21272002804129\r
2019-12-19,86.66293984270685\r
2019-12-21,86.66293984270685\r
2019-12-29,86.66293984270685\r
2020-01-20,52.419230760464416\r
2020-02-07,89.9948256682048\r
2020-02-19,89.9948256682048\r
2020-02-22,100.0\r
2020-03-15,56.099921667674536\r
2020-03-18,58.92328837127908\r
2020-03-20,76.9613289877649\r
2020-03-23,76.9613289877649\r
2020-03-25,70.74312573289112\r
2020-03-28,71.76542581694399\r
2020-03-30,68.71555305718705\r
2020-04-02,76.9613289877649\r
2020-04-04,80.14575300660933\r
2020-04-07,76.9613289877649\r
2020-04-09,76.9613289877649\r
2020-04-12,74.86615933216166\r
2020-04-14,75.91095461268907\r
2020-04-17,73.82696081746784\r
2020-04-19,76.9613289877649\r
2020-04-22,79.07874535348972\r
2020-04-24,71.76542581694399\r
2020-04-27,78.01726499032705\r
2020-05-07,74.86615933216166\r
2020-05-12,84.46872176299422\r
2020-05-17,62.770435261707014\r
2020-05-19,73.82696081746784\r
2020-05-27,88.87881001778334\r
2020-05-29,88.87881001778334\r
2020-06-01,69.72649522718207\r
2020-06-03,69.72649522718207\r
2020-06-23,82.29628285851355\r
2020-06-26,82.29628285851355\r
2020-07-03,82.29628285851355\r
2020-07-08,82.29628285851355\r
2020-07-21,70.74312573289112\r
2020-07-23,79.07874535348972\r
2020-07-31,66.71080991444529\r
2020-08-05,73.82696081746784\r
2020-08-07,74.86615933216166\r
2020-08-10,67.71031821140745\r
2020-08-12,76.9613289877649\r
2020-08-17,58.92328837127908\r
2020-08-20,65.71704763212554\r
2020-09-04,44.49527535117213\r
2020-09-09,33.956779857308035\r
2020-09-11,54.24752869971059\r
2020-09-14,36.29079483966032\r
2020-09-16,53.33035615136835\r
2020-09-19,39.49510347759508\r
2020-09-21,49.7223775432331\r
2020-10-04,62.770435261707014\r
2020-10-31,37.08204877786776\r
2020-11-05,43.64599282959948\r
2020-11-08,43.64599282959948\r
2020-11-18,41.136239250069615\r
2020-11-25,37.08204877786776\r
2020-11-28,48.835682580318796\r
2020-11-30,48.835682580318796\r
2020-12-05,48.835682580318796\r
2020-12-25,81.21827107145998\r
2021-02-21,74.86615933216166\r
2021-02-23,83.37977186332147\r
2021-02-28,59.87626209275013\r
2021-03-03,70.74312573289112\r
2021-03-30,73.82696081746784\r
2021-04-02,79.07874535348972\r
2021-04-04,79.07874535348972\r
2021-04-09,79.07874535348972\r
2021-04-22,61.7998567090709\r
2021-04-24,61.7998567090709\r
2021-04-27,100.0\r
2021-06-01,80.14575300660933\r
2021-06-11,80.14575300660933\r
2021-06-13,76.9613289877649\r
2021-06-16,94.5124034659451\r
2021-06-18,94.5124034659451\r
2021-06-21,94.5124034659451\r
2021-07-18,62.770435261707014\r
2021-07-21,65.71704763212554\r
2021-07-23,62.770435261707014\r
2021-08-15,56.099921667674536\r
2021-08-25,56.099921667674536\r
2021-09-01,38.68423465149108\r
2021-09-04,63.746840212686514\r
2021-09-06,61.7998567090709\r
2021-09-21,29.4707122821866\r
2021-09-24,29.4707122821866\r
2021-10-01,29.4707122821866\r
2021-10-09,52.419230760464416\r
2021-10-14,52.419230760464416\r
2021-10-24,39.49510347759508\r
2021-11-23,41.96644631090428\r
2022-01-12,81.21827107145998\r
2022-01-24,69.72649522718207\r
2022-02-23,97.95636238616406\r
2022-02-26,97.95636238616406\r
2022-02-28,97.95636238616406\r
2022-03-03,93.37501171171077\r
2022-03-05,93.37501171171077\r
2022-03-08,80.14575300660933\r
2022-03-10,76.9613289877649\r
2022-03-13,76.9613289877649\r
2022-03-20,66.71080991444529\r
2022-03-23,60.83512530937195\r
2022-03-25,69.72649522718207\r
2022-03-28,61.7998567090709\r
2022-04-04,62.770435261707014\r
2022-04-09,71.76542581694399\r
2022-04-17,78.01726499032705\r
2022-04-22,94.5124034659451\r
2022-05-09,73.82696081746784\r
2022-05-14,76.9613289877649\r
2022-05-17,76.9613289877649\r
2022-06-01,67.71031821140745\r
2022-06-11,68.71555305718705\r
2022-06-13,62.770435261707014\r
2022-06-16,78.01726499032705\r
2022-06-18,66.71080991444529\r
2022-06-21,66.71080991444529\r
2022-06-23,76.9613289877649\r
2022-07-03,46.21272002804129\r
2022-07-06,63.746840212686514\r
2022-07-08,49.7223775432331\r
2022-07-13,49.7223775432331\r
2022-07-16,55.17072492194385\r
2022-07-18,57.976225745566104\r
2022-07-31,59.87626209275013\r
2022-08-02,59.87626209275013\r
2022-08-07,59.87626209275013\r
2022-08-10,59.87626209275013\r
2022-08-12,59.87626209275013\r
2022-08-17,66.71080991444529\r
2022-08-20,53.33035615136835\r
2022-08-22,56.099921667674536\r
2022-08-25,51.51417635207787\r
2022-08-30,57.03509611157399\r
2022-09-01,52.419230760464416\r
2022-09-04,57.976225745566104\r
2022-09-06,60.83512530937195\r
2022-10-04,52.419230760464416\r
2022-10-09,56.099921667674536\r
2022-11-23,63.746840212686514\r
2023-02-08,56.099921667674536\r
2023-02-13,60.83512530937195\r
2023-02-21,57.03509611157399\r
2023-03-03,67.71031821140745\r
2023-04-27,65.71704763212554\r
2023-05-04,67.71031821140745\r
2023-05-24,93.37501171171077\r
2023-05-27,100.0\r
2023-05-29,85.56311641277541\r
2023-06-01,86.66293984270685\r
2023-06-03,87.76817625438179\r
2023-06-06,87.76817625438179\r
2023-06-08,91.11620790324977\r
2023-06-11,89.9948256682048\r
2023-06-13,85.56311641277541\r
2023-06-18,86.66293984270685\r
2023-06-23,85.56311641277541\r
2023-06-26,81.21827107145998\r
2023-07-06,80.14575300660933\r
2023-07-08,81.21827107145998\r
2023-07-11,72.79337694828004\r
2023-07-18,72.79337694828004\r
`;export{r as default};
