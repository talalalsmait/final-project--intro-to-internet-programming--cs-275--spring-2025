'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('diamond-container');
    let size = 5;
    
    // Get user input
    try {
        const input = parseInt(prompt('Enter diamond size:'));
        if (input > 0) {
            size = input;
        }
    } catch {
        size = 5;
    }

    // Create star diamond pattern
    const createDiamond = (n) => {
        let diamond = '';
        const mid = Math.floor(n/2);
        
        for(let i = 0; i < n; i++) {
            const spaces = Math.abs(mid - i);
            const stars = n - 2 * spaces;
            diamond += ' '.repeat(spaces) + '*'.repeat(stars) + '\n';
        }
        return diamond;
    };

    // Set diamond content
    container.textContent = createDiamond(size);

    // Animation logic
    let position = -container.offsetWidth;
    let advance = 2
    const animate = () => {
        position += advance;
        if(position > window.innerWidth - size) {
            advance = -2;
        }
        if(position <= 0){
          advance = 2;
        }
        container.style.left = `${position}px`;
        requestAnimationFrame(animate);
    };

    // Start animation
    animate();
});