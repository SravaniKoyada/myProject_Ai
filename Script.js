function calculateScore() {

    let score = 0;
    let reasons = [];

    let demo = document.querySelector('input[name="demo"]:checked')?.value;
    let registration = document.querySelector('input[name="registration"]:checked')?.value;
    let call = document.querySelector('input[name="call"]:checked')?.value;
    let event = document.querySelector('input[name="event"]:checked')?.value;
    let referral = document.querySelector('input[name="referral"]:checked')?.value;
    let pricing = document.getElementById("pricing").value;
    let date = document.getElementById("date").value;

    if (demo === "yes") {
        score += 20;
        reasons.push("Demo requested (+20)");
    }

    if (registration === "yes") {
        score += 15;
        reasons.push("Registration completed (+15)");
    }

    if (call === "yes") {
        score += 10;
        reasons.push("Direct enquiry (+10)");
    }

    if (pricing === "competitive") {
        score += 15;
        reasons.push("Competitive pricing (+15)");
    }

    if (event === "yes") {
        score += 10;
        reasons.push("Lead from event (+10)");
    }

    if (referral === "yes") {
        score += 20;
        reasons.push("Referral credibility (+20)");
    }

    if (date) {
        let today = new Date();
        let enquiryDate = new Date(date);
        let diffDays = (today - enquiryDate) / (1000 * 60 * 60 * 24);

        if (diffDays <= 7) {
            score += 10;
            reasons.push("Recent enquiry (within 7 days) (+10)");
        }
    }

    if (score > 100) score = 100;

    let action;

    if (score >= 70) {
        action = "High Priority: Immediate Sales Call";
    } else if (score >= 40) {
        action = "Medium Priority: Send Follow-up Email";
    } else {
        action = "Low Priority: Add to Nurturing Campaign";
    }

    document.getElementById("result").innerHTML =
        "<h3>Lead Score: " + score + "/100</h3>" +
        "<p><strong>Reasons:</strong></p>" +
        "<ul>" + reasons.map(r => "<li>" + r + "</li>").join("") + "</ul>" +
        "<p><strong>Next Best Action:</strong> " + action + "</p>";
}