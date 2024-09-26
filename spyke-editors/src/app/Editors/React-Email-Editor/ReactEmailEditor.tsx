import React, { useRef } from "react";

import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";

const jsonMock = {
  counters: {
    u_column: 1,
    u_row: 1,
    u_content_button: 1,
  },
  body: {
    id: "tQMIFyElgm",
    rows: [
      {
        id: "G3Uc4CO-ex",
        cells: [1],
        columns: [
          {
            id: "J2O0qFiZWF",
            contents: [
              {
                id: "Nqo5p8BlGx",
                type: "button",
                values: {
                  href: {
                    name: "web",
                    values: {
                      href: "",
                      target: "_blank",
                    },
                  },
                  buttonColors: {
                    color: "#FFFFFF",
                    backgroundColor: "#3AAEE0",
                    hoverColor: "#FFFFFF",
                    hoverBackgroundColor: "#3AAEE0",
                  },
                  size: {
                    autoWidth: true,
                    width: "100%",
                  },
                  fontSize: "14px",
                  lineHeight: "120%",
                  textAlign: "center",
                  padding: "10px 20px",
                  border: {},
                  borderRadius: "4px",
                  displayCondition: null,
                  _styleGuide: null,
                  containerPadding: "10px",
                  anchor: "",
                  _meta: {
                    htmlID: "u_content_button_1",
                    htmlClassNames: "u_content_button",
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  text: '<span style="line-height: 16.8px;">Button Text</span>',
                  _languages: {},
                  calculatedWidth: 110,
                  calculatedHeight: 37,
                },
              },
            ],
            values: {
              backgroundColor: "",
              padding: "0px",
              border: {},
              borderRadius: "0px",
              _meta: {
                htmlID: "u_column_1",
                htmlClassNames: "u_column",
              },
            },
          },
        ],
        values: {
          displayCondition: null,
          columns: false,
          _styleGuide: null,
          backgroundColor: "",
          columnsBackgroundColor: "",
          backgroundImage: {
            url: "",
            fullWidth: true,
            repeat: "no-repeat",
            size: "custom",
            position: "center",
            customPosition: ["50%", "50%"],
          },
          padding: "0px",
          anchor: "",
          hideDesktop: false,
          _meta: {
            htmlID: "u_row_1",
            htmlClassNames: "u_row",
          },
          selectable: true,
          draggable: true,
          duplicatable: true,
          deletable: true,
          hideable: true,
        },
      },
    ],
    headers: [],
    footers: [],
    values: {
      _styleGuide: null,
      popupPosition: "center",
      popupWidth: "600px",
      popupHeight: "auto",
      borderRadius: "10px",
      contentAlign: "center",
      contentVerticalAlign: "center",
      contentWidth: "500px",
      fontFamily: {
        label: "Arial",
        value: "arial,helvetica,sans-serif",
      },
      textColor: "#000000",
      popupBackgroundColor: "#FFFFFF",
      popupBackgroundImage: {
        url: "",
        fullWidth: true,
        repeat: "no-repeat",
        size: "cover",
        position: "center",
      },
      popupOverlay_backgroundColor: "rgba(0, 0, 0, 0.1)",
      popupCloseButton_position: "top-right",
      popupCloseButton_backgroundColor: "#DDDDDD",
      popupCloseButton_iconColor: "#000000",
      popupCloseButton_borderRadius: "0px",
      popupCloseButton_margin: "0px",
      popupCloseButton_action: {
        name: "close_popup",
        attrs: {
          onClick:
            "document.querySelector('.u-popup-container').style.display = 'none';",
        },
      },
      language: {},
      backgroundColor: "#F7F8F9",
      preheaderText: "",
      linkStyle: {
        body: true,
        linkColor: "#0000ee",
        linkHoverColor: "#0000ee",
        linkUnderline: true,
        linkHoverUnderline: true,
      },
      backgroundImage: {
        url: "",
        fullWidth: true,
        repeat: "no-repeat",
        size: "custom",
        position: "center",
      },
      _meta: {
        htmlID: "u_body",
        htmlClassNames: "u_body",
      },
    },
  },
  schemaVersion: 17,
};

export const ReactEmailEditor = (props: any) => {
  const emailEditorRef = useRef<EditorRef>(null);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
    });
  };

  const onReady: EmailEditorProps["onReady"] = (unlayer) => {
    unlayer.loadDesign(jsonMock);

    unlayer.registerCallback("image", function (file: any, done: any) {
      var data = new FormData();
      data.append("file", file.attachments[0]);
      console.log(file);
      console.log(file.attachments[0]);
      const object = window.URL.createObjectURL(file.attachments[0]);
      done({
        progress: 100,
        url: "https://www.futbox.com/img/v1/9c4/4a0/3c5/e3f/e8ef093be708a0aabbf3.png",
      });
      // fetch("/uploads", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json",
      //   },
      //   body: data,
      // })
      //   .then((response) => {
      //     // Make sure the response was valid
      //     if (response.status >= 200 && response.status < 300) {
      //       return response;
      //     } else {
      //       var error = new Error(response.statusText);
      //       // error.response = response
      //       throw error;
      //     }
      //   })
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then((data) => {
      //     // Pass the URL back to Unlayer to mark this upload as completed
      //     done({ progress: 100, url: data.filelink });
      //   });
    });
  };

  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>

      <EmailEditor
        style={{ height: "100vh" }}
        ref={emailEditorRef}
        onReady={onReady}
        options={{
          locale: "pt-BR",
          appearance: {
            // Definição de temas (padrão). Mas, pode ser customizável (versão premium).
            theme: "classic_dark",
            panels: {
              tools: {
                // Define a posição em tela da barra de ferramentas.
                // dock: "left",

                // Torna a barra de ferramentas fixa ou não.
                collapsible: true,
              },
            },
            // É possível customizar o spinning.
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
          },
        }}
      />
    </div>
  );
};
