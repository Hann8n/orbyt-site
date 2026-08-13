import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const metadata = JSON.parse(
  await readFile(new URL('../public/oauth/ios-client-metadata.json', import.meta.url), 'utf8'),
);
const association = JSON.parse(
  await readFile(new URL('../public/.well-known/apple-app-site-association', import.meta.url), 'utf8'),
);

assert.equal(metadata.client_id, 'https://getorbyt.com/oauth/ios-client-metadata.json');
assert.equal(metadata.application_type, 'native');
assert.equal(metadata.token_endpoint_auth_method, 'none');
assert.equal(metadata.dpop_bound_access_tokens, true);
assert.deepEqual(metadata.redirect_uris, ['https://getorbyt.com/oauth/callback']);

const scopes = new Set(metadata.scope.split(/\s+/));
for (const required of [
  'atproto',
  'include:app.bsky.authFullApp?aud=did:web:api.bsky.app%23bsky_appview',
  'blob:*/*',
  'repo:com.getorbyt.profile?action=create&action=update',
  'rpc:com.atproto.moderation.createReport?aud=did:web:api.bsky.app%23bsky_appview',
]) {
  assert(scopes.has(required), `missing required OAuth scope: ${required}`);
}
for (const forbidden of [
  'transition:generic',
  'transition:chat.bsky',
  'transition:email',
  'repo:*',
  'rpc:*?aud=did:web:api.bsky.app',
  'rpc:*?aud=did:web:api.bsky.app%23bsky_appview',
  'rpc:*?aud=did:web:api.bsky.chat%23bsky_chat',
  'rpc:com.getorbyt.space.*?aud=did:web:api.getorbyt.com%23space_appview',
]) {
  assert(!scopes.has(forbidden), `legacy OAuth scope must not be present: ${forbidden}`);
}

const legacyMetadata = JSON.parse(
  await readFile(new URL('../public/oauth-client-metadata.json', import.meta.url), 'utf8'),
);
assert.equal(legacyMetadata.scope, metadata.scope);

const detail = association.applinks.details[0];
assert.deepEqual(detail.appIDs, ['D8VXFBV8SJ.com.getorbyt.app']);
assert.deepEqual(detail.components.map((component) => component['/']), ['/oauth/callback']);

// ASWebAuthenticationSession's .https(host:path:) callback validates against the
// `webcredentials` service type, not `applinks` — both are required for the native
// OAuth callback to route back into the app.
assert.deepEqual(association.webcredentials?.apps, ['D8VXFBV8SJ.com.getorbyt.app']);

console.log('OAuth metadata and Associated Domains assets are valid.');
