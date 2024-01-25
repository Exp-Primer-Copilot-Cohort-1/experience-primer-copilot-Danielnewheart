function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("member-skills");
    var memberSkillsSelect = document.getElementById("member-skills-select");
    var memberSkillsInput = document.getElementById("member-skills-input");
    memberSkillsSelect.innerHTML = member.value;
    memberSkillsInput.value = member.value;
    memberSkills.style.display = "block";
}