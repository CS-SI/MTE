const r=`date,value\r
2017-04-30,4.173450057183787\r
2017-05-10,33.85904761703565\r
2017-05-17,33.85904761703565\r
2017-05-30,11.91226573638695\r
2017-06-06,11.91226573638695\r
2017-06-09,11.91226573638695\r
2017-06-19,32.14959177235465\r
2017-06-26,32.14959177235465\r
2017-07-04,42.7476769948388\r
2017-07-06,42.7476769948388\r
2017-07-14,42.7476769948388\r
2017-08-13,74.09066435942535\r
2017-08-15,74.09066435942535\r
2017-08-18,75.15860651819249\r
2017-08-20,75.15860651819249\r
2017-08-23,72.04323967913486\r
2017-08-25,73.96561550860226\r
2017-08-30,72.66010458074574\r
2018-04-25,1.4825646375534125\r
2018-04-27,1.1728124355329848\r
2018-04-30,1.1728124355329848\r
2018-05-05,18.538778593620748\r
2018-06-19,96.01725510482126\r
2018-06-21,96.01725510482126\r
2018-06-24,96.01725510482126\r
2018-06-26,96.01725510482126\r
2018-06-29,96.01725510482126\r
2018-07-04,91.13696188608641\r
2018-07-06,91.13696188608641\r
2018-07-09,91.3491124242485\r
2018-07-11,91.3491124242485\r
2018-07-14,91.3491124242485\r
2018-07-24,99.62721905140707\r
2018-07-26,99.62721905140707\r
2018-07-29,100.0\r
2018-07-31,100.0\r
2018-08-03,93.19993391061647\r
2018-08-05,92.84230819829278\r
2018-08-08,92.34299187282477\r
2018-08-28,100.0\r
2018-08-30,100.0\r
2018-09-02,96.96735800491287\r
2018-09-04,97.9967125750798\r
2018-09-07,97.9967125750798\r
2018-09-09,96.30900774670178\r
2018-09-12,96.30900774670178\r
2018-09-14,82.22110446168658\r
2018-09-17,85.11044200498851\r
2018-09-19,85.11044200498851\r
2018-09-22,85.11044200498851\r
2019-05-02,4.254385680857061\r
2019-05-05,4.254385680857061\r
2019-05-07,4.254385680857061\r
2019-05-10,4.526790272643071\r
2019-05-12,4.526790272643071\r
2019-05-15,13.598133918507042\r
2019-05-30,12.694462987376747\r
2019-06-04,28.59938456706097\r
2019-06-14,28.59938456706097\r
2019-06-19,58.42757825359628\r
2019-06-24,58.42757825359628\r
2019-06-26,58.42757825359628\r
2019-06-29,68.5263051323172\r
2019-07-01,68.5263051323172\r
2019-07-04,68.34720938695598\r
2019-07-06,76.55402987322641\r
2019-07-09,75.72763454748703\r
2019-07-14,77.00120124060209\r
2019-07-16,77.00120124060209\r
2019-07-19,78.22269194975391\r
2019-07-21,76.61781760644504\r
2019-07-24,76.87328147742424\r
2019-07-26,75.032498970733\r
2019-07-29,76.23556038263602\r
2019-07-31,76.61781760644504\r
2019-08-03,76.61781760644504\r
2019-08-05,77.3215487762477\r
2019-08-08,77.70700009247398\r
2019-09-12,78.09358064941671\r
2019-09-14,78.09358064941671\r
2019-09-17,78.09358064941671\r
2019-09-19,78.09358064941671\r
2019-09-22,82.42078090976051\r
2019-09-27,80.2400033741484\r
2020-05-04,53.75609358438377\r
2020-05-06,53.75609358438377\r
2020-05-09,54.431794991005624\r
2020-05-14,54.431794991005624\r
2020-05-19,58.48198377202759\r
2020-05-21,76.87328147742424\r
2020-05-24,75.22170706318705\r
2020-05-26,83.35637837645008\r
2020-05-29,82.62074263941982\r
2020-05-31,82.62074263941982\r
2020-06-03,82.62074263941982\r
2020-06-05,82.42078090976051\r
2020-07-08,94.78311675941058\r
2020-07-10,94.4940968747208\r
2020-07-13,96.96735800491287\r
2020-07-18,94.9278216565085\r
2020-07-20,94.9278216565085\r
2020-07-23,94.9278216565085\r
2020-07-25,93.98956230034071\r
2020-07-28,94.4940968747208\r
2020-07-30,93.91761575534282\r
2020-08-02,93.91761575534282\r
2020-08-04,85.79081581526862\r
2020-08-07,92.84230819829278\r
2020-08-09,83.28934368310253\r
2020-08-12,94.85545295805656\r
2020-08-14,95.87157422278966\r
2020-08-19,95.87157422278966\r
2020-08-22,95.65329709948236\r
2020-08-24,95.7987826261186\r
2020-08-27,95.58060316072134\r
2020-09-01,84.63607743304232\r
2020-09-03,84.63607743304232\r
2020-09-06,84.63607743304232\r
2020-09-08,82.55405702398988\r
2020-09-11,82.55405702398988\r
2021-05-09,9.701249986814137\r
2021-05-14,9.701249986814137\r
2021-05-19,9.701249986814137\r
2021-06-13,36.43917883451578\r
2021-06-15,36.43917883451578\r
2021-06-18,37.729210853777076\r
2021-07-18,56.4887994132181\r
2021-07-20,56.4887994132181\r
2021-07-23,56.70231816357383\r
2021-08-12,55.63946343782518\r
2021-08-14,54.32751732050508\r
2021-08-17,56.222567811534894\r
2021-08-19,56.222567811534894\r
2022-05-14,41.44729811937373\r
2022-05-19,41.44729811937373\r
2022-05-21,41.44729811937373\r
2022-06-18,85.72263484802485\r
2022-06-20,85.72263484802485\r
2022-06-23,85.72263484802485\r
2022-06-25,85.72263484802485\r
2022-07-03,83.49054305257374\r
2022-07-05,83.49054305257374\r
2022-07-08,83.49054305257374\r
2022-07-10,83.49054305257374\r
2022-07-13,74.65492433341079\r
2022-07-15,74.78065791559729\r
2022-07-18,69.36573760681554\r
2022-07-20,71.67460657063062\r
2022-07-25,66.33671186749493\r
2022-07-28,71.73596809368642\r
2022-07-30,49.95442124335934\r
2022-08-02,64.30390615819067\r
2022-08-04,64.30390615819067\r
2022-08-07,56.70231816357383\r
2022-08-09,57.184470870817385\r
2022-08-12,55.00742850079657\r
2022-08-22,54.06733815088638\r
2022-09-01,52.87997390236845\r
2022-09-06,51.70810561781275\r
2022-09-08,51.70810561781275\r
2022-09-11,49.95442124335934\r
2022-09-13,51.91079835616614\r
2022-09-16,51.91079835616614\r
2022-09-18,49.60795409424835\r
2022-09-21,51.86008138904643\r
2023-06-28,100.0\r
2023-07-03,100.0\r
2023-07-08,100.0\r
2023-07-10,100.0\r
2023-07-13,100.0\r
2023-07-15,100.0\r
2023-07-18,100.0\r
`;export{r as default};
