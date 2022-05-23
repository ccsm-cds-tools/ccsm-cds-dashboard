export const testData = {
  "alice": {
    "name": "Alice14 Winter87",
    "scenario": "Post-treatment Surveillance",
    "scenario_desc": "The appropriate re-testing interval and indications for colposcopy after treatment for CIN2/CIN3/AIS (with negative excisional margins and negative ECC)",
    "mrn": "RV-3584-1486",
    "dob": "06/19/1979",
    "age": 42,
    "height": "5 ft 9 in",
    "weight": "161 lb",
    "sab": "Female",
    "gender": "Female",
    "pregnant": "Unknown",
    "race": "White; Non-Hispanic",
    "language": "English",
    "patientrec": "Surveillance Testing Due 6/22/2022",
    "patientgroup": "Post-treatment Surveillance",
    "recdetails": [
      "Per the ASCCP Risk-Based Management Guidelines, surveillance testing is recommended with a 1-year follow-up.",
      "After abnormal cervical cancer screening test results for patients 25 years or older, colposcopic biopsy results, or treatment of histologic HSIL, surveillance with either HPV testing alone or cotesting is preferred (AI). Surveillance with cervical cytology alone is acceptable only if testing with HPV or cotesting is not feasible (CIII). Cytology is recommended at 6-month intervals when 1-year intervals are recommended for HPV or cotesting, and annually when 3-year intervals are recommended for HPV or cotesting (AII)."
    ],
    "disclaimer": "An evidence based recommendation is provided based on clinical data available in the patient's electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.",
    "order": "surveillance",
    "risk": {
      "title": "Risk Estimates",
      "subtitle": "Immediate and 5-year risks after treatment for CIN 2 or CIN 3",
      "headers": [
        {
          "key": "currentHpv",
          "display": "Current HPV Result"
        },
        {
          "key": "currentCyto",
          "display": "Current Cytology Result"
        },
        {
          "key": "immediateRisk",
          "display": "CIN 3+ Immediate Risk (%)"
        },
        {
          "key": "fiveYearRisk",
          "display": "CIN 3+ 5 yr Risk (%)"
        }
      ],
      "relevant": {
        "currentHpv": "HPV-negative",
        "currentCyto": "NILM",
        "immediateRisk": 0.03,
        "fiveYearRisk": 1.7
      },
      "adjacent": [
        {
          "currentHpv": "HPV-negative",
          "currentCyto": "ASC-US/LSIL",
          "immediateRisk": 0.75,
          "fiveYearRisk": 3.8
        },
        {
          "currentHpv": "HPV-negative",
          "currentCyto": "High Grade",
          "immediateRisk": 18,
          "fiveYearRisk": 18
        },
        {
          "currentHpv": "HPV-negative",
          "currentCyto": "All",
          "immediateRisk": 0.34,
          "fiveYearRisk": 2.0
        }
      ],
      "clarifications": [
        "Applicable to patients being followed after a treatment for CIN 2 or CIN 3.",
        "High grade corresponds to ASC-H/AGC/HSIL+",
        "HPV-negative ALL, e.g. primary HPV screening"
      ]
    },
    "references": [
      {
        "name": "ASCCP Risk-Based Management Consensus, 2019",
        "documents": [
          {
            "title": "2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors, 2019",
            "link": "https://www.asccp.org/Assets/b2263c88-ec67-4ab0-9f07-6f112e76f8d7/637269576182030000/2019-asccp-risk-based-management-consensus-3-5-pdf"
          }
        ]
      }
    ],
    "logicpath": {
      "name": "(Logic Path 4.7.3.3.10) Rare Abnormality",
      "reference": "#logic-path"
    },
    "logicsummary": "Follow-up after treatment for CIN2 or CIN3 Table 5A.",
    "logiccriteria": [
      {
        "title": "Inclusions",
        "groups": [
          {
            "name": "Age >= 25 years old",
            "items": []
          },
          {
            "name": "Sex at birth = female",
            "items": []
          }
        ]
      },
      {
        "title": "Exclusions",
        "groups": []
      },
      {
        "title": "Common Abnormality #5",
        "groups": [
          {
            "name": "Most Recent Cotest >= 6 months and <= 9 months after CIN2 or CIN3 treatment",
            "items": [
              {
                "criteria": "HPV Test - Negative",
                "date": "06/22/2021",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap) - NILM",
                "date": "06/22/2021",
                "action": "View"
              }
            ]
          },
          {
            "name": "CIN2 or CIN3 Treatment <= 3 months after most recent CIN2 or CIN3 histology",
            "items": [
              {
                "criteria": "LEEP Procedure",
                "date": "11/20/2020",
                "action": "View"
              }
            ]
          },
          {
            "name": "Most Recent Cervical Histology is CIN2 or CIN3",
            "items": [
              {
                "criteria": "Most Recent Cervical Histology is CIN2 or CIN3",
                "date": "11/20/2020",
                "action": "View"
              }
            ]
          }
        ]
      }
    ],
    "timeline": {
      "explanation": "[Explanation text about the timeline here...]",
      "projection": [
        {
          "era": "Start Age 21",
          "status": "Patient Status info here...",
          "options": [
            {
              "activity": "Cervical Cytology",
              "period": "3 years",
              "detail": "Cervical Cytology testing alone",
              "duration": "2 to 3 times (2015 to 2024)",
            }
          ]
        }
      ]
    },
    "updated": "2022-04-04",
    "labresults": [{
      "name": "HPV Test",
      "value": "Negative",
      "date": "2021-06-22",
      "sdate": "Jun 2021"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2021-06-22",
      "sdate": "Jun 2021"
    }, {
      "name": "LEEP Procedure",
      "value": "Completed",
      "date": "2020-11-20",
      "sdate": "Nov 2020"
    }, {
      "name": "Cervical Histology",
      "value": "Histologic HSIL (CIN2)",
      "date": "2020-11-10",
      "sdate": "Nov 2020"
    }, {
      "name": "Colposcopy",
      "value": "Completed",
      "date": "2020-11-10",
      "sdate": "Nov 2020"
    }, {
      "name": "HPV Test",
      "value": "Positive",
      "date": "2020-11-02",
      "sdate": "Nov 2020",
      "genotype": "HPV16+"
    }, {
      "name": "Cytology (Pap)",
      "value": "HSIL",
      "date": "2020-11-02",
      "sdate": "Nov 2020"
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2015-11-14",
      "sdate": "Nov 2015"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2015-11-14",
      "sdate": "Nov 2015"
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2010-10-02",
      "sdate": "Oct 2010"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2010-10-02",
      "sdate": "Oct 2010"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2005-10-02",
      "sdate": "Oct 2005"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2002-07-10",
      "sdate": "Jul 2002"
    }],
    "conditions": [{
      "name": "High grade squamous intraepithelial lesion on cytologic smear of cervix (HGSIL)",
      "value": "",
      "date": "2020-11-02",
      "sdate": "Nov 2020"
    }]
  },
  "barb": {
    "name": "Barb23 Long56",
    "scenario": "Individual older than 65 who was adequately screened",
    "scenario_desc": "Screening cessation at ages 65+ based on prior documented test results",
    "mrn": "SH-8485-2098",
    "dob": "04/21/1955",
    "age": 66,
    "height": "5 ft 5 in",
    "weight": "150 lb",
    "sab": "Female",
    "gender": "Female",
    "pregnant": "N/A",
    "race": "Black or African American; Non-Hispanic",
    "language": "English",
    "patientrec": "No additional cervical cancer screening is indicated",
    "patientgroup": "Average-risk screening",
    "recdetails": [
      "Per guidelines, this patient is over 65 years of age and has been adequately screened in the past, therefore no longer requires cervical cancer screening.",
      "Adequate screening is defined as having: Three consecutive negative cytology results within 10 years prior to screening, OR two consecutive negative hrHPV results within 10 years prior to the end of screening, with the most recent test occurring within 5 years, OR two consecutive negative cotesting results within 10 years prior to the end of screening, with the most recent test occurring within 5 years."
    ],
    "disclaimer": "An evidence based recommendation is provided based on clinical data available in the patient's electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.",
    "order": "",
    "risk": {
      "title": "Risk Estimates",
      "subtitle": "Risk estimates are not available for patients with no prior HPV test results or no abnormal cytology resuts.",
      "headers": [
        {
          "key": "currentHpv",
          "display": "Current HPV Result"
        },
        {
          "key": "currentCyto",
          "display": "Current Cytology Result"
        },
        {
          "key": "immediateRisk",
          "display": "CIN 3+ Immediate Risk (%)"
        },
        {
          "key": "fiveYearRisk",
          "display": "CIN 3+ 5 yr Risk (%)"
        }
      ],
      "relevant": {},
      "adjacent": [],
      "clarifications": [
        "Applicable to patients being followed after a treatment for CIN 2 or CIN 3.",
        "High grade corresponds to ASC-H/AGC/HSIL+",
        "HPV-negative ALL, e.g. primary HPV screening"
      ]
    },
    "references": [
      {
        "name": "USPSTF",
        "details": [
          "The USPSTF recommends against screening for cervical cancer in women older than 65 years who have had adequate prior screening and are not otherwise at high risk for cervical cancer.",
          "Joint guidelines from the American Cancer Society, American Society for Colposcopy and Cervical Pathology, and American Society for Clinical Pathology (ACS/ASCCP/ASCP) define adequate prior screening as 3 consecutive negative cytology results or 2 consecutive negative cotesting results within 10 years before stopping screening, with the most recent test occurring within 5 years."
        ],
        "documents": [
          {
            "title": "USPSTF Screening for Cervical Cancer, 2018-08-21",
            "link": "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening"
          }
        ]
      }
    ],
    "logicpath": {
      "name": "(Logic Path 4.6.3.3.2)",
      "reference": "#logic-path"
    },
    "logicsummary": "Grade D Recommendation: The USPSTF recommends against screening for cervical cancer in individuals over 65 years who have had adequate prior screening and are not otherwise at high risk for cervical cancer.",
    "logiccriteria": [
      {
        "title": "Inclusions",
        "groups": [
          {
            "name": "Age > 65 years old",
            "items": []
          },
          {
            "name": "Sex at birth = female",
            "items": []
          }
        ]
      },
      {
        "title": "Exclusions",
        "groups": []
      },
      {
        "title": "Adequate prior screening",
        "groups": [
          {
            "name": "Negative Cervical Cytology Every 3 years x3",
            "items": [
              {
                "criteria": "Cytology (Pap)</b> - NILM",
                "date": "04/18/2021",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap)</b> - NILM",
                "date": "04/16/2018",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap)</b> - NILM",
                "date": "03/05/2015",
                "action": "View"
              }
            ]
          },
          {
            "name": "Adequate Screening in past 11 years",
            "items": [
              {
                "criteria": "3 Negative Cervical Cytology results in 11-year span - TRUE",
                "date": null,
                "action": null
              },
              {
                "criteria": "3 Negative Cervical Cytology results all after 2009 - TRUE",
                "date": null,
                "action": null
              }
            ]
          }
        ]
      }
    ],
    "timeline": {
      "explanation": "[Explanation text about the timeline here...]",
      "projection": [
        {
          "era": "Start Age 21",
          "status": "Patient Status info here...",
          "options": [
            {
              "activity": "Cervical Cytology",
              "period": "3 years",
              "detail": "Cervical Cytology testing alone",
              "duration": "2 to 3 times (2015 to 2024)",
            }
          ]
        }
      ]
    },
    "updated": "2022-01-25",
    "labresults": [{
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2021-04-18",
      "sdate": "Apr 2021"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2018-04-16",
      "sdate": "Apr 2018"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2015-03-05",
      "sdate": "Mar 2015"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2013-10-20",
      "sdate": "Oct 2013"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "1990-01-25",
      "sdate": "Jan 1990"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "1986-03-18",
      "sdate": "Mar 1986"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "1984-04-18",
      "sdate": "Apr 1984"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "1983-04-16",
      "sdate": "Apr 1983"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "1980-03-05",
      "sdate": "Mar 1980"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "1978-10-20",
      "sdate": "Oct 1978"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "1976-01-25",
      "sdate": "Jan 1976"
    }]
  },
  "bernadette": {
    "name": "Bernadette61 MacKenzie82",
    "scenario": "Long-term surveillance following treatment for high-grade precancer",
    "mrn": "PK-4877-5859",
    "dob": "06/19/1968",
    "age": 53,
    "height": "5 ft 9 in",
    "weight": "161 lb",
    "sab": "Female",
    "gender": "Female",
    "pregnant": "N/A",
    "race": "White; Non-Hispanic",
    "language": "English",
    "patientrec": "Surveillance Testing Due 11/12/2023",
    "patientgroup": "Long-term surveillance following treatment for high-grade precancer",
    "recdetails": [
      "Per the ASCCP Risk-Based Management Guidelines, surveillance testing is recommended 3 years following the last negative result.",
      "HPV-based testing with cotest or primary hrHPV test is recommended every 3 years after a histologic HSIL (CIN2 or CIN3) or AIS results for 25 years, regardless of whether the patient has had a hysterectomy either for treatment or at any point during the surveillance period (CIII)."
    ],
    "disclaimer": "An evidence based recommendation is provided based on clinical data available in the patient's electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.",
    "order": "Schedule Surveillance",
    "risk": {
      "title": "Risk Estimates",
      "subtitle": "Long-Term Follow-up When There Are 2 or 3 Negative Follow-up Test Results After Treatment of CIN 2 or CIN 3",
      "headers": [
        {
          "key": "histResult",
          "display": "History: cotest or HPV test negative"
        },
        {
          "key": "currentResult",
          "display": "Current Cytology Result"
        },
        {
          "key": "immediateRisk",
          "display": "CIN 3+ Immediate Risk (%)"
        },
        {
          "key": "fiveYearRisk",
          "display": "CIN 3+ 5 yr Risk (%)"
        }
      ],
      "relevant": {
        "histResult": "Cotest negative x2",
        "currentResult": "Cotest negative",
        "immediateRisk": 0,
        "fiveYearRisk": 0.35
      },
      "adjacent": [
        {
          "histResult": "Cotest negative x1",
          "currentResult": "Cotest negative",
          "immediateRisk": 0,
          "fiveYearRisk": 0.68
        },
        {
          "histResult": "HPV-negative x1",
          "currentResult": "HPV-negative",
          "immediateRisk": 0.05,
          "fiveYearRisk": 0.91
        },
        {
          "histResult": "HPV-negative x2",
          "currentResult": "HPV-negative",
          "immediateRisk": 0.15,
          "fiveYearRisk": 0.44
        }
      ],
      "clarifications": [
        "Applicable to patients who are followed up after a CIN 2 or CIN 3 treatment with more than 1 cotest or primary HPV-negative results."
      ]
    },
    "references": [
      {
        "name": "ASCCP Risk-Based Management Consensus, 2019",
        "details": [
          "After a diagnosis of high-grade histology or cytology, patients may undergo hysterectomy for reasons related or unrelated to their cervical abnormalities. If hysterectomy is performed for treatment, patients should have 3 consecutive annual HPV-based tests before entering long-term surveillance. Long-term surveillance after treatment for histologic HSIL (CIN 2 or CIN 3) or AIS involves HPV-based testing at 3-year intervals for 25 years, regardless of whether the patient has had a hysterectomy either for treatment or at any point during the surveillance period (CIII). Among patients who have undergone hysterectomy but either have no previous diagnosis of CIN 2+ within the previous 25 years or have completed the 25 year surveillance period, screening is generally not recommended. However, if performed, abnormal vaginal screening test results should be managed according to published recommendations (BII)."
        ],
        "documents": [
          {
            "title": "2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors, 2019",
            "link": "https://www.asccp.org/Assets/b2263c88-ec67-4ab0-9f07-6f112e76f8d7/637269576182030000/2019-asccp-risk-based-management-consensus-3-5-pdf"
          }
        ]
      }
    ],
    "logicpath": {
      "name": "(Logic Path 5 - 4.7.3.3.5)",
      "reference": "#logic-path"
    },
    "logicsummary": "NEED TO FIX: The L2 logic for this used to make sense but it has been changed and doesn't match the patient history anymore.",
    "logiccriteria": [
      {
        "title": "Inclusions",
        "groups": [
          {
            "name": "Sex at birth = female",
            "items": []
          },
          {
            "name": "Removal of cervix procedure",
            "items": [
              {
                "criteria": "Total Abdominal Hysterectomy",
                "date": "09/15/2017",
                "action": "View"
              }
            ]
          },
          {
            "name": "Diagnosis of Cervical Cancer",
            "items": [
              {
                "criteria": "High grade squamous intraepithelial lesion on cytologic smear of cervix (HGSIL)",
                "date": "05/02/2015",
                "action": "View"
              }
            ]
          }
        ]
      },
      {
        "title": "Exclusions",
        "groups": [
          {
            "name": "Removal of cervix <5 years ago",
            "items": [
              {
                "criteria": "Total Abdominal Hysterectomy",
                "date": "09/15/2017",
                "action": "View"
              }
            ]
          },
          {
            "name": "Other exclusions",
            "items": [
              {
                "criteria": "None present",
                "date": null,
                "action": "Edit"
              }
            ]
          }
        ]
      },
      {
        "title": "Initial intensive surveillance period post-hysterectomy",
        "groups": [
          {
            "name": "Negative Surveillance Test",
            "items": [
              {
                "criteria": "hrHPV Test - Negative",
                "date": "11/12/2020",
                "action": "View"
              },
              {
                "criteria": "hrHPV Test - Negative",
                "date": "11/14/2019",
                "action": "View"
              },
              {
                "criteria": "hrHPV Test - Negative",
                "date": "10/02/2018",
                "action": "View"
              }
            ]
          }
        ]
      }
    ],
    "timeline": {
      "explanation": "NOTIONAL: Expected sequence of events for Long-term surveillance following treatment for high-grade precancer patients following current guidelines, assuming no abnormal results found or significant changes to clinical status.",
      "projection": [
        {
          "era": "Age 30-65",
          "status": "Info about current patient status here",
          "options": [
            {
              "activity": "Recommendation Name",
              "period": "5 years",
              "detail": "Recommendation Text",
              "duration": "7 to 9 times (2024 to 2059)",
            },
            {
              "activity": "Recommendation Name",
              "period": "3 years",
              "detail": "Recommendation Text",
              "duration": "10 to 12 times (2024 to 2059)",
            }
          ]
        },
        {
          "era": "Age 65+",
          "status": "Info about current patient status here",
          "options": [
            {
              "activity": "Recommendation Name",
              "period": "5 years",
              "detail": "What should this patient do when she is 65+? For more detail, read this.",
              "duration": "As needed starting in 2059",
            }
          ]
        }
      ]
    },
    "updated": "2022-01-12",
    "labresults": [{
      "name": "HPV Test",
      "value": "Negative",
      "date": "2020-11-12",
      "sdate": "Nov 2020"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2020-11-12",
      "sdate": "Nov 2020"
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2019-11-14",
      "sdate": "Nov 2019"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2019-11-14",
      "sdate": "Nov 2019"
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2018-10-02",
      "sdate": "Oct 2018"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2018-10-02",
      "sdate": "Oct 2018"
    }, {
      "name": "Total Abdominal Hysterectomy",
      "value": "Completed",
      "date": "2017-09-15",
      "sdate": "Sep 2017"
    }, {
      "name": "Cervical Histology",
      "value": "Histologic HSIL (CIN2)",
      "date": "2017-07-29",
      "sdate": "Jul 2017"
    }, {
      "name": "HPV Test",
      "value": "Positive",
      "date": "2017-07-10",
      "sdate": "Jul 2017",
      "genotype": "HPV16"
    }, {
      "name": "Cytology (Pap)",
      "value": "LSIL",
      "date": "2017-07-10",
      "sdate": "Jul 2017"
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2016-05-14",
      "sdate": "May 2016"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2016-05-14",
      "sdate": "May 2016"
    }, {
      "name": "LEEP Procedure with Biopsy",
      "value": "Completed",
      "date": "2015-05-20",
      "sdate": "May 2015"
    }, {
      "name": "Cervical Histology",
      "value": "Histologic HSIL (CIN3)",
      "date": "2015-04-30",
      "sdate": "Apr 2015"
    }, {
      "name": "HPV Test",
      "value": "Positive",
      "genotype": "HPV16",
      "date": "2015-04-02",
      "sdate": "Apr 2015"
    }, {
      "name": "Cytology (Pap)",
      "value": "HSIL",
      "date": "2015-04-02",
      "sdate": "Apr 2015"
    }, {
      "name": "Cervical Histology",
      "value": "Histologic LSIL (CIN1)",
      "date": "2014-04-01",
      "sdate": "Apr 2014"
    }, {
      "name": "HPV Test",
      "value": "Positive (Type 16)",
      "date": "2014-03-15",
      "sdate": "Mar 2014"
    }, {
      "name": "Cytology (Pap)",
      "value": "LSIL",
      "date": "2014-03-15",
      "sdate": "Mar 2014"
    }, {
      "name": "Cytology (Pap)",
      "value": "ASC-US",
      "date": "2011-03-01",
      "sdate": "Mar 2011"
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2011-03-01",
      "sdate": "Mar 2011"
    }],
    "conditions": [{
      "name": "High grade squamous intraepithelial lesion on cytologic smear of cervix (HGSIL)",
      "value": "",
      "date": "2015-05-02",
      "sdate": "May 2015"
    }]
  },
  "catherine": {
    "name": "Catherine23 Sullivan98",
    "scenario": "Surveillance with recommended colposcopy with history of prior screening results (Table 2B)",
    "scenario_desc": "Need for colposcopy for an (initial) abnormal test result",
    "mrn": "AC-4823-0484",
    "dob": "02/12/1986",
    "age": 35,
    "height": "5 ft 4 in",
    "weight": "138 lb",
    "sab": "Female",
    "gender": "Female",
    "pregnant": "Unknown",
    "race": "White; Non-Hispanic",
    "language": "English",
    "patientrec": "Colposcopy is recommended",
    "patientgroup": "Surveillance with recommended colposcopy",
    "recdetails": [
      "Per the 2012 ASCCP Risk Management guidelines, colposcopy is recommended.",
      "When patients have an estimated immediate risk of diagnosis of CIN 3+ of 4.0% or greater based on history and current results, referral to colposcopy is recommended (AII)."
    ],
    "disclaimer": "An evidence based recommendation is provided based on clinical data available in the patient's electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.",
    "order": "Order referral",
    "risk": {
      "title": "Risk Estimates",
      "subtitle": "Immediate and 5-year risks of CIN 3+ for results obtained in follow-up of HPV-negative LSIL",
      "headers": [
        {
          "key": "currentHpv",
          "display": "Current HPV Result"
        },
        {
          "key": "currentCyto",
          "display": "Current Cytology Result"
        },
        {
          "key": "immediateRisk",
          "display": "CIN 3+ Immediate Risk (%)"
        },
        {
          "key": "fiveYearRisk",
          "display": "CIN 3+ 5 yr Risk (%)"
        }
      ],
      "relevant": {
        "currentHpv": "HPV Positive",
        "currentCyto": "LSIL",
        "immediateRisk": 7.9,
        "fiveYearRisk": 7.9
      },
      "adjacent": [
        {
          "currentHpv": "HPV Positive",
          "currentCyto": "NILM",
          "immediateRisk": 0,
          "fiveYearRisk": 8.6
        },
        {
          "currentHpv": "HPV Positive",
          "currentCyto": "ASC-US",
          "immediateRisk": 5.3,
          "fiveYearRisk": 6.9
        },
        {
          "currentHpv": "HPV Positive",
          "currentCyto": "ASC-H",
          "immediateRisk": 50,
          "fiveYearRisk": 50
        },
        {
          "currentHpv": "ASC-US",
          "currentCyto": "AGC",
          "immediateRisk": 0,
          "fiveYearRisk": 0
        },
        {
          "currentHpv": "HPV Positive",
          "currentCyto": "HSIL",
          "immediateRisk": 33,
          "fiveYearRisk": 33
        }
      ],
      "clarifications": [
        "Applicable to patients who are under surveillance after a prior HPV-negative LSIL test result."
      ]
    },
    "references": [
      {
        "name": "ASCCP Risk-Based Management Consensus, 2019",
        "details": [
          "After a diagnosis of high-grade histology or cytology, patients may undergo hysterectomy for reasons related or unrelated to their cervical abnormalities. If hysterectomy is performed for treatment, patients should have 3 consecutive annual HPV-based tests before entering long-term surveillance. Long-term surveillance after treatment for histologic HSIL (CIN 2 or CIN 3) or AIS involves HPV-based testing at 3-year intervals for 25 years, regardless of whether the patient has had a hysterectomy either for treatment or at any point during the surveillance period (CIII). Among patients who have undergone hysterectomy but either have no previous diagnosis of CIN 2+ within the previous 25 years or have completed the 25 year surveillance period, screening is generally not recommended. However, if performed, abnormal vaginal screening test results should be managed according to published recommendations (BII)."
        ],
        "documents": [
          {
            "title": "2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors, 2019",
            "link": "https://www.asccp.org/Assets/b2263c88-ec67-4ab0-9f07-6f112e76f8d7/637269576182030000/2019-asccp-risk-based-management-consensus-3-5-pdf"
          }
        ]
      }
    ],
    "logicpath": {
      "name": "(Logic Path 5 - 4.7.3.3.7)",
      "reference": "#logic-path"
    },
    "logicsummary": "Surveillance following results not requiring immediate colposcopic referral.",
    "logiccriteria": [
      {
        "title": "Inclusions",
        "groups": [
          {
            "name": "Age >= 21 years old",
            "items": []
          },
          {
            "name": "Sex at birth = female",
            "items": []
          }
        ]
      },
      {
        "title": "Exclusions",
        "groups": []
      },
      {
        "title": "Abnormal results",
        "groups": [
          {
            "name": "Most Recent Cotest <= 3 years ago",
            "items": [
              {
                "criteria": "HPV Test - Positive",
                "date": "12/18/2021",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap) - LSIL",
                "date": "12/18/2021",
                "action": "View"
              }
            ]
          },
          {
            "name": "Second Most Recent Cotest",
            "items": [
              {
                "criteria": "HPV Test - Negative",
                "date": "11/20/2020",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap) - LSIL",
                "date": "11/20/2020",
                "action": "View"
              }
            ]
          }
        ]
      }
    ],
    "timeline": {
      "explanation": "Expected sequence of events for Average Risk Cervical Cancer Screening patients following current guidelines, assuming no abnormal results found or significant changes to clinical status.",
      "projection": [
        {
          "era": "Age 21 to 29 years",
          "status": "",
          "options": [
            {
              "activity": "Cervical Cytology",
              "period": "3 years",
              "detail": "Cervical Cytology testing alone",
              "duration": "2 to 3 times (2015 to 2024)",
            }
          ]
        },
        {
          "era": "Age 30 to 65 years",
          "status": "Women in this age group should discuss with their health care professional which testing strategy is best for them.",
          "options": [
            {
              "activity": "hrHPV",
              "period": "5 years",
              "detail": "hrHPV Testing alone",
              "duration": "7 to 9 times (2024 to 2059)",
            },
            {
              "activity": "hrHPV + Cytology",
              "period": "5 years",
              "detail": "hrHPV/Cytology cotesting",
              "duration": "7 to 9 times (2024 to 2059)",
            },
            {
              "activity": "Cervical Cytology",
              "period": "3 years",
              "detail": "Cervical Cytology testing alone",
              "duration": "10 to 12 times (2024 to 2059)",
            }
          ]
        },
        {
          "era": "Age older than 65 years",
          "status": "",
          "options": [
            {
              "activity": "Testing as needed",
              "period": "5 years",
              "detail": "Testing as needed until 3 consecutive negative cytology results or 2 consecutive negative cotesting results within 10 years.",
              "duration": "As needed starting in 2059",
            }
          ]
        }
      ]
    },
    "updated": "2022-04-04",
    "labresults": [{
      "name": "HPV Test",
      "value": "Positive",
      "date": "2021-12-18",
      "sdate": "Dec 2021",
      "genotype": "HPV16+"
    }, {
      "name": "Cytology (Pap)",
      "value": "LSIL",
      "date": "2021-12-18",
      "sdate": "Dec 2021"
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2020-11-20",
      "sdate": "Nov 2020",
      "manual": true
    }, {
      "name": "Cytology (Pap)",
      "value": "LSIL",
      "date": "2020-11-20",
      "sdate": "Nov 2020",
      "manual": true
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2015-10-15",
      "sdate": "Oct 2015"
    }, {
      "name": "Cytology (Pap)",
      "value": "LSIL",
      "date": "2015-10-15",
      "sdate": "Oct 2015"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2011-09-15",
      "sdate": "Sep 2011"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2008-10-12",
      "sdate": "Oct 2008"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2007-08-02",
      "sdate": "Aug 2007"
    }]
  },
  "catherinex": {
    "name": "Catherine23 Sullivan98",
    "scenario": "Surveillance with recommended colposcopy with incomplete cotest",
    "scenario_desc": "Incomplete result for HPV and Pap",
    "mrn": "AC-4823-0484",
    "dob": "02/12/1986",
    "age": 35,
    "height": "5 ft 4 in",
    "weight": "138 lb",
    "sab": "Female",
    "gender": "Female",
    "pregnant": "Unknown",
    "race": "White; Non-Hispanic",
    "language": "English",
    "patientrec": "Unable to identify care recommendation",
    "patientgroup": "Test results not recorded",
    "recdetails": [
      "A recommendation cannot be made because items from the patient history do not have a result value specified."
    ],
    "errors": [
      "Please review the highlighted lab reports and document the results so the CDS can evaluate the patient’s history and provide an evidence-based care recommendation."
    ],
    "disclaimer": "An evidence based recommendation is provided based on clinical data available in the patient's electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.",
    "order": "",
    "risk": {},
    "references": [
      {
        "name": "ASCCP Risk-Based Management Consensus, 2019",
        "details": [
          "After a diagnosis of high-grade histology or cytology, patients may undergo hysterectomy for reasons related or unrelated to their cervical abnormalities. If hysterectomy is performed for treatment, patients should have 3 consecutive annual HPV-based tests before entering long-term surveillance. Long-term surveillance after treatment for histologic HSIL (CIN 2 or CIN 3) or AIS involves HPV-based testing at 3-year intervals for 25 years, regardless of whether the patient has had a hysterectomy either for treatment or at any point during the surveillance period (CIII). Among patients who have undergone hysterectomy but either have no previous diagnosis of CIN 2+ within the previous 25 years or have completed the 25 year surveillance period, screening is generally not recommended. However, if performed, abnormal vaginal screening test results should be managed according to published recommendations (BII)."
        ],
        "documents": [
          {
            "title": "2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors, 2019",
            "link": "https://www.asccp.org/Assets/b2263c88-ec67-4ab0-9f07-6f112e76f8d7/637269576182030000/2019-asccp-risk-based-management-consensus-3-5-pdf"
          }
        ]
      }
    ],
    "logicpath": {
      "name": "(Logic Path 5 - 4.7.3.3.7)",
      "reference": "#logic-path"
    },
    "logicsummary": "Surveillance following results not requiring immediate colposcopic referral.",
    "logiccriteria": [
      {
        "title": "Inclusions",
        "groups": [
          {
            "name": "Age >= 21 years old",
            "items": []
          },
          {
            "name": "Sex at birth = female",
            "items": []
          }
        ]
      },
      {
        "title": "Exclusions",
        "groups": []
      },
      {
        "title": "Abnormal results",
        "groups": [
          {
            "name": "Most Recent Cotest <= 3 years ago",
            "items": [
              {
                "criteria": "HPV Test - Positive",
                "date": "12/18/2021",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap) - LSIL",
                "date": "12/18/2021",
                "action": "View"
              }
            ]
          },
          {
            "name": "Second Most Recent Cotest",
            "items": [
              {
                "criteria": "HPV Test - Negative",
                "date": "11/20/2020",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap) - LSIL",
                "date": "11/20/2020",
                "action": "View"
              }
            ]
          }
        ]
      }
    ],
    "timeline": {
      "explanation": "Expected sequence of events for Average Risk Cervical Cancer Screening patients following current guidelines, assuming no abnormal results found or significant changes to clinical status.",
      "projection": [
        {
          "era": "Age 21 to 29 years",
          "status": "",
          "options": [
            {
              "activity": "Cervical Cytology",
              "period": "3 years",
              "detail": "Cervical Cytology testing alone",
              "duration": "2 to 3 times (2015 to 2024)",
            }
          ]
        },
        {
          "era": "Age 30 to 65 years",
          "status": "Women in this age group should discuss with their health care professional which testing strategy is best for them.",
          "options": [
            {
              "activity": "hrHPV",
              "period": "5 years",
              "detail": "hrHPV Testing alone",
              "duration": "7 to 9 times (2024 to 2059)",
            },
            {
              "activity": "hrHPV + Cytology",
              "period": "5 years",
              "detail": "hrHPV/Cytology cotesting",
              "duration": "7 to 9 times (2024 to 2059)",
            },
            {
              "activity": "Cervical Cytology",
              "period": "3 years",
              "detail": "Cervical Cytology testing alone",
              "duration": "10 to 12 times (2024 to 2059)",
            }
          ]
        },
        {
          "era": "Age older than 65 years",
          "status": "",
          "options": [
            {
              "activity": "Testing as needed",
              "period": "5 years",
              "detail": "Testing as needed until 3 consecutive negative cytology results or 2 consecutive negative cotesting results within 10 years.",
              "duration": "As needed starting in 2059",
            }
          ]
        }
      ]
    },
    "updated": "2022-03-24",
    "labresults": [{
      "name": "HPV Test",
      "value": "Positive",
      "date": "2021-12-18",
      "sdate": "Dec 2021"
    }, {
      "name": "Cytology (Pap)",
      "value": "LSIL",
      "date": "2021-12-18",
      "sdate": "Dec 2021"
    }, {
      "name": "HPV Test",
      "value": "See Report",
      "date": "2020-11-20",
      "sdate": "Nov 2020",
      "status": "incomplete"
    }, {
      "name": "Cytology (Pap)",
      "value": "See Report",
      "date": "2020-11-20",
      "sdate": "Nov 2020",
      "status": "incomplete"
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2015-10-15",
      "sdate": "Oct 2015"
    }, {
      "name": "Cytology (Pap)",
      "value": "LSIL",
      "date": "2015-10-15",
      "sdate": "Oct 2015"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2011-09-15",
      "sdate": "Sep 2011"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2008-10-12",
      "sdate": "Oct 2008"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2007-08-02",
      "sdate": "Aug 2007"
    }]
  },
  "darla": {
    "name": "Darla43 Evans12",
    "scenario": "Surveillance with recommended colposcopy with no prior screening results",
    "scenario_desc": "The appropriate re-testing interval in individuals with minimally abnormal test results (e.g., NILM/HPV+ non16/18) who have no prior abnormal test results and who have a negative HPV test result within the prior 5 years",
    "mrn": "GB-5843-1593",
    "dob": "05/23/1990",
    "age": 31,
    "height": "5 ft 7 in",
    "weight": "188 lb",
    "sab": "Female",
    "gender": "Female",
    "pregnant": "Unknown",
    "race": "White; Non-Hispanic",
    "language": "English",
    "patientrec": "Colposcopy is recommended",
    "patientgroup": "Surveillance with recommended colposcopy",
    "recdetails": [
      "Per the 2012 ASCCP Risk Management guidelines, colposcopy is recommended.",
      "When patients have an estimated immediate risk of diagnosis of CIN 3+ of 4.0% or greater based on history and current results, referral to colposcopy is recommended (AII)."
    ],
    "disclaimer": "An evidence based recommendation is provided based on clinical data available in the patient's electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.",
    "order": "referral",
    "risk": {
      "title": "Risk Estimates",
      "subtitle": "Immediate and 5-year risks of CIN 3+ for abnormal screening results, when there are no known prior HPV test results",
      "headers": [
        {
          "key": "currentHpv",
          "display": "Current HPV Result"
        },
        {
          "key": "currentCyto",
          "display": "Current Cytology Result"
        },
        {
          "key": "immediateRisk",
          "display": "CIN 3+ Immediate Risk (%)"
        },
        {
          "key": "fiveYearRisk",
          "display": "CIN 3+ 5 yr Risk (%)"
        }
      ],
      "relevant": {
        "currentHpv": "HPV Positive",
        "currentCyto": "LSIL",
        "immediateRisk": 4.3,
        "fiveYearRisk": 6.9
      },
      "adjacent": [
        {
          "currentHpv": "HPV Positiv",
          "currentCyto": "NILM",
          "immediateRisk": 2.1,
          "fiveYearRisk": 4.8
        },
        {
          "currentHpv": "HPV Positive",
          "currentCyto": "ASC-US",
          "immediateRisk": 4.4,
          "fiveYearRisk": 7.3
        },
        {
          "currentHpv": "HPV Positive",
          "currentCyto": "ASC-H",
          "immediateRisk": 26,
          "fiveYearRisk": 33
        },
        {
          "currentHpv": "HPV Positive",
          "currentCyto": "AGC",
          "immediateRisk": 26,
          "fiveYearRisk": 35
        },
        {
          "currentHpv": "HPV Positive",
          "currentCyto": "HSIL+",
          "immediateRisk": 49,
          "fiveYearRisk": 53
        }
      ],
      "clarifications": [
        "Applicable to patients without a prior HPV screening test result documented in the medical record. It applies for cotest results, primary HPV screens with cytology triage for HPV-positive results."
      ]
    },
    "references": [
      {
        "name": "ASCCP Risk-Based Management Consensus, 2019",
        "documents": [
          {
            "title": "2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors, 2019",
            "link": "https://www.asccp.org/Assets/b2263c88-ec67-4ab0-9f07-6f112e76f8d7/637269576182030000/2019-asccp-risk-based-management-consensus-3-5-pdf"
          }
        ]
      }
    ],
    "logicpath": {
      "name": "(Logic Path 5 - 4.7.3.3.6)",
      "reference": "#logic-path"
    },
    "logicsummary": "Abnormal results (Table 1A)",
    "logiccriteria": [
      {
        "title": "Inclusions",
        "groups": [
          {
            "name": "Age >= 25 years old",
            "items": []
          },
          {
            "name": "Sex at birth = female",
            "items": []
          }
        ]
      },
      {
        "title": "Exclusions",
        "groups": []
      },
      {
        "title": "Abnormal results",
        "groups": [
          {
            "name": "Most Recent Surveillance Test <= 5 years ago",
            "items": [
              {
                "criteria": "HPV Test - Positive",
                "date": "01/16/2022",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap) - LSIL",
                "date": "01/16/2022",
                "action": "View"
              },
              {
                "criteria": "Previous Surveillance Test is Not Found - TRUE",
                "date": null,
                "action": null
              }
            ]
          }
        ]
      }
    ],
    "timeline": {
      "explanation": "[Explanation text about the timeline here...]",
      "projection": [
        {
          "era": "Start Age 21",
          "status": "Patient Status info here...",
          "options": [
            {
              "activity": "Cervical Cytology",
              "period": "3 years",
              "detail": "Cervical Cytology testing alone",
              "duration": "2 to 3 times (2015 to 2024)",
            }
          ]
        }
      ]
    },
    "labresults": [{
      "name": "HPV Test",
      "value": "Positive",
      "date": "2022-01-16",
      "sdate": "Jan 2022",
      "genotype": "HPV16-/HPV18+"
    }, {
      "name": "Cytology (Pap)",
      "value": "LSIL",
      "date": "2022-01-16",
      "sdate": "Jan 2022"
    }]
  },
  "erica": {
    "name": "Erica94 Castellanos87",
    "scenario": "Surveillance of abnormal result - minimally abnormal result with no prior abnormal",
    "scenario_desc": "The appropriate re-testing interval in individuals with minimally abnormal test results who have no prior abnormal test results but who do not meet the criteria for colposcopy (e.g., ASC-US/HPV-; NILM/HPV+ non16/18) - with minor tweaking",
    "mrn": "JR-4857-9383",
    "dob": "10/25/1981",
    "age": 40,
    "height": "5 ft 5 in",
    "weight": "151 lb",
    "sab": "Female",
    "gender": "Female",
    "pregnant": "Unknown",
    "race": "White; Hispanic",
    "language": "Spanish",
    "patientrec": "Surveillance Testing Due 1/19/2023",
    "patientgroup": "Surveillance of abnormal result",
    "recdetails": [
      "Per the ASCCP Risk-Based Management Guidelines, surveillance testing is recommended with a 1-year follow-up.",
      "After abnormal cervical cancer screening test results for patients 25 years or older, colposcopic biopsy results, or treatment of histologic HSIL, surveillance with either HPV testing alone or cotesting is preferred (AI). Surveillance with cervical cytology alone is acceptable only if testing with HPV or cotesting is not feasible (CIII). Cytology is recommended at 6-month intervals when 1-year intervals are recommended for HPV or cotesting, and annually when 3-year intervals are recommended for HPV or cotesting (AII)."
    ],
    "disclaimer": "An evidence based recommendation is provided based on clinical data available in the patient's electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.",
    "order": "surveillance",
    "risk": {
      "title": "Risk Estimates",
      "subtitle": "Immediate and 5-year risks of CIN 3+ after a prior HPV-negative screen documented in the medical record",
      "headers": [
        {
          "key": "currentHpv",
          "display": "Current HPV Result"
        },
        {
          "key": "currentCyto",
          "display": "Current Cytology Result"
        },
        {
          "key": "immediateRisk",
          "display": "CIN 3+ Immediate Risk (%)"
        },
        {
          "key": "fiveYearRisk",
          "display": "CIN 3+ 5 yr Risk (%)"
        }
      ],
      "relevant": {
        "currentHpv": "HPV Positive",
        "currentCyto": "LSIL",
        "immediateRisk": 2.1,
        "fiveYearRisk": 3.8
      },
      "adjacent": [
        {
          "currentHpv": "HPV Positive",
          "currentCyto": "NILM",
          "immediateRisk": 0.74,
          "fiveYearRisk": 2.3
        },
        {
          "currentHpv": "HPV Positive",
          "currentCyto": "ASC-US",
          "immediateRisk": 2.0,
          "fiveYearRisk": 3.8
        },
        {
          "currentHpv": "HPV Positive",
          "currentCyto": "ASC-H",
          "immediateRisk": 14,
          "fiveYearRisk": 18
        },
        {
          "currentHpv": "HPV Positive",
          "currentCyto": "AGC",
          "immediateRisk": 14,
          "fiveYearRisk": 21
        },
        {
          "currentHpv": "HPV Positive",
          "currentCyto": "HSIL+",
          "immediateRisk": 32,
          "fiveYearRisk": 34
        }
      ],
      "clarifications": [
        "Applicable to patients with abnormal screening results that are preceded by a documented negative HPV test result within an appropriate screening interval (approximately 5 years)."
      ]
    },
    "references": [
      {
        "name": "ASCCP Risk-Based Management Consensus, 2019",
        "documents": [
          {
            "title": "2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors, 2019",
            "link": "https://www.asccp.org/Assets/b2263c88-ec67-4ab0-9f07-6f112e76f8d7/637269576182030000/2019-asccp-risk-based-management-consensus-3-5-pdf"
          }
        ]
      }
    ],
    "logicpath": {
      "name": "(Logic Path 5 - 4.7.3.3.6) - Surveillance following results not requiring immediate colposcopic referral",
      "reference": "#logic-path"
    },
    "logicsummary": "Abnormal results (Table 1A)",
    "logiccriteria": [
      {
        "title": "Inclusions",
        "groups": [
          {
            "name": "Age >= 25 years old",
            "items": []
          },
          {
            "name": "Sex at birth = female",
            "items": []
          }
        ]
      },
      {
        "title": "Exclusions",
        "groups": []
      },
      {
        "title": "Common Abnormal Result",
        "groups": [
          {
            "name": "Most Recent Cotest <= 5 years ago",
            "items": [
              {
                "criteria": "HPV Test - Positive",
                "date": "01/19/2017",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap) - LSIL",
                "date": "01/19/2017",
                "action": "View"
              }
            ]
          },
          {
            "name": "Previous Cotest is Negative",
            "items": [
              {
                "criteria": "HPV Test - Negative",
                "date": "01/02/2014",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap) - NILM",
                "date": "01/02/2014",
                "action": "View"
              }
            ]
          }
        ]
      }
    ],
    "timeline": {
      "explanation": "[Explanation text about the timeline here...]",
      "projection": [
        {
          "era": "Start Age 21",
          "status": "Patient Status info here...",
          "options": [
            {
              "activity": "Cervical Cytology",
              "period": "3 years",
              "detail": "Cervical Cytology testing alone",
              "duration": "2 to 3 times (2015 to 2024)",
            }
          ]
        }
      ]
    },
    "updated": "2022-05-04",
    "labresults": [{
      "name": "HPV Test",
      "value": "Positive",
      "date": "2022-01-19",
      "sdate": "Jan 2022",
      "manual": true,
      "genotype": "HPV16-/HPV18-"
    }, {
      "name": "Cytology (Pap)",
      "value": "LSIL",
      "date": "2022-01-19",
      "sdate": "Jan 2022",
      "manual": true
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2017-01-02",
      "sdate": "Jan 2017"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2017-01-02",
      "sdate": "Jan 2017"
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2012-10-12",
      "sdate": "Oct 2012"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2012-10-12",
      "sdate": "Oct 2012"
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2006-08-10",
      "sdate": "Aug 2006"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2006-08-10",
      "sdate": "Aug 2006"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2001-05-02",
      "sdate": "May 2001"
    }]
  },
  "ericax": {
    "name": "Erica94 Castellanos87",
    "scenario": "Surveillance of abnormal result - Missing Latest Cotest",
    "scenario_desc": "The appropriate re-testing interval in individuals with minimally abnormal test results who have no prior abnormal test results but who do not meet the criteria for colposcopy (e.g., ASC-US/HPV-; NILM/HPV+ non16/18) - with minor tweaking",
    "mrn": "JR-4857-9383",
    "dob": "10/25/1981",
    "age": 40,
    "height": "5 ft 5 in",
    "weight": "151 lb",
    "sab": "Female",
    "gender": "Female",
    "pregnant": "Unknown",
    "race": "White; Hispanic",
    "language": "Spanish",
    "patientrec": "Cervical Screening Due Now",
    "patientgroup": "Average-risk screening",
    "recdetails": [
      "Per USPSTF recommendations, this patient is due for cervical cancer screening.",
      "The screening can be performed by using one of the following screening approaches: Cervical cytology testing alone, hrHPV testing alone, or cotesting with cervical cytology testing and hrHPV testing."
    ],
    "disclaimer": "An evidence based recommendation is provided based on clinical data available in the patient's electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.",
    "order": "screening",
    "risk": {
      "title": "Risk Estimates",
      "subtitle": "Risk estimates are not available for patients with no prior positive HPV test results or abnormal cytology results.",
      "headers": [],
      "relevant": {},
      "adjacent": [],
      "clarifications": []
    },
    "references": [
      {
        "name": "ASCCP Risk-Based Management Consensus, 2019",
        "documents": [
          {
            "title": "2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors, 2019",
            "link": "https://www.asccp.org/Assets/b2263c88-ec67-4ab0-9f07-6f112e76f8d7/637269576182030000/2019-asccp-risk-based-management-consensus-3-5-pdf"
          }
        ]
      }
    ],
    "logicpath": {
      "name": "(Logic Path 5 - 4.7.3.3.6) - Surveillance following results not requiring immediate colposcopic referral",
      "reference": "#logic-path"
    },
    "logicsummary": "Abnormal results (Table 1A)",
    "logiccriteria": [
      {
        "title": "Inclusions",
        "groups": [
          {
            "name": "Age >= 25 years old",
            "items": []
          },
          {
            "name": "Sex at birth = female",
            "items": []
          }
        ]
      },
      {
        "title": "Exclusions",
        "groups": []
      },
      {
        "title": "Common Abnormal Result",
        "groups": [
          {
            "name": "Most Recent Cotest <= 5 years ago",
            "items": [
              {
                "criteria": "HPV Test - Positive",
                "date": "01/19/2017",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap) - LSIL",
                "date": "01/19/2017",
                "action": "View"
              }
            ]
          },
          {
            "name": "Previous Cotest is Negative",
            "items": [
              {
                "criteria": "HPV Test - Negative",
                "date": "01/02/2014",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap) - NILM",
                "date": "01/02/2014",
                "action": "View"
              }
            ]
          }
        ]
      }
    ],
    "timeline": {
      "explanation": "[Explanation text about the timeline here...]",
      "projection": [
        {
          "era": "Start Age 21",
          "status": "Patient Status info here...",
          "options": [
            {
              "activity": "Cervical Cytology",
              "period": "3 years",
              "detail": "Cervical Cytology testing alone",
              "duration": "2 to 3 times (2015 to 2024)",
            }
          ]
        }
      ]
    },
    "updated": "2022-03-24",
    "labresults": [{
      "name": "HPV Test",
      "value": "Negative",
      "date": "2017-01-02",
      "sdate": "Jan 2017"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2017-01-02",
      "sdate": "Jan 2017"
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2012-10-12",
      "sdate": "Oct 2012"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2012-10-12",
      "sdate": "Oct 2012"
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2006-08-10",
      "sdate": "Aug 2006"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2006-08-10",
      "sdate": "Aug 2006"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2001-05-02",
      "sdate": "May 2001"
    }]
  },
  "jill": {
    "name": "Jill34 Brown12",
    "scenario": "Post-colposcopy surveillance",
    "scenario_desc": "Table 4 - Surveillance for low-grade result",
    "mrn": "KR-4852-3782",
    "dob": "06/02/1986",
    "age": 35,
    "height": "5 ft 7 in",
    "weight": "176 lb",
    "sab": "Female",
    "gender": "Female",
    "pregnant": "Unknown",
    "race": "White; Non-Hispanic",
    "language": "English",
    "patientrec": "Surveillance Testing Due 1/10/2025",
    "patientgroup": "Post-colposcopy surveillance",
    "recdetails": [
      "Per the ASCCP Risk-Based Management Guidelines, surveillance testing is recommended with a 3-year follow-up.",
      "After abnormal cervical cancer screening test results for patients 25 years or older, colposcopic biopsy results, or treatment of histologic HSIL, surveillance with either HPV testing alone or cotesting is preferred (AI). Surveillance with cervical cytology alone is acceptable only if testing with HPV or cotesting is not feasible (CIII). Cytology is recommended at 6-month intervals when 1-year intervals are recommended for HPV or cotesting, and annually when 3-year intervals are recommended for HPV or cotesting (AII)."
    ],
    "disclaimer": "An evidence based recommendation is provided based on clinical data available in the patient's electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.",
    "order": "surveillance",
    "risk": {
      "title": "Risk Estimates",
      "subtitle": "Immediate and 5-year risks of CIN 3+ postcolposcopy at which CIN 2+ was not found, after referral for low-grade results.",
      "headers": [
        {
          "key": "currentHpv",
          "display": "Current HPV Result"
        },
        {
          "key": "currentCyto",
          "display": "Current Cytology Result"
        },
        {
          "key": "immediateRisk",
          "display": "CIN 3+ Immediate Risk (%)"
        },
        {
          "key": "fiveYearRisk",
          "display": "CIN 3+ 5 yr Risk (%)"
        }
      ],
      "relevant": {
        "currentHpv": "HPV-negative",
        "currentCyto": "NILM",
        "immediateRisk": 0.0,
        "fiveYearRisk": 0.42
      },
      "adjacent": [
        {
          "currentHpv": "HPV-negative",
          "currentCyto": "ASC-US/LSIL",
          "immediateRisk": 0.05,
          "fiveYearRisk": 0.92
        },
        {
          "currentHpv": "HPV-negative",
          "currentCyto": "High grade",
          "immediateRisk": 1.6,
          "fiveYearRisk": 4.1
        },
        {
          "currentHpv": "HPV-negative",
          "currentCyto": "ALL",
          "immediateRisk": 0.01,
          "fiveYearRisk": 0.51
        }
      ],
      "clarifications": [
        "Applicable to patient who are recommended for 1-year follow-up surveillance after less than CIN 2 colposcopy results following a low-grade (i.e. ASC-US, LSIL regardless of HPV test result or HPV-positive NILM) screening result. This addresses both a current cotest result or primary HPV test with cytology triage for HPV-positive tests.",
        "High grade corresponds to ASC-H/AGC/HSIL+",
        "HPV-negative ALL, e.g. primary HPV screening"
      ]
    },
    "references": [
      {
        "name": "ASCCP Risk-Based Management Consensus, 2019",
        "documents": [
          {
            "title": "2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors, 2019",
            "link": "https://www.asccp.org/Assets/b2263c88-ec67-4ab0-9f07-6f112e76f8d7/637269576182030000/2019-asccp-risk-based-management-consensus-3-5-pdf"
          }
        ]
      }
    ],
    "logicpath": {
      "name": "(Logic Path 5 - 4.7.3.3.9)",
      "reference": "#logic-path"
    },
    "logicsummary": "Surveillance visit following colposcopy/biopsy finding less than CIN2",
    "logiccriteria": [
      {
        "title": "Inclusions",
        "groups": [
          {
            "name": "Age >= 25 years old",
            "items": []
          },
          {
            "name": "Sex at birth = female",
            "items": []
          }
        ]
      },
      {
        "title": "Exclusions",
        "groups": []
      },
      {
        "title": "Abnormal results",
        "groups": [
          {
            "name": "Most Recent Cotest >= 12 months and <= 18 months after Latest Cervical Histology Test",
            "items": [
              {
                "criteria": "HPV Test - Negative",
                "date": "01/10/2022",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap) - NILM",
                "date": "01/10/2022",
                "action": "View"
              }
            ]
          },
          {
            "name": "Latest Cervical Histology Test",
            "items": [
              {
                "criteria": "Cervical Histology - Histologic LSIL (CIN1)",
                "date": "12/10/2020",
                "action": "View"
              }
            ]
          }
        ]
      }
    ],
    "timeline": {
      "explanation": "[Explanation text about the timeline here...]",
      "projection": [
        {
          "era": "Start Age 21",
          "status": "Patient Status info here...",
          "options": [
            {
              "activity": "Cervical Cytology",
              "period": "3 years",
              "detail": "Cervical Cytology testing alone",
              "duration": "2 to 3 times (2015 to 2024)",
            }
          ]
        }
      ]
    },
    "updated": "2022-01-26",
    "labresults": [{
      "name": "HPV Test",
      "value": "Negative",
      "date": "2022-01-10",
      "sdate": "Jan 2022"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2022-01-10",
      "sdate": "Jan 2022"
    }, {
      "name": "Colposcopy",
      "value": "Completed",
      "date": "2020-12-10",
      "sdate": "Dec 2020"
    }, {
      "name": "Cervical Histology",
      "value": "Histologic LSIL (CIN1)",
      "date": "2020-12-10",
      "sdate": "Dec 2020"
    }, {
      "name": "HPV Test",
      "value": "Positive",
      "date": "2020-12-01",
      "sdate": "Dec 2020",
      "genotype": "HPV16+/HPV18+"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2020-12-01",
      "sdate": "Dec 2020"
    }]
  },
  "lily": {
    "name": "Lily23 Flowers68",
    "scenario": "Receipt of biopsy results",
    "scenario_desc": "(Receipt of biopsy results, Table 3): The appropriate re-testing interval and indications for repeat colposcopy after an initial colposcopy in which no CIN2+ was found among those with a prior minimal* test result abnormality - with minor tweaking",
    "mrn": "DW-5934-4529",
    "dob": "11/27/1985",
    "age": 36,
    "height": "5 ft 6 in",
    "weight": "163 lb",
    "sab": "Female",
    "gender": "Female",
    "pregnant": "Unknown",
    "race": "Black or African American; Non-Hispanic",
    "language": "English",
    "patientrec": "Surveillance Testing Due 10/25/2022",
    "patientgroup": "Post-colposcopy surveillance",
    "recdetails": [
      "Per the ASCCP Risk-Based Management Guidelines, surveillance testing is recommended with a 1-year follow-up.",
      "After abnormal cervical cancer screening test results for patients 25 years or older, colposcopic biopsy results, or treatment of histologic HSIL, surveillance with either HPV testing alone or cotesting is preferred (AI). Surveillance with cervical cytology alone is acceptable only if testing with HPV or cotesting is not feasible (CIII). Cytology is recommended at 6-month intervals when 1-year intervals are recommended for HPV or cotesting, and annually when 3-year intervals are recommended for HPV or cotesting (AII)."
    ],
    "disclaimer": "An evidence based recommendation is provided based on clinical data available in the patient's electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.",
    "order": "surveillance",
    "risk": {
      "title": "Risk Estimates",
      "subtitle": "CIN 3+ 1-year and 5-year risks upon receipt of colposcopy/biopsy result",
      "headers": [
        {
          "key": "preColpoResult",
          "display": "Precolposcopy test result"
        },
        {
          "key": "colpoDx",
          "display": "Colposcopy diagnosis"
        },
        {
          "key": "oneYearRisk",
          "display": "CIN3+ 1 yr Risk (%)"
        },
        {
          "key": "fiveYearRisk",
          "display": "CIN3+ 5 yr Risk (%)"
        }
      ],
      "relevant": {
        "preColpoResult": "HPV Positive LSIL",
        "colpoDx": "CIN1",
        "oneYearRisk": 0.74,
        "fiveYearRisk": 2.3
      },
      "adjacent": [
        {
          "preColpoResult": "HPV Positive NILM x2",
          "colpoDx": "CIN1",
          "oneYearRisk": 0.74,
          "fiveYearRisk": 2.8
        },
        {
          "preColpoResult": "HPV Positive ASC-US",
          "colpoDx": "CIN1",
          "oneYearRisk": 0.53,
          "fiveYearRisk": 2.6
        },
        {
          "preColpoResult": "ASC-H",
          "colpoDx": "CIN1",
          "oneYearRisk": 1.4,
          "fiveYearRisk": 5.6
        },
        {
          "preColpoResult": "AGC",
          "colpoDx": "CIN1",
          "oneYearRisk": 1.3,
          "fiveYearRisk": 3.8
        },
        {
          "preColpoResult": "HSIL+",
          "colpoDx": "CIN1",
          "oneYearRisk": 3.9,
          "fiveYearRisk": 6.5
        }
      ],
      "clarifications": [
        "Applicable to patients who have undergone a recent colposcopy."
      ]
    },
    "references": [
      {
        "name": "ASCCP Risk-Based Management Consensus, 2019",
        "documents": [
          {
            "title": "2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors, 2019",
            "link": "https://www.asccp.org/Assets/b2263c88-ec67-4ab0-9f07-6f112e76f8d7/637269576182030000/2019-asccp-risk-based-management-consensus-3-5-pdf"
          }
        ]
      }
    ],
    "logicpath": {
      "name": "(Logic Path 5 - 4.7.3.3.8) - Receipt of colposcopy/biopsy results",
      "reference": "#logic-path"
    },
    "logicsummary": "Follow-up after treatment for CIN2 or CIN3 Table 5A.",
    "logiccriteria": [
      {
        "title": "Inclusions",
        "groups": [
          {
            "name": "Age >= 25 years old",
            "items": []
          },
          {
            "name": "Sex at birth = female",
            "items": []
          }
        ]
      },
      {
        "title": "Exclusions",
        "groups": []
      },
      {
        "title": "Abnormal colposcopy/biopsy results",
        "groups": [
          {
            "name": "Latest Cervical Histology Test <= 12 months ago",
            "items": [
              {
                "criteria": "Cervical Histology - Histological LSIL (CIN1)",
                "date": "10/25/2021",
                "action": "View"
              }
            ]
          },
          {
            "name": "Most Recent Cotest <= 3 months before Latest Cervical Histology",
            "items": [
              {
                "criteria": "HPV Test - Positive (Type 16)",
                "date": "08/17/2021",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap) - LSIL",
                "date": "08/17/2021",
                "action": "View"
              }
            ]
          }
        ]
      }
    ],
    "timeline": {
      "explanation": "[Explanation text about the timeline here...]",
      "projection": [
        {
          "era": "Start Post-colposcopy CIN1",
          "status": "Patient Status info here...",
          "options": [
            {
              "activity": "Surveillance Testing",
              "period": "1 year",
              "detail": "[What surveillance is needed?]",
              "duration": "1 year follow-up (How often? Until when?)",
            },
            {
              "activity": "Next State after surveillance",
              "period": "? years",
              "detail": "[What action is needed?]",
              "duration": "? to ? times (2023 to 2059)",
            }
          ]
        },
        {
          "era": "Next Expected Event after Post-colposcopy surveillance",
          "status": "Note about this expected state...",
          "options": [
            {
              "activity": "[Next state after event]",
              "period": "? year",
              "detail": "[What actions happen here?]",
              "duration": "1 year follow-up (How often? Until when?)",
            }
          ]
        },
        {
          "era": "Age older than 65 years",
          "status": "[What is expected for this patient once over 65?]",
          "options": [
            {
              "activity": "Testing as needed",
              "period": "5 years",
              "detail": "Testing as needed until 3 consecutive negative cytology results or 2 consecutive negative cotesting results within 10 years.",
              "duration": "As needed starting in 2050",
            }
          ]
        }
      ]
    },
    "updated": "2022-04-04",
    "labresults": [{
      "name": "Cervical Histology",
      "value": "Histologic LSIL (CIN1)",
      "date": "2021-10-25",
      "sdate": "Oct 2021",
      "manual": true
    }, {
      "name": "Cervical Biopsy",
      "value": "Completed",
      "date": "2021-10-25",
      "sdate": "Oct 2021"
    }, {
      "name": "Colposcopy",
      "value": "Completed",
      "date": "2021-10-25",
      "sdate": "Oct 2021"
    }, {
      "name": "HPV Test",
      "value": "Positive",
      "date": "2021-08-17",
      "sdate": "Aug 2021",
      "genotype": "HPV16+"
    }, {
      "name": "Cytology (Pap)",
      "value": "LSIL",
      "date": "2021-08-17",
      "sdate": "Aug 2021"
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2020-06-10",
      "sdate": "Jun 2020"
    }, {
      "name": "Cytology (Pap)",
      "value": "LSIL",
      "date": "2020-06-10",
      "sdate": "Jun 2020"
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2016-10-15",
      "sdate": "Oct 2016"
    }, {
      "name": "Cytology (Pap)",
      "value": "ASC-US",
      "date": "2016-10-15",
      "sdate": "Oct 2016"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2012-08-02",
      "sdate": "Aug 2012"
    }]
  },
  "lilyx": {
    "name": "Lily23 Flowers68",
    "scenario": "Receipt of biopsy results - Incomplete",
    "scenario_desc": "Incomplete value for Cervical Histology",
    "mrn": "DW-5934-4529",
    "dob": "11/27/1985",
    "age": 36,
    "height": "5 ft 6 in",
    "weight": "163 lb",
    "sab": "Female",
    "gender": "Female",
    "pregnant": "Unknown",
    "race": "Black or African American; Non-Hispanic",
    "language": "English",
    "patientrec": "Unable to identify care recommendation",
    "patientgroup": "Test results not recorded",
    "recdetails": [
      "A recommendation cannot be made because items from the patient history do not have a result value specified."
    ],
    "errors": [
      "Please review the highlighted lab reports and document the results so the CDS can evaluate the patient’s history and provide an evidence-based care recommendation."
    ],
    "disclaimer": "An evidence based recommendation is provided based on clinical data available in the patient's electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.",
    "order": "",
    "risk": {},
    "references": [
      {
        "name": "ASCCP Risk-Based Management Consensus, 2019",
        "documents": [
          {
            "title": "2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors, 2019",
            "link": "https://www.asccp.org/Assets/b2263c88-ec67-4ab0-9f07-6f112e76f8d7/637269576182030000/2019-asccp-risk-based-management-consensus-3-5-pdf"
          }
        ]
      }
    ],
    "logicpath": {
      "name": "(Logic Path 5 - 4.7.3.3.8) - Receipt of colposcopy/biopsy results",
      "reference": "#logic-path"
    },
    "logicsummary": "Follow-up after treatment for CIN2 or CIN3 Table 5A.",
    "logiccriteria": [
      {
        "title": "Inclusions",
        "groups": [
          {
            "name": "Age >= 25 years old",
            "items": []
          },
          {
            "name": "Sex at birth = female",
            "items": []
          }
        ]
      },
      {
        "title": "Exclusions",
        "groups": []
      },
      {
        "title": "Abnormal colposcopy/biopsy results",
        "groups": [
          {
            "name": "Latest Cervical Histology Test <= 12 months ago",
            "items": [
              {
                "criteria": "Cervical Histology - Histological LSIL (CIN1)",
                "date": "10/25/2021",
                "action": "View"
              }
            ]
          },
          {
            "name": "Most Recent Cotest <= 3 months before Latest Cervical Histology",
            "items": [
              {
                "criteria": "HPV Test - Positive (Type 16)",
                "date": "08/17/2021",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap) - LSIL",
                "date": "08/17/2021",
                "action": "View"
              }
            ]
          }
        ]
      }
    ],
    "timeline": {
      "explanation": "[Explanation text about the timeline here...]",
      "projection": [
        {
          "era": "Start Post-colposcopy CIN1",
          "status": "Patient Status info here...",
          "options": [
            {
              "activity": "Surveillance Testing",
              "period": "1 year",
              "detail": "[What surveillance is needed?]",
              "duration": "1 year follow-up (How often? Until when?)",
            },
            {
              "activity": "Next State after surveillance",
              "period": "? years",
              "detail": "[What action is needed?]",
              "duration": "? to ? times (2023 to 2059)",
            }
          ]
        },
        {
          "era": "Next Expected Event after Post-colposcopy surveillance",
          "status": "Note about this expected state...",
          "options": [
            {
              "activity": "[Next state after event]",
              "period": "? year",
              "detail": "[What actions happen here?]",
              "duration": "1 year follow-up (How often? Until when?)",
            }
          ]
        },
        {
          "era": "Age older than 65 years",
          "status": "[What is expected for this patient once over 65?]",
          "options": [
            {
              "activity": "Testing as needed",
              "period": "5 years",
              "detail": "Testing as needed until 3 consecutive negative cytology results or 2 consecutive negative cotesting results within 10 years.",
              "duration": "As needed starting in 2050",
            }
          ]
        }
      ]
    },
    "updated": "2022-04-04",
    "labresults": [{
      "name": "Cervical Histology",
      "value": "See Report",
      "date": "2021-10-25",
      "sdate": "Oct 2021",
      "status": "incomplete"
    }, {
      "name": "Cervical Biopsy",
      "value": "Completed",
      "date": "2021-10-25",
      "sdate": "Oct 2021"
    }, {
      "name": "Colposcopy",
      "value": "Completed",
      "date": "2021-10-25",
      "sdate": "Oct 2021"
    }, {
      "name": "HPV Test",
      "value": "Positive",
      "date": "2021-08-17",
      "sdate": "Aug 2021",
      "genotype": "HPV16+"
    }, {
      "name": "Cytology (Pap)",
      "value": "LSIL",
      "date": "2021-08-17",
      "sdate": "Aug 2021"
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2020-06-10",
      "sdate": "Jun 2020"
    }, {
      "name": "Cytology (Pap)",
      "value": "LSIL",
      "date": "2020-06-10",
      "sdate": "Jun 2020"
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2016-10-15",
      "sdate": "Oct 2016"
    }, {
      "name": "Cytology (Pap)",
      "value": "ASC-US",
      "date": "2016-10-15",
      "sdate": "Oct 2016"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2012-08-02",
      "sdate": "Aug 2012"
    }]
  },
  "lisa": {
    "name": "Lisa02 Danvers12",
    "scenario": "Prior vaginal/vulvar disease",
    "mrn": "RF-8762-9400",
    "dob": "08/19/1990",
    "age": 31,
    "height": "5 ft 7 in",
    "weight": "142 lb",
    "sab": "Female",
    "gender": "Female",
    "pregnant": "Unknown",
    "race": "Black or African American; Non-Hispanic",
    "language": "English",
    "patientrec": "Unable to identify care recommendation",
    "patientgroup": "Test results not recorded",
    "recdetails": [
      "A recommendation cannot be made because items from the patient history do not have a result value specified."
    ],
    "errors": [
      "Please review the highlighted lab reports and document the results so the CDS can evaluate the patient’s history and provide an evidence-based care recommendation."
    ],
    "disclaimer": "An evidence based recommendation is provided based on clinical data available in the patient's electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.",
    "order": "",
    "risk": {},
    "references": [
      {
        "name": "ASCCP Risk-Based Management Consensus, 2019",
        "documents": [
          {
            "title": "2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors, 2019",
            "link": "https://www.asccp.org/Assets/b2263c88-ec67-4ab0-9f07-6f112e76f8d7/637269576182030000/2019-asccp-risk-based-management-consensus-3-5-pdf"
          }
        ]
      }
    ],
    "logicpath": {
      "name": "(Logic Path 5 - 4.7.3.3.8) - Receipt of colposcopy/biopsy results",
      "reference": "#logic-path"
    },
    "logicsummary": "Follow-up after treatment for CIN2 or CIN3 Table 5A.",
    "logiccriteria": [
      {
        "title": "Inclusions",
        "groups": [
          {
            "name": "Age >= 25 years old",
            "items": []
          },
          {
            "name": "Sex at birth = female",
            "items": []
          }
        ]
      },
      {
        "title": "Exclusions",
        "groups": []
      },
      {
        "title": "Abnormal colposcopy/biopsy results",
        "groups": [
          {
            "name": "Latest Cervical Histology Test <= 12 months ago",
            "items": [
              {
                "criteria": "Cervical Histology - Histological LSIL (CIN1)",
                "date": "10/25/2021",
                "action": "View"
              }
            ]
          },
          {
            "name": "Most Recent Cotest <= 3 months before Latest Cervical Histology",
            "items": [
              {
                "criteria": "HPV Test - Positive (Type 16)",
                "date": "08/17/2021",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap) - LSIL",
                "date": "08/17/2021",
                "action": "View"
              }
            ]
          }
        ]
      }
    ],
    "timeline": {
      "explanation": "[Explanation text about the timeline here...]",
      "projection": [
        {
          "era": "Start Post-colposcopy CIN1",
          "status": "Patient Status info here...",
          "options": [
            {
              "activity": "Surveillance Testing",
              "period": "1 year",
              "detail": "[What surveillance is needed?]",
              "duration": "1 year follow-up (How often? Until when?)",
            },
            {
              "activity": "Next State after surveillance",
              "period": "? years",
              "detail": "[What action is needed?]",
              "duration": "? to ? times (2023 to 2059)",
            }
          ]
        },
        {
          "era": "Next Expected Event after Post-colposcopy surveillance",
          "status": "Note about this expected state...",
          "options": [
            {
              "activity": "[Next state after event]",
              "period": "? year",
              "detail": "[What actions happen here?]",
              "duration": "1 year follow-up (How often? Until when?)",
            }
          ]
        },
        {
          "era": "Age older than 65 years",
          "status": "[What is expected for this patient once over 65?]",
          "options": [
            {
              "activity": "Testing as needed",
              "period": "5 years",
              "detail": "Testing as needed until 3 consecutive negative cytology results or 2 consecutive negative cotesting results within 10 years.",
              "duration": "As needed starting in 2050",
            }
          ]
        }
      ]
    },
    "updated": "2022-01-10",
    "labresults": [{
      "name": "HPV Test",
      "value": "See Report",
      "date": "2022-03-18",
      "sdate": "Mar 2022",
      "status": "incomplete"
    }, {
      "name": "Cytology (Pap)",
      "value": "See Report",
      "date": "2022-03-18",
      "sdate": "Mar 2022",
      "status": "incomplete"
    }, {
      "name": "Wide local excision",
      "value": "Completed",
      "date": "2020-06-11",
      "sdate": "Jun 2020"
    }, {
      "name": "Vulvar Histology",
      "value": "VIN3",
      "date": "2020-06-11",
      "sdate": "Jun 2020"
    }, {
      "name": "Colposcopy",
      "value": "Completed",
      "date": "2020-04-09",
      "sdate": "Apr 2020"
    }, {
      "name": "Vulvar Histology",
      "value": "VIN3",
      "date": "2020-04-09",
      "sdate": "Apr 2020"
    }, {
      "name": "HPV Test",
      "value": "Positive (Type 12 other)",
      "date": "2020-03-18",
      "sdate": "Mar 2020"
    }, {
      "name": "Cytology (Pap)",
      "value": "ASC-US",
      "date": "2020-03-18",
      "sdate": "Mar 2020"
    }, {
      "name": "Laser ablation",
      "value": "Completed",
      "date": "2019-03-22",
      "sdate": "Mar 2019"
    }, {
      "name": "Vaginal Histology",
      "value": "VAIN2",
      "date": "2019-02-11",
      "sdate": "Feb 2019"
    }, {
      "name": "Colposcopy",
      "value": "Completed",
      "date": "2019-02-11",
      "sdate": "Feb 2019"
    }, {
      "name": "HPV Test",
      "value": "Positive (Type 16)",
      "date": "2019-01-17",
      "sdate": "Jan 2019"
    }, {
      "name": "Cytology (Pap)",
      "value": "ASC-US",
      "date": "2019-01-17",
      "sdate": "Jan 2019"
    }],
    "conditions": [{
      "name": "Moderate vaginal dysplasia",
      "value": "",
      "date": "2019-02-11",
      "sdate": "Feb 2019"
    }, {
      "name": "Moderate vulvar dysplasia",
      "value": "",
      "date": "2019-02-11",
      "sdate": "Feb 2019"
    }]
  },
  "paulina": {
    "name": "Paulina58 Vale56",
    "scenario": "Average-risk Routine Screening - Younger than 30",
    "scenario_desc": "The appropriate re-screening interval in individuals with normal test results who have no prior abnormal test results",
    "mrn": "EM-7601-6250",
    "dob": "01/20/1994",
    "age": 28,
    "height": "5 ft 4 in",
    "weight": "138 lb",
    "sab": "Female",
    "gender": "Female",
    "pregnant": "Unknown",
    "race": "White; Non-Hispanic",
    "language": "English",
    "patientrec": "Cervical Screening Due Now",
    "patientgroup": "Average-risk screening",
    "recdetails": [
      "Per USPSTF recommendations, this patient is due for cervical cytology testing."
    ],
    "disclaimer": "An evidence based recommendation is provided based on clinical data available in the patient's electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.",
    "order": "screening",
    "risk": {
      "title": "Risk Estimates",
      "subtitle": "Risk estimates are not available for patients with no prior positive HPV test results or abnormal cytology results.",
      "headers": [],
      "relevant": {},
      "adjacent": [],
      "clarifications": []
    },
    "references": [
      {
        "name": "ASCCP Risk-Based Management Consensus, 2019",
        "documents": [
          {
            "title": "2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors, 2019",
            "link": "https://www.asccp.org/Assets/b2263c88-ec67-4ab0-9f07-6f112e76f8d7/637269576182030000/2019-asccp-risk-based-management-consensus-3-5-pdf"
          }
        ]
      }
    ],
    "logicpath": {
      "name": "(Logic Path 5 - 4.7.3.3.6) - Surveillance following results not requiring immediate colposcopic referral",
      "reference": "#logic-path"
    },
    "logicsummary": "Abnormal results (Table 1A)",
    "logiccriteria": [
      {
        "title": "Inclusions",
        "groups": [
          {
            "name": "Age >= 25 years old",
            "items": []
          },
          {
            "name": "Sex at birth = female",
            "items": []
          }
        ]
      },
      {
        "title": "Exclusions",
        "groups": []
      },
      {
        "title": "Common Abnormal Result",
        "groups": [
          {
            "name": "Most Recent Cotest <= 5 years ago",
            "items": [
              {
                "criteria": "HPV Test - Positive",
                "date": "01/19/2017",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap) - LSIL",
                "date": "01/19/2017",
                "action": "View"
              }
            ]
          },
          {
            "name": "Previous Cotest is Negative",
            "items": [
              {
                "criteria": "HPV Test - Negative",
                "date": "01/02/2014",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap) - NILM",
                "date": "01/02/2014",
                "action": "View"
              }
            ]
          }
        ]
      }
    ],
    "timeline": {
      "explanation": "[Explanation text about the timeline here...]",
      "projection": [
        {
          "era": "Start Age 21",
          "status": "Patient Status info here...",
          "options": [
            {
              "activity": "Cervical Cytology",
              "period": "3 years",
              "detail": "Cervical Cytology testing alone",
              "duration": "2 to 3 times (2015 to 2024)",
            }
          ]
        }
      ]
    },
    "updated": "2022-03-24",
    "labresults": [{
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2018-11-12",
      "sdate": "Nov 2018",
      "manual": true
    }],
    "vaccinations": [{
      "name": "Gardasil",
      "value": "",
      "date": "2007-09-10",
      "sdate": "Sep 2007"
    }, {
      "name": "Gardasil",
      "value": "",
      "date": "2007-05-24",
      "sdate": "May 2007"
    }, {
      "name": "Gardasil",
      "value": "",
      "date": "2007-03-07",
      "sdate": "Mar 2007"
    }]
  },
  "paulinax": {
    "name": "Paulina58 Vale56",
    "scenario": "No Screening History - Younger than 30",
    "scenario_desc": "Add missing Pap test result",
    "mrn": "EM-7601-6251",
    "dob": "01/20/1994",
    "age": 28,
    "height": "5 ft 4 in",
    "weight": "138 lb",
    "sab": "Female",
    "gender": "Female",
    "pregnant": "Unknown",
    "race": "White; Non-Hispanic",
    "language": "English",
    "patientrec": "Cervical Screening Due Now",
    "patientgroup": "Average-risk screening",
    "recdetails": [
      "Per USPSTF recommendations, this patient is due for cervical cytology testing."
    ],
    "disclaimer": "Note: This patient has no testing or screening history available. Confirm patient history and add any documented testing and screening results to ensure an accurate CDS recommendation.",
    "order": "screening",
    "risk": {
      "title": "Risk Estimates",
      "subtitle": "Risk estimates are not available for patients with no prior positive HPV test results or abnormal cytology results.",
      "headers": [],
      "relevant": {},
      "adjacent": [],
      "clarifications": []
    },
    "references": [
      {
        "name": "ASCCP Risk-Based Management Consensus, 2019",
        "documents": [
          {
            "title": "2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors, 2019",
            "link": "https://www.asccp.org/Assets/b2263c88-ec67-4ab0-9f07-6f112e76f8d7/637269576182030000/2019-asccp-risk-based-management-consensus-3-5-pdf"
          }
        ]
      }
    ],
    "logicpath": {
      "name": "(Logic Path 5 - 4.7.3.3.6) - Surveillance following results not requiring immediate colposcopic referral",
      "reference": "#logic-path"
    },
    "logicsummary": "Abnormal results (Table 1A)",
    "logiccriteria": [
      {
        "title": "Inclusions",
        "groups": [
          {
            "name": "Age >= 25 years old",
            "items": []
          },
          {
            "name": "Sex at birth = female",
            "items": []
          }
        ]
      },
      {
        "title": "Exclusions",
        "groups": []
      },
      {
        "title": "Common Abnormal Result",
        "groups": [
          {
            "name": "Most Recent Cotest <= 5 years ago",
            "items": [
              {
                "criteria": "HPV Test - Positive",
                "date": "01/19/2017",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap) - LSIL",
                "date": "01/19/2017",
                "action": "View"
              }
            ]
          },
          {
            "name": "Previous Cotest is Negative",
            "items": [
              {
                "criteria": "HPV Test - Negative",
                "date": "01/02/2014",
                "action": "View"
              },
              {
                "criteria": "Cytology (Pap) - NILM",
                "date": "01/02/2014",
                "action": "View"
              }
            ]
          }
        ]
      }
    ],
    "timeline": {
      "explanation": "[Explanation text about the timeline here...]",
      "projection": [
        {
          "era": "Start Age 21",
          "status": "Patient Status info here...",
          "options": [
            {
              "activity": "Cervical Cytology",
              "period": "3 years",
              "detail": "Cervical Cytology testing alone",
              "duration": "2 to 3 times (2015 to 2024)",
            }
          ]
        }
      ]
    },
    "updated": "2022-04-04",
    "labresults": null,
    "vaccinations": [{
      "name": "Gardasil",
      "value": "",
      "date": "2007-09-10",
      "sdate": "Sep 2007"
    }, {
      "name": "Gardasil",
      "value": "",
      "date": "2007-05-24",
      "sdate": "May 2007"
    }, {
      "name": "Gardasil",
      "value": "",
      "date": "2007-03-07",
      "sdate": "Mar 2007"
    }]
  },
  "shana": {
    "name": "Shana11 Myers45",
    "scenario": "Surveillance after abnormalities",
    "mrn": "RK-1485-9514",
    "dob": "05/24/1987",
    "age": 34,
    "height": "5 ft 7 in",
    "weight": "142 lb",
    "sab": "Female",
    "gender": "Female",
    "pregnant": "Unknown",
    "race": "White; Non-Hispanic",
    "language": "English",
    "patientrec": "Observation is preferred in one year, but treatment is acceptable",
    "patientgroup": "Surveillance after abnormalities",
    "recdetails": [
      "Per the ASCCP Risk-Based Management Guidelines, observation with colposcopy and HPV-based testing is recommended in 1 year.",
      "For patients 25 years or older with histologic LSIL (CIN 1) who is diagnosed at consecutive visits for at least 2 years, observation is preferred (BII) but treatment is acceptable (CIII). If treatment is selected and the entire squamocolumnar junction and all lesions were fully visualized during colposcopic examination, either excision or ablation treatments are acceptable (CII)."
    ],
    "disclaimer": "An evidence based recommendation is provided based on clinical data available in the patient's electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.",
    "order": "surveillance",
    "risk": {
      "title": "Risk Estimates",
      "subtitle": "No exact risk estimate is available for this combination of results. Recommendation is based on 2019 ASCCP Risk-Based Management Consensus Guidelines.",
      "headers": [],
      "relevant": {},
      "adjacent": [],
      "clarifications": []
    },
    "references": [
      {
        "name": "ASCCP Risk-Based Management Consensus, 2019",
        "documents": [
          {
            "title": "2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors, 2019",
            "link": "https://www.asccp.org/Assets/b2263c88-ec67-4ab0-9f07-6f112e76f8d7/637269576182030000/2019-asccp-risk-based-management-consensus-3-5-pdf"
          }
        ]
      }
    ],
    "logicpath": {
      "name": "(Logic Path 4.7.3.3.3)",
      "reference": "#logic-path"
    },
    "logicsummary": "Follow-up after treatment for CIN2 or CIN3 Table 5A.",
    "logiccriteria": [
      {
        "title": "Inclusions",
        "groups": [
          {
            "name": "Age >= 25 years old",
            "items": []
          },
          {
            "name": "Sex at birth = female",
            "items": []
          }
        ]
      },
      {
        "title": "Exclusions",
        "groups": []
      },
      {
        "title": "TBD: Additional logic steps and checks here...",
        "groups": []
      }
    ],
    "timeline": {
      "explanation": "[Explanation text about the timeline here...]",
      "projection": [
        {
          "era": "Start Age 21",
          "status": "Patient Status info here...",
          "options": [
            {
              "activity": "Cervical Cytology",
              "period": "3 years",
              "detail": "Cervical Cytology testing alone",
              "duration": "2 to 3 times (2015 to 2024)",
            }
          ]
        }
      ]
    },
    "updated": "2022-01-10",
    "labresults": [{
      "name": "Cervical Histology",
      "value": "CIN1",
      "date": "2021-04-19",
      "sdate": "Apr 2021"
    }, {
      "name": "Colposcopy",
      "value": "Completed",
      "date": "2021-04-19",
      "sdate": "Apr 2021"
    }, {
      "name": "HPV Test",
      "value": "Positive",
      "date": "2021-04-19",
      "sdate": "Apr 2021",
      "genotype": "HPV12"
    }, {
      "name": "Cytology (Pap)",
      "value": "LSIL",
      "date": "2021-04-19",
      "sdate": "Apr 2021"
    }, {
      "name": "Cervical Histology",
      "value": "CIN1",
      "date": "2020-04-09",
      "sdate": "Apr 2020"
    }, {
      "name": "Colposcopy",
      "value": "Completed",
      "date": "2020-04-09",
      "sdate": "Apr 2021"
    }, {
      "name": "HPV Test",
      "value": "Positive",
      "date": "2020-03-18",
      "sdate": "Apr 2020",
      "genotype": "HPV12"
    }, {
      "name": "Cytology (Pap)",
      "value": "ASC-US",
      "date": "2020-03-18",
      "sdate": "Apr 2020"
    }, {
      "name": "Cervical Histology",
      "value": "CIN3",
      "date": "2019-03-22",
      "sdate": "Mar 2019"
    }, {
      "name": "LEEP",
      "value": "Completed",
      "date": "2019-03-22",
      "sdate": "Mar 2019"
    }, {
      "name": "Cervical Histology",
      "value": "CIN3",
      "date": "2019-02-11",
      "sdate": "Feb 2019"
    }, {
      "name": "Colposcopy",
      "value": "Completed",
      "date": "2019-02-11",
      "sdate": "Feb 2019"
    }, {
      "name": "HPV Test",
      "value": "Positive",
      "date": "2019-01-17",
      "sdate": "Jan 2019",
      "genotype": "HPV16+"
    }, {
      "name": "Cytology (Pap)",
      "value": "ASC-US",
      "date": "2019-01-17",
      "sdate": "Jan 2019"
    }, {
      "name": "HPV",
      "value": "Positive",
      "date": "2018-01-23",
      "sdate": "Jan 2018"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2018-01-23",
      "sdate": "Jan 2018"
    }, {
      "name": "HPV",
      "value": "Positive",
      "date": "2015-01-12",
      "sdate": "Jan 2015"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2015-01-12",
      "sdate": "Jan 2015"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2011-12-29",
      "sdate": "Dec 2011"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2008-12-04",
      "sdate": "Dec 2008"
    }]
  },
  "susan": {
    "name": "Susan21 Holden65",
    "scenario": "Average-risk Routine Screening - Older than 30",
    "scenario_desc": "The appropriate re-screening interval in individuals with normal test results who have no prior abnormal test results",
    "mrn": "AC-1947-4883",
    "dob": "07/10/1980",
    "age": 41,
    "height": "5 ft 4 in",
    "weight": "138 lb",
    "sab": "Female",
    "gender": "Female",
    "pregnant": "Unknown",
    "race": "Black or African American; Non-Hispanic",
    "language": "English",
    "patientrec": "Cervical Screening Due Now",
    "patientgroup": "Average-risk screening",
    "recdetails": [
      "Per USPSTF recommendations, this patient is due for cervical cancer screening.",
      "The screening can be performed by using one of the following screening approaches: Cervical cytology testing alone, hrHPV testing alone, or Cotesting with cervical cytology testing and hrHPV testing."
    ],
    "errors": [],
    "disclaimer": "An evidence based recommendation is provided based on clinical data available in the patient's electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.",
    "order": "screening",
    "risk": {
      "title": "Risk Estimates",
      "subtitle": "Risk estimates are not available for patients with no prior positive HPV test results or abnormal cytology results.",
      "headers": [],
      "relevant": {},
      "adjacent": [],
      "clarifications": []
    },
    "references": [
      {
        "name": "USPSTF",
        "details": [
          "The USPSTF concludes with high certainty that the benefits of screening every 3 years with cytology alone, every 5 years with hrHPV testing alone, or every 5 years with both tests (cotesting) in women aged 30 to 65 years outweigh the harms."
        ],
        "documents": [
          {
            "title": "USPSTF Screening for Cervical Cancer, 2018-08-21",
            "link": "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening"
          }
        ]
      }
    ],
    "logicpath": {
      "name": "(Logic Path 4 - 4.6.3.3.1) - Grade A Recommendations",
      "reference": "#logic-path"
    },
    "logicsummary": "Follow-up after treatment for CIN2 or CIN3 Table 5A.",
    "logiccriteria": [
      {
        "title": "Inclusions",
        "groups": [
          {
            "name": "Age = 30 to 65 years old",
            "items": []
          },
          {
            "name": "Sex at birth = female",
            "items": []
          }
        ]
      },
      {
        "title": "Exclusions",
        "groups": []
      },
      {
        "title": "Age 30-65; Cotesting (hrHPV + Cervical Cytology testing) every 5 years",
        "groups": [
          {
            "name": "Most Recent negative cotest >= 5 years ago",
            "items": [
              {
                "criteria": "Cytology (Pap) - NILM",
                "date": "09/22/2016",
                "action": "View"
              },
              {
                "criteria": "HPV Test - Negative",
                "date": "09/22/2016",
                "action": "View"
              }
            ]
          }
        ]
      }
    ],
    "timeline": {
      "explanation": "Expected sequence of events for Average Risk Cervical Cancer Screening patients following current guidelines, assuming no abnormal results found or significant changes to clinical status.",
      "projection": [
        {
          "era": "Age 30 to 65 years",
          "status": "Women in this age group should discuss with their health care professional which testing strategy is best for them.",
          "options": [
            {
              "activity": "hrHPV",
              "period": "5 years",
              "detail": "hrHPV Testing alone",
              "duration": "7 to 9 times (2024 to 2059)",
            },
            {
              "activity": "hrHPV + Cytology Cotest",
              "period": "5 years",
              "detail": "hrHPV/Cytology Cotesting",
              "duration": "7 to 9 times (2024 to 2059)",
            },
            {
              "activity": "Cervical Cytoloy",
              "period": "3 years",
              "detail": "Cervical Cytology testing alone",
              "duration": "10 to 12 times (2024 to 2059)",
            }
          ]
        },
        {
          "era": "Age older than 65 years",
          "status": "[What is expected for this patient once over 65?]",
          "options": [
            {
              "activity": "Testing as needed",
              "period": "5 years",
              "detail": "Testing as needed until 3 consecutive negative cytology results or 2 consecutive negative cotesting results within 10 years.",
              "duration": "As needed starting in 2059",
            }
          ]
        }
      ]
    },
    "updated": "2022-01-24",
    "labresults": [{
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2016-09-22",
      "sdate": "Sep 2016"
    }, {
      "name": "HPV Test",
      "value": "Negative",
      "date": "2016-09-22",
      "sdate": "Sep 2016"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2011-07-15",
      "sdate": "Jul 2011"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2007-01-22",
      "sdate": "Jan 2007"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2003-11-07",
      "sdate": "Nov 2003"
    }]
  },
  "tanya": {
    "name": "Tanya44 Meyer12",
    "scenario": "Individual older than 65 who is not adequately screened",
    "mrn": "HI-6845-6245",
    "dob": "03/15/1955",
    "age": 66,
    "height": "5 ft 7 in",
    "weight": "142 lb",
    "sab": "Female",
    "gender": "Female",
    "pregnant": "N/A",
    "race": "White; Non-Hispanic",
    "language": "English",
    "patientrec": "Cervical Screening Due on 4/19/2024",
    "patientgroup": "Average-risk population",
    "recdetails": [
      "Per USPSTF guidelines, this patient is due for cervical cancer screening because they have not been adequately screened in the past. Adequate testing is defined as having: three consecutive negative cytology results within 10 years prior to screening, or two consecutive negative hrHPV results within 10 years prior to the end of screening, with the most recent test occurring within 5 years, or two consecutive negative cotesting results within 10 years prior to the end of screening, with the most recent test occurring within 5 years."
    ],
    "disclaimer": "An evidence based recommendation is provided based on clinical data available in the patient's electronic medical record. Please validate with patient and document any additional relevant history and cervical cancer screening related procedures, and lab testing with documented written evidence.",
    "order": "screening",
    "risk": {
      "title": "Risk Estimates",
      "subtitle": "N/A",
      "headers": [],
      "relevant": {},
      "adjacent": [],
      "clarifications": []
    },
    "references": [
      {
        "name": "USPSTF",
        "details": [
          "Description of pertinent USPSTF recommendation for women age > 65"
        ],
        "documents": [
          {
            "title": "USPSTF Screening for Cervical Cancer, 2018-08-21",
            "link": "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening"
          }
        ]
      }
    ],
    "logicpath": {
      "name": "(Logic Path 4.6.3.3.2)",
      "reference": "#logic-path"
    },
    "logicsummary": "Grade D Recommendations for inadequate screening and over 65.",
    "logiccriteria": [
      {
        "title": "Inclusions",
        "groups": [
          {
            "name": "Age > 65 years old",
            "items": []
          },
          {
            "name": "Sex at birth = female",
            "items": []
          }
        ]
      },
      {
        "title": "Exclusions",
        "groups": []
      },
      {
        "title": "TBD: Additional logic steps and checks here...",
        "groups": []
      }
    ],
    "timeline": {
      "explanation": "[Explanation text about the timeline here...]",
      "projection": [
        {
          "era": "Start Age 21",
          "status": "Patient Status info here...",
          "options": [
            {
              "activity": "Cervical Cytology",
              "period": "3 years",
              "detail": "Cervical Cytology testing alone",
              "duration": "2 to 3 times (2015 to 2024)",
            }
          ]
        }
      ]
    },
    "updated": "2022-01-12",
    "labresults": [{
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2021-04-18",
      "sdate": "Apr 2021"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2018-04-16",
      "sdate": "Apr 2018"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "2009-07-05",
      "sdate": "Jul 2009"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "1999-10-20",
      "sdate": "Oct 1999"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "1990-01-25",
      "sdate": "Jan 1990"
    }, {
      "name": "Cytology (Pap)",
      "value": "NILM",
      "date": "1986-03-18",
      "sdate": "Mar 1986"
    }]
  }
}