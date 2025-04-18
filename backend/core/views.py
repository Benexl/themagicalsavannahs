from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters, pagination, viewsets

from .models import Booking, Destination, Experience, Testimonial, TourPackage
from .serializers import (
    BookingSerializer,
    DestinationSerializer,
    ExperienceSerializer,
    TestimonialSerializer,
    TourPackageSerializer,
)


# Optional: Define custom pagination
class StandardResultsSetPagination(pagination.PageNumberPagination):
    page_size = 10
    page_size_query_param = "page_size"
    max_page_size = 100


# Viewsets
class DestinationViewSet(viewsets.ModelViewSet):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer
    pagination_class = StandardResultsSetPagination  # Optional pagination
    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter,
    ]
    filterset_fields = ["location"]  # Example filter
    search_fields = ["name", "description", "location"]  # Example search
    ordering_fields = ["name", "location"]  # Example ordering


class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter,
    ]
    filterset_fields = ["destination", "emotion_tag"]
    search_fields = ["title", "description"]
    ordering_fields = ["title", "destination__name"]


class TourPackageViewSet(viewsets.ModelViewSet):
    queryset = TourPackage.objects.all()
    serializer_class = TourPackageSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter,
    ]
    filterset_fields = ["price", "duration"]
    search_fields = ["title"]
    ordering_fields = ["title", "price", "duration"]


class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter,
    ]
    filterset_fields = ["tour_package", "date"]
    search_fields = ["user_name", "email"]
    ordering_fields = ["date", "user_name"]


class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter,
    ]
    filterset_fields = ["destination", "rating"]
    search_fields = ["name", "message"]
    ordering_fields = ["rating", "destination__name"]
