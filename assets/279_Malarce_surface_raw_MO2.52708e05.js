const r=`date,value\r
2017-04-23,86400\r
2017-05-03,86400\r
2017-06-12,148900\r
2017-06-15,143500\r
2017-06-22,148900\r
2017-07-07,145900\r
2017-07-10,145900\r
2017-07-12,172400\r
2017-07-17,158600\r
2017-07-22,176100\r
2017-07-27,161600\r
2017-08-06,143000\r
2017-08-14,143000\r
2017-08-21,134600\r
2017-08-24,134600\r
2017-08-26,144600\r
2017-08-29,144600\r
2017-09-03,124200\r
2017-09-20,163900\r
2017-09-23,160800\r
2017-09-28,160800\r
2017-10-05,144600\r
2017-10-08,144600\r
2017-10-10,154600\r
2017-10-13,154600\r
2017-10-15,154600\r
2018-02-27,135500\r
2018-03-14,151500\r
2018-03-17,151500\r
2018-03-19,151500\r
2018-03-22,151500\r
2018-04-18,162000\r
2018-04-21,162000\r
2018-04-23,162000\r
2018-04-26,162000\r
2018-06-22,153800\r
2018-06-25,153800\r
2018-06-27,156900\r
2018-07-02,148800\r
2018-07-07,153600\r
2018-07-12,152800\r
2018-07-27,147300\r
2018-07-30,147300\r
2018-08-01,147300\r
2018-08-04,147300\r
2018-08-06,149500\r
2018-08-16,154500\r
2018-08-19,153400\r
2018-08-21,157300\r
2018-08-26,148800\r
2018-08-31,152500\r
2018-09-03,138100\r
2018-09-05,138100\r
2018-09-10,121000\r
2018-09-13,120500\r
2018-09-18,120500\r
2018-09-20,150900\r
2018-09-23,149400\r
2018-09-25,149400\r
2018-09-28,149400\r
2018-10-05,156000\r
2018-10-13,156000\r
2018-10-20,138500\r
2018-10-23,138500\r
2018-10-25,147200\r
2018-10-30,147200\r
2019-02-27,118900\r
2019-03-24,131000\r
2019-03-27,131000\r
2019-03-29,143800\r
2019-04-01,143800\r
2019-04-08,145200\r
2019-04-13,155600\r
2019-04-18,139300\r
2019-04-28,139300\r
2019-05-13,157000\r
2019-05-16,157000\r
2019-05-23,171800\r
2019-05-26,171800\r
2019-05-31,166500\r
2019-06-02,174700\r
2019-06-12,171900\r
2019-06-17,139300\r
2019-06-22,139300\r
2019-06-27,148400\r
2019-06-30,148400\r
2019-07-02,146200\r
2019-07-05,168000\r
2019-07-07,168000\r
2019-07-10,168000\r
2019-07-12,168000\r
2019-07-15,164700\r
2019-07-17,167900\r
2019-07-20,143900\r
2019-07-22,144500\r
2019-07-25,144500\r
2019-08-01,144500\r
2019-08-06,150400\r
2019-08-09,149300\r
2019-08-11,149300\r
2019-08-14,149300\r
2019-08-16,152800\r
2019-08-21,155400\r
2019-08-26,148900\r
2019-08-29,148900\r
2019-08-31,158800\r
2019-09-03,160100\r
2019-09-05,159800\r
2019-09-13,153300\r
2019-09-15,163400\r
2019-09-18,148900\r
2019-09-20,148900\r
2019-09-30,154800\r
2019-10-03,144600\r
2019-10-08,144600\r
2019-10-10,144600\r
2019-10-13,144600\r
2020-03-08,124600\r
2020-03-13,136600\r
2020-03-18,131900\r
2020-03-21,131900\r
2020-03-28,136600\r
2020-03-31,128400\r
2020-04-02,140000\r
2020-04-05,140700\r
2020-04-07,148500\r
2020-04-10,148500\r
2020-04-12,148500\r
2020-04-15,150000\r
2020-05-17,160600\r
2020-05-20,160600\r
2020-05-22,160600\r
2020-05-25,160600\r
2020-05-27,162800\r
2020-05-30,162800\r
2020-06-01,162800\r
2020-06-21,139400\r
2020-06-24,139400\r
2020-06-26,181100\r
2020-06-29,181100\r
2020-07-01,181100\r
2020-07-04,181100\r
2020-07-06,160000\r
2020-07-09,180200\r
2020-07-11,160900\r
2020-07-14,161500\r
2020-07-16,158600\r
2020-07-19,158600\r
2020-07-21,159600\r
2020-07-24,158600\r
2020-07-26,158600\r
2020-07-29,172800\r
2020-07-31,159400\r
2020-08-05,156200\r
2020-08-08,162700\r
2020-08-10,162700\r
2020-08-15,133900\r
2020-08-20,145700\r
2020-08-23,112700\r
2020-08-25,138700\r
2020-09-02,138400\r
2020-09-04,141300\r
2020-09-12,124600\r
2020-09-14,147600\r
2020-09-17,147600\r
2020-09-29,164200\r
2020-10-07,146100\r
2021-03-23,133800\r
2021-03-26,133800\r
2021-03-28,136700\r
2021-03-31,136700\r
2021-04-05,124800\r
2021-04-07,155600\r
2021-04-12,156600\r
2021-04-15,156600\r
2021-04-17,156600\r
2021-04-22,151700\r
2021-05-27,156700\r
2021-05-30,156700\r
2021-06-01,156700\r
2021-06-16,150200\r
2021-06-26,150200\r
2021-07-11,158400\r
2021-07-19,157100\r
2021-07-21,165000\r
2021-07-26,150500\r
2021-07-29,150500\r
2021-08-10,161100\r
2021-08-13,161100\r
2021-08-15,164800\r
2021-08-18,164800\r
2021-08-20,161300\r
2021-08-23,167100\r
2021-08-25,158600\r
2021-08-28,165100\r
2021-08-30,156800\r
2021-09-04,158200\r
2021-09-07,153600\r
2021-09-24,142400\r
2021-09-29,144300\r
2021-10-14,137800\r
2021-10-17,137800\r
2021-10-19,137800\r
2021-10-24,137800\r
2022-02-26,135800\r
2022-03-01,135800\r
2022-03-06,135800\r
2022-03-08,135800\r
2022-03-23,144200\r
2022-03-26,144200\r
2022-03-28,144200\r
2022-04-17,148100\r
2022-04-22,158400\r
2022-04-27,158400\r
2022-04-30,142200\r
2022-05-02,152000\r
2022-05-07,164300\r
2022-05-12,161900\r
2022-05-15,167700\r
2022-05-17,158000\r
2022-05-20,171300\r
2022-05-22,165700\r
2022-05-27,160500\r
2022-06-01,170800\r
2022-06-04,171200\r
2022-06-06,171700\r
2022-06-11,179200\r
2022-06-14,175600\r
2022-06-16,171700\r
2022-06-19,178600\r
2022-06-21,178600\r
2022-07-01,153600\r
2022-07-06,164600\r
2022-07-11,158300\r
2022-07-14,169500\r
2022-07-16,160300\r
2022-07-19,179300\r
2022-07-21,165600\r
2022-07-24,180000\r
2022-07-26,164100\r
2022-07-31,160100\r
2022-08-03,165100\r
2022-08-05,161200\r
2022-08-08,165100\r
2022-08-10,160200\r
2022-08-13,168200\r
2022-08-15,163700\r
2022-08-20,169700\r
2022-08-25,168700\r
2022-08-28,163800\r
2022-09-04,163800\r
2022-09-19,151000\r
2022-09-22,151000\r
2022-10-04,150100\r
2022-10-07,150100\r
2022-10-09,150100\r
2022-10-12,150100\r
2023-02-26,146100\r
2023-03-03,155400\r
2023-03-06,155400\r
2023-03-13,149300\r
2023-03-28,149300\r
2023-04-05,149300\r
2023-04-07,149300\r
2023-04-17,142200\r
2023-05-02,121200\r
2023-05-27,144900\r
2023-05-30,144800\r
2023-06-04,150600\r
2023-06-06,178100\r
2023-06-14,175800\r
2023-06-16,178300\r
2023-06-19,151100\r
2023-06-21,151100\r
2023-06-24,151100\r
2023-06-26,168500\r
2023-07-06,158400\r
2023-07-09,158400\r
2023-07-11,182800\r
2023-07-14,182800\r
2023-07-16,165900\r
2023-07-19,181700\r
2023-07-21,171600\r
2023-07-26,171200\r
2023-07-31,171800\r
2023-08-05,171800\r
2023-08-08,172400\r
2023-08-10,171300\r
2023-08-13,178300\r
2023-08-15,169000\r
2023-08-23,156000\r
2023-08-25,156000\r
2023-08-30,173000\r
2023-09-04,168600\r
2023-09-07,168600\r
2023-09-12,167800\r
2023-09-14,167800\r
2023-09-24,141700\r
2023-09-27,141700\r
2023-09-29,150900\r
2023-10-02,150900\r
2023-10-04,150900\r
2023-10-07,149200\r
`;export{r as default};
