const n=`date,value\r
2017-02-15,49.53478083219899\r
2017-03-27,95.8213928566298\r
2017-04-03,92.87225041839923\r
2017-05-16,99.55567722142189\r
2017-05-26,93.09561216929517\r
2017-08-14,80.02434780037817\r
2017-08-29,75.89881670151117\r
2017-10-15,40.67871778851154\r
2017-10-18,22.563132665601362\r
2017-11-22,9.478843276691402\r
2018-02-22,95.64749644214179\r
2018-03-24,100.0\r
2018-04-18,100.0\r
2018-05-06,94.28629002343595\r
2018-05-08,100.0\r
2018-06-20,96.69837494658941\r
2018-06-27,96.44993892219314\r
2018-07-27,93.35560840481664\r
2018-08-06,90.51439556594379\r
2018-09-20,47.50244913993968\r
2018-09-25,45.26109112521734\r
2018-09-30,37.9411929407393\r
2018-10-05,38.753739020084026\r
2018-10-10,42.18326606735517\r
2018-10-13,21.222774040273006\r
2018-10-20,19.79442140920645\r
2018-11-14,18.68772932130892\r
2019-02-15,70.63076075629486\r
2019-02-17,75.00251744408754\r
2019-02-25,78.09683304658725\r
2019-02-27,81.74026155080102\r
2019-03-22,86.98188345542997\r
2019-03-24,92.96379871883755\r
2019-03-29,92.08230950932047\r
2019-04-01,85.75741579447099\r
2019-04-11,90.3725900600851\r
2019-05-01,92.09268287588486\r
2019-05-13,96.75373643144557\r
2019-06-02,91.51940662581084\r
2019-06-27,88.58613236371365\r
2019-07-02,90.9937602165508\r
2019-07-05,92.05518308907244\r
2019-07-25,86.74150933004039\r
2019-08-24,70.38057953226644\r
2019-08-26,69.40768458364325\r
2019-08-31,67.64751931502192\r
2019-09-03,62.434851959179674\r
2019-09-15,52.17295363154295\r
2019-09-20,45.116218869470146\r
2019-12-04,18.4611807916017\r
2019-12-29,33.24880268149021\r
2020-01-16,41.78356564272824\r
2020-01-21,47.17164992365836\r
2020-01-23,48.36720260452406\r
2020-01-26,51.771624464329314\r
2020-02-07,77.41045282742843\r
2020-02-15,76.3735586543261\r
2020-03-26,88.28065093469603\r
2020-03-28,92.18847621837325\r
2020-04-02,93.44588217010941\r
2020-04-05,87.1183563750188\r
2020-04-17,94.94028838689394\r
2020-04-20,92.3850737544986\r
2020-04-22,93.30727294353292\r
2020-04-27,92.92524425873961\r
2020-05-07,91.37092964075828\r
2020-05-15,90.10830867626102\r
2020-05-17,86.83790844541774\r
2020-05-27,90.1774721083767\r
2020-05-30,93.18490265168163\r
2020-06-01,92.17569968619601\r
2020-06-24,89.60565199895912\r
2020-07-29,84.82116388763109\r
2020-07-31,88.1877597235679\r
2020-08-05,88.08102066527944\r
2020-08-08,77.24129020317405\r
2020-08-20,79.26712495738629\r
2020-09-17,47.611249170406836\r
2020-09-22,42.14431945570985\r
2020-11-21,19.817463304353947\r
2020-11-28,18.29502343840705\r
2021-02-21,89.53523596373492\r
2021-02-24,88.71972482221437\r
2021-03-01,89.40389785256612\r
2021-03-06,90.7163465851858\r
2021-03-23,98.38408404921837\r
2021-03-28,97.36918030740148\r
2021-03-31,92.73184034833572\r
2021-04-02,95.65651385235111\r
2021-04-25,98.17098540509586\r
2021-04-27,97.45222430395\r
2021-06-01,100.0\r
2021-06-14,97.39574891640939\r
2021-06-16,100.0\r
2021-07-19,97.55277477473963\r
2021-08-25,84.9974274965502\r
2021-09-02,79.1602886981994\r
2021-09-24,51.21240130320969\r
2021-10-09,31.86657561987683\r
2021-10-14,33.85496694971226\r
2021-10-24,23.03330254837008\r
2021-10-29,15.668050138152346\r
2021-11-23,23.212145771624435\r
2021-12-18,18.624303041926872\r
2022-01-15,46.413345601693315\r
2022-02-09,66.2351135702794\r
2022-03-06,90.1782582730344\r
2022-03-08,91.81130061456473\r
2022-03-21,95.62290657345089\r
2022-03-23,96.5068492817617\r
2022-03-26,91.59410678916193\r
2022-03-28,96.13036496050672\r
2022-04-17,100.0\r
2022-04-22,100.0\r
2022-05-15,93.47329896725344\r
2022-06-04,89.94812016155947\r
2022-06-19,92.50509631538158\r
2022-06-21,96.15587025194203\r
2022-07-11,99.456193126307\r
2022-07-16,99.92133875462451\r
2022-07-19,98.48866405534977\r
2022-07-24,94.57872821899281\r
2022-07-31,94.37233002771586\r
2022-08-03,91.57344071163782\r
2022-08-10,91.55913536709517\r
2022-08-13,86.03158065628598\r
2022-09-22,48.278361724983085\r
2022-10-09,31.868077934771215\r
2023-02-14,67.99428452711503\r
2023-03-01,73.15658487615075\r
2023-03-11,73.36075651413432\r
2023-04-05,94.35771553237677\r
2023-05-15,93.92245519609442\r
2023-05-25,96.35431725371572\r
2023-05-27,100.0\r
2023-06-01,99.27090284724842\r
2023-06-04,96.4334476220008\r
2023-06-06,92.27954541597188\r
2023-06-09,90.55381400984157\r
2023-06-14,95.78446212667752\r
2023-06-16,88.18389076344066\r
2023-06-24,93.4837833697603\r
`;export{n as default};