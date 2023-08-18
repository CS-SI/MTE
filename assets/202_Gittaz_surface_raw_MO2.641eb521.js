const r=`date,value\r
2017-04-30,88300\r
2017-05-07,200\r
2017-05-10,208800\r
2017-05-17,208800\r
2017-05-30,135900\r
2017-06-06,135900\r
2017-06-09,135900\r
2017-06-19,204400\r
2017-06-26,204400\r
2017-07-04,229800\r
2017-07-06,229800\r
2017-07-14,229800\r
2017-08-13,288100\r
2017-08-15,288100\r
2017-08-18,289800\r
2017-08-20,289800\r
2017-08-23,284800\r
2017-08-25,287900\r
2017-08-30,285800\r
2018-04-15,8400\r
2018-04-17,8400\r
2018-04-22,8400\r
2018-04-25,57700\r
2018-04-27,52400\r
2018-04-30,52400\r
2018-05-05,163000\r
2018-06-19,320500\r
2018-06-21,320500\r
2018-06-24,320500\r
2018-06-26,320500\r
2018-06-29,320500\r
2018-07-04,313700\r
2018-07-06,313700\r
2018-07-09,314000\r
2018-07-11,314000\r
2018-07-14,314000\r
2018-07-24,325400\r
2018-07-26,325400\r
2018-07-29,325900\r
2018-07-31,325900\r
2018-08-03,316600\r
2018-08-05,316100\r
2018-08-08,315400\r
2018-08-28,331300\r
2018-08-30,331300\r
2018-09-02,321800\r
2018-09-04,323200\r
2018-09-07,323200\r
2018-09-09,320900\r
2018-09-12,320900\r
2018-09-14,300700\r
2018-09-17,305000\r
2018-09-19,305000\r
2018-09-22,305000\r
2019-03-31,4400\r
2019-04-05,4300\r
2019-04-10,4300\r
2019-04-15,3300\r
2019-04-17,7400\r
2019-04-20,4000\r
2019-04-27,21500\r
2019-04-30,21400\r
2019-05-02,89000\r
2019-05-05,89000\r
2019-05-07,89000\r
2019-05-10,91300\r
2019-05-12,91300\r
2019-05-15,143500\r
2019-05-30,139500\r
2019-06-04,194800\r
2019-06-14,194800\r
2019-06-19,261300\r
2019-06-24,261300\r
2019-06-26,261300\r
2019-06-29,279000\r
2019-07-01,279000\r
2019-07-04,278700\r
2019-07-06,292000\r
2019-07-09,290700\r
2019-07-14,292700\r
2019-07-16,292700\r
2019-07-19,294600\r
2019-07-21,292100\r
2019-07-24,292500\r
2019-07-26,289600\r
2019-07-29,291500\r
2019-07-31,292100\r
2019-08-03,292100\r
2019-08-05,293200\r
2019-08-08,293800\r
2019-09-12,294400\r
2019-09-14,294400\r
2019-09-17,294400\r
2019-09-19,294400\r
2019-09-22,301000\r
2019-09-27,297700\r
2020-04-04,2100\r
2020-04-06,6000\r
2020-04-09,8200\r
2020-04-11,12200\r
2020-04-14,10600\r
2020-04-16,10600\r
2020-04-24,23600\r
2020-04-29,21400\r
2020-05-04,252500\r
2020-05-06,252500\r
2020-05-09,253800\r
2020-05-14,253800\r
2020-05-19,261400\r
2020-05-21,292500\r
2020-05-24,289900\r
2020-05-26,302400\r
2020-05-29,301300\r
2020-05-31,301300\r
2020-06-03,301300\r
2020-06-05,301000\r
2020-07-08,318800\r
2020-07-10,318400\r
2020-07-13,321800\r
2020-07-18,319000\r
2020-07-20,319000\r
2020-07-23,319000\r
2020-07-25,317700\r
2020-07-28,318400\r
2020-07-30,317600\r
2020-08-02,317600\r
2020-08-04,306000\r
2020-08-07,316100\r
2020-08-09,302300\r
2020-08-12,318900\r
2020-08-14,320300\r
2020-08-19,320300\r
2020-08-22,320000\r
2020-08-24,320200\r
2020-08-27,319900\r
2020-09-01,304300\r
2020-09-03,304300\r
2020-09-06,304300\r
2020-09-08,301200\r
2020-09-11,301200\r
2021-03-30,8300\r
2021-04-01,8300\r
2021-04-04,9500\r
2021-04-06,9500\r
2021-04-09,9500\r
2021-04-14,22600\r
2021-04-16,21800\r
2021-04-19,21800\r
2021-04-24,32800\r
2021-05-09,124900\r
2021-05-14,124900\r
2021-05-19,124900\r
2021-06-13,215200\r
2021-06-15,215200\r
2021-06-18,218300\r
2021-07-18,257700\r
2021-07-20,257700\r
2021-07-23,258100\r
2021-08-12,256100\r
2021-08-14,253600\r
2021-08-17,257200\r
2021-08-19,257200\r
2022-04-04,800\r
2022-04-14,1000\r
2022-04-16,1000\r
2022-04-19,28300\r
2022-04-29,27400\r
2022-05-14,226900\r
2022-05-19,226900\r
2022-05-21,226900\r
2022-06-18,305900\r
2022-06-20,305900\r
2022-06-23,305900\r
2022-06-25,305900\r
2022-07-03,302600\r
2022-07-05,302600\r
2022-07-08,302600\r
2022-07-10,302600\r
2022-07-13,289000\r
2022-07-15,289200\r
2022-07-18,280400\r
2022-07-20,284200\r
2022-07-25,275300\r
2022-07-28,284300\r
2022-07-30,245000\r
2022-08-02,271800\r
2022-08-04,271800\r
2022-08-07,258100\r
2022-08-09,259000\r
2022-08-12,254900\r
2022-08-22,253100\r
2022-09-01,250800\r
2022-09-06,248500\r
2022-09-08,248500\r
2022-09-11,245000\r
2022-09-13,248900\r
2022-09-16,248900\r
2022-09-18,244300\r
2022-09-21,248800\r
2023-04-09,5300\r
2023-04-14,7100\r
2023-04-16,7100\r
2023-04-19,7100\r
2023-04-24,5000\r
2023-06-28,340000\r
2023-07-03,342000\r
2023-07-08,338400\r
2023-07-10,340300\r
2023-07-13,342800\r
2023-07-15,338800\r
2023-07-18,338800\r
`;export{r as default};
