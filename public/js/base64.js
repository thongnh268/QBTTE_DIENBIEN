const ClassicEditor = require('@ckeditor/ckeditor5-editor-classic/src/classiceditor');
const EssentialsPlugin = require('@ckeditor/ckeditor5-essentials/src/essentials');
const UploadAdapterPlugin = require('@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter');
const AutoformatPlugin = require('@ckeditor/ckeditor5-autoformat/src/autoformat');
const BoldPlugin = require('@ckeditor/ckeditor5-basic-styles/src/bold');
const ItalicPlugin = require('@ckeditor/ckeditor5-basic-styles/src/italic');
const BlockQuotePlugin = require('@ckeditor/ckeditor5-block-quote/src/blockquote');
const EasyImagePlugin = require('@ckeditor/ckeditor5-easy-image/src/easyimage');
const HeadingPlugin = require('@ckeditor/ckeditor5-heading/src/heading');
const ImagePlugin = require('@ckeditor/ckeditor5-image/src/image');
const ImageCaptionPlugin = require('@ckeditor/ckeditor5-image/src/imagecaption');
const ImageStylePlugin = require('@ckeditor/ckeditor5-image/src/imagestyle');
const ImageToolbarPlugin = require('@ckeditor/ckeditor5-image/src/imagetoolbar');
const ImageUploadPlugin = require('@ckeditor/ckeditor5-image/src/imageupload');
const LinkPlugin = require('@ckeditor/ckeditor5-link/src/link');
const ListPlugin = require('@ckeditor/ckeditor5-list/src/list');
const ParagraphPlugin = require('@ckeditor/ckeditor5-paragraph/src/paragraph');

module.export = ClassicEditor
    .create( document.querySelector( '#editor'), {
        // The plugins are now passed directly to .create().
        plugins: [
            EssentialsPlugin,
            AutoformatPlugin,
            BoldPlugin,
            ItalicPlugin,
            BlockQuotePlugin,
            HeadingPlugin,
            ImagePlugin,
            ImageCaptionPlugin,
            ImageStylePlugin,
            ImageToolbarPlugin,
            EasyImagePlugin,
            ImageUploadPlugin,
            LinkPlugin,
            ListPlugin,
            ParagraphPlugin,
            UploadAdapterPlugin
        ],

        // So is the rest of the default configuration.
        toolbar: [
            'heading',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            'imageUpload',
            'blockQuote',
            'undo',
            'redo'
        ],
        image: {
            toolbar: [
                'imageStyle:full',
                'imageStyle:side',
                '|',
                'imageTextAlternative'
            ]
        }
    } )
    .then( editor => {
        console.log( editor );
    } )
    .catch( error => {
        console.error( error );
    } );