---
title: 'QuickStart'
meta_title: 'QuickStart to Vue SearchBox'
meta_description: 'Vue SearchBox is a lightweight vue searchbox UI component to query your ElasticSearch app.'
keywords:
    - quickstart
    - vue-searchbox
    - search library
    - elasticsearch
sidebar: 'docs'
nestedSidebar: 'vue-searchbox-reactivesearch'
---

![Image to be displayed](https://i.imgur.com/I6hHgoP.png)

`Vue SearchBox` offers a lightweight (~22KB: Minified + Gzipped) and performance focused searchbox UI component to query and display results from your ElasticSearch app (aka index) using declarative props. It is an alternative to using the [DataSearch component](/docs/reactivesearch/vue/search/DataSearch/) from Vue ReactiveSearch.

### When to Use Vue SearchBox

We recommend using Vue Searchbox over DataSearch or CategorySearch when you only need to integrate a searchbox UI component into your app. If you are planning to user other UI filters or result components, it is ideal to use the [ReactiveSearch library](/docs/reactivesearch/vue/overview/QuickStart/) instead of this standalone component.

Example uses of searchbox UI:

-   Searching a rental listing by its `name` or `description` fields.
-   Searching across e-commerce products.

## Usage

### Basic Usage

```html
<vue-searchBox
	app="good-books-ds"
	credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
	:dataField="['original_title', 'original_title.search']"
/>
```

### Usage With All Props

```html
<vue-searchBox
	app="good-books-ds"
	:appbaseConfig="{
        recordAnalytics: true,
        enableQueryRules: true,
        userId: 'jon@appbase.io',
        customEvents: {
           platform: "ios",
           device: "iphoneX"
        }
     }"
	credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
	:dataField="[
		{ field: 'original_title', weight: 1 },
		{ field: 'original_title.search', weight: 3 },
	]"
	title="Search"
	defaultValue="Songwriting"
	placeholder="Search for books"
	:autosuggest="true"
	:defaultSuggestions="[
		{ label: 'Songwriting', value: 'Songwriting' },
		{ label: 'Musicians', value: 'Musicians' },
	]"
	:highlight="true"
	highlightField="group_city"
	:size="10"
	queryFormat="or"
	fuzziness="AUTO"
	:showClear="true"
	:showVoiceSearch="true"
/>
```

## Props

-   **app** `string` [required]
    refers to an `index` if you’re using your own Elasticsearch cluster. If you're using an appbase.io hosted app, then the app name can be used.

    > Note: Multiple indexes can be connected to by specifying comma separated index names.

-   **url** `string` [required]
    URL for the Elasticsearch cluster. Defaults to `https://scalr.api.appbase.io`
-   **enableAppbase** `boolean` [optional]
    enableAppbase is false by default. You can set this to true when you're using appbase.io alongside ElasticSearch. It enables the following features:
    -   Recording of analytics events - search and clicks. [Read more](/docs/reactivesearch/vue/advanced/analytics/).
    -   Query generation happens on server side - protecting against security concerns around query injection.
    -   Apply query rules and functions for search queries. [Read more](/docs/search/rules/).
    -   Apply additional security controls to requests: authenticate via RBAC (via JWTs) or Basic Auth, ACL based access control, IP based rate limits, IP/HTTP Referers whitelisting, fields filtering. [Read more](/docs/security/role/).
-   **enableQuerySuggestions** `bool` [optional]
    Defaults to `false`. When enabled, it can be useful to curate search suggestions based on actual search queries that your users are making. Read more about it over [here](/docs/analytics/query-suggestions/).

    > Note:
    >
    > Query Suggestions only work when `enableAppbase` prop is `true`.
-   **credentials** `string` [optional]
    Basic auth credentials for authentication purposes. It should be a string of the format `username:password`.
    If you are using an appbase.io app, you will find credentials under your [API credentials page](https://dashboard.appbase.io/app?view=credentials). If you are not using an appbase.io app, credentials may not be necessary - although having an open access to your Elasticsearch cluster is not recommended.
-   **dataField** `string | Array<string | DataField>` [optional*]
    database field(s) to be queried against. Accepts a String or an Array of either String or `DataField` type. The latter is useful for searching across multiple fields with field weights.<br/>
    Think of field weights as a way to apply weighted search. To use field weights, you can define the `dataField` prop as an array of objects of `DataField` type.<br/>
    The `DataField` type has the following shape:
    ```ts
    type DataField = {
    	field: string;
    	weight: number;
    };
    ```

    >   Note:
    >   This prop is optional only when `enableAppbase` prop is set to `true`.
    >

-   **showDistinctSuggestions** `Boolean` [optional]
    Show 1 suggestion per document. If set to `false` multiple suggestions may show up for the same document as searched value might appear in multiple fields of the same document, this is true only if you have configured multiple fields in `dataField` prop. Defaults to `true`.
	<br/> <br/>
    **Example** if you have `showDistinctSuggestions`  is set to `false` and have following configurations

	```js
	// Your document:
	{
		"name": "Warn",
		"address": "Washington"
	}
	// Component:
	<vue-searchbox :dataField="['name', 'address']" ... />
	// Search Query:
	"wa"
	```

	Then there will be 2 suggestions from the same document
	as we have the search term present in both the fields
	specified in `dataField`.

	```
	Warn
	Washington
	```
-   **aggregationField** `string` [optional]
    One of the most important use-cases this enables is showing `DISTINCT` results (useful when you are dealing with sessions, events and logs type data).
    It utilizes `composite aggregations` which are newly introduced in ES v6 and offer vast performance benefits over a traditional terms aggregation.
    You can read more about it over [here](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-composite-aggregation.html).
    You can use `aggregationData` using `aggregations` event.

    ```html
    <vue-searchbox
    	app="good-book-ds-latest"
    	credentials="IPM14ICqp:8e573e86-8802-4a27-a7a1-4c7d0c62c186"
    	dataField="original_title"
    	aggregationField="original_title.keyword"
    	v-on:aggregations="function(next, prev) {...}"
    />
    ```

    <!-- TODO: merge aggs branch of react and vue before merging this -->

    > See impact of aggregationField with these example for [Vue](/docs/reactivesearch/vue/advanced/groupingresults/#how).

-   **appbaseConfig** `Object` [optional]
    allows you to customize the analytics experience when appbase.io is used as a backend. It accepts an object which has the following properties:

    - **recordAnalytics** `Boolean` allows recording search analytics (and click analytics) when set to `true` and appbase.io is used as a backend. Defaults to `false`.
    - **enableQueryRules** `Boolean` If `false`, then appbase.io will not apply the query rules on the search requests. Defaults to `true`.
    - **userId** `String` It allows you to define the user id to be used to record the appbase.io analytics. Defaults to the client's IP address.
    - **customEvents** `Object` It allows you to set the custom events which can be used to build your own analytics on top of appbase.io analytics. Further, these events can be used to filter the analytics stats from the appbase.io dashboard.

*   **nestedField** `String` [optional]
    Set the path of the `nested` type under which the `dataField` is present. Only applicable only when the field(s) specified in the `dataField` is(are) present under a [`nested` type](https://www.elastic.co/guide/en/elasticsearch/reference/current/nested.html) mapping.
*   **title** `String or JSX` [optional]
    set the title of the component to be shown in the UI.
*   **size** `Number` [optional]
    number of suggestions and results to show. Defaults to `10`.
*   **defaultValue** `string` [optional]
    set the initial search query text on mount.
*   **value** `string` [optional]
    sets the current value of the component. It sets the search query text (on mount and on update). Use this prop in conjunction with the `onChange` prop.
*   **placeholder** `String` [optional]
    set placeholder text to be shown in the component's input field. Defaults to "Search".
*   **showIcon** `Boolean` [optional]
    whether to display a search or custom icon in the input box. Defaults to `true`.
*   **iconPosition** `String` [optional]
    sets the position of the search icon. Can be set to either `left` or `right`. Defaults to `right`.
*   **icon** `JSX` [optional]
    set a custom search icon instead of the default icon 🔍
*   **showClear** `Boolean` [optional]
    show a clear text `X` icon. Defaults to `false`.
*   **clearIcon** `JSX` [optional]
    set a custom icon for clearing text instead of the default cross.
*   **autosuggest** `Boolean` [optional]
    set whether the autosuggest functionality should be enabled or disabled. Defaults to `true`.
*   **strictSelection** `Boolean` [optional]
    defaults to `false`. When set to `true`, the component will only set its value and fire the query if the value was selected from the suggestion. Otherwise, the value will be cleared on selection. This is only relevant with `autosuggest`.
*   **defaultSuggestions** `Array` [optional]
    preset search suggestions to be shown on focus when the SearchBox does not have any search query text set. Accepts an array of objects each having a **label** and **value** property. The label can contain either String or an HTML element.
*   **debounce** `Number` [optional]
    set the milliseconds to wait before executing the query. Defaults to `0`, i.e. no debounce.
*   **highlight** `Boolean` [optional]
    whether highlighting should be enabled in the returned results.
*   **highlightField** `String or Array` [optional]
    when highlighting is enabled, this prop allows specifying the fields which should be returned with the matching highlights. When not specified, it defaults to applying highlights on the field(s) specified in the **dataField** prop.
*   **queryFormat** `String` [optional]
    Sets the query format, can be **or** or **and**. Defaults to **or**.
    -   **or** returns all the results matching **any** of the search query text's parameters. For example, searching for "bat man" with **or** will return all the results matching either "bat" or "man".
    -   On the other hand with **and**, only results matching both "bat" and "man" will be returned. It returns the results matching **all** of the search query text's parameters.
*   **fuzziness** `String or Number` [optional]
    Sets a maximum edit distance on the search parameters, can be **0**, **1**, **2** or **"AUTO"**. Useful for showing the correct results for an incorrect search parameter by taking the fuzziness into account. For example, with a substitution of one character, **fox** can become **box**. Read more about it in the elastic search [docs](https://www.elastic.co/guide/en/elasticsearch/guide/current/fuzziness.html).
*   **showVoiceSearch** `Boolean` [optional]
    show a voice icon in the searchbox to enable users to set voice input. Defaults to `false`.
*   **searchOperators** `Boolean` [optional]
    Defaults to `false`. If set to `true`, ou can use special characters in the search query to enable an advanced search behavior.<br/>
    Read more about it [here](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html).
*   **URLParams** `Boolean` [optional]
    enable creating a URL query string param based on the search query text value. This is useful for sharing URLs with the component state. Defaults to `false`.

-   **render** `Function|slot-scope` [optional]
    You can render suggestions in a custom layout by using the `render` as a `prop` or a `slot`.
    <br/>
    It accepts an object with these properties:
    -   **`loading`**: `boolean`
        indicates that the query is still in progress.
    -   **`error`**: `object`
        An object containing the error info.
    -   **`data`**: `array`
        An array of parsed suggestions obtained from the applied query.
    -   **`querySuggestions`**: `array`
        An array of query suggestions obtained based on search value.
    -   **`rawData`** `object`
        An object of raw response as-is from elasticsearch query.
    -   **`promotedData`**: `array`
        An array of promoted results obtained from the applied query. [Read More](/docs/search/rules/)
    -   **`resultStats`**: `object`
        An object with the following properties which can be helpful to render custom stats:
        -   **`numberOfResults`**: `number`
            Total number of results found
        -   **`time`**: `number`
            Time taken to find total results (in ms)
        -   **`hidden`**: `number`
            Total number of hidden results found
        -   **`promoted`**: `number`
            Total number of promoted results found
    -   **`value`**: `string`
        current search input value i.e the search query being used to obtain suggestions.
    -   **`downshiftProps`**: `object`
        provides the following control props from `downshift` which can be used to bind list items with click/mouse events.
        -   **isOpen** `boolean`
            Whether the menu should be considered open or closed. Some aspects of the downshift component respond differently based on this value (for example, if isOpen is true when the user hits "Enter" on the input field, then the item at the highlightedIndex item is selected).
        -   **getItemProps** `function`
            Returns the props you should apply to any menu item elements you render.
        -   **getItemEvents** `function`
            Returns the events you should apply to any menu item elements you render.
        -   **highlightedIndex** `number`
            The index that should be highlighted.

You can use `vue-searchbox` with `render slot` as shown:

```html
<vue-searchbox
    app="good-books-clone"
    url="https://arc-cluster-appbase-tryout-k8dsnj.searchbase.io"
    credentials="IkwcRqior:cda6348c-37c9-40f6-a144-de3cb18b57a0"
    :dataField="['original_title', 'original_title.search']"
    :showVoiceSearch="true"
    :enable-appbase="true"
    :enable-query-suggestions="true"
>
	<div
		class="suggestions"
		slot="render"
		slot-scope="{
            error,
            loading,
            downshiftProps: { isOpen, highlightedIndex, getItemProps, getItemEvents },
            data: suggestions,
        }"
	>
		<ul v-if="isOpen">
			<li
				style="{ background-color: highlightedIndex ? 'grey' : 'transparent' }"
                v-for="suggestion in (suggestions || []).map(s => ({
                    label: s.source.authors,
                    value: s.source.authors,
                    key: s._id,
                }))"
				v-bind="getItemProps({ item: suggestion })"
				v-on="getItemEvents({ item: suggestion })"
				:key="suggestion._id"
			>
				{{ suggestion.label }}
			</li>
		</ul>
	</div>
</vue-searchbox>
```

-   **renderNoSuggestion** `String|slot-scope` [optional]
    can be used to render a message when there is no suggestions found.
-   **renderError** `String|Function|slot-scope` [optional]
    can be used to render an error message in case of any error.
-   **renderQuerySuggestions** `Function|slot-scope` [optional]
    You can render query suggestions in a custom layout by using the `renderQuerySuggestions` as a `prop` or a `slot`.
    <br/>
    It accepts an object with these properties:
    -   **`loading`**: `boolean`
        indicates that the query is still in progress.
    -   **`error`**: `object`
        An object containing the error info.
    -   **`data`**: `array`
        An array of query suggestions obtained based on search value.
    -   **`value`**: `string`
        current search input value i.e the search query being used to obtain suggestions.
    -   **`downshiftProps`**: `object`
        provides the following control props from `downshift` which can be used to bind list items with click/mouse events.
        -   **isOpen** `boolean`
            Whether the menu should be considered open or closed. Some aspects of the downshift component respond differently based on this value (for example, if isOpen is true when the user hits "Enter" on the input field, then the item at the highlightedIndex item is selected).
        -   **getItemProps** `function`
            Returns the props you should apply to any menu item elements you render.
        -   **getItemEvents** `function`
            Returns the events you should apply to any menu item elements you render.
        -   **highlightedIndex** `number`
            The index that should be highlighted.

You can use `vue-searchbox` with `renderQuerySuggestions slot` as shown:

```html
<vue-searchbox
	:dataField="['original_title', 'original_title.search']"
    :enableQuerySuggestions="true"
>
	<div
		class="suggestions"
		slot="renderQuerySuggestions"
		slot-scope="{
            error,
            loading,
            downshiftProps: { isOpen, highlightedIndex, getItemProps, getItemEvents },
            data: suggestions,
        }"
	>
		<ul v-if="isOpen">
			<li
				style="{ background-color: highlightedIndex ? 'grey' : 'transparent', color: 'green' }"
				v-for="suggestion in (suggestions || [])"
				v-bind="getItemProps({ item: suggestion })"
				v-on="getItemEvents({ item: suggestion })"
				:key="suggestion._id"
			>
				{{ suggestion.label }}
			</li>
		</ul>
	</div>
</vue-searchbox>
```

```html
<vue-searchbox
	:renderError=" function(error) {
          return `<div>
                Something went wrong!<br/>Error details<br/>${error}
            </div>`;
        }
      "
/>
```

or

```html
<template slot="renderError" slot-scope="error">
	<div>Something went wrong!<br />Error details<br />{{ error }}</div>
</template>
```

## Demo

<br />

<iframe src="https://codesandbox.io/embed/github/appbaseio/searchbox/tree/master/packages/vue-searchbox/examples/basic" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Styles

`SearchBox` component supports an `innerClass` prop to provide styles to the sub-components of SearchBox. These are the supported keys:

-   `title`
-   `input`
-   `mic`

Read more about it [here](/docs/reactivesearch/vue/theming/ClassnameInjection/).

##Extending

`Vue Searchbox` component can be extended to:

1. customize the look and feel with `className`,
2. connect with external interfaces using `beforeValueChange`, `valueChange` and `queryChange`,
3. use your own function to render suggestions using `renderSuggestion` prop. It expects an object back for each `suggestion` having keys `label` and `value`. The query is run against the `value` key and `label` is used for rendering the suggestions. `label` can be either `String` or JSX. For example,

```html
<vue-searchbox
	...
	:renderSuggestion="suggestion => ({
    label: `${suggestion._source.original_title} by ${suggestion._source.authors}`,
    value: suggestion._source.original_title,
    source: suggestion._source  // for onValueSelected to work with renderSuggestion
  })"
/>
```

The `suggestions` parameter receives all the unparsed suggestions from elasticsearch, however `parsedSuggestions` are also passed which can also be used for suggestions rendering.

```html
<vue-searchbox
	...
	className="custom-class"
	:customQuery="
        function(value, props) {
          return {
            query: {
                match: {
                    data_field: 'this is a test'
                }
            }
          }
        }"
	:beforeValueChange="
        function(value) {
          // called before the value is set
          // returns a promise
          return new Promise((resolve, reject) => {
            // update state or component props
            resolve()
            // or reject()
          })
        }"
	@valueChange="
        function(value) {
          console.log('current value: ', ${value})
          // set the state
          // use the value with other js code
        }"
	@valueSelected="
        function(value, cause, source) {
        console.log('current value: ', value)
    }"
	@queryChange="
        function(prevQuery, nextQuery) {
          // use the query with other js code
          console.log('prevQuery', prevQuery);
          console.log('nextQuery', nextQuery);
        }"
/>
```

-   **className** `String`
    CSS class to be injected on the component container.
-   **beforeValueChange** `Function`
    is a callback function which accepts component's future **value** as a parameter and **returns** a promise. It is called every time before a component's value changes. The promise, if and when resolved, triggers the execution of the component's query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.

## Events

-   **queryChange**
    is an event which accepts component's **prevQuery** and **nextQuery** as parameters. It is called every time the component's query changes. This event is handy in cases where you want to generate a side-effect whenever the component's query would change.
-   **valueChange**
    is an event which accepts component's current **value** as a parameter. It is called every time the component's value changes. This event is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a list item is selected in a "Discounted Price" SingleList.
-   **valueSelected**
    is called with the value selected via user interaction. It works only with `autosuggest` and is called whenever a suggestion is selected or a search is performed by pressing **enter** key. It also passes the `cause` of action and the `source` object if the cause of action was `'SUGGESTION_SELECT'`. The possible causes are:
    -   `'SUGGESTION_SELECT'`
    -   `'ENTER_PRESS'`
    -   `'CLEAR_VALUE'`
    -   `'SEARCH_ICON_CLICK'`
-   **suggestions**
    You can use this event to listen for the changes in suggestions.The function receives `suggestions` list.
-   **error**
    gets triggered in case of an error and provides the `error` object, which can be used for debugging or giving feedback to the user if needed.

The following events to the underlying `input` element:

-   **blur**
-   **focus**
-   **keyPress**
-   **keyDown**
-   **keyUp**
