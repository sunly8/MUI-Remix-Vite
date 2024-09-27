/** @type {import('@remix-run/dev').AppConfig} */


export default {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: 'app',
  browserBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildDirectory: 'build',
  tailwind: false,
  postcss: false,
  serverModuleFormat: 'esm',
};
