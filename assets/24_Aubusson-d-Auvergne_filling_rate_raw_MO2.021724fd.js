const n=`date,value\r
2017-02-25,83.54943451350664\r
2017-03-17,85.64466072002227\r
2017-03-27,86.50555340936721\r
2017-04-03,83.7037652000467\r
2017-04-23,89.67159372275015\r
2017-05-03,96.41874314596083\r
2017-05-16,81.55582538917226\r
2017-05-23,87.76528428257888\r
2017-05-26,83.7809828266537\r
2017-06-02,83.3181999104883\r
2017-06-05,84.32248210573825\r
2017-06-12,86.42711626782818\r
2017-06-15,88.39849268077458\r
2017-06-22,88.95437785542796\r
2017-06-25,88.2399816750219\r
2017-07-02,96.41874314596083\r
2017-07-05,97.0817263584644\r
2017-07-07,94.93516343261369\r
2017-07-12,94.93516343261369\r
2017-07-17,92.56864460715505\r
2017-07-27,87.3706606871328\r
2017-08-14,88.16077839705882\r
2017-08-19,95.09944947341737\r
2017-08-21,88.2399816750219\r
2017-08-24,88.2399816750219\r
2017-08-26,91.9209588934503\r
2017-08-29,93.78905494576108\r
2017-09-03,93.29995183598314\r
2017-10-05,84.71031281725735\r
2017-10-10,84.71031281725735\r
2017-10-13,84.71031281725735\r
2017-10-15,89.27279238186566\r
2017-10-18,91.11448262332337\r
2017-10-25,91.11448262332337\r
2017-10-28,86.8982615734289\r
2017-11-17,86.8982615734289\r
2017-11-19,86.8982615734289\r
2017-11-22,89.83135789930265\r
2017-11-27,89.83135789930265\r
2017-12-07,83.93552264317591\r
2017-12-09,83.93552264317591\r
2017-12-12,83.93552264317591\r
2017-12-14,83.93552264317591\r
2018-01-23,87.6862899193404\r
2018-01-28,91.5979509050279\r
2018-01-31,91.5979509050279\r
2018-03-14,89.1135154993579\r
2018-03-19,93.0558697510897\r
2018-03-22,93.0558697510897\r
2018-04-21,89.1135154993579\r
2018-04-23,89.1135154993579\r
2018-04-26,89.1135154993579\r
2018-05-01,88.2399816750219\r
2018-05-06,87.76528428257888\r
2018-05-08,93.0558697510897\r
2018-05-11,91.35606020229326\r
2018-05-18,91.8401547141861\r
2018-05-21,92.2445234744797\r
2018-06-02,60.78812548425766\r
2018-06-07,65.08459864664144\r
2018-06-12,65.08459864664144\r
2018-06-20,85.2547393522449\r
2018-06-22,100.0\r
2018-06-25,91.03402634972629\r
2018-06-27,97.99695929971195\r
2018-07-02,96.99873183494554\r
2018-07-07,96.41874314596083\r
2018-07-10,88.7953794552884\r
2018-07-12,94.36125737431975\r
2018-07-15,95.34613925014041\r
2018-07-17,95.34613925014041\r
2018-07-20,95.84045731723565\r
2018-07-22,95.84045731723565\r
2018-07-25,89.67159372275015\r
2018-07-27,95.26387456333562\r
2018-07-30,94.11581914171813\r
2018-08-01,93.46284710792285\r
2018-08-04,93.46284710792285\r
2018-08-06,96.00550806597933\r
2018-08-11,92.97457861147328\r
2018-08-16,97.99695929971195\r
2018-08-19,90.63226690616429\r
2018-08-21,94.27940986132396\r
2018-08-26,91.03402634972629\r
2018-09-03,87.44951576075806\r
2018-09-05,93.21855636398078\r
2018-09-08,93.38138208417564\r
2018-09-10,90.15130389276919\r
2018-09-13,94.11581914171813\r
2018-09-18,92.56864460715505\r
2018-09-20,90.95360487023173\r
2018-09-23,88.47780040725543\r
2018-09-25,90.39162880277975\r
2018-09-28,89.27279238186566\r
2018-10-05,87.84431346657809\r
2018-10-18,84.63267697905906\r
2018-10-20,92.64976184672572\r
2018-10-23,92.64976184672572\r
2018-10-25,92.64976184672572\r
2018-10-30,89.75145840880433\r
2018-11-04,91.75938532260017\r
2018-11-09,91.75938532260017\r
2018-11-12,90.47180670550586\r
2018-11-14,90.55201940684934\r
2018-11-22,84.63267697905906\r
2018-11-24,84.63267697905906\r
2018-11-27,80.18944397127596\r
2018-12-27,77.63934436991904\r
2018-12-29,77.63934436991904\r
2019-02-05,65.28951888170977\r
2019-02-10,65.28951888170977\r
2019-02-12,74.2534497843208\r
2019-02-15,70.23129514993217\r
2019-02-17,78.75941521965115\r
2019-02-20,78.01182867934736\r
2019-02-22,78.9093513477154\r
2019-02-25,81.02311195701961\r
2019-02-27,79.58579131563896\r
2019-03-04,81.40344716958286\r
2019-03-07,86.74107381917514\r
2019-03-22,83.54943451350664\r
2019-03-24,91.75938532260017\r
2019-03-27,85.80087314201559\r
2019-03-29,88.31921976981198\r
2019-04-01,88.31921976981198\r
2019-04-08,87.29184043755498\r
2019-04-13,96.00550806597933\r
2019-04-18,91.67865071933366\r
2019-05-01,90.55201940684934\r
2019-05-13,100.0\r
2019-05-16,94.7710164459601\r
2019-05-23,97.0817263584644\r
2019-05-26,97.0817263584644\r
2019-05-31,96.25334485284644\r
2019-06-02,91.11448262332337\r
2019-06-05,91.11448262332337\r
2019-06-12,98.24729786751621\r
2019-06-17,99.41967813860838\r
2019-06-27,99.41967813860838\r
2019-06-30,96.74995675418491\r
2019-07-02,98.74891292803267\r
2019-07-05,99.00018938739902\r
2019-07-07,95.75798407749252\r
2019-07-10,97.49722017254554\r
2019-07-12,96.99873183494554\r
2019-07-15,99.41967813860838\r
2019-07-17,98.33081353476364\r
2019-07-20,99.16788069312081\r
2019-07-22,97.16475562924495\r
2019-07-25,97.74693339581188\r
2019-08-01,95.01728907156158\r
2019-08-04,93.54434690658971\r
2019-08-06,93.54434690658971\r
2019-08-09,97.24781964666505\r
2019-08-11,96.08808557372733\r
2019-08-14,95.51077290429916\r
2019-08-16,95.51077290429916\r
2019-08-24,94.03407593637276\r
2019-08-26,92.2445234744797\r
2019-08-29,96.91577205931084\r
2019-08-31,94.7710164459601\r
2019-09-03,91.5979509050279\r
2019-09-13,91.75938532260017\r
2019-09-15,92.89332225059162\r
2019-09-18,96.66710122593997\r
2019-09-20,96.83284703218295\r
2019-09-30,96.66710122593997\r
2019-10-03,91.8401547141861\r
2019-10-08,87.29184043755498\r
2019-10-13,90.31148569931722\r
2019-10-25,90.39162880277975\r
2019-10-30,89.1135154993579\r
2019-11-04,89.1135154993579\r
2019-12-29,47.759650131485465\r
2020-01-06,75.34942499119573\r
2020-01-16,77.93726200109987\r
2020-01-18,77.93726200109987\r
2020-01-21,77.93726200109987\r
2020-01-26,75.12960109356558\r
2020-02-07,85.09901469400137\r
2020-02-12,85.09901469400137\r
2020-02-15,87.13430441317516\r
2020-02-20,78.53477277786976\r
2020-02-22,78.53477277786976\r
2020-03-21,78.60961869082728\r
2020-03-23,82.39639896431244\r
2020-03-26,82.39639896431244\r
2020-03-28,81.47961884187794\r
2020-03-31,81.63206681078303\r
2020-04-02,79.13451727622494\r
2020-04-05,79.5104917412459\r
2020-04-07,77.86273023033361\r
2020-04-10,76.52712833499939\r
2020-04-12,75.05639632870323\r
2020-04-15,73.16533673143569\r
2020-04-27,73.7446851441148\r
2020-05-07,97.74693339581188\r
2020-05-17,89.43220849774362\r
2020-05-20,93.13719566880432\r
2020-05-22,93.13719566880432\r
2020-05-25,93.0558697510897\r
2020-05-27,90.47180670550586\r
2020-05-30,93.29995183598314\r
2020-06-01,93.29995183598314\r
2020-06-14,100.0\r
2020-06-21,96.83284703218295\r
2020-06-24,96.83284703218295\r
2020-06-26,99.25177844397786\r
2020-06-29,98.24729786751621\r
2020-07-01,100.0\r
2020-07-04,98.08037074937175\r
2020-07-06,98.08037074937175\r
2020-07-09,98.41436393997017\r
2020-07-11,98.41436393997017\r
2020-07-14,100.0\r
2020-07-19,97.66366091160367\r
2020-07-21,100.0\r
2020-07-24,98.74891292803267\r
2020-07-26,100.0\r
2020-07-29,97.74693339581188\r
2020-07-31,98.58156896178902\r
2020-08-05,97.58042317030807\r
2020-08-08,93.87069383776102\r
2020-08-10,92.4065144744187\r
2020-08-15,98.33081353476364\r
2020-08-18,93.29995183598314\r
2020-08-20,97.58042317030807\r
2020-08-25,91.5979509050279\r
2020-09-02,98.83263701377119\r
2020-09-04,94.36125737431975\r
2020-09-07,97.99695929971195\r
2020-09-09,97.99695929971195\r
2020-09-12,96.17069783622489\r
2020-09-14,93.0558697510897\r
2020-09-17,93.54434690658971\r
2020-11-18,47.70100961181569\r
2020-11-21,47.70100961181569\r
2020-11-23,49.59499437803218\r
2020-11-26,48.52518588804913\r
2020-11-28,48.46608696318101\r
2020-12-18,83.7809828266537\r
2020-12-28,83.7809828266537\r
2021-02-14,53.1816081391253\r
2021-02-21,54.23777851790778\r
2021-02-24,51.829895697816355\r
2021-02-26,51.22111351962755\r
2021-03-01,52.07439441403305\r
2021-03-06,50.55552057360486\r
2021-03-23,44.19066489911659\r
2021-03-28,53.36725231819206\r
2021-03-31,51.646891331195455\r
2021-04-02,60.3926967400927\r
2021-04-05,62.58318479073041\r
2021-04-07,60.98631357731704\r
2021-04-12,64.87999376697408\r
2021-04-15,68.05191255469781\r
2021-04-17,67.35606122878401\r
2021-04-27,95.26387456333562\r
2021-05-05,95.01728907156158\r
2021-05-27,90.47180670550586\r
2021-05-30,90.47180670550586\r
2021-06-01,90.47180670550586\r
2021-06-11,88.47780040725543\r
2021-06-14,94.52505670353757\r
2021-06-16,90.63226690616429\r
2021-06-26,96.08808557372733\r
2021-07-11,89.27279238186566\r
2021-07-19,100.0\r
2021-07-21,92.4065144744187\r
2021-07-29,91.67865071933366\r
2021-08-05,91.35606020229326\r
2021-08-08,94.60700851849667\r
2021-08-10,97.16475562924495\r
2021-08-13,97.16475562924495\r
2021-08-15,97.16475562924495\r
2021-08-20,95.75798407749252\r
2021-08-25,88.39849268077458\r
2021-08-28,88.39849268077458\r
2021-09-04,93.0558697510897\r
2021-09-07,91.4366556458656\r
2021-09-12,90.15130389276919\r
2021-09-22,86.11371602797327\r
2021-09-24,85.56660676659804\r
2021-10-14,84.39997855080789\r
2021-10-17,85.02120462944686\r
2021-10-19,87.60733037751936\r
2021-10-22,87.60733037751936\r
2021-10-24,84.86568903281008\r
2021-10-27,77.63934436991904\r
2021-12-21,81.40344716958286\r
2021-12-23,86.50555340936721\r
2022-01-25,84.86568903281008\r
2022-01-27,95.34613925014041\r
2022-02-09,83.47232145492084\r
2022-02-11,83.47232145492084\r
2022-02-19,88.08160993657759\r
2022-02-26,83.47232145492084\r
2022-03-01,83.47232145492084\r
2022-03-06,88.55714294860067\r
2022-03-08,86.03545305289772\r
2022-03-26,89.59176384178909\r
2022-04-15,85.2547393522449\r
2022-04-17,92.97457861147328\r
2022-04-22,88.87486124955839\r
2022-04-27,88.7953794552884\r
2022-04-30,95.75798407749252\r
2022-05-02,90.71254920280516\r
2022-05-07,95.67554559500402\r
2022-05-12,86.97690769288876\r
2022-05-17,96.83284703218295\r
2022-05-25,96.83284703218295\r
2022-05-27,96.83284703218295\r
2022-05-30,90.15130389276919\r
2022-06-01,90.15130389276919\r
2022-06-04,92.082671612451\r
2022-06-06,92.082671612451\r
2022-06-11,99.00018938739902\r
2022-06-16,99.08401767405608\r
2022-06-19,95.67554559500402\r
2022-06-21,95.67554559500402\r
2022-06-29,94.68899509951441\r
2022-07-01,88.87486124955839\r
2022-07-06,92.89332225059162\r
2022-07-11,99.92421072159524\r
2022-07-14,94.85307255720323\r
2022-07-16,96.74995675418491\r
2022-07-19,97.66366091160367\r
2022-07-21,95.84045731723565\r
2022-07-24,95.34613925014041\r
2022-07-26,94.7710164459601\r
2022-07-31,96.08808557372733\r
2022-08-03,95.67554559500402\r
2022-08-05,97.58042317030807\r
2022-08-08,97.91358259048579\r
2022-08-10,97.49722017254554\r
2022-08-13,97.58042317030807\r
2022-08-25,96.08808557372733\r
2022-08-28,96.33602662296676\r
2022-08-30,96.33602662296676\r
2022-09-02,96.33602662296676\r
2022-09-04,93.7074508261432\r
2022-09-09,92.3255015825301\r
2022-09-12,92.64976184672572\r
2022-09-14,87.44951576075806\r
2022-09-19,86.42711626782818\r
2022-09-22,86.58402538221229\r
2022-10-02,80.11386527877252\r
2022-10-04,94.85307255720323\r
2022-10-07,96.5842804480717\r
2022-10-09,92.89332225059162\r
2022-10-12,92.89332225059162\r
2022-10-22,88.31921976981198\r
2022-11-11,78.60961869082728\r
2022-11-13,78.60961869082728\r
2022-12-06,81.2512084527236\r
2022-12-08,92.4875621495066\r
2022-12-11,85.48858765244239\r
2022-12-13,85.48858765244239\r
2022-12-18,90.31148569931722\r
2023-02-09,79.81189938914078\r
2023-02-11,88.71593247327027\r
2023-02-14,82.16673318563133\r
2023-02-16,85.2547393522449\r
2023-02-21,82.85667190770599\r
2023-02-26,84.94342940882711\r
2023-03-28,96.66710122593997\r
2023-03-31,96.66710122593997\r
2023-04-05,96.99873183494554\r
2023-04-07,96.99873183494554\r
2023-05-27,90.87321818548371\r
2023-05-30,90.87321818548371\r
2023-06-01,92.4065144744187\r
2023-06-04,92.4065144744187\r
2023-06-06,97.66366091160367\r
2023-06-11,91.4366556458656\r
2023-06-14,92.89332225059162\r
2023-06-16,91.8401547141861\r
2023-06-19,99.16788069312081\r
2023-06-24,100.0\r
2023-06-26,96.00550806597933\r
2023-07-04,87.76528428257888\r
2023-07-06,94.93516343261369\r
2023-07-09,97.24781964666505\r
2023-07-11,95.75798407749252\r
2023-07-14,97.16475562924495\r
2023-07-16,97.16475562924495\r
2023-07-19,96.33602662296676\r
`;export{n as default};
