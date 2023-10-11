# Wordpress Plugin with Vite ReactJS

## Como utilizar

Utilize o shortcode `[wp_vite_react]` em qualquer local do seu site para renderizar o App ReactJS.

## Desenvolvimento

A instalação Vite + ReactJS + Typescript + TailwindCSS está localizada no diretório `app/wp_vite_react`. Acesse-o e execute `npm install` para instalar as dependências.

Utilize `npm run dev` durante o desenvolvimento.

Execute `npm run build` para gerar a build do projeto.

## Instalação

Comprima os arquivos da raíz e instale o plugin manualmente no site Wordpress com o `wp-vite-react.zip` gerado.

### Dica de otimização de tamanho (OPCIONAL)

Caso ache necessário, remova o diretório `app/wp-vite-react-app` do seu `wp-vite-react.zip` para diminuir o tamanho do plugin. Este diretório só é utilizado para o desenvolvimento.
