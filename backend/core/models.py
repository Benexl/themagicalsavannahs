from django.db import models


class Destination(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    image_url = models.URLField(max_length=2000, blank=True, null=True)

    def __str__(self):
        return self.name


class Experience(models.Model):
    EMOTION_TAG_CHOICES = [
        ("romantic", "Romantic"),
        ("adventurous", "Adventurous"),
        ("relaxing", "Relaxing"),
        ("cultural", "Cultural"),
        ("family-friendly", "Family-Friendly"),
    ]
    title = models.CharField(max_length=255)
    description = models.TextField()
    emotion_tag = models.CharField(max_length=50, choices=EMOTION_TAG_CHOICES)
    destination = models.ForeignKey(
        Destination, related_name="experiences", on_delete=models.CASCADE
    )

    def __str__(self):
        return self.title


class TourPackage(models.Model):
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    duration = models.PositiveIntegerField(help_text="Duration in days")
    experiences = models.ManyToManyField(Experience, related_name="tour_packages")

    def __str__(self):
        return self.title


class Booking(models.Model):
    user_name = models.CharField(max_length=255)
    email = models.EmailField()
    tour_package = models.ForeignKey(
        TourPackage, related_name="bookings", on_delete=models.CASCADE
    )
    date = models.DateField()
    number_of_people = models.PositiveIntegerField()

    def __str__(self):
        return f"Booking for {self.user_name} on {self.date}"


class Testimonial(models.Model):
    RATING_CHOICES = [(i, str(i)) for i in range(1, 6)]
    name = models.CharField(max_length=255)
    message = models.TextField()
    rating = models.IntegerField(choices=RATING_CHOICES)
    destination = models.ForeignKey(
        Destination, related_name="testimonials", on_delete=models.CASCADE
    )

    def __str__(self):
        return f"Testimonial by {self.name} for {self.destination.name}"
