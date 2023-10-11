const n=`date,value\r
2017-02-25,64.57965364503718\r
2017-03-27,91.33282727908414\r
2017-03-31,91.33282727908414\r
2017-04-03,92.90900474414521\r
2017-04-06,92.90900474414521\r
2017-04-10,92.30801341943042\r
2017-05-16,99.62375847853228\r
2017-05-23,99.62375847853228\r
2017-05-26,99.40443435876742\r
2017-06-02,96.84049146709421\r
2017-06-05,95.1476265614015\r
2017-06-22,92.41020584168137\r
2017-07-02,92.02215172578647\r
2017-07-05,86.44715692930691\r
2017-07-07,86.54839685559115\r
2017-08-14,76.82480847274525\r
2017-08-29,70.76106056494672\r
2017-09-03,70.65072530004271\r
2017-10-15,45.3594918516701\r
2017-10-17,45.3594918516701\r
2017-10-18,39.36702652957015\r
2017-10-20,39.333622987807715\r
2017-10-25,39.48404176437454\r
2017-11-22,15.386746727480135\r
2017-11-29,15.431069198124153\r
2017-12-01,17.59676587717555\r
2017-12-02,17.53416108350921\r
2018-02-22,96.71629113954799\r
2018-02-24,96.67014690059834\r
2018-02-25,96.79431994126425\r
2018-02-27,96.69980988988878\r
2018-03-24,98.5315813013884\r
2018-04-18,96.31561469719796\r
2018-04-20,96.75914844297978\r
2018-04-21,95.6859665267447\r
2018-04-25,96.503233481026\r
2018-05-06,92.92518521642079\r
2018-05-08,96.72178517691678\r
2018-05-11,93.96885544060703\r
2018-05-18,96.20268571049964\r
2018-05-20,94.61394899594532\r
2018-05-21,94.66834254509664\r
2018-06-20,100.0\r
2018-06-22,100.0\r
2018-06-27,99.99611614419965\r
2018-07-02,99.872297554016\r
2018-07-04,99.872297554016\r
2018-07-07,99.75746603251666\r
2018-07-09,97.08801160453602\r
2018-07-10,97.10232166058388\r
2018-07-15,98.36873142263583\r
2018-07-17,96.2651728518894\r
2018-07-19,98.5581808180828\r
2018-07-20,96.66355569443174\r
2018-07-24,96.6492754578489\r
2018-07-25,96.40336863289033\r
2018-07-27,95.35165979810692\r
2018-07-29,92.21232250677429\r
2018-07-30,92.21232250677429\r
2018-08-03,92.37792892417507\r
2018-08-04,92.35318680451456\r
2018-08-06,91.68308743008876\r
2018-08-11,86.67371764327591\r
2018-08-16,85.9105602396687\r
2018-08-26,77.8686606225065\r
2018-08-29,75.96333142830116\r
2018-09-20,57.39932949959778\r
2018-09-22,57.39932949959778\r
2018-09-25,54.811256442776404\r
2018-09-27,54.811256442776404\r
2018-09-28,54.89587717056138\r
2018-09-30,51.311573423587454\r
2018-10-05,49.72535598568505\r
2018-10-10,47.08303074795633\r
2018-10-13,41.11309442366215\r
2018-10-15,47.98691670288817\r
2018-10-17,44.611106579484044\r
2018-10-18,41.542402050400554\r
2018-10-20,35.07307921914301\r
2018-10-22,34.030090607470015\r
2018-11-04,28.549445449931287\r
2018-11-11,28.549445449931287\r
2018-11-14,34.82555816610518\r
2018-11-17,29.045644974405484\r
2018-11-19,28.86091859603225\r
2018-11-22,15.327898244846121\r
2019-02-15,68.05265869065005\r
2019-02-17,72.79438219759471\r
2019-02-20,72.79438219759471\r
2019-02-22,73.08288243287116\r
2019-02-24,73.08288243287116\r
2019-02-25,72.92457642073109\r
2019-02-27,76.8455626157241\r
2019-03-19,86.64655771858038\r
2019-03-21,86.64655771858038\r
2019-03-22,87.91679474740953\r
2019-03-24,87.85791634385342\r
2019-03-29,88.70392766691714\r
2019-03-31,88.70392766691714\r
2019-04-01,87.61418508365382\r
2019-04-11,87.82427969877892\r
2019-04-15,89.79774779307363\r
2019-04-18,91.07721737757848\r
2019-04-20,91.07721737757848\r
2019-04-26,91.11890525183902\r
2019-05-01,93.40038968358465\r
2019-05-06,96.31232464065634\r
2019-05-13,96.5910660885543\r
2019-05-15,96.5910660885543\r
2019-05-16,97.10232166058388\r
2019-05-23,99.31320771138236\r
2019-05-25,99.31320771138236\r
2019-05-26,98.93980391081418\r
2019-06-02,94.89695267391721\r
2019-06-04,94.89695267391721\r
2019-06-05,95.03424064482836\r
2019-06-25,99.89794785460079\r
2019-06-27,96.23666762727758\r
2019-06-29,96.23666762727758\r
2019-06-30,97.75611295635305\r
2019-07-02,97.0792058990211\r
2019-07-04,97.65123812656479\r
2019-07-05,97.71746882891019\r
2019-07-07,97.75721717768717\r
2019-07-09,97.75721717768717\r
2019-07-10,97.35014959587821\r
2019-07-15,97.91186486310936\r
2019-07-17,97.20031659462397\r
2019-07-22,97.31047757453908\r
2019-07-24,97.73182154044216\r
2019-07-25,95.57665668337974\r
2019-07-29,96.65806318074786\r
2019-07-30,96.65806318074786\r
2019-08-01,91.82894317302798\r
2019-08-04,89.9103379996431\r
2019-08-08,89.9103379996431\r
2019-08-09,90.03681385602485\r
2019-08-13,89.33320564108872\r
2019-08-14,87.60998555540486\r
2019-08-16,87.60998555540486\r
2019-08-19,86.71864458384132\r
2019-08-24,78.27585649364494\r
2019-08-26,76.90487439413215\r
2019-08-28,76.90487439413215\r
2019-08-29,75.97611237358461\r
2019-08-31,73.69829599983441\r
2019-09-03,72.33137619961174\r
2019-09-07,71.84481626727049\r
2019-09-10,70.17131071310538\r
2019-09-12,68.43726086700123\r
2019-09-15,68.15923661510338\r
2019-09-18,65.09603873440227\r
2019-09-20,63.22423953616575\r
2019-09-22,63.22423953616575\r
2020-01-26,51.20412837518684\r
2020-02-07,60.972761363785935\r
2020-02-10,66.85014682089343\r
2020-02-15,73.5161338544845\r
2020-02-22,73.59362428204952\r
2020-03-26,93.4393194536637\r
2020-03-28,92.65891204471907\r
2020-03-30,92.65891204471907\r
2020-03-31,91.97383205324923\r
2020-04-02,92.44356411226599\r
2020-04-04,92.44356411226599\r
2020-04-05,91.51055801619914\r
2020-04-07,91.92552406995426\r
2020-04-09,91.92552406995426\r
2020-04-10,91.5973398199348\r
2020-04-12,92.0200039365755\r
2020-04-14,92.34565720009235\r
2020-04-15,91.95987521293654\r
2020-04-17,92.10271048812808\r
2020-04-19,92.7537382434\r
2020-04-20,92.88527573233313\r
2020-04-22,93.49989172504733\r
2020-04-27,94.74778298323456\r
2020-05-07,92.39191495079919\r
2020-05-15,96.07995839724522\r
2020-05-17,92.28543054425799\r
2020-05-19,92.28543054425799\r
2020-05-20,95.40078875333306\r
2020-05-27,96.62511111736656\r
2020-05-29,96.62511111736656\r
2020-05-30,96.04600198056464\r
2020-06-01,95.30799940099712\r
2020-06-03,98.47839218887792\r
2020-06-24,94.22925456334234\r
2020-07-01,94.22925456334234\r
2020-07-04,95.48051162645676\r
2020-07-06,95.38441113983663\r
2020-07-08,95.59086370867178\r
2020-07-09,97.05058989669784\r
2020-07-24,96.93506480519227\r
2020-07-29,92.42419411874462\r
2020-07-31,91.62841905863999\r
2020-08-02,91.62841905863999\r
2020-08-05,90.03787702528967\r
2020-08-07,89.83704076605072\r
2020-08-08,87.7507202207648\r
2020-08-10,87.27117969727368\r
2020-08-12,87.27117969727368\r
2020-08-13,87.2313599384765\r
2020-08-17,85.56545366153688\r
2020-08-20,82.53427166964465\r
2020-08-25,80.96922840134316\r
2020-09-02,79.284587229881\r
2020-09-04,78.66005181864159\r
2020-09-07,69.0955394976617\r
2020-09-09,69.0484905558485\r
2020-09-11,69.07201318167441\r
2020-09-12,66.37357097859405\r
2020-09-14,65.43431074548315\r
2020-09-16,65.43431074548315\r
2020-09-17,63.2314670074407\r
2020-09-21,61.36247325451614\r
2020-09-22,59.95939915418008\r
2020-11-18,39.75867207502235\r
2020-11-20,39.75867207502235\r
2020-11-21,42.1617228858171\r
2020-11-25,42.1617228858171\r
2020-11-26,26.056152267804254\r
2020-11-28,38.67405893378693\r
2021-02-14,82.28726228577149\r
2021-02-21,84.22235496071893\r
2021-02-24,84.41112051075245\r
2021-02-28,85.9043176972834\r
2021-03-01,85.27178668276049\r
2021-03-06,86.53795722661603\r
2021-03-08,89.48474921593767\r
2021-03-28,94.27811634634253\r
2021-03-30,94.27811634634253\r
2021-03-31,93.47392996636188\r
2021-04-02,93.5907840299255\r
2021-04-04,92.37685311636635\r
2021-04-22,96.29697172789626\r
2021-04-24,96.29697172789626\r
2021-04-25,96.12597268374897\r
2021-04-27,95.95949288264904\r
2021-04-30,95.90585338275378\r
2021-05-30,98.89650436347866\r
2021-06-01,100.0\r
2021-06-03,100.0\r
2021-06-04,100.0\r
2021-06-11,100.0\r
2021-06-14,98.3930956185372\r
2021-06-16,100.0\r
2021-06-19,99.47677557431714\r
2021-06-21,99.47677557431714\r
2021-07-19,97.07480318421389\r
2021-07-21,100.0\r
2021-07-23,100.0\r
2021-08-25,87.58688980730857\r
2021-08-27,85.48861951773529\r
2021-09-01,85.48861951773529\r
2021-09-02,85.57480052307324\r
2021-09-04,76.4388577482188\r
2021-09-06,75.91221755096588\r
2021-09-07,73.39513033994106\r
2021-09-12,73.39513033994106\r
2021-09-17,68.63884943092238\r
2021-09-24,55.827259174283896\r
2021-10-01,55.99372642434559\r
2021-10-04,54.74867581475795\r
2021-10-14,45.23784721394551\r
2021-10-16,50.25479678742185\r
2021-10-19,49.87427856759911\r
2021-10-21,47.68183296253923\r
2021-10-24,48.78400580291902\r
2021-10-27,39.6631441119757\r
2021-10-29,37.138814939403325\r
2021-11-06,20.703746307250917\r
2022-02-09,65.45083247429825\r
2022-02-11,64.89565758223857\r
2022-02-13,64.89565758223857\r
2022-02-19,66.23413486922239\r
2022-02-26,81.77799263802761\r
2022-02-28,81.77799263802761\r
2022-03-03,81.86344816319942\r
2022-03-05,81.86344816319942\r
2022-03-06,86.14897342288252\r
2022-03-08,85.9011965044395\r
2022-03-10,88.04618072646487\r
2022-03-21,90.76750622981041\r
2022-03-23,93.24906716605922\r
2022-03-25,93.24906716605922\r
2022-03-26,91.25792828816036\r
2022-03-28,92.94891892324151\r
2022-04-04,94.05670303918154\r
2022-04-17,97.01317483362509\r
2022-04-20,97.01317483362509\r
2022-04-22,97.75280032681941\r
2022-04-27,97.21793848931213\r
2022-06-04,94.88388239673142\r
2022-06-11,95.237070899158\r
2022-06-13,95.27307771453161\r
2022-06-19,95.44337660928137\r
2022-06-21,94.90784520497938\r
2022-06-23,98.02018523102214\r
2022-06-28,98.02018523102214\r
2022-06-29,94.15109997797244\r
2022-07-01,97.80691308349294\r
2022-07-06,97.11773357651259\r
2022-07-08,97.11773357651259\r
2022-07-11,98.31004727202685\r
2022-07-14,98.31004727202685\r
2022-07-16,95.471773376781\r
2022-07-18,95.62146675877446\r
2022-07-19,93.30742103448763\r
2022-07-24,91.2782552158621\r
2022-07-31,88.02513638948804\r
2022-08-02,88.02513638948804\r
2022-08-03,83.62845079784597\r
2022-08-07,83.67778321273607\r
2022-08-08,81.06442330481197\r
2022-08-10,81.11609316100525\r
2022-08-12,78.42643762540676\r
2022-08-13,78.70301572907054\r
2022-08-15,77.3622809357857\r
2022-08-20,76.78725992031619\r
2022-08-22,75.53427132005646\r
2022-08-23,75.53427132005646\r
2022-09-22,52.46631528765244\r
2022-10-09,40.51787150471227\r
2022-10-12,37.755602121261724\r
2022-10-19,35.77807582492466\r
2022-10-22,30.00816998708466\r
2022-10-24,38.010344253297646\r
2022-10-26,38.010344253297646\r
2022-11-01,26.23360155958271\r
2023-02-11,65.626264714353\r
2023-02-13,65.626264714353\r
2023-02-14,65.0456879450932\r
2023-02-21,66.29321712695337\r
2023-03-01,71.70306825008824\r
2023-03-11,72.54778966295635\r
2023-04-05,92.15106132961233\r
2023-04-09,92.15106132961233\r
2023-05-25,97.57289184726318\r
2023-05-27,100.0\r
2023-05-29,100.0\r
2023-06-01,99.31543229256317\r
2023-06-03,99.31543229256317\r
2023-06-04,99.57809399621293\r
2023-06-06,99.28762667738272\r
2023-06-08,97.95386009045279\r
2023-06-09,98.19604684891877\r
2023-06-11,97.42400346429679\r
2023-06-13,97.0054725572703\r
2023-06-14,97.23666336453168\r
2023-06-16,96.50542884767603\r
2023-06-23,98.61471577079809\r
2023-06-24,97.23446035182678\r
2023-06-26,97.70642894224825\r
2023-06-28,96.44725940354138\r
2023-07-11,97.17608889183201\r
2023-07-14,95.22943389575698\r
2023-07-19,96.10844223522619\r
2023-08-20,76.18763316628919\r
2023-08-22,73.25294768210024\r
2023-08-23,73.31193323478652\r
2023-09-02,71.12878156765612\r
2023-09-04,63.14115096702282\r
2023-09-06,63.14115096702282\r
2023-09-07,62.9958670773214\r
2023-09-09,60.297495883165\r
2023-09-11,60.297495883165\r
2023-09-24,50.8309303653772\r
2023-09-26,50.8309303653772\r
2023-10-01,50.8309303653772\r
2023-10-02,50.86606858459918\r
2023-10-07,38.37060514672996\r
`;export{n as default};
