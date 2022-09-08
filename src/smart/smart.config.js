
export const config = {
  histories: [
    {
      title: 'Relevant Medical History',
      heading: {
        filled: 'Includes medical conditions, procedures, and medications that change screening risk',
        empty: 'No relevant history found'
      },
      tables: [
        {
          name: 'conditions',
          header: [
            {
              key: 'name',
              display: 'Condition'
            },
            {
              key: 'date',
              display: 'Onset Date'
            },
            {
              key: 'status',
              display: 'Action'
            }
          ],
          addButtonText: 'Add condition',
          form: {
            canonicalUri: 'http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentConditionQuestionnaire',
            title: 'Add Condition',
            preamble: null
          }
        },
        {
          name: 'observations',
          header: [
            {
              key: 'name',
              display: 'Observation'
            },
            {
              key: 'date',
              display: 'Date'
            },
            {
              key: 'value',
              display: 'Value'
            },
            {
              key: 'status',
              display: 'Action'
            }
          ],
          addButtonText: 'Add observation',
          form: {
            canonicalUri: 'http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentObservationQuestionnaire',
            title: 'Add Observation',
            preamble: null
          }
        },
        {
          name: 'procedures',
          header: [
            {
              key: 'name',
              display: 'Procedure'
            },
            {
              key: 'date',
              display: 'Date Performed'
            },
            {
              key: 'status',
              display: 'Action'
            }
          ],
          addButtonText: 'Add procedure',
          form: {
            canonicalUri: 'http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentProcedureQuestionnaire',
            title: 'Add Procedure',
            preamble: null
          }
        },
        {
          name: 'medications',
          header: [
            {
              key: 'name',
              display: 'Medication'
            },
            {
              key: 'date',
              display: 'Start Date'
            },
            {
              key: 'status',
              display: 'Action'
            }
          ],
          addButtonText: null,
          form: null
        }
      ]
    },
    {
      title: 'Screening and Management History',
      heading: {
        filled: '',
        empty: 'No results found'
      },
      tables: [
        {
          name: 'diagnosticReports',
          header: [
            {
              key: 'name',
              display: 'Test Name/Procedure',
              detailKey: 'longName'
            },
            {
              key: 'value',
              display: 'Result',
              detailKey: 'longValue'
            },
            {
              key: 'date',
              display: 'Date'
            },
            {
              key: 'status',
              display: 'Action'
            }
          ],
          addButtonText: 'Add result',
          form: {
            canonicalUri: 'http://OUR-PLACEHOLDER-URL.com/Questionnaire/ScreeningAndManagementHistoryQuestionnaire',
            title: 'Add Result',
            preamble: null
          }
        } 
      ]
    },
    {
      title: 'Vaccination History',
      heading: {
        filled: '',
        empty: 'No vaccinations found'
      },
      tables: [
        {
          name: 'immunizations',
          header: [
            {
              key: 'name',
              display: 'Vaccine'
            },
            {
              key: 'date',
              display: 'Date'
            },
            {
              key: 'status',
              display: 'Action'
            }
          ],
          addButtonText: 'Add HPV vaccination',
          form: {
            canonicalUri: 'http://OUR-PLACEHOLDER-URL.com/Questionnaire/PertinentVaccinationQuestionnaire',
            title: 'Add Vaccination',
            preamble: null
          }
        }
      ]
    }
  ]
}