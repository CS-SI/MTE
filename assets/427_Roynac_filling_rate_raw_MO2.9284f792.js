const n=`date,value\r
2017-02-19,67.51336518535238\r
2017-02-22,77.72265404547547\r
2017-03-01,77.72265404547547\r
2017-03-11,84.42047269730239\r
2017-03-14,84.42047269730239\r
2017-03-21,84.42047269730239\r
2017-04-03,81.71231006177689\r
2017-04-10,91.35910504295859\r
2017-04-20,87.16716400274304\r
2017-04-23,100.0\r
2017-05-03,94.20144911161799\r
2017-05-30,100.0\r
2017-06-02,100.0\r
2017-06-09,94.20144911161799\r
2017-06-12,85.78901200585437\r
2017-06-19,85.78901200585437\r
2017-06-22,85.78901200585437\r
2017-06-29,92.77551773984405\r
2017-07-02,94.20144911161799\r
2017-07-04,80.37272624053429\r
2017-07-07,81.71231006177689\r
2017-07-09,81.71231006177689\r
2017-07-12,70.0066945066698\r
2017-07-14,70.0066945066698\r
2017-07-17,68.75508808116612\r
2017-07-19,84.42047269730239\r
2017-07-22,84.42047269730239\r
2017-07-24,75.11151243720958\r
2017-07-27,66.28154845752621\r
2017-07-29,59.099982422287056\r
2017-08-03,60.27187016900095\r
2017-08-06,62.64576601441003\r
2017-08-11,55.64485850717817\r
2017-08-13,40.74072979413646\r
2017-08-18,35.9148735093665\r
2017-08-21,33.14776566605072\r
2017-08-23,35.9148735093665\r
2017-08-26,35.9148735093665\r
2017-09-05,24.634074384697467\r
2017-09-07,12.770185726868382\r
2017-09-10,12.770185726868382\r
2017-09-12,12.770185726868382\r
2017-09-15,12.770185726868382\r
2017-09-20,15.255731659010968\r
2017-09-22,15.255731659010968\r
2017-09-27,17.24550119904095\r
2017-10-02,16.570407866454996\r
2017-10-05,21.541006759303915\r
2017-10-07,16.570407866454996\r
2017-10-10,15.907131100214823\r
2017-10-12,15.907131100214823\r
2017-10-15,14.616272055139582\r
2017-10-17,13.988816648732286\r
2017-10-22,12.770185726868382\r
2017-10-25,17.24550119904095\r
2017-10-27,12.770185726868382\r
2017-10-30,12.179149129211156\r
2017-11-01,12.179149129211156\r
2017-11-09,12.179149129211156\r
2017-11-14,16.570407866454996\r
2017-11-16,16.570407866454996\r
2017-11-19,16.570407866454996\r
2017-11-21,17.93235200546922\r
2017-11-26,7.899695009735389\r
2017-11-29,7.899695009735389\r
2017-12-06,15.907131100214823\r
2017-12-09,15.907131100214823\r
2017-12-14,15.907131100214823\r
2017-12-16,15.907131100214823\r
2018-01-13,18.63090277818517\r
2018-01-23,24.634074384697467\r
2018-01-28,19.3410975189648\r
2018-01-30,19.3410975189648\r
2018-02-02,19.3410975189648\r
2018-02-19,42.745186370009286\r
2018-02-22,42.745186370009286\r
2018-02-24,42.745186370009286\r
2018-02-27,51.18024674382826\r
2018-03-06,46.87974967513651\r
2018-03-09,46.87974967513651\r
2018-03-14,40.74072979413646\r
2018-03-16,40.74072979413646\r
2018-03-19,50.08966753521511\r
2018-03-21,50.08966753521511\r
2018-03-24,50.08966753521511\r
2018-03-26,38.77849230548925\r
2018-03-31,49.009372757501914\r
2018-04-05,61.453806188737026\r
2018-04-10,61.453806188737026\r
2018-04-15,45.83047904491478\r
2018-04-18,67.51336518535238\r
2018-04-20,84.42047269730239\r
2018-04-23,70.0066945066698\r
2018-04-25,77.72265404547547\r
2018-05-03,83.06156550193002\r
2018-05-05,80.37272624053429\r
2018-05-08,70.0066945066698\r
2018-05-18,85.78901200585437\r
2018-05-20,94.20144911161799\r
2018-05-23,72.53946879125928\r
2018-05-25,72.53946879125928\r
2018-06-09,83.06156550193002\r
2018-06-14,88.55490947599579\r
2018-06-19,80.37272624053429\r
2018-06-22,77.72265404547547\r
2018-06-24,83.06156550193002\r
2018-06-27,77.72265404547547\r
2018-06-29,85.78901200585437\r
2018-07-02,79.04283412813386\r
2018-07-04,84.42047269730239\r
2018-07-07,79.04283412813386\r
2018-07-09,77.72265404547547\r
2018-07-12,76.41220654929947\r
2018-07-17,77.72265404547547\r
2018-07-19,79.04283412813386\r
2018-07-22,73.82059275285229\r
2018-07-27,72.53946879125928\r
2018-07-29,72.53946879125928\r
2018-08-01,76.41220654929947\r
2018-08-03,81.71231006177689\r
2018-08-06,81.71231006177689\r
2018-08-08,81.71231006177689\r
2018-08-11,81.71231006177689\r
2018-08-16,77.72265404547547\r
2018-08-21,80.37272624053429\r
2018-08-23,80.37272624053429\r
2018-08-26,80.37272624053429\r
2018-08-28,72.53946879125928\r
2018-08-31,72.53946879125928\r
2018-09-02,79.04283412813386\r
2018-09-05,66.28154845752621\r
2018-09-07,71.26816210435976\r
2018-09-10,68.75508808116612\r
2018-09-12,68.75508808116612\r
2018-09-17,49.009372757501914\r
2018-09-20,47.9393905985551\r
2018-09-22,54.51341527052822\r
2018-09-25,54.51341527052822\r
2018-09-27,62.64576601441003\r
2018-10-02,67.51336518535238\r
2018-10-05,54.51341527052822\r
2018-10-07,54.51341527052822\r
2018-10-10,51.18024674382826\r
2018-10-12,51.18024674382826\r
2018-10-17,38.77849230548925\r
2018-10-20,45.83047904491478\r
2018-10-22,38.77849230548925\r
2018-10-25,40.74072979413646\r
2018-10-30,42.745186370009286\r
2018-11-04,40.74072979413646\r
2018-12-01,54.51341527052822\r
2018-12-11,54.51341527052822\r
2019-01-30,40.74072979413646\r
2019-02-04,46.87974967513651\r
2019-02-12,46.87974967513651\r
2019-02-14,27.90704628827074\r
2019-02-17,30.47814543886841\r
2019-02-19,30.47814543886841\r
2019-02-22,33.14776566605072\r
2019-02-27,30.47814543886841\r
2019-03-01,40.74072979413646\r
2019-03-11,49.009372757501914\r
2019-03-14,49.009372757501914\r
2019-03-16,51.18024674382826\r
2019-03-19,49.009372757501914\r
2019-03-21,38.77849230548925\r
2019-03-24,51.18024674382826\r
2019-03-26,51.18024674382826\r
2019-03-29,44.79160821897088\r
2019-03-31,52.281082612827525\r
2019-04-05,55.64485850717817\r
2019-04-08,62.64576601441003\r
2019-04-13,70.0066945066698\r
2019-04-15,73.82059275285229\r
2019-04-18,73.82059275285229\r
2019-04-20,92.77551773984405\r
2019-04-30,76.41220654929947\r
2019-05-03,84.42047269730239\r
2019-05-10,87.16716400274304\r
2019-05-13,80.37272624053429\r
2019-05-15,83.06156550193002\r
2019-05-23,73.82059275285229\r
2019-05-25,73.82059275285229\r
2019-05-30,100.0\r
2019-06-02,100.0\r
2019-06-04,95.63688094994146\r
2019-06-07,100.0\r
2019-06-12,100.0\r
2019-06-19,88.55490947599579\r
2019-06-22,95.63688094994146\r
2019-06-24,91.35910504295859\r
2019-06-27,97.08179523583416\r
2019-06-29,89.95222942230777\r
2019-07-02,97.08179523583416\r
2019-07-04,89.95222942230777\r
2019-07-07,94.20144911161799\r
2019-07-12,89.95222942230777\r
2019-07-14,85.78901200585437\r
2019-07-17,87.16716400274304\r
2019-07-19,81.71231006177689\r
2019-07-22,81.71231006177689\r
2019-07-24,81.71231006177689\r
2019-07-29,80.37272624053429\r
2019-08-03,76.41220654929947\r
2019-08-06,72.53946879125928\r
2019-08-08,73.82059275285229\r
2019-08-11,76.41220654929947\r
2019-08-13,76.41220654929947\r
2019-08-16,70.0066945066698\r
2019-08-18,66.28154845752621\r
2019-08-21,70.0066945066698\r
2019-08-23,70.0066945066698\r
2019-08-26,61.453806188737026\r
2019-08-31,57.938167746769786\r
2019-09-02,71.26816210435976\r
2019-09-05,59.099982422287056\r
2019-09-07,61.453806188737026\r
2019-09-12,42.745186370009286\r
2019-09-15,51.18024674382826\r
2019-09-17,42.745186370009286\r
2019-09-20,42.745186370009286\r
2019-09-25,43.76316717482432\r
2019-09-27,42.745186370009286\r
2019-09-30,47.9393905985551\r
2019-10-02,47.9393905985551\r
2019-10-05,52.281082612827525\r
2019-10-07,44.79160821897088\r
2019-10-10,53.392147777953895\r
2019-10-15,55.64485850717817\r
2019-10-25,54.51341527052822\r
2019-10-30,60.27187016900095\r
2019-11-06,55.64485850717817\r
2019-11-09,53.392147777953895\r
2019-11-16,52.281082612827525\r
2019-12-06,37.81328738717896\r
2019-12-14,37.81328738717896\r
2019-12-19,37.81328738717896\r
2019-12-21,46.87974967513651\r
2020-01-08,42.745186370009286\r
2020-01-10,42.745186370009286\r
2020-01-13,42.745186370009286\r
2020-01-18,42.745186370009286\r
2020-02-07,34.0593523332114\r
2020-02-09,34.0593523332114\r
2020-02-12,47.9393905985551\r
2020-02-14,47.9393905985551\r
2020-02-19,47.9393905985551\r
2020-02-22,38.77849230548925\r
2020-02-24,41.73769675623115\r
2020-03-03,46.87974967513651\r
2020-03-08,43.76316717482432\r
2020-03-10,53.392147777953895\r
2020-03-13,61.453806188737026\r
2020-03-15,61.453806188737026\r
2020-03-18,55.64485850717817\r
2020-03-20,67.51336518535238\r
2020-03-25,70.0066945066698\r
2020-03-28,70.0066945066698\r
2020-04-02,71.26816210435976\r
2020-04-04,71.26816210435976\r
2020-04-07,68.75508808116612\r
2020-04-09,77.72265404547547\r
2020-04-14,76.41220654929947\r
2020-04-24,79.04283412813386\r
2020-04-29,83.06156550193002\r
2020-05-04,87.16716400274304\r
2020-05-07,87.16716400274304\r
2020-05-09,87.16716400274304\r
2020-05-17,98.53617413612534\r
2020-05-19,91.35910504295859\r
2020-05-22,89.95222942230777\r
2020-05-24,89.95222942230777\r
2020-05-27,89.95222942230777\r
2020-05-29,94.20144911161799\r
2020-06-01,88.55490947599579\r
2020-06-03,92.77551773984405\r
2020-06-06,92.77551773984405\r
2020-06-08,85.78901200585437\r
2020-06-11,87.16716400274304\r
2020-06-21,73.82059275285229\r
2020-06-23,97.08179523583416\r
2020-06-26,97.08179523583416\r
2020-06-28,97.08179523583416\r
2020-07-01,80.37272624053429\r
2020-07-03,80.37272624053429\r
2020-07-06,80.37272624053429\r
2020-07-08,77.72265404547547\r
2020-07-11,77.72265404547547\r
2020-07-13,77.72265404547547\r
2020-07-16,77.72265404547547\r
2020-07-18,77.72265404547547\r
2020-07-21,76.41220654929947\r
2020-07-23,76.41220654929947\r
2020-07-26,71.26816210435976\r
2020-07-28,72.53946879125928\r
2020-07-31,70.0066945066698\r
2020-08-02,70.0066945066698\r
2020-08-05,71.26816210435976\r
2020-08-07,65.05966082325585\r
2020-08-10,54.51341527052822\r
2020-08-15,52.281082612827525\r
2020-08-20,40.74072979413646\r
2020-08-22,40.74072979413646\r
2020-08-25,45.83047904491478\r
2020-08-27,45.83047904491478\r
2020-09-01,41.73769675623115\r
2020-09-04,41.73769675623115\r
2020-09-06,42.745186370009286\r
2020-09-11,36.85873637147296\r
2020-09-14,34.0593523332114\r
2020-09-16,37.81328738717896\r
2020-09-19,33.14776566605072\r
2020-09-29,53.392147777953895\r
2020-10-24,38.77849230548925\r
2020-10-26,38.77849230548925\r
2020-10-31,38.77849230548925\r
2020-11-05,38.77849230548925\r
2020-11-10,25.435564778770907\r
2020-11-18,29.61011281530128\r
2020-11-23,40.74072979413646\r
2020-11-25,40.74072979413646\r
2020-11-30,40.74072979413646\r
2020-12-03,40.74072979413646\r
2020-12-13,21.541006759303915\r
2020-12-28,21.541006759303915\r
2021-01-14,47.9393905985551\r
2021-01-19,47.9393905985551\r
2021-01-24,47.9393905985551\r
2021-02-03,26.248252821371725\r
2021-02-11,45.83047904491478\r
2021-02-13,45.83047904491478\r
2021-02-21,52.281082612827525\r
2021-02-23,62.64576601441003\r
2021-02-26,62.64576601441003\r
2021-02-28,62.64576601441003\r
2021-03-05,68.75508808116612\r
2021-03-08,68.75508808116612\r
2021-03-10,68.75508808116612\r
2021-03-20,65.05966082325585\r
2021-03-25,59.099982422287056\r
2021-03-28,72.53946879125928\r
2021-03-30,68.75508808116612\r
2021-04-02,83.06156550193002\r
2021-04-04,79.04283412813386\r
2021-04-07,83.06156550193002\r
2021-04-09,80.37272624053429\r
2021-04-14,87.16716400274304\r
2021-04-17,87.16716400274304\r
2021-04-19,91.35910504295859\r
2021-04-22,91.35910504295859\r
2021-04-24,87.16716400274304\r
2021-05-14,70.0066945066698\r
2021-05-19,80.37272624053429\r
2021-05-24,72.53946879125928\r
2021-05-27,72.53946879125928\r
2021-05-29,72.53946879125928\r
2021-06-01,71.26816210435976\r
2021-06-03,76.41220654929947\r
2021-06-08,91.35910504295859\r
2021-06-11,81.71231006177689\r
2021-06-13,95.63688094994146\r
2021-06-16,95.63688094994146\r
2021-06-18,95.63688094994146\r
2021-06-21,95.63688094994146\r
2021-06-23,100.0\r
2021-06-26,83.06156550193002\r
2021-07-01,95.63688094994146\r
2021-07-11,100.0\r
2021-07-18,98.53617413612534\r
2021-07-21,88.55490947599579\r
2021-07-23,88.55490947599579\r
2021-07-26,89.95222942230777\r
2021-07-28,89.95222942230777\r
2021-08-02,89.95222942230777\r
2021-08-05,89.95222942230777\r
2021-08-10,88.55490947599579\r
2021-08-12,88.55490947599579\r
2021-08-15,88.55490947599579\r
2021-08-17,83.06156550193002\r
2021-08-20,89.95222942230777\r
2021-08-22,89.95222942230777\r
2021-08-25,89.95222942230777\r
2021-08-27,88.55490947599579\r
2021-08-30,79.04283412813386\r
2021-09-01,76.41220654929947\r
2021-09-04,88.55490947599579\r
2021-09-06,84.42047269730239\r
2021-09-11,87.16716400274304\r
2021-09-21,89.95222942230777\r
2021-09-24,79.04283412813386\r
2021-09-29,73.82059275285229\r
2021-10-01,76.41220654929947\r
2021-10-06,77.72265404547547\r
2021-10-09,75.11151243720958\r
2021-10-11,71.26816210435976\r
2021-10-14,59.099982422287056\r
2021-10-16,52.281082612827525\r
2021-10-21,51.18024674382826\r
2021-10-24,43.76316717482432\r
2021-10-26,53.392147777953895\r
2021-11-05,65.05966082325585\r
2021-11-13,50.08966753521511\r
2021-11-30,41.73769675623115\r
2021-12-03,41.73769675623115\r
2022-01-07,53.392147777953895\r
2022-01-12,53.392147777953895\r
2022-01-14,53.392147777953895\r
2022-01-17,53.392147777953895\r
2022-01-19,32.24701048969866\r
2022-01-22,41.73769675623115\r
2022-01-24,41.73769675623115\r
2022-01-27,61.453806188737026\r
2022-01-29,61.453806188737026\r
2022-02-01,49.009372757501914\r
2022-02-08,56.78645127994763\r
2022-02-11,56.78645127994763\r
2022-02-13,50.08966753521511\r
2022-02-18,67.51336518535238\r
2022-02-21,45.83047904491478\r
2022-02-23,52.281082612827525\r
2022-02-26,49.009372757501914\r
2022-02-28,53.392147777953895\r
2022-03-03,60.27187016900095\r
2022-03-05,54.51341527052822\r
2022-03-08,62.64576601441003\r
2022-03-25,80.37272624053429\r
2022-03-28,80.37272624053429\r
2022-04-04,100.0\r
2022-04-09,100.0\r
2022-04-14,100.0\r
2022-04-19,81.71231006177689\r
2022-04-22,81.71231006177689\r
2022-04-27,91.35910504295859\r
2022-05-02,87.16716400274304\r
2022-05-04,100.0\r
2022-05-07,100.0\r
2022-05-09,95.63688094994146\r
2022-05-12,89.95222942230777\r
2022-05-14,89.95222942230777\r
2022-05-17,94.20144911161799\r
2022-05-19,95.63688094994146\r
2022-05-22,91.35910504295859\r
2022-05-27,89.95222942230777\r
2022-05-29,91.35910504295859\r
2022-06-01,87.16716400274304\r
2022-06-06,91.35910504295859\r
2022-06-11,95.63688094994146\r
2022-06-13,95.63688094994146\r
2022-06-16,95.63688094994146\r
2022-06-21,92.77551773984405\r
2022-06-23,100.0\r
2022-06-26,91.35910504295859\r
2022-06-28,100.0\r
2022-07-01,95.63688094994146\r
2022-07-03,95.63688094994146\r
2022-07-06,88.55490947599579\r
2022-07-08,88.55490947599579\r
2022-07-11,87.16716400274304\r
2022-07-13,87.16716400274304\r
2022-07-16,80.37272624053429\r
2022-07-18,79.04283412813386\r
2022-07-21,75.11151243720958\r
2022-07-23,83.06156550193002\r
2022-07-26,76.41220654929947\r
2022-07-28,72.53946879125928\r
2022-07-31,66.28154845752621\r
2022-08-02,63.84772550207561\r
2022-08-05,59.099982422287056\r
2022-08-07,51.18024674382826\r
2022-08-10,49.009372757501914\r
2022-08-12,43.76316717482432\r
2022-08-15,41.73769675623115\r
2022-08-20,41.73769675623115\r
2022-08-22,43.76316717482432\r
2022-08-25,46.87974967513651\r
2022-08-27,46.87974967513651\r
2022-09-01,37.81328738717896\r
2022-09-04,36.85873637147296\r
2022-09-06,36.85873637147296\r
2022-09-09,36.85873637147296\r
2022-09-11,37.81328738717896\r
2022-09-16,41.73769675623115\r
2022-09-19,34.0593523332114\r
2022-09-21,37.81328738717896\r
2022-09-29,38.77849230548925\r
2022-10-04,34.98173366446797\r
2022-10-06,36.85873637147296\r
2022-10-11,31.35712433047934\r
2022-10-16,33.14776566605072\r
2022-10-19,50.08966753521511\r
2022-10-26,50.08966753521511\r
2022-10-31,27.07209438730338\r
2022-11-05,27.07209438730338\r
2022-11-25,28.75306623733675\r
2022-11-30,25.435564778770907\r
2022-12-05,25.435564778770907\r
2023-01-24,51.18024674382826\r
2023-01-27,51.18024674382826\r
2023-01-29,51.18024674382826\r
2023-02-01,51.18024674382826\r
2023-02-03,61.453806188737026\r
2023-02-06,49.009372757501914\r
2023-02-08,49.009372757501914\r
2023-02-11,38.77849230548925\r
2023-02-13,40.74072979413646\r
2023-02-16,38.77849230548925\r
2023-02-18,38.77849230548925\r
2023-02-21,38.77849230548925\r
2023-02-26,53.392147777953895\r
2023-03-03,67.51336518535238\r
2023-03-05,63.84772550207561\r
2023-03-13,73.82059275285229\r
2023-03-15,70.0066945066698\r
2023-03-20,76.41220654929947\r
2023-03-28,84.42047269730239\r
2023-03-30,84.42047269730239\r
2023-04-04,100.0\r
2023-04-07,88.55490947599579\r
2023-04-17,84.42047269730239\r
2023-04-19,83.06156550193002\r
2023-04-24,87.16716400274304\r
2023-05-02,85.78901200585437\r
`;export{n as default};