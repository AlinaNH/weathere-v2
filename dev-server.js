import webpack from "webpack";
import config from "./webpack.config.js";
import WebpackDevServer from "webpack-dev-server";

const options = {
  contentBase: "./dist",
  hot: true,
  host: "localhost",
  port: 8080
},
      compiler = webpack(config),
      server = new WebpackDevServer(compiler, options);

WebpackDevServer.addDevServerEntrypoints(config, options);

server.listen(options.port, options.host, () => {
  // eslint-disable-next-line no-console
  console.log("dev server listening on port 8080");
} );