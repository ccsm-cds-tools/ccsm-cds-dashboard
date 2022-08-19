// ActivityDefinition resources
import { CervicalCancerDecisionAids } from "./ActivityDefinition/CervicalCancerDecisionAids";
import { CervicalCancerManagementActivity } from "./ActivityDefinition/CervicalCancerManagementActivity";
import { CervicalCancerScreeningActivity } from "./ActivityDefinition/CervicalCancerScreeningActivity";
import { CommunicateErrors } from "./ActivityDefinition/CommunicateErrors";
import { DisplayCervicalCancerMedicalHistory } from "./ActivityDefinition/DisplayCervicalCancerMedicalHistory";

// Library resources
import { DashboardLibrary } from "./Library/DashboardLibrary";
import { ManagementLibrary } from "./Library/ManagementLibrary";
import { OrderSetLibrary } from "./Library/OrderSetLibrary";
import { ScreeningAverageRiskLibrary } from "./Library/ScreeningAverageRiskLibrary";
import { ScreeningDesExposureLibrary } from "./Library/ScreeningDesExposureLibrary";
import { ScreeningImmunocompromisedLibrary } from "./Library/ScreeningImmunocompromisedLibrary";
import { ScreeningLibrary } from "./Library/ScreeningLibrary";
import { ScreeningSymptomaticLibrary } from "./Library/ScreeningSymptomaticLibrary";

// PlanDefinition resources
import { CervicalCancerManagement } from "./PlanDefinition/CervicalCancerManagement";
import { CervicalCancerManagementActions } from "./PlanDefinition/CervicalCancerManagementActions";
import { CervicalCancerScreening } from "./PlanDefinition/CervicalCancerScreening";
import { CervicalCancerScreeningActions } from "./PlanDefinition/CervicalCancerScreeningActions";
import { 
  CervicalCancerScreeningAndManagementClinicalDecisionSupport 
} from "./PlanDefinition/CervicalCancerScreeningAndManagementClinicalDecisionSupport";

// Questionnaire resources
import { PertinentProcedureQuestionnaire } from "./Questionnaire/PertinentProcedureQuestionnaire";
import { PertinentConditionQuestionnaire } from "./Questionnaire/PertinentConditionQuestionnaire";
import { PertinentObservationQuestionnaire } from "./Questionnaire/PertinentObservationQuestionnaire";
import { PertinentVaccinationQuestionnaire } from "./Questionnaire/PertinentVaccinationQuestionnaire";
import { ScreeningAndManagementHistoryQuestionnaire } from "./Questionnaire/ScreeningAndManagementHistoryQuestionnaire";
import { VaccinationHistoryQuestionnaire } from "./Questionnaire/VaccinationHistoryQuestionnaire";

// ValueSet resources
import { ScreeningAndManagementTestType } from "./ValueSet/ScreeningAndManagementTestType";
import { CervicalCytologyResult } from "./ValueSet/CervicalCytologyResult";
import { HpvTestResult } from "./ValueSet/HpvTestResult";
import { CervicalHistologyResult } from "./ValueSet/CervicalHistologyResult";
import { PertinentProcedureShortList } from "./ValueSet/PertinentProcedureShortList";
import { PertinentConditionShortList } from "./ValueSet/PertinentConditionShortList";
import { PertinentObservationShortList } from "./ValueSet/PertinentObservationShortList";
import { QualifierValuesShortList } from "./ValueSet/QualifierValuesShortList";
import { PertinentVaccinationShortList } from "./ValueSet/PertinentVaccinationShortList";

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
  VaccinationHistoryQuestionnaire,
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

export { resourceConverter } from './resourceConverter.js';