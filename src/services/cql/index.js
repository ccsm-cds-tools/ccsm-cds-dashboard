import { AutogeneratedRiskTables } from "./AutogeneratedRiskTables";
import { AutogeneratedTableLookup } from "./AutogeneratedTableLookup";
import { CCSMCommonFunctions } from "./CCSMCommonFunctions";
import { CDSConnectCommonsforFHIRv401 } from "./CDSConnectCommonsforFHIRv401";
import { DisplayCervicalCancerMedicalHistory } from "./DisplayCervicalCancerMedicalHistory";
import { FHIRHelpersv401 } from "./FHIRHelpers-4.0.1";
import { ManagementLibrary } from "./ManagementLibrary";
import { ScreeningAverageRiskLibrary } from "./ScreeningAverageRiskLibrary";
import { ScreeningDesExposureLibrary } from "./ScreeningDesExposureLibrary";
import { ScreeningImmunocompromisedLibrary } from "./ScreeningImmunocompromisedLibrary";
import { ScreeningSymptomaticLibrary } from "./ScreeningSymptomaticLibrary";
import { TopLevelScreeningLibrary } from "./TopLevelScreeningLibrary";

const elmJsonDependencyArray = [
  AutogeneratedRiskTables,
  AutogeneratedTableLookup,
  CCSMCommonFunctions,
  CDSConnectCommonsforFHIRv401,
  DisplayCervicalCancerMedicalHistory,
  FHIRHelpersv401,
  ManagementLibrary,
  ScreeningAverageRiskLibrary,
  ScreeningDesExposureLibrary,
  ScreeningImmunocompromisedLibrary,
  ScreeningSymptomaticLibrary,
  TopLevelScreeningLibrary
];

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