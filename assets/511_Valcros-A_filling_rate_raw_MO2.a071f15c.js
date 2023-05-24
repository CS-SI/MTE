const r=`date,value\r
2017-03-01,2.2824607782969775\r
2017-03-08,1.8150261180863931\r
2017-03-11,3.3162950787057466\r
2017-03-18,3.3162950787057466\r
2017-03-21,3.3162950787057466\r
2017-04-10,16.97941473009052\r
2017-04-17,16.97941473009052\r
2017-04-20,17.92263449087917\r
2017-06-19,15.143849533820156\r
2017-06-26,15.143849533820156\r
2017-06-29,15.143849533820156\r
2017-07-04,8.535926618453397\r
2017-07-06,8.535926618453397\r
2017-07-09,8.535926618453397\r
2017-07-11,8.535926618453397\r
2017-07-14,16.97941473009052\r
2017-07-19,16.97941473009052\r
2017-07-21,16.97941473009052\r
2017-07-24,16.97941473009052\r
2018-02-09,4.468967168092322\r
2018-02-11,4.468967168092322\r
2018-02-14,4.468967168092322\r
2018-02-16,6.395913560171394\r
2018-02-19,6.395913560171394\r
2018-02-21,6.395913560171394\r
2018-03-16,88.5347772362306\r
2018-03-23,88.5347772362306\r
2018-03-26,88.5347772362306\r
2018-04-05,55.647191540477\r
2018-04-10,55.647191540477\r
2018-04-15,55.647191540477\r
2018-04-20,76.00459815581273\r
2018-04-22,76.00459815581273\r
2018-04-25,100.0\r
2018-04-30,88.5347772362306\r
2018-05-05,100.0\r
2018-05-07,80.62995561698413\r
2018-05-10,80.62995561698413\r
2018-05-20,74.48279933553069\r
2018-05-25,74.48279933553069\r
2018-05-30,74.48279933553069\r
2018-06-09,100.0\r
2018-06-11,100.0\r
2018-06-14,100.0\r
2018-06-16,100.0\r
2018-06-19,100.0\r
2018-06-21,100.0\r
2018-06-24,100.0\r
2018-06-26,100.0\r
2018-06-29,100.0\r
2018-07-01,67.02690985019018\r
2018-07-04,72.97111013530629\r
2018-07-06,72.97111013530629\r
2018-07-09,65.56687793255878\r
2018-07-11,65.56687793255878\r
2018-07-14,76.00459815581273\r
2018-07-16,83.76282216243442\r
2018-07-19,61.25050032453569\r
2018-07-21,88.5347772362306\r
2018-07-24,64.11741079475033\r
2018-07-26,77.53643621639735\r
2018-07-29,69.9783495388095\r
2018-07-31,90.14455713424047\r
2018-08-03,90.14455713424047\r
2018-08-05,82.19150313532167\r
2018-08-08,85.3438489915762\r
2018-08-10,61.25050032453569\r
2018-08-15,61.25050032453569\r
2018-08-18,61.25050032453569\r
2018-09-02,43.703902915932126\r
2018-09-04,43.703902915932126\r
2018-09-07,43.703902915932126\r
2018-09-09,43.703902915932126\r
2018-09-12,43.703902915932126\r
2018-09-22,36.283926292663274\r
2018-09-24,36.283926292663274\r
2018-09-27,48.89543043759456\r
2018-09-29,48.89543043759456\r
2018-10-02,24.97263864648116\r
2018-10-04,35.091803489924665\r
2018-10-09,16.053043152073474\r
2018-10-12,16.053043152073474\r
2018-10-22,17.92263449087917\r
2018-10-24,17.92263449087917\r
2018-12-06,16.97941473009052\r
2018-12-08,16.97941473009052\r
2018-12-11,16.97941473009052\r
2018-12-18,1.3841245645960598\r
2019-01-05,15.143849533820156\r
2019-01-07,15.143849533820156\r
2019-01-10,16.97941473009052\r
2019-01-12,16.97941473009052\r
2019-01-15,1.3841245645960598\r
2019-01-17,1.3841245645960598\r
2019-01-22,3.3162950787057466\r
2019-01-25,1.8150261180863931\r
2019-01-27,5.728726791288079\r
2019-01-30,5.086067752452551\r
2019-02-04,10.07067302088414\r
2019-02-06,10.07067302088414\r
2019-02-09,10.07067302088414\r
2019-02-11,23.919380927250494\r
2019-02-14,16.97941473009052\r
2019-02-16,20.850345746014362\r
2019-02-21,20.850345746014362\r
2019-02-26,20.850345746014362\r
2019-03-01,20.850345746014362\r
2019-03-03,5.086067752452551\r
2019-03-08,5.086067752452551\r
2019-03-11,7.800296586585204\r
2019-03-13,7.800296586585204\r
2019-03-16,5.728726791288079\r
2019-03-18,13.378416274578194\r
2019-03-21,5.728726791288079\r
2019-03-23,5.728726791288079\r
2019-03-26,5.728726791288079\r
2019-03-28,14.252183439547867\r
2019-03-31,2.2824607782969775\r
2019-04-05,3.8785950478726745\r
2019-04-07,30.45600697376416\r
2019-04-10,30.45600697376416\r
2019-04-15,30.45600697376416\r
2019-04-17,30.45600697376416\r
2019-04-20,30.45600697376416\r
2019-04-30,50.22282181766128\r
2019-05-02,50.22282181766128\r
2019-05-05,64.11741079475033\r
2019-05-07,64.11741079475033\r
2019-05-10,43.703902915932126\r
2019-05-12,43.703902915932126\r
2019-05-15,43.703902915932126\r
2019-05-20,57.031481091608505\r
2019-05-25,41.18059147213462\r
2019-05-30,61.25050032453569\r
2019-06-01,61.25050032453569\r
2019-06-04,91.76380172877376\r
2019-06-06,91.76380172877376\r
2019-06-11,91.76380172877376\r
2019-06-14,91.76380172877376\r
2019-06-19,71.46960240944065\r
2019-06-21,71.46960240944065\r
2019-06-24,71.46960240944065\r
2019-06-26,71.46960240944065\r
2019-06-29,76.00459815581273\r
2019-07-01,76.00459815581273\r
2019-07-04,76.00459815581273\r
2019-07-06,69.9783495388095\r
2019-07-09,69.9783495388095\r
2019-07-11,69.9783495388095\r
2019-07-14,69.9783495388095\r
2019-07-24,82.19150313532167\r
2019-07-26,82.19150313532167\r
2019-07-29,46.2758329558866\r
2019-07-31,46.2758329558866\r
2019-08-03,48.89543043759456\r
2019-08-05,28.22004861892281\r
2019-08-08,28.22004861892281\r
2019-08-10,42.436108215986614\r
2019-08-15,27.123179922434193\r
2019-08-18,59.83322654907973\r
2019-08-20,57.031481091608505\r
2019-08-23,61.25050032453569\r
2019-08-25,61.25050032453569\r
2019-08-28,61.25050032453569\r
2019-08-30,61.25050032453569\r
2019-09-02,35.091803489924665\r
2019-09-04,42.436108215986614\r
2019-09-07,29.331053406328024\r
2019-09-09,42.436108215986614\r
2019-09-12,14.252183439547867\r
2019-09-14,14.252183439547867\r
2019-09-17,29.331053406328024\r
2019-09-19,14.252183439547867\r
2019-09-24,41.18059147213462\r
2019-09-27,10.07067302088414\r
2019-09-29,41.18059147213462\r
2019-10-02,16.053043152073474\r
2019-10-04,16.053043152073474\r
2019-10-07,13.378416274578194\r
2019-10-09,13.378416274578194\r
2019-10-14,21.857997817918086\r
2019-10-17,21.857997817918086\r
2019-10-19,18.882390651111308\r
2019-10-27,22.881090241165055\r
2019-10-29,22.881090241165055\r
2019-11-03,22.881090241165055\r
2019-11-06,30.45600697376416\r
2019-11-16,31.594729143203317\r
2019-11-26,24.97263864648116\r
2019-11-28,24.97263864648116\r
2019-12-21,26.04064224222606\r
2019-12-23,26.04064224222606\r
2019-12-26,47.5797305910287\r
2019-12-28,47.5797305910287\r
2020-01-05,85.3438489915762\r
2020-01-10,85.3438489915762\r
2020-01-12,85.3438489915762\r
2020-01-15,85.3438489915762\r
2020-01-17,85.3438489915762\r
2020-02-21,2.7836322130481426\r
2020-02-24,1.3841245645960598\r
2020-02-26,1.3841245645960598\r
2020-03-07,2.7836322130481426\r
2020-03-15,1.8150261180863931\r
2020-03-20,1.8150261180863931\r
2020-03-22,1.8150261180863931\r
2020-03-30,1.8150261180863931\r
2020-04-26,2.7836322130481426\r
2020-05-04,2.7836322130481426\r
2020-05-06,2.7836322130481426\r
2020-05-09,3.3162950787057466\r
2020-05-19,5.728726791288079\r
2020-05-21,1.3841245645960598\r
2020-05-24,7.800296586585204\r
2020-05-26,7.086711062380635\r
2020-05-29,7.086711062380635\r
2020-05-31,7.086711062380635\r
2020-06-03,13.378416274578194\r
2020-06-05,13.378416274578194\r
2020-06-08,13.378416274578194\r
2020-06-10,13.378416274578194\r
2020-06-15,13.378416274578194\r
2020-06-23,7.800296586585204\r
2020-06-25,7.800296586585204\r
2020-06-28,8.535926618453397\r
2020-06-30,8.535926618453397\r
2020-07-03,5.086067752452551\r
2020-07-05,5.086067752452551\r
2020-07-08,5.728726791288079\r
2020-07-10,3.8785950478726745\r
2020-07-13,3.8785950478726745\r
2020-07-15,5.728726791288079\r
2020-07-18,5.728726791288079\r
2020-07-20,1.8150261180863931\r
2020-07-23,1.8150261180863931\r
2020-08-02,2.7836322130481426\r
2020-08-04,2.7836322130481426\r
2020-08-07,2.7836322130481426\r
2020-08-09,2.7836322130481426\r
2020-08-14,2.7836322130481426\r
2020-08-17,2.7836322130481426\r
2020-08-22,3.3162950787057466\r
2020-08-24,3.3162950787057466\r
2020-08-27,3.3162950787057466\r
2020-09-01,3.3162950787057466\r
2020-09-03,3.3162950787057466\r
2020-09-08,1.3841245645960598\r
2020-09-13,1.3841245645960598\r
2020-09-16,1.3841245645960598\r
2020-09-18,1.3841245645960598\r
2020-09-21,1.3841245645960598\r
2020-10-11,2.7836322130481426\r
2020-10-13,2.7836322130481426\r
2020-10-16,2.7836322130481426\r
2020-10-18,2.7836322130481426\r
2020-11-05,2.2824607782969775\r
2020-11-07,2.2824607782969775\r
2020-11-10,2.2824607782969775\r
2020-11-17,2.2824607782969775\r
2020-11-20,7.086711062380635\r
2020-11-22,6.395913560171394\r
2020-11-25,7.800296586585204\r
2020-11-27,7.800296586585204\r
2020-11-30,7.800296586585204\r
2020-12-02,7.800296586585204\r
2020-12-07,3.8785950478726745\r
2020-12-25,19.8583878469606\r
2020-12-30,19.8583878469606\r
2021-01-14,3.3162950787057466\r
2021-01-19,5.086067752452551\r
2021-01-21,5.086067752452551\r
2021-01-24,2.7836322130481426\r
2021-01-26,5.728726791288079\r
2021-01-29,5.728726791288079\r
2021-01-31,3.3162950787057466\r
2021-02-03,3.3162950787057466\r
2021-02-23,3.3162950787057466\r
2021-02-25,3.3162950787057466\r
2021-02-28,6.395913560171394\r
2021-03-05,6.395913560171394\r
2021-03-07,6.395913560171394\r
2021-03-10,6.395913560171394\r
2021-03-15,8.535926618453397\r
2021-03-17,8.535926618453397\r
2021-03-20,8.535926618453397\r
2021-03-22,7.800296586585204\r
2021-03-25,7.800296586585204\r
2021-03-30,7.800296586585204\r
2021-04-01,7.800296586585204\r
2021-04-04,7.800296586585204\r
2021-04-09,7.800296586585204\r
2021-05-04,14.252183439547867\r
2021-05-06,14.252183439547867\r
2021-05-09,14.252183439547867\r
2021-05-11,14.252183439547867\r
2021-05-14,14.252183439547867\r
2021-05-16,6.395913560171394\r
2021-05-19,8.535926618453397\r
2021-05-21,7.086711062380635\r
2021-05-26,7.086711062380635\r
2021-05-29,7.086711062380635\r
2021-06-03,7.800296586585204\r
2021-06-05,7.800296586585204\r
2021-06-08,7.800296586585204\r
2021-06-10,7.800296586585204\r
2021-06-13,14.252183439547867\r
2021-06-15,14.252183439547867\r
2021-06-18,85.3438489915762\r
2021-06-25,85.3438489915762\r
2021-06-28,85.3438489915762\r
2021-07-03,8.535926618453397\r
2021-07-05,8.535926618453397\r
2021-07-08,8.535926618453397\r
2021-07-10,8.535926618453397\r
2021-07-13,10.07067302088414\r
2021-07-15,5.086067752452551\r
2021-07-18,10.07067302088414\r
2021-07-20,10.07067302088414\r
2021-07-23,9.292924927827151\r
2021-07-25,14.252183439547867\r
2021-07-28,9.292924927827151\r
2021-07-30,13.378416274578194\r
2021-08-02,9.292924927827151\r
2021-08-07,9.292924927827151\r
2021-08-09,5.086067752452551\r
2021-08-12,5.086067752452551\r
2021-08-17,8.535926618453397\r
2021-08-19,8.535926618453397\r
2021-08-22,10.868602386066817\r
2021-08-24,10.868602386066817\r
2021-08-27,8.535926618453397\r
2021-08-29,10.07067302088414\r
2021-09-01,7.800296586585204\r
2021-09-06,3.8785950478726745\r
2021-09-08,3.8785950478726745\r
2021-09-11,3.8785950478726745\r
2021-09-13,5.728726791288079\r
2021-09-18,5.728726791288079\r
2021-09-21,5.728726791288079\r
2021-10-01,4.468967168092322\r
2021-10-03,4.468967168092322\r
2021-10-06,7.086711062380635\r
2021-10-08,7.086711062380635\r
2021-10-11,7.086711062380635\r
2021-10-13,7.086711062380635\r
2021-10-16,14.252183439547867\r
2021-10-18,14.252183439547867\r
2021-10-23,14.252183439547867\r
2021-10-26,16.97941473009052\r
2021-10-28,11.686188122618592\r
2021-11-02,11.686188122618592\r
2021-11-05,11.686188122618592\r
2021-11-20,10.868602386066817\r
2021-11-22,10.868602386066817\r
2021-11-30,22.881090241165055\r
2021-12-02,11.686188122618592\r
2021-12-05,16.97941473009052\r
2021-12-07,16.97941473009052\r
2021-12-10,13.378416274578194\r
2021-12-12,28.22004861892281\r
2021-12-15,28.22004861892281\r
2021-12-17,20.850345746014362\r
2021-12-20,21.857997817918086\r
2021-12-22,9.292924927827151\r
2023-01-09,1.3841245645960598\r
2023-01-19,1.3841245645960598\r
2023-01-29,1.8150261180863931\r
2023-01-31,1.8150261180863931\r
2023-02-03,2.7836322130481426\r
2023-02-05,2.7836322130481426\r
2023-02-08,2.7836322130481426\r
2023-02-10,3.8785950478726745\r
2023-02-13,3.8785950478726745\r
2023-02-15,6.395913560171394\r
2023-02-18,6.395913560171394\r
2023-03-05,7.086711062380635\r
2023-03-07,7.086711062380635\r
2023-03-10,7.086711062380635\r
2023-03-12,7.086711062380635\r
2023-03-17,3.3162950787057466\r
2023-03-20,3.3162950787057466\r
2023-03-25,5.728726791288079\r
2023-03-27,5.728726791288079\r
2023-03-30,9.292924927827151\r
2023-04-06,9.292924927827151\r
2023-04-09,9.292924927827151\r
2023-04-14,5.728726791288079\r
2023-04-16,5.728726791288079\r
2023-04-19,12.522943650181492\r
2023-04-24,7.800296586585204\r
2023-04-26,12.522943650181492\r
2023-04-29,8.535926618453397\r
2023-05-01,8.535926618453397\r
`;export{r as default};