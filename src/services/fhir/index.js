// ActivityDefinition resources
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
import { CervicalCancerScreening } from "./PlanDefinition/CervicalCancerScreening";
import { CervicalCancerScreeningAverageRisk } from "./PlanDefinition/CervicalCancerScreeningAverageRisk";
import { CervicalCancerScreeningDesExposure } from "./PlanDefinition/CervicalCancerScreeningDesExposure";
import { CervicalCancerScreeningImmunocompromisedIndividuals } from "./PlanDefinition/CervicalCancerScreeningImmunocompromisedIndividuals";
import { CervicalCancerScreeningSymptomaticIndividuals } from "./PlanDefinition/CervicalCancerScreeningSymptomaticIndividuals";
import { HandleErrors } from "./PlanDefinition/HandleErrors";
import { ManageCervicalCommonAbnormalities } from "./PlanDefinition/ManageCervicalCommonAbnormalities";
import { ManageCervicalRareAbnormalities } from "./PlanDefinition/ManageCervicalRareAbnormalities";
import { ManageCervicalSpecialPopulations } from "./PlanDefinition/ManageCervicalSpecialPopulations";

// Questionnaire
import { ProvideMoreInformation } from "./Questionnaire/ProvideMoreInformation";

export const cdsResources = [
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
  CervicalCancerScreening,
  CervicalCancerScreeningAverageRisk,
  CervicalCancerScreeningDesExposure,
  CervicalCancerScreeningImmunocompromisedIndividuals,
  CervicalCancerScreeningSymptomaticIndividuals,
  HandleErrors,
  ManageCervicalCommonAbnormalities,
  ManageCervicalRareAbnormalities,
  ManageCervicalSpecialPopulations,
  ProvideMoreInformation
];