function showSuccessToast() {
  let successToast = document.getElementById("success-toast");

  successToast.className = "show";

  setTimeout(function () {
    successToast.className = successToast.className.replace("show", "");
  }, 3000);
}

function showWarningToast() {
  let warningToast = document.getElementById("warning-toast");

  warningToast.className = "show";

  setTimeout(function () {
    warningToast.className = warningToast.className.replace("show", "");
  }, 3000);
}

function showDangerToast() {
  let dangerToast = document.getElementById("danger-toast");

  dangerToast.className = "show";

  setTimeout(function () {
    dangerToast.className = dangerToast.className.replace("show", "");
  }, 3000);
}
