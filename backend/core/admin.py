from django.contrib import admin

from .models import Booking, Destination, Experience, Testimonial, TourPackage

# Register your models here.
admin.site.register(Destination)
admin.site.register(Experience)
admin.site.register(TourPackage)
admin.site.register(Booking)
admin.site.register(Testimonial)
