import React, { useRef } from "react";

import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";

export const ReactEmailEditor = (props: any) => {
  const emailEditorRef = useRef<EditorRef>(null);

  // const exportHtml = () => {
  //   const unlayer = emailEditorRef.current?.editor;

  //   unlayer?.exportHtml((data) => {
  //     const { design, html } = data;
  //     console.log("exportHtml", html);
  //   });
  // };

  // const onLoad = () => {
  //   const unlayer = emailEditorRef.current?.editor;

  //   // Chame init para personalizar ferramentas como o botão
  //   unlayer?.init({
  //     tools: {
  //       button: {
  //         properties: {
  //           text: {
  //             defaultValue: "Clica aqui", // Defina o valor padrão do texto do botão
  //           }
  //         }
  //       }
  //     }
  //   });

  //   // Definindo um design inicial para o editor, com as propriedades corretas
  //   const initialDesign = {
  //     id: "initial-design-id", // ID obrigatório
  //     body: {
  //       id: "body-id", // ID do corpo
  //       rows: [], // Linhas do design
  //       headers: [], // Cabeçalhos (pode ser vazio)
  //       footers: [], // Rodapés (pode ser vazio)
  //       values: {} // Propriedades gerais
  //     },
  //     counters: {
  //       u_row: 1,
  //       u_column: 1,
  //       u_content: 1
  //     }
  //   };

  //   // Carregando o design inicial
  //   unlayer?.loadDesign(initialDesign);
  // };

  const onReady: EmailEditorProps["onReady"] = (unlayer) => {
    //   console.log(unlayer);
    //   // editor is ready
    //   // you can load your template here;
    //   // the design json can be obtained by calling
    //   // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)
    //   // const templateJson = { DESIGN JSON GOES HERE };
    //   // unlayer.loadDesign(templateJson);

    
  };

  return (
    <div>
      <div>{/* <button onClick={exportHtml}>Export HTML</button> */}</div>

      <EmailEditor
        ref={emailEditorRef}
        // onLoad={onLoad}
        onReady={onReady}
        options={{
          locale: "pt-BR",
          appearance: {
            // Definição de temas (padrão). Mas, pode ser customizável.
            theme: "classic_dark",
            panels: {
              tools: {
                // Define a posição em tela da barra de ferramentas.
                // dock: "left",

                // Torna a barra de ferramentas fixa ou não.
                collapsible: true,
              },
            },
            // É possível customizar o spinning (verificar se é possível ocultar tbm).
            loader: {
              html: '<div class="custom-spinner"></div>',
              css: ".custom-spinner { color: red; }",
            },
          },
          tools: {
            image: {
              enabled: true,
              position: 0,
              // A documentação aponto que é possível mudar o label, mas a tipagem diz que a propriedade não existe.
              // label: "teste",
            },
            // validar como utilizar, desta forma não esta sendo aplicado.
            // button: {
            //   properties: {
            //     text: {
            //       defaultValue: "clica aee"
            //     }
            //   }
            // }
            // form: {

            // },
          },
          
        }}
      />
    </div>
  );
};
