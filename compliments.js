window.compliments = [
    "You're that “Nothing” when people ask me what I'm thinking about.",
    "You look great today.",
    "I bet you make babies smile.",
    "You have impeccable manners.",
    "I like your style.",
    "You have the best laugh.",
    "I appreciate you.",
    "You are the most perfect you there is.",
    "You are enough.",
    "You're strong.",
    "Your perspective is refreshing.",
    "You're an awesome friend.",
    "You light up the room.",
    "You deserve a hug right now.",
    "You should be proud of yourself.",
    "You're more helpful than you realize.",
    "You have a great sense of humor.",
    "You've got all the right moves!",
    "Is that your picture next to \"charming\" in the dictionary?",
    "Your kindness is a balm to all who encounter it.",
    "On a scale from 1 to 10, you're an 11.",
    "You are brave.",
    "You're even more beautiful on the inside than you are on the outside.",
    "You have the courage of your convictions.",
    "Your eyes are breathtaking.",
    "You're like a breath of fresh air.",
    "You're making a difference.",
    "You're like sunshine on a rainy day.",
    "You were cool way before hipsters were cool.",
    "You always know and say exactly what I need to hear when I need to hear it.",
    "Being around you makes everything better.",
    "Colors seem brighter when you're around."
];

document.body.onload = function() {
    newCompliment();
};

document.body.onkeyup = function(e) {
    if (e.which == 32) {
        newCompliment();
    }
};

function newCompliment() {
    document.getElementById("compliment").innerHTML = window.compliments[Math.floor(Math.random() * window.compliments.length)];
}