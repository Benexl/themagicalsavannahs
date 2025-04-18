from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (
    BookingViewSet,
    DestinationViewSet,
    ExperienceViewSet,
    TestimonialViewSet,
    TourPackageViewSet,
)

router = DefaultRouter()
router.register(r"destinations", DestinationViewSet)
router.register(r"experiences", ExperienceViewSet)
router.register(r"tour-packages", TourPackageViewSet)
router.register(r"bookings", BookingViewSet)
router.register(r"testimonials", TestimonialViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
