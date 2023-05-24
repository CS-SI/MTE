const n=`date,value\r
2017-01-03,17764.821125237686\r
2017-01-13,17764.821125237686\r
2017-02-09,19211.814365151087\r
2017-02-12,19211.814365151087\r
2017-02-19,47183.16022469793\r
2017-02-22,44438.41737983388\r
2017-03-14,63166.17162716963\r
2017-04-10,59498.73940042276\r
2017-04-20,51674.831252098986\r
2017-04-23,65518.066505028946\r
2017-04-30,54647.31867409961\r
2017-05-10,63166.17162716963\r
2017-05-13,54217.22411369804\r
2017-06-19,45996.05373355679\r
2017-06-22,49606.046822717646\r
2017-07-02,60404.58810277449\r
2017-07-04,47582.464246263866\r
2017-07-07,69867.74211556202\r
2017-07-09,69867.74211556202\r
2017-07-12,69867.74211556202\r
2017-07-17,68401.20982032777\r
2017-07-19,59950.7474484551\r
2017-07-22,59950.7474484551\r
2017-07-29,59950.7474484551\r
2017-08-03,52937.85361865899\r
2017-08-13,52937.85361865899\r
2017-08-18,42909.48475578774\r
2017-08-21,61317.77116086215\r
2017-08-23,61317.77116086215\r
2017-08-26,51674.831252098986\r
2017-09-05,63632.867898443816\r
2017-09-10,62701.314785389666\r
2017-09-15,62701.314785389666\r
2017-09-20,62701.314785389666\r
2017-09-27,53788.94910229235\r
2017-10-05,81133.38724634466\r
2017-10-07,46389.95605406094\r
2017-10-10,69377.04658575203\r
2017-10-12,69377.04658575203\r
2017-10-15,39573.962925556305\r
2017-10-17,48791.19700908085\r
2017-10-22,36382.558455372906\r
2017-10-25,38852.3371658016\r
2017-10-30,44438.41737983388\r
2017-11-01,44438.41737983388\r
2017-11-16,42531.72821228389\r
2017-11-21,50016.18331967635\r
2017-11-24,50016.18331967635\r
2017-11-26,59498.73940042276\r
2017-12-01,59498.73940042276\r
2017-12-06,3682.1776861451535\r
2017-12-09,3682.1776861451535\r
2018-01-13,40302.70569926275\r
2018-01-15,40302.70569926275\r
2018-01-23,40302.70569926275\r
2018-02-24,45996.05373355679\r
2018-02-27,53362.49261373304\r
2018-03-04,47183.16022469793\r
2018-03-14,62701.314785389666\r
2018-03-16,62701.314785389666\r
2018-03-21,62701.314785389666\r
2018-03-24,65044.00290942118\r
2018-04-18,66951.32640126979\r
2018-04-20,76932.42781790018\r
2018-04-25,76932.42781790018\r
2018-04-28,75387.87165841769\r
2018-04-30,70854.6921122685\r
2018-05-25,66951.32640126979\r
2018-05-28,66951.32640126979\r
2018-05-30,71849.0601857433\r
2018-06-02,71849.0601857433\r
2018-06-04,71849.0601857433\r
2018-06-09,64571.78258032414\r
2018-06-19,52094.02397533177\r
2018-06-22,67916.0667198023\r
2018-06-24,54647.31867409961\r
2018-06-27,69377.04658575203\r
2018-06-29,69377.04658575203\r
2018-07-02,75900.85979538482\r
2018-07-04,72850.85369331384\r
2018-07-07,80071.93011550453\r
2018-07-09,75387.87165841769\r
2018-07-12,65044.00290942118\r
2018-07-14,65518.066505028946\r
2018-07-17,65518.066505028946\r
2018-07-19,65518.066505028946\r
2018-07-22,62238.29640689835\r
2018-07-24,38852.3371658016\r
2018-07-27,38852.3371658016\r
2018-07-29,46389.95605406094\r
2018-08-01,44825.13272612893\r
2018-08-03,44825.13272612893\r
2018-08-06,52515.03108447545\r
2018-08-08,52515.03108447545\r
2018-08-11,50016.18331967635\r
2018-08-16,50841.884790321936\r
2018-08-18,50841.884790321936\r
2018-08-21,44438.41737983388\r
2018-08-23,41409.18446339645\r
2018-08-26,41409.18446339645\r
2018-08-28,37079.34843490253\r
2018-09-02,39573.962925556305\r
2018-09-05,23919.154441591505\r
2018-09-07,23919.154441591505\r
2018-09-12,26189.334134745113\r
2018-09-17,34334.5973914488\r
2018-09-20,34334.5973914488\r
2018-09-22,34334.5973914488\r
2018-09-25,39212.26099926141\r
2018-09-27,30428.63384772593\r
2018-09-30,33004.53357451024\r
2018-10-02,33004.53357451024\r
2018-10-05,30428.63384772593\r
2018-10-10,30114.5181462226\r
2018-10-12,26480.867099449737\r
2018-10-15,27069.121768736066\r
2018-10-17,23643.121656633186\r
2018-10-20,25611.450139859717\r
2018-10-22,24476.37140017727\r
2018-10-25,23096.20039143346\r
2018-11-01,15929.55572379826\r
2018-11-14,42531.72821228389\r
2018-11-16,52515.03108447545\r
2018-11-24,47582.464246263866\r
2018-12-01,59048.562972377345\r
2019-01-03,26189.334134745113\r
2019-01-10,26189.334134745113\r
2019-01-15,2324.8271519429077\r
2019-01-18,2324.8271519429077\r
2019-01-20,3007.3076630824635\r
2019-01-23,3007.3076630824635\r
2019-01-28,4658.192974690317\r
2019-02-02,138.50883334444765\r
2019-02-04,138.50883334444765\r
2019-02-14,2168.8194342497904\r
2019-02-17,18966.432616442748\r
2019-02-19,39212.26099926141\r
2019-02-22,36382.558455372906\r
2019-02-24,41038.57473055134\r
2019-02-27,30114.5181462226\r
2019-03-16,39573.962925556305\r
2019-03-19,39573.962925556305\r
2019-03-21,44053.496021372834\r
2019-03-24,23643.121656633186\r
2019-03-26,40669.74885756567\r
2019-03-29,27365.846177797845\r
2019-03-31,29491.520498075206\r
2019-04-05,27664.30376310906\r
2019-04-08,31381.463908294867\r
2019-04-10,29182.635958552895\r
2019-04-13,32025.432513367272\r
2019-04-15,34334.5973914488\r
2019-04-18,41409.18446339645\r
2019-04-20,41409.18446339645\r
2019-04-25,41409.18446339645\r
2019-04-30,41038.57473055134\r
2019-05-10,57266.15363056754\r
2019-05-13,72349.02830200519\r
2019-05-15,57266.15363056754\r
2019-05-23,61777.11552267427\r
2019-05-25,61777.11552267427\r
2019-05-30,71849.0601857433\r
2019-06-02,67432.77255978202\r
2019-06-04,61317.77116086215\r
2019-06-07,65044.00290942118\r
2019-06-12,59950.7474484551\r
2019-06-17,74876.74624008496\r
2019-06-19,75387.87165841769\r
2019-06-22,75387.87165841769\r
2019-06-24,55512.970530560575\r
2019-06-27,66951.32640126979\r
2019-06-29,50841.884790321936\r
2019-07-02,50841.884790321936\r
2019-07-04,50841.884790321936\r
2019-07-07,63166.17162716963\r
2019-07-09,49197.71840676155\r
2019-07-12,67432.77255978202\r
2019-07-14,50016.18331967635\r
2019-07-17,59048.562972377345\r
2019-07-19,59048.562972377345\r
2019-07-22,59048.562972377345\r
2019-07-24,42909.48475578774\r
2019-07-29,52937.85361865899\r
2019-08-01,52937.85361865899\r
2019-08-03,28875.492537881935\r
2019-08-23,31702.57250744221\r
2019-08-26,42909.48475578774\r
2019-08-28,41409.18446339645\r
2019-08-31,42155.76006915031\r
2019-09-07,43670.36754093385\r
2019-09-12,45603.94980258065\r
2019-09-15,44825.13272612893\r
2019-09-17,39573.962925556305\r
2019-09-20,40302.70569926275\r
2019-09-22,41781.5791972272\r
2019-09-27,40302.70569926275\r
2019-09-30,49606.046822717646\r
2019-10-07,49197.71840676155\r
2019-12-04,56385.91281746023\r
2019-12-06,56825.12040418784\r
2019-12-14,56825.12040418784\r
2019-12-19,45996.05373355679\r
2019-12-21,47183.16022469793\r
2019-12-26,41781.5791972272\r
2019-12-29,41781.5791972272\r
2020-01-05,32350.045188841174\r
2020-01-08,45213.64316628669\r
2020-01-15,32350.045188841174\r
2020-01-18,32350.045188841174\r
2020-01-20,33999.44245809217\r
2020-01-23,27365.846177797845\r
2020-01-25,30428.63384772593\r
2020-01-30,30428.63384772593\r
2020-02-07,56385.91281746023\r
2020-02-09,32025.432513367272\r
2020-02-14,33004.53357451024\r
2020-02-22,23643.121656633186\r
2020-02-24,26480.867099449737\r
2020-03-03,26480.867099449737\r
2020-03-08,26480.867099449737\r
2020-03-18,25040.466247466284\r
2020-03-23,52937.85361865899\r
2020-03-25,37783.222542078795\r
2020-03-28,37783.222542078795\r
2020-04-02,39212.26099926141\r
2020-04-04,52515.03108447545\r
2020-04-07,52515.03108447545\r
2020-04-09,52094.02397533177\r
2020-04-12,44825.13272612893\r
2020-04-14,42531.72821228389\r
2020-04-17,42531.72821228389\r
2020-04-22,41038.57473055134\r
2020-04-24,41038.57473055134\r
2020-04-27,41038.57473055134\r
2020-05-04,41781.5791972272\r
2020-05-07,54647.31867409961\r
2020-05-17,52937.85361865899\r
2020-05-19,55512.970530560575\r
2020-05-24,63166.17162716963\r
2020-05-27,56385.91281746023\r
2020-05-29,59950.7474484551\r
2020-06-01,59950.7474484551\r
2020-06-11,67916.0667198023\r
2020-06-23,45603.94980258065\r
2020-06-28,45603.94980258065\r
2020-07-01,45603.94980258065\r
2020-07-08,45996.05373355679\r
2020-07-13,34334.5973914488\r
2020-07-18,34334.5973914488\r
2020-07-21,34334.5973914488\r
2020-07-23,34334.5973914488\r
2020-07-31,42909.48475578774\r
2020-08-05,42909.48475578774\r
2020-08-07,48791.19700908085\r
2020-08-10,45213.64316628669\r
2020-08-12,45603.94980258065\r
2020-08-15,45603.94980258065\r
2020-08-20,38494.19025926751\r
2020-08-25,38494.19025926751\r
2020-08-27,32025.432513367272\r
2020-09-04,36036.81703093452\r
2020-09-09,37783.222542078795\r
2020-09-11,37783.222542078795\r
2020-09-14,38852.3371658016\r
2020-09-16,42155.76006915031\r
2020-09-19,47983.57100027657\r
2020-10-19,24757.558388115554\r
2020-10-24,24757.558388115554\r
2020-10-31,45213.64316628669\r
2020-11-05,47183.16022469793\r
2020-11-10,40669.74885756567\r
2020-11-13,41038.57473055134\r
2020-11-15,41038.57473055134\r
2020-11-18,37079.34843490253\r
2020-11-23,41781.5791972272\r
2020-11-25,41781.5791972272\r
2020-11-28,36382.558455372906\r
2020-12-10,35692.8430504196\r
2020-12-13,35692.8430504196\r
2021-01-24,46389.95605406094\r
2021-02-21,52094.02397533177\r
2021-02-23,69867.74211556202\r
2021-02-26,69867.74211556202\r
2021-02-28,53788.94910229235\r
2021-03-10,52515.03108447545\r
2021-03-23,68401.20982032777\r
2021-03-25,72850.85369331384\r
2021-03-28,67432.77255978202\r
2021-03-30,71350.94842863173\r
2021-04-02,68401.20982032777\r
2021-04-04,65518.066505028946\r
2021-04-07,69867.74211556202\r
2021-04-09,63166.17162716963\r
2021-04-14,60860.26234675474\r
2021-04-17,63632.867898443816\r
2021-04-19,63632.867898443816\r
2021-04-22,62701.314785389666\r
2021-04-24,71350.94842863173\r
2021-04-27,53788.94910229235\r
2021-05-29,59498.73940042276\r
2021-06-01,66471.72730262295\r
2021-06-03,66471.72730262295\r
2021-06-13,43289.030824893394\r
2021-06-16,66951.32640126979\r
2021-06-18,66951.32640126979\r
2021-06-21,66951.32640126979\r
2021-06-23,66951.32640126979\r
2021-06-26,65518.066505028946\r
2021-07-18,61317.77116086215\r
2021-07-21,73354.53727307527\r
2021-07-23,73354.53727307527\r
2021-08-10,65993.97431953694\r
2021-08-12,66471.72730262295\r
2021-08-15,66471.72730262295\r
2021-08-20,66471.72730262295\r
2021-09-01,39937.444106383824\r
2021-09-04,39937.444106383824\r
2021-09-06,38137.81910950449\r
2021-09-11,39573.962925556305\r
2021-09-21,35010.192595107845\r
2021-09-24,40669.74885756567\r
2021-10-01,37079.34843490253\r
2021-10-11,43670.36754093385\r
2021-10-14,52515.03108447545\r
2021-10-16,41038.57473055134\r
2021-10-19,48386.48156348123\r
2021-10-21,48386.48156348123\r
2021-10-24,50428.128956922345\r
2021-10-26,43670.36754093385\r
2021-10-29,41781.5791972272\r
2021-10-31,47983.57100027657\r
2021-11-05,33334.41178536674\r
2021-11-20,26189.334134745113\r
2021-11-23,30744.495853932676\r
2021-12-03,29491.520498075206\r
2021-12-18,39937.444106383824\r
2021-12-20,39937.444106383824\r
2021-12-23,39937.444106383824\r
2022-01-12,121.55900118720355\r
2022-01-14,34671.51369583286\r
2022-01-17,32025.432513367272\r
2022-01-19,32025.432513367272\r
2022-01-22,33334.41178536674\r
2022-01-24,31381.463908294867\r
2022-01-27,25611.450139859717\r
2022-01-29,18001.77567162351\r
2022-02-08,41038.57473055134\r
2022-02-11,44825.13272612893\r
2022-02-13,59498.73940042276\r
2022-02-18,56385.91281746023\r
2022-02-23,60404.58810277449\r
2022-02-26,65518.066505028946\r
2022-02-28,54647.31867409961\r
2022-03-03,50428.128956922345\r
2022-03-05,49197.71840676155\r
2022-03-08,47983.57100027657\r
2022-03-10,47983.57100027657\r
2022-03-20,47582.464246263866\r
2022-03-23,65518.066505028946\r
2022-03-25,66951.32640126979\r
2022-03-28,66471.72730262295\r
2022-04-04,71350.94842863173\r
2022-04-17,52937.85361865899\r
2022-04-19,52937.85361865899\r
2022-04-22,52937.85361865899\r
2022-04-27,72850.85369331384\r
2022-05-02,72850.85369331384\r
2022-05-07,72850.85369331384\r
2022-05-14,52094.02397533177\r
2022-05-27,44053.496021372834\r
2022-05-29,44053.496021372834\r
2022-06-11,67432.77255978202\r
2022-06-13,68888.20279772622\r
2022-06-16,50428.128956922345\r
2022-06-18,50428.128956922345\r
2022-06-21,50428.128956922345\r
2022-06-23,44438.41737983388\r
2022-06-26,48386.48156348123\r
2022-06-28,38494.19025926751\r
2022-07-03,39937.444106383824\r
2022-07-06,51674.831252098986\r
2022-07-08,41409.18446339645\r
2022-07-11,47582.464246263866\r
2022-07-13,40302.70569926275\r
2022-07-16,42531.72821228389\r
2022-07-18,40302.70569926275\r
2022-07-21,41409.18446339645\r
2022-07-26,43670.36754093385\r
2022-07-28,32025.432513367272\r
2022-07-31,45603.94980258065\r
2022-08-02,29491.520498075206\r
2022-08-05,28266.423807985804\r
2022-08-07,30428.63384772593\r
2022-08-10,34671.51369583286\r
2022-08-12,28875.492537881935\r
2022-08-22,33334.41178536674\r
2022-08-25,51257.45187234706\r
2022-08-27,51257.45187234706\r
2022-09-01,51257.45187234706\r
2022-09-04,50841.884790321936\r
2022-09-11,37783.222542078795\r
2022-09-19,61317.77116086215\r
2022-09-21,42909.48475578774\r
2022-10-09,53788.94910229235\r
2022-10-11,53788.94910229235\r
2022-10-16,53788.94910229235\r
2022-10-19,53788.94910229235\r
2022-10-26,28875.492537881935\r
2022-10-31,29491.520498075206\r
2022-11-05,29491.520498075206\r
2022-11-08,55079.23380645668\r
2022-11-10,41781.5791972272\r
2022-11-20,49606.046822717646\r
2022-12-08,38137.81910950449\r
2022-12-28,57266.15363056754\r
2023-01-07,59048.562972377345\r
2023-01-24,39573.962925556305\r
2023-01-29,39573.962925556305\r
2023-02-01,39573.962925556305\r
2023-02-03,39573.962925556305\r
2023-02-08,42531.72821228389\r
2023-02-11,47183.16022469793\r
2023-02-13,38852.3371658016\r
2023-02-16,44438.41737983388\r
2023-02-18,44438.41737983388\r
2023-02-21,42531.72821228389\r
2023-03-05,45603.94980258065\r
2023-03-15,45603.94980258065\r
2023-04-09,54217.22411369804\r
2023-04-14,54217.22411369804\r
2023-04-19,54217.22411369804\r
`;export{n as default};