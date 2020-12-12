(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{455:function(t,a,s){"use strict";s.r(a);var e=s(25),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"get-entities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-entities"}},[t._v("#")]),t._v(" Get Entities")]),t._v(" "),s("p",[t._v("Get Entities based on search criteria")]),t._v(" "),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("h3",{attrs:{id:"search-criteria"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#search-criteria"}},[t._v("#")]),t._v(" Search Criteria")]),t._v(" "),s("p",[t._v("All search criteria have to be true for an entity to be valid.")]),t._v(" "),s("h3",{attrs:{id:"property"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#property"}},[t._v("#")]),t._v(" Property")]),t._v(" "),s("p",[t._v("Has autocompleted with all properties currently set on all loaded entities.")]),t._v(" "),s("h2",{attrs:{id:"inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),s("h3",{attrs:{id:"payload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#payload"}},[t._v("#")]),t._v(" payload")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Object")])])]),t._v(" "),s("p",[t._v("Override config values by passing in a property with a valid value.")]),t._v(" "),s("ul",[s("li",[t._v("rules array\n"),s("ul",[s("li",[t._v("property string")]),t._v(" "),s("li",[t._v("logic string")]),t._v(" "),s("li",[t._v("value string")]),t._v(" "),s("li",[t._v("valueType string")])])]),t._v(" "),s("li",[t._v("outputType string")]),t._v(" "),s("li",[t._v("outputEmptyResults boolean")]),t._v(" "),s("li",[t._v("outputLocationType string")]),t._v(" "),s("li",[t._v("outputLocation string")]),t._v(" "),s("li",[t._v("outputResultscount number")])]),t._v(" "),s("h2",{attrs:{id:"outputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),s("h3",{attrs:{id:"array"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array"}},[t._v("#")]),t._v(" Array")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Array")])])]),t._v(" "),s("p",[t._v("Sends an array of state objects from search criteria to the Output Location.")]),t._v(" "),s("h3",{attrs:{id:"count"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#count"}},[t._v("#")]),t._v(" Count")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("number")])])]),t._v(" "),s("p",[t._v("Return the total count of valid entities.")]),t._v(" "),s("h3",{attrs:{id:"random"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#random"}},[t._v("#")]),t._v(" Random")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Object|Array")])])]),t._v(" "),s("p",[t._v("Return a random object or array from the available state objects to the Output Location. When "),s("code",[t._v("One Max Results")]),t._v(" is selected it will return an object and when more than one is selected will always return an array of state objects.")]),t._v(" "),s("h3",{attrs:{id:"split"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#split"}},[t._v("#")]),t._v(" Split")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("msg")]),t._v(" part")])]),t._v(" "),s("p",[t._v("Sends a message for each state object. In the same format as if the split node was used.")]),t._v(" "),s("h2",{attrs:{id:"state-object-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state-object-format"}},[t._v("#")]),t._v(" State Object Format")]),t._v(" "),s("p",[t._v("Sample output when the Output Type is an array:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"entity_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"light.kitchen"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"state"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"on"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attributes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"brightness"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("243")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"friendly_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Kitchen Light"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"supported_features"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("33")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"icon"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mdi:light-switch"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"last_changed"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-12-29T05:38:53.016984+00:00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"last_updated"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-12-29T05:38:53.016984+00:00"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"context"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6c16e348494c42fb8c8e8bda92b20fb2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parent_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timeSinceChangedMs"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3466747")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"entity-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entity-id"}},[t._v("#")]),t._v(" entity_id")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])])]),t._v(" "),s("p",[t._v("The entity to which this state belongs")]),t._v(" "),s("h3",{attrs:{id:"state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" state")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])])]),t._v(" "),s("p",[t._v("Main attribute state value, examples: 'on', 'off', 'home', 'open', 'closed', etc...")]),t._v(" "),s("h3",{attrs:{id:"attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("#")]),t._v(" attributes")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Object")])])]),t._v(" "),s("p",[t._v("Supported attributes of state set by Home Assistant")]),t._v(" "),s("h3",{attrs:{id:"last-changed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#last-changed"}},[t._v("#")]),t._v(" last_changed")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])])]),t._v(" "),s("p",[t._v("ISO Date string of last time entity state changed")]),t._v(" "),s("h3",{attrs:{id:"timesincechangedms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timesincechangedms"}},[t._v("#")]),t._v(" timeSinceChangedMs")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("number")])])]),t._v(" "),s("p",[t._v("Milliseconds since last time entity state changed")]),t._v(" "),s("h3",{attrs:{id:"last-updated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#last-updated"}},[t._v("#")]),t._v(" last_updated")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])])]),t._v(" "),s("p",[t._v("ISO Date string of last time entity state was updated")]),t._v(" "),s("h3",{attrs:{id:"context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" context")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("Object")])])]),t._v(" "),s("p",[t._v("Information on who/what changed the state of this object last.")]),t._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://home-assistant.io/docs/configuration/state_object/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Home Assistant State Objects"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);