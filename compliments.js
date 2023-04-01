window.compliments = [
    "You have a contagious smile that can light up anyone's day.",
    "You have a remarkable talent for making people feel at ease and comfortable around you.",
    "You have a heart of gold and a kind spirit that inspires others to be their best selves.",
    "Your creativity and imagination are truly awe-inspiring.",
    "Your intelligence and wit never cease to amaze me.",
    "You have a way of seeing the world that is uniquely insightful and enlightening.",
    "You possess a rare combination of strength and grace that is truly admirable.",
    "You have an incredible work ethic and a tenacity that is inspiring to those around you.",
    "Your compassion and empathy make you a truly special and caring person.",
    "You have an infectious enthusiasm for life that makes everyone around you want to join in.",
    "Your ability to listen and understand is a rare and valuable gift.",
    "Your sense of humor is top-notch and always puts a smile on my face.",
    "Your passion for your interests and pursuits is truly inspiring.",
    "You have a natural beauty that radiates from within.",
    "Your dedication to personal growth and self-improvement is truly commendable.",
    "Your positive attitude and outlook on life are infectious and inspiring.",
    "Your patience and understanding make you a wonderful friend and companion.",
    "Your integrity and honesty are truly admirable and make you a role model for others.",
    "You have an incredible sense of style and a unique fashion sense that is always on point.",
    "Your adventurous spirit and willingness to take risks make you an inspiration to others.",
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
    "You always know and say exactly what I need to hear when I need to hear it.",
    "Being around you makes everything better.",
    "Colors seem brighter when you're around.",
    "Your energy is electric.",
    "You have a captivating smile.",
    "Your hair looks stunning today.",
    "Your creativity knows no bounds.",
    "Your contagious energy lifts everyone around you.",
    "Your kindness is inspiring.",
    "Your intelligence is truly impressive.",
    "Your voice could soothe the soul.",
    "Your style is impeccable.",
    "Your dedication to your work is admirable.",
    "Your determination is inspiring.",
    "Your presence fills the room with positivity.",
    "Your thoughtfulness is appreciated more than you know.",
    "Your loyalty is unwavering.",
    "Your confidence is infectious.",
    "Your passion for life is inspiring.",
    "Your empathy is a true gift to those around you.",
    "Your curiosity is contagious.",
    "You have a natural ability to lead.",
    "Your creativity is truly awe-inspiring.",
    "You have a wonderful sense of style.",
    "Your dedication to your craft is admirable.",
    "Your hard work is paying off in spades.",
    "Your loyalty is unwavering.",
    "Your attention to detail is truly remarkable.",
    "You have a unique perspective that is truly valuable.",
    "Your intuition is impressive.",
    "Your generosity knows no bounds.",
    "Your honesty is refreshing.",
    "Your positive attitude is contagious.",
    "Your optimism is inspiring.",
    "You have a calming presence that eases any situation.",
    "Your adaptability is impressive.",
    "Your intelligence is matched only by your kindness.",
    "Your resilience is remarkable.",
    "You have a wonderful way of bringing people together.",
    "Your determination is unwavering.",
    "Your smile lights up the room.",
    "Your confidence is infectious.",
    "Your passion for life is inspiring.",
    "Your empathy is a true gift to those around you.",
    "Your curiosity is contagious.",
    "You have a natural ability to lead.",
    "Your creativity is truly awe-inspiring.",
    "You have a wonderful sense of style.",
    "Your dedication to your craft is admirable.",
    "Your hard work is paying off in spades.",
    "Your loyalty is unwavering.",
    "Your attention to detail is truly remarkable.",
    "You have a unique perspective that is truly valuable.",
    "Your intuition is impressive.",
    "Your generosity knows no bounds.",
    "Your honesty is refreshing.",
    "Your positive attitude is contagious.",
    "Your optimism is inspiring.",
    "You have a calming presence that eases any situation.",
    "Your adaptability is impressive.",
    "Your intelligence is matched only by your kindness.",
    "Your resilience is remarkable.",
    "You have a wonderful way of bringing people together.",
    "Your determination is unwavering.",
    "Your smile lights up the room.",
    "Your confidence is infectious.",
    "Your passion for life is inspiring.",
    "Your empathy is a true gift to those around you.",
    "Your curiosity is contagious.",
    "You have a natural ability to lead.",
    "Your creativity is truly awe-inspiring.",
    "You have a wonderful sense of style.",
    "Your dedication to your craft is admirable.",
    "Your hard work is paying off in spades.",
    "Your loyalty is unwavering.",
    "Your attention to detail is truly remarkable.",
    "You have a unique perspective that is truly valuable.",
    "Your intuition is impressive.",
    "Your generosity knows no bounds.",
    "Your honesty is refreshing.",
    "Your positive attitude is contagious.",
    "Your optimism is inspiring.",
    "You have a calming presence that eases any situation.",
    "Your adaptability is impressive.",
    "Your intelligence is matched only by your kindness.",
    "Your resilience is remarkable.",
    "You have a wonderful way of bringing people together.",
    "Your determination is unwavering.",
    "Your smile lights up the room.",
    "Your confidence is infectious.",
    "Your passion for life is inspiring.",
    "Your empathy is a true gift to those around you.",
    "Your curiosity is contagious.",
    "You have a natural ability to lead.",
    "Your creativity is truly awe-inspiring.",
    "You have a wonderful sense of style.",
    "Your dedication to your craft is admirable.",
    "Your hard work is paying off in spades."
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
