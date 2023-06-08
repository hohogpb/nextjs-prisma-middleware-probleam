Reproduction steps:
```
npm install
npm run build
npm run start
# Open URL it outputs
# Navigate to /admin/dashboard
# Observe Error 500 and error message in console
```

for example:
```
> prismedgeproblem@0.1.0 start
> next start

- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- info Loaded env from /workspace/nextjs-prisma-middleware-probleam/.env
npm run devError: PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues
    at <unknown> (file:///workspace/nextjs-prisma-middleware-probleam/.next/server/middleware.js:1446)
    at new PrismaClient (file:///workspace/nextjs-prisma-middleware-probleam/.next/server/middleware.js:1446:15)
    at 367 (file:///workspace/nextjs-prisma-middleware-probleam/.next/server/middleware.js:1330:48)
    at __webpack_require__ (file:///workspace/nextjs-prisma-middleware-probleam/.next/server/edge-runtime-webpack.js:25:42)
    at 886 (file:///workspace/nextjs-prisma-middleware-probleam/.next/server/middleware.js:1294:19)
    at __webpack_require__ (file:///workspace/nextjs-prisma-middleware-probleam/.next/server/edge-runtime-webpack.js:25:42)
    at __webpack_exec__ (file:///workspace/nextjs-prisma-middleware-probleam/.next/server/middleware.js:4056:48)
    at <unknown> (file:///workspace/nextjs-prisma-middleware-probleam/.next/server/middleware.js:4057:37)
    at webpackJsonpCallback (file:///workspace/nextjs-prisma-middleware-probleam/.next/server/edge-runtime-webpack.js:146:39)
    at <unknown> (file:///workspace/nextjs-prisma-middleware-probleam/.next/server/middleware.js:2:61)
    at Script.runInContext (node:vm:141:12)
```