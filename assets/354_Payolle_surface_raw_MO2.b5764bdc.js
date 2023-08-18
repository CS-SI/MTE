const r=`date,value\r
2017-01-26,3200\r
2017-01-29,3200\r
2017-02-05,3200\r
2017-02-15,3600\r
2017-02-18,3600\r
2017-02-25,10500\r
2017-02-28,10500\r
2017-03-07,10500\r
2017-03-17,87000\r
2017-03-20,87000\r
2017-04-06,90000\r
2017-04-09,90000\r
2017-04-16,92100\r
2017-04-19,92000\r
2017-05-16,91000\r
2017-05-19,91000\r
2017-05-26,91100\r
2017-05-29,89800\r
2017-06-05,89800\r
2017-07-05,91200\r
2017-07-25,94200\r
2017-07-30,94200\r
2017-08-02,94200\r
2017-08-04,95100\r
2017-08-07,92600\r
2017-08-12,92600\r
2017-08-14,92600\r
2017-08-24,91900\r
2017-09-01,91900\r
2017-09-08,90700\r
2017-09-11,90700\r
2017-09-13,92900\r
2017-09-16,92900\r
2017-09-21,88300\r
2017-09-23,93400\r
2017-09-26,93400\r
2017-09-28,93700\r
2017-10-03,93700\r
2017-10-08,90900\r
2017-10-11,89300\r
2017-10-13,91600\r
2017-10-16,91600\r
2017-10-23,88600\r
2017-11-17,91100\r
2017-11-20,91000\r
2017-11-22,91400\r
2017-11-25,91400\r
2017-11-27,91400\r
2017-11-30,89100\r
2017-12-02,89100\r
2018-01-31,89400\r
2018-02-10,89400\r
2018-02-15,3200\r
2018-02-18,3200\r
2018-02-25,52400\r
2018-03-02,94200\r
2018-03-07,57400\r
2018-03-15,23200\r
2018-03-22,92000\r
2018-03-27,92000\r
2018-03-30,92000\r
2018-04-01,93000\r
2018-04-04,87600\r
2018-04-21,90200\r
2018-04-24,90200\r
2018-04-26,90200\r
2018-05-01,90200\r
2018-05-11,92200\r
2018-05-16,92200\r
2018-05-19,92200\r
2018-05-21,92200\r
2018-06-20,90500\r
2018-06-23,90500\r
2018-06-25,93300\r
2018-07-03,91800\r
2018-07-05,91800\r
2018-07-08,89900\r
2018-07-10,89900\r
2018-07-15,88500\r
2018-07-18,88500\r
2018-07-20,88500\r
2018-07-23,88500\r
2018-07-25,88600\r
2018-07-30,91400\r
2018-08-02,91400\r
2018-08-04,91400\r
2018-09-03,89300\r
2018-09-06,89300\r
2018-09-08,89600\r
2018-09-11,89600\r
2018-09-13,89600\r
2018-09-23,88500\r
2018-09-26,88500\r
2018-09-28,92000\r
2018-10-01,92000\r
2018-10-03,88800\r
2018-10-06,94700\r
2018-10-08,94700\r
2018-10-13,91000\r
2018-10-16,89000\r
2018-10-21,89000\r
2018-10-23,89800\r
2018-10-26,86300\r
2018-10-31,86300\r
2018-11-02,86300\r
2018-11-17,86000\r
2018-11-22,93100\r
2018-11-25,93100\r
2018-11-27,93100\r
2018-11-30,92400\r
2018-12-07,88900\r
2018-12-10,88900\r
2018-12-12,88900\r
2018-12-27,87500\r
2018-12-30,87500\r
2019-01-01,85400\r
2019-01-06,88900\r
2019-01-09,88900\r
2019-01-11,85100\r
2019-01-14,85100\r
2019-01-16,86800\r
2019-01-19,85700\r
2019-01-21,85700\r
2019-01-24,87900\r
2019-01-26,21600\r
2019-01-31,87200\r
2019-02-03,3500\r
2019-02-05,3500\r
2019-02-08,3500\r
2019-02-10,3500\r
2019-02-15,2900\r
2019-02-18,2900\r
2019-02-20,3500\r
2019-02-23,3500\r
2019-02-25,3200\r
2019-02-28,3200\r
2019-03-05,7200\r
2019-03-10,7200\r
2019-03-12,73600\r
2019-05-01,88100\r
2019-05-04,88100\r
2019-05-06,92200\r
2019-05-09,92200\r
2019-05-11,92200\r
2019-05-14,92200\r
2019-05-16,89600\r
2019-05-26,41000\r
2019-05-29,41000\r
2019-05-31,91100\r
2019-06-03,88800\r
2019-06-08,88800\r
2019-06-10,88800\r
2019-06-13,88800\r
2019-06-15,88800\r
2019-06-25,91300\r
2019-06-28,91300\r
2019-06-30,94600\r
2019-07-03,94600\r
2019-07-05,89800\r
2019-07-10,91700\r
2019-07-13,92200\r
2019-07-15,91800\r
2019-07-18,93000\r
2019-07-20,93000\r
2019-07-25,93300\r
2019-07-28,93300\r
2019-08-02,91600\r
2019-08-04,91600\r
2019-08-09,94100\r
2019-08-12,90500\r
2019-08-14,93500\r
2019-08-17,93500\r
2019-08-22,93500\r
2019-08-24,91800\r
2019-08-29,91800\r
2019-09-03,90700\r
2019-09-06,90700\r
2019-09-08,90700\r
2019-09-11,93400\r
2019-09-13,91900\r
2019-09-16,93100\r
2019-09-18,93100\r
2019-09-26,93100\r
2019-09-28,93100\r
2019-10-01,92000\r
2019-10-03,92600\r
2019-10-08,91500\r
2019-10-11,91500\r
2019-10-13,92200\r
2019-12-17,88900\r
2019-12-20,88900\r
2019-12-22,88900\r
2019-12-25,88900\r
2019-12-27,103400\r
2019-12-30,103400\r
2020-01-01,91300\r
2020-01-04,91300\r
2020-01-06,93800\r
2020-01-09,93800\r
2020-01-11,91600\r
2020-01-14,91600\r
2020-01-16,91700\r
2020-01-19,89100\r
2020-01-24,91900\r
2020-01-26,91900\r
2020-01-29,86800\r
2020-01-31,86800\r
2020-02-05,86100\r
2020-02-08,86100\r
2020-02-10,87400\r
2020-02-15,85600\r
2020-02-18,85600\r
2020-02-20,85800\r
2020-02-23,84600\r
2020-02-25,84600\r
2020-03-01,85700\r
2020-03-09,92200\r
2020-03-11,93400\r
2020-03-14,93400\r
2020-03-19,92100\r
2020-03-21,92100\r
2020-03-24,92100\r
2020-03-26,94000\r
2020-03-29,91500\r
2020-04-03,91500\r
2020-04-05,91600\r
2020-04-08,91600\r
2020-04-10,91600\r
2020-04-15,88800\r
2020-05-05,92200\r
2020-05-08,92200\r
2020-05-18,92200\r
2020-05-20,94900\r
2020-05-25,94500\r
2020-05-28,94500\r
2020-05-30,94500\r
2020-06-02,94500\r
2020-06-24,90700\r
2020-06-27,90700\r
2020-07-04,92400\r
2020-07-07,92400\r
2020-07-09,91100\r
2020-07-14,93100\r
2020-07-17,93100\r
2020-07-19,91300\r
2020-07-22,90900\r
2020-07-24,90900\r
2020-07-27,90300\r
2020-07-29,90300\r
2020-08-01,89300\r
2020-08-03,89300\r
2020-08-08,90700\r
2020-08-21,90700\r
2020-08-23,93600\r
2020-08-26,92100\r
2020-08-31,92100\r
2020-09-02,92300\r
2020-09-05,92300\r
2020-09-07,92300\r
2020-09-12,90700\r
2020-09-15,90700\r
2020-09-17,100200\r
2020-09-20,99700\r
2020-09-27,99700\r
2020-09-30,99700\r
2020-10-17,90500\r
2020-10-27,90500\r
2020-10-30,90500\r
2020-11-01,93700\r
2020-11-09,89600\r
2020-11-11,89600\r
2020-11-14,89600\r
2020-11-16,89600\r
2020-11-19,85100\r
2020-11-21,86100\r
2020-11-24,86100\r
2020-11-26,86100\r
2020-11-29,85300\r
2020-12-04,85300\r
2020-12-06,85300\r
2020-12-26,88300\r
2020-12-29,88300\r
2021-02-14,91500\r
2021-02-17,91500\r
2021-02-19,92500\r
2021-02-24,91100\r
2021-02-27,93100\r
2021-03-01,90100\r
2021-03-04,92300\r
2021-03-09,89100\r
2021-03-31,91400\r
2021-04-03,91400\r
2021-04-05,92600\r
2021-04-08,92600\r
2021-04-13,91300\r
2021-04-15,94400\r
2021-04-18,94300\r
2021-04-23,94300\r
2021-06-09,92700\r
2021-06-12,92700\r
2021-06-14,92700\r
2021-06-19,92700\r
2021-07-09,92100\r
2021-07-14,92100\r
2021-07-19,92200\r
2021-07-22,89800\r
2021-07-29,89800\r
2021-08-13,90800\r
2021-08-16,90800\r
2021-08-18,90800\r
2021-08-21,90800\r
2021-08-23,90800\r
2021-09-17,91400\r
2021-09-22,91400\r
2021-09-27,93500\r
2021-09-30,93400\r
2021-10-02,93600\r
2021-10-07,92000\r
2021-10-10,92300\r
2021-10-12,90900\r
2021-10-15,91900\r
2021-10-17,90500\r
2021-10-22,89700\r
2021-10-25,92900\r
2021-10-27,90600\r
2021-11-01,93500\r
2021-11-04,85600\r
2021-12-26,71900\r
2021-12-29,71900\r
2022-01-25,59100\r
2022-01-28,59100\r
2022-01-30,70600\r
2022-02-02,70600\r
2022-02-07,67800\r
2022-02-09,92900\r
2022-02-12,90600\r
2022-02-14,90600\r
2022-02-17,90600\r
2022-04-05,94300\r
2022-04-10,94500\r
2022-04-15,94300\r
2022-04-18,92800\r
2022-05-10,90400\r
2022-05-13,90400\r
2022-05-15,90400\r
2022-05-18,90400\r
2022-06-19,92600\r
2022-06-22,92600\r
2022-06-24,92600\r
2022-06-29,93800\r
2022-07-02,93500\r
2022-07-04,93500\r
2022-07-07,93500\r
2022-07-09,93500\r
2022-07-14,91700\r
2022-07-17,91700\r
2022-07-19,91700\r
2022-07-24,93000\r
2022-07-27,92300\r
2022-08-01,92300\r
2022-08-03,95300\r
2022-08-06,95300\r
2022-08-08,96200\r
2022-08-11,96200\r
2022-08-13,94800\r
2022-08-23,94900\r
2022-08-28,97100\r
2022-09-05,97100\r
2022-09-07,97100\r
2022-09-22,87200\r
2022-09-25,87200\r
2022-09-30,87200\r
2022-10-02,94400\r
2022-10-05,94400\r
2022-10-07,94400\r
2022-10-12,94400\r
2022-10-17,87600\r
2022-10-22,92200\r
2022-10-30,91900\r
2022-11-01,92400\r
2022-11-06,92300\r
2022-11-11,89000\r
2022-11-16,88900\r
2022-11-19,90700\r
2022-11-26,88500\r
2022-12-21,86700\r
2022-12-24,86700\r
2022-12-26,92300\r
2023-01-05,90200\r
2023-01-10,92100\r
2023-01-13,92100\r
2023-01-18,90300\r
2023-01-20,90600\r
2023-01-23,5900\r
2023-01-25,5900\r
2023-01-28,5900\r
2023-01-30,5900\r
2023-02-02,2100\r
2023-02-04,3400\r
2023-02-09,2100\r
2023-02-12,3400\r
2023-02-14,2600\r
2023-02-17,2800\r
2023-02-19,2500\r
2023-02-24,2500\r
2023-02-27,2800\r
2023-03-01,2800\r
2023-03-04,300\r
2023-03-06,1400\r
2023-03-09,1400\r
2023-03-14,1400\r
2023-03-16,91800\r
2023-03-19,91800\r
2023-03-26,91800\r
2023-05-05,92500\r
2023-05-10,93900\r
2023-06-24,94200\r
2023-07-02,93200\r
2023-07-14,90400\r
2023-07-17,90400\r
2023-07-19,90400\r
`;export{r as default};
