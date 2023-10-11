const n=`date,value\r
2017-04-23,75.600835716145\r
2017-04-30,74.96099389855249\r
2017-05-03,74.17213317244837\r
2017-05-30,91.5129579139833\r
2017-06-02,93.7911840003842\r
2017-06-12,93.83185771762145\r
2017-06-19,91.32026112045068\r
2017-06-22,90.20174536273086\r
2017-07-02,80.40956119997344\r
2017-07-04,88.59373795546355\r
2017-07-07,93.01100587562254\r
2017-07-12,91.89594523477585\r
2017-07-14,92.22760303773242\r
2017-07-22,93.8202359528046\r
2017-07-24,93.93357213842603\r
2017-07-27,94.1196754994254\r
2017-07-29,94.99103163233322\r
2017-08-03,91.78933717843604\r
2017-08-06,91.78933717843604\r
2017-08-11,90.43074550282476\r
2017-08-13,90.43074550282476\r
2018-05-25,75.73440329999288\r
2018-05-28,75.73440329999288\r
2018-06-19,99.54627585107552\r
2018-06-22,98.91076856858133\r
2018-06-27,100.0\r
2018-06-29,98.815876096378\r
2018-07-02,100.0\r
2018-07-04,99.15409285222361\r
2018-07-07,99.96586613618007\r
2018-07-09,99.27287233510587\r
2018-07-12,99.86462528046046\r
2018-07-14,99.42142477343693\r
2018-07-17,99.76342449164693\r
2018-07-19,98.94339607059943\r
2018-07-22,99.46897987334667\r
2018-07-24,98.35674429159253\r
2018-07-27,98.55510524835081\r
2018-07-29,97.23761375840716\r
2018-08-01,96.05604074398005\r
2018-08-03,94.75466898570217\r
2018-08-06,94.37289038011566\r
2018-08-08,95.16042021995113\r
2018-08-11,95.23639128845043\r
2018-08-16,97.09034484036574\r
2018-08-18,97.08740035120574\r
2018-08-21,97.65928385481484\r
2018-08-23,95.01730834280818\r
2018-08-26,95.2305465195256\r
2019-05-10,68.59787178392568\r
2019-05-13,68.59787178392568\r
2019-05-15,67.87435965153725\r
2019-05-23,69.63443328346895\r
2019-05-30,73.81728397724517\r
2019-06-02,76.0553410340961\r
2019-06-04,75.43533981701901\r
2019-06-07,76.46262261431286\r
2019-06-12,78.41149608755022\r
2019-06-19,79.95323600478777\r
2019-06-24,79.95323600478777\r
2019-06-27,85.87714297267935\r
2019-06-29,85.62188061676075\r
2019-07-02,87.35559719750339\r
2019-07-04,85.91082608617485\r
2019-07-07,88.86379883583092\r
2019-07-12,90.78327539009791\r
2019-07-14,89.84438677711319\r
2019-07-17,90.27614553488547\r
2019-07-19,88.70172378570321\r
2019-07-22,90.36774786025433\r
2019-07-24,88.48012416661992\r
2019-07-29,87.32169396298329\r
2019-08-01,89.37352218274171\r
2019-08-03,89.55033978967857\r
2019-08-06,94.13713006410337\r
2019-08-08,94.99103163233322\r
2019-08-11,95.99740340714393\r
2019-08-16,96.0619052467325\r
2019-08-18,95.60782091697483\r
2019-08-21,95.98567761784224\r
2019-08-23,93.16451990951784\r
2019-08-26,89.43624829179114\r
2019-08-31,88.15947292952974\r
2020-04-29,73.83845034719397\r
2020-05-04,75.57947344817666\r
2020-05-07,76.56189204732992\r
2020-05-09,77.77594426443018\r
2020-05-14,79.49520231653797\r
2020-05-19,78.3925355762483\r
2020-05-22,82.09601214902234\r
2020-05-24,84.42807877376107\r
2020-05-27,89.29371381213714\r
2020-05-29,88.59373795546355\r
2020-06-03,88.59373795546355\r
2020-06-06,91.12197802500953\r
2020-06-23,94.83343098143791\r
2020-06-26,94.82467838653339\r
2020-06-28,94.82176092500852\r
2020-07-01,95.27438570101471\r
2020-07-03,95.27438570101471\r
2020-07-06,96.6931543377546\r
2020-07-08,98.01072713575395\r
2020-07-11,96.94316310833105\r
2020-07-16,96.89608337249399\r
2020-07-18,99.2164451561811\r
2020-07-21,99.2164451561811\r
2020-07-23,97.11979165001965\r
2020-07-26,96.2496431512765\r
2020-07-28,97.05795737774872\r
2020-07-31,96.70197388415104\r
2020-08-02,97.05206920157329\r
2020-08-05,97.44688536837084\r
2020-08-07,96.7990096267129\r
2020-08-10,96.58734428660331\r
2020-08-12,96.7931275907163\r
2020-08-15,97.58846429310817\r
2020-08-20,97.43214218042382\r
2020-08-22,96.7666601562004\r
2020-08-25,96.18802587256233\r
2020-08-27,95.91533462974755\r
2021-05-27,94.55350446233417\r
2021-06-03,96.11175916530192\r
2021-06-11,99.37387855511982\r
2021-06-13,100.0\r
2021-06-16,99.3857642769989\r
2021-06-18,99.95395336796419\r
2021-07-21,99.98373632806732\r
2021-07-23,100.0\r
2021-07-26,99.47492488527602\r
2021-07-28,99.70391333583348\r
2021-08-02,99.23426291172251\r
2021-08-05,99.27287233510587\r
2021-08-10,100.0\r
2021-08-12,98.28276899746893\r
2021-08-15,98.62619788121383\r
2021-08-17,99.16596830133122\r
2021-08-20,98.65878869509388\r
2021-08-22,98.6350858679548\r
2021-08-25,98.55806704166568\r
2022-04-27,81.92785449140743\r
2022-04-29,87.5025705971415\r
2022-05-07,86.78557799685703\r
2022-05-14,91.35188702302902\r
2022-05-17,90.71157960517617\r
2022-05-19,91.04156333692674\r
2022-05-22,91.04156333692674\r
2022-05-29,91.30876185258397\r
2022-06-01,94.03242163779737\r
2022-06-06,93.88997497404672\r
2022-06-11,95.037747746514\r
2022-06-13,95.99740340714393\r
2022-06-16,95.8420821014524\r
2022-06-18,96.2496431512765\r
2022-06-21,95.11660152821142\r
2022-06-26,94.73133700638225\r
2022-06-28,91.48131024369036\r
2022-07-01,74.6471842965931\r
2022-07-03,97.13746140968696\r
2022-07-06,97.13746140968696\r
2022-07-08,97.2022612682617\r
2022-07-11,95.26561723435204\r
2022-07-13,96.60203742144583\r
2022-07-16,95.97981493296174\r
2022-07-18,95.79228286747191\r
2022-07-21,96.2114973045338\r
2022-07-26,98.01072713575395\r
2022-07-28,98.00186116385731\r
2022-07-31,98.91076856858133\r
2022-08-02,98.83366572540933\r
2022-08-05,98.17036818483645\r
2022-08-07,97.85414108449439\r
2022-08-10,97.80984203150612\r
2022-08-12,95.0786317044207\r
2022-08-20,91.79509854048582\r
2022-08-22,95.68393124330063\r
2023-06-06,99.84378654828228\r
2023-06-08,98.94339607059943\r
2023-06-11,99.29663489552348\r
2023-06-16,98.47514996897664\r
2023-06-23,96.27605527358253\r
2023-06-26,94.18950134191824\r
2023-06-28,93.81442528121707\r
2023-07-06,99.47195236196642\r
2023-07-08,99.66821329928737\r
2023-07-11,100.0\r
2023-07-13,100.0\r
2023-07-16,100.0\r
2023-07-18,100.0\r
2023-07-21,100.0\r
2023-07-23,99.78723283685024\r
2023-07-26,98.44850384112563\r
2023-07-28,98.01368252932467\r
2023-07-31,97.27886467525079\r
2023-08-02,96.3611802514171\r
2023-08-05,96.76960084266118\r
2023-08-07,95.50540206326134\r
2023-08-10,95.56977462404784\r
2023-08-12,94.22442184643263\r
2023-08-15,95.61660167055602\r
2023-08-17,93.94229251977524\r
2023-08-22,90.7804071339833\r
`;export{n as default};
