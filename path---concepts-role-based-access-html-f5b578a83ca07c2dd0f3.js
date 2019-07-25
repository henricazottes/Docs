webpackJsonp([61439064239007],{405:function(e,t){e.exports={data:{markdownRemark:{html:'<h2 id="introduction"><a href="#introduction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction</h2>\n<p>Essential entities in any <a href="https://en.wikipedia.org/wiki/Role-based_access_control">Role Based Access Control (RBAC)</a> system are the <strong>user</strong>, the <strong>service</strong> that user wants to access (in our case <em>appbase application / elasticsearch indexes</em>), and the <strong><a href="https://en.wikipedia.org/wiki/Identity_provider">identity provider (IdP)</a></strong>. To access the service, the user first needs to authenticate against the IdP. The IdP verifies the user credentials and hands out a signed token. The user then sends this token to the service with each request. The service uses the information in the token to verify the user’s identity and to assign roles and permissions.</p>\n<p>You can now secure your Appbase applications by providing role based access to the various users that are going to use appbase application / elasticsearch index. We are supporting role base access using <a href="https://jwt.io/introduction/">JSON Web Tokens (JWT)</a>.</p>\n<blockquote>\n<p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.</p>\n</blockquote>\n<p>You can add JWT token with <code class="gatsby-code-text">Authorization: Bearer {JWT}</code> header, to authorize a user. In order to verify JWT token from different identity providers, we decide to support the JWT tokens that are signed using public/private key pair using <a href="https://en.wikipedia.org/wiki/RSA_(cryptosystem)">RSA256</a>.</p>\n<p>Now with the <code class="gatsby-code-text">JWT Bearer</code> token authorization, we will not be exposing our api credentials, hence adding one more layer of security to the application.</p>\n<h2 id="enable-role-based-access-using-dashboard"><a href="#enable-role-based-access-using-dashboard" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enable Role Based Access using Dashboard</h2>\n<p>Appbase dashbaord provides an intuitive way to enable and configure role based access using JWT. In order to setup RBAC, select <code class="gatsby-code-text">Role Based Access</code> under <code class="gatsby-code-text">Security</code> on Dashboard’s navigation bar.</p>\n<p><img src="https://www.dropbox.com/s/v7uwupxmh757yvl/Screenshot%202019-06-19%2017.19.46.png?dl=1"></p>\n<h3 id="this-page-is-divided-into-2-sections"><a href="#this-page-is-divided-into-2-sections" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>This page is divided into 2 sections</h3>\n<h4 id="1-configuring-jwt-public-key-and-role-key"><a href="#1-configuring-jwt-public-key-and-role-key" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. Configuring JWT Public Key and Role Key</h4>\n<p>In order to verify JWT token signed using RSA256, we need a Public Key provided by the identity provider. You can simply paste the public key in the text area provided for <code class="gatsby-code-text">Public Key</code>. Another thing that is required to verify role, is actual <code class="gatsby-code-text">Role Key</code> that would be present in any JWT token. This can be configured in <code class="gatsby-code-text">Role Key</code> input. The default value for role key is <code class="gatsby-code-text">role</code>.</p>\n<p><strong>Here is a quick example, where <a href="https://jwt.io/">https://jwt.io/</a> is used as an identity provider.</strong></p>\n<p><img src="https://www.dropbox.com/s/n1vqfle2t3vrma8/Screenshot%202019-06-19%2017.56.04.png?dl=1"></p>\n<h4 id="2-adding-roles-to-api-credentials"><a href="#2-adding-roles-to-api-credentials" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. Adding roles to <a href="/concepts/api-credentials.html">API Credentials</a></h4>\n<p>Once the <code class="gatsby-code-text">Public Key</code> and <code class="gatsby-code-text">Role Key</code> is configured, you can set up the actual roles that a user can have in your application in <code class="gatsby-code-text">Map Roles to API Credential</code> section. Each credentials created in <a href="/concepts/api-credentials.html">API Credentials</a> section can have a unique role name, which would be the value encoded in our JWT token.</p>\n<p><img src="https://www.dropbox.com/s/oxxtdl8koww9mro/Screenshot%202019-06-19%2018.25.59.png?dl=1"></p>\n<p>As you can see in the above example we have 2 roles assigned to different credentials, i.e. <code class="gatsby-code-text">admin</code> &#x26; <code class="gatsby-code-text">developer</code> (<em>this values have to be unique per application</em>).</p>\n<p>Now, whenever a user will make a request to the application, with valid <code class="gatsby-code-text">JWT Bearer</code> token for a given application he/she will be able to access the data.</p>\n<p>Sample API call for appbase app</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash">curl --location --request GET <span class="token string">"https://scalr.api.appbase.io/my-appbase-app"</span> \\\n  --header <span class="token string">"Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Impob24iLCJyb2xlIjoiYWRtaW4ifQ.GEbnh5dfbdRXdlkGi5aLFnM7xYuYViPSf0ZnLGaX0ikfo3fT8Rtx7rbpKvR6_eftmB3q0Q_x3n9-JsgbEY1E47p2H_qhMhP5Jd8uB__Dlm1LW5W6qiDsNelVsZLAcqq-CgnGxkgWvWRFfpNEoyZhzLa3TudoPjZWW7m4WOaewpyZwlyGH7oztjbLVwRVCNC5ziA61aZJHVR-C4MhaMxZ-hf1uE022BD9q6aH-mWuVjbMACMOQuqTgIxo5tmphRh_kbuKZEUslUYtB1cEPzgQNU2eRq5BjDI4EoxdTKkLhgYSgMWNnUcZowq8sd4-kKjEB7wrUa6xYIjY04xVO4NvYw"</span>\n</code></pre>\n      </div>',frontmatter:{title:"Role Based Access",next:"search-template.html",prev:"query-rules.html",nextTitle:"Search Template",prevTitle:"Query Rules"},fields:{path:"docs/concepts/role-based-access.md",slug:"concepts/role-based-access.html"}}},pathContext:{slug:"concepts/role-based-access.html"}}}});
//# sourceMappingURL=path---concepts-role-based-access-html-f5b578a83ca07c2dd0f3.js.map