const n=`date,value\r
2017-01-26,44.654213278642516\r
2017-01-29,44.654213278642516\r
2017-02-15,55.17890466459103\r
2017-02-18,55.17890466459103\r
2017-02-25,58.166159848623145\r
2017-03-17,75.965751337784\r
2017-03-27,75.965751337784\r
2017-04-06,86.47094164273497\r
2017-04-09,86.47094164273497\r
2017-05-06,88.04999411850702\r
2017-05-09,88.04999411850702\r
2017-05-16,98.8401904066078\r
2017-05-19,98.8401904066078\r
2017-05-26,99.17243415165714\r
2017-06-05,98.42551566247172\r
2017-07-05,100.0\r
2017-08-14,93.91045338276336\r
2017-08-17,93.91045338276336\r
2017-08-22,93.91045338276336\r
2017-08-24,93.91045338276336\r
2017-10-08,81.64912632209179\r
2017-10-11,81.64912632209179\r
2017-10-13,84.74726431622304\r
2017-10-16,84.74726431622304\r
2017-10-18,84.74726431622304\r
2017-10-23,82.57369981950207\r
2017-10-26,79.73638644332111\r
2017-10-28,79.73638644332111\r
2017-10-31,79.73638644332111\r
2017-11-07,78.82474936767618\r
2017-11-15,78.82474936767618\r
2017-11-17,80.34648140976857\r
2017-11-20,79.50808254784552\r
2017-11-22,81.87987763838392\r
2017-11-25,81.87987763838392\r
2017-11-27,81.87987763838392\r
2017-11-30,79.8125461573239\r
2017-12-07,49.395829264297305\r
2017-12-12,87.25903334818888\r
2017-12-15,87.25903334818888\r
2017-12-20,82.9601719719692\r
2018-01-31,93.66663032593692\r
2018-02-10,93.66663032593692\r
2018-02-15,96.77382721590422\r
2018-02-25,96.93849065833298\r
2018-03-02,98.67423648956076\r
2018-03-07,98.67423648956076\r
2018-03-22,100.0\r
2018-03-30,99.75493764972744\r
2018-04-21,98.17704700486036\r
2018-04-24,98.17704700486036\r
2018-04-26,98.17704700486036\r
2018-05-11,97.59826816796907\r
2018-05-21,97.84614794186193\r
2018-05-24,96.77382721590422\r
2018-06-20,96.36266065718391\r
2018-06-23,96.36266065718391\r
2018-06-25,100.0\r
2018-07-08,95.62433380713941\r
2018-07-10,95.62433380713941\r
2018-07-15,97.02086453621762\r
2018-07-18,97.02086453621762\r
2018-07-23,97.02086453621762\r
2018-07-25,97.35064098268109\r
2018-08-04,96.52704290615235\r
2018-08-12,94.48036338594817\r
2018-09-03,81.64912632209179\r
2018-09-08,88.44654881110101\r
2018-09-11,88.44654881110101\r
2018-09-16,86.15650944574799\r
2018-09-18,86.15650944574799\r
2018-09-23,79.88873506993653\r
2018-09-26,79.88873506993653\r
2018-09-28,84.35746525640268\r
2018-10-03,79.66025593341347\r
2018-10-06,83.812959770813\r
2018-10-13,78.37051082703498\r
2018-10-23,72.85535269473387\r
2018-11-17,70.66572000459921\r
2018-11-22,70.66572000459921\r
2018-11-27,71.90321759215838\r
2018-12-07,74.70049109914572\r
2018-12-10,73.96021204833316\r
2018-12-27,82.57369981950207\r
2019-01-11,85.05962300308393\r
2019-01-16,86.23507436415086\r
2019-01-19,86.23507436415086\r
2019-01-24,86.23507436415086\r
2019-01-26,81.8029314737227\r
2019-02-15,94.96995930240965\r
2019-02-18,94.96995930240965\r
2019-02-20,96.11629831437057\r
2019-02-23,96.11629831437057\r
2019-02-25,95.54243831951985\r
2019-02-28,95.54243831951985\r
2019-03-12,97.84614794186193\r
2019-03-22,95.21513824866037\r
2019-03-25,95.21513824866037\r
2019-03-27,96.44483771610562\r
2019-03-30,96.44483771610562\r
2019-04-01,96.44483771610562\r
2019-04-09,96.03423382716677\r
2019-05-01,89.4011975440932\r
2019-05-06,93.17974826397992\r
2019-05-09,93.17974826397992\r
2019-05-11,93.17974826397992\r
2019-05-14,93.17974826397992\r
2019-05-16,93.17974826397992\r
2019-07-05,96.60927622260861\r
2019-07-08,96.60927622260861\r
2019-07-10,99.33872390574402\r
2019-07-13,99.33872390574402\r
2019-07-15,96.85614488332868\r
2019-07-20,96.85614488332868\r
2019-07-23,100.0\r
2019-07-25,93.91045338276336\r
2019-07-28,97.68086670009527\r
2019-08-02,84.66924677138172\r
2019-08-04,85.05962300308393\r
2019-08-09,83.96838825078152\r
2019-08-14,81.18840867651625\r
2019-08-17,81.18840867651625\r
2019-08-22,83.50244988091492\r
2019-08-24,75.36927162107536\r
2019-08-29,75.81645439162963\r
2019-09-03,68.4313782693708\r
2019-09-06,68.4313782693708\r
2019-09-08,70.0140713906576\r
2019-09-11,58.36755470371083\r
2019-09-13,62.178022005592446\r
2019-09-16,62.178022005592446\r
2019-09-18,62.178022005592446\r
2019-09-21,62.178022005592446\r
2019-09-26,60.39684330566186\r
2019-10-08,52.319507686666654\r
2019-10-11,52.319507686666654\r
2019-10-13,55.17890466459103\r
2019-10-26,50.025662082027324\r
2019-12-17,88.04999411850702\r
2019-12-20,88.04999411850702\r
2019-12-25,88.04999411850702\r
2019-12-27,90.84087754712404\r
2019-12-30,90.84087754712404\r
2020-01-06,92.85572660625434\r
2020-01-09,92.85572660625434\r
2020-01-11,93.7478763912705\r
2020-01-14,93.7478763912705\r
2020-01-16,93.09870035381512\r
2020-01-19,93.09870035381512\r
2020-01-29,92.77479203423312\r
2020-01-31,92.77479203423312\r
2020-02-05,88.92335866255164\r
2020-02-10,90.52015063464506\r
2020-02-15,89.6405025320576\r
2020-02-18,89.6405025320576\r
2020-02-20,91.16205989041244\r
2020-02-23,90.60028964880294\r
2020-03-11,91.00141180969794\r
2020-03-21,95.2969209749179\r
2020-03-24,95.2969209749179\r
2020-03-26,93.8291507451536\r
2020-03-31,96.19839095159297\r
2020-04-03,96.19839095159297\r
2020-04-05,92.28978005294027\r
2020-04-08,92.69388580889711\r
2020-04-10,92.28978005294027\r
2020-04-15,94.80664774638825\r
2020-04-25,96.03423382716677\r
2020-04-30,95.70625747321442\r
2020-05-05,96.60927622260861\r
2020-05-08,96.60927622260861\r
2020-05-18,96.60927622260861\r
2020-05-20,100.0\r
2020-05-25,95.87018932174395\r
2020-05-28,95.87018932174395\r
2020-05-30,96.60927622260861\r
2020-06-12,96.52704290615235\r
2020-06-14,97.35064098268109\r
2020-06-24,93.66663032593692\r
2020-07-04,93.66663032593692\r
2020-07-07,93.66663032593692\r
2020-07-09,98.34266475158087\r
2020-07-19,97.92883064216967\r
2020-07-22,97.92883064216967\r
2020-07-24,92.45133726168207\r
2020-07-27,92.85572660625434\r
2020-07-29,92.85572660625434\r
2020-08-03,92.85572660625434\r
2020-08-06,83.58003395643732\r
2020-08-08,90.27990451744694\r
2020-08-18,84.5912580877436\r
2020-08-21,84.5912580877436\r
2020-08-23,84.5912580877436\r
2020-09-02,44.774933996434385\r
2020-09-05,44.774933996434385\r
2020-09-07,44.774933996434385\r
2020-09-10,44.774933996434385\r
2020-09-12,44.774933996434385\r
2020-09-17,40.5119820278569\r
2020-09-30,39.01491184268623\r
2020-11-11,46.17261063659427\r
2020-11-14,46.17261063659427\r
2020-11-21,47.89733842537685\r
2020-11-26,45.68450584860314\r
2020-11-29,46.60140969199155\r
2020-12-26,79.50808254784552\r
2021-02-14,99.25556504241567\r
2021-02-17,99.25556504241567\r
2021-02-19,99.33872390574402\r
2021-02-24,98.8401904066078\r
2021-02-27,100.0\r
2021-03-01,96.60927622260861\r
2021-03-04,100.0\r
2021-03-09,96.93849065833298\r
2021-03-21,97.59826816796907\r
2021-03-24,97.59826816796907\r
2021-03-29,97.59826816796907\r
2021-03-31,100.0\r
2021-04-03,99.08933123808046\r
2021-04-05,99.33872390574402\r
2021-04-08,99.33872390574402\r
2021-04-15,97.84614794186193\r
2021-04-20,93.99178429928016\r
2021-04-23,93.99178429928016\r
2021-05-20,87.81240493913141\r
2021-05-28,87.81240493913141\r
2021-05-30,87.81240493913141\r
2021-06-09,95.62433380713941\r
2021-06-14,97.18569658184589\r
2021-06-22,97.10326651228631\r
2021-07-19,99.25556504241567\r
2021-07-22,99.25556504241567\r
2021-09-12,62.79942021661169\r
2021-09-17,63.21506339120822\r
2021-09-22,63.21506339120822\r
2021-09-25,50.088821548073156\r
2021-09-27,50.088821548073156\r
2021-10-07,58.83856255476629\r
2021-10-12,59.10839213573142\r
2021-10-15,59.10839213573142\r
2021-10-17,57.163384382494066\r
2021-10-20,57.63047467523611\r
2021-10-27,53.87160513817245\r
2021-12-16,92.12833634794104\r
2021-12-19,92.12833634794104\r
2021-12-21,92.12833634794104\r
2022-01-15,91.00141180969794\r
2022-01-23,91.00141180969794\r
2022-01-25,93.09870035381512\r
2022-02-09,93.42306190951282\r
2022-03-01,99.17243415165714\r
2022-03-09,99.17243415165714\r
2022-03-26,95.70625747321442\r
2022-04-05,99.50512553167749\r
2022-04-10,99.25556504241567\r
2022-05-10,87.02230435221277\r
2022-05-15,96.44483771610562\r
2022-06-19,99.08933123808046\r
2022-06-22,98.01154138921049\r
2022-06-24,98.01154138921049\r
2022-06-29,98.01154138921049\r
2022-07-14,85.92098728612373\r
2022-07-17,85.92098728612373\r
2022-07-24,85.92098728612373\r
2022-08-03,66.65054853965918\r
2022-08-06,66.65054853965918\r
2022-08-08,66.65054853965918\r
2022-08-11,66.65054853965918\r
2022-08-13,66.65054853965918\r
2022-08-28,49.01946935782575\r
2022-09-05,49.01946935782575\r
2022-09-22,38.786605974499814\r
2022-10-02,38.900691641413864\r
2022-10-05,35.92312164859575\r
2022-10-07,35.92312164859575\r
2022-10-12,35.92312164859575\r
2022-11-06,30.412457773483943\r
2022-11-11,30.412457773483943\r
2022-11-16,28.7255298661772\r
2022-12-21,34.93362703129092\r
2022-12-24,34.93362703129092\r
2023-01-10,40.396019875385555\r
2023-01-18,40.396019875385555\r
2023-01-20,58.569229034554716\r
2023-01-30,57.43010619525444\r
2023-02-04,66.65054853965918\r
2023-02-09,70.15867262330234\r
2023-02-12,70.15867262330234\r
2023-02-14,67.00520500511364\r
2023-02-17,70.37579907269239\r
2023-02-19,70.30339365093447\r
2023-02-24,73.96021204833316\r
2023-03-01,77.46519973470188\r
2023-03-16,73.07579010850945\r
2023-04-05,73.00228125308614\r
2023-04-08,73.00228125308614\r
2023-04-10,76.18991787119386\r
2023-04-18,75.81645439162963\r
2023-04-20,75.81645439162963\r
2023-05-05,81.8029314737227\r
2023-05-10,81.8029314737227\r
2023-06-24,99.42191073703326\r
2023-06-27,99.42191073703326\r
2023-07-14,97.26815474020644\r
2023-07-17,97.26815474020644\r
2023-07-22,97.26815474020644\r
2023-08-08,97.43315530458622\r
2023-08-11,97.18569658184589\r
2023-08-16,97.18569658184589\r
2023-08-18,97.26815474020644\r
2023-08-21,90.27990451744694\r
2023-08-23,90.27990451744694\r
2023-08-28,90.27990451744694\r
2023-08-31,83.50244988091492\r
2023-09-07,81.57226734588384\r
2023-09-10,81.57226734588384\r
2023-09-15,81.57226734588384\r
2023-10-02,73.59118363781315\r
2023-10-05,73.59118363781315\r
2023-10-07,75.74185015850335\r
2023-10-10,75.74185015850335\r
2023-10-12,75.36927162107536\r
2023-10-15,77.16436875244119\r
2023-11-26,77.01412959746683\r
2023-12-06,89.72032794608641\r
`;export{n as default};