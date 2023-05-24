const n=`date,value\r
2017-01-19,180500\r
2017-01-26,181900\r
2017-01-29,193500\r
2017-02-15,209900\r
2017-02-18,209600\r
2017-02-25,209300\r
2017-03-10,216900\r
2017-03-30,219700\r
2017-04-06,217600\r
2017-04-09,223200\r
2017-04-19,212500\r
2017-05-09,230900\r
2017-05-16,205600\r
2017-05-26,224600\r
2017-06-05,204300\r
2017-06-18,229000\r
2017-07-05,229200\r
2017-07-18,226500\r
2017-08-02,212100\r
2017-08-04,224000\r
2017-08-14,216900\r
2017-08-22,196900\r
2017-09-01,194300\r
2017-09-21,194600\r
2017-10-08,188900\r
2017-10-11,184800\r
2017-10-13,186300\r
2017-10-16,181000\r
2017-10-26,181200\r
2017-10-28,186000\r
2017-10-31,186000\r
2017-11-17,184900\r
2017-11-22,181300\r
2017-11-27,176800\r
2017-11-30,182800\r
2017-12-05,178400\r
2017-12-12,187900\r
2017-12-20,195500\r
2017-12-25,186000\r
2018-03-02,224200\r
2018-03-15,232600\r
2018-03-22,235100\r
2018-04-06,218900\r
2018-04-19,223500\r
2018-04-21,234200\r
2018-04-24,217400\r
2018-05-06,220000\r
2018-05-11,238000\r
2018-05-21,232600\r
2018-05-24,224000\r
2018-06-20,230200\r
2018-06-23,222200\r
2018-06-25,221000\r
2018-07-08,219400\r
2018-07-13,227200\r
2018-07-23,224100\r
2018-07-25,226600\r
2018-07-30,227400\r
2018-08-02,222600\r
2018-08-04,224300\r
2018-08-12,223500\r
2018-08-19,220900\r
2018-08-22,219300\r
2018-08-27,206700\r
2018-09-01,212700\r
2018-09-03,211200\r
2018-09-08,223500\r
2018-09-11,224200\r
2018-09-16,213400\r
2018-09-23,225400\r
2018-09-26,214800\r
2018-09-28,221500\r
2018-10-03,216600\r
2018-11-22,191600\r
2019-02-03,229500\r
2019-02-13,210100\r
2019-02-15,227900\r
2019-02-20,225300\r
2019-02-23,221700\r
2019-02-25,226500\r
2019-03-20,214900\r
2019-03-22,215200\r
2019-03-27,230000\r
2019-03-30,221200\r
2019-04-16,215600\r
2019-05-01,219900\r
2019-05-06,224400\r
2019-05-14,237600\r
2019-06-13,236800\r
2019-06-18,239600\r
2019-06-25,218100\r
2019-06-28,234400\r
2019-07-05,223300\r
2019-07-08,220900\r
2019-07-10,229400\r
2019-07-15,233000\r
2019-07-25,221900\r
2019-08-04,227300\r
2019-08-14,226400\r
2019-08-17,218100\r
2019-08-22,208100\r
2019-08-24,222400\r
2019-08-29,220200\r
2019-09-08,202300\r
2019-09-11,206800\r
2019-09-13,218300\r
2019-09-16,211200\r
2019-10-08,206600\r
2019-10-11,199200\r
2019-10-13,202000\r
2019-12-05,224000\r
2019-12-10,211600\r
2019-12-15,194700\r
2019-12-27,217300\r
2019-12-30,212800\r
2020-01-09,214500\r
2020-01-11,214000\r
2020-01-14,219100\r
2020-01-19,212700\r
2020-01-31,203500\r
2020-02-03,185500\r
2020-02-05,216400\r
2020-02-15,213300\r
2020-02-20,220200\r
2020-03-21,228000\r
2020-03-24,220400\r
2020-03-26,216900\r
2020-04-03,221300\r
2020-04-05,225300\r
2020-04-08,228000\r
2020-04-10,227300\r
2020-04-15,235600\r
2020-05-05,75600\r
2020-05-18,227800\r
2020-05-20,228300\r
2020-05-25,241000\r
2020-05-28,237300\r
2020-05-30,234000\r
2020-06-24,222400\r
2020-07-07,242100\r
2020-07-09,230100\r
2020-07-19,223800\r
2020-07-27,216600\r
2020-08-06,202000\r
2020-08-08,212800\r
2020-08-18,197100\r
2020-09-02,195100\r
2020-09-12,198000\r
2020-09-30,191200\r
2020-10-30,215800\r
2020-11-14,210000\r
2020-11-21,210900\r
2020-11-26,210300\r
2020-11-29,206200\r
2020-12-26,220200\r
2021-01-03,230200\r
2021-01-18,228500\r
2021-02-24,233300\r
2021-02-27,229500\r
2021-03-01,228600\r
2021-03-04,225100\r
2021-03-21,229400\r
2021-03-24,221400\r
2021-03-29,227100\r
2021-03-31,228700\r
2021-04-03,229600\r
2021-04-05,231000\r
2021-04-08,233100\r
2021-04-15,236700\r
2021-04-23,236300\r
2021-05-03,225400\r
2021-05-28,232000\r
2021-06-09,218000\r
2021-06-14,232000\r
2021-07-17,210800\r
2021-07-22,218200\r
2021-08-11,223100\r
2021-08-23,208300\r
2021-08-26,210400\r
2021-08-31,206600\r
2021-09-05,202600\r
2021-09-12,202400\r
2021-09-25,200700\r
2021-09-30,185700\r
2021-10-07,178100\r
2021-10-12,184700\r
2021-10-17,171900\r
2021-10-27,173200\r
2021-11-09,193800\r
2021-11-11,188200\r
2021-11-19,195300\r
2021-12-14,230300\r
2021-12-19,224400\r
2022-01-15,216100\r
2022-01-23,229500\r
2022-01-25,220500\r
2022-02-09,223500\r
2022-03-09,219000\r
2022-03-21,223300\r
2022-04-05,220900\r
2022-05-08,222500\r
2022-05-28,223400\r
2022-06-17,218800\r
2022-07-02,225300\r
2022-07-07,212600\r
2022-07-12,225100\r
2022-07-14,221000\r
2022-07-17,220000\r
2022-07-24,210400\r
2022-08-01,209400\r
2022-08-06,203300\r
2022-08-11,198300\r
2022-08-13,188500\r
2022-08-18,166400\r
2022-08-28,185800\r
2022-09-05,172200\r
2022-09-10,168700\r
2022-09-20,169900\r
2022-09-22,166100\r
2022-10-05,156200\r
2022-10-15,171300\r
2022-11-06,167800\r
2022-11-16,170000\r
2022-12-11,177400\r
2022-12-21,191400\r
2023-01-03,192200\r
2023-01-10,201000\r
2023-02-02,231500\r
2023-02-04,225600\r
2023-02-09,221300\r
2023-02-12,229300\r
2023-02-17,234300\r
2023-02-24,214800\r
2023-03-01,239600\r
2023-04-05,227300\r
2023-04-18,217900\r
`;export{n as default};