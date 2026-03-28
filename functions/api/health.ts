export async function onRequest(context) {
  return new Response(JSON.stringify({ 
    status: "ok", 
    service: "Spread Gods Glory - Core API",
    timestamp: new Date().toISOString()
  }), {
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*" 
    }
  });
}
