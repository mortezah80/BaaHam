import React from 'react'
import './BaaHam_ContentproductionUser_Make.css'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function BaaHam_ContentproductionUser_Make() {
  return (
    <div className='BaaHam_ContentproductionUser_Make'>

        <CKEditor
          editor={ClassicEditor}
          config={ {
      
            // Use the German language for this editor.
            language: {
              // The UI will be English.
              ui: 'ar',
  
              // But the content will be edited in Arabic.
              content: 'ar'
          }
    
            // ...
        } }
        />
    </div>
  )
}

export default BaaHam_ContentproductionUser_Make

