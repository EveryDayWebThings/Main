
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\r\n<html lang=\"en\"> \r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<!-- <meta name=\"theme-color\" content=\"#bc9cc9\" /> -->\r\n\t\t<link rel=\"icon\" href=\"favicon.ico\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;800&display=swap\" rel=\"stylesheet\">\r\n\t\t<meta name=\"ezoic-site-verification\" content=\"onMlqG8ocOv2BH3S1K8JLGuWGT4RCQ\" />\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body data-sveltekit-preload-data=\"hover\">\r\n\t\t<div style=\"display: contents\">" + body + "</div>\r\n\t</body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n        <link rel=\"icon\" href=\"%sveltekit.assets%/favicon.ico\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\r\n\t\t<title>Error " + status + " </title>\r\n\t</head>\r\n\t<body>\r\n\t\t<h1>Error " + status + " - " + message + "</h1>\r\n\t\t<p>Something went wrong! <a href=\"https://\">Homepage</a>.</p>\r\n\t</body>\r\n</html>\r\n"
	},
	version_hash: "x5us1l"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
