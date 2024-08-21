from django.http import JsonResponse

def greet(request):
    return JsonResponse({"message": "Hello, welcome to the site!"})

def status(request):
    return JsonResponse({"status": "Everything is running smoothly!"})
