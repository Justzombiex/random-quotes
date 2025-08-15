import { useState } from "react";
import { marked } from "marked";

const defaultMarkdown = `# Encabezado H1
## Subencabezado H2
[Enlace](https://freecodecamp.org)
\`Código en línea\`

\`\`\`
Bloque de código
console.log("Hola mundo")
\`\`\`

- Ítem de lista
> Cita

![Imagen](https://via.placeholder.com/150)
**Texto en negrita**
`;

export default function Previewer() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Markdown Previewer</h1>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="editor" className="form-label fw-bold">
            Editor
          </label>
          <textarea
            id="editor"
            className="form-control"
            rows="15"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          ></textarea>
        </div>
        <div className="col-md-6">
          <label htmlFor="preview" className="form-label fw-bold">
            Vista previa
          </label>
          <div
            id="preview"
            className="border rounded p-3 bg-light"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          ></div>
        </div>
      </div>
    </div>
  );
}
