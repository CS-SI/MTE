const r=`date,value\r
2017-01-19,8421.485906066924\r
2017-01-29,8421.485906066924\r
2017-02-08,2389.2709050411886\r
2017-02-11,16767.976069060802\r
2017-02-18,16512.752951025916\r
2017-02-21,16640.187963904384\r
2017-02-28,14401.135527750179\r
2017-03-10,21178.40748469129\r
2017-03-13,21457.49232419994\r
2017-03-30,30899.44379954104\r
2017-04-02,30899.44379954104\r
2017-04-09,30899.44379954104\r
2017-04-12,29006.483687404285\r
2017-04-19,26853.14266502499\r
2017-04-22,22160.950915652422\r
2017-04-29,21878.585324563704\r
2017-05-02,23592.248816143536\r
2017-05-09,23592.248816143536\r
2017-05-22,25203.663747322735\r
2017-06-01,25203.663747322735\r
2017-06-11,20624.20464638478\r
2017-06-18,23159.470071106418\r
2017-06-21,22302.623034251283\r
2017-06-28,23015.8538420825\r
2017-07-01,19938.93961643781\r
2017-08-05,10609.563311765256\r
2017-08-07,10609.563311765256\r
2017-08-20,9027.982830974124\r
2017-08-22,9027.982830974124\r
2017-08-25,11601.999072118513\r
2017-08-27,9544.922142596468\r
2017-10-11,7927.79714188385\r
2017-10-14,8222.719971713826\r
2017-10-16,8222.719971713826\r
2017-10-19,7540.650537439759\r
2017-10-21,7540.650537439759\r
2017-10-24,8025.672673447146\r
2017-10-26,8222.719971713826\r
2017-10-31,8222.719971713826\r
2017-11-05,12626.061067573286\r
2017-11-08,11826.862107884135\r
2017-11-13,11939.876600465936\r
2017-11-15,11939.876600465936\r
2017-11-18,7830.355656835022\r
2017-11-23,7830.355656835022\r
2017-12-15,873.003667089823\r
2017-12-25,873.003667089823\r
2018-01-17,16896.11651526784\r
2018-01-19,16896.11651526784\r
2018-01-22,16896.11651526784\r
2018-01-24,16896.11651526784\r
2018-01-27,20762.25797883211\r
2018-01-29,18593.672822278542\r
2018-02-01,18593.672822278542\r
2018-02-06,18593.672822278542\r
2018-02-08,22872.560217090082\r
2018-02-11,22872.560217090082\r
2018-02-21,26399.548575986963\r
2018-02-26,28385.138414386598\r
2018-03-03,28385.138414386598\r
2018-03-08,26098.7042856901\r
2018-03-13,24173.770093685012\r
2018-03-15,24173.770093685012\r
2018-03-18,24173.770093685012\r
2018-03-20,31219.118248054452\r
2018-03-25,31219.118248054452\r
2018-03-30,31219.118248054452\r
2018-04-17,28695.20426636855\r
2018-04-19,33818.909730613865\r
2018-04-22,33818.909730613865\r
2018-04-24,33818.909730613865\r
2018-04-27,33818.909730613865\r
2018-05-04,29789.967805718636\r
2018-05-07,29789.967805718636\r
2018-05-17,22019.60481866015\r
2018-05-19,32185.240656788254\r
2018-05-22,32185.240656788254\r
2018-05-24,32185.240656788254\r
2018-06-21,24907.82786163178\r
2018-06-23,33654.2320373141\r
2018-06-26,33654.2320373141\r
2018-06-28,31539.978115070127\r
2018-07-01,30105.466287490795\r
2018-07-03,29789.967805718636\r
2018-07-08,28076.289807676352\r
2018-07-11,28230.561724172425\r
2018-07-13,28540.019415341187\r
2018-07-16,28076.289807676352\r
2018-07-18,27309.51819939149\r
2018-07-21,26550.43674416549\r
2018-07-23,29006.483687404285\r
2018-07-26,28695.20426636855\r
2018-07-31,27157.084779610785\r
2018-08-02,28076.289807676352\r
2018-08-05,22586.943028058762\r
2018-08-07,23447.668111600608\r
2018-08-10,23447.668111600608\r
2018-08-12,23447.668111600608\r
2018-08-15,17802.903170570684\r
2018-08-22,10936.813309491721\r
2018-08-30,10936.813309491721\r
2018-09-01,12167.066401053486\r
2018-09-04,10072.166686381272\r
2018-09-09,10072.166686381272\r
2018-09-11,11267.635067174637\r
2018-09-14,21737.893018082366\r
2018-09-16,21737.893018082366\r
2018-09-24,19938.93961643781\r
2018-09-26,11046.69184055103\r
2018-09-29,8321.88882717813\r
2018-10-01,8321.88882717813\r
2018-10-04,8621.959085356588\r
2018-10-09,6512.620870232641\r
2018-10-14,9336.900955829697\r
2018-10-16,7066.632786821905\r
2018-10-19,7160.546521200565\r
2018-10-21,8123.980771296826\r
2018-10-24,4869.11024726997\r
2018-11-18,4308.067270906786\r
2018-11-20,4308.067270906786\r
2018-12-10,14522.447632510573\r
2018-12-20,14522.447632510573\r
2018-12-25,19802.89133815419\r
2018-12-28,19802.89133815419\r
2019-01-17,16385.67178695784\r
2019-01-19,16385.67178695784\r
2019-01-22,16512.752951025916\r
2019-01-24,18328.706208760625\r
2019-01-27,17542.07793263703\r
2019-02-03,16385.67178695784\r
2019-02-13,17672.31693867617\r
2019-02-16,17672.31693867617\r
2019-02-18,17672.31693867617\r
2019-02-21,17282.644466184465\r
2019-02-23,18860.008830415067\r
2019-02-26,15755.600556907924\r
2019-03-03,16385.67178695784\r
2019-03-08,16385.67178695784\r
2019-03-10,16385.67178695784\r
2019-03-13,19667.179454558303\r
2019-03-23,23882.37084987618\r
2019-03-25,24613.254323879228\r
2019-03-28,28076.289807676352\r
2019-03-30,22444.6205965636\r
2019-04-04,22444.6205965636\r
2019-04-07,23737.149910802815\r
2019-04-09,20900.64330437467\r
2019-04-12,24613.254323879228\r
2019-04-14,19802.89133815419\r
2019-04-19,25799.106035830264\r
2019-04-22,25799.106035830264\r
2019-04-27,25352.05377427584\r
2019-05-24,17412.186868246506\r
2019-05-27,17412.186868246506\r
2019-05-29,17412.186868246506\r
2019-06-01,31862.02003079089\r
2019-06-03,31862.02003079089\r
2019-06-06,31862.02003079089\r
2019-06-13,29318.973037617943\r
2019-06-18,25055.58827096143\r
2019-06-21,25055.58827096143\r
2019-06-26,29947.56714416794\r
2019-06-28,29947.56714416794\r
2019-07-01,25500.75783816048\r
2019-07-03,26098.7042856901\r
2019-07-06,25352.05377427584\r
2019-07-08,25352.05377427584\r
2019-07-13,21457.49232419994\r
2019-07-16,20624.20464638478\r
2019-07-23,18328.706208760625\r
2019-07-28,17542.07793263703\r
2019-07-31,23882.37084987618\r
2019-08-02,16132.574058292563\r
2019-08-05,16132.574058292563\r
2019-08-10,11378.697586806715\r
2019-08-12,11378.697586806715\r
2019-08-22,5454.519993281787\r
2019-08-25,5454.519993281787\r
2019-08-27,5454.519993281787\r
2019-08-30,5454.519993281787\r
2019-09-01,5454.519993281787\r
2019-09-04,7066.632786821905\r
2019-09-06,5284.819394605613\r
2019-09-11,1674.0530322278107\r
2019-09-16,3998.732972936891\r
2019-09-19,3772.237125227329\r
2019-09-21,4229.955512495687\r
2019-09-24,6063.537425212182\r
2019-10-01,6063.537425212182\r
2019-10-11,5284.819394605613\r
2019-10-14,5284.819394605613\r
2019-10-21,12741.765431534206\r
2019-11-03,12741.765431534206\r
2019-12-03,22729.589757535672\r
2019-12-05,21878.585324563704\r
2019-12-13,26550.43674416549\r
2019-12-20,26550.43674416549\r
2019-12-23,26550.43674416549\r
2019-12-25,26550.43674416549\r
2020-01-19,19667.179454558303\r
2020-01-22,19667.179454558303\r
2020-01-24,29475.6703084933\r
2020-02-01,29475.6703084933\r
2020-02-03,29475.6703084933\r
2020-02-06,29475.6703084933\r
2020-02-18,13919.571663183513\r
2020-02-21,13919.571663183513\r
2020-03-02,29947.56714416794\r
2020-03-07,29947.56714416794\r
2020-03-09,29947.56714416794\r
2020-03-17,29947.56714416794\r
2020-03-19,66.87013596711068\r
2020-03-24,19127.708821597498\r
2020-03-27,19127.708821597498\r
2020-03-29,19127.708821597498\r
2020-04-01,22302.623034251283\r
2020-04-03,22302.623034251283\r
2020-04-08,22302.623034251283\r
2020-04-11,22872.560217090082\r
2020-04-13,24907.82786163178\r
2020-04-16,24907.82786163178\r
2020-04-18,24907.82786163178\r
2020-04-23,24907.82786163178\r
2020-04-26,24907.82786163178\r
2020-05-06,24173.770093685012\r
2020-05-16,24173.770093685012\r
2020-05-18,24907.82786163178\r
2020-05-21,24907.82786163178\r
2020-05-23,18461.0180001979\r
2020-05-26,22019.60481866015\r
2020-05-28,20486.48392423518\r
2020-05-31,21878.585324563704\r
2020-06-02,20486.48392423518\r
2020-06-05,25055.58827096143\r
2020-06-07,25055.58827096143\r
2020-07-12,13443.945300942916\r
2020-07-15,13443.945300942916\r
2020-07-17,15630.658678157932\r
2020-07-20,15630.658678157932\r
2020-07-22,22586.943028058762\r
2020-07-27,22586.943028058762\r
2020-07-30,22729.589757535672\r
2020-08-01,22729.589757535672\r
2020-08-04,22872.560217090082\r
2020-08-06,18065.11447285108\r
2020-08-09,17024.60855654048\r
2020-08-11,14039.408204425774\r
2020-08-14,14039.408204425774\r
2020-09-08,6973.167219487549\r
2020-09-10,7830.355656835022\r
2020-09-13,6787.587264026402\r
2020-09-15,6787.587264026402\r
2020-09-20,8824.12836356211\r
2020-09-25,7927.79714188385\r
2020-09-28,9860.04221164847\r
2020-11-04,11267.635067174637\r
2020-11-09,11267.635067174637\r
2020-11-12,11267.635067174637\r
2020-11-14,11267.635067174637\r
2020-11-19,21039.360009568874\r
2020-11-22,21039.360009568874\r
2020-11-27,21039.360009568874\r
2020-11-29,14401.135527750179\r
2020-12-12,21878.585324563704\r
2020-12-17,21597.52848739999\r
2021-01-08,25799.106035830264\r
2021-01-11,25799.106035830264\r
2021-01-18,25799.106035830264\r
2021-02-07,21039.360009568874\r
2021-02-17,21457.49232419994\r
2021-02-27,32509.636685510213\r
2021-03-02,32509.636685510213\r
2021-03-04,32509.636685510213\r
2021-03-09,32509.636685510213\r
2021-03-12,28230.561724172425\r
2021-03-14,28230.561724172425\r
2021-03-17,26701.63493709274\r
2021-03-19,26701.63493709274\r
2021-03-22,30422.162236455606\r
2021-03-24,28695.20426636855\r
2021-03-27,28695.20426636855\r
2021-03-29,30263.664797084868\r
2021-04-01,30263.664797084868\r
2021-04-03,30105.466287490795\r
2021-04-06,34480.51486344192\r
2021-04-08,25203.663747322735\r
2021-04-11,25203.663747322735\r
2021-04-13,24907.82786163178\r
2021-04-16,27615.307365339337\r
2021-04-18,27615.307365339337\r
2021-04-21,27615.307365339337\r
2021-04-23,28076.289807676352\r
2021-04-28,34149.13420723786\r
2021-05-03,24466.442242466503\r
2021-05-08,21737.893018082366\r
2021-05-11,19262.06863885668\r
2021-05-13,19262.06863885668\r
2021-05-16,21597.52848739999\r
2021-05-21,21457.49232419994\r
2021-05-31,27615.307365339337\r
2021-06-05,27615.307365339337\r
2021-06-07,27615.307365339337\r
2021-06-10,27615.307365339337\r
2021-06-15,24907.82786163178\r
2021-06-22,24907.82786163178\r
2021-06-25,24907.82786163178\r
2021-07-17,23159.470071106418\r
2021-07-20,24466.442242466503\r
2021-07-22,22729.589757535672\r
2021-07-25,22729.589757535672\r
2021-07-30,24027.91109071291\r
2021-08-01,18328.706208760625\r
2021-08-11,30740.052168985323\r
2021-08-14,31219.118248054452\r
2021-08-24,22160.950915652422\r
2021-08-26,24613.254323879228\r
2021-08-29,24613.254323879228\r
2021-08-31,24613.254323879228\r
2021-09-03,24613.254323879228\r
2021-09-05,24613.254323879228\r
2021-09-08,13562.29212368676\r
2021-09-10,13208.376659284864\r
2021-09-23,10718.24792677533\r
2021-09-28,10718.24792677533\r
2021-09-30,12281.23968207672\r
2021-10-03,12281.23968207672\r
2021-10-08,14766.171182641094\r
2021-10-10,12974.314197382786\r
2021-10-15,12974.314197382786\r
2021-10-23,12974.314197382786\r
2021-10-28,12974.314197382786\r
2021-11-04,12395.79721341182\r
2021-11-09,14522.447632510573\r
2021-11-17,14159.614946236246\r
2021-11-19,14766.171182641094\r
2021-11-24,13919.571663183513\r
2021-12-17,14039.408204425774\r
2022-01-11,3191.9588925856406\r
2022-01-13,19802.89133815419\r
2022-01-21,18860.008830415067\r
2022-01-23,23737.149910802815\r
2022-01-31,22729.589757535672\r
2022-03-07,25055.58827096143\r
2022-03-09,25055.58827096143\r
2022-03-12,25055.58827096143\r
2022-03-14,27157.084779610785\r
2022-03-19,27004.95944075921\r
2022-03-22,30580.95817119913\r
2022-03-24,26853.14266502499\r
2022-03-27,25500.75783816048\r
2022-04-01,25500.75783816048\r
2022-04-11,26853.14266502499\r
2022-04-13,26853.14266502499\r
2022-04-16,30105.466287490795\r
2022-04-21,30105.466287490795\r
2022-04-26,30105.466287490795\r
2022-05-01,22444.6205965636\r
2022-05-03,31219.118248054452\r
2022-05-06,28695.20426636855\r
2022-05-08,31539.978115070127\r
2022-05-11,28695.20426636855\r
2022-05-13,28695.20426636855\r
2022-05-16,18726.66999189804\r
2022-05-21,18726.66999189804\r
2022-05-28,26248.97092486414\r
2022-05-31,25799.106035830264\r
2022-06-02,29006.483687404285\r
2022-06-05,29006.483687404285\r
2022-06-07,29006.483687404285\r
2022-06-10,32672.274450607016\r
2022-06-12,30899.44379954104\r
2022-06-15,30422.162236455606\r
2022-06-17,33325.747711420736\r
2022-06-27,30105.466287490795\r
2022-07-02,30105.466287490795\r
2022-07-05,23882.37084987618\r
2022-07-07,24027.91109071291\r
2022-07-10,24027.91109071291\r
2022-07-12,22019.60481866015\r
2022-07-15,22019.60481866015\r
2022-07-17,19396.76745410617\r
2022-07-20,20762.25797883211\r
2022-08-06,4625.6324119066985\r
2022-08-09,5369.427802941206\r
2022-08-11,4625.6324119066985\r
2022-08-24,2201.956155105224\r
2022-08-26,2201.956155105224\r
2022-08-29,2201.956155105224\r
2022-09-03,2201.956155105224\r
2022-09-08,3333.73937622767\r
2022-09-18,3477.7296584355486\r
2022-09-20,2140.751703589182\r
2022-09-30,1960.9081825198753\r
2022-10-08,2780.150912235604\r
2022-10-18,2780.150912235604\r
2022-10-20,2713.52803952266\r
2022-10-23,2713.52803952266\r
2022-11-12,4951.266940663532\r
2022-11-17,4951.266940663532\r
2022-11-19,5454.519993281787\r
2022-11-22,4625.6324119066985\r
2022-11-29,4787.4506909030415\r
2022-12-09,6241.780847530282\r
2023-01-11,13325.973172622504\r
2023-01-13,13325.973172622504\r
2023-01-16,12626.061067573286\r
2023-01-21,18196.738135584434\r
2023-02-10,23592.248816143536\r
2023-02-12,23015.8538420825\r
2023-02-15,21178.40748469129\r
2023-02-20,21178.40748469129\r
2023-02-27,21597.52848739999\r
2023-03-02,23015.8538420825\r
2023-03-04,22586.943028058762\r
2023-04-21,21737.893018082366\r
2023-04-23,21737.893018082366\r
2023-05-01,21737.893018082366\r
2023-05-26,25500.75783816048\r
2023-05-28,28540.019415341187\r
2023-05-31,28385.138414386598\r
2023-06-02,28385.138414386598\r
2023-06-05,28385.138414386598\r
2023-06-07,29006.483687404285\r
2023-06-10,31059.132634633617\r
2023-06-15,31700.851526223538\r
2023-06-22,32023.48321244497\r
2023-06-25,23303.408345957087\r
2023-07-02,18726.66999189804\r
2023-07-05,18726.66999189804\r
2023-07-07,29632.66871287038\r
2023-07-10,22302.623034251283\r
2023-07-15,29632.66871287038\r
2023-07-17,29632.66871287038\r
2023-07-20,20212.0427986694\r
2023-08-09,15630.658678157932\r
2023-08-19,15630.658678157932\r
2023-09-03,13800.106207079632\r
2023-09-05,15381.853617786244\r
2023-09-08,13562.29212368676\r
2023-09-10,13562.29212368676\r
2023-09-13,13562.29212368676\r
2023-09-15,15134.492192384743\r
2023-09-18,11714.235919836457\r
2023-09-30,12626.061067573286\r
2023-10-03,10718.24792677533\r
2023-10-05,10285.915413003335\r
2023-10-08,10718.24792677533\r
`;export{r as default};
