from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializers
from django.contrib.auth.hashers import make_password

# Create your views here.
@api_view(['POST'])
def register_user(request):
    data = request.data
    serializer = UserSerializers(data=data)
    if serializer.is_valid():
        serializer.validated_data['password'] = make_password(serializer.validated_data['password'])
        serializer.save()
        return Response({'message': 'Registered successfully!'}, status=201)