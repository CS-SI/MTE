const n=`date,value\r
2017-02-19,48.11600254030862\r
2017-02-22,48.11600254030862\r
2017-02-26,48.11600254030862\r
2017-03-01,48.11600254030862\r
2017-03-11,43.5866565859437\r
2017-03-14,43.5866565859437\r
2017-04-10,72.13040969329462\r
2017-04-17,72.13040969329462\r
2017-04-20,82.0576801197181\r
2017-04-23,78.69476171183422\r
2017-06-19,64.74932272295779\r
2017-06-22,64.74932272295779\r
2017-06-26,64.74932272295779\r
2017-06-29,64.74932272295779\r
2017-07-04,66.82731943849059\r
2017-07-06,66.82731943849059\r
2017-07-07,66.82731943849059\r
2017-07-12,66.82731943849059\r
2017-07-14,66.82731943849059\r
2017-07-17,56.68921887212559\r
2017-07-19,56.68921887212559\r
2017-07-21,56.68921887212559\r
2017-07-22,56.68921887212559\r
2017-07-24,56.68921887212559\r
2017-07-29,71.05752905631346\r
2017-07-31,71.05752905631346\r
2017-08-03,71.05752905631346\r
2017-08-05,71.05752905631346\r
2017-08-06,71.05752905631346\r
2017-08-08,73.20937705192759\r
2017-08-13,73.20937705192759\r
2017-08-15,73.20937705192759\r
2017-08-18,92.46298510702356\r
2017-08-20,92.46298510702356\r
2017-08-21,92.46298510702356\r
2017-08-23,71.05752905631346\r
2017-08-25,91.28366833005298\r
2017-08-26,91.28366833005298\r
2017-08-30,69.99075720842414\r
2017-09-02,69.99075720842414\r
2017-09-04,54.738182714900454\r
2017-09-05,54.738182714900454\r
2017-09-07,74.29440934678844\r
2017-09-10,74.29440934678844\r
2017-09-12,74.29440934678844\r
2017-09-14,69.99075720842414\r
2017-09-17,69.99075720842414\r
2017-09-20,58.6660606607546\r
2017-09-22,58.6660606607546\r
2017-09-27,65.78520928787593\r
2017-10-04,56.68921887212559\r
2017-10-05,56.68921887212559\r
2017-10-07,59.66409194058233\r
2017-10-09,52.813171387975125\r
2017-10-10,52.813171387975125\r
2017-10-12,53.772409986414004\r
2017-10-14,53.772409986414004\r
2017-10-15,53.772409986414004\r
2017-10-17,49.04213437732021\r
2017-10-19,50.91441088742057\r
2017-10-20,50.91441088742057\r
2017-10-22,40.086727471004416\r
2017-10-24,48.11600254030862\r
2017-10-25,48.11600254030862\r
2017-10-27,40.086727471004416\r
2017-10-29,41.82280575278294\r
2017-10-30,41.82280575278294\r
2017-11-01,40.95127742255828\r
2017-11-03,50.91441088742057\r
2017-11-06,50.91441088742057\r
2017-11-09,49.974947270078445\r
2017-11-16,43.5866565859437\r
2017-11-18,43.5866565859437\r
2017-11-19,43.5866565859437\r
2017-11-21,49.974947270078445\r
2017-11-23,49.974947270078445\r
2017-11-26,45.37800425861271\r
2017-11-28,51.860495384186\r
2017-11-29,51.860495384186\r
2017-12-01,47.19658258998222\r
2017-12-03,48.11600254030862\r
2017-12-06,48.11600254030862\r
2018-02-04,65.78520928787593\r
2018-02-07,65.78520928787593\r
2018-02-09,75.38548506832716\r
2018-02-11,75.38548506832716\r
2018-02-12,75.38548506832716\r
2018-02-14,67.87562959799584\r
2018-02-16,68.93011650542122\r
2018-02-19,68.93011650542122\r
2018-02-21,67.87562959799584\r
2018-02-24,67.87562959799584\r
2018-03-26,71.05752905631346\r
2018-03-31,57.67442750651362\r
2018-04-05,67.87562959799584\r
2018-04-10,85.47370087964345\r
2018-04-15,85.47370087964345\r
2018-04-17,73.20937705192759\r
2018-04-18,73.20937705192759\r
2018-04-20,74.29440934678844\r
2018-04-22,69.99075720842414\r
2018-04-25,98.44520628108255\r
2018-04-27,98.44520628108255\r
2018-04-28,98.44520628108255\r
2018-04-30,98.44520628108255\r
2018-05-03,91.28366833005298\r
2018-05-05,91.28366833005298\r
2018-05-20,86.62408449862056\r
2018-05-25,99.65865739436171\r
2018-06-01,88.9423034612241\r
2018-06-02,88.9423034612241\r
2018-06-09,85.47370087964345\r
2018-06-14,85.47370087964345\r
2018-06-16,85.47370087964345\r
2018-06-17,85.47370087964345\r
2018-06-19,88.9423034612241\r
2018-06-21,74.29440934678844\r
2018-06-22,74.29440934678844\r
2018-06-24,74.29440934678844\r
2018-06-26,74.29440934678844\r
2018-06-27,74.29440934678844\r
2018-06-29,74.29440934678844\r
2018-07-04,90.1101017826974\r
2018-07-06,90.1101017826974\r
2018-07-07,90.1101017826974\r
2018-07-09,94.83879835539001\r
2018-07-11,94.83879835539001\r
2018-07-12,94.83879835539001\r
2018-07-14,82.0576801197181\r
2018-07-17,86.62408449862056\r
2018-07-19,74.29440934678844\r
2018-07-21,88.9423034612241\r
2018-07-22,88.9423034612241\r
2018-07-24,80.9307808177869\r
2018-07-26,90.1101017826974\r
2018-07-27,90.1101017826974\r
2018-07-29,71.05752905631346\r
2018-07-31,87.78029156463373\r
2018-08-01,87.78029156463373\r
2018-08-03,87.78029156463373\r
2018-08-05,96.03525981374915\r
2018-08-06,96.03525981374915\r
2018-08-08,96.03525981374915\r
2018-08-10,93.64803431622182\r
2018-08-11,93.64803431622182\r
2018-08-13,93.64803431622182\r
2018-08-28,93.64803431622182\r
2018-08-30,93.64803431622182\r
2018-08-31,93.64803431622182\r
2018-09-02,93.64803431622182\r
2018-09-04,74.29440934678844\r
2018-09-05,74.29440934678844\r
2018-09-07,76.48258297691316\r
2018-09-22,84.32915953911127\r
2018-09-24,84.32915953911127\r
2018-09-25,84.32915953911127\r
2018-09-27,100.0\r
2018-09-29,100.0\r
2018-10-02,79.80980135740448\r
2018-10-04,91.28366833005298\r
2018-10-05,91.28366833005298\r
2018-10-09,73.20937705192759\r
2018-10-12,74.29440934678844\r
2018-10-14,65.78520928787593\r
2018-10-19,65.78520928787593\r
2018-10-20,65.78520928787593\r
2018-10-22,66.82731943849059\r
2018-10-24,58.6660606607546\r
2018-10-25,58.6660606607546\r
2018-10-30,58.6660606607546\r
2019-01-25,10.681008852796655\r
2019-01-27,25.76288210725676\r
2019-01-28,25.76288210725676\r
2019-01-30,26.49490410418684\r
2019-02-04,7.2746334295524715\r
2019-02-06,7.2746334295524715\r
2019-02-09,7.2746334295524715\r
2019-02-11,44.4789101703153\r
2019-02-12,44.4789101703153\r
2019-02-14,12.842748683530733\r
2019-02-16,12.842748683530733\r
2019-02-17,12.842748683530733\r
2019-02-19,12.842748683530733\r
2019-02-21,10.1644359989123\r
2019-02-22,10.1644359989123\r
2019-02-27,10.1644359989123\r
2019-03-01,18.88130091675965\r
2019-03-03,11.743005463230121\r
2019-03-08,11.743005463230121\r
2019-03-11,31.83332226890525\r
2019-03-13,31.83332226890525\r
2019-03-16,22.913388227301805\r
2019-03-18,31.83332226890525\r
2019-03-19,31.83332226890525\r
2019-03-21,29.50000582505648\r
2019-03-23,29.50000582505648\r
2019-03-24,29.50000582505648\r
2019-03-26,29.50000582505648\r
2019-03-28,40.95127742255828\r
2019-03-29,40.95127742255828\r
2019-03-31,31.83332226890525\r
2019-04-02,39.22919195017961\r
2019-04-05,34.233388566748026\r
2019-04-07,39.22919195017961\r
2019-04-08,39.22919195017961\r
2019-04-13,39.22919195017961\r
2019-04-15,29.50000582505648\r
2019-04-17,35.04804106865601\r
2019-04-18,35.04804106865601\r
2019-04-20,35.04804106865601\r
2019-04-22,21.536587117334037\r
2019-04-27,21.536587117334037\r
2019-04-30,45.37800425861271\r
2019-05-02,44.4789101703153\r
2019-05-05,44.4789101703153\r
2019-05-07,44.4789101703153\r
2019-05-10,60.66849533487088\r
2019-05-12,60.66849533487088\r
2019-05-13,60.66849533487088\r
2019-05-15,60.66849533487088\r
2019-05-23,60.66849533487088\r
2019-06-04,76.48258297691316\r
2019-06-06,76.48258297691316\r
2019-06-07,76.48258297691316\r
2019-06-11,76.48258297691316\r
2019-06-12,76.48258297691316\r
2019-06-19,62.69631628155542\r
2019-06-22,62.69631628155542\r
2019-06-24,64.74932272295779\r
2019-06-26,64.74932272295779\r
2019-06-27,64.74932272295779\r
2019-06-29,55.71046154480792\r
2019-07-01,55.71046154480792\r
2019-07-02,55.71046154480792\r
2019-07-04,55.71046154480792\r
2019-07-06,63.71968364382613\r
2019-07-07,63.71968364382613\r
2019-07-11,59.66409194058233\r
2019-07-12,59.66409194058233\r
2019-07-14,64.74932272295779\r
2019-07-19,56.68921887212559\r
2019-07-21,56.68921887212559\r
2019-07-22,56.68921887212559\r
2019-07-24,49.974947270078445\r
2019-07-26,49.974947270078445\r
2019-07-29,49.04213437732021\r
2019-07-31,45.37800425861271\r
2019-08-03,51.860495384186\r
2019-08-05,42.70127706262289\r
2019-08-06,42.70127706262289\r
2019-08-08,48.11600254030862\r
2019-08-10,31.048073951488703\r
2019-08-11,31.048073951488703\r
2019-08-15,47.19658258998222\r
2019-08-16,47.19658258998222\r
2019-08-18,47.19658258998222\r
2019-08-20,27.982153209850004\r
2019-08-21,27.982153209850004\r
2019-08-23,44.4789101703153\r
2019-08-25,30.270286519452803\r
2019-08-26,30.270286519452803\r
2019-08-30,30.270286519452803\r
2019-08-31,30.270286519452803\r
2019-09-02,30.270286519452803\r
2019-09-04,30.270286519452803\r
2019-09-05,30.270286519452803\r
2019-09-07,37.53531180092122\r
2019-09-09,27.982153209850004\r
2019-09-12,30.270286519452803\r
2019-09-14,30.270286519452803\r
2019-09-15,30.270286519452803\r
2019-09-17,22.220943367136815\r
2019-09-19,22.220943367136815\r
2019-09-25,22.913388227301805\r
2019-09-27,16.977951258041575\r
2019-09-29,19.532671975428283\r
2019-09-30,19.532671975428283\r
2019-10-02,13.406520452304498\r
2019-10-05,15.152302192544271\r
2019-10-07,6.39455428031371\r
2019-10-10,6.39455428031371\r
2019-10-19,4.388991063293444\r
2019-10-27,8.19709162475012\r
2019-10-29,8.19709162475012\r
2019-10-30,8.19709162475012\r
2019-11-06,9.657633566733674\r
2019-11-08,9.657633566733674\r
2019-11-09,9.657633566733674\r
2019-11-13,1.5606301829778695\r
2019-11-16,4.022881785890932\r
2019-11-26,2.093432198898216\r
2019-11-28,2.093432198898216\r
2019-11-29,2.093432198898216\r
2020-02-04,2.3815501736360867\r
2020-02-07,2.3815501736360867\r
2020-02-09,2.3815501736360867\r
2020-02-11,2.3815501736360867\r
2020-02-12,2.3815501736360867\r
2020-02-19,1.8196276412986447\r
2020-02-24,8.19709162475012\r
2020-02-26,8.19709162475012\r
2020-03-03,8.19709162475012\r
2020-03-07,8.19709162475012\r
2020-03-08,8.19709162475012\r
2020-03-10,8.19709162475012\r
2020-04-04,24.322306435572454\r
2020-04-06,24.322306435572454\r
2020-04-07,24.322306435572454\r
2020-04-09,42.70127706262289\r
2020-04-11,42.70127706262289\r
2020-04-14,36.699042735510936\r
2020-04-24,43.5866565859437\r
2020-04-26,49.974947270078445\r
2020-04-29,49.974947270078445\r
2020-05-04,50.91441088742057\r
2020-05-06,50.91441088742057\r
2020-05-09,50.91441088742057\r
2020-05-14,48.11600254030862\r
2020-05-19,48.11600254030862\r
2020-05-24,65.78520928787593\r
2020-05-26,65.78520928787593\r
2020-05-31,65.78520928787593\r
2020-06-01,65.78520928787593\r
2020-06-03,68.93011650542122\r
2020-06-05,68.93011650542122\r
2020-06-06,68.93011650542122\r
2020-06-08,68.93011650542122\r
2020-06-10,52.813171387975125\r
2020-06-15,52.813171387975125\r
2020-06-23,65.78520928787593\r
2020-06-25,65.78520928787593\r
2020-06-26,65.78520928787593\r
2020-06-28,84.32915953911127\r
2020-06-30,84.32915953911127\r
2020-07-01,84.32915953911127\r
2020-07-03,53.772409986414004\r
2020-07-05,53.772409986414004\r
2020-07-06,53.772409986414004\r
2020-07-08,64.74932272295779\r
2020-07-10,54.738182714900454\r
2020-07-11,54.738182714900454\r
2020-07-15,66.82731943849059\r
2020-07-16,66.82731943849059\r
2020-07-18,66.82731943849059\r
2020-07-20,56.68921887212559\r
2020-07-21,56.68921887212559\r
2020-07-23,87.78029156463373\r
2020-07-25,85.47370087964345\r
2020-07-26,85.47370087964345\r
2020-07-30,85.47370087964345\r
2020-07-31,85.47370087964345\r
2020-08-02,85.47370087964345\r
2020-08-04,85.47370087964345\r
2020-08-05,85.47370087964345\r
2020-08-07,49.974947270078445\r
2020-08-09,49.974947270078445\r
2020-08-10,49.974947270078445\r
2020-08-12,49.974947270078445\r
2020-08-14,49.974947270078445\r
2020-08-15,49.974947270078445\r
2020-08-17,49.974947270078445\r
2020-08-19,32.62598660404013\r
2020-08-20,32.62598660404013\r
2020-08-22,39.22919195017961\r
2020-08-24,20.192387500070698\r
2020-08-25,20.192387500070698\r
2020-08-27,31.83332226890525\r
2020-09-01,31.83332226890525\r
2020-09-03,31.83332226890525\r
2020-09-04,31.83332226890525\r
2020-09-06,13.97943068716638\r
2020-09-08,18.88130091675965\r
2020-09-09,18.88130091675965\r
2020-09-13,9.657633566733674\r
2020-09-14,9.657633566733674\r
2020-09-16,16.977951258041575\r
2020-09-18,16.977951258041575\r
2020-09-21,16.977951258041575\r
2020-09-23,16.977951258041575\r
2020-09-26,20.192387500070698\r
2020-09-28,20.192387500070698\r
2020-09-29,20.192387500070698\r
2020-10-01,20.192387500070698\r
2020-10-03,18.238342955728296\r
2020-10-08,18.238342955728296\r
2020-10-11,18.238342955728296\r
2020-11-05,17.60386878323481\r
2020-11-07,17.60386878323481\r
2020-11-10,40.95127742255828\r
2020-11-12,40.95127742255828\r
2020-11-17,40.95127742255828\r
2020-11-18,40.95127742255828\r
2020-11-20,22.913388227301805\r
2020-11-22,40.95127742255828\r
2020-11-23,40.95127742255828\r
2020-11-25,35.04804106865601\r
2020-11-27,52.813171387975125\r
2020-11-30,52.813171387975125\r
2020-12-02,52.813171387975125\r
2020-12-03,52.813171387975125\r
2021-01-24,46.28390587138941\r
2021-01-26,38.37870758614261\r
2021-01-29,38.37870758614261\r
2021-01-31,38.37870758614261\r
2021-02-03,38.37870758614261\r
2021-02-08,47.19658258998222\r
2021-02-10,47.19658258998222\r
2021-02-11,47.19658258998222\r
2021-02-15,47.19658258998222\r
2021-02-18,47.19658258998222\r
2021-02-23,49.974947270078445\r
2021-02-25,49.974947270078445\r
2021-02-26,49.974947270078445\r
2021-02-28,63.71968364382613\r
2021-03-02,63.71968364382613\r
2021-03-05,49.974947270078445\r
2021-03-07,54.738182714900454\r
2021-03-08,54.738182714900454\r
2021-03-10,54.738182714900454\r
2021-03-15,49.04213437732021\r
2021-03-17,49.04213437732021\r
2021-03-20,49.04213437732021\r
2021-03-22,49.04213437732021\r
2021-03-23,49.04213437732021\r
2021-03-25,49.04213437732021\r
2021-03-30,61.67924520616782\r
2021-04-01,61.67924520616782\r
2021-04-02,61.67924520616782\r
2021-04-06,61.67924520616782\r
2021-04-09,61.67924520616782\r
2021-04-19,78.69476171183422\r
2021-04-24,78.69476171183422\r
2021-04-26,78.69476171183422\r
2021-05-04,72.13040969329462\r
2021-05-06,72.13040969329462\r
2021-05-07,72.13040969329462\r
2021-05-09,83.19047952768753\r
2021-05-11,83.19047952768753\r
2021-05-12,83.19047952768753\r
2021-05-14,83.19047952768753\r
2021-05-19,79.80980135740448\r
2021-06-08,92.46298510702356\r
2021-06-10,92.46298510702356\r
2021-06-11,92.46298510702356\r
2021-06-13,97.23740146844422\r
2021-06-15,97.23740146844422\r
2021-06-16,97.23740146844422\r
2021-06-18,91.28366833005298\r
2021-06-25,94.83879835539001\r
2021-06-26,94.83879835539001\r
2021-06-28,94.83879835539001\r
2021-07-03,72.13040969329462\r
2021-07-05,72.13040969329462\r
2021-07-10,72.13040969329462\r
2021-07-11,72.13040969329462\r
2021-07-13,72.13040969329462\r
2021-07-15,61.67924520616782\r
2021-07-16,61.67924520616782\r
2021-07-18,74.29440934678844\r
2021-07-20,74.29440934678844\r
2021-07-21,74.29440934678844\r
2021-07-23,73.20937705192759\r
2021-07-25,90.1101017826974\r
2021-07-28,78.69476171183422\r
2021-07-30,91.28366833005298\r
2021-08-02,78.69476171183422\r
2021-08-05,80.9307808177869\r
2021-08-09,55.71046154480792\r
2021-08-10,55.71046154480792\r
2021-08-12,55.71046154480792\r
2021-08-22,72.13040969329462\r
2021-08-27,72.13040969329462\r
2021-08-29,72.13040969329462\r
2021-08-30,72.13040969329462\r
2021-09-01,50.91441088742057\r
2021-09-06,44.4789101703153\r
2021-09-08,47.19658258998222\r
2021-09-11,43.5866565859437\r
2021-09-13,49.04213437732021\r
2021-09-18,45.37800425861271\r
2021-09-19,45.37800425861271\r
2021-09-21,49.974947270078445\r
2021-09-23,45.37800425861271\r
2021-09-24,45.37800425861271\r
2021-09-28,45.37800425861271\r
2021-09-29,45.37800425861271\r
2021-10-01,48.11600254030862\r
2021-10-06,45.37800425861271\r
2021-10-11,43.5866565859437\r
2021-10-13,53.772409986414004\r
2021-10-14,53.772409986414004\r
2021-10-16,43.5866565859437\r
2021-10-18,55.71046154480792\r
2021-10-23,41.82280575278294\r
2021-10-24,41.82280575278294\r
2021-10-26,41.82280575278294\r
2021-11-05,44.4789101703153\r
2021-11-20,41.82280575278294\r
2021-11-23,41.82280575278294\r
2021-11-30,66.82731943849059\r
2022-01-24,61.67924520616782\r
2022-01-26,59.66409194058233\r
2022-01-27,59.66409194058233\r
2022-01-29,72.13040969329462\r
2022-02-01,72.13040969329462\r
2022-02-05,52.813171387975125\r
2022-02-06,52.813171387975125\r
2022-02-08,52.813171387975125\r
2022-02-10,43.5866565859437\r
2022-02-11,43.5866565859437\r
2022-02-13,43.5866565859437\r
2022-02-15,43.5866565859437\r
2022-02-18,58.6660606607546\r
2022-02-20,40.086727471004416\r
2022-02-21,40.086727471004416\r
2022-02-23,52.813171387975125\r
2022-02-26,52.813171387975125\r
2022-02-28,42.70127706262289\r
2022-03-02,52.813171387975125\r
2022-03-03,52.813171387975125\r
2022-03-07,44.4789101703153\r
2022-03-08,44.4789101703153\r
2022-03-25,80.9307808177869\r
2022-03-27,80.9307808177869\r
2022-03-28,80.9307808177869\r
2022-04-01,80.9307808177869\r
2022-04-04,80.9307808177869\r
2022-04-09,68.93011650542122\r
2022-04-14,71.05752905631346\r
2022-04-16,71.05752905631346\r
2022-04-17,71.05752905631346\r
2022-04-19,67.87562959799584\r
2022-04-26,78.69476171183422\r
2022-04-27,78.69476171183422\r
2022-04-29,84.32915953911127\r
2022-05-01,78.69476171183422\r
2022-05-02,78.69476171183422\r
2022-05-04,78.69476171183422\r
2022-05-07,78.69476171183422\r
2022-05-09,99.65865739436171\r
2022-05-11,99.65865739436171\r
2022-05-12,99.65865739436171\r
2022-05-14,100.0\r
2022-05-16,100.0\r
2022-05-17,100.0\r
2022-05-19,92.46298510702356\r
2022-05-21,97.23740146844422\r
2022-05-22,97.23740146844422\r
2022-05-24,88.9423034612241\r
2022-05-27,100.0\r
2022-05-29,100.0\r
2022-05-31,93.64803431622182\r
2022-06-01,93.64803431622182\r
2022-07-03,96.03525981374915\r
2022-07-05,96.03525981374915\r
2022-07-06,96.03525981374915\r
2022-07-08,98.44520628108255\r
2022-07-10,98.44520628108255\r
2022-07-11,98.44520628108255\r
2022-07-13,92.46298510702356\r
2022-07-15,100.0\r
2022-07-16,100.0\r
2022-07-18,97.23740146844422\r
2022-07-20,100.0\r
2022-07-21,100.0\r
2022-07-23,100.0\r
2022-07-25,100.0\r
2022-07-26,100.0\r
2022-07-28,100.0\r
2022-08-02,65.78520928787593\r
2022-08-04,65.78520928787593\r
2022-08-05,65.78520928787593\r
2022-08-07,68.93011650542122\r
2022-08-09,68.93011650542122\r
2022-08-10,68.93011650542122\r
2022-08-12,64.74932272295779\r
2022-08-19,69.99075720842414\r
2022-08-20,69.99075720842414\r
2022-08-22,90.1101017826974\r
2022-08-24,90.1101017826974\r
2022-08-25,90.1101017826974\r
2022-08-27,90.1101017826974\r
2022-08-29,90.1101017826974\r
2022-09-01,90.1101017826974\r
2022-09-03,60.66849533487088\r
2022-09-04,60.66849533487088\r
2022-09-06,72.13040969329462\r
2022-09-08,72.13040969329462\r
2022-09-09,72.13040969329462\r
2022-09-11,72.13040969329462\r
2022-09-16,67.87562959799584\r
2022-09-18,45.37800425861271\r
2022-09-19,45.37800425861271\r
2022-09-21,45.37800425861271\r
2022-09-26,51.860495384186\r
2022-09-28,49.04213437732021\r
2022-10-01,50.91441088742057\r
2022-10-03,50.91441088742057\r
2022-10-04,50.91441088742057\r
2022-10-06,50.91441088742057\r
2022-10-11,61.67924520616782\r
2022-10-16,61.67924520616782\r
2022-11-05,50.91441088742057\r
2022-11-10,50.91441088742057\r
2022-11-20,40.086727471004416\r
2022-11-22,40.086727471004416\r
2022-11-25,46.28390587138941\r
2022-11-30,40.086727471004416\r
2022-12-02,42.70127706262289\r
2022-12-05,42.70127706262289\r
2023-01-29,53.772409986414004\r
2023-01-31,51.860495384186\r
2023-02-01,51.860495384186\r
2023-02-03,53.772409986414004\r
2023-02-05,53.772409986414004\r
2023-02-06,53.772409986414004\r
2023-02-08,52.813171387975125\r
2023-02-10,55.71046154480792\r
2023-02-11,55.71046154480792\r
2023-02-13,51.860495384186\r
2023-02-15,61.67924520616782\r
2023-02-16,61.67924520616782\r
2023-02-18,54.738182714900454\r
2023-02-20,61.67924520616782\r
2023-02-21,61.67924520616782\r
2023-02-26,49.974947270078445\r
2023-03-05,53.772409986414004\r
2023-03-07,53.772409986414004\r
2023-03-10,64.74932272295779\r
2023-03-12,64.74932272295779\r
2023-03-13,64.74932272295779\r
2023-03-18,61.67924520616782\r
2023-03-20,61.67924520616782\r
2023-03-25,49.974947270078445\r
2023-03-27,49.974947270078445\r
2023-03-28,49.974947270078445\r
2023-03-30,49.974947270078445\r
2023-04-01,49.974947270078445\r
2023-04-02,49.974947270078445\r
2023-04-14,73.20937705192759\r
2023-04-16,73.20937705192759\r
2023-04-17,73.20937705192759\r
2023-04-19,86.62408449862056\r
2023-04-24,73.20937705192759\r
2023-04-26,84.32915953911127\r
2023-04-29,75.38548506832716\r
2023-05-02,79.80980135740448\r
`;export{n as default};