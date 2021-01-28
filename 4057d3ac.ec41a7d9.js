(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{115:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(r),b=n,h=p["".concat(i,".").concat(b)]||p[b]||l[b]||o;return r?a.a.createElement(h,s(s({ref:t},u),{},{components:r})):a.a.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(6),o=(r(0),r(115)),i={id:"understand_gpios",title:"Understand GPIOs",slug:"/understand_gpios"},s={unversionedId:"understand_gpios",id:"understand_gpios",isDocsHomePage:!1,title:"Understand GPIOs",description:"The BlueMicro firmware uses GPIO (General Purpose Input/Output) numbers as the identifiers to configure how the processor is connected to the keyboard matrix and other keyboard devices.",source:"@site/docs/understand_gpios.md",slug:"/understand_gpios",permalink:"/docs/understand_gpios",editUrl:"https://github.com/jpconstantineau/BlueMicro_BLE/tree/documentation-docusaurus/documentation/docs/docs/understand_gpios.md",version:"current",sidebar:"someSidebar",previous:{title:"Adding a new Keyboard",permalink:"/docs/add"},next:{title:"Configuring hardware_config.h",permalink:"/docs/configure_hardware"}},c=[{value:"Understanding nRF52 Modules and how GPIOs are numbered",id:"understanding-nrf52-modules-and-how-gpios-are-numbered",children:[{value:"Adafruit Feather nRF52832",id:"adafruit-feather-nrf52832",children:[]},{value:"Adafruit Feather nRF52840 Express",id:"adafruit-feather-nrf52840-express",children:[]},{value:"Nordic nRF52840DK (PCA10056)",id:"nordic-nrf52840dk-pca10056",children:[]},{value:"Other nRF52832 and nRF52840 modules",id:"other-nrf52832-and-nrf52840-modules",children:[]}]},{value:"Selecting GPIOs numbers",id:"selecting-gpios-numbers",children:[{value:"Adafruit Feather nRF52840 Express",id:"adafruit-feather-nrf52840-express-1",children:[]},{value:"All other modules (nRF52832 or nRF52840)",id:"all-other-modules-nrf52832-or-nrf52840",children:[]}]}],u={rightToc:c};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The BlueMicro firmware uses GPIO (General Purpose Input/Output) numbers as the identifiers to configure how the processor is connected to the keyboard matrix and other keyboard devices."),Object(o.b)("p",null,"The general purpose input/output pins (GPIOs) are grouped as one or more ports with each port having up to 32 GPIOs. The number of ports and GPIOs per port might vary with product variant and package. The nRF52832 has 1 port (32 GPIOs) while the nRF52840 has 2 ports 48 (GPIOs).  Some of the GPIOs are already used for specific purposes by the chip for various purposes (32.768 kHz crystal or reset pin).  As such, not all GPIOs are available for use. "),Object(o.b)("h2",{id:"understanding-nrf52-modules-and-how-gpios-are-numbered"},"Understanding nRF52 Modules and how GPIOs are numbered"),Object(o.b)("h3",{id:"adafruit-feather-nrf52832"},"Adafruit Feather nRF52832"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Adafruit Feather nRF52832")," uses the GPIO numbers in the IDE to call the specific pins.  This can be seen as the purple numbers in the following pinout image:\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn-learn.adafruit.com/assets/assets/000/046/248/original/microcontrollers_Feather_NRF52_Pinout_v1.2-1.png?1504885794",alt:"Adafruit Feather nRF52832"}))),Object(o.b)("p",null,"Since there is a direct mapping between the Arduino IDE numbers and the GPIO number, the numbers used while programming are the same as the GPIOs.  ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("strong",{parentName:"strong"},"This makes the Adafruit Feather nRF52832 compatible with most nRF52832 modules."))),Object(o.b)("p",null,"You can find a schematic of the Adafruit Feather nRF52832 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cdn-learn.adafruit.com/assets/assets/000/039/913/original/microcontrollers_BluefruitnRF52Feather_Rev-F.png"}),"here"),"."),Object(o.b)("h3",{id:"adafruit-feather-nrf52840-express"},"Adafruit Feather nRF52840 Express"),Object(o.b)("p",null,"Unlike for the nRF52832 Feather, Adafruit has opted to use the labels on the module itself as the numbers to use when programming the ",Object(o.b)("strong",{parentName:"p"},"Adafruit Feather nRF52840 Express"),".  This means that there is no longer a direct representation between what's used while programming and the GPIO Port and Bit on the nRF52840 chip.  ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("strong",{parentName:"strong"},"This makes the Adafruit Feather nRF52840 Express incompatible with other modules."))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn-learn.adafruit.com/assets/assets/000/068/578/large1024/circuitpython_Screenshot_2019-01-02_at_12.04.27.png?1546446487",alt:"Adafruit Feather nRF52840 Express"}))),Object(o.b)("p",null,"For more details on the pinout of the Adafruit Feather nRF52840 Express, go to Adafruit's ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://learn.adafruit.com/introducing-the-adafruit-nrf52840-feather/pinouts"}),"documentation page")),Object(o.b)("p",null,"You can find a schematic of the Adafruit Feather nRF52840 Express ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cdn-learn.adafruit.com/assets/assets/000/068/545/original/circuitpython_nRF52840_Schematic_REV-D.png"}),"here"),"."),Object(o.b)("h3",{id:"nordic-nrf52840dk-pca10056"},"Nordic nRF52840DK (PCA10056)"),Object(o.b)("p",null,"Adafruit was very helpful when they included the ",Object(o.b)("strong",{parentName:"p"},"Nordic Semiconductor nRF52840 Development Kit")," in the Adafruit nRF52 Board Support Package. Unlike for the ",Object(o.b)("strong",{parentName:"p"},"Adafruit Feather nRF52840 Express"),", the ",Object(o.b)("strong",{parentName:"p"},"PCA10056")," does not remap GPIO and Pin Numbers.  As such, we can use the GPIO number directly when programming.  ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("strong",{parentName:"strong"},"This makes the Nordic nRF52840DK (PCA10056) compatible with most nRF52840 modules."))),Object(o.b)("p",null,"To find how to calculate the GPIO number, refer to the method described in the next section."),Object(o.b)("p",null,"You can find more information on the PCA10056 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.nordicsemi.com/Software-and-tools/Development-Kits/nRF52840-DK"}),"here")),Object(o.b)("h3",{id:"other-nrf52832-and-nrf52840-modules"},"Other nRF52832 and nRF52840 modules"),Object(o.b)("p",null,"This includes the BlueMicro, BlueMicro840, nRFMicro, Nice!Nano.  These modules reuse the ",Object(o.b)("strong",{parentName:"p"},"Adafruit Feather nRF52832")," or ",Object(o.b)("strong",{parentName:"p"},"Nordic nRF52840DK (PCA10056)")," boards in the Adafruit nRF52 Board Support Package.  As described above, the definition of these boards do not remap pins in code."),Object(o.b)("p",null,"To find how to calculate the GPIO number, refer to the method described in the next section."),Object(o.b)("h2",{id:"selecting-gpios-numbers"},"Selecting GPIOs numbers"),Object(o.b)("h3",{id:"adafruit-feather-nrf52840-express-1"},"Adafruit Feather nRF52840 Express"),Object(o.b)("p",null,"Use the Pin number as per what's written on the module itself. See picture in the  ",Object(o.b)("strong",{parentName:"p"},"Adafruit Feather nRF52840 Express")," section above."),Object(o.b)("h3",{id:"all-other-modules-nrf52832-or-nrf52840"},"All other modules (nRF52832 or nRF52840)"),Object(o.b)("p",null,"The nRF52832 has 32 GPIOs on 1 port (Port 0) while the nRF52840 has 48 GPIOs on 2 ports (Port 0 and 1).  "),Object(o.b)("p",null,"To be able to address GPIOs on Port 1, we need to use this simple definition to convert port and bit to a single number."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c++"}),"#define _PINNUM(port, bit)    ((port)*32 + (bit))\n")),Object(o.b)("p",null,"For ",Object(o.b)("strong",{parentName:"p"},"Port 0"),", the GPIO number will be the same as the Bit number. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"P(0.11) = 0 + 11 = 11")),Object(o.b)("p",null,"For ",Object(o.b)("strong",{parentName:"p"},"Port 1"),", the GPIO number will be the Bit number plus 32. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"P(1.11) = 32 + 11 = 43")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Port"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Bit"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"GPIO Number to use"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0-31"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0-31")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0-15"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"32-47")))))}d.isMDXComponent=!0}}]);