export const getWelcomeEmailTemplate = (name?: string) => {
  const greeting = name ? `Hi ${name}` : 'Hi there';
  
  return {
    subject: 'Welcome to Smart Home Explorer!',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Smart Home Explorer</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin: 0; font-size: 28px;">Smart Home Explorer</h1>
            <p style="color: #666; margin: 5px 0 0 0; font-size: 16px;">Your guide to the connected home</p>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border-radius: 8px; margin-bottom: 30px;">
            <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 24px;">Welcome aboard! 🏠</h2>
            <p style="margin: 0 0 15px 0; font-size: 16px;">${greeting},</p>
            <p style="margin: 0 0 15px 0; font-size: 16px;">Thanks for subscribing to Smart Home Explorer! You've just taken the first step toward creating your perfect connected home.</p>
            <p style="margin: 0; font-size: 16px;">Here's what you can expect from us:</p>
          </div>
          
          <div style="margin-bottom: 30px;">
            <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 20px;">What's coming your way:</h3>
            <ul style="padding-left: 20px; margin: 0;">
              <li style="margin-bottom: 10px; font-size: 16px;"><strong>Expert Reviews:</strong> In-depth analysis of the latest smart home devices</li>
              <li style="margin-bottom: 10px; font-size: 16px;"><strong>Setup Guides:</strong> Step-by-step instructions to get your devices working perfectly</li>
              <li style="margin-bottom: 10px; font-size: 16px;"><strong>Smart Deals:</strong> Exclusive discounts on top-rated smart home products</li>
              <li style="margin-bottom: 10px; font-size: 16px;"><strong>Pro Tips:</strong> Advanced automation ideas and troubleshooting help</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-bottom: 30px;">
            <a href="https://smarthomeexplorer.com" 
               style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block;">
              Explore Our Latest Articles
            </a>
          </div>
          
          <div style="background: #fee2e2; border-left: 4px solid #ef4444; padding: 15px; margin-bottom: 30px;">
            <p style="margin: 0; font-size: 14px; color: #991b1b;">
              <strong>Just getting started?</strong> Check out our beginner's guide to smart home automation - it's the perfect place to begin your journey!
            </p>
          </div>
          
          <div style="text-align: center; font-size: 14px; color: #666; border-top: 1px solid #e2e8f0; padding-top: 20px;">
            <p style="margin: 0 0 10px 0;">Questions? Just reply to this email - we'd love to help!</p>
            <p style="margin: 0;">
              Smart Home Explorer Team<br>
              <a href="mailto:support@smarthomeexplorer.com" style="color: #2563eb;">support@smarthomeexplorer.com</a>
            </p>
          </div>
        </body>
      </html>
    `,
    text: `
${greeting},

Welcome to Smart Home Explorer! Thanks for subscribing to our newsletter.

Here's what you can expect from us:
• Expert Reviews: In-depth analysis of the latest smart home devices  
• Setup Guides: Step-by-step instructions to get your devices working perfectly
• Smart Deals: Exclusive discounts on top-rated smart home products
• Pro Tips: Advanced automation ideas and troubleshooting help

Visit our website: https://smarthomeexplorer.com

Questions? Just reply to this email - we'd love to help!

Smart Home Explorer Team
support@smarthomeexplorer.com
    `
  };
};