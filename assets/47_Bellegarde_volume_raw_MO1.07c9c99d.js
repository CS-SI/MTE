const r=`date,value\r
2017-02-22,90759.29424013686\r
2017-02-25,91390.82691397161\r
2017-03-17,94570.33113887206\r
2017-03-27,91390.82691397161\r
2017-04-23,90129.22542918722\r
2017-05-16,83296.07085572017\r
2017-05-26,87000.95886838419\r
2017-06-02,72510.05404695323\r
2017-06-25,90129.22542918722\r
2017-07-05,92658.2703999411\r
2017-07-07,83909.80795228067\r
2017-07-17,73096.09071634727\r
2017-07-27,95852.26373548324\r
2017-08-04,71342.71658241522\r
2017-08-06,27285.431924186923\r
2017-08-14,74863.62202599345\r
2017-08-21,76049.78594323416\r
2017-08-24,73683.70038284737\r
2017-08-26,55682.61754839898\r
2017-08-29,58928.566933760885\r
2017-09-05,50930.30669223351\r
2017-09-20,52498.659241605485\r
2017-09-23,57297.91716049567\r
2017-09-28,51451.32522412931\r
2017-10-05,58928.566933760885\r
2017-10-10,58928.566933760885\r
2017-10-13,58383.32031108783\r
2017-10-15,48351.940153038515\r
2017-10-18,48864.029501361925\r
2017-10-25,49893.59651861807\r
2017-10-30,46321.69172933014\r
2017-11-14,50411.0617742471\r
2017-11-17,47333.18130159739\r
2017-11-22,38025.24629360455\r
2017-12-09,46826.52460973818\r
2017-12-19,56219.336219697296\r
2018-02-25,91390.82691397161\r
2018-03-14,85760.019852796\r
2018-04-21,82073.11894192413\r
2018-04-26,80856.22151099308\r
2018-05-11,90129.22542918722\r
2018-06-20,89500.62387296122\r
2018-06-25,92023.82008230653\r
2018-07-02,84525.04757437426\r
2018-07-07,79645.40868464163\r
2018-07-10,78440.7110394637\r
2018-07-12,97139.94655522806\r
2018-07-15,83296.07085572017\r
2018-07-25,88247.83621094795\r
2018-07-27,84525.04757437426\r
2018-07-30,79042.29353528658\r
2018-08-01,79042.29353528658\r
2018-08-04,80856.22151099308\r
2018-08-06,79042.29353528658\r
2018-08-11,61126.39901491175\r
2018-08-19,65601.87609955163\r
2018-08-21,66737.14612414625\r
2018-09-08,66168.69816230325\r
2018-09-20,57839.76862827756\r
2018-09-23,60024.12414168114\r
2018-09-25,61126.39901491175\r
2018-09-28,53024.96293297021\r
2018-10-03,51451.32522412931\r
2018-10-05,56219.336219697296\r
2018-10-20,55147.62069718612\r
2018-10-23,46826.52460973818\r
2018-10-30,46826.52460973818\r
2018-11-12,55147.62069718612\r
2018-11-24,55682.61754839898\r
2018-11-29,43825.117325929394\r
2018-12-27,54614.35119747439\r
2019-01-03,56757.771232554565\r
2019-01-16,54082.8146344254\r
2019-02-12,74863.62202599345\r
2019-02-15,61126.39901491175\r
2019-02-17,79042.29353528658\r
2019-02-20,83296.07085572017\r
2019-02-22,68452.1994589925\r
2019-02-27,74272.87886786542\r
2019-03-12,58383.32031108783\r
2019-03-22,78440.7110394637\r
2019-03-24,76645.19857353864\r
2019-03-27,74863.62202599345\r
2019-03-29,79645.40868464163\r
2019-04-01,89500.62387296122\r
2019-04-08,95852.26373548324\r
2019-04-13,77840.66509222021\r
2019-05-01,83909.80795228067\r
2019-05-13,74272.87886786542\r
2019-05-23,75455.92574456659\r
2019-05-31,88247.83621094795\r
2019-06-02,87623.65700858997\r
2019-06-17,81463.91154402173\r
2019-06-27,71342.71658241522\r
2019-06-30,100384.14472670584\r
2019-07-05,90129.22542918722\r
2019-07-12,79042.29353528658\r
2019-07-15,80250.05262200261\r
2019-07-25,80856.22151099308\r
2019-08-04,62235.35106326327\r
2019-08-09,76049.78594323416\r
2019-08-14,74863.62202599345\r
2019-08-24,66168.69816230325\r
2019-08-26,72510.05404695323\r
2019-08-31,76049.78594323416\r
2019-09-13,63911.2120448925\r
2019-09-15,67878.90132810877\r
2019-09-18,21203.241353760408\r
2019-09-20,71342.71658241522\r
2019-10-08,50411.0617742471\r
2019-10-13,57297.91716049567\r
2019-10-25,40890.83648033358\r
2019-11-27,75455.92574456659\r
2019-12-29,79042.29353528658\r
2020-01-06,65601.87609955163\r
2020-01-11,70761.42431439644\r
2020-01-16,66168.69816230325\r
2020-02-05,57839.76862827756\r
2020-02-15,51974.111382842326\r
2020-02-20,51974.111382842326\r
2020-02-22,55147.62069718612\r
2020-03-13,80856.22151099308\r
2020-03-18,73683.70038284737\r
2020-03-21,71342.71658241522\r
2020-04-05,81463.91154402173\r
2020-04-10,83296.07085572017\r
2020-04-12,85141.78607980907\r
2020-05-07,81463.91154402173\r
2020-05-20,76645.19857353864\r
2020-05-22,74863.62202599345\r
2020-05-25,85760.019852796\r
2020-05-27,77840.66509222021\r
2020-06-19,65601.87609955163\r
2020-06-21,68452.1994589925\r
2020-06-24,74863.62202599345\r
2020-06-26,79645.40868464163\r
2020-07-04,2176.516888536025\r
2020-07-09,61680.04289427286\r
2020-07-19,63350.94052119537\r
2020-07-21,55682.61754839898\r
2020-07-24,76645.19857353864\r
2020-07-26,58928.566933760885\r
2020-07-29,81463.91154402173\r
2020-07-31,51451.32522412931\r
2020-08-05,45818.68923992311\r
2020-08-08,65601.87609955163\r
2020-08-10,72510.05404695323\r
2020-08-15,44818.202112874314\r
2020-08-20,49377.91703620572\r
2020-08-25,38025.24629360455\r
2020-09-02,30294.326247059984\r
2020-09-04,23173.55616743401\r
2020-09-14,39927.927030534825\r
2020-09-17,42349.490871943664\r
2020-09-19,40408.42407912587\r
2020-11-06,31615.67713693219\r
2020-11-08,21592.614801678243\r
2020-11-11,26445.224634799226\r
2020-11-18,22378.42369324749\r
2020-11-23,19292.264341679245\r
2020-12-18,58383.32031108783\r
2021-02-06,99732.46145323571\r
2021-02-14,93931.52921664456\r
2021-02-19,83296.07085572017\r
2021-02-24,83909.80795228067\r
2021-03-01,79645.40868464163\r
2021-03-23,78440.7110394637\r
2021-03-28,82073.11894192413\r
2021-03-31,82073.11894192413\r
2021-04-02,82683.83995361059\r
2021-04-05,76049.78594323416\r
2021-04-15,83296.07085572017\r
2021-04-22,81463.91154402173\r
2021-05-27,90759.29424013686\r
2021-06-11,83296.07085572017\r
2021-06-14,90129.22542918722\r
2021-06-16,88247.83621094795\r
2021-06-26,90759.29424013686\r
2021-07-19,89500.62387296122\r
2021-07-29,90129.22542918722\r
2021-08-10,86379.7453036313\r
2021-08-20,82683.83995361059\r
2021-08-28,77840.66509222021\r
2021-08-30,80856.22151099308\r
2021-09-07,74863.62202599345\r
2021-09-22,70181.72209866719\r
2021-09-24,73683.70038284737\r
2021-10-12,61680.04289427286\r
2021-10-14,65036.684589608376\r
2021-10-17,64473.128326449194\r
2021-10-24,57839.76862827756\r
2021-10-27,53553.016647823104\r
2021-12-16,77840.66509222021\r
2021-12-18,79042.29353528658\r
2021-12-23,76645.19857353864\r
2022-01-05,77840.66509222021\r
2022-01-15,81463.91154402173\r
2022-01-22,73683.70038284737\r
2022-01-25,76049.78594323416\r
2022-01-27,79645.40868464163\r
2022-02-09,82073.11894192413\r
2022-03-01,74272.87886786542\r
2022-03-03,83296.07085572017\r
2022-03-23,67307.21537104991\r
2022-03-26,71925.5945868785\r
2022-04-05,77242.15961850209\r
2022-04-10,75455.92574456659\r
2022-04-17,76049.78594323416\r
2022-05-15,84525.04757437426\r
2022-05-17,82073.11894192413\r
2022-06-01,80856.22151099308\r
2022-06-06,83296.07085572017\r
2022-06-14,79042.29353528658\r
2022-06-16,73096.09071634727\r
2022-06-19,75455.92574456659\r
2022-06-29,84525.04757437426\r
2022-07-01,80250.05262200261\r
2022-07-06,71342.71658241522\r
2022-07-11,72510.05404695323\r
2022-07-14,74272.87886786542\r
2022-07-16,65601.87609955163\r
2022-07-19,78440.7110394637\r
2022-07-21,64473.128326449194\r
2022-07-24,69027.1052654068\r
2022-07-26,63350.94052119537\r
2022-07-29,55147.62069718612\r
2022-07-31,62792.31857366176\r
2022-08-03,63350.94052119537\r
2022-08-10,54614.35119747439\r
2022-08-20,36153.83837787421\r
2022-08-28,32506.98440671192\r
2022-09-04,34771.12236776794\r
2022-09-12,30294.326247059984\r
2022-09-19,20816.240889721073\r
2022-10-04,4225.048024438081\r
2022-10-09,23173.55616743401\r
2022-10-22,20049.417452635367\r
2022-10-24,16008.203506108923\r
2022-10-27,21984.346930504365\r
2022-11-11,16720.225101662927\r
2022-11-16,19669.624438018014\r
2022-12-26,25613.83774468351\r
2022-12-28,22378.42369324749\r
2023-02-06,38025.24629360455\r
2023-02-09,36618.73006346024\r
2023-02-11,41861.37728177631\r
2023-02-14,44818.202112874314\r
2023-02-16,38498.00473233329\r
2023-02-19,38025.24629360455\r
2023-03-16,61126.39901491175\r
2023-03-28,66737.14612414625\r
2023-04-05,73096.09071634727\r
2023-04-07,69603.61428656452\r
2023-04-20,68452.1994589925\r
2023-05-02,72510.05404695323\r
2023-05-27,73683.70038284737\r
2023-05-30,69027.1052654068\r
2023-06-04,69027.1052654068\r
2023-06-29,90129.22542918722\r
2023-07-11,76645.19857353864\r
2023-07-14,83296.07085572017\r
2023-07-16,83909.80795228067\r
2023-07-31,73096.09071634727\r
2023-08-08,75455.92574456659\r
2023-08-15,61680.04289427286\r
2023-08-18,60574.42441801003\r
2023-08-20,52498.659241605485\r
2023-08-23,54082.8146344254\r
2023-09-04,21592.614801678243\r
2023-09-07,44818.202112874314\r
2023-09-14,45317.52379291598\r
2023-09-24,41861.37728177631\r
2023-09-27,39449.35296156013\r
2023-09-29,39449.35296156013\r
2023-10-02,44320.73099888223\r
2023-10-07,40890.83648033358\r
`;export{r as default};
