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
import { ProvideMoreInformation } from "./Questionnaire/ProvideMoreInformation";
import { CervicalCancerQuestionnaire } from "./Questionnaire/CervicalCancerQuestionnaire";
import { RelevantHistoryQuestionnaire } from "./Questionnaire/RelevantHistoryQuestionnaire";
import { PertinentProcedureQuestionnaire } from "./Questionnaire/PertinentProcedureQuestionnaire";
import { ScreeningAndManagementHistoryQuestionnaire } from "./Questionnaire/ScreeningAndManagementHistoryQuestionnaire";
import { VaccinationHistoryQuestionnaire } from "./Questionnaire/VaccinationHistoryQuestionnaire";

// ValueSet resources
import { ScreeningAndManagementTestType } from "./ValueSet/ScreeningAndManagementTestType";
import { CervicalCytologyResult } from "./ValueSet/CervicalCytologyResult";
import { HpvTestResult } from "./ValueSet/HpvTestResult";
import { CervicalHistologyResult } from "./ValueSet/CervicalHistologyResult";
import { PertinentProcedureShortList } from "./ValueSet/PertinentProcedureShortList";

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
  ProvideMoreInformation,
  CervicalCancerQuestionnaire,
  RelevantHistoryQuestionnaire,
  PertinentProcedureQuestionnaire,
  ScreeningAndManagementHistoryQuestionnaire,
  VaccinationHistoryQuestionnaire,
  ScreeningAndManagementTestType,
  CervicalCytologyResult,
  HpvTestResult,
  CervicalHistologyResult,
  PertinentProcedureShortList
];

export { resourceConverter } from './resourceConverter.js';