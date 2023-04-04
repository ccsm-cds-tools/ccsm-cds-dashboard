// ActivityDefinition resources
import { CervicalCancerDecisionAids } from 'ccsm-cds-with-tests/fhir/ActivityDefinition/CervicalCancerDecisionAids.js';
import { CervicalCancerManagementActivity } from 'ccsm-cds-with-tests/fhir/ActivityDefinition/CervicalCancerManagementActivity.js';
import { CervicalCancerScreeningActivity } from 'ccsm-cds-with-tests/fhir/ActivityDefinition/CervicalCancerScreeningActivity.js';
import { CommunicateErrors } from 'ccsm-cds-with-tests/fhir/ActivityDefinition/CommunicateErrors.js';
import { DisplayCervicalCancerMedicalHistory } from 'ccsm-cds-with-tests/fhir/ActivityDefinition/DisplayCervicalCancerMedicalHistory.js';

// Library resources
import { DashboardLibrary } from 'ccsm-cds-with-tests/fhir/Library/DashboardLibrary.js';
import { ManagementLibrary } from 'ccsm-cds-with-tests/fhir/Library/ManagementLibrary.js';
import { OrderSetLibrary } from 'ccsm-cds-with-tests/fhir/Library/OrderSetLibrary.js';
import { ScreeningAverageRiskLibrary } from 'ccsm-cds-with-tests/fhir/Library/ScreeningAverageRiskLibrary.js';
import { ScreeningDesExposureLibrary } from 'ccsm-cds-with-tests/fhir/Library/ScreeningDesExposureLibrary.js';
import { ScreeningImmunocompromisedLibrary } from 'ccsm-cds-with-tests/fhir/Library/ScreeningImmunocompromisedLibrary.js';
import { ScreeningLibrary } from 'ccsm-cds-with-tests/fhir/Library/ScreeningLibrary.js';
import { ScreeningSymptomaticLibrary } from 'ccsm-cds-with-tests/fhir/Library/ScreeningSymptomaticLibrary.js';

// PlanDefinition resources
import { CervicalCancerManagement } from 'ccsm-cds-with-tests/fhir/PlanDefinition/CervicalCancerManagement.js';
import { CervicalCancerManagementActions } from 'ccsm-cds-with-tests/fhir/PlanDefinition/CervicalCancerManagementActions.js';
import { CervicalCancerScreening } from 'ccsm-cds-with-tests/fhir/PlanDefinition/CervicalCancerScreening.js';
import { CervicalCancerScreeningActions } from 'ccsm-cds-with-tests/fhir/PlanDefinition/CervicalCancerScreeningActions.js';
import { 
  CervicalCancerScreeningAndManagementClinicalDecisionSupport 
} from 'ccsm-cds-with-tests/fhir/PlanDefinition/CervicalCancerScreeningAndManagementClinicalDecisionSupport.js';

// Questionnaire resources
import { PertinentProcedureQuestionnaire } from 'ccsm-cds-with-tests/fhir/Questionnaire/PertinentProcedureQuestionnaire.js';
import { PertinentConditionQuestionnaire } from 'ccsm-cds-with-tests/fhir/Questionnaire/PertinentConditionQuestionnaire.js';
import { PertinentObservationQuestionnaire } from 'ccsm-cds-with-tests/fhir/Questionnaire/PertinentObservationQuestionnaire.js';
import { PertinentVaccinationQuestionnaire } from 'ccsm-cds-with-tests/fhir/Questionnaire/PertinentVaccinationQuestionnaire.js';
import { ScreeningAndManagementHistoryQuestionnaire } from 'ccsm-cds-with-tests/fhir/Questionnaire/ScreeningAndManagementHistoryQuestionnaire.js';

// ValueSet resources
import { ScreeningAndManagementTestType } from 'ccsm-cds-with-tests/fhir/ValueSet/ScreeningAndManagementTestType.js';
import { CervicalCytologyResult } from 'ccsm-cds-with-tests/fhir/ValueSet/CervicalCytologyResult.js';
import { HpvTestResult } from 'ccsm-cds-with-tests/fhir/ValueSet/HpvTestResult.js';
import { CervicalHistologyResult } from 'ccsm-cds-with-tests/fhir/ValueSet/CervicalHistologyResult.js';
import { PertinentProcedureShortList } from 'ccsm-cds-with-tests/fhir/ValueSet/PertinentProcedureShortList.js';
import { PertinentConditionShortList } from 'ccsm-cds-with-tests/fhir/ValueSet/PertinentConditionShortList.js';
import { PertinentObservationShortList } from 'ccsm-cds-with-tests/fhir/ValueSet/PertinentObservationShortList.js';
import { QualifierValuesShortList } from 'ccsm-cds-with-tests/fhir/ValueSet/QualifierValuesShortList.js';
import { PertinentVaccinationShortList } from 'ccsm-cds-with-tests/fhir/ValueSet/PertinentVaccinationShortList.js';

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

export { resourceConverter } from 'ccsm-cds-with-tests/fhir/resourceConverter.js';