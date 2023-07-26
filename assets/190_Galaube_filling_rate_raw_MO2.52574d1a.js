const r=`date,value\r
2017-02-22,66.89002471096866\r
2017-02-25,67.92231776290832\r
2017-03-07,63.91774122783901\r
2017-03-17,92.96905161371643\r
2017-03-27,92.71137429980276\r
2017-04-23,98.57157870990552\r
2017-05-03,98.57157870990552\r
2017-05-16,98.65059322169353\r
2017-05-23,98.65059322169353\r
2017-05-26,99.9444137332068\r
2017-06-02,95.53403138637154\r
2017-06-05,95.53403138637154\r
2017-06-12,99.62699392726174\r
2017-06-15,99.73275979115829\r
2017-06-22,99.07239203554383\r
2017-06-25,97.73018881520264\r
2017-07-02,97.20565123106424\r
2017-07-05,98.70328233317001\r
2017-07-07,97.57271992787842\r
2017-07-10,97.57271992787842\r
2017-07-12,97.57271992787842\r
2017-07-17,92.89172115451963\r
2017-07-22,90.96606807388268\r
2017-07-27,96.83908514385496\r
2017-08-04,97.0746770468382\r
2017-08-06,97.0746770468382\r
2017-08-11,90.81264926498315\r
2017-08-14,96.15965478317744\r
2017-08-19,96.00310994575999\r
2017-08-21,95.87272667278053\r
2017-08-24,95.0917792495913\r
2017-08-26,93.7953624363196\r
2017-08-29,94.00235471797583\r
2017-09-03,91.88855358455143\r
2017-09-20,89.35986757893369\r
2017-09-23,88.42139482959793\r
2017-09-28,92.17109775672918\r
2017-10-03,89.08048645060197\r
2017-10-05,77.3955738894556\r
2017-10-08,78.02362595547453\r
2017-10-10,76.5049896610525\r
2017-10-13,76.91371224852475\r
2017-10-15,74.4732697099461\r
2017-10-18,71.73275635146852\r
2017-10-25,67.57758241648878\r
2017-10-28,64.54891186946557\r
2017-10-30,67.66944955874898\r
2017-11-07,60.15627506856577\r
2017-11-17,60.48677578017784\r
2017-11-19,66.18223436432328\r
2017-11-22,63.13194971305142\r
2017-11-24,63.13194971305142\r
2017-11-27,63.13194971305142\r
2017-11-29,65.4090965858232\r
2018-02-25,86.88205414063044\r
2018-02-27,86.90721003159017\r
2018-03-02,86.90721003159017\r
2018-03-14,90.0214846795004\r
2018-03-19,97.44156629982797\r
2018-03-22,97.44156629982797\r
2018-04-01,93.71778305261181\r
2018-04-18,96.21185697322211\r
2018-04-21,99.99735267140154\r
2018-04-23,99.99735267140154\r
2018-04-26,98.59791432619564\r
2018-05-06,98.5189151411773\r
2018-05-11,98.49258718911298\r
2018-05-18,98.49258718911298\r
2018-05-21,98.49258718911298\r
2018-06-20,95.84665773955888\r
2018-06-22,95.84665773955888\r
2018-06-25,99.46842154861766\r
2018-06-27,97.36290487307832\r
2018-07-02,98.36098575926981\r
2018-07-07,96.13355754597193\r
2018-07-10,95.53403138637154\r
2018-07-12,95.32581992049394\r
2018-07-15,92.96905161371643\r
2018-07-17,92.96905161371643\r
2018-07-20,93.30442016664396\r
2018-07-22,92.71137429980276\r
2018-07-25,94.28723952776821\r
2018-07-27,95.71635169086385\r
2018-07-30,96.13355754597193\r
2018-08-01,97.1532538630467\r
2018-08-04,93.66607641374371\r
2018-08-06,95.7424077509751\r
2018-08-11,93.97647162282402\r
2018-08-16,96.3424074472815\r
2018-08-19,98.0979746268636\r
2018-08-21,93.84709497344672\r
2018-08-26,96.60370116693377\r
2018-08-31,93.45935349436843\r
2018-09-03,88.44671163417182\r
2018-09-08,96.23796192567907\r
2018-09-10,96.23796192567907\r
2018-09-13,96.23796192567907\r
2018-09-20,93.58853588476143\r
2018-09-23,94.33907038925251\r
2018-09-25,93.04640543524117\r
2018-09-28,95.27379283099381\r
2018-09-30,92.68562085298504\r
2018-10-03,90.17441708520204\r
2018-10-05,91.35002628740997\r
2018-10-23,83.58477006579317\r
2018-10-25,92.32534547599438\r
2018-10-30,92.32534547599438\r
2018-11-04,87.41088285067534\r
2019-02-12,85.17766833150404\r
2019-02-15,87.66311536491322\r
2019-02-17,86.07846301495829\r
2019-02-20,85.82789720036929\r
2019-02-22,86.32929394243837\r
2019-02-25,86.32929394243837\r
2019-02-27,86.47991966525937\r
2019-03-12,92.19679920622805\r
2019-03-22,91.01722856972\r
2019-03-24,89.2582376895113\r
2019-03-27,90.27642437699794\r
2019-03-29,89.18204283346523\r
2019-04-01,86.88205414063044\r
2019-04-08,86.83175029209603\r
2019-04-13,84.87816867405489\r
2019-05-01,84.23056794705937\r
2019-05-06,92.50541947992066\r
2019-05-11,92.50541947992066\r
2019-05-13,86.3543916082619\r
2019-05-16,86.3543916082619\r
2019-05-23,83.06448281315032\r
2019-06-02,96.52528607103108\r
2019-06-12,96.31629221049654\r
2019-06-17,90.96606807388268\r
2019-06-22,91.42688837669851\r
2019-06-25,91.42688837669851\r
2019-06-27,93.30442016664396\r
2019-06-30,93.25279646802377\r
2019-07-02,93.25279646802377\r
2019-07-05,97.04848990507774\r
2019-07-07,97.04848990507774\r
2019-07-10,96.47302218646382\r
2019-07-12,96.73444436488553\r
2019-07-15,98.9405097175217\r
2019-07-17,98.9405097175217\r
2019-07-22,98.54524564817045\r
2019-07-25,98.6242524968539\r
2019-08-01,99.70631450515684\r
2019-08-04,96.57756023267987\r
2019-08-09,98.12426423253223\r
2019-08-11,95.35183733246338\r
2019-08-14,97.67768894185248\r
2019-08-16,95.76846638609209\r
2019-08-21,95.11777345188214\r
2019-08-24,97.2318537616686\r
2019-08-26,94.90989207927211\r
2019-08-29,95.76846638609209\r
2019-08-31,94.36498969824827\r
2019-09-03,91.50377393555932\r
2019-09-05,91.50377393555932\r
2019-09-13,88.2189551517678\r
2019-09-15,86.63064070719409\r
2019-09-18,82.99025239226151\r
2019-09-20,86.55526827417896\r
2019-10-08,73.73724128236361\r
2019-10-13,73.73724128236361\r
2019-10-25,69.95755647408296\r
2019-10-30,75.6899195886039\r
2019-11-04,74.8541929499952\r
2019-11-09,74.8541929499952\r
2020-02-20,82.12601309499782\r
2020-02-22,86.1787635842394\r
2020-03-01,86.1787635842394\r
2020-03-08,91.83721576289149\r
2020-03-11,96.21185697322211\r
2020-03-13,92.068317980202\r
2020-03-18,92.81441406297432\r
2020-03-21,92.50541947992066\r
2020-03-28,92.22250325747645\r
2020-03-31,90.8893469156846\r
2020-04-05,89.71590274397477\r
2020-04-07,99.81211092668318\r
2020-04-10,94.49462501798584\r
2020-04-12,94.49462501798584\r
2020-04-15,94.49462501798584\r
2020-04-25,95.4559327573096\r
2020-05-07,92.3767821905899\r
2020-05-17,92.3767821905899\r
2020-05-20,93.25279646802377\r
2020-05-22,89.56325330196677\r
2020-05-25,92.5568925926292\r
2020-05-27,94.10591297633222\r
2020-05-30,94.10591297633222\r
2020-06-14,90.50609384589498\r
2020-06-19,95.7945275960229\r
2020-06-21,97.20565123106424\r
2020-06-24,97.20565123106424\r
2020-06-26,97.20565123106424\r
2020-07-01,97.20565123106424\r
2020-07-04,93.84709497344672\r
2020-07-09,100.0\r
2020-07-11,100.0\r
2020-07-14,97.6514428464855\r
2020-07-19,99.78565800210629\r
2020-07-21,98.01912115816457\r
2020-07-24,94.65027268049872\r
2020-07-26,95.82059138057576\r
2020-07-29,96.0552812679166\r
2020-07-31,94.18360883627625\r
2020-08-03,94.18360883627625\r
2020-08-05,90.2509186283612\r
2020-08-08,93.20118314400021\r
2020-08-10,92.17109775672918\r
2020-08-15,91.99126047591402\r
2020-08-20,91.58068295859128\r
2020-08-23,89.6395662245779\r
2020-08-25,83.68400608896832\r
2020-09-02,76.2889274003841\r
2020-09-04,74.78271609978238\r
2020-09-07,66.22781572322728\r
2020-09-12,65.2503309547537\r
2020-09-14,67.32518152652925\r
2020-09-17,66.20502361942852\r
2020-09-19,68.17552825064897\r
2020-11-11,47.79026237736384\r
2020-11-18,51.8597596145662\r
2020-11-21,48.888131334621534\r
2020-11-23,48.888131334621534\r
2020-11-26,48.888131334621534\r
2021-02-11,81.3632909429472\r
2021-02-14,81.3632909429472\r
2021-02-19,81.3632909429472\r
2021-03-23,89.61412596157076\r
2021-03-26,89.61412596157076\r
2021-03-28,96.31629221049654\r
2021-03-31,96.31629221049654\r
2021-04-02,96.31629221049654\r
2021-04-05,100.0\r
2021-04-07,96.81292109815556\r
2021-04-15,100.0\r
2021-04-17,100.0\r
2021-04-20,100.0\r
2021-04-22,100.0\r
2021-05-27,99.97088192994693\r
2021-05-30,99.99735267140154\r
2021-06-09,94.57243722264099\r
2021-06-11,97.02230532878761\r
2021-06-14,94.98782824053757\r
2021-06-16,96.18575459232453\r
2021-06-19,95.0917792495913\r
2021-06-21,95.92487226117284\r
2021-06-26,92.58263304754351\r
2021-07-01,89.2582376895113\r
2021-07-19,91.86288337155369\r
2021-07-21,87.89035017581848\r
2021-07-26,87.89035017581848\r
2021-07-29,94.62432494451366\r
2021-08-05,94.08001953047084\r
2021-08-10,92.91749537810915\r
2021-08-13,92.91749537810915\r
2021-08-18,95.61215320431485\r
2021-08-20,93.02061823258047\r
2021-08-23,94.7281313863217\r
2021-08-25,90.0724516749729\r
2021-08-28,88.90286390335986\r
2021-08-30,88.92823067121925\r
2021-09-04,87.03302914493155\r
2021-09-07,87.46130824017622\r
2021-09-17,88.75071848710829\r
2021-09-22,87.8145815069231\r
2021-09-24,89.30904738518596\r
2021-09-29,89.41069826911944\r
2021-10-12,82.0274521787832\r
2021-10-14,84.18082713229622\r
2021-10-17,79.18794048149404\r
2021-10-24,79.38260116171355\r
2021-10-27,77.3955738894556\r
2022-01-22,82.7429917450342\r
2022-01-25,83.80811122925437\r
2022-01-27,84.30519917062745\r
2022-01-30,83.85777198110294\r
2022-02-01,83.85777198110294\r
2022-02-06,83.36164537927249\r
2022-02-09,85.85294184571922\r
2022-02-26,83.23778081783684\r
2022-03-01,90.0724516749729\r
2022-03-03,86.42970049772723\r
2022-03-08,89.2582376895113\r
2022-03-26,86.40459488611708\r
2022-04-05,90.91491802340813\r
2022-04-15,96.00310994575999\r
2022-04-17,95.19577153573135\r
2022-04-27,94.98782824053757\r
2022-05-17,95.7945275960229\r
2022-05-20,95.7945275960229\r
2022-05-22,95.32581992049394\r
2022-05-27,99.46842154861766\r
2022-05-30,94.46869278471829\r
2022-06-01,98.65059322169353\r
2022-06-04,96.0552812679166\r
2022-06-06,100.0\r
2022-06-11,100.0\r
2022-06-14,97.80895782894305\r
2022-06-16,97.83521928709415\r
2022-06-19,95.95094891596025\r
2022-06-29,95.95094891596025\r
2022-07-11,89.28364122498728\r
2022-07-14,93.22698850908913\r
2022-07-16,90.5571602754829\r
2022-07-19,92.24820991027576\r
2022-07-21,90.50609384589498\r
2022-07-24,90.50609384589498\r
2022-07-26,89.2328367789626\r
2022-07-29,90.96606807388268\r
2022-07-31,89.74135349321995\r
2022-08-03,89.69045461598361\r
2022-08-05,87.53696612079312\r
2022-08-08,86.98269356872437\r
2022-08-10,87.86509131652625\r
2022-08-13,87.23447715842563\r
2022-08-15,85.40254434913265\r
2022-08-20,83.38642631596412\r
2022-08-23,86.1787635842394\r
2022-08-28,83.28731861713547\r
2022-08-30,82.19996198035986\r
2022-09-02,84.70363749604391\r
2022-09-04,82.61946190667264\r
2022-09-12,83.70882177452033\r
2022-09-19,80.505263029989\r
2022-09-22,78.89627498464696\r
2022-10-02,76.5290102725978\r
2022-10-04,77.32322499680771\r
2022-10-07,77.32322499680771\r
2022-10-09,73.66615366892418\r
2022-10-12,73.66615366892418\r
2022-10-22,70.07384908906799\r
2022-10-24,70.07384908906799\r
2022-10-27,70.07384908906799\r
2022-11-01,72.27316574824304\r
2022-11-06,70.67970027853806\r
2022-11-08,69.49308783728402\r
2022-11-11,69.49308783728402\r
2022-11-13,70.19021182250313\r
2022-11-16,70.19021182250313\r
2023-02-06,53.77029476412799\r
2023-02-09,53.17976652047838\r
2023-02-11,54.51177902072721\r
2023-02-14,54.32075957595755\r
2023-02-16,54.341971933907814\r
2023-02-19,53.62244077248113\r
2023-02-21,54.278343882192694\r
2023-02-26,52.528733882701715\r
2023-03-01,52.08936829542231\r
2023-03-13,56.995507163450775\r
2023-03-16,57.38450485592443\r
2023-03-28,65.0464096511886\r
2023-04-05,70.28335247313221\r
2023-04-07,66.86715011149937\r
2023-04-15,72.79145577401344\r
2023-04-17,69.84133400944383\r
2023-05-02,82.42195359226346\r
2023-05-27,89.4869639816447\r
2023-05-30,89.4869639816447\r
2023-06-04,92.14539890917844\r
2023-06-16,90.99164701623152\r
2023-06-24,88.44671163417182\r
2023-06-26,88.44671163417182\r
`;export{r as default};