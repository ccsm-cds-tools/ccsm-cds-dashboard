import './style.scss';

function References(props) {
  const { 
    input: {
      references=[]
    } 
  } = props;

  return (
    <article>
      {
        references.map((ref,idx) => {
          const {
            name='',
            details=[],
            documents=[]
          } = ref;
          return (
            <div key={idx}>
              <h3>{name}</h3>
              {
                details.map((det,detIdx) => <p key={detIdx}>{det}</p>)
              }
              <div className='document-list'>
                <h4>Documents</h4>
                <ul>
                  {
                    documents.map((doc,idx) => {
                      return (
                        <li className='doc' key={idx}>
                          <a href={doc.link} className="doc certificate">{doc.title}</a>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          )
        })
      }
    </article>
  )
}

export default References;