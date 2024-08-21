from django.contrib import admin
from django.urls import path, include
from mysite.views import home_view  # Import the view you created

urlpatterns = [
    path('', home_view, name='home'),  # Root URL
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),  # Include API URLs
]
