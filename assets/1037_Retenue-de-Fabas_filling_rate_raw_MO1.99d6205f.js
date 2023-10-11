const n=`date,value\r
2017-01-26,65.05103897733963\r
2017-02-15,63.755341031914426\r
2017-02-25,65.64009219413424\r
2017-03-17,62.26561109309371\r
2017-04-06,69.05254687153942\r
2017-05-16,58.25196445064621\r
2017-07-05,65.17706054715171\r
2017-08-14,55.3708048406881\r
2017-09-08,45.869086416248734\r
2017-10-08,44.48269894191894\r
2017-10-13,46.479484004104805\r
2017-11-07,46.04823263139433\r
2017-11-17,45.76175175100535\r
2017-11-22,44.97814096904983\r
2017-11-27,46.04823263139433\r
2017-12-07,49.438347239109724\r
2017-12-12,44.095181558258126\r
2018-02-15,61.895692750641\r
2018-02-25,62.43034224580105\r
2018-03-02,68.06338124077213\r
2018-04-21,81.28872987707152\r
2018-05-11,89.4147419334941\r
2018-05-21,86.23651777124543\r
2018-06-20,98.75473738759104\r
2018-06-25,97.8421660782582\r
2018-07-25,93.68431055091449\r
2018-08-04,88.25294840858693\r
2018-08-19,99.72220196401297\r
2018-09-03,86.47545288208073\r
2018-09-23,95.6277341478903\r
2018-09-28,97.2359349268904\r
2018-10-03,91.21942210276762\r
2018-10-23,83.67527019548643\r
2018-11-17,83.25182550304241\r
2018-11-27,83.25182550304241\r
2018-12-17,84.90406214299469\r
2019-01-26,12.670482984793463\r
2019-02-15,93.13946102119709\r
2019-02-20,86.23651777124543\r
2019-02-25,96.53084029111564\r
2019-03-22,91.9557373836719\r
2019-03-27,93.8827973635998\r
2019-05-01,90.48581061661477\r
2019-05-06,96.12898127663792\r
2019-05-16,100.0\r
2019-07-05,100.0\r
2019-07-10,98.34867258017145\r
2019-07-15,100.0\r
2019-07-25,100.0\r
2019-08-04,95.17763495730807\r
2019-08-09,91.70999865170863\r
2019-08-14,93.13946102119709\r
2019-08-24,94.77836091444799\r
2019-09-03,94.77836091444799\r
2019-09-13,92.69475457288166\r
2019-10-08,80.26898382808167\r
2019-10-13,88.4460988198278\r
2020-01-06,84.09969557585251\r
2020-01-11,83.392864741892\r
2020-01-16,78.2471415160949\r
2020-02-20,74.45277423855856\r
2020-03-21,87.0501284265227\r
2020-03-26,75.39329012348584\r
2020-04-05,82.595084046041\r
2020-04-10,92.5467350726043\r
2020-04-15,87.77091605879063\r
2020-05-05,84.28864375426677\r
2020-05-20,99.92642735435359\r
2020-05-25,90.58346919411704\r
2020-05-30,97.53883545321645\r
2020-07-14,89.56045381323588\r
2020-07-19,88.63944201690632\r
2020-07-24,80.26898382808167\r
2020-08-08,78.20146436029702\r
2020-09-02,61.895692750641\r
2020-09-12,55.87900241618545\r
2020-09-17,55.761537904040445\r
2020-11-11,54.2447782387939\r
2020-11-21,56.03579731041995\r
2020-11-26,51.98655256720107\r
2021-02-19,86.09330160739869\r
2021-02-24,91.85740586154853\r
2021-03-01,82.87625386366595\r
2021-03-31,88.5910881459637\r
2021-04-05,92.59606290496932\r
2021-04-15,92.5467350726043\r
2021-05-20,84.19414546353765\r
2021-06-14,94.42962490993052\r
2021-07-19,86.18876697358098\r
2021-08-28,66.27391000580523\r
2021-09-12,63.46441205773618\r
2021-10-07,55.44885108500283\r
2021-10-12,57.25775487484489\r
2021-10-17,44.165524102057596\r
2021-10-27,49.66083542573545\r
2021-12-11,70.30903708586482\r
2021-12-16,56.783311368047585\r
2022-01-15,67.8064100865531\r
2022-01-25,65.3031934714771\r
2022-02-09,67.97767487710443\r
2022-03-21,78.79621709020356\r
2022-03-26,69.70116399023657\r
2022-04-05,77.56326321104635\r
2022-06-19,89.17212956268938\r
2022-07-14,69.8745960801344\r
2022-07-24,71.83925590808671\r
2022-08-03,73.34014557466332\r
2022-08-23,52.55652025067034\r
2022-08-28,55.99657978078819\r
2022-09-22,46.51550445717612\r
2022-10-02,51.98655256720107\r
2022-10-07,52.21419910503716\r
2022-11-06,43.639203306441985\r
2022-11-11,38.60118635869675\r
2022-11-16,44.69472442168424\r
2023-01-10,48.62646191979021\r
2023-02-04,50.14445745510345\r
2023-02-09,45.90489015094096\r
2023-03-16,49.0685475374741\r
2023-04-05,48.47950610149872\r
2023-06-24,67.8064100865531\r
2023-07-14,65.68226018476102\r
2023-07-29,62.306775250191585\r
2023-08-08,62.801713784982184\r
2023-08-18,63.71374255495954\r
2023-08-23,60.14220910152992\r
2023-09-07,58.17214016896127\r
2023-09-27,58.571761276783086\r
2023-10-07,54.515610472793504\r
`;export{n as default};
