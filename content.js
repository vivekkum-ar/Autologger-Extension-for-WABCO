// #VivekKumar
chrome.runtime.sendMessage({todo: "showPageAction"});
(function () {
    vname_arr = ["Accurate springs Pvt. Ltd.", "Ajit industries Pvt. Ltd.", "Aldica technologies Pvt. Ltd.", "Alpha founders Pvt. Ltd.", "Amar auto agency", "Amzen machines Pvt. Ltd.", "Applied engineering & technology", "Aravind auto spares", "Auro plastic injection moulders Pvt.", "Balu auto components Pvt. limite", "Banco gaskets [india] Ltd.", "BASF india Ltd.", "BSA corporation Ltd.", "Cascy forge products", "Cast & alloys", "Coventry coilomatic [haryana] Ltd.", "Devendra autocom Pvt. Ltd.", "Devi turnomatics Pvt. Ltd.", "Dhee auto engineering", "El forge Ltd.", "Elan auto india Ltd.", "Electromags unit", "Enkey engineering works", "Excel plast", "Excel process Pvt. Ltd.", "FI auto components Pvt. Ltd.", "Focus diecast Pvt. Ltd.", "Freudenberg-nok Pvt. Ltd.", "Geoff poly technologies", "Gravitech inc", "Helvoet rubber and plastic technolo", "Hifit industries", "Highco engineers Pvt. Ltd.", "Hi-tech gears Ltd.", "Hoerbiger india precision technolog", "Hoerbiger india Pvt. Ltd.", "Indoshell mould Ltd.", "Jagadamba auto components Ltd.", "Jainidhi automation", "Janani mouldings Pvt. Ltd.", "Jayashree polymers Pvt. Ltd.", "Jmt auto Ltd.", "K r enterprise", "Kalyani technoforge Ltd.", "Kern-liebers [india] Pvt. limite", "Kikuwa india Pvt. Ltd.", "Klipco Pvt. Ltd.", "Koyas fasteners Pvt. Ltd.", "KSPG automotive india Pvt. Ltd.", "Kumar industries", "LPS bossard Pvt. Ltd.", "M R S BEARINGS Pvt. Ltd.", "M. K. Engineering works", "Macurex sensors Pvt. Ltd.", "Maraica industries chennai", "Maraica industries kolkata", "Mega rubber technologies Pvt. Ltd.", "Mesha engineering industry Pvt. Ltd.", "Minda industries Ltd.", "Mubea auomotive components india", "MK auto components india Ltd.", "Multitech auto Ltd.", "Nikki india fuel systems Pvt. li", "Om sakthi industries", "Padma mines and minerals", "Pennar industries Ltd.", "Perfect engineering", "Perfect mettcast Ltd.", "Polyhose india Pvt. Ltd.", "Polyhose india Pvt. Ltd.-unit-iv", "Prem industries", "Premier industrial plastics", "Ragam metal products [P] Ltd.", "Raja engineering works", "Reyaansh industrial plastics", "Rialto enterprises Pvt. Ltd.", "Rockman industries Ltd.", "Roop polymers Ltd. unit-iii", "Roop polymers Ltd. unit-vi", "Samvardhana motherson auto componen", "Sanmina-sci india Pvt. Ltd.", "Sarva sakthi enterprises", "Satyam auto components Pvt. Ltd.", "Shri pavithra auto product", "Shriram foundry Pvt. Ltd.", "Shriram pistons and rings Ltd.", "Shriram pistons and rings Ltd.", "Simmonds marshall Ltd.", "Sophia automotive [P] Ltd.", "Sree krishna labels & solutions Pvt.", "Sri hari industries", "Sri vari alloys", "Sri vigneshwara engineering", "Sri vijayalakshmi & co", "Stanley engineered fastening india", "Star circlips & engineering Ltd.", "Stud india", "Stumpp schuele & somappa springs", "Stumpp schuele & somappa springs", "Sudisa enterprises Pvt. Ltd.", "Suja shoei industries [p] Ltd.", "Sundaram industries Pvt. Ltd.", "Sundaram-clayton Ltd.", "Sundaram-clayton Ltd.dcd", "Sundram fasteners Ltd.", "Sunrise corrugated india Pvt. Ltd.", "Surface treatment systems", "Synnova gears & transmission Pvt. L", "Sysmac engineers", "Technoedge", "Tvs.Argomm Pvt. Ltd.", "Umac auto components Pvt. Ltd.", "Universal precision screws", "Venus manufacturing company", "Versatile alucast Pvt. Ltd.", "Vidushi Wires Pvt. Ltd.", "Vijayshree autocom Ltd.", "Voss exotech automotive Pvt. Ltd.", "Willtech metal former", "Wuerth industrial services", "Yesodha engineering services", "Zenith industrial products", "Coded by #VivekKumar"];
    vpass_arr = ["aspl1222", "sub@321", "Aldica531", "Init12345", "Init12345", "Init12345", "null", "null", "Apimpl@453", "Baluauto123@", "banco123", "250109", "null", "Cascy*21%", "Init123456", "C205@dmin", "null", "Devi@7777", "null", "null", "HARIOM@1", "Init12345", "vendorlogin", "Excelwabco21", "250128", "null", "FDPL2020##", "null", "Geoff1234", "gra1234", "Init123", "null", "null", "null", "HIPT@2021", "hipl2021", "null", "Jal1234", "jna123", "jmpl@Ltd.", "Init12345", "null", "gopi1963", "Init12345", "null", "wabco@123", "klipco@123", "Koyas1234", "null", "Ki$6808", "lps", "null", "Init456", "Init1235", "Init12345", "maraica@123", "Megarubber@123", "29aabcm1986", "mil@123", "Init12345", "mkauto1234", "Mapl@1234", "nikki123", "Osi1234$", "Init1234", "Pnn0r@2018", "Init12345", "Sales@123", "Polyhose@1234", "Init12345", "250199", "Init1234", "null", "null", "yonex@2021", "null", "null", "Roop1234", "Roop123", "smac123", "null", "Sekar1989", "null", "Init12345", "null", "null", "null", "null", "null", "null", "srihari2021", "null", "svew2020", "Sriv@123", "Stanley1234", "star@1200", "null", "Ssss@1234", "Ssss@1234", "null", "Init12345", "Init12345", "Sclhosur", "Sclpadi", "Init12345", "Sunrise123", "Sts@9677", "null", "Narayana!@#123", "Mbg@1960", "tvsar@2021", "Init12345", "ups@123", "2@venuspins", "VAPL@2021", "Init12345", "Init12345", "Init12345", "null", "wuerth", "yesodha@143", "zenith2021", ""];
    vcode_arr = ["250091", "250093", "250029", "250096", "250339", "250097", "250098", "250099", "250103", "250105", "250106", "250061", "250109", "250110", "250111", "250114", "250117", "250118", "250071", "250121", "250122", "250123", "250126", "250127", "250128", "250130", "250131", "250133", "250137", "250142", "250144", "250146", "250147", "250064", "250150", "250151", "250156", "250160", "250161", "250162", "250163", "250369", "250164", "250165", "250167", "250168", "250170", "250171", "250172", "250173", "250175", "250368", "250177", "250179", "250180", "250181", "250184", "250185", "250050", "250187", "250186", "250042", "250189", "250192", "250341", "250195", "250196", "250197", "250350", "250062", "250199", "250056", "250202", "250203", "250081", "250210", "250212", "250214", "250217", "250218", "250311", "250221", "250223", "250229", "250230", "250337", "250370", "250233", "250235", "250239", "250242", "250035", "250041", "250055", "250248", "250249", "250251", "250252", "250253", "250254", "250255", "250257", "250256", "250259", "250371", "250367", "250261", "250262", "250263", "250266", "250348", "250272", "250309", "250273", "250274", "250335", "250306", "250275", "250276", "250305", "250279", "250280", ""];
    function fnAddElements() {
      var mainBtnDIV = document.createElement("div"); 
      mainBtnDIV.id = "search-mm-selectbtn-div";
      mainBtnDIV.classList.add("container", "justify-content-end", "d-flex", "align-items-end", "flex-column");
      var label_DIV = document.createElement("div");
      label_DIV.id = "label_DIV"
      label_DIV.classList.add("p-2");
      var label = document.createElement("h3");
      label_DIV.appendChild(label);
      label.innerHTML = 'Hi, Vivek Kumar';
      var Dropdown = document.createElement("select");
      var dpdwn_DIV = document.createElement("div");
      dpdwn_DIV.appendChild(Dropdown);
      mainBtnDIV.appendChild(label_DIV);
      mainBtnDIV.appendChild(dpdwn_DIV);
      dpdwn_DIV.classList.add("p-2");
      Dropdown.innerHTML = '<option value="default">default</option>';
      Dropdown.id = "search-mm-selectbtn";
      Dropdown.type = "submit";
      for(var i = 0; i < vname_arr.length; i++)
             {
                 var option = document.createElement("OPTION"),
                     txt = document.createTextNode(vname_arr[i]);
                 option.appendChild(txt);
                 option.setAttribute("value",vname_arr[i]);
                 Dropdown.insertBefore(option,Dropdown.lastChild);
             }
      document.body.insertBefore(mainBtnDIV,document.getElementById("form1"));
    }
  
    function fnDefineEvents() {
      document
        .getElementById("search-mm-selectbtn")
        .addEventListener("change", function () {
            var vcode = vcode_arr[document.getElementById('search-mm-selectbtn').selectedIndex];
            var vpass = vpass_arr[document.getElementById('search-mm-selectbtn').selectedIndex];
            fnLogin(vcode,vpass);
        });
    }
    function fnLogin(vcode,vpass) {
      document.querySelector("#TextBox1").value = vcode;
      document.querySelector("#TextBox2").value = vpass;
      document.getElementById("DropDownList1").value = "Supplier";
      document.getElementById("Button1").click();
    }
    fnAddElements();
    fnDefineEvents();
  })();