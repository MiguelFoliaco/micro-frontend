# Practica de Micro-Framework

### Pasos para ejecutar el proyecto

**Paso 1**
Despues de clonar el este repocitorio deberan instalar las dependecias de cada proyecto

En `server-app` y `remote-app`

```cmd
npm install
```

**Paso 2**

Deberan generar un builder de remote app y luego levantar una vista previa
`remote-app`

```
npm run build && npm run prevew
```

**Paso 3**
Deberas modifica el archivo `vite.config.ts` de `server-app` en la propiedad remote_app con el valor de host generado en el `npm run preview` del `remote-app`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        remote_app: "http://localhost:4173/assets/remoteEntry.js", // aqui deberas colocar el puerto correspondiente que te genere la consola
      },
      shared: ["react"],
    }),
  ],
});
```

**Paso 4**
y por ultimo un `npm run dev` en `server-app`
