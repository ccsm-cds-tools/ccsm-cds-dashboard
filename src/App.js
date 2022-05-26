
import './App.scss';
import { Container } from 'react-bootstrap';
// NOTE: BrowserRouter does not work with Github Pages. For deployment, must 
// replace with [HashRouter](https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing).
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import TestPatientSelector from 'test/basic/TestPatientSelector';
import TestPatient from 'test/basic/TestPatient';
import Dashboard from 'features/Dashboard';

document.body.className = 'bg-light';

import { applyPlan, simpleResolver } from 'encender';
let mini = [
  {
    "resourceType": "Patient",
    "id": "1"
  },
  {
    "resourceType": "PlanDefinition",
    "id": "canonicalPlanDefinition",
    "status": "draft",
    "url": "https://example-fhir-api.com/path/to/fhir/api/PlanDefinition/canonicalPlanDefinition"
  },
  {
    "resourceType": "PlanDefinition",
    "id": "truthyApplicabilityCondition",
    "status": "draft",
    "url": "https://example-fhir-api.com/path/to/fhir/api/PlanDefinition/truthyApplicabilityCondition",
    "library": ["https://example-fhir-api.com/path/to/fhir/api/Library/testingCqlLibrary"],
    "action": [
      {
        "title": "I am a conditional action",
        "condition": [
          {
            "kind": "applicability",
            "expression": {
              "language": "text/cql",
              "expression": "ReturnsTrue"
            }
          }
        ],
        "action": [
          {
            "definitionCanonical": "https://example-fhir-api.com/path/to/fhir/api/PlanDefinition/canonicalPlanDefinition"
          }
        ]
      },
      {
        "title": "I am an unconditional action"
      }
    ]
  },
  {
    "resourceType": "PlanDefinition",
    "id": "planDefinitionWithAnActivity",
    "status": "draft",
    "url": "https://example-fhir-api.com/path/to/fhir/api/PlanDefinition/planDefinitionWithAnActivity",
    "action": [
      {
        "definitionCanonical": "https://example-fhir-api.com/path/to/fhir/api/ActivityDefinition/hasACode"
      }
    ]
  },
  {
    "resourceType": "ActivityDefinition",
    "id": "hasACode",
    "status": "draft",
    "url": "https://example-fhir-api.com/path/to/fhir/api/ActivityDefinition/hasACode",
    "kind": "ServiceRequest",
    "code": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "260385009",
          "display": "Negative"
        }
      ],
      "text": "I'm nothing"
    }
  },
  {
    "resourceType": "Library",
    "id": "testingCqlLibrary",
    "url": "https://example-fhir-api.com/path/to/fhir/api/Library/testingCqlLibrary",
    "content": [
      {
        "contentType": "application/elm+json",
        "url": "TestingCqlLibrary.cql",
        "title": "Testing CQL Library",
        "data": "ewogICAibGlicmFyeSIgOiB7CiAgICAgICJhbm5vdGF0aW9uIiA6IFsgewogICAgICAgICAidHJhbnNsYXRvck9wdGlvbnMiIDogIiIsCiAgICAgICAgICJ0eXBlIiA6ICJDcWxUb0VsbUluZm8iCiAgICAgIH0gXSwKICAgICAgImlkZW50aWZpZXIiIDogewogICAgICAgICAiaWQiIDogIlRlc3RpbmdDcWxMaWJyYXJ5IiwKICAgICAgICAgInZlcnNpb24iIDogIjEuMC4wIgogICAgICB9LAogICAgICAic2NoZW1hSWRlbnRpZmllciIgOiB7CiAgICAgICAgICJpZCIgOiAidXJuOmhsNy1vcmc6ZWxtIiwKICAgICAgICAgInZlcnNpb24iIDogInIxIgogICAgICB9LAogICAgICAidXNpbmdzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiU3lzdGVtIiwKICAgICAgICAgICAgInVyaSIgOiAidXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIgogICAgICAgICB9LCB7CiAgICAgICAgICAgICJsb2NhbElkZW50aWZpZXIiIDogIkZISVIiLAogICAgICAgICAgICAidXJpIiA6ICJodHRwOi8vaGw3Lm9yZy9maGlyIiwKICAgICAgICAgICAgInZlcnNpb24iIDogIjQuMC4xIgogICAgICAgICB9IF0KICAgICAgfSwKICAgICAgImluY2x1ZGVzIiA6IHsKICAgICAgICAgImRlZiIgOiBbIHsKICAgICAgICAgICAgImxvY2FsSWRlbnRpZmllciIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAicGF0aCIgOiAiRkhJUkhlbHBlcnMiLAogICAgICAgICAgICAidmVyc2lvbiIgOiAiNC4wLjEiCiAgICAgICAgIH0gXQogICAgICB9LAogICAgICAic3RhdGVtZW50cyIgOiB7CiAgICAgICAgICJkZWYiIDogWyB7CiAgICAgICAgICAgICJuYW1lIiA6ICJSZXR1cm5zVHJ1ZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIlJldHVybnNGYWxzZSIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAiZmFsc2UiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbHNvUmV0dXJuc1RydWUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogInRydWUiLAogICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJBbm90aGVyVHJ1ZVN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ2YWx1ZVR5cGUiIDogInt1cm46aGw3LW9yZzplbG0tdHlwZXM6cjF9Qm9vbGVhbiIsCiAgICAgICAgICAgICAgICJ2YWx1ZSIgOiAidHJ1ZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkJ1dElBbUZhbHNlIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1Cb29sZWFuIiwKICAgICAgICAgICAgICAgInZhbHVlIiA6ICJmYWxzZSIsCiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFsc29GYWxzZUhlcmUiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfUJvb2xlYW4iLAogICAgICAgICAgICAgICAidmFsdWUiIDogImZhbHNlIiwKICAgICAgICAgICAgICAgInR5cGUiIDogIkxpdGVyYWwiCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjQwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjIuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJUcnVlTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICJjb250ZXh0IiA6ICJQYXRpZW50IiwKICAgICAgICAgICAgImFjY2Vzc0xldmVsIiA6ICJQdWJsaWMiLAogICAgICAgICAgICAiZXhwcmVzc2lvbiIgOiB7CiAgICAgICAgICAgICAgICJ0eXBlIiA6ICJHcmVhdGVyIiwKICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJGYWxzZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAiY29udGV4dCIgOiAiUGF0aWVudCIsCiAgICAgICAgICAgICJhY2Nlc3NMZXZlbCIgOiAiUHVibGljIiwKICAgICAgICAgICAgImV4cHJlc3Npb24iIDogewogICAgICAgICAgICAgICAidHlwZSIgOiAiTGVzcyIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSwgewogICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFkZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIxMDAuMCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgfQogICAgICAgICB9LCB7CiAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiVHJ1ZU1hdGhTdGF0ZW1lbnQiLAogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAidHlwZSIgOiAiR3JlYXRlciIsCiAgICAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aENhbGN1bGF0aW9uIiwKICAgICAgICAgICAgICAgICAgICAgInR5cGUiIDogIkV4cHJlc3Npb25SZWYiCiAgICAgICAgICAgICAgICAgIH0sIHsKICAgICAgICAgICAgICAgICAgICAgInZhbHVlVHlwZSIgOiAie3VybjpobDctb3JnOmVsbS10eXBlczpyMX1EZWNpbWFsIiwKICAgICAgICAgICAgICAgICAgICAgInZhbHVlIiA6ICIwLjAiLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiTGl0ZXJhbCIKICAgICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgICAgIH0gXQogICAgICAgICAgICB9CiAgICAgICAgIH0sIHsKICAgICAgICAgICAgIm5hbWUiIDogIkFub3RoZXJOZXN0ZWRNYXRoU3RhdGVtZW50IiwKICAgICAgICAgICAgImNvbnRleHQiIDogIlBhdGllbnQiLAogICAgICAgICAgICAiYWNjZXNzTGV2ZWwiIDogIlB1YmxpYyIsCiAgICAgICAgICAgICJleHByZXNzaW9uIiA6IHsKICAgICAgICAgICAgICAgInR5cGUiIDogIkFuZCIsCiAgICAgICAgICAgICAgICJvcGVyYW5kIiA6IFsgewogICAgICAgICAgICAgICAgICAibmFtZSIgOiAiTmVzdGVkTWF0aFN0YXRlbWVudCIsCiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJFeHByZXNzaW9uUmVmIgogICAgICAgICAgICAgICB9LCB7CiAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMZXNzIiwKICAgICAgICAgICAgICAgICAgIm9wZXJhbmQiIDogWyB7CiAgICAgICAgICAgICAgICAgICAgICJuYW1lIiA6ICJOZXN0ZWRNYXRoQ2FsY3VsYXRpb24iLAogICAgICAgICAgICAgICAgICAgICAidHlwZSIgOiAiRXhwcmVzc2lvblJlZiIKICAgICAgICAgICAgICAgICAgfSwgewogICAgICAgICAgICAgICAgICAgICAidmFsdWVUeXBlIiA6ICJ7dXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxfURlY2ltYWwiLAogICAgICAgICAgICAgICAgICAgICAidmFsdWUiIDogIjAuMCIsCiAgICAgICAgICAgICAgICAgICAgICJ0eXBlIiA6ICJMaXRlcmFsIgogICAgICAgICAgICAgICAgICB9IF0KICAgICAgICAgICAgICAgfSBdCiAgICAgICAgICAgIH0KICAgICAgICAgfSBdCiAgICAgIH0KICAgfQp9Cgo="
      }
    ]
  },
  {
    "resourceType": "PlanDefinition",
    "id": "falsyApplicabilityCondition",
    "status": "draft",
    "url": "https://example-fhir-api.com/path/to/fhir/api/PlanDefinition/falsyApplicabilityCondition",
    "library": ["https://example-fhir-api.com/path/to/fhir/api/Library/testingCqlLibrary"],
    "action": [
      {
        "title": "I am a conditional action",
        "condition": [
          {
            "kind": "applicability",
            "expression": {
              "language": "text/cql",
              "expression": "ReturnsFalse"
            }
          }
        ],
        "action": [
          {
            "definitionCanonical": "https://example-fhir-api.com/path/to/fhir/api/PlanDefinition/canonicalPlanDefinition"
          }
        ]
      },
      {
        "title": "I am an unconditional action"
      }
    ]
  },
  {
    "resourceType": "PlanDefinition",
    "id": "trueFalseApplicabilityConditions",
    "status": "draft",
    "url": "https://example-fhir-api.com/path/to/fhir/api/PlanDefinition/trueFalseApplicabilityConditions",
    "library": ["https://example-fhir-api.com/path/to/fhir/api/Library/testingCqlLibrary"],
    "action": [
      {
        "title": "I am a conditional action",
        "condition": [
          {
            "kind": "applicability",
            "expression": {
              "language": "text/cql",
              "expression": "ReturnsTrue"
            }
          },
          {
            "kind": "applicability",
            "expression": {
              "language": "text/cql",
              "expression": "ReturnsFalse"
            }
          }
        ],
        "action": [
          {
            "definitionCanonical": "https://example-fhir-api.com/path/to/fhir/api/PlanDefinition/canonicalPlanDefinition"
          }
        ]
      },
      {
        "title": "I am an unconditional action"
      }
    ]
  },
  {
    "resourceType": "PlanDefinition",
    "id": "trueTrueApplicabilityConditions",
    "status": "draft",
    "url": "https://example-fhir-api.com/path/to/fhir/api/PlanDefinition/trueTrueApplicabilityCondition",
    "library": ["https://example-fhir-api.com/path/to/fhir/api/Library/testingCqlLibrary"],
    "action": [
      {
        "title": "I am a conditional action",
        "condition": [
          {
            "kind": "applicability",
            "expression": {
              "language": "text/cql",
              "expression": "ReturnsTrue"
            }
          },
          {
            "kind": "applicability",
            "expression": {
              "language": "text/cql",
              "expression": "ReturnsTrue"
            }
          }
        ],
        "action": [
          {
            "definitionCanonical": "https://example-fhir-api.com/path/to/fhir/api/PlanDefinition/canonicalPlanDefinition"
          }
        ]
      },
      {
        "title": "I am an unconditional action"
      }
    ]
  },
  {
    "resourceType": "PlanDefinition",
    "id": "tenApplicabilityConditions",
    "status": "draft",
    "url": "https://example-fhir-api.com/path/to/fhir/api/PlanDefinition/tenApplicabilityConditions",
    "library": ["https://example-fhir-api.com/path/to/fhir/api/Library/testingCqlLibrary"],
    "action": [
      {
        "title": "I am a conditional action",
        "condition": [
          {
            "kind": "applicability",
            "expression": {
              "language": "text/cql",
              "expression": "ReturnsTrue"
            }
          },
          {
            "kind": "applicability",
            "expression": {
              "language": "text/cql",
              "expression": "ReturnsTrue"
            }
          },
          {
            "kind": "applicability",
            "expression": {
              "language": "text/cql",
              "expression": "AlsoReturnsTrue"
            }
          },
          {
            "kind": "applicability",
            "expression": {
              "language": "text/cql",
              "expression": "AnotherTrueStatement"
            }
          },
          {
            "kind": "applicability",
            "expression": {
              "language": "text/cql",
              "expression": "ReturnsTrue"
            }
          },
          {
            "kind": "applicability",
            "expression": {
              "language": "text/cql",
              "expression": "ReturnsTrue"
            }
          },
          {
            "kind": "applicability",
            "expression": {
              "language": "text/cql",
              "expression": "TrueMathStatement"
            }
          },
          {
            "kind": "applicability",
            "expression": {
              "language": "text/cql",
              "expression": "TrueMathStatement"
            }
          },
          {
            "kind": "applicability",
            "expression": {
              "language": "text/cql",
              "expression": "NestedMathStatement"
            }
          },
          {
            "kind": "applicability",
            "expression": {
              "language": "text/cql",
              "expression": "TrueMathStatement"
            }
          }
        ],
        "action": [
          {
            "definitionCanonical": "https://example-fhir-api.com/path/to/fhir/api/PlanDefinition/canonicalPlanDefinition"
          }
        ]
      },
      {
        "title": "I am an unconditional action"
      }
    ]
  }
];
let resolver = simpleResolver(mini, false);
const tenApplicabilityConditions = resolver('PlanDefinition/tenApplicabilityConditions')[0];
const patientReference = 'Patient/1';
const WorkerFactory = () => {
  return new Worker(new URL('../node_modules/cql-worker/src/cql.worker.js', import.meta.url))
};
const aux = { WorkerFactory };
const [CarePlan, RequestGroup, ...otherResources] = await applyPlan(tenApplicabilityConditions, patientReference, resolver, aux);

console.log(CarePlan);
console.log(RequestGroup);
console.log(otherResources);

function App() {
  return (
    <Container fluid>
      <Router>
        <Routes>
          <Route path="/tests-basic" >
            <Route path=":testName" element={<TestPatient />} />
            <Route index element={<TestPatientSelector/>} />
          </Route>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
