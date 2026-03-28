export async function onRequestPost({ request, env }) {
  try {
    const payload = await request.json();
    
    // Vapi webhooks wrap their event data inside a 'message' property
    const message = payload.message || payload;

    // We specifically only care about intercepting the end-of-call report
    if (message.type === 'end-of-call-report') {
      const transcript = message.transcript || "No transcript available.";
      const summary = message.summary || "No summary available.";
      const recordingUrl = message.recordingUrl || message.stereoRecordingUrl || "No recording available.";

      const emailHtml = `
        <div style="font-family: sans-serif; color: #333;">
          <h2 style="color: #8B0000; border-bottom: 2px solid #8B0000; padding-bottom: 10px;">Spread God's Glory: AI Prayer Session Completed</h2>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>Session Summary:</strong></p>
            <p>${summary}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <p><strong>Recording URL:</strong> <a href="${recordingUrl}" style="color: #8B0000; font-weight: bold;">Listen to audio here</a></p>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
          
          <h3>Full Transcript:</h3>
          <pre style="background: #f1f1f1; padding: 15px; border-radius: 8px; white-space: pre-wrap; font-size: 14px;">${transcript}</pre>
          
          <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
          
          <p style="font-weight: bold; text-align: center;">
            <a href="https://dashboard.aipilots.site/" style="color: #8B0000; text-decoration: none; padding: 10px 20px; border: 2px solid #8B0000; border-radius: 5px; display: inline-block;">View in Master CRM Dashboard</a>
          </p>
        </div>
      `;

      // Dispatch the email dynamically via Resend REST API using env variable
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Spread Gods Glory <onboarding@resend.dev>', // Update this to your verified domain in production
          to: ['chanise777@gmail.com'],
          subject: 'New AI Voice Prayer Session Completed',
          html: emailHtml
        })
      });

      if (!resendResponse.ok) {
        console.error("Failed to send Resend email", await resendResponse.text());
        return new Response(JSON.stringify({ error: "Email failure" }), { status: 500 });
      }
    }

    return new Response(JSON.stringify({ success: true }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });

  } catch (error) {
    console.error("Webhook processing error:", error);
    return new Response(JSON.stringify({ error: "Invalid webhook payload structure." }), { status: 400 });
  }
}
