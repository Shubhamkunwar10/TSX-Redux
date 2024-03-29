import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


interface MyEditorProps {
  editorHtml: string;
  onEditorHtmlChange: (value: string) => void;
}
const MyEditor: React.FC<MyEditorProps> = ({ editorHtml, onEditorHtmlChange }) => {

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'background',
    'align',
  ];


  const modules = {
    toolbar: {
      container: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
         {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean'],
        [{ 'align': [] }],
        ['color', 'background'],
        ['code-block']
      ],
   
    }
  };

  return (
    <ReactQuill
      theme="snow"
      value={editorHtml}
      onChange={onEditorHtmlChange}
      modules={modules}
      formats={formats}
    />
  );
};

export default MyEditor;
