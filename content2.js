// #VivekKumar
chrome.runtime.sendMessage({todo: "showPageAction"});
(function () {
      let today = new Date(new Date().getTime() + (10 * 24 * 60 * 60 * 1000));
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0 hence 1 needs to be added
      let dd = today.getDate();
      //Add zero to months and days with single digits because it was creating an exception
      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;
      today_plus_10 = dd + '/' + mm + '/' + yyyy;

      document.querySelector("#ctl00_ContentPlaceHolder1_Txtcontainerno").value = 1234;
      document.querySelector("#ctl00_ContentPlaceHolder1_DropDownList2").value = "Road";
      document.getElementById("ctl00_ContentPlaceHolder1_Txtdeliverydate").value = today_plus_10;
      //document.getElementById("ctl00_ContentPlaceHolder1_DropDownList1").value = 1030;
      //document.getElementById("ctl00_ContentPlaceHolder1_DropDownList1").dispatchEvent(new Event('change'));
    })();