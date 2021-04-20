// app.js

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import List from '@ckeditor/ckeditor5-list/src/list';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Audio from './src/audio';
import AudioUpload from './src/audioupload';
import AudioToolbar from './src/audiotoolbar';
import AudioResize from './src/audioresize';
import AudioStyle from './src/audiostyle';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ Essentials, Paragraph, Heading, List, Bold, Italic, Audio, AudioUpload, AudioToolbar, AudioResize, AudioStyle ],
        toolbar: [
          'heading',
          'bold',
          'italic',
          'numberedList',
          'bulletedList',
          'audioUpload',
        ],
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );

        CKEditorInspector.attach( 'editor', editor );

        // Expose for playing in the console.
        window.editor = editor;
    } )
    .catch( error => {
        console.error( error.stack );
    } );
