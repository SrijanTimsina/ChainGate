const now = new Date();
const dateTime = document.getElementById("date-time");

const minDateTimeISO = now.toISOString().slice(0, 16);

const utcHour = now.getUTCHours();
const utcMinute = now.getUTCMinutes();

window.onload = function () {
	const element = document.querySelector(".main-container");
	element.classList.add("show");
};

document.getElementById(
	"current-time-display"
).innerText = `${utcHour}:${
	utcMinute > 9 ? utcMinute : "0" + utcMinute
} ${utcHour > 11 ? "P.M." : "A.M."}`;

dateTime.min = minDateTimeISO;

document.getElementById("copy-text").addEventListener("click", () => {
	navigator.clipboard.writeText(
		document.getElementById("text-copy").innerText
	);
	document.getElementById("copy").style.display = "none";
	document.getElementById("copied").style.display = "block";
});

sidebarContainer = document.getElementById("side-bar-container");

document.getElementById("hamburger").addEventListener("click", () => {
	document.body.style.overflow = "hidden";
	sidebarContainer.classList.add("side-bar-show");
	sidebarContainer.classList.remove("side-bar-hide");
});
document.getElementById("close").addEventListener("click", () => {
	document.body.style.overflow = "auto";
	sidebarContainer.classList.add("side-bar-hide");
	sidebarContainer.classList.remove("side-bar-show");
});

const submitForm = () => {
	const status = true;

	// Form Submission Code here //
	// If form submission failed change status to false //

	document.getElementById("request-form-container").style.display =
		"none";
	if (status) {
		document.getElementById("submission-success").style.display =
			"block";
	} else {
		document.getElementById("submission-failed").style.display =
			"block";
	}
};

document
	.getElementById("form-request")
	.addEventListener("submit", (e) => {
		e.preventDefault();
		const time = new Date();
		if (dateTime.value < time.toISOString().slice(0, 16)) {
			alert("Please Enter a valid date");
			return;
		}
		const txnHash = document.getElementById("txn-hash").value;
		if (document.getElementById("txn-hash").value == "") {
			alert("Please Enter the payment transaction hash");
			return;
		}

		submitForm();
		return;
	});
