const r=`date,value\r
2017-02-25,2830600\r
2017-03-07,2915400\r
2017-03-17,2935900\r
2017-03-27,2934500\r
2017-04-23,3150300\r
2017-05-03,3163900\r
2017-05-16,3222100\r
2017-05-23,3222100\r
2017-05-26,3167600\r
2017-06-02,3179500\r
2017-06-05,3163600\r
2017-06-12,3151200\r
2017-06-22,3206900\r
2017-06-25,3106000\r
2017-07-02,3091700\r
2017-07-05,2899600\r
2017-07-07,2980000\r
2017-07-10,2980000\r
2017-07-12,2980000\r
2017-07-17,2964200\r
2017-07-22,2878100\r
2017-07-27,2889000\r
2017-08-14,2625600\r
2017-08-19,2533900\r
2017-08-21,2538700\r
2017-08-24,2477700\r
2017-08-26,2446200\r
2017-08-29,2464900\r
2017-09-03,2420700\r
2017-09-05,2374700\r
2017-09-08,2357100\r
2017-09-10,2337500\r
2017-09-13,2251300\r
2017-09-20,2242200\r
2017-09-23,2218900\r
2017-09-28,2244600\r
2017-10-03,2162300\r
2017-10-05,2090700\r
2017-10-08,2102900\r
2017-10-10,2076300\r
2017-10-13,2082500\r
2017-10-15,2042800\r
2017-10-18,2039700\r
2017-10-25,2001900\r
2017-10-28,1964000\r
2017-10-30,1967600\r
2017-11-07,1926400\r
2017-11-17,1948000\r
2017-11-19,1932500\r
2017-11-22,1926400\r
2017-11-24,1925500\r
2017-11-27,1925500\r
2018-02-25,2841600\r
2018-02-27,2841800\r
2018-03-02,2841800\r
2018-04-01,3188300\r
2018-04-21,3374400\r
2018-04-23,3374400\r
2018-04-26,3374400\r
2018-05-11,3526100\r
2018-05-18,3526100\r
2018-05-21,3526100\r
2018-06-20,3675400\r
2018-06-22,3675400\r
2018-06-25,3722800\r
2018-06-27,3722800\r
2018-07-02,3676400\r
2018-07-07,3645300\r
2018-07-10,3677900\r
2018-07-12,3656600\r
2018-07-15,3684000\r
2018-07-17,3682700\r
2018-07-20,3703900\r
2018-07-22,3709500\r
2018-07-25,3686700\r
2018-07-27,3726200\r
2018-07-30,3650900\r
2018-08-01,3691800\r
2018-08-04,3633500\r
2018-08-06,3678200\r
2018-08-11,3603400\r
2018-08-16,3602500\r
2018-08-19,3647800\r
2018-08-21,3562800\r
2018-08-26,3586400\r
2018-08-31,3596800\r
2018-09-03,3587000\r
2018-09-08,3595100\r
2018-09-10,3547400\r
2018-09-13,3547400\r
2018-09-20,3494600\r
2018-09-23,3489500\r
2018-09-25,3459200\r
2018-09-28,3459200\r
2018-09-30,3460700\r
2018-10-03,3450100\r
2018-10-05,3477600\r
2018-10-25,3391800\r
2018-10-30,3391800\r
2018-11-04,3310300\r
2018-11-27,3391400\r
2018-11-29,3398500\r
2019-01-16,3603100\r
2019-01-23,3595300\r
2019-01-28,3594300\r
2019-02-12,3421800\r
2019-02-15,3428700\r
2019-02-17,3420400\r
2019-02-20,3471400\r
2019-02-22,3422900\r
2019-02-25,3462600\r
2019-02-27,3435700\r
2019-03-12,3506300\r
2019-03-22,3497200\r
2019-03-24,3462200\r
2019-03-27,3513200\r
2019-03-29,3500500\r
2019-04-01,3481400\r
2019-04-08,3512400\r
2019-04-13,3475900\r
2019-05-01,3597800\r
2019-05-06,3680100\r
2019-05-11,3680100\r
2019-05-13,3630500\r
2019-05-16,3630600\r
2019-05-23,3579200\r
2019-06-02,3655300\r
2019-06-12,3655900\r
2019-06-17,3549900\r
2019-06-22,3587400\r
2019-06-25,3587400\r
2019-06-27,3551300\r
2019-06-30,3573900\r
2019-07-02,3573900\r
2019-07-05,3628900\r
2019-07-07,3628900\r
2019-07-10,3641400\r
2019-07-12,3609600\r
2019-07-15,3617800\r
2019-07-17,3619400\r
2019-07-22,3566400\r
2019-07-25,3558800\r
2019-08-01,3430100\r
2019-08-04,3389100\r
2019-08-09,3307100\r
2019-08-11,3283400\r
2019-08-14,3241100\r
2019-08-16,3229800\r
2019-08-21,3173700\r
2019-08-24,3181900\r
2019-08-26,3117000\r
2019-08-29,3134700\r
2019-08-31,3088800\r
2019-09-03,3040000\r
2019-09-05,3040000\r
2019-09-13,2969400\r
2019-09-15,2994200\r
2019-09-18,2891400\r
2019-09-20,2865500\r
2019-10-05,2858100\r
2019-10-08,2724500\r
2019-10-13,2721500\r
2019-11-04,2760700\r
2019-11-09,2807200\r
2019-11-19,2808900\r
2019-11-27,2901200\r
2019-12-02,2901200\r
2020-01-06,3209700\r
2020-01-11,3159700\r
2020-01-16,3162300\r
2020-01-18,3193400\r
2020-02-20,3431300\r
2020-02-22,3417700\r
2020-03-01,3417700\r
2020-03-08,3353300\r
2020-03-11,3294200\r
2020-03-13,3405300\r
2020-03-18,3503300\r
2020-03-21,3537800\r
2020-03-28,3559600\r
2020-03-31,3554100\r
2020-04-05,3594800\r
2020-04-07,3623100\r
2020-04-10,3618300\r
2020-04-12,3617400\r
2020-04-15,3614500\r
2020-04-25,3667500\r
2020-05-05,3542000\r
2020-05-07,3569800\r
2020-05-17,3580600\r
2020-05-20,3619900\r
2020-05-22,3624800\r
2020-05-25,3648300\r
2020-05-27,3636600\r
2020-05-30,3649800\r
2020-06-14,3610500\r
2020-07-09,3653300\r
2020-07-11,3653300\r
2020-07-14,3679100\r
2020-07-19,3607200\r
2020-07-21,3597900\r
2020-07-24,3558100\r
2020-07-26,3575100\r
2020-07-29,3542800\r
2020-07-31,3496600\r
2020-08-03,3496600\r
2020-08-05,3457900\r
2020-08-08,3421200\r
2020-08-10,3383100\r
2020-08-15,3408200\r
2020-08-20,3331500\r
2020-08-23,3291300\r
2020-08-25,3224400\r
2020-09-02,3138300\r
2020-09-04,3112700\r
2020-09-07,3083200\r
2020-09-12,2993300\r
2020-09-14,2970200\r
2020-09-17,2972500\r
2020-09-19,2951400\r
2020-10-17,2742300\r
2020-10-24,2743800\r
2020-11-01,2743800\r
2020-11-08,2659800\r
2020-11-11,2775300\r
2020-11-18,2671800\r
2020-11-21,2769000\r
2020-11-23,2769000\r
2020-11-26,2767100\r
2021-02-11,3389200\r
2021-02-14,3389200\r
2021-02-19,3389200\r
2021-03-23,3485700\r
2021-03-26,3484200\r
2021-03-28,3578900\r
2021-03-31,3552700\r
2021-04-02,3552700\r
2021-04-05,3650600\r
2021-04-07,3645700\r
2021-04-15,3705400\r
2021-04-17,3690700\r
2021-04-20,3691800\r
2021-04-22,3674000\r
2021-05-27,3708600\r
2021-05-30,3673500\r
2021-06-09,3713400\r
2021-06-11,3690700\r
2021-06-14,3679800\r
2021-06-16,3677200\r
2021-06-19,3697000\r
2021-06-21,3692000\r
2021-06-26,3662500\r
2021-07-19,3552300\r
2021-07-21,3628100\r
2021-07-26,3628100\r
2021-07-29,3518000\r
2021-08-05,3482100\r
2021-08-10,3290400\r
2021-08-13,3290400\r
2021-08-18,3306000\r
2021-08-20,3263500\r
2021-08-23,3190900\r
2021-08-25,3162600\r
2021-08-28,3096100\r
2021-08-30,3074100\r
2021-09-04,3030800\r
2021-09-07,3076700\r
2021-10-07,2796500\r
2021-10-12,2797600\r
2021-10-14,2735000\r
2021-10-17,2756800\r
2021-10-24,2652300\r
2021-10-27,2637100\r
2022-01-15,3104100\r
2022-01-17,3101400\r
2022-01-22,3155200\r
2022-01-25,3113900\r
2022-01-27,3109700\r
2022-01-30,3109700\r
2022-02-01,3193600\r
2022-02-06,3262500\r
2022-02-09,3288000\r
2022-03-23,3496600\r
2022-03-26,3496600\r
2022-04-05,3571900\r
2022-04-10,3571900\r
2022-04-15,3571900\r
2022-04-17,3574800\r
2022-04-27,3574800\r
2022-05-17,3678100\r
2022-05-20,3654600\r
2022-05-22,3654600\r
2022-05-27,3654600\r
2022-06-01,3615000\r
2022-06-04,3615000\r
2022-06-06,3644800\r
2022-06-11,3663400\r
2022-06-14,3683200\r
2022-06-16,3663900\r
2022-06-19,3686700\r
2022-07-11,3357300\r
2022-07-14,3465300\r
2022-07-16,3411200\r
2022-07-19,3416300\r
2022-07-21,3336600\r
2022-07-24,3316900\r
2022-07-26,3288500\r
2022-07-29,3271100\r
2022-07-31,3212100\r
2022-08-03,3150900\r
2022-08-05,3133200\r
2022-08-08,3070400\r
2022-08-10,3065600\r
2022-08-13,3021400\r
2022-08-15,3008500\r
2022-08-20,2932800\r
2022-08-23,2809800\r
2022-08-28,2793800\r
2022-08-30,2750200\r
2022-09-02,2762200\r
2022-09-04,2678300\r
2022-09-12,2549600\r
2022-09-19,2420600\r
2022-09-22,2342000\r
2022-10-02,2345500\r
2022-10-04,2292800\r
2022-10-07,2292800\r
2022-10-09,2250500\r
2022-10-12,2246100\r
2022-10-22,2168100\r
2022-10-24,2153600\r
2022-10-27,2153600\r
2022-11-01,2153600\r
2022-11-06,2079200\r
2022-11-08,2154300\r
2022-11-11,2097000\r
2022-11-13,2090600\r
2022-11-16,2080000\r
2022-12-06,2096400\r
2023-02-06,2229300\r
2023-02-09,2154500\r
2023-02-11,2167000\r
2023-02-14,2149500\r
2023-02-16,2132200\r
2023-02-19,2136800\r
2023-02-21,2150900\r
2023-02-26,2148600\r
2023-03-01,2140800\r
2023-03-16,2240700\r
2023-03-28,2156400\r
2023-04-05,2178800\r
2023-04-07,2149100\r
2023-04-15,2175500\r
2023-04-17,2190500\r
2023-05-27,2307300\r
2023-05-30,2281300\r
2023-06-04,2370700\r
2023-06-11,2306600\r
2023-07-14,741800\r
2023-07-16,1957700\r
2023-07-19,1230000\r
2023-07-21,1233400\r
`;export{r as default};
