window.compliments = [
    "You have such a calming presence.",
    "You're genuinely kind-hearted.",
    "You radiate positivity.",
    "Your integrity is admirable.",
    "You're incredibly thoughtful.",
    "You're someone people feel safe around.",
    "Your authenticity is refreshing.",
    "You have a beautiful way of seeing the world.",
    "You're emotionally intelligent.",
    "You lead with empathy.",
    "You have a sharp mind.",
    "You're a quick learner.",
    "Your perspective is always insightful.",
    "You explain things so clearly.",
    "You ask the best questions.",
    "You're wonderfully curious.",
    "Your intelligence is quietly powerful.",
    "You always make people think deeper.",
    "You're great at making connections others miss.",
    "You make learning feel exciting.",
    "You light up the room.",
    "Your laugh is contagious.",
    "You have great comedic timing.",
    "You know how to find joy in small things.",
    "You bring fun wherever you go.",
    "Your sense of humor is effortless.",
    "You have a great vibe.",
    "You make people feel more alive.",
    "You're naturally entertaining.",
    "You brighten people's days.",
    "You're a great listener.",
    "You make people feel heard.",
    "You're someone people can count on.",
    "You give amazing advice.",
    "You care deeply, and it shows.",
    "Your support means more than you know.",
    "You're incredibly patient.",
    "You make others feel less alone.",
    "You handle hard conversations with grace.",
    "You have a gift for comforting others.",
    "You treat everyone with respect.",
    "You carry yourself with quiet confidence.",
    "You stand your ground with dignity.",
    "You honor your values.",
    "You speak with purpose.",
    "You show strength in subtle ways.",
    "You have a humble strength.",
    "You lead by example.",
    "You never make others feel small.",
    "You hold space for others beautifully.",
    "You give your all.",
    "You're incredibly dedicated.",
    "You have great focus.",
    "You're consistent in the best way.",
    "You have a great sense of style.",
    "Your smile lights up your whole face.",
    "You have a soothing voice.",
    "You have a presence that draws people in.",
    "You create space for others to be themselves.",
    "People open up to you naturally.",
    "You've come so far.",
    "You're doing better than you think.",
    "You're becoming someone amazing."
];

function newCompliment() {
    const complimentElement = document.getElementById("compliment");
    const randomCompliment = window.compliments[Math.floor(Math.random() * window.compliments.length)];

    // Add fade out effect
    complimentElement.style.opacity = '0';
    complimentElement.style.transform = 'translateY(20px)';

    setTimeout(() => {
        complimentElement.innerHTML = randomCompliment;
        complimentElement.style.opacity = '1';
        complimentElement.style.transform = 'translateY(0)';
        createSparkles();
    }, 300);
}

function createSparkles() {
    const sparkleCount = 8;
    const container = document.querySelector('.container');

    for (let i = 0; i < sparkleCount; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            container.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 2000);
        }, i * 100);
    }
}

// Device detection
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        (window.innerWidth <= 768 && 'ontouchstart' in window);
}

// Update instruction text based on device
function updateInstruction() {
    const instructionElement = document.querySelector('.instruction');
    if (isMobileDevice()) {
        instructionElement.textContent = 'Tap anywhere for a new compliment';
    } else {
        instructionElement.textContent = 'Press spacebar for a new compliment';
    }
}

// Keyboard event for desktop
document.body.onkeyup = function (e) {
    if (e.which == 32) {
        newCompliment();
    }
};

// Touch events for mobile
document.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent default touch behavior
    newCompliment();
});

// Click event as fallback
document.addEventListener('click', () => {
    if (isMobileDevice()) {
        newCompliment();
    }
});

// Initialize with smooth transition
document.addEventListener('DOMContentLoaded', () => {
    const complimentElement = document.getElementById("compliment");
    complimentElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    updateInstruction();
    newCompliment();
});

// Update instruction on window resize (for device orientation changes)
window.addEventListener('resize', updateInstruction);