import React from 'react'

export default function QuestionnaireResponse(props) {
  const questionnaireResponse = props.questionnaireResponse
  return (
    <div>
      <pre>
        { JSON.stringify(questionnaireResponse, null, 2) }
      </pre>
    </div>
  )
}
