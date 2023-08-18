const r=`date,value\r
2017-04-23,218800\r
2017-05-03,218800\r
2017-05-23,286400\r
2017-05-26,286400\r
2017-06-02,294000\r
2017-07-07,354400\r
2017-07-10,354400\r
2017-07-12,354400\r
2017-07-17,357500\r
2017-07-22,353100\r
2017-07-27,348000\r
2017-07-30,354700\r
2017-08-04,349800\r
2017-08-06,349800\r
2017-08-14,287500\r
2017-08-21,224200\r
2017-08-24,224200\r
2017-08-26,234000\r
2017-08-29,234000\r
2017-09-03,201900\r
2017-10-05,162600\r
2017-10-08,162600\r
2017-10-10,180900\r
2017-10-13,180900\r
2017-10-15,175000\r
2018-04-18,258300\r
2018-04-21,258300\r
2018-04-23,258300\r
2018-04-26,258300\r
2018-06-22,346100\r
2018-06-25,346100\r
2018-06-27,349900\r
2018-07-02,341100\r
2018-07-07,344600\r
2018-07-12,341800\r
2018-08-06,333000\r
2018-08-16,323400\r
2018-08-19,308400\r
2018-08-21,310000\r
2018-08-26,308500\r
2018-08-31,289100\r
2018-09-03,286500\r
2018-09-05,286500\r
2018-09-10,205800\r
2018-09-13,205800\r
2018-09-18,205800\r
2018-09-20,209100\r
2018-09-23,146800\r
2018-09-25,175700\r
2018-09-28,175700\r
2018-10-05,193000\r
2018-10-13,174600\r
2019-02-27,55500\r
2019-03-24,131400\r
2019-03-27,131400\r
2019-03-29,162900\r
2019-04-01,162900\r
2019-04-08,162900\r
2019-04-13,255600\r
2019-04-18,272000\r
2019-04-28,272000\r
2019-05-01,263800\r
2019-05-13,274400\r
2019-05-16,274400\r
2019-05-23,279500\r
2019-05-26,279500\r
2019-05-31,249200\r
2019-06-02,250900\r
2019-06-17,319900\r
2019-06-22,319900\r
2019-06-27,338400\r
2019-06-30,338400\r
2019-07-02,335800\r
2019-07-05,358600\r
2019-07-07,358600\r
2019-07-10,358600\r
2019-07-12,357400\r
2019-07-15,355800\r
2019-07-17,355800\r
2019-08-06,283700\r
2019-08-09,286900\r
2019-08-11,267300\r
2019-08-14,267300\r
2019-08-16,267300\r
2019-08-21,274400\r
2019-08-24,240900\r
2019-08-26,241200\r
2019-08-29,169100\r
2019-08-31,169100\r
2019-09-03,169100\r
2019-09-05,169100\r
2019-09-15,205600\r
2019-09-18,205600\r
2019-09-20,205600\r
2019-09-30,226400\r
2020-03-18,253500\r
2020-03-21,253500\r
2020-03-28,254700\r
2020-03-31,254700\r
2020-04-02,187700\r
2020-04-05,188300\r
2020-04-07,177300\r
2020-04-10,177300\r
2020-04-12,177300\r
2020-04-15,186500\r
2020-05-07,182100\r
2020-05-17,261700\r
2020-05-20,261700\r
2020-05-22,261700\r
2020-05-25,261600\r
2020-05-27,324900\r
2020-05-30,324900\r
2020-06-01,319900\r
2020-06-21,349400\r
2020-06-24,349400\r
2020-06-26,371400\r
2020-06-29,371400\r
2020-07-01,371400\r
2020-07-04,371400\r
2020-07-06,371000\r
2020-07-09,368300\r
2020-07-11,368300\r
2020-07-21,357900\r
2020-07-24,357900\r
2020-07-26,357900\r
2020-07-29,357900\r
2020-07-31,359200\r
2020-08-05,350200\r
2020-08-08,354600\r
2020-08-10,354600\r
2020-08-15,352400\r
2020-08-20,331300\r
2020-08-25,235900\r
2020-09-02,234200\r
2020-09-04,234600\r
2020-09-12,170200\r
2020-09-14,178800\r
2020-09-17,178800\r
2020-09-29,192300\r
2020-10-07,188900\r
2021-03-23,207300\r
2021-03-26,207300\r
2021-03-28,233600\r
2021-03-31,233600\r
2021-04-05,232400\r
2021-04-07,232500\r
2021-05-27,316900\r
2021-05-30,316900\r
2021-06-01,316900\r
2021-06-11,339100\r
2021-06-14,339100\r
2021-06-16,358200\r
2021-06-26,347900\r
2021-07-01,348800\r
2021-07-11,357700\r
2021-07-19,357700\r
2021-07-21,360000\r
2021-07-26,334900\r
2021-07-29,334900\r
2021-08-10,245600\r
2021-08-13,245600\r
2021-08-15,245600\r
2021-08-18,245600\r
2021-08-20,247400\r
2021-08-23,204300\r
2021-08-25,204300\r
2021-08-28,204300\r
2021-08-30,204300\r
2021-09-24,161600\r
2021-09-29,161600\r
2021-10-14,238000\r
2021-10-17,238000\r
2021-10-19,238000\r
2021-10-24,238000\r
2022-03-23,242900\r
2022-03-26,242900\r
2022-03-28,242900\r
2022-04-17,258400\r
2022-04-22,259000\r
2022-04-27,256800\r
2022-05-12,316900\r
2022-05-15,316900\r
2022-05-17,338500\r
2022-05-20,338500\r
2022-05-22,338500\r
2022-05-27,351000\r
2022-06-01,351000\r
2022-06-04,351000\r
2022-06-06,356400\r
2022-06-11,363500\r
2022-06-14,363500\r
2022-06-16,354400\r
2022-06-19,350000\r
2022-06-21,336800\r
2022-06-29,317000\r
2022-07-01,313200\r
2022-07-11,323900\r
2022-07-14,323700\r
2022-07-16,335600\r
2022-07-19,339200\r
2022-07-21,319200\r
2022-07-24,332600\r
2022-07-26,308300\r
2022-07-31,292900\r
2022-08-03,296800\r
2022-08-05,296800\r
2022-08-08,284900\r
2022-08-10,286400\r
2022-08-25,246500\r
2022-08-28,246500\r
2022-09-04,247500\r
2022-09-19,157800\r
2022-09-22,157800\r
2022-10-04,169900\r
2022-10-07,169900\r
2022-10-09,169900\r
2022-10-12,169900\r
2023-03-13,184900\r
2023-03-16,184900\r
2023-03-28,239000\r
2023-04-05,239000\r
2023-04-07,239000\r
2023-06-16,328300\r
2023-06-19,328300\r
2023-06-21,328300\r
2023-06-24,328300\r
2023-06-26,328300\r
2023-07-11,342900\r
2023-07-14,342900\r
2023-07-16,363000\r
2023-07-19,363000\r
2023-07-21,358900\r
`;export{r as default};
