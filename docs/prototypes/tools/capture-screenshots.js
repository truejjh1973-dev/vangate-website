const { chromium } = require('playwright');

async function captureScreenshots() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });

  const styles = [
    { name: 'style1-modern-minimal', label: 'Modern Minimal' },
    { name: 'style2-industrial', label: 'Industrial Professional' },
    { name: 'style3-vibrant', label: 'Vibrant Contemporary' }
  ];

  for (const style of styles) {
    console.log(`Capturing ${style.label}...`);
    const page = await context.newPage();
    
    const filePath = `file://${process.cwd()}/website-prototypes-pc.html`;
    await page.goto(filePath, { waitUntil: 'networkidle' });
    
    // Find the section for this style
    const sections = await page.$$('.style-section');
    const index = styles.indexOf(style);
    
    if (sections[index]) {
      await sections[index].scrollIntoViewIfNeeded();
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
  console.log('Done!');
}

captureScreenshots().catch(console.error);
