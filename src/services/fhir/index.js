// NOTE: Webpack is not understanding the ccsm-cds-with-tests exports, kludge is to use the relative path.

// ActivityDefinition resources
import { CervicalCancerDecisionAids } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/ActivityDefinition/CervicalCancerDecisionAids.js';
import { CervicalCancerManagementActivity } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/ActivityDefinition/CervicalCancerManagementActivity.js';
import { CervicalCancerScreeningActivity } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/ActivityDefinition/CervicalCancerScreeningActivity.js';
import { CommunicateErrors } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/ActivityDefinition/CommunicateErrors.js';
import { DisplayCervicalCancerMedicalHistory } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/ActivityDefinition/DisplayCervicalCancerMedicalHistory.js';

// Library resources
import { DashboardLibrary } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/Library/DashboardLibrary.js';
import { ManagementLibrary } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/Library/ManagementLibrary.js';
import { OrderSetLibrary } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/Library/OrderSetLibrary.js';
import { ScreeningAverageRiskLibrary } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/Library/ScreeningAverageRiskLibrary.js';
import { ScreeningDesExposureLibrary } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/Library/ScreeningDesExposureLibrary.js';
import { ScreeningImmunocompromisedLibrary } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/Library/ScreeningImmunocompromisedLibrary.js';
import { ScreeningLibrary } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/Library/ScreeningLibrary.js';
import { ScreeningSymptomaticLibrary } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/Library/ScreeningSymptomaticLibrary.js';

// PlanDefinition resources
import { CervicalCancerManagement } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/PlanDefinition/CervicalCancerManagement.js';
import { CervicalCancerManagementActions } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/PlanDefinition/CervicalCancerManagementActions.js';
import { CervicalCancerScreening } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/PlanDefinition/CervicalCancerScreening.js';
import { CervicalCancerScreeningActions } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/PlanDefinition/CervicalCancerScreeningActions.js';
import { 
  CervicalCancerScreeningAndManagementClinicalDecisionSupport 
} from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/PlanDefinition/CervicalCancerScreeningAndManagementClinicalDecisionSupport.js';

// Questionnaire resources
import { PertinentProcedureQuestionnaire } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/Questionnaire/PertinentProcedureQuestionnaire.js';
import { PertinentConditionQuestionnaire } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/Questionnaire/PertinentConditionQuestionnaire.js';
import { PertinentObservationQuestionnaire } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/Questionnaire/PertinentObservationQuestionnaire.js';
import { PertinentVaccinationQuestionnaire } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/Questionnaire/PertinentVaccinationQuestionnaire.js';
import { ScreeningAndManagementHistoryQuestionnaire } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/Questionnaire/ScreeningAndManagementHistoryQuestionnaire.js';

// ValueSet resources
import { ScreeningAndManagementTestType } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/ValueSet/ScreeningAndManagementTestType.js';
import { CervicalCytologyResult } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/ValueSet/CervicalCytologyResult.js';
import { HpvTestResult } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/ValueSet/HpvTestResult.js';
import { CervicalHistologyResult } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/ValueSet/CervicalHistologyResult.js';
import { PertinentProcedureShortList } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/ValueSet/PertinentProcedureShortList.js';
import { PertinentConditionShortList } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/ValueSet/PertinentConditionShortList.js';
import { PertinentObservationShortList } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/ValueSet/PertinentObservationShortList.js';
import { QualifierValuesShortList } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/ValueSet/QualifierValuesShortList.js';
import { PertinentVaccinationShortList } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/ValueSet/PertinentVaccinationShortList.js';

export const cdsResources = [
  CervicalCancerDecisionAids,
  CervicalCancerManagementActivity,
  CervicalCancerScreeningActivity,
  CommunicateErrors,
  DisplayCervicalCancerMedicalHistory,
  DashboardLibrary,
  ManagementLibrary,
  OrderSetLibrary,
  ScreeningAverageRiskLibrary,
  ScreeningDesExposureLibrary,
  ScreeningImmunocompromisedLibrary,
  ScreeningLibrary,
  ScreeningSymptomaticLibrary,
  CervicalCancerManagement,
  CervicalCancerManagementActions,
  CervicalCancerScreening,
  CervicalCancerScreeningActions,
  CervicalCancerScreeningAndManagementClinicalDecisionSupport,
  PertinentProcedureQuestionnaire,
  PertinentConditionQuestionnaire,
  PertinentObservationQuestionnaire,
  PertinentVaccinationQuestionnaire,
  ScreeningAndManagementHistoryQuestionnaire,
  ScreeningAndManagementTestType,
  CervicalCytologyResult,
  HpvTestResult,
  CervicalHistologyResult,
  PertinentProcedureShortList,
  PertinentConditionShortList,
  PertinentObservationShortList,
  PertinentVaccinationShortList,
  QualifierValuesShortList
];

export { resourceConverter } from '../../../node_modules/ccsm-cds-with-tests/dist/fhir/resourceConverter.js';