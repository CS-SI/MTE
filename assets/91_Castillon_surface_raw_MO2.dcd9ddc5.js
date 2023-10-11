const r=`date,value\r
2017-03-11,3403200\r
2017-03-21,3385200\r
2017-04-10,3837900\r
2017-04-17,3837900\r
2017-04-20,4192400\r
2017-04-30,4187100\r
2017-05-30,4596600\r
2017-06-06,4596600\r
2017-06-09,4596600\r
2017-07-04,4706900\r
2017-07-06,4706900\r
2017-07-11,4706900\r
2017-07-14,4718800\r
2017-07-19,4687700\r
2017-07-21,4687700\r
2017-07-24,4700000\r
2017-07-29,4671200\r
2017-07-31,4671200\r
2017-08-03,4657700\r
2017-08-05,4653600\r
2017-08-08,4653600\r
2017-08-13,4649200\r
2017-08-15,4643100\r
2017-08-18,4719900\r
2017-08-20,4719900\r
2017-08-23,4623100\r
2017-08-25,4699000\r
2017-08-30,4589000\r
2017-09-02,4598600\r
2017-09-12,4432800\r
2017-09-14,4307300\r
2017-09-17,4288900\r
2017-09-22,4447600\r
2017-09-24,4440600\r
2017-09-27,4447100\r
2017-10-07,4332500\r
2017-10-09,4288300\r
2017-10-12,4311100\r
2017-10-14,4311100\r
2017-10-17,4271200\r
2017-10-19,4321400\r
2017-10-22,4250000\r
2018-03-16,2627700\r
2018-03-21,2627700\r
2018-03-23,2627700\r
2018-03-26,2897300\r
2018-03-28,2878500\r
2018-03-31,2891600\r
2018-04-02,2891600\r
2018-04-05,2888700\r
2018-04-07,2807600\r
2018-04-20,3436500\r
2018-04-22,3436500\r
2018-04-25,3765100\r
2018-04-27,3765100\r
2018-04-30,3757700\r
2018-05-05,3805500\r
2018-05-25,3867600\r
2018-06-09,4241400\r
2018-06-14,4330200\r
2018-06-16,4330200\r
2018-06-19,4446200\r
2018-07-04,4712900\r
2018-07-06,4712900\r
2018-07-09,4718100\r
2018-07-11,4692900\r
2018-07-14,4690900\r
2018-07-19,4713000\r
2018-07-21,4725400\r
2018-07-24,4706100\r
2018-07-26,4691600\r
2018-07-29,4667800\r
2018-08-23,4653100\r
2018-08-25,4653100\r
2018-08-28,4708300\r
2018-08-30,4708700\r
2018-09-02,4687800\r
2018-09-04,4642700\r
2018-09-07,4622400\r
2018-09-12,4504700\r
2018-09-14,4477900\r
2018-09-19,4427700\r
2018-09-22,4427700\r
2018-09-27,4331200\r
2018-09-29,4331200\r
2018-10-02,4408300\r
2018-10-04,4408300\r
2018-10-09,4256500\r
2018-10-12,4285900\r
2019-03-11,3712600\r
2019-03-13,3712600\r
2019-03-16,3622700\r
2019-03-18,3649200\r
2019-03-21,3492000\r
2019-03-23,3492000\r
2019-03-26,3492800\r
2019-03-28,3568100\r
2019-03-31,3242900\r
2019-04-02,3246200\r
2019-04-05,3032000\r
2019-04-07,3043700\r
2019-04-10,3043700\r
2019-04-15,2909600\r
2019-04-17,2921800\r
2019-04-20,2915800\r
2019-04-22,3105800\r
2019-04-27,3105800\r
2019-04-30,3107900\r
2019-05-02,3541500\r
2019-05-05,3538800\r
2019-05-07,3685800\r
2019-05-10,3665400\r
2019-05-12,3665400\r
2019-05-15,3665400\r
2019-06-04,4537500\r
2019-06-06,4537500\r
2019-06-11,4537500\r
2019-06-19,4720900\r
2019-06-21,4720900\r
2019-06-24,4735200\r
2019-06-26,4735200\r
2019-06-29,4732600\r
2019-07-01,4732600\r
2019-07-04,4697100\r
2019-07-06,4665300\r
2019-07-24,4748900\r
2019-07-26,4748900\r
2019-07-29,4717300\r
2019-07-31,4710600\r
2019-08-03,4719600\r
2019-08-05,4671700\r
2019-08-08,4693600\r
2019-08-10,4645500\r
2019-08-15,4684300\r
2019-08-18,4623200\r
2019-08-20,4654400\r
2019-08-23,4621400\r
2019-08-25,4682700\r
2019-08-28,4682700\r
2019-08-30,4682700\r
2019-09-02,4623100\r
2019-09-04,4564000\r
2019-09-07,4503600\r
2019-09-12,4239800\r
2019-09-14,4239800\r
2019-09-17,4146400\r
2019-09-19,4005600\r
2019-09-24,4012500\r
2019-09-27,3932300\r
2019-09-29,3997900\r
2019-10-02,3886000\r
2019-10-04,3905600\r
2019-10-07,3816600\r
2019-10-14,3843800\r
2019-10-17,3843800\r
2019-10-19,3814200\r
2020-04-04,2661200\r
2020-04-06,2552600\r
2020-04-09,2749600\r
2020-04-11,2749600\r
2020-04-14,2629400\r
2020-04-24,2775000\r
2020-04-26,2476100\r
2020-04-29,3255000\r
2020-05-04,3628500\r
2020-05-06,3628500\r
2020-05-09,3628500\r
2020-05-11,3684300\r
2020-05-14,3717700\r
2020-07-03,4783600\r
2020-07-05,4783600\r
2020-07-08,4743500\r
2020-07-10,4742100\r
2020-07-15,4767900\r
2020-07-20,4691300\r
2020-07-23,4727000\r
2020-08-07,4672500\r
2020-08-09,4554200\r
2020-08-12,4618200\r
2020-08-14,4618200\r
2020-08-17,4610900\r
2020-08-19,4608000\r
2020-08-22,4587300\r
2020-08-24,4579400\r
2020-08-27,4557600\r
2020-09-01,4548700\r
2020-09-03,4527500\r
2020-09-06,4457400\r
2020-09-08,4479500\r
2020-09-13,4351500\r
2020-09-16,4352800\r
2020-09-18,4352800\r
2020-09-21,4342900\r
2020-09-23,3908000\r
2020-09-26,3940400\r
2020-09-28,3940400\r
2020-10-01,3796400\r
2020-10-03,3827700\r
2020-10-08,3831900\r
2020-10-13,3759800\r
2020-10-16,3759800\r
2021-03-10,3716200\r
2021-03-15,3651700\r
2021-03-17,3651700\r
2021-03-20,3630500\r
2021-03-22,3638800\r
2021-03-25,3638800\r
2021-03-30,3609000\r
2021-04-01,3566300\r
2021-04-04,3566400\r
2021-04-06,3566400\r
2021-04-09,3700300\r
2021-04-16,3681000\r
2021-04-19,3681000\r
2021-05-04,4062700\r
2021-05-06,4056700\r
2021-05-09,4056700\r
2021-05-14,4056700\r
2021-05-19,3929700\r
2021-05-21,3929500\r
2021-05-26,3929500\r
2021-05-29,3929500\r
2021-06-13,4646800\r
2021-06-15,4646300\r
2021-06-18,4653900\r
2021-07-23,4688500\r
2021-07-25,4720300\r
2021-07-28,4720300\r
2021-07-30,4684500\r
2021-08-02,4702400\r
2021-08-07,4663200\r
2021-08-09,4663200\r
2021-08-12,4663200\r
2021-08-17,4628800\r
2021-08-19,4628800\r
2021-08-22,4680400\r
2021-08-24,4680400\r
2021-08-27,4633800\r
2021-08-29,4665600\r
2021-09-01,4654800\r
2021-09-06,4607200\r
2021-09-11,4432800\r
2021-09-21,4260600\r
2021-10-06,3758300\r
2021-10-11,3808200\r
2021-10-13,3860400\r
2021-10-16,3795000\r
2021-10-18,3868800\r
2022-04-09,3136900\r
2022-04-11,3136900\r
2022-04-14,3137000\r
2022-04-16,3133300\r
2022-04-19,3296400\r
2022-04-24,3302300\r
2022-04-26,3302300\r
2022-04-29,3362700\r
2022-05-29,4076700\r
2022-05-31,4084900\r
2022-07-03,4124400\r
2022-07-05,4124400\r
2022-07-08,4154100\r
2022-07-10,4154100\r
2022-07-13,4154100\r
2022-08-12,4100800\r
2022-08-14,4094100\r
2022-08-19,4083000\r
2022-08-22,4087800\r
2022-09-11,4153300\r
2022-09-16,4156100\r
2022-09-18,4156100\r
2022-09-26,4064300\r
2022-09-28,4008500\r
2022-10-01,4040000\r
2022-10-03,4040000\r
2022-10-06,4053500\r
2022-10-11,4072700\r
2022-10-13,4082900\r
2022-10-16,4054500\r
2022-10-18,4050600\r
2023-03-05,3945600\r
2023-03-07,3945600\r
2023-03-10,3945600\r
2023-03-12,3945600\r
2023-03-15,3945600\r
2023-03-25,4021800\r
2023-03-27,4021800\r
2023-03-30,4050700\r
2023-04-01,4102200\r
2023-04-04,4102200\r
2023-04-06,4100700\r
2023-04-09,4100700\r
2023-04-14,4085800\r
2023-04-16,4085800\r
2023-04-19,4086300\r
2023-04-24,4105100\r
2023-04-26,4079300\r
2023-05-04,4180500\r
2023-06-23,4765600\r
2023-06-25,4765600\r
2023-06-28,4766000\r
2023-07-08,4732100\r
2023-07-10,4732100\r
2023-07-13,4716900\r
2023-07-15,4724300\r
2023-07-18,4724300\r
2023-07-20,4712800\r
2023-07-23,4714800\r
2023-07-25,4672800\r
2023-07-28,4681900\r
2023-07-30,4681900\r
2023-08-02,4684600\r
2023-08-04,4672500\r
2023-08-07,4689500\r
2023-08-09,4694700\r
2023-08-12,4662800\r
2023-08-14,4686700\r
2023-08-17,4668100\r
2023-08-19,4651000\r
2023-08-22,4636400\r
2023-08-24,4593700\r
2023-08-29,4582300\r
2023-09-01,4613900\r
2023-09-03,4553000\r
2023-09-06,4567700\r
2023-09-08,4567700\r
2023-09-11,4464500\r
2023-09-13,4479000\r
2023-09-26,3965600\r
2023-09-28,3965600\r
2023-10-01,3980200\r
2023-10-03,3980200\r
`;export{r as default};
