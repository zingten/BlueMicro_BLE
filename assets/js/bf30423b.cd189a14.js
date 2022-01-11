"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6044],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return c}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=d(a),c=n,m=p["".concat(s,".").concat(c)]||p[c]||u[c]||i;return a?r.createElement(m,o(o({ref:t},h),{},{components:a})):r.createElement(m,o({ref:t},h))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5107:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return h},toc:function(){return u},default:function(){return c}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],l={slug:"State of BlueMicro 2022",title:"State of BlueMicro 2022",author:"Pierre Constantineau",author_title:"Wireless electronics enthousiast in Canada",author_url:"https://github.com/jpconstantineau",author_image_url:"https://avatars3.githubusercontent.com/u/1149816?s=460&u=521fbf5035ea442b1d07281c0c7573ca3596cf3f&v=4",tags:["BlueMicro","Status Update","CircuitPython","CircuitPython2022"]},s=void 0,d={permalink:"/blog/State of BlueMicro 2022",editUrl:"https://github.com/jpconstantineau/BlueMicro_BLE/tree/documentation-docusaurus/documentation/blog/2022-01-10-status-update.md",source:"@site/blog/2022-01-10-status-update.md",title:"State of BlueMicro 2022",description:"A BlueMicro Review of 2021",date:"2022-01-10T00:00:00.000Z",formattedDate:"January 10, 2022",tags:[{label:"BlueMicro",permalink:"/blog/tags/blue-micro"},{label:"Status Update",permalink:"/blog/tags/status-update"},{label:"CircuitPython",permalink:"/blog/tags/circuit-python"},{label:"CircuitPython2022",permalink:"/blog/tags/circuit-python-2022"}],readingTime:15.895,truncated:!1,authors:[{name:"Pierre Constantineau",title:"Wireless electronics enthousiast in Canada",url:"https://github.com/jpconstantineau",imageURL:"https://avatars3.githubusercontent.com/u/1149816?s=460&u=521fbf5035ea442b1d07281c0c7573ca3596cf3f&v=4"}]},h={authorsImageUrls:[void 0]},u=[{value:"A BlueMicro Review of 2021",id:"a-bluemicro-review-of-2021",children:[{value:"Wireless Hardware",id:"wireless-hardware",children:[],level:3},{value:"Is new hardware even possible with the chip shortage?",id:"is-new-hardware-even-possible-with-the-chip-shortage",children:[],level:3},{value:"Wireless Firmware",id:"wireless-firmware",children:[],level:3},{value:"Firmware for nRF52833",id:"firmware-for-nrf52833",children:[],level:3},{value:"BlueMicro_BLE",id:"bluemicro_ble",children:[],level:3}],level:2},{value:"What&#39;s coming in 2022 for BlueMicro?",id:"whats-coming-in-2022-for-bluemicro",children:[{value:"Update to Latest Adafruit nRF52 Arduino BSP.",id:"update-to-latest-adafruit-nrf52-arduino-bsp",children:[],level:3},{value:"Unifying the interface for USB and BLE HID",id:"unifying-the-interface-for-usb-and-ble-hid",children:[],level:3},{value:"Making Mousekeys work (and make sense)",id:"making-mousekeys-work-and-make-sense",children:[],level:3}],level:2},{value:"What else?",id:"what-else",children:[],level:2},{value:"CircuitPython 2022",id:"circuitpython-2022",children:[{value:"Keypad extensions",id:"keypad-extensions",children:[],level:3},{value:"Hide your ghosts",id:"hide-your-ghosts",children:[],level:3},{value:"Make your own SeeSaw",id:"make-your-own-seesaw",children:[],level:3},{value:"Split keyboards and the KB2040 (and Pro Micro RP2040):",id:"split-keyboards-and-the-kb2040-and-pro-micro-rp2040",children:[{value:"A recent history of split keyboards",id:"a-recent-history-of-split-keyboards",children:[],level:4},{value:"The problem with the RP2040 and hardware UART",id:"the-problem-with-the-rp2040-and-hardware-uart",children:[],level:4}],level:3},{value:"I2CPeripheral for other chips (RP2040, SAMD21, nRF52, etc)",id:"i2cperipheral-for-other-chips-rp2040-samd21-nrf52-etc",children:[],level:3},{value:"Very Deep Sleep on the nRF52",id:"very-deep-sleep-on-the-nrf52",children:[],level:3},{value:"BlueMicro833",id:"bluemicro833",children:[],level:3},{value:"Circuitpython.org Improvements",id:"circuitpythonorg-improvements",children:[],level:3}],level:2}],p={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"a-bluemicro-review-of-2021"},"A BlueMicro Review of 2021"),(0,i.kt)("p",null,"2021 was an eventful year in the word of wireless mechanical keyboards and BlueMicro. "),(0,i.kt)("h3",{id:"wireless-hardware"},"Wireless Hardware"),(0,i.kt)("p",null,"Although BlueMicro was the precursor to many breakout boards now used as controllers for keyboard builds, the ",(0,i.kt)("a",{parentName:"p",href:"https://nicekeyboards.com/nice-nano/"},"nice!nano")," is now the most popular in the mechanical keyboard community, followed by the nRF52840 feather express for handwired builds and the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/joric/nrfmicro"},"nrfmicro")," for more adventurous builders. The ",(0,i.kt)("a",{parentName:"p",href:"https://www.tindie.com/search/?q=bluemicro840"},"BlueMicro840")," is still an option but as my time is limited and they are manually assembled, their supply was limited, even before the chip shortage hit the needed modules (more to come on that...).  For more GPIOs, there is the BlueMacro840 which makes available more GPIOs."),(0,i.kt)("p",null,"The first all-in-one keyboards I designed in 2021 was the ",(0,i.kt)("a",{parentName:"p",href:"https://www.tindie.com/products/jpconstantineau/2x4-ble-macropad-for-mechanical-switches/"},"BlueHand"),". A simple 8-keys hand-sized wireless mechanical keyboard that's been designed for ",(0,i.kt)("a",{parentName:"p",href:"https://artsey.io/"},"Artsey.io"),"; a one-handed keyboard typing system that uses chording for registering keypresses.  "),(0,i.kt)("p",null,"The chip shortage has affected the supply of processors for many projects. The nrf52840 modules used for the Bluemicro840, BlueHand and nrfmicro became scarce and the few modules that could be found went for 6x their original prices; making the modules even more expensive than a Nice!Nano. "),(0,i.kt)("p",null,"This has prompted me to create the ",(0,i.kt)("a",{parentName:"p",href:"https://www.tindie.com/products/jpconstantineau/ebyte-e73-2g4m08s1e-breakout-bluemicro833-pcba/"},"BlueMicro833"),", based on the now available nrf52833 modules which are almost identical to the 840 modules at a similar price as the original nRF52840 modules a year ago.  The most important differences are RAM and Flash sizes.  Unfortunately, firmware support is lacking.  A BlueMicro833 was sent to the ZMK team for testing and it tested fine with ZMK. "),(0,i.kt)("h3",{id:"is-new-hardware-even-possible-with-the-chip-shortage"},"Is new hardware even possible with the chip shortage?"),(0,i.kt)("p",null,"In early 2021, Raspberry Pi introduced the RP2040.  The RP2040 is a dual core ARM Cortex M0+ chip with interesting peripherals and is very cheap.  It's only wired - no BLE with this chip.  Because the RP2040 is the first microcontroller from Raspberry Pi, it had no pre-existing users (for example, car manufacturers), it saw really good availability, even ",(0,i.kt)("a",{parentName:"p",href:"https://jlcpcb.com/parts/componentSearch?isSearch=true&searchTxt=rp2040"},"JLCPCB")," has it for PCBA. Circuitpython was available relatively quickly. A few ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=X00Cm5LMNQk"},"videos are on Youtube")," on how to design a rp2040 board made the task quite simple.  Raspberry PI even provided a ",(0,i.kt)("a",{parentName:"p",href:"https://datasheets.raspberrypi.com/rp2040/hardware-design-with-rp2040.pdf"},"reference design"),".  As such, I introduced ",(0,i.kt)("a",{parentName:"p",href:"https://circuitpython.org/downloads?q=pykey"},"PyKey"),", a suite of mechanical keyboards with a RP2040 as the processor, starting with ",(0,i.kt)("a",{parentName:"p",href:"https://circuitpython.org/board/jpconstantineau_pykey60/"},"PyKey60"),", a 60% keyboard based on the GH60 form factor (More sizes are now available: Numpad, TKL, 44-keys Ergo)."),(0,i.kt)("h3",{id:"wireless-firmware"},"Wireless Firmware"),(0,i.kt)("p",null,"QMK has retained the dominant firmware for mechanical keyboards but ZMK became the dominant choice for newcomers to wireless DIY mechanical keyboards. Based on the Zephyr project, it has a good follower base. Just like QMK, it focuses on a readily available firmware and not on basic troubleshooting tools that can help the DIY builder troubleshooting their hardware troubles.  Additionnaly, as ZMK uses the Zephyr BLE stack and not the Nordic SoftDevice, some users have faced issues pairing with some devices (Apple mostly). Some of these users have gone to BlueMicro_BLE and their pairing troubles were resolved. "),(0,i.kt)("p",null,"Bluemicro_BLE being based on the Arduino nRF52 board support package from Adafruit, is much more friendly in case the user needs to create their own code to troubleshoot their hardware. "),(0,i.kt)("p",null,"Since Adafruit will only include boards that they ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_nRF52_Arduino/pull/596#issuecomment-714900359"},"sell")," within their nRF52 Arduino Board support package, I created a fork of the BSP (and disconnected it) and created the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jpconstantineau/Community_nRF52_Arduino"},"Community Add-On nRF52 Board Support Package")," to which changes were made; most importantly, the addition of many nRF52 boards and keyboards available to the community.  My decision to split the code base from the source repository was mainly based on the desire remove the problematic code causing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_nRF52_Arduino/issues/600"},"high current consumption"),", but also to keep a fork for me to be able to contribute to the main repository while having a separate repo for the Community boards.  Unfortunately, this decision came to bite me when many positive changes were pushed to the Adafruit nRF52 Arduino Board Support Package."),(0,i.kt)("p",null,"In order to make more options available for users, support for CircuitPython was added for the BlueMicro840. Circuitpython adds a new framework by which one can code their keyboards and even troubleshoot their hardware. You can go to the ",(0,i.kt)("a",{parentName:"p",href:"http://pykey.jpconstantineau.com/docs/testing_hardware/keymatrix"},"PyKey")," project to see lots of keyboard troubleshooting tips with CircuitPython."),(0,i.kt)("p",null,"CircuitPython also makes ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KMKfw/kmk_firmware"},"KMK")," an option for BlueMicro840 users. I even designed an ultra-portable wireless keyboard that uses 44 Kailh Thin keys that saw KMK as the first firmware to run on it.  I year ago, I never coded any Python. Today, I can count a few of my keyboards within the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KMKfw/kmk_firmware/tree/master/boards/jpconstantineau"},"KMK repo"),"; all Python code I wrote..."),(0,i.kt)("h3",{id:"firmware-for-nrf52833"},"Firmware for nRF52833"),(0,i.kt)("p",null,"Unfortunately, support for the Nordic nRF52833 in the Arduino IDE is non-existent. There were a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_nRF52_Arduino/pulls?q=is%3Apr++nrf52833+"},"few PRs")," but none were included in the Adafruit nRF52 Arduino Board Support Package. An issue was raised to ask if the nRF52833 Dev Kit from Nordic would be merged in if a PR would be made (even if on a not-supported basis). ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_nRF52_Arduino/issues/696"},"No clear response yet"),".   Without Arduino support for ths chip, BlueMicro_BLE firmware won't be able to run on it.  In the meantime, try CircuitPython,KMK or ZMK!  "),(0,i.kt)("h3",{id:"bluemicro_ble"},"BlueMicro_BLE"),(0,i.kt)("p",null,"2021 started great for BlueMicro_BLE with the addition of a few great features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"USB and BLE switching - Wireless and Wired on the same keyboard - switched automatically!"),(0,i.kt)("li",{parentName:"ul"},"Mutiple BLE Profiles - making it possible to choose which computer to connect it to"),(0,i.kt)("li",{parentName:"ul"},"Combos/chording: a new keycode-based chording engine that replaces keycodes when two or more keycodes are detected. (press multiple keys, send something else...). Unlike other firmwares, the engine is not key based but keycode-based."),(0,i.kt)("li",{parentName:"ul"},"BlueMicro_Builder: Inspired by the simple build process of ZMK, a new ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jpconstantineau/BlueMicro_Builder"},"BlueMicro_Builder")," repository template has made available the option for nRF52840 users to have their firmware built by GitHub Actions. Check out the ",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=hKw3TPNu-BQ"},"video")," to see how it works!")),(0,i.kt)("p",null,"With new features, new bugs and issues always come to haunt us, along with more feature requests...  2022 will look at resolving some of the more fundamental problems, bringing 1.3.0 BSP support all while enabling easier future improvements. "),(0,i.kt)("h2",{id:"whats-coming-in-2022-for-bluemicro"},"What's coming in 2022 for BlueMicro?"),(0,i.kt)("h3",{id:"update-to-latest-adafruit-nrf52-arduino-bsp"},"Update to Latest Adafruit nRF52 Arduino BSP."),(0,i.kt)("p",null,"With all the major changes to TinyUSB completed and rolled into the adafruit nRF52 board support package, as well as the support for multiple Bluetooth profiles from the Adafruit BSP itself, there are no core changes in the Community Board Support pachages that are needed, except for the additional boards.  As such, a staged approach will be taken to update both the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jpconstantineau/BlueMicro_BLE"},"BlueMicro_BLE")," firmware and the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jpconstantineau/Community_nRF52_Arduino"},"Community Add-On nRF52 Board Support Package")," to the latest BSP."),(0,i.kt)("h3",{id:"unifying-the-interface-for-usb-and-ble-hid"},"Unifying the interface for USB and BLE HID"),(0,i.kt)("p",null,"In 2021, I started the effort to unify the BLE and USB calls into a single library, starting from thr ground up using the HID_Composite examples.  After countless hours of unsuccessful and hair-pulling code streams, I finally have something working."),(0,i.kt)("p",null,"I am planning to make a common HID library that handles both BLE on the nRF52 chips and USB on boards with TinyUSB support. This would be publised as an Arduino Library.  By migrating to this library, this means that Bluemicro_BLE will be able to support the nrf52 chips, the RP2040 and the SAMD21 and SAMD51 chips; at least from a single keyboard point of view. Split keyboards would be next.  The prototype code already runs on multiple Adafruit Feathers (nrf52832, nrf52840, RP2040, SAMD21, SAMD51)."),(0,i.kt)("h3",{id:"making-mousekeys-work-and-make-sense"},"Making Mousekeys work (and make sense)"),(0,i.kt)("p",null,"Since the unified library described above is based on the HID_Composite examples, the library would enable parallel keyboard/mouse/consumer keyscodes to be sent (as opposed to only one of the 3).  This would enable refactoring the code to simplify how the different HID messages are handled."),(0,i.kt)("h2",{id:"what-else"},"What else?"),(0,i.kt)("p",null,"What are you looking for as improvements to your keyboard firmware and hardware?"),(0,i.kt)("p",null,"Here are some of the ideas I have received:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable Pointing devices to be easily integrated within BlueMicro_BLE.  I have had various requests for enabling mouse movements as part of the keyboard functions.  ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://datasheet.lcsc.com/lcsc/2110151630_XKB-Connectivity-TM-2027_C318948.pdf"},"Digital Joystick/5 way switches")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tindie.com/products/robotart/joystick-game-controller-for-arduino/"},"Analog Joystick")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shop.pimoroni.com/products/trackball-breakout"},"Pimoroni Trackball Breakout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tindie.com/products/jkicklighter/pmw3360-motion-sensor/"},"PMW3360 Motion Sensor"),"  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.cirque.com/glidepoint-circle-trackpads"},"Cirque Trackpads")))),(0,i.kt)("li",{parentName:"ul"},"RGB Effects."),(0,i.kt)("li",{parentName:"ul"},"Better handling of USB on secondary side of split keyboards"),(0,i.kt)("li",{parentName:"ul"},"Sharing of Toggles and One-shots between sides."),(0,i.kt)("li",{parentName:"ul"},"Improvements to key state logic to handle Tap/Double-Tap/Hold on the same key. "),(0,i.kt)("li",{parentName:"ul"},'Enable "delays" in macros.')),(0,i.kt)("h2",{id:"circuitpython-2022"},"CircuitPython 2022"),(0,i.kt)("p",null,"Since BlueMicro has a focus on keyboards and other HID/Input devices, this will obviously have a keyboard focus; either to help generic firmware, KMK or enable users develop more complex keyboards from a common set of building blocks.  As I am not a Python developer, I don't expect to be able to make significant contributions to libraries but I can contribute to new boards reviews, minor core additions and commenting on use of specific libraries I might use."),(0,i.kt)("h3",{id:"keypad-extensions"},"Keypad extensions"),(0,i.kt)("p",null,"The keypad core module defines a simple interface by which keypress/keyrelease events are provided to the user for acting upon.  Using this common interface for detecting key presses is currently a Work in Progress in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KMKfw/kmk_firmware/issues/237"},"KMK"),". "),(0,i.kt)("p",null,"Expanding the use of the keypad API to non-board GPIOs would be a natural extension."),(0,i.kt)("p",null,"To enable flexibility in how people design their keyboards, the following GPIO expanders should be included as part of an add-on keypad library (or family of libraries)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/5346"},"MCP23017 GPIO Expander")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nxp.com/products/interfaces/ic-spi-serial-interface-devices/ic-general-purpose-i-o/40-bit-ic-bus-i-o-port-with-reset-oe-and-int:PCA9505_06"},"PCA9505 GPIO Expander")),(0,i.kt)("li",{parentName:"ul"},"PCF8574 GPIO Expander"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/3657"},"Adafruit ATSAMD09 Breakout with seesaw")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/5233"},"Adafruit ATtiny817 Breakout with seesaw"))),(0,i.kt)("p",null,"The add-on library would make I2C devices available with the same API as the core keypad module.  This way, people could use the same code regardless where their keys and keypads are connected to."),(0,i.kt)("p",null,"A great example of a split keyboard that uses multiple GPIO expanders is Zack Freedman's MiRage keyboard. Check out his ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/Fg0V5M0llaE"},"video")," and his ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ZackFreedman/MiRage"},"repo"),".  "),(0,i.kt)("h3",{id:"hide-your-ghosts"},"Hide your ",(0,i.kt)("a",{parentName:"h3",href:"https://www.youtube.com/watch?v=CFSjnV7zUYM"},"ghosts")),(0,i.kt)("p",null,"Another possible extension but to the core keypad module would be to enable key matrices that do not have anti-ghosting diodes.  One of the BlueMicro_BLE contributors has  an ",(0,i.kt)("a",{parentName:"p",href:"https://bitbucket.org/akudaikon/bluemicro-model-m/src/3ac5081226541f5c06abdcb7b2676a80f0b867bb/firmware/firmware_main.cpp?at=master#firmware_main.cpp-248"},"example")," where ghost key detection and filtering is done so that ghost keys are not included as part of the key state transitions.  Adding diodes is not always possible as this code is used as part of a Model M keyboard Wireless retrofit. Other keyboards might not have the room for diodes - check out this ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/iWWTJKWFNok"},"Tiny Pico Keyboard")," for an idea how small one can go.  I have my own wireless one that's based on the BlueMicro840 but has the footprint of a Raspberry Pi Zero."),(0,i.kt)("h3",{id:"make-your-own-seesaw"},"Make your own SeeSaw"),(0,i.kt)("p",null,"Adafruit has led an interesting I2C revolution with the introduction of multiple SeeSaw input devices:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/4980"},"NeoKey 1x4 QT I2C")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/4991"},"Adafruit I2C QT Rotary Encoder")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/5295"},"Adafruit NeoSlider I2C QT Slide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/3632"},"Adafruit Joy FeatherWing for all Feathers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/802"},'Adafruit 1.8" Color TFT Shield w/microSD and Joystick')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.adafruit.com/product/3321"},"Adafruit Mini Color TFT with Joystick FeatherWing"))),(0,i.kt)("p",null,"Split keyboards could be designed with the secondary side being a custom SeeSaw device, while the primary side would be standard CircuitPython or Arduino code."),(0,i.kt)("p",null,"There is an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_seesawPeripheral"},"Arduino Library")," for creating your own seesawPeripheral, however, it seems that it's only supported by the megaTinyCore (AVR) chips (although the library properties seems to indicate otherwise).  It would be very useful to be able to create your own SeeSaw device using CircuitPython.  Take a KB2040, a Raspberry Pi Pico, a Feather M4 or a small SAMD21 board and re-purpose it as a SeeSaw co-processor for handling remote input/output devices.  If CircuitPython can't be used due to size limitations, an Arduino library for use with the SAMD21 would be useful.  I believe porting the I2C peripheral module to other chips would be the starting  point."),(0,i.kt)("h3",{id:"split-keyboards-and-the-kb2040-and-pro-micro-rp2040"},"Split keyboards and the KB2040 (and Pro Micro RP2040):"),(0,i.kt)("p",null,"To understand the potential issues with the RP2040 on a board with the form factor of the Pro Micro, we need to see a brief history of split keyboards and how communications was handled between the halves. "),(0,i.kt)("h4",{id:"a-recent-history-of-split-keyboards"},"A recent history of split keyboards"),(0,i.kt)("p",null,"The table below presents a brief list of split keyboards, starting with the Original Ergodox from 2013.  The Let's Split V2 is the board that truely kicked-off the DIY Split keyboard explosion of options.  It's inspired from the Planck but divided into two halves."),(0,i.kt)("p",null,"A number of commercial keyboards have not been included due to their closed source PCBs. Nevertheless, this list is very small. Have a look ",(0,i.kt)("a",{parentName:"p",href:"https://golem.hu/boards/"},"here")," is you want to see a large database of split boards..."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Board"),(0,i.kt)("th",{parentName:"tr",align:null},"Date"),(0,i.kt)("th",{parentName:"tr",align:null},"PCB Repo"),(0,i.kt)("th",{parentName:"tr",align:null},"Build Guide"),(0,i.kt)("th",{parentName:"tr",align:null},"Serial Pin"),(0,i.kt)("th",{parentName:"tr",align:null},"I2C"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ErgoDox Original"),(0,i.kt)("td",{parentName:"tr",align:null},"July 2013"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/bishboria/ErgoDox"},"PCB")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"n/a"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ErgoDox IO"),(0,i.kt)("td",{parentName:"tr",align:null},"Dec 2016"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Ergodox-io/ErgoDox/blob/master/README.md"},"PCB")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"n/a"),(0,i.kt)("td",{parentName:"tr",align:null},"MCP23018")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Let's Split V2"),(0,i.kt)("td",{parentName:"tr",align:null},"April 2017"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/climbalima/let-s-Split-v2"},"PCB Repo")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/nicinabox/lets-split-guide"},"Build Guide")),(0,i.kt)("td",{parentName:"tr",align:null},"D0"),(0,i.kt)("td",{parentName:"tr",align:null},"D1/D0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Minidox"),(0,i.kt)("td",{parentName:"tr",align:null},"August 2017"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/That-Canadian/MiniDox_PCB"},"PCB")),(0,i.kt)("td",{parentName:"tr",align:null},"Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"D0"),(0,i.kt)("td",{parentName:"tr",align:null},"n/a")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Helix"),(0,i.kt)("td",{parentName:"tr",align:null},"February 2018"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/MakotoKurauchi/helix"},"PCB")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/MakotoKurauchi/helix/blob/master/Doc/buildguide_en.md"},"Guide")),(0,i.kt)("td",{parentName:"tr",align:null},"D0 (V1), D2 (V2)"),(0,i.kt)("td",{parentName:"tr",align:null},"Oled")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ErgoTravel"),(0,i.kt)("td",{parentName:"tr",align:null},"June 2018"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jpconstantineau/ErgoTravel"},"PCB")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jpconstantineau/ErgoTravel/blob/master/BuildInstructions.md"},"Guide")),(0,i.kt)("td",{parentName:"tr",align:null},"D0"),(0,i.kt)("td",{parentName:"tr",align:null},"D1/D0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Lily58"),(0,i.kt)("td",{parentName:"tr",align:null},"October 2018"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/kata0510/Lily58"},"PCB")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"D2"),(0,i.kt)("td",{parentName:"tr",align:null},"Oled")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sofle"),(0,i.kt)("td",{parentName:"tr",align:null},"Sept 2019"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/josefadamcik/SofleKeyboard"},"PCB")),(0,i.kt)("td",{parentName:"tr",align:null},"Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"D2"),(0,i.kt)("td",{parentName:"tr",align:null},"Oled")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Corne"),(0,i.kt)("td",{parentName:"tr",align:null},"October 2019"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/foostan/crkbd"},"PCB")),(0,i.kt)("td",{parentName:"tr",align:null},"Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"D2"),(0,i.kt)("td",{parentName:"tr",align:null},"Oled")))),(0,i.kt)("p",null,"On the Pro Micro, D0/D1 are SCL/SDA and D2/D3 are RX/TX."),(0,i.kt)("p",null,"As you can see from the table, the design of the Let's Split opted for making the selection of I2C an option by using the SCL line as a serial line between the two boards.  This freed a data line for users to add RGB data between the two halves.  Most builds that used the Let's Split as a template used D0 with software serial.  Some kept the option for I2C, others dropped it."),(0,i.kt)("p",null,"However, with the addition of I2C OLED screens on the Helix, serial communications between the two halves was relocated to be on D2 (See differences between V1 and V2).  Since D2 is RX, on one side hardware UART can be used but software UART has to be used on the other side.  This allows for 1-way communications.  2-way comms would need to use software serial with some software handshaking to handle direction changes (and perhaps a resistor to limit current in case of TX on both sides at the same time); 2-way serial is probably not generally implemented on a single line due to the additional complexity.  "),(0,i.kt)("h4",{id:"the-problem-with-the-rp2040-and-hardware-uart"},"The problem with the RP2040 and hardware UART"),(0,i.kt)("p",null,"Unlike the nRF52 where any GPIO can be used for I2C and UART, the RP2040 has some restrictions on what functions are available for each GPIO.  If one wants to use non-standard (i.e. not in the table of page 13-14 of the ",(0,i.kt)("a",{parentName:"p",href:"https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf"},"datasheet"),'), you have to use the PIO to create your own UART RX or TX (Datasheet Page 373) peripherals.  Since most pro-micro keyboards that used  I2C, relied on hardware for I2C.  However, to keep build flexibility and cost of PCB designs low, the same I2C pins were re-used but for serial.  Serial communications were slao setup with a single line to leave a line free for "RGB Data".  Using the same data pin on each side allowed for mirrored builds and for the possibility of setting up both sides identically and automatically detecting which side is primary or secondary by monitoring whether USB is connected; hence detecting the desired data direction on the serial line.  '),(0,i.kt)("p",null,'This means that serial connection of many (if not most) split keyboards will rely on "non-standard" RX/TX pins definition compared to the default Arduino Pro Micro definitions.'),(0,i.kt)("p",null,"For existing split keyboards to work, we need software UART (or PIO UART) in CircuitPython."),(0,i.kt)("h3",{id:"i2cperipheral-for-other-chips-rp2040-samd21-nrf52-etc"},"I2CPeripheral for other chips (RP2040, SAMD21, nRF52, etc)"),(0,i.kt)("p",null,'To enable I2C communications between keyboard halves or to build your own seesaw board using CircuitPython, I2CPeripheral on the RP2040 and other chips is needed.  Once available, a seesaw_peripheral library will be possible.  Possibly leveraging the adafruit_register.i2c_struct.Struct function, perhaps in a bi-directional way: define the same registers on both sides of the communication channel and let the I2C "magic" do its thing...   '),(0,i.kt)("h3",{id:"very-deep-sleep-on-the-nrf52"},"Very Deep Sleep on the nRF52"),(0,i.kt)("p",null,"I have an ",(0,i.kt)("a",{parentName:"p",href:"http://pykey.jpconstantineau.com/docs/testing_hardware/sleep"},"article")," that compares ZMK, BlueMicro_BLE and CircuitPython running and sleep current on the same device.  Unlike the other two, CircuitPython isn't a compiled language.  As such, power consumption when running will never be able to reach the level of designed-for-purpose compiled code. Nevertheless, when going in deep sleep, the chip shouldn't be running and one would expect a comparable current.  Unfortonately, how deep sleep is implemented in CircuitPython is more of a \"nap\" than a sleep.  The chip regularly wakes up to check the state of alarm pins, then goes back napping until the next check."),(0,i.kt)("p",null,'As such, there is the possibility for an even deeper sleep for the nRF52 chips running CircuitPython.  I don\'t know what it should be called as "deep sleep" is already taken. The article mentionned above highlights how it\'s done and how it behaves (full reboot on wake-up).  This "Very Deep Sleep" needs an external pin to be toggled for the wake-up to occur.  For keyboards, a simple keeypress does the job.'),(0,i.kt)("h3",{id:"bluemicro833"},"BlueMicro833"),(0,i.kt)("p",null,"  Detailed testing of the Bluemicro 833 with Circuitpython and KMK is needed to see how much useful room is available, both for Ram and Flash space.  Having half the flash and ram as the nRF52840, I suspect that we may run into similar issues as the SAMD21.  The SAMD21 has so little ram that it runs out of it pretty quickly.  The nRF52833 has more, however as this is chip is meant for BLE functions and that the Softdevice consumes a chunk of space already, what's left to the user for Python code will be limited.  Testing and Time will tell... "),(0,i.kt)("h3",{id:"circuitpythonorg-improvements"},"Circuitpython.org Improvements"),(0,i.kt)("p",null,"I would like to recommend a few minor improvements to the download page of CircuitPython.org, especially when it gets to filtering by chip family/chip type.  With 269 boards, and going up regularly, filtering will become more important to find a board of choice for your next project."),(0,i.kt)("p",null,"The Atmel-Samd Processor Family includes SAMD21 and SAMD51 boards (ARM M0/M4) while the nRF52 Family is non-existant but nRF52840 is present instead of having nRF52833 and nRF52840 as separate chips."),(0,i.kt)("p",null,"A filter hierarchy similar to the tree below would enable users to search for boards with a specific processor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Atmel-Samd",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"SAMD21"),(0,i.kt)("li",{parentName:"ul"},"SAMD51"))),(0,i.kt)("li",{parentName:"ul"},"Broadcom"),(0,i.kt)("li",{parentName:"ul"},"Cxd56"),(0,i.kt)("li",{parentName:"ul"},"Espressif",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Esp32c3"),(0,i.kt)("li",{parentName:"ul"},"Esp32s2"),(0,i.kt)("li",{parentName:"ul"},"Esp32s3"))),(0,i.kt)("li",{parentName:"ul"},"Litex"),(0,i.kt)("li",{parentName:"ul"},"Mimxrt10xx"),(0,i.kt)("li",{parentName:"ul"},"nRF52",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"nRF52833"),(0,i.kt)("li",{parentName:"ul"},"nRF52840"))),(0,i.kt)("li",{parentName:"ul"},"Raspberry Pi",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"RP2040"))),(0,i.kt)("li",{parentName:"ul"},"STM",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"F4"),(0,i.kt)("li",{parentName:"ul"},"H7"),(0,i.kt)("li",{parentName:"ul"},"F7"),(0,i.kt)("li",{parentName:"ul"},"L4")))),(0,i.kt)("p",null,"Some people might be interested in filtering by the core type as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ARM Cortex M0 "),(0,i.kt)("li",{parentName:"ul"},"ARM Cortex M4"),(0,i.kt)("li",{parentName:"ul"},"RISC-V"),(0,i.kt)("li",{parentName:"ul"},"ARM Cortex-A7"),(0,i.kt)("li",{parentName:"ul"},"ARM Cortex-A53")),(0,i.kt)("p",null,'However, as you can already filter by the processor family, I doubt this will provide much value;  only those asking "Does it run on RISC-V?" will get an answer...'))}c.isMDXComponent=!0}}]);