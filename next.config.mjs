// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Aquí podrías revisar y ajustar la configuración de Webpack para la carga de fuentes.
      if (!isServer) {
        // Modificar la configuración solo para el lado del cliente
        config.module.rules.push({
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource',
        });
      }
  
      return config;
    },
  };
  
  export default nextConfig;
  