const n=`date,value\r
2017-04-02,196873.03606247396\r
2017-04-05,196873.03606247396\r
2017-04-12,196873.03606247396\r
2017-04-22,312223.5323785078\r
2017-04-25,312223.5323785078\r
2017-05-02,353483.9525954368\r
2017-05-05,342335.1951846415\r
2017-05-12,342335.1951846415\r
2017-05-22,338181.48765653983\r
2017-05-25,338181.48765653983\r
2017-06-01,338181.48765653983\r
2017-06-04,198053.67773202603\r
2017-06-11,198053.67773202603\r
2017-06-21,393314.3650415014\r
2017-06-24,393314.3650415014\r
2017-07-01,331291.75751778716\r
2017-08-05,258341.41521293664\r
2017-08-13,258341.41521293664\r
2017-08-15,260899.69949963878\r
2017-10-04,352084.6462193147\r
2017-10-12,352084.6462193147\r
2017-10-14,374666.94160838664\r
2017-10-22,138463.76943488588\r
2017-12-18,277706.78989676444\r
2017-12-28,277706.78989676444\r
2018-01-22,222093.46884075247\r
2018-01-25,222093.46884075247\r
2018-01-30,219653.44128797407\r
2018-02-16,194517.9665056918\r
2018-02-21,194517.9665056918\r
2018-02-24,194517.9665056918\r
2018-02-26,194517.9665056918\r
2018-04-17,25103.410643531348\r
2018-04-20,25103.410643531348\r
2018-04-25,25103.410643531348\r
2018-05-07,325809.98182197753\r
2018-05-10,325809.98182197753\r
2018-05-15,325809.98182197753\r
2018-05-17,339564.4066538863\r
2018-05-20,279012.3046687161\r
2018-05-22,386110.91976115265\r
2018-05-25,386110.91976115265\r
2018-06-26,349290.9157034329\r
2018-06-29,349290.9157034329\r
2018-07-04,314927.2426929104\r
2018-07-06,314927.2426929104\r
2018-07-11,342335.1951846415\r
2018-07-14,342335.1951846415\r
2018-07-19,342335.1951846415\r
2018-07-21,342335.1951846415\r
2018-07-24,226997.11284641424\r
2018-07-26,264750.92880337214\r
2018-07-31,264750.92880337214\r
2018-08-05,318995.57653313514\r
2018-08-08,298808.0502289012\r
2018-08-13,298808.0502289012\r
2018-10-09,234411.02222828218\r
2018-10-19,234411.02222828218\r
2018-10-24,244403.89204382658\r
2018-10-27,244403.89204382658\r
2018-10-29,244403.89204382658\r
2018-11-01,244403.89204382658\r
2018-11-03,254517.86701216953\r
2018-11-06,245661.55825581338\r
2018-11-13,245661.55825581338\r
2018-11-18,211175.88517335657\r
2018-11-23,238144.0243930687\r
2018-11-26,238144.0243930687\r
2018-12-03,179414.7085748067\r
2019-02-26,253247.0670666075\r
2019-03-11,253247.0670666075\r
2019-03-13,253247.0670666075\r
2019-05-22,339564.4066538863\r
2019-05-25,339564.4066538863\r
2019-05-27,339564.4066538863\r
2019-05-30,339564.4066538863\r
2019-06-01,339564.4066538863\r
2019-06-06,383240.4834444762\r
2019-06-09,324443.7297321977\r
2019-06-11,324443.7297321977\r
2019-06-14,324443.7297321977\r
2019-06-21,356287.4342279234\r
2019-06-26,356287.4342279234\r
2019-06-29,356287.4342279234\r
2019-07-01,416624.9594265353\r
2019-07-04,416624.9594265353\r
2019-07-06,416624.9594265353\r
2019-07-09,376091.9168378179\r
2019-07-11,376091.9168378179\r
2019-07-14,376091.9168378179\r
2019-07-16,432876.8291288904\r
2019-07-21,364736.64016352315\r
2019-07-24,364736.64016352315\r
2019-07-29,364736.64016352315\r
2019-07-31,364736.64016352315\r
2019-08-30,390428.3095834984\r
2019-09-02,390428.3095834984\r
2019-09-04,338181.48765653983\r
2019-09-07,346503.71278374613\r
2019-09-14,323079.1602102338\r
2019-09-17,336800.22255963314\r
2019-09-19,325809.98182197753\r
2019-09-22,353483.9525954368\r
2019-09-24,353483.9525954368\r
2019-10-02,332666.37880971003\r
2019-10-04,332666.37880971003\r
2019-11-03,345112.5659482502\r
2019-11-08,345112.5659482502\r
2019-11-11,345112.5659482502\r
2019-11-13,345112.5659482502\r
2019-11-18,345112.5659482502\r
2019-12-03,347896.49694195355\r
2019-12-08,347896.49694195355\r
2019-12-13,352084.6462193147\r
2019-12-23,336800.22255963314\r
2019-12-26,336800.22255963314\r
2020-02-06,386110.91976115265\r
2020-02-11,386110.91976115265\r
2020-03-02,376091.9168378179\r
2020-03-12,376091.9168378179\r
2020-03-17,381807.61961284024\r
2020-03-25,309526.6602802822\r
2020-03-27,309526.6602802822\r
2020-03-30,309526.6602802822\r
2020-04-01,309526.6602802822\r
2020-04-11,364736.64016352315\r
2020-04-14,364736.64016352315\r
2020-04-16,364736.64016352315\r
2020-04-19,364736.64016352315\r
2020-04-21,383240.4834444762\r
2020-04-26,376091.9168378179\r
2020-05-01,418094.8612869857\r
2020-05-06,373243.5515319576\r
2020-05-09,403464.3733374062\r
2020-05-11,403464.3733374062\r
2020-05-14,359097.3900303162\r
2020-05-19,359097.3900303162\r
2020-05-21,359097.3900303162\r
2020-05-26,276403.06971515995\r
2020-05-29,276403.06971515995\r
2020-05-31,328547.52200932865\r
2020-06-05,328547.52200932865\r
2020-06-08,328547.52200932865\r
2020-06-15,284252.240245843\r
2020-06-25,366150.4663981757\r
2020-06-28,366150.4663981757\r
2020-07-05,366150.4663981757\r
2020-07-08,366150.4663981757\r
2020-07-10,407837.4820336991\r
2020-07-13,380376.3285814796\r
2020-07-20,381807.61961284024\r
2020-07-30,361913.7989612727\r
2020-08-02,361913.7989612727\r
2020-08-04,402009.7418856782\r
2020-08-09,419566.27787448483\r
2020-08-12,419566.27787448483\r
2020-08-17,404920.5420399266\r
2020-09-13,394759.7243058816\r
2020-09-16,394759.7243058816\r
2020-09-18,394759.7243058816\r
2020-09-21,394759.7243058816\r
2020-09-26,394759.7243058816\r
2020-12-17,184023.71933766938\r
2020-12-20,184023.71933766938\r
2020-12-27,184023.71933766938\r
2021-02-05,329918.80429332715\r
2021-04-21,186341.01655380358\r
2021-04-24,186341.01655380358\r
2021-04-26,292165.3972131091\r
2021-04-29,292165.3972131091\r
2021-05-01,292165.3972131091\r
2021-05-11,260899.69949963878\r
2021-05-14,260899.69949963878\r
2021-05-16,260899.69949963878\r
2021-05-19,260899.69949963878\r
2021-05-21,260899.69949963878\r
2021-05-31,314927.2426929104\r
2021-06-05,342335.1951846415\r
2021-06-08,342335.1951846415\r
2021-06-13,327177.9135522232\r
2021-06-15,386110.91976115265\r
2021-06-20,377518.47472870845\r
2021-06-23,377518.47472870845\r
2021-06-25,377518.47472870845\r
2021-07-15,342335.1951846415\r
2021-07-18,342335.1951846415\r
2021-07-20,342335.1951846415\r
2021-07-28,273801.02715258393\r
2021-08-14,286882.885843056\r
2021-08-17,284252.240245843\r
2021-08-22,284252.240245843\r
2021-08-24,284252.240245843\r
2021-08-29,244403.89204382658\r
2021-09-03,244403.89204382658\r
2021-09-06,244403.89204382658\r
2021-09-23,224541.37125672767\r
2021-09-26,224541.37125672767\r
2021-10-01,224541.37125672767\r
2021-10-03,224541.37125672767\r
2021-12-17,234411.02222828218\r
2022-01-01,353483.9525954368\r
2022-02-25,217221.32473110865\r
2022-03-12,225768.26436837835\r
2022-03-17,225768.26436837835\r
2022-03-20,225768.26436837835\r
2022-03-22,233170.53289034282\r
2022-03-25,205180.70371855918\r
2022-03-27,205180.70371855918\r
2022-03-30,205180.70371855918\r
2022-04-01,205180.70371855918\r
2022-04-16,410760.54363169806\r
2022-04-19,410760.54363169806\r
2022-04-21,410760.54363169806\r
2022-04-24,410760.54363169806\r
2022-04-26,288200.8661969143\r
2022-04-29,286882.885843056\r
2022-05-31,214797.15575514958\r
2022-06-08,214797.15575514958\r
2022-06-10,214797.15575514958\r
2022-06-25,263465.3502943559\r
2022-06-28,263465.3502943559\r
2022-07-03,280319.6105466662\r
2022-07-05,288200.8661969143\r
2022-07-10,334042.6653094283\r
2022-07-15,271206.2052268042\r
2022-07-18,329918.80429332715\r
2022-07-20,267327.5735650079\r
2022-08-09,187502.84375498575\r
2022-08-12,187502.84375498575\r
2022-08-17,177123.08497932387\r
2022-08-19,177123.08497932387\r
2022-10-08,181714.93512608804\r
2022-10-11,181714.93512608804\r
2022-10-13,181714.93512608804\r
2022-10-18,251978.13160255062\r
2022-10-23,222093.46884075247\r
2022-11-12,83801.26646343525\r
2022-11-15,83801.26646343525\r
2022-11-17,83801.26646343525\r
2022-11-22,83801.26646343525\r
2022-12-07,251978.13160255062\r
2022-12-10,251978.13160255062\r
2022-12-15,251978.13160255062\r
2022-12-17,251978.13160255062\r
2022-12-27,269911.51091203664\r
2023-01-21,218436.39185919813\r
2023-01-26,213588.06316877418\r
2023-02-15,223316.43793171726\r
2023-05-16,352084.6462193147\r
2023-05-19,352084.6462193147\r
2023-05-21,356287.4342279234\r
2023-05-24,356287.4342279234\r
2023-05-26,356287.4342279234\r
2023-05-29,31792.35319519134\r
2023-05-31,19498.263296335987\r
2023-06-15,336800.22255963314\r
2023-06-20,336800.22255963314\r
2023-06-23,336800.22255963314\r
2023-06-25,387548.4873979468\r
2023-07-03,297476.0247784172\r
2023-07-05,298808.0502289012\r
`;export{n as default};