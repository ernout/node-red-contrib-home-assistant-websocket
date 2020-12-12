(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{438:function(e,t,o){"use strict";o.r(t);var n=o(25),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"event-nodes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-nodes"}},[e._v("#")]),e._v(" Event Nodes")]),e._v(" "),o("h2",{attrs:{id:"available-to-all-event-nodes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#available-to-all-event-nodes"}},[e._v("#")]),e._v(" Available to all event nodes")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/node/events-all.html"}},[e._v("Events: all")]),e._v(", "),o("RouterLink",{attrs:{to:"/node/events-state.html"}},[e._v("events:\nstate")]),e._v(", "),o("RouterLink",{attrs:{to:"/node/trigger-state.html"}},[e._v("trigger:\nstate")]),e._v(", and "),o("RouterLink",{attrs:{to:"/node/poll-state.html"}},[e._v("poll state")]),e._v(" nodes\nwill have the option to be exposed to Home Assistant, and when enabled, it will\nshow up in Home Assistant as a switch. Turning on and off these switches will\ndisable/enable the nodes in Node-RED. This should help people who find\nthemselves having to make input_booleans in HA to enable/disable flows.")],1),e._v(" "),o("h2",{attrs:{id:"trigger-an-exposed-event-node-from-a-service-call-nodered-trigger"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#trigger-an-exposed-event-node-from-a-service-call-nodered-trigger"}},[e._v("#")]),e._v(" Trigger an exposed event node from a service call "),o("code",[e._v("nodered.trigger")])]),e._v(" "),o("p",[e._v("Event nodes that are triggered by a service call will have their status color\nblue when "),o("code",[e._v("skip_condition")]),e._v(" is "),o("code",[e._v("true")]),e._v(" and when "),o("code",[e._v("false")]),e._v(" it will stay green with\nthe text "),o("em",[e._v("(triggered)")]),e._v(" appended after the state in the status text.")]),e._v(" "),o("p",[e._v("Data properties of the service call:")]),e._v(" "),o("p",[o("strong",[e._v("entity_id")])]),e._v(" "),o("p",[e._v("The only data property of the service call that is required is an "),o("code",[e._v("entity_id")]),e._v(" of\nthe switch that is associated with a node in NR.")]),e._v(" "),o("p",[o("strong",[e._v("trigger_entity_id")])]),e._v(" "),o("p",[e._v("Will be the entity that triggers the node. It is optional and only required if\nthe node entity filter is not set to "),o("code",[e._v("exact")]),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("skip_condition")])]),e._v(" "),o("p",[e._v("It can be used when you don't want the conditionals of the node to be check and\njust have it pass the entity through. Defaults to "),o("code",[e._v("false")])]),e._v(" "),o("p",[e._v("For the trigger: state node custom output will not be evaluated.")]),e._v(" "),o("p",[o("strong",[e._v("output_path")])]),e._v(" "),o("p",[e._v("When "),o("code",[e._v("skip_condition")]),e._v(" is "),o("code",[e._v("true")]),e._v(" this allows you to choose which output to send\nthe message through. Defaults to "),o("code",[e._v("true")]),e._v(" the top output")])])}),[],!1,null,null,null);t.default=s.exports}}]);