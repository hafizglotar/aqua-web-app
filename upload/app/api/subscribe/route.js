export async function POST(req) {
    try {
        const body = await req.json();
        const { email } = body;

        if (!email) {
            return new Response(JSON.stringify({ error: 'Email is required' }), { status: 400 });
        }

        // Simulate subscription logic (e.g., saving to a database)
        console.log('Subscribed:', email);

        return new Response(JSON.stringify({ message: 'Subscribed successfully!' }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
  