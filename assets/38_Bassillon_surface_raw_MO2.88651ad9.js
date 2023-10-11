const r=`date,value\r
2017-01-26,237200\r
2017-01-29,237200\r
2017-02-15,292300\r
2017-02-18,293900\r
2017-02-25,293000\r
2017-03-10,306100\r
2017-03-17,306100\r
2017-03-30,311300\r
2017-04-06,345500\r
2017-04-09,335300\r
2017-04-19,341200\r
2017-04-29,341100\r
2017-05-09,347200\r
2017-05-16,347700\r
2017-05-19,354600\r
2017-05-26,355000\r
2017-06-05,352300\r
2017-06-18,354800\r
2017-06-25,354800\r
2017-06-28,354800\r
2017-07-05,345000\r
2017-07-18,342200\r
2017-08-02,317300\r
2017-08-04,319500\r
2017-08-07,324800\r
2017-08-12,317700\r
2017-08-14,318600\r
2017-08-17,318500\r
2017-08-22,293000\r
2017-08-24,297800\r
2017-08-27,298200\r
2017-08-29,298200\r
2017-09-01,298200\r
2017-09-03,288800\r
2017-10-08,260200\r
2017-10-11,261100\r
2017-10-13,258300\r
2017-10-16,258800\r
2017-10-18,258800\r
2017-10-23,254200\r
2017-10-26,246800\r
2017-10-28,254500\r
2017-10-31,247700\r
2017-11-05,245200\r
2017-11-07,247500\r
2017-11-15,252000\r
2017-11-17,253700\r
2017-11-20,252900\r
2017-11-22,249100\r
2017-11-25,249100\r
2017-11-27,249100\r
2017-11-30,244200\r
2017-12-05,248300\r
2017-12-07,248300\r
2017-12-12,252800\r
2017-12-15,252800\r
2017-12-20,252600\r
2017-12-25,263100\r
2017-12-27,263100\r
2018-01-11,347100\r
2018-01-19,347100\r
2018-01-21,347100\r
2018-01-24,319100\r
2018-01-29,319100\r
2018-01-31,319100\r
2018-02-15,399200\r
2018-02-25,402000\r
2018-03-02,401300\r
2018-03-07,401300\r
2018-03-15,399800\r
2018-03-17,399800\r
2018-03-22,404000\r
2018-03-30,399400\r
2018-04-04,387500\r
2018-04-06,387500\r
2018-04-09,398900\r
2018-04-19,398000\r
2018-04-21,403300\r
2018-04-24,399200\r
2018-04-26,399200\r
2018-05-06,375700\r
2018-05-11,400200\r
2018-05-21,399500\r
2018-05-24,390100\r
2018-06-20,391900\r
2018-06-23,392900\r
2018-06-25,385500\r
2018-07-08,383200\r
2018-07-10,383200\r
2018-07-13,379900\r
2018-07-15,378900\r
2018-07-18,378900\r
2018-07-23,377700\r
2018-07-25,378400\r
2018-07-30,371600\r
2018-08-02,370300\r
2018-08-04,356400\r
2018-08-12,341500\r
2018-08-19,325100\r
2018-08-22,306600\r
2018-08-27,297000\r
2018-09-01,280300\r
2018-09-03,260300\r
2018-09-08,263400\r
2018-09-11,266600\r
2018-09-16,264000\r
2018-09-18,264000\r
2018-09-23,259200\r
2018-09-26,249600\r
2018-09-28,253100\r
2018-10-03,251200\r
2018-10-06,250800\r
2018-10-13,254900\r
2018-10-16,250900\r
2018-11-15,239900\r
2018-11-17,239900\r
2018-11-22,239900\r
2018-12-07,239700\r
2018-12-10,233400\r
2018-12-20,256600\r
2018-12-27,256600\r
2019-01-16,252800\r
2019-01-19,252800\r
2019-01-24,252800\r
2019-01-26,252800\r
2019-02-03,341100\r
2019-02-13,343000\r
2019-02-15,335700\r
2019-02-18,335700\r
2019-02-20,336800\r
2019-02-23,340200\r
2019-02-25,337300\r
2019-02-28,338800\r
2019-03-12,337100\r
2019-03-20,341600\r
2019-03-22,331400\r
2019-03-25,337500\r
2019-03-27,336800\r
2019-03-30,335000\r
2019-04-01,337800\r
2019-04-09,343800\r
2019-05-01,340200\r
2019-05-06,348400\r
2019-05-09,348400\r
2019-05-11,348400\r
2019-05-14,345600\r
2019-05-16,345600\r
2019-05-29,360100\r
2019-06-08,372300\r
2019-06-13,376900\r
2019-06-18,367900\r
2019-06-23,374200\r
2019-06-25,374200\r
2019-06-28,371200\r
2019-07-05,362900\r
2019-07-08,362900\r
2019-07-10,352900\r
2019-07-13,353300\r
2019-07-15,349400\r
2019-07-20,352100\r
2019-07-23,358000\r
2019-07-25,347700\r
2019-07-28,350900\r
2019-08-02,310200\r
2019-08-04,305200\r
2019-08-09,303500\r
2019-08-14,293600\r
2019-08-17,291500\r
2019-08-22,283600\r
2019-08-24,287900\r
2019-08-29,287900\r
2019-09-03,298600\r
2019-09-06,298600\r
2019-09-08,294400\r
2019-09-11,281000\r
2019-09-13,283100\r
2019-09-16,279900\r
2019-09-18,279100\r
2019-09-21,279100\r
2019-09-26,277000\r
2019-10-08,269800\r
2019-10-11,272200\r
2019-10-13,266900\r
2019-10-26,275700\r
2019-12-05,380400\r
2019-12-07,390300\r
2019-12-10,380400\r
2019-12-15,376400\r
2019-12-17,376400\r
2019-12-20,376400\r
2019-12-25,361400\r
2019-12-27,362300\r
2019-12-30,363800\r
2020-01-09,387400\r
2020-01-11,389500\r
2020-01-14,384600\r
2020-01-16,387700\r
2020-01-19,385600\r
2020-01-29,382100\r
2020-01-31,379400\r
2020-02-03,380300\r
2020-02-05,386400\r
2020-02-10,386400\r
2020-02-15,385000\r
2020-02-18,385000\r
2020-02-20,372000\r
2020-02-23,372300\r
2020-03-11,394300\r
2020-03-21,398300\r
2020-03-24,391700\r
2020-03-26,392700\r
2020-03-31,382500\r
2020-04-03,389800\r
2020-04-05,383600\r
2020-04-08,378400\r
2020-04-10,378400\r
2020-04-15,384600\r
2020-04-25,387500\r
2020-04-30,386700\r
2020-05-18,378600\r
2020-05-20,386500\r
2020-05-25,386500\r
2020-05-28,381000\r
2020-05-30,385500\r
2020-06-12,391600\r
2020-06-14,383100\r
2020-06-24,372400\r
2020-07-04,372400\r
2020-07-07,392100\r
2020-07-09,375800\r
2020-07-19,371400\r
2020-07-22,372500\r
2020-07-24,347900\r
2020-07-27,340700\r
2020-07-29,340700\r
2020-08-03,340700\r
2020-08-06,327600\r
2020-08-08,319100\r
2020-08-18,295700\r
2020-08-21,279700\r
2020-08-23,285600\r
2020-08-31,249000\r
2020-09-02,245300\r
2020-09-05,248100\r
2020-09-07,243500\r
2020-09-10,245600\r
2020-09-12,240200\r
2020-09-17,239900\r
2020-09-30,235000\r
2020-10-12,227400\r
2020-10-30,268400\r
2020-11-09,279800\r
2020-11-11,274800\r
2020-11-14,277900\r
2020-11-21,281400\r
2020-11-26,282000\r
2020-11-29,281900\r
2020-12-26,360100\r
2021-01-03,393300\r
2021-01-08,393300\r
2021-01-10,393300\r
2021-02-14,410300\r
2021-02-17,412200\r
2021-02-19,409700\r
2021-02-24,410800\r
2021-02-27,408600\r
2021-03-01,408200\r
2021-03-04,409500\r
2021-03-09,400800\r
2021-03-14,395700\r
2021-03-21,403100\r
2021-03-24,403100\r
2021-03-29,390800\r
2021-03-31,393700\r
2021-04-03,390100\r
2021-04-05,384900\r
2021-04-08,388800\r
2021-04-15,390600\r
2021-04-20,398800\r
2021-04-23,401900\r
2021-05-03,392800\r
2021-05-08,372700\r
2021-05-20,361200\r
2021-05-28,361200\r
2021-05-30,368100\r
2021-06-07,373300\r
2021-06-09,367300\r
2021-06-14,371900\r
2021-06-22,383300\r
2021-07-02,369400\r
2021-07-09,369400\r
2021-07-17,370400\r
2021-07-19,370400\r
2021-07-22,370600\r
2021-08-11,332300\r
2021-08-26,303000\r
2021-08-28,303500\r
2021-08-31,303500\r
2021-09-05,293200\r
2021-09-12,273000\r
2021-09-17,271600\r
2021-09-22,264900\r
2021-09-25,263800\r
2021-09-27,263500\r
2021-10-07,265400\r
2021-10-12,265800\r
2021-10-15,265800\r
2021-10-17,265800\r
2021-10-20,261400\r
2021-10-27,264200\r
2021-11-19,256500\r
2021-12-14,367500\r
2021-12-16,374600\r
2021-12-19,369100\r
2021-12-21,369100\r
2022-01-13,355100\r
2022-01-15,369100\r
2022-01-23,368400\r
2022-01-25,376000\r
2022-02-09,382400\r
2022-02-22,415700\r
2022-02-27,415700\r
2022-03-01,415700\r
2022-03-09,385000\r
2022-03-19,385000\r
2022-03-21,395600\r
2022-03-24,398400\r
2022-03-26,391000\r
2022-04-05,383100\r
2022-04-10,386700\r
2022-05-08,379800\r
2022-05-10,391000\r
2022-05-15,379100\r
2022-06-17,365800\r
2022-06-19,365800\r
2022-06-22,365800\r
2022-06-24,365800\r
2022-07-12,375100\r
2022-07-14,375300\r
2022-07-17,365700\r
2022-07-24,368300\r
2022-07-27,358100\r
2022-08-01,311000\r
2022-08-03,311100\r
2022-08-06,304400\r
2022-08-08,304400\r
2022-08-11,300800\r
2022-08-13,290300\r
2022-08-18,259800\r
2022-08-28,214500\r
2022-09-05,214500\r
2022-09-10,182600\r
2022-09-12,182600\r
2022-09-15,179400\r
2022-09-20,178200\r
2022-09-22,177200\r
2022-10-02,173600\r
2022-10-05,169200\r
2022-10-07,168100\r
2022-10-12,168100\r
2022-10-15,172200\r
2022-10-17,171300\r
2022-10-22,164900\r
2022-10-30,164600\r
2022-11-01,168700\r
2022-11-06,165900\r
2022-11-11,169100\r
2022-11-16,168100\r
2022-12-04,232700\r
2022-12-11,232700\r
2022-12-14,244800\r
2022-12-21,244900\r
2022-12-24,244500\r
2023-01-10,287500\r
2023-01-18,346300\r
2023-01-20,346300\r
2023-02-02,378400\r
2023-02-04,381300\r
2023-02-09,374600\r
2023-02-12,378200\r
2023-02-14,377300\r
2023-02-17,378300\r
2023-02-19,378300\r
2023-02-24,373600\r
2023-03-01,362700\r
2023-03-09,378800\r
2023-03-16,397400\r
2023-04-05,388800\r
2023-04-08,383600\r
2023-04-10,380800\r
2023-04-18,373600\r
2023-04-20,371200\r
2023-05-28,380900\r
2023-05-30,375600\r
2023-06-02,375600\r
2023-06-04,375600\r
2023-06-24,392700\r
2023-06-27,392700\r
2023-07-07,379600\r
2023-07-09,379600\r
2023-07-14,388300\r
2023-07-17,384200\r
2023-07-22,384000\r
2023-07-27,374000\r
2023-07-29,372500\r
2023-08-08,374800\r
2023-08-11,371400\r
2023-08-16,371400\r
2023-08-18,371400\r
2023-08-21,363200\r
2023-08-23,346300\r
2023-08-28,346300\r
2023-08-31,336200\r
2023-09-05,321100\r
2023-09-07,321100\r
2023-09-10,324000\r
2023-09-15,319300\r
2023-09-20,319400\r
2023-09-25,314900\r
2023-09-27,314700\r
2023-09-30,317000\r
2023-10-02,316900\r
`;export{r as default};
