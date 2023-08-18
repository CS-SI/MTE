const n=`date,value\r
2017-05-16,8.747198725458126\r
2017-05-26,20.87682191165744\r
2017-05-29,20.763219677376448\r
2017-06-05,35.35593916144858\r
2017-06-15,50.2094721913125\r
2017-06-18,49.5575758948222\r
2017-06-25,49.5575758948222\r
2017-07-05,75.9841035308434\r
2017-07-25,72.90395795956022\r
2017-07-30,75.85503241635989\r
2017-08-02,75.85503241635989\r
2017-08-04,72.65342462843186\r
2017-08-07,71.95517507917309\r
2017-08-12,68.43903080674575\r
2017-08-14,69.23381757975491\r
2017-09-08,61.24072447311938\r
2017-09-11,61.24072447311938\r
2017-09-13,62.58124038534406\r
2017-09-16,62.58124038534406\r
2018-06-25,95.91275421190565\r
2018-07-03,98.83761488178308\r
2018-07-05,98.83761488178308\r
2018-07-08,61.48494852631888\r
2018-07-10,61.48494852631888\r
2018-07-15,95.18365505369333\r
2018-07-18,95.18365505369333\r
2018-07-20,95.30489809496633\r
2018-07-23,95.30489809496633\r
2018-07-25,95.30489809496633\r
2019-05-26,3.8225385107732803\r
2019-05-29,3.8225385107732803\r
2019-05-31,32.32713848621064\r
2019-06-03,32.31303791790657\r
2019-06-08,32.31303791790657\r
2019-06-10,32.31303791790657\r
2019-06-13,32.31303791790657\r
2019-06-15,32.31303791790657\r
2019-07-05,48.930606675559766\r
2019-07-10,49.748684115827466\r
2019-07-13,50.11322650696144\r
2019-07-15,49.7104207972412\r
2019-07-18,49.8444336480287\r
2019-07-20,49.882769972731225\r
2019-07-23,50.05554184503186\r
2019-07-25,50.05554184503186\r
2019-07-28,50.05554184503186\r
2019-08-09,49.13896854545604\r
2019-08-12,49.13896854545604\r
2019-08-14,49.5575758948222\r
2019-08-17,49.5575758948222\r
2019-08-22,49.5575758948222\r
2019-08-24,49.063128047780516\r
2019-08-29,49.67217832252274\r
2019-09-03,49.69129695481573\r
2019-09-06,49.69129695481573\r
2019-09-08,49.27188910756915\r
2019-09-11,48.81721883346128\r
2019-09-13,48.81721883346128\r
2019-09-16,48.81721883346128\r
2019-09-18,48.81721883346128\r
2020-04-05,20.090778397228593\r
2020-04-08,17.784430525753567\r
2020-04-10,18.10981185568686\r
2020-04-15,19.492983755534514\r
2020-05-05,41.73670100373738\r
2020-05-08,41.73670100373738\r
2020-05-18,41.73670100373738\r
2020-05-20,46.69802014320789\r
2020-05-25,46.314874713468264\r
2020-05-28,46.314874713468264\r
2020-05-30,46.460571353995626\r
2020-06-02,46.460571353995626\r
2020-06-24,48.2717990420165\r
2020-06-27,48.2717990420165\r
2020-07-04,49.29089851976952\r
2020-07-07,49.29089851976952\r
2020-07-09,49.063128047780516\r
2020-07-14,49.67217832252274\r
2020-07-17,49.67217832252274\r
2020-07-19,49.67217832252274\r
2020-07-22,49.97870212247867\r
2020-07-24,50.32513970006551\r
2020-07-27,50.19021259243036\r
2020-07-29,50.19021259243036\r
2020-08-01,50.05554184503186\r
2020-08-03,50.05554184503186\r
2020-08-23,50.2094721913125\r
2020-08-26,50.2094721913125\r
2020-08-31,50.2094721913125\r
2020-09-02,50.248007087943044\r
2020-09-05,50.248007087943044\r
2020-09-07,50.248007087943044\r
2020-09-12,50.03632407749039\r
2020-09-15,50.03632407749039\r
2020-09-17,50.03632407749039\r
2021-06-29,93.97722433157126\r
2021-07-02,89.17278644317912\r
2021-07-04,89.17278644317912\r
2021-07-09,93.94720305106658\r
2021-07-14,93.64736363615242\r
2021-07-19,96.6457992038215\r
2021-07-22,96.12615084529067\r
2021-07-29,96.12615084529067\r
2021-08-13,87.10703480217022\r
2021-08-16,87.10703480217022\r
2021-08-18,88.22172724491402\r
2021-08-21,88.22172724491402\r
2021-08-23,87.53457513770687\r
2021-08-26,86.70933321214017\r
2021-08-28,86.70933321214017\r
2022-05-30,61.10780128981168\r
2022-06-02,61.10780128981168\r
2022-06-04,61.10780128981168\r
2022-06-07,61.063538998906864\r
2022-06-09,85.80513164972835\r
2022-06-17,85.46778423329752\r
2022-06-19,100.0\r
2022-06-22,100.0\r
2022-06-24,100.0\r
2022-06-29,100.0\r
2022-07-09,100.0\r
2022-07-12,100.0\r
2022-07-14,100.0\r
2022-07-17,100.0\r
2022-07-19,100.0\r
2022-07-24,99.9622975122605\r
2022-07-27,100.0\r
2022-08-01,98.2166784045323\r
2022-08-03,98.2166784045323\r
2023-04-10,30.43560739157458\r
2023-04-15,30.43560739157458\r
2023-04-18,30.40858926477375\r
2023-04-20,30.40858926477375\r
2023-06-24,96.58456110670717\r
2023-07-02,96.52335049092933\r
2023-07-09,94.06732893184245\r
2023-07-14,94.06732893184245\r
2023-07-17,94.06732893184245\r
2023-07-19,84.43354188387644\r
`;export{n as default};
