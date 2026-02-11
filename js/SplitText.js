/**
 * SplitText Plugin for GSAP
 * Text splitting for character-by-character animations
 * 
 * Google Translate fix:
 *   - Animated (split) spans are marked with class="notranslate" and translate="no"
 *     so translation services never touch the individual char/word spans.
 *   - A hidden "ghost" span holds the original unsplit text for translators.
 *   - A MutationObserver watches <html> for the class/lang changes that Google
 *     Translate applies.  When translation is detected the animated spans are
 *     hidden and the ghost (now containing the translated sentence) is revealed.
 */

(function(window) {
    'use strict';

    /* --------------------------------------------------
       One-time global observer – detects Google Translate
       -------------------------------------------------- */
    var _translationDetected = false;
    var _translationCallbacks = [];

    function onTranslationDetected(cb) {
        if (_translationDetected) { cb(); return; }
        _translationCallbacks.push(cb);
    }

    // Google Translate adds a "translated-*" class (or changes lang) on <html>.
    // We watch for that once and fire all registered callbacks.
    var _htmlEl = document.documentElement;
    var _observer = new MutationObserver(function() {
        if (_translationDetected) return;
        // Chrome Google Translate adds class like "translated-ltr" or "translated-rtl"
        var cls = _htmlEl.className || '';
        if (cls.indexOf('translated') !== -1) {
            _translationDetected = true;
            _translationCallbacks.forEach(function(cb) { cb(); });
            _translationCallbacks = [];
            _observer.disconnect();
        }
    });
    _observer.observe(_htmlEl, { attributes: true, attributeFilter: ['class', 'lang'] });

    /* --------------------------------------------------
       SplitText class
       -------------------------------------------------- */
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
            
            // Store original text
            this.originalText = text;
            
            // Clear original content
            this.element.innerHTML = '';
            
            // --- Ghost span: full unsplit text for translators ---
            // Hidden by default; revealed when Google Translate kicks in.
            const ghost = document.createElement('span');
            ghost.className = 'translate-ghost';
            ghost.textContent = text;
            ghost.style.display = 'none';          // hidden until translation
            this.element.appendChild(ghost);
            
            // --- Animated wrapper: marked notranslate ---
            const animatedWrapper = document.createElement('span');
            animatedWrapper.setAttribute('translate', 'no');
            animatedWrapper.className = 'notranslate split-animated';
            animatedWrapper.setAttribute('aria-hidden', 'true');
            
            if (types.includes('words') || types.includes('chars')) {
                const words = text.trim().split(/\s+/);
                
                words.forEach((word, wordIndex) => {
                    const wordSpan = document.createElement('span');
                    wordSpan.className = 'word';
                    wordSpan.style.display = 'inline-block';
                    wordSpan.style.position = 'relative';
                    
                    if (types.includes('chars')) {
                        word.split('').forEach((char) => {
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
                    
                    animatedWrapper.appendChild(wordSpan);
                    this.words.push(wordSpan);
                    
                    if (wordIndex < words.length - 1) {
                        animatedWrapper.appendChild(document.createTextNode(' '));
                    }
                });
            }
            
            this.element.appendChild(animatedWrapper);
            
            if (types.includes('lines')) {
                this.lines = this.words;
            }

            // --- When translation is detected, swap visibility ---
            onTranslationDetected(function() {
                animatedWrapper.style.display = 'none';
                ghost.style.display = '';
            });
        }

        revert() {
            if (!this.element) return;
            
            const originalText = this.originalText || this.element.textContent;
            this.element.innerHTML = '';
            this.element.textContent = originalText;
            
            this.chars = [];
            this.words = [];
            this.lines = [];
        }
    }

    // Export to window
    window.SplitText = SplitText;

})(window);
