from rest_framework import serializers

from .models import Booking, Destination, Experience, Testimonial, TourPackage


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = "__all__"


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = [
            "id",
            "name",
            "message",
            "rating",
        ]  # Exclude destination FK for nested view


class DestinationSerializer(serializers.ModelSerializer):
    experiences = ExperienceSerializer(many=True, read_only=True)
    testimonials = TestimonialSerializer(many=True, read_only=True)

    class Meta:
        model = Destination
        fields = [
            "id",
            "name",
            "description",
            "location",
            "image_url",
            "experiences",
            "testimonials",
        ]


class TourPackageSerializer(serializers.ModelSerializer):
    experiences = ExperienceSerializer(
        many=True, read_only=True
    )  # Use read_only for M2M display
    experience_ids = serializers.PrimaryKeyRelatedField(
        queryset=Experience.objects.all(),
        source="experiences",
        many=True,
        write_only=True,
    )

    class Meta:
        model = TourPackage
        fields = ["id", "title", "price", "duration", "experiences", "experience_ids"]


class BookingSerializer(serializers.ModelSerializer):
    tour_package = TourPackageSerializer(read_only=True)
    tour_package_id = serializers.PrimaryKeyRelatedField(
        queryset=TourPackage.objects.all(), source="tour_package", write_only=True
    )

    class Meta:
        model = Booking
        fields = [
            "id",
            "user_name",
            "email",
            "tour_package",
            "tour_package_id",
            "date",
            "number_of_people",
        ]
