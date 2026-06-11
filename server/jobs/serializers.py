from rest_framework import serializers
from .models import Job

class JobSerializer(serializers.ModelSerializer):

    recruiter = serializers.CharField(
        source="posted_by.username",
        read_only=True
    )

    class Meta:
        model = Job
        fields = "__all__"