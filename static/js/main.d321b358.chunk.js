(this["webpackJsonpcovid19-app"]=this["webpackJsonpcovid19-app"]||[]).push([[0],{185:function(e,a,r){e.exports=r(317)},190:function(e,a,r){},191:function(e,a,r){},196:function(e,a,r){},315:function(e,a,r){},317:function(e,a,r){"use strict";r.r(a);var d=r(0),s=r.n(d),h=r(31),n=r.n(h),o=(r(190),r(191),r(74)),p=r(36),t=r(23),i=r(330),m=r(325),l=r(327),c=r(329);r(196);function v(){var e=Object(p.e)(),a=Object(t.c)((function(e){return e.serviceableAreas})),r=Object(t.c)((function(e){return e.categoriesList})),d=Object(t.b)(),h=Object(t.c)((function(e){return e.selectedArea})),n=Object(t.c)((function(e){return e.selectedCategory}));return s.a.createElement("div",{className:"SearchForm"},s.a.createElement("h3",null,"Search nearby essentials"),s.a.createElement(i.a,{color:"orange"},s.a.createElement(m.a,null,s.a.createElement("h4",null,"Area"),s.a.createElement(l.a,{fluid:!0,placeholder:"Select Area",onChange:function(e,a){var r=a.value;d({type:"SET_SELECTED_AREA",payload:r})},options:a.map((function(e){return{key:e,text:e,value:e}})),value:h,search:!0,selection:!0}),s.a.createElement("h4",null,"Item Category"),s.a.createElement(l.a,{fluid:!0,placeholder:"Select item",onChange:function(e,a){var r=a.value;d({type:"SET_SELECTED_CATEGORY",payload:r})},options:r.map((function(e){return{key:e,text:e,value:e}})),value:n,search:!0,selection:!0})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(c.a,{fluid:!0,color:"green",onClick:function(){var a;h?n?(d({type:"SEARCH_LIST",payload:a}),e.push("/results")):window.alert("Please choose what category of item yowant."):window.alert("Please choose your Area")}},"Search")))}v.defaultProps={};var N=v,u=r(328),g=r(53);r(315);function S(){var e=Object(p.e)(),a=Object(t.c)((function(e){return e.results})),r=Object(t.c)((function(e){return e.selectedCategory})),h=Object(t.c)((function(e){return e.selectedArea}));return Object(d.useEffect)((function(){a&&0!==a.length||(window.alert("No results for your selected option. Search something else."),e.push("/"))}),[a]),s.a.createElement("div",{className:"SearchResults"},a&&a.map((function(e){return s.a.createElement(u.a,{color:"red"},s.a.createElement(u.a.Content,{header:e.vendorName||"".concat(r," Vendor")}),s.a.createElement(u.a.Content,{description:e.address}),s.a.createElement(u.a.Content,null,s.a.createElement(g.a,{name:"phone"}),s.a.createElement("a",{href:"tel:".concat(e.ph1)},e.ph1),",","  ",e.ph2&&s.a.createElement("a",{href:"tel:".concat(e.ph2)},e.ph2)),s.a.createElement(u.a.Content,{extra:!0},s.a.createElement(g.a,{name:"map marker alternate"}),h))})))}S.defaultProps={};var G=S;var b=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(o.a,{basename:"/"},s.a.createElement(p.a,{exact:!0,path:"/"},s.a.createElement(N,null)),s.a.createElement(p.a,{exact:!0,path:"/results"},s.a.createElement(G,null))))};r(316),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=r(75),C=r(81),M={areas:["Ranjit Avenue All Blocks","Gate Hakima / Angarh","Sanjay Gandhi Colony","Chir Beri Chowk Chintpurni","Bhagtanwala","Azad Nagar Kot Khalsa","Ram Bagh","Khandwala","100 feet Road","Sundar Nagar","Gopal Mandir, Majitha Road","Varpal","Tunda Talab","Jallianwala Bagh","Gurbaksh Nagar","Gopal Nagar","Mahal","Partap Bazar, Chheharta","Rajinder Nagar","Chita Katra","Pipli Sahib Guruduwara","Mahal / Khandwala","Loharka Road","Circular Road","Mall Mandi","Green Avenue","Islamabad","Shivala Road","Kangra Colony","Golden Avenue","Sharifpura","Palah Sahib Road, Airport Road","Vijay Nagar","Katra Safaid","Nehru Colony","Ranjit Avenue Block A,B,C","Dashmesh Nagar","New Amritsar","Nangali","Jaura Phatak","Dashmesh Nagar Jaura","Rani Ka Bagh","Pawan Nagar","Batala Road","Kot Khalsa","Telephone Exchange","Mustafabad","Ratan Singh Chowk","Randhawa Market","Lawrence Road","Hari Pura","Katra Baghian","Sharifpura Chowk","Sultanwind Road","Ajnala","Naraingarh","Lakshmansar Chowk","Mata Durga Mandir","Dhapai Road & Haripura","East Mohan Nagar","Lohgarh","Tehsilpura","Dam Ganj","Fatehgarh Churian Road","Krishna Nagar","Verka","Janta Colony","Putlighar","Basant Avenue","Maqboolpoora","Vallah","Manawala","Fatahpur","Kashmir Avenue","Katra Sher Singh","Crystal Chowk","Sahibabad","Chheharta","Majitha Road","Alpha One GT Road"],categories:["Medicines","Fruits","Vegetables","Groceries"],"Ranjit Avenue Block A,B,C":{Vegetables:[{vendorName:"Satpal Singh",address:"Bal Sikander Village",ph1:"9501731754",ph2:""}]},Chheharta:{Vegetables:[{vendorName:"Gurpreet SIngh",address:"House no. 1063, Jawala Nagar Naraingarh, Amritsar",ph1:"9988679691",ph2:""},{vendorName:"Prince Padeveer",address:"",ph1:"78188-00002",ph2:""}],Medicines:[{vendorName:"",address:"",ph1:"9988995054",ph2:""}]},Naraingarh:{Vegetables:[{vendorName:"Rakesh Kapoor",address:"House no. E-677, Vaishno Colony, Naraingarh, Amritsar",ph1:"7818800002",ph2:""},{vendorName:"Gopi Gurpreet",address:"",ph1:"9988679791",ph2:""}]},"Gate Hakima / Angarh":{Vegetables:[{vendorName:"Sandeep Arora (Mintoo) s/o Aram Nath Arora",address:"Bhagtan Wala Gate, Kallu Akhara, Near Vijay Dairy, Street no.2",ph1:"865710005",ph2:""}],Groceries:[{vendorName:"",address:"",ph1:"9855701212",ph2:""}]},Islamabad:{Vegetables:[{vendorName:"Tarsem Lal s/o Tarlok Singh",address:"House no. 2170, Gali Police Chownki, Islamabad",ph1:"9356135701",ph2:"9888334016"}],Groceries:[{vendorName:"",address:"",ph1:"9855711976",ph2:""},{vendorName:"",address:"",ph1:"8567852466",ph2:""}],Medicines:[{vendorName:"",address:"",ph1:"9697983334",ph2:""}]},"Dhapai Road & Haripura":{Vegetables:[{vendorName:"Ashvani Arora s/o Jeet Lal",address:"#16, Jawala Estate, Haripura, Amritsar",ph1:"9463650303",ph2:""}]},"East Mohan Nagar":{Vegetables:[{vendorName:"Aashu",address:"Street no.2, Chamrang Road, Amritsar",ph1:"9646908484",ph2:""}]},"Jaura Phatak":{Vegetables:[{vendorName:"Mukesh Kumar s/o Mahadev",address:"New Dashmesh Nagar, Gurudwara Street, Jaura Phatak, Amritsar",ph1:"9417857101",ph2:""}]},"Pawan Nagar":{Vegetables:[{vendorName:"Jai Karan s/o Ramdev ",address:"#1946, Street no.3, Hari Singh Nagar, Jaura Phatak, Amritsar",ph1:"9914713863",ph2:""}],Groceries:[{vendorName:"",address:"",ph1:"9878122181",ph2:""}]},"Mall Mandi":{Vegetables:[{vendorName:"Vijay Kumar s/o Jai Karan",address:"#1946, Street no.3, Hari Singh Nagar, Jaura Phatak, Amritsar",ph1:"9814070746",ph2:""}]},"Krishna Nagar":{Vegetables:[{vendorName:"Raj Kumar s/o Jai Karan",address:"#1946, Street no.3, Hari Singh Nagar, Jaura Phatak, Amritsar",ph1:"8437499484",ph2:""}],Groceries:[{vendorName:"",address:"",ph1:"7837066193",ph2:""}]},"Rani Ka Bagh":{Vegetables:[{vendorName:"Jagdish Kumar",address:"",ph1:"9876988585",ph2:""}],Groceries:[{vendorName:"",address:"",ph1:"9855304212",ph2:""}],Medicines:[{vendorName:"",address:"",ph1:"9988317090",ph2:""},{vendorName:"",address:"",ph1:"98146-70218",ph2:""},{vendorName:"",address:"",ph1:"98158-40255",ph2:""},{vendorName:"",address:"",ph1:"92164-99906",ph2:""}]},Putlighar:{Vegetables:[{vendorName:"Satya ",address:"House no. 4226, Sarain Tandon Mall",ph1:"9653917175",ph2:""},{vendorName:"Mangal Das",address:"House no. 4226, Sarain Tandon Mall",ph1:"7717466535",ph2:""},{vendorName:"Gaurav Mahajan",address:"Putlighar Chownk",ph1:"9915590625",ph2:""},{vendorName:"Vijay ",address:"Putlighar Chownk",ph1:"8198817900",ph2:""},{vendorName:"Titu",address:"Putlighar Chownk",ph1:"7527999058",ph2:""},{vendorName:"Dinesh Gupta",address:"",ph1:"9988671496",ph2:""}],Groceries:[{vendorName:"",address:"",ph1:"9988730019",ph2:""},{vendorName:"",address:"",ph1:"9779178700",ph2:""},{vendorName:"",address:"",ph1:"9815254505",ph2:"9779180700"},{vendorName:"",address:"",ph1:"8566080082",ph2:""},{vendorName:"",address:"",ph1:"9888007233",ph2:"9888121297"},{vendorName:"",address:"",ph1:"9872205070",ph2:"8802700151"}],Medicines:[{vendorName:"",address:"",ph1:"9876051163",ph2:""},{vendorName:"",address:"",ph1:"9814674161",ph2:""}]},Lohgarh:{Vegetables:[{vendorName:"Arjan",address:"",ph1:"9501056659",ph2:""},{vendorName:"Karan",address:"",ph1:"9876727671",ph2:""},{vendorName:"Aman kumar",address:"",ph1:"8847437457",ph2:""},{vendorName:"Raghu",address:"",ph1:"9988600728",ph2:""},{vendorName:"Lucky",address:"",ph1:"8847834343",ph2:""},{vendorName:"Deepu",address:"",ph1:"8264783672",ph2:""},{vendorName:"Laali",address:"",ph1:"7901819226",ph2:""}],Fruits:[{vendorName:"Harishankar",address:"",ph1:"8054802827",ph2:""},{vendorName:"Kulesh",address:"",ph1:"6284888943",ph2:""},{vendorName:"Manjit",address:"",ph1:"8054276356",ph2:""},{vendorName:"Surinderpal",address:"",ph1:"9872354476",ph2:""}]},"Pipli Sahib Guruduwara":{Vegetables:[{vendorName:"Sona s/o Bubby",address:"Near Pipli Sahib Gurudwara",ph1:"9988307746",ph2:"9644885244"},{vendorName:"Surinder Singh s/o  Chanan Singh",address:"Near Pipli Sahib Gurudwara",ph1:"6284611711",ph2:""},{vendorName:"Anoop S/o Raja Ram",address:"",ph1:"9646603170",ph2:""},{vendorName:"Sumit Kumar S/o Raja Ram",address:"",ph1:"7837188742",ph2:""}]},Fatahpur:{Vegetables:[{vendorName:"Narinder Singh",address:"",ph1:"81463-11168",ph2:""},{vendorName:"Satnam Singh",address:"",ph1:"81968-15527",ph2:""},{vendorName:"Gurpreet Singh",address:"",ph1:"83609-58122",ph2:""},{vendorName:"Heera Singh",address:"",ph1:"98035-18831",ph2:""}]},Manawala:{Vegetables:[{vendorName:"Kulwinder Singh S/o Balbir Singh",address:"",ph1:"81948-98900",ph2:""},{vendorName:"Kashmir Singh S/o Chanan Singh",address:"",ph1:"94658-39035",ph2:""},{vendorName:"Sukhwinder Singh S/o Baldev Singh",address:"",ph1:"81950-80401",ph2:""},{vendorName:"Sukhdev Singh S/o Bir Singh",address:"",ph1:"98785-88200",ph2:""},{vendorName:"Sarabjit Singh S/o Jaswinder Singh",address:"",ph1:"82645-21283",ph2:""},{vendorName:"Lakhbir Singh S/o Balwinder Singh",address:"",ph1:"99153-62425",ph2:""}]},"Kot Khalsa":{Vegetables:[{vendorName:"Harpal Singh",address:"",ph1:"79864-62643",ph2:""}],Groceries:[{vendorName:"",address:"",ph1:"7888834801",ph2:""},{vendorName:"",address:"",ph1:"9780241794",ph2:""},{vendorName:"",address:"",ph1:"9815943268",ph2:""}]},Mahal:{Vegetables:[{vendorName:"Krishan Mohan",address:"",ph1:"9872550575",ph2:""}]},"Mahal / Khandwala":{Vegetables:[{vendorName:"Kirtan Ram",address:"",ph1:"9815021137",ph2:""},{vendorName:"Sandeep ",address:"",ph1:"9872550575",ph2:""},{vendorName:"Gaurav",address:"",ph1:"9872550575",ph2:""},{vendorName:"Mandeep",address:"",ph1:"9872550575",ph2:""},{vendorName:"Gurdeep ",address:"",ph1:"9815021137",ph2:""},{vendorName:"Pardeep Singh",address:"",ph1:"9815021137",ph2:""},{vendorName:"Kishan Kumar",address:"",ph1:"9815021137",ph2:""}]},"100 feet Road":{Groceries:[{vendorName:"",address:"",ph1:"9814142823",ph2:""},{vendorName:"",address:"",ph1:"9815376466",ph2:""}]},"Kashmir Avenue":{Groceries:[{vendorName:"",address:"",ph1:"7009934968",ph2:""}]},"Rajinder Nagar":{Groceries:[{vendorName:"",address:"",ph1:"9915983686",ph2:""}]},"Azad Nagar Kot Khalsa":{Groceries:[{vendorName:"",address:"",ph1:"9814337547",ph2:""}]},"Basant Avenue":{Groceries:[{vendorName:"",address:"",ph1:"9501206668",ph2:"7968857372"},{vendorName:"",address:"",ph1:"9888121297",ph2:""},{vendorName:"",address:"",ph1:"8054848381",ph2:""}]},"Batala Road":{Groceries:[{vendorName:"",address:"",ph1:"9876312700",ph2:""},{vendorName:"",address:"",ph1:"6280153841",ph2:""}]},"Alpha One GT Road":{Groceries:[{vendorName:"",address:"",ph1:"7888681429",ph2:""}]},"Ram Bagh":{Groceries:[{vendorName:"",address:"",ph1:"9814911730",ph2:""},{vendorName:"",address:"",ph1:"9814053085",ph2:""},{vendorName:"",address:"",ph1:"9888632110",ph2:""},{vendorName:"",address:"",ph1:"9888132220",ph2:""},{vendorName:"",address:"",ph1:"9888838924",ph2:""},{vendorName:"",address:"",ph1:"9988068080",ph2:""}]},"Ratan Singh Chowk":{Groceries:[{vendorName:"",address:"",ph1:"9814250081",ph2:"9501916531"},{vendorName:"",address:"",ph1:"9814250081",ph2:"9501916531"}],Medicines:[{vendorName:"",address:"",ph1:"9815481408",ph2:""}]},"Dashmesh Nagar":{Groceries:[{vendorName:"",address:"",ph1:"9988295653",ph2:""}]},"Dashmesh Nagar Jaura":{Groceries:[{vendorName:"",address:"",ph1:"9855645271",ph2:""},{vendorName:"",address:"",ph1:"9915550043",ph2:""},{vendorName:"",address:"",ph1:"7837066193",ph2:"9988061880"}]},"Fatehgarh Churian Road":{Groceries:[{vendorName:"",address:"",ph1:"9815506456",ph2:""},{vendorName:"",address:"",ph1:"9876038731",ph2:""}]},Maqboolpoora:{Groceries:[{vendorName:"",address:"",ph1:"7986844922",ph2:""},{vendorName:"",address:"",ph1:"9023088636",ph2:""}]},Tehsilpura:{Groceries:[{vendorName:"",address:"",ph1:"9988034193",ph2:"9646854002"},{vendorName:"",address:"",ph1:"9815082390",ph2:""},{vendorName:"",address:"",ph1:"9815530833",ph2:""}]},"Green Avenue":{Groceries:[{vendorName:"",address:"",ph1:"8360799795",ph2:""}]},"Telephone Exchange":{Groceries:[{vendorName:"",address:"",ph1:"9815569236",ph2:""},{vendorName:"",address:"",ph1:"8360389961",ph2:""}]},"Jallianwala Bagh":{Groceries:[{vendorName:"",address:"",ph1:"9914391794",ph2:""}]},"Kangra Colony":{Groceries:[{vendorName:"",address:"",ph1:"8146177882",ph2:""}]},"Katra Baghian":{Groceries:[{vendorName:"",address:"",ph1:"98769077882",ph2:""}]},"Lakshmansar Chowk":{Groceries:[{vendorName:"",address:"",ph1:"8872864131",ph2:""}]},"Lawrence Road":{Groceries:[{vendorName:"",address:"",ph1:"9888621521",ph2:""}],Medicines:[{vendorName:"",address:"",ph1:"9814006852",ph2:""},{vendorName:"",address:"",ph1:"7838783043",ph2:""}]},Khandwala:{Groceries:[{vendorName:"",address:"",ph1:"9872078752",ph2:""}]},"Majitha Road":{Groceries:[{vendorName:"",address:"",ph1:"9417128400",ph2:""},{vendorName:"",address:"",ph1:"8054411350",ph2:""},{vendorName:"",address:"",ph1:"9501007633",ph2:""},{vendorName:"",address:"",ph1:"9888724280",ph2:""}],Medicines:[{vendorName:"",address:"",ph1:"9814336406",ph2:""}]},"Gopal Mandir, Majitha Road":{Groceries:[{vendorName:"",address:"",ph1:"9814455809",ph2:""}]},"Mata Durga Mandir":{Groceries:[{vendorName:"",address:"",ph1:"7986607745",ph2:""}]},Mustafabad:{Groceries:[{vendorName:"",address:"",ph1:"9464754548",ph2:""},{vendorName:"",address:"",ph1:"8567009309",ph2:""},{vendorName:"",address:"",ph1:"9888015089",ph2:""},{vendorName:"",address:"",ph1:"7888754169",ph2:""},{vendorName:"",address:"",ph1:"9803652529",ph2:""},{vendorName:"",address:"",ph1:"8567009309",ph2:""}],Medicines:[{vendorName:"",address:"",ph1:"8558002323",ph2:""}]},Sharifpura:{Groceries:[{vendorName:"",address:"",ph1:"9888335332",ph2:""}]},"Golden Avenue":{Groceries:[{vendorName:"",address:"",ph1:"6280160882",ph2:""},{vendorName:"",address:"",ph1:"9501255402",ph2:""}]},"Palah Sahib Road, Airport Road":{Groceries:[{vendorName:"",address:"",ph1:"8288875779",ph2:"9814475779"}]},"Randhawa Market":{Groceries:[{vendorName:"",address:"",ph1:"9501344841",ph2:""}]},"Sanjay Gandhi Colony":{Groceries:[{vendorName:"",address:"",ph1:"8360661621",ph2:""}]},"Sharifpura Chowk":{Groceries:[{vendorName:"",address:"",ph1:"8837579643",ph2:"8837589687"}]},"Shivala Road":{Groceries:[{vendorName:"",address:"",ph1:"9888845580",ph2:""}]},"Sultanwind Road":{Groceries:[{vendorName:"",address:"",ph1:"9417464168",ph2:""},{vendorName:"",address:"",ph1:"9417464169",ph2:""},{vendorName:"",address:"",ph1:"9417464169",ph2:""},{vendorName:"",address:"",ph1:"9888787220",ph2:""},{vendorName:"",address:"",ph1:"9779267267",ph2:""}],Medicines:[{vendorName:"",address:"",ph1:"7528838687",ph2:""},{vendorName:"",address:"",ph1:"9888704206",ph2:""}]},"Sundar Nagar":{Groceries:[{vendorName:"",address:"",ph1:"8146501272",ph2:""},{vendorName:"",address:"",ph1:"9815581540",ph2:""}]},Varpal:{Groceries:[{vendorName:"",address:"",ph1:"9815700045",ph2:""}]},Verka:{Groceries:[{vendorName:"",address:"",ph1:"9463230622",ph2:""}],Medicines:[{vendorName:"",address:"",ph1:"9464748797",ph2:""}]},Vallah:{Groceries:[{vendorName:"",address:"",ph1:"9915929748",ph2:""},{vendorName:"",address:"",ph1:"8872986777",ph2:""}],Medicines:[{vendorName:"",address:"",ph1:"94649-86474\n",ph2:""}]},"Ranjit Avenue All Blocks":{Groceries:[{vendorName:"",address:"",ph1:"9855151153",ph2:""}],Medicines:[{vendorName:"",address:"",ph1:"9888128726",ph2:""},{vendorName:"",address:"",ph1:"9872327442",ph2:""},{vendorName:"",address:"",ph1:"9888743899",ph2:""}]},"Chir Beri Chowk Chintpurni":{Groceries:[{vendorName:"",address:"",ph1:"9988616598",ph2:""}]},"Janta Colony":{Groceries:[{vendorName:"",address:"",ph1:"8360799795",ph2:""},{vendorName:"",address:"",ph1:"9988616598",ph2:""}]},"Nehru Colony":{Groceries:[{vendorName:"",address:"",ph1:"9988113032",ph2:""}]},"Dam Ganj":{Groceries:[{vendorName:"",address:"",ph1:"9780505202",ph2:""}]},"Gurbaksh Nagar":{Groceries:[{vendorName:"",address:"",ph1:"9888703677",ph2:""}]},"Hari Pura":{Groceries:[{vendorName:"",address:"",ph1:"9815552084",ph2:""}]},"Chita Katra":{Groceries:[{vendorName:"",address:"",ph1:"9814669425",ph2:""}]},"Tunda Talab":{Medicines:[{vendorName:"",address:"",ph1:"9888233333",ph2:""}]},"New Amritsar":{Medicines:[{vendorName:"",address:"",ph1:"9814141674",ph2:""}]},"Vijay Nagar":{Medicines:[{vendorName:"",address:"",ph1:"9417854488",ph2:""}]},"Crystal Chowk":{Medicines:[{vendorName:"",address:"",ph1:"9592979786",ph2:""}]},Sahibabad:{Medicines:[{vendorName:"",address:"",ph1:"8427631543",ph2:""}]},Bhagtanwala:{Medicines:[{vendorName:"",address:"",ph1:"99156-50067",ph2:""}]},"Katra Safaid":{Medicines:[{vendorName:"",address:"",ph1:"98156-60334",ph2:""}]},"Gopal Nagar":{Medicines:[{vendorName:"",address:"",ph1:"70092-79326",ph2:""}]},"Loharka Road":{Medicines:[{vendorName:"",address:"",ph1:"88377-54499",ph2:""}]},Nangali:{Medicines:[{vendorName:"",address:"",ph1:"96463-20003",ph2:""}]},"Circular Road":{Medicines:[{vendorName:"",address:"",ph1:"84276-67725",ph2:""}]},Ajnala:{Medicines:[{vendorName:"",address:"",ph1:"94632-62862",ph2:""}]},"Katra Sher Singh":{Medicines:[{vendorName:"",address:"",ph1:"9814457170",ph2:""}]},"Partap Bazar, Chheharta":{Medicines:[{vendorName:"",address:"",ph1:"9216712585",ph2:""}]}},w={serviceableAreas:M.areas,categoriesList:M.categories,data:M,selectedArea:null,selectedCategory:null},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_SELECTED_CATEGORY":return Object(C.a)({},e,{selectedCategory:a.payload});case"SET_SELECTED_AREA":return Object(C.a)({},e,{selectedArea:a.payload});case"SEARCH_LIST":return e.selectedArea&&e.selectedCategory?Object(C.a)({},e,{results:e.data[e.selectedArea][e.selectedCategory]}):e;default:return e}};var R,k=(R=w,Object(A.b)(E,R));n.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(t.a,{store:k},s.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[185,1,2]]]);
//# sourceMappingURL=main.d321b358.chunk.js.map