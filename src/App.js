import React from "react";
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Embed from '@editorjs/embed'

import "./App.css";

const  App = () => {

  const editor = new EditorJS({
    holderId: 'editorjs',
    tools: {
      header: {
        class: Header,
        inlineToolbar: ['link']
      },
      list: {
        class: List,
        inlineToolbar: ['link', 'bold']
      },
      embed: {
        class: Embed,
        inlineToolbar: false,
        config: {
          services: {
            youtube: true,
            coub: true
          }
        }
      }
    }
  });

  const handleClick = () => {
    return editor.save().then(output => console.info('Article data: ', output)).catch(error => console.error('Failed saving article: ', error))
  }

  return (
    <>
      <h1>Understanding EditorJS</h1>
      <div id='editorjs'></div>
      <button onClick={handleClick}>Save article</button>
    </>
  )
}

export default App;
