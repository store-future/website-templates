from django.http import JsonResponse

def test_api(request):
    data = {
        "message": "Hello from Django 🚀",
        "status": "success"
    }
    print("API endpoint hit: /api/test" + " - Responding with:", data)
    return JsonResponse(data)