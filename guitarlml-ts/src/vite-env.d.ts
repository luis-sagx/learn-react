/// <reference types="vite/client" />

// Declaraciones para archivos CSS
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

// Declaraciones para otros tipos de archivos que podrías usar
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.sass' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.less' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.styl' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.stylus' {
  const content: Record<string, string>;
  export default content;
}
