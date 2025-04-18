import os
import sys

# Add your project to sys.path
sys.path.insert(0, os.path.dirname(__file__))

# Set environment variables
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")

# Import Django WSGI handler
from django.core.wsgi import get_wsgi_application

application = get_wsgi_application()
