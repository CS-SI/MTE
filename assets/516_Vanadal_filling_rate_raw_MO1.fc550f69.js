const n=`date,value\r
2017-02-19,50.416492426300906\r
2017-03-11,45.67059243568895\r
2017-04-10,75.57906022973296\r
2017-04-20,82.4572626229809\r
2017-06-19,67.84507370360564\r
2017-07-04,70.0224221976492\r
2017-07-14,59.39960559951169\r
2017-07-29,74.45488374679734\r
2017-08-13,74.45488374679734\r
2017-08-18,80.13931668926918\r
2017-08-23,73.33710812226066\r
2017-09-02,57.355287816425346\r
2017-09-07,73.33710812226066\r
2017-09-17,61.47096281545905\r
2017-09-27,59.39960559951169\r
2017-10-07,55.33823914528584\r
2017-10-12,45.67059243568895\r
2017-10-17,45.67059243568895\r
2017-10-22,42.003327068660504\r
2017-10-27,38.453672633701565\r
2017-11-01,52.364315768666856\r
2017-11-16,45.67059243568895\r
2017-11-21,44.74288174329486\r
2017-11-26,49.45311378894656\r
2018-02-04,68.93048737883669\r
2018-02-09,66.76620621474106\r
2018-02-14,71.12085345599895\r
2018-03-26,60.43191836515217\r
2018-04-05,66.76620621474106\r
2018-04-10,76.7096144485539\r
2018-04-20,73.33710812226066\r
2018-04-25,95.64806156021874\r
2018-05-20,90.7656968469339\r
2018-05-25,93.19475293222895\r
2018-06-09,89.56031186165974\r
2018-06-19,77.84652357624624\r
2018-07-04,94.4183852400185\r
2018-07-09,78.98976507485983\r
2018-07-14,64.62821170964156\r
2018-07-19,75.57906022973296\r
2018-07-24,88.3610484819102\r
2018-07-29,68.93048737883669\r
2018-08-03,98.12547101946932\r
2018-08-28,77.84652357624624\r
2018-09-22,88.3610484819102\r
2018-09-27,87.16792666918622\r
2018-10-02,76.7096144485539\r
2018-10-12,68.93048737883669\r
2018-10-22,61.47096281545905\r
2019-01-25,1.3799678893243639\r
2019-01-30,46.60550584710807\r
2019-02-04,5.403434242560262\r
2019-02-14,10.65041116263719\r
2019-03-01,12.304454126316418\r
2019-03-11,31.71754905805943\r
2019-03-16,21.857743286113777\r
2019-03-21,37.584928636222756\r
2019-03-31,33.35531561936698\r
2019-04-05,35.870132269533244\r
2019-04-15,22.5662799061461\r
2019-04-30,46.60550584710807\r
2019-05-10,63.56913654668644\r
2019-06-04,80.13931668926918\r
2019-06-19,65.6939103018372\r
2019-06-24,39.32992483206918\r
2019-06-29,62.51671129422125\r
2019-07-19,54.34001443845331\r
2019-07-24,47.547586816016576\r
2019-07-29,36.723734387832735\r
2019-08-03,34.185878287482396\r
2019-08-08,29.320017060730365\r
2019-08-23,31.71754905805943\r
2019-09-07,29.320017060730365\r
2019-09-12,17.14289063756652\r
2019-09-17,20.46655492400104\r
2019-09-27,11.191682049670568\r
2019-10-02,8.100255737997742\r
2019-10-07,4.598834546079834\r
2019-10-27,8.589005445136431\r
2019-11-06,1.6352459815099114\r
2019-11-16,2.193521968337011\r
2020-02-04,1.1414676746436687\r
2020-02-24,8.589005445136431\r
2020-04-04,25.485188159010836\r
2020-04-09,41.104791637444485\r
2020-04-14,44.74288174329486\r
2020-04-24,50.416492426300906\r
2020-05-04,50.416492426300906\r
2020-05-24,68.93048737883669\r
2020-06-03,55.33823914528584\r
2020-06-23,68.93048737883669\r
2020-06-28,63.56913654668644\r
2020-07-03,35.870132269533244\r
2020-07-08,59.39960559951169\r
2020-07-23,89.56031186165974\r
2020-08-02,47.547586816016576\r
2020-08-07,34.185878287482396\r
2020-08-22,21.157812322696703\r
2020-08-27,19.784040951262604\r
2020-09-06,10.11937783412742\r
2020-09-16,17.78968962141194\r
2020-09-26,19.11034231751573\r
2020-11-05,18.445533093486702\r
2020-11-10,42.90921229984027\r
2020-11-20,20.46655492400104\r
2021-01-24,40.213644488172505\r
2021-02-08,49.45311378894656\r
2021-02-23,52.364315768666856\r
2021-02-28,53.34869638733599\r
2021-03-15,51.386903854543206\r
2021-03-30,64.62821170964156\r
2021-04-19,82.4572626229809\r
2021-05-04,75.57906022973296\r
2021-05-09,83.6256137926115\r
2021-06-08,96.88376303613701\r
2021-06-13,81.29515644112392\r
2021-06-18,99.37316706637057\r
2021-07-03,75.57906022973296\r
2021-07-13,64.62821170964156\r
2021-07-18,74.45488374679734\r
2021-07-23,93.19475293222895\r
2021-07-28,80.13931668926918\r
2021-08-02,58.3740525864874\r
2021-08-22,75.57906022973296\r
2021-08-27,53.34869638733599\r
2021-09-01,36.723734387832735\r
2021-09-06,49.45311378894656\r
2021-09-11,47.547586816016576\r
2021-09-21,47.547586816016576\r
2021-10-01,47.547586816016576\r
2021-10-06,42.90921229984027\r
2021-10-11,56.343340213120705\r
2021-10-16,43.82240955522884\r
2021-11-05,46.60550584710807\r
2021-11-20,43.82240955522884\r
2022-01-24,62.51671129422125\r
2022-01-29,55.33823914528584\r
2022-02-08,45.67059243568895\r
2022-02-18,42.003327068660504\r
2022-02-23,51.386903854543206\r
2022-02-28,46.60550584710807\r
2022-03-25,84.80018876747695\r
2022-04-09,72.22575678077762\r
2022-04-14,57.355287816425346\r
2022-04-19,82.4572626229809\r
2022-04-29,82.4572626229809\r
2022-05-09,100.0\r
2022-05-14,91.9771837059691\r
2022-05-19,96.88376303613701\r
2022-05-24,98.12547101946932\r
2022-07-03,100.0\r
2022-07-08,88.3610484819102\r
2022-07-13,91.9771837059691\r
2022-07-18,100.0\r
2022-08-02,68.93048737883669\r
2022-08-07,64.62821170964156\r
2022-08-12,73.33710812226066\r
2022-08-22,94.4183852400185\r
2022-09-01,63.56913654668644\r
2022-09-06,71.12085345599895\r
2022-09-16,47.547586816016576\r
2022-09-26,51.386903854543206\r
2022-10-01,44.74288174329486\r
2022-10-06,64.62821170964156\r
2022-11-05,53.34869638733599\r
2022-11-20,42.003327068660504\r
2023-01-29,49.45311378894656\r
2023-02-03,50.416492426300906\r
2023-02-08,43.82240955522884\r
2023-02-13,56.343340213120705\r
2023-02-18,51.386903854543206\r
2023-03-05,57.355287816425346\r
2023-03-10,75.57906022973296\r
2023-03-25,57.355287816425346\r
2023-04-14,73.33710812226066\r
2023-04-19,89.56031186165974\r
2023-04-24,71.12085345599895\r
2023-04-29,77.84652357624624\r
2023-05-24,100.0\r
2023-06-03,100.0\r
2023-06-18,84.80018876747695\r
2023-06-23,81.29515644112392\r
2023-07-03,85.98096661936569\r
2023-07-08,88.3610484819102\r
2023-07-13,77.84652357624624\r
2023-07-18,89.56031186165974\r
2023-07-23,72.22575678077762\r
2023-08-02,56.343340213120705\r
2023-08-07,67.84507370360564\r
2023-08-12,59.39960559951169\r
2023-08-22,54.34001443845331\r
2023-09-06,61.47096281545905\r
2023-09-11,60.43191836515217\r
2023-09-26,56.343340213120705\r
2023-10-01,53.34869638733599\r
`;export{n as default};
