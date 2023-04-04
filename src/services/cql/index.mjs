import { AutogeneratedRiskTables } from 'ccsm-cds-with-tests/cql/AutogeneratedRiskTables.mjs';
import { AutogeneratedTableLookup } from 'ccsm-cds-with-tests/cql/AutogeneratedTableLookup.mjs';
import { CCSMCommonFunctions } from 'ccsm-cds-with-tests/cql/CCSMCommonFunctions.mjs';
import { CDSConnectCommonsforFHIRv401 } from 'ccsm-cds-with-tests/cql/CDSConnectCommonsforFHIRv401.mjs';
import { CollateManagementData } from 'ccsm-cds-with-tests/cql/CollateManagementData.mjs';
import { DashboardLibrary } from 'ccsm-cds-with-tests/cql/DashboardLibrary.mjs';
import { FHIRHelpersv401 } from 'ccsm-cds-with-tests/cql/FHIRHelpers-4.0.1.mjs';
import { ManagementLibrary } from 'ccsm-cds-with-tests/cql/ManagementLibrary.mjs';
import { ManageCommonAbnormality } from 'ccsm-cds-with-tests/cql/ManageCommonAbnormality.mjs';
import { ManageRareAbnormality } from 'ccsm-cds-with-tests/cql/ManageRareAbnormality.mjs';
import { ManageSpecialPopulation } from 'ccsm-cds-with-tests/cql/ManageSpecialPopulation.mjs';
import { OrderSetLibrary } from 'ccsm-cds-with-tests/cql/OrderSetLibrary.mjs';
import { ScreeningAverageRiskLibrary } from 'ccsm-cds-with-tests/cql/ScreeningAverageRiskLibrary.mjs';
import { ScreeningDesExposureLibrary } from 'ccsm-cds-with-tests/cql/ScreeningDesExposureLibrary.mjs';
import { ScreeningImmunocompromisedLibrary } from 'ccsm-cds-with-tests/cql/ScreeningImmunocompromisedLibrary.mjs';
import { ScreeningSymptomaticLibrary } from 'ccsm-cds-with-tests/cql/ScreeningSymptomaticLibrary.mjs';
import { ScreeningLibrary } from 'ccsm-cds-with-tests/cql/ScreeningLibrary.mjs';

const elmJsonDependencyArray = [
  AutogeneratedRiskTables,
  AutogeneratedTableLookup,
  CCSMCommonFunctions,
  CDSConnectCommonsforFHIRv401,
  CollateManagementData,
  DashboardLibrary,
  FHIRHelpersv401,
  ManagementLibrary,
  ManageCommonAbnormality,
  ManageRareAbnormality,
  ManageSpecialPopulation,
  OrderSetLibrary,
  ScreeningAverageRiskLibrary,
  ScreeningDesExposureLibrary,
  ScreeningImmunocompromisedLibrary,
  ScreeningSymptomaticLibrary,
  ScreeningLibrary
];

// Reformat ELM JSON value set references to match what is expected by the 
// code service built into the cql execution engine.
// NOTE: This is needed since we are not using `cql-exec-vsac`.
export const elmJsonDependencies = elmJsonDependencyArray.reduce((acc, elm) => {
  let refs = elm?.library?.valueSets?.def;
  if (refs) {
    refs = refs.map(r => {
      return {
        ...r,
        id: r.id.split('/').pop()
      }
    });
    elm.library.valueSets.def = refs;
  }
  return {
    ...acc,
    [elm.library.identifier.id]: elm
  }
}, {});