import { RelevantHistoryForm } from "test/basic/forms/RelevantHistoryForm";
import { ScreeningAndManagementHistoryForm } from "test/basic/forms/ScreeningAndManagementHistoryForm";
import { VaccinationHistoryForm } from "test/basic/forms/VaccinationHistoryForm";

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
            handle: RelevantHistoryForm,
            title: 'Add Condition',
            preamble: 'NOTIONAL - meant to represent simple form for adding data'
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
            handle: RelevantHistoryForm,
            title: 'Add Condition',
            preamble: 'NOTIONAL - meant to represent simple form for adding data'
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
          addButtonText: 'Add medication',
          form: {
            handle: RelevantHistoryForm,
            title: 'Add Condition',
            preamble: 'NOTIONAL - meant to represent simple form for adding data'
          }
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
          name: 'labresults',
          header: [
            {
              key: 'name',
              display: 'Test Name/Procedure'
            },
            {
              key: 'value',
              display: 'Result'
            },
            {
              key: 'genotype',
              display: 'Genotype'
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
            handle: ScreeningAndManagementHistoryForm,
            title: 'Add Result',
            preamble: 'NOTIONAL - meant to represent simple form for adding data'
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
          name: 'vaccinations',
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
            handle: VaccinationHistoryForm,
            title: 'Add Vaccination',
            preamble: 'NOTIONAL - meant to represent simple form for adding data'
          }
        }
      ]
    }
  ]
}