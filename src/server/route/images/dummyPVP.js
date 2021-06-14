const matchResults = [
        {
            "id": "D36CFCFF-4744-446E-8469-085C68C6F10F",
            "map_id": 1163,
            "started": "2021-06-06T03:25:48.540Z",
            "ended": "2021-06-06T03:34:43.540Z",
            "result": "Victory",
            "team": "Red",
            "profession": "Necromancer",
            "rating_type": "Ranked",
            "rating_change": 13,
            "season": "7B488B5A-4C9D-459B-8599-3836AEFB1401",
            "scores": {
                "red": 500,
                "blue": 272
            }
        },
        {
            "id": "C963BC0B-35E8-4A86-BE85-37EAA7FC09B0",
            "map_id": 549,
            "started": "2021-06-07T02:24:37.720Z",
            "ended": "2021-06-07T02:34:03.720Z",
            "result": "Victory",
            "team": "Blue",
            "profession": "Necromancer",
            "rating_type": "Ranked",
            "rating_change": 11,
            "season": "7B488B5A-4C9D-459B-8599-3836AEFB1401",
            "scores": {
                "red": 232,
                "blue": 500
            }
        },
        {
            "id": "BF63B41E-FA99-4187-8373-56504C5552D7",
            "map_id": 549,
            "started": "2021-06-08T02:02:58.908Z",
            "ended": "2021-06-08T02:13:03.908Z",
            "result": "Victory",
            "team": "Blue",
            "profession": "Necromancer",
            "rating_type": "Ranked",
            "rating_change": 13,
            "season": "7B488B5A-4C9D-459B-8599-3836AEFB1401",
            "scores": {
                "red": 279,
                "blue": 501
            }
        },
        {
            "id": "AF227A9A-B517-4564-BAA7-5A5F75D3C6D0",
            "map_id": 795,
            "started": "2021-06-07T02:08:22.906Z",
            "ended": "2021-06-07T02:19:27.906Z",
            "result": "Victory",
            "team": "Red",
            "profession": "Necromancer",
            "rating_type": "Ranked",
            "rating_change": 13,
            "season": "7B488B5A-4C9D-459B-8599-3836AEFB1401",
            "scores": {
                "red": 500,
                "blue": 386
            }
        },
        {
            "id": "A58DB17C-5486-40D6-B73A-11D9F261B8CD",
            "map_id": 1171,
            "started": "2021-06-08T02:23:35.722Z",
            "ended": "2021-06-08T02:30:27.722Z",
            "result": "Victory",
            "team": "Blue",
            "profession": "Necromancer",
            "rating_type": "Ranked",
            "rating_change": 13,
            "season": "7B488B5A-4C9D-459B-8599-3836AEFB1401",
            "scores": {
                "red": 52,
                "blue": 500
            }
        },
        {
            "id": "96FE8070-A7DA-4AD8-97FC-BF7D41436524",
            "map_id": 554,
            "started": "2021-06-06T04:17:32.083Z",
            "ended": "2021-06-06T04:26:14.083Z",
            "result": "Victory",
            "team": "Red",
            "profession": "Necromancer",
            "rating_type": "Ranked",
            "rating_change": 13,
            "season": "7B488B5A-4C9D-459B-8599-3836AEFB1401",
            "scores": {
                "red": 500,
                "blue": 326
            }
        },
        {
            "id": "84EFAA83-DDA0-455A-B519-0E935A55719F",
            "map_id": 1171,
            "started": "2021-06-06T03:07:36.380Z",
            "ended": "2021-06-06T03:19:59.380Z",
            "result": "Victory",
            "team": "Red",
            "profession": "Necromancer",
            "rating_type": "Ranked",
            "rating_change": 13,
            "season": "7B488B5A-4C9D-459B-8599-3836AEFB1401",
            "scores": {
                "red": 500,
                "blue": 415
            }
        },
        {
            "id": "7B366158-060F-4335-9DB9-CC5C31F6EAA4",
            "map_id": 1305,
            "started": "2021-06-06T03:39:59.214Z",
            "ended": "2021-06-06T03:51:09.214Z",
            "result": "Victory",
            "team": "Blue",
            "profession": "Necromancer",
            "rating_type": "Ranked",
            "rating_change": 12,
            "season": "7B488B5A-4C9D-459B-8599-3836AEFB1401",
            "scores": {
                "red": 231,
                "blue": 500
            }
        },
        {
            "id": "3FD02465-ACB4-47AC-85F3-A0B338EC8A0B",
            "map_id": 1305,
            "started": "2021-06-07T02:40:45.964Z",
            "ended": "2021-06-07T02:53:19.964Z",
            "result": "Victory",
            "team": "Blue",
            "profession": "Necromancer",
            "rating_type": "Ranked",
            "rating_change": 12,
            "season": "7B488B5A-4C9D-459B-8599-3836AEFB1401",
            "scores": {
                "red": 426,
                "blue": 500
            }
        },
        {
            "id": "04B2760E-3A35-40C7-95BB-9D4AEAD6C400",
            "map_id": 554,
            "started": "2021-06-08T01:50:50.408Z",
            "ended": "2021-06-08T01:59:11.408Z",
            "result": "Defeat",
            "team": "Blue",
            "profession": "Necromancer",
            "rating_type": "Ranked",
            "rating_change": -13,
            "season": "7B488B5A-4C9D-459B-8599-3836AEFB1401",
            "scores": {
                "red": 518,
                "blue": 288
            }
        }
    ];

const seasons = [
    {
        "current": {
            "total_points": 241,
            "division": 3,
            "tier": 0,
            "points": 1,
            "repeats": 0,
            "rating": 1193
        },
        "best": {
            "total_points": 241,
            "division": 3,
            "tier": 0,
            "points": 1,
            "repeats": 0
        },
        "season_id": "020A557D-387A-4A6F-904B-D0A0DBEE68FB"
    },
    {
        "current": {
            "total_points": 22,
            "division": 0,
            "tier": 1,
            "points": 2,
            "repeats": 0,
            "rating": 1360
        },
        "best": {
            "total_points": 22,
            "division": 0,
            "tier": 1,
            "points": 2,
            "repeats": 0
        },
        "season_id": "B88D04C3-E53F-41AF-8770-A84D75DA10EC"
    },
    {
        "current": {
            "total_points": 54,
            "division": 0,
            "tier": 2,
            "points": 14,
            "repeats": 0,
            "rating": 1394
        },
        "best": {
            "total_points": 54,
            "division": 0,
            "tier": 2,
            "points": 14,
            "repeats": 0
        },
        "season_id": "8EF1F7AD-D51F-4891-826F-6BFD067F4FDC"
    },
    {
        "current": {
            "total_points": 60,
            "division": 1,
            "tier": 0,
            "points": 0,
            "repeats": 0,
            "rating": 1207
        },
        "best": {
            "total_points": 60,
            "division": 1,
            "tier": 0,
            "points": 0,
            "repeats": 0
        },
        "season_id": "12130597-EE16-4625-89D9-6267241CC893"
    },
    {
        "current": {
            "total_points": 75,
            "division": 1,
            "tier": 0,
            "points": 15,
            "repeats": 0,
            "rating": 1165
        },
        "best": {
            "total_points": 75,
            "division": 1,
            "tier": 0,
            "points": 15,
            "repeats": 0
        },
        "season_id": "38A58E29-D4EB-4429-9226-D8C80DC7CF53"
    },
    {
        "current": {
            "total_points": 403,
            "division": 4,
            "tier": 2,
            "points": 3,
            "repeats": 0,
            "rating": 1324
        },
        "best": {
            "total_points": 403,
            "division": 4,
            "tier": 2,
            "points": 3,
            "repeats": 0
        },
        "season_id": "7B488B5A-4C9D-459B-8599-3836AEFB1401"
    },
    {
        "current": {
            "total_points": 1219,
            "division": 5,
            "tier": 0,
            "points": 9,
            "repeats": 4,
            "rating": 1273
        },
        "best": {
            "total_points": 1219,
            "division": 5,
            "tier": 0,
            "points": 9,
            "repeats": 4
        },
        "season_id": "99373A3D-1E25-447C-9E18-C347871AF239"
    }
];

const standings = [
    {
        "current": {
            "total_points": 241,
            "division": 3,
            "tier": 0,
            "points": 1,
            "repeats": 0,
            "rating": 1193
        },
        "best": {
            "total_points": 241,
            "division": 3,
            "tier": 0,
            "points": 1,
            "repeats": 0
        },
        "season_id": "020A557D-387A-4A6F-904B-D0A0DBEE68FB"
    },
    {
        "current": {
            "total_points": 22,
            "division": 0,
            "tier": 1,
            "points": 2,
            "repeats": 0,
            "rating": 1360
        },
        "best": {
            "total_points": 22,
            "division": 0,
            "tier": 1,
            "points": 2,
            "repeats": 0
        },
        "season_id": "B88D04C3-E53F-41AF-8770-A84D75DA10EC"
    },
    {
        "current": {
            "total_points": 54,
            "division": 0,
            "tier": 2,
            "points": 14,
            "repeats": 0,
            "rating": 1394
        },
        "best": {
            "total_points": 54,
            "division": 0,
            "tier": 2,
            "points": 14,
            "repeats": 0
        },
        "season_id": "8EF1F7AD-D51F-4891-826F-6BFD067F4FDC"
    },
    {
        "current": {
            "total_points": 60,
            "division": 1,
            "tier": 0,
            "points": 0,
            "repeats": 0,
            "rating": 1207
        },
        "best": {
            "total_points": 60,
            "division": 1,
            "tier": 0,
            "points": 0,
            "repeats": 0
        },
        "season_id": "12130597-EE16-4625-89D9-6267241CC893"
    },
    {
        "current": {
            "total_points": 75,
            "division": 1,
            "tier": 0,
            "points": 15,
            "repeats": 0,
            "rating": 1165
        },
        "best": {
            "total_points": 75,
            "division": 1,
            "tier": 0,
            "points": 15,
            "repeats": 0
        },
        "season_id": "38A58E29-D4EB-4429-9226-D8C80DC7CF53"
    },
    {
        "current": {
            "total_points": 403,
            "division": 4,
            "tier": 2,
            "points": 3,
            "repeats": 0,
            "rating": 1324
        },
        "best": {
            "total_points": 403,
            "division": 4,
            "tier": 2,
            "points": 3,
            "repeats": 0
        },
        "season_id": "7B488B5A-4C9D-459B-8599-3836AEFB1401"
    },
    {
        "current": {
            "total_points": 1219,
            "division": 5,
            "tier": 0,
            "points": 9,
            "repeats": 4,
            "rating": 1273
        },
        "best": {
            "total_points": 1219,
            "division": 5,
            "tier": 0,
            "points": 9,
            "repeats": 4
        },
        "season_id": "99373A3D-1E25-447C-9E18-C347871AF239"
    }
];

const professions = [
    {
        "id": "Necromancer",
        "name": "Necromancer",
        "icon": "https://render.guildwars2.com/file/AE56F8670807B87CF6EEE3FC7E6CB9710959E004/156638.png",
        "icon_big": "https://render.guildwars2.com/file/CA5A4E96080FCF057C9DA0ED35C693477580421C/156637.png",
        "specializations": [
            53,
            39,
            2,
            19,
            50,
            34,
            60
        ],
        "weapons": {
            "Axe": {
                "flags": [
                    "Mainhand"
                ],
                "skills": [
                    {
                        "id": 10561,
                        "slot": "Weapon_1"
                    },
                    {
                        "id": 10528,
                        "slot": "Weapon_2"
                    },
                    {
                        "id": 10701,
                        "slot": "Weapon_3"
                    }
                ]
            },
            "Dagger": {
                "flags": [
                    "Mainhand",
                    "Offhand"
                ],
                "skills": [
                    {
                        "id": 10702,
                        "slot": "Weapon_1"
                    },
                    {
                        "id": 10563,
                        "slot": "Weapon_2"
                    },
                    {
                        "id": 10529,
                        "slot": "Weapon_3"
                    },
                    {
                        "id": 10705,
                        "slot": "Weapon_4"
                    },
                    {
                        "id": 10706,
                        "slot": "Weapon_5"
                    }
                ]
            },
            "Focus": {
                "flags": [
                    "Offhand"
                ],
                "skills": [
                    {
                        "id": 55050,
                        "slot": "Weapon_4"
                    },
                    {
                        "id": 10555,
                        "slot": "Weapon_5"
                    }
                ]
            },
            "Greatsword": {
                "specialization": 34,
                "flags": [
                    "TwoHand"
                ],
                "skills": [
                    {
                        "id": 29705,
                        "slot": "Weapon_1"
                    },
                    {
                        "id": 30163,
                        "slot": "Weapon_2"
                    },
                    {
                        "id": 30860,
                        "slot": "Weapon_3"
                    },
                    {
                        "id": 29855,
                        "slot": "Weapon_4"
                    },
                    {
                        "id": 29740,
                        "slot": "Weapon_5"
                    }
                ]
            },
            "Spear": {
                "flags": [
                    "TwoHand",
                    "Aquatic"
                ],
                "skills": [
                    {
                        "id": 10692,
                        "slot": "Weapon_1"
                    },
                    {
                        "id": 10694,
                        "slot": "Weapon_2"
                    },
                    {
                        "id": 10619,
                        "slot": "Weapon_3"
                    },
                    {
                        "id": 10695,
                        "slot": "Weapon_4"
                    },
                    {
                        "id": 10616,
                        "slot": "Weapon_5"
                    }
                ]
            },
            "Scepter": {
                "flags": [
                    "Mainhand"
                ],
                "skills": [
                    {
                        "id": 10698,
                        "slot": "Weapon_1"
                    },
                    {
                        "id": 10532,
                        "slot": "Weapon_2"
                    },
                    {
                        "id": 10709,
                        "slot": "Weapon_3"
                    }
                ]
            },
            "Staff": {
                "flags": [
                    "TwoHand"
                ],
                "skills": [
                    {
                        "id": 10596,
                        "slot": "Weapon_1"
                    },
                    {
                        "id": 19117,
                        "slot": "Weapon_2"
                    },
                    {
                        "id": 10605,
                        "slot": "Weapon_3"
                    },
                    {
                        "id": 19116,
                        "slot": "Weapon_4"
                    },
                    {
                        "id": 19115,
                        "slot": "Weapon_5"
                    }
                ]
            },
            "Torch": {
                "specialization": 60,
                "flags": [
                    "Offhand"
                ],
                "skills": [
                    {
                        "id": 45846,
                        "slot": "Weapon_4"
                    },
                    {
                        "id": 44296,
                        "slot": "Weapon_5"
                    }
                ]
            },
            "Trident": {
                "flags": [
                    "TwoHand",
                    "Aquatic"
                ],
                "skills": [
                    {
                        "id": 10623,
                        "slot": "Weapon_1"
                    },
                    {
                        "id": 10624,
                        "slot": "Weapon_2"
                    },
                    {
                        "id": 10625,
                        "slot": "Weapon_3"
                    },
                    {
                        "id": 10628,
                        "slot": "Weapon_4"
                    },
                    {
                        "id": 10629,
                        "slot": "Weapon_5"
                    }
                ]
            },
            "Warhorn": {
                "flags": [
                    "Offhand"
                ],
                "skills": [
                    {
                        "id": 10556,
                        "slot": "Weapon_4"
                    },
                    {
                        "id": 10557,
                        "slot": "Weapon_5"
                    }
                ]
            }
        },
        "flags": [],
        "skills": [
            {
                "id": 10547,
                "slot": "Heal",
                "type": "Heal"
            },
            {
                "id": 10548,
                "slot": "Heal",
                "type": "Heal"
            },
            {
                "id": 10527,
                "slot": "Heal",
                "type": "Heal"
            },
            {
                "id": 21762,
                "slot": "Heal",
                "type": "Heal"
            },
            {
                "id": 10546,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10545,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10609,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10607,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10541,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10533,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10589,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10543,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10622,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10612,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10562,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10611,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10583,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10620,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10608,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10685,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10689,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10606,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10602,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10544,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 10574,
                "slot": "Profession_1",
                "type": "Profession"
            },
            {
                "id": 10554,
                "slot": "Downed_1",
                "type": "Profession"
            },
            {
                "id": 10690,
                "slot": "Downed_1",
                "type": "Profession"
            },
            {
                "id": 10549,
                "slot": "Elite",
                "type": "Elite"
            },
            {
                "id": 10646,
                "slot": "Elite",
                "type": "Elite"
            },
            {
                "id": 10550,
                "slot": "Elite",
                "type": "Elite"
            },
            {
                "id": 30792,
                "slot": "Profession_1",
                "type": "Profession"
            },
            {
                "id": 29442,
                "slot": "Downed_1",
                "type": "Profession"
            },
            {
                "id": 29458,
                "slot": "Downed_1",
                "type": "Profession"
            },
            {
                "id": 30278,
                "slot": "Downed_1",
                "type": "Profession"
            },
            {
                "id": 30825,
                "slot": "Downed_2",
                "type": "Profession"
            },
            {
                "id": 29958,
                "slot": "Downed_3",
                "type": "Profession"
            },
            {
                "id": 30504,
                "slot": "Downed_4",
                "type": "Profession"
            },
            {
                "id": 30557,
                "slot": "Weapon_5",
                "type": "Profession"
            },
            {
                "id": 29414,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 30670,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 29666,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 30772,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 30488,
                "slot": "Heal",
                "type": "Heal"
            },
            {
                "id": 30105,
                "slot": "Elite",
                "type": "Elite"
            },
            {
                "id": 43148,
                "slot": "Heal",
                "type": "Heal"
            },
            {
                "id": 42355,
                "slot": "Elite",
                "type": "Elite"
            },
            {
                "id": 40274,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 42935,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 42917,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 41615,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 40813,
                "slot": "Profession_2",
                "type": "Profession"
            },
            {
                "id": 43448,
                "slot": "Profession_3",
                "type": "Profession"
            },
            {
                "id": 44428,
                "slot": "Profession_4",
                "type": "Profession"
            },
            {
                "id": 44663,
                "slot": "Profession_5",
                "type": "Profession"
            },
            {
                "id": 44946,
                "slot": "Profession_1",
                "type": "Profession"
            },
            {
                "id": 42297,
                "slot": "Profession_1",
                "type": "Profession"
            },
            {
                "id": 46474,
                "slot": "Profession_1",
                "type": "Profession"
            },
            {
                "id": 46473,
                "slot": "Profession_1",
                "type": "Profession"
            }
        ],
        "training": [
            {
                "id": 23,
                "category": "Skills",
                "name": "Signet Training",
                "track": [
                    {
                        "cost": 2,
                        "type": "Skill",
                        "skill_id": 21762
                    },
                    {
                        "cost": 4,
                        "type": "Skill",
                        "skill_id": 10612
                    },
                    {
                        "cost": 7,
                        "type": "Skill",
                        "skill_id": 10622
                    },
                    {
                        "cost": 11,
                        "type": "Skill",
                        "skill_id": 10562
                    },
                    {
                        "cost": 15,
                        "type": "Skill",
                        "skill_id": 10611
                    }
                ]
            },
            {
                "id": 110,
                "category": "Skills",
                "name": "Corruption Training",
                "track": [
                    {
                        "cost": 2,
                        "type": "Skill",
                        "skill_id": 10689
                    },
                    {
                        "cost": 5,
                        "type": "Skill",
                        "skill_id": 10602
                    },
                    {
                        "cost": 9,
                        "type": "Skill",
                        "skill_id": 10544
                    },
                    {
                        "cost": 13,
                        "type": "Skill",
                        "skill_id": 10606
                    },
                    {
                        "cost": 22,
                        "type": "Skill",
                        "skill_id": 10549
                    }
                ]
            },
            {
                "id": 29,
                "category": "Skills",
                "name": "Minion Training",
                "track": [
                    {
                        "cost": 2,
                        "type": "Skill",
                        "skill_id": 10547
                    },
                    {
                        "cost": 4,
                        "type": "Skill",
                        "skill_id": 10541
                    },
                    {
                        "cost": 7,
                        "type": "Skill",
                        "skill_id": 10533
                    },
                    {
                        "cost": 11,
                        "type": "Skill",
                        "skill_id": 10589
                    },
                    {
                        "cost": 15,
                        "type": "Skill",
                        "skill_id": 10543
                    },
                    {
                        "cost": 24,
                        "type": "Skill",
                        "skill_id": 10646
                    }
                ]
            },
            {
                "id": 79,
                "category": "Skills",
                "name": "Well Training",
                "track": [
                    {
                        "cost": 2,
                        "type": "Skill",
                        "skill_id": 10527
                    },
                    {
                        "cost": 4,
                        "type": "Skill",
                        "skill_id": 10546
                    },
                    {
                        "cost": 7,
                        "type": "Skill",
                        "skill_id": 10607
                    },
                    {
                        "cost": 11,
                        "type": "Skill",
                        "skill_id": 10545
                    },
                    {
                        "cost": 15,
                        "type": "Skill",
                        "skill_id": 10609
                    }
                ]
            },
            {
                "id": 38,
                "category": "Skills",
                "name": "Spectral Training",
                "track": [
                    {
                        "cost": 2,
                        "type": "Skill",
                        "skill_id": 10620
                    },
                    {
                        "cost": 5,
                        "type": "Skill",
                        "skill_id": 10583
                    },
                    {
                        "cost": 9,
                        "type": "Skill",
                        "skill_id": 10608
                    },
                    {
                        "cost": 13,
                        "type": "Skill",
                        "skill_id": 10685
                    },
                    {
                        "cost": 22,
                        "type": "Skill",
                        "skill_id": 10550
                    }
                ]
            },
            {
                "id": 44,
                "category": "Specializations",
                "name": "Spite",
                "track": [
                    {
                        "cost": 2,
                        "type": "Trait",
                        "trait_id": 913
                    },
                    {
                        "cost": 5,
                        "type": "Trait",
                        "trait_id": 914
                    },
                    {
                        "cost": 8,
                        "type": "Trait",
                        "trait_id": 916
                    },
                    {
                        "cost": 11,
                        "type": "Trait",
                        "trait_id": 1863
                    },
                    {
                        "cost": 15,
                        "type": "Trait",
                        "trait_id": 915
                    },
                    {
                        "cost": 20,
                        "type": "Trait",
                        "trait_id": 899
                    },
                    {
                        "cost": 25,
                        "type": "Trait",
                        "trait_id": 829
                    },
                    {
                        "cost": 30,
                        "type": "Trait",
                        "trait_id": 909
                    },
                    {
                        "cost": 36,
                        "type": "Trait",
                        "trait_id": 917
                    },
                    {
                        "cost": 44,
                        "type": "Trait",
                        "trait_id": 919
                    },
                    {
                        "cost": 52,
                        "type": "Trait",
                        "trait_id": 853
                    },
                    {
                        "cost": 60,
                        "type": "Trait",
                        "trait_id": 903
                    }
                ]
            },
            {
                "id": 22,
                "category": "Specializations",
                "name": "Curses",
                "track": [
                    {
                        "cost": 2,
                        "type": "Trait",
                        "trait_id": 802
                    },
                    {
                        "cost": 5,
                        "type": "Trait",
                        "trait_id": 1883
                    },
                    {
                        "cost": 8,
                        "type": "Trait",
                        "trait_id": 2013
                    },
                    {
                        "cost": 11,
                        "type": "Trait",
                        "trait_id": 815
                    },
                    {
                        "cost": 15,
                        "type": "Trait",
                        "trait_id": 803
                    },
                    {
                        "cost": 20,
                        "type": "Trait",
                        "trait_id": 816
                    },
                    {
                        "cost": 25,
                        "type": "Trait",
                        "trait_id": 1693
                    },
                    {
                        "cost": 30,
                        "type": "Trait",
                        "trait_id": 812
                    },
                    {
                        "cost": 36,
                        "type": "Trait",
                        "trait_id": 810
                    },
                    {
                        "cost": 44,
                        "type": "Trait",
                        "trait_id": 813
                    },
                    {
                        "cost": 52,
                        "type": "Trait",
                        "trait_id": 1696
                    },
                    {
                        "cost": 60,
                        "type": "Trait",
                        "trait_id": 801
                    }
                ]
            },
            {
                "id": 80,
                "category": "Specializations",
                "name": "Death Magic",
                "track": [
                    {
                        "cost": 2,
                        "type": "Trait",
                        "trait_id": 856
                    },
                    {
                        "cost": 5,
                        "type": "Trait",
                        "trait_id": 820
                    },
                    {
                        "cost": 8,
                        "type": "Trait",
                        "trait_id": 857
                    },
                    {
                        "cost": 11,
                        "type": "Trait",
                        "trait_id": 1922
                    },
                    {
                        "cost": 15,
                        "type": "Trait",
                        "trait_id": 839
                    },
                    {
                        "cost": 20,
                        "type": "Trait",
                        "trait_id": 858
                    },
                    {
                        "cost": 25,
                        "type": "Trait",
                        "trait_id": 860
                    },
                    {
                        "cost": 30,
                        "type": "Trait",
                        "trait_id": 855
                    },
                    {
                        "cost": 36,
                        "type": "Trait",
                        "trait_id": 1929
                    },
                    {
                        "cost": 44,
                        "type": "Trait",
                        "trait_id": 842
                    },
                    {
                        "cost": 52,
                        "type": "Trait",
                        "trait_id": 1940
                    },
                    {
                        "cost": 60,
                        "type": "Trait",
                        "trait_id": 1694
                    }
                ]
            },
            {
                "id": 28,
                "category": "Specializations",
                "name": "Blood Magic",
                "track": [
                    {
                        "cost": 2,
                        "type": "Trait",
                        "trait_id": 792
                    },
                    {
                        "cost": 5,
                        "type": "Trait",
                        "trait_id": 780
                    },
                    {
                        "cost": 8,
                        "type": "Trait",
                        "trait_id": 788
                    },
                    {
                        "cost": 11,
                        "type": "Trait",
                        "trait_id": 1876
                    },
                    {
                        "cost": 15,
                        "type": "Trait",
                        "trait_id": 783
                    },
                    {
                        "cost": 20,
                        "type": "Trait",
                        "trait_id": 789
                    },
                    {
                        "cost": 25,
                        "type": "Trait",
                        "trait_id": 799
                    },
                    {
                        "cost": 30,
                        "type": "Trait",
                        "trait_id": 1844
                    },
                    {
                        "cost": 36,
                        "type": "Trait",
                        "trait_id": 1931
                    },
                    {
                        "cost": 44,
                        "type": "Trait",
                        "trait_id": 782
                    },
                    {
                        "cost": 52,
                        "type": "Trait",
                        "trait_id": 1692
                    },
                    {
                        "cost": 60,
                        "type": "Trait",
                        "trait_id": 778
                    }
                ]
            },
            {
                "id": 57,
                "category": "Specializations",
                "name": "Soul Reaping",
                "track": [
                    {
                        "cost": 2,
                        "type": "Trait",
                        "trait_id": 887
                    },
                    {
                        "cost": 5,
                        "type": "Trait",
                        "trait_id": 875
                    },
                    {
                        "cost": 8,
                        "type": "Trait",
                        "trait_id": 898
                    },
                    {
                        "cost": 11,
                        "type": "Trait",
                        "trait_id": 888
                    },
                    {
                        "cost": 15,
                        "type": "Trait",
                        "trait_id": 891
                    },
                    {
                        "cost": 20,
                        "type": "Trait",
                        "trait_id": 894
                    },
                    {
                        "cost": 25,
                        "type": "Trait",
                        "trait_id": 861
                    },
                    {
                        "cost": 30,
                        "type": "Trait",
                        "trait_id": 892
                    },
                    {
                        "cost": 36,
                        "type": "Trait",
                        "trait_id": 874
                    },
                    {
                        "cost": 44,
                        "type": "Trait",
                        "trait_id": 889
                    },
                    {
                        "cost": 52,
                        "type": "Trait",
                        "trait_id": 893
                    },
                    {
                        "cost": 60,
                        "type": "Trait",
                        "trait_id": 905
                    }
                ]
            },
            {
                "id": 108,
                "category": "EliteSpecializations",
                "name": "Reaper",
                "track": [
                    {
                        "cost": 30,
                        "type": "Trait",
                        "trait_id": 1985
                    },
                    {
                        "cost": 40,
                        "type": "Trait",
                        "trait_id": 1905
                    },
                    {
                        "cost": 55,
                        "type": "Skill",
                        "skill_id": 30488
                    },
                    {
                        "cost": 65,
                        "type": "Trait",
                        "trait_id": 1974
                    },
                    {
                        "cost": 75,
                        "type": "Trait",
                        "trait_id": 2020
                    },
                    {
                        "cost": 85,
                        "type": "Trait",
                        "trait_id": 2026
                    },
                    {
                        "cost": 95,
                        "type": "Trait",
                        "trait_id": 1879
                    },
                    {
                        "cost": 110,
                        "type": "Skill",
                        "skill_id": 29414
                    },
                    {
                        "cost": 125,
                        "type": "Skill",
                        "skill_id": 30670
                    },
                    {
                        "cost": 135,
                        "type": "Trait",
                        "trait_id": 1969
                    },
                    {
                        "cost": 145,
                        "type": "Trait",
                        "trait_id": 2008
                    },
                    {
                        "cost": 155,
                        "type": "Trait",
                        "trait_id": 2031
                    },
                    {
                        "cost": 165,
                        "type": "Trait",
                        "trait_id": 2018
                    },
                    {
                        "cost": 180,
                        "type": "Skill",
                        "skill_id": 29666
                    },
                    {
                        "cost": 190,
                        "type": "Trait",
                        "trait_id": 1932
                    },
                    {
                        "cost": 200,
                        "type": "Trait",
                        "trait_id": 1919
                    },
                    {
                        "cost": 210,
                        "type": "Trait",
                        "trait_id": 2021
                    },
                    {
                        "cost": 225,
                        "type": "Skill",
                        "skill_id": 30772
                    },
                    {
                        "cost": 250,
                        "type": "Skill",
                        "skill_id": 30105
                    }
                ]
            },
            {
                "id": 412,
                "category": "EliteSpecializations",
                "name": "Scourge",
                "track": [
                    {
                        "cost": 30,
                        "type": "Trait",
                        "trait_id": 2144
                    },
                    {
                        "cost": 40,
                        "type": "Trait",
                        "trait_id": 2147
                    },
                    {
                        "cost": 50,
                        "type": "Trait",
                        "trait_id": 2074
                    },
                    {
                        "cost": 60,
                        "type": "Trait",
                        "trait_id": 2121
                    },
                    {
                        "cost": 70,
                        "type": "Trait",
                        "trait_id": 2067
                    },
                    {
                        "cost": 80,
                        "type": "Trait",
                        "trait_id": 2096
                    },
                    {
                        "cost": 90,
                        "type": "Trait",
                        "trait_id": 2164
                    },
                    {
                        "cost": 105,
                        "type": "Skill",
                        "skill_id": 43148
                    },
                    {
                        "cost": 120,
                        "type": "Skill",
                        "skill_id": 40274
                    },
                    {
                        "cost": 130,
                        "type": "Trait",
                        "trait_id": 2167
                    },
                    {
                        "cost": 140,
                        "type": "Trait",
                        "trait_id": 2059
                    },
                    {
                        "cost": 150,
                        "type": "Trait",
                        "trait_id": 2112
                    },
                    {
                        "cost": 165,
                        "type": "Skill",
                        "skill_id": 42935
                    },
                    {
                        "cost": 180,
                        "type": "Skill",
                        "skill_id": 42917
                    },
                    {
                        "cost": 190,
                        "type": "Trait",
                        "trait_id": 2102
                    },
                    {
                        "cost": 200,
                        "type": "Trait",
                        "trait_id": 2123
                    },
                    {
                        "cost": 210,
                        "type": "Trait",
                        "trait_id": 2080
                    },
                    {
                        "cost": 225,
                        "type": "Skill",
                        "skill_id": 41615
                    },
                    {
                        "cost": 250,
                        "type": "Skill",
                        "skill_id": 42355
                    }
                ]
            }
        ]
    },
    {
        "id": "Engineer",
        "name": "Engineer",
        "icon": "https://render.guildwars2.com/file/5CCB361F44CCC7256132405D31E3A24DACCF440A/156632.png",
        "icon_big": "https://render.guildwars2.com/file/A94D00911BD47CDE39A104F90C7D07DE623554ED/156631.png",
        "specializations": [
            6,
            38,
            47,
            29,
            21,
            43,
            57
        ],
        "weapons": {
            "Hammer": {
                "specialization": 43,
                "flags": [
                    "TwoHand"
                ],
                "skills": [
                    {
                        "id": 30501,
                        "slot": "Weapon_1"
                    },
                    {
                        "id": 30088,
                        "slot": "Weapon_2"
                    },
                    {
                        "id": 30665,
                        "slot": "Weapon_3"
                    },
                    {
                        "id": 29840,
                        "slot": "Weapon_4"
                    },
                    {
                        "id": 30713,
                        "slot": "Weapon_5"
                    }
                ]
            },
            "Pistol": {
                "flags": [
                    "Mainhand",
                    "Offhand"
                ],
                "skills": [
                    {
                        "id": 5827,
                        "slot": "Weapon_1"
                    },
                    {
                        "id": 5828,
                        "slot": "Weapon_2"
                    },
                    {
                        "id": 5829,
                        "slot": "Weapon_3"
                    },
                    {
                        "id": 5831,
                        "slot": "Weapon_4"
                    },
                    {
                        "id": 5830,
                        "slot": "Weapon_5"
                    }
                ]
            },
            "Rifle": {
                "flags": [
                    "TwoHand"
                ],
                "skills": [
                    {
                        "id": 6003,
                        "slot": "Weapon_1"
                    },
                    {
                        "id": 6004,
                        "slot": "Weapon_2"
                    },
                    {
                        "id": 6153,
                        "slot": "Weapon_3"
                    },
                    {
                        "id": 6154,
                        "slot": "Weapon_4"
                    },
                    {
                        "id": 6005,
                        "slot": "Weapon_5"
                    }
                ]
            },
            "Shield": {
                "flags": [
                    "Offhand"
                ],
                "skills": [
                    {
                        "id": 6053,
                        "slot": "Weapon_4"
                    },
                    {
                        "id": 6054,
                        "slot": "Weapon_5"
                    }
                ]
            },
            "Speargun": {
                "flags": [
                    "TwoHand",
                    "Aquatic"
                ],
                "skills": [
                    {
                        "id": 6148,
                        "slot": "Weapon_1"
                    },
                    {
                        "id": 6147,
                        "slot": "Weapon_2"
                    },
                    {
                        "id": 50380,
                        "slot": "Weapon_3"
                    },
                    {
                        "id": 6149,
                        "slot": "Weapon_4"
                    },
                    {
                        "id": 6145,
                        "slot": "Weapon_5"
                    }
                ]
            },
            "Sword": {
                "specialization": 57,
                "flags": [
                    "Mainhand"
                ],
                "skills": [
                    {
                        "id": 43476,
                        "slot": "Weapon_1"
                    },
                    {
                        "id": 44110,
                        "slot": "Weapon_2"
                    },
                    {
                        "id": 40160,
                        "slot": "Weapon_3"
                    }
                ]
            }
        },
        "flags": [
            "NoWeaponSwap"
        ],
        "skills": [
            {
                "id": 5834,
                "slot": "Heal",
                "type": "Heal"
            },
            {
                "id": 5802,
                "slot": "Heal",
                "type": "Heal"
            },
            {
                "id": 21659,
                "slot": "Heal",
                "type": "Heal"
            },
            {
                "id": 5857,
                "slot": "Heal",
                "type": "Heal"
            },
            {
                "id": 5818,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5836,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5837,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5838,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5912,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5821,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5862,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5861,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5860,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5968,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5805,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5812,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5927,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5933,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5904,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 6161,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5865,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5910,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5811,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5825,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 5868,
                "slot": "Elite",
                "type": "Elite"
            },
            {
                "id": 5832,
                "slot": "Elite",
                "type": "Elite"
            },
            {
                "id": 30800,
                "slot": "Elite",
                "type": "Elite"
            },
            {
                "id": 30357,
                "slot": "Heal",
                "type": "Heal"
            },
            {
                "id": 30101,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 29739,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 31248,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 29921,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 30815,
                "slot": "Elite",
                "type": "Elite"
            },
            {
                "id": 56920,
                "slot": "Profession_5",
                "type": "Profession"
            },
            {
                "id": 40507,
                "slot": "Heal",
                "type": "Heal"
            },
            {
                "id": 42009,
                "slot": "Elite",
                "type": "Elite"
            },
            {
                "id": 43739,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 42842,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 44646,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 41218,
                "slot": "Utility",
                "type": "Utility"
            },
            {
                "id": 42938,
                "slot": "Profession_5",
                "type": "Profession"
            }
        ],
        "training": [
            {
                "id": 21,
                "category": "Skills",
                "name": "Elixir Training",
                "track": [
                    {
                        "cost": 2,
                        "type": "Skill",
                        "skill_id": 5821
                    },
                    {
                        "cost": 5,
                        "type": "Skill",
                        "skill_id": 5860
                    },
                    {
                        "cost": 8,
                        "type": "Skill",
                        "skill_id": 5968
                    },
                    {
                        "cost": 12,
                        "type": "Skill",
                        "skill_id": 5861
                    },
                    {
                        "cost": 17,
                        "type": "Skill",
                        "skill_id": 5862
                    },
                    {
                        "cost": 25,
                        "type": "Skill",
                        "skill_id": 5832
                    }
                ]
            },
            {
                "id": 95,
                "category": "Skills",
                "name": "Turret Training",
                "track": [
                    {
                        "cost": 2,
                        "type": "Skill",
                        "skill_id": 5857
                    },
                    {
                        "cost": 4,
                        "type": "Skill",
                        "skill_id": 5818
                    },
                    {
                        "cost": 7,
                        "type": "Skill",
                        "skill_id": 5836
                    },
                    {
                        "cost": 10,
                        "type": "Skill",
                        "skill_id": 5838
                    },
                    {
                        "cost": 14,
                        "type": "Skill",
                        "skill_id": 5837
                    },
                    {
                        "cost": 19,
                        "type": "Skill",
                        "skill_id": 5912
                    },
                    {
                        "cost": 27,
                        "type": "Skill",
                        "skill_id": 5868
                    }
                ]
            },
            {
                "id": 71,
                "category": "Skills",
                "name": "Kit Training",
                "track": [
                    {
                        "cost": 2,
                        "type": "Skill",
                        "skill_id": 5802
                    },
                    {
                        "cost": 4,
                        "type": "Skill",
                        "skill_id": 5927
                    },
                    {
                        "cost": 7,
                        "type": "Skill",
                        "skill_id": 5805
                    },
                    {
                        "cost": 10,
                        "type": "Skill",
                        "skill_id": 5933
                    },
                    {
                        "cost": 14,
                        "type": "Skill",
                        "skill_id": 5904
                    },
                    {
                        "cost": 19,
                        "type": "Skill",
                        "skill_id": 5812
                    },
                    {
                        "cost": 27,
                        "type": "Skill",
                        "skill_id": 30800
                    }
                ]
            },
            {
                "id": 75,
                "category": "Skills",
                "name": "Gadget Training",
                "track": [
                    {
                        "cost": 2,
                        "type": "Skill",
                        "skill_id": 21659
                    },
                    {
                        "cost": 4,
                        "type": "Skill",
                        "skill_id": 5910
                    },
                    {
                        "cost": 7,
                        "type": "Skill",
                        "skill_id": 5865
                    },
                    {
                        "cost": 10,
                        "type": "Skill",
                        "skill_id": 6161
                    },
                    {
                        "cost": 14,
                        "type": "Skill",
                        "skill_id": 5811
                    },
                    {
                        "cost": 19,
                        "type": "Skill",
                        "skill_id": 5825
                    }
                ]
            },
            {
                "id": 61,
                "category": "Specializations",
                "name": "Explosives",
                "track": [
                    {
                        "cost": 2,
                        "type": "Trait",
                        "trait_id": 432
                    },
                    {
                        "cost": 5,
                        "type": "Trait",
                        "trait_id": 514
                    },
                    {
                        "cost": 8,
                        "type": "Trait",
                        "trait_id": 525
                    },
                    {
                        "cost": 11,
                        "type": "Trait",
                        "trait_id": 1882
                    },
                    {
                        "cost": 15,
                        "type": "Trait",
                        "trait_id": 517
                    },
                    {
                        "cost": 20,
                        "type": "Trait",
                        "trait_id": 482
                    },
                    {
                        "cost": 25,
                        "type": "Trait",
                        "trait_id": 1892
                    },
                    {
                        "cost": 30,
                        "type": "Trait",
                        "trait_id": 1944
                    },
                    {
                        "cost": 36,
                        "type": "Trait",
                        "trait_id": 429
                    },
                    {
                        "cost": 44,
                        "type": "Trait",
                        "trait_id": 1541
                    },
                    {
                        "cost": 52,
                        "type": "Trait",
                        "trait_id": 505
                    },
                    {
                        "cost": 60,
                        "type": "Trait",
                        "trait_id": 1947
                    }
                ]
            },
            {
                "id": 66,
                "category": "Specializations",
                "name": "Firearms",
                "track": [
                    {
                        "cost": 2,
                        "type": "Trait",
                        "trait_id": 515
                    },
                    {
                        "cost": 5,
                        "type": "Trait",
                        "trait_id": 1878
                    },
                    {
                        "cost": 8,
                        "type": "Trait",
                        "trait_id": 1930
                    },
                    {
                        "cost": 11,
                        "type": "Trait",
                        "trait_id": 1914
                    },
                    {
                        "cost": 15,
                        "type": "Trait",
                        "trait_id": 536
                    },
                    {
                        "cost": 20,
                        "type": "Trait",
                        "trait_id": 1984
                    },
                    {
                        "cost": 25,
                        "type": "Trait",
                        "trait_id": 2006
                    },
                    {
                        "cost": 30,
                        "type": "Trait",
                        "trait_id": 1923
                    },
                    {
                        "cost": 36,
                        "type": "Trait",
                        "trait_id": 516
                    },
                    {
                        "cost": 44,
                        "type": "Trait",
                        "trait_id": 510
                    },
                    {
                        "cost": 52,
                        "type": "Trait",
                        "trait_id": 526
                    },
                    {
                        "cost": 60,
                        "type": "Trait",
                        "trait_id": 433
                    }
                ]
            },
            {
                "id": 94,
                "category": "Specializations",
                "name": "Alchemy",
                "track": [
                    {
                        "cost": 2,
                        "type": "Trait",
                        "trait_id": 468
                    },
                    {
                        "cost": 5,
                        "type": "Trait",
                        "trait_id": 396
                    },
                    {
                        "cost": 8,
                        "type": "Trait",
                        "trait_id": 509
                    },
                    {
                        "cost": 11,
                        "type": "Trait",
                        "trait_id": 521
                    },
                    {
                        "cost": 15,
                        "type": "Trait",
                        "trait_id": 487
                    },
                    {
                        "cost": 20,
                        "type": "Trait",
                        "trait_id": 520
                    },
                    {
                        "cost": 25,
                        "type": "Trait",
                        "trait_id": 469
                    },
                    {
                        "cost": 30,
                        "type": "Trait",
                        "trait_id": 470
                    },
                    {
                        "cost": 36,
                        "type": "Trait",
                        "trait_id": 413
                    },
                    {
                        "cost": 44,
                        "type": "Trait",
                        "trait_id": 473
                    },
                    {
                        "cost": 52,
                        "type": "Trait",
                        "trait_id": 1871
                    },
                    {
                        "cost": 60,
                        "type": "Trait",
                        "trait_id": 1854
                    }
                ]
            },
            {
                "id": 51,
                "category": "Specializations",
                "name": "Inventions",
                "track": [
                    {
                        "cost": 2,
                        "type": "Trait",
                        "trait_id": 518
                    },
                    {
                        "cost": 5,
                        "type": "Trait",
                        "trait_id": 394
                    },
                    {
                        "cost": 8,
                        "type": "Trait",
                        "trait_id": 1901
                    },
                    {
                        "cost": 11,
                        "type": "Trait",
                        "trait_id": 507
                    },
                    {
                        "cost": 15,
                        "type": "Trait",
                        "trait_id": 508
                    },
                    {
                        "cost": 20,
                        "type": "Trait",
                        "trait_id": 1678
                    },
                    {
                        "cost": 25,
                        "type": "Trait",
                        "trait_id": 1834
                    },
                    {
                        "cost": 30,
                        "type": "Trait",
                        "trait_id": 445
                    },
                    {
                        "cost": 36,
                        "type": "Trait",
                        "trait_id": 519
                    },
                    {
                        "cost": 44,
                        "type": "Trait",
                        "trait_id": 472
                    },
                    {
                        "cost": 52,
                        "type": "Trait",
                        "trait_id": 1680
                    },
                    {
                        "cost": 60,
                        "type": "Trait",
                        "trait_id": 1916
                    }
                ]
            },
            {
                "id": 32,
                "category": "Specializations",
                "name": "Tools",
                "track": [
                    {
                        "cost": 2,
                        "type": "Trait",
                        "trait_id": 1979
                    },
                    {
                        "cost": 5,
                        "type": "Trait",
                        "trait_id": 532
                    },
                    {
                        "cost": 8,
                        "type": "Trait",
                        "trait_id": 1997
                    },
                    {
                        "cost": 11,
                        "type": "Trait",
                        "trait_id": 531
                    },
                    {
                        "cost": 15,
                        "type": "Trait",
                        "trait_id": 1872
                    },
                    {
                        "cost": 20,
                        "type": "Trait",
                        "trait_id": 512
                    },
                    {
                        "cost": 25,
                        "type": "Trait",
                        "trait_id": 1946
                    },
                    {
                        "cost": 30,
                        "type": "Trait",
                        "trait_id": 1832
                    },
                    {
                        "cost": 36,
                        "type": "Trait",
                        "trait_id": 1936
                    },
                    {
                        "cost": 44,
                        "type": "Trait",
                        "trait_id": 1856
                    },
                    {
                        "cost": 52,
                        "type": "Trait",
                        "trait_id": 523
                    },
                    {
                        "cost": 60,
                        "type": "Trait",
                        "trait_id": 1679
                    }
                ]
            },
            {
                "id": 113,
                "category": "EliteSpecializations",
                "name": "Scrapper",
                "track": [
                    {
                        "cost": 30,
                        "type": "Trait",
                        "trait_id": 1951
                    },
                    {
                        "cost": 40,
                        "type": "Trait",
                        "trait_id": 1959
                    },
                    {
                        "cost": 55,
                        "type": "Skill",
                        "skill_id": 30357
                    },
                    {
                        "cost": 65,
                        "type": "Trait",
                        "trait_id": 1917
                    },
                    {
                        "cost": 75,
                        "type": "Trait",
                        "trait_id": 1971
                    },
                    {
                        "cost": 85,
                        "type": "Trait",
                        "trait_id": 1867
                    },
                    {
                        "cost": 95,
                        "type": "Trait",
                        "trait_id": 2014
                    },
                    {
                        "cost": 110,
                        "type": "Skill",
                        "skill_id": 31248
                    },
                    {
                        "cost": 125,
                        "type": "Skill",
                        "skill_id": 29739
                    },
                    {
                        "cost": 135,
                        "type": "Trait",
                        "trait_id": 1954
                    },
                    {
                        "cost": 145,
                        "type": "Trait",
                        "trait_id": 1999
                    },
                    {
                        "cost": 155,
                        "type": "Trait",
                        "trait_id": 1860
                    },
                    {
                        "cost": 165,
                        "type": "Trait",
                        "trait_id": 1877
                    },
                    {
                        "cost": 180,
                        "type": "Skill",
                        "skill_id": 29921
                    },
                    {
                        "cost": 190,
                        "type": "Trait",
                        "trait_id": 1981
                    },
                    {
                        "cost": 200,
                        "type": "Trait",
                        "trait_id": 2052
                    },
                    {
                        "cost": 210,
                        "type": "Trait",
                        "trait_id": 1849
                    },
                    {
                        "cost": 225,
                        "type": "Skill",
                        "skill_id": 30101
                    },
                    {
                        "cost": 250,
                        "type": "Skill",
                        "skill_id": 30815
                    }
                ]
            },
            {
                "id": 409,
                "category": "EliteSpecializations",
                "name": "Holosmith",
                "track": [
                    {
                        "cost": 30,
                        "type": "Trait",
                        "trait_id": 2125
                    },
                    {
                        "cost": 40,
                        "type": "Trait",
                        "trait_id": 2158
                    },
                    {
                        "cost": 50,
                        "type": "Trait",
                        "trait_id": 2157
                    },
                    {
                        "cost": 60,
                        "type": "Trait",
                        "trait_id": 2135
                    },
                    {
                        "cost": 70,
                        "type": "Trait",
                        "trait_id": 2152
                    },
                    {
                        "cost": 80,
                        "type": "Trait",
                        "trait_id": 2122
                    },
                    {
                        "cost": 90,
                        "type": "Trait",
                        "trait_id": 2137
                    },
                    {
                        "cost": 105,
                        "type": "Skill",
                        "skill_id": 40507
                    },
                    {
                        "cost": 120,
                        "type": "Skill",
                        "skill_id": 43739
                    },
                    {
                        "cost": 130,
                        "type": "Trait",
                        "trait_id": 2114
                    },
                    {
                        "cost": 140,
                        "type": "Trait",
                        "trait_id": 2103
                    },
                    {
                        "cost": 150,
                        "type": "Trait",
                        "trait_id": 2066
                    },
                    {
                        "cost": 165,
                        "type": "Skill",
                        "skill_id": 42842
                    },
                    {
                        "cost": 180,
                        "type": "Skill",
                        "skill_id": 44646
                    },
                    {
                        "cost": 190,
                        "type": "Trait",
                        "trait_id": 2106
                    },
                    {
                        "cost": 200,
                        "type": "Trait",
                        "trait_id": 2091
                    },
                    {
                        "cost": 210,
                        "type": "Trait",
                        "trait_id": 2064
                    },
                    {
                        "cost": 225,
                        "type": "Skill",
                        "skill_id": 41218
                    },
                    {
                        "cost": 250,
                        "type": "Skill",
                        "skill_id": 42009
                    }
                ]
            }
        ]
    }
];

const currentSeason = {
    "id": "7B488B5A-4C9D-459B-8599-3836AEFB1401",
    "name": "PvP League Season Twenty-Seven",
    "start": "2021-05-25T19:00:00.000Z",
    "end": "2021-07-20T00:00:00.000Z",
    "active": true,
    "divisions": [
        {
            "name": "Cerulean",
            "flags": [],
            "large_icon": "https://render.guildwars2.com/file/CBACFFCD30B623FCCAF3CC7296056265F15E09BB/1614868.png",
            "small_icon": "https://render.guildwars2.com/file/0673802F661E33D2BAFB400F56E502ACAE9468F4/1614874.png",
            "pip_icon": "https://render.guildwars2.com/file/DF4AE7C6B85711B5EF0A970851672FFE230FE61D/1614836.png",
            "tiers": [
                {
                    "points": 20
                },
                {
                    "points": 20
                },
                {
                    "points": 20
                }
            ]
        },
        {
            "name": "Jasper",
            "flags": [],
            "large_icon": "https://render.guildwars2.com/file/769445B8AFC30D92345AB6A84ACD02A223B5B1B5/1614869.png",
            "small_icon": "https://render.guildwars2.com/file/6E0EF5120B6E095ED894A4E3BFC69F141EEF652E/1614876.png",
            "pip_icon": "https://render.guildwars2.com/file/65192C9BEF0C080CACB5005B7B074C7EE37C6527/1614837.png",
            "tiers": [
                {
                    "points": 20
                },
                {
                    "points": 20
                },
                {
                    "points": 20
                },
                {
                    "points": 20
                }
            ]
        },
        {
            "name": "Saffron",
            "flags": [],
            "large_icon": "https://render.guildwars2.com/file/509921D3BFDC049BC20758B71AD85592A043A439/1614870.png",
            "small_icon": "https://render.guildwars2.com/file/6BE7DAD4635AF66FA4017A4D217F609FC95CE3A6/1614878.png",
            "pip_icon": "https://render.guildwars2.com/file/0E9EFE4F06A46D124EF970375CB0FE7C5646DEBD/1614838.png",
            "tiers": [
                {
                    "points": 20
                },
                {
                    "points": 20
                },
                {
                    "points": 20
                },
                {
                    "points": 20
                },
                {
                    "points": 20
                }
            ]
        },
        {
            "name": "Persimmon",
            "flags": [],
            "large_icon": "https://render.guildwars2.com/file/5807B5E8BC4658DE9CB44664C125A6A3900D80A9/1614871.png",
            "small_icon": "https://render.guildwars2.com/file/AA9C38331B5F97511697C66E236E54BB151CF93C/1614880.png",
            "pip_icon": "https://render.guildwars2.com/file/D7A1BE091BEB55FFFBE529F84DAF0EA23B9E0943/1614839.png",
            "tiers": [
                {
                    "points": 20
                },
                {
                    "points": 20
                },
                {
                    "points": 20
                },
                {
                    "points": 20
                },
                {
                    "points": 20
                }
            ]
        },
        {
            "name": "Amaranth",
            "flags": [],
            "large_icon": "https://render.guildwars2.com/file/9CEAC0D269EC685D2818320FACC4130151C9B4B7/1614872.png",
            "small_icon": "https://render.guildwars2.com/file/18A56E0F97DF075C30EA05CD1B571DEB024E0815/1614882.png",
            "pip_icon": "https://render.guildwars2.com/file/76EA60C4256FA580F167036739006D5B7D0791A1/1614840.png",
            "tiers": [
                {
                    "points": 30
                },
                {
                    "points": 30
                },
                {
                    "points": 30
                },
                {
                    "points": 30
                },
                {
                    "points": 30
                }
            ]
        },
        {
            "name": "Byzantium (Repeatable)",
            "flags": [
                "Repeatable"
            ],
            "large_icon": "https://render.guildwars2.com/file/52F72F4C72B517B0955D00CE0415E9B778191395/1614873.png",
            "small_icon": "https://render.guildwars2.com/file/EDA19B7B0FF77E7044087F02D909AC0846A228BC/1614884.png",
            "pip_icon": "https://render.guildwars2.com/file/32A2E3C56EE514912A0AF41C9904AFAF64082D0B/1614841.png",
            "tiers": [
                {
                    "points": 30
                },
                {
                    "points": 30
                },
                {
                    "points": 30
                },
                {
                    "points": 30
                },
                {
                    "points": 30
                },
                {
                    "points": 30
                }
            ]
        }
    ],
    "ranks": [
        {
            "name": "Bronze",
            "description": "This PvP League badge is available with a bronze effective rating.",
            "icon": "https://render.guildwars2.com/file/6C5C27021FBF30026F1A5B0B5648D84F6A12C361/1614805.png",
            "overlay": "https://render.guildwars2.com/file/7CDD58197C21E0D1F5076D5F2437060D13A03276/1614803.png",
            "overlay_small": "https://render.guildwars2.com/file/B64F6C01E17554BC777F68D106294F3FC1BACBA7/1614804.png",
            "tiers": [
                {
                    "rating": 699
                },
                {
                    "rating": 799
                },
                {
                    "rating": 899
                }
            ]
        },
        {
            "name": "Silver",
            "description": "This PvP League badge is available with a silver effective rating.",
            "icon": "https://render.guildwars2.com/file/031107A75BA0A8267F2925032CAA006C92D1024C/1614808.png",
            "overlay": "https://render.guildwars2.com/file/E9710E98D90E3DCB1B6ABA08DF09059630E04A0B/1614806.png",
            "overlay_small": "https://render.guildwars2.com/file/1E0CB9F01C7C58DC60CB67C26B6697D42A09A701/1614807.png",
            "tiers": [
                {
                    "rating": 999
                },
                {
                    "rating": 1099
                },
                {
                    "rating": 1199
                }
            ]
        },
        {
            "name": "Gold",
            "description": "This PvP League badge is available with a gold effective rating.",
            "icon": "https://render.guildwars2.com/file/B11206B5D509587AB9726FAC9101F4E1062CC15E/1614811.png",
            "overlay": "https://render.guildwars2.com/file/39D36849D82301ACAC1F0746E4E270DEEB64A097/1614809.png",
            "overlay_small": "https://render.guildwars2.com/file/3C3096652D111C287F45FD1B6DAB500CE3227A64/1614810.png",
            "tiers": [
                {
                    "rating": 1299
                },
                {
                    "rating": 1399
                },
                {
                    "rating": 1499
                }
            ]
        },
        {
            "name": "Platinum",
            "description": "This PvP League badge is available with a platinum effective rating.",
            "icon": "https://render.guildwars2.com/file/9723D561C0FE045711651678C2599A2D27122D0D/1614814.png",
            "overlay": "https://render.guildwars2.com/file/BFF6A83B453F005436B252BD57183EB63D38B36F/1614812.png",
            "overlay_small": "https://render.guildwars2.com/file/E6E0CD64A9D93C011B29CAFAE5355C1B4D5FE61E/1614813.png",
            "tiers": [
                {
                    "rating": 1599
                },
                {
                    "rating": 1699
                },
                {
                    "rating": 1799
                }
            ]
        },
        {
            "name": "Legendary",
            "description": "This PvP League badge is available with a legendary effective rating.",
            "icon": "https://render.guildwars2.com/file/C9A7F6735DC310292AC09CFCE453AAFE1DC0970A/1614817.png",
            "overlay": "https://render.guildwars2.com/file/0DFDCF280AF0D9033DFD68BC0175109EF0377B7D/1614815.png",
            "overlay_small": "https://render.guildwars2.com/file/D29D750A334BCAD47DF4F5397D6EA999101BE8BE/1614816.png",
            "tiers": [
                {
                    "rating": 1899
                },
                {
                    "rating": 1999
                },
                {
                    "rating": 2099
                }
            ]
        }
    ],
    "leaderboards": {
        "ladder": {
            "settings": {
                "name": "",
                "duration": null,
                "scoring": "0F86D504-63C2-4465-80AA-C278E1CB7800",
                "tiers": [
                    {
                        "range": [
                            1,
                            1
                        ]
                    },
                    {
                        "range": [
                            2,
                            2
                        ]
                    },
                    {
                        "range": [
                            3,
                            3
                        ]
                    },
                    {
                        "range": [
                            10,
                            4
                        ]
                    },
                    {
                        "range": [
                            25,
                            11
                        ]
                    },
                    {
                        "range": [
                            100,
                            26
                        ]
                    },
                    {
                        "range": [
                            250,
                            101
                        ]
                    }
                ]
            },
            "scorings": [
                {
                    "id": "0F86D504-63C2-4465-80AA-C278E1CB7800",
                    "type": "Integer",
                    "description": "Effective rating that includes decay.",
                    "name": "Rating",
                    "ordering": "MoreIsBetter"
                },
                {
                    "id": "8A5F1199-CFD8-44CE-84C3-811C5EE8B16C",
                    "type": "Integer",
                    "description": "",
                    "name": "Wins",
                    "ordering": "MoreIsBetter"
                },
                {
                    "id": "FECEE3A5-B66C-44A3-B81E-65EA43829E1D",
                    "type": "Integer",
                    "description": "",
                    "name": "Losses",
                    "ordering": "LessIsBetter"
                }
            ]
        }
    }
};

module.exports = {
    matchResults,
    seasons,
    currentSeason,
    standings,
    professions
};
