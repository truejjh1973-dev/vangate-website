const { chromium } = require('playwright');

async function captureMobileScreenshots() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2
  });

  const styles = [
    { name: 'mobile-style1-modern-minimal', label: 'Modern Minimal (Mobile)' },
    { name: 'mobile-style2-industrial', label: 'Industrial (Mobile)' },
    { name: 'mobile-style3-vibrant', label: 'Vibrant (Mobile)' }
  ];

  for (const style of styles) {
    console.log(`Capturing ${style.label}...`);
    const page = await context.newPage();
    
    const filePath = `file://${process.cwd()}/website-prototypes.html`;
    await page.goto(filePath, { waitUntil: 'networkidle' });
    
    // Find the mobile frame section for this style
    const frames = await page.$$('.mobile-frame');
    const index = styles.indexOf(style);
    
    if (frames[index]) {
      await frames[index].scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      
      await page.screenshot({
        path: `D:/Vangate website/docs/preview-${style.name}.png`,
        fullPage: false,
        type: 'png'
      });
      console.log(`  Saved: preview-${style.name}.png`);
    }
    
    await page.close();
  }

  await browser.close();
  console.log('Mobile screenshots done!');
}

captureMobileScreenshots().catch(console.error);
