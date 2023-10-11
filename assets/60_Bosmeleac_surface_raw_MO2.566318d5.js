const r=`date,value\r
2017-01-25,349100\r
2017-01-29,349100\r
2017-02-01,349100\r
2017-02-04,349100\r
2017-03-13,302100\r
2017-03-16,372000\r
2017-04-12,361900\r
2017-04-19,361900\r
2017-04-22,361900\r
2017-05-22,283100\r
2017-05-25,388200\r
2017-06-01,354900\r
2017-06-14,372500\r
2017-06-18,372500\r
2017-06-21,373900\r
2017-06-24,373900\r
2017-07-01,384200\r
2017-07-06,334000\r
2017-07-09,364700\r
2017-07-31,321600\r
2017-08-05,328800\r
2017-08-07,328800\r
2017-08-25,358000\r
2017-08-27,358000\r
2017-09-02,339700\r
2017-09-14,293000\r
2017-09-16,293000\r
2017-09-17,301700\r
2017-09-19,301700\r
2017-09-22,291700\r
2017-10-04,298700\r
2017-10-06,298700\r
2017-10-07,298700\r
2017-10-11,298700\r
2017-10-14,313000\r
2017-10-21,286500\r
2017-10-22,286500\r
2018-02-21,334000\r
2018-02-24,336700\r
2018-02-26,336600\r
2018-02-28,336600\r
2018-03-05,378800\r
2018-04-20,363200\r
2018-04-22,363200\r
2018-04-24,363200\r
2018-05-05,350700\r
2018-05-07,350700\r
2018-05-09,350700\r
2018-05-14,350700\r
2018-05-15,380600\r
2018-05-17,390200\r
2018-05-19,390200\r
2018-05-20,338900\r
2018-05-22,338900\r
2018-05-24,338900\r
2018-06-26,391500\r
2018-06-28,391500\r
2018-06-29,393600\r
2018-07-01,390500\r
2018-07-04,390500\r
2018-07-06,390500\r
2018-07-08,382200\r
2018-07-09,390000\r
2018-07-11,374400\r
2018-07-13,374400\r
2018-07-14,407700\r
2018-07-16,403700\r
2018-07-18,403700\r
2018-07-19,378800\r
2018-07-21,388200\r
2018-07-23,388200\r
2018-07-24,381600\r
2018-07-26,370100\r
2018-07-28,375000\r
2018-07-31,372400\r
2018-08-02,372400\r
2018-08-03,370500\r
2018-08-05,359000\r
2018-09-02,327500\r
2018-09-04,327500\r
2018-09-06,327500\r
2018-09-09,300400\r
2018-09-11,300400\r
2018-09-27,298300\r
2018-09-29,298300\r
2018-10-01,298300\r
2018-10-04,299000\r
2018-10-07,299000\r
2018-10-09,285800\r
2018-10-12,285800\r
2018-10-19,248700\r
2018-10-24,226900\r
2018-11-03,236300\r
2018-11-06,224200\r
2018-11-08,224200\r
2018-11-11,224200\r
2018-11-18,245100\r
2018-11-20,245100\r
2018-11-21,254800\r
2018-11-30,250100\r
2019-01-22,371200\r
2019-01-24,371200\r
2019-01-27,371200\r
2019-02-03,371200\r
2019-02-14,280700\r
2019-02-16,280700\r
2019-02-19,280700\r
2019-02-21,280700\r
2019-02-23,280700\r
2019-02-24,348800\r
2019-02-26,300400\r
2019-03-11,349100\r
2019-03-13,269700\r
2019-03-26,313400\r
2019-03-28,313400\r
2019-03-30,313400\r
2019-03-31,313400\r
2019-04-09,291800\r
2019-04-12,320200\r
2019-04-14,320200\r
2019-04-17,339100\r
2019-04-19,339100\r
2019-04-20,343500\r
2019-04-22,337600\r
2019-04-25,337600\r
2019-04-27,337600\r
2019-04-30,343800\r
2019-05-05,350500\r
2019-06-26,392200\r
2019-06-28,392200\r
2019-06-29,393300\r
2019-07-03,393300\r
2019-07-04,371100\r
2019-07-06,375000\r
2019-07-08,375000\r
2019-07-09,342200\r
2019-07-11,363500\r
2019-07-13,334700\r
2019-07-14,334700\r
2019-07-16,350900\r
2019-07-23,351400\r
2019-07-24,351400\r
2019-08-23,337800\r
2019-08-25,337800\r
2019-08-27,338300\r
2019-08-30,344000\r
2019-09-01,344000\r
2019-09-02,344000\r
2019-09-04,344000\r
2019-09-07,359800\r
2019-09-11,344300\r
2019-09-14,351100\r
2019-09-16,291600\r
2019-09-19,293500\r
2019-09-21,293500\r
2019-09-24,293500\r
2019-09-27,293500\r
2019-12-03,258400\r
2019-12-05,258400\r
2019-12-08,258400\r
2019-12-13,340900\r
2020-01-17,324400\r
2020-01-19,324400\r
2020-01-20,324400\r
2020-01-22,325500\r
2020-02-04,308600\r
2020-02-06,349600\r
2020-02-11,342600\r
2020-02-26,361400\r
2020-03-17,102200\r
2020-03-24,102200\r
2020-03-25,312300\r
2020-03-27,294700\r
2020-03-30,294700\r
2020-04-01,301700\r
2020-04-03,301600\r
2020-04-04,322500\r
2020-04-08,322500\r
2020-04-09,310800\r
2020-04-11,304900\r
2020-04-14,292900\r
2020-04-16,300000\r
2020-04-18,297500\r
2020-04-21,305200\r
2020-04-23,305200\r
2020-04-26,319600\r
2020-05-19,392400\r
2020-05-21,392400\r
2020-05-24,387200\r
2020-05-26,360100\r
2020-05-28,360100\r
2020-05-29,370400\r
2020-05-31,371500\r
2020-06-02,371500\r
2020-06-08,359000\r
2020-07-18,391000\r
2020-07-20,388400\r
2020-07-22,388400\r
2020-07-30,392400\r
2020-08-02,392400\r
2020-08-04,352400\r
2020-08-06,348600\r
2020-08-07,383800\r
2020-08-09,382200\r
2020-08-11,382200\r
2020-08-14,350100\r
2020-08-21,366600\r
2020-09-08,245100\r
2020-09-13,270700\r
2020-09-16,270000\r
2020-09-26,314200\r
2020-11-05,264300\r
2020-11-12,298200\r
2020-11-15,298200\r
2020-11-19,298200\r
2021-01-09,348600\r
2021-01-29,372000\r
2021-02-05,372000\r
2021-02-10,350000\r
2021-02-18,350000\r
2021-02-28,395800\r
2021-03-02,401900\r
2021-03-07,401900\r
2021-03-09,401900\r
2021-03-30,338800\r
2021-04-01,382000\r
2021-04-03,382000\r
2021-04-04,367900\r
2021-04-06,367900\r
2021-04-08,367900\r
2021-04-13,371300\r
2021-04-14,419100\r
2021-04-16,419100\r
2021-04-18,419100\r
2021-04-19,424700\r
2021-04-21,393800\r
2021-04-23,393800\r
2021-04-24,416300\r
2021-04-26,392500\r
2021-04-28,392500\r
2021-04-29,392500\r
2021-05-01,419900\r
2021-05-03,419300\r
2021-05-31,295800\r
2021-06-05,294900\r
2021-06-08,351000\r
2021-06-12,335000\r
2021-06-13,405700\r
2021-06-15,404600\r
2021-07-18,364500\r
2021-07-20,368200\r
2021-07-22,368200\r
2021-07-28,368200\r
2021-08-14,367800\r
2021-08-22,367800\r
2021-09-06,390200\r
2021-09-13,390300\r
2021-09-16,390300\r
2021-10-08,342400\r
2021-10-11,348500\r
2021-10-15,348500\r
2021-11-22,310800\r
2021-11-24,310800\r
2022-03-07,332700\r
2022-03-09,332700\r
2022-03-14,332700\r
2022-03-17,389800\r
2022-03-22,389800\r
2022-03-24,389800\r
2022-03-25,358700\r
2022-03-27,380400\r
2022-04-01,360200\r
2022-04-03,387400\r
2022-04-14,411400\r
2022-04-16,411400\r
2022-04-21,411400\r
2022-05-06,339900\r
2022-05-08,336000\r
2022-05-13,336000\r
2022-05-21,342600\r
2022-05-24,342600\r
2022-05-28,342600\r
2022-05-29,342600\r
2022-05-31,342600\r
2022-06-13,377700\r
2022-06-15,422000\r
2022-06-17,422000\r
2022-06-25,399200\r
2022-07-05,351300\r
2022-07-08,361600\r
2022-07-10,360200\r
2022-07-12,360200\r
2022-07-13,385600\r
2022-07-15,375200\r
2022-07-17,397800\r
2022-07-18,386600\r
2022-07-20,399700\r
2022-07-23,397800\r
2022-08-02,350600\r
2022-08-04,349600\r
2022-08-06,349600\r
2022-08-07,319600\r
2022-08-09,320800\r
2022-08-11,347100\r
2022-08-12,334600\r
2022-08-16,348700\r
2022-09-18,212200\r
2022-09-21,212200\r
2022-10-11,231800\r
2022-10-20,231800\r
2022-11-12,251900\r
2022-11-15,251900\r
2022-11-17,251900\r
2022-11-19,251900\r
2022-11-20,251900\r
2022-11-22,319700\r
2022-11-25,343600\r
2022-11-29,345400\r
2023-02-08,350800\r
2023-02-13,368000\r
2023-02-15,347600\r
2023-04-04,436800\r
2023-05-19,386400\r
2023-05-21,386400\r
2023-05-23,386400\r
2023-05-26,386400\r
2023-05-28,385900\r
2023-05-29,385900\r
2023-06-05,389900\r
2023-06-07,389900\r
2023-06-08,389900\r
2023-06-12,389800\r
2023-06-13,389800\r
2023-06-15,418100\r
2023-06-20,391200\r
2023-06-22,391200\r
2023-06-23,391200\r
2023-06-25,391200\r
2023-09-03,361900\r
2023-09-05,361600\r
2023-09-06,361800\r
2023-10-06,328800\r
2023-10-08,348100\r
`;export{r as default};
