const n=`date,value\r
2017-01-26,65.71035480978725\r
2017-02-22,96.01035283132974\r
2017-02-25,92.9056906841015\r
2017-03-07,87.68776549922661\r
2017-03-17,99.04976175482889\r
2017-03-27,99.09478696739534\r
2017-04-03,92.29480406076478\r
2017-04-06,92.29480406076478\r
2017-04-23,95.01435596388276\r
2017-05-03,95.01435596388276\r
2017-05-16,96.87744956472866\r
2017-05-23,96.87744956472866\r
2017-05-26,98.98224175041491\r
2017-06-02,97.5692616395776\r
2017-06-05,97.4575244594644\r
2017-06-12,87.22035787924825\r
2017-06-25,95.30159303062844\r
2017-07-02,95.56709220974516\r
2017-07-05,96.78834999658018\r
2017-07-07,94.63934576350795\r
2017-07-10,94.63934576350795\r
2017-07-12,94.63934576350795\r
2017-07-17,93.69386504114365\r
2017-07-22,92.4691521543085\r
2017-07-27,93.75968576764933\r
2017-08-04,93.91335092095814\r
2017-08-06,93.82552795529475\r
2017-08-11,94.15506077298897\r
2017-08-14,92.01181427800492\r
2017-08-19,95.21316951835652\r
2017-08-21,89.09694457047526\r
2017-08-24,89.26846279882284\r
2017-08-26,87.79415624941514\r
2017-08-29,83.43972968919296\r
2017-09-03,78.92478623128105\r
2017-09-05,76.5512466319841\r
2017-09-08,78.35852898554587\r
2017-09-10,73.2301105702305\r
2017-09-13,73.50425859254042\r
2017-09-20,73.62189619160948\r
2017-09-23,74.01465224970266\r
2017-09-28,75.43660359036708\r
2017-10-03,72.42998543600936\r
2017-10-05,68.18751720416051\r
2017-10-08,68.30112625566937\r
2017-10-10,67.37588954892634\r
2017-10-13,67.56423746128627\r
2017-10-15,66.98115369805801\r
2017-10-18,64.6538390801455\r
2017-10-25,59.75754698074537\r
2017-10-28,60.47162067522686\r
2017-10-30,60.078392768160825\r
2017-11-17,56.35024500483965\r
2017-11-19,56.35024500483965\r
2017-11-22,56.67984508334565\r
2017-11-24,56.67984508334565\r
2017-11-27,56.67984508334565\r
2017-11-29,50.521047801851516\r
2017-12-09,54.357325974662\r
2017-12-14,54.357325974662\r
2017-12-19,59.882225553021506\r
2018-02-25,93.56228797585587\r
2018-02-27,93.56228797585587\r
2018-03-02,94.1330752300079\r
2018-03-14,90.75416215797733\r
2018-03-19,90.75416215797733\r
2018-03-22,90.75416215797733\r
2018-04-01,100.0\r
2018-04-21,98.53265477094241\r
2018-04-23,98.53265477094241\r
2018-04-26,98.55511154922142\r
2018-05-06,94.11109207092143\r
2018-05-11,94.99227747996004\r
2018-05-18,94.99227747996004\r
2018-05-21,94.99227747996004\r
2018-06-20,95.65566814180856\r
2018-06-22,95.81076769626787\r
2018-06-25,97.07806276126286\r
2018-06-27,97.07806276126286\r
2018-07-02,94.88192079636688\r
2018-07-07,94.97020137838597\r
2018-07-10,94.7275215073922\r
2018-07-12,94.50715363792924\r
2018-07-15,95.72212509322935\r
2018-07-17,95.72212509322935\r
2018-07-25,97.1226696378362\r
2018-07-27,98.6000322340239\r
2018-07-30,96.41010154314219\r
2018-08-01,95.92162451979345\r
2018-08-04,94.50715363792924\r
2018-08-06,95.27948357976814\r
2018-08-11,92.49095640761644\r
2018-08-16,95.7886034740751\r
2018-08-19,94.63934576350795\r
2018-08-21,90.34392066063937\r
2018-08-26,94.99227747996004\r
2018-08-31,92.01181427800492\r
2018-09-03,89.52602728786272\r
2018-09-08,90.14989697681193\r
2018-09-10,90.08526545682565\r
2018-09-13,92.49095640761644\r
2018-09-20,88.07105249429581\r
2018-09-23,89.37573946350071\r
2018-09-25,88.62605928527233\r
2018-09-28,88.13500911705489\r
2018-09-30,88.13500911705489\r
2018-10-03,87.81544158698593\r
2018-10-05,86.83879633091216\r
2018-10-23,86.62715334995595\r
2018-10-25,86.62715334995595\r
2018-10-30,83.37737856825912\r
2018-11-24,84.16875812687181\r
2018-11-27,84.16875812687181\r
2018-11-29,85.97258427439884\r
2019-01-11,86.71178176773073\r
2019-01-16,92.79646655927434\r
2019-01-23,92.07708379905807\r
2019-01-28,89.95606698539859\r
2019-02-12,94.3530379285169\r
2019-02-15,94.68342886964486\r
2019-02-17,91.33862111729904\r
2019-02-20,93.25560872860743\r
2019-02-22,91.40366852255956\r
2019-02-25,91.40366852255956\r
2019-02-27,92.29480406076478\r
2019-03-12,88.90416964986\r
2019-03-22,90.97042532121684\r
2019-03-24,89.84846736204354\r
2019-03-27,88.96840641544338\r
2019-03-29,91.33862111729904\r
2019-04-01,88.54056826319724\r
2019-04-08,89.09694457047526\r
2019-04-13,92.77462889313767\r
2019-05-01,93.12431788844829\r
2019-05-06,98.757329473342\r
2019-05-11,98.757329473342\r
2019-05-13,95.01435596388276\r
2019-05-16,95.01435596388276\r
2019-05-23,93.18995257328766\r
2019-05-31,98.46529869305824\r
2019-06-02,94.46310866140396\r
2019-06-12,97.79291432997539\r
2019-06-17,89.97759408512852\r
2019-06-22,89.97759408512852\r
2019-06-25,89.97759408512852\r
2019-06-27,90.81901601249446\r
2019-06-30,90.75416215797733\r
2019-07-02,90.75416215797733\r
2019-07-05,95.50068526444892\r
2019-07-07,95.50068526444892\r
2019-07-10,95.50068526444892\r
2019-07-12,97.16728602872683\r
2019-07-15,98.53265477094241\r
2019-07-17,95.52281853149258\r
2019-07-22,93.78163077901318\r
2019-07-25,95.50068526444892\r
2019-08-01,95.36793567382627\r
2019-08-04,90.49496186205648\r
2019-08-09,90.27922457982004\r
2019-08-11,93.32128635332812\r
2019-08-14,90.19299661319245\r
2019-08-16,91.88133970696153\r
2019-08-21,90.6893298145772\r
2019-08-24,91.31694342688283\r
2019-08-26,86.64830685738566\r
2019-08-29,88.04973841048866\r
2019-08-31,79.06664630481099\r
2019-09-03,80.22619398484633\r
2019-09-05,80.16496977662237\r
2019-09-13,74.66482038300634\r
2019-09-15,67.48886900150711\r
2019-09-18,66.28828782739218\r
2019-09-20,67.39471335423418\r
2019-10-05,68.50963756693513\r
2019-10-08,54.664387542077755\r
2019-10-13,60.47162067522686\r
2019-10-25,59.93569615991851\r
2020-01-06,85.8250974267429\r
2020-01-11,91.31694342688283\r
2020-01-16,86.85997381683364\r
2020-01-18,86.85997381683364\r
2020-02-05,86.37349832292142\r
2020-02-07,86.37349832292142\r
2020-02-15,87.17792379663759\r
2020-02-20,84.14788788302747\r
2020-02-22,82.96225755037476\r
2020-03-01,82.96225755037476\r
2020-03-08,93.82552795529475\r
2020-03-11,86.66946276285256\r
2020-03-13,94.41907321807457\r
2020-03-18,94.33103093227278\r
2020-03-21,92.99311293453134\r
2020-03-28,92.62183205078169\r
2020-03-31,93.25560872860743\r
2020-04-05,95.61137541328883\r
2020-04-07,93.6719295683032\r
2020-04-10,100.0\r
2020-04-12,93.75968576764933\r
2020-04-15,93.75968576764933\r
2020-04-25,98.86975591745684\r
2020-05-07,88.83995442704594\r
2020-05-17,88.83995442704594\r
2020-05-20,99.74872003199856\r
2020-05-22,90.81901601249446\r
2020-05-25,92.14237480901484\r
2020-05-27,94.15506077298897\r
2020-05-30,94.15506077298897\r
2020-06-19,87.94320392165946\r
2020-06-21,93.58421152464508\r
2020-06-24,90.34392066063937\r
2020-06-26,90.75416215797733\r
2020-07-01,90.75416215797733\r
2020-07-04,91.88133970696153\r
2020-07-09,94.11109207092143\r
2020-07-11,94.50715363792924\r
2020-07-14,94.44108974806997\r
2020-07-19,94.77162367643318\r
2020-07-21,92.29480406076478\r
2020-07-24,90.9055212783588\r
2020-07-26,92.12060875144041\r
2020-07-29,92.20768730678776\r
2020-07-31,88.13500911705489\r
2020-08-03,88.13500911705489\r
2020-08-05,86.96589720989915\r
2020-08-08,88.94699176667646\r
2020-08-10,88.88276218189274\r
2020-08-15,85.34132574872997\r
2020-08-20,85.08942723621149\r
2020-08-23,87.70903885743732\r
2020-08-25,83.5852997937491\r
2020-09-02,76.15228845601611\r
2020-09-04,76.39154721293579\r
2020-09-07,69.36571032080553\r
2020-09-12,72.72224067352361\r
2020-09-14,69.4611341490531\r
2020-09-17,72.15770694868414\r
2020-09-19,69.88172246103036\r
2020-11-08,65.84065041382523\r
2020-11-11,65.00512746662817\r
2020-11-18,64.59845329095265\r
2020-11-21,65.04215660014864\r
2020-11-23,63.78866119538128\r
2020-11-26,63.91717445553463\r
2021-02-06,100.0\r
2021-02-11,100.0\r
2021-02-14,100.0\r
2021-02-19,98.93724029087912\r
2021-02-24,96.32120185277961\r
2021-03-01,91.70750734279403\r
2021-03-23,92.75279361337081\r
2021-03-26,91.66407313436096\r
2021-03-28,96.56576762322945\r
2021-03-31,95.72212509322935\r
2021-04-02,99.99728595062767\r
2021-04-05,99.1398216806345\r
2021-04-07,99.16234259991005\r
2021-04-15,100.0\r
2021-04-17,100.0\r
2021-04-20,100.0\r
2021-04-22,100.0\r
2021-05-27,97.79291432997539\r
2021-05-30,98.77981001082597\r
2021-06-09,97.65869418430897\r
2021-06-11,94.50715363792924\r
2021-06-14,93.93531262320428\r
2021-06-16,94.06713290459106\r
2021-06-19,94.06713290459106\r
2021-06-21,95.96598391433211\r
2021-06-26,94.08911129576921\r
2021-07-19,91.79440441943663\r
2021-07-21,91.79440441943663\r
2021-07-26,91.79440441943663\r
2021-07-29,97.74816477135853\r
2021-08-05,95.58923262087531\r
2021-08-10,94.46310866140396\r
2021-08-13,94.46310866140396\r
2021-08-18,94.46310866140396\r
2021-08-20,95.36793567382627\r
2021-08-23,94.2430267830638\r
2021-08-25,94.2430267830638\r
2021-08-28,91.01370663177987\r
2021-08-30,91.0786465197994\r
2021-09-04,77.11141379620312\r
2021-09-07,77.11141379620312\r
2021-09-22,66.00834940814926\r
2021-09-24,66.62493988317436\r
2021-09-29,66.62493988317436\r
2021-10-14,61.387773586595095\r
2021-10-17,59.49078494729911\r
2021-10-24,59.13596441742224\r
2021-10-27,57.63897939951757\r
2021-12-16,72.1382767055875\r
2021-12-18,76.9311532713141\r
2021-12-21,73.01504226103677\r
2021-12-23,75.39693533184992\r
2022-01-15,90.17144559939042\r
2022-01-17,90.10680690548874\r
2022-01-22,92.3165892174931\r
2022-01-25,89.93454227730048\r
2022-01-27,90.04218973370067\r
2022-01-30,90.04218973370067\r
2022-02-01,90.04218973370067\r
2022-02-06,90.43021557410431\r
2022-02-09,91.10029792822365\r
2022-02-26,91.5121286422721\r
2022-03-01,91.5121286422721\r
2022-03-03,91.5121286422721\r
2022-03-08,96.41010154314219\r
2022-03-23,88.41240356115425\r
2022-03-26,90.14989697681193\r
2022-04-05,99.1848658942382\r
2022-04-10,99.65840364413273\r
2022-04-15,99.1848658942382\r
2022-04-17,96.32120185277961\r
2022-04-27,91.9030794989905\r
2022-05-15,92.12060875144041\r
2022-05-17,95.8329342993505\r
2022-05-20,95.8329342993505\r
2022-05-22,95.8329342993505\r
2022-05-27,94.83779480047734\r
2022-06-01,93.62806577685366\r
2022-06-04,93.62806577685366\r
2022-06-06,96.54352247280711\r
2022-06-11,96.81062131996757\r
2022-06-14,96.41010154314219\r
2022-06-16,94.66138612510528\r
2022-06-19,92.49095640761644\r
2022-06-29,94.00121203529855\r
2022-07-01,90.99206478165964\r
2022-07-04,90.99206478165964\r
2022-07-06,90.60292015367834\r
2022-07-11,89.18268453979637\r
2022-07-14,88.36970115007911\r
2022-07-16,88.49783711804355\r
2022-07-19,86.83879633091216\r
2022-07-21,82.279411635965\r
2022-07-24,79.87954377930944\r
2022-07-26,76.59119568107586\r
2022-07-29,73.64151094971062\r
2022-07-31,72.27433942667213\r
2022-08-03,71.20848313268732\r
2022-08-05,71.78894784020005\r
2022-08-08,69.82430009661267\r
2022-08-10,66.5687762218514\r
2022-08-13,64.17456121134894\r
2022-08-15,64.8386175350447\r
2022-08-20,63.038353068297134\r
2022-08-23,60.2033815331727\r
2022-08-28,46.529758081063136\r
2022-08-30,46.08693876906387\r
2022-09-02,46.134289646756734\r
2022-09-04,44.64581573571792\r
2022-09-12,43.409961932795014\r
2022-09-19,39.8435095219225\r
2022-09-22,37.37293636049608\r
2022-10-02,37.20131967768897\r
2022-10-04,35.65928096796752\r
2022-10-07,35.65928096796752\r
2022-10-09,35.77142703874737\r
2022-10-12,35.77142703874737\r
2022-10-22,34.02413966916825\r
2022-10-24,34.560624495360145\r
2022-10-27,33.900889043558365\r
2022-11-01,33.900889043558365\r
2022-11-06,34.72648051774541\r
2022-11-11,32.518577609998005\r
2022-11-13,33.084528711828256\r
2022-11-16,32.98988871603682\r
2023-02-06,35.087099606509184\r
2023-02-09,35.15664770880895\r
2023-02-11,35.17056500221075\r
2023-02-14,35.22625974988174\r
2023-02-16,35.128820794730295\r
2023-02-19,35.89778677720227\r
2023-02-21,35.93995265999268\r
2023-02-26,34.13387010298493\r
2023-03-01,35.29593572069865\r
2023-03-03,36.43358555219677\r
2023-03-16,41.45112377343793\r
2023-03-28,45.3793858158486\r
2023-04-05,48.886773392418995\r
2023-04-07,47.357350110309596\r
2023-04-15,50.06093632499292\r
2023-04-17,51.181738985974775\r
2023-04-20,51.34753439779121\r
2023-05-27,61.207631701961255\r
2023-05-30,62.710251902395875\r
2023-06-04,63.29409237860546\r
2023-07-09,63.45875005447421\r
2023-07-11,62.32847215773935\r
2023-07-14,60.435823467078144\r
2023-07-16,60.435823467078144\r
2023-07-19,60.435823467078144\r
2023-07-21,56.853677245536005\r
`;export{n as default};
