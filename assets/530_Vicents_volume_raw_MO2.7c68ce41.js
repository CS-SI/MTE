const n=`date,value\r
2017-01-26,59896.89507507778\r
2017-02-15,65484.82192022387\r
2017-02-22,65484.82192022387\r
2017-02-25,83667.88417320736\r
2017-03-17,77639.41793789934\r
2017-03-27,77639.41793789934\r
2017-04-03,10609.1954509227\r
2017-04-06,10609.1954509227\r
2017-05-16,88699.90687427447\r
2017-05-26,99024.39807915666\r
2017-06-02,99024.39807915666\r
2017-06-05,99024.39807915666\r
2017-06-25,103721.40102013444\r
2017-07-02,108483.3338507367\r
2017-07-05,109683.8263839466\r
2017-07-07,109083.08296201848\r
2017-08-04,99024.39807915666\r
2017-08-06,99024.39807915666\r
2017-08-07,99024.39807915666\r
2017-08-11,99024.39807915666\r
2017-08-12,99024.39807915666\r
2017-08-14,104905.84293567992\r
2017-08-17,104905.84293567992\r
2017-08-19,110888.28749013896\r
2017-08-21,110888.28749013896\r
2017-08-22,110888.28749013896\r
2017-08-24,100778.08982381696\r
2017-08-26,106690.0742852151\r
2017-08-29,95544.98092328032\r
2017-09-03,103721.40102013444\r
2017-09-05,85893.41262140655\r
2017-09-08,85893.41262140655\r
2017-10-08,76019.02362596606\r
2017-10-10,76019.02362596606\r
2017-10-11,76019.02362596606\r
2017-10-13,89830.08121792637\r
2017-10-15,89830.08121792637\r
2017-10-16,89830.08121792637\r
2017-10-18,71748.72466349504\r
2017-10-20,85335.38310646355\r
2017-10-23,85335.38310646355\r
2017-10-25,61405.95814410366\r
2017-10-26,61405.95814410366\r
2017-10-28,63946.00488124611\r
2017-10-30,59896.89507507778\r
2017-10-31,59896.89507507778\r
2017-11-02,59896.89507507778\r
2017-11-07,59896.89507507778\r
2017-11-22,52043.29001596221\r
2017-11-24,52043.29001596221\r
2017-11-25,52043.29001596221\r
2017-11-27,56912.96376817673\r
2017-11-30,56912.96376817673\r
2017-12-07,53006.69937612423\r
2018-02-10,57902.50177071996\r
2018-02-12,57902.50177071996\r
2018-02-15,57902.50177071996\r
2018-02-25,60398.659474669854\r
2018-02-27,60398.659474669854\r
2018-03-02,74408.9612116411\r
2018-03-07,74408.9612116411\r
2018-03-09,69641.65995573459\r
2018-03-17,19127.68314605302\r
2018-03-19,19127.68314605302\r
2018-03-22,76019.02362596606\r
2018-04-01,76019.02362596606\r
2018-04-21,99024.39807915666\r
2018-04-23,99024.39807915666\r
2018-04-24,99024.39807915666\r
2018-04-26,99024.39807915666\r
2018-05-06,69117.85670695765\r
2018-05-11,99024.39807915666\r
2018-05-19,99024.39807915666\r
2018-05-21,99607.9318714873\r
2018-05-23,85893.41262140655\r
2018-06-20,101952.35235818375\r
2018-06-22,101952.35235818375\r
2018-06-23,101952.35235818375\r
2018-06-25,112096.69995947069\r
2018-06-28,112096.69995947069\r
2018-07-02,114525.31116508719\r
2018-07-03,114525.31116508719\r
2018-07-07,103130.70059642864\r
2018-07-08,103130.70059642864\r
2018-07-10,106094.32438785736\r
2018-07-12,93819.38883701191\r
2018-07-15,100778.08982381696\r
2018-07-18,100778.08982381696\r
2018-07-22,89264.45559877602\r
2018-07-23,89264.45559877602\r
2018-07-25,94393.53382942018\r
2018-07-27,92674.26876183023\r
2018-07-30,102541.01693487454\r
2018-08-01,102541.01693487454\r
2018-08-02,102541.01693487454\r
2018-08-04,92674.26876183023\r
2018-08-06,104313.11589781503\r
2018-08-11,79815.86655300505\r
2018-08-12,79815.86655300505\r
2018-08-19,92103.29885108978\r
2018-08-21,92103.29885108978\r
2018-08-22,92103.29885108978\r
2018-08-26,92103.29885108978\r
2018-08-27,92103.29885108978\r
2018-09-03,77639.41793789934\r
2018-09-05,77639.41793789934\r
2018-09-08,96122.27795550368\r
2018-09-10,96122.27795550368\r
2018-09-11,96122.27795550368\r
2018-09-16,88136.43776666188\r
2018-09-18,88136.43776666188\r
2018-09-23,79270.05779062108\r
2018-09-25,79270.05779062108\r
2018-09-26,79270.05779062108\r
2018-09-28,93246.29962204602\r
2018-09-30,93246.29962204602\r
2018-10-03,78181.83036939296\r
2018-10-05,93819.38883701191\r
2018-10-06,93819.38883701191\r
2018-11-17,57407.09092255291\r
2018-11-22,67553.61509988029\r
2018-11-24,67553.61509988029\r
2018-11-27,67553.61509988029\r
2018-11-29,52524.32973904832\r
2019-01-11,55928.57827701143\r
2019-01-16,70692.82901801063\r
2019-01-19,70692.82901801063\r
2019-01-23,70692.82901801063\r
2019-01-26,70692.82901801063\r
2019-01-28,67034.60273317827\r
2019-02-15,77098.14388369145\r
2019-02-17,77098.14388369145\r
2019-02-18,77098.14388369145\r
2019-02-20,79815.86655300505\r
2019-02-22,79815.86655300505\r
2019-02-23,79815.86655300505\r
2019-02-25,73341.36977677612\r
2019-02-27,73341.36977677612\r
2019-03-07,80362.80123738758\r
2019-03-12,76019.02362596606\r
2019-03-22,73341.36977677612\r
2019-03-24,73341.36977677612\r
2019-03-25,73341.36977677612\r
2019-03-27,76019.02362596606\r
2019-03-29,76019.02362596606\r
2019-03-30,76019.02362596606\r
2019-04-01,76019.02362596606\r
2019-04-08,68073.83065749925\r
2019-04-09,68073.83065749925\r
2019-05-01,86452.53565468112\r
2019-05-06,86452.53565468112\r
2019-05-11,86452.53565468112\r
2019-05-13,86452.53565468112\r
2019-05-14,86452.53565468112\r
2019-05-16,86452.53565468112\r
2019-05-31,73341.36977677612\r
2019-06-02,73341.36977677612\r
2019-06-08,73341.36977677612\r
2019-06-12,73341.36977677612\r
2019-06-13,73341.36977677612\r
2019-06-30,94393.53382942018\r
2019-07-03,94393.53382942018\r
2019-07-05,115134.90723861149\r
2019-07-08,115134.90723861149\r
2019-07-10,107286.82730856523\r
2019-07-12,107286.82730856523\r
2019-07-13,107286.82730856523\r
2019-07-15,114525.31116508719\r
2019-07-17,112096.69995947069\r
2019-07-22,118812.84914886717\r
2019-07-23,118812.84914886717\r
2019-07-25,109683.8263839466\r
2019-07-28,115745.47648689005\r
2019-08-02,104313.11589781503\r
2019-08-04,104313.11589781503\r
2019-08-09,99024.39807915666\r
2019-08-14,94968.73203919013\r
2019-08-16,94968.73203919013\r
2019-08-17,94968.73203919013\r
2019-08-21,107884.58123389649\r
2019-08-22,107884.58123389649\r
2019-08-24,94968.73203919013\r
2019-08-26,96122.27795550368\r
2019-08-29,91533.39250216112\r
2019-08-31,101364.70920375302\r
2019-09-03,91533.39250216112\r
2019-09-06,91533.39250216112\r
2019-09-08,92103.29885108978\r
2019-09-11,84778.44994977443\r
2019-09-13,89830.08121792637\r
2019-09-15,93246.29962204602\r
2019-09-16,93246.29962204602\r
2019-09-20,90396.78102832298\r
2019-09-21,90396.78102832298\r
2019-10-08,66000.20239750184\r
2019-10-11,66000.20239750184\r
2019-10-13,83667.88417320736\r
2019-10-15,83667.88417320736\r
2019-10-25,79270.05779062108\r
2019-11-27,48713.665660518476\r
2019-12-05,48713.665660518476\r
2019-12-10,48713.665660518476\r
2020-01-06,56912.96376817673\r
2020-01-09,56912.96376817673\r
2020-01-11,58897.157061959195\r
2020-01-14,58897.157061959195\r
2020-01-16,53975.40912352533\r
2020-01-19,53975.40912352533\r
2020-01-28,51563.58508488049\r
2020-02-05,63946.00488124611\r
2020-02-07,63946.00488124611\r
2020-02-08,63946.00488124611\r
2020-02-15,63946.00488124611\r
2020-02-18,63946.00488124611\r
2020-02-20,63435.52020103641\r
2020-02-22,72809.31908839378\r
2020-04-05,60398.659474669854\r
2020-04-08,60398.659474669854\r
2020-04-10,98441.8976217677\r
2020-04-12,98441.8976217677\r
2020-04-15,85893.41262140655\r
2020-04-25,99607.9318714873\r
2020-04-28,118812.84914886717\r
2020-05-05,118812.84914886717\r
2020-05-07,118812.84914886717\r
2020-05-08,118812.84914886717\r
2020-05-20,102541.01693487454\r
2020-05-22,102541.01693487454\r
2020-05-25,108483.3338507367\r
2020-05-27,108483.3338507367\r
2020-05-28,108483.3338507367\r
2020-05-30,96700.62062634541\r
2020-06-12,97280.00644278352\r
2020-06-14,103721.40102013444\r
2020-06-19,87574.05101723189\r
2020-06-21,87574.05101723189\r
2020-06-22,87574.05101723189\r
2020-06-24,92674.26876183023\r
2020-06-26,92674.26876183023\r
2020-07-19,109083.08296201848\r
2020-07-21,109083.08296201848\r
2020-07-22,109083.08296201848\r
2020-07-24,110285.56194586722\r
2020-07-27,110285.56194586722\r
2020-07-29,99607.9318714873\r
2020-07-31,99607.9318714873\r
2020-08-03,99607.9318714873\r
2020-08-05,100778.08982381696\r
2020-08-06,100778.08982381696\r
2020-08-08,97280.00644278352\r
2020-08-10,116357.0168638686\r
2020-08-15,116357.0168638686\r
2020-08-20,116357.0168638686\r
2020-08-21,116357.0168638686\r
2020-08-23,116357.0168638686\r
2020-09-02,99024.39807915666\r
2020-09-04,99024.39807915666\r
2020-09-05,99024.39807915666\r
2020-09-07,99024.39807915666\r
2020-09-10,99024.39807915666\r
2020-09-12,99024.39807915666\r
2020-09-14,99024.39807915666\r
2020-09-17,95544.98092328032\r
2020-09-19,104905.84293567992\r
2020-09-29,100192.49658560274\r
2020-09-30,100192.49658560274\r
2021-02-14,68595.24573874059\r
2021-02-17,68595.24573874059\r
2021-02-19,70166.65190847707\r
2021-02-24,71748.72466349504\r
2021-02-27,80910.85878824112\r
2021-03-01,72278.43624868552\r
2021-03-04,85335.38310646355\r
2021-03-09,73341.36977677612\r
2021-03-21,79270.05779062108\r
2021-03-23,79270.05779062108\r
2021-03-24,79270.05779062108\r
2021-03-26,79270.05779062108\r
2021-03-28,79270.05779062108\r
2021-03-29,79270.05779062108\r
2021-03-31,80910.85878824112\r
2021-04-02,75481.18384344653\r
2021-04-03,75481.18384344653\r
2021-04-05,97860.43292811222\r
2021-04-07,100778.08982381696\r
2021-04-15,103721.40102013444\r
2021-04-17,100778.08982381696\r
2021-04-20,112096.69995947069\r
2021-04-22,112096.69995947069\r
2021-04-23,112096.69995947069\r
2021-06-09,112096.69995947069\r
2021-06-11,110285.56194586722\r
2021-06-14,116969.52633530703\r
2021-06-16,116969.52633530703\r
2021-06-19,116969.52633530703\r
2021-06-21,116357.0168638686\r
2021-08-23,95544.98092328032\r
2021-08-25,95544.98092328032\r
2021-08-26,95544.98092328032\r
2021-08-28,95544.98092328032\r
2021-08-30,95544.98092328032\r
2021-08-31,95544.98092328032\r
2021-09-17,73874.58493515\r
2021-09-22,90964.55234518838\r
2021-09-24,90964.55234518838\r
2021-09-25,90964.55234518838\r
2021-09-27,90964.55234518838\r
2021-09-30,87574.05101723189\r
2021-10-17,68073.83065749925\r
2021-10-19,68073.83065749925\r
2021-10-20,68073.83065749925\r
2021-10-24,68073.83065749925\r
2021-10-27,70166.65190847707\r
2021-12-16,70166.65190847707\r
2021-12-18,70166.65190847707\r
2021-12-19,70166.65190847707\r
2021-12-21,74944.49528083694\r
2021-12-23,74944.49528083694\r
2022-01-15,75481.18384344653\r
2022-01-22,75481.18384344653\r
2022-01-23,75481.18384344653\r
2022-01-25,78725.37802879291\r
2022-01-27,71220.18776618654\r
2022-02-01,71220.18776618654\r
2022-02-09,80362.80123738758\r
2022-03-01,101364.70920375302\r
2022-03-03,101364.70920375302\r
2022-03-08,101364.70920375302\r
2022-03-09,101364.70920375302\r
2022-03-26,91533.39250216112\r
2022-04-05,104905.84293567992\r
2022-04-10,108483.3338507367\r
2022-04-15,108483.3338507367\r
2022-04-17,99607.9318714873\r
2022-04-30,94968.73203919013\r
2022-05-07,94968.73203919013\r
2022-05-08,94968.73203919013\r
2022-05-10,94968.73203919013\r
2022-06-29,95544.98092328032\r
2022-07-01,101952.35235818375\r
2022-07-02,101952.35235818375\r
2022-07-04,101952.35235818375\r
2022-07-06,101952.35235818375\r
2022-07-07,101952.35235818375\r
2022-07-19,107884.58123389649\r
2022-07-21,107884.58123389649\r
2022-07-22,107884.58123389649\r
2022-07-24,107884.58123389649\r
2022-07-26,107884.58123389649\r
2022-07-27,107884.58123389649\r
2022-08-08,99607.9318714873\r
2022-08-10,99607.9318714873\r
2022-08-11,99607.9318714873\r
2022-08-13,106094.32438785736\r
2022-08-15,106094.32438785736\r
2022-08-18,106094.32438785736\r
2022-08-20,95544.98092328032\r
2022-08-23,95544.98092328032\r
2022-09-12,89264.45559877602\r
2022-09-15,89264.45559877602\r
2022-09-19,89264.45559877602\r
2022-09-20,89264.45559877602\r
2022-09-22,91533.39250216112\r
2022-10-02,87574.05101723189\r
2022-10-07,88136.43776666188\r
2022-10-09,88136.43776666188\r
2022-10-12,88136.43776666188\r
2022-10-15,88136.43776666188\r
2022-10-22,71220.18776618654\r
2022-10-24,71220.18776618654\r
2022-11-01,71220.18776618654\r
2022-11-06,56420.12473107665\r
2022-11-08,56420.12473107665\r
2022-11-11,61405.95814410366\r
2022-11-13,61405.95814410366\r
2022-11-16,57407.09092255291\r
2022-11-24,63435.52020103641\r
2022-12-06,16011.466318272993\r
2022-12-11,16011.466318272993\r
2023-01-10,57902.50177071996\r
2023-01-12,57902.50177071996\r
2023-01-18,57902.50177071996\r
2023-02-09,63946.00488124611\r
2023-02-11,63946.00488124611\r
2023-02-12,63946.00488124611\r
2023-02-14,83667.88417320736\r
2023-02-16,83667.88417320736\r
2023-02-17,83667.88417320736\r
2023-02-19,70692.82901801063\r
2023-02-21,79815.86655300505\r
2023-02-24,79815.86655300505\r
2023-02-26,70692.82901801063\r
2023-03-01,82010.33038071958\r
2023-03-03,81460.03617278702\r
2023-03-04,81460.03617278702\r
2023-03-09,81460.03617278702\r
2023-03-16,87012.74938655096\r
2023-04-05,88699.90687427447\r
2023-04-07,88699.90687427447\r
2023-04-08,88699.90687427447\r
2023-04-15,88699.90687427447\r
2023-05-05,76019.02362596606\r
2023-05-10,76019.02362596606\r
2023-06-24,113309.04678626731\r
2023-07-09,90396.78102832298\r
2023-07-11,90396.78102832298\r
2023-07-14,106690.0742852151\r
2023-07-16,106690.0742852151\r
2023-07-17,106690.0742852151\r
2023-07-19,106690.0742852151\r
2023-07-22,106690.0742852151\r
2023-08-08,105499.57985417881\r
2023-08-10,105499.57985417881\r
2023-08-11,105499.57985417881\r
2023-08-13,105499.57985417881\r
2023-08-15,105499.57985417881\r
2023-08-18,105499.57985417881\r
2023-08-20,89830.08121792637\r
2023-08-21,89830.08121792637\r
2023-08-23,93246.29962204602\r
2023-08-31,93819.38883701191\r
2023-09-07,87012.74938655096\r
2023-09-10,87012.74938655096\r
2023-09-14,87012.74938655096\r
2023-09-27,82561.73842393466\r
2023-09-29,82561.73842393466\r
2023-09-30,82561.73842393466\r
2023-10-02,82561.73842393466\r
2023-10-04,82561.73842393466\r
2023-10-05,82561.73842393466\r
2023-10-07,77098.14388369145\r
`;export{n as default};
