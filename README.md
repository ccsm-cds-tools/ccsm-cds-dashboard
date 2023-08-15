# Cervical Cancer Screening and Management (CCSM) Clinical Decision Support (CDS) Dashboard

This dashboard is a *work-in-progress* and is meant to act as the user interface for the Cervical Cancer Screening and Management (CCSM) Clincial Decision Support (CDS) located [here](https://github.com/ccsm-cds-tools/ccsm-cds-with-tests).

## Cautions and Limitations

This dashboard and the underlying CDS definitions are both under *active development*. They have not been tested in a clinical environment and should be considered a *work-in-progress*. Per the [Apache-2.0 License under which the CCSM CDS is released](#licenses), *no warranty is made* and *no liability is assumed*.

## Demo

The dashboard is under active development, but demonstrations are available with various kinds of synthetic test data:
1. Demo with [basic synthentic test patients](https://ccsm-cds-tools.github.io/ccsm-cds-dashboard/#/tests-basic) - Currently broken
2. Demo with [synthentic FHIR data](https://ccsm-cds-tools.github.io/ccsm-cds-dashboard/#/tests-fhir)
3. Public SMART sandbox [demo](https://ccsm-cds-tools.github.io/ccsm-cds-dashboard/#/launch)

## Development

This project was initially developed using the Create React App tool.

### Getting started
You can run the dashboard locally by following these steps:
1. Clone this repo
2. Run `npm install` in this directory
3. Run `npm start` and going to any of the following URLs:
    - http://localhost:3000/tests-basic (currently broken)
    - http://localhost:3000/tests-fhir
    - http://localhost:3000/launch

### Download Value Sets
If your CDS uses value sets from the [Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/) you must download your value sets from VSAC using your [Unified Medical Language System (UMLS)](https://www.nlm.nih.gov/research/umls/index.html) API key. This will require creating a free Unified Medical Language System (UMLS) account from the National Library of Medicine (NLM).  If you do not yet have an account, [sign up here](https://uts.nlm.nih.gov//license.html).

Once you have your NLM credentials, you must assign your API Key to the `UMLS_API_KEY` environment variable.  Your API Key may be found in your [UMLS Profile](https://uts.nlm.nih.gov/uts/profile).

Mac/Linux:
```
$ export UMLS_API_KEY=myapikey
```

Windows:
```
> set UMLS_API_KEY=myapikey
```

Once you have set the `UMLS_API_KEY` environment variable, you can use the following command to download your value sets to `src/services/valuesets/valueset-db.js`:
```
npm run download-value-sets
```

## Licenses

(C) 2022 The MITRE Corporation. All Rights Reserved. Approved for Public Release: 21-1556. Distribution Unlimited.

Unless otherwise noted, the CCSM CDS Dashboard is available under an [Apache 2.0 license](./LICENSE.txt). It was produced by the MITRE Corporation for the Division of Cancer Prevention and Control, Centers for Disease Control and Prevention in accordance with the Statement of Work, contract number 75FCMC18D0047, task order number 75D30120F09743.

Any LOINC (http://loinc.org) content is copyright &copy; 1995+, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC<sup>&reg;</sup> is a registered United States trademark of Regenstrief Institute, Inc.

The CCSM CDS makes reference to several clinical terminology systems and value sets available through the [Unified Medical Language System (UMLS)](https://www.nlm.nih.gov/research/umls/index.html) and the [Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/), both operated by the United States National Library of Medicine. These resources require an account and license through [UMLS Terminology Services (UTS)](https://uts.nlm.nih.gov/uts/).