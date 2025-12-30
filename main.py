from google import genai

client = genai.Client(api_key="AIzaSyBVBRp_NzafL0Tt0TYUqGEPe5RVXb4aRXM")

response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents="Explain how AI works in a few words",
)

print(response.text)