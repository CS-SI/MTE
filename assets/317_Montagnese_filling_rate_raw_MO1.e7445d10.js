const n=`date,value\r
2017-02-22,47.91649063057695\r
2017-02-25,82.12102319825705\r
2017-03-17,97.46777186011212\r
2017-03-27,91.88762445625939\r
2017-04-23,94.87894300418749\r
2017-05-16,97.91760175900565\r
2017-05-26,100.0\r
2017-06-25,100.0\r
2017-07-05,100.0\r
2017-07-07,93.2014870563868\r
2017-07-17,93.99422842901942\r
2017-07-27,96.48174877004205\r
2017-08-04,97.19836518211072\r
2017-08-14,100.0\r
2017-08-21,95.05637735423727\r
2017-08-24,98.54908293898104\r
2017-08-26,89.11552684361688\r
2017-09-05,86.30075449445262\r
2017-09-20,90.40972332817344\r
2017-09-23,94.96763970358002\r
2017-10-05,91.8003613364658\r
2017-10-08,91.36466026095074\r
2017-10-10,90.9299834332731\r
2017-10-13,92.06227359687031\r
2017-10-15,93.02577285871808\r
2017-10-18,87.65991799992383\r
2017-10-25,87.31914329116262\r
2017-10-28,84.36534479758903\r
2017-12-24,91.8003613364658\r
2018-01-01,90.75639950447143\r
2018-02-25,86.04707970535976\r
2018-03-14,89.02957491611969\r
2018-04-18,94.70167246099825\r
2018-04-21,98.09782027731916\r
2018-04-26,96.66065722013961\r
2018-05-11,97.91760175900565\r
2018-06-20,96.48174877004205\r
2018-06-25,96.83972944122836\r
2018-06-27,90.66966899954198\r
2018-07-02,93.7296126824092\r
2018-07-07,92.14965961677198\r
2018-07-12,96.03519416633051\r
2018-07-15,93.55340697186651\r
2018-07-25,97.01896542974026\r
2018-07-27,95.2339755075451\r
2018-07-30,97.28812646862991\r
2018-08-01,90.84317098253544\r
2018-08-04,95.32283600929591\r
2018-08-06,96.3030040945071\r
2018-08-11,93.02577285871808\r
2018-08-19,94.96763970358002\r
2018-08-21,92.67483600172034\r
2018-09-03,90.32315672039579\r
2018-09-08,94.87894300418749\r
2018-09-20,94.08251559095604\r
2018-09-23,91.27764295375032\r
2018-09-28,91.53881778463146\r
2018-10-03,88.68617703479701\r
2018-10-05,90.66966899954198\r
2018-10-23,80.96907342463744\r
2018-10-25,83.4473822812579\r
2018-12-27,79.17511432729772\r
2019-01-03,80.23278061989797\r
2019-01-16,85.96260343938044\r
2019-02-12,81.70868951432378\r
2019-02-15,81.87349991985326\r
2019-02-17,78.28558303464008\r
2019-02-20,81.70868951432378\r
2019-02-22,79.90660620019493\r
2019-02-25,82.86580813592624\r
2019-02-27,81.95596665712607\r
2019-03-12,83.36417721569165\r
2019-03-22,83.53062836047384\r
2019-03-24,81.13314537076374\r
2019-03-27,79.74376519589799\r
2019-03-29,80.06961134284072\r
2019-04-13,82.86580813592624\r
2019-05-01,86.97902445056623\r
2019-05-06,96.3030040945071\r
2019-05-13,89.63209901296378\r
2019-05-23,90.75639950447143\r
2019-06-02,92.58720419394902\r
2019-06-17,86.38539475295673\r
2019-06-22,99.00136893625532\r
2019-06-27,89.28755364395174\r
2019-06-30,100.0\r
2019-07-05,99.00136893625532\r
2019-07-12,96.1244231971096\r
2019-07-15,97.55765596418605\r
2019-07-22,90.15014643163023\r
2019-07-25,97.91760175900565\r
2019-08-01,96.2136931733176\r
2019-08-04,95.50067986074367\r
2019-08-09,98.36845507094972\r
2019-08-14,99.90901071714879\r
2019-08-16,95.2339755075451\r
2019-08-21,90.06370275156706\r
2019-08-24,96.03519416633051\r
2019-08-29,92.41206346937247\r
2019-08-31,97.10864483566583\r
2019-09-03,92.85022250594824\r
2019-09-13,95.85685894284958\r
2019-09-15,95.76775275104364\r
2019-10-08,86.55479826033591\r
2019-10-30,82.70001324039784\r
2019-12-29,64.1430166727819\r
2020-01-01,64.58223626679327\r
2020-01-06,74.46211968562847\r
2020-02-05,75.32997458883233\r
2020-02-20,69.13167966430161\r
2020-02-22,73.67747287726655\r
2020-03-08,89.8909383223937\r
2020-03-18,83.7806126752075\r
2020-04-05,86.72436575172546\r
2020-04-10,90.06370275156706\r
2020-05-07,89.71833780424508\r
2020-05-20,97.64758100655625\r
2020-05-25,91.45171853806426\r
2020-05-27,89.63209901296378\r
2020-06-19,87.74521415298972\r
2020-06-21,81.95596665712607\r
2020-07-04,96.66065722013961\r
2020-07-09,97.91760175900565\r
2020-07-14,98.54908293898104\r
2020-07-19,96.03519416633051\r
2020-07-21,82.9487671094715\r
2020-07-24,96.75017285953317\r
2020-07-31,88.0013485467797\r
2020-08-05,88.94366397102326\r
2020-08-08,100.0\r
2020-08-10,95.14515595570896\r
2020-08-20,92.06227359687031\r
2020-08-25,87.48944866390343\r
2020-09-02,87.91592942688654\r
2020-09-04,83.28101316425676\r
2020-09-12,86.38539475295673\r
2020-09-14,87.23405209219712\r
2020-09-17,91.10373125092693\r
2020-09-19,91.71313918429097\r
2020-11-11,75.64679011817567\r
2020-11-18,79.74376519589799\r
2020-11-21,73.75575273442573\r
2021-02-24,92.85022250594824\r
2021-03-23,85.62510837336377\r
2021-03-26,91.71313918429097\r
2021-03-28,92.14965961677198\r
2021-04-05,91.53881778463146\r
2021-04-07,92.06227359687031\r
2021-04-15,100.0\r
2021-05-12,98.820331740605\r
2021-05-27,97.19836518211072\r
2021-06-11,94.79028725651001\r
2021-06-14,96.48174877004205\r
2021-06-16,92.85022250594824\r
2021-06-26,89.63209901296378\r
2021-07-19,88.34343490172056\r
2021-07-29,94.87894300418749\r
2021-08-10,94.08251559095604\r
2021-08-20,94.25921278171307\r
2021-08-28,87.74521415298972\r
2021-08-30,89.37362851585907\r
2021-09-12,92.67483600172034\r
2021-09-14,90.32315672039579\r
2021-09-22,88.77196502989582\r
2021-09-24,87.65991799992383\r
2021-10-12,85.20416207173456\r
2021-10-14,81.95596665712607\r
2021-10-17,81.70868951432378\r
2021-10-27,77.80247737441812\r
2021-12-16,78.44694661593059\r
2021-12-18,79.66240624686182\r
2021-12-21,77.72210342764664\r
2022-01-15,75.32997458883233\r
2022-01-17,74.54081025268319\r
2022-01-22,77.80247737441812\r
2022-01-25,77.16063517163448\r
2022-01-27,75.40911687780788\r
2022-02-09,82.28624382493065\r
2022-02-26,78.60847437119375\r
2022-03-01,83.94747394446\r
2022-03-26,81.54404320405962\r
2022-04-05,91.71313918429097\r
2022-04-10,92.49961334968093\r
2022-04-17,87.14900188546208\r
2022-05-12,92.32455455348023\r
2022-05-17,94.43607379196702\r
2022-05-22,91.36466026095074\r
2022-06-01,93.37736509531491\r
2022-06-06,97.19836518211072\r
2022-06-16,93.37736509531491\r
2022-06-19,96.66065722013961\r
2022-07-11,94.1708437086714\r
2022-07-14,99.09194893112769\r
2022-07-16,95.4117374605119\r
2022-07-19,98.72987454070893\r
2022-07-21,94.87894300418749\r
2022-07-24,95.9460060814279\r
2022-07-26,96.83972944122836\r
2022-07-31,94.70167246099825\r
2022-08-03,97.64758100655625\r
2022-08-08,92.85022250594824\r
2022-08-10,93.64148934811585\r
2022-08-20,88.8577940087933\r
2022-08-28,92.85022250594824\r
2022-08-30,93.46536555411487\r
2022-09-04,93.7296126824092\r
2022-09-12,91.36466026095074\r
2022-09-19,86.47007600840878\r
2022-10-02,83.28101316425676\r
2022-10-04,81.37956099295695\r
2022-10-09,82.78289017940723\r
2022-11-01,61.75378626436613\r
2022-11-06,74.93487910040356\r
2022-11-08,81.05108888384132\r
2022-11-13,76.36202708174046\r
2022-11-16,75.56752464298667\r
2022-12-06,84.44904199523599\r
2022-12-28,80.96907342463744\r
2023-02-11,82.53438241684266\r
2023-02-14,86.30075449445262\r
2023-02-16,85.03607057290064\r
2023-03-01,92.58720419394902\r
2023-03-13,93.90598222331413\r
2023-03-16,87.23405209219712\r
2023-03-28,90.66966899954198\r
2023-04-05,96.92932696477926\r
2023-04-07,93.55340697186651\r
2023-06-16,89.02957491611969\r
2023-07-09,97.28812646862991\r
2023-07-11,97.91760175900565\r
2023-07-14,99.90901071714879\r
2023-07-29,99.63628843127655\r
2023-07-31,92.41206346937247\r
2023-08-08,97.10864483566583\r
2023-08-13,96.57118252349377\r
2023-08-20,93.46536555411487\r
2023-08-23,93.2014870563868\r
2023-09-04,93.37736509531491\r
2023-09-07,92.06227359687031\r
2023-09-14,87.14900188546208\r
2023-09-24,82.9487671094715\r
2023-09-29,83.86402280421105\r
2023-10-02,82.86580813592624\r
2023-10-04,81.62634584704013\r
2023-10-07,78.12438363130141\r
2023-10-12,78.2049628104779\r
2023-11-08,75.25087336294267\r
2023-11-26,78.77016629645446\r
2023-12-03,80.55961156151852\r
`;export{n as default};