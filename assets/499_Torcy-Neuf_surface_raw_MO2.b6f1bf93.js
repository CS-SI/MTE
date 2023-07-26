const r=`date,value\r
2017-03-14,1308200\r
2017-04-03,1328800\r
2017-04-10,1328800\r
2017-04-23,1286800\r
2017-04-30,1286800\r
2017-06-02,1262500\r
2017-06-09,1262500\r
2017-06-12,1262500\r
2017-07-17,1290200\r
2017-07-19,1290200\r
2017-07-22,1290200\r
2017-08-21,1234000\r
2017-08-23,1234000\r
2017-08-26,1276400\r
2017-09-05,1219200\r
2017-09-20,1037400\r
2017-09-22,1037400\r
2017-09-27,1037400\r
2017-10-05,964000\r
2017-10-07,964000\r
2017-10-10,964000\r
2017-10-12,964000\r
2017-10-15,965600\r
2017-10-17,852700\r
2017-10-20,852700\r
2017-10-22,852700\r
2017-10-25,852700\r
2018-02-27,1270000\r
2018-03-04,1270000\r
2018-04-18,1352000\r
2018-04-20,1352000\r
2018-04-25,1350400\r
2018-05-18,1270300\r
2018-05-20,1270300\r
2018-05-25,1270300\r
2018-06-22,1364100\r
2018-06-24,1364100\r
2018-06-27,1391700\r
2018-06-29,1391700\r
2018-07-02,1371000\r
2018-07-04,1321400\r
2018-07-07,1331900\r
2018-07-09,1320500\r
2018-07-12,1320700\r
2018-07-17,1310200\r
2018-07-19,1291700\r
2018-07-22,1291700\r
2018-07-24,1286600\r
2018-07-27,1286600\r
2018-08-06,1249800\r
2018-08-08,1248800\r
2018-08-11,1248800\r
2018-08-16,1244000\r
2018-08-21,1204700\r
2018-08-23,1204700\r
2018-08-26,1236200\r
2018-08-28,1236200\r
2018-09-02,1184400\r
2018-09-05,1184400\r
2018-09-20,1050500\r
2018-09-22,1050500\r
2018-09-25,1084100\r
2018-09-27,1084100\r
2018-09-30,1027500\r
2018-10-02,1060500\r
2018-10-05,1005500\r
2018-10-10,1034000\r
2018-10-12,988800\r
2018-12-19,1018700\r
2019-02-17,1166400\r
2019-02-19,1166400\r
2019-02-22,1194000\r
2019-02-24,1194000\r
2019-02-27,1176000\r
2019-03-24,1236800\r
2019-03-26,1236800\r
2019-03-29,1241500\r
2019-03-31,1241500\r
2019-04-10,1226400\r
2019-04-13,1232400\r
2019-05-13,1302700\r
2019-05-15,1302700\r
2019-05-23,1310900\r
2019-05-25,1310900\r
2019-05-30,1295500\r
2019-06-02,1298500\r
2019-06-04,1298500\r
2019-06-07,1298500\r
2019-06-12,1251700\r
2019-06-17,1197500\r
2019-06-19,1197500\r
2019-06-24,1197500\r
2019-06-27,1200200\r
2019-06-29,1200200\r
2019-07-02,1177600\r
2019-07-04,1208200\r
2019-07-07,1175200\r
2019-07-09,1175200\r
2019-07-12,1178800\r
2019-07-14,1196400\r
2019-07-17,1162900\r
2019-07-19,1111800\r
2019-07-22,1110700\r
2019-07-24,1086100\r
2019-07-29,1059600\r
2019-08-01,1059600\r
2019-08-21,872800\r
2019-08-23,872800\r
2019-08-26,915600\r
2019-08-28,915600\r
2019-08-31,871000\r
2019-09-02,871000\r
2019-09-05,871000\r
2019-09-07,912100\r
2019-09-10,901600\r
2019-09-12,912600\r
2019-09-15,897500\r
2019-09-17,924800\r
2019-09-20,908800\r
2019-09-22,908800\r
2019-09-30,925900\r
2020-02-07,1249700\r
2020-02-09,1249700\r
2020-02-22,1300400\r
2020-02-24,1292900\r
2020-03-18,1305200\r
2020-03-20,1305200\r
2020-03-23,1305200\r
2020-03-25,1305200\r
2020-03-28,1314800\r
2020-03-30,1314800\r
2020-04-02,1297600\r
2020-04-04,1329900\r
2020-04-07,1329900\r
2020-04-09,1329900\r
2020-04-12,1326200\r
2020-04-14,1343400\r
2020-04-17,1343400\r
2020-04-22,1343600\r
2020-04-24,1343600\r
2020-04-27,1327100\r
2020-05-04,1336700\r
2020-05-07,1336700\r
2020-05-17,1353700\r
2020-05-19,1353700\r
2020-05-27,1365000\r
2020-05-29,1365000\r
2020-06-01,1358900\r
2020-06-03,1406500\r
2020-07-06,1335400\r
2020-07-08,1327600\r
2020-07-11,1334900\r
2020-07-13,1334900\r
2020-07-18,1334900\r
2020-07-21,1305500\r
2020-07-23,1310500\r
2020-07-28,1297700\r
2020-07-31,1299900\r
2020-08-05,1278100\r
2020-08-07,1287600\r
2020-08-10,1229900\r
2020-08-12,1229900\r
2020-08-15,1235100\r
2020-08-17,1217900\r
2020-08-20,1197200\r
2020-08-25,1179600\r
2020-08-27,1173100\r
2020-09-01,1143900\r
2020-09-04,1146200\r
2020-09-09,1027700\r
2020-09-11,1027700\r
2020-09-14,999900\r
2020-09-16,999900\r
2020-09-19,1005300\r
2020-11-23,1129800\r
2020-11-25,1129800\r
2020-11-28,1103100\r
2020-12-10,1089900\r
2020-12-13,1097200\r
2021-02-21,1254500\r
2021-02-23,1254500\r
2021-02-26,1270700\r
2021-02-28,1270700\r
2021-03-08,1361300\r
2021-03-10,1360200\r
2021-03-23,1331400\r
2021-03-25,1331400\r
2021-03-28,1366900\r
2021-03-30,1366900\r
2021-04-02,1327500\r
2021-04-04,1361600\r
2021-04-07,1361600\r
2021-04-09,1267900\r
2021-04-12,1267900\r
2021-04-27,1365800\r
2021-06-01,1322200\r
2021-06-03,1322200\r
2021-06-11,1322200\r
2021-06-16,1309400\r
2021-06-18,1309400\r
2021-06-23,1309400\r
2021-06-26,1318100\r
2021-07-21,1270700\r
2021-07-23,1270700\r
2021-08-10,1295000\r
2021-08-12,1295000\r
2021-08-15,1295000\r
2021-08-20,1295000\r
2021-09-24,1257700\r
2021-10-01,1257700\r
2021-10-14,1243600\r
2021-10-16,1243600\r
2021-10-19,1268900\r
2021-10-24,1248400\r
2021-10-29,1285600\r
2021-11-23,1241100\r
2021-11-30,1241100\r
2021-12-23,1312200\r
2022-01-12,1199900\r
2022-01-14,1199900\r
2022-01-22,1199900\r
2022-02-26,1242900\r
2022-02-28,1242900\r
2022-03-03,1242900\r
2022-03-05,1242900\r
2022-03-08,1310400\r
2022-03-23,1348300\r
2022-03-25,1348300\r
2022-04-17,1285900\r
2022-04-27,1294700\r
2022-06-11,1348200\r
2022-06-13,1348200\r
2022-06-16,1369300\r
2022-06-18,1370700\r
2022-06-21,1350400\r
2022-06-23,1395400\r
2022-07-01,1371300\r
2022-07-06,1351600\r
2022-07-08,1351600\r
2022-07-11,1343000\r
2022-07-18,1340300\r
2022-07-21,1340800\r
2022-08-10,1232800\r
2022-08-12,1232800\r
2022-08-17,1232800\r
2022-09-04,1102400\r
2022-09-11,1058600\r
2022-10-09,916000\r
2022-10-16,916000\r
2022-10-19,925900\r
2023-05-27,1364000\r
2023-05-29,1364000\r
2023-06-01,1381600\r
2023-06-03,1381600\r
2023-06-06,1381600\r
2023-06-08,1327300\r
2023-06-11,1327300\r
`;export{r as default};