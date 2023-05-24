const r=`date,value\r
2017-02-19,904900\r
2017-03-11,890700\r
2017-04-10,834900\r
2017-04-20,811900\r
2017-04-30,787700\r
2017-05-10,752800\r
2017-06-02,670900\r
2017-06-19,609300\r
2017-07-07,563400\r
2017-07-17,522200\r
2017-07-29,450300\r
2017-08-23,276200\r
2017-08-26,243100\r
2017-09-20,62200\r
2017-09-22,59500\r
2017-09-25,58100\r
2017-10-05,97600\r
2017-10-15,5000\r
2017-10-17,2900\r
2018-01-13,32500\r
2018-02-24,14000\r
2018-02-27,9800\r
2018-03-21,4400\r
2018-03-24,13900\r
2018-04-20,49100\r
2018-05-05,50800\r
2018-05-08,33900\r
2018-05-25,127400\r
2018-06-27,328100\r
2018-07-02,309100\r
2018-07-09,298500\r
2018-07-17,302100\r
2018-07-19,286300\r
2018-07-24,299400\r
2018-07-27,303900\r
2018-07-29,289200\r
2018-08-01,330900\r
2018-08-03,308000\r
2018-08-06,322400\r
2018-08-16,293900\r
2018-08-21,277600\r
2018-08-28,274900\r
2018-09-05,273900\r
2018-09-12,265300\r
2018-09-17,236900\r
2018-09-20,241200\r
2018-09-25,248400\r
2018-09-27,227600\r
2018-09-30,240300\r
2018-10-05,231100\r
2018-10-10,217600\r
2018-10-12,218400\r
2018-10-15,210600\r
2018-10-20,225800\r
2018-10-22,191200\r
2019-01-03,344400\r
2019-01-18,443800\r
2019-02-14,519600\r
2019-02-17,592300\r
2019-02-24,545000\r
2019-02-27,655600\r
2019-03-21,709500\r
2019-03-24,794500\r
2019-03-29,799200\r
2019-03-31,787600\r
2019-04-15,802500\r
2019-04-18,879600\r
2019-04-20,829600\r
2019-05-23,933700\r
2019-06-04,888600\r
2019-06-07,908500\r
2019-06-17,924800\r
2019-06-27,907100\r
2019-06-29,879100\r
2019-07-04,916000\r
2019-07-09,852900\r
2019-07-17,856700\r
2019-07-24,802200\r
2019-08-01,779900\r
2019-08-03,771400\r
2019-08-08,729300\r
2019-08-21,729400\r
2019-08-23,744900\r
2019-08-26,744900\r
2019-08-28,660800\r
2019-08-31,703900\r
2019-09-07,651100\r
2019-09-12,598800\r
2019-09-15,633400\r
2019-09-17,602200\r
2019-09-20,606800\r
2019-12-04,520800\r
2019-12-29,618200\r
2020-01-05,643200\r
2020-01-15,680000\r
2020-01-20,679600\r
2020-02-07,777100\r
2020-02-09,753200\r
2020-03-13,699100\r
2020-03-15,895900\r
2020-03-18,921800\r
2020-03-25,919000\r
2020-03-28,922600\r
2020-04-02,891400\r
2020-04-04,854800\r
2020-04-07,919300\r
2020-04-12,902500\r
2020-04-14,869200\r
2020-04-17,908800\r
2020-04-22,897100\r
2020-04-27,888000\r
2020-05-07,916500\r
2020-05-17,916300\r
2020-05-19,887200\r
2020-05-27,914600\r
2020-05-29,869500\r
2020-06-01,910900\r
2020-06-23,886600\r
2020-07-01,917700\r
2020-07-13,856700\r
2020-07-23,816000\r
2020-07-31,861100\r
2020-08-05,833500\r
2020-08-07,782800\r
2020-08-20,767300\r
2020-09-04,711000\r
2020-09-09,705500\r
2020-09-11,665300\r
2020-09-14,681300\r
2020-10-14,583100\r
2020-10-19,585800\r
2020-10-31,604700\r
2020-11-18,627100\r
2020-11-25,611000\r
2021-02-11,808600\r
2021-02-21,865100\r
2021-02-23,868000\r
2021-02-28,874400\r
2021-03-08,858200\r
2021-03-23,877100\r
2021-03-30,895900\r
2021-04-02,911700\r
2021-04-04,898000\r
2021-04-24,889200\r
2021-04-27,907700\r
2021-05-29,910100\r
2021-06-01,907300\r
2021-06-13,890300\r
2021-06-16,886200\r
2021-07-18,798800\r
2021-07-21,816200\r
2021-07-23,798700\r
2021-08-12,717500\r
2021-09-01,623100\r
2021-09-04,634800\r
2021-09-06,620600\r
2021-09-24,583400\r
2021-10-01,552200\r
2021-10-09,549700\r
2021-10-14,538000\r
2021-10-24,521000\r
2021-10-29,510600\r
2021-11-23,505900\r
2022-01-12,646000\r
2022-01-14,652500\r
2022-01-24,638400\r
2022-02-08,643500\r
2022-02-13,606900\r
2022-02-26,603500\r
2022-02-28,605600\r
2022-03-03,597700\r
2022-03-05,601800\r
2022-03-08,601600\r
2022-03-10,594700\r
2022-03-20,621200\r
2022-03-23,591500\r
2022-03-25,597200\r
2022-03-28,598700\r
2022-04-17,610900\r
2022-04-27,613900\r
2022-05-04,622200\r
2022-05-07,620200\r
2022-05-09,615100\r
2022-06-11,585800\r
2022-06-13,576000\r
2022-06-16,562600\r
2022-06-18,567800\r
2022-07-03,532400\r
2022-07-06,536700\r
2022-07-11,520300\r
2022-07-13,476900\r
2022-07-16,501300\r
2022-07-18,461000\r
2022-08-07,382500\r
2022-08-10,377000\r
2022-08-12,343800\r
2022-08-25,302300\r
2022-10-09,149600\r
2022-11-23,456800\r
2023-01-07,666300\r
2023-02-08,745900\r
2023-02-11,745300\r
2023-02-13,742700\r
2023-02-16,721800\r
2023-02-21,743100\r
2023-04-04,904400\r
2023-04-09,925700\r
`;export{r as default};