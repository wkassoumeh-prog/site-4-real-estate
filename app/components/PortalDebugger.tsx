'use client';

import { useEffect } from 'react';

export default function PortalDebugger() {
  useEffect(() => {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/e714911c-8fe9-48cd-9f3c-cc6788d5445d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'PortalDebugger.tsx:useEffect-entry',message:'PortalDebugger mounted',data:{timestamp:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
    // #endregion

    const checkPortal = () => {
      const portal = document.querySelector('nextjs-portal');
      
      // Check if CSS rule exists in stylesheets
      let cssRuleFound = false;
      let cssRuleText = '';
      try {
        Array.from(document.styleSheets).forEach(sheet => {
          try {
            Array.from(sheet.cssRules).forEach(rule => {
              if (rule instanceof CSSStyleRule && rule.selectorText?.includes('nextjs-portal')) {
                cssRuleFound = true;
                cssRuleText = rule.cssText;
              }
            });
          } catch (e) {
            // Cross-origin stylesheet
          }
        });
      } catch (e) {
        // Error accessing stylesheets
      }
      
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/e714911c-8fe9-48cd-9f3c-cc6788d5445d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'PortalDebugger.tsx:checkPortal',message:'Portal check result',data:{exists:!!portal,computedDisplay:portal?window.getComputedStyle(portal).display:'N/A',inlineStyle:portal?.getAttribute('style')||'none',cssRuleFound,cssRuleText},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,C'})}).catch(()=>{});
      // #endregion

      if (portal) {
        const computedStyle = window.getComputedStyle(portal);
        
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/e714911c-8fe9-48cd-9f3c-cc6788d5445d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'PortalDebugger.tsx:portal-found',message:'Portal element found with styles',data:{display:computedStyle.display,visibility:computedStyle.visibility,opacity:computedStyle.opacity,position:computedStyle.position,width:computedStyle.width,height:computedStyle.height,inlineStyle:portal.getAttribute('style')},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,C'})}).catch(()=>{});
        // #endregion

        // Try to hide it programmatically
        portal.style.setProperty('display', 'none', 'important');
        
        // #region agent log
        fetch('http://127.0.0.1:7243/ingest/e714911c-8fe9-48cd-9f3c-cc6788d5445d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'PortalDebugger.tsx:portal-hide-attempt',message:'Attempted to hide portal via JS',data:{afterDisplay:window.getComputedStyle(portal).display},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
        // #endregion
      }
    };

    // Check immediately
    checkPortal();

    // Check after a delay (portal might be created later)
    const timeout1 = setTimeout(checkPortal, 100);
    const timeout2 = setTimeout(checkPortal, 500);
    const timeout3 = setTimeout(checkPortal, 1000);

    // Also observe DOM mutations
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName === 'NEXTJS-PORTAL' || (node.nodeType === 1 && (node as Element).querySelector?.('nextjs-portal'))) {
            // #region agent log
            fetch('http://127.0.0.1:7243/ingest/e714911c-8fe9-48cd-9f3c-cc6788d5445d',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'PortalDebugger.tsx:mutation-observer',message:'Portal element added to DOM',data:{nodeName:node.nodeName,hasStyle:node.nodeType===1?!!(node as Element).getAttribute('style'):false},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
            // #endregion
            checkPortal();
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      observer.disconnect();
    };
  }, []);

  return null;
}

