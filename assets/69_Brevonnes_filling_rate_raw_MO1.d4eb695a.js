const n=`date,value\r
2017-03-27,91.89145090319528\r
2017-04-03,92.87260162420911\r
2017-05-16,99.94862114625933\r
2017-05-26,97.21057911129033\r
2017-06-22,91.82578097850859\r
2017-07-05,86.9758980789747\r
2017-08-29,71.12686163596258\r
2017-10-15,44.511574722512286\r
2017-10-18,36.38245295892617\r
2017-11-22,15.391374791046546\r
2018-02-22,97.26141544460117\r
2018-03-24,99.1342350314409\r
2018-04-18,96.86830568576525\r
2018-04-21,94.01953211701\r
2018-05-06,93.49354826050102\r
2018-05-08,96.93561231959563\r
2018-05-11,93.903133547801\r
2018-06-20,100.0\r
2018-06-27,99.62093389146742\r
2018-07-15,98.90577675769993\r
2018-07-17,96.32842713813076\r
2018-07-25,89.9702138289378\r
2018-07-27,92.17483273564713\r
2018-08-06,87.04414813785192\r
2018-09-20,54.49465616723893\r
2018-09-25,51.9221974309891\r
2018-09-30,47.664240709163884\r
2018-10-05,47.70563059887607\r
2018-10-10,47.77730604739332\r
2018-10-13,31.764231412712636\r
2018-10-18,25.45985036799447\r
2018-11-04,28.72406387748604\r
2018-11-14,28.464948998973387\r
2019-02-15,69.12287412314504\r
2019-02-17,73.37546229408002\r
2019-02-25,77.5036236814212\r
2019-02-27,80.27061371351093\r
2019-03-19,87.17651847345337\r
2019-03-22,88.08141601728387\r
2019-03-24,91.67084267101764\r
2019-03-29,89.07020278046622\r
2019-04-01,85.98956609614335\r
2019-04-11,90.3330941441152\r
2019-05-01,93.63469141270384\r
2019-06-02,95.09526425054044\r
2019-06-27,93.87594719193024\r
2019-06-30,99.47570239298723\r
2019-07-02,96.62243354235636\r
2019-07-05,98.81668816904237\r
2019-07-10,96.06889993054548\r
2019-07-25,92.0853570442542\r
2019-08-04,87.45627116786363\r
2019-08-24,72.9905490212045\r
2019-08-26,72.44628886328589\r
2019-09-03,67.84960794088218\r
2019-09-10,64.93518304322608\r
2019-09-15,64.44786384249207\r
2019-09-20,60.239233926921564\r
2020-02-07,67.3905793055214\r
2020-02-15,73.63971940316378\r
2020-02-22,83.73614250072492\r
2020-03-26,91.06730607088338\r
2020-03-28,92.38304539535294\r
2020-04-02,92.75469666210009\r
2020-04-05,90.40468225548149\r
2020-04-10,90.5885802791969\r
2020-04-15,92.21365391353004\r
2020-04-17,95.82176964639227\r
2020-04-20,95.11495474415719\r
2020-04-22,94.02170842347509\r
2020-04-27,93.99015425064273\r
2020-05-07,91.95821954126436\r
2020-05-15,96.41977818407095\r
2020-05-17,92.24924660723165\r
2020-05-20,99.9989924441621\r
2020-05-27,95.58589688269785\r
2020-05-30,98.37068888384216\r
2020-06-01,96.49464972559915\r
2020-06-24,94.57742376657094\r
2020-07-29,89.1338960301453\r
2020-07-31,89.66655313509906\r
2020-08-05,86.96120129366791\r
2020-08-08,80.77924069299053\r
2020-08-20,79.72715461102736\r
2020-09-04,69.45756373868399\r
2020-09-17,58.030650128038964\r
2020-11-18,40.00185006639809\r
2020-11-21,26.254811037839122\r
2021-02-14,81.57451088307342\r
2021-02-21,85.91125919699167\r
2021-02-24,85.39213500178236\r
2021-03-01,87.76384336503901\r
2021-03-06,88.49896560616205\r
2021-03-28,94.10660247271046\r
2021-03-31,92.06919100884822\r
2021-04-02,94.33097949064438\r
2021-04-22,96.45941272464911\r
2021-04-25,95.9227830427149\r
2021-04-27,97.1045253268237\r
2021-05-30,100.0\r
2021-06-01,100.0\r
2021-06-14,98.90577675769993\r
2021-07-19,97.66854674805798\r
2021-07-21,100.0\r
2021-08-25,86.01149791620341\r
2021-09-02,75.65231963566639\r
2021-09-07,69.00015245531894\r
2021-09-24,54.95686080491492\r
2021-10-14,46.21504307294722\r
2021-10-24,40.33723901038472\r
2022-02-09,65.2695859351218\r
2022-02-26,82.2464559383696\r
2022-03-08,88.28214912871809\r
2022-03-21,91.3226721519896\r
2022-03-23,93.64772495516753\r
2022-03-26,90.35125581884326\r
2022-03-28,94.59160877219448\r
2022-04-17,97.60654145684903\r
2022-04-22,97.467095865477\r
2022-06-04,94.80996311243986\r
2022-06-19,94.49669701338034\r
2022-06-21,95.51354314522932\r
2022-07-06,96.90030123648879\r
2022-07-11,95.81957424741032\r
2022-07-16,94.03150208969144\r
2022-07-19,92.01208148698431\r
2022-07-24,88.49049988237992\r
2022-07-31,84.17200559784447\r
2022-08-03,81.25678614836997\r
2022-08-08,79.29602642853372\r
2022-08-10,77.84842344494972\r
2022-08-13,75.9005980776095\r
2022-09-22,49.73612676163093\r
2022-10-09,39.668482572024665\r
2022-10-12,32.379544230847166\r
2022-10-19,37.839712291601366\r
2022-10-22,26.254811037839122\r
2023-02-11,65.19234582029792\r
2023-02-14,66.44065875684035\r
2023-03-01,72.14066620546498\r
2023-04-05,92.71468956032872\r
2023-05-25,97.2172092431547\r
2023-05-27,100.0\r
2023-06-01,100.0\r
2023-06-04,98.6664350271498\r
2023-06-06,96.4098707211854\r
2023-06-14,98.66977284176667\r
2023-06-24,97.03716468939177\r
`;export{n as default};