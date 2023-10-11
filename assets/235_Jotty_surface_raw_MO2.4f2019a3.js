const r=`date,value\r
2017-02-19,84600\r
2017-02-22,84600\r
2017-02-26,84600\r
2017-04-20,91500\r
2017-04-23,87100\r
2017-04-30,102700\r
2017-05-10,106200\r
2017-05-13,104600\r
2017-05-17,104600\r
2017-05-30,97800\r
2017-06-02,97800\r
2017-06-19,85800\r
2017-06-22,85800\r
2017-06-26,85800\r
2017-07-04,91400\r
2017-07-06,91400\r
2017-07-07,91400\r
2017-07-12,91400\r
2017-07-14,91400\r
2017-08-03,81800\r
2017-08-05,81800\r
2017-08-13,90700\r
2017-08-15,90100\r
2017-08-16,90100\r
2017-08-18,91300\r
2017-08-20,91300\r
2017-08-21,91300\r
2017-08-23,81900\r
2017-08-25,78900\r
2017-08-26,78900\r
2017-09-27,98100\r
2017-09-29,98100\r
2017-10-04,98100\r
2017-10-05,98100\r
2017-10-07,98500\r
2017-10-09,88000\r
2017-10-10,88000\r
2017-10-12,88000\r
2017-10-14,88000\r
2017-10-15,88000\r
2017-10-17,88600\r
2017-10-19,77900\r
2017-10-22,77900\r
2017-10-24,77900\r
2017-10-25,77900\r
2017-11-21,93600\r
2017-11-23,93600\r
2017-11-24,93600\r
2017-11-26,93600\r
2017-11-28,93600\r
2017-12-01,93600\r
2018-02-09,83200\r
2018-02-11,83200\r
2018-02-12,83200\r
2018-02-14,83200\r
2018-02-19,83200\r
2018-04-15,114300\r
2018-04-17,114300\r
2018-04-18,114300\r
2018-04-22,114300\r
2018-04-25,114300\r
2018-05-05,117200\r
2018-05-07,117200\r
2018-05-08,117200\r
2018-05-12,108400\r
2018-05-20,107200\r
2018-05-22,107200\r
2018-05-25,111700\r
2018-05-30,111700\r
2018-06-01,104300\r
2018-06-02,104300\r
2018-06-14,107400\r
2018-06-16,107400\r
2018-06-17,107400\r
2018-06-19,110100\r
2018-06-21,110100\r
2018-06-22,110100\r
2018-06-24,104800\r
2018-06-26,107600\r
2018-06-27,107600\r
2018-06-29,98900\r
2018-07-01,101800\r
2018-07-02,101800\r
2018-07-04,94300\r
2018-07-07,98700\r
2018-07-09,87600\r
2018-07-11,89900\r
2018-07-12,89900\r
2018-07-14,89900\r
2018-07-16,82400\r
2018-07-17,82400\r
2018-07-19,88500\r
2018-07-22,83900\r
2018-07-24,83900\r
2018-07-26,83900\r
2018-07-27,83900\r
2018-07-29,88700\r
2018-07-31,87700\r
2018-08-01,87700\r
2018-08-03,93000\r
2018-08-05,93000\r
2018-08-06,93000\r
2018-08-08,93000\r
2018-08-10,90200\r
2018-08-11,90200\r
2018-08-28,88200\r
2018-08-30,88200\r
2018-09-02,88200\r
2018-09-04,88200\r
2018-09-05,88200\r
2018-09-07,88200\r
2018-09-12,83600\r
2018-09-17,86000\r
2018-09-19,86000\r
2018-09-20,86000\r
2018-09-22,86000\r
2018-09-24,73600\r
2018-09-25,73600\r
2018-09-27,85100\r
2018-09-29,80800\r
2018-09-30,80800\r
2018-10-02,80800\r
2018-10-04,80800\r
2018-10-05,80800\r
2018-10-12,88900\r
2018-10-14,88900\r
2018-10-15,88900\r
2018-10-17,88900\r
2018-10-19,88900\r
2018-10-20,88900\r
2018-10-22,88900\r
2021-02-08,100600\r
2021-02-10,100600\r
2021-02-15,100600\r
2021-02-16,100600\r
2021-02-18,100600\r
2021-02-23,97500\r
2021-02-25,97500\r
2021-02-26,97500\r
2021-02-28,100300\r
2021-03-02,100300\r
2021-03-07,97100\r
2021-03-10,97200\r
2021-03-12,81100\r
2021-03-18,81100\r
2021-03-20,81100\r
2021-03-30,88900\r
2021-04-01,88900\r
2021-04-02,88900\r
2021-04-04,99800\r
2021-04-06,100400\r
2021-04-07,100400\r
2021-04-09,92200\r
2021-04-11,101600\r
2021-04-14,96200\r
2021-04-16,96900\r
2021-04-17,96900\r
2021-04-19,96900\r
2021-04-24,101400\r
2021-04-27,98500\r
2021-05-29,108100\r
2021-05-31,108100\r
2021-06-01,108100\r
2021-06-03,108100\r
2021-06-13,100000\r
2021-06-15,100000\r
2021-06-16,100000\r
2021-06-18,101400\r
2021-06-21,101400\r
2021-06-23,101400\r
2021-06-25,98100\r
2021-07-18,103500\r
2021-07-20,103500\r
2021-07-21,103500\r
2021-07-23,103500\r
2021-08-12,89400\r
2021-08-14,89400\r
2021-08-15,89400\r
2021-08-17,89400\r
2021-08-19,89400\r
2021-08-20,89400\r
2021-09-01,86600\r
2021-09-03,86600\r
2021-09-04,86600\r
2021-09-06,87100\r
2021-09-08,89000\r
2021-09-11,89000\r
2021-09-13,86900\r
2021-10-01,82500\r
2021-10-08,82500\r
2021-10-11,82500\r
2021-10-16,81900\r
2021-10-18,81900\r
2021-10-19,81900\r
2021-10-21,81900\r
2021-10-23,81900\r
2021-10-24,81900\r
2021-10-26,81900\r
2021-11-20,63800\r
2021-11-27,63800\r
2022-01-24,91200\r
2022-01-26,91200\r
2022-01-27,91200\r
2022-01-29,83400\r
2022-01-31,93500\r
2022-02-05,79900\r
2022-02-08,87100\r
2022-02-10,77400\r
2022-02-11,77400\r
2022-02-13,97600\r
2022-02-15,97600\r
2022-02-20,93900\r
2022-02-23,93900\r
2022-02-28,89600\r
2022-03-02,89600\r
2022-03-03,89600\r
2022-03-05,97100\r
2022-03-07,97100\r
2022-03-08,97100\r
2022-03-10,93000\r
2022-03-12,96900\r
2022-03-17,93700\r
2022-03-20,99100\r
2022-03-25,98300\r
2022-03-27,98300\r
2022-03-28,98300\r
2022-04-04,92500\r
2022-04-14,103900\r
2022-04-16,103900\r
2022-04-17,103900\r
2022-04-19,103900\r
2022-04-21,103900\r
2022-04-22,103900\r
2022-05-14,85900\r
2022-05-19,85900\r
2022-05-21,85900\r
2022-06-18,95000\r
2022-06-20,95000\r
2022-06-21,95000\r
2022-06-23,95900\r
2022-06-25,95900\r
2022-06-26,95900\r
2022-07-03,93200\r
2022-07-05,89200\r
2022-07-06,89200\r
2022-07-08,89300\r
2022-07-10,89300\r
2022-07-11,89300\r
2022-07-13,84400\r
2022-07-15,84500\r
2022-07-16,84500\r
2022-07-18,83900\r
2022-07-21,89900\r
2022-07-25,89000\r
2022-07-26,89000\r
2022-07-28,89000\r
2022-08-02,77600\r
2022-08-04,77600\r
2022-08-05,77600\r
2022-08-07,77600\r
2022-08-09,77300\r
2022-08-10,77300\r
2022-08-12,81900\r
2022-08-22,85300\r
2022-08-24,83300\r
2022-08-25,83300\r
2022-08-27,83300\r
2022-08-29,83300\r
2022-09-01,83300\r
2022-09-11,84100\r
2022-09-18,84100\r
2022-09-19,84100\r
2022-09-21,84200\r
2022-09-23,74500\r
2022-10-06,85000\r
2022-10-09,85000\r
2022-10-11,87400\r
2022-10-16,80900\r
2022-10-18,82800\r
2022-10-19,82800\r
2022-10-26,95800\r
2022-10-31,95600\r
2022-11-02,95600\r
2022-11-05,95600\r
2023-02-03,81800\r
2023-02-05,81800\r
2023-02-08,82700\r
2023-02-10,82700\r
2023-02-11,82700\r
2023-02-13,83600\r
2023-02-15,87100\r
2023-02-16,87100\r
2023-02-18,87100\r
2023-02-20,85300\r
2023-02-21,85300\r
2023-02-23,85300\r
2023-03-05,86800\r
2023-03-07,86800\r
2023-03-12,86800\r
2023-03-15,86800\r
2023-04-04,106200\r
2023-04-06,106200\r
2023-04-09,107900\r
2023-04-14,107000\r
2023-04-19,106000\r
2023-04-24,106400\r
2023-04-26,104600\r
2023-04-27,104600\r
2023-05-04,101700\r
2023-05-06,101700\r
2023-05-29,91600\r
2023-05-31,94500\r
2023-06-01,94500\r
2023-06-03,101200\r
2023-06-05,101200\r
2023-06-06,101200\r
2023-06-08,101200\r
2023-06-11,101100\r
2023-06-13,101100\r
2023-06-18,90700\r
2023-06-21,90700\r
2023-06-23,92900\r
2023-06-25,92900\r
2023-06-26,92900\r
2023-06-28,90500\r
2023-08-22,77600\r
2023-08-24,77600\r
2023-09-01,84000\r
2023-09-03,70500\r
2023-09-04,70500\r
2023-09-06,79400\r
2023-09-08,79400\r
2023-09-09,79400\r
2023-09-11,79300\r
2023-09-16,78700\r
2023-09-26,85800\r
2023-09-28,85800\r
2023-09-29,85800\r
2023-10-01,85900\r
2023-10-03,85900\r
`;export{r as default};
