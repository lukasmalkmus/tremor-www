"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[7838],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82846:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={},s={unversionedId:"recipes/otel_passthrough/README",id:"recipes/otel_passthrough/README",isDocsHomePage:!1,title:"CNCF OpenTelemetry Passthrough",description:"This example is the simplest possible configuration of tremor with support for CNCF OpenTelemetry",source:"@site/docs/recipes/40_otel_passthrough/README.md",sourceDirName:"recipes/40_otel_passthrough",slug:"/recipes/otel_passthrough/README",permalink:"/docs/recipes/otel_passthrough/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/recipes/40_otel_passthrough/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ingesting documents from kafka into elastic",permalink:"/docs/recipes/kafka_elastic_correlation/README"},next:{title:"CNCF OpenTelemetry Zipkin Interorking",permalink:"/docs/recipes/otel_zipkin/README"}},p=[{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[]},{value:"Command line testing during logic development",id:"command-line-testing-during-logic-development",children:[]},{value:"Docker",id:"docker",children:[]}],c={toc:p};function u(e){var n=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example is the simplest possible configuration of tremor with support for CNCF OpenTelemetry\ninterception and distribution. It shows the very basic building blocks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CNCF OpenTelemetry Onramp"),(0,a.kt)("li",{parentName:"ul"},"CNCF OpenTelemetry Offramp"),(0,a.kt)("li",{parentName:"ul"},"Deployment configuration file")),(0,a.kt)("p",null,"External open telemetry clients can use port ",(0,a.kt)("inlineCode",{parentName:"p"},"4316")," to send OpenTelemetry logs, traces and metrics\nthrough tremor. Tremor prints the json mapping to standard out and forwards the events to the\nOpenTelemetry collector."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{target:"_blank",href:t(58161).Z},"onramp")," we use is the ",(0,a.kt)("inlineCode",{parentName:"p"},"otel")," CNCF OpenTeletry onramp listening on\na non-standard CNCF OpenTelemetry port ",(0,a.kt)("inlineCode",{parentName:"p"},"4316"),", it receives protocol buffer messages over gRPC on this\nport. The log, metric and trace events received are converted to tremor's value system and passed through\na passthrough pipeline to the CNCF OpenTelemetry sink. The sink will try to connect to a downstream CNCF\nOpenTelemetry endpoint. In this workshop we will use the well known OpenTelemetry port of ",(0,a.kt)("inlineCode",{parentName:"p"},"4317")," for our\nsink and run the standard OpenTelemetry collector on this port using a ",(0,a.kt)("a",{target:"_blank",href:t(22244).Z},"collector configuration"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'onramp:\n  - id: otlp\n    type: otel # Use the OpenTelemetry gRPC listener source\n    codec: json # Json is the only supported value\n    config:\n      port: 4316 # The TCP port to listen on\n      host: "0.0.0.0" # The IP address to bind on ( all interfaces in this case )\n')),(0,a.kt)("p",null,"It connects to a passthrough pipeline. This pipeline forwards any received\nobservability events downstream unchanged."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"select event from in into out;\n")),(0,a.kt)("p",null,"We connect the passthrough output events into an OpenTelemetry sink which distributes them to\na downstream OpenTelemetry service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'offramp:\n  - id: otlp\n    type: otel\n    codec: json # Jsn is the only supported value\n    config:\n      host: "0.0.0.0"\n      port: 4317\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{target:"_blank",href:t(21029).Z},"binding")," expresses these relations and gives deployment connectivity graph."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"binding:\n  - id: example\n    links:\n      '/onramp/otlp/{instance}/out':\n       - '/pipeline/example/{instance}/in'\n      '/pipeline/example/{instance}/out':\n       - '/offramp/stdout/{instance}/in'\n       - '/offramp/otlp/{instance}/in'\n")),(0,a.kt)("p",null,"Finally the ",(0,a.kt)("a",{target:"_blank",href:t(96405).Z},"mapping")," instanciates the binding with the given name and instance variable to activate the elements of the binding."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'mapping:\n  /binding/example/passthrough:\n    instance: "passthrough"\n')),(0,a.kt)("h2",{id:"business-logic"},"Business Logic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"select event from in into out\n")),(0,a.kt)("h2",{id:"command-line-testing-during-logic-development"},"Command line testing during logic development"),(0,a.kt)("p",null,"Use any compliant OpenTelemetry instrumented application and configure the\nserver to our source on port ",(0,a.kt)("inlineCode",{parentName:"p"},"4316")," instead of the default ",(0,a.kt)("inlineCode",{parentName:"p"},"4317"),"."),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("p",null,"For convenience, use the provided ",(0,a.kt)("a",{target:"_blank",href:t(95448).Z},"docker-compose.yaml")," to\nstart and stop tremor and the opentelemetry collector as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Start\n$ docker compose up\n\n# Stop\n$ docker compose stop\n")))}u.isMDXComponent=!0},95448:function(e,n,t){n.Z=t.p+"assets/files/docker-compose-3281555bd80804f51ee292c4db4aaafd.yaml"},22244:function(e,n,t){n.Z=t.p+"assets/files/collector-config-2d8d08bfe178670bd9729be750de7fb0.yaml"},58161:function(e,n,t){n.Z=t.p+"assets/files/00_ramps-f3ec739bb6b0c551cffe3f94725b9f9a.yaml"},21029:function(e,n,t){n.Z=t.p+"assets/files/01_binding-7d6c2c8727298377446379c886448d73.yaml"},96405:function(e,n,t){n.Z=t.p+"assets/files/02_mapping-9c81a0870131ab67e86b0f001460a101.yaml"}}]);