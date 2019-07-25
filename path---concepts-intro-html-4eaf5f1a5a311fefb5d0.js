webpackJsonp([0xfa1259afa0b3],{402:function(e,a){e.exports={data:{markdownRemark:{html:'<h2 id="what-is-appbaseio"><a href="#what-is-appbaseio" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is appbase.io</h2>\n<p><a href="https://appbase.io">Appbase.io</a> provides a search stack platform for building modern apps. Appbase.io offers ElasticSearch as a service with added bells and whistles like a better development experience, rich analytics and out of the box granular security controls.</p>\n<p>With appbase.io, you can:  </p>\n<ul>\n<li>Import your data from a variety of sources using either our dashboard interface or CLI,</li>\n<li>Build and test search relevancy visually,  </li>\n<li>Build your search UIs using one of our UI component libraries or by using one of the SDKs or the REST API, </li>\n</ul>\n<p><img src="https://i.imgur.com/iJpqtks.png?1" alt="Appbase Architecture"><br>\n<strong>Image:</strong> appbase.io overview diagram</p>\n<p>We have production users running E-Commerce stores, analytics dashboards, feeds, and realtime backends using appbase.io.</p>\n<p>There are some catches if you intend to:  </p>\n<ul>\n<li>Use it as a primary data store or need ACID guarantees - Appbase.io is not ACIDic and doesn’t support multi-document transactions. A good design choice in such a situation would be to use something that supports ACID transactions (e.g. a SQL databaste), and then use Appbase.io for the data that needs to be searchable in realtime.</li>\n<li>Perform analytical processing - Being based on Elasticsearch, appbase.io is designed as an OLTP system although it supports aggregations and queries on data sets of the size of hundreds of gigabytes and even a few terabytes. There are plenty of ideal tools for OLAP use-cases - Amazon Redshift, Google Big Query, Apache Hadoop. appbase.io can be used in a complementary fashion with any of these for handling online transactions.</li>\n</ul>\n<h2 id="api-intro"><a href="#api-intro" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API Intro</h2>\n<p>appbase.io APIs are 100% RESTful, work with JSON and are compatible with Elasticsearch. With our <a href="https://appbase.io/apps">apps</a> offering, there are some API endpoints that we don’t allow access to. Full list of supported endpoints is documented at <a href="https://rest.appbase.io">https://rest.appbase.io</a>.</p>\n<p>We also offer <a href="https://appbase.io/clusters">hosted clusters</a>, where we maintain 100% compatibility with the Apache 2.0 licensed ElasticSearch and support every release starting v5.6.</p>\n<h2 id="out-of-the-box-features"><a href="#out-of-the-box-features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Out of the Box Features</h2>\n<p>appbase.io offers following advantages over running a raw Elasticsearch cluster / index.</p>\n<ol>\n<li><strong>Analytics</strong> - Get rich insights and analytics for your search app.</li>\n<li><strong>Security</strong> - Read/write access credentials, IP sources and HTTP Referers based restriction, Role based access control.  </li>\n<li><strong>Zero Ops</strong> - Automated provisioning, scaling, logging and daily backups so you can enjoy a peace of mind.</li>\n<li><strong>An Active Ecosystem</strong> - From UI toolkits to build <a href="https://opensource.appbase.io/reactivesearch">search interfaces</a> and <a href="https://opensource.appbase.io/reactivemaps">map UIs</a>, to the <a href="https://opensource.appbase.io/dejavu/">leading Elasticsearch data browser</a> to a <a href="https://opensource.appbase.io/mirage/">GUI for writing queries</a> to <a href="https://medium.appbase.io/abc-import-import-your-mongodb-sql-json-csv-data-into-elasticsearch-a202cafafc0d">backend data connectors</a> to import data from SQL, MongoDB, JSON, CSV sources into Elasticsearch, we are actively working on open-standards to improve accessibility of building apps with appbase.io and Elasticsearch.  </li>\n<li><strong>No Vendor Lock-in</strong> - Hosted APIs often come with a huge lock-in cost. appbase.io is offered as <a href="https://appbase.io">a hosted API</a> as well as a <a href="https://github.com/appbaseio/arc">cloud native software</a>, offering a consistent experience without becoming a walled garden.</li>\n<li><strong>Built-in Realtime Streaming</strong> - appbase.io is the only Elasticsearch service offering a realtime pub/sub API for the entire Elasticsearch Query DSL.  </li>\n</ol>\n<p><img src="https://i.imgur.com/4nIwmd6.png"><br>\n<strong>Image:</strong> appbase.io feature stack overview</p>',frontmatter:{title:"Introduction",next:"datamodel.html",prev:null,nextTitle:"Data Model",prevTitle:null},fields:{path:"docs/concepts/intro.md",slug:"concepts/intro.html"}}},pathContext:{slug:"concepts/intro.html"}}}});
//# sourceMappingURL=path---concepts-intro-html-4eaf5f1a5a311fefb5d0.js.map