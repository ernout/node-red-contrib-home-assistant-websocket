(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{449:function(t,e,s){"use strict";s.r(e);var a=s(25),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"config-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-server"}},[t._v("#")]),t._v(" Config Server")]),t._v(" "),s("p",[t._v("Home Assistant connection configuration")]),t._v(" "),s("h2",{attrs:{id:"config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[t._v("#")]),t._v(" Config")]),t._v(" "),s("h3",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])])]),t._v(" "),s("p",[t._v("Label for this configuration, see details below for implications")]),t._v(" "),s("h3",{attrs:{id:"hass-io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hass-io"}},[t._v("#")]),t._v(" Hass.io")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("boolean")])])]),t._v(" "),s("p",[t._v("If you're running Node-RED as a Hass.io Add-on check this. No other information is needed.")]),t._v(" "),s("h3",{attrs:{id:"base-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base-url"}},[t._v("#")]),t._v(" Base URL")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])])]),t._v(" "),s("p",[t._v("The base URL and port the home assistant instance can be reached at, for example: "),s("code",[t._v("http://192.168.0.100:8123")]),t._v(" or "),s("code",[t._v("https://homeassistant.mysite.com")])]),t._v(" "),s("h3",{attrs:{id:"access-token-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-token-password"}},[t._v("#")]),t._v(" Access Token / Password")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])])]),t._v(" "),s("p",[t._v("Long-lived Access Token or Password used to contact the API")]),t._v(" "),s("h3",{attrs:{id:"legacy-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#legacy-password"}},[t._v("#")]),t._v(" Legacy Password")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("boolean")])])]),t._v(" "),s("p",[t._v("If you're using the legacy password to log into Home Assistant check this and enter your password in the password text box.")]),t._v(" "),s("h3",{attrs:{id:"unauthorized-ssl-certificates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unauthorized-ssl-certificates"}},[t._v("#")]),t._v(" Unauthorized SSL Certificates")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("boolean")])])]),t._v(" "),s("p",[t._v("This will allow you to use self-signed certificates. Only use this if you know what you're doing.")]),t._v(" "),s("h3",{attrs:{id:"state-boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state-boolean"}},[t._v("#")]),t._v(" State Boolean")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string | delimited")])])]),t._v(" "),s("p",[t._v("A list of strings, not case sensitive, delimited by vertical pipe, |, that will return true for State Type Boolean.")]),t._v(" "),s("h3",{attrs:{id:"cache-autocomplete-results"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache-autocomplete-results"}},[t._v("#")]),t._v(" Cache Autocomplete Results")]),t._v(" "),s("p",[t._v("Enables the caching of the JSON autocomplete requests. Enabling or disabling this may require a restart of Node-RED for it to take effect.")]),t._v(" "),s("h2",{attrs:{id:"details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#details"}},[t._v("#")]),t._v(" Details")]),t._v(" "),s("p",[t._v("Every node requires a configuration attached to define how to contact Home Assistant, which is this config node's main purpose.")]),t._v(" "),s("h3",{attrs:{id:"context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),s("p",[t._v("Each config node will also make some data available on the global context, the "),s("code",[t._v("Name")]),t._v(" value in this node is used as, camelcase, the namespace for those values")]),t._v(" "),s("p",[t._v("Currently "),s("code",[t._v("states")]),t._v(", "),s("code",[t._v("services")]),t._v(" and "),s("code",[t._v("events")]),t._v(" is made available on the global context. "),s("code",[t._v("states")]),t._v(" is always set to all available states at startup and updated whenever state changes occur so it should be always up to date. "),s("code",[t._v("services")]),t._v(" and "),s("code",[t._v("events")]),t._v(" is only updated on initial deploy.")]),t._v(" "),s("h3",{attrs:{id:"context-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context-example"}},[t._v("#")]),t._v(" Context Example")]),t._v(" "),s("p",[t._v("Say we have a config node with the name "),s("code",[t._v("Home Assistant")]),t._v(", with an entity set up in Home Assistant as "),s("code",[t._v("switch.my_switch")]),t._v(". This state would be available within function nodes and you could fetch using something like the below code")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" haCtx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" global"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"homeassistant"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" configCtx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" haCtx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("homeAssistant"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entityState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" configCtx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("states"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"switch.my_switch"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" entityState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"on"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"connection-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connection-issues"}},[t._v("#")]),t._v(" Connection Issues")]),t._v(" "),s("p",[t._v("Communication with Home Assistant is accomplished via a combination of WebSocket and the REST API if you are having troubles communicating with home assistant make sure you can access the API outside of node-red, but from the same server node-red is running on, using a REST client, curl, or any number of other methods to validate the connection")]),t._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://home-assistant.io/developers/rest_api",target:"_blank",rel:"noopener noreferrer"}},[t._v("Home Assistant REST API"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=o.exports}}]);