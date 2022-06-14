// This JSON Schema is currently for documentation purposes only.
// It describes the input object that the CCSM Dashboard expects.
export const inputSchema = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/product.schema.json",
  "title": "title",
  "description": "description",
  "type": "object",
  "properties": {
    "patientInfo": {
      "description": "description",
      "type": "object",
      "properties": {
        "name": {
          "description": "description",
          "type": "string"
        },
        "id": {
          "description": "description",
          "type": "string"
        },
        "isPregnant": {
          "description": "description",
          "type": "boolean"
        },
        "dateOfBirth": {
          "description": "description",
          "type": "date"
        },
        "sexAtBirth": {
          "description": "description",
          "type": "string"
        },
        "age": {
          "description": "description",
          "type": "integer"
        },
        "gender": {
          "description": "description",
          "type": "string"
        },
        "primaryLanguage": {
          "description": "description",
          "type": "string"
        },
        "race": {
          "description": "description",
          "type": "string"
        }
      },
      "required": [ "name", "age"]
    },
    "patientHistory": {
      "description": "description",
      "type": "object",
      "properties": {
        "conditions": {
          "type": "array",
          "items": { "$ref": "#/$defs/historyItem" }
        },
        "diagnosticReports": {
          "type": "array",
          "items": { "$ref": "#/$defs/historyItem" }
        },
        "medications": {
          "type": "array",
          "items": { "$ref": "#/$defs/historyItem" }
        },
        "procedures": {
          "type": "array",
          "items": { "$ref": "#/$defs/historyItem" }
        },
        "vaccinations": {
          "type": "array",
          "items": { "$ref": "#/$defs/historyItem" }
        }
      }
    },
    "decisionAids": {
      "description": "description",
      "type": "object",
      "properties": {
        "recommendation": { "type": "string" },
        "recommendationGroup": { "type": "string" },
        "recommendationDetails": {
          "type": "array",
          "items": { "type": "string" }
        },
        "errors": {
          "type": "array",
          "items": { "type": "string" }
        },
        "disclaimer": {"type": "string" },
        "suggestedOrders": {
          "type": "array",
          "items": { "type": "string" }
        },
        "riskTable": {
          "type": "object",
          "properties": {
            "title": { "type": "string" },
            "subtitle": { "type": "string" },
            "headers": {
              "type": "array",
              "items": { 
                "type": "object",
                "properties": {
                  "key": { "type": "string" },
                  "display": { "type": "string "}
                }
              }
            },
            "relevant": {
              "type": "object",
              "properties": { "$ref": "#/$defs/riskItem" }
            },
            "adjacent": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": { "$ref": "#/$defs/riskItem" }
              }
            },
            "clarifications": {
              "type": "array",
              "items": { "type": "string" }
            }
          }
        },
        "references": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": { "type": "string" },
              "documents": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "title": { "type": "string" },
                    "link": { "type": "string" }
                  }
                }
              }
            }
          }
        },
        "logicPath": {
          "description": "description",
          "type": "object",
          "properties": {
            "name": { "type": "string" },
            "reference": { "type": "string" }
          }
        }
      },
      "logicSummary": {
        "description": "description",
        "type": "string"
      },
      "logicCriteria": {
        "description": "description",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "title": {"type": "string" },
            "groups": {
              "description": "description",
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "description": "description",
                    "type": "string"
                  },
                  "items": {
                    "description": "description",
                    "type": "array",
                    "items": { "$ref": "#/$defs/historyItem" }
                  }
                }
              }
            }
          }
        }
      },
      "timeline": {
        "description": "description",
        "type": "object",
        "properties": {
          "explanation": { "type": "string" },
          "projection": {
            "description": "description",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "era": {
                  "description": "description",
                  "type": "string"
                },
                "status": {
                  "description": "description",
                  "type": "string"
                },
                "options": {
                  "description": "description",
                  "type": "object",
                  "properties": {
                    "activity": { "type": "string" },
                    "period": { "type": "string" },
                    "detail": { "type": "string" },
                    "duration": { "type": "string" }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "required": [ "patientInfo" ],
  "$defs": {
    "historyItem": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "value": { "type": "string" },
        "date": { "type": "date" },
        "id": { "type": "string" }
      }
    },
    "riskItem": {
      "type": "object",
      "description": "description"
    }
  }
};