/**
 * SplitText Plugin for GSAP
 * Text splitting for character-by-character animations
 */

(function(window) {
    'use strict';

    class SplitText {
        constructor(element, options = {}) {
            this.element = typeof element === 'string' ? document.querySelector(element) : element;
            this.options = {
                type: options.type || 'chars',
                ...options
            };
            
            this.chars = [];
            this.words = [];
            this.lines = [];
            
            this.split();
        }

        split() {
            if (!this.element) return;
            
            const text = this.element.textContent;
            const types = this.options.type.split(',').map(t => t.trim());
            
            // Clear original content
            this.element.innerHTML = '';
            
            if (types.includes('words') || types.includes('chars')) {
                const words = text.trim().split(/\s+/);
                
                words.forEach((word, wordIndex) => {
                    const wordSpan = document.createElement('span');
                    wordSpan.className = 'word';
                    wordSpan.style.display = 'inline-block';
                    wordSpan.style.position = 'relative';
                    
                    if (types.includes('chars')) {
                        // Split into characters
                        word.split('').forEach((char, charIndex) => {
                            const charSpan = document.createElement('span');
                            charSpan.className = 'char';
                            charSpan.textContent = char;
                            charSpan.style.display = 'inline-block';
                            charSpan.style.position = 'relative';
                            wordSpan.appendChild(charSpan);
                            this.chars.push(charSpan);
                        });
                    } else {
                        wordSpan.textContent = word;
                    }
                    
                    this.element.appendChild(wordSpan);
                    this.words.push(wordSpan);
                    
                    // Add space after word (except last word)
                    if (wordIndex < words.length - 1) {
                        this.element.appendChild(document.createTextNode(' '));
                    }
                });
            }
            
            if (types.includes('lines')) {
                // Line splitting would require more complex layout calculations
                // This is a simplified version
                this.lines = this.words;
            }
        }

        revert() {
            if (!this.element) return;
            
            const originalText = this.element.textContent;
            this.element.innerHTML = originalText;
            
            this.chars = [];
            this.words = [];
            this.lines = [];
        }
    }

    // Export to window
    window.SplitText = SplitText;

})(window);
