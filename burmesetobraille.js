const burmese_to_braille = new Map();

setBraille("က", "\u2805");
setBraille("ခ", "\u2828");
setBraille("ဂ", "\u281B");
setBraille("ဃ", "\u281F");
setBraille("င", "\u280C");
setBraille("စ", "\u280E");
setBraille("ဆ", "\u2816");
setBraille("ဇ", "\u2835");
setBraille("ဈ", "\u282E");
setBraille("ည", "\u2837");
setBraille("ဋ", "\u2833");
setBraille("ဌ", "\u283B");
setBraille("ဍ", "\u283E");
setBraille("ဎ", "\u283F");
setBraille("ဏ", "\u282B");
setBraille("တ", "\u281E");
setBraille("ထ", "\u281A");
setBraille("ဒ", "\u2819");
setBraille("ဓ", "\u280B");
setBraille("န", "\u281D");
setBraille("ပ", "\u280F");
setBraille("ဖ", "\u2818");
setBraille("ဗ", "\u2829");
setBraille("ဘ", "\u2803");
setBraille("မ", "\u280D");
setBraille("ယ", "\u283D");
setBraille("ရ", "\u2817");
setBraille("လ", "\u2807");
setBraille("ဝ", "\u283A");
setBraille("သ", "\u2839");
setBraille("ဟ", "\u2813");
setBraille("ဠ", "\u2838");
setBraille("အ", "\u2823");
setBraille("ဉ", "\u2827");

setBraille("၁", "\u283C\u2801");
setBraille("၂", "\u283C\u2803");
setBraille("၃", "\u283C\u2809");
setBraille("၄", "\u283C\u2819");
setBraille("၅", "\u283C\u2811");
setBraille("၆", "\u283C\u280B");
setBraille("၇", "\u283C\u281B");
setBraille("၈", "\u283C\u2813");
setBraille("၉", "\u283C\u280A");
setBraille("၀", "\u283C\u281A");

setBraille("ာ", "\u2801");
setBraille("ါ", "\u2830\u2801");
setBraille("ိ", "\u280A");
setBraille("ီ", "\u282A");
setBraille("ု", "\u2811");
setBraille("ူ", "\u2825");
setBraille("ေ", "\u2831");
setBraille("ဲ", "\u2821");
setBraille("?", "\u2834");
setBraille("ံ", "\u2809");
setBraille("င်္", "\u2810");
setBraille("ျ", "\u2814");
setBraille("ြ", "\u2822");
setBraille("်", " \u2804");
setBraille("ွ", "\u281C");
setBraille("ှ", "\u282D");
setBraille("့", "\u2802");
setBraille("း", " \u2806");

setBraille("၍", "\u282F");
setBraille("၏", "\u2815");
setBraille("၌", "\u2826");
setBraille("၎င်း", "\u282C");
setBraille("၊", " ");
setBraille("။", " ");
setBraille("္", "");
setBraille(" ", " ");

function convert(burmese) {
  var output = "";
  var contain_non_burmese = false;
  var non_burmese_indexes = [];
  for (let x = 0; x < burmese.length; x++) {
    const element = burmese[x];
    if (element === "\n") {
      output += "\n";
    } else if (element == "င" && burmese[x + 1] == "်" && burmese[x + 2] == "္") {
      output += burmese_to_braille.get("င်္");
      x += 2;
    } else if (
      element == "၎" &&
      burmese[x + 1] == "င" &&
      burmese[x + 2] == "်" &&
      burmese[x + 3] == "း"
    ) {
      output += burmese_to_braille.get("၎င်း");
      x += 3;
    } else if (burmese_to_braille.has(element)) {
      output += burmese_to_braille.get(element);
    } else if (element.trim() === '') {
      output += ' ';
    } else {
      output += element;
    }
  }
  return output;
}

function setBraille(key, value) {
  burmese_to_braille.set(key, value);
}
function showBraille(string) {
  document.getElementById("braille").value = string;
}

function clear() {
  document.getElementById("burmese").value = "";
  document.getElementById("braille").value = "";
}

function convertToBraille() {
  showBraille(convert(document.getElementById("burmese").value));
}

const error_sound = new Audio("sounds/error.wav");

function showErrorMessage(message) {
    error_sound.play();
  document.getElementById("error-alert").style.display = "flex";
  document.getElementById("error-alert-message").innerHTML = message;
  document.getElementById('darken-filter').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  document.getElementById('darken-filter').style.zIndex = "1";
}

function showMessage() {
    error_sound.play();
  document.getElementById("alert").style.display = "flex";
  document.getElementById('darken-filter').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  document.getElementById('darken-filter').style.zIndex = "1";
}

document
  .getElementById("convert-btn")
  .addEventListener("click", convertToBraille);
document.getElementById("clear-btn").addEventListener("click", clear);
document
  .getElementById("copy-braille")
  .addEventListener("click", function (event) {
    var copyText = document.getElementById("braille");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);
    showMessage();
  });
document
  .getElementById("close-error-alert")
  .addEventListener("click", function () {
    document.getElementById("error-alert").style.display = "none";
    document.getElementById('darken-filter').style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById('darken-filter').style.zIndex = "-1";
  });

document
  .getElementById("close-alert")
  .addEventListener("click", function () {
    document.getElementById("alert").style.display = "none";
    document.getElementById('darken-filter').style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById('darken-filter').style.zIndex = "-1";
  });