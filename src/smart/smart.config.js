
export const config = {
  histories: [
    {
      title: 'Screening and Management History',
      heading: {
        filled: '',
        empty: 'No results found'
      },
      disclaimer: 'Histology and cytology results from before April 23, 2017 may not be available. The CDS will only compute recommendations based on the history shown.',
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
          addButtonText: null,
          form: null
        } 
      ]
    },
    {
      title: 'Relevant Medical History',
      heading: {
        filled: 'Includes medical conditions, procedures, and medications that change screening risk',
        empty: 'No relevant history found'
      },
      disclaimer: '',
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
          addButtonText: null,
          form: null
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
          addButtonText: null,
          form: null
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
          addButtonText: null,
          form: null
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
      title: 'Vaccination History',
      heading: {
        filled: '',
        empty: 'No vaccinations found'
      },
      disclaimer: 'Vaccination history is shown for reference only and is NOT used by CDS to compute recommendations.',
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
          addButtonText: null,
          form: null
        }
      ]
    }
  ]
}