// #VivekKumar
//Takes variables from file.js

chrome.runtime.sendMessage({todo: "showPageAction"});
(function () {
    function fnAddElements() {
      vname_arr.push("#Coded by Vivek Kr.");
      vcode_arr.push("Developer");
      /**================================================================================================
       *!                  Adding Show/Hide password feature and increasing icon size
       *================================================================================================**/
       document.getElementsByClassName("fa")[0].style.fontSize = "20px";
       document.getElementsByClassName("fa")[1].style.fontSize = "20px";
       document.getElementsByClassName("form-group")[1].firstChild.nextElementSibling.classList.add('fa-eye');
       document.getElementsByClassName("form-group")[1].firstChild.nextElementSibling.classList.remove('fa-lock');
       document.getElementsByClassName("form-group")[1].firstChild.nextElementSibling.addEventListener("click", function() {
         if(document.getElementById("TextBox2").type == "password"){
       document.getElementById("TextBox2").type = "text";
       }
         else{
         document.getElementById("TextBox2").type = "password";
       }
       });
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
      document.getElementById("DropDownList1").value = "Supplier";
      for(var i = 0; i < vname_arr.length; i++)
             {
                 var option = document.createElement("OPTION"),
                     txt = document.createTextNode(vname_arr[i]+ " ("+ vcode_arr[i] + ")");
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
      if(document.getElementById('search-mm-selectbtn').selectedIndex != (vname_arr.length-1)){
      document.querySelector("#TextBox1").value = vcode;
      document.querySelector("#TextBox2").value = vpass;
      document.getElementById("Button1").click();
      }}
    fnAddElements();
    fnDefineEvents();
  })();