const r=`date,value\r
2017-01-26,339600\r
2017-01-29,339600\r
2017-02-15,399100\r
2017-02-18,399100\r
2017-02-25,407700\r
2017-04-06,495700\r
2017-04-09,495700\r
2017-05-16,489700\r
2017-05-19,488000\r
2017-05-26,488800\r
2017-06-05,496600\r
2017-07-05,472700\r
2017-08-14,420500\r
2017-08-17,420500\r
2017-08-22,420500\r
2017-08-24,421100\r
2017-08-27,394800\r
2017-08-29,394800\r
2017-09-01,394800\r
2017-09-03,394800\r
2017-10-08,352300\r
2017-10-11,352300\r
2017-10-13,357100\r
2017-10-16,357100\r
2017-10-18,357100\r
2017-10-23,348100\r
2017-10-26,341300\r
2017-10-28,341300\r
2017-10-31,341300\r
2017-11-07,324700\r
2017-11-15,324700\r
2017-11-17,328300\r
2017-11-20,325000\r
2017-11-22,328400\r
2017-11-25,328400\r
2017-11-27,328400\r
2017-11-30,323200\r
2017-12-12,319200\r
2017-12-15,319200\r
2017-12-20,317300\r
2018-02-15,646100\r
2018-02-25,648900\r
2018-03-02,647700\r
2018-03-07,647700\r
2018-03-22,658200\r
2018-03-30,658200\r
2018-04-21,655400\r
2018-04-24,655400\r
2018-04-26,655400\r
2018-05-11,653200\r
2018-05-21,653600\r
2018-05-24,637400\r
2018-06-20,643700\r
2018-06-23,643700\r
2018-06-25,647600\r
2018-07-08,632900\r
2018-07-10,632900\r
2018-07-15,636700\r
2018-07-18,636700\r
2018-07-23,635400\r
2018-07-25,637100\r
2018-07-30,639500\r
2018-08-02,639500\r
2018-08-04,628600\r
2018-08-12,621000\r
2018-08-19,597800\r
2018-08-22,597800\r
2018-08-27,597800\r
2018-09-03,570100\r
2018-09-08,583600\r
2018-09-11,583600\r
2018-09-16,572300\r
2018-09-18,572300\r
2018-09-23,562500\r
2018-09-26,562500\r
2018-09-28,562500\r
2018-10-03,564100\r
2018-10-06,545500\r
2018-10-13,545500\r
2018-10-23,500400\r
2018-11-12,494900\r
2018-11-15,494900\r
2018-11-17,505600\r
2018-11-22,505600\r
2018-11-27,484400\r
2018-12-07,485900\r
2018-12-10,481900\r
2019-01-11,496700\r
2019-01-16,499200\r
2019-01-19,499200\r
2019-01-24,499200\r
2019-01-26,499100\r
2019-02-15,618600\r
2019-02-18,618600\r
2019-02-20,627700\r
2019-02-23,627700\r
2019-02-25,620800\r
2019-02-28,620800\r
2019-03-12,621300\r
2019-03-22,606000\r
2019-03-25,606000\r
2019-03-27,626300\r
2019-03-30,626300\r
2019-04-01,626300\r
2019-04-09,624800\r
2019-05-01,605700\r
2019-05-06,610100\r
2019-05-09,610100\r
2019-05-11,610100\r
2019-05-14,610100\r
2019-05-16,610000\r
2019-05-29,650600\r
2019-05-31,650600\r
2019-07-05,610700\r
2019-07-08,610700\r
2019-07-10,616100\r
2019-07-13,616100\r
2019-07-15,619000\r
2019-07-20,617000\r
2019-07-23,625600\r
2019-07-25,611300\r
2019-07-28,614400\r
2019-08-02,589800\r
2019-08-04,583700\r
2019-08-09,579000\r
2019-08-14,571700\r
2019-08-17,571700\r
2019-08-22,582000\r
2019-08-24,561400\r
2019-08-29,540600\r
2019-09-03,543000\r
2019-09-06,543000\r
2019-09-08,543000\r
2019-09-11,532300\r
2019-09-13,533800\r
2019-09-16,474600\r
2019-09-18,474600\r
2019-09-21,474600\r
2019-09-26,474600\r
2019-10-08,448600\r
2019-10-11,448600\r
2019-10-13,457900\r
2019-10-26,438500\r
2019-12-17,613200\r
2019-12-20,613200\r
2019-12-25,606100\r
2019-12-27,606100\r
2019-12-30,606100\r
2020-01-11,634300\r
2020-01-14,634300\r
2020-01-16,640400\r
2020-01-19,640400\r
2020-01-29,633700\r
2020-01-31,633700\r
2020-02-05,631200\r
2020-02-10,631200\r
2020-02-15,632000\r
2020-02-18,632000\r
2020-02-20,614600\r
2020-02-23,615200\r
2020-03-21,656200\r
2020-03-24,656200\r
2020-03-26,644600\r
2020-03-31,646000\r
2020-04-03,646000\r
2020-04-05,615500\r
2020-04-08,617100\r
2020-04-10,612200\r
2020-04-15,619200\r
2020-04-25,619700\r
2020-05-05,641000\r
2020-05-08,641000\r
2020-05-18,641000\r
2020-05-20,649200\r
2020-05-25,656100\r
2020-05-28,656100\r
2020-05-30,639000\r
2020-06-12,640000\r
2020-06-14,640000\r
2020-06-24,629600\r
2020-07-04,629600\r
2020-07-07,622800\r
2020-07-09,634900\r
2020-07-19,631800\r
2020-07-22,631900\r
2020-07-24,618800\r
2020-07-27,621500\r
2020-07-29,621500\r
2020-08-03,621500\r
2020-08-06,593800\r
2020-08-08,607800\r
2020-08-18,589100\r
2020-08-21,589100\r
2020-08-23,589100\r
2020-08-31,550800\r
2020-09-02,552100\r
2020-09-05,513500\r
2020-09-07,513500\r
2020-09-10,513500\r
2020-09-12,514700\r
2020-09-17,514700\r
2020-11-11,482400\r
2020-11-14,482400\r
2020-11-21,495300\r
2020-11-26,483900\r
2020-11-29,494300\r
2020-12-26,629600\r
2021-02-14,661400\r
2021-02-17,661400\r
2021-02-19,665400\r
2021-02-24,662200\r
2021-02-27,670600\r
2021-03-01,643800\r
2021-03-04,670700\r
2021-03-09,638800\r
2021-03-31,657100\r
2021-04-03,657100\r
2021-04-05,658900\r
2021-04-08,658900\r
2021-04-15,653200\r
2021-04-20,652700\r
2021-04-23,652700\r
2021-05-20,614400\r
2021-05-28,614400\r
2021-05-30,614700\r
2021-06-09,614400\r
2021-06-14,632300\r
2021-06-22,632100\r
2021-06-29,459200\r
2021-07-02,472600\r
2021-07-09,477200\r
2021-09-12,593300\r
2021-09-17,594300\r
2021-09-22,591300\r
2021-09-25,578000\r
2021-09-27,578000\r
2021-10-07,580700\r
2021-10-12,585200\r
2021-10-15,585200\r
2021-10-17,579300\r
2021-10-20,584700\r
2021-10-27,571700\r
2021-12-16,637300\r
2021-12-19,637300\r
2021-12-21,637300\r
2022-01-15,616500\r
2022-01-23,616500\r
2022-01-25,629300\r
2022-02-09,627900\r
2022-03-01,666300\r
2022-03-09,666300\r
2022-03-21,659000\r
2022-03-24,659000\r
2022-03-26,660500\r
2022-04-05,648300\r
2022-04-10,646600\r
2022-07-14,622100\r
2022-07-17,622100\r
2022-07-24,622100\r
2022-08-28,430200\r
2022-09-05,430200\r
2022-09-22,355800\r
2022-10-02,355800\r
2022-10-05,322800\r
2022-10-07,327200\r
2022-10-12,327200\r
2022-11-06,274100\r
2022-11-11,274200\r
2022-11-16,264500\r
2022-12-21,338200\r
2022-12-24,338200\r
2023-01-10,386100\r
2023-01-18,386100\r
2023-01-20,404100\r
2023-02-04,563800\r
2023-02-09,569900\r
2023-02-12,569900\r
2023-02-14,560500\r
2023-02-17,565800\r
2023-02-19,565800\r
2023-02-24,562800\r
2023-03-01,549900\r
2023-03-16,573700\r
2023-04-05,581000\r
2023-04-08,581000\r
2023-04-10,582600\r
2023-06-24,617900\r
2023-06-27,617900\r
2023-07-14,610200\r
2023-07-17,610200\r
2023-07-22,610200\r
2023-08-08,583900\r
2023-08-11,567900\r
2023-08-16,567900\r
2023-08-18,573900\r
2023-08-21,560800\r
2023-08-23,561900\r
2023-08-28,553600\r
2023-08-31,544500\r
2023-09-07,529700\r
2023-09-10,515000\r
2023-09-15,515000\r
2023-10-02,458300\r
`;export{r as default};
