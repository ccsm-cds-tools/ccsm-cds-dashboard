// ActivityDefinition resources
import { CervicalCancerManagementActivity } from "./ActivityDefinition/CervicalCancerManagementActivity";
import { CervicalCancerManagementDecisionAids } from "./ActivityDefinition/CervicalCancerManagementDecisionAids";
import { CervicalCytologyScreeningRecommendation } from "./ActivityDefinition/CervicalCytologyScreeningRecommendation";
import { ColposcopyActivityDefinition } from "./ActivityDefinition/ColposcopyActivityDefinition";
import { CommunicateErrors } from "./ActivityDefinition/CommunicateErrors";
import { CommunicateUnstructuredRecommendations } from "./ActivityDefinition/CommunicateUnstructuredRecommendations";
import { CotestingScreeningRecommendation } from "./ActivityDefinition/CotestingScreeningRecommendation";
import { DisplayCervicalCancerMedicalHistory } from "./ActivityDefinition/DisplayCervicalCancerMedicalHistory";
import { PrimaryHpvScreeningRecommendation } from "./ActivityDefinition/PrimaryHpvScreeningRecommendation";
import { SurveillanceActivityDefinition } from "./ActivityDefinition/SurveillanceActivityDefinition";
import { TreatmentActivityDefinition } from "./ActivityDefinition/TreatmentActivityDefinition";

// Library resources
import { DashboardLibrary } from "./Library/DashboardLibrary";
import { ManagementLibrary } from "./Library/ManagementLibrary";
import { ScreeningAverageRiskLibrary } from "./Library/ScreeningAverageRiskLibrary";
import { ScreeningDesExposureLibrary } from "./Library/ScreeningDesExposureLibrary";
import { ScreeningImmunocompromisedLibrary } from "./Library/ScreeningImmunocompromisedLibrary";
import { TopLevelScreeningLibrary } from "./Library/TopLevelScreeningLibrary";

// PlanDefinition resources
import { CervicalCancerManagement } from "./PlanDefinition/CervicalCancerManagement";
import { CervicalCancerManagementActions } from "./PlanDefinition/CervicalCancerManagementActions";
import { CervicalCancerScreening } from "./PlanDefinition/CervicalCancerScreening";
import { CervicalCancerScreeningAverageRisk } from "./PlanDefinition/CervicalCancerScreeningAverageRisk";
import { CervicalCancerScreeningDesExposure } from "./PlanDefinition/CervicalCancerScreeningDesExposure";
import { CervicalCancerScreeningImmunocompromisedIndividuals } from "./PlanDefinition/CervicalCancerScreeningImmunocompromisedIndividuals";
import { CervicalCancerScreeningSymptomaticIndividuals } from "./PlanDefinition/CervicalCancerScreeningSymptomaticIndividuals";
import { HandleErrors } from "./PlanDefinition/HandleErrors";
import { ManageCervicalCommonAbnormalities } from "./PlanDefinition/ManageCervicalCommonAbnormalities";
import { ManageCervicalRareAbnormalities } from "./PlanDefinition/ManageCervicalRareAbnormalities";
import { ManageCervicalSpecialPopulations } from "./PlanDefinition/ManageCervicalSpecialPopulations";

// Questionnaire resources
import { ProvideMoreInformation } from "./Questionnaire/ProvideMoreInformation";
import { CervicalCancerQuestionnaire } from "./Questionnaire/CervicalCancerQuestionnaire";
import { RelevantHistoryQuestionnaire } from "./Questionnaire/RelevantHistoryQuestionnaire";
import { ScreeningAndManagementHistoryQuestionnaire } from "./Questionnaire/ScreeningAndManagementHistoryQuestionnaire";
import { VaccinationHistoryQuestionnaire } from "./Questionnaire/VaccinationHistoryQuestionnaire";

// ValueSet resources
import { ScreeningAndManagementTestType } from "./ValueSet/ScreeningAndManagementTestType";
import { CervicalCytologyResult } from "./ValueSet/CervicalCytologyResult";
import { HpvTestResult } from "./ValueSet/HpvTestResult";
import { CervicalHistologyResult } from "./ValueSet/CervicalHistologyResult";

export const cdsResources = [
  CervicalCancerManagementActivity,
  CervicalCancerManagementDecisionAids,
  CervicalCytologyScreeningRecommendation,
  ColposcopyActivityDefinition,
  CommunicateErrors,
  CommunicateUnstructuredRecommendations,
  CotestingScreeningRecommendation,
  DisplayCervicalCancerMedicalHistory,
  PrimaryHpvScreeningRecommendation,
  SurveillanceActivityDefinition,
  TreatmentActivityDefinition,
  DashboardLibrary,
  ManagementLibrary,
  ScreeningAverageRiskLibrary,
  ScreeningDesExposureLibrary,
  ScreeningImmunocompromisedLibrary,
  TopLevelScreeningLibrary,
  CervicalCancerManagement,
  CervicalCancerManagementActions,
  CervicalCancerScreening,
  CervicalCancerScreeningAverageRisk,
  CervicalCancerScreeningDesExposure,
  CervicalCancerScreeningImmunocompromisedIndividuals,
  CervicalCancerScreeningSymptomaticIndividuals,
  HandleErrors,
  ManageCervicalCommonAbnormalities,
  ManageCervicalRareAbnormalities,
  ManageCervicalSpecialPopulations,
  ProvideMoreInformation,
  CervicalCancerQuestionnaire,
  RelevantHistoryQuestionnaire,
  ScreeningAndManagementHistoryQuestionnaire,
  VaccinationHistoryQuestionnaire,
  ScreeningAndManagementTestType,
  CervicalCytologyResult,
  HpvTestResult,
  CervicalHistologyResult
];

export { resourceConverter } from './resourceConverter.js';