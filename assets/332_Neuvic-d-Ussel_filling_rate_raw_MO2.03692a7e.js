const r=`date,value\r
2017-02-25,58.313277225398075\r
2017-03-07,57.66311758754399\r
2017-03-17,90.42149885282132\r
2017-03-27,90.51015668718868\r
2017-04-03,89.7852864671377\r
2017-04-06,89.70243380785776\r
2017-04-23,78.6151332422797\r
2017-05-03,82.30675903285129\r
2017-05-16,100.0\r
2017-05-23,100.0\r
2017-05-26,100.0\r
2017-06-02,91.46540597820558\r
2017-06-05,91.4320163069584\r
2017-06-22,89.13433304154904\r
2017-06-25,89.64169449871872\r
2017-07-02,91.73826947451154\r
2017-07-05,90.49907257094013\r
2017-07-07,90.6043934396308\r
2017-07-12,90.6043934396308\r
2017-07-17,90.74304763695757\r
2017-08-14,93.43272791099447\r
2017-08-19,95.94923213808049\r
2017-08-21,91.08727327836237\r
2017-08-24,92.60912583206078\r
2017-08-26,93.6292502930933\r
2017-08-29,92.5140662209617\r
2017-09-03,90.98728348395097\r
2017-09-13,87.95859510821067\r
2017-09-20,87.964074786004\r
2017-09-23,91.49880049078132\r
2017-09-28,91.49880049078132\r
2017-10-05,88.21628648279224\r
2017-10-10,88.21628648279224\r
2017-10-13,92.42463377145079\r
2017-10-15,87.01810897586468\r
2017-10-18,88.17788794398169\r
2017-10-25,85.95672233294654\r
2017-10-28,83.29644953735011\r
2017-10-30,83.13028194854694\r
2017-11-04,83.13028194854694\r
2017-11-07,83.06063798827387\r
2017-11-17,61.59304755117344\r
2017-11-19,62.76278251212412\r
2017-11-22,58.87753073702293\r
2017-11-27,59.54715473987521\r
2017-11-29,56.693314506981274\r
2017-12-07,57.251308276792656\r
2018-02-25,79.72398443395649\r
2018-02-27,79.31861796270557\r
2018-03-14,81.67263245490474\r
2018-03-17,82.9749541698525\r
2018-03-22,87.5534752684025\r
2018-04-06,91.66027553917652\r
2018-04-16,92.39110545925546\r
2018-04-18,98.16002857374583\r
2018-04-21,96.25004231569022\r
2018-04-23,96.7844739896711\r
2018-04-26,96.1989349860794\r
2018-05-06,95.69978709504274\r
2018-05-08,94.3268198909341\r
2018-05-11,97.74826711487793\r
2018-05-13,97.74826711487793\r
2018-05-18,93.53377608335849\r
2018-05-21,93.53377608335849\r
2018-05-26,97.0350371428838\r
2018-06-02,97.0350371428838\r
2018-06-20,89.69691137734264\r
2018-06-22,92.26820965181442\r
2018-06-25,88.41386953543835\r
2018-06-27,89.26106617882854\r
2018-07-02,88.64460491483004\r
2018-07-07,87.89284954944286\r
2018-07-10,89.02969439278343\r
2018-07-12,89.98978621343946\r
2018-07-15,93.54500633552335\r
2018-07-17,93.54500633552335\r
2018-07-25,94.09594435041609\r
2018-08-06,91.5878761902691\r
2018-08-11,91.1817481266785\r
2018-08-16,93.53377608335849\r
2018-08-19,93.37660878197886\r
2018-08-21,89.29965132620593\r
2018-08-26,87.89832760031301\r
2018-09-03,90.82073076250418\r
2018-09-05,90.82073076250418\r
2018-09-08,89.509229089495\r
2018-09-10,84.59815322898157\r
2018-09-13,84.59815322898157\r
2018-09-18,88.58964625880799\r
2018-09-20,84.54959931718236\r
2018-09-23,65.06517766764084\r
2018-09-25,65.71300687038044\r
2018-09-28,60.37543030337653\r
2018-09-30,58.08074506525707\r
2018-10-05,45.40848512546124\r
2018-10-08,44.21375288577424\r
2018-10-13,35.63012764257857\r
2018-10-18,32.0060305452745\r
2018-10-20,31.214082192647712\r
2018-10-23,27.58426791470044\r
2018-10-25,24.814117633043452\r
2018-10-30,24.814117633043452\r
2018-11-04,24.033393309914693\r
2018-11-14,25.554391442623142\r
2018-11-19,26.84833564183591\r
2018-11-22,25.30333263687327\r
2018-11-29,26.554817088640498\r
2019-02-15,62.408553857680204\r
2019-02-17,65.25001159605272\r
2019-02-20,64.83200096292452\r
2019-02-22,63.62773985025471\r
2019-02-25,62.72924030525458\r
2019-02-27,64.05231744144743\r
2019-03-12,70.8409991800522\r
2019-03-22,77.49161472777693\r
2019-03-24,76.82578263495775\r
2019-03-27,77.6584291267194\r
2019-03-29,78.3114120705861\r
2019-04-01,77.68972268422563\r
2019-04-13,81.5396602540239\r
2019-04-18,81.44397355663274\r
2019-05-06,87.77784180472894\r
2019-05-13,88.60063690712263\r
2019-05-16,92.08956810170754\r
2019-05-23,92.2961348125905\r
2019-05-31,96.06837634678675\r
2019-06-02,93.28684602960416\r
2019-06-17,83.54863232014425\r
2019-06-25,83.54863232014425\r
2019-06-27,86.94173455865064\r
2019-06-30,86.59293362533536\r
2019-07-02,86.67463387943556\r
2019-07-05,91.57117187474293\r
2019-07-07,91.59344456433537\r
2019-07-10,91.39863147740344\r
2019-07-15,93.04577855047029\r
2019-07-17,92.80495885253983\r
2019-07-20,92.77137581068934\r
2019-07-22,92.63149843347604\r
2019-07-25,94.49589553749192\r
2019-08-04,90.99839130726515\r
2019-08-09,94.44516021796169\r
2019-08-14,90.78188589984923\r
2019-08-16,90.02296574297829\r
2019-08-21,96.8983344379193\r
2019-08-24,92.87773866824355\r
2019-08-26,91.8385860976257\r
2019-08-29,91.4431456594263\r
2019-08-31,89.21697697705524\r
2019-09-03,85.46318028442136\r
2019-09-13,84.25312156260361\r
2019-09-15,85.60949807182195\r
2019-09-18,85.75591523978325\r
2019-09-20,86.1740208445679\r
2019-09-30,89.37684148683343\r
2019-10-03,87.32387289703037\r
2020-02-07,88.32054455141669\r
2020-02-12,88.32054455141669\r
2020-02-15,86.28275179161825\r
2020-02-20,86.40785968376082\r
2020-02-22,86.12510968385673\r
2020-03-13,89.63065274341606\r
2020-03-18,89.63065274341606\r
2020-03-21,93.25880220085493\r
2020-03-23,93.25880220085493\r
2020-03-26,92.68184463317877\r
2020-03-28,88.26566578758629\r
2020-03-31,83.50568621247004\r
2020-04-02,83.50568621247004\r
2020-04-05,83.58084765535561\r
2020-04-07,81.16248857304419\r
2020-04-10,82.76624702872508\r
2020-04-12,82.78229401271976\r
2020-04-15,84.50105647600552\r
2020-05-07,89.02969439278343\r
2020-05-17,89.02969439278343\r
2020-05-20,96.97806838130431\r
2020-05-22,96.97806838130431\r
2020-05-25,100.0\r
2020-05-27,93.52254636664993\r
2020-05-30,97.2915609558501\r
2020-06-01,97.2915609558501\r
2020-06-26,100.0\r
2020-06-29,100.0\r
2020-07-01,100.0\r
2020-07-04,98.65849033550246\r
2020-07-09,100.0\r
2020-07-11,100.0\r
2020-07-14,99.99261831892136\r
2020-07-19,96.95528459699372\r
2020-07-21,95.1112153477082\r
2020-07-24,97.6282995345877\r
2020-07-29,95.98326734885694\r
2020-07-31,92.05050859175542\r
2020-08-05,88.61712389482534\r
2020-08-08,90.03955732921605\r
2020-08-10,89.20595602829506\r
2020-08-15,87.65194956818837\r
2020-08-20,89.6472155789305\r
2020-08-25,93.35977565445145\r
2020-09-04,86.42418341144509\r
2020-09-07,85.9458631272869\r
2020-09-09,86.63650328643995\r
2020-09-12,89.22248765419384\r
2020-09-14,86.6691862439163\r
2020-09-17,86.40785968376082\r
2020-11-06,80.80190509421989\r
2020-11-08,80.80190509421989\r
2020-11-11,84.7438813750416\r
2020-11-18,79.72398443395649\r
2020-11-21,80.21467637340339\r
2020-11-23,80.54775961248826\r
2020-11-28,79.10310841130797\r
2021-02-14,82.32277058029703\r
2021-02-19,90.64875362150026\r
2021-02-21,85.80474304096684\r
2021-02-24,88.87557905316011\r
2021-02-26,92.17328920926538\r
2021-03-01,89.1067918226369\r
2021-03-06,88.49624761148192\r
2021-03-21,91.42645183246081\r
2021-03-23,92.28496434557408\r
2021-03-26,92.28496434557408\r
2021-03-28,88.60613243432785\r
2021-03-31,89.11229979601394\r
2021-04-02,87.85998409163562\r
2021-04-05,87.53706715926026\r
2021-04-07,85.35486083131613\r
2021-04-15,82.48295407292039\r
2021-04-17,81.94416248194008\r
2021-04-22,78.34804329732185\r
2021-05-27,83.65603595000164\r
2021-05-30,83.65603595000164\r
2021-06-01,84.73308328187711\r
2021-06-09,86.83267445284599\r
2021-06-11,86.59293362533536\r
2021-06-16,90.74859555613864\r
2021-06-26,90.19447068181144\r
2021-07-01,94.34935636259189\r
2021-07-11,89.29965132620593\r
2021-07-19,95.60914375222006\r
2021-07-21,85.33861761908074\r
2021-07-29,89.52578301108726\r
2021-08-20,92.30730581653258\r
2021-08-25,92.74339362993109\r
2021-08-28,91.02616322142441\r
2021-08-30,91.02616322142441\r
2021-09-22,83.16243313268802\r
2021-09-24,84.8194833266914\r
2021-09-27,84.8194833266914\r
2021-10-02,84.79788003716708\r
2021-10-07,91.27070115689581\r
2021-10-09,90.96506945285341\r
2021-10-12,86.26643867853898\r
2021-10-14,85.15461369602545\r
2021-10-17,85.5173604677356\r
2021-10-19,86.46771933840812\r
2021-10-22,86.66373874437691\r
2021-10-24,86.01102653362267\r
2021-10-27,84.08619821857387\r
2021-11-06,83.55400120016593\r
2022-01-25,84.12926262446994\r
2022-01-27,83.87100756337327\r
2022-01-30,83.87100756337327\r
2022-02-09,79.12937759616725\r
2022-02-11,80.17770096583729\r
2022-02-19,79.76614748023407\r
2022-03-06,58.41105073404751\r
2022-03-08,54.700742343979854\r
2022-03-23,41.687108574414616\r
2022-03-26,45.68273718418772\r
2022-04-10,53.15763818925087\r
2022-04-15,56.587495172294346\r
2022-04-17,54.91417518324234\r
2022-04-22,58.17836363006469\r
2022-04-27,65.67884706991731\r
2022-04-30,66.71161601531882\r
2022-05-02,66.71161601531882\r
2022-05-15,83.94092050576056\r
2022-05-17,80.20939375782051\r
2022-05-27,82.09338994491875\r
2022-05-30,82.94283179300773\r
2022-06-01,82.20004699506138\r
2022-06-04,83.58084765535561\r
2022-06-06,83.58084765535561\r
2022-06-11,84.42556739738271\r
2022-06-14,84.5118428172574\r
2022-06-19,85.13838562904047\r
2022-06-21,85.1600233246375\r
2022-06-29,91.86088459310912\r
2022-07-01,90.6099379907808\r
2022-07-04,91.37637761437543\r
2022-07-06,89.29965132620593\r
2022-07-11,83.72050442774241\r
2022-07-14,87.5534752684025\r
2022-07-16,83.95167839631512\r
2022-07-19,86.60382522461958\r
2022-07-21,82.91071435590041\r
2022-07-24,85.57697441828078\r
2022-07-26,83.80649307471066\r
2022-07-31,85.39818206576832\r
2022-08-03,86.723668717914\r
2022-08-08,85.35486083131613\r
2022-08-10,85.76134000594323\r
2022-08-13,86.5058204168949\r
2022-08-30,81.69923721985025\r
2022-09-02,81.69923721985025\r
2022-09-04,82.99101721055344\r
2022-09-12,84.85729434180355\r
2022-09-19,81.76842571225474\r
2022-09-22,78.74619150084654\r
2022-10-04,67.20331269012605\r
2022-10-09,69.4136959379569\r
2022-10-12,68.79630030938912\r
2022-10-19,71.60188836297618\r
2022-10-22,71.98101250694064\r
2022-10-24,70.68016591686361\r
2022-11-11,71.82421146160532\r
2022-11-13,71.82421146160532\r
2023-02-04,48.69492154589579\r
2023-02-06,48.69492154589579\r
2023-02-09,60.83386337033545\r
2023-02-11,55.30556589553487\r
2023-02-14,56.794606453511875\r
2023-02-16,56.169588951058955\r
2023-02-26,57.607524382124375\r
2023-03-01,56.35772409343044\r
2023-03-06,60.224496880625736\r
2023-03-13,58.77477872180411\r
2023-03-16,63.00257673176778\r
2023-04-05,77.05440502023795\r
2023-04-07,76.61817828186254\r
2023-05-27,84.76007953935753\r
2023-05-30,89.44854177856597\r
2023-06-01,90.65984501429875\r
2023-06-06,90.87068385402283\r
2023-06-14,88.92510456212224\r
2023-06-16,89.69691137734264\r
2023-06-24,91.1817481266785\r
2023-06-26,92.41904538392596\r
2023-07-04,92.63149843347604\r
2023-07-14,94.10157278763819\r
2023-07-19,92.28496434557408\r
`;export{r as default};
